// Basic Math, Unit Two, part two: the last three kinds (two repeating things meeting again, what is left over and counting round a
// loop, whether a number can be written exactly), the look-alike card for the fourth and third, the question that tells the six
// apart, and the recap that closes the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer, why it decides, and for every pair
// already compared the question that tells it apart.

FC.cards('math', 'u2', [

  /* ---------- The fourth kind: two repeating things happening together again ---------- */
  { id: 'meet-lcm', kind: 'meet', outcome: 'lcm',
    link: 'The third kind took two numbers and cut things into pieces. The fourth also gives two numbers, but each is how often a thing repeats, and the question is when the two repeats next meet.',
    case: 'wd-drummers', mark: 'W1',
    strip: [
      'There are two things that repeat: one drum every 3 seconds and another every 4 seconds.',
      'They start together.',
      'The question asks when they next hit their drums together.'
    ],
    explain: [
      'What you are shown is two things that each repeat at their own pace and a question about when they coincide again. The first drummer hits at 3, 6, 9, 12 seconds and so on. The second hits at 4, 8, 12 and so on. The first time the two lists share a number is 12, so the drummers next hit together after 12 seconds.',
      'The answer is never less than the bigger of the two numbers, because something that repeats every 4 seconds cannot meet anything before 4 seconds have passed.'
    ],
    feature: { step: 'W1', option: 'together' },
    name: 'A problem like this is {o:lcm}. In the name, a multiple of a number is what you get by counting in steps of that number: 3, 6, 9 and 12 are multiples of 3. “Common” means that both numbers have it, and “lowest” means the first such number: 12 is the lowest multiple that 3 and 4 have in common.' },

  { id: 'check-lcm', kind: 'check', after: 'lcm',
    case: 'wd-cleaners',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what has to be found about the two repeats? Tap them.',
           answer: 'both next be done on the same day' } },

  /* ---------- The look-alike pair: the biggest piece, or the first time together ---------- */
  { id: 'look-hcf-lcm', kind: 'lookalike', ledger: 'hcf~lcm',
    link: 'The third and fourth kinds start from two numbers and use the primes of both, and they ask opposite things. This card puts them side by side, with the same two numbers.',
    cases: ['la-ribbon-hcf', 'la-ribbon-lcm'],
    instruction: 'Both problems are about Ruth, and both use the numbers 16 and 24. Compare one thing: is the problem cutting two lengths into equal pieces, or are two things repeating?',
    prompt: { kind: 'which', option: 'W1.together', answer: 'la-ribbon-lcm' },
    difference: [
      'In Case A the two numbers are lengths of ribbon, to be cut into pieces of one length with none left over, and the question asks for the greatest such length. The answer is {a:W1.piece}, and the answer is 8 m.',
      'In Case B the same two numbers are how often two alarms sound, and the question is when they next sound together. The answer is {a:W1.together}, and the answer is 48 minutes.',
      'A piece that fits into both ribbons cannot be longer than the shorter ribbon, 16 m, and the answer, 8, is below that. The time when both alarms sound together cannot come before the slower alarm has sounded once, at 24 minutes, and the answer, 48, is above that. The same two numbers are used in opposite ways, and what the problem asks decides which.'
    ] },

  /* ---------- The fifth kind: what is left over, and counting round a loop ---------- */
  { id: 'meet-modrem', kind: 'meet', outcome: 'modrem',
    link: 'The first four kinds asked how numbers split or repeat. The fifth asks about the part that does not make a whole group, and about the place a count reaches when it keeps going round a loop.',
    case: 'wd-bags', mark: 'W1',
    strip: [
      'There is a count, 29 rolls, and the size of one group, bags of 6.',
      'Every bag is filled before the next one is started.',
      'The question asks how many rolls are left over once the full bags are made.'
    ],
    explain: [
      'What you are shown is a count, one group size, and a question about the part that does not make a whole group. 29 rolls fill 4 bags of 6, which uses 24 rolls. The 5 rolls that are left are too few for another bag. That 5 is the answer, and it is always less than the size of one group: if it were 6 or more, another bag could be filled.',
      'The same idea answers a question about a loop. The 7 days of a week go round and round, from Monday to Sunday and back to Monday, and a count of days ends on one of the seven. To find where, ask how many whole weeks fit in the count and what is left over, because every whole week brings you back to the day you started. The part that is left, moved on from the start, is the place where the count finishes.'
    ],
    feature: { step: 'W1', option: 'cycle' },
    name: 'A problem like this is {o:modrem}. In the name, the word means what is left over after a count has been divided into whole groups. For a loop it means how far past the last whole loop the count has gone.' },

  { id: 'check-modrem', kind: 'check', after: 'modrem',
    case: 'wd-teams',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what has to be found? Tap them.',
           answer: 'How many students are left over once every team is full?' } },

  /* ---------- The sixth kind: whether a number can be written exactly ---------- */
  { id: 'meet-irrat', kind: 'meet', outcome: 'irrat',
    link: 'The first five kinds were about numbers that are counted. The last is about a number that is measured, and the question is whether it can be written down exactly at all.',
    case: 'wd-sheet', mark: 'W1',
    strip: [
      'There is a square sheet of metal with an area of 5 m².',
      'Its side is a {t:sqroot}: the number that multiplies by itself to give 5.',
      'The question asks whether that side can be written exactly, as a fraction or as a decimal that ends.'
    ],
    explain: [
      'What you are shown is a number that is measured and not counted, and a question about how it can be written. Some numbers can be written exactly: a half is 1/2 and 0.5. Some can be written exactly only as a fraction: a third is 1/3, and 0.333… never ends. The side of this sheet is a different sort of number. It lies between 2 and 3, since 2 × 2 = 4 and 3 × 3 = 9, and no fraction, however big its top and bottom, multiplies by itself to give exactly 5. A calculator shows 2.236067977 and stops only because it has run out of room.',
      'So the answer to the question is no, and the best that can be done is a rounded value, about 2.24 m. For a root of a whole number, ask whether the number under the root sign is a whole number multiplied by itself, as 36 is 6 × 6. If it is, the root is that whole number, and exact. If it is not, the root can never be written exactly. The other number this kind covers, pi, can also never be written exactly: no fraction equals it.'
    ],
    feature: { step: 'W1', option: 'exact' },
    name: 'A problem like this is {o:irrat}. In the name, “rational” means able to be written exactly as a fraction, and the “ir” in front means not: the number cannot be.' },

  { id: 'check-irrat', kind: 'check', after: 'irrat',
    case: 'wd-flower-bed',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what has to be found about the side? Tap them.',
           answer: 'Can the side be written exactly, as a fraction or a decimal that ends?' } },

  /* ---------- The one question that tells the six kinds apart ---------- */
  { id: 'q-w1', kind: 'question', step: 'W1',
    h: 'The one question that tells the six kinds apart',
    link: 'At the foot of each kind’s first card you saw the question with one answer under it. This card puts the question and its six answers in one place and says why it is asked before any working.',
    decides: [
      'A wrong procedure gives a number just as neat as the right one, and nothing in the number says that it is wrong. So the number cannot tell you which procedure to use. Only the question can, and only the words of the problem can answer the question.',
      'Three pairs of kinds have no card of their own, and this question separates them: {o:factor} and {o:hcf}, {o:lcm} and {o:modrem}, {o:prime} and {o:irrat}. The list below puts each pair side by side with the question that tells them apart.'
    ],
    how: [
      'Read the last sentence of the problem first, because the question is usually there. Find the words that say what is wanted about the number or numbers, and mark them.',
      'Then count the numbers. One number leads to a yes or a no ({a:W1.split}), to a list ({a:W1.parts}), or, when it is a root or pi, to the question of being exact. Two numbers lead to a piece that fits both ({a:W1.piece}) or to two repeats that meet ({a:W1.together}), and what is asked decides which. A count with one group size or one loop leads to what is left over.'
    ] },

  { id: 'check-w1', kind: 'check', after: 'W1',
    case: 'wd-musicbox',
    ask: { type: 'step', step: 'W1' } },

  /* ---------- After the drill ---------- */
  { id: 'recap-whole', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked problems of all six kinds on your own. This card puts the unit in one place.',
    carry: [
      'Before any working, ask what the problem wants to know about its numbers, and point to the words that say it. If you cannot point to them, you do not have an answer yet. The question is: {q:W1}',
      'One number leads to {o:prime}, a yes or a no, or to {o:factor}, a list. Two numbers lead to {o:hcf}, the biggest piece that fits both, or to {o:lcm}, the first time two repeats meet. A count with one group size or one loop leads to {o:modrem}. A root or pi, with the question whether it can be written exactly, leads to {o:irrat}.',
      'The numbers do not tell you the kind. 12 and 18 can ask for the biggest equal piece, 6, or for the first time two repeats meet, 36.',
      'Two numbers have a check on the answer. The biggest equal piece is never more than the smaller number, and the first time two repeats meet is never less than the bigger one.',
      'For {o:prime}: find where testing can stop, list the primes up to there, divide by each in turn, and stop at the first exact fit. One exact fit shows that the number splits. No fit up to the stopping point shows that it is a {t:prime}.',
      'For {o:factor}: split off the smallest prime that fits, do the same to what is left until a prime is left, and write the number as the product of every prime split off. Multiplying back gives the number again. For every way a number splits, build every product of the primes and leave out 1 and the number itself where the problem asks for more than one group and more than one in each.',
      'For {o:hcf} and {o:lcm}: break both numbers into primes. Keep the primes that both numbers have, as many times as the number that has it fewer times, and multiply them for the biggest equal piece. Keep every prime that either number has, as many times as the number that has it more times, and multiply them for the first time two repeats meet.',
      'For {o:modrem}: find how many whole groups, or whole loops, fit in the count, take them away to find what is left over, and move on from the start by that much. What is left over is always less than the group.',
      'For {o:irrat}: a {t:sqroot} of a whole number can be written exactly only if the number is a whole number multiplied by itself. Otherwise it can only be rounded, however many digits are shown. Pi can never be written exactly.'
    ] }
]);
