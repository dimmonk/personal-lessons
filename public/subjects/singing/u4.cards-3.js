// Singing, Unit Four, part three: the question as a question, the check on it, the worked story, and the two cards that close
// the unit after the drill (the recap and the plan: this is an action subject, so lesson standard A11 and P26 call for a
// plan card).
// The app prints, on the question card: the question, each answer with when it is given and the name it leads to, why it
// decides, and for every pair already compared the question that separates it and the key's tie-break.
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('singing', 'u4', [

  /* ---------- the question, as a question ---------- */
  { id: 'q-how', kind: 'question', step: 'P1',
    h: 'The question to ask about every note',
    link: 'Here is the question and its five answers in one place.',
    decides: [
      'Run {t:notecheck} on a note that stayed put, and it settles the answer. How the note began settles the rest: a note that started under and slid up into place, or one that started with no note in your head.'
    ],
    how: [
      { do: 'Ask whether the note was in your head before you sang it.', why: 'If it was not, and your voice went looking, it is {o:guessing}, even when the note also ended up low or high.' },
      { do: 'Listen to how the note began.', why: 'A note that starts under and slides up into place is {o:scooping}.' },
      { do: 'If the note was steady, run {t:notecheck} on it.', why: 'Sliding up to meet the song’s note means {o:flat}, sliding down means {o:sharp}, and not sliding at all means {o:onnote}.' },
      { do: 'Find the exact words that show it: how the note began, or what the check showed.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it. If a story shows two at once, use the answer named under the pair.' },

  { id: 'check-how', kind: 'check', after: 'P1',
    case: 'p-c-how',
    ask: { type: 'step', step: 'P1' } },

  /* ---------- a whole story, watched ---------- */
  { id: 'worked-tired', kind: 'worked',
    h: 'One whole story, where the wince points the wrong way',
    link: 'Watch one story worked through. The loudest sign in it is not what decides it, so read to the end.',
    case: 'p-w-tired',
    steps: [
      { step: 'D1',
        reason: 'Dara worries about the note itself: {cue:D1}. Nothing is said about the top notes, her breath, or the sound of her words.' },
      { step: 'P1',
        reason: 'The wince and the heavy voice make this look like a low note, but neither shows where her note landed. The check does: {cue:P1}.' }
    ],
    hold: {
      neighbor: 'flat',
      prompt: { kind: 'reason',
        lead: 'Dara is tired and a friend winced, so this can look like {o:flat}. What decides it?',
        choices: [
          { id: 'a', text: 'Dara has been tired all week, and a friend winced at the chorus.',
            note: 'True, and it is why this looks like {o:flat}. But neither shows where her note landed.' },
          { id: 'b', text: 'When she checks the next morning, her note and the song’s note are the same.' },
          { id: 'c', text: 'Dara sings along with a song everyone knows.',
            note: 'True, but it says nothing about where her note landed.' }
        ],
        answer: 'b' },
      reason: [
        'To be {o:flat}, it would need this: {needs:flat}. Dara’s check found no gap and no slide. A tired voice and a wince are the usual causes of a low note, but they are not the check.',
        '{test:flat~onnote} Here the two matched, so the answer is {a:P1.match}.'
      ]
    },
    impression: {
      resembles: 'p-mt-onnote', first: 'p-mt-flat',
      text: [
        'A tired voice and a wince may bring back the tired alto, which was {o:flat}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:P1}. The tired alto’s check showed a gap and a slide up, and Dara’s showed neither. So this story really looks like the funny chorus, and the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You can now tell all five apart on your own.',
    carry: [
      'When a note sounds wrong, run {t:notecheck} before you change anything: play the song’s note, hold it, sing yours beside it. Often the note was fine.',
      'The slide tells you the way. Up means {o:flat}, down means {o:sharp}, and no slide means {o:onnote}. A listener’s frown and your own feeling do not tell you.',
      'A note that starts under and slides up is {o:scooping}. A note that was never in your head, with a voice going looking for it, is {o:guessing}, even when it ended low or high.',
      'Hear the note in your head before it is in your mouth. That one habit helps with every one of these.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for what you will do about it. Fill it in, or leave it.',
    intro: [
      'A plan is one line: if I see this, then I will do that. Decide it now, because the moment a friend winces at your chorus is a bad moment to think. These are examples to start from: use one, change it, or write your own.'
    ],
    cues: [
      { cue: 'a line sounds off to me or someone winces at it',
        then: 'check it before I fix it: play the song’s note, hold it, and sing mine beside it' },
      { cue: 'my note is a little low when I check',
        then: 'brighten the vowel, think the note a touch higher, stand up, and check again' },
      { cue: 'my note is a little high when I check',
        then: 'drop my shoulders, loosen my jaw, sing a touch softer, and check again' },
      { cue: 'my long notes start underneath and slide up',
        then: 'hear the note in my head first and land on it, and practice the line on “la” with short, separate notes' },
      { cue: 'I am about to start a song and I cannot hear the first note',
        then: 'stop, play the first note on a piano app, hum it, and then start' }
    ] }
]);
