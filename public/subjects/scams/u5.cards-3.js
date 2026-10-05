// Scams, Unit Five, part two: the friendly chat, its look-alike pairs (with a request for papers, and with the chat months
// later when it asks for money), a chat that has reached the papers, and the wrong idea that goes with it.
// Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  /* ---------- Friendly chat before the ask ---------- */
  { id: 'meet-friendlychat', kind: 'meet', outcome: 'friendlychat',
    link: 'The first two names were about papers and numbers. The third is about something that looks smaller, and that can be the start of something bigger: a stranger who is friendly, and wants to know about you.',
    case: 'u5-wrongno', mark: 'F1',
    strip: [
      'A text came from a number Sam does not know, saying it had been sent to the wrong person.',
      'Sam answered, and the messages carried on every day for two weeks. He has never met her.',
      'She asks him about his life: his work, whether he lives alone, where he is going on holiday.',
      'She has not asked for papers, numbers, money, a password or a program to install.'
    ],
    explain: [
      'What you are shown asks for no papers and no numbers, and it is still a request: it asks Sam to tell a stranger about himself. A friendly chat asks small questions, one at a time, and each is easy to answer. Together they tell a stranger where Sam works, whether anyone else lives with him, when his home will be empty, and what he can afford.',
      'That is the first thing the chat is for. The second is that Sam is coming to like her. He looks forward to the messages, and he trusts her more each day. Whoever runs this on purpose wants that, because a request that comes later, for money or for papers, is made by someone who has become a friend, and it is much harder to refuse. People who do this call it building trust.',
      'So nothing has been taken yet, and nothing is asked that could cost Sam anything today. That is why it is easy to dismiss, and why the key gives it a name of its own: it is the stage before the ask.',
      'There are real wrong numbers, and the first text of one looks just like this. A real one ends when the mistake is clear: one polite exchange, and nothing more. What this case shows is a chat that carries on, with questions about Sam.'
    ],
    feature: { step: 'F1', option: 'life' },
    name: [
      'The name for this is {o:friendlychat}. It names the chat, not a person: the chat is friendly, and the ask has not come yet.'
    ] },

  { id: 'again-friendlychat', kind: 'again', outcome: 'friendlychat',
    link: 'The wrong number gave you what to point to, from one case: {needs:friendlychat}. Here is a second case with a different story. This one starts in a group of people who share a hobby.',
    first: 'u5-wrongno', second: 'u5-hobby', step: 'F1',
    instruction: 'Find what the two cases share. Ignore the story (a wrong number, a beekeeping group) and ignore how friendly it is. Look at one thing only: what does the stranger ask about?',
    prompt: { kind: 'phrase', answer: 'He asks about her job, her house and her family' },
    shared: [
      'In both cases a stranger reached the person out of nowhere: a text to the wrong number, a private message from a member of a group. In both the person has never met the sender. In both the sender keeps up a friendly chat for weeks and asks about the person’s life: work, home, family, holidays. In both, nothing has been asked for yet.',
      'The two stories share nothing else. So this is not about wrong numbers, or about bees. It holds wherever someone you know only through messages, who reached you out of nowhere, keeps up a friendly chat and asks about your life. That is what {o:friendlychat} names.'
    ] },

  { id: 'portrait-friendlychat', kind: 'portrait', outcome: 'friendlychat',
    link: 'You know what to point to for {o:friendlychat}. This card fills in the rest of the picture, and says where such a chat usually goes, so that you can spot it where nobody marks the words for you.',
    typical: [
      'It starts with a contact out of nowhere that has a ready excuse: a wrong number, a comment on a photo, a request to join your friends on an app, a message in a group you belong to. The excuse is easy to accept, which is what it is for.',
      'The first messages are warm and easy to answer: compliments, shared interests, "you seem lovely". Nothing in them asks for anything.',
      'Within days the questions turn to you: your work, where you live and who with, your family, whether you have a partner, your money, your holiday plans. Each is small and comes by itself, so none of them feels like a request.',
      'The chat moves. The other person suggests taking it to a private app, writes every day, and writes at the times you are free. You start to look forward to it.',
      'It goes on for days or weeks and asks for nothing. That quiet stretch is the work.',
      'Then comes the turn, and the key already has names for where it goes. It can become a request for money for an emergency or an investment, which {a:D1.money} covers. It can become a request for papers, as in the case of the gift that needs a passport. At that point it is no longer this name: you ask what is being asked right now, {q:D1}, and the answer has changed.'
    ],
    not: [
      'A real wrong number is not this. It is one polite exchange, and it ends once the mistake is clear.',
      'Nor is someone you know in any other way than through messages: a friend, a colleague, someone you met at a club or through people you both know. They can be asked about by someone who knows them, and the key is not for them.'
    ],
    wild: ['"Sorry, wrong number! But you seem lovely."', '"I never usually talk to strangers. You are different."', '"What do you do for work?"', '"Do you live alone? It must be nice to have your own space."', '"Where are you going on holiday this year?"'],
    self: 'It can reach you on any app you use: text messages, a social media request, a hobby group, a dating app, a work site. It is easiest to start when you are bored, lonely or in the middle of something else.',
    ask: '"Do I know this person in any way except through messages, and why do they want to know about my life?" If you know them only through messages and they reached you out of nowhere, the key’s answer is {a:F1.life}.',
    act: [
      'You do not owe a stranger a reply. If a text says it is a wrong number, you can answer "wrong number" and stop. Better still, do not answer, and block the number.',
      'If you have already been chatting, stop sharing: do not tell them where you work, where you live, who lives with you, what you earn or when you will be away.',
      'Ask for a live video call. A real person can usually do one, and someone who is hiding behind a made-up name tends to put it off. Ask someone you trust to read the messages as well: it is much easier for a person outside the chat to see where it is going.',
      'If the chat turns to money, papers, an investment or a favour, do not answer that message. Ask what is being asked right now, use {t:check} on the person, and end the chat.'
    ] },

  { id: 'check-friendlychat', kind: 'check', after: 'friendlychat',
    case: 'u5-lola',
    ask: { type: 'phrase', step: 'F1', say: 'Which words ask Lola about her life? Tap them.',
           answer: 'What kind of work do you do? Are you saving for a house?' } },

  /* ---------- The chat beside a request for papers ---------- */
  { id: 'look-identitytheft-friendlychat', kind: 'lookalike', ledger: 'identitytheft~friendlychat',
    link: 'You have met all three names. Two of them come from strangers, and a stranger who writes to you can be either. This card puts them side by side.',
    cases: ['u5-sell-chat', 'u5-sell-papers'],
    instruction: 'Both cases are about Imani and a bicycle that she has put up for sale, and in both a stranger writes to her. Compare one thing: what does the stranger want to know about her?',
    prompt: { kind: 'which', option: 'F1.life', answer: 'u5-sell-chat' },
    difference: [
      'In Case A the stranger says that he is not after the bike, and asks about her work and about where she lives. Nothing he asks for is a paper or a number: what he wants to know about is her life. The key’s answer is {a:F1.life}, and the case is {o:friendlychat}.',
      'In Case B the stranger says that he wants to buy the bike, and asks for a photo of her driving licence and her date of birth, to arrange the courier. A courier has no need of either from a seller. What he wants is papers and numbers that identify her. He came to her and asks for more than a courier needs, so the key’s answer is {a:F2.notfit}, and the case is {o:identitytheft}.',
      'Both strangers came to her, so who began it does not separate them: the answer to {q:F2} is the same for both. What separates them is what each wants to know about her, which is the question {q:F1}. In Case A it is her life. In Case B it is papers and numbers that identify her.'
    ] },

  /* ---------- The chat beside the same chat months later ---------- */
  { id: 'look-friendlychat-romance', kind: 'lookalike', ledger: 'friendlychat~romance',
    h: 'The same chat, weeks and months later',
    link: 'The last card put the chat beside a request for papers. The picture of {o:friendlychat} said that the chat can turn into a request for money. This card shows one person’s chat before the turn, and the same sort of chat after it.',
    cases: ['u5-ines-chat', 'u5-ines-money'],
    instruction: 'Both cases are about Joel and Ines, who first wrote to him by mistake. Compare one thing: what does Ines ask Joel to do?',
    prompt: { kind: 'which', option: 'D1.details', answer: 'u5-ines-chat' },
    difference: [
      'In Case A, three weeks in, Ines asks what Joel does for a living, whether he rents or owns his flat, and what he plans to do at Christmas. She asks him to tell her about himself, and she asks for nothing else. The key’s answer is {a:D1.details}. The next question is {q:F1}, and its answer is {a:F1.life}. The case is {o:friendlychat}.',
      'In Case B, five months in, Ines asks him to send £1,500 for her mother’s hospital bill. That is a request for money, and the key’s answer is {a:D1.money}. The next question is {q:M1}, and it is answered by someone he knows only online. The one after it is {q:M2}, and its answer is {a:M2.crisis}. That leads to the name the key gives to {plain:romance}, which the table below shows.',
      'It is the same woman, the same man and the same chat. The key does not name the person. It names what is being asked right now, and between the two cases the request changed. That is why the stage before the ask has a name of its own: when the ask comes, you will already know the person, and the key will have a different answer to give.'
    ] },

  { id: 'exc-papers', kind: 'exception', looksLike: 'friendlychat', is: 'identitytheft', ledger: 'identitytheft~friendlychat',
    h: 'A chat that has reached the papers',
    link: 'A chat can turn into a request for money, and it can turn into a request for papers. The second can look as if nothing has changed.',
    case: 'u5-papers',
    setup: 'Dev has chatted with Nia for a month, and she has asked about his work and his flat. It looks like {o:friendlychat}. Yet tonight’s message is a request for papers, and the case is {o:identitytheft}.',
    prompt: { kind: 'phrase', answer: 'The courier needs a photo of your passport and your date of birth before it can be delivered' },
    because: [
      'For a month the case fitted the friendly chat: a stranger who reached him by mistake, asking about his life, asking for nothing. Tonight Nia asks for a photo of his passport and his date of birth. Those are exactly the papers and numbers that identify a person. The chat is still friendly, and the gift is a kind thought, but what she asks for now is a document.',
      'The key’s answer to {q:F1} is {a:F1.life} only while no paper or number has been asked for. The moment one is asked for, the answer changes: what she wants to know about is now a document. It came to him, so the answer to {q:F2} is {a:F2.notfit}, and the case is {o:identitytheft}. A month of friendliness before it does not change that. It is the month that made the request feel safe.'
    ],
    take: 'This is the second way the stage before the ask can end. The first was a request for money. Either way, what matters is the request in front of you, and not how long the chat has been going.' },

  /* ---------- A wrong idea about a chat that asks for nothing ---------- */
  { id: 'refute-nomoney', kind: 'refute', about: 'friendlychat',
    h: 'A wrong idea: "she has never asked me for anything"',
    link: 'The picture of {o:friendlychat} said that the quiet weeks are the work. The last idea this part answers is the one that makes people stay in the chat.',
    idea: '"We have chatted every day for weeks, and she has never mentioned money. There is nothing to worry about."',
    verdict: 'This is wrong.',
    right: [
      'A chat that asks for nothing is not a chat that is safe. For many scams the weeks without a request are the work: the friendly questions collect facts about you and build the trust that makes the later request hard to refuse. An empty list of requests is the stage before the ask, not a sign that there will be none.',
      'What to look at is not whether money has been asked for. It is whether you know this person in any way except through messages, and why they want to know about your life. If you know them only through messages, and they reached you out of nowhere, the key’s answer to {q:F1} is {a:F1.life}, however long it has gone on.',
      'It does not mean that every friendly stranger is a scammer. It means that, with a stranger, a lack of requests tells you nothing, and that the thing to do is to stop sharing facts about yourself, to ask for a live video call, and to ask someone you trust to read the messages.'
    ],
    testedBy: ['u5-claim-nomoney'] }
]);
