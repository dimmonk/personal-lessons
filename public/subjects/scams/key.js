// Scams & Social Engineering: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / purpose / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what you must be able to point to
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1)
//   outcomes[].n      the one fixed name shown everywhere
//   outcomes[].plain  a few ordinary words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what you must be able to point to in a case before the name can be used.
//                     Printed on the meet card, the recap and the reference screen, and in feedback.
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   outcomes[].legit  this is a case where nothing is wrong: the real thing that a scam copies (S1, P26)
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].purpose   what the question sorts
//   steps[].why       why that distinction decides, and when the question can be answered
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a case must show for this answer. Printed as "Give this answer when <when>."
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a case shows this answer AND the one named, the named one wins
// Step codes (D1, I1, A1, A2, M1, M2, F1, F2) and ids are for the data. They are never shown to the learner (K3).
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:D1.option}; its plain words and what you
//                     must be able to point to are printed by {plain:option} and {needs:option}.
//
// Every question of this key can be answered at the moment the request is made, from the message, the call or the
// screen itself, before anything leaves your hands. The old key asked two things that could only be known afterwards
// ("what happens next", "withdrawals stall"); both are gone (docs/rebuild/scams-plan.md).
//
// Every part of the key after the first question ends in a name for the real thing as well as the scams it copies
// (legit: true), and the first question has an answer for a message that asks nothing at all. The real-or-fake
// distinction is the skill: a key that calls everything a scam is one a learner stops using (P26 requires 1).

