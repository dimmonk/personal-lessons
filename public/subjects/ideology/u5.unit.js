// Political Ideologies, Unit Five: the unit record. This is a BRANCH unit: it teaches the part of the key that follows the gate's
// fourth answer, "Rights and fair treatment for everyone". One question, three names. Cards live in u5.cards-*.js, cases in
// u5.cases-*.js. Every text in the unit is invented: no person, party, country or event is real, and no text says what any real
// person believes. Text fields never retype key wording; they use tokens ({o:id} {q:STEP} {a:STEP.option} {t:equity} {test:ledgerId}
// {cue:STEP}), filled in from key.js.

FC.unit('ideology', 'u5', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Five',
  title: { fromKey: 'D1.rights' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'What a text about fair treatment wants the government to do: stay out, pay for a fair start, or change a rule',
  teaches: { steps: ['R1'], outcomes: ['clib', 'modlib', 'idegal'], terms: ['equity'] },
  assumes: ['u1', 'u2', 'u3', 'u4'],   // everything these units teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse, written once and used six ways (lesson standard S3).
  // The first three pairs are inside this unit and are separated by its question. The last three set a name of this unit beside a
  // look-alike from another part of the key: a pair from two parts of the key is separated by the key's first question
  // (lesson standard 17), and each is the key's decision when a text shows both answers (the gate's tie-breaks for the rights answer).
  // test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'clib~modlib', pair: ['clib', 'modlib'], step: 'R1',
      shared: 'Both put each person’s freedom first and ask the government to protect it.',
      rule: 'In {o:clib} the text asks the government to protect rights and nothing more. In {o:modlib} it asks the government to protect rights and also give everyone a start, and everyone pays for that together.',
      test: 'Does the text ask the government only to protect rights and then stay out? Or does it also ask the government to give people something, like a school, a doctor or help while out of work?' },
    { id: 'modlib~idegal', pair: ['modlib', 'idegal'], step: 'R1',
      shared: 'Both say fair treatment is owed to everyone, and both want the government to act so that nobody is left behind.',
      rule: 'In {o:modlib} the text asks for the same help for everyone and blames no rule for anyone being left behind. In {o:idegal} the text blames a rule that treats everyone alike for leaving a group behind, and asks for that rule to change.',
      test: 'Does the text blame a rule that treats everyone alike for leaving a group behind? Or does it ask for the same help for everyone and blame no rule?' },
    { id: 'clib~idegal', pair: ['clib', 'idegal'], step: 'R1', taughtIn: 'q-does',
      shared: 'Both are about rules that treat everyone alike, and neither wants anyone placed above anyone else.',
      rule: 'In {o:clib} the same rules for everyone are enough, and the government should do little beyond keeping them. In {o:idegal} the same rules are not enough: they leave some groups behind, and the text asks for them to change.',
      test: 'Does the text say the same rules for everyone are enough? Or does it say they leave a group behind and must change?' },
    { id: 'modlib~socdem', pair: ['modlib', 'socdem'], step: 'D1',
      shared: 'Both want the government to pay for schools, health care and help for people out of work, with everyone sharing the cost.',
      rule: 'In {o:socdem} the text sets working people against the people who own the businesses, and takes the workers’ side. In {o:modlib} it speaks for every person alike and is against nobody.',
      test: 'Does the text set people who work for pay against the people who own where they work, and take the workers’ side? Or does it speak for every person alike, with nobody on the other side?' },
    { id: 'clib~conserv', pair: ['clib', 'conserv'], step: 'D1',
      shared: 'Both can want a small government and let people keep what they earn.',
      rule: 'In {o:clib} what comes first is each person’s freedom, whether their way of life is old or new. In {o:conserv} what comes first is the ways handed down, like faith, home life and custom, and freedom is something those ways keep safe.',
      test: 'Does the text hold up old ways, like faith, home life and custom, as what should guide the country? Or does it put each person’s freedom first?' },
    { id: 'modlib~nationalism', pair: ['modlib', 'nationalism'], step: 'D1',
      shared: 'Both can want the government to pay for schools and doctors, and both can speak warmly of the country.',
      rule: 'In {o:modlib} the text speaks for every person alike, so what it asks is owed to a newcomer as to a neighbor. In {o:nationalism} it speaks for one people and puts that people first, so what it asks is for them before others.',
      test: 'Is what the text asks for owed to every person, whoever they are? Or is it for one people, which the text puts first?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Stay out, or pay for a fair start',
      cards: ['orient', 'meet-clib', 'check-clib', 'meet-modlib', 'check-modlib', 'look-clib-modlib'] },
    { id: 'p2', title: 'Changing a rule, when another answer wins, then the drill',
      cards: ['term-equity', 'meet-idegal', 'check-idegal', 'look-modlib-idegal', 'exc-startrules',
              'q-does', 'check-does', 'exc-class', 'exc-tradition', 'exc-nation', 'worked-misleading'],
      drill: true, close: ['recap'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups of look-alikes: the app shuffles the groups inside a tier band (clean, then varied, then
  // misleading) and shuffles inside each group. Every case is new. The {earlier: 'u1'} item draws, at run time, from Unit One's bank.
  drill: {
    key: 'u5',            // the old quick-drill totals for this unit were stored under pl:ideology:stats:u5 (frozen; see E8)
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'i5-p-clib', step: 'R1' }, { case: 'i5-p-modlib', step: 'R1' }],
                [{ case: 'i5-p-idegal', step: 'R1' }, { case: 'i5-p-modlib2', step: 'R1' }],
                [{ tell: 'clib~modlib' }, { tell: 'modlib~idegal' }]] },
      { ask: 'route',
        items: [['i5-r-clib1', 'i5-r-modlib1', 'i5-r-idegal1'],
                ['i5-r-clib2', 'i5-r-modlib2', 'i5-r-idegal2'],
                ['i5-r-clib3', 'i5-r-modlib3', 'i5-r-idegal3'],
                [{ earlier: 'u1' }]] }
    ],
    // Fresh cases for later days: one for each name (E9). A due name returns as a case the learner has not seen,
    // beside a case of the name they most often take it for.
    returns: ['i5-ret-clib-3', 'i5-ret-modlib-1', 'i5-ret-idegal-3']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit for “Rights and fair treatment for everyone”. One question, three names, the word equity taught on its own card, and the gate’s three decisions for this answer (working people against owners, old ways, one people put first) taught as exceptions. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
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
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
