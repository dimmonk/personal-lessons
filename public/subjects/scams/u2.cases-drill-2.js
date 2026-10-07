// Scams, Unit Two: drill cases for the route stage: the whole route alone, on clean cases. The misleading ones are in
// u2.cases-drill-5.js. A real installation is in every group of every stage.

FC.cases('scams', 'u2', [

  /* ---------- Stage four: route, clean ---------- */
  { id: 'dv-r-notes-app', use: 'drill', tier: 'clean', setting: 'work', topic: 'a note-taking program from its maker',
    text: "Greta's team uses a note-taking program called Jotpad. She types the maker's web address, jotpad.com, into her browser, downloads the program and runs it. A box asks: 'Do you want to allow this app to make changes to your device?' Nobody has called, texted or emailed her about it.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { D1: "Do you want to allow this app to make changes to your device?", I1: ["types the maker's web address, jotpad.com, into her browser", 'Nobody has called, texted or emailed her about it'] },
    reason: { D1: 'The box asks Greta to let a program change her computer: {cue:D1}. That is a request about her device, and it does not yet say whether it is real.',
              I1: 'Greta typed the maker’s address herself, and nobody contacted her: {cue:I1}.' },
    not: { outcome: 'malware', why: 'Nothing was sent to her. The same box appears for a harmful program, so it says nothing about how she got it.' } },

  { id: 'dv-r-attorney', use: 'drill', tier: 'clean', setting: 'home', topic: 'house papers that need a program to open',
    text: "An email reaches Ben from an address he does not know: 'Your home closing documents are attached. Please run the file Closing-Documents.exe to open them.' Ben is not buying a home, and nobody has called him.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { D1: 'Please run the file Closing-Documents.exe to open them', I1: ['An email reaches Ben from an address he does not know', 'Ben is not buying a home'] },
    reason: { D1: 'The email asks Ben to run a file: {cue:D1}. That is a request about his device.',
              I1: 'The file reached him in an email from a stranger, with a reason to run it: {cue:I1}. Nobody is on the phone with him.' },
    not: { outcome: 'realinstall', why: 'Ben did not decide to get any program. It came to him.' } },

  { id: 'dv-r-lockpage', use: 'drill', tier: 'clean', setting: 'health', topic: 'a red box with an alarm over a patient page',
    text: "A patient portal page that Mr. Adeyemi has open on his laptop is covered by a red box: 'Virus detected! Your data is being stolen. Call Support now at (800) 555-0155.' A loud alarm plays, and the box will not close.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { D1: 'Call Support now at (800) 555-0155', I1: ['Your data is being stolen', 'Call Support now at (800) 555-0155'] },
    reason: { D1: 'The warning says his device has a problem and gives him someone to call: {cue:D1}. That counts as a request about the device.',
              I1: 'A web page cannot know about a problem on his laptop, and this one offers a number to call: {cue:I1}. Nothing was sent to him, and nothing is said about money.' },
    not: { outcome: 'malware', why: 'There is no file or link to open. The page gives him a number to call.' } },

  { id: 'dv-r-streaming-refund', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a double bill for a streaming service',
    text: "A woman calls Cass: 'You have been billed twice for your streaming subscription, so $30 is owed to you. Press Share in the meeting app and I will pay it back while you watch.'",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { D1: 'Press Share in the meeting app', I1: ['You have been billed twice for your streaming subscription, so $30 is owed to you'] },
    reason: { D1: 'The caller asks Cass to share her screen: {cue:D1}. That is a request about her device, whatever reason is given.',
              I1: 'The caller says money is owed to Cass, and the reason for watching is a refund: {cue:I1}. Cass did not start the call.' },
    not: { outcome: 'techsupport', why: 'No problem with her device is mentioned. The reason for watching is money owed to her.' } }
]);
