// Singing: specimens for "Name a case" (lesson standard E13), one clean story for every name in the key, the fine ones
// included. Each is written to "you", carries marked words and a reason for both questions on its route, the nearest wrong
// name, and what would make it a different name. The first question's fifth answer has no name, so it has no specimen
// (docs/rebuild/singing-plan.md, gaps 3). Written by the unit that teaches each name, in unit order; every story is clean,
// so look-alike names sit next to each other inside each unit's group. Specimens are never used for returns.

// Singing, Unit Two: one clean specimen for each name this unit teaches, to be assembled into specimens.js afterward.
// Written to "you". Every specimen carries marked words and a reason for both questions, the nearest wrong name, and what
// would make it a different name. Topics differ from every story of this unit with the same name.
FC.specimens('singing', [
  { id: 'sp-lighttop', tier: 'clean', setting: 'home', topic: 'a favorite song sung over the dishes',
    text: "You sing along to your favorite song while you wash the dishes. When the line climbs to its highest note, your voice goes lighter and thinner than it was on the low notes, and the note comes out clean. Your neck stays loose and nothing aches. It feels weak to you, and you wonder whether something is wrong with your voice.",
    outcome: 'lighttop', route: { D1: ['high'], H1: ['light'] },
    cues: { D1: 'you wonder whether something is wrong with your voice',
            H1: ['your voice goes lighter and thinner than it was on the low notes, and the note comes out clean', 'Your neck stays loose and nothing aches'] },
    reason: { D1: 'The top of the line is what you doubt: {cue:D1}.',
              H1: 'Your top goes light and stays easy: {cue:H1}.' },
    not: { outcome: 'pushing', why: 'Your voice gets lighter as the line climbs, not louder, and your neck stays loose.' },
    wouldChange: 'If you had gotten louder and your neck had tightened until the note was a shout, it would be {o:pushing}.' },

  { id: 'sp-pushing', tier: 'clean', setting: 'car', topic: 'a rock song shouted with the windows down',
    text: "You drive with the windows down, singing a rock song at the top of your voice. The chorus climbs, and you get louder and louder, your neck tight and your face hot. The top note comes out as a shout, and you do not like how it sounds.",
    outcome: 'pushing', route: { D1: ['high'], H1: ['shout'] },
    cues: { D1: 'The chorus climbs',
            H1: ['you get louder and louder, your neck tight and your face hot', 'The top note comes out as a shout'] },
    reason: { D1: 'The trouble starts as the chorus climbs: {cue:D1}.',
              H1: 'You get louder and louder, your neck tightens, and the top is a shout: {cue:H1}.' },
    not: { outcome: 'squeezing', why: 'Your voice keeps getting louder. A clamp would go thin and tight without getting louder.' },
    wouldChange: 'If the sound had gone thin and tight without getting louder, it would be {o:squeezing}.' },

  { id: 'sp-cracking', tier: 'clean', setting: 'choir', topic: 'a rehearsal where the voice jumps on one note',
    text: "You are at choir rehearsal. As your line climbs, your voice suddenly flips on one note into a thin, airy sound, with a jolt. The notes after the flip are there, just light, and the conductor smiles and asks you to try it again.",
    outcome: 'cracking', route: { D1: ['high'], H1: ['flip'] },
    cues: { D1: 'As your line climbs',
            H1: ['your voice suddenly flips on one note into a thin, airy sound, with a jolt', 'The notes after the flip are there'] },
    reason: { D1: 'The trouble starts as your line climbs: {cue:D1}.',
              H1: 'Your voice flips with a jolt, and the notes after it are there: {cue:H1}.' },
    not: { outcome: 'outofrange', why: 'The notes after the flip are there, so your voice has them.' },
    wouldChange: 'If the next note were still not there when you sang it lightly, it would be {o:outofrange}.' },

  { id: 'sp-squeezing', tier: 'clean', setting: 'home', topic: 'a new song learned from a video',
    text: "You are learning a new song at home from a video. As the line goes up, your throat clamps and your jaw locks. The sound goes thin and tight, not louder, and your throat feels tired when you stop.",
    outcome: 'squeezing', route: { D1: ['high'], H1: ['clamp'] },
    cues: { D1: 'As the line goes up',
            H1: ['your throat clamps and your jaw locks', 'thin and tight, not louder'] },
    reason: { D1: 'The trouble starts as the line goes up: {cue:D1}.',
              H1: 'Your throat and jaw lock, and the sound goes thin without getting louder: {cue:H1}.' },
    not: { outcome: 'pushing', why: 'The sound does not get louder, which a shout would.' },
    wouldChange: 'If the sound had also gotten louder and louder, it would be {o:pushing}.' },

  { id: 'sp-outofrange', tier: 'clean', setting: 'party', topic: 'a wedding song that sits above your voice',
    text: "You pick a song to sing at your sister’s wedding party. The chorus sits very high. You try the top note lightly, with your throat loose, and it is not there; you try again, and it still is not there.",
    outcome: 'outofrange', route: { D1: ['high'], H1: ['missing'] },
    cues: { D1: 'The chorus sits very high',
            H1: ['You try the top note lightly, with your throat loose, and it is not there', 'you try again, and it still is not there'] },
    reason: { D1: 'The trouble is how high the chorus sits: {cue:D1}.',
              H1: 'You tried the note lightly with a loose throat, twice, and it is not there: {cue:H1}.' },
    not: { outcome: 'pushing', why: 'You do not push for the note. You try it lightly, and it is missing.' },
    wouldChange: 'If the note had come out when you sang it lightly, the song would fit your voice today.' }
]);

