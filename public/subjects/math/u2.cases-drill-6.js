// Basic Math, Unit Two: the drill's problems (part 6 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
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
          slip: 'you round 89 ÷ 3 up to 30 and call 3 × 30 a fit, though that is not 89.'
        },
        {
          id: 's2',
          text: 'Not prime: 1 × 89',
          slip: 'you count 1 and 89 itself as a fit, though every number splits by 1 and by itself.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

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
          slip: 'you judge by how the number looks, odd and not ending in 5, and never divide by 3.'
        },
        {
          id: 's2',
          text: 'Not prime: 5 × 10',
          slip: 'you read 51 = 5 × 10 + 1 as a fit and ignore the 1 left over, though a fit leaves nothing over.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
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
      M1: 'The problem asks {cue:M1}, a question about what one whole number is made of or how it can be shared out. It follows no amount through time, hides no number to be found from a calculation, and has no shape or choice, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give one number and ask what it is made of, or every way it can be shared out. That is more than a yes or a no about one number, which is {a:W1.parts}.'
    },
    not: {
      outcome: 'prime',
      why: 'The problem asks for more than whether the number splits: it wants what the number is made of, or every way it splits. A yes or a no, which is what {o:prime} gives, would leave the question unanswered.'
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
        does: 'Leave out 1 and 90, which give one group, or groups of one',
        working: '2, 3, 5, 6, 9, 10, 15, 18, 30, 45'
      },
      { does: 'Count what is left', working: '10 different sizes' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '10' },
        { id: 's1', text: '12', slip: 'you count 1 and 90 as well, though they give one group, or groups of one.' },
        { id: 's2', text: '3', slip: 'you count only the prime numbers and never multiply any of them together.' }
      ]
    },
    why: 'Every group size that fits exactly is a product of some of the primes of the number, and every product of some of them fits exactly, so building all the products lists every size. Using none of them gives 1 and using all of them gives the number itself, which are the cases the problem rules out.'
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
      M1: 'The problem asks {cue:M1}, a question about pieces of one size that two whole numbers can both be split into. Nothing grows, no hidden number has to be found from a calculation, and there is no shape or chance, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two numbers and ask for the biggest piece that both can be cut into with nothing left over, which is {a:W1.piece}.'
    },
    not: {
      outcome: 'lcm',
      why: 'The problem asks for the biggest piece that fits into both numbers, and nothing repeats. {o:lcm} would ask when two repeats meet, and its answer is never less than the bigger number, where this answer is never more than the smaller.'
    },
    steps: [
      { does: 'Break each number into primes', working: '120 = 2 × 2 × 2 × 3 × 5; 200 = 2 × 2 × 2 × 5 × 5' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
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
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        {
          id: 's2',
          text: '10 cm',
          slip: 'you count a shared prime once, though both numbers have it more than once.'
        }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
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
      M1: 'The problem asks {cue:M1}, a question about two repeats and when they coincide. The numbers are whole counts that repeat, and no amount is followed as it grows, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two repeating schedules and ask for the first time they coincide, which is {a:W1.together}.'
    },
    not: {
      outcome: 'hcf',
      why: 'Here two schedules repeat and the question is when they first coincide, so the answer is not less than the bigger number. {o:hcf} asks for a piece that fits into both numbers, and is never more than the smaller.'
    },
    steps: [
      { does: 'Break each number into primes', working: '8 = 2 × 2 × 2; 12 = 2 × 2 × 3' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 2 × 2 × 3'
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
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '96 seconds',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  }
]);
