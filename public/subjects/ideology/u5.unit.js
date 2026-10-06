// Political Ideologies, Unit Five: the unit record. This is a BRANCH unit: it teaches the part of the key that follows the gate's
// fourth answer, "Rights and fair treatment for everyone". One question, three names. Cards live in u5.cards-*.js, cases in
// u5.cases-*.js. Every text in the unit is invented: no person, party, country or event is real, and no text says what any real
// person believes. Text fields never retype key wording; they use tokens ({o:id} {q:STEP} {a:STEP.option} {t:equity} {test:ledgerId}
// {cue:STEP}), filled in from key.js.

FC.unit('ideology', 'u5', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 3,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Five',
  title: { fromKey: 'D1.rights' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Three things a text can want done for people, and how to tell which one you are reading',
  teaches: { steps: ['R1'], outcomes: ['clib', 'modlib', 'idegal'], terms: ['equity'] },
  assumes: ['u1', 'u2', 'u3', 'u4'],   // everything these units teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse, written once and used six ways (lesson standard S3).
  // The first three pairs are inside this unit and are separated by its question. The last three set a name of this unit beside a
  // look-alike from another part of the key: a pair from two parts of the key is separated by the key's first question
  // (lesson standard 17), and each is the key's decision when a text shows both answers (the gate's tie-breaks for the rights answer).
  // test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'clib~modlib', pair: ['clib', 'modlib'], step: 'R1',
      shared: 'Both put each person’s freedom first and ask the government to protect it, and both can say that the government should not run everything.',
      rule: 'In {o:clib} the text asks the government to protect rights and do little else, so nothing is given to people beyond that protection. In {o:modlib} the text asks the government to protect rights and then to provide a start for everyone, so something is given, and everyone pays for it together.',
      test: 'Does the text ask the government only to protect rights and then stay out? Or does it also ask the government to give people something, such as a school, a doctor or help while out of work?' },
    { id: 'modlib~idegal', pair: ['modlib', 'idegal'], step: 'R1',
      shared: 'Both say that fair treatment is owed to everyone, and both ask the government to act so that nobody is left behind.',
      rule: 'In {o:modlib} the text asks for the same help for everyone, and names no rule as the cause of anyone being left behind. In {o:idegal} the text names rules that treat everyone alike as the cause of a group being left behind, and asks for those rules to be changed.',
      test: 'Does the text name a group that is left behind and say that a rule which treats everyone alike is the cause? Or does it ask for the same help for everyone and blame no rule?' },
    { id: 'clib~idegal', pair: ['clib', 'idegal'], step: 'R1',
      shared: 'Both are about rules that treat everyone alike, and neither wants anyone placed above anyone else.',
      rule: 'In {o:clib} the same rules for everyone are enough, and the government should do little beyond keeping them. In {o:idegal} the same rules for everyone are not enough: they leave some groups behind, and the text asks for them to be changed.',
      test: 'Does the text say that the same rules for everyone are enough? Or does it say that they leave some group behind and must be changed?' },
    { id: 'modlib~socdem', pair: ['modlib', 'socdem'], step: 'D1',
      shared: 'Both ask the government to pay for schools, health care and help for people out of work, and both ask everyone to share the cost.',
      rule: 'In {o:socdem} the text names working people and the people who own the businesses as two sides, and stands with the workers. In {o:modlib} the text speaks for every person alike and has no side to be against.',
      test: 'Does the text name two sides, the people who work for pay and the people who own where they work, and stand with the first? Or does it speak for every person alike, with nobody on the far side?' },
    { id: 'clib~conserv', pair: ['clib', 'conserv'], step: 'D1',
      shared: 'Both can say that the government should be small and that each person should keep what they earn.',
      rule: 'In {o:clib} what the text puts first is each person’s freedom, whether the ways of life it protects are old or new. In {o:conserv} what the text puts first is the ways handed down, such as faith, home life and custom, and freedom is held up as something those ways keep safe.',
      test: 'Does the text hold up old ways, such as faith, home life and custom, as what should guide the country? Or does it hold up each person’s freedom as the thing that comes first?' },
    { id: 'modlib~nationalism', pair: ['modlib', 'nationalism'], step: 'D1',
      shared: 'Both can ask the government to pay for schools and doctors, and both can speak warmly of the country.',
      rule: 'In {o:modlib} the text speaks for every person alike, and what it asks is owed to a newcomer as to a neighbor. In {o:nationalism} the text speaks for one people as one, and puts that people first, so what it asks is for them before others.',
      test: 'Is what the text asks for owed to every person, whoever they are? Or is it for one people, which the text puts first?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The parts follow the answers of the key's one question (A13), then the key's decisions where this branch gives way.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Rights protected, and otherwise left alone',
      cards: ['orient', 'meet-clib', 'again-clib', 'lens', 'portrait-clib', 'check-clib', 'refute-small'] },
    { id: 'p2', title: 'Rights protected, and a fair start for everyone',
      cards: ['meet-modlib', 'again-modlib', 'portrait-modlib', 'check-modlib', 'refute-liberal', 'look-clib-modlib'] },
    { id: 'p3', title: 'Rules said to hold some groups back',
      cards: ['term-equity', 'meet-idegal', 'again-idegal', 'portrait-idegal', 'check-idegal',
              'look-modlib-idegal', 'look-clib-idegal', 'refute-ranking', 'exc-startrules'] },
    { id: 'p4', title: 'The question, and where the first question wins',
      cards: ['q-does', 'check-does', 'exc-class', 'exc-tradition', 'exc-nation'] },
    { id: 'p5', title: 'Two whole cases, then the drill',
      cards: ['worked-clean', 'worked-misleading'], drill: true, close: ['recap', 'transfer'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction.
  // Items are authored in groups of look-alikes: a group is cases that share ledger entries and one tier. The app shuffles the
  // groups inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  // The {earlier: 'u1'} items draw, at run time, from Unit One's bank, including its texts that set rights beside the first answer.
  drill: {
    key: 'u5',            // the old quick-drill totals for this unit were stored under pl:ideology:stats:u5 (frozen; see E8)
    add: 'Some of these texts want a fair start and some want rules changed, and a few want both. That is on purpose: when a text shows two answers, one of them wins, and you will practice telling which.',
    rungs: [
      { ask: 'name',
        items: [['i5-n-clib1', 'i5-n-modlib1', 'i5-n-idegal1'],
                ['i5-n-clib2', 'i5-n-modlib2', 'i5-n-idegal2']] },
      { ask: 'piece',
        items: [[{ case: 'i5-p-clib', step: 'R1' }, { case: 'i5-p-modlib', step: 'R1' }],
                [{ case: 'i5-p-idegal', step: 'R1' }, { case: 'i5-p-modlib2', step: 'R1' }],
                [{ tell: 'clib~modlib' }, { tell: 'modlib~idegal' }],
                [{ tell: 'clib~idegal' }, { tell: 'modlib~socdem' }],
                [{ tell: 'clib~conserv' }, { tell: 'modlib~nationalism' }],
                ['i5-rev-clib', 'i5-rev-modlib', 'i5-rev-idegal'],
                [{ earlier: 'u1' }],
                [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['i5-f-clib', 'i5-f-modlib', 'i5-f-idegal'],
                ['i5-f-modlib2', 'i5-f-idegal2']] },
      { ask: 'route',
        items: [['i5-r-clib1', 'i5-r-modlib1', 'i5-r-idegal1'],
                ['i5-r-clib2', 'i5-r-modlib2', 'i5-r-idegal2'],
                ['i5-r-clib3', 'i5-r-modlib3', 'i5-r-idegal3'],
                [{ earlier: 'u1' }],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'i5-claim-demo',
        items: [['i5-claim-small'], ['i5-claim-liberal'], ['i5-claim-ranking'], ['i5-claim-services']] }
    ],
    // Fresh cases for later days: three for each name, one for each of its scheduled returns (E9).
    // A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['i5-ret-clib-1', 'i5-ret-clib-2', 'i5-ret-clib-3',
              'i5-ret-modlib-1', 'i5-ret-modlib-2', 'i5-ret-modlib-3',
              'i5-ret-idegal-1', 'i5-ret-idegal-2', 'i5-ret-idegal-3']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit for “Rights and fair treatment for everyone”. One question, three names, the word equity taught on its own card, and the gate’s three decisions for this answer (working people against owners, old ways, one people put first) taught as exceptions. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' }
    ],
    // What changed in the key for this branch, and why (K2). This unit carries the lines of the question and the outcomes it teaches;
    // the gate's lines are carried by Unit One. (docs/rebuild/ideology-plan.md, part a)
    keyChanges: [
      { step: 'R1', was: 'none: each name had its own first answer ("Groups held back by unfair systems", "The individual"), and "is formal equality enough?" sat in prose',
        now: 'one question, "What does the text want done for people?", with three answers (protect rights and leave people alone / protect rights and give everyone a fair start / change the rules that hold some groups back), each keeping one name',
        why: 'K2.2: one question, three answers, each one name. The three names differ on one thing, what the text wants done for people.' },
      { outcome: 'modlib', was: 'none: "liberal", as Americans use the word, appeared only in a caveat and in a faulty claim',
        now: '“Modern liberalism” (also called social liberalism), reached by the answer “Protect their rights, and give everyone a fair start”',
        why: 'K2.9, K4: the commonest center-left text (rights first, plus schooling, health care and fair rules for business) had nowhere to go but Social democracy, which needs working people set against owners. This unit teaches the tie-break with Social democracy as an exception.' },
      { outcome: 'idegal', was: '“Group equality” (identity-egalitarianism), reached by the first answer “Groups held back by unfair systems”',
        now: 'same name, reached by the answer “Change the rules that hold some groups back”; the key’s decision when a text also asks for a fair start is this answer',
        why: 'K4: the old plain name is kept. K2.8: a text that asks for services and also says rules leave a group behind shows two answers, and the key chooses the second.' },
      { outcome: 'clib', was: '“Classical liberalism”, reached by the first answer “The individual” and the second “Private owners, left alone”',
        now: 'same name, reached by the answer “Protect their rights, and otherwise leave them alone”',
        why: 'K2.2: the ownership question is no longer asked in this branch; what decides this name is what the text wants done for people.' },
      { outcome: 'equity (term)', was: 'none: used in the old card for Group equality with no explanation',
        now: 'a taught term with its own card, a case first',
        why: 'K6: a word a card must lean on is taught on its own card, in ordinary words first.' }
    ],
    wrongIdeas: [
      { card: 'refute-small', about: 'clib',
        source: { kind: 'cold-reader', verified: false,
          ref: 'Not from published data. Written from the key’s own wording (the answer to this question keeps a few jobs for the government and that is not no government at all) and the plan’s look-alike notes. A cold reader has to say whether “small government means no government” is an idea they bring; if not, replace the card with the idea they do bring.' } },
      { card: 'refute-liberal', about: 'modlib',
        source: { kind: 'app-data', verified: true,
          ref: 'public/subjects/ideology/standard0.js, IDEOLOGY_ERR item 10 ("“Liberal” always means left-wing."), and subject.js limits (“Liberal” means different things). It shows that the old course already treated this as a faulty idea its learners bring. Cold readers still have to say whether it is one they hold.' } },
      { card: 'refute-ranking', about: 'idegal',
        source: { kind: 'cold-reader', verified: false,
          ref: 'Not from published data. Written from the key’s own wording (the name needs no group placed above another) and the old faulty claim about race and Nazism (IDEOLOGY_ERR item 9), which Unit One tests. A cold reader has to say whether “different rules for groups means putting some groups above others” is an idea they bring.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
