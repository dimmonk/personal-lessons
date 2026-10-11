// Sections 23 and 26.7 (the build-subject gates): V69. Every subject has a design record (docs/subjects/<id>/design.md) that states the
// kind of learning, the end result, the real moment, the real-world test, the practice method, the parts of the end result, the pilot
// lesson, and the owner's approvals and words. No lesson content may be written or changed before the owner has approved the end result
// and the practice method; and no lesson but the pilot (and a baseline) before the owner has tried the pilot on a phone and said what
// they thought (`tried.pilot`: the advance approval of the pilot lets it be built, and does not stand in for the try).
// "Written or changed" is measured against the lock of the last commit.
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
  if (!Array.isArray(r.parts) || r.parts.length === 0 || r.parts.some(p => !p || typeof p.id !== 'string' || typeof p.title !== 'string')) problems.push('the design record has no valid list of parts (an id and a title each)');
  if (typeof r.pilot !== 'string' || !r.pilot) problems.push('the design record names no pilot lesson');
  const t = r.tried && r.tried.pilot;
  if (!r.tried || typeof r.tried !== 'object' || !('pilot' in r.tried)) problems.push('the design record has no "tried" part with a pilot');
  else if (t !== null && !(t && typeof t === 'object' && DATE.test(t.date || '') && typeof t.words === 'string' && t.words.trim())) problems.push('tried.pilot is neither null nor a date with the owner\'s words');
  return problems;
}

// The lessons and the subject record whose content differs from the last commit's lock (or is not in it).
function changedSince(data, id, committed) {
  const now = lockEntries({ ...data, subjects: { [id]: data.subjects[id] } });
  const was = committed.lessons || {};
  const lessons = Object.keys(now.lessons).filter(k => !was[k] || was[k].fp !== now.lessons[k].fp).map(k => k.split('/')[1]);
  const subject = !committed.subjects[id] || committed.subjects[id].fp !== now.subjects[id].fp;
  return { lessons, subject };
}

function gateProblems(data, id, r, committed) {
  if (!committed) return [];   // no last commit to measure against (a seeded control without one): only the record is checked
  const { lessons, subject } = changedSince(data, id, committed);
  if (!lessons.length && !subject) return [];
  const a = r.approved;
  if (!a.endResult || !a.practice) {
    const what = [...(subject ? ['the subject record'] : []), ...lessons.map(l => `lesson ${l}`)].join(', ');
    return [`content was written or changed (${what}) before the owner approved the end result and the practice method (gates 2 and 3)`];
  }
  const beyond = lessons.filter(l => l !== r.pilot && data.subjects[id].lessons[l].role !== 'baseline');
  if (!r.tried.pilot && beyond.length) return [`lessons past the pilot (${beyond.join(', ')}) were written before the owner tried the pilot and said what they thought (gate 6)`];
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
