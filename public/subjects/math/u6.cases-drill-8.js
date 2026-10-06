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
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the answer to the first question is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, with a length measured on both. That is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how long a part is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'pyth',
      why: 'Two lengths are given, but they are not two sides of the triangle whose third side is wanted: the length wanted is on a second thing of the same shape. {o:pyth} would be the name if the length wanted were the third side of that very triangle.'
    },
    echo: 'm6-wd-hike',
    also: ['twosides'],
    steps: [
      {
        does: 'Find a part that is measured on both things',
        working: 'The length of the shadow is 1.6 m on the boy and 8 m on the lamp post. The part you want, the height, is measured on the boy only: 1.2 m'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '8 ÷ 1.6 = 5'
      },
      { does: 'Multiply the length you have by that number of times', working: '1.2 × 5 = 6 m' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '6 m' },
        {
          id: 's1',
          text: '0.24 m',
          slip: 'you divide by the number of times where you should multiply, so the bigger thing gets the shorter length.'
        },
        {
          id: 's2',
          text: '7.6 m',
          slip: 'you add the same 6.4 m that the part measured on both differs by, instead of multiplying by the same number of times, though a copy keeps its shape only if every length is multiplied by the same number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how far it is from the top of the boy’s head to the tip of his shadow, it would be {o:pyth}, because that length is the third side of the boy’s own triangle.'
  },

]);
