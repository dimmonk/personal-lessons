# IT Help Desk: How a computer gets online

Revision 1, live. Part: How a computer gets online. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Odette in Billing says nothing loads and the internet must be down. Between her computer and a website sit a cable or Wi-Fi, an address, the router, a name lookup and the website. Restarting the router cuts off everyone to test one of them.
A good technician types ipconfig and reads three lines. You learn the five links, the commands that cut them in half, and how to read their output.

## Step 1: Five links from the cable to the website

A website takes five things, in order.
1. The link. A cable (Windows calls it Ethernet) runs from the computer’s adapter (network card) to a jack and a switch (the box that joins the office’s cables), and the jack’s light is on; or Wi-Fi is joined through an access point (the radio box) with the password; its signal weakens with distance, walls and other radios (interference).
2. The address. A computer needs an IP address, a number like 192.168.1.42, like a street address. DHCP (Dynamic Host Configuration Protocol), usually inside the router, hands one out.
3. The subnet mask and default gateway. The mask says which addresses share the local network: with 255.255.255.0, those whose first three numbers match. The gateway is the router’s address, the door out; past it is the line out.
4. The name lookup. DNS (Domain Name System) turns a name like www.example.com into a number; DHCP also hands out the DNS server’s address.
5. The service. The website, mail server or shared folder, answering.

## Step 2: Each sign sits on a link

A plain table, "Where each sign belongs":

> What you see  |  The link  |  What it points at  (the column heads)
> No cable light, Wi-Fi off or refusing the password, or “Media disconnected”  |  1. The link  |  Cable, jack, switch port, adapter, Wi-Fi off, or a changed password: forget the network and join again
> Link up, address starts 169.254  |  2. The address  |  DHCP not reached: down, list full, or wrong VLAN
> Good address, router does not answer  |  3. Mask and gateway  |  Mask or gateway typed wrong, or a fault before the router
> Router answers, nothing on the internet does  |  3. Past the gateway  |  The line out: the modem (ends the provider’s line) or the provider
> Ping to a number works, to a name does not  |  4. The name lookup  |  DNS server down, or wrong DNS address
> Names and numbers work, one site or program does not  |  5. The service  |  Service down, blocked, wrong proxy, or misspelled

## Step 3: Cut the chain with three pings

The cheapest test that cuts the causes in half here is ipconfig and three pings. A ping sends a small message to an address and waits for the reply; it changes nothing.

A plain table, "The tests, in order":

> Test  |  It tells you  |  If it fails  (the column heads)
> ipconfig  |  Address, mask, gateway  |  Media disconnected: link. 169.254: DHCP
> ping the gateway  |  Whether the router answers  |  Fault is before the router, or at it
> ping a number such as 8.8.8.8 (it answers pings)  |  Whether the way out works  |  Gateway answers, this does not: line out
> ping a name such as www.example.com  |  Whether the lookup works  |  Number works, name does not: DNS

Each test adds one link, so the first to fail shows where the chain breaks. A timed-out ping is weak evidence: some servers ignore pings.

## Step 4: The commands

A plain table, "Network commands":

> Command  |  What it does  (the column heads)
> ipconfig /all  |  Adds the MAC address (the adapter’s hardware number), DHCP on or off, the DHCP and DNS servers, lease expiry
> ipconfig /release, then /renew  |  Gives back the address, then requests one
> ipconfig /flushdns  |  Empties the DNS cache
> nslookup  |  Asks a DNS server for a name; shows which answered. “Non-existent domain”: no such name, often a typo
> tracert  |  Lists each router (hop) to a destination; stars mean no reply
> pathping  |  Like tracert, then counts lost packets at each hop; takes minutes
> netstat  |  Lists open connections and ports
> net use  |  Shows mapped drives; net use Z: \\fileserver\Sales maps one

A plain table, "What ping says":

> The line  |  It means  (the column heads)
> Reply from 192.168.1.1: bytes=32 time=2ms TTL=64  |  An answer, and its time. Ignore TTL
> Request timed out.  |  No answer: a broken path, or a target ignoring pings
> Destination host unreachable.  |  No route there. From your own address: no device found locally. The total still counts it as received, so read the lines
> Ping request could not find host  |  The name did not become a number: DNS
> PING: transmit failed. General failure.  |  Windows could not send; often a disabled adapter

## Step 5: Reading ipconfig and tracert

A plain table, "ipconfig on two computers on the same switch":

> Setting  |  Got an address  |  Made one up  (the column heads)
> IPv4 Address  |  192.168.1.42  |  169.254.31.77
> Subnet Mask  |  255.255.255.0  |  255.255.0.0
> Default Gateway  |  192.168.1.1  |  (empty)

The second got no answer and built its own.

A plain table, "C:\> tracert www.example.com":

> What the computer prints  (the column heads)
> 1   <1 ms   <1 ms   <1 ms  192.168.1.1
> 2    9 ms    8 ms    9 ms  198.51.100.1
> 3     *        *        *     Request timed out.
> 4   14 ms   15 ms   14 ms  198.51.100.9
> 5   16 ms   15 ms   16 ms  203.0.113.20

Hop 1 is the office router, hop 2 the provider’s. Hop 3 is silent but later hops answer, so that router just does not reply. Stars to the end, with pings failing too, are usually a break.

A plain table, "C:\> pathping www.example.com (statistics, shortened)":

> Hop  |  RTT  |  Source to Here: lost/sent  |  This Node/Link: lost/sent  |  Address  (the column heads)
> 1  |  1ms  |  0/100 = 0%  |  0/100 = 0%  |  192.168.1.1
> 2  |  9ms  |  24/100 = 24%  |  24/100 = 24%  |  198.51.100.1
> 3  |  14ms  |  25/100 = 25%  |  1/100 = 1%  |  203.0.113.20

Loss that starts at one hop and continues on every later hop is a real fault there: hop 2.

## Step 6: The mask: same network or not

A plain table, "What the mask says":

> Mask  |  Also written  |  These numbers must match  |  Same network as 192.168.1.42?  (the column heads)
> 255.255.255.0  |  /24  |  The first three  |  192.168.1.80 yes; 192.168.2.80 no
> 255.255.0.0  |  /16  |  The first two  |  192.168.2.80 yes; 10.0.1.5 no
> 255.0.0.0  |  /8  |  The first one  |  192.168.2.80 yes; 10.0.1.5 no

Your own network is reached directly; anything else goes to the gateway. A typed-in mask that differs from the other computers’ sends traffic the wrong way.

## Step 7: Where the address comes from

A plain table, "Words about addresses":

> Word  |  What it means  (the column heads)
> Dynamic  |  From DHCP; the usual way
> Lease  |  How long the computer keeps the address before it renews
> Scope  |  The range the server may hand out. When all are leased, the next gets none
> Exclusion  |  A scope address never handed out
> Reservation  |  An address the server always gives one device, by its MAC address
> Static  |  Typed in by hand. Two devices with the same address is an address conflict
> APIPA  |  No DHCP answer: Windows builds one in 169.254.0.0/16, mask 255.255.0.0, no gateway

## Step 8: Private and public, IPv4 and IPv6

An IPv4 address is four numbers from 0 to 255, 32 bits in all. Three ranges are private: any network may use them inside, and the internet does not carry them. Most others are public, unique on the internet; 127.0.0.1 is the computer itself. The router shares the office’s public address among the private ones.

