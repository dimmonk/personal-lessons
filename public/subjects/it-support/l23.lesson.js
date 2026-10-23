// IT Help Desk, lesson 23: Windows problems (part windows-fix). The twelve Core 2 3.1 signs placed on lesson 9's chain (power, start-up self-test, firmware, boot drive, Windows loading,
// sign-in and profile) or on the running system (memory, drivers, services, programs, time), and worked with the unit 1 moves: what changed and the ways back (roll back a driver or an update,
// System Restore, safe mode, Startup Repair in the Windows Recovery Environment), cut in half (safe mode and clean boot split Windows from what is added to it; a new test profile splits the profile
// from the machine; one program or all; one user or all) and the right tool (Event Viewer, Task Manager, Device Manager, the Services console, msconfig, sfc: named, taught in the Windows tools parts).
// Research: docs/research/it-support.md IT4, IT5, IT8 (cut the problem space), IT9 (one change at a time, drop a ruled-out cause), IT2 (protect the data); docs/research/it-support-aplus.md
// Core 2 3.1 (BSOD, degraded performance, boot issues, frequent shutdowns, services not starting, applications crashing, low memory warnings, USB controller resource warnings, system instability,
// no OS found, slow profile load, time drift), 1.4 and 1.5 (the tools and sfc), Core 1 5.1/5.2 (boot symptoms). Plan: lesson 23. One worked ticket (Dara: the memory Dara blames, ruled out by the stop code;
// the driver found in the log); a first group of four with the deciding words marked; a second of twelve; a third of three mixed with lessons 9 and 5; the check: six new tickets, no help, 5 of 6 to pass.
FC.lesson('it-support', {
  id: 'l23', part: 'windows-fix', title: 'Windows problems', rev: 2, status: 'draft',
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (the twelve Windows signs placed on the boot chain or the running system; the ways back; the cuts safe mode, clean boot and a test profile; the right tool for each).' }, { rev: 2, date: "2026-10-23", change: "Fixes from the learner and research reviews; names made unique across the subject and people called by name or they." }],
  why: [
    'Dara says their computer blue-screens and restarts, and they are sure the memory is going. But the blue screen names what failed, and the log shows what was installed the evening before.',
    'Windows fails on the way up or after sign-in. Here you place each sign, then work it with what changed, a cut in half, and the tool that shows it.'],
  flow: [
    { title: 'Two places a Windows fault can sit',
      show: [{ kind: 'prose', text: [
        'On the way up, a computer climbs six links: power, start-up self-test, firmware, boot drive, Windows loading, sign-in and profile. Where it stops names the link.',
        'After sign-in it is the running system: drivers (small programs that let Windows use a part), services (background programs with no window, such as the one that keeps the clock right), memory (RAM, the working space all open programs share), and the user’s programs.',
        'A blue screen (BSOD) can come in either place. Its stop code names what failed.'] },
      { kind: 'document', form: 'table', title: 'Where each sign sits', head: ['What you see', 'Where', 'What it points at'], rows: [
        { id: 'w1', cells: ['Blue screen with a stop code', 'Link 5, or the running system', 'A driver, a file, memory or the drive; the code names it'] },
        { id: 'w2', cells: ['Restarts at the logo, or loops through the dots', 'Links 3 to 5', 'Damaged start-up files, a bad update or driver'] },
        { id: 'w3', cells: ['“No operating system found”', 'Link 3 or 4', 'Firmware screen decides: drive not listed, the drive or cable; listed, the boot order or damaged start-up files'] },
        { id: 'w4', cells: ['Sign-in takes minutes for one person', 'Link 6, the profile', 'Their profile: damaged, or so large that what changed copies over the network at every sign-in'] },
        { id: 'w5', cells: ['Slow all day (degraded performance)', 'The running system', 'What is using the processor, memory or drive; Task Manager shows it'] },
        { id: 'w6', cells: ['Shuts off by itself, repeatedly', 'Power, heat, or Windows crashing', 'No blue screen and a hot computer: heat or power'] },
        { id: 'w7', cells: ['A service will not start', 'The running system', 'Its startup type, a service it depends on, or its account'] },
        { id: 'w8', cells: ['A program keeps crashing', 'The running system', 'One: that program. Several: Windows files, memory or the drive'] },
        { id: 'w9', cells: ['“Low on memory” warning', 'The running system', 'Too much open, a growing program, or too little RAM'] },
        { id: 'w10', cells: ['A yellow triangle on a USB controller; “not enough USB controller resources”', 'The running system', 'Too many devices on one controller (a limited number, fewer behind a hub), or its driver'] },
        { id: 'w11', cells: ['Random freezes and odd errors (system instability)', 'The running system', 'Something added or changed, a damaged Windows file, or failing memory or drive'] },
        { id: 'w12', cells: ['The clock is wrong (time drift)', 'Link 3, or the running system', 'Reset to an odd date such as January 1: the motherboard battery. One hour off (daylight setting) or wrong zone: Date and time settings. Drifting while running: the time service'] }] }] },
    { title: 'What changed, and the ways back',
      show: [{ kind: 'prose', text: [
        'A fault usually follows something that began that day: a driver, update, program or new part. The user may not know it; the log often does.',
        'Windows keeps ways back, smallest first. Startup Repair comes first when Windows will not start; when it starts, a driver, update or program comes out first. Before anything that rewrites system files, copy out the user’s files if not saved elsewhere. With two changes, undo the newer first and test. Safe mode is not a way back but a place to undo from.'] },
      { kind: 'document', form: 'table', title: 'The ways back, smallest first', head: ['Way back', 'What it undoes', 'What it leaves alone'], rows: [
        { id: 'b1', cells: ['Startup Repair, in the Windows Recovery Environment (WinRE)', 'Damaged or missing start-up files', 'The rest of Windows. WinRE is a repair mode that opens after failed starts or from a USB install drive; it holds System Restore, safe mode and a command prompt that can copy files off'] },
        { id: 'b2', cells: ['Roll back a driver (Device Manager, Driver tab)', 'The newest version of one driver', 'Everything else. The button is grayed out when no older version is kept'] },
        { id: 'b3', cells: ['Uninstall an update (Update history)', 'One Windows update', 'Everything else'] },
        { id: 'b4', cells: ['Uninstall a program', 'That program', 'Everything else, but its drivers and services may stay'] },
        { id: 'b5', cells: ['System Restore', 'Drivers, programs and settings changed since a restore point', 'The user’s documents; it removes programs installed after that point'] },
        { id: 'b6', cells: ['Reset this PC, or a repair installation (Setup run from a Windows that starts)', 'Reset: programs and settings, and files if you choose. Repair installation: damaged system files only', 'Repair installation keeps files and apps. Copy files off before either'] },
        { id: 'b7', cells: ['Clean install of Windows', 'Everything on the system', 'Nothing, unless files were copied first. The last step'] }] }] },
    { title: 'Cutting a Windows fault in half',
      show: [{ kind: 'document', form: 'table', title: 'The cuts, and what each one splits', head: ['The cut', 'It splits', 'If the fault goes away'], rows: [
        { id: 'c1', cells: ['Safe mode', 'Windows and hardware, from the drivers and services Windows adds', 'The fault is in a driver, service or startup program. Bad memory can still fail in safe mode, so a clean hour is only some evidence'] },
        { id: 'c2', cells: ['Clean boot (msconfig for services, Task Manager for startup programs): only Microsoft services, no startup programs', 'Windows, from third-party services and startup programs', 'One of them is the cause. Turn half back on and keep halving'] },
        { id: 'c3', cells: ['A new test profile (a second user on the same computer)', 'The profile, from the computer', 'The old profile. If it stays: the computer or network'] },
        { id: 'c4', cells: ['One program or all programs?', 'That program, from Windows', 'One program: update or repair it. All: Windows, memory or the drive'] },
        { id: 'c5', cells: ['One user or all users? One computer or many?', 'The user, the computer or the company', 'Many computers: something shared'] }] },
      { kind: 'prose', text: [
        'This assumes one fault at a time. Never request the user’s password to test a profile; use a test account the desk creates.'] }] },
    { title: 'The tool that shows it',
      show: [{ kind: 'prose', text: [
        'Each tool answers a different question; the cheap read comes before any change.'] },
      { kind: 'document', form: 'table', title: 'Which tool for which question', head: ['The question', 'The tool'], rows: [
        { id: 't1', cells: ['What went wrong, when, and what was installed?', 'Event Viewer: its System and Application logs, with times'] },
        { id: 't2', cells: ['What is using the processor, memory or drive now? What starts at sign-in?', 'Task Manager: Processes, Performance and Startup'] },
        { id: 't3', cells: ['Which device has a warning, and which driver?', 'Device Manager: a yellow triangle, and the Driver tab'] },
        { id: 't4', cells: ['Is this service running, how does it start, what does it need first?', 'The Services console (services.msc): status, startup type, Dependencies tab'] },
        { id: 't5', cells: ['Safe mode, or only Microsoft’s services?', 'msconfig (System Configuration): safe boot and which services load. Startup programs go off in Task Manager'] },
        { id: 't6', cells: ['Are Windows’s own files damaged?', 'sfc /scannow, in a command prompt opened as administrator'] }] }] },
    { title: 'Blue screens and slowness mean reinstall',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“It blue-screens and is slow, so I will back up the files and reinstall Windows, and if that fails, order a new computer.”',
        'A reinstall costs a day and every program, and hides the cause: if a bad driver did it, the fault comes back. The stop code, the log and the cuts take minutes and change nothing. The ways back come first, smallest first.'] }] },
    { worked: 'l23-w-dara' },
    { set: { items: ['l23-p-blue', 'l23-p-noos', 'l23-p-profile', 'l23-p-service'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l23-s-slow', 'l23-s-memory', 'l23-s-shutdown', 'l23-s-crash', 'l23-s-usb', 'l23-s-zone', 'l23-s-restore', 'l23-s-clean', 'l23-s-loop', 'l23-s-sfc', 'l23-r-winre', 'l23-x-call'], order: 'shuffle' } },
    { set: { items: ['l23-g-two', 'l23-g-copy', 'l23-g-smell'], order: 'shuffle', mix: { from: ['l9', 'l5'], share: 0.3 } } }
  ],
  check: {
    items: ['l23-k-ram', 'l23-k-roam', 'l23-k-clock', 'l23-k-time', 'l23-k-full', 'l23-k-usb'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 5 } }]
  }
});
