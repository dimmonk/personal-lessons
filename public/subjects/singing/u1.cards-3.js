// Singing, Unit One, part three: the first question as a question, the check on it, the one worked story, and the two
// cards that close the unit after the drill (the recap, and the plan: this is an action subject, so lesson standard A11
// and P26 call for a plan card).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it and the tie-break.
// Five pairs have no look-alike or exception card of their own: the ledger names this card as the one that teaches them
// (taughtIn), and the question card prints each by name.

FC.cards('singing', 'u1', [

  /* ---------- the first question, as a question ---------- */
  { id: 'q-first', kind: 'question', step: 'D1',
    h: 'The one question to ask first',
    link: 'Here is the question and its five answers in one place.',
    decides: [
      'Skip this question and you fix the wrong thing: you sing quieter when the trouble was your breath, or you practice notes that were already right. Each answer sends you to a different fix, and one of them needs no fix at all.'
    ],
    how: [
      { do: 'Play the line again, or say aloud what happened.', why: 'Start from what you heard, not from what you think of your voice.' },
      { do: 'First look for {a:D1.high}.', why: 'Fixing the top usually fixes the others.' },
      { do: 'Next look for {a:D1.breath}.', why: 'Air that gives out is a common reason a note sags.' },
      { do: 'Next look for {a:D1.pitch}.', why: 'Only when the top and the air are fine does a note need work.' },
      { do: 'Next look for {a:D1.tone}.', why: 'This one stands alone: it is the sound once the notes and the air are fine.' },
      { do: 'If none of those four fits, it is {a:D1.fine}.', why: 'Then nothing is wrong, and nothing needs a fix.' },
      { do: 'Say the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Some lines show two things at once: a top note that goes flat because it is shouted, or a line that goes flat at the end because the air gave out. Each line gets one answer, and the one higher in the list wins. The test for each pair is below.' },

  { id: 'check-first', kind: 'check', after: 'D1',
    case: 'g-tone-recorded',
    ask: { type: 'step', step: 'D1' } },

  /* ---------- one whole story, worked ---------- */
  { id: 'worked-gasping', kind: 'worked',
    h: 'One whole story, where what she says first points the wrong way',
    link: 'Watch one story worked through. What Greta says first is not what decides it, so read to the end.',
    case: 'g-high-gasping',
    steps: [
      { step: 'D1',
        reason: [
          'Greta says she needs to learn to breathe, and the air does run short. If the story stopped there, it would be {a:D1.breath}.',
          'It does not stop there: {cue:D1}. The air only runs short on the part that climbs, where she shouts, so the top notes are what to look at first.'
        ] }
    ],
    hold: {
      neighbor: 'breath',
      prompt: { kind: 'reason',
        lead: 'Greta is gasping at the end of the chorus, so this can look like {a:D1.breath}. What decides it?',
        choices: [
          { id: 'a', text: 'She is out of air by the end of the chorus, and she says she needs to learn to breathe.',
            note: 'True, and it is why this looks like {a:D1.breath}. If the story stopped there, that would be the answer.' },
          { id: 'b', text: 'The air only runs short on the part that climbs, where she gets louder and louder and shouts the top note.' },
          { id: 'c', text: 'She is singing at karaoke, with a microphone and an audience.',
            note: 'True, but it only says where she is. It does not say what goes wrong.' }
        ],
        answer: 'b' },
      reason: [
        'Running out of air is what Greta notices, but it happens because she shouts the climb. When a line shows both, the top notes win: {a:D1.high}.',
        'Her breathing may need work too, but fixing the climb usually fixes the air as well.'
      ]
    },
    impression: {
      resembles: 'g-high-flip', first: 'g-breath-hymn',
      text: [
        'A second look: does this remind you of a story you know? Running out of air may bring back Walter and his hymn, which was {a:D1.breath}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:D1}. Walter’s story has nothing like them. Dario’s flip did: the trouble was at the top, so the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap-first', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before you decide your voice is bad, say what bothered you, and find the exact words that show it. Each answer has a different fix.',
      'None of the four is a verdict. In each, the voice may turn out to be doing fine, and {a:D1.fine} is a real answer that you will need as often as the other four.',
      'A light, thin top note that feels weak, and your own voice on a recording, are two common false alarms. Check them before you fix anything.',
      'A top note that goes flat because it is shouted is about the top notes. A line that goes flat at the end because the air gave out is about the air.',
      'When a line shows two things, the one higher in the list wins: the top notes, then the air, then the note itself.'
    ] },

  { id: 'plan-first', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, I will do that. The moment a line comes out wrong is the worst time to decide what to do, so decide now. The lines below are examples. Use one, change it, or write your own. Nothing is saved until you press the button.'
    ],
    cues: [
      { cue: 'myself shouting, flipping or squeezing on a top note, or the note not being there',
        then: 'sing it again at talking volume and let the top go lighter, and move the song lower if the note is still not there' },
      { cue: 'my air run out, leak out, or get grabbed in the middle of a word',
        then: 'put a hand on my belly and breathe in low, and mark in the lyrics where I will breathe' },
      { cue: 'myself unsure whether I am singing the song’s note',
        then: 'play the note on a piano app, sing mine next to it, and hear the next note in my head before I sing it' },
      { cue: 'that my sound is pinched or dull, or that my words run together',
        then: 'hold my nose shut on an “ah”, look in a mirror, and record myself to hear whether the words can be followed' },
      { cue: 'that my only complaint is that I do not sound like the record',
        then: 'leave my voice alone, and move the song lower or higher if it sits wrong' }
    ] }
]);
