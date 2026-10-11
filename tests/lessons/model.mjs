// A view over loaded data for the rules: one SubjectView per subject, with the lookups every rule needs. Views only read the data;
// nothing here changes it. Everything derived is computed on first use, because the shape rule (V70) runs before the others and a
// view is built before it: the other rules run only when the shape is sound, so they read the shape they were promised.

// The references of a flow or a check, with the item or generator each stands for: [{ ref, id, n }]
const refsOf = (engine, items) => engine.flatRefs(items).map(ref => ({ ref, id: engine.refId(ref), n: engine.refCount(ref) }));

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
    data, engine: e, id: subjectId, label: subjectId, subject, meta,
    items: subject.items, gens: subject.gens, lessonList,
    def: id => subject.items[id] || subject.gens[id],
    get lessons() { return once('lessons', () => lessonList.map(l => lessonView(data, subjectId, l))); },
    get partIds() { return once('partIds', () => meta.parts.map(p => p.id)); },
    get listIds() { return once('listIds', () => Object.fromEntries(Object.entries(meta.lists).map(([k, v]) => [k, v.map(o => o.id)]))); },
    // lessons by their number (l1, l2 ...), which is also their order among the parts
    get sortedLessons() { return [...lessonList].sort((a, b) => lessonNumber(a) - lessonNumber(b)); },
    // a fixed question, or an instance of a generator, as the learner meets it
    instance: (id, seed = 1) => subject.items[id] || (subject.gens[id] ? e.itemFromGen(subject.gens[id], seed) : undefined)
  };
}
