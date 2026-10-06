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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount going up by the same number every week, whatever it has reached so far, so the answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure, run forwards for the amount and backwards for the time.'
    },
    not: {
      outcome: 'expg',
      why: 'The amount is raised or lowered by the same figure every time, and not by a share of what it has reached. {o:expg} would be the name if each change were a percentage of the amount so far, or a doubling.'
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
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every week, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The percentage comes again every time. {o:oneoff} would be the name if it were applied one time and then stopped.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 10% each week: 100% + 10% = 110%, which is 1.1'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Week 1: 1,000 × 1.1 = 1,100; Week 2: 1,100 × 1.1 = 1,210; Week 3: 1,210 × 1.1 = 1,331'
      },
      {
        does: 'Round at the end, and say what it shows',
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
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every month, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The amount keeps changing, so a target can be reached after some time. {o:oneoff} would be the name if the amount changed once and then stayed.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 15% each month: 100% + 15% = 115%, which is 1.15'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '600 ÷ 300 = 2'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 2 = 0.3010 and log 1.15 = 0.0607, so 0.3010 ÷ 0.0607 = 4.96'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
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
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 2 months',
          slip: 'you give how many times bigger the target is as the number of months.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount changing one time and staying where it reached, so no change repeats and the answer is {a:G1.once}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure.'
    },
    not: {
      outcome: 'lin',
      why: 'The change was made one time and the amount has stayed since, so nothing is added again. {o:lin} would be the name if the same number were added each time.'
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
        does: 'Carry the amount after the change forward as it is',
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
    why: 'A change that came one time, and is not said to come again, is not a pattern, so nothing is carried forward. The amount after the change is the amount at any later time, and a target that it is not already at is never reached unless a new change is made. The size of the change is a fact about the one change, and it is not carried forward.'
  }
]);
