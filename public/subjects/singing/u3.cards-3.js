// Singing, Unit Three, part three: the question as a question, the check on it, the worked story, and the two cards that close
// the unit after the drill (the recap and the plan: this is an action subject, so lesson standard A11 and P26 call for a plan card).
// The app prints, on the question card: the question, each answer with when it is given and the name it leads to, why it decides,
// and for every pair this question separates the question that tells it apart. Field guide: see u3.cards-1.js.

FC.cards('singing', 'u3', [

  /* ---------- the question, as a question ---------- */
  { id: 'q-air', kind: 'question', step: 'B1',
    h: 'The question to ask about the air',
    link: 'Here is the question and its five answers in one place.',
    decides: [
      '“I ran out of air” is the same complaint in four of the five. What tells them apart is what you can check: the breath going in, the sound coming out, and where you took the breath.'
    ],
    how: [
      { do: 'Check the breath going in: a hand on your belly, your shoulders in a mirror, and a listen.', why: 'A quick, noisy gasp that lifts the shoulders is {o:shallowbreath}.' },
      { do: 'If the breath was low and quiet, listen to the sound.', why: 'A soft, whispery sound with air hissing out is {o:airytone}, and a loud, harsh one with the air shoved is {o:forcing}.' },
      { do: 'If the sound is clean, look at where you took your breaths.', why: 'Breaths taken wherever you ran out, even mid-word, are {o:unplanned}, and a breath with air left at the end is {o:breathfine}.' },
      { do: 'Find the exact words that show it: the breath, the sound, the place.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it. If a story shows two at once, use the answer named under the pair.' },

  { id: 'check-air', kind: 'check', after: 'B1',
    case: 'b-check-shower',
    ask: { type: 'step', step: 'B1' } },

  /* ---------- a whole story, watched ---------- */
  { id: 'worked-hymn', kind: 'worked',
    h: 'One whole story, where the word “gasping” points the wrong way',
    link: 'Watch one story worked through. The most noticeable word is not the one that decides it, so read to the end.',
    case: 'b-w-hymn',
    steps: [
      { step: 'D1',
        reason: 'Hector complains about his breaths: {cue:D1}. That is about the air, not the top notes or the note itself.' },
      { step: 'B1',
        reason: 'Now ask what the air is doing. The word “gasping” can look like a quick, high breath, but his breaths are low and full: {cue:B1}. What goes wrong is where he takes them.' }
    ],
    hold: {
      neighbor: 'shallowbreath',
      prompt: { kind: 'reason',
        lead: 'The word “gasping” makes this look like {o:shallowbreath}. What settles that it is not?',
        choices: [
          { id: 'a', text: 'Hector says he keeps gasping in the middle of words.',
            note: 'True, and it is why this looks like {o:shallowbreath}. But the word only says how it sounds to him.' },
          { id: 'b', text: 'Each of his breaths is low and full, with his belly out and his shoulders still.' },
          { id: 'c', text: 'He is singing a hymn in church.',
            note: 'True, but where he sings does not tell you what the breath is like.' }
        ],
        answer: 'b' },
      reason: [
        'To be {o:shallowbreath}, the breath would need this: {needs:shallowbreath}. Hector’s breaths are low and full instead. {test:shallowbreath~unplanned}',
        'His breaths are fine. The trouble is that he takes them wherever he runs out, in the middle of words, with none planned.'
      ]
    },
    impression: {
      resembles: 'b-meet-midword', first: 'b-meet-gasp',
      text: [
        'A second look: does this remind you of a story you know? The word “gasping” may bring back “The gasp”, which was {o:shallowbreath}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:B1}. In “The gasp” the shoulders jumped and the breath was quick. Hector’s breaths are low and full, like Beth’s in “The chopped verse”, who took hers wherever she ran out. So this story really looks like Beth’s, and the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You can now tell all five apart on your own.',
    carry: [
      'When the air gives out, check what it is doing before you change anything: a hand on your belly, your shoulders in a mirror, and a listen to the breath and the sound.',
      'A quick, noisy gasp with the shoulders up is {o:shallowbreath}. A low, full breath taken wherever you run out is {o:unplanned}. A soft, whispery sound with air hissing out is {o:airytone}. Air shoved out hard is {o:forcing}.',
      'When a quick, high breath and a shove show up together, fix the breath first: a low breath fixes both.',
      '{o:breathfine} is one of the five. It needs no fix, and trying to fix it is a mistake too.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for what you will do about it. Fill it in, or leave it.',
    intro: [
      'A plan is one line: if I see this, then I will do that. Decide it now, because the middle of a line is a bad moment to think. These are examples to start from: use one, change it, or write your own.'
    ],
    cues: [
      { cue: 'that I feel short of air in a line',
        then: 'run the check first: a hand on my belly, my shoulders in a mirror, and a listen to the breath' },
      { cue: 'my shoulders jump up when I breathe in',
        then: 'breathe low with a hand on my belly, and start the breath a beat early' },
      { cue: 'that I run out of air partway through a line, even though the breath was low',
        then: 'read the words, mark where to breathe, and take a breath early at a mark' },
      { cue: 'that air hisses out with the sound',
        then: 'hum the line first, open the hum into “ah”, and use less air' },
      { cue: 'that the sound is loud and harsh and my throat is tired',
        then: 'sing at talking volume, and try the line on a lip trill' }
    ] }
]);
