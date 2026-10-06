// Statistical Claims, Unit Four: the unit record. A BRANCH unit: it teaches the key's one question for the branch of the gate answer
// "What the number counts" (M1) and its three names. Cards live in u4.cards-*.js, cases in u4.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.
// Statistical Claims is an action subject: every portrait carries `act`, every case stage of the drill holds a claim with nothing wrong
// (its outcome is one the unit that teaches the sound claims names; it is here as a case of this unit's own collection), the unit holds
// two return cases for each name, and it ends with a plan card.

FC.unit('stats', 'u4', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 4,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Four',
  title: { fromKey: 'S1.measure' },       // a branch unit is titled with the gate answer it teaches
  subtitle: 'Three ways a figure can move while the real thing stands still, and how to tell which one you are looking at',
  teaches: { steps: ['M1'], outcomes: ['proxy', 'defshift', 'detection'], terms: [] },
  assumes: ['u1', 'u2', 'u3'],   // everything these units teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry for every pair of names a learner will confuse. The first three pair a name with the claim that
  // holds that it is most often taken for, across the gate (a claim with nothing wrong is in another branch of the key); the other
  // three pair the unit's own names, which the one question separates. Each is written once and printed everywhere it is needed.
  // test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'proxy~meas_ok', pair: ['proxy', 'meas_ok'], step: 'S1',
      shared: 'Both give a figure that rose, in the same words, and the claim says only that the figure rose.',
      rule: 'In {o:proxy} the people who make the figure are judged on it, and they could raise it without more of the real thing happening. In {o:meas_ok} nobody who makes the figure gains from it, and nothing but the real thing moving could change it.',
      test: 'Who makes the figure, and who gains if it is high? Could anyone raise it without more of the real thing happening?' },
    { id: 'defshift~meas_ok', pair: ['defshift', 'meas_ok'], step: 'S1',
      shared: 'Both give a figure that moved between two points, in the same words, and both can quote the same size of change.',
      rule: 'In {o:defshift} the definition or the tool changed somewhere between the two ends, so the figure could move with the real thing standing still. In {o:meas_ok} what counts and what measures are the same at both ends.',
      test: 'Was the figure counted by the same definition and the same tool all the way through? Is there a date in the account when either changed?' },
    { id: 'detection~meas_ok', pair: ['detection', 'meas_ok'], step: 'S1',
      shared: 'Both give a count of what was found that rose, and both are true as counts.',
      rule: 'In {o:detection} more effort went into finding, so the count could rise with no more of the real thing there. In {o:meas_ok} the effort that went into finding it was the same at both ends.',
      test: 'How much looking went into the count at each end? Was it the same?' },
    { id: 'proxy~detection', pair: ['proxy', 'detection'], step: 'M1', taughtIn: 'q-measure',
      shared: 'In both, more effort went into something, a count rose, and the real thing may not have moved.',
      rule: 'In {o:proxy} the extra effort went into the figure itself, by people who gain from a higher figure and make it. In {o:detection} the extra effort went into finding what the figure counts, and nobody gains from the count being high.',
      test: 'What did the extra effort go into: raising the number, or finding the thing the number stands for? Who gains if the count is high?' },
    { id: 'defshift~detection', pair: ['defshift', 'detection'], step: 'M1',
      shared: 'In both, a count of what was found rose, and the people or things looked at may be the same ones.',
      rule: 'In {o:defshift} what counts as a find was decided by a different definition or tool than before. In {o:detection} the definition and the tool are what they were, and more was looked at, or it was looked at more often.',
      test: 'Is what counts as a find decided by a different definition or tool than before, or by the same one used on more people or more often?' },
    { id: 'proxy~defshift', pair: ['proxy', 'defshift'], step: 'M1', taughtIn: 'q-measure',
      shared: 'In both, a figure moved with the real thing standing still, and a new system may be part of the story.',
      rule: 'In {o:proxy} the people who make the figure are judged on it and could raise it by what they do. In {o:defshift} the definition or the tool is what changed, and nobody has to gain from the figure.',
      test: 'Did anything about what counts or what measures change at a date? Or did the people who make the figure gain from a higher one, with a way to raise it?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'When the figure is worked on, and when the counting changes',
      cards: ['orient', 'meet-proxy', 'check-proxy', 'look-proxy-real', 'meet-defshift', 'check-defshift', 'look-defshift-real'] },
    { id: 'p2', title: 'When the looking grows, and one whole claim',
      cards: ['meet-detection', 'check-detection', 'look-detection-real', 'look-defshift-detection',
              'q-measure', 'check-measure', 'worked-calls'], drill: true, close: ['recap', 'plan'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  // Every stage that asks about cases holds a claim with nothing wrong (V37); the earlier items come from Unit One's bank.
  drill: {
    key: 'u4',            // the old quick-drill totals for this unit were stored under pl:stats:stats:u4 (frozen; see E8)
    add: 'Some of these claims have nothing wrong with them, and that is on purpose. A claim in which none of the three ways applies is an answer as much as they are, and you will need it as often. A claim that sounds alarming is not harder to judge for that, and a dull one is not easier.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'm4-pc-quota', step: 'S1' }, { case: 'm4-pc-garden', step: 'S1' }],
                [{ case: 'm4-pm-math', step: 'M1' }, { case: 'm4-pm-flu', step: 'M1' }],
                [{ tell: 'proxy~meas_ok' }, { tell: 'defshift~detection' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['m4-rt-pledges', 'm4-rt-safety', 'm4-rt-library'],
                ['m4-rt-poverty', 'm4-rt-fraud'],
                ['m4-rt-scanner', 'm4-rt-regulator', 'm4-rt-tutoring'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'm4-claim-demo',
        items: [['m4-claim-ufo'], ['m4-claim-complaints'], ['m4-claim-cheated']] }
    ],
    // Fresh cases for later days: two for each name (an action subject). A due name returns as a case the learner has not seen,
    // beside a case of the name they most often take it for.
    returns: ['m4-ret-dialer', 'm4-ret-dealer', 'm4-ret-accidents', 'm4-ret-graduation',
              'm4-ret-roads', 'm4-ret-mold']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit for the gate answer "What the number counts". Not yet deployed, so later edits before the first deploy stay revision 1. Replaces old Unit Three, its drill (V3) and old error-drill item 10; the tool half of the old outcome (a new meter, a new scale) has its own second case.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' }
    ],
    // What changed in the key for this branch, and why (K2; docs/rebuild/stats-plan.md, items 17 to 20).
    keyChanges: [
      { step: 'M1', was: 'Two questions: "What is this number really a count of?" (each answer kept one name), then "If the real situation had not changed at all, could this number still have changed?"',
        now: 'one question, "What besides the real thing could move this figure?", with three answers',
        why: 'V55: the first question decided nothing the second did not, so it is removed and not reworded. The kept question is the one the audit found already taught, reworded so it also covers two places that differ (more screening in one region).' },
      { outcome: 'proxy', was: 'Hitting the target, missing the point (Goodhart\'s law)', now: 'Gaming the target, with Goodhart\'s law and teaching to the test as other names',
        why: 'V1: a name people use for the thing, with the researcher\'s name kept only as another name real life uses.' },
      { outcome: 'defshift', was: 'The counting rule or tool changed', now: 'A change in how it is counted',
        why: 'The tool half was never taught in the old unit (audit U3-4). Both halves are named in the answer and taught here, the tool half with its own second case.' },
      { outcome: 'detection', was: 'More looking, not more happening (detection effect)', now: 'Detection bias, with "more looking, not more happening" as another name',
        why: 'V1 and K4: a name people meet in real life, with the old wording kept as the other name.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
