/* ===================== SUBJECTS ===================== */
// One list of units per subject (lesson standard F5). Each unit is either rebuilt (standard 1: its data is
// in the FC registry and unit.js runs it) or still in its old shape (standard 0: the old screens run it).
// SUBJECTS holds new objects built from the registry's frozen data; nothing registered is ever changed.

const ACCENTS = ['#DFA83E','#57C48E','#62AFEE','#C39BF0','#F0907E'];
const WORDS = ['no','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
const numWord = n => n < WORDS.length ? WORDS[n] : String(n);
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

function subjectUnitIds(data){
  return data.meta && data.meta.units ? data.meta.units : data.legacy.course.map((_, i) => 'u' + (i + 1));
}
function rebuiltEntry(subjectId, unitId){
  const v = unitView(subjectId, unitId);
  return { id: unitId, standard: 1, tag: v.unit.tag, title: v.title, rev: v.unit.rev, status: v.unit.status, cards: v.cardOrder };
}
function legacyEntry(data, unitIds, unitId, position){
  const hasRebuilt = unitIds.some(id => data.units[id]);
  const entry = hasRebuilt ? data.legacy.course.find(c => c.id === unitId) : data.legacy.course[position];
  if(!entry) throw new Error(`${data.legacy.id}: no old course entry for unit ${unitId}`);
  return { ...entry, id: unitId, standard: 0 };
}
// What the old screens read from a subject, for one that has no old record because every unit is rebuilt
// (lesson standard F5: the old data file is deleted with the last unit that needs it). Only the key's names are real.
function emptyLegacy(data){
  const units = subjectUnitIds(data);
  if(!units.length || units.some(unitId => !data.units[unitId]))
    throw new Error(`${data.meta ? data.meta.id : 'subject'}: no legacy record, and not every unit is rebuilt`);
  return { id: data.meta.id, course: [], quickDrills: [], errDrill: [], specimens: [], outcomes: data.key.outcomes, caveats: '',
           determination: { gateCode: null, steps: [], stepsByGate: null } };
}
function buildSubject(id, index){
  const data = FC.get(id);
  const legacy = data.legacy || emptyLegacy(data);
  const unitIds = subjectUnitIds(data);
  const course = unitIds.map((unitId, i) => data.units[unitId] ? rebuiltEntry(id, unitId) : legacyEntry(data, unitIds, unitId, i));
  // the subject record, where there is one, is the only place the name, revision and blurb are typed
  const record = data.meta ? { name: data.meta.name, rev: data.meta.rev, blurb: data.meta.blurb } : {};
  return {
    ...legacy, ...record, course,
    accent: legacy.accent || ACCENTS[index % ACCENTS.length],
    keyNo: pad2(index + 1),
    cardCount: course.reduce((a, u) => a + u.cards.length, 0)
  };
}
const SUBJECTS = FC.ids().map(buildSubject);
const isRebuilt = unit => unit.standard === 1;
// a subject whose every unit is rebuilt runs on the new screens end to end (the determination, E13)
const isFullyRebuilt = subj => subj.course.length > 0 && subj.course.every(isRebuilt);

/* ===================== STATE ===================== */

const RECENT = storageLoad('pl:recent', {});
function touch(id){ RECENT[id] = Date.now(); storageSave('pl:recent', RECENT); }

const SAVED = storageLoad('pl:app', {view:'library', subjectId:null, filter:'all', sort:'recent'});
const APP = {
  view:'library', subjectId:null, drillKey:null, query:'', mixed:null, refMode:'units',
  filter: ['all','progress','done','new'].includes(SAVED.filter) ? SAVED.filter : 'all',
  sort:   SAVED.sort === 'az' ? 'az' : 'recent'
};
if(SAVED.subjectId && SUBJECTS.some(s=>s.id===SAVED.subjectId)){
  APP.subjectId = SAVED.subjectId;
  if(SAVED.view === 'subject') APP.view = 'subject';
}
function saveApp(){
  storageSave('pl:app', {
    view: APP.view === 'subject' ? 'subject' : 'library',
    subjectId: APP.subjectId, filter: APP.filter, sort: APP.sort
  });
}

const subjectStates = {};
const currentSubject = () => SUBJECTS.find(s => s.id === APP.subjectId);
const freshDet = () => ({i:0, answers:{}, outcome:null, revealed:false, editing:null});

// The old screens' working copy of progress, derived from `seen` (the one home of progress, lesson standard E8).
// Old units: done flag and place by unit id. A rebuilt unit's done mark is read from `seen` on demand, never copied.
function courseFromSeen(subj){
  const seen = seenOf(subj.id);
  const done = subj.course.map(u => !isRebuilt(u) && !!(seen[u.id] && seen[u.id].done));
  const placed = i => { const e = seen[subj.course[i].id]; return !!(e && !e.done && e.at && (!isRebuilt(subj.course[i]) || e.rev >= 1)); };
  const isDone = i => isRebuilt(subj.course[i]) ? rebuiltUnitDone(subj.id, subj.course[i].id) : done[i];
  const indexes = subj.course.map((_, i) => i);
  const started = indexes.find(placed);
  const open = started !== undefined ? started : indexes.find(i => !isDone(i));
  if(open === undefined) return {u: subj.course.length - 1, card: 0, phase: 'unitdone', done};
  const at = started !== undefined ? seen[subj.course[open].id].at : null;
  const phase = at === 'drill' ? 'drill' : 'read';
  const card = at && at.startsWith('card:') ? Number(at.slice(5)) : 0;
  return {u: open, card, phase, done};
}

function st(subj){
  if(subjectStates[subj.id]) return subjectStates[subj.id];
  migrateProgress(subj.id, subj.course.map(u => u.id), unitId => !!FC.get(subj.id).units[unitId]);
  const s = {
    course: courseFromSeen(subj),
    stats: {}, drill: {}, errState: {i:0, picked:null}, detState: freshDet()
  };
  subj.quickDrills.forEach(q => { s.stats[q.key] = {n:0, ok:0}; s.drill[q.key] = {i:0, picked:null}; });
  s.stats.det = {n:0, label:0, frame:0};
  s.stats.err = {seen:0};
  subj.quickDrills.forEach(q => storageLoad(`pl:${subj.id}:stats:${q.key}`, s.stats[q.key]));
  storageLoad(`pl:${subj.id}:stats:det`, s.stats.det);
  storageLoad(`pl:${subj.id}:stats:err`, s.stats.err);
  subjectStates[subj.id] = s;
  return s;
}
// Writes the old units' done marks and the open old unit's place into `seen`. Rebuilt units are written by unit.js.
function saveCourse(subj){
  const c = st(subj).course, before = seenOf(subj.id);
  const next = {...before};
  subj.course.forEach((u, i) => {
    if(isRebuilt(u)) return;
    const done = !!c.done[i], here = i === c.u;
    if(!done && !here && !before[u.id]) return;
    const at = done ? null : (here ? legacyPlace(c) : before[u.id].at);
    next[u.id] = {rev: 0, done, at};
  });
  saveSeen(subj.id, next);
}

const unitDone = (subj, i) => isRebuilt(subj.course[i]) ? rebuiltUnitDone(subj.id, subj.course[i].id) : !!st(subj).course.done[i];
const unitsDone = subj => subj.course.filter((_, i) => unitDone(subj, i)).length;
const pctOf     = subj => Math.round(100 * unitsDone(subj) / subj.course.length);
function statusOf(subj){
  const d = unitsDone(subj);
  return d === 0 ? 'new' : (d === subj.course.length ? 'done' : 'progress');
}

/* ===================== NAVIGATION ===================== */

function go(view, extra){
  Object.assign(APP, {view}, extra || {});
  saveApp(); render(); window.scrollTo(0,0);
}
function openSubject(id){ APP.subjectId = id; touch(id); go('subject'); }
function openUnit(subj, ui){
  const c = st(subj).course, unit = subj.course[ui];
  c.u = ui; c.card = 0; c.phase = 'read';
  APP.subjectId = subj.id; touch(subj.id);
  if(isRebuilt(unit)){
    // a unit that leans on one the learner found hard opens on "Review these first" (E12): a prompt, never a gate
    const weak = reviewFirstFor(subj, unit);
    if(weak){ go('reviewfirst', { reviewUnit: ui }); return; }
    beginRebuiltUnit(subj, unit); return;
  }
  saveCourse(subj); go('lesson');
}
function on(sel, fn, root){ (root || screenEl()).querySelectorAll(sel).forEach(el => el.onclick = () => fn(el)); }

/* ===================== DETERMINATION ENGINE ===================== */
/* A subject's `determination` describes its diagnostic-question flow:
 *   { gateCode: null | 'D1',
 *     steps: [...],                 // always active
 *     stepsByGate: null | {...} }   // per-branch follow-ups
 * Specimens store answers as sub:{ [stepCode]: [acceptableAnswerIds] }.
 */
function detActiveSteps(subject, state){
  const d = subject.determination;
  if(!d.gateCode) return d.steps;
  const gateAns = state.answers[d.gateCode];
  return [...d.steps, ...(gateAns ? (d.stepsByGate[gateAns] || []) : [])];
}
function detCandidates(subject, state){
  let live = subject.outcomes.map(o => o.id);
  detActiveSteps(subject, state).forEach(step => {
    const opt = step.options.find(o => o.id === state.answers[step.code]);
    if(opt && opt.keeps) live = live.filter(id => opt.keeps.includes(id));
  });
  return live;
}
function detReady(subject, state){
  const steps = detActiveSteps(subject, state);
  return steps.length > 0 && steps.every(step => state.answers[step.code]);
}
function nameOptions(subject, state){
  const d = subject.determination;
  if(!d.gateCode) return subject.outcomes;
  return subject.outcomes.filter(o => o.group === state.answers[d.gateCode]);
}
function correctSteps(subject, sp){
  const d = subject.determination;
  if(!d.gateCode) return d.steps;
  const want = sp.sub[d.gateCode];
  return [...d.steps, ...((want && d.stepsByGate[want[0]]) || [])];
}
const outcomeName = (subject, id) => subject.outcomes.find(o => o.id === id).n;
