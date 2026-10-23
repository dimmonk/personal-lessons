// IT Help Desk, lesson 15: Ports and protocols (part ports). Core 1 objective 2.1 of the A+ map (docs/research/it-support-aplus.md): the fourteen port groups (20-21 FTP, 22 SSH,
// 23 Telnet, 25 SMTP, 53 DNS, 67/68 DHCP, 80 HTTP, 110 POP3, 143 IMAP, 137-139 NetBIOS/NetBT, 389 LDAP, 443 HTTPS, 445 SMB/CIFS, 3389 RDP) and TCP against UDP. The numbers are taught
// by the job each service does and asked from memory both ways (number to service, service to number) and as tickets where a port is the clue. Research: IT25, IT26 and IT27
// (docs/research/it-support.md: self-quizzing with feedback, spaced over weeks, beats rereading), IT4 and IT8 (cut the causes with the cheapest test: web pages that load clear the link,
// so a single door is left). Plan: docs/subjects/it-support/plan.md, lesson 15. Four strands, one per group, so the weekly review brings each group back on its own.
// One worked ticket (Anita's Remote Desktop); a first group of four with the deciding words marked; a second of seven; a third of eight mixed with lesson 14 and 5; the check: twelve new questions, no help, 10 of 12 to pass. Review fixes: docs/subjects/it-support/fixes-l14-17.md.
FC.lesson('it-support', {
  id: 'l15', part: 'ports', title: 'Ports and protocols', rev: 1, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (the fourteen port services by the job each does, in four kinds of job; TCP and UDP for every port; asked from memory both ways and as tickets).' }],
  why: [
    'Anita works at the branch office. Since this morning Remote Desktop, the program that shows her the screen of her computer at head office, says it cannot connect. Web pages and email work fine. The firewall list shows one line changed: a number, 3389, is blocked.',
    'A technician who knows what 3389 is for finds the fault in a minute. One who does not, reinstalls things. Here you learn the numbers on the A+ exam by the job each one does, so you remember them by meaning, and you practice them from memory the way the exam tests them.'],
  flow: [
    { title: 'A port is a numbered door',
      show: [{ kind: 'prose', text: [
        'Every computer on a network has an address, a number like 203.0.113.20. The address finds the computer. A port finds the program on that computer that should answer. Think of a building with numbered doors: the address is the street number, and the port is the door.',
        'A program that answers at a door is a service. A protocol is the agreed way two computers talk to each other, and each service has one. The exam names a service by its protocol, such as HTTP.',
        'A firewall is a program or a box that decides which doors stay open. It lets traffic through or blocks it by port number, and each rule has a direction: some rules cover traffic leaving the building, some cover traffic arriving from outside. So a blocked door stops one service and leaves the others alone. This is the last link of the chain you know from getting online: the cable or Wi-Fi, the address, the gateway, the name lookup, and then the service at its door. The numbers below are the standard ones, and the exam tests them from memory.'] }] },
    { title: 'Learn them by the job',
      show: [{ kind: 'prose', text: [
        'Fourteen services, each with its number, are too many to memorize one by one, so each is tied to a job. They fall into four kinds of job: the web and getting online, mail, moving files, and managing other computers.',
        'Reading a list again feels like learning, but it is weak. Covering the answer and trying to recall it is what makes it stay, and coming back to it after a few days is better than doing it all at once. The questions here do that, and the weekly review brings each group back.'] }] },
    { title: 'The web and getting online',
      show: [{ kind: 'document', form: 'table', title: 'The web and getting online', head: ['Port', 'Service', 'Its job'], rows: [
        { id: 'w1', cells: ['53', 'DNS (Domain Name System)', 'Turns a name like example.com into the number address of the computer. A phone book for the network.'] },
        { id: 'w2', cells: ['67 and 68', 'DHCP (Dynamic Host Configuration Protocol)', 'Hands an address to a device that has none when it joins. The server listens on 67, the device on 68.'] },
        { id: 'w3', cells: ['80', 'HTTP (Hypertext Transfer Protocol)', 'Loads web pages. Everything travels as readable text.'] },
        { id: 'w4', cells: ['443', 'HTTPS (HTTP Secure)', 'The same web pages, encrypted: scrambled so nobody on the way can read them. The padlock in the browser.'] }] },
      { kind: 'prose', text: [
        'HTTP and HTTPS are a pair: the plain one on 80, the secure one on 443.'] }] },
    { title: 'Mail',
      show: [{ kind: 'document', form: 'table', title: 'Mail: three services, three jobs', head: ['Port', 'Service', 'Its job'], rows: [
        { id: 'm1', cells: ['25', 'SMTP (Simple Mail Transfer Protocol)', 'Sends mail out, and passes it from server to server. S is for sending. Mail programs usually hand outgoing mail to the server on port 587; the exam asks for 25.'] },
        { id: 'm2', cells: ['110', 'POP3 (Post Office Protocol, version 3)', 'Receives mail by downloading it to one device, and usually removing it from the server. The older way.'] },
        { id: 'm3', cells: ['143', 'IMAP (Internet Message Access Protocol)', 'Receives mail by leaving it on the server and showing it, so a phone and a laptop show the same mailbox and agree on what is read or deleted.'] }] },
      { kind: 'prose', text: [
        'The mail trio: SMTP sends, POP3 and IMAP receive. The two receiving numbers are 110 and 143, the older one first.'] }] },
    { title: 'Moving files',
      show: [{ kind: 'document', form: 'table', title: 'Moving and sharing files', head: ['Port', 'Service', 'Its job'], rows: [
        { id: 'f1', cells: ['20 and 21', 'FTP (File Transfer Protocol)', 'Moves files to and from a server. Port 21 is the front door where you sign in and give commands; port 20 is the back door the file data comes through in the usual (active) mode. The password travels as readable text.'] },
        { id: 'f2', cells: ['445', 'SMB (Server Message Block), also named CIFS (Common Internet File System)', 'Shared folders and shared printers on a Windows network. CIFS is the older name for the same job.'] },
        { id: 'f3', cells: ['137, 138 and 139', 'NetBIOS over TCP/IP, also called NetBT (TCP is explained two steps on)', 'An older way for Windows computers to find each other by name and share files: 137 for names, 138 for short messages, 139 for the sharing session, in that order. Newer Windows shares go straight over 445.'] }] }] },
    { title: 'Managing other computers',
      show: [{ kind: 'document', form: 'table', title: 'Reaching and looking up', head: ['Port', 'Service', 'Its job'], rows: [
        { id: 'a1', cells: ['22', 'SSH (Secure Shell)', 'Type commands on another computer, over an encrypted link. The password cannot be read on the way. A common use is managing Linux servers, computers that run Linux instead of Windows.'] },
        { id: 'a2', cells: ['23', 'Telnet', 'The same job as SSH, but everything, passwords included, travels as readable text. SSH replaced it.'] },
        { id: 'a3', cells: ['3389', 'RDP (Remote Desktop Protocol)', 'Shows you the screen of another Windows computer and lets you use it as if you sat there.'] },
        { id: 'a4', cells: ['389', 'LDAP (Lightweight Directory Access Protocol)', 'Looks up accounts, passwords and computers in the company directory, the central list of who and what is on the network. Microsoft’s directory is called Active Directory.'] }] },
      { kind: 'prose', text: [
        'Two pairs help the memory. SSH is 22 and Telnet is 23, the secure one next to the plain one it replaced, as 443 is the secure partner of 80.'] }] },
    { title: 'TCP and UDP: two ways to deliver',
      show: [{ kind: 'prose', text: [
        'Every one of these services sends its data in one of two ways. TCP first opens a connection between the two computers, confirms that each piece arrived and sends again any piece that was lost. It is the careful way. UDP opens nothing, sends the pieces and does not check. It is the quick way, for short messages where asking again is cheaper than waiting.',
        'Web pages, mail, files and remote sign-in must arrive whole, so they use TCP. DHCP is a device with no address yet, shouting for one, and there is no connection to open, so it uses UDP. A DNS lookup is one short question and one short answer, so it uses UDP; when an answer is too big for one short message, DNS uses TCP, so DNS uses both. The table gives the delivery for every number.'] },
      { kind: 'document', form: 'table', title: 'How each port delivers', head: ['Port', 'Service', 'Delivers by'], rows: [
        { id: 'd1', cells: ['20 and 21', 'FTP', 'TCP'] },
        { id: 'd2', cells: ['22', 'SSH', 'TCP'] },
        { id: 'd3', cells: ['23', 'Telnet', 'TCP'] },
        { id: 'd4', cells: ['25', 'SMTP', 'TCP'] },
        { id: 'd5', cells: ['53', 'DNS', 'UDP for short answers, TCP for big ones'] },
        { id: 'd6', cells: ['67 and 68', 'DHCP', 'UDP'] },
        { id: 'd7', cells: ['80', 'HTTP', 'TCP'] },
        { id: 'd8', cells: ['110', 'POP3', 'TCP'] },
        { id: 'd9', cells: ['143', 'IMAP', 'TCP'] },
        { id: 'd10', cells: ['137 and 138', 'NetBIOS names and short messages', 'UDP'] },
        { id: 'd11', cells: ['139', 'NetBIOS sharing session', 'TCP'] },
        { id: 'd12', cells: ['389', 'LDAP', 'TCP (a rarer UDP form exists)'] },
        { id: 'd13', cells: ['443', 'HTTPS', 'TCP'] },
        { id: 'd14', cells: ['445', 'SMB', 'TCP'] },
        { id: 'd15', cells: ['3389', 'RDP', 'TCP (it can also use UDP)'] }] },
      { kind: 'prose', text: [
        'The shortcut: UDP is DHCP, the short DNS answers, and NetBIOS names and messages. Of these services, everything else that you must get whole is TCP.'] }] },
    { title: 'A working ping is not an open door',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“Web pages load and the computer answers a ping, so the network is fine and the problem must be on the user’s computer.”',
        'A ping only checks whether a computer is there. Web pages show that the doors for the web are open. A firewall can block one door, such as 3389 or 25, and leave everything else working. When one service fails and the others work, find that service’s number and check that door. A firewall list can hold several blocked lines; only the one whose number matches the failing service explains the ticket.'] }] },
    { worked: 'l15-w-rdp' },
    { set: { items: ['l15-p-ssh', 'l15-p-imap', 'l15-p-dns', 'l15-p-share'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l15-q-443', 'l15-q-smtp', 'l15-q-dhcp', 'l15-q-ftp', 'l15-q-telnet', 'l15-q-ldap', 'l15-q-dns'], order: 'shuffle' } },
    { set: { items: ['l15-t-who', 'l15-t-web', 'l15-t-send', 'l15-t-name', 'l15-t-udp', 'l15-t-rdp', 'l15-t-tcp', 'l15-t-none'], order: 'shuffle', mix: { from: ['l14', 'l5'], share: 0.3 } } }
  ],
  check: {
    items: ['l15-k-443', 'l15-k-dhcp', 'l15-k-udp', 'l15-k-pop3', 'l15-k-smtp', 'l15-k-smb', 'l15-k-netbios', 'l15-k-ssh', 'l15-k-rdp', 'l15-k-telnet', 'l15-k-dns', 'l15-k-split'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 10 } }]
  }
});
