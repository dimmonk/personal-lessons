// Basic Math, Unit Six: the drill’s problems (part 2 of 10): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for each of the key’s questions, and carries its whole working and
// the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dw-pyth-3',
    use: 'drill',
    tier: 'clean',
    setting: 'health',
    topic: 'two hospital corridors',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A nurse walks 24 m along one corridor, turns through a square corner, and walks 7 m along another corridor. How far is she now from where she began, in a straight line?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How far is she now from where she began, in a straight line?',
      S1: 'walks 24 m along one corridor, turns through a square corner, and walks 7 m along another corridor',
      S2: 'How far is she now from where she began, in a straight line?'
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
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 24 m and 7 m'
      },
      { does: 'Multiply each given side by itself', working: '24 × 24 = 576; 7 × 7 = 49' },
      { does: 'Add the two results', working: '576 + 49 = 625' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '25 × 25 = 625, so the longest side is 25 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '25 m' },
        {
          id: 's1',
          text: '31 m',
          slip: 'you add the two sides, 24 + 7, and never multiply them by themselves, though a straight line across is shorter than the two sides one after the other.'
        },
        {
          id: 's2',
          text: 'about 23.0 m',
          slip: 'you take the two results away from each other, though the side you want is the longest, so the two results must be added.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So the longest side is the number that multiplies by itself to give the sum of the two other sides, each multiplied by itself.',
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
  },

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
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 9 m and 40 m'
      },
      { does: 'Multiply each given side by itself', working: '9 × 9 = 81; 40 × 40 = 1,600' },
      { does: 'Add the two results', working: '81 + 1,600 = 1,681' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '41 × 41 = 1,681, so the longest side is 41 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '41 m' },
        {
          id: 's1',
          text: '49 m',
          slip: 'you add the two sides, 9 + 40, and never multiply them by themselves, though a straight line across is shorter than the two sides one after the other.'
        },
        {
          id: 's2',
          text: '1,681 m²',
          slip: 'you stop after adding the two results, so you give 1,681, which is an area, and not the length of a side.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So the longest side is the number that multiplies by itself to give the sum of the two other sides, each multiplied by itself.',
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
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
        working: 'The longest side is the one opposite the square corner. Here it is the side you are given that is 50 m long. The side you want is one of the two shorter sides'
      },
      { does: 'Multiply each given side by itself', working: '50 × 50 = 2,500; 48 × 48 = 2,304' },
      {
        does: 'Take the shorter side’s result away from the longest side’s result',
        working: '2,500 − 2,304 = 196'
      },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '14 × 14 = 196, so the shorter side is 14 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '14 m' },
        {
          id: 's1',
          text: 'about 69.3 m',
          slip: 'you add the two results, though the longest side is one of the sides you were given, so the other side must be found by taking away.'
        },
        {
          id: 's2',
          text: '2 m',
          slip: 'you take the shorter side from the longest side, 50 − 48, and never multiply anything by itself, though it is the results that must be taken away.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So a shorter side is the number that multiplies by itself to give the longest side multiplied by itself, with the other shorter side multiplied by itself taken away.',
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
  },

  {
    id: 'm6-dr-pyth-3',
    use: 'drill',
    tier: 'varied',
    setting: 'work',
    topic: 'a farm gate',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A joiner fits a diagonal bar across a farm gate that is 1.2 m high and 1.6 m wide. How long is the bar?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How long is the bar?',
      S1: 'a farm gate that is 1.2 m high and 1.6 m wide',
      S2: 'How long is the bar?'
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
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 1.2 m and 1.6 m'
      },
      { does: 'Multiply each given side by itself', working: '1.2 × 1.2 = 1.44; 1.6 × 1.6 = 2.56' },
      { does: 'Add the two results', working: '1.44 + 2.56 = 4' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '2 × 2 = 4, so the longest side is 2 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '2 m' },
        {
          id: 's1',
          text: '4 m²',
          slip: 'you stop after adding the two results, so you give 4, which is an area, and not the length of a side.'
        },
        {
          id: 's2',
          text: 'about 1.1 m',
          slip: 'you take the two results away from each other, though the side you want is the longest, so the two results must be added.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So the longest side is the number that multiplies by itself to give the sum of the two other sides, each multiplied by itself.',
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
  },

  {
    id: 'm6-dr-pyth-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'a chair lift cable',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A chair lift carries skiers straight up a slope. Its top station is 150 m higher than its bottom station and 200 m further along level ground. How long is the cable?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How long is the cable?',
      S1: 'Its top station is 150 m higher than its bottom station and 200 m further along level ground',
      S2: 'How long is the cable?'
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
    echo: 'm6-wd-skilift',
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 150 m and 200 m'
      },
      {
        does: 'Multiply each given side by itself',
        working: '150 × 150 = 22,500; 200 × 200 = 40,000'
      },
      { does: 'Add the two results', working: '22,500 + 40,000 = 62,500' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '250 × 250 = 62,500, so the longest side is 250 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '250 m' },
        {
          id: 's1',
          text: '350 m',
          slip: 'you add the two sides, 150 + 200, and never multiply them by themselves, though a straight line across is shorter than the two sides one after the other.'
        },
        {
          id: 's2',
          text: '62,500 m²',
          slip: 'you stop after adding the two results, so you give 62,500, which is an area, and not the length of a side.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So the longest side is the number that multiplies by itself to give the sum of the two other sides, each multiplied by itself.',
    wouldChange: 'If the problem gave the length of the cable and the angle it rises at, and asked how high the top station is, it would be {o:trig}.'
  }
]);
