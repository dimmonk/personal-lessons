/* ===================== SUBJECT INDEX ===================== */

function drillOf(u, subj){
  if(u.drill.kind === 'det') return 'naming whole cases';
  if(u.drill.kind === 'err') return subj.errDrill.length + ' claims';
  return 'drill: ' + subj.quickDrills.find(q => q.key === u.drill.key).title.toLowerCase();
}

function oldDetCard(subj, d){
  return `<div class="block"><div class="card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
        <div style="display:flex;flex-direction:column;gap:5px">
          <span class="m a">All the questions</span>
          <span style="font-size:19px;font-weight:700;letter-spacing:-.02em">Name a case</span>
        </div>
        <span style="color:var(--accent);display:flex">${icon('target',26)}</span>
      </div>
      <p style="margin:0;font-size:14px;line-height:1.5;color:var(--dim)">${esc(detBlurb(subj))}</p>
      <div class="statrow">
        <span class="stat"><b>${d.n}/${subj.specimens.length}</b><span>Determined</span></span>
        <span class="stat"><b>${d.n ? d.label : '&mdash;'}</b><span>Name</span></span>
        <span class="stat"><b>${d.n ? d.frame : '&mdash;'}</b><span>Answers</span></span>
      </div>
      <button class="btn ghost sm" data-v="det">${d.n ? 'Go on naming cases' : 'Name a case'}</button>
    </div></div>`;
}
// the old drills (scored quick drills, faulty claims) and, for each finished rebuilt unit, "Practise again"
function drillsSection(subj, S){
  const old = !isFullyRebuilt(subj), again = againTilesHtml(subj) + claimsTileHtml(subj);
  if(!old && !again) return '';
  const tiles = old ? subj.quickDrills.map(q => {
    const sc = S.stats[q.key];
    const cls = !sc.n ? '' : (sc.ok === q.items.length ? 'ok' : 'part');
    return `<button class="tile" data-d="${q.key}">
          <span class="tt">${esc(q.title)}</span>
          <span class="tf"><span class="m s">${q.items.length} items</span>
            <b class="${cls}">${sc.n ? sc.ok + '/' + sc.n : '&mdash;'}</b></span>
        </button>`;
  }).join('') : '';
  const claims = old ? `<button class="tile un" data-v="err">
        <span class="tt">Faulty claims</span>
        <span class="tf"><span class="m s">${subj.errDrill.length} claims</span>
          <b>${S.stats.err.seen ? S.stats.err.seen + ' seen' : 'unscored'}</b></span>
      </button>` : '';
  const count = old ? `${subj.quickDrills.length} scored &middot; 1 not` : `${againUnits(subj).length} to practise again`;
  return `<div class="sect top"><span class="m">Drills</span><span class="m s">${count}</span></div>
    <div class="grid">${tiles}${claims}${again}</div>`;
}
function keyGlance(subj){
  if(!FC.get(subj.id).key) return '';
  const map = keyMapSection(subjectView(subj.id), 'plain');
  return map ? `<div class="sect"><span class="m">The questions at a glance</span></div>${map}<div style="padding-bottom:22px"></div>` : '';
}

