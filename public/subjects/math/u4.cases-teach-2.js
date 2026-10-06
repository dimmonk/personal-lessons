// Basic Math, Unit Four: problems shown inside cards: the look-alike pairs (the same story, a different kind).

FC.cases('math', 'u4', [

  {
    id: 'm4-la-visits-lin',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'visitors gaining a hundred',
    outcome: 'lin',
    text: 'A shop’s website had 2,000 visitors in its first week, and it gains 100 more visitors every week. How many visitors will it have after 6 weeks?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['it gains 100 more visitors every week', 'after 6 weeks'],
      G1: ['it gains 100 more visitors every week'],
      G2: ['How many visitors will it have after 6 weeks?']
    }
  },

  {
    id: 'm4-la-visits-expg',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'visitors growing by a share',
    outcome: 'expg',
    text: 'A shop’s website had 2,000 visitors in its first week, and its visitors grow by 5% every week. How many visitors will it have after 6 weeks?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['its visitors grow by 5% every week', 'after 6 weeks'],
      G1: ['its visitors grow by 5% every week'],
      G2: ['How many visitors will it have after 6 weeks?']
    }
  },

  {
    id: 'm4-la-town-expg',
    use: 'teach',
    tier: 'clean',
    setting: 'travel',
    topic: 'a town growing for ten years',
    outcome: 'expg',
    text: 'A town has 8,000 people, and its population grows by 3% every year. How many people will it have after 10 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['its population grows by 3% every year', 'after 10 years'],
      G1: ['its population grows by 3% every year'],
      G2: ['How many people will it have after 10 years?']
    }
  },

  {
    id: 'm4-la-town-logsolve',
    use: 'teach',
    tier: 'clean',
    setting: 'travel',
    topic: 'a town growing to a goal',
    outcome: 'logsolve',
    text: 'A town has 8,000 people, and its population grows by 3% every year. After how many years will it have 12,000 people?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['its population grows by 3% every year', 'After how many years will it have 12,000 people?'],
      G1: ['its population grows by 3% every year'],
      G2: ['After how many years will it have 12,000 people?']
    }
  },

  {
    id: 'm4-la-phone-lin',
    use: 'teach',
    tier: 'clean',
    setting: 'money',
    topic: 'a phone plan rising',
    outcome: 'lin',
    text: 'A phone plan costs $20 a month, and its price goes up by $2 every month. What will it cost after 6 months?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['its price goes up by $2 every month', 'after 6 months'],
      G1: ['its price goes up by $2 every month'],
      G2: ['What will it cost after 6 months?']
    }
  },

  {
    id: 'm4-la-phone-oneoff',
    use: 'teach',
    tier: 'clean',
    setting: 'money',
    topic: 'a phone plan with a new price',
    outcome: 'oneoff',
    text: 'A phone plan cost $20 a month. In January it went up to $22 a month, and it has stayed at $22 a month since. What will it cost after 6 months?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has stayed at $22 a month since', 'after 6 months'],
      G1: ['In January it went up to $22 a month', 'it has stayed at $22 a month since'],
      G2: ['What will it cost after 6 months?']
    }
  }
]);
