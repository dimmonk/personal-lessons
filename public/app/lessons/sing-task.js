/* ===================== SINGING: THE KINDS OF SUNG QUESTION (pure) ===================== */
// Lesson standard 3.8 (and section 3.8, items 2 to 4). A sung question is never written as an item: a lesson names a task,
// `{ sing: { task, ...params }, n }`, and the app makes each question from it. The targets are made fresh from the learner's range
// and a seed, so every target lies inside the range (S1) and the exact question can be rebuilt from the seed. Nothing here touches the
// page, the sound system, the microphone or storage, so the validator and the headless tests read the same numbers the phone does.
// Needs seededRandom (gen.js), SAY (view.js), and noteToMidi, midiToNote, noteToHz (audio-notes.js).

const SING_TASKS = ['warmup', 'range', 'match', 'hold', 'slide', 'interval', 'melody', 'light'];
const SING_FREE = ['warmup', 'range'];   // no target: the learner hums and the line follows
const SING_NEEDS_RANGE = ['match', 'hold', 'slide', 'interval', 'melody', 'light'];
// what a task may carry, as [least, most] whole numbers (3.8)
const SING_PARAMS = {
  hold: { seconds: [2, 6] },
  slide: { maxSemitones: [2, 12] },
  interval: { minSemitones: [1, 11], maxSemitones: [2, 12] },
  melody: { notes: [3, 5], maxStep: [1, 7] }
};
// what a task may carry if it likes, as [least, most] whole numbers: a slower tune (each note but the last this long, in ms) for learning
// a new tune slowly before it is sung at its speed (research note V2, V17)
const SING_OPTIONS = {
  melody: { noteMs: [800, 1600] }
};
const SING_CENTS = 25;                 // on the note: within this many hundredths of a half-step (a quarter of one)
const SING_CENTS_LIMITS = [5, 100];    // what a task may set `cents` to

