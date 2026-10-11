/* ===================== LIBRARY ===================== */

function sortedSubjects(){
  let list = SUBJECTS.filter(s => APP.filter === 'all' || statusOf(s) === APP.filter);
  if(APP.sort === 'az') list = list.slice().sort((a,b) => a.name.localeCompare(b.name));
  else list = list.slice().sort((a,b) => (RECENT[b.id]||0) - (RECENT[a.id]||0));
  return list;
}
function continueTarget(){
  const open = SUBJECTS.filter(s => statusOf(s) !== 'done' && RECENT[s.id] && resumePoint(s));
  if(!open.length) return null;
  return open.sort((a,b) => (RECENT[b.id]||0) - (RECENT[a.id]||0))[0];
}
function progressMark(s){
  const status = statusOf(s);
  if(status === 'done') return `<span class="pct" style="display:flex;align-items:center;gap:4px">${icon('check',12)}100%</span>
      <span class="meter"><i style="width:100%"></i></span>`;
  if(status === 'new') return `<span class="pct off">&mdash;</span><span class="meter"></span>`;
  return `<span class="pct">${pctOf(s)}%</span><span class="meter"><i style="width:${pctOf(s)}%"></i></span>`;
}

function renderLibrary(){
  const counts = {all: SUBJECTS.length, progress:0, done:0, new:0};
  SUBJECTS.forEach(s => counts[statusOf(s)]++);
  const chips = [
    ['all','All ' + counts.all], ['progress','In progress ' + counts.progress],
    ['done','Done ' + counts.done], ['new','Not started ' + counts.new]
  ];
  const cont = continueTarget();
  const list = sortedSubjects();

  screenEl().innerHTML = `<div class="pane">
    <div class="topbar"><span class="m">Fieldcraft &middot; Pragmatic knowledge</span></div>
    <div class="mast">
      <h1>${cap(numWord(SUBJECTS.length))} ${SUBJECTS.length === 1 ? 'subject' : 'subjects'}.</h1>
      <p>Short lessons that end with doing the real thing, then questions that come back on later days.</p>
    </div>
    <button class="searchfield" data-v="search">${icon('search',16)}<span>Search subjects and lessons</span></button>
    ${reviewTileForLibrary()}
    ${cont ? continueCard(cont) : ''}
    <div class="chips">${chips.map(([k,label]) =>
      `<button class="chip ${APP.filter===k?'on':''}" data-f="${k}">${esc(label)}</button>`).join('')}</div>
    <div class="sect">
      <span class="m">All subjects</span>
      <button class="linkbtn" id="sortBtn">${APP.sort === 'az' ? 'A&ndash;Z' : 'Recent'}${icon('caret',12)}</button>
    </div>
    ${list.length ? `<div class="rows">${list.map(s => `
      <button class="row" data-s="${s.id}" style="--accent:${s.accent}">
        <span class="sigil">${s.keyNo}</span>
        <span class="grow">
          <span class="t">${esc(s.name)}</span>
          <span class="s">${s.parts.length} parts &middot; ${s.lessons.length} built</span>
        </span>
        <span class="end">${progressMark(s)}</span>
        ${icon('chevron')}
      </button>`).join('')}</div>`
    : `<p class="empty">Nothing in this filter yet.</p>`}
  </div>`;

  on('[data-s]', el => openSubject(el.dataset.s));
  on('[data-f]', el => { APP.filter = el.dataset.f; saveApp(); renderLibrary(); });
  on('[data-v]', el => go(el.dataset.v));
  on('#sortBtn', () => { APP.sort = APP.sort === 'az' ? 'recent' : 'az'; saveApp(); renderLibrary(); });
  on('[data-resume]', el => resumeSubject(el.dataset.resume));
  on('[data-review-start]', startReview);
}

function resumeLabel(subj){
  const l = resumePoint(subj);
  return lessonPlace(subj, l) > 0 ? SAY.resume : SAY.start;
}
function resumeSubject(id){
  const s = SUBJECTS.find(x => x.id === id), l = resumePoint(s);
  APP.subjectId = id; touch(id);
  if(l) openLesson(s, l.id);
}

function continueCard(s){
  const l = resumePoint(s);
  return `<div class="block"><div class="card" style="--accent:${s.accent}">
    <div class="ch">
      <span class="m a">Continue</span>
      <span class="m" style="letter-spacing:.1em">${partsDone(s)} / ${s.parts.length} parts</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:4px">
      <span class="cn">${esc(s.name)}</span>
      <span class="cs">${esc(l.title)}</span>
    </div>
    <div class="segs">${s.parts.map(p => `<i class="${s.lessons.some(x => x.part === p.id && lessonIsDone(s, x.id)) ? 'on' : ''}"></i>`).join('')}</div>
    <button class="btn sm" data-resume="${s.id}">${resumeLabel(s)}${icon('arrow')}</button>
  </div></div>`;
}
