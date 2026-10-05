/* ===================== RENDER ROOT ===================== */

const TABBED = ['library','mixed','progress','subject'];

function render(){
  const subj = currentSubject();
  document.documentElement.style.setProperty('--accent', subj ? subj.accent : '#DFA83E');
  renderRail();
  renderTabbar();
  switch(APP.view){
    case 'search':   return renderSearch();
    case 'mixed':    return renderMixed();
    case 'progress': return renderProgress();
  }
  if(!subj){ APP.view = 'library'; return renderLibrary(); }
  switch(APP.view){
    case 'subject':   return renderSubject(subj);
    case 'lesson':    return renderLesson(subj);
    case 'unit':      return renderUnit(subj);
    case 'unitdrill': return renderUnitDrill(subj);
    case 'unitdone':  return renderUnitDone(subj);
    case 'drill':     return renderDrill(subj);
    case 'det':       return isFullyRebuilt(subj) ? renderDetNew(subj) : renderDet(subj);
    case 'due':       return renderDue(subj);
    case 'again':     return renderAgain(subj);
    case 'claims':    return renderClaims(subj);
    case 'reviewfirst': return renderReviewFirst(subj);
    case 'err':       return renderErr(subj);
    case 'reference': return renderReference(subj);
    default:          return renderLibrary();
  }
}

function renderTabbar(){
  const bar = document.getElementById('tabbar');
  if(!TABBED.includes(APP.view)){ bar.style.display = 'none'; bar.innerHTML = ''; return; }
  bar.style.display = '';
  const tabs = [
    ['library', 'Library',     'library', ['library','subject'].includes(APP.view)],
    ['mixed',   'Mixed drill', 'target',  APP.view === 'mixed'],
    ['progress','Progress',    'bars',    APP.view === 'progress']
  ];
  bar.innerHTML = tabs.map(([v,label,ic,isOn]) =>
    `<button data-v="${v}" class="${isOn?'on':''}">${icon(ic,20)}<span>${label}</span></button>`).join('');
  on('button', el => {
    const v = el.dataset.v;
    if(v === 'mixed' && !APP.mixed) APP.mixed = buildMixed(12);
    go(v);
  }, bar);
}

function renderRail(){
  const rail = document.getElementById('rail');
  rail.innerHTML = `
    <div class="rhead"><span class="m">Fieldcraft</span></div>
    <div class="rsearch">
      <button class="searchfield" data-v="search">${icon('search',14)}<span style="flex-grow:1">Search</span></button>
    </div>
    <div class="rsect"><span class="m s">Subjects</span><span class="m s">${SUBJECTS.length}</span></div>
    <div class="rlist">${SUBJECTS.map(s => {
      const done = unitsDone(s), total = s.course.length, isOn = s.id === APP.subjectId;
      const tail = statusOf(s) === 'done'
        ? `<span style="color:${s.accent};display:flex">${icon('check',12)}</span>`
        : `<span class="ct">${done ? done + '/' + total : '&mdash;'}</span>`;
      return `<button class="rrow ${isOn?'on':''}" data-s="${s.id}">
        <span class="dot" style="background:${s.accent}"></span>
        <span class="nm">${esc(s.name)}</span>${tail}</button>`;
    }).join('')}</div>
    <div class="rfoot">
      <button data-v="library" class="${APP.view==='library'?'on':''}">${icon('library',16)}<span style="flex-grow:1">Library</span></button>
      <button data-v="mixed" class="${APP.view==='mixed'?'on':''}">${icon('target',16)}<span style="flex-grow:1">Mixed drill</span></button>
      <button data-v="progress" class="${APP.view==='progress'?'on':''}">${icon('bars',16)}<span style="flex-grow:1">Progress</span></button>
    </div>`;
  on('[data-s]', el => openSubject(el.dataset.s), rail);
  on('[data-v]', el => {
    const v = el.dataset.v;
    if(v === 'mixed' && !APP.mixed) APP.mixed = buildMixed(12);
    go(v);
  }, rail);
}
