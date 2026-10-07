// Scams, Unit Three: cases shown inside cards, the code scam, the app permission scam and the whole case.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards; 'drill' = the drill; 'return' = a later day. A case is used in one place only.
// cues[STEP] is the exact phrase in the text that decides that step; the app marks it. Field guide: see u1.cases-drill-1.js.

FC.cases('scams', 'u3', [

  { id: 'ac-phoneorder', use: 'teach', tier: 'clean', setting: 'home', topic: 'a call about a phone ordered in his name', name: 'The phone-order call',
    text: "Ewan's phone rings. A woman says she is from his cell phone company and that a new phone has been ordered on his account. 'To cancel the order I am sending you a code,' she says. A text arrives with six digits in it. 'Read them out to me,' she says.",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Read them out to me', A1: ['A text arrives with six digits in it', 'Read them out to me'], A2: "Ewan's phone rings" } },

  { id: 'ac-whatsapp', use: 'check', tier: 'clean', setting: 'relationships', topic: 'a cousin who is locked out',
    text: "Femi's cousin messages him in a chat app: 'Hi, I sent my code to your number by mistake. Can you send it to me? I am locked out of my account.' A text with a six-digit code, from a company Femi has never used, arrives on his phone.",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Can you send it to me', A1: 'Can you send it to me', A2: "Femi's cousin messages him in a chat app" },
    reason: { A1: 'A code has just come to Femi\'s phone, and he is asked to pass it on: {cue:A1}. No page asks for a password and no {t:permission} asks for an Allow.' } },

  { id: 'ac-bank-call', use: 'teach', tier: 'clean', setting: 'money', topic: 'a fraud-team call about a payment', name: 'The fraud-team call',
    text: "Hana's phone rings. A man says he is from her bank's fraud team and that someone is trying to pay $60 from her account. 'I have just sent a code to your phone,' he says. 'Read it out to me and I will stop the payment.'",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Read it out to me and I will stop the payment', A1: 'Read it out to me and I will stop the payment', A2: "Hana's phone rings" } },

  { id: 'ac-shareddoc', use: 'teach', tier: 'clean', setting: 'work', topic: 'a shared document which opens a permission screen', name: 'The shared document',
    text: "Rafa gets an email: 'A colleague has shared a document with you. Open it here.' The link opens his email provider's own permission screen: 'Docs Sync Pro would like to read, send and delete all your email, and see all your contacts.' It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'It has two buttons, Allow and Cancel', A1: 'Docs Sync Pro would like to read, send and delete all your email, and see all your contacts',
            A2: 'A colleague has shared a document with you. Open it here' } },

  { id: 'ac-fitness', use: 'check', tier: 'clean', setting: 'health', topic: 'a gym challenge app which asks for all the mail',
    text: "A poster at Jess's gym says: 'Join the 30-day challenge! Scan to join.' The app that the scan opens asks her to connect her email account. Her email provider's permission screen asks whether the app may read, send and delete all her email. She sees two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'She sees two buttons, Allow and Cancel', A1: 'asks whether the app may read, send and delete all her email', A2: 'A poster at Jess\'s gym says' },
    reason: { A1: 'A {t:permission} from her email provider asks Jess to press Allow for an app: {cue:A1}. No page asks for a password and nothing asks for a code.' } },

  { id: 'ac-mail-doc', use: 'teach', tier: 'clean', setting: 'work', topic: 'a free storage offer', name: 'The free-storage text',
    text: "Omar gets a text from a number he does not know: 'You have won 100 GB of free storage. Claim it here.' The link opens his email provider's own permission screen, the same kind of permission screen as always: 'FreeStore would like to read, send and delete all your email, and see all your contacts.' It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'It has two buttons, Allow and Cancel', A1: 'FreeStore would like to read, send and delete all your email, and see all your contacts',
            A2: 'Omar gets a text from a number he does not know' } },

  { id: 'ac-chk-a1', use: 'check', tier: 'clean', setting: 'health', topic: 'a pharmacy call about a failed payment',
    text: "A man calls Zoe and says he is from the pharmacy that sends her prescription, and that a payment for it has failed. A text with a six-digit number arrives on her phone. 'Read it to me,' he says, 'so that I can confirm it is you.'",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Read it to me', A1: ['A text with a six-digit number arrives on her phone', 'Read it to me'], A2: 'A man calls Zoe' },
    reason: { A1: 'A number has just come to Zoe\'s phone, and the man asks her to read it out: {cue:A1}. No page asks for a password and no {t:permission} asks for an Allow.' } },

  { id: 'ac-wk-cv', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a free résumé checker which asks for all the mail', name: 'The résumé checker',
    text: "Fern is looking for work. She searches the web for 'free résumé checker' and opens the first site she finds. It says: 'Sign in with your email account to check your résumé.' Her email provider's own permission screen appears: 'Résumé Pal would like to read, send and delete all your email.' It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'Sign in with your email account to check your résumé', A1: 'Résumé Pal would like to read, send and delete all your email',
            A2: 'Résumé Pal would like to read, send and delete all your email' } }
]);
