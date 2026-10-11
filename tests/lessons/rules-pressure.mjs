// Section 26.7 and 26.10 (step 8): V82 (the danger slip sits only on risky questions) and V83 (timed groups and the busy task). Each reads the subject
// through model.mjs and the engine's own pure functions.
import { subjectRule, checkEach } from './rule.mjs';
import { unique } from './text.mjs';

/* ---------- V82: the failure is named on risky questions only ---------- */
// A subject that says what its failure is (`danger`: a slip, the facet its questions are sorted by, which value is risky and which is real) holds
// that slip to the risky questions. A real message never carries it, whatever it asks for: judging by whether a request exists, not by the action
// that suits the message, is the old bug (a real invoice marked as something wrong). And the slip can be made at all, or a rule that counts none
// of it would pass for nothing.
const carries = (value, slip) => {
  if (value === null || typeof value !== 'object') return false;
  if (Array.isArray(value)) return value.some(x => carries(x, slip));
  return Object.entries(value).some(([k, v]) => (k === 'slip' && v === slip) || (k === 'slips' && v && typeof v === 'object' && Object.values(v).includes(slip)) || carries(v, slip));
};
export const V82 = subjectRule('V82', (s, check) => {
  const d = s.meta.danger;
  if (!d) { check(true, ''); return; }
  const defs = [...Object.values(s.items), ...Object.values(s.gens)], problems = [];
  defs.filter(def => carries([def.asks, def.blocks], d.slip) && (def.facets || {})[d.facet] !== d.risky)
    .forEach(def => problems.push(`${def.id} carries the slip "${d.slip}" and is not ${d.facet} "${d.risky}": a ${d.real} question is never marked as the failure`));
  if (!defs.some(def => carries([def.asks, def.blocks], d.slip))) problems.push(`no question can make the slip "${d.slip}", so a rule that counts it passes for nothing`);
  checkEach(check, s.label, problems);
});

/* ---------- V83: timed groups and the busy task ---------- */
// A timed group (and a timed check) holds questions that can be answered at once with a tap: a choice, a tap or an order. A call or chat that pushes
// back may stand among them but is never itself timed (the app leaves it out of the clock). A busy group is timed, and each of its questions is one
// banner over the task and a choice about it.
const TIMED_ASKS = ['choose', 'tap', 'order', 'exchange'];
function timedProblems(s, defs, where) {
  const problems = [];
  defs.forEach(def => {
    def.asks.filter(a => !TIMED_ASKS.includes(a.kind)).forEach(a => problems.push(`${where}: "${def.id}" has a ${a.kind} ask, and a timed group holds only ${TIMED_ASKS.join(', ')}`));
  });
  return unique(problems);
}
export const V83 = subjectRule('V83', (s, check) => {
  for (const lv of s.lessons) {
    const problems = [];
    lv.sets.forEach((set, i) => {
      const defs = lv.setRefs[i].map(r => s.def(r.id)), where = `group ${i + 1}`;
      if (set.seconds) problems.push(...timedProblems(s, defs, where));
      if (set.over === 'busy') {
        if (!set.seconds) problems.push(`${where} runs the busy task and is not timed, so a banner would wait for ever`);
        defs.filter(def => !(def.blocks[0] && def.blocks[0].kind === 'message' && def.blocks[0].form === 'banner'))
          .forEach(def => problems.push(`${where}: "${def.id}" is in the busy task and does not open on a banner`));
        defs.filter(def => def.asks.some(a => a.kind !== 'choose')).forEach(def => problems.push(`${where}: "${def.id}" is in the busy task and asks more than a choice`));
      }
    });
    if (lv.lesson.check.seconds && !s.engine.checkIsDrawn(lv.lesson.check)) problems.push(...timedProblems(s, lv.checkRefs.map(r => s.def(r.id)), 'the check'));
    checkEach(check, lv.label, problems);
  }
});

export const RULES_PRESSURE = [V82, V83];
