// Singing, Unit One: the unit record. This is the subject's FIRST-QUESTION unit (lesson standard A15). It teaches the
// first question, "What bothers you about it?", and the five kinds that question sorts a line into. A kind's name is its
// answer text; cards carry `family`, and stories carry route: { D1: [option] } and no outcome.
// This is an ACTION subject (P26): a kind where nothing is wrong, taught first; a story of that kind in every drill
// stage; a plan card; two return stories per kind; and a baseline (u1.cases-baseline-1.js, kept as it is).
// Cards live in u1.cards-*.js, stories in u1.cases-*.js. Text fields never retype the questions' wording: they use
// tokens ({q:D1} {a:D1.option} {plain:option} {needs:option} {test:ledgerId} {cue:D1}).

FC.unit('singing', 'u1', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 1,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'One',
  title: { text: 'Before you blame your voice' },   // a first-question unit is titled in plain words; the answers are taught inside it
  subtitle: 'Find what the trouble is about: the top notes, the air, the note itself, the sound of the words, or nothing at all',
  teaches: { steps: ['D1'], outcomes: [], terms: [], families: ['high', 'breath', 'pitch', 'tone', 'fine'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER: pairs of kinds. All ten pairs of the five are here, because a drill group can hold any two.
  // Five have a card of their own (a look-alike card or an exception card); the other five are taught on the question
  // card (taughtIn), which prints each by name. test is a question to put to a story, with no names in it.
  ledger: [
    { id: 'pitch~fine', pair: ['pitch', 'fine'], step: 'D1',
      shared: 'Both can feel wrong to the singer, and both can come from someone who says “something is off”.',
      rule: 'In {a:D1.pitch} you doubt a note: it may be under or over, or you are not sure it is the song’s note. In {a:D1.fine} every note is right, and the only complaint is that you do not sound like the singer on the record.',
      test: 'Is a note in doubt? Or are the notes right, and I only wish I sounded like someone else?' },
    { id: 'high~breath', pair: ['high', 'breath'], step: 'D1',
      shared: 'Both can happen on a long, high note, and both can end with the sound giving out.',
      rule: 'In {a:D1.high} the voice itself goes wrong as the line climbs: a shout, a flip, a clamp or a note that is not there. In {a:D1.breath} the voice is fine and the air fails: it runs out, leaks, is shoved out hard or is grabbed in the middle of a word.',
      test: 'What goes wrong first: my voice as the line climbs, or my air?' },
    { id: 'breath~pitch', pair: ['breath', 'pitch'], step: 'D1',
      shared: 'In both, the end of a line can sound flat.',
      rule: 'In {a:D1.breath} the notes are right while there is air, and they sag only as the air runs out. In {a:D1.pitch} a note is off even when there is plenty of air.',
      test: 'Is a note off from the start of the line, or only once the air begins to run out?' },
    { id: 'pitch~tone', pair: ['pitch', 'tone'], step: 'D1',
      shared: 'Both can make a listener say that something sounds off.',
      rule: 'In {a:D1.pitch} the doubt is whether a note is the song’s note. In {a:D1.tone} the notes are fine, and what you dislike is the sound itself: pinched, dull, words run together, or strange on a recording.',
      test: 'Do I doubt a note? Or am I sure of the notes, and it is the sound I dislike?' },
    { id: 'high~pitch', pair: ['high', 'pitch'], step: 'D1',
      shared: 'A top note can be strained and also land a little low.',
      rule: 'In {a:D1.high} the trouble starts where the line climbs, whatever the note does. In {a:D1.pitch} the doubt is about the note itself, anywhere in the line. When a top note is shouted and also lands low, the top note is what to fix.',
      test: 'Did my voice shout, flip, clamp or fail at the top of the line? Or is the note the only thing in doubt?' },
    { id: 'fine~high', pair: ['fine', 'high'], step: 'D1', taughtIn: 'q-first',
      shared: 'In both, the top notes can sound lighter than the record’s.',
      rule: 'In {a:D1.high} something happens at the top: a shout, a flip, a clamp, a note that is not there, or a light sound you do not trust. In {a:D1.fine} nothing goes wrong anywhere in the line, and the only complaint is that you do not sound like the singer on the record.',
      test: 'Does something happen at the top of the line that I would want to fix? Or is the only complaint that I am not the singer?' },
    { id: 'fine~breath', pair: ['fine', 'breath'], step: 'D1', taughtIn: 'q-first',
      shared: 'In both, you may think your breathing is the problem.',
      rule: 'In {a:D1.breath} the air gives out, leaks, is shoved out or is grabbed in the middle of a word. In {a:D1.fine} the air lasts and nothing is short, and the only complaint is about the voice on the record.',
      test: 'Is the air short, noisy or grabbed anywhere in the line? Or does it last, with nothing to fix?' },
    { id: 'fine~tone', pair: ['fine', 'tone'], step: 'D1', taughtIn: 'q-first',
      shared: 'In both, you may say “I do not like how I sound”.',
      rule: 'In {a:D1.tone} the sound has a fault you can name: pinched, dull, words run together, or strange on a recording. In {a:D1.fine} the sound is open and clear, and the only complaint is that it is not the record’s voice.',
      test: 'Can I name something wrong with the sound itself? Or is it only that it is not the singer’s sound?' },
    { id: 'high~tone', pair: ['high', 'tone'], step: 'D1', taughtIn: 'q-first',
      shared: 'A tight, strained sound can be heard in both.',
      rule: 'In {a:D1.high} the sound goes wrong only where the line climbs. In {a:D1.tone} the sound is the same all the way through, while the top notes are fine.',
      test: 'Does the sound go wrong only at the top of the line? Or is it that way from the first note?' },
    { id: 'breath~tone', pair: ['breath', 'tone'], step: 'D1', taughtIn: 'q-first',
      shared: 'A quiet, whispery or unclear sound can come from either.',
      rule: 'In {a:D1.breath} you can hear air escaping or running short. In {a:D1.tone} there is plenty of air, and the sound is badly shaped by the mouth, the nose or the tongue.',
      test: 'Can I hear air escaping or running short? Or is there plenty of air and the sound is still pinched, dull or blurred?' }
  ],

  // Parts are stopping points. Two parts come before the drill: the kind where nothing is wrong, then the top notes and the
  // air; then the note, the sound of the words and the two lines that show two answers. The last part holds the question,
  // the worked story, the drill and the close.
  parts: [
    { id: 'p1', title: 'Nothing wrong, the top notes, and the air',
      cards: ['orient-first', 'meet-fine', 'check-fine', 'meet-high', 'check-high', 'meet-breath', 'check-breath', 'look-high-breath'] },
    { id: 'p2', title: 'The note, the sound, and two lines that show two things',
      cards: ['meet-pitch', 'check-pitch', 'look-pitch-fine', 'look-breath-pitch', 'exc-high-pitch', 'exc-breath-pitch',
              'meet-tone', 'check-tone', 'look-pitch-tone'] },
    { id: 'p3', title: 'Putting it together, then the drill',
      cards: ['q-first', 'check-first', 'worked-gasping'], drill: true, close: ['recap-first', 'plan-first'] }
  ],

  // A first-question unit's drill has two stages here: piece and route (the claim stage is left out). There is no name
  // stage and no finish stage, because the route is one question long and its answer is the name.
  // Items are authored in groups of look-alikes: a group is stories that share ledger pairs and one tier. The app
  // shuffles the groups inside a tier band (clean, then varied, then misleading) and shuffles inside each group.
  // Every story is new. The drill and return stories of this unit are also the bank that later units draw their
  // { earlier: 'u1' } items from.
  drill: {
    key: 'u1',
    add: 'Some of these stories have nothing wrong. That is on purpose: {a:D1.fine} is a real answer, and you will need it as often as the other four.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'g-fine-hymn', step: 'D1' }, { case: 'g-pitch-slide', step: 'D1' }, { case: 'g-tone-nasal', step: 'D1' }],
                [{ case: 'g-high-missing', step: 'D1' }, { case: 'g-breath-gasp', step: 'D1' }],
                [{ case: 'g-fine-bass', step: 'D1' }, { case: 'g-pitch-sharp', step: 'D1' }],
                [{ case: 'g-breath-force', step: 'D1' }, { case: 'g-high-weak', step: 'D1' }, { case: 'g-tone-blur', step: 'D1' }],
                [{ tell: 'pitch~fine' }, { tell: 'high~breath' }, { tell: 'breath~pitch' }, { tell: 'pitch~tone' }]] },
      { ask: 'route',
        items: [['g-high-yell', 'g-breath-airy', 'g-fine-album'],
                ['g-pitch-drift', 'g-tone-dull'],
                ['g-fine-warmup', 'g-pitch-slide-odd', 'g-tone-versus-record'],
                ['g-high-clamp-breath', 'g-breath-whisper']] }
    ],
    // Fresh stories for later days: two for each kind, one for each of its scheduled returns (E9).
    // A due kind returns as a story the learner has not seen, beside a story of the kind they most often take it for.
    returns: ['g-ret-fine-duet', 'g-ret-fine-radio',
              'g-ret-high-range', 'g-ret-high-jaw',
              'g-ret-breath-spent', 'g-ret-breath-pieces',
              'g-ret-pitch-hum', 'g-ret-pitch-first',
              'g-ret-tone-video', 'g-ret-tone-ironing']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-08', change: 'First version under lesson standard 1: the first-question unit of a new subject (docs/rebuild/singing-plan.md). Five kinds, with the one where nothing is wrong taught first; four look-alike pairs and two exceptions, each on a card, and five more pairs on the question card; a worked story; a two-stage drill and ten return stories; a plan card. Not yet read cold by a newcomer.' }
    ],
    keyChanges: [],       // a new subject: there is no earlier wording of the first question to change
    wrongIdeas: [],       // the unit has no wrong-idea cards; the ideas live on in the look-alike and exception cards and the recap
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
