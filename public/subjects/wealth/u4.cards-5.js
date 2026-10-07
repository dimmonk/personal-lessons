// Wealth Preservation, Unit Four, part two (second piece): two exceptions in which a mix that has moved sits beside something that comes
// first, and the key's question. Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'exc-living-mix', kind: 'exception', ledger: 'cashbuffer~rebalance', looksLike: 'rebalance', is: 'cashbuffer',
    h: 'A mix that has drifted, and bills paid by selling',
    link: 'A mix that has drifted can show up beside bills paid by selling. One of them has to come first.',
    case: 'tm-exc-livingmix',
    setup: 'Imre’s shares are 71% of his money against a plan of 60%. That looks like {o:rebalance}. Yet the answer for this story is {a:T1.livingcosts}.',
    prompt: { kind: 'phrase', answer: 'he pays it by selling units of the shares every month, with no cash set aside' },
    because: [
      'His shares are well above his plan, and that makes a fall bigger. But he also pays his bills by selling those shares every month, with no cash set aside. A drifted mix hurts once, when prices fall. Selling every month hurts on the first of every month, and money you need soon comes first.',
      'Fixing the bills also does most of the work on {t:mix}. Two years of spending is $48,000, and taking it out of the shares brings them from $355,000 to $307,000, which is 61.4% of $500,000, close to his plan.'
    ],
    take: 'When nothing is being sold to pay for anything, and the only thing in the story is {t:mix}, the answer is {a:T1.drifted}.' },

  { id: 'exc-bonus', kind: 'exception', ledger: 'defer~rebalance', looksLike: 'rebalance', is: 'defer',
    h: 'A mix that has drifted, and a tax bill that new money would avoid',
    link: 'This one comes from the first question. Putting a mix back usually means selling shares that have grown, and a sale can bring a tax bill of its own.',
    case: 'tm-exc-bonus',
    setup: 'Frank’s shares are 70% of his money against a plan of 60%, and his adviser wants to put it right by selling shares. That looks like {o:rebalance}. Yet the first question gives {a:D1.erosion}, and the one after it gives {a:E1.needlesssale}.',
    prompt: { kind: 'phrase', answer: 'Frank has just been paid a $60,000 bonus' },
    because: [
      'Shares are $280,000 of $400,000, which is 70%. Selling $40,000 of them and buying bonds would bring {t:mix} back to 60% and 40%, and it would bring a tax bill of about $1,900 on the gain.',
      'But Frank has a $60,000 bonus he has not decided what to do with. Put into bonds, it makes the total $460,000, with bonds at $180,000 and shares still $280,000, which is 60.9%. That is the plan again, with no sale and no tax.'
    ],
    take: 'When a story shows both, the answer is the tax bill, because it is a cost you do not have to pay. If the shares were in {t:sheltered}, where a sale raises no tax, or there were no new money, the sale would be the fix, and the story would be {o:rebalance}.' },

  { id: 'q-why', kind: 'question', step: 'T1',
    h: 'The question you have been answering all along',
    link: 'Here is the question and its four answers in one place.',
    decides: 'Two people with the same investments and the same fall can get different answers, and one of them may be told there is nothing to fix. The fall does not decide it, and neither does the fund. What decides it is what the money has to pay for, and where that money is held.',
    how: [
      { do: 'Do not answer from the fall alone: prices fell 30% in Ruth and Gil’s story, and nothing needed doing.', why: 'Falls come to everyone, so what a fall would catch is what counts.' },
      { do: 'First ask: is anything paid for by selling shares or funds, month after month? That is {o:cashbuffer}.', why: 'Money you need soon comes before everything else.' },
      { do: 'Next ask: is a bill of a known size due on a known date, with its money in shares or funds? That is {o:ladder}.', why: 'Living costs that keep coming are a different thing from one bill on one day.' },
      { do: 'Next ask: is the only thing in the story a mix that has moved? That is {o:rebalance}.', why: 'It is what is left when nothing is needed soon.' },
      { do: 'None of these? Then the bills’ money is already in cash or in bonds that repay in time, or {t:mix} is inside its limits. That is {o:covered}.', why: 'A fall would force no sale, so nothing needs doing.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Sometimes a story shows two at once, such as a drifted mix beside bills paid by selling. Use the order above. The test for each pair is below.' },

  { id: 'check-why', kind: 'check', after: 'T1',
    case: 'tm-chk-why',
    ask: { type: 'step', step: 'T1' } }
]);
