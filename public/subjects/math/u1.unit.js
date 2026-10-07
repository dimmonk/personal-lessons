// Basic Math, Unit One: the unit record. This is the subject's GATE UNIT (lesson standard A15).
// It teaches the key's first question, "What does the problem ask you to work out?", and the five kinds of problem that
// question sorts every problem into. In a gate unit the families are the gate's answers: a family's name is its answer
// text, cards carry `family` where a branch unit's cards carry `outcome`, and cases carry route: { M1: [option] } and no
// outcome. Nothing is solved in this unit: later units teach each kind's own procedures. The unit's drill and return
// cases are the bank that those units draw their { earlier: 'u1' } items from.
// A quick lesson (lesson standard section 19): one meet card and one check for each kind, three exceptions, one look-alike
// card, one worked problem and a short drill.
// Cards live in u1.cards-*.js, cases in u1.cases-*.js. Text fields never retype key wording; they use tokens:
// {q:M1} {a:M1.option} {when:M1.option} {plain:option} {needs:option} {t:term} {test:ledgerId} {cue:M1}.

FC.unit('math', 'u1', {
  kind: 'C',
  rev: 5,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff
  tag: 'One',
  title: { text: 'Before you do the math, check what the problem is about' },
  subtitle: 'Whole numbers, a missing number, change over time, counting ways, or a shape: check which one you have first',
  teaches: { steps: ['M1'], outcomes: [], terms: ['righttriangle', 'formula'], families: ['whole', 'unknown', 'growth', 'chance', 'shape'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER. In a gate unit it pairs families. The five pairs below are the ones a beginner confuses.
  // Each is written once and used several ways: the look-alike or exception card, its side-by-side table, the list on the
  // question card, the feedback when one is picked for the other, and what returns together later.
  // whole~chance is taught by a look-alike card; unknown~growth, growth~whole and unknown~shape by an exception card each
  // (the key's three tie-breaks); unknown~chance on the question card (taughtIn).
  // test is a question to put to a problem, with no name in it.
  ledger: [
    { id: 'whole~chance', pair: ['whole', 'chance'], step: 'M1',
      shared: 'Both use whole counts of people or things, and both can ask “in how many different ways”.',
      rule: 'In {a:M1.whole} the count itself is split into equal groups or set beside another count. In {a:M1.chance} the numbers only say how long the lists are, and you are counting the results of a choice or finding how likely one is.',
      test: 'Is the question about splitting a count evenly, what is left over, or when repeats meet? Or is it about the different results of a choice, how many there are or how likely one is?' },
    { id: 'unknown~growth', pair: ['unknown', 'growth'], step: 'M1',
      shared: 'Both can give a fixed amount and a price that repeats, and both end with a number you were not told.',
      rule: 'In {a:M1.unknown} nothing changes as time passes: you get a calculation, a rate for each thing or two totals, and a number that has to fit. In {a:M1.growth} one amount changes each hour, day, month or year, and the question is where it ends up or how long until it reaches a target.',
      test: 'Does the problem follow one amount as hours, days, months or years pass? Or does it hide a number that has to fit a calculation, a rate for each thing or two totals?' },
    { id: 'unknown~shape', pair: ['unknown', 'shape'], step: 'M1',
      shared: 'Both can give a rate or a pair of lengths, and both can end by asking how long something is.',
      rule: 'In {a:M1.unknown} the numbers are facts that a missing number has to fit, and there is no triangle and no copy of a shape. In {a:M1.shape} there is a {t:righttriangle}, or two things of exactly the same shape at different sizes, and the problem asks for a length, an area or a volume.',
      test: 'Is there a {t:righttriangle}, or are there two things of exactly the same shape at different sizes? Or are there only facts that a missing number has to fit?' },
    { id: 'growth~whole', pair: ['growth', 'whole'], step: 'M1',
      shared: 'Both can run over days or hours, and both can repeat the same step again and again.',
      rule: 'In {a:M1.growth} one amount changes as time passes, and the question is what it will be or how long until it reaches a target. In {a:M1.whole} the numbers are counts, and the question is how they fit together: a day of the week, a time on a clock, what remains after sharing, or when two repeats meet.',
      test: 'Is the question about how an amount changes as time passes? Or is it about how counts fit together, such as a day of the week, what is left over, or when two repeats meet?' },
    { id: 'unknown~chance', pair: ['unknown', 'chance'], step: 'M1', taughtIn: 'q-kind',
      shared: 'Both can ask “how many”, and both can give numbers about two sorts of the same thing.',
      rule: 'In {a:M1.unknown} the facts fix exactly one answer, and it has to fit. In {a:M1.chance} the problem asks about the results of a choice, how many there are or how likely one is, and nothing has to fit.',
      test: 'Do the facts fix exactly one answer that has to fit? Or does the problem ask how many different results a choice has, or how likely one is?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Splitting counts, a missing number, and change over time',
      cards: ['orient-kind', 'meet-whole', 'check-whole', 'term-formula', 'meet-unknown', 'check-unknown',
              'meet-growth', 'check-growth', 'exc-hourly', 'exc-tablets'] },
    { id: 'p2', title: 'Ways to count, how likely things are, and shapes',
      cards: ['meet-chance', 'check-chance', 'look-whole-chance', 'term-righttriangle', 'meet-shape', 'check-shape', 'exc-model', 'q-kind'] },
    { id: 'p3', title: 'One whole problem, then the drill',
      cards: ['worked-bed'], drill: true, close: ['recap-kind'] }
  ],

  // The drill of a gate unit has up to three stages (A15): piece, route, claim. There is no name stage and no finish stage,
  // because the route is one question long and its answer is the name. Items are authored in groups of look-alikes.
  drill: {
    key: 'u1',
    add: 'Some of these problems have details that point the wrong way, on purpose: a price, a clock or a bank is not what decides it. Look at what the problem asks you to work out.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'gt-stamps', step: 'M1' }, { case: 'gt-breakfast', step: 'M1' }],
                [{ case: 'gt-chain', step: 'M1' }, { case: 'gt-jar', step: 'M1' }],
                [{ case: 'gt-gatebrace', step: 'M1' }, { case: 'gt-coins', step: 'M1' }],
                [{ tell: 'whole~chance' }, { tell: 'unknown~growth' }, { tell: 'unknown~shape' }, { tell: 'growth~whole' }]] },
      { ask: 'route',
        items: [['gt-beadbags', 'gt-band'],
                ['gt-smoothie', 'gt-sail'],
                ['gt-passport', 'gt-runner', 'gt-noshow'],
                ['gt-groomer', 'gt-tapclock'],
                ['gt-planhouse', 'gt-ferry']] },
      { ask: 'claim', demo: 'gt-claim-demo',
        items: [['gt-claim-howmany'], ['gt-claim-numbers']] }
    ],
    // Fresh problems for later days: one for each kind (E9). A kind that is due comes back as a problem the learner has
    // not seen, beside a problem of the kind they most often take it for.
    returns: ['gt-ret-nurses', 'gt-ret-data', 'gt-ret-well', 'gt-ret-alarms', 'gt-ret-statue']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the gate unit of Basic Math, replacing the old Unit One (nine cards and the sorting drill). Not yet deployed, so later edits before the first deploy stay revision 1. The five kinds are taught one at a time; the three tie-breaks of the first question are taught as exceptions; nothing is solved.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    // What the K2 rewrite changed in the gate, and why (from docs/rebuild/math-plan.md, section (a)).
    keyChanges: [
      { step: 'M1', was: 'q "What is the question about?"',
        now: 'q "What does the problem ask you to work out?"',
        why: '"About" invites a topic (a pizza question is about food); what the problem asks for is what decides the family.' },
      { step: 'M1', was: 'answer "Whole numbers" (sub: how numbers split, what is left over, when cycles line up)',
        now: 'answer "How whole numbers split, repeat or are made up"',
        why: 'A label became an answer an observer can point to; "line up" (a figure of speech) removed; the when line now also covers whether a number can be written exactly, which the old answer did not, though the irrational name sat under it (audit U2-8).' },
      { step: 'M1', was: 'answer "A missing number" (sub: work out a hidden number from facts)',
        now: 'answer "A missing number, from a formula, a rate or totals"',
        why: 'Every problem has a missing number, its answer, so the old answer fitted every case. The new one names what the problem gives.' },
      { step: 'M1', was: 'answer "Growth over time" (sub: ... or numbers from tiny to huge)',
        now: 'answer "What an amount becomes over time, or how long it takes"',
        why: 'The old answer held the log-scale name, whose own question said "Nothing is growing", a contradiction a careful learner trips on. It now covers shrinking and a single change, and says what is asked.' },
      { step: 'M1', was: 'answer "Counting and chances" (sub: how many ways, or how likely)',
        now: 'answer "How many ways something can turn out, or how likely it is"',
        why: 'The when line is narrowed to the chances the key has procedures for (at least one of several; a test result). A plain share of equally likely ways (the old raffle item) is now named in subject.limits as outside the key.' },
      { step: 'M1', was: 'answer "Shapes and sizes" (sub: lengths, angles, areas, volumes)',
        now: 'answer "A length, an area or a volume, from a right-angled triangle or the same shape at different sizes"',
        why: '"Shapes and sizes" fitted a rectangle’s width from its area, which is a formula problem with no shape procedure behind it. The new answer names the two things every shape procedure starts from; "the same shape at different sizes" is the one wording for a copy, a model, a scale drawing or a bigger pizza.' },
      { step: 'M1', was: 'no tie-break between "A missing number" and the answers about time or shape',
        now: 'yieldsTo as data: a missing number gives way to growth (an amount that goes up or down by the same number, or is multiplied by the same number, each hour, day, month or year, or that changed once) and to shape (a right-angled triangle, or two things of the same shape at different sizes)',
        why: 'The plumber (a call-out fee plus a price for each hour) and a scale model both show a rate and a missing number. The key’s line: a rate for each hour, day, month or year is an amount over time; a rate for each thing is a missing number; a model, a map or a shadow is the same shape at different sizes. Both are taught as exceptions (the carpet cleaner, the model locomotive).' },
      { step: 'M1', was: 'no tie-break between growth and whole numbers',
        now: 'yieldsTo as data: growth gives way to whole numbers when the problem asks where a count ends on a loop that starts again, such as the days of a week or the hours on a clock',
        why: '"What day is it in so many days?" runs over time but is about leftovers, not an amount over time. Taught as an exception (the box of tablets).' },
      { step: 'M1', was: 'gate answers had n, when and keeps',
        now: 'each answer also carries plain and needs',
        why: 'A15: the gate’s answers are Unit One’s families, taught as an outcome is.' },
      { was: 'no terms declared; "formula" and "right-angled triangle" used untaught in the gate’s answers',
        now: 'terms righttriangle and formula, taught in this unit',
        why: 'K6: the gate’s own answers use both words, so each gets one term card, with a case first, before the first card that leans on it (audit C-9).' },
      { was: 'tool, method, rule, question and unknown used for one thing; "step" used for a key question',
        now: 'a kind of problem, its procedure, a missing number; "step" only for a step of the working; an avoid list in the key',
        why: 'K9 and the audit’s vocabulary map (C-5, U1-6): one word for one thing.' }
    ],
    wrongIdeas: [],       // the two wrong-idea cards were cut in the quick lesson; the ideas live on in the drill's claims and the recap
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
