// Basic Math, Unit Three: fresh problems for later days: one for each kind. A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [

  {
    id: 'm3-rt-simul-2',
    use: 'return',
    tier: 'varied',
    setting: 'work',
    topic: 'loads of sand and gravel',
    kind: 'problem',
    outcome: 'simul',
    text: 'A truck made 26 deliveries, some of 2 tons of sand and some of 3 tons of gravel, and carried 60 tons in all. How many deliveries of each were there?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'made 26 deliveries, some of 2 tons of sand and some of 3 tons of gravel',
        'carried 60 tons in all',
        'How many deliveries of each were there?'
      ],
      A1: [
        'made 26 deliveries, some of 2 tons of sand and some of 3 tons of gravel',
        'carried 60 tons in all'
      ]
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'In {cue:A1}, two numbers are missing, and two facts are stated about the pair: how many there are in all, and what they come to in all. That is {a:A1.totals}.'
    },
    not: {
      outcome: 'rearr',
      why: 'Two numbers are left out and two facts are given about them, so no single calculation can simply be undone. {o:rearr} would be the name if only one number were left out of one calculation.'
    },
    steps: [
      {
        does: 'Name the two missing numbers with letters, and write the two facts',
        working: 'x is the number of deliveries of sand and y is the number of deliveries of gravel. The count fact: x + y = 26. The totals fact: 2 × x + 3 × y = 60'
      },
      {
        does: 'Use the count fact to write one letter in terms of the other',
        working: 'From x + y = 26, x = 26 − y'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '2 × (26 − y) + 3 × y = 60'
      },
      {
        does: 'Solve for the letter that is left',
        working: '2 × 26 = 52, so 52 − 2 × y + 3 × y = 60; that is 52 + 1 × y = 60; 1 × y = 60 − 52 = 8; y = 8 ÷ 1 = 8'
      },
      { does: 'Find the other number from the count fact', working: 'x = 26 − 8 = 18' },
      {
        does: 'Check both facts',
        working: '18 + 8 = 26; 2 × 18 + 3 × 8 = 36 + 24 = 60. Both hold'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '18 deliveries of sand and 8 deliveries of gravel' },
        {
          id: 's1',
          text: '8 deliveries of sand and 18 deliveries of gravel',
          slip: 'you attach the two numbers to the wrong things: 8 belongs to the deliveries of gravel, the thing that was named y, and not to the deliveries of sand.'
        },
        {
          id: 's2',
          text: '13 deliveries of sand and 13 deliveries of gravel',
          slip: 'you use only the count fact and share the 26 out equally, which ignores the totals fact.'
        }
      ]
    },
    why: 'One fact alone cannot fix two missing numbers, because many pairs fit it. Using the count fact to write one letter in terms of the other leaves a single letter in the totals fact, and a single letter can be solved. The other number then follows from the count fact, and the pair has to fit both facts.'
  },
]);
