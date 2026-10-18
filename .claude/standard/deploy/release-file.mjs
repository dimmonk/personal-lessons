/**
 * The release file and its copies: the one definition of what a counted release is, for every reader and its one writer
 * (docs/deploy-standard-design.md section 3).
 *
 * `<siteRoot>/version.json` is exactly `{ "revision": 780, "date": "2026-10-10", "commit": "0572e298" }`: `revision`
 * counts releases, `date` is the day it was cut, `commit` the first 8 hex characters of the code commit it shipped
 * (origin/main before the release commit).
 *
 * A release line may declare copies of it (`copies: [{ path, kind, cachePrefix? }]`). The core owns one line pattern and
 * renderer per kind, so a copy cannot drift from the file and the live check can read a copy back:
 *
 *   module   export const RELEASE = Object.freeze({ revision: N, date: 'D' });
 *   classic    var RELEASE = N;                       (a classic script that cannot import the module)
 *   sw       const RELEASE = N;                       plus the literal `${cachePrefix}-${RELEASE}` (the cache's name)
 *
 * `cutRelease` is the writer: it makes every text (the file, each copy, the cut notes) before it writes any, so a copy
 * that cannot be stamped leaves version.json as it was. `mirrorProblems` is the reader that `verify.mjs` runs.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  NEXT_NOTES_TEMPLATE, cutReleaseNotes, readNextNotesFile, readReleaseNotesFile, serializeReleaseNotes,
} from './release-notes.mjs';

/** The release file's keys, in the order it is written. */
export const RELEASE_KEYS = Object.freeze(['revision', 'date', 'commit']);
/** The release file's name, under the release line's siteRoot and as hosting serves it at `/version.json`. */
export const VERSION_FILE = 'version.json';
/** The revision of a development build: not a release, so it matches no counted one. */
export const DEV_REVISION = 0;
const RELEASE_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const RELEASE_COMMIT = /^[0-9a-f]{8}$/;
export const COMMIT_LENGTH = 8;

/** A generated copy's line: how it reads for a release and how a release is read back out of it. */
export const COPY_KINDS = Object.freeze({
  module: {
    line: /^export const RELEASE = Object\.freeze\(\{ revision: (\d+), date: '([^']*)' \}\);$/m,
    render: (release) => `export const RELEASE = Object.freeze({ revision: ${release.revision}, date: '${release.date}' });`,
    read: (match) => ({ revision: Number(match[1]), date: match[2] }),
  },
  classic: {
    line: /^( *)var RELEASE = (\d+);$/m,
    render: (release) => `  var RELEASE = ${release.revision};`,
    read: (match) => ({ revision: Number(match[2]) }),
  },
  sw: {
    line: /^const RELEASE = (\d+);$/m,
    render: (release) => `const RELEASE = ${release.revision};`,
    read: (match) => ({ revision: Number(match[1]) }),
  },
});

/** The release file's path under a repo root. @param {string} siteRoot */
export const versionFilePath = (siteRoot) => join(siteRoot, VERSION_FILE);

/** A development build of a release: the same day and commit at revision 0. */
export const devRelease = (release) => ({ ...release, revision: DEV_REVISION });

function isCalendarDay(date) {
  const match = typeof date === 'string' ? RELEASE_DATE.exec(date) : null;
  if (!match) return false;
  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])];
  const real = new Date(Date.UTC(year, month - 1, day));
  return real.getUTCFullYear() === year && real.getUTCMonth() === month - 1 && real.getUTCDate() === day;
}

/**
 * What is wrong with a parsed release file (version.json, the live `/version.json`): exactly `{ revision, date, commit }`
 * with a positive integer, a real `YYYY-MM-DD` day and 8 lowercase hex characters.
 * @param {unknown} value
 * @returns {string[]}
 */
