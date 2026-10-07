// Basic Math, Unit One, part six: the key's first question as a question, one whole problem, and the card that closes
// the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer, why it decides, and for every pair
// already compared the question that tells it apart and the key's tie-break.
// One pair of kinds has no card of its own: the ledger names this question card as the one that teaches it (taughtIn).

FC.cards('math', 'u1', [

  /* ---------- The first question, as a question ---------- */
  { id: 'q-kind', kind: 'question', step: 'M1',
    h: 'The question to ask before any math',
    link: 'Here is the question and its five answers in one place.',
    decides: [
      'Treat a hike as a missing number and you go looking for a calculation that is not there. Treat an amount followed through time as a missing number and you can find a number that fits a calculation and is wrong for the problem.'
    ],
    how: [
      { do: 'Read to the end before you answer.', why: 'The question is usually the last sentence, and the sentences before it are the background.' },
      { do: 'Mark the words that say what to work out.', why: 'The topic and the numbers do not decide it: money, building and cooking turn up in all five.' },
      { do: 'If the question ends on a day of the week or a time on a clock: {a:M1.whole}.', why: 'A count that goes round a loop is about whole numbers, even though it runs over time.' },
      { do: 'Next, if one amount is followed as hours, days, months or years pass: {a:M1.growth}.', why: 'This holds even when a missing number and a calculation are there too.' },
      { do: 'Next, if there is a {t:righttriangle}, or two copies of one shape: {a:M1.shape}.', why: 'This holds even when a rate is there too.' },
      { do: 'Next, a missing number that has to fit a calculation, a rate or totals: {a:M1.unknown}.', why: 'This is what is left when there is no time, no triangle, no copy and no loop.' },
      { do: 'A question that counts the different results of a choice, or asks how likely something is: {a:M1.chance}.', why: 'It gives way to no other answer, and no other answer gives way to it.' },
      { do: 'Find the exact words that show your answer.', why: 'If you can’t find them, you don’t have an answer yet.' }
    ],
    whenBoth: 'Some problems show two at once. You have met three: a price for each hour looks like a missing number and is an amount over time; a model with a scale looks like a rate and is a shape; a box of tablets taken one a day is an amount over time and asks for a day of the week. Use the order above. The test for each pair is below.' },

  /* ---------- One whole problem, watched ---------- */
  { id: 'worked-bed', kind: 'worked',
    h: 'One whole problem, where the details point the wrong way',
    link: 'Watch one problem worked through. The first thing you notice is not what decides it, so read to the end.',
    case: 'gt-bed',
    steps: [
      { step: 'M1',
        reason: [
          'The problem is full of money: a price for each meter of edging. If that were all, it would be a rate with a number to find.',
          'But look at what is asked: {cue:M1}. The flower bed is a {t:righttriangle}, two of its sides are given, and the problem asks for the third. The price is only background.'
        ] }
    ],
    hold: {
      neighbor: 'unknown',
      prompt: { kind: 'reason',
        lead: 'The problem gives a price for each meter of edging, so it can look like {a:M1.unknown}. What decides it?',
        choices: [
          { id: 'a', text: 'The edging costs $5 for each meter, which is a rate.',
            note: 'True, and it is why the problem looks like {a:M1.unknown}. But a rate in the problem does not decide it.' },
          { id: 'b', text: 'The two given sides meet at a square corner, and the third is asked for.' },
          { id: 'c', text: 'One number, the length of the third side, is left out.',
            note: 'True, but every problem leaves out the number it asks for. That cannot separate the two.' }
        ],
        answer: 'b' },
      reason: [
        'The problem does give a rate and does leave out a number, but the triangle is there too, and the triangle wins.',
        'It is the same choice as the model locomotive: there a rate came with a copy of a shape, and here a price comes with a {t:righttriangle}. The question asks for the third side of that triangle, so this is {a:M1.shape}.'
      ]
    },
    impression: {
      resembles: 'gt-hike', first: 'gt-van',
      text: [
        'A second look: does this remind you of a problem you know? A price for each meter may bring back the van hire, which was {a:M1.unknown}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:M1}. The van hire had nothing like them. The hike does: two legs that meet at a square corner, and a question about the third side. So the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-kind', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before any sum, ask what the problem is about, and find the words that show it. If you cannot find them, you do not have an answer yet.',
      'The topic and the numbers do not decide it. Money, building and cooking turn up in all five, and so do “how many”, “how long” and “how much”.',
      'A price for each hour is {a:M1.growth}. A price for each kilometer or each person is {a:M1.unknown}.',
      'A model, a map or a shadow is {a:M1.shape}, even though it comes with a rate.',
      'A count of days or hours that has to end on a day of the week or a time on a clock is {a:M1.whole}, even though it runs over time.'
    ] }
]);
