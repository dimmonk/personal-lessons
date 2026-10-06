// Political Ideologies, Unit Three, part two: the second name and its look-alike.

FC.cards('ideology', 'u3', [

  { id: 'meet-fasc', kind: 'meet', outcome: 'fasc',
    link: 'The anniversary speech spoke for everyone and left the vote alone. A text can speak for everyone in just the same way and treat the vote very differently.',
    case: 'n-rally', mark: 'N2',
    strip: [
      'One group is spoken for, and it is everyone: "We are one people, with one will." That is the same answer to the first question as in the anniversary speech.',
      'But the speaker does not stop there. He says "I am its voice": one person speaks for the people, and no one else does.',
      'The other parties are to be closed, and the papers that print their complaints are to be shut. Nobody is left who can say the opposite.',
      'Nobody is ranked by blood. The text is about one nation and one leader.'
    ],
    explain: [
      'In the anniversary speech, the voters chose, and other parties could stand against the speaker. Here the speaker takes that away. He wants elections and rival parties done away with, and critics silenced, so that nobody speaks for the people but him. That is what the second question asks: {q:N2}',
      'A text that speaks for the whole nation and says only that is the plain case you have just met. A text that speaks for the whole nation and also removes everyone\'s way of saying no is another thing, with another name.',
      'The line below has a bracket: a second way to speak for a people, where the country\'s ordinary people face an {t:elite} and the nation still comes first. This speaker uses the first way. What decides the name is the same in both: elections, other parties and critics pushed aside.'
    ],
    feature: { step: 'N2', option: 'aside' },
    name: 'The name for this is {o:fasc}. It is borrowed from a real movement, but every text in this unit is invented. People who study it argue about where its edges are; the line drawn here is the one you have just read, because that is what a short text can show.' },

  { id: 'check-fasc', kind: 'check', after: 'fasc',
    case: 'n-gazette',
    ask: { type: 'phrase', step: 'N2', say: 'Tap the words that take away the say of anyone who might disagree.',
           answer: 'The election due in March is canceled' } },

  { id: 'look-nationalism-fasc', kind: 'lookalike', ledger: 'nationalism~fasc',
    link: 'Both names speak for everyone, and both can sound proud and sure of themselves. They are easy to mix up.',
    cases: ['n-lk-hospital-nat', 'n-lk-hospital-fasc'],
    instruction: 'Both cases are about the opening of a new hospital, and the first half of each speech is the same word for word. Compare one thing: what each text wants done with the opposition and with people who question the hospitals.',
    prompt: { kind: 'which', option: 'N2.aside', answer: 'n-lk-hospital-fasc' },
    difference: [
      'In Case A the prime minister says that parliament will debate the health budget and that the opposition will have its say on every line. The vote and the right to disagree stay in place. With the whole nation spoken for as one, the case is {o:nationalism}.',
      'In Case B the Leader says that the budget is his alone to decide, that doctors and papers that question his hospitals will be closed, and that the opposition has no more place. The answer is {a:N2.aside}, and the case is {o:fasc}.',
      'Warmth and pride cannot tell you which of the two you are reading. What each text does with everyone who might say no can.'
    ] }
]);
