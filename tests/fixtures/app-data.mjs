// What the browser tests read from the app's own data, so no test types a revision, a unit count, a unit's index or which units are
// rebuilt. A subject's units are old-format (standard 0, run by the old screens) or rebuilt (standard 1, run by public/app/lessons/*);
// a subject whose every unit is rebuilt has no old record at all (state.js: isFullyRebuilt). Everything here runs in the page and
// only reads globals of the app.

// One record per subject.
export const subjectMeta = page => page.evaluate(() => SUBJECTS.map(s => ({
  id: s.id, name: s.name, gated: !!s.determination.gateCode, units: s.course.length,
  rebuilt: s.course.map(u => u.standard === 1), fullyRebuilt: isFullyRebuilt(s),
  unitList: s.course.map((u, index) => ({ id: u.id, index, tag: u.tag, title: u.title, rebuilt: u.standard === 1, rev: u.rev, status: u.status })),
  drills: s.quickDrills.map(q => q.key)
})));

// One record per rebuilt unit of every subject, with the facts a test needs to decide what the unit can be asked.
export const rebuiltUnits = page => page.evaluate(() => SUBJECTS.flatMap(s => s.course.map((u, index) => ({ u, index })).filter(x => x.u.standard === 1)
  .map(({ u, index }) => {
    const v = unitView(s.id, u.id), rungs = v.unit.drill.rungs;
    return { subject: s.id, subjectName: s.name, fullyRebuilt: isFullyRebuilt(s), unit: u.id, index, tag: v.unit.tag, kind: v.unit.kind, rev: v.unit.rev, status: v.unit.status,
      gate: !!v.isGate, taught: v.taught.length, stages: rungs.map(r => r.ask), hasClaims: rungs.some(r => r.ask === 'claim'),
      registeredCards: FC.get(s.id).cards[u.id].length, courseLength: s.course.length, action: !!(v.meta && v.meta.action) };
  })));

// The unit the screens that need "a finished unit with names to come back" are run on: the first branch unit that teaches names
// and has a whole-route stage, in a subject whose every unit is rebuilt where there is one. Never named by id: it is whichever the data holds first.
export const pickNamingUnit = (units, need = () => true) => {
  const fits = units.filter(u => !u.gate && u.kind === 'C' && u.taught > 0 && u.stages.includes('route') && need(u));
  return fits.find(u => u.fullyRebuilt) || fits[0];
};

// The rows of a subject's key, as the learner's screens draw them, worked out from the data and the standard (E14): while a subject
// mixes standards only the branches whose units are all rebuilt are drawn, and an answer with no branch is drawn only once the whole
// subject is rebuilt. Returns { drawn: [answer ids], pending: [answer ids], steps, names, undrawnNames, codes }.
export const keyShape = (page, subjectId) => page.evaluate(id => {
  const data = FC.get(id), key = data.key, rebuilt = unitId => !!data.units[unitId];
  const all = data.meta.units.every(rebuilt);
  const drawnOf = option => {
    const steps = key.branches[option.id];
    if (!steps) return all;
    return steps.every(s => rebuilt(s.unit)) && key.outcomes.filter(o => o.group === option.id).every(o => rebuilt(o.unit));
  };
  const options = key.gate.options, drawn = options.filter(drawnOf), pending = options.filter(o => !drawnOf(o));
  const drawnIds = new Set(drawn.map(o => o.id));
  const branchSteps = drawn.flatMap(o => (key.branches[o.id] || []).map(step => ({ answer: o.id, ...step })));
  const families = options.filter(o => o.plain && o.needs && drawnIds.has(o.id));
  const outcomes = key.outcomes.filter(o => drawnIds.has(o.group));
  return {
    drawn: drawn.map(o => ({ id: o.id, n: o.n })), pending: pending.map(o => ({ id: o.id, n: o.n })),
    gate: { q: key.gate.q, options: options.map(o => ({ id: o.id, n: o.n })) },
    branchSteps: branchSteps.map(s => ({ answer: s.answer, q: s.q, options: s.options.map(o => o.n) })),
    names: [...families, ...outcomes].map(o => ({ id: o.id, n: o.n, plain: o.plain, needs: o.needs, aka: o.aka || [], unit: (data.units[o.unit || key.gate.unit] || {}).tag || null })),
    undrawnNames: key.outcomes.filter(o => !drawnIds.has(o.group)).map(o => o.n),
    codes: [key.gate.code, ...Object.values(key.branches).flat().map(s => s.code)],
    limits: data.meta.limits.map(l => l.h),
    oldUnits: data.meta.units.filter(u => !rebuilt(u)).length
  };
}, subjectId);

// The English number word the app itself uses ("Five names are due"), so a test can match a count without typing it.
export const numberWord = (page, n) => page.evaluate(n => numWord(n), n);
