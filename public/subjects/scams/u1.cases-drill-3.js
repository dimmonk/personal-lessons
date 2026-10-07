// Scams, Unit One: drill cases for the second stage whose story misleads (a notice that ends in a request, a request
// that looks like a file, a friendly chat that ends in a question), and the faulty claims of the last stage.
// echo names a teaching case of a DIFFERENT kind whose story this one is built to bring back, so that the second look
// ("does it look like a case you know?") is practiced where the likeness points the wrong way.
// A claim is something a person might say. fault says what is wrong with the claim; corrected puts it right. context
// gives the situation the claim is about, so that the question can be answered from it.

FC.cases('scams', 'u1', [
  { id: 'g-d-notice-file', use: 'drill', tier: 'misleading', setting: 'government', topic: 'a trash day sent as a file',
    echo: 'g-delivery',
    text: "Northway County emails Mr. Boateng: 'Your trash pickup day is changing. Open the attached file to see your new day.'",
    route: { D1: ['device'] },
    cues: { D1: 'Open the attached file to see your new day' },
    reason: { D1: 'The email starts like a notice, but it asks Mr. Boateng to open a file: {cue:D1}. Opening a file is a request about his device.' },
    not: { outcome: 'nothing', why: 'A change of trash day is news, and without its last sentence the email would only tell him something. But it goes on to ask him to open a file.' } },

  { id: 'g-a-doc-share', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a shared document that needs a password',
    echo: 'g-support-call',
    text: "Zeke gets an email: 'Pat has shared the document Budget 2026 with you. To open it, sign in with your email password.'",
    route: { D1: ['access'] },
    cues: { D1: 'To open it, sign in with your email password' },
    reason: { D1: 'It looks like a file to open, but the request is to sign in: {cue:D1}. What Zeke is asked to type is a password.' },
    not: { outcome: 'device', why: 'A document is mentioned, but Zeke is not asked to open a file from the email. He is asked to sign in.' } },

  { id: 'g-n-blocked', use: 'drill', tier: 'misleading', setting: 'money', topic: 'a blocked payment reported by the bank',
    echo: 'g-pension',
    text: "Halbrook Bank texts Folake: 'We have blocked a payment of $420 to an unknown account. If this was you, no action is needed. If it was not, call the number on the back of your card.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'If this was you, no action is needed. If it was not, call the number on the back of your card' },
    reason: { D1: 'The text tells Folake what the bank has done, and the only step it suggests is the number already on her card: {cue:D1}. That is {t:already}, so nothing is asked.' },
    not: { outcome: 'access', why: 'It sounds as alarming as a locked account, but it does not ask her to sign in, give a code or press anything.' } },

  { id: 'g-dt-chat', use: 'drill', tier: 'misleading', setting: 'relationships', topic: 'a friendly message from someone met once',
    echo: 'g-delivery',
    text: "A message reaches Arun from a number he does not know: 'Hello Arun, I am Mei, we met at the conference. Great to meet you! Where do you live now? Still in Tulsa? And are you still at the same firm?'",
    route: { D1: ['details'] },
    cues: { D1: 'Where do you live now? Still in Tulsa? And are you still at the same firm?' },
    reason: { D1: 'Most of the message is friendly, but it ends with questions about Arun: {cue:D1}. They ask him to say where he lives and works.' },
    not: { outcome: 'nothing', why: 'A friendly message could pass for news, but one that asks questions about you is asking.' } },

  { id: 'g-claim-demo', use: 'claim',
    context: 'A caller who says she is from a gym asks a man for his date of birth and his mother’s maiden name.',
    text: '"She only asked for my date of birth and my mother’s maiden name. She never asked for money, so I could not see what harm it did."',
    ask: { type: 'option', step: 'D1', answer: 'details' },
    fault: 'Money is not the only thing that can be taken. A date of birth and a mother’s maiden name are what people use to prove who they are, and asking for them is a request.',
    corrected: 'She asked me to tell her about myself: my date of birth and my mother’s maiden name. That is {a:D1.details}, and it is still a request. A request is what {t:check} is for.' },

  { id: 'g-claim-polish', use: 'claim',
    context: 'An email is signed by a bank, in perfect English, with the bank’s logo and the customer’s name. It says that her account has been limited, and asks her to sign in at a link in the email to restore it.',
    text: '"This cannot be a scam. It is perfectly written, it has the bank’s logo, and it uses my name. All it wants is for me to sign in."',
    ask: { type: 'option', step: 'D1', answer: 'access' },
    fault: 'Anyone can copy neat writing, a logo and a name, so they show nothing either way. What matters is that it asks her to sign in at a link that came with it.',
    corrected: 'The neat writing and my name tell me nothing. It asks me to sign in at a link it gave me, and that is {a:D1.access}. To find out whether it is real I would use {t:check}.' },

  { id: 'g-claim-careful', use: 'claim',
    context: 'A caller says that he is from her broadband company and asks her to press a Share button in a meeting app, so that he can see her computer and put right a fault.',
    text: '"I am far too careful to be caught. I pressed Share, just to see what he would do. I watched him the whole time."',
    ask: { type: 'option', step: 'D1', answer: 'device' },
    fault: 'Pressing Share is the request, and once she has pressed it he can see everything on her computer, however carefully she watches. Care helps before you press, not after.',
    corrected: 'He asked me to turn on {t:screenshare} so that he could see my computer. That is {a:D1.device}. I should have stopped before pressing and used {t:check}.' }
]);
