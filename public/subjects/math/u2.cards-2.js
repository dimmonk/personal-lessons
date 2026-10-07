// Basic Math, Unit Two, part two: the last three kinds (two repeating things meeting again, what is left over and counting round a
// loop, whether a number can be written exactly), the look-alike card for the fourth and third, the question that tells the six
// apart, and the recap that closes the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// Plain, concrete writing (section 20): a real problem first, then the idea, then how to spot it as numbered steps, then the name.
// The app prints, on the question card: the question, each answer, why it decides, and for every pair already compared the
// question that tells it apart.

FC.cards('math', 'u2', [

  /* ---------- The fourth kind: two repeating things happening together again ---------- */
  { id: 'meet-lcm', kind: 'meet', outcome: 'lcm',
    link: 'Fourth: two numbers again, but each is how often something repeats.',
    case: 'wd-drummers', mark: 'W1',
    explain: [
      'The first drummer hits at 3, 6, 9, 12 seconds and so on. The second hits at 4, 8, 12 and so on. The first number on both lists is 12, so they next hit together after 12 seconds.',
      'You can check the answer: it is never less than the bigger of the two numbers, because something that repeats every 4 seconds cannot meet anything before 4 seconds have passed.'
    ],
    spot: [
      { do: 'Find the two repeats: one drum every 3 seconds, one every 4.', why: 'Each number is how often something happens, not an amount to cut up.' },
      { do: 'Find the start: the drummers “start together”.', why: 'Both counts begin at the same moment.' },
      { do: 'Find the question: “next hit their drums together”.', why: 'You want the first time both happen at once.' }
    ],
    feature: { step: 'W1', option: 'together' },
    name: 'A problem like this is {o:lcm}. A multiple is what you get by counting in steps of a number, so 3, 6, 9 and 12 are multiples of 3, and “least common” means the first one on both lists.' },

  { id: 'check-lcm', kind: 'check', after: 'lcm',
    case: 'wd-cleaners',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what has to be found about the two repeats? Tap them.',
           answer: 'both next be done on the same day' } },

  /* ---------- The look-alike pair: the biggest piece, or the first time together ---------- */
  { id: 'look-hcf-lcm', kind: 'lookalike', ledger: 'hcf~lcm',
    link: 'Both of these start from two numbers, and they ask opposite things. Here they are with the same two numbers.',
    cases: ['la-ribbon-hcf', 'la-ribbon-lcm'],
    instruction: 'Both problems use the numbers 16 and 24. Compare one thing: are the numbers lengths to cut into equal pieces, or how often two things repeat?',
    prompt: { kind: 'which', option: 'W1.together', answer: 'la-ribbon-lcm' },
    difference: [
      'In the first problem, 16 and 24 are lengths of ribbon, cut into pieces of one length with none left over. The question asks for the greatest length: {a:W1.piece}. The answer is 8 m.',
      'In the second problem, 16 and 24 are how often two alarms sound, and the question is when they next sound together: {a:W1.together}. The answer is 48 minutes.',
      'A piece cannot be longer than the shorter ribbon, 16 m, and 8 is below that. A meeting cannot come before the slower alarm has sounded once, at 24 minutes, and 48 is above that. The same two numbers are used in opposite ways, and what the problem asks decides which.'
    ] },

  /* ---------- The fifth kind: what is left over, and counting round a loop ---------- */
  { id: 'meet-modrem', kind: 'meet', outcome: 'modrem',
    link: 'Fifth: a count shared into groups, or going round a loop.',
    case: 'wd-bags', mark: 'W1',
    explain: [
      '29 rolls fill 4 bags of 6, which uses 24 rolls. The 5 rolls left are too few for another bag, so 5 is the answer. It is always less than the size of one group: at 6 or more, another bag could be filled.',
      'The same idea answers questions about a loop. The 7 days of a week go round and round, so a count of days ends on one of the seven. Every whole week brings you back to the day you started, so only what is left over moves you on.'
    ],
    spot: [
      { do: 'Find the count: 29 rolls.', why: 'It is the one number that gets shared out or counted round.' },
      { do: 'Find the group size or the loop: bags of 6.', why: 'It is the size of one full group, or the length of one loop.' },
      { do: 'Find the question: “How many rolls are left over once every bag is full?”', why: 'You want the part that does not make a whole group, or where the count ends.' }
    ],
    feature: { step: 'W1', option: 'cycle' },
    name: 'A problem like this is {o:modrem}. It is what is left over after all the whole groups, or how far past the last whole loop a count ends.' },

  { id: 'check-modrem', kind: 'check', after: 'modrem',
    case: 'wd-teams',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what has to be found? Tap them.',
           answer: 'How many students are left over once every team is full?' } },

  /* ---------- The sixth kind: whether a number can be written exactly ---------- */
  { id: 'meet-irrat', kind: 'meet', outcome: 'irrat',
    link: 'Sixth: a number you measure, and whether it can be written down exactly.',
    case: 'wd-sheet', mark: 'W1',
    explain: [
      'A half is exactly 0.5 and a third is exactly 1/3, but the side of this sheet is different. It is between 2 and 3, because 2 × 2 = 4 and 3 × 3 = 9, and no fraction multiplies by itself to give exactly 5. A calculator’s 2.236067977 stops only because it ran out of room. So the answer is no: you can only round it, to about 2.24 m.',
      'For the {t:sqroot} of a whole number, ask whether the number is a whole number multiplied by itself, like 36 = 6 × 6. If it is, the root is that whole number, and exact. If it is not, the root can never be written exactly. Pi can never be written exactly either.'
    ],
    spot: [
      { do: 'Find the number you are asked about: the side of a square sheet with an area of 5 m².', why: 'It is a measured number, not a count of things.' },
      { do: 'Check it is a {t:sqroot} or pi: here, “the number that multiplies by itself to give 5”.', why: 'Those are the numbers that can fail to be exact.' },
      { do: 'Find the question: “Can the side be written exactly?”', why: 'Nothing is shared out, and nothing repeats.' }
    ],
    feature: { step: 'W1', option: 'exact' },
    name: 'A problem like this is {o:irrat}. “Rational” means it can be written exactly as a fraction, and “ir” in front means it cannot.' },

  { id: 'check-irrat', kind: 'check', after: 'irrat',
    case: 'wd-flower-bed',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what has to be found about the side? Tap them.',
           answer: 'Can the side be written exactly, as a fraction or a decimal that ends?' } },

  /* ---------- The one question that tells the six kinds apart ---------- */
  { id: 'q-w1', kind: 'question', step: 'W1',
    h: 'The question to ask before any working',
    link: 'At the foot of each kind’s first card you saw this question with one answer under it. Here are the question and all six answers in one place.',
    decides: [
      'The wrong steps give a number just as neat as the right ones, and nothing in the number says it is wrong. Only the question can tell you which steps to use, and only the words of the problem can answer it.',
      'Three pairs have no card of their own, and this question separates them: {o:factor} and {o:hcf}, {o:lcm} and {o:modrem}, {o:prime} and {o:irrat}. The list below puts each pair next to the question that tells it apart.'
    ],
    how: [
      { do: 'Read the last sentence of the problem first.', why: 'The question is usually there.' },
      { do: 'Mark the words that say what is wanted about the numbers.', why: 'Those words decide it, not the numbers.' },
      { do: 'One number leads to {a:W1.split} or {a:W1.parts}.', why: 'A yes or a no is the first, a list of primes or ways is the second.' },
      { do: 'Two numbers lead to {a:W1.piece} or {a:W1.together}.', why: 'Cutting into equal pieces is the first, two repeats meeting is the second.' },
      { do: 'A count with one group size or one loop leads to {a:W1.cycle}.', why: 'The answer is the leftover part, or the day or hour the count lands on.' },
      { do: 'A {t:sqroot} or pi, asked about whether it can be written exactly, leads to {a:W1.exact}.', why: 'It is the only answer about one measured number.' }
    ] },

  { id: 'check-w1', kind: 'check', after: 'W1',
    case: 'wd-musicbox',
    ask: { type: 'step', step: 'W1' } },

  /* ---------- After the drill ---------- */
  { id: 'recap-whole', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked problems of all six kinds on your own.',
    carry: [
      'Before any working, ask what the problem wants to know about its numbers, and find the words that say it. If you cannot find them, you do not have an answer yet. The question is: {q:W1}',
      'One number leads to {o:prime}, a yes or a no, or to {o:factor}, a list. Two numbers lead to {o:hcf}, the biggest piece that fits both, or to {o:lcm}, the first time two repeats meet. A count with one group size or one loop leads to {o:modrem}. A root or pi, asked about whether it can be written exactly, leads to {o:irrat}.',
      'The numbers do not tell you the kind. 12 and 18 can ask for the biggest equal piece, 6, or for the first time two repeats meet, 36.',
      'With two numbers you can check the answer. The biggest equal piece is never more than the smaller number, and the first meeting is never less than the bigger one.',
      'For {o:prime}: find where testing can stop, list the primes up to there, and divide by each in turn. One exact fit means the number splits. No fit up to the stopping point means it is a prime.',
      'For {o:factor}: split off the smallest prime that fits, do the same to what is left until a prime is left, and write the number as the product of the primes you split off. Multiply back to check. To list every way it splits, multiply some of the primes together in every combination, and leave out 1 and the number itself if the problem wants more than one group and more than one in each.',
      'For {o:hcf} and {o:lcm}: break both numbers into primes. For the biggest equal piece, keep the primes both numbers have and multiply them. For the first meeting, keep every prime either number has, as many times as the one with more of it, and multiply them.',
      'For {o:modrem}: find how many whole groups, or whole loops, fit in the count, take them away to see what is left over, and move on from the start by that much. What is left over is always less than one group.',
      'For {o:irrat}: the {t:sqroot} of a whole number can be written exactly only if the number is a whole number multiplied by itself. Otherwise you can only round it, however many digits you show. Pi can never be written exactly.'
    ] }
]);
