/* ===================== LESSONS: A RUN OF QUESTIONS ===================== */
// Lesson standard 26.1 and 26.2. One question a screen: the blocks, the asks in order (each opens when the one before is answered),
// then the feedback, which opens only when the last ask is answered so that no answer gives a later one away. Groups of questions
// in a lesson, the end check, the weekly review and a retest all run through here; the caller says what to do with the result.
// Nothing advances by itself: the learner taps Next.
//
// Q: { subj, data, list: [instance], at, cur: { a, many, done, score }, log, context, feedback: 'after-each' | 'at-end',
//      support, redo, run, owner(instance) -> { lesson, rev }, shell(inner, actions), onDone(log), firstTotal, keepMic }
// log entry: { inst, a, r, ok, first, unscored }
// A sung question (26.1.1) is answered by the sing controller (sing-run.js), which calls answerAsk when a try is scored. A warm-up is
// unscored: it is not stored, not counted, and never comes back. `keepMic` leaves the microphone on when this run ends (the range
// exercise that opens a sung run).

let Q = null;
const freshCur = () => ({ a: {}, many: {}, done: false, score: null });

function startQueue(opts){
  singReset();
  Q = { support: null, redo: false, feedback: 'after-each', keepMic: false, ...opts, at: 0, cur: freshCur(), log: [], firstTotal: opts.list.length };
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
    if(!Q.keepMic) stopAudio();
    return Q.onDone(Q.log);
  }
  const inst = queueItem(), cur = Q.cur, sung = isSung(inst);
  const marks = cur.done && Q.feedback === 'after-each';
  const body = itemHtml(Q.data, inst, { a: cur.a, many: cur.many, marks, support: Q.support, sing: sung ? singView(inst, Q.support, cur.done) : null,
    feedback: marks ? feedbackHtml(Q.data, inst, Q.support, cur.a, cur.score) : '' });
  const last = Q.at === Q.list.length - 1;
  const actions = `<div class="actbar"><button class="btn neutral" id="qNext" ${cur.done ? '' : 'disabled'}>${last ? SAY.finish : SAY.next}${icon('arrow')}</button>
    ${cur.done ? '' : `<p class="hint">${esc(sung ? SAY.singToGoOn : SAY.answerToGoOn)}</p>`}</div>`;
  Q.shell(`<p class="m qlabel">${esc(questionLabel(inst))}</p>${body}`, actions);
  on('[data-opt]', el => pickOption(el.closest('[data-ask]').dataset.ask, el.dataset.opt));
  on('[data-answer]', el => commitMany(el.dataset.answer));
  on('#qNext', nextQuestion);
  if(sung) wireSing(inst, cur.done);
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
  focusOn('[data-ask]:last-of-type');
}

// a missed question comes back at least three questions later, until it is right (R2); a made one comes back with new numbers
function redoOf(inst){
  if(inst.seed === undefined) return { ...inst, redo: true };
  const seed = freshSeed(Q.subj.id, inst.key, Q.run, Q.list.length + 1000);
  return { ...instanceOf(Q.data, inst.ref, seed), redo: true };
}
function finishItem(){
  const inst = queueItem(), score = scoreItem(Q.data, inst.item, Q.support, Q.cur.a), owner = Q.owner(inst), unscored = !!inst.item.unscored;
  if(!unscored) recordTry(Q.subj.id, inst.key, { run: Q.run, lesson: owner.lesson, rev: owner.rev, context: Q.context, sup: supportWeight(Q.support) > 0,
    seed: inst.seed, a: Q.cur.a, r: score.r, ok: score.ok });
  Q.log = [...Q.log, { inst, a: Q.cur.a, r: score.r, ok: score.ok, first: !inst.redo, unscored }];
  if(Q.redo && !score.ok && !unscored){
    const at = Math.min(Q.at + 4, Q.list.length);
    Q.list = [...Q.list.slice(0, at), redoOf(inst), ...Q.list.slice(at)];
  }
  Q.cur = { ...Q.cur, done: true, score };
  paintQueue();
  focusOn(Q.feedback === 'after-each' ? '[data-feedback]' : '.qlabel');
}
function nextQuestion(){
  if(!Q.cur.done) return;
  Q = { ...Q, at: Q.at + 1, cur: freshCur() };
  paintQueue();
  window.scrollTo(0, 0);
  focusOn('.qlabel');
}
// the instances of a finished run asked for the first time, as pass rules read them: [{ facets, r, ok }]
const queueOutcomes = log => log.filter(e => e.first && !e.unscored).map(e => ({ facets: e.inst.item.facets || {}, r: e.r, ok: e.ok }));
