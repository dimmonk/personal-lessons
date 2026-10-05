// Basic Math, Unit Three: the drill's problems. Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question, and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [
  {
    id: 'm3-dr-rearr-5',
    use: 'drill',
    tier: 'misleading',
    setting: 'travel',
    topic: 'a taxi with a starting charge',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A taxi fare is a starting charge of €6, plus €1.50 for each kilometre. One fare comes to €21. How many kilometres was the ride?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['a starting charge of €6, plus €1.50 for each kilometre', 'How many kilometres was the ride?'],
      A1: ['a starting charge of €6, plus €1.50 for each kilometre', 'One fare comes to €21']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} show a price for each kilometre, which looks like a rate, but a starting charge is added on top of it, and the problem gives the result of that whole calculation and asks for the kilometres in it. A rate with a fixed amount added on top is {a:A1.formula}.'
    },
    not: {
      outcome: 'prop',
      why: 'There is a calculation to undo, with a result it came to, and not only a rate to scale. {o:prop} would be the name if the problem gave only so much for so many and a new amount of the same thing.'
    },
    also: ['rate'],
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the kilometres. First it is multiplied by 1.5, then 6 is added. The result is 21'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Multiplying by 1.5 is undone by dividing by 1.5; adding 6 is undone by taking away 6. Last one first: taking away 6, then dividing by 1.5'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '21 − 6 = 15; 15 ÷ 1.5 = 10'
      },
      {
        does: 'Check by running the calculation forward',
        working: '10 × 1.5 = 15; 15 + 6 = 21, which is the 21 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '10 km' },
        {
          id: 's1',
          text: '8 km',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '18 km',
          slip: 'you add 6 once more instead of undoing it by taking away 6.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-dr-rearr-6',
    use: 'drill',
    tier: 'misleading',
    setting: 'building',
    topic: 'a banner with a strip added',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A rectangular banner is 5 m long. After a strip of 1 m is added to its width, its area is 40 m². How wide was the banner before?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: [
        'A rectangular banner is 5 m long',
        'a strip of 1 m is added to its width',
        'How wide was the banner before?'
      ],
      A1: ['A rectangular banner is 5 m long', 'a strip of 1 m is added to its width', 'its area is 40 m²']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give an area, which is a result, and the missing width is used once in it: it has 1 added and is then multiplied by 5. The missing width is used once, so each thing done to it can be undone, which is {a:A1.formula}.'
    },
    not: {
      outcome: 'quad',
      why: 'The missing number is used once in the calculation, so each thing done to it can be undone in turn. {o:quad} would be the name if it were multiplied by itself as well.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the width. First 1 is added to it, then the total is multiplied by 5. The result is 40'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Adding 1 is undone by taking away 1; multiplying by 5 is undone by dividing by 5. Last one first: dividing by 5, then taking away 1'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '40 ÷ 5 = 8; 8 − 1 = 7'
      },
      {
        does: 'Check by running the calculation forward',
        working: '7 + 1 = 8; 8 × 5 = 40, which is the 40 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '7 m' },
        {
          id: 's1',
          text: '7.8 m',
          slip: 'you undo the steps in the order they were done instead of in reverse, so what was done first is undone first.'
        },
        {
          id: 's2',
          text: '199 m',
          slip: 'you multiply by 5 once more instead of undoing it by dividing by 5.'
        }
      ]
    },
    why: 'Each thing done to the missing number can be cancelled by its opposite, and the opposites have to be done in the reverse order, because the last thing done sits outside the others, as socks go on before shoes and come off after them. Undoing from the result back through the steps leads to the number you started from, and running the {t:formula} forward on the answer proves it.'
  },

  {
    id: 'm3-dl-prop-1',
    use: 'drill',
    tier: 'clean',
    setting: 'cooking',
    topic: 'carrots for soup',
    kind: 'problem',
    outcome: 'prop',
    text: 'A soup recipe uses 6 carrots for every 8 bowls. How many carrots are needed for 24 bowls?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['uses 6 carrots for every 8 bowls', 'How many carrots are needed for 24 bowls?'],
      A1: ['uses 6 carrots for every 8 bowls', 'for 24 bowls']
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
        working: 'The rate is 6 carrots for 8 bowls. The new amount is 24 bowls, so it is paired with the 8 bowls in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '24 ÷ 8 = 3, so the new amount is 3 times as big as 8'
      },
      { does: 'Make the other number that many times as big', working: '6 × 3 = 18' },
      {
        does: 'Check the direction',
        working: '24 bowls is more than 8 bowls, so the answer should be more than 6 carrots, and 18 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '18 carrots' },
        {
          id: 's1',
          text: '2 carrots',
          slip: 'you divide 6 by 3 instead of multiplying, so the answer moves the wrong way: more bowls must mean more carrots.'
        },
        {
          id: 's2',
          text: '32 carrots',
          slip: 'you pair the new amount with 6 carrots, the other number in the rate, and not with 8 bowls, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  },

  {
    id: 'm3-dl-prop-2',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'balls for a club',
    kind: 'problem',
    outcome: 'prop',
    text: 'A club needs 9 balls for every 15 players. It has 45 balls. How many players can it equip?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['needs 9 balls for every 15 players', 'How many players can it equip?'],
      A1: ['needs 9 balls for every 15 players', 'It has 45 balls']
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
        working: 'The rate is 15 players for 9 balls. The new amount is 45 balls, so it is paired with the 9 balls in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '45 ÷ 9 = 5, so the new amount is 5 times as big as 9'
      },
      { does: 'Make the other number that many times as big', working: '15 × 5 = 75' },
      {
        does: 'Check the direction',
        working: '45 balls is more than 9 balls, so the answer should be more than 15 players, and 75 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '75 players' },
        {
          id: 's1',
          text: '3 players',
          slip: 'you divide 15 by 5 instead of multiplying, so the answer moves the wrong way: more balls must mean more players.'
        },
        {
          id: 's2',
          text: '27 players',
          slip: 'you pair the new amount with 15 players, the other number in the rate, and not with 9 balls, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  },

  {
    id: 'm3-dw-prop-1',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'brackets in a hardware shop',
    kind: 'problem',
    outcome: 'prop',
    text: 'A hardware shop sells 12 brackets for €15. How much do 36 brackets cost?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['sells 12 brackets for €15', 'How much do 36 brackets cost?'],
      A1: ['sells 12 brackets for €15', 'do 36 brackets cost']
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
        working: 'The rate is 12 brackets for 15 euros. The new amount is 36 brackets, so it is paired with the 12 brackets in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '36 ÷ 12 = 3, so the new amount is 3 times as big as 12'
      },
      { does: 'Make the other number that many times as big', working: '15 × 3 = 45' },
      {
        does: 'Check the direction',
        working: '36 brackets is more than 12 brackets, so the answer should be more than 15 euros, and 45 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '45 euros' },
        {
          id: 's1',
          text: '5 euros',
          slip: 'you divide 15 by 3 instead of multiplying, so the answer moves the wrong way: more brackets must mean more euros.'
        },
        {
          id: 's2',
          text: '28.8 euros',
          slip: 'you pair the new amount with 15 euros, the other number in the rate, and not with 12 brackets, the number of the same thing.'
        }
      ]
    },
    why: 'A rate says that its two numbers keep in step: with twice as many of one there are twice as many of the other. So finding how many times as big the new amount is, and making the other number that many times as big, keeps to the same rate. The check on the direction catches a rate scaled the wrong way round.'
  }
]);
