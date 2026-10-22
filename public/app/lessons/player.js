/* ===================== LESSONS: A LESSON ON SCREEN ===================== */
// Lesson standard 7. A lesson is a short why, then its steps in order (a teaching screen, a worked example, a group of
// questions), then the end check and its result. One screen at a time; nothing advances by itself; Back is always there and keeps
// the place. The place is a step index, saved on every move: 0 is the why, 1 to n the flow, n + 1 the check.
// LESSON is this visit's working state.

let LESSON = null;
const stepTotal = lesson => lesson.flow.length + 2;
const checkStep = lesson => lesson.flow.length + 1;

// Where a lesson opens: the step the learner put it down at, in the revision they were on (the check's first screen is a step like the others),
// and the why when they have not started, changed revision, or finished the check (then "Practice again" and the lesson's own screens take over).
function lessonResumeAt(data, subjectId, lesson){
  const saved = seenOf(subjectId)[lesson.id];
  return saved && saved.rev === lesson.rev && saved.at > 0 && saved.at <= checkStep(lesson) && !lessonDone(data, subjectId, lesson) ? saved.at : 0;
}
function openLesson(subj, lessonId){
  const data = FC.get(subj.id), lesson = data.lessons[lessonId], resume = lessonResumeAt(data, subj.id, lesson);
  LESSON = { subj, data, lesson, at: resume, run: newRunId(), worked: null };
  APP.subjectId = subj.id; touch(subj.id);
  if(!resume) logEvent('start', { subject: subj.id, lesson: lessonId, rev: lesson.rev });
  saveLessonPlace();
  go('lesson', { lessonId });
}
function saveLessonPlace(){
  const { subj, lesson, at } = LESSON;
  saveSeenLesson(subj.id, lesson.id, { rev: lesson.rev, at });
}
function moveLesson(at){
  timerStop();
  mapViewReset();
  LESSON = { ...LESSON, at, worked: null };
  saveLessonPlace();
  paintLesson();
  window.scrollTo(0, 0);
  focusScreenHead();
}
function renderLesson(subj){
  if(!LESSON || LESSON.subj.id !== subj.id) return go('subject');
  paintLesson();
}

/* ---------- the frame every screen shares ---------- */
function lessonBarText(){
  const { lesson, at } = LESSON;
  return [esc(lesson.title), esc(SAY.rev(lesson.rev)), esc(SAY.stepOf(at + 1, stepTotal(lesson))), ...(lesson.status === 'draft' ? [`<span class="draftline">${esc(SAY.draft)}</span>`] : [])].join(' &middot; ');
}
function lessonShell(inner, actions){
  const { subj } = LESSON;
  screenEl().innerHTML = `<div class="pane read flush" style="--accent:${subj.accent}">
    ${backBar('subject', subj.name)}
    <p class="m unitbar">${lessonBarText()}</p>${inner}${actions || ''}</div>`;
  on('[data-v]', el => go(el.dataset.v));
}
const nextAction = label => `<div class="actbar"><button class="btn neutral" id="fwd">${esc(label)}${icon('arrow')}</button></div>`;
const heading = (eyebrow, title) => `<div class="eyebrow-row"><span class="m a">${esc(eyebrow)}</span><h1>${esc(title)}</h1></div>`;

function paintLesson(){
  const { lesson, at } = LESSON;
  if(at === 0) return paintWhy();
  if(at === checkStep(lesson)) return paintCheckIntro();
  const step = lesson.flow[at - 1];
  if(step.show) return paintShow(step);
  if(step.worked) return paintWorked(step);
  if(step.set) return startSet(step);
  if(step.own) return paintOwn(step);
  return lessonFail(`${lesson.id}: unknown step ${at}`);
}
const goOn = () => moveLesson(LESSON.at + 1);

/* ---------- the why, a teaching screen ---------- */
function paintWhy(){
  const { lesson } = LESSON;
  lessonShell(`${heading(SAY.whyHeading, lesson.title)}<div class="lesson">${textHtml(lesson.why)}</div>`, nextAction(SAY.goOn));
  on('#fwd', goOn);
}
function paintShow(step){
  lessonShell(`${heading(SAY.showHeading, step.title)}${blocksHtml(step.show, { data: LESSON.data, scope: `show|${LESSON.lesson.id}|${LESSON.at}` })}`, nextAction(SAY.goOn));
  on('#fwd', goOn);
}

