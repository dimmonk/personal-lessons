/* ===================== LESSONS: A GROUP OF PLACES MET IN THE RECORD ===================== */
// Lesson standard 3.4, 3.5 and 6.3. place-gen.js chooses the places; this reads how the learner last met each one (the practice record, where a place of a
// group is stored under `<generator>|<place>`, records.js) and makes the questions: a lesson's group of places, the draw of a check and the one place a
// review asks. A made question is named by its seed alone, and a try stores that seed.

// how the learner last met each place of a group: { [placeId]: { form, ok, run } }
const placeMemory = (subjectId, gen) => Object.fromEntries(gen.places.list.flatMap(p => {
  const tries = triesOf(subjectId, placeKey(gen.id, p.id)).filter(t => t.seed !== undefined), last = tries[tries.length - 1];
  return last ? [[p.id, { form: placePairAt(gen, last.seed).form, ok: last.ok, run: last.run }]] : [];
}));
// a seed for this place in this form that none of the place's earlier tries used
function placeFreshSeed(subjectId, gen, pick, run, k){
  const used = new Set(triesOf(subjectId, placeKey(gen.id, pick.place)).map(t => t.seed)), step = placePairs(gen).length;
  let seed = placeSeedOf(gen, pick.place, pick.form, hashSeed(`${run}|${gen.id}|${pick.place}|${k}`) % PLACE_SALTS);
  while(used.has(seed)) seed += step;
  return seed;
}
const placeInstances = (data, subjectId, gen, picks, run, k) => picks.map((pick, j) => instanceOf(data, { gen: gen.id, n: 1 }, placeFreshSeed(subjectId, gen, pick, run, k + j)));

// a lesson's reference to the group: `ref.n` different places, in the form `ref.with.form` when it names one
const placeSetInstances = (data, subjectId, gen, ref, run, k) =>
  placeInstances(data, subjectId, gen, placeSetPicks(gen, ref, placeMemory(subjectId, gen), placeOnlyOf(data, gen.id), `${run}|${gen.id}|${k}`), run, k * 100);
// the questions of a check that draws from the group (3.4), the same run drawing the same
const placeDrawInstances = (data, subjectId, draw, run) => {
  const gen = data.gens[draw.gen] || lessonFail(`unknown generator ${draw.gen}`);
  return placeInstances(data, subjectId, gen, placeDraw(gen, draw, placeMemory(subjectId, gen), `${run}|${gen.id}|draw`), run, 0);
};
// the question a review asks of the group (6.3): the place missed last time, else the one met longest ago, in a form it was not last asked in
const placeReviewInstance = (data, subjectId, gen, run, k) =>
  placeInstances(data, subjectId, gen, [placeReviewPick(gen, placeMemory(subjectId, gen), placeOnlyOf(data, gen.id), `${run}|${gen.id}|${k}`)], run, k)[0];
