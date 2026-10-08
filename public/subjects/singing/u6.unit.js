// Singing, Unit Six: the unit record. This is the subject's FACT UNIT (lesson standard A12, kind 'F'): facts to hold about
// looking after the voice and practicing, grouped under the idea each one serves, each asked from memory. It teaches no
// question of the key and no name; what it holds is every row of its facts cards, and nothing lists that twice. The reader is
// a beginner who sings for fun, so every fact follows a story and an idea in plain words. Cards live in u6.cards-*.js, the
// stories the concept cards show in u6.cases-1.js. The brief is docs/rebuild/singing-plan.md ("Unit Six").
// Text fields never retype key wording: they use tokens only where a taught line is needed (a fact unit needs few).

FC.unit('singing', 'u6', {
  kind: 'F',              // C classification, F facts, P procedure
  rev: 1,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Six',
  title: { text: 'Looking after your voice' },
  subtitle: 'A warm-up, water, rest for a hoarse voice, and practice that sticks',
  teaches: { steps: [], outcomes: [], terms: [] },   // a fact unit teaches no step, no name and no term (A12)
  assumes: ['u1'],

  // THE LOOK-ALIKE LEDGER: pairs of facts that people swap, by row id (S3). Each pair is on one facts card, so a wrong choice
  // of one names the other. rule names both answers by {f:}; test is a question to put to yourself, with no name in it.
  ledger: [
    { id: 'wa-when~wa-now', pair: ['wa-when', 'wa-now'],
      shared: 'Both are about water and a dry voice, and a bottle of water feels like the answer to both.',
      rule: 'One is a habit that works over hours: {f:wa-when}. The other is for this minute: {f:wa-now}.',
      test: 'Is it for the hours before you sing, or for a dry throat right now?' },
    { id: 'ho-rest~ho-push', pair: ['ho-rest', 'ho-push'],
      shared: 'Both mean leaving a hoarse voice alone, so they feel like the same advice.',
      rule: 'One is what you give a hoarse voice: {f:ho-rest}. The other is what you refuse to do when you want to sing anyway: {f:ho-push}.',
      test: 'Is it what you give the voice, or what you will not do to it?' }
  ],

  // Parts are stopping points (A13). The first holds the warm-up and water, the two things done before you sing; the last
  // holds a hoarse or tired voice and practice, then the drill and the close (a recap, then a plan, because this subject acts).
  parts: [
    { id: 'p1', title: 'A warm-up, and water',
      cards: ['orient-care',
              'con-warmup', 'facts-warmup', 'chk-wu-time', 'chk-wu-what', 'chk-wu-later', 'chk-wu-when',
              'con-water', 'facts-water', 'chk-wa-when', 'chk-wa-dry', 'chk-wa-now', 'look-water'] },
    { id: 'p2', title: 'A hoarse or tired voice, and practice',
      cards: ['con-hoarse', 'facts-hoarse', 'chk-ho-rest', 'chk-ho-push', 'chk-ho-clear', 'chk-ho-pain', 'chk-ho-doctor', 'look-hoarse',
              'con-practice', 'facts-practice', 'chk-pr-short', 'chk-pr-one', 'chk-pr-record', 'chk-pr-slow', 'chk-pr-songs'],
      drill: true, close: ['recap-care', 'plan-care'] }
  ],

  // A fact unit's drill has one stage, `fact`: every row asked from memory (A12). Items are authored in groups: each ledger pair is
  // one group, so a pair can come back together, and every other row stands alone. Every row appears exactly once (V39).
  drill: {
    key: 'u6',
    rungs: [{ ask: 'fact', items: [
      [{ fact: 'wu-time' }], [{ fact: 'wu-what' }], [{ fact: 'wu-later' }], [{ fact: 'wu-when' }],
      [{ fact: 'wa-when' }, { fact: 'wa-now' }], [{ fact: 'wa-dry' }],
      [{ fact: 'ho-rest' }, { fact: 'ho-push' }], [{ fact: 'ho-clear' }], [{ fact: 'ho-pain' }], [{ fact: 'ho-doctor' }],
      [{ fact: 'pr-short' }], [{ fact: 'pr-one' }], [{ fact: 'pr-record' }], [{ fact: 'pr-slow' }], [{ fact: 'pr-songs' }]
    ] }],
    returns: []           // a fact has no story to vary: it returns as its row, next to the fact it is swapped with (E9)
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-08', change: 'First version under lesson standard 1: the subject’s fact unit. Four groups of facts under the idea each serves (a warm-up, water and the voice, a hoarse or tired voice, practice that sticks), seventeen facts, two look-alike pairs. Every fact comes from the plan (docs/rebuild/singing-plan.md, "Unit Six") and nothing is added to it; the sentences beside the facts say how each one fits its group. Not yet read cold.' }
    ],
    keyChanges: [],
    wrongIdeas: [],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
