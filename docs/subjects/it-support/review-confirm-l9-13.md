# Confirm review, IT Help Desk lessons 9 to 13 (2026-10-23)

Reviewer: fresh confirm pass, Sonnet 5.5. Read: both rulings files, both round-2 reviews, the "Round 2" section of `fixes-l9-13.md`, and the source files `public/subjects/it-support/l9..l13.lesson.js`, `items-l9.js` to `items-l13.js`, `items-l10/11/12/13-check.js`. No node scripts run (a short Python id-and-name scan was used, nothing executed from the project). Every question was read as a beginner and as a fact checker.

## 1. Round-2 BLOCKERS

| Blocker | Status | Evidence |
|---|---|---|
| Learner D11 (L11): `l11-r-order` left out Windows on the new drive, contradicting check Q21 | FIXED | `l11-r-order` steps now include "Put Windows on the new drive"; right order is stop, copy, replace, listed, windows, restore, confirm; the feedback says "a new drive is blank". Matches `l11-k-usb` ("put Windows on the new one and restore"). |
| Research B1 (L11): `l11-r-array` and row d8 said "hand on" with no desk rule | FIXED | `l11-r-array` now carries "This desk's rule: hand on any array fault that is still open after 20 minutes." The right option says hand on only if the desk's rule says so; row d8 says "hand on only when the desk's rule says so". `l9-g-smell` no longer says "hand it on". No remaining "hand on" without a rule in L9 to L13 (grep checked). |
| Research B2 (L13): `l13-r-conn` said a known-good cable clears cable and port | FIXED | The right option's feedback and the reason now say a cable known to work clears or convicts the cable only; if it fails the port is next (another port), then the driver. Matches Step 2's rule that a swap clears only what changed. |

## 2. New blockers

None found.

Checks that came out clean:
- Every id used by a lesson file exists exactly once in the items files (L9 to L13); no duplicate ids; the removed `l13-c-defaults` is referenced nowhere except the fix log. New ids `l13-c-duplex`, `l13-c-draft`, `l13-c-scan`, `l13-c-flatbed`, `l13-c-msds` are in the lesson's fourth set.
- Boot-chain wording (ruling 1) is identical in L9, L10, L11: firmware finds the drive by the boot order; "no bootable device" is the firmware not finding a drive; a USB stick with nothing to start is skipped (L9 link 3, L10 b1 and `l10-r-usbskip`, L11 d4 and `l11-k-usb`).
- Facts verified against the text and standard references: supply voltages, 20+4, 80 Plus direction (Titanium wastes least), CPU vs PCIe 8-pin, DDR4 vs DDR5 notch, SODIMM about half length, RAID 0 cannot rebuild, RAID capacity sums (6, 12, 4 TB) and the RAID 10 pair rule, SAS runs SATA not the reverse, mSATA vs M.2, DVI-D/I/A and the DVI-D cable in a DVI-I port, Cat 6 55 m for 10 Gbps and Cat 6a 100 m, USB 3.0 5 Gbps, Thunderbolt 40 Gbps, Lightning vs Thunderbolt, PCL (HP) and PostScript (Adobe), toner and fuser care, thermal and impact care.
- Names: the round-2 renames hold inside L9 to L13 (no name with two jobs). Two collisions remain against other lessons (minor, below).
- Rulings 2 to 7 of `rulings-l9-13.md` hold (cheap-but-non-splitting wrong options, calls that end on a statement or hold the line, same-family recall options, chains named, facts, coverage). Rulings 12, 13 of `rulings-l1-8.md` hold (the desk rule is quoted where hand-on is the answer; `l10-k-watt` quotes the 20 percent rule; ticket temperatures give the maker's top).

## 3. Minor findings (none changes a verdict; fix when convenient)

L9
- `l9-x-new` and `l9-k-call`: the right reply is still the longest in each turn (`l9-k-call` turn 2 especially). The round-2 fix equalised `l9-x-new`; `l9-k-call` is still guessable by length.

L10
- `l10-c-arch`: the person is "Wilma" but the option and feedback say "his files".
- `l10-r-x64`: "Lars" is addressed as "her".

L11
- `l11-r-array`: the right option says "the desk's rule below", but the rule sits above the ticket.
- `l11-w-click` step "fix" says put the files back from the copy without saying Windows goes on the new drive first (the later items teach it; the worked ticket is only incomplete).

L12
- `l12-d-audio`: the ticket says both the TV and the laptop have only HDMI ports, but the only cable has a DVI end, so the DVI end has nowhere to plug in and "the picture shows" is not possible. The answer (DVI normally carries no sound) is still right; change one side to a DVI port.
- `l12-s-fiber`, row f2: "a few hundred meters at most" is an absolute that is not true of slow multimode links (100 Mbps runs about 2 km). The lesson's own speeds are 10 Gbps era, so the ticket (2 km) still answers single-mode; add "at the speeds used today" or drop "at most".
- The header comment of `items-l12.js` is garbled: the speed list sits inside the parenthesis that was meant to cite the sources. Content is fine.
- `l12-d-call` and `l13-s-call`: only the right reply acknowledges the caller ("I will note it") and it is the longest, a pattern answer against ruling 8 of `rulings-l1-8.md`. Give one wrong reply equal length and warmth.
- Name reuse across lessons: Lou is HR in `l12-k-native` but Sales in L19 and Intern in L21; Teo is Technician in `l10-r-dualn` but Billing in L29.

L13
- `l13-r-conn`: "Zora" and "his computer".
- `l13-c-secure`: "Mateo" and "until she signs in".
- Teaching model of the seven steps is now marked as such in the header with two sources; the lesson itself still states the defect lists as fact (fine for the exam, labelled in the header only).

## 4. Verdicts

| Lesson | Open blockers | Verdict |
|---|---|---|
| L9 From the power button to the desktop | 0 | PASS |
| L10 The parts inside | 0 | PASS |
| L11 Storage and RAID | 0 | PASS |
| L12 Cables, connectors and screens | 0 | PASS |
| L13 Printers | 0 | PASS |
