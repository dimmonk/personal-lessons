// Scams, Unit Two: fresh cases held back for later days (lesson standard E9, V44), part one: a real installation and a
// file or a link in a message. Two for each name, because this is an action subject. A name that is due comes back as a case the learner has not seen,
// beside a case of the name they most often take it for. Every case carries marked words and a reason for both questions,
// because it is run as a whole route.

FC.cases('scams', 'u2', [

  /* ---------- Real installation ---------- */
  { id: 'dv-ret-language-app', use: 'return', tier: 'clean', setting: 'leisure', topic: 'a language app from the app store',
    text: "Hana wants to learn Spanish. On her phone she opens the app store, searches for 'Lingua' and picks the app published by the Lingua company. She presses Install, and the store asks for her fingerprint. Nobody has contacted her about it.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { D1: 'She presses Install', I1: ['On her phone she opens the app store', 'Nobody has contacted her about it'] },
    reason: { D1: 'The store asks Hana to install an app: {cue:D1}. A request to install something is a request about the device.',
              I1: 'Hana went to her phone’s own app store: {cue:I1}. She started it, and nobody contacted her.' },
    not: { outcome: 'malware', why: 'No link or file was sent to her. She chose the app and fetched it from the store.' } },

  { id: 'dv-ret-helpdesk-oven', use: 'return', tier: 'varied', setting: 'shopping', topic: 'a maker’s help desk called from the booklet',
    text: "Wanda's new oven will not start. She finds the maker's number in the booklet that came with it and calls it. The helper says: 'I can send you a link to a video call, so that I can see the oven's display on your phone. Press Share when it opens.' Nobody had contacted her.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { D1: 'Press Share when it opens', I1: ["She finds the maker's number in the booklet that came with it and calls it", 'Nobody had contacted her'] },
    reason: { D1: 'The helper asks Wanda to share her phone: {cue:D1}. That is a request about the device.',
              I1: 'Wanda started the call herself, at a number from the booklet in the oven’s own box: {cue:I1}. It is {t:already}, and nobody contacted her first.' },
    not: { outcome: 'refundscam', why: 'A helper asks to see a phone, as a caller would. But no refund and no bank account is mentioned, and Wanda called, at a number she already had.' } },

  /* ---------- Malware ---------- */
  { id: 'dv-ret-newsletter', use: 'return', tier: 'clean', setting: 'home', topic: 'a school newsletter that is a program',
    text: "An email reaches Mrs. Kaur from an address she does not know: 'Open the attached newsletter from your child's school to see the new semester dates.' The attachment is called Newsletter.scr. She has no child at that school, and nobody has called her.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { D1: 'Open the attached newsletter', I1: ['An email reaches Mrs. Kaur from an address she does not know', 'She has no child at that school'] },
    reason: { D1: 'The email asks her to open a file: {cue:D1}. That is a request about her device.',
              I1: 'The file reached her in an email from an address she does not know, with a reason to open it: {cue:I1}. Nobody is on a call with her.' },
    not: { outcome: 'realinstall', why: 'She did not set out to get anything. The file came to her.' } },

  { id: 'dv-ret-delivery-note', use: 'return', tier: 'varied', setting: 'shopping', topic: 'a delivery note in a chat',
    text: "A message arrives in Mei's chat app from a number she does not know: 'Hello, your delivery note is here. Download delivery-note.zip and open it so that we can confirm your address.' Mei has not ordered anything this week.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { D1: 'Download delivery-note.zip and open it', I1: ['A message arrives in Mei\'s chat app from a number she does not know', 'Mei has not ordered anything this week'] },
    reason: { D1: 'The message asks her to download a file and open it: {cue:D1}. That is a request about her device, though it also mentions her address.',
              I1: 'The file arrived in a chat from a number she does not know, with a reason to open it: {cue:I1}. Nobody is on a call with her.' },
    not: { outcome: 'techsupport', why: 'No fault with her device is mentioned, and there is no number to call. It is a file with a reason to open it.' } }
]);
