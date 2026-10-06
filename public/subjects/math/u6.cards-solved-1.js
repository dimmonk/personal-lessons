// Basic Math, Unit Six: the worked examples (part 1 of 2). One for each of the first two kinds of problem.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u6', [
  {
    id: 'solved-pyth-1',
    kind: 'solved',
    outcome: 'pyth',
    h: 'Worked: the path across a 30 m by 40 m yard',
    link: 'Here is the procedure for the first kind of problem with real numbers: a rectangular yard, a path from one corner to the opposite corner, and every step written out.',
    problem: 'm6-s-pyth-1',
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 30 m and 40 m',
        why: 'The longest side of a triangle with a square corner is the one opposite the corner. The yard’s width and length meet at a corner of the yard, which is square, and the path closes the triangle opposite that corner. So the path is the longest side, and it is the side you want. If you were given the longest side, you would take away in the third step and not add.'
      },
      {
        does: 'Multiply each given side by itself',
        working: '30 × 30 = 900; 40 × 40 = 1,600',
        why: 'The square on the 30 m side has 30 × 30 = 900 square meters in it, and the square on the 40 m side has 40 × 40 = 1,600. It is the squares, and not the sides, that fit together.'
      },
      { does: 'Add the two results', working: '900 + 1,600 = 2,500' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '50 × 50 = 2,500, so the longest side is 50 m',
        why: 'The total, 2,500, is the number of square meters in the square on the path, so the path is the number that multiplies by itself to give 2,500. That number is the {t:sqroot} of 2,500, and the √ button on a calculator finds it. As a check, walking along two edges of the yard would be 30 + 40 = 70 m, and a straight line across is shorter, so 50 m is a sensible answer.'
      }
    ],
    result: 'The path is 50 m long. Going round two edges of the yard would be 70 m, so the path across saves 20 m.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'In a triangle with a square corner, the square on the longest side holds exactly as many square meters as the squares on the two shorter sides together, so adding the two results gives the square on the longest side.'
          },
          {
            id: 'y',
            text: '900 + 1,600 = 2,500.',
            note: 'That is true, and it is the working of this step, but it does not say why the two results are added, and not multiplied or taken away.'
          },
          {
            id: 'z',
            text: 'The path is longer than the yard’s width and than its length.',
            note: 'That is true, and it is a useful check on the answer, but it does not say why the two results are added.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Take the triangle with sides 3, 4 and 5. A square of tiles on the side of 3 holds 3 × 3 = 9 tiles. A square on the side of 4 holds 4 × 4 = 16 tiles. A square on the longest side, 5, holds 5 × 5 = 25 tiles, and 9 + 16 = 25.',
        'The same holds for every triangle with a square corner, whatever its size: 30, 40 and 50 give 900 + 1,600 = 2,500 = 50 × 50. It does not hold for a triangle without a square corner. So adding is not a choice: the squares on the two shorter sides add up to the square on the longest side, and this step builds that square.'
      ]
    }
  },

  {
    id: 'solved-trig-1',
    kind: 'solved',
    outcome: 'trig',
    h: 'Worked: the height of a tower measured at 35°',
    link: 'Here is the procedure for the second kind of problem with real numbers: a tower, an angle and one length, and every step written out.',
    problem: 'm6-s-trig-1',
    steps: [
      {
        does: 'Name the three sides, starting from the angle you were given',
        working: 'The angle is 35°. The longest side, opposite the square corner, is the straight line from her feet to the top of the tower. The side opposite the angle is the height of the tower. The side next to the angle, the one that is not the longest, is the 30 m along the ground',
        why: 'Everything in this procedure is measured from the angle, so the sides are named first. The side opposite the angle is the one that does not touch the angle. The side next to the angle is the one that touches it and is not the longest.'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the side next to the angle (30 m) and want the side opposite the angle. The tan button joins those two: tan = opposite ÷ next to'
      },
      {
        does: 'Write the button’s comparison with the numbers in',
        working: 'tan 35° = height ÷ 30',
        why: 'The height, the side you want, is on top, and the 30 m, the side you know, is underneath.'
      },
      {
        does: 'Get the side you want on its own',
        working: 'height = 30 × tan 35°',
        why: 'The comparison says that the height divided by 30 gives the button’s value for 35°. So the height is 30 times the button’s value. When the side you want is on top of the comparison, you multiply the side you know by the button’s value. When it is underneath, you divide.'
      },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'tan 35° = 0.7002; 30 × 0.7002 = 21.006, so about 21.0 m',
        why: 'The calculator has to be set to degrees, because the angle is in degrees. As a check, 35° is less than 45°, where the opposite and next-to sides would be equal, so the height should be less than the 30 m along the ground, and it is.'
      }
    ],
    result: 'The tower is about 21.0 m tall.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Each button (sin, cos or tan) gives one fixed comparison between two sides for a given angle, and the third side plays no part in it, so the button to use is the one whose two sides are the side you know and the side you want.'
          },
          {
            id: 'y',
            text: 'The tower is 30 m from the surveyor.',
            note: 'That is true, but it does not say how to choose between the three buttons.'
          },
          {
            id: 'z',
            text: 'The angle is 35°.',
            note: 'That is true, and every button needs it, but it does not say which button to use.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'There are three comparisons, and so three buttons. The sin button gives the side opposite the angle divided by the longest side. The cos button gives the side next to the angle divided by the longest side. The tan button gives the side opposite the angle divided by the side next to it. Each button joins two of the three sides.',
        'In this problem the side you know is next to the angle and the side you want is opposite it, and the longest side is not in the problem at all, so the button that joins those two is tan.'
      ]
    }
  }
]);
