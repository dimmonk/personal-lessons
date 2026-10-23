// IT Help Desk, lesson 4: The known fix, and when to stop (part "known"). Move 4 of the way of thinking (plan.md). Sources: IT3 (Cisco Press: a quick fix
// from pattern knowledge is what experts do and it often works, a failed guess brings you no closer, the skill is knowing when to stop and go structured,
// written steps let someone pick up where you left off); IT10 (an incident's aim is to restore service quickly; a workaround is valid); IT11 and IT14 (the
// knowledge base article is the known fix; search early; an article that is reused is checked and fixed or flagged). Ruling 1 (rulings-l1-8.md): no source
// gives a number, so the learner decides their own limit before the first try, in tries or minutes; the numbers in the tickets are examples, each the
// technician's own choice and different from ticket to ticket. When the limit is reached the next move is to narrow it down; handing on comes only when the
// desk's own rule says so, shown in a quoted block. A+ map C2 4.1 (knowledge base articles are a document type).
// One worked ticket (a restart already spent by the user's own words; the article is the fix); a first group of four with the deciding words marked; a
// second group of six with no help; a third group of four mixed with lessons 2 and 3; and the check: six new questions, no help, 5 of 6 and no guess
// past the limit.
FC.lesson('it-support', {
  id: 'l4', part: 'known', title: 'The known fix, and when to stop', rev: 2, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan: the known fix (from memory or the desk’s article), a limit of your own decided before trying, and narrowing it down when the limit is reached.' }, { rev: 2, date: "2026-10-23", change: "Names made unique across the subject and people called by name or they; wording kept to the plain-words list." }],
  why: [
    'Mildred’s printer says offline. A technician who has seen this before tries the fix at once. A beginner tries things until one works, and an hour later still does not know why.',
    'Here you learn what the experts do: try the fix that is already known, decide beforehand how long you will try, and stop guessing when the limit is reached.'
  ],
  flow: [
    { title: 'Try the fix that is already known',
      show: [
        { kind: 'prose', text: [
          'This move comes after the story, what changed and the backup of the last two parts. A technician who has seen a symptom before often makes a change after a short look, to see whether it fixes it. That is not random. It rests on knowing the usual causes of that symptom, and it often works. If you have seen the symptom yourself, your own memory is a source of the known fix.',
          'When you have not, the desk’s knowledge base holds what others have seen: a library of articles written by the people who solved the same symptom before. Search it with the user’s own words, then check the article’s “applies to” line against the user’s device and system. Follow its steps as written. That is the known fix. A restart is also a fair first try, if the user has not already done one.',
          'When you use an article you also check it. If a step is out of date, fix it or tell the person who owns it, so the next technician is not slowed.',
          'While you try, think about the user. If they are stopped from working, offer a workaround (a temporary way to keep going, such as printing on another printer). It does not count as a try.'] }
      ] },
    { title: 'Decide the limit before you start',
      show: [
        { kind: 'prose', text: [
          'If a quick fix does not work, you are no closer to the cause. Each failed guess teaches you almost nothing. So before the first try, decide your own limit: so many tries, or so many minutes, whichever runs out first. No exam or study gives a number, and this two-part limit is a working habit, not a sourced rule. A quick fix is a few tries and a few minutes, and a user who cannot work needs a shorter limit than one who can. Tries are your own: a restart the user already did before they called is not one of yours.',
          'Some desks have a rule of their own, such as a time on one ticket. If yours does, you follow it as well.',
          'A quick try takes minutes, loses nothing and is easy to undo. An article may also hold a step that erases files, such as deleting a profile or resetting the computer to its factory state. Copy the files first, as in the last part; that step is not a quick try, and it does not belong inside the limit.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“That did not work, so I will try the next thing I can think of.”',
          'Each failed guess leaves you no closer to the cause. At the limit, stop guessing.'] }
      ] },
    { title: 'When the limit is reached',
      show: [
        { kind: 'prose', text: [
          'Stop. Write one line for each try: what you did, how long, what happened. Then narrow the problem down, which is the next part.',
          'Written tries let you pick up where you left off. If the desk’s own rule says to hand the ticket on at this point, the next person can start from your lines without repeating your work. A failed known fix is not a reason to hand on by itself.',
          'Do not close the ticket as “cannot reproduce” (closing because you cannot make the fault happen again). That is not the same as fixed, and the user still has the fault.'] },
        { kind: 'prose', text: [
          'Words these tickets use. A print queue is the list of documents waiting to print. A driver is the small program that lets Windows talk to a device; the graphics driver runs the screen. A cache is a store of saved copies that a program keeps to run faster. Toner is the powder a laser printer prints with. Office is Microsoft’s group of programs, such as Word, Excel and Outlook. A shared drive is a folder on a company server that many people open. A troubleshooter is a Windows tool that checks for common faults and tries fixes. A profile is the folder where Windows keeps a person’s files and settings. A portal is the company’s web page for things like password resets. A sign-in loop is the sign-in screen coming back again and again.'] }
      ] },
    { worked: 'l4-w-offline' },
    { set: { items: ['l4-p-wifi', 'l4-p-limit', 'l4-p-reuse', 'l4-p-stop'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l4-q-outlook', 'l4-q-quick', 'l4-q-cost', 'l4-q-headset', 'l4-q-time', 'l4-q-notyet'], order: 'shuffle' } },
    { set: { items: ['l4-m-erase', 'l4-m-move', 'l4-m-note', 'l4-m-search'], order: 'shuffle', mix: { from: ['l2', 'l3'], share: 0.3 } } }
  ],
  check: {
    items: ['l4-k-video', 'l4-k-limit', 'l4-k-stop', 'l4-k-minutes', 'l4-k-cost', 'l4-k-reset'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 5 } }, { slip: 'kept-guessing', max: 0 }]
  }
});
