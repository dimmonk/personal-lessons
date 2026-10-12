// The shape of a design record, gate by gate (build-subject skill, "The record"), as pure checks over one record: each returns the
// problems as strings. rules-design.mjs (V69) decides which gates a record must have reached and applies the holds.
import { fingerprint, lessonFingerprint } from './fingerprint.mjs';
import { READ_LEVELS, VERDICTS } from './designs.mjs';

export const LEARNING_KINDS = ['facts', 'judging', 'procedure', 'body', 'habit'];
export const GOAL_SCREEN_MAX_CHARS = 5000;    // the one screen the owner reads at gate 2, as printed: about 750 words (a subject with eight asks and 27 topics sits near it); more is too much to sign off at once
export const ASK_SHOWN_CHARS = 100;           // an ask is shown by its first hundred characters: the owner knows their own words; the screen shows where each lands
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
// the design as reviewed at gate 5: everything the gates decide, without the approvals, the tries, the review pointer and the reads
const DESIGN_FIELDS = ['asked', 'kinds', 'principles', 'goal', 'topics', 'endResult', 'realMoment', 'test', 'out', 'practice', 'feedback', 'delivery', 'readingShare', 'form', 'parts', 'lessons', 'pilot'];
// the owner's own decisions (their word on an ask, a drop, and the placement the approval screen shows them) are not what the record
// review judged: an ask counts in the design by its words; whether every ask is covered is the hold on content
export const designFingerprint = r => fingerprint(Object.fromEntries(DESIGN_FIELDS.filter(f => f in r).map(f => [f, f === 'asked' ? (Array.isArray(r.asked) ? r.asked : []).map(a => ({ id: a && a.id, words: a && a.words })) : r[f]])));

// the owner's recorded word: their words, quoted, with the date and where they said it
export const ownerWord = (w, where) => !w || typeof w !== 'object' || !isDate(w.date) || !isText(w.words, 1) || !isText(w.where, 1)
  ? [`${where} needs the owner's date, their words quoted, and where they said them`] : [];

// The asks that need the owner's word: not dropped, not covered by topics, and no word from them yet. They are shown on the gate 2 screen.
export const dropsToShow = r => (Array.isArray(r.asked) ? r.asked : []).filter(a => a && !a.dropped && a.kept === null && a.owner === null).map(a => ({ id: a.id, words: a.words }));
// What the owner approves at gate 2 is one screen, printed by tools/design/approve.mjs exactly as `screenText` builds it: the paragraph,
// the list of what the subject teaches, the sentence, the test and the drops. The approval's fingerprint is over the paragraph, the
// topics, the sentence, the test and the drops' words; `shown` keeps the drops' ids.
// every ask is on the screen with where it is taught (its topics), the owner's word on it, or "needs your word": a session cannot map an ask away unseen.
// The fingerprint covers what the design decides for each ask (its words and the topics it is placed under), not the owner's own word on it.
export const asksToShow = r => (Array.isArray(r.asked) ? r.asked : []).map(a => ({ words: a.words, kept: a.kept, dropped: a.dropped, owner: a.owner ? a.owner.words : null }));
export const goalScreen = r => ({ goal: r.goal, topics: r.topics, endResult: r.endResult, test: r.test, asks: asksToShow(r).map(a => ({ words: a.words, kept: a.kept, dropped: a.dropped })) });
export const approvedText = (r, field) => field === 'goal' ? goalScreen(r) : r[field];
export function screenText(r, field) {
  if (field === 'practice') return `How ${r.subject} is practiced:\n${r.practice}\n\nOn track, or not?`;
  const lines = [r.goal, '', `${r.subject} teaches:`, ...(Array.isArray(r.topics) ? r.topics : []).map(t => `- ${t}`), '', r.endResult, '', `The test: ${r.test}`];
  const asks = asksToShow(r);
  if (asks.length) lines.push('', 'What you asked for, and where it is taught:', ...asks.map(a => `- ${a.words.length > ASK_SHOWN_CHARS ? a.words.slice(0, ASK_SHOWN_CHARS - 3) + '...' : a.words}: ${a.dropped ? `dropped on your word ("${a.owner}")` : a.kept ? `taught under ${Array.isArray(r.topics) && a.kept.length === r.topics.length && r.topics.every(x => a.kept.includes(x)) ? 'every topic' : a.kept.join('; ')}` : a.owner ? `you said "${a.owner}"; the design still has to place it` : 'NOT IN THIS DESIGN: needs your word (keep it here, move it, or drop it)'}`));
  lines.push('', 'On track, or not?');
  return lines.join('\n');
}

