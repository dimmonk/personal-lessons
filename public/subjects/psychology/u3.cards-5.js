// Psychology, Unit Three, parts three and four: each of the four set beside the ordinary exchange, the two exceptions that belong
// with them, the wrong idea about kinds of person, and the key's question.

FC.cards('psychology', 'u3', [

  /* ---------- Each of the four, beside the ordinary exchange ---------- */
  { id: 'look-gaslight-ord', kind: 'lookalike', ledger: 'gaslight~ordexchange',
    link: 'All five names have now been met. The ordinary exchange is the one the other four are most often mistaken for, so each of the four gets one card beside it. The first is the one most often seen in an ordinary disagreement about what happened.',
    cases: ['trip-months', 'trip-once'],
    instruction: 'Both cases are about Anil, his sister Bea and who was to book the flights for a family trip. Compare one thing: is this one disagreement that gets settled, or the same denial coming back for months until Anil doubts his own memory?',
    prompt: { kind: 'which', option: 'T1.denymemory', answer: 'trip-months' },
    difference: [
      'In Case A, Bea wrote in March that she would book the flights, and she never did. Since then she has said, whenever Anil asks, that she never said it, that he muddles who said what, and that he invents things. It has gone on for four months, and Anil now checks every plan with his mother before he believes his own memory of it. The answer is {a:T1.denymemory}, and the case is {o:gaslight}.',
      'In Case B, Anil and Bea remember it differently, once. Bea suggests looking at the chat, the chat shows Anil said he would book them, and Bea says "My mistake". The disagreement is settled by looking, and nobody is left doubting their own memory. The answer is {a:T1.plain}, and the case is {o:ordexchange}.',
      'Both cases have two people who remember who was to book the flights differently. What differs is whether it is one disagreement that gets checked, or one denial that keeps coming back.'
    ] },

  { id: 'look-darvo-ord', kind: 'lookalike', ledger: 'darvo~ordexchange',
    link: 'Next, {o:darvo} beside the ordinary exchange. In both a person is told about something and answers with a denial, so a denial on its own settles nothing.',
    cases: ['fence-guilty', 'fence-innocent'],
    instruction: 'Both cases are about Mira, her neighbour Joel and a smashed fence panel. Compare one thing: does the case show that Joel did it?',
    prompt: { kind: 'which', option: 'T1.reverse', answer: 'fence-guilty' },
    difference: [
      'In Case A, the doorbell camera shows Joel backing his van into the fence. When Mira raises it, he denies it ("I never touched your fence"), attacks her ("you are the one who parks across everyone’s drive") and plays the one wronged ("I am sick of being the one who gets blamed"). The answer is {a:T1.reverse}, and the case is {o:darvo}.',
      'In Case B, the camera shows Joel’s van parked outside his own house all that day. Joel says "That is not true, and I do not like being blamed", and tells Mira to look. She does, and she says sorry. His denial is true. He does not attack her, and he does not claim to be the one wronged. The answer is {a:T1.plain}, and the case is {o:ordexchange}.',
      'Joel denies it in both. What differs is whether the denial is of something the case shows he did.'
    ] },

  { id: 'exc-wrongly', kind: 'exception', looksLike: 'darvo', is: 'ordexchange', ledger: 'darvo~ordexchange',
    h: 'A reply that sounds like {o:darvo}, and is not',
    link: 'The last card put two tidy cases side by side. This one is messier: a person who denies it, attacks, and says they are the one picked on, and who is not turning anything around.',
    case: 'cupboard',
    setup: 'Tara’s answer has all three parts: she denies it ("I locked it"), she attacks Mr Boyd ("You always blame me first"), and she says she is the one picked on. Yet this case is {o:ordexchange}.',
    prompt: { kind: 'phrase', answer: 'The cupboard log shows Tara locked it at noon, and that it was opened again at three by Neil, who has the other key.' },
    because: [
      'The first thing the name {o:darvo} needs is that the case shows the person did what was raised. Here the case shows the opposite. Tara locked the cupboard, and the cupboard log shows who opened it. Her denial is true.',
      'A person who is wrongly accused can be hurt, say sharp things, and say they are picked on, and all of that is an ordinary reply to a mistake. What makes the name is that the denial is of something the case shows they did. Take that away and the same words are only a defence.'
    ] },

  { id: 'look-lovebomb-ord', kind: 'lookalike', ledger: 'lovebomb~ordexchange',
    link: 'Next, {o:lovebomb} beside the ordinary exchange. Both have a person who is warm and generous early on, so the early warmth cannot be what tells them apart.',
    cases: ['friend-flood', 'friend-keen'],
    instruction: 'Both cases are about Dan and Eli, and the first week is word for word the same. Compare one thing: what Eli does when Dan says he cannot come to Sunday lunch.',
    prompt: { kind: 'which', option: 'T1.floodpull', answer: 'friend-flood' },
    difference: [
      'In Case A, Eli does not speak to Dan for a month, and then says "I thought you were different". That is the pulling back, with criticism, once Dan says no. Together with a first week of dinners every night, a way into his home and "the best friend I have ever had", which is far more than a week would explain, both halves are there. The answer is {a:T1.floodpull}, and the case is {o:lovebomb}.',
      'In Case B, Eli says "No problem, another time" and is just as friendly the next day. The first week is the same, but nothing is pulled back. The answer is {a:T1.plain}, and the case is {o:ordexchange}.',
      'So the flood on its own, however large, is not the name. Both halves are needed, and what separates the two cases is only the second half.'
    ] },

  { id: 'look-projection-ord', kind: 'lookalike', ledger: 'projection~ordexchange',
    link: 'Last, accusing someone of what you do yourself, beside the ordinary exchange. Both have one person accusing another of something, so the accusation on its own settles nothing.',
    cases: ['rota-accuse', 'rota-fair'],
    instruction: 'Both cases are about Colm, Shay and swapped shifts. Compare one thing: does the shift book show Shay doing it?',
    prompt: { kind: 'which', option: 'T1.ownfault', answer: 'rota-accuse' },
    difference: [
      'In Case A, Colm tells the manager, unprompted, that Shay is always swapping shifts without telling anyone. The shift book shows that Colm has done it four times this month, and shows no swap by Shay. The answer is {a:T1.ownfault}, and the case is {o:projection}.',
      'In Case B, Colm tells Shay that she swapped Thursday without telling anyone, and the book shows that she did. It also shows that Colm has done the same twice, and Shay says so. They agree to put swaps on the board. The accusation is true, so the answer is {a:T1.plain}, and the case is {o:ordexchange}.',
      'Colm does the same thing in both cases. What differs is whether the case shows the other person doing it.'
    ] },

  { id: 'exc-both-late', kind: 'exception', looksLike: 'projection', is: 'ordexchange', ledger: 'projection~ordexchange',
    h: 'A fair accusation from someone who does it too',
    link: 'The last card put two tidy cases side by side. This one is harder: someone accuses another of what they do themselves, and the case is still {o:ordexchange}.',
    case: 'dishes',
    setup: 'Zoe tells Adam he never washes up, and the case shows Zoe leaving plates in the sink for days. That is an accusation made by someone who does the same. Yet this case is {o:ordexchange}.',
    prompt: { kind: 'phrase', answer: 'The rota on the fridge shows that Adam has not washed up for three weeks.' },
    because: [
      'The name {o:projection} needs two halves: the accuser doing it, and nothing in the case showing the other person doing it. Here the second half is missing. The rota shows that Adam has not washed up for three weeks, so what Zoe says is true.',
      'A true accusation does not stop being true because the person who makes it is not perfect. Adam agrees, says that Zoe does it too, and they fix the rota. That is two people sorting out a household problem.'
    ] },

  /* ---------- A wrong idea about people, then the key's question ---------- */
  { id: 'refute-person', kind: 'refute', about: 'T1',
    h: 'A wrong idea: "He is a gaslighter. She is a love-bomber."',
    link: 'The five names are for what is done in a case. One more idea needs putting right, because it is a natural one: using the names for people.',
    idea: '"He is a gaslighter. She is a love-bomber. That is just who they are."',
    verdict: 'This is wrong.',
    right: [
      'A case shows what one person said or did to another. It does not show what a person is like. A case of one man telling his partner the same denial every month does not show how he is with his friends, or at work, or next year, and the same person can do nothing of the kind the next day.',
      'It also gives you a name that cannot be checked. "What he said to Tess in February, March and May was {o:gaslight}" can be checked against the case. "He is a gaslighter" can only be argued about, and it ends the conversation.',
      'So the question is about the words and the events, and not about the person: {q:T1} Say what was done, and point to the words that show it.'
    ],
    testedBy: ['claim-person'] },

  { id: 'q-does', kind: 'question', step: 'T1',
    h: 'The question you have been answering all along',
    link: 'Since the car repair you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its five answers in one place, and says why it is asked.',
    decides: [
      'Look at what the question leaves out. It does not ask how upset anyone is, whether it was meant, or whether the person is a good one. It asks what the words and events in the case do to the other person, because that is what a case can show.',
      'So two cases can have the same two people, the same upset, even the same words, and get different names. A denial can be {o:gaslight} in one case and the plain truth in another. The same angry reply can be {o:darvo}, or an ordinary defence. Only what the case shows tells them apart.'
    ],
    how: [
      'Find the words in which one person speaks or acts towards the other, and ask which of the five answers they show. You should be able to put your finger on the words: the same denial coming back over months, a denial and an attack and playing the one wronged in one reply, a flood of attention and then pulling back, an accusation that fits the accuser, or none of those.',
      'Then ask what the case must show besides the words. For the denial that comes back, that the thing really happened and that the other person began to doubt their memory. For {o:darvo}, that the person did what was raised. For {o:lovebomb}, both halves. For the accusation, that the accuser does it and that nothing shows the other person doing it. If any of these is missing, the answer is probably the ordinary one.',
      'When you are unsure, start from the ordinary exchange, because most cases are one. Give one of the other four answers only when you can point to everything it needs.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-does', kind: 'check', after: 'T1',
    case: 'tq-essay',
    ask: { type: 'step', step: 'T1' } }
]);
