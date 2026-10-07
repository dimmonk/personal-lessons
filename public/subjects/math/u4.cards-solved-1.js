// Basic Math, Unit Four: the worked examples (part 1): one for Linear growth and one for Exponential growth.
// Every step says what to do, with its working and a short reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u4', [

  {
    id: 'solved-lin-2',
    kind: 'solved',
    outcome: 'lin',
    h: 'Worked: a drip bag emptying to 250 ml',
    link: 'Here are the steps for {o:lin} with real numbers, worked backward: the target is given, and the time is what is missing. The amount goes down instead of up.',
    problem: 'm4-s-lin-2',
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 1,000 ml. Each hour it goes down by 125 ml',
        why: 'The bag starts at 1,000 ml and loses 125 ml every hour. The problem gives a target, 250 ml, instead of a time, so the number of hours is what is missing.'
      },
      {
        does: 'Find how much it must change in all to reach the target',
        working: '1,000 − 250 = 750 ml to be taken away',
        why: 'The bag has to go from 1,000 ml down to 250 ml, so 750 ml must go.'
      },
      {
        does: 'Divide that by how much it changes each time',
        working: '750 ml ÷ 125 ml = 6 hours'
      }
    ],
    result: 'After 6 hours the drip bag holds 250 ml. Check by going forward: 1,000 − 125 × 6 = 250.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'The hours times 125 make the total change, so the hours are the total divided by 125.'
          },
          {
            id: 'y',
            text: '750 ÷ 125 equals 6, and 6 hours is the answer.',
            note: 'That is true, but it is the result of the step, not the reason for dividing.'
          },
          {
            id: 'z',
            text: 'The bag starts at 1,000 ml, and 250 ml is the target.',
            note: 'That is true, but it is where the working began, not why you divide by 125.'
          }
        ]
      },
      reason: [
        'Each hour takes away 125 ml, so the total taken away is 125 × the number of hours. You know the total, 750 ml, and not the hours: 125 × hours = 750. A multiplication is undone by a division, so 750 ÷ 125 = 6.',
        'Check by going forward: 6 hours take away 6 × 125 = 750 ml, and 1,000 − 750 = 250 ml, which is the target.'
      ]
    }
  },

  {
    id: 'solved-expg-1',
    kind: 'solved',
    outcome: 'expg',
    h: 'Worked: orders at a bakery after 4 weeks',
    link: 'Here are the steps for {o:expg} with real numbers: a bakery whose orders grow 20% every week, with every step written out.',
    problem: 'm4-s-expg-1',
    steps: [
      {
        does: 'Turn the change into the number you multiply by each time',
        working: 'Up 20% each week: 100% + 20% = 120%, which is 1.2',
        why: 'Up 20% leaves the orders at 120% of what they were, which is 1.2 as a decimal. So every week the orders are multiplied by 1.2, and that is the {t:multiplier}.'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Week 1: 250 × 1.2 = 300; Week 2: 300 × 1.2 = 360; Week 3: 360 × 1.2 = 432; Week 4: 432 × 1.2 = 518.4'
      },
      {
        does: 'Round at the end, and give the answer',
        working: '518.4 rounds to 518 orders, which is the answer after 4 weeks',
        why: 'Orders are whole numbers, so round to 518. Round only now: rounding every week would knock the later weeks a little off.'
      }
    ],
    result: 'After 4 weeks the bakery takes about 518 orders a week. Adding 50 every week instead would give 450, which is 68 too few.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'Each week’s 20% is taken on that week’s orders, so you multiply the latest result, not the start.'
          },
          {
            id: 'y',
            text: '250 × 1.2 = 300 is the first line.',
            note: 'That is true, but it does not say why the next line starts from 300 and not from 250.'
          },
          {
            id: 'z',
            text: 'There are 4 lines, one for each week.',
            note: 'That is true, but it does not say why each line uses the line before.'
          }
        ]
      },
      reason: [
        'A 20% rise is 20% of that week’s orders. In week 1 that is 20% of 250, which is 50, so orders reach 300. In week 2 it is 20% of 300, which is 60, so they reach 360. The rise grew from 50 to 60 because the 20% was taken on a bigger number. Multiplying by 1.2 takes that 20% and adds it in one go.',
        'Multiplying 250 by 1.2 every week would forget that week 2’s rise is on 300. Adding 50 four times, 250 + 4 × 50 = 450, makes the mistake from the other side, and comes out 68 too low.'
      ]
    }
  }
]);
