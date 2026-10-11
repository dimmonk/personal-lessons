/* ===================== SINGING: SCORING A TRY (pure) ===================== */
// Lesson standard 25 (items 3 and 4) and 26.1.1. The microphone gives a reading about every 50 ms: { t, hz, level }, where t is the sound
// system's clock in seconds, hz is the pitch found (null when the sound was not clear) and level is how loud it was. These functions turn
// the readings of a try into the numbers it stores. Nothing here touches the page or the sound system.
// Needs medianOf (audio-pitch.js), centsBetween, foldCents, hzToMidi, noteToHz (audio-notes.js) and the SING_ constants (sing-task.js).

const SING_READ_MS = 50;              // readings come about this often
const SING_MIN_READINGS = 5;          // a note needs at least this many clear readings (a quarter of a second) to count as sung
const SING_MIN_LAST_READINGS = 3;     // and a slide's last stretch at least this many
const SING_MIDDLE_SHARE = 0.6;        // a note is judged on the middle of its readings: the attack and the release are left out
const SING_RUN_GAP_S = 0.12;          // readings further apart than this are not one unbroken stretch
const SING_STEADY_READINGS = 6;       // a steady note in a slide lasts at least this many readings (0.3 s) ...
const SING_STEADY_HALFSTEPS = 0.5;    // ... staying within this far of its middle

const clearOnly = list => list.filter(r => r.hz !== null);
// the middle share of a list in time order, at least one member
function middleOf(list, share = SING_MIDDLE_SHARE){
  const cut = Math.floor(list.length * (1 - share) / 2);
  return list.slice(cut, list.length - cut);
}
// how far a reading is from the target, in cents, to the octave nearest the target
const readingCents = (reading, targetHz) => foldCents(centsBetween(reading.hz, targetHz));

// The error of a note, in cents (whole numbers): the middle of the middle 60% of the clear readings, each folded to the octave nearest
// the target. null when too few readings were clear.
function singNoteCents(window, targetHz, least = SING_MIN_READINGS){
  const clear = clearOnly(window);
  if(clear.length < least) return null;
  return Math.round(medianOf(middleOf(clear).map(r => readingCents(r, targetHz))));
}
// How long the learner stayed on the note without a break, in ms: the longest run of clear readings all within the tolerance.
function singHoldMs(window, targetHz, tolerance){
  let best = 0, start = null, last = null;
  for(const r of clearOnly(window)){
    if(Math.abs(readingCents(r, targetHz)) > tolerance){ start = null; continue; }
    if(start === null || r.t - last > SING_RUN_GAP_S) start = r.t;
    last = r.t;
    best = Math.max(best, Math.round((last - start) * 1000) + SING_READ_MS);
  }
  return best;
}
// how loud the learner sang, as the middle of the middle 60% of the levels of the clear readings; null when nothing was clear
function singLevel(window){
  const clear = clearOnly(window);
  return clear.length < SING_MIN_READINGS ? null : medianOf(middleOf(clear).map(r => r.level));
}

// The readings that fall in each window of a plan: startS is the sound-system time at which the first window opens.
function windowReadings(plan, readings, startS){
  return plan.windows.map(w => {
    const from = startS + w.fromMs / 1000, to = from + w.ms / 1000;
    return { w, from, to, list: readings.filter(r => r.t >= from && r.t < to) };
  });
}

// The answer of a scored try: { cents: [..], holdMs?, loud? }, or null when nothing was heard at all (the try is not counted: nothing
// was sung). `talk` is the level of the learner's own talking note, for a light try.
function singAnswer(plan, readings, startS, talk){
  const cents = [], parts = windowReadings(plan, readings, startS);
  let heard = false, holdMs = 0;
  parts.forEach(({ w, to, list }, i) => {
    const hz = noteToHz(w.note);
    const scored = w.lastMs ? list.filter(r => r.t >= to - w.lastMs / 1000) : list;
    const c = singNoteCents(scored, hz, w.lastMs ? SING_MIN_LAST_READINGS : SING_MIN_READINGS);
    heard = heard || clearOnly(list).length >= SING_MIN_READINGS;
    cents.push(c === null ? SING_MISSED : c);
    if(plan.holdNeedMs && i === parts.length - 1) holdMs = singHoldMs(list, hz, plan.cents);
  });
  if(!heard) return null;
  const level = plan.level && talk ? singLevel(parts[0].list) : null;
  return { cents, ...(plan.holdNeedMs ? { holdMs } : {}), ...(plan.level ? { loud: level === null || !talk ? SING_MISSED : Math.round(100 * level / talk) / 100 } : {}) };
}
// the loudness of a note sung for the scale (a light question's loud and talking notes): null when nothing was clear
const singScaleLevel = (plan, readings, startS) => singLevel(windowReadings(plan, readings, startS)[0].list);

/* ---------- the range: the lowest and highest steady notes ---------- */
// The steady notes of a stretch of readings, as numbers on the half-step scale: the middle of every run of at least 0.3 seconds
// that stays within half a half-step of its own middle.
function steadyNotes(readings){
  const runs = [];
  let run = [];
  const close = () => { if(run.length >= SING_STEADY_READINGS) runs.push(medianOf(run.map(r => r.midi))); run = []; };
  clearOnly(readings).map(r => ({ t: r.t, midi: hzToMidi(r.hz) })).forEach(r => {
    const last = run[run.length - 1];
    if(last && (r.t - last.t > SING_RUN_GAP_S || Math.abs(r.midi - medianOf(run.map(x => x.midi))) > SING_STEADY_HALFSTEPS)) close();
    run = [...run, r];
  });
  close();
  return runs;
}
// { low, high, span, steady } in whole half-steps (each end is the nearest note to the steady note sung there), or null when no steady
// note was sung. A span under SING_RANGE_MIN_SPAN is not a range; the caller says so.
function singFindRange(plan, readings, startS){
  const all = windowReadings(plan, readings, startS).flatMap(p => p.list), notes = steadyNotes(all);
  if(!notes.length) return null;
  const low = Math.round(Math.min(...notes)), high = Math.round(Math.max(...notes));
  return { low, high, span: Math.max(0, high - low), steady: notes.length };
}
