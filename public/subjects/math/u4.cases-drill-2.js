// Basic Math, Unit Four: the drill's problems (part 2): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own two questions,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-dl-logsolve-2',
    use: 'drill',
    tier: 'clean',
    setting: 'money',
    topic: 'an investment',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'An investment of €5,000 grows by 8% every year, and all the growth stays in it. After how many years will it be worth €10,000?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['grows by 8% every year, and all the growth stays in it'],
      G1: ['grows by 8% every year, and all the growth stays in it'],
      G2: ['After how many years will it be worth €10,000?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year, as a percentage, a doubling or a halving is, so the key’s answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the key’s answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'lin',
      why: 'The amount is multiplied each time, and the problem gives a target and asks how long. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 8% each year: 100% + 8% = 108%, which is 1.08'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '€10,000 ÷ €5,000 = 2'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 2 = 0.3010 and log 1.08 = 0.0334, so 0.3010 ÷ 0.0334 = 9.01'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from €5,000, 9 multiplications by 1.08 give about €9,995, still under the target; 10 multiplications give about €10,795, over it. So the target is reached during the 10th year. Rounded, the answer is about 9.0 years'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 9.0 years' },
        {
          id: 's1',
          text: 'About 12.5 years',
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
    id: 'm4-dl-expg-2',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a phone losing value',
    kind: 'problem',
    outcome: 'expg',
    text: 'A phone is worth €600 when it is new. Every year its value falls by 25% of what it was worth the year before. What will it be worth after 3 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['Every year its value falls by 25% of what it was worth the year before'],
      G1: ['Every year its value falls by 25% of what it was worth the year before'],
      G2: ['What will it be worth after 3 years?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year, as a percentage, a doubling or a halving is, so the key’s answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the key’s answer is {a:G2.willbe}.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The percentage comes again every time. {o:oneoff} would be the name if it were applied one time and then stopped.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Down 25% each year: 100% − 25% = 75%, which is 0.75'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Year 1: €600 × 0.75 = €450; Year 2: €450 × 0.75 = €337.50; Year 3: €337.50 × 0.75 = €253.125'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '€253.125 rounds to €253.13, which is the answer after 3 years'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About €253.13' },
        {
          id: 's1',
          text: '€150.00',
          slip: 'you take away the first fall again each time, so every fall is the same size instead of shrinking.'
        },
        {
          id: 's2',
          text: '€337.50',
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  },

  {
    id: 'm4-dl-oneoff-2',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a zoo ticket',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A zoo ticket cost €12. After a refurbishment it cost €15, and the zoo has fixed it at €15 ever since. After how many years will a ticket cost €20?',
    route: { M1: ['growth'], G1: ['once'], G2: ['howlong'] },
    cues: {
      M1: ['the zoo has fixed it at €15 ever since'],
      G1: ['After a refurbishment it cost €15', 'the zoo has fixed it at €15 ever since'],
      G2: ['After how many years will a ticket cost €20?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount changing one time and staying where it reached, so no change repeats and the key’s answer is {a:G1.once}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the key’s answer is {a:G2.howlong}. For this kind either answer to this question leads to the same procedure.'
    },
    not: {
      outcome: 'expg',
      why: 'The percentage was applied one time, and the amount has stayed since. {o:expg} would be the name if the percentage came again each time.'
    },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: €12. After: €15'
      },
      {
        does: 'Say how big the change was',
        working: '€15 − €12 = €3, and €3 ÷ €12 = 0.25, which is 25% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at €15 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'See whether the amount ever reaches the target',
        working: '€15 is not €20, and nothing changes it again, so it never reaches €20 unless a new change is made'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Never: it stays at €15' },
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
    why: 'A change that came one time, and is not said to come again, is not a pattern, so nothing is carried forward. The amount after the change is the amount at any later time, and a target that it is not already at is never reached unless a new change is made. The size of the change is a fact about the one change, and it is not carried forward.'
  },

  {
    id: 'm4-dw-lin-1',
    use: 'drill',
    tier: 'varied',
    setting: 'health',
    topic: 'a swimmer’s daily distance',
    kind: 'problem',
    outcome: 'lin',
    text: 'A swimmer swims 300 m a day now, and she adds 50 m to her daily distance every day from here. How far will she swim in a day after 8 more days?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['she adds 50 m to her daily distance every day'],
      G1: ['she adds 50 m to her daily distance every day'],
      G2: ['How far will she swim in a day after 8 more days?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount going up by the same number every day, whatever it has reached so far, so the key’s answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the key’s answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure, run forwards for the amount and backwards for the time.'
    },
    not: {
      outcome: 'expg',
      why: 'The amount is raised or lowered by the same figure every time, and not by a share of what it has reached. {o:expg} would be the name if each change were a percentage of the amount so far, or a doubling.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 300 m. Each day it goes up by 50 m'
      },
      { does: 'Find how much it changes in all', working: '50 m × 8 days = 400 m' },
      { does: 'Add that to the start', working: '300 + 400 = 700 m' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '700 m' },
        {
          id: 's1',
          text: '350 m',
          slip: 'you change the amount only once, instead of once for each day.'
        },
        {
          id: 's2',
          text: '2,800 m',
          slip: 'you add the change to the start first and then multiply by the number of days, so the start is counted again every day.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-dw-expg-1',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'members leaving a club',
    kind: 'problem',
    outcome: 'expg',
    text: 'A club has 240 members, and the number of members falls by 10% every month. About how many members will it have after 3 months?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['the number of members falls by 10% every month'],
      G1: ['the number of members falls by 10% every month'],
      G2: ['About how many members will it have after 3 months?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every month, as a percentage, a doubling or a halving is, so the key’s answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the key’s answer is {a:G2.willbe}.'
    },
    not: {
      outcome: 'lin',
      why: 'The change is a share of what the amount has reached, so it is not the same size each time. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Down 10% each month: 100% − 10% = 90%, which is 0.9'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Month 1: 240 × 0.9 = 216; Month 2: 216 × 0.9 = 194.4; Month 3: 194.4 × 0.9 = 174.96'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '174.96 rounds to 175 members, which is the answer after 3 months'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 175 members' },
        {
          id: 's1',
          text: '168 members',
          slip: 'you take away the first fall again each time, so every fall is the same size instead of shrinking.'
        },
        {
          id: 's2',
          text: '194 members',
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  }
]);
