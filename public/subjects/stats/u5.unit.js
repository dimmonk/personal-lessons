// Statistical Claims, Unit Five: the unit record. A BRANCH unit: it teaches the key's question about what a figure is set beside, and the
// three names that go with its answers. Cards are in u5.cards-*.js, stories in u5.cases-*.js. Text never retypes key wording: it uses tokens
// ({o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}).
// Statistical Claims is an action subject: every name says what to do (act), every stage of the drill holds a claim in which nothing
// goes wrong, each name has two return stories, and the unit ends with a plan card.

FC.unit('stats', 'u5', {
  kind: 'C',
  rev: 4,
  standard: 1,
  status: 'draft',
  tag: 'Five',
  title: { text: 'Before you trust a figure' },
  subtitle: 'A percentage, a test result or a ranking can each leave out the number you need',
  teaches: { steps: ['C1'], outcomes: ['relrisk', 'baserate', 'simpson'], terms: ['falsealarm'] },
  assumes: ['u1', 'u2', 'u3', 'u4'],

  // THE LOOK-ALIKE LEDGER. Three pairs of this branch's names (separated by its question), three pairs that put a name beside the claim in which
  // nothing goes wrong (separated by the gate), and the one exception (a percentage built on a handful, which the gate's order gives to another branch).
  ledger: [
    { id: 'relrisk~baserate', pair: ['relrisk', 'baserate'], step: 'C1', taughtIn: 'q-compare',
      shared: 'Both sound precise and sure, and in both a second number is missing that decides what the figure means.',
      rule: 'In {o:relrisk} the figure is a rise, a fall or a chance given only as a share, and the missing numbers are the counts before and after. In {o:baserate} the figure is how often a test is right, read as the chance that a yes is right, and the missing number is how rare the thing is.',
      test: 'Is the figure a change or a risk, or is it how often a test is right? For a change or a risk, ask for the counts before and after. For a test, ask how rare the thing is among the people tested.' },
    { id: 'baserate~simpson', pair: ['baserate', 'simpson'], step: 'C1', taughtIn: 'q-compare',
      shared: 'Both sound sure about a group, and in both the figure hides how the group splits into easy and hard ones.',
      rule: 'In {o:baserate} the figure is how often a test is right, and the missing number is how rare the thing is among the people tested. In {o:simpson} the figures are two totals side by side, and the missing numbers are the easy and hard ones inside each total.',
      test: 'Is the figure how often a test is right, or two totals side by side? For a test, ask how rare the thing is among the people tested. For two totals, ask how many easy and hard ones are inside each.' },
    { id: 'relrisk~simpson', pair: ['relrisk', 'simpson'], step: 'C1', taughtIn: 'q-compare',
      shared: 'Both can rank two people or things from one figure for each, and in both the ranking can turn out wrong.',
      rule: 'In {o:relrisk} the figure is a percentage, and the counts behind it are missing. In {o:simpson} the counts are given, as two totals, and what is missing is how many easy and hard ones are inside each.',
      test: 'Are the counts behind the figures missing, or are they there, with each total hiding a different mix of easy and hard ones?' },
    { id: 'relrisk~comp_ok', pair: ['relrisk', 'comp_ok'], step: 'S1',
      shared: 'Both say that one thing is bigger, likelier or riskier than another, and both can use the very same percentage.',
      rule: 'In {o:relrisk} the claim gives a percentage and leaves out the counts before and after. In {o:comp_ok} the counts are given, so you can see how many it is about as well as how much bigger it is.',
      test: 'Can you find the two counts the percentage was worked out from, each out of its own total? If you can, a percentage beside them is fine. If you cannot, the percentage is all you have.' },
    { id: 'baserate~comp_ok', pair: ['baserate', 'comp_ok'], step: 'S1',
      shared: 'Both are about a test that is usually right, and both can use the same accuracy and the same number of people.',
      rule: 'In {o:baserate} a yes is read as being right as often as the test is accurate, and how rare the thing is gets left out. In {o:comp_ok} all the counts are given, including how many people had the thing, so a yes is read with them in view.',
      test: 'Does the claim tell you how rare the thing is among the people tested, and does it read a yes with that in view?' },
    { id: 'simpson~comp_ok', pair: ['simpson', 'comp_ok'], step: 'S1',
      shared: 'Both set two totals side by side and say which is better.',
      rule: 'In {o:simpson} each total holds a different mix of easy and hard ones, and the claim reads the totals as a fair ranking. In {o:comp_ok} both sides deal with the same mix, so the totals can be set side by side as they are.',
      test: 'Does each total hold the same mix of easy and hard ones, or does one hold far more of the hard ones than the other?' },
    { id: 'relrisk~smalln', pair: ['relrisk', 'smalln'], step: 'S1',
      shared: 'Both can come with a headline percentage that sounds enormous: up 300%, up 200%.',
      rule: 'In {o:smalln} the story shows how few are behind the percentage, and that comes first. In {o:relrisk} the counts are left out, and nothing in the story shows that they are tiny.',
      test: 'Can you find the two counts behind the percentage? If you can, are they so small that one more or one fewer would change the percentage a long way?' }
  ],

  parts: [
    { id: 'p1', title: 'Three things a figure can leave out',
      cards: ['orient-compare', 'meet-relrisk', 'check-relrisk', 'term-falsealarm', 'meet-baserate', 'check-baserate',
              'meet-simpson', 'check-simpson'] },
    { id: 'p2', title: 'Telling them apart, then the drill',
      cards: ['look-relrisk-compok', 'look-baserate-compok', 'look-simpson-compok', 'exc-handful',
              'q-compare', 'check-compare', 'worked-county'],
      drill: true, close: ['recap-compare', 'plan-compare'] }
  ],

  drill: {
    key: 'u5',
    add: 'Some of these claims are fine, on purpose. A claim that gives the counts and sets like against like holds up, and saying so is as much part of the skill as finding what is missing.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'p-base', step: 'C1' }, { case: 'p-simp', step: 'C1' }],
                [{ case: 'p-rel', step: 'C1' }, { case: 'p-ok', step: 'S1' }],
                [{ tell: 'relrisk~comp_ok' }, { tell: 'baserate~comp_ok' }, { tell: 'simpson~comp_ok' }]] },
      { ask: 'route',
        items: [['r-rel-1', 'r-base-1', 'r-simp-1', 'r-ok-1'],
                ['r-rel-2', 'r-base-2', 'r-simp-2'],
                ['r-rel-3', 'r-smalln'],
                [{ earlier: 'u1' }],
                [{ earlier: 'u4' }]] }
    ],
    // Fresh stories for later days: two for each name (an action subject has a second, at about twelve weeks).
    returns: ['ret-rel-1', 'ret-rel-2', 'ret-base-1', 'ret-base-2', 'ret-simp-1', 'ret-simp-2']
  },

  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit for what a figure is set beside (a percentage with no counts, a test’s accuracy read as the chance its yes is right, totals that hide a mix). Not yet deployed, so later edits before the first deploy stay revision 1. Replaces old Unit Four except No comparison group and A fair comparison, drill V4 and old error-drill item 3.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 4, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
