// V69: the design record of the build-subject skill (.claude/skills/build-subject/SKILL.md, "The record"). Every subject has one
// (docs/subjects/<id>/design.md). The record grows gate by gate: a subject not yet in the app may stop after any gate, and no gate's
// fields may appear before the gates before it are complete, nor gate 3's before the owner's word is on gate 2's screen, nor gate 4's
// before their word is on the practice. A subject in the app needs the whole record, and its content is held: nothing is written or
// changed (measured against the last commit's lock) while an ask of the owner's or a signed-off topic is in no part, while the design
// opened what it may not, while the paragraph or the practice is unapproved, or past the pilot while the pilot's try or review has not
// passed; and no lesson is live without a passing entry. Owner words carry a source, and the same words on two subjects are a blanket.
import { siteRule, checkEach } from './rule.mjs';
import { lockEntries } from './fingerprint.mjs';
import { GATE_FIELDS, LEARNING_KINDS, askedProblems, askedSinceProblems, unplacedAsks, principleProblems, openedProblems, openedSinceProblems, goalProblems,
  practiceProblems, approvalProblems, partProblems, blockProblems, uncoveredTopics, designReviewProblems, designReviewed, triedShapeProblems, triedPasses, lessonFp, isText,
  ownerSinceProblems, designedOnProblems } from './design-shape.mjs';
export { LEARNING_KINDS, triedPasses } from './design-shape.mjs';
export { READ_LEVELS } from './designs.mjs';

const has = (r, f) => f in r && r[f] !== undefined;
const gateReached = r => Math.max(-1, ...Object.entries(GATE_FIELDS).filter(([, fields]) => fields.some(f => has(r, f))).map(([g]) => Number(g)));

// which gates the record claims, in order, with no gap, and not ahead of the owner's word
function stagingProblems(r, built) {
  const reached = built ? 5 : gateReached(r);
  const problems = [];
  for (let g = 0; g <= reached; g += 1) GATE_FIELDS[g].filter(f => !has(r, f)).forEach(f => problems.push(`gate ${g} is not complete: no ${f}${built ? '' : ` (a record that has reached gate ${reached} carries every field of gates 0 to ${reached})`}`));
  if (!built) {
    if (reached >= 3 && !(r.approved && r.approved.goal)) problems.push('gate 3 was written before the owner\'s word was on gate 2\'s screen (the paragraph, the topics, the sentence and the test)');
    if (reached >= 4 && !(r.approved && r.approved.practice)) problems.push('gate 4 was written before the owner\'s word was on the practice (gate 3)');
  }
  return { reached, problems };
}

function recordProblems(id, r, research, reviews, built) {
  if (!r) return [`no design record; write docs/subjects/${id}/design.md through the build-subject skill`];
  if (r.error) return [`the design record ${r.error}`];
  const problems = [];
  if (r.subject !== id) problems.push(`the design record names subject "${r.subject}"`);
  const { reached, problems: staging } = stagingProblems(r, built);
  problems.push(...staging);
  if (reached >= 0) problems.push(...askedProblems(r));
  if (reached >= 1) {
    if (!Array.isArray(r.kinds) || r.kinds.length === 0) problems.push('the design record names no kind of learning');
    else r.kinds.filter(k => !LEARNING_KINDS.includes(k)).forEach(k => problems.push(`"${k}" is not a kind of learning (${LEARNING_KINDS.join(', ')})`));
    problems.push(...principleProblems(r, research));
    const opened = openedProblems(id, r);
    problems.push(...(built ? opened.filter(p => p.startsWith('the design record has no')) : opened));   // a built subject's forbidden reads hold its content instead (below)
  }
  if (reached >= 2) problems.push(...goalProblems(r));
  if (reached >= 3) problems.push(...practiceProblems(r));
  problems.push(...approvalProblems(r));
  if (reached >= 4) problems.push(...partProblems(r));
  if (reached >= 5) problems.push(...blockProblems(r));
  problems.push(...designedOnProblems(r), ...designReviewProblems(r, reviews), ...triedShapeProblems(r, reviews));
  return problems;
}

