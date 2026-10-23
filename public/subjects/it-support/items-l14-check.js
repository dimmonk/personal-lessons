// IT Help Desk, lesson 14 "How a computer gets online": the six new tickets of the check, and the reserve for the review (three or more unseen for each topic
// the check covers: online, addressing, net-commands, net-settings). Facts as in items-l14.js (A+ map Core 1 2.4, 2.6, 5.5; Core 2 1.5, 1.7). Invented people and
// addresses (192.168.x.x office; 198.51.100.x and 203.0.113.x outside).
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const out = (pre, title, lines) => table(title, ['What the computer prints'], lines.map((l, i) => [pre + (i + 1), l]));
  const cfg = (pre, title, rows) => table(title, ['Setting', 'Value'], rows.map((r, i) => [pre + (i + 1), ...r]));
  const replies = (ip, times, ttl) => times.map(t => `Reply from ${ip}: bytes=32 time=${t} TTL=${ttl}`);
  const LOST = 'Request timed out.';
  const loss = n => `Packets: Sent = 4, Received = ${4 - n}, Lost = ${n} (${n * 25}% loss)`;
  const ping = (pre, target, header, lines, lost) => out(pre, 'C:\\> ping ' + target, [header, ...lines, loss(lost)]);
  const LINK = 'wrong-link', CAUSE = 'wrong-cause', PART = 'part-first', RESET = 'reset-shared', MISREAD = 'misread-output', ONE = 'one-timeout',
    SETTING = 'net-setting', MIXED = 'mixed-address', STATIC = 'static-fix', NOSPLIT = 'no-split', SIDE = 'wrong-side';
  const ON = 'online', AD = 'addressing', NC = 'net-commands', NS = 'net-settings';
  const say = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], reason });

  FC.items('it-support', [
    // ----- the check: six new tickets -----
    item({
      id: 'l14-k-gwping', strand: ON,
      blocks: [
        chat('Archie, Planning', 's1', 'Nothing opens, not the websites and not the shared drive.'),
        cfg('a', 'C:\\> ipconfig', [['IPv4 Address', '192.168.1.77'], ['Subnet Mask', '255.255.255.0'], ['Default Gateway', '192.168.1.1']]),
        ping('b', '192.168.1.1', 'Pinging 192.168.1.1 with 32 bytes of data:', [LOST, LOST, LOST, LOST], 4)],
      asks: [ask('What does this show?', [
        ['No further than the router: the computer’s connection to it, or the router', true, 'The router is the first thing past the computer. Until it answers, nothing beyond it can be tested.'],
        ['The name lookup has failed, since no name could be turned into a number at all', LINK, 'The ping was to a number, so no lookup was used.'],
        ['The internet provider has a problem somewhere past the office', SIDE, 'The ping never got past the office router, so the provider was not involved yet.'],
        ['The router is broken, because it did not answer any of the four pings', ONE, 'Four timeouts from the gateway do not prove the router is broken: it may ignore pings, or the cable, the port or this computer may be at fault. Test another computer and a cable known to work.']])],
      deciding: ['a1', 'a3', 'b2'],
      reason: 'The address looks good, so the fault is not link 2. The gateway is the first stop beyond the computer. Silence from it means the break is on this side of the router or at the router, and another computer pinging the same gateway, or a cable known to work, splits the two.' }),
    item({
      id: 'l14-k-renew', strand: AD,
      blocks: [
        chat('Barbara, Design', 't1', 'My laptop joined the office Wi-Fi but says limited and nothing loads. My phone on the same Wi-Fi is fine.'),
        cfg('a', 'C:\\> ipconfig (the Wi-Fi adapter)', [['Autoconfiguration IPv4 Address', '169.254.77.5'], ['Subnet Mask', '255.255.0.0'], ['Default Gateway', '(empty)']])],
      asks: [ask('Which test comes next?', [
        ['Run ipconfig /renew, so the laptop requests an address again', true, 'It costs nothing and changes nothing else. The phone shows that the server is giving out addresses.'],
        ['Type in a static address on the laptop so that it connects', STATIC, 'It hides the fault, and an address chosen by hand can collide with one the server hands out.'],
        ['Restart the office router so that it hands out addresses again', RESET, 'The phone is fine through it. A restart drops everyone for a problem that is on one laptop.'],
        ['Run ipconfig /flushdns to clear the saved name answers', NOSPLIT, 'That empties saved name answers. The laptop has no address yet, so names are not the problem.']])],
      deciding: ['t1', 'a1'],
      reason: 'The 169.254 address says the laptop got no answer from DHCP, and the phone shows the server works. Requesting again with ipconfig /renew is the cheapest cut: if it gets a good address, the first request was lost, and if not, look at the laptop’s Wi-Fi connection.' }),
    item({
      id: 'l14-k-typo', strand: NC,
      blocks: [
        chat('Uri, Accounts', 'u1', 'The company portal will not open. I type www.exmaple.com and it says the site cannot be reached.'),
        out('a', 'C:\\> nslookup www.exmaple.com', ['Server:  router.lan', 'Address:  192.168.1.1', '*** router.lan can’t find www.exmaple.com: Non-existent domain'])],
      asks: [ask('What does the output show?', [
        ['DNS works and answered: no such name exists, so check the spelling', true, 'The server named itself and replied. “Non-existent domain” is its answer for a name it has no record of.'],
        ['The DNS server is down, so nothing could be looked up', MISREAD, 'A down server gives no reply at all, and a timeout message instead of an answer.'],
        ['Uri’s computer has no address, so it cannot look anything up', LINK, 'It reached the DNS server at 192.168.1.1, which needs a working address.'],
        ['The portal’s website is down, so the page will not open for anybody at all', LINK, 'The name does not exist in DNS, so no website was asked. The name has a spelling slip in it.']])],
      deciding: ['u1', 'a3'],
      reason: 'nslookup shows who answered and what it said. A named server with “Non-existent domain” means the lookup worked and the name is wrong: exmaple, not example. A broken lookup would show a timeout instead.' }),
    item({
      id: 'l14-k-pathping', strand: NC,
      blocks: [
        chat('Octavia, Sales', 'v1', 'Video calls to our customer in Denver keep breaking up, but other sites are fine.'),
        table('C:\\> pathping www.example.com (the statistics, shortened)', ['Hop', 'RTT', 'Source to Here: lost/sent', 'This Node/Link: lost/sent', 'Address'], [['a1', '0', '-', '-', '-', 'DESK-0417 [192.168.1.42]'], ['a2', '1', '1ms', '0/100 = 0%', '0/100 = 0%', '192.168.1.1'], ['a3', '2', '9ms', '0/100 = 0%', '0/100 = 0%', '198.51.100.1'], ['a4', '3', '14ms', '31/100 = 31%', '31/100 = 31%', '198.51.100.9'], ['a5', '4', '16ms', '33/100 = 33%', '2/100 = 2%', '203.0.113.20']]),
        { kind: 'prose', text: 'This desk’s rule: a fault past the office router is reported to the internet provider, with the output.' }],
      asks: [ask('Where does the loss start, and what does it show?', [
        ['At hop 3 and on to the end: at or just past that router, so tell the provider', true, 'Hops 0 to 2 lose nothing. From hop 3 on, the Source to Here column shows about a third of the packets lost.'],
        ['At hop 0, the user’s own computer, where the lost packets start', MISREAD, 'Hop 0 is the user’s own computer and shows no loss. The first loss is at hop 3.'],
        ['Only at the last hop: the customer’s server is the one losing them', MISREAD, 'The loss starts at hop 3 and carries on. It is not only at the end.'],
        ['Nowhere: pathping always shows some loss on every hop, so there is nothing to report', MISREAD, 'The first three hops show none. A hop that loses packets and the hops after it that lose them too are a real fault.']])],
      deciding: ['a3', 'a4', 'a5'],
      reason: 'pathping lists the hops like tracert, then counts lost packets at each. Loss that begins at one hop and continues on every hop after it marks a real fault at or past that router, and the output goes to the provider as it is. Loss at one hop alone, with clean hops after it, is a router that answers slowly, not a fault.' }),
    item({
      id: 'l14-k-home', strand: NS,
      blocks: [chat('Raquel, New starter', 'w1', 'My manager says to join my new laptop to the company domain, but the option to join one is not in Settings. The laptop is Windows 11 Home.')],
      asks: [ask('Why is the option missing?', [
        ['Windows Home cannot join a domain; Pro or Enterprise can', true, 'Domain join is one of the features that separates Pro and Enterprise from Home.'],
        ['The laptop is in a workgroup, which blocks domains', CAUSE, 'A workgroup is the default for a computer that has joined no domain. It does not block joining one.'],
        ['The network is marked Public, which hides the laptop from the domain', SETTING, 'Public or private changes what the computer shows to others. It does not remove the domain option.'],
        ['The saved DNS answers are out of date', SETTING, 'Emptying them with ipconfig /flushdns cannot add an option the edition lacks.']])],
      deciding: ['w1'],
      reason: 'A domain is a company group of computers run from a central server, with one sign-in that works on any joined computer. Windows Home has no domain join. The change is an upgrade to Pro, which also fits the company’s need for central rules.' }),
    item({
      id: 'l14-k-gate', strand: AD,
      blocks: [
        chat('Valentina, Frontdesk', 'z1', 'The shared drive opens, but no website does. I typed in my own address settings last week to fix a printer.'),
        cfg('a', 'C:\\> ipconfig /all on Valentina’s computer', [['DHCP Enabled', 'No'], ['IPv4 Address', '192.168.1.50'], ['Subnet Mask', '255.255.255.0'], ['Default Gateway', '192.168.1.254']]),
        cfg('b', 'C:\\> ipconfig /all on the computer next to theirs', [['DHCP Enabled', 'Yes'], ['IPv4 Address', '192.168.1.71'], ['Subnet Mask', '255.255.255.0'], ['Default Gateway', '192.168.1.1']]),
        out('c', 'C:\\> ping 192.168.1.254', ['Pinging 192.168.1.254 with 32 bytes of data:', 'Reply from 192.168.1.50: Destination host unreachable.', 'Reply from 192.168.1.50: Destination host unreachable.', 'Reply from 192.168.1.50: Destination host unreachable.', 'Reply from 192.168.1.50: Destination host unreachable.', loss(0)])],
      asks: [ask('What is the fault?', [
        ['The gateway typed in by hand is not the router’s address', true, 'Nothing answers at 192.168.1.254. Their neighbor’s gateway is 192.168.1.1, and local things like the shared drive work without a gateway.'],
        ['DHCP gave them a bad lease that has not yet run out', MISREAD, 'DHCP Enabled says No, so the numbers were typed in.'],
        ['The subnet mask is wrong and does not match the network', CAUSE, 'Their mask matches their neighbor’s, 255.255.255.0.'],
        ['The cable is faulty, so part of the traffic is lost on the way', LINK, 'The shared drive opens and the message came from their own address, so the link works.']])],
      deciding: ['a1', 'a4', 'b4', 'c2'],
      reason: 'Computers on the same local network reach each other directly, so the shared drive works. Anything outside needs the gateway, and the one they typed in matches no device. A static address means every number is typed by hand and must match the router. Setting the adapter back to automatic is one change.' }),

    // ----- reserve: the connection chain and its symptoms -----
    item({
      id: 'l14-r-flap', strand: ON,
      blocks: [chat('Evan, Network team', 'b1', 'The switch log shows port 14 going up and down every few seconds. One desk computer is plugged into it.')],
      asks: [ask('Which test comes first?', [
        ['Swap the cable for one known to work', true, 'A cable known to work is the cheapest cut, and a swap changes one thing.'],
        ['Restart the whole switch', RESET, 'It drops every port, and the cause is probably one cable.'],
        ['Replace the desk computer', PART, 'Nothing has been tested on the computer yet.'],
        ['Look at the DNS servers the computer was given', NOSPLIT, 'DNS is link 4. A port going up and down is link 1.']])],
      deciding: ['b1'],
      reason: 'A port that keeps going up and down is called flapping, and it is a fault on link 1. A cable known to work is the cheapest cut.' }),
    item({
      id: 'l14-r-jitter', strand: ON,
      blocks: [chat('Dru, Reception', 'd1', 'Calls on the desk phones, which go over the office network, are choppy every afternoon. Web pages load fine. It is worst when the video files upload.')],
      asks: [ask('What fits?', [
        ['Jitter: the busy line delays call packets unevenly', true, 'Calls need packets to arrive steadily. A busy line makes the delay vary, and that is jitter.'],
        ['The phones’ DNS records are wrong, so calls cannot connect', CAUSE, 'Wrong records would stop calls from connecting, not make them choppy at one time of day.'],
        ['Every phone needs replacing, since they all sound bad', PART, 'All of them are choppy at once, and at one time of day. That points at the shared line.'],
        ['The phones need a new password after the last change', CAUSE, 'A password problem would block them at sign-in, not break up the sound.']])],
      deciding: ['d1'],
      reason: 'Latency is the delay for a packet (a small piece of data) to arrive; jitter is delay that varies. Either makes choppy calls over the network (VoIP). Poor call quality that comes and goes with the load is jitter, often with some lost packets. The line is shared, so the cure is found by looking at what uses it.' }),
    item({
      id: 'l14-r-drops', strand: ON,
      blocks: [chat('Selim, Operations', 'n1', 'Every few hours the whole office loses the internet for a minute or two. The file server never drops.')],
      asks: [ask('Which link, and what do you do?', [
        ['Past the router, the line out: leave a ping to 8.8.8.8 running', true, 'The server is inside the office and never drops, so the office network is fine. A ping left running catches the moments.'],
        ['Each person’s Wi-Fi card, so replace them one by one until it stops', LINK, 'Everyone drops at once, and the server inside never does.'],
        ['The file server, so restart it', LINK, 'It never drops. It is the part that works.'],
        ['The DNS records, so edit them', LINK, 'The whole connection goes away, not only names.']])],
      deciding: ['n1'],
      reason: 'An office that drops together while its own server stays up points past the router. A ping to a number left running records when it fails, and that goes to the provider.' }),

    // ----- reserve: addressing -----
    say('l14-r-mx', AD, 'Which kind of DNS record says where email for a domain is delivered?', 'Type the record name.', ['MX', 'MX record', 'mail exchange', 'mail exchanger'],
      'An MX record (mail exchange) names the mail servers that receive email for the domain.'),
    say('l14-r-aaaa', AD, 'Which kind of DNS record holds a name’s IPv6 address?', 'Type the record name.', ['AAAA', 'AAAA record'],
      'An AAAA record holds an IPv6 address. An A record holds an IPv4 address.'),
    say('l14-r-spf', AD, 'Which spam-fighting TXT record lists the servers allowed to send email for a domain?', 'Type the three letters.', ['SPF', 'Sender Policy Framework'],
      'SPF lists the sending servers. DKIM carries what checks a message’s digital signature, and DMARC says what to do with mail that fails those checks.'),
    say('l14-r-cname', AD, 'Which kind of DNS record makes one name an alias for another name?', 'Type the record name.', ['CNAME', 'CNAME record', 'canonical name'],
      'A CNAME record points one name at another name. An A record points a name at an IPv4 address.'),
    say('l14-r-bits', AD, 'How many bits long is an IPv6 address?', 'Type the number.', ['128'],
      'An IPv6 address is 128 bits, written as eight groups of hexadecimal digits. An IPv4 address is 32 bits.'),
    item({
      id: 'l14-r-vpn', strand: AD,
      blocks: [chat('Isa, Remote', 'i1', 'From home the intranet site (the company’s own internal website) and the shared drives will not open, but ordinary websites do. What should I do?')],
      asks: [ask('What do you tell them?', [
        ['Connect the VPN, which reaches the internal sites', true, 'A VPN is an encrypted tunnel to the company network. With it on, the computer is treated as if it were plugged in at the office.'],
        ['Type in a static address from the office range to reach them', STATIC, 'An address from the office range does nothing at their home, where the router hands out the addresses.'],
        ['Switch the home network to Public to hide their computer', SETTING, 'It would hide their computer and reach nothing at the office.'],
        ['Flush the DNS cache and try the sites again', NOSPLIT, 'Websites open, so names work. The internal sites sit behind the tunnel.']])],
      deciding: ['i1'],
      reason: 'Internal sites and drives sit inside the company network. Ordinary sites work from home, so the connection is fine, and the VPN is what reaches the rest.' }),

    // ----- reserve: commands -----
    say('l14-r-pathping', NC, 'Name the Windows command that lists the routers on the way to a destination and then measures lost packets at each one, taking minutes.', 'Type the command.', ['pathping'],
      'pathping lists the hops as tracert does, then measures loss at each. tracert alone only lists them.'),
    say('l14-r-flush', NC, 'Which ipconfig switch empties the computer’s saved DNS answers?', 'Type the switch, with ipconfig if you like.', ['/flushdns', 'ipconfig /flushdns'],
      'ipconfig /flushdns empties the DNS cache, so names are looked up again. /release and /renew are for the address.'),
    say('l14-r-netstat', NC, 'Which Windows command lists the computer’s open connections and the ports it is listening on?', 'Type the command.', ['netstat'],
      'netstat lists connections and listening ports. net use shows mapped drives, and nslookup queries DNS.'),

    // ----- reserve: Windows network settings -----
    item({
      id: 'l14-r-metered', strand: NS,
      blocks: [chat('Pam, Field sales', 'p1', 'On my phone hotspot, Windows Update just says it is waiting. Web pages and email work. At the office it downloads fine.')],
      asks: [ask('Why?', [
        ['The hotspot is marked metered, so updates wait', true, 'A metered connection tells Windows the data is limited, so large updates wait.'],
        ['The hotspot has no DNS, so downloads cannot start', CAUSE, 'Web pages open, so names are being looked up.'],
        ['Their address is private, which blocks updates from the web', MIXED, 'Private addresses are what almost every network uses, and updates work on them.'],
        ['Their computer gave itself a 169.254 address', MIXED, 'Pages open, so they have a real address.']])],
      deciding: ['p1'],
      reason: 'Windows holds back large downloads on a metered connection, to save data. It is a setting on the connection, and it can be turned off if the plan allows.' }),
    item({
      id: 'l14-r-group', strand: NS,
      blocks: [chat('Jerome, Owner', 'j1', 'We are six people in one room with no server. We just want to share a folder with each other, each with our own sign-in on our own computer. What is that kind of setup called?')],
      asks: [ask('What is it called?', [
        ['A workgroup, with local accounts', true, 'A workgroup is a few computers, each with its own local accounts, sharing directly with no central sign-in.'],
        ['A domain, with a central server', MIXED, 'A domain needs a central server and one shared sign-in.'],
        ['A VLAN, a separate network on one switch', MIXED, 'A VLAN splits a switch into separate networks. It is not about accounts.'],
        ['A VPN, a tunnel to another network', MIXED, 'A VPN is a tunnel to another network.']])],
      deciding: ['j1'],
      reason: 'No server and local accounts on each computer is a workgroup. A domain is the choice when a company wants one sign-in and central rules.' }),
    item({
      id: 'l14-r-moved', strand: NS,
      blocks: [
        chat('Lev, Sales', 'l1', 'I took my laptop home and plugged it in at the office again. It has a cable light but no network. At home I typed in my own address settings.'),
        cfg('a', 'The adapter’s IPv4 properties', [['Use the following IP address', 'Selected'], ['IP address', '192.168.0.20'], ['Default gateway', '192.168.0.1']])],
      asks: [ask('What is the one change?', [
        ['Put the adapter back on automatic addressing', true, 'The typed-in numbers belong to the home network. The office’s DHCP server will hand out the right ones.'],
        ['Type in the office router’s address as the gateway only', STATIC, 'Their address would still be from the home network, and the mask and DNS would still be wrong.'],
        ['Run ipconfig /flushdns', NOSPLIT, 'It empties saved name answers. The trouble is the address.'],
        ['Mark the network Public', SETTING, 'It changes what is shared, not the address.']])],
      deciding: ['a1', 'a2'],
      reason: 'A static address is typed by hand and stays when the computer moves. Back on automatic, the office’s DHCP server hands out an address, mask, gateway and DNS that fit.' }),

    item({
      id: 'l14-r-nic', strand: ON,
      blocks: [
        chat('Benita, Legal', 'w1', 'My desktop still says there is no network. Yesterday you swapped the cable and moved me to another jack. A laptop works on the same cable and the same jack.'),
        cfg('a', 'C:\\> ipconfig (the Ethernet adapter)', [['Media State', 'Media disconnected'], ['Adapter in Device Manager', 'Enabled, no errors']])],
      asks: [ask('What is the next step?', [
        ['Replace the desktop’s network adapter: the cable and the jack are cleared', true, 'The same cable and jack work for a laptop, so what is left on this side is the adapter inside the desktop.'],
        ['Restart the office router in case it stopped handing out addresses', RESET, 'The adapter does not see a link at all, which comes before any address. A restart would also drop everyone.'],
        ['Run ipconfig /renew, then check again', 'no-split', 'The adapter has no link, so there is nothing to renew.'],
        ['Type in a static address on the desktop', STATIC, 'An address cannot be used until the adapter has a link.']])],
      deciding: ['a1', 'w1'],
      reason: 'A cable and a jack that work for a laptop clear the cable, the jack and the switch port. Media disconnected still says the desktop sees no link, so the part left is its adapter. After the cheap tests have pointed there, replacing it is the right step.' }),
    say('l14-r-dkim', AD, 'Which spam-fighting TXT record lets receivers check a message’s digital signature?', 'Type the four letters.', ['DKIM', 'DomainKeys Identified Mail'],
      'DKIM adds a signature that receivers check. SPF lists the servers allowed to send, and DMARC says what to do with mail that fails.'),
  ]);
})();
