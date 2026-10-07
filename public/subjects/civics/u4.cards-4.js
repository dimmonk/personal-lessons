// Civics, Unit Four, part two (second half): dealing with another country, and the card that sets it beside orders to
// the forces.

FC.cards('civics', 'u4', [

  /* ---------- Dealing with another country ---------- */
  { id: 'meet-diplomacy', kind: 'meet', outcome: 'diplomacy',
    link: 'The next one is not about the armed forces at all. It is about speaking for the country to another country.',
    case: 'e-coasttalks', mark: 'E1',
    explain: [
      'The President flew to a neighboring country, talked with its leader for two days about fishing rules on the shared coast, and signed a paper with the rules they agreed on. A country needs one voice at the table, or the other side cannot know who has agreed to what. That voice is the President’s.',
      'The President does not have to go in person. Someone sent to speak for the President, such as the Secretary of State, does the same job. A {t:treaty} takes effect only when two-thirds of the senators present vote to approve it. That vote is a different decision, by different people, and this story stops before it.'
    ],
    spot: [
      { do: 'Find the other country’s government: the neighboring country’s leader.', why: 'Dealing with another country needs the other country at the table.' },
      { do: 'Find who speaks for our country: the President, who flew there.', why: 'Someone the President sends, such as the Secretary of State, counts too.' },
      { do: 'Find what they do together: talk for two days and sign a paper on fishing rules.', why: 'Meeting, bargaining and signing are the whole job.' }
    ],
    feature: { step: 'E1', option: 'abroad' },
    name: 'This is {o:diplomacy}. The President speaks for the country to another country.' },

  { id: 'check-diplomacy', kind: 'check', after: 'diplomacy',
    case: 'e-tourships',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty', 'military', 'abroad'] } },

  /* ---------- Ships and a port: an order, and talks ---------- */
  { id: 'look-commander-diplomacy', kind: 'lookalike', ledger: 'commander~diplomacy',
    link: 'Both can involve ships, soldiers and another country. The test is what the President does.',
    cases: ['e-ships-sent', 'e-ships-agree'],
    instruction: 'Both stories are about navy ships and the port of Istrene. Compare one thing: does the President tell the navy what to do, or settle something with Istrene’s leader?',
    prompt: { kind: 'which', option: 'E1.abroad', answer: 'e-ships-agree' },
    difference: [
      'In Story A the President orders the navy to send three ships to the port and keep them there for a month. The ships obey, and nobody from Istrene is asked anything. That is {o:commander}.',
      'In Story B the President goes to Istrene and spends two days with its leader, and the two of them sign an agreement about each country’s ships using the other’s ports. The ships are in the story, but nobody orders them anywhere. That is {o:diplomacy}.',
      'Ships and a port appear in both. What differs is what the President does: tell the forces what to do, or settle something with another country.'
    ] }
]);
