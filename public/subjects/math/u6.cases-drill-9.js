// Basic Math, Unit Six: the drill’s problems (part 9 of 10): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for each of the key’s questions, and carries its whole working and
// the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dw-sqcube-1',
    use: 'drill',
    tier: 'varied',
    setting: 'shopping',
    topic: 'a television display',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A shop sells a television with a 55 inch display and another of exactly the same shape with a 65 inch display, both measured from one corner to the opposite corner. How many times more display does the bigger television have?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: {
      M1: 'How many times more display does the bigger television have?',
      S1: 'A shop sells a television with a 55 inch display and another of exactly the same shape with a 65 inch display, both measured from one corner to the opposite corner',
      S2: 'How many times more display does the bigger television have?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about how much one of two things of exactly the same shape has, and not a count of ways, an amount through time or a number that a {t:formula} must fit, so the key’s first answer is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, which is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how much area or volume something has, which is {a:S2.room}.'
    },
    not: {
      outcome: 'similar',
      why: 'The problem asks how much area or volume the bigger thing has, not how long one of its parts is. {o:similar} would be the name if it asked for a length on the bigger thing.'
    },
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '65 ÷ 55 = 1.18 (to two decimal places)'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'The display is a surface, so the problem asks about area'
      },
      {
        does: 'Multiply that number of times by itself, with two of them in the product for an area',
        working: '1.18 × 1.18 = 1.3924'
      },
      {
        does: 'Say what it shows',
        working: 'The bigger one has about 1.4 times as much area (display)'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: 'about 1.4 times as much' },
        {
          id: 's1',
          text: 'about 1.2 times as much',
          slip: 'you multiply by the number of times longer only once, as for a length, though an area has two directions, length and width, and both grow.'
        },
        {
          id: 's2',
          text: 'about 1.6 times as much',
          slip: 'you multiply by the number of times longer three times over, as for a volume, though the problem asks about an area, which has only two directions that grow.'
        }
      ],
      right: 'r'
    },
    why: 'If every length is made a number of times longer, both the length and the width of a surface grow by that number of times, so the surface holds that number multiplied by itself as many unit squares. Area grows by the number of times longer, multiplied by itself.',
    wouldChange: 'If the problem asked how long a part of the bigger thing is, and not for an area or a volume, it would be {o:similar}.'
  },

  {
    id: 'm6-dw-sqcube-2',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a fish tank',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A fish tank 50 cm wide holds 30 litres. A second fish tank of exactly the same shape is 100 cm wide. How much water does the second tank hold?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: {
      M1: 'How much water does the second tank hold?',
      S1: 'A fish tank 50 cm wide holds 30 litres. A second fish tank of exactly the same shape is 100 cm wide',
      S2: 'How much water does the second tank hold?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about how much one of two things of exactly the same shape has, and not a count of ways, an amount through time or a number that a {t:formula} must fit, so the key’s first answer is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, which is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how much area or volume something has, which is {a:S2.room}.'
    },
    not: {
      outcome: 'similar',
      why: 'The problem asks how much area or volume the bigger thing has, not how long one of its parts is. {o:similar} would be the name if it asked for a length on the bigger thing.'
    },
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '100 ÷ 50 = 2'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Water fills a solid, so the problem asks about volume'
      },
      {
        does: 'Multiply that number of times by itself, with three of them in the product for a volume',
        working: '2 × 2 × 2 = 8'
      },
      {
        does: 'Multiply the smaller one’s amount by that number of times',
        working: '30 litres × 8 = 240 litres'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '240 litres' },
        {
          id: 's1',
          text: '60 litres',
          slip: 'you multiply by the number of times longer only once, as for a length, though a volume has three directions, length, width and height, and all of them grow.'
        },
        {
          id: 's2',
          text: '120 litres',
          slip: 'you multiply by the number of times longer only twice, as for an area, though a volume has a third direction, height, that grows too.'
        }
      ],
      right: 'r'
    },
    why: 'If every length is made a number of times longer, the length, the width and the height of a solid all grow by that number of times, so the solid holds that number multiplied by itself twice over as many unit cubes. Volume grows by the number of times longer, multiplied by itself twice over.',
    wouldChange: 'If the problem asked how long a part of the bigger thing is, and not for an area or a volume, it would be {o:similar}.'
  },

  {
    id: 'm6-dr-sqcube-1',
    use: 'drill',
    tier: 'clean',
    setting: 'cooking',
    topic: 'jam jars',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A shop sells a small jam jar 8 cm tall and a big jam jar of exactly the same shape that is 24 cm tall. How many times more jam does the big jar hold?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: {
      M1: 'How many times more jam does the big jar hold?',
      S1: 'A shop sells a small jam jar 8 cm tall and a big jam jar of exactly the same shape that is 24 cm tall',
      S2: 'How many times more jam does the big jar hold?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about how much one of two things of exactly the same shape has, and not a count of ways, an amount through time or a number that a {t:formula} must fit, so the key’s first answer is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, which is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how much area or volume something has, which is {a:S2.room}.'
    },
    not: {
      outcome: 'similar',
      why: 'The problem asks how much area or volume the bigger thing has, not how long one of its parts is. {o:similar} would be the name if it asked for a length on the bigger thing.'
    },
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '24 ÷ 8 = 3'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Jam fills a solid, so the problem asks about volume'
      },
      {
        does: 'Multiply that number of times by itself, with three of them in the product for a volume',
        working: '3 × 3 × 3 = 27'
      },
      { does: 'Say what it shows', working: 'The bigger one has 27 times as much volume (jam)' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '27 times as much' },
        {
          id: 's1',
          text: '3 times as much',
          slip: 'you multiply by the number of times longer only once, as for a length, though a volume has three directions, length, width and height, and all of them grow.'
        },
        {
          id: 's2',
          text: '9 times as much',
          slip: 'you multiply by the number of times longer only twice, as for an area, though a volume has a third direction, height, that grows too.'
        }
      ],
      right: 'r'
    },
    why: 'If every length is made a number of times longer, the length, the width and the height of a solid all grow by that number of times, so the solid holds that number multiplied by itself twice over as many unit cubes. Volume grows by the number of times longer, multiplied by itself twice over.',
    wouldChange: 'If the problem asked how long a part of the bigger thing is, and not for an area or a volume, it would be {o:similar}.'
  },

  {
    id: 'm6-dr-sqcube-2',
    use: 'drill',
    tier: 'varied',
    setting: 'health',
    topic: 'a sticking plaster',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A small sticking plaster 3 cm wide uses 2 g of glue. A large plaster of exactly the same shape is 9 cm wide. How much glue does the large plaster use?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: {
      M1: 'How much glue does the large plaster use?',
      S1: 'A small sticking plaster 3 cm wide uses 2 g of glue. A large plaster of exactly the same shape is 9 cm wide',
      S2: 'How much glue does the large plaster use?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about how much one of two things of exactly the same shape has, and not a count of ways, an amount through time or a number that a {t:formula} must fit, so the key’s first answer is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, which is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how much area or volume something has, which is {a:S2.room}.'
    },
    not: {
      outcome: 'similar',
      why: 'The problem asks how much area or volume the bigger thing has, not how long one of its parts is. {o:similar} would be the name if it asked for a length on the bigger thing.'
    },
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '9 ÷ 3 = 3'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Glue covers a surface, so the problem asks about area'
      },
      {
        does: 'Multiply that number of times by itself, with two of them in the product for an area',
        working: '3 × 3 = 9'
      },
      {
        does: 'Multiply the smaller one’s amount by that number of times',
        working: '2 g × 9 = 18 g'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '18 g' },
        {
          id: 's1',
          text: '6 g',
          slip: 'you multiply by the number of times longer only once, as for a length, though an area has two directions, length and width, and both grow.'
        },
        {
          id: 's2',
          text: '54 g',
          slip: 'you multiply by the number of times longer three times over, as for a volume, though the problem asks about an area, which has only two directions that grow.'
        }
      ],
      right: 'r'
    },
    why: 'If every length is made a number of times longer, both the length and the width of a surface grow by that number of times, so the surface holds that number multiplied by itself as many unit squares. Area grows by the number of times longer, multiplied by itself.',
    wouldChange: 'If the problem asked how long a part of the bigger thing is, and not for an area or a volume, it would be {o:similar}.'
  }
]);
