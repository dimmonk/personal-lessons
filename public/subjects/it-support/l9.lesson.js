// IT Help Desk, lesson 9: From the power button to the desktop (part boot). The first system lesson: the boot chain as six links (power, the start-up
// self-test, firmware, the boot drive, Windows loading, sign-in and profile), with each Core 1 5.1/5.2 symptom placed on its link and the cheapest test,
// "how far did it get?", that tells which side of a link the fault is on. It builds on lesson 5 (cut it in half) by cutting a chain instead of a list.
// Research: docs/research/it-support.md IT4, IT5, IT8; docs/research/it-support-aplus.md Core 1 5.1, 5.2, 3.5 (BIOS/UEFI), Core 2 1.2 (boot methods), 3.1.
// Plan: docs/subjects/it-support/plan.md, lesson 9. One worked ticket (Malik: the drive he blames sits past where it stopped); a first group of four with the
// deciding words marked; a second of five; a third of three mixed with lessons 5 and 6; the check: six new questions, no help, 5 of 6 to pass.
FC.lesson('it-support', {
  id: 'l9', part: 'boot', title: 'From the power button to the desktop', rev: 1, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (the six links of the chain; each symptom on its link; how far did it get; the cheap test for each side of a link).' }],
  why: [
    'Malik says his desktop will not start; he is sure the hard drive died. Instead of ordering a drive, you find out what happens when he pushes the button. Light on, fans spinning, no logo. That rules the drive out: the computer reaches it after four earlier steps, and his stopped before the third.',
    'A computer starts as a chain, each step running only if the one before worked. Here you learn the six links, the symptom on each, and the cheap test for where it stopped.'],
  flow: [
    { title: 'The six links',
      show: [{ kind: 'prose', text: [
        'A computer does six things in order, from the power button to the desktop. Where it stops tells you where to look.',
        '1. Power. The outlet, the cable and the power supply (the box that turns wall power into what the parts use); on a laptop, the charger and battery.',
        '2. The start-up self-test, called POST (power-on self-test). The firmware (link 3) runs it before it looks for a drive: it checks the processor, memory and video card (the part that makes the picture) and beeps a pattern on a fault. A logo means memory and video have started.',
        '3. Firmware. The small program built into the motherboard (the main circuit board that every other part plugs into), called BIOS or UEFI (the newer kind). It holds the settings, including the date and time and the boot order: the places it looks, in turn, for something to start from. A small motherboard battery keeps them alive when the computer is off. After the self-test, the firmware follows the boot order to the boot drive. It can list the drive inside, a USB stick, the network, or a recovery partition (a hidden repair area on the drive). A USB stick with nothing to start is usually skipped.',
        '4. The boot drive: the drive the firmware picked, holding Windows’ start-up files.',
        '5. Windows loading. The logo and spinning dots. A crash now gives a blue screen with a stop code that names what failed.',
        '6. Sign-in and profile. The sign-in screen, then the user’s profile: their desktop, settings and files.'] }] },
    { title: 'Each symptom sits on a link',
      show: [{ kind: 'document', form: 'table', title: 'Where each sign belongs', head: ['What you see or hear', 'The link', 'What it points at'], rows: [
        { id: 'r1', cells: ['No light, no fan, no sound', '1. Power', 'Outlet, cable, power supply; on a laptop, charger or battery'] },
        { id: 'r2', cells: ['Fans run, black screen, no logo, or beeps', '2. Start-up self-test', 'Memory or video most often; the pattern differs by maker, so check the motherboard’s manual'] },
        { id: 'r3', cells: ['Wrong date and time, or settings that keep resetting', '3. Firmware', 'The small battery on the motherboard'] },
        { id: 'r3b', cells: ['It starts from a USB stick or the network instead of Windows', '3. Firmware', 'The boot order puts the wrong place first'] },
        { id: 'r4', cells: ['“No bootable device,” “Operating system not found,” or a blinking line', '3 and 4. Firmware looking for a drive', 'Firmware found no drive to start from. Open its screen: a drive not listed points at the drive or its cable; one listed points at the boot order or damaged start-up files'] },
        { id: 'r5', cells: ['Clicking or grinding, very slow reads, a failed drive health check (S.M.A.R.T.)', '4 and 5. The drive', 'A failing drive that may stop for good'] },
        { id: 'r6', cells: ['Blue screen with a stop code, or restarts at the Windows dots', '5. Windows loading', 'A driver (the small program that lets Windows use a part), a file, memory or the drive; the stop code names it'] },
        { id: 'r6b', cells: ['On a Mac: an endless color wheel, or a restart message (a kernel panic)', '5. Loading, on a Mac', 'The Mac’s blue screen: read what the message names'] },
        { id: 'r7', cells: ['Reaches sign-in, then slow or empty for one person only', '6. Sign-in and profile', 'That person’s profile'] },
        { id: 'r8', cells: ['Slow all day, or one program crashing', 'After sign-in', 'All programs slow: memory, a full or failing drive, or heat. One program: that program'] }] },
      { kind: 'prose', text: [
        'Heat belongs to every link: a hot computer, loud fan and shutdowns point at dust or a failing heat sink (the metal block cooling the processor). A burning smell or a swollen capacitor (a small part on the motherboard, bulged on top) means do not power it on again: unplug it, and never open it while plugged in.',
        'Reseating memory or a cable does not touch the files, but anything that writes to the drive waits until they are copied. If the computer will not start, put its drive in an enclosure (a small box with a USB plug) on a second computer and copy the files.'] }] },
    { title: 'How far did it get?',
      show: [{ kind: 'prose', text: [
        'Earlier you cut a list in half. A chain gives the cheapest cut: how far did it get? Look at the link after the last one that worked; the rest are ruled out.',
        'The questions are free: Does a light come on? Do the fans spin? Is there a logo? What do the words say? Does it reach sign-in? Does it fail for everyone?',
        'Each link has a cheap test for which side the fault is on. Power: the computer’s own charger or cable in another outlet, or a cable known to work. Self-test: the monitor on another computer. Firmware: open its screen; is the drive listed, and what is first in the boot order? Windows loading: the stop code. Sign-in: another person signing in on the same computer.'] }] },
    { title: 'Start at the drive',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“It will not start, so the drive is dead. I will order one, and if that fails, reinstall Windows.”',
        'The drive is link 4. A computer with no logo never got near it, and a reinstall erases the user’s files. Find out how far it got; look at the first link that failed. The drive is the answer only when the firmware lists none and a known-good cable changes nothing.'] }] },
    { worked: 'l9-w-marcus' },
    { set: { items: ['l9-p-dead', 'l9-p-beeps', 'l9-p-nodev', 'l9-p-blue'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l9-s-clock', 'l9-s-profile', 'l9-s-list', 'l9-s-next', 'l9-s-dead', 'l9-x-new'], order: 'shuffle' } },
    { set: { items: ['l9-g-click', 'l9-g-smell', 'l9-g-two'], order: 'shuffle', mix: { from: ['l5', 'l6'], share: 0.3 } } }
  ],
  check: {
    items: ['l9-k-laptop', 'l9-k-logo', 'l9-k-where', 'l9-k-list', 'l9-k-call', 'l9-k-blue'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 5 } }]
  }
});
