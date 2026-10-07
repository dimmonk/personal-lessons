// Political Ideologies, Unit Five, part five: the question, and the three exceptions where this branch gives way. The gate's
// answer for "Rights and fair treatment for everyone" gives way to working people against owners, to old ways, and to one people
// put first (the gate's yieldsTo for it). Each exception ends in a name from another part of the key, so each prints that
// part's questions by token.

FC.cards('ideology', 'u5', [

  { id: 'q-does', kind: 'question', step: 'R1',
    h: 'The question to ask of every text about rights',
    link: 'The question and its three answers, in one place.',
    decides: [
      'Three speakers can all put rights first, all talk about the same clinic, and still want three different things. The topic, the speaker and how strongly they feel do not tell you which. Only what they ask the government to do does.'
    ],
    how: [
      { do: 'Find the sentence where the text says what it wants done.', why: 'The ask tells the three apart; the rights do not.' },
      { do: 'Listen for "leave us alone" or "keep out": that is probably {a:R1.leave}.', why: 'The text wants the government to stay out of the way.' },
      { do: 'Listen for "give", "pay for" or "provide": that is probably {a:R1.start}.', why: 'The text wants the government to hand something over.' },
      { do: 'Listen for rules that "treat everyone alike" and have left a group behind: that is probably {a:R1.rules}.', why: 'Blaming a rule is what sets this answer apart.' },
      { do: 'Keep the two ends apart: {o:clib} says the same rules for everyone are enough, and {o:idegal} says they leave a group behind.', why: 'These two disagree the most.' },
      { do: 'Do not go by the topic: a text about a school may want the government to stay out of it, pay for it, or change a rule about it.', why: 'A service or a group can be mentioned without being asked for.' },
      { do: 'Put your finger on the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Some texts show two answers at once. If a text asks for a fair start for everyone and also blames a rule that treats everyone alike for leaving a group behind, the answer is {a:R1.rules}. The test for each pair is below.' },

  { id: 'check-does', kind: 'check', after: 'R1',
    case: 'i5-check-does',
    ask: { type: 'step', step: 'R1' } },

  /* ---------- Where this branch gives way: the first question decides first ---------- */
  { id: 'exc-class', kind: 'exception', ledger: 'modlib~socdem', looksLike: 'modlib', is: 'socdem',
    h: 'A fair start for everyone, and mill hands against owners',
    link: 'Sometimes the first question overrules this one. This text says everyone is owed a fair start, and also sets working people against owners.',
    case: 'i5-x-mill',
    setup: 'The leaflet opens by saying everyone is owed a fair start. On its own, that is {a:R1.start}, so {o:modlib}. But the first answer for this story is {a:D1.class}, and the name is {o:socdem}.',
    prompt: { kind: 'phrase', answer: 'The mill hands and the owners do not want the same things, and we stand with the mill hands' },
    because: [
      'If the leaflet stopped at what everyone is owed, the first answer would be {a:D1.rights}, so {o:modlib}. But it goes on to name the owners of the mill and the mill hands who pay for the cut, and says "the mill hands and the owners do not want the same things, and we stand with the mill hands". That is working people set against owners, on the workers’ side.',
      'When a text shows both, the answer is {a:D1.class}. Two more questions follow. {q:C1} The answer is {a:C1.keep}. {q:C2} The answer is {a:C2.none}. Together they lead to {o:socdem}.'
    ] },

  { id: 'exc-tradition', kind: 'exception', ledger: 'clib~conserv', looksLike: 'clib', is: 'conserv',
    h: 'Each person’s freedom, and old customs to keep it safe',
    link: 'The first question can overrule this one too. This text wants a small government, and then says what really holds a free village together.',
    case: 'i5-x-parish',
    setup: 'The column opens by asking for each person to be free and for the government to stay out of our lives. On its own, that is {a:R1.leave}, so {o:clib}. But the first answer for this story is {a:D1.tradition}, and the name is {o:conserv}.',
    prompt: { kind: 'phrase', answer: 'The church, the Sunday table and the harvest supper are what hold a free village together, and they should guide us' },
    because: [
      'If the column stopped at freedom, the first answer would be {a:D1.rights}, so {o:clib}. But look at the turn: freedom on its own is called "thin". The column then names the church, the Sunday table and the harvest supper, and says they hold a free village together and should guide us. The customs are the guide, and freedom is something they keep safe.',
      'When a text shows both, the answer is {a:D1.tradition}. The next question is {q:T1} The last sentence answers it: {a:T1.keep}. That leads to {o:conserv}.'
    ] },

  { id: 'exc-nation', kind: 'exception', ledger: 'modlib~nationalism', looksLike: 'modlib', is: 'nationalism',
    h: 'A school and a doctor for everyone, and for one people first',
    link: 'The first question can overrule this one in a third way: a text can say what every person is owed, and then put one people first.',
    case: 'i5-x-onepeople',
    setup: 'The speech opens by saying every person is owed a school and a doctor, paid for by the government. On its own, that is {a:R1.start}, so {o:modlib}. But the first answer for this story is {a:D1.nation}, and the name is {o:nationalism}.',
    prompt: { kind: 'phrase', answer: "Our schools and our clinics are for our own people first, before any stranger's claim" },
    because: [
      'If the speech stopped there, the first answer would be {a:D1.rights}, so {o:modlib}. But it goes on to say "we are one people with one past and one future", and that "our schools and our clinics are for our own people first, before any stranger’s claim". That is one people put first.',
      'When a text shows both, the answer is {a:D1.nation}. The next question is {q:N1} The speech speaks for the whole people as one: {a:N1.whole}. It also asks the voters to judge it, which leaves the vote in place: {a:N2.keep}. That leads to {o:nationalism}.'
    ] }
]);
