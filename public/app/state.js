const SUBJECTS = [IDEOLOGY, PSYCHOLOGY, MATH, STATISTICS, SCAMS, WEALTH, CIVICS];

/* ===================== SUBJECT METADATA ===================== */

const ACCENTS = ['#DFA83E','#57C48E','#62AFEE','#C39BF0','#F0907E'];
const WORDS = ['no','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
const numWord = n => n < WORDS.length ? WORDS[n] : String(n);
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

SUBJECTS.forEach((s,i)=>{
  s.accent    = s.accent || ACCENTS[i % ACCENTS.length];
  s.keyNo     = pad2(i+1);
  s.cardCount = s.course.reduce((a,u)=>a+u.cards.length,0);
});

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

function st(subj){
  if(subjectStates[subj.id]) return subjectStates[subj.id];
  const s = {
    course: {u:0, card:0, phase:'read', done: subj.course.map(()=>false)},
    stats: {}, drill: {}, errState: {i:0, picked:null}, detState: freshDet()
  };
  subj.quickDrills.forEach(q => { s.stats[q.key] = {n:0, ok:0}; s.drill[q.key] = {i:0, picked:null}; });
  s.stats.det = {n:0, label:0, frame:0};
  s.stats.err = {seen:0};
  storageLoad(`pl:${subj.id}:course`, s.course);
  subj.quickDrills.forEach(q => storageLoad(`pl:${subj.id}:stats:${q.key}`, s.stats[q.key]));
  storageLoad(`pl:${subj.id}:stats:det`, s.stats.det);
  storageLoad(`pl:${subj.id}:stats:err`, s.stats.err);
  if(s.course.done.length !== subj.course.length) s.course.done = subj.course.map((_,i)=>!!s.course.done[i]);
  subjectStates[subj.id] = s;
  return s;
}
function saveCourse(subj){
  const c = st(subj).course;
  storageSave(`pl:${subj.id}:course`, {u:c.u, card:c.card, phase:c.phase, done:c.done});
}

const unitsDone = subj => st(subj).course.done.filter(Boolean).length;
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
  const c = st(subj).course;
  c.u = ui; c.card = 0; c.phase = 'read'; saveCourse(subj);
  APP.subjectId = subj.id; touch(subj.id); go('lesson');
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
