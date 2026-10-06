// Basic Math, Unit Six: the drill’s problems, all asked as whole problems (what it gives, what it asks, the kind, then the solving).
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
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
      M1: 'The problem asks {cue:M1}, a length in a {t:righttriangle} that is worked out from an angle. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the answer to the first question is {a:M1.shape}.',
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
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the side next to the angle (25 m) and want the side opposite the angle. The tan button joins those two: tan = opposite ÷ next to'
      },
      { does: 'Write the button’s comparison with the numbers in', working: 'tan 38° = height ÷ 25' },
      { does: 'Get the side you want on its own', working: 'height = 25 × tan 38°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'tan 38° = 0.7813; 25 × 0.7813 = 19.5325, so about 19.5 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '19.5 m' },
        {
          id: 's1',
          text: '15.4 m',
          slip: 'you use the sin button, which compares the side opposite the angle with the longest side, though the two sides in this problem are the side next to the angle and the side opposite the angle.'
        },
        {
          id: 's2',
          text: '32.0 m',
          slip: 'you divide by the button’s value, though the side you want is the one on top of the button’s comparison and the side you know is the one under it, so you should multiply.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator button gives one of those comparisons for the angle you type in. Choosing the button whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
  },

]);
