// Scams, Unit Three, part two: the second copy, someone asking for the code that has just come to your phone. Its look-alike
// pair with the real sign-in, the case that asks for a password and then a code (the key's tie-break), and the second wrong idea.
// Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  /* ---------- One-time code scam ---------- */
  { id: 'meet-codescam', kind: 'meet', outcome: 'codescam',
    link: 'The first copy needed a copied page. The second needs no page at all, because what it asks for is real, and it arrives on your own phone.',
    case: 'ac-phoneorder', mark: 'A1',
    strip: [
      'There is one person, Ewan, and a caller who rang him.',
      'The caller says a phone has been ordered on his account, and that a code will cancel the order.',
      'A text arrives on his phone with six digits in it: a code that has just come to him.',
      'The caller asks him to read the digits out to her.',
      'No page is involved, and nothing is copied.'
    ],
    explain: [
      'What you are shown is a caller who wants a code. Here is how it goes, in order, and the first part happens before the phone rings.',
      'First, the caller is already trying to get into Ewan\'s account, or to pay from it, right now. She has his phone number, and perhaps his password from an old leak. Second, the phone company\'s own system does what it is built to do when someone signs in and it is not sure who: it texts a {t:code} to the account holder, to be typed into the sign-in. That text is real. Third, the caller rings Ewan with a story that fits, here an order to cancel. Fourth, she asks him to read the code out. Fifth, she types it into her own sign-in, and the system lets her in as Ewan.',
      'This is why the scam works on people who would never type a password into a strange page. The code is real. It comes from the real company, on cue, from the real number, in the same list of texts as the real ones. Nothing about it looks wrong, because nothing about it is wrong. What is wrong is who asks for it. A code is for you to type in, into a page or an app that you opened, and nobody else ever needs to hear it.',
      'The code works once, and only for a few minutes. But for those minutes it is as good as the owner\'s own sign-in, and the caller is on the phone, so she gets it in time.'
    ],
    feature: { step: 'A1', option: 'code' },
    name: [
      'The name for this is {o:codescam}. A {t:code} is what it is after, and the scam is the asking: someone who reached you first wants the number read out or passed on.'
    ] },

  { id: 'again-codescam', kind: 'again', outcome: 'codescam',
    link: 'Ewan\'s call gave you what to point to for {o:codescam}, from one case: {needs:codescam}. Here is a second case with a different story. This time it is a message, nobody is on the phone, and the person asking is a buyer.',
    first: 'ac-phoneorder', second: 'ac-marketplace', step: 'A1',
    instruction: 'Find what the two cases share. Ignore the story (a phone order, a bike) and ignore whether anyone speaks. Look at one thing only: which words ask the person to pass on a code?',
    prompt: { kind: 'phrase', answer: 'A code has just been sent to your phone by mistake. Please send it to me' },
    shared: [
      'Both ask the person to pass on a code that has just come to their phone. In the first the reason is an order to cancel, and in the second it is a code that "went to the wrong number". The reason is only the bait.',
      'What is really going on in the second case is the same as in the first. The buyer is trying to set up an account on Tess\'s phone number, and the service has texted the code to her so that it will be typed in. If Tess sends it on, the buyer gets the account, and it is tied to her number.',
      'The question is {q:A1}, and in both cases the answer is {a:A1.code}. Together with the fact that someone contacted them, that is what {o:codescam} names.'
    ] },

  { id: 'portrait-codescam', kind: 'portrait', outcome: 'codescam',
    link: 'You know what to point to for {o:codescam}. This card fills in the rest of the picture, so that you can spot it in real life, where nobody marks the words for you.',
    typical: [
      'It begins with a contact you did not start: a call, a text or a chat message. The person says there is a problem and that a code will fix it, or says that a code has reached you by mistake.',
      'A real code, from a real company, arrives on your phone or your email while you are talking. The timing is not luck: the scammer is signing in at that moment.',
      'The person asks you to read it out, or to send it on. They give a reason: to stop a payment, to confirm that it is you, to prove that they are real, to get back a code that went to the wrong number.',
      'They stay on the line, or keep messaging, and ask again if you hesitate.',
      'The code works once, and what they do with it, a sign-in or a payment, may be done before you have hung up.',
      'The text that carries the code often says what it is for, and often says never to share it.'
    ],
    not: [
      'A code arriving on your phone is not {o:codescam}. A code arrives every time you sign in or pay online, and when you asked for it and typed it into the page you opened, it is {o:realsignin}. It is {o:codescam} only when someone who contacted you asks you to read it out or send it on.',
      'It is also not {o:phishing}: there is no copied page, and nothing is typed into one.'
    ],
    wild: ['"I\'m sending you a code now. Please read it back to me."', '"It\'s only to cancel the payment."', '"A code was sent to your number by mistake. Can you forward it?"', '"Read me the six digits so that I can confirm it is you."', '"Don\'t share it with anyone else, only with me."'],
    self: 'It reaches you as a phone call that seems to know your bank, as a message from a friend who has "lost" their account, or from a buyer or a seller on a marketplace. It is the scam that beats people who are careful about passwords.',
    ask: '"Why does this person need to hear a code that was sent to me?" There is never a good answer: a code is for me to type in, and no one else needs it.',
    act: [
      'At the moment, three things. First, do not read the code out or send it on, whoever asks and whatever the reason. A real bank, shop or helper never needs it. Second, end the call or stop the chat. Do not stay to argue: the longer you stay, the more reasons they have. Third, read the text that carries the code. It often says what the code is for, such as a payment you did not make, and often says never to share it.',
      'Then use {t:check}: ring the company on a number you already had, such as the one on your card, and tell them that someone is trying to get into your account. If you have already read a code out, ring the company straight away on that number, ask them to stop any payment and to lock the account, change the password, and look at the list of recent sign-ins.'
    ] },

  { id: 'check-codescam', kind: 'check', after: 'codescam',
    case: 'ac-whatsapp',
    ask: { type: 'option', step: 'A1', among: ['password', 'code'] } },

  /* ---------- The look-alike pair: the same code, in your own app or in a caller's ear ---------- */
  { id: 'look-codescam-realsignin', kind: 'lookalike', ledger: 'codescam~realsignin',
    link: 'You have met {o:realsignin} and {o:codescam}. Both can involve the same code, from the same bank, in the same list of texts. This card puts a pair side by side.',
    cases: ['ac-bank-own', 'ac-bank-call'],
    instruction: 'Both cases are about Hana, her bank, a payment of £60 and a code that arrives on her phone. Compare one thing: who asks for the code, and where it goes.',
    prompt: { kind: 'which', option: 'A2.fits', answer: 'ac-bank-own' },
    difference: [
      'In Case A Hana opened her own banking app to pay a bill. The code arrives because of what she did, and she types it into the same app. Nobody else sees it. The answer is {a:A2.fits}, and the case is {o:realsignin}.',
      'In Case B a man rings her, and he is the one who asks for the code: "read it out to me". She did not start anything. The code is just as real as in Case A. The answer is the other one for the same question, and the case is {o:codescam}.',
      'So the code does not tell you which case you are in. The same bank sends the same code in both. What differs is whose hands it is going into: your own app, or a caller\'s ear.'
    ] },

  /* ---------- Two requests in one case: the key's tie-break ---------- */
  { id: 'exc-both', kind: 'exception', ledger: 'phishing~codescam', looksLike: 'codescam', is: 'phishing',
    h: 'A code that comes after a password',
    link: 'So far a password and a code have been two different things, asked for in two different ways. Real scams do not keep to the order. Here is one that asks for both.',
    case: 'ac-held',
    setup: 'There is a code in this case, and a code that comes to your phone is what {o:codescam} is about. Yet this case is {o:phishing}.',
    prompt: { kind: 'phrase', answer: 'The link opens a page that asks for his password' },
    because: [
      'Count what is asked, and in what order. First, Gil is sent to a page that asks for his password. Only after he has typed it does a second window ask for the code. That is two requests, and the second only comes if the first is done.',
      'Every case gets one answer, and where a case asks for two things the answer is the first one, so here the answer is {a:A1.password}. The code here is not the one from the call: nobody is asking Gil to read it out to them. It is a step on the same copied page. The scammer is signing in to the real shop at that moment with the password that Gil has just typed, the real shop has sent the code, and the copied page asks for it so that it can be passed on.',
      'So the code does not make the case {o:codescam}. It makes it a more complete {o:phishing}. The code scam is the one that has no page: a person who contacted you asks you to read a code out or send it on.'
    ],
    take: 'When a case asks for a password and then for a code, put your finger on the password. The password is what the page began by asking for, and the code is what it needs next. The copied page is the thing to leave.' },

  /* ---------- A wrong idea about where a message sits ---------- */
  { id: 'refute-thread', kind: 'refute', about: 'codescam',
    h: 'A wrong idea: "it came in the same thread as my bank\'s real texts"',
    link: 'The scams so far have come as a call, a message or an email, and some of them borrowed the name of a company you really use. Many people take comfort in one more thing: the text sits in the same conversation as the real ones.',
    idea: '"The text sat in the same conversation as my bank\'s real texts, so it must have been from the bank."',
    verdict: 'This is wrong.',
    right: [
      'A text message can be sent so that it shows any name, including the name of your bank, and your phone then files it in the same conversation as the real ones. The name and the conversation are what the sender chose to show, and a scammer chooses them. The same goes for a call: the number that shows on your phone can be made to show any name.',
      'The idea is wrong in the other direction too. A real text from your bank can come from a number you do not know, so a message that is not in the conversation is not thereby a scam.',
      'So where a message sits tells you nothing. Use {q:A2}: did you start it? A caller who rings you, and a text that comes to you, were not started by you, whichever list they sit in.'
    ],
    testedBy: ['cl-thread'] }
]);
