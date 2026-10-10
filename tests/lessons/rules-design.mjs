// Section 23 (the build-subject gates): V69. Every subject has a design record (docs/subjects/<id>/design.md) that states the
// kind of learning, the end result, the real moment, the real-world test and the practice method, with the owner's approval
// dates. No lesson content may be written or changed before the owner has approved the end result and the practice method,
// and nothing past the first unit (the pilot) before the owner has approved the pilot. "Written or changed" is measured
// against the lock of the last commit: content that matches it was there before the gates and is waiting for its audit.
import { siteRule, checkEach } from './rule.mjs';
import { lockEntries } from './fingerprint.mjs';

export const LEARNING_KINDS = ['facts', 'judging', 'procedure', 'body', 'habit'];
const TEXT_FIELDS = ['endResult', 'realMoment', 'test', 'practice'];
const APPROVALS = ['endResult', 'practice', 'pilot'];
const DATE = /^\d{4}-\d\d-\d\d$/;

function recordProblems(id, r) {
  if (!r) return [`no design record; write docs/subjects/${id}/design.md through the build-subject skill`];
  if (r.error) return [`the design record ${r.error}`];
  const problems = [];
  if (r.subject !== id) problems.push(`the design record names subject "${r.subject}"`);
  if (!Array.isArray(r.kinds) || r.kinds.length === 0) problems.push('the design record names no kind of learning');
  else r.kinds.filter(k => !LEARNING_KINDS.includes(k)).forEach(k => problems.push(`"${k}" is not a kind of learning (${LEARNING_KINDS.join(', ')})`));
  TEXT_FIELDS.filter(f => typeof r[f] !== 'string' || r[f].trim().length < 10).forEach(f => problems.push(`the design record has no ${f}`));
  const a = r.approved;
  if (!a || typeof a !== 'object') problems.push('the design record has no "approved" part');
  else APPROVALS.filter(k => !(a[k] === null || (typeof a[k] === 'string' && DATE.test(a[k])))).forEach(k => problems.push(`approved.${k} is neither null nor a date`));
  return problems;
}

// The units and the subject record whose content differs from the last commit's lock (or is not in it).
function changedSince(data, id, committed) {
  const now = lockEntries({ ...data, subjects: { [id]: data.subjects[id] } });
  const units = Object.keys(now.units).filter(k => !committed.units[k] || committed.units[k].fp !== now.units[k].fp).map(k => k.split('/')[1]);
  const subject = !committed.subjects[id] || committed.subjects[id].fp !== now.subjects[id].fp;
  return { units, subject };
}

function gateProblems(data, id, r, committed) {
  if (!committed) return [];   // no last commit to measure against (a seeded control without one): only the record is checked
  const { units, subject } = changedSince(data, id, committed);
  if (!units.length && !subject) return [];
  const a = r.approved;
  if (!a.endResult || !a.practice) {
    const what = [...(subject ? ['the subject record, key or specimens'] : []), ...units.map(u => `unit ${u}`)].join(', ');
    return [`content was written or changed (${what}) before the owner approved the end result and the practice method (gates 2 and 3)`];
  }
  const pilot = data.subjects[id].meta.units[0];
  const beyond = units.filter(u => u !== pilot);
  if (!a.pilot && beyond.length) return [`units past the pilot (${beyond.join(', ')}) were written before the owner approved the pilot (gate 6)`];
  return [];
}

export const V69 = siteRule('V69', (input, check) => {
  const designs = input.designs || {};
  for (const id of Object.keys(input.data.subjects)) {
    const r = designs[id];
    const shape = recordProblems(id, r);
    checkEach(check, id, shape.length ? shape : gateProblems(input.data, id, r, input.committedLock));
  }
});

export const RULES_DESIGN = [V69];
