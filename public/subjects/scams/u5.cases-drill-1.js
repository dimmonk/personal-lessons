// Scams, Unit Five: drill cases for the first stage (the key's answers are shown and the name is asked). None of these appears
// in a card. Each carries the words that decide the two questions of this unit (cues), the reason for each answer (reason),
// and not: the nearest wrong name and why it fails. Some are real requests and some are copies, and the key answers the same
// way for both while it is the request that differs. Field guide: see u5.cases-teach-1.js.

FC.cases('scams', 'u5', [

  /* ---------- Stage one: the key's answers are shown, the learner gives the name. First group, clean ---------- */
  { id: 'u5-n-school', use: 'drill', tier: 'clean', setting: 'government', topic: 'enrolling a child at school',
    text: "Tobias enrols his daughter at Hillcrest Primary by walking into the school office. The form asks for her name and date of birth, his own address and phone number, and a copy of her birth certificate. The secretary says: 'We need these to put her on the school roll.'",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'The form asks for her name and date of birth, his own address and phone number, and a copy of her birth certificate', F1: 'her name and date of birth, his own address and phone number, and a copy of her birth certificate', F2: ['by walking into the school office', 'We need these to put her on the school roll'] },
    reason: { F1: 'The form asks for facts that identify his daughter and himself: {cue:F1}. It asks nothing about his work or his plans.',
              F2: 'Tobias went to the school’s own office himself, and what is asked is what putting a child on the roll needs: {cue:F2}. Both halves of the question are met.' },
    not: { outcome: 'identitytheft', why: 'A copy of a birth certificate is a paper that someone could misuse, but Tobias is the one who walked in, and the secretary says what it is for. A request that had come to him would be a different name.' } },

  { id: 'u5-n-refund', use: 'drill', tier: 'clean', setting: 'government', topic: 'a tax refund and a passport scan',
    text: "An email reaches Gus: 'The tax office has calculated that you are due a refund of £312. To process it, please reply with a scan of your passport and your National Insurance number.' Gus has not been in touch with the tax office this year.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'please reply with a scan of your passport and your National Insurance number', F1: 'a scan of your passport and your National Insurance number', F2: ['An email reaches Gus', 'Gus has not been in touch with the tax office this year'] },
    reason: { F1: 'The email asks for papers and a number that identify Gus: {cue:F1}.',
              F2: 'The email came to Gus, and he began nothing with the tax office that a refund could belong to: {cue:F2}. Paying a refund needs nothing like a passport scan, so what is asked also goes beyond the reason.' },
    not: { outcome: 'realdetails', why: 'The tax office does ask people for facts, but when they have begun something with it. Nothing in this case shows that Gus began anything.' } },

  { id: 'u5-n-language', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a stranger on a language-exchange app',
    text: "Hanna uses a language-exchange app. A man she has never met sends her a private message: 'Your photo is lovely! Where in the world are you? What do you do for a living?' Over a week he writes every day and asks where she lives, who she lives with and what her flat is like. He has not asked her for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'asks where she lives, who she lives with and what her flat is like', F1: ['A man she has never met sends her a private message', 'asks where she lives, who she lives with and what her flat is like'], F2: 'A man she has never met sends her a private message' },
    reason: { F1: 'A stranger who reached her out of nowhere keeps up a friendly chat and asks about her life: {cue:F1}. He asks for no paper or number.',
              F2: 'Hanna began nothing with him. A message from someone she has never met reached her first: {cue:F2}.' },
    not: { outcome: 'identitytheft', why: 'He asks for no paper and no number. What he wants to know about is where she lives and who she lives with, which is her life, and so the question about papers does not arise yet.' } },

  /* ---------- Second group, clean ---------- */
  { id: 'u5-n-vet', use: 'drill', tier: 'clean', setting: 'health', topic: 'ringing the vet over a dog',
    text: "Priyanka rings her vet on the number printed on her dog's vaccination card. The nurse says: 'To find his record, can I have your address and your dog's name?' Priyanka tells her.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: "can I have your address and your dog's name?", F1: "your address and your dog's name", F2: ["rings her vet on the number printed on her dog's vaccination card", 'To find his record'] },
    reason: { F1: 'The nurse asks for Priyanka’s address, which is one of the facts the key counts as identifying her: {cue:F1}. Nothing is asked about her work or her plans.',
              F2: 'Priyanka rang the vet herself, on the number printed on her dog’s card, and the nurse asks only what finding a record needs: {cue:F2}.' },
    not: { outcome: 'friendlychat', why: 'The nurse asks about nothing in Priyanka’s life. The dog’s name and the address are what finding a record needs, and Priyanka is the one who rang.' } },

  { id: 'u5-n-dating', use: 'drill', tier: 'clean', setting: 'relationships', topic: 'a dating site closing a profile',
    text: "A message reaches Layla from the 'Safety Team' of the dating site she joined last year: 'Your profile will be closed in 24 hours unless you confirm that you are real. Reply with a photo of yourself holding your passport.' She has not contacted the site this month.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'Reply with a photo of yourself holding your passport', F1: 'a photo of yourself holding your passport', F2: ['A message reaches Layla', 'She has not contacted the site this month'] },
    reason: { F1: 'The message asks for a photo of Layla holding her passport, which is papers that identify her: {cue:F1}.',
              F2: 'The message came to Layla: {cue:F2}. She did join the site herself, but she began nothing today, and keeping a profile open needs nothing like a photo of her holding her passport.' },
    not: { outcome: 'realdetails', why: 'She did join the site, and a real site may ask you to confirm facts. But this request came to her, with a deadline, and asks for more than a profile needs.' } },

  { id: 'u5-n-nurse', use: 'drill', tier: 'clean', setting: 'relationships', topic: 'a woman abroad who writes every day',
    text: "A woman who says that she is a nurse working abroad writes to Wim: 'Hello, I think I found you on a friends list. I am so lonely here. Tell me about yourself!' They write every day for ten days. She asks about his children, his job and whether he is thinking of retiring. She has not asked him for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'She asks about his children, his job and whether he is thinking of retiring', F1: ['A woman who says that she is a nurse working abroad writes to Wim', 'She asks about his children, his job and whether he is thinking of retiring'], F2: 'I think I found you on a friends list' },
    reason: { F1: 'Someone Wim has never met, who reached him out of nowhere, asks about his family, his work and his plans: {cue:F1}. No paper or number is asked for.',
              F2: 'Wim began nothing. She reached him with a reason that is hard to check, and she is not someone he knows in any other way: {cue:F2}.' },
    not: { outcome: 'identitytheft', why: 'She asks for no paper and no number, so the case is about his life. If she asked for a photo of his passport, it would be a different name.' } },

  /* ---------- Third group, varied: a long list that fits, a call that does not, a stranger asking about work ---------- */
  { id: 'u5-n-mortgage', use: 'drill', tier: 'varied', setting: 'money', topic: 'a mortgage appointment at the bank’s branch',
    text: "Eilidh has booked an appointment at her own bank's branch to ask about a mortgage. At the appointment the adviser asks to see her passport, her last three payslips and proof of where she has lived for the past three years. 'The bank must check all of this before it lends you a penny,' she says.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'asks to see her passport, her last three payslips and proof of where she has lived for the past three years', F1: 'her passport, her last three payslips and proof of where she has lived for the past three years', F2: ["has booked an appointment at her own bank's branch", 'The bank must check all of this before it lends you a penny'] },
    reason: { F1: 'The adviser asks for papers that identify Eilidh and show where she has lived: {cue:F1}.',
              F2: 'The list is long, but Eilidh booked the appointment at her own bank’s branch, and every item is there for a reason the adviser gives: {cue:F2}. A long list can fit.' },
    not: { outcome: 'identitytheft', why: 'The papers are many and include a passport, so it can look like a request for papers that someone could misuse. But she began it, in her bank’s own branch, and each paper has a reason.' } },

  { id: 'u5-n-broadband', use: 'drill', tier: 'varied', setting: 'home', topic: 'a broadband company caller',
    text: "A caller rings Ivan and says that he is from Ivan's broadband company. 'We are updating our records. To confirm that I am speaking to the account holder, please tell me your date of birth and your mother's maiden name.' Ivan has not rung his broadband company this year.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: "please tell me your date of birth and your mother's maiden name", F1: "your date of birth and your mother's maiden name", F2: ['A caller rings Ivan', 'Ivan has not rung his broadband company this year'] },
    reason: { F1: 'The caller asks for facts that identify Ivan: {cue:F1}.',
              F2: 'The call came to Ivan, and he began nothing with the company: {cue:F2}. The key gives the same answer to a real call as to a false one, and what settles which it is comes afterwards.' },
    not: { outcome: 'realdetails', why: 'The caller says he is from a company Ivan deals with, and a real company does sometimes ring. But the call came to Ivan, and the key answers by what you can see: it came to him.' } },

  { id: 'u5-n-networking', use: 'drill', tier: 'varied', setting: 'work', topic: 'a stranger on a work networking site',
    text: "A stranger writes to Marek on a work networking site: 'I saw your post about warehouse software. I am setting up in the same field.' For three weeks he writes every few days and asks Marek about his employer, which suppliers it uses and who he reports to. He has not asked for anything else.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'asks Marek about his employer, which suppliers it uses and who he reports to', F1: ['A stranger writes to Marek', 'asks Marek about his employer, which suppliers it uses and who he reports to'], F2: 'A stranger writes to Marek' },
    reason: { F1: 'A stranger who reached Marek out of nowhere keeps up a friendly chat and asks about his work: {cue:F1}. No paper or number is asked for.',
              F2: 'Marek began nothing. A stranger wrote to him first: {cue:F2}.' },
    not: { outcome: 'realdetails', why: 'He asks about Marek’s work, as a business contact might, and a real contact in the same field could ask the same. But he came to Marek out of nowhere, and nothing Marek began needs these answers.' } }
]);
