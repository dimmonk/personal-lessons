// Wealth Preservation, Unit Four: drill cases, stage two (one key question at a time, on a new case), the reverse items (one for each
// name), and the faulty claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names sounds like (voice), so no
// choice is a false statement. A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways.
// ask.type 'missing': "what would you need to see before this name could be used?" (the choices are the key's "what you must be able
// to point to" lines). ask.type 'option': the key's question is asked of the claim itself. The fault is shown after the learner commits,
// and the claim put right is always the last thing shown.

FC.cases('wealth', 'u4', [

  /* ---------- Stage two: the key's question alone, on a new case ---------- */
  { id: 'p-cb1', use: 'drill', tier: 'clean', setting: 'home', topic: 'a job loss and monthly sales',
    text: "Rashid, 58, lost his job six months ago and is living on his £200,000 in funds of shares. He pays his £1,600 monthly costs by selling £1,600 of the funds each month, and has no cash put by.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { T1: 'He pays his £1,600 monthly costs by selling £1,600 of the funds each month, and has no cash put by' },
    reason: { T1: 'Rashid’s monthly costs are paid by selling funds, and nothing is set aside to spend from instead: {cue:T1}. If prices fall, every one of those monthly sales is made at the low price.' },
    not: { outcome: 'covered', why: 'He has no cash put by. The money for his bills is in funds whose price can fall, and none of it is out of a fall’s reach.' } },

  { id: 'p-cv1', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a woman who has not sold since the drop',
    text: "Gwen, 70, takes £2,100 a month from her £510,000. £75,600 of it, three years of her spending, is in a savings account, and she pays the bills from it. Her funds of shares have fallen by 30%, and she has sold none.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: '£75,600 of it, three years of her spending, is in a savings account, and she pays the bills from it' },
    reason: { T1: 'Gwen’s bills are paid from money that a fall cannot reach: {cue:T1}. The 30% fall changes what her funds are worth, and she needs nothing from them for now.' },
    not: { outcome: 'cashbuffer', why: 'Gwen is living on her money in a year of falling prices, as {o:cashbuffer} describes. But her bills are paid from cash and none of her funds has been sold.' } },

  { id: 'p-ld1', use: 'drill', tier: 'clean', setting: 'health', topic: 'a private operation paid on the day',
    text: "Kwame, 62, needs a hip operation in private care. The hospital has quoted £14,000, payable on the day of the operation, 20 October, five months from now. The money for it is in a fund of shares, down 16% since the summer.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { T1: ['quoted £14,000, payable on the day of the operation, 20 October', 'The money for it is in a fund of shares'] },
    reason: { T1: 'The bill is a known size on a known date, and its money sits in shares: {cue:T1}. After a 16% fall the fund holds about £11,760 of the £14,000, and the hospital’s date does not move.' },
    not: { outcome: 'covered', why: 'There is a bill, but the money for it is in {t:fund} of shares and not in cash or in {t:bond} that repays before the day.' } },

  { id: 'p-rb1', use: 'drill', tier: 'varied', setting: 'work', topic: 'a pension mix after eleven years of rises',
    text: "Ngozi, 38, chose 70% shares and 30% bonds for the money she is putting away for retirement. After eleven years of rises, shares are £442,000 of her £520,000, 85%. She will not need any of it for twenty-five years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { T1: 'shares are £442,000 of her £520,000, 85%' },
    reason: { T1: 'Ngozi chose 70% in shares, and now {cue:T1}. That is 15 points above her plan, with no living costs and no bill in the case, so {t:mix} is the only thing that a fall would find.' },
    not: { outcome: 'covered', why: 'A mix is only covered when it is still inside the limits the plan allows. 15 points above the plan is well outside any limit of a few points.' } },

  { id: 'p-cv2', use: 'drill', tier: 'varied', setting: 'business', topic: 'a supplier bill met by two bonds',
    text: "Hakim's company owes a supplier £75,000 on 1 December, seven months from now. The money for it is in two bonds from a government that repay £40,000 on 1 October and £35,000 on 15 November, both before the bill is due. Share prices have fallen by 20% since the spring.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'The money for it is in two bonds from a government that repay £40,000 on 1 October and £35,000 on 15 November, both before the bill is due' },
    reason: { T1: 'The money for the bill is out of a fall’s reach: {cue:T1}. The bonds repay the full £75,000 before the date, whatever shares do.' },
    not: { outcome: 'ladder', why: 'There is a bill on a known date, as in {o:ladder}. But that name needs the money for it in shares or funds, and here it is in bonds that repay before the bill is due.' } },

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'rev-cashbuffer', use: 'drill', kind: 'reverse', outcome: 'cashbuffer', expect: 'hear',
    options: [
      { text: '"I sell about £2,000 of the funds on the first of every month, and I haven’t got any cash put by."', voice: 'cashbuffer' },
      { text: '"The bond pays out in May, and the bill isn’t due until June."', voice: 'covered' },
      { text: '"The college fees are due in September, and the money is in my share account."', voice: 'ladder' },
      { text: '"It was meant to be 60 and 40, and now it’s 75 and 25."', voice: 'rebalance' }
    ],
    why: 'It says that the bills are paid by selling investments, month after month, with nothing put by to spend from instead.' },

  { id: 'rev-covered', use: 'drill', kind: 'reverse', outcome: 'covered', expect: 'find',
    options: [
      { text: 'She has not sold a fund since prices fell, and the bills have come out of a savings account.', voice: 'covered' },
      { text: 'He pays the rent by selling units of a fund, and has no cash put by.', voice: 'cashbuffer' },
      { text: 'The nursery fees are due in March, and the money for them is in a fund of shares.', voice: 'ladder' },
      { text: 'Shares have grown to 82% of the money, against a plan of 60%.', voice: 'rebalance' }
    ],
    why: 'That detail shows the money that will be needed already out of a fall’s reach, so nothing has to be sold because of it.' },

  { id: 'rev-ladder', use: 'drill', kind: 'reverse', outcome: 'ladder', expect: 'hear',
    options: [
      { text: '"The deposit is due on 1 June, and it’s all still in my fund."', voice: 'ladder' },
      { text: '"I’ve got three years of bills in the savings account."', voice: 'covered' },
      { text: '"I sell a bit every month to live on."', voice: 'cashbuffer' },
      { text: '"I never changed the mix, and I’ve not looked at it for years."', voice: 'rebalance' }
    ],
    why: 'It names a payment with a date, and says that the money for it is still in an investment whose price can fall.' },

  { id: 'rev-rebalance', use: 'drill', kind: 'reverse', outcome: 'rebalance', expect: 'find',
    options: [
      { text: 'The case gives the plan, 60% in shares, and the mix now, 76%, with no bill and no living costs.', voice: 'rebalance' },
      { text: 'The money for the tax bill is held in a bond that repays before it is due.', voice: 'covered' },
      { text: 'The bills are paid by selling units of a fund every month.', voice: 'cashbuffer' },
      { text: 'A bill of £20,000 is due on 1 May, and its money is in a share fund.', voice: 'ladder' }
    ],
    why: 'That detail is {t:mix} far from the plan, with nothing being sold to pay for anything.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'w4-c-demo', use: 'claim',
    text: '"Prices fell 30% this year, so I need to rebalance. My plan is 60% in shares and I allow 5 points either way, and shares are at 58% of the money."',
    ask: { type: 'missing', name: 'rebalance' },
    fault: 'The claim treats a fall in prices as the reason to rebalance. The name needs a mix that has moved well outside the limits the plan allows, and the speaker’s own numbers show shares at 58%, two points from the plan and inside the limit of 5. A fall moves {t:mix} a little as a matter of course, which is why a plan has limits. Selling or buying now would be a trade that the plan does not call for.',
    corrected: 'Prices fell 30% this year. My plan is 60% in shares and I allow 5 points either way, and shares are at 58%. That is inside my limit, so nothing needs doing, and in the key’s words the answer is {a:T1.ready}. It would be {o:rebalance} only if shares were outside 55% to 65%.' },

  { id: 'c-cash', use: 'claim',
    text: '"I’m 64 and I live off my funds, selling a little each month. A friend says I should keep three years of spending in cash, £75,000. Cash earns nothing, so that is just £75,000 wasted."',
    ask: { type: 'option', step: 'T1', answer: 'livingcosts' },
    fault: 'The claim counts the cost of the cash and never counts what it is for. Cash earns less than shares are expected to, which is a real cost: if shares grew 5% and the account paid 1%, £75,000 would give up £3,000 a year. But the speaker lives on funds by selling a little each month, so a fall means selling at the low price, and what is sold is not there when prices come back. That is {t:sequence}, and the cash is the price of not selling then. "Earns nothing" is not true, and "wasted" is not the right word for a price paid in order to wait.',
    corrected: 'I live off my funds by selling a little each month, which in the key’s words is {a:T1.livingcosts}. Holding three years of spending as cash would cost me about £3,000 a year in growth I would not get, if shares grew 5% and the account paid 1%. It buys me time not to sell on a bad day. I should count that cost against what a fall could cost me, and then decide.' },

  { id: 'c-bill', use: 'claim',
    text: '"My daughter’s university fees of £30,000 are due in September, two years from now, and the money is in a share fund. Bonds are boring and pay less. Shares beat bonds over the long run, so I’ll leave it where it is."',
    ask: { type: 'option', step: 'T1', answer: 'datedbill' },
    fault: 'The claim answers a question about the long run, and the bill has a date. "Over the long run" says something about many years taken together, and nothing in it says what the fund will be worth on the day in September when £30,000 is due. After a fall of 25% the fund would hold £22,500, which is £7,500 short, and the date would not move. The claim counts what bonds give up, and never what the date takes.',
    corrected: 'My daughter’s fees of £30,000 are due on a date two years from now, and the money for them is in shares, which in the key’s words is {a:T1.datedbill}. One bond that repays £30,000 by the day takes the fall out of the question, at the price of some growth. What shares may do over the long run is not about this bill, because this bill has a day.' },

  { id: 'c-covered', use: 'claim',
    text: '"I have £5,000 in my savings account, so the £30,000 school fees in September are covered."',
    ask: { type: 'missing', name: 'covered' },
    fault: 'The claim says covered, and shows £5,000 against a bill of £30,000. For the name you must be able to point to the money for the bill already in cash, or in bonds that repay in time, and here that is £5,000 of £30,000. The other £25,000 is somewhere the claim does not say, and if it is in shares, a fall could leave it short. Having some cash is not the same as having the bill covered.',
    corrected: 'I have £5,000 in my savings account, and the school fees are £30,000 in September, with the other £25,000 in shares. £25,000 of the bill is in shares, which in the key’s words is {a:T1.datedbill}. It would be {o:covered} only if all £30,000 were already in cash, or in bonds that repay it by September.' }
]);
