// Scams, Unit Three, part one (second half): the first copy, a page that wants a password, and its look-alike pair with the real
// sign-in. Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  /* ---------- Phishing ---------- */
  { id: 'meet-phishing', kind: 'meet', outcome: 'phishing',
    link: 'The most common scam of all copies a password page.',
    case: 'ac-locked', mark: 'A1',
    explain: [
      'Sunita did not ask for this email. It came to her, and the page at the end of the link was built by a scammer, with the service\'s logo and layout copied. When she types her password, the page does not sign her in: it sends the password to the scammer, who uses it on the real site at once and can lock her out.',
      'The scammer sends the same email to thousands of people, because a few will have an account there. Nothing was broken into: Sunita typed the password herself, into a page that looked right. A page can be made to look like any other, padlock and all, so how it looks is not what to check. How you got there is. Marta opened her own app, and Sunita followed an email she did not ask for.'
    ],
    spot: [
      { do: 'Find how you got there: an email Sunita did not ask for.', why: 'It always starts with something that came to you: a message, a call or a pop-up.' },
      { do: 'Find the link or button: "Tap here to unlock it."', why: 'It leads to a page the scammer built.' },
      { do: 'Find what the page asks you to type: her email address and password.', why: 'A page that wants a password, reached from a message, is the whole scam.' }
    ],
    feature: { step: 'A1', option: 'password' },
    name: [
      'This is {o:phishing}. The word is another spelling of "fishing": the message is the bait, and the password is what is caught.'
    ],
    act: [
      { do: 'Close the page and type nothing.', why: 'Whatever you type goes straight to the scammer.' },
      { do: 'Open the app yourself, or type the address yourself.', why: 'A real problem with your account will be there too.' },
      { do: 'If you already typed the password, change it now on the real site, and anywhere else you used it.', why: 'The scammer tries it on the real site at once.' }
    ] },

  { id: 'check-phishing', kind: 'check', after: 'phishing',
    case: 'ac-taxrefund',
    ask: { type: 'phrase', step: 'A1', say: 'Which words ask Mia to type a password? Tap them.',
           answer: "It asks for the user ID and password of Mia's online tax account" } },

  /* ---------- The first look-alike pair: the same page, one started by you and one not ---------- */
  { id: 'look-phishing-realsignin', kind: 'lookalike', ledger: 'phishing~realsignin',
    link: 'Both can ask for a password on a page that looks the same.',
    cases: ['ac-mail-own', 'ac-mail-text'],
    instruction: 'Both stories are about Dev, his email provider and a nearly full mailbox, and in both a page asks for his email address and password. Compare one thing: how Dev got to the sign-in.',
    prompt: { kind: 'which', option: 'A2.fits', answer: 'ac-mail-own' },
    difference: [
      'In Story A, Dev opens the mail app himself, and the sign-in comes from what he does next. That is {o:realsignin}.',
      'In Story B, a text from a number he does not know sends him to a page with his provider\'s logo. It started with the message. That is {o:phishing}.',
      'The same words, a full mailbox and a page that wants the password, can be either. What differs is where each one began.'
    ] }
]);
