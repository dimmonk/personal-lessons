// Scams, Unit Two, part one (second half): the second name, a file or a link sent in a message, and its look-alike pair
// with the first. Field guide: see u2.cards-1.js.

FC.cards('scams', 'u2', [

  /* ---------- Malware ---------- */
  { id: 'meet-malware', kind: 'meet', outcome: 'malware',
    link: 'The first name was software that a person fetched. This one is the opposite: a file, or a link to one, that was sent without being asked for.',
    case: 'dv-invoice-file', mark: 'I1',
    strip: [
      'Sam gets an email from a firm that he has never dealt with.',
      'It says that an invoice is unpaid, with a late fee as the reason to hurry, and gives him a file to open. The file name ends in .exe, which is the ending of a program. Opening it runs it.',
      'Nobody is on a call with him. The file simply arrived.'
    ],
    explain: [
      'All that a request of this name needs is a file or a link in an email, a text or a chat, and a made-up reason to open it. The reason is chosen to suit you: an unpaid invoice, a pay stub, a package note, a job test, a photo. The story makes no difference. What decides it is that the file came to you and nobody is with you.',
      'Once it runs, it can copy your passwords, watch your screen, lock your files or give someone else control of the device. Success often looks like nothing happening, so you cannot count on noticing afterward. When Sam opens it, his computer shows the same box that Priya saw. What differs is where each came from: Priya went to the maker, and the file came to Sam.'
    ],
    feature: { step: 'I1', option: 'file' },
    name: 'The name for this is {o:malware}, short for “malicious software”: software made to do harm.',
    act: [
      'Do not open the file, tap the link or reply. Delete the message.',
      'If it might be real, use {t:check}: ask the sender yourself, through {t:already}. If you have already opened it, take the device off the internet by turning off wifi, and call your bank at the number on your card.'
    ] },

  { id: 'check-malware', kind: 'check', after: 'malware',
    case: 'dv-c-photo-zip',
    ask: { type: 'option', step: 'I1', among: ['own', 'file'] } },

  { id: 'look-malware-realinstall', kind: 'lookalike', ledger: 'malware~realinstall',
    link: 'In both, a program ends up on the device, and the same box appears on the computer.',
    cases: ['dv-lk-photo-own', 'dv-lk-photo-mail'],
    instruction: 'Both cases are about Lena and the same photo editor, and both end in the same box. Compare one thing: how the installer reached her.',
    prompt: { kind: 'which', option: 'I1.file', answer: 'dv-lk-photo-mail' },
    difference: [
      'In Case A Lena typed the maker’s address herself, to get the newest version. Nobody had contacted her. The answer is {a:I1.own}, and the case is {o:realinstall}.',
      'In Case B an email from an address she does not know says that her license needs updating, with an installer attached. The installer came to her. The answer is {a:I1.file}, and the case is {o:malware}.',
      'Same program, same company, same box. The only difference is who started it, and Lena can see that before she presses anything.'
    ] }
]);
