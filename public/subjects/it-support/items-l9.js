// IT Help Desk, lesson 9 "From the power button to the desktop" (part boot): the boot chain as a ladder of six links (power, the start-up self-test,
// firmware, the boot drive, Windows loading, sign-in and profile). The cheapest test is "how far did it get?"; each symptom of Core 1 5.1 and 5.2 sits on
// one link, and the link tells which side a fault is on. Research: docs/research/it-support.md IT4, IT5 (a general strategy plus what each part does for
// the whole), IT8; docs/research/it-support-aplus.md Core 1 5.1 (POST beeps, proprietary crash screens, blank screen, no power, burning smell,
// random shutdown, inaccurate date/time), 5.2 (bootable device not found, clicking and grinding, S.M.A.R.T. failure), 3.5 (BIOS/UEFI boot options),
// Core 2 3.1 (BSOD, boot issues, no OS found, slow profile load). Invented people and offices.
// The worked ticket, a group of four (deciding words marked), a group of five, a group of three, the six of the check, and four held in reserve.
(() => {
  const S = 'boot';
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ strand: S, facets: {}, ...spec });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const L = (id, text) => ({ id, text });
  const LINK = 'wrong-link', NEAR = 'poked-nearest', NOSPLIT = 'no-split', KEPT = 'kept-ruled-out', IGN = 'ignored-sign', RISK = 'kept-powering', TWO = 'two-changes', PART = 'part-first';

  FC.items('it-support', [
    // ----- the worked ticket: a favorite cause (the drive) that "how far did it get?" rules out -----
    item({
      id: 'l9-w-marcus',
      blocks: [
        chat('Malik, Accounting', 'm1', 'My desktop will not start. I pushed the button and all I get is a black screen. It has been sick for a week, so I bet the hard drive finally died.'),
        note('The chain from the button to the desktop: power, the start-up self-test, firmware, the boot drive, Windows loading, sign-in. A fault on one link stops everything after it.')],
      asks: [ask('Malik says the front light is on and the fans spin, but the screen never shows a logo or any words. Where does it stop?', [
        ['Before the logo: the self-test, or the screen itself.', true, 'Power works (light and fans), and no logo has shown, so nothing after the self-test has run yet.'],
        ['At the boot drive, the part Malik says died this week.', LINK, 'The firmware looks for the drive only after the self-test passes and the logo shows. No logo has shown, so the computer never got that far.'],
        ['At power, so the outlet or the power cable is at fault.', LINK, 'The light is on and the fans spin, so power reaches the computer.']])],
      steps: [
        { id: 'chain', does: 'Write the chain, so every cause has a place.', working: 'Power, start-up self-test, firmware, boot drive, Windows loading, sign-in. A black screen could be any of the first three, or the screen itself.' },
        { id: 'favorite', does: 'Name the favorite and find which link it sits on.', working: 'A dead hard drive is the boot drive link, number 4. The computer would first have to get through links 1 to 3.' },
        { id: 'far', does: 'Find out how far it got, the cheapest test there is: it changes nothing.', working: 'Malik: front light on, fans spin, no logo, no words. Link 1 is fine. It never reached link 3, so link 4 cannot be where it stopped.', ask: 'a' },
        { id: 'screen', does: 'Cut the two that are left: the screen against the computer.', working: 'Malik plugs his monitor into a co-worker’s computer. A picture shows. The monitor and cable are fine. The fault is inside his computer.' },
        { id: 'beeps', does: 'Find out whether the computer gave a sign.', working: 'Malik: “Now that you mention it, it beeps in a pattern when I push the button.” The start-up self-test beeps when it finds a fault. The pattern means something different for each maker, so look it up for his computer.' },
        { id: 'fix', does: 'Look it up, then make one change.', working: 'The motherboard maker’s manual says that pattern is a memory fault, so the memory sticks are the cause to test, one at a time. Malik switches off and unplugs it, then reseats one memory stick and tries: still the same beeps. He reseats the second stick and tries again: it starts. Only that second stick was loose, and the hard drive was never the problem.' }],
      deciding: ['m1'],
      reason: 'The favorite cause, the drive, sits on link 4, and the computer never got that far: no logo meant it stopped between power and firmware. “How far did it get?” ruled the drive out with one question. The beeps then said which part the self-test found at fault.' }),

    // ----- the first group: the deciding words marked; which link did it stop at -----
    item({
      id: 'l9-p-dead',
      blocks: [
        chat('Ilsa, Records', 'a1', 'My desktop is completely dead. No lights, no fans, no sound. The monitor says no signal.'),
        note('Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.')],
      asks: [ask('Where does it stop?', [
        ['Power', true, 'No light, no fan, no sound: nothing has started. The causes are the outlet, the power cable and the computer’s power supply (the box that turns wall power into what the parts use).'],
        ['The start-up self-test', LINK, 'The self-test cannot run on a computer with no power. Its signs (a screen, beeps) are missing, but so is everything else.'],
        ['Firmware', LINK, 'The firmware runs only on a computer that has power. Nothing has come on.'],
        ['Windows loading', LINK, 'Windows loads after four earlier links. This computer is not even on.']])],
      deciding: ['a1'],
      reason: 'No light, no fan and no sound means nothing has power, so the first link is where it stops. A fault on link 1 stops every later link, which is why the cheap tests are an outlet that works, a power cable known to work, and the switch on the back of the power supply.' }),
    item({
      id: 'l9-p-beeps',
      blocks: [
        chat('Everett, Warehouse', 'a1', 'I push the button, the fans run, and it beeps in a pattern. Long, short, short. The screen stays black.'),
        note('Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.')],
      asks: [ask('Where does it stop?', [
        ['The start-up self-test, which beeps a pattern', true, 'Power works (the fans run). The self-test is the part that beeps when it finds a fault, and the screen stays black because it never gets past it.'],
        ['Power, which feeds the fans and the board', LINK, 'The fans run, so power reaches the computer.'],
        ['The boot drive, which holds Windows’ files', LINK, 'The drive is looked for after the self-test passes. This one did not.'],
        ['Firmware, which looks for the boot drive', LINK, 'The firmware looks for the boot drive only after the self-test passes and the logo shows. Beeps and a black screen mean the self-test found a fault first.']])],
      deciding: ['a1'],
      reason: 'The start-up self-test (POST, the power-on self-test) checks the processor, memory, keyboard and video before anything else. When it finds a fault it beeps a pattern. The pattern differs by maker, so the next step is to look it up in the motherboard’s manual, not to guess.' }),
    item({
      id: 'l9-p-nodev',
      blocks: [
        chat('Gabor, Sales', 'a1', 'The maker’s logo shows, then a black screen with white words: “No bootable device found.”'),
        note('Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.')],
      asks: [ask('Where does it stop?', [
        ['Firmware: it found no drive it can start from', true, 'The logo means power and the self-test passed. The firmware then searched its boot order for a drive with start-up files, found none, and says so.'],
        ['The start-up self-test: it checked memory and video and failed', LINK, 'The logo shows, so the self-test passed. “No bootable device” is not a self-test message.'],
        ['Windows loading: the dots start and then it stops', LINK, 'Windows would be loading if the firmware had found a drive to start it from. The message says it did not.'],
        ['Power: the outlet or the power supply is not feeding it', LINK, 'A logo and a message on the screen mean power works.']])],
      deciding: ['a1'],
      reason: 'The firmware is the program that finds the drive to start from, using the boot order. “No bootable device” means it found none it can start from. The cheapest test is to open the firmware screen and see whether the drive is listed: not listed points at the drive or its cable (link 4), listed points at the boot order or damaged start-up files.' }),
    item({
      id: 'l9-p-blue',
      blocks: [
        chat('Hilda, Shipping', 'a1', 'Windows starts to load, the little dots spin, and then a blue screen with a sad face and a code comes up. Then it restarts and does it again.'),
        note('Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.')],
      asks: [ask('Where does it stop?', [
        ['Windows loading', true, 'Power, the self-test, firmware and the drive all worked, because Windows began to load. The blue screen is Windows crashing as it starts.'],
        ['The boot drive', LINK, 'The firmware found the drive and started Windows from it, so the drive link worked.'],
        ['Sign-in', LINK, 'The computer never reaches the sign-in screen.'],
        ['The start-up self-test', LINK, 'Windows loaded far enough to show a screen, so the self-test passed.']])],
      deciding: ['a1'],
      reason: 'A blue screen is Windows’ own crash screen, shown with a stop code that names what failed. The code is what you write down and search for. It also says the first four links worked.' }),

    // ----- the second group: no marks -----
    item({
      id: 'l9-s-clock',
      blocks: [
        chat('Nora, HR', 'n1', 'Every morning my computer shows the wrong date and time, a few years back, and my files say they were made in the past. I fix the clock and it is wrong again tomorrow.'),
        note('The firmware keeps the date, time and its settings in a small memory that a coin-sized battery on the motherboard keeps alive when the computer is off.')],
      asks: [ask('Which is the most likely cause?', [
        ['That small battery on the motherboard is dead.', true, 'It is the only thing that keeps the clock running while the computer is off. When it dies, the clock and firmware settings go back to their defaults at each start.'],
        ['The hard drive is failing.', LINK, 'A failing drive shows as noises, slow reads or “no bootable device”, not a clock that loses time overnight.'],
        ['Windows’ automatic time setting is switched off.', 'wrong-cause', 'That would let the clock drift by minutes. It would not send it back years each night.'],
        ['The power supply is weak.', LINK, 'A weak power supply causes shutdowns and failures to start, not a clock that resets each night.']])],
      deciding: ['n1'],
      reason: 'Two causes fit a wrong clock: the battery, and Windows’ time setting. A clock that falls back years every night, with the files stamped to match, is the firmware losing its memory while the computer is off, so the battery (link 3) comes first. Windows reads its time from the firmware, and reinstalling Windows would not give the firmware a battery. Changing the battery is cheap, and if the clock then holds, the other cause is ruled out too.' }),
    item({
      id: 'l9-s-profile',
      blocks: [
        chat('Imre, Engineering', 'd1', 'My computer starts fine, I get to the sign-in screen and type my password, and then it sits for five minutes before the desktop shows up. My files and icons also look different.'),
        table('What you tried', ['Test', 'Result'], [
          ['t1', 'Imre signs in on Saoirse’s computer', 'Five minutes, the same wait'],
          ['t2', 'Saoirse signs in on Imre’s computer', 'The desktop loads in seconds']])],
      asks: [ask('Where does this point?', [
        ['Imre’s profile (the saved desktop that loads at sign-in)', true, 'Saoirse is fine on Imre’s computer, so the computer and its start-up are fine. Imre is slow on Saoirse’s computer too, so the fault goes with Imre.'],
        ['Imre’s computer: something inside it slows the sign-in', 'wrong-side', 'Saoirse signs in on Imre’s computer and it loads in seconds, so the computer is cleared.'],
        ['The boot drive, which Windows loads from at start-up', LINK, 'The computer reaches the sign-in screen, so the drive and Windows loaded.'],
        ['The start-up self-test, which checks memory and video', LINK, 'The sign-in screen shows, so the self-test passed long ago.']])],
      deciding: ['t1', 't2'],
      reason: 'It is slow only for Imre, on any computer, and only after sign-in: that is link 6, the profile. The first five links worked, because Saoirse gets through them on the same machine. A slow profile load points at the profile, not the computer.' }),
    item({
      id: 'l9-s-list',
      blocks: [
        chat('Yuki, Legal', 'y1', 'My desktop shows “No bootable device found” after the logo. It worked yesterday.'),
        table('What you tried', ['Test', 'Result'], [['t1', 'Open the firmware screen and look at the list of drives', 'The list is empty. No hard drive is shown.']])],
      asks: [ask('Which causes are still worth listing? Pick every one that fits.', [
        ['The drive has failed', true],
        ['The cable or the connection to the drive has come loose or failed', true],
        ['The boot order tells the firmware to look at the wrong drive', KEPT, 'The firmware sees no drive at all, so there is nothing to put in a different order.'],
        ['The user’s password is wrong', KEPT, 'The computer has not reached Windows, so no password has been asked for.']], { many: true })],
      deciding: ['t1'],
      reason: 'An empty drive list means the firmware cannot see the drive. That points at the drive itself or the cable between it and the motherboard, the two things to cut between next (try a cable known to work, or check the drive in another computer). With no drive listed there is nothing to order, and the password belongs to a link the computer never reached.' }),
    item({
      id: 'l9-s-next',
      blocks: [
        chat('Jorin, Operations', 'o1', 'My desktop shows “No bootable device found.” The logo appears first.'),
        table('What you tried', ['Test', 'Result'], [['t1', 'Open the firmware screen and look at the list of drives', 'The drive is listed, with its right name and size']]),
        note('The drive is there. Causes left: the boot order points at something else, or the drive’s start-up files are damaged.')],
      asks: [ask('Which test comes next?', [
        ['Check whether the drive is first in the boot order.', true, 'If another device is first, such as an empty USB port or the network, moving the drive to the top may start it. If the drive is first, the start-up files are the cause.'],
        ['Swap the cable between the drive and the motherboard, then restart.', KEPT, 'The firmware lists the drive with its right name and size, so the cable carries data. The test was already answered.'],
        ['Replace the hard drive with a new one and put Windows on it.', PART, 'The firmware sees the drive, so it is not shown to be bad. It would also lose the data on it.'],
        ['Press the power button again and read the message once more.', NOSPLIT, 'The same try gives the same message and rules nothing out.']])],
      reason: 'The firmware sees the drive, so the cause is the boot order (a firmware setting) or the start-up files on the drive. The boot order is cheap to look at and changes nothing until you change it. Check it before any fix that touches the user’s files.' }),
    item({
      id: 'l9-s-dead',
      blocks: [
        chat('Kendra, Planning', 'r1', 'My desktop says “No bootable device found” after the logo. The files that matter are all on the company server, and I checked: the latest copies are there.'),
        table('What you tried', ['Test', 'Result'], [
          ['t1', 'Open the firmware screen and look at the list of drives', 'The list is empty'],
          ['t2', 'Change the cable between the drive and the motherboard to one known to work', 'The list is still empty'],
          ['t3', 'Put the drive in another computer', 'That computer does not see it either']])],
      asks: [ask('What do you do now?', [
        ['Replace the drive and bring the files back from the server.', true, 'The firmware, a cable known to work and a second computer all fail to see the drive, so it is dead. The files are safe on the server, so there is nothing left to protect first.'],
        ['Try a third cable, in case the second one is also bad.', NOSPLIT, 'A cable known to work already gave the same answer. Another cable splits nothing new.'],
        ['Change the boot order in the firmware screen, then restart.', KEPT, 'With no drive listed there is nothing to put in a different order.'],
        ['Press the power button again and read the message once more.', NOSPLIT, 'The same try gives the same message and rules nothing out.']])],
      deciding: ['t1', 't2', 't3'],
      reason: 'Each test cut one side away: the firmware cannot see the drive, a cable known to work did not help, and another computer cannot see it. What is left is the drive itself, so the fix is a new drive. The data came first: Kendra’s files are already on the server, which is why the repair can start at once.' }),
    item({
      id: 'l9-x-new',
      blocks: [note('Bram in Shipping calls the help desk. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Bram calls about his desktop. What do you say?', form: 'call', from: 'Bram, Shipping', detail: 'Incoming call · 8:40 AM', start: 'one',
        turns: {
          one: { lines: [L('g1', 'My computer is dead. It is old. I need a new one today.')], push: 'He wants a replacement before anything has been tested.',
            options: [{ id: 'order', text: 'I will put in the order for a new computer today.', end: 'ordered' },
              { id: 'far', text: 'You need to work today and the computer will not run. Before I order anything, tell me what happens when you push the power button.', goto: 'two' },
              { id: 'plug', text: 'Is it plugged in? Check that first, and then call me back.', end: 'plug' },
              { id: 'restart', text: 'Unplug it, wait a minute, and plug it in again.', end: 'again' }] },
          two: { lines: [L('g2', 'The light comes on and the fan spins. Then the screen just says “No signal.” But I am sure it is old. Just order it.')], push: 'He still wants the replacement, though the computer is clearly powering on.',
            options: [{ id: 'screen', text: 'I hear you that it is old. Power works, so it may be only the cable or the monitor. I will check both and tell you today whether the computer needs replacing.', end: 'screen' },
              { id: 'order2', text: 'I hear you that it is old. All right: I will order the new computer today and tell you when it arrives.', end: 'ordered2' },
              { id: 'drive', text: 'I hear you that it is old. It sounds like the hard drive has died, so I will line up a new one and call you today.', end: 'drive' },
              { id: 'firm', text: 'I hear you that it is old. Let us open the firmware screen and see whether it lists the drive, and I will call you back today.', end: 'firm' }] }
        },
        ends: {
          screen: { ok: true, then: 'The light and fan show power works, so the fault is further along. “No signal” is the screen not getting a picture, so the cable and monitor are the cheapest things to cut next. Telling him when he will hear back says what happens next.' },
          ordered: { ok: false, slip: NEAR, then: 'Nothing showed the old computer was the cause. One question about the lights and fan would have shown how far it got.' },
          plug: { ok: false, slip: NOSPLIT, then: 'The plug is a cheap check, but it covers only link 1. Asking what happens at the power button covers all six links at once and tells you whether power is the link to look at.' },
          again: { ok: false, slip: NOSPLIT, then: 'Unplugging and plugging in is a repeat, not a test. If it fails again, you still do not know which link failed.' },
          ordered2: { ok: false, slip: PART, then: 'The computer powers on, so a new one is not shown to be needed. “No signal” could be the cable or the monitor.' },
          drive: { ok: false, slip: LINK, then: 'A dead drive would show after the maker’s logo, as a message about a boot device. Bram has not got a picture at all, so the computer has not reached the drive.' },
          firm: { ok: false, slip: LINK, then: 'There is no picture, so there is no firmware screen to open. The cable and monitor come first.' } } }],
      reason: 'The light and fan show power works, which rules out link 1. “How far did it get?” is the question that cut the list; the screen, cable and self-test are what is left, and each can be tested without ordering anything.' }),

    // ----- the third group: mixed with lessons 5 and 6 -----
    item({
      id: 'l9-g-click',
      blocks: [
        chat('Kendra, Planning', 'r1', 'My laptop makes a clicking noise from the bottom and then Windows takes ages to start. Twice this week it said it could not find the operating system.'),
        note('You have a few minutes before you touch anything. The laptop still starts sometimes.')],
      asks: [ask('What do you do first?', [
        ['Have Kendra copy her files off now, then look at the drive.', true, 'Clicking is a sign of a failing hard drive, and it may stop working at any start. The files come out first because the laptop may not start again.'],
        ['Reinstall Windows to fix the slow start and the errors.', 'no-backup', 'A failing drive may not survive a reinstall, and a reinstall erases her files.'],
        ['Tell her the noise is normal and to keep working.', IGN, 'The noise is the computer reporting what is failing. Ignoring it risks the files.'],
        ['Run the maker’s drive test on the laptop, and copy the files after.', 'no-backup', 'The test reads the whole failing drive hard and may be the thing that makes it stop. The files come out before any test touches the drive.']])],
      deciding: ['r1'],
      reason: 'Clicking or grinding from a hard drive, slow starts and “operating system not found” say the drive (links 4 and 5) is failing, and the message is the firmware looking for it (links 3 and 4). A failing drive can stop for good, so the data comes out before any test or fix touches it, as in the earlier topic on protecting data.' }),
    item({
      id: 'l9-g-smell',
      blocks: [
        chat('Linus, Finance', 'b1', 'My desktop smells like something is burning and it just switched itself off. Can I turn it on again to see?')],
      asks: [ask('What do you tell Linus?', [
        ['Do not turn it on. Unplug it from the wall and have it looked at.', true, 'A burning smell is a part overheating or a failed power supply. Powering it on again risks a fire or more damage.'],
        ['Turn it on once to see whether it still works, then decide.', RISK, 'The smell is a warning. Powering it on again can finish off the part and is a safety risk.'],
        ['Open the side panel and look for the burnt part yourself, with it plugged in.', RISK, 'Never open a computer that is plugged in. It is unsafe, and a look alone does not tell you the cause.'],
        ['Move it to another outlet and try it there, in case it is the outlet.', RISK, 'The smell came from inside the computer, so a new outlet tests nothing and powers up a part that may be burning.']])],
      deciding: ['b1'],
      reason: 'A burning smell, with a sudden shutdown, can come from the power supply or any part running too hot. It sits on no single link, so no start-up test is worth the risk. Safety comes first: power off, unplug, and have it looked at.' }),
    item({
      id: 'l9-g-two',
      blocks: [
        chat('Marit, Support', 'a1', 'The user has a desktop with a black screen and fans that run. A co-worker already swapped the monitor cable, moved the memory sticks to different slots, and put in a new power cable all at once. It now starts. Nobody knows which did it.')],
      asks: [ask('Why is that a problem?', [
        ['Three changes went in together, so nobody knows which one fixed it.', true, 'One change and a look would have named the cause. Now the note can only say “it started after three things”.'],
        ['Memory sticks should never be moved, whatever the symptom is.', 'refused-cheap-test', 'Moving memory is a normal, cheap test. The mistake was doing it together with two other changes.'],
        ['The new power cable cannot have helped, so it did not count.', 'credited-one', 'It may have. With three changes together, you cannot tell.']])],
      deciding: ['a1'],
      reason: 'The rule of one change at a time holds on the boot chain too: change one thing, look, then change the next. Each link has its own cheap changes (a cable, the memory, a power cord), and one at a time is the only way to learn which link was the fault.' }),

    // ----- the check: six new questions -----
    item({
      id: 'l9-k-laptop',
      blocks: [
        chat('Nestor, Sales', 'm1', 'My laptop will not turn on. I plugged in the charger last night and now there is no light at all on the laptop.'),
        note('Causes you can list: the wall outlet, the charger and its cable, the laptop’s battery, the laptop’s power parts.')],
      asks: [ask('Which test do you run first?', [
        ['Plug the laptop’s own charger into another outlet.', true, 'One change. If the laptop comes on, the old outlet was the fault. If not, the outlet is cleared, and the charger, the battery and the laptop are what is left.'],
        ['Swap the charger and the outlet together.', TWO, 'Two changes at once. If the laptop comes on, you cannot tell whether the charger or the outlet was the fault.'],
        ['Open the firmware screen and check the boot order.', LINK, 'The laptop has no power, so there is no firmware screen to open. The test is on a link it has not reached.'],
        ['Order a new charger and wait for it to come.', PART, 'It spends money on one cause before any cheap test, and it changes the one thing the next test needs to keep.']])],
      deciding: ['m1'],
      reason: 'No light on the laptop puts the fault on link 1, power. A charger in a different outlet splits the wall from the rest, and changes only one thing. If it still fails, the next single change is a charger known to work for this model, which splits the charger from the laptop.' }),
    item({
      id: 'l9-k-logo',
      blocks: [
        chat('Keira, Records', 'l1', 'The computer shows the maker’s logo, then goes to a black screen with a blinking line and nothing else. It says nothing about a drive.'),
        table('What you know', ['Link', 'Worked?'], [['t1', 'Power', 'Yes: lights and fans'], ['t2', 'Start-up self-test', 'Yes: the logo shows']])],
      asks: [ask('Which test comes next?', [
        ['Open the firmware screen: is the drive listed, and first?', true, 'It costs nothing and changes nothing, and it shows whether the firmware sees a drive and will look at it.'],
        ['Replace the power supply with one from the stores room.', PART, 'Nothing in this ticket points at power: the lights, the fans and the logo show the computer started. A part is not replaced before the cheap look.'],
        ['Replace the memory with sticks from the stores room.', KEPT, 'The memory passed the self-test, since the logo shows.'],
        ['Try the monitor on another computer to check the screen.', KEPT, 'The logo shows on this monitor, so the screen works. The question is what happens after the logo.']])],
      deciding: ['t1', 't2'],
      reason: 'The first two links worked, so the fault is the third link or later. The firmware screen is the cheapest place to look next: whether it sees the drive, and in what order it looks, splits firmware and drive from Windows.' }),
    item({
      id: 'l9-k-where',
      blocks: [
        chat('Olwen, Planning', 'p1', 'I can sign in, but the screen then says it is “preparing” for ages and gives me a blank desktop with none of my icons or files. A co-worker signed in on my computer and has no trouble.')],
      asks: [ask('Where on the chain is the fault?', [
        ['Sign-in and profile: the saved desktop and files', true, 'The co-worker has no trouble on the same computer, so links 1 to 5 work. It fails only for Olwen, and only after sign-in: her profile.'],
        ['Windows loading: the logo, dots and the blue screen', LINK, 'Windows loads fine for the co-worker on the same computer.'],
        ['The boot drive: where the start-up files sit', LINK, 'The computer starts and shows sign-in, so the drive was found.'],
        ['Power: the outlet, cable and power supply', LINK, 'The computer is on and shows a screen.']])],
      deciding: ['p1'],
      reason: 'A different person gets through every link on the same computer, so the computer is cleared and the fault goes with Olwen’s profile. It is the same split as “another person, same computer” in cutting it in half, now on a chain.' }),
    item({
      id: 'l9-k-list',
      blocks: [
        chat('Pascal, Accounting', 's1', 'The fans spin and there are three long beeps, then nothing. The monitor says no signal. The same monitor works on my laptop.')],
      asks: [ask('Which causes are still worth listing? Pick every one that fits.', [
        ['A memory stick that is loose or has failed', true],
        ['The video card or its connection', true],
        ['The monitor is broken', KEPT, 'The same monitor works on Pascal’s laptop.'],
        ['The user’s profile is damaged', KEPT, 'The computer has not reached Windows or sign-in, so no profile has loaded.']], { many: true })],
      deciding: ['s1'],
      reason: 'The beeps mean the start-up self-test found a fault, usually memory or video, so those are the two to list. The monitor works elsewhere and the profile belongs to a link the computer never reached.' }),
    item({
      id: 'l9-k-call',
      blocks: [note('Ilsa in Records calls the help desk. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Ilsa calls about her desktop. What do you say?', form: 'call', from: 'Ilsa, Records', detail: 'Incoming call · 1:15 PM', start: 'one',
        turns: {
          one: { lines: [L('i1', 'My computer will not work. It is stuck on a black screen with some white words. I do not know what they say. Can you just reinstall Windows?')], push: 'She wants the biggest fix before she has read the words.',
            options: [{ id: 'reinstall', text: 'Yes, I will reinstall Windows for you now.', end: 'reinstall' },
              { id: 'read', text: 'So it is a black screen with white words on it. Please read me the words exactly as they are written.', goto: 'two' },
              { id: 'again', text: 'Turn it off and on again and call back.', end: 'again' },
              { id: 'plug', text: 'Is the monitor plugged in properly?', end: 'monitor' }] },
          two: { lines: [L('i2', 'It says “Operating system not found.” It showed the maker’s logo first. My last computer was fixed with a reinstall, so just do that.')], push: 'She still wants it reinstalled.',
            options: [{ id: 'list', text: 'The logo means power and the self-test worked. A reinstall would erase your files, and if the drive is missing it would not help. First I will look in the firmware screen to see whether the computer sees the drive.', end: 'list' },
              { id: 'reinstall2', text: 'I understand it worked last time. Then yes, I will put Windows on again for you now and call you when it is done.', end: 'reinstall2' },
              { id: 'virus', text: 'It is probably a virus.', end: 'virus' },
              { id: 'wait', text: 'Have you tried a different outlet for the computer?', end: 'outlet' }] }
        },
        ends: {
          list: { ok: true, then: 'The logo says the first two links worked. Whether the firmware sees the drive splits a missing or failed drive from damaged start-up files, and it erases nothing. Holding the line politely, with the reason, keeps her files safe.' },
          reinstall: { ok: false, slip: NEAR, then: 'A reinstall erases her files and nothing said Windows was the fault. The words on the screen had not been read yet.' },
          again: { ok: false, slip: NOSPLIT, then: 'A restart repeats the failure, and rules nothing out. The message on the screen is the most useful thing she has.' },
          monitor: { ok: false, slip: NOSPLIT, then: 'She can see words on the screen, so the monitor works. The question rules nothing out.' },
          reinstall2: { ok: false, slip: NEAR, then: 'The message could mean the drive is missing or unreadable, and a reinstall would not fix that. It also erases her files.' },
          virus: { ok: false, slip: 'guessed-cause', then: 'Nothing in “operating system not found” says a virus. Telling her a cause before knowing it can mislead her and the next person.' },
          outlet: { ok: false, slip: LINK, then: 'The computer has power: the logo and the message show it. Another outlet tests a link that already worked.' } } }],
      reason: 'Reading the words exactly is the cheapest test, and the maker’s logo says the first two links worked. The message places the fault on the boot drive, where the next cut is whether the firmware sees the drive, before any fix that erases files.' }),
    item({
      id: 'l9-k-blue',
      blocks: [
        chat('Radu, Operations', 'j1', 'Since this morning my computer starts, shows the Windows dots, then a blue screen and restarts, over and over. I have a report on it I have not saved anywhere else.'),
        note('Windows loading fails, and the report exists only on this computer.')],
      asks: [ask('What do you do first?', [
        ['Write down the stop code, and copy the report off before any repair.', true, 'The stop code names what failed and is what you search for. The report is protected before anything touches the drive.'],
        ['Reinstall Windows, since it will not start, and then rebuild the report.', 'no-backup', 'A reinstall can erase the report, the one thing Radu cannot replace.'],
        ['Restart it a few more times to see whether the blue screen clears.', NOSPLIT, 'It has restarted over and over already. Another try gives the same answer and rules nothing out.'],
        ['Open the firmware screen and move the drive to the top of the boot order.', KEPT, 'Windows has already started from this drive, so the firmware found it and the boot order works. The test was answered by the dots.']])],
      deciding: ['j1'],
      reason: 'A blue screen at the dots puts the fault on link 5, Windows loading. The stop code is the clue, and, as in the earlier topic on protecting data, the user’s only copy of the report comes first.' }),

    // ----- held in reserve for the weekly review -----
    item({
      id: 'l9-r-clock',
      blocks: [chat('Siena, Facilities', 'c1', 'My desktop was unplugged for a week, and now it says the date is back in 2015 and the firmware screen says “settings have been reset.” It still works.')],
      asks: [ask('Which link, and which part?', [
        ['Firmware: the small battery that keeps its settings and clock.', true, 'The firmware settings and the clock go back to defaults when that battery cannot keep them.'],
        ['The boot drive: it is failing and losing its settings.', LINK, 'The computer starts, so the drive is found. A failing drive does not reset the clock.'],
        ['Sign-in and profile: the profile is damaged and loads wrongly.', LINK, 'The date is wrong at the firmware screen, before any profile loads.']])],
      deciding: ['c1'],
      reason: 'A reset clock and “settings have been reset” both come from the firmware’s memory losing power. It is link 3.' }),
    item({
      id: 'l9-r-noise',
      blocks: [chat('Tomasz, Finance', 'k1', 'My desktop makes a grinding noise from inside and the file I open takes a minute. A pop-up from the manufacturer’s tool said a drive health check failed.')],
      asks: [ask('What does this show, and what comes first?', [
        ['A failing hard drive; get her files off first.', true, 'Grinding, slow reads and a failed S.M.A.R.T. check (the drive’s own health report) all say the drive is failing. It may stop at any start.'],
        ['The power supply; replace it today and test it.', LINK, 'Nothing here is about power. A power fault shows as no start or random shutdowns.'],
        ['The monitor; replace the cable and try again.', LINK, 'The screen works. The noise and slow reads come from a drive.']])],
      deciding: ['k1'],
      reason: 'Grinding, slow reads and a failed health check all name the drive. The files come out before any other step.' }),
    item({
      id: 'l9-r-monitor',
      blocks: [chat('Lee, Planning', 'l1', 'The computer starts, the lights are on and the fans spin, but the monitor says “No signal.” It did not beep.'),
        table('What you tried', ['Test', 'Result'], [['t1', 'Lee’s monitor plugged into a co-worker’s computer', 'A picture shows'], ['t2', 'Lee’s computer plugged into the co-worker’s monitor with a cable that works', 'No picture']])],
      asks: [ask('Where does this point?', [
        ['Lee’s computer, not the monitor or its cable', true, 'The monitor shows a picture from another computer, and Lee’s computer gives no picture to a good monitor.'],
        ['Lee’s monitor, which has stopped showing a picture', KEPT, 'The monitor shows a picture from the co-worker’s computer.'],
        ['The cable between the computer and the monitor', KEPT, 'The test used a cable that works, and the computer still gave no picture.']])],
      deciding: ['t1', 't2'],
      reason: 'The monitor works on another computer and Lee’s computer fails on a good monitor with a good cable, so the fault is inside the computer: the self-test, the video part or the memory.' }),
    item({
      id: 'l9-r-shutdown',
      blocks: [chat('Ursa, Sales', 'm1', 'My desktop shuts itself off after about ten minutes of work. It is hot to the touch and the fan sounds loud.')],
      asks: [ask('Which causes are worth listing? Pick every one that fits.', [
        ['The fan or the vents are blocked with dust', true],
        ['The heat sink is not making good contact on the processor, or the thermal paste has dried out', true],
        ['The user’s profile is damaged', KEPT, 'A damaged profile does not shut off the computer or make it hot.'],
        ['The monitor cable is loose', KEPT, 'A loose cable would change the picture, not shut off the computer or heat it.']], { many: true })],
      deciding: ['m1'],
      reason: 'A hot computer, a loud fan and shutdowns point at heat: dust that blocks cooling, or a heat sink that no longer cools the processor. The profile and monitor cable are not about heat.' }),
    item({
      id: 'l9-r-bulge',
      blocks: [chat('Vidal, Stores', 't1', 'I opened my old desktop to clean the dust. On the motherboard, one of the little round cans has a bulged top, and there is a brown crust on it. It still starts. Should I just keep using it?')],
      asks: [ask('What do you tell Vidal?', [
        ['Switch it off, unplug it, and leave it off until the board is replaced.', true, 'A bulged capacitor (the round can) is failing and can burst or take other parts with it. It still starting does not make it safe.'],
        ['Keep using it, and watch whether the bulge gets bigger over the next week.', RISK, 'Waiting to watch it grow runs the computer with a part that can fail suddenly.'],
        ['Press the bulge flat with a screwdriver while the computer runs.', RISK, 'A running board is live. Pressing on a failed can does not repair it, and it is unsafe.'],
        ['Clean off the crust, then start it to see whether it still works.', RISK, 'A start-up test would run a failing part. Cleaning it does not repair it.']])],
      deciding: ['t1'],
      reason: 'A swollen capacitor sits on no single link, because power reaches everything through the board. Here the cheap look comes second: a failing part is a safety risk, so power off, unplug, and replace the board.' }),
    item({
      id: 'l9-r-slow',
      blocks: [chat('Wanda, Legal', 'u1', 'My computer has become slow with everything I do, all day. It starts fine and signs me in fine. Nothing crashes. The fan runs loud.'),
        table('What you tried', ['Test', 'Result'], [['t1', 'Wanda signs in on a co-worker’s computer of the same make', 'Fast'], ['t2', 'Co-worker signs in on Wanda’s computer', 'Just as slow']])],
      asks: [ask('Where does this point?', [
        ['Wanda’s computer, not her profile: memory, the drive or heat', true, 'The co-worker is slow on the same computer, so the computer is the cause. The profile goes with the person and is cleared.'],
        ['Wanda’s profile, which holds her saved desktop and settings', KEPT, 'Wanda is fast on the other computer, so her profile is cleared.'],
        ['The start-up self-test, which checks memory and video first', LINK, 'The computer starts and signs in, so the self-test passed long ago.'],
        ['The power supply, which is not feeding the parts enough', LINK, 'A weak power supply stops the computer or shuts it down. It does not slow every program.']])],
      deciding: ['t1', 't2'],
      reason: 'Slow with everything, for anyone who signs in on that computer, puts the fault in the computer: memory too small, a drive that is full or failing, or heat from a loud fan. The next cheap looks are how full the drive is and the temperature.' })
  ]);
})();
