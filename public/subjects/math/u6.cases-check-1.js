// Basic Math, Unit Six: the problems of the worked examples, the problems the learner finishes in a check, and the look-alike cases (part 1 of 2).
// A worked example’s problem carries only the problem; its working is on the card. A check’s problem carries the whole working, so that
// the app can show it up to the last step, or not at all, and name the slip behind every wrong choice. A look-alike case is a plain story
// with a route and marked words.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-s-pyth-1',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'a path across a yard',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A rectangular yard is 30 m wide and 40 m long. A path runs straight across it, from one corner to the opposite corner. How long is the path?'
  },

  {
    id: 'm6-s-pyth-2',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'a cable to a pole',
    kind: 'problem',
    outcome: 'pyth',
    text: 'An electrician ties a cable to the top of a pole and pegs the other end to level ground 6 m from the foot of the pole. The cable is 10 m long. How tall is the pole?'
  },

  {
    id: 'm6-s-trig-1',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'a church tower',
    kind: 'problem',
    outcome: 'trig',
    text: 'A surveyor stands on level ground 30 m from the foot of a church tower. She measures the angle from the ground up to the top of the tower, and it is 35°. How tall is the tower?'
  },

  {
    id: 'm6-s-trig-2',
    use: 'teach',
    tier: 'clean',
    setting: 'health',
    topic: 'a wheelchair ramp',
    kind: 'problem',
    outcome: 'trig',
    text: 'A hospital needs a wheelchair ramp that rises 0.9 m above level ground, at a slope of 6° above level. How long is the ramp along its slope?'
  },

  {
    id: 'm6-s-similar-1',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'a photo enlarged',
    kind: 'problem',
    outcome: 'similar',
    text: 'A photo is 10 cm wide and 15 cm high. It is enlarged as an exact copy so that it is 25 cm wide. How high is the enlargement?'
  },

  {
    id: 'm6-s-similar-2',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a toy car',
    kind: 'problem',
    outcome: 'similar',
    text: 'A toy car is an exact copy of a real car. The real car is 160 cm wide and 480 cm long. The toy car is 20 cm wide. How long is the toy car?'
  },

  {
    id: 'm6-s-sqcube-1',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'cubes of clay',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A toy maker has a 10 cm cube of clay and a 20 cm cube of clay. How many times more clay is in the bigger cube?'
  },

  {
    id: 'm6-s-sqcube-2',
    use: 'teach',
    tier: 'clean',
    setting: 'money',
    topic: 'glass for a window pane',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'The glass for a window pane 40 cm wide costs 6 euros. A pane of exactly the same shape, 120 cm wide, is cut from the same kind of glass. How much does the glass for the larger pane cost?'
  },

  {
    id: 'm6-ck-pyth-last',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'a café terrace',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A café owner wants a strip of lights across her rectangular terrace, from one corner to the opposite corner. The terrace is 9 m wide and 12 m long. How long is the strip of lights?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 9 m and 12 m'
      },
      { does: 'Multiply each given side by itself', working: '9 × 9 = 81; 12 × 12 = 144' },
      { does: 'Add the two results', working: '81 + 144 = 225' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '15 × 15 = 225, so the longest side is 15 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '15 m' },
        {
          id: 's1',
          text: '21 m',
          slip: 'you add the two sides, 9 + 12, and never multiply them by themselves, though a straight line across is shorter than the two sides one after the other.'
        },
        {
          id: 's2',
          text: '225 m²',
          slip: 'you stop after adding the two results, so you give 225, which is an area, and not the length of a side.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So the longest side is the number that multiplies by itself to give the sum of the two other sides, each multiplied by itself.'
  },

  {
    id: 'm6-ck-pyth-whole',
    use: 'check',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a skate ramp',
    kind: 'problem',
    outcome: 'pyth',
    text: 'A skate ramp slopes up for 2.5 m along its surface and rises 1.5 m above level ground. How far does the ramp reach along the ground?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The longest side is the one opposite the square corner. Here it is the side you are given that is 2.5 m long. The side you want is one of the two shorter sides'
      },
      { does: 'Multiply each given side by itself', working: '2.5 × 2.5 = 6.25; 1.5 × 1.5 = 2.25' },
      {
        does: 'Take the shorter side’s result away from the longest side’s result',
        working: '6.25 − 2.25 = 4'
      },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '2 × 2 = 4, so the shorter side is 2 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '2 m' },
        {
          id: 's1',
          text: 'about 2.9 m',
          slip: 'you add the two results, though the longest side is one of the sides you were given, so the other side must be found by taking away.'
        },
        {
          id: 's2',
          text: '1 m',
          slip: 'you take the shorter side from the longest side, 2.5 − 1.5, and never multiply anything by itself, though it is the results that must be taken away.'
        }
      ],
      right: 'r'
    },
    why: 'In a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together. So a shorter side is the number that multiplies by itself to give the longest side multiplied by itself, with the other shorter side multiplied by itself taken away.'
  },

  {
    id: 'm6-ck-trig-last',
    use: 'check',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a kite on a string',
    kind: 'problem',
    outcome: 'trig',
    text: 'A child flies a kite on a straight string 50 m long. The string makes an angle of 40° with level ground. How high is the kite above the ground?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    steps: [
      {
        does: 'Name the three sides, starting from the angle you were given',
        working: 'The angle is 40°. The longest side, opposite the square corner, is the string, 50 m. The side opposite the angle is the height of the kite. The side next to the angle, the one that is not the longest, is the ground under the kite'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the longest side (50 m) and want the side opposite the angle. The sin button joins those two: sin = opposite ÷ longest'
      },
      { does: 'Write the button’s comparison with the numbers in', working: 'sin 40° = height ÷ 50' },
      { does: 'Get the side you want on its own', working: 'height = 50 × sin 40°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'sin 40° = 0.6428; 50 × 0.6428 = 32.14, so about 32.1 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '32.1 m' },
        {
          id: 's1',
          text: '38.3 m',
          slip: 'you use the cos button, which compares the side next to the angle with the longest side, though the two sides in this problem are the longest side and the side opposite the angle.'
        },
        {
          id: 's2',
          text: '77.8 m',
          slip: 'you divide by the button’s value, though the side you want is the one on top of the button’s comparison and the side you know is the one under it, so you should multiply.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator button gives one of those comparisons for the angle you type in. Choosing the button whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.'
  },

  {
    id: 'm6-ck-trig-whole',
    use: 'check',
    tier: 'clean',
    setting: 'home',
    topic: 'a leaning ladder',
    kind: 'problem',
    outcome: 'trig',
    text: 'A ladder 6 m long leans against a wall and makes an angle of 70° with level ground. How far is the foot of the ladder from the wall?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    steps: [
      {
        does: 'Name the three sides, starting from the angle you were given',
        working: 'The angle is 70°. The longest side, opposite the square corner, is the ladder, 6 m. The side opposite the angle is the height the ladder reaches up the wall. The side next to the angle, the one that is not the longest, is the distance from the foot of the ladder to the wall'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the longest side (6 m) and want the side next to the angle. The cos button joins those two: cos = next to ÷ longest'
      },
      { does: 'Write the button’s comparison with the numbers in', working: 'cos 70° = distance ÷ 6' },
      { does: 'Get the side you want on its own', working: 'distance = 6 × cos 70°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'cos 70° = 0.342; 6 × 0.342 = 2.052, so about 2.1 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '2.1 m' },
        {
          id: 's1',
          text: '5.6 m',
          slip: 'you use the sin button, which compares the side opposite the angle with the longest side, though the two sides in this problem are the longest side and the side next to the angle.'
        },
        {
          id: 's2',
          text: '3.8 m',
          slip: 'your calculator is set to radians and not to degrees, so the cos button reads 70 as 70 radians and gives 0.6333.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator button gives one of those comparisons for the angle you type in. Choosing the button whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.'
  },

  {
    id: 'm6-ck-similar-last',
    use: 'check',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a postcard of a poster',
    kind: 'problem',
    outcome: 'similar',
    text: 'A shop prints a postcard as an exact copy of a poster. The poster is 60 cm wide and 90 cm high, and the postcard is 12 cm wide. How high is the postcard?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    steps: [
      {
        does: 'Find a part that is measured on both things',
        working: 'The width is 12 cm on the postcard and 60 cm on the poster. The part you want, the height, is measured on the poster only: 90 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '60 ÷ 12 = 5'
      },
      { does: 'Divide the length you have by that number of times', working: '90 ÷ 5 = 18 cm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '18 cm' },
        {
          id: 's1',
          text: '450 cm',
          slip: 'you multiply by the number of times where you should divide, so the smaller thing gets the longer length.'
        },
        {
          id: 's2',
          text: '3.6 cm',
          slip: 'you divide by the number of times twice over, as for an area, though a length is asked and every length changes only once by that number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.'
  },

  {
    id: 'm6-ck-similar-whole',
    use: 'check',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a model aeroplane',
    kind: 'problem',
    outcome: 'similar',
    text: 'A model aeroplane is an exact copy of a real plane at a scale of 1 to 40: every 1 cm on the model stands for 40 cm on the plane. The model’s wings measure 30 cm from tip to tip. How wide are the real plane’s wings, in metres?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    steps: [
      {
        does: 'Find a part that is measured on both things',
        working: 'The scale is 1 to 40, so 1 cm on the model stands for 40 cm on the plane. So the length the scale compares is 1 cm on the model and 40 cm on the real plane. The part you want, the wing span, is measured on the model only: 30 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '40 ÷ 1 = 40'
      },
      {
        does: 'Multiply the length you have by that number of times',
        working: '30 × 40 = 1,200 cm'
      },
      {
        does: 'Write the answer in the unit the problem asks for',
        working: '1,200 cm ÷ 100 = 12 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '12 m' },
        {
          id: 's1',
          text: '1,200 m',
          slip: 'you forget to change the answer from cm into m at the end, so the number is the one in cm and the unit is wrong.'
        },
        {
          id: 's2',
          text: '120 m',
          slip: 'you divide by 10 and not by 100 when changing cm into m.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.'
  }
]);
