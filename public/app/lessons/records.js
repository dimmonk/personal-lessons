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
const ACTION_LATE_GAP = 84;            // action subjects add one return about twelve weeks after the third (E9)
const NAME_MODES = ['name', 'finish', 'route', 'spec', 'fact'];

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
// A unit counts as done only when it was finished at standard 1 (a finish under the old lessons has rev 0).
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
function removeNote(subjectId, unitId, field){
  const all = notesOf(subjectId), { [field]: gone, ...rest } = all[unitId] || {};
  storageSave(`pl:${subjectId}:notes`, { ...all, [unitId]: rest });
}

/* ---------- the plan card's saved plan, shown back once (lesson standard E18) ---------- */
// notes[unitId].plan = { cue, then, saved: 'YYYY-MM-DD', shown?: 'YYYY-MM-DD' }
const planText = plan => `If I see ${plan.cue}, then I will ${plan.then}.`;
// The text of a saved plan, or null when the unit has none.
function savedPlanText(subjectId, unitId){
  const plan = (notesOf(subjectId)[unitId] || {}).plan;
  return plan ? planText(plan) : null;
}
function savePlan(subjectId, unitId, cue, then){
  saveNote(subjectId, unitId, { plan: { cue, then, saved: today() } });
}
// Plans not yet shown back: [{ unitId, text }]. Whoever draws a returned set shows these once, then calls
// keepPlan, changePlan or dropPlan for each, so a plan is never shown a second time.
function plansToShowBack(subjectId){
  const notes = notesOf(subjectId);
  return Object.keys(notes).filter(unitId => notes[unitId].plan && !notes[unitId].plan.shown)
    .map(unitId => ({ unitId, text: planText(notes[unitId].plan) }));
}
function keepPlan(subjectId, unitId){
  const plan = (notesOf(subjectId)[unitId] || {}).plan;
  if(!plan) lessonFail(`unit ${unitId} has no saved plan to keep`);
  saveNote(subjectId, unitId, { plan: { ...plan, shown: today() } });
}
function changePlan(subjectId, unitId, cue, then){
  saveNote(subjectId, unitId, { plan: { cue, then, saved: today(), shown: today() } });
}
function dropPlan(subjectId, unitId){ removeNote(subjectId, unitId, 'plan'); }
const logOf = () => storageRead('pl:log') || [];
function logEvent(type, detail){
  storageSave('pl:log', [...logOf(), { d: today(), type, ...(detail || {}) }].slice(-MAX_LOG));
}

/* ---------- one-time migration of old progress (lesson standard E8) ---------- */
// The lessons before standard 1 kept the learner's place as { u, card, phase, done[] } by unit index, under pl:<subject>:course.
// That is read once, re-keyed by unit id into pl:<subject>:seen, and never written again. Safe to run again: it only runs while
// no `seen` record exists. unitIds is the subject's map from old unit index to unit id (its subject record's units, in order).
// A unit finished under the old lessons has since been rebuilt, so it starts again: its key wording was never shown to the learner.
// Any other old place (a unit that was only open) has no place worth keeping.
function migrateProgress(subjectId, unitIds){
  const seenKey = `pl:${subjectId}:seen`;
  if(storageRead(seenKey)) return;
  const old = storageRead(`pl:${subjectId}:course`);
  if(!old) return;
  const done = Array.isArray(old.done) ? old.done : [];
  const seen = {};
  unitIds.forEach((unitId, i) => {
    if(done[i]) seen[unitId] = { rev: 0, done: false, at: null };
  });
  saveSeen(subjectId, seen);
}

