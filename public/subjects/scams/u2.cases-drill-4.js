// Scams, Unit Two: drill cases, the second stage (piece) and the reverse items. Stage two gives the unit's one question
// alone, on a new case; the reverse items give the name and ask what to expect. Field guide: see u2.cases-drill-1.js.

FC.cases('scams', 'u2', [

  /* ---------- Stage two: the unit's one question alone, on a new case ---------- */
  { id: 'dv-p-pdf-reader', use: 'drill', tier: 'clean', setting: 'work', topic: 'a PDF reader from a saved address',
    text: "Lucy's laptop will not open a PDF. She goes to the web address of a free reader's maker, which she saved in her bookmarks last year, presses Download and runs the file. Nobody has contacted her about it.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { I1: ['the web address of a free reader\'s maker, which she saved in her bookmarks last year', 'Nobody has contacted her about it'] },
    reason: { I1: 'Lucy went to the maker through an address she had saved: {cue:I1}. She started it, and nobody contacted her.' },
    not: { outcome: 'malware', why: 'Nothing was sent to her. She chose the reader and went to the maker through an address she had saved.' } },

  { id: 'dv-p-cv', use: 'drill', tier: 'clean', setting: 'work', topic: 'a CV that needs content enabled',
    text: "An email reaches Hiro in the HR office: 'Please find my CV attached. Open it and press Enable Content to see the formatting.' The sender is not an applicant he knows, and nobody has phoned him.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { I1: ['Open it and press Enable Content to see the formatting', 'The sender is not an applicant he knows'] },
    reason: { I1: 'A file arrived in an email from a stranger, with a reason to open it: {cue:I1}. Nobody is on a call with Hiro.' },
    not: { outcome: 'realinstall', why: 'Hiro did not set out to get anything, and went nowhere to fetch it. The file came to him.' } },

  { id: 'dv-p-airline-ad', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'an airline helpline from a sponsored result',
    text: "Tess's bag has not arrived, and she wants the airline's helpline. She types 'Skyway helpline' into a search page and rings the first number, which has 'Sponsored' beside it. A woman answers and says she can trace the bag if Tess lets her see her phone.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { I1: ["rings the first number, which has 'Sponsored' beside it", 'if Tess lets her see her phone'] },
    reason: { I1: 'The number came from a paid result, and the person who answers wants to see the phone to fix the problem: {cue:I1}. A {t:searchad} is not {t:already}, even when you chose what to search for.' },
    not: { outcome: 'realinstall', why: 'Tess went looking herself, and that is how a search begins. But the number came from a paid result, which she did not already have, and a person offered to fix a problem.' } },

  { id: 'dv-p-council-share', use: 'drill', tier: 'clean', setting: 'government', topic: 'a council tax refund and a Share button',
    text: "A man rings Lou: 'Your council tax has been overpaid by £420, and a refund is due to you. Open the meeting app and press Share so that I can see your screen and pay it back.' Lou has not heard from the council.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { I1: ['a refund is due to you', 'press Share so that I can see your screen and pay it back'] },
    reason: { I1: 'The caller says that a refund is due, and asks to see Lou’s device while it is paid: {cue:I1}. The reason is money, and she did not start the call.' },
    not: { outcome: 'techsupport', why: 'No fault with her device is mentioned. The reason for watching is money owed to her.' } },

  { id: 'dv-p-helpdesk', use: 'drill', tier: 'clean', setting: 'work', topic: 'an IT help desk rung from the number on a badge',
    text: "Aziz's work laptop will not start its email program. He rings the IT help desk on the number printed on the back of his work badge. The helper asks him to press Share in the meeting app, so that she can see the problem. Nobody had contacted him.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { I1: ['rings the IT help desk on the number printed on the back of his work badge', 'Nobody had contacted him'] },
    reason: { I1: 'Aziz started the call himself, on a number he already had: {cue:I1}. A helper may ask to see the device, and nobody contacted him first.' },
    not: { outcome: 'techsupport', why: 'A helper asks to see his device, as a scam call would. But he rang, on a number from his own badge, and nobody contacted him first.' } },

  { id: 'dv-p-friend-video', use: 'drill', tier: 'clean', setting: 'relationships', topic: 'a link to a video from a friend’s account',
    text: "A message arrives in Lisa's chat app from her friend Anna: 'Is this you in this video?? Open the link and download the player to watch it.' Lisa and Anna have not spoken today, and nobody is on a call with Lisa.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { I1: ["A message arrives in Lisa's chat app from her friend Anna", 'Open the link and download the player to watch it'] },
    reason: { I1: 'A link arrived in a chat, with a reason to open it and download something: {cue:I1}. It looks as if it comes from a friend, and nobody is on a call with Lisa.' },
    not: { outcome: 'realinstall', why: 'Lisa did not set out to get a player. A link came to her in a chat, even though it seems to come from a friend.' } },

  { id: 'dv-p-accounts-email', use: 'drill', tier: 'clean', setting: 'work', topic: 'an email about slow accounts software',
    text: "An email reaches Fran, who keeps the books for a charity: 'Our monitoring shows that your accounts software is running slowly and may lose data. Call our support team on 0800 555 0124 and we will fix it remotely today.' Fran does not use any monitoring service.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { I1: ['Our monitoring shows that your accounts software is running slowly', 'Call our support team on 0800 555 0124 and we will fix it remotely today'] },
    reason: { I1: 'A message says that the software has a problem and offers someone to fix it: {cue:I1}. Fran has no such service, so the sender cannot know anything about her computer.' },
    not: { outcome: 'malware', why: 'The email holds no file or link to open. It gives her a number to ring and offers to fix a problem.' } },

  { id: 'dv-p-fridge-refund', use: 'drill', tier: 'varied', setting: 'shopping', topic: 'a double charge for a fridge',
    text: "Nadir gets a call: 'This is Tradeline, the shop where you bought your fridge. We charged your card twice, so I owe you £89. I will refund it while you watch. Please install the help tool from the link I will text you.'",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { I1: ['We charged your card twice, so I owe you £89', 'install the help tool from the link I will text you'] },
    reason: { I1: 'The caller says that Nadir is owed money, and asks him to install a tool while it is paid back: {cue:I1}. The reason is a refund, and a person is on the call.' },
    not: { outcome: 'techsupport', why: 'No fault with his device is mentioned. The reason for installing the tool is money owed to him.' } },

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'dv-rev-realinstall', use: 'drill', kind: 'reverse', outcome: 'realinstall', expect: 'find',
    options: [
      { text: 'He typed the maker’s web address into his browser himself, and nobody had contacted him.', voice: 'realinstall' },
      { text: 'An email arrived from an address she did not know, with an installer attached.', voice: 'malware' },
      { text: 'A page said that his computer was locked and gave him a number to ring.', voice: 'techsupport' },
      { text: 'A caller said that she owed him a refund and asked to see his computer.', voice: 'refundscam' }
    ],
    why: 'That detail shows where he went: an address he typed himself, with nobody contacting him first. That is what {o:realinstall} needs.' },

  { id: 'dv-rev-malware', use: 'drill', kind: 'reverse', outcome: 'malware', expect: 'hear',
    options: [
      { text: '"Open the attached invoice to see what you owe."', voice: 'malware' },
      { text: '"I\'ll download it from the company\'s own website."', voice: 'realinstall' },
      { text: '"Call this number now to remove the threat."', voice: 'techsupport' },
      { text: '"You were charged twice, so I owe you a refund."', voice: 'refundscam' }
    ],
    why: 'It is a reason to open a file that has arrived in a message ("attached"), with nobody talking to you. A file or a link in a message is the answer for {o:malware}.' },

  { id: 'dv-rev-techsupport', use: 'drill', kind: 'reverse', outcome: 'techsupport', expect: 'hear',
    options: [
      { text: '"Please run the attached file before the interview."', voice: 'malware' },
      { text: '"Your computer has a serious fault. Ring this number and we will fix it."', voice: 'techsupport' },
      { text: '"I\'ll find it in the app store."', voice: 'realinstall' },
      { text: '"We owe you a refund. I just need to see your computer."', voice: 'refundscam' }
    ],
    why: 'It announces a fault that nobody could know about, and offers someone to fix it. That is what {o:techsupport} sounds like.' },

  { id: 'dv-rev-refundscam', use: 'drill', kind: 'reverse', outcome: 'refundscam', expect: 'find',
    options: [
      { text: 'A page with a siren and a number to ring.', voice: 'techsupport' },
      { text: 'A message with a file called Statement.pdf.exe.', voice: 'malware' },
      { text: 'A caller who says that his bank account is in danger, and who wants to watch his device while he stops a payment.', voice: 'refundscam' },
      { text: 'A button on the company\'s own website that says Download.', voice: 'realinstall' }
    ],
    why: 'That detail is the reason about money (a refund, or a bank account that needs attention) given by someone on a call who wants to see the device. That is what {o:refundscam} needs.' }
]);
