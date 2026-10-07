// Basic Math, Unit Five: the drill's problems (part 6 of 9), asked as a whole route.
// Every problem has a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

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
      M1: 'The words {cue:M1} ask how likely something is, so you are finding a chance, not a count.',
      C1: 'The words {cue:C1} give a chance for each of 5 separate joints and ask for at least one that leaks.'
    },
    not: {
      outcome: 'multprin',
      why: 'This asks for a chance, not a count of results. Both multiply separate things, which is why they look alike.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each joint: 1 − 0.02 = 0.98'
      },
      {
        does: 'Multiply those chances to get the chance that none happens',
        working: '0.98 × 0.98 × 0.98 × 0.98 × 0.98 = 0.9039207968'
      },
      {
        does: 'Take that away from 1 to get the chance that at least one happens',
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
          slip: 'you add the chances of the separate things, so a run where two or more happen is counted twice and the total can pass 100%.'
        },
        {
          id: 's2',
          text: '90.4%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens or none does, so the two chances add up to 1. The chance of none is one product, because the things are separate. What is left of 1 is the chance that one or more happens.'
  }
]);
