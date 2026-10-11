// Fieldcraft subject registry. Loaded before any file under public/subjects/ (lesson standard 26.1).
// Subject files call FC.subject / FC.lesson / FC.items / FC.gen. Nothing here renders. Every registered object is
// deep-frozen, and each call replaces the subject's slot with a new object, so no data file can change another's content.
(function (root) {
  'use strict';

  const LESSON_STANDARD = 2;   // docs/lesson-standard.md version the engine implements
  const ENGINE_WORDING = 7;    // goes up when the app's own wording changes
  let subjects = Object.freeze({});

  function deepFreeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(deepFreeze);
      Object.freeze(value);
    }
    return value;
  }

  const EMPTY = { meta: null, lessons: {}, items: {}, gens: {} };

  function update(subjectId, change) {
    const before = subjects[subjectId] || EMPTY;
    subjects = Object.freeze({ ...subjects, [subjectId]: deepFreeze({ ...before, ...change(before) }) });
  }

  function fail(message) { throw new Error('FC registry: ' + message); }

  // Items and generators arrive from several files; each id is registered once across the subject.
  function addAll(subjectId, group, list, what) {
    update(subjectId, s => {
      const next = { ...s[group] };
      list.forEach(entry => {
        if (!entry || typeof entry.id !== 'string') fail(`${subjectId}: a ${what} has no id`);
        if (s.items[entry.id] || s.gens[entry.id] || next[entry.id]) fail(`${subjectId}/${entry.id} registered twice`);
        next[entry.id] = entry;
      });
      return { [group]: next };
    });
  }

  root.FC = Object.freeze({
    STANDARD: LESSON_STANDARD,
    ENGINE: ENGINE_WORDING,

    subject(id, meta) {
      update(id, () => ({ meta: { ...meta, id } }));
    },
    lesson(id, lesson) {
      update(id, s => {
        if (s.lessons[lesson.id]) fail(`${id}/${lesson.id} registered twice`);
        return { lessons: { ...s.lessons, [lesson.id]: lesson } };
      });
    },
    items(id, list) { addAll(id, 'items', list, 'item'); },
    gen(id, list) { addAll(id, 'gens', list, 'generator'); },
    get(id) { return subjects[id] || fail(`unknown subject "${id}"`); },
    has(id) { return !!subjects[id]; },
    ids() { return Object.keys(subjects); }
  });
})(typeof window !== 'undefined' ? window : globalThis);
