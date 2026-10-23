// IT Help Desk, lesson 11 "Storage and RAID" (part storage): the worked ticket and the three groups of questions. The check and the reserve are in items-l11-check.js.
// Sources: A+ Core 1 objective 3.4 (HDD spindle speeds and the 2.5-inch and 3.5-inch sizes; SSD interfaces NVMe, SATA, PCIe, SAS and the M.2 and mSATA shapes;
// RAID 0, 1, 5, 6, 10; flash drives, memory cards, optical drives) and 5.2 (LED status, grinding, clicking, bootable device not found, data loss or
// corruption, RAID failure, S.M.A.R.T. failure, extended read and write times, low IOPS, missing drives in the OS, array missing, audible alarms); IT2
// and IT17 (back up before touching anything); IT5 (each symptom on the link of the chain it belongs to). All people and tickets are invented.
(() => {
  const D = "drives", R = "raid", F = "drive-fix";
  const S = (id, text, extra) => ({ id, text, ...extra });
  const mail = (from, detail, subject, lines) => ({ kind: "message", form: "email", from, detail, subject, lines });
  const note = (from, detail, lines, id) => ({ kind: "message", form: "note", from, detail, lines, ...(id ? { id } : {}) });
  const prose = text => ({ kind: "prose", text });
  const table = (title, head, rows) => ({ kind: "document", form: "table", title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const ok = (id, text, then) => ({ id, text, ok: true, ...(then ? { then } : {}) });
  const no = (id, text, slip, then) => ({ id, text, ...(slip ? { slip } : {}), then });
  const pick = ({ strand, id, blocks, prompt, opts, reason, deciding }) => ({ id, strand, facets: {}, blocks,
    asks: [{ id: "pick", kind: "choose", prompt, shuffle: true, options: opts }], deciding: deciding || [], reason });
  // an answer from memory: the question is read, the answer typed
  const recall = ({ id, strand, words, prompt, accept, reason }) => ({ id, strand, facets: {}, blocks: [{ kind: "spoken", text: words, show: true }],
    asks: [{ id: "say", kind: "text", prompt: prompt || "Type your answer.", accept }], deciding: [], reason });

  // Boris’s clicking computer, the worked ticket
  const worked = {
    id: "l11-w-click", strand: F, facets: {},
    blocks: [mail("Boris Lund, Operations", "Email · 9:10 AM", "Computer slow and clicking", [
      S("a1", "My computer has made a clicking noise since Monday and opening a file takes minutes."),
      S("a2", "Every customer file and all my photos are in My Documents. The last copy I made was last year."),
      S("a3", "I think it just needs a cleanup."),
      S("a4", "It clicks even when I have nothing open.")])],
    steps: [
      { id: "sort", does: "Sort it: something is broken now, and his files are at risk.", working: "It is an incident, and the files may be worth more than the computer. That decides what comes first." },
      { id: "guess", does: "Write down the favorite cause, then find the test that can rule it out.", working: "Boris thinks it needs a cleanup. A full drive or too many programs makes a computer slow, but neither makes a click. His own line, that it clicks with nothing open, rules the cleanup out: a click with no program running is a part moving.", ask: "reply" },
      { id: "copy", does: "Copy his files to another drive before anything else.", working: "A clicking hard drive has moving parts that are failing, and every hour it runs may be the last. Copy first. A cleanup, a repair tool or a reinstall all work the drive hard, and a reinstall wipes the files." },
      { id: "fix", does: "Check the drive’s own report, replace it, restore the copy, and have Boris confirm.", working: "The drive’s S.M.A.R.T. report, its built-in self-check, says failing. You replace the drive, put his files back from the copy, and close the ticket only after he opens a customer file himself." }],
    asks: [{ id: "reply", kind: "choose", prompt: "What do you do first?", shuffle: true, options: [
      ok("o1", "Copy his files to an external drive, then read the drive’s own report", "The copy runs slowly, but it finishes. The report says the drive is failing, and the files are safe."),
      no("o2", "Run a disk cleanup first, as he suggests, then watch it", "software-first", "A cleanup frees space, but nothing about space makes a drive click. The drive keeps running, and may stop for good."),
      no("o3", "Reinstall Windows to start fresh, then restore later", "no-backup", "A reinstall wipes the drive, files included, and the drive is the thing that is failing.")] }],
    deciding: ["a2", "a4"],
    reason: "He clicks even when nothing is open, so the cause is a part that moves, not a program. His customer files have no copy. The failing hard drive is the thing to protect before it is the thing to fix." };

  // ----- the first group: help shown -----
  const group1 = [
    { id: "l11-p-speed", strand: D, facets: {},
      blocks: [prose("The platters of a hard drive spin at a steady speed, counted in revolutions per minute (RPM). Faster spinning reads and writes sooner, but runs hotter and louder. These four speeds are the ones to know.")],
      asks: [{ id: "order", kind: "order", prompt: "Tap the speeds from slowest to fastest.", steps: [
        { id: "s15", text: "15,000 RPM" }, { id: "s54", text: "5,400 RPM" }, { id: "s10", text: "10,000 RPM" }, { id: "s72", text: "7,200 RPM" }],
        right: ["s54", "s72", "s10", "s15"], then: "The common speeds are 5,400, 7,200, 10,000 and 15,000 RPM. The first two are in laptops and desktops, the last two in servers." }],
      deciding: [], reason: "Slowest to fastest: 5,400, 7,200, 10,000, 15,000 RPM. Laptops and cheap desktops use the first two; servers use the last two." },
    pick({ strand: D, id: "l11-p-nvme", blocks: [prose("Joaquin is building a desktop to edit video. The motherboard has an M.2 slot that takes NVMe drives, and Joaquin wants the fastest storage it can have. A solid-state drive (SSD) stores files in memory chips and has no moving parts.")],
      prompt: "Which drive should Joaquin buy?", deciding: [],
      opts: [ok("o1", "An NVMe SSD in the board’s M.2 slot", "The slot is built for NVMe, which talks over the fast PCIe lanes that graphics cards use. That is several times the speed of a SATA drive."),
        no("o2", "A 2.5-inch SATA SSD on a cable", "slower-pick", "SATA is the old connection that hard drives used. It tops out far below what the M.2 slot can do."),
        no("o3", "A 15,000 RPM hard drive, the fastest kind", "slower-pick", "A spinning drive is slower than any SSD, however fast it spins.")],
      reason: "NVMe is a way of talking to a drive over PCIe lanes, which is the fastest connection a desktop drive has. SATA and spinning drives are both slower." }),
    pick({ strand: R, id: "l11-p-raid1", blocks: [prose("RAID uses several drives together so that they look like one. A small office has two drives in its file server. If one dies, the office must keep working with nothing lost, and the owner does not care about the speed.")],
      prompt: "Which RAID level fits?", deciding: [],
      opts: [ok("o1", "RAID 1, which mirrors the data onto each drive", "If one drive dies, the other has every file. The office keeps working, and the dead drive is swapped later."),
        no("o2", "RAID 0, which stripes the data across both drives", "level-slip", "RAID 0 is fast but has no copy. If either drive dies, the data on both is gone."),
        no("o3", "No RAID: one drive, copied once every month", "level-slip", "That loses up to a month of work, and the office stops until the drive is replaced.")],
      reason: "Two drives that must survive one failing is RAID 1, a mirror: each drive holds the same data. RAID 0 spreads the data and loses all of it when one drive fails." }),
    pick({ strand: F, id: "l11-p-click", blocks: [note("Message from Kasia", "Chat · 11:20 AM", [S("c1", "My laptop’s hard drive started to grind and click this morning. I have the whole budget file on it, and no copy.")])],
      prompt: "What is your first move?", deciding: ["c1"],
      opts: [ok("o1", "Have her stop using it and copy the budget file to an external drive, or to the company share if she has access to one", "The file is safe before the drive gets any worse."),
        no("o2", "Run the disk repair tool on it overnight", "no-backup", "A repair tool works the drive hard and may change files. A drive that grinds may not finish the job."),
        no("o3", "Defragment it (rearrange its files to sit together)", "software-first", "Defragmenting moves every file around on a drive that is already failing. It cannot fix a part that grinds.")],
      reason: "Grinding or clicking from a hard drive is the platters or the head failing. Copy the files off first, with as little use of the drive as you can, then deal with the drive." })
  ];

  // ----- the second group: no help -----
  const group2 = [
    pick({ strand: D, id: "l11-q-m2", blocks: [table("Laptop spec sheet", ["Part", "Detail"], [["r1", "Storage slot", "One M.2 slot, PCIe NVMe drives only"]]),
      prose("A shop sells two M.2 drives for this laptop: one is labeled SATA, one NVMe. Both are the same size.")],
      prompt: "Which one does the laptop take?", deciding: ["r1"],
      opts: [ok("o1", "The one labeled NVMe", "The sheet lists NVMe drives only, so the NVMe drive works there."),
        no("o2", "Either, because both are M.2 sticks", "shape-speed", "M.2 is only the shape and size of the drive. The same shape can carry a SATA drive or an NVMe drive, and a slot may take just one."),
        no("o3", "The one labeled SATA, because SATA is common", "shape-speed", "The sheet lists NVMe only. A SATA drive in that slot is not read.")],
      reason: "M.2 says how big the drive is and where it fits, not how it connects. The sheet says this slot takes NVMe, so check the connection every time as well as the shape." }),
    { id: "l11-q-cap", strand: R, facets: {},
      blocks: [prose("A file server has four 2 TB drives. The owner wants RAID 5: it stripes the data across the drives and adds parity, extra information that can rebuild one lost drive. The space of one drive goes to parity.")],
      asks: [{ id: "cap", kind: "number", prompt: "How much space can the owner use?", frame: "__ TB", answer: 6, tol: { abs: 0.01 }, traps: [
        { slip: "capacity-slip", value: 8, then: "8 TB is all four drives, which is RAID 0. RAID 5 gives up one drive’s worth of space for parity." },
        { slip: "capacity-slip", value: 4, then: "4 TB is what RAID 6 gives with four drives, and what RAID 10 gives, which is half the space. RAID 5 gives up only one drive’s worth." }] }],
      deciding: [], reason: "RAID 5 uses the space of all drives but one: three drives of 2 TB is 6 TB, and the fourth drive’s worth holds the parity." },
    pick({ strand: R, id: "l11-q-six", blocks: [prose("Esme is building storage for her firm’s accounts. She has six drives. Losing the data would be a disaster, and when one drive fails she cannot always replace it the same day, so a second one might fail while she waits. Speed does not matter.")],
      prompt: "Which RAID level fits?", deciding: [],
      opts: [ok("o1", "RAID 6, which keeps two parity blocks", "Its two parity blocks let the array run, and rebuild, with two drives gone."),
        no("o2", "RAID 5, which survives one drive failing", "level-slip", "A second failure during the wait loses everything. RAID 5 holds only one."),
        no("o3", "RAID 0, because it keeps all the space", "level-slip", "RAID 0 survives nothing: one failure loses all the data.")],
      reason: "She needs to survive two failures at the same time, and only RAID 6 of these does. It needs at least four drives, and she has six." }),
    pick({ strand: F, id: "l11-q-notfound", blocks: [table("Screen at start-up", ["Message"], [["r1", "No bootable device found. Press any key to restart."]]),
      prose("A desktop shows this when it starts. It worked yesterday, and no one has changed anything that they know of. The firmware is the built-in program that runs before Windows, and its setup screen shows which drives the computer can see.")],
      prompt: "What is your cheapest first test?", deciding: ["r1"],
      opts: [ok("o1", "Look in the firmware screen for the drive", "If the drive is not listed, the fault is the cable, the power or the drive itself. If it is listed, the fault is the boot order or Windows loading."),
        no("o2", "Reinstall Windows from a USB stick today", "no-backup", "If the computer cannot see the drive, a reinstall has nowhere to go. If it can, the files on it could be wiped."),
        no("o3", "Buy a new drive and swap it in", "part-first", "You do not yet know the drive is the fault. A cable or the boot order gives the same message."),
        no("o4", "Start from a repair stick and run a full drive check", "no-split", "A check can only read a drive the computer sees, and it works the drive hard. It does not tell a hardware fault from a boot order fault. The firmware screen does, in seconds.")],
      reason: "The message means the firmware found no drive it can start Windows from. The firmware screen splits it: a drive that is not listed is a hardware problem, and a drive that is listed is a boot order or Windows loading problem." }),
    recall({ id: "l11-q-parity", strand: R, words: "RAID 5 and RAID 6 store extra information across the drives that can rebuild what a lost drive held. What is that extra information called? One word.",
      prompt: "Type the word.", accept: ["parity"],
      reason: "Parity is the extra information that lets the array rebuild a lost drive. RAID 5 keeps one drive’s worth of it and RAID 6 keeps two." })
  ];

  // ----- the third group: no help -----
  const group3 = [
    pick({ strand: F, id: "l11-r-array", blocks: [prose("A NAS is a storage box on the office network that holds several drives. The controller is the part that joins them into an array."), prose("This desk’s rule: hand on any array fault that is still open after 20 minutes."), note("Ticket", "Office NAS", [S("n1", "After a power cut, the file server shows no storage. The array is missing. All four drives show in the controller.")])],
      prompt: "What do you do first?", deciding: ["n1"],
      opts: [ok("o1", "Change nothing on the drives; check cables, power and the controller screen, and hand on only if the desk’s rule below says so", "All four drives are listed, so the data may be intact. You change nothing that would write to them."),
        no("o2", "Create a new array from the same four drives", "rebuilt-array", "Creating the array again can wipe the data that is still on the drives."),
        no("o3", "Format all four drives and start over fresh", "no-backup", "Formatting erases the data that the array was holding.")],
      reason: "A missing array with all drives still listed can mean the controller lost its settings, not the data. Anything that writes to the drives risks the data, so look and do not change." }),
    pick({ strand: R, id: "l11-r-zero", blocks: [note("Ticket", "Fritz’s workstation", [S("z1", "Two drives in RAID 0 for fast video work. One drive reports a S.M.A.R.T. warning. The array still works.")])],
      prompt: "What do you tell Fritz to do?", deciding: ["z1"],
      opts: [ok("o1", "Copy the work off now, replace the drive, make a new array and copy the work back", "The data lives in pieces on both drives. When the warned drive stops, the pieces on the other are no use alone, so the copy is the only way back."),
        no("o2", "Wait until it fails; RAID will rebuild the data", "raid-backup", "RAID 0 has no copy to rebuild from. When one drive fails, the data on both is gone."),
        no("o3", "Swap the warned drive now and let RAID rebuild", "raid-backup", "RAID 0 cannot rebuild a drive, so the swap loses everything."),
        no("o4", "Check the warning again after a week, then decide", "no-backup", "Waiting leaves the only copy on a drive that has warned. The work is copied off first, whatever the check says later.")],
      reason: "RAID 0 only splits the data. It keeps no copy and no parity, so a warning on either drive means copy first. After a failure it is a new array and a restore. The levels that rebuild are 1, 5, 6 and 10." }),
    { id: "l11-r-order", strand: F, facets: {},
      blocks: [prose("A user’s hard drive, the one Windows starts from, has a S.M.A.R.T. warning. It still works, but slowly, and the only copy of her files is on it. Put the work in order.")],
      asks: [{ id: "order", kind: "order", prompt: "Tap the steps in the order you do them.", steps: [
        { id: "replace", text: "Replace the drive" }, { id: "copy", text: "Copy the files to another drive" },
        { id: "confirm", text: "The user opens a file and says it works" }, { id: "windows", text: "Put Windows on the new drive" }, { id: "restore", text: "Put the files back on the new drive" },
        { id: "stop", text: "Tell the user to stop saving work to the drive" }, { id: "listed", text: "Check that the firmware screen lists the new drive" }],
        right: ["stop", "copy", "replace", "listed", "windows", "restore", "confirm"], then: "Stop the drive being used, copy before you touch it, replace it, make sure the computer sees the new one, put Windows on it (a new drive is blank), restore the files, and close only when the user confirms." }],
      deciding: [], reason: "The copy comes right after the user stops using the drive, because the drive is the failing part. The new drive must be seen and have Windows on it before files go back, and the user’s yes comes last, so the ticket is not closed on your test alone." },
    recall({ id: "l11-r-nvme", strand: D, words: "An SSD can talk to the computer through a protocol (a set of rules for how two parts talk) designed for flash memory that runs over PCIe lanes. Name it.",
      prompt: "Type the name.", accept: ["NVMe", "NVM Express", "NVMe SSD", "NVMe drive", "PCIe NVMe", "NVM Express SSD"],
      reason: "NVMe runs over PCIe lanes, which makes it much faster than SATA. It usually comes on an M.2 stick." })
  ];

  FC.items("it-support", [worked, ...group1, ...group2, ...group3]);
})();
