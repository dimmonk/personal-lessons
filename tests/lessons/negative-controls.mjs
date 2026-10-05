// A guard is not coverage until it has been seen to fail. This seeds one fault per rule into an in-memory copy of the exemplar
// (never on disk) and asserts that exactly that rule goes red, then prints which rules have a control and which do not, and why.
// Run: node tests/lessons/negative-controls.mjs
import { pathToFileURL } from 'node:url';
import { loadFromPublic } from './load.mjs';
import { runRules } from './run.mjs';
import { RULES } from './rules-index.mjs';
import { lockEntries } from './fingerprint.mjs';
import { collectSite, collectValidatorSources } from './site.mjs';
import { setIn, updateIn, removeIn, plain } from './immutable.mjs';
import { CONTROLS, NO_CONTROL } from './controls-table.mjs';
import { KIND_FIXTURES, loadKindFixture } from './kind-fixtures.mjs';

// The exemplar is the live Psychology subject (Unit Two is the unit every control seeds its fault into), read from public/,
// its one copy, so the controls can never run on wording the app no longer ships. Only that subject is kept, which keeps a
// control as fast as one subject's validation.
const EXEMPLAR = new URL('../../public/', import.meta.url);
const EXEMPLAR_SUBJECT = 'psychology';
const onlyExemplarSubject = data => ({ ...data, subjects: { [EXEMPLAR_SUBJECT]: data.subjects[EXEMPLAR_SUBJECT] } });

const emptyInput = data => ({ data, lock: lockEntries(data), committedLock: null, standard0: { units: [] }, committedStandard0: { units: [] },
  site: { files: [], indexScripts: null, swShell: null }, validatorSources: {} });

// The exemplar, and a unit of each other kind (fact, procedure, gate). The exemplar runs every rule; a unit of another kind runs only the
// rules that apply to its kind and that its fixture meets (kind-fixtures.mjs).
async function baselines() {
  const data = onlyExemplarSubject(plain(await loadFromPublic(EXEMPLAR)));
  const exemplar = {
    data, lock: lockEntries(data), committedLock: null, standard0: { units: [] }, committedStandard0: { units: [] },
    site: await collectSite(EXEMPLAR), validatorSources: await collectValidatorSources()
  };
  const kinds = Object.fromEntries(await Promise.all(Object.keys(KIND_FIXTURES).map(async kind => [kind, emptyInput(plain(await loadKindFixture(kind)))])));
  return { exemplar, ...kinds };
}

const redRules = result => [...new Set(result.failures.map(f => f.rule))].sort();
const sameList = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

// The input a control runs on: the exemplar with its fault. The lock is regenerated from the faulty data, so that a content fault
// does not also turn the lock rule (V46) red, unless the control is about the lock itself.
function faultyInput(base, control) {
  const data = control.data ? control.data(base.data, { setIn, updateIn, removeIn }) : base.data;
  const lock = control.keepLock ? base.lock : lockEntries(data);
  const input = { ...base, data, lock };
  return control.input ? control.input(input) : input;
}

const rulesFor = control => control.only ? RULES.filter(r => r.id === control.rule)
  : control.base ? RULES.filter(r => KIND_FIXTURES[control.base].rules.includes(r.id) && r.scope !== 'site') : RULES;

function runControl(bases, control) {
  const input = faultyInput(bases[control.base || 'exemplar'], control);
  const result = runRules(input, rulesFor(control));
  const red = redRules(result);
  // green: the fault is one the rule must let through (an exemption), so nothing may go red
  const expected = control.green ? [] : [control.rule, ...(control.also || [])].sort();
  const unprefixed = result.failures.filter(f => !f.message.startsWith(`${f.rule} `));
  return { red, expected, ok: sameList(red, expected) && unprefixed.length === 0, detail: unprefixed.map(f => `a failure does not start with its rule id: ${f.message}`) };
}

export async function runAll() {
  const bases = await baselines();
  const results = ['exemplar', ...Object.keys(KIND_FIXTURES)].map(name => {
    const rules = name === 'exemplar' ? RULES : RULES.filter(r => KIND_FIXTURES[name].rules.includes(r.id) && r.scope !== 'site');
    const clean = runRules(bases[name], rules);
    return { name: `baseline, ${name === 'exemplar' ? 'the exemplar' : `a ${name} unit`}`, rule: '(none)', red: redRules(clean), expected: [], ok: clean.failures.length === 0, detail: clean.failures.slice(0, 3).map(f => f.message) };
  });
  for (const control of CONTROLS) {
    let outcome;
    try { outcome = runControl(bases, control); }
    catch (error) { outcome = { red: [], expected: [control.rule], ok: false, detail: [`the control itself failed to build: ${error.message}`] }; }
    results.push({ name: control.name, rule: control.rule, ...outcome });
  }
  return results;
}

const allRuleIds = () => [...new Set(RULES.map(r => r.id))];

export function coverageReport(results) {
  const covered = new Set(results.filter(r => r.rule !== '(none)').map(r => r.rule));
  const missing = allRuleIds().filter(id => !covered.has(id));
  const unexplained = missing.filter(id => !NO_CONTROL[id]);
  const stale = Object.keys(NO_CONTROL).filter(id => covered.has(id) || !allRuleIds().includes(id));
  return { covered: [...covered], missing, unexplained, stale };
}

async function main() {
  const results = await runAll();
  const failed = results.filter(r => !r.ok);
  for (const r of results) {
    const line = r.ok ? `ok    ${r.rule.padEnd(4)} ${r.name}` : `FAIL  ${r.rule.padEnd(4)} ${r.name}: expected red ${JSON.stringify(r.expected)}, got ${JSON.stringify(r.red)}`;
    (r.ok ? console.log : console.error)(line);
    (r.detail || []).forEach(d => console.error(`        ${d}`));
  }
  const report = coverageReport(results);
  console.log(`\nrules with a control (${report.covered.length}): ${[...report.covered].sort((a, b) => Number(a.slice(1)) - Number(b.slice(1))).join(' ')}`);
  console.log('rules without a control:');
  Object.entries(NO_CONTROL).forEach(([id, why]) => console.log(`  ${id}: ${why}`));
  if (report.unexplained.length) console.error(`rules with neither a control nor a stated reason: ${report.unexplained.join(' ')}`);
  if (report.stale.length) console.error(`rules listed as having no control that do have one, or do not exist: ${report.stale.join(' ')}`);
  if (failed.length || report.unexplained.length || report.stale.length) {
    console.error(`\n${failed.length} of ${results.length} controls failed`);
    process.exit(1);
  }
  console.log(`\n✓ ${results.filter(r => r.rule !== '(none)').length} negative controls went red on exactly their own rule (${results.filter(r => r.rule === '(none)').length} baselines green)`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => { console.error(error.stack || error.message); process.exit(1); });
}
