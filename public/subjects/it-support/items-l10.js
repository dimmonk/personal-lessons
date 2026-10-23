// IT Help Desk, lesson 10 "The parts inside": the worked ticket and the four groups (27 questions, one or more per fact group).
// Sources: docs/research/it-support.md IT5 (each part taught by what it does for the whole computer), IT7, IT24; A+ Core 1 objectives 3.3 (RAM),
// 3.5 (motherboards, CPUs, firmware settings, add-on cards, cooling) and 3.6 (power supply) in docs/research/it-support-aplus.md.
// Strands: power, board, cpu, firmware, memory, cooling. All people and tickets are invented.
// Review fixes (fixes-l9-13.md, Lesson 10): stems no longer name the answer, some right answers are the bigger step, accept lists widened,
// every fact the check asks is practised here first.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const spoken = text => ({ kind: 'spoken', text });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const recall = (id, strand, words, accept, reason) => item({ id, strand, blocks: [spoken(words)],
    asks: [{ id: 'say', kind: 'text', prompt: 'Type your answer.', accept }], reason });
  const VOLT = 'wrong-voltage', SMALL = 'too-small-psu', FIT = 'wont-fit', PART = 'wrong-part', SETT = 'wrong-setting';

  FC.items('it-support', [
    // ----- the worked ticket: the first guess (heat) is ruled out by one reading, then the supply's label decides -----
    item({
      id: 'l10-w-shutoff', strand: 'power',
      blocks: [
        msg('chat', 'Odile, Design', 'Chat with the help desk', [['r1', 'My desktop switches itself off a few seconds after I start a game. I put in a new graphics card last week.']]),
        table('What the parts need, and what the power supply can give', ['Part', 'Watts'], [
          ['w1', 'Processor, at full work', '95'], ['w2', 'New graphics card, at full work', '250'], ['w3', 'Drives, fans and the rest', '60'], ['w4', 'Label on the power supply: “300 W”', '300']])],
      asks: [ask('The processor read 48 degrees C when the computer switched off; its maker lists 100 degrees C as the top. What do you do next?', [
        ['Cross off heat, then compare the parts’ total with the supply label.', true, 'A cool processor rules out overheating. The supply’s label is the next cause on the chain.'],
        ['Take the heat sink off and put on new thermal paste, then test the game again.', 'kept-ruled-out', 'At 48 degrees the processor is cool. Heat is ruled out, and this would change a part that is not the cause.'],
        ['Reset the firmware settings to their defaults, then start the game again.', PART, 'Settings do not make a computer switch off the moment a hungry card starts work. The power chain is the next link.']])],
      steps: [
        { id: 'chain', does: 'Start from what the computer does: power in, parts that draw it, heat out.', working: 'It dies when the game starts, which is when the graphics card works hardest. So the parts that need the most power or make the most heat are the first causes.' },
        { id: 'guess', does: 'Name the first guess and test it with one reading.', working: 'Guess: it overheats, because a new card makes more heat. Reading the temperature as it switches off: 48 degrees C, with the fans running. That is cool, so heat is ruled out.', ask: 'a' },
        { id: 'sum', does: 'Add up what the parts can draw at once.', working: '95 + 250 + 60 = 405 watts at full work. The label on the supply says 300 W, which is all it can give.' },
        { id: 'fix', does: 'Change one thing: a bigger supply.', working: 'A supply labeled 550 W gives well over the 405 watts, which leaves room to spare. The computer now runs the game. The old supply was too small for the new card.' }],
      deciding: ['r1', 'w4'],
      reason: 'A cool processor ruled out heat. The parts add up to 405 watts at full work and the supply gives 300, so the supply shuts down when the new card works hard. One change, a bigger supply, fixed it.' }),

    // ----- group 1: help shown; the deciding words are marked -----
    item({
      id: 'l10-p-volt', strand: 'power',
      blocks: [msg('chat', 'Birgit, Marketing', 'Chat with the help desk', [['i1', 'I moved to Germany and brought my desktop. The outlet here gives 230 volts. The power supply has a red switch on the back that says 115 or 230.']])],
      asks: [ask('Where should the red switch be before you plug it in?', [
        ['At 230', true, 'The supply must match the outlet. The 220 to 240 volt range is the one used in Germany.'],
        ['At 115', VOLT, '115 is the 110 to 120 volt range of North American outlets. Switched that low on a 230 volt outlet, the supply can be ruined.'],
        ['Wherever it is; plug in and see whether it starts', VOLT, 'A supply with a switch has to be told which outlet it is on. Plugging in on the wrong position can break it, so the starting test comes after the switch is right.']])],
      deciding: ['i1'],
      reason: 'The input voltage of the supply has to match the outlet: 110 to 120 volts in North America, 220 to 240 volts in much of the rest of the world. A switch in the wrong position can destroy the supply.' }),
    item({
      id: 'l10-b-fit', strand: 'board',
      blocks: [msg('chat', 'Piers, Facilities', 'Chat with the help desk', [['t1', 'I am building a small desktop for the lobby. The tower is a tiny one that only takes the smallest of the three common board sizes.']])],
      asks: [ask('Which board do you buy?', [
        ['A Mini-ITX board', true, 'It is the smallest of the three common sizes and the size the tower was made for.'],
        ['A microATX board', FIT, 'It is larger than Mini-ITX and will not fit a tower made only for the smallest size.'],
        ['An ATX board', FIT, 'ATX is the largest of the three. It will not fit a tower made only for the smallest size.']])],
      deciding: ['t1'],
      reason: 'The motherboard sizes in order, largest first: ATX, then microATX, then Mini-ITX. A smaller board fits a larger tower, but a larger board never fits a smaller one.' }),
    item({
      id: 'l10-c-socket', strand: 'cpu',
      blocks: [
        msg('chat', 'Rhoda, Support', 'Chat with the help desk', [['d1', 'I am replacing the processor in a desktop. The board’s label is below. Which of the shop’s three processors will fit?']]),
        table('The board’s label', ['Detail', 'Value'], [['s1', 'Processor socket', 'AM5']])],
      asks: [ask('Which processor fits?', [
        ['A Ryzen processor made for AM5', true, 'A processor must be made for the socket on the board. AM5 is an AMD socket, and this one is made for it.'],
        ['A Ryzen processor made for AM4', FIT, 'Same maker, but AMD has more than one socket. AM4 is an older socket and does not fit AM5.'],
        ['A Core processor made for LGA 1700', FIT, 'Intel and AMD processors do not fit each other’s sockets.']])],
      deciding: ['s1'],
      reason: 'The socket on the motherboard decides which processors fit. Intel and AMD use different sockets, and each maker has several, so the name on the board must match the one the processor was made for.' }),
    item({
      id: 'l10-f-boot', strand: 'firmware',
      blocks: [msg('chat', 'Silas, Technician', 'Note in the ticket', [['m1', 'Plugged in a USB stick to put Windows on a new computer. It keeps starting from the old drive instead and shows the old system.']])],
      asks: [ask('Which setting in the firmware do you change?', [
        ['The boot order, with the USB stick first', true, 'The boot order is the list of devices the firmware tries when it looks for something to start from.'],
        ['The TPM, so it holds the Windows code', SETT, 'The TPM is a chip that stores secret codes for encryption. It does not choose which device starts.'],
        ['The firmware password, so only you can change it', SETT, 'A password controls who may change settings. It does not choose what starts.']])],
      deciding: ['m1'],
      reason: 'The firmware keeps a boot order, a list of devices it tries one after the other. To start from a USB stick, move it to the top of that list.' }),
    item({
      id: 'l10-m-sodimm', strand: 'memory',
      blocks: [msg('chat', 'Thea, Sales', 'Chat with the help desk', [['k1', 'I want to add more memory to my laptop. What kind of memory module goes in a laptop?']])],
      asks: [ask('Which module?', [
        ['SODIMM', true, 'A SODIMM is the shorter module made for laptops and small computers.'],
        ['DIMM', FIT, 'A DIMM is the full-length module for desktops and servers. It is too long for a laptop.'],
        ['An ECC server module', PART, 'ECC checks for errors and is used in servers. It is not the form that fits a laptop.']])],
      deciding: ['k1'],
      reason: 'Desktops take DIMMs. Laptops and small computers take SODIMMs, which are about half the length.' }),
    item({
      id: 'l10-k-paste', strand: 'cooling',
      blocks: [msg('chat', 'Ulla, Technician', 'Note in the ticket', [['l1', 'Fitted the new heat sink on the processor. A thin layer of thermal paste goes between the two first. What is that paste for?']])],
      asks: [ask('What does the thermal paste do?', [
        ['It fills tiny gaps so heat reaches the heat sink', true, 'Two metal surfaces never touch perfectly. The paste fills the air gaps, and air is a poor carrier of heat.'],
        ['It glues the heat sink onto the chip firmly', PART, 'The heat sink is held by clips or screws. The paste is not glue.'],
        ['It stops electricity passing between the two', PART, 'Paste is for moving heat, not for blocking power.']])],
      deciding: ['l1'],
      reason: 'The processor makes heat, and the heat sink carries it away. Thermal paste is a thin layer that fills the tiny gaps between them so the heat can pass.' }),

    // ----- group 2: no help -----
    item({
      id: 'l10-p-rail', strand: 'power',
      blocks: [note('A power supply gives three direct current outputs: 3.3 volts, 5 volts and 12 volts. A graphics card draws up to 250 watts through its own power plug.')],
      asks: [ask('Which output voltage does that plug carry?', [
        ['12 volts', true, 'The 12 volt output carries the most power. It drives the processor, the graphics card, the fans and drive motors.'],
        ['5 volts', VOLT, 'The 5 volt output runs smaller circuits such as USB ports and the electronics of drives.'],
        ['3.3 volts', VOLT, 'The 3.3 volt output runs the small circuits on the board.']])],
      reason: 'Of the three outputs, 12 volts does the heavy work. The 5 and 3.3 volt outputs run the small circuits: chips on the board, USB ports and the electronics of drives.' }),
    item({
      id: 'l10-b-slot', strand: 'board',
      blocks: [msg('chat', 'Vance, Design', 'Chat with the help desk', [['n1', 'I bought a graphics card for my desktop. Where on the motherboard does it go?']])],
      asks: [ask('Which place on the board?', [
        ['The longest PCIe slot', true, 'PCIe is the slot for cards, and the longest one is the one graphics cards use.'],
        ['The M.2 slot on the board', PART, 'M.2 is a small slot for solid-state drives and some wireless cards, not graphics cards.'],
        ['A SATA port beside it', PART, 'SATA ports are for cables to drives, not cards.']])],
      deciding: ['n1'],
      reason: 'Cards go in PCIe slots, and a graphics card uses the longest. M.2 is a small slot for solid-state drives and wireless cards, and SATA is the cable connection for drives.' }),
    item({
      id: 'l10-c-arch', strand: 'cpu',
      blocks: [
        msg('chat', 'Wilma, Billing', 'Chat with the help desk', [['h1', 'My computer has 8 GB of memory but Windows only shows 3.5 GB usable. All my files are on this computer.']]),
        table('About this computer', ['Detail', 'Value'], [['s1', 'Installed memory', '8 GB'], ['s2', 'System type', '32-bit operating system'], ['s3', 'Processor', 'Can run 64-bit']])],
      asks: [ask('What fixes it?', [
        ['Copy his files off first, then put on 64-bit Windows', true, 'A 32-bit system can use only about 4 GB. A 64-bit system uses all of the 8 GB, and this processor can run it. Putting on a new system can wipe the drive, so the files are copied first.'],
        ['Put on 64-bit Windows over the old system now', 'no-backup', 'This is the right fix, but a new system can wipe the drive. His files are protected first.'],
        ['Buy more memory sticks and fit them in the computer', PART, 'The memory is already there. The 32-bit system cannot use more than about 4 GB.'],
        ['Turn on dual channel in the firmware to free the memory', SETT, 'Dual channel makes memory faster. It does not lift a 32-bit system’s limit.']])],
      deciding: ['h1', 's2', 's3'],
      reason: 'A 32-bit (x86) system can address about 4 GB of memory. A 64-bit (x64) system can address far more. The processor can run 64-bit, so the system, not the hardware, is the limit. Files are protected before a new system goes on.' }),
    item({
      id: 'l10-f-secure', strand: 'firmware',
      blocks: [msg('chat', 'Per, Technician', 'Note in the ticket', [['p1', 'Tried to start an old repair tool from a USB stick. The computer shows “Secure Boot violation” and starts from the drive instead.']])],
      asks: [ask('Which firmware feature refused the tool?', [
        ['Secure Boot, which checks signatures', true, 'The tool is not signed by a trusted maker, so Secure Boot would not start it.'],
        ['The TPM, the chip for encryption codes', SETT, 'The TPM stores secret codes for encryption. It does not decide which software starts.'],
        ['The boot password, asked before starting', SETT, 'A boot password is asked for before anything starts. This message names Secure Boot.']])],
      deciding: ['p1'],
      reason: 'Secure Boot lets only software signed by a trusted maker start, which keeps malware out of the start-up. An old unsigned tool is refused until Secure Boot is turned off or a signed tool is used.' }),
    item({
      id: 'l10-m-ecc', strand: 'memory',
      blocks: [msg('chat', 'Xavi, Server Team', 'Chat with the help desk', [['o1', 'The new database server should catch and fix a single flipped bit in memory on its own. What memory type do I order?']])],
      asks: [ask('Which memory?', [
        ['ECC memory', true, 'ECC adds extra bits to check data, so a flipped bit is found and fixed. Servers use it.'],
        ['SODIMM memory', PART, 'SODIMM describes the size and shape, for laptops. It says nothing about correcting errors.'],
        ['Dual-channel memory', PART, 'Channels make memory faster. They do not correct errors.']])],
      deciding: ['o1'],
      reason: 'ECC memory carries extra bits that let it detect and fix a flipped bit. It costs more and needs a board and processor made to work with it, so servers use it and most home computers (non-ECC) do not.' }),
    item({
      id: 'l10-k-fans', strand: 'cooling',
      blocks: [
        msg('chat', 'Zane, Front Desk', 'Chat with the help desk', [['b1', 'My computer gets slow and then turns itself off. I cleaned the dust out of it last month.']]),
        table('Read in the firmware', ['Reading', 'Value'], [['t1', 'Processor temperature', '97 degrees C'], ['t3', 'Top temperature the maker lists', '100 degrees C'], ['t2', 'Fan on the processor', '0 rpm: not turning']])],
      asks: [ask('What is the cause, and what do you do?', [
        ['The processor fan has stopped; replace the fan', true, 'The chip is at 97 degrees, close to the 100 the maker lists as the top, and the fan is not turning. A stopped fan will not move heat, so the fan itself is the part to change.'],
        ['Dust again; clean the fan and heat sink once more', 'poked-nearest', 'It was cleaned last month, and cleaning does not start a fan that has stopped. The reading shows the fan is not turning.'],
        ['Not enough thermal paste; put on fresh paste', PART, 'Paste helps heat pass into the heat sink, but with no fan turning the heat has nowhere to go.'],
        ['The power supply is too small; buy a bigger one', SMALL, 'A heat reading of 97 degrees points to cooling. A supply that is too small switches off at once under load, with no slow climb.']])],
      deciding: ['t1', 't2'],
      reason: 'A processor near 100 degrees with its fan at 0 rpm is a cooling fault: the computer slows itself down, then switches off to protect the chip. Cleaning cannot fix a dead fan, so the fan is replaced.' }),
    item({
      id: 'l10-p-conn', strand: 'power',
      blocks: [
        msg('chat', 'Dario, Technician', 'Note in the ticket', [['g1', 'The new graphics card has one 8-pin power socket on its edge. The power supply’s leads are listed below. Which one goes in?']]),
        table('Leads on this power supply', ['Label on the lead', 'Plug'], [['l1', '24-pin main', '20+4 pins'], ['l2', 'CPU', '4+4 pins'], ['l3', 'PCIe', '6+2 pins'], ['l4', 'SATA power', 'Flat, for drives'], ['l5', 'Molex', 'Four-pin, for old drives']])],
      asks: [ask('Which lead?', [
        ['The one labeled PCIe, clipping the 6 and 2 pins together', true, 'A graphics card takes a PCIe power plug of 6 or 8 pins. The 6+2 lead clips the two extra pins on to make 8.'],
        ['The one labeled CPU, since it also has 8 pins', 'mixed-look-alike', 'The CPU plug and the PCIe plug look alike but are wired differently. The processor’s plug does not belong in a graphics card.'],
        ['The SATA power lead with an adapter', PART, 'SATA power is for drives and cannot carry what a graphics card draws.'],
        ['The 24-pin main lead, since it is the biggest', PART, 'The 24-pin plug feeds the motherboard.']])],
      deciding: ['g1', 'l3'],
      reason: 'The 24-pin plug feeds the board, the 4 or 8-pin CPU plug feeds the processor, and a graphics card takes a PCIe plug of 6 or 8 pins. SATA power and Molex are for drives.' }),
    item({
      id: 'l10-f-usb', strand: 'firmware',
      blocks: [msg('chat', 'Anton, Security', 'Chat with the help desk', [['q1', 'Staff keep plugging personal flash drives into the lobby computers. I want those ports not to work at all, without taking the computers apart.']])],
      asks: [ask('Where do you turn the ports off?', [
        ['In the firmware’s USB permissions', true, 'The firmware can turn USB ports off, and a password on the firmware stops people turning them back on.'],
        ['By turning off Secure Boot in the firmware', SETT, 'Secure Boot controls which software may start, not whether ports work.'],
        ['In the boot order of the firmware', SETT, 'The boot order picks which device starts the system, not whether a port works.']])],
      deciding: ['q1'],
      reason: 'The firmware has settings for USB permissions. Turn the ports off there, and guard the settings with a firmware password.' }),

    // ----- group 3: no help, mixed with the start-up topic -----
    item({
      id: 'l10-p-pin', strand: 'power',
      blocks: [msg('chat', 'Anselm, Technician', 'Note in the ticket', [['g1', 'The old board has a 20-pin power socket. The new supply’s main connector is marked “20+4” and has four pins on a separate clip.']])],
      asks: [ask('What do you do?', [
        ['Unclip the four pins and plug in the 20 only', true, 'The 20+4 connector is made for both: 24 pins for newer boards, 20 when the four are taken off.'],
        ['Buy a different supply, since the connector is the wrong size', PART, 'The 20+4 connector fits both 20-pin and 24-pin boards.'],
        ['Plug the 24 pins in anyway', FIT, 'A 20-pin socket has no place for the extra four pins.']])],
      deciding: ['g1'],
      reason: 'The main power connector to the board is 24 pins on newer boards and 20 on older ones. A “20+4” connector splits into 20 and 4 so one supply fits both.' }),
    recall('l10-c-virt', 'cpu', 'What setting in the firmware must be on before a computer can run virtual machines?',
      ['Virtualization', 'Virtualization support', 'CPU virtualization', 'Hardware virtualization', 'Virtualization technology', 'Enable virtualization', 'Enabled virtualization', 'VT', 'VT-x', 'Intel VT', 'Intel VT-x', 'AMD-V', 'SVM'],
      'Virtualization (VT-x on Intel, AMD-V on AMD) is often off at first. Turn it on in the firmware to run virtual machines.'),
    item({
      id: 'l10-f-tpm', strand: 'firmware',
      blocks: [msg('chat', 'Bela, Technician', 'Note in the ticket', [['u1', 'The Windows 11 check says: “This PC can’t run Windows 11. TPM 2.0 required.” What is the TPM?']])],
      asks: [ask('What is a TPM?', [
        ['A chip, or a processor feature, that stores this computer’s encryption codes', true, 'Windows uses it to protect the drive. It is usually a chip on the board, and some processors do the same job in firmware. It can be turned on in the firmware if it is off.'],
        ['A password asked for before the system starts up', SETT, 'That is a boot password. A TPM stores codes; it is not a password.'],
        ['A separate hardware module that holds encryption codes for many systems', PART, 'That describes an HSM. A TPM guards the codes of this one computer.']])],
      deciding: ['u1'],
      reason: 'A TPM (trusted platform module) stores a computer’s encryption codes safely, usually on a chip on the motherboard. An HSM is a separate device that does the same job for many systems, used with servers. The firmware can turn the TPM on.' }),
    item({
      id: 'l10-m-ddr', strand: 'memory',
      blocks: [msg('chat', 'Wren, Receiving', 'Chat with the help desk', [['m1', 'The board takes DDR4. I was sent a DDR5 stick instead. The notch in the stick is in a different place from the notch in the slot.']])],
      asks: [ask('What is the right way to read that?', [
        ['It is the wrong generation and will not fit; send it back', true, 'Each DDR generation has its notch in a different place so a stick cannot go in the wrong board.'],
        ['It will fit if pushed harder, and just run slower on this board', FIT, 'The notch stops the stick going in. Forcing it can break the slot.'],
        ['It will work, as long as it is put in dual channel', PART, 'Channels do not matter when the stick cannot go into the slot.']])],
      deciding: ['m1'],
      reason: 'DDR4 and DDR5 are different generations. Each has its notch in a different place, so the generations cannot be swapped.' }),
    recall('l10-k-sink', 'cooling', 'What do you call the finned metal block that sits on a processor and pulls heat away from it?',
      ['Heat sink', 'Heatsink', 'Cooler', 'CPU cooler', 'Processor cooler'],
      'A heat sink is a block of metal with fins. Heat from the chip passes into it, and a fan blows the heat off the fins.'),
    item({
      id: 'l10-p-eighty', strand: 'power',
      blocks: [table('Two power supplies, same wattage', ['Supply', 'Rating', 'Price'], [['s1', 'A', '80 Plus Gold', '$85'], ['s2', 'B', '80 Plus Bronze', '$50']])],
      asks: [ask('Which supply wastes less of the wall power as heat?', [
        ['A, because Gold is more efficient than Bronze', true, 'Gold wastes less than Bronze. More of the wall power reaches the computer and less turns to heat.'],
        ['B, because it costs less to buy', PART, 'The price is not the efficiency. Bronze wastes more than Gold.'],
        ['They waste the same, because the wattage is the same', PART, 'Wattage is how much it can give. Efficiency is how much it wastes making it.']])],
      deciding: ['s1', 's2'],
      reason: 'The 80 Plus list runs Bronze, Silver, Gold, Platinum, Titanium. Titanium wastes the least as heat and Bronze the most. The wattage tells how much the supply can give, not how much it wastes.' }),
    item({
      id: 'l10-f-fwpw', strand: 'firmware',
      blocks: [msg('chat', 'Joss, Training Room', 'Chat with the help desk', [['j1', 'Someone changed the boot order on a classroom computer to start a game from a stick. Students must still be able to start the computers and sign in. How do we stop settings being changed?']])],
      asks: [ask('Which password?', [
        ['A firmware (BIOS or UEFI) password', true, 'It is asked for only when someone opens the settings, so the computers still start for students.'],
        ['A boot password at every start', SETT, 'A boot password is asked for before the system starts, so students could not even start the computers.'],
        ['A TPM, the chip for encryption', PART, 'A TPM is a chip for encryption codes, not a password for the settings.']])],
      deciding: ['j1'],
      reason: 'A firmware password guards the settings. A boot password guards the start-up itself. The classroom needs the first and not the second.' }),

    // ----- group 4: no help, the rest of the board, processor and memory facts -----
    recall('l10-b-con', 'board', 'What is the name of the kind of slot on a motherboard that takes a graphics card?',
      ['PCIe', 'PCI Express', 'PCIe slot', 'PCI-E', 'PCI-E x16', 'PCIe x16', 'PCI Express x16', 'PCI Express 16x', 'x16', 'PCIe 16x'],
      'PCIe (PCI Express) is the slot for add-on cards. The longest slot is the one graphics cards use. PCI alone is the older slot, which PCIe replaced.'),
    item({
      id: 'l10-b-m2', strand: 'board',
      blocks: [
        msg('chat', 'Cora, Technician', 'Note in the ticket', [['a1', 'The new solid-state drive is labeled “M.2 NVMe”. It is a thin stick, about the size of a stick of gum. The board has the connectors in the table.']]),
        table('Connectors on this board', ['Connector', 'Count'], [['c1', 'SATA ports (for cables)', '4'], ['c2', 'Slot labeled M.2', '1'], ['c3', 'PCIe slots', '2'], ['c4', 'Header for the front panel', '1']])],
      asks: [ask('Where does the drive go?', [
        ['In the slot labeled M.2', true, 'M.2 is the shape of slot a small stick plugs into straight on the board.'],
        ['In a SATA port, with a cable', PART, 'A drive is not always a SATA drive. This stick is the M.2 shape, which has its own slot.'],
        ['In a PCIe slot, like other cards', PART, 'Cards go in PCIe slots. This drive’s shape is M.2.'],
        ['On the front-panel header', PART, 'A header is a row of pins for front-panel wires, USB ports and fans.']])],
      deciding: ['a1', 'c2'],
      reason: 'A drive labeled M.2 is a small stick that plugs straight into a slot labeled M.2. SATA drives use a cable, and headers are pin rows for the tower’s own wires and ports.' }),
    item({
      id: 'l10-m-chan', strand: 'memory',
      blocks: [msg('chat', 'Edda, Technician', 'Note in the ticket', [['h1', 'The board has four memory slots: two black and two gray. I have two matching sticks and want the memory to run on two paths to the processor.']])],
      asks: [ask('Where do the two sticks go?', [
        ['In the two slots of the same color, as the board’s manual shows', true, 'Boards pair their slots, usually by color. Matching sticks in a pair run as dual channel.'],
        ['In the two slots right beside each other', 'wrong-slots', 'Slots side by side are often not a pair. Use the pair the manual shows, usually the same color.'],
        ['In any two slots; the board works out the paths', 'wrong-slots', 'Only the paired slots make dual channel. In others the sticks may run as single channel.']])],
      deciding: ['h1'],
      reason: 'Single channel is one path. Dual channel is two matching sticks in the paired slots, usually the same color. Some boards take three (triple channel) or four (quad channel).' }),
    item({
      id: 'l10-c-lowpower', strand: 'cpu',
      blocks: [msg('chat', 'Rune, Procurement', 'Chat with the help desk', [['r1', 'We want a laptop that lasts about twenty hours on one charge and stays cool. Which processor design is built for using as little power as possible?']])],
      asks: [ask('Which design?', [
        ['ARM', true, 'ARM processors are built to use little power, so phones, tablets and some laptops use them.'],
        ['x64, the 64-bit PC design', PART, 'x64 is common in desktops and laptops, but it is not the design made for the lowest power.'],
        ['x86, the 32-bit PC design', PART, 'x86 is the older PC design. It is not the one built to save power.']])],
      deciding: ['r1'],
      reason: 'ARM is the design built for low power. x86 and x64 are the 32-bit and 64-bit forms of the design used in most PCs.' }),
    item({
      id: 'l10-b-pci', strand: 'board',
      blocks: [msg('chat', 'Fenn, Records', 'Chat with the help desk', [['f1', 'I have an old network card whose box says “PCI”. My new computer’s board only has PCIe slots and one M.2 slot. Can I use the card?']])],
      asks: [ask('What do you tell Fenn?', [
        ['No; PCI is an older kind of slot, so you need a PCIe card', true, 'PCI is the older slot. PCIe is a different, newer one, and the cards do not swap.'],
        ['Yes, in any PCIe slot, since PCIe is just the new name', 'mixed-look-alike', 'The names are alike, but the slots are different shapes and speeds. An old PCI card does not go in a PCIe slot.'],
        ['Yes, in the M.2 slot, because it is the smallest', PART, 'M.2 is a slot for small sticks such as drives. It does not take an old card.']])],
      deciding: ['f1'],
      reason: 'PCI is the older card slot and PCIe is the newer one. Cards for one do not fit the other, so the new board needs a PCIe network card.' }),
    item({
      id: 'l10-b-card', strand: 'board',
      blocks: [msg('chat', 'Sade, Studio', 'Chat with the help desk', [['s1', 'I want to record video from my game console on this desktop, with the console plugged into the computer.']])],
      asks: [ask('Which add-on card does that?', [
        ['A capture card', true, 'A capture card takes in video from a camera or console so the computer can record it.'],
        ['A video (graphics) card', PART, 'A graphics card draws the picture on a screen. It does not record video coming in.'],
        ['A sound card', PART, 'A sound card handles audio only.'],
        ['A network card', PART, 'A network card connects the computer to a network.']])],
      deciding: ['s1'],
      reason: 'Cards add abilities: sound, graphics, a network connection, and capture, which records video coming in from a camera or console. All go in PCIe slots.' })
  ]);
})();
