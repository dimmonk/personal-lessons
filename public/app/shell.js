/* ===================== RENDER ROOT ===================== */

const TABBED = ['library','review','progress','subject'];

function render(){
  const subj = currentSubject();
  document.documentElement.style.setProperty('--accent', subj ? subj.accent : '#DFA83E');
  renderRail();
  renderTabbar();
  switch(APP.view){
    case 'search':   return renderSearch();
    case 'review':   return renderReview();
    case 'reviewrun': return renderReviewRun();
    case 'progress': return renderProgress();
  }
  if(!subj){ APP.view = 'library'; return renderLibrary(); }
  switch(APP.view){
    case 'subject':   return renderSubject(subj);
    case 'lesson':    return renderLesson(subj);
    case 'results':   return renderResults(subj);
    default:          return renderLibrary();
  }
}

function renderTabbar(){
  const bar = document.getElementById('tabbar');
  if(!TABBED.includes(APP.view)){ bar.style.display = 'none'; bar.innerHTML = ''; return; }
  bar.style.display = '';
  const tabs = [
    ['library', 'Library',     'library', ['library','subject'].includes(APP.view)],
    ['review',  REVIEW_TEXT.tab, 'target', APP.view === 'review'],
    ['progress','Progress',    'bars',    APP.view === 'progress']
  ];
  bar.innerHTML = tabs.map(([v,label,ic,isOn]) =>
    `<button data-v="${v}" class="${isOn?'on':''}">${icon(ic,20)}<span>${label}</span></button>`).join('');
  on('button', el => go(el.dataset.v), bar);
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
      const done = partsDone(s), total = s.parts.length, isOn = s.id === APP.subjectId;
      const tail = statusOf(s) === 'done'
        ? `<span style="color:${s.accent};display:flex">${icon('check',12)}</span>`
        : `<span class="ct">${done ? done + '/' + total : '&mdash;'}</span>`;
      return `<button class="rrow ${isOn?'on':''}" data-s="${s.id}">
        <span class="dot" style="background:${s.accent}"></span>
        <span class="nm">${esc(s.name)}</span>${tail}</button>`;
    }).join('')}</div>
    <div class="rfoot">
      <button data-v="library" class="${APP.view==='library'?'on':''}">${icon('library',16)}<span style="flex-grow:1">Library</span></button>
      <button data-v="review" class="${APP.view==='review'?'on':''}">${icon('target',16)}<span style="flex-grow:1">${REVIEW_TEXT.tab}</span></button>
      <button data-v="progress" class="${APP.view==='progress'?'on':''}">${icon('bars',16)}<span style="flex-grow:1">Progress</span></button>
    </div>`;
  on('[data-s]', el => openSubject(el.dataset.s), rail);
  on('[data-v]', el => go(el.dataset.v), rail);
}
