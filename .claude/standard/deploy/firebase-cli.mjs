/**
 * Everything the deploy runs: the process runner every external call goes through (so tests stub one function), the
 * PATH it builds, and the firebase CLI pinned by the primary checkout.
 *
 * Why not a bare `firebase`: which CLI a bare name reaches depends on how the script was started. The CLI is not a thin
 * uploader: it LOADS the functions bundle to discover exports, so a CLI too old for the functions SDK fails every function
 * with "Failed to load function" (ADR-0155). The repo's own devDependency is the one that is version-checked against the
 * SDK; this makes it the one that actually runs, every time. A throwaway worktree has no node_modules, so the pinned
 * binaries come from the primary checkout (and, for a release line in a sibling repo, from that repo's primary).
 */
import { spawn, spawnSync } from 'node:child_process';
import { accessSync, constants } from 'node:fs';
import { delimiter, join, resolve, sep } from 'node:path';

/** EX_TEMPFAIL: "could not run" because the pinned CLI is not installed. */
export const EX_TEMPFAIL = 75;
const OUTPUT_TAIL_CHARS = 2000;

/** A command that exited non-zero (or could not start). Carries what it printed. */
export class CommandError extends Error {
  constructor(command, status, stdout, stderr) {
    const tail = (stderr || stdout).trim().slice(-OUTPUT_TAIL_CHARS);
    super(`${command} failed (exit ${status})${tail ? `:\n${tail}` : ''}`);
    this.name = 'CommandError';
    this.command = command;
    this.status = status;
    this.stdout = stdout;
    this.stderr = stderr;
  }
}

/** Children started and not yet exited: a signal must not leave them running in a worktree that is being removed. */
const running = new Set();

/** Ask every running child to stop. @param {NodeJS.Signals} [signal] */
export function killRunning(signal = 'SIGTERM') {
  running.forEach((child) => { try { child.kill(signal); } catch { /* already gone */ } });
}

const within = (dir, root) => dir === root || dir.startsWith(root + sep);

/**
 * The PATH for a command run in `cwd`: the .bin of the scope that contains `cwd` first, then every other scope's, then the
 * inherited PATH. A scope is `{ roots: string[], bin: string }`.
 */
export function pathFor(cwd, scopes, inheritedPath) {
  const here = resolve(cwd);
  const ordered = [...scopes.filter((s) => s.roots.some((r) => within(here, resolve(r)))), ...scopes.filter((s) => !s.roots.some((r) => within(here, resolve(r))))];
  return [...ordered.map((s) => s.bin), inheritedPath].filter(Boolean).join(delimiter);
}

function spawnOptions({ cwd, env }, defaults) {
  const base = { ...defaults.env, ...env };
  return { cwd, env: { ...base, PATH: pathFor(cwd, defaults.scopes, base.PATH) } };
}

/**
 * The runner. `run(cmd, args, { cwd, env, quiet })` resolves `{ status: 0, stdout, stderr }` and rejects with a
 * CommandError on any other exit; output streams to the terminal unless `quiet`. `runSync` is the same for the signal
 * handler's cleanup, where nothing async can finish.
 * @param {{ cwd: string, scopes: { roots: string[], bin: string }[], env?: NodeJS.ProcessEnv, stdout?: Function, stderr?: Function }} defaults
 */
export function createRunner(defaults) {
  const merged = { env: process.env, ...defaults };
  const out = merged.stdout ?? ((text) => process.stdout.write(text));
  const err = merged.stderr ?? ((text) => process.stderr.write(text));
  const label = (cmd, args) => [cmd, ...args].join(' ');

  function run(cmd, args = [], opts = {}) {
    const options = spawnOptions({ cwd: opts.cwd ?? defaults.cwd, env: opts.env }, merged);
    return new Promise((resolveRun, reject) => {
      const child = spawn(cmd, args, { ...options, stdio: ['ignore', 'pipe', 'pipe'] });
      running.add(child);
      let stdout = '';
      let stderr = '';
      child.stdout.on('data', (chunk) => { stdout += chunk; if (!opts.quiet) out(chunk.toString()); });
      child.stderr.on('data', (chunk) => { stderr += chunk; if (!opts.quiet) err(chunk.toString()); });
      child.on('error', (error) => { running.delete(child); reject(new CommandError(label(cmd, args), 'spawn', stdout, `${error.message}\n${stderr}`)); });
      child.on('close', (status) => {
        running.delete(child);
        if (status === 0) resolveRun({ status, stdout, stderr });
        else reject(new CommandError(label(cmd, args), status, stdout, stderr));
      });
    });
  }

  function runSync(cmd, args = [], opts = {}) {
    const options = spawnOptions({ cwd: opts.cwd ?? defaults.cwd, env: opts.env }, merged);
    const res = spawnSync(cmd, args, { ...options, encoding: 'utf8' });
    if (res.status !== 0) throw new CommandError(label(cmd, args), res.status ?? 'spawn', res.stdout ?? '', res.stderr || res.error?.message || '');
    return { status: 0, stdout: res.stdout, stderr: res.stderr };
  }

  return { run, runSync };
}

/** The pinned CLI of the primary checkout, or an error carrying exit code 75 when it is not installed. */
export function pinnedCli(primary) {
  const cli = join(primary, 'node_modules', '.bin', 'firebase');
  try { accessSync(cli, constants.X_OK); } catch {
    const error = new Error(
      `ABORTED: this repo's firebase-tools is not installed.\n  expected: ${cli}\n`
      + 'The pinned CLI is used on purpose rather than any global one: the CLI loads the functions bundle, and a CLI too old '
      + 'for the functions SDK fails every function with "Failed to load function" (ADR-0155). Nothing was started.\n'
      + `  Fix it:  (cd ${JSON.stringify(primary)} && npm install)`,
    );
    error.exitCode = EX_TEMPFAIL;
    throw error;
  }
  return cli;
}

/** Whether the list names a functions target: the one case that needs `--force` (nobody is there to answer a confirmation). */
export const hasFunctionsTarget = (words) => words.some((w) => w.startsWith('functions:'));

/** The arguments of the one firebase command: the list as given, `--force` iff a functions target is in it. */
export function deployArgs(words) {
  return ['deploy', '--only', words.join(','), ...(hasFunctionsTarget(words) ? ['--force'] : [])];
}
