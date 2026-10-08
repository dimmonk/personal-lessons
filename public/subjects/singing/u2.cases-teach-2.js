// Singing, Unit Two: stories shown inside cards, part two: the last name (out of your range) and its look-alike pair, the
// second named exception (a flip followed by a note that is not there, which the question gives to out of your range),
// the one worked story, and the six checks that sit between the cards. Field guide: see u2.cases-teach-1.js.
// use: 'check' = asked between cards. A check after the first name taps the words (so its story has tappable pieces); the
// other checks choose among the answers met so far.

FC.cases('singing', 'u2', [

  /* ---------- Out of your range ---------- */
  { id: 'h-outofrange-meet', use: 'teach', tier: 'clean', setting: 'karaoke', topic: 'a karaoke chorus that sits very high', name: 'The high chorus',
    text: "Pedro picks a karaoke song whose chorus sits very high. On the top note he tries going light, with his throat relaxed. The note is still not there; his voice just stops below it. Even the lines before it feel like a stretch.",
    outcome: 'outofrange', route: { D1: ['high'], H1: ['missing'] },
    cues: { H1: ['he tries going light, with his throat relaxed', 'The note is still not there'] } },

  /* the third pair: the same person, the same high chorus, once shouted and once tried lightly */
  { id: 'h-lk-anya-push', use: 'teach', tier: 'clean', setting: 'karaoke', topic: 'a very high chorus, shouted at karaoke',
    text: "Anya picks a song with a very high chorus at karaoke. On the top note she gets louder and louder, her neck tight, and shouts it out. She does not try it light.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { H1: ['she gets louder and louder, her neck tight, and shouts it out', 'She does not try it light'] } },

  { id: 'h-lk-anya-range', use: 'teach', tier: 'clean', setting: 'karaoke', topic: 'a very high chorus, tried lightly at karaoke',
    text: "Anya picks a song with a very high chorus at karaoke. On the top note she tries going light, with her throat relaxed. The note is not there; her voice stops below it.",
    outcome: 'outofrange', route: { D1: ['high'], H1: ['missing'] },
    cues: { H1: ['she tries going light, with her throat relaxed', 'The note is not there'] } },

  /* ---------- the exception: a flip, and then a note that is not there ---------- */
  { id: 'h-exc-flip', use: 'teach', tier: 'misleading', setting: 'church', topic: 'a hymn that flips and then runs out of notes', name: 'The missing note', also: ['flip'],
    text: "Ines sings a hymn in church. As the tune climbs, her voice flips into a thin, airy sound. She tries the next note up lightly, with her throat relaxed, and it is not there; her voice just stops.",
    outcome: 'outofrange', route: { D1: ['high'], H1: ['missing'] },
    cues: { H1: ['She tries the next note up lightly, with her throat relaxed, and it is not there'] },
    segments: [
      { text: 'Ines sings a hymn in church', note: 'That is the setting. It does not say what her voice does on the way up.' },
      { text: 'As the tune climbs, her voice flips into a thin, airy sound', note: 'This is why it looks like {o:cracking}. A flip shows up in both, so it cannot settle which this is.' },
      { text: 'She tries the next note up lightly, with her throat relaxed, and it is not there; her voice just stops' }
    ] },

  /* ---------- the one worked story: a flip, and a singer who thinks the note is gone ---------- */
  { id: 'h-w-flip', use: 'teach', tier: 'misleading', setting: 'kids', topic: 'a lullaby that flips, with the notes above it still there', name: 'The lullaby that flips',
    text: "Wendy sings a lullaby to her baby. As the tune climbs, her voice flips into a thin, airy sound for a second. “I just can’t sing that high,” she thinks. But the next note up comes out, thin and light, and so does the one after it.",
    outcome: 'cracking', route: { D1: ['high'], H1: ['flip'] },
    cues: { D1: 'As the tune climbs', H1: ['flips into a thin, airy sound for a second', 'the next note up comes out, thin and light'] } },

  /* ---------- the checks ---------- */
  { id: 'h-c-odile-hymn', use: 'check', tier: 'clean', setting: 'church', topic: 'a hymn that goes soft at the top',
    text: "Odile sings a hymn with her choir on Sunday. The hymn climbs on its last line. At the top her voice goes soft and thin, with no effort in her neck. She worries it sounds weak next to the louder voices around her.",
    outcome: 'lighttop', route: { D1: ['high'], H1: ['light'] },
    cues: { H1: ['her voice goes soft and thin, with no effort in her neck'] },
    segments: [
      { text: 'Odile sings a hymn with her choir on Sunday', note: 'That is the setting. It does not say what her voice does at the top.' },
      { text: 'The hymn climbs on its last line', note: 'That is where the top is. It does not say what her voice does there.' },
      { text: 'At the top her voice goes soft and thin, with no effort in her neck' },
      { text: 'She worries it sounds weak next to the louder voices around her', note: 'That is how it feels to her. A feeling of weakness does not say what the note sounds like.' }
    ],
    reason: { H1: 'Odile’s top goes light and easy: {cue:H1}.' } },

  { id: 'h-c-raj-camp', use: 'check', tier: 'clean', setting: 'kids', topic: 'a camp song shouted to be heard',
    text: "Raj sings a camp song with his class of eight-year-olds. The song climbs, and he gets louder and louder so the kids can hear him. At the top his jaw is tight and the note comes out as a yell.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { H1: ['he gets louder and louder so the kids can hear him', 'his jaw is tight and the note comes out as a yell'] },
    reason: { H1: 'Raj reaches the top by getting louder, and his jaw tightens: {cue:H1}. Nothing about it is light or easy.' } },

  { id: 'h-c-gabe-shower', use: 'check', tier: 'clean', setting: 'shower', topic: 'a line that flips and keeps going',
    text: "Gabe sings in the shower. As the line climbs, his voice suddenly flips into a thin, airy sound with a jolt, and the notes above the flip come out light but clear. He laughs and starts the line again.",
    outcome: 'cracking', route: { D1: ['high'], H1: ['flip'] },
    cues: { H1: ['suddenly flips into a thin, airy sound with a jolt', 'the notes above the flip come out light but clear'] },
    reason: { H1: 'The voice flips with a jolt, and the notes above it are there: {cue:H1}.' } },

  { id: 'h-c-fatima-solo', use: 'check', tier: 'clean', setting: 'church', topic: 'a solo where the tongue pulls back',
    text: "Fatima sings a solo in church. As the tune climbs, her throat clamps and her tongue pulls back. The sound goes thin and tight, not louder, and her throat is sore for the rest of the day.",
    outcome: 'squeezing', route: { D1: ['high'], H1: ['clamp'] },
    cues: { H1: ['her throat clamps and her tongue pulls back', 'The sound goes thin and tight, not louder'] },
    reason: { H1: 'Her throat locks up and the sound gets thinner, not louder: {cue:H1}.' } },

  { id: 'h-c-hiroshi-car', use: 'check', tier: 'clean', setting: 'car', topic: 'a car song that sits too high all the way through',
    text: "Hiroshi tries a song in his car whose chorus sits high. He tries the top note lightly, with his throat loose. The note is not there, and it is not there when he tries again. The whole chorus is out of reach.",
    outcome: 'outofrange', route: { D1: ['high'], H1: ['missing'] },
    cues: { H1: ['He tries the top note lightly, with his throat loose', 'The note is not there'] },
    reason: { H1: 'He tried it lightly with a loose throat, and the note was still not there: {cue:H1}.' } },

  { id: 'h-c-ravi-karaoke', use: 'check', tier: 'clean', setting: 'karaoke', topic: 'a karaoke chorus where the jaw locks',
    text: "Ravi sings at karaoke. As the chorus climbs, his jaw locks and his tongue pulls back. The sound goes thin and tight, and it does not get louder. After two songs his throat is tired.",
    outcome: 'squeezing', route: { D1: ['high'], H1: ['clamp'] },
    cues: { H1: ['his jaw locks and his tongue pulls back', 'it does not get louder'] },
    reason: { H1: 'His jaw and tongue clamp and the sound stays thin and tight: {cue:H1}.' } }
]);
