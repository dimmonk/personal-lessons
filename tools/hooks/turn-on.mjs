// Turns the repository's hooks on (core.hooksPath = .githooks), and only that. It refuses to write git settings when GIT_DIR or
// GIT_WORK_TREE is set (inside a hook, or a run pointed at a temporary tree): a git setting written then lands in the shared config and
// can point every checkout at a folder that no longer exists (2026-10-12: core.worktree pointed at a deleted temporary folder and broke
// git in every checkout). Run by npm test (pretest) and npm run hooks.
import { execFileSync } from 'node:child_process';

if (process.env.GIT_DIR || process.env.GIT_WORK_TREE) {
  console.log('hooks: GIT_DIR or GIT_WORK_TREE is set, so no git setting is written');
  process.exit(0);
}
execFileSync('git', ['config', '--local', 'core.hooksPath', '.githooks'], { stdio: 'inherit' });
