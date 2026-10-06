// Basic Math, Unit Two: the drill's problems (part 1 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 'dl-prime-1',
    use: 'drill',
    tier: 'clean',
    setting: 'cooking',
    topic: 'cupcakes on trays',
    kind: 'problem',
    outcome: 'prime',
    text: 'A baker has 161 cupcakes and wants to set them out on trays in equal rows, with more than one row and more than one cupcake in each row. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['wants to set them out on trays in equal rows, with more than one row and more than one cupcake in each row'],
      W1: ['wants to set them out on trays in equal rows, with more than one row and more than one cupcake in each row']
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
        working: '12 × 12 = 144 and 13 × 13 = 169, so √161 is between 12 and 13. Test no further than 12'
      },
      { does: 'List the primes up to there', working: 'Primes up to 12: 2, 3, 5, 7, 11' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '161 = 2 × 80 + 1, with 1 left over; 161 = 3 × 53 + 2, with 2 left over; 161 = 5 × 32 + 1, with 1 left over; 161 = 7 × 23, with nothing left over. 7 fits, so stop'
      },
      { does: 'Say what it shows', working: '7 fits 161 exactly, so 161 is not prime: 7 × 23 = 161' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not prime: 7 × 23 = 161' },
        {
          id: 's1',
          text: 'Prime: none of 2, 3 and 5 fits it',
          slip: 'you stop testing at 5 and never try 7, though 7 × 7 = 49 is not more than 161.'
        },
        {
          id: 's2',
          text: 'Not prime: 5 × 32',
          slip: 'you read 161 = 5 × 32 + 1 as a fit and ignore the 1 left over, though a fit leaves nothing over.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

  {
    id: 'dl-factor-1',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'a code made of primes',
    kind: 'problem',
    outcome: 'factor',
    text: 'A security code is the number 126. The technician wants to know which prime numbers multiply together to give 126.',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: {
      M1: ['which prime numbers multiply together to give 126'],
      W1: ['which prime numbers multiply together to give 126']
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
        working: '2 divides 126 exactly: 126 ÷ 2 = 63'
      },
      {
        does: 'Do the same to what is left, again and again, until what is left is prime',
        working: '63 ÷ 3 = 21; 21 ÷ 3 = 7; 7 is prime, so stop'
      },
      { does: 'Write the number as the product of every prime split off', working: '126 = 2 × 3 × 3 × 7' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '2 × 3 × 3 × 7' },
        { id: 's1', text: '2 × 7 × 9', slip: 'you stop while a piece can still be split: 9 is 3 × 3.' },
        {
          id: 's2',
          text: '2 × 3 × 7',
          slip: 'you write the repeated 3 only once, which leaves a 3 out: the product is 42, not 126.'
        }
      ]
    },
    why: 'Splitting off the smallest prime that fits, and then doing the same to what is left, never leaves a piece that can still be split, and the pieces multiply back to the number. A number has only one set of primes that multiply to give it, so any order of splitting reaches the same list.'
  },

  {
    id: 'dl-hcf-1',
    use: 'drill',
    tier: 'clean',
    setting: 'cooking',
    topic: 'rolls and buns in boxes',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A baker has 36 rolls and 60 buns. She wants to fill boxes that all hold the same number of items, with rolls in some boxes and buns in the others and none left over. What is the largest number of items a box can hold?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: {
      M1: ['fill boxes that all hold the same number of items'],
      W1: ['fill boxes that all hold the same number of items']
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
      { does: 'Break each number into primes', working: '36 = 2 × 2 × 3 × 3; 60 = 2 × 2 × 3 × 5' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 2 × 2 × 3'
      },
      { does: 'Multiply the shared primes', working: '2 × 2 × 3 = 12' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '12 items' },
        {
          id: 's1',
          text: '180 items',
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        {
          id: 's2',
          text: '6 items',
          slip: 'you count a shared prime once, though both numbers have it more than once.'
        }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
  },

  {
    id: 'dl-lcm-1',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'two bell ringers',
    kind: 'problem',
    outcome: 'lcm',
    text: 'Two bell ringers start together. One rings every 12 seconds and the other every 16 seconds. After how many seconds do they next ring together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['One rings every 12 seconds and the other every 16 seconds'],
      W1: ['One rings every 12 seconds and the other every 16 seconds']
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
      { does: 'Break each number into primes', working: '12 = 2 × 2 × 3; 16 = 2 × 2 × 2 × 2' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 2 × 2 × 2 × 3'
      },
      { does: 'Multiply them together', working: '2 × 2 × 2 × 2 × 3 = 48' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '48 seconds' },
        {
          id: 's1',
          text: '4 seconds',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '192 seconds',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  },

  {
    id: 'dl-lcm-2',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'two machines that restart',
    kind: 'problem',
    outcome: 'lcm',
    text: 'A machine in a factory restarts every 8 minutes and a second machine restarts every 10 minutes. They have just restarted together. After how many minutes will they next restart together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['restarts every 8 minutes and a second machine restarts every 10 minutes'],
      W1: ['restarts every 8 minutes and a second machine restarts every 10 minutes']
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
      { does: 'Break each number into primes', working: '8 = 2 × 2 × 2; 10 = 2 × 5' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 2 × 2 × 5'
      },
      { does: 'Multiply them together', working: '2 × 2 × 2 × 5 = 40' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '40 minutes' },
        {
          id: 's1',
          text: '2 minutes',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '80 minutes',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  },

  {
    id: 'dl-mod-1',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'candies shared out',
    kind: 'problem',
    outcome: 'modrem',
    text: 'Fifty candies are shared out equally among 7 children, and what cannot be shared goes to the teacher. How many candies does the teacher get?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['what cannot be shared goes to the teacher'], W1: ['what cannot be shared goes to the teacher'] },
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
        does: 'Find how many whole rounds fit in the count',
        working: '7 × 7 = 49, the most whole rounds that do not pass 50'
      },
      { does: 'Take them away to find what is left over', working: '50 − 49 = 1' },
      { does: 'Say what the left over means', working: '1 candy is left over for the teacher' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '1' },
        { id: 's1', text: '7', slip: 'you give the number of whole rounds and not what is left over.' },
        {
          id: 's2',
          text: '6',
          slip: 'you give how many more it would take to fill one more round, and not what is left over.'
        }
      ]
    },
    why: 'Whole groups of one size use up the count in steps of that size, so the most they can use is the biggest multiple of the size that does not pass the count. What is not used up is what is left over, and it is always less than the size of one group.'
  }
]);
