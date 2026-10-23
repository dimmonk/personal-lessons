# CompTIA A+ (220-1201 / 220-1202, V15): exam map

Researched 2026-10-22. Purpose: the full testable map of the current A+ exams, for the IT support subject.

## 0. What was read, and how strong it is

| Source | What | Strength |
|---|---|---|
| CompTIA Core 1 objectives PDF, "Exam Objectives Document Version 3.0", copyright 2024, served from CompTIA's own asset host (assets.ctfassets.net/82ripq7fjls2/.../CompTIA-A-220-1201-Exam-Objectives-3.0.pdf, found via search, not linked from a comptia.org page I could fetch) | Read in full (18 pages): test details, domain weights, every objective and sub-bullet, acronyms, lab list | Official, primary |
| Core 2 objectives PDF, "Exam Objectives Version 2.0", copyright 2024, fetched from onlc.com/comptia/comptia-a-220-1202-exam-objectives.pdf (a training partner's copy of CompTIA's document) | Read in full (20 pages) | CompTIA's document, third-party hosted, **version 2.0 not 3.0**. The official 3.0 file for Core 2 could not be reached (comptia.org PDF URLs 404; the objectives page sits behind a form). Differences 2.0 to 3.0 unknown; treat Core 2 sub-bullets as probably current, verify before shipping |
| comptia.org pages /certifications/a/core-1-v15/, /core-2-v15/, /core-1-and-2-v15/ | Exam code, max questions, length, passing score, launch/retirement estimate, experience | Official page, read via fetch summary |
| comptia.org blog "What is a performance based question" | PBQ definition, types, scoring | Official, read via fetch summary |
| Professor Messer "differences between 220-1102 and 220-1202" and a CompTIA store notice quoted in search results | Retirement dates of the old series, count of changes | Secondary (well-regarded trainer); store notice is CompTIA's |
| Reseller listings (mkausa.org etc.) | Voucher price | Weak; CompTIA states no price on its pages |

Not reached: Core 2 V15 objectives version 3.0 (official); any CompTIA sample-question page; CompTIA's price page. Objective numbers below follow the PDF's own numbering (PDF text extraction prints each number after its block; mapping was checked by count against each domain).

## 1. Exam facts

| | Core 1 (220-1201) | Core 2 (220-1202) |
|---|---|---|
| Max questions | 90 | 90 |
| Types | Multiple-choice and performance-based (the web page adds: single and multiple response, drag-and-drop) | same |
| Length | 90 minutes | 90 minutes |
| Passing score | 675 (scale 100-900) | 700 (scale 100-900) |
| Recommended experience | 12 months hands-on in an IT support specialist job role | same |
| Launch | March 25, 2025 | March 25, 2025 |
| Retirement | "Usually three years after launch (estimated 2028)"; Professor Messer estimates Sept 2028 | same |
| Price | Not stated on CompTIA pages. Resellers list about $190-$200 per exam voucher (weak; one seller says $548, conflicting) | same |

- Certification needs both exams, either order. Either series (1100 or 1200) earns the same A+ credential.
- Predecessor series V14: English 220-1101 and 220-1102 launched April 20, 2022 and retired **September 25, 2025**; other languages (French, German, Japanese, Portuguese, Spanish, Thai) retired December 19, 2025. Both dates are past as of today.
- CompTIA notes the bulleted example lists are not exhaustive. Core 2 note: Windows versions not past Mainstream Support, up to Windows 11, are in scope, so a Windows objective without a named version can cover Windows 10 and 11.
- Official sample hardware/software list (Core 1 PDF) is worth using as the lab bench: Apple/Android/Windows tablets, Chromebook, Windows/Mac/Linux laptops, Windows server with Active Directory, monitors, projectors, SOHO router/switch, access point, VoIP phone, laser/inkjet/wireless/3-D/thermal printers, surge suppressor, UPS, IoT devices, hypervisor server, punchdown block, patch panel; spare motherboards, RAM, drives, PSUs, cards, CPUs, cables, adapters; tools: screwdrivers, multimeter, wire cutters, punchdown, crimper, PSU tester, cable stripper, ESD strap, thermal paste, cable tester, toner, Wi-Fi analyzer, SATA-to-USB.

## 2. Core 1 (220-1201) objectives

