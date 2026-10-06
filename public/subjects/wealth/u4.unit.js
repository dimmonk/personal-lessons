// Wealth Preservation, Unit Four: the unit record. This is a BRANCH unit (lesson standard A1 to A11): it teaches the key's question
// for the third answer of the gate, "A fall in prices it is not ready for", and the four names that question sorts cases into.
// The subject is an ACTION subject (P26): every portrait says what to do, every stage of the drill that asks about cases holds a case
// where nothing needs doing, the close has the plan card, and each name has four cases kept back for later days.
// Cards live in u4.cards-*.js, cases in u4.cases-*.js. Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.
// Terms taught by Unit One and Unit Two may be printed by token from the first card, because this unit assumes them.

FC.unit('wealth', 'u4', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 4,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Four',
  title: { fromKey: 'D1.timing' },        // a branch unit is titled with the gate answer it teaches
  subtitle: 'Four things a fall in prices can find, or fail to find, in someone’s money, and what to do about each',
  teaches: { steps: ['T1'], outcomes: ['cashbuffer', 'covered', 'ladder', 'rebalance'], terms: ['sequence'] },
  // Unit One teaches the gate and the words its answers are written in. Unit Two is assumed as well, so that the two names it teaches
  // which look like names of this unit (a sum that never changed; a tax bill on a needless sale) can be printed by their answers.
  // Unit Three comes before this unit in the course, and everything it teaches may be used here, though nothing here needs it.
  assumes: ['u1', 'u2', 'u3'],

  // THE LOOK-ALIKE LEDGER. Eight pairs. Four are the pairs of this unit's own questions (the first four); two are pairs whose second
  // member is taught by Unit Two (they are separated by the key's first question, and the key's tie-break between them is taught as an
  // exception); two more are tie-breaks of this unit's own question, between the mix and the two things that need money soon.
  // Each entry is written once and used six ways: the look-alike card, its side-by-side table, the list on the question card, the
  // feedback when one is picked for the other, the grouping of drill items, and what returns together later. `test` has no name in it.
  ledger: [
    { id: 'cashbuffer~covered', pair: ['cashbuffer', 'covered'], step: 'T1',
      shared: 'In both, the people live on money taken out of what they own, and prices have fallen or may fall.',
      rule: 'In {o:cashbuffer} the bills of each month are paid by selling investments, so a fall means selling cheaply. In {o:covered} the bills are paid from money that is not in investments at all, so a fall changes nothing about what is sold.',
      test: 'When the next bills fall due, where does the money for them come from: from selling shares or funds, or from cash or bonds that were put aside for them?' },
    { id: 'ladder~covered', pair: ['ladder', 'covered'], step: 'T1',
      shared: 'In both, a bill of a known size is coming on a known date.',
      rule: 'In {o:ladder} the money for the bill is still in shares or funds, so what it will be worth on the day is anyone’s guess. In {o:covered} the money for the bill is already in cash, or in bonds that repay it by the day, so its worth on the day is fixed.',
      test: 'Where is the money for the bill held, and can its price fall between now and the day the bill is due?' },
    { id: 'rebalance~covered', pair: ['rebalance', 'covered'], step: 'T1',
      shared: 'In both, the person chose how to split their money, and what they hold is not exactly what they chose.',
      rule: 'In {o:rebalance} {t:mix} has moved well outside the limits the person set, so a fall would take more, or less, than they chose. In {o:covered} {t:mix} is still inside its limits, even if it has moved a little, so a fall would take about what they chose.',
      test: 'Does the case give the plan and how far {t:mix} may move from it, and is today’s mix outside that distance?' },
    { id: 'cashbuffer~ladder', pair: ['cashbuffer', 'ladder'], step: 'T1', taughtIn: 'q-why',
      shared: 'In both, money that is needed on particular days is held in shares or funds whose prices can fall.',
      rule: 'In {o:cashbuffer} the need is living costs, month after month, with no end date. In {o:ladder} the need is a bill of a known size, due on a known date, and nothing is needed from the money after it.',
      test: 'Is the money needed for living costs that keep coming, or for one bill of a known size on a known day?' },
    { id: 'burnrate~cashbuffer', pair: ['burnrate', 'cashbuffer'], step: 'D1',
      shared: 'In both, living costs are paid by selling shares or funds, and prices have fallen.',
      rule: 'In {o:burnrate} the sum taken out is the same every year and was set when the money was worth more, so the trouble is the size of the sum against what is left. In {o:cashbuffer} the sum is a fair share of what is left, and the trouble is only that it has to be raised on a bad day.',
      test: 'Is the sum taken out a fair share of what is left, or has it stayed the same while what is left has shrunk? Would it still be a heavy sum if prices stopped falling today?' },
    { id: 'defer~rebalance', pair: ['defer', 'rebalance'], step: 'D1',
      shared: 'In both, {t:mix} has moved away from the plan, and putting it back looks like selling something that has grown.',
      rule: 'In {o:defer} the sale would bring a tax bill on the gain, and new money could put {t:mix} back instead, so the sale is not needed. In {o:rebalance} nothing makes the sale unnecessary: no tax bill is in the way, or it cannot be avoided.',
      test: 'Is a sale planned that would bring a tax bill on what the shares have gained, and could new money put {t:mix} back instead?' },
    { id: 'cashbuffer~rebalance', pair: ['cashbuffer', 'rebalance'], step: 'T1',
      shared: 'In both, the person holds a good deal in shares, and a fall would cost more than they planned.',
      rule: 'In {o:cashbuffer} something is being paid for by selling shares or funds every month, whatever {t:mix} is. In {o:rebalance} the only thing in the case is a mix that has moved: nothing is being sold to pay for anything.',
      test: 'Does the case show shares or funds being sold to pay for something? Or is the only thing in it a mix that has moved?' },
    { id: 'ladder~rebalance', pair: ['ladder', 'rebalance'], step: 'T1', taughtIn: 'q-why',
      shared: 'In both, a fall would take more than the person planned, and in both most of the money is in shares or funds.',
      rule: 'In {o:ladder} a bill of a known size is due on a known date, with its money in shares or funds. In {o:rebalance} no bill is waiting for the money: the only thing in the case is a mix that has moved.',
      test: 'Is a bill of a known size due on a known date, with the money for it in shares or funds? Or is the only thing in the case a mix that has moved?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts (A13). The first two follow the key's
  // answers in the order the unit teaches them; the part with drill: true is the last, and its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Living costs, a bill on a date, and money already safe',
      cards: ['orient', 'term-sequence', 'meet-cashbuffer', 'check-cashbuffer', 'meet-covered', 'check-covered',
              'look-cashbuffer-covered', 'exc-fixedsum', 'meet-ladder', 'check-ladder', 'look-ladder-covered'] },
    { id: 'p2', title: 'A mix that has moved, and telling them apart, then the drill',
      cards: ['meet-rebalance', 'check-rebalance', 'look-rebalance-covered', 'exc-living-mix', 'exc-bonus', 'q-why', 'check-why',
              'worked-hilda'], drill: true, close: ['recap', 'plan'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. Every case is new. Every stage that asks
  // about cases holds a case where nothing needs doing (V37). Items drawn from an earlier unit come only from Unit One's bank.
  drill: {
    key: 'x4',            // the old quick-drill totals for this unit were stored under pl:wealth:stats:x4 (frozen; see E8)
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'p-cb1', step: 'T1' }, { case: 'p-cv1', step: 'T1' }, { case: 'p-ld1', step: 'T1' }, { case: 'p-rb1', step: 'T1' }],
                [{ tell: 'cashbuffer~covered' }, { tell: 'ladder~covered' }, { tell: 'rebalance~covered' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['r-cb1', 'r-cv1', 'r-ld1'],
                ['r-rb1', 'r-cv3'],
                ['r-burn', 'r-cb3'],
                ['r-defer', 'r-rb2'],
                ['r-ld3', 'r-cv4'],
                [{ earlier: 'u1' }]] }
    ],
    // Fresh cases for later days: two for each name, since this is an action subject (E9). A due name returns as a case the learner
    // has not seen, beside a case of the name they most often take it for.
    returns: ['ret-cash-1', 'ret-cash-2', 'ret-safe-1', 'ret-safe-2',
              'ret-bill-1', 'ret-bill-2', 'ret-mix-1', 'ret-mix-2']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit for a fall in prices it is not ready for, in Wealth Preservation. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US accounts, rules and institutions, US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' }
    ],
    // What the K2 rewrite changed in this branch, and why (docs/rebuild/wealth-plan.md, section (a)).
    keyChanges: [
      { step: 'T1', was: 'two questions: "What could force a bad move with this money?" and "What takes the pressure off?"',
        now: 'one question, "Why would a fall in prices hurt this money now?"',
        why: '"Force" contradicted the drift and leave-alone answers (audit 4.5), and the second question restated the outcome name as a sentence and could only be answered from a case that described the fix already applied (K2.2, V55).' },
      { outcome: 'covered', was: 'Matched, "Nowhere: money for a known bill is already matched to it"',
        now: 'Already covered (legit), covering money for a bill or living costs already safe, and a mix within the limits its plan allows',
        why: 'K2.9: a sound case had no honest answer. The old words "match" and "liability" were in no card (audit 4.4, 3.5). The id is now covered; the name "Already covered" is kept.' },
      { step: 'T1', was: 'the order of good and bad years was named only in feedback, after the old card "Why the order of returns matters" (audit 4.1)',
        now: 'a new term, sequence risk, with its own term card and its worked numbers before the first name',
        why: 'Audit 4.1: a learner met the word in a verdict before any card had taught it.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
