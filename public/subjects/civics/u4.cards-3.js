// Civics, Unit Four, part two (first half): orders to the armed forces.

FC.cards('civics', 'u4', [

  /* ---------- Orders to the armed forces ---------- */
  { id: 'meet-commander', kind: 'meet', outcome: 'commander',
    link: 'The first two were about a law. The next four are things the President does with no law behind them. The first is an order to the army, the navy or the air force.',
    case: 'e-flood', mark: 'E1',
    explain: [
      'The President is the head of the armed forces. One order sent twelve helicopters and two thousand soldiers to the flooded towns within the hour, with no vote and no law needed first. The President decides where the forces go and what they do, and picks who leads them.',
      'There is one limit, and stories about armies are often about it. Only Congress can declare war, and Congress votes the money that pays for the forces. So when you hear that the President “declared war”, check whose decision the story ends on.'
    ],
    spot: [
      { do: 'Find the order the President gives: send twelve helicopters and two thousand soldiers to the towns.', why: 'An order is an instruction that must be obeyed, not a request.' },
      { do: 'Find who receives it: the army.', why: 'The name fits only when the order goes to the armed forces.' },
      { do: 'Check nobody else has to agree first: the helicopters left within the hour.', why: 'No vote and no law has to come before the order.' }
    ],
    feature: { step: 'E1', option: 'military' },
    name: 'This is {o:commander}. The President gives the armed forces their orders, and they obey.' },

  { id: 'check-commander', kind: 'check', after: 'commander',
    case: 'e-airlift',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty', 'military'] } }
]);
