// Basic Math, Unit Two: the drill's problems (part 4 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 'dw-lcm-1',
    use: 'drill',
    tier: 'clean',
    setting: 'cooking',
    topic: 'two kitchen timers',
    kind: 'problem',
    outcome: 'lcm',
    text: 'One kitchen timer beeps every 15 minutes and another every 25 minutes. They have just beeped together. After how many minutes will they next beep together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['beeps every 15 minutes and another every 25 minutes'],
      W1: ['beeps every 15 minutes and another every 25 minutes']
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
      { does: 'Break each number into primes', working: '15 = 3 × 5; 25 = 5 × 5' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 3 × 5 × 5'
      },
      { does: 'Multiply them together', working: '3 × 5 × 5 = 75' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '75 minutes' },
        {
          id: 's1',
          text: '5 minutes',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '375 minutes',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  },

  {
    id: 'dw-lcm-2',
    use: 'drill',
    tier: 'clean',
    setting: 'money',
    topic: 'a rent and a charge',
    kind: 'problem',
    outcome: 'lcm',
    text: 'A tenant pays rent every 4 weeks and a utility bill every 6 weeks. Both are due this week. After how many weeks are both next due in the same week?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['pays rent every 4 weeks and a utility bill every 6 weeks'],
      W1: ['pays rent every 4 weeks and a utility bill every 6 weeks']
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
      { does: 'Break each number into primes', working: '4 = 2 × 2; 6 = 2 × 3' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 2 × 3'
      },
      { does: 'Multiply them together', working: '2 × 2 × 3 = 12' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '12 weeks' },
        {
          id: 's1',
          text: '2 weeks',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '24 weeks',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  },

  {
    id: 'dw-mod-1',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'chairs in rows of twelve',
    kind: 'problem',
    outcome: 'modrem',
    text: 'A hall has 221 chairs and sets them out in rows of 12. How many chairs are left over once every row of 12 is full?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: {
      M1: ['How many chairs are left over once every row of 12 is full?'],
      W1: ['How many chairs are left over once every row of 12 is full?']
    },
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
        does: 'Find how many whole rows fit in the count',
        working: '12 × 18 = 216, the most whole rows that do not pass 221'
      },
      { does: 'Take them away to find what is left over', working: '221 − 216 = 5' },
      { does: 'Say what the left over means', working: '5 chairs are left over, too few for another row' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '5' },
        { id: 's1', text: '18', slip: 'you give the number of whole rows and not what is left over.' },
        {
          id: 's2',
          text: '7',
          slip: 'you give how many more it would take to fill one more row, and not what is left over.'
        }
      ]
    },
    why: 'Whole groups of one size use up the count in steps of that size, so the most they can use is the biggest multiple of the size that does not pass the count. What is not used up is what is left over, and it is always less than the size of one group.'
  },

  {
    id: 'dw-irrat-1',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'a square rug',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square rug has an area of 90 m². Its side is the number that multiplies by itself to give 90. Can the side be written exactly, as a fraction or a decimal that ends?',
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
      { does: 'Name the whole number under the root sign', working: '√90: the whole number is 90' },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '9 × 9 = 81 and 10 × 10 = 100'
      },
      {
        does: 'See whether it lands exactly on one of them',
        working: '90 is not 81 and not 100, so it is not any whole number multiplied by itself'
      },
      {
        does: 'Say whether it can be written exactly',
        working: '√90 cannot be written as a fraction or as a decimal that ends. Rounded, it is about 9.49'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not exact: about 9.49' },
        { id: 's1', text: 'Exact: 9.49', slip: 'you read the rounded decimal on the calculator as the exact value.' },
        { id: 's2', text: 'Exact: 9', slip: 'you take the nearest whole number as the exact value.' }
      ]
    },
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly as a fraction. There is nothing in between, so landing exactly on a whole number multiplied by itself is the only way for it to be exact, and when it does not land there, a calculator can only round it.'
  },

  {
    id: 'dw-prime-2',
    use: 'drill',
    tier: 'clean',
    setting: 'travel',
    topic: 'seats in a coach',
    kind: 'problem',
    outcome: 'prime',
    text: 'A coach company wants to fit 111 seats into rows that all have the same number of seats, with more than one row and more than one seat in each row. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: [
        'fit 111 seats into rows that all have the same number of seats, with more than one row and more than one seat in each row'
      ],
      W1: [
        'fit 111 seats into rows that all have the same number of seats, with more than one row and more than one seat in each row'
      ]
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
        working: '10 × 10 = 100 and 11 × 11 = 121, so √111 is between 10 and 11. Test no further than 10'
      },
      { does: 'List the primes up to there', working: 'Primes up to 10: 2, 3, 5, 7' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '111 = 2 × 55 + 1, with 1 left over; 111 = 3 × 37, with nothing left over. 3 fits, so stop'
      },
      { does: 'Say what it shows', working: '3 fits 111 exactly, so 111 is not prime: 3 × 37 = 111' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not prime: 3 × 37 = 111' },
        {
          id: 's1',
          text: 'Prime: it is odd and does not end in 5',
          slip: 'you judge by how the number looks, odd and not ending in 5, and never divide by 3.'
        },
        {
          id: 's2',
          text: 'Not prime: 5 × 22',
          slip: 'you read 111 = 5 × 22 + 1 as a fit and ignore the 1 left over, though a fit leaves nothing over.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

  {
    id: 'dw-factor-2',
    use: 'drill',
    tier: 'varied',
    setting: 'shopping',
    topic: 'boxes of mugs',
    kind: 'problem',
    outcome: 'factor',
    text: 'A shop has 40 mugs and wants to know every size of equal box it can pack them in, with more than one box and more than one mug in each box. How many different box sizes are there?',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: {
      M1: ['wants to know every size of equal box it can pack them in'],
      W1: ['wants to know every size of equal box it can pack them in']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about what one whole number is made of or how it can be shared out. It follows no amount through time, hides no number to be found from a calculation, and has no shape or choice, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give one number and ask what it is made of, or every way it can be shared out. That is more than a yes or a no about one number, which is {a:W1.parts}.'
    },
    not: {
      outcome: 'hcf',
      why: 'There is one number here that is to be taken apart. {o:hcf} would need two numbers and a piece that fits into both.'
    },
    steps: [
      {
        does: 'Break the number into primes',
        working: '40 = 2 × 2 × 2 × 5 (40 ÷ 2 = 20, 20 ÷ 2 = 10, 10 ÷ 2 = 5, and 5 is prime)'
      },
      {
        does: 'Build every number you can make by multiplying some of those primes',
        working: '1, 2, 4 (2 × 2), 5, 8 (2 × 2 × 2), 10 (2 × 5), 20 (2 × 2 × 5), 40 (2 × 2 × 2 × 5). Here 1 uses none of the primes and 40 uses all of them'
      },
      { does: 'Leave out 1 and 40, which give one group, or groups of one', working: '2, 4, 5, 8, 10, 20' },
      { does: 'Count what is left', working: '6 different sizes' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '6' },
        { id: 's1', text: '8', slip: 'you count 1 and 40 as well, though they give one group, or groups of one.' },
        { id: 's2', text: '2', slip: 'you count only the prime numbers and never multiply any of them together.' }
      ]
    },
    why: 'Every group size that fits exactly is a product of some of the primes of the number, and every product of some of them fits exactly, so building all the products lists every size. Using none of them gives 1 and using all of them gives the number itself, which are the cases the problem rules out.'
  }
]);
