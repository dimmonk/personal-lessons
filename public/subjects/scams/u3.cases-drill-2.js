// Scams, Unit Three: drill cases for stage three (the first answers are shown, the learner finishes the route and gives the name)
// and the clean cases of stage four (the whole route alone, then the name). None of these appears in a card.
// A case asked for its whole route carries marked words and a reason for all three questions, the first of the key included.
// wouldChange says what would make the case a different name. Field guide: see u3.cases-drill-1.js.

FC.cases('scams', 'u3', [

  /* ---------- Stage three: the first answers are shown; the learner answers the second question and gives the name ---------- */
  { id: 'df-ph-uni', use: 'drill', tier: 'clean', setting: 'work', topic: 'a student profile which will close',
    text: "An email that says it is from her university tells Nell: 'Your student account will close on Friday. Sign in to keep it.' The link opens a page with the university's seal that asks for her student number and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'Sign in to keep it', A1: 'asks for her student number and password', A2: 'An email that says it is from her university' },
    reason: { A1: 'The page asks for a student number and a password: {cue:A1}.',
              A2: 'The email came to Nell and she did not start it: {cue:A2}. The threat of closing the account is the bait, and it does not make the sign-in something she started.' },
    not: { outcome: 'realsignin', why: '{o:realsignin} is one that she began herself, in an app or at an address she had before. This one began with an email, and the seal on the page only shows how the page looks.' } },

  { id: 'df-real-gym', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a gym app installed at the front desk',
    text: "Colm's gym has an app that he got at the front desk, where a member of staff showed him how. He opens it to book a class, and it asks for his email and password. He types them in.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] },
    cues: { D1: 'it asks for his email and password', A1: 'his email and password', A2: 'an app that he got at the front desk, where a member of staff showed him how' },
    reason: { A1: 'The app asks for an email and a password: {cue:A1}.',
              A2: 'Colm started this himself, in an app that he got in person at the gym: {cue:A2}. Nothing came to him, and it asks only for a sign-in.' },
    not: { outcome: 'phishing', why: 'A copy would ask for the same email and password. What makes this one real is that Colm opened an app he already had, in order to book a class, and no message sent him there.' } },

  { id: 'df-cd-hr', use: 'drill', tier: 'varied', setting: 'work', topic: 'an IT-team call about a locked profile',
    text: "Ian's phone rings. A woman says she is from his company's IT team and that his account will be locked tonight. 'A code has just been sent to you. Read it to me and I will keep the account open.' A text with a code has arrived.",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Read it to me and I will keep the account open', A1: ['A text with a code has arrived', 'Read it to me'], A2: "Ian's phone rings" },
    reason: { A1: 'A code has just come to Ian\'s phone, and he is asked to read it out: {cue:A1}.',
              A2: 'Ian did not start this: a call came to him: {cue:A2}. A code is for typing into a sign-in that you started, and he started nothing.' },
    not: { outcome: 'realsignin', why: 'The code is real, and it may well come from his company\'s own system. But a real code is typed in by the person it was sent to, and here a caller who phoned him wants it read out.' } },

  { id: 'df-ap-deal', use: 'drill', tier: 'varied', setting: 'shopping', topic: 'a pop-up which offers deals for connecting a mailbox',
    text: "A pop-up on a news site tells Marcus: 'Sign in with your email to see today's deals.' His email provider's permission screen asks whether the site may read, send and delete all his email, and see his contacts. It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'It has two buttons, Allow and Cancel', A1: 'asks whether the site may read, send and delete all his email, and see his contacts', A2: 'A pop-up on a news site tells Marcus' },
    reason: { A1: 'The {t:permission} asks Marcus to press Allow, and lists what the site may do: {cue:A1}.',
              A2: 'The offer came to him in a pop-up: {cue:A2}. He did not go looking for it, and a list of deals has no need to delete his email.' },
    not: { outcome: 'realsignin', why: 'The {t:permission} is real and it is his own provider\'s. But he did not start it, and a real Allow asks only for what the task needs, which for a list of deals is nothing from his mailbox.' } },

  { id: 'df-real-tax', use: 'drill', tier: 'varied', setting: 'government', topic: 'a tax return started using last month\'s letter',
    text: "Hilda wants to send in her tax return. She types the IRS's web address from the letter it sent her last month. The page asks for her user ID and password, and she types them in.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] },
    cues: { D1: 'The page asks for her user ID and password', A1: 'her user ID and password', A2: "She types the IRS's web address from the letter it sent her last month" },
    reason: { A1: 'The page asks for a user ID and a password: {cue:A1}.',
              A2: 'Hilda set out to send her return and used an address that was printed on a letter she already had: {cue:A2}. Nothing sent her there, and the page asks only for a sign-in.' },
    not: { outcome: 'phishing', why: 'The IRS is also the name on many copies, and a copy would ask for the same user ID and password. What makes this one real is where Hilda started: an address on a letter she already had.' } },

  /* ---------- Stage four, clean cases: the whole route alone, then the name ---------- */
  { id: 'dr-ph-portal', use: 'drill', tier: 'clean', setting: 'health', topic: 'a text saying test results are ready',
    text: "Joan gets a text that says it is from her doctor's office: 'Your test results are ready. Log in to see them.' The link opens a page with the clinic's name that asks for her patient number and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'Log in to see them', A1: 'asks for her patient number and password', A2: "Joan gets a text that says it is from her doctor's office" },
    reason: { D1: 'The text asks Joan to log in: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about her, so it is a request about a way into an account.',
              A1: 'The page asks for a patient number and a password: {cue:A1}.',
              A2: 'The text came to Joan and she did not start it: {cue:A2}. Test results are a good bait because she is waiting for them, but waiting for something does not mean she asked for this message.' },
    not: { outcome: 'realsignin', why: '{o:realsignin} is one that she began herself, in an app or at an address she had before. This one began with a text, and it leads to a page that asks for a password.' },
    wouldChange: 'If Joan had opened her clinic\'s own app and found a message about her results there, and had signed in to read it, she would have started it herself, and the case would be {o:realsignin}.' },

  { id: 'dr-real-roster', use: 'drill', tier: 'clean', setting: 'work', topic: 'a staff app with a log-in and then a number',
    text: "Aziz starts his shift. He opens the staff app that his employer gave him, and types his work email and password. The app then says it has sent a code to his phone, and he types the code into the app.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] }, also: ['code'],
    cues: { D1: 'types his work email and password', A1: 'types his work email and password', A2: 'He opens the staff app that his employer gave him' },
    reason: { D1: 'The app asks Aziz to sign in: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about him, so it is a request about a way into an account.',
              A1: 'He is asked for a password first, and then for a code: {cue:A1}. A case that shows both gets the answer for the password, because the sign-in began with it.',
              A2: 'Aziz started this himself, in an app that his employer gave him, and both the password and the code go into that same app: {cue:A2}. Nothing came to him, and nothing is asked beyond a sign-in.' },
    not: { outcome: 'phishing', why: 'A copied page can ask for the same password and then the same code. What makes this one real is that Aziz opened an app he already had, and no message sent him there.' },
    wouldChange: 'If the same two requests had come on a page that a link in a message opened, the case would be {o:phishing}. The password and the code would be asked in the same way, and only who started it would differ.' },

  { id: 'dr-cd-courier', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'a courier call about an address',
    text: "A man calls Bea and says he is from the courier with her package. 'There is a problem with your address. A code is on its way to you. Please read it out so that I can fix it.' A text with a code arrives.",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] },
    cues: { D1: 'Please read it out so that I can fix it', A1: ['A text with a code arrives', 'Please read it out so that I can fix it'], A2: 'A man calls Bea and says he is from the courier' },
    reason: { D1: 'The caller asks Bea to read out a code: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about her, so it is a request about a way into an account.',
              A1: 'A code has just come to Bea\'s phone, and she is asked to read it out: {cue:A1}.',
              A2: 'Bea did not start this: a call came to her: {cue:A2}. A code is for typing into a sign-in that you started, and nobody else needs to hear it.' },
    not: { outcome: 'phishing', why: 'There is no copied page and no password. What is asked for is a code that has just come to her phone, by a caller who contacted her.' },
    wouldChange: 'If Bea had ordered a package and typed a code that her own courier app sent her into that same app, nobody else would have heard it, and the case would be {o:realsignin}.' },

  { id: 'dr-ap-prize', use: 'drill', tier: 'clean', setting: 'money', topic: 'a prize drawing which wants the whole mailbox',
    text: "A text says: 'You have been picked for a prize drawing. Connect your email account to claim your prize.' Wen taps the link. Her email provider's permission screen asks whether PrizeDraw may read, send and delete all her email. It has two buttons, Allow and Cancel.",
    outcome: 'appscam', route: { D1: ['access'], A1: ['allow'], A2: ['notfit'] },
    cues: { D1: 'It has two buttons, Allow and Cancel', A1: 'asks whether PrizeDraw may read, send and delete all her email', A2: 'You have been picked for a prize drawing' },
    reason: { D1: 'The {t:permission} asks Wen to press Allow: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about her, so it is a request about a way into an account.',
              A1: 'The {t:permission} asks her to press Allow for an app and lists what it may do: {cue:A1}. No password is typed and no code is read out.',
              A2: 'The text came to Wen: {cue:A2}. She did not go looking for a prize drawing, and a prize drawing has no need to read or delete her email.' },
    not: { outcome: 'realsignin', why: 'The {t:permission} is real and comes from her own provider, as it would for a real Allow. But she did not start it, and what it asks for is far more than a prize drawing needs.' },
    wouldChange: 'If Wen had gone looking for a prize-drawing app herself, and the {t:permission} had asked only to see her name, it would fit what she set out to do, and the case would be {o:realsignin}.' }
]);
