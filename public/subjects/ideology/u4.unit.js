// Political Ideologies, Unit Four: the unit record. A BRANCH unit (lesson standard A13): it teaches the key's one question about old ways
// and the two names it leads to. Cards live in u4.cards-*.js, cases in u4.cases-*.js. Every text in the unit is invented.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('ideology', 'u4', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 4,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Four',
  title: { fromKey: 'D1.tradition' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Two names for a text that holds up old ways, the one question that tells them apart, and the names they are mistaken for',
  teaches: { steps: ['T1'], outcomes: ['conserv', 'react'], terms: [] },
  assumes: ['u1', 'u2', 'u3'],   // everything these units teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. This branch has one question and each of its answers keeps exactly one name, so the question keeps no two
  // names together. The first entry is the pair the question separates. The others pair a name of this unit with a name from another
  // branch that learners mistake it for (a pair may span two branches: its step is then the gate question, section 17).
  // Each entry is written once and used six ways: the look-alike card, its side-by-side table, the list on the question card, the
  // feedback when one is picked for the other, the grouping of drill items, and what returns together later.
  // test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'conserv~react', pair: ['conserv', 'react'], step: 'T1',
      shared: 'Both hold up what was handed down from the past, both are fond of it, and both can be sad about what has changed.',
      rule: '{o:conserv} asks for what is still there to be kept, and for any change to come slowly. Nothing is asked back. {o:react} says that an old order has gone, that its going was a wrong, and asks for it to be put back.',
      test: 'Does the text ask for something that has gone to be put back, after calling its going a wrong? Or does it ask only for what is still there to stay, and for change to be slow?' },
    { id: 'conserv~nationalism', pair: ['conserv', 'nationalism'], step: 'D1',
      shared: 'Both love the country and its past, both can say "our" ways and "our" people, and both leave elections alone.',
      rule: '{o:nationalism} puts one people first, and speaks for it as a whole: {a:D1.nation}. {o:conserv} puts first the ways handed down from the past, and asks for them to be kept: {a:D1.tradition}. The first is about who belongs. The second is about what should guide.',
      test: 'What does the text hold up first: one people, marked out by its country, its culture or its blood? Or ways that were handed down from the past, which it says should guide?' },
    { id: 'react~fasc', pair: ['react', 'fasc'], step: 'D1',
      shared: 'Both can speak of a great past, both can be impatient with a parliament, and both can ask for a very large change to the country.',
      rule: '{o:fasc} puts the nation first, as a single people, and wants one leader or movement to speak for everyone: {a:D1.nation}. {o:react} puts an old order first, a crown, a church or ranks of birth that the text says were torn down wrongly: {a:D1.tradition}.',
      test: 'Does the text hold up an order that once stood, and ask for it back? Or does it speak for one people and say that one leader or movement should speak for everyone?' },
    { id: 'conserv~socdem', pair: ['conserv', 'socdem'], step: 'D1',
      shared: 'Both can be fond of the old ways of a town, and both can ask the government to protect people from change that comes too fast.',
      rule: '{o:socdem} sorts people into those who work for pay and those who own the businesses, and takes the workers’ side: {a:D1.class}. {o:conserv} holds up ways handed down, and sets nobody against anybody: {a:D1.tradition}.',
      test: 'Does the text sort people into those who work for pay and those who own the businesses, and stand with the first? Or does it only hold up what was handed down?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. The part with drill: true is the last;
  // its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Keeping what has been handed down, and bringing back what has gone',
      cards: ['orient-ways', 'meet-conserv', 'check-conserv', 'meet-react', 'check-react',
              'look-conserv-react', 'q-ways', 'check-ways'] },
    { id: 'p2', title: 'The names these two are mistaken for, then the drill',
      cards: ['look-conserv-nationalism', 'exc-fasc-react', 'exc-class-conserv', 'worked-hospice'],
      drill: true, close: ['recap-ways'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups inside a tier
  // band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  drill: {
    key: 'u4',            // the old quick-drill totals for this unit were stored under pl:ideology:stats:u4 (frozen; see E8)
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'i4-p-choir', step: 'T1' }, { case: 'i4-p-seats', step: 'T1' }],
                [{ tell: 'conserv~react' }, { tell: 'conserv~nationalism' }],
                [{ tell: 'react~fasc' }, { tell: 'conserv~socdem' }]] },
      { ask: 'route',
        items: [['i4-r-bake', 'i4-r-yard'],
                ['i4-r-orchard', 'i4-r-calm'],
                ['i4-r-flag', 'i4-r-banner'],
                [{ earlier: 'u1' }, { earlier: 'u1' }]] }
    ],
    // Fresh cases for later days: one for each name (E9). A due name returns as a case the learner has not seen,
    // beside a case of the name they most often take it for.
    returns: ['i4-ret-founders', 'i4-ret-wardens']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the old-ways branch of the key, taught as two names and one question, with the names learners mistake them for (from the nation and working-people branches) as look-alike pairs. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' }
    ],
    // What the K2 rewrite changed in the key for this branch, and why (docs/rebuild/ideology-plan.md, part a). The gate and its tie-breaks
    // are carried by Unit One.
    keyChanges: [
      { step: 'T1', was: 'check 3, "What is the goal at the end?", and "restore, not revolution" in the card prose',
        now: '"What does the text want done with the old ways?": keep what remains and change slowly, or bring back an order that has gone',
        why: 'K2.2: the old key never asked this question, so the name was decided by knowledge the key did not hold. It is now a key question: it is taught, asked and scored.' },
      { outcome: 'conserv', was: 'described only as what Reactionary conservatism is not ("the ordinary conservative who accepts elections, slow change and a free press")',
        now: '"Conservatism": keep the old ways, and change slowly',
        why: 'K2.9: the sound case of this branch. Without it every text that values faith and home life would be named Reactionary conservatism.' },
      { outcome: 'react', was: 'Reactionary conservatism',
        now: 'same name; needs: an old order said to be wrongly torn down, and the text asking for it back',
        why: 'K2.7: one line that holds for every case the unit calls by this name. The old card’s remark that the word is an insult in everyday talk is now said on the meet card, where the name is given.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
