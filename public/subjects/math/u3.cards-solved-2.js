// Basic Math, Unit Three: the worked examples (part 2 of 2). Two for each kind of problem, in different areas of life.
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
        why: 'There are two missing numbers, the pens and the notebooks, and a letter stands for each, so that the two facts can be written down and worked with. The count fact says how many items there are in all. The totals fact says what they cost, with each pen counted at 2 and each notebook at 5: 2 × x is the cost of all the pens.'
      },
      {
        does: 'Use the count fact to write one letter in terms of the other',
        working: 'From x + y = 20, x = 20 − y',
        why: 'The count fact can be turned round: if there are 20 items and y of them are notebooks, the pens are the rest, 20 − y. Now x can be replaced by 20 − y wherever it appears, which is what the next step does. Either letter could have been chosen, and the answer would have been the same.'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '2 × (20 − y) + 5 × y = 61'
      },
      {
        does: 'Solve for the letter that is left',
        working: '2 × 20 = 40, so 40 − 2 × y + 5 × y = 61; that is 40 + 3 × y = 61; 3 × y = 61 − 40 = 21; y = 21 ÷ 3 = 7',
        why: 'The bracket is multiplied out first: 2 × (20 − y) is 2 × 20 = 40, take away 2 × y. The two parts with y, taking away 2 × y and adding 5 × y, make 3 × y, because 5 − 2 = 3. So 40 + 3 × y = 61, which is undone like any calculation: take away the 40, then divide by 3.'
      },
      {
        does: 'Find the other number from the count fact',
        working: 'x = 20 − 7 = 13',
        why: 'y is only one of the two missing numbers. The count fact gives the other: 20 items in all, 7 of them notebooks, so 13 are pens.'
      },
      {
        does: 'Check both facts',
        working: '13 + 7 = 20; 2 × 13 + 5 × 7 = 26 + 35 = 61. Both hold',
        why: 'Both facts are checked as they were first written, because the working rewrote the totals fact and only the check shows that the pair fits both: 13 + 7 = 20 and 2 × 13 + 5 × 7 = 61.'
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
        'But the count fact says that there are 20 items, and of the pairs that fit the totals fact, only one has 20 items. Putting 20 − y in the place of x builds the count fact into the totals fact, so that one fact holds both. Only y is left, and one letter has one answer.'
      ]
    }
  },

  {
    id: 'solved-simul-2',
    kind: 'solved',
    outcome: 'simul',
    h: 'Worked again: bags of cement on a site',
    link: 'The same procedure in a different story, with a total that is a weight and not a price.',
    problem: 'm3-s-simul-2',
    steps: [
      {
        does: 'Name the two missing numbers with letters, and write the two facts',
        working: 'x is the number of bags of 25 kg and y is the number of bags of 40 kg. The count fact: x + y = 14. The totals fact: 25 × x + 40 × y = 410',
        why: 'Two kinds of bag are missing, so each gets a letter: x for the bags of 25 kg and y for the bags of 40 kg. The count fact is about the number of bags. The totals fact is about weight: each bag of 25 kg adds 25 and each bag of 40 kg adds 40, so 25 × x + 40 × y = 410, in kilograms.'
      },
      {
        does: 'Use the count fact to write one letter in terms of the other',
        working: 'From x + y = 14, x = 14 − y'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '25 × (14 − y) + 40 × y = 410',
        why: 'The same step as before, for the same reason: with 14 − y in place of x, the totals fact has only y in it, and one letter can be solved.'
      },
      {
        does: 'Solve for the letter that is left',
        working: '25 × 14 = 350, so 350 − 25 × y + 40 × y = 410; that is 350 + 15 × y = 410; 15 × y = 410 − 350 = 60; y = 60 ÷ 15 = 4',
        why: 'Multiplying out: 25 × 14 = 350, and the parts with y, taking away 25 × y and adding 40 × y, leave 15 × y. So 350 + 15 × y = 410, then 15 × y = 60, and y = 4.'
      },
      {
        does: 'Find the other number from the count fact',
        working: 'x = 14 − 4 = 10',
        why: 'The count fact gives the other number: 14 bags in all, 4 of them of 40 kg, so 10 are of 25 kg.'
      },
      {
        does: 'Check both facts',
        working: '10 + 4 = 14; 25 × 10 + 40 × 4 = 250 + 160 = 410. Both hold',
        why: 'The weights are checked as they were first written: 10 bags of 25 kg weigh 250 kg, 4 bags of 40 kg weigh 160 kg, and 250 + 160 = 410.'
      }
    ],
    result: 'There were 10 bags of 25 kg and 4 bags of 40 kg.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The count fact is the simpler of the two, so turning it round gives one letter on its own with no fractions in it.'
          },
          {
            id: 'y',
            text: 'x + y = 14.',
            note: 'That is true, but it is the fact itself, and not the reason why it is the one turned round.'
          },
          {
            id: 'z',
            text: 'There are 14 bags in all.',
            note: 'That is true, but it does not say why this fact is the one turned round.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Either fact could be turned round to write one letter in terms of the other. The count fact has only adding in it, so one step gives x = 14 − y.',
        'The totals fact has numbers multiplying the letters, so turning it round gives x = (410 − 40 × y) ÷ 25, which is 16.4 − 1.6 × y, and leads to fractions. The result is the same in the end, but the working is harder, so the count fact is the one used.'
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
        why: 'The banner is x metres wide and x + 3 metres long, and its area is the width times the length. The missing width appears twice: once as x × x and once inside 3 × x, which is why the equation has x² in it as well as x. Writing it as x² plus some of x, equal to the result, is the shape that the rest of the working is built for. In that shape, b stands for the number in front of x, here 3, and c stands for the result, here 70.'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 3 is 1.5, and 1.5 × 1.5 = 2.25. x² + 3 × x + 2.25 = 70 + 2.25 = 72.25'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 3 × x + 2.25 = (x + 1.5) × (x + 1.5), so (x + 1.5)² = 72.25',
        why: 'x² + 3 × x + 2.25 is exactly (x + 1.5) multiplied by itself, as the multiplying out in the last step showed. Writing it that way leaves x in one place only, inside the bracket, which is what a {t:sqroot} can undo.'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 72.25 is 8.5, and −8.5 × −8.5 is also 72.25, so x + 1.5 = 8.5 or x + 1.5 = −8.5',
        why: 'Two numbers multiply by themselves to give 72.25: 8.5 and −8.5, because a minus times a minus is a plus. Both are kept, because at this point nothing says which one the story wants.'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 8.5 − 1.5 = 7, or x = −8.5 − 1.5 = −10',
        why: 'The 1.5 was added to x inside the bracket, so it is taken away from each side to leave x on its own. There are two answers for x because there were two numbers that give 72.25 when they are {t:squared}.'
      },
      {
        does: 'Throw out any answer the story rules out, and check the one left',
        working: '−10 cannot be right, because a banner cannot have a width below zero, so x = 7. Check: 7 × (7 + 3) = 7 × 10 = 70',
        why: 'A width below zero means nothing for a banner, so the story rules it out. It still fits the equation: only the story throws it out. The check puts the answer that is left back into the problem: 7 × 10 = 70.'
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

  {
    id: 'solved-quad-2',
    kind: 'solved',
    outcome: 'quad',
    h: 'Worked again: two matching lawns',
    link: 'The same procedure in a different story, with a number in front of x², so that there is one more thing to do first.',
    problem: 'm3-s-quad-2',
    steps: [
      {
        does: 'Write it as x² + b × x = c, with x² on its own',
        working: '2 × x × (x + 6) = 144. Multiply out: 2 × x² + 12 × x = 144. Divide every term by 2: x² + 6 × x = 72',
        why: 'There are two lawns, each x metres wide and x + 6 metres long, so the total area is 2 × x × (x + 6) = 144. Multiplying out gives 2 × x² + 12 × x = 144. The number in front of x² is 2, which the steps after this one are not built for, so every term is divided by 2: x² + 6 × x = 72. Dividing both sides by the same number keeps the equation true.'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 6 is 3, and 3 × 3 = 9. x² + 6 × x + 9 = 72 + 9 = 81',
        why: 'Half of 6 is 3 and 3 × 3 = 9: this is the number that turns x² + 6 × x into (x + 3) multiplied by itself, the same step as before for the same reason. It is added to both sides: 72 + 9 = 81.'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 6 × x + 9 = (x + 3) × (x + 3), so (x + 3)² = 81',
        why: 'x² + 6 × x + 9 is (x + 3) × (x + 3), because (x + 3) multiplied out gives x × x + 3 × x + 3 × x + 9.'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 81 is 9, and −9 × −9 is also 81, so x + 3 = 9 or x + 3 = −9'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 9 − 3 = 6, or x = −9 − 3 = −12',
        why: 'The 3 is taken away from each answer: 9 − 3 = 6 and −9 − 3 = −12.'
      },
      {
        does: 'Throw out any answer the story rules out, and check the one left',
        working: '−12 cannot be right, because a lawn cannot have a width below zero, so x = 6. Check: 2 × 6 × (6 + 6) = 2 × 6 × 12 = 144',
        why: 'A lawn cannot have a width below zero, so −12 is thrown out. The check uses the whole problem, both lawns: 2 × 6 × 12 = 144.'
      }
    ],
    result: 'Each lawn is 6 m wide and 12 m long. Together they cover 2 × 72 = 144 m².',
    hold: {
      step: 3,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Both 9 and −9 multiply by themselves to give 81, so both fit, and nothing yet says which one the story wants.'
          },
          {
            id: 'y',
            text: '9 × 9 = 81.',
            note: 'That is true, but it does not say why there is a second answer.'
          },
          {
            id: 'z',
            text: '81 is above zero.',
            note: 'That is true, and it is why there are any answers at all, but it does not say why there are two.'
          }
        ],
        answer: 'x'
      },
      reason: [
        '9 × 9 = 81, and −9 × −9 is also 81, because multiplying two numbers with a minus sign gives a plus. So x + 3 could be 9 or −9, and the working has to keep both until the story speaks.',
        'Dropping the second answer is the commonest loss in this procedure. Here it does no harm, because the story throws that answer out anyway, but in a problem where both answers are possible, such as a profit that is zero at two different sales figures, it would lose half of the answer.'
      ]
    }
  }
]);
