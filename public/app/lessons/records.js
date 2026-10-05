/* ===================== LESSONS: WHAT IS STORED ===================== */
// One record of practice per subject (lesson standard E8). Every figure the app shows is computed from it;
// nothing is stored twice. Records are replaced, never edited in place.
//   pl:<subject>:items   { "<unitId>/<itemId>": { tries: [Try] } }      the last twelve tries per item
//   pl:<subject>:seen    { [unitId]: { rev, done, at } }                 place and done marks, by unit id
//   pl:<subject>:notes   { [unitId]: { transfer?, plan? } }
//   pl:log               [{ d, type, subject?, unit?, rev?, card? }]      at most 500, oldest dropped first

const MAX_TRIES = 12;
const MAX_LOG = 500;
const RETURN_GAPS = [2, 7, 24];        // days: after the drill or a miss, after the first good day, after the second
const RETURN_SET_SIZE = 6;
const NAME_MODES = ['name', 'finish', 'route', 'spec'];

const dayOf = date => `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
const today = () => dayOf(new Date());
function addDays(day, n){
  const [y, m, d] = day.split('-').map(Number);
  return dayOf(new Date(y, m - 1, d + n));
}

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
const itemKey = (unitId, itemId) => `${unitId}/${itemId}`;
const triesOf = (subjectId, unitId, itemId) => (itemsOf(subjectId)[itemKey(unitId, itemId)] || { tries: [] }).tries;

// attempt: { mode, context, steps: {code: chosenOptionId}, name: chosenId or null, ok }
function recordTry(subjectId, unitId, itemId, rev, attempt){
  const key = itemKey(unitId, itemId);
  const entry = { d: today(), rev, engine: FC.ENGINE, mode: attempt.mode, context: attempt.context,
                  steps: attempt.steps || {}, name: attempt.name || null, ok: !!attempt.ok };
  const tries = [...triesOf(subjectId, unitId, itemId), entry].slice(-MAX_TRIES);
  itemsCache[subjectId] = { ...itemsOf(subjectId), [key]: { tries } };
  storageSave(`pl:${subjectId}:items`, itemsCache[subjectId]);
  return entry;
}
const seenBefore = (subjectId, unitId, itemId) => triesOf(subjectId, unitId, itemId).length > 0;
const rightToday = (subjectId, unitId, itemId) => triesOf(subjectId, unitId, itemId).some(t => t.d === today() && t.ok);

/* ---------- place and done marks ---------- */
const seenCache = {};
function seenOf(subjectId){
  if(!seenCache[subjectId]) seenCache[subjectId] = storageRead(`pl:${subjectId}:seen`) || {};
  return seenCache[subjectId];
}
function saveSeen(subjectId, next){
  seenCache[subjectId] = next;
  storageSave(`pl:${subjectId}:seen`, next);
}
function saveSeenUnit(subjectId, unitId, entry){
  saveSeen(subjectId, { ...seenOf(subjectId), [unitId]: entry });
}
// A rebuilt unit counts as done only when it was finished at standard 1 (a finish under the old lessons has rev 0).
const rebuiltUnitDone = (subjectId, unitId) => {
  const s = seenOf(subjectId)[unitId];
  return !!(s && s.done && s.rev >= 1);
};

/* ---------- notes and the log ---------- */
const notesOf = subjectId => storageRead(`pl:${subjectId}:notes`) || {};
function saveNote(subjectId, unitId, patch){
  const all = notesOf(subjectId);
  storageSave(`pl:${subjectId}:notes`, { ...all, [unitId]: { ...(all[unitId] || {}), ...patch } });
}
const logOf = () => storageRead('pl:log') || [];
function logEvent(type, detail){
  storageSave('pl:log', [...logOf(), { d: today(), type, ...(detail || {}) }].slice(-MAX_LOG));
}

/* ---------- one-time migration of old progress (lesson standard E8) ---------- */
// Old progress was { u, card, phase, done[] } by unit index under pl:<subject>:course. It is read once,
// re-keyed by unit id into pl:<subject>:seen, and never written again. Safe to run again: it only runs
// while no `seen` record exists. unitIds is the subject's committed map from old unit index to unit id.
function legacyPlace(course){
  if(course.phase === 'drill') return 'drill';
  if(course.phase === 'unitdone') return null;
  return 'card:' + (course.card || 0);
}
function migrateProgress(subjectId, unitIds, rebuilt){
  const seenKey = `pl:${subjectId}:seen`;
  if(storageRead(seenKey)) return;
  const old = storageRead(`pl:${subjectId}:course`);
  if(!old) return;
  const done = Array.isArray(old.done) ? old.done : [];
  const seen = {};
  unitIds.forEach((unitId, i) => {
    const wasDone = !!done[i], here = old.u === i;
    if(!wasDone && !here) return;
    // a unit finished under the old lessons and since rebuilt starts again: its key wording was never shown.
    // A rebuilt unit that was only open has no old place worth keeping.
    if(rebuilt(unitId)){
      if(wasDone) seen[unitId] = { rev: 0, done: false, at: null };
      return;
    }
    seen[unitId] = { rev: 0, done: wasDone, at: here && !wasDone ? legacyPlace(old) : null };
  });
  saveSeen(subjectId, seen);
}

/* ---------- returns: what is due, computed from the record (lesson standard E9) ---------- */
// What is scheduled is the discrimination (a name), not the case. target = the name a case teaches:
// its outcome, or in a gate unit the gate answer of its route.
function caseTarget(v, c){
  return c.outcome || (c.route && c.route[v.key.gate.code] ? c.route[v.key.gate.code][0] : null);
}
// Every try on a case of this name, with the case attached.
function triesForTarget(v, unitId, target){
  const out = [];
  v.casesOf(unitId).forEach(c => {
    if(caseTarget(v, c) !== target) return;
    triesOf(v.subjectId, unitId, c.id).forEach((t, i) => out.push({ ...t, caseId: c.id, first: i === 0 }));
  });
  return out;
}
// { level, due: 'YYYY-MM-DD' or null } for one name of a finished unit.
function returnState(v, unitId, target){
  const tries = triesForTarget(v, unitId, target).filter(t => NAME_MODES.includes(t.mode));
  const unitDays = tries.filter(t => t.context === 'unit').map(t => t.d).sort();
  if(!unitDays.length) return { level: 0, due: null };
  const lastMiss = tries.filter(t => !t.ok).map(t => t.d).sort().pop();
  const anchor = [unitDays[unitDays.length - 1], lastMiss].filter(Boolean).sort().pop();
  const goodDays = [...new Set(tries.filter(t => t.first && t.ok && t.d > anchor).map(t => t.d))].sort();
  const level = goodDays.length;
  if(level >= RETURN_GAPS.length) return { level, due: null };
  const from = level === 0 ? anchor : goodDays[level - 1];
  return { level, due: addDays(from, RETURN_GAPS[level]) };
}
// The names due today across a subject's finished rebuilt units: [{ unitId, target, due }]
function dueReturns(subjectId){
  if(!FC.get(subjectId).key) return [];
  const sv = subjectView(subjectId), now = today(), out = [];
  sv.unitIds().filter(unitId => rebuiltUnitDone(subjectId, unitId)).forEach(unitId => {
    const v = unitView(subjectId, unitId);
    v.taught.forEach(target => {
      const state = returnState(v, unitId, target);
      if(state.due && state.due <= now) out.push({ unitId, target, due: state.due });
    });
  });
  return out.sort((a, b) => a.due < b.due ? -1 : a.due > b.due ? 1 : 0);
}
// The neighbour the learner has most often taken this name for, else its first look-alike.
function usualConfusion(v, unitId, target){
  const counts = {};
  triesForTarget(v, unitId, target).forEach(t => { if(t.name && t.name !== target) counts[t.name] = (counts[t.name] || 0) + 1; });
  const ranked = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  if(ranked.length) return ranked[0];
  const entry = v.unit.ledger.find(l => l.pair.includes(target));
  return entry ? entry.pair.find(id => id !== target) : null;
}
// A case of this name for a return: an unseen return case if there is one, else the least recently seen
// case of the name, and the repeat is logged so a short bank shows up in the log.
function pickReturnCase(v, unitId, target, exclude){
  const lastSeen = c => { const t = triesOf(v.subjectId, unitId, c.id); return t.length ? t[t.length - 1].d : ''; };
  const ofTarget = v.casesOf(unitId).filter(c => caseTarget(v, c) === target && !c.kind && c.use !== 'claim' && !exclude.includes(c.id));
  const fresh = v.unit.drill.returns.map(v.caseById).filter(c => ofTarget.some(x => x.id === c.id) && !seenBefore(v.subjectId, unitId, c.id));
  if(fresh.length) return { c: fresh[0], repeat: false };
  const routed = ofTarget.filter(c => c.use === 'drill' || c.use === 'return').sort((a, b) => lastSeen(a) < lastSeen(b) ? -1 : 1);
  return routed.length ? { c: routed[0], repeat: true } : null;
}
// The returned set: each due name on a case, next to a case of the name it is most often taken for.
function buildReturnSet(subjectId){
  const items = [];
  for(const due of dueReturns(subjectId)){
    if(items.length >= RETURN_SET_SIZE) break;
    const v = unitView(subjectId, due.unitId);
    const used = items.filter(i => i.unitId === due.unitId).map(i => i.caseId);
    if(used.some(id => caseTarget(v, v.caseById(id)) === due.target)) continue;
    const own = pickReturnCase(v, due.unitId, due.target, used);
    if(!own) continue;
    const pair = [own];
    const neighbour = usualConfusion(v, due.unitId, due.target);
    const beside = neighbour && pickReturnCase(v, due.unitId, neighbour, [...used, own.c.id]);
    if(beside) pair.push(beside);
    pair.forEach(p => {
      if(p.repeat) logEvent('repeat', { subject: subjectId, unit: due.unitId, card: p.c.id });
      items.push({ unitId: due.unitId, caseId: p.c.id });
    });
  }
  return items.slice(0, RETURN_SET_SIZE);
}

/* ---------- figures for the results and progress screens ---------- */
const pct = (ok, n) => n ? Math.round(100 * ok / n) + '%' : '—';
// first-attempt accuracy over a list of tries
function firstTryAccuracy(tries){
  return { n: tries.length, ok: tries.filter(t => t.ok).length };
}

// where the learner is in a rebuilt unit: 'new', 'again' (finished under the old lessons, since rebuilt),
// 'progress' or 'done'
function rebuiltStatus(subjectId, unitId){
  const s = seenOf(subjectId)[unitId];
  if(!s) return 'new';
  if(s.done && s.rev >= 1) return 'done';
  if(s.rev === 0) return 'again';
  return s.at ? 'progress' : 'new';
}
