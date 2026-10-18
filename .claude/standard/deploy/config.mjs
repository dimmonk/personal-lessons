/**
 * Load and validate `deploy.config.mjs`: data (releases, copies, check samples) and named hook functions, nothing else
 * (design 2.3). A schema refuses what it does not know: an unknown key, a hook that is not a function, a copy kind the
 * core does not own, a `siteRoot` or `repo` outside the repo, a `repo` that is not a git checkout with an origin, a
 * release line firebase.json / .firebaserc do not map. Every problem is listed at once.
 */
import { existsSync } from 'node:fs';
import { isAbsolute, join, relative, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { COPY_KINDS } from './release-file.mjs';
import { BARE_HOSTING, hostingBlockFor, mappedHostingTargets } from './targets.mjs';

export const CONFIG_FILE = 'deploy.config.mjs';
const TOP_KEYS = ['app', 'releases', 'hooks', 'liveDocs'];
const TOP_HOOKS = ['preflight', 'beforeFunctions'];
const RELEASE_KEYS = ['repo', 'origin', 'siteRoot', 'copies', 'sentryFiles', 'notes', 'check', 'hooks'];
const RELEASE_HOOKS = ['build', 'assemble', 'check', 'afterRelease'];
const CHECK_KEYS = ['samples', 'discovered', 'privatePaths'];
const COPY_KEYS = ['path', 'kind', 'cachePrefix'];
const NOTES_KEYS = ['next', 'history'];
const RELEASE_KEY = /^hosting(:[A-Za-z0-9][A-Za-z0-9_-]*)?$/;

const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const isText = (v) => typeof v === 'string' && v.trim() !== '';
const unknownKeys = (obj, allowed, where) => Object.keys(obj).filter((k) => !allowed.includes(k)).map((k) => `${where}: unknown key "${k}" (allowed: ${allowed.join(', ')})`);

/** Whether `path` stays inside `base` (both resolved against `root`). */
function insideOf(root, base, path) {
  const rel = relative(resolve(root, base), resolve(root, path));
  return rel !== '..' && !rel.startsWith(`..${sep}`) && !isAbsolute(rel);
}

/** Whether a header-block source has nothing to sample: no paths of its own and no page that names one. */
export const hasNoSample = (check, source) => {
  const paths = check.samples?.[source];
  return !check.discovered?.[source] && !(Array.isArray(paths) && paths.length > 0);
};

const hookProblems = (hooks, allowed, where) => {
  if (hooks === undefined || hooks === null) return [];
  if (!isObject(hooks)) return [`${where}: must be an object of hook functions`];
  return [
    ...unknownKeys(hooks, allowed, where),
    ...Object.entries(hooks).filter(([k, fn]) => allowed.includes(k) && fn !== null && typeof fn !== 'function').map(([k]) => `${where}.${k}: a hook is a function (async (ctx) => void) or null`),
  ];
};

function copyConfigProblems(copy, i, line, root, where) {
  const at = `${where}.copies[${i}]`;
  if (!isObject(copy)) return [`${at}: must be { path, kind }`];
  const problems = unknownKeys(copy, COPY_KEYS, at);
  if (!(copy.kind in COPY_KINDS)) problems.push(`${at}: unknown copy kind "${copy.kind}" (known: ${Object.keys(COPY_KINDS).join(', ')})`);
  if (!isText(copy.path) || !insideOf(root, line.siteRoot, copy.path)) problems.push(`${at}: path "${copy.path}" must sit under the release's siteRoot "${line.siteRoot}"`);
  if (copy.kind === 'sw' && !isText(copy.cachePrefix)) problems.push(`${at}: a "sw" copy needs a cachePrefix (its cache is \`<cachePrefix>-\${RELEASE}\`)`);
  if (copy.kind !== 'sw' && copy.cachePrefix !== undefined) problems.push(`${at}: only a "sw" copy takes a cachePrefix`);
  return problems;
}

function checkProblems(check, where) {
  if (!isObject(check)) return [`${where}.check: required, { samples, privatePaths }`];
  const problems = unknownKeys(check, CHECK_KEYS, `${where}.check`);
  if (!isObject(check.samples) || !Object.values(check.samples).every((paths) => Array.isArray(paths) && paths.every((p) => isText(p) && p.startsWith('/')))) {
    problems.push(`${where}.check.samples: must map each firebase.json header-block source to an array of "/paths"`);
  }
  if (isObject(check.samples)) {
    const empty = Object.keys(check.samples).filter((source) => hasNoSample(check, source));
    empty.forEach((source) => problems.push(`${where}.check.samples["${source}"]: a header block with no sample paths cannot be checked; list at least one "/path" or map the block under discovered`));
  }
  if (!Array.isArray(check.privatePaths) || !check.privatePaths.every((p) => isText(p) && p.startsWith('/'))) problems.push(`${where}.check.privatePaths: must be an array of "/paths"`);
  const discovered = check.discovered ?? {};
  const bad = !isObject(discovered) || Object.entries(discovered).some(([source, d]) => !isObject(d) || !isText(d.from) || !(d.pattern instanceof RegExp) || !(isObject(check.samples) && source in check.samples));
  if (bad) problems.push(`${where}.check.discovered: each key must be a sampled header-block source mapped to { from: "/page", pattern: RegExp }`);
  return problems;
}

function notesProblems(notes, root, where) {
  if (notes === undefined) return [];
  if (!isObject(notes)) return [`${where}.notes: must be { next, history }`];
  return [
    ...unknownKeys(notes, NOTES_KEYS, `${where}.notes`),
    ...NOTES_KEYS.filter((k) => !isText(notes[k]) || !insideOf(root, '.', notes[k])).map((k) => `${where}.notes.${k}: a path inside the repo`),
  ];
}

function mappingProblems(key, ctx, where) {
  const { firebaseJson, firebaserc } = ctx;
  if (!hostingBlockFor(firebaseJson, key)) {
    return [`${where}: firebase.json has no hosting block for "${key}"${key === BARE_HOSTING ? ' (bare "hosting" needs exactly one hosting object with no target)' : ''}`];
  }
  if (key !== BARE_HOSTING && !mappedHostingTargets(firebaserc).includes(key.slice('hosting:'.length))) {
    return [`${where}: .firebaserc does not map hosting target "${key.slice('hosting:'.length)}" under its default project`];
  }
  return [];
}

function repoProblems(line, ctx, where) {
  if (line.repo === undefined) return [];
  if (!isText(line.repo)) return [`${where}.repo: a path to the sibling checkout`];
  const dir = resolve(ctx.repoBase, line.repo);
  if (dir === resolve(ctx.repoBase)) return [`${where}.repo: names this repo; omit it for the project's own line`];
  return ctx.isCheckoutWithOrigin(dir) ? [] : [`${where}.repo: ${dir} is not a git checkout with an origin`];
}

function lineProblems(key, line, ctx) {
  const where = `releases["${key}"]`;
  if (!RELEASE_KEY.test(key)) return [`${where}: a release key is "hosting" or "hosting:<name>"`];
  if (!isObject(line)) return [`${where}: must be an object`];
  const origin = isText(line.origin) && /^https?:\/\/[^/?#]+$/.test(line.origin);
  const problems = [
    ...unknownKeys(line, RELEASE_KEYS, where),
    ...(origin ? [] : [`${where}.origin: required, an http(s) origin without a path`]),
    ...mappingProblems(key, ctx, where),
    ...repoProblems(line, ctx, where),
    ...hookProblems(line.hooks, RELEASE_HOOKS, `${where}.hooks`),
    ...checkProblems(line.check, where),
    ...notesProblems(line.notes, ctx.root, where),
  ];
  if (!isText(line.siteRoot) || !insideOf(ctx.root, '.', line.siteRoot)) return [...problems, `${where}.siteRoot: required, a directory inside the repo ("." for the repo root)`];
  const copies = line.copies ?? [];
  if (!Array.isArray(copies)) return [...problems, `${where}.copies: must be an array`];
  const sentry = line.sentryFiles ?? [];
  const sentryBad = !Array.isArray(sentry) || !sentry.every((f) => isText(f) && insideOf(ctx.root, line.siteRoot, f))
    ? [`${where}.sentryFiles: must be an array of paths under the release's siteRoot "${line.siteRoot}"`] : [];
  const paths = copies.map((c) => c?.path);
  const duplicated = paths.filter((p, i) => paths.indexOf(p) !== i).map((p) => `${where}.copies: "${p}" is listed twice`);
  return [...problems, ...sentryBad, ...duplicated, ...copies.flatMap((c, i) => copyConfigProblems(c, i, line, ctx.root, where))];
}

/**
 * Every problem in a config object, or [].
 * @param {unknown} raw
 * `root` is the tree the config describes (the deploy worktree); `repoBase` is where a sibling `repo` path is resolved from
 * (the primary checkout, so `../TMV-Web` means the same wherever the worktree sits).
 * @param {{ root: string, repoBase: string, firebaseJson: object, firebaserc: object, isCheckoutWithOrigin: (dir: string) => boolean }} ctx
 */
export function configProblems(raw, ctx) {
  if (!isObject(raw)) return [`${CONFIG_FILE} must export default an object`];
  const problems = [...unknownKeys(raw, TOP_KEYS, 'config'), ...hookProblems(raw.hooks, TOP_HOOKS, 'hooks')];
  if (raw.app !== undefined && !isText(raw.app)) problems.push('app: a non-empty string');
  if (raw.liveDocs !== undefined && !(Array.isArray(raw.liveDocs) && raw.liveDocs.every(isText))) problems.push('liveDocs: an array of repo-relative paths');
  if (!isObject(raw.releases) || Object.keys(raw.releases).length === 0) return [...problems, 'releases: required, at least one release line'];
  return [...problems, ...Object.entries(raw.releases).flatMap(([key, line]) => lineProblems(key, line, ctx))];
}

const noHook = (hooks, names) => Object.fromEntries(names.map((n) => [n, hooks?.[n] ?? null]));

/** A validated config in the one shape the run reads: defaults filled, hooks always present, `repo` resolved. */
export function normalizeConfig(raw, ctx) {
  const problems = configProblems(raw, ctx);
  if (problems.length > 0) throw new Error(`${CONFIG_FILE} is invalid:\n${problems.map((p) => `  - ${p}`).join('\n')}`);
  const releases = Object.fromEntries(Object.entries(raw.releases).map(([key, line]) => [key, Object.freeze({
    repo: line.repo === undefined ? null : resolve(ctx.repoBase, line.repo),
    origin: line.origin,
    siteRoot: line.siteRoot,
    copies: Object.freeze((line.copies ?? []).map((c) => Object.freeze({ ...c }))),
    sentryFiles: Object.freeze([...(line.sentryFiles ?? [])]),
    notes: line.notes ? Object.freeze({ ...line.notes }) : null,
    check: Object.freeze({ samples: line.check.samples, discovered: line.check.discovered ?? {}, privatePaths: line.check.privatePaths }),
    hooks: Object.freeze(noHook(line.hooks, RELEASE_HOOKS)),
  })]));
  return Object.freeze({
    app: raw.app ?? null,
    releases: Object.freeze(releases),
    hooks: Object.freeze(noHook(raw.hooks, TOP_HOOKS)),
    liveDocs: Object.freeze([...(raw.liveDocs ?? [])]),
  });
}

/** Import `<root>/deploy.config.mjs` and validate it. */
export async function loadConfig(root, ctx) {
  const file = join(root, CONFIG_FILE);
  if (!existsSync(file)) throw new Error(`${file} does not exist: this project has no deploy.config.mjs`);
  const module = await import(pathToFileURL(file).href);
  return normalizeConfig(module.default, { ...ctx, root });
}
