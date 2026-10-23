// IT Help Desk, lesson 24 "Mac and Linux": the eight questions of the check, all new, no help. Facts as in items-l24.js (A+ map Core 2 1.8 and 1.9). Invented people.
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
  const TOOL = 'wrong-tool', LOOK = 'mixed-look-alike', CAUSE = 'wrong-cause', PART = 'part-first', OS = 'wrong-os', FOLD = 'wrong-folder', ROOT = 'root-everywhere', SKIP = 'skipped-step',
    NOBACK = 'no-backup', OPEN = 'open-up', NOSPLIT = 'no-split';

  FC.items('it-support', [
    chat('l24-k-mission', 'mac', 'Ruth, Sales', 'I have fourteen windows open across three desktops on my Mac and I have lost the budget spreadsheet.',
      'What shows every open window and desktop on a Mac?', [
        ['Mission Control, which spreads out all windows and desktops', true, 'Mission Control is the Mac’s Task View: every open window and every desktop in one view.'],
        ['Spotlight, which finds a file from the words in its name', TOOL, 'Spotlight searches for files and apps. It does not lay out the open windows.'],
        ['The Dock, which holds shortcuts to the apps used most often', TOOL, 'The Dock is the Mac’s taskbar. It shows apps, not every window and desktop.'],
        ['Force Quit, which lists the open apps that can be stopped', TOOL, 'Force Quit stops apps. It does not show windows or desktops.']],
      'Seeing every window and desktop together is Mission Control, the counterpart of Task View.'),
    recall('l24-k-folder', 'mac', 'On a Mac, which folder holds the apps that are installed for everyone?', 'Type the folder name.',
      ['Applications'], 'Installed apps live in /Applications. /Users holds each person’s files, /Library holds settings shared by every user and /System holds macOS itself.'),
    recall('l24-k-tm', 'mac-care', 'What is the Mac’s own backup tool called, the one that keeps copies of files that can be brought back?', 'Type its name.',
      ['Time Machine'], 'Time Machine is the Mac’s backup, the counterpart of File History. It keeps copies on a drive and lets you go back to an earlier one.'),
    chat('l24-k-corp', 'mac-care', 'Nia, Legal', 'I tried to install a game from the App Store on my company Mac with my personal Apple ID. A message says the company does not allow this. The Mac works normally.',
      'What is going on?', [
        ['The company manages the Mac and limits what is installed and which Apple ID is used', true, 'A company can manage its Macs and put limits on them, so this is a company rule. The desk can say whether the app is allowed.'],
        ['The App Store is broken on this Mac, so reinstall macOS to fix it', CAUSE, 'The message names a company rule, and the Mac works normally. Reinstalling would erase her files to fix something that is not broken.'],
        ['FileVault is switched on, so it blocks every new app from loading', CAUSE, 'FileVault encrypts the drive. It does not decide which apps may be installed.'],
        ['The Mac is out of date, so run the updates and try the game again', CAUSE, 'An old macOS does not produce a message about company rules.']],
      'The message names a company rule. A company can manage its Macs, limiting what is installed and which Apple ID is used, so it is not a fault to repair.'),
    chat('l24-k-chmod', 'linux-files', 'Gus, Operations', 'I own the file backup.sh on a Linux machine, but when I type ./backup.sh it says “Permission denied”. The file is not marked as allowed to run.',
      'Which command changes who may read, write or run a file?', [
        ['chmod, which changes the permissions of a file', true, 'chmod changes the read, write and run permissions. The file is his, but it is not marked as allowed to run.'],
        ['chown, which changes the person who owns a file', LOOK, 'chown changes the owner. Gus already owns the file; the permissions are what is wrong.'],
        ['mv, which moves a file or gives it a new name', TOOL, 'mv moves or renames the file. It does not change its permissions.'],
        ['grep, which searches the text inside files for a word', TOOL, 'grep searches inside files. It changes nothing.']],
      'chmod changes what a file allows (read, write, run); chown changes who owns it. The file is already his, so chmod is the fix.'),
    recall('l24-k-shadow', 'linux-files', 'Linux keeps the scrambled passwords of its accounts in a file in /etc that only root can read. The list of the accounts themselves is /etc/passwd.', 'Type the name of the file.',
      ['(etc) shadow'], '/etc/shadow holds the scrambled passwords and only root reads it. /etc/passwd lists the accounts themselves, without their passwords.'),
    chat('l24-k-boot', 'linux-admin', 'Kai, Service desk', 'A Linux machine passes its start-up test and the firmware finds the boot drive, but nothing loads after that. I need to know which part comes next.',
      'Which part runs next and loads the kernel?', [
        ['The bootloader, the first program that starts from the boot drive', true, 'After the firmware finds the boot drive, the bootloader runs and loads the kernel, the core of the system.'],
        ['systemd, the program that starts the services', LOOK, 'systemd starts the services after the kernel is running, so it comes later.'],
        ['sudo, the command that grants root’s rights', TOOL, 'sudo is a command typed after sign-in. It has no part in starting the machine.'],
        ['fsck, the check that repairs the file system', TOOL, 'fsck checks a file system. It is not a stage of start-up.']],
      'The chain on Linux: firmware, the boot drive, the bootloader, the kernel, systemd (which starts the services), then sign-in. The bootloader loads the kernel.'),
    recall('l24-k-trace', 'linux-net', 'In Windows, tracert shows each stop on the way to another computer. What is the Linux command that does the same job?', 'Type the command.',
      ['traceroute'], 'traceroute is the Linux tracert: it lists each stop on the path to a destination.')
  ]);
})();
