// Basic Math, Unit Four: problems shown inside cards: the two words, the first problem of each kind, and the exception.
// use: 'teach' = shown in a card with its reasoning. It may not appear in the drill.
// route: { M1, G1, G2 } gives the accepted answer to each question; cues are the exact words in the text that decide it. A case’s text is free wording: it retypes no key line.

FC.cases('math', 'u4', [

  {
    id: 'm4-wd-novel',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a novel in a bookshop',
    name: 'The bookshop novel',
    text: 'A bookshop sells a novel for $20. In January the owner puts the price up by 5%, and she works the new price out in two ways. First she takes 5% of $20, which is $1, and adds it: $20 + $1 = $21. Second she multiplies $20 by 1.05, and also gets $21. In the summer sale the same novel goes down by 15%, and she multiplies $20 by 0.85 and gets $17.'
  },

  {
    id: 'm4-wd-museum',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a museum chart of weights',
    name: 'The museum chart',
    text: 'A museum draws a chart of animal weights. The gridlines up the side are labeled 1 g, 10 g, 100 g, 1,000 g and 10,000 g, and they are drawn the same distance apart. A mouse of 10 g sits on the 10 g gridline. A hen of 1,000 g sits two gridlines above the mouse, so a visitor who reads the chart works out that the hen is 10 × 10 = 100 times as heavy.'
  },

  {
    id: 'm4-wd-jar',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'a toddler’s jar',
    name: 'The toddler’s jar',
    outcome: 'lin',
    text: 'A toddler has a jar with $12 in it. Every week her grandmother puts in $3 more, and nothing is ever taken out. How much will the jar hold after 10 weeks?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['Every week her grandmother puts in $3 more', 'after 10 weeks'],
      G1: ['Every week her grandmother puts in $3 more'],
      G2: ['How much will the jar hold after 10 weeks?']
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
    text: 'A saver puts $2,000 into an account that pays 4% interest a year. She leaves all the interest in the account. How much will she have after 3 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['pays 4% interest a year', 'after 3 years'],
      G1: ['pays 4% interest a year', 'leaves all the interest in the account'],
      G2: ['How much will she have after 3 years?']
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
    id: 'm4-wd-gym',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a gym fee',
    name: 'The gym fee',
    outcome: 'oneoff',
    text: 'A gym charged $30 a month for years. In March it started charging $36 a month, and it has charged $36 a month ever since. What will the gym charge after 2 more years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has charged $36 a month ever since', 'after 2 more years'],
      G1: ['In March it started charging $36 a month', 'it has charged $36 a month ever since'],
      G2: ['What will the gym charge after 2 more years?']
    }
  },

  {
    id: 'm4-ex-bond',
    use: 'teach',
    tier: 'misleading',
    setting: 'money',
    topic: 'interest paid out yearly',
    name: 'The bond that pays out',
    outcome: 'lin',
    text: 'A man buys a bond for $5,000 that pays 3% interest a year. The interest is paid out to him each year, and the $5,000 itself never changes. How much interest will he have been paid in total after 8 years?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['The interest is paid out to him each year', 'after 8 years'],
      G1: ['The interest is paid out to him each year'],
      G2: ['How much interest will he have been paid in total after 8 years?']
    },
    segments: [
      {
        text: 'A man buys a bond for $5,000 that pays 3% interest a year.',
        note: 'This has a percentage in it, so it looks like {o:expg}. The words that settle it are about what happens to the interest.'
      },
      {
        text: 'The interest is paid out to him each year, and the $5,000 itself never changes.'
      },
      {
        text: 'How much interest will he have been paid in total after 8 years?',
        note: 'That is the question. The words that say how the amount changes each time come before it.'
      }
    ]
  }
]);
