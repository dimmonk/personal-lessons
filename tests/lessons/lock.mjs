// node tests/lessons/lock.mjs [--public <dir>] [--lock <file>]
// Rewrites the lock (section 13, R5) from the data. It refuses, and writes nothing, when
//   - an entry that was deployed has changed content but not a higher rev,
//   - an entry that was deployed has a different rev but the same content, or
//   - an entry that was deployed would disappear.
// It keeps `deployed` and never invents it (the deploy script stamps it).
import { pathToFileURL } from 'node:url';
import { loadFromPublic } from './load.mjs';
import { lockEntries } from './fingerprint.mjs';
import { parseTargetArgs } from './paths.mjs';
import { readJsonIfPresent, readCommittedJson, anchorProblems, nextLock, writeLock } from './lockfile.mjs';

export async function planLock(publicDir, lockFile) {
  const data = await loadFromPublic(publicDir);
  const now = lockEntries(data);
  const committed = readCommittedJson(lockFile);
  const working = await readJsonIfPresent(lockFile);
  return { now, problems: anchorProblems(now, committed), lock: nextLock(now, committed, working) };
}

async function main() {
  const { publicDir, lockFile } = parseTargetArgs(process.argv.slice(2));
  const { problems, lock } = await planLock(publicDir, lockFile);
  if (problems.length > 0) {
    console.error('lock not written:');
    problems.forEach(p => console.error(`  - ${p}`));
    process.exit(1);
  }
  await writeLock(lockFile, lock);
  console.log(`lock written: ${Object.keys(lock.subjects).length} subjects, ${Object.keys(lock.units).length} units -> ${lockFile.pathname}`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => { console.error(error.message); process.exit(1); });
}
