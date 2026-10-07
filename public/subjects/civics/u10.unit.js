// Civics, Unit Ten: the unit record. This is a FACT UNIT (lesson standard A12, kind 'F'): facts to hold, grouped under the idea
// each one serves, each asked from memory. It teaches no question of the key and no name; what it holds is every row of its
// facts cards, and nothing lists that twice. The reader is a complete beginner, so every fact follows a case and an idea in
// plain words. Cards live in u10.cards-*.js, the cases the concept cards show in u10.cases-1.js.
// Every fact comes from the old material (standard0.js: the eras "Factories and immigration (1877 to 1914)" and "World wars,
// civil rights and today (1914 onward)", "The right to vote, widened by inches", "Places and symbols", the Unit Five drill and
// the claim about a democracy). Nothing is added to it. The years 1877 to 1900 are skipped, not filled (docs/rebuild/civics-plan.md, gap 11).
// Key wording is never typed in text fields: tokens ({t:agency} {o:execute} {o:review} {f:row}) fill it in.

FC.unit('civics', 'u10', {
  kind: 'F',              // C classification, F facts, P procedure
  rev: 5,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Ten',
  title: { text: 'History since 1877' },
  subtitle: 'The great arrivals, the Depression, the wars, civil rights, September 11, who can vote, and the flag',
  teaches: { steps: [], outcomes: [], terms: [] },   // a fact unit teaches no step, no name and no term (A12)
  assumes: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8', 'u9'],

  // THE LOOK-ALIKE LEDGER: pairs of facts that people swap, by row id (S3). Each pair is on one facts card, so a wrong choice
  // of one names the other. rule names both answers by {f:}; test is a question to put to yourself, with no name in it.
  ledger: [
    { id: 'wv-statue~wv-ellis', pair: ['wv-statue', 'wv-ellis'],
      shared: 'Both are in New York Harbor, both belong to the years when millions arrived, and their years are only six apart.',
      rule: 'One is the year of the gift from France: {f:wv-statue}. The other is the year of the federal station where arrivals were checked: {f:wv-ellis}. The statue came first.',
      test: 'Is it the year of the gift that stands in the harbor, or the year of the station where arrivals were checked?' },
    { id: 'cr-brown~cr-act', pair: ['cr-brown', 'cr-act'],
      shared: 'Both were part of the civil rights movement, and both went after segregation and discrimination.',
      rule: 'One is a ruling by a court in 1954: {f:cr-brown}. The other is a law passed by Congress in 1964: {f:cr-act}.',
      test: 'Was it a ruling by a court, or a law passed by lawmakers?' },
    { id: 'vy-race~vy-vra', pair: ['vy-race', 'vy-vra'],
      shared: 'Both are about the vote and race, so a story about one can bring the other to mind.',
      rule: 'One is when the promise was written down in the Constitution: {f:vy-race}. The other is when federal officials were put behind it: {f:vy-vra}.',
      test: 'Is it when the promise was written down, or when it was made real?' },
    { id: 'sy-stripes~sy-stars', pair: ['sy-stripes', 'sy-stars'],
      shared: 'Both are on the flag, and each is a count: 13 and 50.',
      rule: 'One counts how the country began: {f:sy-stripes}. The other counts what it is now: {f:sy-stars}.',
      test: 'Does it count how the country began, or what it is now?' }
  ],

  // Parts are stopping points (A13): the years of history to civil rights, then September 11, the vote and the symbols.
  parts: [
    { id: 'p1', title: 'Arrivals, the Depression, the Cold War and civil rights',
      cards: ['orient-since',
              'con-wave', 'facts-wave', 'chk-wv-exclusion', 'chk-wv-statue', 'chk-wv-ellis', 'look-wave',
              'con-line', 'facts-line', 'chk-tl-ww1', 'chk-tl-depression', 'chk-tl-pearl', 'chk-tl-ww2end', 'chk-tl-attack',
              'con-hard', 'facts-hard', 'chk-hd-depression', 'chk-hd-newdeal', 'chk-hd-roosevelt', 'chk-hd-security',
              'con-cold', 'facts-cold', 'chk-cw-name', 'chk-cw-rival', 'chk-cw-wars',
              'con-civil', 'facts-civil', 'chk-cr-brown', 'chk-cr-king', 'chk-cr-act', 'chk-cr-end', 'look-civil'] },
    { id: 'p2', title: 'September 11, the vote, the flag and four names, then the drill',
      cards: ['con-attack', 'facts-attack', 'chk-nn-planes', 'chk-nn-targets', 'chk-nn-dead', 'chk-nn-dept',
              'con-vote', 'facts-vote', 'chk-vy-race', 'chk-vy-sex', 'chk-vy-poll', 'chk-vy-vra', 'chk-vy-age', 'look-vote',
              'con-who', 'facts-who', 'chk-vw-founding', 'chk-vw-campaign', 'chk-vg-gap',
              'con-flag', 'facts-flag', 'chk-sy-stripes', 'chk-sy-stars', 'chk-sy-july', 'chk-st-count', 'look-flag',
              'con-names', 'facts-names', 'chk-nm-capital', 'chk-nm-anthem', 'chk-nm-parties', 'chk-nm-france'],
      drill: true, close: ['recap-since'] }
  ],

  // A fact unit's drill has one stage, `fact`: every row asked from memory (A12). Items are authored in groups: each ledger pair is
  // one group, so a pair can come back together, and every other row stands alone. Every row appears exactly once (V39).
  drill: {
    key: 'u10',
    rungs: [{ ask: 'fact', items: [
      [{ fact: 'wv-statue' }, { fact: 'wv-ellis' }], [{ fact: 'wv-exclusion' }],
      [{ fact: 'tl-ww1' }], [{ fact: 'tl-depression' }], [{ fact: 'tl-pearl' }], [{ fact: 'tl-ww2end' }], [{ fact: 'tl-attack' }],
      [{ fact: 'hd-depression' }], [{ fact: 'hd-newdeal' }], [{ fact: 'hd-roosevelt' }], [{ fact: 'hd-security' }],
      [{ fact: 'cw-name' }], [{ fact: 'cw-rival' }], [{ fact: 'cw-wars' }],
      [{ fact: 'cr-brown' }, { fact: 'cr-act' }], [{ fact: 'cr-king' }], [{ fact: 'cr-end' }],
      [{ fact: 'nn-planes' }], [{ fact: 'nn-targets' }], [{ fact: 'nn-dead' }], [{ fact: 'nn-dept' }],
      [{ fact: 'vy-race' }, { fact: 'vy-vra' }], [{ fact: 'vy-sex' }], [{ fact: 'vy-poll' }], [{ fact: 'vy-age' }],
      [{ fact: 'vw-founding' }], [{ fact: 'vw-campaign' }], [{ fact: 'vg-gap' }],
      [{ fact: 'sy-stripes' }, { fact: 'sy-stars' }], [{ fact: 'sy-july' }], [{ fact: 'st-count' }],
      [{ fact: 'nm-capital' }], [{ fact: 'nm-anthem' }], [{ fact: 'nm-parties' }], [{ fact: 'nm-france' }]
    ] }],
    returns: []           // a fact has no case to vary: it returns as its row, next to the fact it is swapped with (E9)
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the fact unit for history since 1877, replacing the old Unit Five cards on its last two eras ("Factories and immigration (1877 to 1914)" and "World wars, civil rights and today (1914 onward)"), "The right to vote, widened by inches", "Places and symbols", the drill items of those eras (n5), and old claim 6 (always a democracy), which is held as rows. Fourteen groups of facts under the idea each serves, sixty-one facts, nine look-alike pairs. Every fact comes from the old data and none is added. The years 1877 to 1900 are skipped: the unit holds three dates from them (1882, 1886, 1892) and says so. The old "which era" question is gone: a facts card cannot hold five rows with one answer (V57), so each era became groups of facts, each asked one way. Not yet deployed.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    keyChanges: [],
    wrongIdeas: [],       // old claim 6 becomes the founding-voters row and the years and gap rows; a fact unit has no refute card (A12, gap 6 of the civics plan)
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
