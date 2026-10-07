// Basic Math, Unit Six: fresh problems for later days, one for each kind.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-rt-pyth-2',
    use: 'return',
    tier: 'clean',
    setting: 'building',
    topic: 'a guy wire for a mast',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A guy wire 26 m long runs from the top of a radio mast to a post in level ground 10 m from the base of the mast. How tall is the mast?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How tall is the mast?',
      S1: 'A guy wire 26 m long runs from the top of a radio mast to a post in level ground 10 m from the base of the mast',
      S2: 'How tall is the mast?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length in a {t:righttriangle}. Nothing in it follows an amount over time or counts ways.',
      S1: 'The words {cue:S1} give two sides of a {t:righttriangle}, and no angle besides the square corner.',
      S2: 'The words {cue:S2} ask for a length.'
    },
    not: {
      outcome: 'trig',
      why: 'No angle is given besides the square corner, so the angle buttons have nothing to work from. With one side and an angle in degrees, it would be {o:trig}.'
    },
    steps: [
      {
        does: 'Find the longest side',
        working: 'The wire is opposite the square corner, so the 26 m is the longest side. The side you want, the mast, is a shorter one'
      },
      { does: 'Multiply each side you know by itself', working: '26 × 26 = 676; 10 × 10 = 100' },
      {
        does: 'Take the shorter side’s result away from the longest side’s',
        working: '676 − 100 = 576'
      },
      {
        does: 'Find the number that multiplies by itself to make that result',
        working: '24 × 24 = 576, so the shorter side is 24 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '24 m' },
        {
          id: 's1',
          text: 'about 27.9 m',
          slip: 'you add the two results. The 26 m side is the longest and was given, so you take away instead.'
        },
        {
          id: 's2',
          text: '576 m²',
          slip: 'you stop after taking the results away. 576 is an area, not the length of a side.'
        }
      ],
      right: 'r'
    },
    why: 'The tile squares on the two shorter sides add up to the tile square on the longest side. So a shorter side is the number that multiplies by itself to make the long square with the other short square taken away.',
  },

]);
