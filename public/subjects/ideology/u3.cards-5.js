// Political Ideologies, Unit Three, part four: the last name, and the look-alike pair that shares the second answer.

FC.cards('ideology', 'u3', [

  { id: 'meet-nazi', kind: 'meet', outcome: 'nazi',
    link: 'Every text so far put a people first without saying it was worth more than any other. This one does say so.',
    case: 'n-nazi-pamphlet', mark: 'N1',
    explain: [
      'The pamphlet sorts people by descent into “the Dornlings of the old blood” and “the others who came later”, and says they “are not equal”. The old blood is “higher”, comes first and rules. The rest “will serve it or be kept apart from it”. Blood here means descent: who your parents and grandparents were.',
      'This is the new thing. In every speech so far a people came first, but nobody was said to be worth less by birth. Here people are ranked at birth, and that alone decides the name. The pamphlet also wants one party only, but a text that ranked people this way and kept the elections would get the same name.'
    ],
    spot: [
      { do: 'Find how people are sorted: by blood, “the old blood” and “the others who came later”.', why: 'Birth, not anything a person does, decides which group you are in.' },
      { do: 'Find the ranking: the old blood is “higher than the later peoples”.', why: 'One people is said to be worth more than another.' },
      { do: 'Find who ends up on top and who ends up below: the old blood rules, and the rest “serve it or be kept apart”.', why: 'In {o:natpop} the other side is a few at the top, but here it is whole peoples.' }
    ],
    feature: { step: 'N1', option: 'blood' },
    name: 'This is {o:nazi}. The word comes from a real movement, but every text in this unit is invented. Experts argue about where its edges are, so this unit draws the line at the ranking, because that is what a short text can show.' },

  { id: 'check-nazi', kind: 'check', after: 'nazi',
    case: 'n-nazi-notice',
    ask: { type: 'phrase', step: 'N1', say: 'Tap the words that place one people below another.',
           answer: 'the work that suits their lower place' } },

  { id: 'look-fasc-nazi', kind: 'lookalike', ledger: 'fasc~nazi',
    link: 'These two can look almost the same on the page. Both can push the vote and critics aside, and both can be full of marches and talk of one nation.',
    cases: ['n-lk-parade-fasc', 'n-lk-parade-nazi'],
    instruction: 'Both stories are about a youth parade in Marren, and in both the old parties are dissolved. Compare one thing: whether the speech ranks people by blood.',
    prompt: { kind: 'which', option: 'N1.blood', answer: 'n-lk-parade-nazi' },
    difference: [
      'In Story A “every child of Marren marches today as one people with one will”. The old parties are dissolved and the Leader has one voice. Nobody is ranked, so the answer to the first question is {a:N1.whole}. With the vote pushed aside, this is {o:fasc}.',
      'In Story B the children of the first blood march, and the later peoples “may watch from the side, as is fitting for a lower people”. The old parties are dissolved here too. People are ranked by blood, so the answer is {a:N1.blood} and this is {o:nazi}.',
      'The second question gets the same answer in both, so it cannot tell them apart. The first question can: are people ranked by blood?'
    ] }
]);
