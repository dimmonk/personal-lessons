// Basic Math, Unit Six: the unit record. A PROCEDURE UNIT (kind 'P', lesson standard A12), the fifth of the subject.
// It teaches the key's two questions about shapes, "What does the problem give you to work with?" and "Does the problem ask how long something
// is, or how much area or volume it has?", and the four kinds of problem their answers lead to. The two questions cross: the first sorts
// two sides of a triangle with a square corner, one side and an angle, and two things of the same shape; the second separates the two kinds
// that start from two things of the same shape. Each kind has a procedure, taught with a problem of the kind, two worked examples in
// different areas of life (kind solved: every step named by what it is for, with its working and its reason, and one step whose reason is
// held back until the learner has chosen it), and problems the learner finishes. The drill has three stages: the last step of a worked
// problem, a whole problem, and a route (the key's questions, the kind, then the solving).
// Cards live in u6.cards-*.js, cases in u6.cases-*.js. Text fields never retype key wording; they use tokens:
// {q:S1} {a:S1.option} {o:outcome} {plain:outcome} {needs:outcome} {t:term} {test:ledgerId} {cue:S1}.

FC.unit('math', 'u6', {
  kind: 'P',
  rev: 2,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff
  tag: 'Six',
  title: { fromKey: 'M1.shape' },
  subtitle: 'Four kinds of problem about lengths, areas and volumes, and a procedure worked out step by step for each',
  teaches: { steps: ['S1', 'S2'], outcomes: ['pyth', 'trig', 'similar', 'sqcube'], terms: [] },
  assumes: ['u1', 'u2', 'u3', 'u4', 'u5'],

  // THE LOOK-ALIKE LEDGER. Four pairs. Three are separated by the first question and one by the second. Each is written once and used six
  // ways: the look-alike or exception card, its side-by-side table, the list on the question card, the feedback when one is picked for the
  // other, the grouping of drill items, and what returns together later. test is a question to put to a problem, with no name in it.
  ledger: [
    { id: 'pyth~trig', pair: ['pyth', 'trig'], step: 'S1',
      shared: 'Both find a side of a triangle with a square corner, and both can be about the very same ramp, wall or slope. The same length, such as 6.5 m, can be given in either.',
      rule: '{o:pyth} gives the lengths of two sides and no angle besides the square corner, and finds the third side from the squares of the other two. {o:trig} gives one side and one angle in degrees, and finds another side with a button on a calculator.',
      test: 'Besides the one length that everyone can see, is a second length given, or an angle in degrees?' },
    { id: 'pyth~similar', pair: ['pyth', 'similar'], step: 'S1',
      shared: 'Both can be about a triangle with a square corner and two given lengths, and a shadow is both at once. Both find a length that nobody measures directly.',
      rule: '{o:pyth} wants the third side of the very triangle whose other two sides are given, so there is one thing and its own triangle. {o:similar} wants a length on a second thing of exactly the same shape, found from how many times longer that thing is than the first.',
      test: 'Is the length wanted a side of the very triangle whose other sides are given, or a length on a second thing of the same shape?' },
    { id: 'trig~similar', pair: ['trig', 'similar'], step: 'S1',
      shared: 'Both can find a height that nobody can measure directly, such as a tower, a tree or a lighthouse, and both use a comparison between lengths that stays the same however big the thing is.',
      rule: '{o:trig} is given one side and an angle in degrees, and the angle does the work of a second length. {o:similar} is given no angle: it is given a copy at another size, with a length measured on both things.',
      test: 'Is an angle in degrees given, or a length measured on both of two things of the same shape?' },
    { id: 'similar~sqcube', pair: ['similar', 'sqcube'], step: 'S2',
      shared: 'Both start from two things of exactly the same shape at different sizes, and both find their answer by multiplying by how many times longer the bigger one is. The same two things, with the same numbers, can be given in either.',
      rule: '{o:similar} asks how long a part of the bigger thing is, and multiplies by how many times longer it is once. {o:sqcube} asks how much surface or how much room inside the bigger thing has, and multiplies by how many times longer it is twice over for a surface, and three times over for the room inside.',
      test: 'Does the problem ask how long a part is, or how much surface or how much room inside?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. They follow the key's first question, one part for
  // each answer's kinds, in the key's order: two sides (Pythagoras' theorem), one side and one angle (Trigonometry), and two things of the same
  // shape, in two parts, one for a length (Similar shapes) and one for an area or a volume (the Square-cube law) (A13). The part with
  // drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Two sides of a triangle with a square corner: the third side',
      cards: ['orient-shape', 'meet-pyth', 'again-pyth', 'lens-procedure', 'portrait-pyth', 'check-pyth',
              'solved-pyth-1', 'solved-pyth-2', 'check-pyth-last', 'check-pyth-whole'] },
    { id: 'p2', title: 'One side and one angle: another side',
      cards: ['meet-trig', 'again-trig', 'portrait-trig', 'check-trig', 'solved-trig-1', 'solved-trig-2', 'check-trig-last', 'check-trig-whole', 'look-pyth-trig'] },
    { id: 'p3', title: 'Two things of the same shape: a length',
      cards: ['meet-similar', 'again-similar', 'portrait-similar', 'check-similar', 'solved-similar-1', 'solved-similar-2',
              'check-similar-last', 'check-similar-whole', 'exc-shadow', 'look-trig-similar', 'q-s1', 'check-s1'] },
    { id: 'p4', title: 'Two things of the same shape: an area or a volume',
      cards: ['meet-sqcube', 'again-sqcube', 'portrait-sqcube', 'check-sqcube', 'solved-sqcube-1', 'solved-sqcube-2',
              'check-sqcube-last', 'check-sqcube-whole', 'look-similar-sqcube'] },
    { id: 'p5', title: 'The question that tells the last two apart, then the drill',
      cards: ['q-s2', 'check-s2'], drill: true, close: ['recap-shape', 'transfer-shape'] }
  ],

  // The drill of a procedure unit has three stages (A12): last (the working is shown up to its last step, which is left to the learner),
  // whole (the problem alone, worked by the learner) and route (the key's questions in order, the kind, then the solving). Items are authored
  // in groups of look-alikes: each group holds problems of kinds that share a ledger pair, of one tier, listed clean, then varied, then
  // misleading. The route stage also carries problems from Unit One, unlabelled.
  drill: {
    key: 'u6',
    add: 'After each answer, look at the slip named behind a wrong choice. Every wrong choice is the answer one particular slip produces, and a slip you can name is a slip you can catch next time. Some of the problems tell a story that points the wrong way, on purpose: what the problem gives you and what it asks about decides the kind, and nothing else in the story does.',
    rungs: [
      { ask: 'last',
        items: [['m6-dl-pyth-1', 'm6-dl-trig-1'], ['m6-dl-pyth-3', 'm6-dl-trig-3'], ['m6-dl-similar-1', 'm6-dl-sqcube-1', 'm6-dl-similar-2'],
                ['m6-dl-pyth-2', 'm6-dl-similar-3'], ['m6-dl-trig-2', 'm6-dl-similar-4', 'm6-dl-sqcube-2']] },
      { ask: 'whole',
        items: [['m6-dw-pyth-1', 'm6-dw-trig-1'], ['m6-dw-pyth-3', 'm6-dw-trig-3'], ['m6-dw-similar-1', 'm6-dw-sqcube-2', 'm6-dw-similar-2'],
                ['m6-dw-pyth-2', 'm6-dw-similar-3'], ['m6-dw-trig-2', 'm6-dw-similar-4', 'm6-dw-sqcube-1']] },
      { ask: 'route',
        items: [[{ earlier: 'u1' }, { earlier: 'u1' }], [{ earlier: 'u1' }, { earlier: 'u1' }], [{ earlier: 'u1' }, { earlier: 'u1' }],
                ['m6-dr-pyth-1', 'm6-dr-trig-1'], ['m6-dr-trig-2', 'm6-dr-similar-1'], ['m6-dr-similar-2', 'm6-dr-sqcube-1'],
                ['m6-dr-pyth-2', 'm6-dr-similar-3'], ['m6-dr-pyth-3', 'm6-dr-trig-3'], ['m6-dr-sqcube-2', 'm6-dr-similar-4'],
                ['m6-dr-pyth-4', 'm6-dr-trig-4'], ['m6-dr-similar-5', 'm6-dr-sqcube-3'], ['m6-dr-similar-6', 'm6-dr-sqcube-4']] }
    ],
    // Fresh problems for later days: three for each kind, one for each of its scheduled returns (E9). A kind that is due comes back as a
    // problem the learner has not seen, as a whole route, beside a problem of the kind they most often take it for.
    returns: ['m6-rt-pyth-1', 'm6-rt-pyth-2', 'm6-rt-pyth-3', 'm6-rt-trig-1', 'm6-rt-trig-2', 'm6-rt-trig-3',
              'm6-rt-similar-1', 'm6-rt-similar-2', 'm6-rt-similar-3', 'm6-rt-sqcube-1', 'm6-rt-sqcube-2', 'm6-rt-sqcube-3']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the fifth procedure unit of Basic Math, replacing the old Unit Three’s second half (the four shape cards), specimens 13 and 14 and two faulty claims. Not yet deployed, so later edits before the first deploy stay revision 1. Four kinds of problem about shapes, each taught with a problem of the kind, two worked examples with every step computed, and problems the learner finishes; the key’s two crossing questions each get a card; the shadow is taught as an exception; the drill has a last-step stage, a whole-problem stage and a route stage.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' }
    ],
    // What the K2 rewrite changed in this unit's part of the key, and why (from docs/rebuild/math-plan.md, section (a)).
    keyChanges: [
      { step: 'S1', was: 'S1 "What do you have to work with?" with answers "Two sides around a right angle, no angles given", "One angle and one side", "Two things with the same shape but different sizes"',
        now: 'S1 "What does the problem give you to work with?" with answers "Two sides of a right-angled triangle", "One side and one angle of a right-angled triangle", "Two things of the same shape at different sizes"',
        why: 'Audit U3-5: the old wording did not describe the ladder (the long side and one short side), and "no angles given" contradicted the right angle. The new answer covers any two sides, and the shape procedure for one side and one angle needs the right angle.' },
      { step: 'S1', was: 'no tie-break between two sides and a second thing of the same shape',
        now: 'twosides yieldsTo matching: a second thing of the same shape at a different size, and the length wanted is on that second thing',
        why: 'Found when re-running the old shadow item (K2.10): the child and her shadow are two sides of a right-angled triangle, so the problem shows both answers. It is taught as the exception on the shadow.' },
      { step: 'S2', was: 'S2 "What do you want to find?" with answers "The third side of the right-angled triangle", "A length you cannot measure directly, using an angle", "A missing length, using the matching sides of the same shape", "How the area or volume changes when the length changes"',
        now: 'S2 "Does the problem ask how long something is, or how much area or volume it has?" with answers length and room, crossed with S1',
        why: 'V55: three of the four old answers restated S1, each keeping one name. Crossed, S2 has one job: separating Similar shapes from the Square-cube law.' },
      { outcome: 'pyth', was: 'name "Third side of a right-angled triangle (Pythagoras)"', now: 'name "Pythagoras’ theorem", also called Pythagoras and a² + b² = c²', why: 'V1 and K4: the real-life name is the target, the other half moved to the other names, shown once on the card that introduces it.' },
      { outcome: 'sqcube', was: 'name "Area and volume grow faster than length (square–cube law)"', now: 'name "Square-cube law"', why: 'V1: the en dash and the brackets break the rule that a name holds one name.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
