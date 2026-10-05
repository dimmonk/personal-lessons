// Basic Math, Unit Two: the worked examples (part 2 of 3). Two for each kind of problem, in different areas of life.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it. // The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u2', [
  {
    id: 'solved-hcf-2',
    kind: 'solved',
    outcome: 'hcf',
    h: 'Worked again: the biggest equal piece for 126 and 90',
    link: 'The same procedure in a different story, with numbers in which a prime is repeated.',
    problem: 's-hcf-2',
    steps: [
      {
        does: 'Break each number into primes',
        working: '126 = 2 × 3 × 3 × 7; 90 = 2 × 3 × 3 × 5',
        why: 'The same first step, for the same reason: 126 = 2 × 3 × 3 × 7 and 90 = 2 × 3 × 3 × 5.'
      },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 2 × 3 × 3'
      },
      {
        does: 'Multiply the shared primes',
        working: '2 × 3 × 3 = 18',
        why: 'Multiplying gives 2 × 3 × 3 = 18. Check: 126 = 18 × 7 and 90 = 18 × 5, so posts every 18 m fit both fences exactly, with a post at each end.'
      }
    ],
    result: 'The greatest gap is 18 m: the posts make 7 gaps along the 126 m fence and 5 gaps along the 90 m fence.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A piece may use a prime only as many times as both numbers have it, so the 3, which each number has twice, is used twice.'
          },
          {
            id: 'y',
            text: '126 is 36 more than 90.',
            note: 'That is true, but it does not say how many times each prime may be used.'
          },
          {
            id: 'z',
            text: 'Both numbers are even.',
            note: 'That is true, and it is why 2 is shared, but it does not say how many 3s are shared.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The 7 is only in 126 and the 5 is only in 90, so neither is shared, and neither is used. The 2 is in both once, so it is used once.',
        'The 3 is the point of this example. Each number has it twice, so the piece can use it twice, giving 3 × 3 = 9 from the threes alone. If only one of the numbers had two 3s and the other had one, the piece could use only one, because the number with one 3 would not divide by a piece with two. That is why a shared prime is counted as many times as the number that has it fewer times.'
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
    id: 'solved-lcm-2',
    kind: 'solved',
    outcome: 'lcm',
    h: 'Worked again: when two tablets are next taken together',
    link: 'The same procedure in a different story, with numbers in which one prime is needed three times.',
    problem: 's-lcm-2',
    steps: [
      {
        does: 'Break each number into primes',
        working: '6 = 2 × 3; 8 = 2 × 2 × 2',
        why: 'The same first step, for the same reason: 6 = 2 × 3 and 8 = 2 × 2 × 2.'
      },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 2 × 2 × 3'
      },
      {
        does: 'Multiply them together',
        working: '2 × 2 × 2 × 3 = 24',
        why: 'Multiplying gives 2 × 2 × 2 × 3 = 24. Check: 24 = 6 × 4 and 24 = 8 × 3, so after 24 hours the first tablet has been taken 4 times and the second 3 times, and nothing earlier works.'
      }
    ],
    result: 'Ravi next takes both tablets together after 24 hours.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The time must hold three 2s, because 8 needs three, and one 3, because 6 needs one: each prime as many times as the number that has it more times.'
          },
          {
            id: 'y',
            text: '6 and 8 are both even.',
            note: 'That is true, but it does not say how many 2s the answer needs.'
          },
          {
            id: 'z',
            text: '6 × 8 = 48.',
            note: 'That is true, and 48 is a time when both are taken, but it is not the first time. The step is about how many of each prime the first time needs.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The time must be divisible by 8, so it needs three 2s. It must be divisible by 6, so it needs a 2 and a 3. The 2 that 6 needs is already among the three 2s that 8 needs, so it is not added again. That leaves three 2s and one 3.',
        'Counting the 2 from 6 as well would give four 2s and a time of 48. That is a time when both tablets are taken, but 24 comes first, so 48 is not the next time. Each prime is counted as many times as the number that has it more times, and no more.'
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
    id: 'solved-modrem-2',
    kind: 'solved',
    outcome: 'modrem',
    h: 'Worked again: the pencils left over',
    link: 'The same procedure in a different story, where what is wanted is a number left over and not a place on a loop.',
    problem: 's-modrem-2',
    steps: [
      {
        does: 'Find how many whole boxes fit in the count',
        working: '8 × 12 = 96, the most whole boxes that do not pass 100',
        why: 'The same first step: how many whole boxes of 8 can be filled from 100 pencils. 8 × 12 = 96 is the most that do not pass 100, because 8 × 13 = 104 is too many.'
      },
      { does: 'Take them away to find what is left over', working: '100 − 96 = 4' },
      {
        does: 'Say what the left over means',
        working: '4 pencils are left over, too few to fill another box',
        why: 'The 4 left over is what is not in any full box. It is always smaller than a box, and 4 is less than 8: if it were 8 or more, another box could be filled, and the count of full boxes would be wrong.'
      }
    ],
    result: 'There are 4 pencils left over after 12 full boxes.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Taking away the pencils that are in full boxes leaves exactly the pencils that are not in any box, and that is the number asked for.'
          },
          {
            id: 'y',
            text: 'There are 12 full boxes.',
            note: 'That is true, and it is the answer to the step before, but it is not what the problem asks for.'
          },
          {
            id: 'z',
            text: 'A box holds 8 pencils.',
            note: 'That is true, but it does not say why the step takes the full boxes away.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The problem asks for the pencils that are not in a full box. 12 full boxes hold 8 × 12 = 96 pencils, so 96 pencils are in full boxes, and all the others are not: 100 − 96 = 4.',
        'This is why the step takes away, and does not divide again. Dividing 100 by 8 gives the number of boxes, 12, which is the answer to a different question. The number left over is what the whole boxes do not account for.'
      ]
    }
  }
]);
