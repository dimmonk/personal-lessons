// Scams, Unit Five, part two: the friendly chat and its look-alike pairs (with a request for papers, and with the chat
// months later when it asks for money). Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  /* ---------- Friendly chat before the ask ---------- */
  { id: 'meet-friendlychat', kind: 'meet', outcome: 'friendlychat',
    link: 'The first two names were about papers and numbers. The third looks smaller, and can be the start of something bigger: a stranger who is friendly, and wants to know about you.',
    case: 'u5-wrongno', mark: 'F1',
    strip: [
      'A text came from a number Sam does not know, saying it had been sent to the wrong person.',
      'Sam answered, and the messages carried on every day for two weeks. He has never met her.',
      'She asks him about his life: his work, whether he lives alone, where he is going on vacation.',
      'She has not asked for papers, numbers, money, a password or a program to install.'
    ],
    explain: [
      'Nothing is asked for that could cost Sam anything today, and that is why it is easy to dismiss. But each small question is easy to answer, and together they tell a stranger where Sam works, whether anyone else lives with him, and when his home will be empty.',
      'It also builds trust. Sam looks forward to the messages, and trusts her more each day. A request that comes later, for money or papers, is made by someone who has become a friend, and it is much harder to refuse. It is the stage before the ask.',
      'There are real wrong numbers. A real one ends when the mistake is clear: one polite exchange, and nothing more. This case is a chat that carries on, with questions about Sam.'
    ],
    feature: { step: 'F1', option: 'life' },
    name: 'The name for this is {o:friendlychat}. It names the chat, not a person: the chat is friendly, and the ask has not come yet.',
    act: 'You do not owe a stranger a reply. Answer "wrong number" and stop, or block the number. If you have already been chatting, stop sharing where you work, where you live and who lives with you. Ask someone you trust to read the messages: it is much easier to see from outside where a chat is going. If it turns to money, papers or a favor, end the chat.' },

  { id: 'check-friendlychat', kind: 'check', after: 'friendlychat',
    case: 'u5-lola',
    ask: { type: 'phrase', step: 'F1', say: 'Which words ask Lola about her life? Tap them.',
           answer: 'What kind of work do you do? Are you saving for a house?' } },

  /* ---------- The chat beside a request for papers ---------- */
  { id: 'look-identitytheft-friendlychat', kind: 'lookalike', ledger: 'identitytheft~friendlychat',
    link: 'Two of the names come from strangers, and a stranger who writes to you can be either.',
    cases: ['u5-sell-chat', 'u5-sell-papers'],
    instruction: 'Both cases are about Imani and a bicycle that she has put up for sale, and in both a stranger writes to her. Compare one thing: what does the stranger want to know about her?',
    prompt: { kind: 'which', option: 'F1.life', answer: 'u5-sell-chat' },
    difference: [
      'In Case A the stranger says that he is not after the bike, and asks about her work and about where she lives. Nothing he asks for is a paper or a number: what he wants to know about is her life. The answer is {a:F1.life}, and the case is {o:friendlychat}.',
      'In Case B the stranger says that he wants to buy the bike, and asks for a photo of her driver’s license and her date of birth, to arrange the courier. A courier has no need of either from a seller. He came to her and asks for more than a courier needs, so the answer is {a:F2.notfit}, and the case is {o:identitytheft}.',
      'Both strangers came to her, so who began it does not separate them. What separates them is what each wants to know about her, which is the question {q:F1}.'
    ] },

  /* ---------- The chat beside the same chat months later ---------- */
  { id: 'look-friendlychat-romance', kind: 'lookalike', ledger: 'friendlychat~romance',
    h: 'The same chat, weeks and months later',
    link: 'The chat can turn into a request for money. This card shows one person’s chat before the turn, and the same chat after it.',
    cases: ['u5-ines-chat', 'u5-ines-money'],
    instruction: 'Both cases are about Joel and Ines, who first wrote to him by mistake. Compare one thing: what does Ines ask Joel to do?',
    prompt: { kind: 'which', option: 'D1.details', answer: 'u5-ines-chat' },
    difference: [
      'In Case A, three weeks in, Ines asks what Joel does for a living, whether he rents or owns his apartment, and what he plans to do at Christmas. She asks him to tell her about himself, and she asks for nothing else. The answer is {a:D1.details}. The next question is {q:F1}, and its answer is {a:F1.life}. The case is {o:friendlychat}.',
      'In Case B, five months in, Ines asks him to send $1,500 for her mother’s hospital bill. That is a request for money, and the answer is {a:D1.money}. The next question is {q:M1}, and it is answered by someone he knows only online. The one after it is {q:M2}, and its answer is {a:M2.crisis}. That leads to the name given to {plain:romance}, which the table below shows.',
      'It is the same woman, the same man and the same chat. The questions do not name the person. They name what is being asked right now, and between the two cases the request changed.'
    ] }
]);
