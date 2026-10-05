// Basic Math, Unit Six: the drill’s problems (part 1 of 10): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for each of the key’s questions, and carries its whole working and
// the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dl-pyth-1',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'a phone display',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A phone has a rectangular display 6 cm wide and 13 cm high. Makers quote the size of a display as the distance from one corner to the opposite corner. How long is that distance?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How long is that distance?',
      S1: 'a rectangular display 6 cm wide and 13 cm high',
      S2: 'How long is that distance?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length in a {t:righttriangle}. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
      S1: 'The words {cue:S1} give the lengths of two sides of a {t:righttriangle}, and no angle in degrees besides the square corner. That is {a:S1.twosides}.',
      S2: 'The words {cue:S2} ask how long a side is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'trig',
      why: 'No angle in degrees is given besides the square corner, so there is nothing for the calculator’s angle keys to work from. {o:trig} would be the name if the problem gave one side and an angle in degrees.'
    },
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 6 cm and 13 cm'
      },
      { does: 'Multiply each given side by itself', working: '6 × 6 = 36; 13 × 13 = 169' },
      { does: 'Add the two results', working: '36 + 169 = 205' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '√205 = 14.318…, so the longest side is about 14.3 cm. Check: 14.3 × 14.3 = 204.49, close to 205'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: 'about 14.3 cm' },
        {
          id: 's1',
          text: '19 cm',
          slip: 'you add the two sides, 6 + 13, and never multiply them by themselves, though a straight line across is shorter than the two sides one after the other.'
        },
        {
          id: 's2',
          text: '205 cm²',
          slip: 'you stop after adding the two results, so you give 205, which is an area, and not the length of a side.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So the longest side is the number that multiplies by itself to give the sum of the two other sides, each multiplied by itself.',
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
  },

  {
    id: 'm6-dl-pyth-2',
    use: 'drill',
    tier: 'varied',
    setting: 'travel',
    topic: 'a road up a hill',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A straight road up a hill is 130 m long and climbs 50 m above the valley floor. How far along level ground does the road reach?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How far along level ground does the road reach?',
      S1: 'is 130 m long and climbs 50 m above the valley floor',
      S2: 'How far along level ground does the road reach?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length in a {t:righttriangle}. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
      S1: 'The words {cue:S1} give the lengths of two sides of a {t:righttriangle}, and no angle in degrees besides the square corner. That is {a:S1.twosides}.',
      S2: 'The words {cue:S2} ask how long a side is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'trig',
      why: 'No angle in degrees is given besides the square corner, so there is nothing for the calculator’s angle keys to work from. {o:trig} would be the name if the problem gave one side and an angle in degrees.'
    },
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The longest side is the one opposite the square corner. Here it is the side you are given that is 130 m long. The side you want is one of the two shorter sides'
      },
      { does: 'Multiply each given side by itself', working: '130 × 130 = 16,900; 50 × 50 = 2,500' },
      {
        does: 'Take the shorter side’s result away from the longest side’s result',
        working: '16,900 − 2,500 = 14,400'
      },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '120 × 120 = 14,400, so the shorter side is 120 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '120 m' },
        {
          id: 's1',
          text: 'about 139.3 m',
          slip: 'you add the two results, though the longest side is one of the sides you were given, so the other side must be found by taking away.'
        },
        {
          id: 's2',
          text: '80 m',
          slip: 'you take the shorter side from the longest side, 130 − 50, and never multiply anything by itself, though it is the results that must be taken away.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So a shorter side is the number that multiplies by itself to give the longest side multiplied by itself, with the other shorter side multiplied by itself taken away.',
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
  },

  {
    id: 'm6-dl-pyth-3',
    use: 'drill',
    tier: 'clean',
    setting: 'cooking',
    topic: 'a cut across a square cake',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A baker wants to cut a square cake straight across, from one corner to the opposite corner. The cake is 20 cm along each side. How long is the cut?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How long is the cut?',
      S1: 'The cake is 20 cm along each side',
      S2: 'How long is the cut?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length in a {t:righttriangle}. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
      S1: 'The words {cue:S1} give the lengths of two sides of a {t:righttriangle}, and no angle in degrees besides the square corner. That is {a:S1.twosides}.',
      S2: 'The words {cue:S2} ask how long a side is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'trig',
      why: 'No angle in degrees is given besides the square corner, so there is nothing for the calculator’s angle keys to work from. {o:trig} would be the name if the problem gave one side and an angle in degrees.'
    },
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 20 cm and 20 cm'
      },
      { does: 'Multiply each given side by itself', working: '20 × 20 = 400; 20 × 20 = 400' },
      { does: 'Add the two results', working: '400 + 400 = 800' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '√800 = 28.284…, so the longest side is about 28.3 cm. Check: 28.3 × 28.3 = 800.89, close to 800'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: 'about 28.3 cm' },
        {
          id: 's1',
          text: '40 cm',
          slip: 'you add the two sides, 20 + 20, and never multiply them by themselves, though a straight line across is shorter than the two sides one after the other.'
        },
        {
          id: 's2',
          text: '800 cm²',
          slip: 'you stop after adding the two results, so you give 800, which is an area, and not the length of a side.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So the longest side is the number that multiplies by itself to give the sum of the two other sides, each multiplied by itself.',
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
  },

  {
    id: 'm6-dw-pyth-1',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a sail on a boat',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A boat’s sail is a triangle with a square corner. The edge along the mast is 12 m and the edge along the boom is 5 m. How long is the third edge?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How long is the third edge?',
      S1: 'The edge along the mast is 12 m and the edge along the boom is 5 m',
      S2: 'How long is the third edge?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length in a {t:righttriangle}. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
      S1: 'The words {cue:S1} give the lengths of two sides of a {t:righttriangle}, and no angle in degrees besides the square corner. That is {a:S1.twosides}.',
      S2: 'The words {cue:S2} ask how long a side is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'trig',
      why: 'No angle in degrees is given besides the square corner, so there is nothing for the calculator’s angle keys to work from. {o:trig} would be the name if the problem gave one side and an angle in degrees.'
    },
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 12 m and 5 m'
      },
      { does: 'Multiply each given side by itself', working: '12 × 12 = 144; 5 × 5 = 25' },
      { does: 'Add the two results', working: '144 + 25 = 169' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '13 × 13 = 169, so the longest side is 13 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '13 m' },
        {
          id: 's1',
          text: '17 m',
          slip: 'you add the two sides, 12 + 5, and never multiply them by themselves, though a straight line across is shorter than the two sides one after the other.'
        },
        {
          id: 's2',
          text: 'about 10.9 m',
          slip: 'you take the two results away from each other, though the side you want is the longest, so the two results must be added.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So the longest side is the number that multiplies by itself to give the sum of the two other sides, each multiplied by itself.',
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
  },

  {
    id: 'm6-dw-pyth-2',
    use: 'drill',
    tier: 'varied',
    setting: 'shopping',
    topic: 'a shelf brace',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A shop shelf is held up by a straight brace 41 cm long. The brace meets the wall 40 cm below the shelf. How far does the shelf stick out from the wall?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How far does the shelf stick out from the wall?',
      S1: 'a straight brace 41 cm long. The brace meets the wall 40 cm below the shelf',
      S2: 'How far does the shelf stick out from the wall?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length in a {t:righttriangle}. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
      S1: 'The words {cue:S1} give the lengths of two sides of a {t:righttriangle}, and no angle in degrees besides the square corner. That is {a:S1.twosides}.',
      S2: 'The words {cue:S2} ask how long a side is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'trig',
      why: 'No angle in degrees is given besides the square corner, so there is nothing for the calculator’s angle keys to work from. {o:trig} would be the name if the problem gave one side and an angle in degrees.'
    },
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The longest side is the one opposite the square corner. Here it is the side you are given that is 41 cm long. The side you want is one of the two shorter sides'
      },
      { does: 'Multiply each given side by itself', working: '41 × 41 = 1,681; 40 × 40 = 1,600' },
      {
        does: 'Take the shorter side’s result away from the longest side’s result',
        working: '1,681 − 1,600 = 81'
      },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '9 × 9 = 81, so the shorter side is 9 cm'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '9 cm' },
        {
          id: 's1',
          text: '81 cm²',
          slip: 'you stop after taking the results away, so you give 81, which is an area, and not the length of a side.'
        },
        {
          id: 's2',
          text: '1 cm',
          slip: 'you take the shorter side from the longest side, 41 − 40, and never multiply anything by itself, though it is the results that must be taken away.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So a shorter side is the number that multiplies by itself to give the longest side multiplied by itself, with the other shorter side multiplied by itself taken away.',
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
  }
]);
