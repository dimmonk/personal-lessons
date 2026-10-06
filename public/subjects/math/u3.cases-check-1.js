// Basic Math, Unit Three: the problems of the worked examples (a worked example's problem carries only the problem; its working is on the card) and the problems the learner finishes in a check
// (a check's problem carries the whole working, so that the app can show it up to the last step, or not at all, and name the slip behind every wrong choice).
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [
  {
    id: 'm3-s-rearr-1',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a jacket and sales tax',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A shop takes $8 off the list price of a jacket and then multiplies what is left by 1.2 to add the sales tax. A customer pays $54. What was the list price?'
  },

  {
    id: 'm3-s-rearr-2',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'the last jump of a contest',
    kind: 'problem',
    outcome: 'rearr',
    text: 'Dev’s first three long jumps add up to 36 m. The mean of four jumps is their total divided by 4. To reach a mean of 13 m, how far must his fourth jump be?'
  },

  {
    id: 'm3-ck-rearr-last',
    use: 'check',
    tier: 'clean',
    setting: 'cooking',
    topic: 'a joint in the oven',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A cook’s rule for roasting: multiply the weight of the joint in kilos by 40, then take away 20 for the resting time, to get the minutes in the oven. Her joint needs 100 minutes. What does it weigh?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: [
        'multiply the weight of the joint in kilos by 40, then take away 20 for the resting time',
        'What does it weigh?'
      ],
      A1: [
        'multiply the weight of the joint in kilos by 40, then take away 20 for the resting time',
        'needs 100 minutes'
      ]
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the weight. First it is multiplied by 40, then 20 is taken away. The result is 100'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Multiplying by 40 is undone by dividing by 40; taking away 20 is undone by adding 20. Last one first: adding 20, then dividing by 40'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '100 + 20 = 120; 120 ÷ 40 = 3'
      },
      {
        does: 'Check by running the calculation forward',
        working: '3 × 40 = 120; 120 − 20 = 100, which is the 100 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '3 kg' },
        {
          id: 's1',
          text: '22.5 kg',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '2 kg',
          slip: 'you take away 20 once more instead of undoing it by adding 20.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be canceled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-ck-rearr-whole',
    use: 'check',
    tier: 'clean',
    setting: 'money',
    topic: 'a shared meal and a tip',
    kind: 'problem',
    outcome: 'rearr',
    text: 'Four friends share a meal. They add a $12 tip to the bill and divide the total by 4, and each pays $15. What was the bill?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['add a $12 tip to the bill and divide the total by 4', 'What was the bill?'],
      A1: ['add a $12 tip to the bill and divide the total by 4', 'each pays $15']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the bill. First 12 is added to it, then the total is divided by 4. The result is 15'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Adding 12 is undone by taking away 12; dividing by 4 is undone by multiplying by 4. Last one first: multiplying by 4, then taking away 12'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '15 × 4 = 60; 60 − 12 = 48'
      },
      {
        does: 'Check by running the calculation forward',
        working: '48 + 12 = 60; 60 ÷ 4 = 15, which is the 15 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$48' },
        {
          id: 's1',
          text: '$12',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '$72',
          slip: 'you add 12 once more instead of undoing it by taking away 12.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be canceled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-s-prop-1',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'apples at a market stall',
    kind: 'problem',
    outcome: 'prop',
    text: 'A market stall sells 8 kg of apples for $6. How much do 12 kg cost?'
  },

  {
    id: 'm3-s-prop-2',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'posts along a fence',
    kind: 'problem',
    outcome: 'prop',
    text: 'A fence takes 24 posts for every 20 m of its length. How many posts are needed for 15 m?'
  },

  {
    id: 'm3-ck-prop-last',
    use: 'check',
    tier: 'clean',
    setting: 'health',
    topic: 'a dose for a patient',
    kind: 'problem',
    outcome: 'prop',
    text: 'A pharmacist is told that a dose is 15 mg for every 20 kg of body weight. What dose is right for a patient of 60 kg?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['a dose is 15 mg for every 20 kg of body weight', 'What dose is right for a patient of 60 kg?'],
      A1: ['a dose is 15 mg for every 20 kg of body weight', 'a patient of 60 kg']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give so much for so many of one thing, and a new amount of one of them, with nothing added on top and no calculation whose result has to be undone. That is {a:A1.rate}.'
    },
    steps: [
      {
        does: 'Pair the new amount with the matching number in the rate',
        working: 'The rate is 15 mg for 20 kg of body weight. The new amount is 60 kg of body weight, so it is paired with the 20 kg of body weight in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '60 ÷ 20 = 3, so the new amount is 3 times as big as 20'
      },
      { does: 'Make the other number that many times as big', working: '15 × 3 = 45' },
      {
        does: 'Check the direction',
        working: '60 kg of body weight is more than 20 kg of body weight, so the answer should be more than 15 mg, and 45 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '45 mg' },
        {
          id: 's1',
          text: '5 mg',
          slip: 'you divide 15 by 3 instead of multiplying, so the answer moves the wrong way: more kg of body weight must mean more mg.'
        },
        {
          id: 's2',
          text: '80 mg',
          slip: 'you pair the new amount with 15 mg, the other number in the rate, and not with 20 kg of body weight, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  },

  {
    id: 'm3-ck-prop-whole',
    use: 'check',
    tier: 'clean',
    setting: 'travel',
    topic: 'distance for a fare',
    kind: 'problem',
    outcome: 'prop',
    text: 'A coach company charges $9 for every 6 km. How far can a passenger travel for $27?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['charges $9 for every 6 km', 'How far can a passenger travel for $27?'],
      A1: ['charges $9 for every 6 km', 'for $27']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give so much for so many of one thing, and a new amount of one of them, with nothing added on top and no calculation whose result has to be undone. That is {a:A1.rate}.'
    },
    steps: [
      {
        does: 'Pair the new amount with the matching number in the rate',
        working: 'The rate is 9 dollars for 6 km. The new amount is 27 dollars, so it is paired with the 9 dollars in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '27 ÷ 9 = 3, so the new amount is 3 times as big as 9'
      },
      { does: 'Make the other number that many times as big', working: '6 × 3 = 18' },
      {
        does: 'Check the direction',
        working: '27 dollars is more than 9 dollars, so the answer should be more than 6 km, and 18 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '18 km' },
        {
          id: 's1',
          text: '2 km',
          slip: 'you divide 6 by 3 instead of multiplying, so the answer moves the wrong way: more dollars must mean more km.'
        },
        {
          id: 's2',
          text: '40.5 km',
          slip: 'you pair the new amount with 6 km, the other number in the rate, and not with 9 dollars, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  },

  {
    id: 'm3-s-simul-1',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'pens and notebooks for an office',
    kind: 'problem',
    outcome: 'simul',
    text: 'An office bought 20 items, some pens at $2 each and some notebooks at $5 each, and paid $61 in all. How many pens and how many notebooks did it buy?'
  },

  {
    id: 'm3-s-simul-2',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'bags of cement on a site',
    kind: 'problem',
    outcome: 'simul',
    text: 'A building site took delivery of 14 bags of cement, some of 25 kg and some of 40 kg, weighing 410 kg in all. How many bags of each size were there?'
  }
]);
