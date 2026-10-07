// Basic Math, Unit Six: the drill’s problems, all asked as whole problems (what it gives, what it asks, the kind, then the solving).
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dr-similar-6',
    use: 'drill',
    tier: 'misleading',
    setting: 'home',
    topic: 'a lamp post and a boy',
    kind: 'problem',
    outcome: 'similar',
    text: 'A boy 1.2 m tall casts a shadow 1.6 m long on level ground. At the same moment a lamp post casts a shadow 8 m long. How tall is the lamp post?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How tall is the lamp post?',
      S1: 'A boy 1.2 m tall casts a shadow 1.6 m long on level ground. At the same moment a lamp post casts a shadow 8 m long',
      S2: 'How tall is the lamp post?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of the same shape. Nothing in it follows an amount over time or counts ways.',
      S1: 'The words {cue:S1} give two things of the same shape, with a length measured on both.',
      S2: 'The words {cue:S2} ask for a length.'
    },
    not: {
      outcome: 'pyth',
      why: 'The boy’s height and shadow are two lengths, but the length you want is on a second thing, the lamp post.'
    },
    echo: 'm6-wd-hike',
    also: ['twosides'],
    steps: [
      {
        does: 'Find a length that is measured on both things',
        working: 'The shadow is 1.6 m for the boy and 8 m for the lamp post. The height, which you want, is known for the boy only: 1.2 m'
      },
      {
        does: 'Work out how many times longer the bigger one is',
        working: '8 ÷ 1.6 = 5'
      },
      { does: 'Multiply the length you know by that number', working: '1.2 × 5 = 6 m' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '6 m' },
        {
          id: 's1',
          text: '0.24 m',
          slip: 'you divide where you should multiply, so the bigger one comes out shorter.'
        },
        {
          id: 's2',
          text: '7.6 m',
          slip: 'you add the 6.4 m that the two shadows differ by, instead of multiplying. A copy keeps its shape only if every length is multiplied by the same number.'
        }
      ],
      right: 'r'
    },
    why: 'An exact copy changes only in size: every length is the same number of times longer. So a length measured on both gives that number, and you can use it on any other length.',
    wouldChange: 'If it asked how far it is from the top of the boy’s head to the tip of his shadow, it would be {o:pyth}: that is the third side of his own triangle.'
  },

]);