export function releaseProblems(value) {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return ['is not a JSON object'];
  const problems = [];
  const keys = Object.keys(value);
  if (keys.join(',') !== RELEASE_KEYS.join(',')) problems.push(`keys are [${keys.join(', ')}], not [${RELEASE_KEYS.join(', ')}]`);
  const { revision, date, commit } = value;
  if (!Number.isSafeInteger(revision) || revision < 1) problems.push(`revision ${JSON.stringify(revision)} is not a positive integer`);
  if (!isCalendarDay(date)) problems.push(`date ${JSON.stringify(date)} is not a YYYY-MM-DD day`);
  if (typeof commit !== 'string' || !RELEASE_COMMIT.test(commit)) problems.push(`commit ${JSON.stringify(commit)} is not 8 lowercase hex characters`);
  return problems;
}

/**
 * A release file, parsed and valid, or the reasons it is not.
 * @param {string} file
 * @returns {{ release: { revision: number, date: string, commit: string } } | { problems: string[] }}
 */
export function readReleaseFile(file) {
  let parsed;
  try { parsed = JSON.parse(readFileSync(file, 'utf8')); } catch (error) {
    return { problems: [`unreadable (${error.message})`] };
  }
  const problems = releaseProblems(parsed);
  return problems.length > 0 ? { problems } : { release: parsed };
}

/** The release file of a repo root, or a thrown error that names the file. */
export function currentRelease(root, siteRoot) {
  const file = join(root, versionFilePath(siteRoot));
  const read = readReleaseFile(file);
  if ('problems' in read) throw new Error(`${file}: ${read.problems.join('; ')}`);
  return read.release;
}

/** The bytes of a release file, as committed. */
export const serializeRelease = (release) => `${JSON.stringify(release, null, 2)}\n`;

/**
 * The release after `release`: one revision on, cut on `date` from `commit`. Throws when the arguments are not a
 * release (the file it would write must pass {@link releaseProblems}).
 */
export function nextRelease(release, date, commit) {
  const next = { revision: release.revision + 1, date, commit };
  const problems = releaseProblems(next);
  if (problems.length > 0) throw new Error(`cannot cut release ${next.revision}: ${problems.join('; ')}`);
  return next;
}

/** A calendar day in the machine's own zone, `YYYY-MM-DD`. @param {Date} date */
export function localDay(date) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

// ---------------------------------------------------------------------------
// The copies
// ---------------------------------------------------------------------------

/** The literal a service worker must contain so its cache is named by the release. @param {{ cachePrefix: string }} copy */
export const swCacheLiteral = (copy) => `\`${copy.cachePrefix}-\${RELEASE}\``;

/** The release a copy's source carries, or null when it has no RELEASE line. */
export function readCopy(copy, source) {
  const kind = COPY_KINDS[copy.kind];
  const match = kind.line.exec(source);
  return match ? kind.read(match) : null;
}

/**
 * How a copy's source differs from the release it should mirror, or []. A copy that carries no date (sw, classic) is
 * held to the revision alone; a service worker must also name its cache from the release.
 */
export function copyProblems(copy, release, source) {
  const stamped = readCopy(copy, source);
  if (!stamped) return ['has no RELEASE line'];
  const problems = [];
  if (stamped.revision !== release.revision) problems.push(`names revision ${stamped.revision}, not ${release.revision}`);
  if (stamped.date !== undefined && stamped.date !== release.date) problems.push(`names day ${stamped.date}, not ${release.date}`);
  if (copy.kind === 'sw' && !source.includes(swCacheLiteral(copy))) problems.push(`does not name its cache ${swCacheLiteral(copy)}`);
  return problems;
}

/**
 * `source` with its RELEASE line replaced by `release`'s. Throws when the line is missing (a stamp that changed nothing
 * would ship a page that names another release than the file does) or a worker does not name its cache from it.
 */
export function stampCopy(copy, source, release) {
  const kind = COPY_KINDS[copy.kind];
  if (!kind.line.test(source)) throw new Error(`${copy.path} has no RELEASE line to stamp (expected: ${kind.render(release).trim()})`);
  if (copy.kind === 'sw' && !source.includes(swCacheLiteral(copy))) {
    throw new Error(`${copy.path} does not name its cache ${swCacheLiteral(copy)}: a new release would not change the worker's cache`);
  }
  return source.replace(kind.line, kind.render(release));
}

