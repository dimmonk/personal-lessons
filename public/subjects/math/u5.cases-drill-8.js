// Basic Math, Unit Five: the drill's problems (part 8 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [
  {
    id: 'm5-dw-br-1',
    use: 'drill',
    tier: 'clean',
    setting: 'travel',
    topic: 'a sniffer dog at a border',
    kind: 'problem',
    outcome: 'baserate',
    text: '1 bag in 250 at a border post holds banned food. A sniffer dog sits beside 85% of the bags that hold it, and also beside 5% of the bags that do not. The dog sits beside a bag. How likely is it that the bag holds banned food?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: {
      M1: ['How likely is it that the bag holds banned food?'],
      C1: [
        'A sniffer dog sits beside 85% of the bags that hold it, and also beside 5% of the bags that do not'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that a result is right, a chance and not a count. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give a dog that has marked a bag, how common banned food is, and how often the dog is right and wrong, and ask how likely it is that the mark is right, so the answer is {a:C1.test}.'
    },
    not: {
      outcome: 'complement',
      why: 'The problem is not about at least one of several separate things happening, which is {o:complement}. A test has given one result, and the question is how far to trust it.'
    },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 10,000 bags. 1 in 250 hold it: 40 hold it and 9,960 do not'
      },
      { does: 'Count the positive results among those who have it', working: '85% of 40 = 34' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '5% of 9,960 = 498'
      },
      { does: 'Add the two counts to get every positive result', working: '34 + 498 = 532' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '34 ÷ 532 = 0.0639, which is about 6.4%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '6.4%' },
        {
          id: 's1',
          text: '85%',
          slip: 'you take the share of people who have it that the test catches, 85%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '0.3%',
          slip: 'you divide the right positive results by the whole group, 34 ÷ 10,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  },

  {
    id: 'm5-dw-br-2',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'an anti-theft gate that beeps',
    kind: 'problem',
    outcome: 'baserate',
    text: '1 customer in 200 leaves a shop with goods that were not paid for. The gate at the door beeps for 98% of those customers, and also for 1% of the others. The gate beeps for a customer. How likely is it that the customer has unpaid goods?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: {
      M1: ['How likely is it that the customer has unpaid goods?'],
      C1: ['The gate at the door beeps for 98% of those customers, and also for 1% of the others']
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that a result is right, a chance and not a count. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the answer to the first question {a:M1.chance}.',
      C1: 'The words {cue:C1} give an alarm that has beeped, how common unpaid goods are, and how often the alarm is right and wrong, and ask how likely it is that the beep is right, so the answer is {a:C1.test}.'
    },
    not: {
      outcome: 'complement',
      why: 'The problem is not about at least one of several separate things happening, which is {o:complement}. A test has given one result, and the question is how far to trust it.'
    },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 20,000 customers. 1 in 200 have unpaid goods: 100 have unpaid goods and 19,900 do not'
      },
      { does: 'Count the positive results among those who have it', working: '98% of 100 = 98' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '1% of 19,900 = 199'
      },
      { does: 'Add the two counts to get every positive result', working: '98 + 199 = 297' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '98 ÷ 297 = 0.33, which is about 33%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '33%' },
        {
          id: 's1',
          text: '98%',
          slip: 'you take the share of people who have it that the test catches, 98%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '0.5%',
          slip: 'you divide the right positive results by the whole group, 98 ÷ 20,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  },

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
      M1: 'The words {cue:M1} ask how likely it is that a result is right, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give a detector that has shown a result, how common damp is, and how often the detector is right and wrong, and ask how likely it is that the result is right, so the answer is {a:C1.test}.'
    },
    not: {
      outcome: 'complement',
      why: 'The problem is not about at least one of several separate things happening, which is {o:complement}. A test has given one result, and the question is how far to trust it.'
    },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
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
          slip: 'you take the share of people who have it that the test catches, 90%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '3.6%',
          slip: 'you divide the right positive results by the whole group, 360 ÷ 10,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  },

  {
    id: 'm5-dr-br-2',
    use: 'drill',
    tier: 'varied',
    setting: 'money',
    topic: 'a model that predicts missed repayments',
    kind: 'problem',
    outcome: 'baserate',
    text: 'A lender’s computer model flags loan applicants who may miss repayments. 1 applicant in 40 goes on to miss repayments. The model flags 80% of those applicants, and also flags 10% of the applicants who repay on time. An applicant has been flagged. How likely is it that the applicant will miss repayments?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: {
      M1: ['How likely is it that the applicant will miss repayments?'],
      C1: [
        'The model flags 80% of those applicants, and also flags 10% of the applicants who repay on time',
        'An applicant has been flagged'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that a result is right, a chance and not a count. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give a model that has flagged someone, how common missed repayments are, and how often the model is right and wrong, and ask how likely it is that the flag is right, so the answer is {a:C1.test}.'
    },
    not: {
      outcome: 'complement',
      why: 'The problem is not about at least one of several separate things happening, which is {o:complement}. A test has given one result, and the question is how far to trust it.'
    },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 40,000 applicants. 1 in 40 miss repayments: 1,000 miss repayments and 39,000 repay on time'
      },
      { does: 'Count the positive results among those who have it', working: '80% of 1,000 = 800' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '10% of 39,000 = 3,900'
      },
      { does: 'Add the two counts to get every positive result', working: '800 + 3,900 = 4,700' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '800 ÷ 4,700 = 0.1702, which is about 17%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '17%' },
        {
          id: 's1',
          text: '80%',
          slip: 'you take the share of people who have it that the test catches, 80%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '2%',
          slip: 'you divide the right positive results by the whole group, 800 ÷ 40,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  }
]);
