/* ===================== SUBJECT INDEX ===================== */

// "Practice again" for each finished unit, and the faulty claims of the finished units
function drillsSection(subj){
  const again = againTilesHtml(subj) + claimsTileHtml(subj);
  if(!again) return '';
  return `<div class="sect top"><span class="m">Drills</span><span class="m s">${againUnits(subj).length} to practice again</span></div>
    <div class="grid">${again}</div>`;
}
function keyGlance(subj){
  return `<div class="sect"><span class="m">The questions at a glance</span></div>${keyMapSection(subjectView(subj.id), 'plain')}<div style="padding-bottom:22px"></div>`;
}

function renderSubject(subj){
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

    ${keyGlance(subj)}
    ${detCard(subj)}

    <div class="sect"><span class="m">Course</span>
      <span class="m s">${total} units &middot; ${subj.cardCount} cards</span></div>
    <div class="rows">${subj.course.map((u,i) => unitRow(subj, u, i)).join('')}</div>

    ${drillsSection(subj)}

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
  on('[data-ref]', el => go('reference', {refMode: el.dataset.ref}));
  on('[data-again]', el => startAgain(subj.id, el.dataset.again));
  on('[data-claims]', () => startClaims(subj.id));
  on('#resume', () => resumeSubject(subj.id));
}

/* A unit's row on the subject screen: its revision, its draft line and its place (lesson standard E15). */
function unitRow(subj, u, i){
  const isDone = unitDone(subj, i), isNow = !isDone && i === st(subj).course.u;
  const badge = isDone
    ? `<span class="sigil sm fill">${icon('check',13)}</span>`
    : `<span class="sigil sm ${isNow?'on':''}">${i+1}</span>`;
  const lines = rowLines(subj, u);
  return `<button class="row sm ${isDone?'done':''} ${isNow?'now':''}" data-u="${i}">
    ${badge}
    <span class="grow"><span class="t">${esc(u.title)}</span>
      ${lines.map(l => `<span class="s" ${isNow?'style="color:var(--accent)"':''}>${l}</span>`).join('')}</span>
    ${icon('chevron')}
  </button>`;
}
function rowLines(subj, u){
  const status = rebuiltStatus(subj.id, u.id), at = (seenOf(subj.id)[u.id] || {}).at;
  const place = status !== 'progress' ? null
    : (u.cards.includes(at) ? `Card ${u.cards.indexOf(at) + 1} of ${u.cards.length}` : (at === 'drill' ? 'In the drill' : 'In the closing cards'));
  const first = [`Rev ${u.rev}`,
    status === 'again' ? 'Rebuilt: start again'
      : status === 'done' ? 'Done'
      : place ? `${place} &middot; in progress` : `${u.cards.length} cards &middot; drill`].join(' &middot; ');
  return [first, ...(u.status === 'draft' ? [esc(SAY.draft)] : [])];
}
