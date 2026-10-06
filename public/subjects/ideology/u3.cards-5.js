// Political Ideologies, Unit Three, part four: the last name, and the look-alike pair that shares the second answer.

FC.cards('ideology', 'u3', [

  { id: 'meet-nazi', kind: 'meet', outcome: 'nazi',
    link: 'Every text so far put a people first without saying that it was worth more than any other. The last name does say so.',
    case: 'n-nazi-pamphlet', mark: 'N1',
    strip: [
      'One people is spoken for, but this time it is picked out by blood: "the Dornlings of the old blood".',
      'The text does not stop at saying who belongs. It says that the old blood is "higher than the later peoples": peoples are placed higher and lower.',
      'Its own people comes first and rules, and the others "will serve it or be kept apart from it".',
      'The text also wants one party only. That is its answer to the second question, and for this name it does not change anything.'
    ],
    explain: [
      'What is new here is the ranking. In every text so far a people was put first, and nobody was said to be worth less by birth. Here people are sorted at birth into peoples, and the sorting is said to matter more than anything a person does. Blood here means descent: who your parents and grandparents were.',
      'When a text ranks peoples like this, with its own above the rest, the answer to its first question is {a:N1.blood}, and that question is settled. Where the nation is spoken for as one, nobody is ranked. Where ordinary people are set against a few at the top, the other side is the few, whoever they are. Here the other side is whole peoples, chosen by birth.',
      'The second question does not change the name. A text with the same ranking that left elections in place would get the same name.'
    ],
    feature: { step: 'N1', option: 'blood' },
    name: 'The name for this is {o:nazi}. It is borrowed from a real movement, but every text in this unit is invented. Like {o:fasc}, its edges are argued over by the people who study it. The line is drawn at the ranking, because that is what a short text can show.' },

  { id: 'check-nazi', kind: 'check', after: 'nazi',
    case: 'n-nazi-notice',
    ask: { type: 'phrase', step: 'N1', say: 'Tap the words that place one people below another.',
           answer: 'the work that suits their lower place' } },

  { id: 'look-fasc-nazi', kind: 'lookalike', ledger: 'fasc~nazi',
    link: 'These two names can look almost the same on the page. Both can push the vote and critics aside, and both can be full of marches and talk of one nation.',
    cases: ['n-lk-parade-fasc', 'n-lk-parade-nazi'],
    instruction: 'Both cases are about a youth parade in Marren, and in both the old parties are dissolved. Compare one thing: whether the text ranks peoples by blood.',
    prompt: { kind: 'which', option: 'N1.blood', answer: 'n-lk-parade-nazi' },
    difference: [
      'In Case A "every child of Marren marches today as one people with one will". The old parties are dissolved, and the Leader has one voice. Nobody is ranked, so the answer to the first question is {a:N1.whole}. With the vote pushed aside, the case is {o:fasc}.',
      'In Case B the children of the first blood march, and the later peoples "may watch from the side, as is fitting for a lower people". The old parties are dissolved here too. People are ranked by blood, so the answer is {a:N1.blood}, and the case is {o:nazi}.',
      'The answer to the second question is the same in both, so it cannot tell them apart. The first question does: whether peoples are ranked by blood.'
    ] }
]);
