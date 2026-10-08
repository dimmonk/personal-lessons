// Singing: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what to look for
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1, section 20)
//   outcomes[].n      the one fixed name shown everywhere
//   outcomes[].plain  a few ordinary words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what to look for in a story before the name fits
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   outcomes[].legit  nothing is wrong in a story of this name: the voice is doing fine (an action subject, P26)
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].why       why that distinction decides
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a story must show for this answer. Printed as "Give this answer when <when>." and, in
//                     feedback, as "This story shows something else: <when>.", so it is a clause that fits both.
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a story shows this answer AND the one named, the named one wins
// Step codes (D1, H1, B1, P1, T1) and ids are for the data. They are never shown to the learner (K3).
//
// The subject: a person who sings for fun (in the car, at karaoke, in a choir, to a child) and wants to sing a bit
// better. The first question sorts what bothers them about a line into five kinds. Four kinds lead to a branch of one
// question each, and every branch ends in a name for the voice doing fine as well as names for what went wrong, because
// the point is to fix only what is broken. The fifth kind has no branch: nothing is wrong, the voice is just not the
// singer's on the record. Unit Six holds facts about looking after the voice and practicing.

FC.key('singing', {
  outcomes: [
    // How the top notes come out: Unit Two.
    { id: 'lighttop', group: 'high', unit: 'u2', legit: true,
      n: 'A light, easy top',
      plain: 'the top notes come out lighter and clean, and nothing needs fixing',
      needs: 'top notes that come out lighter and thinner than the low ones, clean and easy, with no jolt and nothing tight or sore',
      aka: ['head voice doing its job', 'the thin voice up top'] },
    { id: 'pushing', group: 'high', unit: 'u2',
      n: 'Pushing the top notes',
      plain: 'getting louder and louder to reach the top, until it is a shout',
      needs: 'a line that climbs, a voice that gets louder as it climbs, a tightening neck or jaw, and a top note that comes out as a shout or a strain, with no flip into a lighter voice',
      aka: ['yelling the high notes', 'belting it', 'pulling chest voice up'] },
    { id: 'cracking', group: 'high', unit: 'u2',
      n: 'Cracking',
      plain: 'the voice flips with a jolt into a thin, airy voice',
      needs: 'a line that climbs, a sudden flip into a thin, airy voice with a jolt or a gap, and a note after the flip that is there',
      aka: ['a voice crack', 'the break', 'flipping into falsetto'] },
    { id: 'squeezing', group: 'high', unit: 'u2',
      n: 'Squeezing',
      plain: 'the throat clamps, and the sound goes tight and strangled',
      needs: 'a line that climbs, a throat, jaw or tongue that clamps, a sound that goes thin, tight or strangled without getting louder, and a throat that is sore or tired afterward',
      aka: ['singing from the throat', 'throat tension', 'a strangled sound'] },
    { id: 'outofrange', group: 'high', unit: 'u2',
      n: 'Out of your range',
      plain: 'the note is above what your voice has, even sung lightly',
      needs: 'a top note tried lightly, with a loose throat, and still not there, or a whole song that sits where every line strains',
      aka: ['the song is too high', 'not in your range'] },

    // How the air holds up: Unit Three.
    { id: 'breathfine', group: 'breath', unit: 'u3', legit: true,
      n: 'A breath that works',
      plain: 'a low, quiet breath that lasts the line, with nothing to fix',
      needs: 'a low, quiet breath with the belly moving out and the shoulders still, a clear sound, and air left at the end of the line',
      aka: ['breathing low', 'breathing from the belly'] },
    { id: 'shallowbreath', group: 'breath', unit: 'u3',
      n: 'A shallow breath',
      plain: 'a quick, high breath that runs out early',
      needs: 'a breath taken quickly with the shoulders or the chest lifting, and air that is gone before the line ends',
      aka: ['chest breathing', 'breathing high'] },
    { id: 'airytone', group: 'breath', unit: 'u3',
      n: 'An airy tone',
      plain: 'air leaking out with the sound, soft and whispery',
      needs: 'air you can hear escaping with the sound, a soft, whispery sound, and air that runs out fast whatever the breath was',
      aka: ['a breathy voice', 'whispery singing'] },
    { id: 'forcing', group: 'breath', unit: 'u3',
      n: 'Forcing the air',
      plain: 'driving the air out hard, loud and harsh',
      needs: 'air driven out hard, a loud, harsh sound, a throat that tires, and a note that drifts up',
      aka: ['oversinging', 'pushing air'] },
    { id: 'unplanned', group: 'breath', unit: 'u3',
      n: 'Unplanned breaths',
      plain: 'full breaths, taken wherever you happen to run out',
      needs: 'a full, low breath, and breaths taken wherever you run out, in the middle of a word or a phrase, with none planned',
      aka: ['breathing mid-word', 'gasping between words'] },

    // Whether you are on the note: Unit Four.
    { id: 'onnote', group: 'pitch', unit: 'u4', legit: true,
      n: 'On the note',
      plain: 'the note matches when checked, and only sounded wrong to you',
      needs: 'the song’s note checked against the recording or a piano, and your note matching it',
      aka: ['in tune', 'on pitch'] },
    { id: 'flat', group: 'pitch', unit: 'u4',
      n: 'Singing flat',
      plain: 'a shade under the note',
      needs: 'the song’s note checked against the recording or a piano, your note a little below it, and a slide up to meet it',
      aka: ['under the note', 'off pitch on the low side'] },
    { id: 'sharp', group: 'pitch', unit: 'u4',
      n: 'Singing sharp',
      plain: 'a shade over the note',
      needs: 'the song’s note checked against the recording or a piano, your note a little above it, and a slide down to meet it',
      aka: ['over the note', 'off pitch on the high side'] },
    { id: 'scooping', group: 'pitch', unit: 'u4',
      n: 'Scooping',
      plain: 'starting under the note and sliding up into it',
      needs: 'a note started below where it belongs, a slide up until it is reached, and a swoop at the start of the note',
      aka: ['sliding into the note', 'swooping'] },
    { id: 'guessing', group: 'pitch', unit: 'u4',
      n: 'Guessing the note',
      plain: 'singing before the note is in your head, and hunting for it',
      needs: 'a start with no clear note in your head, and a voice that moves around until it finds the note, or never does',
      aka: ['singing before you hear it', 'not hearing it first'] },

    // How the words sound when they come out: Unit Five.
    { id: 'recorded', group: 'tone', unit: 'u5', legit: true,
      n: 'Your voice from outside',
      plain: 'open and clear, and only strange on a recording',
      needs: 'an open sound, words that can be followed, little change when you hold your nose shut, and a complaint that only comes from a recording',
      aka: ['the recording surprise', 'how everyone else hears you'] },
    { id: 'nasal', group: 'tone', unit: 'u5',
      n: 'A nasal sound',
      plain: 'pinched, as if it comes out of the nose',
      needs: 'a pinched sound that seems to come out of the nose, and a big change in the sound when you hold your nose shut on an “ah”',
      aka: ['honky', 'singing through your nose'] },
    { id: 'muffled', group: 'tone', unit: 'u5',
      n: 'A muffled sound',
      plain: 'dull and stuck in the throat, with the mouth barely open',
      needs: 'a mouth that barely opens, a dull sound that stays back in the throat, and words that are hard to make out',
      aka: ['a swallowed sound', 'singing into your chest'] },
    { id: 'mumbled', group: 'tone', unit: 'u5',
      n: 'Mumbled words',
      plain: 'a clear sound, with the words run together',
      needs: 'an open, clear sound, consonants that are soft or missing, and words that run into each other',
      aka: ['lazy diction', 'swallowing the consonants'] }
  ],

  terms: [
    // Unit Two: the two voices a singer has, which the top notes depend on.
    { id: 'chest', unit: 'u2', n: 'chest voice',
      means: 'the heavier, fuller voice you talk in and sing your low notes in' },
    { id: 'head', unit: 'u2', n: 'head voice',
      means: 'the lighter, thinner voice your high notes come out in, which seems to ring up in your head rather than in your chest' },
    // Unit Four: the one way to find out which way a note is off.
    { id: 'notecheck', unit: 'u4', n: 'the note check',
      means: 'play the song’s note on a piano app, or pause the recording on it, hold it, sing yours, and slide until the two match; which way you had to slide tells you which way you were off' }
  ],

  // Words a beginner could not follow (teachers' and singers' jargon), each with what to say instead.
  // "key" is banned in every subject by the app (tests/plain-words.mjs); it is listed here so the message says what to write.
  avoid: [
    { word: 'key', sayInstead: 'move the song lower, or higher' },
    { word: 'support', sayInstead: 'a steady stream of air' },
    { word: 'supported', sayInstead: 'with a steady stream of air' },
    { word: 'diaphragm', sayInstead: 'low in the belly' },
    { word: 'passaggio', sayInstead: 'the place where the voice changes' },
    { word: 'register', sayInstead: 'chest voice or head voice' },
    { word: 'registers', sayInstead: 'chest voice and head voice' },
    { word: 'placement', sayInstead: 'where the sound seems to sit' },
    { word: 'resonance', sayInstead: 'ring' },
    { word: 'resonant', sayInstead: 'ringing' },
    { word: 'intonation', sayInstead: 'being on the note' },
    { word: 'pitchy', sayInstead: 'off the note' },
    { word: 'larynx', sayInstead: 'the throat' },
    { word: 'vocal cords', sayInstead: 'the voice' },
    { word: 'vocal folds', sayInstead: 'the voice' },
    { word: 'belt', sayInstead: 'shouting the top' },
    { word: 'belting', sayInstead: 'shouting the top' },
    { word: 'timbre', sayInstead: 'the sound of the voice' },
    { word: 'vibrato', sayInstead: 'leave it out' },
    { word: 'phrasing', sayInstead: 'where you breathe' },
    { word: 'articulation', sayInstead: 'the consonants' },
    { word: 'tone deaf', sayInstead: 'guessing the note, or not hearing it first' },
    { word: 'technique', sayInstead: 'say what you do with the voice' }
  ],

  // THE FIRST QUESTION, taught by Unit One. Its five answers are that unit's kinds. The order of the list is the order
  // that wins when a line shows two things at once (yieldsTo): the top notes beat the air, and both beat the note,
  // because fixing the one higher up usually fixes the other. The sound of the words stands alone. The fifth answer has
  // no branch: nothing is wrong, and the questions stop.
  gate: {
    code: 'D1', unit: 'u1',
    q: 'What bothers you about it?',
    why: 'Each of the four goes wrong in a different place and has a different fix, so this answer decides what to ask next. It says where to look, not that something is wrong: in each of the four, the voice may turn out to be doing fine. When a line shows two of them, give the one higher in the list, because fixing it usually fixes the other.',
    options: [
      { id: 'high', n: 'How the top notes come out',
        plain: 'the trouble starts where the notes go up',
        needs: 'a line that climbs, and at the top something you noticed: a shout, a flip, a tight throat, a note that is not there, or a lighter voice you are unsure of',
        when: 'the trouble starts where the notes go up: at the top of the line the voice shouts, flips, clamps, cannot reach the note, or goes light in a way you are not sure of',
        keeps: ['lighttop', 'pushing', 'cracking', 'squeezing', 'outofrange'],
        aka: [] },
      { id: 'breath', n: 'How the air holds up',
        plain: 'the air runs out, leaks out, is forced out, or is grabbed mid-word',
        needs: 'air that gives out before the line ends or is grabbed in the middle of a word, air you can hear leaking with the sound, air driven out hard, or a breath you suspect is wrong',
        when: 'the trouble is with the air: it is gone before the line ends, grabbed in the middle of a word, heard leaking out with the sound, or driven out hard, or you suspect the way you breathe',
        keeps: ['breathfine', 'shallowbreath', 'airytone', 'forcing', 'unplanned'],
        yieldsTo: [{ option: 'high', say: 'a top note that shouts, flips, clamps or is not there' }],
        aka: [] },
      { id: 'pitch', n: 'Whether you are on the note',
        plain: 'you are not sure you are singing the song’s note',
        needs: 'a note you are not sure is the song’s note: it sounds a shade off, you slide into it, you hunt for it, or you doubt it without knowing why',
        when: 'what you doubt is the note itself: whether the note you sing is the song’s note, because it sounds a shade off, you slide into it, you hunt for it, or you simply are not sure',
        keeps: ['onnote', 'flat', 'sharp', 'scooping', 'guessing'],
        yieldsTo: [{ option: 'high', say: 'a top note that shouts, flips, clamps or is not there' },
                   { option: 'breath', say: 'air that gives out, leaks, is forced, or is grabbed mid-word' }],
        aka: [] },
      { id: 'tone', n: 'How the words sound when they come out',
        plain: 'the notes and the air are fine, and the sound of the words bothers you',
        needs: 'notes and air that are fine, and a sound you dislike: pinched and nasal, dull and muffled, words that run together, or a voice that only sounds strange on a recording',
        when: 'the notes and the air are fine, and what bothers you is the sound: pinched and nasal, dull and muffled, words that run together, or a voice that only sounds strange recorded',
        keeps: ['recorded', 'nasal', 'muffled', 'mumbled'],
        aka: [] },
      { id: 'fine', n: 'Only that it is not the record’s voice', legit: true,
        plain: 'nothing is wrong: your voice is just not the singer’s voice',
        needs: 'the right notes, nothing tight, sore or short of air, words that are clear, and a complaint only that it does not sound like the singer on the record',
        when: 'the notes are right, nothing is tight, sore or short of air, the words are clear, and the only complaint is that it does not sound like the singer on the record',
        keeps: [],    // no branch: after this answer the questions stop, and there is no further name
        aka: [] }
    ]
  },

  // A branch is a list of one, two or three questions. Each of these has one: every name in a branch is defined by one
  // thing the story shows, and each answer leads to one name (K2.2).
  branches: {
    // How the top notes come out. Unit Two teaches it.
    high: [
      { code: 'H1', unit: 'u2',
        q: 'What happens at the top of the line?',
        why: 'Each of the five is fixed a different way: one by getting lighter instead of louder, one by practicing the join between the heavier voice and the lighter one, one by loosening the throat, one by moving the song lower, and one by leaving it alone. How loud the singer on the record is, how much you want the note, and how it felt last week do not change the answer.',
        options: [
          { id: 'light', n: 'It goes light and clear, with nothing tight',
            when: 'the top notes come out lighter and thinner than the low ones, clean and easy, with no jolt, and nothing tight or sore',
            keeps: ['lighttop'] },
          { id: 'shout', n: 'It gets louder and louder, and the top is a shout',
            when: 'as the line climbs the voice gets louder, the neck or the jaw tightens, and the top note comes out as a shout or a strain, without flipping into a lighter voice',
            keeps: ['pushing'] },
          { id: 'flip', n: 'It flips to a thin, airy voice on one note',
            when: 'on the way up the sound suddenly flips into a thin, airy voice, with a jolt or a gap, and the note after the flip is there',
            keeps: ['cracking'],
            yieldsTo: [{ option: 'missing', say: 'a top note that is not there even in the lighter voice' }] },
          { id: 'clamp', n: 'It goes tight and strangled, and the throat aches',
            when: 'the throat, jaw or tongue clamp, the sound goes thin, tight or strangled without getting louder, and the throat is sore or tired afterward',
            keeps: ['squeezing'],
            yieldsTo: [{ option: 'shout', say: 'a voice that gets louder and louder as the line climbs' }] },
          { id: 'missing', n: 'Even sung lightly, the note is not there',
            when: 'you try the top note lightly, with the throat loose, and it still is not there, or the whole song sits where every line strains',
            keeps: ['outofrange'] }
        ] }
    ],

    // How the air holds up. Unit Three teaches it.
    breath: [
      { code: 'B1', unit: 'u3',
        q: 'What is the air doing?',
        why: 'Each has its own fix: a lower breath, a cleaner start to the sound, a gentler stream of air, a plan for where to breathe, or nothing at all. How long the line is and how loud the song is do not change the answer.',
        options: [
          { id: 'lasts', n: 'It is low and quiet, and lasts the line',
            when: 'you breathe in low and quietly, with the belly moving out and the shoulders still, the sound is clear, and there is air left at the end of the line',
            keeps: ['breathfine'] },
          { id: 'gone', n: 'It is gone before the line ends, after a quick, high breath',
            when: 'you breathe in quickly, with the shoulders or the chest lifting, and the air is gone before the line ends',
            keeps: ['shallowbreath'] },
          { id: 'leak', n: 'It leaks out with the sound, which is soft and whispery',
            when: 'you can hear air escaping along with the sound, the sound is soft and whispery, and the air runs out fast however you breathed in',
            keeps: ['airytone'] },
          { id: 'force', n: 'It is driven out hard, and the sound is loud and harsh',
            when: 'you drive the air out hard, the sound is loud and harsh, the throat tires, and the note tends to drift up',
            keeps: ['forcing'],
            yieldsTo: [{ option: 'gone', say: 'a quick, high breath, with the shoulders or the chest lifting' }] },
          { id: 'grabbed', n: 'It is grabbed wherever you run out, mid-word',
            when: 'you breathe in low and get a full breath, but you take the breaths wherever you happen to run out, in the middle of a word or a phrase, because none were planned',
            keeps: ['unplanned'] }
        ] }
    ],

    // Whether you are on the note. Unit Four teaches it.
    pitch: [
      { code: 'P1', unit: 'u4',
        q: 'Where does your note land?',
        why: 'Each is fixed differently: a note under the song’s note needs more lift and a brighter sound, a note over it needs less push, a slide needs the note heard before it is sung, hunting needs the melody learned first, and a note that matches needs nothing. Whether a listener liked it does not change the answer; checking your note against the song’s note does.',
        options: [
          { id: 'match', n: 'On the song’s note',
            when: 'the check shows your note on the song’s note, and it only sounded wrong to you',
            keeps: ['onnote'] },
          { id: 'under', n: 'A shade under the song’s note',
            when: 'the check shows your note a little under the song’s note, so you had to slide up to meet it',
            keeps: ['flat'],
            yieldsTo: [{ option: 'hunt', say: 'a start with no clear note in your head, and a voice moving around to find it' }] },
          { id: 'over', n: 'A shade over the song’s note',
            when: 'the check shows your note a little over the song’s note, so you had to slide down to meet it',
            keeps: ['sharp'],
            yieldsTo: [{ option: 'hunt', say: 'a start with no clear note in your head, and a voice moving around to find it' }] },
          { id: 'slide', n: 'Under it at first, then sliding up into it',
            when: 'you start under the note and slide up until you reach it, so the note begins with a swoop and arrives late',
            keeps: ['scooping'],
            yieldsTo: [{ option: 'hunt', say: 'a start with no clear note in your head, and a voice moving around to find it' }] },
          { id: 'hunt', n: 'Wherever your voice happens to start, until you find it',
            when: 'you start singing with no clear note in your head and move your voice around until it finds the note, or it never does',
            keeps: ['guessing'] }
        ] }
    ],

    // How the words sound when they come out. Unit Five teaches it.
    tone: [
      { code: 'T1', unit: 'u5',
        q: 'What do the words sound like?',
        why: 'Each sound comes from a different place and has a different fix: the roof of the mouth, the jaw and the tongue, the lips and the teeth, or nothing but your own ears. How the singer on the record sounds does not change the answer.',
        options: [
          { id: 'strange', n: 'Open and clear, and only strange on a recording',
            when: 'the sound is open, the words can be followed, holding your nose shut changes little, and it bothers you only on a recording, where your voice is thinner and higher than it sounds from inside',
            keeps: ['recorded'] },
          { id: 'pinched', n: 'Pinched, as if coming out of the nose',
            when: 'the sound is pinched and seems to come out of the nose, and holding your nose shut on an “ah” changes the sound a lot',
            keeps: ['nasal'] },
          { id: 'dull', n: 'Dull and stuck in the throat, with the mouth barely open',
            when: 'the mouth barely opens, the sound is dull and stays back in the throat, and the words are hard to make out',
            keeps: ['muffled'] },
          { id: 'blur', n: 'Clear in sound, but the words run together',
            when: 'the sound itself is open and clear, but the consonants are soft or missing, so the words run into each other and a listener loses them',
            keeps: ['mumbled'] }
        ] }
    ]
  }
});
