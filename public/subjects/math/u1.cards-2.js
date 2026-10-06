// Basic Math, Unit One, part two: the word "formula", then the second kind (a number you are not told).
// The app prints the word and its meaning on a term card, and "what you must be able to point to" on a meet card.

FC.cards('math', 'u1', [

  /* ---------- A word the second kind leans on ---------- */
  { id: 'term-formula', kind: 'term', term: 'formula',
    h: 'A calculation with a gap in it',
    link: 'The next kind of problem leans on one word, so here it is first.',
    case: 'gt-gymcard',
    plain: [
      'The gym lets members book classes, and the card is how every bill is worked out. Read it aloud: the bill is 15, plus 4 for each class. For a member who books 3 classes, put 3 in the place of the word “classes”: 15 + 4 × 3 = 27. For a member who books 10, put 10 there instead: 15 + 4 × 10 = 55.',
      'The card is a calculation written out once, with a word where a number goes, so that it can be used for anyone. And it works in either direction: put the number of classes in and the bill comes out, or start from a bill, say 43, and ask how many classes it was for.'
    ],
    after: [
      'A word or a letter standing where a number goes is how a calculation is left open, so that different numbers can be put in.'
    ] },

  /* ---------- The second kind: a number you are not told ---------- */
  { id: 'meet-unknown', kind: 'meet', family: 'unknown',
    link: 'The first kind used numbers that were all in front of you. The second kind hides one of them.',
    case: 'gt-van', mark: 'M1',
    strip: [
      'One number is not given: how many kilometers Maya drove.',
      'A calculation, written in words, connects it to numbers you are given: a fixed $30, plus $0.40 for every kilometer.',
      'A result that the hidden number must fit: the bill came to $54.',
      'The question asks for the hidden number. Nothing is split into equal groups, and nothing is followed as time passes.'
    ],
    explain: [
      'What you are shown is a puzzle with a gap in it. Everyone who reads the problem knows what the hire shop charges and what Maya paid. The one thing missing is the distance, and the facts are arranged so that only one distance fits.',
      'Here the facts are a {t:formula}. The same kind of problem can give its facts in two other shapes. A rate, meaning so much for each thing, such as so many grams of rice for each person, with a different number of things to scale it to. Or two totals about two numbers you are not told, such as how many things were bought in all and what they cost in all. In all three, the problem hides a number and gives facts that it has to fit.',
      'Every problem asks for a number, so “there is a number to find” cannot mark this kind. What marks it is what you are given to find the number with: a calculation and its result, a rate, or totals.'
    ],
    feature: { step: 'M1', option: 'unknown' },
    name: 'This kind of problem is {a:M1.unknown}. “Missing” means not given by the problem: it is the number you are asked for. “Totals” means two facts about numbers you are not told, such as how many there are and what they come to.' },

  { id: 'check-unknown', kind: 'check', after: 'unknown',
    case: 'gt-pens',
    ask: { type: 'option', step: 'M1', among: ['whole', 'unknown'] } }
]);
