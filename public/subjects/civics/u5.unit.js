// Civics, Unit Five: the unit record. This is the BRANCH unit for the key's third answer, "A judge, in any court".
// It teaches the branch's one question, "What is the judge asked to do?", and its four names. Cards live in
// u5.cards-*.js, cases in u5.cases-*.js. Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id}.
// Names, terms and answers that belong to units this one only assumes (Congress, the President, the agency, the treaty and
// the executive order) are not named by token in cards: the validator lets a card name only what this unit has met.

FC.unit('civics', 'u5', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Five',
  title: { text: 'What a judge is really being asked' },   // plain words, with the payoff up front
  subtitle: 'Four things a judge can be asked to do, and how to spot which one a story is about',
  teaches: { steps: ['J1'], outcomes: ['review', 'interpret', 'notlegal', 'trialrights'], terms: ['precedent'] },
  assumes: ['u1', 'u2', 'u3', 'u4'],   // everything these units teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse. J1 has four answers and each keeps one
  // name, so the seven pairs are all here; two of them are taught on the question card, and two pair a name from this
  // branch with a name from Congress's branch, which only the first question separates (lesson standard section 17).
  // Each entry is written once and used six ways: the look-alike card ("how to tell them apart"), its side-by-side
  // table, the list on the question card, the feedback when one is picked for the other, the grouping of drill items,
  // and what returns together later. test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'review~interpret', pair: ['review', 'interpret'], step: 'J1',
      shared: 'In both, someone is fined or charged under a law and asks a judge about it.',
      rule: 'In {o:review} the person says the law itself is not allowed, because it clashes with the Constitution. In {o:interpret} nobody says that: the law stands, and the only question is whether its words reach what happened.',
      test: 'Does the person say the law should not exist, or only ask whether it covers what they did?' },
    { id: 'review~notlegal', pair: ['review', 'notlegal'], step: 'J1',
      shared: 'In both, someone thinks a rule is unfair and asks a judge to deal with it.',
      rule: 'In {o:review} the person names a right in the Constitution that the rule breaks, and the rule has harmed them. In {o:notlegal} nobody names a law or a right that settles it: the judge is asked to choose what would be better.',
      test: 'Does the person name a right in the Constitution that the rule breaks, or only say a different rule would be better?' },
    { id: 'interpret~notlegal', pair: ['interpret', 'notlegal'], step: 'J1', taughtIn: 'q-judge',
      shared: 'In both, nobody says a law breaks the Constitution, and a judge is asked about a rule of government.',
      rule: 'In {o:interpret} there is a law, and the judge can answer from its words, the rest of the law, what it was for and earlier rulings ({t:precedent}). In {o:notlegal} no law settles it, so there is nothing to read: the judge is asked to choose.',
      test: 'Is there a law whose words, or earlier rulings on them, can answer the question, or is the person asking the judge to choose?' },
    { id: 'review~trialrights', pair: ['review', 'trialrights'], step: 'J1',
      shared: 'In both, a person is in trouble with the law and the judge is asked whether the Constitution was kept.',
      rule: 'In {o:review} the person attacks the law itself. In {o:trialrights} nobody attacks the law: the question is whether the steps the Constitution promises an accused person were followed when this person was dealt with.',
      test: 'Does the person say the law itself is not allowed, or that a step promised to someone accused was skipped?' },
    { id: 'interpret~trialrights', pair: ['interpret', 'trialrights'], step: 'J1', taughtIn: 'q-judge',
      shared: 'In both, a person is charged under a law, and the judge is asked something about what happened to that person.',
      rule: 'In {o:interpret} the judge reads the words of the law to see whether it reaches what the person did. In {o:trialrights} the judge checks whether the steps promised to an accused person were followed, whatever the law says.',
      test: 'Is the judge asked whether the law covers what the person did, or whether the person was treated as the Constitution promises?' },
    { id: 'review~beyondcong', pair: ['review', 'beyondcong'], step: 'D1',
      shared: 'In both, a law clashes with the Constitution, often over the same right, and it can be the very same law.',
      rule: 'In {o:beyondcong} the story is about Congress passing the law, and the last decision is a vote. In {o:review} the law is already passed, someone it harmed has gone to court, and the last decision is a judge’s.',
      test: 'Does the story end with lawmakers voting on a law, or with someone harmed by a law asking a judge about it?' },
    { id: 'trialrights~beyondcong', pair: ['trialrights', 'beyondcong'], step: 'D1',
      shared: 'In both, a right in the Constitution stops the government, and it can be the same right.',
      rule: 'In {o:beyondcong} the right stops Congress from passing a law, and the decision is a vote. In {o:trialrights} the right is one of the steps promised to an accused person, and a judge decides whether they were followed.',
      test: 'Is the last decision a vote by lawmakers on a law, or a judge dealing with a person accused of a crime?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Is the law allowed, and what do its words cover?',
      cards: ['orient', 'meet-review', 'check-review', 'term-precedent', 'meet-interpret', 'check-interpret',
              'look-review-interpret'] },
    { id: 'p2', title: 'A better rule, an accused person, then the drill',
      cards: ['meet-notlegal', 'check-notlegal', 'look-review-notlegal',
              'meet-trialrights', 'check-trialrights', 'look-review-trialrights',
              'look-review-beyondcong', 'look-trialrights-beyondcong',
              'q-judge', 'check-judge', 'worked-megaphone'], drill: true, close: ['recap'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  // Earlier-unit items are drawn from Unit One's bank only.
  drill: {
    key: 'u5',            // new in standard 1: no old quick-drill counter belongs to this unit
    add: 'Many of these stories mention the Constitution, a trial, a vote or a fine, and what the story mentions first is often not what the judge is asked. Read to the end and find the words that say what the judge is asked to do.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'pc-review-1', step: 'J1' }, { case: 'pc-notlegal-1', step: 'J1' }],
                [{ case: 'pc-interpret-1', step: 'J1' }, { case: 'pc-trial-1', step: 'J1' }],
                [{ tell: 'review~interpret' }, { tell: 'review~notlegal' }, { tell: 'review~trialrights' },
                 { tell: 'review~beyondcong' }, { tell: 'trialrights~beyondcong' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['rt-review-1', 'rt-interpret-1', 'rt-notlegal-1', 'rt-trial-1'],
                ['rt-review-3', 'rt-notlegal-3'],
                ['rt-interpret-3', 'rt-trial-3'],
                [{ earlier: 'u1' }]] }
    ],
    // Fresh cases for later days: two for each name, one for each of its scheduled returns (E9).
    // A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['ret-review-1', 'ret-review-2', 'ret-interpret-1', 'ret-interpret-2',
              'ret-notlegal-1', 'ret-notlegal-2', 'ret-trial-1', 'ret-trial-2']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit of Civics for a judge in any court. It replaces the courts part of old Unit Three, the election-holiday worked case and old specimens 3, 7, 11 and 16. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    // What the K2 rewrite changed in the key for this branch, and why (docs/rebuild/civics-plan.md, section a). "was" is the wording of the old course.
    keyChanges: [
      { step: 'J1', was: 'Two questions: "What is the court being asked to do?" (four answers) and "What makes this a question for the court, or not?" (four answers); every answer of both kept exactly one name',
        now: 'one question, "What is the judge asked to do?", with four answers',
        why: 'V55: every answer of the second question kept exactly one name, so the first question decided nothing the second did not. The second question’s lines moved into `when`: the live-case rule into the first answer, "words and earlier rulings" into the third (with the term precedent), "for voters" into the fourth.' },
      { step: 'J1', was: '"Check a law against the Constitution" + "A person the law actually harmed has brought a real case"',
        now: 'same answer; `when` requires someone actually harmed (fined, charged, refused something)',
        why: 'One copy of the live-case rule.' },
      { step: 'J1', was: '"Make sure someone’s trial rights are followed" + "The Constitution itself promises these steps"',
        now: '"Make sure an accused person gets the steps the Constitution promises"; `when` lists the steps',
        why: 'Audit U4-2: the rights were never listed.' },
      { step: 'J1', was: '"Say what a law’s words cover" + "The law’s words and earlier rulings decide it, not the judge’s taste"',
        now: '"Say what the words of a law cover"; `when` says nobody claims the law breaks the Constitution',
        why: 'Audit U3-4: "precedent" was never taught; it is now a term, taught on its own card before the card that needs it.' },
      { step: 'J1', was: '"Decide which policy would be better" + "No law is in dispute: it is for voters and the leaders they elect to decide"',
        now: '"Choose which policy is better"',
        why: 'Merged; the old second line is the reason the judge declines, taught in the unit.' },
      { outcome: 'review', was: 'A court checks a law (judicial review)', now: 'Judicial review (also called striking down a law, or ruling a law unconstitutional)',
        why: 'V1 forbids brackets; K4 keeps the real-life name and puts the plain words in `plain`.' },
      { outcome: 'trialrights', was: 'Trial rights (due process)', now: 'The rights of the accused',
        why: 'V1, K4. "Due process" was not used as the name: it also covers civil and immigration hearings, which this name does not (the old card said so).' },
      { outcome: 'interpret', was: 'A court says what a law means (interpreting a statute)', now: 'Interpreting a law',
        why: 'V1, K4. The key says "law" for every law (one word, one idea), so "statute" is on the avoid list.' },
      { outcome: 'notlegal', was: 'A choice for voters, not judges (political question)', now: 'A political question',
        why: 'V1, K4. "A matter for the voters" is its plain-words alias.' }
    ],
    // Cards that name a wrong idea, with where the idea comes from. verified: false is shown to the owner at deploy (E15).
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
