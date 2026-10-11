// Section 13, R5: reading and writing the lock, and the checks anchored to history.
// The lock of the last commit binds every entry that has been deployed: a lock compared only with the working tree could be
// deleted, or edited to match, so the history is the anchor.
import { readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { dirOf, nameOf } from './paths.mjs';

export async function readJsonIfPresent(fileUrl) {
  let source;
  try { source = await readFile(fileUrl, 'utf8'); }
  catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
  try { return JSON.parse(source); }
  catch (error) { throw new Error(`${fileUrl.pathname} is not valid JSON: ${error.message}`); }
}

// What git says when a file simply is not in the last commit (so there is no history to anchor to).
const NOT_COMMITTED = /exists on disk, but not in|does not exist in|not a git repository|bad revision|unknown revision|invalid object name|ambiguous argument|bad object/i;

// The JSON committed at HEAD for a working file, or null when it was never committed.
export function readCommittedJson(fileUrl) {
  try {
    const out = execFileSync('git', ['show', `HEAD:./${nameOf(fileUrl)}`], { cwd: dirOf(fileUrl), stdio: ['ignore', 'pipe', 'pipe'] });
    return JSON.parse(out.toString());
  } catch (error) {
    const stderr = error.stderr ? error.stderr.toString() : '';
    if (NOT_COMMITTED.test(stderr) || error.code === 'ENOENT') return null;
    throw new Error(`could not read ${nameOf(fileUrl)} at HEAD: ${stderr || error.message}`);
  }
}

const GROUPS = ['subjects', 'lessons'];

// For every committed entry that has been deployed: different content needs a higher rev, the same content needs the same rev,
// and the entry may not disappear. Returns the problems as strings.
export function anchorProblems(now, committed) {
  if (!committed) return [];
  return GROUPS.flatMap(group => Object.entries(committed[group] || {}).filter(([, theirs]) => theirs.deployed).flatMap(([id, theirs]) => {
    const mine = (now[group] || {})[id];
    if (!mine) return [`${id} was deployed and has disappeared`];
    if (mine.fp !== theirs.fp && !(mine.rev > theirs.rev)) return [`${id}: content changed since it was deployed but rev is still ${mine.rev}; raise it, add its history line, then regenerate the lock`];
    if (mine.fp === theirs.fp && mine.rev !== theirs.rev) return [`${id}: rev changed (${theirs.rev} to ${mine.rev}) but content did not`];
    return [];
  }));
}

// The new lock: every entry of the data, keeping `deployed` from the committed lock (else the working one). It never invents it.
export function nextLock(now, committed, working) {
  const keep = (group, id) => {
    const fromCommit = committed && committed[group] && committed[group][id];
    const fromWorking = working && working[group] && working[group][id];
    const deployed = (fromCommit && fromCommit.deployed) || (fromWorking && fromWorking.deployed);
    return deployed ? { deployed } : {};
  };
  const withDeployed = group => Object.fromEntries(Object.entries(now[group]).map(([id, e]) => [id, { ...e, ...keep(group, id) }]));
  return { standard: now.standard, subjects: withDeployed('subjects'), lessons: withDeployed('lessons') };
}

export const formatLock = lock => JSON.stringify(lock, null, 2) + '\n';
export async function writeLock(fileUrl, lock) { await writeFile(fileUrl, formatLock(lock)); }
