// Basic Math, Unit Four: the problems of the worked examples and the problems the learner finishes in a check (part 2).
// A worked example's problem carries only the problem; its working is on the card. A check's problem carries the whole working,
// so that the app can show it up to the last step, or not at all, and name the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-ck-oneoff-last',
    use: 'check',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a season ticket',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A season ticket cost $300 for years. This year it was set at $360, and the club has promised to keep it at $360. What will it cost after 3 years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: $300. After: $360'
      },
      {
        does: 'Say how big the change was',
        working: '$360 − $300 = $60, and $60 ÷ $300 = 0.2, which is 20% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at $360 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the amount after the change forward as it is',
        working: 'In 3 years: $360'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$360' },
        {
          id: 's1',
          text: '$540',
          slip: 'you carry the change forward as if it came again every year.'
        },
        {
          id: 's2',
          text: '$622.08',
          slip: 'you carry the percentage forward as if it came again every year.'
        }
      ]
    },
    why: 'A change that came one time, and is not said to come again, is not a pattern, so nothing is carried forward. The amount after the change is the amount at any later time, and a target that it is not already at is never reached unless a new change is made. The size of the change is a fact about the one change, and it is not carried forward.'
  },

  {
    id: 'm4-ck-oneoff-whole',
    use: 'check',
    tier: 'clean',
    setting: 'health',
    topic: 'a hospital parking lot',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A hospital parking lot charged $2 an hour. Since last month it has charged $3 an hour, and the hospital has fixed it there. After how many years will it charge $5 an hour?',
    route: { M1: ['growth'], G1: ['once'], G2: ['howlong'] },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: $2. After: $3'
      },
      {
        does: 'Say how big the change was',
        working: '$3 − $2 = $1, and $1 ÷ $2 = 0.5, which is 50% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at $3 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'See whether the amount ever reaches the target',
        working: '$3 is not $5, and nothing changes it again, so it never reaches $5 unless a new change is made'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Never: it stays at $3' },
        {
          id: 's1',
          text: 'About 2.0 years',
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
  }
]);
