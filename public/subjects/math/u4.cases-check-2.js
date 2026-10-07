// Basic Math, Unit Four: the checks on the key’s two questions.

FC.cases('math', 'u4', [

  {
    id: 'm4-ck-g1',
    use: 'check',
    tier: 'clean',
    setting: 'leisure',
    topic: 'members of a sports club',
    outcome: 'expg',
    text: 'A sports club has 120 members, and the number of members grows by 10% every year. How many members will it have after 3 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['the number of members grows by 10% every year', 'after 3 years'],
      G1: ['the number of members grows by 10% every year'],
      G2: ['How many members will it have after 3 years?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it.'
    }
  },

  {
    id: 'm4-ck-g2',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'trees in a forest',
    outcome: 'logsolve',
    text: 'A forest has 12,000 trees, and the number of trees grows by 2% a year. After how many years will it have 15,000 trees?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['the number of trees grows by 2% a year', 'After how many years will it have 15,000 trees?'],
      G1: ['the number of trees grows by 2% a year'],
      G2: ['After how many years will it have 15,000 trees?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there.'
    }
  }
]);
