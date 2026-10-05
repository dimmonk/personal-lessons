// Basic Math, Unit Three: the drill's problems. Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question, and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [
  {
    id: 'm3-dl-rearr-1',
    use: 'drill',
    tier: 'clean',
    setting: 'health',
    topic: 'a dose by body weight',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A pharmacist works out a child’s dose in mg this way: multiply the child’s weight in kilos by 5, then take away 10. A child’s dose is 65 mg. How much does the child weigh?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['multiply the child’s weight in kilos by 5, then take away 10', 'How much does the child weigh?'],
      A1: ['multiply the child’s weight in kilos by 5, then take away 10', 'dose is 65 mg']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    },
    not: {
      outcome: 'prop',
      why: 'There is a calculation to undo, with a result it came to, and not only a rate to scale. {o:prop} would be the name if the problem gave only so much for so many and a new amount of the same thing.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the weight. First it is multiplied by 5, then 10 is taken away. The result is 65'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Multiplying by 5 is undone by dividing by 5; taking away 10 is undone by adding 10. Last one first: adding 10, then dividing by 5'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '65 + 10 = 75; 75 ÷ 5 = 15'
      },
      {
        does: 'Check by running the calculation forward',
        working: '15 × 5 = 75; 75 − 10 = 65, which is the 65 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '15 kg' },
        {
          id: 's1',
          text: '23 kg',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '11 kg',
          slip: 'you take away 10 once more instead of undoing it by adding 10.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-dl-rearr-2',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'take-home pay',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A firm works out take-home pay this way: take the gross pay, subtract the €150 allowance, and multiply what is left by 0.8. Sam takes home €720. What was his gross pay?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: [
        'take the gross pay, subtract the €150 allowance, and multiply what is left by 0.8',
        'What was his gross pay?'
      ],
      A1: [
        'take the gross pay, subtract the €150 allowance, and multiply what is left by 0.8',
        'Sam takes home €720'
      ]
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    },
    not: {
      outcome: 'simul',
      why: 'Only one number is left out, and one calculation has a result to undo. {o:simul} would be the name if two numbers were left out and two separate facts were given about them.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the gross pay. First 150 is taken away from it, then the total is multiplied by 0.8. The result is 720'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Taking away 150 is undone by adding 150; multiplying by 0.8 is undone by dividing by 0.8. Last one first: dividing by 0.8, then adding 150'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '720 ÷ 0.8 = 900; 900 + 150 = 1050'
      },
      {
        does: 'Check by running the calculation forward',
        working: '1050 − 150 = 900; 900 × 0.8 = 720, which is the 720 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '€1050' },
        {
          id: 's1',
          text: '€1087.5',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '€726',
          slip: 'you multiply by 0.8 once more instead of undoing it by dividing by 0.8.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-dl-rearr-3',
    use: 'drill',
    tier: 'varied',
    setting: 'travel',
    topic: 'extra baggage',
    kind: 'problem',
    outcome: 'rearr',
    text: 'An airline works out the charge for a heavy bag this way: take the weight in kilos, subtract the 20 kg allowance, multiply by 6, and add a €10 handling fee. The charge was €70. How heavy was the bag?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: [
        'take the weight in kilos, subtract the 20 kg allowance, multiply by 6, and add a €10 handling fee',
        'How heavy was the bag?'
      ],
      A1: [
        'take the weight in kilos, subtract the 20 kg allowance, multiply by 6, and add a €10 handling fee',
        'The charge was €70'
      ]
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    },
    not: {
      outcome: 'prop',
      why: 'There is a calculation to undo, with a result it came to, and not only a rate to scale. {o:prop} would be the name if the problem gave only so much for so many and a new amount of the same thing.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the weight. First 20 is taken away from it, then the total is multiplied by 6, then 10 is added. The result is 70'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Taking away 20 is undone by adding 20; multiplying by 6 is undone by dividing by 6; adding 10 is undone by taking away 10. Last one first: taking away 10, then dividing by 6, then adding 20'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '70 − 10 = 60; 60 ÷ 6 = 10; 10 + 20 = 30'
      },
      {
        does: 'Check by running the calculation forward',
        working: '30 − 20 = 10; 10 × 6 = 60; 60 + 10 = 70, which is the 70 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '30 kg' },
        {
          id: 's1',
          text: '5 kg',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '380 kg',
          slip: 'you multiply by 6 once more instead of undoing it by dividing by 6.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-dw-rearr-1',
    use: 'drill',
    tier: 'clean',
    setting: 'building',
    topic: 'planks for a wall',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A joiner works out how many planks to order this way: the length of the wall in metres, divided by 2, plus 4 spare planks. A job needs 19 planks. How long is the wall?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['the length of the wall in metres, divided by 2, plus 4 spare planks', 'How long is the wall?'],
      A1: ['the length of the wall in metres, divided by 2, plus 4 spare planks', 'A job needs 19 planks']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    },
    not: {
      outcome: 'prop',
      why: 'There is a calculation to undo, with a result it came to, and not only a rate to scale. {o:prop} would be the name if the problem gave only so much for so many and a new amount of the same thing.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the length. First it is divided by 2, then 4 is added. The result is 19'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Dividing by 2 is undone by multiplying by 2; adding 4 is undone by taking away 4. Last one first: taking away 4, then multiplying by 2'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '19 − 4 = 15; 15 × 2 = 30'
      },
      {
        does: 'Check by running the calculation forward',
        working: '30 ÷ 2 = 15; 15 + 4 = 19, which is the 19 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '30 m' },
        {
          id: 's1',
          text: '34 m',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '46 m',
          slip: 'you add 4 once more instead of undoing it by taking away 4.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-dw-rearr-2',
    use: 'drill',
    tier: 'clean',
    setting: 'money',
    topic: 'a savings club bonus',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A savings club works out a member’s total in euros this way: multiply the amount paid in by 1.5, then add a €30 welcome gift. Lena’s total is €630. How much did she pay in?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['multiply the amount paid in by 1.5, then add a €30 welcome gift', 'How much did she pay in?'],
      A1: ['multiply the amount paid in by 1.5, then add a €30 welcome gift', 'Lena’s total is €630']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    },
    not: {
      outcome: 'simul',
      why: 'Only one number is left out, and one calculation has a result to undo. {o:simul} would be the name if two numbers were left out and two separate facts were given about them.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the amount paid in. First it is multiplied by 1.5, then 30 is added. The result is 630'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Multiplying by 1.5 is undone by dividing by 1.5; adding 30 is undone by taking away 30. Last one first: taking away 30, then dividing by 1.5'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '630 − 30 = 600; 600 ÷ 1.5 = 400'
      },
      {
        does: 'Check by running the calculation forward',
        working: '400 × 1.5 = 600; 600 + 30 = 630, which is the 630 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '€400' },
        {
          id: 's1',
          text: '€390',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '€440',
          slip: 'you add 30 once more instead of undoing it by taking away 30.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  }
]);
