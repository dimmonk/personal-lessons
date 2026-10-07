// Statistical Claims, Unit Two: the unit record. The BRANCH UNIT for the fifth answer of the key's first question, "Nothing goes wrong"
// (lesson standard A13). It teaches the branch's one question and the four names for a claim that holds: a figure for one group, a rise or fall
// in one figure, a difference between two things, and one thing causing another. Cards are in u2.cards-*.js, cases in u2.cases-*.js.
// Text never retypes key wording: it uses tokens ({o:id} {a:STEP.option} {when:STEP.option} {needs:id} {t:id} {means:id} {q:STEP} {test:id}
// {cue:STEP}). Statistical Claims is an action subject: every drill stage holds a claim that holds (here every case does), every name has
// what to do on the spot, the close has a plan card, and each name has two cases kept back for returns.

FC.unit('stats', 'u2', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Two',
  title: { text: 'When a claim with numbers holds up' },
  subtitle: 'Four things a sound claim can show, and how far each one goes',
  teaches: { steps: ['H1'], outcomes: ['samp_ok', 'meas_ok', 'comp_ok', 'cause_ok'], terms: ['sample', 'atrandom', 'margin', 'placebo'] },
  assumes: ['u1'],        // everything Unit One teaches may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry for every pair of names a learner will confuse. The four names sit along one line, each next to the
  // kind of claim it is most often taken for. All four share the first answer ("Nothing goes wrong"), so the question that separates each pair
  // is this branch's own. Each entry is written once and used everywhere it is needed. test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'samp_ok~meas_ok', pair: ['samp_ok', 'meas_ok'], step: 'H1',
      shared: 'Both are sound claims about the same sort of figure, like an average wait or a share.',
      rule: 'In {o:samp_ok} the claim gives the figure once, for one group at one time. In {o:meas_ok} the claim follows one figure through two or more times and says it rose or fell.',
      test: 'Does the claim give the figure once, or give it at two or more times and say it rose or fell?' },
    { id: 'meas_ok~comp_ok', pair: ['meas_ok', 'comp_ok'], step: 'H1',
      shared: 'Both put two figures in front of you, and both can sound like "this is lower than that".',
      rule: 'In {o:meas_ok} the two figures are one thing at two times, counted the same way, and the claim says it rose or fell. In {o:comp_ok} the two figures are two groups or things, or one thing and its usual level, side by side, and the claim says which is bigger.',
      test: 'Does the claim follow one thing as time passes, or set one thing beside another (or beside its own usual figure) and say which is bigger?' },
    { id: 'comp_ok~cause_ok', pair: ['comp_ok', 'cause_ok'], step: 'H1',
      shared: 'Both show two groups with a gap between them, and the numbers can be exactly the same.',
      rule: 'In {o:comp_ok} the claim stops at which group is ahead. In {o:cause_ok} the claim goes on to say that what one group was given made the gap, and it may say so only because a lottery formed the groups.',
      test: 'Does the claim stop at which group is ahead, or say what made the gap? If it says what made the gap, who decided which group each person or thing went into?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. The part with drill: true is the last;
  // its close cards come after the drill. The parts follow the key's own order of claims: the smaller ones, then the ones that set things side by side.
  parts: [
    { id: 'p1', title: 'One group, a rise or fall, and two things side by side',
      cards: ['orient-holds', 'term-sample', 'term-atrandom', 'meet-sampok', 'check-sampok', 'term-margin',
              'meet-measok', 'check-measok', 'look-samp-meas',
              'meet-compok', 'check-compok', 'look-meas-comp'] },
    { id: 'p2', title: 'What made the difference, then one whole claim and the drill',
      cards: ['term-placebo', 'meet-causeok', 'check-causeok', 'look-comp-cause',
              'q-holds', 'check-q', 'worked-backs'], drill: true,
      close: ['recap-holds', 'plan-holds'] }
  ],

  // The drill: the stages that carry the skill. Items are authored in groups: a group is cases that share ledger entries and one
  // tier. The app shuffles the groups inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  // Every case in this unit is a claim that holds, so each stage holds one (V37); the earlier-unit items are drawn from Unit One's bank, which
  // mixes in claims with something wrong, so a learner does not take it that every claim in this unit's stage holds.
  drill: {
    key: 'u2',            // the old quick-drill totals for this unit were stored under pl:stats:stats:u2 (frozen; see E8)
    add: 'Every claim in this unit holds up. A few claims from Unit One are mixed in with no label, and some of those do go wrong. For those, answer the first question before this one.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'p-pets', step: 'H1' }, { case: 'p-ferry', step: 'H1' }],
                [{ case: 'p-ward', step: 'H1' }, { case: 'f-calls', step: 'H1' }],
                [{ tell: 'samp_ok~meas_ok' }, { tell: 'meas_ok~comp_ok' }, { tell: 'comp_ok~cause_ok' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['r-samp1', 'r-meas1'], ['r-comp1', 'r-cause1'],
                ['r-meas3', 'r-comp3', 'r-cause3'],
                [{ earlier: 'u1' }]] }
    ],
    // Fresh cases for later days: two for each name (an action subject).
    returns: ['ret-samp1', 'ret-samp2', 'ret-meas1', 'ret-meas2',
              'ret-comp1', 'ret-comp2', 'ret-cause1', 'ret-cause2']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit for the fifth answer of the first question, with the four names for a claim that holds. Not yet deployed, so later edits before the first deploy stay revision 1. Replaces the old cards "When nothing is wrong", "A fair count", "A trustworthy measure", "A fair comparison" and "A cause that holds up", and the sound items of the old drills.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    // What changed in the key for this branch, and why (docs/rebuild/stats-plan.md, section (a)).
    keyChanges: [
      { step: 'H1', was: 'none: the four sound names sat one in each of the four old branches, as a fifth answer that the first question could not reach',
        now: 'one question, "What does the claim say the figures show?", four answers, one name each',
        why: 'P26 needs the sound claims taught as names in their own right and present in every drill stage; one branch for them lets every later unit set its faults beside them across the first question. The question does work: it tells the learner what a sound claim has earned and what it has not (a fair comparison shows no cause).' },
      { outcome: 'samp_ok', was: 'A fair count, reached by the answer "Everyone in the frame was counted"',
        now: 'A fair count, with "all of its members or some picked at random" in what you must be able to point to',
        why: 'K2.4: the old answer was false of a survey of 40,000 households, and "frame" is on the avoid list.' },
      { outcome: 'meas_ok', was: 'A trustworthy measure', now: 'A real change',
        why: 'The branch names a sound claim by what it says. "A trustworthy measure" named a quality of the instrument, and its old case (the reservoir) also set the level beside a twenty-year average, which made it a comparison. The unit teaches that line from both sides.' },
      { outcome: 'comp_ok', was: 'A fair comparison, with "like-for-like" mentioned in three words', now: 'the same name; what you must be able to point to lists what like for like means',
        why: 'Audit U4-5: the idea was never taught.' },
      { outcome: 'cause_ok', was: 'A cause that holds up, in four wordings', now: 'A fair test',
        why: 'One name; what you must be able to point to says what makes it fair.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
