/* ===================== LESSONS: A REBUILT UNIT ON SCREEN ===================== */
// One card on screen at a time, in the order of unit.parts (lesson standard E2). Between parts a generated end
// screen; after the last part's cards the drill, its results, the close cards and a unit-complete screen.
// Nothing advances by itself (E11). The learner's place is saved as a card id (or 'drill', or 'close') on every move.
// UNIT_RUN is this visit's working state: the screens, where the learner is, and what has been answered on each card.

let UNIT_RUN = null;

function beginRebuiltUnit(subj, unit){
  const v = unitView(subj.id, unit.id), flow = unitFlow(v);
  const at = (seenOf(subj.id)[unit.id] || {}).at;
  const resumed = rebuiltStatus(subj.id, unit.id) === 'progress' ? screenOfPlace(flow, at) : -1;
  UNIT_RUN = { subj, v, T: lessonText(v), flow, i: Math.max(0, resumed), cards: {}, drillRun: null, drillFinished: false, noted: new Set() };
  logEvent('start', { subject: subj.id, unit: unit.id, rev: v.unit.rev });
  saveUnitPlace();
  go('unit', { unitId: unit.id });
}

function saveUnitPlace(){
  const { subj, v, flow, i } = UNIT_RUN, before = seenOf(subj.id)[v.unitId];
  saveSeenUnit(subj.id, v.unitId, { rev: v.unit.rev, done: !!(before && before.done && before.rev >= 1), at: placeOfScreen(flow, i) });
}
function moveTo(i){
  const run = UNIT_RUN;
  if(run.flow[i].type === 'partend' && i > run.i) logEvent('part', { subject: run.subj.id, unit: run.v.unitId, rev: run.v.unit.rev, card: String(run.flow[i].part + 1) });
  run.i = i;
  saveUnitPlace();
  paintUnit();
  window.scrollTo(0, 0);
  focusScreenHead();
}
// a new screen takes focus on its heading, so a keyboard or screen-reader learner starts reading at the top
const focusScreenHead = () => focusOn('.eyebrow-row h1, .done-screen h2, .done-screen .stopline, #host .lesson, #host .readhead');
function renderUnit(subj){
  if(!UNIT_RUN || UNIT_RUN.subj.id !== subj.id) return go('subject');
  paintUnit();
}
function paintUnit(){
  const run = UNIT_RUN, screen = run.flow[run.i];
  ({ card: paintCard, partend: paintPartEnd, drill: paintDrill, results: paintDrillResults, complete: paintComplete })[screen.type](run, screen);
}

/* ---------- the frame every screen shares ---------- */
function unitFrame(run, screen, inner, actions){
  const { subj, v } = run;
  const bar = `<div class="topbar"><button class="iconbtn" data-v="subject" aria-label="Back to ${esc(subj.name)}">${icon('back', 20)}</button><span class="spacer"></span></div>
    <p class="m unitbar">${topBarHtml(v, screen)}</p>`;
  screenEl().innerHTML = `<div class="pane read flush" style="--accent:${subj.accent}">${bar}${inner}${actions || ''}</div>`;
  on('[data-v]', el => go(el.dataset.v));
}
const unitActions = (backLabel, nextLabel, awaiting) => `<div class="actbar">
    <div class="actrow">${backLabel ? `<button class="btn ghost" id="back">${backLabel}</button>` : ''}
      <button class="btn neutral" id="fwd" ${awaiting ? 'disabled' : ''}>${nextLabel}${icon('arrow')}</button></div>
    ${awaiting ? `<p class="hint">${esc(SAY.answerToGoOn)}</p>` : ''}</div>`;

// the screen before this one: a finished drill is not re-entered, so Back from the results or the first close card skips it
function previousIndex(run, i){
  const j = i - 1;
  return run.flow[j].type === 'drill' && run.drillFinished ? j - 1 : j;
}
function goBack(run){
  const screen = run.flow[run.i];
  if(screen.type === 'card'){
    const cs = run.cards[screen.id], card = run.v.card(screen.id);
    if(card.kind === 'worked' && cs && cs.ui.step > 0){ cs.ui.step--; paintUnit(); window.scrollTo(0, 0); focusScreenHead(); return; }
  }
  const j = previousIndex(run, run.i), before = run.flow[j];
  if(before.type === 'card' && run.v.card(before.id).kind === 'worked') cardState(run, run.v.card(before.id)).ui.step = run.v.card(before.id).steps.length;
  moveTo(j);
}

