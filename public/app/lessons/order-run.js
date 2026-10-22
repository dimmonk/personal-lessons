/* ===================== LESSONS: PUTTING STEPS IN ORDER, ON SCREEN (TAPS) ===================== */
// Lesson standard 3 (the `order` ask). A tap on a step adds it to the order; when every step belongs and all are tapped, the order is the
// answer; when some belong in no order, Answer gives the steps tapped so far. "Start again" clears the taps. The taps so far are kept in Q.cur.many[askId]. Needs the queue (Q, openAsk, answerAsk, paintQueue).

function wireOrder(){
  on('[data-order-step]', el => tapStep(el.closest('[data-ask]').dataset.ask, el.dataset.orderStep));
  on('[data-order-reset]', el => resetOrder(el.closest('[data-ask]').dataset.ask));
  on('[data-order-answer]', el => commitOrder(el.closest('[data-ask]').dataset.ask));
}
function commitOrder(askId){
  const ask = openAsk(askId), picked = Q.cur.many[askId] || [];
  if(!ask || ask.kind !== 'order' || !orderOpen(ask) || !picked.length) return;
  answerAsk(askId, picked);
}
function tapStep(askId, stepId){
  const ask = openAsk(askId);
  if(!ask || ask.kind !== 'order') return;
  const before = Q.cur.many[askId] || [];
  if(before.includes(stepId)) return;
  const after = [...before, stepId];
  if(orderReady(ask, after)) return answerAsk(askId, after);
  Q.cur = { ...Q.cur, many: { ...Q.cur.many, [askId]: after } };
  paintQueue();
}
function resetOrder(askId){
  if(!openAsk(askId)) return;
  Q.cur = { ...Q.cur, many: { ...Q.cur.many, [askId]: [] } };
  paintQueue();
}
