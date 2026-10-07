// Basic Math, Unit Three: the drill's problems. Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question, and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [

  {
    id: 'm3-dr-simul-1',
    use: 'drill',
    tier: 'clean',
    setting: 'cooking',
    topic: 'trays of rolls and buns',
    kind: 'problem',
    outcome: 'simul',
    text: 'A baker filled 16 trays, some with 12 rolls each and some with 20 buns each, and baked 240 items in all. How many trays of rolls and how many of buns were there?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'filled 16 trays, some with 12 rolls each and some with 20 buns each',
        'baked 240 items in all',
        'How many trays of rolls and how many of buns were there?'
      ],
      A1: ['filled 16 trays, some with 12 rolls each and some with 20 buns each', 'baked 240 items in all']
    },
    reason: {
      M1: 'The words {cue:M1} ask for a number to be worked out from the others. Nothing changes over time and there is no {t:righttriangle} or copy at another size, so it is {a:M1.unknown}.',
      A1: 'In {cue:A1}, two numbers are missing, and two facts are given about them: how many there are in all, and what they come to in all. That is {a:A1.totals}.'
    },
    not: {
      outcome: 'rearr',
      why: 'Two numbers are missing and two facts are given, so you cannot just undo one calculation. It would be {o:rearr} if only one number were missing.'
    },
    steps: [
      {
        does: 'Give each missing number a letter, and write the two facts',
        working: 'x is the number of trays of rolls and y is the number of trays of buns. The count fact: x + y = 16. The totals fact: 12 × x + 20 × y = 240'
      },
      {
        does: 'Use the count fact to write one letter using the other',
        working: 'From x + y = 16, x = 16 − y'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '12 × (16 − y) + 20 × y = 240'
      },
      {
        does: 'Solve for the letter that is left',
        working: '12 × 16 = 192, so 192 − 12 × y + 20 × y = 240; that is 192 + 8 × y = 240; 8 × y = 240 − 192 = 48; y = 48 ÷ 8 = 6'
      },
      { does: 'Find the other number from the count fact', working: 'x = 16 − 6 = 10' },
      {
        does: 'Check both facts',
        working: '10 + 6 = 16; 12 × 10 + 20 × 6 = 120 + 120 = 240. Both hold'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '10 trays of rolls and 6 trays of buns' },
        {
          id: 's1',
          text: '6 trays of rolls and 10 trays of buns',
          slip: 'you swap the two numbers: 6 belongs to the trays of buns, which is y, not to the trays of rolls.'
        },
        {
          id: 's2',
          text: '8 trays of rolls and 8 trays of buns',
          slip: 'you use only the count fact and share the 16 equally, so the totals fact is ignored.'
        }
      ]
    },
    why: 'One fact alone leaves many pairs, so use the count fact to leave a single letter in the totals fact, and solve that. The other number then comes from the count fact, and the pair must fit both facts.'
  },

  {
    id: 'm3-dr-simul-2',
    use: 'drill',
    tier: 'varied',
    setting: 'home',
    topic: 'herbs and shrubs for a garden',
    kind: 'problem',
    outcome: 'simul',
    text: 'A family bought 12 plants for the garden, some herbs at $3 each and some shrubs at $9 each, and spent $84. How many herbs and how many shrubs did they buy?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'bought 12 plants for the garden, some herbs at $3 each and some shrubs at $9 each',
        'spent $84',
        'How many herbs and how many shrubs did they buy?'
      ],
      A1: ['bought 12 plants for the garden, some herbs at $3 each and some shrubs at $9 each', 'spent $84']
    },
    reason: {
      M1: 'The words {cue:M1} ask for a number to be worked out from the others. Nothing changes over time and there is no {t:righttriangle} or copy at another size, so it is {a:M1.unknown}.',
      A1: 'In {cue:A1}, two numbers are missing, and two facts are given about them: how many there are in all, and what they come to in all. That is {a:A1.totals}.'
    },
    not: {
      outcome: 'rearr',
      why: 'Two numbers are missing and two facts are given, so you cannot just undo one calculation. It would be {o:rearr} if only one number were missing.'
    },
    steps: [
      {
        does: 'Give each missing number a letter, and write the two facts',
        working: 'x is the number of herbs and y is the number of shrubs. The count fact: x + y = 12. The totals fact: 3 × x + 9 × y = 84'
      },
      {
        does: 'Use the count fact to write one letter using the other',
        working: 'From x + y = 12, x = 12 − y'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '3 × (12 − y) + 9 × y = 84'
      },
      {
        does: 'Solve for the letter that is left',
        working: '3 × 12 = 36, so 36 − 3 × y + 9 × y = 84; that is 36 + 6 × y = 84; 6 × y = 84 − 36 = 48; y = 48 ÷ 6 = 8'
      },
      { does: 'Find the other number from the count fact', working: 'x = 12 − 8 = 4' },
      {
        does: 'Check both facts',
        working: '4 + 8 = 12; 3 × 4 + 9 × 8 = 12 + 72 = 84. Both hold'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '4 herbs and 8 shrubs' },
        {
          id: 's1',
          text: '8 herbs and 4 shrubs',
          slip: 'you swap the two numbers: 8 belongs to the shrubs, which is y, not to the herbs.'
        },
        {
          id: 's2',
          text: '6 herbs and 6 shrubs',
          slip: 'you use only the count fact and share the 12 equally, so the totals fact is ignored.'
        }
      ]
    },
    why: 'One fact alone leaves many pairs, so use the count fact to leave a single letter in the totals fact, and solve that. The other number then comes from the count fact, and the pair must fit both facts.'
  }
]);
