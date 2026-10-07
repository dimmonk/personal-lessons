// Basic Math, Unit Six: the drill’s problems, all asked as whole problems (what it gives, what it asks, the kind, then the solving).
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dr-sqcube-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'building',
    topic: 'paint for a garden shed',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A garden shed is an exact copy of a model shed. The model shed is 1 m high and the garden shed is 3 m high. The paint for the walls of the model shed is 2 liters. How much paint do the walls of the garden shed need?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: {
      M1: 'How much paint do the walls of the garden shed need?',
      S1: 'A garden shed is an exact copy of a model shed. The model shed is 1 m high and the garden shed is 3 m high. The paint for the walls of the model shed is 2 liters',
      S2: 'How much paint do the walls of the garden shed need?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, an amount for one of two things of the same shape. Nothing in it follows an amount over time or counts ways.',
      S1: 'The words {cue:S1} give two things of the same shape, a small one and a big one.',
      S2: 'The words {cue:S2} ask how much paint the walls need: paint covers a surface, so an area.'
    },
    not: {
      outcome: 'similar',
      why: 'It asks how much the bigger one covers or holds, not how long a part is. If it asked for a length on the bigger one, it would be {o:similar}.'
    },
    echo: 'm6-wd-footbridge',
    steps: [
      {
        does: 'Work out how many times longer the bigger one is',
        working: '3 ÷ 1 = 3'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Paint on walls covers a surface, so it is an area'
      },
      {
        does: 'Multiply two of that number together, for an area',
        working: '3 × 3 = 9'
      },
      {
        does: 'Multiply the smaller one’s amount by that number',
        working: '2 liters × 9 = 18 liters'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '18 liters' },
        {
          id: 's1',
          text: '6 liters',
          slip: 'you multiply by the number of times longer only once, as for a length. An area grows in two directions: length and width.'
        },
        {
          id: 's2',
          text: '54 liters',
          slip: 'you multiply by the number of times longer three times, as for a volume. This one covers a surface, so there are only two of them.'
        }
      ],
      right: 'r'
    },
    why: 'When every length is some number of times longer, a surface grows in length and width. So its area grows by two of that number multiplied together.',
  },

]);
