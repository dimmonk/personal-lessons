// Basic Math, Unit One: the unit record. This is the subject's GATE UNIT (lesson standard A15).
// It teaches the key's first question, "What does the problem ask you to work out?", and the five kinds of problem that
// question sorts every problem into. In a gate unit the families are the gate's answers: a family's name is its answer
// text, cards carry `family` where a branch unit's cards carry `outcome`, and cases carry route: { M1: [option] } and no
// outcome. Nothing is solved in this unit: later units teach each kind's own procedures. The unit's drill and return
// cases are the bank that those units draw their { earlier: 'u1' } items from.
// Cards live in u1.cards-*.js, cases in u1.cases-*.js. Text fields never retype key wording; they use tokens:
// {q:M1} {a:M1.option} {when:M1.option} {plain:option} {needs:option} {t:term} {test:ledgerId} {cue:M1}.

FC.unit('math', 'u1', {
  kind: 'C',
  rev: 2,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff
  tag: 'One',
  title: { text: 'What kind of problem is it?' },
  subtitle: 'The first question, and the five kinds of problem it sorts every problem into',
  teaches: { steps: ['M1'], outcomes: [], terms: ['righttriangle', 'formula'], families: ['whole', 'unknown', 'growth', 'chance', 'shape'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER. In a gate unit it pairs families. The five pairs below are the ones a beginner confuses.
  // Each is written once and used six ways: the look-alike card, its side-by-side table, the list on the question card,
  // the feedback when one is picked for the other, the grouping of drill items, and what returns together later.
  // Four pairs are taught by a look-alike card; unknown~growth, unknown~shape and growth~whole also have an exception
  // card each, and the key's three tie-breaks are taught there (unknown~growth, unknown~shape, growth~whole).
  // test is a question to put to a problem, with no name in it.
  ledger: [
    { id: 'whole~chance', pair: ['whole', 'chance'], step: 'M1',
      shared: 'Both are made of whole counts of things, and both can ask “in how many different ways”. A group of friends, a row, a set of chairs can turn up in either.',
      rule: 'In {a:M1.whole} a count is shared out evenly or set beside another count, and what is asked is how the count itself divides, repeats or is built up. In {a:M1.chance} what is asked is about the results of a choice, how many different results there are or how likely one is, and the numbers only say how many things there are to choose from.',
      test: 'Is the question about sharing a count out evenly, what is left over, or when repeats meet? Or is it about the different results of a choice, how many of them there are or how likely one is?' },
    { id: 'unknown~growth', pair: ['unknown', 'growth'], step: 'M1',
      shared: 'Both can give a fixed amount, a price that is repeated and a result, and both can end in a question whose answer is a number you were not told.',
      rule: 'In {a:M1.unknown} nothing is followed as time passes: the problem gives a calculation, a rate for each thing or two totals, and a number that must fit them. In {a:M1.growth} one amount is followed through time, changing each hour, day, month or year, and the question is where it ends up or how long it takes to reach a target.',
      test: 'Does the problem follow one amount as hours, days, months or years pass? Or does it hide a number that has to fit a calculation, a rate for each thing or two totals?' },
    { id: 'unknown~shape', pair: ['unknown', 'shape'], step: 'M1',
      shared: 'Both can give a rate or a pair of lengths, and both can end in a question about how long something is.',
      rule: 'In {a:M1.unknown} the numbers are facts that a hidden number must fit, and there is no triangle and no copy of a shape. In {a:M1.shape} the problem has a {t:righttriangle}, or two things of exactly the same shape at different sizes, and asks for a length, an area or a volume.',
      test: 'Is there a {t:righttriangle}, or are there two things of exactly the same shape at different sizes? Or are there only facts that a hidden number must fit?' },
    { id: 'growth~whole', pair: ['growth', 'whole'], step: 'M1',
      shared: 'Both can run over days or hours, and both can repeat the same step again and again.',
      rule: 'In {a:M1.growth} one amount is followed over time, and the question is about the amount at a given time or the time it takes to reach a target. In {a:M1.whole} the numbers are counts that divide or repeat, and the question is how they fit together: the part that remains, when two repeats coincide, or the point a count reaches on a loop of days or hours.',
      test: 'Is the question about how an amount changes as time passes? Or is it about how counts fit together, such as a day of the week, what is left over, or when two repeats meet?' },
    { id: 'unknown~chance', pair: ['unknown', 'chance'], step: 'M1',
      shared: 'Both can ask “how many”, and both can give numbers about two sorts of the same thing.',
      rule: 'In {a:M1.unknown} the problem hides numbers that its facts fix: there is exactly one answer, and it has to fit. In {a:M1.chance} the problem asks about the results of a choice, how many different results there are or how likely one is, and nothing has to fit a result.',
      test: 'Does the problem hide numbers that its facts fix, so that exactly one answer fits? Or does it ask how many different results a choice has, or how likely one is?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The first five parts follow the five answers of the key's first question, in the key's order (A13).
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The first kind: how whole numbers split',
      cards: ['orient-kind', 'meet-whole', 'again-whole', 'lens-kind', 'portrait-whole', 'check-whole'] },
    { id: 'p2', title: 'The second kind: a number you are not told',
      cards: ['term-formula', 'meet-unknown', 'again-unknown', 'portrait-unknown', 'check-unknown'] },
    { id: 'p3', title: 'The third kind: an amount followed over time',
      cards: ['meet-growth', 'again-growth', 'portrait-growth', 'check-growth', 'look-unknown-growth', 'exc-hourly', 'exc-cyclist',
              'look-growth-whole', 'exc-tablets'] },
    { id: 'p4', title: 'The fourth kind: counting ways, and chance',
      cards: ['meet-chance', 'again-chance', 'portrait-chance', 'check-chance', 'look-whole-chance', 'look-unknown-chance'] },
    { id: 'p5', title: 'The fifth kind: shapes',
      cards: ['term-righttriangle', 'meet-shape', 'again-shape', 'portrait-shape', 'check-shape', 'look-unknown-shape', 'exc-model'] },
    { id: 'p6', title: 'The first question, then the drill',
      cards: ['q-kind', 'check-kind', 'refute-howmany', 'refute-numbers', 'worked-trio', 'worked-bed'], drill: true, close: ['recap-kind', 'transfer-kind'] }
  ],

  // The drill of a gate unit has three stages (A15): piece, route, claim. There is no name stage and no finish stage,
  // because the route is one question long and its answer is the name. Items are authored in groups of look-alikes.
  drill: {
    key: 'u1',
    add: 'Some of these problems tell a story that points the wrong way, on purpose: a ferry, a bank or a hospital in the story says nothing about the kind. Every one of them is decided by what it asks you to work out, and by nothing else.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'gt-stamps', step: 'M1' }, { case: 'gt-breakfast', step: 'M1' }],
                [{ case: 'gt-chain', step: 'M1' }, { case: 'gt-jar', step: 'M1' }],
                [{ case: 'gt-gatebrace', step: 'M1' }, { case: 'gt-coins', step: 'M1' }],
                [{ case: 'gt-drip', step: 'M1' }, { case: 'gt-busstram', step: 'M1' }],
                [{ case: 'gt-allergy', step: 'M1' }, { case: 'gt-cloths', step: 'M1' }],
                [{ tell: 'whole~chance' }, { tell: 'unknown~growth' }, { tell: 'unknown~shape' }, { tell: 'growth~whole' }, { tell: 'unknown~chance' }],
                ['gt-rev-whole', 'gt-rev-unknown', 'gt-rev-growth', 'gt-rev-chance', 'gt-rev-shape']] },
      { ask: 'route',
        items: [['gt-beadbags', 'gt-band'],
                ['gt-smoothie', 'gt-laptop', 'gt-sail'],
                ['gt-passport', 'gt-runner', 'gt-noshow'],
                ['gt-ham', 'gt-duck'],
                ['gt-groomer', 'gt-ripple'],
                ['gt-planhouse', 'gt-ferry'],
                ['gt-tapclock', 'gt-lamps']] },
      { ask: 'claim', demo: 'gt-claim-demo',
        items: [['gt-claim-howmany'], ['gt-claim-numbers'], ['gt-claim-hourly'], ['gt-claim-model']] }
    ],
    // Fresh problems for later days: three for each kind, one for each of its scheduled returns (E9). A kind that is due
    // comes back as a problem the learner has not seen, beside a problem of the kind they most often take it for.
    returns: ['gt-ret-albums', 'gt-ret-pencils', 'gt-ret-nurses',
              'gt-ret-data', 'gt-ret-printer', 'gt-ret-wheels',
              'gt-ret-well', 'gt-ret-algae', 'gt-ret-buspass',
              'gt-ret-canteen', 'gt-ret-medals', 'gt-ret-alarms',
              'gt-ret-ship', 'gt-ret-zipwire', 'gt-ret-statue']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the gate unit of Basic Math, replacing the old Unit One (nine cards and the sorting drill). Not yet deployed, so later edits before the first deploy stay revision 1. The five kinds are taught one at a time; the three tie-breaks of the first question are taught as exceptions; nothing is solved.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' }
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
    wrongIdeas: [
      { card: 'refute-numbers', about: 'M1',
        source: { kind: 'app-data', verified: false,
          ref: 'docs/comprehension-audit/math.md (U1-3, U1-8): the old unit sorted problems by the cue words and numbers of school chapter headings, and the old drill rewarded it. Taken from the audit’s learner simulation; to be confirmed against what cold readers do with the drill.' } },
      { card: 'refute-howmany', about: 'M1',
        source: { kind: 'app-data', verified: false,
          ref: 'docs/comprehension-audit/math.md (U1-4): "how many" read as a signal for counting, from the old bake-sale item. Taken from the audit’s learner simulation; to be confirmed against what cold readers do with the drill.' } }
    ],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
