// Basic Math, Unit Six: the drill’s problems (part 8 of 10): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for each of the key’s questions, and carries its whole working and
// the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u6', [
  {
    id: 'm6-dr-similar-5',
    use: 'drill',
    tier: 'misleading',
    setting: 'home',
    topic: 'a poster with an area on the card',
    kind: 'problem',
    outcome: 'similar',
    text: 'A poster is an exact copy of a card. The card is 20 cm wide and 30 cm high, so its area is 600 square cm. The poster is 60 cm wide. How high is the poster?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: {
      M1: 'How high is the poster?',
      S1: 'A poster is an exact copy of a card. The card is 20 cm wide and 30 cm high, so its area is 600 square cm. The poster is 60 cm wide',
      S2: 'How high is the poster?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, with a length measured on both. That is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how long a part is, which is {a:S2.length}.'
    },
    not: {
      outcome: 'sqcube',
      why: 'The problem mentions an area, 600 square cm, but it asks how high the poster is, which is a length. {o:sqcube} would be the name if it asked how much paper the poster needs, or how many times more than the card.'
    },
    echo: 'm6-wd-mats',
    steps: [
      {
        does: 'Find a part that is measured on both things',
        working: 'The width is 20 cm on the card and 60 cm on the poster. The part you want, the height, is measured on the card only: 30 cm'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '60 ÷ 20 = 3'
      },
      { does: 'Multiply the length you have by that number of times', working: '30 × 3 = 90 cm' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '90 cm' },
        {
          id: 's1',
          text: '10 cm',
          slip: 'you divide by the number of times where you should multiply, so the bigger thing gets the shorter length.'
        },
        {
          id: 's2',
          text: '70 cm',
          slip: 'you add the same 40 cm that the part measured on both differs by, instead of multiplying by the same number of times, though a copy keeps its shape only if every length is multiplied by the same number.'
        }
      ],
      right: 'r'
    },
    why: 'Two things of exactly the same shape differ only in size: every length on the bigger one is the same number of times longer than the matching length on the smaller one. So a part measured on both gives that number of times, and it can be used on any other matching length.',
    wouldChange: 'If the problem asked how many times more paper the poster needs than the card, and not how high it is, it would be {o:sqcube}.'
  },

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
      M1: 'The problem asks {cue:M1}, a length on one of two things of exactly the same shape. Nothing in it follows an amount through time, hides a number that a {t:formula} must fit, or counts ways, so the key’s first answer is {a:M1.shape}.',
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

  {
    id: 'm6-dl-sqcube-1',
    use: 'drill',
    tier: 'clean',
    setting: 'work',
    topic: 'paper for a big poster',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A printer prints a poster 20 cm wide and a second poster of exactly the same shape that is 60 cm wide. How many times more paper does the second poster need?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: {
      M1: 'How many times more paper does the second poster need?',
      S1: 'A printer prints a poster 20 cm wide and a second poster of exactly the same shape that is 60 cm wide',
      S2: 'How many times more paper does the second poster need?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about how much one of two things of exactly the same shape has, and not a count of ways, an amount through time or a number that a {t:formula} must fit, so the key’s first answer is {a:M1.shape}.',
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
        working: '60 ÷ 20 = 3'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Paper covers a surface, so the problem asks about area'
      },
      {
        does: 'Multiply that number of times by itself, with two of them in the product for an area',
        working: '3 × 3 = 9'
      },
      { does: 'Say what it shows', working: 'The bigger one has 9 times as much area (paper)' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '9 times as much' },
        {
          id: 's1',
          text: '3 times as much',
          slip: 'you multiply by the number of times longer only once, as for a length, though an area has two directions, length and width, and both grow.'
        },
        {
          id: 's2',
          text: '27 times as much',
          slip: 'you multiply by the number of times longer three times over, as for a volume, though the problem asks about an area, which has only two directions that grow.'
        }
      ],
      right: 'r'
    },
    why: 'If every length is made a number of times longer, both the length and the width of a surface grow by that number of times, so the surface holds that number multiplied by itself as many unit squares. Area grows by the number of times longer, multiplied by itself.',
    wouldChange: 'If the problem asked how long a part of the bigger thing is, and not for an area or a volume, it would be {o:similar}.'
  },

  {
    id: 'm6-dl-sqcube-2',
    use: 'drill',
    tier: 'varied',
    setting: 'building',
    topic: 'a water tank',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A water tank 1.5 m tall holds 2,000 litres. A second tank of exactly the same shape is 3 m tall. How much water does the second tank hold?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: {
      M1: 'How much water does the second tank hold?',
      S1: 'A water tank 1.5 m tall holds 2,000 litres. A second tank of exactly the same shape is 3 m tall',
      S2: 'How much water does the second tank hold?'
    },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about how much one of two things of exactly the same shape has, and not a count of ways, an amount through time or a number that a {t:formula} must fit, so the key’s first answer is {a:M1.shape}.',
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
        working: '3 ÷ 1.5 = 2'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Water fills a solid, so the problem asks about volume'
      },
      {
        does: 'Multiply that number of times by itself, with three of them in the product for a volume',
        working: '2 × 2 × 2 = 8'
      },
      {
        does: 'Multiply the smaller one’s amount by that number of times',
        working: '2,000 litres × 8 = 16,000 litres'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '16,000 litres' },
        {
          id: 's1',
          text: '4,000 litres',
          slip: 'you multiply by the number of times longer only once, as for a length, though a volume has three directions, length, width and height, and all of them grow.'
        },
        {
          id: 's2',
          text: '8,000 litres',
          slip: 'you multiply by the number of times longer only twice, as for an area, though a volume has a third direction, height, that grows too.'
        }
      ],
      right: 'r'
    },
    why: 'If every length is made a number of times longer, the length, the width and the height of a solid all grow by that number of times, so the solid holds that number multiplied by itself twice over as many unit cubes. Volume grows by the number of times longer, multiplied by itself twice over.',
    wouldChange: 'If the problem asked how long a part of the bigger thing is, and not for an area or a volume, it would be {o:similar}.'
  }
]);
