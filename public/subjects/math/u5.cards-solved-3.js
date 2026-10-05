// Basic Math, Unit Five: the worked examples (part 3 of 3). Two for each kind of problem, in different areas of life.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u5', [
  {
    id: 'solved-baserate-2',
    kind: 'solved',
    outcome: 'baserate',
    h: 'Worked again: how far to trust a bank alert',
    link: 'The same procedure in a different story, with a thing that is much rarer, to show how the share of right positive results shrinks as the thing gets rarer.',
    problem: 'm5-s-br-2',
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 100,000 payments. 1 in 500 are frauds: 200 are frauds and 99,800 are genuine',
        why: 'The same first step. 100,000 is chosen so that 1 in 500, 95% and 3% all give whole numbers: 100,000 ÷ 500 = 200 frauds, and 100,000 − 200 = 99,800 genuine payments.'
      },
      {
        does: 'Count the positive results among those who have it',
        working: '95% of 200 = 190',
        why: 'The alert goes up on 95% of the frauds, which is 190 of the 200. The other 10 frauds get no alert.'
      },
      {
        does: 'Count the positive results among those who do not have it',
        working: '3% of 99,800 = 2,994',
        why: 'The alert also goes up on 3% of the genuine payments. There are 99,800 of them, so 3% of them is 2,994 false alerts.'
      },
      {
        does: 'Add the two counts to get every positive result',
        working: '190 + 2,994 = 3,184',
        why: 'Every alert is either right or a false alarm, so the alerts are 190 + 2,994 = 3,184 in all.'
      },
      {
        does: 'Divide the right positive results by every positive result',
        working: '190 ÷ 3,184 = 0.0597, which is about 6%'
      }
    ],
    result: 'About 6 alerts in 100 are for a real fraud, so a flagged payment is a fraud with a chance of about 6%, though the alert goes up on 95% of the frauds.',
    hold: {
      step: 4,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The person asking sees only alerts, so the chance that an alert is right is the share of all the alerts that come from frauds: the right alerts out of every alert, and not out of every payment or out of every fraud.'
          },
          {
            id: 'y',
            text: '190 ÷ 3,184 = 0.0597.',
            note: 'That is true, and it is the working of the step, but it does not say why these two numbers are divided.'
          },
          {
            id: 'z',
            text: 'The alert goes up on 95% of the frauds.',
            note: 'That is true, but it is a share of the frauds, and the person asking starts from an alert, so it does not say what the answer is a share of.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The question starts from an alert that has gone up, so the group to look at is the alerts, 3,184 of them. Some are right and some are false alarms, and the answer is the right share: 190 of 3,184, which is about 6 in 100.',
        'Compare this with the 95% in the problem. That 95% is the share of frauds that get an alert: it is out of 200 frauds. The chance asked for is the share of alerts that are for a fraud, which is out of 3,184 alerts. They are shares of different groups, and when the thing is rare they can be far apart: here 95% against about 6%.'
      ]
    }
  }
]);
