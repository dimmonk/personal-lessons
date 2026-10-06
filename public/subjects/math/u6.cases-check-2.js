// Basic Math, Unit Six: the problems of the worked examples, the problems the learner finishes in a check, and the look-alike cases (part 2 of 2).
// A worked example’s problem carries only the problem; its working is on the card. A check’s problem carries the whole working, so that
// the app can show it up to the last step, or not at all, and name the slip behind every wrong choice. A look-alike case is a plain story
// with a route and marked words.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-ck-sqcube-last',
    use: 'check',
    tier: 'clean',
    setting: 'home',
    topic: 'a can of paint',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A can of paint 15 cm tall holds 1 liter. A second can of exactly the same shape is 30 cm tall. How much paint does the second can hold?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '30 ÷ 15 = 2'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Paint in a can fills a solid, so the problem asks about volume'
      },
      {
        does: 'Multiply that number of times by itself, with three of them in the product for a volume',
        working: '2 × 2 × 2 = 8'
      },
      {
        does: 'Multiply the smaller one’s amount by that number of times',
        working: '1 liters × 8 = 8 liters'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '8 liters' },
        {
          id: 's1',
          text: '2 liters',
          slip: 'you multiply by the number of times longer only once, as for a length, though a volume has three directions, length, width and height, and all of them grow.'
        },
        {
          id: 's2',
          text: '4 liters',
          slip: 'you multiply by the number of times longer only twice, as for an area, though a volume has a third direction, height, that grows too.'
        }
      ],
      right: 'r'
    },
    why: 'If every length is made a number of times longer, the length, the width and the height of a solid all grow by that number of times, so the solid holds that number multiplied by itself twice over as many unit cubes. Volume grows by the number of times longer, multiplied by itself twice over.'
  },

  {
    id: 'm6-ck-sqcube-whole',
    use: 'check',
    tier: 'clean',
    setting: 'cooking',
    topic: 'icing on a cake',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A baker uses 80 g of icing to cover the top of a cake 20 cm wide. A second cake of exactly the same shape is 30 cm wide. How much icing covers the top of the second cake?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '30 ÷ 20 = 1.5'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Icing covers the top, which is a surface, so the problem asks about area'
      },
      {
        does: 'Multiply that number of times by itself, with two of them in the product for an area',
        working: '1.5 × 1.5 = 2.25'
      },
      {
        does: 'Multiply the smaller one’s amount by that number of times',
        working: '80 g × 2.25 = 180 g'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '180 g' },
        {
          id: 's1',
          text: '120 g',
          slip: 'you multiply by the number of times longer only once, as for a length, though an area has two directions, length and width, and both grow.'
        },
        {
          id: 's2',
          text: '270 g',
          slip: 'you multiply by the number of times longer three times over, as for a volume, though the problem asks about an area, which has only two directions that grow.'
        }
      ],
      right: 'r'
    },
    why: 'If every length is made a number of times longer, both the length and the width of a surface grow by that number of times, so the surface holds that number multiplied by itself as many unit squares. Area grows by the number of times longer, multiplied by itself.'
  },

  {
    id: 'm6-la-dock-pyth',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'a loading dock ramp',
    outcome: 'pyth',
    text: 'A builder makes a ramp up to a loading dock. The ramp is 6.5 m long along its slope, and it ends 6 m from the foot of the dock wall, on level ground. How high is the dock?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: {
      M1: 'The ramp is 6.5 m long along its slope, and it ends 6 m from the foot of the dock wall, on level ground',
      S1: 'The ramp is 6.5 m long along its slope, and it ends 6 m from the foot of the dock wall, on level ground',
      S2: 'How high is the dock?'
    }
  },

  {
    id: 'm6-la-dock-trig',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'a loading dock ramp with a slope',
    outcome: 'trig',
    text: 'A builder makes a ramp up to a loading dock. The ramp is 6.5 m long along its slope, and it rises at an angle of 21° above level ground. How high is the dock?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'The ramp is 6.5 m long along its slope, and it rises at an angle of 21° above level ground',
      S1: 'The ramp is 6.5 m long along its slope, and it rises at an angle of 21° above level ground',
      S2: 'How high is the dock?'
    }
  },

  {
    id: 'm6-la-lighthouse-trig',
    use: 'teach',
    tier: 'clean',
    setting: 'travel',
    topic: 'a lighthouse lamp',
    outcome: 'trig',
    text: 'A harbor pilot stands on level ground 80 m from the foot of a lighthouse and sees its lamp at an angle of 25° above level ground. How high is the lamp?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: {
      M1: 'stands on level ground 80 m from the foot of a lighthouse and sees its lamp at an angle of 25° above level ground',
      S1: 'stands on level ground 80 m from the foot of a lighthouse and sees its lamp at an angle of 25° above level ground',
      S2: 'How high is the lamp?'
    }
  },

  {
    id: 'm6-la-lighthouse-similar',
    use: 'teach',
    tier: 'clean',
    setting: 'travel',
    topic: 'a postcard of a lighthouse',
    outcome: 'similar',
    text: 'A harbor pilot has a postcard of a lighthouse, an exact copy of it. On the postcard the lighthouse is 12 cm tall and its door is 0.5 cm tall. The real door is 2 m tall. How tall is the real lighthouse?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: ['has a postcard of a lighthouse, an exact copy of it', 'The real door is 2 m tall'],
      S1: ['has a postcard of a lighthouse, an exact copy of it', 'The real door is 2 m tall'],
      S2: 'How tall is the real lighthouse?'
    }
  },

  {
    id: 'm6-la-poster-similar',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a poster of a postcard',
    outcome: 'similar',
    text: 'A printer prints a poster as an exact copy of a postcard. The postcard is 10 cm wide and 15 cm high, and the poster is 40 cm wide. How high is the poster?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'prints a poster as an exact copy of a postcard. The postcard is 10 cm wide and 15 cm high, and the poster is 40 cm wide',
      S1: 'prints a poster as an exact copy of a postcard. The postcard is 10 cm wide and 15 cm high, and the poster is 40 cm wide',
      S2: 'How high is the poster?'
    }
  },

  {
    id: 'm6-la-poster-sqcube',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'ink on a poster',
    outcome: 'sqcube',
    text: 'A printer prints a poster as an exact copy of a postcard. The postcard is 10 cm wide, and the poster is 40 cm wide. The postcard uses 2 g of ink. How much ink does the poster use?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: {
      M1: 'prints a poster as an exact copy of a postcard. The postcard is 10 cm wide, and the poster is 40 cm wide',
      S1: 'prints a poster as an exact copy of a postcard. The postcard is 10 cm wide, and the poster is 40 cm wide',
      S2: 'How much ink does the poster use?'
    }
  }
]);
