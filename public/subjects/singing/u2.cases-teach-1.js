// Singing, Unit Two: stories shown inside cards, part one: the two term stories, the first four names (a light, easy top,
// pushing, cracking, squeezing) with their look-alike pairs, and the first named exception (a tight throat that is also
// getting louder, which the question gives to pushing).
// use: 'teach' = shown in a card with its reasoning; neither teach nor check stories may appear in the drill.
// A story used only by a term card has text and nothing else: no question is asked of it.
// route is { D1: [...], H1: [...] }: every story of this unit starts where the line climbs (the first question's answer),
// and the unit's own question, what happens at the top, gives the name. cues.H1 is the exact words that show it.
// Every person and song is invented. Stories are written the way a singer would tell them.

FC.cases('singing', 'u2', [

  /* ---------- the two term stories (no name is asked of them) ---------- */
  { id: 'h-t-chest', use: 'teach', tier: 'clean', setting: 'car', topic: 'a low hum felt in the chest', name: 'The low hum',
    text: "Dolores hums low notes along with the radio on the way to school. At a red light she rests a hand on her chest and feels it buzz. Then she says “Good morning” to her son in the back seat, and her hand feels the same buzz." },

  { id: 'h-t-head', use: 'teach', tier: 'clean', setting: 'kids', topic: 'a bedtime lullaby that goes light at the top', name: 'The bedtime song',
    text: "At bedtime Nora sings a lullaby to her daughter. The tune climbs, and on the highest notes her voice turns light and thin, with no push behind it. She can feel the sound ringing up behind her nose and forehead instead of in her chest." },

  /* ---------- A light, easy top ---------- */
  { id: 'h-lighttop-meet', use: 'teach', tier: 'clean', setting: 'car', topic: 'a slow song in the car, light at the top', name: 'The weak-feeling top',
    text: "Mina sings along with a slow song in the car. When the line climbs to its highest note, her voice goes lighter and thinner than it was on the low notes, and the note comes out clean. Her neck stays loose and nothing aches. To her it feels weak, but her friend in the back seat says it sounds lovely.",
    outcome: 'lighttop', route: { D1: ['high'], H1: ['light'] },
    cues: { H1: ['her voice goes lighter and thinner than it was on the low notes, and the note comes out clean', 'Her neck stays loose and nothing aches'] } },

  /* ---------- Pushing the top notes ---------- */
  { id: 'h-pushing-meet', use: 'teach', tier: 'clean', setting: 'party', topic: 'a loud song at a party, shouted at the top', name: 'The party shout',
    text: "At a party, Dale sings along to a loud song with his friends. The song climbs, and he gets louder with every line. By the top note his neck is tight and his face is red, and the note comes out as a shout. It does not flip into a thin voice; it just gets bigger and harder.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { H1: ['he gets louder with every line', 'his neck is tight and his face is red, and the note comes out as a shout'] } },

  /* the pair people confuse most: the same person, the same line, once light and once shouted */
  { id: 'h-lk-tomas-light', use: 'teach', tier: 'clean', setting: 'shower', topic: 'a closing line sung light in the shower',
    text: "Tomas sings the closing line of his favorite song in the shower. The line climbs to its highest note. At the top he lets his voice go light, almost like a sigh, and the note comes out clean. His neck stays loose.",
    outcome: 'lighttop', route: { D1: ['high'], H1: ['light'] },
    cues: { H1: ['he lets his voice go light, almost like a sigh', 'His neck stays loose'] } },

  { id: 'h-lk-tomas-push', use: 'teach', tier: 'clean', setting: 'shower', topic: 'a closing line shouted in the shower',
    text: "Tomas sings the closing line of his favorite song in the shower. The line climbs to its highest note. At the top he gets louder and louder until the note is a shout. His neck is tight.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { H1: ['he gets louder and louder until the note is a shout', 'His neck is tight'] } },

  /* ---------- Cracking ---------- */
  { id: 'h-cracking-meet', use: 'teach', tier: 'clean', setting: 'home', topic: 'a ballad that flips on one note at home', name: 'The flip',
    text: "Sara sings along to a ballad at home. Her voice is full and strong as the line climbs, until one note, where it suddenly flips into a thin, airy sound with a little jolt. The notes after the flip are there, just light. When the line comes back down, her voice is full again.",
    outcome: 'cracking', route: { D1: ['high'], H1: ['flip'] },
    cues: { H1: ['suddenly flips into a thin, airy sound with a little jolt', 'The notes after the flip are there'] } },

  /* the second pair: the same person, the same chorus, once smooth and once with a jolt */
  { id: 'h-lk-beatriz-light', use: 'teach', tier: 'clean', setting: 'home', topic: 'a chorus that changes smoothly into the lighter voice',
    text: "Beatriz practices the chorus of a song she loves at home. The chorus climbs through the middle of her voice. As it does, her voice slides smoothly into a lighter sound, and nothing jolts. The top note is clean.",
    outcome: 'lighttop', route: { D1: ['high'], H1: ['light'] },
    cues: { H1: ['slides smoothly into a lighter sound, and nothing jolts'] } },

  { id: 'h-lk-beatriz-crack', use: 'teach', tier: 'clean', setting: 'home', topic: 'a chorus that jolts into the lighter voice',
    text: "Beatriz practices the chorus of a song she loves at home. The chorus climbs through the middle of her voice. As it does, her voice flips on one note into a thin, airy sound, with a little jolt. The top note is there, just light.",
    outcome: 'cracking', route: { D1: ['high'], H1: ['flip'] },
    cues: { H1: ['flips on one note into a thin, airy sound, with a little jolt', 'The top note is there'] } },

  /* ---------- Squeezing ---------- */
  { id: 'h-squeezing-meet', use: 'teach', tier: 'clean', setting: 'openmic', topic: 'an open mic song where the jaw locks', name: 'The locked jaw',
    text: "Joel sings at an open mic, a song that climbs toward its chorus. As the line goes up, his throat clamps and his jaw locks. The sound goes thin and tight, but not louder. When he finishes, his throat aches.",
    outcome: 'squeezing', route: { D1: ['high'], H1: ['clamp'] },
    cues: { H1: ['his throat clamps and his jaw locks', 'The sound goes thin and tight, but not louder', 'his throat aches'] } },

  /* ---------- the exception: a tight throat that is also getting louder ---------- */
  { id: 'h-exc-clamp', use: 'teach', tier: 'misleading', setting: 'choir', topic: 'a choir tenor louder and tighter at the last chorus', name: 'The loud, tight choir line', also: ['clamp'],
    text: "Marcus sings in a community choir, and the line climbs for the last chorus. He gets louder and louder to be heard over the others. At the top his throat clamps and the sound goes tight. The next morning his throat aches.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { H1: ['He gets louder and louder to be heard over the others'] },
    segments: [
      { text: 'Marcus sings in a community choir, and the line climbs for the last chorus', note: 'That is the setting and where the top is. It does not say what his voice does there.' },
      { text: 'He gets louder and louder to be heard over the others' },
      { text: 'At the top his throat clamps and the sound goes tight', note: 'This is why it looks like {o:squeezing}. A tight throat shows up in both, so it cannot settle which this is.' },
      { text: 'The next morning his throat aches', note: 'A sore throat shows up in both too, so it settles nothing.' }
    ] }
]);
