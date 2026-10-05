// Political Ideologies, Unit Three, part four: the last name, and the look-alike pair that shares the second answer.

FC.cards('ideology', 'u3', [

  /* ---------- Nazism ---------- */
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
      'What is new here is the ranking. In every text so far a people was put first, and nobody was said to be worth less by birth. Here people are sorted at birth into peoples, and the sorting is said to matter more than anything a person does. That is what sorting people by blood means. Blood here means descent: who your parents and grandparents were.',
      'The key reads one thing in this text: peoples ranked higher and lower, with the text\'s own people placed above the rest. When a text does that, the key\'s answer to its first question is {a:N1.blood}, and that question is settled.',
      'Set this beside the names you have met. Where the nation is spoken for as one, nobody is ranked. Where ordinary people are set against a few at the top, the other side is the few at the top, whoever they are, and not a people. Here the other side is whole peoples, chosen by birth.',
      'The second question does not change the name. This pamphlet wants one party only, and a text with the same ranking that left elections in place would get the same name. The second question separates names that do not rank peoples. For this name, the ranking has already decided.'
    ],
    feature: { step: 'N1', option: 'blood' },
    name: [
      'The name for this is {o:nazi}. It is borrowed from a real movement. Every text in this unit is invented, and none describes a real party or a real person.',
      'Like {o:fasc}, its edges are argued over by the people who study it. Some keep it for one movement in one country, and some use it for any text that ranks peoples by blood. The key draws its line at the ranking, because that is what a short text can show.'
    ] },

  { id: 'again-nazi', kind: 'again', outcome: 'nazi',
    link: 'The pamphlet gave you what to point to, from one case: {needs:nazi}. Here is a second case with a different story.',
    first: 'n-nazi-pamphlet', second: 'n-nazi-flyer', step: 'N1',
    instruction: 'Find what the two cases share. Ignore the story (a pamphlet, a flyer about homes). Look at one thing only: which words place one people above another because of its blood?',
    prompt: { kind: 'phrase', answer: 'The people of the Hearth, of the first blood, are born to lead' },
    shared: [
      'Both texts sort people by blood into peoples, and place one above the others. In the pamphlet the old blood "is higher than the later peoples". In the flyer the people of the first blood "are born to lead" and the later peoples "are born to follow". In both, the ranking is said to be fixed at birth.',
      'The two texts differ on the second question. The pamphlet wants one party only. The flyer says that the League "will ask for your vote in March". The name is the same, because the ranking has already decided it.',
      'The two stories share nothing else, so this holds wherever a text ranks peoples by blood and places its own above the rest. That is what {o:nazi} names.'
    ] },

  { id: 'portrait-nazi', kind: 'portrait', outcome: 'nazi',
    link: 'You know what decides the name. This card fills in the rest of the picture, so that you can spot {o:nazi} in real life, where nobody marks the words for you.',
    typical: [
      'People are sorted by blood or birth, and the sorting is a ladder: some peoples are higher, some lower.',
      'The text\'s own people is on top, with a claim to rule or to the best of everything. The others are to serve, to be kept apart, or to be driven out.',
      'Blood is treated as destiny: what a person is, can do and deserves is said to be fixed at birth, whatever they do.',
      'It often comes with the things the last picture described: one leader, marches, a story of decline, and the vote and critics pushed aside. These often go with the name. They do not decide it. The ranking does.',
      'The enemy is whole peoples, chosen by birth, and not people chosen by what they have done.'
    ],
    not: [
      'The ranking is what the name needs. A text that is proud of its people\'s history or language, and says no people is worth less, does not have it. A text that says that rules which treat everyone alike still leave some groups behind, and asks for fair results, ranks nobody, and has the key\'s answer {a:D1.rights} at the first question.',
      'Three of the names you have met can be mixed up with this one, because all of them can leave the vote in place and all of them put one people first. {o:nationalism} speaks for everyone in the country as equals. {o:natpop} and {o:pop} set ordinary people against a few at the top, and their anger is at those at the top, not at a people chosen by blood.',
      'What a text says about who should own the businesses does not give this name either. The key asks that only of texts that have the first answer {a:D1.class}.'
    ],
    wild: ['"Blood decides what a people can do."', '"They are not our kind."', '"The first people has the first right."', '"Some peoples are born to lead."', '"Our people comes first, by birth."'],
    self: 'You are unlikely to meet it as a whole programme. In your own life it is more often a single line in a comment or a joke, or a claim that one group is, by birth, better or worse. A line like that has the answer {a:N1.blood}, if it ranks a people by blood.',
    ask: '"Does the text sort people by blood or birth, and place its own above the rest?" If it does, this is the name to look at, whatever it says about the vote.' },

  { id: 'check-nazi', kind: 'check', after: 'nazi',
    case: 'n-nazi-notice',
    ask: { type: 'phrase', step: 'N1', say: 'Tap the words that place one people below another.',
           answer: 'the work that suits their lower place' } },

  { id: 'look-fasc-nazi', kind: 'lookalike', ledger: 'fasc~nazi',
    link: 'These two names can look almost the same on the page. Both can push the vote and critics aside, and both can be full of marches and talk of one nation. This card puts them side by side.',
    cases: ['n-lk-parade-fasc', 'n-lk-parade-nazi'],
    instruction: 'Both cases are about a youth parade in Marren, and in both the old parties are dissolved. Compare one thing: whether the text ranks peoples by blood.',
    prompt: { kind: 'which', option: 'N1.blood', answer: 'n-lk-parade-nazi' },
    difference: [
      'In Case A "every child of Marren marches today as one people with one will". The old parties are dissolved, and the Leader has one voice. Nobody is ranked, so the key\'s answer to the first question is {a:N1.whole}. With the vote pushed aside, the case is {o:fasc}.',
      'In Case B the children of the first blood march, and the later peoples "may watch from the side, as is fitting for a lower people". The old parties are dissolved here too, and the Leader has the same one voice. People are ranked by blood, so the key\'s answer is {a:N1.blood}, and the case is {o:nazi}.',
      'The answer to the second question is the same in both. That is why it cannot tell them apart. The first question does: whether peoples are ranked by blood.'
    ] }
]);
