// Basic Math, Unit Three: the drill's problems. Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question, and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [
  {
    id: 'm3-dw-rearr-3',
    use: 'drill',
    tier: 'varied',
    setting: 'home',
    topic: 'a three-part shelf',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A carpenter works out the board length in cm for a three-part shelf like this: add 6 to the width of one part, multiply by 3, then take away 3 for the trimmed end. The board is 78 cm long. How wide is one part?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: [
        'add 6 to the width of one part, multiply by 3, then take away 3 for the trimmed end',
        'How wide is one part?'
      ],
      A1: [
        'add 6 to the width of one part, multiply by 3, then take away 3 for the trimmed end',
        'The board is 78 cm long'
      ]
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
        working: 'Start from the width of one part. First 6 is added to it, then the total is multiplied by 3, then 3 is taken away. The result is 78'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Adding 6 is undone by taking away 6; multiplying by 3 is undone by dividing by 3; taking away 3 is undone by adding 3. Last one first: adding 3, then dividing by 3, then taking away 6'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '78 + 3 = 81; 81 ÷ 3 = 27; 27 − 6 = 21'
      },
      {
        does: 'Check by running the calculation forward',
        working: '21 + 6 = 27; 27 × 3 = 81; 81 − 3 = 78, which is the 78 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '21 cm' },
        {
          id: 's1',
          text: '27 cm',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '19 cm',
          slip: 'you take away 3 once more instead of undoing it by adding 3.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-dr-rearr-1',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a game and a coupon',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A shop works out the price after a coupon like this: take the full price, subtract €15, then halve what is left. A game costs €40 after the coupon. What was the full price?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['take the full price, subtract €15, then halve what is left', 'What was the full price?'],
      A1: ['take the full price, subtract €15, then halve what is left', 'costs €40 after the coupon']
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
        { id: 'r', text: '€95' },
        {
          id: 's1',
          text: '€110',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '€35',
          slip: 'you divide by 2 once more instead of undoing it by multiplying by 2.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-dr-rearr-2',
    use: 'drill',
    tier: 'clean',
    setting: 'cooking',
    topic: 'eggs for a bakery',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A bakery works out the eggs to order this way: multiply the number of cakes by 3, then add 6. An order is for 39 eggs. How many cakes is it for?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['multiply the number of cakes by 3, then add 6', 'How many cakes is it for?'],
      A1: ['multiply the number of cakes by 3, then add 6', 'An order is for 39 eggs']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    },
    not: {
      outcome: 'simul',
      why: 'Only one number is left out, and one calculation has a result to undo. {o:simul} would be the name if two numbers were left out and two separate facts were given about them.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the cakes. First it is multiplied by 3, then 6 is added. The result is 39'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Multiplying by 3 is undone by dividing by 3; adding 6 is undone by taking away 6. Last one first: taking away 6, then dividing by 3'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '39 − 6 = 33; 33 ÷ 3 = 11'
      },
      {
        does: 'Check by running the calculation forward',
        working: '11 × 3 = 33; 33 + 6 = 39, which is the 39 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '11' },
        {
          id: 's1',
          text: '7',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '15',
          slip: 'you add 6 once more instead of undoing it by taking away 6.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-dr-rearr-3',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'lockers at a pool',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A swimming pool works out its locker fee in euros like this: take the number of lockers booked, subtract the 2 that are free, then multiply by 5. The fee is €30. How many lockers were booked?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: [
        'take the number of lockers booked, subtract the 2 that are free, then multiply by 5',
        'How many lockers were booked?'
      ],
      A1: [
        'take the number of lockers booked, subtract the 2 that are free, then multiply by 5',
        'The fee is €30'
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
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-dr-rearr-4',
    use: 'drill',
    tier: 'varied',
    setting: 'work',
    topic: 'a printer’s quote',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A printer works out a quote in euros like this: divide the number of copies by 5, then add 12 for the set-up. The quote is €60. How many copies is it for?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['divide the number of copies by 5, then add 12 for the set-up', 'How many copies is it for?'],
      A1: ['divide the number of copies by 5, then add 12 for the set-up', 'The quote is €60']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    },
    not: {
      outcome: 'simul',
      why: 'Only one number is left out, and one calculation has a result to undo. {o:simul} would be the name if two numbers were left out and two separate facts were given about them.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the copies. First it is divided by 5, then 12 is added. The result is 60'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Dividing by 5 is undone by multiplying by 5; adding 12 is undone by taking away 12. Last one first: taking away 12, then multiplying by 5'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '60 − 12 = 48; 48 × 5 = 240'
      },
      {
        does: 'Check by running the calculation forward',
        working: '240 ÷ 5 = 48; 48 + 12 = 60, which is the 60 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '240' },
        {
          id: 's1',
          text: '288',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '360',
          slip: 'you add 12 once more instead of undoing it by taking away 12.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  }
]);