/* ---------- gate 0 ---------- */
export function askedProblems(r) {
  if (!Array.isArray(r.asked)) return ['the design record has no "asked" list: what the owner asked for, in their words (gate 0; a list, possibly empty)'];
  const topics = Array.isArray(r.topics) ? r.topics : null;
  return r.asked.flatMap((a, i) => {
    const where = `asked item ${a && a.id ? a.id : i + 1}`;
    if (!a || !isText(a.id, 1) || !isText(a.words, 1) || !isText(a.when, 1) || !isText(a.where, 1) || !('owner' in a) || !('kept' in a) || typeof a.dropped !== 'boolean') return [`${where} needs id, words (the owner's), when, where, owner (null or their word), kept (null or the topics that cover it) and dropped (true or false)`];
    const problems = [];
    if (a.owner !== null) problems.push(...ownerWord(a.owner, `${where}: owner`), ...previousProblems(a.owner, `${where}: owner`));
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
    const problems = [];
    if (n.words !== a.words) problems.push(`asked item ${a.id} was reworded since the last commit: the owner's words never change`);
    if (n.when !== a.when || n.where !== a.where) problems.push(`asked item ${a.id}: when or where it was asked changed since the last commit`);
    if (a.owner && !laterWord(n.owner, a.owner)) problems.push(`asked item ${a.id}: the owner's recorded word on it was edited or taken away since the last commit (a later word of theirs replaces it and keeps it in previous; it is never edited in place)`);
    const newWord = Boolean(n.owner) && !sameEntry(n.owner, a.owner);
    if (n.dropped && !a.dropped && !newWord) problems.push(`asked item ${a.id} was dropped since the last commit without a new word of the owner's: only their word drops an ask`);
    if (a.kept !== null && n.kept === null && !n.dropped && !newWord) problems.push(`asked item ${a.id} lost its topics since the last commit without a new word of the owner's`);
    if (Array.isArray(a.kept) && Array.isArray(n.kept) && !a.kept.every(x => n.kept.includes(x)) && !newWord) problems.push(`asked item ${a.id} lost a topic it was placed under at the last commit (${a.kept.filter(x => !n.kept.includes(x)).join('; ')}) without a new word of the owner's: the topics an ask is taught under only grow`);
    return problems;
  });
}

// the asks that hold the content: not dropped and not covered (no topics, or a topic no part covers)
// Owner entries are append-only. An entry that stands may be replaced by a later one (a later or same date, other words) that keeps it, and
// everything it kept, in `previous`; it is never edited in place or taken away. `bare` is an entry without its previous list.
const bare = e => { if (!e || typeof e !== 'object') return e; const { previous, ...rest } = e; return rest; };
const sameEntry = (a, b) => JSON.stringify(bare(a)) === JSON.stringify(bare(b));
const isPrefix = (was, now) => Array.isArray(was) && Array.isArray(now) && was.length <= now.length && was.every((e, i) => JSON.stringify(e) === JSON.stringify(now[i]));
const keepsInPrevious = (now, was) => { if (!now || !Array.isArray(now.previous)) return false; const i = now.previous.findIndex(e => sameEntry(e, was)); return i >= 0 && isPrefix(was.previous || [], now.previous.slice(0, i)); };
const laterWord = (now, was) => !was || sameEntry(now, was) && isPrefix(was.previous || [], now.previous || [])
  || (now && now.date >= was.date && now.words !== was.words && keepsInPrevious(now, was));