/** The Sentry release tag a classic or module copy must carry when the project names an `app`. @param {string} app */
export const sentryTagLiteral = (app) => `'${app}@' + RELEASE`;

/**
 * Every problem in the mirror: version.json valid, every copy naming it, each worker naming its cache from it, and (when
 * `app` is set and the line has classic or module copies) at least one of those carrying the Sentry tag `app@RELEASE`.
 * @param {string} root the repo root @param {{ siteRoot: string, copies: object[] }} line @param {string} [app]
 */
export function mirrorProblems(root, line, app) {
  const read = readReleaseFile(join(root, versionFilePath(line.siteRoot)));
  const where = versionFilePath(line.siteRoot);
  if ('problems' in read) return read.problems.map((p) => `${where}: ${p}`);
  const sources = line.copies.map((copy) => ({ copy, source: readSource(join(root, copy.path)) }));
  const copyReports = sources.flatMap(({ copy, source }) => (
    source === null ? [`${copy.path}: is missing`] : copyProblems(copy, read.release, source).map((p) => `${copy.path}: ${p}`)));
  return [...copyReports, ...sentryProblems(sources, app)];
}

function readSource(file) {
  try { return readFileSync(file, 'utf8'); } catch { return null; }
}

function sentryProblems(sources, app) {
  if (!app) return [];
  const boots = sources.filter(({ copy, source }) => source !== null && copy.kind !== 'sw');
  if (boots.length === 0 || boots.some(({ source }) => source.includes(sentryTagLiteral(app)))) return [];
  return [`no ${boots.map(({ copy }) => copy.path).join(' or ')} carries the Sentry release tag ${sentryTagLiteral(app)}`];
}

// ---------------------------------------------------------------------------
// The cut: the only writer
// ---------------------------------------------------------------------------

function stampedFiles(root, copies, release) {
  return copies.map((copy) => ({ path: copy.path, text: stampCopy(copy, readFileSync(join(root, copy.path), 'utf8'), release) }));
}

/** The two note files after `release` is cut: the history with its bullets on top, and next.md emptied. */
function cutNotesFiles(root, notes, release) {
  const history = readReleaseNotesFile(join(root, notes.history));
  if ('problems' in history) throw new Error(`${notes.history}: ${history.problems.join('; ')}`);
  const next = readNextNotesFile(join(root, notes.next));
  if ('problems' in next) throw new Error(`${notes.next}: ${next.problems.join('; ')}`);
  return [
    { path: notes.history, text: serializeReleaseNotes(cutReleaseNotes(history.history, release, next.notes)) },
    { path: notes.next, text: NEXT_NOTES_TEMPLATE },
  ];
}

/**
 * Every file a release writes, made before any is written: version.json one revision on, each copy stamped, the notes cut.
 * @param {string} root @param {{ siteRoot: string, copies: object[], notes?: { next: string, history: string } }} line
 * @param {string} date @param {string} commit
 * @returns {{ release: object, files: { path: string, text: string }[] }}
 */
export function planCut(root, line, date, commit) {
  const release = nextRelease(currentRelease(root, line.siteRoot), date, commit);
  const files = [
    { path: versionFilePath(line.siteRoot), text: serializeRelease(release) },
    ...stampedFiles(root, line.copies, release),
    ...(line.notes ? cutNotesFiles(root, line.notes, release) : []),
  ];
  return { release, files };
}

/** Cut the next release of a line in `root`: returns the release and the repo-relative paths written. */
export function cutRelease(root, line, date, commit) {
  const { release, files } = planCut(root, line, date, commit);
  files.forEach(({ path, text }) => writeFileSync(join(root, path), text));
  return { release, paths: files.map((f) => f.path) };
}
