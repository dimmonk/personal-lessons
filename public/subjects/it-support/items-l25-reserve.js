// IT Help Desk, lesson 25 "Accounts and access": questions held in reserve for the weekly review, at least three for each of the five topics (access-physical, access-logical, win-security, ad-policy, hardening).
// Facts as in items-l25.js (A+ map Core 2 2.1, 2.2 and 2.7). Invented people.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const talk = (id, strand, who, text, prompt, rows, reason) => item({ id, strand,
    blocks: [chat(who, 'm1', text)], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const LINK = 'wrong-link', CAUSE = 'wrong-cause', SET = 'wrong-setting', GUARD = 'wrong-guard', MUCH = 'too-much-access', LAYER = 'one-layer', SAME = 'same-kind', DEF = 'default-left',
    ID = 'no-id-check', AUTH = 'wrong-auth', LOOK = 'mixed-look-alike', TOOL = 'wrong-tool', LOCAL = 'local-fix', OPEN = 'left-open';
  const PHYS = 'access-physical', LOGI = 'access-logical', WIN = 'win-security', AD = 'ad-policy', HARD = 'hardening';

  FC.items('it-support', [
    // ----- access-physical -----
    talk('l25-r-bollard', PHYS, 'Dev, Shop owner', 'A van drove into the glass front of the shop next door last month. I want something outside my entrance that stops a vehicle.',
      'Which measure fits?', [
        ['Bollards, short strong posts in front of the glass', true, 'Bollards stop vehicles from reaching a building.'],
        ['A magnetometer at the door, to find metal', GUARD, 'A magnetometer is a metal detector for people. It does not stop a vehicle.'],
        ['An alarm that rings when the glass breaks', GUARD, 'An alarm warns after the damage. It stops nothing.'],
        ['A badge reader on the front door', GUARD, 'A reader controls who walks in. A van does not use the door.']],
      'A measure against a vehicle has to be in its way. Bollards are posts strong enough to stop one.'),
    recall('l25-r-fob', PHYS, 'A small plastic device on a ring, held near a reader to open a door. Staff carry one each.', 'Type its short name, one word.',
      ['fob', 'key fob', 'keyfob'], 'A fob is held near a reader to open a door. A smart card has a chip and is often used with a PIN.'),
    talk('l25-r-mag', PHYS, 'Court, Security desk', 'We want to find metal objects that visitors carry in before they reach the courtroom.',
      'Which measure fits?', [
        ['A magnetometer at the entrance', true, 'A magnetometer is a metal detector. It finds metal on a person as they enter.'],
        ['Lighting over the car park', GUARD, 'Lighting helps people be seen. It does not find metal.'],
        ['Video surveillance of the hallway', GUARD, 'Cameras record. They do not find a hidden object.'],
        ['A vestibule with two doors', GUARD, 'A vestibule lets in one person at a time. It does not find metal.']],
      'Finding metal on people entering is the job of a magnetometer.'),
    // ----- access-logical -----
    talk('l25-r-zero', LOGI, 'Mo, Network team', 'A visitor connected to our office Wi-Fi and could open the payroll system right away, because the network is trusted. We want every request checked again, whoever it is from.',
      'Which idea is that?', [
        ['Zero Trust, which checks every request instead of trusting the inside', true, 'Zero Trust gives no one trust for being on the office network. Each request is checked.'],
        ['Least privilege, which gives only the access a job needs', LOOK, 'That limits how much access an account has. It does not check each request again.'],
        ['SSO, which signs a person in once for many apps', LOOK, 'SSO reduces sign-ins. It does not check each request.'],
        ['DLP, which blocks sensitive data from leaving', LOOK, 'DLP watches data leaving. It does not decide who is trusted.']],
      'Checking every request instead of trusting the office network is Zero Trust.'),
    talk('l25-r-least', LOGI, 'Wen, Intern', 'I need to export one report from the finance system. Can you just make me an administrator so nothing gets in the way?',
      'What does least privilege say to do?', [
        ['Give access to that one report, for as long as the job needs it', true, 'Least privilege gives only what the job needs: this report, not the whole system.'],
        ['Make him an administrator, since interns are trusted', MUCH, 'Administrator is far more than one report needs.'],
        ['Give him the finance manager’s sign-in for the day', MUCH, 'Sharing a sign-in hides who did what and gives the manager’s full access.'],
        ['Refuse and tell him to find another way to get the report', 'no-next', 'Saying no and leaving him with no other way gives him nothing to do. Least privilege gives the report access he needs.']],
      'Least privilege is the smallest access that does the job.'),
    talk('l25-r-same', LOGI, 'Sol, Security', 'We added a security question after the password and now call the sign-in multifactor. A colleague says it is not.',
      'Who is right?', [
        ['The colleague: a password and an answer are both something you know', true, 'MFA needs two different kinds of proof. Both of these are something you know.'],
        ['Sol: two checks are always multifactor', SAME, 'Two checks of the same kind are still one kind. A code from a phone would be a second kind.'],
        ['Sol: a question is something you have, so it counts', SAME, 'An answer is held in memory, so it is something you know.'],
        ['The colleague: a question can never be part of MFA, even with a hardware token', SAME, 'A question is allowed as one check. The point is that a second, different kind is missing.']],
      'MFA is two or more different kinds of proof: know, have, are. A password and an answer are the same kind.'),
    talk('l25-r-saml', LOGI, 'Ula, Cloud team', 'Our sign-in service has to tell an outside app that this person is signed in. Which standard carries that message?',
      'Which standard is it?', [
        ['SAML', true, 'SAML is the standard way for the sign-in service to tell an app who is signed in. It is what makes SSO work between services.'],
        ['TOTP', LOOK, 'TOTP is a time-based code. It is a second check, not a message to an app.'],
        ['DLP', LOOK, 'DLP blocks sensitive data from leaving. It does not carry a sign-in.'],
        ['MDM', LOOK, 'MDM manages phones and tablets. It does not carry a sign-in.']],
      'SAML carries the message that a person is signed in, from the sign-in service to the app.'),
    // ----- win-security -----
    talk('l25-r-account', WIN, 'Noel, Design', 'On my home PC I sign in with my email address and my background and settings follow me to a new laptop. On the office laptop they do not, and I use a different name.',
      'What kind of account does he use at home?', [
        ['A Microsoft account, kept online and the same on any PC he signs in on', true, 'A Microsoft account uses an email address and carries settings to any PC.'],
        ['A local account, kept on that one computer', LOOK, 'A local account lives on one PC. Its settings would not follow him to a laptop.'],
        ['A domain account, made by his company', LOOK, 'A domain account comes from a company directory. He uses it at the office, not at home.'],
        ['The Guest account, with no personal settings', LOOK, 'Guest has no personal settings to carry.']],
      'An email address that works on any PC and carries settings with it is a Microsoft account.'),
    item({
      id: 'l25-r-network', strand: WIN,
      blocks: [chat('Bo, Archive', 'm1', 'Sitting at the file server I can save in the Reports folder. From my laptop, through the share, I can only read.'),
        table('The Reports folder', ['Layer', 'Bo’s group', 'Level'], [['r1', 'Share permission', 'Read'], ['r2', 'NTFS permission', 'Modify']])],
      asks: [ask('Why does it differ?', [
        ['At the server only the NTFS level applies; through the share both apply and the lower, Read, wins', true, 'Sitting at the server there is no share, only the NTFS level. Over the network both layers meet, and Read is lower.'],
        ['His laptop is not allowed to run User Account Control', CAUSE, 'UAC has nothing to do with which layer applies.'],
        ['The NTFS level is lower than the share level', LAYER, 'Here the share is the lower one: Read against Modify.'],
        ['His sign-in works only at the server', LINK, 'His sign-in works on both, or he would not be able to read.']])],
      deciding: ['r1', 'r2'],
      reason: 'NTFS permissions apply however a folder is reached. Share permissions add a second layer only across the network, and the more restrictive wins: Read.' }),
    talk('l25-r-defender', WIN, 'Ivy, Accounts', 'Windows Security says my virus protection is on, but the scan list says the definitions are four weeks old.',
      'What do you do?', [
        ['Update the Defender Antivirus definitions, then scan', true, 'Definitions are the list of known malware. An old list misses new malware. Update them.'],
        ['Turn the firewall off and on again', TOOL, 'The firewall filters network traffic. It does not hold malware definitions.'],
        ['Run BitLocker on the drive', TOOL, 'BitLocker encrypts a drive. It does not detect malware.'],
        ['Disable Defender because it is out of date', TOOL, 'Switching protection off leaves the PC with none. Updating fixes the problem.']],
      'Out-of-date protection is fixed by updating the definitions, the list of known malware.'),
    talk('l25-r-runas', WIN, 'Ty, Desk 2', 'I typed sfc /scannow in a normal Command Prompt window and it says I must run it as administrator.',
      'What is the next step?', [
        ['Close it, then right-click Command Prompt and choose Run as administrator', true, 'sfc needs full rights. Run as administrator starts the window with them, after the UAC prompt.'],
        ['Turn User Account Control off so nothing is refused', MUCH, 'Turning UAC off removes a safety check and is not needed for one command.'],
        ['Make his account a permanent administrator', MUCH, 'Permanent rights are more than one command needs. Step up for the task.'],
        ['Run the command again; the message will go away', 'no-split', 'Running the same command in the same window repeats the same refusal. The rights come from how the window is started.']],
      'Some commands need administrator rights. Starting the program with Run as administrator gives them for that task only.'),
    // ----- ad-policy -----
    recall('l25-r-script', AD, 'A small program in the domain that runs when a person signs in and connects their shared drives.', 'Type its two-word name.',
      ['login script', 'logon script', 'sign-in script', 'signin script'],
      'A login script runs at sign-in, for example to connect drives. A home folder is a personal folder on a server.'),
    talk('l25-r-ou', AD, 'Hal, HR', 'Zoe moved from Sales to Finance. She still gets the Sales team’s policies and drive letters, and not Finance’s.',
      'What do you change?', [
        ['Move her account object into the Finance OU', true, 'Policies follow the OU. Moving the object to Finance puts her under Finance’s policies.'],
        ['Give her a new password', LINK, 'Her sign-in works. The rules she receives come from her OU.'],
        ['Reinstall Windows on her computer', LOCAL, 'The computer is fine. The directory decides the policies she receives.'],
        ['Run gpresult on her laptop each morning', LOCAL, 'gpresult only shows what applied. It does not change which policies apply.']],
      'In Active Directory an object receives the policies of the OU it sits in. Moving it to a new OU changes them.'),
    talk('l25-r-group', AD, 'Ray, File server', 'Forty people in Accounting need Modify on the Invoices folder, and people join and leave all the time.',
      'What is the cleanest way?', [
        ['Give Modify to one security group, Accounting, and move people in and out', true, 'A group is a list of accounts. One permission on it covers everyone, and membership handles the changes.'],
        ['Give Modify to each of the forty accounts one by one', MUCH, 'That is forty permissions to track and clean up each time someone leaves.'],
        ['Give Everyone Full Control, to save time', MUCH, 'That gives the whole company full control. It breaks least privilege.'],
        ['Share one Accounting sign-in between all forty', ID, 'A shared sign-in hides who did what and cannot be taken away from one person.']],
      'Permissions go to a security group. People move in and out of the group, not on and off the folder.'),
    // ----- hardening -----
    talk('l25-r-expire', HARD, 'Ada, HR', 'A contractor’s project ends on 30 November. We want the account to stop working that day without anyone remembering to do it.',
      'Which step fits?', [
        ['Account expiration, with the end date on the account', true, 'Account expiration turns an account off on a chosen date, as for a contractor.'],
        ['Password expiration, so the password lasts a while', SET, 'That forces a new password. The account would still work after the project.'],
        ['Failed-attempt lockout, after a few wrong tries', SET, 'Lockout reacts to wrong passwords. It does not depend on a date.'],
        ['Restricting login times to office hours', SET, 'That limits hours in a day. It does not end the account on a date.']],
      'An account that must stop on a date uses account expiration.'),
    talk('l25-r-service', HARD, 'Kit, Kiosk team', 'The kiosk PC is only used for one app. Windows still runs a file-sharing service and a remote tool nobody uses.',
      'What does hardening say to do?', [
        ['Disable the unused services', true, 'Every running service is one more way in. Unused ones are turned off.'],
        ['Leave them, because services cannot be attacked', OPEN, 'A service that listens for connections can be attacked, used or not.'],
        ['Turn on AutoRun to keep the services busy', SET, 'AutoRun is about plugged-in drives. It is not a way to manage services.'],
        ['Lower the password length so staff sign in faster', SET, 'Shorter passwords weaken the PC. They are not a service.']],
      'Hardening removes doors that are not needed. Unused services are turned off.'),
    talk('l25-r-unique', HARD, 'Bea, Security', 'After a website was breached, attackers tried the same email and password on our company sign-in and got in on four accounts.',
      'Which password rule would have stopped it?', [
        ['Uniqueness: a different password for every service', true, 'Uniqueness means a password is not reused. A leaked password from one site then opens nothing else.'],
        ['Expiration: a new password every few months', SET, 'Expiration changes passwords on a schedule. The attackers used them immediately.'],
        ['Complexity: capital letters and numbers', SET, 'Complexity makes a password harder to guess. These were not guessed; they were reused.'],
        ['Length: at least twelve characters', SET, 'Length also makes guessing harder. These passwords were copied from a breach.']],
      'A password reused across sites is only as safe as the weakest site. Uniqueness is the rule that stops it.')
  ]);
})();
