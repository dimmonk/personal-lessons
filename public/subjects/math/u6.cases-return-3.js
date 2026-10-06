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
        working: 'The filling is 4 mm on the photo and 14 mm on the enlargement. The part you want, the tooth, is measured on the photo only: 20 mm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '14 ÷ 4 = 3.5'
      },
      { does: 'Multiply the length you have by that number of times', working: '20 × 3.5 = 70 mm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '70 mm' },
        {
          id: 's1',
          text: 'about 5.71 mm',
          slip: 'you divide by the number of times where you should multiply, so the bigger thing gets the shorter length.'
        },
        {
          id: 's2',
          text: '245 mm',
          slip: 'you multiply by the number of times twice over, as for an area, though a length is asked and every length changes only once by that number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
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
      M1: 'The problem asks {cue:M1}, a question about how much one of two things of exactly the same shape has, and not a count of ways, an amount through time or a number that a {t:formula} must fit, so the answer to the first question is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, which is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how much area or volume something has, which is {a:S2.room}.'
    },
    not: {
      outcome: 'similar',
      why: 'The problem asks how much area or volume the bigger thing has, not how long one of its parts is. {o:similar} would be the name if it asked for a length on the bigger thing.'
    },
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '6 ÷ 2 = 3'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Paint on a hull covers a surface, so the problem asks about area'
      },
      {
        does: 'Multiply that number of times by itself, with two of them in the product for an area',
        working: '3 × 3 = 9'
      },
      {
        does: 'Multiply the smaller one’s amount by that number of times',
        working: '1.5 liters × 9 = 13.5 liters'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '13.5 liters' },
        {
          id: 's1',
          text: '4.5 liters',
          slip: 'you multiply by the number of times longer only once, as for a length, though an area has two directions, length and width, and both grow.'
        },
        {
          id: 's2',
          text: '40.5 liters',
          slip: 'you multiply by the number of times longer three times over, as for a volume, though the problem asks about an area, which has only two directions that grow.'
        }
      ],
      right: 'r'
    },
    why: 'If every length is made a number of times longer, both the length and the width of a surface grow by that number of times, so the surface holds that number multiplied by itself as many unit squares. Area grows by the number of times longer, multiplied by itself.',
  }
]);
