#!/usr/bin/env node
/**
 * npm run deploy -- --only <targets>: the one release and deploy mechanism for every Firebase app
 * (docs/deploy-standard-design.md). It ships origin/main from a throwaway worktree, cuts a counted release, builds through
 * the project's hook, commits `chore: release N`, tags `release-N`, pushes both atomically (re-cutting on a raced push),
 * deploys the named targets with the pinned CLI, checks the live site, runs `afterRelease` and fast-forwards the caller.
 *
 * The run, in order, stopping at the first failure (design 2.5):
 *   1  parse the list (syntax)            2  fetch, report what is not shipping, add the worktree(s), load the config from
 *   the shipped tree and resolve the list 3  pinned CLI, root and functions installs (checked, linked)   4  the checks
 *   (../checks.mjs: typecheck, lint, unit tests, whichever the project defines; a failure refuses), then preflight
 *   5  the release line: tag check, cut, build, commit, tag, atomic push   6  functions record, beforeFunctions
 *   7  assemble   8  firebase deploy   9  live check, check hook   10  afterRelease   11  fast-forward the caller
 *
 * Everything external goes through `ctx.run` / `ctx.now` / `ctx.fetch` / `ctx.sleep`, so claude-config's tests drive it.
 * Exit codes: 0 done, 1 refused or failed, 2 the live check failed (roll back), 75 the pinned CLI is not installed.
 */
import { randomUUID } from 'node:crypto';
import { existsSync, lstatSync, readFileSync, realpathSync, symlinkSync } from 'node:fs';
import { constants as osConstants } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runChecks } from '../checks.mjs';
import { CONFIG_FILE, loadConfig } from './config.mjs';
import { checkDeployment, headerBlocks } from './deploy-check.mjs';
import { createRunner, deployArgs, hasFunctionsTarget, killRunning, pinnedCli } from './firebase-cli.mjs';
import { writeFunctionsRelease } from './functions-release.mjs';
import {
  addWorktree, changedBetween, checkoutHasOrigin, commitRelease, deployCacheRoot, fastForwardCaller, fetchMain, gitDirOf, headSha,
  highestRemoteRevision, modifiedTracked, notShippingReport, pushWithRecut, releaseTag, removeWorktree, removeWorktreeSync, worktreePathFor,
} from './git.mjs';
import { installProblems } from './install-check.mjs';
import { LockHeldError, acquireLock, releaseLock } from './lock.mjs';
import { COMMIT_LENGTH, SEED_REVISION, currentRelease, cutRelease, localDay } from './release-file.mjs';
import { TargetError, hostingBlockFor, parseOnly, resolveTargets } from './targets.mjs';
import { RUN_ID_VAR } from './predeploy-guard.mjs';

const EXIT_CHECK_FAILED = 2;
const SIGNALS = ['SIGINT', 'SIGTERM', 'SIGHUP'];
const MAX_LISTED_PROBLEMS = 20;
/** What step 2 validated and step 3 checked the installs against: a recut on a new origin/main must ship the same ones. */
const VALIDATED_FILES = ['firebase.json', '.firebaserc', CONFIG_FILE, 'package-lock.json'];

const fail = (message, exitCode = 1) => Object.assign(new Error(message), { exitCode });
const readJson = (file, what) => {
  try { return JSON.parse(readFileSync(file, 'utf8')); } catch (error) { throw fail(`cannot read ${what} (${file}): ${error.message}`); }
};

// ---------------------------------------------------------------------------
// What is left behind on every way out: worktrees and locks. No tag is made before its push lands, so none is to drop.
// ---------------------------------------------------------------------------

function createCleanup(cacheRoot) {
  const worktrees = [];
  const locks = [];
  return {
    cacheRoot,
    trackWorktree: (repo, worktree) => worktrees.push({ repo, worktree }),
    trackLock: (file) => locks.push(file),
    async run(run) {
      for (const { repo, worktree } of worktrees) await removeWorktree(run, repo, worktree, cacheRoot);
      locks.forEach(releaseLock);
    },
    runSync(runSync) {
      for (const { repo, worktree } of worktrees) removeWorktreeSync(runSync, repo, worktree, cacheRoot);
      locks.forEach(releaseLock);
    },
  };
}

