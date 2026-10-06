/* ===================== SCREENS: THE FULL DETERMINATION ===================== */
// Lesson standard E13. Specimens come from FC (S6). A specimen is offered by default only when the unit that teaches its
// name is done; the rest are behind "try anyway", with a count of how many open with later units. They run clean, then
// varied, then misleading. One complete worked determination is shown before the first scored specimen. Each specimen is
// asked and marked by the engine's own asking code (ask.js: askHtml, wireAsk), so the verdict is the one of E5 and E7.

const DET_SAY = {
  title: 'Name a case',
  how: 'For each case, answer the questions in order, from the first, and then give the name. The name and your answers on the way are marked separately: a right name reached by a wrong answer on the way counts as a miss. ' + SAY.stakes,
  open: n => `${cap(numWord(n))} case${n === 1 ? ' is' : 's are'} open to you now, because the unit that teaches ${n === 1 ? 'its name is' : 'their names are'} done.`,
  none: 'No case is open to you yet: each opens when the unit that teaches its name is done.',
  later: n => `${cap(numWord(n))} more open${n === 1 ? 's' : ''} with later units.`,
  anyway: 'Try one anyway',
  anywayNote: 'These cases use names you have not been taught yet. Every name in the subject is offered, and a miss only decides what comes back.',
  start: 'Start',
  workedHeading: 'One worked for you first',
  workedLead: 'This one is worked for you before the first that is yours: every question the case is asked, in order, then the name. Nothing is asked of you.',
  keyMap: 'All the questions, as a map',
  done: 'That set is done',
  firsts: 'These are your first tries. ' + SAY.stakes
};

/* ---------- the specimens ---------- */
const bandOf = sp => TIER_BANDS.indexOf(sp.tier);
// clean, then varied, then misleading; inside a tier the authored order stands, because that is where look-alikes sit
const orderedSpecimens = sv => sv.data.specimens.map((sp, k) => ({ sp, k })).sort((a, b) => bandOf(a.sp) - bandOf(b.sp) || a.k - b.k).map(x => x.sp);
function specimenOpen(sv, sp){ return rebuiltUnitDone(sv.subjectId, sv.outcome(sp.outcome).unit); }
function specimenSplit(sv){
  const all = orderedSpecimens(sv);
  return { open: all.filter(sp => specimenOpen(sv, sp)), later: all.filter(sp => !specimenOpen(sv, sp)) };
}
const specimenTries = (sv, sp) => triesOf(sv.subjectId, 'spec', sp.id);
const scoredAny = sv => sv.data.specimens.some(sp => specimenTries(sv, sp).length > 0);
// first-try figures over every specimen the learner has met
function specimenStats(sv){
  const firsts = sv.data.specimens.map(sp => ({ sp, t: specimenTries(sv, sp)[0] })).filter(x => x.t);
  const routeRight = ({ sp, t }) => Object.keys(sp.route).every(code => sp.route[code].includes(t.steps[code]));
  return { n: firsts.length, total: sv.data.specimens.length, nameRight: firsts.filter(x => x.t.name === x.sp.outcome).length,
           routeRight: firsts.filter(routeRight).length };
}

/* ---------- a view of the whole subject, for ask.js ---------- */
// ask.js wants a unit view. A determination runs across the whole subject, so its view holds every unit's look-alike entries.
function detView(sv){
  const entries = sv.unitIds().flatMap(unitId => unitView(sv.subjectId, unitId).unit.ledger);
  return { ...sv, unitId: null, unit: { rev: sv.meta.rev, assumes: [], ledger: entries, drill: { returns: [] } }, isGate: false,
           taught: sv.key.outcomes.map(o => o.id), cardOrder: [], card: id => lessonFail(`a determination has no cards: ${id}`),
           ledger: id => entries.find(l => l.id === id) || lessonFail(`unknown look-alike entry ${id}`), nameOf: id => sv.thing(id).n };
}
function detTaughtOn(sv, what){
  const entry = what.ledger ? sv.unitIds().find(unitId => unitView(sv.subjectId, unitId).unit.ledger.some(l => l.id === what.ledger)) : null;
  const unitId = what.name ? sv.outcome(what.name).unit : what.step ? sv.step(what.step).unit : entry;
  if(!unitId) return null;
  const v = unitView(sv.subjectId, unitId);
  return taughtOnCard(v, lessonText(v), what);
}
function openDetCard(sv, cardId, opener){
  const unitId = sv.unitIds().find(id => (sv.data.cards[id] || []).some(c => c.id === cardId));
  openCardSheet(unitView(sv.subjectId, unitId), cardId, opener);
}
const workedCardOf = sv => {
  for(const unitId of sv.unitIds()){
    const card = (sv.data.cards[unitId] || []).find(c => c.kind === 'worked');
    if(card) return { unitId, card };
  }
  return null;
};

