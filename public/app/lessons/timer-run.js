/* ===================== LESSONS: THE COUNTDOWN, ON SCREEN ===================== */
// Lesson standard 4 and 9 (X17). The seconds left of a timed question are counted on the frame clock: one requestAnimationFrame loop, no
// timer, that takes the time between frames off Q.cur.left (timer.js caps a late frame, so a hidden page does not run out) and draws the number
// and the bar in place, without repainting the screen. At zero the question is stopped by timeoutItem (queue.js) and waits for Next.
// Needs the queue (Q, timeoutItem).

let TIMER_LOOP = null;   // { raf, last } while a timed question is counting down
// a question counts down when it has seconds, is not answered, and, in a busy group, its banner has arrived
const timerRuns = () => !!Q && Q.cur.left !== null && !Q.cur.done && (Q.over !== 'busy' || Q.cur.arrived);
function timerEnsure(){
  if(TIMER_LOOP || !timerRuns()) return;
  TIMER_LOOP = { raf: requestAnimationFrame(timerFrame), last: null };
}
function timerStop(){
  if(TIMER_LOOP) cancelAnimationFrame(TIMER_LOOP.raf);
  TIMER_LOOP = null;
}
function timerFrame(now){
  const loop = TIMER_LOOP;
  if(!loop) return;
  if(!timerRuns()){ TIMER_LOOP = null; return; }
  const left = timerAfter(Q.cur.left, loop.last === null ? 0 : now - loop.last);
  loop.last = now;
  Q.cur = { ...Q.cur, left };
  timerDraw(left);
  if(left <= 0){ TIMER_LOOP = null; return timeoutItem(); }
  loop.raf = requestAnimationFrame(timerFrame);
}
// the number and the bar, changed in place
function timerDraw(left){
  const num = document.querySelector('[data-timer-num]'), bar = document.querySelector('[data-timer-bar]');
  if(num && num.textContent !== String(timerShown(left))) num.textContent = String(timerShown(left));
  if(bar) bar.style.width = `${timerShare(left, Q.seconds)}%`;
}