/** On SIGINT / SIGTERM / SIGHUP: stop what is running in the worktrees, remove them, give the locks up, exit. */
function installSignalCleanup(cleanup, runSync) {
  const handlers = SIGNALS.map((signal) => {
    const handler = () => { killRunning(); cleanup.runSync(runSync); process.exit(128 + osConstants.signals[signal]); };
    process.once(signal, handler);
    return [signal, handler];
  });
  return () => handlers.forEach(([signal, handler]) => process.removeListener(signal, handler));
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

async function locate(run, dir) {
  const git = async (args) => (await run('git', ['-C', dir, ...args], { quiet: true, cwd: dir })).stdout.trim();
  const repo = await git(['rev-parse', '--show-toplevel']);
  return { repo, primary: resolve(await git(['rev-parse', '--path-format=absolute', '--git-common-dir']), '..') };
}

/** The runner for a deploy whose repos are `places`: each repo's pinned .bin comes first for commands run inside it. */
function runnerFor(deps, places) {
  const scopes = places.filter((p) => p.primary).map(({ repo, primary, worktree }) => ({ roots: [repo, primary, worktree].filter(Boolean), bin: join(primary, 'node_modules', '.bin') }));
  return createRunner({ cwd: places[0].worktree ?? places[0].repo, scopes, env: deps.env, stdout: deps.out, stderr: deps.err });
}

/** The ctx once a line's release is cut: its hooks see the release in `ctx.lines[key].release`. */
const withRelease = (ctx, key, release) => ({ ...ctx, lines: { ...ctx.lines, [key]: { ...ctx.lines[key], release } } });

/** A hook's context: the same ctx with `run` starting in `cwd`. */
const hookContext = (ctx, cwd) => ({ ...ctx, run: (cmd, args, opts = {}) => ctx.run(cmd, args, { cwd, ...opts }) });

async function runHook(hook, label, ctx, ...args) {
  if (hook === null) return;
  try { await hook(ctx, ...args); } catch (error) { throw fail(`the ${label} hook refused: ${error.message}`); }
}

async function openRepo(ctx, where) {
  const lock = acquireLock(await gitDirOf(ctx.run, where.repo));
  ctx.cleanup.trackLock(lock);
  const main = await fetchMain(ctx.run, where.repo);
  (await notShippingReport(ctx.run, where.repo)).forEach((line) => ctx.log(line));
  ctx.log(`Shipping origin/main ${main.short}  ${main.subject}  (${where.repo})`);
  const worktree = worktreePathFor(ctx.cacheRoot, where.repo);
  ctx.cleanup.trackWorktree(where.repo, worktree);
  await addWorktree(ctx.run, where.repo, worktree, main.sha, ctx.cacheRoot);
  linkRootInstall(where.primary, worktree);
  return { ...where, worktree, main };
}

// ---------------------------------------------------------------------------
// Steps
// ---------------------------------------------------------------------------

/** Refuse unless the primary's install at `modules` matches `lock`, the lock being shipped. @param {{ requireDev: boolean, fix: string, why: string }} how */
function assertInstall(modules, lock, how) {
  const problems = installProblems(lock, modules, { requireDev: how.requireDev });
  if (problems.length === 0) return;
  throw fail(`ABORTED: ${modules} was not installed from the lock being shipped:\n${problems.slice(0, MAX_LISTED_PROBLEMS).map((p) => `  ${p}`).join('\n')}\n`
    + `  ${how.why}\n  Fix it:  ${how.fix}`);
}

/** Link the primary's install into the worktree, unless the worktree already has something there. */
function linkInto(modules, link) {
  if (lstatSync(link, { throwIfNoEntry: false }) === undefined) symlinkSync(modules, link);
}

/**
 * The worktree sits in the cache, not under the primary, so node resolution cannot walk up into the primary's node_modules:
 * the root install is linked in as soon as the worktree exists, before deploy.config.mjs (and the hooks and scripts it
 * imports) is loaded from it. Whether that install matches the lock is checked later, by {@link linkInstalls}.
 */
function linkRootInstall(primary, worktree) {
  const modules = join(primary, 'node_modules');
  if (existsSync(modules)) linkInto(modules, join(worktree, 'node_modules'));
}

/** The functions sources of firebase.json, or [] when it declares none. */
function declaredFunctionsSources(firebaseJson) {
  return [firebaseJson.functions].flat().filter((f) => f && typeof f.source === 'string').map((f) => f.source);
}

/**
 * 3: every repo's root install against the lock being shipped (linked into its worktree when that was opened, see
 * {@link linkRootInstall}). The project's functions installs get the same check, and are linked, when it declares functions
 * (required when a functions target is listed, optional otherwise), so a preflight or build hook run for `--only hosting`
 * finds node_modules where the tool looks for it.
 */
function linkInstalls(repos, project, firebaseJson, functionsListed) {
  repos.forEach(({ primary, worktree }) => {
    const modules = join(primary, 'node_modules');
    const lock = join(worktree, 'package-lock.json');
    if (existsSync(lock) && !existsSync(modules)) throw fail(`ABORTED: ${modules} does not exist.\n  Fix it:  (cd ${JSON.stringify(primary)} && npm ci)`);
    if (existsSync(lock)) {
      assertInstall(modules, lock, { requireDev: true, why: 'A build or preflight from a stale install is wrong.', fix: `pull main into ${primary}, then (npm ci), and re-run.` });
    }
  });
  const { primary, worktree } = project;
  const sources = functionsListed ? functionsSources(firebaseJson) : declaredFunctionsSources(firebaseJson);
  for (const source of sources) {
    const modules = join(primary, source, 'node_modules');
    if (!existsSync(modules)) {
      if (!functionsListed) continue;
      throw fail(`ABORTED: ${modules} does not exist; the CLI cannot load the functions bundle.\n  Fix it:  (cd ${JSON.stringify(join(primary, source))} && npm ci)`);
    }
    const lock = join(worktree, source, 'package-lock.json');
    if (functionsListed || existsSync(lock)) {
      assertInstall(modules, lock, {
        requireDev: false, fix: `pull main into ${primary}, then (cd ${source} && npm ci), and re-run.`,
        why: functionsListed ? 'Deploying would discover main\'s functions through a different dependency tree.' : 'A build or preflight from a stale install is wrong.',
      });
    }
    linkInto(modules, join(worktree, source, 'node_modules'));
  }
}

function functionsSources(firebaseJson) {
  const sources = declaredFunctionsSources(firebaseJson);
  if (sources.length === 0 || [firebaseJson.functions].flat().filter(Boolean).some((f) => typeof f.source !== 'string')) throw fail('a functions target is listed but firebase.json has no functions block with a source');
  return sources;
}

/**
 * A recut after a raced push ships the NEW origin/main, but the run validated the list, the config, the header samples and
 * the installs against the old one (step 2 and 3). When any of those files moved in between, the validation no longer
 * describes what would ship (a header block the live check never samples, a lock the install does not match): refuse.
 */
async function assertValidatedTree(ctx, project, validatedFiles) {
  const moved = await changedBetween(ctx.run, project.worktree, project.main.sha, validatedFiles);
  if (moved.length === 0) return;
  throw fail(`REFUSED: origin/main changed ${moved.join(', ')} since this run validated it at ${project.main.short}; the new tree has not been checked. `
    + 'Nothing stands: re-run to deploy it.');
}

/** A hook may write build output, never change a tracked file: what ships has to be origin/main. */
async function assertTrackedUnchanged(ctx, worktree, label, allowed = []) {
  const stray = (await modifiedTracked(ctx.run, worktree)).filter((path) => !allowed.includes(path));
  if (stray.length === 0) return;
  throw fail(`REFUSED: the ${label} hook changed tracked files that no commit holds, so what would ship is not origin/main:\n${stray.map((p) => `  ${p}`).join('\n')}\n`
    + '  A hook writes build output (ignored or untracked files) only; a change to a tracked file belongs in a commit on main.');
}

/**
 * 4: the checks of each repo's shipped tree, unless they already passed at its current commit. A failure refuses before
 * anything is cut or uploaded. A recut after a raced push lands on a newer origin/main, so it runs them again there.
 */
async function assertChecked(ctx, worktree) {
  const head = await headSha(ctx.run, worktree);
  if (ctx.checked.get(worktree) === head) return;
  try {
    const ran = await runChecks(ctx.run, worktree, ctx.log);
    ctx.log(ran.length === 0 ? `no checks defined in ${worktree}/package.json` : `checks passed: ${ran.join(', ')}`);
  } catch (error) {
    throw fail(`REFUSED: the checks failed on origin/main, so nothing was cut or deployed.\n${error.message}\n`
      + '  Fix it on main (the same command fails in your checkout), push, and re-run.');
  }
  ctx.checked.set(worktree, head);
}

/** 5a-5d: refuse unless origin's highest tag is the file's revision, then cut, build and commit. */
async function cutOnce(ctx, key, line, lineWt, validatedFiles) {
  await assertValidatedTree(ctx, lineWt, lineWt.repo === ctx.repo ? validatedFiles : ['package-lock.json']);
  await assertChecked(ctx, lineWt.worktree);
  const tagged = await highestRemoteRevision(ctx.run, lineWt.worktree);
  const current = currentRelease(lineWt.worktree, line.siteRoot);
  const firstRelease = tagged === null && current.revision === SEED_REVISION; // a new project: no tag yet, the file still the seed
  if (tagged !== current.revision && !firstRelease) {
    throw fail(`REFUSED: origin's highest release tag is ${tagged === null ? 'absent' : releaseTag(tagged)} but ${line.siteRoot}/version.json says revision ${current.revision}. `
      + 'The counter and the tags must agree before a release is cut (a rewound version.json, or a release commit that lost its tag). Nothing was changed.');
  }
  const commit = (await headSha(ctx.run, lineWt.worktree)).slice(0, COMMIT_LENGTH);
  const { release, paths } = cutRelease(lineWt.worktree, line, localDay(ctx.now()), commit);
  ctx.log(`cut release ${release.revision} (${release.date}, code ${commit}) in ${paths.join(', ')}`);
  await runHook(line.hooks.build, 'build', hookContext(withRelease(ctx, key, release), lineWt.worktree));
  await assertTrackedUnchanged(ctx, lineWt.worktree, 'build', paths);
  const short = await commitRelease(ctx.run, lineWt.worktree, paths, release.revision);
  return { revision: release.revision, release, commit: short };
}

/** 5: the release of one line, pushed. */
async function releaseLine(ctx, key, line, lineWt, validatedFiles) {
  const landed = await pushWithRecut({
    run: ctx.run, repo: lineWt.repo, worktree: lineWt.worktree, cacheRoot: ctx.cacheRoot, log: ctx.log, attempt: () => cutOnce(ctx, key, line, lineWt, validatedFiles),
  });
  ctx.log(`pushed ${landed.commit} (chore: release ${landed.revision}) and tag ${releaseTag(landed.revision)} to origin/main of ${lineWt.repo}`);
  return landed;
}

/** 6: the functions record, then the project's beforeFunctions. */
async function prepareFunctions(ctx, config, firebaseJson) {
  const own = Object.values(config.releases).find((line) => line.repo === null);
  if (!own) throw fail('a functions target is listed but this project has no release line of its own to take the hosting revision from');
  const { revision } = currentRelease(ctx.worktree, own.siteRoot);
  for (const source of functionsSources(firebaseJson)) {
    const record = await writeFunctionsRelease({ run: ctx.run, worktree: ctx.worktree, source, hostingRevision: revision });
    ctx.log(`${source}/release.json: ${record.commit} (hosting revision ${record.hostingRevision})`);
  }
  await runHook(config.hooks.beforeFunctions, 'beforeFunctions', ctx);
}

/** 8: the one firebase command, from the project's worktree. */
async function upload(ctx, cli, words) {
  ctx.log(`firebase ${deployArgs(words).join(' ')}`);
  try {
    await ctx.run(cli, deployArgs(words), { cwd: ctx.worktree, env: { [RUN_ID_VAR]: ctx.runId } });
  } catch (error) {
    throw fail(`FAILED: the firebase deploy did not complete.\n${error.message}`);
  }
}

/**
 * A release is committed, tagged and pushed before anything is uploaded (so two windows never count one number twice). Any
 * later failure therefore leaves it standing, and the message has to say so and how to tell whether it went live: a list
 * that also names functions or rules may have uploaded the hosting before the failing part.
 */
function standing(error, key, landed) {
  const note = `\n  The release commit ${landed.commit} and tag ${releaseTag(landed.revision)} stand on origin/main (release ${landed.revision} is cut; it may not be live).\n`
    + `  Is it live?  npm run deploy-check -- ${key} ${landed.revision} --wait 0\n`
    + '  If not, fix the cause and re-run: it cuts the next revision.';
  return Object.assign(new Error(`${error.message}${note}`), { exitCode: error.exitCode });
}

/** 9: the live check, then the project's check hook. A failure exits 2 with the rollback. */
async function checkLive(ctx, key, line, landed, firebaseJson) {
  const result = await checkDeployment({
    origin: line.origin, expected: landed.revision, hosting: hostingBlockFor(firebaseJson, key), line, label: key,
    fetch: ctx.fetch, sleep: ctx.sleep, now: ctx.now, log: ctx.log,
  });
  let problems = result.failures.map(({ url, reason }) => `FAIL ${url}: ${reason}`);
  if (problems.length === 0) {
    try { await line.hooks.check?.(hookContext(ctx, ctx.worktree), result.live); } catch (error) { problems = [`FAIL the check hook: ${error.message}`]; }
  }
  if (problems.length === 0) return ctx.log(`OK ${line.origin} serves release ${landed.revision}: ${result.sampled} sampled paths answer 200 with their headers, ${result.probed} private paths are not served`);
  throw fail(`${problems.join('\n')}\n\nFAILED the post-deploy check (above). Roll back: Firebase console -> Hosting -> Release history -> Rollback, then run\n`
    + `  npm run deploy-check -- ${key} ${landed.revision - 1}\n`
    + `If the only failure is the CDN being slow to serve release ${landed.revision}, no rollback is needed: wait, then run\n`
    + `  npm run deploy-check -- ${key} ${landed.revision}\n`, EXIT_CHECK_FAILED);
}

/** 10 and 11: tell the world, then bring the caller's checkout to the release commit. */
async function afterLive(ctx, line, lineWt, landed) {
  try { await line.hooks.afterRelease?.(hookContext(ctx, ctx.worktree)); } catch (error) {
    ctx.warn(`WARNING: release ${landed.revision} is live and checked, but its afterRelease hook failed: ${error.message}`);
  }
  if (lineWt.repo !== ctx.repo) return;
  const there = await fastForwardCaller(ctx.run, ctx.repo);
  ctx.log(there ? 'your checkout is at the release commit.' : `NOTE: your checkout is not at the release commit; pull origin/main (it holds chore: release ${landed.revision}).`);
}

// ---------------------------------------------------------------------------
// The run
// ---------------------------------------------------------------------------

/** The context of a deploy whose repos are `places`: the runner scoped to their pinned .bin, the project worktree first. */
function contextFor(deps, base, places) {
  return { ...base, ...runnerFor(deps, places), worktree: places[0].worktree };
}

/** 2: open the project worktree, load the config from the shipped tree, resolve the list against it. */
async function openProject(ctx, words) {
  const project = await openRepo(ctx, { repo: ctx.repo, primary: ctx.primary });
  const firebaseJson = readJson(join(project.worktree, 'firebase.json'), 'firebase.json');
  const firebaserc = readJson(join(project.worktree, '.firebaserc'), '.firebaserc');
  const config = await loadConfig(project.worktree, {
    repoBase: ctx.primary, firebaseJson, firebaserc, isCheckoutWithOrigin: checkoutHasOrigin(ctx.runSync),
  });
  const targets = resolveTargets(words, { firebaseJson, firebaserc, releaseKeys: Object.keys(config.releases) });
  return { project, firebaseJson, config, targets };
}

/** The release line's repo: the project's own worktree, or a sibling checkout's. */
async function openLine(ctx, project, line) {
  return line.repo === null ? project : openRepo(ctx, await locate(ctx.run, line.repo));
}

async function execute(deps, words, cleanup) {
  const where = await locate(runnerFor(deps, [{ repo: deps.cwd }]).run, deps.cwd);
  const base = {
    ...deps, ...where, cleanup, cacheRoot: cleanup.cacheRoot, runId: randomUUID(), targets: words, checked: new Map(),
    log: (line) => deps.out(`[deploy] ${line}\n`), warn: (line) => deps.err(`[deploy] ${line}\n`),
  };
  const projectPlace = { ...where, worktree: worktreePathFor(base.cacheRoot, where.repo) };
  const opened = await openProject(contextFor(deps, base, [projectPlace]), words);
  const { project, config, targets } = opened;
  const line = targets.hosting ? config.releases[targets.hosting] : null;
  if (line) headerBlocks(hostingBlockFor(opened.firebaseJson, targets.hosting), line.check, targets.hosting);
  const lineWt = line ? await openLine(contextFor(deps, base, [projectPlace]), project, line) : null;
  const sibling = lineWt && lineWt !== project ? [lineWt] : [];
  const lines = line ? { [targets.hosting]: { repo: lineWt.repo, worktree: lineWt.worktree, release: null } } : {};
  const ctx = { ...contextFor(deps, base, [projectPlace, ...sibling]), lines };
  return deployOpened(ctx, { ...opened, lineWt, line, key: targets.hosting, repos: [project, ...sibling] });
}

async function deployOpened(ctx, { project, repos, lineWt, line, key, config, firebaseJson, targets }) {
  const cli = pinnedCli(ctx.primary);
  const functions = hasFunctionsTarget(targets.words);
  linkInstalls(repos, project, firebaseJson, functions);
  const validatedFiles = [...VALIDATED_FILES, ...(functions ? functionsSources(firebaseJson).map((s) => join(s, 'package-lock.json')) : [])];
  for (const { worktree } of repos) await assertChecked(ctx, worktree);
  await runHook(config.hooks.preflight, 'preflight', ctx);
  const landed = line ? await releaseLine(ctx, key, line, lineWt, validatedFiles) : null;
  const live = landed ? withRelease(ctx, key, landed.release) : ctx;
  try {
    if (functions) await prepareFunctions(live, config, firebaseJson);
    if (line) await runHook(line.hooks.assemble, 'assemble', live);
    for (const { worktree } of repos) await assertTrackedUnchanged(live, worktree, line ? 'preflight, beforeFunctions or assemble' : 'preflight or beforeFunctions');
    await upload(live, cli, targets.words);
  } catch (error) {
    throw landed ? standing(error, key, landed) : error;
  }
  if (!landed) return live.log(`Deployed ${targets.words.join(',')} from origin/main ${project.main.short} (not a release: nothing counted).`);
  await checkLive(live, key, line, landed, firebaseJson);
  await afterLive(live, line, lineWt, landed);
  return live.log(`Deployed release ${landed.revision} (${landed.commit}) to ${line.origin}.`);
}

/**
 * Run a deploy. `deps` = { argv, cwd, env, now, sleep, fetch, out, err }. Resolves to the exit code; never throws.
 * @param {{ argv: string[], cwd: string, env: NodeJS.ProcessEnv, now: () => Date, sleep: (ms: number) => Promise<void>,
 *   fetch: Function, out: (text: string) => void, err: (text: string) => void }} deps
 */
export async function runDeploy(deps) {
  let words;
  try { words = parseOnly(deps.argv); } catch (error) {
    deps.err(`[deploy] REFUSED: ${error.message}\n`);
    return 1;
  }
  let cacheRoot;
  try { cacheRoot = deployCacheRoot(deps.env); } catch (error) {
    deps.err(`[deploy] REFUSED: ${error.message}\n`);
    return 1;
  }
  const boot = runnerFor(deps, [{ repo: deps.cwd }]);
  const cleanup = createCleanup(cacheRoot);
  const uninstall = installSignalCleanup(cleanup, boot.runSync);
  try {
    await execute(deps, words, cleanup);
    return 0;
  } catch (error) {
    const prefix = error instanceof TargetError || error instanceof LockHeldError ? 'REFUSED: ' : '';
    deps.err(`[deploy] ${prefix}${error.message}\n`);
    return error.exitCode ?? 1;
  } finally {
    // The handlers go after the cleanup, so a signal that arrives while it runs still finds one.
    try { await cleanup.run(boot.run); } finally { uninstall(); }
  }
}

const isEntryPoint = process.argv[1] && realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url));
if (isEntryPoint) {
  process.exitCode = await runDeploy({
    argv: process.argv.slice(2), cwd: process.cwd(), env: process.env, now: () => new Date(), fetch: globalThis.fetch,
    sleep: (ms) => new Promise((r) => setTimeout(r, ms)), out: (t) => process.stdout.write(t), err: (t) => process.stderr.write(t),
  });
}
