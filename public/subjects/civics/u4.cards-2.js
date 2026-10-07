// Civics, Unit Four, part one (second half): the second name (a demand that no law allows), the order that only carries
// out a law, and the two look-alike pairs that belong with it.

FC.cards('civics', 'u4', [

  /* ---------- A demand that no law allows ---------- */
  { id: 'meet-beyondpres', kind: 'meet', outcome: 'beyondpres',
    link: 'The last name was an office staying inside a law. This is what it looks like when there is no law to stay inside.',
    case: 'e-straws', mark: 'E1',
    explain: [
      'Shops must stop selling plastic straws by March, and no law Congress passed gives the President that power. A ban on selling a product is a new rule for everyone who sells it, and a new rule for everyone is what a law is. Only Congress makes laws.',
      'The same goes for a new tax or fee, a new crime, or a new duty for people or businesses. An {t:order} cannot demand any of them on its own. It is weaker than a law: the next President can cancel it by signing another, and a judge can be asked to strike it down. With no law behind the order, the President has nothing to carry out.'
    ],
    spot: [
      { do: 'Find the demand on people outside the government: stop selling plastic straws by March.', why: 'An order that only tells the offices what to do is a different thing.' },
      { do: 'Check what it demands: a ban, which is a new rule for every company that sells straws.', why: 'A new tax, fee, crime, duty or ban is something only a law can create.' },
      { do: 'Look for a law Congress passed that allows it: the story says there is none.', why: 'With no law behind it, there is nothing for the President to carry out.' }
    ],
    feature: { step: 'E1', option: 'newduty' },
    name: 'This is {o:beyondpres}. The demand goes past what the President can do alone.' },

  { id: 'check-beyondpres', kind: 'check', after: 'beyondpres',
    case: 'e-studentfee',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty'] } },

  { id: 'exc-order', kind: 'exception', looksLike: 'beyondpres', is: 'execute', ledger: 'execute~beyondpres',
    h: 'An order that only carries out a law',
    link: 'An order from the President can look like {o:beyondpres}: it has the President’s signature, and nobody voted on it. This story shows an order that is the opposite.',
    case: 'e-sixtydays',
    setup: 'The President signed an {t:order} that nobody voted on, and that is often what {o:beyondpres} looks like. Yet this story is {o:execute}.',
    prompt: { kind: 'phrase', answer: 'The order asks nothing of families. It only tells the office how to run the law' },
    because: [
      'Ask what the order demands, and of whom. It tells a federal office to answer grant applications within sixty days and to publish how many it approved. The only people it commands are the office’s own staff.',
      'A law is behind it too: the one Congress passed that lets families apply for a grant. The order adds nothing to what that law gives or demands. It just tells the office how to run it.'
    ],
    take: 'In the news both kinds are called an {t:order}. The word does not settle it. What the order demands, and of whom, does.' },

  { id: 'look-execute-beyondpres', kind: 'lookalike', ledger: 'execute~beyondpres',
    link: 'Both can be a rule from a federal office, with a law somewhere in the story. The test is whether the law allows what the office demands.',
    cases: ['e-salt-label', 'e-salt-limit'],
    instruction: 'Both stories are about the same federal food office and the salt in packaged snacks. Compare one thing: is there a law Congress passed behind what the office does, and does the office stay inside it?',
    prompt: { kind: 'which', option: 'E1.newduty', answer: 'e-salt-limit' },
    difference: [
      'In Story A a law exists: Congress passed one that says every snack must show how much salt it holds. The office only decides the details of the label. It adds no demand of its own. That is {o:execute}.',
      'In Story B no law exists: Congress has passed none on how much salt a snack may hold. The office sets a limit and a fine for every firm that sells snacks, with nothing behind them. That is {o:beyondpres}.',
      'A law can be in both stories. Say a law sets a camping permit at $15 a night and an office announces $40: the law is only the line the office crossed, and that is {o:beyondpres}. Finding a law is not enough. Check that what the office demands is inside it.'
    ] },

  { id: 'look-beyondcong-beyondpres', kind: 'lookalike', ledger: 'beyondcong~beyondpres',
    link: 'Two of the names say “beyond”, and both are about someone doing what they had no power to do. They belong to different questions, so they are easy to run together.',
    cases: ['e-barber-law', 'e-barber-order'],
    instruction: 'Both stories are about the hours barbers may open their shops, and in both the President signs something on Monday. Compare one thing: who made the rule, lawmakers who voted on a law, or the President by an order?',
    prompt: { kind: 'which', option: 'D1.president', answer: 'e-barber-order' },
    difference: [
      'In Story A the House and the Senate both passed a law, and the President signed it. Signing a law that lawmakers passed leaves the decision with them, as Unit One showed. The first answer is {a:D1.congress}, and barbers’ hours are not among the Constitution’s powers for Congress, so this is {o:beyondcong}.',
      'In Story B nobody voted. The President signed an order about the barbers’ hours, and no law Congress passed gives the President that power. The first answer is {a:D1.president}, and this is {o:beyondpres}.',
      'The stories are almost the same. What differs is who made the rule: lawmakers, or the President by an order.'
    ] }
]);
