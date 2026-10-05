// Psychology, Unit Two: the unit record. Cards live in u2.cards-*.js, cases in u2.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id}.

FC.unit('psychology', 'u2', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 2,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Two',
  title: { fromKey: 'D1.reasoning' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Five things a person’s reasoning can be doing, and how to tell which one you are looking at',
  teaches: { steps: ['R1'], outcomes: ['dissonance', 'sunkcost', 'confbias', 'motivated', 'fair'], terms: ['cd'] },
  assumes: ['u1'],        // everything Unit One teaches may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse.
  // Each entry is written once and used six ways: the look-alike card ("how to tell them apart"), its side-by-side
  // table, the list on the question card, the feedback when one is picked for the other, the grouping of drill items,
  // and what returns together later. test is a question to put to a case, with no names in it.
  // An entry is taught by the look-alike or exception card that names it (card.ledger), or by the card in taughtIn.
  // Its rule is never shown in feedback before that card has been read.
  ledger: [
    { id: 'dissonance~sunkcost', pair: ['dissonance', 'sunkcost'], step: 'R1',
      shared: 'Both look back at something the person has already done or spent.',
      rule: '{o:dissonance} gives a reason why something the person did is fine. {o:sunkcost} gives what is already spent as the reason to take the next step.',
      test: 'Read the reason the person gives. Does it say that something they did is fine or does not count? Or does it point at what is already spent and offer that as the reason for the next step?' },
    { id: 'confbias~motivated', pair: ['confbias', 'motivated'], step: 'R1',
      shared: 'In both, the person is harder on evidence they do not like, and ends where they began.',
      rule: 'In {o:motivated} the person set out on a search to settle a choice or a question, and the answer was chosen before the search began. In {o:confbias} nobody set out to search: evidence turns up, and the evidence against the view gets a harder test than the evidence for it.',
      test: 'Did the person set out on a search to settle something? If they did, can you point to the answer being chosen before the search began?' },
    { id: 'dissonance~confbias', pair: ['dissonance', 'confbias'], step: 'R1',
      shared: 'Both defend something the person is attached to, and the same person can do both.',
      rule: 'In {o:dissonance} the person gives a reason why something they did is fine, and no evidence is being tested. In {o:confbias} evidence for a view and evidence against it are in the case, and the evidence against it gets the harder test.',
      test: 'Is the person explaining something they did, or testing evidence about what is true?' },
    { id: 'confbias~fair', pair: ['confbias', 'fair'], step: 'R1',
      shared: 'Both start with a view and evidence against it.',
      rule: 'In {o:fair} the evidence against the view gets the same test that evidence for it would get, and the view goes where the evidence points. In {o:confbias} the evidence against the view gets a harder test than the evidence for it ever got, and the view stays.',
      test: 'Were the questions put to the evidence against the view also put to the evidence for it?' },
    { id: 'sunkcost~fair', pair: ['sunkcost', 'fair'], step: 'R1',
      shared: 'Both face a choice about something that has already cost a lot, and both can end with the person carrying on.',
      rule: 'In {o:sunkcost} the reason given for the next step is what is already spent. In {o:fair} the reason given is what the next step would cost and what it would bring.',
      test: 'Is the reason for the next step about what is already spent, or about what the next step would cost and bring?' },
    { id: 'dissonance~fair', pair: ['dissonance', 'fair'], step: 'R1',
      shared: 'In both, the person’s view can change.',
      rule: 'In {o:fair} a fact about the matter came between the old view and the new one. In {o:dissonance} the only thing that came between them is something the person did, and the new view is the reason why it is fine.',
      test: 'What came between the old view and the new one: a new fact about the matter, or only something the person did?' },
    { id: 'motivated~fair', pair: ['motivated', 'fair'], step: 'R1', taughtIn: 'portrait-fair',
      shared: 'Both can end on the answer the person hoped for.',
      rule: 'In {o:motivated} the answer was chosen before the search began, so the search could not have changed it. In {o:fair} the search came first and could have gone either way.',
      test: 'Could the search have come out the other way, and would the person have gone with it?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Reasoning about something the person did or spent',
      cards: ['orient', 'term-cd', 'meet-dissonance', 'again-dissonance', 'lens', 'portrait-dissonance', 'check-dissonance',
              'refute-mismatch', 'meet-sunkcost', 'again-sunkcost', 'portrait-sunkcost', 'check-sunkcost',
              'refute-waste', 'look-dissonance-sunkcost'] },
    { id: 'p2', title: 'Reasoning about evidence',
      cards: ['meet-confbias', 'again-confbias', 'portrait-confbias', 'check-confbias',
              'meet-motivated', 'again-motivated', 'portrait-motivated', 'check-motivated',
              'look-confbias-motivated', 'exc-both', 'look-dissonance-confbias'] },
    { id: 'p3', title: 'Reasoning that goes where the facts point, and the key’s question',
      cards: ['meet-fair', 'again-fair', 'portrait-fair', 'check-fair',
              'look-confbias-fair', 'look-sunkcost-fair', 'exc-convert', 'q-does', 'check-does'] },
    { id: 'p4', title: 'Two whole cases, then the drill',
      cards: ['worked-longrun', 'worked-tasting'], drill: true, close: ['recap', 'transfer'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  drill: {
    key: 'u2',            // the old quick-drill totals for this unit were stored under pl:psychology:stats:u2 (frozen; see E8)
    rungs: [
      { ask: 'name',
        items: [['insure', 'jumper'], ['phone', 'layout', 'trial']] },
      { ask: 'piece',
        items: [[{ case: 'queue', step: 'R1' }, { case: 'shower', step: 'R1' }],
                [{ case: 'bus', step: 'R1' }, { case: 'charity', step: 'R1' }],
                [{ tell: 'confbias~motivated' }, { tell: 'dissonance~fair' }],
                ['rev-dissonance', 'rev-sunkcost', 'rev-confbias', 'rev-motivated', 'rev-fair'],
                [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['horoscope', 'warehouse']] },
      { ask: 'route',
        items: [['payroll', 'motorbike', 'parking'],
                ['league', 'viewing', 'boiler'],
                ['cleaner', 'diet', 'dog', 'supplier', 'marathon'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'claim-demo',
        items: [['claim-mismatch'], ['claim-waste'], ['claim-suits']] }
    ],
    // Fresh cases for later days: three for each name, one for each of its scheduled returns (E9).
    // A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['ret-chair', 'ret-checkup', 'ret-recycling',
              'ret-mountain', 'ret-app', 'ret-brewery',
              'ret-bakery', 'ret-clinic', 'ret-trainers',
              'ret-grant', 'ret-school', 'ret-panel',
              'ret-bypass', 'ret-rota', 'ret-gearbox']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-04', change: 'First version under lesson standard 1. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'The key’s first question now has four answers (Unit One rebuilt), and its second answer is worded “Something one person does to another”. Unit Two prints the gate from the key, so its orient map changed with it.' }
    ],
    // What changed in the key for this branch, and why (K2). Old wording is the app's wording before the rebuild.
    keyChanges: [
      { step: 'D1', was: 'A mind justifying itself / A move in an interaction / A stable way someone is (each with a second line: reasoning in the moment / a specific tactic / an enduring pattern)',
        now: 'reworded only as far as Unit Two prints it: One person’s reasoning / A move between people / A lasting way someone is, each with a line saying what the case must show',
        why: 'The first answer was worded five ways across the app (audit 1.4), and "a mind justifying itself" does not fit fair reasoning, which this branch contains. The gate belongs to Unit One; its rebuild settles the wording and the missing "nothing to name here" answer (audit 1.7).' },
      { step: 'R1', was: 'Two questions. First "Timing of the conclusion" (fixed before the reasoning began / belief or action came first; discomfort followed / honestly responding to new evidence), then "What gives, to relieve it" (five answers; the one for motivated reasoning repeated the first question)',
        now: 'one question, "What does the reasoning do?", with five answers, each something an observer can point to',
        why: 'Timing could not place confirmation bias (audit 2.7, specimen 3). A first draft of this rebuild replaced it with "What is the reasoning about?"; review found that question separated no pair the second did not already separate, and was marked on a judgement no card showed (evidence in the case that the person never weighs). By K2.2 a question that does no work is removed, not reworded. What it sorted is kept as the grouping of parts one and two.' },
      { outcome: 'sunkcost', was: 'Sunk cost / escalation of commitment', now: 'one name; the other is taught once as "also called"', why: 'One name per concept (P5).' },
      { outcome: 'fair', was: 'Genuine belief revision (not a bias)', now: 'Fair reasoning, covering a view that changes and a view that is kept, when the facts got the same test either way',
        why: '"Genuine" was used in two senses (audit 2.3); "belief revision" is not something a learner will hear (P4); and the old outcome had no place for a view fairly tested and kept, which the cards said four times is not a fault. "Honest" was not used because the unit teaches that people doing the other four are usually sincere.' }
    ],
    wrongIdeas: [
      { card: 'refute-mismatch', about: 'dissonance',
        source: { kind: 'published', verified: false,
          ref: 'Festinger (1957), A Theory of Cognitive Dissonance, separates the discomfort from its reduction. That is the theory, not evidence that people misuse the phrase: a published account of the everyday misuse (the phrase used for any gap between words and actions) still has to be found and cited, or the card replaced by what cold readers actually get wrong.' } },
      { card: 'refute-waste', about: 'sunkcost',
        source: { kind: 'published', verified: false,
          ref: 'Arkes & Blumer (1985), The psychology of sunk cost, Organizational Behavior and Human Decision Processes 35: the wish not to appear wasteful. To be read and confirmed online before release.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
