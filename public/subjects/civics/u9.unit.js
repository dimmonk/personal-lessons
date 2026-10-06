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
  rev: 3,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Nine',
  title: { text: 'History to the end of Reconstruction' },
  subtitle: 'The colonies and the founding, the growth of the country and the slavery question, the Civil War, and the years after it, to 1877',
  teaches: { steps: [], outcomes: [], terms: [] },   // a fact unit teaches no step, no name and no term (A12)
  assumes: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8'],

  // THE LOOK-ALIKE LEDGER: pairs of facts that people swap, by row id (S3). Each pair is on one facts card, so a wrong choice of one
  // names the other. rule names both answers by {f:}; test is a question to put to yourself, with no name in it.
  ledger: [
    { id: 'came-faith~came-flee', pair: ['came-faith', 'came-flee'],
      shared: 'Both can be true of the same person: someone who was harmed at home for their beliefs may also have wanted to follow their own religion.',
      rule: 'One is something people came to have: {f:came-faith}. The other is something people came to get away from: {f:came-flee}.',
      test: 'Is it what the person hoped to have, or what they hoped to leave behind?' },
    { id: 'who-indent~who-enslaved', pair: ['who-indent', 'who-enslaved'],
      shared: 'Both worked for someone else without being free to stop and leave at once, and both belong to the story of people who did not come to the colonies freely.',
      rule: 'One worked for a set number of years to pay off the cost of the passage: {f:who-indent}. The other was brought by force, many from 1619, and held as the property of other people: {f:who-enslaved}.',
      test: 'Did the person work a set number of years to pay for the journey, or were they brought by force and held as someone’s property?' },
    { id: 'q-consent~q-repr', pair: ['q-consent', 'q-repr'],
      shared: 'Both are about what the colonists said was missing when Parliament taxed them, and they sound almost like one idea.',
      rule: 'One is the agreement of the people who are taxed: {f:q-consent}. The other is having someone you elected in the body that taxes you: {f:q-repr}. The short form of the colonists’ complaint names the second, and the quarrel was about the first.',
      test: 'Is it the agreement of the people who are taxed, or the place in the body that taxes them that someone they elected would hold?' },
    { id: 'yr-declare~yr-written', pair: ['yr-declare', 'yr-written'],
      shared: 'Both are famous years of the founding, and each belongs to one of the two best-known founding documents.',
      rule: 'One is the year the colonies announced the break with Britain: {f:yr-declare}. The other is the year the new plan of government was written: {f:yr-written}.',
      test: 'Is it the year of the announced break, or the year the plan of government was written?' },
    { id: 'yr-written~yr-effect', pair: ['yr-written', 'yr-effect'],
      shared: 'Both are years in the life of the Constitution, and only two years apart.',
      rule: 'One is the year the Constitution was written: {f:yr-written}. The other is the year it took effect and began to govern: {f:yr-effect}.',
      test: 'Is it the year the plan was written, or the year it began to govern?' },
    { id: 'wash-man~wash-city', pair: ['wash-man', 'wash-city'],
      shared: 'Both are called Washington, and both are in the story of the founding.',
      rule: 'One is a person who led: {f:wash-man}. The other is the city where the government sits: {f:wash-city}.',
      test: 'Is it a person who led, or a place where the government sits?' },
    { id: 'yg-comp1~yg-comp2', pair: ['yg-comp1', 'yg-comp2'],
      shared: 'Both are years of a compromise made in Congress over slavery in new states, thirty years apart.',
      rule: 'One is the year of the first compromise, which admitted Missouri as a slave state and Maine as a free one: {f:yg-comp1}. The other is the year of the second compromise, thirty years after it: {f:yg-comp2}.',
      test: 'Is it the first compromise, or the second one, thirty years later?' },
    { id: 'slv-citizen~slv-terr', pair: ['slv-citizen', 'slv-terr'],
      shared: 'Both are rulings from the Dred Scott decision of 1857, and both are about slavery.',
      rule: 'One ruling was about Black people: “{f:slv-citizen}”. The other was about Congress and the territories: “{f:slv-terr}”.',
      test: 'Is the ruling about a group of people and whether they could be citizens, or about what Congress had the power to do?' },
    { id: 'w-emancip~w-gettys', pair: ['w-emancip', 'w-gettys'],
      shared: 'Both come from 1863, in the middle of the war.',
      rule: 'One declared people free: {f:w-emancip}. The other described what the war was a test of: {f:w-gettys}.',
      test: 'Did it declare people free, or say what the war was testing?' },
    { id: 'yw-start~yw-end', pair: ['yw-start', 'yw-end'],
      shared: 'Both are years that mark an edge of the Civil War, four years apart.',
      rule: 'One is the year the fighting began: {f:yw-start}. The other is the year it ended with the Union’s win: {f:yw-end}.',
      test: 'Is it the year the fighting began, or the year it ended?' },
    { id: 'am-14~am-15', pair: ['am-14', 'am-15'],
      shared: 'Both are about the rights of freed people after the war, and they came only two years apart.',
      rule: 'One is about who is a citizen: {f:am-14}. The other is about who may vote: {f:am-15}.',
      test: 'Is it about who counts as a citizen, or about who may vote?' },
    { id: 'aft-seg~aft-poll', pair: ['aft-seg', 'aft-poll'],
      shared: 'Both were used against Black citizens after Reconstruction, for most of the next century.',
      rule: 'One kept Black and white people apart in schools, transport and public places: {f:aft-seg}. The other was a fee that a person had to pay in order to vote: {f:aft-poll}.',
      test: 'Is it about keeping people apart in daily life, or about a fee for voting?' }
  ],

  // Parts are stopping points (A13). The first parts follow the order of the history: the colonies, the founding, the growth, the
  // question of slavery, the war, and Reconstruction. The last holds the drill and the close.
  parts: [
    { id: 'p1', title: 'Why people came, who else was there, and the quarrel with Britain',
      cards: ['orient-hist',
              'con-hist-came', 'facts-hist-came', 'chk-hist-came-faith', 'chk-hist-came-vote', 'chk-hist-came-living', 'chk-hist-came-flee', 'look-hist-came',
              'con-hist-who', 'facts-hist-who', 'chk-hist-who-indent', 'chk-hist-who-enslaved', 'chk-hist-who-native', 'look-hist-who',
              'con-hist-quarrel', 'facts-hist-quarrel', 'chk-hist-q-parl', 'chk-hist-q-consent', 'chk-hist-q-repr', 'chk-hist-q-tea', 'look-hist-quarrel'] },
    { id: 'p2', title: 'The founding in order',
      cards: ['con-hist-chain', 'facts-hist-chain', 'chk-hist-yr-slavery', 'chk-hist-yr-tea', 'chk-hist-yr-declare', 'chk-hist-yr-warend',
              'chk-hist-yr-written', 'chk-hist-yr-effect', 'chk-hist-yr-rights', 'chk-hist-yr-capital', 'look-hist-chain-doc', 'look-hist-chain-eff',
              'con-hist-wash', 'facts-hist-wash', 'chk-hist-wash-man', 'chk-hist-wash-city', 'chk-hist-wash-title', 'look-hist-wash'] },
    { id: 'p3', title: 'How the country grew',
      cards: ['con-hist-countries', 'facts-hist-countries', 'chk-hist-ctry-france', 'chk-hist-ctry-britain', 'chk-hist-ctry-mexico',
              'con-hist-growth', 'facts-hist-growth', 'chk-hist-grow-size', 'chk-hist-grow-anthem', 'chk-hist-grow-calif', 'chk-hist-grow-means', 'chk-hist-grow-trail',
              'con-hist-years', 'facts-hist-years', 'chk-hist-yg-purchase', 'chk-hist-yg-comp1', 'chk-hist-yg-mexico', 'chk-hist-yg-comp2', 'chk-hist-yg-dred', 'look-hist-years'] },
    { id: 'p4', title: 'The question of slavery',
      cards: ['con-hist-slavery', 'facts-hist-slavery', 'chk-hist-slv-question', 'chk-hist-slv-time', 'chk-hist-slv-citizen', 'chk-hist-slv-terr', 'chk-hist-slv-undone', 'look-hist-slavery'] },
    { id: 'p5', title: 'The Civil War',
      cards: ['con-hist-war', 'facts-hist-war', 'chk-hist-w-secession', 'chk-hist-w-lincoln', 'chk-hist-w-emancip', 'chk-hist-w-gettys', 'chk-hist-w-cause', 'look-hist-war',
              'con-hist-wyears', 'facts-hist-wyears', 'chk-hist-yw-elect', 'chk-hist-yw-start', 'chk-hist-yw-emancip', 'chk-hist-yw-end', 'look-hist-wyears',
              'con-hist-count', 'facts-hist-count', 'chk-hist-n-states', 'chk-hist-n-dead', 'chk-hist-n-amend'] },
    { id: 'p6', title: 'Reconstruction, then the drill',
      cards: ['con-hist-amend', 'facts-hist-amend', 'chk-hist-am-13', 'chk-hist-am-14', 'chk-hist-am-15', 'look-hist-amend',
              'con-hist-ryears', 'facts-hist-ryears', 'chk-hist-ry-13', 'chk-hist-ry-14', 'chk-hist-ry-15', 'chk-hist-ry-end',
              'con-hist-after', 'facts-hist-after', 'chk-hist-aft-seg', 'chk-hist-aft-poll', 'chk-hist-aft-1960s', 'look-hist-after'],
      drill: true, close: ['recap-hist'] }
  ],

  // A fact unit's drill has one stage, `fact`: every row asked from memory (A12). Items are authored in groups: each ledger pair is
  // one group, so a pair can come back together, and every other row stands alone. Every row appears exactly once (V39).
  drill: {
    key: 'u9',
    rungs: [{ ask: 'fact', items: [
      [{ fact: 'came-faith' }, { fact: 'came-flee' }], [{ fact: 'came-vote' }], [{ fact: 'came-living' }],
      [{ fact: 'who-indent' }, { fact: 'who-enslaved' }], [{ fact: 'who-native' }],
      [{ fact: 'q-consent' }, { fact: 'q-repr' }], [{ fact: 'q-parl' }], [{ fact: 'q-tea' }],
      [{ fact: 'yr-declare' }, { fact: 'yr-written' }, { fact: 'yr-effect' }], [{ fact: 'yr-slavery' }], [{ fact: 'yr-tea' }], [{ fact: 'yr-warend' }], [{ fact: 'yr-rights' }], [{ fact: 'yr-capital' }],
      [{ fact: 'wash-man' }, { fact: 'wash-city' }], [{ fact: 'wash-title' }],
      [{ fact: 'ctry-france' }], [{ fact: 'ctry-britain' }], [{ fact: 'ctry-mexico' }],
      [{ fact: 'grow-size' }], [{ fact: 'grow-anthem' }], [{ fact: 'grow-calif' }], [{ fact: 'grow-means' }], [{ fact: 'grow-trail' }],
      [{ fact: 'yg-comp1' }, { fact: 'yg-comp2' }], [{ fact: 'yg-purchase' }], [{ fact: 'yg-mexico' }], [{ fact: 'yg-dred' }],
      [{ fact: 'slv-citizen' }, { fact: 'slv-terr' }], [{ fact: 'slv-question' }], [{ fact: 'slv-time' }], [{ fact: 'slv-undone' }],
      [{ fact: 'w-emancip' }, { fact: 'w-gettys' }], [{ fact: 'w-secession' }], [{ fact: 'w-lincoln' }], [{ fact: 'w-cause' }],
      [{ fact: 'yw-start' }, { fact: 'yw-end' }], [{ fact: 'yw-elect' }], [{ fact: 'yw-emancip' }],
      [{ fact: 'n-states' }], [{ fact: 'n-dead' }], [{ fact: 'n-amend' }],
      [{ fact: 'am-14' }, { fact: 'am-15' }], [{ fact: 'am-13' }],
      [{ fact: 'ry-13' }], [{ fact: 'ry-14' }], [{ fact: 'ry-15' }], [{ fact: 'ry-end' }],
      [{ fact: 'aft-seg' }, { fact: 'aft-poll' }], [{ fact: 'aft-1960s' }]
    ] }],
    returns: []           // a fact has no case to vary: it returns as its row, next to the fact it is swapped with (E9)
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1, replacing the first three eras of old Unit Five (colonies and the founding, growth and the slavery question, the Civil War and Reconstruction), their worked example and the matching items of the old drill, with the old claims about states’ rights and birthright citizenship held as the right fact. Fifteen groups of facts under the idea each serves, sixty-two facts, twelve look-alike pairs. Each facts card holds answers of one kind (years, names, countries, numbers, reasons, short clauses) so that a choice cannot be guessed from its shape; the old question "Which era?" is gone, because a facts card cannot hold five rows with one answer. Every fact comes from the old material of standard0.js and nothing is added to it; the unit skips what that material does not state: the terms of the compromise of 1850, any battle or general, the causes of the war beyond what the seceding states wrote, and anything after 1877. Not yet deployed.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US spelling.' }
    ],
    keyChanges: [],
    wrongIdeas: [],       // old claims 11 (states’ rights) and 16 (birthright citizenship always the rule) are rows, not refute cards: a fact unit has none (A12, P29)
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
