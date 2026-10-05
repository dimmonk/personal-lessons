// Scams, Unit Two: drill cases for the first two stages. None of these appears in a card.
// Stage one (name): the key's answers are shown, and the learner gives the name. Stage two (piece): the unit's one question
// alone, on a new case; then the reverse items (the name is given, the learner says what to expect).
// reason[STEP] is the reason tied to the marked words, shown after the answer; not names the most tempting wrong name and
// says why it fails for this case. A real installation is in every stage that asks about cases.

FC.cases('scams', 'u2', [

  /* ---------- Stage one: the key's answer is shown; the learner gives the name ---------- */
  { id: 'dv-n-recycling-app', use: 'drill', tier: 'clean', setting: 'government', topic: 'a council app found from a saved website',
    text: "Zainab has bookmarked her council's website. This morning she opens the bookmark, reads that the council has a recycling app, and follows the button on that page to her phone's app store, where she presses Get. Nobody has messaged her about the app.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { I1: ["Zainab has bookmarked her council's website", 'Nobody has messaged her about the app'] },
    reason: { I1: 'Zainab went to the council through an address she had saved, and the app store was reached from its own page: {cue:I1}. She started it, and nobody contacted her.' },
    not: { outcome: 'malware', why: 'She did follow a button, but it was on a website she had saved, not a link in a message that came to her. Nothing was sent to her.' } },

  { id: 'dv-n-voicemail', use: 'drill', tier: 'clean', setting: 'work', topic: 'a voicemail sent as a program file',
    text: "An email reaches Chloe at work: 'You have a new voicemail from a client. Play the attached message.' The attachment is called Voice-Message.exe. She does not recognise the sender's address, and nobody has phoned her.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { I1: ['Play the attached message', "She does not recognise the sender's address"] },
    reason: { I1: 'A file arrived in an email from a sender she does not know, with a reason to open it: {cue:I1}. Nobody is on a call with her.' },
    not: { outcome: 'realinstall', why: 'Chloe did not set out to get anything. The file came to her, so she did not reach it through anything she already had.' } },

  { id: 'dv-n-phone-hacked', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a full-page warning on a phone',
    text: "While Ray plays a game on his phone, a full-page message appears: 'Your phone has been hacked. Call Mobile Support now on 0800 555 0136 before your photos are deleted.' When he rings, a man says he can fix it if Ray installs a small program.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { I1: ['Call Mobile Support now on 0800 555 0136', 'he can fix it if Ray installs a small program'] },
    reason: { I1: 'A warning says that Ray’s phone has a problem and gives him someone to ring to fix it: {cue:I1}. A page cannot know that, and the person he reaches wants to install something.' },
    not: { outcome: 'malware', why: 'There is no file or link to open. The message gives him a number to ring, and a person on the line offers to fix a problem.' } },

  { id: 'dv-n-outage-refund', use: 'drill', tier: 'clean', setting: 'home', topic: 'compensation for a broadband outage',
    text: "A man phones Beth: 'We are sorry about last week's outage. You are owed £48 compensation, and I can pay it today. Please press Share in the meeting app so that I can see your screen and sort out the payment.' Beth had not complained about an outage.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { I1: ['You are owed £48 compensation', 'so that I can see your screen and sort out the payment'] },
    reason: { I1: 'The caller says that money is owed to Beth, and asks to see her device while it is paid: {cue:I1}. The reason is a refund of a kind, and she did not ask for it.' },
    not: { outcome: 'techsupport', why: 'No fault with her device is mentioned. The reason the man gives for wanting to see it is a payment she is owed.' } },

  { id: 'dv-n-quote-file', use: 'drill', tier: 'varied', setting: 'home', topic: 'a builder’s quote that needs content enabled',
    text: "A message from a number that Rae does not know reads: 'Hi, this is the builder you rang about the kitchen. Our quote is in this file: open it and press Enable Content.' Rae has not rung any builder.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { I1: ['A message from a number that Rae does not know', 'open it and press Enable Content'] },
    reason: { I1: 'A file reached Rae in a message from a number she does not know, with a reason to open it: {cue:I1}. She has no builder, and nobody is on a call with her.' },
    not: { outcome: 'realinstall', why: 'Rae did not go anywhere to get this. It was sent to her, with a story that fits a kitchen she may really be planning.' } },

  { id: 'dv-n-password-manager', use: 'drill', tier: 'varied', setting: 'home', topic: 'a password manager with an unknown-publisher box',
    text: "Joel wants a password manager, and he types the maker's web address, vaultkeep.com, into his browser. He reads the Download page, downloads the program and runs it. A box asks whether to allow changes and says that the publisher is not yet known on his computer. He presses Yes. Nobody has contacted him about it.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { I1: ["types the maker's web address, vaultkeep.com, into his browser", 'Nobody has contacted him about it'] },
    reason: { I1: 'Joel set out to get the program and went to the maker himself: {cue:I1}. The box about an unknown publisher appears for harmful programs and for many real ones, so it does not change how he came to it.' },
    not: { outcome: 'malware', why: 'The warning box is a reason to take care, but nothing was sent to him. He fetched the program, from an address he typed, and nobody contacted him.' } },

  { id: 'dv-n-flight-refund', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'compensation for a cancelled flight',
    text: "Pia's flight was cancelled in the summer. A man rings her: 'Your airline owes you £260 in compensation. I need you to install a small support tool, so that I can see your account and release the money to you.' Pia has not heard from the airline since.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { I1: ['Your airline owes you £260 in compensation', 'install a small support tool, so that I can see your account'] },
    reason: { I1: 'The caller says that money is owed to Pia, and asks her to install a tool while it is released: {cue:I1}. The reason is a refund, and she did not start the call.' },
    not: { outcome: 'techsupport', why: 'The caller is not offering to fix anything on her device. The reason he gives for wanting to reach it is money owed to her.' } },

  { id: 'dv-n-clinic-popup', use: 'drill', tier: 'varied', setting: 'health', topic: 'a failing-system page on a clinic computer',
    text: "At a clinic's front desk, the booking computer shows a page that fills the window: 'Your system is failing. Technicians are standing by. Call 0800 555 0149.' The receptionist rings, and a woman says she can repair it if the receptionist lets her see the computer.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { I1: ['Technicians are standing by. Call 0800 555 0149', 'she can repair it if the receptionist lets her see the computer'] },
    reason: { I1: 'A warning says that the computer has a problem and gives a number to ring for someone who will fix it: {cue:I1}. The woman who answers wants to see the computer.' },
    not: { outcome: 'refundscam', why: 'No money is mentioned: no refund and no bank. The reason given for wanting to see the computer is a fault in it.' } }
]);
