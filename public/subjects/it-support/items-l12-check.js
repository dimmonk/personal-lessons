// IT Help Desk, lesson 12 "Cables, connectors and screens": the eight questions of the check (three on cables, two on connector names, three on display
// tickets), all new. Facts as in items-l12.js (A+ map Core 1 3.1, 3.2, 5.3). Invented people.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const say = (id, words, accept, reason) => item({ id, strand: 'connectors', blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'a', kind: 'text', prompt: 'Type the name.', accept }], reason });
  const NOSPLIT = 'no-split', PLUGS = 'plugs-in', SLOW = 'too-slow', LOOK = 'mixed-look-alike', WDISP = 'wrong-display', CAUSE = 'wrong-cause', PART = 'part-first';

  FC.items('it-support', [
    item({
      id: 'l12-k-t568', strand: 'net-cables',
      blocks: [msg('chat', 'Flor, Network team', 'Chat with the help desk', [['e1', 'I made a patch cable (a short cable from a PC to a switch, the box that joins wired computers). I wired both ends the T568B way. What kind of cable did I make?']])],
      asks: [ask('What kind of cable is it?', [
        ['A straight-through cable', true, 'The same wiring standard at both ends makes a straight-through cable.'],
        ['A crossover cable, with A at one end', LOOK, 'A crossover has T568A on one end and T568B on the other.'],
        ['A shielded cable made with foil, STP', LOOK, 'Shielding is foil around the pairs. The wiring order says nothing about shielding.'],
        ['A Cat 6a cable, a faster grade', LOOK, 'The category is the grade of the cable and its speed. The wiring order is a separate choice.']])],
      deciding: ['e1'],
      reason: 'T568A and T568B are two pin orders for the eight wires. The same order at both ends is straight-through. A crossover has A at one end and B at the other.' }),
    item({
      id: 'l12-k-stp', strand: 'net-cables',
      blocks: [msg('chat', 'Gwyn, Plant manager', 'Chat with the help desk', [['g1', 'The network cable to the packing line runs right beside a row of big motors, and the connection keeps dropping. The cable is ordinary twisted pair with no foil or braid, UTP. What cable should replace it?']])],
      asks: [ask('Which cable?', [
        ['Shielded cable (STP)', true, 'The foil or braid around the pairs blocks the electrical noise motors give off.'],
        ['A plenum-rated UTP cable', PLUGS, 'Plenum is a fire rating for air spaces. It does not block noise.'],
        ['A longer UTP cable to the same spot', SLOW, 'Length does not help against interference, and it adds to the loss.'],
        ['A Cat 6a UTP cable, much faster', PLUGS, 'Cat 6a is faster, but it is just as open to electrical noise with no shield.']])],
      deciding: ['g1'],
      reason: 'The drops come from the motors’ electrical noise. Shielding around the pairs, as in STP, is what blocks it.' }),
    item({
      id: 'l12-k-usb3', strand: 'peripheral',
      blocks: [msg('chat', 'Heidi, Video team', 'Chat with the help desk', [['d1', 'I copied 200 GB to my new drive and the first try over USB 2.0 took forever. The drive and my PC are both USB 3.0. At its best, how fast is the link between them?']])],
      asks: [ask('How fast is USB 3.0?', [
        ['5 Gbps', true, 'USB 3.0 runs at 5 Gbps, about ten times USB 2.0.'],
        ['480 Mbps', SLOW, 'That is USB 2.0.'],
        ['10 Gbps', LOOK, 'That is a later, faster USB version.'],
        ['1 Gbps', SLOW, 'That is the speed of Cat 5e network cable.']])],
      deciding: ['d1'],
      reason: 'USB 3.0 runs at 5 Gbps and USB 2.0 at 480 Mbps. Use the blue USB 3.0 ports and cable on both ends.' }),
    say('l12-k-db9', 'A serial cable to a switch’s console port ends in a 9-pin D-shaped plug. Name it.', ['DB9', 'DB 9', 'DB9 connector', 'D-sub 9', 'DE9', 'DE 9'],
      'DB9 is the 9-pin D-shaped serial connector, used to configure network gear through its console port.'),
    item({
      id: 'l12-k-light', strand: 'connectors',
      blocks: [msg('chat', 'Idris, Sales', 'Chat with the help desk', [['f1', 'I need a charging cable for my old iPhone 12. Its plug is small, 8 pins, and goes in either way up. What is that plug called?']])],
      asks: [ask('What is it called?', [
        ['Lightning', true, 'Lightning is Apple’s reversible 8-pin plug.'],
        ['Micro USB', LOOK, 'Micro USB is a small flat trapezoid that goes in one way up, found on older non-Apple phones.'],
        ['Mini USB', LOOK, 'Mini USB is bigger, found on older cameras and GPS units.'],
        ['Thunderbolt', LOOK, 'Thunderbolt is the 40 Gbps port marked with a lightning bolt, on the USB-C plug. It is not Apple’s old plug.']])],
      deciding: ['f1'],
      reason: 'Apple’s small reversible 8-pin plug on phones before USB-C is Lightning.' }),
    item({
      id: 'l12-k-hot', strand: 'display',
      blocks: [msg('chat', 'Jana, Training', 'Chat with the help desk', [['k1', 'The room 5 projector shuts off by itself after about 20 minutes, then works after a rest. The fan gets loud before it goes.']])],
      asks: [ask('What do you check first?', [
        ['The vents and the dust filter', true, 'Blocked vents or a dirty filter make a projector overheat and shut down.'],
        ['The lamp hours in the menu', NOSPLIT, 'A cheap look, but a tired lamp dims the picture. It does not shut the projector down.'],
        ['Replace the lamp with a new one', PART, 'Nothing says the lamp is spent, and a spent lamp gives no image rather than a shutdown.'],
        ['The resolution on the laptop', CAUSE, 'Resolution changes the size and sharpness of the picture, not the power.']])],
      deciding: ['k1'],
      reason: 'A projector that shuts off after a while, with a loud fan first, is overheating. Dust and blocked vents are the cheap thing to check.' }),
    item({
      id: 'l12-k-native', strand: 'display',
      blocks: [msg('chat', 'Lou, HR', 'Chat with the help desk', [['l1', 'My new 4K monitor (3840 by 2160 pixels) has fuzzy text. Windows says the resolution is 1280 by 720.']])],
      asks: [ask('What do you check first?', [
        ['Switch Windows to native resolution', true, 'A picture not at the panel’s native resolution is stretched, which makes it fuzzy.'],
        ['Replace the cable with a brand new one', PART, 'The picture shows, and the setting is plainly wrong. Fix the setting first.'],
        ['Turn the refresh rate down to 30 Hz', CAUSE, 'Refresh rate is how often the picture is redrawn. It does not blur text.'],
        ['Order a new monitor this afternoon', PART, 'Nothing shows the monitor is at fault, and the setting is cheap to fix.']])],
      deciding: ['l1'],
      reason: 'The monitor’s native resolution is 3840 by 2160 and Windows sends 1280 by 720, which the panel stretches. Switch it to native.' }),
    item({
      id: 'l12-k-burn', strand: 'display',
      blocks: [msg('chat', 'Lior, Lobby', 'Chat with the help desk', [['m1', 'Our lobby OLED TV has shown the same schedule board all day for months. Now a faint outline of the board stays on the screen even when it shows a video.']])],
      asks: [ask('What is it?', [
        ['Burn-in', true, 'Burn-in is a ghost of a static image left in the screen, most often on OLED.'],
        ['Dead pixels', CAUSE, 'Dead pixels are single dots. This is an outline of the board.'],
        ['A loose cable', CAUSE, 'A loose cable flickers or tints the whole picture.'],
        ['The wrong input source', CAUSE, 'A wrong input shows No signal.']])],
      deciding: ['m1'],
      reason: 'Months of one static image left an outline in an OLED screen. That is burn-in. A screen saver and changing content help prevent it, and it often cannot be undone.' })
  ]);
})();
