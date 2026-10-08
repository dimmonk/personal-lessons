// Singing, Unit One: drill stories for the second stage (the first question on whole stories with no help): five clean
// ones, then five whose story misleads. Field guide: see u1.cases-drill-1.js.
// echo names a teaching story of a DIFFERENT kind whose story this one is built to bring back, so that the second look
// ("does it remind you of a story you know?") is practiced where the likeness points the wrong way.
// also lists an answer the story shows as well as its own, which loses to its own by a tie-break in the questions.

FC.cases('singing', 'u1', [

  /* ---------- clean ---------- */
  { id: 'g-high-yell', use: 'drill', tier: 'clean', setting: 'car', topic: 'a yell on the top word',
    text: "Isaac sings along with a song in the car, and the line climbs. He has air left over, but he gets louder as it goes up, the muscles in his neck stand out, and the top word comes out as a yell.",
    route: { D1: ['high'] },
    cues: { D1: 'he gets louder as it goes up, the muscles in his neck stand out, and the top word comes out as a yell' },
    reason: { D1: 'The trouble starts where the line climbs: {cue:D1}.' },
    not: { outcome: 'breath', why: 'He has air left over. What goes wrong is his voice at the top.' } },

  { id: 'g-breath-airy', use: 'drill', tier: 'clean', setting: 'home', topic: 'a whispery sound that runs out fast',
    text: "Soo-jin sings a lullaby at home. Her notes are right, but she can hear air escaping along with the sound, which is soft and whispery, and each phrase is out of air in two seconds.",
    route: { D1: ['breath'] },
    cues: { D1: 'she can hear air escaping along with the sound, which is soft and whispery, and each phrase is out of air in two seconds' },
    reason: { D1: 'The air is what fails: {cue:D1}.' },
    not: { outcome: 'tone', why: 'The sound is soft, but that is because air is leaking out with it, not because the mouth or the nose shapes it badly.' } },

  { id: 'g-fine-album', use: 'drill', tier: 'clean', setting: 'openmic', topic: 'a first open mic and the album',
    text: "Tomás sings at his first open mic night. His notes are right, his throat stays loose, his breath lasts and his words are clear. Afterward he says, 'I wish I sounded like the album.'",
    route: { D1: ['fine'] },
    cues: { D1: ['His notes are right, his throat stays loose, his breath lasts and his words are clear', 'I wish I sounded like the album'] },
    reason: { D1: 'Everything in his singing is fine, and the complaint is only about the album: {cue:D1}.' },
    not: { outcome: 'tone', why: 'He does not dislike the sound itself. His words are clear, and his complaint is about the album.' } },

  { id: 'g-pitch-drift', use: 'drill', tier: 'clean', setting: 'kids', topic: 'a note a little under the piano app’s',
    text: "After the children's concert, a friend tells Mia that one of her notes seemed a little off. Mia plays that note on a piano app and sings hers next to it, and hers is a little lower, so she has to slide up to meet it.",
    route: { D1: ['pitch'] },
    cues: { D1: 'hers is a little lower, so she has to slide up to meet it' },
    reason: { D1: 'What she doubts is the note itself: {cue:D1}.' },
    not: { outcome: 'tone', why: 'Her friend said a note seemed off, not that the sound was pinched or dull.' } },

  { id: 'g-tone-dull', use: 'drill', tier: 'clean', setting: 'church', topic: 'singing into the songbook',
    text: "Gus, 80, sings a hymn with his head down in the songbook and his lips barely open. His notes are right and he has air to spare, but the sound is dull, and the people in the back rows cannot hear the words.",
    route: { D1: ['tone'] },
    cues: { D1: 'the sound is dull, and the people in the back rows cannot hear the words' },
    reason: { D1: 'The notes and the air are fine, and the sound is what fails: {cue:D1}.' },
    not: { outcome: 'breath', why: 'He has air to spare, so the air is not what makes the sound dull.' } },

  /* ---------- whose story misleads ---------- */
  { id: 'g-fine-warmup', use: 'drill', tier: 'misleading', setting: 'choir', topic: 'a warm-up that sounds off next to the record', echo: 'g-pitch-third',
    text: "Sofia sings the alto line in a choir warm-up and records it. Played next to the original record, her voice sounds off to her. She checks every note against the piano and they all match, her throat is loose and her words are clear. What bothers her is that she does not sound like the singer.",
    route: { D1: ['fine'] },
    cues: { D1: ['She checks every note against the piano and they all match, her throat is loose and her words are clear', 'she does not sound like the singer'] },
    reason: { D1: 'It sounds off to her, but every note matches and nothing is tight: {cue:D1}. Her only complaint is that she is not the singer.' },
    not: { outcome: 'pitch', why: 'It sounds off to her, but she checked every note and they match, so no note is left in doubt.' } },

  { id: 'g-pitch-slide-odd', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a brother who says it sounds odd', echo: 'g-tone-muffled',
    text: "After Edie sings, her brother says, 'Something about it sounds odd.' Edie's mouth opens wide and her words are clear. When she plays it back she hears that every note starts underneath and slides up into place, and she wonders whether that is how the song goes.",
    route: { D1: ['pitch'] },
    cues: { D1: 'every note starts underneath and slides up into place' },
    reason: { D1: 'Her brother only says it sounds odd, but the playback shows the cause: {cue:D1}. The doubt is about the note itself.' },
    not: { outcome: 'tone', why: 'Her mouth is open and her words are clear. The sound is not pinched or dull; the notes arrive late.' } },

  { id: 'g-tone-versus-record', use: 'drill', tier: 'misleading', setting: 'party', topic: 'a pinched sound beside a record', echo: 'g-fine-cooking',
    text: "At a party, Olu sings along to a favorite song and sighs, 'I don't sound like the guy on the record.' His notes are right and he has plenty of air, but his sound is pinched, as if it comes out of his nose, and when he holds his nose shut on 'ah' it changes a lot.",
    route: { D1: ['tone'] },
    cues: { D1: "his sound is pinched, as if it comes out of his nose, and when he holds his nose shut on 'ah' it changes a lot" },
    reason: { D1: 'He compares himself with the record, but the sound has a fault you can name: {cue:D1}.' },
    not: { outcome: 'fine', why: 'His complaint sounds like a comparison, but his sound really is pinched.' } },

  { id: 'g-high-clamp-breath', use: 'drill', tier: 'misleading', setting: 'choir', topic: 'a breath grabbed on the phrase that climbs', echo: 'g-breath-hymn',
    also: ['breath'],
    text: "In the choir, Pavel gets through the low phrases on one breath each. On the phrase that climbs to his highest note, his throat clamps and the sound goes thin and strangled, he runs out of air, and he grabs a breath in the middle of a word.",
    route: { D1: ['high'] },
    cues: { D1: 'On the phrase that climbs to his highest note, his throat clamps and the sound goes thin and strangled' },
    reason: { D1: 'The story ends on the air, but the trouble starts where the line climbs: {cue:D1}. The air only gives out after the clamp.' },
    not: { outcome: 'breath', why: 'The air does give out, but only on the phrase that climbs. When a line shows both, the top notes win.' } },

  { id: 'g-breath-whisper', use: 'drill', tier: 'misleading', setting: 'kids', topic: 'a baby song that sounds dull and quiet', echo: 'g-tone-muffled',
    text: "Jamal sings to his baby, and his wife tells him it sounds dull and quiet. His notes are right and his mouth is open, but he can hear air escaping along with every note, and he runs out in two seconds.",
    route: { D1: ['breath'] },
    cues: { D1: 'he can hear air escaping along with every note, and he runs out in two seconds' },
    reason: { D1: 'It sounds dull because of the air: {cue:D1}. The mouth is open and the notes are right.' },
    not: { outcome: 'tone', why: 'A dull sound can come from a closed mouth, but his mouth is open. The air leaking out is the cause.' } }
]);
