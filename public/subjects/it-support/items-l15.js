// IT Help Desk, lesson 15 "Ports and protocols" (part ports): the worked ticket and the three groups of questions.
// Facts: A+ map (docs/research/it-support-aplus.md) Core 1 2.1: 20-21 FTP; 22 SSH; 23 Telnet; 25 SMTP; 53 DNS; 67/68 DHCP; 80 HTTP; 110 POP3; 143 IMAP; 137-139 NetBIOS/NetBT; 389 LDAP;
// 443 HTTPS; 445 SMB/CIFS; 3389 RDP; TCP against UDP. Only claims the lesson makes are asked: DHCP and DNS lookups use UDP; web, mail, file moving and remote sign-in use TCP.
// The way of working is the technician's: a service that fails while others work leaves one door to check (IT4, IT8: cut with the cheapest test). Invented people and offices.
// Strands: ports-web (53, 67/68, 80, 443), ports-mail (25, 110, 143), ports-files (20-21, 445, 137-139), ports-admin (22, 23, 3389, 389). Every wrong choice carries its slip and a line saying what it leaves undone.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  // a fact from memory: the question is read in a spoken block, and the accepted answers are the exam's names and numbers
  const say = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const MIX = 'mixed-look-alike', WS = 'wrong-service', PT = 'unencrypted', DA = 'door-assumed', TU = 'tcp-udp', CAUSE = 'wrong-cause';
  const WEB = 'ports-web', MAIL = 'ports-mail', FILES = 'ports-files', ADMIN = 'ports-admin';

  FC.items('it-support', [
    // ----- the worked ticket: a favorite cause (the link to head office) that one cheap test rules out, then the door -----
    item({
      id: 'l15-w-rdp', strand: ADMIN,
      blocks: [
        msg('chat', 'Anita, Branch office', 'Chat with the help desk', [['p1', 'Remote Desktop to my computer at head office says it cannot connect. It worked on Friday. Web pages and my email are fine.']]),
        table('The branch firewall: rules for traffic leaving the branch (changed this morning)', ['Port', 'Rule'], [
          ['t1', '53', 'Allow'], ['t2', '80', 'Allow'], ['t3', '443', 'Allow'], ['t4', '25', 'Allow'], ['t6', '23', 'Block'], ['t5', '3389', 'Block']])],
      asks: [ask('Web pages and email work for Anita. What does that show?', [
        ['The link to head office works, so only one service is stuck.', true, 'Pages and mail pass through the same link, so the link and the name lookup are fine. What is left is the door for Remote Desktop.'],
        ['Remote Desktop must be working too, so they mistyped.', DA, 'Each service has its own door. Web and mail working says nothing about the door for Remote Desktop.'],
        ['Their computer at head office must be switched off.', CAUSE, 'Nothing so far says the computer is off, and the link to head office is clearly up.'],
        ['Restart their computer and try Remote Desktop again.', 'no-split', 'A restart is cheap but cuts nothing in half: web and mail working already show the link is fine, and a blocked door stays blocked.']])],
      steps: [
        { id: 'causes', does: 'Write down every cause that fits “Remote Desktop cannot connect”.', working: 'The link between the branch and head office is down; the computer at head office is off; the password is wrong; the door for Remote Desktop is closed somewhere on the way.' },
        { id: 'favorite', does: 'Name your favorite cause and test it with the cheapest check.', working: 'The link to head office: it dropped last month. Open a web page and send an email. Both work, so the link is up and the name lookup works.', ask: 'a' },
        { id: 'door', does: 'Match the symptom to a service and a number.', working: 'Remote Desktop is RDP, port 3389. One service fails while the web and mail work, so check that one door.' },
        { id: 'rules', does: 'Read the firewall list for that number.', working: '53, 80, 443 and 25 are allowed. Two lines are blocked: 23 and 3389. Remote Desktop is 3389, so that is the line that matters; 23 is Telnet, which nobody should use anyway.' },
        { id: 'done', does: 'Act on the result.', working: 'The desk’s rule is that firewall changes belong to the network team, so hand them the number and the time: allow 3389 for the branch if the company allows it. The first guess cost a minute; the answer was one number.' }],
      deciding: ['p1', 't5'],
      reason: 'Web pages and mail passing shows the link and the name lookup work. Remote Desktop uses port 3389, and the firewall list shows that number blocked, changed this morning. The other blocked line, 23, is Telnet and has nothing to do with it.' }),

    // ----- group 1: with the deciding words marked; the job first, then the number -----
    item({
      id: 'l15-p-ssh', strand: ADMIN,
      blocks: [msg('chat', 'Gaspard, Network team', 'Chat with the help desk', [['d1', 'I need to type commands on the new Linux server (a company computer that runs Linux, an operating system like Windows, and serves others) from my desk. The security rule says nothing typed, passwords included, may travel as readable text. Which service do I allow through the firewall?']])],
      asks: [ask('Which service?', [
        ['SSH, port 22', true, 'SSH carries typed commands over an encrypted link, so nobody on the way can read the password.'],
        ['Telnet, port 23', PT, 'Telnet does the same job but sends everything, passwords too, as readable text. SSH replaced it.'],
        ['RDP, port 3389', WS, 'RDP shows the screen of a Windows computer. The job here is typing commands.'],
        ['FTP, port 21', WS, 'FTP moves files. It gives no place to type commands.']])],
      deciding: ['d1'],
      reason: 'The job is typing commands on another computer, with nothing readable on the way. That is SSH on port 22. Telnet on 23 does the job in plain text.' }),
    item({
      id: 'l15-p-imap', strand: MAIL,
      blocks: [msg('chat', 'Anika, Sales', 'Chat with the help desk', [['l1', 'I read a message on my phone, but my laptop still shows it as new. A message I deleted on the laptop is still on the phone. How do I get them to agree?']])],
      asks: [ask('Which mail service should both be using to receive mail?', [
        ['IMAP, port 143', true, 'IMAP leaves the mail on the server and shows it, so every device shows the same mailbox.'],
        ['POP3, port 110', MIX, 'POP3 downloads mail to one device and usually removes it from the server, so each device ends with its own copy.'],
        ['SMTP, port 25', WS, 'SMTP sends mail out. It does not keep or show a mailbox.'],
        ['SMB, port 445', WS, 'SMB shares folders and printers on a Windows network. It does not keep a mailbox.']])],
      deciding: ['l1'],
      reason: 'Two devices that must agree on what is read and deleted need the mail kept on the server: IMAP, port 143. POP3 on 110 downloads it to one device, and SMTP on 25 only sends.' }),
    item({
      id: 'l15-p-dns', strand: WEB,
      blocks: [msg('chat', 'Eileen, Purchasing', 'Chat with the help desk', [['s1', 'I can open the supplier’s site by typing its address, 203.0.113.20, but not by typing its name. Other sites fail by name too.']])],
      asks: [ask('Which service is not doing its job?', [
        ['DNS, port 53', true, 'DNS turns a name into the number address. The number works and the names do not, so the lookup is what fails.'],
        ['DHCP, ports 67 and 68', WS, 'DHCP hands out addresses. The computer has one, since the number address works.'],
        ['HTTP, port 80', WS, 'HTTP loaded the page when Eileen typed the number, so it works.'],
        ['LDAP, port 389', WS, 'LDAP looks up accounts in the company directory. It has nothing to do with website names.']])],
      deciding: ['s1'],
      reason: 'The page loads by number and fails by name. Turning a name into a number is DNS, port 53.' }),
    item({
      id: 'l15-p-share', strand: FILES,
      blocks: [msg('chat', 'Philip, Branch office', 'Chat with the help desk', [['o1', 'The new branch firewall lets web and mail through, but I cannot open the team folder on the head office file server. It is a Windows shared folder. Which port must it allow?']])],
      asks: [ask('Which port?', [
        ['445, SMB', true, 'Shared folders and shared printers on a Windows network use SMB, port 445.'],
        ['21, FTP', WS, 'FTP moves files to a server as a transfer. A Windows shared folder opens through SMB instead.'],
        ['389, LDAP', WS, 'LDAP looks up accounts in the directory. The folder itself is shared by SMB.'],
        ['25, SMTP', WS, 'SMTP sends mail. Mail already works.'],
        ['22, SSH', WS, 'SSH types commands on another computer. A Windows shared folder opens through SMB instead.']])],
      deciding: ['o1'],
      reason: 'A Windows shared folder is SMB, port 445 (CIFS is its older name). Web and mail already pass, so the door left to open is 445.' }),

    // ----- group 2: from memory, both ways, and by choice -----
    say('l15-q-443', WEB, 'Which port number does HTTPS use? Type the number.', 'Type the number.', ['443'],
      'HTTPS is HTTP made secure, so nobody on the way can read the page. The plain one is on 80 and the secure one is on 443.'),
    say('l15-q-smtp', MAIL, 'Mail going out is sent by a service on port 25. Type its short name.', 'Type the short name.', ['SMTP', 'Simple Mail Transfer Protocol'],
      'SMTP, Simple Mail Transfer Protocol, sends mail out and passes it from server to server. S is for sending. POP3 and IMAP receive.'),
    item({
      id: 'l15-q-dhcp', strand: WEB,
      blocks: [msg('chat', 'Ted, Reception', 'Chat with the help desk', [['t1', 'A visitor’s laptop just joined our Wi-Fi and has no address yet. Which service gives it one, and how does that service send its data?']])],
      asks: [ask('Which is right?', [
        ['DHCP, over UDP', true, 'DHCP hands out the address. The laptop has no address yet and no connection to open, so it sends one short message with UDP.'],
        ['DHCP, over TCP', TU, 'TCP first opens a connection and confirms every piece. The laptop has no address to open one from, so DHCP uses UDP.'],
        ['DNS, over UDP', WS, 'DNS turns names into addresses. It does not give the laptop its own address.'],
        ['LDAP, over TCP', WS, 'LDAP looks up accounts in the directory. It does not give out addresses.']])],
      deciding: ['t1'],
      reason: 'A device with no address gets one from DHCP, on ports 67 and 68, and it uses UDP: one short message with no connection to open.' }),
    say('l15-q-ftp', FILES, 'FTP moves files and uses two port numbers. Type both numbers.', 'Type both numbers.', ['20 21', '21 20'],
      'FTP uses 21 for the commands and 20 for the file data. The password travels as readable text.'),
    item({
      id: 'l15-q-telnet', strand: ADMIN,
      blocks: [msg('chat', 'August, Security', 'Chat with the help desk', [['u1', 'Our audit found an old switch (a box that joins office network cables) managed from a desk over port 23. The auditor says to stop. Why, and what do we use?']])],
      asks: [ask('Which is right?', [
        ['Port 23 is Telnet, which sends passwords as readable text. Use SSH.', true, 'Telnet shows everything it sends to anyone on the way. SSH, port 22, does the same job encrypted.'],
        ['Port 23 is Telnet, which is too slow. Use RDP.', PT, 'Speed is not the problem, and RDP shows a Windows screen. The fault is the readable password.'],
        ['Port 22 is Telnet, which sends passwords as readable text. Use SSH.', MIX, 'Telnet is on 23. Port 22 is SSH, the encrypted one.'],
        ['Port 23 is SSH, which is secure. Leave it as it is.', MIX, 'SSH is on 22. Port 23 is Telnet, the unencrypted one.']])],
      deciding: ['u1'],
      reason: 'Port 23 is Telnet, which sends passwords as readable text. SSH on port 22 is the encrypted replacement for the same job.' }),
    say('l15-q-ldap', ADMIN, 'Computers look up user accounts in the company directory over LDAP. Type its port number.', 'Type the number.', ['389'],
      'LDAP, port 389, looks up accounts, passwords and computers in the company directory, such as Active Directory.'),

    // ----- group 3: the port is the clue -----
    item({
      id: 'l15-t-who', strand: ADMIN,
      blocks: [msg('chat', 'Madhav, Security', 'Chat with the help desk', [['w1', 'Our firewall log shows hundreds of connection attempts from outside, all to port 3389 on our computers. What is someone trying to reach?']])],
      asks: [ask('What is on port 3389?', [
        ['Remote Desktop, the screens of our computers', true, 'Port 3389 is RDP. Someone is trying to see and use our computers from outside.'],
        ['Mail, our mail server', WS, 'Mail uses 25, 110 and 143.'],
        ['Shared folders on the file server', WS, 'Shared folders use SMB on port 445.'],
        ['The web server, our website', WS, 'A website uses 80 and 443.']])],
      deciding: ['w1'],
      reason: 'Port 3389 is Remote Desktop. A log full of attempts on it is someone trying to reach the screens of the computers.' }),
    item({
      id: 'l15-t-web', strand: WEB,
      blocks: [
        msg('chat', 'Shira, Finance', 'Chat with the help desk', [['k1', 'Since this morning nobody can open our bank’s login page, which starts with https://. Plain http:// pages and everything else work.']]),
        table('The office firewall (changed this morning)', ['Port', 'Rule'], [
          ['f1', '53', 'Allow'], ['f2', '80', 'Allow'], ['f3', '443', 'Block'], ['f4', '25', 'Block'], ['f5', '23', 'Block']])],
      asks: [ask('Which blocked port explains it?', [
        ['443', true, 'HTTPS pages travel on 443, and it is blocked. Plain pages on 80 still open.'],
        ['80', MIX, '80 is the plain HTTP door, and plain pages open, so 80 is working.'],
        ['25', WS, 'Port 25 is blocked, but it is the mail-sending service. Pages do not use it.'],
        ['23', WS, 'Port 23 is blocked, but it is Telnet, for typing commands on another computer. Pages do not use it.'],
        ['Clear the browser’s saved data and try again', 'no-split', 'Clearing it is cheap, but the list already shows blocked ports, and plain pages open from the same browser.']])],
      deciding: ['k1', 'f3'],
      reason: 'Pages that start with https:// use port 443, the secure partner of 80. Of the three blocked lines, only 443 is a web door.' }),
    item({
      id: 'l15-t-send', strand: MAIL,
      blocks: [
        msg('chat', 'Marianne, Accounts', 'Chat with the help desk', [['r1', 'My mail program, set to send on SMTP’s own port, receives mail, but every message I send sits in the Outbox.']]),
        table('The office firewall (changed this morning)', ['Port', 'Rule'], [
          ['m1', '25', 'Block'], ['m2', '110', 'Allow'], ['m3', '143', 'Allow'], ['m4', '80', 'Allow'], ['m5', '3389', 'Block'], ['m6', '22', 'Block']])],
      asks: [ask('What is the likely cause?', [
        ['The blocked line for port 25 stops mail going out.', true, 'Port 25 is the service that sends mail, and it is blocked. Receiving still works through 110 and 143.'],
        ['The blocked line for port 22 stops mail going out.', MIX, 'Port 22 is blocked, but it is SSH, for typing commands on another computer.'],
        ['The blocked line for port 3389 stops mail going out.', WS, 'Port 3389 is blocked, but it is Remote Desktop, which shows another computer’s screen.'],
        ['The allowed line for port 143 stops mail going out.', MIX, 'Port 143 is allowed, and it receives mail. Sending is the failing job.'],
        ['Reinstall the mail program and send again.', 'part-first', 'Receiving works from the same program, so the program is not the fault, and the list already shows a blocked line that fits.']])],
      deciding: ['r1', 'm1'],
      reason: 'Receiving works and sending fails, so the sending service is the one to check. That is port 25. Of the blocked lines, 22 and 3389 are other jobs.' }),
    item({
      id: 'l15-t-name', strand: FILES,
      blocks: [
        msg('chat', 'Alec, Lab', 'Chat with the help desk', [['b1', 'The old lab scanner saves scans to a shared folder it finds by the computer’s NetBIOS name. After this morning’s firewall change it says it cannot find the computer.']]),
        table('The lab firewall (changed this morning)', ['Port', 'Rule'], [
          ['n1', '137, 138, 139', 'Block'], ['n2', '445', 'Allow'], ['n3', '389', 'Allow'], ['n4', '3389', 'Block']])],
      asks: [ask('Which ports must be allowed again?', [
        ['137, 138 and 139', true, 'The scanner finds the computer by NetBIOS name, and those are the NetBIOS ports. They are blocked.'],
        ['445 only', DA, 'That door is already allowed, and the scanner still cannot find the computer. Finding it by NetBIOS name uses other numbers.'],
        ['389 only', WS, '389 looks up accounts in the directory, and it is already allowed.'],
        ['3389 only', WS, '3389 is blocked, but it is Remote Desktop. The scanner does not use it.']])],
      deciding: ['b1', 'n1'],
      reason: 'The scanner finds the computer by NetBIOS name, which uses ports 137, 138 and 139. They are the ones the new rule blocks.' }),
    say('l15-t-udp', FILES, 'A service delivers its data by TCP or by UDP. Which does NetBIOS use for its names on port 137? Type TCP or UDP.', 'Type TCP or UDP.', ['UDP', 'User Datagram Protocol'],
      'Port 137 looks up computer names with short messages, so it uses UDP. The sharing session on 139 uses TCP, because shared files must arrive whole.'),
    say('l15-t-rdp', ADMIN, 'Port 3389 lets you use another Windows computer’s screen. Type the short name of the service.', 'Type the short name.', ['RDP', 'Remote Desktop', 'Remote Desktop Protocol'],
      'RDP, Remote Desktop Protocol, is port 3389. It shows you another Windows computer’s screen and lets you use it.'),
    // ----- added after review: TCP or UDP for more than DHCP, and a table where no blocked line fits -----
    item({
      id: 'l15-q-dns', strand: WEB,
      blocks: [msg('chat', 'Robin, Network team', 'Chat with the help desk', [['f1', 'I am writing the firewall rule for name lookups on port 53. Most answers are short, and a few are too big for one short message. How does DNS deliver?']])],
      asks: [ask('Which is right?', [
        ['By UDP for short answers and by TCP for big ones', true, 'DNS uses UDP for the usual short question and answer, and TCP when the answer is too big for one short message.'],
        ['By UDP only, because every answer is short', TU, 'Some answers are too big for one short message, and those go by TCP.'],
        ['By TCP only, because lookups must arrive whole', TU, 'The usual short lookup goes by UDP. TCP is the second way, used for big answers.'],
        ['By TCP for short answers and by UDP for big ones', TU, 'It is the other way round: UDP for the short answers, TCP for the big ones.']])],
      deciding: ['f1'],
      reason: 'Port 53 is used both ways: UDP for the short answers, TCP for the big ones.' }),
    item({
      id: 'l15-t-tcp', strand: MAIL,
      blocks: [msg('chat', 'Jaime, Network team', 'Chat with the help desk', [['g1', 'I am writing a firewall rule that only needs TCP. Which of these lists has services that all deliver by TCP?']])],
      asks: [ask('Which list is all TCP?', [
        ['SMTP, POP3, IMAP and HTTPS', true, 'Mail and secure web pages must arrive whole, so all four deliver by TCP.'],
        ['SMTP, POP3, IMAP and DHCP', TU, 'DHCP delivers by UDP; the other three are TCP.'],
        ['HTTPS, SSH, RDP and NetBIOS names on 137', TU, 'NetBIOS names on 137 deliver by UDP; the others are TCP.'],
        ['SMB, FTP, SSH and DHCP', TU, 'DHCP delivers by UDP; the others are TCP.']])],
      deciding: ['g1'],
      reason: 'Of these services, only DHCP, the short DNS answers and NetBIOS names and messages deliver by UDP. SMTP, POP3, IMAP and HTTPS are all TCP.' }),
    item({
      id: 'l15-t-none', strand: WEB,
      blocks: [
        msg('chat', 'Dylan, Reception', 'Chat with the help desk', [['z1', 'Nothing opens by name on the front desk computer, but typing the address 203.0.113.20 loads the supplier’s site. The firewall was changed this morning.']]),
        table('The office firewall (changed this morning)', ['Port', 'Rule'], [
          ['z2', '53', 'Allow'], ['z3', '80', 'Allow'], ['z4', '443', 'Allow'], ['z5', '3389', 'Block'], ['z6', '23', 'Block'], ['z7', '137, 138, 139', 'Block']])],
      asks: [ask('Which blocked line explains it?', [
        ['3389', WS, '3389 is Remote Desktop. It has nothing to do with looking up names.'],
        ['23', WS, '23 is Telnet. It has nothing to do with looking up names.'],
        ['137, 138, 139', MIX, 'These are NetBIOS names inside Windows networks. Websites are looked up by DNS, port 53, which is allowed.'],
        ['None: port 53 is allowed, so the fault is not in this list', true, 'Name lookups use DNS on port 53, and it is allowed. No blocked line fits, so look for the fault elsewhere, such as the DNS server the computer is told to use.']])],
      deciding: ['z1', 'z2'],
      reason: 'Looking up a name is DNS, port 53, and it is allowed. The blocked lines are other jobs, so the list does not explain it.' })
  ]);
})();