/* ---------- returns: what is due, computed from the record (lesson standard E9) ---------- */
// What is scheduled is the discrimination (a name), not the case. target = the name a case teaches:
// its outcome, or in a gate unit the gate answer of its route.
function caseTarget(v, c){
  return c.outcome || (v.key.gate && c.route && c.route[v.key.gate.code] ? c.route[v.key.gate.code][0] : null);
}
// Every try on a case of this name, with the case attached. In a fact unit the name is a row id and the try is on the row.
// In a gate unit the name chosen is the gate answer, which is stored with the route.
function triesForTarget(v, unitId, target){
  if(v.isFacts) return triesOf(v.subjectId, unitId, target).map((t, i) => ({ ...t, caseId: target, first: i === 0 }));
  const gate = v.key.gate && v.isGate ? v.key.gate.code : null;
  const out = [];
  v.casesOf(unitId).forEach(c => {
    if(caseTarget(v, c) !== target) return;
    triesOf(v.subjectId, unitId, c.id).forEach((t, i) => out.push({ ...t, name: t.name || (gate ? t.steps[gate] || null : null), caseId: c.id, first: i === 0 }));
  });
  return out;
}
function returnGaps(v){ return v.meta && v.meta.action ? [...RETURN_GAPS, ACTION_LATE_GAP] : RETURN_GAPS; }
// { level, due: 'YYYY-MM-DD' or null } for one name of a finished unit.
function returnState(v, unitId, target){
  const gaps = returnGaps(v);
  const tries = triesForTarget(v, unitId, target).filter(t => NAME_MODES.includes(t.mode));
  const unitDays = tries.filter(t => t.context === 'unit').map(t => t.d).sort();
  if(!unitDays.length) return { level: 0, due: null };
  const lastMiss = tries.filter(t => !t.ok).map(t => t.d).sort().pop();
  const anchor = [unitDays[unitDays.length - 1], lastMiss].filter(Boolean).sort().pop();
  const goodDays = [...new Set(tries.filter(t => t.first && t.ok && t.d > anchor).map(t => t.d))].sort();
  const level = goodDays.length;
  if(level >= gaps.length) return { level, due: null };
  const from = level === 0 ? anchor : goodDays[level - 1];
  return { level, due: addDays(from, gaps[level]) };
}
// The names due on or before `through` (today unless said otherwise) across a subject's finished units: [{ unitId, target, due }]
function dueReturns(subjectId, through = today()){
  const sv = subjectView(subjectId), out = [];
  sv.unitIds().filter(unitId => rebuiltUnitDone(subjectId, unitId)).forEach(unitId => {
    const v = unitView(subjectId, unitId);
    v.taught.forEach(target => {
      const state = returnState(v, unitId, target);
      if(state.due && state.due <= through) out.push({ unitId, target, due: state.due });
    });
  });
  return out.sort((a, b) => a.due < b.due ? -1 : a.due > b.due ? 1 : 0);
}
// The neighbor the learner has most often taken this name for, else its first look-alike.
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
  const ofTarget = v.casesOf(unitId).filter(c => caseTarget(v, c) === target && c.kind !== 'reverse' && c.use !== 'claim' && !exclude.includes(c.id));
  const fresh = v.unit.drill.returns.map(v.caseById).filter(c => ofTarget.some(x => x.id === c.id) && !seenBefore(v.subjectId, unitId, c.id));
  if(fresh.length) return { c: fresh[0], repeat: false };
  const routed = ofTarget.filter(c => c.use === 'drill' || c.use === 'return').sort((a, b) => lastSeen(a) < lastSeen(b) ? -1 : 1);
  return routed.length ? { c: routed[0], repeat: true } : null;
}
// What comes back for one due name: a case of it next to a case of the name it is most often taken for, or in a fact
// unit the row itself next to the row it is most often swapped with. [{ unitId, caseId } | { unitId, fact }]
function returnItemsFor(v, due, items){
  const unitId = due.unitId;
  if(v.isFacts){
    const taken = items.filter(i => i.unitId === unitId && i.fact).map(i => i.fact);
    if(taken.includes(due.target)) return [];
    const neighbor = usualConfusion(v, unitId, due.target);
    return [due.target, ...(neighbor && !taken.includes(neighbor) ? [neighbor] : [])].map(fact => ({ unitId, fact, repeat: false }));
  }
  const used = items.filter(i => i.unitId === unitId && i.caseId).map(i => i.caseId);
  if(used.some(id => caseTarget(v, v.caseById(id)) === due.target)) return [];
  const own = pickReturnCase(v, unitId, due.target, used);
  if(!own) return [];
  const neighbor = usualConfusion(v, unitId, due.target);
  const beside = neighbor && pickReturnCase(v, unitId, neighbor, [...used, own.c.id]);
  return [own, ...(beside ? [beside] : [])].map(p => ({ unitId, caseId: p.c.id, repeat: p.repeat }));
}
/* ---------- the weekly review: what is due by the end of the week (lesson standard E9, section 24) ---------- */
// Weeks run Monday to Sunday in local time. `day` is 'YYYY-MM-DD'; the answer is that week's Sunday.
function weekEnd(day = today()){
  const [y, m, d] = day.split('-').map(Number), sinceMonday = (new Date(y, m - 1, d).getDay() + 6) % 7;
  return addDays(day, 6 - sinceMonday);
}
// Everything a subject has due on or before the end of this week, each name asked as E9 pairs it: a case of it next to a case of
// the name it is most often taken for, or in a fact unit the row next to the row it is most often swapped with. No cap and
// nothing random: the same record gives the same items. [{ unitId, caseId, repeat } | { unitId, fact, repeat }]
function reviewItems(subjectId){
  const items = [];
  for(const due of dueReturns(subjectId, weekEnd())){
    returnItemsFor(unitView(subjectId, due.unitId), due, items).forEach(p => {
      items.push(p.fact ? { unitId: p.unitId, fact: p.fact, repeat: false } : { unitId: p.unitId, caseId: p.caseId, repeat: p.repeat });
    });
  }
  return items;
}
// The earliest day after `after` on which any name of any finished unit falls due, or null when nothing more is scheduled.
function nextReturnDate(after){
  const dates = [];
  SUBJECTS.forEach(subj => subjectView(subj.id).unitIds().filter(unitId => rebuiltUnitDone(subj.id, unitId)).forEach(unitId => {
    const v = unitView(subj.id, unitId);
    v.taught.forEach(target => { const s = returnState(v, unitId, target); if(s.due && s.due > after) dates.push(s.due); });
  }));
  return dates.sort()[0] || null;
}

/* ---------- figures for the results and progress screens ---------- */
const pct = (ok, n) => n ? Math.round(100 * ok / n) + '%' : '—';
// first-attempt accuracy over a list of tries
function firstTryAccuracy(tries){
  return { n: tries.length, ok: tries.filter(t => t.ok).length };
}

// where the learner is in a unit: 'new', 'again' (finished under the old lessons, since rebuilt),
// 'progress' or 'done'
function rebuiltStatus(subjectId, unitId){
  const s = seenOf(subjectId)[unitId];
  if(!s) return 'new';
  if(s.done && s.rev >= 1) return 'done';
  if(s.rev === 0) return 'again';
  return s.at ? 'progress' : 'new';
}
