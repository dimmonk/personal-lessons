// Basic Math, Unit Five: the unit record. A PROCEDURE UNIT (kind 'P', lesson standard A12), built like Unit Two, the subject's first.
// It teaches the key's one question about counting and chance, "What does the problem ask you to count, or find the chance of?", and the
// five kinds of problem its answers lead to. Each kind has a procedure, taught with a problem of the kind, two worked examples in different
// areas of life (kind solved: every step named by what it is for, with its working and its reason, and one step whose reason is held
// back until the learner has chosen it), and problems the learner finishes. The drill has three stages: the last step of a worked
// problem, a whole problem, and a route (the key's questions, the kind, then the solving).
// Cards live in u5.cards-*.js, cases in u5.cases-*.js. Text fields never retype key wording; they use tokens:
// {q:C1} {a:C1.option} {o:outcome} {plain:outcome} {needs:outcome} {test:ledgerId} {cue:C1}.
// A step's `does` and `working` are shown as they are, so they carry no tokens and no key wording.

FC.unit('math', 'u5', {
  kind: 'P',
  rev: 3,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff
  tag: 'Five',
  title: { fromKey: 'M1.chance' },
  subtitle: 'Five kinds of problem about counting and chance, and a procedure worked out step by step for each',
  teaches: { steps: ['C1'], outcomes: ['multprin', 'perm', 'comb', 'complement', 'baserate'], terms: [] },
  assumes: ['u1', 'u2', 'u3', 'u4'],

  // THE LOOK-ALIKE LEDGER. Five pairs, all on the one question this unit teaches. Each is written once and used six ways: the
  // look-alike card, its side-by-side table, the list on the question card, the feedback when one is picked for the other, the
  // grouping of drill items, and what returns together later. test is a question to put to a problem, with no name in it.
  ledger: [
    { id: 'multprin~perm', pair: ['multprin', 'perm'], step: 'C1',
      shared: 'Both multiply one count for each choice, both can be about the very same people and the very same jobs, and in both a different order of the jobs is a different result.',
      rule: '{o:multprin} makes separate choices, each from a full list of its own, so a pick uses nothing up and the counts stay the same. {o:perm} picks from one group, so each pick uses someone up and the counts fall by one each time.',
      test: 'After one choice has been made, is the next one made from a list of the same length, or from what is left of the same group?' },
    { id: 'perm~comb', pair: ['perm', 'comb'], step: 'C1',
      shared: 'Both pick from one group, with each pick using someone up, and both begin from the very same count of picks in order.',
      rule: '{o:perm} counts a different order as a different result, so the count in order is the answer. {o:comb} counts the same things in any order as one result, so the count in order is divided by the number of orders one group can be put in.',
      test: 'Does the same group of things, picked in a different order, count as a different result or as the same one?' },
    { id: 'multprin~comb', pair: ['multprin', 'comb'], step: 'C1',
      shared: 'Both can be about the same stall or menu, and both use multiplication to get the answer.',
      rule: '{o:multprin} makes one pick from each of several separate lists, so every list stays full. {o:comb} makes several picks from one list, so each pick leaves one fewer, and the same picks in any order are one result.',
      test: 'Are there several separate lists with one pick from each, or one list with several picks from it?' },
    { id: 'complement~multprin', pair: ['complement', 'multprin'], step: 'C1',
      shared: 'Both are about several separate things, and both multiply one number for each of them. They can be about the very same game.',
      rule: '{o:multprin} asks how many different results the separate choices can make, so its answer is a count. {o:complement} asks how likely it is that one or more of the separate things happens, so its answer is a chance, a number from 0 to 1.',
      test: 'Is the answer wanted a count of results, or the chance that something happens?' },
    { id: 'complement~baserate', pair: ['complement', 'baserate'], step: 'C1',
      shared: 'Both ask for a chance, both are given chances such as 90% or 5%, and both can be about a machine or a test that raises a flag.',
      rule: '{o:complement} lists separate things that have yet to happen, each with its own chance, and wants the chance of one or more of them. {o:baserate} has one result that a test has already given, and asks how likely it is that the result is right, which depends on how rare the thing is.',
      test: 'Are there several separate things, with a chance for each, that have yet to happen, or is there one result that has already come in and a question about how far to trust it?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. They follow the key's answers, one part
  // for each kind of problem, in the key's order (A13). The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'ch-lists', title: 'One pick from each of several lists',
      cards: ['orient-chance', 'meet-multprin', 'again-multprin', 'lens-chance', 'portrait-multprin', 'check-multprin',
              'solved-multprin-1', 'solved-multprin-2', 'check-multprin-last', 'check-multprin-whole'] },
    { id: 'ch-order', title: 'One group, picking in order',
      cards: ['meet-perm', 'again-perm', 'portrait-perm', 'check-perm', 'solved-perm-1', 'solved-perm-2', 'check-perm-last', 'check-perm-whole',
              'look-multprin-perm'] },
    { id: 'ch-group', title: 'One group, and an order that does not count',
      cards: ['meet-comb', 'again-comb', 'portrait-comb', 'check-comb', 'solved-comb-1', 'solved-comb-2', 'check-comb-last', 'check-comb-whole',
              'look-perm-comb', 'look-multprin-comb', 'refute-lock'] },
    { id: 'ch-opposite', title: 'The chance of one or more of a set of separate things',
      cards: ['meet-complement', 'again-complement', 'portrait-complement', 'check-complement', 'solved-complement-1', 'solved-complement-2',
              'check-complement-last', 'check-complement-whole', 'look-complement-multprin', 'refute-due'] },
    { id: 'ch-test', title: 'Trusting a test result',
      cards: ['meet-baserate', 'again-baserate', 'portrait-baserate', 'check-baserate', 'solved-baserate-1', 'solved-baserate-2',
              'check-baserate-last', 'check-baserate-whole', 'look-complement-baserate', 'refute-test'] },
    { id: 'ch-drill', title: 'The question that tells them apart, then the drill',
      cards: ['q-c1', 'check-c1'], drill: true, close: ['recap-chance', 'transfer-chance'] }
  ],

  // The drill of a procedure unit has three stages (A12): last (the working is shown up to its last step, which is left to the
  // learner), whole (the problem alone, worked by the learner) and route (the key's questions in order, the kind, then the
  // solving). Items are authored in groups of look-alikes: each group holds problems of different kinds that share a ledger pair, of
  // one tier, listed clean, then varied, then misleading. The route stage also carries problems from Unit One, unlabelled.
  drill: {
    key: 'u5',
    add: 'After each answer, look at the slip named behind a wrong choice. Every wrong choice is the answer one particular slip produces, and a slip you can name is a slip you can catch next time. Some of the problems tell a story that points the wrong way, on purpose: how the picks are made, and what is asked, decide the kind, and nothing else in the story does.',
    rungs: [
      { ask: 'last',
        items: [['m5-dl-mp-1', 'm5-dl-pe-1'], ['m5-dl-pe-2', 'm5-dl-co-1'], ['m5-dl-co-2', 'm5-dl-mp-2'], ['m5-dl-cm-1', 'm5-dl-br-1'], ['m5-dl-br-2', 'm5-dl-cm-2']] },
      { ask: 'whole',
        items: [['m5-dw-mp-1', 'm5-dw-pe-1'], ['m5-dw-pe-2', 'm5-dw-co-1'], ['m5-dw-co-2', 'm5-dw-mp-2'], ['m5-dw-cm-1', 'm5-dw-br-1'], ['m5-dw-br-2', 'm5-dw-cm-2']] },
      { ask: 'route',
        items: [[{ earlier: 'u1' }, { earlier: 'u1' }], [{ earlier: 'u1' }, { earlier: 'u1' }], [{ earlier: 'u1' }, { earlier: 'u1' }],
                ['m5-dr-mp-1', 'm5-dr-pe-1', 'm5-dr-co-1'], ['m5-dr-cm-1', 'm5-dr-br-1'],
                ['m5-dr-mp-2', 'm5-dr-pe-2', 'm5-dr-co-2'], ['m5-dr-cm-2', 'm5-dr-br-2'],
                ['m5-dr-mp-3', 'm5-dr-pe-4'], ['m5-dr-pe-3', 'm5-dr-co-3'], ['m5-dr-mp-4', 'm5-dr-co-4'], ['m5-dr-cm-3', 'm5-dr-br-3'], ['m5-dr-cm-4', 'm5-dr-br-4']] }
    ],
    // Fresh problems for later days: three for each kind, one for each of its scheduled returns (E9). A kind that is due comes
    // back as a problem the learner has not seen, as a whole route, beside a problem of the kind they most often take it for.
    returns: ['m5-rt-mp-1', 'm5-rt-mp-2', 'm5-rt-mp-3', 'm5-rt-pe-1', 'm5-rt-pe-2', 'm5-rt-pe-3', 'm5-rt-co-1', 'm5-rt-co-2', 'm5-rt-co-3',
              'm5-rt-cm-1', 'm5-rt-cm-2', 'm5-rt-cm-3', 'm5-rt-br-1', 'm5-rt-br-2', 'm5-rt-br-3']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the counting and chance unit of Basic Math, replacing the old Unit Five (four cards and the counting drill), specimens 10 to 12 and three faulty claims. Not yet deployed, so later edits before the first deploy stay revision 1. Five kinds of problem, each taught with a problem of the kind, two worked examples with every step computed, and problems the learner finishes; the drill has a last-step stage, a whole-problem stage and a route stage. Three wrong ideas are refuted: the name of a lock, the run that is due, and the accurate test.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' }
    ],
    // What the K2 rewrite changed in this unit's part of the key, and why (from docs/rebuild/math-plan.md, section (a)).
    keyChanges: [
      { step: 'C1', was: 'two questions: C1 "What is the question asking for?" (arrange, atleast, given) and C2 "What detail in the case decides it?" (slots, group, order, none, rare, one name each)',
        now: 'one question, "What does the problem ask you to count, or find the chance of?", with five answers, one name each',
        why: 'C2 kept one name per answer (V55). C1 grouped three counting names that C2 split again, so C1 separated no pair that C2 did not. C2’s "none" answer ("Counting none of them is far easier than counting at least one") was advice, not something a problem shows, and "slots" and "menu" were figures of speech (K2.6).' },
      { outcome: 'complement', was: 'names "Complement rule" and "Independent events", with "independent" used for two things and never defined (audit U5-5)',
        now: 'names Multiplying the choices, Permutations, Combinations, Counting the opposite and Base rate; the textbook names are other names on the first card of each',
        why: 'K4, V1. "Counting the opposite" and "Multiplying the choices" stay plain, and the textbook names (the complement rule, the multiplication principle) are other names. "Independent" is replaced by what it means: one does not change the chance of another.' }
    ],
    wrongIdeas: [
      { card: 'refute-lock', about: 'multprin',
        source: { kind: 'app-data', verified: false,
          ref: 'docs/comprehension-audit/math.md (the padlock of four dials in the old drill, and the old unit’s thin treatment of it): the name “combination” on the lock points to the third kind. Taken from the audit’s learner simulation; to be confirmed against what cold readers do with the drill.' } },
      { card: 'refute-due', about: 'complement',
        source: { kind: 'app-data', verified: false,
          ref: 'docs/comprehension-audit/math.md (U5-8 and the old faulty claim about six reds in a row): the old unit said “each spin is independent” with no roulette context. Taken from the audit; to be confirmed against what cold readers say about a run.' } },
      { card: 'refute-test', about: 'baserate',
        source: { kind: 'app-data', verified: false,
          ref: 'docs/comprehension-audit/math.md (U5-4) and the old faulty claim that a 95% accurate test means a 95% chance: the old base-rate card read “99% accurate” silently as a false-alarm rate. Taken from the audit; to be confirmed against what cold readers do with the drill.' } }
    ],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
