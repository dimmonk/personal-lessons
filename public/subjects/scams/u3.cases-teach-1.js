// Scams, Unit Three: cases shown inside cards, part one: the real sign-in and phishing.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// Every case here is about a way into an account, so every route starts with the first question's answer for that (D1: access).
// A1 is "what does it want you to type in or press?" and A2 is "does it fit something you started?".
// cues[STEP] is the exact phrase in the text that decides that step (or a list of phrases); the app marks it.
// segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// Field guide: see u1.cases-drill-1.js.

FC.cases('scams', 'u3', [

  /* ---------- Real sign-in ---------- */
  { id: 'ac-energy', use: 'teach', tier: 'clean', setting: 'home', topic: 'an energy app opened to check usage', name: 'The energy app',
    text: "Marta wants to check how much electricity she used last month. She opens the energy company's app, which has been on her phone since last winter. It asks for her email address and password, and she types them in.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] },
    cues: { D1: 'It asks for her email address and password', A1: 'her email address and password',
            A2: "She opens the energy company's app, which has been on her phone since last winter" } },

  { id: 'ac-checkout', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a store checkout and a bank text', name: 'The boots and the code',
    text: "Imran is buying a pair of boots. He goes to the store's website by typing its address, fills his basket and pays by card. His bank then texts him a code, and the store's payment page asks for it. He types the code into that same page.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['code'], A2: ['fits'] },
    cues: { D1: "the store's payment page asks for it", A1: 'His bank then texts him a code',
            A2: "He goes to the store's website by typing its address" },
    segments: [
      { text: 'Imran is buying a pair of boots', note: 'This is what he wants to do. It gives him a reason to be at a store, and it does not say how he came to the page.' },
      { text: "He goes to the store's website by typing its address, fills his basket and pays by card" },
      { text: "His bank then texts him a code, and the store's payment page asks for it", note: 'This is the code arriving, and the page that asks for it. Both come because of what he did. The words that show he started it are the ones before.' },
      { text: 'He types the code into that same page', note: 'This shows where the code goes: into the page he opened himself. It is true, and it comes after the words that show he started it.' }
    ] },

  { id: 'ac-calendar', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a running club app',
    text: "Zainab joins a running club. She searches her phone's app store for the club's app and opens it. A permission screen says: 'Run Club would like to see your calendar, so that it can show your training days.' She presses Allow.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['allow'], A2: ['fits'] },
    cues: { D1: 'Run Club would like to see your calendar, so that it can show your training days',
            A1: 'Run Club would like to see your calendar, so that it can show your training days',
            A2: "She searches her phone's app store for the club's app and opens it" },
    segments: [
      { text: 'Zainab joins a running club', note: 'This is the story. It does not say how she came to the app.' },
      { text: "She searches her phone's app store for the club's app and opens it" },
      { text: "A permission screen says: 'Run Club would like to see your calendar, so that it can show your training days.'", note: 'This is what the app asks for, and it suits a running club. It does not say who started things: that is in the sentence before.' },
      { text: 'She presses Allow', note: 'This is what she does when the {t:permission} appears. The words that show she started it come before.' }
    ],
    reason: { A2: "Zainab went looking for the app herself, in the app store that was on her phone: {cue:A2}. Nothing came to her. And the {t:permission} asks only to see her calendar, which is all a running club's app needs." } },

  { id: 'ac-mail-own', use: 'teach', tier: 'clean', setting: 'home', topic: 'a full mailbox, opened in the app', name: 'The full mailbox, in the app',
    text: "Dev opens the mail app he has used for years. A banner at the top says his mailbox is almost full. He taps 'Manage storage', and the app asks him to sign in again with his email address and password. He types them in.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] },
    cues: { D1: 'sign in again with his email address and password', A1: 'his email address and password', A2: 'Dev opens the mail app he has used for years' } },

  { id: 'ac-bank-own', use: 'teach', tier: 'clean', setting: 'money', topic: 'a bank text typed in the banking app', name: 'The bill and the code',
    text: "Hana wants to pay a bill, so she opens her banking app. To approve the payment of $60, the app says it has sent a code to her phone. The code arrives and she types it into the app.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['code'], A2: ['fits'] },
    cues: { D1: 'she types it into the app', A1: 'The code arrives', A2: 'Hana wants to pay a bill, so she opens her banking app' } },

  { id: 'ac-planner-own', use: 'teach', tier: 'clean', setting: 'work', topic: 'a meeting planner connected to a calendar', name: 'The meeting planner',
    text: "Omar wants one place to see all his meetings. He finds a meeting-planner app himself, in the app list of his email provider's own site, and connects it. His provider's permission screen says that the planner would like to see his calendar, and nothing else. He presses Allow.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['allow'], A2: ['fits'] },
    cues: { D1: 'He presses Allow', A1: "the planner would like to see his calendar, and nothing else",
            A2: "He finds a meeting-planner app himself, in the app list of his email provider's own site, and connects it" } },

  { id: 'ac-reset', use: 'teach', tier: 'misleading', setting: 'shopping', topic: 'a reset email he asked for', name: 'The password reset',
    text: "Kofi is locked out of an online store after three wrong guesses at his password. On the store's own website, which he opened himself, he taps 'Forgot password'. A minute later an email arrives with a link: 'Choose a new password'. He taps the link and types a new password.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] },
    cues: { D1: 'Choose a new password', A1: 'types a new password',
            A2: "On the store's own website, which he opened himself, he taps 'Forgot password'" },
    segments: [
      { text: 'Kofi is locked out of an online store after three wrong guesses at his password', note: 'This tells you why he needs to get in. It does not show who started the reset.' },
      { text: "On the store's own website, which he opened himself, he taps 'Forgot password'" },
      { text: "A minute later an email arrives with a link: 'Choose a new password'", note: 'This is the part that looks like a copy: an email with a link to a page that wants a password. It is the answer to what he did a minute earlier, so by itself it settles nothing.' },
      { text: 'He taps the link and types a new password', note: 'This is what he does with the email. What matters is what led to the email, and that is in the second sentence.' }
    ] },

  { id: 'ac-chk-a2', use: 'check', tier: 'clean', setting: 'money', topic: 'a retirement plan looked at using a yearly letter',
    text: "Greta wants to look at her retirement plan. She types the address printed on her yearly statement into her computer. The page asks for her username and password, and she types them in.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] },
    cues: { D1: 'The page asks for her username and password', A1: 'her username and password', A2: 'She types the address printed on her yearly statement into her computer' },
    reason: { A2: 'Greta decided to look at her retirement plan and used an address she already had: {cue:A2}. Nothing was sent to her, and the page asks only for what signing in needs.' } },

  /* ---------- Phishing ---------- */
  { id: 'ac-locked', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a locked streaming service', name: 'The locked streaming account',
    text: "Sunita gets an email that says it is from her streaming service: 'Your account has been locked after a sign-in from another country. Tap here to unlock it.' The button opens a page with the service's logo. It asks her to type her email address and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'It asks her to type her email address and password', A1: 'It asks her to type her email address and password',
            A2: "Sunita gets an email that says it is from her streaming service" } },

  { id: 'ac-payslip', use: 'teach', tier: 'clean', setting: 'work', topic: 'a pay stub email', name: 'The pay stub email',
    text: "Paul gets an email that looks like it is from his company's payroll team: 'Your pay stub for October is ready. Sign in with your work email and password to view it.' The link goes to a page with the company's name at the top.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'Sign in with your work email and password to view it', A1: 'Sign in with your work email and password to view it',
            A2: "Paul gets an email that looks like it is from his company's payroll team" },
    segments: [
      { text: "Paul gets an email that looks like it is from his company's payroll team", note: 'This says who the email claims to be from. A copy can claim to be from anyone, so it does not show what is being asked.' },
      { text: 'Your pay stub for October is ready', note: 'This is the reason given for the email. It is not what the email asks Paul to do.' },
      { text: 'Sign in with your work email and password to view it' },
      { text: "The link goes to a page with the company's name at the top", note: 'This is how the page looks. A look can be copied, and it does not say what is asked.' }
    ] },

  { id: 'ac-taxrefund', use: 'check', tier: 'clean', setting: 'government', topic: 'a tax refund text',
    text: "A text says it is from the IRS: 'You are owed a refund of $312. Sign in to your online tax account to claim it.' The link opens a page with the IRS seal. It asks for the user ID and password of Mia's online tax account.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: "It asks for the user ID and password of Mia's online tax account", A1: "It asks for the user ID and password of Mia's online tax account",
            A2: 'A text says it is from the IRS' },
    segments: [
      { text: 'A text says it is from the IRS', note: 'This says who the text claims to be from. A copy can claim that too, and it is not what the page asks for.' },
      { text: 'You are owed a refund of $312', note: 'This is the lure, the reason to act. It is not what Mia is asked to type.' },
      { text: "The link opens a page with the IRS seal", note: 'This is how the page looks. A look can be copied.' },
      { text: "It asks for the user ID and password of Mia's online tax account" }
    ],
    reason: { A1: "The page asks Mia to type a user ID and a password: {cue:A1}. That is a password, whatever the page looks like and whatever the refund story says." } },

  { id: 'ac-mail-text', use: 'teach', tier: 'clean', setting: 'home', topic: 'a full mailbox, reached by a text', name: 'The full mailbox, by text',
    text: "Dev gets a text from a number he does not know: 'Your mailbox is almost full. Sign in now to upgrade, or your emails will be deleted.' The link opens a page with his email provider's logo. It asks for his email address and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'It asks for his email address and password', A1: 'It asks for his email address and password',
            A2: 'Dev gets a text from a number he does not know' } },

  { id: 'ac-held', use: 'teach', tier: 'misleading', setting: 'shopping', topic: 'a held order, a log-in and then a number', name: 'The held order',
    text: "Gil gets an email that says it is from an online store: 'Your order is on hold. Sign in to release it.' The link opens a page that asks for his password. When he types it, a second window says: 'We have sent a six-digit code to your phone. Type it here to finish signing in.'",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] }, also: ['code'],
    cues: { D1: 'The link opens a page that asks for his password', A1: 'The link opens a page that asks for his password',
            A2: 'Gil gets an email that says it is from an online store' },
    segments: [
      { text: 'Gil gets an email that says it is from an online store', note: 'This says who the email claims to be from, and it came to him. It does not say what he is asked to type first.' },
      { text: "Your order is on hold. Sign in to release it", note: 'This is the reason given. What the page then asks for is in the next sentence.' },
      { text: 'The link opens a page that asks for his password' },
      { text: "When he types it, a second window says: 'We have sent a six-digit code to your phone. Type it here to finish signing in.'", note: 'This is the code, and it is the part that makes the case look like the code scam. But it comes second, after the page has begun by asking for the password.' }
    ] }
]);