/* ---------- a worked example ---------- */
// The item shown answered, step by step. If it has a question, the learner may commit to an answer first; that choice is not
// scored and not stored. W: { committed: askId | null, skipped, shown: working steps revealed }
function paintWorked(step){
  const { data } = LESSON, item = data.items[step.worked], w = LESSON.worked || { picked: null, skipped: false, shown: 0 };
  const steps = item.steps || [], ask = (item.asks || [])[0];
  const committing = ask && ask.kind === 'choose' && w.picked === null && !w.skipped;
  const finished = !committing && w.shown >= steps.length;
  const inst = { key: item.id, item };
  const ctx = { deciding: finished ? item.deciding || [] : [], data, scope: `worked|${item.id}` };
  const commit = committing
    ? `<div class="stepopen prompt" data-ask="${esc(ask.id)}"><p class="stem">${esc(SAY.workedCommit)}</p><p class="stem">${esc(paras(ask.prompt).join(' '))}</p><div class="opts">${chooseOptions(data, ask).map(o => `<button class="opt" data-commit="${esc(o.id)}">${esc(o.text)}</button>`).join('')}</div>
        <button class="linkish" id="workedSkip">${esc(SAY.workedShow)}</button></div>` : '';
  const list = steps.slice(0, w.shown).map(s => `<li><b>${esc(s.does)}</b> ${esc(s.working)}</li>`).join('');
  const working = committing || !steps.length ? '' : `<div class="answerline"><span class="m lab">${esc(SAY.workingLabel)}</span><ol class="lsteps">${list}</ol></div>`;
  const answer = finished ? workedAnswerHtml(data, inst) : '';
  const more = !committing && !finished ? `<div class="actbar"><button class="btn neutral" id="workedMore">${esc(w.shown ? SAY.workedNext : SAY.workedShow)}${icon('arrow')}</button></div>` : '';
  lessonShell(`${heading(SAY.workedHeading, LESSON.lesson.title)}${blocksHtml(item.blocks, ctx)}${placeWorkedHtml(data, item)}${commit}${working}${answer}`, finished ? nextAction(SAY.goOn) : more);
  const set = patch => { LESSON = { ...LESSON, worked: { ...w, ...patch } }; paintWorked(step); };
  on('[data-commit]', el => set({ picked: el.dataset.commit, shown: 0 }));
  on('#workedSkip', () => set({ skipped: true }));
  on('#workedMore', () => set({ shown: w.shown + 1 }));
  on('#fwd', goOn);
}
// the right answers of a worked item, then why
function workedAnswerHtml(data, inst){
  const item = inst.item;
  const right = a => a.kind === 'text' ? (isRecallAsk(a) ? a.accept.map(recallEntryText).join('; ') : paras(a.model).join(' ')) : a.kind === 'tap' ? tapRightText(a, item) : a.kind === 'place' ? placeRightText(a) : a.kind === 'number' ? numberRightText(a, item) : a.kind === 'form' ? a.fields.map(f => formFieldRight(data, a, f, item)).join('; ') : chooseOptions(data, a).filter(o => o.ok).map(o => o.text).join('; ');
  const marks = (item.asks || []).map(a => `<div class="mark"><span class="verd">${esc(a.kind === 'text' && !isRecallAsk(a) ? SAY.writeModel : SAY.workedAnswer)}</span><span class="ans">${esc(right(a))}</span></div>`).join('');
  const block = (label, text) => text.length ? `<div class="vblock">${lessonLabel(label)}${text.map(p => `<p>${esc(p)}</p>`).join('')}</div>` : '';
  const picture = item.figure ? `<div class="vblock">${blockHtml(item.figure, { data })}</div>` : '', redrawn = item.redraw === 'from-zero' ? redrawHtml(item) : '';
  return `<div class="feedback"><div class="marks">${marks}</div>${block(SAY.whyLabel, paras(item.reason))}${block(SAY.needLabel, paras(item.need))}${hasHtml(data, item)}${picture}${redrawn}</div>`;
}

