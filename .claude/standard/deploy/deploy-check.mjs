#!/usr/bin/env node
/**
 * After a deploy: is the live site the release that was just cut? (ADR-0162, design 2.5 step 9)
 *
 *   npm run deploy-check -- [<release target>] <revision | release-N> [--wait <seconds>]
 *   npm run deploy-check -- hosting:members 780        (the script is node .claude/standard/deploy/deploy-check.mjs)
 *   npm run deploy-check -- release-780                (the target may be left out when the project has one release line)
 *
 * 1. `/version.json` is a valid release file whose revision is the one expected, polled every 10 s for up to --wait
 *    seconds (60): the CDN's propagation. Anything else stops the check here, since every later answer would be about
 *    another release.
 * 2. Every copy the line declares is live and carries the same release (the worker, the page and the release file went out
 *    together).
 * 3. When the line cuts notes, the live history is valid and has an entry for the live revision.
 * 4. Every header block of the line's firebase.json hosting block is sampled: the sampled paths answer 200 with each
 *    declared header, exactly. A block with no sample (no key, or an empty list that no page names a file for), or a sample
 *    for no block, is an error: the check cannot say what it did not look at.
 * 5. Nothing private is served: a file only the `ignore` list keeps off the site is probed live. "Not served" is a 404 OR
 *    the site's fallback page byte for byte; anything else, the file's own bytes, is a leak.
 *
 * Each failure prints `[deploy-check] FAIL <url>: <reason>`; any failure exits 2, a usage error 1.
 */
