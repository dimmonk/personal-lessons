// IT Help Desk, lesson 30: The mock exam (part mock), the subject's last lesson. Plan: docs/subjects/it-support/plan.md, lesson 30 and the "Real-world test" (IT24, IT25: practice mixed across topics, unlabelled, with no help,
// is what transfers; IT21, P26: our own pass marks); rulings-l1-8.md 23. The exam's own facts are from docs/research/it-support-aplus.md section 2: two exams, up to 90 questions in 90 minutes each, pass 675 (first) and
// 700 (second) on a scale of 100 to 900, multiple-choice and performance-based questions, domain weights in sections 2 and 3.
// Shape: why; one screen saying how the real exams run and how the mock is built; a short practice group of four mixed questions (strand whole, none in the check); the check is a drawn mock of 40 questions that keeps
// the exam's domain weights: nine groups of topics (every strand of lessons 1 to 28 is in exactly one; `whole` is in none), feedback at the end, 32 right to pass, retested in 28 days.
// Strand to A+ domain, by the objective each teaches (unit-1 strands count as operational procedures, Core 2 4.1 and 4.7):
//  mobile (3): mobile-parts C1 1.1, mobile-ports C1 1.2, mobile-connect C1 1.3.
//  networking (5): addressing C1 2.4, net-devices 2.5, net-types 2.7, net-tools 2.8, servers 2.3, ports-web/mail/files/admin 2.1, wifi 2.2, short-range 2.2.
//  hardware (5): drives and raid 3.4, drive cables and connectors 3.2 (net-cables, fiber, peripheral, connectors), display 3.1, power 3.6, board 3.5, cpu 3.5, firmware 3.5, memory 3.3, cooling 3.5, print-care 3.7 and 3.8.
//  virtualization and cloud (2): virtual C1 4.1, cloud C1 4.2.
//  hardware and network troubleshooting (5): drive-fix 5.2, boot 5.1, print-path 5.6, online 5.5, wifi-fix 5.5, mobile-hw-fix 5.4.
//  operating systems (6): win-tools, win-consoles 1.4, win-settings 1.6, net-settings 1.7, net-commands, cmd-net, cmd-disk, cmd-files, cmd-admin 1.5, mac 1.8, mac-care 1.8, linux-files, linux-admin, linux-net 1.9,
//    editions 1.3, filesystems 1.1, install-types 1.2, app-reqs 1.10, cloud-tools 1.11.
//  security (5): access-physical 2.1, access-logical 2.1 and 2.2, win-security 2.2, ad-policy 2.2, hardening 2.7, wifi-security 2.3, soho 2.10, mobile-secure 2.8, malware-kinds 2.4, attacks 2.5, malware-removal 2.6,
//    destruction 2.9, browser-security 2.11.
//  software troubleshooting (5): win-boot-fix, win-run-fix 3.1, mobile-app-fix 3.2, mobile-sec-fix 3.3.
//  operational procedures (4): kind, story, changed, known, half, one, finish, upset (4.1, 4.7), change 4.2, backup 4.3, safety 4.4 and 4.5, evidence and policy 4.6, scripts 4.8, remote 4.9, ai 4.10.
FC.lesson('it-support', {
  id: 'l30', part: 'mock', title: 'The mock exam', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, per ruling 23: a screen on how the two real exams run, four mixed practice questions, and a drawn mock of 40 questions weighted by the exams’ nine domain weights (32 right to pass, retest in 28 days).' }],
  why: [
    'You have worked a ticket from the first word to the write-up, and you have met every fact on both exams. The exams test both together, one question after another, with a clock running and nobody telling you which topic is next.',
    'Here you see how the real exams run, warm up on four mixed questions, and then sit a mock of forty questions. They come from every topic at the weight the real exams give it, the answers appear only at the end, and you need 32 right to pass.'],
  flow: [
    { title: 'How the real exams run, and how this mock is built',
      show: [{ kind: 'prose', text: [
        'The A+ certificate takes two exams. Each has up to 90 questions and lasts 90 minutes. Most questions are multiple choice, and a few are performance-based: you do a task on a simulated computer or network, such as fixing a setting on a screen. The first exam is graded out of 900 and needs 675 to pass. The second needs 700. Those are scaled scores from 100 to 900, not a share of the questions you got right.',
        'Each exam is split into domains, and each domain has a weight, the share of the exam it makes up. The first exam: mobile devices 13 percent, networking 23, hardware 25, virtualization and cloud 11, hardware and network troubleshooting 28. The second: operating systems 28, security 28, software troubleshooting 23, operational procedures 21. How a help desk works a ticket counts in the last of these.',
        'The mock keeps those weights in 40 questions: mobile devices 3, networking 5, hardware 5, virtualization and cloud 2, hardware and network troubleshooting 5, operating systems 6, security 5, software troubleshooting 5, operational procedures 4. The answers show only at the end, as in the real exam. You need 32 right, 80 percent. That mark is our own and sits above the real ones, because our questions are easier to guess than the real ones.',
        'Two limits. The mock has no performance-based tasks. And its questions are ones you met along the way, so a good score shows what you remember, not how the real exam will word things. If you miss the pass mark, it comes back in 28 days with questions you have not yet seen coming first.'] }] },
    { set: { items: ['l30-p-raid10', 'l30-p-tailgate', 'l30-p-incr', 'l30-p-tracert'], order: 'shuffle' } }
  ],
  check: {
    items: { draw: [
      { strands: ['mobile-parts', 'mobile-ports', 'mobile-connect'], n: 3 },
      { strands: ['addressing', 'net-devices', 'net-types', 'net-tools', 'servers', 'ports-web', 'ports-mail', 'ports-files', 'ports-admin', 'wifi', 'short-range'], n: 5 },
      { strands: ['drives', 'raid', 'net-cables', 'fiber', 'peripheral', 'connectors', 'display', 'power', 'board', 'cpu', 'firmware', 'memory', 'cooling', 'print-care'], n: 5 },
      { strands: ['virtual', 'cloud'], n: 2 },
      { strands: ['drive-fix', 'boot', 'print-path', 'online', 'wifi-fix', 'mobile-hw-fix'], n: 5 },
      { strands: ['win-tools', 'win-consoles', 'win-settings', 'net-settings', 'net-commands', 'cmd-net', 'cmd-disk', 'cmd-files', 'cmd-admin', 'mac', 'mac-care', 'linux-files', 'linux-admin', 'linux-net', 'editions', 'filesystems', 'install-types', 'app-reqs', 'cloud-tools'], n: 6 },
      { strands: ['access-physical', 'access-logical', 'win-security', 'ad-policy', 'hardening', 'wifi-security', 'soho', 'mobile-secure', 'malware-kinds', 'attacks', 'malware-removal', 'destruction', 'browser-security'], n: 5 },
      { strands: ['win-boot-fix', 'win-run-fix', 'mobile-app-fix', 'mobile-sec-fix'], n: 5 },
      { strands: ['kind', 'story', 'changed', 'known', 'half', 'one', 'finish', 'upset', 'change', 'backup', 'safety', 'evidence', 'policy', 'scripts', 'remote', 'ai'], n: 4 }] },
    feedback: 'at-end',
    pass: [{ right: { min: 32 } }],
    retest: 28
  }
});
