// Wealth Preservation, Unit Two: the unit record. This is the first BRANCH unit of the subject (lesson standard A13): it teaches the
// key's second question for cases where the gate's answer was "Something taken out of it every year", and the six names that
// question sorts them into. The subject is an ACTION subject (P26): every portrait says what to do, every stage of the drill that
// asks about cases holds a case where nothing needs cutting back, and a plan card closes the unit. Cards live in u2.cards-*.js,
// cases in u2.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('wealth', 'u2', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 2,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Two',
  title: { fromKey: 'D1.erosion' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Six things that can take money out of a person’s savings every year, how to tell which one you are looking at, and when nothing needs cutting back',
  teaches: { steps: ['E1'], outcomes: ['feecore', 'nocut', 'location', 'defer', 'harvest', 'burnrate'],
             terms: ['compounding', 'indexfund', 'sheltered', 'gain'] },
  assumes: ['u1'],        // everything Unit One teaches may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse (the five the plan lists). Each entry is written once and
  // used six ways: the look-alike card ("how to tell them apart"), its side-by-side table, the list on the question card, the feedback
  // when one is picked for the other, the grouping of drill items, and what returns together later. test is a question to put to a
  // case, with no names in it. An entry is taught by the look-alike card that names it. Its rule is never shown in feedback before
  // that card has been read.
  ledger: [
    { id: 'feecore~nocut', pair: ['feecore', 'nocut'], step: 'E1',
      shared: 'In both, a firm or an adviser is paid out of {t:pot} every year, and the person may have no complaint about it.',
      rule: 'In {o:feecore} the charge is for choosing investments and for nothing else, and it is a percentage of {t:pot}, so it grows when {t:pot} does. In {o:nocut} the charge is for named work that would not otherwise get done, at a set price that does not grow with {t:pot}.',
      test: 'If the charge stopped, what important job would stop being done? Can you point to that job in the case, and to a price that stays the same when {t:pot} grows?' },
    { id: 'location~defer', pair: ['location', 'defer'], step: 'E1',
      shared: 'Both are tax on money invested in an ordinary account, and in both the tax could be smaller.',
      rule: 'In {o:location} the tax is on income that the investments pay out every year, so it comes whether or not anything is sold. In {o:defer} the tax is on {t:gain}, and it comes only because a sale is planned.',
      test: 'Does the tax arrive every year without anyone selling anything? Or would it arrive only if something were sold?' },
    { id: 'defer~harvest', pair: ['defer', 'harvest'], step: 'E1',
      shared: 'Both are about tax on {t:gain} that comes with a sale.',
      rule: 'In {o:defer} the sale is only planned and nothing needs it, so holding off removes the tax. In {o:harvest} a sale has already made {t:gain} that will be taxed this year, and another investment, not yet sold, is worth less than it cost, so selling that one lowers the tax.',
      test: 'Has something already been sold this year at {t:gain}? And is another investment, not yet sold, worth less than was paid for it?' },
    { id: 'location~nocut', pair: ['location', 'nocut'], step: 'E1',
      shared: 'In both, the person holds a pension and an ordinary account, and one of the funds pays out a good deal of income every year.',
      rule: 'In {o:location} the investment paying out the most is held in the taxed account, so tax is charged on it each year. In {o:nocut} it already sits in {t:sheltered}, and what is taxed is the investment that pays out little.',
      test: 'Which account holds the investment that pays out the most income each year: the taxed one or the sheltered one?' },
    { id: 'burnrate~nocut', pair: ['burnrate', 'nocut'], step: 'E1',
      shared: 'In both, a sum is taken out of {t:pot} every year to spend.',
      rule: 'In {o:burnrate} the sum is a fixed number of pounds, set when {t:pot} was worth more, so it becomes a bigger share as {t:pot} shrinks. In {o:nocut} the sum is worked out again each year as a percentage of what {t:pot} is worth now, so it falls when {t:pot} falls.',
      test: 'Is the sum the same number of pounds as in earlier years, or worked out again each year from what {t:pot} is worth now?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts (A13). The key asks one question here, so the
  // parts group the six names by what a learner notices first: a charge, a tax bill, or a sum spent. The part with drill: true is the
  // last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'A charge, and when paying it is right',
      cards: ['orient', 'term-compounding', 'term-indexfund', 'meet-feecore', 'again-feecore', 'lens', 'portrait-feecore', 'check-feecore',
              'refute-adviser', 'term-sheltered', 'meet-nocut', 'again-nocut', 'portrait-nocut', 'check-nocut', 'look-feecore-nocut'] },
    { id: 'p2', title: 'Tax',
      cards: ['meet-location', 'again-location', 'portrait-location', 'check-location', 'look-location-nocut', 'term-gain',
              'meet-defer', 'again-defer', 'portrait-defer', 'check-defer', 'look-location-defer',
              'meet-harvest', 'again-harvest', 'portrait-harvest', 'check-harvest', 'look-defer-harvest'] },
    { id: 'p3', title: 'A sum spent, and the question',
      cards: ['meet-burnrate', 'again-burnrate', 'portrait-burnrate', 'check-burnrate', 'look-burnrate-nocut', 'q-erosion', 'check-erosion'] },
    { id: 'p4', title: 'Two whole cases, then the drill',
      cards: ['worked-accounts', 'worked-planner'], drill: true, close: ['recap', 'transfer', 'plan'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction. Items are authored in
  // groups: a group is cases that share ledger entries and one tier. The app shuffles the groups inside a tier band (clean, then varied,
  // then misleading) and shuffles inside each group. Every case is new. Every stage that asks about cases holds a case where nothing
  // needs cutting back (P26, V37).
  drill: {
    key: 'x2',            // the old quick-drill totals for this unit were stored under pl:wealth:stats:x2 (frozen; see E8)
    add: 'Some of these cases show a charge, a tax bill or a sum spent that is fine as it is. That is on purpose: one of the six answers is that nothing needs cutting back, and in real life you will need it as often as the others. Look for the words that show the problem. If you cannot point to them, do not invent them.',
    rungs: [
      { ask: 'name',
        items: [['e-d-fee', 'e-d-flat'],
                ['e-d-inc', 'e-d-sale', 'e-d-offset', 'e-d-shelter'],
                ['e-d-sum', 'e-d-pct']] },
      { ask: 'piece',
        items: [[{ case: 'e-p-fee', step: 'E1' }, { case: 'e-p-flat', step: 'E1' }],
                [{ case: 'e-p-inc', step: 'E1' }, { case: 'e-p-shelter', step: 'E1' }],
                [{ case: 'e-p-gain', step: 'E1' }, { case: 'e-p-loss', step: 'E1' }],
                [{ tell: 'feecore~nocut' }, { tell: 'location~defer' }, { tell: 'defer~harvest' }, { tell: 'location~nocut' }, { tell: 'burnrate~nocut' }],
                ['e-rev-feecore', 'e-rev-nocut', 'e-rev-location', 'e-rev-defer', 'e-rev-harvest', 'e-rev-burnrate'],
                [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['e-f-burn', 'e-f-pct'], ['e-f-def', 'e-f-har']] },
      { ask: 'route',
        items: [['e-r-fee-1', 'e-r-nocut-1'], ['e-r-loc-1', 'e-r-nocut-2'], ['e-r-def-1', 'e-r-har-1'],
                ['e-r-burn-1', 'e-r-nocut-3'], ['e-r-loc-2', 'e-r-def-2'],
                ['e-r-fee-2', 'e-r-nocut-4'], ['e-r-def-3', 'e-r-har-2'], ['e-r-burn-2', 'e-r-nocut-5'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'e-claim-demo',
        items: [['e-claim-tax'], ['e-claim-whole'], ['e-claim-loss']] }
    ],
    // Fresh cases for later days: four for each name, one for each of its scheduled returns (E9; an action subject adds the fourth, at about
    // twelve weeks). A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['e-ret-fee-1', 'e-ret-fee-2', 'e-ret-fee-3', 'e-ret-fee-4',
              'e-ret-nocut-1', 'e-ret-nocut-2', 'e-ret-nocut-3', 'e-ret-nocut-4',
              'e-ret-loc-1', 'e-ret-loc-2', 'e-ret-loc-3', 'e-ret-loc-4',
              'e-ret-def-1', 'e-ret-def-2', 'e-ret-def-3', 'e-ret-def-4',
              'e-ret-har-1', 'e-ret-har-2', 'e-ret-har-3', 'e-ret-har-4',
              'e-ret-burn-1', 'e-ret-burn-2', 'e-ret-burn-3', 'e-ret-burn-4']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the first branch unit of Wealth Preservation, for the gate answer "Something taken out of it every year". Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' }
    ],
    // What the K2 rewrite changed in this branch of the key, and why (docs/rebuild/wealth-plan.md, section (a)).
    keyChanges: [
      { step: 'E1', was: 'two questions: "Where is the money leaking out?" and "What fixes that leak?"',
        now: 'one question, "What is taking money out of it?", with six answers',
        why: 'The first was a metaphor (K2.6). The second restated the outcome name as a sentence and could only be answered from a case that described the fix already applied (audit C.2, 7.4, 7.6), and every one of its answers kept one name, so the first question decided nothing (K2.2, V55). What the first question sorted survives as the grouping of the unit\'s parts.' },
      { outcome: 'feecore', was: '"In fees: what the funds, adviser and platform charge" (it fitted the sound flat-fee case as well)',
        now: '"A yearly charge for picking investments"',
        why: 'The old answer could not separate the pair this branch exists to separate. The new one names what the charge pays for, which is the difference (old test: "if you stopped paying, what important thing would stop happening?").' },
      { outcome: 'location, defer, harvest', was: 'one tax answer, "In tax: paid sooner or more often than it had to be", for three names',
        now: 'three answers: tax on income from investments in the taxable account, tax on a sale that does not have to happen, tax on this year\'s gain while another investment sits below what it cost',
        why: 'The old answer did not fit income taxed every year (audit 2.6), and three names under one answer left the old second question to do all the work.' },
      { outcome: 'burnrate', was: '"In withdrawals: more is taken out than the pot can carry"',
        now: '"The same sum taken out every year from a pot that has shrunk"',
        why: '"More than the pot can carry" cannot be pointed to; the fixed sum and the shrunk pot can.' },
      { outcome: 'nocut', was: '"A cost worth paying" (charges only), with answers that contradicted its own card (audit 2.13)',
        now: '"Nothing to cut back", covering a charge for real work at a set price, income investments already in the sheltered account, and spending already reset each year as a percentage of the pot',
        why: 'K2.9: sound withdrawal and tax cases had no answer once the fix-already-applied specimens became situations. The old name survives once, as other words real life uses.' },
      { outcome: 'burnrate, location, defer, harvest, feecore', was: '"realise", "basis", "wrapper", "core", "the draw", "burn rate"',
        now: 'replaced by "sold" and "not sold", "what was paid for it", "sheltered account", "index fund"',
        why: 'Section 11 and audit 2.3, 2.5. New terms taught on their own cards: an index fund, a sheltered account, a gain, compounding.' }
    ],
    wrongIdeas: [
      { card: 'refute-adviser', about: 'feecore',
        source: { kind: 'app-data', verified: false,
          ref: 'The old app\'s own list of claims (WEALTH_ERR item 10): "a good adviser picks funds that beat the market, so a high fee is worth it". Verified false by the card\'s own arithmetic (the fee is certain; beating the list is a hope that must first cover the fee), not by a published count. A published source on how many actively managed funds trail their index after charges still has to be found and confirmed before release.' } }
    ],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
