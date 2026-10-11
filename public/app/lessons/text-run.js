/* ===================== LESSONS: WRITING A LINE ===================== */
// Lesson standard 26.1 (the `text` ask). What happens on the screen the queue (queue.js) has just painted when it holds a line to write: the
// words are kept in Q.cur.typed[askId] as they are typed (so a repaint loses nothing), Answer opens when something is written, and "Not yet"
// answers with nothing written so that the model line can be read. Needs the queue (Q, openAsk, answerAsk) and text-view.js.

const openWriteAsk = askId => { const ask = openAsk(askId); return ask && ask.kind === 'text' ? ask : null; };

function wireText(){
  document.querySelectorAll('textarea[data-write]:not([disabled])').forEach(box => {
    const askId = box.dataset.write;
    box.oninput = () => {
      Q.cur = { ...Q.cur, typed: { ...Q.cur.typed, [askId]: box.value } };
      const answer = document.querySelector(`[data-write-answer="${askId}"]`);
      if(answer) answer.disabled = !textReady(box.value);
    };
  });
  on('[data-write-answer]', el => commitWrite(el.dataset.writeAnswer));
  on('[data-write-skip]', el => { if(openWriteAsk(el.dataset.writeSkip)) answerAsk(el.dataset.writeSkip, ''); });
}

function commitWrite(askId){
  const box = document.querySelector(`textarea[data-write="${askId}"]`);
  if(!openWriteAsk(askId) || !box || !textReady(box.value)) return;
  answerAsk(askId, writtenWords(box.value));
}
