// IT Help Desk, lesson 25 "Accounts and access" (part access): the worked ticket and the three groups of questions.
// Facts: A+ map (docs/research/it-support-aplus.md) Core 2 2.1 (bollards, access control vestibule, badge reader, key fobs, smart cards, biometrics; least privilege, Zero Trust, ACLs, MFA kinds, SAML, SSO,
// just-in-time access and PAM, MDM, DLP, IAM, directory services), 2.2 (Defender, local against Microsoft account, user types, sign-in options and Windows Hello, NTFS against share permissions with inheritance
// and attributes, UAC and Run as administrator, BitLocker, BitLocker To Go, EFS, Active Directory: domain join, login script, OUs, home folders, Group Policy, security groups, folder redirection) and 2.7
// (hardening). The chain taught is who you are -> what you are allowed -> the policy over it, with the door in front (IT4, IT5, IT8: the cheapest test that splits the chain is what the user already did;
// IT9: the cause the test rules out is dropped). Identity of a caller is checked by something the caller did not supply (rulings 11). Invented people.
// Strands: access-physical, access-logical, win-security, ad-policy, hardening.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const L = (id, text) => ({ id, text });
  const recall = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const talk = (id, strand, who, text, prompt, rows, reason) => item({ id, strand,
    blocks: [chat(who, 'm1', text)], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const LINK = 'wrong-link', CAUSE = 'wrong-cause', PART = 'part-first', NOSPLIT = 'no-split', TOOL = 'wrong-tool', LOOK = 'mixed-look-alike', SET = 'wrong-setting',
    GUARD = 'wrong-guard', MUCH = 'too-much-access', LAYER = 'one-layer', SAME = 'same-kind', DEF = 'default-left', LOST = 'lost-recovery', LOCAL = 'local-fix',
    ID = 'no-id-check', AUTH = 'wrong-auth', NEXT = 'no-next', WIPE = 'windows-wipe';
  const PHYS = 'access-physical', LOGI = 'access-logical', WIN = 'win-security', AD = 'ad-policy', HARD = 'hardening';

  FC.items('it-support', [
    // ----- the worked ticket: a favorite cause (her password) that what she already did rules out, then the two layers of permission on the folder -----
    item({
      id: 'l25-w-priya', strand: WIN,
      blocks: [
        chat('Priya, Finance', 'p1', 'I started in Finance on Monday. I can open every file in the Budget folder on the shared drive, but when I save one it says I do not have permission. Can you reset my password?'),
        table('The Budget folder on the file server', ['Layer', 'Who', 'Level'], [
          ['s1', 'Share permission', 'Finance group', 'Change'],
          ['n1', 'NTFS permission', 'Finance group', 'Read & execute']]),
        table('Priya’s account in the directory', ['Check', 'Result'], [
          ['u1', 'Signed in today at 8:12 AM', 'Success'],
          ['u2', 'Member of', 'Finance']]),
        table('From the desk’s rules', ['Rule'], [['r1', 'A change to a shared folder’s permissions needs the folder owner’s approval written in the ticket.']])],
      asks: [ask('Priya signs in and opens the files, but cannot save. Where does the fault sit?', [
        ['Link 2: what she is allowed, because the level on the folder is too low for saving', true, 'She signed in and she opens the files, so she is allowed something. The levels on the folder decide whether that includes saving.'],
        ['Link 1: who she is, because her password is wrong, so reset it', LINK, 'She signed in at 8:12 and opened the files. A wrong password would have stopped her before any folder. A reset changes nothing here.'],
        ['Link 3: the policy, because Group Policy blocks saving on her computer', LINK, 'Nothing in the ticket points at a policy, and the folder’s own two layers already explain what she sees.'],
        ['Her computer is not on the domain, so join it again', CAUSE, 'A domain account signed in today at 8:12, so the computer reached the domain. That is not the fault.']])],
      steps: [
        { id: 'causes', does: 'Write down every place a “no permission” could sit.', working: 'Account and sign-in; the group she is in; the share level; the NTFS level; a policy; a Read-only label on one file.' },
        { id: 'favorite', does: 'Name the favorite cause, her password, and test it with what she already did.', working: 'She signed in at 8:12 and opened the files. The account and the password work, so link 1 is cleared. Resetting the password would change nothing.', ask: 'a' },
        { id: 'group', does: 'Check link 2: her group.', working: 'She is in Finance, and Finance has both a share level and an NTFS level on the folder. That is why she can open the files.' },
        { id: 'layers', does: 'Read both layers; the more restrictive one wins.', working: 'The share gives Change. NTFS gives Read & execute. Across the network the lower one wins, so she gets Read & execute: she can open, not save. Saving needs Modify.' },
        { id: 'done', does: 'Change one thing, with the owner’s approval, then check it.', working: 'Get the owner’s approval in the ticket, then raise the NTFS level for the Finance group to Modify, not Full Control, so no more access than the job needs. Priya saves a file and confirms. The note says which layer was low.' }],
      deciding: ['p1', 'n1'],
      reason: 'She signed in and opened the files, so link 1 works. The share allows Change but the folder’s NTFS level is Read & execute, and the more restrictive layer wins. The fault is on link 2, and the fix is one level on one layer.' }),

    // ----- group 1: with the help shown -----
    talk('l25-p-vest', PHYS, 'Ravi, Facilities', 'Twice this week a person walked into the data room right behind an employee, before the door closed. We want a way in that lets only one person through at a time.',
      'Which measure stops that?', [
        ['An access control vestibule, with a second door that opens only after the first has shut', true, 'Two doors, one after the other, mean one person at a time and nobody close behind. That is the vestibule.'],
        ['Video surveillance on the door, so every visit is recorded', GUARD, 'A camera records who followed. It does not stop anyone from getting in.'],
        ['Bollards outside the entrance, so no vehicle gets near the door', GUARD, 'Bollards stop vehicles. A person on foot walks past them.'],
        ['A badge reader that logs each badge held up to it', GUARD, 'A reader logs the badge, not the person behind it. Two people can still pass on one badge.']],
      'Following close behind is tailgating. A measure that stops it has to let one person through at a time, and that is the access control vestibule.'),
    talk('l25-p-mfa', LOGI, 'Omar, Sales', 'Our sign-in wants my password and then a six-digit code from an app on my phone. The code changes every thirty seconds or so.',
      'Which second check is the code?', [
        ['An authenticator app, making a TOTP: a code made from the clock', true, 'An app that shows a code which changes with the time is an authenticator app, and its code is a TOTP.'],
        ['A hardware token, a small device that shows the code', LOOK, 'A token is a separate physical device. Omar uses an app on his phone.'],
        ['An SMS code, sent to his number in a text message', LOOK, 'Nothing is sent to him. The app makes the code on the phone itself.'],
        ['A voice call that reads out the code', LOOK, 'No call is made. The code comes from the app on the phone.']],
      'A code from an app that changes about every thirty seconds is made from the clock: a TOTP, made by an authenticator app.'),
    talk('l25-p-delete', WIN, 'Jo, Sales', 'I can open the price list folder on the shared drive and add new files, but when I try to delete an old one it says I need permission. I signed in fine this morning.',
      'Which link of the chain is the fault on?', [
        ['Link 2: her level on the folder is below the one that allows deleting', true, 'She signed in, can open and can add, so she holds some permission. Deleting needs a higher level than adding.'],
        ['Link 1: her sign-in is broken, so reset her password', LINK, 'She signed in this morning and opened the folder. The sign-in works.'],
        ['Link 3: a policy blocks her computer from the network', LINK, 'She reaches the folder and adds files. A policy cutting her off would stop that too.'],
        ['The door: she needs a badge before she can use the shared drive', LINK, 'A badge opens a building. She is already working on the drive.']],
      'She signed in and can open and add, so links 1 and 3 give her what she needs. The level on the folder decides whether she can also delete, and it is too low: link 2.'),
    talk('l25-p-uac', WIN, 'Eli, Marketing', 'Every time I install a program, the screen goes dark and a box wants an administrator’s name and password. My account is a standard user. Is my computer broken?',
      'What is the box?', [
        ['User Account Control, making a standard user get an administrator to approve the install', true, 'UAC dims the screen when a change needs administrator rights. A standard user must get an administrator’s name and password. It is working as designed.'],
        ['A virus warning from the antivirus, so scan the whole computer before installing anything else', CAUSE, 'A virus warning names a threat. This box names no threat and only wants administrator rights.'],
        ['The firewall blocking the program, so open its port', CAUSE, 'The firewall controls network traffic. It does not call for an administrator before an install.'],
        ['A damaged profile, so build him a new one', PART, 'A damaged profile shows errors and odd settings. A dark screen with a request for administrator rights is UAC.']],
      'A dimmed screen and a request for an administrator’s name and password is UAC. A standard user cannot approve it alone, and nothing is broken.'),

    // ----- group 2: no help -----
    item({
      id: 'l25-q-both', strand: WIN,
      blocks: [table('The Archive folder', ['Layer', 'For the Staff group', 'Level'], [['s1', 'Share permission', 'Full Control'], ['n1', 'NTFS permission', 'Read']]),
        chat('Marcus, Staff', 'm1', 'I am in Staff and I open the Archive folder through the shared drive on my laptop. What can I do in it?')],
      asks: [ask('What can Marcus do through the share?', [
        ['Read only, because the more restrictive layer wins', true, 'Across the network both layers apply, and the lower of the two decides: Read.'],
        ['Anything, because the share gives Full Control', LAYER, 'The share is one layer. The folder’s own NTFS level is Read, and the lower one wins.'],
        ['Change, the middle between the two levels', LAYER, 'The layers are not averaged. The more restrictive one decides.'],
        ['Nothing, because two different layers cancel each other', CAUSE, 'They do not cancel. Both allow something, and the lower level wins.']])],
      deciding: ['s1', 'n1'],
      reason: 'A person reaching a folder through its share meets both the share permission and the NTFS permission, and the more restrictive of the two wins. Full Control and Read give Read.' }),
    talk('l25-q-readonly', WIN, 'Sam, Legal', 'I can save every file in the Contracts folder except one, the quarterly plan. It opens, but saving says the file is read-only. All the other files in the same folder save fine.',
      'What is the cheapest check?', [
        ['Open that file’s properties and look at its Read-only attribute', true, 'The folder’s permissions are the same for every file, and the others save. Something on this one file differs: its attribute.'],
        ['Move Sam into a different group and try again', LINK, 'Group membership and folder permissions are the same for every file in the folder. The others save, so this is not it.'],
        ['Reset Sam’s password in the directory', LINK, 'His sign-in works, since the other files save.'],
        ['Turn User Account Control off and restart the computer', SET, 'UAC prompts for administrator rights. It does not mark one file read-only.']],
      'Same folder, same permissions, and only one file fails. A label on the file itself fits: the Read-only attribute, which stops saving whatever the permissions say.'),
    talk('l25-q-togo', WIN, 'Hana, Consulting', 'I carry client files on a USB stick. If I lose it, I do not want anyone to read what is on it.',
      'Which protection fits?', [
        ['BitLocker To Go, which locks a removable drive and opens with a password', true, 'BitLocker To Go is BitLocker for removable drives. Without the password the stick cannot be read.'],
        ['BitLocker on the C: drive, which locks the drive Windows is on', TOOL, 'BitLocker on the Windows drive protects that drive. The stick is a different drive and stays open.'],
        ['A BIOS or UEFI password, which guards starting this computer', TOOL, 'A firmware password guards one computer’s start-up. The stick is read on any other computer.'],
        ['Windows Hello, which signs a person in with a face or a fingerprint', TOOL, 'Windows Hello signs in to Windows. It does not encrypt a stick.']],
      'Encrypting a removable drive so a lost one cannot be read is BitLocker To Go. The other tools protect the Windows drive, the start-up or the sign-in.'),
    talk('l25-q-lockout', HARD, 'Nadia, Security', 'Someone is guessing passwords for the same account all night. I want the account to stop taking tries after a few wrong ones.',
      'Which hardening step is this?', [
        ['Failed-attempt lockout, locking the account after a chosen number of wrong passwords', true, 'Lockout is the step that stops guessing: too many wrong tries and the account locks.'],
        ['Password expiration, forcing everyone to choose a new password every few weeks or months', SET, 'Expiration changes passwords on a schedule. A guesser keeps guessing until the password changes.'],
        ['Account expiration, ending the account on a chosen date', SET, 'That ends an account on a date, for a contractor. It does not slow a guesser.'],
        ['Disabling AutoRun, so nothing starts from a plugged-in drive', SET, 'AutoRun is about drives and discs. It has nothing to do with sign-in tries.']],
      'Stopping a guesser means limiting the tries. Failed-attempt lockout locks the account after a chosen number of wrong passwords.'),
    item({
      id: 'l25-q-ou', strand: AD,
      blocks: [chat('Lena, Reception', 'm1', 'My USB drive is blocked on PC-12 at reception but works on PC-15 in the lab. It is the same sign-in on both.'),
        table('Where each computer sits in the directory', ['Computer', 'OU', 'Policy linked to the OU'], [['c1', 'PC-12', 'Reception', 'Block USB storage'], ['c2', 'PC-15', 'Lab', 'None']])],
      asks: [ask('Where does the difference come from?', [
        ['PC-12 sits in an OU that has a policy blocking USB drives, and PC-15 does not', true, 'Group Policy follows the OU. The same person on two computers in different OUs meets different rules.'],
        ['Her domain account is damaged on PC-12, so it must be rebuilt for that computer only', LINK, 'Her sign-in works on both computers. The block is a rule on the computer, not on who she is.'],
        ['Her folder permissions differ between the two PCs', LAYER, 'Folder permissions belong to a folder. They do not decide whether a USB drive is accepted.'],
        ['PC-12 is missing BitLocker, which blocks USB drives', CAUSE, 'BitLocker encrypts drives. Blocking USB storage is a Group Policy setting.']])],
      deciding: ['c1', 'c2'],
      reason: 'The same account behaves differently on two computers, so look at link 3. The computers sit in different OUs, and only the Reception OU has the policy that blocks USB storage.' }),
    item({
      id: 'l25-q-call', strand: LOGI,
      blocks: [note('A caller reaches the help desk. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Dana calls about a locked account. What do you say?', form: 'call', from: 'Dana, Finance', detail: 'Incoming call · 8:40 AM', start: 'one',
        turns: {
          one: { lines: [L('d1', 'Hi, this is Dana in Finance. My account is locked and I have a meeting in five minutes. Please unlock it now.')], push: 'She is in a hurry and is asking for an unlock.',
            options: [{ id: 'check', text: 'I can do that. First I need to check it is you: I will call the number on your directory record and unlock it once you answer there.', goto: 'two' },
              { id: 'now', text: 'Of course, I will unlock it right now so you can get to your meeting.', end: 'now' },
              { id: 'number', text: 'Sure. Read me your employee number and I will unlock it when it matches.', end: 'number' }] },
          two: { lines: [L('d2', 'That is my desk phone, yes. While you are in there, can you make me an administrator on the Finance share? It would save waiting.')], push: 'She is verified, and now wants more access than an unlock.',
            options: [{ id: 'ticket', text: 'I will unlock you now. More access needs your manager’s approval on a ticket, and I will open it and tell you when it is done.', end: 'ticket' },
              { id: 'admin', text: 'Done: you are now an administrator on the Finance share.', end: 'admin' },
              { id: 'left', text: 'I have unlocked you. Nothing else I can do there.', end: 'left' }] }
        },
        ends: {
          ticket: { ok: true, then: 'The number on the directory record is something Dana did not supply, so it checks who she is. An unlock is one job; extra access is another, and it goes through the approval, so she keeps only what her job needs.' },
          now: { ok: false, slip: ID, then: 'Anyone can say a name and a hurry. The unlock waits until the caller is checked by something she did not give.' },
          number: { ok: false, slip: ID, then: 'An employee number the caller reads out is something she supplied, and others can find it. The check has to come from a record the desk holds, such as a call to the number on file.' },
          admin: { ok: false, slip: MUCH, then: 'Administrator rights on a share are far above what the job needs. Extra access goes through the manager’s approval in a ticket.' },
          left: { ok: false, slip: NEXT, then: 'Dana asked for access and is left with no idea how to get it. The ticket and the approval are the way, and she needs to hear that.' } } }],
      reason: 'Before an unlock the desk checks the caller by something she did not supply: here, a call to the number on the directory record. Extra access is a separate change that needs approval, because least privilege gives only what the job needs.' }),

    recall('l25-q-tailgate', PHYS, 'A stranger slips through a secure door by following close behind an employee before it shuts.', 'Type the one-word name for this.',
      ['tailgating', 'tailgate'], 'Following close behind someone through a door is tailgating. An access control vestibule stops it with two doors.'),
    recall('l25-q-otp', LOGI, 'A code that works once and is then useless, such as one sent in a text message.', 'Type its short name, three letters.',
      ['otp'], 'A code that works once is an OTP, a one-time password. A TOTP is an OTP made from the clock.'),
    recall('l25-q-gpupdate', AD, 'The desk changed a Group Policy rule and wants it to reach a computer now instead of waiting.', 'Type the command, with its switch.',
      ['gpupdate /force'], 'gpupdate /force applies Group Policy now. gpresult /r shows which policies applied.'),
    recall('l25-q-gpresult', AD, 'A PC is not following a policy. The desk wants a list of the policies that actually applied to it.', 'Type the command, with its switch.',
      ['gpresult /r'], 'gpresult /r shows which policies applied. gpupdate /force applies them again.'),
    talk('l25-q-pin', LOGI, 'Kai, Design', 'I sign in to my own laptop with a four-digit PIN. On the shared studio PC I typed the same PIN and it was refused, though my account is fine.',
      'Why was the PIN refused?', [
        ['A PIN is tied to the one computer it was made on, so the studio PC does not know it', true, 'A Windows PIN belongs to one PC. The account works, and the studio PC needs its own PIN or his password.'],
        ['His account was locked, because a PIN counts as a wrong password', LINK, 'A locked account would be refused on his laptop too.'],
        ['The studio PC needs a hardware token before any PIN works', AUTH, 'A token is a second check. Nothing in the ticket says one is required.'],
        ['PINs expire after a day on a shared PC', CAUSE, 'A PIN does not expire on a timer. It is tied to one PC.']],
      'A PIN is a short code tied to the one PC it was made on, so the same PIN means nothing on another PC.'),
    talk('l25-q-home', AD, 'Zed, Sales', 'In the office my Documents folder shows my files on every PC I sit at, but they are not on the laptop itself. How does that work?',
      'Which feature is it?', [
        ['A home folder, or folder redirection, which keeps the files on a server', true, 'The files live on a server and show up as a drive or folder, so they follow the person to any PC.'],
        ['EFS, which encrypts the files so any PC can open them', LOOK, 'EFS encrypts files for one account. It does not move them to a server.'],
        ['A login script that copies the files to each PC at sign-in', LOOK, 'A login script runs a small program at sign-in, such as connecting drives. Here the files are kept on the server.'],
        ['A local account, which stores the files on every PC', LOOK, 'A local account exists on one PC only, and its files stay there.']],
      'A personal folder kept on a server, shown on any PC, is a home folder; redirecting Documents to the server does the same.'),
    talk('l25-q-home-edition', AD, 'Ira, Facilities', 'The new laptops came with Windows Home. I tried to join one to the company domain and the option is missing.',
      'What is the cause?', [
        ['Windows Home cannot join a domain; Pro and above can', true, 'Domain join is not in Home. The laptop needs Pro or above.'],
        ['The domain controller is down, so it should be restarted', CAUSE, 'A domain controller that was down would give an error. The option itself is missing.'],
        ['Group Policy blocks domain joins in that OU', LINK, 'A policy applies to computers already in the domain. This one is not yet.'],
        ['His account has no permission, so make him an administrator', MUCH, 'An administrator still sees no option on Home.']],
      'The join option is missing because the edition is Home. Pro and above can join a domain.'),

    // ----- group 3: mixed with lessons 7 and 8 -----
    talk('l25-g-sso', LOGI, 'Beth, HR', 'Every morning I sign in to the payroll site, the benefits site and the training site, each with its own password. Surely there is a way to sign in once.',
      'Which feature lets one sign-in open all three?', [
        ['SSO, where the company’s sign-in service vouches for her to each site, using a standard such as SAML', true, 'Single sign-on is one sign-in for many apps. SAML is a standard it can use to tell each site who she is.'],
        ['MFA, adding a second check such as a code from her phone to every one of the three separate sign-ins', AUTH, 'MFA makes each sign-in stronger. It adds a step; it does not remove the other sign-ins.'],
        ['IAM, creating and removing accounts for the three sites', LOOK, 'IAM is the job of managing accounts and access. It does not join three sign-ins into one.'],
        ['Zero Trust, checking every request from the three sites again', LOOK, 'Zero Trust is the idea of checking each request. It does not give one sign-in.']],
      'One sign-in that opens several apps is SSO. The company’s sign-in service tells each app who the person is, and SAML is a standard way to do that.'),
    talk('l25-g-guest', HARD, 'Tara, Audit', 'The audit found an account on our laptops that anyone can use with no personal settings, and it has limited rights. It is turned off on most machines but on for a few.',
      'Which account is it, and what is the fix?', [
        ['The Guest account; disable it on the laptops where it is on', true, 'Guest is the temporary limited account anyone can use. Hardening turns it off.'],
        ['The default Administrator account; rename it and change its password', DEF, 'The default Administrator has full rights, not limited ones. The account in the audit is Guest.'],
        ['A power user account; move it to the standard group', LOOK, 'A power user is a named person’s account with extra rights. The audit describes an account anyone can use.'],
        ['A Microsoft account; remove the email address from it', LOOK, 'A Microsoft account belongs to a person with an email address. It is not an account anyone can use.']],
      'An account anyone can use, with limited rights and no personal settings, is Guest. Hardening disables it so nobody can sign in with it.'),
    talk('l25-g-efs', WIN, 'Mina, Legal', 'Last year I encrypted a folder of contracts with EFS under my account. IT rebuilt my profile this week and gave me a new account, and now I cannot open the folder.',
      'What happened?', [
        ['EFS ties the files to the old account’s certificate, and the new account does not have it', true, 'EFS encrypts for one account. A new account is a different one, and without the old certificate the files cannot be opened.'],
        ['BitLocker has locked the whole drive since the profile rebuild, and it needs its recovery code', LOOK, 'BitLocker locks a drive at start-up, and the rest of her files open. This one folder was encrypted by EFS.'],
        ['The share permission for the new account is Read only', LAYER, 'A low permission would let her open and read the files. She cannot open them at all.'],
        ['User Account Control is blocking the folder', CAUSE, 'UAC calls for administrator rights. It does not encrypt or hide a folder.']],
      'One folder cannot be opened after the account changed, and it was encrypted by that account: EFS. The certificate is needed, so it should have been backed up before the rebuild.'),
    talk('l25-g-pam', LOGI, 'Cole, Server team', 'An engineer needs administrator rights on the billing server for one hour tonight to install a patch. We do not want him to keep them afterward.',
      'Which approach fits?', [
        ['Just-in-time access through privileged access management: the rights last the hour, then are removed', true, 'Just-in-time access gives administrator rights for the task and takes them back. That is least privilege over time.'],
        ['Make him a permanent administrator and trust him to be careful', MUCH, 'Permanent rights are far more than one hour of work needs.'],
        ['Give him the default administrator password, written on a note', DEF, 'A shared default password gives full rights to anyone who reads the note, and nothing is ever taken back.'],
        ['Add his account to the Guest group for the night', CAUSE, 'Guest has limited rights. It cannot install a patch.']],
      'Rights for one task, then removed, is just-in-time access, which is what privileged access management does.'),
    item({
      id: 'l25-g-local', strand: WIN,
      blocks: [chat('Raj, Accounts', 'm1', 'I sign in to my desk PC fine. On the spare PC in the meeting room my name and password are rejected, though they are the same ones.'),
        table('From the desk’s records', ['Computer', 'Joined to the domain'], [['c1', 'Raj’s desk PC', 'Yes'], ['c2', 'Meeting-room PC', 'No']])],
      asks: [ask('Why is the sign-in rejected on one PC?', [
        ['The meeting-room PC is not on the domain, so it has no account for him', true, 'A domain account works on computers joined to the domain. A PC that is not joined only knows its own local accounts.'],
        ['His password expired overnight, on one PC only', CAUSE, 'A password belongs to the account, not to a PC. It would fail on his desk PC too.'],
        ['A Group Policy has locked his account out of that one computer, though not out of his desk PC', LINK, 'A policy that blocked him would apply to computers in a domain. This PC is not in it.'],
        ['The firewall on the meeting-room PC blocks the sign-in', CAUSE, 'The firewall controls network traffic. It does not reject a name that the PC does not have an account for.']])],
      deciding: ['c1', 'c2'],
      reason: 'The same sign-in works on one PC and not another, and the records show one is joined to the domain and one is not. The domain account is unknown to a PC outside the domain: link 1 differs per computer.' }),
    talk('l25-g-autorun', HARD, 'Fatima, Reception', 'A visitor plugged a USB stick into the front desk PC and a program started by itself before anyone opened anything. How do we stop that?',
      'Which hardening step is it?', [
        ['Disable AutoRun, so nothing on a plugged-in drive starts by itself', true, 'AutoRun is the Windows feature that starts a program from a plugged-in drive. Turning it off stops that.'],
        ['A BIOS or UEFI password, so that nobody can change the boot order or other start-up settings', SET, 'A firmware password guards start-up settings. The program started after Windows was running.'],
        ['A shorter screen lock timeout for the reception PC', SET, 'A lock stops a person using a PC left alone. The program ran by itself.'],
        ['Disabling the Guest account on every computer', SET, 'Guest is a sign-in account. The USB program did not sign in to anything.']],
      'A program that starts by itself from a plugged-in drive is AutoRun. Disabling it is the hardening step.')
  ]);
})();
