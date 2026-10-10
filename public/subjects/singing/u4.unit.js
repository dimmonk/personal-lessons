// Singing, Unit Four: the unit record. A BRANCH unit (lesson standard A1 to A11) of an ACTION subject (P26): it teaches the
// part of the key that follows the first question's answer "Whether you are on the note". The branch has one question
// and five names, one of them a note that was fine all along. Every name says what to do on the spot, every drill stage holds
// a note that was fine, and the close has the plan card. Cards live in u4.cards-*.js, stories in u4.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('singing', 'u4', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 2,                 // unit revision, shown in the app
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Four',
  title: { fromKey: 'D1.pitch' },     // a branch unit is titled with the first-question answer it teaches
  subtitle: 'Check the note before you fix it: four ways to be off, and one way to be fine',
  teaches: { steps: ['P1'], outcomes: ['onnote', 'flat', 'sharp', 'scooping', 'guessing'], terms: ['notecheck'] },
  assumes: ['u1', 'u2', 'u3'],

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse. This branch has one question and every
  // answer leads to one name, so no answer keeps two names together. The pairs below are the ones people mix up:
  // fine against a little under or over, a little under against a little over, a slide against a steady miss, and the
  // three pairs where the key says the hunt wins. Each entry is written once and used six ways: the look-alike or
  // exception card, the list on the question card, the feedback when one is picked for the other, the grouping of drill
  // items, and what returns together later. test is a question to put to a story, with no names in it.
  ledger: [
    { id: 'flat~onnote', pair: ['flat', 'onnote'], step: 'P1',
      shared: 'In both, a line sounded low to the singer, and a listener may have winced.',
      rule: 'In {o:flat} the check puts your note below the song’s note, so you slide up to reach it. In {o:onnote} the check finds the two the same, and the line only sounded wrong.',
      test: 'Did you have to slide up to reach the song’s note, or did the two already sound the same?' },
    { id: 'flat~sharp', pair: ['flat', 'sharp'], step: 'P1',
      shared: 'Both are a small miss in the note, found by the same check, and the line sounds wrong in both.',
      rule: 'In {o:flat} you slide up to reach the song’s note, and in {o:sharp} you slide down. The usual causes differ too: too little lift for the first, too much push for the second.',
      test: 'Which way did you have to slide to match the song’s note: up or down?' },
    { id: 'scooping~flat', pair: ['scooping', 'flat'], step: 'P1',
      shared: 'In both, the sound is below the song’s note at first.',
      rule: 'In {o:flat} the note stays put, a little low the whole time. In {o:scooping} each note starts low and slides up until it arrives, so it is late and not low.',
      test: 'Does the note stay where it is, a little low, or does it start low and move up into place?' },
    { id: 'guessing~flat', pair: ['guessing', 'flat'], step: 'P1',
      shared: 'In both, the note you sing can end up lower than the song’s note.',
      rule: 'In {o:flat} the note was in your head and you sang it a little low. In {o:guessing} no note was in your head and your voice went looking, so wherever it stopped is only where the search ended. When a story shows both, the answer is {o:guessing}.',
      test: 'Was the first note in your head before you opened your mouth, or did your voice go looking for it?' },
    { id: 'guessing~scooping', pair: ['guessing', 'scooping'], step: 'P1',
      shared: 'In both, the voice slides up from underneath at the start.',
      rule: 'In {o:scooping} you know the note and slide into it out of habit. In {o:guessing} no note is in your head, and the slide is your voice looking for one. When a story shows both, the answer is {o:guessing}.',
      test: 'Before the slide began, did you already hear the note in your head?' },
    { id: 'sharp~onnote', pair: ['sharp', 'onnote'], step: 'P1', taughtIn: 'q-how',
      shared: 'In both, the singer thinks the note went above the song’s note.',
      rule: 'In {o:sharp} the check puts your note above the song’s note, so you slide down to reach it. In {o:onnote} the check finds the two the same, and the line only sounded wrong.',
      test: 'Did you have to slide down to reach the song’s note, or did the two already sound the same?' },
    { id: 'guessing~sharp', pair: ['guessing', 'sharp'], step: 'P1', taughtIn: 'q-how',
      shared: 'In both, the note you sing can end up higher than the song’s note.',
      rule: 'In {o:sharp} the note was in your head and you sang it a little high. In {o:guessing} no note was in your head and your voice went looking, so it may stop high or low. When a story shows both, the answer is {o:guessing}.',
      test: 'Did you know the note before you sang, or did your voice find its way to it while you sang?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts (A13). The last part holds the
  // drill, and its close cards come after the drill. The parts follow what a learner meets first: notes that sit still
  // (fine, a little under, a little over), then notes that move or are hunted for.
  parts: [
    { id: 'p1', title: 'The check, a note that was fine, and a note a little off',
      cards: ['orient', 'term-notecheck', 'meet-onnote', 'check-onnote', 'meet-flat', 'check-flat', 'look-flat-onnote',
              'meet-sharp', 'check-sharp', 'look-flat-sharp'] },
    { id: 'p2', title: 'A note that slides in, and a note you hunt for',
      cards: ['meet-scooping', 'check-scooping', 'look-scooping-flat', 'meet-guessing', 'check-guessing',
              'exc-guess-flat', 'exc-guess-scoop'] },
    { id: 'p3', title: 'The question, one whole story, then the drill',
      cards: ['q-how', 'check-how', 'worked-tired'], drill: true, close: ['recap', 'plan'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is stories that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every story is new.
  // This is an action subject, so every stage that asks about stories holds a note that was fine (V37).
  drill: {
    key: 'u4',
    add: 'One of the five is a note that was fine all along, so not every story needs fixing.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'p-p-onnote', step: 'P1' }, { case: 'p-p-flat', step: 'P1' }],
                [{ case: 'p-p-sharp', step: 'P1' }, { case: 'p-p-scoop', step: 'P1' }, { case: 'p-p-guess', step: 'P1' }],
                [{ tell: 'flat~onnote' }, { tell: 'flat~sharp' }, { tell: 'scooping~flat' },
                 { tell: 'guessing~flat' }, { tell: 'guessing~scooping' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['p-r-onnote-1', 'p-r-flat-1', 'p-r-sharp-1'],
                ['p-r-scoop-1', 'p-r-guess-1'],
                ['p-r-onnote-2', 'p-r-flat-2'],
                ['p-r-guess-2', 'p-r-scoop-2'],
                [{ earlier: 'u2' }]] }
    ],
    // Fresh stories for later days: two for each name (an action subject, E9). A due name returns as a story the learner has
    // not seen, beside a story of the name they most often take it for.
    returns: ['p-ret-onnote-1', 'p-ret-onnote-2',
              'p-ret-flat-1', 'p-ret-flat-2',
              'p-ret-sharp-1', 'p-ret-sharp-2',
              'p-ret-scoop-1', 'p-ret-scoop-2',
              'p-ret-guess-1', 'p-ret-guess-2']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-08', change: 'First version under lesson standard 1: the pitch branch of the singing key (docs/rebuild/singing-plan.md). Five names (a note that was fine taught first, then a little under, a little over, a slide up into the note, and hunting for it), one term (the note check), seven look-alike pairs, two named exceptions where the hunt wins, and a drill that holds a fine note in every stage.' },
      { rev: 2, date: '2026-10-09', change: 'Sound added: a note tool on the note-check card (pick a note, hear it, sing it, and the app says whether you are under it, on it or over it), and example sounds on five cards (a match, a note a shade under, a note a shade over, a slide up into the note, and a voice hunting for it). No teaching text changed except one sentence on the note-check card.' }
    ],
    keyChanges: [],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-lessons.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
