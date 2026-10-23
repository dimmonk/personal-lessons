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
    talk('l25-r-bollard', PHYS, 'Isaac, Shop owner', 'A van drove into the glass front of the shop next door last month. I want something outside my entrance that stops a vehicle.',
      'Which measure fits?', [
        ['Bollards, strong posts in front of the glass', true, 'Bollards stop vehicles from reaching a building.'],
        ['A magnetometer at the door, to find metal on people', GUARD, 'A magnetometer is a metal detector for people. It does not stop a vehicle.'],
        ['An alarm that rings when the glass breaks', GUARD, 'An alarm warns after the damage. It stops nothing.'],
        ['A badge reader on the front door of the shop', GUARD, 'A reader controls who walks in. A van does not use the door.']],
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
    talk('l25-r-zero', LOGI, 'Dante, Network team', 'A visitor connected to our office Wi-Fi and could open the payroll system right away, because the network is trusted. We want every request checked again, whoever it is from.',
      'Which idea is that?', [
        ['Zero Trust, which checks every request, inside or out', true, 'Zero Trust gives no one trust for being on the office network. Each request is checked.'],
        ['Least privilege, which gives only the access a job needs', LOOK, 'That limits how much access an account has. It does not check each request again.'],
        ['SSO, which signs a person in once for many apps', LOOK, 'SSO reduces sign-ins. It does not check each request.'],
        ['DLP, which blocks sensitive data from leaving', LOOK, 'DLP watches data leaving. It does not decide who is trusted.']],
      'Checking every request instead of trusting the office network is Zero Trust.'),
    talk('l25-r-least', LOGI, 'Donna, Intern', 'I need to export one report from the finance system. Can you just make me an administrator so nothing gets in the way?',
      'What does least privilege say to do?', [
        ['Give access to that one report, for as long as needed', true, 'Least privilege gives only what the job needs: this report, not the whole system.'],
        ['Make Donna an administrator, since interns are trusted', MUCH, 'Administrator is far more than one report needs.'],
        ['Give Donna the finance manager’s sign-in for the day', MUCH, 'Sharing a sign-in hides who did what and gives the manager’s full access.'],
        ['Refuse and tell Donna to find another way to get the report', 'no-next', 'Saying no and leaving Donna with no other way leaves Donna stuck. Least privilege gives the report access Donna needs.']],
      'Least privilege is the smallest access that does the job.'),
    talk('l25-r-same', LOGI, 'Sol, Security', 'We added a security question after the password and now call the sign-in multifactor. A colleague says it is not.',
      'Who is right?', [
        ['The colleague: a password and an answer are both something you know', true, 'MFA needs two different kinds of proof. Both of these are something you know.'],
        ['Sol: two checks are always multifactor', SAME, 'Two checks of the same kind are still one kind. A code from a phone would be a second kind.'],
        ['Sol: a question is something you have, so it counts', SAME, 'An answer is held in memory, so it is something you know.'],
        ['Sol: a security question is a third kind of proof, so the sign-in counts', SAME, 'A question and its answer are something you know, the same kind as a password. A second, different kind is missing.']],
      'MFA is two or more different kinds of proof: know, have, are. A password and an answer are the same kind.'),
    talk('l25-r-saml', LOGI, 'Kristin, Cloud team', 'Our sign-in service has to tell an outside app that this person is signed in. Which standard carries that message?',
      'Which standard is it?', [
        ['SAML', true, 'SAML is the standard way for the sign-in service to tell an app who is signed in. It is what makes SSO work between services.'],
        ['TOTP', LOOK, 'TOTP is a time-based code. It is a second check, not a message to an app.'],
        ['DLP', LOOK, 'DLP blocks sensitive data from leaving. It does not carry a sign-in.'],
        ['MDM', LOOK, 'MDM manages phones and tablets. It does not carry a sign-in.']],
      'SAML carries the message that a person is signed in, from the sign-in service to the app.'),
    // ----- win-security -----
    talk('l25-r-account', WIN, 'Noel, Design', 'On my home PC I sign in with my email address and my background and settings follow me to a new laptop. On the office laptop they do not, and I use a different name.',
      'What kind of account does Noel use at home?', [
        ['A Microsoft account, which follows Noel to any PC', true, 'A Microsoft account uses an email address and carries settings to any PC.'],
        ['A local account, which lives on that one computer only', LOOK, 'A local account lives on one PC. Its settings would not follow Noel to a laptop.'],
        ['A domain account, made by Noel’s company in the directory', LOOK, 'A domain account comes from a company directory. Noel uses it at the office, not at home.'],
        ['The Guest account, which carries no personal settings', LOOK, 'Guest has no personal settings to carry.']],
      'An email address that works on any PC and carries settings with it is a Microsoft account.'),
    item({
      id: 'l25-r-network', strand: WIN,
      blocks: [chat('Bo, Archive', 'm1', 'Sitting at the file server I can save in the Reports folder. From my laptop, through the share, I can only read.'),
        table('The Reports folder', ['Layer', 'Bo’s group', 'Level'], [['r1', 'Share permission', 'Read'], ['r2', 'NTFS permission', 'Modify']])],
      asks: [ask('Why does it differ?', [
        ['At the server only NTFS applies; through the share the lower, Read, wins', true, 'Sitting at the server there is no share, only the NTFS level. Over the network both layers meet, and Read is lower.'],
        ['Bo’s laptop is not allowed to run User Account Control at all', CAUSE, 'UAC has nothing to do with which layer applies.'],
        ['The NTFS level on the folder is lower than the share level, so NTFS wins', LAYER, 'Here the share is the lower one: Read against Modify.'],
        ['Bo’s sign-in works only when sitting at the server itself', LINK, 'Bo’s sign-in works on both, or Bo would not be able to read.']])],
      deciding: ['r1', 'r2'],
      reason: 'NTFS permissions apply however a folder is reached. Share permissions add a second layer only across the network, and the more restrictive wins: Read.' }),
    talk('l25-r-defender', WIN, 'Mustafa, Accounts', 'Windows Security says my virus protection is on, but the scan list says the definitions are four weeks old.',
      'What do you do?', [
        ['Update the Defender Antivirus definitions, then scan', true, 'Definitions are the list of known malware. An old list misses new malware. Update them.'],
        ['Turn the Defender Firewall off and on again to refresh it', TOOL, 'The firewall filters network traffic. It does not hold malware definitions.'],
        ['Run BitLocker on the drive to protect against malware', TOOL, 'BitLocker encrypts a drive. It does not detect malware.'],
        ['Disable Defender because its definitions are out of date', TOOL, 'Switching protection off leaves the PC with none. Updating fixes the problem.']],
      'Out-of-date protection is fixed by updating the definitions, the list of known malware.'),
    talk('l25-r-runas', WIN, 'Ty, Desk 2', 'I typed sfc /scannow in a normal Command Prompt window and it says I must run it as administrator.',
      'What is the next step?', [
        ['Right-click Command Prompt and choose Run as administrator', true, 'sfc needs full rights. Run as administrator starts the window with them, after the UAC prompt.'],
        ['Turn User Account Control off so that nothing is refused again', MUCH, 'Turning UAC off removes a safety check and is not needed for one command.'],
        ['Make Ty’s account a permanent administrator on this computer', MUCH, 'Permanent rights are more than one command needs. Step up for the task.'],
        ['Run the command again in the same window; it should work', 'no-split', 'Running the same command in the same window repeats the same refusal. The rights come from how the window is started.']],
      'Some commands need administrator rights. Starting the program with Run as administrator gives them for that task only.'),
    // ----- ad-policy -----
    recall('l25-r-script', AD, 'A small program in the domain that runs when a person signs in and connects their shared drives.', 'Type its two-word name.',
      ['login script', 'logon script', 'sign-in script', 'signin script'],
      'A login script runs at sign-in, for example to connect drives. A home folder is a personal folder on a server.'),
    talk('l25-r-ou', AD, 'Michelle, HR', 'Zoe moved from Sales to Finance. Zoe still gets the Sales team’s policies and drive letters, and not Finance’s.',
      'What do you change?', [
        ['Move Zoe’s account object into the Finance OU', true, 'Policies follow the OU. Moving the object to Finance puts Zoe under Finance’s policies.'],
        ['Give Zoe a new password and have Zoe sign in again', LINK, 'Zoe’s sign-in works. The rules Zoe receives come from Zoe’s OU.'],
        ['Reinstall Windows on Zoe’s computer from scratch', LOCAL, 'The computer is fine. The directory decides the policies Zoe receives.'],
        ['Run gpresult on Zoe’s laptop every morning', LOCAL, 'gpresult only shows what applied. It does not change which policies apply.']],
      'In Active Directory an object receives the policies of the OU it sits in. Moving it to a new OU changes them.'),
    talk('l25-r-group', AD, 'Ernest, File server', 'Forty people in Accounting need Modify on the Invoices folder, and people join and leave all the time.',
      'What is the cleanest way?', [
        ['Give Modify to one Accounting group, and move people in and out', true, 'A group is a list of accounts. One permission on it covers everyone, and membership handles the changes.'],
        ['Give Modify to each of the forty accounts one by one, and remove it when they leave', MUCH, 'That is forty permissions to track and clean up each time someone leaves.'],
        ['Give Everyone Full Control, to save time', MUCH, 'That gives the whole company full control. It breaks least privilege.'],
        ['Share one Accounting sign-in between all forty', ID, 'A shared sign-in hides who did what and cannot be taken away from one person.']],
      'Permissions go to a security group. People move in and out of the group, not on and off the folder.'),
    // ----- hardening -----
    talk('l25-r-expire', HARD, 'Sebastian, HR', 'A contractor’s project ends on 30 November. We want the account to stop working that day without anyone remembering to do it.',
      'Which step fits?', [
        ['Account expiration, using the project’s end date', true, 'Account expiration turns an account off on a chosen date, as for a contractor.'],
        ['Password expiration, so the password lasts a while', SET, 'That forces a new password. The account would still work after the project.'],
        ['Failed-attempt lockout, after a few wrong tries', SET, 'Lockout reacts to wrong passwords. It does not depend on a date.'],
        ['Restricting login times to office hours for that account', SET, 'That limits hours in a day. It does not end the account on a date.']],
      'An account that must stop on a date uses account expiration.'),
    talk('l25-r-service', HARD, 'Miguel, Kiosk team', 'The kiosk PC is only used for one app. Windows still runs a file-sharing service and a remote tool nobody uses.',
      'What does hardening say to do?', [
        ['Disable the unused services', true, 'Every running service is one more way in. Unused ones are turned off.'],
        ['Leave them, because services cannot be attacked', OPEN, 'A service that listens for connections can be attacked, used or not.'],
        ['Turn on AutoRun to keep the services busy', SET, 'AutoRun is about plugged-in drives. It is not a way to manage services.'],
        ['Lower the password length so staff sign in faster', SET, 'Shorter passwords weaken the PC. They are not a service.']],
      'Hardening removes doors that are not needed. Unused services are turned off.'),
    talk('l25-r-unique', HARD, 'Nathan, Security', 'After a website was breached, attackers tried the same email and password on our company sign-in and got in on four accounts.',
      'Which password rule would have stopped it?', [
        ['Uniqueness: no password used on two services', true, 'Uniqueness means a password is not reused. A leaked password from one site then opens nothing else.'],
        ['Expiration: a new password every few months for all staff', SET, 'Expiration changes passwords on a schedule. The attackers used them immediately.'],
        ['Complexity: capital letters and numbers', SET, 'Complexity makes a password harder to guess. These were not guessed; they were reused.'],
        ['Length: at least twelve characters', SET, 'Length also makes guessing harder. These passwords were copied from a breach.']],
      'A password reused across sites is only as safe as the weakest site. Uniqueness is the rule that stops it.')
  ]);
})();
