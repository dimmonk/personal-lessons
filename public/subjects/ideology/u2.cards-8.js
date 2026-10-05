// Political Ideologies, Unit Two, part four (second half) and part five: the last two look-alike pairs, the exception that sets an
// explanation beside a plan, and the key's two questions each put in one place.

FC.cards('ideology', 'u2', [

  { id: 'look-socdem-marx', kind: 'lookalike', ledger: 'socdem~marx',
    link: 'Both of these say the owners gain from the workers. They part on whether the text then asks the government for something.',
    cases: ['c-lk-sdmx-sd', 'c-lk-sdmx-mx'],
    instruction: 'Both cases are about the Brant steelworks and open with the same sentence about the owners. Compare one thing: whether the text asks for a tax or a service, or explains how any firm works.',
    prompt: { kind: 'which', option: 'C1.explain', answer: 'c-lk-sdmx-mx' },
    difference: [
      'In Case A the text says the firm can stay with its owners, and asks for a tax on its profits to pay for sick pay and a pension. It asks the government for something, and leaves the owners their firm. The answer is {a:C1.keep}, and the case is {o:socdem}.',
      'In Case B the text asks for nothing. It says that this is how any firm that pays wages has to work, and that every owner lives from what workers make and are not paid for. The answer is {a:C1.explain}, and the case is {o:marx}.',
      'The opening is the same. A text that says the owners keep most of what the workers make can be going on to a plan or to an explanation. Read what comes next.'
    ] },

  { id: 'look-marx-ml', kind: 'lookalike', ledger: 'marx~ml',
    link: 'Both of these can explain how owners gain. They part on whether the text goes on to say who will take power.',
    cases: ['c-lk-mxml-mx', 'c-lk-mxml-ml'],
    instruction: 'Both cases are about the Reed Mill and have the same sums and the same explanation. Compare one thing: whether the text goes on to say that a party, or the workers, will take power and keep it.',
    prompt: { kind: 'which', option: 'C2.seize', answer: 'c-lk-mxml-ml' },
    difference: [
      'In Case A the text explains and stops. It says nothing about power. The answer to the question about the businesses is {a:C1.explain}, and with nothing said about power, the case is {o:marx}.',
      'In Case B the text gives the same explanation, and then says the spinners’ party must take power and keep it, and allow no rival. The answer about power is {a:C2.seize}, and the case is {o:ml}.',
      'An explanation can be held with a plan for power or without one. What the text goes on to say about power is what separates them.'
    ] },

  { id: 'look-marx-anarch', kind: 'lookalike', ledger: 'anarch~marx',
    link: 'Both of these explain how owners gain, and a text that does only that is {o:marx}. They part on what the text goes on to say about the government.',
    cases: ['c-lk-mxan-mx', 'c-lk-mxan-an'],
    instruction: 'Both cases are about the Pike Mill and have the same sums and the same explanation. Compare one thing: whether the text goes on to say that the government is to be got rid of.',
    prompt: { kind: 'which', option: 'C2.gone', answer: 'c-lk-mxan-an' },
    difference: [
      'In Case A the text explains, and then says it will make its case to the voters at every election. The government stays, and the voters decide who runs it. The answer to the question about the businesses is {a:C1.explain}, and with the change put to the voters, the case is {o:marx}.',
      'In Case B the text gives the same explanation, and then says it wants no government at all, with people running the mill and the town together. The answer about the government is {a:C2.gone}, and the case is {o:anarch}.',
      'An explanation can be held with a government or without one. What the text goes on to say about the government is what separates them.'
    ] },

  { id: 'exc-dyeworks', kind: 'exception', looksLike: 'marx', is: 'demsoc', ledger: 'demsoc~marx',
    h: 'An explanation that ends in a plan',
    link: 'The last cards were about texts that explain. Here is a text that explains, and then asks for something.',
    case: 'c-ex-dyeworks',
    setup: 'This text gives a sum, says that every owner has to keep a gap like it, and says that this is how the arrangement works. That is what you point to for {o:marx}. Yet this case is {o:demsoc}.',
    prompt: { kind: 'phrase', answer: 'the dye works should be taken into public ownership and run for everyone' },
    because: [
      'The text goes on to say that the dye works should be taken into public ownership. That is a plan for the businesses, and the answer is {a:C1.public}. When a text both explains how owners gain and says what should happen to the businesses, the plan decides, and the explanation gives way.',
      'The reason is that an explanation alone is open: a reader does not know what the writers want done. A plan closes it. The answer goes by the more exact thing the text says.'
    ],
    take: 'This is a decision, and it is stated once so that two people using the same questions reach the same name. In the field, many who hold the explanation would still say the text is mainly an explanation. The answer goes by what the text asks for.' },

  /* ---------- The two questions, each in one place ---------- */
  { id: 'q-business', kind: 'question', step: 'C1',
    h: 'The question about the businesses',
    link: 'Each card that introduced a name showed one of the two questions at its foot, with one answer under it. This card puts the question about the farms, factories, shops and banks in one place, with all six of its answers worded as they always are, and says why it is asked.',
    decides: [
      'This question sorts a text by what it says about who should own the businesses, and by nothing else. A tax, a floor for pay or a public service changes who gets what. It does not change who owns what. That is why {o:socdem} and {o:demsoc} can both ask for health care and still sit under different answers.',
      'The answers also show what the unit has been building. Two names can want the same thing from the government and differ here, and two names can want very different things and give the same answer here. The question about the government is what separates those.'
    ],
    how: [
      'Read the text for any sentence that says what should happen to the businesses: who owns them now, who should own them, whether they compete. Then match it to one answer. You should be able to put your finger on the words: a tax or a floor for pay with the owners left alone; a handover to the government; a handover to the people who work in each business; a handover to the workers together with competing; an explanation of how owners gain; or nothing.',
      'Three things can look like an answer and are not. A complaint about what the owners did, with no plan, gets the answer {a:C1.none}: the text complains and goes no further. A tax or a floor for pay gives the first answer only if the owners keep the businesses. And naming a business is not a handover: the text must say it should pass out of the owners’ hands.',
      'Where a text gives two answers at once, it has already been decided which wins, and each decision was taught on a card of its own: a handover beats a tax, workers who also compete beat workers alone, and a plan beats an explanation. An explanation with no plan keeps its answer, and the question about the government then decides the name. If you are not sure, find the sentence that says the most exact thing about who should own the businesses, and go by it.',
      'Four pairs that this question separates have no card of their own, because the difference is plain once you ask it. {o:socdem} and {o:mktsoc}: the owners keep the businesses, or the people who work in each one own it and compete. {o:classonly} and {o:demsoc}: nothing is said about who should own the businesses, or they are to pass out of the owners’ hands. {o:classonly} and {o:mktsoc}: nothing is said, or each business is to belong to its workers and compete. {o:mktsoc} and {o:marx}: the businesses are to belong to their workers and compete, or the text only explains how owners gain.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been put side by side earlier in this unit, or just above, and each has one question that tells it apart.' },

  { id: 'check-business', kind: 'check', after: 'C1',
    case: 'c-q-bakers',
    ask: { type: 'step', step: 'C1' } },

  { id: 'q-government', kind: 'question', step: 'C2',
    h: 'The question about the government',
    link: 'The question about the businesses came first. The question about the government has four answers. Two of them, seizing power and getting rid of the government, you have met at the foot of a card. The other two have been in the texts all along: texts that put their case to the voters, and texts that said nothing about power.',
    decides: [
      'This question sorts a text by what it says about power, and not about the businesses. Two texts can ask for exactly the same handover and differ here: one leaves its power in the voters’ hands, and one will not. That is the difference between a handover voters can undo and one they cannot, and it is treated as part of what each name means.',
      'The answer {a:C2.vote} is not a promise that the text likes elections. It is given when {when:C2.vote}. The answer {a:C2.none} is given when {when:C2.none}. For {o:demsoc} this is a real answer, and it has been decided: public ownership with no word on how is filed under {o:demsoc}. Some people who study these texts would not draw the line there. The line is drawn there, so that two people using the same questions reach the same name and can each say why.'
    ],
    how: [
      'Look for words about power: who takes it, how, whether it can be taken back, and whether the government stays. "We will win the vote and pass the law" is the answer about elections. "The party will take power and keep it" is the answer about seizing. "We want no government" is the answer about getting rid of it. If none of these is in the text, the answer is {a:C2.none}, and that is a correct reading.',
      'Several texts say something about power without saying anything about the businesses, and a text that only explains how owners gain can say it too: the explanation answers the question about the businesses, and these words answer this one. This question stands on its own: a text can be silent on the businesses and decisive on the government. Answer each question as if the other were not there, and the two answers are combined afterwards.',
      'Asking the government to do something is not an answer here. "The government should tax the owners" asks the government for something. It does not say how power is won or held. Only words about power, or about the government itself, answer this question.',
      'One pair that this question separates has no card of its own beyond the exceptions: {o:classonly} and {o:anarch} are told apart by whether the text says anything at all about getting rid of the government.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been put side by side earlier in this unit, and each has one question that tells it apart.' },

  { id: 'check-government', kind: 'check', after: 'C2',
    case: 'c-q-shops',
    ask: { type: 'step', step: 'C2' } }
]);