Domain weights: 1 Mobile Devices 13% | 2 Networking 23% | 3 Hardware 25% | 4 Virtualization and Cloud Computing 11% | 5 Hardware and Network Troubleshooting 28%.

### 1.0 Mobile Devices (13%)
- **1.1 Given a scenario, monitor mobile device hardware and use appropriate replacement techniques.** Battery; keyboard/keys; RAM; HDD/SSD; wireless cards; physical privacy and security components (biometrics, near-field scanner features); Wi-Fi antenna connector/placement; camera/webcam; microphone.
- **1.2 Compare and contrast accessories and connectivity options for mobile devices.** Connection methods: USB/USB-C/microUSB/miniUSB, Lightning, NFC, Bluetooth, tethering/hotspot. Accessories: stylus, headsets, speakers, webcam. Docking station; port replicator; trackpad/drawing pad/track points.
- **1.3 Given a scenario, configure basic mobile device network connectivity and provide application support.** Wireless/cellular data (enable/disable): 3G/4G/5G, hotspot, Wi-Fi, SIM/eSIM. Bluetooth: enable, enable pairing, find device, enter PIN, test connectivity. Location services (GPS, cellular). MDM: device configurations (corporate, BYOD), policy enforcement, corporate applications. Mobile device synchronization: recognizing data caps, calendar, contacts, business applications (mail, cloud storage).

### 2.0 Networking (23%)
- **2.1 Compare and contrast TCP and UDP ports, protocols, and their purposes.** 20-21 FTP; 22 SSH; 23 Telnet; 25 SMTP; 53 DNS; 67/68 DHCP; 80 HTTP; 110 POP3; 143 IMAP; 137-139 NetBIOS/NetBT; 389 LDAP; 443 HTTPS; 445 SMB/CIFS; 3389 RDP. TCP vs. UDP.
- **2.2 Explain wireless networking technologies.** Frequencies 2.4, 5, 6 GHz. Channels: regulations; channel selection (widths, frequencies, bands). Bluetooth. 802.11 standards. NFC. RFID.
- **2.3 Summarize services provided by networked hosts.** Server roles: DNS, DHCP, fileshare, print, mail, syslog, web, AAA, database, NTP. Internet appliances: spam gateways, UTM, load balancers, proxy servers. Legacy/embedded systems (SCADA). IoT devices.
- **2.4 Explain common network configuration concepts.** DNS records: A, AAAA, CNAME, MX, TXT (spam management: DKIM, SPF, DMARC). DHCP: leases, reservations, scope, exclusions. VLAN. VPN.
- **2.5 Compare and contrast common networking hardware devices.** Routers; switches (managed, unmanaged); access points; patch panel; firewall; PoE (injectors, switch, PoE standards); cable modem; DSL; optical network terminal (ONT); NIC (physical MAC address).
- **2.6 Given a scenario, configure basic wired/wireless SOHO networks.** IP addressing: IPv4 (private, public), IPv6, APIPA, static, dynamic, subnet mask, gateway.
- **2.7 Compare and contrast internet connection types, network types, and their characteristics.** Connections: satellite, fiber, cable, DSL, cellular, WISP. Networks: LAN, WAN, PAN, MAN, SAN, WLAN.
- **2.8 Explain networking tools and their purposes.** Crimper, cable stripper, Wi-Fi analyzer, toner probe, punchdown tool, cable tester, loopback plug, network tap.

