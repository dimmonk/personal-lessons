/* ===================== LESSONS: TAPPING A LINE, ON SCREEN ===================== */
// Lesson standard 26.1 (the `tap` ask). What happens on the screen the queue (queue.js) has just painted when a tap ask is open: a tap on a
// line of the text answers it (or, when several lines are wanted, picks it and Answer sends them), and "Not given" answers that nothing
// is there. Needs the queue (Q, openAsk, answerAsk, queueItem, paintQueue) and tap.js.

// the tap ask open now and not yet answered, if any
function openTapAsk(){
  if(Q.cur.done) return null;
  return openAsks(queueItem().item, Q.support, Q.cur.a).find(a => a.kind === 'tap' && !(a.id in Q.cur.a)) || null;
}
function wireTap(){
  on('[data-tap]', el => pickLine(el.dataset.tap));
  on('[data-tap-none]', () => { const ask = openTapAsk(); if(ask) answerAsk(ask.id, [TAP_NONE]); });
  on('[data-tap-answer]', commitTap);
}
function pickLine(segmentId){
  const ask = openTapAsk();
  if(!ask) return;
  if(tapPick(ask) === 1) return answerAsk(ask.id, [segmentId]);
  const before = Q.cur.many[ask.id] || [];
  const after = before.includes(segmentId) ? before.filter(id => id !== segmentId) : before.length < tapPick(ask) ? [...before, segmentId] : before;
  Q.cur = { ...Q.cur, many: { ...Q.cur.many, [ask.id]: after } };
  paintQueue();
}
function commitTap(){
  const ask = openTapAsk();
  if(!ask) return;
  const picked = Q.cur.many[ask.id] || [];
  if(tapReady(ask, picked)) answerAsk(ask.id, picked);
}
