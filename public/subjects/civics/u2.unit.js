// Civics, Unit Two: the unit record. This is a FACT UNIT (lesson standard A12, kind 'F'): facts to hold, grouped under the
// idea each one serves, each asked from memory. It teaches no question of the key and no name; what it holds is every row of
// its facts cards, and nothing lists that twice. The reader is a complete beginner, so every group opens with a case, then
// the idea in plain words, then the facts. Cards live in u2.cards-*.js, the cases the concept cards show in u2.cases-1.js.
// Everything asserted here comes from the old Unit Two of standard0.js (the founding documents) and from the Fourteenth
// Amendment lines of the old Unit One. Nothing is added to it. Where the old material has a hole the unit says it skips it
// (the other four of the first ten amendments, the later amendments it never describes, the last four articles).
// Factual correction carried here (docs/rebuild/civics-plan.md): the Bill of Rights is the first ten amendments and part of
// the Constitution. No row offers the two as rival answers.
// Text fields never retype key wording; they use tokens ({f:row} for a fact's answer, {plain:congress} and its kind for the
// four kinds of decision-maker that Unit One taught).

FC.unit('civics', 'u2', {
  kind: 'F',              // C classification, F facts, P procedure
  rev: 2,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Two',
  title: { text: 'The Constitution and its amendments' },
  subtitle: 'The founding documents, what the Constitution lets Congress do, the Bill of Rights, and the amendments that came after',
  teaches: { steps: [], outcomes: [], terms: [] },   // a fact unit teaches no step, no name and no term (A12)
  assumes: ['u1'],

  // THE LOOK-ALIKE LEDGER: pairs of facts that people swap, by row id (S3). Each pair is on one facts card, so a wrong choice
  // of one names the other. rule names both answers by {f:}; test is a question to put to yourself, with no name in it.
  ledger: [
    { id: 'date-convention~date-start', pair: ['date-convention', 'date-start'],
      shared: 'Both are years in the life of the Constitution, and they are only two years apart, so they are easy to swap.',
      rule: 'One is the year the delegates wrote it: {f:date-convention}. The other is the year the government under it began: {f:date-start}.',
      test: 'Is it the year the document was written, or the year the government under it began?' },
    { id: 'law-decl~law-fed', pair: ['law-decl', 'law-fed'],
      shared: 'Both come from the years of the founding, both are quoted as if the founders had settled a question, and neither is law.',
      rule: 'The answer for the Declaration is {f:law-decl}. The answer for the Federalist Papers is {f:law-fed}. What separates them is the job each was written to do: one explains a break with Britain, the other argues for a plan of government.',
      test: 'Was it written to explain why the colonies were leaving Britain, or to persuade people to approve the Constitution?' },
    { id: 'pow-money~pow-coin', pair: ['pow-money', 'pow-coin'],
      shared: 'Both are about money, and Congress has power over both.',
      rule: 'One is about the money the government itself spends: {f:pow-money}. The other is about the money people use every day, and the mail: {f:pow-coin}.',
      test: 'Is it about how the government gets the money it spends, or about the coins people use and the post offices?' },
    { id: 'six-fifth~six-sixth', pair: ['six-fifth', 'six-sixth'],
      shared: 'Both protect a person who is questioned or put on trial for a crime, and both come up when a story has an arrest or a court in it.',
      rule: 'One is about what you cannot be forced to say, and about fair steps and one trial only: {f:six-fifth}. The other is about what you are entitled to have at your trial: {f:six-sixth}.',
      test: 'Is it about what a person cannot be made to do or say, or about what a person on trial is entitled to have?' },
    { id: 'six-fourth~six-fifth', pair: ['six-fourth', 'six-fifth'],
      shared: 'Both limit what the police and the courts may do to you, and both can come up in one story about an arrest.',
      rule: 'One is about someone searching you or your things: {f:six-fourth}. The other is about what you can be made to say, and about punishment without fair steps: {f:six-fifth}.',
      test: 'Is it about someone searching you or taking your things, or about what you can be made to say and how you can be punished?' },
    { id: 'chg-propose~chg-approve', pair: ['chg-propose', 'chg-approve'],
      shared: 'Both are shares of a group that must say yes before the Constitution can be changed, and both are fractions, so they are easy to swap.',
      rule: 'One is the share of both chambers of Congress that must propose the change: {f:chg-propose}. The other is the share of the states that must approve it: {f:chg-approve}.',
      test: 'Is it asking about the vote in Congress, or about the approval of the states that follows?' },
    { id: 'fth-process~fth-equal', pair: ['fth-process', 'fth-equal'],
      shared: 'Both are limits that the Fourteenth Amendment puts on a state, and both are everyday-sounding words with a special meaning.',
      rule: 'One is about the steps a state must follow before it takes something away: {f:fth-process}. The other is about treating people in the same situation in the same way: {f:fth-equal}.',
      test: 'Is it about the steps a state must follow before it takes something from a person, or about treating people in the same situation alike?' },
    { id: 'vote-race~vote-sex', pair: ['vote-race', 'vote-sex'],
      shared: 'Both are amendments that say the right to vote cannot be denied because of who you are, and both widened who could vote.',
      rule: 'One is about race: {f:vote-race}. The other is about sex: {f:vote-sex}.',
      test: 'Is it about race, or about sex?' }
  ],

  // Parts are stopping points (A13). They follow the order of the ideas: the first plan and the dates, the three documents,
  // what the original text built, the Bill of Rights, then the changes made to it. The last part holds the drill and the close.
  parts: [
    { id: 'p1', title: 'The first plan, and the five dates',
      cards: ['orient-const',
              'con-fail', 'facts-fail', 'chk-fail-money', 'chk-fail-trade', 'chk-fail-head', 'chk-fail-courts', 'chk-fail-change',
              'con-date', 'facts-date', 'chk-date-decl', 'chk-date-articles', 'chk-date-convention', 'chk-date-start', 'chk-date-bor', 'look-date'] },
    { id: 'p2', title: 'Three documents: who wrote each, and what each is for',
      cards: ['con-wrote', 'facts-wrote', 'chk-wrote-decl', 'chk-wrote-const', 'chk-wrote-fed', 'chk-wrote-pen',
              'con-law', 'facts-law', 'chk-law-decl', 'chk-law-const', 'chk-law-fed', 'look-law',
              'con-decl', 'facts-decl', 'chk-decl-reasons', 'chk-decl-rights', 'chk-decl-consent'] },
    { id: 'p3', title: 'What the Constitution built, and what it lets Congress do',
      cards: ['con-art', 'facts-art', 'chk-art-one', 'chk-art-two', 'chk-art-three',
              'con-pow', 'facts-pow', 'chk-pow-money', 'chk-pow-trade', 'chk-pow-citizen', 'chk-pow-coin', 'chk-pow-war', 'chk-pow-courts', 'chk-pow-proper', 'look-pow'] },
    { id: 'p4', title: 'The Bill of Rights',
      cards: ['con-bor', 'facts-bor', 'chk-bor-what', 'chk-bor-why', 'chk-bor-limit',
              'con-six', 'facts-six', 'chk-six-first', 'chk-six-fourth', 'chk-six-fifth', 'chk-six-sixth', 'chk-six-eighth', 'chk-six-tenth', 'look-six-fifth-sixth', 'look-six-fourth-fifth'] },
    { id: 'p5', title: 'Changing the Constitution, the later amendments, then the drill',
      cards: ['con-chg', 'facts-chg', 'chk-chg-propose', 'chk-chg-approve', 'chk-chg-total', 'chk-chg-ten', 'chk-chg-later', 'look-chg',
              'con-fth', 'facts-fth', 'chk-fth-citizen', 'chk-fth-process', 'chk-fth-equal', 'chk-fth-states', 'look-fth',
              'con-vote', 'facts-vote', 'chk-vote-slavery', 'chk-vote-race', 'chk-vote-sex', 'chk-vote-poll', 'chk-vote-age', 'look-vote'],
      drill: true, close: ['recap-const'] }
  ],

  // A fact unit's drill has one stage, `fact`: every row asked from memory (A12). Items are authored in groups: each ledger pair
  // is one group, so that the pair can come back together, and every other row stands alone. Every row appears exactly once (V39).
  drill: {
    key: 'u2',            // new in standard 1: the old Unit Two quick drill (n2, "Which document is it?") is gone with the old unit
    rungs: [{ ask: 'fact', items: [
      [{ fact: 'fail-money' }], [{ fact: 'fail-trade' }], [{ fact: 'fail-head' }], [{ fact: 'fail-courts' }], [{ fact: 'fail-change' }],
      [{ fact: 'date-decl' }], [{ fact: 'date-articles' }], [{ fact: 'date-convention' }, { fact: 'date-start' }], [{ fact: 'date-bor' }],
      [{ fact: 'wrote-decl' }], [{ fact: 'wrote-const' }], [{ fact: 'wrote-fed' }], [{ fact: 'wrote-pen' }],
      [{ fact: 'law-decl' }, { fact: 'law-fed' }], [{ fact: 'law-const' }],
      [{ fact: 'decl-reasons' }], [{ fact: 'decl-rights' }], [{ fact: 'decl-consent' }],
      [{ fact: 'art-one' }], [{ fact: 'art-two' }], [{ fact: 'art-three' }],
      [{ fact: 'pow-money' }, { fact: 'pow-coin' }], [{ fact: 'pow-trade' }], [{ fact: 'pow-citizen' }], [{ fact: 'pow-war' }],
      [{ fact: 'pow-courts' }], [{ fact: 'pow-proper' }],
      [{ fact: 'bor-what' }], [{ fact: 'bor-why' }], [{ fact: 'bor-limit' }],
      [{ fact: 'six-first' }], [{ fact: 'six-fourth' }, { fact: 'six-fifth' }, { fact: 'six-sixth' }], [{ fact: 'six-eighth' }], [{ fact: 'six-tenth' }],
      [{ fact: 'chg-propose' }, { fact: 'chg-approve' }], [{ fact: 'chg-total' }], [{ fact: 'chg-ten' }], [{ fact: 'chg-later' }],
      [{ fact: 'fth-citizen' }], [{ fact: 'fth-process' }, { fact: 'fth-equal' }], [{ fact: 'fth-states' }],
      [{ fact: 'vote-slavery' }], [{ fact: 'vote-race' }, { fact: 'vote-sex' }], [{ fact: 'vote-poll' }], [{ fact: 'vote-age' }]
    ] }],
    returns: []           // a fact has no case to vary: it returns as its row, next to the fact it is swapped with (E9)
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1, replacing old Unit Two (the founding documents) and its quick drill n2. A fact unit: twelve groups of facts under the idea each serves (the first plan and why it failed, the five dates, who wrote each document, which is law, what the Declaration says, what the first three articles built, what Article I lists for Congress, the Bill of Rights, six of its amendments, how the Constitution is changed, the Fourteenth Amendment, the amendments that ended slavery and widened the vote), fifty-three facts, eight look-alike pairs. Factual correction: the Bill of Rights is the first ten amendments and part of the Constitution; no row offers the two as rival answers (audit U2-2), and the old claims that the Declaration is law and that the Bill of Rights is a separate document are held as the right fact. Every fact comes from old Unit Two and the Fourteenth Amendment lines of old Unit One; nothing is added. The unit says plainly that it skips four of the first ten amendments, eleven of the seventeen later ones and the last four articles. Not yet deployed.' },
      { rev: 2, date: '2026-10-05', change: 'American English: US spelling.' }
    ],
    keyChanges: [],
    wrongIdeas: [],       // a fact unit has no refute card and no claim stage (A12); the old claims 5 and 13 are rows (docs/rebuild/civics-plan.md, gap 6)
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