### 3.0 Hardware (25%)
- **3.1 Compare and contrast display components and attributes.** Types: LCD (IPS, TN, VA), OLED, Mini-LED. Touch screen/digitizer; inverter. Attributes: pixel density, refresh rates, screen resolution, color gamut.
- **3.2 Summarize basic cable types and their connectors, features, and purposes.** Network cables: copper (categories, T568A/T568B, coaxial, shielded twisted pair with direct burial, unshielded twisted pair with plenum-rated), optical (single-mode, multimode). Peripheral: USB 2.0, USB 3.0, serial, Thunderbolt. Video: HDMI, DisplayPort, DVI, VGA, USB-C. Hard drive: SATA, eSATA. Adapters. Connectors: RJ11, RJ45, F-type, ST, SC, LC, punchdown block, microUSB, miniUSB, USB-C, Molex, Lightning, DB9.
- **3.3 Compare and contrast RAM characteristics.** Form factors SODIMM, DIMM; DDR iterations; ECC vs. non-ECC; channel configurations.
- **3.4 Compare and contrast storage devices.** HDD: spindle speeds, form factors 2.5-inch/3.5-inch. SSD: interfaces NVMe, SATA, PCIe, SAS; form factors M.2, mSATA. Drive configurations: RAID 0, 1, 5, 6, 10. Removable: flash drives, memory cards. Optical drives.
- **3.5 Given a scenario, install and configure motherboards, CPUs, and add-on cards.** Form factors ATX, microATX, ITX. Connectors: PCI, PCIe, power, SATA, eSATA, headers, M.2. Compatibility: CPU sockets (AMD, Intel), multisocket. BIOS/UEFI settings: boot options, USB permissions, TPM security, fan considerations, Secure Boot, boot password, BIOS password, temperature monitoring. Virtualization support. Encryption: TPM, HSM. CPU architecture: x86/x64, ARM, core configurations. Expansion cards: sound, video, capture, NIC. Cooling: fans, heat sink, thermal paste/pads, liquid.
- **3.6 Given a scenario, install the appropriate power supply.** Input 110-120 VAC vs. 220-240 VAC; output 3.3 V vs. 5 V vs. 12 V; 20+4 pin motherboard connector; redundant; modular; wattage rating; energy efficiency.
- **3.7 Given a scenario, deploy and configure multifunction devices/printers and settings.** Unbox and consider location; drivers (PCL vs. PostScript); firmware; connectivity (USB, Ethernet, wireless); public/shared (printer share, print server); settings (duplex, orientation, tray, quality); security (user authentication, badging, audit logs, secured prints); network scan (email, SMB, cloud); ADF/flatbed.
- **3.8 Given a scenario, perform appropriate printer maintenance.** Laser: replace toner, apply maintenance kit, calibrate, clean. Inkjet: cartridge, printhead, roller, feeder; clean printheads, replace cartridges, calibrate, clear jams. Thermal: feed assembly, special paper; replace paper, clean heating element, remove debris. Impact: multipart paper; replace ribbon, printhead, paper.

### 4.0 Virtualization and Cloud Computing (11%)
- **4.1 Explain virtualization concepts.** Purpose of VMs (sandbox, test development, application virtualization with legacy software/OS and cross-platform); requirements (security, network, storage); desktop virtualization (VDI); containers; hypervisors Type 1 and Type 2.
- **4.2 Summarize cloud computing concepts.** Models: private, public, hybrid, community; IaaS, SaaS, PaaS. Characteristics: shared vs. dedicated resources, metered utilization (ingress/egress), elasticity, availability, file synchronization, multitenancy.

### 5.0 Hardware and Network Troubleshooting (28%) (all are "Given a scenario, troubleshoot...", symptom lists)
- **5.1 motherboards, RAM, CPUs, and power.** POST beeps, proprietary crash screens, blank screen, no power, sluggish performance, overheating, burning smell, random shutdown, application crashes, unusual noise, capacitor swelling, inaccurate system date/time.
- **5.2 drive and RAID issues.** LED status indicators, grinding noises, clicking sounds, bootable device not found, data loss/corruption, RAID failure, S.M.A.R.T. failure, extended read/write times, low IOPS, missing drives in OS, array missing, audible alarms.
- **5.3 video, projector, and display issues.** Incorrect input source, physical cabling issues, burnt-out bulb, fuzzy image, display burn-in, dead pixels, flashing screen, incorrect color, audio issues, dim image, intermittent projector shutdown, sizing issues, distorted image.
- **5.4 common mobile device issues.** Poor battery health, swollen battery, broken screen, improper charging, poor/no connectivity, liquid damage, overheating, digitizer issues, physically damaged ports, malware, cursor drift/touch calibration, unable to install new applications, stylus does not work, degraded performance.
- **5.5 network issues.** Intermittent wireless connectivity, slow network speeds, limited connectivity, jitter, poor VoIP quality, port flapping, high latency, external interference, authentication failures, intermittent internet connectivity.
- **5.6 printer issues.** Lines down the pages, garbled print, paper jams, faded prints, paper not feeding, multipage misfeed, multiple prints pending in queue, speckling, double/echo images, grinding noise, finishing issues (staple jams, hole punch), incorrect page orientation, tray not recognized, connectivity issues, frozen print queue.

