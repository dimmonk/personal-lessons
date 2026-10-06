// Basic Math, Unit Six: fresh problems for later days (part 2 of 3): three for each kind, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often
// taken for.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-rt-trig-2',
    use: 'return',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a playground slide',
    kind: 'problem',
    outcome: 'trig',
    text: 'A playground slide is 4.5 m long along its surface and slopes at an angle of 38° to level ground. How high is the top of the slide above the ground?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How high is the top of the slide above the ground?',
      S1: 'is 4.5 m long along its surface and slopes at an angle of 38° to level ground',
      S2: 'How high is the top of the slide above the ground?'
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
        working: 'The angle is 38°. The longest side, opposite the square corner, is the slide, 4.5 m. The side opposite the angle is the height of the top of the slide. The side next to the angle, the one that is not the longest, is the distance along the ground'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the longest side (4.5 m) and want the side opposite the angle. The sin button joins those two: sin = opposite ÷ longest'
      },
      { does: 'Write the button’s comparison with the numbers in', working: 'sin 38° = height ÷ 4.5' },
      { does: 'Get the side you want on its own', working: 'height = 4.5 × sin 38°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'sin 38° = 0.6157; 4.5 × 0.6157 = 2.7707, so about 2.8 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '2.8 m' },
        {
          id: 's1',
          text: '3.5 m',
          slip: 'you use the cos button, which compares the side next to the angle with the longest side, though the two sides in this problem are the longest side and the side opposite the angle.'
        },
        {
          id: 's2',
          text: '1.3 m',
          slip: 'your calculator is set to radians and not to degrees, so the sin button reads 38 as 38 radians and gives 0.2964.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator button gives one of those comparisons for the angle you type in. Choosing the button whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  },

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
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  },

  {
    id: 'm6-rt-similar-1',
    use: 'return',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a small menu',
    kind: 'problem',
    outcome: 'similar',
    text: 'A café prints a small menu as an exact copy of a big one. The big menu is 40 cm wide and 60 cm high. The small menu is 10 cm wide. How high is the small menu?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How high is the small menu?',
      S1: 'a small menu as an exact copy of a big one. The big menu is 40 cm wide and 60 cm high. The small menu is 10 cm wide',
      S2: 'How high is the small menu?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the answer to the first question is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, with a length measured on both. That is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how long a part is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'sqcube',
      why: 'A length is asked, not an area or a volume. {o:sqcube} would be the name if the problem asked how much surface or how much room inside the bigger thing has, or how many times more.'
    },
    steps: [
      {
        does: 'Find a part that is measured on both things',
        working: 'The width is 10 cm on the small menu and 40 cm on the big menu. The part you want, the height, is measured on the big menu only: 60 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '40 ÷ 10 = 4'
      },
      { does: 'Divide the length you have by that number of times', working: '60 ÷ 4 = 15 cm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '15 cm' },
        {
          id: 's1',
          text: '240 cm',
          slip: 'you multiply by the number of times where you should divide, so the smaller thing gets the longer length.'
        },
        {
          id: 's2',
          text: '3.75 cm',
          slip: 'you divide by the number of times twice over, as for an area, though a length is asked and every length changes only once by that number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  },

  {
    id: 'm6-rt-similar-2',
    use: 'return',
    tier: 'clean',
    setting: 'travel',
    topic: 'a model truck',
    kind: 'problem',
    outcome: 'similar',
    text: 'A model of a truck is an exact copy at a scale of 1 to 25: every 1 cm on the model stands for 25 cm on the truck. The model is 28 cm long. How long is the real truck, in meters?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How long is the real truck, in meters?',
      S1: 'A model of a truck is an exact copy at a scale of 1 to 25: every 1 cm on the model stands for 25 cm on the truck. The model is 28 cm long',
      S2: 'How long is the real truck, in meters?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the answer to the first question is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, with a length measured on both. That is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how long a part is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'sqcube',
      why: 'A length is asked, not an area or a volume. {o:sqcube} would be the name if the problem asked how much surface or how much room inside the bigger thing has, or how many times more.'
    },
    steps: [
      {
        does: 'Find a part that is measured on both things',
        working: 'The scale is 1 to 25, so 1 cm on the model stands for 25 cm on the truck. So the length the scale compares is 1 cm on the model and 25 cm on the real truck. The part you want, the length of the truck, is measured on the model only: 28 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '25 ÷ 1 = 25'
      },
      { does: 'Multiply the length you have by that number of times', working: '28 × 25 = 700 cm' },
      { does: 'Write the answer in the unit the problem asks for', working: '700 cm ÷ 100 = 7 m' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '7 m' },
        {
          id: 's1',
          text: '700 m',
          slip: 'you forget to change the answer from cm into m at the end, so the number is the one in cm and the unit is wrong.'
        },
        { id: 's2', text: '70 m', slip: 'you divide by 10 and not by 100 when changing cm into m.' }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  }
]);