The private ranges: 10.0.0.0 to 10.255.255.255; 172.16.0.0 to 172.31.255.255 (second number 16 to 31); 192.168.0.0 to 192.168.255.255. 169.254 is neither: it is the self-made APIPA range.

IPv6 is 128 bits: eight groups of hexadecimal digits (0 to 9, a to f) with colons. Leading zeros may be dropped and one run of zero groups written as two colons: 2001:0db8:0000:0000:0000:0000:0000:0001 is 2001:db8::1. Every IPv6 computer also makes a local-only fe80:: address; that is normal, unlike 169.254.

## Step 9: DNS records, VLAN and VPN

A plain table, "DNS records":

> Record  |  What it holds  (the column heads)
> A  |  A name and its IPv4 address
> AAAA  |  A name and its IPv6 address
> CNAME  |  A name that aliases another name
> MX  |  Where the domain’s email goes (mail exchange)
> TXT  |  Fights spam: SPF lists servers allowed to send the domain’s email, DKIM signs messages, DMARC says what to do with failures

A VLAN (virtual LAN) splits one switch into separate networks, such as staff and guests. Computers on different VLANs cannot reach each other unless a router passes traffic between. A VPN (virtual private network) is an encrypted tunnel across the internet to the company network, as if plugged in at the office.

## Step 10: Network settings on a Windows computer

A plain table, "The client settings":

> Setting  |  What it does and the trouble it explains  (the column heads)
> Adapter’s IPv4 properties  |  Automatic (dynamic) or typed in (static). Old typed numbers cause trouble elsewhere
> Domain or workgroup  |  Domain: a company group on a central server, one sign-in anywhere. Workgroup: local accounts. Windows Home cannot join a domain; Pro and Enterprise can
> Mapped drive  |  A drive letter such as Z: for a server folder (\\fileserver\Sales). A red X: server not reached; check the network, or the VPN when away
> Proxy  |  A server web traffic goes through. A wrong one: websites fail, pings work. Check Network and Internet, Proxy
> Public or private network  |  Private: the computer is seen and shares. Public (a café): hidden. The Windows firewall blocks incoming connections to a program unless an exception lets it through, with rules for each profile
> Metered connection  |  Data is limited, as on a phone hotspot (a phone sharing its data); updates wait
> Connection type  |  Wired: plug in. Wireless: pick the network and enter its password. Cellular (WWAN): a SIM or eSIM (built-in SIM) in the laptop. A VPN needs one of these first

## Step 11: Nothing loads, so restart the router

A wrong idea, marked wrong: “Nothing loads, so the internet is down. I will restart the router, then reinstall the network driver.”
The right line: Nothing loads fits five faults. A restart drops everyone; a driver reinstall may fix a part that is fine. Run ipconfig and the three pings first: a minute, no changes. Exception: when everyone is already down, a restart costs nobody anything.

## Step 12: A worked example

A chat, with its history: "Odette, Billing", Chat with the help desk.

> (Odette, Billing, at the left) Nothing loads on my computer. I think the internet is down for the whole office. I am plugged in with a cable, and the light by the cable is on.

The chain from the cable to a website: the link, the address, the mask and gateway, the name lookup, the service.

This desk’s rule: wall jacks and switch ports belong to the network team.

Before the working, the learner may commit to a choice (not scored, not stored):
**Tom at the next desk says his websites load fine. What does that show?**
(the options come in an order that depends on the seed of the question)
- The line out and the router work, so the fault is on Odette’s side of them.
- The router needs a restart, since it is the one box every computer in the office shares.
- Odette’s browser is broken, since her cable and the light by it both look fine.

The working, one step at a time:
1. Write the chain, so every cause has a place.: The link, the address, the mask and gateway, the name lookup, the service. “Nothing loads” could be any of the five.
1. Name the favorite cause and cut with the cheapest test: another person on the same network.: The favorite is the office’s internet. Tom, at the next desk, loads sites fine. The office connection and the router are cleared, and the fault is somewhere on Odette’s side of them.
1. Run ipconfig on Odette’s computer. It changes nothing.: The Ethernet adapter shows an IPv4 address of 169.254.31.77, a mask of 255.255.0.0 and an empty Default Gateway. The adapter is not “Media disconnected”, so link 1 is up. The computer made up its own address because no DHCP answer came: link 2 failed.
1. Cut again: the cable against everything else. Swap in a cable known to work.: Same result, 169.254 again. The cable is ruled out.
1. Plug Odette’s computer into Tom’s cable, which works.: It gets 192.168.1.57 at once, with a gateway. Her computer and its settings are fine, and the fault is her wall jack or its port on the switch.
1. Get her working, then hand on with what you found.: Odette works from a spare jack. The network team gets the jack number, the 169.254 address, the cable swap and the result on Tom’s cable. Restarting the router would have fixed nothing and cut off the office.

Then the answer: The line out and the router work, so the fault is on Odette’s side of them. The favorite cause was the office connection, and one person next door cleared it. ipconfig then showed a 169.254 address: the link was up and DHCP was not reached. Two cheap swaps, the cable and the jack, split the computer from the wall, and nothing was restarted that other people use.

## Step 13: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Wen, Legal", Chat with the help desk.

> (Wen, Legal, at the left) My desktop says there is no network. It was fine yesterday. The cleaners were in last night.

A plain table, "C:\> ipconfig (the Ethernet adapter)":

> Setting  |  Value  (the column heads)
> Media State  |  Media disconnected  <- marked after the answer
> Connection-specific DNS Suffix  |  (empty)

Chain: the link, the address, the mask and gateway, the name lookup, the service.

Help on screen: the words that decide it are marked.

**Which link failed?**
(the options come in an order that depends on the seed of the question)
- The link: the cable, the jack or the adapter (right)
- The address that DHCP should have handed to the computer — if chosen: No address can be handed out until a link exists. The address step has not even been tried.
- The name lookup that turns names into numbers — if chosen: A name lookup needs an address and a way out first. It is link 4.
- The service, the website at the far end — if chosen: The service is the last link. The computer has no connection to reach anything.

After the answer: the deciding words are marked. Reason: Media disconnected means the computer sees no connection at the cable end, so the fault is link 1 and links 2 to 5 cannot work. The cheapest tests change nothing: push both ends of the cable in, look at the light by the switch port, then try a cable known to work.

#### Item 2

A chat, with its history: "Hal, Sales", Chat with the help desk.

> (Hal, Sales, at the left) Since I plugged my laptop in at the new desk, a yellow warning says limited connectivity and no page loads. The light by the cable is on.

A plain table, "C:\> ipconfig (the Ethernet adapter)":

> Setting  |  Value  (the column heads)
> Autoconfiguration IPv4 Address  |  169.254.31.77  <- marked after the answer
> Subnet Mask  |  255.255.0.0  <- marked after the answer
> Default Gateway  |  (empty)  <- marked after the answer

Help on screen: the words that decide it are marked.

**Which link failed?**
(the options come in an order that depends on the seed of the question)
- The address: DHCP was not reached (right)
- The link: the cable is faulty or loose at one end — if chosen: The light is on and Windows reports a working adapter. It could build its own address only because the adapter is up.
- The name lookup that turns names into numbers — if chosen: There is no gateway to send a lookup through. The address step failed before this link.
- The website, which is not answering today — if chosen: No website has been tried. The computer has no good address to try one with.

