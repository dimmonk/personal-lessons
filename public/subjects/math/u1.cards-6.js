// Basic Math, Unit One, part six: the key's first question as a question, one whole problem, and the card that closes
// the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer, why it decides, and for every pair
// already compared the question that tells it apart and the key's tie-break.
// One pair of kinds has no card of its own: the ledger names this question card as the one that teaches it (taughtIn).

FC.cards('math', 'u1', [

  /* ---------- The first question, as a question ---------- */
  { id: 'q-kind', kind: 'question', step: 'M1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its five answers in one place, and says why it is asked before anything else.',
    decides: [
      'A problem can only be solved with the steps made for its kind. If you take a hike for a hidden number, you go looking for a calculation that is not there. If you take an amount followed through time for a hidden number, you can find a number that fits a calculation and is wrong for the story. Getting the kind wrong still gives you a number, and nothing in that number says that it is wrong. That is why this question comes first, before any finer name.'
    ],
    how: [
      'Read the whole problem, the last sentence included. The last sentence is usually where the question is, and the sentences before it are usually the story. Mark the words that say what is to be worked out.',
      'Then ask what that is. Is it about {plain:whole}? Is it {plain:unknown}? Is it {plain:growth}? Is it {plain:chance}? Is it about {plain:shape}? One of the five will fit the words you marked. Put your finger on the words that show it. If you cannot point to them, you do not have an answer yet.',
      'Most problems fit one kind and no other. Some show two at once, and there is a decision for each pair. Take the loop first: if the question ends on a day of the week or an hour on a clock, the answer is {a:M1.whole}. Then ask about time: if one amount is followed as hours, days, months or years pass, the answer is {a:M1.growth}, even when a hidden number and a calculation are there too. Then ask about shape: if there is a {t:righttriangle}, or a pair of copies of one shape, the answer is {a:M1.shape}, even when a rate is there too. If none of those is in the problem, a hidden number with a calculation, a rate or totals is {a:M1.unknown}, and a question about the results of a choice or about how likely something is {a:M1.chance}.'
    ],
    whenBoth: 'Some problems show two of the five at once. You have met three: a price for each hour has the shape of a hidden number and is an amount over time; a model with a scale has the shape of a rate and is a shape; a box of tablets taken one a day is an amount over time and asks for a day of the week. Every problem gets one answer, and the choice is made the same way each time. Counting ways and chance have no decision of their own: they are not given up to another kind, and no other kind is given up to them. The question that tells each pair apart is printed below.' },

  /* ---------- One whole problem, watched ---------- */
  { id: 'worked-bed', kind: 'worked',
    h: 'A whole problem, where the story points the wrong way',
    link: 'Watch one problem run from the question to the answer. The most noticeable thing in the story is not what decides it. Read to the end before you answer.',
    case: 'gt-bed',
    steps: [
      { step: 'M1',
        reason: [
          'The problem is full of money: a price for each meter of edging. If that were all, it would be a rate, and a hidden number that has to fit it. But a price is not what the question asks about. Look for the question itself: {cue:M1}.',
          'That is a {t:righttriangle}: a flower bed with two sides that meet at a square corner. The problem gives the lengths of two sides, 3.0 m and 4.0 m, and asks for the third side, which is a length. The price for each meter is only there in the story.'
        ] }
    ],
    hold: {
      neighbor: 'unknown',
      prompt: { kind: 'reason',
        lead: 'The problem gives a price for each meter of edging, and asks for a number it leaves out, so it can look like {a:M1.unknown}.',
        choices: [
          { id: 'a', text: 'The edging costs $5 for each meter, and that is a rate.',
            note: 'True, and it is why the problem can look like {a:M1.unknown}. But a rate in the story does not settle the kind. A problem can carry a rate and ask for something else.' },
          { id: 'b', text: 'Two sides of the bed meet at a square corner, and the question asks for the third side.' },
          { id: 'c', text: 'The problem leaves out a number: the length of the third side.',
            note: 'True, and it tells you nothing: every problem leaves out the number it asks for. It cannot separate the two kinds you are choosing between.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:M1.unknown} you must be able to point to this: {needs:unknown}. The problem does give a rate, and it does leave out a number. But the shape is there, and when a problem shows both, the answer is the shape.',
        'It is the same decision as the model locomotive: there a rate came with two things of the same shape, and here a price comes with a {t:righttriangle}. {test:unknown~shape} The question asks for a length on a triangle with a square corner, so the answer is {a:M1.shape}.'
      ]
    },
    impression: {
      resembles: 'gt-hike', first: 'gt-van',
      text: [
        'Now a second look: does this problem look like one you know? A price for each meter and a question about how much may bring back the van hire, and the van hire was {a:M1.unknown}. So the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the problem that answer it: {cue:M1}. The van hire had nothing like them. The hike does: two legs that meet at a square corner, and a question about the third side. So the problem this one really looks like is the hike, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-kind', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before any sum, ask what the problem asks you to work out, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'The kind is not the topic and not the numbers. Money, building and cooking turn up in all five, and so do the words “how many”, “how long” and “how much”.',
      'A price for each hour is {a:M1.growth}, and a price for each kilometer or each person is {a:M1.unknown}.',
      'A model, a map or a shadow is {a:M1.shape}, even though it comes with a rate.',
      'A count of days or hours that has to end on a day of the week or a time on a clock is {a:M1.whole}, even though it runs over time.'
    ] }
]);
