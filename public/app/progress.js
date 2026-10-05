/* ===================== PROGRESS ===================== */

function renderProgress(){
  const totalUnits = SUBJECTS.reduce((a,s) => a + s.course.length, 0);
  const doneUnits  = SUBJECTS.reduce((a,s) => a + unitsDone(s), 0);
  const det = SUBJECTS.reduce((a,s) => { const d = st(s).stats.det; a.n += d.n; a.label += d.label; a.frame += d.frame; return a; }, {n:0,label:0,frame:0});

  screenEl().innerHTML = `<div class="pane">
    <div class="topbar"><span class="m">Progress</span></div>
    <div class="mast">
      <h1>${doneUnits} of ${totalUnits}</h1>
      <p>units run across ${numWord(SUBJECTS.length)} subject${SUBJECTS.length===1?'':'s'}. Determinations are the measure that matters &mdash; a name is only earned when the route is too.</p>
    </div>
    <div class="block"><div class="card">
      <span class="m a">Determinations</span>
      <div class="statrow" style="border-top:none;padding-top:0">
        <span class="stat"><b>${det.n}</b><span>Recorded</span></span>
        <span class="stat"><b style="color:${det.label?'var(--green)':'inherit'}">${det.label}</b><span>Name right</span></span>
        <span class="stat"><b style="color:${det.frame?'var(--green)':'inherit'}">${det.frame}</b><span>Route right</span></span>
        <span class="stat"><b>${det.n ? Math.round(100*det.frame/det.n) + '%' : '&mdash;'}</b><span>Both</span></span>
      </div>
    </div></div>
    <div class="sect"><span class="m">By subject</span><span class="m s">${MIXED.n ? 'Mixed: ' + MIXED.ok + '/' + MIXED.n : ''}</span></div>
    <div class="rows">${SUBJECTS.map(s => {
      const S = st(s), scored = s.quickDrills.map(q => S.stats[q.key]).filter(x => x.n);
      const ok = scored.reduce((a,x) => a + x.ok, 0), n = scored.reduce((a,x) => a + x.n, 0);
      return `<button class="row" data-s="${s.id}" style="--accent:${s.accent}">
        <span class="sigil">${s.keyNo}</span>
        <span class="grow">
          <span class="t">${esc(s.name)}</span>
          <span class="s">${unitsDone(s)}/${s.course.length} units &middot; drills ${n ? ok + '/' + n : '&mdash;'} &middot; det ${S.stats.det.n}/${s.specimens.length}</span>
          <span class="segs" style="margin-top:6px">${s.course.map((_,i) =>
            `<i class="${S.course.done[i]?'on':''}"></i>`).join('')}</span>
        </span>
        ${icon('chevron')}
      </button>`;
    }).join('')}</div>
  </div>`;
  on('[data-s]', el => openSubject(el.dataset.s));
}
