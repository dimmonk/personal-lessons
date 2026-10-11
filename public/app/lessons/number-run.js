/* ===================== LESSONS: TYPING A NUMBER ===================== */
// Lesson standard 26.1 and 26.2. What happens on the screen the queue (queue.js) has just painted when it holds a typed number: the
// boxes keep what is typed in Q.cur.typed (so a repaint loses nothing), the Answer button opens when every box holds a number, the
// calculator works in place (no repaint, so the page does not jump), and in practice an answer far from the learner's own estimate is
// held back once with "your answer and your estimate disagree" (26.2). A check's group has no support, so it is never held back.
// Needs the queue (Q, openAsk, answerAsk, queueItem, paintQueue) and number.js.

const boxesOf = askId => [...document.querySelectorAll(`[data-ask="${askId}"] .numbox`)];
const typedOf = askId => boxesOf(askId).map(box => box.value);
const allNumbers = (ask, values) => values.length === slotCount(ask) && values.every(v => parseTyped(v) !== null);
const setTyped = (askId, values) => { Q.cur = { ...Q.cur, typed: { ...Q.cur.typed, [askId]: values } }; };
const setCalc = patch => { Q.cur = { ...Q.cur, calc: { ...Q.cur.calc, ...patch } }; };
const openNumberAsk = askId => { const ask = openAsk(askId); return ask && ask.kind === 'number' ? ask : null; };

function refreshAnswerButton(askId){
  const ask = openNumberAsk(askId), button = document.querySelector(`[data-num-answer="${askId}"]`);
  if(ask && button) button.disabled = !allNumbers(ask, typedOf(askId));
}
function wireNumber(){
  document.querySelectorAll('.numask .numbox:not([disabled])').forEach(box => {
    const askId = box.closest('[data-ask]').dataset.ask;
    box.oninput = () => { setTyped(askId, typedOf(askId)); refreshAnswerButton(askId); };
    box.onkeydown = e => { if(e.key === 'Enter'){ e.preventDefault(); commitNumber(askId); } };
  });
  on('[data-num-answer]', el => commitNumber(el.dataset.numAnswer));
  on('[data-calc-toggle]', toggleCalc);
  on('[data-calc-key]', el => pressCalc(el.dataset.calcKey));
  on('[data-calc-use]', useCalc);
}

function commitNumber(askId){
  const ask = openNumberAsk(askId);
  if(!ask) return;
  const values = typedOf(askId);
  if(!allNumbers(ask, values)) return;
  const typed = values.map(parseTyped);
  setTyped(askId, values);
  if(estimatesDisagree(queueItem().item, Q.support, ask, Q.cur.a, typed) && !Q.cur.looked[askId]){
    Q.cur = { ...Q.cur, looked: { ...Q.cur.looked, [askId]: true } };
    paintQueue();
    return focusOn('[data-estimate-check]');
  }
  answerAsk(askId, typed);
}
// After an answer opens the next ask, the cursor goes to its box (the keyboard stays up); otherwise to the ask itself
function focusAfterAnswer(){
  const box = document.querySelector('[data-ask]:last-of-type .numbox:not([disabled])');
  if(box) box.focus({ preventScroll: true });
  else focusOn('[data-ask]:last-of-type');
}

/* ---------- the calculator ---------- */
function toggleCalc(button){
  const open = !Q.cur.calc.open;
  setCalc({ open });
  document.querySelectorAll('[data-calc]').forEach(panel => { panel.hidden = !open; });
  button.setAttribute('aria-expanded', String(open));
}
function pressCalc(key){
  const st = calcPress(Q.cur.calc.st, key);
  setCalc({ st });
  document.querySelector('[data-calc-display]').textContent = st.shown;
}
// the display goes into the first empty box of the open ask, else the last one
function useCalc(button){
  const value = calcValue(Q.cur.calc.st), askId = button.closest('[data-ask]').dataset.ask;
  if(value === null) return;
  const boxes = boxesOf(askId), target = boxes.find(box => box.value.trim() === '') || boxes[boxes.length - 1];
  target.value = Q.cur.calc.st.shown;
  setTyped(askId, typedOf(askId));
  refreshAnswerButton(askId);
  target.focus({ preventScroll: true });
}
