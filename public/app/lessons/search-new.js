/* ===================== SCREENS: SEARCH, OVER THE NEW FIELDS ===================== */
// Lesson standard E14: search indexes headings, names, key questions and case text from the new fields. Only text a
// learner has a right to see is indexed: the stories on cards, never a drill or return case (the learner has not met
// those, and a return needs one they have not seen).

const plainOf = html => { const el = document.createElement('div'); el.innerHTML = html; return el.textContent.replace(/\s+/g, ' ').trim(); };

function openCardAt(subj, unitIndex, cardId){
  openUnit(subj, unitIndex);
  if(APP.view === 'unit') moveTo(UNIT_RUN.flow.findIndex(s => s.type === 'card' && s.id === cardId));
}
function openReference(subj){
  APP.subjectId = subj.id; touch(subj.id);
  go('reference', { refMode: 'units' });
}
function unitSearchEntries(subj, unitId){
  const v = unitView(subj.id, unitId), T = lessonText(v), at = subj.course.findIndex(u => u.id === unitId);
  const where = `${subj.name} · Unit ${v.unit.tag}`;
  const cards = v.cardOrder.map(v.card).filter(card => !card.continues).map(card => ({ g: 'Cards', s: subj, t: plainOf(cardHeading(v, T, card)),
    sub: `${where} · card ${v.cardOrder.indexOf(card.id) + 1}`, go: () => openCardAt(subj, at, card.id) }));
  const cases = v.casesOf(unitId).filter(c => !c.kind && (c.use === 'teach' || c.use === 'check') && c.text)
    .map(c => ({ g: 'Cases', s: subj, t: c.text, quote: true, sub: `${where} · ${c.name || 'a case on a card'}`, go: () => openUnit(subj, at) }));
  return [...cards, ...cases];
}
function newSearchEntries(subj){
  if(!FC.get(subj.id).key) return [];
  const sv = subjectView(subj.id), model = keyMapModel(sv);
  const steps = model.drawn.length ? [sv.key.gate, ...model.drawn.flatMap(o => sv.key.branches[o.id] || [])] : [];
  const names = mapNames(sv).map(t => ({ g: 'Names', s: subj, t: t.n, sub: `${subj.name} · ${t.plain}`, go: () => openReference(subj) }));
  const questions = steps.map(step => ({ g: 'Questions', s: subj, t: step.q, sub: `${subj.name} · a question`, go: () => openReference(subj) }));
  const specimens = isFullyRebuilt(subj) ? sv.data.specimens.map((sp, i) => ({ g: 'Whole cases', s: subj, t: sp.text, quote: true,
    sub: `${subj.name} · case ${pad2(i + 1)}`, go: () => openSpecimen(subj.id, sp.id) })) : [];
  return [...sv.unitIds().flatMap(unitId => unitSearchEntries(subj, unitId)), ...names, ...questions, ...specimens];
}
// an old tool entry is dropped where the key now carries the same name
const oldToolKept = (subj, outcome) => !(FC.get(subj.id).key && FC.get(subj.id).key.outcomes.some(o => o.n === outcome.n));
