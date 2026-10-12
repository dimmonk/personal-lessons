// V69: the design record of the build-subject skill (.claude/skills/build-subject/SKILL.md, "The record"). Every subject has one
// (docs/subjects/<id>/design.md) and the record holds what every gate asks for: what the owner asked the subject to teach, in their
// words, each item kept by a part or dropped in their recorded words; the kind of learning and the principles that drive the
// design (a principle that decides was read in full), the owner's paragraph and the end result, the practice and what the app must
// deliver, the form and the parts with their checks, one block per lesson tied to its part's check, the pilot, the two approvals bound
// to the exact text they approved, one `tried` entry per lesson (the owner's try, or a stand-in review whose verdict is its file's
// first line), and what the designer opened. Then the holds: no content written or changed before the paragraph and the practice were
// approved, and none while an ask of the owner's is neither kept nor dropped; no lesson past the pilot (a baseline aside) before the
// pilot's try or review passed; no lesson `live` without a passing entry. "Written or changed" is measured against the lock of the last commit.
import { siteRule, checkEach } from './rule.mjs';
import { lockEntries, fingerprint } from './fingerprint.mjs';
import { VERDICTS } from './designs.mjs';

export const LEARNING_KINDS = ['facts', 'judging', 'procedure', 'body', 'habit'];
export const READ_LEVELS = ['full', 'abstract', 'summary'];
export const GOAL_MAX_CHARS = 1200;   // one phone screen: the owner reads the paragraph, nothing more
const TEXT_FIELDS = ['endResult', 'realMoment', 'test', 'out', 'practice', 'feedback', 'form'];
const APPROVALS = ['goal', 'practice'];
// what an approval binds: the paragraph with the list of what the subject teaches, or the practice method
export const approvedText = (r, field) => field === 'goal' ? { goal: r.goal, topics: r.topics } : r[field];
const DATE = /^\d{4}-\d\d-\d\d$/;
const isText = (s, min = 10) => typeof s === 'string' && s.trim().length >= min;
const isDate = s => typeof s === 'string' && DATE.test(s);