Core 1 acronym list (in the PDF) also includes items not named in an objective: ACL, AES, EDR, MFA, RADIUS, TACACS, TKIP, WPA, SSID, PXE, QoS, UPnP, WinRM, KVM, LTE, VNC, SFTP, VRAM and others.

## 3. Core 2 (220-1202) objectives (document version 2.0, see section 0)

Domain weights: 1 Operating Systems 28% | 2 Security 28% | 3 Software Troubleshooting 23% | 4 Operational Procedures 21%.

### 1.0 Operating Systems (28%)
- **1.1 Explain common OS types and their purposes.** Workstation OSs: Windows, Linux, macOS, Chrome OS. Mobile: iPadOS, iOS, Android. Filesystems: NTFS, ReFS, FAT32, ext4, XFS, APFS, exFAT. Vendor life-cycle limitations (EOL, update limitations). Compatibility concerns between OSs.
- **1.2 Given a scenario, perform OS installations and upgrades in a diverse environment.** Boot methods: USB, network, solid-state/flash, internet-based, external/hot-swappable, internal drive (partition), multiboot. Installation types: clean, upgrade, image deployment, remote network, zero-touch, recovery partition, repair; third-party drivers. Partitioning GPT vs. MBR; drive format. Upgrade considerations: backup files and preferences, application/driver support and backward compatibility, hardware compatibility. Feature updates; product life cycle.
- **1.3 Compare and contrast basic features of Microsoft Windows editions.** Windows 10: Home, Pro, Pro for Workstations, Enterprise. Windows 11: Home, Pro, Enterprise. N versions. Feature differences: domain vs. workgroup, desktop styles/UI, RDP availability, RAM limits, BitLocker, gpedit.msc. Upgrade paths (in-place, clean). Hardware requirements (TPM, UEFI).
- **1.4 Given a scenario, use Microsoft Windows OS features and tools.** Task Manager (services, startup, performance, processes, users). MMC snap-ins: eventvwr.msc, diskmgmt.msc, taskschd.msc, devmgmt.msc, certmgr.msc, lusrmgr.msc, perfmon.msc, gpedit.msc. Additional: msinfo32.exe, resmon.exe, msconfig.exe, cleanmgr.exe, dfrgui.exe, regedit.exe.
- **1.5 Given a scenario, use the appropriate Microsoft command-line tools.** Navigation: cd, dir. Network: ipconfig, ping, netstat, nslookup, net use, tracert, pathping. Disk: chkdsk, format, diskpart. File: md, rmdir, robocopy. Informational: hostname, net user, winver, whoami, [command] /?. OS management: gpupdate, gpresult, sfc.
- **1.6 Given a scenario, configure Microsoft Windows settings.** Internet Options; Devices and Printers; Programs and Features; Network and Sharing Center; System; Windows Defender Firewall; Mail; Sound; Device Manager; Indexing Options; Administrative Tools; File Explorer Options (view hidden files, hide extensions, general, view). Power Options (hibernate, power plans, sleep/suspend, standby, lid action, fast startup, USB selective suspend). Settings app areas: Ease of Access, Time and Language, Update and Security, Personalization, Apps, Privacy, Devices, Network and Internet, Gaming, Accounts.
- **1.7 Given a scenario, configure Microsoft Windows networking features on a client/desktop.** Domain-joined vs. workgroup (shared resources, printers, file servers, mapped drives). Local OS firewall (application restrictions and exceptions). Client network config: IP addressing, DNS, subnet mask, gateway, static vs. dynamic. Connections: VPN, wireless, wired, WWAN/cellular. Proxy. Public vs. private network. File Explorer network paths. Metered connections.
- **1.8 Explain common features and tools of the macOS/desktop OS.** Install/uninstall apps (.dmg, .pkg, .app, App Store). System folders: /Applications, /Users, /Library, /System, /Users/Library. Apple ID and corporate restrictions. Best practices: backups, antivirus, updates/patches, Rapid Security Response. System Settings: displays, networks, printers, scanners, privacy, accessibility, Time Machine. Features: multiple desktops, Mission Control, Keychain, Spotlight, iCloud (iMessage, FaceTime, Drive), gestures, Finder, Dock, Continuity. Disk Utility; FileVault; Terminal; Force Quit.
- **1.9 Identify common features and tools of the Linux client/desktop OS.** Files: ls, pwd, mv, cp, rm, chmod, chown, grep, find. Filesystem: fsck, mount. Admin: su, sudo. Packages: apt, dnf. Network: ip, ping, curl, dig, traceroute. Info: man, cat, top, ps, du, df. Editor: nano. Config files: /etc/passwd, /etc/shadow, /etc/hosts, /etc/fstab, /etc/resolv.conf. Components: systemd, kernel, bootloader. Root account.
- **1.10 Given a scenario, install applications according to requirements.** System requirements: 32-bit vs. 64-bit, dedicated vs. integrated graphics, VRAM, RAM, CPU, external hardware tokens, storage, app-to-OS compatibility. Distribution: physical media vs. mountable ISO, downloadable package, image deployment. Impact considerations: device, network, operation, business.
- **1.11 Given a scenario, install and configure cloud-based productivity tools.** Email systems; storage (sync/folder settings); collaboration (spreadsheets, videoconferencing, presentation, word processing, instant messaging); identity synchronization; licensing assignment.

