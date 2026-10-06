// Basic Math, Unit Two: fresh problems for later days (part 2 of 4): three for each kind, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most
// often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 'rt-factor-3',
    use: 'return',
    tier: 'clean',
    setting: 'travel',
    topic: 'a number on a ticket',
    kind: 'problem',
    outcome: 'factor',
    text: 'A ticket has the number 66 on it. The clerk is asked to write 66 as a product of prime numbers. Which prime numbers are they?',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['write 66 as a product of prime numbers'], W1: ['write 66 as a product of prime numbers'] },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about what one whole number is made of or how it can be shared out. It follows no amount through time, hides no number to be found from a calculation, and has no shape or choice, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give one number and ask what it is made of, or every way it can be shared out. That is more than a yes or a no about one number, which is {a:W1.parts}.'
    },
    not: {
      outcome: 'prime',
      why: 'The problem asks for more than whether the number splits: it wants what the number is made of, or every way it splits. A yes or a no, which is what {o:prime} gives, would leave the question unanswered.'
    },
    steps: [
      {
        does: 'Find the smallest prime that divides the number exactly',
        working: '2 divides 66 exactly: 66 ÷ 2 = 33'
      },
      {
        does: 'Do the same to what is left, again and again, until what is left is prime',
        working: '33 ÷ 3 = 11; 11 is prime, so stop'
      },
      { does: 'Write the number as the product of every prime split off', working: '66 = 2 × 3 × 11' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '2 × 3 × 11' },
        { id: 's1', text: '6 × 11', slip: 'you stop while a piece can still be split: 6 is 2 × 3.' },
        { id: 's2', text: '1 × 2 × 3 × 11', slip: 'you write 1 as one of the primes, though 1 is not prime.' }
      ]
    },
    why: 'Splitting off the smallest prime that fits, and then doing the same to what is left, never leaves a piece that can still be split, and the pieces multiply back to the number. A number has only one set of primes that multiply to give it, so any order of splitting reaches the same list.'
  },

  {
    id: 'rt-hcf-1',
    use: 'return',
    tier: 'clean',
    setting: 'home',
    topic: 'a mat for coasters',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A householder has a rectangular mat 32 cm by 48 cm and wants to cut it into square coasters, all the same size, with nothing wasted. What is the largest side the coasters can have?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: {
      M1: ['cut it into square coasters, all the same size, with nothing wasted'],
      W1: ['cut it into square coasters, all the same size, with nothing wasted']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about pieces of one size that two whole numbers can both be split into. Nothing grows, no hidden number has to be found from a calculation, and there is no shape or chance, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two numbers and ask for the biggest piece that both can be cut into with nothing left over, which is {a:W1.piece}.'
    },
    not: {
      outcome: 'lcm',
      why: 'The problem asks for the biggest piece that fits into both numbers, and nothing repeats. {o:lcm} would ask when two repeats meet, and its answer is never less than the bigger number, where this answer is never more than the smaller.'
    },
    steps: [
      { does: 'Break each number into primes', working: '32 = 2 × 2 × 2 × 2 × 2; 48 = 2 × 2 × 2 × 2 × 3' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 2 × 2 × 2 × 2'
      },
      { does: 'Multiply the shared primes', working: '2 × 2 × 2 × 2 = 16' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '16 cm' },
        {
          id: 's1',
          text: '96 cm',
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        { id: 's2', text: '2 cm', slip: 'you count a shared prime once, though both numbers have it more than once.' }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
  },

  {
    id: 'rt-hcf-2',
    use: 'return',
    tier: 'clean',
    setting: 'health',
    topic: 'leaflets in bundles',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A clinic has 84 adult leaflets and 132 child leaflets. It wants to tie them in bundles with the same number in each, every bundle of one sort only and none left over. What is the largest bundle size?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: {
      M1: ['tie them in bundles with the same number in each, every bundle of one sort only and none left over'],
      W1: ['tie them in bundles with the same number in each, every bundle of one sort only and none left over']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about pieces of one size that two whole numbers can both be split into. Nothing grows, no hidden number has to be found from a calculation, and there is no shape or chance, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two numbers and ask for the biggest piece that both can be cut into with nothing left over, which is {a:W1.piece}.'
    },
    not: {
      outcome: 'lcm',
      why: 'The problem asks for the biggest piece that fits into both numbers, and nothing repeats. {o:lcm} would ask when two repeats meet, and its answer is never less than the bigger number, where this answer is never more than the smaller.'
    },
    steps: [
      { does: 'Break each number into primes', working: '84 = 2 × 2 × 3 × 7; 132 = 2 × 2 × 3 × 11' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 2 × 2 × 3'
      },
      { does: 'Multiply the shared primes', working: '2 × 2 × 3 = 12' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '12 leaflets' },
        {
          id: 's1',
          text: '924 leaflets',
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        {
          id: 's2',
          text: '6 leaflets',
          slip: 'you count a shared prime once, though both numbers have it more than once.'
        }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
  },

  {
    id: 'rt-hcf-3',
    use: 'return',
    tier: 'clean',
    setting: 'money',
    topic: 'two donations',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A charity has two donations, $45 and $60. It splits each into prizes of the same value, with nothing left over. What is the largest value each prize can have?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: {
      M1: ['splits each into prizes of the same value, with nothing left over'],
      W1: ['splits each into prizes of the same value, with nothing left over']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about pieces of one size that two whole numbers can both be split into. Nothing grows, no hidden number has to be found from a calculation, and there is no shape or chance, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two numbers and ask for the biggest piece that both can be cut into with nothing left over, which is {a:W1.piece}.'
    },
    not: {
      outcome: 'lcm',
      why: 'The problem asks for the biggest piece that fits into both numbers, and nothing repeats. {o:lcm} would ask when two repeats meet, and its answer is never less than the bigger number, where this answer is never more than the smaller.'
    },
    steps: [
      { does: 'Break each number into primes', working: '45 = 3 × 3 × 5; 60 = 2 × 2 × 3 × 5' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 3 × 5'
      },
      { does: 'Multiply the shared primes', working: '3 × 5 = 15' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$15' },
        {
          id: 's1',
          text: '$180',
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        {
          id: 's2',
          text: '$2700',
          slip: 'you multiply the two numbers together, which gives a piece far too big to fit into either.'
        }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
  },

  {
    id: 'rt-lcm-1',
    use: 'return',
    tier: 'clean',
    setting: 'building',
    topic: 'two flashing signs',
    kind: 'problem',
    outcome: 'lcm',
    text: 'A sign on a building flashes every 18 seconds and a second sign every 30 seconds. They flash together now. After how many seconds do they next flash together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['flashes every 18 seconds and a second sign every 30 seconds'],
      W1: ['flashes every 18 seconds and a second sign every 30 seconds']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about two repeats and when they coincide. The numbers are whole counts that repeat, and no amount is followed as it grows, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two repeating schedules and ask for the first time they coincide, which is {a:W1.together}.'
    },
    not: {
      outcome: 'hcf',
      why: 'Here two schedules repeat and the question is when they first coincide, so the answer is not less than the bigger number. {o:hcf} asks for a piece that fits into both numbers, and is never more than the smaller.'
    },
    steps: [
      { does: 'Break each number into primes', working: '18 = 2 × 3 × 3; 30 = 2 × 3 × 5' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 3 × 3 × 5'
      },
      { does: 'Multiply them together', working: '2 × 3 × 3 × 5 = 90' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '90 seconds' },
        {
          id: 's1',
          text: '6 seconds',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '540 seconds',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  },

  {
    id: 'rt-lcm-2',
    use: 'return',
    tier: 'clean',
    setting: 'leisure',
    topic: 'two lap runners',
    kind: 'problem',
    outcome: 'lcm',
    text: 'Ana runs one lap in 20 seconds and Ben in 28 seconds. They start together. After how many seconds will they next cross the start line together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['Ana runs one lap in 20 seconds and Ben in 28 seconds'],
      W1: ['Ana runs one lap in 20 seconds and Ben in 28 seconds']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about two repeats and when they coincide. The numbers are whole counts that repeat, and no amount is followed as it grows, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two repeating schedules and ask for the first time they coincide, which is {a:W1.together}.'
    },
    not: {
      outcome: 'modrem',
      why: 'Two things repeat, so there are two repeats to bring together. {o:modrem} needs one loop, or one group size, and a count that goes round it.'
    },
    steps: [
      { does: 'Break each number into primes', working: '20 = 2 × 2 × 5; 28 = 2 × 2 × 7' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 2 × 5 × 7'
      },
      { does: 'Multiply them together', working: '2 × 2 × 5 × 7 = 140' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '140 seconds' },
        {
          id: 's1',
          text: '4 seconds',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '560 seconds',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  }
]);
