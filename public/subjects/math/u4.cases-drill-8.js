// Basic Math, Unit Four: the drill's problems (part 8): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own two questions,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-dr-oneoff-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'money',
    topic: 'a pension raised',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A pension of €1,500 a month was raised by 4% in January, to €1,560 a month, and it has stayed at €1,560 ever since. What will it be after 5 years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has stayed at €1,560 ever since'],
      G1: ['was raised by 4% in January, to €1,560 a month', 'it has stayed at €1,560 ever since'],
      G2: ['What will it be after 5 years?']
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
    wouldChange: 'If the pension rose by 4% every year, it would be {o:expg}.',
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: €1,500. After: €1,560'
      },
      {
        does: 'Say how big the change was',
        working: '€1,560 − €1,500 = €60, and €60 ÷ €1,500 = 0.04, which is 4% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at €1,560 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the amount after the change forward as it is',
        working: 'In 5 years: €1,560'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '€1,560' },
        {
          id: 's1',
          text: '€1,860',
          slip: 'you carry the change forward as if it came again every year.'
        },
        {
          id: 's2',
          text: '€1,897.98',
          slip: 'you carry the percentage forward as if it came again every year.'
        }
      ]
    },
    why: 'A change that came one time, and is not said to come again, is not a pattern, so nothing is carried forward. The amount after the change is the amount at any later time, and a target that it is not already at is never reached unless a new change is made. The size of the change is a fact about the one change, and it is not carried forward.'
  },

  {
    id: 'm4-dr-logsolve-5',
    use: 'drill',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'followers on a log chart',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A chart of the followers of a new account uses a log scale, on which each gridline up is 10 times the one below. The count rises one gridline every week, and it is 20 followers now. After how many weeks will it reach 150,000 followers?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['The count rises one gridline every week'],
      G1: ['The count rises one gridline every week'],
      G2: ['After how many weeks will it reach 150,000 followers?']
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
    wouldChange: 'If the count rose by 10 followers every week, it would be {o:lin}.',
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up one gridline each week: multiplied by 10'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '150,000 ÷ 20 = 7,500'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 7,500 = 3.8751 and log 10 = 1.0000, so 3.8751 ÷ 1.0000 = 3.88'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from 20, 3 multiplications by 10 give 20,000 followers, still under the target; 4 multiplications give 200,000 followers, over it. So the target is reached during the 4th week. Rounded, the answer is about 3.9 weeks'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 3.9 weeks' },
        {
          id: 's1',
          text: 'About 833.2 weeks',
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 7,500 weeks',
          slip: 'you give how many times bigger the target is as the number of weeks.'
        }
      ]
    },
    why: 'On a {t:logscale}, each gridline up is multiplied by 10, so a count that rises one gridline every week is multiplied by 10 every week. The question is how many weeks of multiplying by 10 turn 20 into 150,000, which is how many times the {t:multiplier} 10 must be multiplied. The log of a number turns multiplying into adding, so that number of weeks is the log of how many times bigger the target is, divided by the log of 10, which is 1.'
  },

  {
    id: 'm4-dr-expg-6',
    use: 'drill',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'members bringing in friends',
    kind: 'problem',
    outcome: 'expg',
    text: 'A book club has 10 members. Every month each member brings in 2 new members, and nobody leaves. How many members will the club have after 3 months?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['Every month each member brings in 2 new members, and nobody leaves'],
      G1: ['Every month each member brings in 2 new members, and nobody leaves'],
      G2: ['How many members will the club have after 3 months?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every month, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
    },
    not: {
      outcome: 'lin',
      why: 'The change is a share of what the amount has reached, so it is not the same size each time. {o:lin} would be the name if the same number were added each time.'
    },
    wouldChange: 'If the club gained 2 new members every month in all, it would be {o:lin}.',
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Each member stays and brings in 2 more, so each becomes 3 members: multiplied by 3 each month'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Month 1: 10 × 3 = 30; Month 2: 30 × 3 = 90; Month 3: 90 × 3 = 270'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '270 needs no rounding, so the answer after 3 months is 270 members'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '270 members' },
        {
          id: 's1',
          text: '80 members',
          slip: 'you multiply by 2 instead of 3, forgetting that the members who were already there are still members.'
        },
        {
          id: 's2',
          text: '70 members',
          slip: 'you add the first rise again each time, so every rise is the same size instead of growing.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  }
]);
