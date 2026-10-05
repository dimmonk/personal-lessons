// Basic Math, Unit Four: the drill's problems (part 5): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own two questions,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every week, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'expg',
      why: 'The problem gives a target for the amount and asks how long, so the time is what is missing. {o:expg} would be the name if it gave a time and asked for the amount.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 5% each week: 100% + 5% = 105%, which is 1.05'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '800 ÷ 400 = 2'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 2 = 0.3010 and log 1.05 = 0.0212, so 0.3010 ÷ 0.0212 = 14.20'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
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
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 2 weeks',
          slip: 'you give how many times bigger the target is as the number of weeks.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
  },

  {
    id: 'm4-dr-lin-2',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'recycling collected',
    kind: 'problem',
    outcome: 'lin',
    text: 'A town’s recycling centre collects 6,000 kg this month, and it collects 400 kg more every month. How many kg will it collect in a month, 10 months from now?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['it collects 400 kg more every month'],
      G1: ['it collects 400 kg more every month'],
      G2: ['How many kg will it collect in a month, 10 months from now?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount going up by the same number every month, whatever it has reached so far, so the answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure, run forwards for the amount and backwards for the time.'
    },
    not: {
      outcome: 'expg',
      why: 'The amount is raised or lowered by the same figure every time, and not by a share of what it has reached. {o:expg} would be the name if each change were a percentage of the amount so far, or a doubling.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 6,000 kg. Each month it goes up by 400 kg'
      },
      { does: 'Find how much it changes in all', working: '400 kg × 10 months = 4,000 kg' },
      { does: 'Add that to the start', working: '6,000 + 4,000 = 10,000 kg' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '10,000 kg' },
        {
          id: 's1',
          text: '6,400 kg',
          slip: 'you change the amount only once, instead of once for each month.'
        },
        {
          id: 's2',
          text: '64,000 kg',
          slip: 'you add the change to the start first and then multiply by the number of months, so the start is counted again every month.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-dr-expg-2',
    use: 'drill',
    tier: 'clean',
    setting: 'money',
    topic: 'a rare coin',
    kind: 'problem',
    outcome: 'expg',
    text: 'A rare coin is worth €500, and its value rises by 10% every year. What will it be worth after 4 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['its value rises by 10% every year'],
      G1: ['its value rises by 10% every year'],
      G2: ['What will it be worth after 4 years?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
    },
    not: {
      outcome: 'lin',
      why: 'The change is a share of what the amount has reached, so it is not the same size each time. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 10% each year: 100% + 10% = 110%, which is 1.1'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Year 1: €500 × 1.1 = €550; Year 2: €550 × 1.1 = €605; Year 3: €605 × 1.1 = €665.50; Year 4: €665.50 × 1.1 = €732.05'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '€732.05 needs no rounding, so the answer after 4 years is €732.05'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '€732.05' },
        {
          id: 's1',
          text: '€700.00',
          slip: 'you add the first rise again each time, so every rise is the same size instead of growing.'
        },
        {
          id: 's2',
          text: '€665.50',
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  },

  {
    id: 'm4-dr-logsolve-2',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'algae in a lake',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'Algae cover 2 hectares of a lake, and the area they cover doubles every week. After how many weeks will they cover 50 hectares?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['the area they cover doubles every week'],
      G1: ['the area they cover doubles every week'],
      G2: ['After how many weeks will they cover 50 hectares?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every week, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The amount keeps changing, so a target can be reached after some time. {o:oneoff} would be the name if the amount changed once and then stayed.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Doubles each week: multiplied by 2'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '50 ÷ 2 = 25'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 25 = 1.3979 and log 2 = 0.3010, so 1.3979 ÷ 0.3010 = 4.64'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from 2, 4 multiplications by 2 give 32 hectares, still under the target; 5 multiplications give 64 hectares, over it. So the target is reached during the 5th week. Rounded, the answer is about 4.6 weeks'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 4.6 weeks' },
        {
          id: 's1',
          text: 'About 24.0 weeks',
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 25 weeks',
          slip: 'you give how many times bigger the target is as the number of weeks.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
  }
]);
