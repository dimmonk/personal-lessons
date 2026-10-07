// Basic Math, Unit Five: fresh problems for later days (part 3 of 4): one for each kind of problem.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often
// taken for.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

  {
    id: 'm5-rt-cm-3',
    use: 'return',
    tier: 'varied',
    setting: 'shopping',
    topic: 'orders that may arrive late',
    kind: 'problem',
    outcome: 'complement',
    text: 'A shop expects 3 separate deliveries. The chance that each is late is 30% for the first, 20% for the second and 10% for the third, and one being late does not change the chance for another. How likely is it that at least one delivery is late?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: {
      M1: ['How likely is it that at least one delivery is late?'],
      C1: [
        'The chance that each is late is 30% for the first, 20% for the second and 10% for the third'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that a delivery is late, so you are finding a chance, not a count.',
      C1: 'The words {cue:C1} give a different chance for each of 3 separate deliveries, and the question asks for at least one that is late.'
    },
    not: {
      outcome: 'multprin',
      why: 'This asks for a chance, not a count of results. Both multiply separate things, which is why they look alike.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'first delivery: 1 − 0.3 = 0.7; second delivery: 1 − 0.2 = 0.8; third delivery: 1 − 0.1 = 0.9'
      },
      {
        does: 'Multiply those chances to get the chance that none happens',
        working: '0.7 × 0.8 × 0.9 = 0.504'
      },
      {
        does: 'Take that away from 1 to get the chance that at least one happens',
        working: '1 − 0.504 = 0.496, which is 49.6%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '49.6%' },
        {
          id: 's1',
          text: '60%',
          slip: 'you add the chances of the separate things, so a run where two or more happen is counted twice and the total can pass 100%.'
        },
        {
          id: 's2',
          text: '50.4%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens or none does, so the two chances add up to 1. The chance of none is one product, because the things are separate. What is left of 1 is the chance that one or more happens.'
  }
]);
