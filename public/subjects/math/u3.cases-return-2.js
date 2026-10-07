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
      M1: 'The words {cue:M1} ask for a number to be worked out from the others. Nothing changes over time and there is no {t:righttriangle} or copy at another size, so it is {a:M1.unknown}.',
      A1: 'In {cue:A1}, two numbers are missing, and two facts are given about them: how many there are in all, and what they come to in all. That is {a:A1.totals}.'
    },
    not: {
      outcome: 'rearr',
      why: 'Two numbers are missing and two facts are given, so you cannot just undo one calculation. It would be {o:rearr} if only one number were missing.'
    },
    steps: [
      {
        does: 'Give each missing number a letter, and write the two facts',
        working: 'x is the number of deliveries of sand and y is the number of deliveries of gravel. The count fact: x + y = 26. The totals fact: 2 × x + 3 × y = 60'
      },
      {
        does: 'Use the count fact to write one letter using the other',
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
          slip: 'you swap the two numbers: 8 belongs to the deliveries of gravel, which is y, not to the deliveries of sand.'
        },
        {
          id: 's2',
          text: '13 deliveries of sand and 13 deliveries of gravel',
          slip: 'you use only the count fact and share the 26 equally, so the totals fact is ignored.'
        }
      ]
    },
    why: 'One fact alone leaves many pairs, so use the count fact to leave a single letter in the totals fact, and solve that. The other number then comes from the count fact, and the pair must fit both facts.'
  },
]);
