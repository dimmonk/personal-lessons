// Basic Math, Unit Four: the drill’s problems (part 1), the clean ones. Every problem is a case with marked words and a reason for each question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-dr-lin-1',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'a bath filling',
    kind: 'problem',
    outcome: 'lin',
    text: 'A bath holds 20 liters of water, and the tap adds 10 liters every minute. After how many minutes will the bath hold 120 liters?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['howlong'] },
    cues: {
      M1: ['the tap adds 10 liters every minute'],
      G1: ['the tap adds 10 liters every minute'],
      G2: ['After how many minutes will the bath hold 120 liters?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount going up by the same number every minute, whatever it has reached so far.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there. Either way the steps are the same: forward for the amount, backward for the time.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The change comes again each time. {o:oneoff} would be the name if the change happened once and the amount then stayed put.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 20 liters. Each minute it goes up by 10 liters'
      },
      {
        does: 'Find how much it must change in all to reach the target',
        working: '120 − 20 = 100 liters to be added'
      },
      {
        does: 'Divide that by how much it changes each time',
        working: '100 liters ÷ 10 liters = 10 minutes'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '10 minutes' },
        {
          id: 's1',
          text: '12 minutes',
          slip: 'you divide the target by the change each time, and forget to take the start away from it first.'
        },
        {
          id: 's2',
          text: '1,000 minutes',
          slip: 'you multiply the change needed in all by the change each time, instead of dividing.'
        }
      ]
    },
    why: 'The same number is added every time, so the total change is that number times how many times. Going forward, add it to the start. Going backward, take the start off the target and divide by the change each time.'
  },

  {
    id: 'm4-dr-oneoff-1',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a newspaper price',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A newspaper cost $1.20 for years. In January it rose to $1.50, and the publisher has fixed it at $1.50 ever since. After how many years will it cost $2.00?',
    route: { M1: ['growth'], G1: ['once'], G2: ['howlong'] },
    cues: {
      M1: ['the publisher has fixed it at $1.50 ever since'],
      G1: ['In January it rose to $1.50', 'the publisher has fixed it at $1.50 ever since'],
      G2: ['After how many years will it cost $2.00?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show one change that then stayed put, so nothing repeats.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there. Either way the steps are the same.'
    },
    not: {
      outcome: 'lin',
      why: 'The change happened once and the amount has stayed since, so nothing is added again. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: $1.20. After: $1.50'
      },
      {
        does: 'Say how big the change was',
        working: '$1.50 − $1.20 = $0.30, and $0.30 ÷ $1.20 = 0.25, which is 25% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at $1.50 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'See whether the amount ever reaches the target',
        working: '$1.50 is not $2.00, and nothing changes it again, so it never reaches $2.00 unless a new change is made'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Never: it stays at $1.50' },
        {
          id: 's1',
          text: 'About 1.7 years',
          slip: 'you add the change again every year until the target is reached, as if it came again each time.'
        },
        {
          id: 's2',
          text: 'About 1.3 years',
          slip: 'you apply the same percentage again every year until the target is reached, as if it came again each time.'
        }
      ]
    },
    why: 'A change that happened once, and is not said to come again, gives nothing to carry forward. The amount after it is the amount at any later time, so a target it is not already at is never reached. The size of the change describes that one change only.'
  },

  {
    id: 'm4-dr-expg-1',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'posts on a school forum',
    kind: 'problem',
    outcome: 'expg',
    text: 'A school forum has 500 posts, and the number of posts grows by 20% every month. About how many posts will it have after 5 months?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['the number of posts grows by 20% every month'],
      G1: ['the number of posts grows by 20% every month'],
      G2: ['About how many posts will it have after 5 months?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every month.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it.'
    },
    not: {
      outcome: 'logsolve',
      why: 'The problem gives a time and asks for the amount, so the amount is what is missing. {o:logsolve} would be the name if it gave a target for the amount and asked how long.'
    },
    steps: [
      {
        does: 'Turn the change into the number you multiply by each time',
        working: 'Up 20% each month: 100% + 20% = 120%, which is 1.2'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Month 1: 500 × 1.2 = 600; Month 2: 600 × 1.2 = 720; Month 3: 720 × 1.2 = 864; Month 4: 864 × 1.2 = 1,036.8; Month 5: 1,036.8 × 1.2 = 1,244.16'
      },
      {
        does: 'Round at the end, and give the answer',
        working: '1,244.16 rounds to 1,244 posts, which is the answer after 5 months'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 1,244 posts' },
        {
          id: 's1',
          text: '1,000 posts',
          slip: 'you add the first rise again each time, so every rise is the same size instead of growing.'
        },
        {
          id: 's2',
          text: '1,037 posts',
          slip: 'you stop one multiplication short.'
        }
      ]
    },
    why: 'Each change is a percentage of what the amount is now, so you multiply by the {t:multiplier} once for each time, each time on the result of the last. That is why the changes get bigger as the amount grows. Round only at the end.'
  },

  {
    id: 'm4-dr-logsolve-1',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'loaves sold in a day',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A bakery sells 400 loaves a day, and its daily sales grow by 5% every week. After how many weeks will it sell 800 loaves a day?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['its daily sales grow by 5% every week'],
      G1: ['its daily sales grow by 5% every week'],
      G2: ['After how many weeks will it sell 800 loaves a day?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every week.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there.'
    },
    not: {
      outcome: 'expg',
      why: 'The problem gives a target for the amount and asks how long, so the time is what is missing. {o:expg} would be the name if it gave a time and asked for the amount.'
    },
    steps: [
      {
        does: 'Turn the change into the number you multiply by each time',
        working: 'Up 5% each week: 100% + 5% = 105%, which is 1.05'
      },
      {
        does: 'Divide the target by the start, to see how many times bigger it must get',
        working: '800 ÷ 400 = 2'
      },
      {
        does: 'Use the log button: divide the log of that number by the log of the number you multiply by',
        working: 'log 2 = 0.3010 and log 1.05 = 0.0212, so 0.3010 ÷ 0.0212 = 14.20'
      },
      {
        does: 'Check it with whole numbers of times, then round',
        working: 'Starting from 400, 14 multiplications by 1.05 give about 792 loaves, still under the target; 15 multiplications give about 832 loaves, over it. So the target is reached during the 15th week. Rounded, the answer is about 14.2 weeks'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 14.2 weeks' },
        {
          id: 's1',
          text: 'About 20.0 weeks',
          slip: 'you add the same amount each time, so every rise is the same size, when each rise should be bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 2 weeks',
          slip: 'you give how many times bigger the target is as the number of weeks.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so you need to find how many times. A log turns repeated multiplying into adding, so that number is the log of how many times bigger the target is, divided by the log of the {t:multiplier}. Then check it with whole numbers of times.'
  }
]);
