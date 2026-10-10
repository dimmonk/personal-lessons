/* ===================== SCREENS: THE WEEKLY REVIEW ===================== */
// Lesson standard section 24 (E9, E10, E18). One review a week across every subject, in place of a "Due today" set per subject and
// a Mixed drill. What it holds is computed from the practice record (reviewItems in records.js: every name and fact that falls due
// by the end of the week, asked as E9 pairs it); each subject's part is run by the same runner as a unit's drill (reviewRun and
// paintDrillScreen, drill.js). Nothing is stored here except a saved plan's "shown" day, kept by records.js.

const REVIEW_TEXT = {
  title: 'This week’s review',
  tab: 'Review',
  start: 'Start the review',
  notYet: 'The review starts when you finish a unit. Each name you learn then comes back here on a later day, on a story you have not seen.',
  done: 'Done for this week',
  nothingMore: 'Nothing else is scheduled yet.',
  due: (n, names) => `${cap(numWord(n))} question${n === 1 ? ' is' : 's are'} due this week, from ${joinWords(names)}.`,
  next: day => `The next question falls due on ${day}.`,
  how: 'It runs one subject at a time. After each answer you see the reason, and anything you miss comes back a few questions later in the same review.',
  planHeading: 'Your plan',
  planNote: saved => `You saved this on ${saved}. It is shown back once, with a review.`,
  planChange: 'Change it',
  intro: (subject, facts) => `${subject}. ${facts
    ? 'These are facts that are due to come back, each next to the fact it is most often swapped with. Each is asked from memory. '
    : 'These are names that are due to come back, each on a story you have not seen, next to a story of the name it is most often taken for. Answer every question in order, then give the name. '}${SAY.stakes}`,
  resultsTitle: 'The review is done',
  resultsNote: 'These are your first tries. Anything missed was asked again before the end.',
  overall: 'All subjects',
  missed: 'Names to look at again',
  noMisses: 'You got every name right on the first try.',
  stillDue: 'Some questions were skipped. They are still due.',
  backName: 'the library'
};

let REVIEW = null;   // this visit's review: { at, parts: [{ subj, run, reminders }] }; built again from the record each time

// 'Thursday, October 15'
const dayWords = day => { const [y, m, d] = day.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }); };

/* ---------- what is due this week, and the tile ---------- */
function reviewPlan(){
  const parts = SUBJECTS.map(subj => ({ subj, items: reviewItems(subj.id) })).filter(p => p.items.length);
  const total = parts.reduce((n, p) => n + p.items.length, 0);
  return { parts, total, started: SUBJECTS.some(s => unitsDone(s) > 0), next: total ? null : nextReturnDate(weekEnd()) };
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
    ${plan.total ? `<table class="k results">${plan.parts.map(p => `<tr><td>${esc(p.subj.name)}</td><td>${p.items.length} question${p.items.length === 1 ? '' : 's'}</td></tr>`).join('')}</table>` : ''}
  </div>`;
  on('[data-review-start]', startReview);
}

/* ---------- the plan reminder (E18) ---------- */
// Saved plans not yet shown back come from records.js (plansToShowBack); each is shown once, at the start of its subject's part, and
// kept, changed or dropped through records.js, which is what stops it being shown again.
function paintReminder(part){
  const subj = part.subj, { unitId, text, editing } = part.reminders[0], plan = (notesOf(subj.id)[unitId] || {}).plan, T = REVIEW_TEXT;
  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="library">${icon('back', 18)}Library</button></div>
    <div class="eyebrow-row"><span class="m a">${esc(subj.name)}</span><h1>${T.planHeading}</h1></div>
    ${editing ? `<div class="lesson"><p>${esc(SAY.planIfSee)}&hellip;</p><input class="noteinput" id="planCue" value="${esc(plan.cue)}" aria-label="${esc(SAY.planIfSee)}">
        <p style="margin-top:14px">${esc(SAY.planThenIWill)}&hellip;</p><input class="noteinput" id="planThen" value="${esc(plan.then)}" aria-label="${esc(SAY.planThenIWill)}"></div>`
      : `<div class="lesson"><p>${esc(text)}</p></div><p class="hintline">${esc(T.planNote(plan.saved))}</p>`}
    <div class="actbar">${editing
      ? `<button class="btn" id="planSave">Save and go on${icon('arrow')}</button>`
      : `<button class="btn" id="planKeep">Keep it${icon('arrow')}</button>
         <button class="btn ghost" id="planChange">${T.planChange}</button>
         <button class="btn ghost" id="planDrop">Drop it</button>`}</div></div>`;
  on('[data-v]', el => go(el.dataset.v));
  const withReminders = reminders => { REVIEW = { ...REVIEW, parts: REVIEW.parts.map(p => p === part ? { ...p, reminders } : p) }; };
  const settle = () => { withReminders(part.reminders.slice(1)); render(); window.scrollTo(0, 0); };
  on('#planKeep', () => { keepPlan(subj.id, unitId); settle(); });
  on('#planDrop', () => { dropPlan(subj.id, unitId); settle(); });
  on('#planChange', () => { withReminders([{ unitId, text, editing: true }, ...part.reminders.slice(1)]); paintReminder(REVIEW.parts.find(p => p.subj === subj)); });
  on('#planSave', () => {
    const cue = document.getElementById('planCue').value.trim(), then = document.getElementById('planThen').value.trim();
    if(!cue || !then) return focusOn(cue ? '#planThen' : '#planCue');
    changePlan(subj.id, unitId, cue, then);
    settle();
  });
}

