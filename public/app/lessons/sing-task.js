/* ===================== SINGING: THE KINDS OF SUNG QUESTION (pure) ===================== */
// Lesson standard 26.1.1 (and section 25, items 2 to 4). A sung question is never written as an item: a lesson names a task,
// `{ sing: { task, ...params }, n }`, and the app makes each question from it. The targets are made fresh from the learner's range
// and a seed, so every target lies inside the range (S1) and the exact question can be rebuilt from the seed. Nothing here touches the
// page, the sound system, the microphone or storage, so the validator and the headless tests read the same numbers the phone does.
// Needs seededRandom (gen.js), SAY (view.js), and noteToMidi, midiToNote, noteToHz (audio-notes.js).

const SING_TASKS = ['warmup', 'range', 'match', 'hold', 'slide', 'interval', 'melody', 'light'];
const SING_FREE = ['warmup', 'range'];   // no target: the learner hums and the line follows
const SING_NEEDS_RANGE = ['match', 'hold', 'slide', 'interval', 'melody', 'light'];
// what a task may carry, as [least, most] whole numbers (26.1.1)
const SING_PARAMS = {
  hold: { seconds: [2, 6] },
  slide: { maxSemitones: [2, 12] },
  interval: { minSemitones: [1, 11], maxSemitones: [2, 12] },
  melody: { notes: [3, 5], maxStep: [1, 7] }
};
const SING_CENTS = 25;                 // on the note: within this many hundredths of a half-step (a quarter of one)
const SING_CENTS_LIMITS = [5, 100];    // what a task may set `cents` to

// timing, all in milliseconds on the sound system's clock (section 25, item 3)
const SING_NOTE_MS = 1500;             // a note to match sounds this long
const SING_STEP_MS = 1000;             // each of the two notes of a slide or an interval
const SING_MELODY_MS = 800;            // each note of a melody but the last
const SING_LONG_MS = 3000;             // the last note of a melody
const SING_GAP_MS = 120;               // between the notes of a heard run, so a repeated note is two notes
const SING_WINDOW_EXTRA_MS = 400;      // the learner sings in a window as long as the note plus this
const SING_HOLD_EXTRA_MS = 1000;       // and as long as a hold's seconds plus this
const SING_WARMUP_MS = 8000;           // a warm-up hum
const SING_RANGE_MS = 7000;            // each of the two slides that find the range
const SING_LAST_MS = 400;              // a slide is scored on its last stretch
const SING_MELODY_HOLD_MS = 2000;      // the long last note of a melody must stay on the note this long
const SING_LOUD_LIMIT = 1.15;          // a light note: at most this much louder than the learner's own talking note
const SING_RANGE_MIN_SPAN = 7;         // a range narrower than this (in half-steps) is not a range
const SING_MIDDLE_PAD = 0.2;           // targets of a match come from the range less this share at each end
const SING_SHADE_CENTS = 100;          // off the note by up to this far is "a shade"; further is "well"
const SING_MISSED = 1200;              // a note in a run that was not heard counts as this far off: always a miss

const singKey = task => `sing-${task.task}`;
const isSingKey = key => typeof key === 'string' && key.startsWith('sing-') && SING_TASKS.includes(key.slice(5));
const singTolerance = ask => ask.cents || SING_CENTS;

// The problems with a task as a lesson writes it: [] when it is fine. One list of limits, read by the app and by V78.
function singTaskProblems(task){
  if(!task || typeof task !== 'object' || Array.isArray(task)) return ['a sung task is an object with a task name'];
  if(!SING_TASKS.includes(task.task)) return [`"${task.task}" is not a task (${SING_TASKS.join(', ')})`];
  const limits = SING_PARAMS[task.task] || {}, problems = [];
  Object.entries(limits).forEach(([name, [least, most]]) => {
    if(!Number.isInteger(task[name])) problems.push(`${task.task} needs ${name}, a whole number from ${least} to ${most}`);
    else if(task[name] < least || task[name] > most) problems.push(`${task.task}: ${name} is ${task[name]}, outside ${least} to ${most}`);
  });
  const allowed = ['task', 'cents', ...Object.keys(limits)];
  Object.keys(task).filter(k => !allowed.includes(k)).forEach(k => problems.push(`${task.task} has no setting "${k}"`));
  if('cents' in task){
    if(SING_FREE.includes(task.task)) problems.push(`${task.task} is not scored, so it has no cents`);
    else if(!Number.isInteger(task.cents) || task.cents < SING_CENTS_LIMITS[0] || task.cents > SING_CENTS_LIMITS[1]) problems.push(`${task.task}: cents is ${task.cents}, outside ${SING_CENTS_LIMITS[0]} to ${SING_CENTS_LIMITS[1]}`);
  }
  if(task.task === 'interval' && Number.isInteger(task.minSemitones) && Number.isInteger(task.maxSemitones) && task.minSemitones > task.maxSemitones) problems.push('interval: minSemitones is more than maxSemitones');
  return problems;
}

