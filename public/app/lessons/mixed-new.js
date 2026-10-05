/* ===================== SCREENS: THE MIXED DRILL, ITEMS FROM REBUILT UNITS ===================== */
// Lesson standard E14. Mixed draws due items first, then single-question and name items from units the learner has
// finished, each asked with its own subject's key (the engine builds the options from the key). It is described on screen
// as spacing and retrieval practice, not as training in telling look-alikes apart (P22). Items are built by the engine's
// drillItem and asked by ask.js; the tries go into the practice record with context 'mixed'.

const MIXED_SAY = {
  oldLifetime: (ok, n) => `Old lessons, counted separately: ${ok}/${n}.`,
  oldStat: 'Old lessons',
  frame: 'Mixed practice spaces what you have learned and asks you to recall it, a little at a time. It is not training in telling look-alikes apart: each unit’s drill does that.'
};

// "Lifetime": every answer ever given in the Mixed drill, from the practice record. The old counter (pl:mixed) is not part of it;
// the old lessons' items still write to it and it is shown apart.
const mixedRecord = () => firstTryAccuracy(SUBJECTS.flatMap(s => Object.values(itemsOf(s.id)).flatMap(entry => entry.tries)).filter(t => t.context === 'mixed'));
function lifetimeFigure(){
  const { n, ok } = mixedRecord();
  return n ? `${ok}/${n}` : '&mdash;';
}

const finishedUnits = () => SUBJECTS.flatMap(subj => subj.course.filter((u, i) => isRebuilt(u) && unitDone(subj, i)).map(u => ({ subj, unitId: u.id })));
const isCaseItem = c => !c.kind && (c.use === 'drill' || c.use === 'return');
// the last question on the case's route that the unit itself teaches
const lastOwnStep = (v, c) => v.routeSteps(c).filter(code => v.unit.teaches.steps.includes(code)).pop();

function mixedEntry(subj, v, c, kind, due){
  const raw = kind === 'name' ? c.id : { case: c.id, step: lastOwnStep(v, c) };
  const built = drillItem(v, raw, kind === 'name' ? 'name' : 'piece', []);
  return { s: subj, due, built: { ...built, item: { ...built.item, seenBefore: seenBefore(v.subjectId, v.unitId, c.id) } }, state: freshAsk() };
}
// what is due, as name items on cases the learner has not seen
function mixedDue(){
  return SUBJECTS.flatMap(subj => dueReturns(subj.id).flatMap(d => {
    const v = unitView(subj.id, d.unitId), pick = pickReturnCase(v, d.unitId, d.target, []);
    return pick && v.isOutcome(d.target) ? [mixedEntry(subj, v, pick.c, 'name', true)] : [];
  }));
}
// every other case of a finished unit, one candidate each: a name item where the case has a name, else a single question
function mixedPool(taken){
  return finishedUnits().flatMap(({ subj, unitId }) => {
    const v = unitView(subj.id, unitId);
    return v.casesOf(unitId).filter(c => isCaseItem(c) && !taken.has(`${subj.id}/${unitId}/${c.id}`) && lastOwnStep(v, c)).map(c => {
      const named = v.isOutcome(caseTarget(v, c)) && Math.random() < 0.5;
      return mixedEntry(subj, v, c, named ? 'name' : 'piece', false);
    });
  });
}
const entryKey = e => `${e.s.id}/${e.built.v.unitId}/${e.built.id}`;
// [due entries, the rest of the new pool]
function buildMixedNew(){
  const due = mixedDue(), taken = new Set(due.map(entryKey));
  return { due, pool: mixedPool(taken) };
}

function renderMixedAsk(M, entry){
  const { s: subj, built } = entry, v = built.v, T = lessonText(v), state = entry.state;
  const ask = { v, T, item: built.item, state, ledgerRead: new Set(v.unit.ledger.map(l => l.id)), taughtOn: what => taughtOnCard(v, T, what) };
  const last = M.i === M.items.length - 1;
  const paint = () => {
    screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
      <div class="topbar"><span class="m">Mixed drill</span><span class="m s">${pad2(M.i + 1)} / ${M.items.length}</span></div>
      <p class="hintline">${esc(MIXED_SAY.frame)}</p>
      <div style="display:flex;align-items:center;gap:10px;padding:18px 0 14px">
        <span class="sigil" style="width:26px;height:26px;flex:0 0 26px;font-size:10px">${subj.keyNo}</span><span class="m a">${esc(subj.name)}</span></div>
      <div id="mixedask">${askHtml(ask)}</div>
      <div class="score"><span class="stat"><b>${M.n}</b><span>This round</span></span><span class="stat"><b>${M.ok}</b><span>Correct</span></span>
        <span class="stat"><b>${lifetimeFigure()}</b><span>Lifetime</span></span></div>
      <div class="actbar">${state.done ? `<button class="btn" id="next">${last ? 'Finish' : 'Next item'}${icon('arrow')}</button>`
        : `<button class="btn ghost" id="skip">Skip for now</button>`}</div></div>`;
    wireAsk(screenEl(), ask, paint, outcome => {
      recordTry(v.subjectId, v.unitId, built.id, v.unit.rev, { mode: built.item.mode, context: 'mixed', steps: outcome.steps, name: outcome.name, ok: outcome.ok });
      M.n++;
      if(outcome.ok) M.ok++;
    });
    const move = () => { M.i++; M.picked = null; render(); window.scrollTo(0, 0); };
    on('#next', move);
    on('#skip', move);
    on('[data-open-card]', el => openCardSheet(v, el.dataset.openCard, el));
  };
  paint();
}
