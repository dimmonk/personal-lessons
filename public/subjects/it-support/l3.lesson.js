// IT Help Desk, lesson 3: What changed, and protect the data (part "changed"). Move 3 of the way of thinking (plan.md): find out what changed, and copy
// the user's files before anything that could lose them. Sources: IT2 (CompTIA's older Core 1 objective 5.1, step 1: gather information from the user,
// identify user changes, "if applicable, perform backups before making changes", inquire about environmental or infrastructure changes); IT17 and IT19
// (the user's own words come first; the user as a partner who describes, shows and tries one thing); A+ map C2 4.2 (a backup plan before a change;
// taught in the unit on procedures). Ruling 2 (rulings-l1-8.md): making the fault happen again is not a required step. "Show me" is part of getting the
// story; a fault that cannot be made to happen is still worked from what changed, the logs and the user's notes. Scope ("many people, the company's side")
// is a rule of thumb, taught as one, not a source's rule.
// One worked ticket (a first guess, a Windows update, that the records rule out); a first group of four with the deciding words marked; a second group
// of eight with no help; a third group of five mixed; and the check: six new questions, no help, 5 of 6 and no ticket that loses the user's files.
FC.lesson('it-support', {
  id: 'l3', part: 'changed', title: 'What changed, and protect the data', rev: 2, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan: find out what changed (the user’s, the computer’s, the company’s), and copy the files before anything that could lose them; a fault that comes and goes is worked from the records, the logs and the user’s notes.' }, { rev: 2, date: "2026-10-23", change: "Names made unique across the subject and people called by name or they; wording kept to the plain-words list." }],
  why: [
    'Petra’s email says their laptop is slow, Excel crashes, and they say they changed nothing. They want you to wipe it, and the file they must send on Friday is on it.',
    'A computer that worked and now does not has something different about it. Here you learn to find the difference, and to copy the user’s files before you touch anything that could lose them.'
  ],
  flow: [
    { title: 'Find out what changed',
      show: [
        { kind: 'prose', text: [
          'It worked before, and now it does not, so something is different. The quickest way to the cause is to find the difference.',
          'Look for three kinds of change. What the user did: a new program or add-in (a small extra program that adds a feature to Excel or Outlook), a new device such as a USB hub (a small box with extra sockets) or a docking station (a box a laptop plugs into for screens and other devices), a new password, a move to another desk or home. What the computer did: an update, a restart. What the company did: a new network switch (the box that connects the wires on a floor), a new Wi-Fi router (the box that gives out Wi-Fi and links the office to the internet), a moved server.',
          'Users often say “nothing changed”. That means nothing they noticed. When the records show no change either, you have found nothing yet; you put particulars to the user (“a new program, an update message, a new password?”) and find out when it last worked. Check what the desk’s records show too.',
          'A rule of thumb, not a law: when several people have the same fault from the same day, look at the company’s side first. When only one person has it, look at that person’s side first. In this course, a change made to one person’s account, such as a password reset or a new device handed to them, counts as that person’s side, even when the desk made it. And a change many people made themselves, such as the same program they all installed, is still the users’ side.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“They say nothing changed, so I will start fixing.”',
          '“Nothing” means nothing they noticed. Look at the records and put particulars to them first: the change is often there.'] }
      ] },
    { title: 'Copy the files before you touch anything',
      show: [
        { kind: 'prose', text: [
          'A backup is a second copy of the user’s files somewhere else, such as the company storage (the office’s shared file space, which is on a server, not on the user’s computer) or an external drive. Make one before any step that could change or erase their files, then open one file from the copy to check that it works. Until the files are safe, make no step that could change or erase them. Copying them and reading the log change nothing.',
          'Steps that can lose files: a clean install of Windows (wiping the drive and putting Windows on fresh), resetting the computer to its factory state, replacing the hard drive or the whole computer, and deleting a user profile (the folder where Windows keeps a person’s files and settings). A repair tool that keeps files is different, but you do not rely on it: running a repair on a failing drive can make it worse, so copy first.',
          'The hard drive (also called the disk) is the part inside the computer that holds the files. On a healthy computer, once you have the story and the changes, a restart is fine: it loses only what the user has not saved, so have them save first. Turning Wi-Fi off and on, or moving a cable, loses nothing. But if the disk is failing (the computer clicks, freezes, or sometimes will not start), every start is a risk to the files. Copy them first.',
          'CompTIA’s older exam wording said to back up “if applicable”: only when the step could lose something. (The current exams keep its six steps as a recommended method, not as an objective.) This course’s reading: if the records already show a recent backup, you do not make another; you open one file from it to check that it works, and then go on.',
          'Words these tickets use. Office is Microsoft’s group of programs, such as Word, Excel and Outlook; Outlook is its email program. A shared drive is a folder on a company server that many people open from their own computers.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“They asked for a wipe, so I will wipe it.”',
          'A wipe cannot be undone. Copy their files first, and check the copy opens.'] }
      ] },
    { title: 'When it comes and goes',
      show: [
        { kind: 'prose', text: [
          'Part of getting the story is having the user show you what they do just before the fault, or tell you the moment it happens. Write down the steps and the times.',
          'Some faults will not happen on demand: a screen that goes black twice a day, a program that closes by itself. You do not wait for one. Work from what you can find: what changed, the computer’s log (the list of errors it keeps, each with a time), and the user’s notes of the time each one happened. Match the times to the log. If that points nowhere, you narrow the problem down, which is a later part.',
          'Do not make a fault happen on purpose if that could cost files, as on a failing disk. Protect the files first.'] }
      ] },
    { worked: 'l3-w-slow' },
    { set: { items: ['l3-p-label', 'l3-p-reset', 'l3-p-floor2', 'l3-p-black'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l3-q-password', 'l3-q-lose', 'l3-q-nothing', 'l3-q-quiet', 'l3-q-backup', 'l3-q-freeze', 'l3-q-onlyme', 'l3-q-group'], order: 'shuffle' } },
    { set: { items: ['l3-m-swap', 'l3-m-desk', 'l3-m-short', 'l3-m-move', 'l3-m-question'], order: 'shuffle', mix: { from: ['l1', 'l2'], share: 0.3 } } }
  ],
  check: {
    items: ['l3-k-dock', 'l3-k-drive', 'l3-k-router', 'l3-k-close', 'l3-k-nothing', 'l3-k-click'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 5 } }, { slip: 'no-backup', max: 0 }]
  }
});
