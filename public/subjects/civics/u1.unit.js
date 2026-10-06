// Civics, Unit One: the unit record. This is the subject's GATE UNIT (lesson standard A15).
// It teaches the key's first question, "Who makes the last decision in the case, or is asked to make it?", and the four
// families that question sorts cases into. In a gate unit the families are the gate's answers: a family's name is its
// answer text, cards carry `family` where a branch unit's cards carry `outcome`, and cases carry route: { D1: [option] }
// and no outcome. Cards live in u1.cards-*.js, cases in u1.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {q:D1} {a:D1.option} {when:D1.option} {plain:option} {needs:option} {t:agency} {test:ledgerId} {cue:D1}.

FC.unit('civics', 'u1', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 4,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'One',
  title: { text: 'Who makes the last decision' },   // a gate unit is titled in plain words; the answers are taught inside it
  subtitle: 'The first question, and the four kinds of decision-maker it sorts every case into',
  teaches: { steps: ['D1'], outcomes: [], terms: ['agency'], families: ['congress', 'president', 'courts', 'states'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER. In a gate unit it pairs families. All six pairs of the four are here, because a learner
  // confuses every one of them. Each entry is written once and used six ways: the look-alike card
  // ("how to tell them apart"), its side-by-side table, the list on the question card, the feedback when one is
  // picked for the other, the grouping of drill items, and what returns together later.
  // test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'congress~president', pair: ['congress', 'president'], step: 'D1',
      shared: 'Both belong to the government of the whole country, and one law can appear in both: the lawmakers vote on it, and then the President or an office puts it into practice.',
      rule: 'In {a:D1.congress} the last decision is a vote by lawmakers. In {a:D1.president} it is made by the President or by an office that carries out laws: a rule, an inspection, an order, a refusal to sign. A signature on a law the lawmakers passed does not count as a decision of its own, so a signed law stays with {a:D1.congress}.',
      test: 'Does the story end on a vote by lawmakers, or on something the President or an office decides or does? If a law is in the story, was it already passed, with the story now about what is done with it?' },
    { id: 'congress~courts', pair: ['congress', 'courts'], step: 'D1',
      shared: 'Both can be about one law, and both can be described with the same words: a trial, a charge, a decision, a vote on whether someone is guilty.',
      rule: 'In {a:D1.congress} the deciders are lawmakers, who vote. In {a:D1.courts} the decider is a judge, who rules, or who has been asked to. A trial held in the Senate is a vote by senators, so it stays with {a:D1.congress}.',
      test: 'Who casts the deciding votes, or gives the ruling: lawmakers in the House or the Senate, or a judge?' },
    { id: 'president~courts', pair: ['president', 'courts'], step: 'D1', taughtIn: 'q-kind',
      shared: 'Both can be about one rule: an office or the President makes it, and someone then takes it to a judge.',
      rule: 'In {a:D1.president} the story ends with the President or an office deciding. In {a:D1.courts} it ends with a judge deciding, or with someone asking a judge to, even when the rule the judge is asked about came from an office. What the office did earlier is how the matter reached the judge.',
      test: 'Where does the story stop: on a decision by the President or an office, or on a judge deciding, or on someone asking a judge to decide?' },
    { id: 'courts~states', pair: ['courts', 'states'], step: 'D1',
      shared: 'Both can be about a local matter: a ticket, a fence, a rule about a street. A judge of a state’s court and a city council can both be in one story.',
      rule: 'In {a:D1.courts} the last decision is a judge’s, in whatever court, and a judge in a state’s own court is still a judge. In {a:D1.states} it is made by the lawmakers, the governor or the offices of a state, or by a city, a town or a county. A state’s court does not turn a case into the state’s decision.',
      test: 'Is the last decision made by a judge, whatever the court? Or is it made by a state, a city, a town or a county, acting as a government?' },
    { id: 'president~states', pair: ['president', 'states'], step: 'D1',
      shared: 'Both can be offices that inspect, license or enforce, and the work an inspector does can be exactly the same in each.',
      rule: 'In {a:D1.president} the office belongs to the government of the whole country, or the decision is the President’s. In {a:D1.states} the office belongs to one state, or to a city, a town or a county. What the office does can be the same in both. Whose office it is separates them.',
      test: 'Whose government does the office or the official belong to: the whole country’s, or one state’s, or a city’s, a town’s or a county’s?' },
    { id: 'congress~states', pair: ['congress', 'states'], step: 'D1', taughtIn: 'q-kind',
      shared: 'In both, lawmakers vote on a bill, and they can vote on the same sort of matter, such as a tax.',
      rule: 'In {a:D1.congress} the lawmakers are the House and the Senate, and what they decide is for the whole country. In {a:D1.states} the lawmakers belong to one state, or the deciders are the council of a city, a town or a county, and what they decide is for that place alone.',
      test: 'Do the lawmakers in the case make rules for the whole country, or for one state, city, town or county?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The first four parts follow the four answers of the key's first question, in the key's order (A13).
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The first two kinds: lawmakers voting, and the President or an office',
      cards: ['orient-kind', 'meet-congress', 'check-congress', 'term-agency', 'meet-president', 'check-president',
              'look-congress-president', 'exc-signed'] },
    { id: 'p2', title: 'The other two kinds: a judge, and a state, a city or a county',
      cards: ['meet-courts', 'check-courts', 'exc-trial', 'meet-states', 'check-states', 'exc-statejudge',
              'look-president-states', 'q-kind'] },
    { id: 'p3', title: 'One whole case, then the drill',
      cards: ['worked-bags'], drill: true, close: ['recap-kind'] }
  ],

  // The drill of a gate unit has three stages (A15): piece, route, claim. There is no name stage and no finish
  // stage, because the route is one question long and its answer is the name.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  // The drill and return cases of this unit are also the bank that later units draw their { earlier: 'u1' } items from.
  drill: {
    key: 'n1',            // the old quick-drill totals for this unit were stored under pl:civics:stats:n1 (frozen; see E8)
    add: 'Many of these cases name two or three parts of government, and the part named first is often not the one the question wants. That is on purpose. Read each story to its end before you answer, and look for the last decision, or the one the story asks for.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'g-postage', step: 'D1' }, { case: 'g-leash', step: 'D1' }],
                [{ case: 'g-parkdogs', step: 'D1' }, { case: 'g-eviction', step: 'D1' }],
                [{ tell: 'congress~president' }, { tell: 'congress~courts' }, { tell: 'president~states' }]] },
      { ask: 'route',
        items: [['g-bakers', 'g-pardon'],
                ['g-residents', 'g-curfew'],
                ['g-judgecharge', 'g-foodtruck'],
                ['g-veto', 'g-noiserewrite']] },
      { ask: 'claim', demo: 'g-claim-demo',
        items: [['g-claim-first']] }
    ],
    // Fresh cases for later days: two for each family (E9).
    // A due family returns as a case the learner has not seen, beside a case of the family they most often take it for.
    returns: ['g-ret-mail', 'g-ret-citizenship',
              'g-ret-bridges', 'g-ret-forms',
              'g-ret-window', 'g-ret-musicians',
              'g-ret-speed', 'g-ret-daycare']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the gate unit of Civics. It replaces old Unit One cards one to eight and the Who decides drill. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' }
    ],
    // What the K2 rewrite changed in the gate, and why (docs/rebuild/civics-plan.md, section a). "was" is the wording of the old course.
    keyChanges: [
      { step: 'D1', was: '"Which part of government is acting, or being asked to act?" (the audited version: "Who has the authority here?", shown as "N1 · ...")',
        now: '"Who makes the last decision in the case, or is asked to make it?"',
        why: 'K2.2, K2.4. Most cases name two parts of government, and "acting" fitted both. The old cards needed two unwritten rules to choose ("find the act the story is about"; "if the story hands the decision to another part, that part"), and the audit found the gate cleanly supported in 10 of 19 specimens (K3: S2, S4/S8, S10, S12, S14, S17, S18). The last decision, or the one a case asks for, is something an observer can point to in the words. Run against the old material (plan section c), it gives one answer for every case but two, and those two are rewritten or taught as an exception.' },
      { step: 'D1', was: 'no tie-break; the two reading rules lived only in card prose',
        now: 'no `yieldsTo`. A case has one last decision. The one case that needs saying, a law the President signs, is settled in the first answer’s `when`',
        why: 'K2.8. A tie-break by answer order cannot express "whichever comes last", and a signed law is the only case where the literal last act (the signature) is not the decision the case is about. It is taught as an exception (looks like the President, is Congress).' },
      { step: 'D1', was: 'first answer "Congress" / sub "the lawmakers"',
        now: '"Congress, in the House or the Senate"; `when` names the five kinds of vote and says a signed law stays Congress’s',
        why: 'V2 matches key lines as substrings, so a one-word answer "Congress" would forbid the word in every card. The answer now also says where Congress votes.' },
      { step: 'D1', was: 'second answer "The President and the agencies" / sub "the ones who carry laws out"',
        now: '"The President or a federal agency"',
        why: '"federal", because a state’s own agencies belong to the fourth answer; "or", because one of them makes the decision. The old wording left a state licensing office ambiguous.' },
      { step: 'D1', was: 'third answer "The courts" / sub "the judges"',
        now: '"A judge, in any court"',
        why: 'Audit S12: a criminal trial is mostly under state law, so a reader routed it to the states. Any judge, federal or state, is now the third answer, and the fourth answer’s `when` says so.' },
      { step: 'D1', was: 'fourth answer "A state or a city" / sub "state and local government"',
        now: '"A state, city or county government"',
        why: 'Counties were taught (old localgov) and missing from the answer. A judge in a state’s court is no longer here.' },
      { step: 'D1', was: 'each answer had `n`, `sub`, `keeps`; no purpose or why',
        now: 'each answer has `n`, `plain`, `needs`, `when`, `keeps`; the question has `purpose` and `why`',
        why: 'A15: the gate’s answers are Unit One’s kinds and carry `plain` and `needs`. `sub` becomes `when` (S1). P9: the purpose and the reason for the question are written (K2.7).' }
    ],
    // Cards that name a wrong idea, with where the idea comes from. verified: false is shown to the owner at deploy (E15).
    wrongIdeas: [],       // the two wrong-idea cards were cut in the quick lesson; the ideas live on in the signed-law exception, the first-named claim and the recap
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
