/* ===================== SCREENS: THE MIXED DRILL ===================== */
// Lesson standard E14. Mixed draws due items first, then single-question and name items from units the learner has
// finished, each asked with its own subject's key (the engine builds the options from the key). It is described on screen
// as spacing and retrieval practice, not as training in telling look-alikes apart (P22). Items are built by the engine's
// drillItem and asked by ask.js; the tries go into the practice record with context 'mixed'.

const MIXED_SAY = {
  frame: 'Mixed practice spaces what you have learned and asks you to recall it, a little at a time. It is not training in telling look-alikes apart: each unit’s drill does that.'
};

// "Lifetime": every answer ever given in the Mixed drill, from the practice record.
const mixedRecord = () => firstTryAccuracy(SUBJECTS.flatMap(s => Object.values(itemsOf(s.id)).flatMap(entry => entry.tries)).filter(t => t.context === 'mixed'));
function lifetimeFigure(){
  const { n, ok } = mixedRecord();
  return n ? `${ok}/${n}` : '&mdash;';
}

// The figures under every Mixed item: this round, correct, and "Lifetime" from the practice record (E8, E14).
const mixedScoreHtml = M => `<div class="score">
      <span class="stat"><b>${M.n}</b><span>This round</span></span>
      <span class="stat"><b>${M.ok}</b><span>Correct</span></span>
      <span class="stat"><b>${lifetimeFigure()}</b><span>Lifetime</span></span>
    </div>`;

const finishedUnits = () => SUBJECTS.flatMap(subj => subj.course.filter((u, i) => unitDone(subj, i)).map(u => ({ subj, unitId: u.id })));
const isCaseItem = c => (!c.kind || c.kind === 'problem') && (c.use === 'drill' || c.use === 'return');   // problems too: a procedure unit's types return
// the last question on the case's route that the unit itself teaches
const lastOwnStep = (v, c) => v.routeSteps(c).filter(code => v.unit.teaches.steps.includes(code)).pop();

function mixedEntry(subj, v, c, kind, due){
  // a problem is always asked whole, as a route item: choose the procedure, then solve it (A12)
  const raw = c.kind === 'problem' || kind === 'name' ? c.id : { case: c.id, step: lastOwnStep(v, c) };
  const built = drillItem(v, raw, c.kind === 'problem' ? 'route' : kind === 'name' ? 'name' : 'piece', []);
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
// A round: what is due first (names from finished units, on cases not seen before), then a random draw from the single-question
// and name items of finished units.
function buildMixed(n){
  const due = mixedDue().slice(0, n), taken = new Set(due.map(entryKey));
  return { items: [...due, ...shuffled(mixedPool(taken)).slice(0, n - due.length)], i: 0, n: 0, ok: 0 };
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
      ${mixedScoreHtml(M)}
      <div class="actbar">${state.done ? `<button class="btn" id="next">${last ? 'Finish' : 'Next item'}${icon('arrow')}</button>`
        : `<button class="btn ghost" id="skip">Skip for now</button>`}</div></div>`;
    wireAsk(screenEl(), ask, paint, outcome => {
      recordTry(v.subjectId, v.unitId, built.id, v.unit.rev, { mode: built.item.mode, context: 'mixed', steps: outcome.steps, name: outcome.name, ok: outcome.ok });
      M.n++;
      if(outcome.ok) M.ok++;
    });
    const move = () => { M.i++; render(); window.scrollTo(0, 0); };
    on('#next', move);
    on('#skip', move);
    on('[data-open-card]', el => openCardSheet(v, el.dataset.openCard, el));
  };
  paint();
}

function renderMixed(){
  if(!APP.mixed) APP.mixed = buildMixed(12);
  const M = APP.mixed;

  // nothing to mix until a unit is finished: say so, rather than report an empty round as complete
  if(M.items.length === 0){
    screenEl().innerHTML = `<div class="pane">
      <div class="topbar"><span class="m">Mixed drill</span></div>
      <div class="done-screen">
        <h2>Nothing to mix yet</h2>
        <p>The mixed drill draws on the units you have finished, and on names that are due to come back. Finish a unit, drill and all, and its cases start coming here.</p>
        <div style="display:flex;flex-direction:column;gap:10px;width:100%;max-width:300px;padding-top:6px">
          <button class="btn" data-v="library">Back to the library</button>
        </div>
      </div></div>`;
    on('[data-v]', el => go(el.dataset.v));
    return;
  }

  if(M.i >= M.items.length){
    screenEl().innerHTML = `<div class="pane">
      <div class="topbar"><span class="m">Mixed drill</span></div>
      <div class="done-screen">
        <span style="color:var(--accent);display:flex">${icon('check',34)}</span>
        <h2>Round complete</h2>
        <p><b>${M.ok}</b> correct of <b>${M.n}</b>, drawn from ${SUBJECTS.length} subjects. Lifetime: ${lifetimeFigure()}.</p>
        <div style="display:flex;flex-direction:column;gap:10px;width:100%;max-width:300px;padding-top:6px">
          <button class="btn" id="again">New round</button>
          <button class="btn ghost" data-v="library">Back to the library</button>
        </div>
      </div></div>`;
    on('#again', () => { APP.mixed = buildMixed(12); render(); });
    on('[data-v]', el => go(el.dataset.v));
    return;
  }

  renderMixedAsk(M, M.items[M.i]);
}