import { readFileSync, realpathSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { hasNoSample, loadConfig } from './config.mjs';
import { copyProblems, releaseProblems } from './release-file.mjs';
import { releaseNotesProblems } from './release-notes.mjs';
import { hostingBlockFor } from './targets.mjs';

export const DEFAULT_WAIT_S = 60;
export const POLL_INTERVAL_MS = 10_000;
const REQUEST_TIMEOUT_MS = 20_000;
const EXIT_FAILED = 2;

/** A repo path under siteRoot as the URL path hosting serves it: public/js/a.js -> js/a.js. */
export const urlPath = (siteRoot, repoPath) => {
  const rel = resolve('/', repoPath).slice(1);
  const base = resolve('/', siteRoot).slice(1);
  return (base === '' ? rel : rel.slice(base.length + 1)).replaceAll('\\', '/');
};

/**
 * The header blocks of a hosting block, held to the samples one for one.
 * @param {{ headers?: object[] }} hosting @param {{ samples: object }} check @param {string} label
 */
export function headerBlocks(hosting, check, label) {
  const blocks = hosting.headers ?? [];
  const unsampled = blocks.filter((b) => !(b.source in check.samples) || hasNoSample(check, b.source)).map((b) => b.source);
  if (unsampled.length > 0) throw new Error(`${label} declares header blocks deploy-check has no sample for: ${unsampled.join(', ')}`);
  const declared = new Set(blocks.map((b) => b.source));
  const orphaned = Object.keys(check.samples).filter((source) => !declared.has(source));
  if (orphaned.length > 0) throw new Error(`deploy-check samples header blocks ${label} no longer declares: ${orphaned.join(', ')}`);
  return blocks;
}

/** One GET read to an Answer; a request that fails is an Answer with status 0 and the reason as its body. */
async function request(fetchImpl, url) {
  try {
    const response = await fetchImpl(url, { redirect: 'manual', signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
    const headers = {};
    response.headers.forEach((value, key) => { headers[key.toLowerCase()] = value; });
    return { status: response.status, headers, body: await response.text() };
  } catch (error) {
    return { status: 0, headers: {}, body: `request failed (${error?.cause?.code || error?.message || String(error)})` };
  }
}

/** Why a sampled answer is not what firebase.json declares, or []. */
export function sampleProblems(answer, declared) {
  if (answer.status !== 200) return [`answered ${answer.status || answer.body}, not 200`];
  return declared.flatMap(({ key, value }) => {
    const actual = answer.headers[key.toLowerCase()];
    return actual === value ? [] : [`${key} "${actual ?? ''}", not "${value}"`];
  });
}

/** Whether a probed private path is served: a 404 or the single-page fallback is "not served". */
export function privateProblems(answer, fallbackBody) {
  if (answer.status === 404) return [];
  if (answer.status === 200 && answer.body === fallbackBody) return [];
  if (answer.status === 200) return ['is served; hosting must not ship it (the `ignore` list in firebase.json)'];
  return [`answered ${answer.status || answer.body}, neither 404 nor the site's fallback page`];
}

/** The paths to sample for one header block: its fixed samples, or the one a page names (hashed build files). */
async function samplePaths(get, fail, check, source) {
  const found = check.discovered[source];
  if (!found) return [...check.samples[source]];
  const page = await get(found.from);
  const match = page.status === 200 ? found.pattern.exec(page.body) : null;
  if (!match) {
    fail(found.from, [`names no file for the ${source} header block (${found.pattern}); nothing to sample`]);
    return [];
  }
  return [match[0]];
}

/** Poll /version.json until it names the revision or the wait runs out. Returns the live release, or null. */
async function awaitRevision(get, fail, expected, options) {
  const { waitMs = DEFAULT_WAIT_S * 1000, intervalMs = POLL_INTERVAL_MS, log = () => {}, sleep, now } = options;
  const deadline = now().getTime() + waitMs;
  for (;;) {
    const answer = await get('/version.json');
    let body = null;
    let invalid = ['is not JSON'];
    try {
      body = answer.status === 200 ? JSON.parse(answer.body) : null;
      invalid = releaseProblems(body);
    } catch { /* reported below */ }
    const revision = invalid.length === 0 ? body.revision : null;
    if (revision === expected) return body;
    const why = answer.status === 0 ? answer.body : answer.status !== 200 ? `answered ${answer.status}`
      : revision === null ? `is not a release file { "revision", "date", "commit" } (${invalid.join('; ')})` : `serves release ${revision}`;
    const remaining = deadline - now().getTime();
    if (remaining <= 0) {
      fail('/version.json', [`${why}, not release ${expected} (waited ${Math.round(waitMs / 1000)} s for the CDN); the live release is not this one`]);
      return null;
    }
    log(`/version.json ${why}; waiting for release ${expected} (the CDN propagates in under a minute)`);
    await sleep(Math.min(intervalMs, remaining));
  }
}

async function copyProblemsLive(get, line, copy, live) {
  const answer = await get(`/${urlPath(line.siteRoot, copy.path)}`);
  if (answer.status !== 200) return [`answered ${answer.status || answer.body}, not 200`];
  return copyProblems(copy, live, answer.body).map((p) => `${p}; the page and /version.json are not the same release`);
}

async function notesLive(get, line, live) {
  const answer = await get(`/${urlPath(line.siteRoot, line.notes.history)}`);
  if (answer.status !== 200) return [`answered ${answer.status || answer.body}, not 200`];
  let history;
  try { history = JSON.parse(answer.body); } catch { return ['is not JSON']; }
  const problems = releaseNotesProblems(history);
  if (problems.length > 0) return [`is not a release history (${problems.join('; ')})`];
  return history.some((entry) => entry.revision === live.revision) ? [] : [`has no entry for release ${live.revision}; the live release went out without its notes`];
}

/**
 * Check the live site against the revision it should carry. Never throws for anything the server answers.
 * @param {{ origin: string, expected: number, hosting: object, line: object, fetch: Function, sleep: Function, now: () => Date,
 *   waitMs?: number, intervalMs?: number, log?: Function, label?: string }} options
 * @returns {Promise<{ failures: { url: string, reason: string }[], sampled: number, probed: number, live: object | null }>}
 */
export async function checkDeployment(options) {
  const { origin, expected, hosting, line } = options;
  const blocks = headerBlocks(hosting, line.check, options.label ?? 'firebase.json hosting');
  const get = (path) => request(options.fetch, `${origin}${path}`);
  const failures = [];
  const fail = (path, reasons) => { if (reasons.length) failures.push({ url: `${origin}${path}`, reason: reasons.join('; ') }); };
  const live = await awaitRevision(get, fail, expected, options);
  if (!live) return { failures, sampled: 0, probed: 0, live: null };
  for (const copy of line.copies) fail(`/${urlPath(line.siteRoot, copy.path)}`, await copyProblemsLive(get, line, copy, live));
  if (line.notes) fail(`/${urlPath(line.siteRoot, line.notes.history)}`, await notesLive(get, line, live));
  let sampled = 0;
  for (const block of blocks) {
    for (const path of await samplePaths(get, fail, line.check, block.source)) {
      sampled += 1;
      fail(path, sampleProblems(await get(path), block.headers));
    }
  }
  const fallback = (await get('/index.html')).body;
  for (const path of line.check.privatePaths) fail(path, privateProblems(await get(path), fallback));
  return { failures, sampled, probed: line.check.privatePaths.length, live };
}

/** Print the failures; the exit code for them. */
export function report(result, origin, expected, log, error) {
  if (result.failures.length === 0) {
    log(`OK ${origin} serves release ${expected}: ${result.sampled} sampled paths answer 200 with their headers, ${result.probed} private paths are not served`);
    return 0;
  }
  result.failures.forEach(({ url, reason }) => error(`FAIL ${url}: ${reason}`));
  return EXIT_FAILED;
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const USAGE = 'usage: npm run deploy-check -- [<release target, e.g. hosting:members>] <revision | release-N> [--wait <seconds>]';

/** @param {string[]} argv @returns {{ target: string | null, expected: number, waitMs: number }} target is null when it was left out */
export function parseCli(argv) {
  const { values, positionals } = parseArgs({ args: argv, allowPositionals: true, options: { wait: { type: 'string' } } });
  if (positionals.length < 1 || positionals.length > 2) throw new Error(USAGE);
  const revisionArg = positionals[positionals.length - 1];
  const target = positionals.length === 2 ? positionals[0] : null;
  const digits = /^(?:release-)?([1-9]\d*)$/.exec(revisionArg);
  if (!digits || !Number.isSafeInteger(Number(digits[1]))) throw new Error(`${revisionArg} is not a release revision (a positive whole number, or release-N)\n${USAGE}`);
  const wait = values.wait === undefined ? DEFAULT_WAIT_S : Number(values.wait);
  if (!Number.isInteger(wait) || wait < 0) throw new Error(`--wait ${values.wait} is not a whole number of seconds\n${USAGE}`);
  return { target, expected: Number(digits[1]), waitMs: wait * 1000 };
}

/** The release line to check: the one named, or the project's only one. */
export function pickTarget(releases, target) {
  const keys = Object.keys(releases);
  if (target !== null) {
    if (!releases[target]) throw new Error(`"${target}" is not a release line of this project (${keys.join(', ')})\n${USAGE}`);
    return target;
  }
  if (keys.length === 1) return keys[0];
  throw new Error(`this project has several release lines (${keys.join(', ')}): name one\n${USAGE}`);
}

async function main(argv, cwd) {
  const cli = parseCli(argv);
  const readJson = (name) => JSON.parse(readFileSync(join(cwd, name), 'utf8'));
  const firebaseJson = readJson('firebase.json');
  // Only the live site is read here, so a sibling repo's checkout is not required (as in verify.mjs).
  const config = await loadConfig(cwd, { repoBase: cwd, firebaseJson, firebaserc: readJson('.firebaserc'), isCheckoutWithOrigin: () => true });
  const target = pickTarget(config.releases, cli.target);
  const line = config.releases[target];
  const result = await checkDeployment({
    origin: line.origin, expected: cli.expected, hosting: hostingBlockFor(firebaseJson, target), line, waitMs: cli.waitMs, label: target,
    fetch: globalThis.fetch, now: () => new Date(), sleep: (ms) => new Promise((r) => setTimeout(r, ms)), log: (l) => console.log(`[deploy-check] ${l}`),
  });
  return report(result, line.origin, cli.expected, (l) => console.log(`[deploy-check] ${l}`), (l) => console.error(`[deploy-check] ${l}`));
}

const isEntryPoint = process.argv[1] && realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url));
if (isEntryPoint) {
  main(process.argv.slice(2), process.cwd()).then((code) => { process.exitCode = code; }, (error) => {
    console.error(`[deploy-check] ${error.message}`);
    process.exitCode = 1;
  });
}
