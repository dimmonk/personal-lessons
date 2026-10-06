// Civics, Unit Four, part one (second half): the second name (a demand that no law allows), the order that only carries
// out a law, and the two look-alike pairs that belong with it.

FC.cards('civics', 'u4', [

  /* ---------- A demand that no law allows ---------- */
  { id: 'meet-beyondpres', kind: 'meet', outcome: 'beyondpres',
    link: 'The last name was an office staying inside a law. The next is what it looks like when there is no law to stay inside. It begins with the kind of paper you have just met.',
    case: 'e-straws', mark: 'E1',
    strip: [
      'The President signed an {t:order}, a written instruction.',
      'It does not only tell the offices how to work. It demands something of companies outside the government: stop selling a product, by March. The case says that no law of Congress gives the President that power.',
      'Nobody votes in the case. The last thing in it is the order itself.'
    ],
    explain: [
      'Congress makes the laws. The President leads the offices that carry them out, and gives them orders. A ban on selling a product is a new rule for everyone who sells it, and a new rule for everyone is what a law is. So a ban of that kind has to come from a law that Congress passed.',
      'The same is true of a new tax or fee, a new crime, or a new duty for people or businesses. An {t:order} cannot ask any of them on its own, and it is not as strong as a law: the next President can undo it by signing another, and a judge can be asked to strike it down. Here there is no law behind the order, so there is nothing for the President to carry out.'
    ],
    feature: { step: 'E1', option: 'newduty' },
    name: 'The name for this is {o:beyondpres}. "Beyond" because the demand goes past what the President can do alone, and "power" because power is the word for what a part of government is allowed to do.' },

  { id: 'check-beyondpres', kind: 'check', after: 'beyondpres',
    case: 'e-studentfee',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty'] } },

  { id: 'exc-order', kind: 'exception', looksLike: 'beyondpres', is: 'execute', ledger: 'execute~beyondpres',
    h: 'An order that only carries out a law',
    link: 'A written order from the President can look like {o:beyondpres}: it has the President’s signature, and nobody voted on it. This card shows a case in which an order is exactly the opposite.',
    case: 'e-sixtydays',
    setup: 'The President has signed an {t:order} that nobody voted on, and that is what {o:beyondpres} often looks like. Yet this case is {o:execute}.',
    prompt: { kind: 'phrase', answer: 'The order asks nothing of families. It only tells the office how to run the law' },
    because: [
      'Ask what the order demands, and of whom. It tells a federal office to answer applications within sixty days and to publish how many it has approved. It asks nothing of families or companies: the only people it commands are the office’s own staff.',
      'A law is behind it, too: the one Congress passed that lets families apply for a grant. The order adds nothing to what that law gives or demands. It tells the office how to run it.'
    ],
    take: 'In the news both kinds will be called an {t:order}. The word does not settle the name. What the order demands, and of whom, does.' },

  { id: 'look-execute-beyondpres', kind: 'lookalike', ledger: 'execute~beyondpres',
    link: 'You have met both names on their own. They are easy to mix up, because both can be a rule from a federal office, and both can have a law somewhere in the story. This card puts them side by side.',
    cases: ['e-salt-label', 'e-salt-limit'],
    instruction: 'Both cases are about the same federal food office and the salt in packaged snacks. Compare one thing: is there a law Congress passed behind what the office does, and does the office stay inside it?',
    prompt: { kind: 'which', option: 'E1.newduty', answer: 'e-salt-limit' },
    difference: [
      'In Case A a law exists: Congress passed one that says every snack must show how much salt it holds. The office decides the details of the label. It adds no new demand, and only fills in how the law is followed. The answer is {a:E1.carryout}, and the case is {o:execute}.',
      'In Case B no law exists: the case says Congress has passed none on how much salt a snack may hold. The office sets a limit and a fine, which are demands on every firm that sells snacks, with nothing behind them. The answer is {a:E1.newduty}, and the case is {o:beyondpres}.',
      'A law can be in both cases. If an office goes past what the law allows, such as a law that sets a camping permit at $15 a night and an office that announces $40, the law is only the line the office has crossed, and the case is {o:beyondpres}. Do not stop at the law: check whether what the office demands is inside it.'
    ] },

  { id: 'look-beyondcong-beyondpres', kind: 'lookalike', ledger: 'beyondcong~beyondpres',
    link: 'Two of the names have "beyond" in them, and both are about someone doing what they had no power to do. They belong to the questions for different kinds of case, so they are easy to run together. This card puts them side by side.',
    cases: ['e-barber-law', 'e-barber-order'],
    instruction: 'Both cases are about the hours barbers may open their shops, and in both the President signs something on Monday. Compare one thing: who made the rule, lawmakers who voted on a law, or the President by an order?',
    prompt: { kind: 'which', option: 'D1.president', answer: 'e-barber-order' },
    difference: [
      'In Case A the House and the Senate both passed a law, and the President signed it. A signature on a law that lawmakers passed leaves the decision with them, as Unit One showed. The first answer is {a:D1.congress}. Its answer to the next question is {a:C1.barred}, because the hours barbers work are not among the Constitution’s powers for Congress, so the case is {o:beyondcong}.',
      'In Case B nobody voted. The President signed an order about the barbers’ hours, and the case says no law Congress passed gives the President that power. The first answer is {a:D1.president}, and its answer to the next question is {a:E1.newduty}, so the case is {o:beyondpres}.',
      'The story is the same. What differs is who made the rule: lawmakers, or the President by an order.'
    ] }
]);
