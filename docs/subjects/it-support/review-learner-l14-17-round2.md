# Cold learner review, round 2: IT Help Desk lessons 14 to 17

Reviewer: fresh beginner who has done lessons 1 to 13. Read only the four learner-view files. Every practice and check question was answered from what the lesson taught before the mark was looked at. No scripts run.

## Verdict table

| Lesson | Check rule | My score | BLOCKERs | MINORs | Verdict |
|---|---|---|---|---|---|
| L14 How a computer gets online | at least 5 of 6 | 6 of 6 | 0 | 8 (defects 2 to 9) | PASS |
| L15 Ports and protocols | at least 10 of 12 | 12 of 12 | 0 | 3 (defects 1, 10, 11) | PASS |
| L16 Network hardware, connections and tools | at least 7 of 8 | 8 of 8 | 0 | 1 (defect 12) | PASS |
| L17 Wireless and the small office network | at least 7 of 8 | 8 of 8 | 0 | 2 (defects 13, 14) | PASS |

Total BLOCKERs: 0.

## Way of deciding, per lesson (as I wrote it before the first practice question)

**L14.** Nothing loads fits five links in a row: link, address, mask and gateway, name lookup, service. Take the favorite cause, then cut with the cheapest test that changes nothing: ipconfig, then ping the gateway, then a number, then a name. The first test to fail is the broken link. Media disconnected is link 1. A 169.254 address means DHCP was not reached (link up). Number works and name does not is DNS. Gateway answers and the number does not is past the router (provider). One person's problem is not a reason to restart the router, except when everyone is already down.

**L15.** Match the failing job to a service and its number, then check that door. A working ping or working web pages do not clear a different door. When one service fails and the others work, only the blocked line whose number matches the failing service explains the ticket. Delivery: DHCP, short DNS answers and NetBIOS 137/138 are UDP; everything that must arrive whole is TCP.

**L16.** Walk the path from the desk outward and find the first part not doing its job. A fault shared by many desks sits in a part they share; a fault at one desk sits in a part only that desk uses. Clear parts by what still works elsewhere, move one thing at a time, and redo the cheap part (punch down again, new plug) before pulling new cable. Choose a tool or server role by its one job and rule others out by what still works.

**L17.** A cable speed test against a Wi-Fi speed test splits the line and router from the radio link. For the radio: distance and walls point to 2.4 GHz, noise or a crowded channel to 5 GHz, and on 2.4 GHz only channels 1, 6 and 11 are clear. Security: the strongest type every device can use (WPA3, else WPA2 with AES), never TKIP or None. Pick the sign-in method and router setting by the job described, and fix whatever leaves a way in (default login, no encryption, old firmware, unused open ports).

## Where I got stuck

Nowhere that stopped an answer. Slowest points: L14 Check 34 (what "Non-existent domain" means), L14 Item 30 (whether to replace hardware yet), L15 Item 19 (answer is "none of these"), L17 Item 8 (whether old WPA2 devices can do AES).

## Answers I could get by pattern (not by reasoning)

- L15 nearly every practice item: each wrong option's own text names its real port or job ("Port 22 is Telnet", "443 is HTTPS"), so a learner can match number to job from the options alone. The check's typed-number questions are real recall; the chat ones are not.
- L14 Item 9 and L17 Check 21, 22, 23: only one option mentions proxy, UPnP, firmware or content filtering. L16 Check 36 is the same.
- L14 Item 5, Check 33: the answer is the only option that is not "restart the router" or "type a static address", a rule the lessons repeat.

## Defects

All MINOR. None would make a beginner answer a marked question wrong or learn something false, but items 1, 2 and 3 are the ones most worth fixing.

