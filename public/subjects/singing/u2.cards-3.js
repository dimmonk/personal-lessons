// Singing, Unit Two, part three: the key's question as a question, the check on it, the worked story, and the two cards that
// close the unit after the drill (the recap and the plan: this is an action subject, so lesson standard A11 and P26 call for
// a plan card).
// The app prints, on the question card: the question, each answer with when it is given and the name it leads to, why it
// decides, and for every pair already compared the question that separates it and the key's tie-break.
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('singing', 'u2', [

  /* ---------- the question, as a question ---------- */
  { id: 'q-high', kind: 'question', step: 'H1',
    h: 'The question to ask at the top of every line',
    link: 'Here is the question and its five answers in one place.',
    decides: [
      'You cannot tell from the song or from memory. Sing the top of the line once more and listen to your voice on the way up: that is the whole test.'
    ],
    how: [
      { do: 'Sing the top of the line again, and listen to what your voice does on the way up.', why: 'The answer comes from what it did, not from what you hoped it would do.' },
      { do: 'Listen for a voice that stays light and easy, with nothing tight and nothing sore.', why: 'Then nothing is wrong: it is {o:lighttop}.' },
      { do: 'Listen for a voice that gets louder and louder until the top is a shout.', why: 'That is {o:pushing}, even if your throat is tight too.' },
      { do: 'Listen for a sudden flip into a thin, airy sound, and for whether the next note is there.', why: 'If it is there, it is {o:cracking}. If it is not, it is {o:outofrange}.' },
      { do: 'Notice whether something locked up in your throat, jaw or tongue.', why: 'If the sound also went thin and did not get louder, that is {o:squeezing}.' },
      { do: 'Sing the top note lightly, with your throat loose.', why: 'If it is still not there, it is {o:outofrange}, whatever else happened.' }
    ],
    whenBoth: 'Sometimes a story shows two answers at once. Each pair below has one question that separates it. If a story shows two, use the answer named under the pair.' },

  { id: 'check-high', kind: 'check', after: 'H1',
    case: 'h-c-ravi-karaoke',
    ask: { type: 'step', step: 'H1' } },

  /* ---------- a whole story, watched ---------- */
  { id: 'worked-flip', kind: 'worked',
    h: 'One whole story, where the singer thinks the note is gone',
    link: 'Watch one story worked through. The singer says she cannot reach the note, so read to the end.',
    case: 'h-w-flip',
    steps: [
      { step: 'D1',
        reason: 'The trouble starts as the line rises: {cue:D1}. Nothing in the story is about breath or the note itself.' },
      { step: 'H1',
        reason: 'Her voice flips into a thin, airy sound: {cue:H1}. She says she cannot sing that high, which sounds like {a:H1.missing}, but the notes above the flip come out.' }
    ],
    hold: {
      neighbor: 'outofrange',
      prompt: { kind: 'reason',
        lead: 'She says she cannot sing that high, so this can look like {o:outofrange}. What decides it?',
        choices: [
          { id: 'a', text: 'Her voice flips into a thin, airy sound for a second.',
            note: 'True, and it is why this looks like {o:outofrange}. But a flip comes before a missing note too, so it cannot settle it.' },
          { id: 'b', text: 'The next note up comes out, thin and light.' },
          { id: 'c', text: 'She thinks she cannot sing that high.',
            note: 'True, but it is what she thinks, not what her voice did.' }
        ],
        answer: 'b' },
      reason: [
        'To be {o:outofrange}, it would need this: {needs:outofrange}. Her voice flips, but the notes above the flip come out, so nothing is missing.',
        '{test:cracking~outofrange} Here the notes above the flip are there, so the answer is {a:H1.flip}.'
      ]
    },
    impression: {
      resembles: 'h-cracking-meet', first: 'h-exc-flip',
      text: [
        'A second look: does this remind you of a story you know? A singer who says she cannot sing that high may bring back Ines and her hymn, where the next note was missing, which was {o:outofrange}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:H1}. Ines’s hymn had a flip too, but the next note up was not there even when it was sung lightly. Here it comes out. So this story really looks like the flip at home, and the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You can now tell all five apart on your own.',
    carry: [
      'When the top of a line goes wrong, sing it again and listen to what your voice does on the way up. Do not guess from how the note felt.',
      'If the top is light and easy, keep it. If you want it fuller, add a little volume, and stop the moment your throat tightens.',
      'Never get louder to reach a note. For {o:pushing}, go lighter; for {o:squeezing}, loosen the throat first; for {o:cracking}, practice slow slides through the spot where it flips.',
      'When a story shows two answers, a louder voice with a tight throat is {o:pushing}, and a flip followed by a missing note is {o:outofrange}.',
      'For {o:outofrange}, move the song lower or pick another one. A note you do not have today is not reached by pushing.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for what you will do about it. Fill it in, or leave it.',
    intro: [
      'A plan is one line: if I notice this, then I will do that. Decide it now, because the middle of a chorus is the worst moment to think. These are examples to start from: use one, change it, or write your own.'
    ],
    cues: [
      { cue: 'a shout at the top of the line, with my neck tight',
        then: 'sing the line again at talking volume and let the top go lighter, even if it feels thin' },
      { cue: 'a flip in my voice on one note',
        then: 'do slow slides on “oo” through that spot every day, and go lighter a few notes before it' },
      { cue: 'a clamp in my throat or jaw, or an ache in my throat afterward',
        then: 'stop, do a yawn-sigh, and let my jaw hang loose before I try again' },
      { cue: 'a top note that is still not there when I sing it lightly',
        then: 'move the song lower by two or three steps, or pick another song' },
      { cue: 'a top that comes out light and easy but feels weak',
        then: 'keep it, and record it and listen back' }
    ] }
]);
