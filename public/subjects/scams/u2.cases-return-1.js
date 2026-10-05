// Scams, Unit Two: fresh cases held back for later days (lesson standard E9, V44), part one: a real installation and a
// file or a link in a message. Four for each name, because this is an action subject: one for each of the four scheduled
// returns, the last of them about twelve weeks on. A name that is due comes back as a case the learner has not seen,
// beside a case of the name they most often take it for. Every case carries marked words and a reason for both questions,
// because it is run as a whole route. Field guide: see u2.cases-drill-1.js.

FC.cases('scams', 'u2', [

  /* ---------- Real installation ---------- */
  { id: 'dv-ret-language-app', use: 'return', tier: 'clean', setting: 'leisure', topic: 'a language app from the app store',
    text: "Hana wants to learn Spanish. On her phone she opens the app store, searches for 'Lingua' and picks the app published by the Lingua company. She presses Install, and the store asks for her fingerprint. Nobody has contacted her about it.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { D1: 'She presses Install', I1: ['On her phone she opens the app store', 'Nobody has contacted her about it'] },
    reason: { D1: 'The store asks Hana to install an app: {cue:D1}. A request to install something is a request about the device.',
              I1: 'Hana went to her phone’s own app store: {cue:I1}. She started it, and nobody contacted her.' },
    not: { outcome: 'malware', why: 'No link or file was sent to her. She chose the app and fetched it from the store.' },
    wouldChange: 'If a text had told her to install the Lingua app from a link, it would be {a:I1.file}.' },

  { id: 'dv-ret-doorbell', use: 'return', tier: 'varied', setting: 'home', topic: 'a doorbell app named in the box',
    text: "Dev has bought a video doorbell. The instructions in its box say to install the maker's app, and give the maker's web address. He types the address into his browser, follows the button on that page to his phone's app store and presses Get. Nobody has contacted him about it.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { D1: 'presses Get', I1: ['The instructions in its box say to install the maker\'s app, and give the maker\'s web address', 'Nobody has contacted him about it'] },
    reason: { D1: 'The store asks Dev to install an app: {cue:D1}. That is a request about the device.',
              I1: 'The address came from the instructions in the doorbell’s own box, which were his before he began: {cue:I1}. It is {t:already}, and nobody contacted him.' },
    not: { outcome: 'techsupport', why: 'Nobody offered to fix a problem. He wanted the app himself, and used an address from the box the doorbell came in.' },
    wouldChange: 'If he had searched for the maker and phoned the first number with “Ad” beside it, it would be {a:I1.support}.' },

  { id: 'dv-ret-update-menu', use: 'return', tier: 'varied', setting: 'work', topic: 'an update from the laptop’s own menu',
    text: "Ola's laptop shows a small message in its corner: 'Updates are ready.' He opens the laptop's own update menu, presses Install now, and waits. Nobody has contacted him about it.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { D1: 'presses Install now', I1: ["He opens the laptop's own update menu", 'Nobody has contacted him about it'] },
    reason: { D1: 'The menu asks Ola to install updates: {cue:D1}. That is a request about the device.',
              I1: 'Ola started it himself, through his laptop’s own update menu: {cue:I1}. Nobody contacted him first.' },
    not: { outcome: 'malware', why: 'A message says that updates are ready, but it is the laptop’s own message, and he went to his own menu. Nothing was sent to him in a message with a link.' },
    wouldChange: 'If an email had told him to install an update from a link, it would be {a:I1.file}.' },

  { id: 'dv-ret-helpdesk-oven', use: 'return', tier: 'varied', setting: 'shopping', topic: 'a maker’s help desk rung from the booklet',
    text: "Wanda's new oven will not start. She finds the maker's number in the booklet that came with it and rings it. The helper says: 'I can send you a link to a video call, so that I can see the oven's display on your phone. Press Share when it opens.' Nobody had contacted her.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { D1: 'Press Share when it opens', I1: ["She finds the maker's number in the booklet that came with it and rings it", 'Nobody had contacted her'] },
    reason: { D1: 'The helper asks Wanda to share her phone: {cue:D1}. That is a request about the device.',
              I1: 'Wanda started the call herself, on a number from the booklet in the oven’s own box: {cue:I1}. It is {t:already}, and nobody contacted her first.' },
    not: { outcome: 'refundscam', why: 'A helper asks to see a phone, as a caller would. But no refund and no bank account is mentioned, and Wanda rang, on a number she already had.' },
    wouldChange: 'If a caller had phoned her first and said that she was owed a refund on the oven, it would be {a:I1.refund}.' },

  /* ---------- Malware ---------- */
  { id: 'dv-ret-newsletter', use: 'return', tier: 'clean', setting: 'home', topic: 'a school newsletter that is a program',
    text: "An email reaches Mrs Kaur from an address she does not know: 'Open the attached newsletter from your child's school to see the new term dates.' The attachment is called Newsletter.scr. She has no child at that school, and nobody has phoned her.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { D1: 'Open the attached newsletter', I1: ['An email reaches Mrs Kaur from an address she does not know', 'She has no child at that school'] },
    reason: { D1: 'The email asks her to open a file: {cue:D1}. That is a request about her device.',
              I1: 'The file reached her in an email from an address she does not know, with a reason to open it: {cue:I1}. Nobody is on a call with her.' },
    not: { outcome: 'realinstall', why: 'She did not set out to get anything. The file came to her.' },
    wouldChange: 'If she had been expecting a newsletter and had opened it from the school’s own website, which she had saved, it would not be a file in a message.' },

  { id: 'dv-ret-delivery-note', use: 'return', tier: 'varied', setting: 'shopping', topic: 'a delivery note in a chat',
    text: "A message arrives in Mei's chat app from a number she does not know: 'Hello, your delivery note is here. Download delivery-note.zip and open it so that we can confirm your address.' Mei has not ordered anything this week.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { D1: 'Download delivery-note.zip and open it', I1: ['A message arrives in Mei\'s chat app from a number she does not know', 'Mei has not ordered anything this week'] },
    reason: { D1: 'The message asks her to download a file and open it: {cue:D1}. That is a request about her device, though it also mentions her address.',
              I1: 'The file arrived in a chat from a number she does not know, with a reason to open it: {cue:I1}. Nobody is on a call with her.' },
    not: { outcome: 'techsupport', why: 'No fault with her device is mentioned, and there is no number to ring. It is a file with a reason to open it.' },
    wouldChange: 'If a man had phoned her and asked her to open the file while he watched, to sort out a refund, it would be {a:I1.refund}.' },

  { id: 'dv-ret-free-film', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a film downloader offered in a forum',
    text: "In a forum chat, a user Omar does not know writes: 'Want the new film free, with no ads? Install this downloader from my link.' Omar had been asking about where to watch it, and nobody is on a call with him.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { D1: 'Install this downloader from my link', I1: ['a user Omar does not know writes', 'Install this downloader from my link'] },
    reason: { D1: 'The message asks him to install a program from a link: {cue:D1}. That is a request about his device.',
              I1: 'The link reached him in a chat from a stranger, with a reason to install: {cue:I1}. He went nowhere to find it.' },
    not: { outcome: 'realinstall', why: 'Omar was looking for the film, but he did not go to a maker or to an app store. A stranger’s link came to him.' },
    wouldChange: 'If he had found the film’s own app in his phone’s app store, it would be {a:I1.own}.' },

  { id: 'dv-ret-scanned', use: 'return', tier: 'varied', setting: 'work', topic: 'a scan from a printer that sends no email',
    text: "An email reaches Wei from an address 'office-printer@mail-scan.net': 'A scanned document is waiting for you. Open the attached file and press Enable Editing.' Wei's office printer does not send email.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { D1: 'Open the attached file and press Enable Editing', I1: ['An email reaches Wei from an address', "Wei's office printer does not send email"] },
    reason: { D1: 'The email asks him to open a file and press Enable Editing: {cue:D1}. That is a request about his device.',
              I1: 'The file reached him in an email from an address that is not his office’s: {cue:I1}. Nobody is on a call with him.' },
    not: { outcome: 'realinstall', why: 'He did not ask for a scan or for any program. A message sent the file to him.' },
    wouldChange: 'If he had walked to the printer and pressed Scan to email himself, the file would be one he asked for, and it would not be a file in a message from a stranger.' }
]);
