/* ===================== SCREENS: THE PROGRESS SCREEN, AND THE LOG EXPORT ===================== */
// Every figure is computed from the practice record and the log (app/lessons/records.js); nothing is stored for the screen.
// "First try" is the first try of a question in a sitting. The baseline is never shown as a result.

const PROGRESS_SAY = {
  heading: 'Practice record',
  intro: 'First tries only: what you got right the first time a question came up. Anything missed came back, and is not counted again.',
  allFirst: 'All first tries',
  persistence: 'Showing up',
  logNote: 'Your progress is saved with your Google sign-in. The file holds the log and, for every subject, your practice record, your places and your notes.',
  exportLabel: n => `Export your log (${n} ${n === 1 ? 'entry' : 'entries'})`,
  emptyLog: 'Nothing is logged yet.',
  subjectPractice: figure => `practice ${figure}`
};

const subjectFirstTries = subjectId => firstTriesOutside(subjectId, ['baseline']);
const everyFirstTry = () => SUBJECTS.flatMap(s => subjectFirstTries(s.id));
function persistenceFigures(){
  const log = logOf(), count = type => log.filter(e => e.type === type).length;
  return { started: log.filter(e => e.type === 'start' && e.lesson).length, checks: count('check'), days: new Set(log.filter(e => e.type === 'return').map(e => e.d)).size };
}
function practiceBlockHtml(){
  const p = persistenceFigures(), n = logOf().length;
  const rows = list => list.map(([label, value]) => `<tr><td>${esc(label)}</td><td>${esc(String(value))}</td></tr>`).join('');
  return `<div class="sect"><span class="m">${PROGRESS_SAY.heading}</span></div>
    <div class="block"><div class="card" data-practice-record>
      <p class="forline">${esc(PROGRESS_SAY.intro)}</p>
      <table class="k results">${rows([[PROGRESS_SAY.allFirst, outOf(everyFirstTry())]])}</table>
      <span class="m a">${PROGRESS_SAY.persistence}</span>
      <table class="k results">${rows([['Lessons started', p.started], ['Checks finished', p.checks], ['Days returned', p.days]])}</table>
      <button class="btn ghost sm" id="exportLog" ${n ? '' : 'disabled'}>${esc(PROGRESS_SAY.exportLabel(n))}</button>
      <p class="hintline">${esc(n ? PROGRESS_SAY.logNote : PROGRESS_SAY.emptyLog)}</p>
    </div></div>`;
}

// Everything the device holds for the learner, as one file (E19): the log, and for every subject its practice record, its places and
// its notes: a copy the learner keeps, beside the one saved with their sign-in (app/sync.js).
const exportBody = () => JSON.stringify({ exported: today(), standard: FC.STANDARD, engine: FC.ENGINE, log: logOf(),
  subjects: Object.fromEntries(SUBJECTS.map(s => [s.id, { items: itemsOf(s.id), seen: seenOf(s.id), notes: notesOf(s.id) }])) }, null, 2);
const exportLog = () => saveFile(`fieldcraft-log-${today()}.json`, exportBody(), 'application/json');

function subjectLine(s){
  const firsts = subjectFirstTries(s.id);
  return [`${partsDone(s)}/${s.parts.length} lessons`, ...(firsts.length ? [esc(PROGRESS_SAY.subjectPractice(outOf(firsts)))] : [])].join(' &middot; ');
}
// the theme switch (app/theme.js): following the phone, or always light, or always dark
const themeBlockHtml = () => `<div class="sect"><span class="m">${esc(THEME_SAY.title)}</span></div>
    <div class="chips" role="group" aria-label="${esc(THEME_SAY.title)}">${THEMES.map(t =>
      `<button class="chip ${themeChoice() === t ? 'on' : ''}" data-theme-pick="${t}" aria-pressed="${themeChoice() === t}">${esc(THEME_SAY[t])}</button>`).join('')}</div>`;

function renderProgress(){
  const totalParts = SUBJECTS.reduce((a,s) => a + s.parts.length, 0);
  const doneParts  = SUBJECTS.reduce((a,s) => a + partsDone(s), 0);

  screenEl().innerHTML = `<div class="pane split"><div class="split-side">
    <div class="topbar"><span class="m">Progress</span></div>
    <div class="mast">
      <h1>${doneParts} of ${totalParts}</h1>
      <p>lessons finished across ${numWord(SUBJECTS.length)} subject${SUBJECTS.length===1?'':'s'}. A lesson is finished when you have taken its check.</p>
    </div>
    ${practiceBlockHtml()}
    <div class="block">${syncLineHtml()}</div>
    ${themeBlockHtml()}
    </div><div class="split-main">
    <div class="sect"><span class="m">By subject</span></div>
    <div class="rows">${SUBJECTS.map(s => `<button class="row" data-s="${s.id}" style="--accent:${s.accent}">
        <span class="sigil">${s.keyNo}</span>
        <span class="grow">
          <span class="t">${esc(s.name)}</span>
          <span class="s">${subjectLine(s)}</span>
          <span class="segs" style="margin-top:6px">${s.parts.map(p =>
            `<i class="${s.lessons.some(l => l.part === p.id && lessonIsDone(s, l.id)) ? 'on' : ''}"></i>`).join('')}</span>
        </span>
        ${icon('chevron')}
      </button>`).join('')}</div>
  </div></div>`;
  on('[data-s]', el => openSubject(el.dataset.s));
  on('#exportLog', exportLog);
  on('[data-theme-pick]', el => { setTheme(el.dataset.themePick); renderProgress(); });
}
