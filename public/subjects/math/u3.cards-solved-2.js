// Basic Math, Unit Three: the worked examples (part 2 of 2). One for each kind of problem.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it. The working was computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u3', [
  {
    id: 'solved-simul-1',
    kind: 'solved',
    outcome: 'simul',
    h: 'Worked: pens and notebooks for an office',
    link: 'Here is the procedure for the third kind with real numbers: pens and notebooks, a count and a bill, and every step written out.',
    problem: 'm3-s-simul-1',
    steps: [
      {
        does: 'Name the two missing numbers with letters, and write the two facts',
        working: 'x is the number of pens and y is the number of notebooks. The count fact: x + y = 20. The totals fact: 2 × x + 5 × y = 61',
        why: 'A letter stands for each missing number, so that the two facts can be written down. The count fact says how many items there are in all. The totals fact says what they cost: 2 × x is the cost of all the pens.'
      },
      {
        does: 'Use the count fact to write one letter in terms of the other',
        working: 'From x + y = 20, x = 20 − y',
        why: 'The count fact can be turned round: if there are 20 items and y of them are notebooks, the pens are the rest, 20 − y. Either letter could have been chosen.'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '2 × (20 − y) + 5 × y = 61'
      },
      {
        does: 'Solve for the letter that is left',
        working: '2 × 20 = 40, so 40 − 2 × y + 5 × y = 61; that is 40 + 3 × y = 61; 3 × y = 61 − 40 = 21; y = 21 ÷ 3 = 7',
        why: 'Multiply out the parentheses first, then put together the parts with y: 5 × y − 2 × y is 3 × y. So 40 + 3 × y = 61, which is undone like any calculation: take away the 40, then divide by 3.'
      },
      {
        does: 'Find the other number from the count fact',
        working: 'x = 20 − 7 = 13',
        why: 'y is only one of the two missing numbers. The count fact gives the other: 20 items in all, 7 of them notebooks, so 13 are pens.'
      },
      {
        does: 'Check both facts',
        working: '13 + 7 = 20; 2 × 13 + 5 × 7 = 26 + 35 = 61. Both hold',
        why: 'Both facts are checked as first written, because the working rewrote the totals fact and only the check shows that the pair fits both.'
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
            text: 'The totals fact has two letters, and many pairs fit it; with x replaced by 20 − y it has one letter, which has one answer.'
          },
          {
            id: 'y',
            text: '2 × (20 − y) is the cost of the pens.',
            note: 'That is true, but it does not say why x is replaced.'
          },
          {
            id: 'z',
            text: 'The totals fact is 61.',
            note: 'That is true, but it does not say why x is replaced.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'With two letters in it, the totals fact has no single answer. 2 × x + 5 × y = 61 is true of 28 pens and 1 notebook, and it is true of 3 pens and 11 notebooks, and of other pairs. On its own it cannot give the answer.',
        'But the count fact says that there are 20 items, and only one of those pairs has 20 items. Putting 20 − y in the place of x builds the count fact into the totals fact. Only y is left, and one letter has one answer.'
      ]
    }
  },

  {
    id: 'solved-quad-1',
    kind: 'solved',
    outcome: 'quad',
    h: 'Worked: the width of a banner',
    link: 'Here is the procedure for the fourth kind with real numbers: a banner whose length is linked to its width, and every step written out.',
    problem: 'm3-s-quad-1',
    steps: [
      {
        does: 'Write it as x² + b × x = c, with x² on its own',
        working: 'x × (x + 3) = 70. Multiply out: x × x is x², and x × 3 is 3 × x, so x² + 3 × x = 70',
        why: 'The banner is x meters wide and x + 3 meters long, and its area is the width times the length. The missing width appears twice, so the equation has x² in it as well as x. In x² + b × x = c, b is the number in front of x, here 3, and c is the result, here 70.'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 3 is 1.5, and 1.5 × 1.5 = 2.25. x² + 3 × x + 2.25 = 70 + 2.25 = 72.25'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 3 × x + 2.25 = (x + 1.5) × (x + 1.5), so (x + 1.5)² = 72.25',
        why: 'x² + 3 × x + 2.25 is exactly (x + 1.5) multiplied by itself. Writing it that way leaves x in one place only, which a {t:sqroot} can undo.'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 72.25 is 8.5, and −8.5 × −8.5 is also 72.25, so x + 1.5 = 8.5 or x + 1.5 = −8.5',
        why: 'Two numbers multiply by themselves to give 72.25: 8.5 and −8.5. Both are kept, because at this point nothing says which one the story wants.'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 8.5 − 1.5 = 7, or x = −8.5 − 1.5 = −10',
        why: 'The 1.5 was added to x inside the parentheses, so it is taken away to leave x on its own. There are two answers because there were two numbers that give 72.25 when they are {t:squared}.'
      },
      {
        does: 'Throw out any answer the story rules out, and check the one left',
        working: '−10 cannot be right, because a banner cannot have a width below zero, so x = 7. Check: 7 × (7 + 3) = 7 × 10 = 70',
        why: 'A width below zero means nothing for a banner, so the story rules it out, though it still fits the equation. The check puts the answer that is left back into the problem: 7 × 10 = 70.'
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
            text: 'The extra number is chosen so that the left side becomes one number multiplied by itself, which can then be undone by a {t:sqroot}.'
          },
          {
            id: 'y',
            text: 'Half of 3 is 1.5, and 1.5 × 1.5 = 2.25.',
            note: 'That is true, and it is the working of this step, but it does not say why that number is the one added.'
          },
          {
            id: 'z',
            text: 'It is added to both sides, so the equation stays true.',
            note: 'That is true, and it is why it is added to both sides, but it does not say why this number is chosen.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'x² + 3 × x is not a number multiplied by itself, so a {t:sqroot} cannot undo it yet. x plus 1.5, multiplied by itself, is (x + 1.5) × (x + 1.5). Multiplying it out gives x × x + 1.5 × x + 1.5 × x + 1.5 × 1.5, which is x² + 3 × x + 2.25. So x² + 3 × x is only 2.25 short of being (x + 1.5) multiplied by itself.',
        'Half the number in front of x, {t:squared}, is always the missing piece: half of 3 is 1.5 because the 1.5 × x appears twice, and 1.5 × 1.5 is the corner piece. The same 2.25 is added to the right side as well, so that the two sides stay equal.'
      ]
    }
  },
]);
