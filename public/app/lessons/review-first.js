/* ===================== SCREENS: "REVIEW THESE FIRST" ===================== */
// Lesson standard E12: no hard gate. When the learner opens a unit that leans on an earlier one, and their first-try
// accuracy on that earlier unit's naming and single-question stages was half or less, on at least four first tries, the app
// says so, lists that unit's names that are due or were missed, and lets the learner go straight on. The figure is computed
// from the practice record; nothing is stored here.

const REVIEW_SAY = {
  heading: 'Review these first',
  lead: (unit, ok, n, now) => `In ${unit} you got ${ok} of ${n} right on the first try in the naming and single-question stages. That is half or fewer, and ${now} leans on it. Nothing is locked: you can go straight on.`,
  names: 'Names from that unit that are due, or that you missed',
  noNames: 'None of its names is due yet.',
  practise: unit => `Practise ${unit} again`,
  goOn: unit => `Go on to ${unit}`
};
// the items of the name and piece stages; fewer than this many first tries is too few to say anything (E12)
const REVIEW_MODES = ['name', 'piece', 'tell', 'reverse', 'separator'];
const REVIEW_MIN_TRIES = 4;

// first-try accuracy of the learner's own drill on the earlier unit: { n, ok }
function assumedAccuracy(subjectId, unitId){
  const firsts = Object.entries(itemsOf(subjectId))
    .filter(([key]) => key.startsWith(unitId + '/'))
    .map(([, entry]) => entry.tries[0])
    .filter(t => t && t.context === 'unit' && REVIEW_MODES.includes(t.mode));
  return { n: firsts.length, ok: firsts.filter(t => t.ok).length };
}
// the names of one unit that are due today or were missed on a first try in its own drill
function namesToReview(subjectId, unitId){
  const v = unitView(subjectId, unitId), due = dueReturns(subjectId).filter(d => d.unitId === unitId).map(d => d.target);
  const missed = v.casesOf(unitId).filter(c => { const first = triesOf(subjectId, unitId, c.id)[0]; return first && first.context === 'unit' && !first.ok; })
    .map(c => caseTarget(v, c));
  return [...new Set([...due, ...missed])].filter(id => v.taught.includes(id));
}
// null when there is nothing to say, else [{ unitId, n, ok }] for the assumed units that were hard
function reviewFirstFor(subj, entry){
  if(!['new', 'again'].includes(rebuiltStatus(subj.id, entry.id))) return null;
  const data = FC.get(subj.id), assumed = data.units[entry.id].assumes.filter(id => data.units[id]);
  const hard = assumed.map(unitId => ({ unitId, ...assumedAccuracy(subj.id, unitId) })).filter(a => a.n >= REVIEW_MIN_TRIES && a.ok * 2 <= a.n);
  return hard.length ? hard : null;
}

function renderReviewFirst(subj){
  const ui = APP.reviewUnit, entry = subj.course[ui], hard = entry && reviewFirstFor(subj, entry);
  if(!hard) return go('subject');
  const now = `Unit ${entry.tag}`;
  const blocks = hard.map(({ unitId, n, ok }) => {
    const v = unitView(subj.id, unitId), unit = `Unit ${v.unit.tag}`, names = namesToReview(subj.id, unitId);
    return `<div class="lsec"><p>${esc(REVIEW_SAY.lead(unit, ok, n, now))}</p>${lessonLabel(REVIEW_SAY.names)}
      ${names.length ? lessonList(names.map(id => `${esc(cap(v.thing(id).plain))}: <span class="kw">${esc(v.nameOf(id))}</span>`)) : `<p>${esc(REVIEW_SAY.noNames)}</p>`}
      <button class="btn ghost" data-practise="${esc(unitId)}">${esc(REVIEW_SAY.practise(unit))}</button></div>`;
  }).join('');
  screenEl().innerHTML = `<div class="pane read" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="subject">${icon('back', 18)}${esc(subj.name)}</button></div>
    <div class="eyebrow-row"><span class="m a">${esc(now)} &middot; ${esc(entry.title)}</span><h1>${REVIEW_SAY.heading}</h1></div>
    <div class="lesson reviewfirst">${blocks}</div>
    <div class="actbar"><button class="btn" id="goOn">${esc(REVIEW_SAY.goOn(now))}${icon('arrow')}</button></div></div>`;
  on('[data-v]', el => go(el.dataset.v));
  on('[data-practise]', el => startAgain(subj.id, el.dataset.practise));
  on('#goOn', () => beginRebuiltUnit(subj, entry));
}
