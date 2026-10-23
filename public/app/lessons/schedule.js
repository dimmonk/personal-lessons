/* ===================== LESSONS: WHAT COMES BACK, AND WHEN ===================== */
// Lesson standard 6. What the review schedules is a strand: one thing that comes back as a new instance. A strand is due 2 days
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
  if(checkIsDrawn(lesson.check)) return drawStrands(data, lesson.check.items.draw);
  return [...new Set(flatRefs(lesson.check.items).map(r => (definitionOf(data, refId(r)) || {}).strand).filter(Boolean))];
}
// a baseline measures and teaches nothing, so it never owns a topic or starts the schedule of one
const lessonsCovering = (data, strandId) => lessonsInOrder(data).filter(l => l.role !== 'baseline' && checkStrands(data, l).includes(strandId));

/* ---------- the interview date: rounds about a week apart in the six weeks before it (6, Civics principle 4) ---------- */
const ROUND_WEEKS = 6;
// the day the learner entered, read from the record's `review.dateField` ('answers.interviewDate'); null when there is none, it is not a day, or it has passed
function interviewDay(data, subjectId){
  const field = (data.meta.review || {}).dateField;
  if(!field) return null;
  const [slot, key] = field.split('.'), value = (notesOf(subjectId)[slot] || {})[key];
  return typeof value === 'string' && ownValidDay(value) && value >= today() ? value : null;
}
// the days of the rounds, a week apart, the last one a week before the date
const roundDays = day => Array.from({ length: ROUND_WEEKS }, (_, k) => addDays(day, -7 * (ROUND_WEEKS - k)));

