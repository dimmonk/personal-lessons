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
      M1: 'The problem asks {cue:M1}, a length in a {t:righttriangle}, found from an angle. Nothing in it follows an amount over time or counts ways.',
      S1: 'The words {cue:S1} give one side of a {t:righttriangle} and one angle in degrees.',
      S2: 'The words {cue:S2} ask for a length.'
    },
    not: {
      outcome: 'pyth',
      why: 'It gives one side and an angle in degrees, and no second side. With two sides and no angle, it would be {o:pyth}.'
    },
    steps: [
      {
        does: 'Name the three sides from the angle you were given',
        working: 'The angle is 38°. The longest side is the line of sight to the top of the tree. The side opposite the angle is the height of the tree. The side next to the angle is the 25 m along the ground'
      },
      {
        does: 'Pick the calculator button that joins the side you know and the side you want',
        working: 'You know the side next to the angle (25 m) and want the side opposite it. Tan joins those two: tan = opposite ÷ next to'
      },
      { does: 'Write the button’s sum with your numbers in', working: 'tan 38° = height ÷ 25' },
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
          slip: 'you use the sin button, which joins the side opposite the angle and the longest side. Here you know the side next to the angle and want the side opposite it, so you need tan.'
        },
        {
          id: 's2',
          text: '32.0 m',
          slip: 'you divide by the button’s value. The side you want is on top of the button’s sum, so you multiply.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle fixes how long each side is compared with the others, whatever the size. Each calculator button gives one of those comparisons, so you pick the button that joins the side you know and the side you want, then multiply or divide by its value.',
  },

]);
