// IT Help Desk, lesson 12 "Cables, connectors and screens" (part cables): the worked ticket, the four groups of questions and the reserve for the review.
// Facts: A+ map (docs/research/it-support-aplus.md) Core 1 3.1 (display kinds, touch and digitizer, inverter, resolution, refresh rate, pixel density, color gamut),
// 3.2 (network, peripheral, video and drive cables, adapters, connectors) and 5.3 (video, projector and display symptoms). Speeds and lengths are the published
// ones for each cable; sources checked 2026-10-23: Cat 6 10 Gbps up to about 55 m and Cat 6a to 100 m (Wikipedia, Category 6 cable; ICC on TIA TSB-155-A); multimode fiber a few hundred meters (Promax, network distance limits); lamp rated hours are given in each ticket (Cat 5 100 Mbps; Cat 5e 1 Gbps; Cat 6 1 Gbps to 100 m, 10 Gbps to about 55 m; Cat 6a 10 Gbps to 100 m; USB 2.0 480 Mbps; USB 3.0 5 Gbps;
// Thunderbolt 3 and 4 40 Gbps over the USB-C connector; DVI-D digital only, DVI-I both, DVI-A analog only). The chain (rulings-l9-13.md, 5) is the signal path: the computer's port,
// the cable and adapter, the screen's input, the panel. The way of choosing is the technician's: what must pass through, how far and how fast, what plug is on each end,
// and a display symptom is cut with the cheapest check first (IT4, IT8), one change at a time. Invented people and offices. Every wrong choice carries its slip and a line saying what it leaves undone.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const note = text => ({ kind: 'prose', text });
  const L = (id, text) => ({ id, text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  // a name from memory: the question is read in a spoken block, and the accepted answers are the words the lesson teaches
  const say = (id, strand, words, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'a', kind: 'text', prompt: 'Type the name.', accept }], reason });
  const PLUGS = 'plugs-in', SLOW = 'too-slow', LOOK = 'mixed-look-alike', JACKET = 'wrong-jacket', WDISP = 'wrong-display', CAUSE = 'wrong-cause', PART = 'part-first';
  const NOSPLIT = 'no-split', TWO = 'two-changes', RULED = 'kept-ruled-out';
  const NC = 'net-cables', FI = 'fiber', PE = 'peripheral', CO = 'connectors', DI = 'display';

  FC.items('it-support', [
    // ----- the worked ticket: the cheapest cut first, a favorite cause ruled out by a swap, then the next link -----
    item({
      id: 'l12-w-room', strand: 'display-fix',
      blocks: [
        msg('chat', 'Dina, Training', 'Chat with the help desk', [['d1', 'The projector in room 4 says No signal. I plugged my laptop in with the HDMI cable on the table and nothing shows. I start in ten minutes.']]),
        table('What is in room 4', ['Part', 'What it has'], [
          ['t1', 'Projector inputs', 'HDMI 1, HDMI 2, VGA'],
          ['t2', 'Cable on the table', 'An HDMI cable, plugged into HDMI 2'],
          ['t3', 'Dina’s laptop', 'Two USB-C ports and no HDMI port. The left port is marked with a small screen symbol; the right port has no mark. An adapter from USB-C to HDMI is in the right port.']])],
      asks: [ask('You press Source and the projector is already on HDMI 2. You swap in an HDMI cable you know works. It still says No signal. What does that show?', [
        ['The cable is not the cause of the No signal.', true, 'A cable known to work gave the same result, so the first cable was not the fault (with one fault behind the symptom).'],
        ['The input source is the cause.', RULED, 'Source showed HDMI 2, the input the cable is in, so the input was already cleared.'],
        ['The projector is the broken part.', CAUSE, 'Nothing has been tested on the projector itself. A second cable that gives the same result only clears the cable.'],
        ['The laptop is the broken part.', CAUSE, 'Nothing has been tested on the laptop yet. The swap cleared the cable and nothing else.']])],
      steps: [
        { id: 'causes', does: 'Write down every cause along the signal path that fits “No signal”.', working: 'The projector listens to a different input than the one the cable is in; the cable; the adapter, or a laptop port that does not carry video; the laptop is not sending a picture.' },
        { id: 'job', does: 'Check that the parts can do the job at all.', working: 'The adapter turns USB-C into HDMI, and an HDMI cable carries picture and sound. The projector has an HDMI input. The parts match. One thing is unknown: whether the right-hand USB-C port carries video, because only the left one is marked.' },
        { id: 'cheap', does: 'Run the cheapest cut first.', working: 'Press Source on the remote: one button. It shows HDMI 2, the input the cable is in. The input is ruled out.' },
        { id: 'favorite', does: 'Name your favorite cause and test it with a part known to work.', working: 'The cable: the last one in this room was bad. Swap in a cable known to work. It costs a minute.', ask: 'a' },
        { id: 'port', does: 'Test the next link, one change.', working: 'Move the adapter to the left USB-C port, the one with the screen symbol. The picture appears. The right port was for charging and data only.' },
        { id: 'done', does: 'Look at the result.', working: 'The first guess was ruled out at the cost of a minute. The cheapest check came first and ruled out the input; the fault was the port, found by moving one thing.' }],
      deciding: ['d1', 't1', 't2', 't3'],
      reason: 'The projector has an HDMI input and the cable plugs into it, so the setup can work. Source showed the right input, and a cable known to work gave the same No signal, so the input and the cable were cleared. The last thing left was the adapter’s USB-C port, and only one of the two carries video.' }),

    // ----- group 1: with the deciding words marked; the job first, then the cable -----
    item({
      id: 'l12-p-run', strand: NC,
      blocks: [msg('chat', 'Orla, Facilities', 'Chat with the help desk', [['r1', 'The new desk is 85 meters of cable run from the switch (the box that joins the office’s wired network cables) in the wiring closet. The company wants 10 Gbps on it, that is ten billion bits a second. Which cable do I pull?']])],
      asks: [ask('Which cable fits?', [
        ['Cat 6a', true, 'Cat 6a carries 10 Gbps for the full 100 meters a network cable may run.'],
        ['Cat 6', SLOW, 'Cat 6 carries 10 Gbps only up to about 55 meters. At 85 meters it falls back to 1 Gbps.'],
        ['Cat 5e', SLOW, 'Cat 5e tops out at 1 Gbps.'],
        ['Cat 5', SLOW, 'Cat 5 tops out at 100 Mbps, a hundred million bits a second.']])],
      deciding: ['r1'],
      reason: 'The job is 10 Gbps over 85 meters. Only Cat 6a keeps 10 Gbps out to the full 100 meters. Cat 6 does it for about 55 meters, Cat 5e stops at 1 Gbps and Cat 5 at 100 Mbps.' }),
    item({
      id: 'l12-p-modem', strand: NC,
      blocks: [msg('chat', 'Lucy, Front desk', 'Chat with the help desk', [['l1', 'The cable company ran a new line to a jack in the wall. I have the cable modem (the box that joins us to the internet company’s line) on my desk. What goes between the wall jack and the modem?']])],
      asks: [ask('Which cable goes from the wall jack to the cable modem?', [
        ['A coax cable with F-type plugs on both ends', true, 'Cable TV and cable internet arrive over coax, and the F-type plug screws on at each end.'],
        ['A phone cable with RJ11 plugs on both ends', LOOK, 'A phone cable is for a phone line and for a DSL modem. A cable modem is not on the phone line.'],
        ['A Cat 6 cable with RJ45 plugs', PLUGS, 'A network cable fits the modem’s network port, which leads on to the router (the box that shares the connection). It does not go to the wall jack.'],
        ['A DVI cable with a DVI-I plug', PLUGS, 'DVI carries a picture to a screen. It carries no internet.']])],
      deciding: ['l1'],
      reason: 'A cable modem takes its signal from coax, the cable the cable company runs, and coax ends in an F-type plug. The network cable on the modem goes the other way, to the router.' }),
    item({
      id: 'l12-p-plenum', strand: NC,
      blocks: [msg('chat', 'Selma, Facilities', 'Chat with the help desk', [['j1', 'I am running new network cable above the ceiling tiles, in the open space the building’s heating and cooling air moves through. What do I buy?']])],
      asks: [ask('Which cable goes there?', [
        ['A plenum-rated cable with a fire-safe jacket', true, 'Its jacket burns slowly and gives off little poisonous smoke, which fire rules require where air carries smoke through a building.'],
        ['An ordinary cable with a plastic jacket', JACKET, 'In a fire its jacket gives off thick poisonous smoke, and the moving air would carry it through the building.'],
        ['A direct-burial cable', JACKET, 'That jacket is made to stand water and soil underground. It is not the fire-rated one the air space needs.']])],
      deciding: ['j1'],
      reason: 'Where the building’s air moves above the ceiling, the jacket matters in a fire. Plenum-rated cable burns slowly and gives off little poisonous smoke. Direct-burial is for the ground.' }),
    item({
      id: 'l12-p-rj45', strand: CO,
      blocks: [msg('chat', 'Kay, Accounting', 'Chat with the help desk', [['k1', 'I am making a cable from my PC to the network jack in the wall. The cable is Cat 6. Which plug goes on each end?']])],
      asks: [ask('Which plug?', [
        ['RJ45', true, 'RJ45 is the 8-contact plug of network cable.'],
        ['RJ11', LOOK, 'RJ11 looks like a smaller RJ45. It is the telephone plug, with fewer contacts. It can be pushed into a network jack, but it is not the right plug.'],
        ['F-type', PLUGS, 'F-type is the screw-on plug of coax cable.'],
        ['LC', PLUGS, 'LC is a small plug for fiber, not for copper network cable.']])],
      deciding: ['k1'],
      reason: 'Ethernet cable, Cat 5e, Cat 6 or Cat 6a, ends in an RJ45 plug with 8 contacts. RJ11 is the narrower telephone plug.' }),

    // ----- group 2: no help -----
    item({
      id: 'l12-s-fiber', strand: FI,
      blocks: [msg('chat', 'Unity, Operations', 'Chat with the help desk', [['h1', 'We need a link between the main office and the warehouse. They are 2 kilometers apart. What cable?']])],
      asks: [ask('Which cable?', [
        ['Single-mode fiber', true, 'Single-mode fiber has a very thin core and laser light, and it runs many kilometers.'],
        ['Multimode fiber, the kind used for shorter runs', SLOW, 'Multimode fiber has a wider core and is made for runs of a few hundred meters at most, such as inside a building.'],
        ['Cat 6a', SLOW, 'Copper network cable is good for 100 meters.'],
        ['Coaxial cable', SLOW, 'Coax is for cable TV and cable internet to a building, not a 2 kilometer link between two of them.']])],
      deciding: ['h1'],
      reason: 'At 2 kilometers, copper is out (100 meters at most) and multimode fiber is too short. Single-mode fiber, a thin core with laser light, is the one made for kilometers.' }),
    item({
      id: 'l12-s-short', strand: NC,
      blocks: [msg('chat', 'Viggo, IT team', 'Chat with the help desk', [['b1', 'I need a cable for a 10 Gbps link between two servers in the same rack. The run is 30 meters. The budget is tight. Cat 6 costs less than Cat 6a. Is Cat 6 enough?']])],
      asks: [ask('What do you say?', [
        ['Yes, Cat 6 is enough for a 30 meter run, and it costs less.', true, 'Cat 6 holds 10 Gbps up to about 55 meters, so it is enough here and costs less.'],
        ['No, only Cat 6a carries 10 Gbps on any run.', SLOW, 'Cat 6a is needed past about 55 meters. This run is 30.'],
        ['No, Cat 6 tops out at 1 Gbps on every run.', SLOW, 'Cat 6 does 1 Gbps to 100 meters and 10 Gbps up to about 55 meters.'],
        ['Yes, and Cat 5e does that for even less.', SLOW, 'Cat 5e tops out at 1 Gbps.']])],
      deciding: ['b1'],
      reason: 'The job is 10 Gbps over 30 meters. Cat 6 does that out to about 55 meters, so the cheaper cable fits; the pricier Cat 6a is for longer runs.' }),
    item({
      id: 'l12-s-dvi', strand: PE,
      blocks: [msg('chat', 'Winnie, Conference room', 'Chat with the help desk', [['u1', 'The old monitor has a DVI-D port. The computer has a DVI-I port. I have a DVI-D cable. Will it carry a picture from the computer to the monitor?']])],
      asks: [ask('Will it work?', [
        ['Yes, DVI-I includes the digital picture.', true, 'The DVI-D cable fits into the DVI-I port and carries the digital picture.'],
        ['No, DVI-I carries only an analog picture, like VGA.', LOOK, 'DVI-I carries both. Only DVI-A is analog alone.'],
        ['No, the plugs differ, so it needs a converter to analog.', PLUGS, 'The plug fits, and no conversion is needed: both ends speak digital.'],
        ['Yes, and it will carry sound too.', LOOK, 'DVI normally carries no sound.']])],
      deciding: ['u1'],
      reason: 'DVI-D carries digital only, DVI-I carries digital and analog, DVI-A analog only. A digital DVI-D cable between a DVI-I port and a DVI-D port carries the digital picture. DVI normally carries no sound.' }),
    say('l12-s-st', CO, 'A fiber plug on the switch is round. You push it in and twist a quarter turn to lock it. Name it.', ['ST', 'ST plug', 'ST connector', 'straight tip', 'straight tip plug', 'straight tip connector'],
      'ST, for straight tip, is round and locks with a twist. SC is square and pushes in, and LC is a small square plug with a latch.'),
    item({
      id: 'l12-s-photo', strand: DI,
      blocks: [msg('chat', 'Mira, Marketing', 'Chat with the help desk', [['m1', 'I edit photos all day, and clients sit beside me at an angle and look at the screen from the side. I need a monitor whose colors stay true for them. Which kind of screen panel?']])],
      asks: [ask('Which panel?', [
        ['An IPS panel, which keeps its colors from the side', true, 'An IPS panel keeps its colors from wide angles and shows color well.'],
        ['TN, the fast and cheap one', WDISP, 'A TN panel is the fastest and cheapest, but its colors fade when seen from the side.'],
        ['VA, the one with the deepest blacks', WDISP, 'A VA panel has the deepest blacks of the three, but its colors shift from the side more than IPS.']])],
      deciding: ['m1'],
      reason: 'The need is true color from the side. IPS is the LCD panel made for that. TN is the fastest and cheapest, VA has the deepest blacks.' }),
    item({
      id: 'l12-s-sata', strand: PE,
      blocks: [msg('chat', 'Zelda, Warehouse', 'Chat with the help desk', [['n1', 'I put a new hard drive inside my desktop. What cable carries the drive’s data to the motherboard?']])],
      asks: [ask('Which cable?', [
        ['A SATA cable, the kind that stays inside the computer', true, 'SATA connects drives inside the computer. The drive’s power comes over a separate cable.'],
        ['An eSATA cable, the one for outside the computer', LOOK, 'eSATA is the same connection taken outside the computer, for an external drive.'],
        ['A Molex cable', PLUGS, 'A Molex is a power plug. It carries no data.']])],
      deciding: ['n1'],
      reason: 'The job is data to a drive inside the computer: SATA. eSATA is for drives outside the computer, and Molex only brings power.' }),

    // ----- group 3: display tickets along the signal path, cut with the cheapest check -----
    item({
      id: 'l12-d-call', strand: 'display-fix',
      blocks: [note('Hank in Sales calls the help desk about the projector in room 6. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Hank calls about the projector. What do you say?', form: 'call', from: 'Hank, Sales', detail: 'Incoming call · 9:40 AM', start: 'one',
        turns: {
          one: { lines: [L('h1', 'The projector in room 6 says No signal. Just order a new one, it is broken. I have a client in twenty minutes.')], push: 'They want the biggest step before anything was tried.',
            options: [
              { id: 'order', text: 'I will put in an order for a new projector today.', end: 'order' },
              { id: 'swap', text: 'Swap the cable, then call me back.', end: 'swap' },
              { id: 'source', text: 'Press the Source button on the projector’s remote and read me the input it shows.', goto: 'two' }] },
          two: { lines: [L('h2', 'It shows VGA. The cable is in HDMI 1. But it is the second time this week the projector has had a problem, and I am sure it is broken.')], push: 'They still want it replaced.',
            options: [
              { id: 'argue', text: 'It cannot be broken if the input menu comes up.', end: 'argue' },
              { id: 'hold', text: 'Twice in a week is annoying, and I will note it. The projector is listening to VGA while the cable is in HDMI 1. Choose HDMI 1 and tell me what you see.', end: 'hold' },
              { id: 'order2', text: 'Understood, I will order one now.', end: 'order2' }] }
        },
        ends: {
          hold: { ok: true, then: 'The projector listens to one input and it was on the wrong one; choosing the right one costs a button. Their worry is heard and noted, and the plan stays with the cheap check.' },
          order: { ok: false, slip: PART, then: 'Nothing has been checked yet. An order costs money and days, and the first check costs one button.' },
          swap: { ok: false, slip: NOSPLIT, then: 'A cable swap is cheap but is not the cheapest cut, and it leaves Hank alone with a guess. The Source button is faster and names the link.' },
          argue: { ok: false, slip: 'argued', then: 'The menu does not prove the projector is fine, and arguing leaves Hank no closer to a picture. Give them a next step instead.' },
          order2: { ok: false, slip: PART, then: 'The projector was on the wrong input. Ordering a new one hides a one-button fix and lets the same mistake happen again.' } } }],
      reason: 'No signal sits on the input first. The cheapest cut is to read which input the projector listens to, and when the user pushes for a replacement, you keep to the check, say you heard the complaint, and give the next step.' }),
    item({
      id: 'l12-d-dark', strand: 'display-fix',
      blocks: [msg('chat', 'Aiden, Sales', 'Chat with the help desk', [['i1', 'My laptop screen is black, but if I hold a flashlight close to it I can just see my desktop.']])],
      asks: [ask('What is the likely cause?', [
        ['The backlight or its inverter, the light behind the picture, has failed', true, 'The picture is there and nothing lights it, so the light behind the panel is the fault.'],
        ['Dead pixels, a patch of dots that no longer light', CAUSE, 'Dead pixels are tiny dots. The whole screen is dark here.'],
        ['The wrong input source is chosen for the screen', CAUSE, 'A laptop’s own screen has no input to choose, and the flashlight shows a picture is being made.'],
        ['Burn-in from an old image left on too long', CAUSE, 'Burn-in leaves a faint ghost of an old image on a lit screen. The screen here is not lit.']])],
      deciding: ['i1'],
      reason: 'The flashlight shows the desktop is on the panel, so the computer is sending a picture. What is missing is the light behind it: the backlight or what powers it. On older LCD screens that power part is the inverter, a small board that makes the high voltage a tube lamp needs.' }),
    item({
      id: 'l12-d-tintmon', strand: 'display-fix',
      blocks: [
        msg('chat', 'Beatrix, Design', 'Chat with the help desk', [['n1', 'My second monitor shows a pink tint all over. I reseated the cable at both ends and it is still pink.']]),
        table('What you tried', ['Test', 'Result'], [
          ['t1', 'A cable known to work, same computer', 'Still pink'],
          ['t2', 'The same monitor on a different computer', 'Still pink'],
          ['t4', 'The monitor’s own color settings reset to the factory default', 'Still pink'],
          ['t3', 'A different monitor on Beatrix’s computer', 'Normal colors']])],
      asks: [ask('What do you do?', [
        ['Replace the monitor, or send it for repair', true, 'Two cables, two computers and the monitor’s own reset gave the same pink, and a different monitor is fine. The fault travels with the monitor.'],
        ['Try a third cable', NOSPLIT, 'Two cables are already ruled out. A third repeats a test that has answered.'],
        ['Reinstall the graphics driver on Beatrix’s computer', RULED, 'A different monitor looks normal on their computer, and this monitor is pink on another computer. The computer is cleared.'],
        ['Reseat the cable and swap the computer at the same time', TWO, 'Two changes together would not say which one matters, and the table already points at the monitor.']])],
      deciding: ['n1', 't1', 't2', 't3', 't4'],
      reason: 'A tint is usually the cable, so the cable comes first. Here the tests already cleared the cable and the computer: the pink follows the monitor. When the earlier tests point at a part, replacing it is right.' }),
    item({
      id: 'l12-d-lamp', strand: 'display-fix',
      blocks: [
        msg('chat', 'Caspian, Training', 'Chat with the help desk', [['r1', 'The room 3 projector powers on and the fan runs, but there is no picture, not even the projector’s menu. The menu worked fine last week.']]),
        table('What the projector shows', ['Check', 'Result'], [
          ['t1', 'Lamp warning light on the projector', 'On'],
          ['t2', 'Lamp hours', '5,040 of 5,000'],
          ['t3', 'The projector’s own menu (not the laptop’s picture)', 'Dark']])],
      asks: [ask('What do you do?', [
        ['Replace the projector lamp', true, 'The lamp warning light is on, the hours are used up and even the menu is dark, so the lamp is spent.'],
        ['Press Source until it finds an input', NOSPLIT, 'The input does not matter: the projector’s own menu is dark too.'],
        ['Reseat the HDMI cable at both ends', NOSPLIT, 'The cable carries the picture to the projector. The menu comes from inside the projector and is dark as well.'],
        ['Wait ten minutes for it to cool and try again', PART, 'Nothing points at overheating, and the hours are used up. Waiting gives the same result.']])],
      deciding: ['r1', 't1', 't2'],
      reason: 'The fan runs and the menu is dark, so the cable and the input are not in question. The lamp warning light and the hours say the lamp is spent. Here the replacement is the right first step.' }),
    item({
      id: 'l12-d-pixel', strand: 'display-fix',
      blocks: [msg('chat', 'Delphine, Purchasing', 'Chat with the help desk', [['m1', 'There is a tiny dot near the middle of my new monitor that stays bright green. It stays there on every color and window.']])],
      asks: [ask('What is it?', [
        ['A stuck pixel in the panel', true, 'One dot that stays on one color is a pixel fault. A stuck one sometimes clears with a pixel-exercise tool; if not, a new monitor may be covered by its warranty.'],
        ['Burn-in from a still image', CAUSE, 'Burn-in is a faint ghost of an old image that was on the screen a long time, not one bright dot.'],
        ['A loose cable at the back', CAUSE, 'A loose cable spoils the whole picture, with flicker or a tint, not one dot.'],
        ['A resolution that is too high', CAUSE, 'A wrong resolution makes the picture fuzzy or the wrong size, not one fixed dot.']])],
      deciding: ['m1'],
      reason: 'A single dot that does not change with the picture is the panel’s own: a dead pixel stays dark and a stuck pixel stays one color. A cable or a setting would change the whole picture.' }),
    item({
      id: 'l12-d-flash', strand: 'display-fix',
      blocks: [msg('chat', 'Emeric, Finance', 'Chat with the help desk', [['p1', 'My monitor flashes on and off every few seconds. Yesterday I changed its refresh rate from 60 Hz to 144 Hz to see if it looked smoother.']])],
      asks: [ask('What do you do first?', [
        ['Put the refresh rate back to 60 Hz, what it was', true, 'A refresh rate the monitor cannot handle makes it flash. Putting it back is free and undoes the one change.'],
        ['Reseat the cable at both ends', NOSPLIT, 'A cheap check, but the flashing began right after the setting change, so it will probably not split anything.'],
        ['Put the refresh rate back and swap the cable', TWO, 'Two changes at once: if the flashing stops, nobody knows which one fixed it.'],
        ['Order a new monitor because it keeps flashing on and off', PART, 'The flashing began with a settings change. Undo that first.']])],
      deciding: ['p1'],
      reason: 'The flashing started right after the refresh rate was changed. Refresh rate is how many times a second the screen is redrawn, and one the monitor cannot handle makes it flash. Undo the change before looking at a part.' }),
    item({
      id: 'l12-d-audio', strand: PE,
      blocks: [msg('chat', 'Gideon, Training', 'Chat with the help desk', [['t1', 'The room 3 TV has an HDMI port and my laptop has an HDMI port, but the only cable I found is DVI at one end and HDMI at the other. The picture shows. No sound comes out of the TV.']])],
      asks: [ask('Why is there no sound?', [
        ['DVI normally carries no sound', true, 'The DVI end has no sound in it, so the TV has nothing to play.'],
        ['The adapter cable is damaged and drops only the sound', CAUSE, 'A bad cable would spoil the picture too. The picture is fine.'],
        ['The refresh rate is too low to carry sound', CAUSE, 'The refresh rate changes how often the picture is redrawn. It does not change sound.'],
        ['The TV’s dead pixels are blocking the sound', CAUSE, 'Dead pixels are dots on the picture. They have nothing to do with sound.']])],
      deciding: ['t1'],
      reason: 'An adapter changes the plug; it cannot add what the cable does not carry. DVI, like VGA, normally carries the picture only. With a DVI cable the sound has to travel another way, or the job needs a cable that carries both, HDMI or DisplayPort.' }),

    // ----- group 4: more of the cables, the names and the numbers -----
    item({
      id: 'l12-g-esata', strand: PE,
      blocks: [msg('chat', 'Hans, Engineering', 'Chat with the help desk', [['h1', 'My PC has an eSATA port on the back. What does an eSATA cable do that the SATA cable inside the computer does not?']])],
      asks: [ask('What is the difference?', [
        ['It takes SATA outside, with no power', true, 'Same kind of connection, made for the outside of the computer.'],
        ['It carries both power and data to the drive', LOOK, 'eSATA has no power in it. The external drive is plugged into the wall for power.'],
        ['It is a fiber cable for long runs between rooms', LOOK, 'eSATA is copper, the same connection as SATA.']])],
      deciding: ['h1'],
      reason: 'eSATA is SATA taken outside the computer for an external drive. It carries data only, so the external drive has its own power.' }),
    say('l12-g-molex', CO, 'An old optical drive inside a PC gets its power from a chunky four-pin plastic plug. Name it.', ['Molex', 'Molex plug', 'Molex connector'],
      'A Molex plug is a 4-pin plastic power connector for older internal drives and fans.'),
    item({
      id: 'l12-g-ppi', strand: DI,
      blocks: [msg('chat', 'Honor, Records', 'Chat with the help desk', [['s1', 'We have two laptops. Both screens have the same resolution, 1920 by 1080. One is 13 inches across the corner, the other 17 inches. Which one looks sharper?']])],
      asks: [ask('Which is sharper?', [
        ['The 13 inch, with its pixels packed closer', true, 'Pixel density is pixels per inch, and the same pixels packed into a smaller screen are closer together.'],
        ['The 17 inch, because a bigger screen shows more', LOOK, 'A bigger screen with the same pixels spreads them farther apart, so each one is easier to see.'],
        ['Neither, the same resolution looks the same', LOOK, 'Resolution counts the pixels. Pixel density counts them per inch, which changes with the size of the screen.']])],
      deciding: ['s1'],
      reason: 'Resolution is how many pixels there are. Pixel density is how many fit in an inch. The same 1920 by 1080 on a 13 inch screen is denser, so sharper, than on a 17 inch screen.' }),
    item({
      id: 'l12-g-touch', strand: 'display-fix',
      blocks: [msg('chat', 'Ignacio, Field team', 'Chat with the help desk', [['w1', 'I dropped my tablet and the glass is cracked. The picture is fine, but nothing happens when I touch the bottom third of the screen.']])],
      asks: [ask('What is the likely cause?', [
        ['The digitizer, the touch-sensing layer', true, 'The digitizer turns where a finger lands into a position. The picture is fine, so the display is working.'],
        ['The backlight behind the glass has failed', CAUSE, 'A failed backlight would darken the screen. The picture is fine.'],
        ['A wrong input source on the tablet', CAUSE, 'A tablet’s own screen has no input source to choose.']])],
      deciding: ['w1'],
      reason: 'The picture is fine, so the display and its light work. Only touch is lost in one area after a drop, which is the digitizer layer that senses touch.' }),
    item({
      id: 'l12-g-db9', strand: PE,
      blocks: [msg('chat', 'Jasper, Network team', 'Chat with the help desk', [['o1', 'To set up a new switch I have to connect my laptop to its console port with a serial cable. Which plug is on the end that goes into the laptop?']])],
      asks: [ask('Which plug?', [
        ['DB9, the 9-pin D-shaped plug', true, 'Serial uses the 9-pin D-shaped DB9 plug.'],
        ['RJ45, the wide 8-contact plug', LOOK, 'RJ45 is the network plug. A console port can take one on some gear, but a serial cable ends in DB9.'],
        ['F-type, the screw-on plug', PLUGS, 'F-type is the screw-on plug of coax.'],
        ['Molex, the four-pin power plug', LOOK, 'Molex brings power to a drive inside a PC. It carries no serial data.']])],
      deciding: ['o1'],
      reason: 'A serial cable sends one bit after another and ends in a 9-pin D-shaped plug, DB9. It is what a technician uses to configure network gear through its console port.' }),
    item({
      id: 'l12-g-usb', strand: PE,
      blocks: [msg('chat', 'Kelsey, Video team', 'Chat with the help desk', [['k1', 'My new drive says USB 3.0 and so do the ports on my PC. The old one was USB 2.0. How fast can this link go at its best?']])],
      asks: [ask('How fast?', [
        ['5 Gbps', true, 'USB 3.0 runs at 5 Gbps, about ten times USB 2.0.'],
        ['480 Mbps', SLOW, 'That is USB 2.0.'],
        ['10 Gbps', LOOK, 'That is a later, faster USB version.'],
        ['40 Gbps', LOOK, 'That is Thunderbolt 3 or 4.']])],
      deciding: ['k1'],
      reason: 'USB 3.0 runs at 5 Gbps and USB 2.0 at 480 Mbps. Later versions go faster over the USB-C plug.' }),
    item({
      id: 'l12-g-light', strand: CO,
      blocks: [msg('chat', 'Lorcan, Front desk', 'Chat with the help desk', [['u1', 'The charging plug on an old iPad is small, 8 pins, and goes in either way up. My new laptop has a port marked with a lightning bolt. Is the iPad’s plug the same thing?']])],
      asks: [ask('What is the iPad’s plug called?', [
        ['Lightning', true, 'Lightning is Apple’s reversible 8-pin plug, on devices before USB-C.'],
        ['Thunderbolt', LOOK, 'Thunderbolt is the 40 Gbps port marked with a lightning bolt, on the USB-C plug. It is not Apple’s old plug.'],
        ['Micro USB', LOOK, 'Micro USB is a small flat trapezoid that goes in one way up.'],
        ['Mini USB', LOOK, 'Mini USB is bigger, found on older cameras and GPS units.']])],
      deciding: ['u1'],
      reason: 'Apple’s reversible 8-pin plug is Lightning. The lightning bolt on a port marks Thunderbolt, a different thing.' }),

    // ----- held in reserve for the weekly review: at least three for each topic -----
    // network cables
    item({
      id: 'l12-s-burial', strand: NC,
      blocks: [msg('chat', 'Deb, Facilities', 'Chat with the help desk', [['d1', 'We are laying 30 meters of network cable from the main building to the shed, in a trench in the ground. No pipe around it. What kind of cable?']])],
      asks: [ask('Which cable?', [
        ['A direct-burial cable', true, 'Its jacket is made to stand water and soil with no pipe around it.'],
        ['A plenum-rated cable', JACKET, 'A plenum jacket is made for fire safety in an air space. It is not made to stand soil and water.'],
        ['An ordinary indoor cable', JACKET, 'An indoor jacket lets water in, and the cable fails in the ground.']])],
      deciding: ['d1'],
      reason: 'A cable in the ground with no pipe needs a jacket made for it: direct burial. The plenum rating answers a different problem, fire in an air space.' }),
    item({
      id: 'l12-r-crossover', strand: NC,
      blocks: [msg('chat', 'Nolan, IT team', 'Chat with the help desk', [['m1', 'I need to join two new switches. Someone said I must make a crossover cable. These switches are from this year.']])],
      asks: [ask('What do you say?', [
        ['A straight-through cable is usually fine; today’s ports detect the wiring', true, 'Most ports today detect which wiring they have, so a crossover is rare.'],
        ['A crossover is the only cable that joins two switches', LOOK, 'That was true of older gear. Newer ports detect and adjust.'],
        ['A coax cable is needed between switches', PLUGS, 'Coax is for cable TV and cable internet, not a link between switches.']])],
      deciding: ['m1'],
      reason: 'A crossover has T568A on one end and T568B on the other. Most network ports today detect which wiring they have, so a straight-through cable works.' }),
    item({
      id: 'l12-r-shield', strand: NC,
      blocks: [msg('chat', 'Oriel, Workshop', 'Chat with the help desk', [['g1', 'The network cable to the welding bay runs along a bank of bright lights and lamp transformers, and it drops whenever they are switched on. I swapped it for a faster one, Cat 6a UTP, and it still drops.']])],
      asks: [ask('What should replace it?', [
        ['A shielded cable (STP) with foil or braid around the pairs', true, 'Shielding blocks the electrical noise lights and their transformers give off; a faster UTP is just as open to it.'],
        ['A longer Cat 6a UTP', SLOW, 'Length does not help against noise, and it adds to the loss.'],
        ['A plenum-rated Cat 6 UTP', JACKET, 'Plenum is a fire rating. It does not block noise.']])],
      deciding: ['g1'],
      reason: 'Speed does not cure interference. Shielding around the pairs, as in STP, blocks electrical noise.' }),
    // fiber
    item({
      id: 'l12-r-multi', strand: FI,
      blocks: [msg('chat', 'Perrin, Operations', 'Chat with the help desk', [['f1', 'We want a fiber link between the first and fifth floor of one building, about 150 meters. A single-mode cable costs more. Is multimode all right?']])],
      asks: [ask('What do you say?', [
        ['Yes, multimode reaches a few hundred meters, so it fits inside a building', true, 'Multimode runs a few hundred meters at most, which is enough here.'],
        ['No, only single-mode works at any length', SLOW, 'Single-mode is for kilometers. For 150 meters multimode is enough.'],
        ['No, fiber cannot go through floors, so use Cat 5', SLOW, 'Cat 5 is slow and is not a fiber answer; fiber runs in a building like other cable.']])],
      deciding: ['f1'],
      reason: 'The run is about 150 meters inside a building, within multimode’s few hundred meters. Single-mode’s long range is not needed.' }),
    item({
      id: 'l12-r-cat5e', strand: NC,
      blocks: [msg('chat', 'Reuben, Office', 'Chat with the help desk', [['a1', 'The wall jacks in our old office are wired with Cat 5e, the longest run is 60 meters, and the switches have 1 Gbps ports. We want every desk at 1 Gbps. Do we have to pull new cable?']])],
      asks: [ask('What do you say?', [
        ['No, Cat 5e already carries 1 Gbps', true, 'Cat 5e carries 1 Gbps, so the old wiring does the job.'],
        ['Yes, only Cat 6a carries 1 Gbps', SLOW, 'Cat 6a is for 10 Gbps over the full run. 1 Gbps needs far less.'],
        ['Yes, Cat 5e is limited to 100 Mbps', SLOW, 'That is Cat 5. Cat 5e carries 1 Gbps.']])],
      deciding: ['a1'],
      reason: 'The job is 1 Gbps. Cat 5e carries 1 Gbps, Cat 5 only 100 Mbps, so nothing needs replacing.' }),
    item({
      id: 'l12-r-fibernoise', strand: FI,
      blocks: [msg('chat', 'Sunniva, Plant', 'Chat with the help desk', [['g1', 'Why can fiber run right past the big motors when copper drops out?']])],
      asks: [ask('Why?', [
        ['Fiber carries light, so electrical noise does not touch it', true, 'Electrical noise acts on copper wires. Light in glass is not affected.'],
        ['Fiber is thicker, so the noise cannot get in', CAUSE, 'Thickness is not the reason. The signal is light, not electricity.'],
        ['Fiber has a shield of foil around it', CAUSE, 'Shielded copper has foil. Fiber needs none, because light is not affected by electrical noise.']])],
      deciding: ['g1'],
      reason: 'Fiber carries light through glass. Electrical noise from motors and lights does not touch it.' }),
    say('l12-r-lc', FI, 'On the patch panel the fiber plugs are small squares with a latch, about half the size of the SC plug. Name it.', ['LC', 'LC plug', 'LC connector'],
      'LC is a small square fiber plug with a latch. SC is bigger and pushes in; ST is round and twists on.'),
    say('l12-r-sc', FI, 'A fiber plug is a square that you push in until it clicks. It is bigger than LC. Name it.', ['SC', 'SC plug', 'SC connector'],
      'SC is a square fiber plug that pushes in and clicks. LC is a smaller square with a latch; ST is round and twists.'),
    // peripheral, video and drive
    item({
      id: 'l12-r-usbc', strand: PE,
      blocks: [msg('chat', 'Tamsin, Accounting', 'Chat with the help desk', [['r1', 'My new laptop has only USB-C ports. My monitor has only a DisplayPort input. IT gave me a USB-C to DisplayPort cable. Why would that work?']])],
      asks: [ask('Why can that cable work?', [
        ['USB-C can carry video as well as data and power', true, 'One reversible USB-C connection can carry all three, when the laptop’s port is built for video.'],
        ['USB-C and DisplayPort are the same connector', LOOK, 'They are different. The cable has a USB-C plug on one end and a DisplayPort plug on the other.'],
        ['USB-C only charges, and the adapter does the rest', PLUGS, 'USB-C can carry data and video too. Which it does depends on the laptop’s port and the cable.']])],
      deciding: ['r1'],
      reason: 'USB-C is a plug that can carry data, power and video. Whether a given port does video is a feature of the laptop, so check the port, not only the plug.' }),
    item({
      id: 'l12-r-tb', strand: PE,
      blocks: [msg('chat', 'Ulrich, Design', 'Chat with the help desk', [['l1', 'My laptop has a USB-C port with a little lightning bolt beside it. My dock needs the fastest port, 40 Gbps. Is that port the one?']])],
      asks: [ask('What is that port?', [
        ['Thunderbolt, 40 Gbps over the USB-C plug', true, 'Thunderbolt 3 and 4 use the USB-C plug and run at 40 Gbps.'],
        ['USB 2.0, 480 Mbps over the USB-C plug', SLOW, 'USB 2.0 is not marked with a lightning bolt and runs at only 480 Mbps.'],
        ['USB 3.0, 5 Gbps over the same plug', SLOW, 'USB 3.0 runs at 5 Gbps, not 40 Gbps.']])],
      deciding: ['l1'],
      reason: 'A lightning bolt next to a USB-C port marks Thunderbolt, which runs at 40 Gbps over the same plug. A USB-C port without it may be much slower.' }),
    item({
      id: 'l12-r-vga', strand: PE,
      blocks: [msg('chat', 'Verity, Training', 'Chat with the help desk', [['b1', 'The old projector in room 1 has only a VGA input. My new laptop has only an HDMI output. What do I need?']])],
      asks: [ask('What do you need?', [
        ['A converter from digital HDMI to analog VGA', true, 'HDMI is digital and VGA is analog, so the signal has to be converted. A plug-shape adapter alone cannot do it.'],
        ['A good-quality HDMI cable, plugged in', PLUGS, 'The projector has no HDMI input for it to plug into.'],
        ['A Cat 6 network cable between them', PLUGS, 'Network cable carries no picture to a projector.']])],
      deciding: ['b1'],
      reason: 'The two ends speak different kinds of signal, digital HDMI and analog VGA, so the adapter must convert the signal, not just fit the plugs. VGA carries no sound, so that needs its own cable.' }),
    item({
      id: 'l12-s-hdmi', strand: PE,
      blocks: [msg('chat', 'Winnie, Conference room', 'Chat with the help desk', [['u1', 'The new TV takes HDMI, DVI-D or VGA, and my laptop has all three. I want picture and sound to reach the TV over one cable. Which one?']])],
      asks: [ask('Which cable?', [
        ['HDMI', true, 'HDMI carries digital picture and sound in the same cable.'],
        ['DVI-D', PLUGS, 'DVI-D carries a digital picture only. The sound would need its own cable.'],
        ['VGA', PLUGS, 'VGA carries an analog picture only, and no sound.']])],
      deciding: ['u1'],
      reason: 'The job is picture and sound in one cable. HDMI does both. DVI-D and VGA carry the picture only.' }),
    // connectors
    say('l12-r-rj11', CO, 'Name the narrow plug on a telephone cable, also used on a DSL modem’s phone line.', ['RJ11'],
      'RJ11 is the narrower telephone plug. Network cable uses the wider RJ45.'),
    say('l12-r-ftype', CO, 'Name the threaded, screw-on connector at the end of coaxial cable.', ['F-type', 'F connector', 'F-type connector'],
      'The F-type connector screws onto coax, the cable of cable TV and cable internet.'),
    item({
      id: 'l12-r-punch', strand: CO,
      blocks: [msg('chat', 'Wendell, New hire', 'Chat with the help desk', [['j1', 'My trainer said the cable in the wall ends in a “punchdown block”. What is that?']])],
      asks: [ask('What is a punchdown block?', [
        ['Slots that take bare wires, no plug', true, 'It is where cable in the wall ends, on a block or the back of a patch panel.'],
        ['The plug on the end of a fiber cable', LOOK, 'Fiber ends in ST, SC or LC plugs. A punchdown block has no plug.'],
        ['The power plug for an old drive or fan', LOOK, 'That is a Molex. A punchdown block carries no power to a drive.']])],
      deciding: ['j1'],
      reason: 'A punchdown block holds the bare wire ends of cable, pushed down into slots with a punchdown tool. It is a connection point, not a plug.' }),
    item({
      id: 'l12-g-micro', strand: CO,
      blocks: [msg('chat', 'Ximena, Warehouse', 'Chat with the help desk', [['p1', 'The scanner’s cable has a very small flat plug that only goes in one way up. My old camera’s cable is bigger and does the same. Which is micro and which is mini?']])],
      asks: [ask('Which is which?', [
        ['The small flat one is micro USB; the bigger one is mini USB', true, 'Micro USB is the small flat trapezoid; mini USB is bigger, on older cameras and GPS units.'],
        ['The small flat one is mini USB; the bigger one is micro USB', LOOK, 'Reversed: micro is the smaller of the two.'],
        ['Both are Lightning plugs', LOOK, 'Lightning is Apple’s reversible 8-pin plug. These plugs go in one way up.']])],
      deciding: ['p1'],
      reason: 'Micro USB is the small flat trapezoid and mini USB the bigger one, both for older devices. Lightning is Apple’s reversible plug.' }),
    // display
    item({
      id: 'l12-d-dim', strand: 'display-fix',
      blocks: [msg('chat', 'Yvette, Training', 'Chat with the help desk', [['b1', 'The room 2 projector picture has been getting dimmer for months. Its menu says: Lamp 4,950 of 5,000 hours.']])],
      asks: [ask('What is the likely cause?', [
        ['The lamp is nearly worn out', true, 'A projector lamp dims as its hours run out.'],
        ['The projector is on the wrong input', CAUSE, 'A wrong input shows No signal, not a dim picture.'],
        ['Burn-in from a still image', CAUSE, 'Burn-in leaves a ghost of an old image, not a dim picture.']])],
      deciding: ['b1'],
      reason: 'The menu shows the lamp at 4,950 of its 5,000 hours, and a slow dimming is what a lamp near the end of its life does.' }),
    item({
      id: 'l12-r-mini', strand: DI,
      blocks: [note('A salesperson says a new monitor has “a backlight made of thousands of tiny LEDs in zones that can dim separately”.')],
      asks: [ask('Which kind of screen is that?', [
        ['Mini-LED', true, 'Mini-LED is an LCD with a backlight of thousands of tiny LEDs in zones, which makes it brighter and darker in places than an ordinary LCD.'],
        ['OLED', LOOK, 'An OLED has no backlight. Each dot makes its own light.'],
        ['TN', LOOK, 'TN is a kind of LCD panel with a fast response. It says nothing about the backlight’s zones.']])],
      reason: 'Mini-LED is an LCD whose backlight is thousands of tiny LEDs in separate zones. An OLED has no backlight at all.' }),
    item({
      id: 'l12-d-trap', strand: 'display-fix',
      blocks: [msg('chat', 'Zephyr, Training', 'Chat with the help desk', [['o1', 'The projector sits on a low cart and points up at the screen. The picture comes out wider at the top than the bottom, like a trapezoid.']])],
      asks: [ask('What do you check first?', [
        ['Square the projector, or adjust keystone', true, 'Keystone is the trapezoid you get when the projector points at an angle. Squaring it, or the keystone setting, corrects it.'],
        ['Replace the lamp with a new one', PART, 'A lamp that is wearing out dims the picture. It does not change its shape.'],
        ['Change the input source on the remote', CAUSE, 'A wrong input shows No signal. The picture here is showing.']])],
      deciding: ['o1'],
      reason: 'A picture wider at the top than the bottom comes from a projector pointing up at an angle. The first check is the angle and the keystone setting, not a part.' }),
    item({
      id: 'l12-r-fuzzy', strand: 'display-fix',
      blocks: [msg('chat', 'Amos, Training', 'Chat with the help desk', [['c1', 'The projector picture is soft and blurry at the edges of the text. The laptop is set to the projector’s own resolution.']])],
      asks: [ask('What do you check?', [
        ['Turn the projector’s focus ring', true, 'The resolution is already right, so the lens focus is next.'],
        ['Switch the laptop to a lower resolution', RULED, 'The resolution is already native; a lower one would only stretch the picture.'],
        ['Replace the HDMI cable', NOSPLIT, 'A bad cable gives flicker or a tint, not a soft focus.']])],
      deciding: ['c1'],
      reason: 'Fuzzy has two causes: not native resolution, or focus. The first is cleared, so turn the focus ring.' }),
    item({
      id: 'l12-r-gamut', strand: DI,
      blocks: [msg('chat', 'Blythe, Studio', 'Chat with the help desk', [['m1', 'I edit video and the colors on my laptop look flat next to a client’s screen. The client’s screen shows more of the range of colors. What is that range called?']])],
      asks: [ask('What is the range called?', [
        ['Color gamut', true, 'Color gamut is the range of colors a screen can show; a wider one is for photo and video work.'],
        ['Pixel density', LOOK, 'Pixel density is pixels per inch, about sharpness.'],
        ['Refresh rate', LOOK, 'Refresh rate is how many times a second the picture is redrawn.']])],
      deciding: ['m1'],
      reason: 'The range of colors a screen can show is its color gamut. Pixel density is sharpness and refresh rate is how often the picture is redrawn.' }),
    item({
      id: 'l12-r-aspect', strand: 'display-fix',
      blocks: [msg('chat', 'Corin, Training', 'Chat with the help desk', [['g1', 'The picture on the projector looks stretched, like everyone is wide. The projector has the right focus and no shape problem.']])],
      asks: [ask('What do you check?', [
        ['The aspect ratio and the resolution the laptop sends', true, 'A stretched look means the shape of the picture does not match what the projector expects.'],
        ['The lamp hours', PART, 'A tired lamp dims the picture. It does not stretch it.'],
        ['The keystone setting', CAUSE, 'Keystone fixes a trapezoid from an angle, not a stretch.']])],
      deciding: ['g1'],
      reason: 'A wrong size or stretch is a resolution or aspect ratio mismatch. Aspect ratio is the shape of the picture, wide 16 by 9 or squarer 4 by 3.' })
,
    item({
      id: 'l12-r-refresh', strand: DI,
      blocks: [msg('chat', 'Ysolde, Marketing', 'Chat with the help desk', [['m1', 'Moving windows look jerky on my new monitor next to the smooth one beside it. The cable and resolution are the same. The box says 60 Hz on mine and 144 Hz on the other. What is that number?']])],
      asks: [ask('What does the number measure?', [
        ['Refresh rate, how many times a second the picture is redrawn', true, 'A higher refresh rate redraws the picture more often, so motion looks smoother.'],
        ['Pixel density, how many pixels fit in each inch', LOOK, 'Pixel density is about sharpness, and it is counted in pixels per inch, not hertz.'],
        ['Color gamut, how wide a range of colors it shows', LOOK, 'Color gamut is the range of colors. It does not change how smooth motion looks.']])],
      deciding: ['m1'],
      reason: 'Hertz on a monitor is its refresh rate: 144 Hz redraws the picture 144 times a second, 60 Hz only 60, so motion on the 60 Hz screen looks less smooth.' }),
    item({
      id: 'l12-r-sound', strand: 'display-fix',
      blocks: [msg('chat', 'Fennick, Training', 'Chat with the help desk', [['g1', 'The projector shows my laptop fine over HDMI, but the video has no sound in the room. The laptop’s own speakers play it when I unplug the cable.']])],
      asks: [ask('What do you check first?', [
        ['The laptop’s sound output: pick the projector as the playback device', true, 'With HDMI in, Windows may still send sound to the wrong device; choosing the right output is the cheapest check.'],
        ['Replace the HDMI cable with a new one', NOSPLIT, 'The picture comes through the same cable, so the cable is carrying signal; check where the sound is sent first.'],
        ['Replace the projector’s lamp with a new one', PART, 'The lamp makes the picture. It has nothing to do with sound.']])],
      deciding: ['g1'],
      reason: 'Picture through HDMI with no sound points at where the laptop sends its audio. Choosing the projector as the playback device is the first, free check.' })
  ]);
})();
