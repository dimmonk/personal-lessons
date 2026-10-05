// Scams, Unit One, part two (first half): the two words that the second kind leans on, the second kind of message (a
// way into one of your accounts), its look-alike pair with the first kind, and the first wrong idea a beginner brings.
// Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  /* ---------- two words the second kind leans on ---------- */
  { id: 'term-code', kind: 'term', term: 'code',
    h: 'The six-digit number your phone shows you',
    link: 'You have met the kind of message that asks nothing. The next kind asks for a way into one of your accounts, and the ways it asks for are described with two words. The first comes now.',
    case: 'g-t-code',
    plain: [
      'When Ana changed her password, the website wanted more than her word that it was her. So it sent a six-digit number to her phone, and she typed that number into the page. A number like this is sent at the moment you do something important: sign in, change a password, pay for something. It shows that whoever is typing also holds your phone or your email.',
      'It works once, and only for a few minutes, so it is no use to anyone a day later. But for those minutes it works for whoever holds it. That is its whole purpose, and it is also the reason it is worth stealing.'
    ] },

  { id: 'term-permission', kind: 'term', term: 'permission',
    h: 'The box that asks you to press Allow',
    link: 'The second word is about a different way into an account, one that does not use a password at all.',
    case: 'g-t-permission',
    plain: [
      'Leo wanted an app to pick out his flight bookings from his email. The app could have asked for his email password, and he would have had to give it away. Instead the app sent him to his email provider, and the provider showed Leo a box: this app would like to read your mail and your calendar, Allow or Cancel. When Leo pressed Allow, the provider gave the app a limited key to his account. Leo never typed his password into the app.',
      'This is how most apps connect to accounts, and it is useful. But it means that pressing Allow gives an app a way into your account that stays open until you take it away, whether or not you ever sign in again. The box is a decision about what the app may do inside your account.'
    ] },

  /* ---------- the second kind: a way into an account ---------- */
  { id: 'meet-access', kind: 'meet', family: 'access',
    link: 'You now have both words. The next kind of message asks you for a way into one of your accounts.',
    case: 'g-pension', mark: 'D1',
    strip: [
      'There is one person, Tariq, and one account of his: his pension.',
      'He went to the page himself, by typing the pension company’s address into his browser.',
      'The page asks him to sign in with his username and password, and he does.',
      'Nobody else is in the case: no caller, and no message with a link in it.',
      'What he is asked for is a way into the account. It is not money, it is not a program on his computer, and it is not facts about himself.'
    ],
    explain: [
      'What you are shown is a request for a way into an account: here, a username and a password typed into a sign-in page. That is all a message of this kind is made of: one account of yours, and a request to type or press something that opens it.',
      'There are three ways a message can ask for that, and the key counts all three as one kind. You can be asked to sign in: a page wants a password, and you type it in. You can be asked for a {t:code}, by typing it in, reading it out or sending it on. Or you can be asked to press Allow on a {t:permission}, so that an app can use your account. Each of the three opens the account in a different way, and for now they are one kind, because in all three the request is for a way into an account.',
      'Notice what the kind does not depend on. Tariq’s sign-in is real, and he started it himself. The next card shows a message that asks for the same thing and is not real. A request to sign in can be an everyday part of using an account, or the first step of a scam, and the first question does not say which. It says only what is being asked: here, a way into an account.',
      'It is a kind of its own because of what a way in is worth. Whoever gets into your email can read it, and use it to reset the password of nearly every other account you have. A way in can be used again and again, until someone shuts it.'
    ],
    feature: { step: 'D1', option: 'access' },
    name: [
      'The key’s answer, and the name of this kind, is {a:D1.access}. After this answer the key asks a further question, and sometimes two, that give a finer name: the name of a kind of scam, or of the real thing that the scams copy. In this unit the answer to this first question is the name.'
    ] },

  { id: 'again-access', kind: 'again', family: 'access',
    link: 'The last card gave you what to point to for {a:D1.access}, from one case: {needs:access}. Here is a second case with a different story. This one arrives as a text.',
    first: 'g-pension', second: 'g-streaming', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a pension, a streaming service) and ignore whether you would trust the message. Look at one thing only: which words ask the person to sign in?',
    prompt: { kind: 'phrase', answer: 'Sign in with your password to unlock it' },
    shared: [
      'Both messages ask for the same thing: a way into an account, by typing a password into a sign-in page. Tariq typed the pension company’s address himself and was asked to sign in. Nell is sent a link by text and is asked to sign in.',
      'There is a difference between them that you may have noticed: Tariq went to the page, and the page came to Nell. That difference matters a great deal, and the key has a question for it. It is not the question this unit teaches. This question asks only what is being requested, and in both cases the answer is the same.',
      'So the answer does not say real or fake. It says what you are being asked for, and that is what {a:D1.access} names.'
    ] },

  { id: 'portrait-access', kind: 'portrait', family: 'access',
    link: 'You know what to point to for {a:D1.access}. This card fills in the rest of the picture, so that you can spot it in real life.',
    typical: [
      'There is an account of yours: email, bank, shopping, a streaming service, work.',
      'You are asked to do one of three things so that someone, or something, can get into it: type a password into a sign-in page; type, read out or send on a {t:code}; or press Allow on a {t:permission}.',
      'The request usually comes with a reason: your account is locked, a payment must be stopped, a document has been shared with you, an app needs to connect.',
      'It can be a page you went to, a message that came to you, a call or a pop-up, and the request is the same in all of them.',
      'Whoever gets a way in can act as you: read your mail, reset other passwords, move money. And they can keep doing it until the way in is shut.'
    ],
    not: [
      'A notice that your account was signed in to from a new phone is not a request for a way into it: it only tells you. A message that says the same and adds "sign in here to secure your account" is a request.',
      'It is also not a request to put something on your phone or computer. If nothing is to be installed, opened or shared, and you are only asked to type something into a page or press Allow, the key’s answer is this one.'
    ],
    wild: ['"Your account has been locked. Sign in to unlock it."', '"Please enter the code we just sent you."', '"Read me the six-digit number on your phone."', '"Allow this app to read your mail?"', '"Confirm it is you: log in below."'],
    self: 'Every time you sign in to something, a code arrives, or an app asks to connect, you are answering this kind of request, usually without thinking. The same words reach you in messages, which is why the habit of typing them in is the thing a copy relies on.',
    ask: '"What would I be typing or pressing here, and would it open one of my accounts?" If it would, the key’s answer is the one for a way into an account.' },

  { id: 'check-access', kind: 'check', after: 'access',
    case: 'g-diary-app',
    ask: { type: 'option', step: 'D1', among: ['nothing', 'access'] } },

  { id: 'look-access-nothing', kind: 'lookalike', ledger: 'access~nothing',
    link: 'You have met two kinds, and they are easy to mix up in one particular way: a real notice and a copy of it can be almost the same message.',
    cases: ['g-sec-app', 'g-sec-link'],
    instruction: 'Both cases are about Priya’s email account and a sign-in from a new device. Compare one thing: does the message ask her to do something, or does it only tell her?',
    prompt: { kind: 'which', option: 'D1.access', answer: 'g-sec-link' },
    difference: [
      'In Case A the notice sits inside Priya’s own mail app, and it only tells her what happened. It says that, if it was not her, she can open the app she is already in and choose Security. Nothing in it is new to her: no link, no number, no sign-in page. The key’s answer is {a:D1.nothing}.',
      'In Case B the email says almost the same thing and then adds "sign in here to secure your account", with an address to go to. Now she is asked to sign in, and the way to do it comes with the message. The key’s answer is {a:D1.access}.',
      'The first sentence of the two is nearly the same. That is what makes this pair dangerous: you cannot tell them apart by how they begin, by the company that is named or by how serious they sound. You can tell them apart by what each asks of you, and by whether what it asks you to use came with the message.'
    ] },

  /* ---------- a wrong idea about how to tell a copy ---------- */
  { id: 'refute-polish', kind: 'refute', about: 'D1',
    h: 'A wrong idea: "a scam is always badly written"',
    link: 'Case B was neatly written, with the right company name and no mistakes. Many people believe that a copy would not be.',
    idea: '"You can always tell a scam. The writing is full of mistakes and the logo looks wrong."',
    verdict: 'This is wrong.',
    right: [
      'Some scams are badly written, and that is where the idea comes from. But a copy of a real message can be exact, with the logo and every word, and making it costs almost nothing. Case B above could be sent by anyone with a real notice to copy. Software can now write neat messages in any style.',
      'The idea is wrong in the other direction as well. If you believe that a tidy message is a safe one, you stop looking at what it asks you to do, and what it asks is written in it, however it looks.',
      'So how a message looks tells you nothing either way. Look at what it asks, using {q:D1}, and when you are unsure, use {t:check}.'
    ],
    testedBy: ['g-claim-polish'] }
]);
