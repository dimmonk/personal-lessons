// Basic Math, Unit Six: the drill’s problems, all asked as whole problems (what it gives, what it asks, the kind, then the solving).
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dr-trig-3',
    use: 'drill',
    tier: 'varied',
    setting: 'building',
    topic: 'a rafter',
    kind: 'problem',
    outcome: 'trig',
    text: 'A carpenter cuts a straight rafter that must run 4.2 m along level ground and slope at an angle of 33° above level ground. How long is the rafter?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How long is the rafter?',
      S1: 'cuts a straight rafter that must run 4.2 m along level ground and slope at an angle of 33° above level ground',
      S2: 'How long is the rafter?'
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
        working: 'The angle is 33°. The longest side, opposite the square corner, is the rafter. The side opposite the angle is the height of the ridge. The side next to the angle, the one that is not the longest, is the 4.2 m along level ground'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the side next to the angle (4.2 m) and want the longest side. The cos button joins those two: cos = next to ÷ longest'
      },
      { does: 'Write the button’s comparison with the numbers in', working: 'cos 33° = 4.2 ÷ rafter' },
      { does: 'Get the side you want on its own', working: 'rafter = 4.2 ÷ cos 33°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'cos 33° = 0.8387; 4.2 ÷ 0.8387 = 5.0078, so about 5.0 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '5.0 m' },
        {
          id: 's1',
          text: '6.5 m',
          slip: 'you use the tan button, which compares the side opposite the angle with the side next to it, though the two sides in this problem are the side next to the angle and the longest side.'
        },
        {
          id: 's2',
          text: '7.7 m',
          slip: 'you use the angle at the other end of the slope, 57°, and not the angle you were given, 33°.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator button gives one of those comparisons for the angle you type in. Choosing the button whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
  },

]);
