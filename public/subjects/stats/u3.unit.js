// Statistical Claims, Unit Three: the unit record. A BRANCH unit (lesson standard section 3): it teaches the key's question for the
// gate answer "Who was counted" and the four names that answer leads to. It assumes Unit One (the gate) and Unit Two (the claims
// that hold, which every drill stage mixes in and every fault here is set beside). Cards are in u3.cards-*.js, cases in u3.cases-*.js.
// Text never retypes key wording. It uses tokens, filled in from key.js: {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option}
// {when:STEP.option} {test:ledgerId} {cue:STEP}.
// Statistical Claims is an action subject: every portrait has `act`, every case stage of the drill holds a claim that holds, the
// unit ends with a plan card, and each name has four cases for later days.
// Names taught by Unit Two are used here through the answers of the key's own questions ({a:S1.holds}, {a:H1.group}); the unit's
// own prose never types a name of an assumed unit, a term of an assumed unit, or a line of the key.

FC.unit('stats', 'u3', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 1,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Three',
  title: { fromKey: 'S1.counted' },       // a branch unit is titled with the gate answer it teaches
  subtitle: 'Four ways the people or things in a figure can fail to stand for the group the claim is about, and how to tell which one you are looking at',
  teaches: { steps: ['A1'], outcomes: ['survivor', 'selfselect', 'nonresp', 'smalln'], terms: [] },
  assumes: ['u1', 'u2'],  // everything Unit One and Unit Two teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. Each of the four names is set beside the other names it is taken for, and beside the claim that holds
  // which it is most often mistaken for (a pair across the gate: its step is the gate question, taught by Unit One).
  // Each entry is written once and used six ways: the look-alike card, its table, the list on the question card, the feedback
  // when one is picked for the other, the grouping of drill items, and what returns together later. test names nobody.
  ledger: [
    { id: 'survivor~samp_ok', pair: ['survivor', 'samp_ok'], step: 'S1',
      shared: 'Both can report the same figure from the same garden, shop, club or program, and both sound equally sure.',
      rule: 'In {o:survivor} the figure is worked out after the fact from the ones that lasted, the ones that did not are missing from it, and it is read as true of everyone who started. In {o:samp_ok} everyone who started is in the figure, or the ones in it were picked by lottery from a full list and nearly all of them answered, and the claim speaks only for that group.',
      test: 'How many started, and are all of them in the figure? If some are missing, are they missing because of what happened to them?' },
    { id: 'survivor~selfselect', pair: ['survivor', 'selfselect'], step: 'A1',
      shared: 'Both come with a claim about a whole group and a figure from only some of it, and the ones left out are the ones who could change it.',
      rule: 'In {o:survivor} everyone was there at the start, and the figure is worked out after the fact from the ones that lasted; the ones that left are missing because of what happened to them. In {o:selfselect} nobody was asked by name, and the figure is worked out from the ones who chose to answer; the ones who are missing never chose to take part.',
      test: 'Did the people or things in the figure get in by lasting to the end, or by choosing to answer when nobody asked them by name?' },
    { id: 'survivor~nonresp', pair: ['survivor', 'nonresp'], step: 'A1', taughtIn: 'worked-yoga',
      shared: 'In both, a list of people was asked by name, and the figure comes from the ones who answered.',
      rule: 'In {o:nonresp} the list is the whole group the claim speaks for, and many on it did not reply. In {o:survivor} the list holds just the ones who stayed to the end, so almost nobody on it fails to reply, and the ones who left were never on it.',
      test: 'Is everyone the claim speaks for on the list that was asked? Or is the list only the ones who are still there?' },
    { id: 'selfselect~cause_ok', pair: ['selfselect', 'cause_ok'], step: 'S1',
      shared: 'In both, the people in the poll or the study came forward by their own choice.',
      rule: 'In {o:selfselect} the answers of the people who chose to take part are read as true of a wider group. In {o:cause_ok} the people who volunteered were split into two groups by lottery, one was given the thing and the other not, and the claim is about the difference between those two groups, which choosing to volunteer cannot explain.',
      test: 'Does the claim speak for a wider group than the people who came forward? Or is it about a difference between two groups that a lottery formed?' },
    { id: 'selfselect~nonresp', pair: ['selfselect', 'nonresp'], step: 'A1',
      shared: 'In both, the figure comes from some of the people it speaks for, and they are the ones with something to say.',
      rule: 'In {o:nonresp} everyone on a known list was asked by name, and many did not reply. In {o:selfselect} nobody was asked by name, and anyone who wanted to could answer.',
      test: 'Was everyone on a known list asked by name, or could anyone who saw the call answer?' },
    { id: 'nonresp~samp_ok', pair: ['nonresp', 'samp_ok'], step: 'S1',
      shared: 'Both ask the same list and can report the same figure.',
      rule: 'In {o:nonresp} many on the list did not reply and nothing was done to hear from them, so the replies are read as the whole list. In {o:samp_ok} most of the list answered, or the ones who did not were followed up until most had, so the figure is a fair picture of the list.',
      test: 'How many of the list answered, and what was done about the ones who did not?' },
    { id: 'nonresp~smalln', pair: ['nonresp', 'smalln'], step: 'A1',
      shared: 'Both give a figure from only a few people, and both can sound exact.',
      rule: 'In {o:nonresp} the figure comes from the few who replied out of a much bigger list, so most of the group is missing. In {o:smalln} nobody is missing: everyone there is has been counted, and the whole group is only a handful.',
      test: 'Out of how many were the few counted: a much bigger list of people who did not reply, or everyone there is?' },
    { id: 'smalln~samp_ok', pair: ['smalln', 'samp_ok'], step: 'S1',
      shared: 'Both can report a share from the same kind of group, and both sound equally sure.',
      rule: 'In {o:smalln} there are so few in the figure that a change of one or two in the count would swing it a long way, and a high or low figure is read as meaning something. In {o:samp_ok} there are enough in the figure that the same change would hardly show, and the claim says no more than the figure for that group.',
      test: 'What would the figure be with one or two more or fewer, and does the claim say more than the group can show?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Figures from the ones that lasted, and from the ones who chose to answer',
      cards: ['orient', 'meet-survivor', 'again-survivor', 'lens', 'portrait-survivor', 'check-survivor', 'look-survivor-samp',
              'meet-selfselect', 'again-selfselect', 'portrait-selfselect', 'check-selfselect', 'look-survivor-selfselect', 'exc-volunteers'] },
    { id: 'p2', title: 'Figures from the few who replied, and from only a handful',
      cards: ['meet-nonresp', 'again-nonresp', 'portrait-nonresp', 'check-nonresp', 'look-selfselect-nonresp', 'look-nonresp-samp', 'refute-bigger',
              'meet-smalln', 'again-smalln', 'portrait-smalln', 'check-smalln', 'look-nonresp-smalln', 'look-smalln-samp'] },
    { id: 'p3', title: 'The key’s question, two whole claims, then the drill',
      cards: ['q-how', 'check-how', 'worked-poll', 'worked-yoga'], drill: true, close: ['recap', 'transfer', 'plan'] }
  ],

  // The drill is a ramp of stages (lesson standard A10). The app owns the wording of every stage instruction. Items are authored in
  // groups: cases that share ledger entries and one tier. Every case is new. Each case stage holds claims that hold (an action
  // subject), written as cases of the claims-that-hold names that Unit Two teaches, so the learner meets a sound figure at every step.
  drill: {
    key: 'u3',            // the old quick-drill totals for this unit would have been stored under pl:stats:stats:u3 (frozen; see E8)
    add: 'Some of these claims have nothing wrong with them: the figure comes from everyone, from people picked by lottery from a full list and nearly all heard from, or from a big enough group. A claim that sounds sure of itself is not for that reason a sound one, and a claim with few people in it is not for that reason a faulty one. Read how the people or things got into the figure, and go by that.',
    rungs: [
      { ask: 'name',
        items: [['cd-n-lasted', 'cd-n-chose', 'cd-n-ok1'],
                ['cd-n-replied', 'cd-n-handful', 'cd-n-ok2']] },
      { ask: 'piece',
        items: [[{ case: 'cd-p-lasted', step: 'A1' }, { case: 'cd-p-chose', step: 'A1' }],
                [{ case: 'cd-p-replied', step: 'A1' }, { case: 'cd-p-handful', step: 'A1' }, { case: 'cd-p-ok', step: 'S1' }],
                [{ tell: 'selfselect~nonresp' }, { tell: 'nonresp~samp_ok' }, { tell: 'survivor~selfselect' }, { tell: 'smalln~samp_ok' }],
                ['cd-rev-survivor', 'cd-rev-selfselect', 'cd-rev-nonresp', 'cd-rev-smalln'],
                [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['cd-f-lasted', 'cd-f-chose', 'cd-f-replied', 'cd-f-ok']] },
      { ask: 'route',
        items: [['rt-survivor-a', 'rt-selfselect-a'],
                ['rt-nonresp-a', 'rt-smalln-a', 'rt-ok-a'],
                ['rt-nonresp-b', 'rt-ok-b'],
                ['rt-survivor-b', 'rt-ok-c', 'rt-smalln-b'],
                ['rt-vol', 'rt-selfselect-b'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'cd-claim-demo',
        items: [['cd-claim-poll'], ['cd-claim-replies'], ['cd-claim-village']] }
    ],
    // Fresh cases for later days: four for each name, one for each of its scheduled returns (an action subject has a fourth, at
    // about twelve weeks). A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['cr-sv-1', 'cr-sv-2', 'cr-sv-3', 'cr-sv-4',
              'cr-ss-1', 'cr-ss-2', 'cr-ss-3', 'cr-ss-4',
              'cr-nr-1', 'cr-nr-2', 'cr-nr-3', 'cr-nr-4',
              'cr-sn-1', 'cr-sn-2', 'cr-sn-3', 'cr-sn-4']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit for the gate answer “Who was counted”. Not yet deployed, so later edits before the first deploy stay revision 1. Replaces old Unit Two (cards and drill V2) and old error-drill items 6, 7 and 9; every case is new.' }
    ],
    // What the K2 rewrite changed in this branch, and why (docs/rebuild/stats-plan.md, "Who was counted").
    keyChanges: [
      { step: 'A1', was: 'Two questions: "How did these people or cases get into the data?" and "Who is missing, and would adding them change the answer?"; every answer of the first kept one name except one',
        now: 'one question, "How did the people or things in the figure get into it?", with four answers',
        why: 'V55: the second question repeated the first. The four answers are what an observer can point to in a case: the figure is worked out from the ones that lasted, nobody was asked by name, a known list was asked and many did not reply, or everyone was counted and there are only a handful.' },
      { step: 'A1', was: '"They chose to take part" and "Only the ones who replied were counted", which the audit found fit the same survey',
        now: '"They chose to answer, when anyone could" and "Everyone on a list was asked, and many did not reply"',
        why: 'The difference an observer can point to is whether people were asked by name from a known list or nobody was asked at all. This unit teaches it with a look-alike card on one school and one survey (same figure, two ways in).' },
      { outcome: 'smalln', was: 'Too few cases to trust (small-number volatility); "Nobody was filtered out", shared with the sound count',
        now: '"Too few to trust", with the answer "All were counted, but there are only a handful"',
        why: 'Settles where small numbers live: in this branch, because the trouble is too few in the figure. It is taught beside the claim that holds it is mistaken for, a share from a group big enough that one or two more or fewer barely move it.' },
      { outcome: 'selfselect', was: 'a trial of 40,000 volunteers was keyed sound while the course taught that volunteers are a fault',
        now: 'the unit teaches the line as an exception: looks like Self-selection bias, is a claim that holds because the volunteers were split by lottery',
        why: 'This is the line between choosing who is counted and choosing who is compared (plan change 16).' }
    ],
    wrongIdeas: [
      { card: 'refute-bigger', about: 'selfselect',
        source: { kind: 'published', verified: false,
          ref: 'Squire P (1988), Why the 1936 Literary Digest poll failed, Public Opinion Quarterly 52(1): 125-133: a poll of millions was far off because of who answered and who was asked, not how many. Also the old Statistical Claims card "A big sample does not fix a bad one". To be read and confirmed online before release, or replaced by what cold readers actually say.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
