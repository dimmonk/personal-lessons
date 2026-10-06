// Civics, Unit Nine: the unit record. This is a FACT UNIT (lesson standard A12, kind 'F'): facts to hold, grouped under the idea
// each one serves, each asked from memory. It teaches no question of the key and no name; what it holds is every row of its facts
// cards, and nothing lists that twice. The reader is a complete beginner, so every fact follows a case and an idea in plain words.
// Cards live in u9.cards-*.js, the cases the concept cards show in u9.cases-1.js.
// The history is the history to the end of Reconstruction in 1877: colonies and the founding, the growth of the country and the
// slavery question, and the Civil War and Reconstruction. The unit holds only what the subject's old material states, and says
// where it skips (the terms of the compromise of 1850, any battle, the years after 1877).
// Text fields never retype key wording: they use tokens ({o:purse} {o:beyondcong} {o:protected} {f:row}).

FC.unit('civics', 'u9', {
  kind: 'F',              // C classification, F facts, P procedure
  rev: 4,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Nine',
  title: { text: 'History to the end of Reconstruction' },
  subtitle: 'The colonies and the founding, the growth of the country and the slavery question, the Civil War, and the years after it, to 1877',
  teaches: { steps: [], outcomes: [], terms: [] },   // a fact unit teaches no step, no name and no term (A12)
  assumes: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8'],

  // THE LOOK-ALIKE LEDGER: pairs of facts that people swap, by row id (S3). Each pair is on one facts card, so a wrong choice of one
  // names the other. rule names both answers by {f:}; test is a question to put to yourself, with no name in it.
  // A quick lesson (section 19) keeps only the pairs that a beginner really confuses.
  ledger: [
    { id: 'yr-written~yr-effect', pair: ['yr-written', 'yr-effect'],
      shared: 'Both are years in the life of the Constitution, and only two years apart.',
      rule: 'One is the year the Constitution was written: {f:yr-written}. The other is the year it took effect and began to govern: {f:yr-effect}.',
      test: 'Is it the year the plan was written, or the year it began to govern?' },
    { id: 'am-14~am-15', pair: ['am-14', 'am-15'],
      shared: 'Both are about the rights of freed people after the war, and they came only two years apart.',
      rule: 'One is about who is a citizen: {f:am-14}. The other is about who may vote: {f:am-15}.',
      test: 'Is it about who counts as a citizen, or about who may vote?' }
  ],

  // Parts are stopping points (A13): the colonies and the founding, the growth and the war, and Reconstruction with the drill.
  parts: [
    { id: 'p1', title: 'Why people came, the quarrel with Britain, and the founding',
      cards: ['orient-hist',
              'con-hist-came', 'facts-hist-came', 'chk-hist-came-faith', 'chk-hist-came-vote', 'chk-hist-came-living', 'chk-hist-came-flee',
              'con-hist-who', 'facts-hist-who', 'chk-hist-who-indent', 'chk-hist-who-enslaved', 'chk-hist-who-native',
              'con-hist-quarrel', 'facts-hist-quarrel', 'chk-hist-q-parl', 'chk-hist-q-repr', 'chk-hist-q-tea',
              'con-hist-chain', 'facts-hist-chain', 'chk-hist-yr-declare', 'chk-hist-yr-written', 'chk-hist-yr-effect', 'look-hist-chain-eff'] },
    { id: 'p2', title: 'How the country grew, slavery and the Civil War',
      cards: ['con-hist-growth', 'facts-hist-growth', 'chk-hist-ctry-france', 'chk-hist-ctry-britain', 'chk-hist-ctry-mexico',
              'con-hist-slavery', 'facts-hist-slavery', 'chk-hist-slv-question', 'chk-hist-slv-time', 'chk-hist-slv-citizen',
              'con-hist-war', 'facts-hist-war', 'chk-hist-w-secession', 'chk-hist-w-cause', 'chk-hist-w-emancip', 'chk-hist-w-lincoln'] },
    { id: 'p3', title: 'Reconstruction, then the drill',
      cards: ['con-hist-amend', 'facts-hist-amend', 'chk-hist-am-13', 'chk-hist-am-14', 'chk-hist-am-15', 'look-hist-amend',
              'con-hist-after', 'facts-hist-after', 'chk-hist-ry-end', 'chk-hist-aft-seg', 'chk-hist-aft-1960s'],
      drill: true, close: ['recap-hist'] }
  ],

  // A fact unit's drill has one stage, `fact`: every row asked from memory (A12). Items are authored in groups: each ledger pair is
  // one group, so a pair can come back together, and every other row stands alone. Every row appears exactly once (V39).
  drill: {
    key: 'u9',
    rungs: [{ ask: 'fact', items: [
      [{ fact: 'came-faith' }], [{ fact: 'came-vote' }], [{ fact: 'came-living' }], [{ fact: 'came-flee' }],
      [{ fact: 'who-indent' }], [{ fact: 'who-enslaved' }], [{ fact: 'who-native' }],
      [{ fact: 'q-parl' }], [{ fact: 'q-repr' }], [{ fact: 'q-tea' }],
      [{ fact: 'yr-written' }, { fact: 'yr-effect' }], [{ fact: 'yr-declare' }],
      [{ fact: 'ctry-france' }], [{ fact: 'ctry-britain' }], [{ fact: 'ctry-mexico' }],
      [{ fact: 'slv-question' }], [{ fact: 'slv-time' }], [{ fact: 'slv-citizen' }],
      [{ fact: 'w-secession' }], [{ fact: 'w-cause' }], [{ fact: 'w-emancip' }], [{ fact: 'w-lincoln' }],
      [{ fact: 'am-14' }, { fact: 'am-15' }], [{ fact: 'am-13' }],
      [{ fact: 'ry-end' }], [{ fact: 'aft-seg' }], [{ fact: 'aft-1960s' }]
    ] }],
    returns: []           // a fact has no case to vary: it returns as its row, next to the fact it is swapped with (E9)
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1, replacing the first three eras of old Unit Five (colonies and the founding, growth and the slavery question, the Civil War and Reconstruction), their worked example and the matching items of the old drill, with the old claims about states’ rights and birthright citizenship held as the right fact. Fifteen groups of facts under the idea each serves, sixty-two facts, twelve look-alike pairs. Each facts card holds answers of one kind (years, names, countries, numbers, reasons, short clauses) so that a choice cannot be guessed from its shape; the old question "Which era?" is gone, because a facts card cannot hold five rows with one answer. Every fact comes from the old material of standard0.js and nothing is added to it; the unit skips what that material does not state: the terms of the compromise of 1850, any battle or general, the causes of the war beyond what the seceding states wrote, and anything after 1877. Not yet deployed.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' }
    ],
    keyChanges: [],
    wrongIdeas: [],       // old claims 11 (states’ rights) and 16 (birthright citizenship always the rule) are rows, not refute cards: a fact unit has none (A12, P29)
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