### 2.0 Security (28%)
- **2.1 Summarize various security measures and their purposes.** Physical: bollards, access control vestibule, badge reader, video surveillance, alarms, motion sensors, door locks, equipment locks, guards, fences. Physical access: key fobs, smart cards, mobile digital key, keys, biometrics (retina, fingerprint, palm print, facial recognition, voice), lighting, magnetometers. Logical: least privilege, Zero Trust, ACLs, MFA (email, hardware token, authenticator app, SMS, voice call, TOTP, OTP), SAML, SSO, just-in-time access (PAM), MDM, DLP, IAM, directory services.
- **2.2 Given a scenario, configure and apply basic Microsoft Windows OS security settings.** Defender Antivirus (activate/deactivate, update definitions). Firewall (activate/deactivate, port security, application security). Users and groups: local vs. Microsoft account, standard, administrator, guest, power user. Log-in options: username/password, PIN, fingerprint, facial recognition, SSO, passwordless/Windows Hello. NTFS vs. share permissions (attributes, inheritance). Run as administrator vs. standard user; UAC. BitLocker, BitLocker To Go, EFS. Active Directory: joining domain, log-in script, moving objects within OUs, home folders, Group Policy, security groups, folder redirection.
- **2.3 Compare and contrast wireless security protocols and authentication methods.** WPA2, WPA3, TKIP, AES. RADIUS, TACACS+, Kerberos, multifactor.
- **2.4 Summarize types of malware and tools/methods for detection, removal, and prevention.** Malware: Trojan, rootkit, virus, spyware, ransomware, keylogger, boot sector virus, cryptominer, stalkerware, fileless; adware; PUP. Tools: recovery console/environment/modes, EDR, MDR, XDR, antivirus, anti-malware, email security gateway, software firewalls, user education (antiphishing training), OS reinstallation.
- **2.5 Compare and contrast common social engineering attacks, threats, and vulnerabilities.** Social engineering: phishing (vishing, smishing, QR code phishing, spear phishing, whaling), shoulder surfing, tailgating, impersonation, dumpster diving. Threats: DoS, DDoS, evil twin, zero-day, spoofing, on-path, brute-force, dictionary, insider threat, SQL injection, XSS, BEC, supply chain/pipeline. Vulnerabilities: non-compliant, unpatched, unprotected systems (no antivirus/firewall), EOL, BYOD.
- **2.6 Given a scenario, implement procedures for basic SOHO malware removal.** (numbered list, in order) 1. Investigate and verify malware symptoms. 2. Quarantine infected system. 3. Disable System Restore in Windows Home. 4. Remediate infected systems. 5. Update anti-malware software. 6. Scan and removal techniques (e.g., safe mode, preinstallation environment). 7. Reimage/reinstall. 8. Schedule scans and run updates. 9. Enable System Restore and create a restore point in Windows Home. 10. Educate the end user.
- **2.7 Given a scenario, apply workstation security options and hardening techniques.** Data-at-rest encryption. Passwords: length, character types, uniqueness, complexity, expiration. BIOS/UEFI passwords. End-user practices: screensaver locks, log off, protect laptops, secure PII and passwords, password managers. Account management: restrict permissions, restrict log-in times, disable guest, failed-attempt lockout, timeout/screen lock, account expiration. Change default admin account/password; disable AutoRun; disable unused services.
- **2.8 Given a scenario, apply common methods for securing mobile devices.** Device encryption; screen locks (facial, PIN, fingerprint, pattern, swipe); configuration profiles. Patch management (OS, apps). Endpoint security (antivirus, anti-malware, content filtering). Locator apps; remote wipes; remote backup; failed log-in restrictions. Policies: MDM, BYOD vs. corporate-owned, profile security requirements.
- **2.9 Compare and contrast common data destruction and disposal methods.** Physical destruction: drilling, shredding, degaussing, incineration. Recycling/repurposing: erasing/wiping, low-level format, standard format. Outsourcing: third-party vendor, certificate of destruction/recycling. Regulatory and environmental requirements.
- **2.10 Given a scenario, apply security settings on SOHO wireless and wired networks.** Router: change default passwords, IP filtering, firmware updates, content filtering, physical placement, UPnP, screened subnet, secure management access. Wireless: change SSID, disable SSID broadcast, encryption, guest access. Firewall: disable unused ports, port forwarding/mapping.
- **2.11 Given a scenario, configure relevant security settings in a browser.** Download/install from trusted sources (hashing) vs. untrusted; patching; extensions/plug-ins; password managers; secure connections/valid certificates; settings: pop-up blocker, clearing browsing data and cache, private browsing, sign-in/sync, ad blockers, proxy, secure DNS; enable/disable plug-ins, extensions, features.

