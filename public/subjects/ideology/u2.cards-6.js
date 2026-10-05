// Political Ideologies, Unit Two, part three (second half): workers who own the businesses and keep a market, the pair that sets it
// beside the name before it, and the exception that sets it beside a plain handover.

FC.cards('ideology', 'u2', [

  /* ---------- Market socialism ---------- */
  { id: 'meet-mktsoc', kind: 'meet', outcome: 'mktsoc',
    link: 'The last name had the workers run their businesses with no government. The next also gives each business to the people who work in it, and keeps something the last name had no place for: customers who choose.',
    case: 'c-mk-furniture', mark: 'C1',
    strip: [
      'There are two groups in the text: the firm’s shareholders, who keep the profit, and the furniture makers, who make the chairs. The text is on the makers’ side.',
      'It says each furniture firm should belong to the people who make its furniture.',
      'It says the firms should compete for customers, set their own prices, and go under if they fail.',
      'It says the owners should be out of the workshop, and not out of the market.'
    ],
    explain: [
      'Here the workers own the businesses, as in the last name. What is new is what the text keeps. It does not do away with competition, prices or failure. It keeps a market: firms selling to customers, charging what they choose, and closing if they cannot pay their way. What it changes is who owns each firm.',
      'People who argue for this say that markets are good at telling firms what to make and at making them careful with money, and that what is wrong with markets is that outside owners gain from other people’s work. So keep the market and change the owner. People who disagree say that firms that must compete will treat their own workers as hard as any owner would, or that a market does not work without outside owners. Both are argued over, and the key does not take a side.',
      'Notice the competing. A text that gives each business to its workers and says nothing about competing is a different answer to the key’s question. The key needs both things here: workers who own, and firms that compete and can fail.'
    ],
    feature: { step: 'C1', option: 'market' },
    name: 'The name for this is {o:mktsoc}. "Market" is the word for firms selling to customers who choose, and "socialism" here points at the other half: the owners are the people who work in each firm, and not outsiders. These are the two things the key looks for.' },

  { id: 'again-mktsoc', kind: 'again', outcome: 'mktsoc',
    link: 'The furniture makers gave you what to point to from one case: {needs:mktsoc}. Here is a second case with a different story. This time the work is picking and growing, and the words come from a workers’ association.',
    first: 'c-mk-furniture', second: 'c-mk-farms', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (chairs, farms). Look at one thing only: who should own each business, and what the businesses should do with each other.',
    prompt: { kind: 'phrase', answer: 'The farms should sell what they grow in the open market, set their own prices, and take the loss when a harvest sells badly' },
    shared: [
      'Both texts give each business to the people who work in it, and both keep a market. The furniture firms compete for customers, set their prices and can go under. The farms sell in the open market, set their prices and take the loss when a harvest sells badly.',
      'The two stories share nothing else. So this holds wherever a text gives each business to its workers and keeps the businesses competing and able to fail. That is what {o:mktsoc} names.'
    ] },

  { id: 'portrait-mktsoc', kind: 'portrait', outcome: 'mktsoc',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:mktsoc} in real life.',
    typical: [
      'Each business is to belong to the people who work in it, and the text says so firm by firm.',
      'Competition is kept on purpose. Customers choose, each firm sets its own prices, and a firm that cannot pay its way closes.',
      'Failure is allowed. A text that promises every firm owned by its workers will be saved is saying something else.',
      'The owners who are taken out are the outside ones: shareholders, landowners, chains. The text may say nothing about the government.'
    ],
    not: 'Workers owning a business is not enough. If the text says nothing about competing, or says the businesses should be run together with no government, the answer is different. What you point to is the two things together: each business owned by its workers, and the businesses competing for customers and able to fail.',
    wild: ['"Own your workplace, and win your customers."', '"A firm owned by its staff, with a market, not a boss with a market."', '"Workers’ firms, free prices, and no rescue for a firm that fails."'],
    self: 'In your own life it is the worker-owned shop or co-operative that sells to the public and has to make its sales, and the argument over whether a firm owned by its staff can survive against one owned by shareholders.',
    ask: '"Does the text give each business to the people who work in it, and keep the businesses competing and able to fail?" If it gives them to the workers and says nothing about competing, look again at the other answers.' },

  { id: 'check-mktsoc', kind: 'check', after: 'mktsoc',
    case: 'c-mk-bikes',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none', 'public', 'market'] } },

  /* ---------- The pair that both give the business to its workers ---------- */
  { id: 'look-anarch-mktsoc', kind: 'lookalike', ledger: 'anarch~mktsoc',
    link: 'These two both give the business to the people who work in it. They part on what the text says about competing, and about the government.',
    cases: ['c-lk-anmk-an', 'c-lk-anmk-mk'],
    instruction: 'Both cases are about the Quill bindery, and both say it should belong to the people who work in it. Compare one thing: whether the text says the bindery should compete with other binderies for customers.',
    prompt: { kind: 'which', option: 'C1.market', answer: 'c-lk-anmk-mk' },
    difference: [
      'In Case A the text says nothing about competing. It wants no government telling it what to do or who to sell to, and it will run the bindery and the district together, in meetings. The key’s answer about the government is {a:C2.gone}, and the case is {o:anarch}.',
      'In Case B the text says the bindery should compete with other binderies for customers, set its own prices, and close if it fails. The key’s answer is {a:C1.market}, and the case is {o:mktsoc}.',
      'Both give the bindery to the people who work in it. What separates them is not who owns it. It is what the text keeps around it: a market, or no government.'
    ] },

  { id: 'exc-glassworks', kind: 'exception', looksLike: 'demsoc', is: 'mktsoc', ledger: 'demsoc~mktsoc',
    h: 'Handed to its workers by a vote, and still competing',
    link: 'A text that gives each business to its workers by a vote looks like {o:demsoc}. Here is one that is not.',
    case: 'c-ex-glassworks',
    setup: 'This text asks the voters for a law that hands each glassworks to the people who work in it. That is a handover by a vote, which is what you point to for {o:demsoc}. Yet this case is {o:mktsoc}.',
    prompt: { kind: 'phrase', answer: 'Those glassworks will still compete with each other for customers, set their own prices, and fail if they cannot pay their way' },
    because: [
      'The text also says the glassworks will still compete for customers, set their own prices and fail if they cannot pay their way. That is what the key’s answer {a:C1.market} asks for, and it asks for more than the handover alone. When a text shows both the handover to the workers and the competing, the competing decides, and the case is {o:mktsoc}.',
      'The reason is that the handover alone says nothing about competing. A text that gives the businesses to their workers and is silent on competing leaves open whether they compete. This text closes it, and the key goes by the more exact answer.'
    ],
    take: 'This is the key’s decision, and it has a reason you can state: the more exact thing a text says about the businesses wins. Some people who study these texts would call every worker-owned firm the same thing whether or not it competes. The key does not, so that two people using it reach the same name.' }
]);
