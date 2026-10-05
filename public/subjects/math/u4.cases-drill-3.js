// Basic Math, Unit Four: the drill's problems (part 3): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own two questions,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-dw-logsolve-1',
    use: 'drill',
    tier: 'varied',
    setting: 'money',
    topic: 'a pot of savings',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A savings pot holds €800 and earns 5% interest a year, which stays in the pot. After how many years will it hold €2,400?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['earns 5% interest a year, which stays in the pot'],
      G1: ['earns 5% interest a year, which stays in the pot'],
      G2: ['After how many years will it hold €2,400?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year, as a percentage, a doubling or a halving is, so the key’s answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the key’s answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The amount keeps changing, so a target can be reached after some time. {o:oneoff} would be the name if the amount changed once and then stayed.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 5% each year: 100% + 5% = 105%, which is 1.05'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '€2,400 ÷ €800 = 3'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 3 = 0.4771 and log 1.05 = 0.0212, so 0.4771 ÷ 0.0212 = 22.50'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from €800, 22 multiplications by 1.05 give about €2,340, still under the target; 23 multiplications give about €2,457, over it. So the target is reached during the 23rd year. Rounded, the answer is about 22.5 years'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 22.5 years' },
        {
          id: 's1',
          text: 'About 40.0 years',
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 3 years',
          slip: 'you give how many times bigger the target is as the number of years.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
  },

  {
    id: 'm4-dw-oneoff-1',
    use: 'drill',
    tier: 'varied',
    setting: 'shopping',
    topic: 'school canteen lunches',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A school canteen charged €3.20 for a lunch until September, when the price was set at €3.60. It has stayed at €3.60 ever since. What will a lunch cost after 2 more years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['It has stayed at €3.60 ever since'],
      G1: ['when the price was set at €3.60', 'It has stayed at €3.60 ever since'],
      G2: ['What will a lunch cost after 2 more years?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount changing one time and staying where it reached, so no change repeats and the key’s answer is {a:G1.once}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the key’s answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure.'
    },
    not: {
      outcome: 'logsolve',
      why: 'The amount changed once and has stopped, so it is not multiplied again and a target is not reached by waiting. {o:logsolve} would be the name if the amount were multiplied each time.'
    },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: €3.20. After: €3.60'
      },
      {
        does: 'Say how big the change was',
        working: '€3.60 − €3.20 = €0.40, and €0.40 ÷ €3.20 = 0.125, which is 12.5% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at €3.60 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the amount after the change forward as it is',
        working: 'In 2 years: €3.60'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '€3.60' },
        {
          id: 's1',
          text: '€4.40',
          slip: 'you carry the change forward as if it came again every year.'
        },
        {
          id: 's2',
          text: '€4.56',
          slip: 'you carry the percentage forward as if it came again every year.'
        }
      ]
    },
    why: 'A change that came one time, and is not said to come again, is not a pattern, so nothing is carried forward. The amount after the change is the amount at any later time, and a target that it is not already at is never reached unless a new change is made. The size of the change is a fact about the one change, and it is not carried forward.'
  },

  {
    id: 'm4-dw-lin-2',
    use: 'drill',
    tier: 'varied',
    setting: 'work',
    topic: 'names on a mailing list',
    kind: 'problem',
    outcome: 'lin',
    text: 'A mailing list has 1,200 names, and it gains 150 more names every month. After how many months will it have 3,000 names?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['howlong'] },
    cues: {
      M1: ['it gains 150 more names every month'],
      G1: ['it gains 150 more names every month'],
      G2: ['After how many months will it have 3,000 names?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount going up by the same number every month, whatever it has reached so far, so the key’s answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the key’s answer is {a:G2.howlong}. For this kind either answer to this question leads to the same procedure, run forwards for the amount and backwards for the time.'
    },
    not: {
      outcome: 'logsolve',
      why: 'The amount changes by the same number each time, so every change is the same size. {o:logsolve} would be the name if each change were a share of the amount so far and the problem gave a target for it to reach.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 1,200 names. Each month it goes up by 150 names'
      },
      {
        does: 'Find how much it must change in all to reach the target',
        working: '3,000 − 1,200 = 1,800 names to be added'
      },
      {
        does: 'Divide that by how much it changes each time',
        working: '1,800 names ÷ 150 names = 12 months'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '12 months' },
        {
          id: 's1',
          text: '20 months',
          slip: 'you divide the target by the change each time, and forget to take the start away from it first.'
        },
        {
          id: 's2',
          text: '270,000 months',
          slip: 'you multiply the change needed in all by the change each time, instead of dividing.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-dw-logsolve-2',
    use: 'drill',
    tier: 'varied',
    setting: 'work',
    topic: 'users of a sports app',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A sports app has 500 users, and the number of users doubles every month. After how many months will it have 20,000 users?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['the number of users doubles every month'],
      G1: ['the number of users doubles every month'],
      G2: ['After how many months will it have 20,000 users?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every month, as a percentage, a doubling or a halving is, so the key’s answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the key’s answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'lin',
      why: 'The amount is multiplied each time, and the problem gives a target and asks how long. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Doubles each month: multiplied by 2'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '20,000 ÷ 500 = 40'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 40 = 1.6021 and log 2 = 0.3010, so 1.6021 ÷ 0.3010 = 5.32'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from 500, 5 multiplications by 2 give 16,000 users, still under the target; 6 multiplications give 32,000 users, over it. So the target is reached during the 6th month. Rounded, the answer is about 5.3 months'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 5.3 months' },
        {
          id: 's1',
          text: 'About 39.0 months',
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 40 months',
          slip: 'you give how many times bigger the target is as the number of months.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
  }
]);
