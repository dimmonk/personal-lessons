// Basic Math, Unit Five: the drill's problems (part 7 of 9), asked as a whole route.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

  {
    id: 'm5-dr-cm-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'a quiz wheel that has not landed on red',
    kind: 'problem',
    outcome: 'complement',
    text: 'A quiz wheel has 4 equal slices, one of them red. The wheel has not landed on red in the last 8 spins. Each spin is separate from the others. How likely is it that it lands on red at least once in the next 3 spins?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: {
      M1: ['How likely is it that it lands on red at least once in the next 3 spins?'],
      C1: [
        'Each spin is separate from the others. How likely is it that it lands on red at least once in the next 3 spins?'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give the chance of red on each of 3 separate spins still to come and ask how likely it is that red comes up at least once; the 8 spins that are over do not change it, so the answer is {a:C1.atleast}.'
    },
    not: {
      outcome: 'multprin',
      why: 'Spins that are multiplied together can look like {o:multprin}, which also multiplies separate things. But the problem asks how likely something is, not how many different results there are, and it asks for at least one.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each spin: 1 − 0.25 = 0.75'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.75 × 0.75 × 0.75 = 0.421875'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.421875 = 0.578125, which is 57.8%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '57.8%' },
        {
          id: 's1',
          text: '95.8%',
          slip: 'you count the 8 spins that are over as well as the 3 still to come, as if red had to make up for them.'
        },
        {
          id: 's2',
          text: '42.2%',
          slip: 'you stop at the chance that none of the 3 spins is red and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  }
]);
