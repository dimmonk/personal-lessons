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
    text: 'A taxi fare is a starting charge of $6, plus $1.50 for each kilometer. One fare comes to $21. How many kilometers was the ride?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['a starting charge of $6, plus $1.50 for each kilometer', 'How many kilometers was the ride?'],
      A1: ['a starting charge of $6, plus $1.50 for each kilometer', 'One fare comes to $21']
    },
    reason: {
      M1: 'The words {cue:M1} ask for a number to be worked out from the others. Nothing changes over time and there is no {t:righttriangle} or copy at another size, so it is {a:M1.unknown}.',
      A1: 'The words {cue:A1} look like a rate, but a starting charge is added on top, and you are given the result of the whole calculation. A rate with a fixed amount on top is {a:A1.formula}.'
    },
    not: {
      outcome: 'prop',
      why: 'It has a calculation and a result to undo, not only a rate. It would be {o:prop} if it gave only so much for so many and a new amount.'
    },
    also: ['rate'],
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the kilometers. First it is multiplied by 1.5, then 6 is added. The result is 21'
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
          slip: 'you undo the steps in the order they were done, instead of starting with the last one.'
        },
        {
          id: 's2',
          text: '18 km',
          slip: 'you add 6 once more instead of undoing it by taking away 6.'
        }
      ]
    },
    why: 'Undo each thing done to the missing number with its opposite, in reverse order: the last thing done sits on the outside, as socks go on before shoes and come off after them. Running the {t:formula} forward on your answer proves it.'
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
      M1: 'The words {cue:M1} ask for a number to be worked out from the others. Nothing changes over time and there is no {t:righttriangle} or copy at another size, so it is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give an area, which is a result, and the missing width is used once: 1 is added to it, then it is multiplied by 5. Used once, each thing done to it can be undone, so it is {a:A1.formula}.'
    },
    not: {
      outcome: 'quad',
      why: 'The missing number is used once, so each thing done to it can be undone in turn. It would be {o:quad} if it were multiplied by itself too.'
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
          slip: 'you undo the steps in the order they were done, instead of starting with the last one.'
        },
        {
          id: 's2',
          text: '199 m',
          slip: 'you multiply by 5 once more instead of undoing it by dividing by 5.'
        }
      ]
    },
    why: 'Undo each thing done to the missing number with its opposite, in reverse order: the last thing done sits on the outside, as socks go on before shoes and come off after them. Running the {t:formula} forward on your answer proves it.'
  },
]);
