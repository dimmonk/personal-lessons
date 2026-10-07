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
        working: 'The angle is 33°. The longest side is the rafter. The side opposite the angle is the height of the ridge. The side next to the angle is the 4.2 m along level ground'
      },
      {
        does: 'Pick the calculator button that joins the side you know and the side you want',
        working: 'You know the side next to the angle (4.2 m) and want the longest side. Cos joins those two: cos = next to ÷ longest'
      },
      { does: 'Write the button’s sum with your numbers in', working: 'cos 33° = 4.2 ÷ rafter' },
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
          slip: 'you use the tan button, which joins the side opposite the angle and the side next to it. Here you know the side next to the angle and want the longest side, so you need cos.'
        },
        {
          id: 's2',
          text: '7.7 m',
          slip: 'you use the angle at the other end of the slope, 57°, instead of the 33° you were given.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle fixes how long each side is compared with the others, whatever the size. Each calculator button gives one of those comparisons, so you pick the button that joins the side you know and the side you want, then multiply or divide by its value.',
  },

]);
