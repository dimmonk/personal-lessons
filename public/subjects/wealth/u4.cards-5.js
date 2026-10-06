// Wealth Preservation, Unit Four, part two (second piece): two exceptions in which a mix that has moved sits beside something that comes
// first, and the key's question. Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'exc-living-mix', kind: 'exception', ledger: 'cashbuffer~rebalance', looksLike: 'rebalance', is: 'cashbuffer',
    h: 'A mix that has moved, and living costs paid by selling',
    link: 'In real cases a mix that has moved can sit beside living costs, and one of them has to come first.',
    case: 'tm-exc-livingmix',
    setup: 'Imre’s mix is 71% in shares against a plan of 60%, which is what {o:rebalance} looks like. Yet the answer for this case is {a:T1.livingcosts}.',
    prompt: { kind: 'phrase', answer: 'he pays it by selling units of the shares every month, with no cash set aside' },
    because: [
      'His mix is well above his plan, and that makes a fall bigger. But his bills are paid by selling those shares every month, with no cash set aside. A mix that is simply off hurts once, when prices fall. Selling every month hurts on every first of the month, and money needed soon comes first.',
      'Fixing the living costs also does most of the work on {t:mix}. Two years of spending is $48,000, and taking it from the shares brings them from $355,000 to $307,000, which is 61.4% of $500,000, close to his plan.'
    ],
    take: 'Where nothing is being paid for by selling, and the only thing in the case is {t:mix}, the answer is {a:T1.drifted}.' },

  { id: 'exc-bonus', kind: 'exception', ledger: 'defer~rebalance', looksLike: 'rebalance', is: 'defer',
    h: 'A mix that has moved, and a tax bill that new money would avoid',
    link: 'The last exception comes from the first question. Putting a mix back usually means selling shares that have grown, and a sale can bring a tax bill of its own.',
    case: 'tm-exc-bonus',
    setup: 'Frank’s mix is 70% in shares against a plan of 60%, and the adviser wants to put it back by selling shares. That is what {o:rebalance} looks like. Yet the answer for this case is {a:D1.erosion}, and the next question gives {a:E1.needlesssale}.',
    prompt: { kind: 'phrase', answer: 'Frank has just been paid a $60,000 bonus' },
    because: [
      'Shares are $280,000 of $400,000, which is 70%. Selling $40,000 of them and buying bonds would bring {t:mix} back to 60% and 40%, and it would bring a tax bill of about $1,900 on the gain.',
      'But Frank has a $60,000 bonus that he has not yet decided what to do with. Put into bonds, it makes the total $460,000, with bonds at $180,000 and shares still $280,000, which is 60.9%. That is the plan again, with no sale and no tax.'
    ],
    take: 'When a case shows both, the answer is the tax bill, because it is a cost that does not have to be paid. If the shares were in {t:sheltered}, where a sale raises no tax, or there were no new money to use, the sale would be the fix, and the case would be {o:rebalance}.' },

  { id: 'q-why', kind: 'question', step: 'T1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its four answers in one place, and says why it is asked.',
    decides: 'So two people with the same investments and the same fall in prices can get different answers, and one of them can get the answer in which a fall would catch nothing. What matters is not the fund and not the fall. It is what the money has to do, and where the money for it is held.',
    how: [
      'Find the sentence that says what the money has to pay for, or where {t:mix} stands against its plan, and put your finger on the words. If you are unsure, ask in this order. Is anything being paid for by selling shares or funds, month after month? That is {o:cashbuffer}. Is a bill of a known size due on a known date, with its money in shares or funds? That is {o:ladder}. Is the only thing in the case a mix that has moved? That is {o:rebalance}. If none of these is true, the money for the bills or the bill is already in cash or in bonds that repay in time, or {t:mix} is inside its limits, and nothing needs doing.',
      'Money needed soon comes before {t:mix}, and living costs that keep coming are a different thing from one bill on one day: cash answers the first, one bond the second. A fall can be in the case without being the answer. Prices fell 30% in Ruth and Gil’s case, and the answer was {a:T1.ready}.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-why', kind: 'check', after: 'T1',
    case: 'tm-chk-why',
    ask: { type: 'step', step: 'T1' } }
]);
