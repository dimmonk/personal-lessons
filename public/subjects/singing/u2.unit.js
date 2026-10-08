// Singing, Unit Two: the unit record. A BRANCH unit (lesson standard A1 to A11) of an ACTION subject (P26): it teaches the
// part of the key that follows the first question's answer "How the top notes come out", which has one question and five
// names. The real thing (a light, easy top) is taught first, every name says what to do on the spot, every drill stage
// holds the real thing, and the close has the plan card. Cards live in u2.cards-*.js, stories in u2.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('singing', 'u2', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 1,                 // unit revision, shown in the app
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Two',
  title: { fromKey: 'D1.high' },     // a branch unit is titled with the first-question answer it teaches
  subtitle: 'Five things that can happen at the top of a line, and the one that needs no fixing',
  teaches: { steps: ['H1'], outcomes: ['lighttop', 'pushing', 'cracking', 'squeezing', 'outofrange'], terms: ['chest', 'head'] },
  assumes: ['u1'],        // everything Unit One teaches may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. This branch has one question and every answer leads to one name, so no answer keeps two names
  // together; all ten pairs are entries because a real line at the top can put any two of them side by side, and the
  // question separates every one of them. Five have a card of their own (three look-alike cards, and the two tie-breaks as
  // named exceptions); the other five are taught on the question card. test is a question to put to a story, with no names.
  ledger: [
    { id: 'lighttop~pushing', pair: ['lighttop', 'pushing'], step: 'H1',
      shared: 'It is the same top note, and in both the singer is working to sing it well.',
      rule: 'In {o:lighttop} the voice goes lighter as the line climbs, and nothing tightens. In {o:pushing} the voice goes louder and heavier as the line climbs, and the neck and jaw tighten.',
      test: 'As the line climbed, did the voice get lighter or louder, and did the neck stay loose or tighten?' },
    { id: 'cracking~lighttop', pair: ['cracking', 'lighttop'], step: 'H1',
      shared: 'In both, the voice ends up in the lighter sound at the top.',
      rule: 'In {o:lighttop} the change to the lighter voice is smooth and nothing jolts. In {o:cracking} the change comes with a jolt: the voice flips on one note, with a gap.',
      test: 'Was the change from the heavier voice to the lighter one smooth, or did it flip on one note with a jolt?' },
    { id: 'outofrange~pushing', pair: ['outofrange', 'pushing'], step: 'H1',
      shared: 'In both, the top note is a struggle and the singer strains for it.',
      rule: 'In {o:pushing} the note is reached by getting louder, and it was never tried lightly, so nobody knows yet whether it is there. In {o:outofrange} the note was tried lightly, with a loose throat, and it still was not there.',
      test: 'Did you try the note lightly, with a loose throat, or only by getting louder?' },
    { id: 'cracking~outofrange', pair: ['cracking', 'outofrange'], step: 'H1',
      shared: 'In both, the voice flips into a thin, airy sound on the way up.',
      rule: 'In {o:cracking} the note after the flip is there. In {o:outofrange} the note after the flip is still not there, even sung lightly with a loose throat, and that wins when a story shows both.',
      test: 'After the flip, was the next note there, or was it still missing when you sang it lightly?' },
    { id: 'pushing~squeezing', pair: ['pushing', 'squeezing'], step: 'H1',
      shared: 'In both, the neck, jaw and throat are tight at the top and the sound is under strain.',
      rule: 'In {o:pushing} the voice gets louder as the line climbs. In {o:squeezing} the sound goes thin and tight without getting louder, and when a story shows both, the louder voice wins.',
      test: 'Did the voice keep getting louder, or did it go thin and tight without getting louder?' },
    { id: 'lighttop~squeezing', pair: ['lighttop', 'squeezing'], step: 'H1', taughtIn: 'q-high',
      shared: 'In both, the sound at the top is thin.',
      rule: 'In {o:lighttop} the thin sound is easy: the throat is loose and nothing aches. In {o:squeezing} the thin sound is tight: the throat, jaw or tongue clamp, and the throat aches afterward.',
      test: 'Was the throat loose, or did it clamp, and did it ache afterward?' },
    { id: 'lighttop~outofrange', pair: ['lighttop', 'outofrange'], step: 'H1', taughtIn: 'q-high',
      shared: 'In both, the top is not full and strong, and the singer wonders whether something is wrong.',
      rule: 'In {o:lighttop} the note is there, light and clean. In {o:outofrange} the note is not there, even when it is sung lightly.',
      test: 'Did the note come out clean, only lighter than the low ones, or was it missing?' },
    { id: 'cracking~pushing', pair: ['cracking', 'pushing'], step: 'H1', taughtIn: 'q-high',
      shared: 'In both, the top is rough, and a listener hears that something went wrong.',
      rule: 'In {o:pushing} the sound stays heavy and gets louder, with no flip. In {o:cracking} the voice flips into a thin, airy sound on one note.',
      test: 'Did the sound stay heavy and get louder, or did it flip into a thin, airy sound?' },
    { id: 'cracking~squeezing', pair: ['cracking', 'squeezing'], step: 'H1', taughtIn: 'q-high',
      shared: 'In both, the sound at the top goes thin.',
      rule: 'In {o:cracking} the thin sound is airy and sudden, a flip on one note. In {o:squeezing} the thin sound is tight, with the throat, jaw or tongue clamped, and there is no flip.',
      test: 'Was the thin sound airy and sudden, or tight with the throat clamped?' },
    { id: 'outofrange~squeezing', pair: ['outofrange', 'squeezing'], step: 'H1', taughtIn: 'q-high',
      shared: 'In both, the top note does not come out well and the throat feels the effort.',
      rule: 'In {o:squeezing} the throat is clamped, and loosening it is the fix. In {o:outofrange} the throat is already loose and the note is still not there.',
      test: 'Did the throat clamp as you reached for the note, or was it loose and the note still missing?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts (A13). The last part holds the
  // drill, and its close cards come after the drill. The parts follow what a singer notices first: a top that is fine
  // beside a top that is shouted, then a flip and a clamp, then a note that is not there.
  parts: [
    { id: 'p1', title: 'The two voices, a top that is fine, and a top that is shouted',
      cards: ['orient', 'term-chest', 'term-head', 'meet-lighttop', 'check-lighttop', 'meet-pushing', 'check-pushing', 'look-lighttop-pushing'] },
    { id: 'p2', title: 'A flip, and a throat that clamps',
      cards: ['meet-cracking', 'check-cracking', 'look-cracking-lighttop', 'meet-squeezing', 'check-squeezing', 'exc-clamp'] },
    { id: 'p3', title: 'A note that is not there, the question, one whole story, then the drill',
      cards: ['meet-outofrange', 'check-outofrange', 'look-outofrange-pushing', 'exc-flip', 'q-high', 'check-high', 'worked-flip'],
      drill: true, close: ['recap', 'plan'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is stories that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every story is new.
  // This is an action subject, so every stage that asks about stories holds the one where nothing is wrong (V37).
  drill: {
    key: 'u2',
    add: 'One of the five is fine as it is, so not every story here is a problem.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'h-p-light-choir', step: 'H1' }, { case: 'h-p-push-car', step: 'H1' }, { tell: 'lighttop~pushing' }],
                [{ case: 'h-p-crack-church', step: 'H1' }, { case: 'h-p-light-kids', step: 'H1' }, { tell: 'cracking~lighttop' }],
                [{ case: 'h-p-squeeze-home', step: 'H1' }, { case: 'h-p-push-openmic', step: 'H1' }, { tell: 'pushing~squeezing' }],
                [{ case: 'h-p-oor-choir', step: 'H1' }, { case: 'h-p-squeeze-kids', step: 'H1' }, { tell: 'cracking~outofrange' }, { tell: 'outofrange~pushing' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['h-r-light-karaoke', 'h-r-push-home'],
                ['h-r-crack-karaoke', 'h-r-squeeze-car'],
                ['h-r-oor-party', 'h-r-squeeze-choir'],
                ['h-r-light-party', 'h-r-push-church'],
                ['h-r-crack-openmic', 'h-r-oor-karaoke'],
                [{ earlier: 'u1' }]] }
    ],
    // Fresh stories for later days: two for each name (an action subject, E9). A due name returns as a story the learner has
    // not seen, beside a story of the name they most often take it for.
    returns: ['h-ret-light-openmic', 'h-ret-light-home',
              'h-ret-push-church', 'h-ret-push-karaoke',
              'h-ret-crack-kids', 'h-ret-crack-party',
              'h-ret-squeeze-shower', 'h-ret-squeeze-party',
              'h-ret-oor-kids', 'h-ret-oor-home']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-08', change: 'First version under lesson standard 1: the top-of-the-line branch of the singing key (docs/rebuild/singing-plan.md). Five names (the light, easy top taught first, then pushing, cracking, squeezing and out of your range, each with what to do on the spot), two terms (chest voice, head voice), ten look-alike pairs with three look-alike cards and two named exceptions for the key\'s tie-breaks, and a drill that holds the light, easy top in every stage.' }
    ],
    keyChanges: [],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-lessons.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
