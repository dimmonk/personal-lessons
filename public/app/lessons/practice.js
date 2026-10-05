/* ===================== SCREENS: RUNS OUTSIDE A UNIT ===================== */
// A returned set ("Due today") and "Practise again" are drill runs that live on their own screens, not inside a unit.
// Both are built by the engine (returnSetRun, unitDrillRun in drill.js) and asked by its runner (mountDrillRun); this
// file hosts them (paintDrillScreen gives each its Back control), and ends each on the results screen (lesson standard E10, E11, E14).
// PRACTICE is this visit's working state; what is learned is stored by the engine, in the practice record.

let PRACTICE = null;   // { kind: 'due' | 'again' | 'claims', subj, run, ... }

/* ---------- Practise again: the drill from the piece stage on, the least recently seen cases first ---------- */
const lastSeenDay = (subjectId, unitId, id) => { const t = triesOf(subjectId, unitId, id); return t.length ? t[t.length - 1].d : ''; };
function rawItemId(raw){
  if(typeof raw === 'string') return raw;
  return raw.tell ? 'tell:' + raw.tell : (raw.case || null);
}
const byDay = (a, b) => a < b ? -1 : a > b ? 1 : 0;
function recencyQueue(v, rung){
  const seen = raw => { const id = rawItemId(raw); return id ? lastSeenDay(v.subjectId, v.unitId, id) : ''; };
  const groupSeen = group => group.map(seen).sort(byDay).pop();
  return TIER_BANDS
    .flatMap(tier => rung.items.filter(group => specTier(v, group[0]) === tier).sort((a, b) => byDay(groupSeen(a), groupSeen(b))))
    .flatMap(group => shuffled(group).sort((a, b) => byDay(seen(a), seen(b))));
}
function againRun(subj, v){
  const run = unitDrillRun(subj, v, 'again', 'piece');
  return { ...run, leave: () => go('subject'),
           stages: run.stages.map(stage => ({ ...stage, queue: recencyQueue(v, v.unit.drill.rungs.find(r => r.ask === stage.ask)) })) };
}
function startAgain(subjectId, unitId){
  const subj = SUBJECTS.find(s => s.id === subjectId), v = unitView(subjectId, unitId);
  APP.subjectId = subjectId; touch(subjectId);
  PRACTICE = { kind: 'again', subj, unitId, run: againRun(subj, v) };
  go('again');
}
function renderAgain(subj){
  if(!PRACTICE || PRACTICE.kind !== 'again' || PRACTICE.subj.id !== subj.id) return go('subject');
  const { unitId } = PRACTICE, v = unitView(subj.id, unitId);
  paintDrillScreen(subj, PRACTICE.run, `Unit ${esc(v.unit.tag)} &middot; Practise again`, run => {
    logEvent('set', { subject: subj.id, unit: unitId, rev: v.unit.rev });
    paintPracticeResults(subj, run, `<button class="btn" id="redo">Practise again</button>
      <button class="btn ghost" data-v="subject">Back to ${esc(subj.name)}</button>`, () => on('#redo', () => startAgain(subj.id, unitId)));
  });
}

/* ---------- Faulty claims: the claims of the finished units, asked as the drill asks them (E14) ---------- */
// Every claim a finished unit's drill asks. The claim worked for the learner there is not asked here, and the commit comes first:
// the learner answers before the fault is shown.
const claimItems = subj => againUnits(subj).flatMap(u => {
  const rung = unitView(subj.id, u.id).unit.drill.rungs.find(r => r.ask === 'claim');
  return rung ? rung.items.flat().map(caseId => ({ unitId: u.id, caseId })) : [];
});
function startClaims(subjectId){
  const subj = SUBJECTS.find(s => s.id === subjectId);
  APP.subjectId = subjectId; touch(subjectId);
  PRACTICE = { kind: 'claims', subj, run: { ...claimsRun(subj, claimItems(subj)), leave: () => go('subject') } };
  go('claims');
}
function renderClaims(subj){
  if(!PRACTICE || PRACTICE.kind !== 'claims' || PRACTICE.subj.id !== subj.id) return go('subject');
  paintDrillScreen(subj, PRACTICE.run, esc(SAY.claimsTitle), run => {
    logEvent('set', { subject: subj.id });
    paintPracticeResults(subj, run, `<button class="btn" id="redo">${esc(SAY.claimsTitle)}</button>
      <button class="btn ghost" data-v="subject">Back to ${esc(subj.name)}</button>`, () => on('#redo', () => startClaims(subj.id)));
  });
}

// the finished runs' results screen: the engine's own figures, then what the learner can do next
function paintPracticeResults(subj, run, actionsHtml, wire){
  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="subject">${icon('back', 18)}${esc(subj.name)}</button></div>
    ${runResultsHtml(run)}
    <div class="actbar">${actionsHtml}</div></div>`;
  on('[data-v]', el => go(el.dataset.v));
  wire();
  window.scrollTo(0, 0);
  focusScreenHead();
}

// "Practise again" tiles for the finished rebuilt units of a subject, and one for their faulty claims
const againUnits = subj => subj.course.filter((u, i) => isRebuilt(u) && unitDone(subj, i));
const againTilesHtml = subj => againUnits(subj).map(u => `<button class="tile" data-again="${esc(u.id)}">
    <span class="tt">Practise again &middot; Unit ${esc(u.tag)}</span>
    <span class="tf"><span class="m s">${esc(u.title)}</span><b>${icon('arrow', 14)}</b></span></button>`).join('');
function claimsTileHtml(subj){
  const n = claimItems(subj).length;
  return n ? `<button class="tile" data-claims>
    <span class="tt">${esc(SAY.claimsTitle)} &middot; finished units</span>
    <span class="tf"><span class="m s">${esc(SAY.claimsTile(n))}</span><b>${icon('arrow', 14)}</b></span></button>` : '';
}
