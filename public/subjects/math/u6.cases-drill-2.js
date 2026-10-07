// Basic Math, Unit Six: the drill’s problems, all asked as whole problems (what it gives, what it asks, the kind, then the solving).
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dr-pyth-1',
    use: 'drill',
    tier: 'clean',
    setting: 'building',
    topic: 'a pipe across a plot',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A plumber lays a straight pipe diagonally across a rectangular plot 9 m wide and 40 m long, from one corner to the opposite corner. How long is the pipe?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How long is the pipe?',
      S1: 'a rectangular plot 9 m wide and 40 m long',
      S2: 'How long is the pipe?'
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
        working: 'The pipe is opposite the square corner of the plot, so it is the longest side. You know the two shorter sides, 9 m and 40 m'
      },
      { does: 'Multiply each side you know by itself', working: '9 × 9 = 81; 40 × 40 = 1,600' },
      { does: 'Add the two results', working: '81 + 1,600 = 1,681' },
      {
        does: 'Find the number that multiplies by itself to make that result',
        working: '41 × 41 = 1,681, so the longest side is 41 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '41 m' },
        {
          id: 's1',
          text: '49 m',
          slip: 'you add the two sides, 9 + 40, instead of multiplying each by itself. A straight line across is shorter than going along both sides.'
        },
        {
          id: 's2',
          text: '1,681 m²',
          slip: 'you stop after adding the two results. 1,681 is an area, not the length of a side.'
        }
      ],
      right: 'r'
    },
    why: 'The tile squares on the two shorter sides add up to the tile square on the longest side. So the longest side is the number that multiplies by itself to make the two short squares added together.',
  },

  {
    id: 'm6-dr-pyth-2',
    use: 'drill',
    tier: 'varied',
    setting: 'travel',
    topic: 'a lighthouse and a boat',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A lighthouse lamp is 48 m above the sea. A boat is 50 m from the lamp, measured in a straight line. How far is the boat from the foot of the lighthouse, measured along the sea?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How far is the boat from the foot of the lighthouse, measured along the sea?',
      S1: ['lamp is 48 m above the sea', 'A boat is 50 m from the lamp, measured in a straight line'],
      S2: 'How far is the boat from the foot of the lighthouse, measured along the sea?'
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
        working: 'The line from the lamp to the boat is opposite the square corner, so the 50 m is the longest side. The side you want is a shorter one'
      },
      { does: 'Multiply each side you know by itself', working: '50 × 50 = 2,500; 48 × 48 = 2,304' },
      {
        does: 'Take the shorter side’s result away from the longest side’s',
        working: '2,500 − 2,304 = 196'
      },
      {
        does: 'Find the number that multiplies by itself to make that result',
        working: '14 × 14 = 196, so the shorter side is 14 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '14 m' },
        {
          id: 's1',
          text: 'about 69.3 m',
          slip: 'you add the two results. The 50 m side is the longest and was given, so you take away instead.'
        },
        {
          id: 's2',
          text: '2 m',
          slip: 'you take the sides away from each other, 50 − 48, without multiplying anything by itself. It is the results you take away.'
        }
      ],
      right: 'r'
    },
    why: 'The tile squares on the two shorter sides add up to the tile square on the longest side. So a shorter side is the number that multiplies by itself to make the long square with the other short square taken away.',
  },

]);
