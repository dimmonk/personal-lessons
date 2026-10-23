// IT Help Desk, lesson 25 "Accounts and access": the eight questions of the check, all new, no help. Facts as in items-l25.js (A+ map Core 2 2.1, 2.2 and 2.7). Invented people. Pronouns: named ticket people are named or "they" (ruling 22).
// Rulings: identity of a caller is checked by something the caller did not supply (rulings-l1-8.md, 11).
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
  const LINK = 'wrong-link', CAUSE = 'wrong-cause', SET = 'wrong-setting', GUARD = 'wrong-guard', MUCH = 'too-much-access', LAYER = 'one-layer', DEF = 'default-left',
    LOST = 'lost-recovery', ID = 'no-id-check', AUTH = 'wrong-auth', LOOK = 'mixed-look-alike', WIPE = 'windows-wipe';
  const PHYS = 'access-physical', LOGI = 'access-logical', WIN = 'win-security', AD = 'ad-policy', HARD = 'hardening';

  FC.items('it-support', [
    talk('l25-k-bio', PHYS, 'Kathleen, Pharmacy', 'The door to our drug store room opens with a card. Staff lend their cards to each other, and we cannot tell who went in. We want the door to open only for the person themselves.',
      'Which way of opening the door fits?', [
        ['A fingerprint reader, since the body cannot be lent', true, 'A fingerprint is biometrics: the proof is the person, and it cannot be handed to a colleague.'],
        ['A fob held near the reader, since each one is numbered', GUARD, 'A fob is carried, like a card. It can be lent in the same way.'],
        ['A smart card with a chip, since it is harder to copy', GUARD, 'A smart card is still a thing someone holds. Lending it is exactly the problem.'],
        ['A digital pass on the phone, since people keep their phones', GUARD, 'A phone can also be lent, and it can open the door for someone else.']],
      'Cards, fobs and phones are things a person has, so they can be lent. Biometrics, such as a fingerprint, is who the person is, so only they can open the door.'),
    item({
      id: 'l25-k-id', strand: LOGI,
      blocks: [chat('Caller, by chat', 'm1', 'I am Chris Bell, the CFO’s assistant. The CFO is traveling and needs the password reset now. My employee number is 40718 and my manager is Olga Ward, who will confirm it.')],
      asks: [ask('What do you do first?', [
        ['Look Chris up in the directory and call the number on that record', true, 'The record and the number on it are held by the company. The caller did not supply them, so they can check who Chris is.'],
        ['Check the employee number Chris gave against the directory records', ID, 'Chris read out the number personally. Matching it proves Chris knows a number, not who Chris is.'],
        ['Call Olga Ward on the number Chris gave you and check whether Chris is genuine', ID, 'Anyone can give the number of a friend. The manager has to be looked up in the directory.'],
        ['Reset it and force a new password at the next sign-in', ID, 'The reset still hands the account to whoever is typing. The check comes before it.']])],
      deciding: ['m1'],
      reason: 'Before a reset the desk checks the caller by something the caller did not supply: the directory record and the number on it. A number, a name or a manager the caller gives proves nothing.' }),
    talk('l25-k-dlp', LOGI, 'Ismael, Compliance', 'Staff keep emailing spreadsheets with customer card numbers to their personal addresses. I want the system to spot the card numbers and stop the email leaving.',
      'Which control is that?', [
        ['DLP, which spots sensitive data and blocks it from leaving', true, 'Data loss prevention looks inside what is sent and stops sensitive data from leaving by email, USB or upload.'],
        ['MDM, which enforces rules such as screen locks and remote wipe on phones and tablets', LOOK, 'MDM manages mobile devices: screen lock, encryption, remote wipe. It does not read email contents.'],
        ['IAM, which creates accounts and removes their access', LOOK, 'IAM manages who has accounts and access. It does not look at what is sent out.'],
        ['An ACL, which lists who may use a folder', LOOK, 'An ACL decides who may open a file or folder. It does not stop its contents being emailed once someone may open it.']],
      'Spotting sensitive data in what is sent and blocking it is DLP, data loss prevention.'),
    item({
      id: 'l25-k-inherit', strand: WIN,
      blocks: [chat('Steven, Planning', 'm1', 'I have Modify on the Projects folder, but in its subfolder Budget I can only read. My manager says it should be the same.'),
        table('Security of the Budget subfolder', ['Check', 'Value'], [['b1', 'Inheritance from Projects', 'Turned off'], ['b2', 'Steven', 'Read']])],
      asks: [ask('Why can Steven only read in Budget?', [
        ['Inheritance is off on Budget, so it keeps its own level and no longer takes Projects’ Modify', true, 'A subfolder normally takes its parent’s permissions. With inheritance off it keeps its own, here Read.'],
        ['Steven’s sign-in works only on the Projects folder and is not accepted on its subfolder called Budget', LINK, 'A sign-in belongs to the account and works for every folder Steven can reach.'],
        ['The share permission on Projects is lower than the NTFS level', LAYER, 'The ticket shows no share permission at all. The difference is inside the folder: Projects against Budget.'],
        ['User Account Control is blocking the change in Budget', CAUSE, 'UAC prompts for administrator rights on a change. It does not lower a permission.']])],
      deciding: ['b1', 'b2'],
      reason: 'Permissions flow down from a folder to what is inside it, unless inheritance is turned off on the subfolder. Budget has it off and its own level for Steven is Read.' }),
    item({
      id: 'l25-k-bitlocker', strand: WIN,
      blocks: [chat('Gus, Field team', 'm1', 'The company replaced my laptop’s motherboard. Now it stops before Windows loads and shows a strange screen.'),
        table('What the screen says', ['Line'], [['s1', 'BitLocker recovery'], ['s2', 'Enter the recovery password to unlock this drive.'], ['s3', 'Recovery password ID: 4F2A-9C10']]),
        table('From the desk’s records', ['Laptop', 'Recovery password stored'], [['k1', 'Gus’s laptop', 'Yes, in the directory under ID 4F2A-9C10']])],
      asks: [ask('What gets Gus in?', [
        ['The recovery password stored in the directory, found by the ID on the screen', true, 'A changed board makes BitLocker want its recovery password. The desk’s records say the password is stored in the directory, and the ID on the screen finds it.'],
        ['Gus’s Windows sign-in password, typed in at that screen, since it is the same account as before', AUTH, 'BitLocker unlocks the drive before Windows loads. Windows’ own password is not what it wants.'],
        ['A new PIN made in Windows Hello and typed in at that screen', AUTH, 'Windows Hello is for signing in once Windows runs. The drive is still locked.'],
        ['Clear the TPM in the firmware settings to remove the lock', LOST, 'Clearing the TPM removes the code it holds, and the drive then opens only with the recovery password. The stored password opens it with the data kept.']])],
      deciding: ['s2', 's3', 'k1'],
      reason: 'BitLocker locks the drive and, after a hardware change, wants its recovery password. The desk’s records show the password is stored in the directory, and the ID on the screen finds it. Without it the data stays locked.' }),
    recall('l25-k-gpo', AD, 'In a company domain, rules are applied to the accounts and computers in an OU: password rules, blocked USB drives, locked settings.',
      'Type the two-word name of the feature.', ['group policy', 'group policies'],
      'Group Policy applies rules to the accounts and computers in an OU. Security groups hold permissions and a login script only runs a program at sign-in.'),
    talk('l25-k-uefi', HARD, 'Quentin, Kiosk team', 'Someone at a shared kiosk changed the boot order and started the PC from their own USB stick. I need to stop people changing start-up settings.',
      'Which single step does that?', [
        ['A BIOS or UEFI password', true, 'The firmware password must be entered before start-up settings can be changed, so the boot order stays as it is.'],
        ['A screen lock after two minutes', SET, 'A lock stops use of a signed-in PC. The visitor changed the firmware before Windows.'],
        ['Failed-attempt lockout on the accounts', SET, 'Lockout limits password tries inside Windows. The change was made before Windows started.'],
        ['Disabling the Guest account', SET, 'Guest is a Windows account. The boot order is not in Windows.']],
      'Start-up settings and the boot order live in the BIOS or UEFI. A password on them is the step that stops people changing them.'),
    talk('l25-k-default', HARD, 'Sophie, Imaging', 'The new PC image still has the standard Administrator account with the password it came with. Everyone who builds PCs knows that name and password.',
      'What do you do?', [
        ['Change the default administrator name and password', true, 'An attacker knows the standard name and the factory password. Changing both removes that way in.'],
        ['Leave it, because nobody outside the building knows about it', DEF, 'The standard name and password are public knowledge. Leaving them is leaving the door open.'],
        ['Turn off password expiration for that account so it never changes', DEF, 'That keeps the factory password forever. It does the opposite of the fix.'],
        ['Move the account to the Guest group so it has fewer rights', DEF, 'An administrator account moved to Guest stops working for its job and still has the known password. Change the password.']],
      'A default administrator account with a known password is a way in. Hardening changes the name and the password.')
  ]);
})();
