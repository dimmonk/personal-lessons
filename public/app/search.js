/* ===================== SEARCH ===================== */

let INDEX = null;
function searchIndex(){
  if(INDEX) return INDEX;
  INDEX = [];
  SUBJECTS.forEach(s => {
    INDEX.push({g:'Subjects', s, t:s.name, sub:`${s.course.length} units · ${s.quickDrills.length} drills`,
      go:() => openSubject(s.id)});
    s.course.forEach((u,i) => INDEX.push({g:'Units', s, t:u.title,
      sub:`${s.name} · Unit ${u.tag}${isRebuilt(u) ? ' · rev ' + u.rev : ''} · ${u.cards.length} cards`, go:() => openUnit(s, i)}));
    s.outcomes.forEach(o => INDEX.push({g:'Tools', s, t:o.n,
      sub:`${s.name} · one of ${s.outcomes.length} outcomes`, go:() => openSubject(s.id)}));
    s.quickDrills.forEach(q => INDEX.push({g:'Drills', s, t:q.title,
      sub:`${s.name} · ${q.items.length} items`,
      go:() => { APP.subjectId = s.id; touch(s.id); go('drill', {drillKey:q.key}); }}));
    s.specimens.forEach((sp,i) => INDEX.push({g:'Specimens', s, t:sp.q, quote:true,
      sub:`${s.name} · specimen ${pad2(i+1)}`,
      go:() => { APP.subjectId = s.id; touch(s.id); st(s).detState = Object.assign(freshDet(), {i}); go('det'); }}));
    s.errDrill.forEach((e,i) => INDEX.push({g:'Faulty claims', s, t:e.q, quote:true,
      sub:`${s.name} · claim ${pad2(i+1)}`,
      go:() => { APP.subjectId = s.id; touch(s.id); st(s).errState = {i, picked:null}; go('err'); }}));
  });
  return INDEX;
}

function hl(text, q){
  if(!q) return esc(text);
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if(i < 0) return esc(text);
  return esc(text.slice(0,i)) + '<mark>' + esc(text.slice(i, i+q.length)) + '</mark>' + esc(text.slice(i+q.length));
}
const clip = (s, n) => s.length > n ? s.slice(0, n).replace(/\s+\S*$/,'') + '…' : s;

function renderSearch(){
  screenEl().innerHTML = `<div class="pane">
    <div style="display:flex;align-items:center;gap:10px;padding:14px 0 12px">
      <label class="searchfield live" style="flex-grow:1;min-width:0">${icon('search',16)}
        <input id="q" type="search" placeholder="Search subjects, units, drills" autocomplete="off" spellcheck="false">
      </label>
      <button class="linkbtn" data-v="library" style="font-family:var(--sans);font-size:15px;letter-spacing:0;text-transform:none">Cancel</button>
    </div>
    <div id="results"></div>
  </div>`;
  on('[data-v]', el => go(el.dataset.v));
  const input = document.getElementById('q');
  input.value = APP.query;
  input.oninput = () => { APP.query = input.value; paintResults(); };
  paintResults();
  input.focus();
}

function paintResults(){
  const box = document.getElementById('results');
  if(!box) return;
  const q = APP.query.trim();
  if(!q){
    box.innerHTML = `<p class="empty">Everything is searchable &mdash; subject names, unit titles,
      the tools in each key, drill items and the specimens themselves.</p>`;
    return;
  }
  const hits = searchIndex().filter(e => e.t.toLowerCase().includes(q.toLowerCase()));
  if(!hits.length){ box.innerHTML = `<p class="empty">Nothing matches &ldquo;${esc(q)}&rdquo;.</p>`; return; }

  const order = ['Subjects','Units','Tools','Drills','Specimens','Faulty claims'];
  const groups = order.map(g => [g, hits.filter(h => h.g === g)]).filter(([,list]) => list.length);
  let n = 0;

  box.innerHTML = `<div style="padding:0 0 16px"><span class="m s">${hits.length} result${hits.length===1?'':'s'}
      across ${new Set(hits.map(h => h.s.id)).size} subject${new Set(hits.map(h => h.s.id)).size===1?'':'s'}</span></div>`
    + groups.map(([g, list]) => `<div class="resgroup">
      <span class="m s" style="padding-bottom:6px">${esc(g)}</span>
      ${list.slice(0,6).map(h => {
        const idx = n++;
        return `<button class="res" data-i="${idx}" style="--accent:${h.s.accent}">
          <span class="tag">${h.s.keyNo}</span>
          <span class="grow">
            <span class="t ${h.quote?'q':''}">${h.quote ? '&ldquo;' + hl(clip(h.t,96), q) + '&rdquo;' : hl(h.t, q)}</span>
            <span class="s">${esc(h.sub)}</span>
          </span>
          ${icon('chevron',15)}
        </button>`;
      }).join('')}
      ${list.length > 6 ? `<span class="m s" style="padding:6px 0">+ ${list.length-6} more</span>` : ''}
    </div>`).join('');

  const flat = groups.flatMap(([,list]) => list.slice(0,6));
  on('[data-i]', el => flat[+el.dataset.i].go(), box);
}
