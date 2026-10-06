// Basic Math, Unit Two: the drill's problems (part 8 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 'dr-mod-2',
    use: 'drill',
    tier: 'varied',
    setting: 'building',
    topic: 'a tiled border',
    kind: 'problem',
    outcome: 'modrem',
    text: 'A border repeats white, blue, blue and green tiles in that order, again and again. What color is the 83rd tile?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['What color is the 83rd tile?'], W1: ['What color is the 83rd tile?'] },
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
        does: 'Find how many whole patterns fit in the count',
        working: '4 × 20 = 80, the most whole patterns that do not pass 83'
      },
      { does: 'Take them away to find what is left over', working: '83 − 80 = 3' },
      { does: 'Find that place in the pattern', working: 'The 3rd tile in the pattern is blue' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'blue' },
        {
          id: 's1',
          text: 'green',
          slip: 'you count the left over from 0, so 3 lands on the 4th tile and not the 3rd.'
        },
        {
          id: 's2',
          text: 'white',
          slip: 'you use the number of whole patterns, 20, as the place and not what is left over.'
        }
      ]
    },
    why: 'Each whole pattern ends exactly where it began, so whole patterns change nothing. What is left over says how far into the next pattern the count has gone, and a left over of nothing means the count has just finished a pattern.'
  },

  {
    id: 'dr-lcm-3',
    use: 'drill',
    tier: 'varied',
    setting: 'home',
    topic: 'two chores',
    kind: 'problem',
    outcome: 'lcm',
    text: 'Dev does the laundry every 5 days and cleans the windows every 7 days. He did both today. In how many days will he next do both on the same day?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['does the laundry every 5 days and cleans the windows every 7 days'],
      W1: ['does the laundry every 5 days and cleans the windows every 7 days']
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
      { does: 'Break each number into primes', working: '5 = 5; 7 = 7' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 5 × 7'
      },
      { does: 'Multiply them together', working: '5 × 7 = 35' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '35 days' },
        {
          id: 's1',
          text: '1 days',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        { id: 's2', text: '7 days', slip: 'you take the bigger number, though the smaller one does not divide it.' }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
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
      M1: 'The problem asks {cue:M1}, a question about what one whole number is made of or how it can be shared out. It follows no amount through time, hides no number to be found from a calculation, and has no shape or choice, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give one number and ask what it is made of, or every way it can be shared out. That is more than a yes or a no about one number, which is {a:W1.parts}.'
    },
    not: {
      outcome: 'hcf',
      why: 'There is one number here that is to be taken apart. {o:hcf} would need two numbers and a piece that fits into both.'
    },
    wouldChange: 'If the question asked for the longest equal pieces that both slabs can be cut into, it would be {o:hcf}.',
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
    why: 'Splitting off the smallest prime that fits, and then doing the same to what is left, never leaves a piece that can still be split, and the pieces multiply back to the number. A number has only one set of primes that multiply to give it, so any order of splitting reaches the same list.'
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
      M1: 'The problem asks {cue:M1}, a question about pieces of one size that two whole numbers can both be split into. Nothing grows, no hidden number has to be found from a calculation, and there is no shape or chance, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two numbers and ask for the biggest piece that both can be cut into with nothing left over, which is {a:W1.piece}.'
    },
    not: {
      outcome: 'lcm',
      why: 'The problem asks for the biggest piece that fits into both numbers, and nothing repeats. {o:lcm} would ask when two repeats meet, and its answer is never less than the bigger number, where this answer is never more than the smaller.'
    },
    wouldChange: 'If the question asked after how many weeks the two clubs would next hold something on the same Saturday, each repeating on its own, it would be {o:lcm}.',
    steps: [
      { does: 'Break each number into primes', working: '72 = 2 × 2 × 2 × 3 × 3; 108 = 2 × 2 × 3 × 3 × 3' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
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
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        {
          id: 's2',
          text: '6 members',
          slip: 'you count a shared prime once, though both numbers have it more than once.'
        }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
  },

  {
    id: 'dr-prime-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'building',
    topic: 'a tiler and a calculator',
    kind: 'problem',
    outcome: 'prime',
    text: 'A tiler has 143 tiles. His calculator says that √143 is about 11.96. Can he lay the tiles in equal rows, with more than one row and more than one tile in each row?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['Can he lay the tiles in equal rows, with more than one row and more than one tile in each row?'],
      W1: ['Can he lay the tiles in equal rows, with more than one row and more than one tile in each row?']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about whether one whole number can be shared out in equal groups. Nothing in it changes as time passes, no hidden number has to be found from a calculation, and there is no shape or choice, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give one number and ask only whether anything other than 1 and itself shares it out exactly. That is a yes or a no about one number, which is {a:W1.split}.'
    },
    not: {
      outcome: 'irrat',
      why: 'The problem shares a count out in equal groups. {o:irrat} is about whether a root or pi can be written exactly, and nothing here is a root or pi.'
    },
    wouldChange: 'If the question asked whether √143 can be written exactly, as a fraction or a decimal that ends, it would be {o:irrat}.',
    steps: [
      {
        does: 'Find where testing can stop',
        working: '11 × 11 = 121 and 12 × 12 = 144, so √143 is between 11 and 12. Test no further than 11'
      },
      { does: 'List the primes up to there', working: 'Primes up to 11: 2, 3, 5, 7, 11' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '143 = 2 × 71 + 1, with 1 left over; 143 = 3 × 47 + 2, with 2 left over; 143 = 5 × 28 + 3, with 3 left over; 143 = 7 × 20 + 3, with 3 left over; 143 = 11 × 13, with nothing left over. 11 fits, so stop'
      },
      { does: 'Say what it shows', working: '11 fits 143 exactly, so 143 is not prime: 11 × 13 = 143' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not prime: 11 × 13 = 143' },
        {
          id: 's1',
          text: 'Prime: none of 2, 3, 5 and 7 fits it',
          slip: 'you stop testing at 7 and never try 11, though 11 × 11 = 121 is not more than 143.'
        },
        {
          id: 's2',
          text: 'Not prime: 3 × 48',
          slip: 'you round 143 ÷ 3 up to 48 and call 3 × 48 a fit, though that is not 143.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  }
]);
