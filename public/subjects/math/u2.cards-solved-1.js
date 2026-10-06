// Basic Math, Unit Two: the worked examples, one for each kind of problem.
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
  },

  {
    id: 'solved-lcm-1',
    kind: 'solved',
    outcome: 'lcm',
    h: 'Worked: when two buses next arrive together',
    link: 'Here is the procedure for the fourth kind with real numbers, every step written out. It starts with the same step as the last kind, and then it keeps different primes.',
    problem: 's-lcm-1',
    steps: [
      {
        does: 'Break each number into primes',
        working: '20 = 2 × 2 × 5; 30 = 2 × 3 × 5',
        why: 'The same first step as for the biggest equal piece, for a different reason. A time when a bus that comes every 20 minutes arrives is a number that 20 divides, so it must contain every prime of 20, and the same goes for 30. Here 20 = 2 × 2 × 5 and 30 = 2 × 3 × 5.'
      },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 2 × 3 × 5'
      },
      {
        does: 'Multiply them together',
        working: '2 × 2 × 3 × 5 = 60',
        why: 'Multiplying gives 2 × 2 × 3 × 5 = 60. Check by counting: by minute 60 the 20-minute bus has come 3 times (3 × 20 = 60) and the 30-minute bus 2 times (2 × 30 = 60). Nothing earlier works: the 30-minute bus first arrives at 30, and 20 does not divide 30.'
      }
    ],
    result: 'The buses next arrive together after 60 minutes.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A time when both buses arrive must contain every prime of 20 and every prime of 30, so it needs each prime as many times as the number that has it more times.'
          },
          {
            id: 'y',
            text: 'Both numbers have a 2 and a 5.',
            note: 'That is true, but it does not say how many of each prime the answer needs.'
          },
          {
            id: 'z',
            text: '20 has two 2s and 30 has one 3.',
            note: 'That is true, and it shows where the different primes come from, but it does not say why they are all kept.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'For the 20-minute bus to arrive at a time, 20 must divide that time, so the time must contain 20’s primes: 2, 2 and 5. For the 30-minute bus, the time must contain 2, 3 and 5. A time that holds both lists at once needs two 2s, because 20 needs two. It needs one 3, because 30 needs one. And it needs one 5, because the 5 is shared, and one is enough for both.',
        'Using fewer would leave one bus out. Using more would not be the first time, because a smaller time already holds everything both numbers need. That is the opposite of the last kind. There the shared primes were kept, and a prime in only one number was left out. Here every prime of either number is kept.'
      ]
    }
  },

  {
    id: 'solved-modrem-1',
    kind: 'solved',
    outcome: 'modrem',
    h: 'Worked: the time 50 hours after 9 o’clock',
    link: 'Here is the procedure for the fifth kind with real numbers, every step written out.',
    problem: 's-modrem-1',
    steps: [
      {
        does: 'Find how many whole loops fit in the count',
        working: '12 × 4 = 48, the most whole loops that do not pass 50',
        why: 'A clock goes round in loops of 12 hours. Every whole loop brings it back to the time it started, so whole loops do not change what the clock shows. What matters is how many fit: 12 × 4 = 48 is the most that do not pass 50, because 12 × 5 = 60 is too many.'
      },
      { does: 'Take them away to find what is left over', working: '50 − 48 = 2' },
      {
        does: 'Move on from the start by what is left over',
        working: '9 o’clock, then 10 o’clock and 11 o’clock: 2 hours on is 11 o’clock',
        why: 'The 2 hours that are left over are moved on from 9 o’clock, the time the count started, and not from 12: 9 o’clock, then 10 o’clock, then 11 o’clock.'
      }
    ],
    result: 'Fifty hours after 9 o’clock, the clock shows 11 o’clock.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Each whole loop brings the clock back to where it started, so only what is left over after the whole loops can change the time.'
          },
          {
            id: 'y',
            text: '50 hours is more than two whole days.',
            note: 'That is true, but it does not say why the whole loops can be taken away.'
          },
          {
            id: 'z',
            text: '12 × 4 = 48.',
            note: 'That is true, and it is the step before this one, but it does not say why the 48 hours can be taken away.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'After 12 hours the clock shows 9 o’clock again. After 24 hours it shows 9 o’clock again, and after 36, and after 48. Taking the 48 away changes nothing about what the clock shows, which is why the step is allowed.',
        'What is left, 50 − 48 = 2, is the only part of the count that changes the time: the clock has gone round and back to 9 o’clock, and 2 more hours remain.'
      ]
    }
  },

  {
    id: 'solved-irrat-1',
    kind: 'solved',
    outcome: 'irrat',
    h: 'Worked: the diagonal of a square tile',
    link: 'Here is the procedure for the sixth kind with real numbers, every step written out.',
    problem: 's-irrat-1',
    steps: [
      {
        does: 'Name the whole number under the root sign',
        working: '√2: the whole number is 2',
        why: 'The diagonal is the number that multiplies by itself to give 2, so the whole number under the root sign is 2. Naming it says which number the question is about.'
      },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '1 × 1 = 1 and 2 × 2 = 4',
        why: 'If a whole number multiplied by itself gave 2, it would sit between a whole number whose product with itself is below 2 and one whose product is above 2. 1 × 1 = 1 is below 2, and 2 × 2 = 4 is above it. So the number is between 1 and 2, and neither end is the answer.'
      },
      {
        does: 'See whether it lands exactly on one of them',
        working: '2 is not 1 and not 4, so it is not any whole number multiplied by itself'
      },
      {
        does: 'Say whether it can be written exactly',
        working: '√2 cannot be written as a fraction or as a decimal that ends. Rounded, it is about 1.41',
        why: 'A calculator shows 1.41421356… and would show more digits if it had room, with no end. Any decimal it shows has been cut off, so it is a rounded value: 1.41 × 1.41 = 1.9881 is close to 2 and still not 2.'
      }
    ],
    result: 'The diagonal cannot be written exactly. Rounded, it is about 1.41 m, and no decimal can do better than rounding.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A whole number that does not land exactly on a whole number multiplied by itself has a root that can never be written exactly: the root is either a whole number or not exact, with nothing in between.'
          },
          {
            id: 'y',
            text: '2 is between 1 and 4.',
            note: 'That is true, and it is what the step before found, but it does not say what follows from 2 not landing on either.'
          },
          {
            id: 'z',
            text: '1 × 1 = 1 and 2 × 2 = 4.',
            note: 'That is true, but it is the working of the step before. It does not say why not landing on one of them matters.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The root of a whole number is one of two sorts. Either the whole number is a whole number multiplied by itself, like 4, 9 or 36, and then the root is that whole number, written exactly. Or it is not, and then the root can never be written exactly, as a fraction or as a decimal that ends. There is no third sort. It has been proved that no fraction multiplied by itself gives 2.',
        'So landing exactly on a whole number multiplied by itself is the only way for the root to be exact. 2 is not 1 and not 4, so it does not land, and the {t:sqroot} of 2 is not exact.'
      ]
    }
  }
]);
