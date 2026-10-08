// Singing, Unit Three: stories shown inside cards, part one: a breath that works, a shallow breath, and unplanned breaths.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// route is { D1: [...], B1: [...] }: every story of this unit is about the air (the first question's answer), and this unit's
// own question, what the air is doing, gives the name. cues.B1 is the exact words that show it.
// Every person is invented, and no real song or singer is named. Stories are written the way a singer would tell them.

FC.cases('singing', 'u3', [

  /* ---------- A breath that works ---------- */
  { id: 'b-meet-quiet', use: 'teach', tier: 'clean', setting: 'car', topic: 'a slow verse checked at a red light', name: 'The quiet breath',
    text: "Rosa is driving and singing the second verse of a slow song, and she is sure she has no breath for it. At a red light she puts a hand on her belly and looks in the mirror. Her belly moves out when she breathes in, her shoulders do not move, and the breath is too quiet to hear. She sings the verse again and still has air left at the end of the line.",
    outcome: 'breathfine', route: { D1: ['breath'], B1: ['lasts'] },
    cues: { D1: 'she is sure she has no breath for it',
            B1: ['Her belly moves out when she breathes in, her shoulders do not move, and the breath is too quiet to hear', 'still has air left at the end of the line'] } },

  { id: 'b-check-pew', use: 'check', tier: 'clean', setting: 'church', topic: 'a hymn checked in the pew',
    text: "In the pew before the hymn, Walt wonders whether he is breathing wrong. He puts a hand on his belly and breathes in: it moves out, his shoulders do not lift, and the breath makes no sound. He sings the first line and still has air at the end.",
    outcome: 'breathfine', route: { D1: ['breath'], B1: ['lasts'] },
    cues: { D1: 'wonders whether he is breathing wrong',
            B1: ['it moves out, his shoulders do not lift, and the breath makes no sound', 'still has air at the end'] },
    segments: [
      { text: 'In the pew before the hymn, Walt wonders whether he is breathing wrong', note: 'That is why Walt checks. It does not say what the check showed.' },
      { text: 'He puts a hand on his belly and breathes in: it moves out, his shoulders do not lift, and the breath makes no sound' },
      { text: 'He sings the first line and still has air at the end', note: 'True, and it follows from the breath. What shows the breath was low and quiet is in the second piece.' } ],
    reason: { B1: 'Walt’s belly moved out, his shoulders stayed down, and the breath made no sound: {cue:B1}.' } },

  /* ---------- A shallow breath ---------- */
  { id: 'b-meet-gasp', use: 'teach', tier: 'clean', setting: 'karaoke', topic: 'a long chorus line after a gasp', name: 'The gasp',
    text: "At karaoke, Marcus takes a quick, noisy gasp before the long chorus line. His shoulders jump up as he does it, and halfway through the line the air is gone. The last words come out squeezed.",
    outcome: 'shallowbreath', route: { D1: ['breath'], B1: ['gone'] },
    cues: { D1: 'halfway through the line the air is gone',
            B1: ['takes a quick, noisy gasp', 'His shoulders jump up as he does it', 'halfway through the line the air is gone'] } },

  { id: 'b-check-rehearsal', use: 'check', tier: 'clean', setting: 'choir', topic: 'a rehearsal breath that lifts the shoulders',
    text: "At choir rehearsal, Teresa breathes in before the long phrase and her shoulders rise up to her ears. The breath is a quick gasp you can hear across the room, and by the end of the phrase she has nothing left.",
    outcome: 'shallowbreath', route: { D1: ['breath'], B1: ['gone'] },
    cues: { D1: 'by the end of the phrase she has nothing left',
            B1: ['her shoulders rise up to her ears', 'The breath is a quick gasp you can hear across the room'] },
    reason: { B1: 'Teresa’s breath was a quick gasp that lifted her shoulders, and the air was gone early: {cue:B1}.' } },

  { id: 'b-lk-ballad-fine', use: 'teach', tier: 'clean', setting: 'home', topic: 'a long ballad line with a hand on the belly', name: 'The ballad, checked',
    text: "At home, Owen has been told that the long middle line of a ballad makes him sound out of breath. He puts a hand on his belly and breathes in: it moves out, his shoulders stay still, and the breath is quiet. He sings the long line and has air left at the end.",
    outcome: 'breathfine', route: { D1: ['breath'], B1: ['lasts'] },
    cues: { D1: 'makes him sound out of breath',
            B1: ['it moves out, his shoulders stay still, and the breath is quiet', 'has air left at the end'] } },

  { id: 'b-lk-ballad-gasp', use: 'teach', tier: 'clean', setting: 'home', topic: 'a long ballad line with the shoulders up', name: 'The ballad, gasped',
    text: "At home, Owen has been told that the long middle line of a ballad makes him sound out of breath. He gasps in through his mouth, noisy and quick, and his shoulders jump up. He sings the long line, and the air is gone before the end.",
    outcome: 'shallowbreath', route: { D1: ['breath'], B1: ['gone'] },
    cues: { D1: 'makes him sound out of breath',
            B1: ['He gasps in through his mouth, noisy and quick, and his shoulders jump up', 'the air is gone before the end'] } },

  /* ---------- Unplanned breaths ---------- */
  { id: 'b-meet-midword', use: 'teach', tier: 'clean', setting: 'choir', topic: 'a choir verse broken in the middle of a word', name: 'The chopped verse',
    text: "In choir, Beth breathes in low and full, belly out and shoulders still. But she waits until she runs out, so she grabs her next breath in the middle of the word 'tomorrow', and again halfway through the next phrase. She has not marked a single breath in her copy of the words, and every line comes out in chunks.",
    outcome: 'unplanned', route: { D1: ['breath'], B1: ['grabbed'] },
    cues: { D1: "she grabs her next breath in the middle of the word 'tomorrow'",
            B1: ['breathes in low and full, belly out and shoulders still', "she grabs her next breath in the middle of the word 'tomorrow'", 'She has not marked a single breath'] } },

  { id: 'b-check-toast', use: 'check', tier: 'clean', setting: 'party', topic: 'a toast song chopped in the middle',
    text: "At a party, Dana sings a toast song she wrote. Every breath is low and full, but she takes it only when she runs out: once in the middle of 'together', and once before the last two words. Nobody has told her where to breathe, and she has not thought about it.",
    outcome: 'unplanned', route: { D1: ['breath'], B1: ['grabbed'] },
    cues: { D1: "once in the middle of 'together'",
            B1: ['Every breath is low and full, but she takes it only when she runs out', "once in the middle of 'together'"] },
    reason: { B1: 'Dana’s breaths were full and low, but she took them wherever she ran out: {cue:B1}.' } },

  { id: 'b-lk-bedtime-gasp', use: 'teach', tier: 'clean', setting: 'kids', topic: 'a bedtime song after a high gasp', name: 'The bedtime gasp',
    text: "At bedtime, Amara sings a gentle song to her twins. Before every line she gasps in, quick and high, with her shoulders rising, and by the middle of the line the air is gone.",
    outcome: 'shallowbreath', route: { D1: ['breath'], B1: ['gone'] },
    cues: { D1: 'by the middle of the line the air is gone',
            B1: ['she gasps in, quick and high, with her shoulders rising', 'the air is gone'] } },

  { id: 'b-lk-bedtime-grab', use: 'teach', tier: 'clean', setting: 'kids', topic: 'a bedtime song with breaths in the middle of words', name: 'The bedtime breaths',
    text: "At bedtime, Amara sings a gentle song to her twins. Before every line she breathes in low and full, with her belly out and her shoulders still, but she only breathes when she runs out, so a breath lands in the middle of a word.",
    outcome: 'unplanned', route: { D1: ['breath'], B1: ['grabbed'] },
    cues: { D1: 'a breath lands in the middle of a word',
            B1: ['breathes in low and full, with her belly out and her shoulders still', 'she only breathes when she runs out, so a breath lands in the middle of a word'] } }
]);
