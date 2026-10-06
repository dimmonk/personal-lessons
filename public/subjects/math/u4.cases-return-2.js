// Basic Math, Unit Four: fresh problems for later days (part 2): three for each kind, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most
// often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-rt-expg-3',
    use: 'return',
    tier: 'varied',
    setting: 'money',
    topic: 'a deposit account',
    kind: 'problem',
    outcome: 'expg',
    text: 'A saver puts $4,000 into an account that pays 5% a year, and she leaves all the interest in. What will the account hold after 3 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['pays 5% a year, and she leaves all the interest in'],
      G1: ['pays 5% a year, and she leaves all the interest in'],
      G2: ['What will the account hold after 3 years?']
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
        working: 'Up 5% each year: 100% + 5% = 105%, which is 1.05'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Year 1: $4,000 × 1.05 = $4,200; Year 2: $4,200 × 1.05 = $4,410; Year 3: $4,410 × 1.05 = $4,630.50'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '$4,630.50 needs no rounding, so the answer after 3 years is $4,630.50'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$4,630.50' },
        {
          id: 's1',
          text: '$4,600.00',
          slip: 'you add the first rise again each time, so every rise is the same size instead of growing.'
        },
        {
          id: 's2',
          text: '$4,410.00',
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  },

  {
    id: 'm4-rt-logsolve-1',
    use: 'return',
    tier: 'clean',
    setting: 'work',
    topic: 'customers of a start-up',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A start-up has 300 customers, and the number of customers grows by 15% every month. After how many months will it have 600 customers?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['the number of customers grows by 15% every month'],
      G1: ['the number of customers grows by 15% every month'],
      G2: ['After how many months will it have 600 customers?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every month, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'oneoff',
      why: 'The amount keeps changing, so a target can be reached after some time. {o:oneoff} would be the name if the amount changed once and then stayed.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 15% each month: 100% + 15% = 115%, which is 1.15'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '600 ÷ 300 = 2'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 2 = 0.3010 and log 1.15 = 0.0607, so 0.3010 ÷ 0.0607 = 4.96'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from 300, 4 multiplications by 1.15 give about 525 customers, still under the target; 5 multiplications give about 603 customers, over it. So the target is reached during the 5th month. Rounded, the answer is about 5.0 months'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 5.0 months' },
        {
          id: 's1',
          text: 'About 6.7 months',
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 2 months',
          slip: 'you give how many times bigger the target is as the number of months.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
  },

  {
    id: 'm4-rt-logsolve-2',
    use: 'return',
    tier: 'clean',
    setting: 'home',
    topic: 'a jar of kefir',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A jar holds 50 ml of kefir, and the amount doubles every day. After how many days will it hold 800 ml?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['the amount doubles every day'],
      G1: ['the amount doubles every day'],
      G2: ['After how many days will it hold 800 ml?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every day, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'expg',
      why: 'The problem gives a target for the amount and asks how long, so the time is what is missing. {o:expg} would be the name if it gave a time and asked for the amount.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Doubles each day: multiplied by 2'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '800 ÷ 50 = 16'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 16 = 1.2041 and log 2 = 0.3010, so 1.2041 ÷ 0.3010 = 4.00'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from 50, 4 multiplications by 2 give 800 ml, which is the target. Rounded, the answer is 4.0 days'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 4.0 days' },
        {
          id: 's1',
          text: 'About 15.0 days',
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 16 days',
          slip: 'you give how many times bigger the target is as the number of days.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
  },

  {
    id: 'm4-rt-logsolve-3',
    use: 'return',
    tier: 'varied',
    setting: 'money',
    topic: 'a machine losing value',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A machine is worth $20,000, and its value falls by 20% every year. After how many years will it be worth $10,000?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['its value falls by 20% every year'],
      G1: ['its value falls by 20% every year'],
      G2: ['After how many years will it be worth $10,000?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'lin',
      why: 'The amount is multiplied each time, and the problem gives a target and asks how long. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Down 20% each year: 100% − 20% = 80%, which is 0.8'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '$10,000 ÷ $20,000 = 0.5'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 0.5 = −0.3010 and log 0.8 = −0.0969, so −0.3010 ÷ −0.0969 = 3.11'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from $20,000, 3 multiplications by 0.8 give $10,240, still above the target; 4 multiplications give $8,192, below it. So the target is reached during the 4th year. Rounded, the answer is about 3.1 years'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 3.1 years' },
        {
          id: 's1',
          text: 'About 2.5 years',
          slip: 'you take away the same share of the start each time, so every fall is the same size, which ignores that each fall is smaller than the last.'
        },
        {
          id: 's2',
          text: 'About 2 years',
          slip: 'you give how many times smaller the target is as the number of years.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
  }
]);
