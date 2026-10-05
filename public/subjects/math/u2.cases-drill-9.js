// Basic Math, Unit Two: the drill's problems (part 9 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 'dr-irrat-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'building',
    topic: 'a floor and thirty tiles',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square floor has an area of 30 m², and the tiler has 30 tiles of 1 m² each. The customer asks whether the side of the floor can be written exactly, as a fraction or a decimal that ends.',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: {
      M1: ['whether the side of the floor can be written exactly, as a fraction or a decimal that ends'],
      W1: ['whether the side of the floor can be written exactly, as a fraction or a decimal that ends']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about whether one number can be written exactly. It is about the value of a number, with no amount followed through time and no hidden number for a calculation to fit, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} ask whether one number can be written exactly, which is {a:W1.exact}.'
    },
    not: {
      outcome: 'prime',
      why: 'The problem asks for the exact value of a number, and nothing is shared out in equal groups. {o:prime} would be the name if it asked whether a count of things could be split in rows or teams.'
    },
    wouldChange: 'If the question asked whether the 30 tiles can be laid in equal rows, with more than one row and more than one tile in each row, it would be {o:prime}.',
    steps: [
      { does: 'Name the whole number under the root sign', working: '√30: the whole number is 30' },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '5 × 5 = 25 and 6 × 6 = 36'
      },
      {
        does: 'See whether it lands exactly on one of them',
        working: '30 is not 25 and not 36, so it is not any whole number multiplied by itself'
      },
      {
        does: 'Say whether it can be written exactly',
        working: '√30 cannot be written as a fraction or as a decimal that ends. Rounded, it is about 5.48'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not exact: about 5.48' },
        { id: 's1', text: 'Exact: 5.48', slip: 'you read the rounded decimal on the calculator as the exact value.' },
        { id: 's2', text: 'Exact: 5', slip: 'you take the nearest whole number as the exact value.' }
      ]
    },
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly as a fraction. There is nothing in between, so landing exactly on a whole number multiplied by itself is the only way for it to be exact, and when it does not land there, a calculator can only round it.'
  },

  {
    id: 'dr-mod-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'travel',
    topic: 'two tram loops',
    kind: 'problem',
    outcome: 'modrem',
    text: 'A tram runs round a loop of 6 stops, and a second tram runs round a loop of 4 stops. The first tram starts at stop 1 and travels 50 stops. At which stop does it finish?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: {
      M1: ['travels 50 stops. At which stop does it finish?'],
      W1: ['travels 50 stops. At which stop does it finish?']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about the part that is not in a whole group, or the place a count reaches on a loop. The numbers are whole counts, and no amount is followed through time, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give a count and one group size, or one loop, and ask for the part not in a whole group or for the place the count reaches, which is {a:W1.cycle}.'
    },
    not: {
      outcome: 'lcm',
      why: 'There is one group size, or one loop, and a count that goes round it. {o:lcm} needs two separate schedules, and asks when they first coincide.'
    },
    wouldChange: 'If the question asked after how many stops the two trams would first be at their first stops together, it would be {o:lcm}.',
    steps: [
      {
        does: 'Find how many whole loops fit in the count',
        working: '6 × 8 = 48, the most whole loops that do not pass 50'
      },
      { does: 'Take them away to find what is left over', working: '50 − 48 = 2' },
      {
        does: 'Move on from the start by what is left over',
        working: 'stop 1, then stop 2 and stop 3: 2 stops on is stop 3'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'stop 3' },
        { id: 's1', text: 'stop 1', slip: 'you throw away the 2 left over and stay where you started.' },
        {
          id: 's2',
          text: 'stop 4',
          slip: 'you count the place you start on as the first move, so you go one place too far.'
        }
      ]
    },
    why: 'Every whole loop brings the count back to the place it started, so whole loops change nothing. Only what is left over after them moves you on, and it is moved from the start.'
  },

  {
    id: 'dr-lcm-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'two classes starting on a Monday',
    kind: 'problem',
    outcome: 'lcm',
    text: 'Two evening classes begin together on a Monday. One meets every 4 days and the other every 6 days. After how many days will both next meet on the same day?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['One meets every 4 days and the other every 6 days'],
      W1: ['One meets every 4 days and the other every 6 days']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about two repeats and when they coincide. The numbers are whole counts that repeat, and no amount is followed as it grows, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} give two repeating schedules and ask for the first time they coincide, which is {a:W1.together}.'
    },
    not: {
      outcome: 'modrem',
      why: 'Two things repeat, so there are two repeats to bring together. {o:modrem} needs one loop, or one group size, and a count that goes round it.'
    },
    wouldChange: 'If the question asked on which day of the week the first class would meet after 50 days, it would be {o:modrem}.',
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
        { id: 'r', text: '12 days' },
        {
          id: 's1',
          text: '2 days',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '24 days',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  }
]);