/* ---------- a group of questions ---------- */
const lessonOwner = () => () => ({ lesson: LESSON.lesson.id, rev: LESSON.lesson.rev });
function startSet(step){
  const { subj, data, lesson } = LESSON, set = step.set;
  // a group that rehearses the learner's plan shows it once first, when there is one
  if(set.plan && notesOf(subj.id).plan && LESSON.planShownAt !== LESSON.at) return paintPlanBefore(step, () => { LESSON = { ...LESSON, planShownAt: LESSON.at }; paintLesson(); window.scrollTo(0, 0); });
  const run = newRunId();
  const list = buildSet(data, subj.id, lesson, set, run, { again: LESSON.again === true });
  const next = () => LESSON.again ? goOnAgain() : goOn();
  startQueueWithRange({ subj, data, list, run, context: LESSON.again ? 'again' : 'practice', feedback: 'after-each', support: set.support || null, redo: true,
    seconds: set.seconds || null, over: set.over || null,
    owner: lessonOwner(), shell: lessonShell, onDone: log => log.every(e => e.unscored) ? next() : paintBreak(log) });
}
// A sung run needs the learner's range; when it is not set yet, the range exercise runs first and the run follows it (3.8).
// The range try belongs to the lesson's practice, not to the run it opens, so a check's size and result are not changed by it.
function startQueueWithRange(opts){
  const needs = opts.list.some(i => i.item.asks.some(a => a.kind === 'sing' && SING_NEEDS_RANGE.includes(a.task)));
  if(!needs || rangeOf(opts.subj.id)) return startQueue(opts);
  const run = newRunId(), range = instanceOf(opts.data, { sing: { task: 'range' }, n: 1 }, freshSeed(opts.subj.id, 'sing-range', run, 0));
  startQueue({ ...opts, list: [range], run, context: 'practice', support: null, redo: false, feedback: 'after-each', keepMic: true, onDone: () => startQueue(opts) });
}
function paintBreak(log){
  const firsts = log.filter(e => e.first && !e.unscored), ok = firsts.filter(e => e.ok).length;
  const more = LESSON.again ? nextSetAt() >= 0 : true;
  lessonShell(`<div class="done-screen"><h2>${esc(SAY.breakTitle)}</h2><p>${esc(SAY.groupResult(ok, firsts.length))}</p><p>${esc(SAY.breakLine)}</p></div>`, nextAction(more ? SAY.goOn : SAY.toSubject));
  on('#fwd', () => LESSON.again ? goOnAgain() : goOn());
  window.scrollTo(0, 0);
  focusScreenHead();
}

/* ---------- practice again: a finished lesson's groups once more, on questions not seen before ---------- */
// the step index of the first group after the current step, or -1
const nextSetAt = () => { const i = LESSON.lesson.flow.findIndex((s, k) => k + 1 > LESSON.at && s.set); return i < 0 ? -1 : i + 1; };
function practiceAgain(subj, lessonId){
  const data = FC.get(subj.id), lesson = data.lessons[lessonId];
  LESSON = { subj, data, lesson, at: 0, run: newRunId(), worked: null, again: true };
  const first = nextSetAt();
  if(first < 0) return go('subject');
  LESSON = { ...LESSON, at: first };
  APP.subjectId = subj.id; touch(subj.id);
  logEvent('again', { subject: subj.id, lesson: lessonId, rev: lesson.rev });
  go('lesson', { lessonId });
}
// the next group of the lesson, or back to the subject when there is none
function goOnAgain(){
  const next = nextSetAt();
  if(next < 0) return go('subject');
  LESSON = { ...LESSON, at: next };
  paintLesson();
  window.scrollTo(0, 0);
}

