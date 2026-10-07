// Statistical Claims, Unit One: the unit record. The subject's GATE UNIT (lesson standard A15): it teaches the key's first question and
// the five families it sorts every claim into (the four parts of a claim that can go wrong, and "nothing goes wrong"). Cards carry
// `family` where a branch unit's cards carry `outcome`; cases carry route: { S1: [option] }. Cards are in u1.cards-*.js, cases in
// u1.cases-*.js. Text never retypes key wording: it uses tokens ({q:S1} {a:S1.option} {when:S1.option} {needs:option} {test:id} {cue:S1}).
// Statistical Claims is an action subject: every case stage of the drill holds a claim that holds, and the unit ends with a plan card.

FC.unit('stats', 'u1', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'One',
  title: { text: 'Before you believe a number' },
  subtitle: 'Find the first place a claim could fool you, or see that it holds up',
  teaches: { steps: ['S1'], outcomes: [], terms: [], families: ['counted', 'measure', 'compare', 'cause', 'holds'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER: all ten pairs of the five families. The four pairs with "holds" carry the action subject's rule (P26): the
  // same claim with and without the problem. Each entry is written once and printed everywhere it is needed. test contains no name.
  ledger: [
    { id: 'counted~measure', pair: ['counted', 'measure'], step: 'S1',
      shared: 'In both, the number can be added up right and still mislead you.',
      rule: 'In {a:S1.counted} the trouble is who is in the number: the wrong people, or too few. In {a:S1.measure} the people are fine, and the trouble is that the number could move without the real thing moving.',
      test: 'Is the trouble in who the number comes from, or in how it is counted? Check the people first. If they are fine, ask whether the way it is counted could move it on its own.' },
    { id: 'measure~compare', pair: ['measure', 'compare'], step: 'S1', taughtIn: 'q-gate',
      shared: 'In both, a number has gone up or down, or sounds bigger or smaller than it is, and the people in it are fine.',
      rule: 'In {a:S1.measure} the way of counting can change or be pushed, so the number moves while the real thing does not. In {a:S1.compare} it is counted the same way throughout, but the number comes without what you need beside it: the numbers behind a percentage, how rare the thing is, or what each total is made of.',
      test: 'Could the counting have changed, or been pushed? Or is it counted the same way throughout, with something you need beside the number left out?' },
    { id: 'compare~cause', pair: ['compare', 'cause'], step: 'S1',
      shared: 'In both, two groups can be set side by side, and a program or a habit can sound as if it matters.',
      rule: 'In {a:S1.compare} something is missing beside the number, and the claim need not say anything about a cause. In {a:S1.cause} every number is given, and the claim goes on to say one thing made the other happen.',
      test: 'Is something you need beside the number missing, such as the numbers behind a percentage? Or are all the numbers given, and does the claim say one thing made the other happen?' },
    { id: 'counted~cause', pair: ['counted', 'cause'], step: 'S1', taughtIn: 'q-gate',
      shared: 'In both, a program, a product or a habit is said to pay off, and the number sounds convincing.',
      rule: 'In {a:S1.counted} the trouble is who the number comes from. In {a:S1.cause} the number comes from a fair picture, and the trouble is that the claim credits one thing for the result when something else could explain it.',
      test: 'Check who is in the number before you look at the claim. Are they a fair picture, and enough of them? If so, does the claim say one thing caused another, with another way to explain the result?' },
    { id: 'counted~holds', pair: ['counted', 'holds'], step: 'S1',
      shared: 'Both can give the same number from the same list of people, and both sound equally sure.',
      rule: 'In {a:S1.counted} the people in the number are not a fair picture of the group, or there are too few. In {a:S1.holds} they are a fair picture and there are enough, and the claim speaks only for the group they stand for.',
      test: 'How many of the people asked are in the number, how did they get in, and does the claim speak for more than they stand for?' },
    { id: 'measure~holds', pair: ['measure', 'holds'], step: 'S1', taughtIn: 'q-gate',
      shared: 'In both, a number rose or fell, with the same size of change and the same kind of headline.',
      rule: 'In {a:S1.measure} something about how the number is made changed, or could be pushed, so it can move while the real thing does not. In {a:S1.holds} it is counted the same way throughout, and nobody can move it without the real thing moving.',
      test: 'Was the number counted the same way all the way through, with the same tool and the same effort to find things? Could anyone raise it without more of the real thing?' },
    { id: 'compare~holds', pair: ['compare', 'holds'], step: 'S1', taughtIn: 'q-gate',
      shared: 'In both, one thing is said to be bigger, likelier or riskier than another, about the same two things.',
      rule: 'In {a:S1.compare} the claim leaves out something you need beside the number, such as the numbers behind a percentage, how rare the thing is, or what each total is made of. In {a:S1.holds} the numbers are given, the two things are alike and counted the same way, and the claim says only which is bigger.',
      test: 'Are the numbers behind the comparison given, are the two things alike, and were they counted the same way? Is anything you would need beside the number missing?' },
    { id: 'cause~holds', pair: ['cause', 'holds'], step: 'S1',
      shared: 'In both, two groups show the same difference, and both claims say one thing made the difference.',
      rule: 'In {a:S1.cause} people sorted themselves into groups, so something else about them could explain the result. In {a:S1.holds} the groups were split by chance, so nothing else is likelier to sit in one group than the other.',
      test: 'Who decided which group each person or thing was in: they did, their circumstances did, or a lottery did? Is there another way to explain the result?' },
    { id: 'measure~cause', pair: ['measure', 'cause'], step: 'S1', taughtIn: 'q-gate',
      shared: 'In both, something is said to have worked, and a number rose after it began.',
      rule: 'In {a:S1.measure} the number could rise without the real thing moving, because of what is counted or what people do to the number. In {a:S1.cause} the number does show the real thing, and the trouble is that the claim credits one thing for the result when something else could explain it.',
      test: 'Could the number have risen without the real thing moving? If not, does the claim say one thing caused another, with another way to explain the result?' },
    { id: 'counted~compare', pair: ['counted', 'compare'], step: 'S1', taughtIn: 'q-gate',
      shared: 'In both, you may get a percentage or a number that sounds large, without what you need to read it.',
      rule: 'In {a:S1.counted} the trouble is who the number comes from. In {a:S1.compare} the people are fine, and the trouble is that the number comes as a percentage, a test score or totals, with what you need beside it left out.',
      test: 'Check who is in the number before you look at its form. Are they a fair picture, and enough of them? If so, does the form leave out something you need beside the number?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The answers of the key's first question are taught in the key's order (A13).
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The people behind a number, how it is counted, what it is set beside',
      cards: ['orient-claim', 'meet-counted', 'check-counted', 'meet-measure', 'check-measure', 'look-counted-measure',
              'meet-compare', 'check-compare'] },
    { id: 'p2', title: 'Cause, claims that hold, and the question to ask first',
      cards: ['meet-cause', 'check-cause', 'look-compare-cause', 'meet-holds', 'check-holds',
              'look-counted-holds', 'look-cause-holds', 'q-gate', 'check-gate'] },
    { id: 'p3', title: 'One whole claim, then the drill',
      cards: ['worked-spanish'], drill: true, close: ['recap-gate', 'plan-gate'] }
  ],

  // The drill of a gate unit has three stages (A15): piece, route, claim. Items are authored in groups of cases that share ledger entries
  // and one tier. The drill and return cases are also the bank that later units draw their { earlier: 'u1' } items from.
  drill: {
    key: 'u1',            // the old quick-drill totals for this unit were stored under pl:stats:stats:u1 (frozen; see E8)
    add: 'Some of these claims have nothing wrong with them. That is on purpose: {a:S1.holds} is a real answer, and you will need it as often as the other four. A claim that sounds alarming is no harder to judge, and a dull one is no easier.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'gate-p-lobby', step: 'S1' }, { case: 'gate-p-scale', step: 'S1' }],
                [{ case: 'gate-p-raise', step: 'S1' }, { case: 'gate-p-lamps', step: 'S1' }],
                [{ case: 'gate-p-roll', step: 'S1' }],
                [{ tell: 'counted~measure' }, { tell: 'cause~holds' }]] },
      { ask: 'route',
        items: [['gate-r-petition', 'gate-r-battery', 'gate-r-pizza'],
                ['gate-r-shoes', 'gate-r-orders'],
                ['gate-r-streak', 'gate-r-scores'],
                ['gate-r-crash', 'gate-r-survey']] },
      { ask: 'claim', demo: 'gate-claim-demo',
        items: [['gate-claim-journal'], ['gate-claim-lie']] }
    ],
    // Fresh cases for later days: two for each family (an action subject has a second return for each).
    returns: ['gate-ret-reviews', 'gate-ret-clinic',
              'gate-ret-scanner', 'gate-ret-visits',
              'gate-ret-pills', 'gate-ret-cities',
              'gate-ret-cabs', 'gate-ret-sleep',
              'gate-ret-water', 'gate-ret-breakfast']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the gate unit of Statistical Claims. Not yet deployed, so later edits before the first deploy stay revision 1. Replaces old Unit One (cards "A claim has four parts" to "Worked example: running the parts in order", drill V1).' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    // What the K2 rewrite changed in the gate, and why (docs/rebuild/stats-plan.md, section (a), "The gate").
    keyChanges: [
      { step: 'S1', was: '"Which part of the claim goes wrong first? (If none does, which part does it rest on?)" with four answers; a claim with nothing wrong had no answer',
        now: 'the same question without the bracket, and five answers; the fifth, "Nothing goes wrong", is marked legit and has its own branch',
        why: 'K2.3 forbids a question with a second question in brackets; K2.9 and audit W10 require an answer for a claim with nothing wrong. The old rule ("which part does it rest on") could not be applied the same way twice. This unit teaches the fifth answer as a family like the other four, and every case stage of the drill holds a claim that holds (P26, V37).' },
      { step: 'S1', was: 'the "earliest part" rule lived only in a card and in feedback, and two specimens broke it',
        now: 'each later answer yieldsTo every earlier one, with a say line',
        why: 'K2.8: a tie-break exists only as data. It is taught here as three named exceptions and marked with `also` on every case that shows two parts going wrong.' },
      { step: 'S1', was: 'four wordings of each answer across the old app',
        now: 'the same four texts, each with plain, needs and when',
        why: 'K2.4: the old texts were the one part of the key the audit found the course already taught in its own words. The `when` lines say what a case must show, which the old `sub` lines did not.' },
      { step: 'S1', was: 'the compare answer covered "nothing beside the figure" (no comparison group)',
        now: 'it covers a percentage of what it was, a test\'s accuracy, and totals set side by side, where the claim leaves out what is needed to read them',
        why: 'every old case of a lone figure was a claim that something worked. Moving "no comparison group" to the cause branch puts it with the fix the cause branch already used, separated by one answer and one tie-break.' },
      { step: 'S1', was: '"whether the number measures the real thing"',
        now: '`when` is "the figure could rise, fall or differ without the real thing it is read as showing doing the same"',
        why: 'the old second question of this branch was the only one the audit found taught word for word; it becomes the gate\'s test for the family and the branch\'s own question.' }
    ],
    wrongIdeas: [],       // the two wrong-idea cards were cut in the quick lesson; the ideas live on in the claim items of the drill and in the recap
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
