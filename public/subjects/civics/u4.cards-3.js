// Civics, Unit Four, part one (end) and part two (first half): the two look-alike pairs that join this unit to the part
// of the key for Congress, then orders to the armed forces.
// A look-alike pair that spans two parts of the key is separated by the key's first question. Its cards print the
// answers of both questions by token, so no name from Unit Three is used before this unit has a reason to use it.

FC.cards('civics', 'u4', [

  /* ---------- Look-alikes with the part of the key for Congress ---------- */
  { id: 'look-enumerated-execute', kind: 'lookalike', ledger: 'enumerated~execute',
    link: 'A law can appear in two cases that end in different places. Two names, one from the questions for Congress and one from this unit, are the pair you are most likely to mix up in the news. This card puts them side by side.',
    cases: ['e-tea-vote', 'e-tea-form'],
    instruction: 'Both cases are about the same tax on imported tea. Compare one thing: whose decision does each story end on, the lawmakers who vote, or the office that collects?',
    prompt: { kind: 'which', option: 'D1.president', answer: 'e-tea-form' },
    difference: [
      'In Case A the story is about the law itself: the Senate votes to pass it, as the House had done. Nobody else decides anything. The first answer is {a:D1.congress}, and its answer to the next question is {a:C1.listed}, so the case is {o:enumerated}.',
      'In Case B the law is already passed, and the story is about what comes after it: an office publishes the form that importers must fill in to pay the tax. The law is still in the story, as how the matter got there. The last decision is the office’s. The first answer is {a:D1.president}, and its answer to the next question is {a:E1.carryout}, so the case is {o:execute}.',
      'One tax gives you both, as the food-label law did in Unit One. The question does not weigh the two. It asks for the last decision, or the one the case asks for.'
    ] },

  { id: 'look-beyondcong-beyondpres', kind: 'lookalike', ledger: 'beyondcong~beyondpres',
    link: 'Two of the names have "beyond" in them, and both are about someone doing what they had no power to do. They belong to the questions for different kinds of case, so they are easy to run together. This card puts them side by side.',
    cases: ['e-barber-law', 'e-barber-order'],
    instruction: 'Both cases are about the hours barbers may open their shops, and in both the President signs something on Monday. Compare one thing: who made the rule, lawmakers who voted on a law, or the President by an order?',
    prompt: { kind: 'which', option: 'D1.president', answer: 'e-barber-order' },
    difference: [
      'In Case A the House and the Senate both passed a law, and the President signed it. A signature on a law that lawmakers passed leaves the decision with them, as Unit One showed. The first answer is {a:D1.congress}. Its answer to the next question is {a:C1.barred}, because the hours barbers work are not among the Constitution’s powers for Congress, so the case is {o:beyondcong}.',
      'In Case B nobody voted. The President signed an order about the barbers’ hours, and the case says no law Congress passed gives the President that power. The first answer is {a:D1.president}, and its answer to the next question is {a:E1.newduty}, so the case is {o:beyondpres}.',
      'In both cases a rule about barbers’ hours is out of reach of the one who made it, and the story is the same. What differs is who made the rule: lawmakers, or the President by an order. That is the question asked first.'
    ] },

  /* ---------- Orders to the armed forces ---------- */
  { id: 'meet-commander', kind: 'meet', outcome: 'commander',
    link: 'The first two names were about a law, and whether one stands behind a rule. The next four are things the President does that need no law behind them. The first is an order to the army, the navy or the air force.',
    case: 'e-flood', mark: 'E1',
    strip: [
      'A flood has cut three towns off. Nobody in the case is asked to vote on anything.',
      'The President gives an order: send helicopters and two thousand soldiers to carry in food and clear the roads.',
      'The order goes to the army, which is part of the armed forces, and it is carried out within the hour.',
      'No law is named, no company is told to do anything, and nobody outside the forces is commanded.'
    ],
    explain: [
      'The President is the head of the armed forces: the army, the navy, the air force and the others. That is why a single order from the President can send soldiers and helicopters at once, with no vote beforehand. The President decides where the forces go and what they do, and picks who leads them.',
      'Notice what is different from the first two names. An office carrying out a law is working from a law Congress passed. The President ordering the army does not need to name a law. The armed forces answer to the President, and the order is the whole decision.',
      'There is a limit, and it is worth knowing now, because stories about armies are often about it. Only Congress can declare war, and Congress votes the money that pays for the forces. So the President commands the forces, and does not start a war or pay for one. This case involves neither: it is an order about where to send help.'
    ],
    feature: { step: 'E1', option: 'military' },
    name: 'The name for this is {o:commander}. A "commander" is someone who gives orders, and "in chief" means the highest: the President is the highest commander of the armed forces.' },

  { id: 'again-commander', kind: 'again', outcome: 'commander',
    link: 'The flood relief gave you what to point to: {needs:commander}. Here is a second case with a different story, set at sea.',
    first: 'e-flood', second: 'e-carrier', step: 'E1',
    instruction: 'Find what the two cases share. Ignore the story (a flood, a fuel ship) and the place. Look at one thing only: who gives an order, and who must obey it.',
    prompt: { kind: 'phrase', answer: 'the President ordered the navy to send it north instead' },
    shared: [
      'In both cases the President gives an order, and the order goes to part of the armed forces: the army in one case, the navy in the other. In both, the order sends the forces somewhere and says what they are to do there. And in both the forces simply obey. No law is named, no vote is held, and nobody outside the forces is commanded.',
      'The two stories share nothing else. One is about a flood and the other about a fuel spill. So this is not about disasters or about the sea. It holds wherever the President sends the armed forces somewhere, or tells them what to do. That is what {o:commander} names.'
    ] },

  { id: 'portrait-commander', kind: 'portrait', outcome: 'commander',
    link: 'What you point to is an order from the President to the armed forces. Here is the rest of the picture.',
    typical: [
      'The order comes from the President and goes to the armed forces. The words you hear are "ordered troops to", "sent the navy", "deployed", "the army was told to".',
      'It can be an order to go somewhere, to do something once there, to stop, or to come home. It can also be a choice of who will lead a part of the forces.',
      'No law is needed to give the order, and the case need not name one. What the President decides here is not the daily work of a law. It is the President’s own power to command.',
      'The orders can reach another country: ships sent to a port, soldiers sent on an exercise with an ally. Another country’s leader may even be in the story. What the President does is still to give an order to the forces.',
      'The limits are about war and money, and not about the order itself. Only Congress can declare war, and Congress votes the money for the forces. So a story in which a President declares a war is not a story about commanding the forces. Only Congress can declare one.'
    ],
    not: 'Soldiers in a story do not make it this name by themselves. If the case ends on the President telling them what to do, it is {o:commander}. If it ends on something else, such as a law, a vote or a judge, it is another name.',
    wild: ['"The commander in chief ordered..."', '"Troops were deployed."', '"The Pentagon said..."', '"The navy was told to sail."', '"The President sent the army."'],
    self: 'You meet it when the news shows soldiers and helicopters arriving after a disaster, or ships sent to a port, and the story says that the President ordered it.',
    ask: '"Who gave the order, and who must obey it?" If the President gave it and the armed forces must obey, the case is {o:commander}.' },

  { id: 'check-commander', kind: 'check', after: 'commander',
    case: 'e-airlift',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty', 'military'] } },

  { id: 'refute-war', kind: 'refute', about: 'commander',
    h: 'A wrong idea: "the President can declare war"',
    link: 'The picture of {o:commander} said that an order to the forces is one thing, and that war is another. That rests on an idea that is easy to pick up, and it needs putting right here.',
    idea: '"The President is in charge of the army, so the President can declare war."',
    verdict: 'This is wrong.',
    right: [
      'The President gives the armed forces their orders. That is what {o:commander} names. But declaring war is not an order to the forces. It belongs to Congress, and Congress also votes the money that pays for the forces.',
      'So a story in which the President sends the army or the navy somewhere is about {o:commander}. A story in which lawmakers vote to declare a war is about the lawmakers, and the first answer is {a:D1.congress}. When you hear that the President "declared war", check whose decision the story ends on.'
    ],
    testedBy: ['e-claim-war'] }
]);
