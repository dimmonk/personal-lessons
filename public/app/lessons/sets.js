/* ===================== LESSONS: BUILDING A GROUP OF QUESTIONS ===================== */
// Lesson standard 26.2 (order and difficulty). A group of questions (a lesson's `set`) is built from its references when it starts:
// pairs kept side by side in a random order, the order listed or shuffled, questions from earlier lessons mixed in unlabelled,
// generated ones made with fresh numbers. The same run gives the same group.

// One reference as the instances the learner meets: a fixed item is one, a generator makes `n` with fresh seeds.
function refInstances(data, subjectId, ref, run, k){
  if(typeof ref === 'string') return [instanceOf(data, ref)];
  return Array.from({ length: ref.n }, (_, j) => instanceOf(data, ref, freshSeed(subjectId, ref.gen, run, k * 100 + j)));
}
// "Practice again": an item that was seen gives way to one of its strand the learner has not seen, when the strand holds one
function unseenInPlace(data, subjectId, ref, taken){
  if(typeof ref !== 'string') return ref;
  const used = usedIds(data), mine = data.items[ref];
  const spare = leastSeen(subjectId, strandDefs(data, mine.strand).filter(d => !d.make && !used.has(d.id) && !seenBefore(subjectId, d.id) && !taken.includes(d.id)));
  return spare.length ? spare[0].id : ref;
}
// the references of the earlier lessons' groups, the least recently seen first (never seen before seen)
function mixPool(data, subjectId, from){
  const refs = from.flatMap(id => (data.lessons[id] ? flowSets(data.lessons[id]) : []).flatMap(set => flatRefs(set.items)));
  const unique = [...new Map(refs.map(r => [refId(r), r])).values()];
  return unique.map((ref, i) => ({ ref, i, run: lastTryRun(subjectId, refId(ref)) })).sort((a, b) => a.run < b.run ? -1 : a.run > b.run ? 1 : a.i - b.i).map(x => x.ref);
}
// the instances of one group, in the order they are asked
function buildSet(data, subjectId, lesson, set, run, { again = false } = {}){
  const taken = [];
  const refs = set.items.map(entry => (Array.isArray(entry) ? entry : [entry]).map(ref => {
    const chosen = again ? unseenInPlace(data, subjectId, ref, taken) : ref;
    if(typeof chosen === 'string') taken.push(chosen);
    return chosen;
  }));
  const seed = hashSeed(`${run}|${lesson.id}|${JSON.stringify(set.items).length}`);
  const groups = refs.map((pair, k) => {
    const made = pair.flatMap((ref, j) => refInstances(data, subjectId, ref, run, k * 10 + j));
    return pair.length > 1 ? shuffled(made, seed + k) : made;   // an inner pair is asked one after the other, its order random
  });
  const ordered = set.order === 'shuffle' ? shuffled(groups, seed) : groups;
  const own = ordered.flat();
  if(!set.mix || again) return own;
  // questions from earlier lessons, so that they are `share` of the group, spread among the new ones with nothing to mark them
  const extra = Math.max(1, Math.round(own.length * set.mix.share / (1 - set.mix.share)));
  const pool = mixPool(data, subjectId, set.mix.from);
  if(!pool.length) return own;
  const mixed = Array.from({ length: extra }, (_, j) => refInstances(data, subjectId, pool[j % pool.length], run, 900 + j)[0]);
  const slots = shuffled(Array.from({ length: own.length + extra }, (_, i) => i), seed + 7).slice(0, extra);
  let ownAt = 0, mixedAt = 0;
  return Array.from({ length: own.length + extra }, (_, i) => slots.includes(i) ? mixed[mixedAt++] : own[ownAt++]);
}