### 3.0 Software Troubleshooting (23%)
- **3.1 Given a scenario, troubleshoot common Windows OS issues.** BSOD, degraded performance, boot issues, frequent shutdowns, services not starting, applications crashing, low memory warnings, USB controller resource warnings, system instability, no OS found, slow profile load, time drift.
- **3.2 Given a scenario, troubleshoot common mobile OS and application issues.** App fails to launch / close / update / install; slow to respond; OS fails to update; battery life issues; random reboots; connectivity (Bluetooth, Wi-Fi, NFC); screen does not autorotate.
- **3.3 Given a scenario, troubleshoot common mobile OS and application security issues.** Concerns: unofficial app stores, developer mode, root access/jailbreak, unauthorized/malicious app (app spoofing). Symptoms: high network traffic, degraded response time, data-usage limit notification, limited or no internet, many ads, fake security warnings, unexpected app behavior, leaked personal files/data.
- **3.4 Given a scenario, troubleshoot common personal computer security issues.** Unable to access the network; desktop alerts; false antivirus alerts; altered system or personal files (missing/renamed, inaccessible); unwanted OS notifications; OS update failures. Browser: random/frequent pop-ups, certificate warnings, redirection, degraded performance.

### 4.0 Operational Procedures (21%)
- **4.1 Given a scenario, implement best practices associated with documentation and support systems information management.** Ticketing systems: user info, device info, description, categories, severity, escalation levels, clear written communication (issue description, progress notes, resolution). Asset management: inventory lists, CMDB, asset tags/IDs, procurement life cycle, warranty and licensing, assigned users. Documents: incident reports, SOPs (software package custom installation procedure), onboarding checklist, off-boarding checklist, SLAs (internal, external), knowledge base.
- **4.2 Given a scenario, apply change management procedures.** Documented business processes: rollback plan, backup plan, sandbox testing, responsible staff. Change: request forms, purpose, scope, type (standard, normal, emergency), date/time (change freeze, maintenance windows), affected systems/impact, risk analysis (risk level), change board approvals, implementation, peer review, end-user acceptance.
- **4.3 Given a scenario, implement workstation backup and recovery methods.** Backup: full, incremental, differential, synthetic full. Recovery: in-place/overwrite, alternative location. Backup testing (frequency). Rotation: onsite vs. offsite, GFS, 3-2-1 rule.
- **4.4 Given a scenario, use common safety procedures.** ESD straps, ESD mats, electrical safety (equipment grounding), proper component handling and storage, cable management, antistatic bags, compliance with government regulations. Personal safety: disconnect power before repair, lifting techniques, fire safety, safety goggles, air filter mask.
- **4.5 Summarize environmental impacts and local environment controls.** MSDS (battery, toner, other disposal). Temperature, humidity, ventilation (placement, dust cleanup, compressed air/vacuums). Power surges, under-voltage, power loss (UPS, surge suppressor).
- **4.6 Explain the importance of prohibited content/activity and privacy, licensing, and policy concepts.** Incident response: chain of custody, inform management/law enforcement, copy of drive (integrity), incident documentation, order of volatility. Licensing/DRM/EULA: valid, perpetual, personal vs. corporate, open-source. NDA/MNDA. Regulated data: credit card, government-issued, PII, healthcare, retention. AUP. Regulatory and business compliance (splash screens).
- **4.7 Given a scenario, use proper communication techniques and professionalism.** Professional appearance/attire (formal, business casual); proper language, avoid jargon/acronyms/slang; positive attitude; actively listen, do not interrupt; culturally sensitive (professional titles); on time (call if late); avoid distractions (personal calls, texting, interruptions); handle difficult customers (do not argue or be defensive, do not dismiss, do not judge, clarify with open-ended questions and restating, use discretion about experiences); set and meet expectations/timeline, communicate status (offer repair/replacement options, provide documentation, follow up later); handle confidential and private materials.
- **4.8 Explain the basics of scripting.** File types: .bat, .ps1, .vbs, .sh, .js, .py. Use cases: basic automation, restarting machines, remapping network drives, installing applications, automated backups, gathering information, initiating updates. Risks: unintentionally introducing malware, inadvertently changing system settings, crashes from mishandled resources.
- **4.9 Given a scenario, use remote access technologies.** RDP, VPN, VNC, SSH, RMM, SPICE, WinRM, third-party tools (screen-sharing, videoconferencing, file transfer, desktop management); security considerations of each method.
- **4.10 Explain basic concepts related to AI.** Application integration; policy (appropriate use, plagiarism); limitations (bias, hallucinations, accuracy); private vs. public (data security, source, privacy).

