// Basic Math, Unit Six: the look-alike cases. A look-alike case is a plain story with a route and marked words.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
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
