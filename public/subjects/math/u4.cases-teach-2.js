// Basic Math, Unit Four: problems shown inside cards (part 2): the two words, the first and second problem of each kind, the problem
// in the check after each kind, the look-alike pairs (the same story, a different kind), the exception, and the checks on the key’s two questions.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// route: { M1, G1, G2 } gives the accepted answer to each question; cues are the exact words in the text that decide it; segments are the
// tappable pieces for "tap the words" prompts, and note is shown if a piece is tapped in error. A case’s text is free wording: it retypes no key line.

FC.cases('math', 'u4', [

  {
    id: 'm4-ex-bond',
    use: 'teach',
    tier: 'misleading',
    setting: 'money',
    topic: 'interest paid out yearly',
    name: 'The bond that pays out',
    outcome: 'lin',
    text: 'A man buys a bond for €5,000 that pays 3% interest a year. The interest is paid out to him each year, and the €5,000 itself never changes. How much interest will he have been paid in total after 8 years?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['The interest is paid out to him each year', 'after 8 years'],
      G1: ['The interest is paid out to him each year'],
      G2: ['How much interest will he have been paid in total after 8 years?']
    },
    segments: [
      {
        text: 'A man buys a bond for €5,000 that pays 3% interest a year.',
        note: 'This is the part that has a percentage in it, and it is why the problem looks like the second kind. The words that settle it are about what happens to the interest.'
      },
      {
        text: 'The interest is paid out to him each year, and the €5,000 itself never changes.'
      },
      {
        text: 'How much interest will he have been paid in total after 8 years?',
        note: 'That is the question, and it gives a time or a target. The words that say how the amount changes each time come before it.'
      }
    ]
  },

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
    id: 'm4-la-weed-lin',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'weed growing by square metres',
    outcome: 'lin',
    text: 'A pond has 40 m² of weed. Every week another 10 m² of weed appears. After how many weeks will the weed cover 400 m²?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['howlong'] },
    cues: {
      M1: ['Every week another 10 m² of weed appears', 'After how many weeks will the weed cover 400 m²?'],
      G1: ['Every week another 10 m² of weed appears'],
      G2: ['After how many weeks will the weed cover 400 m²?']
    }
  },

  {
    id: 'm4-la-weed-logsolve',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'weed growing by a share',
    outcome: 'logsolve',
    text: 'A pond has 40 m² of weed, and the weed grows by 10% every week. After how many weeks will it cover 400 m²?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['the weed grows by 10% every week', 'After how many weeks will it cover 400 m²?'],
      G1: ['the weed grows by 10% every week'],
      G2: ['After how many weeks will it cover 400 m²?']
    }
  },

  {
    id: 'm4-la-phone-lin',
    use: 'teach',
    tier: 'clean',
    setting: 'money',
    topic: 'a phone plan rising',
    outcome: 'lin',
    text: 'A phone plan costs €20 a month, and its price goes up by €2 every month. What will it cost after 6 months?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['its price goes up by €2 every month', 'after 6 months'],
      G1: ['its price goes up by €2 every month'],
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
    text: 'A phone plan cost €20 a month. In January it went up to €22 a month, and it has stayed at €22 a month since. What will it cost after 6 months?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has stayed at €22 a month since', 'after 6 months'],
      G1: ['In January it went up to €22 a month', 'it has stayed at €22 a month since'],
      G2: ['What will it cost after 6 months?']
    }
  },

  {
    id: 'm4-la-coffee-expg',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a coffee price rising yearly',
    outcome: 'expg',
    text: 'A café sells a coffee for €3.00, and its price goes up by 8% every year. What will a coffee cost after 2 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['its price goes up by 8% every year', 'after 2 years'],
      G1: ['its price goes up by 8% every year'],
      G2: ['What will a coffee cost after 2 years?']
    }
  },

  {
    id: 'm4-la-coffee-oneoff',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a coffee price with a new rise',
    outcome: 'oneoff',
    text: 'A café sold a coffee for €3.00. In March the price went up by 8%, to €3.24, and it has stayed at €3.24 since. What will a coffee cost after 2 years?',
    route: { M1: ['growth'], G1: ['once'], G2: ['willbe'] },
    cues: {
      M1: ['it has stayed at €3.24 since', 'after 2 years'],
      G1: ['In March the price went up by 8%, to €3.24', 'it has stayed at €3.24 since'],
      G2: ['What will a coffee cost after 2 years?']
    }
  },

  {
    id: 'm4-la-club-logsolve',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a club growing to a goal',
    outcome: 'logsolve',
    text: 'A swimming club has 100 members, and the number of members grows by 20% every month. After how many months will it have 400 members?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: [
        'the number of members grows by 20% every month',
        'After how many months will it have 400 members?'
      ],
      G1: ['the number of members grows by 20% every month'],
      G2: ['After how many months will it have 400 members?']
    }
  },

  {
    id: 'm4-la-club-oneoff',
    use: 'teach',
    tier: 'clean',
    setting: 'health',
    topic: 'a club after a new pool',
    outcome: 'oneoff',
    text: 'A swimming club had 100 members. When a new pool opened in March it jumped to 160 members, and it has had 160 members ever since. After how many months will it have 400 members?',
    route: { M1: ['growth'], G1: ['once'], G2: ['howlong'] },
    cues: {
      M1: ['it has had 160 members ever since', 'After how many months will it have 400 members?'],
      G1: ['it jumped to 160 members', 'it has had 160 members ever since'],
      G2: ['After how many months will it have 400 members?']
    }
  },

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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
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
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}.'
    }
  }
]);
