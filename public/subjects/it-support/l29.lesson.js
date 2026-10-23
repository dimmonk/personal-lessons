// IT Help Desk, lesson 29: The whole ticket (part whole), the first of the subject's two last lessons. Plan: docs/subjects/it-support/plan.md, lesson 29 and the "Real-world test" (IT24, IT25: practice mixed across
// topics, unlabelled, with no help, is what transfers; IT21, P26: our own pass marks); rulings-l1-8.md 6, 11, 17 and 23. No new teaching: one screen recaps the nine moves and the chains of lessons 9 to 28 by name.
// Shape: why; the recap; six new tickets from every system, no help; the check is the plan's first test, ten different tickets from every system: the first move right on 8 of 10, and none that touches data
// before protecting it (slip no-backup) or closes before the user confirms (slip closed-early). Strand whole: ten check tickets, six practice tickets, six reserve tickets for the weekly review. The mock exam is lesson 30.
FC.lesson('it-support', {
  id: 'l29', part: 'whole', title: 'The whole ticket', rev: 2, status: 'draft',
  history: [
    { rev: 1, date: '2026-10-23', change: 'First version, built to the plan: a recap of the nine moves and the chains, ten new tickets from every system with no help, and a mock exam drawn from every exam topic.' },
    { rev: 2, date: '2026-10-23', change: 'Reworked per ruling 23: the ten mixed tickets are the graded check (8 of 10, and none that touches data before protecting it or closes before the user confirms); the practice is six new tickets; the mock exam moves to lesson 30. The phishing ticket confirms who is asking first (rulings 6 and 11), the malware reserve ticket verifies before it quarantines, and guessed pronouns became names.' }],
  why: [
    'It is 9 a.m. on your first week. The next ticket is a laptop with a black screen, then a printer, then a locked account, then a phone that is hot to the touch. Nobody tells you which system it is, and nobody shows you the deciding words.',
    'Here you do the job as it will be. First a recap of the nine moves and the chains, then six tickets from every system with no help. The check is ten more tickets. You need 8 right, and none of the ten may touch someone’s data before it is protected or close a ticket before the user confirms it works. The mock exam comes next.'],
  flow: [
    { title: 'The nine moves, and the chains, by name',
      show: [{ kind: 'prose', text: [
        'Every ticket gets the same nine moves, in order: sort it, get their words and search what the desk knows, find out what changed and protect their data, try the known fix with a limit, cut it in half with the cheapest test, change one thing at a time, check it works for them and say what happens next, hand it on with everything you found, and write it up.',
        'Each system has a chain, and the cheapest test splits it. The boot chain: power, the start-up test, firmware, the boot drive, Windows, sign-in. The print path: app, queue, driver, printer, paper. The connection chain: link, address, gateway, name lookup, service. Wireless and phones: radio, connection, account, app. Windows: the tool that shows the fault, then its fix. Security: account, password, permission, and the ten steps to remove malware in order, beginning with verify, then quarantine. The desk: change, backup, evidence, policy.',
        'Reading a ticket: the first move is usually sort it or get the story. Once the ticket shows a symptom, the next move is a test that splits a chain, or protecting data that has no other copy. A part swapped first or a reinstall is never the start, and neither is a reset of a computer that works. An account whose password may be stolen is different: confirm who is asking by a record the desk holds, such as the number on file, then change the password at once.',
        'A ticket closes in one order: the user confirms it works, you write the note, then you close it. A change to something many people use gets approval, a written way back and a backup before it is made.'] }] },
    { set: { items: ['l29-p-streak', 'l29-p-noweb', 'l29-p-slowstart', 'l29-p-textlink', 'l29-p-homework', 'l29-p-beeps'], order: 'shuffle' } }
  ],
  check: {
    items: ['l29-t-nosignal', 'l29-t-apipa', 'l29-t-spool', 'l29-t-battery', 'l29-t-noos', 'l29-t-diskfull', 'l29-t-phish', 'l29-t-denied', 'l29-t-third', 'l29-t-patch'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 8 } }, { slip: 'no-backup', max: 0 }, { slip: 'closed-early', max: 0 }]
  }
});
