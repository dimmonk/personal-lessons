// Basic Math, Unit Four: the unit record. A PROCEDURE UNIT (kind 'P', lesson standard A12), the third of the subject.
// It teaches the key’s two questions about an amount that changes as time passes, "What happens to the amount each time it changes?"
// and "Does the problem ask what the amount will be, or how long until it reaches a target?", which cross, and the four kinds of
// problem their answers lead to. Each kind has a procedure, taught with a problem of the kind, two worked examples in different areas
// of life (kind solved: every step named by what it is for, with its working and its reason, and one step whose reason is held back
// until the learner has chosen it), and problems the learner finishes. The drill has three stages: the last step of a worked problem,
// a whole problem, and a route (the key’s questions, the kind, then the solving).
// Cards live in u4.cards-*.js, cases in u4.cases-*.js. Text fields never retype key wording; they use tokens:
// {q:G1} {a:G1.adds} {o:outcome} {plain:outcome} {needs:outcome} {t:term} {test:ledgerId} {cue:G1}.
// A step’s `does` and `working` are shown as they are, so they carry no tokens and no key wording.

FC.unit('math', 'u4', {
  kind: 'P',
  rev: 3,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff
  tag: 'Four',
  title: { fromKey: 'M1.growth' },
  subtitle: 'Four kinds of problem about an amount that changes as time passes, and a procedure worked out step by step for each',
  teaches: { steps: ['G1', 'G2'], outcomes: ['lin', 'expg', 'logsolve', 'oneoff'], terms: ['multiplier', 'logscale'] },
  assumes: ['u1', 'u2', 'u3'],

  // THE LOOK-ALIKE LEDGER. All six pairs of the four kinds, because one of the key’s answers (the second question’s) keeps three
  // of them together. Each is written once and used six ways: the look-alike card, its side-by-side table, the list on the question
  // card, the feedback when one is picked for the other, the grouping of drill items, and what returns together later.
  // test is a question to put to a problem, with no name in it.
  ledger: [
    { id: 'lin~expg', pair: ['lin', 'expg'], step: 'G1',
      shared: 'Both follow one amount that changes again and again, and for a while their numbers are close. A rise of 5% on $1,000 is $50, which is also what “$50 a month” says, so the first change can be the same size in both.',
      rule: '{o:lin} changes the amount by the same number each time, so every change is the same size, whatever the amount has reached. {o:expg} changes it by the same share of what it has reached, so each change is bigger than the one before when the amount grows, and smaller when it shrinks.',
      test: 'Is the amount changed by the same number each time, such as $50 a month, or by the same share of itself each time, such as 5% a month or a doubling?' },
    { id: 'expg~logsolve', pair: ['expg', 'logsolve'], step: 'G2',
      shared: 'Both have an amount that is multiplied by the same number each time, and the very same start, percentage and story can appear in both. The same town at 3% a year can be asked about either way.',
      rule: '{o:expg} is given a time and asks for the amount at the end of it, so the amount is found by multiplying that many times. {o:logsolve} is given a target and asks for the time, so the number of times is what is missing, and it is found by counting how many multiplications reach the target.',
      test: 'Does the problem give a length of time and ask for the amount, or give a target for the amount and ask how long?' },
    { id: 'lin~oneoff', pair: ['lin', 'oneoff'], step: 'G1',
      shared: 'Both are about an amount that changes by a fixed number, and both can be written with the same figure: a price that went up by $2.',
      rule: '{o:lin} changes the amount by the same number each time, so the change comes again and again. {o:oneoff} changes it by a number one time, after which it stays where it reached, so the change does not come again.',
      test: 'After the change is made, does the problem say that it is made again each hour, day, week, month or year, or does the amount stay where it reached?' },
    { id: 'lin~logsolve', pair: ['lin', 'logsolve'], step: 'G1',
      shared: 'Both can ask for the time to a target, and both can start from the same amount and be given the same target.',
      rule: '{o:lin} adds the same number each time, so the time to reach a target is the distance to it divided by that number. {o:logsolve} multiplies by the same number each time, so the time is how many multiplications it takes, and each change is bigger than the one before, so the target comes sooner.',
      test: 'When the problem asks how long, is each change the same size, or is each change bigger than the one before?' },
    { id: 'expg~oneoff', pair: ['expg', 'oneoff'], step: 'G1',
      shared: 'Both can be given as a percentage, and both can ask for the amount some years on.',
      rule: '{o:expg} multiplies the amount by the same number every time, so the percentage is applied again and again. {o:oneoff} applies the percentage one time, so it is the only change.',
      test: 'Is the percentage applied again each hour, day, week, month or year, or only one time?' },
    { id: 'logsolve~oneoff', pair: ['logsolve', 'oneoff'], step: 'G1',
      shared: 'Both can ask for the time to a target, and the amount in both can be one that has already grown.',
      rule: '{o:logsolve} has an amount that is multiplied each time, so it keeps moving, and a target above it is reached after some time. {o:oneoff} has an amount that changed one time and stays, so a target other than the figure it stays at is never reached.',
      test: 'When the problem asks how long, is the amount still changing each hour, day, week, month or year, or has it stopped?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. They follow the key’s first question’s
  // answers: the same number each time, a share each time (asked for the amount, then asked how long), and a change made one time (A13).
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The same number each time',
      cards: ['orient-growth', 'meet-lin', 'again-lin', 'lens-growth', 'portrait-lin', 'check-lin', 'solved-lin-1', 'solved-lin-2', 'check-lin-last', 'check-lin-whole'] },
    { id: 'p2', title: 'A share of the amount each time: what it will be',
      cards: ['term-multiplier', 'meet-expg', 'again-expg', 'portrait-expg', 'check-expg', 'term-logscale', 'solved-expg-1', 'solved-expg-2', 'check-expg-last', 'check-expg-whole',
              'look-lin-expg', 'exc-interest-out'] },
    { id: 'p3', title: 'A share of the amount each time: how long it takes',
      cards: ['meet-logsolve', 'again-logsolve', 'portrait-logsolve', 'check-logsolve', 'solved-logsolve-1', 'solved-logsolve-2', 'check-logsolve-last', 'check-logsolve-whole',
              'look-expg-logsolve', 'look-lin-logsolve'] },
    { id: 'p4', title: 'A change made one time',
      cards: ['meet-oneoff', 'again-oneoff', 'portrait-oneoff', 'check-oneoff', 'solved-oneoff-1', 'solved-oneoff-2', 'check-oneoff-last', 'check-oneoff-whole',
              'look-lin-oneoff', 'look-expg-oneoff', 'look-logsolve-oneoff'] },
    { id: 'p5', title: 'The two questions that tell them apart, then the drill',
      cards: ['q-g1', 'check-g1', 'q-g2', 'check-g2'], drill: true, close: ['recap-growth', 'transfer-growth'] }
  ],

  // The drill of a procedure unit has three stages (A12): last (the working is shown up to its last step, which is left to the
  // learner), whole (the problem alone, worked by the learner) and route (the key’s questions in order, the kind, then the
  // solving). Items are authored in groups of look-alikes: each group holds problems of two kinds that share a ledger pair, of one
  // tier, listed clean, then varied, then misleading. The route stage also carries problems from Unit One, unlabelled.
  drill: {
    key: 'u4',
    add: 'After each answer, look at the slip named behind a wrong choice. Every wrong choice is the answer one particular slip produces, and a slip you can name is a slip you can catch next time. Some of the problems tell a story that points the wrong way, on purpose: how the amount changes every time, and which question the problem asks, decide the kind, and a friend’s word for it, a percentage or a quick rise does not.',
    rungs: [
      { ask: 'last',
        items: [['m4-dl-lin-1', 'm4-dl-expg-1'], ['m4-dl-logsolve-1', 'm4-dl-oneoff-1'], ['m4-dl-lin-2', 'm4-dl-logsolve-2'], ['m4-dl-expg-2', 'm4-dl-oneoff-2']] },
      { ask: 'whole',
        items: [['m4-dw-lin-1', 'm4-dw-expg-1'], ['m4-dw-logsolve-1', 'm4-dw-oneoff-1'], ['m4-dw-lin-2', 'm4-dw-logsolve-2'], ['m4-dw-expg-2', 'm4-dw-oneoff-2']] },
      { ask: 'route',
        items: [[{ earlier: 'u1' }, { earlier: 'u1' }], [{ earlier: 'u1' }, { earlier: 'u1' }], [{ earlier: 'u1' }, { earlier: 'u1' }],
                ['m4-dr-lin-1', 'm4-dr-oneoff-1'], ['m4-dr-expg-1', 'm4-dr-logsolve-1'], ['m4-dr-lin-2', 'm4-dr-expg-2'], ['m4-dr-logsolve-2', 'm4-dr-oneoff-2'],
                ['m4-dr-lin-3', 'm4-dr-logsolve-3'], ['m4-dr-expg-3', 'm4-dr-oneoff-3'], ['m4-dr-lin-4', 'm4-dr-expg-4'],
                ['m4-dr-lin-5', 'm4-dr-expg-5'], ['m4-dr-logsolve-4', 'm4-dr-oneoff-4'], ['m4-dr-logsolve-5', 'm4-dr-expg-6']] }
    ],
    // Fresh problems for later days: three for each kind, one for each of its scheduled returns (E9). A kind that is due comes
    // back as a problem the learner has not seen, as a whole route, beside a problem of the kind they most often take it for.
    returns: ['m4-rt-lin-1', 'm4-rt-lin-2', 'm4-rt-lin-3', 'm4-rt-expg-1', 'm4-rt-expg-2', 'm4-rt-expg-3',
              'm4-rt-logsolve-1', 'm4-rt-logsolve-2', 'm4-rt-logsolve-3', 'm4-rt-oneoff-1', 'm4-rt-oneoff-2', 'm4-rt-oneoff-3']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the third procedure unit of Basic Math, replacing the old Unit Four (cards and the growth drill), specimens 7 to 9 and three faulty claims. Not yet deployed, so later edits before the first deploy stay revision 1. Four kinds of problem about an amount that changes as time passes, each taught with a problem of the kind, two worked examples with every step computed, and problems the learner finishes; two crossing questions; the drill has a last-step stage, a whole-problem stage and a route stage.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' }
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
