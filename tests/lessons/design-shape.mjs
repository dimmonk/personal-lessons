// The shape of a design record, gate by gate (build-subject skill, "The record"), as pure checks over one record: each returns the
// problems as strings. rules-design.mjs (V69) decides which gates a record must have reached and applies the holds.
import { fingerprint } from './fingerprint.mjs';
import { READ_LEVELS, VERDICTS } from './designs.mjs';

export const LEARNING_KINDS = ['facts', 'judging', 'procedure', 'body', 'habit'];
export const GOAL_SCREEN_MAX_CHARS = 3000;    // the one screen the owner reads at gate 2: the paragraph, the topics, the sentence and the test
export const PRACTICE_MAX_CHARS = 600;        // gate 3's "three lines"
// the fields each gate writes; a record may stop after any gate, and no gate's fields may appear before the gates before it are complete
export const GATE_FIELDS = {
  0: ['asked'],
  1: ['kinds', 'principles', 'opened'],
  2: ['goal', 'topics', 'endResult', 'realMoment', 'test', 'out'],
  3: ['practice', 'feedback', 'delivery', 'readingShare'],
  4: ['form', 'parts'],
  5: ['lessons', 'pilot']
};
const DATE = /^\d{4}-\d\d-\d\d$/;
export const isText = (s, min = 10) => typeof s === 'string' && s.trim().length >= min;
export const isDate = s => typeof s === 'string' && DATE.test(s);
const isList = (x, min = 1) => Array.isArray(x) && x.length >= min && x.every(s => isText(s, 1));
const READ_RANK = { full: 3, abstract: 2, summary: 1 };

// the owner's recorded word: their words, quoted, with the date and where they said it
export const ownerWord = (w, where) => !w || typeof w !== 'object' || !isDate(w.date) || !isText(w.words, 1) || !isText(w.where, 1)
  ? [`${where} needs the owner's date, their words quoted, and where they said them`] : [];

// What the owner approves at gate 2 is one screen: the paragraph, the list of what the subject teaches, the sentence and the test. The
// approval's fingerprint is over that screen; tools/design/approve.mjs prints it and records it.
export const goalScreen = r => ({ goal: r.goal, topics: r.topics, endResult: r.endResult, test: r.test });
export const goalScreenText = r => [r.goal, ...(Array.isArray(r.topics) ? r.topics : []), r.endResult, r.test].join('\n');
export const approvedText = (r, field) => field === 'goal' ? goalScreen(r) : r[field];

/* ---------- gate 0 ---------- */
export function askedProblems(r) {
  if (!Array.isArray(r.asked)) return ['the design record has no "asked" list: what the owner asked for, in their words (gate 0; a list, possibly empty)'];
  const topics = Array.isArray(r.topics) ? r.topics : null;
  return r.asked.flatMap((a, i) => {
    const where = `asked item ${a && a.id ? a.id : i + 1}`;
    if (!a || !isText(a.id, 1) || !isText(a.words, 1) || !isText(a.when, 1) || !isText(a.where, 1) || !('owner' in a) || !('kept' in a) || typeof a.dropped !== 'boolean') return [`${where} needs id, words (the owner's), when, where, owner (null or their word), kept (null or the topics that cover it) and dropped (true or false)`];
    const problems = [];
    if (a.owner !== null) problems.push(...ownerWord(a.owner, `${where}: owner`));
    if (a.kept !== null) {
      if (!isList(a.kept)) problems.push(`${where}: kept is neither null nor a list of the topics that cover it`);
      else if (!topics) problems.push(`${where} is kept by topics before the record has a topics list (gate 2)`);
      else a.kept.filter(t => !topics.includes(t)).forEach(t => problems.push(`${where} is kept by "${t}", which is not on the topics list`));
    }
    if (a.dropped && a.owner === null) problems.push(`${where} is dropped without the owner's words`);
    if (a.dropped && a.kept !== null) problems.push(`${where} is both kept and dropped`);
    return problems;
  });
}

// an ask of the last commit that is gone or reworded, or dropped since without the owner's word: the owner's words never change
export function askedSinceProblems(r, committed) {
  if (!committed || !Array.isArray(committed.asked)) return [];
  const now = Object.fromEntries((Array.isArray(r.asked) ? r.asked : []).filter(a => a && a.id).map(a => [a.id, a]));
  return committed.asked.filter(a => a && a.id).flatMap(a => {
    const n = now[a.id];
    if (!n) return [`asked item ${a.id} was removed since the last commit: an ask is dropped only on the owner's word, never removed`];
    if (n.words !== a.words) return [`asked item ${a.id} was reworded since the last commit: the owner's words never change`];
    return [];
  });
}

