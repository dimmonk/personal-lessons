/* ===================== SCREENS: THE WEEKLY REVIEW ===================== */
// Lesson standard section 24 and 26.4. One review a week across every subject. What it holds is worked out from the practice record
// (schedule.js): every strand that falls due by the end of the week, each asked on a question the learner has not seen (fresh
// numbers where the strand has a generator), plus any check whose retest is due. A subject at a time; only questions; the answer
// and the reason after each; every miss asked again at least three questions later until it is right. Nothing is stored here
// except the tries themselves.

const REVIEW_TEXT = {
  title: 'This week’s review',
  tab: 'Review',
  start: 'Start the review',
  notYet: 'The review starts when you finish a lesson. What you learn then comes back here on a later day, on a question you have not seen.',
  done: 'Done for this week',
  nothingMore: 'Nothing else is scheduled yet.',
  due: (n, names) => `${cap(numWord(n))} question${n === 1 ? ' is' : 's are'} due this week, from ${joinWords(names)}.`,
  next: day => `The next question falls due on ${day}.`,
  how: 'It runs one subject at a time. After each answer you see the reason, and anything you miss comes back a few questions later in the same review.',
  intro: (name, n) => `${name}. ${cap(numWord(n))} question${n === 1 ? '' : 's'}, each on something you have not seen before. ${SAY.stakes}`,
  retestIntro: title => `A second check of “${title}”, on new questions. No help, and no answer until the end.`,
  retestResult: title => `Second check: ${title}`,
  resultsTitle: 'The review is done',
  resultsNote: 'These are your first tries. Anything missed was asked again before the end.',
  overall: 'All subjects',
  missed: 'To look at again',
  noMisses: 'You got every question right the first time.',
  stillDue: 'Some questions were skipped. They are still due.',
  comesBack: 'What comes back, and when',
  begin: 'Begin'
};

let REVIEW = null;   // this visit's review, built again from the record each time: { at, block, phase, parts, results }

/* ---------- what is due this week, and the tile ---------- */
function reviewPlan(){
  const through = weekEnd();
  const parts = SUBJECTS.map(subj => {
    const data = FC.get(subj.id), due = dueStrands(data, subj.id, through), retests = retestsDue(data, subj.id, through);
    return { subj, data, due, retests, count: due.length + retests.reduce((n, r) => n + checkSize(r.lesson.check), 0) };
  }).filter(p => p.count);
  const total = parts.reduce((n, p) => n + p.count, 0);
  const next = total ? null : SUBJECTS.map(s => nextDueDay(FC.get(s.id), s.id, through)).filter(Boolean).sort()[0] || null;
  return { parts, total, started: SUBJECTS.some(s => lessonsDone(s) > 0), next };
}
function reviewTileHtml(plan){
  const T = REVIEW_TEXT;
  const [head, line] = !plan.started ? [T.title, T.notYet]
    : plan.total ? [T.title, T.due(plan.total, plan.parts.map(p => p.subj.name))]
    : [T.done, plan.next ? T.next(dayWords(plan.next)) : T.nothingMore];
  return `<div class="block"><div class="card" data-review-tile>
    <div class="ch"><span class="m a">${esc(head)}</span>${plan.total ? `<span class="m">${plan.total} due</span>` : ''}</div>
    <span class="cs">${esc(line)}</span>
    ${plan.total ? `<button class="btn sm" data-review-start>${T.start}${icon('arrow')}</button>` : ''}
  </div></div>`;
}
const reviewTileForLibrary = () => reviewTileHtml(reviewPlan());

function renderReview(){
  const plan = reviewPlan(), T = REVIEW_TEXT;
  screenEl().innerHTML = `<div class="pane">
    <div class="topbar"><span class="m">${T.tab}</span></div>
    <div class="mast"><h1>${T.title}</h1><p>${esc(T.how)}</p></div>
    ${reviewTileHtml(plan)}
    ${plan.total ? `<table class="k results">${plan.parts.map(p => `<tr><td>${esc(p.subj.name)}</td><td>${p.count} question${p.count === 1 ? '' : 's'}</td></tr>`).join('')}</table>` : ''}
  </div>`;
  on('[data-review-start]', startReview);
}

