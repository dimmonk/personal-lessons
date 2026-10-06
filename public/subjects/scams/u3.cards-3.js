// Scams, Unit Three, part one (third quarter): the second copy, someone asking for the code that has just come to your phone, its
// look-alike pair with the real sign-in, and the case that asks for a password and then a code. Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  /* ---------- One-time code scam ---------- */
  { id: 'meet-codescam', kind: 'meet', outcome: 'codescam',
    link: 'The first copy needed a copied page. This one needs no page at all, because what it asks for is real.',
    case: 'ac-phoneorder', mark: 'A1',
    strip: [
      'There is one person, Ewan, and a caller who phoned him.',
      'The caller says a phone has been ordered on his account, and that a code will cancel the order.',
      'A text arrives on his phone with six digits in it: a code that has just come to him.',
      'The caller asks him to read the digits out to her.',
      'No page is involved, and nothing is copied.'
    ],
    explain: [
      'The caller is already trying to sign in to Ewan\'s account. The company\'s system does what it is built to do: it texts a real {t:code} to the account holder. The caller phones Ewan with a story that fits and asks him to read the code out. She types it in, and she is in as Ewan.',
      'This works on people who would never type a password into a strange page, because the code is real. It comes from the real company, in the same list of texts as the real ones. What is wrong is who asks for it. A code is for you to type into a page or an app that you opened, and nobody else ever needs to hear it.'
    ],
    feature: { step: 'A1', option: 'code' },
    name: [
      'The name for this is {o:codescam}: someone who reached you first wants a code read out or passed on.'
    ],
    act: [
      'Never read out or send on a code, whoever asks and whatever the reason. End the call or the chat, then use {t:check}: call the company at a number you already had, such as the one on your card. If you have already read a code out, call them right away, ask them to lock the account, and change the password.'
    ] },

  { id: 'check-codescam', kind: 'check', after: 'codescam',
    case: 'ac-whatsapp',
    ask: { type: 'option', step: 'A1', among: ['password', 'code'] } },

  /* ---------- The look-alike pair: the same code, in your own app or in a caller's ear ---------- */
  { id: 'look-codescam-realsignin', kind: 'lookalike', ledger: 'codescam~realsignin',
    link: 'Both can involve the same code, from the same bank, in the same list of texts. This card puts a pair side by side.',
    cases: ['ac-bank-own', 'ac-bank-call'],
    instruction: 'Both cases are about Hana, her bank, a payment of $60 and a code that arrives on her phone. Compare one thing: who asks for the code, and where it goes.',
    prompt: { kind: 'which', option: 'A2.fits', answer: 'ac-bank-own' },
    difference: [
      'In Case A Hana opened her own banking app to pay a bill. The code arrives because of what she did, and she types it into the same app. Nobody else sees it. The answer is {a:A2.fits}, and the case is {o:realsignin}.',
      'In Case B a man calls her and asks her to read the code out. She did not start anything. The code is just as real as in Case A. The answer is the other one for the same question, and the case is {o:codescam}.',
      'The code does not tell you which case you are in. What differs is whose hands it is going into: your own app, or a caller\'s ear.'
    ] },

  /* ---------- Two requests in one case: the tie-break ---------- */
  { id: 'exc-both', kind: 'exception', ledger: 'phishing~codescam', looksLike: 'codescam', is: 'phishing',
    h: 'A code that comes after a password',
    link: 'A scam does not have to keep to one request. Here is one that asks for both.',
    case: 'ac-held',
    setup: 'There is a code in this case, and a code that comes to your phone is what {o:codescam} is about. Yet this case is {o:phishing}.',
    prompt: { kind: 'phrase', answer: 'The link opens a page that asks for his password' },
    because: [
      'Count what is asked, and in what order. First Gil is sent to a page that asks for his password. Only after he has typed it does a second window ask for the code. The scammer is signing in to the real store at that moment with the password Gil just typed, the real store has sent the code, and the copied page asks for it so that it can be passed on.',
      'Where a case asks for two things, the answer is the first one, so here it is {a:A1.password}. The code makes it a more complete {o:phishing}, not a {o:codescam}: nobody is asking Gil to read it out to them.'
    ],
    take: 'When a case asks for a password and then for a code, put your finger on the password. The copied page is the thing to leave.' }
]);