/* ---------- the question the app makes from a task ---------- */
// The question as a lesson sees it (before any target): one `pitch` block and one `sing` ask. Its words are the app's (SAY).
function singItem(task){
  const kind = task.task;
  return { id: singKey(task), strand: kind, facets: {}, label: SAY.singLabel[kind], unscored: kind === 'warmup',
    blocks: [{ kind: 'pitch' }],
    asks: [{ id: 'sing', kind: 'sing', ...task, prompt: SAY.singPrompt[kind](task) }],
    reason: SAY.singReason[kind] };
}
// what a stored try's key stands for, when the data has no item or generator of that name
const singDefinition = key => isSingKey(key) ? singItem({ task: key.slice(5), seconds: 2, maxSemitones: 5, minSemitones: 2, notes: 3, maxStep: 3 }) : null;

/* ---------- targets ---------- */
// the range as numbers: { low, high } in half-steps
const singSpan = range => ({ low: noteToMidi(range.low), high: noteToMidi(range.high) });
function singMiddle(range){
  const { low, high } = singSpan(range), pad = Math.floor((high - low) * SING_MIDDLE_PAD);
  return [low + pad, high - pad];
}
function singTop(range){
  const { low, high } = singSpan(range);
  return [high - Math.max(1, Math.floor((high - low) / 5)), high];
}
const pickBetween = (rnd, least, most) => least + Math.floor(rnd() * (most - least + 1));
// a note `least` to `most` half-steps from `from`, up or down, inside the range
function stepFrom(rnd, from, { low, high }, least, most){
  const options = [];
  for(let d = least; d <= most; d++){
    if(from + d <= high) options.push(from + d);
    if(from - d >= low) options.push(from - d);
  }
  if(!options.length) lessonFail(`the range is too narrow for a step of ${least} to ${most} half-steps`);
  return options[Math.floor(rnd() * options.length)];
}

// One heard note: { note, atMs, ms } and the same note as a bar on the strip: { note, fromMs, ms }
const hearNote = (midi, atMs, ms) => ({ note: midiToNote(midi), atMs, ms });

// The plan of one try, from a task, the learner's range and a seed: what is played, the windows the learner sings in, and what
// the strip draws. All times are milliseconds from the start of the playing (hear) or from the start of singing (windows, bars).
//   hear:    [{ note, atMs, ms }]       played by the app, the learner listens
//   windows: [{ note, fromMs, ms, lastMs? } | { free, label, fromMs, ms }]    where the learner sings
//   bars:    [{ note, fromMs, ms }]     the targets as the strip draws them
function singPlan(ask, range, seed){
  const rnd = seededRandom(seed), kind = ask.task, tol = singTolerance(ask);
  if(kind === 'warmup') return { task: kind, cents: tol, hear: [], bars: [], windows: [{ free: true, label: 'hum', fromMs: 0, ms: SING_WARMUP_MS }], totalMs: SING_WARMUP_MS };
  if(kind === 'range') return { task: kind, cents: tol, hear: [], bars: [], totalMs: 2 * SING_RANGE_MS,
    windows: [{ free: true, label: 'up', fromMs: 0, ms: SING_RANGE_MS }, { free: true, label: 'down', fromMs: SING_RANGE_MS, ms: SING_RANGE_MS }] };
  if(!range) lessonFail(`a ${kind} question needs the learner's range, which is not set`);
  const span = singSpan(range), single = (midi, ms, extra = {}) => ({ task: kind, cents: tol, hear: [hearNote(midi, 0, SING_NOTE_MS)],
    bars: [{ note: midiToNote(midi), fromMs: 0, ms }], windows: [{ note: midiToNote(midi), fromMs: 0, ms }], totalMs: ms, ...extra });
  if(kind === 'match' || kind === 'light'){
    const [least, most] = kind === 'match' ? singMiddle(range) : singTop(range);
    return single(pickBetween(rnd, least, most), SING_NOTE_MS + SING_WINDOW_EXTRA_MS, kind === 'light' ? { level: true } : {});
  }
  if(kind === 'hold'){
    const [least, most] = singMiddle(range);
    return single(pickBetween(rnd, least, most), ask.seconds * 1000 + SING_HOLD_EXTRA_MS, { holdNeedMs: ask.seconds * 1000 });
  }
  if(kind === 'slide') return slidePlan(rnd, ask, range, span, tol);
  if(kind === 'interval') return intervalPlan(rnd, ask, range, span, tol);
  return melodyPlan(rnd, ask, range, span, tol);
}
function slidePlan(rnd, ask, range, span, tol){
  const [least, most] = singMiddle(range), from = pickBetween(rnd, least, most), to = stepFrom(rnd, from, span, 2, ask.maxSemitones);
  const total = SING_STEP_MS * 2 + SING_WINDOW_EXTRA_MS * 2;
  return { task: 'slide', cents: tol, hear: [hearNote(from, 0, SING_STEP_MS), hearNote(to, SING_STEP_MS + SING_GAP_MS, SING_STEP_MS)],
    bars: [{ note: midiToNote(from), fromMs: 0, ms: SING_STEP_MS + SING_WINDOW_EXTRA_MS }, { note: midiToNote(to), fromMs: SING_STEP_MS + SING_WINDOW_EXTRA_MS, ms: SING_STEP_MS + SING_WINDOW_EXTRA_MS }],
    windows: [{ note: midiToNote(to), fromMs: 0, ms: total, lastMs: SING_LAST_MS }], totalMs: total };
}
// heard notes one after another, then the same notes sung one window each
function runPlan(task, tol, midis, lengths, extra = {}){
  let heardAt = 0, sungAt = 0;
  const hear = midis.map((m, i) => { const h = hearNote(m, heardAt, lengths[i]); heardAt += lengths[i] + SING_GAP_MS; return h; });
  const windows = midis.map((m, i) => { const w = { note: midiToNote(m), fromMs: sungAt, ms: lengths[i] + SING_WINDOW_EXTRA_MS }; sungAt += w.ms; return w; });
  return { task, cents: tol, hear, windows, bars: windows.map(({ note, fromMs, ms }) => ({ note, fromMs, ms })), totalMs: sungAt, ...extra };
}
function intervalPlan(rnd, ask, range, span, tol){
  const [least, most] = singMiddle(range), from = pickBetween(rnd, least, most), to = stepFrom(rnd, from, span, ask.minSemitones, ask.maxSemitones);
  return runPlan('interval', tol, [from, to], [SING_STEP_MS, SING_STEP_MS]);
}
function melodyPlan(rnd, ask, range, span, tol){
  const [least, most] = singMiddle(range), notes = [pickBetween(rnd, least, most)];
  while(notes.length < ask.notes) notes.push(stepFrom(rnd, notes[notes.length - 1], span, 1, ask.maxStep));
  return runPlan('melody', tol, notes, notes.map((_, i) => i === notes.length - 1 ? SING_LONG_MS : SING_MELODY_MS), { holdNeedMs: SING_MELODY_HOLD_MS });
}

