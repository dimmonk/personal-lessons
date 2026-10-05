// Wealth Preservation, Unit Two: the last part of stage four (cases whose story points the wrong way), and the faulty claims of the
// last stage.
// A case marked also shows a second answer to the first question as well as its own, and loses to its own by a tie-break in the key.
// A claim is something a person might say that uses one of this unit's names wrongly, or reasons
// in one of its ways. The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('wealth', 'u2', [

  /* ---------- Stage four, misleading cases ---------- */
  { id: 'e-r-fee-2', use: 'drill', tier: 'misleading', setting: 'family', topic: 'a "family planner" whose meeting repeats the same funds', echo: 'e-m-nocut',
    text: "Pilar, 56, has £400,000 with a firm that calls itself her 'family planner'. Each year the firm takes 1.2% of the pot, £4,800. Each spring there is a friendly meeting that goes through the same three funds the firm chose in the first year, and a glossy report that lists them with their prices. The firm has never prepared a tax return, checked a will or been asked for advice on anything else.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { D1: 'Each year the firm takes 1.2% of the pot, £4,800',
            E1: 'a friendly meeting that goes through the same three funds the firm chose in the first year, and a glossy report that lists them with their prices. The firm has never prepared a tax return, checked a will or been asked for advice on anything else' },
    reason: { D1: 'The case is about something that comes out of {t:pot} every year: {cue:D1}. It has no claim, no fall in prices and no handover.',
              E1: 'The meeting and the report only go back over the funds and their prices, and the case says nothing else is done: {cue:E1}. That is a charge for choosing, however friendly the meeting.' },
    not: { outcome: 'nocut', why: 'A planner who meets you each spring can look like the one who earns a flat price. But there the meeting comes with a return, forms and a plan. Here nothing is done that would not otherwise get done, and the charge is a percentage of {t:pot}.' },
    wouldChange: 'It would be a different name if the firm charged a flat price and the case named work such as a tax return and a check of the will, with the charge staying the same when {t:pot} grows.' },

  { id: 'e-r-nocut-4', use: 'drill', tier: 'misleading', setting: 'business', topic: 'a large flat price for the books of two companies',
    text: "Mirela, 59, has £800,000 in index funds and pays her accountant £9,000 a year, a flat price set in writing each January. Her cousin says that is 'more than a fund manager would charge'. For it the accountant files the returns of her two companies, runs their payroll and prepares her own return, none of which would get done without him.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'pays her accountant £9,000 a year',
            E1: 'a flat price set in writing each January. Her cousin says that is \'more than a fund manager would charge\'. For it the accountant files the returns of her two companies, runs their payroll and prepares her own return, none of which would get done without him' },
    reason: { D1: 'The case is about something that comes out of the money every year: {cue:D1}. It has no fall in prices, no claim and no handover.',
              E1: 'The charge is a flat price, and it pays for named work that the case says would not otherwise get done: {cue:E1}. How large the price sounds is not what decides it.' },
    not: { outcome: 'feecore', why: 'The £9,000 does not pay for choosing investments, which are in index funds already. It pays for returns and payroll that would otherwise be left undone.' } },

  { id: 'e-r-def-3', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a sale to put the mix back, with new money about to arrive', also: ['timing'],
    text: "Tobias, 63, planned to keep his £400,000 as 60% shares and 40% bonds. After a good year his shares are worth £264,000 and his bonds £160,000, so shares are now about 62% of the whole. His adviser says to sell £9,600 of shares and buy bonds to put the mix back. That sale would bring tax of 20% on a £4,000 gain, £800. Tobias is about to pay in £20,000 of new money.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { D1: 'That sale would bring tax of 20% on a £4,000 gain, £800',
            E1: 'sell £9,600 of shares and buy bonds to put the mix back. That sale would bring tax of 20% on a £4,000 gain, £800. Tobias is about to pay in £20,000 of new money' },
    reason: { D1: 'In this case {t:mix} has moved from its plan, which is why it can look like {a:D1.timing}. But the sale that would put it back brings a tax bill, {cue:D1}, and new money paid in could do the same job. When a case shows both, the answer is the one about what is taken out.',
              E1: 'A sale is planned that would bring tax on {t:gain}, and the case shows the sale is not needed: {cue:E1}. £20,000 of new money put into bonds would take them from 38% to about 40% of £444,000, which is the plan, and so put {t:mix} back with no sale at all.' },
    not: { outcome: 'harvest', why: 'No sale has been made this year and none of the holdings is worth less than it cost. The case is about a sale being planned, not about a loss to set against {t:gain}.' },
    wouldChange: 'It would be a different name if the shares had to be sold, for example if he needed the cash for a bill or for living costs.' },

  { id: 'e-r-har-2', use: 'drill', tier: 'misleading', setting: 'retirement', topic: 'a woman who refuses to sell a fund at a loss',
    text: "Carla, 60, is upset about one of her funds, which she bought for £30,000 and which is now worth £12,000. 'I will never sell at a loss,' she says. This year she did sell another fund for £9,000 more than she paid, and she will owe tax of £1,800 on that gain. Both funds are in the same ordinary account.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { D1: 'she will owe tax of £1,800 on that gain',
            E1: ['which she bought for £30,000 and which is now worth £12,000', 'she did sell another fund for £9,000 more than she paid, and she will owe tax of £1,800 on that gain. Both funds are in the same ordinary account'] },
    reason: { D1: 'The case is about tax that will come out of the money this year: {cue:D1}. It has no handover and no one thing that is most of what she owns.',
              E1: 'The case shows {t:gain} made this year that will be taxed, and {t:fund} she has not sold is worth less than she paid, in the same account: {cue:E1}. Her refusal is why the loss has not been set against the gain, not a reason it cannot be.' },
    not: { outcome: 'defer', why: 'The sale has been made, and nobody is planning one that is not needed. What the case shows is a loss waiting in the same account as {t:gain}.' } },

  { id: 'e-r-burn-2', use: 'drill', tier: 'misleading', setting: 'family', topic: 'a fixed sum after a fall of a third', also: ['timing'],
    text: "Valentina and Mateo retired with £2,000,000 and set their spending at £100,000 a year, which was 5%. Prices then fell 35%, and their pot is now £1,300,000. They still take £100,000 a year, which is now about 7.7% of it, and they sell shares each month to pay for it.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { D1: 'They still take £100,000 a year, which is now about 7.7% of it',
            E1: 'set their spending at £100,000 a year, which was 5%. Prices then fell 35%, and their pot is now £1,300,000. They still take £100,000 a year, which is now about 7.7% of it' },
    reason: { D1: 'Prices have fallen and they sell shares to live, which can look like {a:D1.timing}. But the case also shows a sum fixed in pounds that they keep taking while their savings shrink: {cue:D1}. When a case shows both, the answer is the one about what is taken out.',
              E1: 'The sum was fixed when {t:pot} was £700,000 bigger and has not been reset: {cue:E1}. The fall explains why {t:pot} shrank; the sum stays fixed whatever prices do.' },
    not: { outcome: 'nocut', why: 'Spending is sound when it is reset each year as a percentage of {t:pot}. They kept the number of pounds and {t:pot} fell under it.' },
    wouldChange: 'It would be a different name if they took a percentage of what {t:pot} is worth each year, so that spending fell when {t:pot} fell.' },

  { id: 'e-r-nocut-5', use: 'drill', tier: 'misleading', setting: 'retirement', topic: 'a percentage taken after a fall of 30%',
    text: "Joaquim, 62, takes 3.5% of his pot each January. Prices fell 30% last year, so the pot is now £490,000 and he takes £17,150, down from £24,500 the year before. He works out the new figure on the first of January and plans the year around it.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'takes 3.5% of his pot each January',
            E1: 'takes 3.5% of his pot each January. Prices fell 30% last year, so the pot is now £490,000 and he takes £17,150, down from £24,500 the year before' },
    reason: { D1: 'The case is about a sum taken out of {t:pot} every year to spend: {cue:D1}. The fall in prices is in the case, but nothing the money has to pay for is caught by it.',
              E1: 'The sum is worked out again each January as the same share of what {t:pot} is worth: {cue:E1}. When prices fell 30%, the amount he takes fell with them, so he never takes a bigger share than he chose.' },
    not: { outcome: 'burnrate', why: 'His pot has fallen sharply, which is how a fixed sum goes wrong. But Joaquim does not take a fixed sum. He takes a percentage, so the amount fell as {t:pot} did.' } },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'e-claim-demo', use: 'claim',
    text: '"It\'s only a 1% fee, so there is nothing to cut back."',
    ask: { type: 'missing', name: 'nocut' },
    fault: [
      'The claim judges a charge by how small it sounds, and stops there. 1% is a percentage of the whole pot, taken every year, and what matters is what it does over time. If {t:pot} grows 4% a year before the charge, a 1% charge leaves about 3%, so it takes a quarter of the growth, and {t:compounding} makes that add up. On £100,000 over thirty years, growing at 4% gives £324,340 and growing at 3% gives £242,726: the 1% costs £81,614.',
      'Nothing in the claim shows what the 1% pays for, or that the price stays the same as {t:pot} grows. Those are the two things {o:nocut} needs, and a small size is neither of them.'
    ],
    corrected: 'It is 1% of {t:pot}, every year. Whether the 1% needs cutting back depends on what it pays for: work that would not otherwise get done, at a set price that does not grow with {t:pot}. Without that, it is a charge for picking investments.' },

  { id: 'e-claim-tax', use: 'claim',
    text: '"Rich people don\'t pay tax. Their money just sits there growing, and nobody ever takes any."',
    ask: { type: 'option', step: 'E1', answer: 'needlesssale' },
    fault: 'Wealthy people do pay tax. What the claim describes is money that has gone up in price and has not been sold. The tax on that gain is put off, not cancelled: it comes when something is sold. Income that investments pay out every year is taxed whether or not anything is sold, so money that never leaves does not mean tax that never comes.',
    corrected: 'People with a lot of money often pay less tax sooner by not selling investments that have risen, because the tax on {t:gain} is due only on a sale. That is {a:E1.needlesssale}. Tax on income paid out every year, and on any gain when it is finally sold, still comes.' },

  { id: 'e-claim-whole', use: 'claim',
    text: '"Whole-life insurance is a great investment. Every year some of what I pay builds up inside it."',
    ask: { type: 'option', step: 'E1', answer: 'picking' },
    fault: [
      'The claim looks only at the part that builds up. A whole-life payment is split three ways: cover that pays out if you die, a savings part, and charges, and part of those charges is a commission paid to the person who sold it. The insurer\'s managers also choose what the savings part holds, and charge for that too.',
      'The claim says nothing about how much of each payment goes to the charges, or what those pay for. Asked {q:E1}, the answer includes {a:E1.picking}.'
    ],
    corrected: 'Some of what you pay builds up inside it, and some of it goes in charges, including a commission to the seller and a yearly charge for choosing the investments. Ask what each part costs. The same cover and {t:indexfund} bought separately usually cost far less in total.' },

  { id: 'e-claim-loss', use: 'claim',
    text: '"I will never sell anything below what I paid for it. It is only a loss on paper until I sell."',
    ask: { type: 'option', step: 'E1', answer: 'gainloss' },
    fault: 'The claim treats not selling as costless. If a sale this year made {t:gain} and an investment still held in that account is worth less than was paid, selling it sets its loss against the profit and lowers the tax bill. A loss on paper is a real fact about what the money is worth; refusing to sell it does not bring the price back, and it leaves the tax higher.',
    corrected: 'A fall on paper becomes useful for tax only when the investment is sold. With {t:gain} taxed this year and a second investment in that account below its cost, the answer is {a:E1.gainloss}: selling the fallen one cuts the tax, and the money can go into a similar investment.' }
]);