// Singing: specimens written by Unit Three (the air). One clean specimen per name the unit teaches (five), to be merged into
// public/subjects/singing/specimens.js once the other units' specimens are written. A specimen is a story written to "you",
// with the route, the marked words and the reason for both questions on its route, and the nearest wrong name.
// Each topic differs from every story of the same name in u3.cases-*.js.

FC.specimens('singing', [
  { id: 'sp-breathfine', tier: 'clean', setting: 'karaoke', topic: 'a long karaoke chorus you doubt yourself on',
    text: "You are about to sing a long chorus at karaoke, and you are sure you will run out of breath, because it has happened before. While you wait for your turn you put a hand on your belly and breathe in: it moves out, your shoulders stay down, and nobody could hear the breath. You sing the whole chorus and still have air left at the end of the last line.",
    outcome: 'breathfine', route: { D1: ['breath'], B1: ['lasts'] },
    cues: { D1: 'you are sure you will run out of breath',
            B1: ['it moves out, your shoulders stay down, and nobody could hear the breath', 'still have air left at the end of the last line'] },
    reason: { D1: 'You doubt your breath: {cue:D1}. That is a question about the air.',
              B1: 'Your belly moved out, your shoulders stayed down, and you had air left: {cue:B1}.' },
    not: { outcome: 'shallowbreath', why: 'Nothing lifted here: your shoulders stayed down and nobody could hear the breath, so it was not a quick, noisy gasp.' },
    wouldChange: 'If your shoulders had jumped up with the breath and the air had run out before the end, the name would be {o:shallowbreath}.' },

  { id: 'sp-shallowbreath', tier: 'clean', setting: 'openmic', topic: 'a nervous first verse at an open mic',
    text: "You are nervous at an open mic. Before your first verse you take a quick, noisy gasp, and your shoulders jump up toward your ears. The first long line comes out squeezed, and the air is gone before you reach the last word.",
    outcome: 'shallowbreath', route: { D1: ['breath'], B1: ['gone'] },
    cues: { D1: 'the air is gone before you reach the last word',
            B1: ['you take a quick, noisy gasp, and your shoulders jump up toward your ears', 'the air is gone before you reach the last word'] },
    reason: { D1: 'The air gives out before the line ends: {cue:D1}. That is a problem with the air.',
              B1: 'Your breath was a quick gasp that lifted your shoulders, and the air was gone early: {cue:B1}.' },
    not: { outcome: 'unplanned', why: 'The breath itself was the problem, a gasp with the shoulders up. It was not a full, low breath taken in the wrong place.' },
    wouldChange: 'If the breath had been low and full, and you had taken it in the middle of a word, the name would be {o:unplanned}.' },

  { id: 'sp-unplanned', tier: 'clean', setting: 'shower', topic: 'a long wedding song with no plan for breathing',
    text: "In the shower you sing a long wedding song you have just learned. Every breath you take is low and full, with your belly out and your shoulders still. But you breathe only when you run out, so one lands in the middle of 'together' and another in the middle of 'forever', and you have never marked where to breathe.",
    outcome: 'unplanned', route: { D1: ['breath'], B1: ['grabbed'] },
    cues: { D1: "one lands in the middle of 'together'",
            B1: ['Every breath you take is low and full, with your belly out and your shoulders still', 'you breathe only when you run out'] },
    reason: { D1: 'A breath lands in the middle of a word: {cue:D1}. That is a problem with the air.',
              B1: 'Your breaths were low and full, but you took them only when you ran out: {cue:B1}.' },
    not: { outcome: 'shallowbreath', why: 'Your breaths were low and full with the shoulders still, so the breath itself was fine. The trouble was where you took it.' },
    wouldChange: 'If you had marked a breath at each comma and taken it there, you would have air left at the end, and the name would be {o:breathfine}.' },

  { id: 'sp-airytone', tier: 'clean', setting: 'karaoke', topic: 'a slow song where your voice turns to a whisper',
    text: "You sing a slow song at karaoke, and your voice keeps turning into a whisper. You breathe in low and quietly, but you can hear air hissing out along with every note, and the air is gone after two lines. You did not mean it to sound that way.",
    outcome: 'airytone', route: { D1: ['breath'], B1: ['leak'] },
    cues: { D1: 'the air is gone after two lines',
            B1: ['you can hear air hissing out along with every note', 'your voice keeps turning into a whisper'] },
    reason: { D1: 'The air gives out fast: {cue:D1}. That is a problem with the air.',
              B1: 'Your breath was low and quiet, but air hissed out with a whispery sound: {cue:B1}.' },
    not: { outcome: 'forcing', why: 'Nothing was shoved. The air leaked out softly, and the sound was a whisper, not loud and harsh.' },
    wouldChange: 'If you had sung one soft line as a whisper on purpose, it would be a choice, and nothing would need fixing.' },

  { id: 'sp-forcing', tier: 'clean', setting: 'openmic', topic: 'a rock song pushed to be heard over the band',
    text: "At an open mic you sing a rock song and want to be heard over the band. You drive the air out hard on every line, the sound is loud and harsh, and your throat is tired before the second song.",
    outcome: 'forcing', route: { D1: ['breath'], B1: ['force'] },
    cues: { D1: 'You drive the air out hard on every line',
            B1: ['You drive the air out hard on every line, the sound is loud and harsh', 'your throat is tired'] },
    reason: { D1: 'The air is driven out hard: {cue:D1}. That is a problem with the air.',
              B1: 'You shoved the air out and the sound was loud and harsh: {cue:B1}.' },
    not: { outcome: 'airytone', why: 'The sound was loud and harsh, not soft and whispery, and no air hissed through it.' },
    wouldChange: 'If you had gasped in fast with your shoulders up before the shove, the name would be {o:shallowbreath}.' }
]);