// the owner's words compared without case, punctuation or spacing: "On track." and "on track" are one word
// two replies are the same words when their letters and digits (of any script) are the same; a reply with none (a thumbs-up) is itself
export const wordsKey = s => { const k = String(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim(); return k || String(s).trim(); };
export const sameWords = (a, b) => wordsKey(a) === wordsKey(b);
export const previousProblems = (e, where) => e && typeof e === 'object' && 'previous' in e && !(Array.isArray(e.previous) && e.previous.every(x => x && typeof x === 'object')) ? [`${where}: previous is not a list of the entries it replaced`] : [];
export function unplacedAsks(r) {
  const covered = new Set((Array.isArray(r.parts) ? r.parts : []).flatMap(p => (p && Array.isArray(p.topics)) ? p.topics : []));
  return (Array.isArray(r.asked) ? r.asked : []).filter(a => a && !a.dropped && !(Array.isArray(a.kept) && a.kept.length && a.kept.every(t => covered.has(t))))
    .map(a => a.id + (a.owner ? ' (the owner said keep; no part covers it yet)' : a.kept ? ' (its topics are in no part yet)' : ' (undecided)'));
}

// approvals and tries are compared with the last commit the same way. An approval that is cleared or replaced goes, unchanged, to the end of
// approved.history[k], which only grows; a try that is replaced is kept in the new entry's `previous`; nothing is edited or taken away.
export function ownerSinceProblems(r, committed) {
  if (!committed) return [];
  const problems = [];
  ['goal', 'practice'].forEach(k => {
    const was = committed.approved && committed.approved[k], now = r.approved && r.approved[k];
    const wasHistory = (committed.approved && committed.approved.history && committed.approved.history[k]) || [], nowHistory = (r.approved && r.approved.history && r.approved.history[k]) || [];
    if (!isPrefix(wasHistory, nowHistory)) problems.push(`approved.history.${k} lost or changed an entry since the last commit: it only grows`);
    if (was && !sameEntry(now, was)) {
      const kept = nowHistory.slice(wasHistory.length).some(e => sameEntry(e, was));
      if (!kept) problems.push(`approved.${k} was changed since the last commit without the entry that stood going to approved.history.${k}: an approval is never edited or taken away`);
    }
  });
  Object.entries(committed.tried || {}).forEach(([l, was]) => {
    const now = r.tried && r.tried[l];
    if (!now) { problems.push(`tried.${l} was taken away since the last commit: a try or review is replaced by a later one, never removed`); return; }
    if (sameEntry(now, was) && isPrefix(was.previous || [], now.previous || [])) return;
    const kept = now.date >= was.date && keepsInPrevious(now, was);
    if (!kept) problems.push(`tried.${l} was changed since the last commit without keeping the entry that stood in its previous: a later try or review replaces it, it is never edited in place`);
  });
  return problems;
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
// the owner's messages, the brief, their course documents (a top-level folder of their own, never docs, tests, tools or public), the project's
// records of their words (the worklist, the handoff, this subject's own record), the version of this subject they used; never a research
// note, an audit, code or another subject's old lessons
const asksOk = (id, p) => /^(chat\b|the brief|https?:\/\/|docs\/lesson-rebuild-todo\.md|docs\/HANDOFF\.md)/.test(p) || p === `docs/subjects/${id}/design.md`
  || p.startsWith(`old-lessons:public/subjects/${id}/`) || /^(?!docs\/|tests\/|tools\/|public\/|\.)[^/\s]+\/[^/\s]+\.md\b/.test(p);
const FORBIDDEN_EVERYWHERE = (id, p) => p.startsWith(`public/subjects/${id}/`) ? 'the subject\'s own lessons' : p.startsWith(`docs/learner-view/${id}-`) ? 'the subject\'s learner views'
  : p.startsWith(`docs/subjects/${id}/reviews/`) ? 'the subject\'s reviews' : (/^docs\/subjects\/([^/]+)\//.exec(p) || [])[1] && !p.startsWith(`docs/subjects/${id}/`) ? 'another subject\'s record' : p.startsWith('public/subjects/') ? 'another subject\'s lessons'
  : p.startsWith('docs/learner-view/') ? 'a learner view' : p.startsWith('public/') ? 'the engine\'s code' : p.startsWith('tests/') || p.startsWith('tools/') ? 'the validator or the tools' : null;
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
  o.asks.filter(p => !asksOk(id, p)).forEach(p => problems.push(`gate 0 opened ${p}, which is not one of the owner's messages, briefs or course documents, the project's records of their words, or the version of this subject they used (old-lessons:public/subjects/${id}/…)`));
  o.research.filter(p => !RESEARCH_OK.test(p)).forEach(p => problems.push(`gate 1 opened ${p}, which is not a research note, a source or the science document`));
  o.design.filter(p => !(p === `docs/subjects/${id}/design.md` || notes.includes(p) || p === 'docs/lesson-standard.md')).forEach(p => problems.push(`gates 2 to 5 opened ${p}; they may open only this record, the notes gate 1 cites and docs/lesson-standard.md`));
  o.writing.filter(p => !writingOk(id, p)).forEach(p => problems.push(`the writer opened ${p}; gates 6 and 7 may open only this record, the standard, the test subject, this subject's own files and its old material at the tag old-lessons`));
  if (Array.isArray(r.asked) && r.asked.length && o.asks.length === 0) problems.push('opened.asks is empty: the asks were written from sources (the owner\'s messages, briefs, course documents, the version they used), and those are listed');
  return problems;
}
// what was opened only grows: a path taken off a list after the fact hides a read. The one exception is a redesign: when `designedOn`
// advances, gates 1 to 5 were run again, and the lists are the new pass's (the old pass's lists stay in the prose under History).
export function openedSinceProblems(r, committed, id) {
  if (!committed || !committed.opened || typeof committed.opened !== 'object' || !r.opened || typeof r.opened !== 'object') return [];
  const redesigned = isDate(r.designedOn) && (!committed.designedOn || r.designedOn > committed.designedOn);
  // a source listed under asks that was never owner material (it fails the allow-list) is a mistake, not a read, and may be taken off; a read
  // of what no stage may open (a lesson, a learner view, a review, another record) is never taken off
  const erasable = p => !asksOk(id, p) && !FORBIDDEN_EVERYWHERE(id, p);
  return ['asks', 'research', 'design', 'writing'].filter(k => k === 'asks' || !redesigned).flatMap(k => (Array.isArray(committed.opened[k]) ? committed.opened[k] : []).filter(p => !(Array.isArray(r.opened[k]) && r.opened[k].includes(p)) && !(k === 'asks' && erasable(p))).map(p => `opened.${k} lost "${p}" since the last commit: what was opened is never un-opened`));
}

/* ---------- gates 2 and 3 ---------- */
export function goalProblems(r) {
  const problems = [];
  if (!isText(r.goal)) problems.push('the design record has no goal: the owner\'s paragraph (gate 2)');
  if (!isList(r.topics)) problems.push('the design record has no topics: the list of what the subject teaches, signed off with the paragraph (gate 2)');
  ['endResult', 'realMoment', 'test', 'out'].filter(f => !isText(r[f])).forEach(f => problems.push(`the design record has no ${f} (gate 2)`));
  const n = screenText(r, 'goal').length;
  if (n > GOAL_SCREEN_MAX_CHARS) problems.push(`the screen the owner signs off, as printed (the paragraph, the topics, the sentence, the test and the drops), is ${n} characters; one screen is under ${GOAL_SCREEN_MAX_CHARS}`);
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
  if (!a.history || typeof a.history !== 'object' || !['goal', 'practice'].every(k => Array.isArray(a.history[k]))) return ['approved has no history (goal and practice lists of the approvals that were cleared or replaced; possibly empty)'];
  const badHistory = ['goal', 'practice'].flatMap(k => a.history[k].flatMap((e, i) => ownerWord(e, `approved.history.${k}[${i}]`).length || typeof e.fp !== 'string' ? [`approved.history.${k}[${i}] is not an approval that stood (the owner's date, words, where and a fingerprint)`] : []));
  if (badHistory.length) return badHistory;
  return ['goal', 'practice'].flatMap(k => {
    const v = a[k];
    if (v === null) return [];
    const problems = ownerWord(v, `approved.${k}`);
    if (problems.length) return problems;
    if (typeof v.fp !== 'string') return [`approved.${k} has no fingerprint of the screen approved (tools/design/approve.mjs writes it)`];
    if (k === 'goal' && !Array.isArray(v.shown)) return ['approved.goal does not record which asks were shown as needing the owner\'s word (shown: a list of ids, possibly empty)'];
    if (k === 'goal' && !isText(v.sentence)) return ['approved.goal does not carry the sentence approved (sentence: the endResult on the screen; the subject record mirrors it, V80)'];
    if (k === 'goal' && v.sentence !== r.endResult) return ['approved.goal.sentence is not the endResult on the screen it binds'];
    const again = a.history[k].find(e => e && isText(e.words, 1) && sameWords(e.words, v.words));
    if (again) return [`approved.${k} carries the same words as an earlier approval (${again.date}): a new approval needs the owner's new words`];
    if (k === 'goal') {
      const waiting = dropsToShow(r).map(d => d.id).filter(id => !v.shown.includes(id));
      if (waiting.length) return [`an ask waits for the owner's word and was not on the screen they approved on ${v.date}: ${waiting.join(', ')}; ask again`];
    }
    return v.fp === fingerprint(approvedText(r, k)) ? [] : [`the ${k === 'goal' ? 'screen the owner approved (the paragraph, the topics, the sentence, the test or the drops)' : 'practice'} changed after the owner approved it on ${v.date}: ask for the approval again (tools/design/approve.mjs)`];
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
  const settled = Boolean(r.approved && r.approved.practice);   // before the practice is approved the design is in flux: a new principle may wait for its block
  const problems = settled ? principleIds.filter(id => !cited.has(id)).map(id => `principle ${id} is cited by no lesson block: a principle that decides or supports nothing in a lesson is decoration (gate 1)`) : [];
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

// gate 5: the record is read against the skill by someone who did not write it before the pilot is built; the review file's verdict is read
export function designReviewProblems(r, reviews) {
  const d = r.designReview;
  if (d === null || d === undefined) return [];
  if (!d || typeof d !== 'object' || !isDate(d.date) || !isText(d.file, 1)) return ['designReview is neither null nor the date and file of the record\'s review'];
  const rv = reviews[d.file];
  if (!rv) return [`designReview names a review file that does not exist: ${d.file}`];
  if (rv.verdict === 'unreadable') return [`designReview: ${d.file} does not open with "Verdict: passes" or "Verdict: fails", a "Reviewer:" line (who, which model, the date) and a "Reviewed:" line with the fingerprint of the design it reviewed`];
  if (rv.date !== d.date) return [`designReview.date is ${d.date} and ${d.file}'s Reviewer line says ${rv.date}: the record's date is the file's`];
  return [];
}
// the record's review counts for the design it reviewed: its Reviewed fingerprint is the design's now
export const designReviewed = (r, reviews) => Boolean(r.designReview) && Boolean(reviews[r.designReview.file]) && reviews[r.designReview.file].verdict === 'passes' && reviews[r.designReview.file].reviewed === designFingerprint(r)
  && (!isDate(r.designedOn) || r.designReview.date >= r.designedOn);

/* ---------- gates 6 and 7 ---------- */
export function triedProblems(entry, where, reviews) {
  if (!entry || typeof entry !== 'object') return [`${where} is not an object`];
  const fp = [...(typeof entry.fp === 'string' && entry.fp.startsWith('sha256:') ? [] : [`${where} carries no fingerprint of the lesson as it was tried (fp; tools/design/tried.mjs writes it)`]), ...previousProblems(entry, where)];
  if (entry.by === 'owner') {
    const problems = [...ownerWord(entry, where), ...fp];
    if (typeof entry.passed !== 'boolean' || !isText(entry.confused, 1) || !isText(entry.waste, 1) || typeof entry.comeBack !== 'boolean') problems.push(`${where} is the owner's try and records passed (true or false), what confused them, what was waste, and comeBack (true or false)`);
    return problems;
  }
  if (entry.by === 'stand-in') {
    if (!isDate(entry.date) || !isText(entry.review, 1)) return [`${where} is a stand-in review and needs a date and the review file`];
    const problems0 = fp;
    const problems = [...problems0, ...ownerWord(entry.waived, `${where}: waived (the owner's words for going on without their try)`)];
    const rv = reviews[entry.review];
    if (!rv) return [...problems, `${where} names a review file that does not exist: ${entry.review}`];
    if (rv.verdict === 'unreadable') problems.push(`${where}: ${entry.review} does not open with "Verdict: passes" or "Verdict: fails", a "Reviewer:" line (who, which model, the date) and a "Reviewed:" line with the fingerprint of the lesson it reviewed`);
    else if (rv.reviewed !== entry.fp) problems.push(`${where}: the entry's fingerprint is not the one ${entry.review} says it reviewed (a review counts for the lesson it read)`);
    else if (rv.date !== entry.date) problems.push(`${where}: the entry's date is ${entry.date} and ${entry.review}'s Reviewer line says ${rv.date}: the entry's date is the file's`);
    if (!/^reviews\/[^/]+\.md$/.test(entry.review) || entry.review === 'reviews/design.md') problems.push(`${where}: a lesson's review is reviews/<lesson>.md, not ${entry.review}`);
    return problems;   // a review with a Disclosure is recorded as it is; it never passes (triedPasses), and a fresh reviewer runs it again
  }
  return [`${where} needs by: "owner" or "stand-in"`];
}
// a try or review passes for the lesson as it was tried: the entry's fingerprint is the lesson's now (a rewritten lesson is tried again)
export const triedPasses = (entry, reviews, lessonFp) => Boolean(entry) && (lessonFp === undefined || entry.fp === lessonFp)
  && (entry.by === 'owner' ? entry.passed === true : entry.by === 'stand-in' && Boolean(reviews[entry.review]) && reviews[entry.review].verdict === 'passes' && reviews[entry.review].reviewed === entry.fp);
export const lessonFp = (data, subjectId, lessonId) => data.subjects[subjectId] && data.subjects[subjectId].lessons[lessonId] ? lessonFingerprint(data, subjectId, lessonId) : undefined;
export function triedShapeProblems(r, reviews) {
  if (!r.tried || typeof r.tried !== 'object' || Array.isArray(r.tried)) return ['the design record has no "tried" part (an object, one entry per lesson tried or reviewed)'];
  return Object.entries(r.tried).flatMap(([l, e]) => triedProblems(e, `tried.${l}`, reviews));
}
export const VERDICT_WORDS = VERDICTS;
// designedOn: the date gates 1 to 5 were last run; a later date is a redesign
export const designedOnProblems = r => r.designedOn === undefined ? ['the design record has no designedOn (the date gates 1 to 5 were last run)'] : isDate(r.designedOn) ? [] : ['designedOn is not a date'];
