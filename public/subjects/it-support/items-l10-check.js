// IT Help Desk, lesson 10 "The parts inside": the eight questions of the check and the reserve (three unseen for each of the six topics).
// Sources: A+ Core 1 objectives 3.3, 3.5 and 3.6 (docs/research/it-support-aplus.md); IT5 (each part by what it does for the whole computer).
// Strands: power, board, cpu, firmware, memory, cooling. All people and tickets are invented.
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
    // ----- the check: eight new questions, no help -----
    item({
      id: 'l10-k-watt', strand: 'power',
      blocks: [
        msg('chat', 'Bruno, Engineering', 'Chat with the help desk', [['w1', 'I am building a workstation. Which power supply should I buy?']]),
        table('What the parts can draw at full work', ['Part', 'Watts'], [['p1', 'Processor', '125'], ['p2', 'Graphics card', '300'], ['p3', 'Drives, fans and the rest', '75']]), note('This desk’s rule: the label on the supply must be at least 20 percent above the total the parts can draw.')],
      asks: [ask('Which power supply?', [
        ['One labeled 650 W', true, 'The parts add up to 500 watts at full work. 650 watts is 30 percent above that, which meets the desk’s 20 percent rule.'],
        ['One labeled 550 W', 'tight-psu', 'It covers the total, but only 10 percent above it, short of the desk’s 20 percent rule.'],
        ['One labeled 450 W', SMALL, 'The parts can draw 500 watts, which is more than 450 W can give.'],
        ['Any supply with the right plugs', SMALL, 'Plugs that fit do not make the supply big enough. The wattage must cover the parts.']])],
      deciding: ['p1', 'p2', 'p3'],
      reason: 'Add up what the parts can draw at full work: 125 + 300 + 75 = 500 watts. The desk’s rule is a label at least 20 percent above that, so 600 watts or more. One labeled below the total shuts the computer off under load, and one just above it has too little room.' }),
    recall('l10-k-eff', 'power', 'A power supply’s box shows a badge with a metal level, such as Gold. What is the name of the efficiency program behind the badge? It starts with a number.',
      ['80 Plus', '80+', '80plus', '80 Plus certified', '80 Plus rating'],
      'The 80 Plus program rates a supply’s efficiency, the share of wall power that reaches the computer rather than turning into heat. Gold, Platinum and Titanium waste less than Bronze.'),
    item({
      id: 'l10-k-m2', strand: 'board',
      blocks: [
        msg('chat', 'Drew, Technician', 'Note in the ticket', [['a1', 'Fitting a new solid-state drive, a thin stick labeled “M.2”. The board’s manual lists the connectors below.']]),
        table('Connectors in the manual', ['Connector', 'Used for'], [['c1', 'SATA port', 'Drives, with a cable'], ['c2', 'M.2 slot', 'Small sticks plugged straight in'], ['c3', 'PCIe slot', 'Cards'], ['c4', 'Header', 'Front-panel wires, USB, fans']])],
      asks: [ask('What is M.2?', [
        ['A slot shape: the stick plugs straight into the board', true, 'M.2 is the shape of slot a small stick plugs into, with no cable.'],
        ['A cable connection, like SATA', PART, 'SATA is the cable connection to a drive. M.2 is a slot the stick goes into.'],
        ['A row of pins for the tower’s own wires', PART, 'That is a header, for the front panel, USB ports and fans.'],
        ['The slot for a graphics card', PART, 'Graphics cards go in the longest PCIe slot.']])],
      deciding: ['a1', 'c2'],
      reason: 'M.2 is a slot shape where a small stick, such as a solid-state drive or a wireless card, plugs straight on the board. SATA drives use a cable, and headers are pin rows for the tower’s own wires and ports.' }),
    item({
      id: 'l10-k-arm', strand: 'cpu',
      blocks: [msg('chat', 'Elsa, Procurement', 'Chat with the help desk', [['s1', 'We are buying a device that must run all day on a small battery. Which processor design is built for that?']])],
      asks: [ask('Which design?', [
        ['ARM', true, 'ARM processors are built to use little power.'],
        ['x86 (32-bit)', PART, 'x86 is the older design used in PCs. The 32-bit form is the older of its two forms.'],
        ['x64 (64-bit)', PART, 'x64 is the 64-bit form of the PC design. It is common in desktops and laptops, not made for tiny batteries.']])],
      deciding: ['s1'],
      reason: 'ARM is the design built for low power. x86 and x64 are the 32-bit and 64-bit forms of the design used in most PCs.' }),
    item({
      id: 'l10-k-bootpw', strand: 'firmware',
      blocks: [msg('chat', 'Rik, Security', 'Chat with the help desk', [['r1', 'A sales rep travels with a laptop. If it is stolen, the thief must not be able to start it to reach the drive.']])],
      asks: [ask('Which password?', [
        ['A boot password, asked before the system starts', true, 'The laptop will not start the system until the password is typed.'],
        ['A firmware password, asked to open the settings', SETT, 'That guards the settings. A thief could still start the laptop.'],
        ['USB permissions, to block the ports', SETT, 'They control the ports, not whether the laptop starts.']])],
      deciding: ['r1'],
      reason: 'A boot password stops the system starting without it. A firmware password guards only the settings, and USB permissions control the ports.' }),
    item({
      id: 'l10-k-dual', strand: 'memory',
      blocks: [msg('chat', 'Femi, Technician', 'Note in the ticket', [['f1', 'Added a second matching stick, in the slot of the same color as the first. The firmware now reports “dual channel.”']])],
      asks: [ask('What did that change?', [
        ['Memory has two paths to the processor and moves data faster', true, 'Each channel is its own path to the processor. Two paths carry more than one.'],
        ['Memory now finds and fixes errors by itself', PART, 'That is ECC. Channels are about speed.'],
        ['The sticks now keep their contents with the power off', PART, 'Memory loses what it holds when the power goes off, in any channel setup.'],
        ['The sticks are now short enough for a laptop', FIT, 'The size of a stick is its form, DIMM or SODIMM. Channels have nothing to do with it.']])],
      deciding: ['f1'],
      reason: 'Dual channel uses two matched sticks in the paired slots, each on its own path to the processor, so memory is faster. Single, dual, triple and quad are the numbers of paths.' }),
    recall('l10-k-so', 'memory', 'What is the name of the memory stick form used in laptops, as opposed to the DIMM used in desktops?',
      ['SODIMM', 'SO-DIMM', 'Small outline DIMM'],
      'A SODIMM (small outline DIMM) is the half-length module for laptops and small computers. Desktops use the full-length DIMM.'),
    item({
      id: 'l10-k-hot', strand: 'cooling',
      blocks: [
        msg('chat', 'Greta, Technician', 'Note in the ticket', [['t1', 'Fitted a new processor and heat sink this morning, clipped down firmly. The computer shuts off after about thirty seconds.']]),
        table('Read in the firmware', ['Reading', 'Value'], [['r1', 'Processor temperature just before the shutoff', '100 degrees C'], ['r2', 'Fan on the heat sink', 'Running at top speed'], ['r3', 'Heat sink', 'Clipped down, does not wobble'], ['r4', 'Top temperature the maker lists', '105 degrees C'], ['r5', 'Between chip and heat sink', 'Bare metal on bare metal']])],
      asks: [ask('What is the cause?', [
        ['No thermal paste between chip and heat sink', true, 'The fan runs, the heat sink is firm, and the chip is at 100 degrees, close to the 105 the maker lists as the top, so heat is not passing into the sink. The paste fills the gaps that stop it.'],
        ['The fan is failing', 'kept-ruled-out', 'The fan is running at top speed. The reading rules out a stopped fan.'],
        ['Dust is blocking the fan', 'kept-ruled-out', 'The computer was fitted this morning, so there has been no time for dust.'],
        ['The heat sink is loose on the chip', 'kept-ruled-out', 'The table says it is clipped down and does not wobble.']])],
      deciding: ['t1', 'r1', 'r2', 'r3'],
      reason: 'A chip at 100 degrees with the fan running and the heat sink firm is not passing its heat into the sink. Thermal paste fills the gaps between them, and it was left out.' }),

    // ----- held in reserve for the weekly review: three for each topic -----
    item({
      id: 'l10-r-redundant', strand: 'power',
      blocks: [msg('chat', 'Jude, Server Team', 'Chat with the help desk', [['u1', 'The file server must keep running even if one of its power supplies burns out. The server holds two, and either can run it alone.']])],
      asks: [ask('What do you call that kind of power supply setup?', [
        ['Redundant', true, 'A redundant supply has a spare. If one fails, the other carries on and the server stays up.'],
        ['Modular', PART, 'Modular means the cables can be unplugged from the supply, not that there is a spare.'],
        ['Efficient', PART, 'Efficiency is the share of power wasted as heat. It does not give a spare.']])],
      deciding: ['u1'],
      reason: 'A redundant power supply setup has two supplies so one can fail without stopping the server. Modular means detachable cables, and efficiency is how little power is wasted.' }),
    item({
      id: 'l10-r-wattwrong', strand: 'power',
      blocks: [note('A user says: “The new graphics card needs a lot of power, so I will buy a 1000 W supply and it will push more power through the computer.”')],
      asks: [ask('What is wrong with that idea?', [
        ['Wattage is the most it can give; parts take what they need', true, 'A larger supply does not push more power. It only has more in reserve.'],
        ['A larger supply fits fewer boards and towers', FIT, 'Size in watts does not change which boards the supply plugs into.'],
        ['Nothing; more watts always means more power reaches the parts', SMALL, 'The parts draw what they need. The rating is the most the supply can give.']])],
      reason: 'The wattage label is the most the supply can give. The parts take only what they need, so a bigger supply is simply a bigger reserve, and one below the total need shuts the computer off.' }),
    item({
      id: 'l10-r-header', strand: 'board',
      blocks: [note('The front panel of a computer tower has a power button, two lights, a headphone jack and a USB port. Thin wires from each run to the motherboard.')],
      asks: [ask('What are the rows of pins on the board that those wires push onto?', [
        ['Headers', true, 'Headers are rows of pins for the tower’s own buttons, lights, USB ports, audio and fans.'],
        ['PCIe slots', PART, 'PCIe slots take cards, not thin front-panel wires.'],
        ['M.2 slots', PART, 'M.2 slots take small drives and wireless cards.']])],
      reason: 'Headers are the pin rows on the motherboard for the front panel’s button, lights, USB ports and audio, and for fans.' }),
    item({
      id: 'l10-r-pcie1', strand: 'board',
      blocks: [msg('chat', 'Kyra, Front Desk', 'Chat with the help desk', [['n1', 'We are adding a second network card to the desktop and a sound card. Which kind of slot do these small cards go in?']])],
      asks: [ask('Which slot?', [
        ['A short PCIe slot', true, 'Sound cards and network cards take little data and fit the short PCIe slots.'],
        ['A SATA port on the board', PART, 'SATA is the cable connection for drives.'],
        ['The socket for the processor', PART, 'The processor’s socket holds the processor only.']])],
      deciding: ['n1'],
      reason: 'Add-on cards such as sound, network, video and capture cards go in PCIe slots. Small cards use the short slot, and graphics cards use the longest.' }),
    item({
      id: 'l10-r-sata', strand: 'board',
      blocks: [note('A technician connects an older 2.5-inch drive with a thin flat cable. One end plugs into the drive and the other into the motherboard.')],
      asks: [ask('What is that connection called?', [
        ['SATA', true, 'SATA is the cable connection between a drive and the board. eSATA is the version for drives outside the tower.'],
        ['PCIe', PART, 'PCIe is the slot for cards.'],
        ['M.2', PART, 'M.2 drives plug in with no cable.']])],
      reason: 'SATA connects drives to the board with a cable. eSATA is the same connection routed outside the tower. M.2 and PCIe do not use that kind of cable.' }),
    item({
      id: 'l10-r-multi', strand: 'cpu',
      blocks: [msg('chat', 'Vin, Server Team', 'Chat with the help desk', [['v1', 'This server board has two processor sockets. Can it take two processors?']])],
      asks: [ask('What is that kind of board called?', [
        ['Multisocket', true, 'A multisocket board has two or more processor sockets, so a server can have two or more processors.'],
        ['Dual channel', PART, 'Dual channel describes memory, not processors.'],
        ['Redundant', PART, 'Redundant describes power supplies that back each other up.']])],
      deciding: ['v1'],
      reason: 'A board with two or more processor sockets is multisocket. Both processors must be ones that socket takes.' }),
    item({
      id: 'l10-r-x64', strand: 'cpu',
      blocks: [msg('chat', 'Lars, Sales', 'Chat with the help desk', [['p1', 'I bought a program that only comes as a 64-bit program. My computer runs a 32-bit Windows. Will it run?']])],
      asks: [ask('What do you tell them?', [
        ['No; a 32-bit system cannot run it', true, 'A 64-bit system runs 32-bit and 64-bit programs. A 32-bit system runs only 32-bit ones.'],
        ['Yes; 64-bit programs run on any Windows system', PART, 'Only a 64-bit system can run a 64-bit program.'],
        ['Yes, if they add more memory to the computer', PART, 'Memory does not change what kind of programs the system can run.']])],
      deciding: ['p1'],
      reason: 'The 32-bit (x86) system runs only 32-bit programs. A 64-bit (x64) system runs both, so the fix is a 64-bit system, if the processor can run one.' }),
    item({
      id: 'l10-r-eccwhat', strand: 'memory',
      blocks: [note('A workstation order lists “ECC memory.” A user wonders what ECC memory does that ordinary memory does not.')],
      asks: [ask('What do you tell the user?', [
        ['It finds and fixes small errors in memory', true, 'ECC adds extra bits to check data. Servers use it because an undetected error can ruin their work.'],
        ['It makes memory run faster by using two paths at once', PART, 'That is dual channel.'],
        ['It makes the stick short enough to fit a laptop', FIT, 'That is the SODIMM form.']])],
      reason: 'ECC is error correction. It finds and fixes small errors, costs more, and needs a board and processor made to work with it.' }),
    item({
      id: 'l10-r-pads', strand: 'cooling',
      blocks: [note('The memory chips and an M.2 drive on a graphics card and a board run warm. Between each of them and a metal cover sits a soft, thin sheet.')],
      asks: [ask('What is the soft sheet?', [
        ['A thermal pad', true, 'Thermal pads do the paste’s job where there is a larger gap between a chip and its cover.'],
        ['A heat sink with fins', PART, 'A heat sink is the finned metal block. The sheet only carries heat to it or to a cover.'],
        ['An insulator that keeps heat in the chip', PART, 'The sheet carries heat away. It is not there to keep heat in.']])],
      reason: 'Thermal pads are soft sheets that carry heat from a chip into a cover or heat sink where a gap is too big for paste.' }),
    item({
      id: 'l10-r-liquid', strand: 'cooling',
      blocks: [note('A gaming computer’s processor is cooled by a plastic tube loop, a small pump and a radiator with fans mounted on the tower.')],
      asks: [ask('How does this cooling carry the heat away?', [
        ['A pump moves liquid to a radiator, and fans cool it', true, 'Liquid cooling moves heat from a block on the processor to a radiator by liquid, then the fans remove it.'],
        ['Fans blow air across the chip, with no liquid at all', PART, 'That is air cooling with a heat sink. This loop has a pump and a radiator.'],
        ['The chip sits in a bath of liquid that stays still', PART, 'The loop circulates liquid with a pump. It does not sit still.']])],
      reason: 'In liquid cooling a pump moves coolant through a block on the processor to a radiator, and fans cool the radiator.' }),
    item({
      id: 'l10-r-dust', strand: 'cooling',
      blocks: [msg('chat', 'Wynn, Warehouse', 'Chat with the help desk', [['w1', 'The computer got louder and slower over a year. Today it shut off by itself. I looked inside: the grille on the fan is covered in gray fuzz.']])],
      asks: [ask('What do you do first?', [
        ['Clean the dust off the fan and heat sink', true, 'Dust blocks the air, so the chip overheats and the computer protects itself by switching off.'],
        ['Replace the power supply with a bigger one', SMALL, 'The signs are those of heat, not of a supply that is too small.'],
        ['Reset the firmware settings to the defaults', SETT, 'Settings do not clog a fan with dust.']])],
      deciding: ['w1'],
      reason: 'Louder, slower, then switching off by itself are signs of heat, and dust over the fan is the cause. Clean it first, then check the temperature.' }),
    item({
      id: 'l10-r-auto', strand: 'power',
      blocks: [
        msg('chat', 'Mabel, Facilities', 'Chat with the help desk', [['u1', 'Moving a desktop to a branch in Germany. I cannot find a voltage switch on the power supply. What do I set?']]),
        table('Label on the power supply', ['Field', 'Value'], [['l1', 'Input', '100-240 V, 50/60 Hz'], ['l2', 'Switch on the back', 'None']])],
      asks: [ask('What do you tell Mabel?', [
        ['Nothing to change; the label says it adjusts to the outlet itself', true, 'A supply labeled 100-240 V adjusts itself, so it has no switch. It runs on a 115 or a 230 volt outlet.'],
        ['Open the computer and look for a switch inside', VOLT, 'This supply has none. Opening a supply is dangerous, and the label already answers the question.'],
        ['Buy a voltage converter to put between outlet and supply', VOLT, 'The supply already accepts the range up to 240 volts. A converter is not needed.']])],
      deciding: ['l1', 'l2'],
      reason: 'Many newer supplies adjust to the outlet themselves, and their label says 100-240 V. Read the label first: a switch needs setting, and a self-adjusting supply needs nothing.' }),
    item({
      id: 'l10-r-modular', strand: 'power',
      blocks: [note('A small tower has little room. The technician wants a power supply whose cables can be unplugged, so only the cables the parts need are fitted.')],
      asks: [ask('What do you call that kind of supply?', [
        ['Modular', true, 'A modular supply has cables you plug in only as needed, so fewer loose wires fill the tower.'],
        ['Redundant', PART, 'Redundant means two supplies, so one can fail without stopping the server.'],
        ['Efficient', PART, 'Efficiency is how little power is wasted as heat. It says nothing about the cables.']])],
      reason: 'A modular supply has detachable cables. A redundant setup has a second supply as a spare, and efficiency is how little power is wasted.' }),
    item({
      id: 'l10-r-igpu', strand: 'cpu',
      blocks: [msg('chat', 'Colm, Front Desk', 'Chat with the help desk', [['c1', 'The new office computer has no graphics card, but the monitor shows a picture from a port on the board. Is that normal?']])],
      asks: [ask('What do you tell them?', [
        ['Yes; the processor has graphics built in', true, 'Some processors carry integrated graphics, enough to draw a picture with no card.'],
        ['No; a computer cannot show a picture without a graphics card', PART, 'Integrated graphics are built into many processors, so a card is not needed for ordinary work.'],
        ['Yes; the power supply draws the picture', PART, 'The supply only gives power. The picture is drawn by the processor’s graphics or by a card.']])],
      reason: 'Integrated graphics are a small graphics part built into the processor. A graphics card adds more power for games and design work.' }),
    item({
      id: 'l10-r-multicore', strand: 'cpu',
      blocks: [note('A box says “quad-core processor.” The user wonders what the four are.')],
      asks: [ask('What does quad-core mean?', [
        ['Four processing units in one chip, working on separate jobs at once', true, 'Each core can work on its own job, so several jobs run at the same time.'],
        ['Four chips, one in each of four sockets', PART, 'That is a multisocket board. Quad-core is four cores inside one chip.'],
        ['Four memory channels to the processor', PART, 'Channels are the memory paths. Cores are inside the processor.']])],
      reason: 'A core is a processing unit. Dual-core is two in a chip, quad-core is four. Several sockets on a server board is a different thing, called multisocket.' }),
    recall('l10-r-am5', 'cpu', 'A board is labeled LGA 1700. Name the maker whose processors fit it.',
      ['Intel', 'Intel processors', 'An Intel processor'],
      'LGA plus a number is how Intel names its sockets. AMD’s are named AM4, AM5 and so on. A processor fits only the socket it was made for.'),
    item({
      id: 'l10-r-hsm', strand: 'firmware',
      blocks: [note('A company wants the encryption codes for many servers kept in one tamper-resistant device, not on each machine’s chip.')],
      asks: [ask('What is that device?', [
        ['A hardware security module (HSM)', true, 'An HSM is a separate hardware module that holds encryption codes for many systems.'],
        ['A TPM on each board', PART, 'A TPM guards the codes of its own computer only.'],
        ['A firmware password on each', SETT, 'A password guards settings. It does not store encryption codes.']])],
      reason: 'A TPM guards the codes for one machine. An HSM is a separate hardware module that holds codes for many systems, used with servers.' }),
    item({
      id: 'l10-r-usbskip', strand: 'firmware',
      blocks: [msg('chat', 'Nico, Technician', 'Note in the ticket', [['i1', 'A computer says “No bootable device.” There is a blank USB stick in a port, with nothing on it to start. The stick is first in the boot order.']])],
      asks: [ask('What does that stick tell you?', [
        ['Nothing yet; most firmware skips a stick with nothing to start and moves on', true, 'The stick is skipped, so it does not by itself cause the message. The firmware found no drive it could start from.'],
        ['The stick is the cause; it blocks the firmware from finding the drive', PART, 'Most firmware skips a stick with nothing to start and tries the next device.'],
        ['The boot password is blocking the start', SETT, 'A boot password is asked for with a prompt. This message says the firmware found no drive it can start.']])],
      deciding: ['i1'],
      reason: 'A stick with nothing to start is skipped by most firmware. “No bootable device” means the firmware found no drive it can start from, so look at the boot drive and the boot order next.' }),
    item({
      id: 'l10-r-temp', strand: 'firmware',
      blocks: [note('A technician wants to see the processor temperature and fan speeds before opening a computer that runs loud, and to slow a fan that is too noisy.')],
      asks: [ask('Where does the technician look?', [
        ['The firmware’s fan and temperature page', true, 'It shows the temperatures and the fan speeds, and lets you change the fan speed.'],
        ['The firmware’s boot order', SETT, 'The boot order picks the device to start from.'],
        ['The firmware’s Secure Boot page', SETT, 'Secure Boot controls which software may start.']])],
      reason: 'The firmware shows temperatures and fan speeds, and lets you change the fan speed, before you open the computer.' }),
    item({
      id: 'l10-r-ddrnew', strand: 'memory',
      blocks: [msg('chat', 'Opal, Stockroom', 'Chat with the help desk', [['p1', 'The desktop board is labeled DDR5. The stockroom has these sticks. Which one goes in the board?']])],
      asks: [ask('Which stick?', [
        ['A DDR5 DIMM', true, 'The generation must match the board, and a desktop takes the full-length DIMM.'],
        ['A DDR4 DIMM', FIT, 'Same length, but the notch is in a different place, so it will not go in a DDR5 slot.'],
        ['A DDR5 SODIMM', FIT, 'The generation is right, but a SODIMM is the short laptop stick and does not fit a desktop slot.'],
        ['A DDR3 DIMM', FIT, 'DDR3 is an older generation with its notch elsewhere.']])],
      deciding: ['p1'],
      reason: 'The DDR generation must match the board because each has its notch in a different place, and a desktop takes a DIMM, a laptop a SODIMM.' }),
    item({
      id: 'l10-r-dualn', strand: 'memory',
      blocks: [msg('chat', 'Teo, Technician', 'Note in the ticket', [['t1', 'The board has four memory slots, colored black, gray, black, gray in a row. I have two matching sticks and want dual channel.']])],
      asks: [ask('Which two slots?', [
        ['The two black ones', true, 'Slots of the same color form a pair. Two matching sticks in a pair run as dual channel.'],
        ['The first two, side by side', 'wrong-slots', 'Side by side is a black and a gray slot here, not a pair.'],
        ['The gray one and the black one next to it', 'wrong-slots', 'Different colors are not a pair on this board.']])],
      deciding: ['t1'],
      reason: 'Boards pair their memory slots, usually by color. Matching sticks in a pair give dual channel.' })
  ]);
})();
