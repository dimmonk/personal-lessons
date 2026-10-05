// Basic Math, Unit Four: the worked examples (part 2). Two for each kind of problem, in different areas of life.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u4', [

  {
    id: 'solved-logsolve-1',
    kind: 'solved',
    outcome: 'logsolve',
    h: 'Worked: how many years until €1,500 becomes €3,000',
    link: 'Here is the procedure for the third kind with real numbers: an account where the interest stays in, and the question is how long until it holds a target. Every step is written out.',
    problem: 'm4-s-logsolve-1',
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 6% each year: 100% + 6% = 106%, which is 1.06',
        why: 'Going up by 6% leaves the account at 106% of what it was, which is 1.06 times as much. Every year the account is multiplied by 1.06, and the {t:multiplier} is the same every year, just as in the problem that asked for the amount.'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '€3,000 ÷ €1,500 = 2',
        why: 'Only how many times bigger the target is matters, and not the sizes of the start and the target. Any start takes the same number of multiplications to become 2 times bigger. Here €3,000 ÷ €1,500 = 2, so the question becomes: how many times must 1.06 be multiplied to make 2?'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 2 = 0.3010 and log 1.06 = 0.0253, so 0.3010 ÷ 0.0253 = 11.90'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from €1,500, 11 multiplications by 1.06 give about €2,847, still under the target; 12 multiplications give about €3,018, over it. So the target is reached during the 12th year. Rounded, the answer is about 11.9 years',
        why: 'The division gives a count with a decimal part, 11.9, and it is only right if it agrees with a count of whole years. Multiplying €1,500 by 1.06 eleven times gives about €2,847, which is under €3,000, and twelve times gives about €3,018, which is over it. So the account passes €3,000 during the 12th year, and 11.9 says where in that year.'
      }
    ],
    result: 'The account holds €3,000 after about 11.9 years, which means during the 12th year. Adding 6% of the start, €90, every year, as if the interest did not grow, would have taken 16.7 years, which is far too slow.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'The log of a number turns multiplying into adding, so the number of multiplications is the log of how many times bigger the target is, divided by the log of the number multiplied by each time.'
          },
          {
            id: 'y',
            text: 'log 2 = 0.3010 and log 1.06 = 0.0253.',
            note: 'That is true, and they are the figures a calculator gives, but they do not say why the first is divided by the second.'
          },
          {
            id: 'z',
            text: '€3,000 is 2 times €1,500.',
            note: 'That is true, and it is the result of the step before, but it does not say why logs are used or why they are divided.'
          }
        ]
      },
      reason: [
        'Counting how many times 1.06 must be multiplied is hard to do directly. A log makes it easy. The log of a number is how far up a {t:logscale} the number sits: the log of 10 is 1, the log of 100 is 2, and the log of 1,000 is 3, because 100 is 10 × 10 and 1,000 is 10 × 10 × 10. Every time a number is multiplied by 10, its log rises by the same 1. That is the idea of a log: it turns multiplying into adding.',
        'The same holds for any number to multiply by. Each multiplication by 1.06 adds the same amount to the log of the account, and that amount is the log of 1.06, which is 0.0253. The account has to become 2 times bigger, and the log of 2 is 0.3010. So the question is how many times 0.0253 must be added to reach 0.3010. Adding the same number again and again until you reach a total is a division: 0.3010 ÷ 0.0253 = 11.90, which is about 11.9 years.',
        'That is why one division of two logs counts the multiplications. A calculator’s log button gives the two logs, and you do the division.'
      ]
    }
  },

  {
    id: 'solved-logsolve-2',
    kind: 'solved',
    outcome: 'logsolve',
    h: 'Worked again: how many days for mould to cover 500 cm²',
    link: 'The same procedure in a different story, with a doubling: there is no percentage to turn into a decimal, because the problem gives the number multiplied by each time directly.',
    problem: 'm4-s-logsolve-2',
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Doubles each day: multiplied by 2',
        why: 'Doubling is multiplying by 2, so the {t:multiplier} is 2 every day. There is no percentage to turn into a decimal here, because a doubling already names the number.'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '500 ÷ 4 = 125'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 125 = 2.0969 and log 2 = 0.3010, so 2.0969 ÷ 0.3010 = 6.97',
        why: 'This is the same step as for the savings: the log of how many times bigger the target is, divided by the log of the {t:multiplier}. Each doubling adds the same amount, log 2, which is 0.3010, to the log of the patch. The patch has to become 125 times bigger, and the log of 125 is 2.0969. So 2.0969 ÷ 0.3010 = 6.97 says how many doublings it takes, and rounded that is 7.0.'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from 4, 6 multiplications by 2 give 256 cm², still under the target; 7 multiplications give 512 cm², over it. So the target is reached during the 7th day. Rounded, the answer is about 7.0 days',
        why: 'After 6 days the patch covers 256 cm², which is under 500 cm². After 7 days it covers 512 cm², which is over it. So the patch passes 500 cm² just before the end of the 7th day, and 7.0 days agrees with that.'
      }
    ],
    result: 'The mould covers 500 cm² after about 7 days: it covers 256 cm² after 6 days and 512 cm² after 7. Adding the first day’s 4 cm² every day, as if the patch grew by the same number each time, would take 124 days.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'Every doubling doubles whatever the patch is, so a patch of 4 cm² and a patch of 40 cm² take the same number of doublings to become 125 times bigger; only how many times bigger matters.'
          },
          {
            id: 'y',
            text: '500 ÷ 4 = 125.',
            note: 'That is true, and it is the working of this step, but it does not say why the step is a division of the target by the start.'
          },
          {
            id: 'z',
            text: 'The patch doubles every day.',
            note: 'That is true, and it is what the problem says, but it does not say why the start is divided out.'
          }
        ]
      },
      reason: [
        'Think of the patch as 4 cm², and then as 40 cm² on another loaf. After a day the first is 8 and the second is 80; after two days 16 and 160. Each has become 2 times bigger after one day, and 4 times bigger after two. The number of days it takes to become 125 times bigger is the same for both, because doubling does the same thing to both: it makes each twice as big as it was.',
        'So the start does not matter once you know how many times bigger the target is. 500 ÷ 4 = 125, and the question becomes: how many doublings make something 125 times bigger? That is the same question as in the savings problem, where the target was 2 times bigger, with a different {t:multiplier}.'
      ]
    }
  },

  {
    id: 'solved-oneoff-1',
    kind: 'solved',
    outcome: 'oneoff',
    h: 'Worked: a bridge toll in 4 years',
    link: 'Here is the procedure for the fourth kind with real numbers: a toll that rose one time and has stayed there. Every step is written out.',
    problem: 'm4-s-oneoff-1',
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: €3.00. After: €3.45',
        why: 'The change is described by two figures, the toll before and the toll after. Both are written down first, because everything else about the change is worked out from them.'
      },
      {
        does: 'Say how big the change was',
        working: '€3.45 − €3.00 = €0.45, and €0.45 ÷ €3.00 = 0.15, which is 15% of the old amount',
        why: 'The size of the change, €0.45, is the after figure take away the before figure. As a share of the old toll it is €0.45 ÷ €3.00 = 0.15, which is 15%. This says how big the change was. It does not say whether the change comes again.'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at €3.45 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the amount after the change forward as it is',
        working: 'In 4 years: €3.45',
        why: 'The toll is €3.45 now and no further change is mentioned, so in 4 years it is still €3.45. The 15% and the €0.45 are facts about the one change, and they are not carried forward.'
      }
    ],
    result: 'In 4 years the toll is €3.45, the same as now. Carrying the €0.45 forward as if it came every year would give €5.25, and carrying the 15% forward as if it came every year would give €6.03: both are far out.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'A change that came one time and is not said to come again gives nothing to carry forward, so what the toll is in 4 years is what it is now.'
          },
          {
            id: 'y',
            text: 'The toll rose by 15%.',
            note: 'That is true, but a rise of 15% tells you how big the change was, and not whether it comes again.'
          },
          {
            id: 'z',
            text: 'The toll was €3.00 before July.',
            note: 'That is true, but it is the toll before the change, and the question is about the toll after it.'
          }
        ]
      },
      reason: [
        'Whether a change repeats is a fact about the problem and not about the change. A rise of 15% could be the first of many, or the only one. Here the problem says the toll “has stayed at €3.45 ever since”, which tells you that the change was made one time and is over. There is no pattern, so the toll in 4 years is the toll now.',
        'If the problem had said “rises by 15% every year”, it would be a different problem, and the toll would be multiplied by 1.15 each year. If it had said “rises by €0.45 every year”, it would be a different problem again, and €0.45 would be added each year. The words of the problem decide which, and the numbers alone cannot.'
      ]
    }
  },

  {
    id: 'solved-oneoff-2',
    kind: 'solved',
    outcome: 'oneoff',
    h: 'Worked again: pay after a promotion, and a target it never reaches',
    link: 'The same procedure in a different story, this time asked the other way: the problem gives a target for the pay and asks how long until it gets there. For this kind the answer can be that it never does.',
    problem: 'm4-s-oneoff-2',
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: €15. After: €18',
        why: 'The two figures, the pay before the promotion and the pay after it, are written down first, as in the problem before.'
      },
      {
        does: 'Say how big the change was',
        working: '€18 − €15 = €3, and €3 ÷ €15 = 0.2, which is 20% of the old amount',
        why: 'The size of the change is €18 − €15 = €3, and as a share of the old pay it is €3 ÷ €15 = 0.2, which is 20%. This says how big the one change was.'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'Her pay is fixed at €18 an hour from now on, so no further change is coming',
        why: 'The problem says the pay is fixed at €18 an hour from now on. That one sentence is what makes this kind: the change is over, and nothing in the problem makes it come again.'
      },
      {
        does: 'See whether the amount ever reaches the target',
        working: '€18 is not €24, and nothing changes it again, so it never reaches €24 unless a new change is made'
      }
    ],
    result: 'She never reaches €24 an hour on this pay: it is fixed at €18. The answer “2 years”, from adding the €3 again every year, treats a change that happened one time as one that repeats.',
    hold: {
      step: 3,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'An amount that has stopped changing stays where it is, so it reaches a target only if it is already there; one that is not there never gets there.'
          },
          {
            id: 'y',
            text: '€24 is €6 more than €18.',
            note: 'That is true, but it measures the gap, and the gap does not close, because nothing is moving the pay.'
          },
          {
            id: 'z',
            text: 'The pay rose by 20%.',
            note: 'That is true, but it is about the one change, which is over, and it does not say whether the target is reached.'
          }
        ]
      },
      reason: [
        'To reach a target, an amount has to keep moving towards it. An amount that keeps changing, by the same number or by the same share, gets there sooner or later if the target is in the direction it moves. But an amount that changed one time and stopped is not moving. The gap between €18 and €24 is €6, and nothing in the problem makes that gap smaller.',
        'So the honest answer is “never, unless a new change is made”, and it is not a number of years. Dividing the gap by the old rise, €6 ÷ €3 = 2 years, would treat the €3 as if it came every year, and the problem says it does not.'
      ]
    }
  }
]);