/* ---------- the end check ---------- */
function paintCheckIntro(){
  const { data, lesson } = LESSON, check = lesson.check, n = checkSize(check);
  const timed = check.seconds ? `<p>${esc(SAY.checkTimed(check.seconds))}</p>` : '';
  // a baseline is not passed: it says what it is, and shows no rule
  if(lesson.role === 'baseline'){
    lessonShell(`${heading(SAY.baselineHeading, lesson.title)}<div class="lesson"><p>${esc(SAY.baselineIntro(n))}</p>${timed}</div>`, nextAction(SAY.baselineStart));
    return on('#fwd', startCheck);
  }
  const rules = check.pass.map(rule => `<li>${esc(ruleText(data, rule, rightWord(check)))}</li>`).join('');
  const intro = checkIsSung(check) ? SAY.checkIntroSung(n) : check.recall ? SAY.checkIntroAgain(n) : checkIsDrawn(check) ? SAY.checkIntroDrawn(n) : SAY.checkIntro(n);
  // a check that is spoken (the mock interview) says how it goes and sends the learner to the page where the answers that change are posted
  const spoken = check.spoken ? `<p>${esc(SAY.checkSpoken)}</p><p data-updates>${esc(SAY.checkUpdates)}</p>` : '';
  lessonShell(`${heading(SAY.checkHeading, lesson.title)}<div class="lesson"><p>${esc(intro)}</p><ul>${rules}</ul>
    ${check.feedback === 'at-end' ? `<p>${esc(SAY.checkNoFeedback)}</p>` : ''}${timed}${spoken}</div>`, nextAction(SAY.checkStart));
  on('#fwd', startCheck);
}
function checkInstances(run){
  const { data, subj, lesson } = LESSON, check = lesson.check;
  if(checkIsDrawn(check)) return drawInstances(data, subj.id, check.items.draw, run, flowSetIds(lesson), lesson.id);
  const taken = new Map(), list = flatRefs(check.items).flatMap((ref, k) => refInstances(data, subj.id, ref, run, k, taken));
  return check.order === 'shuffle' ? shuffled(list, hashSeed(`${run}|check`)) : list;   // a check in mixed order gives no hint from the place of a question
}
const flowSetIds = lesson => flowSets(lesson).flatMap(set => flatRefs(set.items).map(refId));
function startCheck(){
  const { subj, data, lesson } = LESSON, run = newRunId();
  LESSON = { ...LESSON, run };
  startQueueWithRange({ subj, data, list: checkInstances(run), run, context: checkContext(lesson), feedback: lesson.check.feedback, support: null, redo: false,
    seconds: lesson.check.seconds || null, spoken: !!lesson.check.spoken, owner: lessonOwner(), shell: lessonShell,
    onDone: log => lesson.role === 'baseline' ? paintBaselineResult(log) : paintCheckResult(log) });
}
// "8 of 10: passed", each rule met or not, then every answer with the misses first (when the answers were held back)
function paintCheckResult(log, counted = false){
  const scrolled = window.scrollY, { subj, data, lesson } = LESSON, sung = checkIsSung(lesson.check), result = checkResult(data, lesson.check.pass, queueOutcomes(log), rightWord(lesson.check));
  if(!counted) logEvent('check', { subject: subj.id, lesson: lesson.id, rev: lesson.rev });
  const rows = result.lines.map(l => `<tr><td>${esc(l.text)}</td><td>${esc(l.met ? SAY.ruleMet : SAY.ruleNotMet)}</td></tr>`).join('');
  const each = lesson.check.feedback === 'at-end' ? `<div class="vblock"><span class="m">${esc(SAY.checkEveryAnswer)}</span></div>${checkAnswersHtml(data, log)}` : '';
  const next = nextLessonOf(data, lesson);
  const actions = `<div class="actbar">${next && result.passed ? `<button class="btn neutral" id="toNext">${esc(SAY.nextLesson)}${icon('arrow')}</button>` : ''}
    ${result.passed ? '' : `<button class="btn neutral" id="again">${esc(SAY.again)}</button>`}
    <button class="btn ghost" data-v="subject">${esc(SAY.toSubject)}</button></div>`;
  LESSON = { ...LESSON, at: stepTotal(lesson) - 1 };
  saveLessonPlace();
  lessonShell(`<div class="done-screen results"><h2>${esc(result.passed ? SAY.checkPassed(result.right, result.total, sung) : SAY.checkNotYet(result.right, result.total))}</h2>
    <table class="k results">${rows}</table>${splitsHtml(facetSplits(data, queueOutcomes(log)))}${claimedListHtml(data, log)}</div>${each}`, actions);
  wireClaims((at, askId) => paintCheckResult(claimInLog(subj.id, LESSON.run, log, at, askId), true));
  on('#toNext', () => openLesson(subj, next.id));
  on('#again', () => { LESSON = { ...LESSON, at: checkStep(lesson) }; paintCheckIntro(); window.scrollTo(0, 0); });
  window.scrollTo(0, counted ? scrolled : 0);   // an answer counted on the learner's word keeps their place in the list
  if(!counted) focusScreenHead();
}
/* ---------- the baseline: measured, not passed ---------- */
// One line: how many of the risky messages the learner did what they asked on, and how many real ones they handled the right way (4, gate 5).
// The words come from the subject's `danger` (the slip that is the failure, the facet it is counted by, which value is risky and which is real).
function baselineLine(data, outcomes){
  const d = data.meta.danger, risky = outcomes.filter(o => o.facets[d.facet] === d.risky), real = outcomes.filter(o => o.facets[d.facet] === d.real);
  const slipped = risky.filter(o => Object.values(o.r).includes(d.slip)).length;
  return SAY.baselineLine(facetValueText(data, d.facet, d.risky), risky.length, slipText(data, d.slip), slipped, facetValueText(data, d.facet, d.real), real.length, real.filter(o => o.ok).length);
}
function paintBaselineResult(log){
  const { subj, data, lesson } = LESSON, outcomes = queueOutcomes(log), next = nextLessonOf(data, lesson);
  logEvent('baseline', { subject: subj.id, lesson: lesson.id, rev: lesson.rev });
  LESSON = { ...LESSON, at: stepTotal(lesson) - 1 };
  saveLessonPlace();
  lessonShell(`<div class="done-screen results"><h2>${esc(SAY.baselineDone)}</h2><p data-baseline-line>${esc(baselineLine(data, outcomes))}</p><p>${esc(SAY.baselineNote)}</p></div>`,
    `<div class="actbar">${next ? `<button class="btn neutral" id="toNext">${esc(SAY.nextLesson)}${icon('arrow')}</button>` : ''}<button class="btn ghost" data-v="subject">${esc(SAY.toSubject)}</button></div>`);
  on('#toNext', () => openLesson(subj, next.id));
  window.scrollTo(0, 0);
  focusScreenHead();
}
// every question of a finished check with its feedback; the missed ones first
function checkAnswersHtml(data, log){
  const ordered = [...log.map((e, at) => ({ e, at })).filter(x => !x.e.ok), ...log.map((e, at) => ({ e, at })).filter(x => x.e.ok)];
  const drawn = LESSON && LESSON.lesson && checkIsDrawn(LESSON.lesson.check);
  return ordered.map(({ e, at }) => `<div class="resitem">${itemHtml(data, e.inst, { a: e.a, many: {}, marks: true, support: null,
    feedback: feedbackHtml(data, e.inst, null, e.a, { r: e.r, ok: e.ok }, { claim: true, at }) })}${drawn && !e.ok ? homeLessonHtml(data, e.inst.item.strand) : ''}</div>`).join('');
}
// The lesson whose own check holds a topic (not a drawn check): where a question missed in a drawn check, such as a mock interview, is taught
function homeLessonOf(data, strand){
  return Object.values(data.lessons).find(l => Array.isArray(l.check.items) && flatRefs(l.check.items).some(r => (data.items[refId(r)] || {}).strand === strand)) || null;
}
function homeLessonHtml(data, strand){
  const home = homeLessonOf(data, strand);
  return home ? `<p class="doc-note" data-home-lesson="${esc(home.id)}">${esc(SAY.homeLesson(home.title))}</p>` : '';
}
// the answers counted on the learner's word in a finished run, listed under its result
function claimedListHtml(data, log){
  const claimed = log.filter(e => !e.unscored && Object.values(e.r).includes('claimed'));
  return claimed.length ? `<div class="vblock" data-claimed-list>${lessonLabel(SAY.claimedHeading)}${claimed.map(e => `<p>${esc(recallQuestionText(e.inst.item))}</p>`).join('')}</div>` : '';
}
// the "my answer means the same" buttons among the answers listed after a finished run: `again(at, askId)` shows the run with that answer counted
function wireClaims(again){
  on('[data-claim][data-claim-at]', el => again(Number(el.dataset.claimAt), el.dataset.claim));
}
// the lesson after this one in part order, or null
function nextLessonOf(data, lesson){
  const order = lessonsInOrder(data), i = order.findIndex(l => l.id === lesson.id);
  return order[i + 1] || null;
}
