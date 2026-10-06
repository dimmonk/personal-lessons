// Civics, Unit Four, part two (second half): dealing with another country, and the card that sets it beside orders to
// the forces.

FC.cards('civics', 'u4', [

  /* ---------- Dealing with another country ---------- */
  { id: 'meet-diplomacy', kind: 'meet', outcome: 'diplomacy',
    link: 'The second of the President’s own powers is not about the armed forces at all. It is about speaking for the country to another country.',
    case: 'e-coasttalks', mark: 'E1',
    strip: [
      'The President traveled to another country and met its leader.',
      'They talked for two days about fishing along a shared coast, reached an agreement and signed a paper that says so.',
      'No law is named, nobody at home is ordered anywhere, and nobody outside the two governments is asked to do anything.'
    ],
    explain: [
      'The President speaks for the country when it deals with other countries: receives other countries’ leaders, chooses the country’s ambassadors and negotiates agreements. A country needs one voice at the table, or the other side cannot know who has agreed to what.',
      'The President does not have to do it in person. Someone sent to speak for the President, such as the Secretary of State, deals with the other country in the same way. And a {t:treaty} does not bind the country until two-thirds of the senators present vote to approve it. That vote is a different decision, by different people. This case stops before it.'
    ],
    feature: { step: 'E1', option: 'abroad' },
    name: 'The name for this is {o:diplomacy}. "Foreign" means belonging to another country, and "affairs" means the things a government has to see to. So the name means the business of dealing with other countries.' },

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
      'In Case B the President goes to Istrene and spends two days with its leader, and the two of them sign an agreement about each country’s ships using the other’s ports. The ships are in the story, but nobody orders them anywhere. The answer is {a:E1.abroad}, and the case is {o:diplomacy}.',
      'Ships, ports and another country appear in both. What differs is what the President does: tell the forces what to do, or settle something with another country.'
    ] }
]);