// Singing: specimens for Unit Four (whether you are on the note), one clean specimen for each name it teaches. Written to "you".
// To be assembled into public/subjects/singing/specimens.js with the other units' specimens.
// Each specimen's topic differs from every story of the same name in u4 (V52). Each carries marked words and a reason for the
// first question and for the unit's question, a nearest wrong name that is a ledger neighbor, and what would change the name.

FC.specimens('singing', [
  { id: 'sp-onnote', tier: 'clean', setting: 'choir', topic: 'a tenor line that sounded off on a rehearsal recording',
    text: "You sing the tenor line in your choir, and on a rehearsal recording the second line sounds off to you. You play that line's first note on a piano app, hold it, and sing yours beside it. The two sound like one note, and you do not have to slide at all.",
    outcome: 'onnote', route: { D1: ['pitch'], P1: ['match'] },
    cues: { D1: 'the second line sounds off to you',
            P1: ['You play that line\'s first note on a piano app, hold it, and sing yours beside it', 'The two sound like one note, and you do not have to slide at all'] },
    reason: { D1: 'What you doubt is the note itself: {cue:D1}. Nothing is said about the top notes, the air, or the sound of your words.',
              P1: '{t:notecheck} showed nothing to fix: {cue:P1}.' },
    not: { outcome: 'flat', why: 'The recording made the line sound low to you, but you did not have to slide up. The check found no gap.' },
    wouldChange: 'If you had needed to slide up to meet the piano app’s note, the answer would be {a:P1.under}.' },

  { id: 'sp-flat', tier: 'clean', setting: 'kids', topic: 'a nursery song at the end of a long day',
    text: "At the end of a long day you sing a nursery song to your kids, and the last line sounds low to you. You play its note on a piano app, hold it, and sing yours beside it. Yours is a little lower, and you have to slide up to meet it.",
    outcome: 'flat', route: { D1: ['pitch'], P1: ['under'] },
    cues: { D1: 'the last line sounds low to you',
            P1: ['You play its note on a piano app, hold it, and sing yours beside it', 'Yours is a little lower, and you have to slide up to meet it'] },
    reason: { D1: 'What you doubt is the note: {cue:D1}. It is not about the top notes, the air, or the sound of your words.',
              P1: 'You had to slide up to reach the piano app’s note, so yours was under it: {cue:P1}.' },
    not: { outcome: 'onnote', why: 'The line did not only sound low. The check showed a gap, and you had to slide up to close it.' },
    wouldChange: 'If the two had sounded the same, the answer would be {a:P1.match}, and if you had had to slide down, {a:P1.over}.' },

  { id: 'sp-sharp', tier: 'clean', setting: 'party', topic: 'a party song sung with a tight jaw',
    text: "You are asked to sing at a party, and your jaw is tight the whole song. A friend says it sounded a bit off, so you play the song's first note on a piano app, hold it, and sing yours beside it. Yours is a little higher, and you have to slide down to meet it.",
    outcome: 'sharp', route: { D1: ['pitch'], P1: ['over'] },
    cues: { D1: 'A friend says it sounded a bit off',
            P1: ['you play the song\'s first note on a piano app, hold it, and sing yours beside it', 'Yours is a little higher, and you have to slide down to meet it'] },
    reason: { D1: 'What a friend questions is the note itself: {cue:D1}. Nothing is said about the top notes, the air, or the sound of your words.',
              P1: 'You had to slide down to reach the piano app’s note, so yours was over it: {cue:P1}.' },
    not: { outcome: 'flat', why: 'You slid down, not up. A note under the song’s note would need a slide up.' },
    wouldChange: 'If you had had to slide up to meet the piano app’s note, the answer would be {a:P1.under}.' },

  { id: 'sp-scooping', tier: 'clean', setting: 'openmic', topic: 'the first note of every line at an open mic',
    text: "You wonder whether your notes are right, so you record your song at an open mic. On the playback, the first note of every line starts underneath and slides up until it reaches the right place, so each line begins a little late.",
    outcome: 'scooping', route: { D1: ['pitch'], P1: ['slide'] },
    cues: { D1: 'You wonder whether your notes are right',
            P1: ['the first note of every line starts underneath and slides up until it reaches the right place', 'each line begins a little late'] },
    reason: { D1: 'What you doubt is whether the notes are right: {cue:D1}. The top notes, the air and the words are not the worry.',
              P1: 'Every line starts under and moves up into place, so the note arrives late: {cue:P1}.' },
    not: { outcome: 'flat', why: 'Your notes do reach the right place. A note that was low would stay low.' },
    wouldChange: 'If the first note of each line had started steady and stayed a little low, the answer would be {a:P1.under}.' },

  { id: 'sp-guessing', tier: 'clean', setting: 'car', topic: 'a radio song joined from the first word',
    text: "In the car a song comes on the radio, and you sing along from the first word, though you are not sure how the first line goes. You start with no note in your head, and your voice wanders until it finds one.",
    outcome: 'guessing', route: { D1: ['pitch'], P1: ['hunt'] },
    cues: { D1: 'you are not sure how the first line goes',
            P1: ['You start with no note in your head', 'your voice wanders until it finds one'] },
    reason: { D1: 'What you doubt is the notes of the first line: {cue:D1}. It is not the top notes, the air, or the sound of the words.',
              P1: 'No note was in your head, and your voice went looking for one: {cue:P1}.' },
    not: { outcome: 'scooping', why: 'Your voice does not slide into a note you know. It wanders because no note is in your head.' },
    wouldChange: 'If you had heard the first note in your head and then slid up into it, the answer would be {a:P1.slide}.' }
]);

