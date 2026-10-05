// Basic Math, Unit Three: problems shown inside cards: the opening problem of each kind, a second one in another setting, the problem whose marked words are tapped, the problem after the question card, the look-alike pairs and the two exceptions.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.

FC.cases('math', 'u3', [
  {
    id: 'm3-tap-quad',
    use: 'check',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a rectangular play area',
    outcome: 'quad',
    text: 'A rectangular play area is 4 m longer than it is wide, and its area is 77 m². How wide is it?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['4 m longer than it is wide', 'How wide is it?'],
      A1: ['4 m longer than it is wide', 'its area is 77 m²']
    },
    segments: [
      { text: 'A rectangular play area is 4 m longer than it is wide, and its area is 77 m².' },
      {
        text: 'How wide is it?',
        note: 'That is the question. The words you are asked to tap are in another sentence.'
      }
    ],
    reason: {
      A1: 'The words {cue:A1} say that the length is the width plus 4, and the area is the width multiplied by the length, so the missing width is multiplied by itself as well as used on its own. That is {a:A1.itself}.'
    }
  },

  {
    id: 'm3-exc-breakeven',
    use: 'teach',
    tier: 'misleading',
    setting: 'work',
    topic: 'profit and break-even',
    name: 'The break-even point',
    outcome: 'quad',
    text: 'A stall owner works out her profit, in tens of euros, from selling n crates of plums as 12 × n − n × n − 20. How many crates must she sell to just break even, with a profit of zero?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['12 × n − n × n − 20', 'How many crates must she sell to just break even'],
      A1: ['12 × n − n × n − 20', 'a profit of zero']
    },
    also: ['formula'],
    segments: [
      {
        text: 'A stall owner works out her profit, in tens of euros, from selling n crates of plums as 12 × n − n × n − 20.'
      },
      {
        text: 'How many crates must she sell to just break even, with a profit of zero?',
        note: 'That is the question. The words you are asked to tap are in another sentence.'
      }
    ]
  },

  {
    id: 'm3-la-rug-quad',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'a rug longer than it is wide',
    outcome: 'quad',
    text: 'A rug is 3 m longer than it is wide and has an area of 28 m². How wide is it?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['3 m longer than it is wide', 'How wide is it?'],
      A1: ['3 m longer than it is wide', 'an area of 28 m²']
    }
  },

  {
    id: 'm3-sq-tiles',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'tiles laid as a square',
    name: 'The square of tiles',
    text: 'A tiler lays square tiles to make a bigger square. A square with 5 tiles along each side takes 5 × 5 = 25 tiles, and one with 6 along each side takes 6 × 6 = 36. A square with 12 along each side takes 12 × 12 = 144 tiles.'
  }
]);