After the answer: the deciding words are marked. Reason: A 169.254 address, a mask of 255.255.0.0 and no gateway are what Windows builds for itself when no DHCP server answers. The link is up, so link 2 failed. The next cheap tests: ipconfig /renew to request one again, then another jack or a computer known to work on this one, to split the port from the DHCP service.

#### Item 3

A chat, with its history: "Rana, Accounting", Chat with the help desk.

> (Rana, Accounting, at the left) No website will open. The shared drive on the office server still works.

A plain table, "C:\> ipconfig":

> Setting  |  Value  (the column heads)
> IPv4 Address  |  192.168.1.42  <- marked after the answer
> Subnet Mask  |  255.255.255.0
> Default Gateway  |  192.168.1.1

A plain table, "C:\> ping 192.168.1.1":

> What the computer prints  (the column heads)
> Pinging 192.168.1.1 with 32 bytes of data:
> Reply from 192.168.1.1: bytes=32 time=1ms TTL=64  <- marked after the answer
> Reply from 192.168.1.1: bytes=32 time=1ms TTL=64
> Reply from 192.168.1.1: bytes=32 time=2ms TTL=64
> Reply from 192.168.1.1: bytes=32 time=1ms TTL=64
> Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)

A plain table, "C:\> ping 8.8.8.8":

> What the computer prints  (the column heads)
> Pinging 8.8.8.8 with 32 bytes of data:
> Request timed out.  <- marked after the answer
> Request timed out.
> Request timed out.
> Request timed out.
> Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)

Help on screen: the words that decide it are marked.

**Where does the chain break?**
(the options come in an order that depends on the seed of the question)
- Past the gateway: the router’s line out to the internet (right)
- The cable between the computer and the router, which is loose — if chosen: The gateway answered all four pings, so the cable and the link are working.
- The computer’s own address, which was never handed out — if chosen: ipconfig shows a good address, and the gateway’s replies needed one.
- The name lookup, which turns names into numbers — if chosen: The failed ping was to a number, which needs no lookup. The lookup was never used.

After the answer: the deciding words are marked. Reason: The gateway replied, so links 1 to 3 work on the computer’s side of the router. The ping to 8.8.8.8 needs no name lookup and still failed, so the break is past the router: its line out, the modem or the provider. The server still works because it is inside the office, and the shared drive never leaves it.

#### Item 4

A chat, with its history: "Joel, Shipping", Chat with the help desk.

> (Joel, Shipping, at the left) Every website says it cannot be reached. I have a network and everything.

A plain table, "C:\> ping 8.8.8.8":

> What the computer prints  (the column heads)
> Pinging 8.8.8.8 with 32 bytes of data:
> Reply from 8.8.8.8: bytes=32 time=14ms TTL=117  <- marked after the answer
> Reply from 8.8.8.8: bytes=32 time=13ms TTL=117
> Reply from 8.8.8.8: bytes=32 time=14ms TTL=117
> Reply from 8.8.8.8: bytes=32 time=15ms TTL=117
> Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)

A plain table, "C:\> ping www.example.com":

> What the computer prints  (the column heads)
> Ping request could not find host www.example.com. Please check the name and try again.  <- marked after the answer

Help on screen: the words that decide it are marked.

**Which link failed?**
(the options come in an order that depends on the seed of the question)
- The name lookup (DNS) (right)
- The gateway that leads out of the office — if chosen: The ping to 8.8.8.8 went out through the gateway and came back.
- The link, the cable or the Wi-Fi — if chosen: Four replies from outside the office mean the cable or Wi-Fi works.
- The website, which is down for everyone — if chosen: The message says the name was not found. No website was asked, so none can be called down.

After the answer: the deciding words are marked. Reason: A ping to a number works, so links 1 to 3 work and the way out is open. The same computer cannot turn a name into a number: link 4, DNS. The cheap tests next: nslookup shows which DNS server was asked and whether it answered, and ipconfig /all shows that server’s address.

Then a screen: you can stop here, your place is kept.

## Step 14: Questions

19 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Gina, Office manager", Chat with the help desk.

> (Gina, Office manager, at the left) Three new hires plugged in today and none of them can get on. Their laptops show 169.254 addresses. Everybody who was here yesterday is fine.

A plain table, "The DHCP server’s list":

> Detail  |  Value  (the column heads)
> Scope (addresses it may hand out)  |  192.168.1.100 to 192.168.1.119
> Addresses in the scope  |  20
> Addresses leased now  |  20
> Lease time  |  8 days

**Why did the new laptops get 169.254 addresses?**
(the options come in an order that depends on the seed of the question)
- The scope has no free address left, so the server had none to give (right)
- Three new network adapters all failed on the same morning — if chosen: Three at once, with everyone else fine, points at the one thing they share: the list of addresses, not three adapters.
- The router has run out of public addresses to share with new laptops — if chosen: Public addresses are the internet side. These laptops asked for private ones from the local scope.
- The three new laptops run a newer version of Windows than the old ones — if chosen: The Windows version does not decide whether the server has an address left to give. Everyone else is fine, and the list is full.

After the answer: the deciding words are marked. Reason: The scope is the range the server may hand out, and every address in it is leased. The fix is on the DHCP server: widen the scope, or shorten the lease so addresses of people who left come back sooner. Typing addresses into the laptops would hide the full scope and invite conflicts.

#### Item 6

A chat, with its history: "Ola, Network team", Chat with the help desk.

> (Ola, Network team, at the left) A vendor sent us a list of the addresses they plan to put on the new cameras. We use private addresses inside the building. Which of these are private?

**Pick every private address.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- 172.20.14.9 (right)
- 192.168.40.2 (right)
- 172.32.0.5 — if chosen: The private block runs from 172.16 to 172.31. 172.32 is just outside it, so it is public.
- 169.254.8.8 — if chosen: A 169.254 address is not private: Windows makes it up when DHCP does not answer.
- 8.8.4.4 — if chosen: It is outside all three private blocks, so it is public.

After the answer: Reason: The three private blocks are 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255 and 192.168.0.0 to 192.168.255.255. Anything else is public, apart from the self-made 169.254 range and 127.0.0.1, which is the computer itself.

#### Item 7

A chat, with its history: "Dee, HR", Chat with the help desk.

> (Dee, HR, at the left) Websites will not load on my computer. The person next to me is fine. I can ping 8.8.8.8 and it answers.

A plain table, "C:\> ipconfig /all on Dee’s computer":

> Setting  |  Value  (the column heads)
> DHCP Enabled  |  No
> IPv4 Address  |  192.168.1.64
> Default Gateway  |  192.168.1.1
> DNS Servers  |  192.168.1.5

A plain table, "C:\> ipconfig /all on the computer next to hers":

> Setting  |  Value  (the column heads)
> DHCP Enabled  |  Yes
> IPv4 Address  |  192.168.1.71
> Default Gateway  |  192.168.1.1
> DNS Servers  |  192.168.1.1

A plain table, "C:\> nslookup www.example.com":

> What the computer prints  (the column heads)
> DNS request timed out.
>     timeout was 2 seconds.
> Server:  UnKnown
> Address:  192.168.1.5
> DNS request timed out.
> *** Request to UnKnown timed-out

