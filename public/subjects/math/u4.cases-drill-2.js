// Basic Math, Unit Four: the drill’s problems (part 2), the varied ones. The working and the wrong choices were computed from each problem’s own numbers: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-dr-lin-4',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'water on a hike',
    kind: 'problem',
    outcome: 'lin',
    text: 'A hiker starts with 2,000 ml of water in her bottle and drinks 250 ml every hour. How much will be in the bottle after 5 hours?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['drinks 250 ml every hour'],
      G1: ['drinks 250 ml every hour'],
      G2: ['How much will be in the bottle after 5 hours?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount going down by the same number every hour, whatever it has reached so far.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it. Either way the steps are the same: forward for the amount, backward for the time.'
    },
    not: {
      outcome: 'expg',
      why: 'The change is the same figure every time, not a share of the amount. {o:expg} would be the name if each change were a percentage of what the amount is now, or a doubling.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 2,000 ml. Each hour it goes down by 250 ml'
      },
      { does: 'Find how much it changes in all', working: '250 ml × 5 hours = 1,250 ml' },
      { does: 'Take that away from the start', working: '2,000 − 1,250 = 750 ml' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '750 ml' },
        {
          id: 's1',
          text: '1,750 ml',
          slip: 'you change the amount only once, instead of once for each hour.'
        },
        {
          id: 's2',
          text: '3,250 ml',
          slip: 'you add the fall to the start instead of taking it away.'
        }
      ]
    },
    why: 'The same number is added every time, so the total change is that number times how many times. Going forward, add it to the start. Going backward, take the start off the target and divide by the change each time.'
  },

  {
    id: 'm4-dr-expg-3',
    use: 'drill',
    tier: 'varied',
    setting: 'health',
    topic: 'a count on a chart',
    kind: 'problem',
    outcome: 'expg',
    text: 'A chart of a virus count has a log scale, on which each gridline up is 10 times the one below. The count rises one gridline every day. How many times bigger will the count be after 3 days?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['The count rises one gridline every day'],
      G1: ['The count rises one gridline every day'],
      G2: ['How many times bigger will the count be after 3 days?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every day.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The count is multiplied by 10 every day. {o:oneoff} would be the name if it changed once and then stayed put.'
    },
    steps: [
      {
        does: 'Turn the change into the number you multiply by each time',
        working: 'Up one gridline each day: multiplied by 10'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Day 1: 1 × 10 = 10; Day 2: 10 × 10 = 100; Day 3: 100 × 10 = 1,000'
      },
      {
        does: 'Round at the end, and give the answer',
        working: '1,000 needs no rounding, so the answer after 3 days is 1,000 times bigger'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '1,000 times bigger' },
        {
          id: 's1',
          text: '30 times bigger',
          slip: 'you multiply the number of days by 10, instead of multiplying by 10 once for each day.'
        },
        {
          id: 's2',
          text: '100 times bigger',
          slip: 'you stop one multiplication short.'
        }
      ]
    },
    why: 'On a {t:logscale}, each gridline up is 10 times the one below, so a count that rises one gridline a day is multiplied by 10 every day. After 3 days that is 10 × 10 × 10 = 1,000: the same number, once for each day.'
  },

  {
    id: 'm4-dr-logsolve-3',
    use: 'drill',
    tier: 'varied',
    setting: 'health',
    topic: 'a virus in a sample',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A lab sample holds 100 virus cells, and the number of cells triples every day. After how many days will it hold 10,000 cells?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['the number of cells triples every day'],
      G1: ['the number of cells triples every day'],
      G2: ['After how many days will it hold 10,000 cells?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every day.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there.'
    },
    not: {
      outcome: 'lin',
      why: 'The amount is multiplied each time, not added to. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Turn the change into the number you multiply by each time',
        working: 'Triples each day: multiplied by 3'
      },
      {
        does: 'Divide the target by the start, to see how many times bigger it must get',
        working: '10,000 ÷ 100 = 100'
      },
      {
        does: 'Use the log button: divide the log of that number by the log of the number you multiply by',
        working: 'log 100 = 2.0000 and log 3 = 0.4771, so 2.0000 ÷ 0.4771 = 4.19'
      },
      {
        does: 'Check it with whole numbers of times, then round',
        working: 'Starting from 100, 4 multiplications by 3 give 8,100 cells, still under the target; 5 multiplications give 24,300 cells, over it. So the target is reached during the 5th day. Rounded, the answer is about 4.2 days'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 4.2 days' },
        {
          id: 's1',
          text: 'About 49.5 days',
          slip: 'you add the same amount each time, so every rise is the same size, when each rise should be bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 100 days',
          slip: 'you give how many times bigger the target is as the number of days.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so you need to find how many times. A log turns repeated multiplying into adding, so that number is the log of how many times bigger the target is, divided by the log of the {t:multiplier}. Then check it with whole numbers of times.'
  },

  {
    id: 'm4-dr-oneoff-3',
    use: 'drill',
    tier: 'varied',
    setting: 'money',
    topic: 'a helpline charge',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A helpline charged $0.10 a minute. In June it moved to $0.12 a minute, a rise of 20%, and it has charged $0.12 a minute ever since. What will a minute cost after 3 years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has charged $0.12 a minute ever since'],
      G1: ['In June it moved to $0.12 a minute', 'it has charged $0.12 a minute ever since'],
      G2: ['What will a minute cost after 3 years?']
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
        working: 'Before: $0.10. After: $0.12'
      },
      {
        does: 'Say how big the change was',
        working: '$0.12 − $0.10 = $0.02, and $0.02 ÷ $0.10 = 0.2, which is 20% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at $0.12 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the new amount forward as it is',
        working: 'In 3 years: $0.12'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$0.12' },
        {
          id: 's1',
          text: '$0.18',
          slip: 'you carry the change forward as if it came again every year.'
        },
        {
          id: 's2',
          text: '$0.21',
          slip: 'you carry the percentage forward as if it came again every year.'
        }
      ]
    },
    why: 'A change that happened once, and is not said to come again, gives nothing to carry forward. The amount after it is the amount at any later time, so a target it is not already at is never reached. The size of the change describes that one change only.'
  }
]);
