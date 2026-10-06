// Basic Math, Unit Three: the unit record. A PROCEDURE unit (kind 'P', lesson standard A12), the "missing numbers" branch.
// It teaches the key's one question about a missing number, "What does the problem give that the missing number must fit?", and the
// four kinds of problem its answers lead to. Each kind has a procedure, taught with a problem of the kind, one worked example (kind
// solved: every step named by what it is for, with its working and its reason, and one step whose reason is held back until the
// learner has chosen it), and a check. The drill is one stage: a route (the key's questions, the kind, then the solving).
// Cards live in u3.cards-*.js, cases in u3.cases-*.js. Text fields never retype key wording; they use tokens:
// {q:A1} {a:A1.option} {o:outcome} {plain:outcome} {needs:outcome} {t:term} {test:ledgerId} {cue:A1}.
// Every problem's working, wrong choices and slips were computed by a script from the problem's own numbers, with the answer put
// back into the problem to prove it: a number changed by hand must be re-worked by hand.

FC.unit('math', 'u3', {
  kind: 'P',
  rev: 4,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff
  tag: 'Three',
  title: { fromKey: 'M1.unknown' },
  subtitle: 'Four kinds of problem with a number missing, and a procedure worked out step by step for each',
  teaches: { steps: ['A1'], outcomes: ['rearr', 'prop', 'simul', 'quad'], terms: ['squared'] },
  assumes: ['u1', 'u2'],

  // THE LOOK-ALIKE LEDGER. Three pairs, all on the one question this unit teaches. Rearranging a formula is in every pair, because it
  // is the plainest kind and the other three each get mistaken for it. Each is written once and used six ways: the look-alike card,
  // its side-by-side table, the list on the question card, the feedback when one is picked for the other, the grouping of drill
  // items, and what returns together later. test is a question to put to a problem, with no name in it.
  ledger: [
    { id: 'rearr~prop', pair: ['rearr', 'prop'], step: 'A1',
      shared: 'Both leave one number out and both are worked with a few numbers and one multiplication or division. The same two numbers, such as 4 and 12, can be a rate in one and two numbers in a calculation in the other.',
      rule: '{o:rearr} has a calculation, and the result it came to: the missing number is found by undoing the calculation. {o:prop} has only so much for so many and a new amount of the same thing: the rate is scaled up or down. A fixed amount added on top of a rate makes a calculation, so it is {o:rearr}.',
      test: 'Is there a calculation with a result it came to, or anything fixed added on top of the price for each one? Or is there only a rate, and a new amount of what the rate is for?' },
    { id: 'rearr~simul', pair: ['rearr', 'simul'], step: 'A1',
      shared: 'Both leave numbers out and both end by putting the answer back to see that it fits. A problem about totals can be turned into a calculation, and a calculation can have two letters in it.',
      rule: '{o:rearr} has one missing number and one result, and each thing done to the missing number is undone in turn. {o:simul} has two missing numbers and two separate facts about them; neither fact can be undone alone, so one fact is used to leave a single letter in the other.',
      test: 'How many numbers are left out, and how many separate facts are given about them? One number and one result, or two numbers and two facts?' },
    { id: 'rearr~quad', pair: ['rearr', 'quad'], step: 'A1',
      shared: 'Both give a {t:formula} and the result it came to, and leave one number out. The same shapes, such as a rectangle and its area, turn up in both.',
      rule: '{o:rearr} has the missing number in the calculation once, so each thing done to it can be undone in turn. {o:quad} has the missing number multiplied by itself as well as on its own, so it cannot be undone one thing at a time: the square is completed instead, and there can be two answers.',
      test: 'Does the missing number appear once in the calculation, or is it multiplied by itself?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. They follow the key's answers in the
  // key's order: a formula, a rate, two facts, a number multiplied by itself, then the question that tells them apart.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'A calculation and its result, and a rate',
      cards: ['orient-unknown', 'meet-rearr', 'check-rearr', 'solved-rearr-1',
              'meet-prop', 'check-prop', 'solved-prop-1', 'exc-bill'] },
    { id: 'p2', title: 'Two numbers to find, a missing number multiplied by itself, then the drill',
      cards: ['meet-simul', 'check-simul', 'solved-simul-1', 'look-rearr-simul',
              'term-squared', 'meet-quad', 'check-quad', 'solved-quad-1', 'exc-breakeven',
              'q-a1', 'check-a1'], drill: true, close: ['recap-unknown'] }
  ],

  // The drill of a procedure unit: the route stage (the key's questions in order, the kind, then the solving). Items are authored
  // in groups of look-alikes: each group holds problems of kinds that share a ledger pair, of one tier. Rearranging a formula is in
  // every ledger pair, so it is in every group. The route stage also carries problems from Units One and Two, unlabelled.
  drill: {
    key: 'u3',
    rungs: [
      { ask: 'route',
        items: [[{ earlier: 'u1' }], [{ earlier: 'u2' }],
                ['m3-dr-rearr-1', 'm3-dr-prop-1', 'm3-dr-simul-1'],
                ['m3-dr-quad-1', 'm3-dr-rearr-3', 'm3-dr-simul-2'],
                ['m3-dr-rearr-5', 'm3-dr-prop-3'],
                ['m3-dr-quad-2', 'm3-dr-rearr-6']] }
    ],
    // Fresh problems for later days: one for each kind (E9). A kind that is due comes back as a problem the learner has not seen,
    // as a whole route, beside a problem of the kind they most often take it for.
    returns: ['m3-rt-rearr-2', 'm3-rt-prop-2', 'm3-rt-simul-2', 'm3-rt-quad-2']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the missing-number branch of Basic Math, replacing the old Unit Three (first half) and its drill. Four kinds of problem, each taught with a problem of the kind, two worked examples with every step computed, and problems the learner finishes; two exceptions (an electricity bill that looks like a rate and is a formula, a break-even profit that looks like a formula and is a squared missing number); the drill has a last-step stage, a whole-problem stage and a route stage. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' }
    ],
    // What the K2 rewrite changed in this unit's part of the key, and why (from docs/rebuild/math-plan.md, section (a)).
    keyChanges: [
      { step: 'A1', was: 'two questions: A1 "How does the missing number show up?" (once / sq / two) and A2 "What do you want out of it?" (isolate / scale / crossing / roots, one name each)',
        now: 'one question, "What does the problem give that the missing number must fit?", with four answers, one name each',
        why: 'A2 kept one name per answer, so a learner could only answer it once they knew the name. A1’s "once" could not tell rearranging from proportion (audit U3-3). A2’s "roots" described one story, a thrown stone, and not the kind of problem. What is given (a formula and its result; a rate and a new amount; two facts; a formula with the missing number multiplied by itself) decides the procedure and is visible in every case.' },
      { step: 'A1', was: 'no tie-break', now: 'rate yieldsTo formula: a fixed amount added on top of the rate, such as a call-out fee or a standing charge',
        why: 'The electricity bill (a monthly charge plus a price for each unit) shows a rate and a formula. It is taught as an exception card.' },
      { step: 'A1', was: 'no tie-break', now: 'formula yieldsTo itself: the missing number multiplied by itself',
        why: 'The break-even profit shows a formula and a result, and its missing number is multiplied by itself. It is taught as an exception card.' },
      { step: 'A1', was: 'the rate answer’s `when`', now: 'says the rate is for each thing, not for each hour, month or year',
        why: 'Restates the gate’s tie-break where the question is taught.' },
      { outcome: 'prop', was: 'every old name was a plain phrase with the technical name in parentheses', now: 'Rearranging a formula (kept), Proportion, Simultaneous equations, Quadratic equation', why: 'K4, V1: one name for one thing, the real-life word where people meet it.' },
      { was: 'no term declared; "squared" and the raised 2 used untaught', now: 'term squared, taught in this unit', why: 'K6: one term card, with a case first, before the first card that leans on it.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
