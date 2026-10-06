// Basic Math, Unit Two, part one: the opening card, and the first three kinds (does one number split, what is it made of, and the
// biggest equal piece for two numbers), with the three words they lean on and the look-alike card for the first two.
// Unit Two is the first procedure unit (kind 'P', lesson standard A12). A quick lesson (section 19): each kind has one meet card, one
// check, and one worked example (u2.cards-solved-1.js, computed: do not edit a number by hand). The key has one question here, and
// each of its six answers leads to one name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, "what you must be able to point to", the key’s question and answer on a meet card,
// and the stem of every commit prompt.

FC.cards('math', 'u2', [

  { id: 'orient-whole', kind: 'orient',
    h: 'Six kinds of problem about whole numbers, and a procedure for each',
    canDo: 'After this unit you can take a problem about whole numbers, such as whether 67 singers can stand in equal rows, when two buses arrive together again, or what day of the week it will be in 50 days, say which of six kinds it is, and then solve it with the procedure for that kind.',
    everyday: [
      'Picture the planning of a school fair, with five questions coming up in one afternoon, every one of them about whole numbers. “We have 67 volunteers: can they stand in equal rows?” “These two ribbons, 60 cm and 84 cm long, are to be cut into pieces that are all the same length, with none left over: how long can each piece be at most?” “One stall restocks every 20 minutes and the other every 30 minutes: when do they restock together?” “There are 50 candies for 7 children: how many are left over?” And one child with a calculator asks: “Can the number that multiplies by itself to give 2 ever be written down exactly?”',
      'They are five different questions about whole numbers, and a sixth, what a number is made of, belongs with them. Each has its own procedure, and a procedure for the wrong one still gives a number, with nothing in the number to say that it is wrong. So the order is always the same: first work out what the problem wants to know about its numbers, and only then solve it.'
    ],
    add: [
      'A procedure is the fixed set of steps that solves one kind of problem, whatever the numbers. The working is the procedure carried out on one problem, with every number written down. A calculator can do the arithmetic: what this unit practices is which steps to take, and why.'
    ],
    map: { branch: 'whole' } },

  /* ---------- A word the first kind leans on ---------- */
  { id: 'term-prime', kind: 'term', term: 'prime',
    h: 'A number that will not split',
    link: 'The first kind of problem is about a word you may or may not know: prime. Here it is first, in a situation you can hold in your hands.',
    case: 'wd-squads',
    plain: [
      'Twelve players can be made into teams in four different ways, because 12 can be shared out evenly by 2, by 3, by 4 and by 6. Thirteen players can only be made into one big team or into thirteen teams of one. No whole number between 1 and 13 shares 13 out evenly.',
      'Whole numbers like 13, which nothing shares out evenly except 1 and themselves, are the building blocks that every other whole number is made from: 12 is built from 2, 2 and 3. The first few are 2, 3, 5, 7, 11 and 13. The number 1 is left out on purpose.'
    ] },

  /* ---------- The first kind: testing whether one number splits ---------- */
  { id: 'meet-prime', kind: 'meet', outcome: 'prime',
    link: 'The first kind of problem starts from a question that looks too simple to need a procedure: can one number be shared out in equal groups at all?',
    case: 'wd-apples', mark: 'W1',
    strip: [
      'There is one whole number to work with: 59, a count of apples.',
      'The seller has one rule: equal bags, with more than one bag and more than one apple in each bag.',
      'The question is a yes or a no: is any packing of that kind possible at all?'
    ],
    explain: [
      'What you are shown is a single whole number and one question about it. The seller does not ask what the bags would be like, or how many. She only needs to know whether any packing works.',
      'You could try every smaller number one by one, but for a big number that is very long. The procedure in this unit is shorter and just as certain: it tests only a short list of small numbers, and every division is written down.',
      'What decides the kind is not that 59 is odd, or small. It is that the question asks only whether the number splits at all.'
    ],
    feature: { step: 'W1', option: 'split' },
    name: 'A problem like this is {o:prime}. The procedure checks one number against the small numbers that could share it out. If it finds a fit, the number can be split. If it finds none, the number is a {t:prime}, and cannot.' },

  { id: 'check-prime', kind: 'check', after: 'prime',
    case: 'wd-tour',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show that the problem asks only whether one number can be shared out in equal groups? Tap them.',
           answer: 'split them into equal groups, with more than one group and more than one visitor in each group' } },

  /* ---------- A word the procedure leans on ---------- */
  { id: 'term-sqroot', kind: 'term', term: 'sqroot',
    h: 'The number that multiplies by itself',
    link: 'The procedure for this first kind stops testing at a particular point, and it needs one more word to say where. Here is the word, in a situation you can hold in your hands.',
    case: 'wd-patio',
    plain: [
      'The number of slabs along one side of the patio is the number that, multiplied by itself, gives the total: 6 × 6 = 36. A mathematician writes that as √36 = 6.',
      'Most numbers have no whole number that multiplies by itself to give them. 50 slabs cannot be laid as a square: 7 × 7 = 49 is one slab short, and 8 × 8 = 64 is too many. The side of a square of 50 slabs is somewhere between 7 and 8 slabs, and a calculator will give how far between: about 7.07.'
    ] },

  /* ---------- A word the second kind leans on ---------- */
  { id: 'term-factor', kind: 'term', term: 'factor',
    h: 'A number that shares another out exactly',
    link: 'The second kind of problem takes one number apart, and it needs a word for the numbers that share it out exactly. Here it is first, in a situation you can hold in your hands.',
    case: 'wd-boxes',
    plain: [
      'The baker’s 12 rolls can be packed in boxes of 3, and they fill 4 boxes exactly. They can be packed in boxes of 4, and they fill 3 boxes exactly. Boxes of 5 will not do, because they leave 2 rolls over. The numbers that share 12 out exactly, with nothing left over, are 1, 2, 3, 4, 6 and 12, and they come in pairs that multiply to give 12: 1 × 12, 2 × 6 and 3 × 4.'
    ],
    after: [
      'So 3 and 4 are a pair of {t:factor}s of 12, and so are 2 and 6. Every number has at least two, 1 and itself, and a {t:prime} is a number that has no others.'
    ] },

  /* ---------- The second kind: breaking one number into primes ---------- */
  { id: 'meet-factor', kind: 'meet', outcome: 'factor',
    link: 'The first kind of problem asked only whether a number splits. The second asks what the number is made of, and that needs a list, not a yes or a no.',
    case: 'wd-puzzle', mark: 'W1',
    strip: [
      'There is one whole number to work with: 60.',
      'The question asks for the prime numbers that multiply together to give it.',
      'The answer is a list of numbers, not a yes or a no.'
    ],
    explain: [
      'What you are shown is one whole number and a question about what it is built from. The building blocks are the {t:prime}s: 60 is built from 2, 2, 3 and 5, because 2 × 2 × 3 × 5 = 60. There is only one list that works, whichever order you find the numbers in.',
      'The question can also be worded as “every way it splits”: how many ways 28 tables can be set out in equal rows, or which sizes of equal team 24 players allow. It is the same kind, because every way of sharing a number out evenly uses some of its primes multiplied together, so once you know the primes you can list every way.'
    ],
    feature: { step: 'W1', option: 'parts' },
    name: 'A problem like this is {o:factor}: the {t:factor}s of the number that are {t:prime}s, written as a product.' },

  { id: 'check-factor', kind: 'check', after: 'factor',
    case: 'wd-museum',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show that the problem asks what one number is made of? Tap them.',
           answer: 'which prime numbers multiply together to give 45' } },

  /* ---------- The look-alike pair: whether one number splits, or what it is made of ---------- */
  { id: 'look-prime-factor', kind: 'lookalike', ledger: 'prime~factor',
    link: 'The first two kinds are easy to mix up when a problem is about one number, because the working for one finds things that the other needs. This card puts them side by side.',
    cases: ['la-patrols-prime', 'la-patrols-factor'],
    instruction: 'Both problems are about the same scout leader and the same 57 scouts. Compare one thing: does the problem ask only whether the number splits, or does it ask what the number is made of?',
    prompt: { kind: 'which', option: 'W1.parts', answer: 'la-patrols-factor' },
    difference: [
      'In Case A the leader asks whether the 57 scouts can be split into equal patrols, with more than one patrol and more than one scout in each. The answer is a yes or a no, and the answer is {a:W1.split}.',
      'In Case B the same leader asks which prime numbers multiply together to give 57. The answer is a list, and the answer is {a:W1.parts}.',
      'Testing 57 finds that 3 fits, and 57 = 3 × 19, so the working for one contains what the other needs. What differs is only what is asked, a verdict or a list.'
    ] },

  /* ---------- The third kind: the biggest equal piece for two numbers ---------- */
  { id: 'meet-hcf', kind: 'meet', outcome: 'hcf',
    link: 'The first two kinds took one number apart. The third starts from two numbers and looks for the largest size of piece that cuts both of them exactly.',
    case: 'wd-peppers', mark: 'W1',
    strip: [
      'There are two whole numbers: 12 red peppers and 18 green peppers.',
      'Every tray must hold the same number of peppers, with one color only in a tray and nothing left over.',
      'The question asks for the largest tray size that does this for both numbers at once.'
    ],
    explain: [
      'What you are shown is two whole numbers and a question about a piece that fits into both with nothing left over. Trays of 2 would work: 6 red trays and 9 green trays. Trays of 3 would work, and trays of 6. Trays of 4 would not, because 18 peppers fill 4 trays of 4 and leave 2 over. The biggest tray that works for both colors is 6: 2 red trays and 3 green trays. Using the word for a number that shares another out exactly, 6 is a {t:factor} of 12 and a {t:factor} of 18.',
      'There is a sign that you have the right number. The answer can never be more than the smaller of the two numbers, because a piece cannot be bigger than the whole it is cut from.'
    ],
    feature: { step: 'W1', option: 'piece' },
    name: 'A problem like this is {o:hcf}. In the name, “common” means that both numbers share it: the answer is a {t:factor} of the first number and also a {t:factor} of the second, and “highest” means the biggest such number.' },

  { id: 'check-hcf', kind: 'check', after: 'hcf',
    case: 'wd-tulips',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what the pieces must be like? Tap them.',
           answer: 'make bunches that all hold the same number of flowers, with only tulips in some bunches and only daffodils in the others and none left over' } }
]);
