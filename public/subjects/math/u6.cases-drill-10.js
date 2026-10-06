// Basic Math, Unit Six: the drill’s problems (part 10 of 10): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for each of the key’s questions, and carries its whole working and
// the slip behind every wrong choice.
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
      M1: 'The problem asks {cue:M1}, a question about how much one of two things of exactly the same shape has, and not a count of ways, an amount through time or a number that a {t:formula} must fit, so the answer to the first question is {a:M1.shape}.',
      S1: 'The words {cue:S1} give two things of exactly the same shape at different sizes, which is {a:S1.matching}.',
      S2: 'The words {cue:S2} ask how much area or volume something has, which is {a:S2.room}.'
    },
    not: {
      outcome: 'similar',
      why: 'The problem asks how much area or volume the bigger thing has, not how long one of its parts is. {o:similar} would be the name if it asked for a length on the bigger thing.'
    },
    echo: 'm6-wd-footbridge',
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '3 ÷ 1 = 3'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Paint on walls covers a surface, so the problem asks about area'
      },
      {
        does: 'Multiply that number of times by itself, with two of them in the product for an area',
        working: '3 × 3 = 9'
      },
      {
        does: 'Multiply the smaller one’s amount by that number of times',
        working: '2 liters × 9 = 18 liters'
      }
    ],
    answer: {
      choices: [
        { id: 'r', text: '18 liters' },
        {
          id: 's1',
          text: '6 liters',
          slip: 'you multiply by the number of times longer only once, as for a length, though an area has two directions, length and width, and both grow.'
        },
        {
          id: 's2',
          text: '54 liters',
          slip: 'you multiply by the number of times longer three times over, as for a volume, though the problem asks about an area, which has only two directions that grow.'
        }
      ],
      right: 'r'
    },
    why: 'If every length is made a number of times longer, both the length and the width of a surface grow by that number of times, so the surface holds that number multiplied by itself as many unit squares. Area grows by the number of times longer, multiplied by itself.',
    wouldChange: 'If the problem asked how tall the garden shed is, and gave the height of the model, it would be {o:similar}.'
  },

  {
    id: 'm6-dr-sqcube-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'two balloons',
    kind: 'problem',
    outcome: 'sqcube',
    text: 'A balloon seller has a small balloon 20 cm across and a big balloon, an exact copy of it, that is 60 cm across. How many times more air does the big balloon hold?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: {
      M1: 'How many times more air does the big balloon hold?',
      S1: 'A balloon seller has a small balloon 20 cm across and a big balloon, an exact copy of it, that is 60 cm across',
      S2: 'How many times more air does the big balloon hold?'
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
    echo: 'm6-wd-footbridge',
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '60 ÷ 20 = 3'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Air fills a solid, so the problem asks about volume'
      },
      {
        does: 'Multiply that number of times by itself, with three of them in the product for a volume',
        working: '3 × 3 × 3 = 27'
      },
      { does: 'Say what it shows', working: 'The bigger one has 27 times as much volume (air)' }
    ],
    answer: {
      choices: [
        { id: 'r', text: '27 times as much' },
        {
          id: 's1',
          text: '3 times as much',
          slip: 'you multiply by the number of times longer only once, as for a length, though a volume has three directions, length, width and height, and all of them grow.'
        },
        {
          id: 's2',
          text: '9 times as much',
          slip: 'you multiply by the number of times longer only twice, as for an area, though a volume has a third direction, height, that grows too.'
        }
      ],
      right: 'r'
    },
    why: 'If every length is made a number of times longer, the length, the width and the height of a solid all grow by that number of times, so the solid holds that number multiplied by itself twice over as many unit cubes. Volume grows by the number of times longer, multiplied by itself twice over.',
    wouldChange: 'If the problem asked how long the big balloon’s string is, given the small balloon’s string, it would be {o:similar}.'
  }
]);
