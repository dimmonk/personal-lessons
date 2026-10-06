// Basic Math, Unit Six: the drill’s problems, all asked as whole problems (what it gives, what it asks, the kind, then the solving).
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dr-similar-1',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'a cloth pattern',
    kind: 'problem',
    outcome: 'similar',
    text: 'A tailor cuts a cloth pattern as an exact copy of a larger one. The small pattern is 12 cm long and 9 cm wide. The large pattern is 30 cm long. How wide is the large pattern?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How wide is the large pattern?',
      S1: 'a cloth pattern as an exact copy of a larger one. The small pattern is 12 cm long and 9 cm wide. The large pattern is 30 cm long',
      S2: 'How wide is the large pattern?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the answer to the first question is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, with a length measured on both. That is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how long a part is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'sqcube',
      why: 'A length is asked, not an area or a volume. {o:sqcube} would be the name if the problem asked how much surface or how much room inside the bigger thing has, or how many times more.'
    },
    steps: [
      {
        does: 'Find a part that is measured on both things',
        working: 'The length is 12 cm on the small pattern and 30 cm on the large pattern. The part you want, the width, is measured on the small pattern only: 9 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '30 ÷ 12 = 2.5'
      },
      { does: 'Multiply the length you have by that number of times', working: '9 × 2.5 = 22.5 cm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '22.5 cm' },
        {
          id: 's1',
          text: '3.6 cm',
          slip: 'you divide by the number of times where you should multiply, so the bigger thing gets the shorter length.'
        },
        {
          id: 's2',
          text: '27 cm',
          slip: 'you add the same 18 cm that the part measured on both differs by, instead of multiplying by the same number of times, though a copy keeps its shape only if every length is multiplied by the same number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
  },

  {
    id: 'm6-dr-similar-4',
    use: 'drill',
    tier: 'varied',
    setting: 'building',
    topic: 'a model of a house',
    kind: 'problem',
    outcome: 'similar',
    text: 'A builder shows clients a model of a house, an exact copy of it. The model is 40 cm wide and 25 cm high, and the real house is 12 m wide. How high is the real house, in meters?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How high is the real house, in meters?',
      S1: 'a model of a house, an exact copy of it. The model is 40 cm wide and 25 cm high, and the real house is 12 m wide',
      S2: 'How high is the real house, in meters?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the answer to the first question is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, with a length measured on both. That is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how long a part is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'sqcube',
      why: 'A length is asked, not an area or a volume. {o:sqcube} would be the name if the problem asked how much surface or how much room inside the bigger thing has, or how many times more.'
    },
    steps: [
      {
        does: 'Find a part that is measured on both things',
        working: 'The width is 40 cm on the model and 12 m on the real house. The part you want, the height, is measured on the model only: 25 cm'
      },
      { does: 'Write both lengths in the same unit', working: '12 m = 1,200 cm' },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '1,200 ÷ 40 = 30'
      },
      { does: 'Multiply the length you have by that number of times', working: '25 × 30 = 750 cm' },
      { does: 'Write the answer in the unit the problem asks for', working: '750 cm ÷ 100 = 7.5 m' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '7.5 m' },
        {
          id: 's1',
          text: '750 m',
          slip: 'you forget to change the answer from cm into m at the end, so the number is the one in cm and the unit is wrong.'
        },
        {
          id: 's2',
          text: '225 m',
          slip: 'you multiply by the number of times twice over, as for an area, though a length is asked and every length changes only once by that number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
  }
]);
