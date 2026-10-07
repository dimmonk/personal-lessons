// Civics, Unit Four: the unit record. Cards live in u4.cards-*.js, cases in u4.cases-*.js.
// A branch unit (lesson standard A3 to A11): it teaches the key's question for the second answer of the first question
// ("The President or a federal agency"), the six names that question sorts, and one word.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('civics', 'u4', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Four',
  title: { fromKey: 'D1.president' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'When the news says the President or a federal office did something, work out which of six things it was',
  teaches: { steps: ['E1'], outcomes: ['execute', 'beyondpres', 'commander', 'diplomacy', 'veto', 'pardon'], terms: ['order'] },
  assumes: ['u1', 'u2', 'u3'],   // everything these units teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse, written once and used six ways (lesson standard S3).
  // The first five pairs are inside this unit and are separated by its question. The last three set a name of this unit
  // beside a look-alike from the part of the key for Congress; a pair from two parts of the key is separated by the key's
  // first question (lesson standard 17). test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'execute~beyondpres', pair: ['execute', 'beyondpres'], step: 'E1',
      shared: 'Both can be a rule or an order from a federal office or the President, and both can have a law somewhere in the story.',
      rule: 'In {o:execute} a law Congress passed stands behind what is done, and the office stays inside it. In {o:beyondpres} no law Congress passed allows what is demanded of people outside the government, so the order or the rule goes past what the President can do alone.',
      test: 'Can you name a law Congress passed that allows what the rule or order demands, and does it stay inside that law?' },
    { id: 'commander~diplomacy', pair: ['commander', 'diplomacy'], step: 'E1',
      shared: 'Both are things the President does for the whole country, and both can involve ships, soldiers or another country’s leader.',
      rule: 'In {o:commander} the President gives the forces their orders, and they obey. In {o:diplomacy} the President, or someone speaking for the President, meets, negotiates or signs with another country’s government.',
      test: 'Who is on the other side: the armed forces, who are told what to do, or another country’s leaders, who are met and bargained with?' },
    { id: 'veto~pardon', pair: ['veto', 'pardon'], step: 'E1', taughtIn: 'q-pres',
      shared: 'Both are things only the President can do, by signing or not signing a paper, and both stop something others set going: a bill Congress passed, or a punishment.',
      rule: 'In {o:veto} the President acts on a bill that Congress has passed, and refuses to sign it. In {o:pardon} the President acts on a person who broke a federal law, and forgives the crime.',
      test: 'What is the President acting on: a bill Congress passed, or a person who broke a federal law?' },
    { id: 'veto~execute', pair: ['veto', 'execute'], step: 'E1', taughtIn: 'q-pres',
      shared: 'In both a law, or a bill that would become one, is in the story, and the President or an office is acting on it.',
      rule: 'In {o:veto} the President decides whether a bill Congress passed goes any further, and refuses it. In {o:execute} the law is already in force, and an office is putting it into daily practice.',
      test: 'Is the President deciding whether a bill takes effect, or is an office already putting a law into practice?' },
    { id: 'diplomacy~execute', pair: ['diplomacy', 'execute'], step: 'E1', taughtIn: 'q-pres',
      shared: 'Both are done by federal officials, and both can involve people who come from another country.',
      rule: 'In {o:diplomacy} the official sits across the table from another country’s government, as one country with another. In {o:execute} the official makes a law Congress passed work for people, even when the people come from another country.',
      test: 'Is the official dealing with another country’s government, or with people under a law Congress passed?' },
    { id: 'enumerated~execute', pair: ['enumerated', 'execute'], step: 'D1', taughtIn: 'q-pres',
      shared: 'Both are about one law: Congress passes it, and then an office puts it into practice.',
      rule: 'In {o:enumerated} the story ends on the lawmakers’ vote that passes a law. In {o:execute} the law is already passed, and the story ends on what an office does with it.',
      test: 'Does the story end on the vote that passed the law, or on what an office does with a law that is already passed?' },
    { id: 'confirm~diplomacy', pair: ['confirm', 'diplomacy'], step: 'D1', taughtIn: 'q-pres',
      shared: 'Both are about an agreement with another country, or about a person who will deal with other countries: the President acts, and the Senate votes.',
      rule: 'In {o:diplomacy} the story ends on the President’s side: someone meets, negotiates or signs. In {o:confirm} the story ends on the senators voting, or being asked to vote, on what the President put forward.',
      test: 'Does the story end on the President’s side, meeting, negotiating and signing, or on senators voting, or being asked to vote, on what the President put forward?' },
    { id: 'beyondcong~beyondpres', pair: ['beyondcong', 'beyondpres'], step: 'D1',
      shared: 'Both are a rule that the one who made it had no power to make, and a judge may be asked about either.',
      rule: 'In {o:beyondcong} lawmakers voted on a law about a matter the Constitution does not give Congress, or that takes away a right. In {o:beyondpres} the President or an office demanded something of people with no law Congress passed to allow it.',
      test: 'Who made the rule: lawmakers who voted on a law, or the President or an office by an order or a rule?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'An office running a law, and an order with no law behind it',
      cards: ['orient-pres', 'meet-execute', 'check-execute', 'term-order', 'meet-beyondpres', 'check-beyondpres',
              'exc-order', 'look-execute-beyondpres', 'look-beyondcong-beyondpres'] },
    { id: 'p2', title: 'What only the President can do, and the question to ask',
      cards: ['meet-commander', 'check-commander', 'meet-diplomacy', 'check-diplomacy', 'look-commander-diplomacy',
              'meet-veto', 'check-veto', 'meet-pardon', 'check-pardon', 'q-pres', 'check-pres', 'worked-harbor'],
      drill: true, close: ['recap-pres'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  drill: {
    key: 'e1',            // new in this rebuild: a unit of standard 1 has no old quick-drill counter to keep (E8)
    add: 'Many of these stories name a law, an office and the President together, and the one named first is often not the one that decides. Read to the end, and find what the President or the office does last.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'e-p-lab', step: 'E1' }, { case: 'e-p-parking', step: 'E1' }],
                [{ case: 'e-p-patrol', step: 'E1' }, { case: 'e-p-diplomas', step: 'E1' }],
                [{ case: 'e-p-holiday', step: 'E1' }, { case: 'e-p-nurse', step: 'E1' }],
                [{ tell: 'execute~beyondpres' }, { tell: 'commander~diplomacy' }, { tell: 'beyondcong~beyondpres' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['e-r-lenses', 'e-r-water'],
                ['e-r-flight', 'e-r-minister'],
                ['e-r-holiday', 'e-r-embezzle'],
                ['e-r-absence', 'e-r-bridge'],
                ['e-r-fine', 'e-r-memo2'],
                ['e-r-homecoming', 'e-r-brisk'],
                [{ earlier: 'u1' }]] }
    ],
    // Fresh cases for later days: two for each name (E9).
    // A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['e-ret-bees', 'e-ret-alarms',
              'e-ret-lunch', 'e-ret-buspass',
              'e-ret-bridgeworks', 'e-ret-supplyship',
              'e-ret-teams', 'e-ret-pipeline',
              'e-ret-bicycles', 'e-ret-museums',
              'e-ret-sailor', 'e-ret-pharmacist']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit for the President or a federal agency. It replaces old Unit Three’s President part, the airline-rule worked case, old Unit Four’s card on the citizenship test, and old Unit Seven’s passport-fee worked case. Not yet deployed, so later edits stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    // What the K2 rewrite changed in the key for this branch, and why (docs/rebuild/civics-plan.md, section a). "was" is the wording of the old course.
    keyChanges: [
      { step: 'E1', was: 'Two questions of five answers each, every answer of both keeping one name: "What is the President, or an agency, doing?" and "What limits the President or the agency here?"',
        now: 'one question, "What does the President or the agency do?", with six answers',
        why: 'V55: both questions decided everything alone. The limits that were the second question’s answers moved into the `when` of each answer, so they are still printed where the answer is taught.' },
      { step: 'E1', was: '"Applying a law Congress already passed" with the limit "An agency may go no further than the law allows"',
        now: '"Puts a law Congress passed into practice"; `when` includes "stays inside what that law allows"', why: 'The two questions merged.' },
      { step: 'E1', was: '"Ordering something new that no law from Congress allows" with the limit "Only a law from Congress can do it; an order cannot"',
        now: '"Demands something of people that no law allows"; `when` names an executive order or a rule and the kinds of demand',
        why: 'Audit S10: the old gate sent this case to Congress because the power was Congress’s. The new gate reads who decided, and this answer says what makes the demand go past the President.' },
      { step: 'E1', was: '"Directing the armed forces" with the limit "Only Congress can declare war and pay for it"',
        now: '"Gives orders to the armed forces"',
        why: 'The war-declaring limit is Congress’s decision. It is taught in the portrait, a refuting card and a claim, and is not an answer to what the President did.' },
      { step: 'E1', was: '"Dealing with another country" with the limit "A treaty does not bind anyone until two-thirds of the Senate agree"',
        now: '"Deals with another country"; `when` includes "an official acting for the President"', why: 'The old specimen was the Secretary of State.' },
      { step: 'E1', was: 'one answer "Vetoing a bill, or pardoning a federal conviction" with one limit line for both',
        now: 'two answers, "Refuses to sign a law Congress passed" (two-thirds override in `when`) and "Forgives a federal crime" (state-crime limit in `when`)',
        why: 'K2.7: one `needs` could not hold for a name that is two unrelated powers.' },
      { outcome: 'veto', was: 'Veto and pardon', now: 'Veto', why: 'The split above.' },
      { outcome: 'pardon', was: 'Veto and pardon', now: 'Pardon', why: 'The split above.' },
      { outcome: 'execute', was: 'Carrying out the law', now: 'kept; also called enforcing the law, implementing a law, executing the law', why: 'Already plain.' },
      { outcome: 'commander', was: 'Commanding the armed forces (commander in chief)', now: 'Commander in chief', why: 'V1 forbids brackets; K4 keeps the real-life name and puts the plain words in `plain`.' },
      { outcome: 'diplomacy', was: 'Dealing with other countries (foreign affairs and treaties)', now: 'Foreign affairs', why: 'V1, K4.' },
      { outcome: 'beyondpres', was: 'Beyond the President’s reach', now: 'Beyond the President’s power', why: 'K2.6: "reach" is a figure of speech.' }
    ],
    // Cards that name a wrong idea, with where the idea comes from. verified: false is shown to the owner at deploy (E15).
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
