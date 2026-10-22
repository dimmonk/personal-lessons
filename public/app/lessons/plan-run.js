/* ===================== LESSONS: WRITING THE PLAN AND MARKING THE OWN WAYS IN ===================== */
// Lesson standard 3 (an `own` step on the form for the plan or the setup), 5 and 7. The step in a lesson where the learner writes one
// if-then plan, cued by the request, or marks the things they have done on their own phone. Nothing here is scored, stored as a try, logged or sent:
// the plan is `notes.plan`, the marks are `notes.setup`. Needs the lesson player (LESSON, lessonShell, heading, goOn), own.js and plan-view.js.
//   PLAN: { step, draft: { [fieldId]: text }, problems, editing }

let PLAN = null;
const setPlan = patch => { PLAN = { ...PLAN, ...patch }; };

function paintPlanStep(step){
  const { subj } = LESSON, saved = notesOf(subj.id).plan;
  PLAN = { step, draft: saved ? { cue: saved.cue, then: saved.then } : {}, problems: [], editing: !saved };
  paintPlan();
}
function paintPlan(){
  const { subj, data } = LESSON, form = ownFormOf(data, PLAN.step.own), saved = notesOf(subj.id).plan, words = form.words;
  const editor = PLAN.editing
    ? `<div class="lesson"><p>${esc(words.how)}</p><p class="privateline">${esc(SAY.planPrivate)}</p></div>${planFormHtml(form, PLAN.draft, PLAN.problems)}`
    : `<div class="lesson"><p>${esc(words.saved)}</p></div>${planSentenceHtml(saved)}`;
  const actions = PLAN.editing
    ? `<div class="actbar"><button class="btn neutral" id="planSave">${esc(SAY.planSave)}${icon('arrow')}</button><button class="btn ghost" id="planSkip">${esc(SAY.planSkip)}</button></div>`
    : `<div class="actbar"><button class="btn neutral" id="fwd">${esc(SAY.goOn)}${icon('arrow')}</button><button class="btn ghost" id="planChange">${esc(SAY.planChange)}</button></div>`;
  lessonShell(`${heading(SAY.planEyebrow, words.title)}${editor}`, actions);
  document.querySelectorAll('[data-own-plan] [data-path]').forEach(box => {
    box.oninput = () => setPlan({ draft: { ...PLAN.draft, [box.dataset.path]: box.value } });
  });
  on('#planSave', savePlan);
  on('#planSkip', goOn);
  on('#planChange', () => { setPlan({ editing: true, problems: [] }); paintPlan(); focusOn('[data-own-plan] input'); });
  on('#fwd', goOn);
}
function savePlan(){
  const { subj, data } = LESSON, form = ownFormOf(data, PLAN.step.own), made = planFromDraft(form, PLAN.draft, today());
  if(made.problems.length){
    setPlan({ problems: made.problems });
    paintPlan();
    return focusOn(ownBoxId(made.problems[0].path));
  }
  saveNote(subj.id, 'plan', made.plan);
  setPlan({ editing: false, problems: [] });
  paintPlan();
  focusScreenHead();
}

/* ---------- the own ways in ---------- */
function paintSetupStep(step){
  const { subj, data } = LESSON, form = ownFormOf(data, step.own);
  lessonShell(`${heading(SAY.setupEyebrow, SAY.setupTitle)}<div class="lesson"><p>${esc(SAY.setupHow)}</p></div>${setupListHtml(form, notesOf(subj.id).setup)}
    <p class="hintline">${esc(SAY.setupNote)}</p>`, nextAction(SAY.goOn));
  wireSetupRows(subj, () => paintSetupStep(step));
  on('#fwd', goOn);
}
// a done mark and a way to take it off, in the lesson and on the subject screen; `repaint` shows the change
function wireSetupRows(subj, repaint){
  on('[data-setup-mark]', el => { saveNote(subj.id, 'setup', setupMarked(notesOf(subj.id).setup, el.dataset.setupMark, today())); repaint(); });
  on('[data-setup-clear]', el => { saveNote(subj.id, 'setup', setupCleared(notesOf(subj.id).setup, el.dataset.setupClear)); repaint(); });
}
// the plan shown once before the group it is rehearsed in
function paintPlanBefore(step, then){
  const plan = notesOf(LESSON.subj.id).plan;
  lessonShell(`${heading(SAY.planEyebrow, SAY.planBeforeTitle)}<div class="lesson"><p>${esc(planWordsOf(LESSON.data).before)}</p></div>${planSentenceHtml(plan)}`, nextAction(SAY.goOn));
  on('#fwd', then);
}
