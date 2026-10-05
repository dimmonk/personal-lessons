/* ===================== SCREENS: REFERENCE, GENERATED FROM THE KEY ===================== */
// The reference screen for rebuilt units (lesson standard E14): the key as a map in fixed wording, then for each name
// what it is called, its plain words, what you must be able to point to, the other words real life uses, its named
// cases and its look-alike lines, then where the key stops. Everything is printed from key.js, the cases and the
// ledger. It is a lookup: nothing here records a try, logs an event or schedules anything, so it never counts as
// review (P16).

const REF_SAY = {
  lookup: 'Look things up here. Nothing on this screen is scheduled, and looking at it does not count as review: the drills ask you from memory.',
  namesHeading: 'Names',
  stopsHeading: 'Where these questions stop',
  alsoCalled: 'Also called',
  namedCases: 'Named cases',
  lookalikes: 'Look-alikes',
  plainWords: 'In plain words',
  oldUnits: 'Units not yet rewritten'
};

// the ledger lines (from every rebuilt unit) that involve one name
function ledgerLinesFor(sv, id){
  return sv.unitIds().flatMap(unitId => {
    const v = unitView(sv.subjectId, unitId);
    return v.unit.ledger.filter(l => l.pair.includes(id)).map(entry => ({ v, entry, other: entry.pair.find(x => x !== id) }));
  });
}
// the named teaching cases of one name, with their deciding words marked
function namedCasesFor(sv, id){
  return Object.entries(sv.data.cases).flatMap(([unitId, list]) => list
    .filter(c => c.name && !c.kind && c.use !== 'claim' && caseTarget(sv, c) === id).map(c => ({ unitId, c })));
}
function nameEntryHtml(sv, thing){
  const T = lessonText(sv);
  const lines = ledgerLinesFor(sv, thing.id).map(({ v, entry, other }) => {
    const U = lessonText(v);
    return `<div class="lsec">${lessonLabel(`${cap(thing.n)} or ${other ? sv.thing(other).n : ''}`)}`
      + `<p>${U.t(paras(entry.shared).join(' '))} ${U.t(paras(entry.rule).join(' '))}</p>`
      + `<p>${esc(SAY.tellApart)}: ${U.t(paras(entry.test).join(' '))}</p></div>`;
  });
  const cases = namedCasesFor(sv, thing.id).map(({ c }) => `${T.caseName(c)}${T.show(c, sv.routeSteps(c))}`);
  return `<details class="fg" data-name="${esc(thing.id)}"><summary>${esc(thing.n)}
      <span class="ar" style="display:flex">${icon('chevron', 16)}</span></summary>
    <div class="fg-body lesson">
      ${lessonSection(REF_SAY.plainWords, `<p>${esc(cap(thing.plain))}.</p>`)}
      ${lessonSection(SAY.pointTo, `<p>${esc(cap(thing.needs))}.</p>`)}
      ${thing.aka && thing.aka.length ? lessonSection(REF_SAY.alsoCalled, `<p>${esc(joinWords(thing.aka, 'and'))}.</p>`) : ''}
      ${cases.length ? lessonSection(REF_SAY.namedCases, cases.join('')) : ''}
      ${lines.length ? lessonSection(REF_SAY.lookalikes, lines.join('')) : ''}
    </div></details>`;
}
// "Where these questions stop": the subject's own notes, with tokens filled from its key like every other line the learner reads
const limitsHtml = subjectId => {
  const meta = FC.get(subjectId).meta, T = lessonText(subjectView(subjectId));
  return `<div class="lesson">${(meta.limits || []).map(l => `<h3>${T.t(l.h)}</h3>${paras(l.text).map(p => `<p>${T.t(p)}</p>`).join('')}`).join('')}</div>`;
};

// the generated part of the reference screen for a subject with any rebuilt unit; '' where it has none
function keyReferenceHtml(subj){
  const data = FC.get(subj.id);
  if(!data.key) return '';
  const sv = subjectView(subj.id);
  const map = keyMapSection(sv, 'fixed');
  if(!map) return '';
  return `<p class="forline">${esc(REF_SAY.lookup)}</p>${map}`
    + `<div class="sect top"><span class="m">${esc(REF_SAY.namesHeading)}</span><span class="m s">${mapNames(sv).length}</span></div>`
    + `<div>${mapNames(sv).map(t => nameEntryHtml(sv, t)).join('')}</div>`;
}
