// IT Help Desk, lesson 10: The parts inside (part parts). Recall plus choosing, taught by what each part does for the whole computer.
// Findings: IT5 (a general strategy plus a functional breakdown of the system doubled the faults solved), IT7 (teach the chain of what each part does),
// IT24 (scenario objectives asked as tickets). A+ Core 1 objectives 3.3 (RAM: SODIMM and DIMM, DDR, ECC, channels), 3.5 (motherboard form factors and
// connectors, CPU sockets and architectures, firmware settings, add-on cards, cooling) and 3.6 (power supply) in docs/research/it-support-aplus.md.
// One worked ticket (Odile's desktop that switches off); four groups (six, eight, seven mixed with the start-up topic, six); a check of eight new questions.
// Review fixes (fixes-l9-13.md, Lesson 10): channels, power connectors, M.2 as a slot, one HSM wording, a number for wattage headroom, symptom table, boot-order wording of the start-up topic.
FC.lesson('it-support', {
  id: 'l10', part: 'parts', title: 'The parts inside', rev: 1, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan: each part taught by its job in the whole computer; power supply, motherboard, processor, firmware settings, memory, cards and cooling asked from memory and as which part for the job.' }],
  why: [
    'Odile’s desktop switches itself off seconds after she starts a game, a week after she put in a new graphics card. Is it the card, the heat, the memory, a setting? Each part has a job in the whole computer, and the job tells you where to look.',
    'Here you learn each part by what it does, plus the facts you will be asked for: power numbers, board sizes, sockets, firmware settings, memory and cooling.'],
  flow: [
    { title: 'A computer is a chain of jobs',
      show: [{ kind: 'prose', text: [
        'Follow the power in. The power supply turns the outlet’s power into the low-voltage power the parts use. The motherboard is the large board every part plugs into. The processor (CPU) calculates, memory (RAM) holds what is open now, storage keeps files for good, cards add abilities, firmware is the small program that starts the computer, and cooling carries away heat.',
        'The symptom shows which job failed.'] },
      { kind: 'document', form: 'table', title: 'What you see when each part fails', head: ['Part', 'What you see when it fails'], rows: [
        { id: 'f1', cells: ['Power supply', 'No lights or fans; or it switches off when the biggest parts work hard'] },
        { id: 'f2', cells: ['Motherboard', 'Nothing starts, or ports and slots stop working'] },
        { id: 'f3', cells: ['Processor', 'Fans spin but nothing appears on the screen'] },
        { id: 'f4', cells: ['Memory', 'Beeps at start-up, crashes, blue screens'] },
        { id: 'f5', cells: ['Storage', '“No bootable device”, or missing files'] },
        { id: 'f6', cells: ['Cards', 'No picture from the card, or no network'] },
        { id: 'f7', cells: ['Firmware', 'Wrong date and time, or it starts from the wrong device'] },
        { id: 'f8', cells: ['Cooling', 'Loud fans, slowing down, then switching off'] }] }] },
    { title: 'The power supply: what goes in, what comes out',
      show: [{ kind: 'prose', text: [
        'The input is wall power: in North America 110 to 120 volts of alternating current (written VAC), in much of Europe and Asia 220 to 240 volts. Many supplies have a back switch to match the outlet; a wrong setting can ruin the supply, so check it first. Newer supplies adjust themselves (label “100-240 V”).',
        'The output is direct current at three voltages. 12 volts does the heavy work: the processor, graphics card, fans and hard drive motors. 5 volts and 3.3 volts run the small circuits: chips, USB ports and drive electronics.',
        'The main connector to the board has 24 pins. Older boards had 20, so a “20+4” connector has four pins that unclip.'] }] },
    { title: 'The power supply: wattage, cables and spares',
      show: [{ kind: 'prose', text: [
        'Add up what the parts draw at full work, then choose a supply labeled well above the total, so the parts never run it flat out; the maker’s or the desk’s rule says how much room. Too small and the computer switches off under hard work, as Odile’s did.',
        'Efficiency is how little wall power turns into heat. The 80 Plus program rates it: Bronze, Silver, Gold, Platinum, Titanium. Bronze wastes the most, Titanium the least.',
        'The supply’s cables end in different plugs. The 24-pin plug feeds the board. A 4-pin or 8-pin plug (sometimes 4+4) feeds the processor. A graphics card with its own power socket takes a PCIe plug of 6 or 8 pins (often 6+2, with two pins that clip on). SATA power plugs feed drives; older four-pin Molex plugs feed old drives and some fans. The CPU and PCIe plugs look alike but are wired differently.',
        'A modular supply has cables you plug in only as needed, leaving fewer loose wires. A redundant setup has two supplies in one server; if one fails, the other keeps it running.'] },
      { kind: 'prose', tone: 'wrong', text: [
        '“A 1000 watt supply pushes 1000 watts into the computer, so it gives more to the card.”',
        'The wattage label is only the most the supply can give. The parts take what they need; a bigger supply just has more in reserve.'] }] },
    { title: 'The motherboard: sizes and connectors',
      show: [{ kind: 'prose', text: [
        'Boards come in sizes, called form factors: ATX is full-size, microATX is smaller with fewer slots, and Mini-ITX is the smallest. A smaller board fits a larger tower, never the reverse.',
        'Connectors are how parts reach the board. PCIe slots take cards: the longest takes a graphics card, the short ones small cards. PCI is the older slot. M.2 is a slot shape: a small stick, such as a solid-state drive (a drive with no moving parts) or a wireless card, plugs in with no cable (what the drive carries is covered with storage). SATA ports take a cable to a drive; eSATA is the same connection outside the tower. Headers are rows of pins for the tower’s own wires: power button, lights, front USB ports, audio and fans.'] }] },
    { title: 'The processor: sockets and kinds',
      show: [{ kind: 'prose', text: [
        'A processor fits only the socket it was made for. AMD’s sockets have names like AM4 and AM5; Intel’s are named LGA and a number. One maker’s processor never fits the other’s socket, so match it to the board. A server board with two or more sockets is multisocket.',
        'The design inside matters too. The exam calls the 32-bit PC design x86 and its 64-bit form x64. A 64-bit system runs 32-bit and 64-bit programs and uses far more memory; a 32-bit system uses only about 4 GB and runs only 32-bit programs. ARM is a low-power design found in phones, tablets and some laptops.',
        'Most processors are multicore: several processing units (cores) in one chip, working on separate jobs at once, such as dual-core (two) or quad-core (four). Some carry integrated graphics, a built-in graphics part that shows a picture with no graphics card. Some features need turning on in the firmware, such as virtualization (VT-x on Intel, AMD-V on AMD), which lets the computer run virtual machines.'] }] },
    { title: 'Firmware settings',
      show: [
        { kind: 'prose', text: [
          'The firmware (BIOS or UEFI) starts the computer and holds settings that configure the hardware. The table lists the ones the exam names.'] },
        { kind: 'document', form: 'table', title: 'Firmware settings and what each one does', head: ['Setting', 'What it does'], rows: [
          { id: 'b1', cells: ['Boot options', 'The boot order: the devices the firmware tries, in turn, for something to start from. Move a USB stick to the top to install from it. A stick with nothing to start is skipped, so it does not by itself cause “no bootable device”'] },
          { id: 'b2', cells: ['USB permissions', 'Turn USB ports on or off'] },
          { id: 'b3', cells: ['TPM', 'A chip on the board (some processors do it in firmware) that stores this computer’s encryption codes; Windows 11 needs it'] },
          { id: 'b4', cells: ['HSM', 'A separate module that holds encryption codes for many systems, used with servers'] },
          { id: 'b5', cells: ['Secure Boot', 'Lets only trusted, signed software start, keeping malware out of start-up'] },
          { id: 'b6', cells: ['Boot password', 'Asked for before the system starts, so a stolen laptop cannot start'] },
          { id: 'b7', cells: ['BIOS or UEFI password', 'Asked for only when someone opens the settings; the computer still starts for anyone'] },
          { id: 'b8', cells: ['Virtualization', 'Lets the processor run virtual machines'] },
          { id: 'b9', cells: ['Fan and temperature', 'Shows temperatures and fan speeds, and lets you change fan speed'] }] }] },
    { title: 'Memory',
      show: [{ kind: 'prose', text: [
        'Memory (RAM) holds what is open right now and loses it when the power goes off. A DIMM is the full-length stick for desktops and servers; a SODIMM is the short stick, about half the length, for laptops and small computers.',
        'DDR is the generation: DDR4 and DDR5 are in new computers, each faster than the one before (DDR3 is older). The notch sits in a different place in each, so the wrong generation does not fit the slot. ECC memory carries extra bits that find and fix small errors, so servers use it; it costs more and needs a board made for it. Ordinary non-ECC memory costs less and is what most home computers use.',
        'Channels are the paths from memory to processor. One stick, or sticks that do not pair, give single channel. Two matching sticks in the slots the board pairs (usually the same color) give dual channel, which moves data faster. Some boards take three (triple) or four (quad) matching sticks.'] }] },
    { title: 'Cards and cooling',
      show: [{ kind: 'prose', text: [
        'Add-on cards go in PCIe slots: a sound card handles audio, a video (graphics) card draws the picture, a capture card records video from a camera or console, and a network card (NIC) connects to a network.',
        'Cooling keeps heat away from the chips. A fan moves air. Each processor has a top safe temperature its maker publishes, and the firmware’s temperature screen shows the reading: near the top is too hot, far below is fine. A heat sink is a finned metal block on a chip that draws heat out. Thermal paste is a thin layer between chip and heat sink that fills tiny gaps so heat passes; thermal pads do the same for wider gaps. Liquid cooling pumps liquid from a block on the chip to a fan-cooled radiator.'] }] },
    { worked: 'l10-w-shutoff' },
    { set: { items: ['l10-p-volt', 'l10-b-fit', 'l10-c-socket', 'l10-f-boot', 'l10-m-sodimm', 'l10-k-paste'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l10-p-rail', 'l10-b-slot', 'l10-c-arch', 'l10-f-secure', 'l10-m-ecc', 'l10-k-fans', 'l10-p-conn', 'l10-f-usb'], order: 'shuffle' } },
    { set: { items: ['l10-p-pin', 'l10-c-virt', 'l10-f-tpm', 'l10-m-ddr', 'l10-k-sink', 'l10-p-eighty', 'l10-f-fwpw'], order: 'shuffle', mix: { from: ['l9'], share: 0.3 } } },
    { set: { items: ['l10-b-con', 'l10-b-m2', 'l10-m-chan', 'l10-c-lowpower', 'l10-b-pci', 'l10-b-card'], order: 'shuffle' } }
  ],
  check: {
    items: ['l10-k-watt', 'l10-k-eff', 'l10-k-m2', 'l10-k-arm', 'l10-k-bootpw', 'l10-k-dual', 'l10-k-so', 'l10-k-hot'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
