/**
 * One deploy per checkout at a time. A run owns the checkout's deploy worktree (under the deploy cache root, git.mjs); a
 * second run from the same checkout would remove it as a "left-over from a killed run" while the first is still building
 * or uploading from it, and the first run's own cleanup would then remove the second's. The lock lives in the checkout's git directory (not the working tree, so it is
 * never untracked noise) and holds the owner's pid; a lock whose process is gone is a killed run's and is taken over.
 */
import { randomBytes } from 'node:crypto';
import { linkSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export const LOCK_FILE = 'tmv-deploy.lock';
const TAKE_TRIES = 3;

/** Another live process holds the lock. Exit code 1, like every refusal. */
export class LockHeldError extends Error {
  constructor(file, pid) {
    super(`another \`npm run deploy\` (pid ${pid}) is running from this checkout: two runs would share one deploy worktree and `
      + `remove each other's. Wait for it to finish (lock: ${file}).`);
    this.name = 'LockHeldError';
  }
}

/** Whether a process exists (signal 0 only probes; EPERM means it exists under another user). */
export function pidAlive(pid) {
  if (!Number.isInteger(pid) || pid < 1) return false;
  try { process.kill(pid, 0); return true; } catch (error) { return error.code === 'EPERM'; }
}

const holderOf = (file) => {
  try { return Number.parseInt(readFileSync(file, 'utf8'), 10); } catch { return NaN; }
};

/**
 * Take the lock of the checkout whose git directory is `gitDir`: the lock file's path, to hand to {@link releaseLock}.
 * The file appears already holding the pid (written beside it and linked into place), so a second run never reads it half made.
 * @param {string} gitDir @param {{ pid?: number, alive?: (pid: number) => boolean }} [options]
 */
export function acquireLock(gitDir, { pid = process.pid, alive = pidAlive } = {}) {
  const file = join(gitDir, LOCK_FILE);
  const mine = `${file}.${pid}.${randomBytes(4).toString('hex')}`;
  writeFileSync(mine, `${pid}\n`);
  try {
    for (let n = 0; n < TAKE_TRIES; n += 1) {
      try { linkSync(mine, file); return file; } catch (error) { if (error.code !== 'EEXIST') throw error; }
      const holder = holderOf(file);
      if (alive(holder)) throw new LockHeldError(file, holder);
      rmSync(file, { force: true }); // the lock of a run that was killed
    }
    throw new Error(`could not take ${file}: another run keeps taking it`);
  } finally {
    rmSync(mine, { force: true });
  }
}

/** Give the lock up. Never throws: it runs on every way out. @param {string} file */
export function releaseLock(file) {
  try { rmSync(file, { force: true }); } catch { /* the next run finds a dead pid and takes over */ }
}