/* ---------- building it ---------- */
// the lesson whose check holds a strand, and its revision: what a review try is filed under
function ownerOfItem(data, inst){
  const covering = lessonsCovering(data, inst.item.strand), lesson = covering[0] || lessonsInOrder(data)[0];
  return { lesson: lesson.id, rev: lesson.rev };
}
// The questions of one subject's part: a new question of each due strand, mixed (R9) in an order the same run always gives.
function reviewQuestions(part, run){
  const taken = [], picked = part.due.flatMap(({ strand }, k) => {
    const pick = strandInstance(part.data, part.subj.id, strand.id, run, k, taken);
    if(!pick) return [];
    if(pick.inst.seed === undefined) taken.push(pick.inst.key);
    return [{ ...pick.inst, repeat: pick.repeat }];
  });
  return shuffled(picked, hashSeed(`${run}|${part.subj.id}`));
}
function startReview(){
  const plan = reviewPlan();
  if(!plan.parts.length) return go('review');
  const run = newRunId();
  REVIEW = { at: 0, block: 0, phase: 'intro', results: [], parts: plan.parts.map(p => {
    const questions = reviewQuestions(p, run);
    // a short bank shows up in the log: a question asked again because every unseen one is used (E9)
    questions.filter(q => q.repeat).forEach(q => logEvent('repeat', { subject: p.subj.id, item: q.key }));
    return { ...p, run, blocks: [...(questions.length ? [{ kind: 'questions', list: questions }] : []), ...p.retests.map(r => ({ kind: 'retest', lesson: r.lesson }))] };
  }) };
  go('reviewrun');
}
const leaveReview = () => { REVIEW = null; go('library'); };

function reviewShell(inner, actions){
  const part = REVIEW.parts[REVIEW.at];
  screenEl().innerHTML = `<div class="pane read flush" style="--accent:${part.subj.accent}">
    <div class="topbar"><button class="iconbtn" id="leaveReview" aria-label="Back to the library">${icon('back', 20)}</button><span class="spacer"></span></div>
    <p class="m unitbar">${esc(REVIEW_TEXT.tab)} &middot; ${esc(part.subj.name)}</p>${inner}${actions || ''}</div>`;
  on('#leaveReview', leaveReview);
}

/* ---------- running it ---------- */
function renderReviewRun(){
  if(!REVIEW) return go('review');
  const part = REVIEW.parts[REVIEW.at];
  if(!part) return paintReviewResults();
  const block = part.blocks[REVIEW.block];
  if(!block) return endPart();
  if(REVIEW.phase === 'intro') return paintBlockIntro(part, block);
  return block.kind === 'questions' ? runQuestions(part, block) : runRetest(part, block);
}
function paintBlockIntro(part, block){
  const T = REVIEW_TEXT, retest = block.kind === 'retest';
  reviewShell(`<div class="eyebrow-row"><span class="m a">${esc(part.subj.name)}</span><h1>${esc(retest ? T.retestResult(block.lesson.title) : T.title)}</h1></div>
    <div class="lesson"><p>${esc(retest ? T.retestIntro(block.lesson.title) : T.intro(part.subj.name, block.list.length))}</p></div>`,
    `<div class="actbar"><button class="btn neutral" id="beginBlock">${T.begin}${icon('arrow')}</button></div>`);
  on('#beginBlock', () => { REVIEW = { ...REVIEW, phase: 'run' }; render(); window.scrollTo(0, 0); });
}
function runQuestions(part, block){
  startQueue({ subj: part.subj, data: part.data, list: block.list, run: part.run, context: 'review', feedback: 'after-each', support: null, redo: true,
    owner: inst => ownerOfItem(part.data, inst), shell: reviewShell, onDone: log => nextBlock({ kind: 'questions', log }) });
}
function runRetest(part, block){
  const run = newRunId(), lesson = block.lesson;
  startQueue({ subj: part.subj, data: part.data, list: retestInstances(part.data, part.subj.id, lesson, run), run, context: 'retest', feedback: lesson.check.feedback, support: null, redo: false,
    owner: () => ({ lesson: lesson.id, rev: lesson.rev }), shell: reviewShell, onDone: log => paintRetestResult(part, lesson, log) });
}
function paintRetestResult(part, lesson, log){
  const result = checkResult(part.data, lesson.check.pass, queueOutcomes(log)), T = REVIEW_TEXT;
  const rows = result.lines.map(l => `<tr><td>${esc(l.text)}</td><td>${esc(l.met ? SAY.ruleMet : SAY.ruleNotMet)}</td></tr>`).join('');
  const each = lesson.check.feedback === 'at-end' ? `<div class="vblock"><span class="m">${esc(SAY.checkEveryAnswer)}</span></div>${checkAnswersHtml(part.data, log)}` : '';
  reviewShell(`<div class="done-screen results"><h2>${esc(result.passed ? SAY.checkPassed(result.right, result.total) : SAY.checkNotYet(result.right, result.total))}</h2>
    <p>${esc(T.retestResult(lesson.title))}</p><table class="k results">${rows}</table></div>${each}`, nextAction(SAY.goOn));
  on('#fwd', () => nextBlock({ kind: 'retest', lesson, result }));
  window.scrollTo(0, 0);
  focusScreenHead();
}
function nextBlock(result){
  const upcoming = REVIEW.parts[REVIEW.at].blocks[REVIEW.block + 1];
  REVIEW = { ...REVIEW, results: [...REVIEW.results, { at: REVIEW.at, ...result }], block: REVIEW.block + 1, phase: upcoming && upcoming.kind === 'retest' ? 'intro' : 'run' };
  render(); window.scrollTo(0, 0);
}
function endPart(){
  const part = REVIEW.parts[REVIEW.at];
  logEvent('return', { subject: part.subj.id });
  REVIEW = { ...REVIEW, at: REVIEW.at + 1, block: 0, phase: 'intro' };
  render(); window.scrollTo(0, 0);
}

