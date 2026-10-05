// Basic Math, Unit Two: the drill's problems (part 3 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 'dl-prime-3',
    use: 'drill',
    tier: 'varied',
    setting: 'building',
    topic: 'bricks in a wall',
    kind: 'problem',
    outcome: 'prime',
    text: 'A builder has 187 bricks and wants to lay them in a rectangle of equal rows, with more than one row and more than one brick in each row. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['lay them in a rectangle of equal rows, with more than one row and more than one brick in each row'],
      W1: ['lay them in a rectangle of equal rows, with more than one row and more than one brick in each row']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about whether one whole number can be shared out in equal groups. Nothing in it changes as time passes, no hidden number has to be found from a calculation, and there is no shape or choice, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give one number and ask only whether anything other than 1 and itself shares it out exactly. That is a yes or a no about one number, which is {a:W1.split}.'
    },
    not: {
      outcome: 'irrat',
      why: 'The problem shares a count out in equal groups. {o:irrat} is about whether a root or pi can be written exactly, and nothing here is a root or pi.'
    },
    steps: [
      {
        does: 'Find where testing can stop',
        working: '13 × 13 = 169 and 14 × 14 = 196, so √187 is between 13 and 14. Test no further than 13'
      },
      { does: 'List the primes up to there', working: 'Primes up to 13: 2, 3, 5, 7, 11, 13' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '187 = 2 × 93 + 1, with 1 left over; 187 = 3 × 62 + 1, with 1 left over; 187 = 5 × 37 + 2, with 2 left over; 187 = 7 × 26 + 5, with 5 left over; 187 = 11 × 17, with nothing left over. 11 fits, so stop'
      },
      { does: 'Say what it shows', working: '11 fits 187 exactly, so 187 is not prime: 11 × 17 = 187' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not prime: 11 × 17 = 187' },
        {
          id: 's1',
          text: 'Prime: none of 2, 3, 5 and 7 fits it',
          slip: 'you stop testing at 7 and never try 11, though 11 × 11 = 121 is not more than 187.'
        },
        {
          id: 's2',
          text: 'Not prime: 3 × 62',
          slip: 'you read 187 = 3 × 62 + 1 as a fit and ignore the 1 left over, though a fit leaves nothing over.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

  {
    id: 'dl-irrat-2',
    use: 'drill',
    tier: 'varied',
    setting: 'shopping',
    topic: 'a square label',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square label has an area of 10 cm². Its side is the number that multiplies by itself to give 10. Can the side be written exactly, as a fraction or a decimal that ends?',
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
      { does: 'Name the whole number under the root sign', working: '√10: the whole number is 10' },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '3 × 3 = 9 and 4 × 4 = 16'
      },
      {
        does: 'See whether it lands exactly on one of them',
        working: '10 is not 9 and not 16, so it is not any whole number multiplied by itself'
      },
      {
        does: 'Say whether it can be written exactly',
        working: '√10 cannot be written as a fraction or as a decimal that ends. Rounded, it is about 3.16'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not exact: about 3.16' },
        { id: 's1', text: 'Exact: 3.16', slip: 'you read the rounded decimal on the calculator as the exact value.' },
        { id: 's2', text: 'Exact: 3', slip: 'you take the nearest whole number as the exact value.' }
      ]
    },
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly as a fraction. There is nothing in between, so landing exactly on a whole number multiplied by itself is the only way for it to be exact, and when it does not land there, a calculator can only round it.'
  },

  {
    id: 'dw-prime-1',
    use: 'drill',
    tier: 'clean',
    setting: 'shopping',
    topic: 'jars on a shelf',
    kind: 'problem',
    outcome: 'prime',
    text: 'A shop has 79 jars of jam and wants to stack them in equal stacks, with more than one stack and more than one jar in each stack. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['stack them in equal stacks, with more than one stack and more than one jar in each stack'],
      W1: ['stack them in equal stacks, with more than one stack and more than one jar in each stack']
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
        working: '8 × 8 = 64 and 9 × 9 = 81, so √79 is between 8 and 9. Test no further than 8'
      },
      { does: 'List the primes up to there', working: 'Primes up to 8: 2, 3, 5, 7' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '79 = 2 × 39 + 1, with 1 left over; 79 = 3 × 26 + 1, with 1 left over; 79 = 5 × 15 + 4, with 4 left over; 79 = 7 × 11 + 2, with 2 left over. None fits'
      },
      { does: 'Say what it shows', working: 'No prime up to 8 fits 79 exactly, so 79 is prime' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Prime: no prime up to 8 fits' },
        {
          id: 's1',
          text: 'Not prime: 3 × 26',
          slip: 'you read 79 = 3 × 26 + 1 as a fit and ignore the 1 left over, though a fit leaves nothing over.'
        },
        {
          id: 's2',
          text: 'Not prime: 1 × 79',
          slip: 'you count 1 and 79 itself as a fit, though every number splits by 1 and by itself.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

  {
    id: 'dw-factor-1',
    use: 'drill',
    tier: 'clean',
    setting: 'building',
    topic: 'a stamp on a crate',
    kind: 'problem',
    outcome: 'factor',
    text: 'A crate is stamped with the number 220. A clerk has to write 220 as a product of prime numbers. Which prime numbers are they?',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['write 220 as a product of prime numbers'], W1: ['write 220 as a product of prime numbers'] },
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
        working: '2 divides 220 exactly: 220 ÷ 2 = 110'
      },
      {
        does: 'Do the same to what is left, again and again, until what is left is prime',
        working: '110 ÷ 2 = 55; 55 ÷ 5 = 11; 11 is prime, so stop'
      },
      { does: 'Write the number as the product of every prime split off', working: '220 = 2 × 2 × 5 × 11' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '2 × 2 × 5 × 11' },
        { id: 's1', text: '4 × 5 × 11', slip: 'you stop while a piece can still be split: 4 is 2 × 2.' },
        {
          id: 's2',
          text: '2 × 5 × 11',
          slip: 'you write the repeated 2 only once, which leaves a 2 out: the product is 110, not 220.'
        }
      ]
    },
    why: 'Splitting off the smallest prime that fits, and then doing the same to what is left, never leaves a piece that can still be split, and the pieces multiply back to the number. A number has only one set of primes that multiply to give it, so any order of splitting reaches the same list.'
  },

  {
    id: 'dw-hcf-1',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'ropes for a climbing wall',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A guide has a rope 56 m long and another rope 84 m long. She wants to cut both into pieces of the same length with nothing left. What is the greatest length each piece can have?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: {
      M1: ['cut both into pieces of the same length with nothing left'],
      W1: ['cut both into pieces of the same length with nothing left']
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
      { does: 'Break each number into primes', working: '56 = 2 × 2 × 2 × 7; 84 = 2 × 2 × 3 × 7' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 2 × 2 × 7'
      },
      { does: 'Multiply the shared primes', working: '2 × 2 × 7 = 28' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '28 m' },
        {
          id: 's1',
          text: '168 m',
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        { id: 's2', text: '14 m', slip: 'you count a shared prime once, though both numbers have it more than once.' }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
  }
]);
