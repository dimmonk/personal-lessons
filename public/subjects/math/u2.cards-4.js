// Basic Math, Unit Two, part four: the fifth kind (what is left over, and where a count ends on a loop), the sixth kind
// (whether a number can be written exactly), and their look-alike cards.
// The worked examples (kind solved) are in u2.cards-solved-*.js.

FC.cards('math', 'u2', [

  /* ---------- The fifth kind: what is left over, and counting round a loop ---------- */
  { id: 'meet-modrem', kind: 'meet', outcome: 'modrem',
    link: 'The first four kinds asked how numbers split or repeat. The fifth asks about the part that does not make a whole group, and about the place a count reaches when it keeps going round a loop.',
    case: 'wd-bags', mark: 'W1',
    strip: [
      'There is a count, 29 rolls, and the size of one group, bags of 6.',
      'Every bag is filled before the next one is started.',
      'The question asks how many rolls are left over once the full bags are made.',
      'It does not ask how many bags there are, or whether 29 splits.'
    ],
    explain: [
      'What you are shown is a count, one group size, and a question about the part that does not make a whole group. 29 rolls fill 4 bags of 6, which uses 24 rolls. The 5 rolls that are left are too few for another bag. That 5 is the answer, and it is always less than the size of one group: if it were 6 or more, another bag could be filled.',
      'The same idea answers a second sort of question, about a loop. The 7 days of a week go round and round, from Monday to Sunday and back to Monday, and a count of days ends on one of the seven. To find where, you ask how many whole weeks fit in the count and what is left over, because every whole week brings you back to the day you started. The part that is left, moved on from the start, is the place where the count finishes. Sharing things out and counting round a loop are one kind, because both ask about what is left over after whole groups.',
      'What decides the kind is a count and one group size, or one loop. If a problem has two things that each repeat, it is a different kind, and you have met it already.'
    ],
    feature: { step: 'W1', option: 'cycle' },
    name: 'A problem like this is {o:modrem}. In the name, the word means what is left over after a count has been divided into whole groups. For a loop it means how far past the last whole loop the count has gone.' },

  { id: 'again-modrem', kind: 'again', outcome: 'modrem',
    link: 'The rolls gave you what to point to: {needs:modrem}. Here is a second problem with a different story, and with the other half of the kind: a count of days that goes round a week.',
    first: 'wd-bags', second: 'wd-passport', step: 'W1',
    instruction: 'Find what the two problems share. Ignore the story (rolls, a passport) and ignore the numbers. Look at one thing only: which words show what has to be found?',
    prompt: { kind: 'phrase', answer: 'On which day of the week will it arrive?' },
    shared: [
      'Both problems give a count, 29 rolls and 10 days, and one size to divide it by: bags of 6, and the 7 days of a week. In both, what matters is not how many whole groups there are but what is left when the whole groups are taken away. 29 rolls leave 5. 10 days leave 3, so Wednesday moves on 3 days.',
      'One is a share and the other is a loop, and one kind covers both. That is what {o:modrem} names.'
    ] },

  { id: 'portrait-modrem', kind: 'portrait', outcome: 'modrem',
    link: 'You know what to point to for {o:modrem}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'A count, and one group size or one loop: 29 and bags of 6; 50 days and a week of 7.',
      'A question about the part that does not fill a whole group, or about the place a count finishes on: a day of the week, a time on a clock, a place in a repeating pattern.',
      'The answer is always less than the size of the group, or of the loop.',
      'Often no division is mentioned at all: “what day will it be in 50 days?” is a division in disguise.'
    ],
    not: [
      'Two things that each repeat are a different kind: there the question is when they meet. Here there is one loop, and a count that goes round it.',
      'A count of days is not an amount followed through time when the question is only which day of the week it ends on. That is a loop, and it is this kind, even though the days pass.'
    ],
    wild: ['"How many are left over?"', '"What day will it be in 50 days?"', '"What colour is the 50th bead?"', '"What time will it be 50 hours from now?"'],
    self: 'You meet it when you share things out and some are left, when you work out a day or a time some way ahead, when something repeats in a pattern and you want to know which one comes at a given place, and when you read a clock.',
    ask: '"Is there a count with one group size or one loop, and does the problem want the part that is not in a whole group, or the place the count finishes?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-modrem', kind: 'check', after: 'modrem',
    case: 'wd-teams',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what has to be found? Tap them.',
           answer: 'How many pupils are left over once every team is full?' } },

  { id: 'check-modrem-last', kind: 'check', after: 'modrem', case: 'ck-mod-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-modrem-whole', kind: 'check', after: 'modrem', case: 'ck-mod-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: two repeats, or one loop and a count ---------- */
  { id: 'look-lcm-modrem', kind: 'lookalike', ledger: 'lcm~modrem',
    link: 'The fourth and fifth kinds both go round and round, and a problem can mention a repeat in either. This card puts them side by side, with the same number in both.',
    cases: ['la-tram-lcm', 'la-tram-modrem'],
    instruction: 'Both problems are about a tram and the number 7. Compare one thing: are there two things that each repeat, or one loop and a count that goes round it?',
    prompt: { kind: 'which', option: 'W1.cycle', answer: 'la-tram-modrem' },
    difference: [
      'In Case A a tram stops every 7 minutes and a bus every 10 minutes, and the question is when they next stop together. Two things repeat, and the key’s answer is {a:W1.together}. The answer is 70 minutes.',
      'In Case B there is one loop, the tram line of 7 stops, and a count of 100 stops that goes round it, and the question is where the count ends. The key’s answer is {a:W1.cycle}. 100 stops are 14 whole loops of 7, which is 98 stops, with 2 left over, so the tram ends 2 stops on from stop 1, at stop 3.',
      'The 7 is a repeat in A and the size of a loop in B. What differs is whether two repeats have to be brought together, or one count has to be ended on a loop.'
    ] },

  /* ---------- The sixth kind: whether a number can be written exactly ---------- */
  { id: 'meet-irrat', kind: 'meet', outcome: 'irrat',
    link: 'The first five kinds were about numbers that are counted. The last is about a number that is measured, and the question is whether it can be written down exactly at all.',
    case: 'wd-sheet', mark: 'W1',
    strip: [
      'There is a square sheet of metal with an area of 5 m².',
      'Its side is a {t:sqroot}: the number that multiplies by itself to give 5.',
      'The question asks whether that side can be written exactly, as a fraction or as a decimal that ends.',
      'Nothing is split, repeated or left over.'
    ],
    explain: [
      'What you are shown is a number that is measured and not counted, and a question about how it can be written. Some numbers can be written exactly: a half is 1/2 and 0.5. Some can be written exactly only as a fraction: a third is 1/3, and 0.333… never ends. The side of this sheet is a different sort of number. It lies between 2 and 3, since 2 × 2 = 4 and 3 × 3 = 9, and no fraction, however big its top and bottom, multiplies by itself to give exactly 5. A calculator shows 2.236067977 and stops only because it has run out of room.',
      'So the answer to the question is no, and the best that can be done is a rounded value, about 2.24 m. For a root of a whole number, the procedure decides the question by asking whether the number under the root sign is a whole number multiplied by itself, as 36 is 6 × 6. If it is, the root is that whole number, and exact. If it is not, the root can never be written exactly. The other number this kind covers, pi, can also never be written exactly: no fraction equals it.',
      'Notice that nothing is being split into equal groups, so this is not the first kind, though the numbers are whole. The question is about the value of one number: exact, or only rounded.'
    ],
    feature: { step: 'W1', option: 'exact' },
    name: 'A problem like this is {o:irrat}. In the name, “rational” means able to be written exactly as a fraction, and the “ir” in front means not: the number cannot be.' },

  { id: 'again-irrat', kind: 'again', outcome: 'irrat',
    link: 'The metal sheet gave you what to point to: {needs:irrat}. Here is a second problem with a different story and a different number, pi.',
    first: 'wd-sheet', second: 'wd-cake-tin', step: 'W1',
    instruction: 'Find what the two problems share. Ignore the story (metal, a cake tin) and ignore the numbers. Look at one thing only: which words show what has to be found about the number?',
    prompt: { kind: 'phrase', answer: 'be written exactly, as a fraction or a decimal that ends' },
    shared: [
      'Both ask whether one number can be written exactly: the side of the sheet, which multiplies by itself to give 5, and pi, the number of times the distance across a circle fits round it. Neither is split, repeated or left over.',
      'The two numbers are different sorts, a root and pi, and the question about them is the same. That is what {o:irrat} names.'
    ] },

  { id: 'portrait-irrat', kind: 'portrait', outcome: 'irrat',
    link: 'You know what to point to for {o:irrat}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'A {t:sqroot} of a whole number that is not a whole number multiplied by itself, such as the root of 2, 5 or 50, or pi.',
      'A question about whether one number has an exact value, shown as a fraction or as a decimal that stops, and not a question about what the value is.',
      'The honest answer for such a number is “no, only rounded”, followed by a rounded value.',
      'The answer is “yes” for a root that lands on a whole number: the root of 36 is 6, which is exact.'
    ],
    not: [
      'A shape in the problem is not what decides it. A patio, a rug or a sheet turn up in this kind only because their side is a root. The problem is this kind when it asks whether that side can be written exactly. If it asked whether the tiles can be laid in equal rows, it would be a different kind.',
      'And a long decimal is not the same as a number that is not exact. 0.125 is exact, and so is 1/3, though 0.333… never ends. What makes a number inexact here is that no fraction at all equals it.'
    ],
    wild: ['"Is it exact, or just close?"', '"Can you write it as a fraction?"', '"Is that the exact value, or has the calculator rounded it?"', '"Does it come out even?"'],
    self: 'You meet it on a calculator that shows a long decimal, in a measurement such as the diagonal of a television or of a square room, and whenever someone says “it is about” and you wonder whether a better value exists.',
    ask: '"Does the problem ask whether one number, a root or pi, can be written exactly?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-irrat', kind: 'check', after: 'irrat',
    case: 'wd-flower-bed',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what has to be found about the side? Tap them.',
           answer: 'Can the side be written exactly, as a fraction or a decimal that ends?' } },

  { id: 'check-irrat-last', kind: 'check', after: 'irrat', case: 'ck-irrat-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-irrat-whole', kind: 'check', after: 'irrat', case: 'ck-irrat-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: whether a number splits, or whether it is exact ---------- */
  { id: 'look-prime-irrat', kind: 'lookalike', ledger: 'prime~irrat',
    link: 'The first and last kinds can give the very same answer, no, to problems about the very same number. This card puts them side by side.',
    cases: ['la-mosaic-prime', 'la-mosaic-irrat'],
    instruction: 'Both problems are about a mosaic maker and the number 29. Compare one thing: is the problem about sharing 29 things out in equal groups, or about writing down the exact value of a number?',
    prompt: { kind: 'which', option: 'W1.exact', answer: 'la-mosaic-irrat' },
    difference: [
      'In Case A the maker has 29 tiles and asks whether they can be laid in equal rows, with more than one row and more than one tile in each. A count is shared out, and the key’s answer is {a:W1.split}. The answer is no, because 29 is a {t:prime}.',
      'In Case B the same 29 is an area, and the question is whether the side, the {t:sqroot} of 29, can be written exactly. The key’s answer is {a:W1.exact}, and the answer is no again.',
      'The two problems give the same number and the same answer for different reasons: 29 cannot be shared out in equal rows, and its root cannot be written exactly. Only what the problem asks tells them apart.'
    ] }
]);
