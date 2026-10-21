// Debating: the ways a question is put together (lesson standard 3), so the words of every ask and the slip each wrong answer names are written once.
// A scene is a setup in plain words and a talk the learner reads (lines that can be marked as the deciding words or tapped); the asks are one answer from a list of
// the subject, a pick among answers written for the one question, or a tap on the line that decides. This file makes plain data and registers nothing.
const DB_KINDS = ['persuade', 'decide', 'bargain', 'inquire', 'ask', 'quarrel'];
const DB_MOVES = ['continue', 'change', 'leave'];
// the name of a wrong move, by the move that was right and the one picked
const DB_MOVE_SLIPS = {
  continue: { change: 'gave-up-early', leave: 'gave-up-early' },
  change: { continue: 'kept-pushing', leave: 'left-too-soon' },
  leave: { continue: 'kept-pushing', change: 'too-mild' }
};

const dbSlipsFor = (all, right, slip) => Object.fromEntries(all.filter(id => id !== right).map(id => [id, slip]));
// a line of a talk: [id, words] or, for a line a tap can pick wrongly, [id, words, note, slip]
const dbLine = ([id, text, note, slip]) => ({ id, text, ...(note ? { note } : {}), ...(slip ? { slip } : {}) });

// what the learner reads first, in plain words
const dbSetup = text => ({ kind: 'prose', text });
// a talk in person: each row is a line
const dbTalk = (...rows) => ({ kind: 'prose', id: 'talk', lines: rows.map(dbLine) });
// a text thread you are in: rows are [line id, words] and, for a line you sent, [line id, words, true]
const dbThread = (from, detail, ...rows) => ({ kind: 'message', id: 'talk', form: 'thread', from, detail, lines: rows.map(([id, text, me]) => ({ id, text, ...(me ? { me: true } : {}) })) });
// a post and the replies under it
const dbPost = (source, ...rows) => ({ kind: 'article', id: 'talk', form: 'post', source, lines: rows.map(dbLine) });

// lesson 1: what kind of conversation. `slip` names every wrong pick (one name, or a map by the option picked); `then` gives a line to a pick that is the likely one
const dbKindAsk = (right, slip, then, id = 'kind', prompt = 'What kind of conversation is this?') => ({ id, kind: 'choose', prompt, from: 'dialogue', right, shuffle: true,
  slips: typeof slip === 'string' ? dbSlipsFor(DB_KINDS, right, slip) : { ...dbSlipsFor(DB_KINDS, right, 'by-topic'), ...slip }, ...(then ? { then } : {}) });
// a talk that changes kind: the line where it changes (a tap), then what it is after that line
const dbChangeAsks = (line, now, then) => [
  { id: 'where', kind: 'tap', prompt: 'Tap the line where the talk changes into another kind.', in: 'talk', right: [line] },
  dbKindAsk(now, 'missed-shift', then, 'now', 'What kind of conversation is it after that line?')
];

// lesson 2: a scene where someone resists, and one decision: what the disagreement is about. The three statements are always the same three, written to the same form and length;
// each is right in some scenes (a fact that can be checked, a view about a group or a policy, or the two mixed), so none is a fixed decoy. The move is given in the feedback.
const DB_READ_TEXT = { fact: 'A fact that someone could check.', view: 'A view about a group or a policy.', both: 'A fact and a view, mixed together.' };
const DB_READ_SLIP = { fact: 'took-for-fact', view: 'took-for-view', both: 'took-for-mix' };
const dbReadAsk = right => ({ id: 'read', kind: 'choose', prompt: 'What is the disagreement about?', shuffle: true,
  options: Object.entries(DB_READ_TEXT).map(([id, text]) => ({ id, text, ...(id === right ? { ok: true } : { slip: DB_READ_SLIP[id] }) })) });

// lesson 3: keep going, change the subject or leave, then the line of the talk that decides it (a tap)
const dbMoveAsk = (right, then) => ({ id: 'move', kind: 'choose', prompt: 'What do you do?', from: 'move', right, shuffle: true,
  slips: Object.fromEntries(DB_MOVES.filter(id => id !== right).map(id => [id, DB_MOVE_SLIPS[right][id]])), ...(then ? { then } : {}) });
