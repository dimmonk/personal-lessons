# Cold learner review, IT Help Desk lessons 14 to 17

Reviewer: beginner, no IT training, lessons 1 to 13 done. Read only docs/learner-view/it-support-l14.md to l17.md. Every practice and check question answered from the lesson text before looking at the mark.

## Verdict

| Lesson | Verdict | Check score vs pass rule | Note |
|---|---|---|---|
| 14 How a computer gets online | PASS | 6 of 6 vs at least 5 | Two check items rely on facts or wording the lesson did not give (defects 2, 3) |
| 15 Ports and protocols | PASS | 10 of 10 vs at least 8 | Passes only as memory with the text fresh; the answers are table lookups, and one typed answer has a gap (defect 21) |
| 16 Network hardware, connections and tools | PASS | 8 of 8 vs at least 7 | Almost every item answerable by matching the ticket's words to a table row (defect 30) |
| 17 Wireless and the small office network | PASS | 8 of 8 vs at least 7 | Two options carry garbled wording (defects 36, 37); two tickets omit a needed fact (defects 38, 39) |

## Way of deciding (written before the first practice question)

- L14: Write the five links (link, address, mask and gateway, name lookup, service). Run ipconfig, then ping the gateway, a number (8.8.8.8), then a name. The first test that fails is the broken link. Media disconnected is link 1; 169.254 is DHCP not reached; gateway answers but the number does not is past the router; number works but the name does not is DNS; names and numbers work but one site fails is the service or a proxy. Use tests that change nothing first. Do not restart shared equipment unless everyone is down and the box is the cause.
- L15: Match the failing job to its service and number. If one service fails while web, mail and ping work, a firewall door for that number is closed: read the rule list for it. TCP is for data that must arrive whole; UDP is for quick one-shot asks (DHCP, DNS).
- L16: Walk the path from the desk outward. Each part has one job, so pick the device or tool by the one job named in the ticket. Parts that other desks share are cleared when those desks work. Test with a part known to work.
- L17: Split the path with a cable speed test: fast by cable and slow on Wi-Fi means the radio side (band, channel, walls, noise); slow on both means the line or the router's link to it. Choose the band by reach against speed. Choose the strongest security every device supports. On a new router, change the default login, turn encryption on, update the firmware and close unused ports.

## Defects, with fixes

### Lesson 14

1. Step 5 shows the two ipconfig tables inside a markdown table cell ("| A | B |" holding "A plain table..." text). As written it is unreadable text, not two tables. Fix: render them as two separate tables or side by side blocks.
2. Item 13 (Lia, Wi-Fi password changed): the fix "forget the network and join again with the new password" is never taught. Step 2 only says a wrong or changed password causes an authentication failure. I got it by elimination (the other three options were obviously wrong). Fix: add a line in Step 2 or Step 9: "A laptop keeps the old password. Forget the network, then join again with the new one."
3. Check 27 (nslookup, "Non-existent domain"): Step 4 never shows what nslookup prints, so "Non-existent domain" versus a timeout is not taught. I answered from the option wording. Fix: add an nslookup output example to Step 5: an answer, "Non-existent domain" (the name is wrong, DNS works) and "timed out" (the server is down).
4. Check 25, wrong option 4: the option says the router "did not answer even one of the four pings", but the feedback says "One silent ping proves little". All four were silent, so the feedback misdescribes the evidence. Step 3's "one silent address proves little" does not cover four timeouts to the gateway either. Fix: make the feedback say "Four timeouts from the gateway do not prove the router is broken: the cable, the port or this computer may be at fault. Test another computer and a cable known to work."
5. Item 5 asks "Why did the new laptops get 169.254 addresses?" but option 4 is an action ("Restart the three laptops and try the cable again"), not a cause. It is eliminated by form alone. Fix: make all four options causes.
6. Item 15: the ping output shows "Received = 4, Lost = 0 (0% loss)" next to four "Destination host unreachable" lines. A beginner reads that as success. Step 4's table never mentions this. Fix: add a line to "What ping says": "Windows counts an unreachable reply as received; read the lines, not the total."
7. Item 15 and Step 4's table disagree in scope. The table says unreachable means "a router, or this computer, has no way to get there". The marked answer is "Nothing on the local network answers at that address", a narrower claim that adds "local". Fix: say in the table that an unreachable reply from your own address means the computer found no device at that address on the local network.
8. Item 16 (restart the router) is correct, but it flips Step 10, "A restart drops every other person". A first-time learner is likely to reject it on the earlier rule. The reason explains it, but Step 10 never states the exception. Fix: add to Step 10: "Exception: when everyone is already down and the cause is that one box, restart it."
9. Words used before they are explained or at all:
   - switch and switch port (Step 2 table, Items 1 and 24), explained only in L16
   - modem
   - VLAN (Step 2 table, explained in Step 8)
   - proxy (Step 2 table, explained in Step 9)
   - lease (Step 4 ipconfig /all row, explained in Step 6)
   - TTL (in every ping output, never explained)
   - Wi-Fi channel (Step 2 table, Item 23)
   - DHCP "scope" is fine.
   Fix: define each at its first use, or add "see Step N".
