// Basic Math, Unit Five: the unit record. A PROCEDURE UNIT (kind 'P', lesson standard A12), built like Unit Two, the subject's first.
// It teaches the key's one question about counting and chance, "What does the problem ask you to count, or find the chance of?", and the
// five kinds of problem its answers lead to. A quick lesson (lesson standard section 19): each kind has a meet card, a check and one
// worked example (kind solved: every step named by what it is for, with its working and its reason, and one step whose reason is held
// back until the learner has chosen it). The drill is one stage, the route (the key's questions, the kind, then the solving).
// Cards live in u5.cards-*.js, cases in u5.cases-*.js. Text fields never retype key wording; they use tokens:
// {q:C1} {a:C1.option} {o:outcome} {plain:outcome} {needs:outcome} {test:ledgerId} {cue:C1}.
// A step's `does` and `working` are shown as they are, so they carry no tokens and no key wording.

FC.unit('math', 'u5', {
  kind: 'P',
  rev: 5,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff
  tag: 'Five',
  title: { text: 'Counting ways, and how likely it is' },
  subtitle: 'Five kinds of problem about counting and chance, each worked out step by step',
  teaches: { steps: ['C1'], outcomes: ['multprin', 'perm', 'comb', 'complement', 'baserate'], terms: [] },
  assumes: ['u1', 'u2', 'u3', 'u4'],

  // THE LOOK-ALIKE LEDGER. Five pairs, all on the one question this unit teaches. Each is written once and used six ways: the
  // look-alike card, its side-by-side table, the list on the question card, the feedback when one is picked for the other, the
  // grouping of drill items, and what returns together later. test is a question to put to a problem, with no name in it.
  ledger: [
    { id: 'multprin~perm', pair: ['multprin', 'perm'], step: 'C1',
      shared: 'Both multiply one count for each pick, both can be about the very same people and the very same jobs, and in both a different order is a different result.',
      rule: '{o:multprin} makes separate choices, each from a full list of its own, so no pick uses anything up and the counts stay the same. {o:perm} picks from one group, so each pick uses someone up and the counts fall by one each time.',
      test: 'After one pick, is the next one made from a list of the same length, or from what is left of the same group?' },
    { id: 'perm~comb', pair: ['perm', 'comb'], step: 'C1',
      shared: 'Both pick from one group, each pick uses someone up, and both start from the very same count of picks in order.',
      rule: '{o:perm} counts a different order as a different result, so the count in order is the answer. {o:comb} counts the same things in any order as one result, so you divide the count in order by the number of orders one group can come in.',
      test: 'Is the same group, picked in a different order, a different result or the same one?' },
    { id: 'multprin~comb', pair: ['multprin', 'comb'], step: 'C1', taughtIn: 'q-c1',
      shared: 'Both can be about the same stall or menu, and both use multiplication.',
      rule: '{o:multprin} takes a pick from every list, so each list stays full. {o:comb} takes several picks from one list, so each pick leaves one fewer, and the same picks in any order are one result.',
      test: 'Does each list get one pick, or do several picks come from one list?' },
    { id: 'complement~multprin', pair: ['complement', 'multprin'], step: 'C1', taughtIn: 'q-c1',
      shared: 'Both are about several separate things, both multiply one number for each, and they can be about the very same game.',
      rule: '{o:multprin} asks how many different results the choices can make, so its answer is a count. {o:complement} asks how likely it is that one or more of the things happens, so its answer is a chance, a number from 0 to 1.',
      test: 'Do you want a count of results, or the chance that something happens?' },
    { id: 'complement~baserate', pair: ['complement', 'baserate'], step: 'C1', taughtIn: 'q-c1',
      shared: 'Both ask for a chance, both are given chances such as 90% or 5%, and both can be about a machine or a test that raises a flag.',
      rule: '{o:complement} has several separate things still to happen, each with its own chance, and wants the chance of one or more of them. {o:baserate} has one result a test has already given, and asks how far to trust it, which depends on how rare the thing is.',
      test: 'Are there several separate things still to happen, each with its own chance, or one result that has already come in and a question about how far to trust it?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. Two parts before the drill: the three kinds of
  // counting, then the two kinds of chance. The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'ch-count', title: 'How many ways: separate lists, a group in order, a group in any order',
      cards: ['orient-chance', 'meet-multprin', 'check-multprin', 'solved-multprin-1',
              'meet-perm', 'check-perm', 'solved-perm-1', 'look-multprin-perm',
              'meet-comb', 'check-comb', 'solved-comb-1', 'look-perm-comb'] },
    { id: 'ch-chance', title: 'How likely: at least one of several things, and trusting a test',
      cards: ['meet-complement', 'check-complement', 'solved-complement-1',
              'meet-baserate', 'check-baserate', 'solved-baserate-1'] },
    { id: 'ch-drill', title: 'Telling the five apart, then the drill',
      cards: ['q-c1', 'check-c1'], drill: true, close: ['recap-chance'] }
  ],

  // The drill is one stage: the route (the key's questions in order, the kind, then the solving). Items are authored in groups of
  // look-alikes: each group holds problems of different kinds that share a ledger pair, of one tier, listed clean, then varied, then
  // misleading. The route stage also carries problems from Unit One, unlabelled.
  drill: {
    key: 'u5',
    add: 'After each answer, read the slip named behind a wrong choice: every wrong choice is what one particular slip produces. Some problems point the wrong way on purpose. How the picks are made, and what is asked, decide the kind. Nothing else in the problem does.',
    rungs: [
      { ask: 'route',
        items: [[{ earlier: 'u1' }, { earlier: 'u1' }],
                ['m5-dr-mp-1', 'm5-dr-pe-1', 'm5-dr-co-1'], ['m5-dr-cm-1', 'm5-dr-br-1'],
                ['m5-dr-pe-2', 'm5-dr-co-2'],
                ['m5-dr-mp-3', 'm5-dr-pe-4'], ['m5-dr-cm-3', 'm5-dr-br-3']] }
    ],
    // One fresh problem for each kind, for a later day (E9): a kind that is due comes back as a problem the learner has not seen.
    returns: ['m5-rt-mp-3', 'm5-rt-pe-3', 'm5-rt-co-3', 'm5-rt-cm-3', 'm5-rt-br-3']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    wrongIdeas: [],
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the counting and chance unit of Basic Math, replacing the old Unit Five (four cards and the counting drill), specimens 10 to 12 and three faulty claims. Not yet deployed, so later edits before the first deploy stay revision 1. Five kinds of problem, each taught with a problem of the kind, two worked examples with every step computed, and problems the learner finishes; the drill has a last-step stage, a whole-problem stage and a route stage. Three wrong ideas are refuted: the name of a lock, the run that is due, and the accurate test.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
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
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
