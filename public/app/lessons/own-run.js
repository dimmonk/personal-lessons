/* ===================== LESSONS: THE STEP ON THE LEARNER'S OWN DATA ===================== */
// Lesson standard 3 (an `own` step), 5 and 7. After the sample questions, the same step on the learner's own data: the sheet of their
// accounts when it is empty, the app's arithmetic on what they typed beside the lines of a sample to find on their own papers, and the
// change made now or dated with a what, a where and a day (and a calendar file for the day). Nothing here is scored, stored as a try, logged
// or shared: it is written to the subject's notes (sheet, actions, triggers; kept with the learner's sign-in) and shown only on the subject's own screens.
// OWN is this visit's working state, replaced (never changed) at every step:
//   { step, phase: 'sheet' | 'costs' | 'skipped', drafts: [account draft], problems: [{ path, text }], action: { draft, problems } }
// Needs the lesson player (LESSON, lessonShell, heading, goOn), own.js and own-view.js.

let OWN = null;
const setOwn = patch => { OWN = { ...OWN, ...patch }; };
const ownFormOf = (data, id) => (data.meta.own || {})[id] || lessonFail(`unknown private form ${id}`);
const ownActionFormOf = data => Object.values(data.meta.own || {}).find(f => f.into === 'actions') || lessonFail('the subject has no private form for actions');
const sheetAccounts = subjectId => (notesOf(subjectId).sheet || {}).accounts || [];
const actionsOf = subjectId => notesOf(subjectId).actions || [];
const triggersOf = subjectId => notesOf(subjectId).triggers || {};
const triggerText = (data, id) => (((data.meta.lists || {}).trigger || []).find(t => t.id === id) || { text: id }).text;
// the path of a draft box ("accounts.0.holdings.1.value") as the id of its element
const ownBoxId = path => `#own-${path.replace(/\./g, '-')}`;

/* ---------- the drafts ---------- */
// The drafts with one box's text put in: the account's own field, or a field of one of its funds
function ownSetAt(drafts, path, value){
  const [, i, key, j, field] = path.split('.');
  return drafts.map((a, ai) => ai !== Number(i) ? a : key === 'holdings'
    ? { ...a, holdings: a.holdings.map((h, hi) => hi === Number(j) ? { ...h, [field]: value } : h) } : { ...a, [key]: value });
}
const without = (list, at) => list.filter((_, i) => i !== at);

/* ---------- the step ---------- */
function paintOwn(step){
  const { subj, data, lesson } = LESSON;
  const into = ownFormOf(data, step.own).into;
  if(into === 'plan') return paintPlanStep(step);
  if(into === 'setup') return paintSetupStep(step);
  if(into === 'answers') return paintAnswersStep(step);
  if(lesson.trigger && !triggersOf(subj.id)[lesson.trigger]) return paintOwnWait();
  const form = ownFormOf(data, step.own), accounts = sheetAccounts(subj.id);
  OWN = { step, phase: accounts.length ? 'costs' : 'sheet', drafts: accounts.length ? ownDraftsFromSheet(form, accounts) : [ownEmptyAccount(form)], problems: [], action: { draft: {}, problems: [] } };
  paintOwnPhase();
}
function paintOwnPhase(){
  if(OWN.phase === 'sheet') return paintOwnSheet();
  if(OWN.phase === 'skipped') return paintOwnSkipped();
  paintOwnCosts();
}

/* ---------- waiting for a moment ---------- */
function paintOwnWait(){
  const { data, lesson } = LESSON;
  lessonShell(`${heading(SAY.ownEyebrow, SAY.ownWaitTitle)}<div class="lesson"><p>${esc(SAY.ownWaitLine(triggerText(data, lesson.trigger)))}</p></div>`,
    `<div class="actbar"><button class="btn neutral" id="ownMark">${esc(SAY.ownWaitMark)}</button><button class="btn ghost" id="ownLater">${esc(SAY.ownWaitLater)}</button></div>`);
  on('#ownMark', () => { markTrigger(LESSON.subj.id, LESSON.lesson.trigger); paintLesson(); window.scrollTo(0, 0); });
  on('#ownLater', goOn);
}
const markTrigger = (subjectId, id) => saveNote(subjectId, 'triggers', { ...triggersOf(subjectId), [id]: today() });
const clearTrigger = (subjectId, id) => saveNote(subjectId, 'triggers', Object.fromEntries(Object.entries(triggersOf(subjectId)).filter(([k]) => k !== id)));

