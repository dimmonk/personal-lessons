// Political Ideologies, Unit Five, part four: the key's question, and the three exceptions where this branch gives way. The gate's
// answer for "Rights and fair treatment for everyone" gives way to working people against owners, to old ways, and to one people
// put first (the gate's yieldsTo for it). Each exception ends in a name from another branch of the key, so each prints that
// branch's questions by token.

FC.cards('ideology', 'u5', [

  { id: 'q-does', kind: 'question', step: 'R1',
    h: 'The question you have been answering all along',
    link: 'Since the street-music petition you have seen the key’s question at the foot of each new name, with one answer under it. This card puts the question and its three answers in one place, as the key shows them, and says why the key asks it.',
    decides: [
      'So three texts can all put each person’s rights first, and all be about the same clinic, and get three different names. For one of them the key’s answer is {a:R1.leave}; for another it is {a:R1.start}; for the third it is {a:R1.rules}. Nothing about the topic, the speaker or the strength of feeling tells them apart. Only what the text wants done for people tells them apart.'
    ],
    how: [
      'Find the sentence in which the text says what it wants done, and read it for what the government is to do. Then ask which of the three answers describes it. You should be able to put your finger on the words: the government kept to a few jobs, a fair start to be given and paid for, or rules to be changed that leave a group behind.',
      'A quick first look is at the words around the rights. If the text says "leave us alone" or "keep out", it is probably {a:R1.leave}. If it says "give", "pay for" or "provide", it is probably {a:R1.start}. If it says that a rule "treats everyone alike" and has left a group behind, it is probably {a:R1.rules}. This narrows the choice. It does not make it: the words in the case do.',
      'Services can be in a text without the text asking the government to provide them, and groups can be in a text without a rule being blamed. A text that mentions a school and says the government must keep out of it gets {a:R1.leave}. A text that names a group that is behind, and asks the government to give help to everyone, gets {a:R1.start}, unless it says that a rule is the cause. Go by what the text asks for.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. When a text asks for a fair start for everyone and also says that a rule which treats everyone alike has left a group behind, the key’s answer is {a:R1.rules}. Each pair below has been set side by side in this unit, and each has one question that separates it.' },

  { id: 'check-does', kind: 'check', after: 'R1',
    case: 'i5-check-does',
    ask: { type: 'step', step: 'R1' } },

  /* ---------- Where this branch gives way: the key's first question decides first ---------- */
  { id: 'exc-class', kind: 'exception', ledger: 'modlib~socdem', looksLike: 'modlib', is: 'socdem',
    h: 'A fair start for everyone, and mill hands against owners',
    link: 'Everything so far has been about texts that put first what every person is owed. The key’s first question can overrule that: a text can say what everyone is owed and also set working people against owners. Here is one.',
    case: 'i5-x-mill',
    setup: 'The leaflet begins by saying that everyone is owed a fair start: a school, a doctor, and help when the work runs out. That is what you point to for {a:R1.start}, and for {o:modlib}. Yet the key’s first answer for this case is {a:D1.class}, and the name is {o:socdem}.',
    prompt: { kind: 'phrase', answer: 'The mill hands and the owners do not want the same things, and we stand with the mill hands' },
    because: [
      'The leaflet does say what everyone is owed. If that were all it said, the key’s first answer would be {a:D1.rights}, and the case would be {o:modlib}. But it goes on to name the owners of the mill and the mill hands who pay for the cut, and says "the mill hands and the owners do not want the same things, and we stand with the mill hands". That is working people set against owners, with the text on the workers’ side.',
      'So the case shows both answers at once. When it does, the key chooses {a:D1.class}. The promise to everyone is in the leaflet, but what the leaflet does with it is argue for the mill hands against the owners. The key’s next two questions then follow. {q:C1} The answer is {a:C1.keep}. {q:C2} The answer is {a:C2.none}. They lead to {o:socdem}.',
      'It chooses this way round for a reason. If the leaflet were given {a:D1.rights}, the owners and the mill hands would drop out of what the key looks at, and they are what the leaflet is about.'
    ],
    take: 'It is worth knowing that this is the key’s decision. In life, a text can speak for every person and for one side at once, and the field draws no sharp line between the two. The key gives each text one answer, so that two people using it reach the same one and can each say why. This is a hard look-alike, because both names ask the government to pay for schools, health care and help for people out of work. What tells them apart is whether the text names two sides and takes one.' },

  { id: 'exc-tradition', kind: 'exception', ledger: 'clib~conserv', looksLike: 'clib', is: 'conserv',
    h: 'Each person’s freedom, and old ways to keep it safe',
    link: 'The key’s first question can also overrule a text that puts each person’s freedom first. Here is one that wants a small government, and then says what holds a free village together.',
    case: 'i5-x-parish',
    setup: 'The rector’s column begins by asking for each person to be free to worship, to speak and to keep what they earn, and for the government to stay out of our lives. That is what you point to for {a:R1.leave}, and for {o:clib}. Yet the key’s first answer for this case is {a:D1.tradition}, and the name is {o:conserv}.',
    prompt: { kind: 'phrase', answer: 'The church, the Sunday table and the harvest supper are what hold a free village together, and they should guide us' },
    because: [
      'The column does ask for freedom and for a government that stays out. If that were all it said, the key’s first answer would be {a:D1.rights}, and the case would be {o:clib}. But look at its turn: "freedom without the old ways is thin". It then names the church, the Sunday table and the harvest supper, and says that they are what hold a free village together and what should guide us.',
      'So the case shows both answers at once. When it does, the key chooses {a:D1.tradition}. The freedom is in the column, but the column holds up the old ways as what should guide, and freedom as something they keep safe. The key’s next question, {q:T1} has its answer in the last sentence: {a:T1.keep}. That leads to {o:conserv}.',
      'It chooses this way round for a reason. The column itself puts the old ways first: it calls freedom without them thin.'
    ],
    take: 'It is worth knowing that this is the key’s decision. In life, people who want a small government and people who want the old ways to guide are often the same people, and say both in one breath. The key gives each text one answer, so that two people using it reach the same one and can each say why.' },

  { id: 'exc-nation', kind: 'exception', ledger: 'modlib~nationalism', looksLike: 'modlib', is: 'nationalism',
    h: 'A school and a doctor for everyone, and for one people first',
    link: 'The key’s first question can overrule a text that says what every person is owed in a third way: when the text then puts one people first. Here is one that promises a school and a doctor to every person, and then says whom they are for.',
    case: 'i5-x-onepeople',
    setup: 'The speech begins by saying that every person is owed a school and a doctor, and that the government should pay for both. That is what you point to for {a:R1.start}, and for {o:modlib}. Yet the key’s first answer for this case is {a:D1.nation}, and the name is {o:nationalism}.',
    prompt: { kind: 'phrase', answer: "Our schools and our clinics are for our own people first, before any stranger's claim" },
    because: [
      'The speech does say that every person is owed a school and a doctor. If that were all it said, the key’s first answer would be {a:D1.rights}, and the case would be {o:modlib}. But it goes on to say that "we are one people with one past and one future", and that "our schools and our clinics are for our own people first, before any stranger’s claim". That is one people, marked out by its country, put first.',
      'So the case shows both answers at once. When it does, the key chooses {a:D1.nation}. The school and the doctor are in the speech, but the speech ranks them below the claim of its own people. The key then asks {q:N1} The speech speaks for the whole people as one: {a:N1.whole}. And it asks the voters to judge it, which leaves the vote in place: {a:N2.keep}. That leads to {o:nationalism}.',
      'It chooses this way round for a reason. The speech itself says which claim comes first, and the key asks what the text puts first.'
    ],
    take: 'It is worth knowing that this is the key’s decision. In life, a person can mean both a school and a doctor for everyone and loyalty to their own people, and the field draws no sharp line between them. The key gives each text one answer, so that two people using it reach the same one and can each say why.' }
]);
