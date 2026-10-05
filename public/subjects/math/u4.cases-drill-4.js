// Basic Math, Unit Four: the drill's problems (part 4): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own two questions,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-dw-expg-2',
    use: 'drill',
    tier: 'varied',
    setting: 'travel',
    topic: 'passengers on a tram line',
    kind: 'problem',
    outcome: 'expg',
    text: 'A tram line carries 4,000 passengers a day, and the number grows by 50% every year. How many passengers a day will it carry after 3 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['the number grows by 50% every year'],
      G1: ['the number grows by 50% every year'],
      G2: ['How many passengers a day will it carry after 3 years?']
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
        working: 'Up 50% each year: 100% + 50% = 150%, which is 1.5'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Year 1: 4,000 × 1.5 = 6,000; Year 2: 6,000 × 1.5 = 9,000; Year 3: 9,000 × 1.5 = 13,500'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '13,500 needs no rounding, so the answer after 3 years is 13,500 passengers'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '13,500 passengers' },
        {
          id: 's1',
          text: '10,000 passengers',
          slip: 'you add the first rise again each time, so every rise is the same size instead of growing.'
        },
        {
          id: 's2',
          text: '9,000 passengers',
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  },

  {
    id: 'm4-dw-oneoff-2',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'a concert ticket',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A concert ticket cost €40. Since the new venue opened it has cost €50, and the promoter has fixed it at €50. After how many years will a ticket cost €60?',
    route: { M1: ['growth'], G1: ['once'], G2: ['howlong'] },
    cues: {
      M1: ['the promoter has fixed it at €50'],
      G1: ['Since the new venue opened it has cost €50', 'the promoter has fixed it at €50'],
      G2: ['After how many years will a ticket cost €60?']
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
        working: 'Before: €40. After: €50'
      },
      {
        does: 'Say how big the change was',
        working: '€50 − €40 = €10, and €10 ÷ €40 = 0.25, which is 25% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at €50 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'See whether the amount ever reaches the target',
        working: '€50 is not €60, and nothing changes it again, so it never reaches €60 unless a new change is made'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Never: it stays at €50' },
        {
          id: 's1',
          text: 'About 1.0 year',
          slip: 'you add the change again every year until the target is reached, as if it came again each time.'
        },
        {
          id: 's2',
          text: 'About 0.8 years',
          slip: 'you apply the same percentage again every year until the target is reached, as if it came again each time.'
        }
      ]
    },
    why: 'A change that came one time, and is not said to come again, is not a pattern, so nothing is carried forward. The amount after the change is the amount at any later time, and a target that it is not already at is never reached unless a new change is made. The size of the change is a fact about the one change, and it is not carried forward.'
  },

  {
    id: 'm4-dr-lin-1',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'a bath filling',
    kind: 'problem',
    outcome: 'lin',
    text: 'A bath holds 20 litres of water, and the tap adds 10 litres every minute. After how many minutes will the bath hold 120 litres?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['howlong'] },
    cues: {
      M1: ['the tap adds 10 litres every minute'],
      G1: ['the tap adds 10 litres every minute'],
      G2: ['After how many minutes will the bath hold 120 litres?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount going up by the same number every minute, whatever it has reached so far, so the key’s answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the key’s answer is {a:G2.howlong}. For this kind either answer to this question leads to the same procedure, run forwards for the amount and backwards for the time.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The change comes again each time. {o:oneoff} would be the name if the change were made one time and the amount then stayed where it reached.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 20 litres. Each minute it goes up by 10 litres'
      },
      {
        does: 'Find how much it must change in all to reach the target',
        working: '120 − 20 = 100 litres to be added'
      },
      {
        does: 'Divide that by how much it changes each time',
        working: '100 litres ÷ 10 litres = 10 minutes'
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
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-dr-oneoff-1',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a newspaper price',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A newspaper cost €1.20 for years. In January it rose to €1.50, and the publisher has fixed it at €1.50 ever since. After how many years will it cost €2.00?',
    route: { M1: ['growth'], G1: ['once'], G2: ['howlong'] },
    cues: {
      M1: ['the publisher has fixed it at €1.50 ever since'],
      G1: ['In January it rose to €1.50', 'the publisher has fixed it at €1.50 ever since'],
      G2: ['After how many years will it cost €2.00?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount changing one time and staying where it reached, so no change repeats and the key’s answer is {a:G1.once}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the key’s answer is {a:G2.howlong}. For this kind either answer to this question leads to the same procedure.'
    },
    not: {
      outcome: 'lin',
      why: 'The change was made one time and the amount has stayed since, so nothing is added again. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: €1.20. After: €1.50'
      },
      {
        does: 'Say how big the change was',
        working: '€1.50 − €1.20 = €0.30, and €0.30 ÷ €1.20 = 0.25, which is 25% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at €1.50 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'See whether the amount ever reaches the target',
        working: '€1.50 is not €2.00, and nothing changes it again, so it never reaches €2.00 unless a new change is made'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Never: it stays at €1.50' },
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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every month, as a percentage, a doubling or a halving is, so the key’s answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the key’s answer is {a:G2.willbe}.'
    },
    not: {
      outcome: 'logsolve',
      why: 'The problem gives a time and asks for the amount, so the amount is what is missing. {o:logsolve} would be the name if it gave a target for the amount and asked how long.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 20% each month: 100% + 20% = 120%, which is 1.2'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Month 1: 500 × 1.2 = 600; Month 2: 600 × 1.2 = 720; Month 3: 720 × 1.2 = 864; Month 4: 864 × 1.2 = 1,036.8; Month 5: 1,036.8 × 1.2 = 1,244.16'
      },
      {
        does: 'Round at the end, and say what it shows',
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
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  }
]);
