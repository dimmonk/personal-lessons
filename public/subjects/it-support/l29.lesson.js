// IT Help Desk, lesson 29: The whole ticket, and the mock exam (part whole), the subject's last lesson. Plan: docs/subjects/it-support/plan.md, lesson 29 and the "Real-world test" (IT24, IT25: practice mixed across
// topics, unlabelled, with no help, is what transfers; IT21, P26: our own pass marks). No new teaching: one screen recaps the nine moves and the chains of lessons 9 to 28 by name.
// Shape: why; the recap; ten new tickets from every system, no help (the plan's first test: the first move right on 8 of 10 and no data lost); the check is the plan's second test, a 40-question mock drawn at random from
// every exam-fact and scenario topic (all of lessons 9 to 28), 32 right to pass, retested in 28 days. The draw is not weighted by the exam's domain weights (the engine draws by topic only).
FC.lesson('it-support', {
  id: 'l29', part: 'whole', title: 'The whole ticket, and the mock exam', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan: a recap of the nine moves and the chains, ten new tickets from every system with no help, and a 40-question mock exam drawn from every exam topic.' }],
  why: [
    'It is 9 a.m. on your first week. The next ticket is a laptop with a black screen, then a printer, then a locked account, then a phone that is hot to the touch. Nobody tells you which system it is, and nobody shows you the deciding words.',
    'Here you do the job as it will be. First ten tickets from every system, with no help. Then a mock exam of forty questions on the facts and scenarios of both A+ exams, drawn from everything in this subject. The mock is graded at the end, and you need 32 right to pass.'],
  flow: [
    { title: 'The nine moves, and the chains, by name',
      show: [{ kind: 'prose', text: [
        'Every ticket gets the same nine moves, in order: sort it, get their words and search what the desk knows, find out what changed and protect their data, try the known fix with a limit, cut it in half with the cheapest test, change one thing at a time, check it works for them and say what happens next, hand it on with everything you found, and write it up.',
        'Each system has a chain, and the cheapest test splits it. The boot chain: power, the start-up test, firmware, the boot drive, Windows, sign-in. The print path: app, queue, driver, printer, paper. The connection chain: link, address, gateway, name lookup, service. Wireless and phones: radio, connection, account, app. Windows: the tool that shows the fault, then its fix. Security: account, password, permission, and the ten steps to remove malware in order. The desk: change, backup, evidence, policy.',
        'Reading a ticket: the first move is usually sort it or get the story; once the ticket shows a symptom, the next move is a test that splits a chain, or protecting data that has no other copy. Never start with a part, a reset or a reinstall.'] }] },
    { set: { items: ['l29-t-nosignal', 'l29-t-apipa', 'l29-t-spool', 'l29-t-battery', 'l29-t-noos', 'l29-t-diskfull', 'l29-t-phish', 'l29-t-denied', 'l29-t-third', 'l29-t-patch'], order: 'shuffle' } }
  ],
  check: {
    items: { draw: { strands: ['drives', 'raid', 'drive-fix', 'boot', 'power', 'board', 'cpu', 'firmware', 'memory', 'cooling', 'print-path', 'print-care', 'net-cables', 'fiber', 'peripheral', 'connectors', 'display', 'online', 'addressing', 'net-commands', 'net-settings', 'net-devices', 'net-types', 'net-tools', 'servers', 'ports-web', 'ports-mail', 'ports-files', 'ports-admin', 'wifi', 'short-range', 'wifi-fix', 'wifi-security', 'soho', 'mobile-hw-fix', 'mobile-app-fix', 'mobile-sec-fix', 'mobile-parts', 'mobile-ports', 'mobile-connect', 'mobile-secure', 'win-tools', 'win-consoles', 'win-settings', 'mac', 'mac-care', 'linux-files', 'linux-admin', 'linux-net', 'editions', 'filesystems', 'install-types', 'app-reqs', 'cloud-tools', 'win-boot-fix', 'win-run-fix', 'cmd-net', 'cmd-disk', 'cmd-files', 'cmd-admin', 'access-physical', 'access-logical', 'win-security', 'ad-policy', 'hardening', 'change', 'backup', 'safety', 'evidence', 'policy', 'scripts', 'remote', 'ai', 'virtual', 'cloud', 'malware-kinds', 'attacks', 'malware-removal', 'destruction', 'browser-security'], n: 40 } },
    feedback: 'at-end',
    pass: [{ right: { min: 32 } }],
    retest: 28
  }
});
