// Basic Math, Unit Four: fresh problems for later days (part 3): three for each kind, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most
// often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-rt-oneoff-1',
    use: 'return',
    tier: 'clean',
    setting: 'leisure',
    topic: 'entry to a swimming pool',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'The entry to a swimming pool was $5. After a refit it was set at $6.50, and it has stayed at $6.50. What will the entry cost after 3 years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has stayed at $6.50'],
      G1: ['After a refit it was set at $6.50', 'it has stayed at $6.50'],
      G2: ['What will the entry cost after 3 years?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount changing one time and staying where it reached, so no change repeats and the answer is {a:G1.once}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure.'
    },
    not: {
      outcome: 'lin',
      why: 'The change was made one time and the amount has stayed since, so nothing is added again. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: $5.00. After: $6.50'
      },
      {
        does: 'Say how big the change was',
        working: '$6.50 − $5.00 = $1.50, and $1.50 ÷ $5.00 = 0.3, which is 30% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at $6.50 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the amount after the change forward as it is',
        working: 'In 3 years: $6.50'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$6.50' },
        {
          id: 's1',
          text: '$11.00',
          slip: 'you carry the change forward as if it came again every year.'
        },
        {
          id: 's2',
          text: '$14.28',
          slip: 'you carry the percentage forward as if it came again every year.'
        }
      ]
    },
    why: 'A change that came one time, and is not said to come again, is not a pattern, so nothing is carried forward. The amount after the change is the amount at any later time, and a target that it is not already at is never reached unless a new change is made. The size of the change is a fact about the one change, and it is not carried forward.'
  },

  {
    id: 'm4-rt-oneoff-2',
    use: 'return',
    tier: 'clean',
    setting: 'work',
    topic: 'pay for every delivery',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A courier was paid $8 for every delivery. Under a new contract she is paid $10 for every delivery, and the contract fixes it there. After how many years will she be paid $12 for a delivery?',
    route: { M1: ['growth'], G1: ['once'], G2: ['howlong'] },
    cues: {
      M1: ['the contract fixes it there'],
      G1: ['Under a new contract she is paid $10 for every delivery', 'the contract fixes it there'],
      G2: ['After how many years will she be paid $12 for a delivery?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount changing one time and staying where it reached, so no change repeats and the answer is {a:G1.once}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}. For this kind either answer to this question leads to the same procedure.'
    },
    not: {
      outcome: 'expg',
      why: 'The percentage was applied one time, and the amount has stayed since. {o:expg} would be the name if the percentage came again each time.'
    },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: $8. After: $10'
      },
      {
        does: 'Say how big the change was',
        working: '$10 − $8 = $2, and $2 ÷ $8 = 0.25, which is 25% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at $10 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'See whether the amount ever reaches the target',
        working: '$10 is not $12, and nothing changes it again, so it never reaches $12 unless a new change is made'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Never: it stays at $10' },
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
    id: 'm4-rt-oneoff-3',
    use: 'return',
    tier: 'varied',
    setting: 'home',
    topic: 'a broadband bill',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A household’s broadband bill was $30 a month. After switching plans it has been $24 a month, and the new plan fixes it there. What will the bill be after 2 years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['the new plan fixes it there'],
      G1: ['After switching plans it has been $24 a month', 'the new plan fixes it there'],
      G2: ['What will the bill be after 2 years?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount changing one time and staying where it reached, so no change repeats and the answer is {a:G1.once}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure.'
    },
    not: {
      outcome: 'logsolve',
      why: 'The amount changed once and has stopped, so it is not multiplied again and a target is not reached by waiting. {o:logsolve} would be the name if the amount were multiplied each time.'
    },
    steps: [
      {
        does: 'Find the amount before the change and after it',
        working: 'Before: $30.00. After: $24.00'
      },
      {
        does: 'Say how big the change was',
        working: '$30.00 − $24.00 = $6.00, and $6.00 ÷ $30.00 = 0.2, which is 20% of the old amount'
      },
      {
        does: 'Look at what the problem says happens next',
        working: 'The problem says it has stayed at $24.00 since, and mentions no other change, so nothing repeats'
      },
      {
        does: 'Carry the amount after the change forward as it is',
        working: 'In 2 years: $24.00'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$24.00' },
        {
          id: 's1',
          text: '$12.00',
          slip: 'you carry the change forward as if it came again every year.'
        },
        {
          id: 's2',
          text: '$15.36',
          slip: 'you carry the percentage forward as if it came again every year.'
        }
      ]
    },
    why: 'A change that came one time, and is not said to come again, is not a pattern, so nothing is carried forward. The amount after the change is the amount at any later time, and a target that it is not already at is never reached unless a new change is made. The size of the change is a fact about the one change, and it is not carried forward.'
  }
]);