// the asks that hold the content: not dropped and not covered (no topics, or a topic no part covers)
export function unplacedAsks(r) {
  const covered = new Set((Array.isArray(r.parts) ? r.parts : []).flatMap(p => (p && Array.isArray(p.topics)) ? p.topics : []));
  return (Array.isArray(r.asked) ? r.asked : []).filter(a => a && !a.dropped && !(Array.isArray(a.kept) && a.kept.length && a.kept.every(t => covered.has(t))))
    .map(a => a.id + (a.owner ? ' (the owner said keep; no part covers it yet)' : a.kept ? ' (its topics are in no part yet)' : ' (undecided)'));
}

/* ---------- gate 1 ---------- */
export function principleProblems(r, research) {
  const list = r.principles;
  if (!Array.isArray(list) || list.length === 0) return ['the design record names no principles (gate 1)'];
  const problems = [];
  list.forEach((p, i) => {
    const where = `principle ${p && p.id ? p.id : i + 1}`;
    if (!p || !isText(p.id, 1) || !isText(p.note, 1) || typeof p.decides !== 'boolean' || !READ_LEVELS.includes(p.read)) { problems.push(`${where} needs id, note, decides (true or false) and read (${READ_LEVELS.join(', ')})`); return; }
    const note = research[p.note];
    if (!note) { problems.push(`${where} cites a research note that does not exist: docs/research/${p.note}.md`); return; }
    if (!note.ids.includes(p.id)) { problems.push(`${where} is not a finding of docs/research/${p.note}.md (its findings: ${note.ids.join(', ') || 'none'})`); return; }
    const mark = note.marks[p.id];
    if (mark.decides === null) problems.push(`${where}: docs/research/${p.note}.md does not mark it decides or supports`);
    else if (p.decides && !mark.decides) problems.push(`${where} is recorded as decides and its note marks it supports (a finding may decide less in a subject than in its note, never more)`);
    if (mark.read && READ_RANK[p.read] > READ_RANK[mark.read]) problems.push(`${where} is recorded as read "${p.read}" and its note's Read line says "${mark.read}"`);
    if (p.decides && p.read !== 'full') problems.push(`${where} decides a design choice and was read as "${p.read}": a principle that decides is read in full, or is marked supports`);
    if (p.decides && !isText(p.choice)) problems.push(`${where} decides and names no choice: say which design choice would differ if it were false`);
  });
  if (!list.some(p => p && p.decides)) problems.push('no principle decides anything: mark the ones whose findings, if false, would change this design (gate 1)');
  return problems;
}

