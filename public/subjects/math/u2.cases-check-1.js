// Basic Math, Unit Two: the problems of the worked examples (part 1 of 2) and the problems the learner finishes in a check.
// A worked example's problem carries only the problem; its working is on the card. A check's problem carries the whole working,
// so that the app can show it up to the last step, or not at all, and name the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 's-prime-1',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'singers in rows',
    kind: 'problem',
    outcome: 'prime',
    text: 'A choir has 67 singers. The director wants to stand them in equal rows, with more than one row and more than one singer in each row. Is that possible?'
  },

  {
    id: 's-prime-2',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'floor tiles in a rectangle',
    kind: 'problem',
    outcome: 'prime',
    text: 'A builder has 119 floor tiles and wants to lay them as a rectangle of equal rows, with more than one row and more than one tile in each row. Is that possible?'
  },

  {
    id: 's-factor-1',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'a puzzle in a newsletter',
    kind: 'problem',
    outcome: 'factor',
    text: 'A puzzle in the staff newsletter says: write 84 as a product of prime numbers. Which prime numbers are they?'
  },

  {
    id: 's-factor-2',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'roses in bunches',
    kind: 'problem',
    outcome: 'factor',
    text: 'A florist has 30 roses and wants to know every size of equal bunch she can make, with more than one bunch and more than one rose in each bunch. How many different sizes are there?'
  },

  {
    id: 's-hcf-1',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'a panel cut into squares',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A craftsman has a rectangular panel 60 cm by 84 cm. He wants to cut it into square tiles, all the same size, with no waste. What is the largest side the squares can have?'
  },

  {
    id: 's-hcf-2',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'posts along two fences',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A farmer has two straight fences, one 126 m long and one 90 m long. She wants posts at equal gaps along both, with a post at each end of each fence. What is the greatest gap that works?'
  },

  {
    id: 's-lcm-1',
    use: 'teach',
    tier: 'clean',
    setting: 'travel',
    topic: 'two bus routes at one stop',
    kind: 'problem',
    outcome: 'lcm',
    text: 'Two bus routes stop at the same stop. One bus comes every 20 minutes and the other every 30 minutes. They have just arrived together. After how many minutes do they next arrive together?'
  },

  {
    id: 's-lcm-2',
    use: 'teach',
    tier: 'clean',
    setting: 'health',
    topic: 'two kinds of tablet',
    kind: 'problem',
    outcome: 'lcm',
    text: 'Ravi takes one kind of tablet every 6 hours and another kind every 8 hours. He has just taken both together. After how many hours will he next take both together?'
  },

  {
    id: 's-modrem-1',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'a clock and fifty hours',
    kind: 'problem',
    outcome: 'modrem',
    text: 'It is 9 o’clock on a clock that shows 12 hours. What time will the clock show 50 hours from now?'
  },

  {
    id: 's-modrem-2',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'pencils in boxes',
    kind: 'problem',
    outcome: 'modrem',
    text: 'A shop has 100 pencils and puts them in boxes of 8. How many pencils are left over once every box is full?'
  },

  {
    id: 's-irrat-1',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'the diagonal of a square tile',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square tile is 1 m along each side. A line is drawn from one corner to the opposite corner, and its length is the number that multiplies by itself to give 2. Can that length be written exactly, as a fraction or a decimal that ends?'
  },

  {
    id: 's-irrat-2',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'a square patio',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square patio has an area of 81 m². Its side is the number that multiplies by itself to give 81. Can the side be written exactly, as a fraction or a decimal that ends?'
  },

  {
    id: 'ck-prime-last',
    use: 'check',
    tier: 'clean',
    setting: 'health',
    topic: 'beds in a ward',
    kind: 'problem',
    outcome: 'prime',
    text: 'A hospital ward has 77 beds and wants to arrange them in equal rows, with more than one row and more than one bed in each row. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    steps: [
      {
        does: 'Find where testing can stop',
        working: '8 × 8 = 64 and 9 × 9 = 81, so √77 is between 8 and 9. Test no further than 8'
      },
      { does: 'List the primes up to there', working: 'Primes up to 8: 2, 3, 5, 7' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '77 = 2 × 38 + 1, with 1 left over; 77 = 3 × 25 + 2, with 2 left over; 77 = 5 × 15 + 2, with 2 left over; 77 = 7 × 11, with nothing left over. 7 fits, so stop'
      },
      { does: 'Say what it shows', working: '7 fits 77 exactly, so 77 is not prime: 7 × 11 = 77' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not prime: 7 × 11 = 77' },
        {
          id: 's1',
          text: 'Prime: none of 2, 3 and 5 fits it',
          slip: 'you stop testing at 5 and never try 7, though 7 × 7 = 49 is not more than 77.'
        },
        {
          id: 's2',
          text: 'Not prime: 5 × 15',
          slip: 'you read 77 = 5 × 15 + 2 as a fit and ignore the 2 left over, though a fit leaves nothing over.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

  {
    id: 'ck-prime-whole',
    use: 'check',
    tier: 'clean',
    setting: 'cooking',
    topic: 'biscuits on baking sheets',
    kind: 'problem',
    outcome: 'prime',
    text: 'A baker has 83 biscuits and wants to lay them on baking sheets in equal rows, with more than one row and more than one biscuit in each row. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    steps: [
      {
        does: 'Find where testing can stop',
        working: '9 × 9 = 81 and 10 × 10 = 100, so √83 is between 9 and 10. Test no further than 9'
      },
      { does: 'List the primes up to there', working: 'Primes up to 9: 2, 3, 5, 7' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '83 = 2 × 41 + 1, with 1 left over; 83 = 3 × 27 + 2, with 2 left over; 83 = 5 × 16 + 3, with 3 left over; 83 = 7 × 11 + 6, with 6 left over. None fits'
      },
      { does: 'Say what it shows', working: 'No prime up to 9 fits 83 exactly, so 83 is prime' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Prime: no prime up to 9 fits' },
        {
          id: 's1',
          text: 'Not prime: 3 × 28',
          slip: 'you round 83 ÷ 3 up to 28 and call 3 × 28 a fit, though that is not 83.'
        },
        {
          id: 's2',
          text: 'Not prime: 1 × 83',
          slip: 'you count 1 and 83 itself as a fit, though every number splits by 1 and by itself.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

  {
    id: 'ck-factor-last',
    use: 'check',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a puzzle on 150',
    kind: 'problem',
    outcome: 'factor',
    text: 'A puzzle book asks which prime numbers multiply together to give 150.',
    route: { M1: ['whole'], W1: ['parts'] },
    steps: [
      {
        does: 'Find the smallest prime that divides the number exactly',
        working: '2 divides 150 exactly: 150 ÷ 2 = 75'
      },
      {
        does: 'Do the same to what is left, again and again, until what is left is prime',
        working: '75 ÷ 3 = 25; 25 ÷ 5 = 5; 5 is prime, so stop'
      },
      { does: 'Write the number as the product of every prime split off', working: '150 = 2 × 3 × 5 × 5' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '2 × 3 × 5 × 5' },
        { id: 's1', text: '2 × 3 × 25', slip: 'you stop while a piece can still be split: 25 is 5 × 5.' },
        {
          id: 's2',
          text: '2 × 3 × 5',
          slip: 'you write the repeated 5 only once, which leaves a 5 out: the product is 30, not 150.'
        }
      ]
    },
    why: 'Splitting off the smallest prime that fits, and then doing the same to what is left, never leaves a piece that can still be split, and the pieces multiply back to the number. A number has only one set of primes that multiply to give it, so any order of splitting reaches the same list.'
  },

  {
    id: 'ck-factor-whole',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'chairs in rows',
    kind: 'problem',
    outcome: 'factor',
    text: 'A hall manager has 36 chairs and wants to know every size of equal row she can set out, with more than one row and more than one chair in each row. How many different row sizes are there?',
    route: { M1: ['whole'], W1: ['parts'] },
    steps: [
      {
        does: 'Break the number into primes',
        working: '36 = 2 × 2 × 3 × 3 (36 ÷ 2 = 18, 18 ÷ 2 = 9, 9 ÷ 3 = 3, and 3 is prime)'
      },
      {
        does: 'Build every number you can make by multiplying some of those primes',
        working: '1, 2, 3, 4 (2 × 2), 6 (2 × 3), 9 (3 × 3), 12 (2 × 2 × 3), 18 (2 × 3 × 3), 36 (2 × 2 × 3 × 3). Here 1 uses none of the primes and 36 uses all of them'
      },
      { does: 'Leave out 1 and 36, which give one group, or groups of one', working: '2, 3, 4, 6, 9, 12, 18' },
      { does: 'Count what is left', working: '7 different sizes' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '7' },
        { id: 's1', text: '9', slip: 'you count 1 and 36 as well, though they give one group, or groups of one.' },
        { id: 's2', text: '2', slip: 'you count only the prime numbers and never multiply any of them together.' }
      ]
    },
    why: 'Every group size that fits exactly is a product of some of the primes of the number, and every product of some of them fits exactly, so building all the products lists every size. Using none of them gives 1 and using all of them gives the number itself, which are the cases the problem rules out.'
  },

  {
    id: 'ck-hcf-last',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'a roll of cloth',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A tailor has two strips of cloth, one 48 cm wide and one 72 cm wide. He wants to cut both into strips of one width with nothing left over. What is the greatest width each strip can have?',
    route: { M1: ['whole'], W1: ['piece'] },
    steps: [
      { does: 'Break each number into primes', working: '48 = 2 × 2 × 2 × 2 × 3; 72 = 2 × 2 × 2 × 3 × 3' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 2 × 2 × 2 × 3'
      },
      { does: 'Multiply the shared primes', working: '2 × 2 × 2 × 3 = 24' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '24 cm' },
        {
          id: 's1',
          text: '144 cm',
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        { id: 's2', text: '6 cm', slip: 'you count a shared prime once, though both numbers have it more than once.' }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
  },

  {
    id: 'ck-hcf-whole',
    use: 'check',
    tier: 'clean',
    setting: 'cooking',
    topic: 'sandwiches and rolls',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A café has 45 ham sandwiches and 75 cheese sandwiches. It wants to put them in boxes with the same number in each, every box of one sort only and none left over. What is the largest box size?',
    route: { M1: ['whole'], W1: ['piece'] },
    steps: [
      { does: 'Break each number into primes', working: '45 = 3 × 3 × 5; 75 = 3 × 5 × 5' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 3 × 5'
      },
      { does: 'Multiply the shared primes', working: '3 × 5 = 15' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '15 sandwiches' },
        {
          id: 's1',
          text: '225 sandwiches',
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        {
          id: 's2',
          text: '3375 sandwiches',
          slip: 'you multiply the two numbers together, which gives a piece far too big to fit into either.'
        }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
  }
]);