**What is the fault, and the cheapest fix?**
(the options come in an order that depends on the seed of the question)
- A DNS address typed in by hand no longer answers: switch to automatic (right)
- The gateway is wrong, so nothing she sends can leave the office at all — if chosen: The ping to 8.8.8.8 went out through the gateway and came back.
- The websites she wants are down, which is why the lookup timed out — if chosen: No website was reached. The lookup of the name timed out first, and her neighbor gets through.
- DHCP gave her a bad lease that has not yet expired — if chosen: DHCP Enabled says No. Her numbers were typed in by hand, so no lease was handed out.

After the answer: the deciding words are marked. Reason: Pings to a number work, so the link, address and gateway are fine. nslookup shows the DNS server it asked, 192.168.1.5, and that server does not answer. Her neighbor uses 192.168.1.1. A DNS address typed in long ago is the likely cause, and choosing “obtain DNS automatically” is one change that can be undone.

#### Item 8

A chat, with its history: "Ken, IT manager", Chat with the help desk.

> (Ken, IT manager, at the left) The whole office lost the internet at 10:05. Pings to 8.8.8.8 time out as well. I ran tracert to a website.

A plain table, "C:\> tracert www.example.com":

> What the computer prints  (the column heads)
> Tracing route to www.example.com [203.0.113.20] over a maximum of 30 hops:
> 1   <1 ms   <1 ms   <1 ms  192.168.1.1
> 2    9 ms    8 ms    9 ms  198.51.100.1
> 3     *        *        *     Request timed out.
> 4     *        *        *     Request timed out.
> 5     *        *        *     Request timed out.
> (the same for hops 6 to 30)
> Trace complete.

This desk’s rule: a fault past the office router is reported to the internet provider, with the tracert output.

**Where does the path break, and what do you do?**
(the options come in an order that depends on the seed of the question)
- After hop 2, at the provider: report it to them with this output (right)
- At hop 1: the office router has stopped answering the trace — if chosen: Hop 1 replied in under a millisecond. The stars start after it.
- Nowhere: stars only mean the site blocks tracert, so wait it out — if chosen: Stars in the middle with replies after them are a quiet router. Stars from hop 3 to the end, with ping failing too, are a broken path.
- At the destination: the website is down and not replying — if chosen: The trace stopped at hop 3 of up to 30. It never got near the website.

After the answer: the deciding words are marked. Reason: tracert lists every router on the way, three tries each. Hop 1 is the office router and hop 2 the provider’s. Stars from hop 3 to the end, when pings fail too, show where the path breaks. The desk’s rule sends it to the provider, with this output so they need not run it again.

#### Item 9

A chat, with its history: "Mae, Sales", Chat with the help desk.

> (Mae, Sales, at the left) Back in the office after a week at a hotel. Every website says it cannot be reached. A co-worker’s laptop on the same Wi-Fi opens sites fine. At the hotel I had to change a setting before the internet would work.

A plain table, "C:\> ping www.example.com":

> What the computer prints  (the column heads)
> Pinging www.example.com [203.0.113.20] with 32 bytes of data:
> Reply from 203.0.113.20: bytes=32 time=16ms TTL=56
> Reply from 203.0.113.20: bytes=32 time=15ms TTL=56
> Reply from 203.0.113.20: bytes=32 time=15ms TTL=56
> Reply from 203.0.113.20: bytes=32 time=16ms TTL=56
> Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)

**Where does this point, and what do you check?**
(the options come in an order that depends on the seed of the question)
- A proxy left on from the hotel: check Network and Internet, Proxy (right)
- DNS is down, so names cannot be turned into numbers — if chosen: The ping by name worked, so the name was turned into a number.
- The Wi-Fi link is weak, so pages time out before they finish loading — if chosen: Four replies came back and her co-worker is fine on the same Wi-Fi.
- Run ipconfig /renew on her laptop and try a site again — if chosen: The ping by name worked, so her address is fine. Asking for a new one cannot change a proxy setting.

After the answer: the deciding words are marked. Reason: The ping by name worked, so links 1 to 4 are fine, and a co-worker is fine on the same Wi-Fi. What is left is the service link on her own computer. A proxy is a server her web traffic goes through, and one that was typed in for the hotel does not exist here.

#### Item 10

Ula in Marketing calls the help desk. You answer.