/* ---------- the sheet form ---------- */
function paintOwnSheet(){
  const { data, subj } = LESSON, form = ownFormOf(data, OWN.step.own), lists = data.meta.lists;
  const warnings = ownDraftWarnings(form, lists, OWN.drafts);
  const has = sheetAccounts(subj.id).length > 0;
  lessonShell(`${heading(SAY.ownEyebrow, SAY.ownSheetTitle)}<div class="lesson"><p>${esc(SAY.ownSheetHow)}</p><p class="privateline">${esc(SAY.ownPrivate)}</p></div>
    ${sheetEditorHtml(form, lists, OWN.drafts, OWN.problems, warnings)}`,
    `<div class="actbar"><button class="btn neutral" id="ownSave">${esc(SAY.ownSave)}${icon('arrow')}</button>
      ${has ? `<button class="btn ghost" id="ownBack">${esc(SAY.ownCostsTitle)}</button>` : `<button class="btn ghost" id="ownSkip">${esc(SAY.ownNoAccounts)}</button>`}</div>`);
  wireOwnSheet(form);
}
function wireOwnSheet(form){
  document.querySelectorAll('[data-path]').forEach(box => {
    const sync = () => setOwn({ drafts: ownSetAt(OWN.drafts, box.dataset.path, box.value) });
    box.oninput = sync;
    box.onchange = sync;
  });
  const edit = (drafts, focus) => { setOwn({ drafts, problems: [] }); paintOwnSheet(); if(focus) focusOn(focus); };
  on('[data-add-account]', () => { const next = ownEmptyAccount(form); edit([...OWN.drafts, next], `[data-account="${OWN.drafts.length}"] select, [data-account="${OWN.drafts.length}"] input`); });
  on('[data-remove-account]', el => { const at = Number(el.dataset.removeAccount), left = without(OWN.drafts, at); edit(left.length ? left : [ownEmptyAccount(form)]); });
  on('[data-add-fund]', el => {
    const at = Number(el.dataset.addFund), fund = ownEmptyHolding(form);
    edit(OWN.drafts.map((a, i) => i === at ? { ...a, holdings: [...a.holdings, fund] } : a), `[data-account="${at}"] [data-fund="${OWN.drafts[at].holdings.length}"] input`);
  });
  on('[data-remove-fund]', el => {
    const [at, fund] = el.dataset.removeFund.split('.').map(Number);
    edit(OWN.drafts.map((a, i) => i === at ? { ...a, holdings: without(a.holdings, fund) } : a));
  });
  on('#ownSave', () => saveSheet(form));
  on('#ownBack', () => { setOwn({ phase: 'costs', drafts: ownDraftsFromSheet(form, sheetAccounts(LESSON.subj.id)), problems: [] }); paintOwnCosts(); window.scrollTo(0, 0); });
  on('#ownSkip', () => { setOwn({ phase: 'skipped' }); paintOwnSkipped(); window.scrollTo(0, 0); });
}
function saveSheet(form){
  const { subj, data } = LESSON, saved = ownSheetFromDraft(form, data.meta.lists, OWN.drafts);
  if(saved.problems.length){
    setOwn({ problems: saved.problems });
    paintOwnSheet();
    return focusOn(ownBoxId(saved.problems[0].path));
  }
  saveNote(subj.id, 'sheet', { ...(notesOf(subj.id).sheet || {}), accounts: saved.accounts });
  setOwn({ phase: 'costs', problems: [] });
  paintOwnCosts();
  window.scrollTo(0, 0);
  focusScreenHead();
}
function paintOwnSkipped(){
  lessonShell(`${heading(SAY.ownEyebrow, SAY.ownNoAccounts)}<div class="lesson"><p>${esc(SAY.ownNoAccountsLine)}</p></div>`, nextAction(SAY.goOn));
  on('#fwd', goOn);
}

