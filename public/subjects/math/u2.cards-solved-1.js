// Basic Math, Unit Two: the worked examples, one for each kind of problem.
// Every step is named by what it does, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it. // The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u2', [

  {
    id: 'solved-prime-1',
    kind: 'solved',
    outcome: 'prime',
    h: 'Worked: is 67 a {t:prime}?',
    link: 'Here are the steps for the first kind on a real problem: a choir of 67 singers, with every step written out.',
    problem: 's-prime-1',
    steps: [
      {
        does: 'Find where testing can stop',
        working: '8 × 8 = 64 and 9 × 9 = 81, so √67 is between 8 and 9. Test no further than 8'
      },
      {
        does: 'List the primes up to there',
        working: 'Primes up to 8: 2, 3, 5, 7',
        why: 'Any number that fits by 6 also fits by 2 and by 3, so testing the primes covers every number.'
      },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '67 = 2 × 33 + 1, with 1 left over; 67 = 3 × 22 + 1, with 1 left over; 67 = 5 × 13 + 2, with 2 left over; 67 = 7 × 9 + 4, with 4 left over. None fits',
        why: 'A prime fits only if nothing is left over: 67 = 2 × 33 + 1 leaves 1, so 2 does not fit, even though 1 is close.'
      },
      {
        does: 'Say what it shows',
        working: 'No prime up to 8 fits 67 exactly, so 67 is prime',
        why: 'If 67 could be split into equal rows, some prime up to 8 would fit it exactly. None did, so it cannot.'
      }
    ],
    result: '67 is a {t:prime}. The choir cannot stand in equal rows with more than one row and more than one singer in each: the only layouts are one row of 67, or 67 rows of 1.',
    hold: {
      step: 0,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The smaller of two numbers that multiply to give 67 is never more than the {t:sqroot} of 67.'
          },
          {
            id: 'y',
            text: '67 is a little more than 8 × 8 = 64, and less than 9 × 9 = 81.',
            note: 'True, and it is how the stopping point is found. But it does not say why testing can stop there.'
          },
          {
            id: 'z',
            text: 'The primes up to 8 are 2, 3, 5 and 7, and there are only four.',
            note: 'True too, but it comes after the stopping point. It does not say why testing can stop at 8.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Suppose 67 could be split into equal rows. Then two whole numbers multiply to give 67: the number of rows and the number of singers in each row. They cannot both be more than 8, because 9 × 9 = 81 is already more than 67. So one of them is 8 or less, and testing up to 8 will find it.',
        'Testing past 8 only finds the same pair from the other side. If 7 × 9 were 67, testing 7 would already have found it.'
      ]
    }
  },

  {
    id: 'solved-factor-1',
    kind: 'solved',
    outcome: 'factor',
    h: 'Worked: the primes that make 84',
    link: 'Here are the steps for the second kind on a real problem, with every step written out.',
    problem: 's-factor-1',
    steps: [
      {
        does: 'Find the smallest prime that divides the number exactly',
        working: '2 divides 84 exactly: 84 ÷ 2 = 42',
        why: 'Start with the smallest prime so none is skipped: 2 fits 84 at once, so 84 = 2 × 42.'
      },
      {
        does: 'Do the same to what is left, again and again, until what is left is prime',
        working: '42 ÷ 2 = 21; 21 ÷ 3 = 7; 7 is prime, so stop'
      },
      {
        does: 'Write the number as the product of every prime split off',
        working: '84 = 2 × 2 × 3 × 7',
        why: 'Multiply back to check nothing was dropped: 2 × 2 = 4, 4 × 3 = 12, and 12 × 7 = 84. The 2 is there twice because 84 split by 2 twice.'
      }
    ],
    result: '84 is made of the primes 2, 2, 3 and 7: 84 = 2 × 2 × 3 × 7. The 2 is there twice, because 84 split by 2 twice.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A prime cannot be split any further, so you are done only when every piece left is a prime.'
          },
          {
            id: 'y',
            text: '42 splits by 2 to give 21, and 21 splits by 3 to give 7.',
            note: 'True, and it is this step’s working. But it does not say why the step carries on until a prime is left.'
          },
          {
            id: 'z',
            text: '84 is an even number, so 2 fits it first of all.',
            note: 'True, and it is why 2 fits first. But it does not say when the splitting ends.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'After 84 = 2 × 42, the 42 can still be split, because it is not prime. It splits into 2 × 21, and the 21 splits into 3 × 7. Now 2, 2, 3 and 7 are all prime, and none can be split any further.',
        'If you stopped at 84 = 2 × 42, one piece in your list could still be split, so it would not be a list of primes.'
      ]
    }
  },

  {
    id: 'solved-hcf-1',
    kind: 'solved',
    outcome: 'hcf',
    h: 'Worked: the biggest equal piece for 60 and 84',
    link: 'Here are the steps for the third kind on a real problem, with every step written out.',
    problem: 's-hcf-1',
    steps: [
      {
        does: 'Break each number into primes',
        working: '60 = 2 × 2 × 3 × 5; 84 = 2 × 2 × 3 × 7',
        why: 'A piece that fits 60 is built only from primes of 60, and a piece that fits 84 only from primes of 84.'
      },
      {
        does: 'Keep the primes that are in both lists, as many times as both lists have them',
        working: 'Both have 2 × 2 × 3'
      },
      {
        does: 'Multiply the shared primes',
        working: '2 × 2 × 3 = 12',
        why: 'Check by dividing: 60 = 12 × 5 and 84 = 12 × 7, so 12 fits both exactly, with nothing left over.'
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
            text: 'A piece that fits into both numbers can only be built from primes that both numbers have.'
          },
          {
            id: 'y',
            text: 'Both numbers have 2 × 2 × 3 among their primes.',
            note: 'True, but that is what this step finds. It does not say why only the shared primes are kept.'
          },
          {
            id: 'z',
            text: '60 has a 5 in its primes, and 84 has a 7.',
            note: 'True, and it shows what is left out. But it does not say why those primes cannot be in the piece.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'To fit into 60, a piece must be built from primes that 60 has. To fit into 84, it must be built from primes that 84 has. So a piece that fits both uses only primes that are in both lists. The 5 is only in 60 and the 7 only in 84, so neither can be used.',
        'Both numbers have two 2s, so the piece can use two. Each has one 3, so it uses one. Using more of any prime would leave one number short.'
      ]
    }
  },

  {
    id: 'solved-lcm-1',
    kind: 'solved',
    outcome: 'lcm',
    h: 'Worked: when two buses next arrive together',
    link: 'Here are the steps for the fourth kind on a real problem. The first step is the same as for the biggest equal piece, and then the steps keep different primes.',
    problem: 's-lcm-1',
    steps: [
      {
        does: 'Break each number into primes',
        working: '20 = 2 × 2 × 5; 30 = 2 × 3 × 5',
        why: 'A time when the 20-minute bus arrives is a number that 20 divides, so it holds all of 20’s primes. The same goes for 30.'
      },
      {
        does: 'Keep every prime from either list, as many times as the list with more of it has it',
        working: 'Kept: 2 × 2 × 3 × 5'
      },
      {
        does: 'Multiply them together',
        working: '2 × 2 × 3 × 5 = 60',
        why: 'Check by counting: by minute 60 the 20-minute bus has come 3 times and the 30-minute bus 2 times. Nothing earlier works: the 30-minute bus first arrives at 30, and 20 does not divide 30.'
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
            text: 'The time must hold all of 20’s primes and all of 30’s primes, so every prime from either list is kept.'
          },
          {
            id: 'y',
            text: 'Both 20 and 30 have a 2 and a 5 among their primes.',
            note: 'True, but it does not say how many of each prime the answer needs.'
          },
          {
            id: 'z',
            text: 'Only 20 has two 2s, and only 30 has a 3.',
            note: 'True, and it shows where the different primes come from. But it does not say why they are all kept.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'For the 20-minute bus, the time must hold 2, 2 and 5. For the 30-minute bus, it must hold 2, 3 and 5. To hold both lists it needs two 2s (from 20), one 3 (from 30) and one 5, which both share.',
        'Fewer would leave one bus out. More would not be the first time. This is the opposite of the last problem, where only the primes in both lists were kept.'
      ]
    }
  },

  {
    id: 'solved-modrem-1',
    kind: 'solved',
    outcome: 'modrem',
    h: 'Worked: the time 50 hours after 9 o’clock',
    link: 'Here are the steps for the fifth kind on a real problem, with every step written out.',
    problem: 's-modrem-1',
    steps: [
      {
        does: 'Find how many whole loops fit in the count',
        working: '12 × 4 = 48, the most whole loops that do not pass 50',
        why: 'The clock goes round in loops of 12 hours, and 12 × 5 = 60 is more than 50, so 4 whole loops is the most.'
      },
      { does: 'Take them away to find what is left over', working: '50 − 48 = 2' },
      {
        does: 'Move on from the start by what is left over',
        working: '9 o’clock, then 10 o’clock and 11 o’clock: 2 hours on is 11 o’clock',
        why: 'Count the 2 hours on from 9 o’clock, where the count started, and not from 12.'
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
            text: 'Each whole loop brings the clock back to where it started, so only what is left over can change the time.'
          },
          {
            id: 'y',
            text: '50 hours is a bit more than two whole days.',
            note: 'True, but it does not say why the whole loops can be taken away.'
          },
          {
            id: 'z',
            text: 'The step before found that 12 × 4 = 48.',
            note: 'True, but it does not say why the 48 hours can be taken away.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'After 12 hours the clock shows 9 o’clock again. So it does after 24, 36 and 48. Taking away the 48 changes nothing about what the clock shows.',
        'What is left, 50 − 48 = 2, is the only part that changes the time: the clock is back at 9 o’clock, with 2 more hours to go.'
      ]
    }
  },

  {
    id: 'solved-irrat-1',
    kind: 'solved',
    outcome: 'irrat',
    h: 'Worked: the diagonal of a square tile',
    link: 'Here are the steps for the sixth kind on a real problem, with every step written out.',
    problem: 's-irrat-1',
    steps: [
      {
        does: 'Name the whole number under the root sign',
        working: '√2: the whole number is 2',
        why: 'The diagonal is the number that multiplies by itself to give 2, so naming 2 says which number the question is about.'
      },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '1 × 1 = 1 and 2 × 2 = 4',
        why: 'If a whole number multiplied by itself gave 2, it would sit between these two, so the diagonal is between 1 and 2.'
      },
      {
        does: 'See whether it lands exactly on one of them',
        working: '2 is not 1 and not 4, so it is not any whole number multiplied by itself'
      },
      {
        does: 'Say whether it can be written exactly',
        working: '√2 cannot be written as a fraction or as a decimal that ends. Rounded, it is about 1.41',
        why: 'A calculator shows 1.41421356… and would show more digits if it had room. Any decimal it shows has been cut off: 1.41 × 1.41 = 1.9881, close to 2 but not 2.'
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
            text: 'The root of a whole number is either a whole number or never exact, with nothing in between.'
          },
          {
            id: 'y',
            text: 'The number 2 is between 1 and 4, at neither end.',
            note: 'True, and it is what the step before found. But it does not say what follows from missing both.'
          },
          {
            id: 'z',
            text: 'The step before found 1 × 1 = 1 and 2 × 2 = 4.',
            note: 'True, but it is only that step’s working. It does not say why missing both ends matters.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The root of a whole number is one of two sorts. If the number is a whole number multiplied by itself, like 4, 9 or 36, the root is that whole number, written exactly. If it is not, the root can never be written exactly, as a fraction or as a decimal that ends. There is no third sort, and it has been proved that no fraction multiplied by itself gives 2.',
        'So landing exactly on a whole number multiplied by itself is the only way for a root to be exact. 2 is not 1 and not 4, so the {t:sqroot} of 2 is not exact.'
      ]
    }
  }
]);