// The plan for the note a light question measures loudness on: a note from the middle of the range, sung loudly, then at talking loudness.
function singScalePlan(range, seed){
  const [least, most] = singMiddle(range), midi = pickBetween(seededRandom(seed), least, most);
  return { task: 'light', cents: SING_CENTS, hear: [hearNote(midi, 0, SING_NOTE_MS)], bars: [{ note: midiToNote(midi), fromMs: 0, ms: SING_NOTE_MS + SING_WINDOW_EXTRA_MS }],
    windows: [{ note: midiToNote(midi), fromMs: 0, ms: SING_NOTE_MS + SING_WINDOW_EXTRA_MS }], totalMs: SING_NOTE_MS + SING_WINDOW_EXTRA_MS, scale: true };
}
// the heard part of a plan as a sound for startExample (audio-synth.js)
const singExample = plan => ({ play: plan.hear.map(h => ({ note: h.note, at: h.atMs, ms: h.ms })) });
const singHeardMs = plan => plan.hear.length ? Math.max(...plan.hear.map(h => h.atMs + h.ms)) : 0;

/* ---------- what a sung answer means (pure: from the numbers a try stores) ---------- */
// A sung answer is numbers only: { cents: [error of each note], holdMs?, loud? } and, for a range, { span, steady }.
const singOnNote = (ask, cents) => Math.abs(cents) <= singTolerance(ask);
function singOk(ask, answer){
  const cents = answer.cents || [], on = c => singOnNote(ask, c);
  switch(ask.task){
    case 'warmup': return true;
    case 'range': return answer.span >= SING_RANGE_MIN_SPAN;
    case 'hold': return answer.holdMs >= ask.seconds * 1000;
    case 'interval': return cents.length === 2 && cents.every(on);
    case 'melody': return cents.length === ask.notes && cents.filter(on).length >= Math.ceil(0.8 * ask.notes) && answer.holdMs >= SING_MELODY_HOLD_MS;
    case 'light': return cents.length === 1 && on(cents[0]) && answer.loud <= SING_LOUD_LIMIT;
    default: return cents.length === 1 && on(cents[0]);   // match, slide
  }
}
// 'ok' or 'no', as the engine scores an ask (rules.js SCORERS)
const scoreSing = (data, ask, answer) => singOk(ask, answer) ? 'ok' : 'no';
// the word for how far off a note was: on | shadeUnder | shadeOver | wellUnder | wellOver | missed
function singWordKey(ask, cents){
  const far = Math.abs(cents);
  if(far >= SING_MISSED) return 'missed';
  if(singOnNote(ask, cents)) return 'on';
  return (far <= SING_SHADE_CENTS ? 'shade' : 'well') + (cents < 0 ? 'Under' : 'Over');
}