// a built subject's design fields change only on the owner's word: gate 3's after the goal's approval, gates 4 and 5's after the practice's
const changedFields = (r, c, fields) => fields.filter(f => JSON.stringify(r[f]) !== JSON.stringify(c[f]));
function designSinceProblems(r, committed) {
  if (!committed) return [];
  const problems = [];
  const g3 = changedFields(r, committed, GATE_FIELDS[3]), g45 = changedFields(r, committed, [...GATE_FIELDS[4], ...GATE_FIELDS[5]]);
  if (g3.length && !r.approved.goal) problems.push(`gate 3 changed (${g3.join(', ')}) since the last commit without the owner's word on gate 2's screen`);
  if (g45.length && !r.approved.practice) problems.push(`gates 4 and 5 changed (${g45.join(', ')}) since the last commit without the owner's word on the practice`);
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

// a built subject against its record: every lesson has its block, a live lesson has a passing entry, and the holds on changed content
function gateProblems(data, id, r, committedLock, reviews) {
  const problems = [];
  const built = Object.values(data.subjects[id].lessons).filter(l => l.role !== 'baseline');
  built.forEach(l => {
    const b = r.lessons[l.id];
    if (!b) problems.push(`lesson ${l.id} is built and has no block in the design record (gate 5)`);
    else if (b.part !== l.part) problems.push(`lesson ${l.id} is for part "${l.part}" and its block is for part "${b.part}"`);
    if (l.status === 'live' && !triedPasses(r.tried[l.id], reviews, lessonFp(data, id, l.id))) problems.push(`lesson ${l.id} is live without a passing entry in tried for the lesson as it is now: the owner's try that passed the check, or a stand-in review whose verdict passes, on this version (gates 6 and 7)`);
  });
  if (!committedLock) return problems;   // no last commit to measure against (a seeded control without one): only the record is held
  const { lessons, subject } = changedSince(data, id, committedLock);
  if (!lessons.length && !subject) return problems;
  const what = [...(subject ? ['the subject record'] : []), ...lessons.map(l => `lesson ${l}`)].join(', ');
  const holds = [
    ...openedProblems(id, r).filter(p => !p.startsWith('the design record has no')).map(p => `${p}: the content is held (a redesign starts new research, design and writing lists; a forbidden read listed under asks holds it for good)`),
    ...unplacedAsks(r).map(a => `something the owner asked for is in no part: ${a} (gate 0)`),
    ...uncoveredTopics(r).map(t => `a topic the owner signed off is in no part: ${t} (gates 2 and 4)`),
    ...(r.approved.goal && r.approved.practice ? [] : ['the owner has not approved the goal and the practice method (gates 2 and 3)']),
    ...(designReviewed(r, reviews) ? [] : ['the record has no passing review of its own (gate 5: someone who did not write it reads it against the skill before the pilot is built)'])
  ];
  if (holds.length) return [...problems, ...holds.map(h => `content was written or changed (${what}) while ${h}`)];
  const beyond = lessons.filter(l => l !== r.pilot && data.subjects[id].lessons[l].role !== 'baseline');
  if (beyond.length && !triedPasses(r.tried[r.pilot], reviews, lessonFp(data, id, r.pilot))) problems.push(`lessons past the pilot (${beyond.join(', ')}) were written before the pilot's try or review passed on the pilot as it is now (gate 6)`);
  return problems;
}

// the same words recorded as the owner's on two subjects are one message carried over: a blanket, which the skill forbids
function blanketProblems(designs) {
  const seen = {};
  for (const [id, r] of Object.entries(designs)) {
    if (!r || r.error || !r.approved) continue;
    for (const k of ['goal', 'practice']) {
      const v = r.approved[k];
      if (!v || !isText(v.words, 1)) continue;
      const key = v.words.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
      if (seen[key] && seen[key] !== id) return [`${id}: approved.${k} carries the same words as ${seen[key]}'s approval ("${v.words.slice(0, 60)}"): one message of the owner's cannot approve two subjects`];
      seen[key] = id;
    }
  }
  return [];
}

export const V69 = siteRule('V69', (input, check) => {
  const designs = input.designs || {}, committedDesigns = input.committedDesigns || {}, research = input.research || {}, allReviews = input.reviews || {};
  const ids = [...new Set([...Object.keys(input.data.subjects), ...Object.keys(designs), ...Object.keys(committedDesigns)])];
  for (const id of ids) {
    const r = designs[id], reviews = allReviews[id] || {}, built = id in input.data.subjects, c = committedDesigns[id];
    if (!r && c && !built) { checkEach(check, id, ['the design record was deleted since the last commit: a record is never removed (its asks are the owner\'s)']); continue; }
    const shape = [...recordProblems(id, r, research, reviews, built), ...(r && !r.error ? [...askedSinceProblems(r, c), ...openedSinceProblems(r, c, id), ...ownerSinceProblems(r, c), ...(built ? designSinceProblems(r, c) : [])] : [])];
    checkEach(check, id, shape.length ? shape : built ? gateProblems(input.data, id, r, input.committedLock, reviews) : []);
  }
  checkEach(check, 'approvals', blanketProblems(designs));
});

export const RULES_DESIGN = [V69];
