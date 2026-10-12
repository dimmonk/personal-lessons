/* ===================== LESSONS: THE PLAN AND THE OWN WAYS IN, ON SCREEN ===================== */
// Lesson standard 5 and 7. Pure HTML builders over plan.js and own-view.js: the plan form and the plan as a sentence, the list of things the
// learner does on their own phone, and the part of the subject screen that shows both. Nothing here reads the page or the storage.
//   problems: [{ path, text }]   the message that belongs under a field (the path is the field's id)

function planFormHtml(form, draft, problems){
  const fields = form.fields.map(f => ownFieldHtml(f, {}, draft[f.id] || '', f.id, problems)).join('');
  return `<div class="ownform" data-own-plan>${fields}</div>`;
}
const planSentenceHtml = plan => `<p class="plansentence" data-plan-sentence>${esc(planSentence(plan))}</p>`;
function setupRowHtml(field, day){
  return `<li class="setuprow${day ? ' done' : ''}" data-setup="${esc(field.id)}"><span class="owntext"><b>${esc(field.label)}</b><span class="ownwhere">${esc(day ? SAY.ownDoneOn(day) : SAY.setupNot)}</span></span>
    <span class="ownbtns">${day ? `<button type="button" class="linkish" data-setup-clear="${esc(field.id)}">${esc(SAY.setupUndo)}</button>`
      : `<button type="button" class="btn ghost sm" data-setup-mark="${esc(field.id)}">${esc(SAY.setupMark)}</button>`}</span></li>`;
}
const setupListHtml = (form, setup) => `<ul class="setuplist" data-own-setup>${form.fields.map(f => setupRowHtml(f, (setup || {})[f.id])).join('')}</ul>`;

// the learner's plan and their own ways in, as the subject screen shows them
function planSectionHtml(data, notes){
  const plan = (data.meta.own || {}).plan, setup = (data.meta.own || {}).setup;
  const planHtml = plan ? `<span class="m lab">${esc(SAY.planHeading)}</span>${notes.plan ? planSentenceHtml(notes.plan) : `<p class="hintline">${esc(SAY.planNone)}</p>`}` : '';
  const setupHtml = setup ? `<span class="m lab">${esc(SAY.setupHeading)}</span>${setupListHtml(setup, notes.setup)}` : '';
  return planHtml + setupHtml;
}
