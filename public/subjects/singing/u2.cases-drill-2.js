// Singing, Unit Two: drill stories, the whole-question stage, with the first question asked as well. Clean stories come
// first, then stories whose surface points the wrong way. echo names a teaching story of a DIFFERENT name that the story
// is built to bring back. A story where nothing is wrong is in the stage too. Field guide: see u2.cases-teach-1.js.

FC.cases('singing', 'u2', [

  /* ---------- clean ---------- */
  { id: 'h-r-light-karaoke', use: 'drill', tier: 'clean', setting: 'karaoke', topic: 'a slow karaoke song, light at the top',
    text: "Chloe sings a slow song at karaoke. The last line climbs, and at the top her voice goes light and thin and the note comes out clean. Her neck stays loose. She worries it sounds like she is not trying.",
    outcome: 'lighttop', route: { D1: ['high'], H1: ['light'] },
    cues: { D1: 'The last line climbs', H1: ['at the top her voice goes light and thin and the note comes out clean', 'Her neck stays loose'] },
    reason: { D1: 'The line climbs and Chloe is unsure of the top: {cue:D1}.',
              H1: 'The top goes light and stays easy: {cue:H1}.' },
    not: { outcome: 'pushing', why: 'The sound gets lighter as the line climbs, not louder, and her neck stays loose.' } },

  { id: 'h-r-push-home', use: 'drill', tier: 'clean', setting: 'home', topic: 'a guitar song shouted at the chorus',
    text: "Mateo plays his guitar and sings at home. The chorus climbs, and he gets louder and louder, his face red and his neck tight. The top note is a shout.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { D1: 'The chorus climbs', H1: ['he gets louder and louder, his face red and his neck tight', 'The top note is a shout'] },
    reason: { D1: 'The trouble starts as the chorus climbs: {cue:D1}.',
              H1: 'He gets louder and louder, his neck tightens, and the top is a shout: {cue:H1}.' },
    not: { outcome: 'cracking', why: 'There is no flip into a thin voice. It just gets louder and harder.' } },

  { id: 'h-r-crack-karaoke', use: 'drill', tier: 'clean', setting: 'karaoke', topic: 'a pop chorus that flips on one word',
    text: "Dana sings a pop song at karaoke. As the chorus climbs, her voice flips on one word into a thin, airy sound with a jolt. The notes above the flip are there, light but clear.",
    outcome: 'cracking', route: { D1: ['high'], H1: ['flip'] },
    cues: { D1: 'As the chorus climbs', H1: ['her voice flips on one word into a thin, airy sound with a jolt', 'The notes above the flip are there'] },
    reason: { D1: 'The trouble starts as the chorus climbs: {cue:D1}.',
              H1: 'Her voice jumps from {t:chest} to {t:head} with a jolt, and the notes above are there: {cue:H1}.' },
    not: { outcome: 'lighttop', why: 'The change to the lighter voice comes with a jolt, not smoothly.' } },

  { id: 'h-r-squeeze-car', use: 'drill', tier: 'clean', setting: 'car', topic: 'a car song where the throat clamps',
    text: "Omar, 19, sings along in the car. When the song goes up, his throat clamps and the sound goes thin and tight, not louder. His throat is sore by the end of the drive.",
    outcome: 'squeezing', route: { D1: ['high'], H1: ['clamp'] },
    cues: { D1: 'When the song goes up', H1: ['his throat clamps and the sound goes thin and tight, not louder', 'His throat is sore by the end of the drive'] },
    reason: { D1: 'The trouble starts when the song goes up: {cue:D1}.',
              H1: 'His throat locks and the sound stays thin instead of getting louder: {cue:H1}.' },
    not: { outcome: 'pushing', why: 'The sound does not get louder, which a shout would.' } },

  /* ---------- varied ---------- */
  { id: 'h-r-oor-party', use: 'drill', tier: 'varied', setting: 'party', topic: 'a whole song that sits too high for a party',
    text: "Lucia, 40, is asked to sing at a party. She picks a song and finds that every line of it sits so high that she strains on all of them, even singing softly with her throat relaxed.",
    outcome: 'outofrange', route: { D1: ['high'], H1: ['missing'] },
    cues: { D1: 'every line of it sits so high', H1: ['every line of it sits so high that she strains on all of them', 'even singing softly with her throat relaxed'] },
    reason: { D1: 'The trouble is how high the song sits: {cue:D1}.',
              H1: 'The whole song strains her even when she sings softly and relaxed: {cue:H1}.' },
    not: { outcome: 'pushing', why: 'She is not getting louder to reach the notes. She tried softly with a loose throat, and the song still sits too high.' } },

  { id: 'h-r-squeeze-choir', use: 'drill', tier: 'varied', setting: 'choir', topic: 'a tenor line where the throat locks',
    text: "Nate sings tenor in a choir. When his line goes up, his throat locks and his jaw tightens. The sound goes thin and strained, but it does not get louder, and his throat is tired after practice.",
    outcome: 'squeezing', route: { D1: ['high'], H1: ['clamp'] },
    cues: { D1: 'When his line goes up', H1: ['his throat locks and his jaw tightens', 'it does not get louder'] },
    reason: { D1: 'The trouble starts when his line goes up: {cue:D1}.',
              H1: 'His throat locks and the sound stays thin, not louder: {cue:H1}.' },
    not: { outcome: 'cracking', why: 'There is no sudden flip into an airy sound. The sound goes tight.' } },

  /* ---------- misleading ---------- */
  { id: 'h-r-light-party', use: 'drill', tier: 'misleading', setting: 'party', topic: 'a party song that gets a little fuller and stays easy', echo: 'h-pushing-meet',
    text: "At a party, Elise sings along to a loud song with her friends. When the song climbs, her voice goes lighter than it was on the low notes. She adds a little volume to be heard, and the note stays clean, with her neck loose. She worries that it sounds weak next to the music.",
    outcome: 'lighttop', route: { D1: ['high'], H1: ['light'] },
    cues: { D1: 'When the song climbs', H1: ['her voice goes lighter than it was on the low notes', 'the note stays clean, with her neck loose'] },
    reason: { D1: 'The trouble starts when the song climbs, and Elise doubts her top: {cue:D1}.',
              H1: 'Her top is {t:head}, lighter than her low notes, and it stays clean and easy: {cue:H1}. A little more volume is fine as long as nothing tightens.' },
    not: { outcome: 'pushing', why: 'She does add volume, but her neck stays loose and the note stays clean. Pushing gets louder and tighter and ends in a shout.' } },

  { id: 'h-r-push-church', use: 'drill', tier: 'misleading', setting: 'church', topic: 'a hymn meant to be light, shouted at the top', echo: 'h-lighttop-meet',
    text: "Noor decides to sing the top of a hymn in her light voice. But she cannot let go of her heavy voice: she gets louder and louder, her neck tightens, and the top note comes out as a strained shout. It sounds nothing like the light voice she meant.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { D1: 'the top of a hymn', H1: ['she gets louder and louder, her neck tightens, and the top note comes out as a strained shout'] },
    reason: { D1: 'The trouble is the top of the hymn: {cue:D1}.',
              H1: 'She meant it to be light, but her voice gets louder and her neck tightens: {cue:H1}.' },
    not: { outcome: 'lighttop', why: 'She meant it to be light, but what her voice does is get louder and tighter.' } },

  { id: 'h-r-crack-openmic', use: 'drill', tier: 'misleading', setting: 'openmic', topic: 'an original song that flips on one note', echo: 'h-exc-flip',
    text: "Alex sings an original song at an open mic. As the melody climbs, his voice flips into a thin, airy sound for one note. “That’s as high as I go,” he thinks. He sings the next note up lightly, and it comes out clear.",
    outcome: 'cracking', route: { D1: ['high'], H1: ['flip'] },
    cues: { D1: 'As the melody climbs', H1: ['his voice flips into a thin, airy sound for one note', 'He sings the next note up lightly, and it comes out clear'] },
    reason: { D1: 'The trouble starts as the melody climbs: {cue:D1}.',
              H1: 'The voice flips, but the note above it comes out: {cue:H1}. Believing it is out of reach does not change that.' },
    not: { outcome: 'outofrange', why: 'He tried the next note lightly and it came out, so the note is there.' } },

  { id: 'h-r-oor-karaoke', use: 'drill', tier: 'misleading', setting: 'karaoke', topic: 'a slow song whose highest note is missing', echo: 'h-lighttop-meet',
    text: "Kofi picks a slow song at karaoke. At the top his voice goes light and thin like it should, but the highest note is just not there. He tries it twice more, loose and easy, and it is still not there.",
    outcome: 'outofrange', route: { D1: ['high'], H1: ['missing'] },
    cues: { D1: 'At the top his voice goes light and thin like it should', H1: ['the highest note is just not there', 'He tries it twice more, loose and easy, and it is still not there'] },
    reason: { D1: 'The trouble is at the top of the song: {cue:D1}.',
              H1: 'The light sound is right, but the note itself is missing: {cue:H1}.' },
    not: { outcome: 'lighttop', why: 'The sound goes light like a good top, but the note is missing, and a good top comes out clean.' } }
]);
