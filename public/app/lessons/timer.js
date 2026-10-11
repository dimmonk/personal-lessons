/* ===================== LESSONS: A COUNTDOWN THAT ONLY SHOWS THE TIME ===================== */
// Lesson standard 26.2 (timed groups, only in a subject that says `timed`) and 26.7 (X17). A timed question shows the seconds it has left, drawn
// on the frame clock (requestAnimationFrame): there is no timer. At zero the question stops, whatever has not been answered is a `timeout` (a miss
// that is not a slip), and the screen waits for Next: nothing ever moves on by itself. Pure: the arithmetic and the HTML, no page and no storage.

const TIMER_SECONDS = [15, 20];
// the seconds each question of the weekly review has, in a subject that times its items
const TIMER_REVIEW_SECONDS = 20;
// A frame later than this counts as a quarter of a second, so a page left in the background does not run out while it is not looked at.
const TIMER_FRAME_CAP_MS = 250;
// what is left after one frame of `deltaMs`
const timerAfter = (left, deltaMs) => Math.max(0, left - Math.min(Math.max(deltaMs, 0), TIMER_FRAME_CAP_MS) / 1000);
const timerShown = left => Math.max(0, Math.ceil(left - 1e-9));
const timerShare = (left, total) => total > 0 ? Math.round(Math.max(0, Math.min(1, left / total)) * 1000) / 10 : 0;
function timerHtml(left, total){
  return `<div class="timer" data-timer role="timer" aria-label="${esc(SAY.timerLabel)}"><span class="timernum" data-timer-num>${timerShown(left)}</span>
    <span class="timerword">${esc(SAY.timerSeconds)}</span><span class="timerbar"><i data-timer-bar style="width:${timerShare(left, total)}%"></i></span></div>`;
}
