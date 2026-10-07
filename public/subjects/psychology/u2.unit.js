// Psychology, Unit Two: the unit record. Cards live in u2.cards-*.js, cases in u2.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id}.

FC.unit('psychology', 'u2', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 6,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Two',
  title: { text: 'Are the reasons real?' },
  subtitle: 'Four ways reasoning protects the person, and one way it goes where the facts lead',
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
      shared: 'Both look back at something the person already did or spent.',
      rule: '{o:dissonance} says something the person did is fine. {o:sunkcost} uses what is already spent as the reason for the next step.',
      test: 'Does the reason say that something they did is fine, or does it use what is already spent to decide the next step?' },
    { id: 'confbias~motivated', pair: ['confbias', 'motivated'], step: 'R1',
      shared: 'In both, the person is harder on evidence they do not like, and ends where they began.',
      rule: 'In {o:motivated} the person set out to settle a choice or a question, and had picked the answer before they started. In {o:confbias} nobody set out to look: evidence turns up, and the evidence against the view gets picked apart harder than the evidence for it.',
      test: 'Did the person set out to look into something? If so, had they picked the answer before they started?' },
    { id: 'dissonance~confbias', pair: ['dissonance', 'confbias'], step: 'R1', taughtIn: 'q-does',
      shared: 'Both defend something the person is attached to, and one person can do both.',
      rule: 'In {o:dissonance} the person gives a reason why something they did is fine, and no evidence is being weighed. In {o:confbias} there is evidence for a view and evidence against it, and the evidence against it gets picked apart harder.',
      test: 'Is the person explaining something they did, or weighing evidence about what is true?' },
    { id: 'confbias~fair', pair: ['confbias', 'fair'], step: 'R1',
      shared: 'Both start with a view and some evidence against it.',
      rule: 'In {o:fair} the evidence against the view gets the same check that evidence for it would get, and the view goes where the evidence leads. In {o:confbias} the evidence against the view gets a harder check than the evidence for it ever got, and the view stays.',
      test: 'Did the evidence against the view get the same questions as the evidence for it?' },
    { id: 'sunkcost~fair', pair: ['sunkcost', 'fair'], step: 'R1', taughtIn: 'q-does',
      shared: 'Both face a choice about something that has already cost a lot, and both can end with the person carrying on.',
      rule: 'In {o:sunkcost} the reason for the next step is what is already spent. In {o:fair} the reason is what the next step would cost and bring.',
      test: 'Is the reason for the next step what is already spent, or what the next step would cost and bring?' },
    { id: 'dissonance~fair', pair: ['dissonance', 'fair'], step: 'R1',
      shared: 'In both, the person’s view can change.',
      rule: 'In {o:fair} a new fact came between the old view and the new one. In {o:dissonance} the only thing that came between them is something the person did, and the new view is the excuse for it.',
      test: 'What came between the old view and the new one: a new fact, or only something the person did?' },
    { id: 'motivated~fair', pair: ['motivated', 'fair'], step: 'R1', taughtIn: 'q-does',
      shared: 'Both can end on the answer the person hoped for.',
      rule: 'In {o:motivated} the answer was picked before the search, so the search could never change it. In {o:fair} the search came first and could have gone either way.',
      test: 'Could the search have gone the other way, and would the person have gone with it?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Excuses, and money already spent',
      cards: ['orient', 'term-cd', 'meet-dissonance', 'check-dissonance', 'meet-sunkcost', 'check-sunkcost', 'look-dissonance-sunkcost'] },
    { id: 'p2', title: 'Evidence, and going where the facts lead',
      cards: ['meet-confbias', 'check-confbias', 'meet-motivated', 'check-motivated', 'look-confbias-motivated',
              'meet-fair', 'check-fair', 'look-confbias-fair', 'exc-convert', 'q-does', 'check-does'] },
    { id: 'p3', title: 'One whole story, then the drill',
      cards: ['worked-tasting'], drill: true, close: ['recap'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  drill: {
    key: 'u2',            // the old quick-drill totals for this unit were stored under pl:psychology:stats:u2 (frozen; see E8)
    add: 'Some of these stories show reasoning that is fine. That is on purpose: {o:fair} is a real answer, and you will need it as often as the others.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'queue', step: 'R1' }, { case: 'shower', step: 'R1' }],
                [{ case: 'bus', step: 'R1' }, { case: 'charity', step: 'R1' }],
                [{ tell: 'dissonance~sunkcost' }, { tell: 'confbias~motivated' }, { tell: 'confbias~fair' }, { tell: 'dissonance~fair' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['payroll', 'motorbike', 'parking'],
                ['league', 'viewing', 'boiler'],
                ['cleaner', 'diet', 'dog', 'supplier'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'claim-demo',
        items: [['claim-mismatch'], ['claim-waste']] }
    ],
    // Fresh cases for later days: one for each name (E9). A due name returns as a case the learner has not seen,
    // beside a case of the name they most often take it for.
    returns: ['ret-chair', 'ret-mountain', 'ret-bakery', 'ret-grant', 'ret-gearbox']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-04', change: 'First version under lesson standard 1. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'The first question now has four answers (Unit One rebuilt), and its second answer is worded “Something one person does to another”. Unit Two prints the gate from the key, so its orient map changed with it.' },
      { rev: 3, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 4, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' },
      { rev: 5, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 6, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    // What changed in the key for this branch, and why (K2). Old wording is the app's wording before the rebuild.
    keyChanges: [
      { step: 'D1', was: 'A mind justifying itself / A move in an interaction / A stable way someone is (each with a second line: reasoning in the moment / a specific tactic / an enduring pattern)',
        now: 'reworded only as far as Unit Two prints it: One person’s reasoning / A move between people / A lasting way someone is, each with a line saying what the case must show',
        why: 'The first answer was worded five ways across the app (audit 1.4), and "a mind justifying itself" does not fit fair reasoning, which this branch contains. The gate belongs to Unit One; its rebuild settles the wording and the missing "nothing to name here" answer (audit 1.7).' },
      { step: 'R1', was: 'Two questions. First "Timing of the conclusion" (fixed before the reasoning began / belief or action came first; discomfort followed / honestly responding to new evidence), then "What gives, to relieve it" (five answers; the one for motivated reasoning repeated the first question)',
        now: 'one question, "What does the reasoning do?", with five answers, each something an observer can point to',
        why: 'Timing could not place confirmation bias (audit 2.7, specimen 3). A first draft of this rebuild replaced it with "What is the reasoning about?"; review found that question separated no pair the second did not already separate, and was marked on a judgment no card showed (evidence in the case that the person never weighs). By K2.2 a question that does no work is removed, not reworded. What it sorted is kept as the grouping of parts one and two.' },
      { outcome: 'sunkcost', was: 'Sunk cost / escalation of commitment', now: 'one name; the other is taught once as "also called"', why: 'One name per concept (P5).' },
      { outcome: 'fair', was: 'Genuine belief revision (not a bias)', now: 'Fair reasoning, covering a view that changes and a view that is kept, when the facts got the same test either way',
        why: '"Genuine" was used in two senses (audit 2.3); "belief revision" is not something a learner will hear (P4); and the old outcome had no place for a view fairly tested and kept, which the cards said four times is not a fault. "Honest" was not used because the unit teaches that people doing the other four are usually sincere.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
