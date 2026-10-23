// IT Help Desk, lesson 28 "Policy, scripts, remote access, AI and the cloud" (part rules): the worked ticket and the questions of the three groups.
// Facts: A+ map (docs/research/it-support-aplus.md) Core 2 4.6 (licensing, NDA, regulated data, AUP), 4.8 (scripts), 4.9 (remote access), 4.10 (AI) and Core 1 4.1 (virtualization) and 4.2 (cloud).
// Pronouns: named ticket people are named or "they" (ruling 22). The worked ticket uses IT4 and IT9 (a first guess that one check rules out). Invented people. Strands: policy, scripts, remote, ai, virtual, cloud.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const TYPE = 'wrong-change-type', APPR = 'skipped-approval', BACK = 'wrong-backup', ONE = 'one-copy', STAT = 'static-risk', PWR = 'wrong-guard-power', GEAR = 'wrong-gear',
    EVID = 'touched-evidence', VOL = 'lost-volatile', LIC = 'wrong-license', LEAK = 'leaked-data', UNREAD = 'ran-unread', REM = 'wrong-remote', EXPOSE = 'exposed-remote',
    TRUST = 'trusted-ai', VIRT = 'wrong-virtual', CLOUD = 'wrong-cloud', TOOL = 'wrong-tool', LOOK = 'mixed-look-alike', CAUSE = 'wrong-cause', SKIP = 'skipped-step', NOSPLIT = 'no-split';

  FC.items('it-support', [
    item({
      id: 'l28-w-remote', strand: 'remote',
      blocks: [
        msg('chat', 'Eamon, Branch IT', 'Chat with the help desk', [['t1', 'The Linux file server at the Dayton branch stopped sharing files. I need to restart its file service tonight. I am at home on my laptop.']]),
        table('From the desk’s notes on the Dayton branch', ['Note'], [
          ['n1', 'The file server runs Linux with no desktop: it has only a text command line.'],
          ['n2', 'Company computers outside the office must connect through the company VPN. The server has no direct line to the internet.'],
          ['n3', 'Restarting a file service after hours is a standard change: no new approval is needed.']])],
      asks: [ask('Which tools does Eamon use, in order?', [
        ['The VPN first, then SSH to the server', true, 'The VPN puts Eamon’s laptop on the company network, and SSH gives encrypted typed commands on a Linux server. The notes call for exactly those two.'],
        ['RDP straight to the server’s address', REM, 'RDP shows a Windows desktop. This server is Linux with no desktop, and it has no direct line to the internet either.'],
        ['VNC straight to the server, with nothing in front of it', EXPOSE, 'VNC shows a screen, and the server has none to show. It also has no direct line to the internet, so it could not be reached from home.'],
        ['A screen-sharing app, run by a user at the branch', REM, 'That needs a person at the branch to start it, and a server with no desktop has no screen to share.']])],
      steps: [
        { id: 'guess', does: 'Name the favorite tool, then test it against the server.', working: 'The first guess is RDP, because it is the tool most people know. But RDP is for a Windows desktop, and note 1 says this server has no desktop. RDP is ruled out.', ask: 'a' },
        { id: 'reach', does: 'Check how Eamon gets to the branch at all.', working: 'Note 2: the server is only reachable from the company network, so Eamon connects the VPN first. The VPN is not a screen tool; it is the way in.' },
        { id: 'tool', does: 'Pick the tool that fits a Linux server with only a command line.', working: 'SSH, Secure Shell, on port 22. The sign-in uses the technician’s own account, and the typed command restarts the file service. Note 3 makes the restart a standard change, so it needs no new approval.' },
        { id: 'close', does: 'Check, then close properly.', working: 'Eamon, still at home on the VPN, opens a file from the share, and it works. The note lists the VPN, SSH, the account used and the service restarted. The VPN and SSH sessions are ended.' }],
      deciding: ['t1', 'n1', 'n2', 'n3'],
      reason: 'A Linux server with only a command line is reached with SSH, and from outside the company the way in is the VPN. RDP is for a Windows desktop and VNC would have left a door open to the internet.' }),
    chat('l28-p-remote', 'remote', 'Nora, Accounts', 'I am at home. I want the office file share to show up on my laptop, so that I can open a spreadsheet saved there.',
      'Which remote tool gets Nora onto the office network first?', [
        ['A VPN, which is an encrypted tunnel into the company network', true, 'The VPN is the way in to the shares and servers. Once connected, Nora’s laptop can reach the file share.'],
        ['RDP, which shows the Windows desktop of another computer', REM, 'RDP controls another computer’s desktop. Nora wants the share on Nora’s own laptop.'],
        ['SSH, which types encrypted commands on a Linux server', REM, 'SSH gives a command line on a server. It does not put a share on Nora’s laptop.'],
        ['VNC, which shows and controls the screen of another computer', REM, 'VNC shares another computer’s screen. It does not connect Nora’s laptop to the office network.']],
      'Reaching the office shares from home is the job of a VPN. RDP, SSH and VNC are used after you are on the network, to control a specific computer.'),
    chat('l28-p-vm', 'virtual', 'Ibrahim, Shop floor', 'An old time-clock program only runs on Windows 7. Our PCs have Windows 11, and we need that program every day.',
      'What lets a Windows 11 PC run that program?', [
        ['A virtual machine with Windows 7 inside, kept off the network', true, 'A VM holds a whole guest system of its own. This is the legacy-software use of VMs: an old program that needs an old system. That old system no longer gets fixes, so the VM stays off the network or on a private virtual network.'],
        ['A container, which carries the program on the PC’s own system', VIRT, 'A container shares the host’s operating system, so it cannot give the program Windows 7.'],
        ['A PaaS account, which hosts new apps that people write', CLOUD, 'PaaS is a platform for building and running apps. It does not run an old program on an old Windows.'],
        ['A VDI desktop running Windows 11 from a server', VIRT, 'VDI puts desktops on a server, but this desktop is Windows 11, and the program needs Windows 7.']],
      'An old program that needs an old system runs in a VM that holds that system. A container shares the host’s own operating system.'),
    chat('l28-q-license', 'policy', 'Mario, Shop owner', 'I bought one copy of an office suite for myself, on a personal license. I want to install it on the five PCs in my shop.',
      'What is the problem?', [
        ['A personal license covers one person; a business needs corporate ones', true, 'A personal license is not for five business PCs. A company needs corporate (business or volume) licenses.'],
        ['Perpetual licenses expire after a year and must be bought again', LIC, 'A perpetual license is paid once and used for good. A subscription is the kind that runs out.'],
        ['The DRM will block the second install, and only a new EULA lifts it', LIC, 'DRM can limit how many installs there are, but a new EULA does not lift it. The real problem is the kind of license.'],
        ['There is none: a license bought once covers every PC in a building', LIC, 'A license covers what its terms say. A personal one covers one person.']],
      'A personal license covers one person’s own use. Business PCs need corporate licenses.'),
    chat('l28-q-script', 'scripts', 'Vera, Accounts', 'I found a .ps1 file on a forum that says it clears temp files and speeds things up. Can I run it on the accounting PC today?',
      'What do you tell Vera?', [
        ['Read it first and test it on a spare PC or in a sandbox', true, 'A script from an unknown source can bring in malware or change settings. Reading it and testing it on a safe machine comes before the accounting PC.'],
        ['Run it now; it is only text, so it cannot harm the PC', UNREAD, 'A script is text that does things. It can install malware or change settings, and it runs with the user’s rights.'],
        ['Rename it .bat first, because Windows trusts those more', UNREAD, 'Renaming does not make it safe. It only changes how Windows tries to run the same lines.'],
        ['Run it as an administrator, so it finishes without errors', UNREAD, 'More rights let a bad script do more damage. It does not make a script safe.']],
      'Scripts are read and tested on a safe machine before they reach a real one, and only from a trusted source.'),
    chat('l28-q-ai', 'ai', 'Ellis, Customer service', 'I pasted a customer’s name, address and card details into a public AI chatbot to help write a reply. The answer was good. Was that fine?',
      'What do you do about Ellis’s paste?', [
        ['Report the paste to the manager and stop it, since a public service may keep typed text, even card data', true, 'A public AI service may keep and use what it receives. Card details are regulated data, and company policy keeps them out. The data has already gone out, so management is told (inform management).'],
        ['Tell Ellis the chatbot deletes everything once the window is closed, so nothing more is needed', LEAK, 'A public service makes no such promise. The text may be kept.'],
        ['Tell Ellis to run the reply through a plagiarism check, since that is the risk with AI text', LEAK, 'Plagiarism is about passing off work as your own. It has nothing to do with where customer data goes.'],
        ['Tell Ellis to keep using the tool, since the answer was good', TRUST, 'A good answer does not make the service safe. What matters is who keeps what is typed.']],
      'Private and regulated data stays out of a public AI service, whatever the quality of the answer, and a leak that already happened is reported to management.'),
    chat('l28-q-cloud', 'cloud', 'Brian, Office manager', 'We want email, calendars and documents in a browser. We do not want to run servers or look after an operating system.',
      'Which service level is this?', [
        ['SaaS: a finished app that the provider runs for us', true, 'SaaS is a finished app in a browser. Only the account and the data belong to the customer.'],
        ['IaaS: virtual servers where we manage the operating system', CLOUD, 'IaaS leaves the customer the operating system and everything above it, which is what Brian wants to avoid.'],
        ['PaaS: a platform where we build and run our own app', CLOUD, 'PaaS is for building your own app. Brian wants finished tools.'],
        ['A community cloud: a model, not a level of service', CLOUD, 'Community is a cloud model, about who shares it. The question is about what is provided.']],
      'Finished software used in a browser is SaaS. IaaS and PaaS leave more work with the customer.'),
    recall('l28-q-pii', 'policy', 'A name together with an address and a birth date can point to one real person, and the company must protect it as regulated data.', 'What is this kind of data called? Type its short name.',
      ['pii'], 'It is PII, personally identifiable information. Credit card numbers, government IDs and healthcare records are the other regulated kinds.'),
    chat('l28-q-winrm', 'remote', 'David, Systems', 'I am at my desk. I need to run the same PowerShell command on 20 Windows servers at once, with no screens to watch.',
      'Which remote tool fits?', [
        ['WinRM, which runs PowerShell on remote Windows machines', true, 'WinRM, Windows Remote Management, runs commands on Windows machines. It uses the encrypted setup (port 5986) where possible.'],
        ['VNC, which shows and controls the screen of another computer', REM, 'VNC is for watching and clicking one screen. It would not run one command on 20 servers.'],
        ['SPICE, a remote display for virtual machines', REM, 'SPICE shows a VM’s screen. It does not run commands on many servers.'],
        ['A VPN, an encrypted tunnel into the company network', REM, 'A VPN is the way into the network, not the tool that runs the command.']],
      'Running PowerShell commands on remote Windows machines is the job of WinRM.'),
    chat('l28-q-hybrid', 'cloud', 'Farid, Retail', 'Our customer records stay in our own private cloud. For the holiday rush we rent web servers from a public cloud, and the two work together.',
      'Which cloud model is this?', [
        ['A hybrid cloud', true, 'Hybrid joins a private cloud and a public one that work together.'],
        ['A community cloud', CLOUD, 'A community cloud is shared by several organizations. This is one company’s own mix.'],
        ['A private cloud', CLOUD, 'Private means one organization’s own cloud alone. This one also uses a public cloud.'],
        ['A public cloud', CLOUD, 'Public means a provider’s shared systems only. This company also runs its own.']],
      'A private cloud and a public one working together make a hybrid cloud.'),
    recall('l28-q-ingress', 'cloud', 'Cloud services are metered. A company uploads a big backup and pays little for it, but is charged when it downloads data back out.', 'What is data coming into the cloud called? Type the word.',
      ['ingress'], 'Data going in is ingress and data going out is egress. The two can be priced differently.'),
    recall('l28-q-public', 'ai', 'A support team uses a chatbot website that anyone can sign up for. The company runs a second AI tool of its own that keeps everything inside.', 'Which kind is the chatbot website that anyone can sign up for? Type public or private.',
      ['public'], 'A public AI service may keep what is typed, so private and regulated data stays out. A private one run by the company keeps data inside.'),
    chat('l28-g-nda', 'policy', 'Enrique, Legal', 'We are about to show a partner company our product plans and see theirs. Both sides want to be bound to keep the other’s secrets.',
      'Which agreement is this?', [
        ['An MNDA, a mutual nondisclosure agreement that binds both', true, 'Mutual means both sides promise. An MNDA covers two parties exchanging secrets.'],
        ['An NDA that only our side signs, covering our plans alone', LIC, 'A one-way NDA binds only one party. Both want to be bound.'],
        ['An EULA, the terms a person accepts when installing software', LIC, 'A EULA covers software use. It says nothing about secrets exchanged by two companies.'],
        ['An AUP, the rules for how staff use company computers', LIC, 'An AUP governs the company’s own staff. It is not an agreement between two companies.']],
      'Two parties each protecting the other’s secrets is a mutual NDA (MNDA).'),
    recall('l28-g-bat', 'scripts', 'A batch file ends in .bat, and a shell script on Linux ends in .sh. A PowerShell script has its own ending.', 'What does a PowerShell script file end in? Type it with the dot.',
      ['.ps1'], 'PowerShell scripts end in .ps1. A .bat is a batch file, .vbs is VBScript, .sh a shell script, .js JavaScript and .py Python.'),
    chat('l28-g-vnc', 'remote', 'Pamela, Help desk', 'A user on a Mac needs help. I want to see exactly what is on their screen and click for them, from my Windows PC.',
      'Which remote tool fits?', [
        ['VNC, which shows and controls a screen on any system', true, 'VNC shares a screen across systems, which is what a Mac user and a Windows technician need.'],
        ['RDP, which shows the desktop of a Windows computer', REM, 'RDP is built for Windows desktops. A Mac user is not on one.'],
        ['SSH, which types encrypted commands on a server', REM, 'SSH gives a command line. It does not show their screen.'],
        ['WinRM, which runs PowerShell commands on Windows machines', REM, 'WinRM runs commands on Windows machines. It shows no screen, and their Mac is not one.']],
      'Seeing and controlling a screen on any system is a job for VNC, or a screen-sharing tool the company allows.'),
    chat('l28-g-hyper', 'virtual', 'Loretta, Server team', 'We are putting software straight on a new server, with no operating system underneath, to run twelve virtual machines.',
      'Which kind of hypervisor is this?', [
        ['Type 1, which runs directly on the server hardware', true, 'A hypervisor with no operating system under it is Type 1, also called bare metal. Servers use it.'],
        ['Type 2, which runs as a program on an operating system', VIRT, 'Type 2 needs an operating system under it, such as VirtualBox on a laptop. This server has none.'],
        ['A container engine, which shares the host’s operating system', VIRT, 'A container engine shares an operating system, and it does not run twelve machines of their own.'],
        ['VDI, which gives people their desktops from a server', VIRT, 'VDI delivers desktops to people. The question is about what runs the machines.']],
      'A hypervisor that runs straight on the hardware is Type 1. One that runs on an operating system is Type 2.'),
    chat('l28-g-saas', 'cloud', 'Benedict, Developer', 'We write our own app. We want the provider to run the servers, the operating system and the software that runs the code, and we only upload our code.',
      'Which service level is this?', [
        ['PaaS: a platform to build and run our own app', true, 'PaaS is a platform to build and run your own app. The customer manages the app and its data.'],
        ['IaaS: virtual servers where we look after the operating system', CLOUD, 'With IaaS the customer manages the operating system and everything above it. Benedict wants the provider to do that.'],
        ['SaaS: a finished app that is used in a browser', CLOUD, 'SaaS is software someone else wrote. Benedict is running their own code.'],
        ['A private cloud: a model for one organization only', CLOUD, 'A private cloud is a model, about who uses it. The question is about the service level.']],
      'The provider running everything but your own app and data is PaaS.'),
    chat('l28-g-halluc', 'ai', 'Gareth, Help desk', 'An AI told me to run a command called repair-netstack --force. It sounds right, but I cannot find it in any manual or on any website.',
      'What most likely happened?', [
        ['A hallucination: the AI invented a command that sounds real', true, 'A hallucination is a confident answer with invented facts, commands or links. Checking it against a manual shows it.'],
        ['Bias: the AI leaned toward one system because of its training', TRUST, 'Bias skews answers toward some view. A command that does not exist is invented, which is a different limit.'],
        ['Plagiarism: the AI copied the command from a manual without credit', TRUST, 'Plagiarism is copying work without credit. A command found nowhere was not copied from anywhere.'],
        ['Multitenancy: other customers of the AI shared the command', CLOUD, 'Multitenancy is many customers sharing a provider’s systems. It does not explain an invented command.']],
      'A confident answer that does not exist anywhere is a hallucination, which is why AI answers are checked before use.'),
    chat('l28-g-vdi', 'virtual', 'Fox, Call center', 'Our agents sign in from any basic device and get their own Windows desktop, which actually runs on a server in the data center.',
      'What is this called?', [
        ['VDI, desktop virtualization with desktops on servers', true, 'VDI runs people’s desktops as VMs on servers, so they can sign in from any device.'],
        ['A container, a package that shares the host’s operating system', VIRT, 'A container packs one app. Here each agent gets a whole desktop.'],
        ['A Type 2 hypervisor, a program running on an operating system', VIRT, 'A hypervisor type is about where the VM software runs, not about who gets the desktops.'],
        ['A sandbox, a sealed place to open suspicious files', VIRT, 'A sandbox is for safe testing. Agents use these desktops all day for work.']],
      'Desktops that run as VMs on servers and are used from any device are VDI.'),
    chat('l28-g-drm', 'policy', 'Luke, Studio', 'A film I bought from an online store plays on my laptop but not on my tablet. The store says the film is protected so that it cannot be freely copied.',
      'What is the protection called?', [
        ['DRM, digital rights management for content', true, 'DRM limits copying or playing of content you bought, which explains a film that plays on one device only.'],
        ['A EULA, the terms accepted when installing software', LIC, 'A EULA is an agreement a person accepts. The limit on the film is built into the file.'],
        ['An AUP, the company’s rules for using its computers', LIC, 'An AUP covers how staff use company computers, not the film.'],
        ['An MNDA, a promise by two sides to keep secrets', LIC, 'An MNDA is an agreement between two parties and has nothing to do with a film.']],
      'Technology that limits copying or playing of content you bought is DRM.'),
    recall('l28-g-ssh', 'remote', 'SSH, Secure Shell, gives encrypted typed commands on a Linux server. Like every service, it listens on a numbered port.', 'Which port number does SSH use? Type the number.',
      ['22'], 'SSH uses port 22. RDP uses 3389.'),
  ]);
})();
