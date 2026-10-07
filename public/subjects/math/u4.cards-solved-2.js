// Basic Math, Unit Four: the worked examples (part 2): one for Logarithm and one for A one-time change.
// Every step says what to do, with its working and a short reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u4', [

  {
    id: 'solved-logsolve-1',
    kind: 'solved',
    outcome: 'logsolve',
    h: 'Worked: how many years until $1,500 becomes $3,000',
    link: 'Here are the steps for {o:logsolve} with real numbers: an account where the interest stays in, and the question is how long until it holds a target.',
    problem: 'm4-s-logsolve-1',
    steps: [
      {
        does: 'Turn the change into the number you multiply by each time',
        working: 'Up 6% each year: 100% + 6% = 106%, which is 1.06',
        why: 'Up 6% leaves the account at 106% of what it was, which is 1.06 times as much. Every year it is multiplied by 1.06, and that is the {t:multiplier}.'
      },
      {
        does: 'Divide the target by the start, to see how many times bigger it must get',
        working: '$3,000 ÷ $1,500 = 2',
        why: 'Only how many times bigger the target is matters, not the dollar amounts. So the question becomes: how many times must 1.06 be multiplied to make 2?'
      },
      {
        does: 'Use the log button: divide the log of that number by the log of the number you multiply by',
        working: 'log 2 = 0.3010 and log 1.06 = 0.0253, so 0.3010 ÷ 0.0253 = 11.90'
      },
      {
        does: 'Check it with whole numbers of times, then round',
        working: 'Starting from $1,500, 11 multiplications by 1.06 give about $2,847, still under the target; 12 multiplications give about $3,018, over it. So the target is reached during the 12th year. Rounded, the answer is about 11.9 years',
        why: 'The division gives a count with a decimal part, so check it against whole years by multiplying.'
      }
    ],
    result: 'The account holds $3,000 after about 11.9 years, which is during the 12th year.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'A log turns multiplying into adding, so the number of multiplications is one log divided by the other.'
          },
          {
            id: 'y',
            text: 'log 2 = 0.3010 and log 1.06 = 0.0253, from the calculator.',
            note: 'That is true, but those are the numbers, not the reason for dividing them.'
          },
          {
            id: 'z',
            text: '$3,000 is 2 times $1,500, so the target is double the start.',
            note: 'That is true, but it is the step before, not the reason for using logs.'
          }
        ]
      },
      reason: [
        'Counting how many times 1.06 must be multiplied is hard to do directly, and a log makes it easy. The log of a number is how far up a {t:logscale} it sits: the log of 10 is 1, the log of 100 is 2 and the log of 1,000 is 3. Every time a number is multiplied by 10, its log goes up by 1. So a log turns multiplying into adding.',
        'The same holds for 1.06: each multiplication by 1.06 adds 0.0253 to the log of the account. To become 2 times bigger, the log has to rise by 0.3010. So the question is how many times 0.0253 must be added to reach 0.3010. That is a division: 0.3010 ÷ 0.0253 = 11.90.'
      ]
    }
  },

  {
    id: 'solved-oneoff-1',
    kind: 'solved',
    outcome: 'oneoff',
    h: 'Worked: a bridge toll in 4 years',
    link: 'Here are the steps for {o:oneoff} with real numbers: a toll that rose once and has stayed there.',
    problem: 'm4-s-oneoff-1',
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: $3.00. After: $3.45',
        why: 'Everything else about the change is worked out from these two amounts.'
      },
      {
        does: 'Say how big the change was',
        working: '$3.45 − $3.00 = $0.45, and $0.45 ÷ $3.00 = 0.15, which is 15% of the old amount',
        why: 'This says how big the change was, not whether it comes again.'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at $3.45 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the new amount forward as it is',
        working: 'In 4 years: $3.45',
        why: 'The toll is $3.45 now and no other change is mentioned, so in 4 years it is still $3.45. The 15% and the $0.45 describe that one change only.'
      }
    ],
    result: 'In 4 years the toll is $3.45, the same as now. Carrying $0.45 forward every year would give $5.25, and carrying the 15% forward every year would give $6.03. Both are far out.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        answer: 'x',
        choices: [
          {
            id: 'x',
            text: 'A change made once, and not said to come again, leaves nothing to carry forward.'
          },
          {
            id: 'y',
            text: 'The toll rose by 15%.',
            note: 'That is true, but 15% says how big the change was, not whether it comes again.'
          },
          {
            id: 'z',
            text: 'The toll was $3.00 before July.',
            note: 'That is true, but it is the toll before the change, and the question is about after it.'
          }
        ]
      },
      reason: [
        'Whether a change repeats is a fact about the problem, not about the change. A 15% rise could be the first of many, or the only one. Here the problem says the toll “has stayed at $3.45 ever since”, so the change happened once and is over.',
        'If it had said “rises by 15% every year” or “rises by $0.45 every year”, it would be a different name. The words of the problem decide, and the numbers alone cannot.'
      ]
    }
  }
]);
