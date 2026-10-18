/**
 * `<functions source>/release.json`: `{ "commit": "e48b248c", "hostingRevision": 780 }`, what a functions deploy shipped.
 *
 * The core writes it in the deploy worktree, after the release is cut and before the firebase command, whenever a
 * `functions:` target is listed (firebase.json's functions `predeploy` is the guard only). Two readers live inside the
 * deployed bundle: functions/telemetry.js (the Sentry release `<app>-functions@<commit>`) and functions/status.js (the
 * public `status` endpoint's `release`). It is a build output of the commit it names, never a source: gitignored.
 *
 *   commit           the first 8 hex characters of the worktree's `git rev-parse HEAD`
 *   hostingRevision  the project's own release line's `revision` (functions deploys do not count a release)
 *
 * It refuses (nothing written, the deploy stops) when the functions source holds a change HEAD does not: the commit
 * would name code that is not what is uploaded. There is no escape hatch; a worktree of origin/main is clean by
 * construction, so this only fires when a hook edited the functions tree.
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { COMMIT_LENGTH } from './release-file.mjs';

export const FUNCTIONS_RELEASE_FILE = 'release.json';

/** The bytes of the record. @param {{ commit: string, hostingRevision: number }} release */
export const serializeFunctionsRelease = (release) => `${JSON.stringify({ commit: release.commit, hostingRevision: release.hostingRevision }, null, 2)}\n`;

/**
 * The record a deploy from this tree writes, or why it is refused.
 * @param {{ head: string, hostingRevision: number, dirty: string[] }} input
 * @returns {{ release: { commit: string, hostingRevision: number } } | { refused: string }}
 */
export function planFunctionsRelease({ head, hostingRevision, dirty }) {
  const commit = head.trim().slice(0, COMMIT_LENGTH);
  if (!/^[0-9a-f]{8}$/.test(commit)) return { refused: `git HEAD "${head.trim()}" is not a commit` };
  if (!Number.isSafeInteger(hostingRevision) || hostingRevision < 1) return { refused: `hosting revision ${hostingRevision} is not a positive integer` };
  if (dirty.length === 0) return { release: { commit, hostingRevision } };
  const list = dirty.map((line) => `  ${line}`).join('\n');
  return { refused: `the functions source holds changes HEAD (${commit}) does not:\n${list}\nThe release record would name code that is not what is uploaded.` };
}

/**
 * Write the record into the functions source of `worktree`.
 * @param {{ run: Function, worktree: string, source: string, hostingRevision: number }} input
 * @returns {Promise<{ commit: string, hostingRevision: number }>}
 */
export async function writeFunctionsRelease({ run, worktree, source, hostingRevision }) {
  const git = async (args) => (await run('git', ['-C', worktree, ...args], { quiet: true })).stdout;
  // `--untracked-files=all` names a new file; the ignored release.json is not listed. node_modules is excluded by
  // pathspec: the core links the primary's installed tree in as a SYMLINK, which a `node_modules/` ignore line does not
  // match, and the dependency tree is not code the commit names.
  const status = await git(['status', '--porcelain', '--untracked-files=all', '--', source, `:(exclude)${source}/node_modules`]);
  const plan = planFunctionsRelease({ head: await git(['rev-parse', 'HEAD']), hostingRevision, dirty: status.split('\n').filter(Boolean) });
  if ('refused' in plan) throw new Error(plan.refused);
  writeFileSync(join(worktree, source, FUNCTIONS_RELEASE_FILE), serializeFunctionsRelease(plan.release));
  return plan.release;
}
