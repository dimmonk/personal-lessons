// Scams, Unit Three: fresh cases held back for later days (lesson standard E9, V44), part one: phishing and the real sign-in.
// Four for each name, because this is an action subject: one for each of the four scheduled returns, the last of them about twelve
// weeks on. A name that is due comes back as a case the learner has not seen, beside a case of the name they most often take it for,
// and it is run as a whole route, so every case carries marked words and a reason for all three questions.
// Field guide: see u3.cases-drill-1.js. These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('scams', 'u3', [

  /* ---------- Phishing ---------- */
  { id: 'ret-ph-social', use: 'return', tier: 'varied', setting: 'relationships', topic: 'an email about photo tags',
    text: "An email says it is from a social media site: 'Someone tagged you in 12 photos. Log in to see them.' Cal taps the link, and a page asks for his username and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'Log in to see them', A1: 'a page asks for his username and password', A2: 'An email says it is from a social media site' },
    reason: { D1: 'The email asks Cal to log in: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about him, so it is a request about a way into an account.',
              A1: 'The page asks for a username and a password: {cue:A1}.',
              A2: 'The email came to Cal and he did not start it: {cue:A2}. Being tagged in photos is bait that works because people want to look.' },
    not: { outcome: 'realsignin', why: '{o:realsignin} would be one that he started himself, in the site\'s own app. This one began with an email, and it leads to a page that asks for a password.' },
    wouldChange: 'If Cal had opened the site\'s own app, seen the tags there and signed in to look at them, he would have started it, and the case would be {o:realsignin}.' },

  { id: 'ret-ph-airline', use: 'return', tier: 'clean', setting: 'leisure', topic: 'a text about a changed flight',
    text: "A text says it is from an airline: 'Your flight has changed. Sign in to your booking to see the new time.' The link opens a page with the airline's logo that asks for Mina's booking email and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'Sign in to your booking to see the new time', A1: "asks for Mina's booking email and password", A2: 'A text says it is from an airline' },
    reason: { D1: 'The text asks Mina to sign in: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about her, so it is a request about a way into an account.',
              A1: 'The page asks for an email and a password: {cue:A1}.',
              A2: 'The text came to Mina: {cue:A2}. She did not set out to look at her booking, and a changed flight is exactly the news that makes people tap.' },
    not: { outcome: 'realsignin', why: '{o:realsignin} would be one that she started, in the airline\'s own app or at an address she already had. This one began with a text.' },
    wouldChange: 'If Mina had opened the airline\'s own app and found the new time there, she would have started the sign-in, and the case would be {o:realsignin}.' },

  { id: 'ret-ph-cloud', use: 'return', tier: 'varied', setting: 'home', topic: 'a pop-up about full cloud storage',
    text: "A pop-up appears while Pete is browsing: 'Your cloud storage is full. Sign in now to add space.' It opens a page with his cloud service's logo that asks for his email and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'Sign in now to add space', A1: 'asks for his email and password', A2: 'A pop-up appears while Pete is browsing' },
    reason: { D1: 'The pop-up asks Pete to sign in: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about him, so it is a request about a way into an account.',
              A1: 'The page asks for an email and a password: {cue:A1}.',
              A2: 'The pop-up came to Pete while he was doing something else: {cue:A2}. He did not start a sign-in, and a pop-up on a web page is not an app or an address that he already had.' },
    not: { outcome: 'realsignin', why: '{o:realsignin} would be one that Pete started himself, in his cloud service\'s own app. A pop-up that arrives on its own is not that.' },
    wouldChange: 'If Pete had opened his cloud service\'s own app and seen that his storage was full, and had signed in to buy more, he would have started it, and the case would be {o:realsignin}.' },

  { id: 'ret-ph-thread', use: 'return', tier: 'misleading', setting: 'money', topic: 'a text in the bank\'s own conversation',
    text: "Gina really does bank with Northbank. A text arrives, in the same conversation as her bank's real texts: 'We have noticed a payment. Log in to check it.' The link opens a page that asks for her online banking username and password.",
    outcome: 'phishing', route: { D1: ['access'], A1: ['password'], A2: ['notfit'] },
    cues: { D1: 'Log in to check it', A1: 'asks for her online banking username and password', A2: "A text arrives, in the same conversation as her bank's real texts" },
    reason: { D1: 'The text asks Gina to log in: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about her, so it is a request about a way into an account.',
              A1: 'The page asks for a username and a password: {cue:A1}.',
              A2: 'The text came to Gina, and she did not start it: {cue:A2}. That it sits among her real texts is only where the sender chose to put it. It was not an answer to anything she did.' },
    not: { outcome: 'realsignin', why: 'She does bank there, and the text is in the same conversation as the real ones, so it feels ordinary. But she did not start it, and where a text sits does not change that.' },
    wouldChange: 'If Gina had opened her banking app herself after seeing the text, and looked at the payment there, she would have started the sign-in, and the case would be {o:realsignin}.' },

  /* ---------- Real sign-in ---------- */
  { id: 'ret-rs-train', use: 'return', tier: 'clean', setting: 'leisure', topic: 'a train booking opened in the train company app',
    text: "Nick wants to look at his train booking. He taps the train company's app, which is on his phone, and signs in with his email address and password.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] },
    cues: { D1: 'signs in with his email address and password', A1: 'his email address and password', A2: "He taps the train company's app, which is on his phone" },
    reason: { D1: 'Nick signs in: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about him, so it is a request about a way into an account.',
              A1: 'The sign-in asks for an email address and a password: {cue:A1}.',
              A2: 'Nick set out to look at his booking and used an app that was already on his phone: {cue:A2}. Nothing came to him, and the app asks only for a sign-in.' },
    not: { outcome: 'phishing', why: 'A copy would ask for the same email address and password. What makes this one real is that Nick opened an app he already had, for a reason of his own, and no message sent him to it.' },
    wouldChange: 'If Nick had reached the same sign-in by a link in a text about his booking, it would be a copy, and the case would be {o:phishing}.' },

  { id: 'ret-rs-school', use: 'return', tier: 'varied', setting: 'home', topic: 'a school portal via a printed address',
    text: "A school's letter says: 'Parents sign in at the web address printed below.' Lorna types the address printed on the letter into her laptop. The page asks for her email address and password, and she types them in.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] },
    cues: { D1: 'The page asks for her email address and password', A1: 'her email address and password', A2: 'Lorna types the address printed on the letter into her laptop' },
    reason: { D1: 'The page asks Lorna to sign in: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about her, so it is a request about a way into an account.',
              A1: 'The page asks for an email address and a password: {cue:A1}.',
              A2: 'Lorna got the address from a letter that she already had, and typed it herself: {cue:A2}. Nothing sent her to the page, and it asks only for a sign-in.' },
    not: { outcome: 'phishing', why: 'A letter can be copied too. What makes this one real is that Lorna typed an address from a letter that she already held, not a link in a message.' },
    wouldChange: 'If the same address had arrived as a link in a text that she did not expect, she would not have started it, and the case would be {o:phishing}.' },

  { id: 'ret-rs-insure', use: 'return', tier: 'varied', setting: 'money', topic: 'a car insurance payment with a bank text',
    text: "Dinah pays for her car insurance on the insurer's website, which she bookmarked. Her bank texts a code to approve the payment, and the payment page asks for it. She types it into that page.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['code'], A2: ['fits'] }, also: ['money'],
    cues: { D1: 'the payment page asks for it', A1: 'Her bank texts a code to approve the payment', A2: "on the insurer's website, which she bookmarked" },
    reason: { D1: 'The page asks Dinah for a code: {cue:D1}. Nothing is to be installed and no facts about her are asked for. She is paying for her insurance, so the case also shows a payment, but the request that the page makes of her is for a code, and where a case shows both, the answer is the way into an account.',
              A1: 'A code has come to her phone and she is asked to type it in: {cue:A1}. No password and no Allow are asked for in this case.',
              A2: 'Dinah started this, from a bookmark that she saved: {cue:A2}. The code goes into the same page, and it is asked for only to approve the payment she is making.' },
    not: { outcome: 'codescam', why: 'The code is real in both, and it arrives on the phone in both. What differs is who asks for it: here it goes into the page that she opened, and nobody has contacted her.' },
    wouldChange: 'If a caller who had called her had asked her to read the code out, the code would be the same and the case would be {o:codescam}.' },

  { id: 'ret-rs-badge', use: 'return', tier: 'misleading', setting: 'work', topic: 'a reset after calling the number on the badge', echo: 'ac-locked',
    text: "Bashir asks his employer's helpdesk, by calling the number on his badge, to reset his password. A minute later an email arrives: 'Choose a new password.' Its link opens the company's sign-in page.",
    outcome: 'realsignin', route: { D1: ['access'], A1: ['password'], A2: ['fits'] },
    cues: { D1: 'Choose a new password', A1: "Its link opens the company's sign-in page", A2: "Bashir asks his employer's helpdesk, by calling the number on his badge, to reset his password" },
    reason: { D1: 'The email asks Bashir to choose a new password: {cue:D1}. Nothing is to be installed, no money is asked for and no facts about him, so it is a request about a way into an account.',
              A1: 'The link leads to a sign-in page, where a password is typed: {cue:A1}.',
              A2: 'Bashir started this: he called a number that was already printed on his badge: {cue:A2}. The email is the answer to his call, and it came a minute later.' },
    not: { outcome: 'phishing', why: 'An email with a link to a page that wants a password is what the scam looks like. What makes this one real is that Bashir asked for it a minute earlier, through a number he already had.' },
    wouldChange: 'If the same email had arrived when Bashir had asked for nothing, it would be a copy, and the case would be {o:phishing}.' }
]);
