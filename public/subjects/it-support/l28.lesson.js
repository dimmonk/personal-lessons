// IT Help Desk, lesson 28: Policy, scripts, remote access, AI and the cloud (part rules). Core 2 objectives 4.6 (licensing, agreements, regulated data, policy), 4.8 (scripting), 4.9 (remote access), 4.10 (AI), and Core 1 4.1 (virtualization) and 4.2 (cloud) of the A+ map
// (docs/research/it-support-aplus.md). These are recall objectives, so each group is taught by the decision it answers on a ticket (which license, what may be pasted, which remote tool for a Linux server,
// which cloud level), then asked from memory and as a choice (IT25, IT26, IT27: self-quizzing with feedback, spaced, beats rereading; IT28, IT9: the worked ticket shows a wrong first guess that one check rules out).
// Plan: docs/subjects/it-support/plan.md, lesson 28; rulings-l1-8.md and rulings-l9-13.md.
// Facts checked 2026-10-23: SSH 22, RDP 3389, WinRM 5985/5986, hypervisor types, cloud models (known, not re-fetched); VBScript is being retired by Microsoft (hence "older, being retired"). Pronouns: named ticket people are named or "they" (ruling 22).
// Strands: policy, scripts, remote, ai, virtual, cloud. One worked ticket; a first group of five with the help shown; a second of eight; a third of seven mixed with lessons 26 and 27; the check: six new questions,
// one per strand, 5 of 6 to pass. Three reserve questions for each strand.
FC.lesson('it-support', {
  id: 'l28', part: 'rules', title: 'Policy, scripts, remote access, AI and the cloud', rev: 2, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, split from the first draft of lesson 27 (licenses and regulated data, scripts, remote access, AI, virtual machines and cloud models; each taught by the decision it answers on a ticket, then asked from memory and as a choice).' }, { rev: 2, date: "2026-10-23", change: "Fixes from the learner and research reviews; names made unique across the subject and people called by name or they." }],
  why: [
    'It is 8 p.m. A user pastes a customer’s card details into a public AI chatbot. A new hire runs a script from a forum. A branch needs its Linux server restarted from home. Each is a small rule.',
    'Six groups of those rules follow. Read a rule once, watch it used, then answer from memory.'],
  flow: [
    { title: 'Licenses, agreements, regulated data and policy',
      show: [{ kind: 'document', form: 'table', title: 'The term and what it means on a ticket', head: ['Term', 'What it means'], rows: [
        { id: 'p1', cells: ['Valid license', 'Permission to use software. Perpetual: pay once. Subscription: valid only while paid'] },
        { id: 'p2', cells: ['EULA', 'The end user license agreement, the terms you accept when you install'] },
        { id: 'p3', cells: ['DRM', 'Digital rights management: limits on copying content you bought'] },
        { id: 'p4', cells: ['Personal vs corporate', 'A personal license is for one person’s use. A company needs corporate (business or volume) licenses'] },
        { id: 'p5', cells: ['Open source', 'Its code is public and free to use, but it still has license terms'] },
        { id: 'p6', cells: ['NDA, MNDA', 'Nondisclosure agreement: a promise not to share the other side’s secrets. Mutual (MNDA): both sides promise'] },
        { id: 'p7', cells: ['Regulated data', 'Credit card numbers, government IDs (passport, Social Security number), PII (personally identifiable information, such as a name with an address) and healthcare records. Only people who need it handle it, in approved channels, never personal email; retention rules say how long to keep records'] },
        { id: 'p8', cells: ['AUP', 'Acceptable use policy: what staff may do with company computers and networks. A splash screen before sign-in makes people accept it'] }] }] },
    { title: 'Scripts: a file that does the typing for you',
      show: [{ kind: 'document', form: 'table', title: 'Script file types', head: ['Ending', 'What it is', 'Runs on'], rows: [
        { id: 'x1', cells: ['.bat', 'A batch file: Command Prompt commands in a row', 'Windows'] },
        { id: 'x2', cells: ['.ps1', 'A PowerShell script', 'Windows'] },
        { id: 'x3', cells: ['.vbs', 'An older Windows scripting language, being retired', 'Windows'] },
        { id: 'x4', cells: ['.sh', 'A shell script', 'Linux and macOS'] },
        { id: 'x5', cells: ['.js', 'JavaScript, found in web pages', 'Web browsers and other hosts'] },
        { id: 'x6', cells: ['.py', 'A Python script', 'Any system with Python installed'] }] },
      { kind: 'prose', text: [
        'Scripts automate restarting machines, remapping drives, installing apps, backups, gathering information and starting updates. Three risks: an unknown script can bring in malware; it can change settings nobody meant to change; a bad one can crash the machine by using up memory or leaving files open. Read it first and test it on one machine or in a sandbox.'] }] },
    { title: 'Remote access: which tool reaches that machine',
      show: [{ kind: 'document', form: 'table', title: 'The remote tools', head: ['Tool', 'What it does', 'Watch out'], rows: [
        { id: 'r1', cells: ['RDP', 'Remote Desktop Protocol: the full Windows desktop of another computer', 'Never open it straight to the internet; use a VPN, strong sign-in and MFA (a second proof of identity)'] },
        { id: 'r2', cells: ['VPN', 'An encrypted tunnel into the company network, to the shares and servers. Not a screen tool', 'A hacked laptop on a VPN brings the attacker in'] },
        { id: 'r3', cells: ['VNC', 'Shows and controls the screen of another computer, on any system', 'Often weakly protected; run it inside a VPN or SSH tunnel'] },
        { id: 'r4', cells: ['SSH', 'Secure Shell: encrypted typed commands on a Linux server or network device, through port 22', 'Use strong sign-in'] },
        { id: 'r5', cells: ['RMM', 'Remote monitoring and management: an agent on each machine lets the desk patch, watch and control hundreds from one console', 'One account controls every machine, so protect it with MFA'] },
        { id: 'r6', cells: ['SPICE', 'A remote display for virtual machines', 'Turn on its encryption'] },
        { id: 'r7', cells: ['WinRM', 'Windows Remote Management: runs PowerShell commands on remote Windows machines (ports 5985, 5986)', 'Use the encrypted setup'] },
        { id: 'r8', cells: ['Third-party tools', 'Screen-sharing, video meeting, file transfer and desktop apps', 'The user agrees first; end the session when done; only approved tools'] }] }] },
    { title: 'AI: what to paste, and what to trust',
      show: [{ kind: 'prose', text: [
        'AI tools write text and code. Built into other software (application integration), such as email that drafts replies, they fall under company policy.',
        'Plagiarism is handing in AI text, or anyone’s work, as your own. Three limits: bias (answers lean the way the training data leaned), hallucinations (a confident answer with invented facts or commands) and accuracy (it can be wrong, so check before you act). A public AI service may keep what you type, so never paste passwords, customer data or company secrets into it. A private one run by the company keeps data inside.'] }] },
    { title: 'Virtual machines, containers and hypervisors',
      show: [{ kind: 'prose', text: [
        'A virtual machine (VM) is a computer made of software inside a real one, the host; the VM is the guest. VMs serve as a sandbox (a sealed place to open a suspicious file, then delete), for test and development, for legacy software (an old program that needs an old Windows; keep that VM off the network or on a private virtual network) and for cross-platform use (Windows on a Mac). Application virtualization runs one app in its own sealed space.'] },
      { kind: 'document', form: 'table', title: 'What a VM host needs', head: ['Need', 'Why'], rows: [
        { id: 'm1', cells: ['Security', 'Its own updates and antivirus, kept apart from the other VMs'] },
        { id: 'm2', cells: ['Network', 'A virtual network card, on the real network or kept private'] },
        { id: 'm3', cells: ['Storage', 'Each VM’s disk is a large file on the host; it also needs memory, processor and the processor’s virtualization feature turned on in firmware'] }] },
      { kind: 'prose', text: [
        'Desktop virtualization (VDI) runs people’s desktops as VMs on servers, so they sign in from any device. A container packs one app with what it needs and shares the host’s operating system, so it is small and starts in seconds. A hypervisor runs VMs. Type 1 runs on the hardware (bare metal), for servers. Type 2 runs as a program on an ordinary operating system, such as VirtualBox.'] }] },
    { title: 'Cloud: where it lives and who runs what',
      show: [{ kind: 'document', form: 'table', title: 'Four cloud models', head: ['Model', 'Who uses it'], rows: [
        { id: 'k1', cells: ['Private', 'One organization only'] },
        { id: 'k2', cells: ['Public', 'Many customers, on a provider’s systems'] },
        { id: 'k3', cells: ['Hybrid', 'A private cloud and a public one working together'] },
        { id: 'k4', cells: ['Community', 'Organizations with the same needs share it, such as hospitals'] }] },
      { kind: 'document', form: 'table', title: 'Three service levels', head: ['Level', 'You get', 'You manage'], rows: [
        { id: 'k5', cells: ['IaaS', 'Infrastructure as a service: virtual servers, storage and network', 'The operating system and everything above it'] },
        { id: 'k6', cells: ['PaaS', 'Platform as a service: a place to build and run your app', 'Your app and its data'] },
        { id: 'k7', cells: ['SaaS', 'Software as a service: a finished app, such as email', 'Only your account and data'] }] },
      { kind: 'prose', text: [
        'Traits: shared resources cost less; dedicated ones are reserved for you. Metered utilization: you pay for what you use; ingress is data in, egress is data out, priced differently. Elasticity: it grows and shrinks with demand. Availability: it stays up. File synchronization keeps the same files on every device. Multitenancy: many customers share the same systems, kept apart.'] }] },
    { title: 'Running it first and reading it later',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“It looks harmless, and the forum says it fixes everything. I will run it now and read it later.”',
        'The same shortcut hides in every group: a script run unread, a pasted customer detail, an open remote door. The damage is done before anyone knows what ran.'] }] },
    { worked: 'l28-w-remote' },
    { set: { items: ['l28-p-remote', 'l28-p-vm', 'l28-q-license', 'l28-q-script', 'l28-q-ai'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l28-q-cloud', 'l28-q-pii', 'l28-q-winrm', 'l28-q-hybrid', 'l28-q-ingress', 'l28-q-public', 'l28-g-nda', 'l28-g-bat'], order: 'shuffle' } },
    { set: { items: ['l28-g-vnc', 'l28-g-hyper', 'l28-g-saas', 'l28-g-halluc', 'l28-g-vdi', 'l28-g-drm', 'l28-g-ssh'], order: 'shuffle', mix: { from: ['l26', 'l27'], share: 0.3 } } }
  ],
  check: {
    items: ['l28-k-policy', 'l28-k-scripts', 'l28-k-remote', 'l28-k-ai', 'l28-k-virtual', 'l28-k-cloud'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 5 } }]
  }
});
