// Basic Math, Unit Four: problems shown inside cards (part 1): the two words, the first and second problem of each kind, the problem
// in the check after each kind, the look-alike pairs (the same story, a different kind), the exception, and the checks on the key’s two questions.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// route: { M1, G1, G2 } gives the accepted answer to each question; cues are the exact words in the text that decide it; segments are the
// tappable pieces for "tap the words" prompts, and note is shown if a piece is tapped in error. A case’s text is free wording: it retypes no key line.

FC.cases('math', 'u4', [

  {
    id: 'm4-wd-novel',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a novel in a bookshop',
    name: 'The bookshop novel',
    text: 'A bookshop sells a novel for €20. In January the owner puts the price up by 5%, and she works the new price out in two ways. First she takes 5% of €20, which is €1, and adds it: €20 + €1 = €21. Second she multiplies €20 by 1.05, and also gets €21. In the summer sale the same novel goes down by 15%, and she multiplies €20 by 0.85 and gets €17.'
  },

  {
    id: 'm4-wd-museum',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a museum chart of weights',
    name: 'The museum chart',
    text: 'A museum draws a chart of animal weights. The gridlines up the side are labelled 1 g, 10 g, 100 g, 1,000 g and 10,000 g, and they are drawn the same distance apart. A mouse of 10 g sits on the 10 g gridline. A hen of 1,000 g sits two gridlines above the mouse, so a visitor who reads the chart works out that the hen is 10 × 10 = 100 times as heavy.'
  },

  {
    id: 'm4-wd-jar',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'a toddler’s jar',
    name: 'The toddler’s jar',
    outcome: 'lin',
    text: 'A toddler has a jar with €12 in it. Every week her grandmother puts in €3 more, and nothing is ever taken out. How much will the jar hold after 10 weeks?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['Every week her grandmother puts in €3 more', 'after 10 weeks'],
      G1: ['Every week her grandmother puts in €3 more'],
      G2: ['How much will the jar hold after 10 weeks?']
    }
  },

  {
    id: 'm4-wd-boxes',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'boxes in a warehouse',
    name: 'The warehouse',
    outcome: 'lin',
    text: 'A warehouse holds 500 boxes. Every day a lorry delivers 40 more, and none leave. How many boxes will the warehouse hold after 9 days?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['Every day a lorry delivers 40 more', 'after 9 days'],
      G1: ['Every day a lorry delivers 40 more'],
      G2: ['How many boxes will the warehouse hold after 9 days?']
    },
    segments: [
      {
        text: 'A warehouse holds 500 boxes.',
        note: 'That gives the start of the amount. You are asked for the words that say how it changes each time.'
      },
      { text: 'Every day a lorry delivers 40 more, and none leave.' },
      {
        text: 'How many boxes will the warehouse hold after 9 days?',
        note: 'That is the question, and it gives a time or a target. The words that say how the amount changes each time come before it.'
      }
    ]
  },

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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the distance going down by the same number every hour, whatever it has reached so far, so the key’s answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the key’s answer is {a:G2.willbe}.'
    }
  },

  {
    id: 'm4-wd-savings',
    use: 'teach',
    tier: 'clean',
    setting: 'money',
    topic: 'savings and interest',
    name: 'The savings account',
    outcome: 'expg',
    text: 'A saver puts €2,000 into an account that pays 4% interest a year. She leaves all the interest in the account. How much will she have after 3 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['pays 4% interest a year', 'after 3 years'],
      G1: ['pays 4% interest a year', 'leaves all the interest in the account'],
      G2: ['How much will she have after 3 years?']
    }
  },

  {
    id: 'm4-wd-clip',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'views of a video clip',
    name: 'The video clip',
    outcome: 'expg',
    text: 'A video clip has 150 views on its first day. Each day the number of views doubles. How many views will it have after 5 days?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['Each day the number of views doubles', 'after 5 days'],
      G1: ['Each day the number of views doubles'],
      G2: ['How many views will it have after 5 days?']
    },
    segments: [
      {
        text: 'A video clip has 150 views on its first day.',
        note: 'That gives the start of the amount. You are asked for the words that say how it changes each time.'
      },
      { text: 'Each day the number of views doubles.' },
      {
        text: 'How many views will it have after 5 days?',
        note: 'That is the question, and it gives a time or a target. The words that say how the amount changes each time come before it.'
      }
    ]
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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every hour, here a halving, so the key’s answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the key’s answer is {a:G2.willbe}.'
    }
  },

  {
    id: 'm4-wd-dish',
    use: 'teach',
    tier: 'clean',
    setting: 'health',
    topic: 'bacteria in a dish',
    name: 'The bacteria dish',
    outcome: 'logsolve',
    text: 'A lab dish holds 500 bacteria, and the number grows by 20% every hour. How many hours will it take to reach 1,000 bacteria?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['the number grows by 20% every hour', 'How many hours will it take to reach 1,000 bacteria?'],
      G1: ['the number grows by 20% every hour'],
      G2: ['How many hours will it take to reach 1,000 bacteria?']
    }
  },

  {
    id: 'm4-wd-followers',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'followers of an account',
    name: 'The new account',
    outcome: 'logsolve',
    text: 'A new account has 1,000 followers, and the number grows by 25% every week. After how many weeks will it have 3,000 followers?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['the number grows by 25% every week', 'After how many weeks will it have 3,000 followers?'],
      G1: ['the number grows by 25% every week'],
      G2: ['After how many weeks will it have 3,000 followers?']
    },
    segments: [
      {
        text: 'A new account has 1,000 followers, and the number grows by 25% every week.',
        note: 'That gives the start and how the amount changes. You are asked for the words that say what the problem wants to know.'
      },
      { text: 'After how many weeks will it have 3,000 followers?' }
    ]
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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every month, so the key’s answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the key’s answer is {a:G2.howlong}.'
    }
  },

  {
    id: 'm4-wd-gym',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a gym fee',
    name: 'The gym fee',
    outcome: 'oneoff',
    text: 'A gym charged €30 a month for years. In March it started charging €36 a month, and it has charged €36 a month ever since. What will the gym charge after 2 more years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has charged €36 a month ever since', 'after 2 more years'],
      G1: ['In March it started charging €36 a month', 'it has charged €36 a month ever since'],
      G2: ['What will the gym charge after 2 more years?']
    }
  },

  {
    id: 'm4-wd-rent',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'rent under a lease',
    name: 'The flat’s rent',
    outcome: 'oneoff',
    text: 'A flat’s rent was €800 a month. Under a new lease it has been €860 a month since January, and the lease says the rent will stay at €860. What will the rent be 18 months from now?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['the lease says the rent will stay at €860', '18 months from now'],
      G1: [
        'Under a new lease it has been €860 a month since January',
        'the lease says the rent will stay at €860'
      ],
      G2: ['What will the rent be 18 months from now?']
    },
    segments: [
      {
        text: 'A flat’s rent was €800 a month.',
        note: 'That gives the amount before the change. You are asked for the words that say what happens to the amount after it.'
      },
      {
        text: 'Under a new lease it has been €860 a month since January, and the lease says the rent will stay at €860.'
      },
      {
        text: 'What will the rent be 18 months from now?',
        note: 'That is the question, and it gives a time. The words that say what happens to the amount come before it.'
      }
    ]
  },

  {
    id: 'm4-wd-parking',
    use: 'check',
    tier: 'clean',
    setting: 'travel',
    topic: 'a parking fee',
    outcome: 'oneoff',
    text: 'A parking fee was €1.50 an hour. In June it rose to €2.00 an hour, and it has not changed since. What will it cost an hour in 3 years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has not changed since', 'in 3 years'],
      G1: ['In June it rose to €2.00 an hour', 'it has not changed since'],
      G2: ['What will it cost an hour in 3 years?']
    },
    segments: [
      {
        text: 'A parking fee was €1.50 an hour.',
        note: 'That gives the amount before the change. You are asked for the words that say what happens to the amount after it.'
      },
      { text: 'In June it rose to €2.00 an hour, and it has not changed since.' },
      {
        text: 'What will it cost an hour in 3 years?',
        note: 'That is the question, and it gives a time. The words that say what happens to the amount come before it.'
      }
    ],
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the key’s first answer is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount changing one time and staying where it reached, so no change repeats and the key’s answer is {a:G1.once}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the key’s answer is {a:G2.willbe}.'
    }
  }
]);
