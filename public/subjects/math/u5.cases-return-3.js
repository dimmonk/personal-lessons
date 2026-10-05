// Basic Math, Unit Five: fresh problems for later days (part 3 of 4): three for each kind of problem, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often
// taken for.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [
  {
    id: 'm5-rt-cm-2',
    use: 'return',
    tier: 'clean',
    setting: 'health',
    topic: 'injections that may cause a rash',
    kind: 'problem',
    outcome: 'complement',
    text: 'A nurse gives a patient 3 separate injections. Each one has a 2% chance of causing a rash, and the injections do not change one another’s chance. How likely is it that at least one injection causes a rash?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: {
      M1: ['How likely is it that at least one injection causes a rash?'],
      C1: [
        'Each one has a 2% chance of causing a rash, and the injections do not change one another’s chance. How likely is it that at least one injection causes a rash?'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give the chance of each of 3 separate injections causing a rash and ask how likely it is that at least one does, so the answer is {a:C1.atleast}.'
    },
    not: {
      outcome: 'multprin',
      why: 'The problem asks for a chance, not a count of results. {o:multprin} would be the name if it asked how many different results there are, and it also multiplies separate things, which is why the two look alike.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each injection: 1 − 0.02 = 0.98'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.98 × 0.98 × 0.98 = 0.941192'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.941192 = 0.058808, which is 5.9%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '5.9%' },
        {
          id: 's1',
          text: '6%',
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '94.1%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  },

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
  },

  {
    id: 'm5-rt-br-1',
    use: 'return',
    tier: 'clean',
    setting: 'health',
    topic: 'a blood test for a rare condition',
    kind: 'problem',
    outcome: 'baserate',
    text: '1 adult in 200 has a rare blood condition. A blood test is positive for 96% of the adults who have it, and also for 3% of the adults who do not. An adult’s test is positive. How likely is it that the adult has the condition?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: {
      M1: ['How likely is it that the adult has the condition?'],
      C1: [
        'A blood test is positive for 96% of the adults who have it, and also for 3% of the adults who do not'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that a result is right, a chance and not a count. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give a test that has come back positive, how rare the condition is, and how often the test is right and wrong, and ask how likely it is that the result is right, so the answer is {a:C1.test}.'
    },
    not: {
      outcome: 'complement',
      why: 'The problem is not about at least one of several separate things happening, which is {o:complement}. A test has given one result, and the question is how far to trust it.'
    },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 20,000 adults. 1 in 200 have it: 100 have it and 19,900 do not'
      },
      { does: 'Count the positive results among those who have it', working: '96% of 100 = 96' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '3% of 19,900 = 597'
      },
      { does: 'Add the two counts to get every positive result', working: '96 + 597 = 693' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '96 ÷ 693 = 0.1385, which is about 13.9%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '13.9%' },
        {
          id: 's1',
          text: '96%',
          slip: 'you take the share of people who have it that the test catches, 96%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '0.5%',
          slip: 'you divide the right positive results by the whole group, 96 ÷ 20,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  },

  {
    id: 'm5-rt-br-2',
    use: 'return',
    tier: 'clean',
    setting: 'work',
    topic: 'an ultrasound check on welds',
    kind: 'problem',
    outcome: 'baserate',
    text: '1 weld in 20 on a pipeline has a crack. An ultrasound check flags 90% of the cracked welds, and also flags 5% of the welds that have no crack. A weld has been flagged. How likely is it that the weld has a crack?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: {
      M1: ['How likely is it that the weld has a crack?'],
      C1: [
        'An ultrasound check flags 90% of the cracked welds, and also flags 5% of the welds that have no crack'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that a result is right, a chance and not a count. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the answer to the first question {a:M1.chance}.',
      C1: 'The words {cue:C1} give a check that has flagged a weld, how common cracks are, and how often the check is right and wrong, and ask how likely it is that the flag is right, so the answer is {a:C1.test}.'
    },
    not: {
      outcome: 'complement',
      why: 'The problem is not about at least one of several separate things happening, which is {o:complement}. A test has given one result, and the question is how far to trust it.'
    },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 10,000 welds. 1 in 20 are cracked: 500 are cracked and 9,500 have no crack'
      },
      { does: 'Count the positive results among those who have it', working: '90% of 500 = 450' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '5% of 9,500 = 475'
      },
      { does: 'Add the two counts to get every positive result', working: '450 + 475 = 925' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '450 ÷ 925 = 0.4865, which is about 48.6%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '48.6%' },
        {
          id: 's1',
          text: '90%',
          slip: 'you take the share of people who have it that the test catches, 90%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '4.5%',
          slip: 'you divide the right positive results by the whole group, 450 ÷ 10,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  }
]);
