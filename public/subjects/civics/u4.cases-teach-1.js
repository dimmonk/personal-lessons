// Civics, Unit Four: cases shown inside cards, part one. The word for a written instruction from the President, then
// "carrying out the law" and "beyond the President's power", the pair of cases for their look-alike card, and the order that only carries out a law.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that step; the app marks it, always in the same style.
// segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// Case text is what people say and is free wording; every other field prints key wording by token.

FC.cases('civics', 'u4', [

  /* ---------- The case that carries the word for a written instruction from the President (no name is asked of it) ---------- */

  { id: 'e-memo', use: 'teach', tier: 'clean', setting: 'work', topic: 'a one-page instruction to the offices', name: 'The one-page instruction',
    text: "On Monday the President signed a one-page paper that tells every federal office to answer letters from the public within thirty days. No one voted on the paper. It asks nothing of anybody outside the government: it is addressed to the offices themselves." },

  /* ---------- An agency putting a law into practice ---------- */

  { id: 'e-credit', use: 'teach', tier: 'clean', setting: 'money', topic: 'a tax credit form', name: 'The insulation credit',
    text: "Last year Congress passed a law that gives a tax credit to anyone who adds insulation to their home. The law says the work must be real and must be done by a licensed builder. On Monday the federal tax agency published the form people must fill in to claim the credit, and the receipts they must keep. Its staff will start checking the forms in the spring.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { E1: 'the federal tax agency published the form people must fill in to claim the credit, and the receipts they must keep' } },

  { id: 'e-birdpermit', use: 'check', tier: 'clean', setting: 'travel', topic: 'a permit for a pet bird', name: 'The pet bird permit',
    text: "Under a law Congress passed, anyone who brings a pet bird into the country needs an import permit. Mina sent in her form last month. On Wednesday a clerk at the federal animal-health agency checked it against the list in the law, found it complete and mailed her the permit.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { E1: 'a clerk at the federal animal-health agency checked it against the list in the law, found it complete and mailed her the permit' },
    segments: [
      { text: 'Under a law Congress passed, anyone who brings a pet bird into the country needs an import permit', note: 'That is the law, and it came first. It is not the decision in the case.' },
      { text: 'Mina sent in her form last month', note: 'That is what the person asking did. The decision belongs to the office that answers her.' },
      { text: 'a clerk at the federal animal-health agency checked it against the list in the law, found it complete and mailed her the permit' }
    ],
    reason: { E1: 'The decision is the clerk’s: an office is processing an application under a law that is already there. It writes no new rule, and it asks for nothing the law does not list.' } },

  /* ---------- Beyond the President's power ---------- */

  { id: 'e-straws', use: 'teach', tier: 'clean', setting: 'community', topic: 'plastic straws', name: 'The straw ban',
    text: "On Monday the President signed an executive order that bans every company in the country from selling plastic straws. No law passed by Congress gives the President the power to ban a product, and Congress has not voted on any such ban. Shops were told they must stop selling straws by March.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { E1: 'No law passed by Congress gives the President the power to ban a product' } },

  { id: 'e-studentfee', use: 'check', tier: 'clean', setting: 'learning', topic: 'a fee for every student', name: 'The student fee',
    text: "The federal education agency announced that every college in the country must charge each student a new fee of $200 a year and send the money to the government. The agency says it can do this by its own rule. No law Congress passed mentions such a fee.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { E1: 'No law Congress passed mentions such a fee' },
    reason: { E1: 'The rule demands a new fee of every student, and the case tells you the law is missing: {cue:E1}. The {t:agency}’s own rule is all there is behind it.' },
    not: { outcome: 'execute', why: 'An office that carries out a law stays inside it. Here no law is behind the fee at all, so there is nothing for the office to be carrying out.' } },

  /* ---------- The look-alike pair: the same food rules, with a law behind one and none behind the other ---------- */

  { id: 'e-salt-label', use: 'teach', tier: 'clean', setting: 'health', topic: 'salt printed on snack packages', name: 'The salt label',
    text: "Congress passed a law that says every packaged snack must show how much salt it holds. On Thursday the federal food agency published how large the salt line on the package must be, and the date from which every package must carry it.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { E1: 'the federal food agency published how large the salt line on the package must be' } },

  { id: 'e-salt-limit', use: 'teach', tier: 'clean', setting: 'health', topic: 'a salt limit for snacks', name: 'The salt limit',
    text: "Congress has passed no law about how much salt a snack may hold. On Thursday the federal food agency published a rule that no packaged snack may hold more than a set amount of salt, and that any firm selling one will be fined.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { E1: 'Congress has passed no law about how much salt a snack may hold' } },

  /* ---------- Exception: an order that carries out a law ---------- */

  { id: 'e-sixtydays', use: 'teach', tier: 'misleading', setting: 'home', topic: 'grants for storm damage', name: 'The sixty-day order',
    text: "Congress passed a law last year that lets families apply for a federal grant to repair storm damage. On Monday the President signed an executive order telling the federal housing agency to answer every grant application within sixty days, and to publish each month how many it has approved. The order asks nothing of families. It only tells the office how to run the law.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { E1: 'The order asks nothing of families. It only tells the office how to run the law' },
    segments: [
      { text: 'Congress passed a law last year that lets families apply for a federal grant to repair storm damage', note: 'That is the law, and it is why the order exists. The words asked for are in the order itself.' },
      { text: 'the President signed an executive order telling the federal housing agency to answer every grant application within sixty days', note: 'That is the part that looks like the second name: an order from the President, with no vote. What settles it is what the order asks of people.' },
      { text: 'The order asks nothing of families. It only tells the office how to run the law' }
    ] }
]);
