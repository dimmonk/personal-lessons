// Wealth Preservation, Unit Three: the unit record. A branch unit (lesson standard A1 to A11) in an ACTION subject (P26): every
// meet card says what to do, every stage of the drill that asks about cases holds a case where the one thing is already made safe,
// two fresh cases are held back for each name, and the unit ends with a plan card. It teaches the key's question for the first
// answer's branch, "what one thing could take most of it?", and its seven names. Cards live in u3.cards-*.js, cases in
// u3.cases-*.js. Every card and case id carries the prefix w3- because ids are unique within the whole subject.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('wealth', 'u3', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Three',
  title: { text: 'When one thing is most of your money' },
  subtitle: 'What to do when one stock, property, business, claim or loan could take most of what you have, and when to leave it alone',
  teaches: { steps: ['S1'], outcomes: ['diversify', 'hedge', 'supports', 'safe', 'insure', 'entity', 'deleverage'],
             terms: ['threesupports', 'company'] },
  assumes: ['u1', 'u2'],

  // THE LOOK-ALIKE LEDGER. One entry for each pair of names a learner will confuse. Each entry is written once and used six ways:
  // the look-alike card, the list on the question card, the feedback when one is picked for the other, the grouping of drill
  // items, and what returns together later. test is a question to put to a story, with no name in it. Two entries carry the
  // key's tie-breaks and are taught by an exception card as well; four are taught by the question card or a look-alike card.
  ledger: [
    { id: 'diversify~hedge', pair: ['diversify', 'hedge'], step: 'S1',
      shared: 'In both, one company’s shares are most of what the person has, and nothing is said about prices in general.',
      rule: 'In {o:diversify} nothing stops the person selling the shares, so the fix is to sell them in steps. In {o:hedge} a rule stops them selling for a set time, so all they can do is limit the loss while they wait.',
      test: 'Is anything stopping the person selling, and until when?' },
    { id: 'diversify~supports', pair: ['diversify', 'supports'], step: 'S1', taughtIn: 'w3-q-shock',
      shared: 'In both, one holding is most of what the person has, and it may be doing very well.',
      rule: 'In {o:diversify} the person has no part in running it and can sell it. In {o:supports} the person runs the business day to day, and at least one of {t:threesupports} is missing.',
      test: 'Does the person do the work of running it, or does someone else?' },
    { id: 'supports~safe', pair: ['supports', 'safe'], step: 'S1',
      shared: 'In both, the person runs a business that is most of what they have.',
      rule: 'In {o:supports} at least one of {t:threesupports} is missing. In {o:safe} all three are there.',
      test: 'Which of the three is missing, if any: everything else spread out, several years of spending held outside the business, or no loan against its shares?' },
    { id: 'insure~safe', pair: ['insure', 'safe'], step: 'S1', taughtIn: 'w3-q-shock',
      shared: 'In both, something in the person’s life could bring {t:claim}, and the person has insurance.',
      rule: 'In {o:insure} the biggest claim that could come is far bigger than the insurance. In {o:safe} the insurance is well above any claim that could come.',
      test: 'Put the biggest claim that could come next to what the insurance pays. Which is bigger, and by how much?' },
    { id: 'insure~entity', pair: ['insure', 'entity'], step: 'S1',
      shared: 'In both, {t:claim} could come, and it could reach most of what the person owns.',
      rule: 'In {o:insure} the claim could be far bigger than the insurance. In {o:entity} the properties or businesses are all in one name, so {t:claim} on any one could reach the rest. When a story shows both, the answer is {o:insure}.',
      test: 'Is there {t:claim} bigger than the insurance, or does the story only show how the properties are held?' },
    { id: 'entity~safe', pair: ['entity', 'safe'], step: 'S1', taughtIn: 'w3-q-shock',
      shared: 'In both, several properties or businesses could each bring {t:claim}.',
      rule: 'In {o:entity} they are all in the person’s own name, so one claim could reach the rest. In {o:safe} each is already in a company of its own, so {t:claim} stops at the edge of that company.',
      test: 'Whose name is each property or business held in?' },
    { id: 'deleverage~safe', pair: ['deleverage', 'safe'], step: 'S1', taughtIn: 'w3-q-shock',
      shared: 'In both, there is a loan against something that is most of what the person has.',
      rule: 'In {o:deleverage} the lender could force a sale: the loan is large against what it is secured on, or the lender can demand it back, or the rate can jump. In {o:safe} the loan is small, at a fixed rate, and cannot be demanded back while it is paid.',
      test: 'How large is the loan against what it is secured on, and what is the lender allowed to do?' },
    { id: 'deleverage~supports', pair: ['deleverage', 'supports'], step: 'S1',
      shared: 'In both, a loan could be used against the borrower, and what it is secured on is most of what they have.',
      rule: 'In {o:supports} the person runs the business, and a loan against its shares is one of the gaps. In {o:deleverage} the loan is against something the person does not run. When a story shows both, the answer is {o:supports}.',
      test: 'Is what the loan is secured on a business that the person runs?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts (A13). The part with drill: true is the
  // last, and its close cards come after the drill.
  parts: [
    { id: 'u3p1', title: 'One big holding, and a business you run',
      cards: ['w3-orient', 'w3-meet-diversify', 'w3-check-diversify', 'w3-meet-hedge', 'w3-check-hedge', 'w3-look-diversify-hedge',
              'w3-term-threesupports', 'w3-meet-supports', 'w3-check-supports', 'w3-meet-safe', 'w3-check-safe',
              'w3-look-supports-safe'] },
    { id: 'u3p2', title: 'Claims, properties in one name and loans, then the drill',
      cards: ['w3-meet-insure', 'w3-check-insure', 'w3-term-company', 'w3-meet-entity', 'w3-check-entity', 'w3-exc-insure',
              'w3-meet-deleverage', 'w3-check-deleverage', 'w3-exc-supports', 'w3-q-shock', 'w3-check-shock',
              'w3-worked-brewery'],
      drill: true, close: ['w3-recap', 'w3-plan'] }
  ],

  // The drill is a ramp of five stages (A10). The app owns the wording of every stage instruction. Items are authored in groups:
  // cases that share ledger entries and one tier. The app shuffles the groups inside a tier band (clean, then varied, then
  // misleading) and the items inside a group. Every case is new. Every stage that asks about cases holds one where the one thing
  // is already made safe (P26, V37).
  drill: {
    key: 'x3',            // the old quick-drill totals for the old Unit Three were stored under pl:wealth:stats:x3 (frozen; see E8)
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'w3-p-ent', step: 'S1' }, { case: 'w3-p-saf', step: 'S1' }],
                [{ case: 'w3-p-hdg', step: 'S1' }, { case: 'w3-p-sup', step: 'S1' }],
                [{ tell: 'diversify~hedge' }, { tell: 'supports~safe' }, { tell: 'insure~entity' }, { tell: 'deleverage~supports' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['w3-r-div-1', 'w3-r-hdg-1'], ['w3-r-sup-1', 'w3-r-saf-1'], ['w3-r-ins-1', 'w3-r-ent-1'], ['w3-r-del-1', 'w3-r-saf-3'],
                ['w3-r-mis-sup', 'w3-r-mis-ins', 'w3-r-mis-saf'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'w3-c-demo',
        items: [['w3-c-more'], ['w3-c-house']] }
    ],
    // Fresh cases for later days: two for each name, one for each of its scheduled returns (E9). A due name returns as a case the
    // learner has not seen, beside a case of the name they most often take it for.
    returns: ['w3-x-div-1', 'w3-x-div-4',
              'w3-x-hdg-1', 'w3-x-hdg-4',
              'w3-x-sup-1', 'w3-x-sup-4',
              'w3-x-saf-2', 'w3-x-saf-4',
              'w3-x-ins-1', 'w3-x-ins-4',
              'w3-x-ent-1', 'w3-x-ent-4',
              'w3-x-del-1', 'w3-x-del-4']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch of the key for one thing most of the money depends on. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US accounts, rules and institutions, US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    // What the K2 rewrite changed in the key for this branch, and why (docs/rebuild/wealth-plan.md, section (a)).
    keyChanges: [
      { step: 'S1', was: 'two questions: "Where is the single weak point?" and "What is being done about it?"',
        now: 'one question, "What one thing could take most of it?", with seven answers, each something an observer can point to',
        why: 'The second question restated the name as a sentence and could only be answered from a case that described the fix already applied (audit C.2, 7.4, 7.6). A question whose answers each keep one name makes the first decide nothing (K2.2, V55).' },
      { step: 'S1', was: 'one answer, "One holding is most of what you own", for three names, separated by the second question and a "choosing" card',
        now: 'three answers, split by what the person can do: they can sell it and do not run it, they are not allowed to sell it yet, or they run it with a support missing',
        why: 'The three facts that choose between the names are what the case shows, so they are the answers.' },
      { outcome: 'hedge', was: 'unable to sell it, or the tax on selling would be so large that selling is not worth it',
        now: 'a rule that stops the sale for a set time',
        why: '"So large that selling is not worth it" cannot be pointed to, and a large tax on a free sale is a different case, taught with the tax names.' },
      { outcome: 'supports', was: 'no name for a business the owner runs with something missing',
        now: 'a new name, "Put the three supports in place", and a new term',
        why: 'K2.9: a business the owner runs with a support missing (very common: a loan against the company’s shares) had no answer.' },
      { outcome: 'safe', was: 'a name that fitted only a business with three supports',
        now: 'one leave-alone name for any one thing already made safe: a business with all three supports, insurance well above any claim, properties in separate companies, or a modest fixed loan',
        why: 'K2.9: the old specimens that described a fix already in place are, read as situations, sound cases with no other honest answer.' }
    ],
    wrongIdeas: [],       // the two wrong-idea cards were cut in the quick lesson; the ideas live on in the claim items
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