/* ---------- a card ---------- */
function freshUi(run, card){
  const saved = card.kind === 'transfer' ? (notesOf(run.subj.id)[run.v.unitId] || {}).transfer : null;
  return { picked: null, step: 0, note: saved || {} };
}
function cardState(run, card){
  if(!run.cards[card.id]) run.cards[card.id] = card.kind === 'check' ? { state: freshAsk() } : { ui: freshUi(run, card) };
  return run.cards[card.id];
}
function checkAsk(run, card, ctx, cs){
  const { v, T } = run, afterStep = v.steps.some(s => s.code === card.after);
  return { v, T, item: checkItem(ctx, card), state: cs.state, ledgerRead: ctx.ledgerRead,
           taughtOn: () => taughtOnCard(v, T, afterStep ? { step: card.after } : { name: card.after }) };
}
const cardAwaitsAnswer = (card, cs) => card.kind === 'check' ? !cs.state.done : cardAwaits(card, cs.ui);

function confusedHtml(run, cardId){
  return `<div class="confusedrow">${run.noted.has(cardId)
    ? `<p class="hintline">${esc(SAY.confusedNoted)}</p>`
    : `<button class="linkish" data-confused>${esc(SAY.confused)}</button>`}</div>`;
}
// A learner who already knows the unit can open its drill without reading the cards, which stay open (lesson standard E11, E17)
const toDrillHtml = card => card.kind === 'orient' ? `<p class="hintline"><button class="linkish" data-to-drill>${esc(SAY.toDrill)}</button></p>` : '';
function paintCard(run, screen){
  const { v, T } = run, card = v.card(screen.id), cs = cardState(run, card);
  const ctx = cardContext(v, T, card.id, cs.ui);
  const ask = card.kind === 'check' ? checkAsk(run, card, ctx, cs) : null;
  const no = v.cardOrder.indexOf(card.id) + 1;
  const awaiting = cardAwaitsAnswer(card, cs);
  const first = run.i === 0;
  unitFrame(run, screen, `
    <div class="segs thin" style="margin:14px 0 0">${v.cardOrder.map((_, k) => `<i class="${k < no ? 'on' : ''}"></i>`).join('')}</div>
    <div class="eyebrow-row"><span class="m a">${esc(v.title)}</span><h1>${cardHeading(v, T, card)}</h1></div>
    <div class="lesson" id="cardbody">${ask ? askHtml(ask) : cardHtml(ctx, card)}</div>
    ${toDrillHtml(card)}${confusedHtml(run, card.id)}`,
    unitActions(first ? '' : 'Back', 'Next', awaiting));
  wireCard(run, card, cs, ask);
}
function commitAnswer(run, card, cs, picked){
  cs.ui.picked = picked;
  recordTry(run.subj.id, run.v.unitId, 'commit:' + card.id, run.v.unit.rev,
    { mode: 'commit', context: 'unit', steps: {}, name: null, ok: commitRight(run.v, card, picked) });
  paintUnit();
  focusOn('.answerline, .feedback');
}
function wireCard(run, card, cs, ask){
  const { subj, v } = run, root = screenEl();
  on('#back', () => goBack(run));
  on('#fwd', () => {
    if(card.kind === 'worked' && cs.ui.step < card.steps.length){ cs.ui.step++; paintUnit(); window.scrollTo(0, 0); focusScreenHead(); return; }
    moveTo(run.i + 1);
  });
  on('[data-to-drill]', () => moveTo(run.flow.findIndex(s => s.type === 'drill')));
  on('[data-confused]', () => {
    logEvent('confused', { subject: subj.id, unit: v.unitId, rev: v.unit.rev, card: card.id });
    run.noted.add(card.id); paintUnit();
  });
  if(ask){
    wireAsk(root, ask, paintUnit, outcome => recordTry(subj.id, v.unitId, ask.item.c.id, v.unit.rev,
      { mode: 'check', context: 'unit', steps: outcome.steps, name: outcome.name, ok: outcome.ok }));
    on('[data-open-card]', el => openCardSheet(v, el.dataset.openCard, el), root);
    return;
  }
  if(card.kind === 'transfer') return wireTransfer(run, card, cs, root);
  on('[data-pick]', el => {
    if(cs.ui.picked !== null) return;
    const raw = el.dataset.pick;
    commitAnswer(run, card, cs, card.kind === 'again' || card.kind === 'exception' ? Number(raw) : raw);
  }, root);
}
// The transfer card keeps its note on this device, by unit (E8: pl:<subject>:notes). Never marked.
function wireTransfer(run, card, cs, root){
  const save = patch => {
    cs.ui.note = { ...cs.ui.note, ...patch };
    saveNote(run.subj.id, run.v.unitId, { transfer: cs.ui.note });
  };
  on('#transferNames .opt', el => { save({ outcome: el.dataset.outcome }); paintUnit(); }, root);
  on('#transferPlaces .chip', el => { save({ place: el.dataset.place }); paintUnit(); }, root);
  const text = root.querySelector('#transferText');
  text.oninput = () => save({ text: text.value });
}

