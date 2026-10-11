/* ===================== LESSONS: WHAT IS STORED, AND WHAT IS WORKED OUT FROM IT ===================== */
// One practice record per subject (lesson standard 26.3). Every figure the app shows (done marks, check results, accuracy by
// facet, slips, due dates) is computed from it; nothing is stored twice. Records are replaced, never edited in place.
//   pl:<subject>:items   { [itemId or generatorId]: { tries: [Try] } }     the last twelve tries per item
//   pl:<subject>:seen    { [lessonId]: { rev, at } }                       the revision last opened and the place (a step index)
//   pl:<subject>:notes   the learner's private data for the subject (26.3); nothing writes it before the steps that need it
//   pl:log               [{ d, type, subject?, lesson?, rev? }]            at most 500, oldest dropped first
// Try = { d, run, lesson, rev, engine, context, sup, seed?, a, r, ok, ms? }

const MAX_TRIES = 12;
const MAX_LOG = 500;

const dayOf = date => `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
const today = () => dayOf(new Date());
function addDays(day, n){
  const [y, m, d] = day.split('-').map(Number);
  return dayOf(new Date(y, m - 1, d + n));
}
// Weeks run Monday to Sunday in local time. `day` is 'YYYY-MM-DD'; the answer is that week's Sunday (lesson standard 24).
function weekEnd(day = today()){
  const [y, m, d] = day.split('-').map(Number), sinceMonday = (new Date(y, m - 1, d).getDay() + 6) % 7;
  return addDays(day, 6 - sinceMonday);
}
// 'Thursday, October 15'
const dayWords = day => { const [y, m, d] = day.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }); };
const shortDay = day => { const [y, m, d] = day.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); };
// one sitting: the same id on every try made in it, so a check's result is worked out from its run
let RUN_COUNTER = 0;
const newRunId = () => Date.now().toString(36) + (RUN_COUNTER++).toString(36);

function storageRead(key){
  try{
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  }catch(e){
    console.error('Could not read ' + key, e);
    return null;
  }
}

/* ---------- the practice record ---------- */
const itemsCache = {};
function itemsOf(subjectId){
  if(!itemsCache[subjectId]) itemsCache[subjectId] = storageRead(`pl:${subjectId}:items`) || {};
  return itemsCache[subjectId];
}
// Tries of the old lessons stay in storage untouched and are never read: they have no run (26.3).
const isNewTry = t => typeof t.run === 'string';
const rawTries = (subjectId, key) => (itemsOf(subjectId)[key] || { tries: [] }).tries;
const triesOf = (subjectId, key) => rawTries(subjectId, key).filter(isNewTry);
const seenBefore = (subjectId, key) => triesOf(subjectId, key).length > 0;

// attempt: { run, lesson, rev, context, sup, seed?, a, r, ok } -> the Try as stored
function recordTry(subjectId, key, attempt){
  const entry = { d: today(), run: attempt.run, lesson: attempt.lesson, rev: attempt.rev, engine: FC.ENGINE, context: attempt.context,
    sup: !!attempt.sup, ...(attempt.seed !== undefined ? { seed: attempt.seed } : {}), a: attempt.a, r: attempt.r, ok: !!attempt.ok };
  const tries = [...rawTries(subjectId, key), entry].slice(-MAX_TRIES);
  itemsCache[subjectId] = { ...itemsOf(subjectId), [key]: { tries } };
  storageSave(`pl:${subjectId}:items`, itemsCache[subjectId]);
  return entry;
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
const seenCache = {};
function seenOf(subjectId){
  if(!seenCache[subjectId]) seenCache[subjectId] = storageRead(`pl:${subjectId}:seen`) || {};
  return seenCache[subjectId];
}
function saveSeenLesson(subjectId, lessonId, entry){
  seenCache[subjectId] = { ...seenOf(subjectId), [lessonId]: entry };
  storageSave(`pl:${subjectId}:seen`, seenCache[subjectId]);
}
const notesOf = subjectId => storageRead(`pl:${subjectId}:notes`) || {};

/* ---------- the log (sessions; the export, E19) ---------- */
const logOf = () => storageRead('pl:log') || [];
function logEvent(type, detail){
  storageSave('pl:log', [...logOf(), { d: today(), type, ...(detail || {}) }].slice(-MAX_LOG));
}

/* ---------- checks: runs, results, done marks ---------- */
// What one stored try stands for in a pass rule.
function outcomeOf(data, key, t){
  const def = definitionOf(data, key);
  return { facets: def ? def.facets : {}, r: t.r, ok: t.ok, key, d: t.d, seed: t.seed };
}
// The runs of a lesson's check (context 'check', or 'retest'), oldest first: [{ run, d, outcomes, complete }]. A run is complete
// when every question of the check was answered in it.
function checkRuns(data, subjectId, lesson, context = 'check'){
  const byRun = new Map();
  allTries(subjectId).filter(({ t }) => t.context === context && t.lesson === lesson.id).forEach(({ key, t }) => {
    byRun.set(t.run, [...(byRun.get(t.run) || []), outcomeOf(data, key, t)]);
  });
  const size = checkSize(lesson.check);
  return [...byRun.entries()].sort(([a], [b]) => a < b ? -1 : 1)
    .map(([run, outcomes]) => ({ run, d: outcomes[0].d, outcomes, complete: outcomes.length >= size }));
}
const completeRuns = (data, subjectId, lesson, context = 'check') => checkRuns(data, subjectId, lesson, context).filter(r => r.complete);
const lessonDone = (data, subjectId, lesson) => completeRuns(data, subjectId, lesson).length > 0;
function lastCheck(data, subjectId, lesson){
  const runs = completeRuns(data, subjectId, lesson), run = runs[runs.length - 1];
  return run ? { ...run, ...checkResult(data, lesson.check.pass, run.outcomes) } : null;
}
