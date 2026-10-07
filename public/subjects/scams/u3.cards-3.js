// Scams, Unit Three, part one (third quarter): the second copy, someone asking for the code that has just come to your phone, its
// look-alike pair with the real sign-in, and the story that asks for a password and then a code. Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  /* ---------- One-time code scam ---------- */
  { id: 'meet-codescam', kind: 'meet', outcome: 'codescam',
    link: 'The first copy needed a fake page. This one needs no page at all, because the code it asks for is real.',
    case: 'ac-phoneorder', mark: 'A1',
    explain: [
      'The caller is already trying to sign in to Ewan\'s account. His phone company\'s system does what it is built to do: it texts a real {t:code} to Ewan. The caller phones him with a story that fits and asks him to read the code out. She types it in, and she is in as Ewan.',
      'This works on people who would never type a password into a strange page, because the code is real. It comes from the real company, in the same list of texts as the real ones. What is wrong is who asks for it. A code is for you to type into a page or an app that you opened, and nobody else ever needs to hear it.'
    ],
    spot: [
      { do: 'Find the code that just arrived: a text with six digits.', why: 'It is a real code, sent by a real company.' },
      { do: 'Find who contacted you first: the woman who phoned Ewan.', why: 'A real code answers something you did, and Ewan did nothing.' },
      { do: 'Find where the code is meant to go: she asks him to read it out to her.', why: 'A real code goes only into a page or an app you opened.' }
    ],
    feature: { step: 'A1', option: 'code' },
    name: [
      'This is {o:codescam}: someone who reached you first wants a code read out or passed on.'
    ],
    act: [
      { do: 'Never read out or send on a code, whoever asks and whatever the reason.', why: 'With the code, they are in your account.' },
      { do: 'End the call or the chat.', why: 'Nothing the caller says after this is worth hearing.' },
      { do: 'Call the company at a number you already had, such as the one on your card. This is {t:check}.', why: 'It is the only sure way to learn whether the request was real.' },
      { do: 'If you already read a code out, call the company right away, ask them to lock the account, and change the password.', why: 'Until you do, the caller is inside.' }
    ] },

  { id: 'check-codescam', kind: 'check', after: 'codescam',
    case: 'ac-whatsapp',
    ask: { type: 'option', step: 'A1', among: ['password', 'code'] } },

  /* ---------- The look-alike pair: the same code, in your own app or in a caller's ear ---------- */
  { id: 'look-codescam-realsignin', kind: 'lookalike', ledger: 'codescam~realsignin',
    link: 'Both can involve the same code, from the same bank, in the same list of texts.',
    cases: ['ac-bank-own', 'ac-bank-call'],
    instruction: 'Both stories are about Hana, her bank, a payment of $60 and a code that arrives on her phone. Compare one thing: who asks for the code, and where it goes.',
    prompt: { kind: 'which', option: 'A2.fits', answer: 'ac-bank-own' },
    difference: [
      'In Story A, Hana opens her own banking app to pay a bill. The code arrives because of what she did, and she types it into the same app. Nobody else sees it. That is {o:realsignin}.',
      'In Story B, a man calls her and asks her to read the code out. She started nothing, and the code is just as real as in Story A. That is {o:codescam}.',
      'The code does not tell you which story you are in. What differs is where it goes: into your own app, or into a caller\'s ear.'
    ] },

  /* ---------- Two requests in one story: the tie-break ---------- */
  { id: 'exc-both', kind: 'exception', ledger: 'phishing~codescam', looksLike: 'codescam', is: 'phishing',
    h: 'A code that comes after a password',
    link: 'A scam does not have to keep to one request. Here is one that asks for both.',
    case: 'ac-held',
    setup: 'There is a code in this story, and a code that comes to your phone is what {o:codescam} is about. Yet this story is {o:phishing}.',
    prompt: { kind: 'phrase', answer: 'The link opens a page that asks for his password' },
    because: [
      'Look at the order. First a page asks Gil for his password. Only after he types it does a second window ask for the code. At that moment the scammer is signing in to the real store with Gil\'s password, the real store texts Gil a code, and the fake page asks for it so the scammer can use it.',
      'When a story asks for two things, the answer is the first one, so here it is {a:A1.password}. The code makes it a fuller {o:phishing}, not a {o:codescam}: nobody is asking Gil to read it out to them.'
    ],
    take: 'When a page asks for a password and then for a code, go by the password. The fake page is the thing to leave.' }
]);
