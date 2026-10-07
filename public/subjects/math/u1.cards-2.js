// Basic Math, Unit One, part two: the word "formula", then the second kind (a number you are not told).
// The app prints the word and its meaning on a term card, and "what you must be able to point to" on a meet card.

FC.cards('math', 'u1', [

  /* ---------- A word the second kind leans on ---------- */
  { id: 'term-formula', kind: 'term', term: 'formula',
    h: 'A calculation with a gap in it',
    link: 'The next kind of problem leans on one word, so here it is first.',
    case: 'gt-gymcard',
    plain: [
      'The gym keeps a card at the desk, and it is how every bill is worked out: the bill is 15, plus 4 for each class. A member who books 3 classes pays 15 + 4 × 3 = 27. A member who books 10 pays 15 + 4 × 10 = 55.',
      'The card is a calculation written out once, with a word where a number goes, so it works for any member. It also works backward: start from a bill of 43, and you can work out how many classes it was for.'
    ],
    after: [
      'A word or a letter where a number goes is how one calculation gets used again and again with different numbers.'
    ] },

  /* ---------- The second kind: a number you are not told ---------- */
  { id: 'meet-unknown', kind: 'meet', family: 'unknown',
    link: 'Second: a problem that hides one number, and gives you facts that fix it.',
    case: 'gt-van', mark: 'M1',
    explain: [
      'Maya knows what the shop charges and what she paid. The one thing missing is how far she drove, and the facts are set up so that only one distance fits.',
      'Here the facts are a {t:formula}: $30, plus $0.40 for each kilometer. A problem like this can give its facts in two other ways. One is a rate, so much for each thing, such as grams of rice for each person, with a new number of things to scale it to. The other is two totals about two numbers you are not told, such as how many things were bought in all and what they cost in all.',
      'Every problem asks for a number, so having a number to find tells you nothing. What marks this kind is what you are given to find it with.'
    ],
    spot: [
      { do: 'Find the number you are not told: how far Maya drove.', why: 'The problem asks for it and does not give it.' },
      { do: 'Find the facts it has to fit: $30 plus $0.40 for every kilometer, and a bill of $54.', why: 'Only one distance makes the bill come out right.' },
      { do: 'Check that no amount is growing or shrinking over time, and that there is no triangle.', why: 'Either of those would make it a different kind of problem.' }
    ],
    feature: { step: 'M1', option: 'unknown' },
    name: 'This is {a:M1.unknown}. Hide the distance, and the other numbers still tell you exactly what it must be.' },

  { id: 'check-unknown', kind: 'check', after: 'unknown',
    case: 'gt-pens',
    ask: { type: 'option', step: 'M1', among: ['whole', 'unknown'] } }
]);
