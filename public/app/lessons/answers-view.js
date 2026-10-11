/* ===================== LESSONS: THE LEARNER'S OWN ANSWERS, ON SCREEN ===================== */
// Lesson standard 26.3 and 26.5 (step 9). The answers a few interview questions depend on, which the app cannot know: who the learner's senators
// are, the governor, the capital of their state, who holds the highest offices now, and the date of their interview. The learner looks them up on
// the page the form itself names and types them. Pure HTML builders over own.js: the form, and the part of the subject screen that shows them.
// Nothing here reads the page or the storage.
//   answers  { [fieldId]: text, interviewDate?: 'YYYY-MM-DD', saved: 'YYYY-MM-DD' }

const ANSWERS_PAGE = 'https://www.uscis.gov/citizenship/testupdates';
const ANSWERS_OLD_DAYS = 30;
const answersLinkHtml = () => `<a class="plainlink" href="${ANSWERS_PAGE}" target="_blank" rel="noopener noreferrer" data-updates-link>${esc(SAY.answersLink)}</a>`;
const answersFormOf = data => Object.values(data.meta.own || {}).find(f => f.into === 'answers') || null;

function answersFormHtml(form, draft, problems){
  return `<div class="ownform" data-own-answers>${form.fields.map(f => ownFieldHtml(f, {}, draft[f.id] || '', f.id, problems)).join('')}</div>`;
}
const answersValueText = (field, value) => value === undefined || value === '' ? SAY.answersNone : field.type === 'date' ? longDay(value) : value;

// "Your answers and interview date" on the subject screen: each answer as entered (or not yet), where to look them up, and how old they are
function answersSectionHtml(data, notes){
  const form = answersFormOf(data);
  if(!form) return '';
  const saved = notes.answers || {}, any = form.fields.some(f => saved[f.id]);
  const rows = form.fields.map(f => `<tr data-answer="${esc(f.id)}"><td>${esc(f.label)}</td><td>${esc(answersValueText(f, saved[f.id]))}</td></tr>`).join('');
  const age = !saved.saved ? '' : addDays(saved.saved, ANSWERS_OLD_DAYS) < today() ? SAY.answersOld(saved.saved) : SAY.answersSavedOn(saved.saved);
  return `<span class="m lab">${esc(SAY.answersSection)}</span><table class="k results ownsum" data-own-answers-table>${rows}</table>
    ${age ? `<p class="hintline" data-answers-age>${esc(age)}</p>` : ''}<p class="hintline">${answersLinkHtml()}</p>
    <div class="numacts"><button type="button" class="btn ghost sm" data-answers-edit>${esc(any ? SAY.answersEdit : SAY.answersEnter)}</button></div>`;
}
