// Political Ideologies, Unit Two: the unit record. The BRANCH UNIT for "working people, against those who own the businesses":
// two questions (what the text says about the businesses, what it wants done with the government) and seven names.
// Cards live in u2.cards-*.js, cases in u2.cases-*.js. Every text in the unit is invented. Text fields never retype key wording;
// they use tokens: {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id}.

FC.unit('ideology', 'u2', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Two',
  title: { fromKey: 'D1.class' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Seven names for a text on the workers’ side, and the two questions that tell them apart',
  teaches: { steps: ['C1', 'C2'], outcomes: ['socdem', 'classonly', 'demsoc', 'ml', 'anarch', 'mktsoc', 'marx'], terms: [] },
  assumes: ['u1'],        // everything Unit One teaches may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER: the sixteen pairs that some answer keeps together, and one more pair learners confuse. Each is written
  // once and used wherever the pair is compared. test is a question to put to a case, with no names in it. step is the first
  // question on which the two share no answer. taughtIn names the card that teaches a pair that has no card of its own.
  ledger: [
    { id: 'socdem~classonly', pair: ['socdem', 'classonly'], step: 'C1',
      shared: 'Both are on the workers’ side, and both can be angry about the same profit and the same low pay.',
      rule: 'In {o:socdem} the text asks for something: a tax, a floor for pay or public services, with the businesses staying where they are. In {o:classonly} the text takes the workers’ side and asks for nothing about the businesses.',
      test: 'Does the text ask the government to do anything about pay, taxes or services, or about who owns the businesses? Or does it only say whose side it is on?' },
    { id: 'socdem~demsoc', pair: ['socdem', 'demsoc'], step: 'C1',
      shared: 'Both ask the government to act for the people who work in the businesses, and both can ask for health care, pensions and fair pay.',
      rule: 'In {o:socdem} the businesses stay with their owners, and the government takes a share of the profit. In {o:demsoc} the businesses, or the biggest of them, pass to the government. A text that asks for both is {o:demsoc}.',
      test: 'Once the government has acted, who owns the business: the same owners as before, or the government?' },
    { id: 'socdem~mktsoc', pair: ['socdem', 'mktsoc'], step: 'C1', taughtIn: 'q-business',
      shared: 'Both leave the businesses selling to customers in a market, and both can speak up for the workers.',
      rule: 'In {o:socdem} the same owners stay in charge. In {o:mktsoc} each business belongs to the people who work in it, and competes with the others.',
      test: 'Who owns each business: the same owners as before, or the people who work in it?' },
    { id: 'socdem~marx', pair: ['socdem', 'marx'], step: 'C1', taughtIn: 'q-business',
      shared: 'Both say that owners gain from what working people do, and both can be written for the workers.',
      rule: 'In {o:socdem} the text asks for something to be done: a tax, a floor for pay, public services. In {o:marx} the text explains how owners come by their profit, as the way the whole system works, and asks for nothing about the businesses.',
      test: 'Does the text ask the government to do something about pay, taxes or services? Or does it explain how owners gain from the work, and stop there?' },
    { id: 'classonly~demsoc', pair: ['classonly', 'demsoc'], step: 'C1', taughtIn: 'q-business',
      shared: 'Both are on the workers’ side, and both can be written in a hurry for a leaflet or a post.',
      rule: '{o:classonly} says nothing about who should own the businesses. {o:demsoc} says they should pass out of the owners’ hands, to the government or to the people who work in them.',
      test: 'Does the text say who should own the businesses? Or does it only say whose side it is on?' },
    { id: 'classonly~mktsoc', pair: ['classonly', 'mktsoc'], step: 'C1', taughtIn: 'q-business',
      shared: 'Both are on the workers’ side, and neither mentions a tax.',
      rule: '{o:classonly} says nothing about who should own the businesses. {o:mktsoc} says each should belong to the people who work in it, and compete with the others.',
      test: 'Does the text say who should own each business, and that the businesses should compete?' },
    { id: 'classonly~marx', pair: ['classonly', 'marx'], step: 'C1',
      shared: 'Both are on the workers’ side, both can mention that owners take a profit, and neither says what to do with the businesses.',
      rule: 'In {o:classonly} the text complains about this owner or this profit. In {o:marx} the text explains why any owner gains from the work, as the way the whole system works.',
      test: 'Is the text about this owner’s choices? Or does it explain why any owner would gain from the work?' },
    { id: 'demsoc~mktsoc', pair: ['demsoc', 'mktsoc'], step: 'C1', taughtIn: 'q-business',
      shared: 'Both take the businesses from their owners, and both can ask for it through elections.',
      rule: 'In {o:demsoc} the businesses pass to the government, or to the people who work in them, and nothing is said about competing. In {o:mktsoc} each business belongs to the people who work in it and competes with the others for customers. A text that says both is {o:mktsoc}.',
      test: 'After the handover, do the businesses compete with each other for customers, set their own prices and risk failing?' },
    { id: 'demsoc~marx', pair: ['demsoc', 'marx'], step: 'C1', taughtIn: 'q-business',
      shared: 'Both can describe how owners gain from the workers’ work, and both stand with the workers.',
      rule: 'In {o:marx} the text explains how owners gain and stops there. In {o:demsoc} the text says the businesses should pass out of the owners’ hands. A text that explains and also asks for the handover is {o:demsoc}.',
      test: 'Does the text say what should happen to the businesses, or does it only explain how owners gain?' },
    { id: 'mktsoc~marx', pair: ['mktsoc', 'marx'], step: 'C1', taughtIn: 'q-business',
      shared: 'Both are on the workers’ side, and both can talk about the owners’ profit.',
      rule: '{o:mktsoc} says what should happen: each business belongs to its workers and competes. {o:marx} explains how owners gain and says nothing about what to do with the businesses.',
      test: 'Does the text say who should own each business, or does it only explain how owners gain?' },
    { id: 'anarch~mktsoc', pair: ['anarch', 'mktsoc'], step: 'C1',
      shared: 'Both want each business to belong to the people who work in it.',
      rule: 'In {o:mktsoc} the businesses compete for customers, set their own prices and can fail, and the text says nothing about getting rid of the government. In {o:anarch} the text says nothing about competing, and wants the government gone.',
      test: 'Once the workers own it, does the business compete with others for customers and risk failing? Or does the text say nothing about that, and want the government gone?' },
    { id: 'demsoc~ml', pair: ['demsoc', 'ml'], step: 'C2',
      shared: 'Both can want the businesses, or the biggest of them, to pass to the government, and both can speak for the workers.',
      rule: 'In {o:demsoc} the change comes through elections that the people asking for it can lose, or the text says nothing about how. In {o:ml} a party or the workers take power by force or rule as the only party, with no election they could lose.',
      test: 'Does the text say that a party, or the workers, will take power by force or rule as the only party? If it says nothing about power, the answer is no.' },
    { id: 'demsoc~anarch', pair: ['demsoc', 'anarch'], step: 'C2', taughtIn: 'q-government',
      shared: 'Both can want each business to belong to the people who work in it.',
      rule: 'In {o:demsoc} the government stays, and elections decide who runs it, or the text says nothing about how the change is made. In {o:anarch} the government is to be got rid of now, with people running their work and their towns together.',
      test: 'Should the government stay, or be done away with now, according to the text?' },
    { id: 'ml~anarch', pair: ['ml', 'anarch'], step: 'C2',
      shared: 'Both can want working people to take control from the owners without waiting for an election.',
      rule: 'In {o:ml} a party takes power for the workers and keeps it, and no rival is allowed. In {o:anarch} the government is got rid of, so that no party and no person holds power over the rest.',
      test: 'After the change, does a party hold power and rule alone? Or is there no government, and people run things together?' },
    { id: 'marx~ml', pair: ['marx', 'ml'], step: 'C2', taughtIn: 'q-government',
      shared: 'Both can set out how owners come by their profit.',
      rule: 'In {o:marx} the text explains and says nothing about who takes power. In {o:ml} the text says a party, or the workers, will take power and keep it, with no rivals allowed.',
      test: 'Does the text say that a party, or the workers, will take power and keep it? Or does it only explain how owners gain?' },
    { id: 'anarch~marx', pair: ['anarch', 'marx'], step: 'C2', taughtIn: 'q-government',
      shared: 'Both can set out how owners come by their profit, and both are written for the workers.',
      rule: 'In {o:marx} the text explains and leaves the government as it is, or says nothing about it. In {o:anarch} the text wants the government got rid of now, whether or not it explains.',
      test: 'Besides the explanation, does the text say that the government should be done away with, now?' },
    { id: 'classonly~ml', pair: ['classonly', 'ml'], step: 'C2',
      shared: 'Both can say nothing about what should happen to the businesses, and both stand with the workers.',
      rule: '{o:classonly} says nothing about the government. {o:ml} says a party, or the workers, will take power and keep it, even when it says nothing about the businesses.',
      test: 'Does the text say anything about who will hold power, or how? If it says a party will take power and rule alone, the answer is yes.' },
    { id: 'classonly~anarch', pair: ['classonly', 'anarch'], step: 'C2', taughtIn: 'q-government',
      shared: 'Both can say nothing about what should happen to the businesses, and both stand with the workers.',
      rule: '{o:classonly} says nothing about the government. {o:anarch} wants the government got rid of, even when it says nothing about the businesses.',
      test: 'Does the text say anything about the government itself: that it should be kept, or done away with?' }
  ],

  // Parts are stopping points. They follow the answers of the key's question about the businesses (A13).
  parts: [
    { id: 'p1', title: 'Owners keep the businesses, nothing is said, or the government takes over',
      cards: ['orient', 'meet-socdem', 'check-socdem', 'meet-classonly', 'check-classonly', 'look-socdem-classonly',
              'meet-demsoc', 'check-demsoc', 'look-socdem-demsoc', 'meet-ml', 'check-ml', 'look-demsoc-ml', 'exc-bulletin'] },
    { id: 'p2', title: 'Workers own the businesses, an explanation, and the two questions',
      cards: ['meet-anarch', 'check-anarch', 'look-ml-anarch', 'meet-mktsoc', 'check-mktsoc', 'look-anarch-mktsoc',
              'meet-marx', 'check-marx', 'look-classonly-marx',
              'q-business', 'check-business', 'q-government', 'check-government', 'worked-docks'], drill: true, close: ['recap'] }
  ],

  // The drill: the stages that carry the skill. Items are authored in groups of look-alikes. Every case is new.
  drill: {
    key: 'u2',            // the old quick-drill totals for this unit were stored under pl:ideology:stats:u2 (frozen; see E8)
    add: 'Some of these texts say nothing about the businesses, and some say nothing about the government. That is on purpose: {a:C1.none} is a real answer to each question, and a text that says nothing about either is {o:classonly}.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'c-p-keep', step: 'C1' }, { case: 'c-p-none1', step: 'C1' }],
                [{ case: 'c-p-public', step: 'C1' }, { case: 'c-p-market', step: 'C1' }],
                [{ case: 'c-p-workers', step: 'C1' }, { case: 'c-p-explain', step: 'C1' }],
                [{ case: 'c-p-seize', step: 'C2' }, { case: 'c-p-vote', step: 'C2' }],
                [{ case: 'c-p-gone', step: 'C2' }, { case: 'c-p-none2', step: 'C2' }],
                [{ tell: 'socdem~classonly' }, { tell: 'classonly~marx' }]] },
      { ask: 'route',
        items: [['c-r-sd1', 'c-r-co1', 'c-r-mx1'],
                ['c-r-dm1', 'c-r-ml1'],
                ['c-r-an1', 'c-r-mk1'],
                ['c-r-sd2', 'c-r-dm2'],
                ['c-r-ml2', 'c-r-mx2'],
                [{ earlier: 'u1' }]] }
    ],
    // Fresh cases for later days: one for each name (E9). A due name returns as a case the learner has not seen,
    // beside a case of the name they most often take it for.
    returns: ['c-ret-sd1', 'c-ret-co1', 'c-ret-dm1', 'c-ret-ml1', 'c-ret-an1', 'c-ret-mk1', 'c-ret-mx1']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit for the first answer of the gate. Two questions and seven names, one bakery as the lens, seventeen look-alike pairs. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    // What changed in the key for this branch, and why (K2). Old wording is the app's wording before the rebuild
    // (public/subjects/ideology/standard0.js); the full table is docs/rebuild/ideology-plan.md, part a.
    keyChanges: [
      { step: 'C1', was: 'Q1 "Who should own the farms, factories, shops and banks?", asked of every text, six answers, the last "The text does not say" (which kept every name)',
        now: '"What does the text say about the farms, factories, shops and banks?", asked only of a text on the workers’ side: owners keep them and taxes even things out; to the government; to the people who work in each one; the same and competing; an explanation of how owners gain; the text does not say',
        why: 'K2.2: one name is defined by an explanation, not an owner, so the question asks what the text says. "Private owners left alone" and "steered by the state" kept no name here and were removed; "The workers themselves" was split by whether the businesses compete.' },
      { step: 'C2', was: 'no question: a check on each name’s card (does a party lead, are there elections, is there no state)',
        now: '"What does the text want done with the government?": seize power; keep it and run it by whoever wins elections; get rid of it; the text does not say',
        why: 'K2.2: separates the name for a ruling party from public ownership by a vote, and no government from workers owning by a vote. A check the key never asked cannot be taught or scored. The key’s decision, said on its card: public ownership with no word on how is filed under Democratic socialism.' },
      { outcome: 'classonly', was: 'no name for a text that only took the workers’ side', now: 'Class politics with nothing attached',
        why: 'K2.9: the commonest text on the workers’ side says nothing about the businesses or the government.' },
      { outcome: 'demsoc', was: 'decided by a check on elections', now: 'needs a handover, no party seizing power, no getting rid of the government; elections, or no word on how',
        why: 'K2.8: the key’s decision, said plainly on the cards.' },
      { outcome: 'ml', was: '"Marxism–Leninism" (an en dash), decided by a check on whether a party rules', now: '"Marxism-Leninism", needing power taken by force or held as the only party',
        why: 'V1: no en dash. K2.4: a party ruling alone is something a text says.' },
      { outcome: 'mktsoc', was: 'could not be told from three other names', now: 'one answer of its own: workers own, and the businesses compete',
        why: 'K2.2: it is defined by firms that compete.' },
      { outcome: 'marx', was: 'kept by "The text does not say" and recognized by a check', now: 'an answer of its own: the text explains how owners gain; it yields to any plan',
        why: 'K2.2: what decides it is now an answer the learner gives.' },
      { outcome: 'socdem', was: '"Private owners, with the state evening things out"', now: '"Their owners keep them, and taxes and public services even out what people get"',
        why: 'Audit U1 item 5: the old wording made "Business will continue to be privately owned" answer literally to an option that left no name.' },
      { outcome: 'anarch', was: 'decided by a check on whether a state remains', now: 'decided by the question about the government: get rid of it, now',
        why: 'K2.2: separates it from Democratic socialism, which also keeps the answer for workers who own.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
