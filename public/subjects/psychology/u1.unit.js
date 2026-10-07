// Psychology, Unit One: the unit record. This is the subject's GATE UNIT (lesson standard A15).
// It teaches the key's first question, "What kind of thing is this?", and the four families that question sorts
// cases into. In a gate unit the families are the gate's answers: a family's name is its answer text, cards carry
// `family` where a branch unit's cards carry `outcome`, and cases carry route: { D1: [option] } and no outcome.
// Cards live in u1.cards-*.js, cases in u1.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {q:D1} {a:D1.option} {when:D1.option} {plain:option} {needs:option} {test:ledgerId} {cue:D1}.

FC.unit('psychology', 'u1', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'One',
  title: { text: 'Before you call it manipulation' },   // a gate unit is titled in plain words; the answers are taught inside it
  subtitle: 'Check what you are looking at first: one choice, words aimed at someone, years of the same, or one bad day',
  teaches: { steps: ['D1'], outcomes: [], terms: [], families: ['reasoning', 'tactic', 'pattern', 'none'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER. In a gate unit it pairs families. All six pairs of the four are here, because a
  // learner confuses every one of them. Each entry is written once and used six ways: the look-alike card
  // ("how to tell them apart"), its side-by-side table, the list on the question card, the feedback when one is
  // picked for the other, the grouping of drill items, and what returns together later.
  // test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'reasoning~tactic', pair: ['reasoning', 'tactic'], step: 'D1',
      shared: 'In both, someone may be explaining themselves with another person in the room.',
      rule: 'In {a:D1.reasoning} the words are about the speaker’s own choice, and the listener just listens. In {a:D1.tactic} the words are about the other person, or what happened between them, and are said to them.',
      test: 'Who are the words about: the speaker’s own choice, or the person they are said to?' },
    { id: 'tactic~pattern', pair: ['tactic', 'pattern'], step: 'D1',
      shared: 'In both, one person may treat another badly, in exactly the same way.',
      rule: '{a:D1.tactic} stays between two people. {a:D1.pattern} follows one person for years, in different places, with different people.',
      test: 'Does the story stay between two people, or follow one person for years, in different places, with different people?' },
    { id: 'pattern~none', pair: ['pattern', 'none'], step: 'D1',
      shared: 'The behavior can be exactly the same in both.',
      rule: '{a:D1.none} is one occasion or one short stretch. {a:D1.pattern} takes years of someone’s life, showing at work, at home and with friends alike.',
      test: 'How much of the person’s life does the story show: one occasion, or years, places and people?' },
    { id: 'tactic~none', pair: ['tactic', 'none'], step: 'D1', taughtIn: 'q-kind',
      shared: 'In both, someone can be hard to be around, and other people can get hurt.',
      rule: 'In {a:D1.none} nobody is targeted: people are near it, not what it is about. In {a:D1.tactic} one person says or does something to another, about them.',
      test: 'Is something said or done to one particular person, about them? Or is it just how someone was for a while, with everyone?' },
    { id: 'reasoning~none', pair: ['reasoning', 'none'], step: 'D1', taughtIn: 'q-kind',
      shared: 'Both are about one person on one occasion, often after something happened to them.',
      rule: 'In {a:D1.reasoning} the person gives reasons for a choice or a view. In {a:D1.none} there are no reasons, only how they felt and acted.',
      test: 'Does the person give reasons for a choice or a view, or does the story only show how they felt and acted?' },
    { id: 'reasoning~pattern', pair: ['reasoning', 'pattern'], step: 'D1', taughtIn: 'q-kind',
      shared: 'Both can show a person defending themselves, with reasons that sound the same.',
      rule: '{a:D1.reasoning} is one choice on one occasion. {a:D1.pattern} takes years of someone’s life, showing at work, at home and with friends alike.',
      test: 'Is it one choice on one occasion, or years of someone’s life?' }
  ],


  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The first two follow the key's four answers, two at a time (A13). The part with drill: true is the last;
  // its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'One choice, and words aimed at someone',
      cards: ['orient-kind', 'meet-reasoning', 'check-reasoning', 'meet-tactic', 'check-tactic', 'look-reasoning-tactic'] },
    { id: 'p2', title: 'Years of the same, and one bad day',
      cards: ['meet-pattern', 'check-pattern', 'look-tactic-pattern', 'meet-none', 'check-none', 'look-pattern-none', 'q-kind'] },
    { id: 'p3', title: 'One whole story, then the drill',
      cards: ['worked-rehearsal'], drill: true, close: ['recap-kind'] }
  ],

  // The drill of a gate unit has three stages (A15): piece, route, claim. There is no name stage and no finish
  // stage, because the route is one question long and its answer is the name.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  // The drill and return cases of this unit are also the bank that later units draw their { earlier: 'u1' } items from.
  drill: {
    key: 'u1',            // the old quick-drill totals for this unit were stored under pl:psychology:stats:u1 (frozen; see E8)
    add: 'Some of these stories show nothing wrong at all, or just an ordinary bad day. That is on purpose: {a:D1.none} is a real answer, and you will need it as often as the other three.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'g-degree', step: 'D1' }, { case: 'g-memory', step: 'D1' }],
                [{ case: 'g-genius', step: 'D1' }, { case: 'g-exam', step: 'D1' }],
                [{ tell: 'reasoning~tactic' }, { tell: 'pattern~none' }, { tell: 'tactic~pattern' }]] },
      { ask: 'route',
        items: [['g-allotment', 'g-inheritance', 'g-scan', 'g-landlord'],
                ['g-wedding', 'g-waitress'],
                ['g-handover', 'g-savings']] },
      { ask: 'claim', demo: 'g-claim-demo',
        items: [['g-claim-once']] }
    ],
    // One fresh case for each kind, for later days (E9).
    // A due kind returns as a case the learner has not seen, beside a case of the kind they most often take it for.
    returns: ['g-ret-roof', 'g-ret-holiday', 'g-ret-coach', 'g-ret-puppy']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-04', change: 'First version under lesson standard 1: the gate unit. Not yet deployed, so later edits before the first deploy stay revision 1. Reviewed on 2026-10-05 as a beginner would read it and against the finished key: plainer wording, the diagnosis line added, no everyday label that is also a branch name, and the first worked case now follows the order the question card teaches.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per kind, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps, and plain names for the four answers.' }
    ],
    // What the K2 rewrite changed in the gate, and why. "was" is the wording Unit Two's exemplar carried
    // (itself a partial rewrite of the old app's wording, which is quoted where it matters).
    keyChanges: [
      { step: 'D1', was: 'three answers; a one-occasion case with nothing wrong had to be routed through "A lasting way someone is" (old specimens 13 and 14), and the old drill offered a fourth option, "None of these: a proportionate reaction", that the key did not have',
        now: 'four answers; the fourth is "A passing moment", with no branch and no further question',
        why: 'K2.9 and audit 1.7: wherever a learner meets a case with nothing to name, some answer must fit it. The answer is worded as what the case shows (one occasion or one short stretch, and nothing else), in the same form as the other three (K2.4, K2.5). "Passing" is set against "lasting" in the third answer, so the difference between the two is in the answers themselves. "Proportionate" was never taught and is now on the avoid list; a single occasion gets this answer whether or not its size can be judged.' },
      { step: 'D1', was: 'second answer "A move between people" (old app: "A move in an interaction", second line "a specific tactic"); when: "the case shows something one person does to another in their dealings with each other"',
        now: 'second answer "Something one person does to another"; when: "the case shows one person saying or doing something to another person, and it is about that person or about what has happened between the two of them"',
        why: 'K2.6: "move" is a figure of speech, and it was already on the avoid list for authored text, so the family could not have been taught in its own name. The new answer is the wording the gate’s own purpose line and Unit Two’s feedback already used. The "about" clause in "when" is what separates this answer from the first (audit 1.8: the old drill’s denying coworker could be read either way). Unit Two prints this answer on its first card and in its earlier-unit drill items; it uses no token for it in authored text, so every token still resolves.' },
      { step: 'D1', was: 'purpose and why named three things',
        now: 'purpose names four; why says what each is judged on, and that a passing moment has no further questions',
        why: 'K2.7: purpose says what the question sorts, in terms of its answers. Unit Two prints both lines in its worked cases, so its learner sees the new wording there.' },
      { step: 'D1', was: 'no tie-break between gate answers',
        now: 'yieldsTo as data: the first answer gives way to the second when the case also shows something said or done to another person about them; the first and the second give way to the third when the case also shows the same behavior across years, places and relationships',
        why: 'K2.8: real cases show two of these at once (a reason for your own act that blames the listener; one evening of something the case then shows across years). Each tie-break is printed on the question card, and the one that decides most often (years over one person’s reasons) is watched on worked-rehearsal, a case marked "also". The fourth answer needs none: its "when" requires that the case show none of the other three.' },
      { step: 'D1', was: 'gate options had n, when and keeps',
        now: 'each also has plain and needs',
        why: 'A15, S1: the gate’s answers are this unit’s families, taught as an outcome is. The first answer’s n and when are unchanged, and so is the third’s.' }
    ],
    wrongIdeas: [],       // the two wrong-idea cards were cut in the quick lesson; the ideas live on in the pattern~none look-alike and the recap
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
