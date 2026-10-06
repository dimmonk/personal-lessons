// Basic Math, Unit Two: the drill's problems (part 5 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 'dw-hcf-2',
    use: 'drill',
    tier: 'varied',
    setting: 'work',
    topic: 'pens and pencils in packs',
    kind: 'problem',
    outcome: 'hcf',
    text: 'An office has 90 pens and 150 pencils and wants to make packs that each hold only pens or only pencils, with the same number in every pack and none left over. What is the largest pack size?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: {
      M1: ['make packs that each hold only pens or only pencils, with the same number in every pack and none left over'],
      W1: ['make packs that each hold only pens or only pencils, with the same number in every pack and none left over']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about pieces of one size that two whole numbers can both be split into. Nothing grows, no hidden number has to be found from a calculation, and there is no shape or chance, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two numbers and ask for the biggest piece that both can be cut into with nothing left over, which is {a:W1.piece}.'
    },
    not: {
      outcome: 'factor',
      why: 'The problem gives two numbers and asks for a piece that fits into both. {o:factor} takes one number apart and has no second number to fit.'
    },
    steps: [
      { does: 'Break each number into primes', working: '90 = 2 × 3 × 3 × 5; 150 = 2 × 3 × 5 × 5' },
      {
        does: 'Pick out the primes both numbers have, each as many times as the number that has it fewer times',
        working: 'Both have 2 × 3 × 5'
      },
      { does: 'Multiply the shared primes', working: '2 × 3 × 5 = 30' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '30 items' },
        {
          id: 's1',
          text: '450 items',
          slip: 'you keep every prime that either number has, the most times either has it, which gives the first time two repeats meet and not the biggest piece that fits both.'
        },
        {
          id: 's2',
          text: '13500 items',
          slip: 'you multiply the two numbers together, which gives a piece far too big to fit into either.'
        }
      ]
    },
    why: 'A piece that fits into both numbers with nothing left over can only be built from primes that both numbers contain, and the biggest such piece uses every shared prime as many times as the number that has it fewer times. That is the largest {t:factor} the two numbers have in common.'
  },

  {
    id: 'dw-mod-2',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'a necklace of beads',
    kind: 'problem',
    outcome: 'modrem',
    text: 'A necklace repeats red, green and blue beads in that order, again and again. What color is the 50th bead?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['What color is the 50th bead?'], W1: ['What color is the 50th bead?'] },
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
        working: '3 × 16 = 48, the most whole patterns that do not pass 50'
      },
      { does: 'Take them away to find what is left over', working: '50 − 48 = 2' },
      { does: 'Find that place in the pattern', working: 'The 2nd bead in the pattern is green' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'green' },
        {
          id: 's1',
          text: 'blue',
          slip: 'you count the left over from 0, so 2 lands on the 3rd bead and not the 2nd.'
        },
        { id: 's2', text: 'red', slip: 'you go one place too far.' }
      ]
    },
    why: 'Each whole pattern ends exactly where it began, so whole patterns change nothing. What is left over says how far into the next pattern the count has gone, and a left over of nothing means the count has just finished a pattern.'
  },

  {
    id: 'dw-lcm-3',
    use: 'drill',
    tier: 'varied',
    setting: 'home',
    topic: 'two plants to water',
    kind: 'problem',
    outcome: 'lcm',
    text: 'Joy waters one plant every 9 days and another every 12 days. She waters both today. After how many days will she next water both on the same day?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['waters one plant every 9 days and another every 12 days'],
      W1: ['waters one plant every 9 days and another every 12 days']
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
      { does: 'Break each number into primes', working: '9 = 3 × 3; 12 = 2 × 2 × 3' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 2 × 3 × 3'
      },
      { does: 'Multiply them together', working: '2 × 2 × 3 × 3 = 36' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '36 days' },
        {
          id: 's1',
          text: '3 days',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '108 days',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  },

  {
    id: 'dw-prime-3',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'tickets in blocks',
    kind: 'problem',
    outcome: 'prime',
    text: 'A theater has 221 tickets and wants to sell them in blocks of the same size, with more than one block and more than one ticket in each block. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: {
      M1: ['sell them in blocks of the same size, with more than one block and more than one ticket in each block'],
      W1: ['sell them in blocks of the same size, with more than one block and more than one ticket in each block']
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
        working: '14 × 14 = 196 and 15 × 15 = 225, so √221 is between 14 and 15. Test no further than 14'
      },
      { does: 'List the primes up to there', working: 'Primes up to 14: 2, 3, 5, 7, 11, 13' },
      {
        does: 'Divide by each prime in turn, looking for an exact fit',
        working: '221 = 2 × 110 + 1, with 1 left over; 221 = 3 × 73 + 2, with 2 left over; 221 = 5 × 44 + 1, with 1 left over; 221 = 7 × 31 + 4, with 4 left over; 221 = 11 × 20 + 1, with 1 left over; 221 = 13 × 17, with nothing left over. 13 fits, so stop'
      },
      { does: 'Say what it shows', working: '13 fits 221 exactly, so 221 is not prime: 13 × 17 = 221' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not prime: 13 × 17 = 221' },
        {
          id: 's1',
          text: 'Prime: none of 2, 3, 5, 7 and 11 fits it',
          slip: 'you stop testing at 11 and never try 13, though 13 × 13 = 169 is not more than 221.'
        },
        {
          id: 's2',
          text: 'Not prime: 11 × 20',
          slip: 'you read 221 = 11 × 20 + 1 as a fit and ignore the 1 left over, though a fit leaves nothing over.'
        }
      ]
    },
    why: 'A number can be split into equal groups only if two whole numbers multiply to give it, and the smaller of the two is never more than the {t:sqroot} of the number. So testing no further than the {t:sqroot} is enough. Testing the primes is enough too: a number that splits by 6 also splits by 2 and by 3, so leaving out the numbers that are not {t:prime}s misses nothing.'
  },

  {
    id: 'dw-irrat-2',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'a craft book and pi',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A craft book says that the distance round a circle is 3.14 times the distance straight across it. Is 3.14 exactly equal to pi?',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: { M1: ['Is 3.14 exactly equal to pi?'], W1: ['Is 3.14 exactly equal to pi?'] },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about whether one number can be written exactly. It is about the value of a number, with no amount followed through time and no hidden number for a calculation to fit, so the answer to the first question is {a:M1.whole}.',
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
      { does: 'Write the number you are offered as a decimal', working: '3.14 ends after two decimal places' },
      {
        does: 'Compare it with the digits of pi',
        working: 'pi = 3.14159265… It differs from 3.14 at the third decimal place: 3.140 against 3.141'
      },
      {
        does: 'Say whether it can be written exactly',
        working: 'No fraction and no decimal that ends equals pi, so 3.14 is only close'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not exact: 3.14 is only close' },
        {
          id: 's1',
          text: 'Exact: 3.14 is pi',
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
      M1: 'The problem asks {cue:M1}, a question about whether one number can be written exactly. It is about the value of a number, with no amount followed through time and no hidden number for a calculation to fit, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} ask whether one number can be written exactly, which is {a:W1.exact}.'
    },
    not: {
      outcome: 'prime',
      why: 'The problem asks for the exact value of a number, and nothing is shared out in equal groups. {o:prime} would be the name if it asked whether a count of things could be split in rows or teams.'
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
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly as a fraction. There is nothing in between, so landing exactly on a whole number multiplied by itself is the only way for it to be exact, and when it does not land there, a calculator can only round it.'
  }
]);
