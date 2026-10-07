// Psychology, Unit Three, parts one and two (close): each of the four set beside the normal back-and-forth, and the question.

FC.cards('psychology', 'u3', [

  /* ---------- Each of the four, beside the normal back-and-forth ---------- */
  { id: 'look-gaslight-ord', kind: 'lookalike', ledger: 'gaslight~ordexchange',
    link: 'All five names have now been met. {o:ordexchange} is the one the other four are most often mistaken for, so each of the four gets one card beside it. First: an argument about what happened.',
    cases: ['trip-months', 'trip-once'],
    instruction: 'Both stories are about Anil, his sister Bea and who was to book the flights for a family trip. Compare one thing: is it one disagreement that gets settled, or the same denial coming back for months until Anil doubts his own memory?',
    prompt: { kind: 'which', option: 'T1.denymemory', answer: 'trip-months' },
    difference: [
      'In Story A, the chat shows Bea said she would book the flights. For four months, whenever Anil asks, she says she never said it, and Anil now checks every plan with his mother before he trusts his own memory. That is {o:gaslight}.',
      'In Story B, Anil and Bea remember it differently, once. The chat settles it, Bea says “My mistake”, and nobody doubts their own memory. That is {o:ordexchange}.'
    ] },

  { id: 'look-darvo-ord', kind: 'lookalike', ledger: 'darvo~ordexchange',
    link: 'Next, {o:darvo} beside {o:ordexchange}. In both, a person is told about something and answers with a denial, so a denial on its own settles nothing.',
    cases: ['fence-guilty', 'fence-innocent'],
    instruction: 'Both stories are about Mira, her neighbor Joel and a smashed fence panel. Compare one thing: does the story show that Joel did it?',
    prompt: { kind: 'which', option: 'T1.reverse', answer: 'fence-guilty' },
    difference: [
      'In Story A, the camera shows Joel did it, and when Mira raises it he does all three: he denies it, attacks her (“you are the one who parks across everyone’s drive”) and plays the one wronged. That is {o:darvo}.',
      'In Story B, the camera shows Joel’s van at his own house all day, so his denial is true. He does not attack Mira or play the victim: he tells her to look, and she says sorry. That is {o:ordexchange}.',
      'Joel denies it in both. What differs is whether the denial covers something he really did.'
    ] },

  { id: 'look-lovebomb-ord', kind: 'lookalike', ledger: 'lovebomb~ordexchange',
    link: 'Next, {o:lovebomb} beside {o:ordexchange}. In both, a person is warm and generous early on, so the early warmth cannot be what tells them apart.',
    cases: ['friend-flood', 'friend-keen'],
    instruction: 'Both stories are about Dan and Eli, and the first week is word for word the same. Compare one thing: what Eli does when Dan says he cannot come to Sunday lunch.',
    prompt: { kind: 'which', option: 'T1.floodpull', answer: 'friend-flood' },
    difference: [
      'In Story A, Eli goes silent for a month once Dan says no, then says “I thought you were different”. The first week was far more than a week would explain, and now it is pulled back with criticism. That is {o:lovebomb}.',
      'In Story B, Eli says “No problem, another time” and is just as friendly the next day. The first week is the same, but nothing is pulled back. That is {o:ordexchange}.',
      'A flood of attention alone, however big, is not enough. You need both halves.'
    ] },

  { id: 'look-projection-ord', kind: 'lookalike', ledger: 'projection~ordexchange',
    link: 'Last, {o:projection} beside {o:ordexchange}. In both, one person accuses another, so the accusation on its own settles nothing.',
    cases: ['rota-accuse', 'rota-fair'],
    instruction: 'Both stories are about Colm, Shay and swapped shifts. Compare one thing: does the shift book show Shay doing it?',
    prompt: { kind: 'which', option: 'T1.ownfault', answer: 'rota-accuse' },
    difference: [
      'In Story A, the book shows Colm swapping four shifts without telling anyone, and Shay not at all. That is {o:projection}.',
      'In Story B, the book shows Shay did swap Thursday. Colm does it too, and Shay says so, but the accusation is still true. That is {o:ordexchange}.'
    ] },

  /* ---------- The question ---------- */
  { id: 'q-does', kind: 'question', step: 'T1',
    h: 'The question to ask each time',
    link: 'Here is the question and its five answers in one place.',
    decides: [
      'A story can show what was said or done, so that is what the question asks about. The names describe what happened in a story, never what kind of person someone is. “What he said to Tess in February, March and May was {o:gaslight}” can be checked against the story. “He is a gaslighter” can only be argued about.',
      'So two stories can have the same two people, the same upset, even the same words, and get different names. A denial can be {o:gaslight} in one story and the plain truth in another.'
    ],
    how: [
      { do: 'Find what one person says or does to the other.', why: 'The question is about what was done, not how upset anyone is.' },
      { do: 'Check for {o:gaslight}: something that really happened, and a denial that keeps coming back for weeks or months.', why: 'One denial can be an honest mix-up.' },
      { do: 'Check for {o:darvo}: the person did it, and in reply they deny it, attack and play the one wronged.', why: 'Someone wrongly accused may deny and get angry too.' },
      { do: 'Check for {o:lovebomb}: far too much attention early on, pulled back later.', why: 'One half alone is a keen friend or a cooling relationship.' },
      { do: 'Check for {o:projection}: the accuser does it, and nothing shows the other person doing it.', why: 'A fair accusation is {o:ordexchange}, even if the accuser does it too.' },
      { do: 'None of the four? It is {o:ordexchange}.', why: 'Most stories are.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Some stories seem to fit two answers. Each pair below has one question that tells them apart.' },

  { id: 'check-does', kind: 'check', after: 'T1',
    case: 'tq-essay',
    ask: { type: 'step', step: 'T1' } }
]);
