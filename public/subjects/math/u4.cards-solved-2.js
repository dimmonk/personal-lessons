// Basic Math, Unit Four: the worked examples (part 2): one for the third kind of problem and one for the fourth.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u4', [

  {
    id: 'solved-logsolve-1',
    kind: 'solved',
    outcome: 'logsolve',
    h: 'Worked: how many years until $1,500 becomes $3,000',
    link: 'Here is the procedure for the third kind with real numbers: an account where the interest stays in, and the question is how long until it holds a target. Every step is written out.',
    problem: 'm4-s-logsolve-1',
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 6% each year: 100% + 6% = 106%, which is 1.06',
        why: 'Going up by 6% leaves the account at 106% of what it was, which is 1.06 times as much. Every year the account is multiplied by 1.06, and the {t:multiplier} is the same every year.'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '$3,000 ÷ $1,500 = 2',
        why: 'Only how many times bigger the target is matters, and not the sizes of the start and the target. Any start takes the same number of multiplications to become 2 times bigger. Here $3,000 ÷ $1,500 = 2, so the question becomes: how many times must 1.06 be multiplied to make 2?'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 2 = 0.3010 and log 1.06 = 0.0253, so 0.3010 ÷ 0.0253 = 11.90'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from $1,500, 11 multiplications by 1.06 give about $2,847, still under the target; 12 multiplications give about $3,018, over it. So the target is reached during the 12th year. Rounded, the answer is about 11.9 years',
        why: 'The division gives a count with a decimal part, 11.9, and it is only right if it agrees with a count of whole years, so check it by multiplying.'
      }
    ],
    result: 'The account holds $3,000 after about 11.9 years, which means during the 12th year.',
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
            text: '$3,000 is 2 times $1,500.',
            note: 'That is true, and it is the result of the step before, but it does not say why logs are used or why they are divided.'
          }
        ]
      },
      reason: [
        'Counting how many times 1.06 must be multiplied is hard to do directly. A log makes it easy. The log of a number is how far up a {t:logscale} the number sits: the log of 10 is 1, the log of 100 is 2, and the log of 1,000 is 3, because 100 is 10 × 10 and 1,000 is 10 × 10 × 10. Every time a number is multiplied by 10, its log rises by the same 1. That is the idea of a log: it turns multiplying into adding.',
        'The same holds for any number to multiply by. Each multiplication by 1.06 adds the same amount to the log of the account, and that amount is the log of 1.06, which is 0.0253. The account has to become 2 times bigger, and the log of 2 is 0.3010. So the question is how many times 0.0253 must be added to reach 0.3010. Adding the same number again and again until you reach a total is a division: 0.3010 ÷ 0.0253 = 11.90, which is about 11.9 years.'
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
        working: 'Before: $3.00. After: $3.45',
        why: 'The change is described by two figures, the toll before and the toll after, and everything else about the change is worked out from them.'
      },
      {
        does: 'Say how big the change was',
        working: '$3.45 − $3.00 = $0.45, and $0.45 ÷ $3.00 = 0.15, which is 15% of the old amount',
        why: 'This says how big the change was. It does not say whether the change comes again.'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at $3.45 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the amount after the change forward as it is',
        working: 'In 4 years: $3.45',
        why: 'The toll is $3.45 now and no further change is mentioned, so in 4 years it is still $3.45. The 15% and the $0.45 are facts about the one change, and they are not carried forward.'
      }
    ],
    result: 'In 4 years the toll is $3.45, the same as now. Carrying the $0.45 forward as if it came every year would give $5.25, and carrying the 15% forward as if it came every year would give $6.03: both are far out.',
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
            text: 'The toll was $3.00 before July.',
            note: 'That is true, but it is the toll before the change, and the question is about the toll after it.'
          }
        ]
      },
      reason: [
        'Whether a change repeats is a fact about the problem and not about the change. A rise of 15% could be the first of many, or the only one. Here the problem says the toll “has stayed at $3.45 ever since”, which tells you that the change was made one time and is over, so the toll in 4 years is the toll now.',
        'Had it said “rises by 15% every year” or “rises by $0.45 every year”, it would be a different kind. The words of the problem decide which, and the numbers alone cannot.'
      ]
    }
  }
]);
