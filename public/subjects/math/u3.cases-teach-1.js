// Basic Math, Unit Three: problems shown inside cards: the opening problem of each kind, the problem whose marked words are tapped, the problem after the question card, the look-alike pair and the two exceptions.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.

FC.cases('math', 'u3', [
  {
    id: 'm3-meet-rearr',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'fence round a field',
    name: 'The field fence',
    outcome: 'rearr',
    text: 'A fencing firm works out the length of fence for a rectangular field this way: add the field’s length and width, then double the total. A field is 7 m wide and needs 38 m of fence. How long is the field?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['add the field’s length and width, then double the total', 'How long is the field?'],
      A1: ['add the field’s length and width, then double the total', 'needs 38 m of fence']
    }
  },

  {
    id: 'm3-tap-rearr',
    use: 'check',
    tier: 'clean',
    setting: 'travel',
    topic: 'beds in a hostel',
    outcome: 'rearr',
    text: 'A hostel works out how many beds to book like this: the number of guests, divided by 2, plus 3 spares. It booked 11 beds. How many guests are coming?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['the number of guests, divided by 2, plus 3 spares', 'How many guests are coming?'],
      A1: ['the number of guests, divided by 2, plus 3 spares', 'It booked 11 beds']
    },
    segments: [
      {
        text: 'A hostel works out how many beds to book like this: the number of guests, divided by 2, plus 3 spares.'
      },
      {
        text: 'It booked 11 beds.',
        note: 'That is the result of the calculation, not the calculation itself.'
      },
      {
        text: 'How many guests are coming?',
        note: 'That is the question, not the calculation.'
      }
    ],
    reason: {
      A1: 'The words {cue:A1} give a rule and the result it came to, with the number of guests left out.'
    }
  },

  {
    id: 'm3-la-plants-rearr',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'five plants and some pots',
    outcome: 'rearr',
    text: 'Mia buys 5 plants at $9 each and some pots at $4 each, and pays $73. How many pots?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['buys 5 plants at $9 each and some pots at $4 each', 'How many pots?'],
      A1: ['buys 5 plants at $9 each and some pots at $4 each', 'pays $73']
    }
  },

  {
    id: 'm3-exc-bill',
    use: 'teach',
    tier: 'misleading',
    setting: 'home',
    topic: 'a bill with a standing charge',
    name: 'The electricity bill',
    outcome: 'rearr',
    text: 'An electricity bill has a standing charge of $8, plus 25 cents for each unit of electricity used. This month’s bill is $38. How many units were used?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: [
        'a standing charge of $8, plus 25 cents for each unit of electricity used',
        'How many units were used?'
      ],
      A1: ['a standing charge of $8, plus 25 cents for each unit of electricity used', 'bill is $38']
    },
    also: ['rate'],
    segments: [
      {
        text: 'An electricity bill has a standing charge of $8, plus 25 cents for each unit of electricity used.'
      },
      {
        text: 'This month’s bill is $38.',
        note: 'That is the result. It does not show whether a charge is added on top.'
      },
      {
        text: 'How many units were used?',
        note: 'That is the question. The words that settle it are in the first sentence.'
      }
    ]
  },

  {
    id: 'm3-meet-prop',
    use: 'teach',
    tier: 'clean',
    setting: 'cooking',
    topic: 'flour for pancakes',
    name: 'The pancake recipe',
    outcome: 'prop',
    text: 'A recipe for pancakes uses 250 g of flour for 10 pancakes. How much flour is needed for 24 pancakes?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['uses 250 g of flour for 10 pancakes', 'How much flour is needed for 24 pancakes?'],
      A1: ['uses 250 g of flour for 10 pancakes', 'needed for 24 pancakes']
    }
  },

  {
    id: 'm3-tap-prop',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'ink for a print shop',
    outcome: 'prop',
    text: 'A print shop uses 2 ink cartridges for every 1,200 pages it prints. How many cartridges does it need for 3,000 pages?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: [
        'uses 2 ink cartridges for every 1,200 pages it prints',
        'How many cartridges does it need for 3,000 pages?'
      ],
      A1: ['uses 2 ink cartridges for every 1,200 pages it prints', 'for 3,000 pages']
    },
    segments: [
      { text: 'A print shop uses 2 ink cartridges for every 1,200 pages it prints.' },
      {
        text: 'How many cartridges does it need for 3,000 pages?',
        note: 'That is the question, not the rate.'
      }
    ],
    reason: {
      A1: 'The words {cue:A1} give so much for so many, 2 cartridges for every 1,200 pages, and a new number of pages, with nothing added on top.'
    }
  },

  {
    id: 'm3-step-dye',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'dye for cloth',
    outcome: 'prop',
    text: 'A dye shop needs 2 liters of dye for every 5 meters of cloth. How much dye is needed for 30 meters of cloth?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: [
        'needs 2 liters of dye for every 5 meters of cloth',
        'How much dye is needed for 30 meters of cloth?'
      ],
      A1: ['needs 2 liters of dye for every 5 meters of cloth', 'for 30 meters of cloth']
    },
    reason: {
      A1: 'The words {cue:A1} give 2 liters for every 5 meters and a new amount of cloth. Nothing is added on top and no result has to be undone, so it is {a:A1.rate}.'
    }
  },

  {
    id: 'm3-meet-simul',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'balls bought for a club',
    name: 'The club’s balls',
    outcome: 'simul',
    text: 'A sports club bought 14 balls, some footballs at $6 each and some volleyballs at $9 each, and spent $96 in all. How many of each did it buy?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'bought 14 balls, some footballs at $6 each and some volleyballs at $9 each',
        'spent $96 in all',
        'How many of each did it buy?'
      ],
      A1: ['bought 14 balls, some footballs at $6 each and some volleyballs at $9 each', 'spent $96 in all']
    }
  },

  {
    id: 'm3-tap-simul',
    use: 'check',
    tier: 'clean',
    setting: 'shopping',
    topic: 'small and large plants',
    outcome: 'simul',
    text: 'A stall sold 11 plants, some small at $3 each and some large at $8 each, and took $58 in all. How many of each size did it sell?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'sold 11 plants, some small at $3 each and some large at $8 each',
        'took $58 in all',
        'How many of each size did it sell?'
      ],
      A1: ['sold 11 plants, some small at $3 each and some large at $8 each', 'took $58 in all']
    },
    segments: [
      {
        text: 'A stall sold 11 plants, some small at $3 each and some large at $8 each, and took $58 in all.'
      },
      {
        text: 'How many of each size did it sell?',
        note: 'That is the question, not the facts.'
      }
    ],
    reason: {
      A1: 'In {cue:A1}, two numbers are missing, and two facts are given about them: 11 plants in all, and $58 in all.'
    }
  },

  {
    id: 'm3-la-plants-simul',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'plants and pots sold',
    outcome: 'simul',
    text: 'A garden center sold 12 items, some plants at $9 each and some pots at $4 each, and took $73 in all. How many plants and how many pots were sold?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'sold 12 items, some plants at $9 each and some pots at $4 each',
        'took $73 in all',
        'How many plants and how many pots were sold?'
      ],
      A1: ['sold 12 items, some plants at $9 each and some pots at $4 each', 'took $73 in all']
    }
  },

  {
    id: 'm3-meet-quad',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'a square rug and a strip',
    name: 'The square rug',
    outcome: 'quad',
    text: 'A square rug is made longer: a shop adds a 2 m strip along one side, so the rug becomes a rectangle with an area of 48 m². How long was each side of the square rug?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['adds a 2 m strip along one side', 'How long was each side of the square rug?'],
      A1: ['adds a 2 m strip along one side', 'an area of 48 m²']
    }
  },
]);
