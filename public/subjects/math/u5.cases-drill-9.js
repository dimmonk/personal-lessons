// Basic Math, Unit Five: the drill's problems (part 9 of 9), asked as a whole route.
// Every problem has a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

  {
    id: 'm5-dr-br-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'health',
    topic: 'a screening called 99% accurate',
    kind: 'problem',
    outcome: 'baserate',
    text: 'A screening test for an illness is described as 99% accurate: it finds the illness in 99 of every 100 people who have it, and wrongly flags 1 of every 100 who do not. The illness affects 1 person in 1,000. A person’s test comes back positive. How likely is it that the person has the illness?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: {
      M1: ['How likely is it that the person has the illness?'],
      C1: ['described as 99% accurate', 'The illness affects 1 person in 1,000']
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that the person has the illness, so you are finding a chance, not a count.',
      C1: 'The words {cue:C1} say how accurate the test is and how rare the illness is, so the question is how far to trust a positive result.'
    },
    not: {
      outcome: 'complement',
      why: 'Two chances, 99% and 1%, can look like separate things to combine. But nothing asks for at least one of several things: one test has given one result, and the question is whether to trust it.'
    },
    steps: [
      {
        does: 'Imagine a big group and split it into people who have it and people who do not',
        working: 'Imagine 100,000 people. 1 in 1,000 have it: 100 have it and 99,900 do not'
      },
      { does: 'Count the positive results among those who have it', working: '99% of 100 = 99' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '1% of 99,900 = 999'
      },
      { does: 'Add the two counts to get every positive result', working: '99 + 999 = 1,098' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '99 ÷ 1,098 = 0.0902, which is about 9%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '9%' },
        {
          id: 's1',
          text: '99%',
          slip: 'you take the share of sick people the test catches, 99%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '0.1%',
          slip: 'you divide the right positive results by the whole group, 99 ÷ 100,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two groups: people who have the thing and are rightly flagged, and people who do not and are wrongly flagged. The chance that a positive result is right is the share of all positive results that come from the first group. When the thing is rare, the second group starts from nearly everyone, so even a small error rate gives many wrong positives.'
  }
]);
