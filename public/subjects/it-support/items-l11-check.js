// IT Help Desk, lesson 11 "Storage and RAID" (part storage): the eight questions of the check and the nine held in reserve (three for each topic).
// Sources: A+ Core 1 objectives 3.4 and 5.2; IT2 and IT17 (back up before touching anything). All people and tickets are invented.
(() => {
  const D = "drives", R = "raid", F = "drive-fix";
  const S = (id, text, extra) => ({ id, text, ...extra });
  const note = (from, detail, lines, id) => ({ kind: "message", form: "note", from, detail, lines, ...(id ? { id } : {}) });
  const prose = text => ({ kind: "prose", text });
  const table = (title, head, rows) => ({ kind: "document", form: "table", title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const ok = (id, text, then) => ({ id, text, ok: true, ...(then ? { then } : {}) });
  const no = (id, text, slip, then) => ({ id, text, ...(slip ? { slip } : {}), then });
  const pick = ({ strand, id, blocks, prompt, opts, reason, deciding }) => ({ id, strand, facets: {}, blocks,
    asks: [{ id: "pick", kind: "choose", prompt, shuffle: true, options: opts }], deciding: deciding || [], reason });
  const recall = ({ id, strand, words, prompt, accept, reason }) => ({ id, strand, facets: {}, blocks: [{ kind: "spoken", text: words, show: true }],
    asks: [{ id: "say", kind: "text", prompt: prompt || "Type your answer.", accept }], deciding: [], reason });
  const count = ({ id, strand, blocks, prompt, frame, answer, traps, reason }) => ({ id, strand, facets: {}, blocks,
    asks: [{ id: "cap", kind: "number", prompt, frame, answer, tol: { abs: 0.01 }, traps }], deciding: [], reason });

  // ----- the check: eight new questions, no help -----
  const check = [
    pick({ strand: D, id: "l11-k-msata", blocks: [prose("An older ultrabook has a small card slot, labeled mSATA, for its drive. The drive has died. The shop has an M.2 NVMe stick, an mSATA card and a 2.5-inch SATA drive.")],
      prompt: "Which one fits that slot?", deciding: [],
      opts: [ok("o1", "The mSATA card", "mSATA is its own slot and shape, SATA only. The card goes in and works."),
        no("o2", "The M.2 NVMe stick, because it is newer", "wrong-shape", "M.2 and mSATA are different shapes and slots. They are not interchangeable, and NVMe needs a slot that runs it."),
        no("o3", "The 2.5-inch SATA drive, on a cable", "wrong-shape", "It connects by SATA but is the wrong size for a card slot. It needs a drive bay and a cable.")],
      reason: "The slot is named for the card it takes: mSATA. M.2 is a different shape that does not fit it, so read the label on the slot." }),
    pick({ strand: D, id: "l11-k-disc", blocks: [prose("A designer has to hand a client a folder of 20 GB of photos on a disc. The client has a Blu-ray drive. A CD holds about 700 MB, a single-layer DVD 4.7 GB, and a single-layer Blu-ray disc 25 GB.")],
      prompt: "Which single disc holds it?", deciding: [],
      opts: [ok("o1", "A single-layer Blu-ray disc", "At 25 GB it holds the 20 GB folder on one disc."),
        no("o2", "A single-layer DVD, at 4.7 GB", "too-small", "4.7 GB holds about a quarter of it. It would take five discs."),
        no("o3", "A CD, at about 700 MB", "too-small", "At about 700 MB it holds a few percent of the folder.")],
      reason: "Only Blu-ray, at 25 GB a layer, holds 20 GB on a disc. A DVD holds 4.7 GB and a CD about 700 MB." }),
    recall({ id: "l11-k-min5", strand: R, words: "What is the smallest number of drives that RAID 5 needs? Type the number.",
      prompt: "Type the number.", accept: ["3", "three drives"],
      reason: "RAID 5 needs at least three drives: the data is striped across them, with the parity of one drive’s worth spread through. RAID 1 needs two, and RAID 6 and RAID 10 need four." }),
    pick({ strand: R, id: "l11-k-ten", blocks: [table("A RAID 10 array of four drives", ["Mirrored pair", "Drives"], [["r1", "Pair A", "Drive 1, Drive 2"], ["r2", "Pair B", "Drive 3, Drive 4"]])],
      prompt: "Which two drives failing at once loses the data?", deciding: ["r1", "r2"],
      opts: [ok("o1", "Drive 1 and Drive 2, both in Pair A", "Pair A held the only two copies of its half of the data. With both gone, that half is lost."),
        no("o2", "Drive 1 and Drive 3, from different pairs", "level-slip", "Each pair still has a drive with a full copy, so the array runs and can rebuild."),
        no("o3", "Drive 2 and Drive 4, from different pairs", "level-slip", "Each pair still has one drive with its half, so no data is lost.")],
      reason: "RAID 10 mirrors pairs and stripes across the pairs. It survives one drive from each pair, but not both drives of a pair." }),
    count({ id: "l11-k-six", strand: R, blocks: [prose("A backup server has five 4 TB drives in RAID 6. It stripes the data and keeps two drives’ worth of parity, so it survives two drives failing.")],
      prompt: "How much space can be used?", frame: "__ TB", answer: 12, traps: [
        { slip: "capacity-slip", value: 16, then: "16 TB is what RAID 5 gives from five drives, losing only one drive’s worth to parity. RAID 6 loses two." },
        { slip: "capacity-slip", value: 20, then: "20 TB is all five drives, which is RAID 0. RAID 6 gives up two drives’ worth of space." }],
      reason: "RAID 6 gives up two drives’ worth of space to parity: three drives of 4 TB left is 12 TB." }),
    pick({ strand: F, id: "l11-k-smart", blocks: [note("Ticket", "Laptop, 95% full", [S("s1", "Computer very slow for a month. The drive’s S.M.A.R.T. report (its built-in self-check) says: failing."), S("s2", "The user has the only copy of a thesis on it.")])],
      prompt: "What do you do first?", deciding: ["s1", "s2"],
      opts: [ok("o1", "Copy the thesis to another drive, then replace it", "The thesis is safe. Then the replacement does not risk it."),
        no("o2", "Delete old files to free space, as it is 95% full", "software-first", "Space is not what a failing report is about. Working the drive harder to make space puts the thesis at risk."),
        no("o3", "Run a full disk check to confirm the report", "no-backup", "A check reads every part of a drive that is failing. Copy first, and test later.")],
      reason: "The S.M.A.R.T. report is the drive saying it is failing, and the thesis has no other copy. A full disk is a plain fix for a slow computer but not when the drive itself says it is failing." }),
    pick({ strand: F, id: "l11-k-alarm", blocks: [note("Ticket", "Small office server, RAID 1", [S("a1", "The server beeps every minute. A red light shows on drive bay 2 (the slot that drive slides into). Everything still works, so the owner wants to ignore it until Monday."), S("a2", "The last backup ran three weeks ago.")])],
      prompt: "What do you tell the owner?", deciding: ["a1", "a2"],
      opts: [ok("o1", "Copy the work to an external drive today, then put a same-size drive in bay 2 and let the mirror rebuild", "The beep and red light mean a drive failed, so the other drive holds the only copy. If that drive fails during the rebuild, the work is lost, so it is copied off first."),
        no("o2", "Nothing is wrong yet: RAID 1 protects it, so Monday is fine", "ignored-alarm", "The array survives one failure. It does not survive a second, and until the drive is replaced the other drive is the only copy."),
        no("o3", "Recreate the array to clear the alarm and the light", "rebuilt-array", "Creating the array again can wipe the surviving drive. Replace the failed drive and let it rebuild."),
        no("o4", "Put a new drive in bay 2 right now and let the rebuild run", "no-backup", "The rebuild reads every file from the one drive still working. If it fails under that load, the only copy goes with it, and the backup is three weeks old.")],
      reason: "An audible alarm and a red light on a bay mean one drive in the array has failed. RAID 1 keeps the data going, but the backup is old and the surviving drive is the only copy if it fails during the rebuild, so copy the work off first, then replace the failed drive." }),
    pick({ strand: F, id: "l11-k-usb", blocks: [table("Firmware setup screen", ["Device", "Listed?"], [["r1", "Internal SSD", "Not listed"], ["r2", "USB flash drive (holds only photos)", "Listed"]]),
      note("Ticket", "Desktop, no bootable device found", [S("u1", "The firmware does not list the internal SSD."), S("u2", "The SSD’s data cable and power connector were reseated, and then a cable known to work was tried. The SSD is still not listed."), S("u3", "The user’s files are backed up every night, and last night’s backup finished.")])],
      prompt: "What do you do next?", deciding: ["r1", "u2", "u3"],
      opts: [ok("o1", "Replace the SSD, put Windows on the new one and restore the files from the backup", "The cable and the power are ruled out and the drive is still not seen, so it has to be replaced. The backup is current, so replacing it loses nothing."),
        no("o2", "Take the flash drive out and restart the computer", "no-split", "The firmware skips a stick with nothing to start from, so it is not the cause. The SSD is missing from the list either way."),
        no("o3", "Move the SSD to the top of the boot order", "wrong-setting", "The boot order only sorts drives the firmware can see. This one is not listed, so there is nothing to move."),
        no("o4", "Reset the firmware to its default settings and restart", "wrong-setting", "Defaults change many settings at once, and a drive that the firmware cannot see stays unseen.")],
      reason: "The SSD is missing from the firmware list after the cable and the power were checked, so the drive has to be replaced, and the nightly backup means nothing is lost by replacing it. A USB stick with nothing to start on it is skipped, so it does not cause this message." })
  ];

  // ----- reserve: kept for the review, three for each topic -----
  const reserve = [
    pick({ strand: D, id: "l11-s-laptop", blocks: [prose("Two drives are on a desk: a 3.5-inch hard drive and a 2.5-inch hard drive. A customer’s laptop needs a bigger hard drive.")],
      prompt: "Which size does the laptop take?", deciding: [],
      opts: [ok("o1", "The 2.5-inch drive, for a laptop bay", "Laptops use 2.5-inch drives. Desktops and servers use the 3.5-inch size."),
        no("o2", "The 3.5-inch drive, because it holds more", "wrong-shape", "Size in inches is the shape of the drive, and a laptop bay is built for 2.5."),
        no("o3", "Either; the size is only a label", "wrong-shape", "The two sizes do not fit each other’s bays.")],
      reason: "A 2.5-inch drive fits a laptop, and the 3.5-inch size goes into desktops and servers. 2.5-inch SSDs use the same bay as 2.5-inch hard drives." }),
    pick({ strand: D, id: "l11-s-server", blocks: [prose("A company’s rack server has hot-swap drive bays, which let you pull and replace a drive while the server runs. The vendor’s quote lists drives that connect by SAS. A new technician wonders why not plain SATA.")],
      prompt: "What is SAS?", deciding: [],
      opts: [ok("o1", "A sturdy server connection that also runs SATA drives", "That is why servers use it: it is built for heavy use and many drives."),
        no("o2", "A small card shape used by laptop SSDs", "mixed-look-alike", "That describes M.2 or mSATA. SAS is a connection for servers."),
        no("o3", "The memory chips used inside an SSD", "mixed-look-alike", "SAS is a way to connect, not what the drive is made of.")],
      reason: "SAS, Serial Attached SCSI, is the server connection. It is built for heavy use and many drives at once. SATA drives work on a SAS controller, but not the other way around." }),
    pick({ strand: D, id: "l11-s-card", blocks: [prose("A photographer’s camera takes a small memory card, and the photographer’s laptop has no card slot. The photographer wants to move the pictures today.")],
      prompt: "What do you suggest?", deciding: [],
      opts: [ok("o1", "A USB card reader that plugs into the laptop", "A reader turns the card into a drive the laptop can open."),
        no("o2", "A Blu-ray burner that copies to discs", "wrong-part", "The pictures are already on a card, and a burner would need a disc and many discs’ worth of time."),
        no("o3", "A RAID array of two new hard drives", "wrong-part", "RAID joins hard drives and does not read a camera card.")],
      reason: "Flash drives and memory cards are removable flash storage. A card goes into a reader, which plugs into USB." }),
    recall({ id: "l11-s-rpm", strand: D, words: "What is the fastest common spindle speed of a hard drive? Type the speed in RPM.",
      prompt: "Type the speed.", accept: ["15000", "15000 RPM"],
      reason: "The common hard drive speeds are 5,400, 7,200, 10,000 and 15,000 RPM, and 15,000 is the fastest." }),
    count({ id: "l11-s-mirror", strand: R, blocks: [prose("A file server has two 4 TB drives in RAID 1, a mirror.")],
      prompt: "How much space can be used?", frame: "__ TB", answer: 4, traps: [
        { slip: "capacity-slip", value: 8, then: "8 TB is both drives added together, which is RAID 0. A mirror holds the same data on both, so only one drive’s worth is usable." }],
      reason: "In RAID 1 each drive holds a full copy, so the usable space is one drive: 4 TB." }),
    pick({ strand: R, id: "l11-s-notbackup", blocks: [note("Message from Leif", "Chat · 4:30 PM", [S("p1", "We have RAID 5, so I deleted the old projects folder to clean up. Can you get it back? The RAID must have it.")])],
      prompt: "What do you tell Leif?", deciding: ["p1"],
      opts: [ok("o1", "The delete went to every drive too; look in the backup or in earlier versions of the folder", "RAID copies every change to all of its drives, deletes included."),
        no("o2", "Check the other drives, because RAID keeps a copy", "raid-backup", "The parity rebuilds a lost drive, not a deleted folder. The delete was written to every drive."),
        no("o3", "Replace one drive and let RAID rebuild the folder back", "raid-backup", "A rebuild restores the array to what it was, with the folder already gone.")],
      reason: "RAID protects against a drive dying. It does not protect against deletes, malware, fire or a damaged controller, so it is not a backup. A separate copy is." }),
    pick({ strand: R, id: "l11-s-zero", blocks: [prose("A video editor needs the fastest drive speed possible for scratch files, which are copied back from the main storage and can be made again. The workstation has two identical drives.")],
      prompt: "Which RAID level fits?", deciding: [],
      opts: [ok("o1", "RAID 0, which stripes the data for speed", "The scratch files can be made again, so there is no need for a copy. Striping is the quick one."),
        no("o2", "RAID 1, which mirrors the two drives", "level-slip", "Mirroring uses both drives to hold one drive’s worth of data and does not read faster by much."),
        no("o3", "RAID 6, which survives two drives failing", "level-slip", "RAID 6 needs four drives, and it is not the speed pick.")],
      reason: "RAID 0 splits data across the drives for speed, with no copy. It fits files that can be rebuilt and fits nothing else." }),
    recall({ id: "l11-s-stripe", strand: R, words: "What is the name for the way RAID 0 splits data across drives? One word.",
      prompt: "Type the word.", accept: ["striping", "stripe", "striped"],
      reason: "Striping spreads the data across the drives. RAID 0 only stripes, RAID 1 mirrors, and RAID 5 and 6 stripe with parity." }),
    pick({ strand: F, id: "l11-s-missing", blocks: [prose("A user says drive D: has disappeared from Windows. Their computer starts fine. You open the firmware setup screen (the built-in screen that shows what the computer can see) and it lists the second drive.")],
      prompt: "What does that tell you?", deciding: [],
      opts: [ok("o1", "The firmware sees it, so look at Windows before erasing", "The fault is on the Windows side of the chain: a missing drive letter, a drive taken offline, or one shown as uninitialized or unallocated. Erasing now could lose their files."),
        no("o2", "The drive is dead, so order a new one", "part-first", "A dead drive would not be listed in the firmware setup screen."),
        no("o3", "Reinstall Windows from scratch", "no-backup", "Nothing shows Windows is damaged, and a reinstall puts the files at risk.")],
      reason: "A drive that shows in the firmware screen is alive and connected. The fault is further up the chain, in how Windows sees it, so look there without erasing." }),
    pick({ strand: F, id: "l11-s-slow", blocks: [note("Ticket", "Desktop", [S("t1", "Files take a long time to open and to save. S.M.A.R.T. status: OK. The drive has 3% free space.")])],
      prompt: "What is the cheapest test or fix first?", deciding: ["t1"],
      opts: [ok("o1", "Free up space, then test again; S.M.A.R.T. shows no failure", "A nearly full drive slows down, and no sign shows that it is failing. Check again once there is room."),
        no("o2", "Replace the drive and restore the files", "part-first", "S.M.A.R.T. says it is healthy, and the full drive explains the slowness."),
        no("o3", "Rebuild the RAID array from scratch", "rebuilt-array", "There is no array here, and nothing is wrong with one.")],
      reason: "Slow reads and writes have several causes: a failing drive, a full drive or a loose cable. S.M.A.R.T. shows OK and the drive is nearly full, so the cheap test is to make room." }),
    pick({ strand: F, id: "l11-s-iops", blocks: [prose("A database server with a RAID 5 array takes several seconds to answer when many people use it at once, but a single user feels no delay. An IOPS reading, the number of reads and writes the array handles each second, is far lower than it was last month. One drive has an amber light.")],
      prompt: "What is the likely cause?", deciding: [],
      opts: [ok("o1", "A failing drive in the array; check the backup, then replace the amber one", "A degraded array still serves data but handles far fewer operations per second. A rebuild strains the other drives, so the backup comes first."),
        no("o2", "The users use it more, and nothing is wrong", "ignored-alarm", "IOPS fell compared to last month, with the same use, and a drive has a warning light."),
        no("o3", "Recreate the array and restore from backup", "rebuilt-array", "Creating it again can wipe the data. Replace the failed drive and let it rebuild.")],
      reason: "Low IOPS and an amber drive light together mean a failing drive in the array. With a current backup in hand, replacing it lets the array rebuild and brings the speed back." })
  ];

  FC.items("it-support", [...check, ...reserve]);
})();
