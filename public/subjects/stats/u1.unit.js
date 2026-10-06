// Statistical Claims, Unit One: the unit record. The subject's GATE UNIT (lesson standard A15): it teaches the key's first question and
// the five families it sorts every claim into (the four parts of a claim that can go wrong, and "nothing goes wrong"). Cards carry
// `family` where a branch unit's cards carry `outcome`; cases carry route: { S1: [option] }. Cards are in u1.cards-*.js, cases in
// u1.cases-*.js. Text never retypes key wording: it uses tokens ({q:S1} {a:S1.option} {when:S1.option} {needs:option} {test:id} {cue:S1}).
// Statistical Claims is an action subject: every case stage of the drill holds a claim that holds, and the unit ends with a plan card.

FC.unit('stats', 'u1', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 3,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'One',
  title: { text: 'Four parts of a claim, and a claim that holds' },
  subtitle: 'The first question, and the five answers it sorts every claim into',
  teaches: { steps: ['S1'], outcomes: [], terms: [], families: ['counted', 'measure', 'compare', 'cause', 'holds'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER: all ten pairs of the five families. The four pairs with "holds" carry the action subject's rule (P26): the
  // same claim with and without the problem. Each entry is written once and printed everywhere it is needed. test contains no name.
  ledger: [
    { id: 'counted~measure', pair: ['counted', 'measure'], step: 'S1',
      shared: 'Both are about a figure that looks solid. In both, the figure may be added up correctly, and a careful reader can still be misled by it.',
      rule: 'In {a:S1.counted} the trouble is who or what is in the figure: they are not a fair picture of the group the claim is about, or there are too few of them. In {a:S1.measure} the people or things in the figure are fine, and the trouble is what the figure counts: it could rise, fall or differ while the real thing did not.',
      test: 'Is the trouble in who or what the figure was worked out from, or in what the figure counts? Ask first whether the people or things in it are a fair picture and enough of them. If they are, ask whether anything about how the figure is made could move it on its own.' },
    { id: 'measure~compare', pair: ['measure', 'compare'], step: 'S1',
      shared: 'Both are about a figure that has risen or fallen, or that sounds bigger or smaller than it is, and in both the people or things in it are fine.',
      rule: 'In {a:S1.measure} what is counted could change, or be pushed, so that the figure moves while the real thing does not. In {a:S1.compare} what is counted is the same throughout, and the trouble is that the figure is given in a form (a percentage, a test’s accuracy, totals side by side) that leaves out what you need beside it.',
      test: 'Is there anything about how the figure is counted that could have changed or been pushed? Or is it counted the same way throughout, and given as a percentage, a test result or two totals with something you need beside it left out?' },
    { id: 'compare~cause', pair: ['compare', 'cause'], step: 'S1',
      shared: 'Both can come with a figure for two groups, and both can make a program, a product or a habit sound as if it matters.',
      rule: 'In {a:S1.compare} the trouble is a figure given in a form that hides what you need beside it, and the claim need not say anything about a cause. In {a:S1.cause} the figures are all given, and the trouble is that the claim goes on to say one thing caused another when the case shows another way to explain the result.',
      test: 'Is something you need beside the figure missing, such as the numbers behind a percentage? Or are the figures all given, and does the claim say that one thing made the other happen?' },
    { id: 'counted~cause', pair: ['counted', 'cause'], step: 'S1',
      shared: 'Both can come with a claim that a program, a product or a habit pays off, and in both the figure can sound convincing.',
      rule: 'In {a:S1.counted} the trouble is who or what the figure was worked out from. In {a:S1.cause} the figure comes from a fair picture, and the trouble is that the claim says one thing caused another when the case shows another way to explain the result.',
      test: 'Look at the people or things in the figure before you look at the claim. Are they a fair picture, and enough of them? If so, does the claim say that one thing caused another, with another way in the case for the same result?' },
    { id: 'counted~holds', pair: ['counted', 'holds'], step: 'S1',
      shared: 'Both can give the same figure from the same list of people, and both can sound equally sure.',
      rule: 'In {a:S1.counted} the people or things in the figure are not a fair picture of the group the claim is about, or there are too few of them. In {a:S1.holds} they are a fair picture and there are enough of them, and the claim speaks only for the group they stand for.',
      test: 'How many of the people or things asked are in the figure, how did they come to be in it, and does the claim speak for more than they stand for?' },
    { id: 'measure~holds', pair: ['measure', 'holds'], step: 'S1',
      shared: 'Both can show a figure that has risen or fallen, with the same size of change and the same sort of headline.',
      rule: 'In {a:S1.measure} something about how the figure is made changed, or could be pushed, so the figure can move while the real thing does not. In {a:S1.holds} the figure is counted the same way throughout, and nobody can move it without the real thing moving.',
      test: 'Was the figure counted the same way, with the same tool and the same effort to find things, all the way through? Is there nothing anyone could do to raise it without more of the real thing?' },
    { id: 'compare~holds', pair: ['compare', 'holds'], step: 'S1',
      shared: 'Both can say that one thing is bigger, likelier or riskier than another, with the same claim about the same two things.',
      rule: 'In {a:S1.compare} the claim leaves out something you need beside the figure to read it, such as the numbers behind a percentage, how common the thing is, or what each total is made of. In {a:S1.holds} the numbers are given, the two things are alike and counted the same way, and the claim says only which is bigger.',
      test: 'Are the numbers behind the comparison given, are the two things alike, and were they counted the same way? Is anything you would need beside the figure missing?' },
    { id: 'cause~holds', pair: ['cause', 'holds'], step: 'S1',
      shared: 'Both can show two groups with the same difference between them, and both can say that one thing made the difference.',
      rule: 'In {a:S1.cause} the case shows another way to explain the same result, usually because people ended up in their groups by their own choice or circumstance. In {a:S1.holds} the groups were formed by chance, so nothing else is likelier to be in one group than in the other.',
      test: 'Who decided which group each person or thing was in: they did, their circumstances did, or a lottery did? Does the case show another way to explain the result?' },
    { id: 'measure~cause', pair: ['measure', 'cause'], step: 'S1',
      shared: 'Both can come with a claim that something worked, and with a figure that rose after it was introduced.',
      rule: 'In {a:S1.measure} the figure could rise without the real thing moving, because of what is counted or because of what people do to the figure. In {a:S1.cause} the figure counts what it is read as showing, and the trouble is that the claim says one thing caused another when the case shows another way to explain the result.',
      test: 'Could the figure have risen without the real thing it is read as showing moving? If not, does the claim say that one thing caused another, with another way in the case for the same result?' },
    { id: 'counted~compare', pair: ['counted', 'compare'], step: 'S1', taughtIn: 'q-gate',
      shared: 'Both can give a percentage or a figure that sounds large, and both can leave you without what you need to read it.',
      rule: 'In {a:S1.counted} the trouble is who or what the figure was worked out from. In {a:S1.compare} the people or things in the figure are fine, and the trouble is that the figure is given as a percentage, a test’s accuracy or totals side by side, with what you need beside it left out.',
      test: 'Look at the people or things in the figure before you look at the form the figure is given in. Are they a fair picture, and enough of them? If so, does the form leave out something you need beside the figure?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The first five parts follow the five answers of the key's first question, in the key's order (A13).
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The first part of a claim: who or what the figure was worked out from',
      cards: ['orient-claim', 'meet-counted', 'again-counted', 'lens-claim', 'portrait-counted', 'check-counted'] },
    { id: 'p2', title: 'The second part: what the figure counts',
      cards: ['meet-measure', 'again-measure', 'portrait-measure', 'check-measure', 'look-counted-measure'] },
    { id: 'p3', title: 'The third part: what the figure is set beside',
      cards: ['meet-compare', 'again-compare', 'portrait-compare', 'check-compare', 'look-measure-compare'] },
    { id: 'p4', title: 'The fourth part: what the claim says caused what',
      cards: ['meet-cause', 'again-cause', 'portrait-cause', 'check-cause', 'look-compare-cause', 'look-counted-cause'] },
    { id: 'p5', title: 'The fifth answer: a claim in which every part holds',
      cards: ['meet-holds', 'again-holds', 'portrait-holds', 'check-holds', 'refute-source',
              'look-counted-holds', 'look-measure-holds', 'look-compare-holds', 'look-cause-holds'] },
    { id: 'p6', title: 'When two parts go wrong, the question, and two whole claims',
      cards: ['exc-finishers', 'exc-bonus', 'exc-advert', 'refute-false', 'q-gate', 'check-gate', 'worked-walkers', 'worked-spanish'],
      drill: true, close: ['recap-gate', 'transfer-gate', 'plan-gate'] }
  ],

  // The drill of a gate unit has three stages (A15): piece, route, claim. Items are authored in groups of cases that share ledger entries
  // and one tier. The drill and return cases are also the bank that later units draw their { earlier: 'u1' } items from.
  drill: {
    key: 'u1',            // the old quick-drill totals for this unit were stored under pl:stats:stats:u1 (frozen; see E8)
    add: 'Some of these claims have nothing wrong with them, and that is on purpose. Finding that every part holds is one of the five answers, and you will need it as often as the other four. A claim that sounds alarming is not harder to judge for that, and a claim that sounds dull is not easier.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'gate-p-lobby', step: 'S1' }, { case: 'gate-p-scale', step: 'S1' }],
                [{ case: 'gate-p-raise', step: 'S1' }, { case: 'gate-p-lamps', step: 'S1' }],
                [{ case: 'gate-p-roll', step: 'S1' }, { case: 'gate-p-three', step: 'S1' }],
                [{ case: 'gate-p-census', step: 'S1' }, { case: 'gate-p-targets', step: 'S1' }],
                [{ tell: 'counted~measure' }, { tell: 'measure~compare' }, { tell: 'compare~cause' }, { tell: 'counted~cause' }],
                [{ tell: 'counted~holds' }, { tell: 'measure~holds' }, { tell: 'compare~holds' }, { tell: 'cause~holds' }],
                ['gate-rev-counted', 'gate-rev-measure', 'gate-rev-compare', 'gate-rev-cause', 'gate-rev-holds']] },
      { ask: 'route',
        items: [['gate-r-petition', 'gate-r-battery', 'gate-r-orders'],
                ['gate-r-pizza', 'gate-r-shoes', 'gate-r-quiz'],
                ['gate-r-alumni', 'gate-r-glasses', 'gate-r-bridge'],
                ['gate-r-rates', 'gate-r-risk'],
                ['gate-r-streak', 'gate-r-scores', 'gate-r-deal'],
                ['gate-r-crash', 'gate-r-survey']] },
      { ask: 'claim', demo: 'gate-claim-demo',
        items: [['gate-claim-journal'], ['gate-claim-lie'], ['gate-claim-works'], ['gate-claim-reports']] }
    ],
    // Fresh cases for later days: four for each family (an action subject has a fourth return, at about twelve weeks).
    returns: ['gate-ret-reviews', 'gate-ret-honor', 'gate-ret-clinic', 'gate-ret-trail',
              'gate-ret-scanner', 'gate-ret-index', 'gate-ret-visits', 'gate-ret-mileage',
              'gate-ret-pills', 'gate-ret-cities', 'gate-ret-fines', 'gate-ret-kits',
              'gate-ret-cooking', 'gate-ret-cabs', 'gate-ret-sleep', 'gate-ret-tutor',
              'gate-ret-water', 'gate-ret-breakfast', 'gate-ret-absence', 'gate-ret-rooms']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the gate unit of Statistical Claims. Not yet deployed, so later edits before the first deploy stay revision 1. Replaces old Unit One (cards "A claim has four parts" to "Worked example: running the parts in order", drill V1).' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' }
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
    wrongIdeas: [
      { card: 'refute-source', about: 'holds',
        source: { kind: 'published', verified: false,
          ref: 'Ioannidis JPA (2005), Why most published research findings are false, PLoS Medicine 2(8): e124: a result in a peer-reviewed journal is not thereby established. Also the old Statistical Claims error drill (item 5, "peer-reviewed, so settled"), whose claim becomes this refute card. To be read and confirmed online before release, or replaced by what cold readers actually get wrong.' } },
      { card: 'refute-false', about: 'S1',
        source: { kind: 'cold-reader', verified: false,
          ref: 'Predicted from the subject\'s own limits ("Naming a problem does not make a claim false"); not yet observed in a cold read. To be confirmed by a cold reader, or replaced by what they actually say.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
