// Validates the lesson data against the lesson standard (docs/lesson-standard.md, section 26.7) and the revision lock (section 13).
// Run: node tests/validate-lessons.mjs
import { loadFromPublic } from './lessons/load.mjs';
import { runRules } from './lessons/run.mjs';
import { parseTargetArgs } from './lessons/paths.mjs';
import { readJsonIfPresent, readCommittedJson } from './lessons/lockfile.mjs';
import { collectSite } from './lessons/site.mjs';
import { collectDesigns } from './lessons/designs.mjs';

export async function gatherInput({ publicDir, lockFile, heldFile, designsDir }) {
  const data = await loadFromPublic(publicDir);
  return {
    data,
    lock: await readJsonIfPresent(lockFile),
    committedLock: readCommittedJson(lockFile),
    held: heldFile ? await readJsonIfPresent(heldFile) : null,
    committedHeld: heldFile ? readCommittedJson(heldFile) : null,
    site: await collectSite(publicDir),
    designs: designsDir ? await collectDesigns(designsDir) : {}
  };
}

async function main() {
  const target = parseTargetArgs(process.argv.slice(2));
  if (target.rest.length > 0) throw new Error(`unknown argument: ${target.rest.join(' ')}`);
  const input = await gatherInput(target);
  const result = runRules(input);
  if (result.failures.length > 0) {
    console.error(`${result.failures.length} of ${result.checks} lesson checks failed:`);
    result.failures.forEach(f => console.error(`  - ${f.message}`));
    result.skipped.forEach(s => console.error(`  (${s})`));
    process.exit(1);
  }
  console.log(`✓ ${result.checks} lesson checks passed across ${result.subjects} subjects and ${result.lessons} lessons`);
  if (result.held && result.held.length > 0) console.log(`  ${result.held.length} findings are held, not fixed (tests/lessons/held-findings.json, V58):\n${result.held.map(f => `    - ${f.message}`).join('\n')}`);
}

main().catch(error => { console.error(error.message); process.exit(1); });
