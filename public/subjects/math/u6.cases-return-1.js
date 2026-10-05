// Basic Math, Unit Six: fresh problems for later days (part 1 of 3): three for each kind, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often
// taken for.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-rt-pyth-1',
    use: 'return',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a tablecloth corner to corner',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A shop sells a rectangular tablecloth 0.9 m wide and 1.2 m long. A customer wants to know how long it is from one corner to the opposite corner.',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'how long it is from one corner to the opposite corner',
      S1: 'a rectangular tablecloth 0.9 m wide and 1.2 m long',
      S2: 'how long it is from one corner to the opposite corner'
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
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 0.9 m and 1.2 m'
      },
      { does: 'Multiply each given side by itself', working: '0.9 × 0.9 = 0.81; 1.2 × 1.2 = 1.44' },
      { does: 'Add the two results', working: '0.81 + 1.44 = 2.25' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '1.5 × 1.5 = 2.25, so the longest side is 1.5 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '1.5 m' },
        {
          id: 's1',
          text: '2.1 m',
          slip: 'you add the two sides, 0.9 + 1.2, and never multiply them by themselves, though a straight line across is shorter than the two sides one after the other.'
        },
        {
          id: 's2',
          text: '2.25 m²',
          slip: 'you stop after adding the two results, so you give 2.25, which is an area, and not the length of a side.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So the longest side is the number that multiplies by itself to give the sum of the two other sides, each multiplied by itself.',
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
  },

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
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
  },

  {
    id: 'm6-rt-pyth-3',
    use: 'return',
    tier: 'varied',
    setting: 'health',
    topic: 'crossing a car park',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A paramedic runs diagonally across a rectangular car park 25 m wide and 60 m long, from one corner to the opposite corner. How far does she run?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'How far does she run?',
      S1: 'a rectangular car park 25 m wide and 60 m long',
      S2: 'How far does she run?'
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
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 25 m and 60 m'
      },
      { does: 'Multiply each given side by itself', working: '25 × 25 = 625; 60 × 60 = 3,600' },
      { does: 'Add the two results', working: '625 + 3,600 = 4,225' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '65 × 65 = 4,225, so the longest side is 65 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '65 m' },
        {
          id: 's1',
          text: '85 m',
          slip: 'you add the two sides, 25 + 60, and never multiply them by themselves, though a straight line across is shorter than the two sides one after the other.'
        },
        {
          id: 's2',
          text: 'about 54.5 m',
          slip: 'you take the two results away from each other, though the side you want is the longest, so the two results must be added.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So the longest side is the number that multiplies by itself to give the sum of the two other sides, each multiplied by itself.',
    wouldChange: 'If the problem gave one side and an angle in degrees besides the square corner, and not two sides, it would be {o:trig}.'
  },

  {
    id: 'm6-rt-trig-1',
    use: 'return',
    tier: 'clean',
    setting: 'work',
    topic: 'a billboard post',
    kind: 'problem',
    outcome: 'trig',
    text: 'A sign installer stands on level ground 20 m from the foot of a billboard post and sees its top at an angle of 28° above level ground. How tall is the post?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How tall is the post?',
      S1: 'stands on level ground 20 m from the foot of a billboard post and sees its top at an angle of 28° above level ground',
      S2: 'How tall is the post?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length in a {t:righttriangle} that is worked out from an angle. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
      S1: 'The words {cue:S1} give the length of one side of a {t:righttriangle} and one angle in degrees besides the square corner. That is {a:S1.sideangle}.',
      S2: 'The words {cue:S2} ask how long a side is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'pyth',
      why: 'The problem gives one side and an angle in degrees, and no second side. {o:pyth} would be the name if it gave the lengths of two sides and no angle besides the square corner.'
    },
    steps: [
      {
        does: 'Name the three sides, starting from the angle you were given',
        working: 'The angle is 28°. The longest side, opposite the square corner, is the line of sight to the top of the post. The side opposite the angle is the height of the post. The side next to the angle, the one that is not the longest, is the 20 m along the ground'
      },
      {
        does: 'Choose the calculator key that joins the side you know to the side you want',
        working: 'You know the side next to the angle (20 m) and want the side opposite the angle. The tan key joins those two: tan = opposite ÷ next to'
      },
      { does: 'Write the key’s comparison with the numbers in', working: 'tan 28° = height ÷ 20' },
      { does: 'Get the side you want on its own', working: 'height = 20 × tan 28°' },
      {
        does: 'Read the key’s value off the calculator, set to degrees, and finish the sum',
        working: 'tan 28° = 0.5317; 20 × 0.5317 = 10.634, so about 10.6 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '10.6 m' },
        {
          id: 's1',
          text: '9.4 m',
          slip: 'you use the sin key, which compares the side opposite the angle with the longest side, though the two sides in this problem are the side next to the angle and the side opposite the angle.'
        },
        {
          id: 's2',
          text: '37.6 m',
          slip: 'you divide by the key’s value, though the side you want is the one on top of the key’s comparison and the side you know is the one under it, so you should multiply.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator key gives one of those comparisons for the angle you type in. Choosing the key whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  }
]);