/* ---------- the results (E10) ---------- */
const partFirsts = at => REVIEW.results.filter(r => r.at === at && r.kind === 'questions').flatMap(r => r.log.filter(e => e.first));
const figure = list => list.length ? `${list.filter(e => e.ok).length} of ${list.length} · ${pct(list.filter(e => e.ok).length, list.length)}` : '—';
function missedStrands(at){
  const data = REVIEW.parts[at].data, titles = new Map(data.meta.strands.map(s => [s.id, s.title]));
  return [...new Set(partFirsts(at).filter(e => !e.ok).map(e => titles.get(e.inst.item.strand)))].filter(Boolean);
}
function paintReviewResults(){
  const T = REVIEW_TEXT, parts = REVIEW.parts;
  const all = parts.flatMap((_, at) => partFirsts(at));
  const rows = [...parts.map((p, at) => [p.subj.name, figure(partFirsts(at))]), ...(parts.length > 1 ? [[T.overall, figure(all)]] : [])];
  const retests = REVIEW.results.filter(r => r.kind === 'retest');
  const missed = parts.map((p, at) => ({ subj: p.subj, names: missedStrands(at) })).filter(m => m.names.length);
  const skipped = SUBJECTS.some(s => dueStrands(FC.get(s.id), s.id, today()).length);
  const next = SUBJECTS.map(s => nextDueDay(FC.get(s.id), s.id, today())).filter(Boolean).sort()[0] || null;
  screenEl().innerHTML = `<div class="pane">
    <div class="topbar"><button class="back" data-v="library">${icon('back', 18)}Library</button></div>
    <div class="done-screen results">
      <h2>${T.resultsTitle}</h2>
      <p>${esc(T.resultsNote)} ${esc(SAY.stakes)}</p>
      <table class="k results">${rows.map(([label, value]) => `<tr><td>${esc(label)}</td><td>${esc(value)}</td></tr>`).join('')}</table>
      ${retests.map(r => `<div class="vblock"><span class="m">${esc(T.retestResult(r.lesson.title))}</span><p>${esc(r.result.passed ? SAY.checkPassed(r.result.right, r.result.total) : SAY.checkNotYet(r.result.right, r.result.total))}</p></div>`).join('')}
      <div class="vblock"><span class="m">${T.missed}</span>${missed.length
        ? missed.map(m => `<p><b>${esc(m.subj.name)}</b>: ${esc(m.names.join('; '))}</p>`).join('') : `<p>${T.noMisses}</p>`}</div>
      <div class="vblock soft"><span class="m">${T.comesBack}</span>
        <p>${esc(skipped ? T.stillDue : next ? T.next(dayWords(next)) : T.nothingMore)}</p></div>
    </div>
    <div class="actbar"><button class="btn" data-v="library">Back to the library</button></div></div>`;
  on('[data-v]', el => { REVIEW = null; go(el.dataset.v); });
  window.scrollTo(0, 0);
  focusScreenHead();
}
