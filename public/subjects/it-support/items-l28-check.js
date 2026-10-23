// IT Help Desk, lesson 28: the six questions of the check, all new, no help, one for each topic. Facts as in items-l28.js (A+ map Core 2 4.6, 4.8 to 4.10; Core 1 4.1, 4.2). Invented people.
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
    chat('l28-k-policy', 'policy', 'Mona, Clinic', 'A nurse asked me to email a patient’s records to her personal address so that she can finish her notes at home.',
      'What do you tell her?', [
        ['No: these are regulated records, and a personal address is not approved', true, 'Healthcare records are regulated data. Only people who need them handle them, through the channels the company approves.'],
        ['Yes: she works there, so any address she picks is fine', LEAK, 'Working there does not make any address safe. The records leave the company’s control.'],
        ['Yes, if the email is marked private in the subject line', LEAK, 'A label in the subject line protects nothing.'],
        ['Yes: PII rules only cover credit cards and government IDs', LEAK, 'PII and healthcare records are regulated too. Credit cards are only one kind.']],
      'Healthcare records are regulated data, kept inside approved channels and handled only by the people who need them.'),
    chat('l28-k-scripts', 'scripts', 'Hal, Intern', 'My cleanup script opened thousands of files and never closed them. The PC slowed down and then froze. Nothing was installed and no settings changed.',
      'Which risk of scripts is this?', [
        ['A crash from mishandled resources of the PC', true, 'Using up memory or leaving files open is mishandling resources, and it can slow or crash the machine.'],
        ['Unintentionally introducing malware to the PC', UNREAD, 'Nothing was installed, so no malware came in.'],
        ['Inadvertently changing system settings of the PC', UNREAD, 'No settings changed. The problem was files left open.'],
        ['Running a script that came from an untrusted source', UNREAD, 'The script was the intern’s own, and the problem was how it handled files.']],
      'Using up memory or leaving files open is the third risk of scripts: a crash from mishandled resources.'),
    chat('l28-k-remote', 'remote', 'Gus, IT contractor', 'I look after 300 PCs for clients. Each night I need to patch them, watch their health, and reach any of them quickly from one console.',
      'Which tool is built for this?', [
        ['RMM, remote monitoring and management with an agent on each PC', true, 'RMM is built for one console to patch, watch and control many machines. Its account needs MFA, because it reaches every PC.'],
        ['RDP, which opens the desktop of one Windows computer at a time', REM, 'RDP reaches one machine per connection. It does not patch or watch hundreds.'],
        ['A VPN, which is an encrypted tunnel into a network', REM, 'A VPN is the way in to a network. It does not manage the machines.'],
        ['SPICE, which shows a virtual machine’s screen', REM, 'SPICE is for virtual machines’ screens, not for patching 300 PCs.']],
      'One console to patch, watch and control many machines is RMM.'),
    chat('l28-k-ai', 'ai', 'Ines, Teacher', 'A student pasted a whole essay written by an AI and handed it in as her own work, with no mention of the tool.',
      'Which issue is this?', [
        ['Plagiarism: passing off AI writing as her own', true, 'Handing in AI text, or anyone’s work, as your own without credit is plagiarism.'],
        ['A hallucination: the AI made up facts in the essay', TRUST, 'The story is about who wrote the essay, not about whether the facts are invented.'],
        ['Bias: the essay leans toward one view', TRUST, 'Nothing in the story is about the essay leaning. It is about credit.'],
        ['Accuracy: the essay could simply be wrong', TRUST, 'The accuracy of the essay is a separate matter from who wrote it.']],
      'Presenting AI text as your own work is plagiarism, which a company policy on acceptable use names alongside what data may go in.'),
    recall('l28-k-virtual', 'virtual', 'A small package holds one app and what it needs, but it shares the host’s operating system instead of carrying a whole one. It starts in seconds.', 'What is this called? Type one word.',
      ['container', 'containers'], 'This is a container. A VM carries a whole guest operating system, which is why it is bigger and slower to start.'),
    chat('l28-k-cloud', 'cloud', 'Lin, Hospital IT', 'Several hospitals in our region share one cloud built for their common needs. They run it together, and it is closed to everyone else.',
      'Which cloud model is this?', [
        ['A community cloud', true, 'A community cloud is shared by several organizations with the same needs, and closed to others.'],
        ['A private cloud', CLOUD, 'A private cloud serves one organization only. Several hospitals share this one.'],
        ['A public cloud', CLOUD, 'A public cloud is open to many customers. This one is closed.'],
        ['A hybrid cloud', CLOUD, 'Hybrid joins a private cloud and a public one. Nothing here is public.']],
      'A cloud shared by several organizations with the same needs, closed to others, is a community cloud.'),
  ]);
})();
