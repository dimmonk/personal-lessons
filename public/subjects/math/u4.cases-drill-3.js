// Basic Math, Unit Four: the drill’s problems (part 3), the misleading ones, whose story points the wrong way on purpose. The working and the wrong choices were computed from each problem’s own numbers: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-dr-lin-5',
    use: 'drill',
    tier: 'misleading',
    setting: 'work',
    topic: 'a friend’s shop sales',
    kind: 'problem',
    outcome: 'lin',
    text: 'A friend says his shop’s sales are growing exponentially. They were $12,000 in January, and they have gone up by $3,000 every month since. What will the sales be after 6 more months?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['they have gone up by $3,000 every month since'],
      G1: ['they have gone up by $3,000 every month since'],
      G2: ['What will the sales be after 6 more months?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount going up by the same number every month, whatever it has reached so far.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it. Either way the steps are the same: forward for the amount, backward for the time.'
    },
    not: {
      outcome: 'expg',
      why: 'The change is the same figure every time, not a share of the amount. {o:expg} would be the name if each change were a percentage of what the amount is now, or a doubling.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: $12,000. Each month it goes up by $3,000'
      },
      { does: 'Find how much it changes in all', working: '$3,000 × 6 months = $18,000' },
      { does: 'Add that to the start', working: '$12,000 + $18,000 = $30,000' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$30,000' },
        {
          id: 's1',
          text: '$15,000',
          slip: 'you change the amount only once, instead of once for each month.'
        },
        {
          id: 's2',
          text: '$90,000',
          slip: 'you add the change to the start first and then multiply by the number of months, so the start is counted again every month.'
        }
      ]
    },
    why: 'The same number is added every time, so the total change is that number times how many times. Going forward, add it to the start. Going backward, take the start off the target and divide by the change each time.'
  },

  {
    id: 'm4-dr-expg-5',
    use: 'drill',
    tier: 'misleading',
    setting: 'money',
    topic: 'rent rising year after year',
    kind: 'problem',
    outcome: 'expg',
    text: 'A landlord raises an apartment’s rent by 10% every year, three years in a row. It was $800 a month before the first rise. What will it be after the third rise?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['raises an apartment’s rent by 10% every year, three years in a row'],
      G1: ['raises an apartment’s rent by 10% every year, three years in a row'],
      G2: ['What will it be after the third rise?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it.'
    },
    not: {
      outcome: 'lin',
      why: 'The change is a share of what the amount is now, so it is not the same size each time. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Turn the change into the number you multiply by each time',
        working: 'Up 10% each year: 100% + 10% = 110%, which is 1.1'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Year 1: $800 × 1.1 = $880; Year 2: $880 × 1.1 = $968; Year 3: $968 × 1.1 = $1,064.80'
      },
      {
        does: 'Round at the end, and give the answer',
        working: '$1,064.80 needs no rounding, so the answer after 3 years is $1,064.80'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$1,064.80' },
        {
          id: 's1',
          text: '$1,040.00',
          slip: 'you add the three rises, 10% + 10% + 10% = 30%, and take 30% of the $800, instead of multiplying by 1.1 three times.'
        },
        {
          id: 's2',
          text: '$968.00',
          slip: 'you stop one multiplication short.'
        }
      ]
    },
    why: 'Each change is a percentage of what the amount is now, so you multiply by the {t:multiplier} once for each time, each time on the result of the last. That is why the changes get bigger as the amount grows. Round only at the end.'
  },

  {
    id: 'm4-dr-logsolve-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'money',
    topic: 'a friend’s doubling claim',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A friend says that money earning 10% a year doubles in 10 years. Dana leaves $2,000 in an account that pays 10% a year, with all the interest left in. After how many years will she have $4,000?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['an account that pays 10% a year, with all the interest left in'],
      G1: ['an account that pays 10% a year, with all the interest left in'],
      G2: ['After how many years will she have $4,000?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there.'
    },
    not: {
      outcome: 'lin',
      why: 'The amount is multiplied each time, not added to. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Turn the change into the number you multiply by each time',
        working: 'Up 10% each year: 100% + 10% = 110%, which is 1.1'
      },
      {
        does: 'Divide the target by the start, to see how many times bigger it must get',
        working: '$4,000 ÷ $2,000 = 2'
      },
      {
        does: 'Use the log button: divide the log of that number by the log of the number you multiply by',
        working: 'log 2 = 0.3010 and log 1.1 = 0.0414, so 0.3010 ÷ 0.0414 = 7.27'
      },
      {
        does: 'Check it with whole numbers of times, then round',
        working: 'Starting from $2,000, 7 multiplications by 1.1 give about $3,897, still under the target; 8 multiplications give about $4,287, over it. So the target is reached during the 8th year. Rounded, the answer is about 7.3 years'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 7.3 years' },
        {
          id: 's1',
          text: 'About 10.0 years',
          slip: 'you add the same amount each time, so every rise is the same size, when each rise should be bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 2 years',
          slip: 'you give how many times bigger the target is as the number of years.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so you need to find how many times. A log turns repeated multiplying into adding, so that number is the log of how many times bigger the target is, divided by the log of the {t:multiplier}. Then check it with whole numbers of times.'
  },

  {
    id: 'm4-dr-oneoff-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'money',
    topic: 'a pension raised',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A pension of $1,500 a month was raised by 4% in January, to $1,560 a month, and it has stayed at $1,560 ever since. What will it be after 5 years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has stayed at $1,560 ever since'],
      G1: ['was raised by 4% in January, to $1,560 a month', 'it has stayed at $1,560 ever since'],
      G2: ['What will it be after 5 years?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show one change that then stayed put, so nothing repeats.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it. Either way the steps are the same.'
    },
    not: {
      outcome: 'expg',
      why: 'The percentage was applied once, and the amount has stayed since. {o:expg} would be the name if the percentage came again each time.'
    },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: $1,500. After: $1,560'
      },
      {
        does: 'Say how big the change was',
        working: '$1,560 − $1,500 = $60, and $60 ÷ $1,500 = 0.04, which is 4% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at $1,560 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the new amount forward as it is',
        working: 'In 5 years: $1,560'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$1,560' },
        {
          id: 's1',
          text: '$1,860',
          slip: 'you carry the change forward as if it came again every year.'
        },
        {
          id: 's2',
          text: '$1,897.98',
          slip: 'you carry the percentage forward as if it came again every year.'
        }
      ]
    },
    why: 'A change that happened once, and is not said to come again, gives nothing to carry forward. The amount after it is the amount at any later time, so a target it is not already at is never reached. The size of the change describes that one change only.'
  }
]);