/* ---------- running it ---------- */
const leaveReview = () => { REVIEW = null; go('library'); };
function startReview(){
  const plan = reviewPlan();
  if(!plan.parts.length) return go('review');
  // a short bank shows up in the log: a story asked again because every unseen one is used (E9)
  plan.parts.forEach(p => p.items.filter(i => i.repeat).forEach(i => logEvent('repeat', { subject: p.subj.id, unit: i.unitId, card: i.caseId })));
  REVIEW = {
    at: 0,
    parts: plan.parts.map(p => ({
      subj: p.subj,
      run: { ...reviewRun(p.subj, p.items, REVIEW_TEXT.intro(p.subj.name, p.items.every(i => i.fact))), leave: leaveReview, leaveView: 'library', backName: REVIEW_TEXT.backName },
      reminders: plansToShowBack(p.subj.id).map(r => ({ ...r, editing: false }))
    }))
  };
  go('reviewrun');
}
function renderReviewRun(){
  if(!REVIEW) return go('review');
  const part = REVIEW.parts[REVIEW.at];
  if(!part) return paintReviewResults();
  if(part.reminders.length) return paintReminder(part);
  paintDrillScreen(part.subj, part.run, esc(`${REVIEW_TEXT.tab} · ${part.subj.name}`), () => {
    logEvent('return', { subject: part.subj.id });
    REVIEW = { ...REVIEW, at: REVIEW.at + 1 };
    render(); window.scrollTo(0, 0);
  });
}

/* ---------- the results (E10) ---------- */
const firstTriesOf = part => part.run.tries.filter(t => t.first);
const outOfFigure = tries => { const a = firstTryAccuracy(tries); return a.n ? `${a.ok} of ${a.n} · ${pct(a.ok, a.n)}` : '—'; };
// the names missed on a first try, once each, as the learner reads them
function missedNames(part){
  const seen = new Set();
  return firstTriesOf(part).filter(t => !t.ok && t.target).filter(t => { const k = `${t.unitId}/${t.target}`; return !seen.has(k) && seen.add(k); })
    .map(t => unitView(part.subj.id, t.unitId).nameOf(t.target));
}
function paintReviewResults(){
  const T = REVIEW_TEXT, parts = REVIEW.parts, all = parts.flatMap(firstTriesOf);
  const rows = [...parts.map(p => [p.subj.name, outOfFigure(firstTriesOf(p))]), ...(parts.length > 1 ? [[T.overall, outOfFigure(all)]] : [])];
  const missed = parts.map(p => ({ subj: p.subj, names: missedNames(p) })).filter(m => m.names.length);
  const next = nextReturnDate(today());
  const skipped = SUBJECTS.some(s => dueReturns(s.id).length);
  screenEl().innerHTML = `<div class="pane">
    <div class="topbar"><button class="back" data-v="library">${icon('back', 18)}Library</button></div>
    <div class="done-screen results">
      <h2>${T.resultsTitle}</h2>
      <p>${esc(T.resultsNote)} ${esc(SAY.stakes)}</p>
      <table class="k results">${rows.map(([label, value]) => `<tr><td>${esc(label)}</td><td>${esc(value)}</td></tr>`).join('')}</table>
      <div class="vblock"><span class="m">${T.missed}</span>${missed.length
        ? missed.map(m => `<p><b>${esc(m.subj.name)}</b>: ${esc(m.names.join('; '))}</p>`).join('') : `<p>${T.noMisses}</p>`}</div>
      <div class="vblock soft"><span class="m">What comes back, and when</span>
        <p>${esc(skipped ? T.stillDue : next ? T.next(dayWords(next)) : T.nothingMore)}</p></div>
    </div>
    <div class="actbar"><button class="btn" data-v="library">Back to the library</button></div></div>`;
  on('[data-v]', el => go(el.dataset.v));
  window.scrollTo(0, 0);
  focusScreenHead();
}
