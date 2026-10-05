// Basic Math, Unit Four: the drill's problems (part 1): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own two questions,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-dl-lin-1',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'honey in a hive',
    kind: 'problem',
    outcome: 'lin',
    text: 'A beekeeper’s hive holds 18 kg of honey, and the bees add 3 kg more every week. None is taken out. How much honey will the hive hold after 8 weeks?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['the bees add 3 kg more every week'],
      G1: ['the bees add 3 kg more every week'],
      G2: ['How much honey will the hive hold after 8 weeks?']
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
        working: 'Start: 18 kg. Each week it goes up by 3 kg'
      },
      { does: 'Find how much it changes in all', working: '3 kg × 8 weeks = 24 kg' },
      { does: 'Add that to the start', working: '18 + 24 = 42 kg' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '42 kg' },
        {
          id: 's1',
          text: '21 kg',
          slip: 'you change the amount only once, instead of once for each week.'
        },
        {
          id: 's2',
          text: '168 kg',
          slip: 'you add the change to the start first and then multiply by the number of weeks, so the start is counted again every week.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-dl-expg-1',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'members of an online forum',
    kind: 'problem',
    outcome: 'expg',
    text: 'An online forum has 3,200 members, and the number of members grows by 25% every year. About how many members will it have after 3 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['the number of members grows by 25% every year'],
      G1: ['the number of members grows by 25% every year'],
      G2: ['About how many members will it have after 3 years?']
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
        working: 'Up 25% each year: 100% + 25% = 125%, which is 1.25'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Year 1: 3,200 × 1.25 = 4,000; Year 2: 4,000 × 1.25 = 5,000; Year 3: 5,000 × 1.25 = 6,250'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '6,250 needs no rounding, so the answer after 3 years is 6,250 members'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '6,250 members' },
        {
          id: 's1',
          text: '5,600 members',
          slip: 'you add the first rise again each time, so every rise is the same size instead of growing.'
        },
        {
          id: 's2',
          text: '5,000 members',
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  },

  {
    id: 'm4-dl-logsolve-1',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'a fish farm',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A fish farm has 400 fish, and the number of fish grows by 10% every year. After how many years will it have 800 fish?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['the number of fish grows by 10% every year'],
      G1: ['the number of fish grows by 10% every year'],
      G2: ['After how many years will it have 800 fish?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The amount keeps changing, so a target can be reached after some time. {o:oneoff} would be the name if the amount changed once and then stayed.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 10% each year: 100% + 10% = 110%, which is 1.1'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '800 ÷ 400 = 2'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 2 = 0.3010 and log 1.1 = 0.0414, so 0.3010 ÷ 0.0414 = 7.27'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from 400, 7 multiplications by 1.1 give about 779 fish, still under the target; 8 multiplications give about 857 fish, over it. So the target is reached during the 8th year. Rounded, the answer is about 7.3 years'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 7.3 years' },
        {
          id: 's1',
          text: 'About 10.0 years',
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 2 years',
          slip: 'you give how many times bigger the target is as the number of years.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
  },

  {
    id: 'm4-dl-oneoff-1',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a loaf of bread',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A bakery sold a loaf for €2.50. In April it raised the price to €2.80, and it has kept it at €2.80 ever since. What will a loaf cost after 3 years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has kept it at €2.80 ever since'],
      G1: ['In April it raised the price to €2.80', 'it has kept it at €2.80 ever since'],
      G2: ['What will a loaf cost after 3 years?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount changing one time and staying where it reached, so no change repeats and the answer is {a:G1.once}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure.'
    },
    not: {
      outcome: 'logsolve',
      why: 'The amount changed once and has stopped, so it is not multiplied again and a target is not reached by waiting. {o:logsolve} would be the name if the amount were multiplied each time.'
    },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: €2.50. After: €2.80'
      },
      {
        does: 'Say how big the change was',
        working: '€2.80 − €2.50 = €0.30, and €0.30 ÷ €2.50 = 0.12, which is 12% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at €2.80 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the amount after the change forward as it is',
        working: 'In 3 years: €2.80'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '€2.80' },
        {
          id: 's1',
          text: '€3.70',
          slip: 'you carry the change forward as if it came again every year.'
        },
        {
          id: 's2',
          text: '€3.93',
          slip: 'you carry the percentage forward as if it came again every year.'
        }
      ]
    },
    why: 'A change that came one time, and is not said to come again, is not a pattern, so nothing is carried forward. The amount after the change is the amount at any later time, and a target that it is not already at is never reached unless a new change is made. The size of the change is a fact about the one change, and it is not carried forward.'
  },

  {
    id: 'm4-dl-lin-2',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'a candle burning',
    kind: 'problem',
    outcome: 'lin',
    text: 'A candle is 30 cm tall, and it burns down 2 cm every hour. After how many hours will it be 8 cm tall?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['howlong'] },
    cues: {
      M1: ['it burns down 2 cm every hour'],
      G1: ['it burns down 2 cm every hour'],
      G2: ['After how many hours will it be 8 cm tall?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount going down by the same number every hour, whatever it has reached so far, so the answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}. For this kind either answer to this question leads to the same procedure, run forwards for the amount and backwards for the time.'
    },
    not: {
      outcome: 'logsolve',
      why: 'The amount changes by the same number each time, so every change is the same size. {o:logsolve} would be the name if each change were a share of the amount so far and the problem gave a target for it to reach.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 30 cm. Each hour it goes down by 2 cm'
      },
      {
        does: 'Find how much it must change in all to reach the target',
        working: '30 − 8 = 22 cm to be taken away'
      },
      {
        does: 'Divide that by how much it changes each time',
        working: '22 cm ÷ 2 cm = 11 hours'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '11 hours' },
        {
          id: 's1',
          text: '4 hours',
          slip: 'you divide the target by the change each time, and forget to take the start away from it first.'
        },
        {
          id: 's2',
          text: '44 hours',
          slip: 'you multiply the change needed in all by the change each time, instead of dividing.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  }
]);
