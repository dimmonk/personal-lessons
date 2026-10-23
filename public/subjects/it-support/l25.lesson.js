// IT Help Desk, lesson 25: Accounts and access (part access). Core 2 objectives 2.1 (physical and logical security measures), 2.2 (Windows security settings: accounts and groups, sign-in, NTFS and share
// permissions, UAC, BitLocker, EFS, Active Directory) and 2.7 (workstation hardening) of the A+ map (docs/research/it-support-aplus.md). The chain taught is the chain of access: who you are (account and
// sign-in) -> what you are allowed (groups and permissions) -> the policy over it (Group Policy, lockout, device rules), with the physical door in front of it; an "access denied" ticket is placed on one
// link before anything is changed. Research: IT4, IT5 and IT8 (a functional breakdown plus the cheapest test that splits it: signing in and opening the files clears link 1), IT9 (drop the cause the test
// rules out), IT2 (protect the data: BitLocker and EFS need a way back in), IT25 to IT27 (the exam facts are asked from memory, spaced), IT28 and IT29 (worked ticket, then fading help); rulings 11 of
// docs/subjects/it-support/rulings-l1-8.md (identity is checked by something the caller did not supply) and 6. Plan: docs/subjects/it-support/plan.md, lesson 25.
// Strands: access-physical, access-logical, win-security, ad-policy, hardening. One worked ticket (Priya cannot save in the Budget share); a first group of four with help; a second of six; a third of six
// mixed with lessons 7 and 8; the check: eight new questions, 7 of 8 to pass.
FC.lesson('it-support', {
  id: 'l25', part: 'access', title: 'Accounts and access', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (the chain of access: who you are, what you are allowed, the policy over it, with the physical door in front; MFA kinds, NTFS against share permissions, UAC, BitLocker, Active Directory, Group Policy and hardening; exam facts asked from memory and as tickets).' }],
  why: [
    'Priya started in Finance on Monday. She chats the desk: she can open every file in the Budget folder on the shared drive, but every time she saves, Windows says she does not have permission. Resetting her password would feel like the obvious move. It would change nothing, because her password is not what is wrong.',
    'Here you learn the chain between a person and a file: who you are, what you are allowed, and the policy over both, with the door of the building in front. Each “access denied” ticket belongs on one link, and you find it before you change anything.'],
  flow: [
    { title: 'The chain of access',
      show: [{ kind: 'prose', text: [
        'Before a person reaches a file there are three checks, in order. Link 1, who you are: the account and the way you sign in. Link 2, what you are allowed: the groups the account is in and the permissions on the folder. Link 3, the policy over it: rules the company applies to many accounts and computers at once. In front of all three is the door: a badge, a lock, a reader.',
        'The cheapest test is what the user already did. Signed in: link 1 works. Opened the file: link 2 gives something, and the question is how much. Works on one PC but not another: look at link 3, or at an account that exists on only one PC.'] }] },
    { title: 'The door: physical security',
      show: [{ kind: 'document', form: 'table', title: 'Physical measures', head: ['Measure', 'What it does'], rows: [
        { id: 'p1', cells: ['Bollards', 'Strong posts that stop a vehicle'] },
        { id: 'p2', cells: ['Access control vestibule', 'Two doors; the second opens only after the first shuts, so nobody follows close behind (tailgating)'] },
        { id: 'p3', cells: ['Badge reader', 'Opens a door for a card and records who went in'] },
        { id: 'p4', cells: ['Video, alarm, motion sensor', 'Record or warn; they stop nobody'] },
        { id: 'p5', cells: ['Lock, fence, guard', 'Keep people out; an equipment lock holds a laptop or server in place'] },
        { id: 'p6', cells: ['Lighting, magnetometer', 'Light shows people; a magnetometer is a metal detector'] },
        { id: 'p7', cells: ['Key fob, smart card, mobile digital key', 'Carried: a fob is held near a reader, a smart card has a chip, the phone is the key. All can be lent'] },
        { id: 'p8', cells: ['Biometrics', 'Fingerprint, palm, retina, face, voice. The body is the proof, so it cannot be lent'] }] }] },
    { title: 'Link 1: who you are',
      show: [{ kind: 'document', form: 'table', title: 'Accounts and ways to sign in', head: ['Name', 'What it is'], rows: [
        { id: 'a1', cells: ['Local account', 'On one PC only; no other PC knows it'] },
        { id: 'a2', cells: ['Microsoft account', 'An email address; settings and OneDrive follow the person'] },
        { id: 'a3', cells: ['Domain account', 'Made by the company in Active Directory; works on any PC joined to the domain'] },
        { id: 's2', cells: ['PIN', 'A short code tied to one PC'] },
        { id: 's3', cells: ['Windows Hello', 'Face or fingerprint (or PIN) with no password'] },
        { id: 's5', cells: ['SSO (single sign-on)', 'One sign-in that opens many apps'] }] }] },
    { title: 'Proving who you are: MFA',
      show: [{ kind: 'prose', text: [
        'There are three kinds of proof: something you know (password, PIN), something you have (card, phone, token) and something you are (fingerprint, face). Multifactor authentication, MFA, means two or more different kinds. A password and a PIN are the same kind, so not MFA. A password and a phone code are.'] },
      { kind: 'document', form: 'table', title: 'Second checks', head: ['Check', 'How it works'], rows: [
        { id: 'm1', cells: ['Authenticator app, TOTP', 'The app shows a code made from the clock, new about every 30 seconds'] },
        { id: 'm4', cells: ['Hardware token', 'A small device that shows a code, or a USB device the person plugs in'] },
        { id: 'm5', cells: ['SMS, voice call, email', 'A code sent to the number or address on file'] },
        { id: 'm3', cells: ['OTP', 'Any code that works once'] }] }] },
    { title: 'The exam’s names for access ideas',
      show: [{ kind: 'document', form: 'table', title: 'Access ideas', head: ['Name', 'What it means'], rows: [
        { id: 'x1', cells: ['Least privilege', 'Only the access the job needs'] },
        { id: 'x2', cells: ['Zero Trust', 'No trust for being on the office network; every request is checked again'] },
        { id: 'x3', cells: ['ACL (access control list)', 'A list on a file or folder of who may do what'] },
        { id: 'x4', cells: ['Directory services', 'A central database of accounts and computers; Active Directory is Microsoft’s'] },
        { id: 'x5', cells: ['IAM', 'Identity and access management: creating accounts, giving and removing access'] },
        { id: 'x6', cells: ['SAML', 'The standard that tells an app who is signed in; it makes SSO work between services'] },
        { id: 'x7', cells: ['Just-in-time access, PAM', 'Privileged access management: administrator rights for the time a task needs, then removed'] },
        { id: 'x8', cells: ['MDM', 'Mobile device management: rules on phones and tablets, such as screen lock and remote wipe'] },
        { id: 'x9', cells: ['DLP', 'Data loss prevention: spots sensitive data, such as card numbers, and blocks it leaving'] }] }] },
    { title: 'Link 2: users, groups and permissions',
      show: [{ kind: 'document', form: 'table', title: 'User types', head: ['Type', 'Can do'], rows: [
        { id: 'u1', cells: ['Standard user', 'Run programs and change its own settings'] },
        { id: 'u2', cells: ['Administrator', 'Install software, change any setting, manage accounts'] },
        { id: 'u3', cells: ['Guest', 'Temporary, limited, off by default'] },
        { id: 'u4', cells: ['Power user', 'Older group between standard and administrator'] }] },
      { kind: 'prose', text: [
        'A security group is a list of accounts. Give a permission to the group once, and move people in and out as jobs change. A folder on a file server has two layers: NTFS permissions on the folder itself, and share permissions that apply only across the network. A person on the network meets both, and the more restrictive wins: share Full Control with NTFS Read gives Read.'] },
      { kind: 'document', form: 'table', title: 'Levels and more', head: ['Name', 'What it means'], rows: [
        { id: 'n1', cells: ['Share levels', 'Read, Change, Full Control'] },
        { id: 'n2', cells: ['NTFS levels', 'Read, Write, Read & execute, List folder contents, Modify, Full control. Modify saves and deletes; Write adds and saves but cannot delete'] },
        { id: 'n3', cells: ['Inheritance', 'A folder passes its permissions to what is inside; turned off on a subfolder, it keeps its own'] },
        { id: 'n4', cells: ['Attributes', 'Labels on one file. Read-only will not save, whatever the permissions say'] }] }] },
    { title: 'UAC and Run as administrator',
      show: [{ kind: 'prose', text: [
        'User Account Control, UAC, dims the screen and checks before anything needing administrator rights runs. An administrator clicks Yes; a standard user must type an administrator’s name and password. It is not a fault. Run as administrator, by right-clicking a program, starts it with full rights after that prompt. sfc /scannow needs it.'] }] },
    { title: 'Link 3: Active Directory and Group Policy',
      show: [{ kind: 'prose', text: [
        'A company keeps its accounts in one domain, run by a domain controller. Windows Home cannot join a domain; Pro and above can.'] },
      { kind: 'document', form: 'table', title: 'Parts of Active Directory', head: ['Part', 'What it does'], rows: [
        { id: 'd1', cells: ['Domain join', 'Lets domain accounts sign in on a PC'] },
        { id: 'd2', cells: ['OU (organizational unit)', 'A folder in the domain holding accounts and computers; moving one in puts it under that OU’s policies'] },
        { id: 'd4', cells: ['Group Policy', 'Rules for an OU: password rules, blocked USB drives, locked settings'] },
        { id: 'd5', cells: ['Login script', 'Runs at sign-in, for example to connect shared drives'] },
        { id: 'd6', cells: ['Home folder, folder redirection', 'A personal folder on a server, so files follow the person to any PC'] }] },
      { kind: 'prose', text: [
        'gpupdate /force applies policy now, and gpresult /r shows which policies applied.'] }] },
    { title: 'Protecting what is on the machine',
      show: [{ kind: 'document', form: 'table', title: 'Windows protections', head: ['Protection', 'What it does'], rows: [
        { id: 'w1', cells: ['Defender Antivirus', 'Looks for malware; its definitions (the list of known malware) must stay updated'] },
        { id: 'w2', cells: ['Defender Firewall', 'Blocks or allows traffic by port and by program'] },
        { id: 'w3', cells: ['BitLocker', 'Encrypts the Windows drive (Pro and above). The TPM chip holds the code; save the recovery key, since a changed board locks the data without it'] },
        { id: 'w4', cells: ['BitLocker To Go', 'The same for a USB stick, opened with a password'] },
        { id: 'w5', cells: ['EFS', 'Encrypts single files for one account; if its certificate is lost, so are the files'] }] }] },
    { title: 'Hardening a workstation',
      show: [{ kind: 'document', form: 'table', title: 'Hardening steps', head: ['Step', 'What it stops'], rows: [
        { id: 'h1', cells: ['Password rules: length, complexity, uniqueness, expiration', 'Easy guesses and reuse'] },
        { id: 'h2', cells: ['BIOS/UEFI password', 'Changing the boot order or starting from a USB stick'] },
        { id: 'h3', cells: ['Screen lock, log off', 'Use of a PC someone walked away from'] },
        { id: 'h4', cells: ['Failed-attempt lockout', 'Guessing: the account locks after a chosen number of wrong passwords'] },
        { id: 'h5', cells: ['Login times, account expiration', 'Use outside working hours or after a contractor’s end date'] },
        { id: 'h6', cells: ['Disable Guest; change the default administrator name and password', 'An account anyone can use; attackers who know the factory login'] },
        { id: 'h8', cells: ['Disable AutoRun, unused services', 'A USB program starting by itself; extra ways in'] }] }] },
    { title: 'Making everyone an administrator',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“Nothing keeps being refused for Priya, so I will make her an administrator, or give Everyone Full Control on the folder.”',
        'It clears the ticket and breaks least privilege: anything she runs, or is tricked into running, now has full rights. Fix the link that failed: Modify for her group on that one folder.',
        'Another common shortcut: “reset the account because the caller says who they are”. Anyone can say a name. Check the caller by something the caller did not supply: the number on record, the manager looked up in the directory.'] }] },
    { worked: 'l25-w-priya' },
    { set: { items: ['l25-p-vest', 'l25-p-mfa', 'l25-p-delete', 'l25-p-uac'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l25-q-both', 'l25-q-readonly', 'l25-q-togo', 'l25-q-lockout', 'l25-q-ou', 'l25-q-call', 'l25-q-tailgate', 'l25-q-otp', 'l25-q-gpupdate', 'l25-q-gpresult', 'l25-q-pin', 'l25-q-home', 'l25-q-home-edition'], order: 'shuffle' } },
    { set: { items: ['l25-g-sso', 'l25-g-guest', 'l25-g-efs', 'l25-g-pam', 'l25-g-local', 'l25-g-autorun'], order: 'shuffle', mix: { from: ['l7', 'l8'], share: 0.3 } } }
  ],
  check: {
    items: ['l25-k-bio', 'l25-k-id', 'l25-k-dlp', 'l25-k-inherit', 'l25-k-bitlocker', 'l25-k-gpo', 'l25-k-uefi', 'l25-k-default'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
