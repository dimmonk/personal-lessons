// Singing, Unit Two: fresh stories held back for later days. Two for each name, because this is an action subject. A name that
// is due comes back as a story the learner has not seen, beside a story of the name they most often take it for. Every story
// carries marked words and a reason for both questions, because it is run as a whole.

FC.cases('singing', 'u2', [

  /* ---------- A light, easy top ---------- */
  { id: 'h-ret-light-openmic', use: 'return', tier: 'clean', setting: 'openmic', topic: 'a soft finish at an open mic',
    text: "Zoe sings a gentle song at an open mic. As the last line climbs, her voice thins out and softens, the top note stays clean, and her jaw is loose. She is sure it sounds weak, but the people up front are smiling.",
    outcome: 'lighttop', route: { D1: ['high'], H1: ['light'] },
    cues: { D1: 'As the last line climbs', H1: ['her voice thins out and softens, the top note stays clean', 'her jaw is loose'] },
    reason: { D1: 'Zoe is unsure of the top as the last line climbs: {cue:D1}.',
              H1: 'The top softens and stays clean, with a loose jaw: {cue:H1}.' },
    not: { outcome: 'outofrange', why: 'The top note is there and clean, only lighter than the low ones.' } },

  { id: 'h-ret-light-home', use: 'return', tier: 'varied', setting: 'home', topic: 'a love song hummed in the kitchen',
    text: "Luis, 72, sings a love song while he cooks. On the highest line his voice goes lighter and thinner, the note is clean, and his throat is relaxed. He wonders whether he should be singing it fuller.",
    outcome: 'lighttop', route: { D1: ['high'], H1: ['light'] },
    cues: { D1: 'On the highest line', H1: ['his voice goes lighter and thinner, the note is clean, and his throat is relaxed'] },
    reason: { D1: 'Luis doubts the sound of his highest line: {cue:D1}.',
              H1: 'The top is lighter and thinner but clean, with a relaxed throat: {cue:H1}.' },
    not: { outcome: 'squeezing', why: 'His sound is thin, but his throat is relaxed and nothing aches.' } },

  /* ---------- Pushing the top notes ---------- */
  { id: 'h-ret-push-church', use: 'return', tier: 'clean', setting: 'church', topic: 'the last verse of a hymn, sung out',
    text: "Grace wants to sing out on the last verse of a hymn. As the tune climbs, she gets louder and louder, her jaw tight, and the top note comes out as a shout.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { D1: 'As the tune climbs', H1: ['she gets louder and louder, her jaw tight, and the top note comes out as a shout'] },
    reason: { D1: 'The trouble starts as the tune climbs: {cue:D1}.',
              H1: 'The voice gets louder and the jaw tightens, and the top is a shout: {cue:H1}.' },
    not: { outcome: 'cracking', why: 'The voice does not flip into a thin sound. It stays heavy and gets louder.' } },

  { id: 'h-ret-push-karaoke', use: 'return', tier: 'varied', setting: 'karaoke', topic: 'a karaoke duet shouted to match the record',
    text: "Jun and his friends do a duet at karaoke. When the chorus lifts, Jun gets louder and louder to match the singer on the screen, his face red, and the top note is a shout.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { D1: 'When the chorus lifts', H1: ['Jun gets louder and louder to match the singer on the screen, his face red', 'the top note is a shout'] },
    reason: { D1: 'The trouble starts when the chorus lifts: {cue:D1}.',
              H1: 'He gets louder and louder, and the top is a shout: {cue:H1}.' },
    not: { outcome: 'outofrange', why: 'He never tries the note lightly, so nothing says it is out of reach.' } },

  /* ---------- Cracking ---------- */
  { id: 'h-ret-crack-kids', use: 'return', tier: 'clean', setting: 'kids', topic: 'a counting rhyme that flips on one note',
    text: "Tess sings a counting rhyme with her class. As the rhyme climbs, her voice suddenly flips on one note into a thin, airy sound with a jolt. The notes after the flip are there, just light.",
    outcome: 'cracking', route: { D1: ['high'], H1: ['flip'] },
    cues: { D1: 'As the rhyme climbs', H1: ['suddenly flips on one note into a thin, airy sound with a jolt', 'The notes after the flip are there'] },
    reason: { D1: 'The trouble starts as the rhyme climbs: {cue:D1}.',
              H1: 'The voice flips with a jolt, and the notes after it are there: {cue:H1}.' },
    not: { outcome: 'lighttop', why: 'The change to the lighter voice comes with a jolt, not smoothly.' } },

  { id: 'h-ret-crack-party', use: 'return', tier: 'varied', setting: 'party', topic: 'a love song that jumps on the way to the chorus',
    text: "Jo sings a love song at a friend’s party. On the way up to the chorus her voice flips into a thin, airy sound for one note, with a gap before it, and the next note is there, thin but clear. Her throat feels fine afterward.",
    outcome: 'cracking', route: { D1: ['high'], H1: ['flip'] },
    cues: { D1: 'On the way up to the chorus', H1: ['her voice flips into a thin, airy sound for one note, with a gap before it', 'the next note is there, thin but clear'] },
    reason: { D1: 'The trouble comes on the way up to the chorus: {cue:D1}.',
              H1: 'The voice flips with a gap, and the next note is there: {cue:H1}.' },
    not: { outcome: 'squeezing', why: 'The thin sound is airy and sudden, not tight, and her throat feels fine.' } },

  /* ---------- Squeezing ---------- */
  { id: 'h-ret-squeeze-shower', use: 'return', tier: 'clean', setting: 'shower', topic: 'a shower chorus where the throat clamps',
    text: "Ingrid sings in the shower. As the chorus climbs, her throat clamps and her jaw locks. The sound goes thin and tight, not louder. Her throat is tired for the rest of the day.",
    outcome: 'squeezing', route: { D1: ['high'], H1: ['clamp'] },
    cues: { D1: 'As the chorus climbs', H1: ['her throat clamps and her jaw locks', 'thin and tight, not louder'] },
    reason: { D1: 'The trouble starts as the chorus climbs: {cue:D1}.',
              H1: 'Her throat and jaw lock, and the sound goes thin without getting louder: {cue:H1}.' },
    not: { outcome: 'pushing', why: 'The sound does not get louder, which a shout would.' } },

  { id: 'h-ret-squeeze-party', use: 'return', tier: 'varied', setting: 'party', topic: 'a song for a friend where the tongue pulls back',
    text: "Beck sings a song for a friend at a party. When the song goes up, his tongue pulls back and his throat clamps, and the sound goes thin and strangled. It does not get louder, and his throat aches the next morning.",
    outcome: 'squeezing', route: { D1: ['high'], H1: ['clamp'] },
    cues: { D1: 'When the song goes up', H1: ['his tongue pulls back and his throat clamps', 'It does not get louder'] },
    reason: { D1: 'The trouble starts when the song goes up: {cue:D1}.',
              H1: 'His tongue and throat clamp, and the sound stays thin, not louder: {cue:H1}.' },
    not: { outcome: 'outofrange', why: 'The trouble the story shows is a clamped throat. Nothing says the note is missing when the throat is loose.' } },

  /* ---------- Out of your range ---------- */
  { id: 'h-ret-oor-kids', use: 'return', tier: 'clean', setting: 'kids', topic: 'a camp song whose chorus sits too high',
    text: "Marisol sings a song to the kids at camp, and the chorus sits very high. She tries the top note lightly, with her throat relaxed, and it is not there. She tries a second time, and it is still not there.",
    outcome: 'outofrange', route: { D1: ['high'], H1: ['missing'] },
    cues: { D1: 'the chorus sits very high', H1: ['She tries the top note lightly, with her throat relaxed, and it is not there', 'it is still not there'] },
    reason: { D1: 'The trouble is how high the chorus sits: {cue:D1}.',
              H1: 'She tried it lightly and relaxed, twice, and the note is not there: {cue:H1}.' },
    not: { outcome: 'pushing', why: 'She does not push for the note. She tries it lightly, and it is missing.' } },

  { id: 'h-ret-oor-home', use: 'return', tier: 'varied', setting: 'home', topic: 'a whole birthday song that sits too high',
    text: "Yusuf, 16, practices his mother’s favorite song at home for her birthday. Every line of it sits so high that even the quiet verses strain him, however relaxed he keeps his throat.",
    outcome: 'outofrange', route: { D1: ['high'], H1: ['missing'] },
    cues: { D1: 'sits so high', H1: ['Every line of it sits so high that even the quiet verses strain him', 'however relaxed he keeps his throat'] },
    reason: { D1: 'The trouble is how high the song sits: {cue:D1}.',
              H1: 'Every line strains him even with a relaxed throat: {cue:H1}.' },
    not: { outcome: 'squeezing', why: 'He keeps his throat relaxed, so it is not a clamp. The song itself sits too high.' } }
]);
