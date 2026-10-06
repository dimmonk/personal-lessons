// Scams, Unit Five: the unit record. This is the branch for "Tell them about yourself" (the key's first question, answer four).
// It teaches the two questions that follow it, "What do they want to know about you?" and "Does it fit something you started?",
// and the three names they lead to: the real request for details, identity theft, and the friendly chat before the ask.
// This is an ACTION subject (P26): a real request is met first, a real request is in every case stage, every portrait says what
// to do on the spot, there are four return cases per name, and the unit closes with a plan card. Cards live in u5.cards-*.js,
// cases in u5.cases-*.js. Text fields never retype key wording: they use tokens ({o:id} {plain:id} {needs:id} {q:STEP}
// {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId}).

FC.unit('scams', 'u5', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 3,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Five',
  title: { fromKey: 'D1.details' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Three things a request for facts about you can be, and how to tell which one you are looking at',
  teaches: { steps: ['F1', 'F2'], outcomes: ['realdetails', 'identitytheft', 'friendlychat'], terms: [] },
  assumes: ['u1', 'u2', 'u3', 'u4'],   // everything these teach may be used; the orient card restates the question this unit's routes pass through

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse. Each entry is written once and used six ways: the
  // look-alike card ("how to tell them apart"), its side-by-side table, the list on the question card, the feedback when one is
  // picked for the other, the grouping of drill items, and what returns together later. test is a question to put to a case,
  // with no names in it. The last entry pairs a name taught here with one taught in the unit on money (a pair may span two
  // branches); its step is the first question on the two routes on which they share no answer, which is the first question.
  ledger: [
    { id: 'identitytheft~realdetails', pair: ['identitytheft', 'realdetails'], step: 'F2',
      shared: 'Both ask for the same papers and the same facts: a passport, a date of birth, an address, a tax number. The same words, from the same sort of company, can be a real request or a copy.',
      rule: 'In {o:realdetails} you began it through {t:already}, and what is asked is what the job needs. In {o:identitytheft} it came to you, or it asks for more than the job needs, or both.',
      test: 'Did I begin this, through a way I already had? And is what they ask for what the job I came to do needs, or does the list go further?' },
    { id: 'identitytheft~friendlychat', pair: ['identitytheft', 'friendlychat'], step: 'F1',
      shared: 'Both come from a stranger who reached you out of nowhere, and both ask you about yourself.',
      rule: 'In {o:identitytheft} what is asked for is papers and numbers that identify you. In {o:friendlychat} what is asked about is your life, and no paper or number has been asked for yet.',
      test: 'Does it ask for papers, or for numbers that prove who I am, or for my date of birth or address? Or only for chat about my job, my home, my family or my plans?' },
    { id: 'friendlychat~realdetails', pair: ['friendlychat', 'realdetails'], step: 'F1', taughtIn: 'q-f1',
      shared: 'Both can be polite and friendly, both ask you about yourself, and each question can seem small.',
      rule: 'In {o:realdetails} the facts identify you, you began the thing they are for, and the other side says why it asks. In {o:friendlychat} the questions are about your life, a stranger began them, and nothing you began needs the answers.',
      test: 'Is there something I began that these questions are part of? Or did someone I know only through messages begin them, with nothing I am doing that needs the answers?' },
    { id: 'friendlychat~romance', pair: ['friendlychat', 'romance'], step: 'D1',
      shared: 'It can be the same person, in the same chat, weeks or months apart, and both are friendly.',
      rule: 'In {o:friendlychat} the person asks you about yourself and asks for nothing else. In {o:romance} the person asks you to pay for an emergency of theirs.',
      test: 'Is the person asking me to tell them about myself, or to send them money?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. The real request comes first, then
  // its copy that asks for the same papers (the pair that one question separates), then the friendly chat and where it leads.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The same facts, asked for something you started, and asked by someone else',
      cards: ['orient', 'meet-realdetails', 'again-realdetails', 'lens', 'portrait-realdetails', 'check-realdetails',
              'meet-identitytheft', 'again-identitytheft', 'portrait-identitytheft', 'check-identitytheft',
              'look-identitytheft-realdetails', 'refute-knewname', 'exc-bankcall'] },
    { id: 'p2', title: 'A friendly chat, and where it leads',
      cards: ['meet-friendlychat', 'again-friendlychat', 'portrait-friendlychat', 'check-friendlychat',
              'look-identitytheft-friendlychat', 'look-friendlychat-romance', 'exc-papers', 'refute-nomoney'] },
    { id: 'p3', title: 'The two questions, three whole cases, then the drill',
      cards: ['q-f1', 'check-f1', 'q-f2', 'check-f2', 'worked-hearing', 'worked-running', 'worked-room'],
      drill: true, close: ['recap', 'transfer', 'plan'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups inside a
  // tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new. In an action subject every
  // stage holds a real request, and the later stages mix in cases that look like another name.
  drill: {
    key: 'u5',
    add: 'Some of these requests are real, and some are copies made to take something. That is on purpose, and the two questions you are practicing do not say which is which by how a request sounds: they say whether you began it and whether what is asked is what the job needs. A real request that asks for the same papers as a copy gets a different answer, and that is the whole point.',
    rungs: [
      { ask: 'name',
        items: [['u5-n-school', 'u5-n-refund', 'u5-n-language'],
                ['u5-n-vet', 'u5-n-dating', 'u5-n-nurse'],
                ['u5-n-mortgage', 'u5-n-broadband', 'u5-n-networking']] },
      { ask: 'piece',
        items: [[{ case: 'u5-p-dentist', step: 'F2' }, { case: 'u5-p-phone', step: 'F2' }, { case: 'u5-p-wrongnumber', step: 'F2' }],
                [{ case: 'u5-p-energy', step: 'F1' }, { case: 'u5-p-loan', step: 'F1' }, { case: 'u5-p-cycling', step: 'F1' }],
                [{ tell: 'identitytheft~realdetails' }, { tell: 'identitytheft~friendlychat' }],
                [{ separator: 'identitytheft~realdetails' }, { separator: 'identitytheft~friendlychat' }],
                ['u5-rev-realdetails', 'u5-rev-identitytheft', 'u5-rev-friendlychat'],
                [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['u5-f-payroll', 'u5-f-pension', 'u5-f-marathon'],
                ['u5-f-lease', 'u5-f-passportoffice', 'u5-f-grief']] },
      { ask: 'route',
        items: [['u5-r-pharmacy', 'u5-r-frozen', 'u5-r-wine'],
                ['u5-r-license', 'u5-r-bursary', 'u5-r-chess'],
                ['u5-r-library', 'u5-r-tvlicence', 'u5-r-lisbon'],
                ['u5-r-callback', 'u5-r-ticket'],
                ['u5-r-gym', 'u5-r-adviser'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'u5-claim-demo',
        items: [['u5-claim-knew'], ['u5-claim-nomoney'], ['u5-claim-standard'], ['u5-claim-cardnumber']] }
    ],
    // Fresh cases for later days: four for each name, one for each of its scheduled returns, the last about twelve weeks on (E9).
    // A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['u5-x-swimclub', 'u5-x-hospital', 'u5-x-finance', 'u5-x-bankapp',
              'u5-x-police', 'u5-x-doorstep', 'u5-x-charity', 'u5-x-lottery',
              'u5-x-community', 'u5-x-backpain', 'u5-x-soldier', 'u5-x-game']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1, written to the rewritten key (docs/rebuild/scams-plan.md). Not yet deployed, so later edits before the first deploy stay revision 1. Three names, the real one first; two questions; four look-alike pairs, one of them with a name from the unit on money; three whole cases; seventy-six or so cases in all.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US institutions and payments, US spelling.' }
    ],
    // What the K2 rewrite changed in the key for this branch, and why (from docs/rebuild/scams-plan.md, section a).
    keyChanges: [
      { step: 'F1', was: '"What are they collecting?", three answers (identity papers or numbers; nothing yet, just conversation and trust; a few ordinary details), each keeping exactly one name',
        now: '"What do they want to know about you?", two answers: facts that identify you, and your life',
        why: 'Every old answer kept one name and the second question did the same, so the first decided nothing (K2.2, audit Unit Five 4). Now "facts that identify you" keeps both the scam and the real request, so the second question has work to do. The card-number request the audit could not place (W5 item 4) is named in the answer.' },
      { step: 'F2', was: '"Who started it, and why do they need it?", three answers, each keeping exactly one name',
        now: '"Does it fit something you started?", yes or no, in the same words as the sign-in branch',
        why: 'The old question bundled two questions. The new one is the question the sign-in unit teaches, asked of a request for facts; its "No" covers "they contacted you" and "it asks for more than the reason needs", which was the old card’s "Does the reason need the details?" test and is now a key answer (audit Unit Five 5).' },
      { outcome: 'identitytheft', was: 'Identity grab (identity theft)', now: 'Identity theft', why: 'The real-life name, without brackets (V1).' },
      { outcome: 'friendlychat', was: 'Friendly chat before the ask', now: 'unchanged name, new needs',
        why: 'Its needs now requires someone known only through messages who reached you by chance, so a friend from your club is outside the key (subject limits) and the conference contact the audit flagged (W5 item 2) is answerable.' }
    ],
    // The wrong ideas the refute cards name, and where each comes from (V22). Both come from the old app's own list of faulty claims
    // (standard0.js, SCAM_ERR, claims 4 and 7), which is the source for what beginners say, and both are confirmed there.
    wrongIdeas: [
      { card: 'refute-knewname', about: 'identitytheft',
        source: { kind: 'app-data', verified: true,
          ref: 'public/subjects/scams/standard0.js, SCAM_ERR, claim 4: "She read out my full name and my old address, so she had to be from the county." The old claim is the idea as people said it to the app.' } },
      { card: 'refute-nomoney', about: 'friendlychat',
        source: { kind: 'app-data', verified: true,
          ref: 'public/subjects/scams/standard0.js, SCAM_ERR, claim 7: "We have chatted every day for six weeks and she has never mentioned money, so she cannot be a scammer." The old claim is the idea as people said it to the app.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-lessons.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
