// Basic Math, Unit Three: fresh problems for later days: three for each kind, one for each of its scheduled returns. A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [
  {
    id: 'm3-rt-rearr-1',
    use: 'return',
    tier: 'clean',
    setting: 'health',
    topic: 'a feed for a baby',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A nurse works out a baby’s feed in millilitres this way: take the baby’s weight in kilos, add 3, then multiply by 30. A baby’s feed is 240 mL. What does the baby weigh?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['take the baby’s weight in kilos, add 3, then multiply by 30', 'What does the baby weigh?'],
      A1: ['take the baby’s weight in kilos, add 3, then multiply by 30', 'feed is 240 mL']
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
        working: 'Start from the weight. First 3 is added to it, then the total is multiplied by 30. The result is 240'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Adding 3 is undone by taking away 3; multiplying by 30 is undone by dividing by 30. Last one first: dividing by 30, then taking away 3'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '240 ÷ 30 = 8; 8 − 3 = 5'
      },
      {
        does: 'Check by running the calculation forward',
        working: '5 + 3 = 8; 8 × 30 = 240, which is the 240 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '5 kg' },
        {
          id: 's1',
          text: '7.9 kg',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '7197 kg',
          slip: 'you multiply by 30 once more instead of undoing it by dividing by 30.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-rt-rearr-2',
    use: 'return',
    tier: 'varied',
    setting: 'home',
    topic: 'pleats in a curtain',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A tailor works out how many pleats a curtain has this way: take the curtain’s width in cm, subtract 4, then divide by 3. A curtain has 32 pleats. How wide is it?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['take the curtain’s width in cm, subtract 4, then divide by 3', 'How wide is it?'],
      A1: ['take the curtain’s width in cm, subtract 4, then divide by 3', 'A curtain has 32 pleats']
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
        working: 'Start from the width. First 4 is taken away from it, then the total is divided by 3. The result is 32'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Taking away 4 is undone by adding 4; dividing by 3 is undone by multiplying by 3. Last one first: multiplying by 3, then adding 4'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '32 × 3 = 96; 96 + 4 = 100'
      },
      {
        does: 'Check by running the calculation forward',
        working: '100 − 4 = 96; 96 ÷ 3 = 32, which is the 32 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '100 cm' },
        {
          id: 's1',
          text: '108 cm',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '92 cm',
          slip: 'you take away 4 once more instead of undoing it by adding 4.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-rt-rearr-3',
    use: 'return',
    tier: 'misleading',
    setting: 'shopping',
    topic: 'plants with a delivery fee',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A shop charges a €6 delivery fee plus €3 for each plant. An order costs €42. How many plants were in it?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['a €6 delivery fee plus €3 for each plant', 'How many plants were in it?'],
      A1: ['a €6 delivery fee plus €3 for each plant', 'An order costs €42']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} show a price for each plant, which looks like a rate, but a delivery fee is added on top of it, and the problem gives the result of that whole calculation. A rate with a fixed amount added on top is {a:A1.formula}.'
    },
    not: {
      outcome: 'prop',
      why: 'There is a calculation to undo, with a result it came to, and not only a rate to scale. {o:prop} would be the name if the problem gave only so much for so many and a new amount of the same thing.'
    },
    also: ['rate'],
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the plants. First it is multiplied by 3, then 6 is added. The result is 42'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Multiplying by 3 is undone by dividing by 3; adding 6 is undone by taking away 6. Last one first: taking away 6, then dividing by 3'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '42 − 6 = 36; 36 ÷ 3 = 12'
      },
      {
        does: 'Check by running the calculation forward',
        working: '12 × 3 = 36; 36 + 6 = 42, which is the 42 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '12' },
        {
          id: 's1',
          text: '8',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '16',
          slip: 'you add 6 once more instead of undoing it by taking away 6.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-rt-prop-1',
    use: 'return',
    tier: 'clean',
    setting: 'shopping',
    topic: 'stems for vases',
    kind: 'problem',
    outcome: 'prop',
    text: 'A florist uses 9 stems for every 6 vases. How many stems are needed for 18 vases?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['uses 9 stems for every 6 vases', 'How many stems are needed for 18 vases?'],
      A1: ['uses 9 stems for every 6 vases', 'for 18 vases']
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
        working: 'The rate is 9 stems for 6 vases. The new amount is 18 vases, so it is paired with the 6 vases in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '18 ÷ 6 = 3, so the new amount is 3 times as big as 6'
      },
      { does: 'Make the other number that many times as big', working: '9 × 3 = 27' },
      {
        does: 'Check the direction',
        working: '18 vases is more than 6 vases, so the answer should be more than 9 stems, and 27 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '27 stems' },
        {
          id: 's1',
          text: '3 stems',
          slip: 'you divide 9 by 3 instead of multiplying, so the answer moves the wrong way: more vases must mean more stems.'
        },
        {
          id: 's2',
          text: '12 stems',
          slip: 'you pair the new amount with 9 stems, the other number in the rate, and not with 6 vases, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  },

  {
    id: 'm3-rt-prop-2',
    use: 'return',
    tier: 'varied',
    setting: 'travel',
    topic: 'guests in hotel rooms',
    kind: 'problem',
    outcome: 'prop',
    text: 'A hotel puts 18 guests in every 12 rooms. It has 36 rooms free. How many guests can it take?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['puts 18 guests in every 12 rooms', 'How many guests can it take?'],
      A1: ['puts 18 guests in every 12 rooms', 'It has 36 rooms free']
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
        working: 'The rate is 18 guests for 12 rooms. The new amount is 36 rooms, so it is paired with the 12 rooms in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '36 ÷ 12 = 3, so the new amount is 3 times as big as 12'
      },
      { does: 'Make the other number that many times as big', working: '18 × 3 = 54' },
      {
        does: 'Check the direction',
        working: '36 rooms is more than 12 rooms, so the answer should be more than 18 guests, and 54 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '54 guests' },
        {
          id: 's1',
          text: '6 guests',
          slip: 'you divide 18 by 3 instead of multiplying, so the answer moves the wrong way: more rooms must mean more guests.'
        },
        {
          id: 's2',
          text: '24 guests',
          slip: 'you pair the new amount with 18 guests, the other number in the rate, and not with 12 rooms, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  }
]);
