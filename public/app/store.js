/* ===================== THE STORE: EVERYTHING KEPT FOR THE LEARNER ===================== */
// One owner for what is kept: the learner's record, held in memory as the account's database last gave it (app/sync.js), so every read
// is synchronous. A write changes memory at once and goes to the database through the backend, which keeps it on the phone while offline
// and sends it when the phone is back online. The database is the record; memory is its copy for this page, never a second record.
//   tries      { [id]: { subject, key, at, t } }      one answer each; `at` orders them; t is the Try (records.js)
//   subjects   { [subjectId]: { seen: { [lessonId]: entry }, notes: { [field]: value } } }
//   log        { [id]: { at, e } }                     one event each
//   prefs      { app, recent }                         the screen last shown, and when each subject was last opened
// Every change replaces the part it touches with a new object; nothing held is edited in place.

let RECORD = { tries: {}, subjects: {}, log: {}, prefs: {} };
let STORE_BACKEND = null;   // { write(ops) }, set by app/sync.js once the account is open; absent in the headless checks
let LAST_AT = 0;

// The order of answers and events on this device: the clock, never going backwards, so two made in the same millisecond keep their order.
function nextAt(){
  LAST_AT = Math.max(Date.now(), LAST_AT + 1);
  return LAST_AT;
}
// An id for a new answer or event, made on the phone so it can be written while offline.
const newRecordId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 10);

function storeWrite(ops){
  if(!STORE_BACKEND) return;
  try{ STORE_BACKEND.write(ops); }
  catch(e){ console.error('Could not save to the account', ops, e); }
}

/* ---------- answers ---------- */
function storeTryAdd(subject, key, t){
  const id = newRecordId(), doc = { subject, key, at: nextAt(), t };
  RECORD = { ...RECORD, tries: { ...RECORD.tries, [id]: doc } };
  storeWrite([{ op: 'set', col: 'tries', id, data: doc }]);
  return id;
}
function storeTryReplace(id, t){
  const doc = RECORD.tries[id];
  if(!doc) return;
  const made = { ...doc, t };
  RECORD = { ...RECORD, tries: { ...RECORD.tries, [id]: made } };
  storeWrite([{ op: 'set', col: 'tries', id, data: made }]);
}
function storeTriesDrop(ids){
  if(!ids.length) return;
  const drop = new Set(ids);
  RECORD = { ...RECORD, tries: Object.fromEntries(Object.entries(RECORD.tries).filter(([id]) => !drop.has(id))) };
  storeWrite(ids.map(id => ({ op: 'delete', col: 'tries', id })));
}

/* ---------- a subject's place and notes ---------- */
const subjectRecord = subjectId => RECORD.subjects[subjectId] || { seen: {}, notes: {} };
function withSubject(subjectId, change){
  const now = subjectRecord(subjectId);
  RECORD = { ...RECORD, subjects: { ...RECORD.subjects, [subjectId]: { ...now, ...change(now) } } };
}
function storeSeenPut(subjectId, lessonId, entry){
  withSubject(subjectId, now => ({ seen: { ...now.seen, [lessonId]: entry } }));
  storeWrite([{ op: 'field', col: 'subjects', id: subjectId, path: ['seen', lessonId], value: entry }]);
}
function storeNotePut(subjectId, field, value){
  withSubject(subjectId, now => ({ notes: { ...now.notes, [field]: value } }));
  storeWrite([{ op: 'field', col: 'subjects', id: subjectId, path: ['notes', field], value }]);
}
function storeNotesClear(subjectId){
  withSubject(subjectId, () => ({ notes: {} }));
  storeWrite([{ op: 'clear', col: 'subjects', id: subjectId, path: ['notes'] }]);
}

/* ---------- the log ---------- */
// keep: the most events held; the oldest beyond it are dropped, here and in the database
function storeLogAdd(e, keep){
  const id = newRecordId(), doc = { at: nextAt(), e };
  const all = { ...RECORD.log, [id]: doc };
  const dropped = Object.entries(all).sort(([, a], [, b]) => a.at - b.at).slice(0, Math.max(0, Object.keys(all).length - keep)).map(([k]) => k);
  RECORD = { ...RECORD, log: Object.fromEntries(Object.entries(all).filter(([k]) => !dropped.includes(k))) };
  storeWrite([{ op: 'set', col: 'log', id, data: doc }, ...dropped.map(k => ({ op: 'delete', col: 'log', id: k }))]);
}

/* ---------- the screen last shown ---------- */
const storePref = (name, fallback) => RECORD.prefs[name] === undefined || RECORD.prefs[name] === null ? fallback : RECORD.prefs[name];
function storePrefPut(name, value){
  RECORD = { ...RECORD, prefs: { ...RECORD.prefs, [name]: value } };
  storeWrite([{ op: 'field', col: 'prefs', id: 'app', path: [name], value }]);
}

/* ---------- what the database says ---------- */
// Changes the database reports, all at once (this device's own writes come back too, and change nothing). doc null: it is gone.
//   { col: 'tries' | 'log', id, doc }   { col: 'subjects', id, doc: { seen, notes } }   { col: 'prefs', doc }
// The parts changed are built afresh and replace the old ones.
function storeApply(changes){
  const parts = { tries: { ...RECORD.tries }, log: { ...RECORD.log }, subjects: { ...RECORD.subjects } };
  let prefs = RECORD.prefs;
  changes.forEach(({ col, id, doc }) => {
    if(col === 'prefs'){ prefs = doc || {}; return; }
    if(!(col in parts)) throw new Error('Unknown part of the record: ' + col);
    if(!doc){ delete parts[col][id]; return; }
    parts[col][id] = col === 'subjects' ? { seen: doc.seen || {}, notes: doc.notes || {} } : doc;
    if(doc.at) LAST_AT = Math.max(LAST_AT, doc.at);
  });
  const touched = new Set(changes.map(c => c.col));
  RECORD = { tries: touched.has('tries') ? parts.tries : RECORD.tries, log: touched.has('log') ? parts.log : RECORD.log,
    subjects: touched.has('subjects') ? parts.subjects : RECORD.subjects, prefs };
}