FC.key('scams', {
  outcomes: [
    // Install something, open a file, or share your screen: taught by Unit Two.
    { id: 'techsupport', group: 'device', unit: 'u2',
      n: 'Tech-support scam',
      plain: 'a made-up problem with your device, and someone offering to fix it',
      needs: 'a warning, a call, a message or a search advert saying that your device has a problem or offering support for it, and someone you then reach who wants to install something on it or see your screen',
      aka: ['fake virus alert', 'scareware'] },
    { id: 'refundscam', group: 'device', unit: 'u2',
      n: 'Refund scam',
      plain: 'a refund sorted out while someone watches your screen',
      needs: 'someone who says you are owed a refund or that your bank account needs attention, and a request to install something or let them see your screen while they sort it out',
      aka: ['remote access scam', 'overpayment refund scam'] },
    { id: 'malware', group: 'device', unit: 'u2',
      n: 'Malware',
      plain: 'a harmful file or link sent in a message',
      needs: 'a file or a link that came in a message, a reason given to open, run or install it, and nobody on a call with you',
      aka: ['virus', 'ransomware', 'harmful attachment'] },
    { id: 'realinstall', group: 'device', unit: 'u2', legit: true,
      n: 'Real installation',
      plain: 'something you started yourself, through a way you already had',
      needs: 'an install, an update or a screen share that you started yourself, through a way you already had (the company’s own website, your device’s app store or its own update menu, or the company’s number that you looked up and rang), and nobody contacting you first to ask for it',
      aka: [] },

    // Sign in, give a code, or allow an app: taught by Unit Three.
    { id: 'phishing', group: 'access', unit: 'u3',
      n: 'Phishing',
      plain: 'a copied sign-in page reached from a message',
      needs: 'a message, a call or a pop-up you did not ask for, a link from it, and a sign-in page at the end of the link that asks for your password',
      aka: ['fake login page', 'credential phishing'] },
    { id: 'codescam', group: 'access', unit: 'u3',
      n: 'One-time code scam',
      plain: 'someone asking for the code that just came to your phone',
      needs: 'a one-time code that has just come to your phone or email, and someone who contacted you asking you to read it out or send it on',
      aka: ['OTP scam', 'verification code scam'] },
    { id: 'appscam', group: 'access', unit: 'u3',
      n: 'App permission scam',
      plain: 'an app that asks for far more of your account than it needs',
      needs: 'a permission screen asking you to press Allow for an app, and an app that came to you in a message or asks for far more of your account than your task needs',
      aka: ['consent phishing', 'OAuth phishing'] },
    { id: 'realsignin', group: 'access', unit: 'u3', legit: true,
      n: 'Real sign-in',
      plain: 'a sign-in, a code or an Allow that you started yourself',
      needs: 'a sign-in, a code or an Allow that you started yourself, on a site or app you reached through a way you already had, and nothing asked beyond what you set out to do',
      aka: [] },

    // Pay or send money: taught by Unit Four.
    { id: 'pigbutcher', group: 'money', unit: 'u4',
      n: 'Pig-butchering scam',
      plain: 'an online friend’s investment site that keeps your money',
      needs: 'someone you know only online, a trading or investment site or app that they showed you, and a request to put money into it or to pay it before you can take money out',
      aka: ['investment scam', 'crypto romance scam', 'fake trading platform'] },
    { id: 'romance', group: 'money', unit: 'u4',
      n: 'Romance scam',
      plain: 'an online partner’s emergency that needs your money',
      needs: 'someone you know only online and have never met in person, and an emergency of theirs that you are asked to pay for',
      aka: ['dating scam', 'sweetheart scam'] },
    { id: 'advancefee', group: 'money', unit: 'u4',
      n: 'Advance-fee scam',
      plain: 'a fee to collect money that is not coming',
      needs: 'money you are told is waiting for you (a prize, an inheritance, a grant, a loan, a payout), and a fee you must pay before any of it reaches you',
      aka: ['advance fee fraud', '419 scam', 'lottery scam', 'inheritance scam'] },
    { id: 'recovery', group: 'money', unit: 'u4',
      n: 'Recovery scam',
      plain: 'a fee to get back money you lost',
      needs: 'money you lost earlier, someone who says they can get it back, and a fee you must pay before they do',
      aka: ['recovery room scam', 'fund recovery scam'] },
    { id: 'invoicefraud', group: 'money', unit: 'u4',
      n: 'Invoice fraud',
      plain: 'a real bill, sent to new bank details',
      needs: 'a bill or a payment you already make to someone, a message saying that their bank details have changed, and new details to pay into',
      aka: ['changed bank details scam', 'payment diversion fraud', 'mandate fraud', 'business email compromise'] },
    { id: 'fakeofficial', group: 'money', unit: 'u4',
      n: 'Fake official scam',
      plain: 'a threat from an official or your bank, paid off at once and in secret',
      needs: 'someone who says they are an official or from your bank, a fine, a debt or a danger to your money, and an order to pay at once by gift cards, crypto, cash or a transfer to an account they give you, often with an order to tell no one',
      aka: ['impersonation scam', 'safe account scam', 'tax scam', 'police impersonation scam'] },
    { id: 'fakelink', group: 'money', unit: 'u4',
      n: 'Fake payment link',
      plain: 'a small charge you do not owe, paid through a link',
      needs: 'a bill, a fine or a charge on something you are buying, a link in the message, and a payment page at the end of the link that asks for your card details',
      aka: ['parcel delivery scam', 'fake fine text', 'smishing'] },
    { id: 'overpayment', group: 'money', unit: 'u4',
      n: 'Overpayment scam',
      plain: 'a buyer who pays too much and wants the difference',
      needs: 'something you are selling, a payment from the buyer that is more than the price, and a request to send the difference back or on to someone else',
      aka: ['fake buyer scam'] },
    { id: 'realpayment', group: 'money', unit: 'u4', legit: true,
      n: 'Real payment request',
      plain: 'a bill, a fine or a deal that is what it says',
      needs: 'a bill, a fine or a deal that you can tie to something you already had or started, the amount you agreed or owe, details you have always paid or were given at the start, and a request that holds up when you contact them through a way you already had',
      aka: [] },

    // Tell them about yourself: taught by Unit Five.
    { id: 'identitytheft', group: 'details', unit: 'u5',
      n: 'Identity theft',
      plain: 'papers and numbers taken so that someone can pose as you',
      needs: 'a request for facts that identify you (papers, an ID or card number, your date of birth or address), and a request that came to you or asks for more than its reason needs',
      aka: ['identity fraud', 'ID theft'] },
    { id: 'friendlychat', group: 'details', unit: 'u5',
      n: 'Friendly chat before the ask',
      plain: 'a stranger’s warm chat about your life, with nothing asked yet',
      needs: 'someone you know only through messages, who reached you by chance or out of nowhere, friendly questions about your work, home, family, money or plans, and nothing yet asked to pay, sign in to, install or send',
      aka: ['wrong-number scam', 'grooming', 'building rapport', 'reconnaissance'] },
    { id: 'realdetails', group: 'details', unit: 'u5', legit: true,
      n: 'Real request for details',
      plain: 'a few facts asked for something you started',
      needs: 'facts about you asked for something you started yourself through a way you already had, and nothing beyond what that needs',
      aka: [] }
  ],

  terms: [
    { id: 'already', unit: 'u1', n: 'a way you already had',
      means: 'a phone number, an app or a web address that was yours before the message arrived: the number on your card, bill or contract, an app you installed yourself, an address you type in or bookmarked, or the company’s own office in person. A number, link or app that came with the message is never one, even if you are the one who dials it' },
    { id: 'check', unit: 'u1', n: 'the check',
      means: 'stopping before you do what a message asks, and contacting the company or person yourself through a way you already had, to ask whether the request is real' },
    { id: 'code', unit: 'u1', n: 'one-time code',
      means: 'a short number that a company texts or emails you to prove that it really is you signing in or paying. It works once, for a few minutes' },
    { id: 'permission', unit: 'u1', n: 'permission screen',
      means: 'a screen shown by your email or another account that asks you to press Allow, so that an app can read or act on your account without knowing your password' },
    { id: 'screenshare', unit: 'u1', n: 'screen-sharing',
      means: 'letting someone else see, or even control, your phone or computer screen from far away, through an app or a code you type in' },
    { id: 'searchad', unit: 'u2', n: 'search advert',
      means: 'a paid result at the top of a search page, marked “Sponsored” or “Ad”, which anyone can buy, a scammer included' }
  ],

  // Words the old lessons used that a newcomer could not follow, or that the old lessons used for two things.
  avoid: [
    { word: 'credential', sayInstead: 'a password, a one-time code or an Allow' },
    { word: 'legitimate', sayInstead: 'real' },
    { word: 'genuine', sayInstead: 'real' },
    { word: 'verify', sayInstead: 'check' },
    { word: 'pattern', sayInstead: 'name' },
    { word: 'category', sayInstead: 'the answer to the first question' },
    { word: 'vishing', sayInstead: 'a scam call' },
    { word: 'spoofing', sayInstead: 'faking the name or number that shows on your screen' },
    { word: 'spoofed', sayInstead: 'faked' },
    { word: 'payload', sayInstead: 'what the file does' },
    { word: 'mechanism', sayInstead: 'how it works' },
    { word: 'giveaway', sayInstead: 'what you must be able to point to' },
    { word: 'red flag', sayInstead: 'what you must be able to point to' },
    { word: 'foothold', sayInstead: 'a way onto your device' },
    { word: 'executable', sayInstead: 'a program file' },
    { word: 'liveness', sayInstead: 'a check that a real person is there' },
    { word: 'scopes', sayInstead: 'what the app may do' },
    { word: 'consent screen', sayInstead: 'permission screen' },
    { word: 'second factor', sayInstead: 'two-step sign-in' },
    { word: 'irreversible', sayInstead: 'cannot be undone' },
    { word: 'irreversibly', sayInstead: 'in a way that cannot be undone' },
    { word: 'urgency', sayInstead: 'hurry' },
    { word: 'isolation', sayInstead: 'being told to tell no one' },
    { word: 'counterparty', sayInstead: 'the other side' },
    { word: 'pretext', sayInstead: 'the reason given' },
    { word: 'harvesting', sayInstead: 'collecting' },
    { word: 'interception', sayInstead: 'someone asking for your one-time code' },
    { word: 'odd part', sayInstead: 'what it asks you to do with the money (the key no longer asks for the odd part)' },
    { word: 'diagnostic', sayInstead: 'the key’s question' },
    { word: 'falsify', sayInstead: 'what would make it a different name' },
    { word: 'deciding feature', sayInstead: 'what you must be able to point to' },
    { word: 'provisional', sayInstead: 'from one case so far' },
    { word: 'the rule', sayInstead: 'what you must be able to point to, or how to tell them apart' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its five answers are that unit's families.
  // The answers are listed in the order that wins when a request asks for two of them (yieldsTo): software or a view of
  // your screen reaches everything on the device, including your accounts; a way into an account reaches what the
  // account holds, including money; money is gone once sent; facts about you are taken last. So a refund call that wants
  // to see your screen and then wants money back gets the first answer, and a page that asks for a small fee and your
  // card number gets "Pay or send money". The fifth answer needs no tie-break: its "when" requires that nothing be asked.
  gate: {
    code: 'D1', unit: 'u1',
    q: 'What is it asking you to do right now?',
    purpose: 'Sorts a message, a call or an offer by the next thing it asks of you: something on your device, a way into an account, money, facts about you, or nothing at all',
    why: 'Each kind of request puts something different at risk, is guarded by a different habit, and leads to a different set of names. The story that comes with it, who it says it is from, and what the sender is after in the end do not change the answer: what it asks you to do does. You can answer it from the message or the call itself, at the moment the request is made. Where a request asks for two of these things, the key takes the one higher in the list, because it reaches further: a program or a view of your screen reaches everything on the device, a way into an account reaches what the account holds, and money is gone once it is sent.',
    options: [
      { id: 'device', n: 'Install something, open a file, or share your screen',
        plain: 'a way onto your phone or computer',
        needs: 'a request to install a program or an app, to open or run a file, or to let someone see or control your screen, or a warning that tells you to ring someone who will fix your device',
        when: 'it asks you to install a program or an app, to open or run a file, or to let someone see or control your screen, or it warns that your device has a problem and gives you someone to ring to fix it',
        keeps: ['techsupport', 'refundscam', 'malware', 'realinstall'] },
      { id: 'access', n: 'Sign in, give a code, or allow an app',
        plain: 'a way into one of your accounts',
        needs: 'a request to type your password into a sign-in page, to type, read out or send on a one-time code, or to press Allow on a permission screen',
        when: 'it asks you to sign in, to give a one-time code by typing it, reading it out or sending it on, or to press Allow so that an app can use one of your accounts',
        keeps: ['phishing', 'codescam', 'appscam', 'realsignin'],
        yieldsTo: [{ option: 'device', say: 'a request to install something, open a file or share your screen' }] },
      { id: 'money', n: 'Pay or send money',
        plain: 'money out of your account',
        needs: 'a request to pay or send money, by any means: a transfer, a card payment, cash, crypto or gift cards',
        when: 'it asks you to pay or send money, by any means, now or by a date',
        keeps: ['pigbutcher', 'romance', 'advancefee', 'recovery', 'invoicefraud', 'fakeofficial', 'fakelink', 'overpayment', 'realpayment'],
        yieldsTo: [{ option: 'device', say: 'a request to install something, open a file or share your screen' },
                   { option: 'access', say: 'a request to sign in, give a code or allow an app' }] },
      { id: 'details', n: 'Tell them about yourself',
        plain: 'facts about you',
        needs: 'a request for facts about you: papers or numbers that prove who you are, your date of birth or address, or your work, home and family in friendly chat',
        when: 'it asks for facts about you: a document, an ID or card number, your date of birth or address, or your work, home and family',
        keeps: ['identitytheft', 'friendlychat', 'realdetails'],
        yieldsTo: [{ option: 'device', say: 'a request to install something, open a file or share your screen' },
                   { option: 'access', say: 'a request to sign in, give a code or allow an app' },
                   { option: 'money', say: 'a request to pay or send money' }] },
      { id: 'nothing', n: 'Nothing: it only tells you something', legit: true,
        plain: 'news that asks nothing of you',
        needs: 'news about something that has happened or will happen, and no request: nothing to install, sign in to, pay or tell, and no number, link or app of its own for you to use',
        when: 'it tells you that something has happened or will happen and asks you to do nothing, and anything it suggests uses only what you already had, such as the app on your phone or the number on your card',
        keeps: [] }    // no branch: after this answer the key asks nothing more and gives no further name (K2.9)
    ]
  },

  // The branches, in course order (the same order as the gate's answers).
  branches: {
    // Install something, open a file, or share your screen. One question: each of the four names is defined by how the
    // request reached you, and nothing else is needed to tell them apart. Unit Two teaches it.
    device: [
      { code: 'I1', unit: 'u2',
        q: 'How did it come to you?',
        purpose: 'Tells apart the three ways scams get onto a device, and a real installation, by how the request reached you',
        why: 'Once a program is on your device, or someone can see your screen, they can watch everything you do there, so what decides it is how you came to be asked. Each of the four names is defined by that one thing, so this part of the key has one question. You can answer it at the moment you are asked, before you install, open or share anything.',
        options: [
          { id: 'support', n: 'Someone offering to fix a problem with your device',
            when: 'a warning on your screen, a call, a message or a search advert says that your device has a problem or offers support for it, and the person you reach wants to install something or see your screen to fix it',
            keeps: ['techsupport'],
            yieldsTo: [{ option: 'refund', say: 'talk of a refund, an overpayment or a problem with your bank account' }] },
          { id: 'refund', n: 'Someone sorting out a refund or your bank account',
            when: 'someone says that you are owed a refund, or that your bank account needs attention, and asks you to install something or let them see your screen while they sort it out',
            keeps: ['refundscam'] },
          { id: 'file', n: 'A file or a link in a message, for you to open',
            when: 'a file or a link arrives in an email, a text or a chat, with a reason to open, run or install it (an invoice, a payslip, a parcel note, an update, a test for a job), and nobody is on a call with you',
            keeps: ['malware'] },
          { id: 'own', n: 'Something you started yourself, through a way you already had',
            when: 'you started it yourself (an install, an update, or a screen share with a help desk) through a way you already had: the company’s own website, your device’s app store or its own update menu, or the company’s number that you looked up and rang. Nobody contacted you first to ask for it',
            keeps: ['realinstall'] }
        ] }
    ],

    // Sign in, give a code, or allow an app. Two questions: the first says what you would give, the second says whether
    // the real thing or a copy is asking for it. The real sign-in is kept by every answer of the first question, so the
    // second question does the separating that matters most. Unit Three teaches it.
    access: [
      { code: 'A1', unit: 'u3',
        q: 'What does it want you to type in or press?',
        purpose: 'Sorts requests for a way into an account by what you would give: a password, a one-time code or an Allow',
        why: 'Each of the three opens an account in a different way, is taken by a different scam, and is guarded by a different habit. You can answer it from the page, the message or the call itself, at the moment it asks.',
        options: [
          { id: 'password', n: 'Your password',
            when: 'you are asked to type your password, or your username and password, into a sign-in page',
            keeps: ['phishing', 'realsignin'] },
          { id: 'code', n: 'A one-time code sent to your phone or email',
            when: 'a one-time code has just come to your phone or email, and you are asked to type it in, read it out or send it on',
            keeps: ['codescam', 'realsignin'],
            yieldsTo: [{ option: 'password', say: 'a sign-in page that asks for your password first' }] },
          { id: 'allow', n: 'Allow, on a permission screen for an app',
            when: 'a permission screen asks you to press Allow so that an app can read or act on your mail, files, contacts or another part of your account',
            keeps: ['appscam', 'realsignin'] }
        ] },
      { code: 'A2', unit: 'u3',
        q: 'Does it fit something you started?',
        purpose: 'Tells a real sign-in, code or Allow apart from the scams that copy it',
        why: 'A real sign-in page, a real code and a real permission screen can each be used against you: what makes the difference is whether you started it yourself and whether it asks only for what you set out to do. You can answer it at the moment it asks, without knowing who is behind it.',
        options: [
          { id: 'fits', n: 'Yes: you started it through a way you already had, and it asks only what that needs',
            when: 'you set out to sign in or to connect an app yourself, on a site or app you reached through a way you already had, and you type the password or the code into that same site, or the app asks only for what your task needs',
            keeps: ['realsignin'] },
          { id: 'notfit', n: 'No: it came to you, or it asks for more than you set out to do',
            when: 'the sign-in page, the request for the code or the app came to you in a message, a call, a link or a pop-up you did not ask for, or the app asks for far more of your account than the task you set out to do needs',
            keeps: ['phishing', 'codescam', 'appscam'] }
        ] }
    ],

    // Pay or send money. Two questions: the first is the reason the request gives, which leaves one name or a few; the
    // second is what it asks you to do with the money, which settles the rest. The real payment request is kept by three
    // reasons (a bill, a fine or tax, a deal), because real requests come with those reasons too. Unit Four teaches it.
    money: [
      { code: 'M1', unit: 'u4',
        q: 'What does the request say the money is for?',
        purpose: 'Sorts requests for money by the reason they give, which leaves one name or a few',
        why: 'Each scam that asks for money comes with its own kind of reason, and a real request comes with an ordinary one: a bill, a fine or a tax, or a deal you are in. So the reason leaves one name, or a few for the next question to tell apart. You can answer it from the request itself, at the moment it is made.',
        options: [
          { id: 'online', n: 'An investment or an emergency of someone you know only online',
            when: 'the request comes from, or through, someone you have got to know only by messages and calls, usually over weeks or months, and the money is for an investment they showed you or for trouble they say they are in',
            keeps: ['pigbutcher', 'romance'] },
          { id: 'prize', n: 'A prize, an inheritance, a grant or a loan waiting for you',
            when: 'the request says that money is waiting for you (a prize, an inheritance, a grant, a loan, a refund or a payout) and the payment is part of getting it',
            keeps: ['advancefee'],
            yieldsTo: [{ option: 'lost', say: 'money you lost earlier, which someone says they can get back' }] },
          { id: 'lost', n: 'Getting back money you lost',
            when: 'the request is about money you lost earlier, often to a scam, and someone says they can get it back for you',
            keeps: ['recovery'] },
          { id: 'bill', n: 'A bill from someone you already pay',
            when: 'the request is for a bill, rent, a subscription or another payment you already make to someone you deal with: a supplier, a builder, a landlord, a solicitor, a phone company',
            keeps: ['invoicefraud', 'fakelink', 'realpayment'] },
          { id: 'official', n: 'A fine, a tax, or keeping your money safe',
            when: 'the request says it comes from an official (the tax office, the police, a court, a council, a toll or parking office) or from your bank, and is about a fine, a tax, a debt, or a danger to your money',
            keeps: ['fakeofficial', 'fakelink', 'realpayment'],
            yieldsTo: [{ option: 'prize', say: 'money said to be waiting for you' }] },
          { id: 'deal', n: 'Something you are buying, selling or booking',
            when: 'the request is part of a deal you are in: something you are buying, selling, renting, booking or waiting to have delivered',
            keeps: ['overpayment', 'fakelink', 'realpayment'],
            yieldsTo: [{ option: 'online', say: 'someone you know only online behind it' }] }
        ] },
      { code: 'M2', unit: 'u4',
        q: 'What does it ask you to do with the money?',
        purpose: 'Tells apart the names that share a reason for paying, by what the request asks you to do with the money',
        why: 'Each scam asks for the money in its own way, and a real request asks for it in an ordinary way that holds up when you check it. You can answer it from the request itself, before any money leaves your account.',
        options: [
          { id: 'site', n: 'Put it into a trading site or app that they showed you',
            when: 'you are asked to put money into a trading or investment site or app that someone you know only online showed you, or to pay that site a fee, a tax or a deposit before you can take money out',
            keeps: ['pigbutcher'] },
          { id: 'crisis', n: 'Pay for an emergency of someone you have never met',
            when: 'you are asked to pay for an emergency (a hospital bill, a fine, a ticket home, a blocked card) of someone you have never met in person and often never seen on a live video call',
            keeps: ['romance'] },
          { id: 'fee', n: 'Pay a fee before the money reaches you',
            when: 'you must pay a fee, a tax, a deposit or a charge before money you are promised will reach you',
            keeps: ['advancefee', 'recovery'],
            yieldsTo: [{ option: 'site', say: 'a trading site or app that someone you know only online showed you' }] },
          { id: 'newdetails', n: 'Pay into new bank details sent by message',
            when: 'a message (an email, a text or a letter) says that the bank details you pay into have changed, and asks you to pay into the new ones',
            keeps: ['invoicefraud'] },
          { id: 'link', n: 'Pay on a page reached from a link in the message',
            when: 'you are asked to pay, usually a small amount, by typing your card details into a payment page that you reach through a link in the message',
            keeps: ['fakelink'],
            yieldsTo: [{ option: 'fee', say: 'a fee before money you are promised reaches you' }] },
          { id: 'rush', n: 'Pay at once, in a way that cannot be undone, and tell no one',
            when: 'you are told to pay today or at once, by gift cards, crypto, cash or a transfer to an account they give you, usually with a threat, and told not to tell your bank, the shop staff or your family',
            keeps: ['fakeofficial'],
            yieldsTo: [{ option: 'site', say: 'a trading site or app that someone you know only online showed you' },
                       { option: 'crisis', say: 'an emergency of someone you have never met' },
                       { option: 'fee', say: 'a fee before money you are promised reaches you' },
                       { option: 'link', say: 'a payment page reached from a link in the message' },
                       { option: 'sendback', say: 'money they say they paid you by mistake' }] },
          { id: 'sendback', n: 'Send back money they say they paid you by mistake',
            when: 'someone has paid you, or seems to have paid you, more than they owe, and asks you to send the difference back or on to someone else',
            keeps: ['overpayment'] },
          { id: 'agreed', n: 'Pay what you agreed or owe, to details that pass the check',
            when: 'the amount is what you agreed or owe, the details are the ones you have always paid or were given when you started the deal yourself, nobody is rushing you or asking for secrecy, and the request holds up when you contact them through a way you already had',
            keeps: ['realpayment'] }
        ] }
    ],

    // Tell them about yourself. Two questions: the first says what kind of facts are wanted, the second is the same
    // question Unit Three teaches for sign-ins, asked of a request for facts. Unit Five teaches it.
    details: [
      { code: 'F1', unit: 'u5',
        q: 'What do they want to know about you?',
        purpose: 'Sorts requests for facts about you into facts that identify you and talk about your life',
        why: 'Facts that identify you can be used straight away to pose as you, and a real request may ask for some of them for something you started. Talk about your life is gathered for a request that comes later, from someone who has made a friend of you. You can answer it from the request or the chat itself.',
        options: [
          { id: 'identify', n: 'Facts that identify you: papers, ID or card numbers, your date of birth or address',
            when: 'you are asked for a document or a photo of one, an ID, tax or card number, your date of birth or your address, or a photo of yourself holding your ID',
            keeps: ['identitytheft', 'realdetails'] },
          { id: 'life', n: 'Your life: your work, home, family, money or plans',
            when: 'someone you know only through messages, who reached you by chance or out of nowhere, keeps up a friendly chat and asks about your work, home, family, money or plans, and asks for no papers or numbers yet',
            keeps: ['friendlychat'] }
        ] },
      { code: 'F2', unit: 'u5',
        q: 'Does it fit something you started?',
        purpose: 'Tells a real request for facts about you apart from the scams that collect them',
        why: 'A real company asks for some facts about you, and a scam asks for the same facts: the difference is whether you started it yourself, and whether the reason given needs what is asked. You can answer it at the moment you are asked, without knowing who is behind it.',
        options: [
          { id: 'fits', n: 'Yes: you started it through a way you already had, and it asks only what that needs',
            when: 'you started it yourself through a way you already had (you rang the number on your card, applied on the company’s own website, walked into their office), and what they ask for is only what that needs',
            keeps: ['realdetails'] },
          { id: 'notfit', n: 'No: it came to you, or it asks for more than you set out to do',
            when: 'they contacted you, through a message, a call, a friend request or a pop-up you did not ask for, or what they ask for is more than the reason given needs',
            keeps: ['identitytheft', 'friendlychat'] }
        ] }
    ]
  }
});
