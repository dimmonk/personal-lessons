/* ===================== SUBJECTS ===================== */
// One list of subjects, built from the FC registry's frozen data. A subject's lessons are the ones registered, in part order;
// its parts are listed in the subject record. SUBJECTS holds new objects; nothing registered is changed.

// the subjects' colours, named by their tokens in app.css so each theme gives its own shade
const ACCENTS = ['var(--a1)','var(--a2)','var(--a3)','var(--a4)','var(--a5)'];

function buildSubject(id, index){
  const data = FC.get(id), meta = data.meta;
  const lessons = lessonsInOrder(data).map(l => ({ id: l.id, part: l.part, title: l.title, rev: l.rev, status: l.status, role: l.role || null, trigger: l.trigger || null }));
  return {
    id, name: meta.name, field: meta.field, rev: meta.rev, endResult: meta.endResult, parts: meta.parts, units: meta.units || null, lessons,
    accent: ACCENTS[index % ACCENTS.length],
    keyNo: pad2(index + 1)
  };
}
const SUBJECTS = FC.ids().map(buildSubject);


/* ===================== STATE ===================== */

// When each subject was last opened, and the screen last shown: kept in the account (app/store.js), so the app opens where it was left.
const recentOf = () => storePref('recent', {});
function touch(id){ storePrefPut('recent', { ...recentOf(), [id]: Date.now() }); }

const APP = { view:'library', subjectId:null, query:'', filter:'all', sort:'recent' };
// the screen last shown, put back once the record is open (app/init.js)
function restoreApp(){
  const saved = storePref('app', {});
  APP.filter = ['all','progress','done','new'].includes(saved.filter) ? saved.filter : 'all';
  APP.sort = saved.sort === 'az' ? 'az' : 'recent';
  if(saved.subjectId && SUBJECTS.some(s=>s.id===saved.subjectId)){
    APP.subjectId = saved.subjectId;
    if(saved.view === 'subject') APP.view = 'subject';
  }
}
function saveApp(){
  storePrefPut('app', {
    view: APP.view === 'subject' ? 'subject' : 'library',
    subjectId: APP.subjectId, filter: APP.filter, sort: APP.sort
  });
}

const currentSubject = () => SUBJECTS.find(s => s.id === APP.subjectId);
const dataOf = subj => FC.get(subj.id);

// Whether a lesson is done is worked out from the practice record on demand (a complete run of its check), never copied.
const lessonIsDone = (subj, lessonId) => lessonDone(dataOf(subj), subj.id, dataOf(subj).lessons[lessonId]);
const lessonsDone = subj => subj.lessons.filter(l => lessonIsDone(subj, l.id)).length;
const partsDone = subj => subj.parts.filter(p => subj.lessons.some(l => l.part === p.id && lessonIsDone(subj, l.id))).length;
const pctOf = subj => subj.parts.length ? Math.round(100 * partsDone(subj) / subj.parts.length) : 0;
// where the learner has put a lesson down: a saved place beyond the start, in the lesson's current revision
const lessonPlace = (subj, l) => lessonResumeAt(dataOf(subj), subj.id, dataOf(subj).lessons[l.id]);
function statusOf(subj){
  const d = partsDone(subj);
  if(subj.parts.length && d === subj.parts.length) return 'done';
  return d > 0 || subj.lessons.some(l => lessonPlace(subj, l) > 0 || lessonIsDone(subj, l.id)) ? 'progress' : 'new';
}
// where "continue" lands: the lesson the learner put down, else the first lesson not done; null when every lesson built is done
function resumePoint(subj){
  const placed = subj.lessons.find(l => lessonPlace(subj, l) > 0 && !lessonIsDone(subj, l.id));
  return placed || subj.lessons.find(l => !lessonIsDone(subj, l.id)) || null;
}

/* ===================== NAVIGATION ===================== */

// Stops every sound, stops reading a question aloud, and switches the microphone off. Called on every move to another screen.
function stopAudio(){
  stopSounds();
  stopMeter();
  speechStop();
}
// The phone's Back button and the screen's own back control do the same thing: go up one screen. The browser's history mirrors the path
// from the library to the screen shown, one entry per screen ({ fc: 'app', depth }), so Back always has an entry of the app to land on,
// and Back at the library is the browser's own and leaves. Entries are added only when the learner taps their way deeper; a Back is never
// answered by adding one, because Chrome on Android skips an entry added without a tap, and the next Back would leave the app.
const PARENT = { library: null, subject: 'library', review: 'library', progress: 'library', search: 'library', reviewrun: 'library',
  lesson: 'subject', results: 'subject', answers: 'subject', range: 'subject' };
const depthOf = view => PARENT[view] ? 1 + depthOf(PARENT[view]) : 0;
const historyDepth = () => history.state && history.state.fc === 'app' ? history.state.depth : 0;
let poppingTo = null;   // the depth the app itself is going back to with history.go; its popstate is not a learner's Back
let answeringBack = false;   // while a Back is answered, history only ever goes back, never gains an entry
function syncHistory(){
  if(poppingTo !== null) return;
  const want = depthOf(APP.view), have = historyDepth();
  if(!answeringBack) for(let d = have + 1; d <= want; d++) history.pushState({ fc: 'app', depth: d }, '');
  if(want < have){ poppingTo = want; history.go(want - have); }
}
function startHistory(){
  if(!(history.state && history.state.fc === 'app')) history.replaceState({ fc: 'app', depth: 0 }, '');
  syncHistory();
}
// A Back (or Forward) that lands on an entry of the app: the screen's own back control is pressed once for each screen gone up, so the
// screen tidies up as it does for a tap. A Forward is undone.
function backInApp(){
  const landed = historyDepth();
  if(poppingTo !== null){ const meant = poppingTo; poppingTo = null; if(landed !== meant) syncHistory(); return; }
  answeringBack = true;
  try {
    for(let up = depthOf(APP.view) - landed; up > 0; up--){
      const back = document.querySelector('#screen .topbar [data-v]');
      if(back) back.click(); else go(PARENT[APP.view] || 'library');
    }
  } finally { answeringBack = false; }
  syncHistory();
}
function go(view, extra){
  stopAudio();
  timerStop();
  ownSubjectReset();
  Object.assign(APP, {view}, extra || {});
  saveApp(); render(); window.scrollTo(0,0);
  syncHistory();
}
function openSubject(id){ APP.subjectId = id; touch(id); go('subject'); }
function on(sel, fn, root){ (root || screenEl()).querySelectorAll(sel).forEach(el => el.onclick = () => fn(el)); }
