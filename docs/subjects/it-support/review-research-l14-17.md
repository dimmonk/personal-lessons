# IT Help Desk lessons 14 to 17 (networks): research and fact check (2026-10-23)

Read: plan, both research notes, rulings 1-8 and 9-13, `l14` to `l17.lesson.js`, all `items-l14*` to `items-l17*` (incl. `items-l17-reserve.js`), `subject.js`.
Checked by script: every option-length and keyword pattern across the 124 choose questions; every `slip` id is defined in `subject.js` (all 35 are); the answer matcher in `public/app/lessons/recall.js`.
Files named below are in `public/subjects/it-support/`.

Sources read (web):
- Professor Messer, A+ 220-1201 "Common Ports" (https://www.professormesser.com/free-a-plus-training/220-1201/220-1201-video/common-ports-220-1201/): FTP 20 (active data) / 21 TCP; SSH 22 TCP; Telnet 23 TCP; SMTP 25 TCP; DNS 53 UDP; DHCP 67/68 UDP; HTTP 80, POP3 110, IMAP 143 TCP; NetBIOS 137 (UDP) and 139 (TCP); LDAP 389 TCP; HTTPS 443, SMB 445, RDP 3389 TCP. SNMP is not on the page (so the list in our A+ map, with no 161/162, matches).
- Search summaries of the Ethernet Alliance, Microchip and TI PoE pages: 802.3af 15.4 W at the port / 12.95 W at the device; 802.3at 30 W / 25.5 W; 802.3bt Type 3 60 W / 51 W; Type 4 listed as 90 W / 71.3 W at the port by those summaries (100 W is the headline figure). I could not open the PDF itself (binary), so the Type 4 port figure is "summary, not primary".
- Search summaries of Cisco and Extreme Networks RADIUS-versus-TACACS+ notes: TACACS+ is TCP 49, separates authentication, authorization and accounting, encrypts the packet body, fits per-command authorization; RADIUS is UDP, combines authentication and authorization, encrypts the password only.
- Port tables (Trend Micro, Datto, Syracuse) list DNS 53 and LDAP 389 as TCP and UDP; they disagree on NetBIOS transport (Datto: 137/138 UDP, 139 TCP, which the lesson matches).
- Things I checked from knowledge and did not search (they are standard): private ranges, APIPA, fe80::/10, IPv6 shortening, WPA2/AES, TKIP, WPA3 SAE, 2.4 GHz channels 1/6/11 and their 20 MHz width (80 MHz does not exist on 2.4 GHz), 802.11 band and generation names, Windows Home cannot join a domain, MX/AAAA/CNAME/TXT/SPF/DKIM/DMARC, ipconfig/ping/nslookup/tracert/pathping output formats.

Overall: the network facts are mostly right. The most serious problems are a corrupted-text bug in lesson 17 (five items), a PoE/MAC wording problem, a thin TCP/UDP treatment in lesson 15, and answer patterns across all four lessons.

## Findings by lesson

### Lesson 14, How a computer gets online (12)

1. `items-l14.js` l14-x-call (end `link`) and the symptom talk: "The yellow triangle means a link without a good address" is not accurate. Windows shows the triangle (limited / no internet) when its connectivity check fails, which also happens with a good address and a dead line. Fix: "The triangle means Windows could not confirm internet; the light and ipconfig say which link."
2. `items-l14.js` l14-s-alldown: the right option says the router "runs DHCP" and the reason says it did not recover; the ticket never says the router is the DHCP server (l14-s-lease has a separate DHCP server). Breaks ruling 13. Fix: add a line or table row "DHCP: the router" to the ticket.
3. `items-l14-check.js` l14-k-gwping: a wrong option says the router "did not answer even one of the four pings" and the feedback talks of "one silent ping", but all four timed out. Fix: "did not answer any of the four pings"; rewrite the feedback to say a router that ignores pings is possible and another computer splits it.
4. `l14.lesson.js` "More signs" row m3: "latency is the delay to get there and back". Latency is often one-way; ping reports the round trip. Fix: "the delay; ping shows it there and back".
5. `l14.lesson.js` (subnet mask) and items: A+ 2.6 lists subnet mask, but the lesson only says "255.255.255.0 means the first three numbers match" and shows 255.255.0.0 for APIPA. No item asks whether two addresses are on the same network, no `/24` notation. Fix: add one row (mask decides same network; /24 = 255.255.255.0) and two items: same-network decision, and a mask typed wrong (a mask of 255.255.255.128 or 255.255.0.0 on the wrong side).
6. `items-l14.js` l14-g-vlan option 4 feedback: "It fails by address too, since the server is on another network", but the ticket never says the learner tried it by address. Breaks ruling 13. Fix: add "It fails by address too" to the user's message.
7. `items-l14.js` l14-g-public: "On a network the company runs, Private is right" is unsourced, and a company-joined laptop on company Wi-Fi normally gets the Domain profile. Fix: say "the desk's rule for the company's own Wi-Fi is Private" in a quoted block, or make the ticket a home-office laptop on a trusted network.
8. `l14.lesson.js` "Private and public": "Every other address is public". Loopback 127/8, multicast 224+, 169.254 (the table already says so) and 100.64/10 are not public. Fix: "Most other addresses are public; 127.0.0.1 is the computer itself, 169.254 is self-made."
9. Coverage (see list below): Core 2 1.7 WWAN/cellular connection on Windows, wired/wireless client setup, and the firewall "application restrictions and exceptions" (one clause in row n5) are thin; DKIM and DMARC are in the table but no item asks them (only SPF).
10. `items-l14-check.js` l14-k-pathping: real pathping prints two blocks (the hop list, then "Computing statistics" with "Source to Here" and "This Node/Link" Lost/Sent columns). The table is a simplification, not the real output; the lesson text says "real-looking output". Fix: show the real two-column form once in the lesson, or state it is shortened.
11. `items-l14.js` l14-w-priya step `next` (also l16-w-desk step `handon`): hands on to the network team with no desk rule quoted. Ruling 1 says hand-on comes when the desk's rule says so. Here the reason is "not mine to change", which is defensible but is not what the ruling teaches. Fix: quote "This desk's rule: wiring and switch ports belong to the network team" in the ticket.
12. Pattern: `items-l14-check.js` has the right option never the longest in 13 of 13 questions (chance of that is under 3%); a test-wise learner can drop the longest option. Fix: let the right option be the longest in about a quarter of them.

### Lesson 15, Ports and protocols (6)

1. `l15.lesson.js` "TCP and UDP": says "Two services ... use UDP" (DHCP, DNS), then adds NetBIOS 137/138, which is three. Also DNS uses TCP 53 too (large answers, zone transfers; Trend Micro and Microsoft tables), and LDAP is TCP and UDP in the registries (Messer lists TCP). Nothing says what transport the other ports use. Fix: a table of all 14 groups with a TCP/UDP column (Messer's: DNS UDP, DHCP UDP, NetBIOS 137 UDP / 139 TCP, others TCP), and one sentence "DNS also uses TCP for big answers".
2. Items: the TCP-versus-UDP fact is asked three times, all about DHCP (l15-q-dhcp, l15-t-udp, l15-k-udp); the NetBIOS UDP/TCP split the lesson teaches is never asked, nor DNS. A+ 2.1 says "TCP vs. UDP". Fix: add items for DNS and for 137/139, and one that names a protocol and asks TCP or UDP for four ports.
3. `items-l15.js` l15-w-rdp, l15-t-web, l15-t-send, l15-t-name: the firewall table prints the service name next to each port with a Block row. The learner finds the answer by reading the table, not by knowing the number. Fix: print port numbers only, and make the question "which service is that?" so the number must be recalled.
4. `l15.lesson.js` row f1 and l15-q-ftp: "Port 20 carries the file data" is true for active mode only (Messer: "20 (active data)"). Fix: "in the usual active mode".
5. `l15.lesson.js` row m1 and l15-k-smtp: SMTP on 25 is server to server; mail programs normally submit on 587 (or 465). The exam answer is 25, so keep it, but the lesson says "from your program to the mail server". Fix: add "mail programs usually send on 587; the exam asks 25".
6. `items-l15.js` l15-q-telnet option 3 ("Port 23 is SMTP") and l15-p-share option "None: restart the file server first" are not moves a novice makes (ruling 8: wrong options are what a novice really does). Fix: replace with port-mixups from the same group (22/23, 143/110).

Info: the 14 groups match the map and Messer's 220-1201 page; 138 is not on Messer's page (137 and 139 only). Keep 137-139 as the map says. No fact error found in the port numbers.

### Lesson 16, Network hardware, connections and tools (11)

1. `l16.lesson.js` first prose and `items-l16-check.js` l16-k-nic: a MAC address is "a 12-digit number". It is 12 hexadecimal digits (48 bits); the example `3C:52:82:1A:9F:07` has letters. Fix both: "12 hexadecimal digits (48 bits)".
2. `l16.lesson.js` PoE table: the wattages are at the switch port, correct, but the table does not say the device receives less (12.95, 25.5, 51 W; summaries give 71.3 W for Type 4, whose port figure the standard summaries list as 90 W, with 100 W the headline). Fix: add "at the port; the device gets a little less" and, if you want the exam's 100 W, add "marked up to 100 W".
3. `items-l16.js` l16-r-poe: a camera needing 25 W with a 30 W PoE+ port. At the device PoE+ gives 25.5 W, so the answer is marginal. Fix: use 20 W, or say "at the camera".
4. `l16.lesson.js` row i4 and l16-s-lag: "the signal goes far up and back" describes a geostationary dish; low-orbit services (Starlink) have about tens of ms. Option 2 feedback says sharing the line is "not" a satellite fault, which is overstated (beam capacity is shared). Fix: "older satellite internet"; "sharing is the better-known fault of cable".
5. `l16.lesson.js` row i1 ("The fastest") and l16-r-cable option "Fiber is not slowed in the evening": fiber is usually fastest but shared passive-optical lines can slow. Fix: "often the fastest".
6. `l16.lesson.js` table "Kinds of network, from the smallest": WLAN and SAN are not sizes; title "Sizes of network". Fix: "Kinds of network".
7. Guessability: 28 questions have 3 options and l16-r-poe has 2 (1 in 2 or 1 in 3 by guessing), mostly the l16 and l17 reserves. Fix: 4 options with a real novice slip each (ruling 8).
8. `items-l16.js` l16-r-iot: two wrong options are absurd ("put them on the same network as accounting"), and the right option makes two changes (passwords and a separate network), against lesson 6's one change at a time and ruling 12. Fix: split into two questions, and give the wrong options real slips ("change only the Wi-Fi password").
9. Coverage: no question asks the PoE standard names or wattages from the lesson table (802.3af/at/bt), though A+ 2.5 lists "PoE standards"; only l16-r-poe uses 15.4 and 30. Fix: add items: standard for 60 W, wattage of PoE+, which injector fits a 30 W camera.
10. Coverage: server roles file share, print, mail, web, database have no question (only DNS, DHCP, NTP, syslog, AAA, appliances). Fix: add one ticket each for two of them.
11. See Lesson 14 finding 11 (l16-w-desk hand-on without a quoted desk rule).

### Lesson 17, Wireless and the small office network (16)

1. SERIOUS. Corrupted text, a bad find-and-replace: `items-l17.js` l17-s-nfc option 1 reads "NFC, which pairs with the headset from a few centimeters" (right answer, and there is no headset in the ticket); `items-l17-check.js` l17-k-rfid option 1 "RFID, which reads the headset like a tag from the desk" (the right answer) and option 2 repeats the NFC string; `items-l17-reserve.js` l17-r-bt options 2 and 3, and the accept lists of l17-r-nfc and l17-r-rfid. Effect: typing "NFC" or "RFID" is marked wrong in the reserve (checked against `recall.js`, which compares whole cleaned words), and the check shows nonsense answers. Fix: plain "NFC" and "RFID" in all seven places; accept lists `['NFC', 'near field communication']` and `['RFID', 'radio frequency identification']`. (`review-learner-l14-17.md` also found this.)
2. `items-l17.js` l17-p-lunch option 2: "Raise the channel width to 80 MHz" on 2.4 GHz. 80 MHz does not exist there (20 and 40 MHz only). Fix: 40 MHz. Also `l17.lesson.js`: "2.4 GHz stays at 20 MHz" is advice, not a rule; write "should stay".
3. `l17.lesson.js` standards table: "Top speed" columns are theoretical maxima (600 Mbps, "several Gbps", about 10 Gbps, over 40 Gbps). Real speeds are lower. Fix: head the column "Top speed on paper".
4. `items-l17.js` l17-s-forward: forwards a camera's port to the internet with no word on the camera's own password or a VPN. This contradicts lesson 16's IoT advice and the lesson's own "close unused ports". Also option 4 says "while Ben is watching" though Ben is the asker. Fix: add "change the camera's default password; a VPN is safer" to the right option or the reason; "while you are watching".
5. `l17.lesson.js` row p8: "Screened subnet ... older menus say DMZ". On a home router, "DMZ host" forwards every port to one device, which is not a screened subnet (two firewalls with a separate network between). Fix: "a router's DMZ host setting exposes one device completely; it is not the same".
6. `l17.lesson.js` row q2 and l17-p-setup: the lesson teaches (correctly) that hiding the name is not a lock. A+ 2.10 lists "disable SSID broadcast" as a wireless security setting, so a performance-based question may expect it. Fix: add "the exam lists it; know that it only hides the name".
7. `l17.lesson.js` table "Sign-in methods": only one line each. Sources (Cisco, Extreme) give the contrasts the exam uses: TACACS+ is TCP, separates authentication, authorization and accounting, encrypts the whole body and suits per-command control; RADIUS is UDP, combines authentication and authorization, encrypts the password only. Fix: add one line each, and one item that asks "which one separates the three jobs".
8. `items-l17.js` l17-w-room step `analyzer`: "three networks on channel 6 and one on channel 7 ... Channel 6 is Priya's too" but the table's three on channel 6 include Priya's office network. Fix: "four networks, ours included: three on channel 6, one on 7".
9. `items-l17-check.js` l17-k-far repeats l17-p-walls (walls, so use the 2.4 GHz name). A check should be new tickets. Fix: change the check to a case with channel width or 6 GHz range.
10. `items-l17.js` l17-p-wpa3: the right answer is the newest and strongest, guessable (ruling 4). Fix: give a ticket where one old device needs WPA2, or a mixed-mode menu.
11. `items-l17-check.js`: the right option is never the longest in 7 of 7 (see lesson 14 finding 12); l17 reserve has 8 questions with 3 options.
12. `items-l17-check.js` l17-k-ax and `items-l17-reserve.js` l17-r-n: accepted answers are `'Wi-Fi 6'` and `'Wi-Fi 4'` only. The matcher turns "Wi-Fi" into two words, so "WiFi 6" and "Wifi 4" are marked wrong. Fix: add `'WiFi 6'`, `'WiFi 4'`, and the standard names `'802.11ax'` and `'802.11n'` only if the question allows them.
13. `l17.lesson.js` symptom table rows y1, y3, y4, y5 (no y2) and `items-l17.js` l17-p-setup rows t1, t2, t4 ... (no t3): ids skip a number. Harmless; renumber when editing.
14. `l17.lesson.js` first prose: "A device uses one band at a time" is untrue for Wi-Fi 7 multi-link devices. Fix: "an ordinary device".
15. `items-l17-check.js` l17-k-fw: a firmware update on the shared router is presented with no change-management step (C2 4.2, lesson 27), though lesson 7 and the plan teach "follow change rules". Fix: add "after the desk's change approval" to the right option, or note it is the owner's own router.
16. Bundled changes in right answers, against ruling 12 and lesson 6: l17-k-upnp ("turn it off and forward only the ports we need"), l17-s-forward ("forward 8080 and keep the address fixed"), l17-r-pw. Compare l14-s-slow, where "restart the router and then the laptop together" is marked wrong for being two changes. Fix: ask each as one change; the second as a follow-up question.

## Claims with no source in the research notes

- "Restarting the router is right when everyone is down" (l14-s-alldown): no source; the lessons 5/6 rule is that a restart drops everyone, so the exception needs the stated reason (finding 2).
- Fiber "fastest", cable "slower in the evening", WISP "needs a clear line to the tower", DSL "slower with distance": ordinary network knowledge, not in the A+ map; fine to keep, say "usually".
- Windows profile Private/Public wording (l14-g-public), TKIP "kept only for very old devices" (l17-p-wpa3), "a bad cable is the usual cause of port flapping" (l14-r-flap): unsourced generalizations (ruling 14).
- The five-link chain, the "seven or eight parts" path of lesson 16 and the "cable against Wi-Fi" cut are the plan's own cut (judgement call, already declared in the plan).

## Answers a learner can get by pattern

- Keyword pattern (counted over the four lessons): an option containing "restart" is right in 1 of 13 (l14-s-alldown); "replace / new laptop / new card" 1 of 9 (l17-r-night); "static address / type in" 0 of 6; "ipconfig /flushdns" 0 of 4; "turn off the firewall" 0 of 2; "hide / hidden" 0 of 5; "reinstall" 0 of 1. A learner can strike those options on sight. Rulings 9-13 #2 asked for more right replacements. Fix: make about one in four of these options right when the earlier tests in the ticket point there.
- Right options with a comma or "X, because Y" are 45% of the right options against 38% of the wrong ones; mild.
- Option length: the right option is longest in 27% of 124 (about chance), but 0 of 13 in the l14 check and 0 of 7 in the l17 check (findings L14-12, L17-11).
- 3-option questions: 28 of 124 (see L16-7). `l17-p-setup` tells the learner to pick exactly four.
- Tables that name the service beside the port (L15-3); `l17-g-auth` states "WPA3 only" in the ticket and the answer is "cannot use WPA3".

## Departures from the nine moves, the chain thinking and the rulings

- Rulings 1 (hand-on only by a quoted desk rule): L14-11.
- Ruling 12 (one change at a time, no exception): L16-8, L17-16.
- Ruling 13 (answers state what depends on the ticket): L14-2, L14-6.
- Ruling 8 (wrong options are real novice moves): L15-6, L16-8.
- Ruling 4 (recall questions cannot be guessed from the newest): L17-10.
- Plan: "Later lessons mix in earlier topics unlabelled". Only l14 mixes (l5, l9); l15, l16 and l17 have no mixed group (the l17 header says lesson 14 on is added later). Fix: add one mixed group each.
- Chain thinking (IT5): lessons 14, 16 and 17 name their chains and cut with a cheapest test; lesson 15 correctly uses "one door left". No departure.

## Contradictions with lessons 1-13 or between lessons 14-17

- Lessons 5 and 6 (and l3-k-router) teach "a restart drops everyone"; l14-s-alldown makes a restart right. Not a contradiction if finding L14-2 is fixed.
- Name reuse with different roles: Priya is in Billing (l14), the branch office (l15), Sales (l17) and Priya Nair in l7. Fix: rename.
- Lesson 12 defines the modem as "the box that joins the home to the internet company's line"; lessons 5 and 6 call the router "the box that connects the office to the internet"; lesson 16 gives both. Fine, but lesson 16 should say the router is the box a modem or ONT feeds.
- Lesson 16 says the MAC is a "12-digit number" while lesson 14 shows no MAC example; fix only L16-1.
- l15 says a ping tests nothing about a door; l14 says a ping to a number cuts the chain. Consistent.

## A+ sub-bullets that no lesson covers (or covers too thinly to be tested)

- C1 2.1: TCP versus UDP for each port (L15-1, L15-2).
- C1 2.4: DKIM and DMARC are explained but never asked.
- C1 2.5: PoE standards are never asked by name or wattage (L16-9).
- C1 2.6: subnet mask meaning / same-network decision; IPv6 beyond fe80:: and the 128-bit form (L14-5).
- C1 2.3: legacy/embedded systems: only SCADA; server roles file share, print, mail, web, database untested (L16-10).
- C1 5.5: every one of the ten symptoms has a lesson row; "limited connectivity", "jitter" and "port flapping" each have one item. Covered.
- C1 2.7 and 2.8: all items present.
- C2 1.5: ipconfig, ping, netstat, nslookup, net use, tracert, pathping covered. (hostname, net user, whoami are lesson 21.)
- C2 1.7: WWAN/cellular connection, wired and wireless client set-up, the firewall's application exceptions as a task (L14-9).
- C2 2.3: RADIUS/TACACS+ contrast (L17-7); Kerberos port not needed.
- C2 2.10: "port mapping" is the exam's second name for port forwarding and is not used in the lesson; "disable SSID broadcast" nuance (L17-6).

## Verdicts

- Lesson 14: ready after fixes 1, 2, 3, 5, 6, 8 and the pattern fixes (12 findings, none hits a command output; the outputs checked are real-looking).
- Lesson 15: ready after fixes 1, 2 and 3 (6 findings plus an info note); the port numbers and TCP/UDP facts it states are correct.
- Lesson 16: ready after fixes 1, 2, 3, 7 and 9 (11 findings); the device, connection and tool facts are correct.
- Lesson 17: not ready until finding 1 (corrupted text) and finding 2 (80 MHz) are fixed; then ready after 4 and 5 (16 findings).