// timing, all in milliseconds on the sound system's clock (section 3.8, item 3)
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
const SING_SLOWEST = 1.5;              // a run is listened to long enough for a singer this many times slower than played (judgement call)
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
  const options = SING_OPTIONS[task.task] || {};
  Object.entries(options).filter(([name]) => name in task).forEach(([name, [least, most]]) => {
    if(!Number.isInteger(task[name]) || task[name] < least || task[name] > most) problems.push(`${task.task}: ${name} is ${task[name]}, outside ${least} to ${most}`);
  });
  const allowed = ['task', 'cents', ...Object.keys(limits), ...Object.keys(options)];
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
  // a single note: a match or a light note is also judged on how it starts (`onset`: a scoop is not on the note) and on whether it wandered
  // (`turns`: a hunt is not on the note); a hold on how it starts and how it ends (`onset`, `drift`: off from the start, or sank, or rose)
  const span = singSpan(range), single = (midi, ms, extra = {}) => ({ task: kind, cents: tol, hear: [hearNote(midi, 0, SING_NOTE_MS)],
    bars: [{ note: midiToNote(midi), fromMs: 0, ms }], windows: [{ note: midiToNote(midi), fromMs: 0, ms }], totalMs: ms, ...extra });
  if(kind === 'match' || kind === 'light'){
    const [least, most] = kind === 'match' ? singMiddle(range) : singTop(range);
    return single(pickBetween(rnd, least, most), SING_NOTE_MS + SING_WINDOW_EXTRA_MS, { onset: true, turns: true, ...(kind === 'light' ? { level: true } : {}) });
  }
  if(kind === 'hold'){
    const [least, most] = singMiddle(range);
    return single(pickBetween(rnd, least, most), ask.seconds * 1000 + SING_HOLD_EXTRA_MS, { holdNeedMs: ask.seconds * 1000, onset: true, drift: true });
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
// heard notes one after another, then the same notes sung one window each. A run whose last note is held (`holdNeedMs`) is listened to
// long enough for a singer up to SING_SLOWEST times slower than played to hold it: the last window ends no earlier than that singer's
// last onset (plus a moment to come in, SING_WINDOW_EXTRA_MS), the hold, and a moment to let go.
function runPlan(task, tol, midis, lengths, extra = {}){
  let heardAt = 0, sungAt = 0;
  const hear = midis.map((m, i) => { const h = hearNote(m, heardAt, lengths[i]); heardAt += lengths[i] + SING_GAP_MS; return h; });
  const last = midis.length - 1, slowEnd = extra.holdNeedMs ? hear[last].atMs * SING_SLOWEST + 2 * SING_WINDOW_EXTRA_MS + extra.holdNeedMs : 0;
  const windows = midis.map((m, i) => { const ms = lengths[i] + SING_WINDOW_EXTRA_MS, w = { note: midiToNote(m), fromMs: sungAt, ms: i === last ? Math.max(ms, slowEnd - sungAt) : ms }; sungAt += w.ms; return w; });
  return { task, cents: tol, hear, windows, bars: windows.map(({ note, fromMs, ms }) => ({ note, fromMs, ms })), totalMs: sungAt, ...extra };
}
function intervalPlan(rnd, ask, range, span, tol){
  const [least, most] = singMiddle(range), from = pickBetween(rnd, least, most), to = stepFrom(rnd, from, span, ask.minSemitones, ask.maxSemitones);
  return runPlan('interval', tol, [from, to], [SING_STEP_MS, SING_STEP_MS]);
}
function melodyPlan(rnd, ask, range, span, tol){
  const [least, most] = singMiddle(range), notes = [pickBetween(rnd, least, most)];
  while(notes.length < ask.notes) notes.push(stepFrom(rnd, notes[notes.length - 1], span, 1, ask.maxStep));
  const each = ask.noteMs || SING_MELODY_MS;
  return runPlan('melody', tol, notes, notes.map((_, i) => i === notes.length - 1 ? SING_LONG_MS : each), { holdNeedMs: SING_MELODY_HOLD_MS, onset: true, drift: true });
}

// The plan for the note a light question measures loudness on: a note from the middle of the range, sung loudly, then at talking loudness.
function singScalePlan(range, seed){
  const [least, most] = singMiddle(range), midi = pickBetween(seededRandom(seed), least, most);
  return { task: 'light', cents: SING_CENTS, hear: [hearNote(midi, 0, SING_NOTE_MS)], bars: [{ note: midiToNote(midi), fromMs: 0, ms: SING_NOTE_MS + SING_WINDOW_EXTRA_MS }],
    windows: [{ note: midiToNote(midi), fromMs: 0, ms: SING_NOTE_MS + SING_WINDOW_EXTRA_MS }], totalMs: SING_NOTE_MS + SING_WINDOW_EXTRA_MS, scale: true };
}
// the heard part of a plan as a sound for startExample (audio-synth.js), in the hum-like tone (AUDIO_VOICE_HARMONICS)
const singExample = plan => ({ play: plan.hear.map(h => ({ note: h.note, at: h.atMs, ms: h.ms, voice: true })) });
const singHeardMs = plan => plan.hear.length ? Math.max(...plan.hear.map(h => h.atMs + h.ms)) : 0;

/* ---------- what a sung answer means (pure: from the numbers a try stores) ---------- */
// A sung answer is numbers only: { cents: [error of each note], start?, end?, turns?, holdMs?, loud? } and, for a range, { span, steady }.
// `start` is how far off the first moment of a single note was (a match, a light note or a hold), `end` the last moment of a hold or of a
// melody's long last note, `turns` how many times a match or a light note changed direction by more than a shade (a hunt).
const singOnNote = (ask, cents) => Math.abs(cents) <= singTolerance(ask);
// A note that slid: it started more than a shade off the note (SING_SHADE_CENTS) and moved more than a shade to where it went within a
// moment (`land`), whether that is on the note (a slide into it) or not.
// 1: started under and slid up into it (a scoop, lesson 3), -1: started over and slid down onto it, 0: it did not slide. A slide is never on
// the note, because "on the note" means on it from the start (judgement call: a natural start moves far less than a shade in its first
// quarter of a second; the example sound of a scoop moves three times that, research note V23).
function singSlid(answer, note = (answer.cents || [])[0]){
  const start = answer.start;
  if(!Number.isFinite(start) || note === undefined || Math.abs(note) >= SING_MISSED) return 0;
  // where it went within a moment (`land`, its track 0.5 to 0.75 s in; sing-score.js), or where it sat when the note was shorter
  const land = Number.isFinite(answer.land) && Math.abs(answer.land) < SING_MISSED ? answer.land : note;
  return Math.abs(start) > SING_SHADE_CENTS && Math.abs(start - land) > SING_SHADE_CENTS ? (start < land ? 1 : -1) : 0;
}
// A note that hunted for its note: it changed direction by more than a shade at least twice (SING_HUNT_TURNS) before or while it sat. A hunt
// is never on the note, and it is named before a slide, since a hunt usually starts off the note too (judgement call, research note V23).
const SING_HUNT_TURNS = 2;
const singHunted = answer => Number.isFinite(answer.turns) && answer.turns >= SING_HUNT_TURNS;
// Where a hold or a melody's last note ended: -1 under the note, 0 on it, 1 over it, or null when its end was not heard
function singDrift(ask, answer){
  const end = answer.end;
  if(!Number.isFinite(end) || Math.abs(end) >= SING_MISSED) return null;
  return singOnNote(ask, end) ? 0 : end < 0 ? -1 : 1;
}
function singOk(ask, answer){
  const cents = answer.cents || [], on = c => singOnNote(ask, c);
  switch(ask.task){
    case 'warmup': return true;
    case 'range': return answer.span >= SING_RANGE_MIN_SPAN;
    case 'hold': return answer.holdMs >= ask.seconds * 1000;
    case 'interval': return cents.length === 2 && cents.every(on);
    case 'melody': return cents.length === ask.notes && cents.filter(on).length >= Math.ceil(0.8 * ask.notes) && answer.holdMs >= SING_MELODY_HOLD_MS;
    case 'light': return cents.length === 1 && on(cents[0]) && !singSlid(answer) && !singHunted(answer) && answer.loud <= SING_LOUD_LIMIT;
    case 'match': return cents.length === 1 && on(cents[0]) && !singSlid(answer) && !singHunted(answer);
    default: return cents.length === 1 && on(cents[0]);   // slide: judged on its landing
  }
}
/* ---------- saying what you heard, before the result (research note V10, V14) ---------- */
// A group may ask the learner, after the window closes and before the result, whether their note was under, on or over (`guess: true` on
// the group). The answer is kept with the try's numbers as -1, 0 or 1, and is never scored. A run is asked about its last note; the result
// says whether the side it measured is where the note started or where it ended (sing-judge.js).
const SING_GUESS_WORDS = ['under', 'on', 'over'];
const SING_GUESS_TASKS = ['match', 'hold', 'slide', 'interval', 'melody', 'light'];
const singGuessValue = word => SING_GUESS_WORDS.indexOf(word) - 1;
const singGuessWord = value => SING_GUESS_WORDS[value + 1];
const singGuessRun = ask => ask.task === 'interval' || ask.task === 'melody';
// What the app measured on the note a guess is about is singMeasured (sing-judge.js): the note's own outcome, so the two always agree.

// 'ok' or 'no', as the engine scores an ask (rules.js SCORERS)
const scoreSing = (data, ask, answer) => singOk(ask, answer) ? 'ok' : 'no';
// the word for how far off a note was: on | littleUnder | littleOver | shadeUnder | shadeOver | wellUnder | wellOver | missed. "A shade" is
// more than half a half-step and up to a whole one (Singing's lesson 2), so a closer target (cents under 50) calls a note off by up to half a
// half-step "a little" under or over, never "a shade".
const SING_LITTLE_CENTS = 50;
function singWordKey(ask, cents){
  const far = Math.abs(cents);
  if(far >= SING_MISSED) return 'missed';
  if(singOnNote(ask, cents)) return 'on';
  return (far <= SING_LITTLE_CENTS ? 'little' : far <= SING_SHADE_CENTS ? 'shade' : 'well') + (cents < 0 ? 'Under' : 'Over');
}
// how far off a note was, in whole half-steps, at least one (the words for a note well off say "about 2 half-steps")
const singHalfSteps = cents => Math.max(1, Math.round(Math.abs(cents) / 100));
