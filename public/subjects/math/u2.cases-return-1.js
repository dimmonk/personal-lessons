// Basic Math, Unit Two: fresh problems for later days (part 1 of 4): three for each kind, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most
// often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

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
      M1: 'The problem asks {cue:M1}, a question about whether one whole number can be shared out in equal groups. Nothing in it changes as time passes, no hidden number has to be found from a calculation, and there is no shape or choice, so the key’s first answer is {a:M1.whole}.',
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
    id: 'rt-prime-2',
    use: 'return',
    tier: 'clean',
    setting: 'money',
    topic: 'notes in bundles',
    kind: 'problem',
    outcome: 'prime',
    text: 'A cashier has 203 notes and wants to make bundles of the same size, with more than one bundle and more than one note in each bundle. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['make bundles of the same size, with more than one bundle and more than one note in each bundle'],
      W1: ['make bundles of the same size, with more than one bundle and more than one note in each bundle']
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
        working: '14 × 14 = 196 and 15 × 15 = 225, so √203 is between 14 and 15. Test no further than 14'
      },
      { does: 'List the primes up to there', working: 'Primes up to 14: 2, 3, 5, 7, 11, 13' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '203 = 2 × 101 + 1, with 1 left over; 203 = 3 × 67 + 2, with 2 left over; 203 = 5 × 40 + 3, with 3 left over; 203 = 7 × 29, with nothing left over. 7 fits, so stop'
      },
      { does: 'Say what it shows', working: '7 fits 203 exactly, so 203 is not prime: 7 × 29 = 203' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not prime: 7 × 29 = 203' },
        {
          id: 's1',
          text: 'Prime: none of 2, 3 and 5 fits it',
          slip: 'you stop testing at 5 and never try 7, though 7 × 7 = 49 is not more than 203.'
        },
        {
          id: 's2',
          text: 'Not prime: 3 × 68',
          slip: 'you round 203 ÷ 3 up to 68 and call 3 × 68 a fit, though that is not 203.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

  {
    id: 'rt-prime-3',
    use: 'return',
    tier: 'clean',
    setting: 'travel',
    topic: 'tents on a campsite',
    kind: 'problem',
    outcome: 'prime',
    text: 'A campsite has 127 tents and wants to set them in equal lines, with more than one line and more than one tent in each line. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['set them in equal lines, with more than one line and more than one tent in each line'],
      W1: ['set them in equal lines, with more than one line and more than one tent in each line']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about whether one whole number can be shared out in equal groups. Nothing in it changes as time passes, no hidden number has to be found from a calculation, and there is no shape or choice, so the key’s first answer is {a:M1.whole}.',
      W1: 'The words {cue:W1} give one number and ask only whether anything other than 1 and itself shares it out exactly. That is a yes or a no about one number, which is {a:W1.split}.'
    },
    not: {
      outcome: 'factor',
      why: 'The problem asks only whether the number splits at all, and a yes or a no is all that is wanted. {o:factor} would be the name if it asked what the number is made of, or for every way it splits.'
    },
    steps: [
      {
        does: 'Find where testing can stop',
        working: '11 × 11 = 121 and 12 × 12 = 144, so √127 is between 11 and 12. Test no further than 11'
      },
      { does: 'List the primes up to there', working: 'Primes up to 11: 2, 3, 5, 7, 11' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '127 = 2 × 63 + 1, with 1 left over; 127 = 3 × 42 + 1, with 1 left over; 127 = 5 × 25 + 2, with 2 left over; 127 = 7 × 18 + 1, with 1 left over; 127 = 11 × 11 + 6, with 6 left over. None fits'
      },
      { does: 'Say what it shows', working: 'No prime up to 11 fits 127 exactly, so 127 is prime' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Prime: no prime up to 11 fits' },
        {
          id: 's1',
          text: 'Not prime: 7 × 18',
          slip: 'you read 127 = 7 × 18 + 1 as a fit and ignore the 1 left over, though a fit leaves nothing over.'
        },
        {
          id: 's2',
          text: 'Not prime: 1 × 127',
          slip: 'you count 1 and 127 itself as a fit, though every number splits by 1 and by itself.'
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
      M1: 'The problem asks {cue:M1}, a question about what one whole number is made of or how it can be shared out. It follows no amount through time, hides no number to be found from a calculation, and has no shape or choice, so the key’s first answer is {a:M1.whole}.',
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
    id: 'rt-factor-2',
    use: 'return',
    tier: 'clean',
    setting: 'health',
    topic: 'tablets in bottles',
    kind: 'problem',
    outcome: 'factor',
    text: 'A pharmacist has 48 tablets and wants to know every size of equal bottle load she can make, with more than one bottle and more than one tablet in each. How many different bottle loads are there?',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['every size of equal bottle load she can make'], W1: ['every size of equal bottle load she can make'] },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about what one whole number is made of or how it can be shared out. It follows no amount through time, hides no number to be found from a calculation, and has no shape or choice, so the key’s first answer is {a:M1.whole}.',
      W1: 'The words {cue:W1} give one number and ask what it is made of, or every way it can be shared out. That is more than a yes or a no about one number, which is {a:W1.parts}.'
    },
    not: {
      outcome: 'prime',
      why: 'The problem asks for more than whether the number splits: it wants what the number is made of, or every way it splits. A yes or a no, which is what {o:prime} gives, would leave the question unanswered.'
    },
    steps: [
      {
        does: 'Break the number into primes',
        working: '48 = 2 × 2 × 2 × 2 × 3 (48 ÷ 2 = 24, 24 ÷ 2 = 12, 12 ÷ 2 = 6, 6 ÷ 2 = 3, and 3 is prime)'
      },
      {
        does: 'Build every number you can make by multiplying some of those primes',
        working: '1, 2, 3, 4 (2 × 2), 6 (2 × 3), 8 (2 × 2 × 2), 12 (2 × 2 × 3), 16 (2 × 2 × 2 × 2), 24 (2 × 2 × 2 × 3), 48 (2 × 2 × 2 × 2 × 3). Here 1 uses none of the primes and 48 uses all of them'
      },
      { does: 'Leave out 1 and 48, which give one group, or groups of one', working: '2, 3, 4, 6, 8, 12, 16, 24' },
      { does: 'Count what is left', working: '8 different sizes' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '8' },
        { id: 's1', text: '10', slip: 'you count 1 and 48 as well, though they give one group, or groups of one.' },
        { id: 's2', text: '2', slip: 'you count only the prime numbers and never multiply any of them together.' }
      ]
    },
    why: 'Every group size that fits exactly is a product of some of the primes of the number, and every product of some of them fits exactly, so building all the products lists every size. Using none of them gives 1 and using all of them gives the number itself, which are the cases the problem rules out.'
  }
]);
