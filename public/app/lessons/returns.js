/* ===================== SCREENS: DUE TODAY ===================== */
// The "Due today" tile on the library and subject screens, the returned set it starts, and the plan reminder
// (lesson standard E9, E10, E18). What is due is computed by the engine from the practice record (dueReturns in
// records.js); the set is built by buildReturnSet and run by returnSetRun / paintDrillScreen (drill.js). Nothing is
// stored here except a plan's "shown" day.

const DUE_SAY = {
  title: 'Due today',
  tile: n => `${cap(numWord(n))} name${n === 1 ? ' is' : 's are'} due. Each comes back on a case you have not seen, next to the case it is most often taken for. A set is at most six cases.`,
  none: 'There is nothing to ask right now. A name comes back on a later day, and the cases it can come back on are used up when you have seen them.',
  planHeading: 'Your plan',
  planNote: saved => `You saved this on ${saved}. It is shown back once, with a returned set.`,
  planChange: 'Change it'
};

/* ---------- what is due, and the tile ---------- */
const dueBySubject = () => SUBJECTS.map(subj => ({ subj, due: dueReturns(subj.id) })).filter(x => x.due.length);
function dueTileHtml(rows){
  if(!rows.length) return '';
  const total = rows.reduce((n, r) => n + r.due.length, 0);
  return `<div class="block"><div class="card" data-due-tile>
    <div class="ch"><span class="m a">${DUE_SAY.title}</span><span class="m">${total} due</span></div>
    <span class="cs">${esc(DUE_SAY.tile(total))}</span>
    ${rows.map(r => `<button class="btn sm" data-due="${esc(r.subj.id)}">${esc(r.subj.name)} &middot; ${r.due.length} due${icon('arrow')}</button>`).join('')}
  </div></div>`;
}
const dueTileForLibrary = () => dueTileHtml(dueBySubject());
const dueTileForSubject = subj => dueTileHtml(dueBySubject().filter(r => r.subj.id === subj.id));

/* ---------- the plan reminder (E18) ---------- */
// Saved plans not yet shown back come from records.js (plansToShowBack); each is shown once, with the next returned
// set, and kept, changed or dropped through records.js, which is what stops it being shown again.
function paintReminder(subj){
  const { unitId, text, editing } = PRACTICE.reminders[0], plan = (notesOf(subj.id)[unitId] || {}).plan;
  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="subject">${icon('back', 18)}${esc(subj.name)}</button></div>
    <div class="eyebrow-row"><span class="m a">${DUE_SAY.title}</span><h1>${DUE_SAY.planHeading}</h1></div>
    ${editing ? `<div class="lesson"><p>${esc(SAY.planIfSee)}&hellip;</p><input class="noteinput" id="planCue" value="${esc(plan.cue)}" aria-label="${esc(SAY.planIfSee)}">
        <p style="margin-top:14px">${esc(SAY.planThenIWill)}&hellip;</p><input class="noteinput" id="planThen" value="${esc(plan.then)}" aria-label="${esc(SAY.planThenIWill)}"></div>`
      : `<div class="lesson"><p>${esc(text)}</p></div><p class="hintline">${esc(DUE_SAY.planNote(plan.saved))}</p>`}
    <div class="actbar">${editing
      ? `<button class="btn" id="planSave">Save and go on${icon('arrow')}</button>`
      : `<button class="btn" id="planKeep">Keep it${icon('arrow')}</button>
         <button class="btn ghost" id="planChange">${DUE_SAY.planChange}</button>
         <button class="btn ghost" id="planDrop">Drop it</button>`}</div></div>`;
  on('[data-v]', el => go(el.dataset.v));
  const settle = () => { PRACTICE.reminders = PRACTICE.reminders.slice(1); render(); window.scrollTo(0, 0); };
  on('#planKeep', () => { keepPlan(subj.id, unitId); settle(); });
  on('#planDrop', () => { dropPlan(subj.id, unitId); settle(); });
  on('#planChange', () => { PRACTICE.reminders = [{ unitId, text, editing: true }, ...PRACTICE.reminders.slice(1)]; paintReminder(subj); });
  on('#planSave', () => {
    const cue = document.getElementById('planCue').value.trim(), then = document.getElementById('planThen').value.trim();
    if(!cue || !then) return focusOn(cue ? '#planThen' : '#planCue');
    changePlan(subj.id, unitId, cue, then);
    settle();
  });
}

/* ---------- the set ---------- */
function startDue(subjectId){
  const subj = SUBJECTS.find(s => s.id === subjectId);
  const items = buildReturnSet(subjectId);
  const run = { ...returnSetRun(subj, items), leave: () => go('subject') };
  APP.subjectId = subjectId; touch(subjectId);
  PRACTICE = { kind: 'due', subj, run, items, reminders: plansToShowBack(subjectId).map(p => ({ ...p, editing: false })) };
  go('due');
}
function paintNothingDue(subj){
  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="subject">${icon('back', 18)}${esc(subj.name)}</button></div>
    <div class="done-screen"><h2>${DUE_SAY.title}</h2><p>${esc(DUE_SAY.none)}</p></div></div>`;
  on('[data-v]', el => go(el.dataset.v));
}
function renderDue(subj){
  if(!PRACTICE || PRACTICE.kind !== 'due' || PRACTICE.subj.id !== subj.id) return go('subject');
  if(!PRACTICE.items.length) return paintNothingDue(subj);
  if(PRACTICE.reminders.length) return paintReminder(subj);
  paintDrillScreen(subj, PRACTICE.run, DUE_SAY.title, run => {
    logEvent('return', { subject: subj.id });
    const more = dueReturns(subj.id).length;
    paintPracticeResults(subj, run, `${more ? `<button class="btn" id="more">Another set${icon('arrow')}</button>` : ''}
      <button class="btn ${more ? 'ghost' : ''}" data-v="library">Back to the library</button>`, () => on('#more', () => startDue(subj.id)));
  });
}
