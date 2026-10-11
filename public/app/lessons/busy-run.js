/* ===================== LESSONS: THE BUSY TASK, ON SCREEN ===================== */
// Lesson standard 26.2 item 6 (`over: 'busy'`). A tap on a bin sorts the thing in front of the learner and moves to the next; the banner of the
// question arrives after BUSY_TAPS_BEFORE sorts and its countdown starts then. What is sorted is never scored and never stored. Needs the queue
// (Q, paintQueue) and busy.js.

function wireBusy(){
  on('[data-busy-bin]', busyTap);
}
function busyTap(){
  if(!Q || Q.over !== 'busy') return;
  const taps = Q.cur.taps + 1;
  Q = { ...Q, busyAt: Q.busyAt + 1, cur: { ...Q.cur, taps, arrived: Q.cur.arrived || taps >= BUSY_TAPS_BEFORE } };
  paintQueue();
  focusOn('[data-busy-bin]');
}
