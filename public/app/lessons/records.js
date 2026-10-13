/* ===================== LESSONS: WHAT IS STORED, AND WHAT IS WORKED OUT FROM IT ===================== */
// One practice record per subject (lesson standard 5), kept in the learner's account through the store (app/store.js). Every figure the
// app shows (done marks, check results, accuracy by facet, slips, due dates) is computed from it; nothing is stored twice. Records are
// replaced, never edited in place.
//   items   { [itemId or generatorId]: { tries: [Try] } }     the last twelve tries per item and context, one stored answer each
//   seen    { [lessonId]: { rev, at } }                       the revision last opened and the place (a step index)
//   notes   the learner's private data for the subject (5): Singing's range, Wealth's sheet, the plan, Civics' answers and interview date
//   log     [{ d, type, subject?, lesson?, rev? }]            at most 500, oldest dropped first
// Try = { d, run, lesson, rev, engine, context, sup, seed?, a, r, ok, ms? }

const MAX_TRIES = 12;   // the last twelve tries of an item in each context, so a check's tries are never pushed out by practice
const MAX_LOG = 500;

const dayOf = date => `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
const today = () => dayOf(new Date());
function addDays(day, n){
  const [y, m, d] = day.split('-').map(Number);
  return dayOf(new Date(y, m - 1, d + n));
}
// Weeks run Monday to Sunday in local time. `day` is 'YYYY-MM-DD'; the answer is that week's Sunday (lesson standard 6).
function weekEnd(day = today()){
  const [y, m, d] = day.split('-').map(Number), sinceMonday = (new Date(y, m - 1, d).getDay() + 6) % 7;
  return addDays(day, 6 - sinceMonday);
}
// 'Thursday, October 15'
const dayWords = day => { const [y, m, d] = day.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }); };
const longDay = day => { const [y, m, d] = day.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); };
const shortDay = day => { const [y, m, d] = day.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); };
// one sitting: the same id on every try made in it, so a check's result is worked out from its run
let RUN_COUNTER = 0;
const newRunId = () => Date.now().toString(36) + (RUN_COUNTER++).toString(36);

/* ---------- the practice record ---------- */
// The store's answers grouped by subject and item, oldest first, worked out again only when they change; `ids` gives the id a try is kept under.
let GROUPED = { from: null, items: {}, ids: new Map() };
function grouped(){
  if(GROUPED.from === RECORD.tries) return GROUPED;
  const items = {}, ids = new Map();
  Object.entries(RECORD.tries).sort(([, a], [, b]) => a.at - b.at).forEach(([id, { subject, key, t }]) => {
    const bySubject = items[subject] || (items[subject] = {});
    (bySubject[key] || (bySubject[key] = { tries: [] })).tries.push(t);
    ids.set(t, id);
  });
  GROUPED = { from: RECORD.tries, items, ids };
  return GROUPED;
}
const itemsOf = subjectId => grouped().items[subjectId] || {};
// Tries of the old lessons, which have no run, are never read (5).
const isNewTry = t => typeof t.run === 'string';
const rawTries = (subjectId, key) => (itemsOf(subjectId)[key] || { tries: [] }).tries;
const triesOf = (subjectId, key) => rawTries(subjectId, key).filter(isNewTry);
const seenBefore = (subjectId, key) => triesOf(subjectId, key).length > 0;

// The last twelve tries of each context, in the order they were made. Every sung question of a task shares one item, so without this a
// lesson's practice would push its check out of the record, and the lesson would stop being done.
function lastPerContext(tries){
  const kept = new Set(Object.values(tries.reduce((byContext, t, i) => ({ ...byContext, [t.context]: [...(byContext[t.context] || []), i] }), {}))
    .flatMap(indexes => indexes.slice(-MAX_TRIES)));
  return tries.filter((_, i) => kept.has(i));
}
// attempt: { run, lesson, rev, context, sup, seed?, a, r, ok, ms? } -> the Try as stored (`ms` is the time taken in a timed question)
function recordTry(subjectId, key, attempt){
  const entry = { d: today(), run: attempt.run, lesson: attempt.lesson, rev: attempt.rev, engine: FC.ENGINE, context: attempt.context,
    sup: !!attempt.sup, ...(attempt.seed !== undefined ? { seed: attempt.seed } : {}), a: attempt.a, r: attempt.r, ok: !!attempt.ok, ...(attempt.ms !== undefined ? { ms: attempt.ms } : {}) };
  storeTryAdd(subjectId, key, entry);
  const tries = rawTries(subjectId, key), kept = new Set(lastPerContext(tries)), { ids } = grouped();
  storeTriesDrop(tries.filter(t => !kept.has(t)).map(t => ids.get(t)));
  return entry;
}
// A claim (5): the try of a question just answered, with one miss counted on the learner's word ("my answer means the same"). The record replaces
// the try, never edits it, and the claim is logged. The question still comes back: a claimed try is not a good day (schedule.js).
const triesClaimed = t => Object.values(t.r).includes('claimed');
function claimTry(subjectId, key, run, seed, askId){
  const tries = rawTries(subjectId, key), at = tries.map(t => t.run === run && t.seed === seed && t.r[askId] === 'no').lastIndexOf(true);
  if(at < 0) return null;
  const claim = claimedResults(tries[at].r, askId), made = { ...tries[at], r: claim.r, ok: claim.ok };
  storeTryReplace(grouped().ids.get(tries[at]), made);
  logEvent('claim', { subject: subjectId, item: key });
  return made;
}
// every try of a subject with the id it is stored under: [{ key, t }]
const allTries = subjectId => Object.entries(itemsOf(subjectId)).flatMap(([key, entry]) => entry.tries.filter(isNewTry).map(t => ({ key, t })));
// The first try of each item (and, for a generator, each instance) in each sitting: what the figures call "right the first time".
function firstTries(subjectId){
  const seen = new Set();
  return allTries(subjectId).filter(({ key, t }) => {
    const id = `${key}|${t.run}|${t.seed === undefined ? '' : t.seed}`;
    return seen.has(id) ? false : (seen.add(id), true);
  });
}
const firstTriesOutside = (subjectId, contexts) => firstTries(subjectId).filter(({ t }) => !contexts.includes(t.context));
const pct = (ok, n) => n ? Math.round(100 * ok / n) + '%' : '—';
// "3 of 5 · 60%", or a dash where nothing has been asked
const outOf = list => list.length ? `${list.filter(x => (x.t || x).ok).length} of ${list.length} · ${pct(list.filter(x => (x.t || x).ok).length, list.length)}` : '—';

/* ---------- place ---------- */
const seenOf = subjectId => subjectRecord(subjectId).seen;
const saveSeenLesson = (subjectId, lessonId, entry) => storeSeenPut(subjectId, lessonId, entry);
const notesOf = subjectId => subjectRecord(subjectId).notes;
// The learner's private data is replaced one field at a time, never edited in place: the field is given its new value whole.
const saveNote = (subjectId, field, value) => storeNotePut(subjectId, field, value);
// every note of a subject deleted, as the learner asked
const deleteNotes = subjectId => storeNotesClear(subjectId);
// Singing's range (5): { low, high, set }, the lowest and highest notes the learner sang steadily, or null until it is measured
const rangeOf = subjectId => notesOf(subjectId).range || null;

/* ---------- the log (sessions; the export, E19) ---------- */
const logOf = () => Object.values(RECORD.log).sort((a, b) => a.at - b.at).map(entry => entry.e);
const logEvent = (type, detail) => storeLogAdd({ d: today(), type, ...(detail || {}) }, MAX_LOG);

/* ---------- checks: runs, results, done marks ---------- */
// What one stored try stands for in a pass rule.
function outcomeOf(data, key, t){
  const def = defOfTry(data, key, t);
  return { facets: def ? def.facets : {}, r: t.r, ok: t.ok, key, d: t.d, seed: t.seed };
}
// The runs of a lesson's check (context 'check', or 'retest'; a baseline lesson's check is run as 'baseline'), oldest first: [{ run, d, outcomes, complete }].
// A run is complete when every question of the check was answered in it.
const checkContext = lesson => lesson.role === 'baseline' ? 'baseline' : 'check';
function checkRuns(data, subjectId, lesson, context = checkContext(lesson)){
  const byRun = new Map();
  allTries(subjectId).filter(({ t }) => t.context === context && t.lesson === lesson.id).forEach(({ key, t }) => {
    byRun.set(t.run, [...(byRun.get(t.run) || []), outcomeOf(data, key, t)]);
  });
  const size = checkSize(lesson.check);
  return [...byRun.entries()].sort(([a], [b]) => a < b ? -1 : 1)
    .map(([run, outcomes]) => ({ run, d: outcomes[0].d, outcomes, complete: outcomes.length >= size }));
}
const completeRuns = (data, subjectId, lesson, context = checkContext(lesson)) => checkRuns(data, subjectId, lesson, context).filter(r => r.complete);
const lessonDone = (data, subjectId, lesson) => completeRuns(data, subjectId, lesson).length > 0;
function lastCheck(data, subjectId, lesson){
  const runs = completeRuns(data, subjectId, lesson), run = runs[runs.length - 1];
  return run ? { ...run, ...checkResult(data, lesson.check.pass, run.outcomes) } : null;
}
