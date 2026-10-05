// Basic Math, Unit Two: the worked examples (part 1 of 3). Two for each kind of problem, in different areas of life.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it. // The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u2', [
  {
    id: 'solved-prime-1',
    kind: 'solved',
    outcome: 'prime',
    h: 'Worked: is 67 a {t:prime}?',
    link: 'Here is the procedure for the first kind with real numbers: a choir of 67 singers, and every step written out.',
    problem: 's-prime-1',
    steps: [
      {
        does: 'Find where testing can stop',
        working: '8 × 8 = 64 and 9 × 9 = 81, so √67 is between 8 and 9. Test no further than 8'
      },
      {
        does: 'List the primes up to there',
        working: 'Primes up to 8: 2, 3, 5, 7',
        why: 'Only the primes need testing. A number that splits by 6 also splits by 2 and by 3, so if no prime fits, no other number does either. Listing the primes first leaves out 4, 6 and 8, which could never fit when 2 and 3 did not.'
      },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '67 = 2 × 33 + 1, with 1 left over; 67 = 3 × 22 + 1, with 1 left over; 67 = 5 × 13 + 2, with 2 left over; 67 = 7 × 9 + 4, with 4 left over. None fits',
        why: 'A prime fits only when the division leaves nothing over. Each line reads as whole groups and a left over: 67 = 2 × 33 + 1 is 33 groups of 2 with 1 left over, so 2 does not fit. A left over of 1 can look like “almost”, but almost does not count: a fit is a left over of nothing.'
      },
      {
        does: 'Say what it shows',
        working: 'No prime up to 8 fits 67 exactly, so 67 is prime',
        why: 'If 67 could be split into equal rows, with more than one row and more than one singer in each, some prime up to 8 would fit it exactly. None did, so it cannot be split, and nothing else needs testing.'
      }
    ],
    result: '67 is a {t:prime}. The choir cannot stand in equal rows with more than one row and more than one singer in each row: the only layouts are one row of 67, or 67 rows of 1.',
    hold: {
      step: 0,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'If 67 can be split into two whole numbers multiplied together, the smaller of the two is never more than the {t:sqroot} of 67, so there is no need to test past it.'
          },
          {
            id: 'y',
            text: '67 is a little more than 8 × 8 = 64.',
            note: 'That is true, and it is how the stopping point is found, but it does not say why testing can stop there.'
          },
          {
            id: 'z',
            text: 'The primes up to 8 are 2, 3, 5 and 7.',
            note: 'That is true too, but it comes after the stopping point is found. It does not say why testing can stop at 8.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Suppose 67 could be split into equal rows. Then two whole numbers multiply to give 67: the number of rows and the number of singers in each row. They cannot both be bigger than 8, because 9 × 9 = 81 is already more than 67, and two numbers bigger than 8 would multiply to even more. So one of the two is 8 or less, and a test of the numbers up to 8 would find it.',
        'Testing past 8 can only find the same pair from the other side: if 7 × 9 had been 67, the 7 would have been found by testing 7, and the 9 adds nothing. That is why the working stops at 8, the whole number just below the {t:sqroot} of 67.'
      ]
    }
  },

  {
    id: 'solved-prime-2',
    kind: 'solved',
    outcome: 'prime',
    h: 'Worked again: is 119 a {t:prime}?',
    link: 'The same procedure in a different story, with a number that does split, to show how the working ends early.',
    problem: 's-prime-2',
    steps: [
      {
        does: 'Find where testing can stop',
        working: '10 × 10 = 100 and 11 × 11 = 121, so √119 is between 10 and 11. Test no further than 10',
        why: 'The same first step, for the same reason: if 119 splits into two whole numbers multiplied together, the smaller one is no more than the {t:sqroot} of 119, so testing can stop at 10. Here 10 × 10 = 100 is below 119 and 11 × 11 = 121 is above it.'
      },
      {
        does: 'List the primes up to there',
        working: 'Primes up to 10: 2, 3, 5, 7',
        why: 'The primes up to 10. The numbers 4, 6, 8, 9 and 10 are left out: any of them that fitted would have been caught by a smaller prime.'
      },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '119 = 2 × 59 + 1, with 1 left over; 119 = 3 × 39 + 2, with 2 left over; 119 = 5 × 23 + 4, with 4 left over; 119 = 7 × 17, with nothing left over. 7 fits, so stop'
      },
      {
        does: 'Say what it shows',
        working: '7 fits 119 exactly, so 119 is not prime: 7 × 17 = 119',
        why: 'The working ended the moment a prime fitted, because one exact fit is all that is needed to show that 119 splits. The fit also gives the layout: 119 = 7 × 17, so 7 rows of 17 tiles, or 17 rows of 7.'
      }
    ],
    result: '119 is not a {t:prime}. The builder can lay the 119 tiles in 7 rows of 17 tiles, or in 17 rows of 7 tiles.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A prime fits only when nothing is left over, and one exact fit is enough to show that the number splits, so the dividing stops there.'
          },
          {
            id: 'y',
            text: '119 = 2 × 59 + 1, so dividing by 2 leaves 1 over.',
            note: 'That is true, and it is one line of the working, but it does not say why the working stops at 7.'
          },
          {
            id: 'z',
            text: 'There are four primes up to 10.',
            note: 'That is true, but it does not say what makes a division count as a fit, or why the dividing stops.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Each division is read as whole groups and what is left over. 119 = 2 × 59 + 1 means 59 whole groups of 2 and 1 left over, so 2 does not fit. 119 = 3 × 39 + 2 and 119 = 5 × 23 + 4 leave something over too. Only a left over of nothing is a fit, because only then do equal groups use every tile.',
        'At 7 the division is exact: 119 = 7 × 17. That one fit shows that 119 can be laid in equal rows, so there is no reason to test more primes. A number needs only one fit to be split, and it needs no fit up to the stopping point to be a {t:prime}.'
      ]
    }
  },

  {
    id: 'solved-factor-1',
    kind: 'solved',
    outcome: 'factor',
    h: 'Worked: the primes that make 84',
    link: 'Here is the procedure for the second kind with real numbers, every step written out.',
    problem: 's-factor-1',
    steps: [
      {
        does: 'Find the smallest prime that divides the number exactly',
        working: '2 divides 84 exactly: 84 ÷ 2 = 42',
        why: 'The smallest prime is tried first so that no prime is skipped: 2 before 3, 3 before 5, and so on. For 84 the first try, 2, fits at once: 84 ÷ 2 = 42, which means 84 = 2 × 42.'
      },
      {
        does: 'Do the same to what is left, again and again, until what is left is prime',
        working: '42 ÷ 2 = 21; 21 ÷ 3 = 7; 7 is prime, so stop'
      },
      {
        does: 'Write the number as the product of every prime split off',
        working: '84 = 2 × 2 × 3 × 7',
        why: 'The primes split off, 2, 2, 3 and 7, multiply back to the number: 2 × 2 = 4, 4 × 3 = 12, and 12 × 7 = 84. Multiplying back is the check that nothing was dropped. The 2 is written twice because 84 split by 2 twice.'
      }
    ],
    result: '84 is made of the prime numbers 2, 2, 3 and 7: 84 = 2 × 2 × 3 × 7. The 2 is there twice, because 84 split by 2 twice.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A prime cannot be split any further, so the splitting is finished only when every piece left is a prime.'
          },
          {
            id: 'y',
            text: '42 ÷ 2 = 21 and 21 ÷ 3 = 7.',
            note: 'That is true, and it is the working of this step, but it does not say why the step carries on until a prime is left.'
          },
          {
            id: 'z',
            text: '84 is an even number.',
            note: 'That is true, and it is why 2 fits first, but it does not say when the splitting ends.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'After the first split, 84 = 2 × 42, the 42 can still be split, because 42 is not a {t:prime}. Splitting it again gives 42 = 2 × 21, and the 21 can still be split into 3 × 7. Now 2, 2, 3 and 7 are all {t:prime}s, and none can be split any further, so the splitting is finished.',
        'If you stopped sooner, with 84 = 2 × 42, you would have a list in which 42 could still be split, and the list would not be made of primes. The step is repeated for exactly this reason: a piece that is not prime still has smaller pieces in it.'
      ]
    }
  },

  {
    id: 'solved-factor-2',
    kind: 'solved',
    outcome: 'factor',
    h: 'Worked again: every size of bunch for 30 roses',
    link: 'The same procedure in a different story, this time asked in the other wording of the kind: every way a number splits.',
    problem: 's-factor-2',
    steps: [
      {
        does: 'Break the number into primes',
        working: '30 = 2 × 3 × 5 (30 ÷ 2 = 15, 15 ÷ 3 = 5, and 5 is prime)',
        why: 'The same first step as for a list of primes, for the same reason: every way of sharing 30 out evenly uses some of its primes multiplied together, so the primes come first. Here 30 = 2 × 3 × 5.'
      },
      {
        does: 'Build every number you can make by multiplying some of those primes',
        working: '1, 2, 3, 5, 6 (2 × 3), 10 (2 × 5), 15 (3 × 5), 30 (2 × 3 × 5). Here 1 uses none of the primes and 30 uses all of them'
      },
      {
        does: 'Leave out 1 and 30, which give one group, or groups of one',
        working: '2, 3, 5, 6, 10, 15',
        why: 'A bunch of 1 rose would make 30 bunches, and a bunch of 30 roses would make one bunch. The problem asks for more than one bunch and more than one rose in each, so both are left out.'
      },
      {
        does: 'Count what is left',
        working: '6 different sizes',
        why: 'Each size left is a bunch size that fits exactly. For example 6 roses make 5 bunches, because 6 × 5 = 30, and 10 roses make 3 bunches.'
      }
    ],
    result: 'The florist can make bunches of 2, 3, 5, 6, 10 or 15 roses: six different sizes.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Every size of bunch that shares 30 out exactly is made by multiplying some of the primes of 30, and every product of some of them shares 30 out exactly.'
          },
          {
            id: 'y',
            text: '30 = 2 × 3 × 5 has three primes.',
            note: 'That is true, but it does not say why multiplying some of them together gives the bunch sizes.'
          },
          {
            id: 'z',
            text: 'A bunch of 1 rose and a bunch of 30 roses are in the list.',
            note: 'That is true, and the next step deals with them, but it does not say why the list is built from products of primes.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Take a bunch size that shares 30 out exactly, say 6: 30 = 6 × 5. Break the 6 into primes, 2 × 3, and the 5 is already a prime, so 30 = 2 × 3 × 5 again, and the 6 was made from some of the primes of 30. The same holds for any size that fits, because the primes of a number are the same however the number is split.',
        'The other way round, any product of some of the primes of 30 leaves the rest of the primes to make the number of bunches. 2 × 5 = 10 leaves the 3, so 10 roses make 3 bunches. So building every product lists every size, with none missed and none that does not fit.'
      ]
    }
  },

  {
    id: 'solved-hcf-1',
    kind: 'solved',
    outcome: 'hcf',
    h: 'Worked: the biggest equal piece for 60 and 84',
    link: 'Here is the procedure for the third kind with real numbers, every step written out.',
    problem: 's-hcf-1',
    steps: [
      {
        does: 'Break each number into primes',
        working: '60 = 2 × 2 × 3 × 5; 84 = 2 × 2 × 3 × 7',
        why: 'A piece that fits into 60 exactly is built only from primes of 60, and a piece that fits into 84 exactly is built only from primes of 84. So the primes of both numbers come first: 60 = 2 × 2 × 3 × 5 and 84 = 2 × 2 × 3 × 7.'
      },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 2 × 2 × 3'
      },
      {
        does: 'Multiply the shared primes',
        working: '2 × 2 × 3 = 12',
        why: 'Multiplying the shared primes builds the biggest piece that both numbers are built to hold: 2 × 2 × 3 = 12. Check by dividing: 60 = 12 × 5 and 84 = 12 × 7, so 12 fits both exactly, with nothing left over.'
      }
    ],
    result: 'The largest square tile has a side of 12 cm, and the panel is cut into 5 tiles across and 7 down.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A piece that fits into both numbers can only be built from the primes that both numbers have.'
          },
          {
            id: 'y',
            text: 'Both numbers have 2 × 2 × 3 among their primes.',
            note: 'That is true, but it is what the step finds. It does not say why only the shared primes are kept.'
          },
          {
            id: 'z',
            text: '60 has a 5 and 84 has a 7.',
            note: 'That is true, and it shows what is left out, but it does not say why the left-out primes cannot be in the piece.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'For a piece to fit into 60, it must be built from primes that 60 has. For a piece to fit into 84, it must be built from primes that 84 has. So a piece that fits into both is built from primes that are in both lists. The 5 is only in 60 and the 7 only in 84, so neither can be in the piece.',
        'For the 2, each number has it twice, so the piece can use it twice. For the 3, each has one, so the piece uses one. Using every shared prime, as many times as the number that has it fewer times, builds the biggest piece that fits both. Any more of a prime and one of the numbers would have too few of it.'
      ]
    }
  }
]);
