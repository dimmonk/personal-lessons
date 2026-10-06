// Political Ideologies, Unit Three, part three (second half): the check for the thin case, the look-alike pairs between the
// names that set ordinary people against a few at the top, and the exception that ends the vote.

FC.cards('ideology', 'u3', [

  { id: 'check-pop', kind: 'check', after: 'pop',
    case: 'n-pop-forum',
    ask: { type: 'option', step: 'N1', among: ['whole', 'elitenation', 'eliteonly'] } },

  { id: 'look-nationalism-natpop', kind: 'lookalike', ledger: 'nationalism~natpop',
    link: 'Both of these names put the nation first and leave the vote in place, and both can be angry about the way the country is run.',
    cases: ['n-lk-rail-nat', 'n-lk-rail-natpop'],
    instruction: 'Both cases are about the closing of the northern railway line. Compare one thing: whether anyone inside the country is named as the other side.',
    prompt: { kind: 'which', option: 'N1.elitenation', answer: 'n-lk-rail-natpop' },
    difference: [
      'In Case A the transport minister says "we are one country", and that the south will help carry what the north loses. Nobody inside the country is named as the other side. The answer is {a:N1.whole}, and with the vote left alone, the case is {o:nationalism}.',
      'In Case B the leaflet names "the ministers in the capital, none of whom has ever ridden it" as the ones closing the line, and says that the railways should be run for the country\'s own people. The answer is {a:N1.elitenation}, and the case is {o:natpop}.',
      'The closing is the same, and so is the anger. What differs is whether the text speaks for everyone, or for the country\'s ordinary people against a few of its own.'
    ] },

  { id: 'look-natpop-pop', kind: 'lookalike', ledger: 'natpop~pop',
    link: 'These two names both set ordinary people against a few at the top. The difference is small and easy to miss.',
    cases: ['n-lk-bank-natpop', 'n-lk-bank-pop'],
    instruction: 'Both cases are about a bank rescue paid for out of taxes, and the first lines are the same. Compare one thing: what each text says the country should have, after the anger at those at the top.',
    prompt: { kind: 'which', option: 'N1.eliteonly', answer: 'n-lk-bank-pop' },
    difference: [
      'In Case A the speaker is angry at the ministers and bankers, and then says that "our savings should stay in our own banks, run for our own people". That puts the country\'s own industry first. The answer is {a:N1.elitenation}, and the case is {o:natpop}.',
      'In Case B the speaker is angry at the same people and asks for a vote to throw them out. Nothing is said about what the country should have. The answer is {a:N1.eliteonly}, and the case is {o:pop}.',
      'Take the sentence about savings out of Case A, and what is left says almost what Case B says. That is how thin the difference can be.'
    ] },

  { id: 'exc-elitefasc', kind: 'exception', ledger: 'natpop~fasc', looksLike: 'natpop', is: 'fasc',
    h: 'A text that blames a few at the top and still ends the vote',
    link: 'Ordinary people set against a few at the top, with the vote left in place, is {o:natpop}. A text can start the same way and end somewhere else.',
    case: 'n-x-elitefasc',
    setup: 'The text blames a few at the top: "the bankers and ministers in the capital have sold this country\'s farms and mills". Setting a country\'s ordinary people against a few at the top, and wanting its farms and mills kept, is what you point to for {o:natpop}. Yet the answer for this case is {o:fasc}.',
    prompt: { kind: 'phrase', answer: 'the other parties will be closed' },
    because: [
      'The first half of the text is {o:natpop}. If it stopped there, and asked the voters to throw the few out, that is the name it would have.',
      'But it does not stop there. The movement says it will be "the voice" of one people, that there will be no more elections, that the other parties will be closed, and that papers that defend the bankers will be shut. That is not a vote to remove those at the top. It takes the vote away from everyone, so that the movement alone speaks.',
      'The second question decides it. For {o:natpop} the vote stays, and the way to remove those at the top is to use it. For {o:fasc} the answer is {a:N2.aside}.'
    ],
    take: 'The text also speaks of one people with one will, which is the answer {a:N1.whole}, and it names a few at the top, which is the answer {a:N1.elitenation}. When a case shows both, the answer to the first question is {a:N1.elitenation}. Either way, the second question is what gives the name.' }
]);
