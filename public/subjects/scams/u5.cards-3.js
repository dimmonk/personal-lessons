// Scams, Unit Five, part two: the friendly chat and its look-alike pairs (with a request for papers, and with the chat
// months later when it asks for money). Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  /* ---------- Friendly chat from a stranger ---------- */
  { id: 'meet-friendlychat', kind: 'meet', outcome: 'friendlychat',
    link: 'Third, the one that looks harmless: a stranger who is friendly, and wants to know about you.',
    case: 'u5-wrongno', mark: 'F1',
    explain: [
      'Mei asks for nothing that could cost Sam anything today, so it is easy to wave off. But every small answer tells a stranger something: where he works, that he lives alone, when his home will be empty. And after two weeks he trusts her, so a later request for money or papers comes from a friend, which is much harder to refuse.',
      'A real wrong number ends after one polite reply. This one carries on, with questions about Sam.'
    ],
    spot: [
      { do: 'Check how it began: a text from a number Sam does not know.', why: 'A stranger started it, and you started nothing.' },
      { do: 'Check whether it carries on: Mei writes every day for two weeks.', why: 'A real wrong number is over after one reply.' },
      { do: 'Look at what she asks about: his work, whether he lives alone, his vacation.', why: 'That is your life, and nothing you started needs the answers.' },
      { do: 'Check what she has not asked for yet: papers, numbers, money.', why: 'That is why it is not {o:identitytheft}, yet.' }
    ],
    feature: { step: 'F1', option: 'life' },
    name: 'This is {o:friendlychat}. The chat is friendly, and the request has not come yet.',
    act: [
      { do: 'Do not keep replying to a stranger. Answer “wrong number” and stop, or block the number.', why: 'You do not owe a stranger a reply.' },
      { do: 'If you have already been chatting, stop sharing where you work, where you live and who lives with you.', why: 'Each detail helps them plan what to ask for.' },
      { do: 'Show the messages to someone you trust.', why: 'It is much easier to see from outside where a chat is going.' },
      { do: 'If it turns to money, papers or a favor, end the chat.', why: 'That is the request the chat was building toward.' }
    ] },

  { id: 'check-friendlychat', kind: 'check', after: 'friendlychat',
    case: 'u5-lola',
    ask: { type: 'phrase', step: 'F1', say: 'Which words ask Lola about her life? Tap them.',
           answer: 'What kind of work do you do? Are you saving for a house?' } },

  /* ---------- The chat beside a request for papers ---------- */
  { id: 'look-identitytheft-friendlychat', kind: 'lookalike', ledger: 'identitytheft~friendlychat',
    link: 'Two of the names come from strangers, and a stranger who writes to you can be either.',
    cases: ['u5-sell-chat', 'u5-sell-papers'],
    instruction: 'Both stories are about Imani and a bicycle she has put up for sale, and in both a stranger writes to her. Compare one thing: what does the stranger want to know about her?',
    prompt: { kind: 'which', option: 'F1.life', answer: 'u5-sell-chat' },
    difference: [
      'In Story A, the stranger says he is not after the bike, and asks about her work and where she lives. He asks for no paper and no number. That is {o:friendlychat}.',
      'In Story B, the stranger says he wants to buy the bike, and asks for a photo of her driver’s license and her date of birth, to arrange the courier. A courier needs neither from a seller. That is {o:identitytheft}.',
      'Both strangers wrote to her first, so who started it does not tell them apart. What each wants to know about her does. That is the question {q:F1}.'
    ] },

  /* ---------- The chat beside the same chat months later ---------- */
  { id: 'look-friendlychat-romance', kind: 'lookalike', ledger: 'friendlychat~romance',
    h: 'The same chat, weeks and months later',
    link: 'A friendly chat can turn into a request for money. Here is one chat before the turn, and the same chat after it.',
    cases: ['u5-ines-chat', 'u5-ines-money'],
    instruction: 'Both stories are about Joel and Ines, who first wrote to him by mistake. Compare one thing: what does Ines ask Joel to do?',
    prompt: { kind: 'which', option: 'D1.details', answer: 'u5-ines-chat' },
    difference: [
      'In Story A, three weeks in, Ines asks about Joel’s job, his apartment and his Christmas plans. She asks him to tell her about himself, and nothing else. That is {o:friendlychat}.',
      'In Story B, five months in, Ines asks him to send $1,500 for her mother’s hospital bill. That is a request for money, and it is {o:romance}.',
      'Same woman, same man, same chat. The questions name what is being asked right now, not the person, and between the two stories the request changed.'
    ] }
]);
