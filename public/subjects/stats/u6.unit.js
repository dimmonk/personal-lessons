// Statistical Claims, Unit Six: the unit record. The branch of the key that follows the gate answer "What it says caused what".
// Cards live in u6.cards-*.js, cases in u6.cases-*.js. Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.
// Statistical Claims is an action subject: every portrait says what to do, every case stage of the drill holds a claim in which nothing goes
// wrong (a case of the names Unit Two teaches), and the unit ends with a plan card.

FC.unit('stats', 'u6', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 2,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Six',
  title: { fromKey: 'S1.cause' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Four other ways to explain the same result, and the one claim of cause where none of them is open',
  teaches: { steps: ['K1'], outcomes: ['nocontrol', 'regression', 'confound', 'reverse'], terms: [] },
  assumes: ['u1', 'u2', 'u3', 'u4', 'u5'],   // everything these units teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. This branch has one question and each of its answers keeps exactly one name, so every entry is a pair that learners mix up
  // in practice, not one the key puts together. Three pairs are two names of this branch (K1 is their first question). Three pairs span the gate:
  // a fault beside the claim in which nothing goes wrong that it is most often mistaken for, or beside the name of another branch (S1 is their first
  // question). Each entry is written once and used six ways: the look-alike card ("how to tell them apart"), its side-by-side table, the list on the
  // question card, the feedback when one is picked for the other, the grouping of drill items, and what returns together later. test has no name in it.
  ledger: [
    { id: 'nocontrol~regression', pair: ['nocontrol', 'regression'], step: 'K1',
      shared: 'Both give a result that comes after something was done, and in both nothing was left alone and counted in the same way to set beside it.',
      rule: 'In {o:regression} the group was chosen for how badly, or how well, it had done, so a return toward its usual level is expected with nothing done. In {o:nocontrol} nothing about how the group was formed makes a change likely: everyone who got the thing, or the one place that got it, is counted.',
      test: 'How was the group picked? Was it everyone who got the thing, or was it picked because it was at its worst or best?' },
    { id: 'nocontrol~confound', pair: ['nocontrol', 'confound'], step: 'K1',
      shared: 'Both are about people who chose to take part in something, and both end with a claim that it worked.',
      rule: 'In {o:confound} two groups are set side by side, the people who did the thing and the people who did not, and the account shows something else that differs between them. In {o:nocontrol} only the people who did the thing, or the one place that got it, are counted, so there is nothing beside them for anything to differ from.',
      test: 'Is anyone who went without counted beside the people who got the thing? If so, does the account show something else that differs between the two groups?' },
    { id: 'confound~reverse', pair: ['confound', 'reverse'], step: 'K1',
      shared: 'Both set two things side by side that go together, and in both someone says that the first caused the second.',
      rule: 'In {o:confound} something else, which differs between the two groups, could bring about the result on its own. In {o:reverse} nothing else is needed: the result itself could have come first and led people to the thing.',
      test: 'Is there something else that differs between the groups and could bring about the result by itself? Or could the result have come first, and led people to the thing?' },
    { id: 'nocontrol~cause_ok', pair: ['nocontrol', 'cause_ok'], step: 'S1',
      shared: 'Both say that something worked, and both may give the same figure for the people who got it.',
      rule: 'In {o:cause_ok} a second group of the same kind went without, was formed by chance and was counted in the same way, so the difference between the groups is what the claim rests on. In {o:nocontrol} there is no second group, or only a result from before and after, so nothing shows what would have happened anyway.',
      test: 'Is there a second group that went without, formed by chance and counted in the same way? Or is the result only for the people or the place that got the thing?' },
    { id: 'confound~cause_ok', pair: ['confound', 'cause_ok'], step: 'S1',
      shared: 'Both set a group that got a thing beside a group that did not, and both can show the same difference in the result.',
      rule: 'In {o:cause_ok} chance decided who went in which group, so nothing else is likelier to be found in one group than in the other. In {o:confound} the people chose, or their circumstances put them there, so something else could differ between the groups and bring about the result on its own.',
      test: 'Who decided which group each person was in: they did, their circumstances did, or a lottery did?' },
    { id: 'confound~simpson', pair: ['confound', 'simpson'], step: 'S1',
      shared: 'Both set two totals side by side, and in both a hidden mix of easier and harder, or of one kind of person and another, can move the totals on its own.',
      rule: 'In {o:simpson} two places or people that each deal with cases (hospitals, tutors, shops) are set side by side as a ranking, and each deals with a different mix of easy and hard ones. In {o:confound} people or places that did one thing are set beside ones that did not, and the claim says that the thing made the difference.',
      test: 'Are the two totals a ranking of two places or people that each deal with cases? Or is a group that did something set beside a group that did not, with a claim that the thing made the difference?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'One group, before and after, and a group picked at its worst',
      cards: ['orient', 'meet-nocontrol', 'again-nocontrol', 'lens', 'portrait-nocontrol', 'check-nocontrol',
              'meet-regression', 'again-regression', 'portrait-regression', 'check-regression', 'refute-after',
              'look-nocontrol-regression', 'exc-extreme', 'look-nocontrol-fair'] },
    { id: 'p2', title: 'Two groups that put themselves where they are, and a cause that runs the other way',
      cards: ['meet-confound', 'again-confound', 'portrait-confound', 'check-confound', 'look-nocontrol-confound', 'refute-nothing',
              'meet-reverse', 'again-reverse', 'portrait-reverse', 'check-reverse',
              'look-confound-reverse', 'look-confound-fair', 'exc-simpson'] },
    { id: 'p3', title: 'The question, and two whole claims, then the drill',
      cards: ['q-cause', 'check-cause', 'worked-bikers', 'worked-swim'], drill: true, close: ['recap', 'transfer', 'plan'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). Items are authored in groups: a group is cases that share ledger entries and one tier.
  // The app shuffles the groups inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  // A case of "Nothing goes wrong" is in every stage that asks about cases (P26, V37): in this unit, a case of the name Unit Two teaches for a claim of cause.
  drill: {
    key: 'u6',            // the old quick-drill totals for this unit were stored under pl:stats:stats:u6 (frozen; see E8)
    add: 'Some of these claims have nothing wrong with them, and that is on purpose. A claim of cause that was tested fairly deserves to be believed, and you need to tell it from the others as surely as you tell the others from each other. A claim that sounds sure is not, for that reason, one that holds.',
    rungs: [
      { ask: 'name',
        items: [['k-n-flyers', 'k-n-ward', 'k-n-fair1'], ['k-n-mentor', 'k-n-rv', 'k-n-fair2']] },
      { ask: 'piece',
        items: [[{ case: 'k-p-yoga', step: 'K1' }, { case: 'k-p-stores', step: 'K1' }],
                [{ case: 'k-p-gardens', step: 'K1' }, { case: 'k-p-cafes', step: 'K1' }],
                [{ case: 'k-p-clinic', step: 'S1' }],
                [{ tell: 'nocontrol~regression' }, { tell: 'confound~reverse' }],
                [{ tell: 'nocontrol~cause_ok' }, { tell: 'confound~cause_ok' }],
                ['k-rev-nocontrol', 'k-rev-regression', 'k-rev-confound', 'k-rev-reverse'],
                [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['k-f-shower', 'k-f-reading', 'k-f-stretch'], ['k-f-skis', 'k-f-ads']] },
      { ask: 'route',
        items: [['k-r-poetry', 'k-r-funds', 'k-r-walk'],
                ['k-r-paint', 'k-r-crowds', 'k-r-buspass'],
                ['k-r-trucks', 'k-r-pressure'],
                ['k-r-studygroup', 'k-r-staff'],
                ['k-r-wellness', 'k-r-patrol'],
                ['k-r-sauna', 'k-r-fourday'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'k-claim-demo',
        items: [['k-claim-after'], ['k-claim-nothing'], ['k-claim-gym'], ['k-claim-camp']] }
    ],
    // Fresh cases for later days: four for each name (an action subject has a fourth return, at about twelve weeks).
    returns: ['k-ret-lawn', 'k-ret-chess', 'k-ret-loyalty', 'k-ret-posters',
              'k-ret-teams', 'k-ret-cholesterol', 'k-ret-batters', 'k-ret-zoo',
              'k-ret-bikeshare', 'k-ret-dogfood', 'k-ret-service', 'k-ret-choir',
              'k-ret-giving', 'k-ret-brushing', 'k-ret-overtime', 'k-ret-extrahelp']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the cause branch of Statistical Claims. Not yet deployed, so later edits before the first deploy stay revision 1. Replaces old Unit Five (cards and drill V5), the card and items for No comparison group from old Unit Four, and old faulty-claims item 2.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' }
    ],
    // What the K2 rewrite changed in the key for this branch, and why (docs/rebuild/stats-plan.md, section (a), "What it says caused what").
    keyChanges: [
      { step: 'K1', was: 'Two questions: "What else could produce this same pattern?" and "What would settle it?", with two fixes never taught',
        now: 'one question, "What else could produce the same result?", with four answers; what would settle each is taught in its meet and portrait cards and on the question card, and is not asked as a second question',
        why: 'V55: the second question repeated the first. What settles each answer is what to ask for, and it is taught where the answer is.' },
      { outcome: 'nocontrol', was: 'in the comparison branch, as a lone figure with nothing beside it', now: 'the first answer of the cause branch, "It would have happened anyway"',
        why: 'Every old case of a lone figure was a claim that something worked, and its fix was the same fix this branch already used for a group picked at its worst. Moving it here puts both in one question, separated by one tie-break.' },
      { step: 'K1', was: 'no tie-break; a group picked at its worst and given nothing to compare with showed two answers, and two old specimens were keyed to two different parts',
        now: '"It would have happened anyway" yields to "It was picked at its worst or best, and goes back toward usual"',
        why: 'K2.8: the later answer says why the change would have come anyway, so it is the more exact name. It is taught as the exception card of the first part and marked with `also` on every case that shows both.' },
      { step: 'K1', was: '"Something else that drives both at once", "It could run the other way", "The group was picked for being at an extreme, and drifted back"',
        now: 'Something else causes both / The second thing causes the first / It was picked at its worst or best, and goes back toward usual',
        why: 'K2.6 (no figure of speech) and K2.5 (all four are clauses saying what else produced the result).' }
    ],
    wrongIdeas: [
      { card: 'refute-after', about: 'nocontrol',
        source: { kind: 'published', verified: false,
          ref: 'The mistake of reading "after" as "because of" (post hoc, ergo propter hoc) is in every introductory text on reasoning about evidence; a specific cited source still has to be chosen and read online, or the card replaced by what cold readers actually say.' } },
      { card: 'refute-nothing', about: 'confound',
        source: { kind: 'cold-reader', verified: false,
          ref: 'Predicted from the old Statistical Claims error drill (item 2, "correlation is not causation, so it proves nothing"); not yet observed in a cold read. To be confirmed by a cold reader, or replaced by what they actually say.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
