// Political Ideologies, Unit Five, part five: the question, and the three exceptions where this branch gives way. The gate's
// answer for "Rights and fair treatment for everyone" gives way to working people against owners, to old ways, and to one people
// put first (the gate's yieldsTo for it). Each exception ends in a name from another part of the key, so each prints that
// part's questions by token.

FC.cards('ideology', 'u5', [

  { id: 'q-does', kind: 'question', step: 'R1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its three answers in one place, and says why it is asked.',
    decides: [
      'Three texts can all put each person’s rights first, and all be about the same clinic, and get three different names. Nothing about the topic, the speaker or the strength of feeling tells them apart. Only what the text asks the government to do does.'
    ],
    how: [
      'Find the sentence in which the text says what it wants done, and ask which of the three answers describes it. A text that says the same rules for everyone are enough is {o:clib}; one that says the same rules have left a group behind is {o:idegal}. You should be able to put your finger on the words.',
      'A quick first look is at the words around the rights. "Leave us alone" or "keep out" is probably {a:R1.leave}. "Give", "pay for" or "provide" is probably {a:R1.start}. A rule that "treats everyone alike" and has left a group behind is probably {a:R1.rules}. This narrows the choice. The words in the case decide it.',
      'Services can be in a text without the text asking the government to provide them, and groups can be in a text without a rule being blamed. A text that mentions a school and says the government must keep out of it is {a:R1.leave}.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. When a text asks for a fair start for everyone and also says that a rule which treats everyone alike has left a group behind, the answer is {a:R1.rules}. Each pair below has one question that separates it.' },

  { id: 'check-does', kind: 'check', after: 'R1',
    case: 'i5-check-does',
    ask: { type: 'step', step: 'R1' } },

  /* ---------- Where this branch gives way: the first question decides first ---------- */
  { id: 'exc-class', kind: 'exception', ledger: 'modlib~socdem', looksLike: 'modlib', is: 'socdem',
    h: 'A fair start for everyone, and mill hands against owners',
    link: 'The first question can overrule all of this: a text can say what everyone is owed and also set working people against owners. Here is one.',
    case: 'i5-x-mill',
    setup: 'The leaflet begins by saying that everyone is owed a fair start. That is what you point to for {a:R1.start}, and for {o:modlib}. Yet the first answer for this case is {a:D1.class}, and the name is {o:socdem}.',
    prompt: { kind: 'phrase', answer: 'The mill hands and the owners do not want the same things, and we stand with the mill hands' },
    because: [
      'If the leaflet stopped at what everyone is owed, the first answer would be {a:D1.rights}, and the case would be {o:modlib}. But it goes on to name the owners of the mill and the mill hands who pay for the cut, and says "the mill hands and the owners do not want the same things, and we stand with the mill hands". That is working people set against owners, with the text on the workers’ side.',
      'When a text shows both, the answer is {a:D1.class}. The next two questions then follow. {q:C1} The answer is {a:C1.keep}. {q:C2} The answer is {a:C2.none}. They lead to {o:socdem}.'
    ] },

  { id: 'exc-tradition', kind: 'exception', ledger: 'clib~conserv', looksLike: 'clib', is: 'conserv',
    h: 'Each person’s freedom, and old ways to keep it safe',
    link: 'The first question can also overrule a text that puts each person’s freedom first. Here is one that wants a small government, and then says what holds a free village together.',
    case: 'i5-x-parish',
    setup: 'The rector’s column begins by asking for each person to be free and for the government to stay out of our lives. That is what you point to for {a:R1.leave}, and for {o:clib}. Yet the first answer for this case is {a:D1.tradition}, and the name is {o:conserv}.',
    prompt: { kind: 'phrase', answer: 'The church, the Sunday table and the harvest supper are what hold a free village together, and they should guide us' },
    because: [
      'If the column stopped at freedom, the first answer would be {a:D1.rights}, and the case would be {o:clib}. But look at its turn: "freedom without the old ways is thin". It then names the church, the Sunday table and the harvest supper, and says that they are what hold a free village together and what should guide us. It holds up the old ways as the guide, and freedom as something they keep safe.',
      'When a text shows both, the answer is {a:D1.tradition}. The next question, {q:T1} has its answer in the last sentence: {a:T1.keep}. That leads to {o:conserv}.'
    ] },

  { id: 'exc-nation', kind: 'exception', ledger: 'modlib~nationalism', looksLike: 'modlib', is: 'nationalism',
    h: 'A school and a doctor for everyone, and for one people first',
    link: 'The first question can overrule a text that says what every person is owed in a third way: when the text then puts one people first.',
    case: 'i5-x-onepeople',
    setup: 'The speech begins by saying that every person is owed a school and a doctor, paid for by the government. That is what you point to for {a:R1.start}, and for {o:modlib}. Yet the first answer for this case is {a:D1.nation}, and the name is {o:nationalism}.',
    prompt: { kind: 'phrase', answer: "Our schools and our clinics are for our own people first, before any stranger's claim" },
    because: [
      'If the speech stopped there, the first answer would be {a:D1.rights}, and the case would be {o:modlib}. But it goes on to say that "we are one people with one past and one future", and that "our schools and our clinics are for our own people first, before any stranger’s claim". That is one people put first.',
      'When a text shows both, the answer is {a:D1.nation}. The next question is {q:N1} The speech speaks for the whole people as one: {a:N1.whole}. And it asks the voters to judge it, which leaves the vote in place: {a:N2.keep}. That leads to {o:nationalism}.'
    ] }
]);
