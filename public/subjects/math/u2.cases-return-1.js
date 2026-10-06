// Basic Math, Unit Two: fresh problems for later days, one for each kind. Each carries its whole working and the slip behind every
// wrong choice. The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written.

FC.cases('math', 'u2', [

  {
    id: 'rt-prime-1',
    use: 'return',
    tier: 'clean',
    setting: 'health',
    topic: 'seeds in packets',
    kind: 'problem',
    outcome: 'prime',
    text: 'A gardener has 199 seeds and wants to pack them in packets of the same size, with more than one packet and more than one seed in each packet. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['pack them in packets of the same size, with more than one packet and more than one seed in each packet'],
      W1: ['pack them in packets of the same size, with more than one packet and more than one seed in each packet']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about whether one whole number can be shared out in equal groups. Nothing in it changes as time passes, no hidden number has to be found from a calculation, and there is no shape or choice, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give one number and ask only whether anything other than 1 and itself shares it out exactly. That is a yes or a no about one number, which is {a:W1.split}.'
    },
    not: {
      outcome: 'factor',
      why: 'The problem asks only whether the number splits at all, and a yes or a no is all that is wanted. {o:factor} would be the name if it asked what the number is made of, or for every way it splits.'
    },
    steps: [
      {
        does: 'Find where testing can stop',
        working: '14 × 14 = 196 and 15 × 15 = 225, so √199 is between 14 and 15. Test no further than 14'
      },
      { does: 'List the primes up to there', working: 'Primes up to 14: 2, 3, 5, 7, 11, 13' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '199 = 2 × 99 + 1, with 1 left over; 199 = 3 × 66 + 1, with 1 left over; 199 = 5 × 39 + 4, with 4 left over; 199 = 7 × 28 + 3, with 3 left over; 199 = 11 × 18 + 1, with 1 left over; 199 = 13 × 15 + 4, with 4 left over. None fits'
      },
      { does: 'Say what it shows', working: 'No prime up to 14 fits 199 exactly, so 199 is prime' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Prime: no prime up to 14 fits' },
        {
          id: 's1',
          text: 'Not prime: 11 × 18',
          slip: 'you read 199 = 11 × 18 + 1 as a fit and ignore the 1 left over, though a fit leaves nothing over.'
        },
        {
          id: 's2',
          text: 'Not prime: 1 × 199',
          slip: 'you count 1 and 199 itself as a fit, though every number splits by 1 and by itself.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

  {
    id: 'rt-factor-1',
    use: 'return',
    tier: 'clean',
    setting: 'home',
    topic: 'a padlock code',
    kind: 'problem',
    outcome: 'factor',
    text: 'A padlock code is the number 108. Which prime numbers multiply together to give 108?',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: {
      M1: ['Which prime numbers multiply together to give 108?'],
      W1: ['Which prime numbers multiply together to give 108?']
    },
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
        working: '2 divides 108 exactly: 108 ÷ 2 = 54'
      },
      {
        does: 'Do the same to what is left, again and again, until what is left is prime',
        working: '54 ÷ 2 = 27; 27 ÷ 3 = 9; 9 ÷ 3 = 3; 3 is prime, so stop'
      },
      { does: 'Write the number as the product of every prime split off', working: '108 = 2 × 2 × 3 × 3 × 3' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '2 × 2 × 3 × 3 × 3' },
        { id: 's1', text: '3 × 3 × 3 × 4', slip: 'you stop while a piece can still be split: 4 is 2 × 2.' },
        {
          id: 's2',
          text: '2 × 3 × 3 × 3',
          slip: 'you write the repeated 2 only once, which leaves a 2 out: the product is 54, not 108.'
        }
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
    id: 'rt-mod-2',
    use: 'return',
    tier: 'clean',
    setting: 'work',
    topic: 'a library book due date',
    kind: 'problem',
    outcome: 'modrem',
    text: 'Today is Saturday. A library book is due in 45 days. On which day of the week is it due?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['On which day of the week is it due?'], W1: ['On which day of the week is it due?'] },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about the part that is not in a whole group, or the place a count reaches on a loop. The numbers are whole counts, and no amount is followed through time, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give a count and one group size, or one loop, and ask for the part not in a whole group or for the place the count reaches, which is {a:W1.cycle}.'
    },
    not: {
      outcome: 'lcm',
      why: 'There is one group size, or one loop, and a count that goes round it. {o:lcm} needs two separate schedules, and asks when they first coincide.'
    },
    steps: [
      {
        does: 'Find how many whole loops fit in the count',
        working: '7 × 6 = 42, the most whole loops that do not pass 45'
      },
      { does: 'Take them away to find what is left over', working: '45 − 42 = 3' },
      {
        does: 'Move on from the start by what is left over',
        working: 'Saturday, then Sunday, Monday and Tuesday: 3 days on is Tuesday'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Tuesday' },
        { id: 's1', text: 'Saturday', slip: 'you throw away the 3 left over and stay where you started.' },
        {
          id: 's2',
          text: 'Friday',
          slip: 'you move on by the number of whole loops, 6, and not by what is left over.'
        }
      ]
    },
    why: 'Every whole loop brings the count back to the place it started, so whole loops change nothing. Only what is left over after them moves you on, and it is moved from the start.'
  },

  {
    id: 'rt-irrat-1',
    use: 'return',
    tier: 'clean',
    setting: 'home',
    topic: 'a square lawn',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square lawn has an area of 225 m². Its side is the number that multiplies by itself to give 225. Can the side be written exactly, as a fraction or a decimal that ends?',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: {
      M1: ['Can the side be written exactly, as a fraction or a decimal that ends?'],
      W1: ['Can the side be written exactly, as a fraction or a decimal that ends?']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about whether one number can be written exactly. It is about the value of a number, with no amount followed through time and no hidden number for a calculation to fit, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} ask whether one number can be written exactly, which is {a:W1.exact}.'
    },
    not: {
      outcome: 'prime',
      why: 'The problem asks for the exact value of a number, and nothing is shared out in equal groups. {o:prime} would be the name if it asked whether a count of things could be split in rows or teams.'
    },
    steps: [
      { does: 'Name the whole number under the root sign', working: '√225: the whole number is 225' },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '15 × 15 = 225 and 16 × 16 = 256'
      },
      { does: 'See whether it lands exactly on one of them', working: '225 is 15 × 15, so it lands exactly' },
      { does: 'Say whether it can be written exactly', working: '√225 = 15, which is exact' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Exact: 15' },
        {
          id: 's1',
          text: 'Not exact: only about 15',
          slip: 'you assume every {t:sqroot} is only a rounded value and never check whether the number is a whole number multiplied by itself.'
        },
        {
          id: 's2',
          text: 'Exact: 112.5',
          slip: 'you halve the number, instead of finding the number that multiplies by itself to give it.'
        }
      ]
    },
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly as a fraction. There is nothing in between, so landing exactly on a whole number multiplied by itself is the only way for it to be exact, and when it does not land there, a calculator can only round it.'
  }
]);
