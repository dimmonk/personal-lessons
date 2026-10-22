/* ===================== SINGING: WHAT A SUNG NOTE WAS, BY THE LESSONS' OWN DEFINITIONS (pure) ===================== */
// A sung note is judged in three parts, each read from the numbers a try stores ({ cents, start, end, turns, left, holdMs }):
//   begin:  how it began: on the note, slid into it (and where it landed: on, or still off), or off it, and on which side;
//   middle: what a held note did (a hold, a melody's long last note): stayed steady, drifted under or over, wandered off and back, stopped
//           or broke while on the note, or, when it began off, found the note, crossed to the other side, went further off or stayed off;
//   end:    where a held note ended: on, under or over.
// Each outcome a lesson teaches is a named combination of parts in one table, SING_OUTCOMES, with the lesson's definition beside it. One
// function, singJudge, finds each note's outcome and builds from it the mark, the reading a guess is checked against (the question the
// lesson asks: where a held note ended; where a note sat, or started when it slid onto the note) and the lines that say which way to move.
// sing-strip.js puts these into words and reads nothing else, so they cannot disagree. tests/sing-pure.mjs runs a generator of composite
// contours through it. Needs singOnNote, singWordKey, singSlid, singHunted, singTolerance, SING_MISSED, SING_MELODY_HOLD_MS (sing-task.js).

const singSideOf = (ask, cents) => singOnNote(ask, cents) ? 0 : cents < 0 ? -1 : 1;
const singHeard = cents => Number.isFinite(cents) && Math.abs(cents) < SING_MISSED;

// the three parts of one note. held: a hold, or a melody's long last note; single: a match or a light note (judged on its start too)
function singParts(ask, answer, at, held, single){
  const cents = answer.cents || [], note = cents[at], heard = singHeard(note);
  const start = (held || single) && singHeard(answer.start) ? answer.start : null, end = held && singHeard(answer.end) ? answer.end : null;
  const need = !held ? 0 : ask.task === 'hold' ? ask.seconds * 1000 : SING_MELODY_HOLD_MS, holdMs = answer.holdMs || 0;
  const slid = heard && (held || single) ? singSlid(answer, note) : 0, side = heard ? singSideOf(ask, note) : null;
  // begin: where the note first settled. A slide settles where the note sat; an off start, where it started.
  // a slide settles where it went within a moment (`land`), or, for a short note, where it sat
  const landed = slid ? (singHeard(answer.land) ? answer.land : note) : null;
  // a held note that did not slide began where its first half second sat: when its start and where it went (`land`) are within a shade of
  // each other they are one stretch, and their middle is where it began, so the attack (the first few hundredths of any note settling onto
  // where it is aimed) does not decide it; when they are further apart the voice moved, and it began at its start
  const began = start === null ? null : held && singHeard(answer.land) && Math.abs(answer.land - start) <= SING_SHADE_CENTS ? (start + answer.land) / 2 : start;
  const begin = start === null ? null : slid ? { kind: 'slid', dir: slid, landed, side: singSideOf(ask, landed) } : { kind: singOnNote(ask, began) ? 'on' : 'off', landed: Math.round(began), side: singSideOf(ask, began) };
  const endSide = end === null ? null : singSideOf(ask, end), passed = held ? holdMs >= need : null;
  let middle = null;
  if(held && heard){
    const base = begin ? begin.side : 0;
    if(passed) middle = { kind: endSide ? 'drift' : 'steady', side: endSide };
    else if(base) middle = { kind: endSide === 0 ? 'found' : endSide === null || endSide === base ? (endSide !== null && Math.abs(end) - Math.abs(begin.landed) > singTolerance(ask) ? 'further' : 'stayed') : 'crossed', side: endSide };
    else middle = { kind: endSide ? 'drift' : (answer.left || 0) > 0 ? 'wander' : 'stopped', side: endSide };
  }
  return { ask, note, heard, side, start, end, endSide, begin, middle, held, single, passed, holdMs, need, hunted: single && singHunted(answer) };
}

