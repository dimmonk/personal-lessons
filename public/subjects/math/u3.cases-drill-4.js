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
    text: 'A cleaning firm uses 18 liters of cleaner for every 30 rooms. How many liters are needed for 45 rooms?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['uses 18 liters of cleaner for every 30 rooms', 'How many liters are needed for 45 rooms?'],
      A1: ['uses 18 liters of cleaner for every 30 rooms', 'for 45 rooms']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give so much for so many of one thing, and a new amount of one of them, with nothing added on top and no calculation whose result has to be undone. That is {a:A1.rate}.'
    },
    not: {
      outcome: 'rearr',
      why: 'The problem gives a rate and a new amount, with nothing added on top and no calculation whose result has to be undone. {o:rearr} would be the name if a calculation, or a fixed amount on top of the rate, had a result to undo.'
    },
    steps: [
      {
        does: 'Pair the new amount with the matching number in the rate',
        working: 'The rate is 18 liters of cleaner for 30 rooms. The new amount is 45 rooms, so it is paired with the 30 rooms in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '45 ÷ 30 = 1.5, so the new amount is 1.5 times as big as 30'
      },
      { does: 'Make the other number that many times as big', working: '18 × 1.5 = 27' },
      {
        does: 'Check the direction',
        working: '45 rooms is more than 30 rooms, so the answer should be more than 18 liters of cleaner, and 27 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '27 liters of cleaner' },
        {
          id: 's1',
          text: '12 liters of cleaner',
          slip: 'you divide 18 by 1.5 instead of multiplying, so the answer moves the wrong way: more rooms must mean more liters of cleaner.'
        },
        {
          id: 's2',
          text: '75 liters of cleaner',
          slip: 'you pair the new amount with 18 liters of cleaner, the other number in the rate, and not with 30 rooms, the number of the same thing.'
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
    topic: 'eggs for a cafeteria',
    kind: 'problem',
    outcome: 'prop',
    text: 'A school cafeteria with 3 cooks uses 18 eggs for every 12 students. Today 30 students are in for lunch. How many eggs are needed?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['uses 18 eggs for every 12 students', 'How many eggs are needed?'],
      A1: ['uses 18 eggs for every 12 students', 'Today 30 students are in for lunch']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give so much for so many, 18 eggs for every 12 students, and a new amount of students. The 3 cooks and the word “today” are numbers and words that no step uses, and nothing is added on top, so the answer is {a:A1.rate}.'
    },
    not: {
      outcome: 'rearr',
      why: 'The problem gives a rate and a new amount, with nothing added on top and no calculation whose result has to be undone. {o:rearr} would be the name if a calculation, or a fixed amount on top of the rate, had a result to undo.'
    },
    steps: [
      {
        does: 'Pair the new amount with the matching number in the rate',
        working: 'The rate is 18 eggs for 12 students. The new amount is 30 students, so it is paired with the 12 students in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '30 ÷ 12 = 2.5, so the new amount is 2.5 times as big as 12'
      },
      { does: 'Make the other number that many times as big', working: '18 × 2.5 = 45' },
      {
        does: 'Check the direction',
        working: '30 students is more than 12 students, so the answer should be more than 18 eggs, and 45 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '45 eggs' },
        {
          id: 's1',
          text: '7.2 eggs',
          slip: 'you divide 18 by 2.5 instead of multiplying, so the answer moves the wrong way: more students must mean more eggs.'
        },
        {
          id: 's2',
          text: '20 eggs',
          slip: 'you pair the new amount with 18 eggs, the other number in the rate, and not with 12 students, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  },
]);
