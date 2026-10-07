// Political Ideologies, Unit Three, part three (second half): the check for the thin case, the look-alike pairs between the
// names that set ordinary people against a few at the top, and the exception that ends the vote.

FC.cards('ideology', 'u3', [

  { id: 'check-pop', kind: 'check', after: 'pop',
    case: 'n-pop-forum',
    ask: { type: 'option', step: 'N1', among: ['whole', 'elitenation', 'eliteonly'] } },

  { id: 'look-nationalism-natpop', kind: 'lookalike', ledger: 'nationalism~natpop',
    link: 'Both put the nation first and leave the vote in place, and both can be angry about how the country is run.',
    cases: ['n-lk-rail-nat', 'n-lk-rail-natpop'],
    instruction: 'Both stories are about the closing of the northern railway line. Compare one thing: whether anyone inside the country is named as the other side.',
    prompt: { kind: 'which', option: 'N1.elitenation', answer: 'n-lk-rail-natpop' },
    difference: [
      'In Story A the transport minister says “we are one country”, and that the south will help carry what the north loses. Nobody inside the country is the other side. The answer is {a:N1.whole}, so this is {o:nationalism}.',
      'In Story B the leaflet blames “the ministers in the capital, none of whom has ever ridden it” for closing the line, and wants the railways run for the country’s own people. The answer is {a:N1.elitenation}, so this is {o:natpop}.',
      'The closing is the same, and so is the anger. What differs is whether the speech speaks for everyone, or for ordinary people against a few at the top.'
    ] },

  { id: 'look-natpop-pop', kind: 'lookalike', ledger: 'natpop~pop',
    link: 'Both set ordinary people against a few at the top. The difference is small and easy to miss.',
    cases: ['n-lk-bank-natpop', 'n-lk-bank-pop'],
    instruction: 'Both stories are about a bank rescue paid for out of taxes, and the first lines are the same. Compare one thing: what each speech says the country should have, after the anger at those at the top.',
    prompt: { kind: 'which', option: 'N1.eliteonly', answer: 'n-lk-bank-pop' },
    difference: [
      'In Story A the speaker is angry at the ministers and bankers, then says “our savings should stay in our own banks, run for our own people”. That puts the country’s own industry first. The answer is {a:N1.elitenation}, so this is {o:natpop}.',
      'In Story B the speaker is angry at the same people and asks for a vote to throw them out. Nothing is said about what the country should have. The answer is {a:N1.eliteonly}, so this is {o:pop}.',
      'Cut the sentence about savings from Story A and what is left is almost Story B. The difference can be that thin.'
    ] },

  { id: 'exc-elitefasc', kind: 'exception', ledger: 'natpop~fasc', looksLike: 'natpop', is: 'fasc',
    h: 'A text that blames a few at the top and still ends the vote',
    link: 'Ordinary people against a few at the top, with the vote left in place, is {o:natpop}. A text can start the same way and end somewhere else.',
    case: 'n-x-elitefasc',
    setup: 'So far this broadcast sounds like {o:natpop}: it blames a few at the top (“the bankers and ministers in the capital have sold this country’s farms and mills”) and wants the country’s own industry kept. Yet it is {o:fasc}.',
    prompt: { kind: 'phrase', answer: 'the other parties will be closed' },
    because: [
      'The first half is {o:natpop}. If it stopped there and asked the voters to throw those few out, that is the name it would get.',
      'It does not stop. The movement says it is “the voice” of one people, that there will be no more elections, that the other parties will be closed and that any paper that defends the bankers will be shut. That is not a vote to remove those at the top. It takes the vote away from everyone, so that the movement alone speaks.',
      'The second question decides it. In {o:natpop} the vote stays, and it is the way to remove those at the top. Here the answer is {a:N2.aside}, so this is {o:fasc}.'
    ],
    take: 'The broadcast also speaks of one people with one will, which fits {a:N1.whole}, and blames a few at the top, which fits {a:N1.elitenation}. When a story shows both, the answer to the first question is {a:N1.elitenation}. Either way, the second question gives the name.' }
]);
