// Basic Math, Unit Four: problems asked between cards: the tap-the-words check after each kind, and the problem in each kind’s worked example.
// use: 'check' = asked between cards; segments are the tappable pieces, and note is shown if a piece is tapped in error. Neither teach nor check cases may appear in the drill.

FC.cases('math', 'u4', [

  {
    id: 'm4-wd-train',
    use: 'check',
    tier: 'clean',
    setting: 'travel',
    topic: 'a train getting closer',
    outcome: 'lin',
    text: 'A train is 340 km from its destination, and it gets 85 km closer every hour. How far from its destination will it be after 3 hours?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['it gets 85 km closer every hour', 'after 3 hours'],
      G1: ['it gets 85 km closer every hour'],
      G2: ['How far from its destination will it be after 3 hours?']
    },
    segments: [
      {
        text: 'A train is 340 km from its destination',
        note: 'That gives the start of the amount. You are asked for the words that say how it changes each time.'
      },
      { text: 'and it gets 85 km closer every hour.' },
      {
        text: 'How far from its destination will it be after 3 hours?',
        note: 'That is the question, and it gives a time or a target. The words that say how the amount changes each time come before it.'
      }
    ],
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the distance going down by the same number every hour, whatever it has reached so far, so the answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
    }
  },

  {
    id: 'm4-wd-dose',
    use: 'check',
    tier: 'clean',
    setting: 'health',
    topic: 'a dose in the blood',
    outcome: 'expg',
    text: 'A patient is given 160 mg of a medicine. Every hour the amount in the blood falls to half of what it was. How much will be in the blood after 3 hours?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['the amount in the blood falls to half of what it was', 'after 3 hours'],
      G1: ['falls to half of what it was'],
      G2: ['How much will be in the blood after 3 hours?']
    },
    segments: [
      {
        text: 'A patient is given 160 mg of a medicine.',
        note: 'That gives the start of the amount. You are asked for the words that say how it changes each time.'
      },
      { text: 'Every hour the amount in the blood falls to half of what it was.' },
      {
        text: 'How much will be in the blood after 3 hours?',
        note: 'That is the question, and it gives a time or a target. The words that say how the amount changes each time come before it.'
      }
    ],
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every hour, here a halving, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
    }
  },

  {
    id: 'm4-wd-cafe',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'coffees sold in a café',
    outcome: 'logsolve',
    text: 'A café sells 200 coffees a day, and its daily sales grow by 10% every month. After how many months will it sell 400 coffees a day?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: [
        'its daily sales grow by 10% every month',
        'After how many months will it sell 400 coffees a day?'
      ],
      G1: ['its daily sales grow by 10% every month'],
      G2: ['After how many months will it sell 400 coffees a day?']
    },
    segments: [
      {
        text: 'A café sells 200 coffees a day, and its daily sales grow by 10% every month.',
        note: 'That gives the start and how the amount changes. You are asked for the words that say what the problem wants to know.'
      },
      { text: 'After how many months will it sell 400 coffees a day?' }
    ],
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every month, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}.'
    }
  },

  {
    id: 'm4-wd-parking',
    use: 'check',
    tier: 'clean',
    setting: 'travel',
    topic: 'a parking fee',
    outcome: 'oneoff',
    text: 'A parking fee was $1.50 an hour. In June it rose to $2.00 an hour, and it has not changed since. What will it cost an hour in 3 years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has not changed since', 'in 3 years'],
      G1: ['In June it rose to $2.00 an hour', 'it has not changed since'],
      G2: ['What will it cost an hour in 3 years?']
    },
    segments: [
      {
        text: 'A parking fee was $1.50 an hour.',
        note: 'That gives the amount before the change. You are asked for the words that say what happens to the amount after it.'
      },
      { text: 'In June it rose to $2.00 an hour, and it has not changed since.' },
      {
        text: 'What will it cost an hour in 3 years?',
        note: 'That is the question, and it gives a time. The words that say what happens to the amount come before it.'
      }
    ],
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount changing one time and staying where it reached, so no change repeats and the answer is {a:G1.once}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
    }
  },

  {
    id: 'm4-s-lin-2',
    use: 'teach',
    tier: 'clean',
    setting: 'health',
    topic: 'a hospital drip bag',
    kind: 'problem',
    outcome: 'lin',
    text: 'A hospital drip bag holds 1,000 ml of fluid at the start, and it empties by 125 ml every hour. After how many hours will 250 ml be left in the bag?'
  },

  {
    id: 'm4-s-expg-1',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'orders at a bakery',
    kind: 'problem',
    outcome: 'expg',
    text: 'A bakery takes 250 orders this week, and the number of orders grows by 20% every week. About how many orders will it take after 4 weeks?'
  },

  {
    id: 'm4-s-logsolve-1',
    use: 'teach',
    tier: 'clean',
    setting: 'money',
    topic: 'a savings goal',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A saver has $1,500 in an account that pays 6% interest a year, and she leaves all the interest in the account. After how many years will the account hold $3,000?'
  },

  {
    id: 'm4-s-oneoff-1',
    use: 'teach',
    tier: 'clean',
    setting: 'travel',
    topic: 'a bridge toll',
    kind: 'problem',
    outcome: 'oneoff',
    text: 'A bridge toll was $3.00 for years. In July it rose to $3.45, and it has stayed at $3.45 ever since. What toll will drivers pay in 4 years?'
  }
]);
