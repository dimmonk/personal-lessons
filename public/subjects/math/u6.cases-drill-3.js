// Basic Math, Unit Six: the drill’s problems (part 3 of 10): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for each of the key’s questions, and carries its whole working and
// the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dl-trig-1',
    use: 'drill',
    tier: 'clean',
    setting: 'travel',
    topic: 'a cliff and a walker',
    kind: 'problem',
    outcome: 'trig',
    text: 'A walker stands on level ground 150 m from the foot of a cliff and sees its top at an angle of 24° above level ground. How high is the cliff?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How high is the cliff?',
      S1: 'stands on level ground 150 m from the foot of a cliff and sees its top at an angle of 24° above level ground',
      S2: 'How high is the cliff?'
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
        working: 'The angle is 24°. The longest side, opposite the square corner, is the line of sight to the top of the cliff. The side opposite the angle is the height of the cliff. The side next to the angle, the one that is not the longest, is the 150 m along the ground'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the side next to the angle (150 m) and want the side opposite the angle. The tan button joins those two: tan = opposite ÷ next to'
      },
      { does: 'Write the button’s comparison with the numbers in', working: 'tan 24° = height ÷ 150' },
      { does: 'Get the side you want on its own', working: 'height = 150 × tan 24°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'tan 24° = 0.4452; 150 × 0.4452 = 66.78, so about 66.8 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '66.8 m' },
        {
          id: 's1',
          text: '61.0 m',
          slip: 'you use the sin button, which compares the side opposite the angle with the longest side, though the two sides in this problem are the side next to the angle and the side opposite the angle.'
        },
        {
          id: 's2',
          text: '336.9 m',
          slip: 'you divide by the button’s value, though the side you want is the one on top of the button’s comparison and the side you know is the one under it, so you should multiply.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator button gives one of those comparisons for the angle you type in. Choosing the button whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  },

  {
    id: 'm6-dl-trig-2',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'a tent rope',
    kind: 'problem',
    outcome: 'trig',
    text: 'A tent rope is pegged to level ground 3.5 m from the foot of the tent pole, and the rope makes an angle of 55° with the ground. How long is the rope?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How long is the rope?',
      S1: 'pegged to level ground 3.5 m from the foot of the tent pole, and the rope makes an angle of 55° with the ground',
      S2: 'How long is the rope?'
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
        working: 'The angle is 55°. The longest side, opposite the square corner, is the rope. The side opposite the angle is the tent pole. The side next to the angle, the one that is not the longest, is the 3.5 m along the ground'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the side next to the angle (3.5 m) and want the longest side. The cos button joins those two: cos = next to ÷ longest'
      },
      { does: 'Write the button’s comparison with the numbers in', working: 'cos 55° = 3.5 ÷ rope' },
      { does: 'Get the side you want on its own', working: 'rope = 3.5 ÷ cos 55°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'cos 55° = 0.5736; 3.5 ÷ 0.5736 = 6.1018, so about 6.1 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '6.1 m' },
        {
          id: 's1',
          text: '4.3 m',
          slip: 'you use the sin button, which compares the side opposite the angle with the longest side, though the two sides in this problem are the side next to the angle and the longest side.'
        },
        {
          id: 's2',
          text: '158.2 m',
          slip: 'your calculator is set to radians and not to degrees, so the cos button reads 55 as 55 radians and gives 0.0221.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator button gives one of those comparisons for the angle you type in. Choosing the button whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  },

  {
    id: 'm6-dl-trig-3',
    use: 'drill',
    tier: 'clean',
    setting: 'building',
    topic: 'a road climbing a slope',
    kind: 'problem',
    outcome: 'trig',
    text: 'A road climbs 80 m while rising at a steady angle of 5° above level ground. How far along level ground does the road go?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How far along level ground does the road go?',
      S1: 'climbs 80 m while rising at a steady angle of 5° above level ground',
      S2: 'How far along level ground does the road go?'
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
        working: 'The angle is 5°. The longest side, opposite the square corner, is the road. The side opposite the angle is the climb of 80 m. The side next to the angle, the one that is not the longest, is the level ground under the road'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the side opposite the angle (80 m) and want the side next to the angle. The tan button joins those two: tan = opposite ÷ next to'
      },
      { does: 'Write the button’s comparison with the numbers in', working: 'tan 5° = 80 ÷ distance' },
      { does: 'Get the side you want on its own', working: 'distance = 80 ÷ tan 5°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'tan 5° = 0.08749; 80 ÷ 0.08749 = 914.3902, so about 914.4 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '914.4 m' },
        {
          id: 's1',
          text: '917.4 m',
          slip: 'you use the sin button, which compares the side opposite the angle with the longest side, though the two sides in this problem are the side opposite the angle and the side next to the angle.'
        },
        {
          id: 's2',
          text: '7.0 m',
          slip: 'you multiply by the button’s value, though the side you want is the one under the button’s comparison and the side you know is the one on top of it, so you should divide.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator button gives one of those comparisons for the angle you type in. Choosing the button whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  },

  {
    id: 'm6-dw-trig-1',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a dive along a slope',
    kind: 'problem',
    outcome: 'trig',
    text: 'A diver swims 40 m along a straight line that slopes down at an angle of 20° below the water surface. How deep is she at the end?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'How deep is she at the end?',
      S1: 'swims 40 m along a straight line that slopes down at an angle of 20° below the water surface',
      S2: 'How deep is she at the end?'
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
        working: 'The angle is 20°. The longest side, opposite the square corner, is the diver’s path, 40 m. The side opposite the angle is the depth below the surface. The side next to the angle, the one that is not the longest, is the distance along the surface above her'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the longest side (40 m) and want the side opposite the angle. The sin button joins those two: sin = opposite ÷ longest'
      },
      { does: 'Write the button’s comparison with the numbers in', working: 'sin 20° = depth ÷ 40' },
      { does: 'Get the side you want on its own', working: 'depth = 40 × sin 20°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'sin 20° = 0.342; 40 × 0.342 = 13.68, so about 13.7 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '13.7 m' },
        {
          id: 's1',
          text: '37.6 m',
          slip: 'you use the cos button, which compares the side next to the angle with the longest side, though the two sides in this problem are the longest side and the side opposite the angle.'
        },
        {
          id: 's2',
          text: '36.5 m',
          slip: 'your calculator is set to radians and not to degrees, so the sin button reads 20 as 20 radians and gives 0.9129.'
        }
      ],
      right: 'r'
    },
    why: 'In a {t:righttriangle} the angle settles how long each side is compared with the others, whatever the size of the triangle, and each calculator button gives one of those comparisons for the angle you type in. Choosing the button whose two sides are the one you know and the one you want, and then multiplying or dividing by its value, turns that comparison into the missing length.',
    wouldChange: 'If the problem gave the lengths of two sides and no angle besides the square corner, it would be {o:pyth}.'
  }
]);
