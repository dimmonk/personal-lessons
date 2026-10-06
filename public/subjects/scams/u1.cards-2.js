// Scams, Unit One, part one (second half): the two words the second kind leans on, the second kind of message (a way
// into one of your accounts), and its look-alike pair with the first kind. Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  /* ---------- two words the second kind leans on ---------- */
  { id: 'term-code', kind: 'term', term: 'code',
    h: 'The six-digit number your phone shows you',
    link: 'The next kind asks for a way into one of your accounts. Two words describe the ways, and the first comes now.',
    case: 'g-t-code',
    plain: [
      'When Ana changed her password, the website sent a six-digit number to her phone, and she typed it into the page. A number like this is sent when you do something important: sign in, change a password, pay for something. It shows that whoever is typing also holds your phone or your email.',
      'It works once, and only for a few minutes, so it is no use to anyone a day later. But for those minutes it works for whoever holds it, which is also why it is worth stealing.'
    ] },

  { id: 'term-permission', kind: 'term', term: 'permission',
    h: 'The box that asks you to press Allow',
    link: 'The second word is about a way into an account that does not use a password at all.',
    case: 'g-t-permission',
    plain: [
      'Leo wanted an app to pick out his flight bookings from his email. The app sent him to his email provider, which showed a box: this app would like to read your mail and your calendar, Allow or Cancel. When Leo pressed Allow, the app got limited access to his account, and he never typed his password into it.',
      'This is how most apps connect to accounts, and it is useful. But pressing Allow gives an app a way into your account that stays open until you take it away, whether or not you ever sign in again.'
    ] },

  /* ---------- the second kind: a way into an account ---------- */
  { id: 'meet-access', kind: 'meet', family: 'access',
    link: 'The next kind of message asks you for a way into one of your accounts.',
    case: 'g-pension', mark: 'D1',
    strip: [
      'There is one person, Tariq, and one account of his: his retirement plan.',
      'He typed the company’s address into his browser himself. The page asks him to sign in with his username and password, and he does.',
      'What he is asked for is a way into the account: not money, not a program on his computer, and not facts about himself.'
    ],
    explain: [
      'What you are shown is a request for a way into an account: here, a username and a password typed into a sign-in page. There are three ways a message can ask for that, and all three are one kind. You can be asked to sign in. You can be asked for a {t:code}, by typing it in, reading it out or sending it on. Or you can be asked to press Allow on a {t:permission}, so that an app can use your account.',
      'It is a kind of its own because of what a way in is worth. Whoever gets into your email can read it, and can use it to reset the password of nearly every other account you have. A way in can be used again and again, until someone shuts it.',
      'Tariq’s sign-in is real, and he started it himself. The same request can also be the first step of a scam. The question does not say which; it says only what is being asked.'
    ],
    feature: { step: 'D1', option: 'access' },
    name: 'The answer is {a:D1.access}.' },

  { id: 'check-access', kind: 'check', after: 'access',
    case: 'g-diary-app',
    ask: { type: 'option', step: 'D1', among: ['nothing', 'access'] } },

  { id: 'look-access-nothing', kind: 'lookalike', ledger: 'access~nothing',
    link: 'A real notice and a copy of it can be almost the same message, and these two kinds are easy to mix up in just that way.',
    cases: ['g-sec-app', 'g-sec-link'],
    instruction: 'Both cases are about Priya’s email account and a sign-in from a new device. Compare one thing: does the message ask her to do something, or does it only tell her?',
    prompt: { kind: 'which', option: 'D1.access', answer: 'g-sec-link' },
    difference: [
      'In Case A the notice sits inside Priya’s own mail app and only tells her what happened. If it was not her, she can open the app she is already in and choose Security. Nothing in it is new to her: no link, no number, no sign-in page. The answer is {a:D1.nothing}.',
      'In Case B the email says almost the same thing and then adds "sign in here to secure your account", with an address to go to. Now she is asked to sign in, and the way to do it comes with the message. The answer is {a:D1.access}.',
      'You cannot tell them apart by how they begin, by the company named or by how serious they sound. You can tell them apart by what each asks of you, and by whether what it asks you to use came with the message.'
    ] }
]);
