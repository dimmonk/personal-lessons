// Singing, Unit One, part one: the opening card, the answer where nothing is wrong (taught first, so the learner meets the
// real thing before any problem), the top notes, the air, and the first look-alike pair.
// This is the subject's FIRST-QUESTION unit (lesson standard A15): a card that would carry `outcome` in a branch unit
// carries `family`, and the family's name is its answer to the first question, printed by {a:D1.<family>}.
// A quick lesson (lesson standard section 19): one meet card and one check for each kind, and nothing else for it.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one
// short sentence of why), then the name, then what to do (act, numbered steps). The app prints, and this file therefore
// does not contain: the preview map, the heading of a meet card, the stem of every commit prompt, and the heading of a
// look-alike card. Key wording is never typed here: tokens are filled in from key.js.

FC.cards('singing', 'u1', [

  { id: 'orient-first', kind: 'orient',
    h: 'Before you blame your voice, say what bothered you',
    canDo: 'Before you decide your voice is bad, say what actually bothered you about the line. It is always one of the five things below. Each has a different fix, and often nothing is wrong at all.',
    everyday: [
      'You sing along in the car and the chorus comes out wrong. Your first thought is “I can’t sing.” But “wrong” can mean five different things: a high note that turned into a shout, air that ran out, a note that was off, a sound you dislike, or nothing at all except that you are not the singer on the record.',
      'Each one is fixed a different way, and one of them needs no fix. If you guess, you can work hard on the wrong thing, like singing quieter when the trouble was your breath. This unit teaches the one question to ask before you try anything.'
    ],
    map: { branch: 'gate' } },              // the preview map is the first question itself, drawn from the key

  /* ---------- First: nothing is wrong ---------- */
  { id: 'meet-fine', kind: 'meet', family: 'fine',
    link: 'First, the one people forget: sometimes nothing is wrong at all.',
    case: 'g-fine-cooking', mark: 'D1',
    explain: [
      'Marta’s voice is doing its job. What bothers her is a comparison with the woman on the record, and that singer has a different voice, a studio, and as many tries as she wanted. Nothing in Marta’s own singing is wrong, so there is nothing to fix.',
      'People call this “bad singing” all the time. It is the first thing to rule out, before you change anything about how you sing.'
    ],
    spot: [
      { do: 'Check the notes: Marta hits every one.', why: 'If a note were off, the trouble would be about the note.' },
      { do: 'Check for anything tight, sore or short of air: Marta’s throat is loose and she has air to spare.', why: 'Any of those would put the trouble in the top notes or the air.' },
      { do: 'Check the words: every one of Marta’s is clear.', why: 'Words that are hard to follow would put the trouble in the sound.' },
      { do: 'Find the complaint: Marta only wishes she sounded richer, like the woman on the record.', why: 'A complaint that is only a comparison with someone else’s voice means nothing is wrong.' }
    ],
    feature: { step: 'D1', option: 'fine' },
    name: 'This is {a:D1.fine}. Marta’s voice needs no fix.',
    act: [
      { do: 'Leave your voice alone and sing it your way.', why: 'A different voice from the record’s is not a fault.' },
      { do: 'If the song sits wrong for your voice, move it lower or higher.', why: 'Karaoke apps and backing tracks have a setting for it, usually called pitch or transpose.' },
      { do: 'Next time something bothers you, say what it was before you change anything.', why: 'Most fixes for the other answers would only make Marta sing worse.' }
    ] },

  { id: 'check-fine', kind: 'check', after: 'fine',
    case: 'g-fine-birthday',
    ask: { type: 'phrase', step: 'D1', say: 'Which words say the only thing that bothers Jonas? Tap them.',
           answer: 'I wish I sounded like the guy on the radio' } },

  /* ---------- Second: the top notes ---------- */
  { id: 'meet-high', kind: 'meet', family: 'high',
    link: 'Next, when {plain:high}.',
    case: 'g-high-flip', mark: 'D1',
    explain: [
      'Dario’s line was steady until it climbed. Then his voice flipped with a jolt. The top of a line is where voices often go wrong, in several ways: a shout, a flip like Dario’s, a clamped throat, or a note that is not there. A light, thin top note that feels weak to you belongs here too, because the top notes are what you are unsure of.',
      'Each of these is fixed differently, and the light one needs no fix at all. For now, only notice that the trouble is at the top.'
    ],
    spot: [
      { do: 'Find the part of the line that climbs: Dario’s chorus climbs to its last word.', why: 'The trouble you describe has to start there.' },
      { do: 'Check the low part: Dario’s is steady.', why: 'If the low part went wrong too, the trouble would be more than the top notes.' },
      { do: 'Listen to what happens at the top: his voice flips into a thin, airy sound.', why: 'A shout, a clamp, a missing note and a light sound are each heard differently.' }
    ],
    feature: { step: 'D1', option: 'high' },
    name: 'This is {a:D1.high}. Dario’s low notes were fine.',
    act: [
      { do: 'Sing the line again at talking volume, and let the top go lighter even if it feels thin.', why: 'Getting louder to reach a note is a common way for a top note to go wrong.' },
      { do: 'If the top is still tight, stop for the day.', why: 'Singing should never hurt.' },
      { do: 'If the note is still not there when you sing it lightly, move the song lower.', why: 'Your voice is fine; the song sits higher than it can reach today.' }
    ] },

  { id: 'check-high', kind: 'check', after: 'high',
    case: 'g-high-squeeze',
    ask: { type: 'option', step: 'D1', among: ['fine', 'high'] } },

  /* ---------- Third: the air ---------- */
  { id: 'meet-breath', kind: 'meet', family: 'breath',
    link: 'Next, when {plain:breath}.',
    case: 'g-breath-hymn', mark: 'D1',
    explain: [
      'Walter’s notes are right, but his air does not last, and he grabs a breath where he should not. Singing is a steady stream of air turned into sound, so when the air goes wrong the line goes wrong. It can go wrong in four ways: a quick breath that runs out, air that leaks out with the sound, air that is shoved out hard, or breaths taken wherever you run out, like Walter’s.',
      'Each has its own fix, and a breath that lasts needs none. For now, only notice that the air is the trouble.'
    ],
    spot: [
      { do: 'Listen for the air running out: Walter is out of air before the line ends.', why: 'A voice with air left at the end of the line is not the problem here.' },
      { do: 'Listen for breaths in the middle of words: Walter grabs one mid-word.', why: 'A planned breath comes between words.' },
      { do: 'Check the notes: Walter’s are right.', why: 'If a note were off, the trouble would be about the note, not the air.' }
    ],
    feature: { step: 'D1', option: 'breath' },
    name: 'This is {a:D1.breath}. Walter’s voice is fine; his breaths are the trouble.',
    act: [
      { do: 'Mark in the lyrics where you will breathe: at a comma, at the end of a line, or before a long phrase.', why: 'A planned breath beats grabbing air where you run out.' },
      { do: 'Put a hand on your belly and breathe in: it should move out while your shoulders stay still.', why: 'A low breath holds more air than a high one.' },
      { do: 'Take a breath at a marked spot even before you need it.', why: 'An early breath is a quiet one, and it leaves air for the long part.' }
    ] },

  { id: 'check-breath', kind: 'check', after: 'breath',
    case: 'g-breath-leak',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show that the air is the trouble for Gwen? Tap them.',
           answer: 'she can hear air leaking out with every note, and a long note is gone in two seconds' } },

  /* ---------- The first pair people mix up ---------- */
  { id: 'look-high-breath', kind: 'lookalike', ledger: 'high~breath',
    link: 'On a long, high note, a strained voice and a failing breath can look alike. Here is the same line sung two ways.',
    cases: ['g-breath-closing', 'g-high-closing'],
    instruction: 'Both stories are about Marcus and the closing line of the same hymn. Compare one thing: what goes wrong first, his voice as the line climbs, or his air?',
    prompt: { kind: 'which', option: 'D1.high', answer: 'g-high-closing' },
    difference: [
      'In Story A, Marcus takes a quick breath with his shoulders up, and the air is gone halfway through the long note. The note itself is steady and easy. That is {a:D1.breath}.',
      'In Story B, the air lasts to the end, but as the line climbs he gets louder and louder, his jaw clenches, and the top note is a shout. That is {a:D1.high}.',
      'If one line showed both, the top notes would win, because fixing the top usually fixes the air too.'
    ] }
]);
