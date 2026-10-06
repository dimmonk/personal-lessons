// Wealth Preservation, Unit Two, part one (third half): the name that says leave it alone, and the pair it makes with the first name.

FC.cards('wealth', 'u2', [

  { id: 'meet-nocut', kind: 'meet', outcome: 'nocut',
    link: 'The first name was a charge that pays for nothing but choosing. This one is the opposite kind of case, and it is as common: something does come out every year, and the case shows it is worth it or already as low as it can be.',
    case: 'e-m-nocut', mark: 'E1',
    strip: [
      'There is one person, Kamal, and one cost: $3,000 a year to a planner.',
      'The price is flat, agreed in writing, and it has not changed in five years, though his pot has doubled.',
      'It pays for named work: his tax return, a check that his will and forms are current, and an update of his spending plan.',
      'Kamal says he would not do any of it himself, and the planner takes no commission. His money is in index funds, so nobody is paid for choosing.'
    ],
    explain: [
      'Put to this charge the question you put to the last one: what does it pay for? Here the answer is three jobs that would not otherwise get done. Take the planner away and the tax return is late, the will goes out of date and the plan goes stale. That is the question to ask of any charge: if you stopped paying, what important thing would stop happening? Here, three things would.',
      'Then look at how the price behaves. 1% of $300,000 is $3,000, and so is a flat $3,000. But when {t:pot} doubles to $600,000, 1% becomes $6,000 and the flat price stays at $3,000. The work is the same size: one tax return, one check of a will, one plan. So a price that stays flat is a price for the work, and a price that grows with {t:pot} is a price for something else. Kamal’s pot has doubled and his price has not moved.',
      'Last, look for what the case does not show: a commission paid to the planner for selling Kamal something, or a charge on top for choosing funds. Neither is there, so nothing is taken from {t:pot} that he is not getting something for.',
      'Cutting this charge would save $3,000 a year and cost him a tax return, a will check and a plan. That is why the answer here is to leave it alone.',
      'The line printed below names two other forms of this sound case, and here is each in one example. The first is income investments already in the sheltered account: Zoe has {t:bond} fund paying $2,000 a year inside her IRA, where it is not taxed, and {t:fund} of shares paying $400 a year in her brokerage account, where she pays $60. The tax she pays is already about as low as it can be. The second is spending reset each year: Tim takes 4% of whatever his pot is worth every January, so in a year when {t:pot} falls he takes less. His sum can never become too large for {t:pot}. Each is a cost already as low as it can be, and in each there is something you can point to that shows it. Kamal’s case is the first form, a charge for real work at a set price.'
    ],
    feature: { step: 'E1', option: 'nomore' },
    name: 'The name for this is {o:nocut}. It is the one name in the unit that says to leave it alone, and it is a full answer. It is there so that you can say "nothing needs cutting back here" as exactly as you can say what is wrong elsewhere.' },

  { id: 'again-nocut', kind: 'again', outcome: 'nocut',
    link: 'The last card gave you what to point to, from one case, and said that it has three forms. Kamal’s was a charge for real work. Here is a second case, in the second form.',
    first: 'e-m-nocut', second: 'e-a-nocut', step: 'E1',
    instruction: 'Find what the two cases share. Ignore the money and the people. Look at one thing only: the words that show why nothing here needs cutting back.',
    prompt: { kind: 'phrase', answer: "The IRA holds a bond fund that pays out $2,400 of interest a year, and Ben pays no tax on it. The brokerage account holds a fund of shares that pays out about $500 a year, and he pays $75 tax on that." },
    shared: [
      'In both cases something does come out of the money every year: $3,000 to a planner, $75 to the IRS. In both the case also shows why it is not a problem. Kamal’s $3,000 pays for work that would not otherwise get done, at a price that has not moved. Ben’s $75 is tax on {t:fund} that pays out little, because the fund that pays out a lot sits in the IRA, where its interest is not taxed.',
      'The two stories share one thing: you can point to words that show the cost is already worth it or already as low as it can be. If you cannot point to such words, this is not the answer. When you can, that is what {o:nocut} names.'
    ] },

  { id: 'portrait-nocut', kind: 'portrait', outcome: 'nocut',
    link: 'You now know what to point to, in more than one form. This card fills in the rest of the picture, so that you can spot {o:nocut} in real life, where nobody marks the words for you.',
    typical: [
      'It comes in three forms, and each has something you can point to. In the first it is the work the charge pays for, and a price that stays the same as {t:pot} grows. In the second it is the investment that pays out the most sitting in the sheltered account. In the third it is a sum worked out again each year as a percentage of what {t:pot} is worth.',
      'Something really does come out every year, and the person may be uneasy about it. The case is sound all the same, and the unease is not evidence.',
      'The price is usually a fixed sum in dollars, agreed in advance, that does not rise when {t:pot} does. The person can say what the work is, and what would not get done without it.',
      'Often someone nearby says it is too much: a friend, a relative, a website. What they point to is a percentage or a headline. What the case shows is the work, the account or the reset.',
      'The name does not say that the cost is the lowest on offer. It says that the case shows no reason to change it.'
    ],
    not: 'It is not an excuse for any charge that sounds professional. A charge for choosing investments is not this name because the person likes the adviser, and a flat price for nothing is not this name either. Nor is it the name for not looking: what makes it sound is something in the case that you can point to.',
    wild: ['"He does my return, checks my will and updates my plan. I couldn\'t do it myself."', '"It\'s a flat fee. It doesn\'t go up when my pot does."', '"The bonds are in the IRA and the growth fund is outside."', '"I take 4% of whatever it\'s worth each January."', '"I checked, and there\'s nothing to cut."'],
    self: 'In your own life you meet it when you check a charge and find work behind it, when you check where your income investments sit and find them already in the sheltered account, and when you set your spending as a percentage and not as a number of dollars. It feels like nothing: you check, and then you change nothing.',
    ask: '"If this charge stopped, what important job would stop being done, and does the price stay the same when {t:pot} grows?" Or: "Which account holds the investment that pays out the most?" Or: "Is this sum worked out again every year from what {t:pot} is worth?" If you can answer one of the three, you are probably looking at this name.',
    act: [
      'First, do not change anything because someone says a cost is high. Ask what it is for.',
      'Second, write down what you found: the work, the price and the fact that it does not grow with {t:pot}; or which account holds which investment; or the share you use and the date you reset it.',
      'Third, set a date to look again: when {t:pot} has doubled, when the work changes, or in three years.',
      'Fourth, if someone offers something cheaper, ask them to name the work the cheaper one would not do.',
      'Fifth, leave it alone. Doing nothing, having checked, is the answer.'
    ] },

  { id: 'check-nocut', kind: 'check', after: 'nocut',
    case: 'e-c-nocut',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore'] } },

  { id: 'look-feecore-nocut', kind: 'lookalike', ledger: 'feecore~nocut',
    link: 'The two names you have just met are easy to mix up, because in both a firm or an adviser is paid out of {t:pot} every year. This card puts them side by side.',
    cases: ['e-l-fee-a', 'e-l-fee-b'],
    instruction: 'Both cases are about the same firm and the same $3,000 a year, for two sisters with the same pot. Compare one thing: what each $3,000 pays for.',
    prompt: { kind: 'which', option: 'E1.nomore', answer: 'e-l-fee-b' },
    difference: [
      'In Case A the firm takes 1% of Gwen’s $300,000 and has done nothing else since it chose her funds. The $3,000 is for choosing, and it would grow if her pot did. The answer is {a:E1.picking}, and the case is {o:feecore}.',
      'In Case B the firm takes $3,000 from Ann too, but it is a flat price and it pays for a return, a check of her will and a plan. If the firm stopped, those would stop. The answer is {a:E1.nomore}, and the case is {o:nocut}.',
      'The size is the same, $3,000 each, and so is the firm. So neither tells you anything. Only what the money pays for, and whether the price moves with {t:pot}, tells the two apart.'
    ] }
]);
