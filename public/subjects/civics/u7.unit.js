// Civics, Unit Seven: the unit record. This is a FACT UNIT (lesson standard A12, kind 'F'): facts to hold, grouped under the
// idea each one serves, each asked from memory. It teaches no question of the key and no name; what it holds is every row of
// its facts cards, and nothing lists that twice. The reader is a complete beginner, so every fact follows a case and an idea in
// plain words. Cards live in u7.cards-*.js, the cases the concept cards show in u7.cases-1.js.
// It holds the offices of the government of the whole country in numbers (docs/rebuild/civics-plan.md, unit u7): the House, the
// Senate, the President and Vice President, and the federal courts. It replaces the old Unit Three chamber cards and the old
// drill n3. The vote thresholds (a majority, two-thirds) are typed once, in the key's lines, and are not retyped as rows here.
// The groups are by what each fact answers (how seats are shared out, how many, how long, how much is up, who leads, who is
// next, what it takes), and not by office, because the answers on one facts card must be of one form (V57, A12) and a number
// asked of the House is only tested if the Senate's number is among the choices.
// Text fields never retype key wording. No token is needed here but {f:row}, which prints a fact's answer.

FC.unit('civics', 'u7', {
  kind: 'F',              // C classification, F facts, P procedure
  rev: 3,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Seven',
  title: { text: 'Congress, the President and the courts in numbers' },
  subtitle: 'How big, how long and who is next: the offices of the government of the whole country, as facts to hold',
  teaches: { steps: [], outcomes: [], terms: [] },   // a fact unit teaches no step, no name and no term (A12)
  assumes: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6'],

  // THE LOOK-ALIKE LEDGER: pairs of facts that people swap, by row id (S3). Each pair is on one facts card, so a wrong choice
  // of one names the other. rule names both answers by {f:}; test is a question to put to yourself, with no name in it.
  ledger: [
    { id: 'rl-house~rl-senate', pair: ['rl-house', 'rl-senate'],
      shared: 'Both are about how a state’s seats in Congress are worked out, and both use the same words: shared out among the states.',
      rule: 'The House counts people: “{f:rl-house}”. The Senate counts states: “{f:rl-senate}”.',
      test: 'Does a state with more people get more seats, or does every state get the same number, however many people live in it?' },
    { id: 'tm-house~tm-senate', pair: ['tm-house', 'tm-senate'],
      shared: 'Both are the length of a term in one of the two chambers of Congress, and both are a small number of years.',
      rule: 'A term in the House is the short one: {f:tm-house}. A term in the Senate is the long one, three times as long: {f:tm-senate}.',
      test: 'Is it the chamber whose seats come up again soon, or the chamber whose seats come up only after a long time?' },
    { id: 'pr-age~pr-years', pair: ['pr-age', 'pr-years'],
      shared: 'Both are a number of years in the conditions for being President.',
      rule: 'The age is “{f:pr-age}”, and the residence is “{f:pr-years}”. The age is the larger number.',
      test: 'Does the number count how long the person has been alive, or how long they have lived in the country?' }
  ],

  // Parts are stopping points (A13). Each part holds two or three groups; the last also holds the drill and the close.
  parts: [
    { id: 'p1', title: 'How seats are shared out, how many there are, how long jobs last, and how much is up',
      cards: ['orient-nums',
              'con-rule', 'facts-rule', 'chk-rl-house', 'chk-rl-senate', 'chk-rl-court', 'look-rule',
              'con-size', 'facts-size', 'chk-sz-house', 'chk-sz-senate', 'chk-sz-court',
              'con-term', 'facts-term', 'chk-tm-house', 'chk-tm-senate', 'chk-tm-pres', 'chk-tm-judge', 'look-term',
              'con-up', 'facts-up', 'chk-up-house', 'chk-up-senate', 'chk-up-judge'] },
    { id: 'p2', title: 'Who leads, who is next in line, and what it takes to be President, then the drill',
      cards: ['con-lead', 'facts-lead', 'chk-ld-tax', 'chk-ld-speaker', 'chk-ld-tie',
              'con-line', 'facts-line', 'chk-ln-first', 'chk-ln-next',
              'con-pres', 'facts-pres', 'chk-pr-age', 'chk-pr-born', 'chk-pr-years', 'chk-pr-twice', 'look-pres'],
      drill: true, close: ['recap-nums'] }
  ],

  // A fact unit's drill has one stage, `fact`: every row asked from memory (A12). Items are authored in groups: each ledger pair is
  // one group, so a pair can come back together, and every other row stands alone. Every row appears exactly once (V39).
  drill: {
    key: 'n3',            // the old quick-drill totals for the old chambers drill were stored under pl:civics:stats:n3 (frozen; see E8)
    rungs: [{ ask: 'fact', items: [
      [{ fact: 'rl-house' }, { fact: 'rl-senate' }], [{ fact: 'rl-court' }],
      [{ fact: 'sz-house' }], [{ fact: 'sz-senate' }], [{ fact: 'sz-court' }],
      [{ fact: 'tm-house' }, { fact: 'tm-senate' }], [{ fact: 'tm-pres' }], [{ fact: 'tm-judge' }],
      [{ fact: 'up-house' }], [{ fact: 'up-senate' }], [{ fact: 'up-judge' }],
      [{ fact: 'ld-tax' }], [{ fact: 'ld-speaker' }], [{ fact: 'ld-tie' }],
      [{ fact: 'ln-first' }], [{ fact: 'ln-next' }],
      [{ fact: 'pr-age' }, { fact: 'pr-years' }], [{ fact: 'pr-born' }], [{ fact: 'pr-twice' }]
    ] }],
    returns: []           // a fact has no case to vary: it returns as its row, next to the fact it is swapped with (E9)
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the fact unit for the offices in numbers, replacing the old Unit Three chamber cards (the House, the Senate, both chambers, the Vice President) and the old chambers drill. Seven groups of facts under the idea each serves (what fixes the number of seats, how many seats, how long each job lasts, how much is up at one election, who leads and who settles a tie, the line to the presidency, what it takes to be President), twenty-two facts, six look-alike pairs. Every fact comes from the old material of standard0.js and nothing is added to it. Skipped, because the old material does not state them: the age a member of the House or a senator must have reached, the number of states, and who holds any office now. Not retyped, because the key holds them once: the vote thresholds. Not yet deployed.' },
      { rev: 2, date: '2026-10-05', change: 'American English: US spelling.' },
      { rev: 3, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' }
    ],
    keyChanges: [],
    wrongIdeas: [],       // no wrong idea is held here: a fact unit has no refute card (lesson standard A12, gap 6 of the civics plan)
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
