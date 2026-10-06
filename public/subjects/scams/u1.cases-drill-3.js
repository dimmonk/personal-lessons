// Scams, Unit One: drill cases for the second stage, the ones whose story misleads (a notice that ends in a request,
// a request that looks like a file, a friendly chat that ends in a question), and the faulty claims of the last stage.
// echo names a teaching case of a DIFFERENT kind whose story this one is built to bring back, so that the second look
// ("does it look like a case you know?") is practised where the likeness points the wrong way.
// A claim is something a person might say. ask is the key's question, asked of what the claim itself describes.
// fault says what is wrong with the claim; corrected puts it right, and is always shown last. context gives the
// situation the claim is about, so that the question can be answered from it.

FC.cases('scams', 'u1', [

  /* ---------- misleading ---------- */
  { id: 'g-d-notice-file', use: 'drill', tier: 'misleading', setting: 'government', topic: 'a trash day sent as a file',
    echo: 'g-delivery',
    text: "Northway County emails Mr. Boateng: 'Your trash pickup day is changing. Open the attached file to see your new day.'",
    route: { D1: ['device'] },
    cues: { D1: 'Open the attached file to see your new day' },
    reason: { D1: 'The email starts like a notice, but it asks Mr. Boateng to open a file: {cue:D1}. A request to open a file is a request about his device.' },
    not: { outcome: 'nothing', why: 'A change of trash day is news, and without its last sentence the email would only tell him something. But it goes on to ask him to open a file.' },
    wouldChange: 'If the email had given the new day in the text itself and asked for nothing, it would be {a:D1.nothing}.' },

  { id: 'g-a-doc-share', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a shared document that needs a password',
    echo: 'g-attach',
    text: "Zeke gets an email: 'Pat has shared the document Budget 2026 with you. To open it, sign in with your email password.'",
    route: { D1: ['access'] },
    cues: { D1: 'To open it, sign in with your email password' },
    reason: { D1: 'It looks like a file to open, but the request is to sign in: {cue:D1}. What Zeke is asked to type is a password.' },
    not: { outcome: 'device', why: 'A document is mentioned, and a request to open a file from the email would be about his device. Here he is not asked to open a file from the email. He is asked to sign in.' },
    wouldChange: 'If the email had said "open the attached file", it would be a request about his device, and it would be {a:D1.device}.' },

  { id: 'g-n-blocked', use: 'drill', tier: 'misleading', setting: 'money', topic: 'a blocked payment reported by the bank',
    echo: 'g-streaming',
    text: "Halbrook Bank texts Folake: 'We have blocked a payment of $420 to an unknown account. If this was you, no action is needed. If it was not, call the number on the back of your card.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'If this was you, no action is needed. If it was not, call the number on the back of your card' },
    reason: { D1: 'The text tells Folake what the bank has done, and the only thing it suggests is to call the number already on her card: {cue:D1}. That is {t:already}, so nothing new is offered, and nothing is asked.' },
    not: { outcome: 'access', why: 'It sounds as alarming as a message that says an account is locked, but it does not ask her to sign in, to give a code or to press anything.' },
    wouldChange: 'If it had added "sign in here to stop the payment", it would ask her to sign in, and it would be {a:D1.access}.' },

  { id: 'g-m-invest', use: 'drill', tier: 'misleading', setting: 'relationships', topic: 'an online friend with an investment',
    echo: 'g-wrong-number',
    text: "Since April, Dan has chatted every day to Elise, a woman he met on a language app. Today she writes: 'My uncle's trading app has doubled my money twice. Put in $500 and I will show you how.'",
    route: { D1: ['money'] },
    cues: { D1: 'Put in $500 and I will show you how' },
    reason: { D1: 'Today Elise asks Dan to put money in: {cue:D1}. It is a request to send $500, and the months of friendly chat before it are the story.' },
    not: { outcome: 'details', why: 'For months she has asked him about his life, which is the kind that asks for facts about you. Today she asks for money, and the answer is for what is asked right now.' },
    wouldChange: 'If she had only asked about his work and his plans, it would be {a:D1.details}.' },

  { id: 'g-dt-chat', use: 'drill', tier: 'misleading', setting: 'relationships', topic: 'a friendly message from someone met once',
    echo: 'g-delivery',
    text: "A message reaches Arun from a number he does not know: 'Hello Arun, I am Mei, we met at the conference. Great to meet you! Where do you live now? Still in Tulsa? And are you still at the same firm?'",
    route: { D1: ['details'] },
    cues: { D1: 'Where do you live now? Still in Tulsa? And are you still at the same firm?' },
    reason: { D1: 'Most of the message is friendly and asks for nothing, but it ends with questions about Arun: {cue:D1}. They ask him to tell the sender where he lives and where he works.' },
    not: { outcome: 'nothing', why: 'Most of the message is friendly and could pass for news, but a message that asks questions about you is asking.' },
    wouldChange: 'If it had only said that it was great to meet him, with no questions, it would ask for nothing, and it would be {a:D1.nothing}.' },

  /* ---------- faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'g-claim-demo', use: 'claim',
    context: 'A caller who says she is from a gym asks a man for his date of birth and his mother’s maiden name.',
    text: '"She only asked for my date of birth and my mother’s maiden name. She never asked for money, so I could not see what harm it did."',
    ask: { type: 'option', step: 'D1', answer: 'details' },
    fault: 'The claim treats a request as harmless because it is not a request for money. But a date of birth and a mother’s maiden name are facts that people use to prove who they are, and asking for them is a request. Money is not the only thing that can be taken.',
    corrected: 'She asked me to tell her about myself: my date of birth and my mother’s maiden name. That is {a:D1.details}. It is not a request for money, and it is still a request, and a request is what {t:check} is for.' },

  { id: 'g-claim-polish', use: 'claim',
    context: 'An email is signed by a bank, in perfect English, with the bank’s logo and the customer’s name. It says that her account has been limited, and asks her to sign in at a link in the email to restore it.',
    text: '"This cannot be a scam. It is perfectly written, it has the bank’s logo, and it uses my name. All it wants is for me to sign in."',
    ask: { type: 'option', step: 'D1', answer: 'access' },
    fault: 'The claim treats a well-written message as a safe one. Neat writing, a logo and a name can be copied by anyone, so they show nothing either way. It also hides the real point: the message asks her to sign in, at a link that came with it.',
    corrected: 'The message is neat and uses my name, and that tells me nothing. What it asks is that I sign in at a link it gave me. That is {a:D1.access}, and the neat writing does not change it. To find out whether it is real I would use {t:check}, not decide by how it reads.' },

  { id: 'g-claim-polite', use: 'claim',
    context: 'A man calls an older woman and says that he is from the police. He asks her to take $3,000 out of the bank in cash for a courier to collect, and stays on the line for an hour, speaking kindly the whole time.',
    text: '"He was so polite and so patient with me, even when I asked questions. A scammer would have been rude. So I took out $3,000 in cash for his courier."',
    ask: { type: 'option', step: 'D1', answer: 'money' },
    fault: 'The claim treats good manners as proof that the man was who he said he was. Calm and kindness are tools: they keep a person on the line. His manner says nothing about what he asked, and what he asked was for $3,000 in cash.',
    corrected: 'He was polite, and that tells me nothing. He asked me to take out $3,000 in cash and hand it over. That is {a:D1.money}. I would put the phone down and use {t:check}: call the police at a number I already had.' },

  { id: 'g-claim-careful', use: 'claim',
    context: 'A caller says that he is from her broadband company and asks her to press a Share button in a meeting app, so that he can see her computer and put right a fault.',
    text: '"I am far too careful to be caught. I pressed Share, just to see what he would do. I watched him the whole time."',
    ask: { type: 'option', step: 'D1', answer: 'device' },
    fault: 'The claim treats being careful as a protection that still works after the request has been carried out. Pressing Share is the request, and once she has pressed it he can see everything on her computer, however carefully she watches. Care helps before you do it, not after.',
    corrected: 'He asked me to put {t:screenshare} on, so that he could see my computer. That is {a:D1.device}, and the thing to do is the one thing I did not do: stop before pressing, and use {t:check}.' },

  { id: 'g-claim-notice', use: 'claim',
    context: 'A man gets a text from his dentist that gives the time of his next appointment and nothing else.',
    text: '"Anything that texts me out of the blue is a scam. My dentist texted me the time of my appointment, so I deleted it and blocked the number."',
    ask: { type: 'option', step: 'D1', answer: 'nothing' },
    fault: 'The claim treats every message as a scam. The text only told him when his appointment was and asked him to do nothing, so it is the kind that needs no answer. A message that asks for nothing is not a risk, and blocking it may cost him the appointment.',
    corrected: 'My dentist’s text told me the time of my appointment and asked for nothing. That is {a:D1.nothing}. There was nothing to check and nothing to do, except to turn up.' }
]);
