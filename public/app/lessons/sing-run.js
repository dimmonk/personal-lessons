/* ===================== SINGING: ONE SUNG TRY ON SCREEN ===================== */
// Lesson standard 25 (item 3) and 26.1.1. A sung question runs on the sound system's clock and the browser's frame loop, never on a
// timer: a tap plays the target (the app listens to nothing while it plays and for a quarter of a second after), the learner's window
// opens at that moment and is as long as the target plus 0.4 s (a hold: its seconds plus 1 s), and every reading the microphone
// gives falls on that same clock. When the window ends the try is scored (sing-score.js) and handed to the queue as an answer, which
// stores numbers only. Nothing is recorded, kept or sent: each reading is looked at and dropped, and only the numbers of a try remain.
// The microphone is switched on by a tap, stays on for the rest of the group of questions, and goes off when it ends, on Back, when the
// page is hidden, or when the learner turns it off.
// SING is this question's try, replaced (never changed) at every step; the queue (queue.js) owns the question.
//   { key, ask, plans, stage, phase, tryNo, lineOn, windowStartS, windowEndS, windowIdx, readings, points, answer, failure }
//   phase: ready | starting | hear | sing | nothing | failed | result
//   plans: the plans of the try (sing-task.js); a light question first has two for the learner's loud and talking notes (stage 0, 1)
// Needs the queue (Q, answerAsk), the sound and microphone files, sing-task.js, sing-score.js and sing-strip.js.

let SING = null;
let SING_SCALE = null;       // a light question: { loud, talk }, the levels of this group's two scale notes
let SING_WATCHING = false;
const SING_LEAD_S = 0.4;     // a hum with nothing to listen to first begins this long after the tap
const SING_ACTIVE = ['starting', 'hear', 'sing'];
const SING_IDLE = ['ready', 'nothing', 'failed'];

function singReset(){ SING = null; SING_SCALE = null; }
const setSing = patch => { SING = { ...SING, ...patch }; return SING; };
const singAskOf = inst => inst.item.asks.find(a => a.kind === 'sing');

// A page that goes into the background stops all sound and switches the microphone off. Armed by the first tap.
function watchPageHidden(){
  if(SING_WATCHING) return;
  SING_WATCHING = true;
  document.addEventListener('visibilitychange', () => { if(document.hidden) stopAudio(); });
  window.addEventListener('pagehide', stopAudio);
}

/* ---------- this question's try ---------- */
function singPlansFor(inst, ask){
  const range = rangeOf(Q.subj.id), main = singPlan(ask, range, inst.seed);
  if(ask.task !== 'light' || SING_SCALE) return [main];
  const scale = singScalePlan(range, inst.seed + 1);
  return [scale, scale, main];
}
function singEnsure(inst, answered){
  const key = `${Q.run}|${Q.at}|${inst.key}|${inst.seed}`;
  if(SING && SING.key === key) return SING;
  const ask = singAskOf(inst);
  SING = { key, ask, plans: singPlansFor(inst, ask), stage: 0, phase: answered ? 'result' : 'ready', tryNo: 0, lineOn: false,
    windowStartS: 0, windowEndS: 0, windowIdx: 0, readings: [], points: [], answer: null, failure: null };
  return SING;
}

/* ---------- what is on screen ---------- */
const singPromptOf = s => s.plans.length === 3 && s.stage < 2 ? (s.stage === 0 ? SAY.singScaleLoud : SAY.singScaleTalk) : s.ask.prompt;
function singStatusOf(s, plan){
  if(s.phase === 'starting') return SAY.singStarting;
  if(s.phase === 'hear') return SAY.singListen;
  if(s.phase === 'sing'){
    const w = plan.windows[s.windowIdx] || plan.windows[0];
    return w.free ? { hum: SAY.singHum, up: SAY.singUp, down: SAY.singDown }[w.label] : SAY.singNow;
  }
  if(s.phase === 'nothing') return s.failure === 'narrow' ? SAY.singNarrow : SAY.singNothing;
  if(s.phase === 'failed') return s.failure === 'denied' ? SAY.micDenied : SAY.micMissing;
  return '';
}
function singButtonOf(s, plan){
  if(!SING_IDLE.includes(s.phase)) return null;
  if(s.phase !== 'ready') return { label: SAY.singAgain };
  return { label: SING_FREE.includes(s.ask.task) ? SAY.singStart : plan.hear.length > 1 ? SAY.singGoMany : SAY.singGo };
}
// The view the strip and the controls are drawn from. The line and the targets are drawn only while the set's support shows the line
// (a hum is always drawn: it has nothing else); once the try is scored the result is always drawn.
function singView(inst, support, answered){
  const s = singEnsure(inst, answered), plan = s.plans[s.stage], free = SING_FREE.includes(s.ask.task);
  const showLine = free || !!(support && support.line), result = s.phase === 'result';
  const aiming = ['hear', 'sing', 'nothing'].includes(s.phase);
  return { plan, showLine, bars: plan.bars.length > 0 && (result || (showLine && aiming)), path: result || showLine ? voicePath(plan, s.points) : '',
    hidden: !showLine && !result, prompt: singPromptOf(s), status: singStatusOf(s, plan), button: singButtonOf(s, plan),
    skip: s.ask.task === 'warmup' && SING_IDLE.includes(s.phase),
    micLine: meterIsOn() ? SAY.micIsOn : s.phase === 'result' ? '' : SAY.micPrivate, micOff: meterIsOn() };
}
// Draws the parts of the question that change during a try without repainting the screen
function singRepaint(){
  const strip = document.querySelector('[data-sing-strip]'), controls = document.querySelector('[data-sing-ask]');
  const inst = Q && Q.list[Q.at];
  if(!SING || !strip || !controls || !inst || !isSung(inst)) return;   // the group has ended, or the screen has moved on
  const view = singView(inst, Q.support, SING.phase === 'result');
  strip.innerHTML = stripHtml(view);
  controls.innerHTML = singControlsHtml(view);
  wireSingControls();
}
function wireSingControls(){
  on('#singGo', singTap);
  on('#singSkip', singSkip);
  on('#singMicOff', () => stopAudio());
}
function wireSing(inst, answered){
  singEnsure(inst, answered);
  wireSingControls();
}

