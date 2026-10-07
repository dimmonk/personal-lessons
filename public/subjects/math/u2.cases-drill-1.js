// Basic Math, Unit Two: the drill's problems. Every problem has a route, marked words and a reason for the key's first
// question and for the unit's own question, and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [

  {
    id: 'dr-prime-2',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'books in piles',
    kind: 'problem',
    outcome: 'prime',
    text: 'A teacher has 51 exercise books and wants to share them out in equal piles, with more than one pile and more than one book in each pile. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['share them out in equal piles, with more than one pile and more than one book in each pile'],
      W1: ['share them out in equal piles, with more than one pile and more than one book in each pile']
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
        working: '7 × 7 = 49 and 8 × 8 = 64, so √51 is between 7 and 8. Test no further than 7'
      },
      { does: 'List the primes up to there', working: 'Primes up to 7: 2, 3, 5, 7' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '51 = 2 × 25 + 1, with 1 left over; 51 = 3 × 17, with nothing left over. 3 fits, so stop'
      },
      { does: 'Say what it shows', working: '3 fits 51 exactly, so 51 is not prime: 3 × 17 = 51' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not prime: 3 × 17 = 51' },
        {
          id: 's1',
          text: 'Prime: it is odd and does not end in 5',
          slip: 'you decide by how the number looks (odd, not ending in 5) and never try 3.'
        },
        {
          id: 's2',
          text: 'Not prime: 5 × 10',
          slip: 'you count 51 = 5 × 10 + 1 as a fit, though a fit leaves nothing over.'
        }
      ]
    },
    why: 'If a number splits into equal groups, two whole numbers multiply to give it, and the smaller one is never more than the {t:sqroot}. So you only test the primes up to the {t:sqroot}: anything that fits by 6 also fits by 2 and by 3. If none fits, the number is a {t:prime}.'
  },

  {
    id: 'dr-factor-1',
    use: 'drill',
    tier: 'clean',
    setting: 'cooking',
    topic: 'cupcakes in rows',
    kind: 'problem',
    outcome: 'factor',
    text: 'A caterer has 90 cupcakes and wants to know every way to set them out in equal rows, with more than one row and more than one cupcake in each row. How many different row lengths are there?',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['every way to set them out in equal rows'], W1: ['every way to set them out in equal rows'] },
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
        does: 'Break the number into primes',
        working: '90 = 2 × 3 × 3 × 5 (90 ÷ 2 = 45, 45 ÷ 3 = 15, 15 ÷ 3 = 5, and 5 is prime)'
      },
      {
        does: 'Build every number you can make by multiplying some of those primes',
        working: '1, 2, 3, 5, 6 (2 × 3), 9 (3 × 3), 10 (2 × 5), 15 (3 × 5), 18 (2 × 3 × 3), 30 (2 × 3 × 5), 45 (3 × 3 × 5), 90 (2 × 3 × 3 × 5). Here 1 uses none of the primes and 90 uses all of them'
      },
      {
        does: 'Leave out 1 and 90, which mean one group, or groups of one',
        working: '2, 3, 5, 6, 9, 10, 15, 18, 30, 45'
      },
      { does: 'Count what is left', working: '10 different sizes' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '10' },
        { id: 's1', text: '12', slip: 'you count 1 and 90 too, though they mean one group, or groups of one.' },
        { id: 's2', text: '3', slip: 'you list only the primes and never multiply any of them together.' }
      ]
    },
    why: 'Every group size that fits is a product of some of the number’s primes, and every such product fits, so building all the products lists every size. Using none gives 1, and using all gives the number itself, which the problem rules out.'
  },

  {
    id: 'dr-hcf-1',
    use: 'drill',
    tier: 'clean',
    setting: 'building',
    topic: 'two planks to cut',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A joiner has two planks, one 120 cm long and one 200 cm long. He wants to cut both into pieces of equal length with no wood wasted. What is the greatest length each piece can have?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: {
      M1: ['cut both into pieces of equal length with no wood wasted'],
      W1: ['cut both into pieces of equal length with no wood wasted']
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
      { does: 'Break each number into primes', working: '120 = 2 × 2 × 2 × 3 × 5; 200 = 2 × 2 × 2 × 5 × 5' },
      {
        does: 'Keep the primes that are in both lists, as many times as both lists have them',
        working: 'Both have 2 × 2 × 2 × 5'
      },
      { does: 'Multiply the shared primes', working: '2 × 2 × 2 × 5 = 40' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '40 cm' },
        {
          id: 's1',
          text: '600 cm',
          slip: 'you keep every prime either number has, which gives the first time two repeats meet, not the biggest piece that fits both.'
        },
        {
          id: 's2',
          text: '10 cm',
          slip: 'you count a shared prime once, though both numbers have it more than once.'
        }
      ]
    },
    why: 'A piece that fits both numbers is built only from primes that both have, and the biggest piece uses each shared prime as often as both have it. That is the greatest {t:factor} the two numbers share.'
  },

  {
    id: 'dr-lcm-1',
    use: 'drill',
    tier: 'clean',
    setting: 'travel',
    topic: 'two street lights',
    kind: 'problem',
    outcome: 'lcm',
    text: 'Two street lights blink, one every 8 seconds and the other every 12 seconds. They blink together now. When do they next blink together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['one every 8 seconds and the other every 12 seconds'],
      W1: ['one every 8 seconds and the other every 12 seconds']
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
      { does: 'Break each number into primes', working: '8 = 2 × 2 × 2; 12 = 2 × 2 × 3' },
      {
        does: 'Keep every prime from either list, as many times as the list with more of it has it',
        working: 'Kept: 2 × 2 × 2 × 3'
      },
      { does: 'Multiply them together', working: '2 × 2 × 2 × 3 = 24' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '24 seconds' },
        {
          id: 's1',
          text: '4 seconds',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both, not the first meeting.'
        },
        {
          id: 's2',
          text: '96 seconds',
          slip: 'you multiply the two numbers together, which is a meeting but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first meeting is a number that both numbers divide, so it holds every prime of each. It needs each prime as often as the list with more of it: fewer, and one number would not divide it; more, and it would not be the first meeting.'
  },

  {
    id: 'dr-lcm-2',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'two delivery vans',
    kind: 'problem',
    outcome: 'lcm',
    text: 'A van delivers to a shop every 6 days and a second van every 9 days. Both delivered today. In how many days will both next deliver on the same day?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['delivers to a shop every 6 days and a second van every 9 days'],
      W1: ['delivers to a shop every 6 days and a second van every 9 days']
    },
    reason: {
      M1: 'The words {cue:M1} give two whole numbers that repeat, and no amount is growing.',
      W1: 'The words {cue:W1} give two things that repeat, and the question asks when they next happen together.'
    },
    not: {
      outcome: 'modrem',
      why: 'Two things repeat, so there are two schedules to bring together. {o:modrem} has one loop and a count going round it.'
    },
    steps: [
      { does: 'Break each number into primes', working: '6 = 2 × 3; 9 = 3 × 3' },
      {
        does: 'Keep every prime from either list, as many times as the list with more of it has it',
        working: 'Kept: 2 × 3 × 3'
      },
      { does: 'Multiply them together', working: '2 × 3 × 3 = 18' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '18 days' },
        {
          id: 's1',
          text: '3 days',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both, not the first meeting.'
        },
        {
          id: 's2',
          text: '54 days',
          slip: 'you multiply the two numbers together, which is a meeting but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first meeting is a number that both numbers divide, so it holds every prime of each. It needs each prime as often as the list with more of it: fewer, and one number would not divide it; more, and it would not be the first meeting.'
  },

  {
    id: 'dr-mod-1',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'a callback in fifty days',
    kind: 'problem',
    outcome: 'modrem',
    text: 'Today is Monday. A tradesman says he will call back in 50 days. On which day of the week will he call?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: {
      M1: ['Today is Monday. A tradesman says he will call back in 50 days'],
      W1: ['On which day of the week will he call?']
    },
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
        working: '7 × 7 = 49, the most whole loops that do not pass 50'
      },
      { does: 'Take them away to find what is left over', working: '50 − 49 = 1' },
      { does: 'Move on from the start by what is left over', working: 'Monday, then Tuesday: 1 day on is Tuesday' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Tuesday' },
        { id: 's1', text: 'Monday', slip: 'you throw away the 1 left over and stay where you started.' },
        {
          id: 's2',
          text: 'Wednesday',
          slip: 'you count the starting day as the first move, so you go one day too far.'
        }
      ]
    },
    why: 'Every whole loop brings the count back to where it started, so whole loops change nothing. Only what is left over moves you on, counted from the start.'
  },

  {
    id: 'dr-irrat-1',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'a square garden',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square garden has an area of 7 m². Its side is the number that multiplies by itself to give 7. Can the side be written exactly, as a fraction or a decimal that ends?',
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
      { does: 'Name the whole number under the root sign', working: '√7: the whole number is 7' },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '2 × 2 = 4 and 3 × 3 = 9'
      },
      {
        does: 'See whether it lands exactly on one of them',
        working: '7 is not 4 and not 9, so it is not any whole number multiplied by itself'
      },
      {
        does: 'Say whether it can be written exactly',
        working: '√7 cannot be written as a fraction or as a decimal that ends. Rounded, it is about 2.65'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not exact: about 2.65' },
        { id: 's1', text: 'Exact: 2.65', slip: 'you read the rounded decimal on the calculator as the exact value.' },
        { id: 's2', text: 'Exact: 3', slip: 'you take the nearest whole number as the exact value.' }
      ]
    },
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly. So landing on a whole number multiplied by itself is the only way to be exact, and otherwise a calculator can only round it.'
  },

  {
    id: 'dr-prime-1',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'pots on a windowsill',
    kind: 'problem',
    outcome: 'prime',
    text: 'Mia has 89 plant pots and wants to line them up in equal rows, with more than one row and more than one pot in each row. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['line them up in equal rows, with more than one row and more than one pot in each row'],
      W1: ['line them up in equal rows, with more than one row and more than one pot in each row']
    },
    reason: {
      M1: 'The words {cue:M1} ask whether one whole number can be shared out in equal groups, and nothing grows or changes.',
      W1: 'The words {cue:W1} give one number and ask only a yes or a no: does anything but 1 and itself share it out?'
    },
    not: {
      outcome: 'irrat',
      why: 'The pots are shared out in equal rows, and nothing here is a root or pi. {o:irrat} would ask whether a root can be written exactly.'
    },
    steps: [
      {
        does: 'Find where testing can stop',
        working: '9 × 9 = 81 and 10 × 10 = 100, so √89 is between 9 and 10. Test no further than 9'
      },
      { does: 'List the primes up to there', working: 'Primes up to 9: 2, 3, 5, 7' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '89 = 2 × 44 + 1, with 1 left over; 89 = 3 × 29 + 2, with 2 left over; 89 = 5 × 17 + 4, with 4 left over; 89 = 7 × 12 + 5, with 5 left over. None fits'
      },
      { does: 'Say what it shows', working: 'No prime up to 9 fits 89 exactly, so 89 is prime' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Prime: no prime up to 9 fits' },
        {
          id: 's1',
          text: 'Not prime: 3 × 30',
          slip: 'you round 89 ÷ 3 up to 30 and call 3 × 30 a fit, though 3 × 30 is not 89.'
        },
        {
          id: 's2',
          text: 'Not prime: 1 × 89',
          slip: 'you count 1 and 89 as a fit, though every number splits by 1 and by itself.'
        }
      ]
    },
    why: 'If a number splits into equal groups, two whole numbers multiply to give it, and the smaller one is never more than the {t:sqroot}. So you only test the primes up to the {t:sqroot}: anything that fits by 6 also fits by 2 and by 3. If none fits, the number is a {t:prime}.'
  },

  {
    id: 'dr-factor-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'building',
    topic: 'two slabs and one number',
    kind: 'problem',
    outcome: 'factor',
    text: 'A mason has a slab 105 cm long and another slab 75 cm long. The labels need the prime numbers that multiply together to give 105, the length of the first slab.',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: {
      M1: ['the prime numbers that multiply together to give 105'],
      W1: ['the prime numbers that multiply together to give 105']
    },
    reason: {
      M1: 'The words {cue:M1} are about how one whole number splits, and nothing grows or changes.',
      W1: 'The words {cue:W1} give one number and want its primes, or every way it splits: a list, not a yes or a no.'
    },
    not: {
      outcome: 'hcf',
      why: 'Only one number, 105, is to be taken apart. {o:hcf} would need two numbers and a piece that fits both.'
    },
    wouldChange: 'If it asked for the longest equal pieces that both slabs can be cut into, it would be {o:hcf}.',
    steps: [
      {
        does: 'Find the smallest prime that divides the number exactly',
        working: '105 ÷ 2 leaves 1 over; 3 divides 105 exactly: 105 ÷ 3 = 35'
      },
      {
        does: 'Do the same to what is left, again and again, until what is left is prime',
        working: '35 ÷ 5 = 7; 7 is prime, so stop'
      },
      { does: 'Write the number as the product of every prime split off', working: '105 = 3 × 5 × 7' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '3 × 5 × 7' },
        { id: 's1', text: '7 × 15', slip: 'you stop while a piece can still be split: 15 is 3 × 5.' },
        { id: 's2', text: '1 × 3 × 5 × 7', slip: 'you write 1 as one of the primes, though 1 is not prime.' }
      ]
    },
    why: 'Splitting off the smallest prime that fits, and then doing the same to what is left, never leaves a piece that can still be split, and the pieces multiply back to the number. A number has only one list of primes, so any order of splitting reaches the same one.'
  },

  {
    id: 'dr-hcf-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'two clubs that meet every week',
    kind: 'problem',
    outcome: 'hcf',
    text: 'Two sports clubs, with 72 and 108 members, hold a match every Saturday. They want to split their members into teams of the same size, with nobody left out and every team drawn from one club. What is the largest team size?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: {
      M1: ['split their members into teams of the same size, with nobody left out and every team drawn from one club'],
      W1: ['split their members into teams of the same size, with nobody left out and every team drawn from one club']
    },
    reason: {
      M1: 'The words {cue:M1} are about cutting whole numbers into pieces of one size, and nothing grows or changes.',
      W1: 'The words {cue:W1} give two numbers to cut into pieces of one size, and the question asks for the biggest.'
    },
    not: {
      outcome: 'lcm',
      why: 'The numbers are cut into equal pieces and nothing repeats, so the answer is never more than the smaller number. {o:lcm} would ask when two repeats meet.'
    },
    wouldChange: 'If it asked after how many weeks the two clubs next hold something on the same Saturday, each repeating on its own, it would be {o:lcm}.',
    steps: [
      { does: 'Break each number into primes', working: '72 = 2 × 2 × 2 × 3 × 3; 108 = 2 × 2 × 3 × 3 × 3' },
      {
        does: 'Keep the primes that are in both lists, as many times as both lists have them',
        working: 'Both have 2 × 2 × 3 × 3'
      },
      { does: 'Multiply the shared primes', working: '2 × 2 × 3 × 3 = 36' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '36 members' },
        {
          id: 's1',
          text: '216 members',
          slip: 'you keep every prime either number has, which gives the first time two repeats meet, not the biggest piece that fits both.'
        },
        {
          id: 's2',
          text: '6 members',
          slip: 'you count a shared prime once, though both numbers have it more than once.'
        }
      ]
    },
    why: 'A piece that fits both numbers is built only from primes that both have, and the biggest piece uses each shared prime as often as both have it. That is the greatest {t:factor} the two numbers share.'
  }
]);
