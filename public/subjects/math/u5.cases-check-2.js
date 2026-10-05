// Basic Math, Unit Five: the problems of the worked examples and the problems the learner finishes in a check (part 2 of 2).
// A worked example's problem carries only the problem; its working is on the card. A check's problem carries the whole working,
// so that the app can show it up to the last step, or not at all, and name the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [
  {
    id: 'm5-ck-cm-whole',
    use: 'check',
    tier: 'clean',
    setting: 'money',
    topic: 'card readers in a shop',
    kind: 'problem',
    outcome: 'complement',
    text: 'A shop has 4 card readers. Each reader fails on 5% of days, and the readers fail separately: one failing does not change the chance for another. How likely is it that at least one reader fails on a given day?',
    route: { M1: ['chance'], C1: ['atleast'] },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each reader: 1 − 0.05 = 0.95'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.95 × 0.95 × 0.95 × 0.95 = 0.81450625'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.81450625 = 0.18549375, which is 18.5%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '18.5%' },
        {
          id: 's1',
          text: '20%',
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '81.5%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  },

  {
    id: 'm5-s-br-1',
    use: 'teach',
    tier: 'clean',
    setting: 'health',
    topic: 'a quick test for an infection',
    kind: 'problem',
    outcome: 'baserate',
    text: 'In a town, 1 person in 100 has a particular infection. A quick test finds the infection in 90% of the people who have it, and wrongly shows it in 5% of the people who do not. A person’s test is positive. How likely is it that the person has the infection?'
  },

  {
    id: 'm5-s-br-2',
    use: 'teach',
    tier: 'clean',
    setting: 'money',
    topic: 'a bank alert on card payments',
    kind: 'problem',
    outcome: 'baserate',
    text: 'A bank watches card payments. 1 payment in 500 is a fraud. The bank’s alert goes up on 95% of the fraudulent payments, and also on 3% of the genuine ones. An alert has gone up on a payment. How likely is it that the payment is a fraud?'
  },

  {
    id: 'm5-ck-br-last',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'a camera check on bolts',
    kind: 'problem',
    outcome: 'baserate',
    text: 'A factory checks its bolts with a camera. 1 bolt in 50 is faulty. The camera flags 90% of the faulty bolts, and also flags 4% of the sound ones. A bolt has been flagged. How likely is it that the bolt is faulty?',
    route: { M1: ['chance'], C1: ['test'] },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 10,000 bolts. 1 in 50 are faulty: 200 are faulty and 9,800 are sound'
      },
      { does: 'Count the positive results among those who have it', working: '90% of 200 = 180' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '4% of 9,800 = 392'
      },
      { does: 'Add the two counts to get every positive result', working: '180 + 392 = 572' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '180 ÷ 572 = 0.3147, which is about 31.5%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '31.5%' },
        {
          id: 's1',
          text: '90%',
          slip: 'you take the share of people who have it that the test catches, 90%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '1.8%',
          slip: 'you divide the right positive results by the whole group, 180 ÷ 10,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  },

  {
    id: 'm5-ck-br-whole',
    use: 'check',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a urine test for athletes',
    kind: 'problem',
    outcome: 'baserate',
    text: 'A sports body tests its athletes for a banned drug. 1 athlete in 200 has taken it. The test is positive for 99% of the athletes who have taken it, and also for 2% of those who have not. An athlete’s test is positive. How likely is it that the athlete has taken the drug?',
    route: { M1: ['chance'], C1: ['test'] },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 20,000 athletes. 1 in 200 have taken it: 100 have taken it and 19,900 have not'
      },
      { does: 'Count the positive results among those who have it', working: '99% of 100 = 99' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '2% of 19,900 = 398'
      },
      { does: 'Add the two counts to get every positive result', working: '99 + 398 = 497' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '99 ÷ 497 = 0.1992, which is about 19.9%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '19.9%' },
        {
          id: 's1',
          text: '99%',
          slip: 'you take the share of people who have it that the test catches, 99%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '0.5%',
          slip: 'you divide the right positive results by the whole group, 99 ÷ 20,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  }
]);