// The outcomes, in the order they are tried: the first whose `is` holds names the note. `says` is the lesson's definition. key: the word of
// SAY.singWord the mark shows; side and part: what the mark says about which way the note was, and whether that is where it began or ended.
const singBeganOff = p => !!p.begin && p.begin.side !== 0;
const SING_OUTCOMES = [
  { id: 'missed', says: 'Not heard: too little clear sound to judge.', is: p => !p.heard, key: () => 'missed', side: () => null },
  { id: 'hunt', says: 'Hunting for the note: the voice wandered up and down, changing direction by more than a shade at least twice (lesson 3).',
    is: p => p.hunted, key: () => 'hunt', side: () => null },
  // a held note: lesson 4's ways, by its three parts
  { id: 'steady', says: 'Steady on the note: on it, without a break, for the seconds asked, and on it at the end (lesson 4).',
    is: p => p.held && p.passed && p.middle.kind === 'steady', key: p => singWordKey(p.ask, p.note), side: p => p.side },
  { id: 'heldThenDrift', says: 'Held, then sank under or rose over: on for the seconds asked, then off at the end (lesson 4).',
    is: p => p.held && p.passed, key: p => p.endSide < 0 ? 'sank' : 'rose', side: p => p.endSide, part: 'ended' },
  { id: 'offStart', says: 'Off the note from the start: off from the first moment it settled, whatever it does next (lesson 4).',
    is: p => p.held && singBeganOff(p), key: p => singWordKey(p.ask, p.begin.landed), side: p => p.begin.side, part: 'started' },
  { id: 'drift', says: 'Sank under or rose over: it began on the note and ended off it (lesson 4).',
    is: p => p.held && p.middle.kind === 'drift', key: p => p.endSide < 0 ? 'sank' : 'rose', side: p => p.endSide, part: 'ended' },
  { id: 'wander', says: 'Wandered off and back: it began and ended on the note but left it for a while in between (lesson 4).',
    is: p => p.held && p.middle.kind === 'wander', key: () => 'wander', side: () => null },
  // stopped: the sound itself stopped or broke (a gap in clear sound, or the end of the sound) while the note's center never left the note
  { id: 'stopped', says: 'On the note, then the sound stopped or broke before the seconds asked, without the voice leaving the note (lessons 4, 9).',
    is: p => p.held && p.middle.kind === 'stopped', key: () => 'stopped', side: () => 0 },
  // a single note: lesson 3's slide is a note that slid onto the note; one that slid and stayed off is named where it sat
  { id: 'slid', says: 'Sliding into it: it started more than a shade off and slid onto the note by itself, late (lesson 3).',
    is: p => p.single && p.begin && p.begin.kind === 'slid' && p.side === 0, key: p => p.begin.dir > 0 ? 'slidUp' : 'slidDown', side: p => -p.begin.dir, part: 'started' },
  { id: 'sat', says: 'On the note, or a little, a shade or well under or over it: where the middle of the note sat (lessons 2 and 3).',
    is: () => true, key: p => singWordKey(p.ask, p.note), side: p => p.side }
];

// What to say after a note, in order: [kind, value] pairs sing-strip.js puts into words.
function singLinesOf(row, p){
  const short = p.held && !p.passed ? [['held', p.holdMs]] : [];
  const began = p.begin && p.begin.kind === 'slid' ? [[p.side === 0 ? 'slid' : 'slidOff', p.begin.dir]] : [];
  const after = { found: [['found', 0]], crossed: [['drift', p.endSide]], further: [['further', p.endSide]] };
  switch(row.id){
    case 'missed': return [['missed', 0]];
    case 'hunt': return [['hunt', 0]];
    // a held note that stayed on for the seconds asked passed; an ordinary start into it (a moment off first) is not a fault to name
    case 'steady': return singOnNote(p.ask, p.note) ? [] : [['voice', p.note]];
    case 'heldThenDrift': return [['drift', p.endSide]];
    case 'offStart': return [...began, p.begin.kind === 'slid' ? ['voice', p.begin.landed] : ['start', p.begin.landed], ...(after[p.middle.kind] || []), ...short];
    case 'drift': return [...began, ...short, ['drift', p.endSide]];
    case 'wander': return [...began, ...short, ['wander', 0]];
    case 'stopped': return [...began, ['stopped', p.holdMs]];
    case 'slid': return [['slid', p.begin.dir]];
    default: return [...began, ...(singOnNote(p.ask, p.note) ? [] : [['voice', p.note]]), ...short];
  }
}
// One note judged: { id, key, side, part, good, lines, need, parts }. good: the mark is right (on the note, held long enough when held).
function singJudgeNote(ask, answer, at, held, single){
  const p = singParts(ask, answer, at, held, single), row = SING_OUTCOMES.find(o => o.is(p));
  const key = row.key(p), good = (row.id === 'steady' || row.id === 'sat') && key === 'on' && (!held || p.passed);
  return { id: row.id, key, side: row.side(p), part: row.part || null, good, lines: singLinesOf(row, p), need: p.need, parts: p };
}
// A whole try judged: { notes, last, asked }. asked is the reading a guess is checked against, as the question asks it. A held note (a hold,
// or a tune's long last note) is asked where it ended (lessons 4 and 9: "say where your note ended"; lessons 6 and 12, where the last note
// ended): one path for both, read from its end. Any other note is checked against its own mark.
function singEndReading(ask, j){
  const p = j.parts;
  if(p.endSide === null) return { key: j.key, side: j.side, part: null };
  const moved = ['drift', 'heldThenDrift'].includes(j.id) || (p.middle || {}).kind === 'crossed';
  return { key: p.endSide === 0 ? 'on' : moved ? (p.endSide < 0 ? 'sank' : 'rose') : singWordKey(ask, p.end), side: p.endSide, part: 'ended' };
}
function singJudge(ask, answer){
  const cents = answer.cents || [], n = cents.length, single = ['match', 'light'].includes(ask.task);
  const heldAt = ask.task === 'hold' ? 0 : ask.task === 'melody' ? n - 1 : -1;
  const notes = cents.map((_, i) => singJudgeNote(ask, answer, i, i === heldAt, single && n === 1));
  const last = notes[n - 1] || null;
  const asked = !last || last.id === 'missed' ? null : last.parts.held ? singEndReading(ask, last) : { key: last.key, side: last.side, part: last.part };
  return { notes, last, asked };
}
const singMeasured = (ask, answer) => singJudge(ask, answer).asked;
const singMeasuredSide = (ask, answer) => { const m = singMeasured(ask, answer); return m ? m.side : null; };
const singGuessAgrees = (ask, answer) => Number.isInteger(answer.guess) && singMeasuredSide(ask, answer) === answer.guess;
