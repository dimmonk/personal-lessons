// Basic Math, Unit Four: the worked examples (part 1). Two for each kind of problem, in different areas of life.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u4', [

  {
    id: 'solved-lin-1',
    kind: 'solved',
    outcome: 'lin',
    h: 'Worked: bricks on a scaffold after 5 hours',
    link: 'Here is the procedure for the first kind of problem with real numbers: a builder’s scaffold, and every step written out. This one asks for the amount at the end of a time.',
    problem: 'm4-s-lin-1',
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 200 bricks. Each hour it goes up by 60 bricks',
        why: 'Two numbers drive the working: where the amount starts, 200 bricks, and how much it changes each hour, 60 bricks. The change is the same 60 every hour, whether the scaffold holds 200 bricks or 2,000, and that is what makes this kind quick to work out.'
      },
      { does: 'Find how much it changes in all', working: '60 bricks × 5 hours = 300 bricks' },
      {
        does: 'Add that to the start',
        working: '200 + 300 = 500 bricks',
        why: 'The change in all is added to the start because the amount goes up. If the amount went down, it would be taken away from the start instead. 200 bricks and 300 more make 500 bricks.'
      }
    ],
    result: 'After 5 hours the scaffold holds 500 bricks: the 200 it started with and 300 lifted up by the hoist.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'Because the same 60 is added every hour, 5 hours add 5 lots of 60, so one multiplication gives the whole change without going through the hours one by one.'
          },
          {
            id: 'y',
            text: 'The scaffold starts the day with 200 bricks.',
            note: 'That is true, and it is the first step’s result, but it does not say why 60 is multiplied by 5.'
          },
          {
            id: 'z',
            text: '60 × 5 = 300.',
            note: 'That is true, and it is the working of this step, but it does not say why the working is a multiplication.'
          }
        ]
      },
      reason: [
        'Hour by hour, the scaffold holds 260 bricks, then 320, then 380, 440 and 500. Each hour adds the same 60, so after 5 hours, 5 lots of 60 have been added. Adding the same number 5 times is multiplying: 60 × 5 = 300. The multiplication is a short way to write down all five hours at once.',
        'It is only possible because the change is the same size every time. If each hour added a different number of bricks, there would be no single number to multiply, and you would have to go hour by hour. That is the idea behind the whole kind: the same change, so one multiplication for the lot.'
      ]
    }
  },

  {
    id: 'solved-lin-2',
    kind: 'solved',
    outcome: 'lin',
    h: 'Worked again: a drip bag emptying to 250 ml',
    link: 'The same procedure in a different story, this time run backwards: the target is given, and the time is what is missing. The amount also goes down here instead of up.',
    problem: 'm4-s-lin-2',
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 1,000 ml. Each hour it goes down by 125 ml',
        why: 'The same two numbers as in the problem before: where the amount starts, 1,000 ml, and how much it changes each hour, 125 ml. This time the change goes down, because the bag empties. And the problem gives a target, 250 ml, instead of a time, so what is missing is how many hours the change must happen.'
      },
      {
        does: 'Find how much it must change in all to reach the target',
        working: '1,000 − 250 = 750 ml to be taken away',
        why: 'The target, 250 ml, is below the start, 1,000 ml, because the amount goes down. So the amount has to change by 1,000 − 250 = 750 ml in all. In the problem before, the change in all was worked out from the time. Here it is worked out from the target.'
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
        'In the problem before, the change in all was 60 × 5: the change each time, multiplied by how many times. Here that multiplication is the other way round. The change in all is known, 750 ml, and the number of hours is not: 125 × (the number of hours) = 750. Undoing a multiplication is a division, so 750 ÷ 125 = 6.',
        'You can check by going forwards, as in the problem before. Six hours take away 6 × 125 = 750 ml, and 1,000 − 750 = 250 ml, which is the target. Going forwards and going backwards are one fact read two ways, which is why one procedure answers both questions.'
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
        why: 'Going up by 20% leaves the orders at 120% of what they were, and 120% written as a decimal is 1.2. So every week the orders are multiplied by 1.2. The {t:multiplier} is the same every week, which is why this kind has one number to find and then uses it again and again.'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Week 1: 250 × 1.2 = 300; Week 2: 300 × 1.2 = 360; Week 3: 360 × 1.2 = 432; Week 4: 432 × 1.2 = 518.4'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '518.4 rounds to 518 orders, which is the answer after 4 weeks',
        why: 'Orders come in whole numbers, so the answer is rounded to a whole number. Rounding is done only now, at the end: rounding every week would shift the later weeks a little. The exact working gave 518.4, so about 518 orders.'
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
        'If you multiplied 250 by 1.2 every week, you would get 300 every week, and you would have forgotten that week 2’s rise is taken on 300 and not on 250. Adding the first rise of 50 four times, 250 + 4 × 50 = 450, makes the same mistake from the other side, and it comes out 68 too low. The orders are multiplied by 1.2 once for each of the 4 weeks, and each time the number being multiplied is the one the week before produced.'
      ]
    }
  },

  {
    id: 'solved-expg-2',
    kind: 'solved',
    outcome: 'expg',
    h: 'Worked again: a van losing value over 3 years',
    link: 'The same procedure in a different story, with a change that makes the amount smaller instead of bigger: a van that loses 15% of its value every year.',
    problem: 'm4-s-expg-2',
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Down 15% each year: 100% − 15% = 85%, which is 0.85'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Year 1: $30,000 × 0.85 = $25,500; Year 2: $25,500 × 0.85 = $21,675; Year 3: $21,675 × 0.85 = $18,423.75',
        why: 'This step is the same as for an amount that goes up, for the same reason: each year’s result is multiplied again, and the start is not. The only difference is that the {t:multiplier} is below 1, so each result is smaller than the one before.'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '$18,423.75 rounds to $18,424, which is the answer after 3 years',
        why: 'A price is rounded only now, at the end, to a sensible size. The exact working gave $18,423.75, which rounds to $18,424.'
      }
    ],
    result: 'After 3 years the van is worth about $18,424. It lost $4,500 in the first year but only about $3,251 in the third, because each year’s loss is 15% of a smaller value. Taking $4,500 off three times, as if the loss stayed the same size, would have left $16,500, which is $1,924 too low.',
    hold: {
      step: 0,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'Falling by 15% leaves 85% of the value, so the value is multiplied by 0.85, a number below 1, and each multiplication makes it smaller.'
          },
          {
            id: 'y',
            text: '15% of $30,000 is $4,500.',
            note: 'That is true, and it is what the van loses in the first year, but it does not say what the value is multiplied by.'
          },
          {
            id: 'z',
            text: '100% is the whole of the van’s value.',
            note: 'That is true, and the working starts from it, but it does not say why the 15% is taken away from it.'
          }
        ]
      },
      reason: [
        'The value after a year is what is left after the fall: the whole of the value, 100%, less the 15% that fell, is 85%. 85% of a value is 0.85 times the value. In the first year, $30,000 × 0.85 = $25,500, which is $4,500 less, and $4,500 is 15% of $30,000.',
        'The next year the fall is 15% of $25,500, which is $3,825, so it is less than $4,500. The falls get smaller because each is a share of a smaller value. Multiplying by a number below 1 is how a share of the amount is taken away, and it works in the same way for every year.'
      ]
    }
  }
]);
