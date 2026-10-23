// IT Help Desk, lesson 14: How a computer gets online (part online). The connection chain as five links (the link; the address from DHCP; the subnet mask and
// gateway; the name lookup; the service), cut in half with ipconfig and three pings, with the output of ping, nslookup, tracert and pathping read for which link
// failed; static and dynamic addresses, DHCP lease, scope, exclusion and reservation, private, public, APIPA and IPv6, DNS records, VLAN and VPN; the Windows
// client settings. Research: docs/research/it-support.md IT4, IT5, IT8 (the chain is the plan's own cut); docs/research/it-support-aplus.md Core 1 2.4, 2.6, 5.5,
// Core 2 1.5, 1.7. Plan: lesson 14. One worked ticket (Odette: the office connection ruled out by one question); a first group of four with the deciding words marked;
// a second of nineteen; a third of six mixed with lessons 5 and 9; the check: six new tickets with command output, no help, 5 of 6 to pass.
FC.lesson('it-support', {
  id: 'l14', part: 'online', title: 'How a computer gets online', rev: 1, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (the five links of the connection chain; ipconfig and three pings to cut it; reading ping, nslookup, tracert and pathping; addressing, DNS records, VLAN, VPN; Windows client network settings).' }],
  why: [
    'Odette in Billing says nothing loads and the internet must be down. Between her computer and a website sit a cable or Wi-Fi, an address, the router, a name lookup and the website. Restarting the router cuts off everyone to test one of them.',
    'A good technician types ipconfig and reads three lines. You learn the five links, the commands that cut them in half, and how to read their output.'],
  flow: [
    { title: 'Five links from the cable to the website',
      show: [{ kind: 'prose', text: [
        'A website takes five things, in order.',
        '1. The link. A cable (Windows calls it Ethernet) runs from the computer’s adapter (network card) to a jack and a switch (the box that joins the office’s cables), and the jack’s light is on; or Wi-Fi is joined through an access point (the radio box) with the password; its signal weakens with distance, walls and other radios (interference).',
        '2. The address. A computer needs an IP address, a number like 192.168.1.42, like a street address. DHCP (Dynamic Host Configuration Protocol), usually inside the router, hands one out.',
        '3. The subnet mask and default gateway. The mask says which addresses share the local network: with 255.255.255.0, those whose first three numbers match. The gateway is the router’s address, the door out; past it is the line out.',
        '4. The name lookup. DNS (Domain Name System) turns a name like www.example.com into a number; DHCP also hands out the DNS server’s address.',
        '5. The service. The website, mail server or shared folder, answering.'] }] },
    { title: 'Each sign sits on a link',
      show: [{ kind: 'document', form: 'table', title: 'Where each sign belongs', head: ['What you see', 'The link', 'What it points at'], rows: [
        { id: 'r1', cells: ['No cable light, Wi-Fi off or refusing the password, or “Media disconnected”', '1. The link', 'Cable, jack, switch port, adapter, Wi-Fi off, or a changed password: forget the network and join again'] },
        { id: 'r3', cells: ['Link up, address starts 169.254', '2. The address', 'DHCP not reached: down, list full, or wrong VLAN'] },
        { id: 'r4', cells: ['Good address, router does not answer', '3. Mask and gateway', 'Mask or gateway typed wrong, or a fault before the router'] },
        { id: 'r5', cells: ['Router answers, nothing on the internet does', '3. Past the gateway', 'The line out: the modem (ends the provider’s line) or the provider'] },
        { id: 'r6', cells: ['Ping to a number works, to a name does not', '4. The name lookup', 'DNS server down, or wrong DNS address'] },
        { id: 'r7', cells: ['Names and numbers work, one site or program does not', '5. The service', 'Service down, blocked, wrong proxy, or misspelled'] }] }] },
    { title: 'Cut the chain with three pings',
      show: [{ kind: 'prose', text: [
        'The cheapest test that cuts the causes in half here is ipconfig and three pings. A ping sends a small message to an address and waits for the reply; it changes nothing.'] },
      { kind: 'document', form: 'table', title: 'The tests, in order', head: ['Test', 'It tells you', 'If it fails'], rows: [
        { id: 't1', cells: ['ipconfig', 'Address, mask, gateway', 'Media disconnected: link. 169.254: DHCP'] },
        { id: 't2', cells: ['ping the gateway', 'Whether the router answers', 'Fault is before the router, or at it'] },
        { id: 't3', cells: ['ping a number such as 8.8.8.8 (it answers pings)', 'Whether the way out works', 'Gateway answers, this does not: line out'] },
        { id: 't4', cells: ['ping a name such as www.example.com', 'Whether the lookup works', 'Number works, name does not: DNS'] }] },
      { kind: 'prose', text: [
        'Each test adds one link, so the first to fail shows where the chain breaks. A timed-out ping is weak evidence: some servers ignore pings.'] }] },
    { title: 'The commands',
      show: [{ kind: 'document', form: 'table', title: 'Network commands', head: ['Command', 'What it does'], rows: [
        { id: 'c2', cells: ['ipconfig /all', 'Adds the MAC address (the adapter’s hardware number), DHCP on or off, the DHCP and DNS servers, lease expiry'] },
        { id: 'c3', cells: ['ipconfig /release, then /renew', 'Gives back the address, then requests one'] },
        { id: 'c4', cells: ['ipconfig /flushdns', 'Empties the DNS cache'] },
        { id: 'c5', cells: ['nslookup', 'Asks a DNS server for a name; shows which answered. “Non-existent domain”: no such name, often a typo'] },
        { id: 'c6', cells: ['tracert', 'Lists each router (hop) to a destination; stars mean no reply'] },
        { id: 'c7', cells: ['pathping', 'Like tracert, then counts lost packets at each hop; takes minutes'] },
        { id: 'c8', cells: ['netstat', 'Lists open connections and ports'] },
        { id: 'c9', cells: ['net use', 'Shows mapped drives; net use Z: \\\\fileserver\\Sales maps one'] }] },
      { kind: 'document', form: 'table', title: 'What ping says', head: ['The line', 'It means'], rows: [
        { id: 'p1', cells: ['Reply from 192.168.1.1: bytes=32 time=2ms TTL=64', 'An answer, and its time. Ignore TTL'] },
        { id: 'p2', cells: ['Request timed out.', 'No answer: a broken path, or a target ignoring pings'] },
        { id: 'p3', cells: ['Destination host unreachable.', 'No route there. From your own address: no device found locally. The total still counts it as received, so read the lines'] },
        { id: 'p4', cells: ['Ping request could not find host', 'The name did not become a number: DNS'] },
        { id: 'p5', cells: ['PING: transmit failed. General failure.', 'Windows could not send; often a disabled adapter'] }] }] },
    { title: 'Reading ipconfig and tracert',
      show: [{ kind: 'document', form: 'table', title: 'ipconfig on two computers on the same switch', head: ['Setting', 'Got an address', 'Made one up'], rows: [
          { id: 'a1', cells: ['IPv4 Address', '192.168.1.42', '169.254.31.77'] },
          { id: 'a2', cells: ['Subnet Mask', '255.255.255.0', '255.255.0.0'] },
          { id: 'a3', cells: ['Default Gateway', '192.168.1.1', '(empty)'] }] },
      { kind: 'prose', text: ['The second got no answer and built its own.'] },
      { kind: 'document', form: 'table', title: 'C:\\> tracert www.example.com', head: ['What the computer prints'], rows: [
          { id: 'h1', cells: ['1   <1 ms   <1 ms   <1 ms  192.168.1.1'] },
          { id: 'h2', cells: ['2    9 ms    8 ms    9 ms  198.51.100.1'] },
          { id: 'h3', cells: ['3     *        *        *     Request timed out.'] },
          { id: 'h4', cells: ['4   14 ms   15 ms   14 ms  198.51.100.9'] },
          { id: 'h5', cells: ['5   16 ms   15 ms   16 ms  203.0.113.20'] }] },
      { kind: 'prose', text: [
        'Hop 1 is the office router, hop 2 the provider’s. Hop 3 is silent but later hops answer, so that router just does not reply. Stars to the end, with pings failing too, are usually a break.'] },
      { kind: 'document', form: 'table', title: 'C:\\> pathping www.example.com (statistics, shortened)', head: ['Hop', 'RTT', 'Source to Here: lost/sent', 'This Node/Link: lost/sent', 'Address'], rows: [
          { id: 'q2', cells: ['1', '1ms', '0/100 = 0%', '0/100 = 0%', '192.168.1.1'] },
          { id: 'q3', cells: ['2', '9ms', '24/100 = 24%', '24/100 = 24%', '198.51.100.1'] },
          { id: 'q4', cells: ['3', '14ms', '25/100 = 25%', '1/100 = 1%', '203.0.113.20'] }] },
      { kind: 'prose', text: [
        'Loss that starts at one hop and continues on every later hop is a real fault there: hop 2.'] }] },
    { title: 'The mask: same network or not',
      show: [{ kind: 'document', form: 'table', title: 'What the mask says', head: ['Mask', 'Also written', 'These numbers must match', 'Same network as 192.168.1.42?'], rows: [
        { id: 'k1', cells: ['255.255.255.0', '/24', 'The first three', '192.168.1.80 yes; 192.168.2.80 no'] },
        { id: 'k2', cells: ['255.255.0.0', '/16', 'The first two', '192.168.2.80 yes; 10.0.1.5 no'] },
        { id: 'k3', cells: ['255.0.0.0', '/8', 'The first one', '192.168.2.80 yes; 10.0.1.5 no'] }] },
      { kind: 'prose', text: [
        'Your own network is reached directly; anything else goes to the gateway. A typed-in mask that differs from the other computers’ sends traffic the wrong way.'] }] },
    { title: 'Where the address comes from',
      show: [{ kind: 'document', form: 'table', title: 'Words about addresses', head: ['Word', 'What it means'], rows: [
        { id: 'w1', cells: ['Dynamic', 'From DHCP; the usual way'] },
        { id: 'w2', cells: ['Lease', 'How long the computer keeps the address before it renews'] },
        { id: 'w3', cells: ['Scope', 'The range the server may hand out. When all are leased, the next gets none'] },
        { id: 'w4', cells: ['Exclusion', 'A scope address never handed out'] },
        { id: 'w5', cells: ['Reservation', 'An address the server always gives one device, by its MAC address'] },
        { id: 'w6', cells: ['Static', 'Typed in by hand. Two devices with the same address is an address conflict'] },
        { id: 'w7', cells: ['APIPA', 'No DHCP answer: Windows builds one in 169.254.0.0/16, mask 255.255.0.0, no gateway'] }] }] },
    { title: 'Private and public, IPv4 and IPv6',
      show: [{ kind: 'prose', text: [
        'An IPv4 address is four numbers from 0 to 255, 32 bits in all. Three ranges are private: any network may use them inside, and the internet does not carry them. Most others are public, unique on the internet; 127.0.0.1 is the computer itself. The router shares the office’s public address among the private ones.'] },
      { kind: 'prose', text: [
        'The private ranges: 10.0.0.0 to 10.255.255.255; 172.16.0.0 to 172.31.255.255 (second number 16 to 31); 192.168.0.0 to 192.168.255.255. 169.254 is neither: it is the self-made APIPA range.'] },
      { kind: 'prose', text: [
        'IPv6 is 128 bits: eight groups of hexadecimal digits (0 to 9, a to f) with colons. Leading zeros may be dropped and one run of zero groups written as two colons: 2001:0db8:0000:0000:0000:0000:0000:0001 is 2001:db8::1. Every IPv6 computer also makes a local-only fe80:: address; that is normal, unlike 169.254.'] }] },
    { title: 'DNS records, VLAN and VPN',
      show: [{ kind: 'document', form: 'table', title: 'DNS records', head: ['Record', 'What it holds'], rows: [
        { id: 'd1', cells: ['A', 'A name and its IPv4 address'] },
        { id: 'd2', cells: ['AAAA', 'A name and its IPv6 address'] },
        { id: 'd3', cells: ['CNAME', 'A name that aliases another name'] },
        { id: 'd4', cells: ['MX', 'Where the domain’s email goes (mail exchange)'] },
        { id: 'd5', cells: ['TXT', 'Fights spam: SPF lists servers allowed to send the domain’s email, DKIM signs messages, DMARC says what to do with failures'] }] },
      { kind: 'prose', text: [
        'A VLAN (virtual LAN) splits one switch into separate networks, such as staff and guests. Computers on different VLANs cannot reach each other unless a router passes traffic between. A VPN (virtual private network) is an encrypted tunnel across the internet to the company network, as if plugged in at the office.'] }] },
    { title: 'Network settings on a Windows computer',
      show: [{ kind: 'document', form: 'table', title: 'The client settings', head: ['Setting', 'What it does and the trouble it explains'], rows: [
        { id: 'n1', cells: ['Adapter’s IPv4 properties', 'Automatic (dynamic) or typed in (static). Old typed numbers cause trouble elsewhere'] },
        { id: 'n2', cells: ['Domain or workgroup', 'Domain: a company group on a central server, one sign-in anywhere. Workgroup: local accounts. Windows Home cannot join a domain; Pro and Enterprise can'] },
        { id: 'n3', cells: ['Mapped drive', 'A drive letter such as Z: for a server folder (\\\\fileserver\\Sales). A red X: server not reached; check the network, or the VPN when away'] },
        { id: 'n4', cells: ['Proxy', 'A server web traffic goes through. A wrong one: websites fail, pings work. Check Network and Internet, Proxy'] },
        { id: 'n5', cells: ['Public or private network', 'Private: the computer is seen and shares. Public (a café): hidden. The Windows firewall blocks incoming connections to a program unless an exception lets it through, with rules for each profile'] },
        { id: 'n6', cells: ['Metered connection', 'Data is limited, as on a phone hotspot (a phone sharing its data); updates wait'] },
        { id: 'n7', cells: ['Connection type', 'Wired: plug in. Wireless: pick the network and enter its password. Cellular (WWAN): a SIM or eSIM (built-in SIM) in the laptop. A VPN needs one of these first'] }] }] },
    { title: 'Nothing loads, so restart the router',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“Nothing loads, so the internet is down. I will restart the router, then reinstall the network driver.”',
        'Nothing loads fits five faults. A restart drops everyone; a driver reinstall may fix a part that is fine. Run ipconfig and the three pings first: a minute, no changes. Exception: when everyone is already down, a restart costs nobody anything.'] }] },
    { worked: 'l14-w-priya' },
    { set: { items: ['l14-p-disc', 'l14-p-apipa', 'l14-p-gw', 'l14-p-dns'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l14-s-lease', 'l14-s-private', 'l14-s-nslookup', 'l14-s-tracert', 'l14-s-proxy', 'l14-x-call', 'l14-r-apipa', 'l14-s-slow', 'l14-s-auth', 'l14-s-ipv6', 'l14-s-unreach', 'l14-s-alldown', 'l14-s-netuse', 'l14-r-aaaa', 'l14-r-spf', 'l14-s-samenet', 'l14-s-mask', 'l14-s-spoof', 'l14-s-cell'], order: 'shuffle' } },
    { set: { items: ['l14-g-mapped', 'l14-g-public', 'l14-g-vlan', 'l14-g-wifi', 'l14-g-conflict', 'l14-g-exception', 'l14-r-nic', 'l14-r-vpn'], order: 'shuffle', mix: { from: ['l5', 'l9'], share: 0.3 } } }
  ],
  check: {
    items: ['l14-k-gwping', 'l14-k-renew', 'l14-k-typo', 'l14-k-pathping', 'l14-k-home', 'l14-k-gate'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 5 } }]
  }
});
