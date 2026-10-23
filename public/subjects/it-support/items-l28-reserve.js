// IT Help Desk, lesson 28: questions held in reserve for the weekly review, three for each topic (policy, scripts, remote, ai, virtual, cloud). Facts as in items-l28.js. Invented people.
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
    chat('l28-r-policy-1', 'policy', 'Wilbur, Developer', 'We use some free Linux tools at work. A coworker says that free means there are no rules about how we may use them.',
      'What is true of open source?', [
        ['The code is public and free to use, but has license terms', true, 'Open source is free to use but it has a license, and the terms must be followed.'],
        ['It has no license at all, so the code can be used freely', LIC, 'Public code still has a license. Public does not mean free of terms.'],
        ['It is licensed only for personal use and never for work', LIC, 'Open source licenses commonly allow business use. What matters is each one’s terms.'],
        ['It carries a DRM lock that blocks anyone copying the code', LIC, 'Open source is the opposite of locked: the code is open.']],
      'Open source is free and public but still licensed. The terms are read and followed.'),
    chat('l28-r-policy-2', 'policy', 'Stuart, Sales', 'Before sign-in, every company PC shows a screen: “Use of these computers is monitored and covered by the company’s acceptable use policy. Click OK to continue.”',
      'What is this window called?', [
        ['A splash screen', true, 'A notice shown before sign-in that people must accept is a splash screen. It is used for regulatory and business compliance.'],
        ['An MNDA', LIC, 'An MNDA is an agreement between two parties. This is a notice to staff.'],
        ['A change freeze', TYPE, 'A change freeze is a time when changes are not allowed.'],
        ['A EULA', LIC, 'A EULA is the terms for software. This notice is about the company’s rules for its computers.']],
      'A notice shown before sign-in that staff accept is a splash screen, and it points to the acceptable use policy.'),
    chat('l28-r-policy-3', 'policy', 'Orhan, Shop', 'Our shop keeps spreadsheets with full customer card numbers going back ten years. No rule has ever told us when to destroy them.',
      'Which good practice is missing?', [
        ['Retention rules: how long to keep records, then destroy them', true, 'Regulated data has retention rules. Records are kept for a stated time and destroyed afterward. Better still, full card numbers are not kept at all unless they are needed.'],
        ['A perpetual license that lets the shop keep the files forever', LIC, 'A license is about software. Holding customer card data has nothing to do with it.'],
        ['An MNDA signed with every customer in the spreadsheet', LIC, 'An MNDA is between two companies, and does not decide how long card data is kept.'],
        ['DRM on the spreadsheets so that customers cannot copy them', LIC, 'DRM limits copying of content. It does not decide how long to keep data.']],
      'Regulated data comes with retention: a stated time to keep it and a time to destroy it.'),
    recall('l28-r-scripts-1', 'scripts', 'A batch file ends in .bat and a PowerShell script ends in .ps1. A shell script, for Linux and macOS, has a third ending.', 'What does a shell script end in? Type it with the dot.',
      ['.sh'], 'A shell script ends in .sh. It runs on Linux and macOS, not on Windows.'),
    chat('l28-r-scripts-2', 'scripts', 'Timothy, Developer', 'I wrote one script that must run the same way on our Windows laptops, our Macs and our Linux servers. Python is installed on all of them.',
      'Which script file ending works on all three?', [
        ['.py, a Python script', true, 'A Python script runs on any system that has Python installed.'],
        ['.bat, a batch file', TOOL, 'A batch file runs Command Prompt commands, so it is for Windows only.'],
        ['.vbs, a VBScript file', TOOL, 'VBScript is an older Windows scripting language.'],
        ['.sh, a shell script', TOOL, 'A shell script runs on Linux and macOS but not on Windows.']],
      'Python scripts (.py) run on any system with Python. .bat and .vbs are Windows; .sh is Linux and macOS.'),
    chat('l28-r-scripts-3', 'scripts', 'Oz, Desk', 'We pushed a script to every PC to change one Windows setting. Afterward, one accounting program would not open on any of them.',
      'Which risk of scripts is this?', [
        ['Inadvertently changing system settings', true, 'The script changed a setting that the program needed, on every PC at once.'],
        ['Unintentionally introducing malware', UNREAD, 'Nothing in the story points to malware. A setting changed.'],
        ['A crash from mishandled resources', UNREAD, 'The PCs did not crash from using up memory. One program stopped opening.'],
        ['Losing the backup of every PC at the same time', UNREAD, 'The backups are not part of the story.']],
      'A script that changes a setting nobody meant to change is the second risk of scripts, and it reaches every machine it runs on.'),
    chat('l28-r-remote-1', 'remote', 'Todd, Network', 'I need to open a command line on a Linux router from my laptop, and everything I type must be encrypted.',
      'Which tool fits?', [
        ['SSH, Secure Shell, on port 22', true, 'SSH gives encrypted typed commands on a Linux server or network device.'],
        ['RDP, which shows a Windows desktop', REM, 'RDP is for a Windows desktop. A router has none.'],
        ['VNC, which shares another computer’s screen', REM, 'A router has no screen to share, and VNC is often weakly protected.'],
        ['SPICE, which shows a virtual machine’s screen', REM, 'SPICE is for virtual machines, not for a router.']],
      'Encrypted typed commands on a Linux server or network device are SSH.'),
    chat('l28-r-remote-2', 'remote', 'Mercy, Systems', 'RDP on the accounting server is open straight to the internet on its normal port, and thousands of failed sign-in attempts arrive each hour.',
      'What fixes the exposure?', [
        ['Close it to the internet and reach it through a VPN with MFA', true, 'RDP is never opened straight to the internet. A VPN with strong sign-in is the way in.'],
        ['Leave it open and choose a longer password for the account', EXPOSE, 'A longer password helps but leaves the door open to everyone. The exposure is the problem.'],
        ['Swap RDP for VNC and leave that open to the internet too', EXPOSE, 'VNC is often weakly protected, so this opens the same door with a worse lock.'],
        ['Give all staff the same shared admin password to keep it simple', EXPOSE, 'A shared password makes it harder to tell who did what.']],
      'RDP is reached through a VPN with strong sign-in and MFA, never open to the internet.'),
    chat('l28-r-remote-3', 'remote', 'Rex, Server team', 'I run virtual machines on a Linux host. I want to open one VM’s screen from my laptop, with sound and USB devices passed through.',
      'Which remote display tool is built for this?', [
        ['SPICE, a remote display for virtual machines', true, 'SPICE shows a VM’s screen with sound and USB. Its encryption should be turned on.'],
        ['WinRM, which runs PowerShell commands on Windows', REM, 'WinRM runs commands on Windows machines. It shows no VM screen.'],
        ['RMM, a console for patching many computers', REM, 'RMM manages many machines through agents. It is not a VM screen.'],
        ['A VPN, an encrypted tunnel into a network', REM, 'A VPN is the way into the network, not a screen tool.']],
      'A remote screen for a virtual machine, with sound and USB, is SPICE.'),
    chat('l28-r-ai-1', 'ai', 'Hilary, Policy', 'The company’s rule says staff may use only the company’s own AI tool for anything that holds customer data, and never a public one.',
      'Why is that the rule?', [
        ['A private tool keeps data inside; a public one may keep it', true, 'Private versus public is about where the data goes. A public service may keep and use what it receives.'],
        ['A private tool is never wrong; a public one often is', TRUST, 'Any AI can be wrong. The rule is about where data goes.'],
        ['A public tool is not allowed to answer questions about customers', TRUST, 'The difference is who keeps the data typed in.'],
        ['A private tool avoids plagiarism; a public one does not', TRUST, 'Plagiarism is about passing off work as your own, not about the kind of tool.']],
      'The company’s own AI tool keeps data inside. A public one may keep it, so customer data stays out.'),
    chat('l28-r-ai-2', 'ai', 'Tam, HR', 'A tool that ranks job applicants keeps ranking people from a few well-known schools first. It was trained on the company’s past hires.',
      'Which limit of AI is this?', [
        ['Bias: answers lean the way the training data leaned', true, 'The past hires favored certain schools, and the tool learned that lean.'],
        ['A hallucination: the tool invented the applicants’ schools', TRUST, 'The schools are real. The tool is favoring some of them.'],
        ['Plagiarism: the tool copied another company’s ranking', TRUST, 'Nothing was copied. The tool learned from this company’s own data.'],
        ['Metered utilization: the tool charges for each applicant', CLOUD, 'Metered utilization is about paying for use. It does not explain a lean in the ranking.']],
      'Answers that lean toward what the training data leaned toward are bias.'),
    chat('l28-r-ai-3', 'ai', 'Kalinda, Desk', 'An AI tool says that error code 0x80070005 means a broken network cable. I think it is a permissions error, but the answer sounded sure.',
      'What do you do before telling the user?', [
        ['Check the answer against the maker’s documentation', true, 'Accuracy is a limit of AI, so answers are checked against a trusted source before acting.'],
        ['Send it on as is, since the AI sounded certain', TRUST, 'Sounding sure is not accuracy. AI can state wrong things with confidence.'],
        ['Put the same question to the AI until it gives the same answer twice', TRUST, 'Repeating the question can repeat the same mistake.'],
        ['Paste the user’s whole ticket into the AI for a second opinion', LEAK, 'Pasting the ticket may send private data to a public service.']],
      'AI answers are checked against the maker’s documentation before anyone acts on them.'),
    chat('l28-r-virtual-4', 'virtual', 'Brit, Developer', 'I want to try a risky update of our billing program, and if it breaks anything I want to throw the whole thing away and start again. I do not want to touch the real server.',
      'What is a virtual machine used for here?', [
        ['Test and development: a copy where a failure harms nothing live', true, 'A VM used for test and development is a safe copy: if the update breaks it, nothing live is harmed.'],
        ['Legacy software: an old program that needs an old Windows', VIRT, 'Nothing in the story needs an old system. Brit wants a safe place to try an update.'],
        ['Cross-platform use: running a Windows program on a Mac', VIRT, 'The story does not mix systems. It is about trying a change safely.'],
        ['Desktop virtualization: desktops for people on a server', VIRT, 'VDI gives people their desktops from a server. Brit wants a copy to test on.']],
      'A VM that can be thrown away after a risky trial is the test and development use.'),
    recall('l28-r-virtual-1', 'virtual', 'A virtual machine is a computer made of software that runs inside a real one. The real computer that carries it has its own name.', 'What is the real computer called? Type one word.',
      ['host'], 'The real computer is the host and the virtual machine is the guest.'),
    chat('l28-r-virtual-2', 'virtual', 'Rafaela, Security', 'Our analyst must open suspicious attachments safely and throw the whole machine away afterward, so nothing can spread.',
      'What is built for this?', [
        ['A sandbox VM, thrown away when the analyst is done', true, 'A sandbox VM is a sealed place to open suspect files, and it can be deleted afterward.'],
        ['A VDI desktop shared by every member of the staff', VIRT, 'A shared VDI desktop would put the suspicious file in front of everyone.'],
        ['A container that holds the email program for each user', VIRT, 'A container shares the host’s operating system, so what spreads can reach the host.'],
        ['A Type 1 hypervisor installed on every employee laptop', VIRT, 'A hypervisor type is about where it runs, not about throwing a machine away.']],
      'A sealed VM deleted afterward is a sandbox.'),
    chat('l28-r-virtual-3', 'virtual', 'Eleanor, Server team', 'The new host will not start any virtual machine and shows a message about hardware virtualization. The processor has it.',
      'What is the likely fix?', [
        ['Turn on hardware virtualization in the firmware settings', true, 'The processor’s virtualization feature must be enabled in firmware before a hypervisor can use it.'],
        ['Replace the power supply with a larger one for the host', CAUSE, 'Power is not what the message is about.'],
        ['Move the virtual machines to a SaaS service instead', CLOUD, 'SaaS is a finished app, not a place for virtual machines. The host needs the feature.'],
        ['Delete the virtual disk files and make them again', CAUSE, 'The message is about the processor’s feature, not the disk files.']],
      'A host needs the processor’s virtualization feature turned on in firmware, among the requirements for security, network and storage.'),
    chat('l28-r-cloud-4', 'cloud', 'Laszlo, Hosting', 'One provider runs the same servers for hundreds of small shops, and each shop sees only its own data.',
      'Which cloud trait is that?', [
        ['Multitenancy: many customers share systems, kept apart', true, 'Multitenancy means many customers share the same systems while their data stays separate.'],
        ['Elasticity: resources that grow and shrink with demand', CLOUD, 'Elasticity is about growing and shrinking. Nothing in the story changes in size.'],
        ['Dedicated resources: servers reserved for one customer', CLOUD, 'Dedicated means one customer alone. Here hundreds of shops share the servers.'],
        ['File synchronization: the same files on every device', CLOUD, 'Synchronization keeps files in step. The story is about sharing systems.']],
      'Many customers sharing the same systems, kept apart, is multitenancy.'),
    chat('l28-r-cloud-5', 'cloud', 'Nate, Bank', 'We want cloud servers that nobody else’s work can slow down, kept for our bank alone, even if they cost more.',
      'Which choice is that?', [
        ['Dedicated resources: reserved for one customer', true, 'Dedicated resources are reserved for one customer. Shared resources cost less but are used by many.'],
        ['Shared resources: cheaper, used by many customers', CLOUD, 'Shared resources cost less, but other customers use them too.'],
        ['Elasticity: growing and shrinking with demand', CLOUD, 'Elasticity is about size changing with demand, not about who else uses the servers.'],
        ['Metered utilization: paying for what is used', CLOUD, 'Metered means paying for use. It does not decide who else shares the servers.']],
      'Resources reserved for one customer are dedicated; resources shared with others cost less.'),
    chat('l28-r-cloud-6', 'cloud', 'Zena, Shop', 'Our online shop must be reachable at 3 a.m. on holidays too, and the provider promises it stays up.',
      'Which cloud trait is that?', [
        ['Availability: the service stays up when it is needed', true, 'Availability means the service is there when needed.'],
        ['Elasticity: resources that grow and shrink with demand', CLOUD, 'Elasticity changes size with demand. The story is about staying up.'],
        ['Metered utilization: paying only for what is used', CLOUD, 'Metered is about the bill, not about being reachable.'],
        ['File synchronization: the same files on every device', CLOUD, 'Synchronization keeps files in step. It does not promise the shop is reachable.']],
      'A service that stays up when it is needed shows availability.'),
    chat('l28-r-remote-4', 'remote', 'Cass, Help desk', 'A customer wants me to fix their printer settings. I plan to use a screen-sharing app the company allows.',
      'What goes with using a screen-sharing app?', [
        ['Get the user’s agreement first, and end the session when done', true, 'Third-party tools follow rules: the user agrees first, the session ends when the work is done, and only allowed tools are used.'],
        ['Leave the session open overnight so it is there if the fix does not hold', REM, 'An open session is a door left open. It ends when the work is done.'],
        ['Install whichever sharing app the customer happens to prefer', REM, 'Only tools the company allows are used.'],
        ['Start the session while the customer is away so it goes faster', REM, 'The user agrees first, and is there to see what the desk does.']],
      'Screen sharing needs the user’s agreement, an allowed tool, and an end to the session when the work is done.'),
    chat('l28-r-cloud-1', 'cloud', 'Xav, Finance', 'Our cloud bill jumped this month because we sent a very large amount of data out of the cloud to customers.',
      'What explains it?', [
        ['Metered utilization: egress, data going out, is charged', true, 'The cloud is metered. Ingress is data going in, egress is data going out, and the two can be priced differently.'],
        ['File synchronization: the same files were kept on every device', CLOUD, 'File synchronization keeps copies in step. It does not explain a bill for data sent out.'],
        ['Multitenancy: other customers shared our servers and the cost', CLOUD, 'Multitenancy is sharing systems with other customers. It does not explain a jump from outgoing data.'],
        ['Availability: the provider kept the service running all month', CLOUD, 'Availability is about staying up. The bill rose because of data sent out.']],
      'Cloud services are metered. Data going out (egress) can cost money.'),
    chat('l28-r-cloud-2', 'cloud', 'Yara, Shop', 'Our shop is quiet most of the year and very busy before the holidays. We want more servers only in the busy weeks, and fewer afterward.',
      'Which cloud trait is that?', [
        ['Elasticity: resources grow and shrink with demand', true, 'Elasticity means the service grows and shrinks as demand does, and the customer pays only for what is used.'],
        ['Dedicated resources: servers kept for one customer only', CLOUD, 'Dedicated resources are reserved all the time, so they do not shrink with demand.'],
        ['File synchronization: files kept the same on every device', CLOUD, 'That keeps files in step. It does not add or remove servers.'],
        ['A community cloud shared by several organizations', CLOUD, 'A community cloud is a model, about who shares it. Growing and shrinking is a trait.']],
      'A service that grows and shrinks with demand is elastic.'),
    chat('l28-r-cloud-3', 'cloud', 'Lucia, Studio', 'Photos taken on the phone show up on the laptop and the tablet a minute later, and a change made on one appears on the others.',
      'Which cloud trait is that?', [
        ['File synchronization on every device', true, 'File synchronization keeps the same files in step on every device.'],
        ['Multitenancy, which keeps customers apart', CLOUD, 'Multitenancy is many customers sharing the same systems, kept apart from each other.'],
        ['Metered utilization, a bill for use', CLOUD, 'Metered means paying for what is used. It does not keep devices in step.'],
        ['IaaS, a level of virtual servers', CLOUD, 'IaaS is a service level, virtual servers. It is not the trait that keeps files the same everywhere.']],
      'The same files on every device, kept in step, are file synchronization.'),
  ]);
})();
