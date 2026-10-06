// Civics, Unit Four, part two (first half): orders to the armed forces.

FC.cards('civics', 'u4', [

  /* ---------- Orders to the armed forces ---------- */
  { id: 'meet-commander', kind: 'meet', outcome: 'commander',
    link: 'The first two names were about a law, and whether one stands behind a rule. The next four are things the President does that need no law behind them. The first is an order to the army, the navy or the air force.',
    case: 'e-flood', mark: 'E1',
    strip: [
      'A flood has cut three towns off.',
      'The President gives an order: send helicopters and two thousand soldiers to carry in food and clear the roads. The army carries it out within the hour.',
      'No law is named, no company is told to do anything, and nobody votes.'
    ],
    explain: [
      'The President is the head of the armed forces: the army, the navy, the air force and the others. One order from the President can send soldiers and helicopters at once, with no vote beforehand. The President decides where the forces go and what they do, and picks who leads them. Unlike an office carrying out a law, the President needs no law behind the order.',
      'There is one limit, and stories about armies are often about it. Only Congress can declare war, and Congress votes the money that pays for the forces. So the President commands the forces, and does not start a war or pay for one. When you hear that the President "declared war", check whose decision the story ends on.'
    ],
    feature: { step: 'E1', option: 'military' },
    name: 'The name for this is {o:commander}. A "commander" is someone who gives orders, and "in chief" means the highest: the President is the highest commander of the armed forces.' },

  { id: 'check-commander', kind: 'check', after: 'commander',
    case: 'e-airlift',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty', 'military'] } }
]);
