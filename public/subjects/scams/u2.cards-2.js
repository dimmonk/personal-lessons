// Scams, Unit Two, part one (second half): the second name, a file or a link sent in a message, and its look-alike pair
// with the first. Field guide: see u2.cards-1.js.

FC.cards('scams', 'u2', [

  /* ---------- Malware ---------- */
  { id: 'meet-malware', kind: 'meet', outcome: 'malware',
    link: 'The first name was about software that a person went and fetched. The second is the opposite: a file, or a link to one, that was sent to the person without their asking.',
    case: 'dv-invoice-file', mark: 'I1',
    strip: [
      'There is one person, Sam, and one email from a firm that he has never dealt with.',
      'It gives him a reason to open a file: an invoice that is said to be unpaid, with a late fee as the reason to hurry.',
      'The file is attached, and its name ends in .exe, which is the ending of a program. Opening it runs it.',
      'Nobody is on a call with him. The file simply arrived.'
    ],
    explain: [
      'What you are shown is a file that came in a message, and a reason to open it that the sender made up. That is all a request of this name is made of: a file or a link in an email, a text or a chat, and a story about why you should open or run it.',
      'The story is chosen to suit whoever gets it. It can be an unpaid invoice, a wage slip, a parcel note, a job test, a photo, a voicemail, or a message that something on your device needs updating. The story makes no difference to the answer. What decides it is that the file or the link came to you, and that nobody is with you.',
      'The harm comes from what the file does once it runs. It can copy passwords as you type them, watch your computer, lock your files, or give someone else control of the device. And success looks like nothing happening: a blank window flickers and closes, or an ordinary-looking document opens. So you cannot count on noticing that something is wrong afterwards, and that is why the key asks about the one thing you can see at the start.',
      'Set Sam beside Priya. When Sam opens the file, his computer will show the same box that Priya saw, asking whether to allow changes, and it will tell him no more than it told her. What differs is where each came from: Priya went to the maker, and the file came to Sam.'
    ],
    feature: { step: 'I1', option: 'file' },
    name: 'The name for this is {o:malware}, which is short for “malicious software”: software made to do harm. The word covers any such program, however it works.' },

  { id: 'again-malware', kind: 'again', outcome: 'malware',
    link: 'The invoice file gave you what to point to for {o:malware}, from one case: {needs:malware}. Here is a second case with a different story. This time it is a link in a text, and it is a parcel.',
    first: 'dv-invoice-file', second: 'dv-tracking-link', step: 'I1',
    instruction: 'Find what the two cases share. Ignore the story (an invoice, a parcel) and ignore whether it is a file or a link. Look at one thing only: how the request reached the person.',
    prompt: { kind: 'phrase', answer: 'Install the Parcelpoint app from this link' },
    shared: [
      'Sam and Nadia each received something that they had not asked for, from a sender they did not know: an email with a file, and a text with a link. Each was given a reason to act: an unpaid invoice, a parcel that could not be delivered. And nobody was on a call with either of them.',
      'A file and a link are two shapes of the same thing. A link that tells you to install an app does for the sender what a file does: it puts a program on the device if you follow it. The two stories share nothing else, so this is not about invoices or parcels. It holds wherever a file or a link arrives in a message, with a reason to open it and nobody with you. That is what {o:malware} names.'
    ] },

  { id: 'portrait-malware', kind: 'portrait', outcome: 'malware',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:malware} in real life, where nobody marks the words for you.',
    typical: [
      'It arrives in a message: an email, a text or a chat. It is never something you went to find.',
      'It comes with a reason to open it, and the reason fits the person: a bill for someone who has bills, a job test for someone who has applied for jobs, a parcel for someone who shops online. The sender may have guessed, or may have used what they know about you.',
      'The name of the file is made to look harmless. The ending after the last dot is the one that counts, because it says what kind of file it is: Invoice.pdf.exe is a program, not a document.',
      'The reason often comes with a hurry: a late fee, a deadline, a last chance to rebook. The hurry is there to stop you asking.',
      'Nothing visible may happen when it runs. Do not wait to see whether something goes wrong.',
      'It is never a person on a call. The moment a person is on the line telling you to open it, the question has a different answer.'
    ],
    not: [
      'A file in a message is not always {o:malware}. A colleague you know can send a real file that you asked for, and that is an ordinary email. What gives the name is that you did not ask for it, that you cannot tell who sent it, and that a reason is given for running it. {t:check} settles it: ask the sender yourself, through {t:already}.',
      'And it is not {o:realinstall} because a box asks whether to allow changes. That box appears either way.'
    ],
    wild: ['"Please open the attached invoice."', '"Download the file to see your payslip."', '"Run the attached test before the interview."', '"Your parcel could not be delivered. Install the app from this link."', '"Here are the photos. Open the zip file."'],
    self: 'It reaches you wherever you have an inbox: work email, the family chat, a text from a number you do not know. It is more likely to look right when you really are expecting something, which is why the reason so often fits.',
    ask: '"Did I ask for this file or this link, and is anyone on a call with me?" If the answer is no to both, it is {o:malware}.',
    act: [
      'Do not open the file, run it or tap the link. Opening it is the whole request.',
      'Do not reply to the message. A reply tells the sender that the address is read, and it gets you nothing that you need.',
      'If it might be real, use {t:check}: ask the sender yourself, through {t:already}. Employers usually run their tests on their own website, in a browser, and a firm that sends a bill does not need you to run a file to read it.',
      'Delete the message. If you have already opened it, take the device off the internet at once, by turning off wifi or pulling the cable, and ring your bank on the number on your card.'
    ] },

  { id: 'check-malware', kind: 'check', after: 'malware',
    case: 'dv-c-photo-zip',
    ask: { type: 'option', step: 'I1', among: ['own', 'file'] } },

  { id: 'look-malware-realinstall', kind: 'lookalike', ledger: 'malware~realinstall',
    link: 'You have met both names on their own. They are easy to mix up, because in both a program ends up on the device, and the box that appears on the computer is the same box. This card puts them side by side.',
    cases: ['dv-lk-photo-own', 'dv-lk-photo-mail'],
    instruction: 'Both cases are about Lena and the same photo editor, and both end in the same box. Compare one thing: how the installer reached her.',
    prompt: { kind: 'which', option: 'I1.file', answer: 'dv-lk-photo-mail' },
    difference: [
      'In Case A Lena decided that she wanted the newest version, and she typed the maker’s address herself. The installer was hers to fetch, nobody had contacted her, and the box is only what every installation shows. The key’s answer is {a:I1.own}, and the case is {o:realinstall}.',
      'In Case B nobody has asked her for anything until an email arrives from an address she does not know, saying that her licence needs updating, with an installer attached. The installer came to her. The key’s answer is {a:I1.file}, and the case is {o:malware}.',
      'The two cases are about the same program, from the same company, and they end in the same box. The only difference is who started it and where the installer came from, and Lena can see that difference at the moment she is asked, before she presses anything.'
    ] }
]);
