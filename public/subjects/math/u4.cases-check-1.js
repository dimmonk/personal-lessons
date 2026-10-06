// Basic Math, Unit Four: the problems of the worked examples and the problems the learner finishes in a check (part 1).
// A worked example's problem carries only the problem; its working is on the card. A check's problem carries the whole working,
// so that the app can show it up to the last step, or not at all, and name the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-s-lin-1',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'bricks on a scaffold',
    kind: 'problem',
    outcome: 'lin',
    text: 'A builder starts the day with 200 bricks on a scaffold, and a hoist lifts 60 more bricks up to it every hour. None are used. How many bricks will be on the scaffold after 5 hours?'
  },

  {
    id: 'm4-s-lin-2',
    use: 'teach',
    tier: 'clean',
    setting: 'health',
    topic: 'a hospital drip bag',
    kind: 'problem',
    outcome: 'lin',
    text: 'A hospital drip bag holds 1,000 ml of fluid at the start, and it empties by 125 ml every hour. After how many hours will 250 ml be left in the bag?'
  },

  {
    id: 'm4-s-expg-1',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'orders at a bakery',
    kind: 'problem',
    outcome: 'expg',
    text: 'A bakery takes 250 orders this week, and the number of orders grows by 20% every week. About how many orders will it take after 4 weeks?'
  },

  {
    id: 'm4-s-expg-2',
    use: 'teach',
    tier: 'clean',
    setting: 'travel',
    topic: 'a delivery van losing value',
    kind: 'problem',
    outcome: 'expg',
    text: 'A delivery van is worth $30,000 when it is new. Every year its value falls by 15% of what it was worth the year before. What will it be worth after 3 years?'
  },

  {
    id: 'm4-s-logsolve-1',
    use: 'teach',
    tier: 'clean',
    setting: 'money',
    topic: 'a savings goal',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A saver has $1,500 in an account that pays 6% interest a year, and she leaves all the interest in the account. After how many years will the account hold $3,000?'
  },

  {
    id: 'm4-s-logsolve-2',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'mold on a loaf',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A patch of mold on a loaf covers 4 cm², and its area doubles every day. After how many days will the patch cover 500 cm²?'
  },

  {
    id: 'm4-s-oneoff-1',
    use: 'teach',
    tier: 'clean',
    setting: 'travel',
    topic: 'a bridge toll',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A bridge toll was $3.00 for years. In July it rose to $3.45, and it has stayed at $3.45 ever since. What toll will drivers pay in 4 years?'
  },

  {
    id: 'm4-s-oneoff-2',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'pay after a promotion',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A worker earned $15 an hour. After a promotion she has earned $18 an hour, and her pay is fixed at $18 an hour from now on. After how many years will she earn $24 an hour?'
  },

  {
    id: 'm4-ck-lin-last',
    use: 'check',
    tier: 'clean',
    setting: 'home',
    topic: 'a seedling in a pot',
    kind: 'problem',
    outcome: 'lin',
    text: 'A seedling is 12 cm tall, and it grows 3 cm every week. How tall will it be after 9 weeks?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 12 cm. Each week it goes up by 3 cm'
      },
      { does: 'Find how much it changes in all', working: '3 cm × 9 weeks = 27 cm' },
      { does: 'Add that to the start', working: '12 + 27 = 39 cm' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '39 cm' },
        {
          id: 's1',
          text: '15 cm',
          slip: 'you change the amount only once, instead of once for each week.'
        },
        {
          id: 's2',
          text: '135 cm',
          slip: 'you add the change to the start first and then multiply by the number of weeks, so the start is counted again every week.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-ck-lin-whole',
    use: 'check',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a diver coming up',
    kind: 'problem',
    outcome: 'lin',
    text: 'A diver is 40 m below the surface, and she rises 5 m closer to it every minute. After how many minutes will she be 10 m below the surface?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['howlong'] },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 40 m. Each minute it goes down by 5 m'
      },
      {
        does: 'Find how much it must change in all to reach the target',
        working: '40 − 10 = 30 m to be taken away'
      },
      {
        does: 'Divide that by how much it changes each time',
        working: '30 m ÷ 5 m = 6 minutes'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '6 minutes' },
        {
          id: 's1',
          text: '2 minutes',
          slip: 'you divide the target by the change each time, and forget to take the start away from it first.'
        },
        {
          id: 's2',
          text: '150 minutes',
          slip: 'you multiply the change needed in all by the change each time, instead of dividing.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-ck-expg-last',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'subscribers to a channel',
    kind: 'problem',
    outcome: 'expg',
    text: 'A new video channel has 800 subscribers, and the number grows by 50% every month. How many subscribers will it have after 3 months?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 50% each month: 100% + 50% = 150%, which is 1.5'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Month 1: 800 × 1.5 = 1,200; Month 2: 1,200 × 1.5 = 1,800; Month 3: 1,800 × 1.5 = 2,700'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '2,700 needs no rounding, so the answer after 3 months is 2,700 subscribers'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '2,700 subscribers' },
        {
          id: 's1',
          text: '2,000 subscribers',
          slip: 'you add the first rise again each time, so every rise is the same size instead of growing.'
        },
        {
          id: 's2',
          text: '1,800 subscribers',
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  },

  {
    id: 'm4-ck-expg-whole',
    use: 'check',
    tier: 'clean',
    setting: 'money',
    topic: 'a fund of savings',
    kind: 'problem',
    outcome: 'expg',
    text: 'A saver puts $6,000 into a fund that grows by 5% a year, and she leaves all the growth in the fund. What will the fund hold after 3 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 5% each year: 100% + 5% = 105%, which is 1.05'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Year 1: $6,000 × 1.05 = $6,300; Year 2: $6,300 × 1.05 = $6,615; Year 3: $6,615 × 1.05 = $6,945.75'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '$6,945.75 needs no rounding, so the answer after 3 years is $6,945.75'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$6,945.75' },
        {
          id: 's1',
          text: '$6,900.00',
          slip: 'you add the first rise again each time, so every rise is the same size instead of growing.'
        },
        {
          id: 's2',
          text: '$6,615.00',
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  },

  {
    id: 'm4-ck-logsolve-last',
    use: 'check',
    tier: 'clean',
    setting: 'leisure',
    topic: 'viewers of a post',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A post is seen by 400 people in its first hour, and the number of people grows by 25% every hour. After how many hours will it be seen by 1,200 people?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 25% each hour: 100% + 25% = 125%, which is 1.25'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '1,200 ÷ 400 = 3'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 3 = 0.4771 and log 1.25 = 0.0969, so 0.4771 ÷ 0.0969 = 4.92'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from 400, 4 multiplications by 1.25 give about 977 people, still under the target; 5 multiplications give about 1,221 people, over it. So the target is reached during the 5th hour. Rounded, the answer is about 4.9 hours'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 4.9 hours' },
        {
          id: 's1',
          text: 'About 8.0 hours',
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 3 hours',
          slip: 'you give how many times bigger the target is as the number of hours.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
  },

  {
    id: 'm4-ck-logsolve-whole',
    use: 'check',
    tier: 'clean',
    setting: 'cooking',
    topic: 'a dairy culture',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A dairy grows a culture of 25 g that triples in weight every day. After how many days will it weigh 2,000 g?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Triples each day: multiplied by 3'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '2,000 ÷ 25 = 80'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 80 = 1.9031 and log 3 = 0.4771, so 1.9031 ÷ 0.4771 = 3.99'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from 25, 3 multiplications by 3 give 675 g, still under the target; 4 multiplications give 2,025 g, over it. So the target is reached during the 4th day. Rounded, the answer is about 4.0 days'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 4.0 days' },
        {
          id: 's1',
          text: 'About 39.5 days',
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 80 days',
          slip: 'you give how many times bigger the target is as the number of days.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
  }
]);
