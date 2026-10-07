// Basic Math, Unit Four: one fresh problem for each kind, for later days. A kind that is due comes back as a problem the learner has not seen.
// The working and the wrong choices were computed from each problem’s own numbers: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-rt-lin-1',
    use: 'return',
    tier: 'clean',
    setting: 'work',
    topic: 'cans at a food bank',
    kind: 'problem',
    outcome: 'lin',
    text: 'A food bank holds 120 cans, and a delivery brings 45 more cans every week. How many cans will it hold after 8 weeks?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['a delivery brings 45 more cans every week'],
      G1: ['a delivery brings 45 more cans every week'],
      G2: ['How many cans will it hold after 8 weeks?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount going up by the same number every week, whatever it has reached so far.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it. Either way the steps are the same: forward for the amount, backward for the time.'
    },
    not: {
      outcome: 'expg',
      why: 'The change is the same figure every time, not a share of the amount. {o:expg} would be the name if each change were a percentage of what the amount is now, or a doubling.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 120 cans. Each week it goes up by 45 cans'
      },
      { does: 'Find how much it changes in all', working: '45 cans × 8 weeks = 360 cans' },
      { does: 'Add that to the start', working: '120 + 360 = 480 cans' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '480 cans' },
        {
          id: 's1',
          text: '165 cans',
          slip: 'you change the amount only once, instead of once for each week.'
        },
        {
          id: 's2',
          text: '1,320 cans',
          slip: 'you add the change to the start first and then multiply by the number of weeks, so the start is counted again every week.'
        }
      ]
    },
    why: 'The same number is added every time, so the total change is that number times how many times. Going forward, add it to the start. Going backward, take the start off the target and divide by the change each time.'
  },

  {
    id: 'm4-rt-expg-1',
    use: 'return',
    tier: 'clean',
    setting: 'travel',
    topic: 'riders on a ferry line',
    kind: 'problem',
    outcome: 'expg',
    text: 'A new ferry line carries 1,000 passengers in its first week, and the number grows by 10% every week. How many passengers will it carry in a week, after 3 more weeks?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['the number grows by 10% every week'],
      G1: ['the number grows by 10% every week'],
      G2: ['How many passengers will it carry in a week, after 3 more weeks?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every week.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The percentage comes again every time. {o:oneoff} would be the name if it were applied once and then stopped.'
    },
    steps: [
      {
        does: 'Turn the change into the number you multiply by each time',
        working: 'Up 10% each week: 100% + 10% = 110%, which is 1.1'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Week 1: 1,000 × 1.1 = 1,100; Week 2: 1,100 × 1.1 = 1,210; Week 3: 1,210 × 1.1 = 1,331'
      },
      {
        does: 'Round at the end, and give the answer',
        working: '1,331 needs no rounding, so the answer after 3 weeks is 1,331 passengers'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '1,331 passengers' },
        {
          id: 's1',
          text: '1,300 passengers',
          slip: 'you add the first rise again each time, so every rise is the same size instead of growing.'
        },
        {
          id: 's2',
          text: '1,210 passengers',
          slip: 'you stop one multiplication short.'
        }
      ]
    },
    why: 'Each change is a percentage of what the amount is now, so you multiply by the {t:multiplier} once for each time, each time on the result of the last. That is why the changes get bigger as the amount grows. Round only at the end.'
  },

  {
    id: 'm4-rt-logsolve-1',
    use: 'return',
    tier: 'clean',
    setting: 'work',
    topic: 'customers of a start-up',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A start-up has 300 customers, and the number of customers grows by 15% every month. After how many months will it have 600 customers?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['the number of customers grows by 15% every month'],
      G1: ['the number of customers grows by 15% every month'],
      G2: ['After how many months will it have 600 customers?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every month.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The amount keeps changing, so it can reach a target. {o:oneoff} would be the name if it changed once and then stayed put.'
    },
    steps: [
      {
        does: 'Turn the change into the number you multiply by each time',
        working: 'Up 15% each month: 100% + 15% = 115%, which is 1.15'
      },
      {
        does: 'Divide the target by the start, to see how many times bigger it must get',
        working: '600 ÷ 300 = 2'
      },
      {
        does: 'Use the log button: divide the log of that number by the log of the number you multiply by',
        working: 'log 2 = 0.3010 and log 1.15 = 0.0607, so 0.3010 ÷ 0.0607 = 4.96'
      },
      {
        does: 'Check it with whole numbers of times, then round',
        working: 'Starting from 300, 4 multiplications by 1.15 give about 525 customers, still under the target; 5 multiplications give about 603 customers, over it. So the target is reached during the 5th month. Rounded, the answer is about 5.0 months'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 5.0 months' },
        {
          id: 's1',
          text: 'About 6.7 months',
          slip: 'you add the same amount each time, so every rise is the same size, when each rise should be bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 2 months',
          slip: 'you give how many times bigger the target is as the number of months.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so you need to find how many times. A log turns repeated multiplying into adding, so that number is the log of how many times bigger the target is, divided by the log of the {t:multiplier}. Then check it with whole numbers of times.'
  },

  {
    id: 'm4-rt-oneoff-1',
    use: 'return',
    tier: 'clean',
    setting: 'leisure',
    topic: 'entry to a swimming pool',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'The entry to a swimming pool was $5. After a refit it was set at $6.50, and it has stayed at $6.50. What will the entry cost after 3 years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has stayed at $6.50'],
      G1: ['After a refit it was set at $6.50', 'it has stayed at $6.50'],
      G2: ['What will the entry cost after 3 years?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show one change that then stayed put, so nothing repeats.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it. Either way the steps are the same.'
    },
    not: {
      outcome: 'lin',
      why: 'The change happened once and the amount has stayed since, so nothing is added again. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: $5.00. After: $6.50'
      },
      {
        does: 'Say how big the change was',
        working: '$6.50 − $5.00 = $1.50, and $1.50 ÷ $5.00 = 0.3, which is 30% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at $6.50 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the new amount forward as it is',
        working: 'In 3 years: $6.50'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$6.50' },
        {
          id: 's1',
          text: '$11.00',
          slip: 'you carry the change forward as if it came again every year.'
        },
        {
          id: 's2',
          text: '$14.28',
          slip: 'you carry the percentage forward as if it came again every year.'
        }
      ]
    },
    why: 'A change that happened once, and is not said to come again, gives nothing to carry forward. The amount after it is the amount at any later time, so a target it is not already at is never reached. The size of the change describes that one change only.'
  }
]);