/* ---------- generated screens ---------- */
function paintPartEnd(run, screen){
  const parts = run.v.unit.parts;
  unitFrame(run, screen, `<div class="done-screen">
      <span style="color:var(--accent);display:flex">${icon('check', 34)}</span>
      <p class="stopline">${esc(SAY.endOfPart(screen.part + 1, parts[screen.part + 1].title))}</p></div>`,
    unitActions('Back', 'Next part', false));
  on('#back', () => goBack(run));
  on('#fwd', () => moveTo(run.i + 1));
}
function paintDrill(run, screen){
  if(!run.drillRun) run.drillRun = unitDrillRun(run.subj, run.v, 'unit');
  unitFrame(run, screen, '<div id="host"></div>');
  mountDrillRun(document.getElementById('host'), run.drillRun, () => {
    // coming back to a finished drill passes straight through it: the set is logged once
    if(!run.drillFinished) logEvent('set', { subject: run.subj.id, unit: run.v.unitId, rev: run.v.unit.rev });
    run.drillFinished = true;
    moveTo(run.i + 1);
  });
}
function paintDrillResults(run, screen){
  unitFrame(run, screen, runResultsHtml(run.drillRun), unitActions('Back', 'Next', false));
  on('#back', () => goBack(run));
  on('#fwd', () => moveTo(run.i + 1));
}
function paintComplete(run, screen){
  const { subj, v } = run, at = subj.course.findIndex(u => u.id === v.unitId), next = subj.course[at + 1];
  saveSeenUnit(subj.id, v.unitId, { rev: v.unit.rev, done: true, at: 'close' });
  const c = st(subj).course;
  c.u = at; c.card = 0; c.phase = 'unitdone';
  unitFrame(run, screen, `<div class="done-screen">
      <span style="color:var(--accent);display:flex">${icon('check', 34)}</span>
      <h2>Unit ${esc(v.unit.tag)} complete</h2>
      <p>${esc(SAY.endOfUnit(v.unit.tag))}</p>
      <div class="segs" style="width:100%;max-width:300px">${subj.course.map((_, k) => `<i class="${unitDone(subj, k) ? 'on' : ''}"></i>`).join('')}</div>
      <div style="display:flex;flex-direction:column;gap:10px;width:100%;max-width:300px;padding-top:6px">
        ${next ? `<button class="btn" id="on">Continue to Unit ${esc(next.tag)}${icon('arrow')}</button>` : ''}
        <button class="btn ghost" data-v="subject">Back to ${esc(subj.name)}</button>
        <button class="btn ghost" id="redo">Read the unit again</button>
      </div></div>`);
  on('[data-v]', el => go(el.dataset.v));
  on('#on', () => openUnit(subj, at + 1));
  on('#redo', () => openUnit(subj, at));
}
