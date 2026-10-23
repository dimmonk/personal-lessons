// IT Help Desk, lesson 22 "Installing and upgrading": the eight new questions of the check (two on editions, two on file systems, two on installing, one on an app's
// requirements, one on cloud tools). Facts as in items-l22.js (A+ map Core 2 1.1, 1.2, 1.3, 1.10, 1.11). Invented people.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows, id) => ({ kind: 'document', form: 'table', ...(id ? { id } : {}), title, head, rows: rows.map(([rid, ...cells]) => ({ id: rid, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'say', kind: 'text', prompt: 'Type your answer.', accept }], reason });
  const EDI = 'wrong-edition', FSL = 'wrong-filesystem', INS = 'wrong-install', REQ = 'unmet-requirement', LIC = 'license-missed',
    NOBACK = 'no-backup', CAUSE = 'wrong-cause', PART = 'part-first', LOOK = 'mixed-look-alike';
  const E = 'editions', F = 'filesystems', I = 'install-types', A = 'app-reqs', C = 'cloud-tools';

  FC.items('it-support', [
    chat('l22-k-path', E, 'Dora, Sales',
      'My Windows 11 Home laptop needs BitLocker for a customer contract. Our IT person says to wipe it and put Windows on again from scratch.',
      'What is the better way?', [
        ['Upgrade the edition in place to Pro, which keeps her files, apps and settings and adds BitLocker', true, 'Home to Pro is an in-place edition upgrade with a Pro license. BitLocker is a Pro feature, and nothing is erased.'],
        ['Wipe it, as the technician said, since an edition can only be changed by a clean install, which also gives her a clean Windows 11 to start from', INS, 'Home to Pro is changed in place. Going down from Pro to Home is the one that needs a clean install.'],
        ['Turn BitLocker on in Home, in the same Settings page as device encryption', EDI, 'Home has no BitLocker. Pro and above have it.'],
        ['Install the N version, which adds the security features that Home lacks', EDI, 'N leaves out media features. It does not add security features.']],
      'BitLocker is a Pro feature, so the edition must rise to Pro. Home to Pro is an in-place upgrade and keeps everything.'),
    chat('l22-k-n', E, 'Fred, Marketing',
      'My new laptop says Windows 11 Pro N. I cannot play the training videos, and the Camera and Media Player apps are missing.',
      'What is the cause?', [
        ['N versions leave out the media features; the Media Feature Pack adds them back', true, 'N editions were made without media features for Europe. Installing the Media Feature Pack from Microsoft restores them.'],
        ['The laptop is faulty, so it goes back for replacement', PART, 'Nothing is broken. The edition was sold without those features.'],
        ['Pro N is a smaller edition, so it needs more memory to play video', EDI, 'N is not about memory. It is about which media features come with Windows.'],
        ['The videos use the wrong file system, so they need to be copied to exFAT', FSL, 'Media features are missing from Windows itself. A file system does not decide whether a video plays.']],
      'The deciding words are Pro N and media apps are missing. N versions come without media features, and the pack adds them back.'),
    recall('l22-k-fat4', F, 'A single file of what size or larger will not fit on a FAT32 drive? Type the size with its unit.', ['4 GB', '4GB', '4 gigabytes'],
      'FAT32 stops a single file at 4 GB, so a bigger file needs exFAT or NTFS.'),
    chat('l22-k-apfs', F, 'Isla, Design',
      'My external drive came from my old Mac, where Disk Utility called it APFS. On my work PC, Windows says the drive needs formatting. My photos are on it, with no other copy.',
      'What do you do?', [
        ['Do not format it. Windows cannot read APFS; read it on a Mac, or add software that reads it', true, 'Apple’s own file system is not read by Windows without extra software. Formatting would erase the photos.'],
        ['Click Format, since Windows always offers that to fix an unreadable drive', NOBACK, 'Formatting erases everything on the drive, and the photos have no other copy.'],
        ['Format it as NTFS so that Windows can use it, and then copy the photos back from the old Mac when it is free', NOBACK, 'The format erases the photos first, so there is nothing left to restore.'],
        ['Run chkdsk until the drive is repaired, since the drive is damaged', CAUSE, 'The drive is fine. Windows simply does not know the file system.']],
      'The deciding words are came from my old Mac and Windows says the drive needs formatting. Windows cannot read APFS, and formatting would erase the photos.'),
    recall('l22-k-tpm', I, 'Windows 11 needs a TPM. Which version of the TPM does it need? Type the number.', ['2.0', '2', 'TPM 2', 'TPM 2.0', 'version 2', 'version 2.0'],
      'Windows 11 needs TPM 2.0, along with UEFI firmware that is Secure Boot capable.'),
    chat('l22-k-repair', I, 'Gus, Warehouse',
      'After a failed update Windows still starts, but Settings and several programs crash, and sfc could not repair the files. The update was uninstalled and no restore points exist. I have no recent backup and the files on it matter. The programs took days to set up.',
      'The smaller repairs are used up. Which installation kind fits, once his files are copied off?', [
        ['A repair installation, which replaces the Windows system files and keeps his files and programs', true, 'A repair installation, run from inside the Windows that starts, puts back the damaged files and leaves files and apps as they were.'],
        ['A clean install, which gives a fresh Windows without the failed update', INS, 'A clean install erases the drive and the programs that took days to put in, when a repair installation keeps them.'],
        ['The recovery partition, which brings back the computer the way it shipped', INS, 'It returns the maker’s copy, so his added programs and, usually, files go.'],
        ['An image deployment from another computer that works, so that this one matches it and has the same Windows and programs', INS, 'An image replaces everything on the drive, and his files and programs would be gone.']],
      'The deciding words are Windows still starts, smaller repairs used up and programs took days. A repair installation fixes Windows and keeps files and apps; the other kinds erase them. His files are copied off first all the same.'),
    chat('l22-k-token', A, 'Jess, Engineering',
      'Our costing program started on my old PC and now says “Security dongle not found”. I am on the new PC, and the program is installed fine.',
      'What is the next step?', [
        ['Plug in the small USB dongle that came with the program, since it needs that token to run', true, 'Some programs need an external hardware token to prove the license. Without it plugged in, the program will not open.'],
        ['Reinstall the program, since the install is the part that failed', REQ, 'The program installed fine. It is asking for a device, not for files.'],
        ['Add graphics memory, since the program needs more VRAM to start', REQ, 'The message names the dongle, not the graphics.'],
        ['Switch to the 32-bit version of the program, since the 64-bit version is the one that looks for the dongle', REQ, 'The bit width does not change the need for the token.']],
      'The deciding words are Security dongle not found and the program is installed fine. The program needs its external hardware token.'),
    chat('l22-k-identity', C, 'Noor, HR',
      'I changed my password at my desk this morning. The office computer takes the new one, but my cloud mail and apps still want the old one.',
      'What do you check?', [
        ['Whether identity synchronization from the office directory to the cloud is running', true, 'Identity synchronization copies account details, passwords included, from the office directory to the cloud. If it is stuck, the cloud keeps the old password.'],
        ['Whether the cloud mail license has been assigned to her account in the admin console, since the old password still works', LIC, 'The ticket gives no sign of a license problem: the apps open and only the password differs. Licenses decide what you can do, not which password the cloud accepts.'],
        ['Whether her mailbox is full, since a full mailbox blocks the password', CAUSE, 'A full mailbox does not control which password the cloud accepts.'],
        ['Whether the sync folder on her laptop is paused', LIC, 'The folder sync moves files. Passwords belong to identity synchronization.']],
      'The deciding words are office computer takes the new one and cloud still wants the old one. That is identity synchronization between the two places.')
  ]);
})();
