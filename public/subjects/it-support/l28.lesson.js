// IT Help Desk, lesson 28: Policy, scripts, remote access, AI and the cloud (part rules). Core 2 objectives 4.6 (licensing, agreements, regulated data, policy), 4.8 (scripting), 4.9 (remote access), 4.10 (AI), and Core 1 4.1 (virtualization) and 4.2 (cloud) of the A+ map
// (docs/research/it-support-aplus.md). These are recall objectives, so each group is taught by the decision it answers on a ticket (which license, what may be pasted, which remote tool for a Linux server,
// which cloud level), then asked from memory and as a choice (IT25, IT26, IT27: self-quizzing with feedback, spaced, beats rereading; IT28, IT9: the worked ticket shows a wrong first guess that one check rules out).
// Plan: docs/subjects/it-support/plan.md, lesson 28; rulings-l1-8.md and rulings-l9-13.md.
// Strands: policy, scripts, remote, ai, virtual, cloud. One worked ticket; a first group of five with the help shown; a second of eight; a third of seven mixed with lessons 26 and 27; the check: six new questions,
// one per strand, 5 of 6 to pass. Three reserve questions for each strand.
FC.lesson('it-support', {
  id: 'l28', part: 'rules', title: 'Policy, scripts, remote access, AI and the cloud', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, split from the first draft of lesson 27 (licenses and regulated data, scripts, remote access, AI, virtual machines and cloud models; each taught by the decision it answers on a ticket, then asked from memory and as a choice).' }],
  why: [
    'It is 8 p.m. A user pastes a customer’s card details into a public AI chatbot. A new hire runs a script from a forum on the accounting PC. A branch needs its Linux server restarted from home. Each one is a small rule: what may be installed, run, pasted or reached, and by which tool.',
    'Here are six small groups of those rules. Each answers a question from a ticket: which license, what must not go into this tool, which remote tool for a Linux server, which cloud model or level. You read each rule once, watch it used, then answer from memory and as a choice.'],
  flow: [
    { title: 'Licenses, agreements, regulated data and policy',
      show: [{ kind: 'document', form: 'table', title: 'The term and what it means on a ticket', head: ['Term', 'What it means'], rows: [
        { id: 'p1', cells: ['Valid license', 'Permission to use software. Perpetual: pay once, use for good. Subscription: valid only while paid'] },
        { id: 'p2', cells: ['EULA', 'The end user license agreement, the terms you accept when you install'] },
        { id: 'p3', cells: ['DRM', 'Digital rights management: limits on copying or playing content you bought'] },
        { id: 'p4', cells: ['Personal vs corporate', 'A personal license is for one person’s own use. A company needs corporate (business or volume) licenses'] },
        { id: 'p5', cells: ['Open source', 'The program’s code is public and free to use, but still comes with license terms'] },
        { id: 'p6', cells: ['NDA, MNDA', 'Nondisclosure agreement: a promise not to share the other side’s secrets. Mutual (MNDA): both promise'] },
        { id: 'p7', cells: ['Regulated data', 'Credit card numbers, government-issued IDs (passport, Social Security number), PII (personally identifiable information, such as a name with an address) and healthcare records. Only people who need it handle it; retention rules say how long to keep records'] },
        { id: 'p8', cells: ['AUP', 'Acceptable use policy: what staff may do with company computers and networks. A splash screen, a notice shown before sign-in, makes people accept it'] }] }] },
    { title: 'Scripts: a file that does the typing for you',
      show: [{ kind: 'document', form: 'table', title: 'Script file types', head: ['Ending', 'What it is', 'Runs on'], rows: [
        { id: 'x1', cells: ['.bat', 'A batch file: Command Prompt commands in a row', 'Windows'] },
        { id: 'x2', cells: ['.ps1', 'A PowerShell script', 'Windows'] },
        { id: 'x3', cells: ['.vbs', 'A VBScript, an older Windows scripting language', 'Windows'] },
        { id: 'x4', cells: ['.sh', 'A shell script', 'Linux and macOS'] },
        { id: 'x5', cells: ['.js', 'JavaScript, found in web pages and some tools', 'Web browsers and other hosts'] },
        { id: 'x6', cells: ['.py', 'A Python script', 'Any system with Python installed'] }] },
      { kind: 'prose', text: [
        'Scripts do basic automation: restarting machines, remapping network drives, installing applications, running backups, gathering information and starting updates. Three risks: a script from an unknown source can bring in malware; it can change system settings nobody meant to change; a badly written one can crash the machine by using up memory or leaving files open. Read it first and test it on one machine or in a sandbox.'] }] },
    { title: 'Remote access: which tool reaches that machine',
      show: [{ kind: 'document', form: 'table', title: 'The remote tools', head: ['Tool', 'What it does', 'Watch out'], rows: [
        { id: 'r1', cells: ['RDP', 'Remote Desktop Protocol: the full Windows desktop of another computer', 'Never open it straight to the internet; use a VPN, strong sign-in and MFA (a second proof of who you are)'] },
        { id: 'r2', cells: ['VPN', 'An encrypted tunnel into the company network. Not a screen tool: it gets you to the shares and servers', 'A hacked laptop on a VPN brings the attacker inside'] },
        { id: 'r3', cells: ['VNC', 'Shows and controls the screen of another computer, on any system', 'Often weakly protected; run it inside a VPN or an SSH tunnel'] },
        { id: 'r4', cells: ['SSH', 'Secure Shell: encrypted typed commands on a Linux server or network device (port 22)', 'Use strong sign-in'] },
        { id: 'r5', cells: ['RMM', 'Remote monitoring and management: a small program (an agent) on each machine lets the desk patch, watch and control hundreds from one console', 'One account controls every machine, so protect it with MFA'] },
        { id: 'r6', cells: ['SPICE', 'A remote display for virtual machines', 'Turn on its encryption'] },
        { id: 'r7', cells: ['WinRM', 'Windows Remote Management: runs PowerShell commands on remote Windows machines (ports 5985 and 5986)', 'Use the encrypted setup'] },
        { id: 'r8', cells: ['Third-party tools', 'Screen-sharing, video meeting, file transfer and desktop management apps', 'The user agrees first; end the session when done; only tools the company allows'] }] }] },
    { title: 'AI: what to paste, and what to trust',
      show: [{ kind: 'prose', text: [
        'AI tools write text and code and answer questions. Companies build them into other software (application integration), such as email that drafts replies. Company policy says which tools staff may use and what data may go in.',
        'Plagiarism is handing in AI text, or anyone’s work, as your own without credit. Three limits: bias (answers lean the way the training data leaned), hallucinations (a confident answer with invented facts, commands or links) and accuracy (it can simply be wrong, so check before you act). Public or private matters most: a public AI service may keep what you type, so never paste passwords, customer data or company secrets into it. A private one run by the company keeps data inside.'] }] },
    { title: 'Virtual machines, containers and hypervisors',
      show: [{ kind: 'prose', text: [
        'A virtual machine (VM) is a computer made of software that runs inside a real one. The real one is the host; the VM is the guest. VMs serve as a sandbox (a sealed place to open a suspicious file, then delete), for test and development (a failure harms nothing), for legacy software (an old program that needs an old Windows) and for cross-platform use (a Windows program on a Mac).'] },
      { kind: 'document', form: 'table', title: 'What a VM host needs', head: ['Need', 'Why'], rows: [
        { id: 'm1', cells: ['Security', 'Every VM needs its own updates and antivirus, and must be kept apart from the others'] },
        { id: 'm2', cells: ['Network', 'A virtual network card, joined to the real network or kept private'] },
        { id: 'm3', cells: ['Storage', 'Each VM’s disk is a large file on the host; it also needs memory, processor and the processor’s virtualization feature turned on in firmware'] }] },
      { kind: 'prose', text: [
        'Desktop virtualization (VDI) runs people’s desktops as VMs on servers, so they sign in from any device. A container packs one app with what it needs and shares the host’s operating system, so it is small and starts in seconds. A hypervisor is the software that runs VMs. Type 1 runs straight on the hardware (bare metal), for servers. Type 2 runs as a program on an ordinary operating system, such as VirtualBox on a laptop.'] }] },
    { title: 'Cloud: where it lives and who runs what',
      show: [{ kind: 'document', form: 'table', title: 'Four cloud models', head: ['Model', 'Who uses it'], rows: [
        { id: 'k1', cells: ['Private', 'One organization only'] },
        { id: 'k2', cells: ['Public', 'Many customers, on a provider’s shared systems'] },
        { id: 'k3', cells: ['Hybrid', 'A private cloud and a public one working together'] },
        { id: 'k4', cells: ['Community', 'Several organizations with the same needs share it, such as hospitals'] }] },
      { kind: 'document', form: 'table', title: 'Three service levels', head: ['Level', 'You get', 'You manage'], rows: [
        { id: 'k5', cells: ['IaaS', 'Infrastructure as a service: virtual servers, storage and network', 'The operating system and everything above it'] },
        { id: 'k6', cells: ['PaaS', 'Platform as a service: a place to build and run your own app', 'Your app and its data'] },
        { id: 'k7', cells: ['SaaS', 'Software as a service: a finished app in a browser, such as email', 'Only your account and data'] }] },
      { kind: 'prose', text: [
        'Traits: shared resources cost less; dedicated resources are reserved for you. Metered utilization: you pay for what you use; ingress is data going in, egress is data going out, and they can be priced differently. Elasticity: it grows and shrinks with demand. Availability: it stays up. File synchronization keeps the same files on every device. Multitenancy: many customers share the same systems, kept apart.'] }] },
    { title: 'Running it first and reading it later',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“It looks harmless, and the forum says it fixes everything. I will run it now and read it later.”',
        'The same shortcut hides in every group here: a script run before anyone read it, a customer’s details pasted into a public AI, a remote door left open to the internet. It works until the one time it does not, and then the damage is done and there is no record of what ran.'] }] },
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