// what each stage may open (SKILL.md, "What may be opened"); `opened` keeps one list per stage
const RESEARCH_OK = /^(docs\/research\/|docs\/learning-science|https?:\/\/)/;
const FORBIDDEN_EVERYWHERE = (id, p) => p.startsWith(`public/subjects/${id}/`) ? 'the subject\'s own lessons' : p.startsWith(`docs/learner-view/${id}-`) ? 'the subject\'s learner views'
  : p.startsWith(`docs/subjects/${id}/reviews/`) ? 'the subject\'s reviews' : (/^docs\/subjects\/([^/]+)\//.exec(p) || [])[1] && !p.startsWith(`docs/subjects/${id}/`) ? 'another subject\'s record' : p.startsWith('public/subjects/') ? 'another subject\'s lessons' : null;
// the writer (gates 6 and 7) may open this record, the standard, the test subject for the data shape, this subject's own files, and this
// subject's old material at the tag old-lessons (never another subject's lessons: a copied lesson becomes a template)
const writingOk = (id, p) => p === `docs/subjects/${id}/design.md` || p === 'docs/lesson-standard.md' || p.startsWith('tests/fixtures/fixture-subject/') || p.startsWith(`public/subjects/${id}/`)
  || p.startsWith(`docs/learner-view/${id}-`) || p.startsWith(`old-lessons:public/subjects/${id}/`);
export function openedProblems(id, r) {
  const o = r.opened;
  if (!o || typeof o !== 'object' || Array.isArray(o) || !['asks', 'research', 'design', 'writing'].every(k => Array.isArray(o[k]) && o[k].every(p => typeof p === 'string'))) return ['the design record has no "opened" lists: what gate 0 (asks), gate 1 (research), gates 2 to 5 (design) and gates 6 and 7 (writing) read, one list each'];
  const notes = (Array.isArray(r.principles) ? r.principles : []).map(p => p && `docs/research/${p.note}.md`);
  const problems = [];
  [...o.asks, ...o.research, ...o.design].forEach(p => { const why = FORBIDDEN_EVERYWHERE(id, p); if (why) problems.push(`the designer opened ${why} before the gates were written: ${p}`); });
  o.research.filter(p => !RESEARCH_OK.test(p)).forEach(p => problems.push(`gate 1 opened ${p}, which is not a research note, a source or the science document`));
  o.design.filter(p => !(p === `docs/subjects/${id}/design.md` || notes.includes(p) || p === 'docs/lesson-standard.md')).forEach(p => problems.push(`gates 2 to 5 opened ${p}; they may open only this record, the notes gate 1 cites and docs/lesson-standard.md`));
  o.writing.filter(p => !writingOk(id, p)).forEach(p => problems.push(`the writer opened ${p}; gates 6 and 7 may open only this record, the standard, the test subject, this subject's own files and its old material at the tag old-lessons`));
  return problems;
}

/* ---------- gates 2 and 3 ---------- */
export function goalProblems(r) {
  const problems = [];
  if (!isText(r.goal)) problems.push('the design record has no goal: the owner\'s paragraph (gate 2)');
  if (!isList(r.topics)) problems.push('the design record has no topics: the list of what the subject teaches, signed off with the paragraph (gate 2)');
  ['endResult', 'realMoment', 'test', 'out'].filter(f => !isText(r[f])).forEach(f => problems.push(`the design record has no ${f} (gate 2)`));
  const n = goalScreenText(r).length;
  if (n > GOAL_SCREEN_MAX_CHARS) problems.push(`the screen the owner signs off (the paragraph, the topics, the sentence and the test) is ${n} characters; one screen is under ${GOAL_SCREEN_MAX_CHARS}`);
  return problems;
}
export function practiceProblems(r) {
  const problems = [];
  if (!isText(r.practice)) problems.push('the design record has no practice (gate 3)');
  else if (r.practice.length > PRACTICE_MAX_CHARS) problems.push(`the practice is ${r.practice.length} characters; the owner reads it in three lines, under ${PRACTICE_MAX_CHARS}`);
  if (!isText(r.feedback)) problems.push('the design record has no feedback (gate 3)');
  if (!Array.isArray(r.delivery) || r.delivery.some(d => !isText(d, 1))) problems.push('the design record has no delivery list (what the app must do, gate 3; a list of lines, possibly empty)');
  if (!(typeof r.readingShare === 'number' && r.readingShare > 0 && r.readingShare < 1)) problems.push('the design record has no readingShare between 0 and 1 (gate 3)');
  return problems;
}
export function approvalProblems(r) {
  const a = r.approved;
  if (!a || typeof a !== 'object' || !('goal' in a) || !('practice' in a)) return ['the design record has no "approved" part with goal and practice (each null or the owner\'s approval)'];
  return ['goal', 'practice'].flatMap(k => {
    const v = a[k];
    if (v === null) return [];
    const problems = ownerWord(v, `approved.${k}`);
    if (problems.length) return problems;
    if (typeof v.fp !== 'string') return [`approved.${k} has no fingerprint of the screen approved (tools/design/approve.mjs writes it)`];
    if (k === 'goal' && !Array.isArray(v.shown)) return ['approved.goal does not record which asks were shown as dropped on the screen (shown: a list of ids, possibly empty)'];
    return v.fp === fingerprint(approvedText(r, k)) ? [] : [`the ${k === 'goal' ? 'screen the owner approved (the paragraph, the topics, the sentence or the test)' : 'practice'} changed after the owner approved it on ${v.date}: ask for the approval again (tools/design/approve.mjs)`];
  });
}

/* ---------- gates 4 and 5 ---------- */
export const uncoveredTopics = r => (Array.isArray(r.topics) ? r.topics : []).filter(x => !(Array.isArray(r.parts) ? r.parts : []).some(p => p && Array.isArray(p.topics) && p.topics.includes(x)));
export function partProblems(r) {
  if (!isText(r.form)) return ['the design record has no form: the shape the real moment forces on practice and checks (gate 4)'];
  if (!Array.isArray(r.parts) || r.parts.length === 0) return ['the design record has no parts (gate 4)'];
  const topics = Array.isArray(r.topics) ? r.topics : [];
  const ids = r.parts.map(p => p && p.id);
  const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
  return [...dup.map(x => `two parts have the id "${x}"`), ...r.parts.flatMap((p, i) => {
    const where = `part ${p && p.id ? p.id : i + 1}`;
    if (!(p && isText(p.id, 1) && isText(p.title, 1) && isText(p.check) && Array.isArray(p.topics))) return [`${where} needs an id, a title, a check and the topics it covers (gate 4)`];
    return p.topics.filter(x => !topics.includes(x)).map(x => `${where} covers "${x}", which is not on the record's topics list`);
  })];
}
export function blockProblems(r) {
  const blocks = r.lessons;
  if (!blocks || typeof blocks !== 'object' || Array.isArray(blocks) || Object.keys(blocks).length === 0) return ['the design record has no lesson blocks (gate 5)'];
  const parts = Array.isArray(r.parts) ? r.parts.filter(p => p && p.id) : [];
  const checks = Object.fromEntries(parts.map(p => [p.id, p.check]));
  const principleIds = (Array.isArray(r.principles) ? r.principles : []).map(p => p && p.id);
  const cited = new Set(Object.values(blocks).flatMap(b => (b && Array.isArray(b.why)) ? b.why : []));
  const problems = principleIds.filter(id => !cited.has(id)).map(id => `principle ${id} is cited by no lesson block: a principle that decides or supports nothing in a lesson is decoration (gate 1)`);
  const byPart = {};
  Object.entries(blocks).forEach(([id, b]) => {
    const where = `the block of lesson ${id}`;
    if (!b || typeof b !== 'object') { problems.push(`${where} is not an object`); return; }
    if (!(b.part in checks)) problems.push(`${where} is for part "${b.part}", which is not a part of the record`);
    else { byPart[b.part] = [...(byPart[b.part] || []), id]; if (b.check !== checks[b.part]) problems.push(`${where} has an end check that is not its part's check, word for word (gate 5)`); }
    if (!isText(b.does)) problems.push(`${where} does not say what the learner does`);
    if (!isText(b.feedback)) problems.push(`${where} does not say what feedback the learner gets`);
    if (!Array.isArray(b.why) || b.why.length === 0) problems.push(`${where} names no principle under why`);
    else b.why.filter(w => !principleIds.includes(w)).forEach(w => problems.push(`${where} applies principle "${w}", which gate 1 does not have`));
  });
  parts.forEach(p => { const n = (byPart[p.id] || []).length; if (n !== 1) problems.push(`part ${p.id} has ${n === 0 ? 'no lesson block' : `${n} lesson blocks (${byPart[p.id].join(', ')})`}: one lesson per part (gate 4)`); });
  if (!isText(r.pilot, 1)) problems.push('the design record names no pilot lesson (gate 5)');
  else if (!(r.pilot in blocks)) problems.push(`the pilot "${r.pilot}" has no block (gate 5)`);
  return problems;
}

/* ---------- gates 6 and 7 ---------- */
export function triedProblems(entry, where, reviews) {
  if (!entry || typeof entry !== 'object') return [`${where} is not an object`];
  if (entry.by === 'owner') {
    const problems = ownerWord(entry, where);
    if (typeof entry.passed !== 'boolean' || !isText(entry.confused, 1) || !isText(entry.waste, 1) || typeof entry.comeBack !== 'boolean') problems.push(`${where} is the owner's try and records passed (true or false), what confused them, what was waste, and comeBack (true or false)`);
    return problems;
  }
  if (entry.by === 'stand-in') {
    if (!isDate(entry.date) || !isText(entry.review, 1)) return [`${where} is a stand-in review and needs a date and the review file`];
    const problems = ownerWord(entry.waived, `${where}: waived (the owner's words for going on without their try)`);
    const verdict = reviews[entry.review];
    if (!verdict) return [...problems, `${where} names a review file that does not exist: ${entry.review}`];
    if (verdict === 'unreadable') problems.push(`${where}: ${entry.review} does not open with "Verdict: passes" or "Verdict: fails" and a "Reviewer:" line naming who reviewed and what they opened`);
    return problems;   // a review with a Disclosure is recorded as it is; it never passes (triedPasses), and a fresh reviewer runs it again
  }
  return [`${where} needs by: "owner" or "stand-in"`];
}
export const triedPasses = (entry, reviews) => Boolean(entry) && (entry.by === 'owner' ? entry.passed === true && entry.comeBack === true : entry.by === 'stand-in' && reviews[entry.review] === 'passes');
export function triedShapeProblems(r, reviews) {
  if (!r.tried || typeof r.tried !== 'object' || Array.isArray(r.tried)) return ['the design record has no "tried" part (an object, one entry per lesson tried or reviewed)'];
  return Object.entries(r.tried).flatMap(([l, e]) => triedProblems(e, `tried.${l}`, reviews));
}
export const VERDICT_WORDS = VERDICTS;