**Ula calls about her internet. What do you say?**
- An incoming call from "Ula, Marketing" (Incoming call · 9:10 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "The internet is down. The woman next to me is fine, only mine. There is a yellow triangle on the little network picture by the clock. Please fix it." [pushes: She wants it fixed now. She has not said how her computer is connected.]
  - reply "So it is only your computer, and your neighbor is fine. Click the little network picture by the clock and read me the name next to it.": goes on to turn 2, where the pressure comes back
  - reply "Is anyone near you having the same trouble, or is it only your computer?": the call ends (not this one): She had just told you: her neighbor is fine, only hers. Asking again shows her you were not listening. Say it back, then give her one thing to look at. [slip: did not say the story back to check it]
  - reply "I will restart the router for you now.": the call ends (not this one): Her neighbor is fine through the same router, so it is cleared, and a restart drops everyone in the office. [slip: restarted or changed shared equipment that other people rely on]
  - reply "Open a command window and type ipconfig slash all, then read me the lines.": the call ends (not this one): She does not know what a command window is, and she is in a hurry. Give her something she can read off the screen. [slip: used words the user may not know]
  - reply "It is probably your Wi-Fi.": the call ends (not this one): Nothing said how she is connected. A cause told to her before it is known can send both of you the wrong way. [slip: told the user a cause before knowing it]
  - reply "I will arrange a new laptop for you.": the call ends (not this one): No test has been run, so a new laptop or a driver reinstall is a guess that costs time or money. [slip: replaced a part before the cheap check]
- turn 2, the other side says: "It says Ethernet. I have a call at ten. Can you just fix it from there?" [pushes: She wants it fixed from your side before her call.]
  - reply "Not yet; it is one look. Check that the cable is pushed in at both ends and whether a light is on beside it, then tell me. I will keep this ticket open.": the call ends (right): Her neighbor is fine, so the office connection and the router are cleared, and Ethernet means a cable, so link 1 is the cheapest next look. The yellow triangle only means Windows could not confirm internet; it does not say which link failed.
  - reply "Yes, let me restart the router, then.": the call ends (not this one): Her neighbor is fine through the same router, so it is cleared, and a restart drops everyone in the office. [slip: restarted or changed shared equipment that other people rely on]
  - reply "I will reinstall the network driver on your computer from here.": the call ends (not this one): No test has been run, so a new laptop or a driver reinstall is a guess that costs time or money. [slip: replaced a part before the cheap check]
  - reply "It will be working before your call, I promise.": the call ends (not this one): Nothing is known yet, so the result is not in your hands. Give her the next look instead. [slip: promised a result that was not in their hands]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: She gave the cut herself: only her computer is affected. Saying it back confirms it, and one thing she can read from the screen, how she is connected, picks the next cheap test. The yellow triangle means only that Windows could not confirm internet; the light, the name by the picture and ipconfig say which link.

#### Item 11

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **What are the first two numbers of the address Windows gives itself when no DHCP server answers?**

**Type the two numbers.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - 169.254
  - 169.254.x.x
  - 169.254.0.0

After the answer: Reason: Windows builds an address in the 169.254 range (APIPA, automatic private IP addressing), with mask 255.255.0.0 and no gateway, when it calls on DHCP and nothing answers. Seeing it means DHCP was not reached.

#### Item 12

A chat, with its history: "Kai, Design", Chat with the help desk.

> (Kai, Design, at the left) My laptop is slow on Wi-Fi at the far desk. A computer on a cable next to me is fast. We open the same sites.

**Which test cuts the causes in half?**
(the options come in an order that depends on the seed of the question)
- Plug the same laptop into a cable and run the same download (right)
- Ping the website from the cabled computer next to him and read the times — if chosen: That computer is already fast. Its times say nothing about what the radio link does for the laptop.
- Restart the office router and then the laptop together — if chosen: Two changes at once, and a restart that drops everyone, rule nothing out.
- Replace the laptop’s Wi-Fi card with a new one — if chosen: Nothing has shown the card at fault, and the cable test is free.

After the answer: the deciding words are marked. Reason: Slow only over Wi-Fi at one desk points at the radio link: signal, distance or interference. A cable test with the same laptop splits the Wi-Fi from the laptop and the internet, and changes nothing.

#### Item 13

A chat, with its history: "Lia, HR", Chat with the help desk.

> (Lia, HR, at the left) The office Wi-Fi password was changed on Monday. My laptop now says it cannot connect. My phone, which I joined with the new password, is fine.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Forget the network on the laptop and join again with the new password (right)
- Run ipconfig /renew, then try the old password again — if chosen: The laptop never got far enough to request an address, and the old password is still refused.
- Type in a static address on the laptop to skip the password step — if chosen: A fixed address does not remove the password. The Wi-Fi still has to let the laptop on.
- Replace the laptop’s Wi-Fi card, since the phone works — if chosen: The card finds the network. It is the saved password that fails.

After the answer: the deciding words are marked. Reason: A phone that joined with the new password works, so the network is fine. The laptop is being refused at the link: a wrong or changed password is the usual cause of an authentication failure.

#### Item 14

A chat, with its history: "Moe, Sales", Chat with the help desk.

> (Moe, Sales, at the left) ipconfig shows an address starting fe80:: under my adapter. Is that the 169.254 problem again?

**What do you tell him?**
(the options come in an order that depends on the seed of the question)
- No: fe80:: is the normal local IPv6 address; read the IPv4 lines (right)
- Yes: it also means DHCP was not reached, so check the link light — if chosen: A 169.254 address is the warning. fe80:: is made for the local network on purpose and always there.
- Yes: IPv6 has failed, so turn it off on the adapter — if chosen: Nothing has failed, and turning IPv6 off would not fix an IPv4 fault.
- No: it is a public IPv6 address that anyone online can reach — if chosen: fe80:: works only on the local network and is never reached from the internet.

After the answer: the deciding words are marked. Reason: IPv6 addresses are 128 bits in hexadecimal. The one starting fe80:: is link-local: it works only on the local network and is always present. The warning sign is an IPv4 address starting 169.254.

#### Item 15

A chat, with its history: "Ben, Front desk", Chat with the help desk.

> (Ben, Front desk, at the left) I cannot print. IT told me the printer is at 192.168.1.80. My computer is 192.168.1.42.

A plain table, "C:\> ping 192.168.1.80":

> What the computer prints  (the column heads)
> Pinging 192.168.1.80 with 32 bytes of data:
> Reply from 192.168.1.42: Destination host unreachable.
> Reply from 192.168.1.42: Destination host unreachable.
> Reply from 192.168.1.42: Destination host unreachable.
> Reply from 192.168.1.42: Destination host unreachable.
> Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)

**What does it show?**
(the options come in an order that depends on the seed of the question)
- Nothing on the local network answers at that address (right)
- The internet connection is down for the whole office — if chosen: The ping stayed inside the office network and never needed the internet.
- The printer replied, so the fault is in the print queue — if chosen: The reply line names 192.168.1.42, Ben’s own address, not the printer’s.
- The name lookup failed, so the printer name is wrong — if chosen: The ping was to a number, so no lookup was used.

After the answer: the deciding words are marked. Reason: Destination host unreachable, from your own address, means there is no way to reach that address on the local network. Check that the printer is on and what address it now has, before anything on the computer is changed.

#### Item 16

A chat, with its history: "Gus, Office manager", Chat with the help desk.

> (Gus, Office manager, at the left) Everyone in the building has the yellow warning this morning, and every laptop shows a 169.254 address. The router’s lights look odd after last night’s power cut.

A plain table, "Gus’s network notes":

> Detail  |  Value  (the column heads)
> Where addresses come from (DHCP)  |  The router
> Other DHCP servers  |  None

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Restart the router, which runs DHCP; everyone is already down (right)
- Type in a static address on each laptop so people can start work — if chosen: It hides a fault that sits in one box and creates dozens of hand-typed addresses to undo.
- Run ipconfig /flushdns on every laptop in turn — if chosen: Saved name answers have nothing to do with laptops that have no address.
- Replace the network adapter in the first laptop — if chosen: Every laptop has the same sign, so the shared box is the cause, not one adapter.

After the answer: the deciding words are marked. Reason: Everyone getting 169.254 at once means the DHCP service is not answering for the whole building, and here it is the router after a power cut. A restart is right this time because nobody is online to lose and the cause is that one box.

#### Item 17

The question, read aloud as above: **Which Windows command shows the mapped drives, or maps a new one to a drive letter?**

**Type the command.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - net use

After the answer: Reason: net use shows mapped drives, and net use Z: \\fileserver\Sales maps one. netstat lists open connections, and nslookup queries DNS.

#### Item 18

The question, read aloud as above: **Which kind of DNS record holds a name’s IPv6 address?**

**Type the record name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - AAAA
  - AAAA record

After the answer: Reason: An AAAA record holds an IPv6 address. An A record holds an IPv4 address.

#### Item 19

The question, read aloud as above: **Which spam-fighting TXT record lists the servers allowed to send email for a domain?**

**Type the three letters.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - SPF
  - Sender Policy Framework

After the answer: Reason: SPF lists the sending servers. DKIM carries what checks a message’s digital signature, and DMARC says what to do with mail that fails those checks.

#### Item 20

A chat, with its history: "Ben, Front desk", Chat with the help desk.

> (Ben, Front desk, at the left) We bought a new printer. I cannot print to it from my computer. Both of us are plugged into the same switch.

A plain table, "What the computer and the printer show":

> Detail  |  Computer  |  Printer  (the column heads)
> IPv4 address  |  192.168.1.42  |  192.168.2.80
> Subnet mask  |  255.255.255.0  |  255.255.255.0
> How it got its address  |  DHCP  |  Typed in by hand

A plain table, "The DHCP server’s list":

> Detail  |  Value  (the column heads)
> Scope  |  192.168.1.100 to 192.168.1.199
> Free outside the scope  |  192.168.1.80 (nothing uses it)

