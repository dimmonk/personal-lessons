/**
 * The git side of a deploy: every call goes through the `run` the caller passes (ctx.run), so tests stub one function.
 *
 * What ships is a throwaway worktree at origin/main, inside the repo so node resolution walks up into the primary's
 * node_modules (ADR-0152). A release is one commit of the release paths alone, `chore: release N`, tagged `release-N` and
 * pushed with the branch in one atomic push; a push that raced another window is not rebased (the release file would
 * conflict): the cut is thrown away and made again from the new origin/main, up to five times.
 */
import { rmSync } from 'node:fs';
import { basename } from 'node:path';

export const WORKTREE_DIR = '.deploy-worktree';
export const MAX_PUSH_ATTEMPTS = 5;
export const MAIN_BRANCH = 'main';
/** The full name, so no tag or branch spelled `origin/main` can stand in for it. */
const MAIN_REMOTE_REF = `refs/remotes/origin/${MAIN_BRANCH}`;
const TAG_PREFIX = 'release-';
const REMOTE_TAG = /^[0-9a-f]+\trefs\/tags\/release-(\d+)$/;

/** The tag of a release. @param {number} revision */
export const releaseTag = (revision) => `${TAG_PREFIX}${revision}`;

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

/** The deploy worktree is the one directory this module deletes outright; nothing else is ever removed by name. */
function assertOwned(worktree) {
  if (basename(worktree) !== WORKTREE_DIR) throw new Error(`refusing to remove ${worktree}: it is not a ${WORKTREE_DIR}`);
}

/**
 * Forget a worktree, registered or not, and the directory itself: a run that was killed leaves one behind, and a process
 * still running in it can re-create the directory after git removed it. Never throws for a failed removal: it runs on every
 * way out, and the next `addWorktree` reports a directory it cannot clear.
 */
export async function removeWorktree(run, repo, worktree) {
  assertOwned(worktree);
  await git(run, repo, ['worktree', 'remove', '--force', worktree]).catch(() => {});
  try { rmSync(worktree, { recursive: true, force: true }); } catch { /* reported by the next addWorktree */ }
  await git(run, repo, ['worktree', 'prune']).catch(() => {});
}

/** The same for the signal handler, where nothing async can finish. */
export function removeWorktreeSync(runSync, repo, worktree) {
  assertOwned(worktree);
  const quiet = (args) => { try { runSync('git', ['-C', repo, ...args], { quiet: true }); } catch { /* best effort on the way out */ } };
  quiet(['worktree', 'remove', '--force', worktree]);
  try { rmSync(worktree, { recursive: true, force: true }); } catch { /* best effort on the way out */ }
  quiet(['worktree', 'prune']);
}

/** A detached worktree at `sha`; a left-over one from a killed run is removed first. */
export async function addWorktree(run, repo, worktree, sha) {
  await removeWorktree(run, repo, worktree);
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
  return (await highestRemoteRevision(run, worktree)) === revision - 1 ? 'failed' : 'raced';
}

/** The worktree as a fresh checkout of origin/main: the discarded cut's files and build output must not ship. */
async function resetToMain(run, worktree) {
  assertOwned(worktree); // `clean -x` deletes ignored files: it must never run in a checkout the user works in
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
export async function pushWithRecut({ run, repo, worktree, attempt, log, tries = MAX_PUSH_ATTEMPTS }) {
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
    await resetToMain(run, worktree);
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
