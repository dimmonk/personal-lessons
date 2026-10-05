// Statistical Claims, Unit Five: the unit record. A BRANCH unit: it teaches the key's question about what a figure is set beside, and the
// three names that go with its answers. Cards are in u5.cards-*.js, cases in u5.cases-*.js. Text never retypes key wording: it uses tokens
// ({o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}).
// Statistical Claims is an action subject: every portrait says what to do (act), every case stage of the drill holds a claim in which nothing
// goes wrong, each name has four return cases, and the unit ends with a plan card.

FC.unit('stats', 'u5', {
  kind: 'C',
  rev: 1,
  standard: 1,
  status: 'draft',
  tag: 'Five',
  title: { fromKey: 'S1.compare' },
  subtitle: 'Three things a figure can be missing from beside it, and how to say which one you are looking at',
  teaches: { steps: ['C1'], outcomes: ['relrisk', 'baserate', 'simpson'], terms: ['falsealarm'] },
  assumes: ['u1', 'u2', 'u3', 'u4'],

  // THE LOOK-ALIKE LEDGER. Three pairs of this branch's names (separated by its question), three pairs that put a name beside the claim in which
  // nothing goes wrong (separated by the gate), and the one exception (a percentage built on a handful, which the gate's order gives to another branch).
  ledger: [
    { id: 'relrisk~baserate', pair: ['relrisk', 'baserate'], step: 'C1',
      shared: 'Both give a figure that sounds precise and sure, and in both a second number is missing that decides what the figure means.',
      rule: 'In {o:relrisk} the figure is a rise, a fall or a chance stated only as a share, and what is missing is how many it was before and after. In {o:baserate} the figure is how often a test is right, read as the chance that a yes from it is right, and what is missing is how common the thing is among the people tested.',
      test: 'Is the figure a change or a risk, or is it how often a test is right? For a change or a risk, ask for the counts before and after. For how often a test is right, ask how common the thing is among the people tested.' },
    { id: 'baserate~simpson', pair: ['baserate', 'simpson'], step: 'C1',
      shared: 'Both give a figure that sounds sure for a group, and in both the figure hides a split of the group into two kinds.',
      rule: 'In {o:baserate} the figure is how often a test is right, and what is missing is how common the thing is among the people tested. In {o:simpson} the figures are two totals set side by side, and what is missing is how each total divides into easy and hard ones.',
      test: 'Is the figure how often a test is right, or two totals set side by side? For a test, ask how common the thing is among the people tested. For two totals, ask what mix of easy and hard ones each total is made of.' },
    { id: 'relrisk~simpson', pair: ['relrisk', 'simpson'], step: 'C1',
      shared: 'Both can rank two people or things from one figure for each, and in both the ranking can turn out wrong.',
      rule: 'In {o:relrisk} the figure is a percentage, and the counts behind it are missing. In {o:simpson} the counts are given, as two totals, and what is missing is how each total is split between easy and hard ones.',
      test: 'Are the counts behind the figures missing, or are they there, with each total hiding a different mix of easy and hard ones?' },
    { id: 'relrisk~comp_ok', pair: ['relrisk', 'comp_ok'], step: 'S1',
      shared: 'Both say that one thing is bigger, likelier or riskier than another, and both can use the very same percentage.',
      rule: 'In {o:relrisk} the claim gives a percentage and leaves out how many it was before and after. In {o:comp_ok} the numbers behind the comparison are given, so you can see how many it is about as well as how much bigger it is.',
      test: 'Can you find the two counts the percentage was worked out from, each out of its own total? If you can, a percentage beside them is fine. If you cannot, the percentage is all you have.' },
    { id: 'baserate~comp_ok', pair: ['baserate', 'comp_ok'], step: 'S1',
      shared: 'Both are about a test that is usually right, and both can use the same accuracy and the same count of people.',
      rule: 'In {o:baserate} a yes from the test is read as being right as often as the test is accurate, and how common the thing is stays out of the reading. In {o:comp_ok} the counts are all given, including how many people had the thing, so the reading of a yes uses them.',
      test: 'Does the claim tell you how common the thing is among the people tested, and does it read a yes with that in view?' },
    { id: 'simpson~comp_ok', pair: ['simpson', 'comp_ok'], step: 'S1',
      shared: 'Both set two totals side by side and say which is better.',
      rule: 'In {o:simpson} each total is made of a different mix of easy and hard ones, and the claim reads the totals as a fair ranking. In {o:comp_ok} the two sides deal with the same mix, so the totals can be set side by side as they stand.',
      test: 'Does each total hold the same mix of easy and hard ones, or does one hold far more of the hard ones than the other?' },
    { id: 'relrisk~smalln', pair: ['relrisk', 'smalln'], step: 'S1',
      shared: 'Both can come with a headline percentage that sounds enormous: up 300%, up 200%.',
      rule: 'In {o:smalln} the case shows how few are behind the percentage, and the key gives that part first. In {o:relrisk} the counts are left out, and nothing in the case shows that they are tiny.',
      test: 'Can you find the two counts behind the percentage? If you can, are they so small that one more or one fewer would change the percentage a long way?' }
  ],

  parts: [
    { id: 'p1', title: 'Percentages that leave out how many',
      cards: ['orient-compare', 'meet-relrisk', 'again-relrisk', 'lens-compare', 'portrait-relrisk', 'check-relrisk',
              'refute-percent', 'look-relrisk-compok', 'exc-handful'] },
    { id: 'p2', title: 'A test that is usually right',
      cards: ['term-falsealarm', 'meet-baserate', 'again-baserate', 'portrait-baserate', 'check-baserate',
              'look-relrisk-baserate', 'look-baserate-compok'] },
    { id: 'p3', title: 'Totals that hide a mix',
      cards: ['meet-simpson', 'again-simpson', 'portrait-simpson', 'check-simpson',
              'look-baserate-simpson', 'look-relrisk-simpson', 'look-simpson-compok'] },
    { id: 'p4', title: 'The key’s question, two whole claims, and the drill',
      cards: ['q-compare', 'check-compare', 'worked-savings', 'worked-county'],
      drill: true, close: ['recap-compare', 'transfer-compare', 'plan-compare'] }
  ],

  drill: {
    key: 'u5',
    add: 'Some of these claims have nothing wrong with them, and that is on purpose. A claim that gives the counts, the mix and the same kind of thing on both sides holds, and saying so is as much a part of the skill as finding what is missing. A claim with a large percentage is not harder to judge for that, and one with a small percentage is not easier.',
    rungs: [
      { ask: 'name',
        items: [['n-rel-1', 'n-ok-1'],
                ['n-base-1', 'n-simp-1'],
                ['n-rel-2', 'n-base-2', 'n-ok-2']] },
      { ask: 'piece',
        items: [[{ case: 'p-base', step: 'C1' }, { case: 'p-simp', step: 'C1' }],
                [{ case: 'p-rel', step: 'C1' }, { case: 'p-ok', step: 'S1' }],
                [{ case: 'p-simp-2', step: 'C1' }],
                [{ tell: 'relrisk~baserate' }, { tell: 'baserate~simpson' }, { tell: 'relrisk~simpson' }],
                [{ tell: 'relrisk~comp_ok' }, { tell: 'baserate~comp_ok' }, { tell: 'simpson~comp_ok' }],
                ['rev-relrisk', 'rev-baserate', 'rev-simpson'],
                [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['f-rel', 'f-ok', 'f-base'],
                ['f-simp', 'f-ok-2', 'f-base-2']] },
      { ask: 'route',
        items: [['r-rel-1', 'r-base-1', 'r-ok-1'],
                ['r-simp-1', 'r-ok-2'],
                ['r-rel-2', 'r-base-2', 'r-simp-2', 'r-ok-3'],
                ['r-rel-3', 'r-base-3', 'r-simp-3', 'r-smalln'],
                [{ earlier: 'u1' }],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'claim-demo',
        items: [['claim-fairest'], ['claim-accurate'], ['claim-totals'], ['claim-doubled']] }
    ],
    // Fresh cases for later days: four for each name (an action subject has a fourth, at about twelve weeks).
    returns: ['ret-rel-1', 'ret-rel-2', 'ret-rel-3', 'ret-rel-4',
              'ret-base-1', 'ret-base-2', 'ret-base-3', 'ret-base-4',
              'ret-simp-1', 'ret-simp-2', 'ret-simp-3', 'ret-simp-4']
  },

  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit for what a figure is set beside (a percentage with no counts, a test’s accuracy read as the chance its yes is right, totals that hide a mix). Not yet deployed, so later edits before the first deploy stay revision 1. Replaces old Unit Four except No comparison group and A fair comparison, drill V4 and old error-drill item 3.' }
    ],
    wrongIdeas: [
      { card: 'refute-percent', about: 'relrisk',
        source: { kind: 'cold-reader', verified: false,
          ref: 'Predicted from the old Statistical Claims error drill (item 3, "Crime in the neighborhood is up 200%") and from the common belief that a percentage is the neutral way to state a change; not yet observed in a cold read. To be confirmed by a cold reader, or replaced by what they actually say.' } }
    ],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