1. **MINOR (most arguable).** L15 Step 4 says mail programs usually send on port 587 and the exam asks for 25. L15 Item 14 and Check 24 then treat a blocked 25 as the reason one user's mail will not send. A beginner who believed Step 4 would see that blocking 25 would not stop a program that uses 587. Fix: state in Item 14 that the program is set to send on 25, or drop the 587 remark from the learner text.
2. **MINOR.** L14 Item 30: the marked answer replaces the desktop's network adapter. Nothing in the item rules out a disabled adapter or a driver problem, and L14 Item 10 teaches that replacing or reinstalling a part before the cheap check is a slip. Fix: add a ticket fact (adapter shows enabled and works in a test) or reword the answer to "test or replace the adapter".
3. **MINOR.** L14 Item 3 and Item 8 treat a timed-out ping to 8.8.8.8 as firm evidence, while Step 3 says a timed-out ping is weak evidence. Fix: add one line saying 8.8.8.8 is chosen because it is known to answer pings.
4. **MINOR.** L14 Step 2 table has "3. Past the gateway", but Step 1 lists five links and none is "past the gateway". Item 3 then uses it as an option. Fix: name it as a part of link 3 in Step 1, or add a sixth row.
5. **MINOR.** L14 Check 34: "Non-existent domain" is never taught. It is answerable because the server named itself and the name is misspelled, but a beginner is guessing the phrase. Fix: add one line to the nslookup row in Step 4.
6. **MINOR.** L14 Item 9: the menu path "Network and Internet, Proxy" appears only in the right option. Fix: teach the path in the Step 10 proxy row.
7. **MINOR.** L14 Item 20: the marked answer picks 192.168.1.80 for the printer, but the ticket does not say that address is free. Fix: add "nothing uses .80" to the ticket.
8. **MINOR.** L14 Items 12 and 27 (Wi-Fi slow, Wi-Fi drops at one spot) use signal, distance and interference before they are taught. Only L17 teaches the radio side. Answerable by elimination. Fix: one sentence in L14 Step 3 or the item help.
9. **MINOR.** L14 Item 10 (phone call): the right first reply asks the caller to read the name by the network picture, but turn 2 only needs "Ethernet", and the lesson never teaches that Ethernet means a cable. Fix: add that to Step 1 or the item help.
10. **MINOR.** L15 Item 19: "None, port 53 is allowed" is marked right, but a rule showing "Allow" for 53 does not say TCP or UDP, and L15 Check 30 teaches that one of the two can be missing. Fix: add "both ways" to the 53 line in the Item 19 table.
11. **MINOR.** L15 Step 7 says LDAP and RDP are "TCP, mostly" and never says what the exception is. Fix: name the exception or write "TCP" and keep the check on the all-TCP lists.
12. **MINOR.** L16 Item 3: the scenario says the switch is "managed" but not whether it has PoE. The marked answer covers it ("PoE switch or injector"), but the distractor "turn power on in the managed switch's settings" is not strictly false. Fix: state the switch has no PoE.
13. **MINOR.** L17 Item 8: "scanner guns can do WPA2 and nothing newer" does not say they support AES. Old WPA2 devices can be TKIP-only. Fix: say "WPA2 with AES".
14. **MINOR.** L17 Item 10: the reason says to keep the camera's address fixed, which is not taught in L17 (reservation is in L14). Also the marked answer forwards a camera to the internet with no VPN. It is consistent with Step 10, but the lesson could say a VPN is the better fix when one exists. Fix: add "reserve its address" to the right option or the Step 10 row.
15. **MINOR.** Words used before they are explained: L14 modem, hotspot, eSIM, intranet, network discovery; L17 phishing, worm, malware (Step 9 uses malware), Mbps. All guessable from context, none decides an answer. Fix: gloss each on first use.

## Contradictions between lessons

None that change an answer. Tension only: L14 Item 3 against Step 3 (defect 3), and L15 Step 4 against Item 14 (defect 1).

## Facts asked from memory that were never taught

None. Every typed answer (169.254, net use, AAAA, SPF, ports, MAC address, MAN, Wi-Fi 6) was taught in the same lesson before it was asked.

## Questions needing a fact the ticket does not give

L14 Item 20 (address free), L14 Item 30 (adapter enabled), L16 Item 3 (switch has no PoE), L17 Item 8 (AES supported). All rated MINOR above.
