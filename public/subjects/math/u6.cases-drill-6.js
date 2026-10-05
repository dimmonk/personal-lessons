// Basic Math, Unit Six: the drill’s problems (part 6 of 10): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for each of the key’s questions, and carries its whole working and
// the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dl-similar-3',
    use: 'drill',
    tier: 'varied',
    setting: 'shopping',
    topic: 'a small print of a painting',
    kind: 'problem',
    outcome: 'similar',
    text: 'A gallery sells a print as an exact copy of a painting. The painting is 90 cm wide and 120 cm high. The print is 30 cm wide. How high is the print?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How high is the print?',
      S1: 'a print as an exact copy of a painting. The painting is 90 cm wide and 120 cm high. The print is 30 cm wide',
      S2: 'How high is the print?'
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
        working: 'The width is 30 cm on the print and 90 cm on the painting. The part you want, the height, is measured on the painting only: 120 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '90 ÷ 30 = 3'
      },
      { does: 'Divide the length you have by that number of times', working: '120 ÷ 3 = 40 cm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '40 cm' },
        {
          id: 's1',
          text: '360 cm',
          slip: 'you multiply by the number of times where you should divide, so the smaller thing gets the longer length.'
        },
        {
          id: 's2',
          text: 'about 13.33 cm',
          slip: 'you divide by the number of times twice over, as for an area, though a length is asked and every length changes only once by that number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  },

  {
    id: 'm6-dl-similar-4',
    use: 'drill',
    tier: 'varied',
    setting: 'building',
    topic: 'a plan of a hall',
    kind: 'problem',
    outcome: 'similar',
    text: 'A plan of a hall is an exact copy of the real hall. On the plan the stage is 3 cm wide and the hall is 8 cm wide. The real hall is 24 m wide. How wide is the real stage, in metres?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How wide is the real stage, in metres?',
      S1: 'A plan of a hall is an exact copy of the real hall. On the plan the stage is 3 cm wide and the hall is 8 cm wide. The real hall is 24 m wide',
      S2: 'How wide is the real stage, in metres?'
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
        working: 'The hall’s width is 8 cm on the plan and 24 m on the real hall. The part you want, the stage, is measured on the plan only: 3 cm'
      },
      { does: 'Write both lengths in the same unit', working: '24 m = 2,400 cm' },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '2,400 ÷ 8 = 300'
      },
      { does: 'Multiply the length you have by that number of times', working: '3 × 300 = 900 cm' },
      { does: 'Write the answer in the unit the problem asks for', working: '900 cm ÷ 100 = 9 m' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '9 m' },
        {
          id: 's1',
          text: '900 m',
          slip: 'you forget to change the answer from cm into m at the end, so the number is the one in cm and the unit is wrong.'
        },
        { id: 's2', text: '90 m', slip: 'you divide by 10 and not by 100 when changing cm into m.' }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  },

  {
    id: 'm6-dw-similar-1',
    use: 'drill',
    tier: 'clean',
    setting: 'cooking',
    topic: 'a bigger loaf',
    kind: 'problem',
    outcome: 'similar',
    text: 'A baker bakes a small rectangular loaf 8 cm wide and 20 cm long. A bigger loaf is an exact copy of it and is 12 cm wide. How long is the bigger loaf?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How long is the bigger loaf?',
      S1: 'a small rectangular loaf 8 cm wide and 20 cm long. A bigger loaf is an exact copy of it and is 12 cm wide',
      S2: 'How long is the bigger loaf?'
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
        working: 'The width is 8 cm on the small loaf and 12 cm on the bigger loaf. The part you want, the length, is measured on the small loaf only: 20 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '12 ÷ 8 = 1.5'
      },
      { does: 'Multiply the length you have by that number of times', working: '20 × 1.5 = 30 cm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '30 cm' },
        {
          id: 's1',
          text: 'about 13.33 cm',
          slip: 'you divide by the number of times where you should multiply, so the bigger thing gets the shorter length.'
        },
        {
          id: 's2',
          text: '24 cm',
          slip: 'you add the same 4 cm that the part measured on both differs by, instead of multiplying by the same number of times, though a copy keeps its shape only if every length is multiplied by the same number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  },

  {
    id: 'm6-dw-similar-2',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'a toy house',
    kind: 'problem',
    outcome: 'similar',
    text: 'A child builds a toy house as an exact copy of her real house. The toy house’s door is 8 cm high, and the real door is 2 m high. The toy house’s roof ridge is 15 cm above the ground. How high is the real house’s ridge, in metres?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How high is the real house’s ridge, in metres?',
      S1: 'a toy house as an exact copy of her real house. The toy house’s door is 8 cm high, and the real door is 2 m high. The toy house’s roof ridge is 15 cm above the ground',
      S2: 'How high is the real house’s ridge, in metres?'
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
        working: 'The door is 8 cm on the toy house and 2 m on the real house. The part you want, the roof ridge, is measured on the toy house only: 15 cm'
      },
      { does: 'Write both lengths in the same unit', working: '2 m = 200 cm' },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '200 ÷ 8 = 25'
      },
      { does: 'Multiply the length you have by that number of times', working: '15 × 25 = 375 cm' },
      {
        does: 'Write the answer in the unit the problem asks for',
        working: '375 cm ÷ 100 = 3.75 m'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '3.75 m' },
        {
          id: 's1',
          text: '375 m',
          slip: 'you forget to change the answer from cm into m at the end, so the number is the one in cm and the unit is wrong.'
        },
        {
          id: 's2',
          text: '93.75 m',
          slip: 'you multiply by the number of times twice over, as for an area, though a length is asked and every length changes only once by that number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  },

  {
    id: 'm6-dw-similar-3',
    use: 'drill',
    tier: 'varied',
    setting: 'work',
    topic: 'an engineer’s drawing',
    kind: 'problem',
    outcome: 'similar',
    text: 'An engineer’s drawing of a part is an exact copy of the real part. A hole is 2.5 cm wide on the drawing and 10 cm wide on the part. The part is 6 cm long on the drawing. How long is the real part?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How long is the real part?',
      S1: 'An engineer’s drawing of a part is an exact copy of the real part. A hole is 2.5 cm wide on the drawing and 10 cm wide on the part. The part is 6 cm long on the drawing',
      S2: 'How long is the real part?'
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
        working: 'The hole is 2.5 cm on the drawing and 10 cm on the real part. The part you want, the length of the part, is measured on the drawing only: 6 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '10 ÷ 2.5 = 4'
      },
      { does: 'Multiply the length you have by that number of times', working: '6 × 4 = 24 cm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '24 cm' },
        {
          id: 's1',
          text: '1.5 cm',
          slip: 'you divide by the number of times where you should multiply, so the bigger thing gets the shorter length.'
        },
        {
          id: 's2',
          text: '13.5 cm',
          slip: 'you add the same 7.5 cm that the part measured on both differs by, instead of multiplying by the same number of times, though a copy keeps its shape only if every length is multiplied by the same number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  }
]);
