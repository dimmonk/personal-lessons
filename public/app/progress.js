/* ===================== PROGRESS ===================== */

// What the old lessons counted, for the subjects that still have old units. The counters are frozen (lesson standard E8): a unit
// on the new engine records into the practice record, which the card above this one is drawn from.
const hasOldUnits = s => s.course.some(u => !isRebuilt(u));
const hasNewUnits = s => s.course.some(isRebuilt);
function oldLessonsHtml(det){
  return `<div class="sect"><span class="m">${esc(PROGRESS_SAY.oldHeading)}</span></div>
    <div class="block"><div class="card" data-old-lessons>
      <p class="forline">${esc(PROGRESS_SAY.oldNote)}</p>
      <span class="m a">Determinations</span>
      <div class="statrow" style="border-top:none;padding-top:0">
        <span class="stat"><b>${det.n}</b><span>Recorded</span></span>
        <span class="stat"><b style="color:${det.label?'var(--green)':'inherit'}">${det.label}</b><span>Name right</span></span>
        <span class="stat"><b style="color:${det.frame?'var(--green)':'inherit'}">${det.frame}</b><span>Route right</span></span>
        <span class="stat"><b>${det.n ? Math.round(100*det.frame/det.n) + '%' : '&mdash;'}</b><span>Both</span></span>
      </div>
      ${MIXED.n ? `<p class="hintline">${esc(PROGRESS_SAY.oldMixed(MIXED.ok, MIXED.n))}</p>` : ''}
    </div></div>`;
}
function subjectLine(s){
  const S = st(s), scored = s.quickDrills.map(q => S.stats[q.key]).filter(x => x.n), firsts = subjectFirstTries(s.id);
  const ok = scored.reduce((a,x) => a + x.ok, 0), n = scored.reduce((a,x) => a + x.n, 0);
  return [`${unitsDone(s)}/${s.course.length} units`,
    ...(hasNewUnits(s) && firsts.length ? [esc(PROGRESS_SAY.subjectPractice(outOf(firsts)))] : []),
    // in a subject that has both, the old counters are labelled, so they are not read as the new practice
    ...(hasOldUnits(s) ? [`${hasNewUnits(s) ? esc(PROGRESS_SAY.oldShort) + ': ' : ''}drills ${n ? ok + '/' + n : '&mdash;'} &middot; det ${S.stats.det.n}/${s.specimens.length}`] : [])].join(' &middot; ');
}
function renderProgress(){
  const totalUnits = SUBJECTS.reduce((a,s) => a + s.course.length, 0);
  const doneUnits  = SUBJECTS.reduce((a,s) => a + unitsDone(s), 0);
  const oldSubjects = SUBJECTS.filter(hasOldUnits);
  const det = oldSubjects.reduce((a,s) => { const d = st(s).stats.det; return {n: a.n + d.n, label: a.label + d.label, frame: a.frame + d.frame}; }, {n:0,label:0,frame:0});

  screenEl().innerHTML = `<div class="pane">
    <div class="topbar"><span class="m">Progress</span></div>
    <div class="mast">
      <h1>${doneUnits} of ${totalUnits}</h1>
      <p>units run across ${numWord(SUBJECTS.length)} subject${SUBJECTS.length===1?'':'s'}. Determinations are the measure that matters &mdash; a name is only earned when the route is too.</p>
    </div>
    ${practiceBlockHtml()}
    ${oldSubjects.length ? oldLessonsHtml(det) : ''}
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
