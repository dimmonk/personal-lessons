// Basic Math, Unit Four: the unit record. A PROCEDURE UNIT (kind 'P', lesson standard A12), the third of the subject.
// It teaches the key’s two questions about an amount that changes as time passes, "What happens to the amount each time it changes?"
// and "Does the problem ask what the amount will be, or how long until it reaches a target?", which cross, and the four kinds of
// problem their answers lead to. Each kind has a procedure, taught with a problem of the kind and one worked example (kind solved:
// every step named by what it is for, with its working and its reason, and one step whose reason is held back until the learner has
// chosen it). The drill is one stage: a route (the key’s questions, the kind, then the solving).
// Cards live in u4.cards-*.js, cases in u4.cases-*.js. Text fields never retype key wording; they use tokens:
// {q:G1} {a:G1.adds} {o:outcome} {plain:outcome} {needs:outcome} {t:term} {test:ledgerId} {cue:G1}.
// A step’s `does` and `working` are shown as they are, so they carry no tokens and no key wording.

FC.unit('math', 'u4', {
  kind: 'P',
  rev: 5,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff
  tag: 'Four',
  title: { text: 'Amounts that change over time' },
  subtitle: 'Does it add the same number, multiply, or change just once? Then work out where it ends up, or how long it takes to get there.',
  teaches: { steps: ['G1', 'G2'], outcomes: ['lin', 'expg', 'logsolve', 'oneoff'], terms: ['multiplier', 'logscale'] },
  assumes: ['u1', 'u2', 'u3'],

  // THE LOOK-ALIKE LEDGER. All six pairs of the four kinds, because one of the key’s answers (the second question’s) keeps three
  // of them together. Each is written once and used six ways: the look-alike card, its side-by-side table, the list on the question
  // card, the feedback when one is picked for the other, the grouping of drill items, and what returns together later.
  // test is a question to put to a problem, with no name in it.
  ledger: [
    { id: 'lin~expg', pair: ['lin', 'expg'], step: 'G1',
      shared: 'Both follow an amount that changes again and again, and the first change can be the same size in both: 5% of $1,000 is $50, the same as “$50 a month”.',
      rule: 'In {o:lin} every change is the same size, whatever the amount has reached. In {o:expg} every change is a share of what the amount is now, so it gets bigger as the amount grows and smaller as it shrinks.',
      test: 'Is the amount changed by the same number each time, such as $50 a month, or by the same share of itself each time, such as 5% a month or a doubling?' },
    { id: 'expg~logsolve', pair: ['expg', 'logsolve'], step: 'G2',
      shared: 'In both, an amount is multiplied by the same number each time, and the same start and percentage can appear in both: a town at 3% a year can be asked about either way.',
      rule: 'In {o:expg} you are given a time and asked for the amount, so you multiply that many times. In {o:logsolve} you are given a target and asked for the time, so you count how many multiplications reach it.',
      test: 'Does the problem give a length of time and ask for the amount, or give a target for the amount and ask how long?' },
    { id: 'lin~oneoff', pair: ['lin', 'oneoff'], step: 'G1',
      shared: 'In both, an amount changes by a fixed number, and the same figure can appear in both: a price that went up by $2.',
      rule: 'In {o:lin} the change comes again and again. In {o:oneoff} it comes once, and the amount stays where it reached.',
      test: 'After the change is made, does the problem say it is made again each hour, day, week, month or year, or does the amount stay put?' },
    { id: 'lin~logsolve', taughtIn: 'q-g1', pair: ['lin', 'logsolve'], step: 'G1',
      shared: 'Both can ask how long it takes to reach a target, from the same start and the same target.',
      rule: 'In {o:lin} the same number is added each time, so the time is the distance to the target divided by that number. In {o:logsolve} the amount is multiplied each time, so each change is bigger than the one before, and the target comes sooner.',
      test: 'When the problem asks how long, is each change the same size, or is each change bigger than the one before?' },
    { id: 'expg~oneoff', taughtIn: 'q-g1', pair: ['expg', 'oneoff'], step: 'G1',
      shared: 'Both can be given as a percentage, and both can ask for the amount some years on.',
      rule: 'In {o:expg} the percentage is applied again and again. In {o:oneoff} it is applied once, and that is the only change.',
      test: 'Is the percentage applied again each hour, day, week, month or year, or only once?' },
    { id: 'logsolve~oneoff', taughtIn: 'q-g1', pair: ['logsolve', 'oneoff'], step: 'G1',
      shared: 'Both can ask how long it takes to reach a target, with an amount that has already changed.',
      rule: 'In {o:logsolve} the amount keeps being multiplied, so a target above it is reached in time. In {o:oneoff} the amount changed once and stays, so a target other than where it stays is never reached.',
      test: 'When the problem asks how long, is the amount still changing each hour, day, week, month or year, or has it stopped?' }
  ],


  // Parts are stopping points: each ends on a screen that says where the next one starts. They follow the key’s first question’s
  // answers: the same number each time, a share each time (asked for the amount, then asked how long), and a change made one time (A13).
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The same number each time, and a percentage each time',
      cards: ['orient-growth', 'meet-lin', 'check-lin', 'solved-lin-2', 'term-multiplier', 'meet-expg', 'check-expg', 'solved-expg-1', 'look-lin-expg', 'exc-interest-out'] },
    { id: 'p2', title: 'How long it takes, and a change made once',
      cards: ['meet-logsolve', 'check-logsolve', 'term-logscale', 'solved-logsolve-1', 'look-expg-logsolve',
              'meet-oneoff', 'check-oneoff', 'solved-oneoff-1', 'look-lin-oneoff'] },
    { id: 'p3', title: 'The two questions, then the drill',
      cards: ['q-g1', 'check-g1', 'q-g2', 'check-g2'], drill: true, close: ['recap-growth'] }
  ],

  // The drill of a procedure unit has a route stage (A12): the key’s questions in order, the kind, then the solving.
  // Items are authored in groups of look-alikes: each group holds problems of two kinds that share a ledger pair, of one
  // tier, listed clean, then varied, then misleading. The route stage also carries problems from Unit One, unlabelled.
  drill: {
    key: 'u4',
    add: 'Some of these problems are told in a way that points the wrong way, on purpose. How the amount changes each time, and what the problem asks, decide the answer. A friend’s word for it, a percentage or a quick rise does not.',
    rungs: [
      { ask: 'route',
        items: [[{ earlier: 'u1' }, { earlier: 'u1' }],
                ['m4-dr-lin-1', 'm4-dr-oneoff-1'], ['m4-dr-expg-1', 'm4-dr-logsolve-1'],
                ['m4-dr-lin-4', 'm4-dr-expg-3'], ['m4-dr-logsolve-3', 'm4-dr-oneoff-3'],
                ['m4-dr-lin-5', 'm4-dr-expg-5'], ['m4-dr-logsolve-4', 'm4-dr-oneoff-4']] }
    ],
    // One fresh problem for each kind, for later days (E9). A kind that is due comes back as a problem the learner has not seen,
    // as a whole route, beside a problem of the kind they most often take it for.
    returns: ['m4-rt-lin-1', 'm4-rt-expg-1', 'm4-rt-logsolve-1', 'm4-rt-oneoff-1']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the third procedure unit of Basic Math, replacing the old Unit Four (cards and the growth drill), specimens 7 to 9 and three faulty claims. Not yet deployed, so later edits before the first deploy stay revision 1. Four kinds of problem about an amount that changes as time passes, each taught with a problem of the kind, two worked examples with every step computed, and problems the learner finishes; two crossing questions; the drill has a last-step stage, a whole-problem stage and a route stage.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    // What the K2 rewrite changed in this unit’s part of the key, and why (from docs/rebuild/math-plan.md, section (a)).
    keyChanges: [
      { step: 'G1', was: 'answers "The same amount is added each time", "It is multiplied by the same number each time" and "Nothing is growing; the numbers just range from tiny to enormous"',
        now: 'answers "It goes up or down by the same number each time", "It is multiplied by the same number each time" and "It changed once, and has stayed the same since"',
        why: 'The adding and multiplying answers now have the same form, so the difference between them is only the verb (K2.5), and the adding answer covers taking away. The old third answer contradicted its own question (nothing changes), and the cases where nothing repeats (a single price rise) needed somewhere to go (K2.9).' },
      { step: 'G2', was: 'one question, "What are you trying to work out?", with four answers that each led to one name',
        now: 'one question, "Does the problem ask what the amount will be, or how long until it reaches a target?", with two answers, crossed with the first',
        why: 'The old answers each kept one name, so a learner could only answer once they knew the name (V55, K2.2), and its "total" and "size" answers both fitted one problem, so a defensible route was marked wrong. Crossed, the question has one job: it separates the two multiplying kinds. Linear growth and A one-off change are kept by both of its answers, because each is worked by one procedure whichever is asked.' },
      { outcome: 'logsolve', was: 'name "How many steps to get there (logarithm)"', now: 'name "Logarithm", also called doubling time and the log key',
        why: 'V1, K4. The old name also used "step" for time, which the subject now keeps for a step of the working.' },
      { outcome: 'expg', was: 'name "Multiplying by the same number each time (exponential growth)"', now: 'name "Exponential growth", also called compound growth, interest on interest and exponential decay', why: 'V1, K4.' },
      { outcome: 'lin', was: 'name "Adding the same amount each time (linear growth)"', now: 'name "Linear growth", with a need that covers what it will be and how long it takes',
        why: 'V1, K4. One procedure, a start plus the same number times how many times, answers both questions, so the name is kept by both answers of the second question.' },
      { outcome: 'oneoff', was: 'no name: the old drill answer "Neither, a one-off jump" was in no step of the key', now: 'name "A one-off change"',
        why: 'Its procedure gives a number (the amount stays where it is), and its wrong choices are named slips: carrying the change forward as if it added, or as if it multiplied.' },
      { was: 'a name, "Equal space for each ×10 (log scale)"', now: 'a term, "log scale", taught in this unit',
        why: 'A log scale is a way of drawing, and not a kind of problem with a procedure that gives a number. Its problems (how many times bigger a point three gridlines up is, how many ten-times steps from one point to another) are worked by the multiplying procedures, so they route through the multiplying answer. The audit found it had no specimen and no drill item that could be answered.' },
      { was: 'no terms declared; "multiplier" was called a "factor", which also meant a number that divides another',
        now: 'terms multiplier and logscale, taught in this unit', why: 'K6, K9: each gets one term card, with a case first, before the first card that leans on it; and the word "factor" now has one meaning.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
