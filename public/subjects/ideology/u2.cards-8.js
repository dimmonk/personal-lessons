// Political Ideologies, Unit Two, part five: the two questions, each put in one place. They also teach the pairs of names that have
// no card of their own (the ledger's taughtIn).

FC.cards('ideology', 'u2', [

  { id: 'q-business', kind: 'question', step: 'C1',
    h: 'The question about the businesses',
    link: 'Each name above ended on one of two questions. Here is the first, with all six of its answers.',
    decides: [
      'That is why {o:socdem} and {o:demsoc} can both ask for health care and still sit under different answers: a tax changes who gets what, and a handover changes who owns what.'
    ],
    how: [
      'Read the text for any sentence that says what should happen to the businesses, and match it to one answer. You should be able to put your finger on the words.',
      'Three things can look like an answer and are not. A complaint about what the owners did, with no plan, gets the answer {a:C1.none}. A tax or a floor for pay gives the first answer only if the owners keep the businesses. And naming a business is not a handover: the text must say it should pass out of the owners’ hands.',
      'Where a text gives two answers at once, the more exact one wins. A handover beats a tax: a text that taxes the owners and also takes some businesses from them is {o:demsoc}, not {o:socdem}. Workers who also compete beat workers alone: a handover to the workers by a vote, with the firms still competing, is {o:mktsoc}, not {o:demsoc}. A plan beats an explanation: a text that explains how owners gain and then asks for a handover is {o:demsoc}, not {o:marx}. An explanation with no plan keeps its answer, and the question about the government then decides the name.',
      'This question alone tells apart {o:socdem} and {o:mktsoc}, {o:classonly} and {o:demsoc}, {o:classonly} and {o:mktsoc}, {o:mktsoc} and {o:marx}, and {o:socdem} and {o:marx}: each has its own answer. Taxing the owners, even heavily, is not {o:marx}.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that tells it apart.' },

  { id: 'check-business', kind: 'check', after: 'C1',
    case: 'c-q-bakers',
    ask: { type: 'step', step: 'C1' } },

  { id: 'q-government', kind: 'question', step: 'C2',
    h: 'The question about the government',
    link: 'Here is the second question, with all four of its answers. Two of them have been in the texts all along: the voters decide, and nothing is said about power.',
    decides: [
      'The answer {a:C2.vote} is not a promise that the text likes elections. It is given when {when:C2.vote}. The answer {a:C2.none} is given when {when:C2.none}. For {o:demsoc} this is a real answer: public ownership with no word on how is filed under {o:demsoc}.'
    ],
    how: [
      'Look for words about power: who takes it, how, whether it can be taken back, and whether the government stays. "We will win the vote and pass the law" is the answer about elections. "The party will take power and keep it" is the answer about seizing. "We want no government" is the answer about getting rid of it. If none of these is in the text, the answer is {a:C2.none}, and that is a correct reading.',
      'A text can be silent on the businesses and decisive on the government, and a text that only explains how owners gain can be too. Answer each question as if the other were not there, and put the two answers together afterwards. A text silent on the businesses is {o:classonly} only if it is also silent on power: if it says a party will take power and keep it, it is {o:ml}, and if it wants the government gone, it is {o:anarch}.',
      'Asking the government to do something is not an answer here. "The government should tax the owners" does not say how power is won or held. Only words about power, or about the government itself, answer this question.',
      'This question alone tells apart {o:demsoc} and {o:anarch}, {o:marx} and {o:ml}, and {o:marx} and {o:anarch}: each has its own answer.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that tells it apart.' },

  { id: 'check-government', kind: 'check', after: 'C2',
    case: 'c-q-shops',
    ask: { type: 'step', step: 'C2' } }
]);
