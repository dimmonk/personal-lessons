// Basic Math, Unit Three: the worked examples (part 2 of 2). One for each type of problem.
// Every step has a short action, its working and, on most, one or two plain sentences of why. One step in each carries the idea, and its reason is held
// back until the learner has chosen it. The working was computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u3', [
  {
    id: 'solved-simul-1',
    kind: 'solved',
    outcome: 'simul',
    h: 'Worked: pens and notebooks for an office',
    link: 'Now the steps with real numbers: pens and notebooks, a count and a bill.',
    problem: 'm3-s-simul-1',
    steps: [
      {
        does: 'Give each missing number a letter, and write the two facts',
        working: 'x is the number of pens and y is the number of notebooks. The count fact: x + y = 20. The totals fact: 2 × x + 5 × y = 61',
        why: 'The count fact says how many items there are. The totals fact says what they cost: 2 × x is what all the pens cost.'
      },
      {
        does: 'Use the count fact to write one letter using the other',
        working: 'From x + y = 20, x = 20 − y',
        why: 'There are 20 items and y of them are notebooks, so the pens are the rest: 20 − y.'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '2 × (20 − y) + 5 × y = 61'
      },
      {
        does: 'Solve for the letter that is left',
        working: '2 × 20 = 40, so 40 − 2 × y + 5 × y = 61; that is 40 + 3 × y = 61; 3 × y = 61 − 40 = 21; y = 21 ÷ 3 = 7',
        why: 'Multiply out the parentheses, then put the y parts together: 5 × y − 2 × y is 3 × y. Then undo it like any calculation: take away 40, then divide by 3.'
      },
      {
        does: 'Find the other number from the count fact',
        working: 'x = 20 − 7 = 13',
        why: 'There are 20 items and 7 are notebooks, so 13 are pens.'
      },
      {
        does: 'Check both facts',
        working: '13 + 7 = 20; 2 × 13 + 5 × 7 = 26 + 35 = 61. Both hold',
        why: 'Check the facts as first written, because only that shows the pair fits both.'
      }
    ],
    result: 'The office bought 13 pens and 7 notebooks.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'With x swapped for 20 − y, only one letter is left, and one letter has one answer.'
          },
          {
            id: 'y',
            text: '2 × (20 − y) is what the pens cost, and 5 × y is what the notebooks cost.',
            note: 'True, but it does not say why x is swapped out.'
          },
          {
            id: 'z',
            text: 'The totals fact says the whole bill is $61, and the bill has to come out right.',
            note: 'True, but it does not say why x is swapped out.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'On its own the totals fact has many answers. 2 × x + 5 × y = 61 fits 28 pens and 1 notebook, and it fits 3 pens and 11 notebooks.',
        'The count fact says there are 20 items, and only one of those pairs adds up to 20. Swapping x for 20 − y builds that into the totals fact, so only y is left.'
      ]
    }
  },

  {
    id: 'solved-quad-1',
    kind: 'solved',
    outcome: 'quad',
    h: 'Worked: the width of a banner',
    link: 'Now the steps with real numbers: a banner whose length depends on its width.',
    problem: 'm3-s-quad-1',
    steps: [
      {
        does: 'Write it as x² + b × x = c, with x² on its own',
        working: 'x × (x + 3) = 70. Multiply out: x × x is x², and x × 3 is 3 × x, so x² + 3 × x = 70',
        why: 'The banner is x wide and x + 3 long, so x shows up twice in the area. Here b is 3, the number in front of x, and c is 70, the area.'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 3 is 1.5, and 1.5 × 1.5 = 2.25. x² + 3 × x + 2.25 = 70 + 2.25 = 72.25'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 3 × x + 2.25 = (x + 1.5) × (x + 1.5), so (x + 1.5)² = 72.25',
        why: 'x² + 3 × x + 2.25 is exactly (x + 1.5) times itself, so x is now in one place and a {t:sqroot} can undo it.'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 72.25 is 8.5, and −8.5 × −8.5 is also 72.25, so x + 1.5 = 8.5 or x + 1.5 = −8.5',
        why: 'Both 8.5 and −8.5 give 72.25 when multiplied by themselves, and nothing yet says which one the problem wants.'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 8.5 − 1.5 = 7, or x = −8.5 − 1.5 = −10',
        why: 'The 1.5 was added to x inside the parentheses, so taking it away leaves x on its own. There are two answers because there were two numbers that give 72.25 when {t:squared}.'
      },
      {
        does: 'Throw out any answer the problem rules out, and check the one left',
        working: '−10 cannot be right, because a banner cannot have a width below zero, so x = 7. Check: 7 × (7 + 3) = 7 × 10 = 70',
        why: 'A banner cannot be −10 m wide, so that answer goes. Then 7 goes back into the problem: 7 × 10 = 70.'
      }
    ],
    result: 'The banner is 7 m wide and 10 m long: 7 × 10 = 70 m².',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The extra number makes the left side one number times itself, which a {t:sqroot} can then undo.'
          },
          {
            id: 'y',
            text: 'Half of 3 is 1.5, and 1.5 × 1.5 = 2.25, so 2.25 is the number to add.',
            note: 'True, but that is the arithmetic. It does not say why this is the number to add.'
          },
          {
            id: 'z',
            text: 'It is added to both sides, so the equation stays true and balanced.',
            note: 'True, but that is why it goes on both sides, not why it is this number.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'x² + 3 × x is not a number times itself yet, so a {t:sqroot} cannot undo it. (x + 1.5) times itself comes to x × x + 1.5 × x + 1.5 × x + 1.5 × 1.5, which is x² + 3 × x + 2.25.',
        'So x² + 3 × x is only 2.25 short. Half of 3 is 1.5 because 1.5 × x shows up twice, and 1.5 × 1.5 is the corner piece. The same 2.25 goes on the right side so both sides stay equal.'
      ]
    }
  },
]);
