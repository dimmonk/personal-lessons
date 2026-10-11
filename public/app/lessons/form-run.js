/* ===================== LESSONS: FILLING IN A FORM ===================== */
// Lesson standard 26.1. What happens on the screen the queue (queue.js) has just painted when it holds a `form` ask: the boxes keep what is
// typed in Q.cur.typed[askId] ({ [fieldId]: text | optionId }) so a repaint loses nothing, a tap on an option marks it in place, and the
// Answer button opens when every box holds a number and every choice has an option. The whole form is answered at once.
// Needs the queue (Q, openAsk, answerAsk) and form.js.

const formDrafts = askId => Q.cur.typed[askId] || {};
const setFormDraft = (askId, drafts) => { Q.cur = { ...Q.cur, typed: { ...Q.cur.typed, [askId]: drafts } }; };
const openFormAsk = askId => { const ask = openAsk(askId); return ask && ask.kind === 'form' ? ask : null; };

function refreshFormButton(askId){
  const ask = openFormAsk(askId), button = document.querySelector(`[data-form-answer="${askId}"]`);
  if(ask && button) button.disabled = !formDraftReady(ask, formDrafts(askId));
}
function commitForm(askId){
  const ask = openFormAsk(askId);
  if(!ask || !formDraftReady(ask, formDrafts(askId))) return;
  answerAsk(askId, formAnswerFrom(ask, formDrafts(askId)));
}
// a tap on one of a field's options: it alone is marked, nothing is scored until Answer
function chooseInForm(button){
  const askId = button.closest('[data-ask]').dataset.ask, field = button.dataset.field;
  if(!openFormAsk(askId)) return;
  setFormDraft(askId, { ...formDrafts(askId), [field]: button.dataset.fopt });
  button.closest('.opts').querySelectorAll('[data-fopt]').forEach(o => {
    o.classList.toggle('sel', o === button);
    o.setAttribute('aria-pressed', String(o === button));
  });
  refreshFormButton(askId);
}
function wireForm(){
  document.querySelectorAll('.formask .numbox:not([disabled])').forEach(box => {
    const askId = box.closest('[data-ask]').dataset.ask;
    box.oninput = () => { setFormDraft(askId, { ...formDrafts(askId), [box.dataset.field]: box.value }); refreshFormButton(askId); };
    box.onkeydown = e => { if(e.key === 'Enter'){ e.preventDefault(); commitForm(askId); } };
  });
  on('[data-fopt]', chooseInForm);
  on('[data-form-answer]', el => commitForm(el.dataset.formAnswer));
}
