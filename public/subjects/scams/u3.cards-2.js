// Scams, Unit Three, part one (second half): the first copy, a page that wants a password, then its look-alike pair with the real
// sign-in, the real thing that looks like a copy, and the first wrong idea a beginner brings. Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  /* ---------- Phishing ---------- */
  { id: 'meet-phishing', kind: 'meet', outcome: 'phishing',
    link: 'You have the real thing, and the two things that make it real: you started it, and it asks no more than the task needs. The first copy is a copy of a password page, and it is the most common scam of all.',
    case: 'ac-locked', mark: 'A1',
    strip: [
      'There is one person, Sunita, and one email that says it is from her streaming service.',
      'She did not ask for it. It came to her.',
      'It says her account is locked, and gives her a button to unlock it.',
      'The button opens a page that asks her to type her email address and her password.',
      'What she is asked to type is a password.'
    ],
    explain: [
      'What you are shown is a page that wants a password, reached through a message that nobody asked for. That is all it takes, and here is how it goes, in order.',
      'First, the scammer sends the same email to thousands of people. It does not know who has an account with the streaming service. It needs only a few who do. Second, the email gives a reason to hurry: the account is locked. Third, the button leads to a page that the scammer built, with the service\'s logo and layout copied so that it looks right. Fourth, when Sunita types her email address and password, the page does not sign her in. It sends what she typed to the scammer. Fifth, the scammer uses them at once on the real site, and can change the password so that Sunita is locked out.',
      'Nothing was broken into. Sunita typed the password herself, into a page that looked right. The copy only needed her to believe that the page was the real one, and a page can be made to look like any other.',
      'That is why how the page looks cannot be what you look at. What you can look at is how you got there. The real one began with Marta opening her own app. This one began with an email that Sunita did not ask for. And what it asks for, a password, is worth stealing: it works from anywhere, on any device, at any hour, and it keeps working until the owner changes it. An email account is worth more still, because it can be used to reset the passwords of almost everything else you have.'
    ],
    feature: { step: 'A1', option: 'password' },
    name: [
      'The name for this is {o:phishing}. The word is a different spelling of "fishing": the message is the bait, and the password is what is caught. A page that asks for a password, reached from a message you did not ask for, is {o:phishing}.'
    ] },

  { id: 'again-phishing', kind: 'again', outcome: 'phishing',
    link: 'Sunita\'s email gave you what to point to for {o:phishing}, from one case: {needs:phishing}. Here is a second case with a different story. This time it is a work email, and the name at the top is the employer\'s.',
    first: 'ac-locked', second: 'ac-payslip', step: 'A1',
    instruction: 'Find what the two cases share. Ignore the story (a streaming service, a pay stub) and ignore whose name is at the top. Look at one thing only: which words ask the person to type a password?',
    prompt: { kind: 'phrase', answer: 'Sign in with your work email and password to view it' },
    shared: [
      'Both emails ask for a password, to be typed into a page that is reached through a link in an email that came to the person. In the first the reason is a locked account and in the second a pay stub, but the reason is only the bait.',
      'The second password is a work password, which can open the company\'s mail and files as well as the pay stub, and the scammer can use it to write to Paul\'s colleagues as Paul. A work password is worth more than a streaming one, and the request looks just the same.',
      'What you are asked to type is picked out by {q:A1}, and in both cases the answer is {a:A1.password}. Together with the fact that the email came to them, that is what {o:phishing} names.'
    ] },

  { id: 'portrait-phishing', kind: 'portrait', outcome: 'phishing',
    link: 'You know what to point to for {o:phishing}. This card fills in the rest of the picture, so that you can spot it in real life, where nobody marks the words for you.',
    typical: [
      'It starts with a message you did not ask for: a text, an email, a pop-up, a call or a message in a chat. The message gives a reason to act: your account is locked, a payment failed, a document is waiting, a refund is owed.',
      'It gives you a link or a button, and the link leads to a page that asks for a password. The page is a copy, and it can be a perfect one: the logo, the layout and even the address can be made to look right.',
      'The page may ask for more than the password. Often, as soon as you have typed it, a second window asks for a {t:code} as well. The scammer is using the password you just typed on the real site at that moment, and the real site has just sent you a code.',
      'What you type goes to the scammer. They sign in as you from anywhere, often change the password so that you cannot, and use the account to reset the passwords of other accounts.',
      'It is sent to thousands of people at once, so it does not know you. It names a company because some of the people it reaches will have an account there.'
    ],
    not: [
      'A page that asks for a password is not by itself {o:phishing}. If you started the sign-in yourself, it is {o:realsignin}. And a message that tells you your account has a problem, and asks you for nothing, is only news.',
      'It is also not {o:phishing} when the message is real and you did ask for it. The test is the same each time: did it come to you, or did you go to it?'
    ],
    wild: ['"Your account has been locked. Sign in to unlock it."', '"Unusual sign-in detected. Confirm that it is you."', '"Your mailbox is almost full. Sign in to upgrade."', '"Your pay stub is ready. Sign in to view it."', '"You are owed a refund. Sign in to claim it."'],
    self: 'You are most likely to meet it in your email and your texts, and at work: a message that looks like a pay stub, a shared file or a notice from the IT team. Anyone who has ever had trouble signing in is already half ready to believe it.',
    ask: '"Did I ask for this, and how did I get to the page?" If a message brought me there, it is not a page I can trust, whatever it looks like.',
    act: [
      'At the moment, do four things in this order. First, do not tap the link or the button again, and do not type anything into the page. Second, close it. Third, open the app yourself, or type the company\'s address yourself, and look there for the same problem: a real problem will be there too, and if there is nothing there, nothing is lost. If you want to be sure, use {t:check}.',
      'Fourth, if you have already typed the password into the page, do not wait. Change it now, on the real site and from a different device if you can. Change it anywhere else you used the same one, and look at the list of recent sign-ins for any you do not know.',
      'If you use a password manager, an app that fills in passwords for you, notice whether it offers the password on that page. It will not, on a copy, because the address is wrong. That is a free warning.'
    ] },

  { id: 'check-phishing', kind: 'check', after: 'phishing',
    case: 'ac-taxrefund',
    ask: { type: 'phrase', step: 'A1', say: 'Which words ask Mia to type a password? Tap them.',
           answer: "It asks for the user ID and password of Mia's online tax account" } },

  /* ---------- The first look-alike pair: the same page, one started by you and one not ---------- */
  { id: 'look-phishing-realsignin', kind: 'lookalike', ledger: 'phishing~realsignin',
    link: 'You have now met a real one and a copy of one. They are easy to mix up, because both can ask for a password on a page that looks the same. This card puts a pair side by side.',
    cases: ['ac-mail-own', 'ac-mail-text'],
    instruction: 'Both cases are about Dev, his email provider and a mailbox that is almost full, and in both a page asks for his email address and password. Compare one thing: how Dev came to the sign-in.',
    prompt: { kind: 'which', option: 'A2.fits', answer: 'ac-mail-own' },
    difference: [
      'In Case A Dev opens the mail app himself, an app he has used for years, and it shows him a banner about his mailbox. The sign-in comes from what he did next: it came from an app he already had. The answer is {a:A2.fits}, and the case is {o:realsignin}.',
      'In Case B a text arrives from a number he does not know, with a link to a page that has his provider\'s logo. He did not start it: it started with the message. The answer is the other one for the same question, and the case is {o:phishing}.',
      'The same words, a full mailbox and a page that wants the password, can be either. What differs is where each one began.'
    ] },

  { id: 'exc-reset', kind: 'exception', ledger: 'phishing~realsignin', looksLike: 'phishing', is: 'realsignin',
    h: 'A link in an email that is not {o:phishing}',
    link: 'Case B of the last card had a link in a message, and so have the scams so far. This case has a link in an email too, and a page that asks for a password. Here is one that is real.',
    case: 'ac-reset',
    setup: 'There is an email with a link in this case, and a page that wants a password, and that is what {o:phishing} usually looks like. Yet this case is {o:realsignin}.',
    prompt: { kind: 'phrase', answer: "On the store's own website, which he opened himself, he taps 'Forgot password'" },
    because: [
      'Ask what led to the email. Kofi did: a minute earlier, on the store\'s own website, he tapped "Forgot password". The email is the store\'s answer to that. If he had not asked, the same email would be a copy, because nothing would explain why it arrived.',
      'This is why a link in a message cannot be what you look at. The question is whether the message answers something you did. A link that arrives after you asked for it is real, and a link that arrives on its own is not.'
    ],
    take: 'One thing decides this: whether you started it. A link in a message is not an answer to the question either way. If you are ever unsure whether you started something, treat it as not started, and begin again from your own app.' },

  /* ---------- A wrong idea about how to tell a copy ---------- */
  { id: 'refute-padlock', kind: 'refute', about: 'phishing',
    h: 'A wrong idea: "the padlock means the site is safe"',
    link: 'Case B had a page with the company\'s logo on it, and a page can be made to look like anything. Many people look for one more thing before they type a password: the small padlock that a browser shows beside the address.',
    idea: '"It has the padlock, so I know it is safe to sign in."',
    verdict: 'This is wrong.',
    right: [
      'The padlock means one thing: what passes between your browser and the page is scrambled on the way, so that nobody in between can read it. It says nothing about who runs the page. A scammer can get a padlock for a page they built, for almost nothing, and most copies of sign-in pages have one. So a page can have a padlock and still send the password to the scammer, because the scrambled message is addressed to them.',
      'The idea is wrong in the other direction as well. If you believe that the padlock makes a page safe, you stop asking how you came to the page, and that is the one thing a copy cannot fake.',
      'So the padlock tells you nothing either way. Use {q:A2}: did you start it? If a message brought you there, it is not a page to type into, whatever the address bar shows.'
    ],
    testedBy: ['cl-padlock'] }
]);