10. Item 24 (printer conflict): the reason says "A reservation would also work". The learner who knows only that is now unsure which is right. The exclusion is marked correct, and a reservation is not offered as an option. Not wrong, but arguable. Fix: either offer reservation as a wrong option with a reason (the printer would then ask DHCP for it, a different method) or drop the sentence.
11. Pattern, Items 12 and 23 ("which test cuts the causes in half"): the right option is always the free test that changes nothing. The wrong ones are "replace the card", "restart the router" or "ipconfig /flushdns". I got both with no lesson knowledge beyond "never restart or replace". Fix: make at least one wrong option a free, change-nothing test that tests the wrong thing.
12. Pattern, Items 7 and 9 are answered from the ticket text alone: Item 9 says "I typed in a proxy address" and the right option says proxy; Item 21 says "the company's" and the right option says Private. Fix: remove the giveaway words from the ticket, or let the output carry them.
13. Item 10 (phone call): the right first reply is the only one that asks a question. In all four calls like this in other lessons, a question wins. Fix: include a turn where the best reply is an action.
14. Item 6 reason mentions 127.0.0.1 (the computer itself), which was never taught. Not asked. Fix: remove it or teach it in Step 7.

### Lesson 15

15. Pattern: Items 12, 13 and 14, and Check 25, are answerable by reading the firewall table. The right port is the only row marked Block; the wrong options are ports shown as Allow. No knowledge of what the number does is needed. Fix: a table with several blocked rows, one of which does not match the symptom, and the learner must pick by the service.
16. Pattern: every "None: ..." option (Item 4 "None: restart the file server first", Item 12 "None: clear the browser's saved data", Check 25 "Nothing: a ping still works") is wrong. Fix: make one "None" option right in one item.
17. Step 2 says "Fourteen groups of numbers"; I counted 14 services (53, 67/68, 80, 443, 25, 110, 143, 20/21, 445, 137-139, 22, 23, 3389, 389) in four groups. The word "groups" is confusing. Fix: "fourteen services".
18. Step 5 uses "NetBIOS over TCP/IP" and TCP before Step 7 explains TCP. Also unexplained at first use: Linux (Item 1), server (Item 1 explains it in brackets), outbound versus inbound rules (Step 9 says "traffic leaving the branch"; Item 11 has traffic arriving from outside; the lesson never says rules have a direction). Fix: add one line to Step 1 on direction, and a forward reference on TCP.
19. Item 2 and Check 21: the right answers are the only options that mention both devices or the word "outgoing", so they match the ticket's own words. Low risk; note only.
20. Step 7 says TCP for "Web pages, mail, files and remote sign-in"; it never states SMB (445) or LDAP (389), so Check 19 and Item 7 work for DHCP only because DHCP is the one UDP service offered. DNS UDP is taught but never asked. Fix: ask DNS or NetBIOS 137 once.
21. Check 23 ("Which older Windows service uses ports 137 to 139? Type its name"): accepted answers are NetBIOS and NetBT. Step 5 names the service "NetBIOS over TCP/IP, also called NetBT"; a learner who types that full name is marked a miss because "a word left out or added is a miss". Fix: add "NetBIOS over TCP/IP" to the accepted answers.
22. The recall load is high with no anchor for several numbers (20 versus 21, 67 versus 68, 137, 138, 139, 110 versus 143). The lesson says it will bring them back by review, but no memory hook is given for 110 and 143 beyond "older first". Fix: add a hook for 20/21 and 137/138/139, or ask the pairs one at a time.