/* ---------- state ---------- */
let DET = null;   // { subjId, phase: 'overview' | 'worked' | 'ask' | 'done', mode, queue, i, cur, tries }
const freshDetRun = (subjId, patch) => ({ subjId, phase: 'overview', mode: 'default', queue: [], i: 0, cur: null, tries: [], ...patch });

function beginSpecimens(sv, mode, queue, start){
  DET = freshDetRun(sv.subjectId, { mode, queue, i: start || 0 });
  DET.phase = !scoredAny(sv) && workedCardOf(sv) ? 'worked' : 'ask';
  render();
  window.scrollTo(0, 0);
}
const firstUnanswered = (sv, queue) => Math.max(0, queue.findIndex(sp => specimenTries(sv, sp).length === 0));
// from search: one specimen on its own, offered or not
function openSpecimen(subjectId, specimenId){
  const sv = subjectView(subjectId), sp = sv.data.specimens.find(x => x.id === specimenId);
  APP.subjectId = subjectId; touch(subjectId);
  APP.view = 'det';
  beginSpecimens(sv, specimenOpen(sv, sp) ? 'default' : 'anyway', [sp], 0);
}

/* ---------- screens ---------- */
function detFrame(subj, label, inner, actions){
  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar"><button class="iconbtn" data-v="subject" aria-label="Back to ${esc(subj.name)}">${icon('back', 20)}</button>
      <span class="m">${label}</span><span class="spacer"></span></div>${inner}${actions || ''}</div>`;
  on('[data-v]', el => go(el.dataset.v));
}
const keyDetails = sv => `<details class="fg"><summary>${DET_SAY.keyMap}<span class="ar" style="display:flex">${icon('chevron', 16)}</span></summary>
  <div class="fg-body">${keyMapSection(sv, 'fixed')}</div></details>`;

function paintDetOverview(subj, sv){
  const { open, later } = specimenSplit(sv);
  detFrame(subj, DET_SAY.title, `<div class="eyebrow-row"><span class="m a">${esc(subj.name)}</span><h1>${DET_SAY.title}</h1></div>
    <div class="lesson"><p>${esc(DET_SAY.how)}</p><p>${esc(open.length ? DET_SAY.open(open.length) : DET_SAY.none)}${later.length ? ' ' + esc(DET_SAY.later(later.length)) : ''}</p>
    ${later.length ? `<p class="forline">${esc(DET_SAY.anywayNote)}</p>` : ''}</div>${keyDetails(sv)}`,
    `<div class="actbar">${open.length ? `<button class="btn" id="startDet">${DET_SAY.start}${icon('arrow')}</button>` : ''}
      ${later.length ? `<button class="btn ghost" id="anyway">${DET_SAY.anyway}</button>` : ''}</div>`);
  on('#startDet', () => beginSpecimens(sv, 'default', open, firstUnanswered(sv, open)));
  on('#anyway', () => beginSpecimens(sv, 'anyway', later, firstUnanswered(sv, later)));
}
function paintDetWorked(subj, sv){
  const { unitId, card } = workedCardOf(sv), v = unitView(sv.subjectId, unitId), T = lessonText(v);
  detFrame(subj, DET_SAY.workedHeading, `<div class="eyebrow-row"><span class="m a">${esc(subj.name)}</span><h1>${DET_SAY.workedHeading}</h1></div>
    <div class="lesson"><p>${esc(DET_SAY.workedLead)}</p>${sheetBody(v, T, card)}</div>`,
    `<div class="actbar"><button class="btn" id="goOn">Go on${icon('arrow')}</button></div>`);
  on('#goOn', () => { DET = { ...DET, phase: 'ask' }; render(); window.scrollTo(0, 0); });
}
function specimenItem(sv, sp, mode){
  const names = (mode === 'anyway' ? sv.key.outcomes : sv.key.outcomes.filter(o => rebuiltUnitDone(sv.subjectId, o.unit))).map(o => o.id);
  return { type: 'case', c: sp, shown: [], asked: sv.routeSteps(sp), askName: true, names, mode: 'spec', seenBefore: specimenTries(sv, sp).length > 0 };
}
function paintDetAsk(subj, sv){
  const sp = DET.queue[DET.i];
  if(!sp){ DET = { ...DET, phase: 'done' }; logEvent('set', { subject: subj.id }); return paintDetDone(subj, sv); }
  if(!DET.cur || DET.cur.id !== sp.id) DET.cur = { id: sp.id, state: freshAsk(), item: specimenItem(sv, sp, DET.mode) };
  const { item, state } = DET.cur, view = detView(sv), T = lessonText(view);
  const ask = { v: view, T, item, state, taughtOn: what => detTaughtOn(sv, what) };
  const paint = () => {
    detFrame(subj, `Case ${DET.i + 1} of ${DET.queue.length}`, `${DET.mode === 'anyway' ? `<p class="forline">${esc(DET_SAY.anywayNote)}</p>` : ''}
      <div id="detcase">${askHtml(ask)}</div>${keyDetails(sv)}`,
      `<div class="actbar">${state.done ? `<button class="btn" id="next">${DET.i === DET.queue.length - 1 ? 'Finish' : 'Next case'}${icon('arrow')}</button>`
        : `<button class="btn ghost" id="skip">Skip for now</button>`}</div>`);
    wireAsk(screenEl(), ask, paint, outcome => {
      recordTry(subj.id, 'spec', sp.id, sv.meta.rev, { mode: 'spec', context: 'unit', steps: outcome.steps, name: outcome.name, ok: outcome.ok });
      DET.tries = [...DET.tries, { nameOk: outcome.nameOk, routeOk: outcome.routeOk, first: !item.seenBefore }];
    });
    const move = () => { DET = { ...DET, i: DET.i + 1, cur: null }; render(); window.scrollTo(0, 0); };
    on('#next', move);
    on('#skip', move);
    on('[data-open-card]', el => openDetCard(sv, el.dataset.openCard, el));
  };
  paint();
}
function paintDetDone(subj, sv){
  const firsts = DET.tries.filter(t => t.first), a = (n, of) => of ? `${n} of ${of}` : '—';
  detFrame(subj, DET_SAY.title, `<div class="done-screen results"><h2>${DET_SAY.done}</h2><p>${esc(DET_SAY.firsts)}</p>
    <table class="k results"><tr><td>Names right</td><td>${a(firsts.filter(t => t.nameOk).length, firsts.length)}</td></tr>
      <tr><td>Routes right</td><td>${a(firsts.filter(t => t.routeOk).length, firsts.length)}</td></tr></table></div>`,
    `<div class="actbar"><button class="btn" id="again">Back to the cases</button>
      <button class="btn ghost" data-v="subject">Back to ${esc(subj.name)}</button></div>`);
  on('#again', () => { DET = null; render(); });
}
function renderDet(subj){
  const sv = subjectView(subj.id);
  if(!DET || DET.subjId !== subj.id || DET.phase === 'done') DET = freshDetRun(subj.id);
  ({ overview: paintDetOverview, worked: paintDetWorked, ask: paintDetAsk, done: paintDetDone })[DET.phase](subj, sv);
}

/* ---------- the subject screen's card ---------- */
function detCard(subj){
  const sv = subjectView(subj.id), { open, later } = specimenSplit(sv), stats = specimenStats(sv);
  return `<div class="block"><div class="card" data-det-card>
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
      <div style="display:flex;flex-direction:column;gap:5px"><span class="m a">All the questions</span>
        <span style="font-size:19px;font-weight:700;letter-spacing:-.02em">${DET_SAY.title}</span></div>
      <span style="color:var(--accent);display:flex">${icon('target', 26)}</span></div>
    <p style="margin:0;font-size:14px;line-height:1.5;color:var(--dim)">${esc(open.length ? DET_SAY.open(open.length) : DET_SAY.none)}${later.length ? ' ' + esc(DET_SAY.later(later.length)) : ''}</p>
    <div class="statrow"><span class="stat"><b>${stats.n}/${stats.total}</b><span>Met</span></span>
      <span class="stat"><b>${stats.n ? stats.nameRight : '&mdash;'}</b><span>Name</span></span>
      <span class="stat"><b>${stats.n ? stats.routeRight : '&mdash;'}</b><span>Answers</span></span></div>
    <button class="btn ghost sm" data-v="det">${stats.n ? 'Go on naming cases' : 'Name a case'}</button>
  </div></div>`;
}
