// Scams, Unit Two: drill cases, the piece stage. It gives the unit's one question alone, on a new case. Field guide: see
// u2.cases-drill-2.js.

FC.cases('scams', 'u2', [

  /* ---------- Stage two: the unit's one question alone, on a new case ---------- */
  { id: 'dv-p-pdf-reader', use: 'drill', tier: 'clean', setting: 'work', topic: 'a PDF reader from a saved address',
    text: "Lucy's laptop will not open a PDF. She goes to the web address of a free reader's maker, which she saved in her bookmarks last year, presses Download and runs the file. Nobody has contacted her about it.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { I1: ['the web address of a free reader\'s maker, which she saved in her bookmarks last year', 'Nobody has contacted her about it'] },
    reason: { I1: 'Lucy went to the maker through an address she had saved: {cue:I1}. She started it, and nobody contacted her.' },
    not: { outcome: 'malware', why: 'Nothing was sent to her. She chose the reader and went to the maker through an address she had saved.' } },

  { id: 'dv-p-cv', use: 'drill', tier: 'clean', setting: 'work', topic: 'a résumé that needs content enabled',
    text: "An email reaches Hiro in the HR office: 'Please find my résumé attached. Open it and press Enable Content to see the formatting.' The sender is not an applicant he knows, and nobody has called him.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { I1: ['Open it and press Enable Content to see the formatting', 'The sender is not an applicant he knows'] },
    reason: { I1: 'A file arrived in an email from a stranger, with a reason to open it: {cue:I1}. Nobody is on a call with Hiro.' },
    not: { outcome: 'realinstall', why: 'Hiro did not set out to get anything, and went nowhere to fetch it. The file came to him.' } },

  { id: 'dv-p-airline-ad', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'an airline helpline from a sponsored result',
    text: "Tess's bag has not arrived, and she wants the airline's helpline. She types 'Skyway helpline' into a search page and calls the first number, which has 'Sponsored' beside it. A woman answers and says she can trace the bag if Tess lets her see her phone.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { I1: ["calls the first number, which has 'Sponsored' beside it", 'if Tess lets her see her phone'] },
    reason: { I1: 'The number came from a paid result, and the person who answers wants to see the phone to fix the problem: {cue:I1}. A {t:searchad} is not {t:already}, even when you chose what to search for.' },
    not: { outcome: 'realinstall', why: 'Tess went looking herself, and that is how a search begins. But the number came from a paid result, which she did not already have, and a person offered to fix a problem.' } },

  { id: 'dv-p-council-share', use: 'drill', tier: 'clean', setting: 'government', topic: 'a property tax refund and a Share button',
    text: "A man calls Lou: 'Your property tax has been overpaid by $420, and a refund is due to you. Open the meeting app and press Share so that I can see your screen and pay it back.' Lou has not heard from the county.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { I1: ['a refund is due to you', 'press Share so that I can see your screen and pay it back'] },
    reason: { I1: 'The caller says that a refund is due, and asks to see Lou’s device while it is paid: {cue:I1}. The reason is money, and she did not start the call.' },
    not: { outcome: 'techsupport', why: 'No fault with her device is mentioned. The reason for watching is money owed to her.' } }
]);
