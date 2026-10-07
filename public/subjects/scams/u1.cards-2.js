// Scams, Unit One, part one (second half): the two words the second kind leans on, the second kind of message (a way
// into one of your accounts), and its look-alike pair with the first kind. Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  /* ---------- two words the second answer leans on ---------- */
  { id: 'term-code', kind: 'term', term: 'code',
    h: 'The six-digit number your phone shows you',
    link: 'The next answer is about a way into one of your accounts. Two words describe the ways, and the first comes now.',
    case: 'g-t-code',
    plain: [
      'A number like this is sent when you do something important: sign in, change a password or pay. It shows that whoever types it also has your phone or your email.',
      'It works once, for a few minutes, so it is useless a day later. For those few minutes it works for anyone who has it, which is why scammers want it.'
    ] },

  { id: 'term-permission', kind: 'term', term: 'permission',
    h: 'The box that asks you to press Allow',
    link: 'The second word is about a way into an account that uses no password at all.',
    case: 'g-t-permission',
    plain: [
      'Leo never typed his password into the app. The box came from his email provider, and pressing Allow gave the app its own way into his account.',
      'This is how most apps connect to accounts, and it is useful. But Allow opens a door that stays open until you shut it, even if you never sign in again.'
    ] },

  /* ---------- Second: a way into an account ---------- */
  { id: 'meet-access', kind: 'meet', family: 'access',
    link: 'Second: a request for a way into one of your accounts.',
    case: 'g-pension', mark: 'D1',
    explain: [
      'Tariq typed the company’s address himself, and the page asks for his username and password. That is a request for a way into his account. A message can ask for it in three ways: to sign in, to give a {t:code} by typing it, reading it out or passing it on, or to press Allow on a {t:permission}.',
      'A way in is worth a lot. Whoever gets into your email can read it, and can use it to reset the password of nearly every other account you have. And a way in can be used again and again until someone shuts it.'
    ],
    spot: [
      { do: 'Look for a password: Tariq’s page asks for his username and password.', why: 'Whoever has them can sign in as him.' },
      { do: 'Look for a code you are asked to type, read out or pass on: Tariq is asked for none.', why: 'Whoever holds the code can open the account.' },
      { do: 'Look for an Allow button: Tariq sees none.', why: 'Allow lets an app into your account without a password.' }
    ],
    feature: { step: 'D1', option: 'access' },
    name: 'This is {a:D1.access}. Tariq’s sign-in is real, and a copy would ask for exactly the same thing.' },

  { id: 'check-access', kind: 'check', after: 'access',
    case: 'g-diary-app',
    ask: { type: 'option', step: 'D1', among: ['nothing', 'access'] } },

  { id: 'look-access-nothing', kind: 'lookalike', ledger: 'access~nothing',
    link: 'A real notice and a copy of it can read almost the same. These two answers are easy to mix up in just that way.',
    cases: ['g-sec-app', 'g-sec-link'],
    instruction: 'Both stories are about Priya’s email account and a sign-in from a new device. Compare one thing: does the message ask her to do something, or only tell her?',
    prompt: { kind: 'which', option: 'D1.access', answer: 'g-sec-link' },
    difference: [
      'Story A is a notice inside Priya’s own mail app. It only tells her what happened, and if it was not her, she can open the app she is already in and choose Security. No link, number or sign-in page came with it. That is {a:D1.nothing}.',
      'Story B is an email that says almost the same, then adds “sign in here to secure your account”, with an address. Now she is asked to sign in, and the way to do it came with the message. That is {a:D1.access}.',
      'You cannot tell them apart by how they start, which company they name or how serious they sound. Look at what each one asks, and whether what it asks you to use came with the message.'
    ] }
]);