**What is the one change?**
(the options come in an order that depends on the seed of the question)
- Change the printer’s typed-in address to 192.168.1.80, which is on the computer’s network and outside the scope (right)
- Change the computer’s mask to 255.255.0.0 so that the printer counts as local — if chosen: That edits the computer to suit one typo, and every other device would still see the printer as another network.
- Run ipconfig /renew on the computer — if chosen: The computer’s address is fine. The printer’s is the one on the wrong network.
- Plug the printer into a different port on the switch — if chosen: It is on the same switch already, and the addresses show the problem. A different port keeps the same address.

After the answer: the deciding words are marked. Reason: The mask 255.255.255.0 says the first three numbers must match for two devices to share a network. The computer is 192.168.1 and the printer 192.168.2, so they are on different networks, and the printer has no way in. Giving the printer an address that starts 192.168.1 and sits outside the scope fixes the one thing that is wrong.

#### Item 21

A chat, with its history: "Tobias, Accounts", Chat with the help desk.

> (Tobias, Accounts, at the left) I can open the shared drive on this floor, but not the payroll server upstairs. My neighbor can open both. I typed my own address settings last week.

A plain table, "C:\> ipconfig on Tobias’s computer":

> Setting  |  Value  (the column heads)
> IPv4 Address  |  192.168.1.50
> Subnet Mask  |  255.255.0.0
> Default Gateway  |  192.168.1.1

A plain table, "C:\> ipconfig on the neighbor’s computer":

> Setting  |  Value  (the column heads)
> IPv4 Address  |  192.168.1.71
> Subnet Mask  |  255.255.255.0
> Default Gateway  |  192.168.1.1

The payroll server is at 192.168.2.10. The router connects the two floors.

**What explains it?**
(the options come in an order that depends on the seed of the question)
- The mask he typed is too wide, so his computer treats 192.168.2.10 as local and never sends it to the gateway (right)
- The gateway is typed wrong, because the shared drive on his floor opens — if chosen: His gateway, 192.168.1.1, is the same as his neighbor’s, and the neighbor reaches the server.
- His address is a duplicate of another computer’s — if chosen: A duplicate would break the drive on his floor too, and Windows would warn him.
- The payroll server is down for him but up for his neighbor — if chosen: A server is not down for one person. What differs is the mask in his settings.

After the answer: the deciding words are marked. Reason: The mask tells a computer which addresses are on its own network. His 255.255.0.0 is wider than the office’s 255.255.255.0, so the server upstairs looks local and he sends to it directly, where nothing answers. Anything outside the local network goes through the gateway. Setting the adapter back to automatic, or typing the same mask as his neighbor, is one change.

#### Item 22

A chat, with its history: "Gina, Office manager", Chat with the help desk.

> (Gina, Office manager, at the left) A customer says they got an email that looked like it was from our domain asking them to pay a new bank account. We never sent it. Our domain has an SPF record already.

**Which record tells other mail servers what to do with mail that fails the checks?**
(the options come in an order that depends on the seed of the question)
- A DMARC record, which says what to do with mail that fails (right)
- A DKIM record, which lists the servers allowed to send — if chosen: DKIM carries what lets receivers check a message’s digital signature. SPF is the one that lists the servers allowed to send.
- An MX record, which says where the domain’s email is delivered — if chosen: An MX record is for mail coming in to the domain. It says nothing about what to do with forged mail.
- A CNAME record, which makes one name an alias for another — if chosen: A CNAME points a name at another name. It has no part in email checks.

After the answer: the deciding words are marked. Reason: SPF lists who may send, DKIM adds a signature the receiver can check, and DMARC tells the receiver what to do when those checks fail. All three live in TXT records. The domain already has the first, so the missing piece is the instruction.

#### Item 23

A chat, with its history: "Sam, Field sales", Chat with the help desk.

> (Sam, Field sales, at the left) The hotel Wi-Fi is down tonight and I have a report due. My laptop has a SIM card in it from the company. In the network list I see only the hotel network.

**What do you tell him?**
(the options come in an order that depends on the seed of the question)
- Turn Cellular on in the network list or settings; it uses the SIM in the laptop (right)
- Connect the VPN first, because it gives the laptop its own internet — if chosen: A VPN is a tunnel that rides on an internet connection that already works. It cannot make one.
- Type in a static address from the hotel’s range — if chosen: The hotel network is the one that is down. An address from its range gets nowhere.
- Mark the hotel network Private so the laptop can see more networks — if chosen: The profile changes what the computer shows to others, not which networks it can reach.

After the answer: the deciding words are marked. Reason: Cellular is a third kind of connection beside wired and wireless: the laptop reaches the internet through its SIM. Once it is on, the same chain applies. Cellular data is often limited, so marking it metered tells Windows to hold back big downloads.

Then a screen: you can stop here, your place is kept.

## Step 15: Questions

8 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 24

A chat, with its history: "Abe, Remote", Chat with the help desk.

> (Abe, Remote, at the left) I am working from home today. My Z: drive in File Explorer has a red X and says it cannot connect. At the office it works.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- Whether the VPN is on, since the drive lives inside the office (right)
- Map the drive again with a different letter, in case Z: is stuck — if chosen: A new letter points at the same server, which still cannot be reached.
- Run ipconfig /renew on his laptop to get a fresh address — if chosen: His home address is working, since he is online. Asking for it again tells nothing about the path to the office server.
- Turn on the metered connection so the drive reconnects — if chosen: Metered only holds back big downloads. It does not open a path to the server.

After the answer: the deciding words are marked. Reason: A mapped drive is a drive letter for a network path such as \\fileserver\Sales. The server sits inside the office network, so away from it the drive works only through the VPN. The red X says the path cannot be reached, which sends you to the VPN before anything else.

#### Item 25

A chat, with its history: "Cal, Sales", Chat with the help desk.

> (Cal, Sales, at the left) I moved to the office’s new conference room Wi-Fi. Websites open fine, but I cannot see the shared printer or any of the other laptops. It worked at my old seat.

A plain table, "Windows network settings":

> Setting  |  Value  (the column heads)
> Network profile  |  Public

This desk’s rule: the office’s own Wi-Fi networks use the Private profile.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Change the profile to Private, as this desk’s rule says for the office’s own Wi-Fi (right)
- Turn off the firewall so that nothing blocks the printer — if chosen: That opens the computer to every network it joins, a café included. The profile is the setting that changes.
- Restart the office router and then the printer, one after the other — if chosen: Websites work and the profile explains the missing printer. A restart would drop everyone.
- Type in a static address from the conference room range — if chosen: His address is working, since websites open. A fixed one would not show the printer either.

After the answer: the deciding words are marked. Reason: Windows wants to know whether a new network is public or private. Public, for a café or hotel, hides the computer and turns network discovery (the computer showing itself to others) and sharing off, so the printer and other laptops vanish while websites still work. This desk’s rule makes its own Wi-Fi Private.

#### Item 26

A chat, with its history: "Quin, Office", Chat with the help desk.

> (Quin, Office, at the left) I plugged a new laptop into the jack by the conference phone. It got 10.50.8.12 and the file server will not open. My own laptop on a normal jack has 10.20.4.31 and works. The server fails by its address too, not only by name.

A plain table, "What the network team says":

> Fact  |  Value  (the column heads)
> File server  |  10.20.1.5
> Normal jacks  |  Addresses 10.20.x.x
> Phone jacks  |  Addresses 10.50.x.x

