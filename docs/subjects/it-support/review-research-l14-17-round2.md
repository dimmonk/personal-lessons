# IT Help Desk lessons 14 to 17 (networks): research and fact check, round 2 (2026-10-23)

Read: plan, both research notes, rulings 1-8 and 9-13, round-1 report, `fixes-l14-17.md`, `l14` to `l17.lesson.js`, all `items-l14*` to `items-l17*` (check and reserve files too), `subject.js` not needed beyond slip ids, `public/app/lessons/recall.js` (matcher). No node scripts run, so counts such as "right option longest" are not re-measured.

Web read this round:
- Ethernet Alliance / TI / Microchip 802.3bt summaries (search results): Type 4 is 90 W at the switch (PSE) and 71.3 W at the device; 100 W is a safety ceiling per port, not the rated output. Type 3 is 60 W / 51 W.
- Wikipedia "Screened subnet" and Professor Messer A+ quiz (search results): a screened subnet is a separate network behind screening firewalls; vendors reuse "DMZ" loosely (a home router's "DMZ host" is different). I did not find the 220-1202 objective text itself; the project's A+ map says "screened subnet".
- Round 1's reads (Messer ports page, TACACS+/RADIUS notes) stand; the A+ map (C1 2.1) lists no transport per port, so any "the exam lists X as TCP" is our reading of Messer.

## 1. Round-1 findings: fixed or not

### Lesson 14 (12)
1. Yellow triangle: FIXED (`l14-x-call` end `link` and reason: "only means Windows could not confirm internet").
2. `l14-s-alldown` router as DHCP: FIXED (table row "Where addresses come from: The router").
3. `l14-k-gwping` wording: FIXED ("did not answer any of the four pings"; feedback says a router may ignore pings).
4. Latency wording: FIXED (the "More signs" row is gone; `l14-r-jitter` reason defines latency as delay to arrive, jitter as varying delay).
5. Subnet mask: FIXED (lesson step "The mask: same network or not" with /24, /16, /8; items `l14-s-samenet`, `l14-s-mask`).
6. `l14-g-vlan` "fails by address too": FIXED (in the user's message).
7. `l14-g-public`: FIXED (quoted desk rule). See new minor M14-2.
8. "Every other address is public": FIXED ("Most others are public; 127.0.0.1 is the computer itself", 169.254 named).
9. Coverage: FIXED (cellular `l14-s-cell` and row n7; firewall exception row n5 and `l14-g-exception`; DKIM `l14-r-dkim`; DMARC `l14-s-spoof`).
10. Pathping real form: FIXED (two-column Source to Here / This Node/Link, marked "shortened").
11. Hand-on without a quoted rule: FIXED (`l14-w-priya` quotes "wall jacks and switch ports belong to the network team").
12. Right option never longest: NOT RE-MEASURED (no script allowed). The fix log says 7 of 32; reading the check file, the right option is plainly not the longest in `gwping`, `renew`, `typo`, `gate`. Treat as partly fixed.

### Lesson 15 (6)
1. TCP/UDP table and wording: FIXED (full 14-row delivery table; DNS both ways; NetBIOS split; "Two services" sentence gone).
2. TCP/UDP asked only about DHCP: FIXED (`l15-q-dns`, `l15-t-tcp`, `l15-k-dns`, `l15-k-split`, `l15-t-udp` now NetBIOS 137).
3. Firewall tables name the service: FIXED (numbers only, several blocks, `l15-t-none`).
4. Port 20 active mode: FIXED (row f1 "in the usual (active) mode").
5. SMTP 587: PARTLY FIXED. Lesson row m1 now says mail programs usually send on 587, but items still treat 25 as what a mail program uses. See M15-1.
6. Non-novice wrong options: FIXED (replaced with port mix-ups, 22/23 swaps).

### Lesson 16 (11)
1. MAC "12 hexadecimal digits": FIXED (lesson and `l16-k-nic`).
2. PoE table "at the port, device gets a little less": FIXED in words; the 100 W figure is still wrong as a port figure. See M16-1.
3. Camera 25 W vs PoE+: FIXED (20 W "at the camera").
4. Satellite wording: FIXED ("older", low-orbit noted, sharing "better-known fault of cable").
5. Fiber "often the fastest": FIXED.
6. "Kinds of network" title: FIXED.
7. Three-option questions: FIXED for l16 (every choose question read has 4 options).
8. IoT: FIXED (split into `l16-r-iot-pw` and `l16-r-iot-net`, real slips).
9. PoE standards asked: FIXED (`l16-s-injector`, `l16-r-poe-std`, `l16-r-poe-at`, `l16-r-100m`).
10. Server roles file, print, mail, web, database: FIXED (`l16-g-file`, `l16-r-mail`, `-web`, `-db`, `-print`).
11. Hand-on without desk rule: FIXED (`l16-w-desk` row t5 and step `handon`).

### Lesson 17 (16)
1. Corrupted "headset" text: FIXED. Grep finds "headset" only in the Bluetooth row and the headset ticket; accept lists read `['NFC','near field communication']`, `['RFID','radio frequency identification']`.
2. 80 MHz on 2.4 GHz: FIXED (`l17-p-lunch` now 40 MHz, "width is not strength"; lesson says "keep it at 20").
3. "Top speed" column: MOOT. The standards table now has no speed column at all (Standard, Wi-Fi name, Band). The fix log says a "Top speed on paper" column and a units line were added; neither is in `l17.lesson.js`. Mbps appears in tickets with no unit explanation (M17-4).
4. `l17-s-forward` camera: FIXED (default password changed first, VPN named as safer). The right option still pairs two things; see M17-5.
5. DMZ row: NOT FIXED. `l17.lesson.js` p8 still says "(older menus say DMZ)"; the fix log says "DMZ host is not a screened subnet" was added, but the text is not there. See M17-1.
6. Disable SSID broadcast: FIXED (row q2 "the A+ exam lists it as a security setting").
7. RADIUS / TACACS+ contrast: FIXED (rows a1, a2, `l17-k-tacacs` asks which keeps the three jobs apart).
8. Analyzer count: FIXED ("four networks, ours included: three on channel 6 and one on channel 7").
9. `l17-k-far` repeats `l17-p-walls`: FIXED (now a 6 GHz range ticket).
10. `l17-p-wpa3` guessable: PARTLY FIXED. A WPA2 with AES decoy was added, but the right answer is still the newest and strongest; the ticket does state all devices support WPA3. `l17-s-tkip` covers the old-device case. MINOR, no further action needed.
11. Right option never longest in check: NOT RE-MEASURED. Reserve now has 4 options everywhere (FIXED).
12. "WiFi 6" accept lists: FIXED (`['Wi-Fi 6','WiFi 6']`, `['Wi-Fi 4','WiFi 4']`).
13. Row id gaps: harmless; `l17-p-setup` renumbered, lesson ids y1.. still skip y2? (lesson now y1 to y4 without gaps; w1, w3, w4 skip w2 — harmless).
14. "A device uses one band at a time": NOT FIXED. `l17.lesson.js` line 16 still reads "A device uses one band at a time." (fix log says "an ordinary device"). M17-2.
15. `l17-k-fw` change approval: FIXED ("The office manager has approved the change for tonight").
16. Bundled changes: MOSTLY FIXED (`k-upnp`, `r-pw` are single changes). `s-forward` and `k-fw` right options still carry a precondition. MINOR.

Also from round 1: "Priya" renamed everywhere (Odette, Anita, Rosa): FIXED. Mixed groups added in l15 (lessons 14, 5), l16 (14, 15), l17 (5, 9): FIXED.

## 2. New findings

No BLOCKER found. No false network fact that teaches wrongly; no contradiction of a ruling; the nine moves and chains are kept (lessons 14, 16, 17 cut with the cheapest test, lesson 15 uses "one door left").

### MINOR

Lesson 14
- M14-1 `l14-r-flap` reason: "The first check for a port going up and down is the cable" is an unsourced generalization (ruling 14); round 1 flagged it as a claim and it was not touched. Say "a cable known to work is the cheapest cut".
- M14-2 `l14-g-public` right option calls the conference room Wi-Fi "the office's own"; the ticket only says "new conference room Wi-Fi". Add "the office's conference room Wi-Fi" to the user's message (ruling 13).
- M14-3 `l14-r-nic` right option says "the light stays off"; the ticket gives only "Media disconnected", no light. Drop the clause (ruling 13).
- M14-4 `l14-k-pathping` and `l14-s-tracert` tell the learner to report to "the provider", but the tickets do not say hop 2 or hop 3 belongs to the provider (the lesson says hop 2 is the provider's; `s-tracert` has a quoted desk rule, `k-pathping` has none). Add "198.51.100.x is the provider's" to the ticket or a quoted rule.
- M14-5 Lesson tracert note "Stars to the end, with pings failing too, are a break" is fine for the ticket but a firewall can also swallow tracert replies; "usually a break" is safer.

Lesson 15
- M15-1 Internal contradiction: lesson row m1 says mail programs usually send on 587 and the exam asks 25, yet `l15-t-send` (Ruth's mail program stuck in Outbox because 25 is blocked) and `l15-k-smtp` ("My mail program asks for an outgoing mail server") present 25 as what a mail program uses. A learner who believed the lesson would doubt the answer. Reword the tickets as "the office mail server sends mail on SMTP" and ask "which port does the exam give for SMTP", or have the firewall list also hold 587. Not rated BLOCKER because the lesson names the convention.
- M15-2 `l15-q-smtp` reason still says "from your program to the server and from server to server" (see M15-1).
- M15-3 `l15-r-ldaptcp` question and reason say "the exam expects/lists LDAP and RDP as TCP, mostly". The A+ map gives no transport per port; the source is Messer's page (LDAP 389 TCP, RDP 3389 TCP) and RDP also has a UDP mode. Say "the usual answer" and cite Messer, not the exam.
- M15-4 Lesson shortcut "Everything else that you must get whole is TCP" and `l15-t-tcp` reason "Only DHCP, the short DNS answers and NetBIOS names and messages deliver by UDP" are true for the 14 listed ports but not in general (HTTP/3 uses UDP 443; RDP has a UDP mode). Add "of these fourteen".
- M15-5 `l15-w-rdp` final step hands the firewall owner the number with no quoted desk rule (ruling 1 asks a hand-on to name the rule). Add "This desk's rule: firewall changes belong to the network team".
- M15-6 `l15-p-imap` has 3 options and `l15-r-ldaptcp` has 3 (1 in 3 by guessing); round-1 L16-7 asked for 4 everywhere. Add a fourth real slip.

Lesson 16
- M16-1 PoE table is headed "Power at the switch port" but gives "up to 100 watts on the stronger type". IEEE 802.3bt Type 4 is 90 W at the port (71.3 W at the device); 100 W is the safety ceiling. `l16-r-poe-std` reason repeats "60 watts, or 100 watts". Exam material commonly quotes 100 W, so keep it as "marked up to 100 W; the standard gives 90 W at the port".
- M16-2 `l16-g-replace`: "Only a new cable mends it" overclaims. After re-punching both ends, replacing the jack or re-terminating with fresh wire comes first for many technicians. Soften to "a new cable is the next step the ticket supports" or add the jack to the ticket as already replaced.
- M16-3 `l16-p-poe` option 2 ("managed switch's settings page, turning power on for that port") is a real action on a managed PoE switch; it is marked wrong only because the ticket never says the switch is PoE. Add "not PoE" to the ticket.
- M16-4 `l16-r-bt`-style odd option: none in l16. `l16-p-switch` option 4 "network card in the first laptop" is a weak decoy but fine.

Lesson 17
- M17-1 Row p8 "Screened subnet ... older menus say DMZ". A home router's "DMZ host" setting forwards every port to one device; it is not a screened subnet (Wikipedia and trainers note vendors reuse "DMZ" loosely). The fix log claims this was added; it was not. Add one clause: "a router's DMZ host setting exposes one device completely and is not the same".
- M17-2 "A device uses one band at a time" (line 16) is untrue for Wi-Fi 7 multi-link devices; write "An ordinary device".
- M17-3 Coverage: C1 2.2 "channels: regulations" and C2 2.10 "port mapping" (the exam's second name for port forwarding) are not mentioned. Add "channels allowed differ by country (1 to 11 in the US)" and "also called port mapping".
- M17-4 Tickets use Mbps (worked ticket, `l17-s-wired`) with no unit line in the lesson; add one clause.
- M17-5 `l17-s-forward` and `l17-k-fw` right options bundle a precondition with the action (change password then forward; save settings then update). Defensible as one task; ruling 12 is cleaner if each is a single step.
- M17-6 `l17-p-setup` row "Update it after saving the settings" is ambiguous; say "save the settings first, then update; an update can reset them" (as `l17-k-fw` does).
- M17-7 `l17-r-bt` option 4 "Wired USB" is not a radio, in a question "What is the radio called?".

### Contradictions between lessons
None new. Lesson 5/6 "a restart drops everyone" and `l14-s-alldown` are reconciled by the stated router-as-DHCP and everyone-already-down. Lesson 14 says RADIUS/AAA not at all; lessons 16 (AAA, NTP five-minute sign-in note) and 17 (Kerberos) agree. Lesson 16 NTP "about five minutes" matches Kerberos, which lesson 17 names later.

### Claims with no source (kept, mild)
Fiber, cable, DSL, WISP characteristics; "wrong password is the usual cause of an authentication failure" (`l14-s-auth` reason); the lesson 14 restart exception (reasoned, stated with its condition). All ordinary knowledge; no change required.

## 3. Verdicts

- Lesson 14: PASS (0 BLOCKER, 5 MINOR).
- Lesson 15: PASS (0 BLOCKER, 6 MINOR; M15-1 is the one to fix first).
- Lesson 16: PASS (0 BLOCKER, 3 MINOR).
- Lesson 17: PASS (0 BLOCKER, 7 MINOR; M17-1 and M17-2 are fixes the log says were made but are not in the file).

Total BLOCKERS: 0.
