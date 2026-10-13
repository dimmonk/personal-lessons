// A view over loaded data for the rules: one SubjectView per subject, with the lookups every rule needs. Views only read the data;
// nothing here changes it. Everything derived is computed on first use, because the shape rule (V70) runs before the others and a
// view is built before it: the other rules run only when the shape is sound, so they read the shape they were promised.

// The references of a flow or a check, with the item or generator each stands for: [{ ref, id, n }]
const refsOf = (engine, items) => engine.flatRefs(items).map(ref => ({ ref, id: engine.refId(ref), n: engine.refCount(ref) }));

// Every question a place group can make, as an item the rules read like any other: [{ gen, place, form, item, name }]. Its seed and values are left off
// (they are not part of an item), and the name is what a finding calls it.
// (A group the shape rule refuses makes nothing here: V70 reports it, and the rules that read its questions are skipped with the rest.)
const madeBy = (e, gen) => { try { return e.placeItems(gen); } catch (error) { return []; } };
export const madeFromPlaces = (e, subject) => Object.values(subject.gens).filter(e.isPlaceGen)
  .flatMap(gen => madeBy(e, gen).map(({ seed, values, ...item }) => ({ gen, place: values.place, form: values.form, item, name: `generator ${gen.id} (${values.place}, ${values.form})` })));

export function lessonView(data, subjectId, lesson) {
  const e = data.engine;
  const sets = e.flowSets(lesson);
  const checkRefs = e.checkIsDrawn(lesson.check) ? [] : refsOf(e, lesson.check.items);
  const worked = lesson.flow.filter(s => s.worked).map(s => s.worked);
  return {
    lesson, id: lesson.id, label: `${subjectId}/${lesson.id}`,
    sets, setRefs: sets.map(set => refsOf(e, set.items)), checkRefs, worked,
    // every item or generator the lesson's flow and check name
    usedIds: [...worked, ...sets.flatMap(set => e.flatRefs(set.items).map(e.refId)), ...checkRefs.map(r => r.id)]
  };
}

export function subjectView(data, subjectId) {
  const subject = data.subjects[subjectId], e = data.engine, meta = subject.meta;
  const lessonList = Object.values(subject.lessons), memo = {};
  const once = (name, make) => memo[name] || (memo[name] = make());
  const lessonNumber = l => Number((l.id.match(/(\d+)$/) || [])[1]);
  return {
    data, engine: { ...e, maps: data.maps || {} }, id: subjectId, label: subjectId, subject, meta,
    items: subject.items, gens: subject.gens, lessonList,
    // the generators that draw numbers, and the questions a place group can make (one for each place and form): what the rules that read a generator's
    // questions read, since a place group has no numbers to draw but a question for every pair
    get numberGens() { return once('numberGens', () => Object.values(subject.gens).filter(g => !e.isPlaceGen(g))); },
    get placeGens() { return once('placeGens', () => Object.values(subject.gens).filter(e.isPlaceGen)); },
    placeMadeOf: genId => madeFromPlaces(e, subject).filter(x => x.gen.id === genId),
    // the definitions a reference of a lesson stands for: the item, the generator, or the questions of a place group in the form and place the reference names
    refDefs(ref) {
      const def = e.definitionOf(subject, ref.id), w = (ref.ref && ref.ref.with) || {};
      return !e.isPlaceGen(def) ? [def] : madeFromPlaces(e, subject).filter(x => x.gen.id === def.id && (!w.form || x.form === w.form) && (!w.place || x.place === w.place)).map(x => x.item);
    },
    get placeMade() { return once('placeMade', () => madeFromPlaces(e, subject)); },
    // every question a rule may read as an item: the items, what the numeric generators make (a few instances, by seed), and each question of each place group
    get itemLike() { return once('itemLike', () => [...Object.values(subject.items), ...Object.values(subject.gens).filter(g => !e.isPlaceGen(g)), ...madeFromPlaces(e, subject).map(x => x.item)]); },
    def: id => e.definitionOf(subject, id),
    get lessons() { return once('lessons', () => lessonList.map(l => lessonView(data, subjectId, l))); },
    get partIds() { return once('partIds', () => meta.parts.map(p => p.id)); },
    get listIds() { return once('listIds', () => Object.fromEntries(Object.entries(meta.lists).map(([k, v]) => [k, v.map(o => o.id)]))); },
    // lessons by their number (l1, l2 ...), which is also their order among the parts
    get sortedLessons() { return [...lessonList].sort((a, b) => lessonNumber(a) - lessonNumber(b)); },
    // a fixed question, or an instance of a generator, as the learner meets it
    instance: (id, seed = 1) => subject.items[id] || (subject.gens[id] ? e.itemFromGen(subject.gens[id], seed) : undefined)
  };
}
