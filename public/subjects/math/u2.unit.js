// Basic Math, Unit Two: the unit record. This is the subject's FIRST PROCEDURE UNIT (kind 'P', lesson standard A12).
// It teaches the key's one question about whole numbers, "What does the problem want to know about the number or numbers?", and
// the six kinds of problem its answers lead to. A quick lesson (lesson standard section 19): each kind has a meet card with a problem
// of the kind, a check, and one worked example (kind solved: every step named by what it is for, with its working and its reason,
// and one step whose reason is held back until the learner has chosen it). The drill is one stage, the route (the key's question,
// the kind, then the solving).
// Cards live in u2.cards-*.js, cases in u2.cases-*.js. Text fields never retype key wording; they use tokens:
// {q:W1} {a:W1.option} {o:outcome} {plain:outcome} {needs:outcome} {t:term} {test:ledgerId} {cue:W1}.
// A step's `does` and `working` are shown as they are, so they carry no tokens and no key wording.

FC.unit('math', 'u2', {
  kind: 'P',
  rev: 4,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff
  tag: 'Two',
  title: { fromKey: 'M1.whole' },
  subtitle: 'Six kinds of problem about whole numbers, and a procedure worked out step by step for each',
  teaches: { steps: ['W1'], outcomes: ['prime', 'factor', 'hcf', 'lcm', 'modrem', 'irrat'], terms: ['prime', 'factor', 'sqroot'] },
  assumes: ['u1'],

  // THE LOOK-ALIKE LEDGER. Five pairs, all on the one question this unit teaches. Each is written once and used six ways: the
  // look-alike card, its side-by-side table, the list on the question card, the feedback when one is picked for the other, the
  // grouping of drill items, and what returns together later. test is a question to put to a problem, with no name in it.
  ledger: [
    { id: 'prime~factor', pair: ['prime', 'factor'], step: 'W1',
      shared: 'Both give a single whole number and are about breaking it into equal shares. The working for one finds things the other needs, and one number, such as 57, can be asked about in both.',
      rule: '{o:prime} wants a verdict on one number: whether it can be shared out equally, which is a yes or a no. {o:factor} wants what the number is made of, or every way it splits, and its answer is a list or a count.',
      test: 'Is a yes or a no wanted about one number, or a list of what it is made of, or of every way it splits?' },
    { id: 'factor~hcf', taughtIn: 'q-w1', pair: ['factor', 'hcf'], step: 'W1',
      shared: 'Both talk about equal packs, rows or groups, and both are worked from the primes of the numbers.',
      rule: '{o:factor} takes one number apart, and asks what it is made of or every way it splits. {o:hcf} gives two numbers, and asks for the biggest piece that fits into both with nothing left over.',
      test: 'Is there one number to be taken apart, or are there two numbers that must both be cut into pieces of one size?' },
    { id: 'hcf~lcm', pair: ['hcf', 'lcm'], step: 'W1',
      shared: 'Both give two whole numbers, and both are worked from the primes of both numbers. The same two numbers, such as 16 and 24, can be asked about in either.',
      rule: '{o:hcf} asks for the biggest piece that fits into both numbers, so its answer is never more than the smaller number, and it keeps the primes that both numbers have. {o:lcm} asks when two repeats next meet, so its answer is never less than the bigger number, and it keeps every prime that either number has.',
      test: 'Are the two numbers lengths or amounts to be cut into equal pieces, or are they how often two things repeat, with the question when they meet? A piece is never more than the smaller number, and a meeting is never before the bigger one.' },
    { id: 'lcm~modrem', taughtIn: 'q-w1', pair: ['lcm', 'modrem'], step: 'W1',
      shared: 'Both are about things that go round and round, and a number such as 7 can be a repeat in one and the size of a loop in the other.',
      rule: '{o:lcm} has two separate schedules, and asks for the first moment they coincide. {o:modrem} has one loop, or one group size, with a count that keeps going round it, and asks for the part that is left or the place the count reaches.',
      test: 'Are there two things that each repeat, or one loop and a count that goes round it?' },
    { id: 'prime~irrat', taughtIn: 'q-w1', pair: ['prime', 'irrat'], step: 'W1',
      shared: 'Both can be about the very same number, and both can be answered with no.',
      rule: '{o:prime} asks whether a count of things can be shared out in equal groups. {o:irrat} asks whether a number, a root or pi, can be written exactly.',
      test: 'Is a count of things to be shared out in equal groups, or is a number to be written down exactly?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. The part with drill: true is the last; its
  // close cards come after the drill. Each kind has a meet card, a check and one worked example; the pairs people really mix up (one
  // number: split or made of; two numbers: biggest piece or first meeting) have a look-alike card, and the other three pairs are
  // taught on the question card (taughtIn).
  parts: [
    { id: 'p1', title: 'One number, then the biggest equal piece for two',
      cards: ['orient-whole', 'term-prime', 'meet-prime', 'check-prime', 'term-sqroot', 'solved-prime-1',
              'term-factor', 'meet-factor', 'check-factor', 'solved-factor-1', 'look-prime-factor',
              'meet-hcf', 'check-hcf', 'solved-hcf-1'] },
    { id: 'p2', title: 'Repeats, what is left over, and exact or only rounded; then the drill',
      cards: ['meet-lcm', 'check-lcm', 'solved-lcm-1', 'look-hcf-lcm',
              'meet-modrem', 'check-modrem', 'solved-modrem-1',
              'meet-irrat', 'check-irrat', 'solved-irrat-1', 'q-w1', 'check-w1'], drill: true, close: ['recap-whole'] }
  ],

  // The drill of a procedure unit: the route stage (the key's questions in order, the kind, then the solving). Items are authored in
  // groups of look-alikes that share a ledger pair and one tier. The stage also carries a problem from Unit One, unlabelled.
  drill: {
    key: 'u2',
    add: 'Some of the problems tell a story that points the wrong way, on purpose: what the problem asks about its numbers decides the kind, and nothing else in the story does.',
    rungs: [
      { ask: 'route',
        items: [[{ earlier: 'u1' }],
                ['dr-irrat-1', 'dr-prime-1'], ['dr-prime-2', 'dr-factor-1'], ['dr-hcf-1', 'dr-lcm-1'], ['dr-lcm-2', 'dr-mod-1'],
                ['dr-factor-3', 'dr-hcf-3']] }
    ],
    // Fresh problems for later days: one for each kind (E9). A kind that is due comes back as a problem the learner has not seen, as a
    // whole route, beside a problem of the kind they most often take it for.
    returns: ['rt-prime-1', 'rt-factor-1', 'rt-hcf-1', 'rt-lcm-1', 'rt-mod-2', 'rt-irrat-1']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the first procedure unit of Basic Math, replacing the old Unit Two (four cards and the whole-numbers drill), specimens 1 to 3 and two faulty claims. Not yet deployed, so later edits before the first deploy stay revision 1. Six kinds of problem about whole numbers, each taught with a problem of the kind, two worked examples with every step computed, and problems the learner finishes; the drill has a last-step stage, a whole-problem stage and a route stage.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' }
    ],
    // What the K2 rewrite changed in this unit's part of the key, and why (from docs/rebuild/math-plan.md, section (a)).
    keyChanges: [
      { step: 'W1', was: 'two questions: W1 "What do you want to find out about the number or numbers?" (4 answers) and W2 "What do you do to settle it?" (5 answers, one name each)',
        now: 'one question, "What does the problem want to know about the number or numbers?", with six answers, one name each',
        why: 'W2’s answers were the procedures, so a learner could only answer it once they knew the name. The old first answer for two numbers joined the biggest equal piece and the first time two repeats meet, which the unit now separates.' },
      { step: 'W1', was: 'answers "Whether one number can be split evenly by anything smaller", "What a number is made of, or what two numbers have in common", "Where a count lands after going round one loop", "Whether an exact value exists at all"',
        now: 'six answers that each say what an observer can point to in a problem, in the same form: split, parts, piece, together, cycle, exact',
        why: 'K2.4 and K2.5. The old answer for "what two numbers have in common" fitted the gears, which repeat, and "built out of" never described them (audit U7-4). The old answer for a count that goes round a loop could not take the candies shared among 7 children, which is the same procedure.' },
      { outcome: 'hcf', was: 'one name, "Biggest shared piece or first line-up (GCD / LCM)", for two procedures',
        now: 'two names: Highest common factor and Lowest common multiple',
        why: 'The two have opposite rules (keep the shared primes; keep every prime the most times either has it) and opposite answers (6 and 36 for 12 and 18). The old card itself warned "do not mix up the two halves". One name for two things breaks P5, and the slash and parentheses break V1.' },
      { outcome: 'modrem', was: 'name "Remainder (mod)"', now: 'name "Remainder", also called clock arithmetic and modular arithmetic',
        why: 'V1. "mod" is not an other name because V8 matches by substring and would flag "model".' },
      { outcome: 'irrat', was: 'name "A number with no exact fraction (irrational)", answer "Show that no fraction can ever equal it (a proof)"',
        now: 'name "Irrational number", answer "Whether a number can be written exactly"',
        why: 'V1, and the real-life name is the target (K4). The proof is a card, not an answer a problem shows.' },
      { was: 'no terms declared; "prime", "factor" and "square root" used untaught (audit C-9, U2-3)',
        now: 'terms prime, factor and sqroot, taught in this unit', why: 'K6: each gets one term card, with a case first, before the first card that leans on it.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
