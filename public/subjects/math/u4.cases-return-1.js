// Basic Math, Unit Four: fresh problems for later days (part 1): three for each kind, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most
// often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-rt-lin-1',
    use: 'return',
    tier: 'clean',
    setting: 'work',
    topic: 'cans at a food bank',
    kind: 'problem',
    outcome: 'lin',
    text: 'A food bank holds 120 cans, and a delivery brings 45 more cans every week. How many cans will it hold after 8 weeks?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['a delivery brings 45 more cans every week'],
      G1: ['a delivery brings 45 more cans every week'],
      G2: ['How many cans will it hold after 8 weeks?']
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
        working: 'Start: 120 cans. Each week it goes up by 45 cans'
      },
      { does: 'Find how much it changes in all', working: '45 cans × 8 weeks = 360 cans' },
      { does: 'Add that to the start', working: '120 + 360 = 480 cans' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '480 cans' },
        {
          id: 's1',
          text: '165 cans',
          slip: 'you change the amount only once, instead of once for each week.'
        },
        {
          id: 's2',
          text: '1,320 cans',
          slip: 'you add the change to the start first and then multiply by the number of weeks, so the start is counted again every week.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-rt-lin-2',
    use: 'return',
    tier: 'clean',
    setting: 'home',
    topic: 'oil in a heating tank',
    kind: 'problem',
    outcome: 'lin',
    text: 'A heating tank holds 90 liters of oil, and the heater burns 6 liters every day. After how many days will 30 liters be left?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['howlong'] },
    cues: {
      M1: ['the heater burns 6 liters every day'],
      G1: ['the heater burns 6 liters every day'],
      G2: ['After how many days will 30 liters be left?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount going down by the same number every day, whatever it has reached so far, so the answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}. For this kind either answer to this question leads to the same procedure, run forwards for the amount and backwards for the time.'
    },
    not: {
      outcome: 'logsolve',
      why: 'The amount changes by the same number each time, so every change is the same size. {o:logsolve} would be the name if each change were a share of the amount so far and the problem gave a target for it to reach.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 90 liters. Each day it goes down by 6 liters'
      },
      {
        does: 'Find how much it must change in all to reach the target',
        working: '90 − 30 = 60 liters to be taken away'
      },
      {
        does: 'Divide that by how much it changes each time',
        working: '60 liters ÷ 6 liters = 10 days'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '10 days' },
        {
          id: 's1',
          text: '5 days',
          slip: 'you divide the target by the change each time, and forget to take the start away from it first.'
        },
        {
          id: 's2',
          text: '360 days',
          slip: 'you multiply the change needed in all by the change each time, instead of dividing.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-rt-lin-3',
    use: 'return',
    tier: 'varied',
    setting: 'money',
    topic: 'a student loan paid off',
    kind: 'problem',
    outcome: 'lin',
    text: 'A student owes $2,400, and she pays off $75 of it every month, with no interest. How much will she owe after 12 months?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['she pays off $75 of it every month, with no interest'],
      G1: ['she pays off $75 of it every month, with no interest'],
      G2: ['How much will she owe after 12 months?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount going down by the same number every month, whatever it has reached so far, so the answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure, run forwards for the amount and backwards for the time.'
    },
    not: {
      outcome: 'expg',
      why: 'The amount is raised or lowered by the same figure every time, and not by a share of what it has reached. {o:expg} would be the name if each change were a percentage of the amount so far, or a doubling.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: $2,400. Each month it goes down by $75'
      },
      { does: 'Find how much it changes in all', working: '$75 × 12 months = $900' },
      { does: 'Take that away from the start', working: '$2,400 − $900 = $1,500' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$1,500' },
        {
          id: 's1',
          text: '$2,325',
          slip: 'you change the amount only once, instead of once for each month.'
        },
        {
          id: 's2',
          text: '$3,300',
          slip: 'you add the fall to the start instead of taking it away.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-rt-expg-1',
    use: 'return',
    tier: 'clean',
    setting: 'travel',
    topic: 'riders on a ferry line',
    kind: 'problem',
    outcome: 'expg',
    text: 'A new ferry line carries 1,000 passengers in its first week, and the number grows by 10% every week. How many passengers will it carry in a week, after 3 more weeks?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['the number grows by 10% every week'],
      G1: ['the number grows by 10% every week'],
      G2: ['How many passengers will it carry in a week, after 3 more weeks?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every week, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The percentage comes again every time. {o:oneoff} would be the name if it were applied one time and then stopped.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 10% each week: 100% + 10% = 110%, which is 1.1'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Week 1: 1,000 × 1.1 = 1,100; Week 2: 1,100 × 1.1 = 1,210; Week 3: 1,210 × 1.1 = 1,331'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '1,331 needs no rounding, so the answer after 3 weeks is 1,331 passengers'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '1,331 passengers' },
        {
          id: 's1',
          text: '1,300 passengers',
          slip: 'you add the first rise again each time, so every rise is the same size instead of growing.'
        },
        {
          id: 's2',
          text: '1,210 passengers',
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  },

  {
    id: 'm4-rt-expg-2',
    use: 'return',
    tier: 'clean',
    setting: 'work',
    topic: 'a decaying sample',
    kind: 'problem',
    outcome: 'expg',
    text: 'A lab sample holds 640 mg of a substance that halves every day. How much will be left after 5 days?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['a substance that halves every day'],
      G1: ['a substance that halves every day'],
      G2: ['How much will be left after 5 days?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every day, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
    },
    not: {
      outcome: 'logsolve',
      why: 'The problem gives a time and asks for the amount, so the amount is what is missing. {o:logsolve} would be the name if it gave a target for the amount and asked how long.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Halves each day: multiplied by 0.5'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Day 1: 640 × 0.5 = 320; Day 2: 320 × 0.5 = 160; Day 3: 160 × 0.5 = 80; Day 4: 80 × 0.5 = 40; Day 5: 40 × 0.5 = 20'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '20 needs no rounding, so the answer after 5 days is 20 mg'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '20 mg' },
        {
          id: 's1',
          text: '320 mg',
          slip: 'you halve the amount only once, instead of once for each day.'
        },
        {
          id: 's2',
          text: '40 mg',
          slip: 'you halve one time too many, once more than the number of days.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  }
]);
