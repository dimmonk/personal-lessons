
## Lesson 15

Files: `l15.lesson.js`, `items-l15.js`, `items-l15-check.js`. No slips added; rev stays 1.

- **TCP/UDP (learner 20, research 1, 2).** New table of delivery for all 14 services (DNS UDP short and TCP big; NetBIOS 137/138 UDP, 139 TCP; LDAP and RDP "mostly" TCP). New questions: `l15-q-dns`, `l15-t-tcp`, `l15-k-dns`, `l15-k-split`, reserve `l15-r-ldaptcp`; `l15-t-udp` now asks NetBIOS 137. Check is 12 questions, pass 10.
- **Firewall tables (learner 15, research 3).** Port numbers only, several blocked lines, and options that are numbers or blocked-line claims so the service must be recalled. New `l15-t-none`: "None" is right (53 is allowed).
- **Wrong options (learner 16, research 6).** "None: restart/clear data" replaced by novice moves or port mix-ups (22 as Telnet, SSH for shares).
- **Wording (learner 17, 18, 21, research 4, 5).** "fourteen services" in four kinds of job; rule direction line; Linux and TCP explained at first use; NetBIOS accepts "NetBIOS over TCP/IP"; FTP port 20 "in the usual (active) mode"; SMTP notes 587.
- **Hooks (learner 22).** Front door 21 / back door 20; 137, 138, 139 "in that order".
- **Names, mix.** Priya renamed Anita; third group now mixes lessons 14 and 5.
- **Checks.** Option lengths ✓ l15; no validator failure names l15 (the subject's other rules were skipped by a shape error in l22, not l15); reading share about 35% by hand count.

## Lesson 17

Files: `l17.lesson.js`, `items-l17.js`, `items-l17-check.js`, `items-l17-reserve.js`. No slips added; rev stays 1.

- **Corrupted text (research 1, learner 36, 37).** The "headset" strings are gone from all seven places; options and accept lists read plain "NFC" and "RFID" (grep for "headset" now finds only the Bluetooth row and the headset ticket).
- **Facts.** 80 MHz on 2.4 GHz is now 40 MHz and is called "not strength"; "should stay at 20"; column head "Top speed on paper" and a line that real speeds are lower; units line (GHz, MHz, Mbps, Gbps); "an ordinary device"; DMZ host is not a screened subnet; SSID broadcast row says the exam lists it; firmware defined; UPnP expanded.
- **Security.** Port-forward ticket: camera has the default password and no VPN; right answer is forward 8080 once its password is changed, reason names the VPN; wrong option "password only matters inside". Ports 21 and 23 explained (readable passwords). RADIUS and TACACS+ named as AAA servers with the UDP/TCP and three-jobs contrasts; check question now asks which keeps the three jobs apart.
- **Tickets state what the router offers (learner 38, 39).** Worked ticket, `l17-p-lunch` and the new `l17-k-far` (6 GHz range, three names offered); Gus "we pay for 300 Mbps"; analyzer count fixed (research 8); firmware check says the change is approved.
- **Pattern and bundles.** `p-walls`, `g-ssid`, `s-forward` wrong options made mild; `p-setup` decoy "name broadcast: Off"; `p-wpa3` gains "WPA2 with AES" decoy; `k-upnp`, `r-pw`, `s-forward` asked as one change; `g-auth` no longer echoes "WPA3 only". Ten 3-option reserve questions now have 4. Accept lists add "WiFi 6", "WiFi 4". `p-setup` ids renumbered. Priya renamed Rosa. Third group mixes lessons 5 and 9.
- **Checks.** Option lengths ✓ l17 and reserve; no validator failure names l17 (the subject's other rules were skipped by a shape error in l21, not l17); learner view re-rendered.

## Lesson 14

Files: `l14.lesson.js`, `items-l14.js`, `items-l14-check.js`. Rev stays 1. Validator not run (owner's Mac overloaded; coordinator runs it); `option-lengths` shows ✓ l14.

- **Output as tables (learner 1).** The two ipconfig tables are one three-column table (got an address / made one up, with the mask row). Real pathping (Source to Here, This Node/Link) and three nslookup results are shown; `l14-k-pathping` uses the real form (research 10, learner 3).
- **Taught before asked.** Forget the network and join again (learner 2); unreachable counts as received, and from your own address means no device locally (6, 7); restart exception when everyone is down and one box is the cause (8); 127.0.0.1 (14); TTL, switch, adapter, modem, VLAN, proxy, lease explained at first use (9). Latency wording fixed (research 4).
- **Facts.** Triangle means Windows could not confirm internet (research 1); "most other addresses are public" (8); `l14-s-alldown` states the router is the DHCP server (2); VLAN ticket says it fails by address too (6); `l14-g-public` uses a quoted desk rule (7); worked ticket quotes the hand-on rule (11); gateway ping option and feedback fixed (learner 4, research 3).
- **Coverage.** Mask lesson step (/24, /16) and items `l14-s-samenet`, `l14-s-mask`; DMARC `l14-s-spoof`, DKIM `l14-r-dkim`; cellular WWAN `l14-s-cell` and a connection-type row; firewall exception row and `l14-g-exception`.
- **Pattern.** Item 5 option 4 is a cause; the call `l14-x-call` is now say-back then an action (no question wins); proxy and Private giveaways removed; a free test that does not split added to `l14-s-slow`; `l14-r-nic` is right with a replacement; reservation sentence dropped (10). Priya renamed Odette. Right option longest in 7 of 32.
- **Reading share.** Moved `l14-r-nic` and `l14-r-vpn` into the third group and trimmed text; the V73 share is not measured and may still need a trim.

## Lesson 16
- **Facts.** MAC is 12 hexadecimal digits (lesson and `l16-k-nic`); PoE table says power at the port, device gets a little less; camera question uses 20 watts; satellite wording "older", low-orbit noted; fiber "often the fastest"; "Kinds of network" title; router is fed by the modem or ONT.
- **Taught before asked.** NIC aliases, Ethernet, RJ45, RJ11, coax, pins, analyzer, channel, queue, antivirus, content filter, intruder alarm explained at first use; plenum dropped; managed-switch ownership stated in step 2; NTP five-minute sign-in fact; re-punch step taught.
- **Coverage.** PoE standards (`l16-s-injector`, `l16-r-poe-std`, `l16-r-poe-at`), 100 m (`l16-r-100m`), SCADA, IoT split in two (password, then separate network), UTM, cellular, firewall by port, server roles file, print, mail, web, database.
- **Pattern.** Tickets describe the situation, not the table row; every choice question has four options with real novice slips; worked ticket quotes the desk's hand-on rule and explains why no tester yet; `l16-g-replace` states both ends were re-punched; farm ticket says no cell signal; mixed group (lessons 14, 15) added.
- **Reading share.** Six reserves moved into groups; V73 not measured (validator withheld), may need a trim. Not run: validator, lock, learner-view render.

## Round 2 minors

Files edited: `l14` to `l17` lesson files and their items files. Validator, lock and renderer not run; `node --check` passes and `option-lengths` shows ✓ l14 to l17. No reading text added beyond a few words (several clauses swapped, not added).

- **L17.** Screened subnet row says a router's "DMZ host" setting is different (exposes one device fully); "An ordinary device uses one band at a time"; channels differ by country (US 1 to 11); port forwarding "also called port mapping", reserved fixed address; Mbps defined at first use; firmware row says save settings, then update; `l17-p-wpa3` options rewritten in one pattern (reason first, equal length, right one not shortest); `l17-s-tkip` says "WPA2 with AES"; `l17-r-bt` last option is Wi-Fi, not a wired link.
- **L15.** Mail program ticket set to send on SMTP's own port, `l15-k-smtp` asks for the exam's port; "exam lists X as TCP" replaced by "normally TCP" with the UDP form named (table rows too); shortcut says "of these services"; `l15-w-rdp` quotes the desk rule; `l15-p-imap` and `l15-r-ldaptcp` now have four options.
- **L16.** PoE++ is 90 W at the port (not 100) in the lesson and items; `l16-g-replace` ticket adds a new jack and says a new cable is the step the ticket supports; `l16-p-poe` switch has no PoE.
- **L14.** Flap reason no longer a generalization; `l14-g-public` ticket says the office's conference room Wi-Fi; `l14-r-nic` drops "light stays off" and the ticket adds an enabled adapter; `l14-k-pathping` has the desk rule; tracert note says "usually a break"; 8.8.8.8 marked as answering pings; proxy path taught; `l14-s-samenet` says .80 is free.
- **Not done:** bundled preconditions in `l17-s-forward` and `l17-k-fw` (judged one task); unglossed words (modem, hotspot, phishing, worm); L14 learner defects 4, 5, 8, 9.

### Round 2 minors, finished
- **L17 bundles:** `l17-k-fw` right option is only "Install the new firmware tonight" (save-first moved to the reason); `l17-s-forward` ticket says the password is already changed, right option only "Forward port 8080", decoy now "forward every port".
- **Glosses:** modem, phone hotspot, eSIM, intranet, network discovery (L14); malware, phishing, worm (L17).
- **L14 learner defects:** 4 (past the gateway named in Step 1), 5 ("Non-existent domain" in the nslookup row), 8 (Wi-Fi signal, distance, interference in Step 1), 9 (Ethernet means a cable); proxy path taught earlier.
- Checks: `node --check` passes; option-lengths ✓ l14 to l17.
