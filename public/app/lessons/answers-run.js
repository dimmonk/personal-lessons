/* ===================== LESSONS: ENTERING THE LEARNER'S OWN ANSWERS ===================== */
// Lesson standard 26.1 (an `own` step on the form into `answers`), 26.3 and 26.5 (step 9). The learner types the answers that depend on where
// they live and who holds office, and the date of their interview, from the page the form names. They are saved whole to `pl:<subject>:notes`
// as `answers` and nowhere else, never scored against a truth and never sent anywhere. The same form is a step of a lesson and a screen of the
// subject (the answers change, and are looked up again before a mock interview). Needs the lesson player (LESSON, lessonShell, heading, goOn),
// own.js, own-view.js and answers-view.js.
//   ANSWERS: { form, draft: { [fieldId]: text }, problems: [{ path, text }], saved: bool, where: 'lesson' | 'screen', subj }

let ANSWERS = null;
const answersDraftFrom = (form, saved) => Object.fromEntries(form.fields.map(f => [f.id, saved && saved[f.id] !== undefined ? String(saved[f.id]) : '']));
const setAnswers = patch => { ANSWERS = { ...ANSWERS, ...patch }; };

function paintAnswersStep(step){
  const { subj, data } = LESSON, form = ownFormOf(data, step.own);
  ANSWERS = { form, draft: answersDraftFrom(form, notesOf(subj.id).answers), problems: [], saved: false, where: 'lesson', subj };
  paintAnswers();
}
// the screen the subject's own button opens, to enter the answers or look them up again
function renderAnswers(subj){
  const form = answersFormOf(FC.get(subj.id));
  if(!form) return go('subject');
  ANSWERS = { form, draft: answersDraftFrom(form, notesOf(subj.id).answers), problems: [], saved: false, where: 'screen', subj };
  paintAnswers();
}
function paintAnswers(){
  const { form, draft, problems, saved, where, subj } = ANSWERS;
  const body = saved
    ? `<div class="lesson"><p>${esc(SAY.answersSaved)}</p><p>${answersLinkHtml()}</p></div>`
    : `<div class="lesson"><p>${esc(SAY.answersHow)}</p><p>${answersLinkHtml()}</p><p class="privateline">${esc(SAY.answersPrivate)}</p></div>${answersFormHtml(form, draft, problems)}`;
  const inner = `${heading(SAY.answersEyebrow, SAY.answersTitle)}${body}`;
  const save = `<div class="actbar"><button class="btn neutral" id="answersSave">${esc(SAY.answersSave)}${icon('arrow')}</button></div>`;
  if(where === 'lesson') lessonShell(inner, saved ? nextAction(SAY.goOn) : save);
  else screenEl().innerHTML = `<div class="pane read flush" style="--accent:${subj.accent}"><div class="topbar"><button class="iconbtn" data-v="subject" aria-label="Back to ${esc(subj.name)}">${icon('back', 20)}</button><span class="spacer"></span></div>
    ${inner}${saved ? `<div class="actbar"><button class="btn neutral" data-v="subject">${esc(SAY.toSubject)}${icon('arrow')}</button></div>` : save}</div>`;
  document.querySelectorAll('[data-own-answers] [data-path]').forEach(box => { box.oninput = box.onchange = () => setAnswers({ draft: { ...ANSWERS.draft, [box.dataset.path]: box.value } }); });
  on('[data-v]', el => go(el.dataset.v));
  on('#answersSave', saveAnswers);
  on('#fwd', goOn);
}
function saveAnswers(){
  const made = ownRecord(ANSWERS.form.fields, {}, ANSWERS.draft), problems = Object.entries(made.problems).map(([path, text]) => ({ path, text }));
  if(problems.length){
    setAnswers({ problems });
    paintAnswers();
    return focusOn(ownBoxId(problems[0].path));
  }
  saveNote(ANSWERS.subj.id, 'answers', { ...made.value, saved: today() });
  setAnswers({ problems: [], saved: true });
  paintAnswers();
  window.scrollTo(0, 0);
  focusScreenHead();
}
