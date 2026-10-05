// Civics, Unit Six: the unit record. A branch unit with two questions (lesson standard A13: the parts follow the answers of the
// first question, then the second question's names). Cards live in u6.cards-*.js, cases in u6.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('civics', 'u6', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 2,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Six',
  title: { fromKey: 'D1.states' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Five things a rule from a state, a city or a county can come to, and the two questions that tell them apart',
  teaches: { steps: ['S1', 'S2'], outcomes: ['police', 'localgov', 'preempted', 'concurrent', 'protected'], terms: [] },
  assumes: ['u1', 'u2', 'u3', 'u4', 'u5'],   // everything the earlier units teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. All ten pairs of the five names (the first pair is separated by S1, the other nine by S2), and three pairs that
  // cross into another branch, first separated by the key's first question (S3). Each entry is written once and used six ways (see the
  // Psychology units). test is a question to put to a case, with no names in it. taughtIn names the card for an entry with no card of its own.
  ledger: [
    { id: 'police~localgov', pair: ['police', 'localgov'], step: 'S1',
      shared: 'Both are rules on an everyday matter that nothing federal covers, and a state and a town can make a rule on the same matter, such as quiet hours.',
      rule: 'In {o:police} the state itself made the rule: its legislature, its governor or one of its own offices. In {o:localgov} a council, a board or a mayor made it, using what the state gave to the place. Everything else is the same: nothing federal covers the matter, and no right is taken away.',
      test: 'Who made the rule: the state itself, or a city, a town or a county?' },
    { id: 'police~preempted', pair: ['police', 'preempted'], step: 'S2',
      shared: 'In both a state’s lawmakers made the rule, and the matter can sound like one a state would settle for itself.',
      rule: 'In {o:police} nothing federal covers the matter, so the state decides. In {o:preempted} a federal law covers the same matter and is meant to be the only rule, so the state’s rule gives way.',
      test: 'Has Congress already written a law on this same matter, and is it meant to be the only rule?' },
    { id: 'police~concurrent', pair: ['police', 'concurrent'], step: 'S2', taughtIn: 'q-else',
      shared: 'Both are state rules on a matter of daily life, and in both the state’s rule stands.',
      rule: 'In {o:police} no federal law covers the matter. In {o:concurrent} one does, but it sets only a minimum or leaves room, so the state’s rule stands beside it.',
      test: 'Is there a federal law on this same matter at all?' },
    { id: 'police~protected', pair: ['police', 'protected'], step: 'S2',
      shared: 'Both are rules a state makes about what people may do in a public place.',
      rule: 'In {o:police} the rule takes away no right, so the state may make it. In {o:protected} a right stops the rule: one of the freedoms the Constitution guards is taken from people, so the state may not make it.',
      test: 'Does the rule take away a right to speak, to worship, to publish or to gather peacefully?' },
    { id: 'localgov~preempted', pair: ['localgov', 'preempted'], step: 'S2', taughtIn: 'q-else',
      shared: 'Both are rules a city, a town or a county makes, and the matter can sound like a purely local one.',
      rule: 'In {o:localgov} nothing federal covers the matter, so the city or county decides with the power its state handed down. In {o:preempted} a federal law is meant to be the only rule, so the local rule gives way, as a state’s would.',
      test: 'Does a federal law already cover this matter and say that it is the only rule?' },
    { id: 'localgov~concurrent', pair: ['localgov', 'concurrent'], step: 'S2', taughtIn: 'q-else',
      shared: 'Both are local rules on a matter that touches daily life, and in both the local rule stands.',
      rule: 'In {o:localgov} the local rule is the only rule on the matter. In {o:concurrent} a federal law covers the matter too, but it sets only a minimum or leaves room, so the local rule stands beside it.',
      test: 'Is the local rule alone on this matter, or is there a federal law beside it?' },
    { id: 'localgov~protected', pair: ['localgov', 'protected'], step: 'S2',
      shared: 'Both are rules a city makes about its own streets and sidewalks.',
      rule: 'In {o:localgov} the rule takes away no right, so the city may make it. In {o:protected} a right stops the rule, because one of the freedoms the Constitution guards is taken from people, and a city has no power to take it, whatever its state handed down.',
      test: 'Does the rule aim at what people say, believe or publish, or does it only say where, when or how?' },
    { id: 'preempted~concurrent', pair: ['preempted', 'concurrent'], step: 'S2',
      shared: 'In both a federal law and a state’s or a city’s rule cover the same matter.',
      rule: 'In {o:preempted} the federal law is meant to be the only rule, or the two cannot both be obeyed, so the state’s or city’s rule gives way. In {o:concurrent} the federal law sets only a minimum or leaves room, so the rule stands beside it, and obeying the rule also obeys the federal law.',
      test: 'Does the federal law say that it is the only rule, or does it say that it is a minimum or leave room for the states?' },
    { id: 'preempted~protected', pair: ['preempted', 'protected'], step: 'S2', taughtIn: 'q-else',
      shared: 'In both the state’s or the city’s rule cannot stand.',
      rule: 'In {o:preempted} a federal law stops the rule, and no right is needed. In {o:protected} a right stops the rule, and no federal law is needed.',
      test: 'What stops the rule: another law on the same matter, or a right that the rule takes away?' },
    { id: 'concurrent~protected', pair: ['concurrent', 'protected'], step: 'S2', taughtIn: 'q-else',
      shared: 'In both something from the federal side of the Constitution sits beside the rule: a law in one, a right in the other.',
      rule: 'In {o:concurrent} the rule stands, because the federal law leaves room. In {o:protected} the rule does not stand, because it takes away a right.',
      test: 'Does the rule stand beside the federal side, or does it take something away that the federal side protects?' },
    { id: 'protected~beyondcong', pair: ['protected', 'beyondcong'], step: 'D1',
      shared: 'In both a right the Constitution protects stops a rule, and the same right can be involved in both.',
      rule: 'In {o:beyondcong} the rule is a law of Congress, and the first answer is {a:D1.congress}. In {o:protected} the rule is a state’s, a city’s or a county’s, and the first answer is {a:D1.states}.',
      test: 'Who made the rule: Congress, or a state, a city or a county?' },
    { id: 'protected~trialrights', pair: ['protected', 'trialrights'], step: 'D1',
      shared: 'Both are about a right in the Constitution that protects a person against a government.',
      rule: 'In {o:trialrights} the story ends with a judge asked whether the steps promised to an accused person were followed, and the first answer is {a:D1.courts}. In {o:protected} it ends with a council or a legislature making a rule that cuts into a right, and the first answer is {a:D1.states}.',
      test: 'Does the story end with a judge being asked about how an accused person was treated, or with a rule made by a state, a city or a county?' },
    { id: 'police~beyondcong', pair: ['police', 'beyondcong'], step: 'D1',
      shared: 'Both are about a matter that the Constitution does not give to Congress, and that is kept by the states.',
      rule: 'In {o:police} a state made the rule, which a state may do, and the first answer is {a:D1.states}. In {o:beyondcong} Congress made it, which Congress may not do, and the first answer is {a:D1.congress}.',
      test: 'Who made the rule: a state, or Congress?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. The first two follow the two answers of the key's
  // first question of this branch, in the key's order (A13); the next two follow the second question. The part with drill: true is the last.
  parts: [
    { id: 'p1', title: 'A rule the state itself makes',
      cards: ['orient', 'meet-police', 'again-police', 'lens', 'portrait-police', 'check-police'] },
    { id: 'p2', title: 'A rule a city, a town or a county makes, and the first question',
      cards: ['meet-localgov', 'again-localgov', 'portrait-localgov', 'check-localgov', 'look-police-localgov', 'refute-citypower',
              'q-who', 'check-who'] },
    { id: 'p3', title: 'A federal law on the same matter',
      cards: ['meet-preempted', 'again-preempted', 'portrait-preempted', 'check-preempted',
              'meet-concurrent', 'again-concurrent', 'portrait-concurrent', 'check-concurrent',
              'look-preempted-concurrent', 'refute-always', 'look-police-preempted', 'exc-crib', 'refute-citizens'] },
    { id: 'p4', title: 'A right that stops the rule, and the second question',
      cards: ['meet-protected', 'again-protected', 'portrait-protected', 'check-protected', 'look-police-protected', 'exc-councilmag',
              'look-protected-beyondcong', 'look-protected-trialrights', 'look-police-beyondcong', 'q-else', 'check-else'] },
    { id: 'p5', title: 'Two whole cases, then the drill',
      cards: ['worked-dogs', 'worked-parkevent'], drill: true, close: ['recap', 'transfer'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  drill: {
    key: 'u6',            // no old quick-drill counter belonged to this unit: the old state-branch cards were drilled under the first unit's counter
    add: 'Many of these cases name a federal law, a state and a city all at once, and the one named first is often not the one that decides. That is on purpose. Read each story to its end, find who made the rule, and then ask what else covers the same matter.',
    rungs: [
      { ask: 'name',
        items: [['u6-n-teachers', 'u6-n-bins'], ['u6-n-trucks', 'u6-n-sickdays', 'u6-n-pamphlets']] },
      { ask: 'piece',
        items: [[{ case: 'u6-p-fishing', step: 'S1' }, { case: 'u6-p-market', step: 'S1' }],
                [{ case: 'u6-p-medicine', step: 'S2' }, { case: 'u6-p-sprinklers', step: 'S2' }, { case: 'u6-p-sermon', step: 'S2' }, { case: 'u6-p-marriage', step: 'S2' }],
                [{ tell: 'police~localgov' }, { tell: 'preempted~concurrent' }, { tell: 'police~protected' }, { tell: 'localgov~protected' }],
                [{ separator: 'police~localgov' }, { separator: 'police~preempted' }, { separator: 'preempted~concurrent' }, { separator: 'police~protected' }],
                ['u6-rev-police', 'u6-rev-localgov', 'u6-rev-preempted', 'u6-rev-concurrent', 'u6-rev-protected'],
                [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['u6-f-parkfee', 'u6-f-schoolbus']] },
      { ask: 'route',
        items: [['u6-r-lessons', 'u6-r-leash', 'u6-r-library'],
                ['u6-r-coins', 'u6-r-factory'],
                ['u6-r-heater', 'u6-r-citytest'],
                ['u6-r-foodtrucks', 'u6-r-score'],
                ['u6-r-alarms', 'u6-r-bookstall'],
                ['u6-r-noise', 'u6-r-march'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'u6-claim-demo',
        items: [['u6-claim-always', 'u6-claim-citizens'], ['u6-claim-cities'], ['u6-claim-right']] }
    ],
    // Fresh cases for later days: three for each name, one for each of its scheduled returns (E9).
    // A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['u6-ret-pawn', 'u6-ret-fireworks', 'u6-ret-schoolleaving',
              'u6-ret-height', 'u6-ret-libraryhours', 'u6-ret-deck',
              'u6-ret-imports', 'u6-ret-airport', 'u6-ret-visitors',
              'u6-ret-lead', 'u6-ret-extrapay', 'u6-ret-carseat',
              'u6-ret-banner', 'u6-ret-studentpaper', 'u6-ret-worshiphall']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the state, city or county branch of Civics, with two questions. It replaces old Unit One cards nine to sixteen, the "three names that look alike" card of old Unit Four, the crib-law worked case and the news item of old Unit Seven, and old specimens 2, 6, 10, 15 and 19. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' }
    ],
    // What the K2 rewrite changed in the key for this branch, and why (docs/rebuild/civics-plan.md, section a). "was" is the wording of the old course.
    keyChanges: [
      { step: 'S1', was: 'Where does the federal government stand? (four answers; "It has no power here" kept two names), then Who ends up with the say? (five answers, each keeping one name)',
        now: 'Is the rule the state’s own, or a city’s or a county’s? (two answers), then Does a federal law or a right in the Constitution cover the same matter? (four answers)',
        why: 'V55: the old second question decided every case alone, so the first did no work. The branch has two independent things to read, who made the rule and what else covers its matter, and each answer of each keeps more than one name, so both questions stay.' },
      { step: 'S2', was: '"It has power here and has already used it" and "It has power here, and so does the state: both may act"',
        now: '"A federal law that is meant to be the only rule" and "A federal law that leaves room for the state’s rule"',
        why: 'Audit S17: "already acted" was never taught, and the old specimen did not show the federal law. The new answers say what a case must show, and the cases state the federal law in their words.' },
      { step: 'S2', was: 'No government may act, federal included: a right protects this',
        now: '"A right the rule takes away", whose `when` says the right binds every state, city and county as well as the federal government',
        why: 'The old answer said "federal included" in a branch where only a state or a city acts.' },
      { outcome: 'protected', was: 'Nobody may act: a protected right', now: 'A right that binds the states',
        why: 'The old name said that nobody may act, yet it was used only when a state or a city acts. The same right against Congress is a different name.' },
      { outcome: 'police', was: 'Left to the states (reserved powers); Handed down to a city or county (local government); Federal law wins (preemption); Both may act',
        now: 'Reserved powers; Power handed down to a city or county; Preemption; Concurrent powers',
        why: 'V1 and K4: no brackets in a name. The real-life name is the name, and the plain words and the older names are printed once on the card that teaches it.' }
    ],
    // Cards that name a wrong idea, with where the idea comes from. verified: false is shown to the owner at deploy (E15).
    wrongIdeas: [
      { card: 'refute-citypower', about: 'localgov',
        source: { kind: 'app-data', verified: false,
          ref: 'Old faulty claim "Cities and counties have powers of their own that the state cannot touch" (standard0.js, CIVICS_ERR). That cold readers hold it has still to be seen.' } },
      { card: 'refute-always', about: 'preempted',
        source: { kind: 'app-data', verified: false,
          ref: 'Old faulty claim "Federal law always beats state law" (standard0.js, CIVICS_ERR); docs/comprehension-audit/civics.md U1-7 and S17. That cold readers hold it has still to be seen.' } },
      { card: 'refute-citizens', about: 'police',
        source: { kind: 'app-data', verified: false,
          ref: 'Old faulty claim "Each state sets its own rules for who can become a citizen" (standard0.js, CIVICS_ERR). That cold readers hold it has still to be seen.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
