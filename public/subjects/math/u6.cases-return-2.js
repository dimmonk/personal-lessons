// Basic Math, Unit Six: fresh problems for later days, one for each kind.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-rt-trig-3',
    use: 'return',
    tier: 'varied',
    setting: 'home',
    topic: 'a staircase',
    kind: 'problem',
    outcome: 'trig',
    text: 'A straight staircase rises 2.8 m at a slope of 35° above the floor. How far does it run along the floor?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How far does it run along the floor?',
      S1: 'rises 2.8 m at a slope of 35° above the floor',
      S2: 'How far does it run along the floor?'
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
        working: 'The angle is 35°. The longest side, opposite the square corner, is the line along the edges of the steps. The side opposite the angle is the rise of 2.8 m. The side next to the angle, the one that is not the longest, is the distance along the floor'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the side opposite the angle (2.8 m) and want the side next to the angle. The tan button joins those two: tan = opposite ÷ next to'
      },
      {
        does: 'Write the button’s comparison with the numbers in',
        working: 'tan 35° = 2.8 ÷ distance'
      },
      { does: 'Get the side you want on its own', working: 'distance = 2.8 ÷ tan 35°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'tan 35° = 0.7002; 2.8 ÷ 0.7002 = 3.9989, so about 4.0 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '4.0 m' },
        {
          id: 's1',
          text: '4.9 m',
          slip: 'you use the sin button, which compares the side opposite the angle with the longest side, though the two sides in this problem are the side opposite the angle and the side next to the angle.'
        },
        {
          id: 's2',
          text: '2.0 m',
          slip: 'you multiply by the button’s value, though the side you want is the one under the button’s comparison and the side you know is the one on top of it, so you should divide.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator button gives one of those comparisons for the angle you type in. Choosing the button whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
  },

]);
