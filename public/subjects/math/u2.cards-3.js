// Basic Math, Unit Two, part three: the third kind (the biggest equal piece for two numbers), the fourth kind (two repeating
// things happening together again), and the look-alike cards that set each beside its nearest neighbour.
// The worked examples (kind solved) are in u2.cards-solved-*.js.

FC.cards('math', 'u2', [

  /* ---------- The third kind: the biggest equal piece for two numbers ---------- */
  { id: 'meet-hcf', kind: 'meet', outcome: 'hcf',
    link: 'The first two kinds took one number apart. The third starts from two numbers and looks for the largest size of piece that cuts both of them exactly.',
    case: 'wd-peppers', mark: 'W1',
    strip: [
      'There are two whole numbers: 12 red peppers and 18 green peppers.',
      'Every tray must hold the same number of peppers, with one colour only in a tray and nothing left over.',
      'The question asks for the largest tray size that does this for both numbers at once.',
      'Nothing repeats, and nothing changes as time passes.'
    ],
    explain: [
      'What you are shown is two whole numbers and a question about a piece that fits into both with nothing left over. Trays of 2 would work: 6 red trays and 9 green trays. Trays of 3 would work, and trays of 6. Trays of 4 would not, because 12 peppers fill 3 trays of 4 and 18 peppers fill 4 trays of 4 and leave 2 over. The question asks for the biggest tray that works for both colours, and that is 6: 2 red trays and 3 green trays. Using the word for a number that shares another out exactly, 6 is a {t:factor} of 12 and a {t:factor} of 18.',
      'There is a sign that you have the right number. The answer can never be more than the smaller of the two numbers, because a piece cannot be bigger than the whole it is cut from. Here 6 is not more than 12.',
      'For small numbers you can find the answer by listing what shares each number out exactly and picking the largest that is in both lists, as above. For big numbers the lists are long, so the procedure builds the answer from the primes of each number, which is what the second kind of problem finds.'
    ],
    feature: { step: 'W1', option: 'piece' },
    name: 'A problem like this is {o:hcf}. In the name, “common” means that both numbers share it: the answer is a {t:factor} of the first number and also a {t:factor} of the second, and “highest” means the biggest such number.' },

  { id: 'again-hcf', kind: 'again', outcome: 'hcf',
    link: 'The peppers gave you what to point to: {needs:hcf}. Here is a second problem with a different story, boys and girls in teams.',
    first: 'wd-peppers', second: 'wd-youth', step: 'W1',
    instruction: 'Find what the two problems share. Ignore the story (peppers, a youth club) and ignore the numbers. Look at one thing only: which words show what the pieces must be like?',
    prompt: { kind: 'phrase', answer: 'make teams of the same size, with only boys in some teams and only girls in the others and nobody left out' },
    shared: [
      'Both problems give two whole numbers and ask for the largest group size that fits both with nothing left over. The pieces must all be the same size, one colour or one sex to a piece, with nothing left out, and the question asks for the biggest piece that does it.',
      'The stories are different, and the kind is the same. That is what {o:hcf} names.'
    ] },

  { id: 'portrait-hcf', kind: 'portrait', outcome: 'hcf',
    link: 'You know what to point to for {o:hcf}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'Two whole numbers, of any size: 12 and 18, or 126 and 90.',
      'A rule that the pieces must all be the same size and fit with nothing left over: trays, tiles, packs, lengths, teams.',
      'A question about the largest, longest or greatest such piece.',
      'The answer is never more than the smaller of the two numbers, and both numbers are a whole number of pieces: 12 is 2 trays of 6 and 18 is 3 trays of 6.'
    ],
    not: [
      'Two numbers are not enough. If the question is about the first moment two schedules coincide, it is a different kind: its answer is never less than the bigger of the two numbers, where this kind’s answer is never more than the smaller.',
      'One number alone is the second kind, which takes a single number apart. This kind needs two numbers and a piece that fits both.'
    ],
    wild: ['"The biggest equal pieces."', '"With none left over."', '"The longest tiles that fit both sides."', '"The largest group size that works for both."'],
    self: 'You meet it when you cut something into equal pieces with no waste, when you lay tiles on a floor without cutting any, when you split two groups into teams or packs of one size, and when you simplify a fraction.',
    ask: '"Are there two whole numbers, and is the question what size of equal piece fits both, with nothing left over?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-hcf', kind: 'check', after: 'hcf',
    case: 'wd-tulips',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what the pieces must be like? Tap them.',
           answer: 'make bunches that all hold the same number of flowers, with only tulips in some bunches and only daffodils in the others and none left over' } },

  { id: 'check-hcf-last', kind: 'check', after: 'hcf', case: 'ck-hcf-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-hcf-whole', kind: 'check', after: 'hcf', case: 'ck-hcf-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: one number or two ---------- */
  { id: 'look-factor-hcf', kind: 'lookalike', ledger: 'factor~hcf',
    link: 'The second and third kinds both talk about equal packs, and both are worked from the primes of the numbers. This card puts them side by side.',
    cases: ['la-rolls-factor', 'la-rolls-hcf'],
    instruction: 'Both problems are about the same baker and the same 48 rolls. Compare one thing: does the problem give one number, or two?',
    prompt: { kind: 'which', option: 'W1.piece', answer: 'la-rolls-hcf' },
    difference: [
      'Case A gives only the 48 rolls and asks for every size of equal pack they can be made into. One number is taken apart, and the answer is {a:W1.parts}.',
      'Case B gives 48 rolls and 60 buns, and asks for the largest pack size that works for both. Two numbers are given, and the question is the biggest piece that fits both. The answer is {a:W1.piece}.',
      'Both are about equal packs, and both use the primes of the numbers. What differs is how many numbers there are, and what is asked of them: every size for one number, or the biggest size that works for two.'
    ] },

  /* ---------- The fourth kind: two repeating things happening together again ---------- */
  { id: 'meet-lcm', kind: 'meet', outcome: 'lcm',
    link: 'The third kind took two numbers and cut things into pieces. The fourth also gives two numbers, but each is how often a thing repeats, and the question is when the two repeats next meet.',
    case: 'wd-drummers', mark: 'W1',
    strip: [
      'There are two things that repeat: one drum every 3 seconds and another every 4 seconds.',
      'They start together.',
      'The question asks when they next hit their drums together.',
      'Nothing is split into pieces. The answer is a time, and it counts upwards.'
    ],
    explain: [
      'What you are shown is two things that each repeat at their own pace and a question about when they coincide again. The first drummer hits at 3, 6, 9, 12 seconds and so on. The second hits at 4, 8, 12 and so on. The first time the two lists share a number is 12, so the drummers next hit together after 12 seconds. They would meet again at 24 and 36, but the question asks for the next time.',
      'The answer is never less than the bigger of the two numbers, because something that repeats every 4 seconds cannot meet anything before 4 seconds have passed. That is how this kind differs from the biggest equal piece, whose answer is never more than the smaller number. Both start from two numbers, and they ask opposite things of them.',
      'Listing the times works for small numbers and shows what the answer is: the first number that is in both lists. For big numbers the lists are long, so the procedure builds the answer from the primes of each number instead.'
    ],
    feature: { step: 'W1', option: 'together' },
    name: 'A problem like this is {o:lcm}. In the name, a multiple of a number is what you get by counting in steps of that number: 3, 6, 9 and 12 are multiples of 3. “Common” means that both numbers have it, and “lowest” means the first such number: 12 is the lowest multiple that 3 and 4 have in common.' },

  { id: 'again-lcm', kind: 'again', outcome: 'lcm',
    link: 'The drummers gave you what to point to: {needs:lcm}. Here is a second problem with a different story, two shelves in a shop.',
    first: 'wd-drummers', second: 'wd-shelves', step: 'W1',
    instruction: 'Find what the two problems share. Ignore the story (drums, shelves) and ignore the numbers. Look at one thing only: which words show what has to be found about the two repeats?',
    prompt: { kind: 'phrase', answer: 'both next be restocked on the same day' },
    shared: [
      'Both problems give two repeating schedules, one every 3 seconds and one every 4, and one every 5 days and one every 8, and ask for the first time the two coincide. In neither is a number split into pieces.',
      'The stories are different, and the kind is the same. That is what {o:lcm} names.'
    ] },

  { id: 'portrait-lcm', kind: 'portrait', outcome: 'lcm',
    link: 'You know what to point to for {o:lcm}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'Two things that each repeat every so many seconds, minutes, days or turns.',
      'They start together, and the question asks when they next do something at the same time.',
      'The answer is a time, or a count of turns, and it is never less than the bigger of the two numbers.',
      'It is a multiple of both numbers: when it arrives, each thing has repeated a whole number of times.'
    ],
    not: [
      'One loop and a count is a different kind. If the problem has one loop, such as the 7 days of a week, and asks where a count of days ends, there is no second repeat to bring together.',
      'The biggest equal piece is a different kind, though it starts from two numbers and uses the same primes. It asks for a piece that fits into both numbers and is never more than the smaller one. This kind asks when two repeats coincide, and it is never less than the bigger one.'
    ],
    wild: ['"When will they next line up?"', '"One every 8 seconds, the other every 12."', '"After how many days will both be due together?"', '"When do they both come round again?"'],
    self: 'You meet it with timetables that repeat (two buses, two bin collections), with jobs that are done every few days (two medicines, two chores), and with anything that goes round at its own speed (laps, lights, gears).',
    ask: '"Are there two repeating schedules, each with its own gap of seconds, days or turns, and is the question when they first coincide?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-lcm', kind: 'check', after: 'lcm',
    case: 'wd-cleaners',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what has to be found about the two repeats? Tap them.',
           answer: 'both next be done on the same day' } },

  { id: 'check-lcm-last', kind: 'check', after: 'lcm', case: 'ck-lcm-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-lcm-whole', kind: 'check', after: 'lcm', case: 'ck-lcm-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: the biggest piece, or the first time together ---------- */
  { id: 'look-hcf-lcm', kind: 'lookalike', ledger: 'hcf~lcm',
    link: 'The third and fourth kinds start from two numbers and use the primes of both, and they ask opposite things. This card puts them side by side, with the same two numbers.',
    cases: ['la-ribbon-hcf', 'la-ribbon-lcm'],
    instruction: 'Both problems are about Ruth, and both use the numbers 16 and 24. Compare one thing: is the problem cutting two lengths into equal pieces, or are two things repeating?',
    prompt: { kind: 'which', option: 'W1.together', answer: 'la-ribbon-lcm' },
    difference: [
      'In Case A the two numbers are lengths of ribbon, to be cut into pieces of one length with none left over, and the question asks for the greatest such length. The answer is {a:W1.piece}, and the answer is 8 m.',
      'In Case B the same two numbers are how often two alarms sound, and the question is when they next sound together. The answer is {a:W1.together}, and the answer is 48 minutes.',
      'The two answers show the difference. A piece that fits into both ribbons cannot be longer than the shorter ribbon, 16 m, and the answer, 8, is below that. The time when both alarms sound together cannot come before the slower alarm has sounded once, at 24 minutes, and the answer, 48, is above that. The same two numbers are used in opposite ways, and what the problem asks decides which.'
    ] }
]);
