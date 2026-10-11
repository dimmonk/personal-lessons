/* ===================== SUBJECTS ===================== */
// One list of subjects, built from the FC registry's frozen data. A subject's lessons are the ones registered, in part order;
// its parts are the design record's, mirrored in the subject record. SUBJECTS holds new objects; nothing registered is changed.

const ACCENTS = ['#DFA83E','#57C48E','#62AFEE','#C39BF0','#F0907E'];

function buildSubject(id, index){
  const data = FC.get(id), meta = data.meta;
  const lessons = lessonsInOrder(data).map(l => ({ id: l.id, part: l.part, title: l.title, rev: l.rev, status: l.status, role: l.role || null, trigger: l.trigger || null }));
  return {
    id, name: meta.name, rev: meta.rev, endResult: meta.endResult, parts: meta.parts, lessons,
    accent: ACCENTS[index % ACCENTS.length],
    keyNo: pad2(index + 1)
  };
}
const SUBJECTS = FC.ids().map(buildSubject);

/* ===================== STATE ===================== */

const RECENT = storageLoad('pl:recent', {});
function touch(id){ RECENT[id] = Date.now(); storageSave('pl:recent', RECENT); }

const SAVED = storageLoad('pl:app', {view:'library', subjectId:null, filter:'all', sort:'recent'});
const APP = {
  view:'library', subjectId:null, query:'',
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

const currentSubject = () => SUBJECTS.find(s => s.id === APP.subjectId);
const dataOf = subj => FC.get(subj.id);

// Whether a lesson is done is worked out from the practice record on demand (a complete run of its check), never copied.
const lessonIsDone = (subj, lessonId) => lessonDone(dataOf(subj), subj.id, dataOf(subj).lessons[lessonId]);
const lessonsDone = subj => subj.lessons.filter(l => lessonIsDone(subj, l.id)).length;
const partsDone = subj => subj.parts.filter(p => subj.lessons.some(l => l.part === p.id && lessonIsDone(subj, l.id))).length;
const pctOf = subj => subj.parts.length ? Math.round(100 * partsDone(subj) / subj.parts.length) : 0;
// where the learner has put a lesson down: a saved place beyond the start, in the lesson's current revision
const lessonPlace = (subj, l) => { const s = seenOf(subj.id)[l.id]; return s && s.rev === l.rev && s.at > 0 && s.at < stepTotal(dataOf(subj).lessons[l.id]) - 1 ? s.at : 0; };
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
// The phone's Back button must go back inside the app, not out of it. The app is one page, so one history entry is added when the learner
// leaves the library, and a Back that comes to the entry below it does what the screen's own back control does (backInApp); Back at the
// library is the browser's own, and leaves. Coming back to the library by the screen's own control drops the added entry (history.back()),
// so the next Back leaves at once; the Back that drop causes is not a learner's Back, and only re-syncs (the learner may have moved on).
const inApp = () => !!(history.state && history.state.fc === 'in');
let droppingEntry = false;
function syncHistory(){
  if(APP.view !== 'library' && !inApp()) history.pushState({ fc: 'in' }, '');
  else if(APP.view === 'library' && inApp() && !droppingEntry){ droppingEntry = true; history.back(); }
}
function backInApp(){
  if(droppingEntry){ droppingEntry = false; syncHistory(); return; }
  if(inApp() || APP.view === 'library') return;
  const back = document.querySelector('#screen .topbar [data-v], #screen .topbar #leaveReview');
  if(back) back.click(); else go('library');
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
