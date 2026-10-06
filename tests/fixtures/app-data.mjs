// What the browser tests read from the app's own data, so no test types a revision, a unit count, a unit's index or the questions a key
// draws. Everything here runs in the page and only reads globals of the app.

// One record per subject.
export const subjectMeta = page => page.evaluate(() => SUBJECTS.map(s => ({
  id: s.id, name: s.name, units: s.course.length,
  unitList: s.course.map((u, index) => ({ id: u.id, index, tag: u.tag, title: u.title, rev: u.rev, status: u.status }))
})));

// One record per unit of every subject, with the facts a test needs to decide what the unit can be asked.
export const unitRecords = page => page.evaluate(() => SUBJECTS.flatMap(s => s.course.map((u, index) => {
  const v = unitView(s.id, u.id), rungs = v.unit.drill.rungs;
  return { subject: s.id, subjectName: s.name, unit: u.id, index, tag: v.unit.tag, kind: v.unit.kind, rev: v.unit.rev, status: v.unit.status,
    gate: !!v.isGate, taught: v.taught.length, stages: rungs.map(r => r.ask), hasClaims: rungs.some(r => r.ask === 'claim'),
    registeredCards: FC.get(s.id).cards[u.id].length, courseLength: s.course.length, action: !!(v.meta && v.meta.action) };
})));

// The unit the screens that need "a finished unit with names to come back" are run on: the first branch unit that teaches names
// and has a whole-route stage. Never named by id: it is whichever the data holds first.
export const pickNamingUnit = (units, need = () => true) =>
  units.find(u => !u.gate && u.kind === 'C' && u.taught > 0 && u.stages.includes('route') && need(u));

// The rows of a subject's key, as the learner's screens draw them, worked out from the data and the standard (E14).
// Returns { gate, branchSteps, names, codes, limits }.
export const keyShape = (page, subjectId) => page.evaluate(id => {
  const data = FC.get(id), key = data.key, options = key.gate.options;
  const ids = new Set(options.map(o => o.id));
  const branchSteps = options.flatMap(o => (key.branches[o.id] || []).map(step => ({ answer: o.id, ...step })));
  const families = options.filter(o => o.plain && o.needs);
  const outcomes = key.outcomes.filter(o => ids.has(o.group));
  return {
    gate: { q: key.gate.q, options: options.map(o => ({ id: o.id, n: o.n })) },
    branchSteps: branchSteps.map(s => ({ answer: s.answer, q: s.q, options: s.options.map(o => o.n) })),
    names: [...families, ...outcomes].map(o => ({ id: o.id, n: o.n, plain: o.plain, needs: o.needs, aka: o.aka || [], unit: (data.units[o.unit || key.gate.unit] || {}).tag || null })),
    codes: [key.gate.code, ...Object.values(key.branches).flat().map(s => s.code)],
    limits: data.meta.limits.map(l => l.h)
  };
}, subjectId);

// The English number word the app itself uses ("Five names are due"), so a test can match a count without typing it.
export const numberWord = (page, n) => page.evaluate(n => numWord(n), n);
