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
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give a different chance for each of 3 separate deliveries being late and ask how likely it is that at least one is, so the answer is {a:C1.atleast}.'
    },
    not: {
      outcome: 'multprin',
      why: 'The problem asks for a chance, not a count of results. {o:multprin} would be the name if it asked how many different results there are, and it also multiplies separate things, which is why the two look alike.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'first delivery: 1 − 0.3 = 0.7; second delivery: 1 − 0.2 = 0.8; third delivery: 1 − 0.1 = 0.9'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.7 × 0.8 × 0.9 = 0.504'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
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
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '50.4%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  }
]);
