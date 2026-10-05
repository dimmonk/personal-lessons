// Political Ideologies, Unit Three, part three (second half): the thin case's picture and check, the look-alike pairs between
// the names that set ordinary people against a few at the top, the exception that ends the vote, and a wrong idea about the thin case.

FC.cards('ideology', 'u3', [

  { id: 'portrait-pop', kind: 'portrait', outcome: 'pop',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:pop} in real life, where nobody marks the words for you.',
    typical: [
      'Two sides only, "the people" and "them". The group at the top is described loosely: "the establishment", "the politicians", "the bankers", "the ones who always land on their feet".',
      'A grievance comes first, and the remedy is to get the few out. The text rarely says what should take their place.',
      'It is often short: a slogan, a headline, a post, a line at the end of a speech.',
      'Because it has nothing attached, the same slogan can turn up in texts that mean very different things. What comes after the slogan decides which name a whole text has.',
      'It leaves the vote in place, and usually uses it: the way to get the few out is an election.'
    ],
    not: [
      'Anger at those in charge is not enough for this name. The name needs ordinary people set against a few at the top, no word about what the country\'s borders, culture or industry should be, no ranking of peoples, and the vote left in place. If the text adds what the country should have, it is {o:natpop}.',
      'A text that speaks for everyone in the country with nobody named as the other side is {o:nationalism}. In this name someone is named: the few at the top.'
    ],
    wild: ['"They are all the same, throw them all out."', '"The ones at the top look after each other."', '"We pay and they collect."', '"Ordinary people have had enough."', '"Time for a change at the top."'],
    self: 'In your own life it is a comment under a news story, a banner at a protest, or the last line of a leaflet: "send them a message".',
    ask: '"Who is at the top, and does the text add anything about what the country should have?" If the answer to the second part is no, nothing is attached, and this is the name to look at.' },

  { id: 'check-pop', kind: 'check', after: 'pop',
    case: 'n-pop-forum',
    ask: { type: 'option', step: 'N1', among: ['whole', 'elitenation', 'eliteonly'] } },

  { id: 'look-nationalism-natpop', kind: 'lookalike', ledger: 'nationalism~natpop',
    link: 'Both of these names put the nation first and leave the vote in place, and both can be angry about the way the country is run. They are easy to mix up. This card puts them side by side.',
    cases: ['n-lk-rail-nat', 'n-lk-rail-natpop'],
    instruction: 'Both cases are about the closing of the northern railway line. Compare one thing: whether anyone inside the country is named as the other side.',
    prompt: { kind: 'which', option: 'N1.elitenation', answer: 'n-lk-rail-natpop' },
    difference: [
      'In Case A the transport minister says "we are one country", and that the south will help carry what the north loses. Nobody inside the country is named as the other side. The answer is {a:N1.whole}, and with the vote left alone, the case is {o:nationalism}.',
      'In Case B the leaflet names "the ministers in the capital, none of whom has ever ridden it" as the ones closing the line, and says that the railways should be run for the country\'s own people. A few at the top are the other side, and the country\'s industry comes first. The answer is {a:N1.elitenation}, and the case is {o:natpop}.',
      'The closing is the same, and so is the anger. What differs is whether the text speaks for everyone, or for the country\'s ordinary people against a few of its own.'
    ] },

  { id: 'look-natpop-pop', kind: 'lookalike', ledger: 'natpop~pop',
    link: 'These two names both set ordinary people against a few at the top, and both leave the vote in place. The difference is small and easy to miss. This card puts them side by side.',
    cases: ['n-lk-bank-natpop', 'n-lk-bank-pop'],
    instruction: 'Both cases are about a bank rescue paid for out of taxes, and the first lines are the same. Compare one thing: what each text says the country should have, after the anger at those at the top.',
    prompt: { kind: 'which', option: 'N1.eliteonly', answer: 'n-lk-bank-pop' },
    difference: [
      'In Case A the speaker is angry at the ministers and bankers, and then says that "our savings should stay in our own banks, run for our own people". That puts the country\'s own industry first. The answer is {a:N1.elitenation}, and the case is {o:natpop}.',
      'In Case B the speaker is angry at the same people, says that they "rescue each other and bill the rest of us", and asks for a vote to throw them out. Nothing is said about what the country should have. The answer is {a:N1.eliteonly}, and the case is {o:pop}.',
      'Take the sentence about savings out of Case A, and what is left says almost what Case B says. That is how thin the difference can be, and why the question is asked.'
    ] },

  { id: 'exc-elitefasc', kind: 'exception', ledger: 'natpop~fasc', looksLike: 'natpop', is: 'fasc',
    h: 'A text that blames a few at the top and still ends the vote',
    link: 'The last cards showed ordinary people set against a few at the top, with the vote left in place. A text can start the same way and end somewhere else.',
    case: 'n-x-elitefasc',
    setup: 'The text blames a few at the top: "the bankers and ministers in the capital have sold this country\'s farms and mills". Setting a country\'s ordinary people against a few at the top, and wanting the country\'s farms and mills kept, is what you point to for {o:natpop}. Yet the answer for this case is {o:fasc}.',
    prompt: { kind: 'phrase', answer: 'the other parties will be closed' },
    because: [
      'The first half of the text is {o:natpop}. A few at the top are named, and the country\'s industry is to come first. If the text stopped there, and asked the voters to throw the few out, that is the name it would have.',
      'But it does not stop there. The movement says it will be "the voice" of one people, that there will be no more elections, that the other parties will be closed, and that papers that defend the bankers will be shut. That is not a vote to remove those at the top. It takes the vote away from everyone, so that the movement alone speaks.',
      'The second question decides it. For {o:natpop} the vote stays, and the way to remove those at the top is to use it. For {o:fasc} the answer is {a:N2.aside}. A text can blame a few at the top and still push the vote aside, and when it does, the second question gives it this name.'
    ],
    take: 'The text also speaks of one people with one will, which is the answer {a:N1.whole}, and it names a few at the top, which is the answer {a:N1.elitenation}. When a case shows both, the answer to the first question is {a:N1.elitenation}. Either way, the first question leaves {o:fasc} standing, and the second question is what gives the name.' },

  { id: 'refute-socialist', kind: 'refute', about: 'pop',
    h: 'A wrong idea: anger at a few at the top makes a text socialist',
    link: 'The thin case is the one most often given a name it has not earned, because it is angry and says little. This card tests one such idea.',
    idea: '"She says a small elite is robbing ordinary people, so she must be a socialist."',
    verdict: 'This is wrong.',
    right: [
      'A text that sets ordinary people against a few at the top has the answer {a:N1.eliteonly}, or {a:N1.elitenation} if it also puts the country first. Neither answer is about who should own the farms, factories, shops and banks.',
      'That question is asked only of texts that have the first answer {a:D1.class}. A text that blames a few ministers and bankers does not do that by itself, because ordinary people here are the country\'s people and not the people who work for a wage.',
      'Anger at a few at the top can come from almost any side. What counts is what the text says it wants, and a text that is angry and asks for nothing more is {o:pop}, whatever the speaker is called.'
    ],
    testedBy: ['n-claim-socialist'] }
]);
