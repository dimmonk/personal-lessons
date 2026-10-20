/**
 * The git side of a deploy: every call goes through the `run` the caller passes (ctx.run), so tests stub one function.
 *
 * What ships is a throwaway worktree at origin/main under a per-user cache root, never inside a project folder: the core
 * links the primary's installed node_modules into it (see deploy.mjs), so node resolution still finds them. A release is one commit of the release paths alone, `chore: release N`, tagged `release-N` and
 * pushed with the branch in one atomic push; a push that raced another window is not rebased (the release file would
 * conflict): the cut is thrown away and made again from the new origin/main, up to five times.
 */
import { createHash } from 'node:crypto';
import { homedir } from 'node:os';
import { basename, dirname, isAbsolute, join, resolve } from 'node:path';
import { SEED_REVISION } from './release-file.mjs';

/** Overrides the cache root (tests, or a machine whose caches live elsewhere). Must be an absolute path. */
export const CACHE_ENV = 'CLAUDE_DEPLOY_CACHE';
const DEFAULT_CACHE = ['Library', 'Caches', 'claude-deploy'];
/** The worktree's own folder name inside its `<repo>-<hash>` folder. */
const WORKTREE_NAME = 'worktree';
const PATH_HASH_LENGTH = 8;
export const MAX_PUSH_ATTEMPTS = 5;
export const MAIN_BRANCH = 'main';
/** The full name, so no tag or branch spelled `origin/main` can stand in for it. */
const MAIN_REMOTE_REF = `refs/remotes/origin/${MAIN_BRANCH}`;
const TAG_PREFIX = 'release-';
const REMOTE_TAG = /^[0-9a-f]+\trefs\/tags\/release-(\d+)$/;

/** The tag of a release. @param {number} revision */
export const releaseTag = (revision) => `${TAG_PREFIX}${revision}`;

/** The per-user folder every deploy worktree lives under, outside every project folder. @param {NodeJS.ProcessEnv} env */
export function deployCacheRoot(env) {
  const override = env[CACHE_ENV];
  if (override === undefined || override === '') return join(homedir(), ...DEFAULT_CACHE);
  if (!isAbsolute(override)) throw new Error(`${CACHE_ENV} must be an absolute path, not ${JSON.stringify(override)}`);
  return resolve(override);
}

/** Where `repo` (an absolute checkout path) gets its deploy worktree: `<cache>/<folder>-<hash of the path>/worktree`. */
export function worktreePathFor(cacheRoot, repo) {
  const hash = createHash('sha256').update(resolve(repo)).digest('hex').slice(0, PATH_HASH_LENGTH);
  return join(cacheRoot, `${basename(repo)}-${hash}`, WORKTREE_NAME);
}

const git = (run, repo, args, opts = {}) => run('git', ['-C', repo, ...args], { quiet: true, cwd: repo, ...opts });
const lines = (text) => text.split('\n').filter(Boolean);

/**
 * Bring refs/remotes/origin/main to origin's main. The refspec is spelled out: `git fetch origin main` only updates the
 * tracking ref when the remote's configured refspec happens to map it, and a stale ref would be shipped as if it were main.
 */
const fetchMainRef = (run, cwd) => git(run, cwd, ['fetch', '--quiet', 'origin', `+refs/heads/${MAIN_BRANCH}:${MAIN_REMOTE_REF}`]);

/** The checkout's own git directory (a linked worktree has one of its own): where its deploy lock lives. */
export const gitDirOf = async (run, repo) => (await git(run, repo, ['rev-parse', '--absolute-git-dir'])).stdout.trim();

/** Fetch origin/main and name the commit about to ship. */
export async function fetchMain(run, repo) {
  await fetchMainRef(run, repo);
  const sha = (await git(run, repo, ['rev-parse', MAIN_REMOTE_REF])).stdout.trim();
  const short = (await git(run, repo, ['rev-parse', '--short', MAIN_REMOTE_REF])).stdout.trim();
  const subject = (await git(run, repo, ['log', '-1', '--format=%s', MAIN_REMOTE_REF])).stdout.trim();
  return { sha, short, subject };
}

/** What is NOT going out: commits on the caller's HEAD that are not pushed, and uncommitted files. Not a gate, the truth. */
export async function notShippingReport(run, repo) {
  const soft = async (args) => { try { return lines((await git(run, repo, args)).stdout); } catch { return []; } };
  const unpushed = await soft(['log', '--oneline', `${MAIN_REMOTE_REF}..HEAD`]);
  const dirty = await soft(['diff', '--name-only', 'HEAD', '--']);
  return [
    ...(unpushed.length > 0 ? ['NOT shipping: commits on your HEAD that are not pushed to main:', ...unpushed.map((l) => `    ${l}`), '  Push them and re-run if you meant to include them.'] : []),
    ...(dirty.length > 0 ? [`NOT shipping: ${dirty.length} uncommitted file(s) in your working tree (this is fine).`] : []),
  ];
}

