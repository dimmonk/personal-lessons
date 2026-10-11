/* ===================== LESSONS: WHAT COMES BACK, AND WHEN ===================== */
// Lesson standard 26.4. What the review schedules is a strand: one thing that comes back as a new instance. A strand is due 2 days
// after its lesson's check or after a miss, then 7 days after its first good session, then 24 days after the second, and leaves
// the schedule after the third (R2, R4, R6). Everything here is worked out from the practice record; nothing is stored.

/* ---------- which items belong where ---------- */
// lessons in part order (a baseline has no part and comes first)
function lessonsInOrder(data){
  const rank = l => l.part === null ? -1 : (data.meta.parts || []).findIndex(p => p.id === l.part);
  return Object.values(data.lessons).sort((a, b) => rank(a) - rank(b));
}
// the ids a lesson's flow and check name: the items that are not left in reserve
function usedIds(data){
  const ids = new Set();
  Object.values(data.lessons).forEach(l => {
    l.flow.forEach(step => {
      if(step.worked) ids.add(step.worked);
      if(step.set) flatRefs(step.set.items).forEach(r => ids.add(refId(r)));
    });
    if(!checkIsDrawn(l.check)) flatRefs(l.check.items).forEach(r => ids.add(refId(r)));
  });
  return ids;
}
const strandDefs = (data, strandId) => [...Object.values(data.items), ...Object.values(data.gens)].filter(d => d.strand === strandId);
// the strands a lesson's check covers
function checkStrands(data, lesson){
  if(checkIsDrawn(lesson.check)) return lesson.check.items.draw.strands;
  return [...new Set(flatRefs(lesson.check.items).map(r => (definitionOf(data, refId(r)) || {}).strand).filter(Boolean))];
}
const lessonsCovering = (data, strandId) => lessonsInOrder(data).filter(l => checkStrands(data, l).includes(strandId));

/* ---------- when a strand is due ---------- */
// { [strandId]: { lessonId, level, due } } for every strand whose lesson check has been completed. `due` is null once it has left.
function strandSchedules(data, subjectId){
  const review = data.meta.review || {}, gaps = review.gaps || RETURN_GAPS, every = review.every;
  const firsts = firstTriesOutside(subjectId, ['baseline']), out = {};
  for(const strand of data.meta.strands){
    const covering = lessonsCovering(data, strand.id);
    const checkDays = covering.flatMap(l => completeRuns(data, subjectId, l).map(r => r.d)).sort();
    if(!checkDays.length) continue;
    const byDay = {};
    firsts.filter(({ key }) => (definitionOf(data, key) || {}).strand === strand.id)
      .forEach(({ t }) => { byDay[t.d] = [...(byDay[t.d] || []), t.ok]; });
    let anchor = checkDays[0], good = [];
    Object.keys(byDay).sort().filter(d => d > checkDays[0]).forEach(d => {
      if(byDay[d].some(ok => !ok)){ anchor = d; good = []; } else good = [...good, d];
    });
    const level = good.length;
    const due = level < gaps.length ? addDays(level === 0 ? anchor : good[level - 1], gaps[level]) : every ? addDays(good[good.length - 1], every) : null;
    out[strand.id] = { lessonId: covering[0].id, level, due };
  }
  return out;
}
// the strands due on or before `through`, earliest first: [{ strand, lessonId, due }]
function dueStrands(data, subjectId, through){
  const schedules = strandSchedules(data, subjectId);
  return data.meta.strands.filter(s => schedules[s.id] && schedules[s.id].due && schedules[s.id].due <= through)
    .map(s => ({ strand: s, lessonId: schedules[s.id].lessonId, due: schedules[s.id].due }))
    .sort((a, b) => a.due < b.due ? -1 : a.due > b.due ? 1 : 0);
}
// the earliest day after `after` on which anything of a subject falls due, or null
function nextDueDay(data, subjectId, after){
  const days = [...Object.values(strandSchedules(data, subjectId)).map(s => s.due), ...retestDays(data, subjectId).map(r => r.due)]
    .filter(d => d && d > after).sort();
  return days[0] || null;
}

/* ---------- retests ---------- */
// a check with `retest: n` comes back once, whole, on new items, n days after its first complete run (26.4)
function retestDays(data, subjectId){
  return lessonsInOrder(data).filter(l => l.check.retest && completeRuns(data, subjectId, l).length && !completeRuns(data, subjectId, l, 'retest').length)
    .map(l => ({ lesson: l, due: addDays(completeRuns(data, subjectId, l)[0].d, l.check.retest) }));
}
const retestsDue = (data, subjectId, through) => retestDays(data, subjectId).filter(r => r.due <= through);

