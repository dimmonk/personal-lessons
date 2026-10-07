// Wealth Preservation, Unit Five: the unit record. A BRANCH unit (lesson standard A1 to A11) of an ACTION subject (P26): the learner
// decides what to do about money, so one name in this branch is a name for "nothing more needs doing", every stage of the drill that
// asks about cases holds a case with that name, every portrait says what to do, and the unit closes with a plan card.
// It teaches the key's question about the handover, "What could go wrong when it is handed over?", and its five names.
// Cards live in u5.cards-*.js, cases in u5.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('wealth', 'u5', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Five',
  title: { fromKey: 'D1.handover' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Old papers, tax, and the people who get it: how to spot each one before you pay for a fix',
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
      shared: 'Both are about the same three papers, and in both the owner may be well and the family close.',
      rule: 'In {o:basicdocs} one of the papers is missing, or wrong for the person’s life now. In {o:simple} all three are right for it.',
      test: 'Check the three papers one at a time: the will, any beneficiary form held by a 401(k) or IRA provider, an insurer or a bank, and the power of attorney. Is one missing or wrong for the person’s life now, or are all three right for it?' },
    { id: 'gifting~simple', taughtIn: 'q-handover', pair: ['gifting', 'simple'], step: 'H1',
      shared: 'In both, the papers are in order, and the owner may be well off.',
      rule: 'In {o:gifting} what the owner will leave is above the tax-free limit, and they have more than they need. In {o:simple} it is below the limit, or nothing in it is at stake.',
      test: 'Add up everything the owner will leave and compare it with the tax-free limit. Is it above, with more than the owner needs, or below?' },
    { id: 'gifting~trust', pair: ['gifting', 'trust'], step: 'H1',
      shared: 'Both are about tax on what the owner will leave, and in both the estate can be above the tax-free limit.',
      rule: 'In {o:gifting} the tax is on the estate as it stands and nothing in it is about to shoot up in value, so small yearly gifts from spare money cut the bill. In {o:trust} something the owner holds is about to shoot up in value, and the tax on that rise is the bigger problem.',
      test: 'Is anything the owner holds expected to be worth many times more than it is now? If so, that rise decides it. If not, the estate as it stands does.' },
    { id: 'trust~governance', taughtIn: 'q-handover', pair: ['trust', 'governance'], step: 'H1',
      shared: 'Both can end with a trustee holding the money under written terms, and a trustee with a veto can appear in either.',
      rule: 'In {o:trust} the problem is tax on something about to shoot up in value. In {o:governance} the problem is the people who will get the money or run it, and tax is not the issue.',
      test: 'Is the worry a tax bill that a rise in value would make bigger? Or is it what a person will do with the money, or people who cannot agree?' },
    { id: 'basicdocs~governance', taughtIn: 'q-handover', pair: ['basicdocs', 'governance'], step: 'H1',
      shared: 'Both are about family, and in both the person about to get the money may be the one at risk.',
      rule: 'In {o:basicdocs} a paper is missing or wrong for the person’s life now. In {o:governance} the papers are fine, and the worry is a person who will get the money or people who must decide together. If a story shows both, the answer is {a:H1.papers}.',
      test: 'Leave the people aside and check the three papers. If one is missing or wrong, that comes first. If all three are current, look at the people.' },
    { id: 'basicdocs~gifting', pair: ['basicdocs', 'gifting'], step: 'H1',
      shared: 'Both can be about a large estate, and the papers cost far less to fix.',
      rule: 'In {o:gifting} the estate is above the limit, the owner has more than they need, and the papers are fine. In {o:basicdocs} a paper is missing or wrong, however big the estate is. If a story shows both, the answer is {a:H1.papers}.',
      test: 'Before you add up the estate, check the three papers. If one is missing or wrong, that is the answer, however large the sum. If all three are fine, add it up.' },
    { id: 'basicdocs~trust', taughtIn: 'q-handover', pair: ['basicdocs', 'trust'], step: 'H1',
      shared: 'Both can change who ends up with a great deal of money, and both can be about a business or land.',
      rule: 'In {o:trust} something the owner holds is about to shoot up in value, and the tax on the rise is the problem. In {o:basicdocs} a paper is missing or wrong. If a story shows both, the answer is {a:H1.papers}.',
      test: 'Before you look at what is about to rise, check the three papers. If one is missing or wrong, that comes first, however big the rise.' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. The part with drill: true is the last, and
  // its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The three papers',
      cards: ['orient-handover', 'term-benform', 'term-poa', 'meet-basicdocs', 'check-basicdocs',
              'meet-simple', 'check-simple', 'look-basicdocs-simple'] },
    { id: 'p2', title: 'Tax on what you leave',
      cards: ['term-estate', 'meet-gifting', 'check-gifting',
              'term-trustword', 'meet-trust', 'check-trust', 'exc-vineyard'] },
    { id: 'p3', title: 'The people, then the drill',
      cards: ['meet-governance', 'check-governance', 'exc-papers-tax', 'q-handover', 'check-handover-question', 'worked-golfclub'],
      drill: true, close: ['recap-handover', 'plan-handover'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction. Items are authored in groups:
  // cases that share ledger entries and one tier. The app shuffles the groups inside a tier band (clean, then varied, then
  // misleading) and the items inside a group. Every case is new. Every stage that asks about cases holds a case named {o:simple}.
  drill: {
    key: 'x5',            // the old quick-drill totals for this unit were stored under pl:wealth:stats:x5 (frozen; see E8)
    add: 'Some of these stories show all three papers in order, and a stranger offering something to buy. That is on purpose: papers in order, with nothing else in question, is one of the five. Look for the words that show something going wrong. If you cannot find them, do not invent them.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'h-p-flatsale', step: 'H1' }, { case: 'h-p-modest', step: 'H1' }],
                [{ case: 'h-p-shares', step: 'H1' }, { case: 'h-p-farm', step: 'H1' }],
                [{ tell: 'basicdocs~simple' }, { tell: 'gifting~trust' }, { tell: 'basicdocs~gifting' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['h-r-lease', 'h-r-retired'],
                ['h-r-pension', 'h-r-woodland'],
                ['h-r-twins', 'h-r-surgeon'],
                ['h-r-widowfarm', 'h-r-brothers'],
                [{ earlier: 'u1' }]] }
    ],
    // Fresh cases for later days: two for each name, in an action subject (E9). A due name returns as a case the learner has not
    // seen, beside a case of the name they most often take it for.
    returns: ['h-x-papers-1', 'h-x-papers-4',
              'h-x-simple-2', 'h-x-simple-3',
              'h-x-gifting-1', 'h-x-gifting-3',
              'h-x-trust-1', 'h-x-trust-2',
              'h-x-people-1', 'h-x-people-2']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the handover branch of Wealth Preservation. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US accounts, rules and institutions, US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
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
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-lessons.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
