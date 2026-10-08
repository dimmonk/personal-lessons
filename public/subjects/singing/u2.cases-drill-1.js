// Singing, Unit Two: drill stories, the piece stage. It gives the unit's one question alone, on a new story. Each story is
// still marked for the first question as well, so that the same story can be asked the whole way later. A story whose
// answer is "nothing is wrong" is in this stage too, so that not every story is a problem. Field guide: see u2.cases-teach-1.js.

FC.cases('singing', 'u2', [

  /* ---------- the piece stage: the unit's question alone ---------- */
  { id: 'h-p-light-choir', use: 'drill', tier: 'clean', setting: 'choir', topic: 'a soft high line in the alto part',
    text: "Greta, 54, sings alto in her choir. The last line of the song climbs, and at the top her voice goes light and thin, and the note comes out clean. Her jaw stays loose. She wonders whether she is doing something wrong because it sounds so quiet.",
    outcome: 'lighttop', route: { D1: ['high'], H1: ['light'] },
    cues: { D1: 'The last line of the song climbs', H1: ['at the top her voice goes light and thin, and the note comes out clean', 'Her jaw stays loose'] },
    reason: { D1: 'The line climbs and the top is what Greta wonders about: {cue:D1}.',
              H1: 'Her top goes light and stays easy: {cue:H1}.' },
    not: { outcome: 'squeezing', why: 'Her sound is thin, but her jaw stays loose and nothing aches.' } },

  { id: 'h-p-push-car', use: 'drill', tier: 'clean', setting: 'car', topic: 'a ballad shouted in the car',
    text: "Wen sings along with a ballad in the car. As the chorus builds she gets louder and louder, her neck stands out, and the top note is a yell.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { D1: 'the top note is a yell', H1: ['she gets louder and louder, her neck stands out, and the top note is a yell'] },
    reason: { D1: 'The top note is where it goes wrong: {cue:D1}.',
              H1: 'The voice gets louder and louder until the top is a yell: {cue:H1}.' },
    not: { outcome: 'squeezing', why: 'Her neck is tight, but the sound keeps getting louder. Louder and tight together is pushing.' } },

  { id: 'h-p-crack-church', use: 'drill', tier: 'clean', setting: 'church', topic: 'the first verse of a hymn that flips',
    text: "Imani sings the first verse of a hymn in church. As the tune climbs, her voice suddenly flips into a thin, airy sound with a jolt on one note. The notes after it are there, just lighter.",
    outcome: 'cracking', route: { D1: ['high'], H1: ['flip'] },
    cues: { D1: 'As the tune climbs', H1: ['suddenly flips into a thin, airy sound with a jolt on one note', 'The notes after it are there'] },
    reason: { D1: 'The trouble starts as the tune climbs: {cue:D1}.',
              H1: 'The voice flips on one note, and the notes above it are there: {cue:H1}.' },
    not: { outcome: 'outofrange', why: 'The notes above the flip are there, so her voice has them.' } },

  { id: 'h-p-squeeze-home', use: 'drill', tier: 'clean', setting: 'home', topic: 'a new song where the throat locks',
    text: "Theo practices a new song at home. As the line climbs, his jaw locks and his throat tightens. The sound goes thin and strangled, not louder, and his throat feels tired afterward.",
    outcome: 'squeezing', route: { D1: ['high'], H1: ['clamp'] },
    cues: { D1: 'As the line climbs', H1: ['his jaw locks and his throat tightens', 'thin and strangled, not louder'] },
    reason: { D1: 'The trouble starts as the line climbs: {cue:D1}.',
              H1: 'His jaw and throat lock and the sound goes thin without getting louder: {cue:H1}.' },
    not: { outcome: 'pushing', why: 'The sound does not get louder, which a shout would. The throat just locks.' } },

  { id: 'h-p-squeeze-kids', use: 'drill', tier: 'clean', setting: 'kids', topic: 'a rhyme with the nephews where the tongue pulls back',
    text: "Leah sings a rhyme with her nephews. When the tune goes up, her tongue pulls back and her throat clamps. The sound goes thin and tight, not louder, and her throat aches afterward.",
    outcome: 'squeezing', route: { D1: ['high'], H1: ['clamp'] },
    cues: { D1: 'When the tune goes up', H1: ['her tongue pulls back and her throat clamps', 'thin and tight, not louder'] },
    reason: { D1: 'The trouble starts when the tune goes up: {cue:D1}.',
              H1: 'Her tongue and throat clamp and the sound goes thin and tight: {cue:H1}.' },
    not: { outcome: 'cracking', why: 'The sound goes thin and tight, with no sudden flip into an airy sound.' } },

  { id: 'h-p-oor-choir', use: 'drill', tier: 'clean', setting: 'choir', topic: 'a new choir song that sits too high',
    text: "Walt, who is 68, joins a choir that starts a new song whose last chorus sits very high. He tries the top note lightly, with his throat loose, and it is not there. He tries again, and it still is not there.",
    outcome: 'outofrange', route: { D1: ['high'], H1: ['missing'] },
    cues: { D1: 'whose last chorus sits very high', H1: ['He tries the top note lightly, with his throat loose, and it is not there', 'it still is not there'] },
    reason: { D1: 'The trouble is the very high last chorus: {cue:D1}.',
              H1: 'He tried it lightly with a loose throat, twice, and the note is not there: {cue:H1}.' },
    not: { outcome: 'squeezing', why: 'His throat is loose, not clamped. The note is missing even when it is loose.' } },

  { id: 'h-p-light-kids', use: 'drill', tier: 'varied', setting: 'kids', topic: 'a nursery rhyme with a small, light top',
    text: "Nia sings a nursery rhyme to her son. At the highest word her voice goes light and thin, and the word comes out clean, with nothing tight in her throat. To her it sounds too small.",
    outcome: 'lighttop', route: { D1: ['high'], H1: ['light'] },
    cues: { D1: 'At the highest word', H1: ['her voice goes light and thin, and the word comes out clean', 'nothing tight in her throat'] },
    reason: { D1: 'The top word is what Nia doubts: {cue:D1}.',
              H1: 'Her top is light and clean, with nothing tight: {cue:H1}.' },
    not: { outcome: 'outofrange', why: 'The word is there. It is only quiet.' } },

  { id: 'h-p-push-openmic', use: 'drill', tier: 'varied', setting: 'openmic', topic: 'an open mic song shouted at the top',
    text: "Cody, 22, sings at an open mic. As his song climbs, he gets louder and louder and his jaw tightens. The top note is a shout.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { D1: 'As his song climbs', H1: ['he gets louder and louder and his jaw tightens', 'The top note is a shout'] },
    reason: { D1: 'The trouble starts as his song climbs: {cue:D1}.',
              H1: 'He gets louder and louder, his jaw tightens, and the top is a shout: {cue:H1}.' },
    not: { outcome: 'lighttop', why: 'A light top gets lighter as it climbs. His gets louder and tighter.' } }
]);