/* ---------- what it costs, and the change ---------- */
function paintOwnCosts(){
  const { subj, data } = LESSON, form = ownFormOf(data, OWN.step.own), actionForm = ownActionFormOf(data), lists = data.meta.lists;
  const model = OWN.step.model ? data.items[OWN.step.model] : null;
  const modelHtml = model ? `<div class="vblock soft">${lessonLabel(SAY.ownModelHeading)}<p>${esc(SAY.ownModelLine)}</p></div>
    ${blocksHtml(model.blocks, { deciding: model.deciding || [], data, scope: `own|${model.id}` })}` : '';
  lessonShell(`${heading(SAY.ownEyebrow, SAY.ownCostsTitle)}<div class="lesson"><p>${esc(SAY.ownCostsHow)}</p></div>${ownCostsHtml(form, lists, sheetAccounts(subj.id))}${modelHtml}
    <div class="ownsection"><h2 class="owntitle">${esc(SAY.ownActionHeading)}</h2><p class="forline">${esc(SAY.ownActionHow)}</p>
    ${ownActionListHtml(actionsOf(subj.id), subj.id)}${ownActionFormHtml(actionForm, OWN.action.draft, OWN.action.problems)}<p class="hintline">${esc(SAY.ownNothing)}</p></div>`,
    `<div class="actbar"><button class="btn neutral" id="fwd">${esc(SAY.goOn)}${icon('arrow')}</button><button class="btn ghost" id="ownChange">${esc(SAY.ownChange)}</button></div>`);
  document.querySelectorAll('[data-own-action] [data-path]').forEach(box => {
    box.oninput = () => setOwn({ action: { ...OWN.action, draft: { ...OWN.action.draft, [box.dataset.path]: box.value } } });
  });
  on('[data-save-action]', () => saveAction(actionForm, false));
  on('[data-action-now]', () => saveAction(actionForm, true));
  wireActionRows(subj, paintOwnCosts);
  on('#ownChange', () => { setOwn({ phase: 'sheet', drafts: ownDraftsFromSheet(form, sheetAccounts(subj.id)), problems: [] }); paintOwnSheet(); window.scrollTo(0, 0); focusScreenHead(); });
  on('#fwd', goOn);
}
// "Done now" needs only what and where; a day needs a day that is not past
function saveAction(form, doneNow){
  const { subj } = LESSON, made = ownActionFromDraft(form, OWN.action.draft, today(), doneNow, ownNewId('x'));
  if(made.problems.length){
    setOwn({ action: { ...OWN.action, problems: made.problems } });
    paintOwnCosts();
    return focusOn(ownBoxId(made.problems[0].path));
  }
  saveNote(subj.id, 'actions', [...actionsOf(subj.id), made.action]);
  setOwn({ action: { draft: {}, problems: [] } });
  paintOwnCosts();
  focusOn(`[data-action="${made.action.id}"]`);
}
// a calendar file and a done mark for each action listed (in the lesson and on the subject screen); `repaint` shows the change
function wireActionRows(subj, repaint){
  on('[data-action-ics]', el => {
    const action = actionsOf(subj.id).find(a => a.id === el.dataset.actionIcs);
    if(action) saveFile(ownCalendarName(action), ownCalendarFile(action, today()), 'text/calendar');
  });
  on('[data-action-done]', el => { saveNote(subj.id, 'actions', ownMarkDone(actionsOf(subj.id), el.dataset.actionDone, today())); repaint(); });
}

/* ---------- the subject screen: your accounts and dates ---------- */
let OWN_SUBJECT = { deleting: false, deleted: false };
const ownSubjectReset = () => { OWN_SUBJECT = { deleting: false, deleted: false }; };
const ownSubjectPatch = patch => { OWN_SUBJECT = { ...OWN_SUBJECT, ...patch }; };
const hasPrivateForms = data => Object.keys(data.meta.own || {}).length > 0;
// what leaves the phone, and only when the learner taps: this subject's notes as one file
const ownExportBody = subjectId => JSON.stringify({ exported: today(), standard: FC.STANDARD, engine: FC.ENGINE, subject: subjectId, notes: notesOf(subjectId) }, null, 2);
function wireOwnSection(subj){
  const again = patch => { ownSubjectPatch(patch); renderSubject(subj); };
  on('[data-own-export]', () => saveFile(`fieldcraft-${subj.id}-${today()}.json`, ownExportBody(subj.id), 'application/json'));
  on('[data-own-delete]', () => again({ deleting: true, deleted: false }));
  on('[data-own-delete-no]', () => again({ deleting: false }));
  on('[data-own-delete-yes]', () => { deleteNotes(subj.id); again({ deleting: false, deleted: true }); });
  on('[data-answers-edit]', () => go('answers'));
  on('[data-trigger-mark]', el => { markTrigger(subj.id, el.dataset.triggerMark); again({ deleted: false }); });
  on('[data-trigger-clear]', el => { clearTrigger(subj.id, el.dataset.triggerClear); again({ deleted: false }); });
  wireActionRows(subj, () => again({ deleted: false }));
  wireSetupRows(subj, () => again({ deleted: false }));
}
