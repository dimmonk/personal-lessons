// Basic Math, Unit Six: fresh problems for later days, one for each kind.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-rt-similar-3',
    use: 'return',
    tier: 'varied',
    setting: 'health',
    topic: 'a dental photo',
    kind: 'problem',
    outcome: 'similar',
    text: 'A dentist enlarges a photo of a tooth as an exact copy. A filling measures 4 mm wide in the photo and 14 mm wide in the enlargement. The tooth measures 20 mm tall in the photo. How tall is the tooth in the enlargement?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How tall is the tooth in the enlargement?',
      S1: 'enlarges a photo of a tooth as an exact copy. A filling measures 4 mm wide in the photo and 14 mm wide in the enlargement. The tooth measures 20 mm tall in the photo',
      S2: 'How tall is the tooth in the enlargement?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of the same shape. Nothing in it follows an amount over time or counts ways.',
      S1: 'The words {cue:S1} give two things of the same shape, with a length measured on both.',
      S2: 'The words {cue:S2} ask for a length.'
    },
    not: {
      outcome: 'sqcube',
      why: 'It asks for a length, not an area or a volume. If it asked how much surface or room inside the bigger one has, it would be {o:sqcube}.'
    },
    steps: [
      {
        does: 'Find a length that is measured on both things',
        working: 'The filling is 4 mm in the photo and 14 mm in the enlargement. The tooth, which you want, is known in the photo only: 20 mm'
      },
      {
        does: 'Work out how many times longer the bigger one is',
        working: '14 ÷ 4 = 3.5'
      },
      { does: 'Multiply the length you know by that number', working: '20 × 3.5 = 70 mm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '70 mm' },
        {
          id: 's1',
          text: 'about 5.71 mm',
          slip: 'you divide where you should multiply, so the bigger one comes out shorter.'
        },
        {
          id: 's2',
          text: '245 mm',
          slip: 'you multiply by the number of times longer twice, as for an area. A length is multiplied only once.'
        }
      ],
      right: 'r'
    },
    why: 'An exact copy changes only in size: every length is the same number of times longer. So a length measured on both gives that number, and you can use it on any other length.',
  },

  {
    id: 'm6-rt-sqcube-3',
    use: 'return',
    tier: 'varied',
    setting: 'travel',
    topic: 'paint for two boats',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A small boat 2 m long needs 1.5 liters of paint for its hull. A bigger boat of exactly the same shape is 6 m long. How much paint does the hull of the bigger boat need?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: {
      M1: 'How much paint does the hull of the bigger boat need?',
      S1: 'A small boat 2 m long needs 1.5 liters of paint for its hull. A bigger boat of exactly the same shape is 6 m long',
      S2: 'How much paint does the hull of the bigger boat need?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, an amount for one of two things of the same shape. Nothing in it follows an amount over time or counts ways.',
      S1: 'The words {cue:S1} give two things of the same shape, a small one and a big one.',
      S2: 'The words {cue:S2} ask how much paint the hull needs: paint covers a surface, so an area.'
    },
    not: {
      outcome: 'similar',
      why: 'It asks how much the bigger one covers or holds, not how long a part is. If it asked for a length on the bigger one, it would be {o:similar}.'
    },
    steps: [
      {
        does: 'Work out how many times longer the bigger one is',
        working: '6 ÷ 2 = 3'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Paint on a hull covers a surface, so it is an area'
      },
      {
        does: 'Multiply two of that number together, for an area',
        working: '3 × 3 = 9'
      },
      {
        does: 'Multiply the smaller one’s amount by that number',
        working: '1.5 liters × 9 = 13.5 liters'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '13.5 liters' },
        {
          id: 's1',
          text: '4.5 liters',
          slip: 'you multiply by the number of times longer only once, as for a length. An area grows in two directions: length and width.'
        },
        {
          id: 's2',
          text: '40.5 liters',
          slip: 'you multiply by the number of times longer three times, as for a volume. This one covers a surface, so there are only two of them.'
        }
      ],
      right: 'r'
    },
    why: 'When every length is some number of times longer, a surface grows in length and width. So its area grows by two of that number multiplied together.',
  }
]);
