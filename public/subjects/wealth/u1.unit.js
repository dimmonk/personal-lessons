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
  rev: 1,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'One',
  title: { text: 'What could lose the money' },
  subtitle: 'The key’s first question, and the five kinds of case it sorts every account of someone’s money into',
  teaches: { steps: ['D1'], outcomes: [], terms: ['pot', 'share', 'fund', 'bond', 'mix', 'claim'],
             families: ['erosion', 'timing', 'shock', 'handover', 'none'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER. In a gate unit it pairs families. Seven of the ten pairs are here: the five a beginner confuses first,
  // plus the two that carry the action subject's sound cases (none~handover, none~shock). Each entry is written once and used six
  // ways: the look-alike card, its side-by-side table, the list on the question card, the feedback when one is picked for the
  // other, the grouping of drill items, and what returns together later. `test` is a question to put to a case, with no name in it.
  ledger: [
    { id: 'erosion~timing', pair: ['erosion', 'timing'], step: 'D1',
      shared: 'In both, money leaves {t:pot} because of how the person pays for their life, and a fall in prices can be somewhere in the story.',
      rule: '{a:D1.erosion} is about what leaves every year whatever prices do: a charge, a tax bill, or a sum spent. {a:D1.timing} is about the day things have to be sold: prices have fallen, or could fall, just when the money is needed.',
      test: 'Is the case about how much leaves {t:pot} each year, whatever prices do? Or is it about the days when things have to be sold, because prices have fallen just when the money is needed?' },
    { id: 'shock~timing', pair: ['shock', 'timing'], step: 'D1',
      shared: 'In both, a fall in prices is part of the story, and the person could lose a large part of what they have.',
      rule: 'In {a:D1.shock} the harm comes through one company, one property, one business, one demand in a lawsuit or one loan, and could happen whatever the rest of the market does. In {a:D1.timing} the harm comes from prices falling in general, on a day when the money is needed or the split has moved.',
      test: 'Would one thing do the damage even if every other price stayed where it is? Or is the damage done by prices falling across the board, on a day when the money is needed?' },
    { id: 'none~timing', pair: ['none', 'timing'], step: 'D1',
      shared: 'In both, the money is invested, and prices may fall.',
      rule: 'In {a:D1.none} no money is needed from the investments for years and no plan has been drifted from, so a fall is only a fall and there is time for prices to come back. In {a:D1.timing} the case shows something a fall would catch: living costs, a bill on a date, or a mix that has moved.',
      test: 'When is the money needed? Does the case show living costs, a bill on a date, or a mix that has moved, that a fall would catch? Or is nothing needed from it for years?' },
    { id: 'none~erosion', pair: ['none', 'erosion'], step: 'D1',
      shared: 'In both, money is being kept in investments over many years, and the person may have no complaint.',
      rule: 'In {a:D1.erosion} the case raises a charge, a tax bill or a sum being spent. In {a:D1.none} it raises none of them: nothing is said about anything that comes out.',
      test: 'Does the case say anything about a charge, a tax bill or a sum taken out? If you cannot point to the words, it does not.' },
    { id: 'handover~erosion', pair: ['handover', 'erosion'], step: 'D1',
      shared: 'In both, money leaves the owner’s hands for someone else: a firm or the tax office in one, family in the other.',
      rule: 'In {a:D1.erosion} something leaves every year, for as long as the money is kept. In {a:D1.handover} what is at stake comes once, when the owner dies or can no longer act, and it depends on who gets the money and what is taken first.',
      test: 'Does it come out every year while the owner is alive? Or does it arise once, at a death, an illness or a gift?' },
    { id: 'none~handover', pair: ['none', 'handover'], step: 'D1',
      shared: 'In both, the owner may be well and the money may be in good order.',
      rule: '{a:D1.handover} is the answer whenever the case is about what happens when the owner dies or cannot act, even when every paper is in order. {a:D1.none} is the answer only when the case says nothing about a death, an illness or a gift.',
      test: 'Does the case say anything about a death, a will, a form, an illness or a gift? If you cannot point to the words, it does not.' },
    { id: 'none~shock', pair: ['none', 'shock'], step: 'D1',
      shared: 'In both, the person may hold shares or property, and may feel well off.',
      rule: '{a:D1.shock} shows one thing that is most of what the person has, or {t:claim} or a loan that could reach all of it. {a:D1.none} shows nothing of the kind: what the person has is spread out, and no claim or loan is in the case.',
      test: 'Is there one company, property, business, claim or loan that is most of the case? Or is it spread, with nothing in it that could reach everything?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts (A13). The first two follow the gate's
  // answers in the order the unit teaches them; the part with drill: true is the last, and its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Money going out, and the day it is needed',
      cards: ['orient-gate', 'term-pot', 'term-share', 'term-fund', 'meet-erosion', 'again-erosion', 'lens-gate', 'portrait-erosion',
              'check-erosion', 'term-bond', 'term-mix', 'meet-timing', 'again-timing', 'portrait-timing', 'check-timing',
              'look-erosion-timing', 'exc-fixedsum'] },
    { id: 'p2', title: 'One thing, and the handover',
      cards: ['term-claim', 'meet-shock', 'again-shock', 'portrait-shock', 'check-shock', 'look-shock-timing', 'exc-retired',
              'meet-handover', 'again-handover', 'portrait-handover', 'check-handover', 'look-handover-erosion'] },
    { id: 'p3', title: 'A case with nothing to name',
      cards: ['meet-none', 'again-none', 'portrait-none', 'check-none', 'refute-offshore', 'look-none-timing', 'look-none-erosion',
              'look-none-handover', 'look-none-shock'] },
    { id: 'p4', title: 'The key’s first question, two whole cases, then the drill',
      cards: ['q-gate', 'check-gate', 'worked-employer', 'worked-reunion'], drill: true,
      close: ['recap-gate', 'transfer-gate', 'plan-gate'] }
  ],

  // The drill of a gate unit has three stages (A15): piece, route, claim. There is no name stage and no finish stage, because the
  // route is one question long and its answer is the name. Items are authored in groups: cases that share ledger entries and one
  // tier. The app shuffles the groups inside a tier band (clean, then varied, then misleading) and the items inside a group.
  // Every case is new. The drill and return cases of this unit are also the bank that later units draw their { earlier: 'u1' }
  // items from. Every stage that asks about cases holds a case whose answer is "Nothing in the case" (P26, V37).
  drill: {
    key: 'x1',            // the old quick-drill totals for this unit were stored under pl:wealth:stats:x1 (frozen; see E8)
    add: 'Some of these cases show nothing that could lose the money, and some show a thing that is real and is already looked after or does not matter. That is on purpose. Saying that nothing could lose the money is one of the five answers, and in real life you will need it as often as the other four. Look for the words that raise something. If you cannot point to them, do not invent them.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'd-p-adviser', step: 'D1' }, { case: 'd-p-newjob', step: 'D1' }],
                [{ case: 'd-p-sellmonthly', step: 'D1' }, { case: 'd-p-startup', step: 'D1' }],
                [{ case: 'd-p-will', step: 'D1' }, { case: 'd-p-quietpot', step: 'D1' }],
                [{ case: 'd-p-taxbill', step: 'D1' }, { case: 'd-p-school', step: 'D1' }],
                [{ tell: 'erosion~timing' }, { tell: 'shock~timing' }, { tell: 'none~timing' }, { tell: 'none~erosion' },
                 { tell: 'handover~erosion' }, { tell: 'none~handover' }, { tell: 'none~shock' }],
                ['d-rev-erosion', 'd-rev-timing', 'd-rev-shock', 'd-rev-handover', 'd-rev-none']] },
      { ask: 'route',
        items: [['d-r-fund-fees', 'd-r-steady'],
                ['d-r-rental-flat', 'd-r-tuition', 'd-r-withdraw-fall'],
                ['d-r-old-will', 'd-r-yearly-tax', 'd-r-heirs'],
                ['d-r-mixdrift', 'd-r-longterm-fall'],
                ['d-r-fine-papers', 'd-r-calm-saver'],
                ['d-r-loan-call', 'd-r-spread-pot'],
                ['d-r-company-fall', 'd-r-quiet-year'],
                ['d-r-fixed-drop', 'd-r-gifts']] },
      { ask: 'claim', demo: 'c-demo',
        items: [['c-offshore'], ['c-nobuffer'], ['c-employer']] }
    ],
    // Fresh cases for later days: four for each family, one for each of its scheduled returns (E9; an action subject adds the
    // fourth, at about twelve weeks). A due family returns as a case the learner has not seen, beside a case of the family they
    // most often take it for.
    returns: ['x-erosion-1', 'x-erosion-2', 'x-erosion-3', 'x-erosion-4',
              'x-timing-1', 'x-timing-2', 'x-timing-3', 'x-timing-4',
              'x-shock-1', 'x-shock-2', 'x-shock-3', 'x-shock-4',
              'x-handover-1', 'x-handover-2', 'x-handover-3', 'x-handover-4',
              'x-none-1', 'x-none-2', 'x-none-3', 'x-none-4']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the gate unit of Wealth Preservation. Not yet deployed, so later edits before the first deploy stay revision 1.' }
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
        why: 'Audit 4.5. The tie-breaks are data in the key (yieldsTo) and are taught as the two exception cards of this unit.' }
    ],
    wrongIdeas: [
      { card: 'refute-offshore', about: 'D1',
        source: { kind: 'app-data', verified: false,
          ref: 'The old app’s own list of claims (WEALTH_ERR item 2): "you need offshore structures and a private bank". Verified false by the key’s own order (a fix is chosen only after the first question is answered), not by a published source. To be replaced or confirmed by what cold readers actually say.' } }
    ],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
