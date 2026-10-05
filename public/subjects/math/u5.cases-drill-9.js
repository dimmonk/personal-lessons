// Basic Math, Unit Five: the drill's problems (part 9 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
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
      M1: 'The words {cue:M1} ask how likely it is that a result is right, a chance and not a count. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} give a test that has come back positive, call it 99% accurate, and say the illness affects 1 person in 1,000, and ask how likely it is that the result is right, so the key’s answer is {a:C1.test}.'
    },
    not: {
      outcome: 'complement',
      why: 'Two chances of 99% and 1% can look like separate things to be combined, as in {o:complement}. But no list of separate things is asked about, and nothing is at least one of them: a test has given one result, the illness is rare, and the question is how far to trust the result.'
    },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
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
          slip: 'you take the share of people who have it that the test catches, 99%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '0.1%',
          slip: 'you divide the right positive results by the whole group, 99 ÷ 100,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  },

  {
    id: 'm5-dr-br-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'home',
    topic: 'a mail filter that marks spam',
    kind: 'problem',
    outcome: 'baserate',
    text: '1 email in 50 that reaches a mailbox is junk. A mail filter marks 96% of the junk emails, and also marks 2% of the emails that are not junk. An email has been marked. How likely is it that the email is junk?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: {
      M1: ['How likely is it that the email is junk?'],
      C1: [
        'A mail filter marks 96% of the junk emails, and also marks 2% of the emails that are not junk',
        'An email has been marked'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that a result is right, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give a filter that has marked an email, how common junk is, and how often the filter is right and wrong, and ask how likely it is that the mark is right, so the key’s answer is {a:C1.test}.'
    },
    not: {
      outcome: 'complement',
      why: 'The problem is not about at least one of several separate things happening, which is {o:complement}. A test has given one result, and the question is how far to trust it.'
    },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 10,000 emails. 1 in 50 are junk: 200 are junk and 9,800 are not'
      },
      { does: 'Count the positive results among those who have it', working: '96% of 200 = 192' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '2% of 9,800 = 196'
      },
      { does: 'Add the two counts to get every positive result', working: '192 + 196 = 388' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '192 ÷ 388 = 0.4948, which is about 49.5%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '49.5%' },
        {
          id: 's1',
          text: '96%',
          slip: 'you take the share of people who have it that the test catches, 96%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '1.9%',
          slip: 'you divide the right positive results by the whole group, 192 ÷ 10,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  }
]);
