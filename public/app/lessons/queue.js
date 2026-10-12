/* ===================== LESSONS: A RUN OF QUESTIONS ===================== */
// Lesson standard 26.1 and 26.2. One question a screen: the blocks, the asks in order (each opens when the one before is answered),
// then the feedback, which opens only when the last ask is answered so that no answer gives a later one away. Groups of questions
// in a lesson, the end check, the weekly review and a retest all run through here; the caller says what to do with the result.
// Nothing advances by itself: the learner taps Next.
//
// Q: { subj, data, list: [instance], at, cur: { a, many, done, score, left, taps, arrived, timedOut, words }, log, context, feedback: 'after-each' | 'at-end',
//      support, redo, returns, run, owner(instance) -> { lesson, rev }, shell(inner, actions), onDone(log), firstTotal, keepMic, seconds, over, busyAt, spoken }
// A spoken run (`spoken`, the mock interview) holds the words of every question that is read aloud behind "Show the words" (speech-run.js).
// A timed group or check (`seconds`, 26.2) gives each question that many seconds, counted on the frame clock (timer-run.js); at zero the question
// stops with a timeout and waits for Next. A call or chat that pushes back is not timed. In a busy group (`over: 'busy'`) the banner of a question
// arrives after the learner has sorted BUSY_TAPS_BEFORE things of the busy task, and the countdown starts then.
// log entry: { inst, a, r, ok, first, unscored }
// A sung question (26.1.1) is answered by the sing controller (sing-run.js), which calls answerAsk when a try is scored. A warm-up is
// unscored: it is not stored, not counted, and never comes back. `keepMic` leaves the microphone on when this run ends (the range
// exercise that opens a sung run).

let Q = null;
// typed: what is in the boxes of each typed number; looked: the typed numbers whose "disagree" line has been shown; calc: the calculator;
// left: the seconds left of a timed question (null when it is not timed); taps and arrived: the busy task and whether the banner is there
// words: the learner asked to see the words of a question that is read aloud and held back (a spoken check)
const freshCur = left => ({ a: {}, many: {}, done: false, score: null, typed: {}, looked: {}, calc: { open: false, st: CALC_START }, left, taps: 0, arrived: false, timedOut: false, words: false });
// the seconds a question has: the group's, unless it is a live call or chat (those are not timed)
const questionSeconds = inst => Q.seconds && inst && !inst.item.asks.some(a => a.kind === 'exchange') ? Q.seconds : null;

function startQueue(opts){
  singReset();
  timerStop();
  speechReset();
  // a question about the learner's own answers is asked with what they entered (recall.js); one whose answer is not entered is not asked
  const answers = notesOf(opts.subj.id).answers, list = opts.list.map(inst => recallWithOwn(inst, answers)).filter(inst => !inst.ownMissing);
  Q = { support: null, redo: false, returns: null, feedback: 'after-each', keepMic: false, seconds: null, over: null, spoken: false, ...opts, list, at: 0, log: [], firstTotal: list.length, busyAt: 0 };
  Q.cur = freshCur(questionSeconds(Q.list[0]));
  paintQueue();
}
const queueItem = () => Q.list[Q.at];
// where the current question stands among the ones asked for the first time
const queuePosition = () => Q.list.slice(0, Q.at + 1).filter(i => !i.redo).length;

const isSung = inst => inst.item.asks.some(a => a.kind === 'sing');
function questionLabel(inst){
  if(inst.redo) return SAY.oneMoreTime;
  return inst.item.label ? SAY.singTry(inst.item.label, queuePosition(), Q.firstTotal) : SAY.questionOf(queuePosition(), Q.firstTotal);
}

function paintQueue(){
  if(Q.at >= Q.list.length){
    timerStop();
    if(!Q.keepMic) stopAudio();
    return Q.onDone(Q.log);
  }
  const inst = queueItem(), cur = Q.cur, sung = isSung(inst), busy = Q.over === 'busy', waiting = busy && !cur.arrived;
  const marks = cur.done && Q.feedback === 'after-each';
  const body = waiting ? '' : itemHtml(Q.data, inst, { a: cur.a, many: cur.many, marks, done: cur.done, support: Q.support, sing: sung ? singView(inst, Q.support, cur.done) : null,
    typed: cur.typed, looked: cur.looked, calc: cur.calc, speech: speechView(inst, cur), timed: cur.left !== null && !cur.done,
    feedback: marks ? feedbackHtml(Q.data, inst, Q.support, cur.a, cur.score, { claim: Q.context !== 'baseline' }) : '' });
  const clock = cur.left === null || waiting ? '' : cur.done ? (cur.timedOut ? `<p class="timerup" data-timer-up>${esc(SAY.timerUp)}</p>` : '') : timerHtml(cur.left, Q.seconds);
  const task = busy ? busyHtml(Q.busyAt, cur.taps, cur.arrived) : '';
  const last = Q.at === Q.list.length - 1;
  // while a clock runs the choices take the foot of the screen, so the bar with its shut Next button gives way
  const clocked = !waiting && cur.left !== null && !cur.done;
  const actions = `<div class="actbar" ${clocked ? 'hidden' : ''}><button class="btn neutral" id="qNext" ${cur.done ? '' : 'disabled'}>${last ? SAY.finish : SAY.next}${icon('arrow')}</button>
    ${cur.done ? '' : `<p class="hint">${esc(sung ? SAY.singToGoOn : waiting ? SAY.busyWait : SAY.answerToGoOn)}</p>`}</div>`;
  Q.shell(`<p class="m qlabel">${esc(questionLabel(inst))}</p>${clock}${body}${task}`, actions);
  on('[data-opt]', el => pickOption(el.closest('[data-ask]').dataset.ask, el.dataset.opt));
  on('[data-answer]', el => commitMany(el.dataset.answer));
  on('#qNext', nextQuestion);
  wireNumber();
  wireForm();
  wireTap();
  wireText();
  wireRecall();
  wireSpeech();
  wireExchange();
  wireOrder();
  wireBusy();
  if(sung) wireSing(inst, cur.done);
  timerEnsure();
}

