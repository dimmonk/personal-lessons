// Basic Math, Unit Five: the drill's problems (part 6 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [
  {
    id: 'm5-dl-cm-2',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'penalty kicks in a match',
    kind: 'problem',
    outcome: 'complement',
    text: 'A footballer takes 4 penalty kicks in a season. Each kick has a 70% chance of scoring, and the kicks are separate. How likely is it that at least one kick scores?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: {
      M1: ['How likely is it that at least one kick scores?'],
      C1: [
        'Each kick has a 70% chance of scoring, and the kicks are separate. How likely is it that at least one kick scores?'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give a chance for each of 4 separate kicks and ask how likely it is that one or more of them scores, so the key’s answer is {a:C1.atleast}.'
    },
    not: {
      outcome: 'multprin',
      why: 'The problem asks for a chance, not a count of results. {o:multprin} would be the name if it asked how many different results there are, and it also multiplies separate things, which is why the two look alike.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each kick: 1 − 0.7 = 0.3'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.3 × 0.3 × 0.3 × 0.3 = 0.0081'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.0081 = 0.9919, which is 99.2%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '99.2%' },
        {
          id: 's1',
          text: '280%',
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '0.8%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  },

  {
    id: 'm5-dw-cm-1',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'help lines that may be free',
    kind: 'problem',
    outcome: 'complement',
    text: 'A caller tries 3 separate help lines at once. Each line is free with a chance of 30%, and one being free does not change the chance for another. How likely is it that at least one line is free?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: {
      M1: ['How likely is it that at least one line is free?'],
      C1: [
        'Each line is free with a chance of 30%, and one being free does not change the chance for another. How likely is it that at least one line is free?'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} give the chance of each of 3 separate lines being free and ask how likely it is that at least one is, so the key’s answer is {a:C1.atleast}.'
    },
    not: {
      outcome: 'multprin',
      why: 'The problem asks for a chance, not a count of results. {o:multprin} would be the name if it asked how many different results there are, and it also multiplies separate things, which is why the two look alike.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each line: 1 − 0.3 = 0.7'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.7 × 0.7 × 0.7 = 0.343'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.343 = 0.657, which is 65.7%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '65.7%' },
        {
          id: 's1',
          text: '90%',
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '34.3%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  },

  {
    id: 'm5-dw-cm-2',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'scratch cards bought together',
    kind: 'problem',
    outcome: 'complement',
    text: 'A shopper buys 6 scratch cards. Each card has a 10% chance of winning, and the cards are separate. How likely is it that at least one card wins?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: {
      M1: ['How likely is it that at least one card wins?'],
      C1: [
        'Each card has a 10% chance of winning, and the cards are separate. How likely is it that at least one card wins?'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give the chance of each of 6 separate cards winning and ask how likely it is that at least one wins, so the key’s answer is {a:C1.atleast}.'
    },
    not: {
      outcome: 'multprin',
      why: 'The problem asks for a chance, not a count of results. {o:multprin} would be the name if it asked how many different results there are, and it also multiplies separate things, which is why the two look alike.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each card: 1 − 0.1 = 0.9'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.9 × 0.9 × 0.9 × 0.9 × 0.9 × 0.9 = 0.531441'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.531441 = 0.468559, which is 46.9%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '46.9%' },
        {
          id: 's1',
          text: '60%',
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '53.1%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  },

  {
    id: 'm5-dr-cm-1',
    use: 'drill',
    tier: 'clean',
    setting: 'building',
    topic: 'joints on a new roof',
    kind: 'problem',
    outcome: 'complement',
    text: 'A roofer finishes 5 joints on a roof. Each joint has a 2% chance of leaking, and the joints are separate. How likely is it that at least one joint leaks?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: {
      M1: ['How likely is it that at least one joint leaks?'],
      C1: [
        'Each joint has a 2% chance of leaking, and the joints are separate. How likely is it that at least one joint leaks?'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give the chance of each of 5 separate joints leaking and ask how likely it is that at least one leaks, so the key’s answer is {a:C1.atleast}.'
    },
    not: {
      outcome: 'multprin',
      why: 'The problem asks for a chance, not a count of results. {o:multprin} would be the name if it asked how many different results there are, and it also multiplies separate things, which is why the two look alike.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each joint: 1 − 0.02 = 0.98'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.98 × 0.98 × 0.98 × 0.98 × 0.98 = 0.9039207968'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.9039207968 = 0.0960792032, which is 9.6%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '9.6%' },
        {
          id: 's1',
          text: '10%',
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '90.4%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  },

  {
    id: 'm5-dr-cm-2',
    use: 'drill',
    tier: 'varied',
    setting: 'money',
    topic: 'loans that may not be repaid',
    kind: 'problem',
    outcome: 'complement',
    text: 'A small lender has 3 separate loans. The chance that each loan is not repaid is 10% for the first, 5% for the second and 20% for the third, and one loan does not change the chance of another. How likely is it that at least one loan is not repaid?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: {
      M1: ['How likely is it that at least one loan is not repaid?'],
      C1: [
        'The chance that each loan is not repaid is 10% for the first, 5% for the second and 20% for the third'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} give a different chance for each of 3 separate loans and ask how likely it is that at least one is not repaid, so the key’s answer is {a:C1.atleast}.'
    },
    not: {
      outcome: 'multprin',
      why: 'The problem asks for a chance, not a count of results. {o:multprin} would be the name if it asked how many different results there are, and it also multiplies separate things, which is why the two look alike.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'first loan: 1 − 0.1 = 0.9; second loan: 1 − 0.05 = 0.95; third loan: 1 − 0.2 = 0.8'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.9 × 0.95 × 0.8 = 0.684'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.684 = 0.316, which is 31.6%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '31.6%' },
        {
          id: 's1',
          text: '35%',
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '68.4%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  }
]);