// what gates 1 to 5 must not open (SKILL.md, "What may be opened"): this subject's lessons, learner views and reviews, and any other record
export function forbiddenOpen(id, path) {
  if (path.startsWith(`public/subjects/${id}/`)) return 'the subject\'s own lessons';
  if (path.startsWith(`docs/learner-view/${id}-`)) return 'the subject\'s learner views';
  if (path.startsWith(`docs/subjects/${id}/reviews/`)) return 'the subject\'s reviews';
  const other = path.match(/^docs\/subjects\/([^/]+)\//);
  if (other && other[1] !== id) return `another subject's record (${other[1]})`;
  return null;
}

// gate 0: each ask has the owner's words; `owner` is their recorded word on it (null until they give one), `kept` the part that covers it,
// `dropped` true only on their word. An item with no part and not dropped holds the subject's content, whether or not the owner has spoken.
function askedProblems(r) {
  if (!Array.isArray(r.asked)) return ['the design record has no "asked" list: what the owner asked for, in their words (gate 0; a list, possibly empty)'];
  const partIds = (Array.isArray(r.parts) ? r.parts : []).map(p => p && p.id);
  return r.asked.flatMap((a, i) => {
    const where = `asked item ${a && a.id ? a.id : i + 1}`;
    if (!a || !isText(a.id, 1) || !isText(a.words, 1) || !isText(a.when, 1) || !isText(a.where, 1) || !('owner' in a) || !('kept' in a) || typeof a.dropped !== 'boolean') return [`${where} needs id, words (the owner's), when, where, owner (null or their date and words), kept (null or a part) and dropped (true or false)`];
    const problems = [];
    if (a.owner !== null && !(a.owner && typeof a.owner === 'object' && isDate(a.owner.date) && isText(a.owner.words, 1))) problems.push(`${where}: owner is neither null nor the owner's date and words`);
    if (a.kept !== null && !partIds.includes(a.kept)) problems.push(`${where} is kept by part "${a.kept}", which is not a part of the record`);
    if (a.dropped && a.owner === null) problems.push(`${where} is dropped without the owner's words`);
    if (a.dropped && a.kept !== null) problems.push(`${where} is both kept and dropped`);
    return problems;
  });
}
// the asks that hold the content: not covered by a part and not dropped (undecided, or the owner said keep and the design has not placed it yet)
export const unplacedAsks = r => (Array.isArray(r.asked) ? r.asked : []).filter(a => a && a.kept === null && !a.dropped).map(a => a.id + (a.owner ? ' (the owner said keep; no part covers it yet)' : ' (undecided)'));

function principleProblems(r, research) {
  const list = r.principles;
  if (!Array.isArray(list) || list.length === 0) return ['the design record names no principles (gate 1)'];
  const problems = [];
  list.forEach((p, i) => {
    const where = `principle ${p && p.id ? p.id : i + 1}`;
    if (!p || !isText(p.id, 1) || !isText(p.note, 1) || typeof p.decides !== 'boolean' || !READ_LEVELS.includes(p.read)) { problems.push(`${where} needs id, note, decides (true or false) and read (${READ_LEVELS.join(', ')})`); return; }
    const ids = research[p.note];
    if (!ids) problems.push(`${where} cites a research note that does not exist: docs/research/${p.note}.md`);
    else if (!ids.includes(p.id)) problems.push(`${where} is not a finding of docs/research/${p.note}.md (its findings: ${ids.join(', ') || 'none'})`);
    if (p.decides && p.read !== 'full') problems.push(`${where} decides a design choice and was read as "${p.read}": a principle that decides is read in full, or is marked supports`);
  });
  if (!list.some(p => p && p.decides)) problems.push('no principle decides anything: mark the ones whose findings, if false, would change this design (gate 1)');
  return problems;
}

function approvalProblems(r) {
  const a = r.approved;
  if (!a || typeof a !== 'object') return ['the design record has no "approved" part'];
  return APPROVALS.flatMap(k => {
    const v = a[k];
    if (v === null) return [];
    if (!v || typeof v !== 'object' || !isDate(v.date) || !isText(v.words, 1) || typeof v.fp !== 'string') return [`approved.${k} is neither null nor the owner's date, words and the fingerprint of what they approved (tools/design/approve.mjs writes it)`];
    return v.fp === fingerprint(approvedText(r, k)) ? [] : [`the ${k}${k === 'goal' ? ' or the topics' : ''} changed after the owner approved it on ${v.date}: ask for the approval again (tools/design/approve.mjs)`];
  });
}

// gate 2: the list of what the subject teaches, signed off with the paragraph; gate 4: each part names the topics it covers
function topicProblems(r) {
  if (!Array.isArray(r.topics) || r.topics.length === 0 || r.topics.some(x => !isText(x, 1))) return ['the design record has no topics: the list of what the subject teaches, signed off with the paragraph (gate 2)'];
  return [];
}
export const uncoveredTopics = r => (Array.isArray(r.topics) ? r.topics : []).filter(x => !(Array.isArray(r.parts) ? r.parts : []).some(p => p && Array.isArray(p.topics) && p.topics.includes(x)));

function partProblems(r) {
  if (!Array.isArray(r.parts) || r.parts.length === 0) return ['the design record has no parts (gate 4)'];
  const topics = Array.isArray(r.topics) ? r.topics : [];
  return r.parts.flatMap((p, i) => {
    const where = `part ${p && p.id ? p.id : i + 1}`;
    if (!(p && isText(p.id, 1) && isText(p.title, 1) && isText(p.check) && Array.isArray(p.topics))) return [`${where} needs an id, a title, a check and the topics it covers (gate 4)`];
    return p.topics.filter(x => !topics.includes(x)).map(x => `${where} covers "${x}", which is not on the record's topics list`);
  });
}

function blockProblems(r, principleIds) {
  const blocks = r.lessons;
  if (!blocks || typeof blocks !== 'object' || Object.keys(blocks).length === 0) return ['the design record has no lesson blocks (gate 5)'];
  const checks = Object.fromEntries((r.parts || []).filter(p => p && p.id).map(p => [p.id, p.check]));
  return Object.entries(blocks).flatMap(([id, b]) => {
    const where = `the block of lesson ${id}`;
    if (!b || typeof b !== 'object') return [`${where} is not an object`];
    const problems = [];
    if (!(b.part in checks)) problems.push(`${where} is for part "${b.part}", which is not a part of the record`);
    else if (b.check !== checks[b.part]) problems.push(`${where} has an end check that is not its part's check, word for word (gate 5)`);
    if (!isText(b.does)) problems.push(`${where} does not say what the learner does`);
    if (!isText(b.feedback)) problems.push(`${where} does not say what feedback the learner gets`);
    if (!Array.isArray(b.why) || b.why.length === 0) problems.push(`${where} names no principle under why`);
    else b.why.filter(w => !principleIds.includes(w)).forEach(w => problems.push(`${where} applies principle "${w}", which gate 1 does not have`));
    return problems;
  });
}

// an entry of `tried`: the owner's try, or a stand-in review; 'passes' says whether it lets the lesson go on
export function triedProblems(entry, where, reviews) {
  if (!entry || typeof entry !== 'object') return [`${where} is not an object`];
  if (entry.by === 'owner') return isDate(entry.date) && isText(entry.words, 1) ? [] : [`${where} is the owner's try and needs a date and their words`];
  if (entry.by === 'stand-in') {
    if (!isDate(entry.date) || !isText(entry.review, 1) || !isText(entry.waived, 1)) return [`${where} is a stand-in review and needs a date, the review file and the owner's words for going on without their try (waived)`];
    const verdict = reviews[entry.review];
    if (!verdict) return [`${where} names a review file that does not exist: ${entry.review}`];
    return VERDICTS.includes(verdict) ? [] : [`${where}: ${entry.review} does not open with "Verdict: passes" or "Verdict: fails"`];
  }
  return [`${where} needs by: "owner" or "stand-in"`];
}
export const triedPasses = (entry, reviews) => Boolean(entry) && (entry.by === 'owner' || (entry.by === 'stand-in' && reviews[entry.review] === 'passes'));

function recordProblems(id, r, research, reviews) {
  if (!r) return [`no design record; write docs/subjects/${id}/design.md through the build-subject skill`];
  if (r.error) return [`the design record ${r.error}`];
  const problems = [];
  if (r.subject !== id) problems.push(`the design record names subject "${r.subject}"`);
  if (!Array.isArray(r.kinds) || r.kinds.length === 0) problems.push('the design record names no kind of learning');
  else r.kinds.filter(k => !LEARNING_KINDS.includes(k)).forEach(k => problems.push(`"${k}" is not a kind of learning (${LEARNING_KINDS.join(', ')})`));
  problems.push(...askedProblems(r), ...principleProblems(r, research), ...topicProblems(r));
  if (!isText(r.goal)) problems.push('the design record has no goal: the owner\'s paragraph (gate 2)');
  else if (r.goal.length > GOAL_MAX_CHARS) problems.push(`the goal is ${r.goal.length} characters; the owner reads one screen, under ${GOAL_MAX_CHARS}`);
  TEXT_FIELDS.filter(f => !isText(r[f])).forEach(f => problems.push(`the design record has no ${f}`));
  if (!Array.isArray(r.delivery) || r.delivery.some(d => !isText(d, 1))) problems.push('the design record has no delivery list (what the app must do, gate 3; a list of lines, possibly empty)');
  if (!(typeof r.readingShare === 'number' && r.readingShare > 0 && r.readingShare < 1)) problems.push('the design record has no readingShare between 0 and 1 (gate 3)');
  problems.push(...approvalProblems(r), ...partProblems(r));
  const principleIds = (Array.isArray(r.principles) ? r.principles : []).map(p => p && p.id);
  problems.push(...blockProblems(r, principleIds));
  if (!isText(r.pilot, 1)) problems.push('the design record names no pilot lesson (gate 5)');
  else if (r.lessons && typeof r.lessons === 'object' && !(r.pilot in r.lessons)) problems.push(`the pilot "${r.pilot}" has no block (gate 5)`);
  if (!r.tried || typeof r.tried !== 'object' || Array.isArray(r.tried)) problems.push('the design record has no "tried" part (an object, one entry per lesson tried or reviewed)');
  else Object.entries(r.tried).forEach(([l, e]) => problems.push(...triedProblems(e, `tried.${l}`, reviews)));
  if (!Array.isArray(r.opened) || r.opened.some(o => typeof o !== 'string')) problems.push('the design record has no "opened" list (what gates 1 to 5 read)');
  else r.opened.map(o => [o, forbiddenOpen(id, o)]).filter(([, why]) => why).forEach(([o, why]) => problems.push(`the designer opened ${why} before the gates were written: ${o}`));
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

// the built lessons against the record: every lesson has its block, a live lesson has a passing entry, and the two gate holds
function gateProblems(data, id, r, committed, reviews) {
  const problems = [];
  const built = Object.values(data.subjects[id].lessons).filter(l => l.role !== 'baseline');
  built.forEach(l => {
    const b = r.lessons[l.id];
    if (!b) problems.push(`lesson ${l.id} is built and has no block in the design record (gate 5)`);
    else if (b.part !== l.part) problems.push(`lesson ${l.id} is for part "${l.part}" and its block is for part "${b.part}"`);
    if (l.status === 'live' && !triedPasses(r.tried[l.id], reviews)) problems.push(`lesson ${l.id} is live without a passing entry in tried: the owner's try, or a stand-in review whose verdict passes (gates 6 and 7)`);
  });
  if (!committed) return problems;   // no last commit to measure against (a seeded control without one): only the record is held
  const { lessons, subject } = changedSince(data, id, committed);
  if (!lessons.length && !subject) return problems;
  const what = [...(subject ? ['the subject record'] : []), ...lessons.map(l => `lesson ${l}`)].join(', ');
  const unplaced = unplacedAsks(r);
  if (unplaced.length) return [...problems, `content was written or changed (${what}) while something the owner asked for is in no part: ${unplaced.join(', ')} (gate 0)`];
  const uncovered = uncoveredTopics(r);
  if (uncovered.length) return [...problems, `content was written or changed (${what}) while a topic the owner signed off is in no part: ${uncovered.join(', ')} (gates 2 and 4)`];
  if (!(r.approved.goal && r.approved.practice)) return [...problems, `content was written or changed (${what}) before the owner approved the goal and the practice method (gates 2 and 3)`];
  const beyond = lessons.filter(l => l !== r.pilot && data.subjects[id].lessons[l].role !== 'baseline');
  if (beyond.length && !triedPasses(r.tried[r.pilot], reviews)) problems.push(`lessons past the pilot (${beyond.join(', ')}) were written before the pilot's try or review passed (gate 6)`);
  return problems;
}

export const V69 = siteRule('V69', (input, check) => {
  const designs = input.designs || {}, research = input.research || {}, allReviews = input.reviews || {};
  for (const id of Object.keys(input.data.subjects)) {
    const r = designs[id], reviews = allReviews[id] || {};
    const shape = recordProblems(id, r, research, reviews);
    checkEach(check, id, shape.length ? shape : gateProblems(input.data, id, r, input.committedLock, reviews));
  }
});

export const RULES_DESIGN = [V69];
