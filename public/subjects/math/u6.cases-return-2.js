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
        working: 'The angle is 35°. The longest side is the line along the edges of the steps. The side opposite the angle is the rise of 2.8 m. The side next to the angle is the distance along the floor'
      },
      {
        does: 'Pick the calculator button that joins the side you know and the side you want',
        working: 'You know the side opposite the angle (2.8 m) and want the side next to it. Tan joins those two: tan = opposite ÷ next to'
      },
      {
        does: 'Write the button’s sum with your numbers in',
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
          slip: 'you use the sin button, which joins the side opposite the angle and the longest side. Here the two sides are opposite the angle and next to it, so you need tan.'
        },
        {
          id: 's2',
          text: '2.0 m',
          slip: 'you multiply by the button’s value. The side you want is underneath in the button’s sum, so you divide.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle fixes how long each side is compared with the others, whatever the size. Each calculator button gives one of those comparisons, so you pick the button that joins the side you know and the side you want, then multiply or divide by its value.',
  },

]);
