// Basic Math, Unit Three: fresh problems for later days: three for each kind, one for each of its scheduled returns. A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [
  {
    id: 'm3-rt-prop-3',
    use: 'return',
    tier: 'misleading',
    setting: 'health',
    topic: 'a medicine sheet',
    kind: 'problem',
    outcome: 'prop',
    text: 'A clinic’s sheet, the third of five, says 10 mg of a medicine for every 25 kg of body weight. What dose is right for a patient of 100 kg?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: [
        'says 10 mg of a medicine for every 25 kg of body weight',
        'What dose is right for a patient of 100 kg?'
      ],
      A1: ['says 10 mg of a medicine for every 25 kg of body weight', 'a patient of 100 kg']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give so much for so many, 10 mg for every 25 kg, and a new amount of body weight. The sheet’s number, the third of five, is a number no step uses, and nothing is added on top, so the answer is {a:A1.rate}.'
    },
    not: {
      outcome: 'rearr',
      why: 'The problem gives a rate and a new amount, with nothing added on top and no calculation whose result has to be undone. {o:rearr} would be the name if a calculation, or a fixed amount on top of the rate, had a result to undo.'
    },
    steps: [
      {
        does: 'Pair the new amount with the matching number in the rate',
        working: 'The rate is 10 mg for 25 kg of body weight. The new amount is 100 kg of body weight, so it is paired with the 25 kg of body weight in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '100 ÷ 25 = 4, so the new amount is 4 times as big as 25'
      },
      { does: 'Make the other number that many times as big', working: '10 × 4 = 40' },
      {
        does: 'Check the direction',
        working: '100 kg of body weight is more than 25 kg of body weight, so the answer should be more than 10 mg, and 40 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '40 mg' },
        {
          id: 's1',
          text: '2.5 mg',
          slip: 'you divide 10 by 4 instead of multiplying, so the answer moves the wrong way: more kg of body weight must mean more mg.'
        },
        {
          id: 's2',
          text: '250 mg',
          slip: 'you pair the new amount with 10 mg, the other number in the rate, and not with 25 kg of body weight, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  },

  {
    id: 'm3-rt-simul-1',
    use: 'return',
    tier: 'clean',
    setting: 'home',
    topic: 'bottles and caps for a team',
    kind: 'problem',
    outcome: 'simul',
    text: 'A team bought 20 items, some water bottles at €5 each and some caps at €8 each, and paid €124. How many bottles and how many caps did it buy?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'bought 20 items, some water bottles at €5 each and some caps at €8 each',
        'paid €124',
        'How many bottles and how many caps did it buy?'
      ],
      A1: ['bought 20 items, some water bottles at €5 each and some caps at €8 each', 'paid €124']
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
        working: 'x is the number of bottles and y is the number of caps. The count fact: x + y = 20. The totals fact: 5 × x + 8 × y = 124'
      },
      {
        does: 'Use the count fact to write one letter in terms of the other',
        working: 'From x + y = 20, x = 20 − y'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '5 × (20 − y) + 8 × y = 124'
      },
      {
        does: 'Solve for the letter that is left',
        working: '5 × 20 = 100, so 100 − 5 × y + 8 × y = 124; that is 100 + 3 × y = 124; 3 × y = 124 − 100 = 24; y = 24 ÷ 3 = 8'
      },
      { does: 'Find the other number from the count fact', working: 'x = 20 − 8 = 12' },
      {
        does: 'Check both facts',
        working: '12 + 8 = 20; 5 × 12 + 8 × 8 = 60 + 64 = 124. Both hold'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '12 bottles and 8 caps' },
        {
          id: 's1',
          text: '8 bottles and 12 caps',
          slip: 'you attach the two numbers to the wrong things: 8 belongs to the caps, the thing that was named y, and not to the bottles.'
        },
        {
          id: 's2',
          text: '10 bottles and 10 caps',
          slip: 'you use only the count fact and share the 20 out equally, which ignores the totals fact.'
        }
      ]
    },
    why: 'One fact alone cannot fix two missing numbers, because many pairs fit it. Using the count fact to write one letter in terms of the other leaves a single letter in the totals fact, and a single letter can be solved. The other number then follows from the count fact, and the pair has to fit both facts.'
  },

  {
    id: 'm3-rt-simul-2',
    use: 'return',
    tier: 'varied',
    setting: 'work',
    topic: 'loads of sand and gravel',
    kind: 'problem',
    outcome: 'simul',
    text: 'A lorry made 26 deliveries, some of 2 tonnes of sand and some of 3 tonnes of gravel, and carried 60 tonnes in all. How many deliveries of each were there?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'made 26 deliveries, some of 2 tonnes of sand and some of 3 tonnes of gravel',
        'carried 60 tonnes in all',
        'How many deliveries of each were there?'
      ],
      A1: [
        'made 26 deliveries, some of 2 tonnes of sand and some of 3 tonnes of gravel',
        'carried 60 tonnes in all'
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

  {
    id: 'm3-rt-simul-3',
    use: 'return',
    tier: 'misleading',
    setting: 'home',
    topic: 'bicycles and tricycles in a shed',
    kind: 'problem',
    outcome: 'simul',
    text: 'A shed holds 16 bicycles and tricycles, and the wheels number 41 in all. A bicycle has 2 wheels and a tricycle has 3. How many of each are in the shed?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'holds 16 bicycles and tricycles',
        'the wheels number 41 in all',
        'How many of each are in the shed?'
      ],
      A1: ['holds 16 bicycles and tricycles', 'the wheels number 41 in all']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'In {cue:A1}, two numbers are missing, how many bicycles and how many tricycles, and two facts are stated about them: 16 in all and 41 wheels in all. The wheels are what the second fact adds up, as prices would be. That is {a:A1.totals}.'
    },
    not: {
      outcome: 'rearr',
      why: 'Two numbers are left out and two facts are given about them, so no single calculation can simply be undone. {o:rearr} would be the name if only one number were left out of one calculation.'
    },
    steps: [
      {
        does: 'Name the two missing numbers with letters, and write the two facts',
        working: 'x is the number of bicycles and y is the number of tricycles. The count fact: x + y = 16. The totals fact: 2 × x + 3 × y = 41'
      },
      {
        does: 'Use the count fact to write one letter in terms of the other',
        working: 'From x + y = 16, x = 16 − y'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '2 × (16 − y) + 3 × y = 41'
      },
      {
        does: 'Solve for the letter that is left',
        working: '2 × 16 = 32, so 32 − 2 × y + 3 × y = 41; that is 32 + 1 × y = 41; 1 × y = 41 − 32 = 9; y = 9 ÷ 1 = 9'
      },
      { does: 'Find the other number from the count fact', working: 'x = 16 − 9 = 7' },
      {
        does: 'Check both facts',
        working: '7 + 9 = 16; 2 × 7 + 3 × 9 = 14 + 27 = 41. Both hold'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '7 bicycles and 9 tricycles' },
        {
          id: 's1',
          text: '9 bicycles and 7 tricycles',
          slip: 'you attach the two numbers to the wrong things: 9 belongs to the tricycles, the thing that was named y, and not to the bicycles.'
        },
        {
          id: 's2',
          text: '8 bicycles and 8 tricycles',
          slip: 'you use only the count fact and share the 16 out equally, which ignores the totals fact.'
        }
      ]
    },
    why: 'One fact alone cannot fix two missing numbers, because many pairs fit it. Using the count fact to write one letter in terms of the other leaves a single letter in the totals fact, and a single letter can be solved. The other number then follows from the count fact, and the pair has to fit both facts.'
  }
]);
