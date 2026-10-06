// Scams, Unit Three, part one (second half): the first copy, a page that wants a password, and its look-alike pair with the real
// sign-in. Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  /* ---------- Phishing ---------- */
  { id: 'meet-phishing', kind: 'meet', outcome: 'phishing',
    link: 'The first copy is a copy of a password page, and it is the most common scam of all.',
    case: 'ac-locked', mark: 'A1',
    strip: [
      'There is one person, Sunita, and one email that says it is from her streaming service.',
      'She did not ask for it. It came to her.',
      'It says her account is locked, and gives her a button to unlock it.',
      'The button opens a page that asks her to type her email address and her password.',
      'What she is asked to type is a password.'
    ],
    explain: [
      'The scammer sends the same email to thousands of people, because a few will have an account there. The button leads to a page the scammer built, with the service\'s logo and layout copied. When Sunita types her password, the page does not sign her in: it sends the password to the scammer, who uses it on the real site at once and can lock her out.',
      'Nothing was broken into. Sunita typed the password herself, into a page that looked right, and a page can be made to look like any other, padlock and all. So how it looks cannot be what you check. What you can check is how you got there: Marta opened her own app, and Sunita followed an email she did not ask for.'
    ],
    feature: { step: 'A1', option: 'password' },
    name: [
      'The name for this is {o:phishing}. The word is a different spelling of "fishing": the message is the bait, and the password is what is caught.'
    ],
    act: [
      'Do not tap the link again and do not type anything. Close it, then open the app yourself or type the address yourself: a real problem will be there too. If you have already typed the password, change it now on the real site, and anywhere else you used the same one.'
    ] },

  { id: 'check-phishing', kind: 'check', after: 'phishing',
    case: 'ac-taxrefund',
    ask: { type: 'phrase', step: 'A1', say: 'Which words ask Mia to type a password? Tap them.',
           answer: "It asks for the user ID and password of Mia's online tax account" } },

  /* ---------- The first look-alike pair: the same page, one started by you and one not ---------- */
  { id: 'look-phishing-realsignin', kind: 'lookalike', ledger: 'phishing~realsignin',
    link: 'Both can ask for a password on a page that looks the same. This card puts a pair side by side.',
    cases: ['ac-mail-own', 'ac-mail-text'],
    instruction: 'Both cases are about Dev, his email provider and a mailbox that is almost full, and in both a page asks for his email address and password. Compare one thing: how Dev came to the sign-in.',
    prompt: { kind: 'which', option: 'A2.fits', answer: 'ac-mail-own' },
    difference: [
      'In Case A Dev opens the mail app himself, an app he has used for years, and it shows him a banner about his mailbox. The sign-in came from what he did next. The answer is {a:A2.fits}, and the case is {o:realsignin}.',
      'In Case B a text arrives from a number he does not know, with a link to a page that has his provider\'s logo. It started with the message. The answer is the other one for the same question, and the case is {o:phishing}.',
      'The same words, a full mailbox and a page that wants the password, can be either. What differs is where each one began.'
    ] }
]);
