// Basic Math, Unit Two: the drill's problems (part 7 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
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
      M1: 'The problem asks {cue:M1}, a question about two repeats and when they coincide. The numbers are whole counts that repeat, and no amount is followed as it grows, so the key’s first answer is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two repeating schedules and ask for the first time they coincide, which is {a:W1.together}.'
    },
    not: {
      outcome: 'modrem',
      why: 'Two things repeat, so there are two repeats to bring together. {o:modrem} needs one loop, or one group size, and a count that goes round it.'
    },
    steps: [
      { does: 'Break each number into primes', working: '6 = 2 × 3; 9 = 3 × 3' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 3 × 3'
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
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '54 days',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
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
          slip: 'you count the place you start on as the first move, so you go one place too far.'
        }
      ]
    },
    why: 'Every whole loop brings the count back to the place it started, so whole loops change nothing. Only what is left over after them moves you on, and it is moved from the start.'
  },

  {
    id: 'dr-prime-3',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'a claim on 133',
    kind: 'problem',
    outcome: 'prime',
    text: 'A friend says that 133 is prime because 2, 3 and 5 do not divide it. Can 133 be split into equal groups, with more than one group and more than one in each group?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['Can 133 be split into equal groups, with more than one group and more than one in each group?'],
      W1: ['Can 133 be split into equal groups, with more than one group and more than one in each group?']
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
        working: '11 × 11 = 121 and 12 × 12 = 144, so √133 is between 11 and 12. Test no further than 11'
      },
      { does: 'List the primes up to there', working: 'Primes up to 11: 2, 3, 5, 7, 11' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '133 = 2 × 66 + 1, with 1 left over; 133 = 3 × 44 + 1, with 1 left over; 133 = 5 × 26 + 3, with 3 left over; 133 = 7 × 19, with nothing left over. 7 fits, so stop'
      },
      { does: 'Say what it shows', working: '7 fits 133 exactly, so 133 is not prime: 7 × 19 = 133' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not prime: 7 × 19 = 133' },
        {
          id: 's1',
          text: 'Prime: none of 2, 3 and 5 fits it',
          slip: 'you stop testing at 5 and never try 7, though 7 × 7 = 49 is not more than 133.'
        },
        {
          id: 's2',
          text: 'Not prime: 11 × 12',
          slip: 'you read 133 = 11 × 12 + 1 as a fit and ignore the 1 left over, though a fit leaves nothing over.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

  {
    id: 'dr-irrat-2',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'a textbook value for pi',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A student says that pi is exactly 22/7, because her textbook uses it. Is pi exactly equal to 22/7?',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: { M1: ['Is pi exactly equal to 22/7?'], W1: ['Is pi exactly equal to 22/7?'] },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about whether one number can be written exactly. It is about the value of a number, with no amount followed through time and no hidden number for a calculation to fit, so the key’s first answer is {a:M1.whole}.',
      W1: 'The words {cue:W1} ask whether one number can be written exactly, which is {a:W1.exact}.'
    },
    not: {
      outcome: 'prime',
      why: 'The problem asks for the exact value of a number, and nothing is shared out in equal groups. {o:prime} would be the name if it asked whether a count of things could be split in rows or teams.'
    },
    steps: [
      {
        does: 'Say which number is asked about',
        working: 'pi, the distance round a circle divided by the distance straight across it'
      },
      { does: 'Write the number you are offered as a decimal', working: '22 ÷ 7 = 3.142857…' },
      {
        does: 'Compare it with the digits of pi',
        working: 'pi = 3.14159265… It differs from 22/7 at the third decimal place: 3.142 against 3.141'
      },
      {
        does: 'Say whether it can be written exactly',
        working: 'No fraction and no decimal that ends equals pi, so 22/7 is only close'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not exact: 22/7 is only close' },
        {
          id: 's1',
          text: 'Exact: 22/7 is pi',
          slip: 'you take the value in the textbook as the exact value, though it differs from pi in its digits.'
        },
        {
          id: 's2',
          text: 'Exact: pi = 3.14159265',
          slip: 'you take the digits you can see as the whole of pi, though they go on without ending.'
        }
      ]
    },
    why: 'Pi has been proved to be a number that no fraction and no decimal that ends can equal. Any value written down for it, such as a fraction or a rounded decimal, is only close, and it differs from pi at some decimal place.'
  },

  {
    id: 'dr-factor-2',
    use: 'drill',
    tier: 'varied',
    setting: 'money',
    topic: 'a puzzle on 391',
    kind: 'problem',
    outcome: 'factor',
    text: 'A puzzle says that 391 is the product of two prime numbers, and asks which two.',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['391 is the product of two prime numbers'], W1: ['391 is the product of two prime numbers'] },
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
        does: 'Find the smallest prime that divides the number exactly',
        working: '391 ÷ 2 leaves 1 over; 391 ÷ 3 leaves 1 over; 391 ÷ 5 leaves 1 over; 391 ÷ 7 leaves 6 over; 391 ÷ 11 leaves 6 over; 391 ÷ 13 leaves 1 over; 17 divides 391 exactly: 391 ÷ 17 = 23'
      },
      {
        does: 'Do the same to what is left, again and again, until what is left is prime',
        working: '23 is already prime, so stop'
      },
      { does: 'Write the number as the product of every prime split off', working: '391 = 17 × 23' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '17 × 23' },
        { id: 's1', text: '391', slip: 'you stop while a piece can still be split: 391 is 17 × 23.' },
        { id: 's2', text: '1 × 17 × 23', slip: 'you write 1 as one of the primes, though 1 is not prime.' }
      ]
    },
    why: 'Splitting off the smallest prime that fits, and then doing the same to what is left, never leaves a piece that can still be split, and the pieces multiply back to the number. A number has only one set of primes that multiply to give it, so any order of splitting reaches the same list.'
  },

  {
    id: 'dr-hcf-2',
    use: 'drill',
    tier: 'varied',
    setting: 'building',
    topic: 'boards for a fence',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A builder has boards 150 cm and 210 cm long. He wants to cut both into the longest equal pieces with nothing left over. How long is each piece?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: {
      M1: ['cut both into the longest equal pieces with nothing left over'],
      W1: ['cut both into the longest equal pieces with nothing left over']
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
      { does: 'Break each number into primes', working: '150 = 2 × 3 × 5 × 5; 210 = 2 × 3 × 5 × 7' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 2 × 3 × 5'
      },
      { does: 'Multiply the shared primes', working: '2 × 3 × 5 = 30' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '30 cm' },
        {
          id: 's1',
          text: '1050 cm',
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        {
          id: 's2',
          text: '31500 cm',
          slip: 'you multiply the two numbers together, which gives a piece far too big to fit into either.'
        }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
  }
]);
