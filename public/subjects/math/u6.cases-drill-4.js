// Basic Math, Unit Six: the drill’s problems (part 4 of 10): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for each of the key’s questions, and carries its whole working and
// the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dw-trig-2',
    use: 'drill',
    tier: 'varied',
    setting: 'building',
    topic: 'a straight ramp laid by a builder',
    kind: 'problem',
    outcome: 'trig',
    text: 'A builder lays a straight ramp 3.2 m long at an angle of 12° above level ground. How far along the ground does the ramp reach?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How far along the ground does the ramp reach?',
      S1: 'lays a straight ramp 3.2 m long at an angle of 12° above level ground',
      S2: 'How far along the ground does the ramp reach?'
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
        working: 'The angle is 12°. The longest side, opposite the square corner, is the ramp, 3.2 m. The side opposite the angle is the height of the top of the ramp. The side next to the angle, the one that is not the longest, is the distance along the ground'
      },
      {
        does: 'Choose the calculator key that joins the side you know to the side you want',
        working: 'You know the longest side (3.2 m) and want the side next to the angle. The cos key joins those two: cos = next to ÷ longest'
      },
      {
        does: 'Write the key’s comparison with the numbers in',
        working: 'cos 12° = distance ÷ 3.2'
      },
      { does: 'Get the side you want on its own', working: 'distance = 3.2 × cos 12°' },
      {
        does: 'Read the key’s value off the calculator, set to degrees, and finish the sum',
        working: 'cos 12° = 0.9781; 3.2 × 0.9781 = 3.1299, so about 3.1 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '3.1 m' },
        {
          id: 's1',
          text: '0.7 m',
          slip: 'you use the tan key, which compares the side opposite the angle with the side next to it, though the two sides in this problem are the longest side and the side next to the angle.'
        },
        {
          id: 's2',
          text: '3.3 m',
          slip: 'you divide by the key’s value, though the side you want is the one on top of the key’s comparison and the side you know is the one under it, so you should multiply.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator key gives one of those comparisons for the angle you type in. Choosing the key whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  },

  {
    id: 'm6-dw-trig-3',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'a fire engine ladder',
    kind: 'problem',
    outcome: 'trig',
    text: 'A fire engine’s ladder must reach a window 12 m above the ground, and it will lean at an angle of 75° above level ground. How long must the ladder be?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How long must the ladder be?',
      S1: 'must reach a window 12 m above the ground, and it will lean at an angle of 75° above level ground',
      S2: 'How long must the ladder be?'
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
        working: 'The angle is 75°. The longest side, opposite the square corner, is the ladder. The side opposite the angle is the height of 12 m up to the window. The side next to the angle, the one that is not the longest, is the distance from the foot of the ladder to the wall'
      },
      {
        does: 'Choose the calculator key that joins the side you know to the side you want',
        working: 'You know the side opposite the angle (12 m) and want the longest side. The sin key joins those two: sin = opposite ÷ longest'
      },
      { does: 'Write the key’s comparison with the numbers in', working: 'sin 75° = 12 ÷ ladder' },
      { does: 'Get the side you want on its own', working: 'ladder = 12 ÷ sin 75°' },
      {
        does: 'Read the key’s value off the calculator, set to degrees, and finish the sum',
        working: 'sin 75° = 0.9659; 12 ÷ 0.9659 = 12.4236, so about 12.4 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '12.4 m' },
        {
          id: 's1',
          text: '46.4 m',
          slip: 'you use the cos key, which compares the side next to the angle with the longest side, though the two sides in this problem are the side opposite the angle and the longest side.'
        },
        {
          id: 's2',
          text: '11.6 m',
          slip: 'you multiply by the key’s value, though the side you want is the one under the key’s comparison and the side you know is the one on top of it, so you should divide.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator key gives one of those comparisons for the angle you type in. Choosing the key whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  },

  {
    id: 'm6-dr-trig-1',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'a tree to survey',
    kind: 'problem',
    outcome: 'trig',
    text: 'A forester stands on level ground 25 m from the foot of a tree and sees its top at an angle of 38° above level ground. How tall is the tree?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How tall is the tree?',
      S1: 'stands on level ground 25 m from the foot of a tree and sees its top at an angle of 38° above level ground',
      S2: 'How tall is the tree?'
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
        working: 'The angle is 38°. The longest side, opposite the square corner, is the line of sight to the top of the tree. The side opposite the angle is the height of the tree. The side next to the angle, the one that is not the longest, is the 25 m along the ground'
      },
      {
        does: 'Choose the calculator key that joins the side you know to the side you want',
        working: 'You know the side next to the angle (25 m) and want the side opposite the angle. The tan key joins those two: tan = opposite ÷ next to'
      },
      { does: 'Write the key’s comparison with the numbers in', working: 'tan 38° = height ÷ 25' },
      { does: 'Get the side you want on its own', working: 'height = 25 × tan 38°' },
      {
        does: 'Read the key’s value off the calculator, set to degrees, and finish the sum',
        working: 'tan 38° = 0.7813; 25 × 0.7813 = 19.5325, so about 19.5 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '19.5 m' },
        {
          id: 's1',
          text: '15.4 m',
          slip: 'you use the sin key, which compares the side opposite the angle with the longest side, though the two sides in this problem are the side next to the angle and the side opposite the angle.'
        },
        {
          id: 's2',
          text: '32.0 m',
          slip: 'you divide by the key’s value, though the side you want is the one on top of the key’s comparison and the side you know is the one under it, so you should multiply.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator key gives one of those comparisons for the angle you type in. Choosing the key whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  },

  {
    id: 'm6-dr-trig-2',
    use: 'drill',
    tier: 'clean',
    setting: 'travel',
    topic: 'a plane climbing',
    kind: 'problem',
    outcome: 'trig',
    text: 'A plane climbs along a straight path 600 m long at an angle of 12° above level ground. How much height does it gain?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How much height does it gain?',
      S1: 'climbs along a straight path 600 m long at an angle of 12° above level ground',
      S2: 'How much height does it gain?'
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
        working: 'The angle is 12°. The longest side, opposite the square corner, is the flight path, 600 m. The side opposite the angle is the height gained. The side next to the angle, the one that is not the longest, is the distance along the ground below'
      },
      {
        does: 'Choose the calculator key that joins the side you know to the side you want',
        working: 'You know the longest side (600 m) and want the side opposite the angle. The sin key joins those two: sin = opposite ÷ longest'
      },
      { does: 'Write the key’s comparison with the numbers in', working: 'sin 12° = height ÷ 600' },
      { does: 'Get the side you want on its own', working: 'height = 600 × sin 12°' },
      {
        does: 'Read the key’s value off the calculator, set to degrees, and finish the sum',
        working: 'sin 12° = 0.2079; 600 × 0.2079 = 124.74, so about 124.7 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '124.7 m' },
        {
          id: 's1',
          text: '586.9 m',
          slip: 'you use the cos key, which compares the side next to the angle with the longest side, though the two sides in this problem are the longest side and the side opposite the angle.'
        },
        {
          id: 's2',
          text: '2,886.0 m',
          slip: 'you divide by the key’s value, though the side you want is the one on top of the key’s comparison and the side you know is the one under it, so you should multiply.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator key gives one of those comparisons for the angle you type in. Choosing the key whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  }
]);