/* ---------- a tap starts a try ---------- */
async function singTap(){
  const s = SING;
  if(!s || !SING_IDLE.includes(s.phase)) return;
  watchPageHidden();
  audioContext();   // made, or resumed, in the tap itself
  const tryNo = s.tryNo + 1;
  setSing({ phase: 'starting', tryNo, lineOn: s.lineOn, readings: [], points: [], failure: null, windowIdx: 0 });
  singRepaint();
  if(!meterIsOn()){
    const running = await startListening({ onReading: singRead, onStop: singMicStopped, onFail: singFailed });
    if(!running || !SING || SING.tryNo !== tryNo) return;
  }
  singBegin(tryNo);
}
function singBegin(tryNo){
  const s = SING, plan = s.plans[s.stage], heard = plan.hear.length > 0;
  if(heard) startExample(singExample(plan), () => {});
  const start = heard ? audioQuietUntil() : AUDIO_STATE.ctx.currentTime + SING_LEAD_S;
  const free = SING_FREE.includes(s.ask.task);
  setSing({ phase: heard ? 'hear' : 'sing', tryNo, windowStartS: start, windowEndS: start + plan.totalMs / 1000,
    lineOn: free || !!(Q.support && Q.support.line) });
  singRepaint();
}

/* ---------- every reading while the try runs ---------- */
function singRead(reading){
  let s = SING;
  if(!s || !['hear', 'sing'].includes(s.phase)) return;
  if(s.phase === 'hear'){
    if(reading.t < s.windowStartS) return;
    s = setSing({ phase: 'sing' });
    singRepaint();
  }
  if(reading.t >= s.windowEndS) return singFinish();
  if(reading.quiet || reading.t < s.windowStartS) return;
  singCollect(s, reading);
}
function singCollect(s, reading){
  const plan = s.plans[s.stage], ms = (reading.t - s.windowStartS) * 1000;
  const idx = Math.max(0, plan.windows.findIndex(w => ms >= w.fromMs && ms < w.fromMs + w.ms));
  const points = reading.hz === null ? s.points : [...s.points, { ms, midi: stripMidi(plan, ms, reading.hz) }];
  setSing({ readings: [...s.readings, reading], points, windowIdx: idx });
  if(idx !== s.windowIdx) return singRepaint();
  const voice = s.lineOn && document.querySelector('.pitchstrip .voice');
  if(voice) voice.setAttribute('d', voicePath(plan, points));
}

/* ---------- the end of the window ---------- */
function singFinish(){
  const s = SING, plan = s.plans[s.stage];
  if(plan.scale) return singScaleDone(s, plan);
  const answer = singScored(s, plan);
  if(answer.retry) return singRetry(answer.retry);
  setSing({ phase: 'result', answer });
  answerAsk(s.ask.id, answer);
}
// the numbers a finished window stores, or { retry } when nothing usable was sung (the try is not counted: it can be made again)
function singScored(s, plan){
  if(s.ask.task === 'warmup') return { cents: [] };
  if(s.ask.task === 'range') return singRangeScored(s, plan);
  const answer = singAnswer(plan, s.readings, s.windowStartS, SING_SCALE && SING_SCALE.talk);
  return answer || { retry: 'nothing' };
}
// The range is measured here and saved once, as the learner's private data (26.3); the try stores only how much was found.
function singRangeScored(s, plan){
  const found = singFindRange(plan, s.readings, s.windowStartS);
  if(!found) return { retry: 'nothing' };
  if(found.span < SING_RANGE_MIN_SPAN) return { retry: 'narrow' };
  saveNote(Q.subj.id, 'range', { low: midiToNote(found.low), high: midiToNote(found.high), set: today() });
  return { span: found.span, steady: found.steady };
}
function singRetry(why){
  setSing({ phase: 'nothing', failure: why });
  singRepaint();
}
// a light question's loud or talking note: remember its level and go on to the next note
function singScaleDone(s, plan){
  const level = singScaleLevel(plan, s.readings, s.windowStartS);
  if(level === null) return singRetry('nothing');
  SING_SCALE = { ...SING_SCALE, [s.stage === 0 ? 'loud' : 'talk']: level };
  setSing({ stage: s.stage + 1, phase: 'ready', readings: [], points: [] });
  singRepaint();
}
function singSkip(){
  if(!SING || !SING_IDLE.includes(SING.phase)) return;
  setSing({ phase: 'result', answer: { cents: [] } });
  answerAsk(SING.ask.id, { cents: [] });
}

/* ---------- the microphone going away ---------- */
function singMicStopped(){
  if(!SING) return;
  if(SING_ACTIVE.includes(SING.phase)){
    stopSounds();
    setSing({ phase: 'ready', readings: [], points: [] });
  }
  singRepaint();
}
function singFailed(kind){
  if(!SING) return;
  setSing({ phase: 'failed', failure: kind });
  singRepaint();
}
