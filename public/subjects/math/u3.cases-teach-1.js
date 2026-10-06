// Basic Math, Unit Three: problems shown inside cards: the opening problem of each kind, a second one in another setting, the problem whose marked words are tapped, the problem after the question card, the look-alike pairs and the two exceptions.
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
    id: 'm3-again-rearr',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'wool for a scarf',
    name: 'The scarf',
    outcome: 'rearr',
    text: 'A knitter works out the wool for a scarf this way: multiply its length in meters by 3, then add 1 ball for the fringe. A scarf took 7 balls of wool. How long is it?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['multiply its length in meters by 3, then add 1 ball for the fringe', 'How long is it?'],
      A1: [
        'multiply its length in meters by 3, then add 1 ball for the fringe',
        'A scarf took 7 balls of wool'
      ]
    },
    segments: [
      {
        text: 'A knitter works out the wool for a scarf this way: multiply its length in meters by 3, then add 1 ball for the fringe.'
      },
      {
        text: 'A scarf took 7 balls of wool.',
        note: 'That gives a number to work with, and it matters, but it is not the part you are asked to tap.'
      },
      {
        text: 'How long is it?',
        note: 'That is the question. The words you are asked to tap are in another sentence.'
      }
    ]
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
        note: 'That gives a number to work with, and it matters, but it is not the part you are asked to tap.'
      },
      {
        text: 'How many guests are coming?',
        note: 'That is the question. The words you are asked to tap are in another sentence.'
      }
    ],
    reason: {
      A1: 'The words {cue:A1} give a calculation and the result it came to, and one number in the calculation is left out. Each thing done to that number can be undone, which is {a:A1.formula}.'
    }
  },

  {
    id: 'm3-la-loaf-rearr',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'three loaves and a pastry',
    outcome: 'rearr',
    text: 'At the bakery, Jon buys three of the same loaf and a $2 pastry, and pays $11 in all. How much does one loaf cost?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['buys three of the same loaf and a $2 pastry', 'How much does one loaf cost?'],
      A1: ['buys three of the same loaf and a $2 pastry', 'pays $11 in all']
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
    id: 'm3-la-rug-rearr',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'a rug of known width',
    outcome: 'rearr',
    text: 'A rug is 4 m wide and has an area of 28 m². How long is it?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['A rug is 4 m wide', 'How long is it?'],
      A1: ['A rug is 4 m wide', 'an area of 28 m²']
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
        note: 'That gives a number to work with, and it matters, but it is not the part you are asked to tap.'
      },
      {
        text: 'How many units were used?',
        note: 'That is the question. The words you are asked to tap are in another sentence.'
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
    id: 'm3-again-prop',
    use: 'teach',
    tier: 'clean',
    setting: 'travel',
    topic: 'adults on a school trip',
    name: 'The school trip',
    outcome: 'prop',
    text: 'A school trip needs 4 adults for every 24 children. How many adults are needed for 60 children?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['needs 4 adults for every 24 children', 'How many adults are needed for 60 children?'],
      A1: ['needs 4 adults for every 24 children', 'for 60 children']
    },
    segments: [
      { text: 'A school trip needs 4 adults for every 24 children.' },
      {
        text: 'How many adults are needed for 60 children?',
        note: 'That is the question. The words you are asked to tap are in another sentence.'
      }
    ]
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
        note: 'That is the question. The words you are asked to tap are in another sentence.'
      }
    ],
    reason: {
      A1: 'The words {cue:A1} give so much for so many, 2 cartridges for every 1,200 pages, and a new amount of pages, 3,000. Nothing is added on top and no calculation has a result to undo, so the answer is {a:A1.rate}.'
    }
  },

  {
    id: 'm3-step-dye',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'dye for cloth',
    outcome: 'prop',
    text: 'A dye works needs 2 liters of dye for every 5 meters of cloth. How much dye is needed for 30 meters of cloth?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: [
        'needs 2 liters of dye for every 5 meters of cloth',
        'How much dye is needed for 30 meters of cloth?'
      ],
      A1: ['needs 2 liters of dye for every 5 meters of cloth', 'for 30 meters of cloth']
    },
    reason: {
      A1: 'The words {cue:A1} give so much for so many, 2 liters of dye for every 5 meters of cloth, and a new amount of cloth, 30 meters. Nothing is added on top and no calculation has a result to undo, so the answer is {a:A1.rate}.'
    }
  },

  {
    id: 'm3-la-loaf-prop',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'loaves at a set price',
    outcome: 'prop',
    text: 'At the bakery, four of the same loaf cost $12. How much do ten of them cost?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['four of the same loaf cost $12', 'How much do ten of them cost?'],
      A1: ['four of the same loaf cost $12', 'ten of them']
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
    id: 'm3-again-simul',
    use: 'teach',
    tier: 'clean',
    setting: 'health',
    topic: 'boxes of bandages',
    name: 'The bandage order',
    outcome: 'simul',
    text: 'A clinic ordered 18 boxes of bandages, some small at $4 each and some large at $7 each, and paid $84 in all. How many boxes of each size did it order?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'ordered 18 boxes of bandages, some small at $4 each and some large at $7 each',
        'paid $84 in all',
        'How many boxes of each size did it order?'
      ],
      A1: ['ordered 18 boxes of bandages, some small at $4 each and some large at $7 each', 'paid $84 in all']
    },
    segments: [
      {
        text: 'A clinic ordered 18 boxes of bandages, some small at $4 each and some large at $7 each, and paid $84 in all.'
      },
      {
        text: 'How many boxes of each size did it order?',
        note: 'That is the question. The words you are asked to tap are in another sentence.'
      }
    ]
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
        note: 'That is the question. The words you are asked to tap are in another sentence.'
      }
    ],
    reason: {
      A1: 'In {cue:A1}, two numbers are missing, how many small and how many large, and two facts are stated about them: 11 plants in all and $58 in all. That is {a:A1.totals}.'
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

  {
    id: 'm3-again-quad',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'a rectangular patio',
    name: 'The patio',
    outcome: 'quad',
    text: 'A rectangular patio is 5 m longer than it is wide, and its area is 84 m². How wide is it?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['5 m longer than it is wide', 'How wide is it?'],
      A1: ['5 m longer than it is wide', 'its area is 84 m²']
    },
    segments: [
      { text: 'A rectangular patio is 5 m longer than it is wide, and its area is 84 m².' },
      {
        text: 'How wide is it?',
        note: 'That is the question. The words you are asked to tap are in another sentence.'
      }
    ]
  }
]);
