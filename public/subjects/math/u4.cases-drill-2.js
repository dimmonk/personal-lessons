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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount going down by the same number every hour, whatever it has reached so far, so the answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure, run forwards for the amount and backwards for the time.'
    },
    not: {
      outcome: 'expg',
      why: 'The amount is raised or lowered by the same figure every time, and not by a share of what it has reached. {o:expg} would be the name if each change were a percentage of the amount so far, or a doubling.'
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
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every day, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The percentage comes again every time. {o:oneoff} would be the name if it were applied one time and then stopped.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up one gridline each day: multiplied by 10'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Day 1: 1 × 10 = 10; Day 2: 10 × 10 = 100; Day 3: 100 × 10 = 1,000'
      },
      {
        does: 'Round at the end, and say what it shows',
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
          slip: 'you multiply one time too few, once for every day but the last.'
        }
      ]
    },
    why: 'On a {t:logscale}, each gridline up is multiplied by 10, so a count that rises one gridline every day is multiplied by 10 every day. After 3 days it has been multiplied by 10 three times, once for each day, and each multiplication is made on the result of the last. That is the {t:multiplier} idea again: the same number, once for each day, gives the amount at the end.'
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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every day, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'lin',
      why: 'The amount is multiplied each time, and the problem gives a target and asks how long. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Triples each day: multiplied by 3'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '10,000 ÷ 100 = 100'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 100 = 2.0000 and log 3 = 0.4771, so 2.0000 ÷ 0.4771 = 4.19'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
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
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 100 days',
          slip: 'you give how many times bigger the target is as the number of days.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount changing one time and staying where it reached, so no change repeats and the answer is {a:G1.once}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure.'
    },
    not: {
      outcome: 'expg',
      why: 'The percentage was applied one time, and the amount has stayed since. {o:expg} would be the name if the percentage came again each time.'
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
        does: 'Carry the amount after the change forward as it is',
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
    why: 'A change that came one time, and is not said to come again, is not a pattern, so nothing is carried forward. The amount after the change is the amount at any later time, and a target that it is not already at is never reached unless a new change is made. The size of the change is a fact about the one change, and it is not carried forward.'
  }
]);
