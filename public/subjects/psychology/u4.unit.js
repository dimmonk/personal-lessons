// Psychology, Unit Four: the unit record. Cards live in u4.cards-*.js, cases in u4.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('psychology', 'u4', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 1,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Four',
  title: { fromKey: 'D1.pattern' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Five lasting ways of being that keep costing someone, one ordinary way that does not, and how to tell which a case shows',
  teaches: { steps: ['P1'], outcomes: ['narcgrand', 'narcvuln', 'borderline', 'histrionic', 'antisocial', 'ordpersonality'], terms: ['pd'] },
  assumes: ['u1', 'u2', 'u3'],   // everything the first three units teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse. This branch has one question and each of its answers
  // keeps exactly one name, so every entry here is a pair that learners mix up in practice, not one the key puts together.
  // Each entry is written once and used six ways: the look-alike card ("how to tell them apart"), its side-by-side table, the list on the
  // question card, the feedback when one is picked for the other, the grouping of drill items, and what returns together later.
  // test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'narcgrand~narcvuln', pair: ['narcgrand', 'narcvuln'], step: 'P1',
      shared: 'Both rest on a sense of worth that depends on being treated as special, and in both there is little room for what other people feel.',
      rule: '{o:narcgrand} defends that sense of worth outward, with anger and scorn at whoever fails to treat the person as special. {o:narcvuln} defends it inward, with hurt withdrawal and quiet resentment.',
      test: 'When this person is not treated as special, which way does it go? Outward, at someone, with anger or scorn? Or inward, in hurt silence and a count of what they are owed?' },
    { id: 'narcgrand~ordpersonality', pair: ['narcgrand', 'ordpersonality'], step: 'P1',
      shared: 'Both can be loud, sure of themselves and bossy, in the same way for years and in every place.',
      rule: 'In {o:narcgrand} the way of being turns scornful when someone else is praised or chosen, and it keeps costing: people resign, leave and keep away. In {o:ordpersonality} the same loudness and certainty sits beside people who stay.',
      test: 'When someone else is praised or chosen, does this person turn on them, and have people been lost over the years because of it? Or do people stay?' },
    { id: 'narcvuln~ordpersonality', pair: ['narcvuln', 'ordpersonality'], step: 'P1',
      shared: 'Both can be quiet, keep to themselves and go silent at times, in the same way in every place.',
      rule: 'In {o:narcvuln} the silence comes with a count of what the person is owed, it follows someone else’s praise or promotion, and it keeps costing. In {o:ordpersonality} the quietness is only how the person is, and people stay.',
      test: 'Is the silence a count of what is owed, going cold on someone who was thanked, with people lost to it? Or is the person simply quiet, and still on good terms with the people around them?' },
    { id: 'narcvuln~borderline', pair: ['narcvuln', 'borderline'], step: 'P1',
      shared: 'Both are hurt when someone close lets them down, and in both it has cost friendships over years.',
      rule: 'In {o:narcvuln} the person pulls away and resents, and does not reach for the other person. In {o:borderline} the person reaches for them hard when they seem to be leaving, attacks them, and reaches for them again.',
      test: 'When someone close lets this person down, do they pull away and keep count? Or do they cling, attack and then apologise?' },
    { id: 'narcgrand~borderline', pair: ['narcgrand', 'borderline'], step: 'P1',
      shared: 'Both can be furious when someone close seems about to leave, and both have lost partners and colleagues over the years.',
      rule: 'In {o:narcgrand} the anger is scorn from above: the person does not try to keep the other, and the other is not what matters. In {o:borderline} the anger comes with desperate efforts to keep them, and swings back to pleading within hours.',
      test: 'When someone close seems about to leave, does this person run them down and let them go? Or hold on, attack, and hold on again?' },
    { id: 'borderline~histrionic', pair: ['borderline', 'histrionic'], step: 'P1',
      shared: 'Both have big, quick feelings that other people notice first, and both have lost friends to them.',
      rule: 'In {o:borderline} the big feelings are about one person who seems to be leaving: the person holds on to them and turns on them. In {o:histrionic} the big displays are for whoever is watching, and they get bigger when attention goes to someone else.',
      test: 'Who is the display for: one particular person who seems to be leaving, or whoever is in the room? And does it turn into an attack on that one person?' },
    { id: 'narcgrand~histrionic', pair: ['narcgrand', 'histrionic'], step: 'P1',
      shared: 'Both want the room’s attention, and both take it over in every group.',
      rule: 'In {o:narcgrand} the person wants to be treated as better than others, and runs down whoever else is praised. In {o:histrionic} the person wants any attention at all, and answers attention going elsewhere with a bigger display, not with scorn.',
      test: 'When attention goes to someone else, does this person run that person down? Or put on a bigger display themselves?' },
    { id: 'histrionic~ordpersonality', pair: ['histrionic', 'ordpersonality'], step: 'P1',
      shared: 'Both can be dramatic in everything, in every place, for years.',
      rule: 'In {o:histrionic} the displays get bigger when attention goes elsewhere, and people have been worn out and have drifted away. In {o:ordpersonality} the drama is only how the person is, and friends and neighbours stay.',
      test: 'When attention goes to someone else, does the display get bigger? And has it cost the person friends, jobs or places over the years?' },
    { id: 'narcgrand~antisocial', pair: ['narcgrand', 'antisocial'], step: 'P1',
      shared: 'Both can be charming, sure of themselves and scornful of others, and both leave people hurt.',
      rule: 'In {o:narcgrand} what drives the case is being treated as special: the person turns angry or scornful when it is not given. In {o:antisocial} what drives it is gain: the person lies to people and uses them, and shows no regret for the harm.',
      test: 'Does the case show rules broken and people lied to and used, with no regret for the harm? Or does it show only acting above others, with anger or scorn when they are not treated as special?' },
    { id: 'antisocial~ordpersonality', pair: ['antisocial', 'ordpersonality'], step: 'P1',
      shared: 'Both can bend or break rules for years, in more than one place.',
      rule: 'In {o:antisocial} people are lied to and used for the person’s own ends, they are hurt, and the person shows no regret. In {o:ordpersonality} the rules that bend are small, nobody is badly hurt, and the person puts it right.',
      test: 'When someone is hurt or upset by what this person did, do they show regret and put it right? Or do they blame the person who was hurt?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Years, places, relationships and a cost: the first name, and the ordinary way of being',
      cards: ['orient-pat', 'term-pd', 'meet-narcgrand', 'again-narcgrand', 'lens-pat', 'portrait-narcgrand', 'check-narcgrand', 'refute-label',
              'meet-ordpersonality', 'again-ordpersonality', 'portrait-ordpersonality', 'check-ordpersonality', 'look-narcgrand-ordpersonality'] },
    { id: 'p2', title: 'The same family, defended inward',
      cards: ['meet-narcvuln', 'again-narcvuln', 'portrait-narcvuln', 'check-narcvuln', 'look-narcgrand-narcvuln', 'look-narcvuln-ordpersonality'] },
    { id: 'p3', title: 'Clinging to people, and turning on them',
      cards: ['meet-borderline', 'again-borderline', 'portrait-borderline', 'check-borderline', 'look-narcvuln-borderline', 'look-narcgrand-borderline'] },
    { id: 'p4', title: 'At the centre of attention',
      cards: ['meet-histrionic', 'again-histrionic', 'portrait-histrionic', 'check-histrionic',
              'look-borderline-histrionic', 'look-narcgrand-histrionic', 'look-histrionic-ordpersonality'] },
    { id: 'p5', title: 'Breaking rules and using people, and the key’s question',
      cards: ['meet-antisocial', 'again-antisocial', 'portrait-antisocial', 'check-antisocial', 'look-narcgrand-antisocial', 'exc-both',
              'look-antisocial-ordpersonality', 'refute-difficult', 'q-pat', 'check-pat'] },
    { id: 'p6', title: 'Two whole cases, then the drill',
      cards: ['worked-rafe', 'worked-bruno'], drill: true, close: ['recap-pat', 'transfer-pat'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  drill: {
    key: 'u4',            // the old quick-drill totals for this unit were stored under pl:psychology:stats:u4 (frozen; see E8)
    add: 'Some of these cases show a loud, sure or dramatic way of being that does no lasting harm. That is on purpose. Seeing that a way of being does no lasting harm is one of the six answers, and you will need it as often as the other five.',
    rungs: [
      { ask: 'name',
        items: [['pa-n-ga', 'pa-n-nv', 'pa-n-an'], ['pa-n-bl', 'pa-n-hi', 'pa-n-ord']] },
      { ask: 'piece',
        items: [[{ case: 'pa-p-ga', step: 'P1' }, { case: 'pa-p-an', step: 'P1' }],
                [{ case: 'pa-p-ord', step: 'P1' }, { case: 'pa-p-hi', step: 'P1' }],
                [{ case: 'pa-p-nv', step: 'P1' }, { case: 'pa-p-bl', step: 'P1' }],
                [{ tell: 'narcgrand~ordpersonality' }, { tell: 'histrionic~ordpersonality' }],
                [{ tell: 'narcvuln~borderline' }, { tell: 'borderline~histrionic' }],
                [{ tell: 'narcgrand~antisocial' }, { tell: 'narcgrand~narcvuln' }],
                ['pa-rev-narcgrand', 'pa-rev-narcvuln', 'pa-rev-borderline', 'pa-rev-histrionic', 'pa-rev-antisocial', 'pa-rev-ordpersonality'],
                [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['pa-f-nv', 'pa-f-ord'], ['pa-f-bl', 'pa-f-hi']] },
      { ask: 'route',
        items: [['pa-r-ga1', 'pa-r-nv1'], ['pa-r-bl1', 'pa-r-hi1'], ['pa-r-an1', 'pa-r-ord1'],
                ['pa-r-ga2', 'pa-r-an2'], ['pa-r-ord2', 'pa-r-hi2'], ['pa-r-nv2', 'pa-r-bl2'],
                ['pa-m-ord', 'pa-m-ga'], ['pa-m-nv', 'pa-m-bl'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'pa-claim-demo',
        items: [['pa-claim-boss'], ['pa-claim-difficult'], ['pa-claim-quiet'], ['pa-claim-loud'], ['pa-claim-sociopath']] }
    ],
    // Fresh cases for later days: three for each name, one for each of its scheduled returns (E9).
    // A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['pa-ret-prof', 'pa-ret-parish', 'pa-ret-firm',
              'pa-ret-wedding', 'pa-ret-technician', 'pa-ret-runner',
              'pa-ret-supervisor', 'pa-ret-sister', 'pa-ret-watch',
              'pa-ret-yoga', 'pa-ret-committee', 'pa-ret-star',
              'pa-ret-builder', 'pa-ret-tutor', 'pa-ret-gyms',
              'pa-ret-bus', 'pa-ret-student', 'pa-ret-treasurer']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the lasting-way branch of the key, taught as six names with a repeated cost as the one thing that separates the five names from the sixth. Not yet deployed, so later edits before the first deploy stay revision 1.' }
    ],
    wrongIdeas: [
      { card: 'refute-label', about: 'narcgrand',
        source: { kind: 'published', verified: false,
          ref: 'Haslam (2016), Concept creep: psychology’s expanding concepts of harm and pathology, Psychological Inquiry 27(1): clinical words stretched to cover ordinary experience. It describes the stretching of the concepts; evidence that learners of this subject apply a clinical label to one bad experience still has to come from cold readers.' } },
      { card: 'refute-difficult', about: 'ordpersonality',
        source: { kind: 'published', verified: false,
          ref: 'Haslam (2016), as above: the same stretching of clinical words to cover being rude, selfish or hard to deal with. To be read and confirmed online before release, or replaced by what cold readers actually get wrong.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
