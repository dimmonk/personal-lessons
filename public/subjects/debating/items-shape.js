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
