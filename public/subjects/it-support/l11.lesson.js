// IT Help Desk, lesson 11: Storage and RAID (part storage). A recall lesson with a symptom half: the drive kinds, connections and shapes, RAID 0, 1, 5, 6 and 10,
// removable and optical media, and the drive symptoms with what each points to and the first move.
// Sources: A+ Core 1 objectives 3.4 (HDD spindle speeds and form factors; SSD interfaces NVMe, SATA, PCIe, SAS and form factors M.2, mSATA; RAID 0, 1, 5, 6, 10;
// flash drives, memory cards, optical drives) and 5.2 (LED status, grinding, clicking, bootable device not found, data loss or corruption, RAID failure,
// S.M.A.R.T. failure, extended read and write times, low IOPS, missing drives in the OS, array missing, audible alarms). Research: docs/research/it-support.md IT2 and
// IT17 (back up before touching anything), IT5 (each symptom on the link of the chain it belongs to). Strands: drives, raid, drive-fix.
// One worked ticket (Boris: a favorite cause, a cleanup, ruled out by his own line); a first group of four with help shown; a second of five and a third of four with none; a check of
// eight new questions. The group of this builder's other lessons to mix in does not exist yet, so none is mixed; the other builders' lessons are added later.
FC.lesson("it-support", {
  id: "l11", part: "storage", title: "Storage and RAID", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: drive kinds, connections and shapes; RAID 0, 1, 5, 6, 10; removable and optical media; the drive symptoms with what each points to and the first move (copy the files first when a drive is failing)." }],
  why: [
    "Boris writes that his computer has clicked since Monday and files take minutes to open. His customer files and photos are on it; his last copy is a year old. He wants a cleanup.",
    "You learn the kinds of drive, how each connects, and the RAID levels that join drives. Then what each symptom means, and why the first move on a failing drive is to copy the files off."
  ],
  flow: [
    { title: "Two kinds of drive",
      show: [
        { kind: "prose", text: [
          "A hard disk drive (HDD) stores files on spinning metal platters, read by a small head; its moving parts can click and grind when it fails. A solid-state drive (SSD) stores files in memory chips and has none.",
          "Platters spin at a steady speed in revolutions per minute (RPM). Sizes: 3.5-inch for desktops and servers, 2.5-inch for laptops."] },
        { kind: "document", form: "table", title: "Hard drive speeds", head: ["Speed", "Where you find it"], rows: [
          { id: "h1", cells: ["5,400 RPM", "Laptops, cheap desktops; slowest, quietest, coolest"] },
          { id: "h2", cells: ["7,200 RPM", "Most desktops; the common speed"] },
          { id: "h3", cells: ["10,000 RPM", "Servers"] },
          { id: "h4", cells: ["15,000 RPM", "Servers; fastest, hottest, loudest"] }] }
      ] },
    { title: "How an SSD connects, and its shape",
      show: [
        { kind: "prose", text: [
          "An SSD has a connection (how it talks to the computer) and a shape; they differ.",
          "Four connections. SATA is the old cable connection hard drives used, topping out near 600 megabytes a second. PCIe is the fast expansion slot graphics cards use, built from lanes (separate paths for data at once). NVMe is how an SSD talks over PCIe lanes; built for flash, it is several times faster than SATA. SAS (Serial Attached SCSI) is the sturdy server connection; a SAS controller (the part that connects drives to the computer) also runs SATA drives, but a SATA port does not run SAS.",
          "Two shapes. M.2 is a small stick that plugs into the motherboard and can carry SATA or NVMe. mSATA is the older card shape, SATA only, in its own slot, not an M.2 slot."] },
        { kind: "document", form: "table", title: "Connections and shapes", head: ["Name", "What it is", "What to remember"], rows: [
          { id: "c1", cells: ["SATA", "A cable connection", "Slowest SSD way; same as hard drives"] },
          { id: "c2", cells: ["NVMe", "Fast talk over PCIe lanes", "Usually on M.2; the fastest"] },
          { id: "c3", cells: ["PCIe", "The expansion slot and its lanes", "What NVMe runs on"] },
          { id: "c4", cells: ["SAS", "Server drive connection", "Runs SATA drives too, not the reverse"] },
          { id: "c5", cells: ["M.2", "A stick shape, plugged into the board", "SATA or NVMe; check which"] },
          { id: "c6", cells: ["mSATA", "An older card shape", "SATA only; not an M.2 slot"] }] }
      ] },
    { title: "Shape is not speed",
      show: [{ kind: "prose", tone: "wrong", text: [
        "“It is an M.2 drive, so it is the fast kind.”",
        "M.2 only says the size and where it plugs in. The same stick may be slow SATA or fast NVMe, and some slots take only one. Check both."] }] },
    { title: "RAID: several drives acting as one",
      show: [
        { kind: "prose", text: [
          "RAID joins several drives so the computer sees one; the group is the array. Sizes are in terabytes (TB): 1 TB is 1,000 gigabytes.",
          "Striping spreads data across the drives for speed. Mirroring keeps a full copy on a second drive. Parity is extra information that can rebuild one lost drive’s data. A rebuild copies that data onto a new drive; it works the survivors hard, and while it runs the array has no spare."] },
        { kind: "document", form: "table", title: "The five levels (drives of equal size)", head: ["Level", "How it works", "Fewest drives", "Survives", "Space you can use"], rows: [
          { id: "r0", cells: ["RAID 0", "Striping only", "2", "Nothing: one drive lost, all data lost", "All the drives"] },
          { id: "r1", cells: ["RAID 1", "Mirroring", "2", "One drive", "One drive's worth (half with two)"] },
          { id: "r5", cells: ["RAID 5", "Striping with parity", "3", "One drive", "All drives but one"] },
          { id: "r6", cells: ["RAID 6", "Striping with two parities", "4", "Two drives", "All drives but two"] },
          { id: "r10", cells: ["RAID 10", "Mirrored pairs, striped", "4", "One drive per pair (not both of one)", "Half the drives"] }] }
      ] },
    { title: "RAID is not a backup",
      show: [{ kind: "prose", tone: "wrong", text: [
        "“We have RAID, so we do not need a backup.”",
        "RAID keeps working when a drive dies, but it copies everything you do to all its drives, so a deleted folder, a virus, a fire or a broken controller takes all the data at once. A backup is a separate copy none of those reach."] }] },
    { title: "Drives you carry or load",
      show: [{ kind: "document", form: "table", title: "Removable and optical media", head: ["Medium", "What it is", "What to remember"], rows: [
        { id: "m1", cells: ["Flash drive", "A small flash stick that plugs into USB", "No moving parts"] },
        { id: "m2", cells: ["Memory card", "SD, microSD: flash for cameras and phones", "Needs a slot or USB reader"] },
        { id: "m3", cells: ["CD", "Optical disc, read by laser", "About 700 MB"] },
        { id: "m4", cells: ["DVD", "Optical disc", "About 4.7 GB a layer"] },
        { id: "m5", cells: ["Blu-ray", "Optical disc", "About 25 GB a layer"] }] }] },
    { title: "Drive symptoms, and the first move",
      show: [
        { kind: "prose", text: [
          "The first move is nearly always the same: if a drive may be failing, copy the files off before you test, repair or replace it.",
          "S.M.A.R.T. is a self-check inside a drive that can warn before it stops. IOPS is the reads and writes a drive handles each second."] },
        { kind: "document", form: "table", title: "Symptom, what it points to, first move", head: ["Symptom", "What it points to", "First move"], rows: [
          { id: "d1", cells: ["Clicking or grinding", "A hard drive with failing moving parts", "Stop using it; copy files off; replace it"] },
          { id: "d2", cells: ["S.M.A.R.T. failure", "The drive itself says it is failing", "Copy files off; replace it"] },
          { id: "d3", cells: ["Slow reads and writes, low IOPS", "A failing or nearly full drive, or a loose cable", "Check S.M.A.R.T. and free space; copy if it warns"] },
          { id: "d4", cells: ["Bootable device not found", "The firmware found no drive to start Windows from. (A USB stick with nothing to start is usually skipped, so not the cause alone.)", "Open the firmware screen. Not listed: cable, power or a dead drive. Listed: the boot order, or Windows loading"] },
          { id: "d5", cells: ["Drive missing in Windows", "Listed in the firmware: Windows is not showing it (no drive letter, offline, uninitialized, meaning not set up yet, or unallocated, meaning its space is not divided into a usable part; a later lesson covers the tool). Not listed: cable, power or a dead drive", "Check the firmware screen and cable first; fix the Windows side without erasing"] },
          { id: "d6", cells: ["Files missing or damaged", "A failing drive or a bad shutdown", "Copy what is readable; check S.M.A.R.T."] },
          { id: "d7", cells: ["Amber or red light, beeping alarm, RAID failure", "A drive in an array has failed", "Levels 1, 5, 6 and 10 still run. First confirm a current backup or copy the files off: if a survivor fails during the rebuild, that copy is the only way back. Then replace the drive with one the same size or larger and let the array rebuild; a second failure during the rebuild can lose a RAID 1 or 5. RAID 0: the data is gone; restore from backup"] },
          { id: "d8", cells: ["Array missing", "The controller (what joins the drives into an array) lost it, or too many drives failed", "Do not re-create the array; check cables, power and the controller screen; hand on only if the desk’s rule says so"] }] }
      ] },
    { title: "Fix first, copy later",
      show: [{ kind: "prose", tone: "wrong", text: [
        "“It is slow and clicking, so I will run a repair tool, and reinstall Windows if that fails.”",
        "A failing drive may stop for good within the hour, repair tools and a reinstall work it hard, and a reinstall erases the files. Copy them first, then fix or replace."] }] },
    { worked: "l11-w-click" },
    { set: { items: ["l11-p-speed", "l11-p-nvme", "l11-p-raid1", "l11-p-click"], order: "listed", support: { shown: true } } },
    { set: { items: ["l11-q-m2", "l11-q-cap", "l11-q-six", "l11-q-notfound", "l11-q-parity"], order: "shuffle" } },
    { set: { items: ["l11-r-array", "l11-r-zero", "l11-r-order", "l11-r-nvme"], order: "shuffle" } }
  ],
  check: {
    items: ["l11-k-msata", "l11-k-disc", "l11-k-min5", "l11-k-ten", "l11-k-six", "l11-k-smart", "l11-k-alarm", "l11-k-usb"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 7 } }, { slip: "no-backup", max: 0 }]
  }
});
