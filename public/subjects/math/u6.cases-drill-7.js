// Basic Math, Unit Six: the drill’s problems, all asked as whole problems (what it gives, what it asks, the kind, then the solving).
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dr-similar-1',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'a cloth pattern',
    kind: 'problem',
    outcome: 'similar',
    text: 'A tailor cuts a cloth pattern as an exact copy of a larger one. The small pattern is 12 cm long and 9 cm wide. The large pattern is 30 cm long. How wide is the large pattern?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How wide is the large pattern?',
      S1: 'a cloth pattern as an exact copy of a larger one. The small pattern is 12 cm long and 9 cm wide. The large pattern is 30 cm long',
      S2: 'How wide is the large pattern?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of the same shape. Nothing in it follows an amount over time or counts ways.',
      S1: 'The words {cue:S1} give two things of the same shape, with a length measured on both.',
      S2: 'The words {cue:S2} ask for a length.'
    },
    not: {
      outcome: 'sqcube',
      why: 'It asks for a length, not an area or a volume. If it asked how much surface or room inside the bigger one has, it would be {o:sqcube}.'
    },
    steps: [
      {
        does: 'Find a length that is measured on both things',
        working: 'The length is 12 cm on the small pattern and 30 cm on the large one. The width, which you want, is known on the small one only: 9 cm'
      },
      {
        does: 'Work out how many times longer the bigger one is',
        working: '30 ÷ 12 = 2.5'
      },
      { does: 'Multiply the length you know by that number', working: '9 × 2.5 = 22.5 cm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '22.5 cm' },
        {
          id: 's1',
          text: '3.6 cm',
          slip: 'you divide where you should multiply, so the bigger one comes out shorter.'
        },
        {
          id: 's2',
          text: '27 cm',
          slip: 'you add the 18 cm that the two lengths differ by, instead of multiplying. A copy keeps its shape only if every length is multiplied by the same number.'
        }
      ],
      right: 'r'
    },
    why: 'An exact copy changes only in size: every length is the same number of times longer. So a length measured on both gives that number, and you can use it on any other length.',
  },

  {
    id: 'm6-dr-similar-4',
    use: 'drill',
    tier: 'varied',
    setting: 'building',
    topic: 'a model of a house',
    kind: 'problem',
    outcome: 'similar',
    text: 'A builder shows clients a model of a house, an exact copy of it. The model is 40 cm wide and 25 cm high, and the real house is 12 m wide. How high is the real house, in meters?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How high is the real house, in meters?',
      S1: 'a model of a house, an exact copy of it. The model is 40 cm wide and 25 cm high, and the real house is 12 m wide',
      S2: 'How high is the real house, in meters?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of the same shape. Nothing in it follows an amount over time or counts ways.',
      S1: 'The words {cue:S1} give two things of the same shape, with a length measured on both.',
      S2: 'The words {cue:S2} ask for a length.'
    },
    not: {
      outcome: 'sqcube',
      why: 'It asks for a length, not an area or a volume. If it asked how much surface or room inside the bigger one has, it would be {o:sqcube}.'
    },
    steps: [
      {
        does: 'Find a length that is measured on both things',
        working: 'The width is 40 cm on the model and 12 m on the real house. The height, which you want, is known on the model only: 25 cm'
      },
      { does: 'Write both lengths in the same unit', working: '12 m = 1,200 cm' },
      {
        does: 'Work out how many times longer the bigger one is',
        working: '1,200 ÷ 40 = 30'
      },
      { does: 'Multiply the length you know by that number', working: '25 × 30 = 750 cm' },
      { does: 'Write the answer in the unit the problem asks for', working: '750 cm ÷ 100 = 7.5 m' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '7.5 m' },
        {
          id: 's1',
          text: '750 m',
          slip: 'you forget to change cm to m at the end, so the number is right and the unit is wrong.'
        },
        {
          id: 's2',
          text: '225 m',
          slip: 'you multiply by the number of times longer twice, as for an area. A length is multiplied only once.'
        }
      ],
      right: 'r'
    },
    why: 'An exact copy changes only in size: every length is the same number of times longer. So a length measured on both gives that number, and you can use it on any other length.',
  }
]);
