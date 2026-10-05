// Scams, Unit Three: cases shown inside cards, part two: the one-time code scam, the app permission scam, the checks on the
// key's two questions, and the two cases worked from the top. Field guide: see u3.cases-teach-1.js.

FC.cases('scams', 'u3', [

  /* ---------- One-time code scam ---------- */
  { id: 'ac-phoneorder', use: 'teach', tier: 'clean', setting: 'home', topic: 'a call about a phone ordered in his name', name: 'The phone-order call',
    text: "Ewan's phone rings. A woman says she is from his mobile phone company and that a new phone has been ordered on his account. 'To cancel the order I am sending you a code,' she says. A text arrives with six digits in it. 'Read them out to me,' she says.",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Read them out to me', A1: ['A text arrives with six digits in it', 'Read them out to me'], A2: "Ewan's phone rings" } },

  { id: 'ac-marketplace', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a buyer who wants a number sent on', name: 'The bike buyer',
    text: "Tess is selling a bike on a marketplace app. A buyer messages: 'Before I pay, I need to know you are a real seller. A code has just been sent to your phone by mistake. Please send it to me.' A text with a six-digit code arrives on Tess's phone.",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Please send it to me', A1: 'A code has just been sent to your phone by mistake', A2: 'A buyer messages' },
    segments: [
      { text: 'Tess is selling a bike on a marketplace app', note: 'This is the story. It does not say what Tess is asked to do.' },
      { text: 'Before I pay, I need to know you are a real seller', note: 'This is the reason the buyer gives. It does not say what Tess has to do.' },
      { text: 'A code has just been sent to your phone by mistake. Please send it to me' },
      { text: "A text with a six-digit code arrives on Tess's phone", note: 'This is the real code arriving. It shows that there is a code, and the question looks at what Tess is asked to do with it, which is in the buyer\'s message.' }
    ] },

  { id: 'ac-whatsapp', use: 'check', tier: 'clean', setting: 'relationships', topic: 'a cousin who is locked out',
    text: "Femi's cousin messages him in a chat app: 'Hi, I sent my code to your number by mistake. Can you send it to me? I am locked out of my account.' A text with a six-digit code, from a company Femi has never used, arrives on his phone.",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Can you send it to me', A1: 'Can you send it to me', A2: "Femi's cousin messages him in a chat app" },
    reason: { A1: 'A code has just come to Femi\'s phone, and he is asked to pass it on: {cue:A1}. No page asks him for a password and no {t:permission} asks him to press Allow, so what is asked for is the code.' } },

  { id: 'ac-bank-call', use: 'teach', tier: 'clean', setting: 'money', topic: 'a fraud-team call about a payment', name: 'The fraud-team call',
    text: "Hana's phone rings. A man says he is from her bank's fraud team and that someone is trying to pay £60 from her account. 'I have just sent a code to your phone,' he says. 'Read it out to me and I will stop the payment.'",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Read it out to me and I will stop the payment', A1: 'Read it out to me and I will stop the payment', A2: "Hana's phone rings" } },

  { id: 'ac-chk-a1', use: 'check', tier: 'clean', setting: 'health', topic: 'a pharmacy call about a failed payment',
    text: "A man rings Zoe and says he is from the pharmacy that sends her prescription, and that a payment for it has failed. A text with a six-digit number arrives on her phone. 'Read it to me,' he says, 'so that I can confirm it is you.'",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Read it to me', A1: ['A text with a six-digit number arrives on her phone', 'Read it to me'], A2: 'A man rings Zoe' },
    reason: { A1: 'A number has just come to Zoe\'s phone, and the man asks her to read it out: {cue:A1}. No page asks for a password and no {t:permission} asks her to press Allow, so what is asked for is a code.' } },

  /* ---------- App permission scam ---------- */
  { id: 'ac-shareddoc', use: 'teach', tier: 'clean', setting: 'work', topic: 'a shared document which opens a permission permission screen', name: 'The shared document',
    text: "Rafa gets an email: 'A colleague has shared a document with you. Open it here.' The link opens his email provider's own permission screen: 'Docs Sync Pro would like to read, send and delete all your email, and see all your contacts.' It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'It has two buttons, Allow and Cancel', A1: 'Docs Sync Pro would like to read, send and delete all your email, and see all your contacts',
            A2: 'A colleague has shared a document with you. Open it here' } },

  { id: 'ac-photoprint', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'free photo prints for connecting an email profile', name: 'The free photo prints',
    text: "An advert on a social media site offers Bea twenty free photo prints if she 'connects her email account'. Her email provider's permission screen asks whether PrintPal may read, send and delete all her email. It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'It has two buttons, Allow and Cancel', A1: 'asks whether PrintPal may read, send and delete all her email',
            A2: 'An advert on a social media site offers Bea twenty free photo prints' },
    segments: [
      { text: "An advert on a social media site offers Bea twenty free photo prints if she 'connects her email account'", note: 'This is the offer, and it came to her. It does not show what the {t:permission} asks the app to be allowed to do.' },
      { text: "Her email provider's permission screen asks whether PrintPal may read, send and delete all her email" },
      { text: 'It has two buttons, Allow and Cancel', note: 'These are the buttons. They show that she is being asked to press Allow, but not what for.' }
    ] },

  { id: 'ac-fitness', use: 'check', tier: 'clean', setting: 'health', topic: 'a gym challenge app which asks for all the mail',
    text: "A poster at Jess's gym says: 'Join the 30-day challenge! Scan to join.' The app that the scan opens asks her to connect her email account. Her email provider's permission screen asks whether the app may read, send and delete all her email. She sees two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'She sees two buttons, Allow and Cancel', A1: 'asks whether the app may read, send and delete all her email', A2: 'A poster at Jess\'s gym says' },
    reason: { A1: 'A {t:permission} from her email provider asks Jess to press Allow so that an app can use her account: {cue:A1}. No page asks for a password and nothing asks for a code, so what is asked is an Allow.' } },

  { id: 'ac-mail-doc', use: 'teach', tier: 'clean', setting: 'work', topic: 'a free storage offer', name: 'The free-storage text',
    text: "Omar gets a text from a number he does not know: 'You have won 100 GB of free storage. Claim it here.' The link opens his email provider's own permission screen, the same kind of permission screen as always: 'FreeStore would like to read, send and delete all your email, and see all your contacts.' It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'It has two buttons, Allow and Cancel', A1: 'FreeStore would like to read, send and delete all your email, and see all your contacts',
            A2: 'Omar gets a text from a number he does not know' } },

  /* ---------- The key's questions: a check on each, then two cases worked from the top ---------- */
  { id: 'ac-wk-code', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a streaming-service security call', name: 'The streaming security call',
    text: "Callum is cooking when his phone rings. A man says he works for Callum's streaming service: 'Someone in another country is signing in to your account right now.' A moment later a text arrives with a six-digit code. 'That is the code that will block them,' the man says. 'Read it out to me and I will lock the account.'",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Read it out to me and I will lock the account', A1: ['a text arrives with a six-digit code', 'Read it out to me'], A2: 'Callum is cooking when his phone rings' } },

  { id: 'ac-wk-cv', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a free CV checker which asks for all the mail', name: 'The CV checker',
    text: "Fern is looking for work. She searches the web for 'free CV checker' and opens the first site she finds. It says: 'Sign in with your email account to check your CV.' Her email provider's own permission screen appears: 'CV Pal would like to read, send and delete all your email.' It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'Sign in with your email account to check your CV', A1: 'CV Pal would like to read, send and delete all your email',
            A2: 'CV Pal would like to read, send and delete all your email' } }
]);
