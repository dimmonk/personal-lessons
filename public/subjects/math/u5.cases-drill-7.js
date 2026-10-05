// Basic Math, Unit Five: the drill's problems (part 7 of 9): the last-step stage, the whole-problem stage, then the route stage.
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
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give the chance of red on each of 3 separate spins still to come and ask how likely it is that red comes up at least once; the 8 spins that are over do not change it, so the key’s answer is {a:C1.atleast}.'
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
  },

  {
    id: 'm5-dr-cm-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'building',
    topic: 'smoke sensors along a corridor',
    kind: 'problem',
    outcome: 'complement',
    text: 'A corridor has 3 separate smoke sensors. Each one picks up a real fire with a chance of 90%, and one picking it up does not change the chance for another. A fire starts in the corridor. How likely is it that at least one sensor picks it up?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: {
      M1: ['How likely is it that at least one sensor picks it up?'],
      C1: [
        'Each one picks up a real fire with a chance of 90%, and one picking it up does not change the chance for another. A fire starts in the corridor. How likely is it that at least one sensor picks it up?'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give the chance that each of 3 separate sensors picks up a fire and ask how likely it is that at least one does, so the key’s answer is {a:C1.atleast}.'
    },
    not: {
      outcome: 'baserate',
      why: 'Sensors that pick up something can look like a test, {o:baserate}. But no test has given a result that needs reading, and nothing here is rare: a fire has started, and the problem asks how likely it is that at least one of 3 separate sensors picks it up.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each sensor: 1 − 0.9 = 0.1'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.1 × 0.1 × 0.1 = 0.001'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.001 = 0.999, which is 99.9%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '99.9%' },
        {
          id: 's1',
          text: '270%',
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '0.1%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  },

  {
    id: 'm5-dl-br-1',
    use: 'drill',
    tier: 'clean',
    setting: 'health',
    topic: 'a skin test for an allergy',
    kind: 'problem',
    outcome: 'baserate',
    text: '1 child in 20 in a school has a particular allergy. A skin test shows it in 95% of the children who have it, and wrongly shows it in 10% of the children who do not. A child’s test shows the allergy. How likely is it that the child has the allergy?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: {
      M1: ['How likely is it that the child has the allergy?'],
      C1: [
        'A skin test shows it in 95% of the children who have it, and wrongly shows it in 10% of the children who do not'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that a result is right, a chance and not a count. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} give a test that has shown a result, how common the thing is, and how often the test is right and wrong, and ask how likely it is that the result is right, so the key’s answer is {a:C1.test}.'
    },
    not: {
      outcome: 'complement',
      why: 'The problem is not about at least one of several separate things happening, which is {o:complement}. A test has given one result, and the question is how far to trust it.'
    },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 10,000 children. 1 in 20 have it: 500 have it and 9,500 do not'
      },
      { does: 'Count the positive results among those who have it', working: '95% of 500 = 475' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '10% of 9,500 = 950'
      },
      { does: 'Add the two counts to get every positive result', working: '475 + 950 = 1,425' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '475 ÷ 1,425 = 0.3333, which is about 33.3%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '33.3%' },
        {
          id: 's1',
          text: '95%',
          slip: 'you take the share of people who have it that the test catches, 95%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '4.8%',
          slip: 'you divide the right positive results by the whole group, 475 ÷ 10,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  },

  {
    id: 'm5-dl-br-2',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'a scan for harmful files',
    kind: 'problem',
    outcome: 'baserate',
    text: '1 file in 100 on a company network holds harmful code. A scan flags 95% of the harmful files, and also flags 2% of the harmless ones. A file has been flagged. How likely is it that the file holds harmful code?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: {
      M1: ['How likely is it that the file holds harmful code?'],
      C1: [
        'A scan flags 95% of the harmful files, and also flags 2% of the harmless ones',
        'A file has been flagged'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that a result is right, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give a scan that has flagged a file, how common harmful files are, and how often the scan is right and wrong, and ask how likely it is that the flag is right, so the key’s answer is {a:C1.test}.'
    },
    not: {
      outcome: 'complement',
      why: 'The problem is not about at least one of several separate things happening, which is {o:complement}. A test has given one result, and the question is how far to trust it.'
    },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 10,000 files. 1 in 100 are harmful: 100 are harmful and 9,900 are harmless'
      },
      { does: 'Count the positive results among those who have it', working: '95% of 100 = 95' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '2% of 9,900 = 198'
      },
      { does: 'Add the two counts to get every positive result', working: '95 + 198 = 293' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '95 ÷ 293 = 0.3242, which is about 32.4%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '32.4%' },
        {
          id: 's1',
          text: '95%',
          slip: 'you take the share of people who have it that the test catches, 95%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '1%',
          slip: 'you divide the right positive results by the whole group, 95 ÷ 10,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  }
]);