// Singing: specimens for Unit Five (how the words sound when they come out): one clean specimen for every name the unit
// teaches, the voice from outside included. Each is written to "you", carries marked words and a reason for both questions on
// its route (the first question and the unit's own), the nearest wrong name, and what would make it a different name.
// To be merged into public/subjects/singing/specimens.js with the other units' specimens (order: clean, then varied, then
// misleading, with look-alike names next to each other).

FC.specimens('singing', [
  { id: 'sp-recorded', tier: 'clean', setting: 'home', topic: 'a birthday song recorded for your grandmother',
    text: "You sing a birthday song for your grandmother and record it on a tablet to send to her. Your notes are right and your breath lasts the whole song. When you play it back, you hardly recognize the voice: it sounds thin and high. Your mouth opens easily as you sing, every word is clear, and when you hold your nose shut on an “ah” the sound hardly changes.",
    outcome: 'recorded', route: { D1: ['tone'], T1: ['strange'] },
    cues: { D1: 'Your notes are right and your breath lasts the whole song',
            T1: ['it sounds thin and high', 'every word is clear'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The sound is what bothers you.',
              T1: 'Your only surprise is the playback, and the words are clear: {cue:T1}.' },
    not: { outcome: 'nasal', why: 'Holding your nose shut changes the sound little, so it is not going through your nose. The thin sound shows up on the recording only.' },
    wouldChange: 'If holding your nose shut changed the sound a lot, the answer would be {o:nasal}; if the words ran together on the recording, it would be {o:mumbled}.' },

  { id: 'sp-nasal', tier: 'clean', setting: 'kids', topic: 'a bedtime lullaby sung pinched to your toddler',
    text: "You sing a lullaby to your two-year-old at bedtime. Your notes are right and your breath lasts, but you hear that your voice is pinched, as if it comes out of your nose. You hold your nose shut and sing an “ah”: the sound changes a lot. Your mouth is open and the words are clear.",
    outcome: 'nasal', route: { D1: ['tone'], T1: ['pinched'] },
    cues: { D1: 'Your notes are right and your breath lasts',
            T1: ['you hear that your voice is pinched, as if it comes out of your nose', 'the sound changes a lot'] },
    reason: { D1: 'Nothing is wrong with the notes or the air: {cue:D1}. The sound is what is off.',
              T1: 'You hear the pinch while you sing, and holding your nose shut changes the sound a lot: {cue:T1}.' },
    not: { outcome: 'recorded', why: 'The pinch is there live, not only on a recording, and the nose check changes the sound a lot. A voice that is only strange on a recording would change little.' },
    wouldChange: 'If holding your nose shut changed the sound only a little, and you disliked it only on a recording, the answer would be {o:recorded}.' },

  { id: 'sp-muffled', tier: 'clean', setting: 'party', topic: 'a happy-birthday verse sung shyly',
    text: "At a party you are asked to sing a happy-birthday verse, and you do it shyly with your chin down. Your notes are right and your breath lasts, but your mouth barely opens. The sound is dull and stays back in your throat, and the people at the far end of the table cannot make out the words.",
    outcome: 'muffled', route: { D1: ['tone'], T1: ['dull'] },
    cues: { D1: 'Your notes are right and your breath lasts',
            T1: ['your mouth barely opens', 'The sound is dull and stays back in your throat'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The sound is what the far end of the table loses.',
              T1: 'Your mouth is nearly shut and the sound stays in your throat: {cue:T1}.' },
    not: { outcome: 'mumbled', why: 'The words are lost, but your mouth barely opens and the sound is dull. In {o:mumbled} the mouth is open and the sound is clear.' },
    wouldChange: 'If your mouth were wide open and the sound clear, with the word endings gone, the answer would be {o:mumbled}.' },

  { id: 'sp-mumbled', tier: 'clean', setting: 'openmic', topic: 'a story song at an open mic night',
    text: "You sing a story song at an open mic night. Your notes are right and your breath lasts. Your mouth is open and your voice is clear, but the ends of your words fade, and the audience cannot follow the story. A friend tries to write down the first line afterward and gets half of it.",
    outcome: 'mumbled', route: { D1: ['tone'], T1: ['blur'] },
    cues: { D1: 'Your notes are right and your breath lasts',
            T1: ['Your mouth is open and your voice is clear', 'the ends of your words fade'] },
    reason: { D1: 'Nothing is wrong with the notes or the air: {cue:D1}. The words are what the audience loses.',
              T1: 'The sound is open and clear, but the ends of your words fade: {cue:T1}.' },
    not: { outcome: 'muffled', why: 'Your mouth is open and the sound is clear, not dull. The small sounds at the ends of the words are what is missing.' },
    wouldChange: 'If your mouth barely opened and the sound were dull, the answer would be {o:muffled}.' }
]);

