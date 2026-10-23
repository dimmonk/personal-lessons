// IT Help Desk, lesson 12: Cables, connectors and screens (part cables). Core 1 3.1, 3.2 and 5.3 of the A+ map (docs/research/it-support-aplus.md): which cable and
// connector fits a job, the display kinds and numbers, and each display or projector symptom with its likely cause and first check. The chain (rulings-l9-13.md, 5) is the
// signal path: the computer's port, the cable and adapter, the screen's input, the panel. The way of choosing is the technician's (IT5: know what each part does for the
// whole; IT4, IT8: cut with the cheapest check, a part known to work; one fault at a time). Plan: docs/subjects/it-support/plan.md, lesson 12.
// One worked ticket (Dina's projector: the cheapest cut first, a favorite ruled out by a swap, then the next link); four groups; and the check: eight new questions, no help, 7 of 8 to pass.
FC.lesson('it-support', {
  id: 'l12', part: 'cables', title: 'Cables, connectors and screens', rev: 1, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (cable and connector for the job; display kinds and numbers; display and projector symptoms with the first check).' }],
  why: [
    'Dina has ten minutes before class. The projector in room 4 says No signal. She has a cable, an adapter and a laptop with only USB-C ports, and no idea which part is wrong.',
    'A picture travels a path: the computer’s port, the cable and any adapter, the screen’s input, the panel. You learn what each cable and plug carries, how to choose one, and where on that path each screen problem sits, with its cheap check.'],
  flow: [
    { title: 'Start from the job',
      show: [{ kind: 'prose', text: [
        'Choosing a cable is three questions. What must pass through it: picture, sound, data or power? How far and how fast? What plug is on each end?'] }] },
    { title: 'Network cables',
      show: [{ kind: 'document', form: 'table', title: 'Copper network cable (twisted pairs, RJ45 plug); a run is at most 100 meters', head: ['Cable', 'Speed'], rows: [
        { id: 'r1', cells: ['Cat 5', '100 Mbps (a hundred million bits a second)'] },
        { id: 'r2', cells: ['Cat 5e', '1 Gbps (a billion bits a second)'] },
        { id: 'r3', cells: ['Cat 6', '1 Gbps to 100 meters; 10 Gbps only up to about 55 meters, less near a lot of electrical noise'] },
        { id: 'r4', cells: ['Cat 6a', '10 Gbps to the full 100 meters'] },
      ] },
      { kind: 'document', form: 'table', title: 'Coaxial cable, a different kind', head: ['Cable', 'What it is'], rows: [
        { id: 'x1', cells: ['Coaxial (coax)', 'One copper core inside a shield. Carries cable TV and cable internet from the wall to a modem (the box that joins the home to the internet company’s line). F-type plug.'] }] },
      { kind: 'prose', text: [
        'T568A and T568B are two orders for the eight wires in an RJ45 plug. The same order at both ends makes a straight-through cable, the usual one. T568A at one end and T568B at the other makes a crossover cable, now rare because most ports detect which they have.',
        'UTP is unshielded twisted pair. STP is shielded: foil or braid around the pairs blocks electrical noise from motors and lights. Plenum-rated cable has a jacket that burns slowly with little poisonous smoke, for air spaces above ceilings. Direct-burial cable has a jacket made to stand water and soil.'] }] },
    { title: 'Fiber',
      show: [{ kind: 'document', form: 'table', title: 'Fiber carries light through glass, so electrical noise does not touch it', head: ['Cable or plug', 'What it is'], rows: [
        { id: 'f1', cells: ['Single-mode', 'A very thin core and laser light. Many kilometers.'] },
        { id: 'f2', cells: ['Multimode', 'A wider core. A few hundred meters at most, such as inside a building.'] },
        { id: 'f3', cells: ['ST plug', 'Round, twists and locks on like a bayonet.'] },
        { id: 'f4', cells: ['SC plug', 'Square, pushes in and clicks.'] },
        { id: 'f5', cells: ['LC plug', 'Small square with a latch, half the size of SC.'] }] }] },
    { title: 'Device and drive cables',
      show: [{ kind: 'document', form: 'table', title: 'Cables for devices and drives', head: ['Cable', 'What it is'], rows: [
        { id: 'u1', cells: ['USB 2.0', '480 Mbps.'] },
        { id: 'u2', cells: ['USB 3.0', '5 Gbps; the port is often blue inside. Later, faster versions use the USB-C plug.'] },
        { id: 'u3', cells: ['Thunderbolt 3 and 4', '40 Gbps over USB-C, for data, video and power; the port has a lightning bolt.'] },
        { id: 'u4', cells: ['Serial', 'A slow cable that sends one bit after another, with a 9-pin DB9 plug. Configures network gear through its console port (the port on a switch or router for a technician’s laptop).'] },
        { id: 'u5', cells: ['SATA', 'Joins a drive to the motherboard inside the computer. Data only; power is a separate cable.'] },
        { id: 'u6', cells: ['eSATA', 'SATA taken outside the case for an external drive. Data only, so the drive has its own power.'] }] }] },
    { title: 'Video cables',
      show: [{ kind: 'document', form: 'table', title: 'Video cables', head: ['Cable', 'What it carries'], rows: [
        { id: 'v1', cells: ['HDMI', 'Digital picture and sound. TVs, monitors, projectors.'] },
        { id: 'v2', cells: ['DisplayPort', 'Digital picture and sound. Monitors; can chain several.'] },
        { id: 'v3', cells: ['DVI-D', 'Digital picture only.'] },
        { id: 'v3b', cells: ['DVI-I', 'The port or plug that carries both digital and analog pictures. A DVI-D cable fits it and carries the digital one.'] },
        { id: 'v3c', cells: ['DVI-A', 'Analog picture only. Rare.'] },
        { id: 'v4', cells: ['VGA', 'Analog picture only. Blue 15-pin plug on older monitors and projectors.'] },
        { id: 'v5', cells: ['USB-C', 'Picture, data and power in one reversible plug, but only if the port was built to. A USB-C port may be for charging and data only.'] }] },
      { kind: 'prose', text: [
        'Digital is a picture sent as numbers; analog, as a changing voltage. Digital (HDMI) to analog (VGA) needs a converter, not just an adapter that fits.'] }] },
    { title: 'Adapters, and the shapes of USB',
      show: [{ kind: 'document', form: 'table', title: 'An adapter changes the plug; it cannot add what the cable does not carry', head: ['Adapter', 'What it does and what it cannot'], rows: [
        { id: 'a1', cells: ['USB-C to HDMI', 'Turns a USB-C port’s video into HDMI, only if the port carries video.'] },
        { id: 'a2', cells: ['DVI to HDMI', 'Fits the plugs. The picture passes; DVI normally carries no sound, so sound needs its own cable.'] },
        { id: 'a3', cells: ['HDMI to VGA', 'A converter from digital to analog picture. No sound comes out of VGA.'] },
        { id: 'a4', cells: ['Mini DisplayPort or mini HDMI to full size', 'The same signal on a smaller plug.'] }] },
      { kind: 'prose', text: [
        'USB shapes: USB-A is the flat rectangle on a computer; USB-B, the squarish plug on printers; USB-C, the small reversible oval.'] }] },
    { title: 'Connectors',
      show: [{ kind: 'document', form: 'table', title: 'Plugs and where they go', head: ['Connector', 'What it is'], rows: [
        { id: 'c1', cells: ['RJ45', 'Wider, 8 contacts. Network cable.'] },
        { id: 'c2', cells: ['RJ11', 'Narrower, fewer contacts. Telephone line and DSL modem.'] },
        { id: 'c3', cells: ['F-type', 'Threaded, screws on. Coax.'] },
        { id: 'c4', cells: ['Punchdown block', 'No plug: bare wires pushed into slots with a punchdown tool, where wall cable ends. A keystone jack is the wall plate with an RJ45 socket.'] },
        { id: 'c5', cells: ['Micro USB and mini USB', 'Small USB plugs on older devices. Micro is the small flat trapezoid; mini is bigger, on older cameras and GPS units.'] },
        { id: 'c6', cells: ['Molex', 'Four-pin power plug for older internal drives and fans.'] },
        { id: 'c7', cells: ['Lightning', 'Apple’s reversible 8-pin plug, on phones and tablets before USB-C. Not Thunderbolt, the 40 Gbps port with a lightning bolt.'] },
        { id: 'c8', cells: ['DB9', 'The 9-pin D-shaped serial plug.'] }] }] },
    { title: 'It fits, so it works',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“The plug goes into the port, so the cable will do the job.”',
        'An RJ11 phone plug can be pushed into a network jack, and a charge-only USB-C cable fits a port that wants video. Decide by what the cable carries, how fast and how far, then check the plug.'] }] },
    { title: 'Display kinds and numbers',
      show: [{ kind: 'document', form: 'table', title: 'Display kinds', head: ['Kind', 'What it is'], rows: [
        { id: 'k1', cells: ['LCD', 'Liquid crystals lit from behind by a backlight. Older ones use a tube lamp powered by an inverter, a small board that makes the lamp’s high voltage.'] },
        { id: 'k2', cells: ['IPS (a kind of LCD)', 'Best color and widest viewing angle.'] },
        { id: 'k3', cells: ['TN (a kind of LCD)', 'Fastest and cheapest; colors fade from the side.'] },
        { id: 'k4', cells: ['VA (a kind of LCD)', 'Deepest blacks, best contrast of the three.'] },
        { id: 'k5', cells: ['OLED', 'Every dot makes its own light; black is truly off. The same picture left on for weeks can burn in.'] },
        { id: 'k6', cells: ['Mini-LED', 'An LCD whose backlight is thousands of tiny LEDs in zones that dim separately.'] },
        { id: 'k7', cells: ['Touch screen', 'A digitizer layer senses where a finger lands. Picture fine, touch failing: suspect the digitizer.'] }] },
      { kind: 'prose', text: [
        'A pixel is one dot of the picture. Resolution is how many pixels, wide by high: 1920 by 1080. A picture not at the panel’s own (native) resolution is stretched and fuzzy. Pixel density is pixels per inch: the same resolution on a smaller screen is sharper. Refresh rate, in Hz, is how many times a second the picture is redrawn: 60 for office work, higher for games. Color gamut is the range of colors a screen can show; wider is for photo and video work.'] }] },
    { title: 'The signal path, and where each symptom sits',
      show: [{ kind: 'prose', text: [
        'A picture reaches your eyes along four links. 1. The computer: its port and settings (which port sends video, resolution, refresh rate, sound output). 2. The cable and any adapter. 3. The screen’s input: a screen or projector listens to one input at a time. 4. The panel: the dots and their light, or the projector’s lamp.',
        'Cut it with the cheapest check first: a button or setting before a swap, a swap before an order. Test with a part known to work, one change at a time. A swap that changes nothing clears that part only if one fault is behind the symptom; two faults can hide each other.'] },
      { kind: 'document', form: 'table', title: 'Symptom, link, likely cause, first check', head: ['Symptom', 'Link', 'Likely cause', 'First check'], rows: [
        { id: 's1', cells: ['No signal', '3. Input', 'Wrong input source', 'Press Source or Input and choose the input the cable is in'] },
        { id: 's2', cells: ['No picture, flicker', '2. Cable', 'Loose or damaged cable', 'Reseat both ends, then a cable known to work'] },
        { id: 's2b', cells: ['No picture only through an adapter', '1 or 2', 'A USB-C port without video, or the wrong adapter', 'Try the other port or another adapter known to work'] },
        { id: 's3', cells: ['Wrong colors, a tint', '2. Cable', 'Loose cable or bent pin; a bad panel if a cable known to work and another computer show it too', 'Reseat the cable, reset the monitor’s own color settings, then another cable, then the screen on another computer'] },
        { id: 's4', cells: ['Fuzzy image', '1. Computer, or projector focus', 'Not native resolution, or the projector’s focus', 'Set native resolution; turn the focus ring'] },
        { id: 's5', cells: ['Faint ghost of an old image', '4. Panel', 'Burn-in', 'Screen saver and changing content; often permanent'] },
        { id: 's6', cells: ['One dot always dark or one color', '4. Panel', 'A dead pixel stays dark; a stuck pixel stays one color', 'Show a solid color. A stuck pixel sometimes clears with a pixel-exercise tool; a dead one never does; then warranty'] },
        { id: 's7', cells: ['Flashing screen', '1 or 2', 'Loose cable, or a refresh rate the screen cannot handle', 'Reseat the cable; put the refresh rate back to what it was'] },
        { id: 's8', cells: ['Picture but no sound', '1 or 2', 'A cable that normally carries no sound (VGA, DVI) or the wrong sound output', 'Pick the sound output; use HDMI'] },
        { id: 's9', cells: ['Dim image', '4. Panel', 'Low brightness, failing backlight or inverter, tired projector lamp', 'Raise brightness; shine a flashlight at the screen; check lamp hours'] },
        { id: 's10', cells: ['Projector runs, no image, lamp warning light on or hours used up', '4. Lamp', 'Burnt-out projector bulb', 'Check the lamp warning light and the hours; replace the lamp'] },
        { id: 's11', cells: ['Projector shuts off by itself', '4. Projector', 'Overheating', 'Vents and dust filter; let it cool'] },
        { id: 's12', cells: ['Wrong size', '1. Computer, or projector zoom', 'Resolution, or aspect ratio (the picture’s shape: wide 16 by 9, squarer 4 by 3); projector zoom', 'Resolution, aspect ratio, zoom'] },
        { id: 's13', cells: ['Trapezoid, distorted', '4. Projector', 'Projector at an angle', 'Square the projector; keystone setting (squares up a trapezoid)'] }] }] },
    { worked: 'l12-w-room' },
    { set: { items: ['l12-p-run', 'l12-p-modem', 'l12-p-plenum', 'l12-p-rj45'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l12-s-fiber', 'l12-s-short', 'l12-s-dvi', 'l12-s-st', 'l12-s-photo', 'l12-s-sata', 'l12-s-burial', 'l12-s-hdmi'], order: 'shuffle' } },
    { set: { items: ['l12-d-call', 'l12-d-dark', 'l12-d-tintmon', 'l12-d-lamp', 'l12-d-pixel', 'l12-d-flash', 'l12-d-audio', 'l12-d-dim', 'l12-d-trap'], order: 'shuffle' } },
    { set: { items: ['l12-g-esata', 'l12-g-molex', 'l12-g-ppi', 'l12-g-touch', 'l12-g-db9', 'l12-g-usb', 'l12-g-light', 'l12-g-micro'], order: 'shuffle', mix: { from: ['l5', 'l6'], share: 0.3 } } }
  ],
  check: {
    items: ['l12-k-t568', 'l12-k-stp', 'l12-k-usb3', 'l12-k-db9', 'l12-k-light', 'l12-k-hot', 'l12-k-native', 'l12-k-burn'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
