// Wealth Preservation, Unit Five: the unit record. A BRANCH unit (lesson standard A1 to A11) of an ACTION subject (P26): the learner
// decides what to do about money, so one name in this branch is a name for "nothing more needs doing", every stage of the drill that
// asks about cases holds a case with that name, every portrait says what to do, and the unit closes with a plan card.
// It teaches the key's question about the handover, "What could go wrong when it is handed over?", and its five names.
// Cards live in u5.cards-*.js, cases in u5.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('wealth', 'u5', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 1,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Five',
  title: { fromKey: 'D1.handover' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Five things that can go wrong when money is handed over, and how to tell which one you are looking at',
  teaches: { steps: ['H1'], outcomes: ['basicdocs', 'simple', 'gifting', 'trust', 'governance'],
             terms: ['benform', 'poa', 'estate', 'trustword'] },
  assumes: ['u1', 'u2', 'u3', 'u4'],   // everything these teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry for every pair of names a learner will confuse. Each entry is written once and used six ways:
  // the look-alike or exception card, its side-by-side table, the list on the question card, the feedback when one is picked for the
  // other, the grouping of drill items, and what returns together later. `test` is a question to put to a case, with no name in it.
  // Three of the pairs (papers with the people, with tax on a large estate, and with tax on a rise) are the key's tie-breaks: where
  // a case shows both, the papers win, so each is taught as an exception. A fourth exception teaches the tie-break between the
  // two kinds of tax. Every question this unit asks has one question, so every pair is separated by that one.
  ledger: [
    { id: 'basicdocs~simple', pair: ['basicdocs', 'simple'], step: 'H1',
      shared: 'Both are about the papers that say who gets the money and who may act, and in both the owner may be well and the family may be close.',
      rule: 'In {o:basicdocs} at least one of the papers is missing, or names someone it should no longer name, or was written before a marriage, a divorce, a birth or a death. In {o:simple} every one of the papers is current.',
      test: 'Look at each of the three papers in the case: the will, any form held by a pension company or a bank, and the power of attorney. Does the case show that one of them is missing, or no longer matches the person’s life? Or does it show all three current?' },
    { id: 'gifting~simple', pair: ['gifting', 'simple'], step: 'H1',
      shared: 'In both, the papers are in order and the owner is well off.',
      rule: 'In {o:gifting} what the owner will leave is above the tax-free limit, and they have more than they will need. In {o:simple} what they will leave is below the limit, or nothing in it is in question.',
      test: 'Add up everything the owner will leave, and set it against the tax-free limit. Is it above, with more than the owner will need? Or is it below?' },
    { id: 'gifting~trust', pair: ['gifting', 'trust'], step: 'H1',
      shared: 'Both are about tax on what the owner will leave, and both can have the estate above the tax-free limit.',
      rule: 'In {o:gifting} the tax is on the estate as it stands, and nothing in it is expected to rise sharply, so small gifts from what the owner has to spare reduce the tax. In {o:trust} something the owner holds is expected to rise sharply, and the tax on that rise is the larger problem.',
      test: 'Is anything the owner holds expected to be worth many times more than it is now? If it is, the rise is the case. If nothing is, the estate as it stands is the case.' },
    { id: 'trust~governance', pair: ['trust', 'governance'], step: 'H1',
      shared: 'Both can end with a trustee holding the money under written terms, and a trustee with a veto can appear in either.',
      rule: 'In {o:trust} the problem is tax on something expected to rise sharply. In {o:governance} the problem is in the people who will receive the money or run it, and nothing here is about tax.',
      test: 'Is the case about a tax bill that a rise in value would make larger? Or is it about what a person will do with the money, or about people who cannot agree?' },
    { id: 'basicdocs~governance', pair: ['basicdocs', 'governance'], step: 'H1',
      shared: 'Both are about family, and in both the person who is about to receive the money may be the one at risk.',
      rule: 'In {o:basicdocs} a paper is missing or out of date. In {o:governance} the papers are not what is in question: it is a person who will receive the money or a control that will pass to people who cannot agree. Where a case shows both, the key’s answer is {a:H1.papers}.',
      test: 'Set aside what the people are like and look at the three papers: is one of them missing or no longer true? If it is, that comes first. If every paper is current, then look at the people.' },
    { id: 'basicdocs~gifting', pair: ['basicdocs', 'gifting'], step: 'H1',
      shared: 'Both can be a case of a large estate, and both are put right before anything bigger is tried.',
      rule: 'In {o:gifting} what the owner will leave is above the tax-free limit, they have more than they will need, and the papers are not in question. In {o:basicdocs} a paper is missing or out of date, however large the estate is. Where a case shows both, the key’s answer is {a:H1.papers}.',
      test: 'Before you add up what the owner will leave: is one of the three papers missing or no longer true? If it is, that is the answer, however large the sum. If not, add it up.' },
    { id: 'basicdocs~trust', pair: ['basicdocs', 'trust'], step: 'H1',
      shared: 'Both involve something that could change who ends up with a great deal of money, and both can be about someone’s business or land.',
      rule: 'In {o:trust} something the owner holds is expected to rise sharply and the tax on the rise is the problem. In {o:basicdocs} a paper is missing or out of date. Where a case shows both, the key’s answer is {a:H1.papers}.',
      test: 'Before you look at what is expected to rise: is one of the three papers missing or no longer true? If it is, that comes first, however large the rise.' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts (A13). They follow what a learner notices
  // first: the papers, tax, the people. The part with drill: true is the last, and its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The papers',
      cards: ['orient-handover', 'term-benform', 'term-poa', 'meet-basicdocs', 'again-basicdocs', 'lens-handover', 'portrait-basicdocs', 'check-basicdocs',
              'refute-willlater', 'meet-simple', 'again-simple', 'portrait-simple', 'check-simple', 'look-basicdocs-simple'] },
    { id: 'p2', title: 'Tax on what is left',
      cards: ['term-estate', 'meet-gifting', 'again-gifting', 'portrait-gifting', 'check-gifting', 'look-gifting-simple',
              'term-trustword', 'meet-trust', 'again-trust', 'portrait-trust', 'check-trust', 'exc-vineyard'] },
    { id: 'p3', title: 'The people, and the key’s question',
      cards: ['meet-governance', 'again-governance', 'portrait-governance', 'check-governance', 'look-trust-governance',
              'exc-papers-people', 'exc-papers-tax', 'exc-papers-rise', 'q-handover', 'check-handover-question'] },
    { id: 'p4', title: 'Two whole cases, then the drill',
      cards: ['worked-spare', 'worked-golfclub'], drill: true, close: ['recap-handover', 'transfer-handover', 'plan-handover'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction. Items are authored
  // in groups: cases that share ledger entries and one tier. The app shuffles the groups inside a tier band (clean, then varied, then
  // misleading) and the items inside a group. Every case is new. Every stage that asks about cases holds a case named {o:simple}.
  drill: {
    key: 'x5',            // the old quick-drill totals for this unit were stored under pl:wealth:stats:x5 (frozen; see E8)
    add: 'Some of these cases show all three papers in perfect order, and a stranger offering something to buy. That is on purpose. The name for papers in order, with nothing else in question, is one of the five, and in real life you will need it as often as any of the others. Look for the words that raise something. If you cannot point to them, do not invent them.',
    rungs: [
      { ask: 'name',
        items: [['h-n-widow', 'h-n-couple'],
                ['h-n-heirloom', 'h-n-orchard'],
                ['h-n-clinic', 'h-n-fiancee']] },
      { ask: 'piece',
        items: [[{ case: 'h-p-flatsale', step: 'H1' }, { case: 'h-p-modest', step: 'H1' }],
                [{ case: 'h-p-shares', step: 'H1' }, { case: 'h-p-farm', step: 'H1' }],
                [{ tell: 'basicdocs~simple' }, { tell: 'gifting~simple' }, { tell: 'gifting~trust' }, { tell: 'trust~governance' },
                 { tell: 'basicdocs~governance' }, { tell: 'basicdocs~gifting' }, { tell: 'basicdocs~trust' }],
                ['h-rev-papers', 'h-rev-simple', 'h-rev-gifting', 'h-rev-trust', 'h-rev-people'],
                [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['h-f-pilot', 'h-f-neighbours']] },
      { ask: 'route',
        items: [['h-r-lease', 'h-r-retired'],
                ['h-r-pension', 'h-r-woodland'],
                ['h-r-twins', 'h-r-surgeon'],
                ['h-r-annuity', 'h-r-lettings'],
                ['h-r-brothers', 'h-r-widowfarm'],
                ['h-r-golfer', 'h-r-shipyard'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'h-c-demo',
        items: [['h-c-seventy'], ['h-c-will'], ['h-c-safe']] }
    ],
    // Fresh cases for later days: four for each name, one for each of its scheduled returns (E9; an action subject adds the fourth, at
    // about twelve weeks). A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['h-x-papers-1', 'h-x-papers-2', 'h-x-papers-3', 'h-x-papers-4',
              'h-x-simple-1', 'h-x-simple-2', 'h-x-simple-3', 'h-x-simple-4',
              'h-x-gifting-1', 'h-x-gifting-2', 'h-x-gifting-3', 'h-x-gifting-4',
              'h-x-trust-1', 'h-x-trust-2', 'h-x-trust-3', 'h-x-trust-4',
              'h-x-people-1', 'h-x-people-2', 'h-x-people-3', 'h-x-people-4']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the handover branch of Wealth Preservation. Not yet deployed, so later edits before the first deploy stay revision 1.' }
    ],
    // What the K2 rewrite changed in this branch, and why (docs/rebuild/wealth-plan.md, section (a), Unit Five).
    keyChanges: [
      { step: 'H1', was: 'two questions: "What is at risk when this money is passed on?" and "What has been put in place?"',
        now: 'one question, "What could go wrong when it is handed over?"',
        why: 'The second question asked about a fix already applied, which a case could show only if it described a practice already carried out, and its answers restated the outcome names (audit C.2, 5.8; K2.2, V55). A key answer is what the case shows (K2.4).' },
      { step: 'H1', was: 'one answer, "Tax on what is passed on, or on the growth still to come", for two names, separated only by the second question',
        now: 'two answers: "Tax on an estate above the tax-free limit, with more than the owner needs" and "Tax on a sharp rise still to come in something the owner holds"',
        why: 'The old second question’s gifting answer reused the trust card’s "while it is small" (audit 5.2). The two kinds of tax are what the case shows, so each is an answer. The first gives way to the second where a case shows both (the key’s tie-break, taught as an exception).' },
      { outcome: 'trust', was: 'A trust or holding company', now: 'Move it out of the estate before it grows, with "putting it in a trust" and "a family holding company" as other names',
        why: 'The old name joined two names (K4). The new one says what is done and when.' },
      { outcome: 'simple', was: 'the leave-alone answer "Nothing: the case is simple and the documents are current" beside "Only the paperwork: the basic documents are out of date or missing", which the old specimen about current papers matched word for word',
        now: 'the paperwork answer requires papers out of date or missing; the leave-alone answer requires them current',
        why: 'Audit 5.3. The names "Update the basic paperwork" and "Nothing more needed" are kept because neither reads as its opposite.' },
      { step: 'H1', was: 'terms not taught: an estate, a beneficiary form, a power of attorney, a trust',
        now: 'four term cards, case first',
        why: 'Audit 5.1, 5.6. The beneficiary form’s meaning says only that it is separate from the will; the cards say "usually" about which of the two decides, and that the rules are local.' }
    ],
    // The one wrong idea this unit marks as wrong: "I'll sort out my will when I'm older". It comes from the old app's own list of claims.
    wrongIdeas: [
      { card: 'refute-willlater', about: 'basicdocs',
        source: { kind: 'app-data', verified: false,
          ref: 'The old app’s own list of claims (WEALTH_ERR item 9): "I’ll sort out my will when I’m older". Verified false by the key’s own words (a handover starts with an illness or an accident as well as with old age, and a paper can be out of date at any age), not by a published source. To be replaced or confirmed by what cold readers actually say.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-lessons.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