/* ---------- fresh instances ---------- */
const lastTryRun = (subjectId, key) => { const t = triesOf(subjectId, key); return t.length ? t[t.length - 1].run : ''; };
// a seed no earlier try of this generator used
function freshSeed(subjectId, genId, run, k){
  const used = new Set(triesOf(subjectId, genId).map(t => t.seed));
  let seed = hashSeed(`${run}|${genId}|${k}`);
  while(used.has(seed)) seed = (seed + 1) >>> 0;
  return seed;
}
const genRef = (gen, extra = {}) => ({ gen: gen.id, n: 1, ...extra });
function freshInstance(data, subjectId, def, run, k){
  return def.make ? instanceOf(data, genRef(def), freshSeed(subjectId, def.id, run, k)) : instanceOf(data, def.id);
}
// Definitions in the order they should come back: never seen first, then the least recently seen. Ties keep their listed order.
function leastSeen(subjectId, defs){
  return defs.map((d, i) => ({ d, i, run: lastTryRun(subjectId, d.id) })).sort((a, b) => a.run < b.run ? -1 : a.run > b.run ? 1 : a.i - b.i).map(x => x.d);
}
// One instance of a strand that the learner has not seen: fresh numbers if the strand has a generator, else an item held in reserve
// that was never tried. When none is left, the least recently seen item comes back and `repeat` says so (E9's rule, kept).
function strandInstance(data, subjectId, strandId, run, k, taken, facets){
  const defs = strandDefs(data, strandId).filter(d => !taken.includes(d.id) || d.make);
  const gens = defs.filter(d => d.make);
  // a strand with several generators (Math's printed totals: right ones and wrong ones) draws among them, by the run, among those that
  // match the facets asked for (a retest); taking them in turn would always hand the first kind to a one-question review
  if(gens.length){
    const alike = facets ? gens.filter(g => whereMatches(facets, g.facets)) : gens, pool = alike.length ? alike : gens;
    return { inst: freshInstance(data, subjectId, pool[hashSeed(`${run}|${strandId}|${k}`) % pool.length], run, k), repeat: false };
  }
  const used = usedIds(data), fixed = defs.filter(d => !d.make);
  const near = list => facets ? [...list.filter(d => Object.entries(facets).every(([f, v]) => (d.facets || {})[f] === v)), ...list] : list;
  const bank = leastSeen(subjectId, fixed.filter(d => !used.has(d.id) && !seenBefore(subjectId, d.id)));
  if(bank.length) return { inst: instanceOf(data, near(bank)[0].id), repeat: false };
  const again = [...leastSeen(subjectId, fixed.filter(d => seenBefore(subjectId, d.id))), ...fixed.filter(d => !seenBefore(subjectId, d.id))];
  return again.length ? { inst: instanceOf(data, near(again)[0].id), repeat: true } : null;
}
// The instances of a drawn check: n of the listed strands' items, the never-seen first, then the least recently seen.
function drawInstances(data, subjectId, draw, run, taken){
  const defs = draw.strands.flatMap(s => strandDefs(data, s)).filter(d => !taken.includes(d.id));
  const gens = defs.filter(d => d.make), fixed = leastSeen(subjectId, defs.filter(d => !d.make));
  const picks = [...fixed.slice(0, draw.n)];
  for(let k = 0; picks.length < draw.n && gens.length; k++) picks.push(gens[k % gens.length]);
  return shuffled(picks, hashSeed(`${run}|draw`)).map((d, k) => freshInstance(data, subjectId, d, run, k));
}
// A check's items on new questions: one new instance of the strand (and the facets) of each original, or a new draw.
function retestInstances(data, subjectId, lesson, run){
  if(checkIsDrawn(lesson.check)) return drawInstances(data, subjectId, lesson.check.items.draw, run, []);
  const taken = [], out = [];
  flatRefs(lesson.check.items).forEach(ref => {
    const original = definitionOf(data, refId(ref));
    for(let k = 0; k < refCount(ref); k++){
      const pick = strandInstance(data, subjectId, original.strand, run, out.length, taken, original.facets);
      if(pick){ out.push(pick.inst); if(pick.inst.seed === undefined) taken.push(pick.inst.key); }
    }
  });
  return lesson.check.order === 'shuffle' ? shuffled(out, hashSeed(`${run}|retest`)) : out;
}
