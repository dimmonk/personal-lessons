// Basic Math, Unit Six: the drill’s problems (part 7 of 10): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for each of the key’s questions, and carries its whole working and
// the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dw-similar-4',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'a garden gnome',
    kind: 'problem',
    outcome: 'similar',
    text: 'A garden gnome is an exact copy of a person. The person is 1.8 m tall and 0.6 m wide. The gnome is 0.3 m tall. How wide is the gnome?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How wide is the gnome?',
      S1: 'A garden gnome is an exact copy of a person. The person is 1.8 m tall and 0.6 m wide. The gnome is 0.3 m tall',
      S2: 'How wide is the gnome?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
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
        working: 'The height is 0.3 m on the gnome and 1.8 m on the person. The part you want, the width, is measured on the person only: 0.6 m'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '1.8 ÷ 0.3 = 6'
      },
      { does: 'Divide the length you have by that number of times', working: '0.6 ÷ 6 = 0.1 m' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '0.1 m' },
        {
          id: 's1',
          text: '3.6 m',
          slip: 'you multiply by the number of times where you should divide, so the smaller thing gets the longer length.'
        },
        {
          id: 's2',
          text: 'about 0.02 m',
          slip: 'you divide by the number of times twice over, as for an area, though a length is asked and every length changes only once by that number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  },

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
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
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
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  },

  {
    id: 'm6-dr-similar-2',
    use: 'drill',
    tier: 'clean',
    setting: 'travel',
    topic: 'a map of a region',
    kind: 'problem',
    outcome: 'similar',
    text: 'A map is an exact copy of a region at a scale of 1 to 25,000: every 1 cm on the map stands for 25,000 cm on the ground. Two villages are 8 cm apart on the map. How far apart are they on the ground, in kilometres?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How far apart are they on the ground, in kilometres?',
      S1: 'A map is an exact copy of a region at a scale of 1 to 25,000: every 1 cm on the map stands for 25,000 cm on the ground. Two villages are 8 cm apart on the map',
      S2: 'How far apart are they on the ground, in kilometres?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
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
        working: 'The scale is 1 to 25,000, so 1 cm on the map stands for 25,000 cm on the ground. So the length the scale compares is 1 cm on the map and 25,000 cm on the ground. The part you want, the distance between the villages, is measured on the map only: 8 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '25,000 ÷ 1 = 25,000'
      },
      {
        does: 'Multiply the length you have by that number of times',
        working: '8 × 25,000 = 200,000 cm'
      },
      {
        does: 'Write the answer in the unit the problem asks for',
        working: '200,000 cm ÷ 100,000 = 2 km'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '2 km' },
        {
          id: 's1',
          text: '200,000 km',
          slip: 'you forget to change the answer from cm into km at the end, so the number is the one in cm and the unit is wrong.'
        },
        {
          id: 's2',
          text: '20 km',
          slip: 'you divide by 10,000 and not by 100,000 when changing cm into km.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  },

  {
    id: 'm6-dr-similar-3',
    use: 'drill',
    tier: 'varied',
    setting: 'shopping',
    topic: 'a shrunk logo',
    kind: 'problem',
    outcome: 'similar',
    text: 'A shop shrinks its logo as an exact copy. The old logo is 18 cm wide and 12 cm high. The new logo is 6 cm wide. How high is the new logo?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How high is the new logo?',
      S1: 'its logo as an exact copy. The old logo is 18 cm wide and 12 cm high. The new logo is 6 cm wide',
      S2: 'How high is the new logo?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
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
        working: 'The width is 6 cm on the new logo and 18 cm on the old logo. The part you want, the height, is measured on the old logo only: 12 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '18 ÷ 6 = 3'
      },
      { does: 'Divide the length you have by that number of times', working: '12 ÷ 3 = 4 cm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '4 cm' },
        {
          id: 's1',
          text: '36 cm',
          slip: 'you multiply by the number of times where you should divide, so the smaller thing gets the longer length.'
        },
        {
          id: 's2',
          text: 'about 1.33 cm',
          slip: 'you divide by the number of times twice over, as for an area, though a length is asked and every length changes only once by that number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  },

  {
    id: 'm6-dr-similar-4',
    use: 'drill',
    tier: 'varied',
    setting: 'building',
    topic: 'a model of a house',
    kind: 'problem',
    outcome: 'similar',
    text: 'A builder shows clients a model of a house, an exact copy of it. The model is 40 cm wide and 25 cm high, and the real house is 12 m wide. How high is the real house, in metres?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How high is the real house, in metres?',
      S1: 'a model of a house, an exact copy of it. The model is 40 cm wide and 25 cm high, and the real house is 12 m wide',
      S2: 'How high is the real house, in metres?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
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
    wouldChange: 'If the problem asked how much surface or how much room inside the bigger thing has, and not how long a part is, it would be {o:sqcube}.'
  }
]);
