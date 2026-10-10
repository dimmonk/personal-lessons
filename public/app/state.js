/* ===================== SUBJECTS ===================== */
// One list of units per subject, built from the FC registry's frozen data: a subject's units are the ids in its subject
// record, in order, and each is run by unit.js. SUBJECTS holds new objects; nothing registered is ever changed.

const ACCENTS = ['#DFA83E','#57C48E','#62AFEE','#C39BF0','#F0907E'];
const WORDS = ['no','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
const numWord = n => n < WORDS.length ? WORDS[n] : String(n);
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

function courseEntry(subjectId, unitId){
  const v = unitView(subjectId, unitId);
  return { id: unitId, tag: v.unit.tag, title: v.title, rev: v.unit.rev, status: v.unit.status, cards: v.cardOrder };
}
function buildSubject(id, index){
  const data = FC.get(id);
  const course = data.meta.units.map(unitId => courseEntry(id, unitId));
  // the subject record is the only place the name, revision and blurb are typed
  return {
    id, name: data.meta.name, rev: data.meta.rev, blurb: data.meta.blurb, course,
    accent: ACCENTS[index % ACCENTS.length],
    keyNo: pad2(index + 1),
    nameCount: data.key.outcomes.length,
    cardCount: course.reduce((a, u) => a + u.cards.length, 0)
  };
}
const SUBJECTS = FC.ids().map(buildSubject);

/* ===================== STATE ===================== */

const RECENT = storageLoad('pl:recent', {});
function touch(id){ RECENT[id] = Date.now(); storageSave('pl:recent', RECENT); }

const SAVED = storageLoad('pl:app', {view:'library', subjectId:null, filter:'all', sort:'recent'});
const APP = {
  view:'library', subjectId:null, query:'', refMode:'units',
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

// Where "resume" lands: the unit the learner is in (a place saved in `seen`, the one home of progress, lesson standard E8),
// else the first unit not done; phase is 'unitdone' once every unit is done. Whether a unit is done is read from `seen` on
// demand, never copied.
function courseFromSeen(subj){
  const seen = seenOf(subj.id);
  const placed = i => { const e = seen[subj.course[i].id]; return !!(e && !e.done && e.at && e.rev >= 1); };
  const indexes = subj.course.map((_, i) => i);
  const open = indexes.find(placed) ?? indexes.find(i => !unitDone(subj, i));
  return open === undefined ? {u: subj.course.length - 1, phase: 'unitdone'} : {u: open, phase: 'read'};
}

function st(subj){
  if(subjectStates[subj.id]) return subjectStates[subj.id];
  migrateProgress(subj.id, subj.course.map(u => u.id));
  subjectStates[subj.id] = { course: courseFromSeen(subj) };
  return subjectStates[subj.id];
}

const unitDone = (subj, i) => rebuiltUnitDone(subj.id, subj.course[i].id);
const unitsDone = subj => subj.course.filter((_, i) => unitDone(subj, i)).length;
const pctOf     = subj => Math.round(100 * unitsDone(subj) / subj.course.length);
function statusOf(subj){
  const d = unitsDone(subj);
  return d === 0 ? 'new' : (d === subj.course.length ? 'done' : 'progress');
}

/* ===================== NAVIGATION ===================== */

function go(view, extra){
  stopAudio();
  Object.assign(APP, {view}, extra || {});
  saveApp(); render(); window.scrollTo(0,0);
}
function openSubject(id){ APP.subjectId = id; touch(id); go('subject'); }
function openUnit(subj, ui){
  const c = st(subj).course, unit = subj.course[ui];
  c.u = ui; c.phase = 'read';
  APP.subjectId = subj.id; touch(subj.id);
  // a unit that leans on one the learner found hard opens on "Review these first" (E12): a prompt, never a gate
  const weak = reviewFirstFor(subj, unit);
  if(weak){ go('reviewfirst', { reviewUnit: ui }); return; }
  beginRebuiltUnit(subj, unit);
}
function on(sel, fn, root){ (root || screenEl()).querySelectorAll(sel).forEach(el => el.onclick = () => fn(el)); }
