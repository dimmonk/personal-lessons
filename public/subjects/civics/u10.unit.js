// Civics, Unit Ten: the unit record. This is a FACT UNIT (lesson standard A12, kind 'F'): facts to hold, grouped under the idea
// each one serves, each asked from memory. It teaches no question of the key and no name; what it holds is every row of its
// facts cards, and nothing lists that twice. The reader is a complete beginner, so every fact follows a case and an idea in
// plain words. Cards live in u10.cards-*.js, the cases the concept cards show in u10.cases-1.js.
// Every fact comes from the old material (standard0.js: the eras "Factories and immigration (1877 to 1914)" and "World wars,
// civil rights and today (1914 onward)", "The right to vote, widened by inches", "Places and symbols", the Unit Five drill and
// the claim about a democracy). Nothing is added to it. The years 1877 to 1900 are skipped, not filled (docs/rebuild/civics-plan.md, gap 11).
// Key wording is never typed in text fields: tokens ({t:agency} {o:execute} {o:review} {o:preempted} {f:row}) fill it in.

FC.unit('civics', 'u10', {
  kind: 'F',              // C classification, F facts, P procedure
  rev: 1,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Ten',
  title: { text: 'History since 1877' },
  subtitle: 'From the factories and the great arrivals to September 11, the widening of the right to vote, and the symbols of the country',
  teaches: { steps: [], outcomes: [], terms: [] },   // a fact unit teaches no step, no name and no term (A12)
  assumes: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8', 'u9'],

  // THE LOOK-ALIKE LEDGER: pairs of facts that people swap, by row id (S3). Each pair is on one facts card, so a wrong choice
  // of one names the other. rule names both answers by {f:}; test is a question to put to yourself, with no name in it.
  ledger: [
    { id: 'wv-statue~wv-ellis', pair: ['wv-statue', 'wv-ellis'],
      shared: 'Both stand in New York Harbor, both belong to the years when millions arrived, and their years are only six apart.',
      rule: 'One is the year of the gift from France: {f:wv-statue}. The other is the year of the federal station where arrivals were examined: {f:wv-ellis}. The statue came first.',
      test: 'Is it the year of the gift that stands in the harbour, or the year of the station where the arrivals were examined?' },
    { id: 'do-court~do-congress', pair: ['do-court', 'do-congress'],
      shared: 'Both belong to the government of the whole country, and both acted on who may come in.',
      rule: 'One is the body that struck down a state’s own conditions: {f:do-court}. The other is the body that passed a law for the whole country: {f:do-congress}.',
      test: 'Did this body decide whether a state’s law was allowed, or did it write a law that applies in every state?' },
    { id: 'lw-sixteenth~lw-seventeenth', pair: ['lw-sixteenth', 'lw-seventeenth'],
      shared: 'Both are amendments from 1913, so the year cannot tell them apart.',
      rule: 'One is about money: {f:lw-sixteenth}. The other is about the people who sit in the Senate: {f:lw-seventeenth}.',
      test: 'Is it about a tax, or about how senators are chosen?' },
    { id: 'tl-ww1~tl-pearl', pair: ['tl-ww1', 'tl-pearl'],
      shared: 'Both are years in which the United States entered a world war.',
      rule: 'One is the year of the First World War: {f:tl-ww1}. The other is the year of the attack that brought the country into the Second: {f:tl-pearl}.',
      test: 'Is it the first of the two world wars, or the attack that brought the country into the second?' },
    { id: 'hd-depression~hd-newdeal', pair: ['hd-depression', 'hd-newdeal'],
      shared: 'Both are names for the same years, and each comes to mind when the other is asked.',
      rule: 'One is the long trouble of failed banks and lost jobs: {f:hd-depression}. The other is the President’s answer to it: {f:hd-newdeal}.',
      test: 'Is it the trouble itself, or what was done about it?' },
    { id: 'cr-brown~cr-act', pair: ['cr-brown', 'cr-act'],
      shared: 'Both are landmarks of the civil rights movement, and both were aimed at segregation and discrimination.',
      rule: 'One is a ruling by a court in 1954: {f:cr-brown}. The other is a law passed by Congress in 1964: {f:cr-act}.',
      test: 'Was it a ruling by a court, or a law passed by lawmakers?' },
    { id: 'vy-race~vy-vra', pair: ['vy-race', 'vy-vra'],
      shared: 'Both are about the vote and race, so a story that mentions one can bring the other to mind.',
      rule: 'One is when the promise was written down in the Constitution: {f:vy-race}. The other is when federal officials were put behind it: {f:vy-vra}.',
      test: 'Is it when the promise was written down, or when it was made real?' },
    { id: 'vw-congress~vw-examiners', pair: ['vw-congress', 'vw-examiners'],
      shared: 'Both belong to the government of the whole country, and both are part of the story of the Voting Rights Act.',
      rule: 'One is the body that passed the Act: {f:vw-congress}. The other is who then registered the voters: {f:vw-examiners}.',
      test: 'Did they write the law, or did they put it into practice by registering voters?' },
    { id: 'sy-stripes~sy-stars', pair: ['sy-stripes', 'sy-stars'],
      shared: 'Both are on the flag, and both stand for a count: 13 and 50.',
      rule: 'One counts how the country began: {f:sy-stripes}. The other counts what it is made of now: {f:sy-stars}.',
      test: 'Does it count how the country began, or what it is made of now?' }
  ],

  // Parts are stopping points (A13). They follow the order of the years, then the vote, then the symbols; the last holds the
  // symbols, the drill and the close.
  parts: [
    { id: 'p1', title: 'The factory years and the great arrivals',
      cards: ['orient-since',
              'con-wave', 'facts-wave', 'chk-wv-exclusion', 'chk-wv-statue', 'chk-wv-ellis', 'chk-wv-closed', 'look-wave',
              'con-door', 'facts-door', 'chk-do-state', 'chk-do-court', 'chk-do-congress', 'chk-do-station', 'look-door'] },
    { id: 'p2', title: 'Changes to the rules, and a line of landmarks',
      cards: ['con-laws', 'facts-laws', 'chk-lw-sixteenth', 'chk-lw-seventeenth', 'chk-lw-exclusion', 'chk-lw-reform', 'look-laws',
              'con-line', 'facts-line', 'chk-tl-ww1', 'chk-tl-depression', 'chk-tl-pearl', 'chk-tl-ww2end', 'chk-tl-coldstart', 'chk-tl-coldend', 'chk-tl-attack', 'look-line'] },
    { id: 'p3', title: 'Hard times, a long standoff and civil rights',
      cards: ['con-hard', 'facts-hard', 'chk-hd-depression', 'chk-hd-newdeal', 'chk-hd-roosevelt', 'chk-hd-security', 'look-hard',
              'con-cold', 'facts-cold', 'chk-cw-name', 'chk-cw-rival', 'chk-cw-wars', 'chk-cw-policy',
              'con-civil', 'facts-civil', 'chk-cr-brown', 'chk-cr-king', 'chk-cr-act', 'chk-cr-selma', 'chk-cr-end', 'look-civil'] },
    { id: 'p4', title: 'September 11, and the right to vote in years',
      cards: ['con-attack', 'facts-attack', 'chk-nn-planes', 'chk-nn-targets', 'chk-nn-dead', 'chk-nn-dept', 'chk-nn-immig',
              'con-vote', 'facts-vote', 'chk-vy-race', 'chk-vy-sex', 'chk-vy-poll', 'chk-vy-vra', 'chk-vy-age', 'look-vote'] },
    { id: 'p5', title: 'Who won the vote, and how long it took',
      cards: ['con-who', 'facts-who', 'chk-vw-founding', 'chk-vw-campaign', 'chk-vw-congress', 'chk-vw-examiners', 'look-who',
              'con-gap', 'facts-gap', 'chk-vg-gap', 'chk-vg-start', 'chk-vg-age'] },
    { id: 'p6', title: 'Symbols, names and places, then the drill',
      cards: ['con-flag', 'facts-flag', 'chk-sy-stripes', 'chk-sy-stars', 'chk-sy-july', 'chk-sy-statue', 'look-flag',
              'con-names', 'facts-names', 'chk-nm-capital', 'chk-nm-anthem', 'chk-nm-parties', 'chk-nm-france', 'chk-nm-harbor',
              'con-states', 'facts-states', 'chk-st-count', 'chk-st-def', 'chk-st-rights'],
      drill: true, close: ['recap-since'] }
  ],

  // A fact unit's drill has one stage, `fact`: every row asked from memory (A12). Items are authored in groups: each ledger pair is
  // one group, so a pair can come back together, and every other row stands alone. Every row appears exactly once (V39).
  drill: {
    key: 'u10',
    rungs: [{ ask: 'fact', items: [
      [{ fact: 'wv-statue' }, { fact: 'wv-ellis' }], [{ fact: 'wv-exclusion' }], [{ fact: 'wv-closed' }],
      [{ fact: 'do-court' }, { fact: 'do-congress' }], [{ fact: 'do-state' }], [{ fact: 'do-station' }],
      [{ fact: 'lw-sixteenth' }, { fact: 'lw-seventeenth' }], [{ fact: 'lw-exclusion' }], [{ fact: 'lw-reform' }],
      [{ fact: 'tl-ww1' }, { fact: 'tl-pearl' }], [{ fact: 'tl-depression' }], [{ fact: 'tl-ww2end' }], [{ fact: 'tl-coldstart' }], [{ fact: 'tl-coldend' }], [{ fact: 'tl-attack' }],
      [{ fact: 'hd-depression' }, { fact: 'hd-newdeal' }], [{ fact: 'hd-roosevelt' }], [{ fact: 'hd-security' }],
      [{ fact: 'cw-name' }], [{ fact: 'cw-rival' }], [{ fact: 'cw-wars' }], [{ fact: 'cw-policy' }],
      [{ fact: 'cr-brown' }, { fact: 'cr-act' }], [{ fact: 'cr-king' }], [{ fact: 'cr-selma' }], [{ fact: 'cr-end' }],
      [{ fact: 'nn-planes' }], [{ fact: 'nn-targets' }], [{ fact: 'nn-dead' }], [{ fact: 'nn-dept' }], [{ fact: 'nn-immig' }],
      [{ fact: 'vy-race' }, { fact: 'vy-vra' }], [{ fact: 'vy-sex' }], [{ fact: 'vy-poll' }], [{ fact: 'vy-age' }],
      [{ fact: 'vw-congress' }, { fact: 'vw-examiners' }], [{ fact: 'vw-founding' }], [{ fact: 'vw-campaign' }],
      [{ fact: 'vg-gap' }], [{ fact: 'vg-start' }], [{ fact: 'vg-age' }],
      [{ fact: 'sy-stripes' }, { fact: 'sy-stars' }], [{ fact: 'sy-july' }], [{ fact: 'sy-statue' }],
      [{ fact: 'nm-capital' }], [{ fact: 'nm-anthem' }], [{ fact: 'nm-parties' }], [{ fact: 'nm-france' }], [{ fact: 'nm-harbor' }],
      [{ fact: 'st-count' }], [{ fact: 'st-def' }], [{ fact: 'st-rights' }]
    ] }],
    returns: []           // a fact has no case to vary: it returns as its row, next to the fact it is swapped with (E9)
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the fact unit for history since 1877, replacing the old Unit Five cards on its last two eras ("Factories and immigration (1877 to 1914)" and "World wars, civil rights and today (1914 onward)"), "The right to vote, widened by inches", "Places and symbols", the drill items of those eras (n5), and old claim 6 (always a democracy), which is held as rows. Fourteen groups of facts under the idea each serves, sixty-one facts, nine look-alike pairs. Every fact comes from the old data and none is added. The years 1877 to 1900 are skipped: the unit holds three dates from them (1882, 1886, 1892) and says so. The old "which era" question is gone: a facts card cannot hold five rows with one answer (V57), so each era became groups of facts, each asked one way. Not yet deployed.' }
    ],
    keyChanges: [],
    wrongIdeas: [],       // old claim 6 becomes the founding-voters row and the years and gap rows; a fact unit has no refute card (A12, gap 6 of the civics plan)
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
