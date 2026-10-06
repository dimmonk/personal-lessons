// Basic Math, Unit Four: the worked examples (part 1): one for the first kind of problem and one for the second.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u4', [

  {
    id: 'solved-lin-2',
    kind: 'solved',
    outcome: 'lin',
    h: 'Worked: a drip bag emptying to 250 ml',
    link: 'Here is the procedure for the first kind with real numbers, run backwards: the target is given, and the time is what is missing. The amount goes down here instead of up.',
    problem: 'm4-s-lin-2',
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 1,000 ml. Each hour it goes down by 125 ml',
        why: 'Two numbers drive the working: where the amount starts, 1,000 ml, and how much it changes each hour, 125 ml, down because the bag empties. The problem gives a target, 250 ml, instead of a time, so what is missing is how many hours the change must happen.'
      },
      {
        does: 'Find how much it must change in all to reach the target',
        working: '1,000 − 250 = 750 ml to be taken away',
        why: 'The target, 250 ml, is below the start, 1,000 ml, because the amount goes down. So the amount has to change by 1,000 − 250 = 750 ml in all.'
      },
      {
        does: 'Divide that by how much it changes each time',
        working: '750 ml ÷ 125 ml = 6 hours'
      }
    ],
    result: 'After 6 hours the drip bag holds 250 ml. Going forwards from the start confirms it: 1,000 − 125 × 6 = 250.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'The change in all is 125 multiplied by the number of hours, so the number of hours is the change in all divided by 125.'
          },
          {
            id: 'y',
            text: '750 ÷ 125 = 6.',
            note: 'That is true, and it is the working of this step, but it does not say why the working is a division.'
          },
          {
            id: 'z',
            text: 'The bag starts at 1,000 ml.',
            note: 'That is true, but it is where the working began, and it does not say why the change in all is divided by 125.'
          }
        ]
      },
      reason: [
        'The change in all is the change each time multiplied by how many times. Here the change in all is known, 750 ml, and the number of hours is not: 125 × (the number of hours) = 750. Undoing a multiplication is a division, so 750 ÷ 125 = 6.',
        'You can check by going forwards. Six hours take away 6 × 125 = 750 ml, and 1,000 − 750 = 250 ml, which is the target. Going forwards and going backwards are one fact read two ways.'
      ]
    }
  },

  {
    id: 'solved-expg-1',
    kind: 'solved',
    outcome: 'expg',
    h: 'Worked: orders at a bakery after 4 weeks',
    link: 'Here is the procedure for the second kind with real numbers: a bakery whose orders grow by 20% every week, and every step written out.',
    problem: 'm4-s-expg-1',
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 20% each week: 100% + 20% = 120%, which is 1.2',
        why: 'Going up by 20% leaves the orders at 120% of what they were, and 120% written as a decimal is 1.2. So every week the orders are multiplied by 1.2, and the {t:multiplier} is the same every week.'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Week 1: 250 × 1.2 = 300; Week 2: 300 × 1.2 = 360; Week 3: 360 × 1.2 = 432; Week 4: 432 × 1.2 = 518.4'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '518.4 rounds to 518 orders, which is the answer after 4 weeks',
        why: 'Orders come in whole numbers, so the answer is rounded to a whole number. Rounding is done only now, at the end: rounding every week would shift the later weeks a little.'
      }
    ],
    result: 'After 4 weeks the bakery takes about 518 orders a week. Adding 50 every week, as if the rise stayed the same size, would have given 450, which is 68 too few.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'Each week’s 20% is taken on the orders of that week, which are more than last week’s, so the result of each week is multiplied again, and the start is not.'
          },
          {
            id: 'y',
            text: '250 × 1.2 = 300 is the first line.',
            note: 'That is true, and it is the first line of the working, but it does not say why the next line starts from 300 and not from 250.'
          },
          {
            id: 'z',
            text: 'There are 4 lines, one for each week.',
            note: 'That is true, and it says how many multiplications there are, but not why each one is made on the result of the one before.'
          }
        ]
      },
      reason: [
        'A 20% rise is 20% of the orders that week. In week 1 that is 20% of 250, which is 50, so the orders are 300. In week 2 it is 20% of 300, which is 60, so the orders are 360. The rise grew from 50 to 60 because the 20% was taken on a bigger number. Multiplying 300 by 1.2 takes that 20% of 300 and adds it, in one go.',
        'Multiplying 250 by 1.2 every week would forget that week 2’s rise is taken on 300 and not on 250. Adding the first rise of 50 four times, 250 + 4 × 50 = 450, makes the same mistake from the other side, and it comes out 68 too low.'
      ]
    }
  }
]);
