/* ===================== SCREENS: SEARCH ===================== */
// Lesson standard E14: search indexes headings, names, key questions and case text from the new fields. Only text a
// learner has a right to see is indexed: the stories on cards, never a drill or return case (the learner has not met
// those, and a return needs one they have not seen).

let INDEX = null;
function searchIndex(){
  if(INDEX) return INDEX;
  INDEX = SUBJECTS.flatMap(s => [
    {g:'Subjects', s, t:s.name, sub:`${s.course.length} units`, go:() => openSubject(s.id)},
    ...s.course.map((u,i) => ({g:'Units', s, t:u.title,
      sub:`${s.name} · Unit ${u.tag} · rev ${u.rev} · ${u.cards.length} cards`, go:() => openUnit(s, i)})),
    ...subjectSearchEntries(s)
  ]);
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
        <input id="q" type="search" placeholder="Search subjects, units, cards" autocomplete="off" spellcheck="false">
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
      the names and questions in each subject, the cases on the cards and the whole cases for naming.</p>`;
    return;
  }
  const hits = searchIndex().filter(e => e.t.toLowerCase().includes(q.toLowerCase()));
  if(!hits.length){ box.innerHTML = `<p class="empty">Nothing matches &ldquo;${esc(q)}&rdquo;.</p>`; return; }

  const order = ['Subjects','Units','Cards','Names','Questions','Cases','Whole cases'];
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

const plainOf = html => { const el = document.createElement('div'); el.innerHTML = html; return el.textContent.replace(/\s+/g, ' ').trim(); };

function openCardAt(subj, unitIndex, cardId){
  openUnit(subj, unitIndex);
  if(APP.view === 'unit') moveTo(UNIT_RUN.flow.findIndex(s => s.type === 'card' && s.id === cardId));
}
function openReference(subj){
  APP.subjectId = subj.id; touch(subj.id);
  go('reference', { refMode: 'units' });
}
function unitSearchEntries(subj, unitId){
  const v = unitView(subj.id, unitId), T = lessonText(v), at = subj.course.findIndex(u => u.id === unitId);
  const where = `${subj.name} · Unit ${v.unit.tag}`;
  const cards = v.cardOrder.map(v.card).filter(card => !card.continues).map(card => ({ g: 'Cards', s: subj, t: plainOf(cardHeading(v, T, card)),
    sub: `${where} · card ${v.cardOrder.indexOf(card.id) + 1}`, go: () => openCardAt(subj, at, card.id) }));
  const cases = v.casesOf(unitId).filter(c => !c.kind && (c.use === 'teach' || c.use === 'check') && c.text)
    .map(c => ({ g: 'Cases', s: subj, t: c.text, quote: true, sub: `${where} · ${c.name || 'a case on a card'}`, go: () => openUnit(subj, at) }));
  return [...cards, ...cases];
}
function subjectSearchEntries(subj){
  const sv = subjectView(subj.id);
  const steps = [sv.key.gate, ...sv.key.gate.options.flatMap(o => sv.key.branches[o.id] || [])];
  const names = mapNames(sv).map(t => ({ g: 'Names', s: subj, t: t.n, sub: `${subj.name} · ${t.plain}`, go: () => openReference(subj) }));
  const questions = steps.map(step => ({ g: 'Questions', s: subj, t: step.q, sub: `${subj.name} · a question`, go: () => openReference(subj) }));
  const specimens = sv.data.specimens.map((sp, i) => ({ g: 'Whole cases', s: subj, t: sp.text, quote: true,
    sub: `${subj.name} · case ${pad2(i + 1)}`, go: () => openSpecimen(subj.id, sp.id) }));
  return [...sv.unitIds().flatMap(unitId => unitSearchEntries(subj, unitId)), ...names, ...questions, ...specimens];
}
