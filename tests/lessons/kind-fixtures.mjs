// The fixture units of tests/fixtures, one for each unit kind, loaded headlessly so the validator's kind-specific rules (section 8's
// table: fact, procedure and gate units) can be shown to pass on a unit of that kind and to go red on a fault seeded into it.
// The fixtures are the ones tests/e2e-kinds.mjs plays in the browser. They are small made-up units, not exemplars: each is checked
// only against the rules named here, and the rules it does not meet are listed beside its name with the reason. A fixture function
// uses only browser globals (it is sent to the page as source), so it is evaluated here in a context that holds the registry.
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';
import { REPO } from './paths.mjs';
import { REGISTRY_FILE } from './load.mjs';

// Rules that apply to the kind and that the fixture meets. A rule the fixture does not meet is not in the list, and the reason is given.
export const KIND_FIXTURES = {
  fact: { file: 'fact-unit.mjs', register: 'registerFactUnit',
    rules: ['V0', 'V3', 'V4', 'V5', 'V7', 'V10', 'V25', 'V30', 'V32', 'V35', 'V38', 'V39', 'V44', 'V57'], unmet: {} },
  procedure: { file: 'procedure-unit.mjs', register: 'registerProcedureUnit',
    rules: ['V0', 'V3', 'V4', 'V7', 'V10', 'V18', 'V21', 'V25', 'V30', 'V32', 'V35', 'V38', 'V39', 'V40', 'V41', 'V44'],
    unmet: { V5: 'the unit teaches the gate question and has no question card for it' } },
  gate: { file: 'gate-unit.mjs', register: 'registerGateUnit',
    rules: ['V0', 'V10', 'V25', 'V38'],
    unmet: { V35: 'its cases are named by a family, and V35 reads an outcome', V39: 'practice per family is not written yet', V44: 'returns per family are not written yet' } }
};

export async function loadKindFixture(kind) {
  const { file, register } = KIND_FIXTURES[kind];
  const module = await import(new URL(`tests/fixtures/${file}`, REPO));
  const context = vm.createContext({ console });
  vm.runInContext(await readFile(new URL(`public/${REGISTRY_FILE}`, REPO), 'utf8'), context);
  vm.runInContext(`(${module[register].toString()})()`, context);
  const FC = context.FC;
  return { standard: FC.STANDARD, subjects: Object.fromEntries(FC.ids().map(id => [id, FC.get(id)])) };
}
