// Basic Math, Unit Five: the worked examples (part 2 of 3). One for each kind of problem.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u5', [

  {
    id: 'solved-complement-1',
    kind: 'solved',
    outcome: 'complement',
    h: 'Worked: a bus that is late at least once in a week',
    link: 'The steps for this kind of problem, worked out on a commuter’s bus.',
    problem: 'm5-s-cm-1',
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each day: 1 − 0.2 = 0.8',
        why: 'Each day the bus is late or it is not, so the two chances add up to 1. On time is 1 − 0.2 = 0.8, or 80 days in 100.'
      },
      {
        does: 'Multiply those chances to get the chance that none happens',
        working: '0.8 × 0.8 × 0.8 × 0.8 × 0.8 = 0.32768',
        why: 'The bus must be on time on day 1 and day 2 and day 3 and day 4 and day 5. The days are separate, so the chances multiply: about 33 weeks in 100.'
      },
      {
        does: 'Take that away from 1 to get the chance that at least one happens',
        working: '1 − 0.32768 = 0.67232, which is 67.2%'
      }
    ],
    result: 'The bus is late at least once in a working week about 67 times in 100: a chance of 67.2%.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A week has either no late day or at least one, so the two chances add up to 1.'
          },
          {
            id: 'y',
            text: 'The chance of a week with no late day is 0.32768.',
            note: 'True, but that is the opposite of what is asked. It does not say why taking it from 1 gives the answer.'
          },
          {
            id: 'z',
            text: 'The bus is late on 20% of days, so a late day has a chance of 0.2.',
            note: 'True, but that is the chance for one day, not for the whole week.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Imagine 100 weeks. In about 33 of them the bus is on time every day. Every other week has at least one late day, so about 100 − 33 = 67 weeks do.',
        'This way round saves work. To find at least one late day directly, you would add up exactly one late day, exactly two, three, four and five. The chance of none is one product, and the answer is what is left of 1.'
      ]
    }
  },

  {
    id: 'solved-baserate-1',
    kind: 'solved',
    outcome: 'baserate',
    h: 'Worked: how far to trust a positive test',
    link: 'The steps for this kind of problem, worked out on a quick test for an infection.',
    problem: 'm5-s-br-1',
    steps: [
      {
        does: 'Imagine a big group and split it into people who have it and people who do not',
        working: 'Imagine 10,000 people. 1 in 100 have it: 100 have it and 9,900 do not',
        why: 'Counting imagined people is easier than mixing chances. 10,000 is used so that 1 in 100, 90% and 5% all give whole numbers of people.'
      },
      {
        does: 'Count the positive results among those who have it',
        working: '90% of 100 = 90',
        why: 'The other 10 who have the infection test negative, because the test misses them.'
      },
      {
        does: 'Count the positive results among those who do not have it',
        working: '5% of 9,900 = 495'
      },
      {
        does: 'Add the two counts to get every positive result',
        working: '90 + 495 = 585',
        why: 'The person in the problem is one of these 585, and nothing else is known about them.'
      },
      {
        does: 'Divide the right positive results by every positive result',
        working: '90 ÷ 585 = 0.1538, which is about 15.4%',
        why: 'Only the 90 are right. The answer is nowhere near 90%, because that figure starts from people who have the infection, and this question starts from people with a positive result.'
      }
    ],
    result: 'A positive test means the person has the infection about 15 times in 100 (15.4%), even though the test finds the infection in 90% of the people who have it.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'People without the infection far outnumber people with it, so a 5% error rate still gives many wrong positives.'
          },
          {
            id: 'y',
            text: 'The sum is 5% of 9,900, which is 495.',
            note: 'True, but that is only the sum. It does not say why this step is needed.'
          },
          {
            id: 'z',
            text: 'The test finds the infection in 90% of the people who have it.',
            note: 'True, but that was the step before. It does not say why people without the infection must be counted.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'A positive result comes from two groups: people who have the infection, and people who do not but are wrongly flagged. The second group starts from 9,900 people, so even 5% of them is 495 positive results.',
        'This is the step people leave out. 5 in 100 sounds small, but there are 99 healthy people for every sick one. Count only the 90 and forget the 495, and the test looks far more trustworthy than it is.'
      ]
    }
  }
]);
