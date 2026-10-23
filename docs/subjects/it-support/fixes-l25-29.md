
## Lessons 25 to 28

Fixed from `review-learner-l25-29.md` and `review-research-l25-29.md`. Checks run: `node --check` on all 16 files, `node tools/option-lengths.mjs it-support` (l25 to l28 all pass). Validator, lock and renderer not run.

Facts checked: NTFS Write adds and saves but cannot delete, Modify can (albusbit.com/blog/windows-permission-differences); `format` without /q writes zeros, `/q` and `diskpart clean` do not (Microsoft KB 941961); degaussing does not work on SSDs (NIST SP 800-88 Rev 1 summaries). Sources are in the file headers.

### Lesson 25
- D1: worked ticket says saving needs Write or Modify; Modify chosen because the job needs it. D2: the identity shortcut is its own wrong screen. D3: "recovery key" everywhere.
- B2: the BitLocker check ticket now states the key is stored in the directory under the ID shown; right option looks it up; the reinstall decoy became "clear the TPM".
- B1/ruling 8: right options no longer the longest (reserve 11 of 15 down to 0); wrong options lengthened to the same shape. D4 (PIN, power user), D5 (call replies as long as the right one; the weak "nothing else I can do" reply became a real bypass), D6 (sfc, domain controller, port, TPM defined), minors for coverage rows (username and password, passwordless, Defender on/off, data at rest, laptops, PII, password managers), "three letters" cue removed, q-same options reworded.
- Ruling 22: named people by name or "they".

### Lesson 26
- B3/ruling 21: table now has quick (standard) format and diskpart clean (data recoverable), full format (zeros), low-level format (A+ sense), secure erase for SSDs; every item says "quick format". D8: System Restore explained, "(Windows Home)" dropped. D9: the reset reply and feedback now use a call to the number on record. D10: "at once". D11: tailgater slips in unseen. D12: Trojan story no longer fits adware. D13, D14 (most likely a Trojan). M1 gloss noted in header; M2 (scan the stick), M3 (files saved before reimage), M4 (hard drives), M5, M6 (two straw options replaced), M8 (safety note on stalkerware), M9, M10 (safe mode row).

### Lesson 27
- M11 power off and unplugged before dusting; M12 ticket states the server works and no procedure covers firmware, then confirm, write, close (ruling 17); M13 straw options replaced; M14 "most" UPS; M15/D16/D19 stems no longer give the answer, "short name" cues, 3-2-1 accepts "one"; M16 simplified order of volatility with swap; M17 do not power off; M18 AUP decoy replaced; M19 three backup tickets given different days; M20; D15 incremental check on a Sunday full; D17 strap story; D18 firmware, VPN, extinguisher kind explained; reserve rights no longer longest.

### Lesson 28
- B4: AI and policy questions recast as actions (no lone "No"); right AI option fixed (card data) and reports the leak to management. D20 to D23, M21 (VNC feedback, "stopped sharing files", standard-change note, close step), M22 (Windows 7 VM kept off the network), M23 (stems), M24 (employee report), M25 (five reserve questions added: test and development VM, multitenancy, dedicated, availability, third-party tool rules; application virtualization line), M26 (do not keep full card numbers), M27.

### Not done
- B9 (a name used with more than one job across the subject) is subject-wide; only pronouns were fixed here.

## Names and pronouns (ruling 22, 2026-10-23)
- Names: 497 name-and-lesson clashes renamed (800 occurrences) so every first name is used in one lesson only (kept where it appears most); a re-scan finds no first name in two lessons. New names are ordinary and appear nowhere else in the subject.
- Pronouns: about 1,150 he/she/his/her/him/hers/himself/herself replaced with they/their/them/theirs/themself (verbs adjusted); none remain in the subject files. A few sentences with two people use the name instead.
- Checks: `node --check` on every edited file and `node tools/option-lengths.mjs it-support` (all ✓). Validator, lock and renderer not run; the lock will need regenerating.