## 4. Troubleshooting methodology (as it appears in the current objectives)

Verbatim from the Core 1 (220-1201) V15 objectives PDF, version 3.0, section "Troubleshooting Methodology Knowledge":

> During the job task analysis workshop for the A+ 220-1200 series, subject matter experts deemed the troubleshooting methodology an effective best practice that new job incumbents should be aware of and leverage as they engage in troubleshooting new issues on the job. However, while this methodology is practical, the decision was made to not include it in the exam. While the methodology itself will not be tested, there remains an emphasis on troubleshooting within the job role context. [...] does not constitute a formal objective or part of the A+ certification exam. Training institutions that prepare individuals with very little technical knowledge and experience are encouraged to leverage this methodology, especially when such individuals might be applying for their first IT job.

The steps:
1. Identify the problem.
2. Establish a theory of probable cause (question the obvious).
   - Research knowledge base/internet, if applicable.
3. Test the theory to determine the cause.
4. Establish a plan of action to resolve the problem and implement the solution.
5. Verify full system functionality and, if applicable, implement preventive measures.
6. Document findings/lessons learned, actions, and outcomes.

Important findings for the lesson writer:
- In V15 the methodology is **not an exam objective** (from memory, not verified here: the older V14 series had it as a tested objective with fuller sub-bullets such as gather information, duplicate the problem, question users, determine what changed, divide and conquer, escalate). The six steps above are guidance only and carry just one sub-bullet. The Core 2 v2.0 copy read here contains no methodology section at all; the official 3.0 may.
- The exam tests troubleshooting through the symptom lists (Core 1 5.1-5.6, Core 2 3.1-3.4) and the SOHO malware-removal order (Core 2 2.6, a 10-step ordered list that is tested as an objective).

## 5. Reasoning vs recall, objective by objective

R = reasoning (decide, diagnose, troubleshoot, choose, configure from a scenario). F = recall (name, identify, compare facts). The objective verb is "Given a scenario" for R, "Compare and contrast/Explain/Summarize/Identify" for F; many F objectives still reward a reason ("which cable for this run?").

