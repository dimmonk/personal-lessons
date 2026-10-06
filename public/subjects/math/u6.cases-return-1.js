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
      M1: 'The problem asks {cue:M1}, a length in a {t:righttriangle}. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the answer to the first question is {a:M1.shape}.',
      S1: 'The words {cue:S1} give the lengths of two sides of a {t:righttriangle}, and no angle in degrees besides the square corner. That is {a:S1.twosides}.',
      S2: 'The words {cue:S2} ask how long a side is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'trig',
      why: 'No angle in degrees is given besides the square corner, so there is nothing for the calculator’s angle buttons to work from. {o:trig} would be the name if the problem gave one side and an angle in degrees.'
    },
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The longest side is the one opposite the square corner. Here it is the side you are given that is 26 m long. The side you want is one of the two shorter sides'
      },
      { does: 'Multiply each given side by itself', working: '26 × 26 = 676; 10 × 10 = 100' },
      {
        does: 'Take the shorter side’s result away from the longest side’s result',
        working: '676 − 100 = 576'
      },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '24 × 24 = 576, so the shorter side is 24 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '24 m' },
        {
          id: 's1',
          text: 'about 27.9 m',
          slip: 'you add the two results, though the longest side is one of the sides you were given, so the other side must be found by taking away.'
        },
        {
          id: 's2',
          text: '576 m²',
          slip: 'you stop after taking the results away, so you give 576, which is an area, and not the length of a side.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So a shorter side is the number that multiplies by itself to give the longest side multiplied by itself, with the other shorter side multiplied by itself taken away.',
  },

]);
