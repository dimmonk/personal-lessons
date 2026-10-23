// IT Help Desk, lesson 15 "Ports and protocols": the ten questions of the check (three on the web, two on mail, two on files, three on managing computers), all new, and the
// twelve held in reserve for the weekly review (three for each of the four groups). Facts as in items-l15.js (A+ map Core 1 2.1). Invented people.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const say = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const MIX = 'mixed-look-alike', WS = 'wrong-service', PT = 'unencrypted', TU = 'tcp-udp';
  const WEB = 'ports-web', MAIL = 'ports-mail', FILES = 'ports-files', ADMIN = 'ports-admin';

  FC.items('it-support', [
    // ----- the check: ten new questions, no help -----
    say('l15-k-443', WEB, 'Which service uses port 443? Type its short name.', 'Type the short name.', ['HTTPS', 'HTTP Secure', 'Hypertext Transfer Protocol Secure'],
      'Port 443 is HTTPS, the web with its pages encrypted, the padlock in the browser. Plain HTTP is on port 80.'),
    say('l15-k-dhcp', WEB, 'DHCP uses two port numbers, one for the server and one for the device. Type both numbers.', 'Type both numbers.', ['67 68', '68 67'],
      'DHCP, which hands out addresses, uses 67 for the server and 68 for the device.'),
    item({
      id: 'l15-k-udp', strand: WEB,
      blocks: [msg('chat', 'Mo, Network team', 'Chat with the help desk', [['m1', 'Our monitoring tool lists the services that deliver by UDP, the quick way with no connection. Which one of these should be on its list?']])],
      asks: [ask('Which service uses UDP?', [
        ['DHCP, handing out addresses', true, 'DHCP is a device with no address yet sending one short message, so it uses UDP.'],
        ['SMTP, sending mail', TU, 'Mail must arrive whole, so SMTP uses TCP, which confirms each piece.'],
        ['FTP, moving files', TU, 'A file must arrive whole, so FTP uses TCP.'],
        ['HTTPS, secure web pages', TU, 'Web pages must arrive whole, so HTTPS uses TCP.']])],
      deciding: ['m1'],
      reason: 'DHCP uses UDP. Web, mail and file moving must arrive whole, so they use TCP.' }),
    say('l15-k-pop3', MAIL, 'Type the port number for POP3.', 'Type the number.', ['110'],
      'POP3 is port 110. It receives mail by downloading it to one device and usually removing it from the server.'),
    item({
      id: 'l15-k-smtp', strand: MAIL,
      blocks: [msg('chat', 'Nia, Sales', 'Chat with the help desk', [['n1', 'My mail program asks for an outgoing mail server. Which service is that, and which port does the exam give for it?']])],
      asks: [ask('Which is it?', [
        ['SMTP, port 25', true, 'SMTP sends mail out, so the outgoing server speaks SMTP.'],
        ['POP3, port 110', MIX, 'POP3 receives mail. The outgoing server is the one that sends.'],
        ['IMAP, port 143', MIX, 'IMAP receives mail and keeps it on the server. It does not send.'],
        ['HTTP, port 80', WS, 'HTTP loads web pages. It is not a mail service.']])],
      deciding: ['n1'],
      reason: 'Outgoing mail is sent by SMTP, port 25. POP3 on 110 and IMAP on 143 receive.' }),
    say('l15-k-smb', FILES, 'Type the port number for SMB, the Windows shared folders and printers.', 'Type the number.', ['445'],
      'SMB, also named CIFS, is port 445. It shares folders and printers on a Windows network.'),
    say('l15-k-netbios', FILES, 'Which older Windows service uses ports 137 to 139? Type its name.', 'Type the name.', ['NetBIOS', 'NetBT', 'NetBIOS over TCP/IP', 'NetBIOS over TCP IP', 'NetBIOS NetBT', 'Network Basic Input/Output System'],
      'Ports 137, 138 and 139 are NetBIOS (NetBT): the older way for Windows computers to find each other by name and share files.'),
    say('l15-k-ssh', ADMIN, 'Type the port number for SSH.', 'Type the number.', ['22'],
      'SSH is port 22: typing commands on another computer over an encrypted link. Telnet is the unencrypted one next to it, on 23.'),
    item({
      id: 'l15-k-rdp', strand: ADMIN,
      blocks: [msg('chat', 'Ivo, Security', 'Chat with the help desk', [['i1', 'We are blocking port 3389 on the firewall today. What will stop working for our staff?']])],
      asks: [ask('What stops working?', [
        ['Remote Desktop to the office computers', true, 'Port 3389 is RDP, which shows and steers another Windows computer’s screen.'],
        ['Receiving mail on the phone', WS, 'Receiving mail uses 110 or 143.'],
        ['Opening secure web pages', WS, 'Secure pages use 443.'],
        ['Opening shared folders', WS, 'Shared folders use SMB on 445.'],
        ['Nothing: a ping to each computer still works', 'door-assumed', 'A ping only shows that a computer is there. Port 3389 is a door, and blocking it stops the service behind it.']])],
      deciding: ['i1'],
      reason: 'Port 3389 is Remote Desktop. Blocking it stops that one service and leaves mail, web pages and shared folders alone.' }),
    say('l15-k-telnet', ADMIN, 'Telnet sends passwords as readable text. Which service replaced it? Type its short name.', 'Type the short name.', ['SSH', 'Secure Shell'],
      'SSH, Secure Shell, replaced Telnet. It does the same job of typing commands on another computer, but encrypted.'),

    // ----- held in reserve for the weekly review: three for each of the four groups -----
    say('l15-r-dnsname', WEB, 'Which service uses port 53? Type its short name.', 'Type the short name.', ['DNS', 'Domain Name System'],
      'Port 53 is DNS, the phone book that turns a name into the number address.'),
    item({
      id: 'l15-r-lock', strand: WEB,
      blocks: [msg('chat', 'Quin, Web team', 'Chat with the help desk', [['q1', 'The staff portal opens as http:// and the browser warns Not secure. The company wants it reached with the padlock. Which port must the firewall allow for that?']])],
      asks: [ask('Which port?', [
        ['443, for HTTPS', true, 'The padlock version of the web is HTTPS, port 443.'],
        ['80, for HTTP', MIX, 'Port 80 is the plain version, the one that gave the warning.'],
        ['53, for DNS', WS, 'DNS turns names into addresses. It does not carry the page.'],
        ['67, for DHCP', WS, 'DHCP hands out addresses. It does not carry the page.']])],
      deciding: ['q1'],
      reason: 'Web pages with the padlock are HTTPS, port 443. Port 80 carries the plain, readable version.' }),
    say('l15-r-dhcpdev', WEB, 'DHCP uses ports 67 and 68. Which one does the device asking for an address use? Type the number.', 'Type the number.', ['68'],
      'The DHCP server listens on 67 and the device that requests an address uses 68.'),
    say('l15-r-smtpnum', MAIL, 'Type the port number for SMTP.', 'Type the number.', ['25'],
      'SMTP, the service that sends mail, is port 25.'),
    item({
      id: 'l15-r-pop',  strand: MAIL,
      blocks: [msg('chat', 'Gil, Support', 'Chat with the help desk', [['g1', 'My old mail program downloads my mail to my PC and removes it from the server, so my phone shows an empty mailbox. Which service is the program using?']])],
      asks: [ask('Which service is it?', [
        ['POP3, port 110', true, 'POP3 downloads mail to one device and usually removes it from the server.'],
        ['IMAP, port 143', MIX, 'IMAP leaves the mail on the server, so the phone would see it.'],
        ['SMTP, port 25', WS, 'SMTP sends mail out. It does not receive.'],
        ['DNS, port 53', WS, 'DNS turns names into addresses. It does not handle mail.']])],
      deciding: ['g1'],
      reason: 'Mail pulled down to one PC and gone from the server is POP3, port 110. IMAP, 143, would leave it there.' }),
    say('l15-r-imapname', MAIL, 'Which service uses port 143? Type its short name.', 'Type the short name.', ['IMAP', 'Internet Message Access Protocol'],
      'Port 143 is IMAP, which keeps mail on the server so every device shows the same mailbox.'),
    say('l15-r-ftpname', FILES, 'Which service uses ports 20 and 21? Type its short name.', 'Type the short name.', ['FTP', 'File Transfer Protocol'],
      'Ports 20 and 21 are FTP, which moves files to and from a server. 21 carries commands and 20 carries data.'),
    say('l15-r-cifs', FILES, 'SMB has an older name for the same job. Type that name.', 'Type the name.', ['CIFS', 'Common Internet File System'],
      'CIFS, Common Internet File System, is the older name for SMB, port 445.'),
    item({
      id: 'l15-r-printer', strand: FILES,
      blocks: [msg('chat', 'Ray, Branch office', 'Chat with the help desk', [['r1', 'Nobody at the branch can reach the shared printer on the head office print server, a Windows shared printer. Web pages and mail work. Which port is blocked?']])],
      asks: [ask('Which port?', [
        ['445, SMB', true, 'Shared printers on a Windows network use SMB, port 445, the same as shared folders.'],
        ['3389, RDP', WS, 'RDP shows another computer’s screen. It does not share a printer.'],
        ['21, FTP', WS, 'FTP moves files. A shared printer is not an FTP job.'],
        ['143, IMAP', WS, 'IMAP is mail, and mail works.']])],
      deciding: ['r1'],
      reason: 'Shared printers and folders on a Windows network use SMB, port 445. Web and mail pass, so that door is the one left.' }),
    say('l15-r-rdpnum', ADMIN, 'Type the port number for Remote Desktop (RDP).', 'Type the number.', ['3389'],
      'RDP, Remote Desktop, is port 3389.'),
    say('l15-r-ldapname', ADMIN, 'Which service uses port 389? Type its short name.', 'Type the short name.', ['LDAP', 'Lightweight Directory Access Protocol'],
      'Port 389 is LDAP, which looks up accounts and computers in the company directory.'),
    item({
      id: 'l15-r-vendor', strand: ADMIN,
      blocks: [msg('chat', 'Sol, Facilities', 'Chat with the help desk', [['s1', 'The vendor of our door-lock controller says its tool connects with Telnet on port 23. Our rule is encrypted remote typing only. What do we tell them?']])],
      asks: [ask('What do you tell them?', [
        ['Use SSH on port 22 instead.', true, 'SSH does the same job as Telnet, encrypted.'],
        ['Port 23 is fine inside the office.', PT, 'Readable text can be read by anyone who can see the traffic, inside the office too.'],
        ['Use Remote Desktop on port 3389.', WS, 'RDP shows a Windows screen. A lock controller needs typed commands.'],
        ['Use FTP on port 21 instead.', WS, 'FTP moves files and is also readable text.']])],
      deciding: ['s1'],
      reason: 'Telnet on 23 sends everything readable. SSH on 22 does the same job encrypted, so it meets the rule.' }),
    // ----- two more check questions: how a port delivers -----
    item({
      id: 'l15-k-dns', strand: WEB,
      blocks: [msg('chat', 'Hal, Network team', 'Chat with the help desk', [['h1', 'The new firewall allows port 53 only for UDP. Short name lookups work, but a few lookups with big answers fail. What do we change?']])],
      asks: [ask('What do we change?', [
        ['Also allow port 53 for TCP', true, 'DNS uses TCP when an answer is too big for one short message, so port 53 needs both ways.'],
        ['Also allow ports 67 and 68', WS, 'Those are DHCP, which hands out addresses. They do not carry lookups.'],
        ['Allow port 443 for TCP', WS, 'Port 443 is HTTPS, the secure web. Lookups go through 53.'],
        ['Change port 53 to TCP only', TU, 'That would stop the short lookups, which go by UDP.']])],
      deciding: ['h1'],
      reason: 'Short DNS answers go by UDP and big ones by TCP, both on port 53. Allowing only one way breaks the other.' }),
    item({
      id: 'l15-k-split', strand: FILES,
      blocks: [msg('chat', 'Joy, Lab', 'Chat with the help desk', [['j1', 'Our old NetBIOS rule says 137, 138 and 139 all use TCP. Is that right?']])],
      asks: [ask('Which is right?', [
        ['No: 137 and 138 use UDP, and 139 uses TCP', true, 'Names and short messages are quick questions, so UDP. The sharing session carries files, so TCP.'],
        ['Yes: all three use TCP', TU, 'Only the sharing session on 139 uses TCP. Names and short messages use UDP.'],
        ['No: all three use UDP', TU, 'The sharing session on 139 moves files and must arrive whole, so it uses TCP.'],
        ['No: 137 uses TCP, and 138 and 139 use UDP', TU, 'It is the other way round: 137 and 138 are UDP, and 139 is TCP.']])],
      deciding: ['j1'],
      reason: 'NetBIOS names (137) and short messages (138) are UDP. The sharing session (139) is TCP.' }),
    item({
      id: 'l15-r-ldaptcp', strand: ADMIN,
      blocks: [msg('chat', 'Kit, Network team', 'Chat with the help desk', [['k1', 'We are writing rules for the directory (LDAP, 389) and for Remote Desktop (3389). Which delivery is the usual one for both?']])],
      asks: [ask('Which delivery?', [
        ['TCP for both', true, 'LDAP and RDP are normally TCP, though each also has a rarer UDP form.'],
        ['UDP for both', TU, 'UDP is for DHCP, short DNS answers and NetBIOS names and messages.'],
        ['UDP for LDAP, TCP for RDP', TU, 'LDAP is normally TCP.'],
        ['TCP for LDAP, UDP for RDP', TU, 'RDP is normally TCP.']])],
      deciding: ['k1'],
      reason: 'LDAP and RDP are normally TCP, though each also has a rarer UDP form.' })
  ]);
})();