**What explains it?**
(the options come in an order that depends on the seed of the question)
- The phone jack is in another VLAN, a separate network (right)
- The laptop made up a 169.254 address when DHCP was not reached — if chosen: Its address starts 10.50. A DHCP server handed it out.
- The file server needs a fixed address, not a handed-out one — if chosen: The server works for the laptop on the normal jack, so its address is not the problem.
- The laptop’s DNS server is down, so the server name fails — if chosen: It fails by address too, since the server is on another network, so a lookup is not the missing link.

After the answer: the deciding words are marked. Reason: Computers on different VLANs cannot reach each other unless a router passes traffic between them, and each VLAN has its own addresses. The phone jack hands out 10.50.x.x, and the server is on 10.20.x.x. The fix is a data jack, or the network team moving that port.

#### Item 27

A chat, with its history: "Rae, Warehouse", Chat with the help desk.

> (Rae, Warehouse, at the left) The Wi-Fi drops about every ten minutes at the back dock, then comes back. The laptops on cables in the office never drop.

**Which test cuts the causes in half?**
(the options come in an order that depends on the seed of the question)
- Stand beside the access point with the same laptop and watch it (right)
- Replace the laptop’s Wi-Fi card with one from stock — if chosen: Nothing has shown the card at fault, and the cabled laptops say nothing about it either way.
- Ping the access point from a cabled computer in the office and compare — if chosen: A cabled computer never uses the radio link, so a good result there says nothing about the dock.
- Restart the office router to refresh the wireless network — if chosen: It drops everyone and rules nothing out, since the drops would come back.

After the answer: the deciding words are marked. Reason: Intermittent wireless that drops in one place and never on a cable points at the radio side: signal strength, distance or interference at the dock. Moving the same laptop next to the access point is a free test that splits the place from the laptop.

#### Item 28

A chat, with its history: "Eli, Front desk", Chat with the help desk.

> (Eli, Front desk, at the left) The front desk printer keeps dropping off. A few times a day Windows on some computer says there is an IP address conflict. Last month we typed 192.168.1.130 into the printer by hand.

A plain table, "The DHCP server’s list":

> Detail  |  Value  (the column heads)
> Scope  |  192.168.1.100 to 192.168.1.199
> Exclusions  |  None

**What fixes it for good?**
(the options come in an order that depends on the seed of the question)
- Exclude 192.168.1.130 from the scope so it is never handed out (right)
- Shorten the lease time to one hour so that addresses are handed back sooner — if chosen: The server would still hand out .130 to any laptop in turn.
- Restart the printer every morning before the office opens — if chosen: It clears the conflict for a while. It returns the next time .130 is given out.
- Type an address into every laptop too, outside the scope — if chosen: More hand-typed addresses mean more chances for two devices to share one.

After the answer: the deciding words are marked. Reason: An address conflict is two devices holding one address. The printer’s hand-typed address sits inside the range the server hands out, so the cure is an exclusion: an address in the scope the server must never give away.

#### Item 29

A chat, with its history: "Nia, Warehouse", Chat with the help desk.

> (Nia, Warehouse, at the left) I installed the scanner program IT gave me. Other computers cannot reach it. A Windows box came up when I started it and I clicked Cancel. Websites and email are fine.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Add the scanner program as an exception in the Windows firewall, for the network profile in use (right)
- Turn the Windows firewall off while the scanner is in use — if chosen: That opens every program on the computer. One exception for one program is enough.
- Run ipconfig /release and /renew on her computer — if chosen: Her address works, since websites and email do. The block is on the program.
- Type in a static address for her computer so the scanner keeps one address — if chosen: Her address already works, since websites and email do. The block is on the program, not on the address.

After the answer: the deciding words are marked. Reason: The Windows firewall blocks incoming connections to a program unless an exception lets them through, and its rules are kept for each network profile. Websites and email work, so the chain is fine. Allowing the one program is the narrowest change.

#### Item 30

A chat, with its history: "Wen, Legal", Chat with the help desk.

> (Wen, Legal, at the left) My desktop still says there is no network. Yesterday you swapped the cable and moved me to another jack. A laptop works on the same cable and the same jack.

A plain table, "C:\> ipconfig (the Ethernet adapter)":

> Setting  |  Value  (the column heads)
> Media State  |  Media disconnected
> Adapter in Device Manager  |  Enabled, no errors

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Replace the desktop’s network adapter: the cable and the jack are cleared (right)
- Restart the office router in case it stopped handing out addresses — if chosen: The adapter does not see a link at all, which comes before any address. A restart would also drop everyone.
- Run ipconfig /renew, then check again — if chosen: The adapter has no link, so there is nothing to renew.
- Type in a static address on the desktop — if chosen: An address cannot be used until the adapter has a link.

After the answer: the deciding words are marked. Reason: A cable and a jack that work for a laptop clear the cable, the jack and the switch port. Media disconnected still says the desktop sees no link, so the part left is its adapter. After the cheap tests have pointed there, replacing it is the right step.

#### Item 31

A chat, with its history: "Isa, Remote", Chat with the help desk.

> (Isa, Remote, at the left) From home the intranet site (the company’s own internal website) and the shared drives will not open, but ordinary websites do. What should I do?

**What do you tell her?**
(the options come in an order that depends on the seed of the question)
- Connect the VPN, which reaches the internal sites (right)
- Type in a static address from the office range to reach them — if chosen: An address from the office range does nothing at her home, where the router hands out the addresses.
- Switch the home network to Public to hide her computer — if chosen: It would hide her computer and reach nothing at the office.
- Flush the DNS cache and try the sites again — if chosen: Websites open, so names work. The internal sites sit behind the tunnel.

After the answer: the deciding words are marked. Reason: Internal sites and drives sit inside the company network. Ordinary sites work from home, so the connection is fine, and the VPN is what reaches the rest.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right

#### Check question 32

A chat, with its history: "Sol, Planning", Chat with the help desk.

> (Sol, Planning, at the left) Nothing opens, not the websites and not the shared drive.

A plain table, "C:\> ipconfig":

> Setting  |  Value  (the column heads)
> IPv4 Address  |  192.168.1.77
> Subnet Mask  |  255.255.255.0
> Default Gateway  |  192.168.1.1

A plain table, "C:\> ping 192.168.1.1":

> What the computer prints  (the column heads)
> Pinging 192.168.1.1 with 32 bytes of data:
> Request timed out.
> Request timed out.
> Request timed out.
> Request timed out.
> Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)

**What does this show?**
(the options come in an order that depends on the seed of the question)
- No further than the router: the computer’s connection to it, or the router (right)
- The name lookup has failed, since no name could be turned into a number at all — if chosen: The ping was to a number, so no lookup was used.
- The internet provider has a problem somewhere past the office — if chosen: The ping never got past the office router, so the provider was not involved yet.
- The router is broken, because it did not answer any of the four pings — if chosen: Four timeouts from the gateway do not prove the router is broken: it may ignore pings, or the cable, the port or this computer may be at fault. Test another computer and a cable known to work.

After the answer: the deciding words are marked. Reason: The address looks good, so the fault is not link 2. The gateway is the first stop beyond the computer. Silence from it means the break is on this side of the router or at the router, and another computer pinging the same gateway, or a cable known to work, splits the two.

#### Check question 33