### Lesson 16

23. Item 20 (Ben, dead jack B-31): the marked answer is "Run the cable between the jack and the panel again". The tester said wire 6 is open "somewhere inside the wall". The cheaper step is to re-punch the ends at the jack and the panel, since a bad termination is the usual cause of one open wire. Re-running a cable was never taught as a step. Arguable, and the options give no re-punch choice. Fix: either add "punch the wire down again at both ends" as a step in the lesson and ask it, or state in the ticket that both ends were re-punched.
24. Words and kinds of cable never explained before use: coax, RJ45 and RJ11 (the plug shapes), Ethernet, plenum (only in a wrong option, explained after the answer), content filter, antivirus, intruder alarm, queue, pins, analyzer, wiring closet's "punched-down end" (Step 8 working). Fix: one line each at first use, or drop plenum.
25. NIC (Step 1), "network adapter" (L14 ipconfig) and "network card" are three names for one part. L16 never says so. Fix: in Step 1: "The NIC is also called the network card or network adapter. ipconfig lists it as the adapter."
26. Channel is used in Item 14 ("shares a channel") before L17 explains it. Fix: define it in L16 or move the Wi-Fi analyzer to L17.
27. Taught, never asked: the PoE watts of 802.3af, at and bt, and the 100 meter limit; SCADA; IoT; the server roles Mail, Web, Database, Print and File share (only decoys in some items); UTM (only as a wrong option); cellular internet; the firewall's job on the path. These are on the A+ exam. Fix: ask each at least once; PoE standards in particular are pure recall.
28. Step 8 ends with "Switch settings belong to the network team". That ownership rule has not been taught anywhere in this lesson. Fix: state it in Step 2 where managed switches are introduced.
29. Item 18 has three options and one is "A patch panel", which Step 1 already said has no power or settings. The right answer is reachable from the word "settings" in the table. Same for Item 19 (the "name in the print queue" option is absurd). Fix: a third switch-type option, such as a PoE switch.
30. Pattern across the lesson (Items 1 to 19, Check 22 to 29): each ticket restates a table row's own words ("punches wire ends" for punchdown, "keeps the clocks the same" for NTP, "checks who they are, what they may use, what they did" for AAA). I answered all 29 by matching the ticket's phrase to the table row with no reasoning about the situation. Fix: describe the situation in the user's words ("our logs show the wrong times") and let the learner infer the role.
31. Check 28 mentions "some sign-ins fail", which is a good reason for NTP but is never taught; the lesson only says NTP keeps clocks the same. Fix: add "sign-in checks fail when clocks differ by about five minutes" to the NTP row.
32. Item 4 (farm office) and the Step 3 table: cellular is left out of the options, but it is a fair choice for a farm office with a tower in sight. A learner who knows cellular may argue. Fix: add "no cell signal here" to the ticket.
33. Step 8 working, step 4: "The jack and cable are not yet cleared, but a cable tester run on that cable would take a minute", but step 5 goes to the switch page without running the tester, and the conclusion stops at the switch. Fix: either run the tester in the example or say it is not needed because the port is disabled.

### Lesson 17

