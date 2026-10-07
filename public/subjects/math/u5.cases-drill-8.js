// Basic Math, Unit Five: the drill's problems (part 8 of 9), asked as a whole route.
// Every problem has a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

  {
    id: 'm5-dr-br-1',
    use: 'drill',
    tier: 'clean',
    setting: 'building',
    topic: 'a damp detector in houses',
    kind: 'problem',
    outcome: 'baserate',
    text: '1 house in 25 in a town has damp in its walls. A damp detector shows damp in 90% of the houses that have it, and wrongly shows damp in 6% of the houses that do not. The detector shows damp in a house. How likely is it that the house has damp?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: {
      M1: ['How likely is it that the house has damp?'],
      C1: [
        'A damp detector shows damp in 90% of the houses that have it, and wrongly shows damp in 6% of the houses that do not'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that the house has damp, so you are finding a chance, not a count.',
      C1: 'The words {cue:C1} give a detector that has already shown a result, and how often it is right and wrong, so the question is how far to trust it.'
    },
    not: {
      outcome: 'complement',
      why: 'This is not about at least one of several separate things happening. A test has given one result, and the question is how far to trust it.'
    },
    steps: [
      {
        does: 'Imagine a big group and split it into people who have it and people who do not',
        working: 'Imagine 10,000 houses. 1 in 25 have damp: 400 have damp and 9,600 do not'
      },
      { does: 'Count the positive results among those who have it', working: '90% of 400 = 360' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '6% of 9,600 = 576'
      },
      { does: 'Add the two counts to get every positive result', working: '360 + 576 = 936' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '360 ÷ 936 = 0.3846, which is about 38.5%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '38.5%' },
        {
          id: 's1',
          text: '90%',
          slip: 'you take the share of sick people the test catches, 90%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '3.6%',
          slip: 'you divide the right positive results by the whole group, 360 ÷ 10,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two groups: people who have the thing and are rightly flagged, and people who do not and are wrongly flagged. The chance that a positive result is right is the share of all positive results that come from the first group. When the thing is rare, the second group starts from nearly everyone, so even a small error rate gives many wrong positives.'
  }
]);