// the ask a tap belongs to, if it is open and not yet answered
const openAsk = askId => !Q.cur.done && !(askId in Q.cur.a) && openAsks(queueItem().item, Q.support, Q.cur.a).find(a => a.id === askId);

function pickOption(askId, optionId){
  const ask = openAsk(askId);
  if(!ask) return;
  if(ask.many){
    const before = Q.cur.many[askId] || [];
    Q.cur = { ...Q.cur, many: { ...Q.cur.many, [askId]: before.includes(optionId) ? before.filter(x => x !== optionId) : [...before, optionId] } };
    return paintQueue();
  }
  answerAsk(askId, optionId);
}
function commitMany(askId){
  const picked = Q.cur.many[askId] || [];
  if(openAsk(askId) && picked.length) answerAsk(askId, picked);
}
function answerAsk(askId, answer){
  Q.cur = { ...Q.cur, a: { ...Q.cur.a, [askId]: answer } };
  if(itemAnswered(queueItem().item, Q.support, Q.cur.a)) return finishItem();
  paintQueue();
  focusAfterAnswer();
}

// a missed question comes back at least three questions later, until it is right (R2); a made one comes back with new numbers
function redoOf(inst){
  if(inst.seed === undefined) return { ...inst, redo: true };
  const seed = freshSeed(Q.subj.id, inst.key, Q.run, Q.list.length + 1000);
  return { ...instanceOf(Q.data, inst.ref, seed), redo: true };
}
function finishItem(){
  const inst = queueItem();
  settle(inst, scoreItem(Q.data, inst.item, Q.support, Q.cur.a), false);
}
// the time ran out: whatever is not answered is a timeout (a miss that is not a slip), and the question waits for Next
function timeoutItem(){
  if(!Q || Q.cur.done) return;
  const inst = queueItem(), score = scoreItem(Q.data, inst.item, Q.support, Q.cur.a);
  const open = openAsks(inst.item, Q.support, Q.cur.a).filter(a => !(a.id in Q.cur.a));
  settle(inst, { r: { ...score.r, ...Object.fromEntries(open.map(a => [a.id, 'timeout'])) }, ok: false }, true);
}
function settle(inst, score, timedOut){
  timerStop();
  const owner = Q.owner(inst), unscored = !!inst.item.unscored, timed = Q.cur.left !== null;
  if(!unscored) recordTry(Q.subj.id, inst.key, { run: Q.run, lesson: owner.lesson, rev: owner.rev, context: Q.context, sup: supportWeight(Q.support) > 0,
    seed: inst.seed, a: Q.cur.a, r: score.r, ok: score.ok, ...(timed ? { ms: Math.round((Q.seconds - Q.cur.left) * 1000) } : {}) });
  Q.log = [...Q.log, { inst, a: Q.cur.a, r: score.r, ok: score.ok, first: !inst.redo, unscored }];
  // a missed question comes back; a group may say `returns: n`, the most that come back in one run, so a learner who misses most is never held in it
  if(Q.redo && !score.ok && !unscored && (Q.returns === null || Q.list.filter(i => i.redo).length < Q.returns)){
    const at = Math.min(Q.at + 4, Q.list.length);
    Q.list = [...Q.list.slice(0, at), redoOf(inst), ...Q.list.slice(at)];
  }
  Q.cur = { ...Q.cur, done: true, score, timedOut };
  paintQueue();
  focusOn(Q.feedback === 'after-each' ? '[data-feedback]' : '.qlabel');
}
function nextQuestion(){
  if(!Q.cur.done) return;
  Q = { ...Q, at: Q.at + 1, cur: { ...freshCur(questionSeconds(Q.list[Q.at + 1])), calc: { open: Q.cur.calc.open, st: CALC_START } } };
  paintQueue();
  window.scrollTo(0, 0);
  focusOn('.qlabel');
  speakQuestion();   // the tap on Next is the learner's: once they have tapped to hear a question, the next one is read to them
}
// the instances of a finished run asked for the first time, as pass rules read them: [{ facets, r, ok }]
const queueOutcomes = log => log.filter(e => e.first && !e.unscored).map(e => ({ facets: e.inst.item.facets || {}, r: e.r, ok: e.ok }));
