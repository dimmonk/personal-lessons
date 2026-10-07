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
      M1: 'The words {cue:M1} ask whether one whole number can be shared out in equal groups, and nothing grows or changes.',
      W1: 'The words {cue:W1} give one number and ask only a yes or a no: does anything but 1 and itself share it out?'
    },
    not: {
      outcome: 'factor',
      why: 'It only asks whether the number splits at all, so a yes or a no is enough. It would be {o:factor} if it asked for the primes or every way it splits.'
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
          slip: 'you count 199 = 11 × 18 + 1 as a fit, though a fit leaves nothing over.'
        },
        {
          id: 's2',
          text: 'Not prime: 1 × 199',
          slip: 'you count 1 and 199 as a fit, though every number splits by 1 and by itself.'
        }
      ]
    },
    why: 'If a number splits into equal groups, two whole numbers multiply to give it, and the smaller one is never more than the {t:sqroot}. So you only test the primes up to the {t:sqroot}: anything that fits by 6 also fits by 2 and by 3. If none fits, the number is a {t:prime}.'
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
      M1: 'The words {cue:M1} are about how one whole number splits, and nothing grows or changes.',
      W1: 'The words {cue:W1} give one number and want its primes, or every way it splits: a list, not a yes or a no.'
    },
    not: {
      outcome: 'prime',
      why: 'It asks for more than whether the number splits: it wants a list. A yes or a no, which is what {o:prime} gives, would leave the question unanswered.'
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
    why: 'Splitting off the smallest prime that fits, and then doing the same to what is left, never leaves a piece that can still be split, and the pieces multiply back to the number. A number has only one list of primes, so any order of splitting reaches the same one.'
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
      M1: 'The words {cue:M1} are about cutting whole numbers into pieces of one size, and nothing grows or changes.',
      W1: 'The words {cue:W1} give two numbers to cut into pieces of one size, and the question asks for the biggest.'
    },
    not: {
      outcome: 'lcm',
      why: 'The numbers are cut into equal pieces and nothing repeats, so the answer is never more than the smaller number. {o:lcm} would ask when two repeats meet.'
    },
    steps: [
      { does: 'Break each number into primes', working: '32 = 2 × 2 × 2 × 2 × 2; 48 = 2 × 2 × 2 × 2 × 3' },
      {
        does: 'Keep the primes that are in both lists, as many times as both lists have them',
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
          slip: 'you keep every prime either number has, which gives the first time two repeats meet, not the biggest piece that fits both.'
        },
        { id: 's2', text: '2 cm', slip: 'you count a shared prime once, though both numbers have it more than once.' }
      ]
    },
    why: 'A piece that fits both numbers is built only from primes that both have, and the biggest piece uses each shared prime as often as both have it. That is the greatest {t:factor} the two numbers share.'
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
      M1: 'The words {cue:M1} give two whole numbers that repeat, and no amount is growing.',
      W1: 'The words {cue:W1} give two things that repeat, and the question asks when they next happen together.'
    },
    not: {
      outcome: 'hcf',
      why: 'Two things repeat and the question is when they first meet, so the answer is never less than the bigger number. {o:hcf} would cut both numbers into equal pieces.'
    },
    steps: [
      { does: 'Break each number into primes', working: '18 = 2 × 3 × 3; 30 = 2 × 3 × 5' },
      {
        does: 'Keep every prime from either list, as many times as the list with more of it has it',
        working: 'Kept: 2 × 3 × 3 × 5'
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
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both, not the first meeting.'
        },
        {
          id: 's2',
          text: '540 seconds',
          slip: 'you multiply the two numbers together, which is a meeting but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first meeting is a number that both numbers divide, so it holds every prime of each. It needs each prime as often as the list with more of it: fewer, and one number would not divide it; more, and it would not be the first meeting.'
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
      M1: 'The words {cue:M1} ask where a count of days ends round a week, which is whole numbers going round a loop.',
      W1: 'The words {cue:W1} give a count and one loop, a week of 7 days, and ask where the count ends.'
    },
    not: {
      outcome: 'lcm',
      why: 'There is one loop, the week, and a count going round it. {o:lcm} needs two separate schedules.'
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
          slip: 'you move on by the number of whole weeks, 6, not by what is left over.'
        }
      ]
    },
    why: 'Every whole loop brings the count back to where it started, so whole loops change nothing. Only what is left over moves you on, counted from the start.'
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
      M1: 'The words {cue:M1} ask about the exact value of one number, and nothing grows or changes.',
      W1: 'The words {cue:W1} ask whether one number can be written exactly.'
    },
    not: {
      outcome: 'prime',
      why: 'Nothing is shared out in equal groups: the question is whether a root can be written exactly. {o:prime} would be about a count of things split into rows or teams.'
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
          slip: 'you assume every {t:sqroot} can only be rounded, and never check whether the number is a whole number multiplied by itself.'
        },
        {
          id: 's2',
          text: 'Exact: 112.5',
          slip: 'you halve the number instead of finding the number that multiplies by itself to give it.'
        }
      ]
    },
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly. So landing on a whole number multiplied by itself is the only way to be exact, and otherwise a calculator can only round it.'
  }
]);
