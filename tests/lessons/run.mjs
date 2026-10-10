// The runner: applies every rule to the data and collects the result.
// Input (all in memory, so a fault can be seeded without touching the disk):
//   data                 { standard, subjects }              from load.mjs
//   lock                 the working lock, or null
//   committedLock        the lock of the last commit, or null
//   site                 { files: [{ path, lines }], indexScripts, swShell, hasIndex } for V47
//   held, committedHeld  { held: [message, ...] } the working list of held findings (V58), and the list of the last commit
//   validatorSources     { name: source text } for V29
//   designs              { [subjectId]: design record } from docs/subjects/<id>/design.md, for V69 (designs.mjs)
// Every registered subject and unit is held to every rule. V0 runs first: when a subject or unit fails its shape,
// its other rules are skipped and the run says so, because rules read the shape they were promised.
import { subjectView, unitView } from './model.mjs';
import { RULES } from './rules-index.mjs';

const byScope = (rules, scope) => rules.filter(r => r.scope === scope);

function createReport() {
  const state = { checks: 0, failures: [], skipped: [] };
  const checker = (rule, where) => (ok, message) => {
    state.checks += 1;
    if (!ok) state.failures.push({ rule, message: (where ? `${rule} ${where}: ${message}` : `${rule} ${message}`).replace(/: $/, '') });
  };
  return { state, checker };
}

function runOne(rule, ctx, where, report) {
  const check = report.checker(rule.id, where);
  try { rule.run(ctx, check); }
  catch (error) { check(false, `the rule stopped with an error (${error.message})`); }
}

const failedRules = (report, before) => new Set(report.state.failures.slice(before).map(f => f.rule));

function runScope(rules, ctx, where, report) {
  const first = rules.filter(r => r.id === 'V0');
  const rest = rules.filter(r => r.id !== 'V0');
  const before = report.state.failures.length;
  first.forEach(r => runOne(r, ctx, where, report));
  if (failedRules(report, before).has('V0')) {
    report.state.skipped.push(`${where}: ${rest.length} rules skipped because its shape (V0) failed`);
    return false;
  }
  rest.forEach(r => runOne(r, ctx, where, report));
  return true;
}

// V58. A finding the project has recorded and not yet fixed (tests/lessons/held-findings.json) is reported as held, not as a failure.
// The list may only shrink: an entry that no longer fires has to be removed, and an entry that was not in the last commit's list is refused.
function applyHeld(report, input) {
  const held = input.held ? input.held.held : [];
  const committed = input.committedHeld ? input.committedHeld.held : null;
  const fired = new Set(report.state.failures.map(f => f.message));
  const check = report.checker('V58', '');
  report.state.held = report.state.failures.filter(f => held.includes(f.message));
  report.state.failures = report.state.failures.filter(f => !held.includes(f.message));
  held.filter(m => !fired.has(m)).forEach(m => check(false, `a held finding no longer fires, so remove it from the list: ${m}`));
  held.filter(m => committed && !committed.includes(m)).forEach(m => check(false, `a finding was added to the held list since the last commit: ${m}`));
  check(true, '');
}

export function runRules(input, rules = RULES) {
  const report = createReport();
  const { data } = input;
  const subjectIds = Object.keys(data.subjects);
  let units = 0;
  for (const id of subjectIds) {
    if (!data.subjects[id].meta) { report.checker('V0', id)(false, 'the subject has no subject record (FC.subject)'); continue; }
    const sv = subjectView(data, id);
    const ok = runScope(byScope(rules, 'subject'), sv, id, report);
    if (!ok) continue;
    for (const unitId of Object.keys(data.subjects[id].units)) {
      const uv = unitView(data, id, unitId);
      const unitRules = byScope(rules, 'unit').filter(r => !r.kinds || r.kinds.includes(uv.kindName));
      runScope(unitRules, uv, uv.label, report);
      units += 1;
    }
  }
  byScope(rules, 'site').forEach(r => runOne(r, input, '', report));
  if (byScope(rules, 'held').length > 0) applyHeld(report, input);
  return { ...report.state, units, subjects: subjectIds.length };
}
