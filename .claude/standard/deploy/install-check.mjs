/**
 * Does an installed node_modules match the lockfile of the tree about to be built or deployed?
 *
 * The deploy runs from a throwaway worktree that has no node_modules of its own: the build, the preflight and the firebase
 * CLI (which LOADS the functions bundle to discover exports) all run against the primary checkout's install. A primary
 * installed from an older lock builds or deploys main's source against the wrong dependencies (ADR-0155). Comparing the
 * WHOLE lock rather than one package catches every such skew, and costs a few hundred stat calls.
 *
 * Skipped, because a correct install legitimately lacks them: the root entry, links, and OPTIONAL entries that are absent
 * (platform binaries). An optional entry that IS installed must still match. Dev entries are required when the install is
 * a full one (`requireDev`: the root install a build runs from) and skipped for a production-only install (the functions
 * tree, which Cloud Build installs with --omit=dev).
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

/**
 * Compare a package-lock v2/v3 `packages` map against what is installed.
 * @param {Record<string, { version?: string, optional?: boolean, dev?: boolean, link?: boolean }>} lockPackages
 * @param {(relPath: string) => string | null} installedVersionAt version installed at e.g. `node_modules/x`, or null
 * @param {{ requireDev: boolean }} options
 * @returns {string[]} one line per mismatch
 */
export function compareInstallToLock(lockPackages, installedVersionAt, { requireDev }) {
  const problems = [];
  for (const [relPath, entry] of Object.entries(lockPackages)) {
    if (!relPath.startsWith('node_modules/') || entry.link || !entry.version) continue;
    if (entry.dev && !requireDev) continue;
    const installed = installedVersionAt(relPath);
    if (installed === null) {
      if (!entry.optional) problems.push(`${relPath}: missing (lock wants ${entry.version})`);
      continue;
    }
    if (installed !== entry.version) problems.push(`${relPath}: installed ${installed}, lock wants ${entry.version}`);
  }
  return problems;
}

function installedVersion(pkgRoot, relPath) {
  const manifest = join(pkgRoot, relPath, 'package.json');
  if (!existsSync(manifest)) return null;
  try { return JSON.parse(readFileSync(manifest, 'utf8')).version ?? null; } catch { return null; }
}

/**
 * The problems between a lockfile and an installed node_modules, or a thrown error when the lock cannot be read.
 * Lock paths are relative to the package root, which is the node_modules directory's parent.
 * @param {string} lockFile @param {string} modulesDir @param {{ requireDev: boolean }} options
 */
export function installProblems(lockFile, modulesDir, options) {
  let lock;
  try { lock = JSON.parse(readFileSync(lockFile, 'utf8')); } catch (error) {
    throw new Error(`cannot read ${lockFile}: ${error.message}`);
  }
  if (!lock.packages) throw new Error(`${lockFile} has no "packages" map (lockfileVersion ${lock.lockfileVersion}); expected v2 or v3`);
  const pkgRoot = dirname(resolve(modulesDir));
  return compareInstallToLock(lock.packages, (relPath) => installedVersion(pkgRoot, relPath), options);
}
