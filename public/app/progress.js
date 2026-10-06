/* ===================== SCREENS: THE PROGRESS SCREEN, AND THE LOG EXPORT ===================== */
// Lesson standard E8, E10, E19. Every figure is computed from the practice record (pl:<subject>:items) and the log
// (pl:log); nothing is stored for the screen. "First try" is the first try in an item's record. Commit prompts are
// never scored and the baseline check is never shown as a result.

const PROGRESS_SAY = {
  heading: 'Practice record',
  intro: 'First tries only: what you got right the first time a question or a case came up. Anything missed came back, and is not counted again.',
  allFirst: 'All first tries',
  whole: 'Whole cases',
  single: 'Single questions',
  persistence: 'Showing up',
  logNote: 'The log stays on this device. The file holds the log and, for every subject, your practice record, your places and your notes.',
  exportLabel: n => `Export your log (${n} ${n === 1 ? 'entry' : 'entries'})`,
  emptyLog: 'Nothing is logged yet.',
  subjectPractice: figure => `practice ${figure}`
};
const WHOLE_ROUTE_MODES = ['finish', 'route', 'spec'];

// the first try of every item a subject has been asked, commit prompts and the baseline apart
const subjectFirstTries = subjectId => Object.values(itemsOf(subjectId)).map(entry => entry.tries[0])
  .filter(t => t && t.mode !== 'commit' && t.context !== 'baseline');
const firstTries = () => SUBJECTS.flatMap(s => subjectFirstTries(s.id));
// "3 of 5 · 60%", or a dash where nothing has been asked
const outOf = list => list.length ? `${list.filter(t => t.ok).length} of ${list.length} · ${pct(list.filter(t => t.ok).length, list.length)}` : '—';
function persistenceFigures(){
  const log = logOf(), count = type => log.filter(e => e.type === type).length;
  return { started: count('start'), parts: count('part'), sets: count('set'), days: new Set(log.filter(e => e.type === 'return').map(e => e.d)).size };
}
function practiceBlockHtml(){
  const firsts = firstTries(), whole = firsts.filter(t => WHOLE_ROUTE_MODES.includes(t.mode)), single = firsts.filter(t => !WHOLE_ROUTE_MODES.includes(t.mode));
  const p = persistenceFigures(), n = logOf().length;
  const rows = list => list.map(([label, value]) => `<tr><td>${esc(label)}</td><td>${esc(String(value))}</td></tr>`).join('');
  return `<div class="sect"><span class="m">${PROGRESS_SAY.heading}</span></div>
    <div class="block"><div class="card" data-practice-record>
      <p class="forline">${esc(PROGRESS_SAY.intro)}</p>
      <table class="k results">${rows([[PROGRESS_SAY.allFirst, outOf(firsts)], [PROGRESS_SAY.whole, outOf(whole)], [PROGRESS_SAY.single, outOf(single)]])}</table>
      <span class="m a">${PROGRESS_SAY.persistence}</span>
      <table class="k results">${rows([['Units started', p.started], ['Parts completed', p.parts], ['Sets completed', p.sets], ['Days returned', p.days]])}</table>
      <button class="btn ghost sm" id="exportLog" ${n ? '' : 'disabled'}>${esc(PROGRESS_SAY.exportLabel(n))}</button>
      <p class="hintline">${esc(n ? PROGRESS_SAY.logNote : PROGRESS_SAY.emptyLog)}</p>
    </div></div>`;
}

// Everything the device holds for the learner, as one file (E19): the log, and for every subject its practice record, its places and
// its notes. The site has no backend, so this is the only way it leaves the device.
const exportBody = () => JSON.stringify({ exported: today(), standard: FC.STANDARD, engine: FC.ENGINE, log: logOf(),
  subjects: Object.fromEntries(SUBJECTS.map(s => [s.id, { items: itemsOf(s.id), seen: seenOf(s.id), notes: notesOf(s.id) }])) }, null, 2);
function exportLog(){
  const url = URL.createObjectURL(new Blob([exportBody()], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `fieldcraft-log-${today()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function subjectLine(s){
  const firsts = subjectFirstTries(s.id);
  return [`${unitsDone(s)}/${s.course.length} units`, ...(firsts.length ? [esc(PROGRESS_SAY.subjectPractice(outOf(firsts)))] : [])].join(' &middot; ');
}
function renderProgress(){
  const totalUnits = SUBJECTS.reduce((a,s) => a + s.course.length, 0);
  const doneUnits  = SUBJECTS.reduce((a,s) => a + unitsDone(s), 0);

  screenEl().innerHTML = `<div class="pane">
    <div class="topbar"><span class="m">Progress</span></div>
    <div class="mast">
      <h1>${doneUnits} of ${totalUnits}</h1>
      <p>units run across ${numWord(SUBJECTS.length)} subject${SUBJECTS.length===1?'':'s'}. Naming whole cases is the measure that matters: a name only counts when every answer on the way to it is right too.</p>
    </div>
    ${practiceBlockHtml()}
    <div class="sect"><span class="m">By subject</span></div>
    <div class="rows">${SUBJECTS.map(s => `<button class="row" data-s="${s.id}" style="--accent:${s.accent}">
        <span class="sigil">${s.keyNo}</span>
        <span class="grow">
          <span class="t">${esc(s.name)}</span>
          <span class="s">${subjectLine(s)}</span>
          <span class="segs" style="margin-top:6px">${s.course.map((_,i) =>
            `<i class="${unitDone(s,i)?'on':''}"></i>`).join('')}</span>
        </span>
        ${icon('chevron')}
      </button>`).join('')}</div>
  </div>`;
  on('[data-s]', el => openSubject(el.dataset.s));
  on('#exportLog', exportLog);
}
