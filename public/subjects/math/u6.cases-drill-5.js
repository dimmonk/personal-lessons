// Basic Math, Unit Six: the drill’s problems (part 5 of 10): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for each of the key’s questions, and carries its whole working and
// the slip behind every wrong choice.
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
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  },

  {
    id: 'm6-dr-trig-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'a track north of due east',
    kind: 'problem',
    outcome: 'trig',
    text: 'A hiker follows a straight track that points 25° north of due east and walks 4 km along it. How far north of her starting point is she?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How far north of her starting point is she?',
      S1: 'follows a straight track that points 25° north of due east and walks 4 km along it',
      S2: 'How far north of her starting point is she?'
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
    echo: 'm6-wd-hike',
    steps: [
      {
        does: 'Name the three sides, starting from the angle you were given',
        working: 'The angle is 25°. The longest side, opposite the square corner, is the track, 4 km. The side opposite the angle is the distance north. The side next to the angle, the one that is not the longest, is the distance east'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the longest side (4 km) and want the side opposite the angle. The sin button joins those two: sin = opposite ÷ longest'
      },
      { does: 'Write the button’s comparison with the numbers in', working: 'sin 25° = distance ÷ 4' },
      { does: 'Get the side you want on its own', working: 'distance = 4 × sin 25°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'sin 25° = 0.4226; 4 × 0.4226 = 1.6904, so about 1.7 km'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '1.7 km' },
        {
          id: 's1',
          text: '3.6 km',
          slip: 'you use the cos button, which compares the side next to the angle with the longest side, though the two sides in this problem are the longest side and the side opposite the angle.'
        },
        {
          id: 's2',
          text: '9.5 km',
          slip: 'you divide by the button’s value, though the side you want is the one on top of the button’s comparison and the side you know is the one under it, so you should multiply.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator button gives one of those comparisons for the angle you type in. Choosing the button whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
    wouldChange: 'If the problem gave how far she walked east and how far north, and asked how far she is from her start in a straight line, it would be {o:pyth}.'
  },

  {
    id: 'm6-dl-similar-1',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a small flag',
    kind: 'problem',
    outcome: 'similar',
    text: 'A sailor makes a small flag as an exact copy of a big flag. The small flag is 30 cm wide and 20 cm high, and the big flag is 150 cm wide. How high is the big flag?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How high is the big flag?',
      S1: 'a small flag as an exact copy of a big flag. The small flag is 30 cm wide and 20 cm high, and the big flag is 150 cm wide',
      S2: 'How high is the big flag?'
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
        working: 'The width is 30 cm on the small flag and 150 cm on the big flag. The part you want, the height, is measured on the small flag only: 20 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '150 ÷ 30 = 5'
      },
      { does: 'Multiply the length you have by that number of times', working: '20 × 5 = 100 cm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '100 cm' },
        {
          id: 's1',
          text: '4 cm',
          slip: 'you divide by the number of times where you should multiply, so the bigger thing gets the shorter length.'
        },
        {
          id: 's2',
          text: '500 cm',
          slip: 'you multiply by the number of times twice over, as for an area, though a length is asked and every length changes only once by that number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  },

  {
    id: 'm6-dl-similar-2',
    use: 'drill',
    tier: 'clean',
    setting: 'travel',
    topic: 'a model of a bridge',
    kind: 'problem',
    outcome: 'similar',
    text: 'A museum has a model of a bridge at a scale of 1 to 50. The model is 36 cm long. How long is the real bridge, in meters?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How long is the real bridge, in meters?',
      S1: 'a model of a bridge at a scale of 1 to 50',
      S2: 'How long is the real bridge, in meters?'
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
        working: 'The scale is 1 to 50, so 1 cm on the model stands for 50 cm on the real bridge. So the length the scale compares is 1 cm on the model and 50 cm on the real bridge. The part you want, the length of the bridge, is measured on the model only: 36 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '50 ÷ 1 = 50'
      },
      {
        does: 'Multiply the length you have by that number of times',
        working: '36 × 50 = 1,800 cm'
      },
      {
        does: 'Write the answer in the unit the problem asks for',
        working: '1,800 cm ÷ 100 = 18 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '18 m' },
        {
          id: 's1',
          text: '1,800 m',
          slip: 'you forget to change the answer from cm into m at the end, so the number is the one in cm and the unit is wrong.'
        },
        {
          id: 's2',
          text: '180 m',
          slip: 'you divide by 10 and not by 100 when changing cm into m.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  }
]);
