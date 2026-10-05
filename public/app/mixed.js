/* ===================== MIXED DRILL ===================== */

const MIXED = storageLoad('pl:mixed', {n:0, ok:0});

// A round: what is due first (names from finished rebuilt units, on cases not seen before), then a random draw from the
// old drills' items and from single-question and name items of finished rebuilt units (mixed-new.js).
function buildMixed(n){
  const old = [];
  SUBJECTS.forEach(s => s.quickDrills.forEach(q => q.items.forEach(it => old.push({s, q, it}))));
  const fresh = buildMixedNew(), due = fresh.due.slice(0, n);
  const rest = shuffled([...old, ...fresh.pool]).slice(0, Math.max(0, n - due.length));
  return {items: [...due, ...rest], i:0, picked:null, n:0, ok:0};
}

function renderMixed(){
  if(!APP.mixed) APP.mixed = buildMixed(12);
  const M = APP.mixed;

  if(M.i >= M.items.length){
    screenEl().innerHTML = `<div class="pane">
      <div class="topbar"><span class="m">Mixed drill</span></div>
      <div class="done-screen">
        <span style="color:var(--accent);display:flex">${icon('check',34)}</span>
        <h2>Round complete</h2>
        <p><b>${M.ok}</b> correct of <b>${M.n}</b>, drawn from ${SUBJECTS.length} subjects. Lifetime: ${lifetimeFigure()}.${MIXED.n ? ` ${esc(MIXED_SAY.oldLifetime(MIXED.ok, MIXED.n))}` : ''}</p>
        <div style="display:flex;flex-direction:column;gap:10px;width:100%;max-width:300px;padding-top:6px">
          <button class="btn" id="again">New round</button>
          <button class="btn ghost" data-v="library">Back to the library</button>
        </div>
      </div></div>`;
    on('#again', () => { APP.mixed = buildMixed(12); render(); });
    on('[data-v]', el => go(el.dataset.v));
    return;
  }

  if(M.items[M.i].built) return renderMixedAsk(M, M.items[M.i]);
  const {s: subj, q, it} = M.items[M.i];
  const ans = answerOf(q, it), answered = M.picked !== null, ok = answered && M.picked === ans;

  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar">
      <span class="m">Mixed drill</span>
      <span class="m s">${pad2(M.i+1)} / ${M.items.length}</span>
    </div>
    <p class="hintline">${esc(MIXED_SAY.frame)}</p>
    <div style="display:flex;align-items:center;gap:10px;padding:18px 0 14px">
      <span class="sigil" style="width:26px;height:26px;flex:0 0 26px;font-size:10px">${subj.keyNo}</span>
      <span class="m a">${esc(subj.name)} &middot; ${esc(q.title)}</span>
    </div>
    <blockquote class="passage ${q.plain?'plain':''}">${esc(it.q)}</blockquote>
    <div style="display:flex;flex-direction:column;gap:12px">
      <span class="m">${esc(q.prompt)}</span>
      <div class="opts" id="opts">${q.opts.map(o =>
        `<button class="opt ${M.picked===o?'sel':''}" data-o="${esc(o)}" ${answered?'disabled':''}>${esc(o)}</button>`).join('')}</div>
    </div>
    ${answered ? `<div style="display:flex;flex-direction:column;gap:18px;padding-top:22px">
      <div class="marks"><span class="mark ${ok?'':'no'}">${icon(ok?'check':'cross',13)}${ok?'Correct':'Missed &mdash; ' + esc(ans)}</span></div>
      <div class="vblock"><span class="m">Why</span><p>${esc(it.w)}</p></div>
    </div>` : ''}
    <div class="score">
      <span class="stat"><b>${M.n}</b><span>This round</span></span>
      <span class="stat"><b>${M.ok}</b><span>Correct</span></span>
      <span class="stat"><b>${lifetimeFigure()}</b><span>Lifetime</span></span>
      ${MIXED.n ? `<span class="stat"><b>${MIXED.ok}/${MIXED.n}</b><span>${esc(MIXED_SAY.oldStat)}</span></span>` : ''}
    </div>
    ${answered ? `<div class="actbar"><button class="btn" id="next">${M.i===M.items.length-1?'Finish':'Next item'}${icon('arrow')}</button></div>` : ''}
  </div>`;

  on('#opts .opt', el => {
    if(M.picked !== null) return;
    M.picked = el.dataset.o; M.n++; MIXED.n++;
    if(M.picked === ans){ M.ok++; MIXED.ok++; }
    storageSave('pl:mixed', MIXED);
    render();
  });
  on('#next', () => { M.i++; M.picked = null; render(); window.scrollTo(0,0); });
}
