// Civics, Unit Four, part two (second half): dealing with another country, and the four look-alike cards that set it
// beside orders to the forces, a law put into practice, and the Senate's vote on an agreement.

FC.cards('civics', 'u4', [

  /* ---------- Dealing with another country ---------- */
  { id: 'meet-diplomacy', kind: 'meet', outcome: 'diplomacy',
    link: 'The second of the President’s own powers is not about the armed forces at all. It is about speaking for the country to another country.',
    case: 'e-coasttalks', mark: 'E1',
    strip: [
      'The President traveled to another country and met its leader.',
      'They talked for two days about a matter both countries care about: fishing along a shared coast.',
      'They reached an agreement and signed a paper that says so.',
      'No law is named, nobody at home is ordered anywhere, and nobody outside the two governments is asked to do anything.'
    ],
    explain: [
      'The President speaks for the country when it deals with other countries. The President receives other countries’ leaders, chooses the country’s ambassadors and negotiates agreements. A country needs one voice at the table, or the other side cannot know who has agreed to what. In this case the President is that voice.',
      'The President does not have to do it in person. Someone sent to speak for the President, such as the Secretary of State, deals with the other country in the same way. The Secretary of State leads the part of the government that handles relations with other countries, and the case still ends on the President’s side.',
      'Notice where the case stops. The President has talked and signed. A {t:treaty} does not bind the country until two-thirds of the senators present vote to approve it. That vote is a different decision, by different people, and it would be a different case. This case stops before any vote.'
    ],
    feature: { step: 'E1', option: 'abroad' },
    name: 'The name for this is {o:diplomacy}. "Foreign" means belonging to another country, and "affairs" means the things a government has to see to. So the name means the business of dealing with other countries.' },

  { id: 'again-diplomacy', kind: 'again', outcome: 'diplomacy',
    link: 'The coast talks gave you what to point to: {needs:diplomacy}. Here is a second case in which the President is not at the table in person.',
    first: 'e-coasttalks', second: 'e-exchange', step: 'E1',
    instruction: 'Find what the two cases share. Ignore the story (fishing, students) and the countries. Look at one thing only: who sits down with the other country’s government, and for whom?',
    prompt: { kind: 'phrase', answer: 'The Secretary of State, speaking for the President, spent a week there agreeing with its government' },
    shared: [
      'In the first case the President sits down with another country’s leader in person. In the second the Secretary of State does it, speaking for the President. In both, someone from the government of the United States sits down with another government, talks, and agrees how something will work between the two countries. Neither case orders anybody at home to do anything.',
      'The two stories share nothing else. So this is not about fishing or about students. It holds wherever the President, or someone speaking for the President, meets, negotiates or signs with another country’s government. That is what {o:diplomacy} names.'
    ] },

  { id: 'portrait-diplomacy', kind: 'portrait', outcome: 'diplomacy',
    link: 'What you point to is the President, or someone speaking for the President, talking with another country’s government. Here is the rest of the picture.',
    typical: [
      'The words you hear are "met", "talks", "a summit", "negotiated", "signed an agreement", "the Secretary of State said". It can happen at home or abroad, in person or through someone sent to speak for the President.',
      'It can be as small as a talk, or end in a signed paper. The President can make some agreements with another country alone. These are called executive agreements: they need no vote of the Senate, though they bind less, and the next President can change them. A {t:treaty} must also be approved by two-thirds of the senators present before it binds the country.',
      'The President also chooses the country’s ambassadors, and the Senate must approve them. The choosing is the President’s side. The vote is the Senate’s.',
      'Nothing in it commands anyone at home. The talks are between governments, and nobody outside them is asked to do anything because of them.'
    ],
    not: 'A meeting in which soldiers or ships are mentioned is not for that reason about the armed forces. If the case ends on talks or a signature with another country, it is {o:diplomacy}. If it ends on an order to the forces, it is {o:commander}.',
    wild: ['"The President met..."', '"A summit."', '"Talks ended with a signed agreement."', '"Awaiting ratification."', '"The Secretary of State said..."'],
    self: 'You meet it in the news whenever the President travels, hosts another country’s leader, or announces a deal with another country: trade, students, borders, ships.',
    ask: '"Who is sitting across the table, and are they dealing as one country with another?" If the President, or someone speaking for the President, is, the case is {o:diplomacy}.' },

  { id: 'check-diplomacy', kind: 'check', after: 'diplomacy',
    case: 'e-tourships',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty', 'military', 'abroad'] } },

  /* ---------- Ships and a port: an order, and talks ---------- */
  { id: 'look-commander-diplomacy', kind: 'lookalike', ledger: 'commander~diplomacy',
    link: 'These two are easy to mix up, because both can be about ships, soldiers and another country. This card puts them side by side.',
    cases: ['e-ships-sent', 'e-ships-agree'],
    instruction: 'Both cases are about navy ships and the port of Istrene. Compare one thing: does the President tell the navy what to do, or settle something with Istrene’s leader?',
    prompt: { kind: 'which', option: 'E1.abroad', answer: 'e-ships-agree' },
    difference: [
      'In Case A the President orders the navy to send three ships to the port, and to keep them there for a month. The ships obey, and nobody from Istrene is asked anything. The answer is {a:E1.military}, and the case is {o:commander}.',
      'In Case B the President goes to Istrene and spends two days with its leader, and the two of them sign an agreement about each country’s ships using the other’s ports. The ships are in the story, but nobody orders them anywhere. The two countries settle how the ports may be used. The answer is {a:E1.abroad}, and the case is {o:diplomacy}.',
      'Ships, ports and another country appear in both. What differs is what the President does: tell the forces what to do, or settle something with another country.'
    ] },

  { id: 'exc-exercise', kind: 'exception', looksLike: 'diplomacy', is: 'commander', ledger: 'commander~diplomacy',
    h: 'Another country in the story, and an order in the case',
    link: 'Another country can be in a case without the case being about dealing with it. This one has an allied country asking for something, and its leader saying thank you.',
    case: 'e-exercise',
    setup: 'Another country, its request and its leader are all in the story, and that is what a case about {o:diplomacy} looks like. Yet this case is {o:commander}.',
    prompt: { kind: 'phrase', answer: 'the President ordered a ship carrying two hundred soldiers to leave for a six-week training exercise with the allied navy' },
    because: [
      'Look at what the President does. The ally asked for something, and its leader thanked the President afterwards, but nothing is negotiated or signed with the ally. What the President decides is an order: a ship with soldiers on it is to leave for a six-week exercise.',
      'The ally’s part of the story is how the matter got there, and what happened afterwards. The decision in the middle of it is an order to the armed forces, and the question is what the President does.',
      'Put the question printed below, the one from the ships and the port of Istrene, to this case. The President tells the forces what to do, and nobody is met or negotiated with.'
    ] },

  /* ---------- Visitors from another country: dealt with as a country, and one at a time ---------- */
  { id: 'look-diplomacy-execute', kind: 'lookalike', ledger: 'diplomacy~execute',
    link: 'Federal officials deal with people from other countries in two quite different ways, and both fill the news. This card puts them side by side.',
    cases: ['e-visas-talks', 'e-visas-desk'],
    instruction: 'Both cases are about visitors from Calvera who may stay ninety days. Compare one thing: is a federal official dealing with Calvera as a country, or dealing with one visitor under a law?',
    prompt: { kind: 'which', option: 'E1.carryout', answer: 'e-visas-desk' },
    difference: [
      'In Case A the Secretary of State, speaking for the President, meets Calvera’s foreign minister, and the two countries agree and sign how long visitors may stay. Two governments are settling something between them. The answer is {a:E1.abroad}, and the case is {o:diplomacy}.',
      'In Case B a clerk checks one visitor’s papers against a list in a law Congress passed, and stamps the passport. The visitor comes from Calvera, but the clerk is not dealing with Calvera. The clerk is putting a law into daily practice for one person. The answer is {a:E1.carryout}, and the case is {o:execute}.',
      'Both cases have the same ninety days, and people from Calvera. What differs is who the official is dealing with: a government, as one country with another, or one person under a law.'
    ] },

  /* ---------- An agreement with another country: the President's side and the Senate's ---------- */
  { id: 'look-confirm-diplomacy', kind: 'lookalike', ledger: 'confirm~diplomacy',
    link: 'A written agreement with another country passes through two sets of hands: the President negotiates and signs it, and the Senate votes on it. One case can be about either, and they are easy to mix up. This card puts them side by side.',
    cases: ['e-trade-signed', 'e-trade-senate'],
    instruction: 'Both cases are about the same trade agreement with Tormark. Compare one thing: does the case end with the President making the agreement, or with senators voting on it?',
    prompt: { kind: 'which', option: 'D1.president', answer: 'e-trade-signed' },
    difference: [
      'In Case A the President flies to Tormark, negotiates, and the two leaders sign. Nobody votes. The first answer is {a:D1.president}, and its answer to the next question is {a:E1.abroad}, so the case is {o:diplomacy}.',
      'In Case B the agreement is already signed, and the story is about what comes after: it does not take effect until the Senate votes, and the vote is next month. The signing is how the matter got there. The case ends by asking the Senate for a decision. The first answer is {a:D1.congress}, and its answer to the next question is {a:C1.approve}.',
      'It is one agreement at two moments, as in Unit One: first negotiated and signed, then voted on. The case is the moment it ends on.'
    ] }
]);
