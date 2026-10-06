// Wealth Preservation, Unit Two, part two (second half, first part): the word for a profit on paper, and tax on a sale nobody needs.

FC.cards('wealth', 'u2', [

  { id: 'term-gain', kind: 'term', term: 'gain',
    h: 'A profit on paper',
    link: 'The next two names are about tax on a sale. Before them, one word for what makes tax come with a sale.',
    case: 'e-t-gain',
    plain: [
      'Tomás paid $10,000 for his shares, and they are now worth $16,000. On paper he is $6,000 better off. But he has not sold anything. Nobody has paid him $6,000, and no money has changed hands.',
      'Tax on the rise usually works the same way. Nothing is due while Tomás holds the shares. If he sells them all, he has made $6,000 more than he paid, and tax is due on that $6,000. At 15%, that is $900. If he sells none, the tax is nothing. If the shares had fallen to $7,000 instead, he would be $3,000 below what he paid. That is a loss, not {t:gain}.'
    ],
    after: [
      'In the US, when something held for more than a year is sold, the rise is a long-term gain, and most people pay 15% on it; the rise on something held a year or less is taxed like income. The cases that follow assume everything sold was held for more than a year, and use 15% as the rate on {t:gain}, with 25% on interest and rent, as on the earlier card. Rates and the incomes they apply to change often, so these are examples to show how the idea works. The idea itself holds: tax on {t:gain} is due when something is sold, and what has not been sold has not been taxed.',
      'Two things follow. First, a plan to sell something that has risen is a plan to pay tax, and the tax is part of the price of selling. Second, {t:gain} on paper keeps growing with the rest of the money, untaxed for now, which is why putting the tax off is worth something.'
    ] },

  { id: 'meet-defer', kind: 'meet', outcome: 'defer',
    link: 'The tax in the last cards came every year without a sale. This tax comes only when something is sold, and only if the sale happens.',
    case: 'e-m-def', mark: 'E1',
    strip: [
      'There is one person, Imogen, and one fund: she paid $24,000, and it is now worth $30,000. The gain is $6,000, on paper.',
      'A sale is planned: her adviser suggests selling it all to move into another fund, which is much like the one she holds.',
      'The sale would bring tax of 15% on the gain, $900.',
      'The case shows nothing that needs the sale: Imogen has no bill to pay and no need for the cash.'
    ],
    explain: [
      'Ask what the sale is for. Her adviser says to lock in the profit. But a profit on paper is already hers, and selling does not make it more hers; it only makes it taxable. The money would go into {t:fund} much like the one she sells, so nothing about her position changes except that $900 goes to the IRS.',
      'Here are the two paths in numbers. Sell: the $30,000 becomes $29,100 to invest after $900 of tax. Do not sell: $30,000 stays invested, and the $900 she did not pay keeps growing with the rest. At 4% a year for twenty years, $900 grows to about $1,972, by {t:compounding}. That is the difference between the two paths for this one decision.',
      'Notice what is not claimed. Not selling does not make the $6,000 free of tax for ever. If Imogen sells one day, the gain, which may be larger by then, will be taxed. If she still holds it when she dies, US rules today give it a step-up: the people who inherit it are treated as if they had paid what it was worth that day, so the gain is never taxed. Congress could change that rule. What she gains while she lives is time: the tax is paid later, and the money she did not pay out has been working in the meantime.',
      'The line printed below gives two ways a sale can be unneeded, and Imogen’s case is the first: there is no reason to sell. The second is that the sale has a job, but new money could do the same job. Here is an example. A person chose a mix of 60% shares and 40% bonds, and after a good year shares have risen to 62%. An adviser says to sell some shares and buy bonds, to put it back. If the person is about to pay in new money, putting all of it into bonds does the same thing with no sale, and so no tax. The sale was only one way to do the job.',
      'This is why the answer is not about the sale itself. It is about a tax bill on a sale that does not have to happen.'
    ],
    feature: { step: 'E1', option: 'needlesssale' },
    name: 'The name for this is {o:defer}. It says what to do: hold off the sale, so that the tax is put off. "Delay" is the honest word: the tax is put off, and it comes if the fund is ever sold.' },

  { id: 'again-defer', kind: 'again', outcome: 'defer',
    link: 'Imogen’s case gave you what to point to: {needs:defer}. Here is a second case, with a plot of land in place of {t:fund}.',
    first: 'e-m-def', second: 'e-a-def', step: 'E1',
    instruction: 'Find what the two cases share. Ignore what is held, {t:fund} in one and land in the other. Look at one thing only: the words that show a sale planned, a tax bill on its gain, and nothing that needs the sale.',
    prompt: { kind: 'phrase', answer: 'so he is thinking of selling it and putting the money in a fund. The land is a small part of what he owns. He owes nothing and needs no cash, and a farmer’s rent covers the costs. Selling would bring tax of 15% on the $50,000 gain, $7,500' },
    shared: [
      'Both have something that has gone up in price: $24,000 to $30,000, and $120,000 to $170,000. Both are thinking of selling for a reason that is only a remark: a good run, land being overpriced. Both would pay tax on the gain, $900 and $7,500. And in both the case says nothing needs the sale: no bill, no need for cash.',
      'The sums differ by a factor of eight, and one is {t:fund} and the other a plot of land. What they share is a sale nobody needs, and the tax on it. That is what {o:defer} names.'
    ] },

  { id: 'portrait-defer', kind: 'portrait', outcome: 'defer',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:defer} in real life, where nobody marks the words for you.',
    typical: [
      'The reason given for selling is a remark, not a need: "lock in the profit", "it has had a good run", "it looks expensive", "let us tidy up". None of these is a bill or a use for the money.',
      'The tax bill is known before the sale. It is the gain times the rate: $6,000 at 15% is $900. A person can put that number next to the reason and see which is larger.',
      'The gain is on paper, so the person feels rich and feels the pull to bank it. Selling makes it feel safe. What it does is make it taxable.',
      'It also shows up as a sale to put {t:mix} back. Say a person chose 60% shares and 40% bonds. After a good year the shares are worth $264,000 and the bonds $160,000, so shares are 62% of $424,000. An adviser says to sell some shares and buy bonds. That sale brings tax on the gain in the shares sold. But new money paid in can do the same job: $20,000 put wholly into bonds makes them $180,000 of $444,000, and shares are then 59.5%, with no sale and no tax. For such a case the answer to the first question is {a:D1.erosion}, and not {a:D1.timing}, because the tax could be avoided.',
      'While the owner lives, the delay is not an escape. The tax is still due when something is sold, and the gain may be larger by then. What is gained is time, and growth on the money not paid.'
    ],
    not: 'It is not a case where the sale is needed. If the money is wanted for a bill or for living costs, selling has a job, and the tax is the price of doing it; this name does not apply, though a tax bill is in the case.',
    wild: ['"Let\'s lock in the profit."', '"It\'s had a good run."', '"Take your profits before the summer."', '"I\'ll just tidy up the account."', '"It feels risky to leave it."'],
    self: 'In your own life you meet it when someone, a friend, a salesman, a newsletter or your own wish to tidy up, says something has done well and should be sold. The moment is the one just before you press the button.',
    ask: '"What is this sale for, and how much tax would it bring?" If the answer to the first is "nothing, really", you are probably looking at this name.',
    act: [
      'First, ask what the sale is for. Write the reason down. If it is a remark, a hunch or tidiness, it is not a need.',
      'Second, work out the tax in dollars: what it is worth now, minus what you paid, times the tax rate.',
      'Third, ask whether new money paid in, or money you already receive, could do the same job without a sale. If a mix has moved, put the next payments into the part that is below its plan.',
      'Fourth, if nothing needs the sale, do not sell. Write down the date and the gain, so that you know what the tax would be if you ever do.',
      'Fifth, if a sale is truly needed, sell the part with the smallest gain first.'
    ] },

  { id: 'check-defer', kind: 'check', after: 'defer',
    case: 'e-c-def',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore', 'incometax', 'needlesssale'] } },

  { id: 'look-location-defer', kind: 'lookalike', ledger: 'location~defer',
    link: 'Both of the last two names are about tax on money held in an ordinary account, and they are easy to mix up. Here is the same person with each.',
    cases: ['e-l-loc-a', 'e-l-loc-b'],
    instruction: 'Both cases are about Imani and her ordinary account. Compare one thing: whether the tax arrives without a sale, or only if one is made.',
    prompt: { kind: 'which', option: 'E1.needlesssale', answer: 'e-l-loc-b' },
    difference: [
      'In Case A the tax is $500 a year on the interest of {t:bond} fund, and Imani sells nothing. It comes every year for as long as the fund stays where it is. The answer is {a:E1.incometax}, and the case is {o:location}.',
      'In Case B nothing is taxed yet. The tax of $900 would come only if she sold the fund of shares, and nothing needs her to. If she does not sell, there is nothing to pay. The answer is {a:E1.needlesssale}, and the case is {o:defer}.',
      'Both are tax in an ordinary account, and both could be smaller. But one comes every year whatever Imani does, and the other comes only if she acts. The fix for the first is to move {t:fund} to another account. The fix for the second is to leave the fund where it is.'
    ] }
]);
