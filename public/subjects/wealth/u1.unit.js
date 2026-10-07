// Wealth Preservation, Unit One: the unit record. This is the subject's GATE UNIT (lesson standard A15) and the subject is an
// ACTION subject (P26): the learner decides what to do with money, so "nothing in the case" is a family taught like the others,
// and every stage of the drill that asks about cases holds a case where nothing could lose the money.
// It teaches the key's first question, "What could lose this money?", and the five families that question sorts cases into.
// In a gate unit the families are the gate's answers: a family's name is its answer text, cards carry `family` where a branch
// unit's cards carry `outcome`, and cases carry route: { D1: [option] } and no outcome (the baseline cases are the one exception,
// see u1.cases-teach-3.js). Cards live in u1.cards-*.js, cases in u1.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {q:D1} {a:D1.option} {when:D1.option} {plain:option} {needs:option} {t:term} {test:ledgerId} {cue:D1}.

FC.unit('wealth', 'u1', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'One',
  title: { text: 'Before you change anything about your money' },
  subtitle: 'Find what could lose it first: a yearly fee, one big risk, a fall in prices, a death or illness, or nothing at all',
  teaches: { steps: ['D1'], outcomes: [], terms: ['pot', 'fund', 'bond', 'mix', 'claim'],
             families: ['erosion', 'timing', 'shock', 'handover', 'none'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER. In a gate unit it pairs families. Seven of the ten pairs are here: the five a beginner confuses first,
  // plus the two that carry the action subject's sound cases (none~handover, none~shock). Each entry is written once and used six
  // ways: the look-alike card, its side-by-side table, the list on the question card, the feedback when one is picked for the
  // other, the grouping of drill items, and what returns together later. `test` is a question to put to a case, with no name in it.
  // A quick lesson (section 19): four pairs have a look-alike card; the other three are taught on the question card (taughtIn).
  ledger: [
    { id: 'erosion~timing', pair: ['erosion', 'timing'], step: 'D1',
      shared: 'In both, money leaves {t:pot}, and a fall in prices may be somewhere in the story.',
      rule: '{a:D1.erosion} is about a sum that leaves every year whatever prices do: a fee, a tax bill, or money spent. {a:D1.timing} is about the day money has to be raised: prices have fallen, or could fall, just when it is needed.',
      test: 'Does a sum leave {t:pot} every year, whatever prices do? Or does money have to be raised on a certain day, with prices down?' },
    { id: 'shock~timing', pair: ['shock', 'timing'], step: 'D1',
      shared: 'In both, prices fall and the person could lose a large part of what they have.',
      rule: 'In {a:D1.shock} the harm comes through one company, one property, one business, one demand for payment or one loan, whatever the rest of the market does. In {a:D1.timing} prices fall everywhere, on a day when the money is needed or after the split has drifted.',
      test: 'Would one thing do the damage even if every other price stayed where it is? Or do prices fall everywhere, on a day when the money is needed?' },
    { id: 'none~timing', pair: ['none', 'timing'], step: 'D1',
      shared: 'In both, the money is invested, and prices may fall.',
      rule: 'In {a:D1.none} nothing is needed from the investments for years, so a fall is only a fall and prices have time to come back. In {a:D1.timing} something is waiting for the money: living costs, a bill on a date, or a mix that has drifted.',
      test: 'When is the money needed? Is something waiting for it, such as living costs, a bill on a date or a drifted mix? Or is nothing needed for years?' },
    { id: 'none~erosion', taughtIn: 'q-gate', pair: ['none', 'erosion'], step: 'D1',
      shared: 'In both, money is being kept in investments over many years, and the person may have no complaint.',
      rule: 'In {a:D1.erosion} the story raises a fee, a tax bill or a sum being spent. In {a:D1.none} it raises none of them: nothing is said about anything coming out.',
      test: 'Does the story say anything about a fee, a tax bill or money taken out? If you cannot find the words, it does not.' },
    { id: 'handover~erosion', taughtIn: 'q-gate', pair: ['handover', 'erosion'], step: 'D1',
      shared: 'In both, money leaves the owner’s hands for someone else: a firm or the tax office in one, family in the other.',
      rule: 'In {a:D1.erosion} something leaves every year, for as long as the money is kept. In {a:D1.handover} what is at stake comes once, when the owner dies or can no longer act: who gets the money, and what is taken first.',
      test: 'Does it come out every year while the owner is alive? Or does it come up once, at a death, an illness or a gift?' },
    { id: 'none~handover', pair: ['none', 'handover'], step: 'D1',
      shared: 'In both, the owner may be well and the money may be in good order.',
      rule: '{a:D1.handover} is the answer whenever the story is about what happens when the owner dies or cannot act, even when every paper is in order. {a:D1.none} is the answer only when the story says nothing about a death, an illness or a gift.',
      test: 'Does the story say anything about a death, a will, a form, an illness or a gift? If you cannot find the words, it does not.' },
    { id: 'none~shock', taughtIn: 'q-gate', pair: ['none', 'shock'], step: 'D1',
      shared: 'In both, the person may hold shares or property, and may feel well off.',
      rule: '{a:D1.shock} shows one thing that is most of what the person has, {t:claim} that could reach all of it, or a loan that could force a sale. {a:D1.none} shows nothing like that: what the person has is spread out, and no demand or loan appears.',
      test: 'Is there one company, property, business, demand for payment or loan that is most of the story? Or is the money spread out, with nothing that could reach all of it?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts (A13). The first two follow the gate's
  // answers in the order the unit teaches them; the part with drill: true is the last, and its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Fees, and prices that fall at the wrong time',
      cards: ['orient-gate', 'term-pot', 'term-fund', 'meet-erosion', 'check-erosion', 'term-bond', 'term-mix', 'meet-timing',
              'check-timing', 'look-erosion-timing'] },
    { id: 'p2', title: 'One big risk, what happens at death, and nothing wrong',
      cards: ['term-claim', 'meet-shock', 'check-shock', 'look-shock-timing', 'meet-handover', 'check-handover', 'meet-none',
              'check-none', 'look-none-timing', 'look-none-handover', 'q-gate'] },
    { id: 'p3', title: 'One whole story, then the drill',
      cards: ['worked-reunion'], drill: true,
      close: ['recap-gate', 'plan-gate'] }
  ],

  // The drill of a gate unit has three stages (A15): piece, route, claim. There is no name stage and no finish stage, because the
  // route is one question long and its answer is the name. Items are authored in groups: cases that share ledger entries and one
  // tier. The app shuffles the groups inside a tier band (clean, then varied, then misleading) and the items inside a group.
  // Every case is new. The drill and return cases of this unit are also the bank that later units draw their { earlier: 'u1' }
  // items from. Every stage that asks about cases holds a case whose answer is "Nothing in the case" (P26, V37).
  drill: {
    key: 'x1',            // the old quick-drill totals for this unit were stored under pl:wealth:stats:x1 (frozen; see E8)
    add: 'Some of these stories show nothing that could lose the money, and some show something that is already looked after. That is on purpose. Saying that nothing could lose the money is one of the five answers, and you will need it as often as the other four.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'd-p-adviser', step: 'D1' }, { case: 'd-p-newjob', step: 'D1' }, { case: 'd-p-will', step: 'D1' }],
                [{ case: 'd-p-sellmonthly', step: 'D1' }, { case: 'd-p-startup', step: 'D1' }],
                [{ tell: 'erosion~timing' }, { tell: 'shock~timing' }, { tell: 'none~timing' }, { tell: 'none~handover' }]] },
      { ask: 'route',
        items: [['d-r-fund-fees', 'd-r-old-will'],
                ['d-r-rental-flat', 'd-r-tuition'],
                ['d-r-mixdrift', 'd-r-fine-papers', 'd-r-spread-pot'],
                ['d-r-company-fall', 'd-r-quiet-year', 'd-r-fixed-drop']] },
      { ask: 'claim', demo: 'c-demo',
        items: [['c-offshore'], ['c-nobuffer']] }
    ],
    // Fresh cases for later days: two for each family, one for each of an action subject's first two returns (E9). A due family
    // returns as a case the learner has not seen, beside a case of the family they most often take it for.
    returns: ['x-erosion-1', 'x-erosion-3', 'x-timing-1', 'x-timing-2', 'x-shock-1', 'x-shock-2',
              'x-handover-1', 'x-handover-2', 'x-none-1', 'x-none-2']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the gate unit of Wealth Preservation. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US accounts, rules and institutions, US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    // What the K2 rewrite changed in the gate, and why (docs/rebuild/wealth-plan.md, section (a)).
    keyChanges: [
      { step: 'D1', was: 'question "What is the main danger to this money?"',
        now: 'question "What could lose this money?"',
        why: 'The old wording asserted a danger, so for a case where nothing is wrong its answer was false (audit 4.5, C.4). "Could" makes the answer say where to look, which is true of sound cases too, and the gate’s why line says so.' },
      { step: 'D1', was: 'four answers: "A slow leak", "One event could wreck it", "Bad timing", "It is lost in the handover"',
        now: 'four answers in one form, each a noun phrase an observer can point to: "Something taken out of it every year", "One thing most of it depends on", "A fall in prices it is not ready for", "The handover to other people"',
        why: 'K2.6 (no figure of speech: "a slow leak", "wreck"), K2.4 (an answer is what an observer can point to; "It is lost" asserts a loss that sound cases do not have), K2.5 (one grammatical form). The old wordings survive once each, as other names shown on the card that introduces the family.' },
      { step: 'D1', was: 'each answer carried a one-line `sub` ("fees, extra tax, overspending")',
        now: 'each answer carries `when`, `plain` and `needs`',
        why: 'A15: in a gate unit the answers are the unit’s families, so each is taught as an outcome is.' },
      { step: 'D1', was: 'four answers, no answer for a case where nothing could lose the money',
        now: 'a fifth answer, "Nothing in the case" (legit, no branch)',
        why: 'A15, K2.9 and V37: a subject whose learner meets sound cases gives the gate an answer for "nothing to name here". The old card’s own test is its rule: can you point to the problem in the words of the case? If you cannot, do not invent one.' },
      { step: 'D1', was: 'the old timing family ended with a contradiction: "forced to act" did not fit a mix that had merely moved',
        now: 'the timing answer ("A fall in prices it is not ready for") covers living costs, a bill on a date and a mix that has moved, and gives way to the shock answer and, in two cases, to the erosion answer',
        why: 'Audit 4.5. The tie-breaks are data in the key (yieldsTo): the question card prints them, and the drill has a case for each.' }
    ],
    wrongIdeas: [],       // the wrong-idea card was cut in the quick lesson; the idea lives on in the offshore claim of the drill and the none~handover and none~timing look-alikes
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
