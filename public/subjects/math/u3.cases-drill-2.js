// Basic Math, Unit Three: the drill's problems. Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question, and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [

  {
    id: 'm3-dr-rearr-1',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a game and a coupon',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A shop works out the price after a coupon like this: take the full price, subtract $15, then halve what is left. A game costs $40 after the coupon. What was the full price?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['take the full price, subtract $15, then halve what is left', 'What was the full price?'],
      A1: ['take the full price, subtract $15, then halve what is left', 'costs $40 after the coupon']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    },
    not: {
      outcome: 'prop',
      why: 'There is a calculation to undo, with a result it came to, and not only a rate to scale. {o:prop} would be the name if the problem gave only so much for so many and a new amount of the same thing.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the full price. First 15 is taken away from it, then the total is divided by 2. The result is 40'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Taking away 15 is undone by adding 15; dividing by 2 is undone by multiplying by 2. Last one first: multiplying by 2, then adding 15'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '40 × 2 = 80; 80 + 15 = 95'
      },
      {
        does: 'Check by running the calculation forward',
        working: '95 − 15 = 80; 80 ÷ 2 = 40, which is the 40 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$95' },
        {
          id: 's1',
          text: '$110',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '$35',
          slip: 'you divide by 2 once more instead of undoing it by multiplying by 2.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be canceled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-dr-rearr-3',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'lockers at a pool',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A swimming pool works out its locker fee in dollars like this: take the number of lockers booked, subtract the 2 that are free, then multiply by 5. The fee is $30. How many lockers were booked?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: [
        'take the number of lockers booked, subtract the 2 that are free, then multiply by 5',
        'How many lockers were booked?'
      ],
      A1: [
        'take the number of lockers booked, subtract the 2 that are free, then multiply by 5',
        'The fee is $30'
      ]
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    },
    not: {
      outcome: 'quad',
      why: 'The missing number is used once in the calculation, so each thing done to it can be undone in turn. {o:quad} would be the name if it were multiplied by itself as well.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the lockers. First 2 is taken away from it, then the total is multiplied by 5. The result is 30'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Taking away 2 is undone by adding 2; multiplying by 5 is undone by dividing by 5. Last one first: dividing by 5, then adding 2'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '30 ÷ 5 = 6; 6 + 2 = 8'
      },
      {
        does: 'Check by running the calculation forward',
        working: '8 − 2 = 6; 6 × 5 = 30, which is the 30 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '8' },
        {
          id: 's1',
          text: '6.4',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '152',
          slip: 'you multiply by 5 once more instead of undoing it by dividing by 5.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be canceled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },
]);