/** Everything this module removes or cleans is a worktree of the cache root: never a folder the user works in. */
function assertOwned(worktree, cacheRoot) {
  const path = resolve(worktree);
  if (basename(path) !== WORKTREE_NAME || dirname(dirname(path)) !== resolve(cacheRoot)) {
    throw new Error(`refusing to touch ${worktree}: it is not a deploy worktree under ${cacheRoot}`);
  }
}

/**
 * Forget a worktree: git removes it and its registration, and a run that was killed leaves one behind that the next run
 * removes the same way. Never throws for a failed removal: it runs on every way out, and the next `addWorktree` reports a
 * directory git cannot clear.
 */
export async function removeWorktree(run, repo, worktree, cacheRoot) {
  assertOwned(worktree, cacheRoot);
  await git(run, repo, ['worktree', 'remove', '--force', worktree]).catch(() => {});
  await git(run, repo, ['worktree', 'prune']).catch(() => {});
}

/** The same for the signal handler, where nothing async can finish. */
export function removeWorktreeSync(runSync, repo, worktree, cacheRoot) {
  assertOwned(worktree, cacheRoot);
  const quiet = (args) => { try { runSync('git', ['-C', repo, ...args], { quiet: true }); } catch { /* best effort on the way out */ } };
  quiet(['worktree', 'remove', '--force', worktree]);
  quiet(['worktree', 'prune']);
}

/** A detached worktree at `sha`; a left-over one from a killed run is removed first. */
export async function addWorktree(run, repo, worktree, sha, cacheRoot) {
  await removeWorktree(run, repo, worktree, cacheRoot);
  await git(run, repo, ['worktree', 'add', '--detach', '--quiet', worktree, sha]);
}

export const headSha = async (run, worktree) => (await git(run, worktree, ['rev-parse', 'HEAD'])).stdout.trim();

/** The highest `release-N` tag on origin, or null when it has none. */
export async function highestRemoteRevision(run, worktree) {
  const out = (await git(run, worktree, ['ls-remote', '--tags', 'origin', `refs/tags/${TAG_PREFIX}*`])).stdout;
  const revisions = lines(out).map((l) => REMOTE_TAG.exec(l)).filter(Boolean).map((m) => Number(m[1]));
  return revisions.length > 0 ? Math.max(...revisions) : null;
}

/** Tracked files of the worktree that differ from HEAD (repo-relative): what a hook changed that no commit holds. */
export async function modifiedTracked(run, worktree) {
  return lines((await git(run, worktree, ['status', '--porcelain', '--untracked-files=no'])).stdout).map((l) => l.slice(3));
}

/** Among `paths`, those whose content differs between the commit `sha` and the worktree's HEAD. */
export async function changedBetween(run, worktree, sha, paths) {
  return lines((await git(run, worktree, ['diff', '--name-only', sha, 'HEAD', '--', ...paths])).stdout);
}

/** Commit exactly these paths as `chore: release N`. The tag is made by the push ({@link pushRelease}), never before it. */
export async function commitRelease(run, worktree, paths, revision) {
  await git(run, worktree, ['commit', '--quiet', '-m', `chore: release ${revision}`, '--', ...paths]);
  return (await git(run, worktree, ['rev-parse', '--short', 'HEAD'])).stdout.trim();
}

/**
 * Push the release commit as main and as `release-N` in one atomic push: `{ ok: true }`, or `{ ok: false, error }` with
 * git's own reason. The tag is pushed as HEAD's sha, never as a local ref: refs/tags is shared by every linked worktree of
 * the repo, so a local `release-N` made before the push could be re-pointed by a deploy running from another checkout
 * between the commit and the push, and the push would then publish a tag that is not the release commit.
 */
export async function pushRelease(run, worktree, revision) {
  try {
    await git(run, worktree, ['push', '--quiet', '--atomic', 'origin', `HEAD:refs/heads/${MAIN_BRANCH}`, `HEAD:refs/tags/${releaseTag(revision)}`]);
    return { ok: true };
  } catch (error) { return { ok: false, error }; }
}

/** The local `release-N` at the commit origin now holds under that tag: made only after the push landed. */
const tagLocally = (run, repo, revision, sha) => git(run, repo, ['tag', '-f', releaseTag(revision), sha]);