function renderSubject(subj){
  const S = st(subj), c = S.course, d = S.stats.det;
  const done = unitsDone(subj), total = subj.course.length;
  const resumeText = resumeLabel(subj) === 'Resume the lesson'
    ? 'Resume Unit ' + subj.course[resumePoint(subj).ui].tag : resumeLabel(subj);

  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="library">${icon('back',18)}Library</button></div>

    <div style="display:flex;flex-direction:column;gap:12px;padding:10px 0 22px">
      <div style="display:flex;align-items:center;gap:10px">
        <span class="sigil" style="width:30px;height:30px;flex:0 0 30px">${subj.keyNo}</span>
        <span class="m">Subject ${subj.keyNo} &middot; Revision ${esc(subj.rev)}</span>
      </div>
      <h1 style="margin:0;font-size:34px;font-weight:800;letter-spacing:-.03em;line-height:1">${esc(subj.name)}</h1>
      <p style="margin:0;font-size:15px;line-height:1.5;color:var(--dim);max-width:34ch">${esc(subj.blurb)}</p>
    </div>

    <div style="display:flex;flex-direction:column;gap:10px;padding-bottom:20px">
      <div style="display:flex;align-items:baseline;justify-content:space-between;gap:10px">
        <span class="m">Progress</span>
        <span class="m" style="letter-spacing:.08em">${done} of ${total} units</span>
      </div>
      <div class="segs">${subj.course.map((_,i) => `<i class="${unitDone(subj,i)?'on':''}"></i>`).join('')}</div>
    </div>

    <div class="block"><button class="btn" id="resume">${resumeText}${icon('arrow',17)}</button></div>

    ${dueTileForSubject(subj)}
    ${keyGlance(subj)}
    ${isFullyRebuilt(subj) ? detCardNew(subj) : oldDetCard(subj, d)}

    <div class="sect"><span class="m">Course</span>
      <span class="m s">${total} units &middot; ${subj.cardCount} cards</span></div>
    <div class="rows">${subj.course.map((u,i) => unitRow(subj, u, i)).join('')}</div>

    ${drillsSection(subj, S)}

    <div style="padding-top:26px">
      <button class="row sm" data-ref="units">
        <span style="color:var(--label);display:flex">${icon('book',18)}</span>
        <span class="grow"><span class="t" style="font-weight:500">Reference &mdash; everything condensed</span></span>
        ${icon('chevron')}
      </button>
      <button class="row sm" data-ref="caveats">
        <span style="color:var(--label);display:flex">${icon('alert',18)}</span>
        <span class="grow"><span class="t" style="font-weight:500">Where these questions stop</span></span>
        ${icon('chevron')}
      </button>
    </div>
  </div>`;

  on('[data-v]', el => go(el.dataset.v));
  on('[data-u]', el => openUnit(subj, +el.dataset.u));
  on('[data-d]', el => go('drill', {drillKey: el.dataset.d}));
  on('[data-ref]', el => go('reference', {refMode: el.dataset.ref}));
  on('[data-due]', el => startDue(el.dataset.due));
  on('[data-again]', el => startAgain(subj.id, el.dataset.again));
  on('[data-claims]', () => startClaims(subj.id));
  on('#resume', () => resumeSubject(subj.id));
}

function detBlurb(subj){
  const d = subj.determination;
  const nSteps = d.gateCode
    ? 1 + Math.max(...Object.values(d.stepsByGate).map(a => a.length))
    : d.steps.length;
  return `${nSteps} question${nSteps===1?'':'s'} narrow ${subj.outcomes.length} names to one. `
       + `${cap(numWord(subj.specimens.length))} unlabelled cases.`;
}

/* A unit's row on the subject screen: an old unit shows its card count and drill, a rebuilt one its revision,
   its draft line and its place (lesson standard E15). */
function unitRow(subj, u, i){
  const c = st(subj).course, isDone = unitDone(subj, i), isNow = !isDone && i === c.u;
  const badge = isDone
    ? `<span class="sigil sm fill">${icon('check',13)}</span>`
    : `<span class="sigil sm ${isNow?'on':''}">${i+1}</span>`;
  const lines = isRebuilt(u) ? rebuiltRowLines(subj, u) : [oldRowMeta(subj, u, c, isNow)];
  return `<button class="row sm ${isDone?'done':''} ${isNow?'now':''}" data-u="${i}">
    ${badge}
    <span class="grow"><span class="t">${esc(u.title)}</span>
      ${lines.map(l => `<span class="s" ${isNow?'style="color:var(--accent)"':''}>${l}</span>`).join('')}</span>
    ${icon('chevron')}
  </button>`;
}
function oldRowMeta(subj, u, c, isNow){
  return isNow && (c.card > 0 || c.phase !== 'read')
    ? `Card ${c.card+1} of ${u.cards.length} &middot; in progress`
    : `${u.cards.length} card${u.cards.length===1?'':'s'} &middot; ${drillOf(u, subj)}`;
}
function rebuiltRowLines(subj, u){
  const status = rebuiltStatus(subj.id, u.id), at = (seenOf(subj.id)[u.id] || {}).at;
  const place = status !== 'progress' ? null
    : (u.cards.includes(at) ? `Card ${u.cards.indexOf(at) + 1} of ${u.cards.length}` : (at === 'drill' ? 'In the drill' : 'In the closing cards'));
  const first = [`Rev ${u.rev}`,
    status === 'again' ? 'Rebuilt: start again'
      : status === 'done' ? 'Done'
      : place ? `${place} &middot; in progress` : `${u.cards.length} cards &middot; drill`].join(' &middot; ');
  return [first, ...(u.status === 'draft' ? [esc(SAY.draft)] : [])];
}
