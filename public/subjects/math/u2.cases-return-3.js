// Basic Math, Unit Two: fresh problems for later days (part 3 of 4): three for each kind, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most
// often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 'rt-lcm-3',
    use: 'return',
    tier: 'clean',
    setting: 'health',
    topic: 'two tablets',
    kind: 'problem',
    outcome: 'lcm',
    text: 'One kind of tablet is taken every 15 hours and a second kind every 20 hours. Both are taken now. After how many hours will both next be taken together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: {
      M1: ['taken every 15 hours and a second kind every 20 hours'],
      W1: ['taken every 15 hours and a second kind every 20 hours']
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
      { does: 'Break each number into primes', working: '15 = 3 × 5; 20 = 2 × 2 × 5' },
      {
        does: 'Collect every prime that either number has, each as many times as the number that has it more times',
        working: 'Collected: 2 × 2 × 3 × 5'
      },
      { does: 'Multiply them together', working: '2 × 2 × 3 × 5 = 60' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '60 hours' },
        {
          id: 's1',
          text: '5 hours',
          slip: 'you keep only the primes both numbers have, which gives the biggest piece that fits both and not the first time two repeats meet.'
        },
        {
          id: 's2',
          text: '300 hours',
          slip: 'you multiply the two numbers together, which is a time when both happen but not the first, because the numbers share a prime.'
        }
      ]
    },
    why: 'The first time two repeats happen together must be a number that both numbers divide, so it has to contain every prime of each. It needs each prime as many times as the number that has it more times: with fewer, one of the numbers would not divide it, and with more, it would not be the first time.'
  },

  {
    id: 'rt-mod-1',
    use: 'return',
    tier: 'clean',
    setting: 'shopping',
    topic: 'eggs in boxes',
    kind: 'problem',
    outcome: 'modrem',
    text: 'A farm shop packs 100 eggs into boxes of 12. How many eggs are left over once every box is full?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: {
      M1: ['How many eggs are left over once every box is full?'],
      W1: ['How many eggs are left over once every box is full?']
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
        does: 'Find how many whole boxes fit in the count',
        working: '12 × 8 = 96, the most whole boxes that do not pass 100'
      },
      { does: 'Take them away to find what is left over', working: '100 − 96 = 4' },
      { does: 'Say what the left over means', working: '4 eggs are left over, too few for another box' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '4' },
        { id: 's1', text: '8', slip: 'you give the number of whole boxes and not what is left over.' },
        { id: 's2', text: '5', slip: 'you count one too many.' }
      ]
    },
    why: 'Whole groups of one size use up the count in steps of that size, so the most they can use is the biggest multiple of the size that does not pass the count. What is not used up is what is left over, and it is always less than the size of one group.'
  },

  {
    id: 'rt-mod-2',
    use: 'return',
    tier: 'clean',
    setting: 'work',
    topic: 'a library book due date',
    kind: 'problem',
    outcome: 'modrem',
    text: 'Today is Saturday. A library book is due in 45 days. On which day of the week is it due?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['On which day of the week is it due?'], W1: ['On which day of the week is it due?'] },
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
        does: 'Find how many whole loops fit in the count',
        working: '7 × 6 = 42, the most whole loops that do not pass 45'
      },
      { does: 'Take them away to find what is left over', working: '45 − 42 = 3' },
      {
        does: 'Move on from the start by what is left over',
        working: 'Saturday, then Sunday, Monday and Tuesday: 3 days on is Tuesday'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Tuesday' },
        { id: 's1', text: 'Saturday', slip: 'you throw away the 3 left over and stay where you started.' },
        {
          id: 's2',
          text: 'Friday',
          slip: 'you move on by the number of whole loops, 6, and not by what is left over.'
        }
      ]
    },
    why: 'Every whole loop brings the count back to the place it started, so whole loops change nothing. Only what is left over after them moves you on, and it is moved from the start.'
  },

  {
    id: 'rt-mod-3',
    use: 'return',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a string of lights',
    kind: 'problem',
    outcome: 'modrem',
    text: 'A string of lights repeats green, gold, red, blue and white, again and again. What colour is the 47th light?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['What colour is the 47th light?'], W1: ['What colour is the 47th light?'] },
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
        working: '5 × 9 = 45, the most whole patterns that do not pass 47'
      },
      { does: 'Take them away to find what is left over', working: '47 − 45 = 2' },
      { does: 'Find that place in the pattern', working: 'The 2nd light in the pattern is gold' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'gold' },
        {
          id: 's1',
          text: 'red',
          slip: 'you count the left over from 0, so 2 lands on the 3rd light and not the 2nd.'
        },
        {
          id: 's2',
          text: 'white',
          slip: 'you use the number of whole patterns, 9, as the place and not what is left over.'
        }
      ]
    },
    why: 'Each whole pattern ends exactly where it began, so whole patterns change nothing. What is left over says how far into the next pattern the count has gone, and a left over of nothing means the count has just finished a pattern.'
  },

  {
    id: 'rt-irrat-1',
    use: 'return',
    tier: 'clean',
    setting: 'home',
    topic: 'a square lawn',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square lawn has an area of 225 m². Its side is the number that multiplies by itself to give 225. Can the side be written exactly, as a fraction or a decimal that ends?',
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
      { does: 'Name the whole number under the root sign', working: '√225: the whole number is 225' },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '15 × 15 = 225 and 16 × 16 = 256'
      },
      { does: 'See whether it lands exactly on one of them', working: '225 is 15 × 15, so it lands exactly' },
      { does: 'Say whether it can be written exactly', working: '√225 = 15, which is exact' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Exact: 15' },
        {
          id: 's1',
          text: 'Not exact: only about 15',
          slip: 'you assume every {t:sqroot} is only a rounded value and never check whether the number is a whole number multiplied by itself.'
        },
        {
          id: 's2',
          text: 'Exact: 112.5',
          slip: 'you halve the number, instead of finding the number that multiplies by itself to give it.'
        }
      ]
    },
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly as a fraction. There is nothing in between, so landing exactly on a whole number multiplied by itself is the only way for it to be exact, and when it does not land there, a calculator can only round it.'
  },

  {
    id: 'rt-irrat-2',
    use: 'return',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a square poster',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square poster has an area of 12 m². Its side is the number that multiplies by itself to give 12. Can the side be written exactly, as a fraction or a decimal that ends?',
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
      { does: 'Name the whole number under the root sign', working: '√12: the whole number is 12' },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '3 × 3 = 9 and 4 × 4 = 16'
      },
      {
        does: 'See whether it lands exactly on one of them',
        working: '12 is not 9 and not 16, so it is not any whole number multiplied by itself'
      },
      {
        does: 'Say whether it can be written exactly',
        working: '√12 cannot be written as a fraction or as a decimal that ends. Rounded, it is about 3.46'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not exact: about 3.46' },
        { id: 's1', text: 'Exact: 3.46', slip: 'you read the rounded decimal on the calculator as the exact value.' },
        { id: 's2', text: 'Exact: 3', slip: 'you take the nearest whole number as the exact value.' }
      ]
    },
    why: 'The {t:sqroot} of a whole number is either a whole number or a number that can never be written exactly as a fraction. There is nothing in between, so landing exactly on a whole number multiplied by itself is the only way for it to be exact, and when it does not land there, a calculator can only round it.'
  }
]);
