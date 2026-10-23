// IT Help Desk, lesson 5: Cut it in half (part half). Move 5 of the way of thinking: when the known fix has not worked, stop guessing, write down more
// than one cause, run the cheapest test that splits what works from what does not, and keep cutting. Research: docs/research/it-support.md
// IT4 (divide and conquer; swap and compare), IT5 (a general strategy plus what each part does for the whole), IT8 (skilled engineers cut the
// problem space by checking connections; unskilled ones poke at devices), IT9 (write down more than one cause). Plan: docs/subjects/it-support/plan.md, lesson 5.
// One worked ticket (Dana and the price list: a favorite ruled out by one test, then two more cuts); a first group of four with the deciding words marked;
// a second group of six; a third of four mixed with lessons 3 and 4; and the check: six new questions, no help, 5 of 6 to pass. Comparing with a working machine
// beyond the person and computer swaps (IT5 functional levels) is left to units 2 to 7. Every test here assumes one fault at a time (IT4); a question shows two faults.
FC.lesson('it-support', {
  id: 'l5', part: 'half', title: 'Cut it in half', rev: 1, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (list more than one cause; the cheapest test that splits what works from what does not; keep cutting; the error of working on whatever is nearest).' }],
  why: [
    'Dana from Sales says the price list on the shared drive will not open, and she has a call at 2. The list of things it could be is long: her laptop, the Wi-Fi, her account, the server that holds the file, the file itself.',
    'A new technician picks the one nearest, usually her laptop, and starts fixing. A good one tries one cheap test that cuts the list: can the person next to her open the same file? Here you learn to find that test, again and again, until one cause is left.'],
  flow: [
    { title: 'More than one cause',
      show: [{ kind: 'prose', text: [
        'When the known fix has not worked, stop guessing and write down every cause that could produce what the user sees. Write at least two. Then pick the test, not the fix.',
        'Dana’s price list: her laptop and its connection to the network, her account (it may not be allowed into that folder), the server that holds the shared drive (a company computer many people open files from), the file itself.',
        'Your favorite cause goes on the list too, and it is often not the answer. A written list is what keeps the favorite from being the only thing you test. A restart or a reinstall of Windows (wiping the computer and putting the system back from scratch) is a fix, not a test.',
        'A quick known fix, such as checking that Caps Lock is off before you call a password wrong, comes before the list, as a known fix does. The list is for when that did not work.'] }] },
    { title: 'The cheapest test that splits',
      show: [{ kind: 'prose', text: [
        'A test splits the list when one result points at some of the causes and the other result points at the others. A good one is cheap: it takes a minute, changes nothing in the user’s setup that you cannot put straight back, and needs no tools. Run it, read the result, and much of the list is gone.',
        'Here are five cheap tests that split. A port is a socket on a computer that a cable plugs into. A swap puts a part you know works where the doubtful one was; it can be put back, so it is a test, not a fix. A company account works on any company computer, so a person can sign in on another one with their own account; for a person who is not there, use the desk’s test account (a made-up account kept for checks like this).'] },
      { kind: 'document', form: 'table', title: 'Five cheap tests', head: ['Test', 'One result points to', 'The other result points to'], rows: [
        { id: 'r1', cells: ['Another person tries it on the same computer', 'It works for them: this person’s account or settings', 'It fails for them too: the computer, the network, or what both reach'] },
        { id: 'r2', cells: ['The same person tries it on another computer', 'It works there: the first computer', 'It fails there too: the person’s account, or something both computers reach'] },
        { id: 'r3', cells: ['Swap in a part you know works (a cable, a charger, a mouse, a port)', 'It works: the old part was the fault', 'It still fails: not that part'] },
        { id: 'r4', cells: ['Does it fail before sign-in, or only after?', 'Before: the computer, its start-up or the network', 'Only after: the account, the person’s settings or a program'] },
        { id: 'r5', cells: ['Can the computer reach the internet? Open a web page.', 'A page opens: the Wi-Fi and the internet link work, so look at what is at the other end, or at the account. A company server needs its own check', 'Nothing opens: the connection itself, the Wi-Fi or a cable'] }] }] },
    { title: 'Keep cutting',
      show: [{ kind: 'prose', text: [
        'One test rarely finds the cause. It shrinks the list. Cut what is left the same way, and two or three cheap tests usually leave one cause.',
        'A swap tells you more than whether it works. Put a part you know works where the doubtful one was, or move the doubtful one to a computer that works. If the trouble moves with the part, the part is the cause. If it stays where it was, it is not.',
        'These tests assume one fault at a time. If two parts are bad, a swap can leave the trouble where it was and make you clear a part that is bad. When the results contradict each other, suspect a second fault.',
        'A test only splits if its two results mean different things. A restart, or pressing Print once more, gives the same answer whichever cause is real. It is a fix or a repeat, not a test.'] }] },
    { title: 'Whatever is nearest',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“The ticket says the printer, so I will reinstall the printer on her laptop. If that fails I will reinstall it again, then the printing program, then Windows.”',
        'Work on whatever is nearest and each failed fix tells you nothing. A test that tells you which side to look on is worth more than a fix that may be on the wrong side. List the causes, run the cheapest test, which may or may not be the favorite’s, and fix only what is left.'] }] },
    { worked: 'l5-w-price' },
    { set: { items: ['l5-p-print', 'l5-p-monitor', 'l5-p-mail', 'l5-p-nadia'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l5-s-eli', 'l5-s-next', 'l5-l-blank', 'l5-s-fav', 'l5-x-newpc', 'l5-s-boot'], order: 'shuffle' } },
    { set: { items: ['l5-g-mouse', 'l5-g-reset', 'l5-g-marco', 'l5-g-port', 'l5-g-two'], order: 'shuffle', mix: { from: ['l3', 'l4'], share: 0.3 } } }
  ],
  check: {
    items: ['l5-k-wifi', 'l5-k-monitor', 'l5-k-lin', 'l5-k-list', 'l5-k-call', 'l5-k-next'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 5 } }]
  }
});
