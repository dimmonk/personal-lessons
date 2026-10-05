// Scams, Unit Three: drill cases for stage one (the key's answers are shown, the learner gives the name) and stage two (one key
// question at a time, on a new case). None of these appears in a card.
// Every case is about a way into an account: route D1 is always "access". A1 is "what does it want you to type in or press?"
// (password, code, allow) and A2 is "does it fit something you started?" (fits, notfit).
// reason[STEP] is the reason tied to the marked words, shown after the answer, decisive sentence first. not names the most
// tempting wrong name for the case and says why it fails. A case asked for its name carries marked words and a reason for both
// of the unit's questions; a case asked one question alone carries them for that question. Field guide: see u3.cases-teach-1.js.
// The reverse items and the faulty claims are in u3.cases-drill-3.js.

FC.cases('scams', 'u3', [

  /* ---------- Stage one: the key's answers are shown, the learner gives the name ---------- */
  { id: 'dn-ph-bank', use: 'drill', tier: 'clean', setting: 'money', topic: 'a text saying the card is blocked',
    text: "Leila gets a text that says it is from her bank: 'Your card has been blocked. Log in now to unblock it.' The link opens a page with the bank's name at the top. It asks for her online banking username and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'Log in now to unblock it', A1: 'It asks for her online banking username and password', A2: 'Leila gets a text that says it is from her bank' },
    reason: { A1: 'The page asks for a username and a password: {cue:A1}. That is a password typed into a page, and the bank\'s name at the top does not change what is asked.',
              A2: 'The text came to Leila, and she did not start it: {cue:A2}. Nothing she was doing led to it, so it does not fit something she started.' },
    not: { outcome: 'realsignin', why: '{o:realsignin} is one that she started herself. This one began with a text she did not ask for, and the page it leads to asks for the same password that a real one would, which is what makes it a copy.' } },

  { id: 'dn-real-lib', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a library book renewed',
    text: "Tess wants to renew a library book. She types the library's web address, which is printed on her library card, into her laptop. The page asks for her card number and password, and she types them in.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] },
    cues: { D1: 'The page asks for her card number and password', A1: 'her card number and password', A2: "She types the library's web address, which is printed on her library card, into her laptop" },
    reason: { A1: 'A page asks for a card number and a password: {cue:A1}. That is a password.',
              A2: 'Tess set out to renew a book and used an address she already had: {cue:A2}. Nothing came to her, and the page asks only for what a sign-in needs.' },
    not: { outcome: 'phishing', why: 'A copy of a sign-in page would ask for the same things. What makes this one real is that Tess typed an address she already had, and nothing sent her to the page.' } },

  { id: 'dn-cd-recruiter', use: 'drill', tier: 'clean', setting: 'work', topic: 'a recruiter who wants a number sent on',
    text: "Mehdi posts his CV on a jobs site. A 'recruiter' messages him: 'To show that you are a real person I have sent a code to your phone. Please send me the number.' A text with a six-digit code arrives.",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Please send me the number', A1: ['A text with a six-digit code arrives', 'Please send me the number'], A2: "A 'recruiter' messages him" },
    reason: { A1: 'A code has just come to Mehdi\'s phone, and he is asked to send it on: {cue:A1}. No page wants a password and no {t:permission} wants an Allow.',
              A2: 'Mehdi did not start this: a message came to him from someone he does not know: {cue:A2}. A code is for typing into something that you started, and he started nothing.' },
    not: { outcome: 'realsignin', why: 'The code is real, and it did come from a real service. But a real code is typed in by the person it was sent to. Here a stranger who contacted him asks for it to be sent on.' } },

  { id: 'dn-real-code', use: 'drill', tier: 'clean', setting: 'home', topic: 'a texted number typed in the laptop',
    text: "Joss signs in to his email on his laptop, on a page he reaches from a bookmark. The page says it has texted a code to his phone. The code arrives, and he types it into the same page.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['code'], A2: ['fits'] },
    cues: { D1: 'he types it into the same page', A1: 'The page says it has texted a code to his phone', A2: 'on a page he reaches from a bookmark' },
    reason: { A1: 'A code is texted to his phone and then typed in: {cue:A1}. No password is asked for in this case, and no {t:permission} asks for an Allow.',
              A2: 'Joss started the sign-in himself, from a bookmark that he saved: {cue:A2}. The code goes into the same page. It does not go to anyone else, and nothing is asked beyond a sign-in.' },
    not: { outcome: 'codescam', why: 'The code is real in both, and it arrives on the phone in both. What differs is who asks for it: here it is typed into the page he opened, and nobody has contacted him.' } },

  { id: 'dn-ap-quiz', use: 'drill', tier: 'clean', setting: 'relationships', topic: 'a quiz shared by a friend',
    text: "A friend shares a quiz on a social media site: 'Which film star are you?' It tells Lena to log in with her email account. Her email provider's permission screen asks whether the quiz may read, send and delete all her email, and see her contacts. It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'It has two buttons, Allow and Cancel', A1: 'asks whether the quiz may read, send and delete all her email, and see her contacts', A2: 'A friend shares a quiz on a social media site' },
    reason: { A1: 'A {t:permission} from her provider asks Lena to press Allow for an app: {cue:A1}. It asks for no password and no code.',
              A2: 'The quiz came to her through a post: {cue:A2}. She did not go looking for it, and a quiz has no need of her mailbox, so it does not fit something she started.' },
    not: { outcome: 'realsignin', why: 'The {t:permission} is real and comes from her own provider, as it does in a real Allow. But she did not start it, and a quiz has no use for her email, so it is not the real thing.' } },

  { id: 'dn-real-photos', use: 'drill', tier: 'varied', setting: 'home', topic: 'a photo-book app connected to stored photos',
    text: "Nia wants a photo book of her holiday photos, which are stored with her cloud photo service. She finds the photo-book company's app herself, in her cloud service's own app list. The service's permission screen says that the app would like to see her photos, and nothing else. She presses Allow.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['allow'], A2: ['fits'] },
    cues: { D1: 'She presses Allow', A1: 'the app would like to see her photos, and nothing else', A2: "She finds the photo-book company's app herself, in her cloud service's own app list" },
    reason: { A1: 'The {t:permission} asks her to press Allow for an app: {cue:A1}. No password or code is asked for.',
              A2: 'Nia went looking for the app herself, in her own service: {cue:A2}. And the {t:permission} asks only for her photos, which a photo book needs, so it fits.' },
    not: { outcome: 'appscam', why: 'The {t:permission} is the same kind that a scam uses, and it asks for something of hers. What a scam adds is an app that came to her, or one that asks for far more than its job. Here she found it herself, and it asks for her photos and nothing more.' } },

  { id: 'dn-ph-leaflet', use: 'drill', tier: 'varied', setting: 'government', topic: 'a leaflet through the door with a square to scan',
    text: "A leaflet comes through Dan's door: 'Your council tax account needs updating. Scan the code to log in.' He scans it with his phone, and it opens a page with the council's crest that asks for his account number and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'Scan the code to log in', A1: 'asks for his account number and password', A2: "A leaflet comes through Dan's door" },
    reason: { A1: 'The page asks for an account number and a password: {cue:A1}. That is a password, whatever crest is at the top.',
              A2: 'The leaflet came to Dan through his door: {cue:A2}. He did not start anything, and a code printed on a leaflet is not an address he already had.' },
    not: { outcome: 'realsignin', why: 'A real council sign-in would be one that Dan started, from the council\'s own address or a bill. This began with a leaflet, and the page asks for the same password a real one would.' } },

  { id: 'dn-ap-sched', use: 'drill', tier: 'varied', setting: 'work', topic: 'a rota tool in a stranger\'s message',
    text: "A message from a number Pat does not know says: 'Your team has been invited to Shiftly, a free rota tool. Sign in with your email to join.' Pat taps the link. His email provider's permission screen says that Shiftly would like to read, send and delete all his email. It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'It has two buttons, Allow and Cancel', A1: 'Shiftly would like to read, send and delete all his email', A2: 'A message from a number Pat does not know says' },
    reason: { A1: 'The {t:permission} asks Pat to press Allow for an app: {cue:A1}. He types no password and no code.',
              A2: 'It came to Pat in a message from a number he does not know: {cue:A2}. He did not go looking for it, and a rota tool has no need to delete his email.' },
    not: { outcome: 'realsignin', why: 'The {t:permission} comes from his own email provider, as it would in a real Allow. But he did not start it, and the app asks for far more than a rota needs.' } },

  /* ---------- Stage two: one key question at a time, on a new case ---------- */
  { id: 'dp-a1-pw', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'a parcel text which wants a log-in',
    text: "Rin gets an email: 'Your parcel could not be delivered. Log in to arrange a new date.' The link opens a page that asks for her shop account email and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { A1: 'asks for her shop account email and password' },
    reason: { A1: 'The page asks for an email and a password: {cue:A1}. Typing a password into a page is what this answer is for.' },
    not: { outcome: 'codescam', why: 'Nothing here asks for a code that has come to her phone. What is asked is a password, typed into a page.' } },

  { id: 'dp-a1-code', use: 'drill', tier: 'clean', setting: 'government', topic: 'a council call about a parking permit',
    text: "A caller says he is from the council and that Raj's parking permit needs a code 'to confirm it is you'. A text with a six-digit code arrives on Raj's phone, and the caller asks him to read it out.",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { A1: 'the caller asks him to read it out' },
    reason: { A1: 'A code has just come to Raj\'s phone and he is asked to read it out: {cue:A1}. No page wants a password and no {t:permission} wants an Allow.' },
    not: { outcome: 'phishing', why: 'There is no copied page and no password. The scam has no page: it is a caller who wants a code that has just come to Raj\'s phone.' } },

  { id: 'dp-a1-allow', use: 'drill', tier: 'clean', setting: 'health', topic: 'a meditation app which wants to find friends',
    text: "A meditation app, advertised on a podcast, asks Una to 'connect your email to find friends'. Her email provider's permission screen asks whether the app may read, send and delete all her email. It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { A1: 'asks whether the app may read, send and delete all her email' },
    reason: { A1: 'A {t:permission} asks Una to press Allow for an app, and says what the app may do: {cue:A1}. No password is typed and no code is read out.' },
    not: { outcome: 'phishing', why: 'No copied page asks for a password. The {t:permission} is her provider\'s own, and what it asks is an Allow.' } },

  { id: 'dp-a2-fits', use: 'drill', tier: 'clean', setting: 'health', topic: 'a blood test booked in the surgery app',
    text: "Kay wants to book a blood test. She opens her surgery's app, which she has used since her doctor told her about it last year, and signs in with her username and password.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] },
    cues: { A2: "She opens her surgery's app, which she has used since her doctor told her about it last year" },
    reason: { A2: 'Kay started this herself, in an app that she already had: {cue:A2}. The sign-in asks only for a username and a password, which is what a sign-in needs.' },
    not: { outcome: 'phishing', why: 'A copy would ask for the same username and password. What makes this one real is that Kay opened an app she already had, and nothing sent her there.' } },

  { id: 'dp-a2-nofit1', use: 'drill', tier: 'varied', setting: 'relationships', topic: 'a friend who shares a photo link',
    text: "Ben's friend Alex messages him on a chat app: 'Look at this photo of us! Log in to see it.' Ben taps the link, and a page asks for his chat password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { A2: "Ben's friend Alex messages him on a chat app" },
    reason: { A2: 'The link came to Ben in a message: {cue:A2}. He did not start it. That the message seems to be from a friend does not change this, because a friend\'s account can be taken over and used to send it.' },
    not: { outcome: 'realsignin', why: 'The message is from a name he knows, which makes it feel real. But he did not set out to sign in, and the page was reached by a link in a message.' } },

  { id: 'dp-a2-nofit2', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a free video app found in the app store',
    text: "Hugo wants to turn his holiday photos into a video. He finds a free video app himself in his phone's app store and opens it. The app asks him to sign in with his email account, and his provider's permission screen asks whether it may read, send and delete all his email. It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { A2: 'whether it may read, send and delete all his email' },
    reason: { A2: 'Hugo did start this, but the {t:permission} asks for far more than a video needs: {cue:A2}. What he set out to do needs his photos, not his whole mailbox, so it does not fit.' },
    not: { outcome: 'realsignin', why: 'He started it, as with a real Allow, and it is his provider\'s own {t:permission}. What makes it a scam is what the app asks for: a video needs photos, not every email he has.' } }
]);
