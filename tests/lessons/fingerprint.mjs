// Section 13, R3, as 26.7 keeps it: fingerprints. A fingerprint is the full SHA-256 of the canonical JSON (keys sorted) of what the
// learner can see or be marked on, stored as "sha256:<64 hex>". A lesson's covers the lesson, every item and generator it names
// (a generator's text, parameters and the source of its `make`), and the items held in reserve for the topics its check covers.
// A subject's covers its record without rev and history. The app's own wording is in no fingerprint: FC.ENGINE goes up when it changes.
import { createHash } from 'node:crypto';
import { canonical, byId, omit } from './text.mjs';

export const fingerprint = value => 'sha256:' + createHash('sha256').update(JSON.stringify(canonical(value))).digest('hex');

// a registered generator as data: its `make` as source text, so a change to the numbers it makes changes the fingerprint
const asData = def => def && typeof def.make === 'function' ? { ...def, make: def.make.toString() } : def;

export function lessonFingerprint(data, subjectId, lessonId) {
  const subject = data.subjects[subjectId], e = data.engine, lesson = subject.lessons[lessonId];
  const named = new Set();
  lesson.flow.forEach(step => {
    if (step.worked) named.add(step.worked);
    if (step.set) e.flatRefs(step.set.items).forEach(r => named.add(e.refId(r)));
  });
  const drawn = e.checkIsDrawn(lesson.check);
  if (!drawn) e.flatRefs(lesson.check.items).forEach(r => named.add(e.refId(r)));
  // a sung question is made by the app from the task the lesson names, which the lesson's own fingerprint already holds; a name with
  // no item or generator behind it is V70's to report, and is left out here so the lock does not stop on it
  const defs = id => subject.items[id] || subject.gens[id];
  [...named].filter(id => !defs(id)).forEach(id => named.delete(id));
  const strands = new Set([...named].map(id => defs(id).strand).concat(drawn ? lesson.check.items.draw.strands : []));
  // the items held in reserve for those strands come back as the review's questions, so a change to one is a change to what is taught
  const reserve = [...Object.values(subject.items), ...Object.values(subject.gens)].filter(d => strands.has(d.strand)).map(d => d.id);
  const ids = [...new Set([...named, ...reserve])].sort();
  return fingerprint({ lesson: omit(lesson, 'rev', 'status', 'history', 'tried'), items: byId(ids.map(id => asData(defs(id)))) });
}

export function subjectFingerprint(data, subjectId) {
  return fingerprint({ meta: omit(data.subjects[subjectId].meta, 'rev', 'history') });
}

// The entries a lock holds for this data: every subject and every lesson, with its revision and fingerprint.
export function lockEntries(data) {
  const subjects = {};
  const lessons = {};
  for (const id of Object.keys(data.subjects).sort()) {
    const subject = data.subjects[id];
    subjects[id] = { rev: subject.meta.rev, fp: subjectFingerprint(data, id) };
    for (const lessonId of Object.keys(subject.lessons).sort()) {
      lessons[`${id}/${lessonId}`] = { rev: subject.lessons[lessonId].rev, fp: lessonFingerprint(data, id, lessonId) };
    }
  }
  return { standard: data.standard, subjects, lessons };
}
