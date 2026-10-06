// Wealth Preservation, Unit Four, part one (second half): the rest of the first name, a wrong idea about it, and the second name (the
// answer in which a fall would catch nothing). Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'portrait-cashbuffer', kind: 'portrait', outcome: 'cashbuffer',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:cashbuffer} in real life, where nobody marks the words for you.',
    typical: [
      'There is money in shares or funds, and a person who lives on it: a retirement, a break from work after an illness, the sale of a business, a long gap between jobs.',
      'The money for the bills comes from selling, month by month or year by year. The case may say "I sell some each month", or "I take it out of the fund".',
      'No cash is set aside. If the case mentions a checking account, it holds this month’s bills and no more.',
      'It does not need a fall to have happened. A case can say only that prices could fall. What makes the case is that, if they did, every bill would be paid by selling cheaply.',
      'It is about how the money is arranged, not about where prices go next. Nobody in the case needs to know, or to guess, what the market will do.',
      'The harm is greatest at the start. A fall in the first years after the bills begin takes a bigger part of what the person has than the same fall years later, which is what {t:sequence} showed.'
    ],
    not: [
      'A fall in prices, on its own, is not this name. A person who sells nothing is not hurt by one. If nobody in the case is paying for living by selling investments, and nothing else in it is something a fall would catch, the case does not belong here.',
      'Nor is every sale of investments. What makes the case is that the bills depend on the sales, and that nothing stands between the bills and a bad day. A person who sells a little each year while the bills are paid from pay is not paying for living by selling.',
      'It is also not a verdict that the person did something wrong. The case describes what would happen if prices fell, and it is the same description whether the person is careful or careless in every other way.'
    ],
    wild: ['"I just sell a bit each month."', '"It’s all in the market, and I need $2,000 a month out of it."', '"I don’t have any cash set aside."', '"Every month I sell enough units to cover the bills."', '"If I have to sell at the bottom, I have to sell."'],
    self: 'In your own life it is the question "where does next month’s money come from?", asked of any account you live on. If the answer is "I sell some", ask what in the account does not have to be sold.',
    ask: '"If prices fell by a third this year, where would next year’s bills come from?" If the answer is "I would sell some of what has fallen", you are probably looking at this name.',
    act: [
      'Work out one year of spending from your bank statements, not from memory: everything that has to be paid in twelve months, the irregular bills included.',
      'Decide how many years of it to hold in cash. Three is the example in this unit. A small number covers a short fall and costs little. A larger number covers a longer fall and costs more in growth given up.',
      'Put that cash in a savings account at an FDIC-insured bank, where you can reach it, apart from the investments, so that it is not part of the money you sell from.',
      'Write down the rule for using it. In a year when prices are down, pay the bills from the cash and sell nothing. In a year when prices are up, sell enough of the investments to fill the cash up again.',
      'Count the cost in dollars before you decide, as the cases in this unit do: what the cash gives up in growth, set against what selling in a fall could cost. It needs no special product. An ordinary savings account does the job.'
    ] },

  { id: 'check-cashbuffer', kind: 'check', after: 'cashbuffer',
    case: 'tm-chk-live',
    ask: { type: 'phrase', step: 'T1', say: 'Which words show where the money for the living costs comes from? Tap them.',
           answer: 'Each month he sells $1,500 of the fund to pay his bills' } },

  { id: 'refute-cash', kind: 'refute', about: 'cashbuffer',
    h: 'A wrong idea: "cash earns nothing, so holding years of spending in it is a waste"',
    link: 'You have the first name, and with it the cost of what it recommends. That cost is the reason people most often give for not doing it, so here it is, with numbers.',
    idea: '"Cash earns nothing. Keeping three years of spending in it is just wasted money."',
    verdict: 'This is wrong in two ways: cash does earn something, and the cost is not wasted.',
    right: [
      'Cash earns something, but less than shares are expected to, and the difference is a real cost. Take the $72,000 in Alan’s case. If shares grew 5% a year and a savings account paid 1%, holding $72,000 in cash instead of shares would give up $2,880 a year. That cost is certain, and it is paid whether prices rise or fall.',
      'What the cost buys is a way of not selling on a bad day. Return to Ingrid and Paul. Over four years, the order of the same four changes made a difference of $34,900 to what was left. The cash would cost $2,880 a year, which is $11,520 over the same four years. Whether that is worth paying depends on how likely a fall in the early years is, and nobody can know that. So the cost is not "nothing", and it is not a certain loss either: it is a price paid to be able to wait.',
      'The cost is a little like the premium on car insurance: you pay it every year whether or not you need what it buys. The likeness stops there. An insurance premium is gone for good, whether or not there was an accident. Money in a savings account is still yours, and it is spent on the bills anyway. What is given up is only the extra growth the same money might have earned in shares.',
      'So the reasoning to use is this: {q:T1} When the answer is {a:T1.livingcosts}, the cash is the cost of not selling on a bad day, and the case is {o:cashbuffer}. Count the cost in dollars, set it against what selling in a fall could cost, and then decide. "It earns nothing" is a reason to count, not a reason to stop.'
    ],
    testedBy: ['c-cash'] },

  /* ---------- The second name: a fall that would catch nothing ---------- */
  { id: 'meet-covered', kind: 'meet', outcome: 'covered',
    link: 'Alan was caught by the fall because every bill was paid by selling. The next answer is for a person who lives through the same fall and is not caught.',
    case: 'tm-meet-safe', mark: 'T1',
    strip: [
      'There are two people, Ruth and Gil, and $640,000: $75,000 in a savings account and the rest in funds of shares.',
      'Their living costs, $24,000 a year, are being paid from the savings account.',
      'They have sold none of the funds since prices fell by 30%.',
      'What a fall could do to the funds does not touch what the bills need.'
    ],
    explain: [
      'Set this beside Alan. The fall was the same, 30%, and both are living on their money. The difference is where the bills are paid from. Alan sold funds at the low price every month. Ruth and Gil spent cash and sold nothing, so the fall changed what their funds are worth, and made no difference to what was sold.',
      'Here are their numbers. $75,000 is a little over three years of $24,000, because three years is $72,000 and $3,000 is left over. After this year’s bills the savings account holds $51,000, enough for two more years of bills. Their funds were worth $565,000 before the fall and about $395,500 after it, because 30% of $565,000 is $169,500. That is a loss on paper, and they have not turned it into a real loss by selling.',
      'It is not that a fall can never hurt them. If prices stayed down for more than three years, the cash would run out and they would have to sell. What the cash has done is give prices time. A fall hurts a person on the day they must sell, and for Ruth and Gil that day is a long way off.',
      'This has a name because the right thing to do about a fall that would catch nothing is nothing. A cure bought for a problem the case does not have costs money every year and fixes nothing. The cash in this case is the cure, and it is already in place.',
      'The name is for any case in which what is needed soon is already out of the fall’s reach. Three forms of it come up in this unit: living costs paid from cash, as here; a bill whose money is already in cash, or in bonds that repay it by the day; and a mix that is still inside the limits the person set.'
    ],
    feature: { step: 'T1', option: 'ready' },
    name: [
      'The name for this is {o:covered}. Unlike the first name in this unit, it does not tell you to do something. It tells you that you do not need to, and in this subject that is as much an answer as any other.',
      'Say it plainly when you give it: nothing needs doing, and here is the money that shows it.'
    ] },

  { id: 'again-covered', kind: 'again', outcome: 'covered',
    link: 'The first case gave you what to point to: {needs:covered}. Here is a second case with a different story, in which the thing to be paid is a single bill.',
    first: 'tm-meet-safe', second: 'tm-again-safe', step: 'T1',
    instruction: 'Find what the two cases share. Ignore the story (living costs, a roof) and ignore the size of the sums. Look at one thing only: where the money that will be needed is held, and whether a fall could reach it.',
    prompt: { kind: 'phrase', answer: 'The money for it has sat in a savings account since October' },
    shared: [
      'Both cases show money that will be needed: $24,000 a year in the first, $16,000 on March 1 in the second. Both show a fall in prices, 30% and 20%. And in both the money that will be needed is not in anything that falls. It is in a savings account.',
      'Here are Hamza’s numbers. His roof costs $16,000 and the bill is due on March 1. His fund of shares fell 20% over the winter, and if the $16,000 had been in it, the $16,000 would now be $12,800, which is $3,200 short. It is not in it. The $16,000 is in cash, and it is $16,000 on March 1 whatever the fund did.',
      'The stories share nothing else. So this is not about living costs or about roofs. It holds wherever the money for what is coming is already somewhere a fall cannot reach. That is what {o:covered} names.'
    ] }
]);
