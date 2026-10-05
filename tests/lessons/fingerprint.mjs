// Section 13, R3: fingerprints. A fingerprint is the full SHA-256 of the canonical JSON (keys sorted) of what the learner
// can see or be marked on, stored as "sha256:<64 hex>". A unit's covers what that unit prints and nothing else;
// a subject's covers its record without rev and history, its key and its specimens.
// The app's own wording (E2, E3, E5, E6) is in no fingerprint: FC.ENGINE goes up when it changes.
import { createHash } from 'node:crypto';
import { canonical, byId, omit } from './text.mjs';

export const fingerprint = value => 'sha256:' + createHash('sha256').update(JSON.stringify(canonical(value))).digest('hex');

// What a unit prints from the key: its own outcomes and terms in full, the questions it teaches in full,
// and for a question it only assumes: q and each answer's n and when, with keeps cut to the outcomes this unit or an earlier one teaches.
function keySlice(subject, unitId) {
  const { key, meta } = subject;
  const unit = subject.units[unitId];
  const steps = [...(key.gate ? [key.gate] : []), ...Object.values(key.branches).flat()];
  const upTo = meta.units.slice(0, meta.units.indexOf(unitId) + 1);
  const known = id => upTo.includes(key.outcomes.find(o => o.id === id).unit);
  return {
    outcomes: byId(key.outcomes.filter(o => unit.teaches.outcomes.includes(o.id))),
    terms: byId((key.terms || []).filter(t => unit.teaches.terms.includes(t.id))),
    taught: unit.teaches.steps.map(code => steps.find(s => s.code === code)),
    assumed: steps.filter(s => unit.assumes.includes(s.unit))
      .map(s => ({ code: s.code, q: s.q, options: s.options.map(o => ({ id: o.id, n: o.n, when: o.when, keeps: o.keeps.filter(known) })) }))
  };
}

// Cards and cases are maps by id, so the order of files and of registration cannot change a fingerprint.
export function unitFingerprint(data, subjectId, unitId) {
  const subject = data.subjects[subjectId];
  const unit = subject.units[unitId];
  const printed = { unit: omit(unit, 'rev', 'status', 'build'), cards: byId(subject.cards[unitId] || []), cases: byId(subject.cases[unitId] || []) };
  // A unit not yet rebuilt has no teaches record; it is fingerprinted whole, so the old text cannot change unseen (R1).
  return fingerprint(unit.teaches ? { ...printed, key: keySlice(subject, unitId) } : printed);
}

export function subjectFingerprint(data, subjectId) {
  const subject = data.subjects[subjectId];
  return fingerprint({ meta: omit(subject.meta, 'rev', 'history'), key: subject.key, specimens: byId(subject.specimens) });
}

// The entries a lock holds for this data: every subject and every unit, with its revision and fingerprint.
export function lockEntries(data) {
  const subjects = {};
  const units = {};
  // a subject with only an old-format record has no subject record, and so nothing to lock (F5)
  for (const id of Object.keys(data.subjects).sort().filter(name => data.subjects[name].meta)) {
    const subject = data.subjects[id];
    subjects[id] = { rev: subject.meta.rev, fp: subjectFingerprint(data, id) };
    for (const unitId of Object.keys(subject.units).sort()) {
      units[`${id}/${unitId}`] = { rev: subject.units[unitId].rev, standard: subject.units[unitId].standard, fp: unitFingerprint(data, id, unitId) };
    }
  }
  return { standard: data.standard, subjects, units };
}
