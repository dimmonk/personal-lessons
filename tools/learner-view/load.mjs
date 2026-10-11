// Loads a subject's registered data the way the app does (the same scripts, the same order) plus the engine's pure functions,
// so the learner view is worked out by the code the learner's phone runs. --fixture adds the test subject.
import { loadFromPublic } from '../../tests/lessons/load.mjs';
import { FIXTURE_FILES } from '../../tests/fixtures/fixture-subject/design.mjs';

export const ROOT = new URL('../../public/', import.meta.url);
const FIXTURE = new URL('../../tests/fixtures/fixture-subject/', import.meta.url);

export const loadAll = ({ fixture = false } = {}) => loadFromPublic(ROOT, { extra: fixture ? FIXTURE_FILES.map(f => new URL(f, FIXTURE)) : [] });