**Core 1**
- 1.1 R (replace which part, how). 1.2 F. 1.3 R (configure, support).
- 2.1 F (port numbers; the part to memorize). 2.2 F. 2.3 F. 2.4 F (with mild R: which DNS record). 2.5 F. 2.6 R (addressing, SOHO). 2.7 F. 2.8 F (tool for the job: light R).
- 3.1 F. 3.2 F (cable/connector for the job). 3.3 F. 3.4 F (RAID levels: compare, mild R). 3.5 R (install, configure, compatibility). 3.6 R. 3.7 R. 3.8 R.
- 4.1 F. 4.2 F.
- 5.1 R. 5.2 R. 5.3 R. 5.4 R. 5.5 R. 5.6 R. (all symptom-to-cause diagnosis; 28% of Core 1 plus the scenario items elsewhere)
- Rough split: reasoning/scenario objectives cover about 14 of 28 objectives and, by weight, more than half of the exam; the recall base is ports, cables, RAID, wireless, cloud models.

**Core 2**
- 1.1 F. 1.2 R. 1.3 F. 1.4 R (which tool). 1.5 R (which command) with recall of command names. 1.6 R. 1.7 R. 1.8 F. 1.9 F. 1.10 R. 1.11 R.
- 2.1 F. 2.2 R. 2.3 F. 2.4 F (identify from description). 2.5 F (identify attack from scenario: light R). 2.6 R (ordered procedure). 2.7 R. 2.8 R. 2.9 F (compare; choose method by case). 2.10 R. 2.11 R.
- 3.1 R. 3.2 R. 3.3 R. 3.4 R.
- 4.1 R. 4.2 R. 4.3 R (which backup type/rotation). 4.4 F. 4.5 F. 4.6 R (what to do with evidence/license/data) . 4.7 R (what to say or do with a customer). 4.8 F. 4.9 R (which tool). 4.10 F.

## 6. How A+ is prepared for and what PBQs look like

- **PBQ definition (CompTIA blog, official, strong):** tasks done in a simulated environment, reflecting real job problem-solving. Two kinds: *simulations* (a limited environment such as a firewall, network diagram or operating system with several valid solution paths) and *virtual environments* (real OS and software in a VM). Both are scored in real time by Pearson VUE; the scoring is confidential, some PBQs give partial credit; per-question points are not disclosed. A+ pages state PBQs are among the 90 questions but give no count or sample.
- **Commonly reported A+ PBQ forms (secondary: StationX, Infosec Institute, trainers; medium-weak, CompTIA does not publish):** a few (about 3-6, reportedly up to 10) at the start of the exam, worth flagging and returning to; typical tasks: drag-and-drop matching (ports to services, cables to connectors, RAID to descriptions, attack types), ordering steps (malware removal, install sequence), configuring a SOHO router or wireless settings in a mock admin page, picking command-line output meaning, building a PC from parts, setting Windows permissions or firewall rules. These shapes follow directly from the objectives (2.1, 3.2, 3.4, 2.6, 2.10, 1.5, 2.2).
- **Preparation paths (official pages, strong for what exists; weak for popularity):** CompTIA CertMaster Learn (25-40 h), Perform (30-60 h, with labs), Practice (10-20 h timed quizzes); official study guide; Professor Messer free videos and notes (named in CompTIA's own blog); hands-on labs using the sample lab list in section 1. CompTIA says its CertMaster resources include example PBQs and a practice-test simulation. CompTIA recommends: download the objectives, mark known vs. new skills, build a plan, practice hands-on.
- **Implication for lesson design:** the exam rewards (a) instant recall of the F list (ports, cables, connectors, RAID, DNS records, wireless standards, malware and attack names, command and tool names) and (b) scenario handling of symptoms, commands, and ordered procedures. The six-step methodology and the 10-step malware order are the two sequences worth drilling as ordered reasoning.

## 7. Open items

- Obtain the official Core 2 objectives version 3.0 (CompTIA's form-gated download) and diff against section 3.
- 802.11 standards are not enumerated in the objectives, only named ("802.11 standards"); the lesson must decide the depth (a/b/g/n/ac/ax, 2.4/5/6 GHz).
- Price: confirm on CompTIA's store if the lessons mention it.
