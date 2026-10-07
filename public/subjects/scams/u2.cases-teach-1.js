// Scams, Unit Two: cases shown inside cards, part one: the term case, the real installation (a program you chose and
// fetched yourself), and a file or a link sent in a message.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A case used only by a term card has text and nothing else: no question is asked of it.
// route is { D1: [...], I1: [...] }: every case of this unit is a request about a device (the first question's answer),
// and the unit's own question, how it came to you, gives the name. cues.I1 is the exact words that show how it came.
// Every firm, program, phone number and website is invented. Cases are written the way people really receive them.

FC.cases('scams', 'u2', [

  /* ---------- the case that carries the term "search ad" (no name is asked of it) ---------- */
  { id: 'dv-t-searchad', use: 'teach', tier: 'clean', setting: 'home', topic: 'a repair number found in an ad', name: 'The first result',
    text: "Rosa's dryer stops working. She types 'Hartley appliance repair phone number' into a search page. The first result has a small label, 'Ad', beside it, and a phone number in bold. Underneath it, with no label, is the Hartley company's own website, which lists a different number. She calls the number in the ad, and a man answers: 'Hartley support, how can I help you?'" },

  /* ---------- Real installation ---------- */
  { id: 'dv-video-app', use: 'teach', tier: 'clean', setting: 'work', topic: 'a video-calling program from its maker', name: 'The video-calling program',
    text: "Priya's team is switching to a video-calling program called Huddle. At her desk she types the maker's web address, huddle.com, into her browser herself. She presses the Download button on the page and runs the file. Her computer shows a box: 'Do you want to allow this app to make changes to your device?' She presses Yes. Nobody has called or messaged her about any of this.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { I1: ["types the maker's web address, huddle.com, into her browser herself", 'Nobody has called or messaged her about any of this'] } },

  { id: 'dv-c-printer', use: 'check', tier: 'clean', setting: 'home', topic: 'a scanner program from the printer maker',
    text: "Ed's new printer needs a program before it can scan. He types the printer maker's web address into his browser, opens its Support page and picks his printer's model from a list. He downloads the program and runs it, and his computer asks whether to allow it to make changes. His phone has been quiet all day; nobody has contacted him.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { I1: ["He types the printer maker's web address into his browser", 'nobody has contacted him'] },
    segments: [
      { text: "Ed's new printer needs a program before it can scan", note: 'That is why Ed wants the program. It does not say how he got it.' },
      { text: "He types the printer maker's web address into his browser, opens its Support page and picks his printer's model from a list" },
      { text: 'He downloads the program and runs it, and his computer asks whether to allow it to make changes', note: 'This is the installation itself. A harmful program shows the same box, so the box shows nothing about how he got it.' },
      { text: 'His phone has been quiet all day; nobody has contacted him', note: 'True, but it only says nobody contacted him. Where he went to get the program is in the second piece.' }
    ],
    reason: { I1: 'Ed started it himself, with an address he typed, and nobody contacted him: {cue:I1}.' } },

  /* ---------- the look-alike pair: the same person and the same program, fetched and sent ---------- */
  { id: 'dv-lk-photo-own', use: 'teach', tier: 'clean', setting: 'home', topic: 'a photo editor, fetched from its maker', name: 'The newest version',
    text: "Lena has used a photo editor called Pixelbench for a year, and she wants the newest version. She types the maker's web address, pixelbench.com, into her browser herself and presses Download. She runs the installer, and her computer shows a box: 'Do you want to allow this app to make changes to your device?' She presses Yes.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { I1: ["types the maker's web address, pixelbench.com, into her browser herself"] } },

  { id: 'dv-lk-photo-mail', use: 'teach', tier: 'clean', setting: 'home', topic: 'a photo editor, installer sent by email', name: 'The expired license',
    text: "Lena has used a photo editor called Pixelbench for a year. An email arrives from an address she does not know: 'Your Pixelbench license needs updating. Run the attached installer to keep using it.' She runs the installer, and her computer shows a box: 'Do you want to allow this app to make changes to your device?' She presses Yes.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { I1: ['An email arrives from an address she does not know', 'Run the attached installer to keep using it'] } },

  /* ---------- Malware ---------- */
  { id: 'dv-invoice-file', use: 'teach', tier: 'clean', setting: 'work', topic: 'an unpaid invoice sent as a file', name: 'The invoice file',
    text: "An email reaches Sam at work from an address he does not know: 'Hello, the invoice below is unpaid. Open the attached file to see the amount due and to avoid a late fee.' The attachment is called Invoice-4471.exe. Sam has not ordered anything from this firm, and nobody has called him.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { I1: ['An email reaches Sam at work from an address he does not know', 'Open the attached file to see the amount due', 'nobody has called him'] } },

  { id: 'dv-c-photo-zip', use: 'check', tier: 'clean', setting: 'relationships', topic: 'photos in a zip file from a stranger',
    text: "A message reaches Kofi from a number he does not know: 'Hi! Here are the photos from Saturday. Download the zip file and open it.' Kofi was not at anything on Saturday, and nobody is talking to him on the phone.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { I1: ['A message reaches Kofi from a number he does not know', 'Download the zip file and open it'] },
    reason: { I1: 'A stranger messaged Kofi a file to open: {cue:I1}. Nobody is on the phone with him, and he fetched nothing.' } }
]);