/**
 * A push that reported failure: what origin has now decides what the failure was.
 *   landed  the release commit is on origin/main (its tip, or below it when another window pushed on top since): the push
 *           got there and only the client's view of it failed
 *   raced   origin/main moved, or a release tag appeared: another window won; cut again from what origin has now
 *   failed  nothing on origin moved (auth, a protected branch, a hook): cutting again cannot help
 * It leaves refs/remotes/origin/main fresh, so a recut starts from it. Throws when origin cannot be read.
 */
export async function settlePush(run, worktree, revision) {
  const sha = await headSha(run, worktree);
  const base = (await git(run, worktree, ['rev-parse', 'HEAD~1'])).stdout.trim();
  await fetchMainRef(run, worktree);
  const remote = (await git(run, worktree, ['rev-parse', MAIN_REMOTE_REF])).stdout.trim();
  const landed = await git(run, worktree, ['merge-base', '--is-ancestor', sha, MAIN_REMOTE_REF]).then(() => true, () => false);
  if (landed) return 'landed';
  if (remote !== base) return 'raced';
  // No release tag yet is the seed: a new project's first release (revision 1) follows revision 0.
  return ((await highestRemoteRevision(run, worktree)) ?? SEED_REVISION) === revision - 1 ? 'failed' : 'raced';
}

/** The worktree as a fresh checkout of origin/main: the discarded cut's files and build output must not ship. */
async function resetToMain(run, worktree, cacheRoot) {
  assertOwned(worktree, cacheRoot); // `clean -x` deletes ignored files: it must never run in a checkout the user works in
  await git(run, worktree, ['reset', '--hard', '--quiet', MAIN_REMOTE_REF]);
  // -x: build output is usually ignored. node_modules stays: the core links the primary's installed tree in as one.
  await git(run, worktree, ['clean', '-fdxq', '-e', 'node_modules']);
}

/**
 * Cut, build and commit via `attempt()` (it returns the revision it committed), then push. A rejected push means main moved:
 * take the new origin/main and run `attempt` again. A push that failed while origin did not move stops at once with git's
 * reason; one that landed is not cut again; one whose outcome cannot be read stops and says so. After the last try, refuse
 * with nothing standing. The local `release-N` is made once the push landed, at the commit origin holds.
 * @returns {Promise<{ revision: number }>} what `attempt` returned for the push that landed
 */
export async function pushWithRecut({ run, repo, worktree, cacheRoot, attempt, log, tries = MAX_PUSH_ATTEMPTS }) {
  for (let n = 1; n <= tries; n += 1) {
    const cut = await attempt();
    const push = await pushRelease(run, worktree, cut.revision);
    const verdict = push.ok ? 'landed' : await settlePush(run, worktree, cut.revision).catch(() => 'unknown');
    if (verdict === 'landed') {
      if (!push.ok) log(`the push of release ${cut.revision} reported an error, but the release commit is on origin/main: it landed.`);
      await tagLocally(run, repo, cut.revision, await headSha(run, worktree));
      return cut;
    }
    if (verdict === 'failed') {
      throw new Error(`origin refused the release push and nothing on origin moved, so cutting again cannot help:\n${push.error.message}\n`
        + 'Nothing was deployed and no release stands.');
    }
    if (verdict === 'unknown') {
      throw new Error(`the release push failed and origin could not be read again to tell whether it landed:\n${push.error.message}\n`
        + `Nothing was deployed. Release ${cut.revision} may or may not stand on origin/main; when origin answers, re-run: a release that landed is not cut twice.`);
    }
    log(`push of release ${cut.revision} was rejected (attempt ${n}/${tries}); taking the new origin/main and cutting again...`);
    await resetToMain(run, worktree, cacheRoot);
  }
  throw new Error(`could not push the release commit to origin/main after ${tries} tries: main moved every time. Nothing was deployed and no release stands.`);
}

/** Bring the caller's checkout to origin/main when that is a plain fast-forward on main. True when it now is there. */
export async function fastForwardCaller(run, repo) {
  try {
    await fetchMainRef(run, repo);
    const branch = (await git(run, repo, ['rev-parse', '--abbrev-ref', 'HEAD'])).stdout.trim();
    if (branch !== MAIN_BRANCH) return false;
    await git(run, repo, ['merge', '--ff-only', '--quiet', MAIN_REMOTE_REF]);
    return true;
  } catch { return false; }
}

/** A sync predicate for config validation: is `dir` a git checkout with an origin? `runSync` is ctx.runSync. */
export const checkoutHasOrigin = (runSync) => (dir) => {
  try { runSync('git', ['-C', dir, 'remote', 'get-url', 'origin'], { quiet: true, cwd: dir }); return true; } catch { return false; }
};
