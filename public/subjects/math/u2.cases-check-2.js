// Basic Math, Unit Two: the problems of the worked examples (part 2 of 2) and the problems the learner finishes in a check.
// A worked example's problem carries only the problem; its working is on the card. A check's problem carries the whole working,
// so that the app can show it up to the last step, or not at all, and name the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 'ck-lcm-last',
    use: 'check',
    tier: 'clean',
    setting: 'travel',
    topic: 'two ferries',
    kind: 'problem',
    outcome: 'lcm',
    text: 'A ferry leaves a harbour every 10 minutes and a second ferry every 15 minutes. They have just left together. After how many minutes will they next leave together?',
    route: { M1: ['whole'], W1: ['together'] },
    steps: [
      { does: 'Break each number into primes', working: '10 = 2 × 5; 15 = 3 × 5' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 3 × 5'
      },
      { does: 'Multiply them together', working: '2 × 3 × 5 = 30' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '30 minutes' },
        {
          id: 's1',
          text: '5 minutes',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '150 minutes',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  },

  {
    id: 'ck-lcm-whole',
    use: 'check',
    tier: 'clean',
    setting: 'building',
    topic: 'two warning lamps',
    kind: 'problem',
    outcome: 'lcm',
    text: 'One warning lamp on a bridge flashes every 14 seconds and another every 35 seconds. They have just flashed together. After how many seconds will they next flash together?',
    route: { M1: ['whole'], W1: ['together'] },
    steps: [
      { does: 'Break each number into primes', working: '14 = 2 × 7; 35 = 5 × 7' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 5 × 7'
      },
      { does: 'Multiply them together', working: '2 × 5 × 7 = 70' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '70 seconds' },
        {
          id: 's1',
          text: '7 seconds',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '490 seconds',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  },

  {
    id: 'ck-mod-last',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'a parcel due date',
    kind: 'problem',
    outcome: 'modrem',
    text: 'Today is Friday. A parcel is due in 30 days. On which day of the week is it due?',
    route: { M1: ['whole'], W1: ['cycle'] },
    steps: [
      {
        does: 'Find how many whole loops fit in the count',
        working: '7 × 4 = 28, the most whole loops that do not pass 30'
      },
      { does: 'Take them away to find what is left over', working: '30 − 28 = 2' },
      {
        does: 'Move on from the start by what is left over',
        working: 'Friday, then Saturday and Sunday: 2 days on is Sunday'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Sunday' },
        { id: 's1', text: 'Friday', slip: 'you throw away the 2 left over and stay where you started.' },
        {
          id: 's2',
          text: 'Tuesday',
          slip: 'you move on by the number of whole loops, 4, and not by what is left over.'
        }
      ]
    },
    why: 'Every whole loop brings the count back to the place it started, so whole loops change nothing. Only what is left over after them moves you on, and it is moved from the start.'
  },

  {
    id: 'ck-mod-whole',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'cups in sleeves',
    kind: 'problem',
    outcome: 'modrem',
    text: 'A caterer has 75 cups and stacks them in sleeves of 8. How many cups are left over once every sleeve is full?',
    route: { M1: ['whole'], W1: ['cycle'] },
    steps: [
      {
        does: 'Find how many whole sleeves fit in the count',
        working: '8 × 9 = 72, the most whole sleeves that do not pass 75'
      },
      { does: 'Take them away to find what is left over', working: '75 − 72 = 3' },
      { does: 'Say what the left over means', working: '3 cups are left over, too few for another sleeve' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '3' },
        { id: 's1', text: '9', slip: 'you give the number of whole sleeves and not what is left over.' },
        {
          id: 's2',
          text: '5',
          slip: 'you give how many more it would take to fill one more sleeve, and not what is left over.'
        }
      ]
    },
    why: 'Whole groups of one size use up the count in steps of that size, so the most they can use is the biggest multiple of the size that does not pass the count. What is not used up is what is left over, and it is always less than the size of one group.'
  },

  {
    id: 'ck-irrat-last',
    use: 'check',
    tier: 'clean',
    setting: 'home',
    topic: 'a square rug of fifty',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square rug has an area of 50 m². Its side is the number that multiplies by itself to give 50. Can the side be written exactly, as a fraction or a decimal that ends?',
    route: { M1: ['whole'], W1: ['exact'] },
    steps: [
      { does: 'Name the whole number under the root sign', working: '√50: the whole number is 50' },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '7 × 7 = 49 and 8 × 8 = 64'
      },
      {
        does: 'See whether it lands exactly on one of them',
        working: '50 is not 49 and not 64, so it is not any whole number multiplied by itself'
      },
      {
        does: 'Say whether it can be written exactly',
        working: '√50 cannot be written as a fraction or as a decimal that ends. Rounded, it is about 7.07'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not exact: about 7.07' },
        { id: 's1', text: 'Exact: 7.07', slip: 'you read the rounded decimal on the calculator as the exact value.' },
        { id: 's2', text: 'Exact: 7', slip: 'you take the nearest whole number as the exact value.' }
      ]
    },
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly as a fraction. There is nothing in between, so landing exactly on a whole number multiplied by itself is the only way for it to be exact, and when it does not land there, a calculator can only round it.'
  },

  {
    id: 'ck-irrat-whole',
    use: 'check',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a square tile of seventy-five',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square tile has an area of 75 cm². Its side is the number that multiplies by itself to give 75. Can the side be written exactly, as a fraction or a decimal that ends?',
    route: { M1: ['whole'], W1: ['exact'] },
    steps: [
      { does: 'Name the whole number under the root sign', working: '√75: the whole number is 75' },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '8 × 8 = 64 and 9 × 9 = 81'
      },
      {
        does: 'See whether it lands exactly on one of them',
        working: '75 is not 64 and not 81, so it is not any whole number multiplied by itself'
      },
      {
        does: 'Say whether it can be written exactly',
        working: '√75 cannot be written as a fraction or as a decimal that ends. Rounded, it is about 8.66'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not exact: about 8.66' },
        { id: 's1', text: 'Exact: 8.66', slip: 'you read the rounded decimal on the calculator as the exact value.' },
        { id: 's2', text: 'Exact: 9', slip: 'you take the nearest whole number as the exact value.' }
      ]
    },
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly as a fraction. There is nothing in between, so landing exactly on a whole number multiplied by itself is the only way for it to be exact, and when it does not land there, a calculator can only round it.'
  }
]);
