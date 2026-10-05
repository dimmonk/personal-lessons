// Civics, Unit Eight: the unit record. This is the subject's second FACT UNIT (lesson standard A12, kind 'F'): facts to hold,
// grouped under the idea each one serves, each asked from memory. It teaches no question of the key and no name; what it holds is
// every row of its facts cards, and nothing lists that twice. The reader is a complete beginner, so every fact follows a case
// and an idea in plain words. Cards live in u8.cards-*.js, the cases the concept cards show in u8.cases-1.js.
// It replaces old Unit Four (rights, duties and the oath) and its drill n4. Old claims 2, 8 and 14 are held as the right fact
// in rows (a fact unit has no refute card and no claim stage, A12), never named: see build.history.
// Text fields never retype key wording: they use tokens ({t:agency} {o:execute} {o:beyondcong} {o:protected} {o:trialrights} {f:row}).

FC.unit('civics', 'u8', {
  kind: 'F',              // C classification, F facts, P procedure
  rev: 2,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Eight',
  title: { text: 'Rights and duties' },
  subtitle: 'What everyone here has, what only citizens have, what is asked of you, what is not promised, the oath and the test',
  teaches: { steps: [], outcomes: [], terms: [] },   // a fact unit teaches no step, no name and no term (A12)
  assumes: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7'],

  // THE LOOK-ALIKE LEDGER: pairs of facts that people swap, by row id (S3). Each row is in at most one pair, because the drill
  // asks a pair together. rule names both answers by {f:}; test is a question to put to yourself, with no name in it.
  ledger: [
    { id: 'sp-speech~sp-press', pair: ['sp-speech', 'sp-press'],
      shared: 'Both protect a person who criticises the government in public, and both are in the First Amendment, so an article that criticises the mayor could be called either.',
      rule: 'One is about what a person says: {f:sp-speech}. The other is about what newspapers and magazines print and sell: {f:sp-press}.',
      test: 'Is the government acting against a person for their own words, or against something that is printed and sold?' },
    { id: 'ac-silence~ac-lawyer', pair: ['ac-silence', 'ac-lawyer'],
      shared: 'Both are said to the police in the same breath after a person is charged with a crime: ‘I want a lawyer, and I will say nothing.’',
      rule: 'One protects a person from being forced to answer: {f:ac-silence}. The other gives a person someone to act for them, appointed if they cannot pay: {f:ac-lawyer}.',
      test: 'Is it about whether I have to answer, or about someone who stands with me in the case?' },
    { id: 'ac-jury~cz-jury', pair: ['ac-jury', 'cz-jury'],
      shared: 'Both are about a jury, and a jury trial needs both: someone on trial, and people summoned to decide.',
      rule: 'One protects the person who is on trial, and everyone here has it: {f:ac-jury}. The other is what the law asks of a citizen who is summoned to sit on the jury: {f:cz-jury}.',
      test: 'Is it about the person who is on trial, or about a person who is summoned to decide the case?' },
    { id: 'ic-crim~ic-civil', pair: ['ic-crim', 'ic-civil'],
      shared: 'Both name a kind of case, and each is the answer to one question: is the person on trial for a crime?',
      rule: 'One is the kind of case in which a person is on trial for a crime: {f:ic-crim}. The other is the kind in which nobody is, and an immigration hearing is of this kind: {f:ic-civil}.',
      test: 'Is the person on trial for a crime, or is nobody?' },
    { id: 'ic-accused~ic-immig', pair: ['ic-accused', 'ic-immig'],
      shared: 'Both are about the same promise of an appointed lawyer for a person who cannot pay.',
      rule: 'One says whom the promise is written for: {f:ic-accused}. The other says what becomes of it in an immigration hearing: {f:ic-immig}.',
      test: 'Am I being asked whom the promise is written for, or what becomes of it in an immigration hearing?' },
    { id: 'oa-what~oa-pledge', pair: ['oa-what', 'oa-pledge'],
      shared: 'Both are promises of loyalty to the United States, and both have ‘Allegiance’ in their names.',
      rule: 'One is made once, by a person who is becoming a citizen: {f:oa-what}. The other is said by schoolchildren to the flag, and is no part of becoming a citizen: {f:oa-pledge}.',
      test: 'Is it made once, at the ceremony that makes someone a citizen, or said to the flag at school?' },
    { id: 'te-law~te-who', pair: ['te-law', 'te-who'],
      shared: 'Both are part of the answer to who decides how the citizenship test works, and both are tied to the law that requires it.',
      rule: 'One is where the requirement comes from: {f:te-law}. The other is who runs the interview and sets its details: {f:te-who}.',
      test: 'Is it asking where the requirement comes from, or who runs the interview and sets the details?' }
  ],

  // Parts are stopping points (A13). The last holds the test, the drill and the close.
  parts: [
    { id: 'p1', title: 'What the government is held back from',
      cards: ['orient-rights',
              'con-speak', 'facts-speak', 'chk-sp-speech', 'chk-sp-religion', 'chk-sp-press', 'chk-sp-assembly', 'chk-sp-petition', 'look-speak',
              'con-accused', 'facts-accused', 'chk-ac-search', 'chk-ac-silence', 'chk-ac-lawyer', 'chk-ac-jury', 'look-accused'] },
    { id: 'p2', title: 'What the law asks, what is kept for citizens, and what is not promised',
      cards: ['con-duty', 'facts-duty', 'chk-du-obey', 'chk-du-tax', 'chk-du-draft',
              'con-citizen', 'facts-citizen', 'chk-cz-vote', 'chk-cz-run', 'chk-cz-jury', 'look-jury',
              'con-promise', 'facts-promise', 'chk-np-kind', 'chk-np-none', 'chk-np-source', 'chk-np-change'] },
    { id: 'p3', title: 'Two kinds of case, and the oath',
      cards: ['con-hearing', 'facts-hearing', 'chk-ic-crim', 'chk-ic-civil', 'chk-ic-accused', 'chk-ic-immig', 'look-kind', 'look-lawyer',
              'con-oath', 'facts-oath', 'chk-oa-what', 'chk-oa-pledge', 'chk-oa-giveup', 'chk-oa-support', 'chk-oa-serve', 'look-oath'] },
    { id: 'p4', title: 'The test, then the drill',
      cards: ['con-test', 'facts-test', 'chk-te-form', 'chk-te-list', 'chk-te-english', 'chk-te-exempt', 'chk-te-law', 'chk-te-who',
              'chk-te-source', 'chk-te-version', 'look-test'],
      drill: true, close: ['recap-rights'] }
  ],

  // A fact unit's drill has one stage, `fact`: every row asked from memory (A12). Items are authored in groups: each ledger pair is
  // one group, so a pair can come back together, and every other row stands alone. Every row appears exactly once (V39).
  drill: {
    key: 'n4',            // the old Unit Four quick drill (rights and duties) was stored under pl:civics:stats:n4 (frozen; see E8)
    rungs: [{ ask: 'fact', items: [
      [{ fact: 'sp-speech' }, { fact: 'sp-press' }], [{ fact: 'sp-religion' }], [{ fact: 'sp-assembly' }], [{ fact: 'sp-petition' }],
      [{ fact: 'ac-search' }], [{ fact: 'ac-silence' }, { fact: 'ac-lawyer' }], [{ fact: 'ac-jury' }, { fact: 'cz-jury' }],
      [{ fact: 'du-obey' }], [{ fact: 'du-tax' }], [{ fact: 'du-draft' }],
      [{ fact: 'cz-vote' }], [{ fact: 'cz-run' }],
      [{ fact: 'np-kind' }], [{ fact: 'np-none' }], [{ fact: 'np-source' }], [{ fact: 'np-change' }],
      [{ fact: 'ic-crim' }, { fact: 'ic-civil' }], [{ fact: 'ic-accused' }, { fact: 'ic-immig' }],
      [{ fact: 'oa-what' }, { fact: 'oa-pledge' }], [{ fact: 'oa-giveup' }], [{ fact: 'oa-support' }], [{ fact: 'oa-serve' }],
      [{ fact: 'te-form' }], [{ fact: 'te-list' }], [{ fact: 'te-english' }], [{ fact: 'te-exempt' }],
      [{ fact: 'te-law' }, { fact: 'te-who' }], [{ fact: 'te-source' }], [{ fact: 'te-version' }]
    ] }],
    returns: []           // a fact has no case to vary: it returns as its row, next to the fact it is swapped with (E9)
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the second fact unit of Civics, replacing old Unit Four (rights, duties and the oath, except its look-alike card, which is a key matter taught in the branch units) and its drill n4. Eight groups of facts under the idea each serves, thirty-six facts, seven look-alike pairs. Rebuilt on one axis per card, so that no row has two right answers (audit U4-3: the old options mixed who with what kind of thing). Old claims 2 (the Bill of Rights protects only citizens), 8 (the Constitution guarantees a job and a home) and 14 (a non-citizen pays no income tax) are held as the right fact in rows and never named (a fact unit has no refute card, A12). Everything asserted comes from the old material of standard0.js. Two holes are skipped and said so on the cards: which of the accused’s rights apply in an immigration hearing, and the details of the test. One pair spans two facts cards (the jury trial and jury service). Not yet deployed.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' }
    ],
    keyChanges: [],
    wrongIdeas: [],       // a fact unit holds none: claims 2, 8 and 14 become rows, claim 17 (the test is in the Constitution) is corrected on the test card in the right fact, and the key units carry the rest
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
