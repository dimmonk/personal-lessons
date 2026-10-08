// Singing, Unit One: drill stories for the first stage (the first question on its own, one story at a time, on clean
// stories). Every drill story is new: none of them appears in a card. Each carries the words that decide the question
// (cues.D1), the reason for its answer (reason.D1) and `not`: the nearest wrong answer, which shares a pair with the
// right one, and why it fails here. Two stories for each kind, and two where nothing is wrong. These stories, with the
// second-stage stories and the return stories, are the bank that later units draw their earlier-unit items from.

FC.cases('singing', 'u1', [
  { id: 'g-fine-hymn', use: 'drill', tier: 'clean', setting: 'church', topic: 'a hymn and the soloist’s voice',
    text: "Lena sings a hymn with the church choir. Her notes are right, her throat is loose, her breath lasts and every word is clear. After the service she says she wishes she had the soloist's rich voice.",
    route: { D1: ['fine'] },
    cues: { D1: ['Her notes are right, her throat is loose, her breath lasts and every word is clear', "she wishes she had the soloist's rich voice"] },
    reason: { D1: 'The notes, the throat, the air and the words are all fine, and the complaint is only about someone else’s voice: {cue:D1}.' },
    not: { outcome: 'pitch', why: 'She does not doubt any note. They are right, and she only wishes for a richer voice.' } },

  { id: 'g-fine-bass', use: 'drill', tier: 'clean', setting: 'shower', topic: 'a voice not as deep as the record’s',
    text: "Dev, 16, sings in the shower every morning. He hits every note, his throat stays loose and he has air left at the end of each line. The only thing he does not like is that his voice is lighter than the deep voice on the record.",
    route: { D1: ['fine'] },
    cues: { D1: ['He hits every note, his throat stays loose and he has air left at the end of each line', 'his voice is lighter than the deep voice on the record'] },
    reason: { D1: 'Nothing is wrong with his notes, throat or air: {cue:D1}. His only complaint is that his voice is not the deep voice on the record.' },
    not: { outcome: 'high', why: 'His voice is lighter than the record’s, but no part of his singing goes wrong, at the top or anywhere else.' } },

  { id: 'g-pitch-slide', use: 'drill', tier: 'clean', setting: 'party', topic: 'sliding up into every note',
    text: "At a party, Noor watches a video of herself singing. Every note starts a little under the song's note, and she slides up into it, so each one swoops. She is not sure whether that is how the song goes.",
    route: { D1: ['pitch'] },
    cues: { D1: "Every note starts a little under the song's note, and she slides up into it" },
    reason: { D1: 'The doubt is about the note itself: {cue:D1}. Nothing in the story is about the top notes, the air or the sound.' },
    not: { outcome: 'tone', why: 'Nobody says the sound is pinched or dull. The trouble is where each note starts.' } },

  { id: 'g-pitch-sharp', use: 'drill', tier: 'clean', setting: 'kids', topic: 'a first note that sits a little high',
    text: "Ivan is learning a song to sing with his daughter's class. He plays the first note on a piano app and sings his next to it, and his is a little higher, so he has to slide down to meet it.",
    route: { D1: ['pitch'] },
    cues: { D1: 'his is a little higher, so he has to slide down to meet it' },
    reason: { D1: 'What he checks is the note itself: {cue:D1}. The story does not say the top notes shout, flip or squeeze.' },
    not: { outcome: 'high', why: 'His note sits a little over the song’s note, but nothing goes wrong at the top of a line.' } },

  { id: 'g-tone-nasal', use: 'drill', tier: 'clean', setting: 'openmic', topic: 'a pinched sound that changes with the nose held',
    text: "Tess sings a gentle song at an open mic. Her notes are right and she has plenty of air, but the sound is pinched, as if it comes out of her nose. When she holds her nose shut and sings 'ah', the sound changes a lot.",
    route: { D1: ['tone'] },
    cues: { D1: ['the sound is pinched, as if it comes out of her nose', "When she holds her nose shut and sings 'ah', the sound changes a lot"] },
    reason: { D1: 'The notes and the air are fine, and the sound is the trouble: {cue:D1}.' },
    not: { outcome: 'pitch', why: 'She is sure of her notes. What she dislikes is how the sound comes out.' } },

  { id: 'g-tone-blur', use: 'drill', tier: 'clean', setting: 'karaoke', topic: 'words that run together in a fast song',
    text: "Bao sings a fast song at karaoke. His notes are right and he has air to spare, and the sound is open. But the words run together, and his friends cannot make out the lyrics.",
    route: { D1: ['tone'] },
    cues: { D1: 'the words run together, and his friends cannot make out the lyrics' },
    reason: { D1: 'The notes and the air are fine, and the words are what fail: {cue:D1}.' },
    not: { outcome: 'breath', why: 'He has air to spare. The problem is in the words, not in the air.' } },

  { id: 'g-high-missing', use: 'drill', tier: 'clean', setting: 'shower', topic: 'a top note that is not there',
    text: "In the shower, Zoe tries the top note of a chorus very lightly, with her throat loose. The low part of the line is easy, but the top note is still not there, and the whole chorus sits where every line strains.",
    route: { D1: ['high'] },
    cues: { D1: 'the top note is still not there, and the whole chorus sits where every line strains' },
    reason: { D1: 'The trouble starts where the notes go up: {cue:D1}. She tried it lightly, so it is not about pushing.' },
    not: { outcome: 'pitch', why: 'She is not unsure about a note she sings. The note is simply not there at the top.' } },

  { id: 'g-high-weak', use: 'drill', tier: 'clean', setting: 'kids', topic: 'a light top note she does not trust',
    text: "Ines sings a lullaby to her baby. The top notes come out lighter and thinner than the low ones, but they are clean and easy, and nothing is tight. She worries that they sound weak and that something is wrong with them.",
    route: { D1: ['high'] },
    cues: { D1: ['The top notes come out lighter and thinner than the low ones', 'She worries that they sound weak and that something is wrong with them'] },
    reason: { D1: 'The trouble she names starts at the top: {cue:D1}. Nothing in the story is about the air or the note.' },
    not: { outcome: 'fine', why: 'Her complaint is not about the record’s voice. It is about how her top notes sound.' } },

  { id: 'g-breath-force', use: 'drill', tier: 'clean', setting: 'party', topic: 'air driven out hard in a loud song',
    text: "At a party, Ravi sings a loud song as hard as he can. He drives the air out in big bursts, the sound is loud and harsh, his throat is tired afterward, and the notes drift up.",
    route: { D1: ['breath'] },
    cues: { D1: 'He drives the air out in big bursts, the sound is loud and harsh, his throat is tired afterward' },
    reason: { D1: 'The air is what he gets wrong: {cue:D1}.' },
    not: { outcome: 'high', why: 'He is loud all the way through, not only where the line climbs, and nothing flips or fails at the top.' } },

  { id: 'g-breath-gasp', use: 'drill', tier: 'clean', setting: 'choir', topic: 'a gasp with the shoulders raised',
    text: "Lars, 72, thinks he breathes wrong in the choir. Before each long phrase he gasps, his shoulders rise, and halfway through the phrase the air is gone. His notes are right.",
    route: { D1: ['breath'] },
    cues: { D1: 'Before each long phrase he gasps, his shoulders rise, and halfway through the phrase the air is gone' },
    reason: { D1: 'The air is what fails: {cue:D1}. His notes are right, so the note is not the trouble.' },
    not: { outcome: 'pitch', why: 'His notes are right. Only the air gives out.' } }
]);
