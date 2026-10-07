// Scams, Unit Two, part one (second half): the second name, a file or a link sent in a message, and its look-alike pair
// with the first. Field guide: see u2.cards-1.js.

FC.cards('scams', 'u2', [

  /* ---------- Malware ---------- */
  { id: 'meet-malware', kind: 'meet', outcome: 'malware',
    link: 'Now the opposite: a file, or a link to one, that was sent to you without being asked for.',
    case: 'dv-invoice-file', mark: 'I1',
    explain: [
      'Sam asked for nothing. A file arrived with a reason to open it, and a late fee to hurry him. The reason is chosen to suit you: an unpaid invoice, a pay stub, a package note, a job test, a photo.',
      'Once the file runs, it can copy your passwords, watch your screen, lock your files or let someone else control the device. Sam’s file ends in .exe, which means a program, and opening it runs it. You may notice nothing afterward, so you cannot wait to see what it does. His computer shows the same box as Priya’s, but her program came from the maker and his file came to him.'
    ],
    spot: [
      { do: 'Find what arrived: an email with Invoice-4471.exe attached.', why: 'A file or a link that came to you is not one you went to get.' },
      { do: 'Find the reason to open it: an unpaid invoice and a late fee.', why: 'There is always a reason, and it is chosen to hurry you.' },
      { do: 'Check whether anyone is on the phone with you: nobody called Sam.', why: 'With someone on the line, it is a different scam.' }
    ],
    feature: { step: 'I1', option: 'file' },
    name: 'This is {o:malware}, short for “malicious software”: software made to do harm.',
    act: [
      { do: 'Do not open the file or tap the link. Delete the message.', why: 'Nothing happens until you open it.' },
      { do: 'If it might be real, use {t:check}: ask the sender yourself, through {t:already}.', why: 'Never use the phone number or link in the message itself.' },
      { do: 'If you already opened it, turn off wifi and call your bank at the number on your card.', why: 'That cuts the device off while you work out what was taken.' }
    ] },

  { id: 'check-malware', kind: 'check', after: 'malware',
    case: 'dv-c-photo-zip',
    ask: { type: 'option', step: 'I1', among: ['own', 'file'] } },

  { id: 'look-malware-realinstall', kind: 'lookalike', ledger: 'malware~realinstall',
    link: 'In both, a program ends up on the device, and the same box appears.',
    cases: ['dv-lk-photo-own', 'dv-lk-photo-mail'],
    instruction: 'Both stories are about Lena and the same photo editor, and both end in the same box. Compare one thing: how the installer reached her.',
    prompt: { kind: 'which', option: 'I1.file', answer: 'dv-lk-photo-mail' },
    difference: [
      'In Story A Lena typed the maker’s address herself, to get the newest version. Nobody had contacted her. That is {a:I1.own}, so it is {o:realinstall}.',
      'In Story B an email from an address she does not know says her license needs updating, with an installer attached. The installer came to her. That is {a:I1.file}, so it is {o:malware}.',
      'Same program, same company, same box. The only difference is who started it, and Lena can see that before she presses anything.'
    ] }
]);
