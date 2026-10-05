// Basic Math, Unit Two: the drill's problems (part 2 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 'dl-irrat-1',
    use: 'drill',
    tier: 'clean',
    setting: 'building',
    topic: 'a square courtyard',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square courtyard has an area of 144 m². Its side is the number that multiplies by itself to give 144. Can the side be written exactly, as a fraction or a decimal that ends?',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: {
      M1: ['Can the side be written exactly, as a fraction or a decimal that ends?'],
      W1: ['Can the side be written exactly, as a fraction or a decimal that ends?']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about whether one number can be written exactly. It is about the value of a number, with no amount followed through time and no hidden number for a calculation to fit, so the key’s first answer is {a:M1.whole}.',
      W1: 'The words {cue:W1} ask whether one number can be written exactly, which is {a:W1.exact}.'
    },
    not: {
      outcome: 'prime',
      why: 'The problem asks for the exact value of a number, and nothing is shared out in equal groups. {o:prime} would be the name if it asked whether a count of things could be split in rows or teams.'
    },
    steps: [
      { does: 'Name the whole number under the root sign', working: '√144: the whole number is 144' },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '12 × 12 = 144 and 13 × 13 = 169'
      },
      { does: 'See whether it lands exactly on one of them', working: '144 is 12 × 12, so it lands exactly' },
      { does: 'Say whether it can be written exactly', working: '√144 = 12, which is exact' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Exact: 12' },
        {
          id: 's1',
          text: 'Not exact: only about 12',
          slip: 'you assume every {t:sqroot} is only a rounded value and never check whether the number is a whole number multiplied by itself.'
        },
        {
          id: 's2',
          text: 'Exact: 72',
          slip: 'you halve the number, instead of finding the number that multiplies by itself to give it.'
        }
      ]
    },
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly as a fraction. There is nothing in between, so landing exactly on a whole number multiplied by itself is the only way for it to be exact, and when it does not land there, a calculator can only round it.'
  },

  {
    id: 'dl-prime-2',
    use: 'drill',
    tier: 'clean',
    setting: 'money',
    topic: 'coins in piles',
    kind: 'problem',
    outcome: 'prime',
    text: 'A saver has 97 coins and wants to sort them into piles of the same size, with more than one pile and more than one coin in each pile. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['sort them into piles of the same size, with more than one pile and more than one coin in each pile'],
      W1: ['sort them into piles of the same size, with more than one pile and more than one coin in each pile']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about whether one whole number can be shared out in equal groups. Nothing in it changes as time passes, no hidden number has to be found from a calculation, and there is no shape or choice, so the key’s first answer is {a:M1.whole}.',
      W1: 'The words {cue:W1} give one number and ask only whether anything other than 1 and itself shares it out exactly. That is a yes or a no about one number, which is {a:W1.split}.'
    },
    not: {
      outcome: 'irrat',
      why: 'The problem shares a count out in equal groups. {o:irrat} is about whether a root or pi can be written exactly, and nothing here is a root or pi.'
    },
    steps: [
      {
        does: 'Find where testing can stop',
        working: '9 × 9 = 81 and 10 × 10 = 100, so √97 is between 9 and 10. Test no further than 9'
      },
      { does: 'List the primes up to there', working: 'Primes up to 9: 2, 3, 5, 7' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '97 = 2 × 48 + 1, with 1 left over; 97 = 3 × 32 + 1, with 1 left over; 97 = 5 × 19 + 2, with 2 left over; 97 = 7 × 13 + 6, with 6 left over. None fits'
      },
      { does: 'Say what it shows', working: 'No prime up to 9 fits 97 exactly, so 97 is prime' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Prime: no prime up to 9 fits' },
        {
          id: 's1',
          text: 'Not prime: 3 × 32',
          slip: 'you read 97 = 3 × 32 + 1 as a fit and ignore the 1 left over, though a fit leaves nothing over.'
        },
        {
          id: 's2',
          text: 'Not prime: 1 × 97',
          slip: 'you count 1 and 97 itself as a fit, though every number splits by 1 and by itself.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

  {
    id: 'dl-factor-2',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'players in teams',
    kind: 'problem',
    outcome: 'factor',
    text: 'A coach has 24 players and wants to know every size of equal team she can make, with more than one team and more than one player in each team. How many different team sizes are there?',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: {
      M1: ['wants to know every size of equal team she can make'],
      W1: ['wants to know every size of equal team she can make']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about what one whole number is made of or how it can be shared out. It follows no amount through time, hides no number to be found from a calculation, and has no shape or choice, so the key’s first answer is {a:M1.whole}.',
      W1: 'The words {cue:W1} give one number and ask what it is made of, or every way it can be shared out. That is more than a yes or a no about one number, which is {a:W1.parts}.'
    },
    not: {
      outcome: 'hcf',
      why: 'There is one number here that is to be taken apart. {o:hcf} would need two numbers and a piece that fits into both.'
    },
    steps: [
      {
        does: 'Break the number into primes',
        working: '24 = 2 × 2 × 2 × 3 (24 ÷ 2 = 12, 12 ÷ 2 = 6, 6 ÷ 2 = 3, and 3 is prime)'
      },
      {
        does: 'Build every number you can make by multiplying some of those primes',
        working: '1, 2, 3, 4 (2 × 2), 6 (2 × 3), 8 (2 × 2 × 2), 12 (2 × 2 × 3), 24 (2 × 2 × 2 × 3). Here 1 uses none of the primes and 24 uses all of them'
      },
      { does: 'Leave out 1 and 24, which give one group, or groups of one', working: '2, 3, 4, 6, 8, 12' },
      { does: 'Count what is left', working: '6 different sizes' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '6' },
        { id: 's1', text: '8', slip: 'you count 1 and 24 as well, though they give one group, or groups of one.' },
        { id: 's2', text: '2', slip: 'you count only the prime numbers and never multiply any of them together.' }
      ]
    },
    why: 'Every group size that fits exactly is a product of some of the primes of the number, and every product of some of them fits exactly, so building all the products lists every size. Using none of them gives 1 and using all of them gives the number itself, which are the cases the problem rules out.'
  },

  {
    id: 'dl-hcf-2',
    use: 'drill',
    tier: 'varied',
    setting: 'shopping',
    topic: 'rolls of ribbon',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A shop has a roll of ribbon 28 m long and another 42 m long. It cuts both into pieces of one length, with none left over. What is the greatest length each piece can have?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: {
      M1: ['cuts both into pieces of one length, with none left over'],
      W1: ['cuts both into pieces of one length, with none left over']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about pieces of one size that two whole numbers can both be split into. Nothing grows, no hidden number has to be found from a calculation, and there is no shape or chance, so the key’s first answer is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two numbers and ask for the biggest piece that both can be cut into with nothing left over, which is {a:W1.piece}.'
    },
    not: {
      outcome: 'factor',
      why: 'The problem gives two numbers and asks for a piece that fits into both. {o:factor} takes one number apart and has no second number to fit.'
    },
    steps: [
      { does: 'Break each number into primes', working: '28 = 2 × 2 × 7; 42 = 2 × 3 × 7' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 2 × 7'
      },
      { does: 'Multiply the shared primes', working: '2 × 7 = 14' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '14 m' },
        {
          id: 's1',
          text: '84 m',
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        {
          id: 's2',
          text: '1176 m',
          slip: 'you multiply the two numbers together, which gives a piece far too big to fit into either.'
        }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
  },

  {
    id: 'dl-mod-2',
    use: 'drill',
    tier: 'varied',
    setting: 'travel',
    topic: 'a bus loop of stops',
    kind: 'problem',
    outcome: 'modrem',
    text: 'A bus runs round a loop of 29 stops, numbered 1 to 29, and starts at stop 5. After 62 stops, at which stop does it finish?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['After 62 stops, at which stop does it finish?'], W1: ['After 62 stops, at which stop does it finish?'] },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about the part that is not in a whole group, or the place a count reaches on a loop. The numbers are whole counts, and no amount is followed through time, so the key’s first answer is {a:M1.whole}.',
      W1: 'The words {cue:W1} give a count and one group size, or one loop, and ask for the part not in a whole group or for the place the count reaches, which is {a:W1.cycle}.'
    },
    not: {
      outcome: 'lcm',
      why: 'There is one group size, or one loop, and a count that goes round it. {o:lcm} needs two separate schedules, and asks when they first coincide.'
    },
    steps: [
      {
        does: 'Find how many whole loops fit in the count',
        working: '29 × 2 = 58, the most whole loops that do not pass 62'
      },
      { does: 'Take them away to find what is left over', working: '62 − 58 = 4' },
      {
        does: 'Move on from the start by what is left over',
        working: 'stop 5, then stop 6, stop 7, stop 8 and stop 9: 4 stops on is stop 9'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'stop 9' },
        { id: 's1', text: 'stop 5', slip: 'you throw away the 4 left over and stay where you started.' },
        {
          id: 's2',
          text: 'stop 7',
          slip: 'you move on by the number of whole loops, 2, and not by what is left over.'
        }
      ]
    },
    why: 'Every whole loop brings the count back to the place it started, so whole loops change nothing. Only what is left over after them moves you on, and it is moved from the start.'
  },

  {
    id: 'dl-lcm-3',
    use: 'drill',
    tier: 'varied',
    setting: 'health',
    topic: 'two readings on a patient',
    kind: 'problem',
    outcome: 'lcm',
    text: 'A nurse takes one reading every 14 minutes and a second reading every 21 minutes. Both were taken together at the start. After how many minutes will she next take both together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['one reading every 14 minutes and a second reading every 21 minutes'],
      W1: ['one reading every 14 minutes and a second reading every 21 minutes']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about two repeats and when they coincide. The numbers are whole counts that repeat, and no amount is followed as it grows, so the key’s first answer is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two repeating schedules and ask for the first time they coincide, which is {a:W1.together}.'
    },
    not: {
      outcome: 'modrem',
      why: 'Two things repeat, so there are two repeats to bring together. {o:modrem} needs one loop, or one group size, and a count that goes round it.'
    },
    steps: [
      { does: 'Break each number into primes', working: '14 = 2 × 7; 21 = 3 × 7' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 3 × 7'
      },
      { does: 'Multiply them together', working: '2 × 3 × 7 = 42' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '42 minutes' },
        {
          id: 's1',
          text: '7 minutes',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '294 minutes',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  }
]);
