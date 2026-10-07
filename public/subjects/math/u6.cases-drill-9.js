// Basic Math, Unit Six: the drill’s problems, all asked as whole problems (what it gives, what it asks, the kind, then the solving).
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
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
      M1: 'The problem asks {cue:M1}, an amount for one of two things of the same shape. Nothing in it follows an amount over time or counts ways.',
      S1: 'The words {cue:S1} give two things of the same shape, a small one and a big one.',
      S2: 'The words {cue:S2} ask how much jam the big jar holds: room inside, so a volume.'
    },
    not: {
      outcome: 'similar',
      why: 'It asks how much the bigger one covers or holds, not how long a part is. If it asked for a length on the bigger one, it would be {o:similar}.'
    },
    steps: [
      {
        does: 'Work out how many times longer the bigger one is',
        working: '24 ÷ 8 = 3'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Jam fills a solid, so it is a volume'
      },
      {
        does: 'Multiply three of that number together, for a volume',
        working: '3 × 3 × 3 = 27'
      },
      { does: 'Say what you found', working: 'The big jar holds 27 times as much jam' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '27 times as much' },
        {
          id: 's1',
          text: '3 times as much',
          slip: 'you multiply by the number of times longer only once, as for a length. A volume grows in three directions: length, width and height.'
        },
        {
          id: 's2',
          text: '9 times as much',
          slip: 'you multiply by the number of times longer only twice, as for an area. A volume also grows in height, so there are three of them.'
        }
      ],
      right: 'r'
    },
    why: 'When every length is some number of times longer, a solid grows in length, width and height. So its volume grows by three of that number multiplied together.',
  },

  {
    id: 'm6-dr-sqcube-2',
    use: 'drill',
    tier: 'varied',
    setting: 'health',
    topic: 'an adhesive bandage',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A small adhesive bandage 3 cm wide uses 2 g of glue. A large bandage of exactly the same shape is 9 cm wide. How much glue does the large bandage use?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: {
      M1: 'How much glue does the large bandage use?',
      S1: 'A small adhesive bandage 3 cm wide uses 2 g of glue. A large bandage of exactly the same shape is 9 cm wide',
      S2: 'How much glue does the large bandage use?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, an amount for one of two things of the same shape. Nothing in it follows an amount over time or counts ways.',
      S1: 'The words {cue:S1} give two things of the same shape, a small one and a big one.',
      S2: 'The words {cue:S2} ask how much glue the large bandage uses: glue covers a surface, so an area.'
    },
    not: {
      outcome: 'similar',
      why: 'It asks how much the bigger one covers or holds, not how long a part is. If it asked for a length on the bigger one, it would be {o:similar}.'
    },
    steps: [
      {
        does: 'Work out how many times longer the bigger one is',
        working: '9 ÷ 3 = 3'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Glue covers a surface, so it is an area'
      },
      {
        does: 'Multiply two of that number together, for an area',
        working: '3 × 3 = 9'
      },
      {
        does: 'Multiply the smaller one’s amount by that number',
        working: '2 g × 9 = 18 g'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '18 g' },
        {
          id: 's1',
          text: '6 g',
          slip: 'you multiply by the number of times longer only once, as for a length. An area grows in two directions: length and width.'
        },
        {
          id: 's2',
          text: '54 g',
          slip: 'you multiply by the number of times longer three times, as for a volume. This one covers a surface, so there are only two of them.'
        }
      ],
      right: 'r'
    },
    why: 'When every length is some number of times longer, a surface grows in length and width. So its area grows by two of that number multiplied together.',
  }
]);
