// Fieldcraft subject registry. Loaded before any file under public/subjects/.
// Subject files call FC.subject / FC.key / FC.unit / FC.cards / FC.cases / FC.specimens.
// Nothing here renders. Every registered object is deep-frozen, and each call replaces the subject's
// slot with a new object, so no data file can change another's content.
(function (root) {
  'use strict';

  const LESSON_STANDARD = 1;   // docs/lesson-standard.md version the engine implements
  const ENGINE_WORDING = 4;    // goes up when the app's own wording changes (lesson standard E8)
  let subjects = Object.freeze({});

  function deepFreeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(deepFreeze);
      Object.freeze(value);
    }
    return value;
  }

  const EMPTY = { meta: null, key: null, units: {}, cards: {}, cases: {}, specimens: [] };

  function update(subjectId, change) {
    const before = subjects[subjectId] || EMPTY;
    subjects = Object.freeze({ ...subjects, [subjectId]: deepFreeze({ ...before, ...change(before) }) });
  }

  function fail(message) { throw new Error('FC registry: ' + message); }

  root.FC = Object.freeze({
    STANDARD: LESSON_STANDARD,
    ENGINE: ENGINE_WORDING,

    subject(id, meta) {
      update(id, () => ({ meta: { ...meta, id } }));
    },
    key(id, key) {
      update(id, () => ({ key }));
    },
    unit(id, unitId, unit) {
      update(id, s => {
        if (s.units[unitId]) fail(`${id}/${unitId} registered twice`);
        return { units: { ...s.units, [unitId]: { ...unit, id: unitId } } };
      });
    },
    // A unit's cards may arrive from several files; their order is set by unit.parts, not by load order.
    cards(id, unitId, list) {
      update(id, s => ({ cards: { ...s.cards, [unitId]: [...(s.cards[unitId] || []), ...list] } }));
    },
    cases(id, unitId, list) {
      update(id, s => ({ cases: { ...s.cases, [unitId]: [...(s.cases[unitId] || []), ...list] } }));
    },
    specimens(id, list) {
      update(id, s => ({ specimens: [...s.specimens, ...list] }));
    },
    get(id) { return subjects[id] || fail(`unknown subject "${id}"`); },
    has(id) { return !!subjects[id]; },
    ids() { return Object.keys(subjects); }
  });
})(typeof window !== 'undefined' ? window : globalThis);
