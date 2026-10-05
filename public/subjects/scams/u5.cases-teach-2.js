// Scams, Unit Five: cases shown inside cards, part two: the friendly chat, the chat that turns into a request for money
// (a name from the unit on money, shown beside it), the chat that reaches the papers, and the checks on the two questions.
// Field guide: see u5.cases-teach-1.js.

FC.cases('scams', 'u5', [

  /* ---------- Friendly chat before the ask: the first case, then the second, then the check ---------- */
  { id: 'u5-wrongno', use: 'teach', tier: 'clean', setting: 'relationships', topic: 'a wrong-number text carried on', name: 'The wrong number',
    text: "A text arrives on Sam's phone from a number he does not know: 'Hi Sam! Sorry, I think I have the wrong number. I was trying to reach my friend Lou.' Sam answers kindly. Over the next two weeks the stranger, who says her name is Mei, writes to him every day. She asks what he does for work, whether he lives alone, and where he is going on holiday. She has not asked him for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'She asks what he does for work, whether he lives alone, and where he is going on holiday',
            F1: ['from a number he does not know', 'She asks what he does for work, whether he lives alone, and where he is going on holiday', 'She has not asked him for anything'],
            F2: ['from a number he does not know', 'Sorry, I think I have the wrong number'] } },

  { id: 'u5-hobby', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a stranger in a beekeeping group', name: 'The beekeeping group',
    text: "Odile has joined an online group for people who keep bees. A member she has never met writes to her privately: 'Loved your photo of the hives! What do you do when you are not with the bees?' Over the next three weeks he messages every evening. He asks about her job, her house and her family. He has not asked her for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'He asks about her job, her house and her family',
            F1: ['A member she has never met writes to her privately', 'He asks about her job, her house and her family'],
            F2: 'A member she has never met writes to her privately' },
    segments: [
      { text: 'Odile has joined an online group for people who keep bees', note: 'That says where she is. It does not show what he wants to know about her.' },
      { text: 'A member she has never met writes to her privately', note: 'That shows how it began. The question here is about what he asks about, and that comes after.' },
      { text: 'Loved your photo of the hives! What do you do when you are not with the bees?', note: 'That is the first message. It is friendly, and the question in it is only the start of what he asks about.' },
      { text: 'He asks about her job, her house and her family' },
      { text: 'He has not asked her for anything', note: 'That says what he has not done. The question is about what he does ask about.' }
    ] },

  { id: 'u5-lola', use: 'check', tier: 'clean', setting: 'work', topic: 'a message via a friend of a friend',
    text: "A message arrives on Lola's phone from a number she does not know: 'Hello Lola! I got your number from a friend of a friend, I hope that is OK. I'm Kit. What kind of work do you do? Are you saving for a house?' Lola has never heard of Kit.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'What kind of work do you do? Are you saving for a house?', F1: ['from a number she does not know', 'What kind of work do you do? Are you saving for a house?'], F2: 'Lola has never heard of Kit' },
    segments: [
      { text: 'A message arrives on Lola\'s phone from a number she does not know', note: 'That says how it arrived. The question is about what the sender wants to know about her.' },
      { text: 'Hello Lola! I got your number from a friend of a friend, I hope that is OK. I\'m Kit', note: 'That is how Kit introduces himself. He is friendly, and nothing here asks Lola anything about herself.' },
      { text: 'What kind of work do you do? Are you saving for a house?' },
      { text: 'Lola has never heard of Kit', note: 'That says how well she knows him. It shows that he is a stranger, and the questions he asks are what the question looks at.' }
    ],
    reason: { F1: 'Kit is a stranger who reached Lola out of nowhere, and what he asks about is her work and her money: {cue:F1}. He asks for no paper, no number and nothing else yet, so what he wants to know about is her life.' } },

  /* ---------- The friendly chat beside the same chat months later (a name from the unit on money) ---------- */
  { id: 'u5-ines-chat', use: 'teach', tier: 'clean', setting: 'relationships', topic: 'three weeks of chat, with questions on his job and flat',
    text: "Joel has been exchanging messages for three weeks with Ines, who first wrote to him by mistake. Today she asks what he does for a living, whether he rents or owns his flat, and what he plans to do at Christmas. She has not asked him for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'she asks what he does for a living, whether he rents or owns his flat, and what he plans to do at Christmas',
            F1: ['who first wrote to him by mistake', 'what he does for a living, whether he rents or owns his flat, and what he plans to do at Christmas'],
            F2: 'who first wrote to him by mistake' } },

  { id: 'u5-ines-money', use: 'teach', tier: 'clean', setting: 'relationships', topic: 'five months of chat, then a hospital bill',
    text: "Joel has been messaging Ines every day for five months. They have never met, and her video calls never seem to work. Tonight she writes: 'My mother has been taken into hospital abroad, and the hospital will not treat her until it is paid. Could you send me £1,500? I promise I will pay you back.'",
    outcome: 'romance', route: { D1: ['money'], M1: ['online'], M2: ['crisis'] },
    cues: { D1: 'Could you send me £1,500?',
            M1: ['messaging Ines every day for five months', 'They have never met'],
            M2: ['the hospital will not treat her until it is paid', 'her video calls never seem to work'] } },

  /* ---------- The chat beside a request for papers, from a stranger who found the same advert ---------- */
  { id: 'u5-sell-chat', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a stranger who asks after her, not the bicycle',
    text: "Imani has put her bicycle up for sale on a selling site. A stranger writes to her: 'I am not after the bike, I just liked your profile photo! What do you do for work? Do you live near the station?' She has never heard of him.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'What do you do for work? Do you live near the station?',
            F1: ['A stranger writes to her', 'What do you do for work? Do you live near the station?'],
            F2: 'A stranger writes to her' } },

  { id: 'u5-sell-papers', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a stranger who asks for her driving licence',
    text: "Imani has put her bicycle up for sale on a selling site. A stranger writes to her: 'I would like to buy it. To arrange the courier I need a photo of your driving licence and your date of birth.' She has never heard of him.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'I need a photo of your driving licence and your date of birth',
            F1: 'a photo of your driving licence and your date of birth',
            F2: ['A stranger writes to her', 'To arrange the courier I need a photo of your driving licence and your date of birth'] } },

  /* ---------- A chat that has reached the papers: looks like a friendly chat, is not ---------- */
  { id: 'u5-papers', use: 'teach', tier: 'misleading', setting: 'relationships', topic: 'a month of chat, then a passport photo asked for', name: 'The gift that needs a passport',
    text: "For a month Dev has been chatting with Nia, who first wrote to him by mistake. She asks about his work and his flat. One evening she writes: 'I want to send you a surprise gift. The courier needs a photo of your passport and your date of birth before it can be delivered.'",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'The courier needs a photo of your passport and your date of birth', F1: 'a photo of your passport and your date of birth', F2: 'who first wrote to him by mistake' },
    segments: [
      { text: 'For a month Dev has been chatting with Nia, who first wrote to him by mistake', note: 'That is the chat, and it is why the case looks like the friendly chat the last cards described. It does not show what she asks for now.' },
      { text: 'She asks about his work and his flat', note: 'Those are questions about his life, and for a month those were all she asked. They are not what she asks tonight.' },
      { text: 'I want to send you a surprise gift', note: 'That is the reason she gives. It sounds friendly, and it says nothing about what she wants to know.' },
      { text: 'The courier needs a photo of your passport and your date of birth before it can be delivered' }
    ] },

  /* ---------- Checks on the two questions: each asks every answer of its question ---------- */
  { id: 'u5-qf1', use: 'check', tier: 'clean', setting: 'home', topic: 'a delivery address on a furniture site',
    text: "Aisha has ordered a sofa from the Harrow Furniture website, which she reached by typing its address herself. At the checkout the page asks for her delivery address and a phone number for the delivery team.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'the page asks for her delivery address and a phone number for the delivery team', F1: 'her delivery address', F2: ['ordered a sofa from the Harrow Furniture website', 'which she reached by typing its address herself'] },
    reason: { F1: 'The page asks for facts about Aisha that identify her: {cue:F1}. An address is one of the facts the key counts here, even though it is only needed for a delivery. It asks about nothing in her life.' } },

  { id: 'u5-qf2', use: 'check', tier: 'varied', setting: 'leisure', topic: 'ringing the gym and being asked for more than a bill needs',
    text: "Max rings the number on his gym membership card to ask about a bill. The adviser asks him to confirm his date of birth, and also the full number and the three-digit code on the back of his bank card, 'to speed things up'.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'confirm his date of birth, and also the full number and the three-digit code on the back of his bank card', F1: 'the full number and the three-digit code on the back of his bank card', F2: ['rings the number on his gym membership card to ask about a bill', 'also the full number and the three-digit code on the back of his bank card'] },
    reason: { F2: 'Max did start this, through the number on his card. But to answer a question about a bill the adviser needs no more than his date of birth, and what she asks for goes further: {cue:F2}. The first half of the question is met, and the second is not.' } }
]);
