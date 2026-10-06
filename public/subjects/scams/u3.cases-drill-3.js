// Scams, Unit Three: drill cases for stage four (the whole route alone, then the name), the varied and the misleading cases.
// A misleading case is one whose story points to a different name from the one the key gives; `echo` names the teaching case
// whose story it is built to bring back, so that the learner meets the disagreement between the likeness and the key.
// Field guide: see u3.cases-drill-1.js and u3.cases-drill-2.js.

FC.cases('scams', 'u3', [

  /* ---------- Varied cases ---------- */
  { id: 'dr-real-allow', use: 'drill', tier: 'varied', setting: 'work', topic: 'a note-taking app found via a bookmarked course page',
    text: "Elin's course page, which she bookmarked on her first day, lists a note-taking app. She connects it to her account. Her email provider's permission screen says that the app would like to see her calendar, and nothing else. She presses Allow.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['allow'], A2: ['fits'] },
    cues: { D1: 'She presses Allow', A1: 'the app would like to see her calendar, and nothing else', A2: "Elin's course page, which she bookmarked on her first day, lists a note-taking app" },
    reason: { D1: 'The {t:permission} asks Elin to press Allow for an app: {cue:D1}. No money is asked for and no facts about her, and what she is asked to press opens a way into an account.',
              A1: 'The {t:permission} asks her to press Allow, and lists what the app may do: {cue:A1}. No password is typed and no code is read out.',
              A2: 'Elin found the app through a page that she had saved herself: {cue:A2}. Nothing came to her, and the {t:permission} asks only to see her calendar, which a note-taking app with a calendar needs.' },
    not: { outcome: 'appscam', why: 'The {t:permission} is the same kind that the scam uses. What the scam adds is an app that came to the person, or one that asks for far more than its job. Here Elin went to the app, and it asks for her calendar and nothing else.' },
    wouldChange: 'If the {t:permission} had said that the app would like to read, send and delete all her email, it would ask for far more than a note-taking app needs, and the case would be {o:appscam}.' },

  { id: 'dr-ph-deposit', use: 'drill', tier: 'varied', setting: 'home', topic: 'an email about a lease renewal',
    text: "Sol gets an email that says it is from his landlord: 'Your lease renewal is ready. Sign in to the tenant portal to download it.' The link opens a page that asks for his email address and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'Sign in to the tenant portal to download it', A1: 'asks for his email address and password', A2: 'Sol gets an email that says it is from his landlord' },
    reason: { D1: 'The email asks Sol to sign in: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about him, so it is a request about a way into an account.',
              A1: 'The page asks for an email address and a password: {cue:A1}.',
              A2: 'The email came to Sol, and he did not start it: {cue:A2}. A landlord is a name he knows and a lease renewal is something he might expect, but expecting a lease renewal is not the same as asking for this email.' },
    not: { outcome: 'realsignin', why: '{o:realsignin} is one that he began himself. This one began with an email that he did not ask for, and the page it leads to asks for a password.' },
    wouldChange: 'If Sol had signed in to the tenant portal\'s own site, at the address printed on his lease papers, to look at his renewal, he would have started it himself, and the case would be {o:realsignin}.' },

  { id: 'dr-cd-tax', use: 'drill', tier: 'varied', setting: 'government', topic: 'an IRS call about a profile used abroad',
    text: "A man calls Fay and says he is from the IRS: 'Your online account has been used from abroad. I am sending a code to confirm that you are the owner. Tell me the number when it arrives.' A text with a code arrives.",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Tell me the number when it arrives', A1: ['A text with a code arrives', 'Tell me the number when it arrives'], A2: 'A man calls Fay and says he is from the IRS' },
    reason: { D1: 'The caller asks Fay to tell him a number: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about her, so it is a request about a way into an account.',
              A1: 'A code has just come to Fay\'s phone, and she is asked to say it aloud: {cue:A1}.',
              A2: 'Fay did not start this: a call came to her: {cue:A2}. A code is for typing into a sign-in that you started, and she started nothing.' },
    not: { outcome: 'phishing', why: 'No copied page asks for a password here. What is asked for is a code that has just come to her phone, by a caller who contacted her.' },
    wouldChange: 'If Fay had signed in to her online tax account herself and been sent a code by the account, and had typed it into that same page, nobody else would have heard it, and the case would be {o:realsignin}.' },

  { id: 'dr-ap-coupon', use: 'drill', tier: 'varied', setting: 'shopping', topic: 'a rewards club card in a package',
    text: "A card tucked into Joaquin's package says: 'Scan to join our rewards club and get $10 off.' The scan opens his email provider's permission screen, which says that Rewards Club would like to read, send and delete all his email. It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'It has two buttons, Allow and Cancel', A1: 'Rewards Club would like to read, send and delete all his email', A2: "A card tucked into Joaquin's package says" },
    reason: { D1: 'The {t:permission} asks Joaquin to press Allow: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about him, so it is a request about a way into an account.',
              A1: 'The {t:permission} asks him to press Allow for an app, and lists what it may do: {cue:A1}. No password is typed and no code is read out.',
              A2: 'The card came with the package: {cue:A2}. He did not go looking for a rewards club, and $10 off needs nothing from his mailbox.' },
    not: { outcome: 'realsignin', why: 'The {t:permission} is real and comes from his own provider, as a real Allow does. But he did not start it, and it asks for far more than a discount club needs.' },
    wouldChange: 'If Joaquin had gone to the store\'s own site himself and joined its club there, and the {t:permission} had asked only for his email address, it would fit what he set out to do, and the case would be {o:realsignin}.' },

  /* ---------- Misleading cases: the story points the other way ---------- */
  { id: 'dr-real-mis', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a log-in number emailed by an unfamiliar sender',
    text: "Ada opens the pizza app that she installed last month and types her email address. A minute later an email from a sender she has never seen arrives: 'Your sign-in code is 482913.' She types the code into the app.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['code'], A2: ['fits'] },
    cues: { D1: 'She types the code into the app', A1: 'Your sign-in code is 482913', A2: 'Ada opens the pizza app that she installed last month and types her email address' },
    reason: { D1: 'Ada is asked for a code: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about her, so it is a request about a way into an account.',
              A1: 'A code has come to her by email and she types it in: {cue:A1}. No password is asked for in this case.',
              A2: 'Ada started this herself, in an app that she already had: {cue:A2}. The email is the app\'s answer to her typing her address, and it came a minute later. It does not matter that she has never seen the sender: she asked for it, and the code goes into the same app.' },
    not: { outcome: 'codescam', why: 'A code that arrives from a sender she does not know can look like the start of the code scam. But nobody contacted her and nobody asks her to read it out: she asked for it, and it goes into the app she opened.' },
    wouldChange: 'If a caller had called her at that moment and asked her to read the code out, the code would be the same and the case would be {o:codescam}.' },

  { id: 'dr-ph-mis', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a manager\'s chat message with a log-in link', echo: 'ac-reset',
    text: "Joy's manager, Amit, messages her in the work chat: 'Can you sign in here and fill in the schedule? Quick.' The link opens a page with the company's logo that asks for her work email and password. Amit's messages are usually real.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'Can you sign in here and fill in the schedule', A1: 'asks for her work email and password', A2: "Joy's manager, Amit, messages her in the work chat" },
    reason: { D1: 'The message asks Joy to sign in: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about her, so it is a request about a way into an account.',
              A1: 'The page asks for a work email and a password: {cue:A1}.',
              A2: 'The link came to Joy in a message: {cue:A2}. She did not set out to sign in, and a message from a name she knows does not change that, because an account can be taken over and used to send exactly this.' },
    not: { outcome: 'realsignin', why: 'The message is from a person she knows, and the page has her company\'s logo, so it feels like an ordinary sign-in. But she did not start it, and nothing she was doing led to it.' },
    wouldChange: 'If Joy had been filling in the schedule herself, in the company\'s own app, and had been asked to sign in there, she would have started it, and the case would be {o:realsignin}.' },

  { id: 'dr-cd-mis', use: 'drill', tier: 'misleading', setting: 'money', topic: 'a caller who joins a reset', echo: 'ac-bank-own',
    text: "Mo has forgotten his banking password, so he taps 'Reset' in his bank's app. The bank texts a code to his phone. Then his phone rings: a man says he is from the bank, can see that Mo is locked out, and says: 'Read me the code and I will finish the reset for you.'",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Read me the code and I will finish the reset for you', A1: ['The bank texts a code to his phone', 'Read me the code'], A2: 'his phone rings: a man says he is from the bank' },
    reason: { D1: 'The caller asks Mo to read out a code: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about him, so it is a request about a way into an account.',
              A1: 'A code has come to Mo\'s phone, and the caller asks him to read it out: {cue:A1}.',
              A2: 'Mo did start the reset, but the call did not come from him: {cue:A2}. A code from a reset is for typing into the app that he opened. Asked for by a caller, it is not something he started.' },
    not: { outcome: 'realsignin', why: 'The reset really is something Mo started, and the code really did come from his bank\'s app. But what the case asks for is that he read the code to someone who called him, and a real code goes only into the app that he opened.' },
    wouldChange: 'If Mo had simply typed the code into his bank\'s app and nobody had called him, the case would be {o:realsignin}.' },

  { id: 'dr-ap-mis', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a calendar app which also wants the mail', echo: 'ac-planner-own',
    text: "Pia finds a calendar-sharing app herself, in her email provider's own app list. The provider's permission screen says that Shared Cal would like to see her calendar, and to read, send and delete all her email. It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'It has two buttons, Allow and Cancel', A1: 'Shared Cal would like to see her calendar, and to read, send and delete all her email', A2: 'to read, send and delete all her email' },
    reason: { D1: 'The {t:permission} asks Pia to press Allow: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about her, so it is a request about a way into an account.',
              A1: 'The {t:permission} asks her to press Allow for an app and lists what it may do: {cue:A1}. No password is typed and no code is read out.',
              A2: 'Pia did go looking for the app herself, and part of what it asks for, her calendar, fits a calendar app. But the {t:permission} also asks {cue:A2}. That is far more than sharing a calendar needs, so the answer is no.' },
    not: { outcome: 'realsignin', why: 'She found the app herself and the {t:permission} is her provider\'s own, as in a real Allow, and the calendar part is what a calendar app needs. What makes it a scam is the rest of the list, which a calendar app has no use for.' },
    wouldChange: 'If the {t:permission} had asked to see her calendar and nothing else, it would ask only what she set out to do, and the case would be {o:realsignin}.' }
]);