// the line (or the n lines) of the talk that decide it, tapped after the move
const dbCueAsk = (...lines) => ({ id: 'cue', kind: 'tap', prompt: lines.length > 1 ? `Tap the ${lines.length} lines that decide it.` : 'Tap the line that decides it.', in: 'talk', right: lines, ...(lines.length > 1 ? { pick: lines.length } : {}) });
// lesson 3: a fair aim for the next few lines (the small step the other person has just offered, among three other steps written as modestly), and the words for a change of
// subject or a step out (one that says what you are doing, with no jab and no last word). Rows are [words, true for the right one or the slip the others name].
const dbPick = (id, prompt, rows) => ({ id, kind: 'choose', prompt, shuffle: true, options: rows.map(([text, mark], i) => ({ id: String.fromCharCode(97 + i), text, ...(mark === true ? { ok: true } : { slip: mark }) })) });
const dbAimAsk = rows => dbPick('aim', 'What is a fair aim for the next few lines?', rows);
const dbSayAsk = (rows, prompt = 'Which line do you say?') => dbPick('say', prompt, rows);

// lesson 4: what the other person's last reply is about. Aristotle's three means of persuasion (docs/research/debating.md, F9) are the three answers: whether they can trust you
// (what your words show of good sense, honesty and goodwill), how they feel (their frame of mind), the argument itself. The three answers are written once, to one form, and each is
// right in some scenes; a reply that is about two things is asked as a pair. The reading of a reply is graded; what to say next is written, never scored.
const DB_MEANS_TEXT = { trust: 'Whether they can trust you.', feeling: 'How they feel right now.', argument: 'The argument itself.' };
const DB_MEANS_SLIP = { trust: 'took-for-trust', feeling: 'took-for-feeling', argument: 'took-for-argument' };
const DB_PAIR_TEXT = { 'trust-feeling': 'Whether they can trust you, and how they feel.', 'trust-argument': 'Whether they can trust you, and the argument.', 'feeling-argument': 'How they feel, and the argument.' };
// a pick among the answers of one list: the right one, and for each wrong one its slip and, where it is the likely one, a line
const dbPickFrom = (texts, slipOf, right, prompt, then, id) => ({ id, kind: 'choose', prompt, shuffle: true,
  options: Object.entries(texts).map(([key, text]) => ({ id: key, text, ...(key === right ? { ok: true } : { slip: slipOf(key), ...(then && then[key] ? { then: then[key] } : {}) }) })) });
const dbMeansAsk = (right, then) => dbPickFrom(DB_MEANS_TEXT, key => DB_MEANS_SLIP[key], right, 'What is their reply about?', then, 'means');
const dbPairAsk = (right, then) => dbPickFrom(DB_PAIR_TEXT, () => 'wrong-pair', right, 'Their reply is about two of these. Which two?', then, 'means');
// the argument you gave did not land: too long to follow, started from something they do not accept, or neither (the reply is about something else)
const DB_BUILD_TEXT = { length: 'It was too long to follow.', start: 'It started from something they do not accept.', neither: 'Neither: the reply is not about how it was built.' };
const DB_BUILD_SLIP = { length: 'read-length', start: 'read-start', neither: 'read-neither' };
const dbBuildAsk = (right, then) => dbPickFrom(DB_BUILD_TEXT, key => DB_BUILD_SLIP[key], right, 'Why did the argument not land?', then, 'build');
// the first line of your own reply, written against a model and never scored
const dbWriteAsk = model => ({ id: 'say', kind: 'text', prompt: 'Write the first line of your reply.', model });

// lesson 5: what a true story got you, read from the other person's last lines (a hearing, a small move or neither); and the check of your own story, line by line
const DB_RESULT_TEXT = { hearing: 'A hearing: they took you seriously, and their view did not move.', move: 'A small move: part of their view shifted.', neither: 'Neither shows in what they said.' };
const DB_RESULT_SLIP = { hearing: 'took-for-hearing', move: 'took-for-move', neither: 'took-for-nothing' };
const dbResultAsk = (right, then) => dbPickFrom(DB_RESULT_TEXT, key => DB_RESULT_SLIP[key], right, 'What did your story get you?', then, 'result');
// a story you plan to tell, line by line: tap the one you could not honestly say, or say that every line is true. A true line tapped by mistake says it matches what happened.
const dbDraft = (falseId, ...rows) => dbTalk(...rows.map(([id, text]) => id === falseId ? [id, text] : [id, text, 'This line matches what happened.', 'flagged-true']));
const dbTrueAsk = falseId => ({ id: 'true', kind: 'tap', prompt: 'Tap the line you could not honestly say.', in: 'talk', right: falseId ? [falseId] : 'none', none: 'Every line is true.' });
