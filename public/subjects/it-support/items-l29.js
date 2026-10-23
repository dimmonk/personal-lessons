// IT Help Desk, lesson 29 "The whole ticket": the practice group, six new tickets from every system, unlabelled and with no help, before the check. Each asks the first move or the next move given what the ticket
// already shows (the nine moves and the chains of lessons 9 to 28). None of them is in the check. Facts as in the lessons they come from. Invented people; each name here has one job.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const W = 'whole';
  const chat = (id, from, text, prompt, rows, reason) => item({ id, strand: W,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const PART = 'part-first', NOSPLIT = 'no-split', LINK = 'wrong-link', WIPE = 'wipe-first', TRUSTW = 'trusted-warning', NETSET = 'net-setting', SHARED = 'reset-shared',
    TIDY = 'tidy-first', WINWIPE = 'windows-wipe', CAP = 'ignored-cap', EXPOSED = 'exposed-remote', WREMOTE = 'wrong-remote';

  FC.items('it-support', [
    chat('l29-p-streak', 'Oksana, Design', 'Every page from the shared laser printer has a dark streak down the left edge. I printed from Word and from my browser and both show it.',
      'What is the next move?', [
        ['Print the printer’s own test page from its panel and look for the streak', true, 'A page made by the printer alone takes the computer, the driver and the queue out of the chain. If the streak is there, the fault is in the printer.'],
        ['Reinstall the printer driver on the computer, restart it, and print the report again', LINK, 'Two programs gave the same streak, so the driver is an unlikely link. The streak is marked on the paper by the printer.'],
        ['Clear the print queue and restart the Print Spooler on the computer', LINK, 'The pages do come out, so the queue works. The fault shows up after the job leaves the computer.'],
        ['Replace the whole printer with the spare from the storeroom and move the cables across', PART, 'A swap is a costly way to learn what a test page would show for free.']],
      'A test page printed from the printer’s own panel splits the printer from everything before it on the print path.'),
    chat('l29-p-noweb', 'Nikhil, Sales', 'My laptop says Connected but no internet when I sit at my desk. My phone works fine on the same Wi-Fi from the same chair.',
      'What is the next move?', [
        ['Run ipconfig on the laptop and read its address and gateway', true, 'The phone works, so the router and the line are fine. The laptop’s address is the next thing to read on the connection chain.'],
        ['Restart the office router in the supply room and try again', SHARED, 'The phone works on it, and other people are on it too. Restarting it would not tell what is wrong with one laptop.'],
        ['Replace the Wi-Fi card inside the laptop and test the connection', PART, 'A part is not the first move when a free command can show whether the laptop has an address.'],
        ['Change the Wi-Fi password and have Nikhil sign in to it again', NETSET, 'The laptop already connects, so the password is not what is wrong. This changes a setting that does not match the symptom.']],
      'The phone works on the same Wi-Fi, so the fault is on the laptop’s side of the connection chain; ipconfig shows its address and gateway.'),
    chat('l29-p-slowstart', 'Ulises, Finance', 'Since Monday my PC takes ten minutes to reach the desktop. My teammates have the same model, bought the same day, and theirs start in one minute.',
      'What is the next move?', [
        ['Open the Startup tab in Task Manager and look at what loads at sign-in', true, 'Same model, different speed, so the difference is software on this PC. The Startup tab lists what starts with Windows.'],
        ['Reinstall Windows on the PC and put the programs back afterwards one by one', WINWIPE, 'A reinstall is the biggest step. Smaller ways back come first, and the files are at risk.'],
        ['Add more memory to the PC and see whether it starts any faster', PART, 'The teammates have the same memory and start fast. A part is not the first move.'],
        ['Run a registry cleaner to tidy up whatever has built up since Monday', TIDY, 'A cleaner changes the PC before anyone has looked at what is wrong with it.']],
      'The same model starting fast elsewhere points to software on this PC; the Startup tab in Task Manager shows what loads.'),
    chat('l29-p-textlink', 'Valeria, Sales', 'I tapped a link in a text and installed a free app from a website, not the store. Now the phone is hot, the battery is dead by lunch and my data plan is almost used up.',
      'What is the next move?', [
        ['Check the data and battery usage lists, and remove the app that came from the website', true, 'Heat, battery and data point at an app that works in the background. It came from outside the store, so it is the suspect.'],
        ['Tell Valeria the carrier is overcharging and request a bigger data plan on the account', CAP, 'The plan was used up by something. A bigger plan would only let it run longer.'],
        ['Reset the phone to factory settings and configure it from scratch with a new account', WIPE, 'A reset wipes the phone before the cheaper steps, and the data on it may have no other copy.'],
        ['Install a second security app, using the link on the same website the first came from', TRUSTW, 'That trusts the same site that gave the first app. Nothing says it is safe.']],
      'An app from outside the store plus heat, battery and data signs is checked in the usage lists, then removed.'),
    chat('l29-p-homework', 'Zaid, Estimating', 'I work from home tomorrow and need my Windows desktop at the office. How do I reach it?',
      'What do you configure?', [
        ['Have Zaid join the company VPN first, then open Remote Desktop to the office PC', true, 'Remote Desktop shows a full Windows desktop. It is reached through the VPN, so it is never open to the whole internet.'],
        ['Open the Remote Desktop port on the office router so Zaid can connect straight from home', EXPOSED, 'Remote Desktop open to the internet is a door anyone can try. It belongs behind a VPN.'],
        ['Configure SSH on the office PC so Zaid can type commands to it from home tomorrow', WREMOTE, 'SSH gives typed commands on a Linux machine. Zaid needs the Windows desktop.'],
        ['Have Zaid install a free screen-sharing app found by a web search', TRUSTW, 'Only tools the company allows are used, and a program from a search result has not been checked.']],
      'A Windows desktop from home is reached with Remote Desktop, through the company VPN.'),
    chat('l29-p-beeps', 'Isolde, Design', 'Yesterday I added a new memory stick to my desktop. Now it beeps when I turn it on and the screen stays black.',
      'What is the next move?', [
        ['Take out the new memory stick and start the computer again', true, 'The new stick is what changed. Taking it out is the cheapest test, and it splits the stick from the rest of the computer.'],
        ['Replace the motherboard', PART, 'The beeps appeared right after the new stick went in. A board is the last part to swap.'],
        ['Reinstall Windows from a USB stick and try the new memory afterwards', WINWIPE, 'The computer fails before Windows starts, so Windows is not the suspect. A reinstall also risks the files.'],
        ['Update the firmware on the motherboard and start the computer again', NOSPLIT, 'A computer that does not start cannot take an update, and the step does not split anything.']],
      'The new memory stick is what changed, and taking it out is the cheapest test that splits the chain.'),
  ]);
})();
