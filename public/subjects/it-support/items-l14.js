// IT Help Desk, lesson 14 "How a computer gets online" (part online): the worked ticket and the three groups of questions. The connection chain is five
// links (the link; the address from DHCP; the mask and gateway; the name lookup; the service), cut in half with ipconfig and three pings, with ping, nslookup,
// tracert and pathping output read for which link failed. Research: docs/research/it-support.md IT4, IT5 (a general strategy plus what each part does for the
// whole), IT8 (cut the problem space by checking connections); docs/research/it-support-aplus.md Core 1 2.4 (DNS records A, AAAA, CNAME, MX, TXT with SPF,
// DKIM, DMARC; DHCP leases, reservations, scope, exclusions; VLAN; VPN), 2.6 (IPv4 private and public, IPv6, APIPA, static, dynamic, subnet mask, gateway),
// 5.5 (network symptoms), Core 2 1.5 (ipconfig, ping, netstat, nslookup, net use, tracert, pathping) and 1.7 (domain or workgroup, mapped drives, proxy,
// public or private network, metered connections, static or dynamic). Addresses in the output are invented: 192.168.x.x for the office, 198.51.100.x and
// 203.0.113.x (ranges kept for examples) for the outside, 8.8.8.8 (a real public DNS server) for pings. Invented people and offices.
// Strands: online (the chain and the symptoms), addressing, net-commands, net-settings.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const L = (id, text) => ({ id, text });
  // what a command window prints, one line to a row; a settings list as two columns
  const out = (pre, title, lines) => table(title, ['What the computer prints'], lines.map((l, i) => [pre + (i + 1), l]));
  const cfg = (pre, title, rows) => table(title, ['Setting', 'Value'], rows.map((r, i) => [pre + (i + 1), ...r]));
  const replies = (ip, times, ttl) => times.map(t => `Reply from ${ip}: bytes=32 time=${t} TTL=${ttl}`);
  const LOST = 'Request timed out.';
  const loss = n => `Packets: Sent = 4, Received = ${4 - n}, Lost = ${n} (${n * 25}% loss)`;
  const ping = (pre, target, header, lines, lost) => out(pre, 'C:\\> ping ' + target, [header, ...lines, loss(lost)]);
  const LINK = 'wrong-link', CAUSE = 'wrong-cause', PART = 'part-first', NEAR = 'poked-nearest', RESET = 'reset-shared', MISREAD = 'misread-output',
    ONE = 'one-timeout', NOSPLIT = 'no-split', SETTING = 'net-setting', OPEN = 'open-up', MIXED = 'mixed-address', STATIC = 'static-fix', SIGN = 'treated-sign';
  const ON = 'online', AD = 'addressing', NC = 'net-commands', NS = 'net-settings';
  const say = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], reason });

  FC.items('it-support', [
    // ----- the worked ticket: a favorite cause (the office connection) that one question rules out, then ipconfig and a cable swap -----
    item({
      id: 'l14-w-priya', strand: ON,
      blocks: [
        chat('Odette, Billing', 'p1', 'Nothing loads on my computer. I think the internet is down for the whole office. I am plugged in with a cable, and the light by the cable is on.'),
        note('The chain from the cable to a website: the link, the address, the mask and gateway, the name lookup, the service.'),
        note('This desk’s rule: wall jacks and switch ports belong to the network team.')],
      asks: [ask('Elton at the next desk says their websites load fine. What does that show?', [
        ['The line out and the router work, so the fault is on Odette’s side of them.', true, 'Elton goes through the same router and the same line out, and it works for Elton.'],
        ['The router needs a restart, since it is the one box every computer in the office shares.', RESET, 'Elton’s computer works through it, so it is not shown to be at fault, and a restart would knock the whole office offline for a minute.'],
        ['Odette’s browser is broken, since their cable and the light by it both look fine.', CAUSE, 'Nothing has tested the browser. Their address and their name lookup are still on the list.']])],
      steps: [
        { id: 'chain', does: 'Write the chain, so every cause has a place.', working: 'The link, the address, the mask and gateway, the name lookup, the service. “Nothing loads” could be any of the five.' },
        { id: 'favorite', does: 'Name the favorite cause and cut with the cheapest test: another person on the same network.', working: 'The favorite is the office’s internet. Elton, at the next desk, loads sites fine. The office connection and the router are cleared, and the fault is somewhere on Odette’s side of them.', ask: 'a' },
        { id: 'ipconfig', does: 'Run ipconfig on Odette’s computer. It changes nothing.', working: 'The Ethernet adapter shows an IPv4 address of 169.254.31.77, a mask of 255.255.0.0 and an empty Default Gateway. The adapter is not “Media disconnected”, so link 1 is up. The computer made up its own address because no DHCP answer came: link 2 failed.' },
        { id: 'cable', does: 'Cut again: the cable against everything else. Swap in a cable known to work.', working: 'Same result, 169.254 again. The cable is ruled out.' },
        { id: 'jack', does: 'Plug Odette’s computer into Elton’s cable, which works.', working: 'It gets 192.168.1.57 at once, with a gateway. Their computer and its settings are fine, and the fault is their wall jack or its port on the switch.' },
        { id: 'next', does: 'Get their working, then hand on with what you found.', working: 'Odette works from a spare jack. The network team gets the jack number, the 169.254 address, the cable swap and the result on Elton’s cable. Restarting the router would have fixed nothing and cut off the office.' }],
      deciding: ['p1'],
      reason: 'The favorite cause was the office connection, and one person next door cleared it. ipconfig then showed a 169.254 address: the link was up and DHCP was not reached. Two cheap swaps, the cable and the jack, split the computer from the wall, and nothing was restarted that other people use.' }),

    // ----- group 1: the deciding words marked; which link failed -----
    item({
      id: 'l14-p-disc', strand: ON,
      blocks: [
        chat('Benita, Legal', 'w1', 'My desktop says there is no network. It was fine yesterday. The cleaners were in last night.'),
        cfg('a', 'C:\\> ipconfig (the Ethernet adapter)', [['Media State', 'Media disconnected'], ['Connection-specific DNS Suffix', '(empty)']]),
        note('Chain: the link, the address, the mask and gateway, the name lookup, the service.')],
      asks: [ask('Which link failed?', [
        ['The link: the cable, the jack or the adapter', true, 'Media disconnected is the adapter saying nothing is on the other end of the cable. Nothing after the link can work until it does.'],
        ['The address that DHCP should have handed to the computer', LINK, 'No address can be handed out until a link exists. The address step has not even been tried.'],
        ['The name lookup that turns names into numbers', LINK, 'A name lookup needs an address and a way out first. It is link 4.'],
        ['The service, the website at the far end', LINK, 'The service is the last link. The computer has no connection to reach anything.']])],
      deciding: ['a1'],
      reason: 'Media disconnected means the computer sees no connection at the cable end, so the fault is link 1 and links 2 to 5 cannot work. The cheapest tests change nothing: push both ends of the cable in, look at the light by the switch port, then try a cable known to work.' }),
    item({
      id: 'l14-p-apipa', strand: AD,
      blocks: [
        chat('Tanya, Sales', 'h1', 'Since I plugged my laptop in at the new desk, a yellow warning says limited connectivity and no page loads. The light by the cable is on.'),
        cfg('a', 'C:\\> ipconfig (the Ethernet adapter)', [['Autoconfiguration IPv4 Address', '169.254.31.77'], ['Subnet Mask', '255.255.0.0'], ['Default Gateway', '(empty)']])],
      asks: [ask('Which link failed?', [
        ['The address: DHCP was not reached', true, 'An address starting 169.254 is one Windows made up for itself after asking for DHCP and getting no answer.'],
        ['The link: the cable is faulty or loose at one end', LINK, 'The light is on and Windows reports a working adapter. It could build its own address only because the adapter is up.'],
        ['The name lookup that turns names into numbers', LINK, 'There is no gateway to send a lookup through. The address step failed before this link.'],
        ['The website, which is not answering today', LINK, 'No website has been tried. The computer has no good address to try one with.']])],
      deciding: ['a1', 'a2', 'a3'],
      reason: 'A 169.254 address, a mask of 255.255.0.0 and no gateway are what Windows builds for itself when no DHCP server answers. The link is up, so link 2 failed. The next cheap tests: ipconfig /renew to request one again, then another jack or a computer known to work on this one, to split the port from the DHCP service.' }),
    item({
      id: 'l14-p-gw', strand: ON,
      blocks: [
        chat('Rana, Accounting', 'r1', 'No website will open. The shared drive on the office server still works.'),
        cfg('a', 'C:\\> ipconfig', [['IPv4 Address', '192.168.1.42'], ['Subnet Mask', '255.255.255.0'], ['Default Gateway', '192.168.1.1']]),
        ping('b', '192.168.1.1', 'Pinging 192.168.1.1 with 32 bytes of data:', replies('192.168.1.1', ['1ms', '1ms', '2ms', '1ms'], 64), 0),
        ping('c', '8.8.8.8', 'Pinging 8.8.8.8 with 32 bytes of data:', [LOST, LOST, LOST, LOST], 4)],
      asks: [ask('Where does the chain break?', [
        ['Past the gateway: the router’s line out to the internet', true, 'The gateway answered, so everything between the computer and the router works. The ping to a number failed after it.'],
        ['The cable between the computer and the router, which is loose', LINK, 'The gateway answered all four pings, so the cable and the link are working.'],
        ['The computer’s own address, which was never handed out', LINK, 'ipconfig shows a good address, and the gateway’s replies needed one.'],
        ['The name lookup, which turns names into numbers', LINK, 'The failed ping was to a number, which needs no lookup. The lookup was never used.']])],
      deciding: ['a1', 'b2', 'c2'],
      reason: 'The gateway replied, so links 1 to 3 work on the computer’s side of the router. The ping to 8.8.8.8 needs no name lookup and still failed, so the break is past the router: its line out, the modem or the provider. The server still works because it is inside the office, and the shared drive never leaves it.' }),
    item({
      id: 'l14-p-dns', strand: NC,
      blocks: [
        chat('Joel, Shipping', 'j1', 'Every website says it cannot be reached. I have a network and everything.'),
        ping('a', '8.8.8.8', 'Pinging 8.8.8.8 with 32 bytes of data:', replies('8.8.8.8', ['14ms', '13ms', '14ms', '15ms'], 117), 0),
        out('b', 'C:\\> ping www.example.com', ['Ping request could not find host www.example.com. Please check the name and try again.'])],
      asks: [ask('Which link failed?', [
        ['The name lookup (DNS)', true, 'The number answers, and the name gets no answer back. The lookup is the only link between them.'],
        ['The gateway that leads out of the office', LINK, 'The ping to 8.8.8.8 went out through the gateway and came back.'],
        ['The link, the cable or the Wi-Fi', LINK, 'Four replies from outside the office mean the cable or Wi-Fi works.'],
        ['The website, which is down for everyone', LINK, 'The message says the name was not found. No website was asked, so none can be called down.']])],
      deciding: ['a2', 'b1'],
      reason: 'A ping to a number works, so links 1 to 3 work and the way out is open. The same computer cannot turn a name into a number: link 4, DNS. The cheap tests next: nslookup shows which DNS server was asked and whether it answered, and ipconfig /all shows that server’s address.' }),

    // ----- group 2: no marks -----
    item({
      id: 'l14-s-lease', strand: AD,
      blocks: [
        chat('Gina, Office manager', 'g1', 'Three new hires plugged in today and none of them can get on. Their laptops show 169.254 addresses. Everybody who was here yesterday is fine.'),
        table('The DHCP server’s list', ['Detail', 'Value'], [['t1', 'Scope (addresses it may hand out)', '192.168.1.100 to 192.168.1.119'], ['t2', 'Addresses in the scope', '20'], ['t3', 'Addresses leased now', '20'], ['t4', 'Lease time', '8 days']])],
      asks: [ask('Why did the new laptops get 169.254 addresses?', [
        ['The scope has no free address left, so the server had none to give', true, 'Twenty addresses are in the scope and twenty are leased. A request now gets no answer, and Windows makes up its own address.'],
        ['Three new network adapters all failed on the same morning', CAUSE, 'Three at once, with everyone else fine, points at the one thing they share: the list of addresses, not three adapters.'],
        ['The router has run out of public addresses to share with new laptops', MIXED, 'Public addresses are the internet side. These laptops asked for private ones from the local scope.'],
        ['The three new laptops run a newer version of Windows than the old ones', CAUSE, 'The Windows version does not decide whether the server has an address left to give. Everyone else is fine, and the list is full.']])],
      deciding: ['t2', 't3'],
      reason: 'The scope is the range the server may hand out, and every address in it is leased. The fix is on the DHCP server: widen the scope, or shorten the lease so addresses of people who left come back sooner. Typing addresses into the laptops would hide the full scope and invite conflicts.' }),
    item({
      id: 'l14-s-private', strand: AD,
      blocks: [chat('Ramiro, Network team', 'o1', 'A vendor sent us a list of the addresses they plan to put on the new cameras. We use private addresses inside the building. Which of these are private?')],
      asks: [ask('Pick every private address.', [
        ['172.20.14.9', true],
        ['192.168.40.2', true],
        ['172.32.0.5', MIXED, 'The private block runs from 172.16 to 172.31. 172.32 is just outside it, so it is public.'],
        ['169.254.8.8', MIXED, 'A 169.254 address is not private: Windows makes it up when DHCP does not answer.'],
        ['8.8.4.4', MIXED, 'It is outside all three private blocks, so it is public.']], { many: true })],
      deciding: [],
      reason: 'The three private blocks are 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255 and 192.168.0.0 to 192.168.255.255. Anything else is public, apart from the self-made 169.254 range and 127.0.0.1, which is the computer itself.' }),
    item({
      id: 'l14-s-nslookup', strand: NC,
      blocks: [
        chat('Alison, HR', 'd1', 'Websites will not load on my computer. The person next to me is fine. I can ping 8.8.8.8 and it answers.'),
        cfg('a', 'C:\\> ipconfig /all on Alison’s computer', [['DHCP Enabled', 'No'], ['IPv4 Address', '192.168.1.64'], ['Default Gateway', '192.168.1.1'], ['DNS Servers', '192.168.1.5']]),
        cfg('b', 'C:\\> ipconfig /all on the computer next to theirs', [['DHCP Enabled', 'Yes'], ['IPv4 Address', '192.168.1.71'], ['Default Gateway', '192.168.1.1'], ['DNS Servers', '192.168.1.1']]),
        out('c', 'C:\\> nslookup www.example.com', ['DNS request timed out.', '    timeout was 2 seconds.', 'Server:  UnKnown', 'Address:  192.168.1.5', 'DNS request timed out.', '*** Request to UnKnown timed-out'])],
      asks: [ask('What is the fault, and the cheapest fix?', [
        ['A DNS address typed in by hand no longer answers: switch to automatic', true, 'The nslookup went to 192.168.1.5 and got no reply. Their neighbor, handed 192.168.1.1, gets through.'],
        ['The gateway is wrong, so nothing they send can leave the office at all', LINK, 'The ping to 8.8.8.8 went out through the gateway and came back.'],
        ['The websites they want are down, which is why the lookup timed out', LINK, 'No website was reached. The lookup of the name timed out first, and their neighbor gets through.'],
        ['DHCP gave them a bad lease that has not yet expired', MISREAD, 'DHCP Enabled says No. Their numbers were typed in by hand, so no lease was handed out.']])],
      deciding: ['a1', 'a4', 'b4', 'c4'],
      reason: 'Pings to a number work, so the link, address and gateway are fine. nslookup shows the DNS server it asked, 192.168.1.5, and that server does not answer. Their neighbor uses 192.168.1.1. A DNS address typed in long ago is the likely cause, and choosing “obtain DNS automatically” is one change that can be undone.' }),
    item({
      id: 'l14-s-tracert', strand: NC,
      blocks: [
        chat('Vincent, IT manager', 'k1', 'The whole office lost the internet at 10:05. Pings to 8.8.8.8 time out as well. I ran tracert to a website.'),
        out('a', 'C:\\> tracert www.example.com', ['Tracing route to www.example.com [203.0.113.20] over a maximum of 30 hops:', '1   <1 ms   <1 ms   <1 ms  192.168.1.1', '2    9 ms    8 ms    9 ms  198.51.100.1', '3     *        *        *     Request timed out.', '4     *        *        *     Request timed out.', '5     *        *        *     Request timed out.', '(the same for hops 6 to 30)', 'Trace complete.']),
        note('This desk’s rule: a fault past the office router is reported to the internet provider, with the tracert output.')],
      asks: [ask('Where does the path break, and what do you do?', [
        ['After hop 2, at the provider: report it to them with this output', true, 'Hops 1 and 2 answer, and every hop from 3 on is silent, with pings failing too. That is a break past the office.'],
        ['At hop 1: the office router has stopped answering the trace', 'wrong-side', 'Hop 1 replied in under a millisecond. The stars start after it.'],
        ['Nowhere: stars only mean the site blocks tracert, so wait it out', MISREAD, 'Stars in the middle with replies after them are a quiet router. Stars from hop 3 to the end, with ping failing too, are a broken path.'],
        ['At the destination: the website is down and not replying', 'wrong-side', 'The trace stopped at hop 3 of up to 30. It never got near the website.']])],
      deciding: ['a3', 'a4', 'a5'],
      reason: 'tracert lists every router on the way, three tries each. Hop 1 is the office router and hop 2 the provider’s. Stars from hop 3 to the end, when pings fail too, show where the path breaks. The desk’s rule sends it to the provider, with this output so they need not run it again.' }),
    item({
      id: 'l14-s-proxy', strand: NS,
      blocks: [
        chat('Mae, Sales', 'm1', 'Back in the office after a week at a hotel. Every website says it cannot be reached. A co-worker’s laptop on the same Wi-Fi opens sites fine. At the hotel I had to change a setting before the internet would work.'),
        ping('a', 'www.example.com', 'Pinging www.example.com [203.0.113.20] with 32 bytes of data:', replies('203.0.113.20', ['16ms', '15ms', '15ms', '16ms'], 56), 0)],
      asks: [ask('Where does this point, and what do you check?', [
        ['A proxy left on from the hotel: check Network and Internet, Proxy', true, 'The ping by name works, so the link, address, gateway and lookup work. The browser still sends its traffic to the old proxy.'],
        ['DNS is down, so names cannot be turned into numbers', LINK, 'The ping by name worked, so the name was turned into a number.'],
        ['The Wi-Fi link is weak, so pages time out before they finish loading', LINK, 'Four replies came back and their co-worker is fine on the same Wi-Fi.'],
        ['Run ipconfig /renew on their laptop and try a site again', 'no-split', 'The ping by name worked, so their address is fine. Asking for a new one cannot change a proxy setting.']])],
      deciding: ['m1', 'a2'],
      reason: 'The ping by name worked, so links 1 to 4 are fine, and a co-worker is fine on the same Wi-Fi. What is left is the service link on their own computer. A proxy is a server their web traffic goes through, and one that was typed in for the hotel does not exist here.' }),
    item({
      id: 'l14-x-call', strand: ON,
      blocks: [note('Ula in Marketing calls the help desk. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Ula calls about their internet. What do you say?', form: 'call', from: 'Ula, Marketing', detail: 'Incoming call · 9:10 AM', start: 'one',
        turns: {
          one: { lines: [L('u1', 'The internet is down. The woman next to me is fine, only mine. There is a yellow triangle on the little network picture by the clock. Please fix it.')], push: 'They want it fixed now. They have not said how their computer is connected.',
            options: [{ id: 'sayback', text: 'So it is only your computer, and your neighbor is fine. Click the little network picture by the clock and read me the name next to it.', goto: 'two' },
              { id: 'near', text: 'Is anyone near you having the same trouble, or is it only your computer?', end: 'asked' },
              { id: 'router', text: 'I will restart the router for you now.', end: 'router' },
              { id: 'cmd', text: 'Open a command window and type ipconfig slash all, then read me the lines.', end: 'jargon' },
              { id: 'wifi', text: 'It is probably your Wi-Fi.', end: 'guess' },
              { id: 'laptop', text: 'I will arrange a new laptop for you.', end: 'new' }] },
          two: { lines: [L('u2', 'It says Ethernet. I have a call at ten. Can you just fix it from there?')], push: 'They want it fixed from your side before their call.',
            options: [{ id: 'look', text: 'Not yet; it is one look. Check that the cable is pushed in at both ends and whether a light is on beside it, then tell me. I will keep this ticket open.', end: 'link' },
              { id: 'router2', text: 'Yes, let me restart the router, then.', end: 'router' },
              { id: 'driver', text: 'I will reinstall the network driver on your computer from here.', end: 'new' },
              { id: 'promise', text: 'It will be working before your call, I promise.', end: 'promise' }] }
        },
        ends: {
          link: { ok: true, then: 'Their neighbor is fine, so the office connection and the router are cleared, and Ethernet means a cable, so link 1 is the cheapest next look. The yellow triangle only means Windows could not confirm internet; it does not say which link failed.' },
          asked: { ok: false, slip: 'no-sayback', then: 'They had just told you: their neighbor is fine, only theirs. Asking again shows them you were not listening. Say it back, then give them one thing to look at.' },
          router: { ok: false, slip: RESET, then: 'Their neighbor is fine through the same router, so it is cleared, and a restart drops everyone in the office.' },
          jargon: { ok: false, slip: 'jargon', then: 'They do not know what a command window is, and they are in a hurry. Give them something they can read off the screen.' },
          guess: { ok: false, slip: 'guessed-cause', then: 'Nothing said how they are connected. A cause told to them before it is known can send both of you the wrong way.' },
          new: { ok: false, slip: PART, then: 'No test has been run, so a new laptop or a driver reinstall is a guess that costs time or money.' },
          promise: { ok: false, slip: 'false-promise', then: 'Nothing is known yet, so the result is not in your hands. Give them the next look instead.' } } }],
      reason: 'They gave the cut themself: only their computer is affected. Saying it back confirms it, and one thing they can read from the screen, how they are connected, picks the next cheap test. The yellow triangle means only that Windows could not confirm internet; the light, the name by the picture and ipconfig say which link.' }),
    say('l14-r-apipa', AD, 'What are the first two numbers of the address Windows gives itself when no DHCP server answers?', 'Type the two numbers.', ['169.254', '169.254.x.x', '169.254.0.0'],
      'Windows builds an address in the 169.254 range (APIPA, automatic private IP addressing), with mask 255.255.0.0 and no gateway, when it calls on DHCP and nothing answers. Seeing it means DHCP was not reached.'),


    // ----- more for the second group -----
    item({
      id: 'l14-s-slow', strand: ON,
      blocks: [chat('Halima, Design', 'k1', 'My laptop is slow on Wi-Fi at the far desk. A computer on a cable next to me is fast. We open the same sites.')],
      asks: [ask('Which test cuts the causes in half?', [
        ['Plug the same laptop into a cable and run the same download', true, 'Same laptop, same download, no radio link. If it is fast, the Wi-Fi at that desk is the cause.'],
        ['Ping the website from the cabled computer next to them and read the times', 'no-split', 'That computer is already fast. Its times say nothing about what the radio link does for the laptop.'],
        ['Restart the office router and then the laptop together', RESET, 'Two changes at once, and a restart that drops everyone, rule nothing out.'],
        ['Replace the laptop’s Wi-Fi card with a new one', PART, 'Nothing has shown the card at fault, and the cable test is free.']])],
      deciding: ['k1'],
      reason: 'Slow only over Wi-Fi at one desk points at the radio link: signal, distance or interference. A cable test with the same laptop splits the Wi-Fi from the laptop and the internet, and changes nothing.' }),
    item({
      id: 'l14-s-auth', strand: ON,
      blocks: [chat('Rachel, HR', 'l1', 'The office Wi-Fi password was changed on Monday. My laptop now says it cannot connect. My phone, which I joined with the new password, is fine.')],
      asks: [ask('What do you do?', [
        ['Forget the network on the laptop and join again with the new password', true, 'The laptop still holds the old password, and the Wi-Fi refuses it: an authentication failure on link 1.'],
        ['Run ipconfig /renew, then try the old password again', 'no-split', 'The laptop never got far enough to request an address, and the old password is still refused.'],
        ['Type in a static address on the laptop to skip the password step', STATIC, 'A fixed address does not remove the password. The Wi-Fi still has to let the laptop on.'],
        ['Replace the laptop’s Wi-Fi card, since the phone works', PART, 'The card finds the network. It is the saved password that fails.']])],
      deciding: ['l1'],
      reason: 'A phone that joined with the new password works, so the network is fine. The laptop is being refused at the link: a wrong or changed password is the usual cause of an authentication failure.' }),
    item({
      id: 'l14-s-ipv6', strand: AD,
      blocks: [chat('Moe, Sales', 'm1', 'ipconfig shows an address starting fe80:: under my adapter. Is that the 169.254 problem again?')],
      asks: [ask('What do you tell them?', [
        ['No: fe80:: is the normal local IPv6 address; read the IPv4 lines', true, 'Every IPv6 computer makes a link-local address starting fe80::. It is normal, unlike 169.254.'],
        ['Yes: it also means DHCP was not reached, so check the link light', MIXED, 'A 169.254 address is the warning. fe80:: is made for the local network on purpose and always there.'],
        ['Yes: IPv6 has failed, so turn it off on the adapter', SETTING, 'Nothing has failed, and turning IPv6 off would not fix an IPv4 fault.'],
        ['No: it is a public IPv6 address that anyone online can reach', MIXED, 'fe80:: works only on the local network and is never reached from the internet.']])],
      deciding: ['m1'],
      reason: 'IPv6 addresses are 128 bits in hexadecimal. The one starting fe80:: is link-local: it works only on the local network and is always present. The warning sign is an IPv4 address starting 169.254.' }),
    item({
      id: 'l14-s-unreach', strand: NC,
      blocks: [
        chat('Byron, Front desk', 'b1', 'I cannot print. IT told me the printer is at 192.168.1.80. My computer is 192.168.1.42.'),
        ping('a', '192.168.1.80', 'Pinging 192.168.1.80 with 32 bytes of data:', ['Reply from 192.168.1.42: Destination host unreachable.', 'Reply from 192.168.1.42: Destination host unreachable.', 'Reply from 192.168.1.42: Destination host unreachable.', 'Reply from 192.168.1.42: Destination host unreachable.'], 0)],
      asks: [ask('What does it show?', [
        ['Nothing on the local network answers at that address', true, 'The “reply” came from Byron’s own computer, saying it found no one at .80. The printer is off, or its address changed.'],
        ['The internet connection is down for the whole office', LINK, 'The ping stayed inside the office network and never needed the internet.'],
        ['The printer replied, so the fault is in the print queue', MISREAD, 'The reply line names 192.168.1.42, Byron’s own address, not the printer’s.'],
        ['The name lookup failed, so the printer name is wrong', LINK, 'The ping was to a number, so no lookup was used.']])],
      deciding: ['a2'],
      reason: 'Destination host unreachable, from your own address, means there is no way to reach that address on the local network. Check that the printer is on and what address it now has, before anything on the computer is changed.' }),
    item({
      id: 'l14-s-alldown', strand: AD,
      blocks: [chat('Kasper, Office manager', 'g1', 'Everyone in the building has the yellow warning this morning, and every laptop shows a 169.254 address. The router’s lights look odd after last night’s power cut.'),
        table('Kasper’s network notes', ['Detail', 'Value'], [['t1', 'Where addresses come from (DHCP)', 'The router'], ['t2', 'Other DHCP servers', 'None']])],
      asks: [ask('What do you do first?', [
        ['Restart the router, which runs DHCP; everyone is already down', true, 'The router hands out the addresses, and it did not recover from the power cut. Everyone is already offline, so a restart costs nobody anything.'],
        ['Type in a static address on each laptop so people can start work', STATIC, 'It hides a fault that sits in one box and creates dozens of hand-typed addresses to undo.'],
        ['Run ipconfig /flushdns on every laptop in turn', 'no-split', 'Saved name answers have nothing to do with laptops that have no address.'],
        ['Replace the network adapter in the first laptop', PART, 'Every laptop has the same sign, so the shared box is the cause, not one adapter.']])],
      deciding: ['g1', 't1', 't2'],
      reason: 'Everyone getting 169.254 at once means the DHCP service is not answering for the whole building, and here it is the router after a power cut. A restart is right this time because nobody is online to lose and the cause is that one box.' }),
    say('l14-s-netuse', NC, 'Which Windows command shows the mapped drives, or maps a new one to a drive letter?', 'Type the command.', ['net use'],
      'net use shows mapped drives, and net use Z: \\\\fileserver\\Sales maps one. netstat lists open connections, and nslookup queries DNS.'),

    // ----- group 3: mixed with lessons 5 and 9 -----
    item({
      id: 'l14-g-mapped', strand: NS,
      blocks: [chat('Angela, Remote', 'a1', 'I am working from home today. My Z: drive in File Explorer has a red X and says it cannot connect. At the office it works.')],
      asks: [ask('What do you check first?', [
        ['Whether the VPN is on, since the drive lives inside the office', true, 'A mapped drive is a path to a shared folder on a server, and away from the office the VPN is what reaches it.'],
        ['Map the drive again with a different letter, in case Z: is stuck', SETTING, 'A new letter points at the same server, which still cannot be reached.'],
        ['Run ipconfig /renew on their laptop to get a fresh address', 'no-split', 'Their home address is working, since they are online. Asking for it again tells nothing about the path to the office server.'],
        ['Turn on the metered connection so the drive reconnects', SETTING, 'Metered only holds back big downloads. It does not open a path to the server.']])],
      deciding: ['a1'],
      reason: 'A mapped drive is a drive letter for a network path such as \\\\fileserver\\Sales. The server sits inside the office network, so away from it the drive works only through the VPN. The red X says the path cannot be reached, which sends you to the VPN before anything else.' }),
    item({
      id: 'l14-g-public', strand: NS,
      blocks: [
        chat('Emil, Sales', 'c1', 'I moved to the office’s new conference room Wi-Fi. Websites open fine, but I cannot see the shared printer or any of the other laptops. It worked at my old seat.'),
        cfg('a', 'Windows network settings', [['Network profile', 'Public']]),
        note('This desk’s rule: the office’s own Wi-Fi networks use the Private profile.')],
      asks: [ask('What do you do?', [
        ['Change the profile to Private, as this desk’s rule says for the office’s own Wi-Fi', true, 'Public hides the computer and turns off sharing. Private is the setting for a network you trust, and the desk’s rule names this one.'],
        ['Turn off the firewall so that nothing blocks the printer', OPEN, 'That opens the computer to every network it joins, a café included. The profile is the setting that changes.'],
        ['Restart the office router and then the printer, one after the other', RESET, 'Websites work and the profile explains the missing printer. A restart would drop everyone.'],
        ['Type in a static address from the conference room range', STATIC, 'Their address is working, since websites open. A fixed one would not show the printer either.']])],
      deciding: ['a1'],
      reason: 'Windows wants to know whether a new network is public or private. Public, for a café or hotel, hides the computer and turns network discovery (the computer showing itself to others) and sharing off, so the printer and other laptops vanish while websites still work. This desk’s rule makes its own Wi-Fi Private.' }),
    item({
      id: 'l14-g-vlan', strand: AD,
      blocks: [
        chat('Quin, Office', 'q1', 'I plugged a new laptop into the jack by the conference phone. It got 10.50.8.12 and the file server will not open. My own laptop on a normal jack has 10.20.4.31 and works. The server fails by its address too, not only by name.'),
        table('What the network team says', ['Fact', 'Value'], [['t1', 'File server', '10.20.1.5'], ['t2', 'Normal jacks', 'Addresses 10.20.x.x'], ['t3', 'Phone jacks', 'Addresses 10.50.x.x']])],
      asks: [ask('What explains it?', [
        ['The phone jack is in another VLAN, a separate network', true, 'A VLAN splits one switch into separate networks. The laptop is on the phone network, not the file server’s.'],
        ['The laptop made up a 169.254 address when DHCP was not reached', MISREAD, 'Its address starts 10.50. A DHCP server handed it out.'],
        ['The file server needs a fixed address, not a handed-out one', CAUSE, 'The server works for the laptop on the normal jack, so its address is not the problem.'],
        ['The laptop’s DNS server is down, so the server name fails', LINK, 'It fails by address too, since the server is on another network, so a lookup is not the missing link.']])],
      deciding: ['t1', 't2', 't3'],
      reason: 'Computers on different VLANs cannot reach each other unless a router passes traffic between them, and each VLAN has its own addresses. The phone jack hands out 10.50.x.x, and the server is on 10.20.x.x. The fix is a data jack, or the network team moving that port.' }),
    item({
      id: 'l14-g-wifi', strand: ON,
      blocks: [chat('Rae, Warehouse', 'r1', 'The Wi-Fi drops about every ten minutes at the back dock, then comes back. The laptops on cables in the office never drop.')],
      asks: [ask('Which test cuts the causes in half?', [
        ['Stand beside the access point with the same laptop and watch it', true, 'If it stops dropping, distance or interference at the dock is the cause. If it still drops, the laptop or the access point is.'],
        ['Replace the laptop’s Wi-Fi card with one from stock', PART, 'Nothing has shown the card at fault, and the cabled laptops say nothing about it either way.'],
        ['Ping the access point from a cabled computer in the office and compare', 'no-split', 'A cabled computer never uses the radio link, so a good result there says nothing about the dock.'],
        ['Restart the office router to refresh the wireless network', RESET, 'It drops everyone and rules nothing out, since the drops would come back.']])],
      deciding: ['r1'],
      reason: 'Intermittent wireless that drops in one place and never on a cable points at the radio side: signal strength, distance or interference at the dock. Moving the same laptop next to the access point is a free test that splits the place from the laptop.' }),
    item({
      id: 'l14-g-conflict', strand: AD,
      blocks: [
        chat('Holly, Front desk', 'e1', 'The front desk printer keeps dropping off. A few times a day Windows on some computer says there is an IP address conflict. Last month we typed 192.168.1.130 into the printer by hand.'),
        table('The DHCP server’s list', ['Detail', 'Value'], [['t1', 'Scope', '192.168.1.100 to 192.168.1.199'], ['t2', 'Exclusions', 'None']])],
      asks: [ask('What fixes it for good?', [
        ['Exclude 192.168.1.130 from the scope so it is never handed out', true, 'The printer’s hand-typed address is inside the scope, so the server will hand .130 to a laptop sooner or later.'],
        ['Shorten the lease time to one hour so that addresses are handed back sooner', SIGN, 'The server would still hand out .130 to any laptop in turn.'],
        ['Restart the printer every morning before the office opens', SIGN, 'It clears the conflict for a while. It returns the next time .130 is given out.'],
        ['Type an address into every laptop too, outside the scope', STATIC, 'More hand-typed addresses mean more chances for two devices to share one.']])],
      deciding: ['t1', 't2'],
      reason: 'An address conflict is two devices holding one address. The printer’s hand-typed address sits inside the range the server hands out, so the cure is an exclusion: an address in the scope the server must never give away.' }),

    // ----- added after the first reviews: the mask, DMARC, cellular, the firewall exception -----
    item({
      id: 'l14-s-samenet', strand: AD,
      blocks: [
        chat('Byron, Front desk', 'b1', 'We bought a new printer. I cannot print to it from my computer. Both of us are plugged into the same switch.'),
        table('What the computer and the printer show', ['Detail', 'Computer', 'Printer'], [['t1', 'IPv4 address', '192.168.1.42', '192.168.2.80'], ['t2', 'Subnet mask', '255.255.255.0', '255.255.255.0'], ['t3', 'How it got its address', 'DHCP', 'Typed in by hand']]),
        table('The DHCP server’s list', ['Detail', 'Value'], [['u1', 'Scope', '192.168.1.100 to 192.168.1.199'], ['u2', 'Free outside the scope', '192.168.1.80 (nothing uses it)']])],
      asks: [ask('What is the one change?', [
        ['Change the printer’s typed-in address to 192.168.1.80, which is on the computer’s network and outside the scope', true, 'With a mask of 255.255.255.0 two devices are on the same network only if their first three numbers match. 192.168.2 and 192.168.1 differ, so the printer is on another network.'],
        ['Change the computer’s mask to 255.255.0.0 so that the printer counts as local', SETTING, 'That edits the computer to suit one typo, and every other device would still see the printer as another network.'],
        ['Run ipconfig /renew on the computer', 'no-split', 'The computer’s address is fine. The printer’s is the one on the wrong network.'],
        ['Plug the printer into a different port on the switch', NEAR, 'It is on the same switch already, and the addresses show the problem. A different port keeps the same address.']])],
      deciding: ['t1', 't2', 'u1'],
      reason: 'The mask 255.255.255.0 says the first three numbers must match for two devices to share a network. The computer is 192.168.1 and the printer 192.168.2, so they are on different networks, and the printer has no way in. Giving the printer an address that starts 192.168.1 and sits outside the scope fixes the one thing that is wrong.' }),
    item({
      id: 'l14-s-mask', strand: AD,
      blocks: [
        chat('Tobias, Accounts', 't1', 'I can open the shared drive on this floor, but not the payroll server upstairs. My neighbor can open both. I typed my own address settings last week.'),
        cfg('a', 'C:\\> ipconfig on Tobias’s computer', [['IPv4 Address', '192.168.1.50'], ['Subnet Mask', '255.255.0.0'], ['Default Gateway', '192.168.1.1']]),
        cfg('b', 'C:\\> ipconfig on the neighbor’s computer', [['IPv4 Address', '192.168.1.71'], ['Subnet Mask', '255.255.255.0'], ['Default Gateway', '192.168.1.1']]),
        note('The payroll server is at 192.168.2.10. The router connects the two floors.')],
      asks: [ask('What explains it?', [
        ['The mask they typed is too wide, so their computer treats 192.168.2.10 as local and never sends it to the gateway', true, 'With 255.255.0.0 only the first two numbers must match, and 192.168 matches. It looks for the server on its own floor. The neighbor’s 255.255.255.0 sends it through the gateway.'],
        ['The gateway is typed wrong, because the shared drive on their floor opens', LINK, 'Their gateway, 192.168.1.1, is the same as their neighbor’s, and the neighbor reaches the server.'],
        ['Their address is a duplicate of another computer’s', CAUSE, 'A duplicate would break the drive on their floor too, and Windows would warn them.'],
        ['The payroll server is down for them but up for their neighbor', CAUSE, 'A server is not down for one person. What differs is the mask in their settings.']])],
      deciding: ['a2', 'b2'],
      reason: 'The mask tells a computer which addresses are on its own network. Their 255.255.0.0 is wider than the office’s 255.255.255.0, so the server upstairs looks local and they send to it directly, where nothing answers. Anything outside the local network goes through the gateway. Setting the adapter back to automatic, or typing the same mask as their neighbor, is one change.' }),
    item({
      id: 'l14-s-spoof', strand: AD,
      blocks: [chat('Gina, Office manager', 'g1', 'A customer says they got an email that looked like it was from our domain asking them to pay a new bank account. We never sent it. Our domain has an SPF record already.')],
      asks: [ask('Which record tells other mail servers what to do with mail that fails the checks?', [
        ['A DMARC record, which says what to do with mail that fails', true, 'DMARC is the TXT record that tells receiving servers to reject, quarantine or allow mail that fails the SPF and DKIM checks.'],
        ['A DKIM record, which lists the servers allowed to send', MIXED, 'DKIM carries what lets receivers check a message’s digital signature. SPF is the one that lists the servers allowed to send.'],
        ['An MX record, which says where the domain’s email is delivered', MIXED, 'An MX record is for mail coming in to the domain. It says nothing about what to do with forged mail.'],
        ['A CNAME record, which makes one name an alias for another', MIXED, 'A CNAME points a name at another name. It has no part in email checks.']])],
      deciding: ['g1'],
      reason: 'SPF lists who may send, DKIM adds a signature the receiver can check, and DMARC tells the receiver what to do when those checks fail. All three live in TXT records. The domain already has the first, so the missing piece is the instruction.' }),
    item({
      id: 'l14-s-cell', strand: NS,
      blocks: [chat('Eloise, Field sales', 's1', 'The hotel Wi-Fi is down tonight and I have a report due. My laptop has a SIM card in it from the company. In the network list I see only the hotel network.')],
      asks: [ask('What do you tell them?', [
        ['Turn Cellular on in the network list or settings; it uses the SIM in the laptop', true, 'A laptop with a SIM has a cellular adapter (WWAN, a wireless wide area network). Windows lists it like Wi-Fi, and it needs no hotel network.'],
        ['Connect the VPN first, because it gives the laptop its own internet', SETTING, 'A VPN is a tunnel that rides on an internet connection that already works. It cannot make one.'],
        ['Type in a static address from the hotel’s range', STATIC, 'The hotel network is the one that is down. An address from its range gets nowhere.'],
        ['Mark the hotel network Private so the laptop can see more networks', SETTING, 'The profile changes what the computer shows to others, not which networks it can reach.']])],
      deciding: ['s1'],
      reason: 'Cellular is a third kind of connection beside wired and wireless: the laptop reaches the internet through its SIM. Once it is on, the same chain applies. Cellular data is often limited, so marking it metered tells Windows to hold back big downloads.' }),
    item({
      id: 'l14-g-exception', strand: NS,
      blocks: [chat('Noah, Warehouse', 'n1', 'I installed the scanner program IT gave me. Other computers cannot reach it. A Windows box came up when I started it and I clicked Cancel. Websites and email are fine.')],
      asks: [ask('What do you do?', [
        ['Add the scanner program as an exception in the Windows firewall, for the network profile in use', true, 'The firewall asked whether to let the program through, and Cancel kept it blocked. An exception for that one program is the single change that fits.'],
        ['Turn the Windows firewall off while the scanner is in use', OPEN, 'That opens every program on the computer. One exception for one program is enough.'],
        ['Run ipconfig /release and /renew on their computer', NOSPLIT, 'Their address works, since websites and email do. The block is on the program.'],
        ['Type in a static address for their computer so the scanner keeps one address', STATIC, 'Their address already works, since websites and email do. The block is on the program, not on the address.']])],
      deciding: ['n1'],
      reason: 'The Windows firewall blocks incoming connections to a program unless an exception lets them through, and its rules are kept for each network profile. Websites and email work, so the chain is fine. Allowing the one program is the narrowest change.' })
  ]);
})();
