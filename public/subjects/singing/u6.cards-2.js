// Singing, Unit Six, part two: the groups of facts about a hoarse or tired voice and about practice that sticks, the look-alike
// card for the pair people swap, and the close. A fact unit closes with a recap that the app builds from every facts card
// (lesson standard A12); this subject is an action subject, so a plan card follows it (V25). There is no transfer and no
// worked example in a fact unit, and the unit teaches no question of the key. See u6.cards-1.js for the shape of a group.

FC.cards('singing', 'u6', [

  /* ---------- group three: a hoarse or tired voice ---------- */
  { id: 'con-hoarse', kind: 'concept',
    h: 'A hoarse or tired voice',
    link: 'Next, what to do when your voice is already hoarse or tired.',
    case: 'f-hoarse',
    plain: [
      'Theo did two things that made his voice worse: he cleared his throat all day, and he sang when his voice was telling him to stop. A hoarse or tired voice needs the opposite.',
      'It needs rest: no singing, and as little talking as you can. Do not push through it. When your throat feels thick, do not keep clearing it; swallow, or take a sip of water instead.',
      'Singing should never hurt. If it does, stop for the day. Hoarseness that lasts more than two or three weeks, with no cold to explain it, is for a doctor, not for more practice.'
    ] },

  { id: 'facts-hoarse', kind: 'facts',
    h: 'Rest, and when to stop',
    link: 'Five facts: what the voice needs, what you do not do, and when to stop or get help.',
    concept: 'con-hoarse',
    rows: [
      { id: 'ho-rest', q: 'What does a hoarse voice need?', a: 'Rest: no singing, and as little talking as you can',
        relates: 'Theo shouted all night and then gave his voice no rest on Sunday. Rest means no singing, and talking counts as using it too.' },
      { id: 'ho-push', q: 'Your voice is hoarse and the song is not done. What do you not do?', a: 'Push through it',
        relates: 'Theo said it would warm up as he went, and it got rougher. A hoarse voice gets worse if you push it.' },
      { id: 'ho-clear', q: 'Your throat feels thick. What do you do instead of clearing it?', a: 'Swallow, or sip water',
        relates: 'Clearing your throat is one more way of using a voice that needs to be left alone. Swallowing or a sip of water takes its place.' },
      { id: 'ho-pain', q: 'Singing starts to hurt. What do you do?', a: 'Stop for the day',
        relates: 'Singing should never hurt. Pain means stop, and the voice gets the rest of the day off.' },
      { id: 'ho-doctor', q: 'When is hoarseness a matter for a doctor?', a: 'After more than two or three weeks, with no cold to explain it',
        relates: 'Rest is for a voice that is tired. Hoarseness that stays for weeks with no cold behind it needs a doctor, not more practice.' }
    ] },

  { id: 'chk-ho-rest', kind: 'check', after: 'facts-hoarse', ask: { type: 'fact', row: 'ho-rest' } },
  { id: 'chk-ho-push', kind: 'check', after: 'facts-hoarse', ask: { type: 'fact', row: 'ho-push' } },
  { id: 'chk-ho-clear', kind: 'check', after: 'facts-hoarse', ask: { type: 'fact', row: 'ho-clear' } },
  { id: 'chk-ho-pain', kind: 'check', after: 'facts-hoarse', ask: { type: 'fact', row: 'ho-pain' } },
  { id: 'chk-ho-doctor', kind: 'check', after: 'facts-hoarse', ask: { type: 'fact', row: 'ho-doctor' } },

  { id: 'look-hoarse', kind: 'lookalike', ledger: 'ho-rest~ho-push',
    h: 'Resting, and not pushing through',
    link: 'People swap these two, and Theo’s evening shows what the swap costs.',
    facts: ['ho-rest', 'ho-push'],
    instruction: 'Compare what each one is: something you give the voice, or something you will not do to it.',
    prompt: { kind: 'which', answer: 'ho-rest' },
    difference: [
      'Fact A is what you give the voice: {f:ho-rest}. It is a thing to do.',
      'Fact B is what you refuse to do when you want to sing anyway: {f:ho-push}. It is a thing to leave undone.',
      'Theo gave his voice no rest, and then pushed it through a song. He needed both A and B.'
    ] },

  /* ---------- group four: practice that sticks ---------- */
  { id: 'con-practice', kind: 'concept',
    h: 'Practice that sticks',
    link: 'Last, how to practice so that a song stays learned.',
    case: 'f-practice',
    plain: [
      'Nadia’s hour on Sunday did not stick. Ten to fifteen minutes on most days beats an hour once a week.',
      'Work on one thing at a time, such as the first line or one tricky note. Record yourself and listen back: that is the only way to know whether it worked.',
      'Learn a new song slowly, in the easy middle of your voice, on one sound (“la” or “oo”) before you add the words. Pick songs that sit where your voice is easy, and move the others lower.'
    ] },

  { id: 'facts-practice', kind: 'facts',
    h: 'How to practice',
    link: 'Five facts: how much, how many things, how to check, how to learn a song, and what to pick.',
    concept: 'con-practice',
    rows: [
      { id: 'pr-short', q: 'How much should you practice?', a: 'Ten to fifteen minutes, most days',
        relates: 'Nadia’s hour on Sunday was mostly gone by Wednesday. Short practice most days beats an hour once a week.' },
      { id: 'pr-one', q: 'How many things do you work on at once?', a: 'One at a time',
        relates: 'One line or one tricky note at a time lets you hear whether it got better.' },
      { id: 'pr-record', q: 'How do you find out whether practice worked?', a: 'Record it and listen back',
        relates: 'Nadia had nothing to listen back to. A recording is the only way to know whether it worked.' },
      { id: 'pr-slow', q: 'How do you learn a new song?', a: 'Slowly, in the easy middle, on “la” or “oo” first',
        relates: 'One easy sound lets you learn the tune with no words in the way. The easy middle keeps the high and low notes out of the way until the tune is learned.' },
      { id: 'pr-songs', q: 'Which songs do you pick, and what about the others?', a: 'Ones that sit where your voice is easy; move the others lower',
        relates: 'A song that sits too high turns practice into straining. Move it lower and it becomes practice you can repeat.' }
    ] },

  { id: 'chk-pr-short', kind: 'check', after: 'facts-practice', ask: { type: 'fact', row: 'pr-short' } },
  { id: 'chk-pr-one', kind: 'check', after: 'facts-practice', ask: { type: 'fact', row: 'pr-one' } },
  { id: 'chk-pr-record', kind: 'check', after: 'facts-practice', ask: { type: 'fact', row: 'pr-record' } },
  { id: 'chk-pr-slow', kind: 'check', after: 'facts-practice', ask: { type: 'fact', row: 'pr-slow' } },
  { id: 'chk-pr-songs', kind: 'check', after: 'facts-practice', ask: { type: 'fact', row: 'pr-songs' } },

  /* ---------- the close ---------- */
  { id: 'recap-care', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now met every fact in the unit. Here they are together, with what to carry away.',
    carry: [
      'Warm up for five minutes before you sing anything that matters, karaoke included, and keep it soft and easy until you are done.',
      'Water works over hours, so drink it through the day. For a dry throat right now, breathe steam or humid air and take a sip for your mouth.',
      'A hoarse voice needs rest. Do not push through it, do not keep clearing your throat, and stop for the day if it hurts.',
      'Ten to fifteen minutes most days beats an hour on Sunday. Work on one thing at a time, and record it.'
    ] },

  { id: 'plan-care', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for the night you sing and the morning your voice is rough. Fill it in or leave it.',
    intro: [
      'A plan is one line: if this happens, I will do that. The minute before you sing, or the morning your voice is rough, is a bad time to work out what to do, and a good time to follow what you decided in advance.',
      'The lines below are examples. You can use one, change it, or write your own two lines. Nothing is saved until you press the button.'
    ],
    cues: [
      { cue: 'it is a night I know I will sing',
        then: 'warm up for five minutes first, softly, before any loud part or high note' },
      { cue: 'it is a hoarse morning',
        then: 'rest it and clear nothing: no singing, little talking, and a sip of water when my throat feels thick' },
      { cue: 'my throat is dry right now',
        then: 'breathe steam or humid air and take a sip of water for my mouth' },
      { cue: 'I want to learn a new song',
        then: 'practice ten or fifteen minutes most days, slowly on “la”, and record it' },
      { cue: 'singing starts to hurt',
        then: 'stop for the day' }
    ] }
]);
