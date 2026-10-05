// Basic Math, Unit Three: the drill's problems. Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question, and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [
  {
    id: 'm3-dr-prop-1',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'cleaner for office rooms',
    kind: 'problem',
    outcome: 'prop',
    text: 'A cleaning firm uses 18 litres of cleaner for every 30 rooms. How many litres are needed for 45 rooms?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['uses 18 litres of cleaner for every 30 rooms', 'How many litres are needed for 45 rooms?'],
      A1: ['uses 18 litres of cleaner for every 30 rooms', 'for 45 rooms']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give so much for so many of one thing, and a new amount of one of them, with nothing added on top and no calculation whose result has to be undone. That is {a:A1.rate}.'
    },
    not: {
      outcome: 'rearr',
      why: 'The problem gives a rate and a new amount, with nothing added on top and no calculation whose result has to be undone. {o:rearr} would be the name if a calculation, or a fixed amount on top of the rate, had a result to undo.'
    },
    steps: [
      {
        does: 'Pair the new amount with the matching number in the rate',
        working: 'The rate is 18 litres of cleaner for 30 rooms. The new amount is 45 rooms, so it is paired with the 30 rooms in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '45 ÷ 30 = 1.5, so the new amount is 1.5 times as big as 30'
      },
      { does: 'Make the other number that many times as big', working: '18 × 1.5 = 27' },
      {
        does: 'Check the direction',
        working: '45 rooms is more than 30 rooms, so the answer should be more than 18 litres of cleaner, and 27 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '27 litres of cleaner' },
        {
          id: 's1',
          text: '12 litres of cleaner',
          slip: 'you divide 18 by 1.5 instead of multiplying, so the answer moves the wrong way: more rooms must mean more litres of cleaner.'
        },
        {
          id: 's2',
          text: '75 litres of cleaner',
          slip: 'you pair the new amount with 18 litres of cleaner, the other number in the rate, and not with 30 rooms, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  },

  {
    id: 'm3-dr-prop-2',
    use: 'drill',
    tier: 'varied',
    setting: 'home',
    topic: 'bottles for walkers',
    kind: 'problem',
    outcome: 'prop',
    text: 'A hiking club packs 9 bottles of water for every 15 walkers. It has 27 bottles. How many walkers can it supply?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['packs 9 bottles of water for every 15 walkers', 'How many walkers can it supply?'],
      A1: ['packs 9 bottles of water for every 15 walkers', 'It has 27 bottles']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give so much for so many of one thing, and a new amount of one of them, with nothing added on top and no calculation whose result has to be undone. That is {a:A1.rate}.'
    },
    not: {
      outcome: 'rearr',
      why: 'The problem gives a rate and a new amount, with nothing added on top and no calculation whose result has to be undone. {o:rearr} would be the name if a calculation, or a fixed amount on top of the rate, had a result to undo.'
    },
    steps: [
      {
        does: 'Pair the new amount with the matching number in the rate',
        working: 'The rate is 15 walkers for 9 bottles. The new amount is 27 bottles, so it is paired with the 9 bottles in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '27 ÷ 9 = 3, so the new amount is 3 times as big as 9'
      },
      { does: 'Make the other number that many times as big', working: '15 × 3 = 45' },
      {
        does: 'Check the direction',
        working: '27 bottles is more than 9 bottles, so the answer should be more than 15 walkers, and 45 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '45 walkers' },
        {
          id: 's1',
          text: '5 walkers',
          slip: 'you divide 15 by 3 instead of multiplying, so the answer moves the wrong way: more bottles must mean more walkers.'
        },
        {
          id: 's2',
          text: '16.2 walkers',
          slip: 'you pair the new amount with 15 walkers, the other number in the rate, and not with 9 bottles, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  },

  {
    id: 'm3-dr-prop-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'work',
    topic: 'eggs for a canteen',
    kind: 'problem',
    outcome: 'prop',
    text: 'A school canteen with 3 cooks uses 18 eggs for every 12 pupils. Today 30 pupils are in for lunch. How many eggs are needed?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['uses 18 eggs for every 12 pupils', 'How many eggs are needed?'],
      A1: ['uses 18 eggs for every 12 pupils', 'Today 30 pupils are in for lunch']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give so much for so many, 18 eggs for every 12 pupils, and a new amount of pupils. The 3 cooks and the word “today” are numbers and words that no step uses, and nothing is added on top, so the key’s answer is {a:A1.rate}.'
    },
    not: {
      outcome: 'rearr',
      why: 'The problem gives a rate and a new amount, with nothing added on top and no calculation whose result has to be undone. {o:rearr} would be the name if a calculation, or a fixed amount on top of the rate, had a result to undo.'
    },
    steps: [
      {
        does: 'Pair the new amount with the matching number in the rate',
        working: 'The rate is 18 eggs for 12 pupils. The new amount is 30 pupils, so it is paired with the 12 pupils in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '30 ÷ 12 = 2.5, so the new amount is 2.5 times as big as 12'
      },
      { does: 'Make the other number that many times as big', working: '18 × 2.5 = 45' },
      {
        does: 'Check the direction',
        working: '30 pupils is more than 12 pupils, so the answer should be more than 18 eggs, and 45 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '45 eggs' },
        {
          id: 's1',
          text: '7.2 eggs',
          slip: 'you divide 18 by 2.5 instead of multiplying, so the answer moves the wrong way: more pupils must mean more eggs.'
        },
        {
          id: 's2',
          text: '20 eggs',
          slip: 'you pair the new amount with 18 eggs, the other number in the rate, and not with 12 pupils, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  },

  {
    id: 'm3-dl-simul-1',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'raffle books sold',
    kind: 'problem',
    outcome: 'simul',
    text: 'A club sold 18 raffle books, some small at €2 each and some large at €5 each, and took €60. How many small and how many large books were sold?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'sold 18 raffle books, some small at €2 each and some large at €5 each',
        'took €60',
        'How many small and how many large books were sold?'
      ],
      A1: ['sold 18 raffle books, some small at €2 each and some large at €5 each', 'took €60']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'In {cue:A1}, two numbers are missing, and two facts are stated about the pair: how many there are in all, and what they come to in all. That is {a:A1.totals}.'
    },
    not: {
      outcome: 'rearr',
      why: 'Two numbers are left out and two facts are given about them, so no single calculation can simply be undone. {o:rearr} would be the name if only one number were left out of one calculation.'
    },
    steps: [
      {
        does: 'Name the two missing numbers with letters, and write the two facts',
        working: 'x is the number of small books and y is the number of large books. The count fact: x + y = 18. The totals fact: 2 × x + 5 × y = 60'
      },
      {
        does: 'Use the count fact to write one letter in terms of the other',
        working: 'From x + y = 18, x = 18 − y'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '2 × (18 − y) + 5 × y = 60'
      },
      {
        does: 'Solve for the letter that is left',
        working: '2 × 18 = 36, so 36 − 2 × y + 5 × y = 60; that is 36 + 3 × y = 60; 3 × y = 60 − 36 = 24; y = 24 ÷ 3 = 8'
      },
      { does: 'Find the other number from the count fact', working: 'x = 18 − 8 = 10' },
      {
        does: 'Check both facts',
        working: '10 + 8 = 18; 2 × 10 + 5 × 8 = 20 + 40 = 60. Both hold'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '10 small books and 8 large books' },
        {
          id: 's1',
          text: '8 small books and 10 large books',
          slip: 'you attach the two numbers to the wrong things: 8 belongs to the large books, the thing that was named y, and not to the small books.'
        },
        {
          id: 's2',
          text: '9 small books and 9 large books',
          slip: 'you use only the count fact and share the 18 out equally, which ignores the totals fact.'
        }
      ]
    },
    why: 'One fact alone cannot fix two missing numbers, because many pairs fit it. Using the count fact to write one letter in terms of the other leaves a single letter in the totals fact, and a single letter can be solved. The other number then follows from the count fact, and the pair has to fit both facts.'
  },

  {
    id: 'm3-dl-simul-2',
    use: 'drill',
    tier: 'varied',
    setting: 'work',
    topic: 'pots on a delivery van',
    kind: 'problem',
    outcome: 'simul',
    text: 'A florist’s van carried 22 pots, some weighing 8 kg and some weighing 12 kg, and the load came to 224 kg. How many pots of each weight were there?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'carried 22 pots, some weighing 8 kg and some weighing 12 kg',
        'the load came to 224 kg',
        'How many pots of each weight were there?'
      ],
      A1: ['carried 22 pots, some weighing 8 kg and some weighing 12 kg', 'the load came to 224 kg']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'In {cue:A1}, two numbers are missing, and two facts are stated about the pair: how many there are in all, and what they come to in all. That is {a:A1.totals}.'
    },
    not: {
      outcome: 'rearr',
      why: 'Two numbers are left out and two facts are given about them, so no single calculation can simply be undone. {o:rearr} would be the name if only one number were left out of one calculation.'
    },
    steps: [
      {
        does: 'Name the two missing numbers with letters, and write the two facts',
        working: 'x is the number of pots of 8 kg and y is the number of pots of 12 kg. The count fact: x + y = 22. The totals fact: 8 × x + 12 × y = 224'
      },
      {
        does: 'Use the count fact to write one letter in terms of the other',
        working: 'From x + y = 22, x = 22 − y'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '8 × (22 − y) + 12 × y = 224'
      },
      {
        does: 'Solve for the letter that is left',
        working: '8 × 22 = 176, so 176 − 8 × y + 12 × y = 224; that is 176 + 4 × y = 224; 4 × y = 224 − 176 = 48; y = 48 ÷ 4 = 12'
      },
      { does: 'Find the other number from the count fact', working: 'x = 22 − 12 = 10' },
      {
        does: 'Check both facts',
        working: '10 + 12 = 22; 8 × 10 + 12 × 12 = 80 + 144 = 224. Both hold'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '10 pots of 8 kg and 12 pots of 12 kg' },
        {
          id: 's1',
          text: '12 pots of 8 kg and 10 pots of 12 kg',
          slip: 'you attach the two numbers to the wrong things: 12 belongs to the pots of 12 kg, the thing that was named y, and not to the pots of 8 kg.'
        },
        {
          id: 's2',
          text: '11 pots of 8 kg and 11 pots of 12 kg',
          slip: 'you use only the count fact and share the 22 out equally, which ignores the totals fact.'
        }
      ]
    },
    why: 'One fact alone cannot fix two missing numbers, because many pairs fit it. Using the count fact to write one letter in terms of the other leaves a single letter in the totals fact, and a single letter can be solved. The other number then follows from the count fact, and the pair has to fit both facts.'
  }
]);
