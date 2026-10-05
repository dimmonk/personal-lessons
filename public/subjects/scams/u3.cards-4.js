// Scams, Unit Three, part three: the third copy, an app that asks you to press Allow for far more than its job needs, and its
// look-alike pair with the real sign-in. Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  /* ---------- App permission scam ---------- */
  { id: 'meet-appscam', kind: 'meet', outcome: 'appscam',
    link: 'The first two copies asked for something you type: a password, then a code. The third asks for something you press, and it needs neither a password nor a code.',
    case: 'ac-shareddoc', mark: 'A1',
    strip: [
      'There is one person, Rafa, and an email that says a colleague has shared a document with him.',
      'He did not ask for it. It came to him, and its link leads to a {t:permission} from his own email provider.',
      'The {t:permission} asks him to press Allow so that an app he has never heard of, Docs Sync Pro, can use his account.',
      'What the app asks to do is far more than opening a document: read, send and delete all his email, and see all his contacts.'
    ],
    explain: [
      'What you are shown is a {t:permission} that asks you to press Allow. It is not a copy. It comes from Rafa\'s real email provider, with the real name and logo, and it lists real things. That is why this is the hardest of the three scams to spot: nothing on the {t:permission} is false. What is false is the reason Rafa was given for pressing Allow, a shared document.',
      'Here is how it goes, in order. First, the scammer builds an app and registers it with the email provider, which is quick and costs nothing, and gives it an ordinary name. Second, an email with a link goes to many people, and the link leads to the provider\'s own {t:permission} for the scammer\'s app. Third, Rafa presses Allow. Fourth, the provider gives the app a key to Rafa\'s account, and the key is a standing one. Fifth, the app can now read his mail, send mail as him, delete it and see his contacts, without ever seeing his password, and it keeps the key until Rafa takes it away.',
      'Notice what it does not need. It does not need Rafa\'s password, so changing the password afterwards does not remove it. It does not need him to sign in again, so no warning about a new sign-in appears. The way in is the Allow, and it stays open until someone shuts it.',
      'And notice what the {t:permission} asks for. A document needs to be opened. It does not need every email Rafa has ever received, or the right to send mail in his name, or to delete anything. The gap between what the reason needs and what the {t:permission} asks for is one of the two things the key looks at.'
    ],
    feature: { step: 'A1', option: 'allow' },
    name: [
      'The name for this is {o:appscam}. It is named for what the scam is after: your permission for an app, given on a {t:permission}, and then used for far more than you were told.'
    ] },

  { id: 'again-appscam', kind: 'again', outcome: 'appscam',
    link: 'Rafa\'s {t:permission} gave you what to point to for {o:appscam}, from one case: {needs:appscam}. Here is a second case with a different story. This one is an advert, and the app is offering something.',
    first: 'ac-shareddoc', second: 'ac-photoprint', step: 'A1',
    instruction: 'Find what the two cases share. Ignore the story (a document, free photo prints) and ignore the name of the app. Look at one thing only: which words say what the app is to be allowed to do?',
    prompt: { kind: 'phrase', answer: "Her email provider's permission screen asks whether PrintPal may read, send and delete all her email" },
    shared: [
      'Both {t:permission}s come from the person\'s own email provider, and both ask for the same things: to read all the mail, to send mail and to delete it. In the first the reason is a document, and in the second it is free photo prints. Neither of them needs to read anyone\'s email.',
      'The names Docs Sync Pro and PrintPal are only names. A scammer can choose any name, and the provider shows whatever name the app was registered with.',
      'The question is {q:A1}, and in both cases the answer is {a:A1.allow}. Together with the fact that the app came to them with a reason that does not need what it asks for, that is what {o:appscam} names.'
    ] },

  { id: 'portrait-appscam', kind: 'portrait', outcome: 'appscam',
    link: 'You know what to point to for {o:appscam}. This card fills in the rest of the picture, so that you can spot it in real life, where nobody marks the words for you.',
    typical: [
      'It begins with a lure that sends you to an app: a shared document, a quiz, a prize, a free offer, a tool that promises to scan your mail or tidy your photos.',
      'The app sends you to your account provider, and the provider shows you a {t:permission}. The {t:permission} is real. It names the app, and it lists what the app wants to do.',
      'The list is the thing to read. What it asks for is much more than the reason given: reading, sending and deleting all your mail, or seeing all your contacts or files.',
      'When you press Allow, the provider gives the app a standing key to your account. You do not give a password, and you do not sign in again for it.',
      'The app can then read your mail, send mail as you and use the account to reset other passwords, for as long as the key stays.',
      'The app is not a hacker breaking in. It is an app that you let in, and it stays until you remove it in your account\'s settings.'
    ],
    not: [
      'A {t:permission} that asks you to press Allow is not by itself {o:appscam}. If you went looking for the app yourself and it asks only what its job needs, it is {o:realsignin}: a calendar app that asks to see your calendar is fine.',
      'And a copied page that asks for a password is {o:phishing}, not this. Here the {t:permission} is real and no password is typed.'
    ],
    wild: ['"Allow this app to open the document."', '"Grant access so that we can scan your inbox for threats."', '"Approve this app to continue."', '"Connect your email account to claim your prize."', '"Sign in with your email account."'],
    self: 'You meet the real {t:permission} whenever you connect an app to your email, your calendar or your photos. The copy looks the same. The habit that protects you is to read the list: the {t:permission} tells you exactly what you are about to give.',
    ask: '"Did I go looking for this app, and does what it asks for match what I want it to do?" A document needs to be opened. It does not need all of my mail.',
    act: [
      'At the moment, press Cancel, or close the page, without pressing Allow. You lose nothing: if it was real, you can start again from your own app. Read the list in the {t:permission} before you decide anything else. If it says read, send and delete all your email, or see all your contacts, for a job that needs far less, that alone is enough to say no.',
      'If you have already pressed Allow, the way to end it is to remove the app. Open your account\'s security or privacy settings, look for a list called connected apps, apps with access or third-party apps, and remove anything you do not know. Changing the password does not remove it, because the app never used the password. Then look through your sent mail for anything you did not send, and warn your contacts that mail from you may not be from you.'
    ] },

  { id: 'check-appscam', kind: 'check', after: 'appscam',
    case: 'ac-fitness',
    ask: { type: 'option', step: 'A1', among: ['password', 'code', 'allow'] } },

  /* ---------- The look-alike pair: the same box, an app you went looking for, or one that came to you ---------- */
  { id: 'look-appscam-realsignin', kind: 'lookalike', ledger: 'appscam~realsignin',
    link: 'You have met a real Allow and a scam that uses one. The {t:permission} looks the same in both, because it is the same provider\'s {t:permission}. This card puts a pair side by side.',
    cases: ['ac-planner-own', 'ac-mail-doc'],
    instruction: 'Both cases are about Omar and the {t:permission} that his email provider shows when an app asks to connect, and in both the {t:permission} has an Allow button. Compare two things: how Omar came to the app, and what the {t:permission} asks the app to be allowed to do.',
    prompt: { kind: 'which', option: 'A2.fits', answer: 'ac-planner-own' },
    difference: [
      'In Case A Omar went looking for a meeting planner himself, in the app list of his own provider. The {t:permission} asks to see his calendar, and nothing else, which is what a planner needs. The key\'s answer is {a:A2.fits}, and the case is {o:realsignin}.',
      'In Case B a text from a number he does not know sends him to the same kind of {t:permission}. He did not go looking for anything, and the {t:permission} asks to read, send and delete all his email, which free storage has no use for. The key\'s answer is the other one for the same question, and the case is {o:appscam}.',
      'The {t:permission} is the real {t:permission} both times, with the real provider\'s name. So the {t:permission} cannot tell you which case you are in. What tells you is who started it, and whether what it asks matches what you wanted.'
    ] }
]);