/* ---------- when a strand is due ---------- */
// { [strandId]: { lessonId, level, due } } for every strand whose lesson check has been completed. `due` is null once it has left.
function strandSchedules(data, subjectId){
  const review = data.meta.review || {}, gaps = review.gaps || RETURN_GAPS, every = review.every;
  const firsts = firstTriesOutside(subjectId, ['baseline']), out = {}, date = interviewDay(data, subjectId), rounds = date ? roundDays(date) : null;
  for(const strand of data.meta.strands){
    const covering = lessonsCovering(data, strand.id);
    const checkDays = covering.flatMap(l => completeRuns(data, subjectId, l).map(r => r.d)).sort();
    if(!checkDays.length) continue;
    const byDay = {};
    firsts.filter(({ key }) => (definitionOf(data, key) || {}).strand === strand.id)
      .forEach(({ t }) => { byDay[t.d] = [...(byDay[t.d] || []), t.ok && !triesClaimed(t)]; });   // a claimed answer is not a good day
    let anchor = checkDays[0], good = [];
    Object.keys(byDay).sort().filter(d => d > checkDays[0]).forEach(d => {
      if(byDay[d].some(ok => !ok)){ anchor = d; good = []; } else good = [...good, d];
    });
    const level = good.length;
    const due = level < gaps.length ? addDays(level === 0 ? anchor : good[level - 1], gaps[level]) : every ? addDays(good[good.length - 1], every) : null;
    // before an interview date the strand also comes back in the next round it has not been tried in since
    const round = rounds ? rounds.find(r => r > [...Object.keys(byDay), checkDays[0]].sort().pop()) : null;
    out[strand.id] = { lessonId: covering[0].id, level, due: round && (!due || round < due) ? round : due };
  }
  return out;
}
// the strands due on or before `through`, earliest first: [{ strand, lessonId, due }]
function dueStrands(data, subjectId, through){
  const schedules = strandSchedules(data, subjectId), answers = notesOf(subjectId).answers;
  return data.meta.strands.filter(s => schedules[s.id] && schedules[s.id].due && schedules[s.id].due <= through && strandDefs(data, s.id).some(d => recallDefReady(d, answers)))
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
// a check with `retest: n` comes back once, whole, on new items, n days after its first complete run (6)
function retestDays(data, subjectId){
  return lessonsInOrder(data).filter(l => l.check.retest && completeRuns(data, subjectId, l).length && !completeRuns(data, subjectId, l, 'retest').length)
    .map(l => ({ lesson: l, due: addDays(completeRuns(data, subjectId, l)[0].d, l.check.retest) }));
}
const retestsDue = (data, subjectId, through) => retestDays(data, subjectId).filter(r => r.due <= through);

/* ---------- fresh instances ---------- */
const lastTryRun = (subjectId, key) => { const t = triesOf(subjectId, key); return t.length ? t[t.length - 1].run : ''; };
// A seed no earlier try of this generator used. Given the subject's data, it also skips a seed whose question has the same numbers as one the
// learner already met (an earlier try of this generator, whose answer they saw) or as one already drawn for the same list (`taken`, a Set
// of keys the caller keeps and this adds to): a check or a retest is never a question already answered in practice. It tries the
// seeds after the first one in order, so the same run still gives the same question; with none new in SEED_TRIES, the first unused seed.
const SEED_TRIES = 64;
const valuesKey = (gen, seed) => JSON.stringify(genValues(gen, seed));
function freshSeed(subjectId, genId, run, k, data = null, taken = null){
  const tries = triesOf(subjectId, genId), used = new Set(tries.map(t => t.seed)), start = hashSeed(`${run}|${genId}|${k}`);
  const gen = data && data.gens && data.gens[genId];
  const firstUnused = () => { let seed = start; while(used.has(seed)) seed = (seed + 1) >>> 0; return seed; };
  if(!gen || isPlaceGen(gen) || !gen.params) return firstUnused();
  const met = new Set([...tries.map(t => valuesKey(gen, t.seed)), ...(taken || [])]);
  let seed = start;
  for(let i = 0; i < SEED_TRIES; i++, seed = (seed + 1) >>> 0){
    if(used.has(seed)) continue;
    const key = valuesKey(gen, seed);
    if(!met.has(key)){ if(taken) taken.add(key); return seed; }
  }
  return firstUnused();
}
const genRef = (gen, extra = {}) => ({ gen: gen.id, n: 1, ...extra });
function freshInstance(data, subjectId, def, run, k, taken = null){
  if(isPlaceGen(def)) return placeReviewInstance(data, subjectId, def, run, k);
  return isMade(def) ? instanceOf(data, genRef(def), freshSeed(subjectId, def.id, run, k, data, taken)) : instanceOf(data, def.id);
}
// Definitions in the order they should come back: never seen first, then the least recently seen. Ties keep their listed order.
function leastSeen(subjectId, defs){
  return defs.map((d, i) => ({ d, i, run: lastTryRun(subjectId, d.id) })).sort((a, b) => a.run < b.run ? -1 : a.run > b.run ? 1 : a.i - b.i).map(x => x.d);
}
// One instance of a strand that the learner has not seen: fresh numbers if the strand has a generator, else an item held in reserve
// that was never tried. When none is left, the least recently seen item comes back and `repeat` says so (E9's rule, kept).
function strandInstance(data, subjectId, strandId, run, k, taken, facets, drawn = null){
  const defs = strandDefs(data, strandId).filter(d => !taken.includes(d.id) || isMade(d));
  const gens = defs.filter(isMade);
  // a strand with several generators (Math's printed totals: right ones and wrong ones) draws among them, by the run, among those that
  // match the facets asked for (a retest); taking them in turn would always hand the first kind to a one-question review
  if(gens.length){
    const alike = facets ? gens.filter(g => whereMatches(facets, g.facets)) : gens, pool = alike.length ? alike : gens;
    return { inst: freshInstance(data, subjectId, pool[hashSeed(`${run}|${strandId}|${k}`) % pool.length], run, k, drawn), repeat: false };
  }
  const used = usedIds(data), fixed = defs.filter(d => !isMade(d));
  const near = list => facets ? [...list.filter(d => Object.entries(facets).every(([f, v]) => (d.facets || {})[f] === v)), ...list] : list;
  const bank = leastSeen(subjectId, fixed.filter(d => !used.has(d.id) && !seenBefore(subjectId, d.id)));
  if(bank.length) return { inst: instanceOf(data, near(bank)[0].id), repeat: false };
  const again = [...leastSeen(subjectId, fixed.filter(d => seenBefore(subjectId, d.id))), ...fixed.filter(d => !seenBefore(subjectId, d.id))];
  return again.length ? { inst: instanceOf(data, near(again)[0].id), repeat: true } : null;
}
// The instances of a drawn check (the mock interview, 10.3 step 9): from each group of topics the check lists, exactly that group's n questions drawn
// at random, the same run drawing the same. What an earlier check or retest (of this lesson, when it is named) already asked comes last within its
// group, so a second draw is a different set where it can be. A question that needs the learner's own answers is left out until they are entered.
function drawInstances(data, subjectId, draw, run, taken, lessonId){
  if(!Array.isArray(draw)) return placeDrawInstances(data, subjectId, draw, run);
  const answers = notesOf(subjectId).answers;
  const earlier = new Set(allTries(subjectId).filter(({ t }) => ['check', 'retest'].includes(t.context) && (lessonId === undefined || t.lesson === lessonId)).map(({ key }) => key));
  const picks = draw.flatMap((group, g) => drawFromGroup(data, group, `${run}|draw|${g}`, taken, answers, earlier));
  return shuffled(picks, hashSeed(`${run}|draw`)).map((d, k) => freshInstance(data, subjectId, d, run, k));
}
// the group's n questions: items not asked before first, then those asked, then made ones for what is short
function drawFromGroup(data, group, seed, taken, answers, earlier){
  const defs = group.strands.flatMap(s => strandDefs(data, s)).filter(d => !taken.includes(d.id) && recallDefReady(d, answers));
  const gens = defs.filter(isMade), fixed = defs.filter(d => !isMade(d));
  const mixedUp = (list, label) => shuffled(list, hashSeed(`${seed}|${label}`));
  const picks = [...mixedUp(fixed.filter(d => !earlier.has(d.id)), 'new'), ...mixedUp(fixed.filter(d => earlier.has(d.id)), 'again')].slice(0, group.n);
  for(let k = 0; picks.length < group.n && gens.length; k++) picks.push(gens[k % gens.length]);
  return picks;
}
// A check's items on new questions: one new instance of the strand (and the facets) of each original, or a new draw. A sung question (3.8)
// is made again from its own task with a seed no try of that task has used, so a retest of a check with sung tries sings new targets.
function retestInstances(data, subjectId, lesson, run){
  if(checkIsDrawn(lesson.check)) return drawInstances(data, subjectId, lesson.check.items.draw, run, [], lesson.id);
  const taken = [], out = [], drawn = new Set();   // drawn: the numbers of the made questions already in this retest
  flatRefs(lesson.check.items).forEach(ref => {
    if(typeof ref === 'object' && 'sing' in ref){
      for(let k = 0; k < refCount(ref); k++) out.push(instanceOf(data, ref, freshSeed(subjectId, singKey(ref.sing), run, out.length)));
      return;
    }
    const original = definitionOf(data, refId(ref));
    for(let k = 0; k < refCount(ref); k++){
      const pick = strandInstance(data, subjectId, original.strand, run, out.length, taken, original.facets, drawn);
      if(pick){ out.push(pick.inst); if(pick.inst.seed === undefined) taken.push(pick.inst.key); }
    }
  });
  return lesson.check.order === 'shuffle' ? shuffled(out, hashSeed(`${run}|retest`)) : out;
}
