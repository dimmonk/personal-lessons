// Psychology, Unit Four: the unit record. Cards live in u4.cards-*.js, cases in u4.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('psychology', 'u4', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Four',
  title: { fromKey: 'D1.pattern' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Check the years first: five ways of being that keep costing someone, and the ordinary one that does not',
  teaches: { steps: ['P1'], outcomes: ['narcgrand', 'narcvuln', 'borderline', 'histrionic', 'antisocial', 'ordpersonality'], terms: ['pd'] },
  assumes: ['u1', 'u2', 'u3'],   // everything the first three units teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse. This branch has one question and each of its answers
  // keeps exactly one name, so every entry here is a pair that learners mix up in practice, not one the key puts together.
  // Each entry is written once and used six ways: the look-alike card ("how to tell them apart"), its side-by-side table, the list on the
  // question card, the feedback when one is picked for the other, the grouping of drill items, and what returns together later.
  // test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'narcgrand~narcvuln', pair: ['narcgrand', 'narcvuln'], step: 'P1', taughtIn: 'q-pat',
      shared: 'Both need to be treated as special, and neither has much room for what other people feel.',
      rule: '{o:narcgrand} hits out at whoever fails to treat them as special, with anger or scorn. {o:narcvuln} goes quiet and hurt, and keeps a count of what they are owed.',
      test: 'When this person is not treated as special, which way does it go? Outward, at someone, with anger or scorn? Or inward, in hurt silence and a count of what they are owed?' },
    { id: 'narcgrand~ordpersonality', pair: ['narcgrand', 'ordpersonality'], step: 'P1',
      shared: 'Both can be loud, sure of themselves and bossy, the same way for years and in every place.',
      rule: 'In {o:narcgrand} it turns to scorn when someone else is praised or chosen, and people resign, leave and keep away. In {o:ordpersonality} the same loudness sits beside people who stay.',
      test: 'When someone else is praised or chosen, does this person turn on them, and have people been lost over the years because of it? Or do people stay?' },
    { id: 'narcvuln~ordpersonality', pair: ['narcvuln', 'ordpersonality'], step: 'P1',
      shared: 'Both can be quiet and keep to themselves, in every place.',
      rule: 'In {o:narcvuln} the silence comes with a count of what the person is owed, it follows someone else’s praise or promotion, and it keeps costing. In {o:ordpersonality} the person is just quiet, and people stay.',
      test: 'Is the silence a count of what is owed, going cold on someone who was thanked, with people lost to it? Or is the person simply quiet, and still on good terms with the people around them?' },
    { id: 'narcvuln~borderline', pair: ['narcvuln', 'borderline'], step: 'P1', taughtIn: 'q-pat',
      shared: 'Both are hurt when someone close lets them down, and both have lost friends over the years.',
      rule: 'In {o:narcvuln} the person pulls away and resents, and does not reach for the other person. In {o:borderline} the person grabs hold when someone seems to be leaving, attacks them, and grabs hold again.',
      test: 'When someone close lets this person down, do they pull away and keep count? Or do they cling, attack and then apologize?' },
    { id: 'narcgrand~borderline', pair: ['narcgrand', 'borderline'], step: 'P1', taughtIn: 'q-pat',
      shared: 'Both can be furious when someone close seems about to leave, and both have lost partners and colleagues over the years.',
      rule: 'In {o:narcgrand} the anger is scorn from above: the person lets the other go and does not try to keep them. In {o:borderline} the anger comes with desperate efforts to keep them, and swings back to pleading within hours.',
      test: 'When someone close seems about to leave, does this person run them down and let them go? Or hold on, attack, and hold on again?' },
    { id: 'borderline~histrionic', pair: ['borderline', 'histrionic'], step: 'P1',
      shared: 'Both have big, quick feelings that other people notice first, and both have lost friends to them.',
      rule: 'In {o:borderline} the big feelings are about one person who seems to be leaving: the person holds on to them and turns on them. In {o:histrionic} the big show is for whoever is watching, and it gets bigger when attention goes to someone else.',
      test: 'Who is the display for: one particular person who seems to be leaving, or whoever is in the room? And does it turn into an attack on that one person?' },
    { id: 'narcgrand~histrionic', pair: ['narcgrand', 'histrionic'], step: 'P1', taughtIn: 'q-pat',
      shared: 'Both want the room’s attention, and both take over every group.',
      rule: 'In {o:narcgrand} the person wants to be treated as better than others, and runs down whoever else is praised. In {o:histrionic} the person wants any attention at all, and answers attention going elsewhere with a bigger show, not with scorn.',
      test: 'When attention goes to someone else, does this person run that person down? Or put on a bigger display themselves?' },
    { id: 'histrionic~ordpersonality', pair: ['histrionic', 'ordpersonality'], step: 'P1',
      shared: 'Both can be dramatic in everything, in every place, for years.',
      rule: 'In {o:histrionic} the show gets bigger when attention goes elsewhere, and people have worn out and drifted away. In {o:ordpersonality} the drama is just how the person is, and friends and neighbors stay.',
      test: 'When attention goes to someone else, does the display get bigger? And has it cost the person friends, jobs or places over the years?' },
    { id: 'narcgrand~antisocial', pair: ['narcgrand', 'antisocial'], step: 'P1',
      shared: 'Both can be charming, sure of themselves and scornful of others, and both leave people hurt.',
      rule: 'In {o:narcgrand} what drives it is being treated as special: the person turns angry or scornful when it is not given. In {o:antisocial} what drives it is gain: the person lies to people, uses them, and shows no regret for the harm.',
      test: 'Does the story show rules broken and people lied to and used, with no regret for the harm? Or does it show only acting above others, with anger or scorn when they are not treated as special?' },
    { id: 'antisocial~ordpersonality', pair: ['antisocial', 'ordpersonality'], step: 'P1',
      shared: 'Both can bend or break rules for years, in more than one place.',
      rule: 'In {o:antisocial} people are lied to and used for the person’s own gain, they are hurt, and the person shows no regret. In {o:ordpersonality} the rules that bend are small, nobody is badly hurt, and the person puts it right.',
      test: 'When someone is hurt or upset by what this person did, do they show regret and put it right? Or do they blame the person who was hurt?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Superior, overlooked, clinging, or just ordinary',
      cards: ['orient-pat', 'term-pd', 'meet-narcgrand', 'check-narcgrand',
              'meet-ordpersonality', 'check-ordpersonality', 'look-narcgrand-ordpersonality',
              'meet-narcvuln', 'check-narcvuln', 'look-narcvuln-ordpersonality',
              'meet-borderline', 'check-borderline'] },
    { id: 'p2', title: 'The center of attention, broken rules, then the drill',
      cards: ['meet-histrionic', 'check-histrionic', 'look-borderline-histrionic', 'look-histrionic-ordpersonality',
              'meet-antisocial', 'check-antisocial', 'exc-both', 'look-antisocial-ordpersonality',
              'q-pat', 'check-pat', 'worked-bruno'], drill: true, close: ['recap-pat'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  drill: {
    key: 'u4',            // the old quick-drill totals for this unit were stored under pl:psychology:stats:u4 (frozen; see E8)
    add: 'Some of these stories show a loud, sure or dramatic person who harms no one. That is on purpose: {o:ordpersonality} is a real answer, and you will need it as often as the other five.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'pa-p-ga', step: 'P1' }, { case: 'pa-p-nv', step: 'P1' }, { case: 'pa-p-bl', step: 'P1' }],
                [{ tell: 'narcgrand~ordpersonality' }, { tell: 'histrionic~ordpersonality' }, { tell: 'borderline~histrionic' }, { tell: 'antisocial~ordpersonality' }]] },
      { ask: 'route',
        items: [['pa-r-ga1', 'pa-r-nv1', 'pa-r-bl1'], ['pa-r-hi1', 'pa-r-an1', 'pa-r-ord1'],
                ['pa-m-ord', 'pa-m-nv'],
                [{ earlier: 'u1' }], [{ earlier: 'u2' }], [{ earlier: 'u3' }]] }
    ],
    // Fresh cases for later days: one for each name (E9). A due name returns as a case the learner has not seen,
    // beside a case of the name they most often take it for.
    returns: ['pa-ret-prof', 'pa-ret-wedding', 'pa-ret-supervisor', 'pa-ret-yoga', 'pa-ret-builder', 'pa-ret-bus']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the lasting-way branch of the key, taught as six names with a repeated cost as the one thing that separates the five names from the sixth. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
