// Basic Math, Unit Six: the worked examples (part 1 of 2). One for each of the first two types of problem.
// Every step is an action with its working, and most carry one short sentence of why. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u6', [
  {
    id: 'solved-pyth-1',
    kind: 'solved',
    outcome: 'pyth',
    h: 'Worked: the path across a 30 m by 40 m yard',
    link: 'A rectangular yard, a path from one corner to the opposite corner, and the steps for the first type with real numbers.',
    problem: 'm6-s-pyth-1',
    steps: [
      {
        does: 'Find the longest side',
        working: 'The path is opposite the square corner of the yard, so it is the longest side. You know the two shorter sides, 30 m and 40 m',
        why: 'Later you add if you want this side, and take away if you were given it.'
      },
      {
        does: 'Multiply each side you know by itself',
        working: '30 × 30 = 900; 40 × 40 = 1,600',
        why: 'The tile squares on the sides are what add up, not the sides themselves.'
      },
      { does: 'Add the two results', working: '900 + 1,600 = 2,500' },
      {
        does: 'Find the number that multiplies by itself to make that result',
        working: '50 × 50 = 2,500, so the path is 50 m',
        why: 'The 2,500 tiles make one big square and the path is one edge of it: the {t:sqroot} of 2,500, which the √ button gives.'
      }
    ],
    result: 'The path is 50 m long. Going round two edges of the yard would be 70 m, so the path across saves 20 m, and a straight line is shorter than the two sides, as it should be.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The tile squares on the two shorter sides together hold as many tiles as the square on the longest side.'
          },
          {
            id: 'y',
            text: 'Adding 900 and 1,600 gives 2,500, a bigger number than either.',
            note: 'True, but it only describes the sum. It does not say why you add.'
          },
          {
            id: 'z',
            text: 'The path across is shorter than walking round two edges.',
            note: 'True, and a good check on the answer, but it does not say why you add.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Try a triangle with sides 3, 4 and 5. The tile square on the side of 3 holds 3 × 3 = 9 tiles, the one on the side of 4 holds 4 × 4 = 16 tiles, and the one on the longest side, 5, holds 5 × 5 = 25 tiles. And 9 + 16 = 25.',
        'That is true of every {t:righttriangle}, whatever its size: 30, 40 and 50 give 900 + 1,600 = 2,500 = 50 × 50. It is not true without a square corner. So you add because the two short squares really do make up the long square.'
      ]
    }
  },

  {
    id: 'solved-trig-1',
    kind: 'solved',
    outcome: 'trig',
    h: 'Worked: the height of a tower measured at 35°',
    link: 'A tower, an angle and one length, and the steps for the second type with real numbers.',
    problem: 'm6-s-trig-1',
    steps: [
      {
        does: 'Name the three sides from the angle you were given',
        working: 'The angle is 35°. The longest side is the straight line from her feet to the top of the tower. The side opposite the angle is the height of the tower. The side next to the angle is the 30 m along the ground',
        why: 'The side opposite the angle does not touch it, and the side next to it touches it and is not the longest.'
      },
      {
        does: 'Pick the calculator button that joins the side you know and the side you want',
        working: 'You know the side next to the angle (30 m) and want the side opposite it. Tan joins those two: tan = opposite ÷ next to'
      },
      {
        does: 'Write the button’s sum with your numbers in',
        working: 'tan 35° = height ÷ 30',
        why: 'The side you want goes on top, and the side you know goes underneath.'
      },
      {
        does: 'Get the side you want on its own',
        working: 'height = 30 × tan 35°',
        why: 'When the side you want is on top, multiply the side you know by the button’s value; when it is underneath, divide.'
      },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'tan 35° = 0.7002; 30 × 0.7002 = 21.006, so about 21.0 m',
        why: 'The calculator must be set to degrees because the angle is in degrees.'
      }
    ],
    result: 'The tower is about 21.0 m tall. That is less than the 30 m along the ground, as it should be for an angle under 45°.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Each button joins two of the three sides, so you pick the one that joins the side you know and the side you want.'
          },
          {
            id: 'y',
            text: 'The surveyor stands 30 m from the foot of the tower.',
            note: 'True, but it does not say which of the three buttons to use.'
          },
          {
            id: 'z',
            text: 'The angle she measured is 35°.',
            note: 'True, and every button needs it, but it does not say which one to use.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'There are three buttons, and each joins two of the three sides. Sin joins the side opposite the angle and the longest side. Cos joins the side next to the angle and the longest side. Tan joins the side opposite the angle and the side next to it.',
        'Here you know the side next to the angle and want the side opposite it. The longest side is not in the problem at all, so the button is tan.'
      ]
    }
  }
]);
