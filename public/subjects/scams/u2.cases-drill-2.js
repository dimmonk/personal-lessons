// Scams, Unit Two: drill cases for the third and fourth stages. Stage three (finish): the first answer is shown, and the
// learner answers the unit's question and gives the name. Stage four (route): the whole route alone, clean cases before
// cases whose story misleads. echo names a teaching case of a DIFFERENT name whose story the case is built to bring back,
// so that the second look ("does it look like a case you know?") is practised where the likeness points the wrong way.
// A real installation is in every group of every stage.

FC.cases('scams', 'u2', [

  /* ---------- Stage three: finish ---------- */
  { id: 'dv-f-launcher', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a game from its maker’s website',
    text: "Ines wants to play a game she has read about. She types the game maker's web address into her browser, presses Download on its page and runs the file. Nobody has called or messaged her about the game.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { I1: ["She types the game maker's web address into her browser", 'Nobody has called or messaged her about the game'] },
    reason: { I1: 'Ines went to the maker herself: {cue:I1}. She started it, and she used an address she typed.' },
    not: { outcome: 'malware', why: 'Nothing was sent to her. She chose the game and fetched it, and no message or call came first.' } },

  { id: 'dv-f-shared-folder', use: 'drill', tier: 'clean', setting: 'work', topic: 'a viewer needed for a shared folder',
    text: "A message arrives in the team chat from a name Dan does not recognize: 'Hi all, the new schedule is in this shared folder. Download and run the viewer first, or the file will not open.' Dan has not been told about a new schedule, and nobody is on a call with him.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { I1: ['A message arrives in the team chat from a name Dan does not recognize', 'Download and run the viewer first, or the file will not open'] },
    reason: { I1: 'A link and a program to run arrived in a chat, from someone he does not know, with a reason to run it: {cue:I1}. Nobody is on a call with Dan.' },
    not: { outcome: 'realinstall', why: 'Dan did not decide to get a viewer. A message told him to, so he did not come to it through anything he already had.' } },

  { id: 'dv-f-warranty-email', use: 'drill', tier: 'varied', setting: 'home', topic: 'an email about a lapsed warranty',
    text: "An email reaches Mr. Pike: 'Our records show that your computer's warranty has lapsed and that it may fail. Call (800) 555-0117 and our engineers will check it for you, free of charge.' Mr. Pike has never bought a warranty. When he calls, an engineer asks him to open a web page and type in a code so that he can look at the computer.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { I1: ['Call (800) 555-0117 and our engineers will check it for you, free of charge', 'so that he can look at the computer'] },
    reason: { I1: 'A message says that his computer may fail and offers engineers to look at it: {cue:I1}. He has no warranty, so the sender cannot know anything about his computer, and the engineer wants to see it.' },
    not: { outcome: 'malware', why: 'The email is a message, but it holds no file or link to open. It gives him a number to call, and a person on the line asks to see the computer.' } },

  { id: 'dv-f-crypto-refund', use: 'drill', tier: 'varied', setting: 'money', topic: 'a fee refund from a crypto exchange',
    text: "A woman calls Yan: 'This is the support team at the exchange where you hold your crypto. Our fees were calculated wrongly, so we owe you $540. Install the secure-refund tool from the link I am sending you and I will send the money to you.' Yan had not noticed any problem with fees.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { I1: ['Our fees were calculated wrongly, so we owe you $540', 'Install the secure-refund tool from the link I am sending you'] },
    reason: { I1: 'The caller says that money is owed to Yan, and asks him to install a tool before it is paid: {cue:I1}. A person is on the call, and the reason is a refund.' },
    not: { outcome: 'malware', why: 'A link and a program to install are in it, but a person is on a call with him, and the reason given is money owed to him. A file or a link with nobody on a call is the other answer.' } },

  /* ---------- Stage four: route, clean ---------- */
  { id: 'dv-r-notes-app', use: 'drill', tier: 'clean', setting: 'work', topic: 'a note-taking program from its maker',
    text: "Greta's team uses a note-taking program called Jotpad. She types the maker's web address, jotpad.com, into her browser, downloads the program and runs it. A box asks: 'Do you want to allow this app to make changes to your device?' Nobody has called, texted or emailed her about it.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { D1: "Do you want to allow this app to make changes to your device?", I1: ["types the maker's web address, jotpad.com, into her browser", 'Nobody has called, texted or emailed her about it'] },
    reason: { D1: 'The box asks Greta to allow a program to make changes to her computer: {cue:D1}. A request to install something is a request about the device, and the first question does not say whether it is real.',
              I1: 'Greta went to the maker through an address she typed: {cue:I1}. She started it, and nobody contacted her.' },
    not: { outcome: 'malware', why: 'Nothing was sent to her. The box is the same box a harmful program shows, and it does not show how she came to the program.' },
    wouldChange: 'If the program had been attached to an email from someone she did not know, it would be {a:I1.file}.' },

  { id: 'dv-r-attorney', use: 'drill', tier: 'clean', setting: 'home', topic: 'house papers that need a program to open',
    text: "An email reaches Ben from an address he does not know: 'Your home closing documents are attached. Please run the file Closing-Documents.exe to open them.' Ben is not buying a home, and nobody has called him.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { D1: 'Please run the file Closing-Documents.exe to open them', I1: ['An email reaches Ben from an address he does not know', 'Ben is not buying a home'] },
    reason: { D1: 'The email asks Ben to run a file: {cue:D1}. A request to run a file is a request about his device.',
              I1: 'The file reached him in an email from an address he does not know, with a reason to run it: {cue:I1}. Nobody is on a call with him.' },
    not: { outcome: 'realinstall', why: 'Ben did not decide to get any program. It came to him, and he went nowhere to fetch it.' },
    wouldChange: 'If Ben had been buying a house and had typed in the attorney’s own web address to download his papers from a page he had used before, it would be {a:I1.own}.' },

  { id: 'dv-r-lockpage', use: 'drill', tier: 'clean', setting: 'health', topic: 'a red box with an alarm over a patient page',
    text: "A patient portal page that Mr. Adeyemi has open on his laptop is covered by a red box: 'Virus detected! Your data is being stolen. Call Support now at (800) 555-0155.' A loud alarm plays, and the box will not close.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { D1: 'Call Support now at (800) 555-0155', I1: ['Your data is being stolen', 'Call Support now at (800) 555-0155'] },
    reason: { D1: 'The warning says that his device has a problem and gives him someone to call to deal with it: {cue:D1}. That counts as a request about the device.',
              I1: 'A warning announces a problem that a web page cannot know about, and offers someone to call: {cue:I1}. Nothing was sent to him, and nothing is offered about money.' },
    not: { outcome: 'malware', why: 'There is no file or link to open. The page gives him a number to call.' },
    wouldChange: 'If the red box had come in an email, with a file to open and no number to call, it would be {a:I1.file}.' },

  { id: 'dv-r-streaming-refund', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a double bill for a streaming service',
    text: "A woman calls Cass: 'You have been billed twice for your streaming subscription, so $30 is owed to you. Press Share in the meeting app and I will pay it back while you watch.'",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { D1: 'Press Share in the meeting app', I1: ['You have been billed twice for your streaming subscription, so $30 is owed to you'] },
    reason: { D1: 'The caller asks Cass to share her device: {cue:D1}. A request to let someone watch your device is a request about the device, whatever the reason given.',
              I1: 'The caller says that money is owed to Cass: {cue:I1}. The reason given for watching is a refund, and she did not start the call.' },
    not: { outcome: 'techsupport', why: 'No fault with her device is mentioned. The reason for wanting to watch is money owed to her.' },
    wouldChange: 'If the caller had said that her device had a fault, and offered to fix it, it would be {a:I1.support}.' },

  /* ---------- Stage four: route, varied ---------- */
  { id: 'dv-r-helpdesk-contract', use: 'drill', tier: 'varied', setting: 'home', topic: 'a phone company help desk called from the contract',
    text: "Sana's phone cannot send messages. She finds her phone company's number on her contract and calls it. The adviser says: 'Please open the meeting app and press Share so that I can see your settings.' Nobody had contacted her about the problem.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { D1: 'Please open the meeting app and press Share', I1: ["She finds her phone company's number on her contract and calls it", 'Nobody had contacted her about the problem'] },
    reason: { D1: 'The adviser asks Sana to share her device: {cue:D1}. That is a request about the device, whoever makes it.',
              I1: 'Sana started the call herself, at a number from her contract, which was hers before the problem: {cue:I1}. It is {t:already}, and nobody contacted her first.' },
    not: { outcome: 'techsupport', why: 'An adviser offers to look at a fault and asks to see the device, as in a scam call. But Sana called, at a number she already had, and nobody contacted her first.' },
    wouldChange: 'If a text had told her to call a number about errors on her phone, and she had called that number, it would be {a:I1.support}.' },

  { id: 'dv-r-bank-text', use: 'drill', tier: 'varied', setting: 'money', topic: 'a new bank app offered by text',
    text: "A text reaches Bo from a number he does not know: 'Halbrook Bank: our new app is ready. Install it now from this link, or your online banking will stop on Friday: halbrook-newapp.com' He has not heard from the bank about a new app.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { D1: 'Install it now from this link', I1: ['A text reaches Bo from a number he does not know', 'Install it now from this link'] },
    reason: { D1: 'The text asks Bo to install an app from a link: {cue:D1}. That is a request about his device.',
              I1: 'The link reached him in a text from a number he does not know, with a reason to hurry: {cue:I1}. Nobody is on a call with him.' },
    not: { outcome: 'realinstall', why: 'It is a bank’s app, and Bo may well want his bank’s app. But he did not go to the bank or to an app store: it came to him in a text.' },
    wouldChange: 'If Bo had opened his phone’s app store himself and searched for the bank’s name, it would be {a:I1.own}.' },

  { id: 'dv-r-wifi-call', use: 'drill', tier: 'varied', setting: 'home', topic: 'a call about a stranger on the wifi',
    text: "A woman calls Colin: 'I am calling from the support team at your internet provider. We can see that a stranger is using your wifi. I can remove them if you let me see your laptop.'",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { D1: 'I can remove them if you let me see your laptop', I1: ['We can see that a stranger is using your wifi', 'I can remove them if you let me see your laptop'] },
    reason: { D1: 'The caller asks to see Colin’s laptop: {cue:D1}. Letting someone watch your device is a request about the device.',
              I1: 'The caller announces a problem that nobody outside could see, and offers to fix it: {cue:I1}. No refund and no bank account is mentioned.' },
    not: { outcome: 'refundscam', why: 'The reason given for wanting to see the laptop is a problem with it, not money owed to him or an account that needs attention.' },
    wouldChange: 'If she had said that he had been charged twice and she owed him a refund, it would be {a:I1.refund}.' },

  { id: 'dv-r-parcel-refund', use: 'drill', tier: 'varied', setting: 'shopping', topic: 'a refund for a lost package',
    text: "A man calls Ruth, whose package never arrived: 'This is the courier's claims team. You are owed $35 for the lost package. To refund it, please press Share in the meeting app and I will go through your bank with you.'",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { D1: 'please press Share in the meeting app', I1: ['You are owed $35 for the lost package', 'I will go through your bank with you'] },
    reason: { D1: 'The caller asks Ruth to share her device: {cue:D1}. That is a request about the device.',
              I1: 'The caller says that money is owed to Ruth, and wants to go through her bank with her: {cue:I1}. The reason given is a refund. The lost package is real, which is why it sounds true.' },
    not: { outcome: 'techsupport', why: 'The caller is not offering to fix a fault with her device. The reason for watching is a refund and her bank.' },
    wouldChange: 'If he had said that the courier’s tracking page had found errors on her computer, it would be {a:I1.support}.' }
]);
