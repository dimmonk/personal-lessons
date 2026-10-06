// Civics, Unit Three: the unit record. This is the subject's CONGRESS BRANCH unit (lesson standard A13, S2).
// It teaches the branch question for the first gate answer, "What does Congress do in the case?", and the five names
// that question leads to. The gate (Unit One) is assumed: every case here has the first question's answer, Congress, and
// the cards print the gate's answers from the key and never retype them. Cards live in u3.cards-*.js, cases in u3.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('civics', 'u3', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 4,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Three',
  title: { fromKey: 'D1.congress' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Five things Congress does, and how to tell which one you are looking at',
  teaches: { steps: ['C1'], outcomes: ['enumerated', 'beyondcong', 'purse', 'confirm', 'impeach'], terms: ['treaty'] },
  assumes: ['u1', 'u2'],  // everything Unit One teaches may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse (plan, section b: u3 holds three).
  // Each entry is written once and used six ways: the look-alike card ("how to tell them apart"), its side-by-side
  // table, the list on the question card, the feedback when one is picked for the other, the grouping of drill items,
  // and what returns together later. test is a question to put to a case, with no names in it.
  // An entry is taught by the look-alike or exception card that names it (card.ledger), or by the card in taughtIn.
  // Its rule is never shown in feedback before that card has been read.
  ledger: [
    { id: 'enumerated~beyondcong', pair: ['enumerated', 'beyondcong'], step: 'C1',
      shared: 'In both, Congress passes a law with every vote in order: both chambers say yes. The vote cannot tell them apart, and neither can the story, because laws of both kinds can be about anything from mail to schools.',
      rule: 'In {o:enumerated} the matter is one the Constitution lists for Congress, and the law takes away no right the Constitution protects. In {o:beyondcong} either the matter is not on the list, or the law takes away a right. One of those two is enough.',
      test: 'Is the matter the law is about on the Constitution’s list for Congress? And does the law take away anyone’s right to speak, to worship, to publish or to gather peacefully?' },
    { id: 'enumerated~purse', pair: ['enumerated', 'purse'], step: 'C1',
      shared: 'Both are about money, and both can be a bill that passes both chambers. A tax raises money by law, and a spending bill is a law too.',
      rule: 'In {o:enumerated} Congress passes a law on a listed matter, a tax for example. In {o:purse} Congress decides whether the government may spend money on something. When one bill does both, the answer is {a:C1.money}.',
      test: 'Is Congress raising money, or setting some other rule? Or is it deciding whether the government may spend money on something: voting it, cutting it or leaving it out?' },
    { id: 'confirm~impeach', pair: ['confirm', 'impeach'], step: 'C1',
      shared: 'Both are votes in the Senate about a person who works for the government of the whole country, and the same judge or department head can be in both.',
      rule: 'In {o:confirm} the Senate votes on a person, or an agreement, that the President has put forward, before the person starts the job. In {o:impeach} the official already holds the job and is accused of serious misconduct, and the vote is on the charge.',
      test: 'Has the person already got the job, and is the vote about something they are accused of doing? Or has the President only just put the person forward for the job?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Laws, and money',
      cards: ['orient', 'meet-enumerated', 'check-enumerated',
              'meet-beyondcong', 'check-beyondcong', 'look-enumerated-beyondcong',
              'meet-purse', 'check-purse', 'look-enumerated-purse'] },
    { id: 'p2', title: 'Votes on people, and the question, then the drill',
      cards: ['term-treaty', 'meet-confirm', 'check-confirm',
              'meet-impeach', 'check-impeach', 'look-confirm-impeach',
              'q-congress', 'check-congress', 'worked-mint'], drill: true, close: ['recap-congress'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  // Items from Unit One's bank come only as { earlier: 'u1' }: the other units are written at the same time as this one.
  drill: {
    key: 'u3',            // a new counter: the old Unit Three drill (n3, the chambers) moves to the fact unit u7, so this unit does not take its key
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'pc-borrow', step: 'C1' }, { case: 'pc-speech', step: 'C1' }],
                [{ case: 'pc-fire', step: 'C1' }, { case: 'pc-trial', step: 'C1' }],
                [{ tell: 'enumerated~beyondcong' }, { tell: 'enumerated~purse' }, { tell: 'confirm~impeach' }]] },
      { ask: 'route',
        items: [['r-citizen', 'r-paint', 'r-ferries'],
                ['r-nominee', 'r-prosecutor'],
                ['r-envoy', 'r-lies'],
                ['r-signed', 'r-ships'],
                [{ earlier: 'u1' }]] }
    ],
    // Fresh cases for later days: two for each name, as civics is an action subject (E9). A due name returns as a case
    // the learner has not seen, beside a case of the name they most often take it for.
    returns: ['ret-tea', 'ret-recruits', 'ret-textbooks', 'ret-rally', 'ret-trails',
              'ret-bridges', 'ret-nurse', 'ret-pact', 'ret-inspector', 'ret-contracts']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the Congress branch of Civics. It replaces the Congress part of old Unit Three (two questions, five names, the side-by-side table and the budget-fight worked case) and old specimens 1, 5, 9, 13 and 17. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' }
    ],
    // What the K2 rewrite changed in the key for this branch, and why (docs/rebuild/civics-plan.md, section a).
    // "was" is the wording of the old course.
    keyChanges: [
      { step: 'C1', was: 'Two questions: "What is Congress doing?" (four answers) and "Which rule decides whether Congress can do this?" (five answers, each keeping one name)',
        now: 'one question, "What does Congress do in the case?", with five answers',
        why: 'V55: every answer of the second question kept exactly one name, so the first did no work for four of the five. "Allowed or not" only exists for a law, so it is one pair of answers of one question and not a second question. A two-question version was tried: its "yes" answer kept four names, so V15 would have demanded six look-alike pairs that no learner confuses. K2.2: a branch whose names are each defined by one thing has one question.' },
      { step: 'C1', was: '"Writing a rule that binds the whole country" and "The Constitution lists this power for Congress" / "No listed power covers it, or a right forbids it"',
        now: '"Passes a law on a matter the Constitution lists for it" and "Passes a law the Constitution does not let it pass"; each answer\'s `when` lists the matters (taxes, borrowing, trade, citizenship rules, money, the mail, war and the armed forces, the federal courts) and the rights (speak, worship, publish, gather)',
        why: 'K2.4: the answer must be readable from the case. With the list in `when`, the learner matches the case\'s subject to a line of the key instead of to a list taught in another unit.' },
      { step: 'C1', was: 'no tie-break',
        now: '`yieldsTo` on the first answer: when a case shows both a law on a listed matter and a decision to spend money, the key\'s answer is the money',
        why: 'K2.8: a spending bill is a law on a listed matter, so a case about one shows both answers. It is taught as an exception (looks like an enumerated power, is the power of the purse) with its own case, marked `also` in data.' },
      { step: 'C1', was: '"Approving a person or an agreement the President proposes" with the line "a majority for a person, two-thirds for a treaty"',
        now: '"Votes on a person or a treaty the President put forward"; `when` gives both thresholds and counts "two-thirds of the senators present" for a treaty',
        why: 'Factual precision: the Constitution counts the senators present.' },
      { step: 'C1', was: '"Removing a federal official for misconduct" with the line "The House brings the charge; the Senate holds the trial"',
        now: '"Charges an official with serious misconduct, or tries the charge"; `when` gives the House majority and two-thirds of the senators present',
        why: 'Factual correction: the old answer said "removing", which is false when the Senate does not convict (the old card\'s own example of a cabinet officer who was charged and stayed).' },
      { outcome: 'enumerated', was: 'A listed power of Congress (enumerated power)', now: 'Enumerated power; you may also hear a listed power, an expressed power',
        why: 'V1 forbids brackets; K4 keeps the real-life name and puts the plain words in `plain`.' },
      { outcome: 'beyondcong', was: 'Beyond Congress\'s reach', now: 'Beyond Congress\'s power', why: 'K2.6: "reach" is a figure of speech.' },
      { outcome: 'purse', was: 'Congress controls the money (power of the purse)', now: 'The power of the purse', why: 'V1, K4.' },
      { outcome: 'confirm', was: 'The Senate must agree (advice and consent)', now: 'Advice and consent', why: 'V1, K4 (audit K5: the phrase was never taught; now it is the name, taught after the case).' },
      { outcome: 'impeach', was: 'Charging and removing an official (impeachment)', now: 'Impeachment; its `needs` covers a case that stops at the House\'s charge',
        why: 'V1; K2.7: `needs` must hold for every case, and "removing" did not.' }
    ],
    // Cards that name a wrong idea, with where the idea comes from. verified: false is shown to the owner at deploy (E15).
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
