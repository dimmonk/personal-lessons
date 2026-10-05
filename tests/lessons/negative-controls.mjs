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

const EXEMPLAR = new URL('../../docs/lesson-standard/exemplar/public/', import.meta.url);

async function baseline() {
  const data = plain(await loadFromPublic(EXEMPLAR));
  return {
    data,
    lock: lockEntries(data),
    committedLock: null,
    standard0: { units: [] },
    committedStandard0: { units: [] },
    site: await collectSite(EXEMPLAR),
    validatorSources: await collectValidatorSources()
  };
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

function runControl(base, control) {
  const input = faultyInput(base, control);
  const rules = control.only ? RULES.filter(r => r.id === control.rule) : RULES;
  const result = runRules(input, rules);
  const red = redRules(result);
  const expected = [control.rule, ...(control.also || [])].sort();
  const unprefixed = result.failures.filter(f => !f.message.startsWith(`${f.rule} `));
  return { red, expected, ok: sameList(red, expected) && unprefixed.length === 0, detail: unprefixed.map(f => `a failure does not start with its rule id: ${f.message}`) };
}

export async function runAll() {
  const base = await baseline();
  const clean = runRules(base);
  const results = [{ name: 'baseline', rule: '(none)', red: redRules(clean), expected: [], ok: clean.failures.length === 0, detail: clean.failures.slice(0, 3).map(f => f.message) }];
  for (const control of CONTROLS) {
    let outcome;
    try { outcome = runControl(base, control); }
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
  console.log(`\n✓ ${results.length - 1} negative controls went red on exactly their own rule (baseline green)`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => { console.error(error.stack || error.message); process.exit(1); });
}
