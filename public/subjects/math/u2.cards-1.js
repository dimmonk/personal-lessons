// Basic Math, Unit Two, part one: the opening card, and the first three kinds (does one number split, which primes make it, and the
// biggest equal piece for two numbers), with the three words they lean on and the look-alike card for the first two.
// Unit Two is the first unit that teaches steps (kind 'P', lesson standard A12). A quick lesson (section 19): each kind has one meet
// card, one check, and one worked example (u2.cards-solved-1.js, computed: do not edit a number by hand). The key has one question
// here, and each of its six answers leads to one name.
// Plain, concrete writing (section 20): a real problem first, then the idea, then how to spot it as numbered steps, then the name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, the key’s question and answer on a meet card, and the stem of every commit prompt.

FC.cards('math', 'u2', [

  { id: 'orient-whole', kind: 'orient',
    h: 'Six whole-number problems that look alike',
    canDo: 'Before you start calculating a problem about whole numbers, check what it is asking. Six different questions look alike, each needs its own steps, and the wrong steps still give you a neat number.',
    everyday: [
      'At a school fair, six questions come up in one afternoon, all about whole numbers. “Can our 67 volunteers stand in equal rows?” “Which prime numbers multiply together to give 60?” “Two ribbons, 60 cm and 84 cm long, are to be cut into pieces of one length with none left over: how long can the pieces be at most?” “One stall restocks every 20 minutes and the other every 30: when do they restock together?” “There are 50 candies for 7 children: how many are left over?” And a child with a calculator asks: “Can the number that multiplies by itself to give 2 be written down exactly?”',
      'Each question needs its own steps, and nothing in the number you get says it came from the wrong ones. So the order is always the same: first find out what the problem wants to know about its numbers, then work it out.'
    ],
    add: [
      'The steps for each kind are the same whatever the numbers. A calculator can do the arithmetic: what you practice here is which steps to take, and why.'
    ],
    map: { branch: 'whole' } },

  /* ---------- A word the first kind leans on ---------- */
  { id: 'term-prime', kind: 'term', term: 'prime',
    h: 'A number that will not split',
    link: 'The first kind of problem needs the word “prime”. Here it is in a real example.',
    case: 'wd-squads',
    plain: [
      'Twelve players can make teams in four ways, because 12 shares out evenly by 2, by 3, by 4 and by 6. Thirteen players cannot: nothing between 1 and 13 shares 13 out evenly, so it is one team of 13 or 13 teams of one.',
      'A number like 13, which only 1 and itself share out evenly, is called a prime. Every other whole number is built from primes: 12 is 2 × 2 × 3. The first few are 2, 3, 5, 7, 11 and 13. The number 1 is left out on purpose.'
    ] },

  /* ---------- The first kind: testing whether one number splits ---------- */
  { id: 'meet-prime', kind: 'meet', outcome: 'prime',
    link: 'First: one number, and a yes-or-no question about whether it splits.',
    case: 'wd-apples', mark: 'W1',
    explain: [
      'The seller has one number, 59, and one question: can the apples be packed in equal bags at all? She does not ask how many bags, or how big. Whether 59 is odd or small does not matter: what matters is that she only asks whether it splits.',
      'You could try every smaller number one by one, but for a big number that takes forever. The steps in this unit test only a short list of small numbers, and the answer is just as sure.'
    ],
    spot: [
      { do: 'Count the numbers: one, 59 apples.', why: 'Two numbers would be a different problem, coming later in this unit.' },
      { do: 'Find the rule for the groups: equal bags, more than one bag, more than one apple in each.', why: 'Without that rule, one bag of 59 would always work.' },
      { do: 'Find the question: “Is that possible?” It wants a yes or a no.', why: 'No list and no count is asked for.' }
    ],
    feature: { step: 'W1', option: 'split' },
    name: 'A problem like this is {o:prime}. If no small number fits it, the number is a {t:prime}, and it cannot be split.' },

  { id: 'check-prime', kind: 'check', after: 'prime',
    case: 'wd-tour',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show that the problem asks only whether one number can be shared out in equal groups? Tap them.',
           answer: 'split them into equal groups, with more than one group and more than one visitor in each group' } },

  /* ---------- A word the procedure leans on ---------- */
  { id: 'term-sqroot', kind: 'term', term: 'sqroot',
    h: 'The number that multiplies by itself',
    link: 'The steps for the first kind stop testing at a certain point, and you need one more word to say where. Here it is in a real example.',
    case: 'wd-patio',
    plain: [
      'The number of slabs along one side of the square patio is the number that, multiplied by itself, gives the total: 6 × 6 = 36. That 6 is the {t:sqroot} of 36, written √36 = 6.',
      'Most numbers have no whole number that multiplies by itself to give them. 50 slabs cannot make a square: 7 × 7 = 49 is one slab short, and 8 × 8 = 64 is too many. The side would be between 7 and 8 slabs, about 7.07 on a calculator.'
    ] },

  /* ---------- A word the second kind leans on ---------- */
  { id: 'term-factor', kind: 'term', term: 'factor',
    h: 'A number that shares another out exactly',
    link: 'The second kind of problem takes one number apart, and it needs a word for the numbers that share it out exactly. Here it is in a real example.',
    case: 'wd-boxes',
    plain: [
      'The baker’s 12 rolls fit exactly into 4 boxes of 3, or 3 boxes of 4. Boxes of 5 will not do: they leave 2 rolls over. The numbers that share 12 out exactly are 1, 2, 3, 4, 6 and 12, and they come in pairs that multiply to 12: 1 × 12, 2 × 6 and 3 × 4.'
    ],
    after: [
      'So 3 and 4 are a {t:factor} pair of 12, and so are 2 and 6. Every number has at least two factors, 1 and itself, and a prime has no others.'
    ] },

  /* ---------- The second kind: breaking one number into primes ---------- */
  { id: 'meet-factor', kind: 'meet', outcome: 'factor',
    link: 'Second: one number again, but now you want a list, not a yes or a no.',
    case: 'wd-puzzle', mark: 'W1',
    explain: [
      'The puzzle gives one number and asks which primes multiply together to make it. For 60 they are 2, 2, 3 and 5, because 2 × 2 × 3 × 5 = 60. There is only one such list, whatever order you find the primes in.',
      'Sometimes the same problem is worded as “every way it splits”: the ways to set out 28 tables in equal rows, or the team sizes that 24 players allow. The steps are the same, because once you have the primes you can list every way.'
    ],
    spot: [
      { do: 'Count the numbers: one, 60.', why: 'Two numbers would be a different problem.' },
      { do: 'Find what is asked for: “which prime numbers multiply together to give 60”.', why: 'The answer is a list of numbers.' },
      { do: 'Check it is not only “can it be split?”: here you want the actual primes.', why: 'A yes or a no would leave the question unanswered.' }
    ],
    feature: { step: 'W1', option: 'parts' },
    name: 'A problem like this is {o:factor}. Its answer is the list of primes that multiply to make the number.' },

  { id: 'check-factor', kind: 'check', after: 'factor',
    case: 'wd-museum',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show that the problem asks for the primes that make one number? Tap them.',
           answer: 'which prime numbers multiply together to give 45' } },

  /* ---------- The look-alike pair: whether one number splits, or which primes make it ---------- */
  { id: 'look-prime-factor', kind: 'lookalike', ledger: 'prime~factor',
    link: 'Both of these are about one number, and the working for one finds what the other needs.',
    cases: ['la-patrols-prime', 'la-patrols-factor'],
    instruction: 'Both problems are about the same 57 scouts. Compare one thing: does the problem ask only whether the number splits, or does it ask for the primes?',
    prompt: { kind: 'which', option: 'W1.parts', answer: 'la-patrols-factor' },
    difference: [
      'In the first problem the leader only asks whether it can be done: {a:W1.split}. The answer is a yes or a no.',
      'In the second problem the same leader asks which primes multiply together to give 57: {a:W1.parts}. The answer is a list.',
      'Testing 57 finds that 3 fits, and 57 = 3 × 19, so the working for one holds what the other needs. Only the question differs: a yes or a no, or a list.'
    ] },

  /* ---------- The third kind: the biggest equal piece for two numbers ---------- */
  { id: 'meet-hcf', kind: 'meet', outcome: 'hcf',
    link: 'Third: two numbers, and the biggest equal piece that fits both.',
    case: 'wd-peppers', mark: 'W1',
    explain: [
      'The cook has 12 red peppers and 18 green ones, and wants trays of one size with none left over. Trays of 2 work (6 red trays and 9 green), and so do trays of 3 and of 6. Trays of 4 do not: 18 peppers leave 2 over. The biggest that works for both is 6: 2 red trays and 3 green. Since 6 goes into both 12 and 18 exactly, 6 is a {t:factor} of both.',
      'You can check the answer: it is never more than the smaller of the two numbers, because a piece cannot be bigger than what it is cut from.'
    ],
    spot: [
      { do: 'Count the numbers: two, 12 peppers and 18 peppers.', why: 'One number would be a different problem.' },
      { do: 'Find the cutting: trays that all hold the same number, none left over.', why: 'Both numbers must split exactly into that size.' },
      { do: 'Find the biggest: “What is the largest number of peppers a tray can hold?”', why: 'You want the biggest size that fits both, never more than the smaller number.' }
    ],
    feature: { step: 'W1', option: 'piece' },
    name: 'A problem like this is {o:hcf}. “Common” means both numbers have it, and “greatest” means the biggest one.' },

  { id: 'check-hcf', kind: 'check', after: 'hcf',
    case: 'wd-tulips',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show what the pieces must be like? Tap them.',
           answer: 'make bunches that all hold the same number of flowers, with only tulips in some bunches and only daffodils in the others and none left over' } }
]);
