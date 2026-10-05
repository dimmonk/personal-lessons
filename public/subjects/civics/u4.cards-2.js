// Civics, Unit Four, part one (second half): the second name (a demand that no law allows), the wrong idea about a
// written order, the first look-alike pair, and the two exceptions that belong to it.

FC.cards('civics', 'u4', [

  /* ---------- A demand that no law allows ---------- */
  { id: 'meet-beyondpres', kind: 'meet', outcome: 'beyondpres',
    link: 'The last name was an office staying inside a law. The next is what it looks like when there is no law to stay inside. It begins with the kind of paper you have just met.',
    case: 'e-straws', mark: 'E1',
    strip: [
      'The President signed an {t:order}, a written instruction.',
      'It does not only tell the offices how to work. It demands something of companies outside the government: stop selling a product, by March.',
      'The demand is a ban. The case says that no law of Congress gives the President that power, and that Congress has not voted on one.',
      'Nobody votes in the case, and no judge has been asked anything yet. The last thing in it is the order itself.'
    ],
    explain: [
      'Think about who is allowed to do what. Congress makes the laws. The President leads the offices that carry them out, and gives them orders. A ban on selling a product is a new rule for everyone who sells it, and a new rule for everyone is what a law is. So a ban of that kind has to come from a law that Congress passed.',
      'The same is true of a new tax or fee, a new crime, or a new duty for people or businesses. All of them ask something of people outside the government, and an {t:order} cannot ask it on its own: it needs a law that Congress passed behind it. Here the case has no such law, and it says so.',
      'That is why the order is not an office carrying out a law, however much it looks like one. There is nothing to carry out. The President has demanded something that only a law from Congress could demand, and that is the whole of the case.',
      'People who think an order goes past the law can ask a judge to look at it. That would be a different case, and it would end with a judge deciding. This case ends with the order.'
    ],
    feature: { step: 'E1', option: 'newduty' },
    name: 'The name for this is {o:beyondpres}. "Beyond" because the demand goes past what the President can do alone, and "power" because power is the word for what a part of government is allowed to do.' },

  { id: 'again-beyondpres', kind: 'again', outcome: 'beyondpres',
    link: 'The straw ban gave you what to point to: {needs:beyondpres}. Here is a second case, and this time the demand comes from an office’s rule and not from the President’s order.',
    first: 'e-straws', second: 'e-summerweek', step: 'E1',
    instruction: 'Find what the two cases share. Ignore the story (straws, holiday pay) and ignore who is named (the President, an office). Look at one thing only: is there a law Congress passed that allows what is demanded?',
    prompt: { kind: 'phrase', answer: 'No law passed by Congress requires paid time off' },
    shared: [
      'In both cases someone in the federal government demands something of people outside it: companies must stop selling straws, businesses must give a week of paid leave. In both, the case says plainly that no law of Congress allows it. One demand is an order from the President and the other a rule from an office, and it makes no difference which.',
      'The two stories share nothing else. So this is not about plastic or about holidays. It holds wherever the President or an office demands something of people, and no law Congress passed allows it. That is what {o:beyondpres} names.'
    ] },

  { id: 'portrait-beyondpres', kind: 'portrait', outcome: 'beyondpres',
    link: 'What you point to is the missing law. Here is the rest of the picture.',
    typical: [
      'It always asks something of people outside the government: a new tax or fee, a new crime, a new duty, or a ban. If a paper only tells the offices how to do their work, it asks nothing of anyone outside, and it is not this name.',
      'The words you hear are "ordered", "now required", "banned", "a new fee", "without Congress". The words that settle it are the ones about the law. The case says there is none, or says what the law does say, and the demand goes past it.',
      'The law can be missing in two ways. There may be no law at all on the matter, as with the straws. Or there may be a law, and the demand goes past what it says. In both, nothing Congress passed allows what is demanded.',
      'It does not have to be angry or unpopular. A demand that nobody minds is still {o:beyondpres} when no law allows it.',
      'It can be undone. The next President can undo an order by signing another, and a judge can be asked to strike down an order that goes past the law.'
    ],
    not: 'An order or a rule is not enough on its own. If it only tells the offices how to do their work, or if a law Congress passed stands behind what it demands and it stays inside, the case is another name. What decides is the law behind it, not how heavy the rule is.',
    wild: ['"An executive order requires..."', '"Without Congress."', '"Exceeds his authority."', '"Challenged in court."', '"A new fee, set by the office itself."'],
    self: 'You hear it in the news whenever someone says an order "goes too far", or asks "who gave them the power to do that?" The question you can put to yourself is whether you can name the law.',
    ask: '"Which law Congress passed allows this?" If nobody can name one, and the order or the rule demands something of people outside the government, the case is {o:beyondpres}.' },

  { id: 'check-beyondpres', kind: 'check', after: 'beyondpres',
    case: 'e-studentfee',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty'] } },

  { id: 'refute-order', kind: 'refute', about: 'beyondpres',
    h: 'A wrong idea about a written order',
    link: 'The last cards described {o:beyondpres}. There is an idea about the President’s written orders that makes this name hard to see, so this card puts the idea right.',
    idea: '"An executive order is just as strong as a law, and it lasts as long."',
    verdict: 'This is wrong, in three ways.',
    right: [
      'First, an {t:order} is not made the way a law is made. Nobody in Congress votes on it. The word means this: {means:order}.',
      'Second, it has less reach than a law. An {t:order} can tell the offices how to carry out laws that already exist. It cannot create a new tax, a new crime or a new duty for people outside the government, because those need a law that Congress passed. An order that tries goes past what the President can do alone, and a judge can be asked to strike it down.',
      'Third, it does not last as long. The next President can undo an {t:order} by signing another. A law Congress passed is changed only when Congress passes a new one.'
    ],
    testedBy: ['e-claim-order'] },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-execute-beyondpres', kind: 'lookalike', ledger: 'execute~beyondpres',
    link: 'You have met both names on their own. They are easy to mix up, because both can be a rule from a federal office, and both can have a law somewhere in the story. This card puts them side by side.',
    cases: ['e-salt-label', 'e-salt-limit'],
    instruction: 'Both cases are about the same federal food office and the salt in packaged snacks. Compare one thing: is there a law Congress passed behind what the office does, and does the office stay inside it?',
    prompt: { kind: 'which', option: 'E1.newduty', answer: 'e-salt-limit' },
    difference: [
      'In Case A a law exists: Congress passed one that says every snack must show how much salt it holds. The office decides the details of the label: how large the line must be, and from what date. It adds no new demand, and only fills in how the law is followed. The answer is {a:E1.carryout}, and the case is {o:execute}.',
      'In Case B no law exists: the case says Congress has passed none on how much salt a snack may hold. The office sets a limit and a fine, which are demands on every firm that sells snacks, with nothing behind them. The answer is {a:E1.newduty}, and the case is {o:beyondpres}.',
      'The office is the same, the product is the same, and both rules are about salt. Only the law differs, which is why the story can never be what decides.'
    ] },

  { id: 'exc-order', kind: 'exception', looksLike: 'beyondpres', is: 'execute', ledger: 'execute~beyondpres',
    h: 'An order that only carries out a law',
    link: 'A written order from the President can look like {o:beyondpres}: it has the President’s signature, and nobody voted on it. This card shows a case in which an order is exactly the opposite.',
    case: 'e-sixtydays',
    setup: 'The President has signed an {t:order} that nobody voted on, and that is what {o:beyondpres} often looks like. Yet this case is {o:execute}.',
    prompt: { kind: 'phrase', answer: 'The order asks nothing of families. It only tells the office how to run the law' },
    because: [
      'Ask what the order demands, and of whom. It tells a federal office to answer applications within sixty days and to publish how many it has approved. It does not tell families, companies or anyone else outside the government to do anything. The only people it commands are the office’s own staff.',
      'A law is behind it, too: the one Congress passed that lets families apply for a grant. The order adds nothing to what that law gives or demands. It tells the office how to run it.',
      'You met this when you met the word: an {t:order} may tell the offices how to do their work. What it may not do is demand something new of people outside, with no law behind it. You met what to point to for {o:execute}: {needs:execute}. This case has all of it: a law Congress passed, and the President putting it into practice without going past it.'
    ],
    take: 'In the news both kinds will be called an {t:order}. The word does not settle the name. What the order demands, and of whom, does.' },

  { id: 'exc-fee', kind: 'exception', looksLike: 'execute', is: 'beyondpres', ledger: 'execute~beyondpres',
    h: 'A rule that only looks like carrying out a law',
    link: 'The last card showed an order that looks like {o:beyondpres} and is not. This card shows the reverse: a rule that looks like {o:execute} and is not.',
    case: 'e-campfee',
    setup: 'Congress passed a law, a federal office is acting on it, and the case is about a fee. A law Congress passed with an office putting it into practice is what you point to for {o:execute}. Yet this case is {o:beyondpres}.',
    prompt: { kind: 'phrase', answer: 'The law sets the price at $15 and gives the agency no power to change it' },
    because: [
      'Read what the office does with the law. The law set the price of a camping permit at $15 a night, and the office now says $40. That does not fill in how the law is followed. It is a new, higher fee, and the law gives the office no power to change the price.',
      'An office may go only as far as the law behind it allows. The law Congress passed stays in the story, but only as the line the office has crossed. Past that line no law stands behind the fee, and a new fee that no law allows is what you point to for {o:beyondpres}.',
      'So when a case has both a law and an office, do not stop at the law. Check whether what the office demands is inside it.'
    ] }
]);
