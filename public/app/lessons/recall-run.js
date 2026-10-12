/* ===================== LESSONS: TYPING AN ANSWER FROM MEMORY ===================== */
// Lesson standard 3 (the `text` ask with `accept`) and 9 (X14). What happens on the screen the queue (queue.js) has just painted when it holds a
// question answered from memory: the words are kept in Q.cur.typed[askId] as they are typed (so a repaint loses nothing), Answer opens when something is
// typed (Enter sends it), "Not yet" answers with nothing typed, and after a miss "My answer means the same" counts the answer on the learner's word.
// Needs the queue (Q, openAsk, answerAsk, queueItem, paintQueue), recall.js and recall-view.js.

const openRecallAsk = askId => { const ask = openAsk(askId); return ask && isRecallAsk(ask) ? ask : null; };

function wireRecall(){
  document.querySelectorAll('input[data-recall]:not([disabled])').forEach(box => {
    const askId = box.dataset.recall;
    box.oninput = () => {
      Q.cur = { ...Q.cur, typed: { ...Q.cur.typed, [askId]: box.value } };
      const answer = document.querySelector(`[data-recall-answer="${askId}"]`);
      if(answer) answer.disabled = !writtenWords(box.value);
    };
    box.onkeydown = e => { if(e.key === 'Enter'){ e.preventDefault(); commitRecall(askId); } };
  });
  on('[data-recall-answer]', el => commitRecall(el.dataset.recallAnswer));
  on('[data-recall-skip]', el => { if(openRecallAsk(el.dataset.recallSkip)) answerAsk(el.dataset.recallSkip, ''); });
  on('[data-claim]', el => { if(el.dataset.claimAt === undefined) claimAnswer(el.dataset.claim); });
}
function commitRecall(askId){
  const box = document.querySelector(`input[data-recall="${askId}"]`);
  if(!openRecallAsk(askId) || !box || !writtenWords(box.value)) return;
  answerAsk(askId, writtenWords(box.value).slice(0, RECALL_MAX));
}

/* ---------- "my answer means the same" ---------- */
// The question just answered, counted right on the learner's word: its stored try, the run's log, and a repeat that was waiting for it. It is logged,
// and it is not a good day for the schedule (schedule.js), so the question comes back.
function claimAnswer(askId){
  if(!Q.cur.done || !Q.cur.score || Q.cur.score.r[askId] !== 'no') return;
  const inst = queueItem(), claim = claimedResults(Q.cur.score.r, askId);
  claimTry(Q.subj.id, inst.key, Q.run, inst.seed, askId);
  Q.log = Q.log.map((entry, i) => i === Q.log.length - 1 ? { ...entry, r: claim.r, ok: claim.ok } : entry);
  Q.list = Q.list.filter((x, i) => !(i > Q.at && x.redo && x.key === inst.key));
  Q.cur = { ...Q.cur, score: claim };
  paintQueue();
  focusOn('[data-feedback]');
}
// The log of a finished check with one answer counted on the learner's word, and its stored try (the answers listed after a check, X14).
function claimInLog(subjectId, run, log, at, askId){
  const entry = log[at];
  if(!entry || entry.r[askId] !== 'no') return log;
  const claim = claimedResults(entry.r, askId);
  claimTry(subjectId, entry.inst.key, run, entry.inst.seed, askId);
  return log.map((e, i) => i === at ? { ...e, r: claim.r, ok: claim.ok } : e);
}
