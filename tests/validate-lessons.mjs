// Validates the lesson data against the lesson standard (docs/lesson-standard.md, section 8) and the revision lock (section 13).
// Run: node tests/validate-lessons.mjs
//      node tests/validate-lessons.mjs --public docs/lesson-standard/exemplar/public --lock docs/lesson-standard/exemplar/tests/lessons.lock.json
// Rules apply only to units and subjects of standard 1 or more; data at standard 0 is skipped (F5).
import { loadFromPublic } from './lessons/load.mjs';
import { runRules } from './lessons/run.mjs';
import { parseTargetArgs } from './lessons/paths.mjs';
import { readJsonIfPresent, readCommittedJson } from './lessons/lockfile.mjs';
import { collectSite, collectValidatorSources } from './lessons/site.mjs';

export async function gatherInput({ publicDir, lockFile, standard0File }) {
  const data = await loadFromPublic(publicDir);
  return {
    data,
    lock: await readJsonIfPresent(lockFile),
    committedLock: readCommittedJson(lockFile),
    standard0: standard0File ? await readJsonIfPresent(standard0File) : null,
    committedStandard0: standard0File ? readCommittedJson(standard0File) : null,
    site: await collectSite(publicDir),
    validatorSources: await collectValidatorSources()
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
  if (!result.standard1) {
    console.log(`✓ ${result.checks} lesson checks passed; no standard-1 lesson data yet, so no unit rules ran`);
    return;
  }
  console.log(`✓ ${result.checks} lesson checks passed across ${result.units} units`);
}

main().catch(error => { console.error(error.message); process.exit(1); });