34. Step 3 and Step 1 numbers (11, 54, 600 Mbps, several Gbps, 10 Gbps, 40 Gbps; channel widths; 6 GHz) are taught but only band per standard (Item 11) and ax is Wi-Fi 6 (Check 16) are asked. Mbps, Gbps, GHz and MHz are never explained. Fix: one line on the units; ask the top speeds or drop them.
35. Step 9 "Firmware" is used as a word with no definition (software built into the router). It matters for Item 4, Check 22. Fix: "Firmware is the router's own software."
36. Item 6, right option: "NFC, which pairs with the headset from a few centimeters". The headset is stray text from another item, and Step 4 and the feedback say a tap does not pair. The option contradicts the lesson.
37. Check 17, right option: "RFID, which reads the headset like a tag from the desk", the same stray text, and nonsense for a forklift at a dock door. The NFC wrong option has the same "pairs with the headset". Fix: reword all three to name the pallet and tag.
38. Item 2 (Dan, noon dropout): the marked answer is to join the 5 GHz name. The ticket only says the laptop is on the 2.4 GHz name; it never says the router has a 5 GHz name or that the laptop supports it. Check 18 has the opposite gap: it says the laptop is on the 5 GHz name but not that a 2.4 GHz name exists. Fix: state in each ticket that the router offers both names and the laptop can use both.
39. Item 7 (Gus, 14 and 13 Mbps): "slow" is never compared with what the line should give. The answer is right (the numbers match), but a beginner cannot tell 14 Mbps is slow. Fix: add "we pay for 300 Mbps".
40. Item 4: the four bold lines in the learner view are exactly the four right answers; the three decoys are plain. If the bolding shows on screen before the answer, the item is answered by formatting alone. Check how this renders. Same question for the bold ticket text in other items: confirm that the bold on screen marks only the question, not the answer.
41. Item 4 pattern: the settings to change are the ones that sound bad (default login, None, two years old, ports 21 and 23); the ones to leave say "On". Fix: make one decoy sound bad but be right (for example "Wi-Fi name broadcast: Off").
42. Item 5 (channel): reachable by taking 1, 6, 11 and removing the two taken. Fine for the fact, but the ticket's "router is on channel 3" is a distraction that does nothing. Low risk. Check 21 and Item 10: the UPnP "Universal Plug and Play" expansion appears only in a reason.
43. Pattern: wrong options in Items 1, 10, 13, 14 and 21 carry absolutes or overreach ("every room", "newest ... reach the farthest", "every port ... nothing can ever be blocked", "so no password is needed at all", "forward every port"). I eliminated them by wording. Fix: write at least one wrong option that is mild and plausible.
44. Check 16 accepts only "Wi-Fi 6". "WiFi 6", "Wi Fi 6", "6" and "ax" may not match after the punctuation rule. Fix: add "WiFi 6", "Wi Fi 6", "Wi-Fi six" and "6" to the accepted answers.
45. Step 6 ("Blaming the line") says only "Test by cable first." and gives no reason. Step 11 gives it, but the wrong idea section itself is thin. Fix: add a sentence on why the cable test splits the path.
46. The label "Your own note, written after an argument" (Step 11 and Item 4) makes no sense to a learner. Fix: rename it "Router settings" or "Your notes".
47. Item 13 reason uses "passphrase" and "Personal security" in a way Step 7 does not (Step 7 says "shared password"). Fix: use one term.
48. Item 10 (camera): the right answer opens the camera to the internet. A learner who remembers the VPN from L14 might call that wrong; VPN is not offered. Fix: add a line to the reason: "A VPN is the safer way when the company has one."

## Contradictions between lessons

- L14 Step 10 (never restart) versus L14 Item 16 (restart): defect 8.
- L14 "adapter", L16 "NIC" and "network card": defect 25.
- L14 Item 23 uses "access point" and "channel"; L17 defines channel later: defects 9 and 26.
- L16 Step 3 says "high latency" for satellite; L14 defined latency for VoIP. Consistent.
- L15 Item 4 and L17 Item 4: ports 21 and 23 are FTP and Telnet there, and L17 lists them as open and unused. Consistent, but L17 never says why they are bad. Fix: add "Telnet and FTP send passwords as readable text" to the L17 reason.
- L16 AAA, L17 RADIUS and TACACS+: RADIUS appears in Step 7 of L17 before Step 8 explains it, and L16 AAA is not linked to them. Fix: say in L17 that RADIUS and TACACS+ are AAA servers.

## Facts asked from memory that were never taught

- L14 Item 13: forget the network, rejoin (defect 2).
- L14 Check 27: nslookup's "Non-existent domain" output (defect 3).
- L16 Item 20: replace the wall cable as a step (defect 23).
- L16 Check 28: sign-ins fail when clocks differ (defect 31).

## Tickets needing a fact they do not give

- L17 Item 2 and Check 18: whether the router offers the other band, and whether the laptop can use it (defect 38).
- L17 Item 7: what speed the line should give (defect 39).
- L16 Item 4: whether cellular is available (defect 32).
