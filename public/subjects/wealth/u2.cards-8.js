// Wealth Preservation, Unit Two, part three (second half) and part four: the key's question, the two whole cases, and the three cards that
// close the unit after the drill. The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the
// second look. Wealth Preservation is an action subject, so the unit closes with a plan card (lesson standard A11, P26).

FC.cards('wealth', 'u2', [

  /* ---------- The key's question ---------- */
  { id: 'q-erosion', kind: 'question', step: 'E1',
    h: 'The question you have been answering all along',
    link: 'Since Mara’s two charges you have seen the key’s question at the foot of each new name, with one answer under it. This card puts the question and its six answers in one place, as the key shows them, and says why the key asks it.',
    decides: [
      'Two people with the same pot and the same yearly loss of £3,000 can need opposite things. One pays £3,000 to someone who chose investments and did nothing else. The other pays £3,000 for a tax return, a check of a will and a plan. The size is the same and the people are the same. The key’s answer for the first is {a:E1.picking} and for the second {a:E1.nomore}. Only what the money is for tells them apart.',
      'That is why the key asks what is taking the money out, and not how large the sum is, who is paid, or whether it sounds fair. Applied to a case that shows {a:E1.nomore}, any of the fixes costs money and fixes nothing.'
    ],
    how: [
      'Read the whole case. Then look for the words that show what comes out, and ask the key’s question of them. You should be able to put your finger on the words: a charge and what it pays for, a tax bill and what it is on, or a sum and what it was set against. If you cannot, you do not yet have an answer.',
      'A quick first step is to see where the money goes. If it goes to a firm or an adviser, the answer is {a:E1.picking} or {a:E1.nomore}. If it goes to the tax office, it is one of the three about tax. If it is the person’s own spending, it is {a:E1.fixedsum} or, again, {a:E1.nomore}. That narrows the choice. It does not make it: the words in the case do.',
      'A sound case, the sixth answer, is not a case with nothing coming out. Something comes out, and the case shows it is worth it or already as low as it can be. If you can point to the words that show that, the answer is {a:E1.nomore}. If you cannot, and you cannot point to words for any of the other five either, do not invent a problem.',
      'The key’s first question, {q:D1}, has already put the case in this branch: it has told you that something comes out of {t:pot} every year. The question on this card is only which of the six it is.'
    ],
    whenBoth: 'Sometimes two answers seem to fit, and sometimes the case also shows an answer to the first question that is not this one. Each pair below has been set side by side earlier in this unit, and each has one question that separates it. There is one more thing from the first question. When a case shows {a:D1.timing} and also a sale to put {t:mix} back where the sale itself would bring a tax bill that new money could do without, the key’s answer to the first question is {a:D1.erosion}, and the answer to this one is {a:E1.needlesssale}. A sum fixed in pounds and left unchanged while a fall in prices shrinks {t:pot} is treated the same way, and the answer here is {a:E1.fixedsum}.' },

  { id: 'check-erosion', kind: 'check', after: 'E1',
    case: 'e-c-step',
    ask: { type: 'step', step: 'E1' } },

  /* ---------- Two whole cases ---------- */
  { id: 'worked-accounts', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the six names and the key’s question about them. Before you run a case yourself, watch two being run from the top, in the order the key asks. You are not asked anything until the end of each.',
    case: 'e-w-marit',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is money held in two accounts, and tax coming out of it: {cue:D1}. £450 is taken every year. Nothing else in it could lose the money: no one thing is most of it, no bill is falling due in a fall, and nothing is said about a death or a will.' },
      { step: 'E1',
        reason: 'Look at which fund pays out what, and where it sits: {cue:E1}. The fund that owns rented homes pays out £1,800 a year and sits in the ordinary account, where she pays £450 on it. The pension, where that income would not be taxed this year, holds the fund that pays out almost nothing. Nothing is being sold, and no charge is the problem.' }
    ],
    hold: {
      neighbour: 'nocut',
      prompt: { kind: 'reason',
        lead: 'Both of Marit’s funds charge very little and she has sold nothing, so the case can look as if nothing needs cutting back.',
        choices: [
          { id: 'a', text: 'Both funds charge very little.',
            note: 'True, and it is why the case can look sound. But a small charge says nothing about the tax, and the tax is what is coming out.' },
          { id: 'b', text: 'The fund that pays out the most, £1,800 a year, is in the ordinary account, and Marit pays £450 tax on it every year.' },
          { id: 'c', text: 'Marit has sold nothing.',
            note: 'True, and it rules out tax on a sale. It does not show whether the income investment sits in the right account, and that is what settles it.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:nocut} you must be able to point to this: {needs:nocut}. Marit’s case has small charges, but the income investment is not in the sheltered account: the largest payout sits in the taxed one. Nothing about it is already as low as it can be.',
        'It is the question from Ravi and Sunil. {test:location~nocut} Here the investment that pays out the most is in the taxed account, so the key’s answer is {a:E1.incometax}.'
      ]
    },
    impression: {
      resembles: 'e-m-loc',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back Ana: a pension, an ordinary account, and {t:fund} that pays out income that is taxed every year.',
        'Here the key and the likeness agree, so the answer stands. The key’s question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-planner', kind: 'worked',
    h: 'A second whole case, where the loudest thing points the wrong way',
    link: 'Marit’s was a clean case: one thing was going on in it. In this second case the first thing you notice is not the thing that decides it. Read to the end before you answer.',
    case: 'e-w-rui',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is a sum that comes out of {t:pot} every year: {cue:D1}. It is the loudest thing in the case, but at this question it only tells you where to look. Nothing in it is one thing that is most of Rui’s money, a bill in a fall, or a handover.' },
      { step: 'E1',
        reason: 'The friend’s remark is about size: 1.2% of £700,000. The words that answer the key’s question are about what the charge is for: {cue:E1}. It is a flat sum, not a percentage of {t:pot}, and it pays for returns, a spending plan and the papers of a late mother that Rui says he could not sort alone. No commission is taken, and nobody is paid for choosing: the money is in index funds.' }
    ],
    hold: {
      neighbour: 'feecore',
      prompt: { kind: 'reason',
        lead: 'A friend has called the charge 1.2% of {t:pot} and said Rui is being robbed. A big percentage is how a charge for choosing looks, so the case can look like a problem to fix.',
        choices: [
          { id: 'a', text: 'The charge is 1.2% of £700,000, which is £8,400 a year.',
            note: 'True, and it is why the case can look like a charge for choosing. But the size says nothing about what the charge pays for.' },
          { id: 'b', text: 'The charge is a flat sum for named work that Rui says he could not do alone.' },
          { id: 'c', text: 'Rui’s friend thinks he is being robbed.',
            note: 'True, but it is only a remark. It does not show what the charge pays for.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:feecore} you must be able to point to this: {needs:feecore}. Rui’s charge is large, but it is not a percentage of {t:pot} for choosing investments and nothing else. It pays for named work that would not otherwise get done, at a price that is flat.',
        'It is the question from Gwen and Ann. {test:feecore~nocut} Here the £8,400 pays for returns, a plan and papers, and the price stays the same whatever {t:pot} does, so the key’s answer is {a:E1.nomore}.'
      ]
    },
    impression: {
      resembles: 'e-m-nocut', first: 'e-m-fee',
      text: [
        'Now the second look: does this case look like one you know? A charge of 1.2% that a friend calls robbery may bring back Mara first, and Mara’s case was {o:feecore}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s question and find the words in the case that answer it. They are {cue:E1}. Mara’s case had nothing like them: her adviser had done nothing else since the fund was chosen. Rui’s case has the opposite. The case this one really looks like is Kamal’s, a flat price for named work, and the key’s answer stands.'
      ]
    } },

  /* ---------- The close, after the drill ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Say what is taking money out of {t:pot}, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'Ask what a charge pays for. A charge for choosing investments, and nothing else, is a problem. A charge for named work that would not otherwise get done, at a price that does not grow with {t:pot}, is not. Size alone settles neither.',
      'Tax comes in three shapes: on income every year, with nothing sold; on {t:gain}, only if a sale is made; and on {t:gain} already made this year, with a loss waiting beside it. Each has its own fix. Do not sell because tax is in the case. Sell only when a loss is there to use, or when the sale has a job to do.',
      'A fixed number of pounds taken from a pot that has shrunk is a bigger share than it was. The fix is a percentage of what {t:pot} is worth now, worked out again each year.',
      '{a:E1.nomore} is a real answer and a common one. Something does come out, and the case shows it is worth it or already as low as it can be. If you cannot point to words that show a problem, do not invent one, and do not buy a cure for a problem the case does not have.',
      'Two cases belong here and can look like {a:D1.timing}: a sale to put {t:mix} back that new money could make unnecessary, and a fixed sum of pounds that a fall in prices has made too big for {t:pot}. In both the key’s answer to the first question is {a:D1.erosion}.',
      'Your route is two answers long: the first question, then this one. A right name reached by a wrong first answer counts as a miss.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the six names is one step. Noticing the moment to ask the question is a separate step, and only you know where those moments are in your life.',
      'Pick one of the six and name an occasion of your own: something you read, something you were offered, or something you did. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'feecore', occasion: 'The line on a statement that gives the yearly charge on your pension or savings, and what it says the charge is for.' },
      { outcome: 'nocut', occasion: 'Someone you pay every year whose work you could not easily do yourself, and what stays the same about the price.' },
      { outcome: 'location', occasion: 'Where your investments that pay out the most income sit, and whether that account is sheltered.' },
      { outcome: 'defer', occasion: 'The last time someone told you to sell something because it had gone up, and what the sale was for.' },
      { outcome: 'harvest', occasion: 'The end of a tax year, something you sold, and anything you hold that is worth less than you paid.' },
      { outcome: 'burnrate', occasion: 'A sum you take or spend from your savings every year, and what share of what you have now it is.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my own head'] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the one that asks you to decide something. If you want to, write one line you can keep.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. You can change them or write your own, and nothing is saved until you press the button.',
    cues: [
      { cue: 'a statement or a letter shows a charge on my money', then: 'I add up every layer, ask what each one pays for, and write the total in pounds a year.' },
      { cue: 'someone says something I hold has done well and I should sell it', then: 'I ask what the sale is for, and work out the tax in pounds, before I answer.' },
      { cue: 'a tax year is about to end', then: 'I list what I sold and what I hold below what I paid, and check whether one can be set against the other.' },
      { cue: 'I set or review the sum I spend from my savings', then: 'I divide it by what my savings are worth today and write the share down.' },
      { cue: 'someone tells me a cost is too high, and I have already checked what it is for', then: 'I write down what I checked, set a date to look again, and leave it alone.' }
    ] }
]);
