// Singing, Unit Five: the unit record. A BRANCH unit (lesson standard A1 to A11) of an ACTION subject (P26): it teaches the
// part of the first question's answer "How the words sound when they come out", which has one question and four names.
// The voice from outside is taught first (nothing is wrong), then the three sounds that can be changed, each next to its
// nearest neighbor. Every name says what to do on the spot, every drill stage holds a story where nothing is wrong, and the
// close has the plan card. Cards live in u5.cards-*.js, stories in u5.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('singing', 'u5', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 1,                 // unit revision, shown in the app
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Five',
  title: { fromKey: 'D1.tone' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Your voice sounds odd but the notes are right: two quick checks tell you what to change, and what to leave alone',
  teaches: { steps: ['T1'], outcomes: ['recorded', 'nasal', 'muffled', 'mumbled'], terms: [] },
  assumes: ['u1', 'u2', 'u3', 'u4'],   // everything these units teach may be used; the orient card restates the first question

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse. This branch has one question and every
  // answer leads to one name, so no answer keeps two names together. The four pairs form a ring (voice from outside,
  // pinched, dull, run together), and each is a pair a real complaint puts side by side. The two pairs people mix up most
  // have a look-alike card; the other two are taught on the question card. test is a question to put to a story, with no names in it.
  ledger: [
    { id: 'nasal~recorded', pair: ['nasal', 'recorded'], step: 'T1',
      shared: 'Both sound strange to the singer, and both can seem worse on a recording.',
      rule: 'In {o:recorded} the sound is open, the words are clear, and holding your nose shut changes it little. The only surprise is that your voice sounds thinner and higher than it does from inside. In {o:nasal} the sound is pinched, and the nose check changes it a lot.',
      test: 'Hold your nose shut and sing an “ah”: does the sound change a lot, or hardly at all?' },
    { id: 'muffled~mumbled', pair: ['muffled', 'mumbled'], step: 'T1',
      shared: 'In both, a listener has trouble following the words.',
      rule: 'In {o:muffled} the mouth hardly opens and the sound is dull, stuck at the back of the throat. In {o:mumbled} the mouth is open and the sound is clear, but the t, d and s sounds fade and the words run together.',
      test: 'Look in a mirror: is the mouth barely open and the sound dull, or is it open and clear with the words still running together?' },
    { id: 'nasal~muffled', pair: ['nasal', 'muffled'], step: 'T1', taughtIn: 'q-how',
      shared: 'Both are a sound you dislike, with the notes and the air fine.',
      rule: 'In {o:nasal} the sound is pinched, and the nose check changes it a lot. In {o:muffled} the mouth hardly opens and the sound is dull, so the words are hard to follow.',
      test: 'Is the sound pinched, with a big change when you hold your nose shut? Or is it dull, with the mouth barely open?' },
    { id: 'mumbled~recorded', pair: ['mumbled', 'recorded'], step: 'T1', taughtIn: 'q-how',
      shared: 'In both, the sound is open and clear, and nothing is tight or short of air.',
      rule: 'In {o:recorded} the words can be followed, even on the recording, and the only surprise is how thin and high your voice sounds. In {o:mumbled} the sound is just as open, but the consonants fade, and a listener cannot write the words down.',
      test: 'Could a listener write the words down, or is your voice itself the only surprise?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts (A13). The last part holds the
  // drill, and its close cards come after the drill. The parts follow what a singer notices first: a voice that sounds
  // odd to you (from outside, or pinched), then a voice a listener cannot follow (dull, or run together).
  parts: [
    { id: 'p1', title: 'The voice everyone else hears, and a pinched sound',
      cards: ['orient', 'meet-recorded', 'check-recorded', 'meet-nasal', 'check-nasal', 'look-nasal-recorded'] },
    { id: 'p2', title: 'A dull sound, and words that run together',
      cards: ['meet-muffled', 'check-muffled', 'meet-mumbled', 'check-mumbled', 'look-muffled-mumbled'] },
    { id: 'p3', title: 'The question, one whole story, then the drill',
      cards: ['q-how', 'check-how', 'worked-back-row'], drill: true, close: ['recap', 'plan'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is stories that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every story is new.
  // This is an action subject, so every stage that asks about stories holds the voice from outside, where nothing is wrong (V37).
  drill: {
    key: 'u5',
    add: 'One of the four is nothing to fix, so not every story here has a problem.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 't-p-greta-voice-memo', step: 'T1' }, { case: 't-p-luis-love-song', step: 'T1' }],
                [{ case: 't-p-priya-nursery', step: 'T1' }, { case: 't-p-ben-roommate', step: 'T1' }],
                [{ tell: 'nasal~recorded' }, { tell: 'muffled~mumbled' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['t-r-aiko-chorus', 't-r-marcus-ballad'],
                ['t-r-sofia-part', 't-r-marlon-road'],
                ['t-r-amir-hymn', 't-r-hugo-slow-song'],
                ['t-r-kenji-video', 't-r-elena-lullaby'],
                [{ earlier: 'u3' }]] }
    ],
    // Fresh stories for later days: two for each name (an action subject, E9). A due name returns as a story the learner has
    // not seen, beside a story of the name they most often take it for.
    returns: ['t-ret-pete-set', 't-ret-zoe-playback',
              't-ret-dolores-hymn', 't-ret-abe-party',
              't-ret-noor-first-set', 't-ret-gus-bedtime',
              't-ret-rosa-gospel', 't-ret-felix-verse']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-08', change: 'First version under lesson standard 1: the sound branch of the singing key (docs/rebuild/singing-plan.md). Four names (the voice from outside taught first, then the pinched sound, the dull sound and the words that run together, each next to its nearest neighbor, each with what to do on the spot), four look-alike pairs (two with a card, two on the question card), no terms, no tie-break, and a drill that holds the voice from outside in every stage.' }
    ],
    keyChanges: [],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-lessons.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
