// Psychology, Unit Three, parts one and two (close): each of the four set beside the ordinary exchange, and the question.

FC.cards('psychology', 'u3', [

  /* ---------- Each of the four, beside the ordinary exchange ---------- */
  { id: 'look-gaslight-ord', kind: 'lookalike', ledger: 'gaslight~ordexchange',
    link: 'All five names have now been met. The ordinary exchange is the one the other four are most often mistaken for, so each of the four gets one card beside it. The first is the one most often seen in an ordinary disagreement about what happened.',
    cases: ['trip-months', 'trip-once'],
    instruction: 'Both cases are about Anil, his sister Bea and who was to book the flights for a family trip. Compare one thing: is this one disagreement that gets settled, or the same denial coming back for months until Anil doubts his own memory?',
    prompt: { kind: 'which', option: 'T1.denymemory', answer: 'trip-months' },
    difference: [
      'In Case A, the chat shows Bea said she would book the flights, and for four months, whenever Anil asks, she says she never said it. Anil now checks every plan with his mother before he believes his own memory. The answer is {a:T1.denymemory}, and the case is {o:gaslight}.',
      'In Case B, Anil and Bea remember it differently, once. The chat settles it, Bea says "My mistake", and nobody is left doubting their own memory. The answer is {a:T1.plain}, and the case is {o:ordexchange}.'
    ] },

  { id: 'look-darvo-ord', kind: 'lookalike', ledger: 'darvo~ordexchange',
    link: 'Next, {o:darvo} beside the ordinary exchange. In both a person is told about something and answers with a denial, so a denial on its own settles nothing.',
    cases: ['fence-guilty', 'fence-innocent'],
    instruction: 'Both cases are about Mira, her neighbor Joel and a smashed fence panel. Compare one thing: does the case show that Joel did it?',
    prompt: { kind: 'which', option: 'T1.reverse', answer: 'fence-guilty' },
    difference: [
      'In Case A, the camera shows Joel did it, and when Mira raises it he does all three: he denies it, attacks her ("you are the one who parks across everyone’s drive") and plays the one wronged. The answer is {a:T1.reverse}, and the case is {o:darvo}.',
      'In Case B, the camera shows Joel’s van parked at his own house all day, so his denial is true. He does not attack Mira or claim to be the one wronged: he tells her to look, and she says sorry. The answer is {a:T1.plain}, and the case is {o:ordexchange}. Joel denies it in both: what differs is whether the denial is of something the case shows he did.'
    ] },

  { id: 'look-lovebomb-ord', kind: 'lookalike', ledger: 'lovebomb~ordexchange',
    link: 'Next, {o:lovebomb} beside the ordinary exchange. Both have a person who is warm and generous early on, so the early warmth cannot be what tells them apart.',
    cases: ['friend-flood', 'friend-keen'],
    instruction: 'Both cases are about Dan and Eli, and the first week is word for word the same. Compare one thing: what Eli does when Dan says he cannot come to Sunday lunch.',
    prompt: { kind: 'which', option: 'T1.floodpull', answer: 'friend-flood' },
    difference: [
      'In Case A, Eli goes silent for a month once Dan says no, and then says "I thought you were different". That is the pulling back, with criticism. With a first week far bigger than a week would explain, both halves are there. The answer is {a:T1.floodpull}, and the case is {o:lovebomb}.',
      'In Case B, Eli says "No problem, another time" and is just as friendly the next day. The first week is the same, but nothing is pulled back. The answer is {a:T1.plain}, and the case is {o:ordexchange}. So the flood on its own, however large, is not the name: both halves are needed.'
    ] },

  { id: 'look-projection-ord', kind: 'lookalike', ledger: 'projection~ordexchange',
    link: 'Last, accusing someone of what you do yourself, beside the ordinary exchange. Both have one person accusing another of something, so the accusation on its own settles nothing.',
    cases: ['rota-accuse', 'rota-fair'],
    instruction: 'Both cases are about Colm, Shay and swapped shifts. Compare one thing: does the shift book show Shay doing it?',
    prompt: { kind: 'which', option: 'T1.ownfault', answer: 'rota-accuse' },
    difference: [
      'In Case A, the book shows Colm doing it four times and Shay not at all. The answer is {a:T1.ownfault}, and the case is {o:projection}.',
      'In Case B, the book shows that Shay did swap Thursday. Colm does it too, and Shay says so, but the accusation is still true. The answer is {a:T1.plain}, and the case is {o:ordexchange}.'
    ] },

  /* ---------- The question ---------- */
  { id: 'q-does', kind: 'question', step: 'T1',
    h: 'The question you have been answering all along',
    link: 'Since the car repair you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its five answers in one place, and says why it is asked.',
    decides: [
      'A case can show what was said or done, so that is what the question asks about. The names are for what is done in a case, never for a kind of person: "what he said to Tess in February, March and May was {o:gaslight}" can be checked against the case, and "he is a gaslighter" can only be argued about.',
      'So two cases can have the same two people, the same upset, even the same words, and get different names. A denial can be {o:gaslight} in one case and the plain truth in another. Only what the case shows tells them apart.'
    ],
    how: [
      'Find the words in which one person speaks or acts toward the other, then ask what the case must show besides the words. For {o:gaslight}: that the thing really happened and that the other person began to doubt their memory. For {o:darvo}: that the person did what was raised. For {o:lovebomb}: both halves. For {o:projection}: that the accuser does it and that nothing shows the other person doing it. If any of these is missing, the answer is probably {o:ordexchange}.',
      'When you are unsure, start from {o:ordexchange}, because most cases are one. Give one of the other four answers only when you can point to everything it needs.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-does', kind: 'check', after: 'T1',
    case: 'tq-essay',
    ask: { type: 'step', step: 'T1' } }
]);