A chat, with its history: "Tess, Design", Chat with the help desk.

> (Tess, Design, at the left) My laptop joined the office Wi-Fi but says limited and nothing loads. My phone on the same Wi-Fi is fine.

A plain table, "C:\> ipconfig (the Wi-Fi adapter)":

> Setting  |  Value  (the column heads)
> Autoconfiguration IPv4 Address  |  169.254.77.5
> Subnet Mask  |  255.255.0.0
> Default Gateway  |  (empty)

**Which test comes next?**
(the options come in an order that depends on the seed of the question)
- Run ipconfig /renew, so the laptop requests an address again (right)
- Type in a static address on the laptop so that it connects — if chosen: It hides the fault, and an address chosen by hand can collide with one the server hands out.
- Restart the office router so that it hands out addresses again — if chosen: The phone is fine through it. A restart drops everyone for a problem that is on one laptop.
- Run ipconfig /flushdns to clear the saved name answers — if chosen: That empties saved name answers. The laptop has no address yet, so names are not the problem.

After the answer: the deciding words are marked. Reason: The 169.254 address says the laptop got no answer from DHCP, and the phone shows the server works. Requesting again with ipconfig /renew is the cheapest cut: if it gets a good address, the first request was lost, and if not, look at the laptop’s Wi-Fi connection.

#### Check question 34

A chat, with its history: "Uri, Accounts", Chat with the help desk.

> (Uri, Accounts, at the left) The company portal will not open. I type www.exmaple.com and it says the site cannot be reached.

A plain table, "C:\> nslookup www.exmaple.com":

> What the computer prints  (the column heads)
> Server:  router.lan
> Address:  192.168.1.1
> *** router.lan can’t find www.exmaple.com: Non-existent domain

**What does the output show?**
(the options come in an order that depends on the seed of the question)
- DNS works and answered: no such name exists, so check the spelling (right)
- The DNS server is down, so nothing could be looked up — if chosen: A down server gives no reply at all, and a timeout message instead of an answer.
- Uri’s computer has no address, so it cannot look anything up — if chosen: It reached the DNS server at 192.168.1.1, which needs a working address.
- The portal’s website is down, so the page will not open for anybody at all — if chosen: The name does not exist in DNS, so no website was asked. The name has a spelling slip in it.

After the answer: the deciding words are marked. Reason: nslookup shows who answered and what it said. A named server with “Non-existent domain” means the lookup worked and the name is wrong: exmaple, not example. A broken lookup would show a timeout instead.

#### Check question 35

A chat, with its history: "Vik, Sales", Chat with the help desk.

> (Vik, Sales, at the left) Video calls to our customer in Denver keep breaking up, but other sites are fine.

A plain table, "C:\> pathping www.example.com (the statistics, shortened)":

> Hop  |  RTT  |  Source to Here: lost/sent  |  This Node/Link: lost/sent  |  Address  (the column heads)
> 0  |  -  |  -  |  -  |  DESK-0417 [192.168.1.42]
> 1  |  1ms  |  0/100 = 0%  |  0/100 = 0%  |  192.168.1.1
> 2  |  9ms  |  0/100 = 0%  |  0/100 = 0%  |  198.51.100.1
> 3  |  14ms  |  31/100 = 31%  |  31/100 = 31%  |  198.51.100.9
> 4  |  16ms  |  33/100 = 33%  |  2/100 = 2%  |  203.0.113.20

This desk’s rule: a fault past the office router is reported to the internet provider, with the output.

**Where does the loss start, and what does it show?**
(the options come in an order that depends on the seed of the question)
- At hop 3 and on to the end: at or just past that router, so tell the provider (right)
- At hop 0, the user’s own computer, where the lost packets start — if chosen: Hop 0 is the user’s own computer and shows no loss. The first loss is at hop 3.
- Only at the last hop: the customer’s server is the one losing them — if chosen: The loss starts at hop 3 and carries on. It is not only at the end.
- Nowhere: pathping always shows some loss on every hop, so there is nothing to report — if chosen: The first three hops show none. A hop that loses packets and the hops after it that lose them too are a real fault.

After the answer: the deciding words are marked. Reason: pathping lists the hops like tracert, then counts lost packets at each. Loss that begins at one hop and continues on every hop after it marks a real fault at or past that router, and the output goes to the provider as it is. Loss at one hop alone, with clean hops after it, is a router that answers slowly, not a fault.

#### Check question 36

A chat, with its history: "Wes, New starter", Chat with the help desk.

> (Wes, New starter, at the left) My manager says to join my new laptop to the company domain, but the option to join one is not in Settings. The laptop is Windows 11 Home.

**Why is the option missing?**
(the options come in an order that depends on the seed of the question)
- Windows Home cannot join a domain; Pro or Enterprise can (right)
- The laptop is in a workgroup, which blocks domains — if chosen: A workgroup is the default for a computer that has joined no domain. It does not block joining one.
- The network is marked Public, which hides the laptop from the domain — if chosen: Public or private changes what the computer shows to others. It does not remove the domain option.
- The saved DNS answers are out of date — if chosen: Emptying them with ipconfig /flushdns cannot add an option the edition lacks.

After the answer: the deciding words are marked. Reason: A domain is a company group of computers run from a central server, with one sign-in that works on any joined computer. Windows Home has no domain join. The change is an upgrade to Pro, which also fits the company’s need for central rules.

#### Check question 37

A chat, with its history: "Zoe, Frontdesk", Chat with the help desk.

> (Zoe, Frontdesk, at the left) The shared drive opens, but no website does. I typed in my own address settings last week to fix a printer.

A plain table, "C:\> ipconfig /all on Zoe’s computer":

> Setting  |  Value  (the column heads)
> DHCP Enabled  |  No
> IPv4 Address  |  192.168.1.50
> Subnet Mask  |  255.255.255.0
> Default Gateway  |  192.168.1.254

A plain table, "C:\> ipconfig /all on the computer next to hers":

> Setting  |  Value  (the column heads)
> DHCP Enabled  |  Yes
> IPv4 Address  |  192.168.1.71
> Subnet Mask  |  255.255.255.0
> Default Gateway  |  192.168.1.1

A plain table, "C:\> ping 192.168.1.254":

> What the computer prints  (the column heads)
> Pinging 192.168.1.254 with 32 bytes of data:
> Reply from 192.168.1.50: Destination host unreachable.
> Reply from 192.168.1.50: Destination host unreachable.
> Reply from 192.168.1.50: Destination host unreachable.
> Reply from 192.168.1.50: Destination host unreachable.
> Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)

**What is the fault?**
(the options come in an order that depends on the seed of the question)
- The gateway typed in by hand is not the router’s address (right)
- DHCP gave her a bad lease that has not yet run out — if chosen: DHCP Enabled says No, so the numbers were typed in.
- The subnet mask is wrong and does not match the network — if chosen: Her mask matches her neighbor’s, 255.255.255.0.
- The cable is faulty, so part of the traffic is lost on the way — if chosen: The shared drive opens and the message came from her own address, so the link works.

After the answer: the deciding words are marked. Reason: Computers on the same local network reach each other directly, so the shared drive works. Anything outside needs the gateway, and the one she typed in matches no device. A static address means every number is typed by hand and must match the router. Setting the adapter back to automatic is one change.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
