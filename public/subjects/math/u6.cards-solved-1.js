// Basic Math, Unit Six: the worked examples (part 1 of 3). Two for each kind of problem, in different areas of life.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u6', [
  {
    id: 'solved-pyth-1',
    kind: 'solved',
    outcome: 'pyth',
    h: 'Worked: the path across a 30 m by 40 m yard',
    link: 'Here is the procedure for the first kind of problem in this unit with real numbers: a rectangular yard, a path from one corner to the opposite corner, and every step written out.',
    problem: 'm6-s-pyth-1',
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The side you want closes the triangle opposite the square corner, so it is the longest side. You are given the two shorter sides, 30 m and 40 m',
        why: 'This step comes first because the rest of the working depends on it. The longest side of a triangle with a square corner is the one opposite the corner. The yard’s width and length meet at a corner of the yard, which is square, and the path closes the triangle opposite that corner. So the path is the longest side, and it is the side you want. You are given the two shorter sides, 30 m and 40 m.'
      },
      {
        does: 'Multiply each given side by itself',
        working: '30 × 30 = 900; 40 × 40 = 1,600',
        why: 'A square can be drawn on each side of the triangle, with that side as one of its edges. The square on the 30 m side has 30 × 30 = 900 square metres in it, and the square on the 40 m side has 40 × 40 = 1,600. These are the numbers the next step uses: it is the squares, and not the sides, that fit together.'
      },
      { does: 'Add the two results', working: '900 + 1,600 = 2,500' },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '50 × 50 = 2,500, so the longest side is 50 m',
        why: 'The total, 2,500, is the number of square metres in the square on the path, so the path is the side of that square: the number that multiplies by itself to give 2,500. That number is the {t:sqroot} of 2,500, and the √ button on a calculator finds it. Here 50 × 50 = 2,500 exactly, so the path is 50 m long. As a check, walking along two edges of the yard would be 30 + 40 = 70 m, and a straight line across is shorter than that, so 50 m is a sensible answer.'
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
            text: 'In a triangle with a square corner, the square on the longest side holds exactly as many square metres as the squares on the two shorter sides together, so adding the two results gives the square on the longest side.'
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
        'Take the smallest triangle with a square corner whose sides are all whole numbers: its sides are 3, 4 and 5. A square of tiles on the side of 3 holds 3 × 3 = 9 tiles. A square on the side of 4 holds 4 × 4 = 16 tiles. A square on the longest side, 5, holds 5 × 5 = 25 tiles, and 9 + 16 = 25. Together the 9 tiles and the 16 tiles make exactly as many tiles as the square on the longest side holds.',
        'The same holds for every triangle with a square corner, whatever its size: 30, 40 and 50 give 900 + 1,600 = 2,500 = 50 × 50. It does not hold for a triangle without a square corner, where the two squares together are more or less than the square on the longest side. So adding is not a choice: for this kind of triangle, the squares on the two shorter sides add up to the square on the longest side, and this step builds that square.'
      ]
    }
  },

  {
    id: 'solved-pyth-2',
    kind: 'solved',
    outcome: 'pyth',
    h: 'Worked again: the height of a pole held by a cable',
    link: 'The same fact about {o:pyth} in a different story, with a different side wanted. This time you are given the longest side, and you want a shorter one.',
    problem: 'm6-s-pyth-2',
    steps: [
      {
        does: 'Find which side is the longest',
        working: 'The longest side is the one opposite the square corner. Here it is the side you are given that is 10 m long. The side you want is one of the two shorter sides',
        why: 'The same first step, because it decides what to do next. The longest side is opposite the square corner, where the pole meets level ground, and that is the cable. So you are given the longest side, 10 m, and one shorter side, the 6 m along the ground. The side you want is the other shorter side, the height of the pole.'
      },
      {
        does: 'Multiply each given side by itself',
        working: '10 × 10 = 100; 6 × 6 = 36',
        why: 'The same step as in the first problem, for the same reason: 10 × 10 = 100 is the square on the cable, and 6 × 6 = 36 is the square on the 6 m along the ground. They are the squares on the two sides you are given.'
      },
      {
        does: 'Take the shorter side’s result away from the longest side’s result',
        working: '100 − 36 = 64'
      },
      {
        does: 'Find the number that multiplies by itself to give the result',
        working: '8 × 8 = 64, so the shorter side is 8 m',
        why: 'The 64 is the number of square metres in the square on the pole, so the height of the pole is the number that multiplies by itself to give 64. That is 8, because 8 × 8 = 64, so the pole is 8 m tall. As a check, a shorter side is always shorter than the longest side, and 8 m is shorter than the 10 m cable.'
      }
    ],
    result: 'The pole is 8 m tall.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The square on the longest side holds as many square metres as the squares on the two shorter sides together, so the square on the missing shorter side is what is left when the square on the known shorter side is taken away.'
          },
          {
            id: 'y',
            text: '100 − 36 = 64.',
            note: 'That is true, and it is the working of this step, but it does not say why the results are taken away this time when they were added for the yard.'
          },
          {
            id: 'z',
            text: 'The cable is longer than the pole.',
            note: 'That is true, but it does not say why this step takes away.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The fact is the same as before: the square on the longest side, 100, holds as many square metres as the squares on the two shorter sides together. One of those two squares, the one on the 6 m along the ground, is 36. So the other holds what is left: 100 − 36 = 64. Adding and taking away are one fact read two ways: 100 = 36 + 64, so 64 = 100 − 36.',
        'That is why the first step matters. If the side you want is the longest, you add the two results. If one of the sides you are given is the longest, you take away. Adding when you should take away would give a pole taller than its own cable, which cannot be a side of a triangle whose longest side is the cable.'
      ]
    }
  },

  {
    id: 'solved-trig-1',
    kind: 'solved',
    outcome: 'trig',
    h: 'Worked: the height of a tower measured at 35°',
    link: 'Here is the procedure for the second kind of problem in this unit with real numbers: a tower, an angle and one length, and every step written out.',
    problem: 'm6-s-trig-1',
    steps: [
      {
        does: 'Name the three sides, starting from the angle you were given',
        working: 'The angle is 35°. The longest side, opposite the square corner, is the straight line from her feet to the top of the tower. The side opposite the angle is the height of the tower. The side next to the angle, the one that is not the longest, is the 30 m along the ground',
        why: 'Everything in this procedure is measured from the angle, so the sides are named first. The longest side is always opposite the square corner. The side opposite the angle is the one that does not touch the angle. The side next to the angle is the one that touches it and is not the longest. They have to be named from the angle you were given: from the other end of the slope, the same side would be called by a different name.'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the side next to the angle (30 m) and want the side opposite the angle. The tan button joins those two: tan = opposite ÷ next to'
      },
      {
        does: 'Write the button’s comparison with the numbers in',
        working: 'tan 35° = height ÷ 30',
        why: 'The button’s comparison is a fraction made of two sides: for the tan button, the side opposite the angle on top and the side next to it underneath. Writing it with the numbers in shows where the missing side sits. Here the height, the side you want, is on top, and the 30 m, the side you know, is underneath.'
      },
      {
        does: 'Get the side you want on its own',
        working: 'height = 30 × tan 35°',
        why: 'The comparison says that the height divided by 30 gives the button’s value for 35°. So the height is 30 times the button’s value: multiplying both sides of the comparison by 30 leaves the height alone. When the side you want is on top of the comparison, you multiply the side you know by the button’s value. When it is underneath, you divide.'
      },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'tan 35° = 0.7002; 30 × 0.7002 = 21.006, so about 21.0 m',
        why: 'The calculator has to be set to degrees, because the angle is in degrees. Set to radians, another way of measuring angles, it gives a different number for the same 35. The tan button gives 0.7002 to four decimal places, and 30 × 0.7002 = 21.006, which is 21.0 m to one decimal place. As a check, 35° is less than 45°, where the opposite and next-to sides would be equal, so the height should be less than the 30 m along the ground, and it is.'
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
        'Once the angle of a {t:righttriangle} is fixed, its shape is fixed, and so is how long each side is compared with each other side, whatever the size of the triangle. For 35°, the side opposite the angle is always 0.7002 times as long as the side next to it. A tower ten times as big, seen at 35°, gives the same 0.7002. The tan button stores this comparison: type 35 and it gives 0.7002.',
        'There are three comparisons, and so three buttons. The sin button gives the side opposite the angle divided by the longest side. The cos button gives the side next to the angle divided by the longest side. The tan button gives the side opposite the angle divided by the side next to it. Each button joins two of the three sides. In this problem the side you know is next to the angle and the side you want is opposite it, and the longest side is not in the problem at all, so the button that joins those two is tan.'
      ]
    }
  }
]);
