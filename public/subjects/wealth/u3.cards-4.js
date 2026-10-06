// Wealth Preservation, Unit Three, part two (second half): a loan the lender could use, the exception in which the answer is the
// business, the question, the whole case, and the two cards that close the unit after the drill. This is an action subject, so the
// unit ends with a plan card. Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  /* ---------- A loan the lender could use ---------- */
  { id: 'w3-meet-deleverage', kind: 'meet', outcome: 'deleverage',
    link: 'The last problem is a loan. A loan can be a very good thing. What matters is what the lender is allowed to do, and the case has to show it.',
    case: 'w3-h-del-1', mark: 'S1',
    strip: [
      'There is one person, Ian, with shares worth $600,000, and he owes his brokerage $350,000 on a margin loan he used to buy them.',
      'The shares are the brokerage’s security for the loan.',
      'The contract lets the brokerage act if the loan ever becomes more than 60% of what the shares are worth: Ian must pay in more money within two days, or the brokerage sells some of his shares.',
      'The case does not say prices are falling. It says what the lender is allowed to do if they do.'
    ],
    explain: [
      '$350,000 against $600,000 of shares is 58%, and the limit is 60%. A fall of just 10%, to $540,000, puts the loan over it: 60% of $540,000 is $324,000, so the brokerage may demand $26,000 or sell.',
      'The brokerage is protecting its own loan, on its own timetable. If Ian cannot find $26,000 in two days, some of his shares are sold at the low price, for good, and when prices come back they are not there. A loss on paper becomes a loss for good, at the moment the lender chooses. That needs no crash, and the company need not be a poor one: only a loan that is large against what it is secured on, and a lender who may act.',
      'The fix is to change the loan, not the shares. Borrow less: $150,000 against $600,000 is 25%, and the shares would have to fall 58% before the limit was reached. Prefer a rate fixed for years and terms the lender cannot cancel while the payments are made. A loan that is small, fixed and cannot be demanded back while it is paid is {o:safe}.'
    ],
    feature: { step: 'S1', option: 'riskyloan' },
    name: 'The answer is {a:S1.riskyloan}, and the name of what to do about it is {o:deleverage}. It says what to aim for: a loan that is modest in size, on terms that stay safe. The name does not say borrowing is wrong or the lender is acting badly, only that this loan hands the lender a power that could force a sale.',
    act: 'Write down every loan: how much, what it is secured on, whether the rate is fixed, and whether the lender can demand the money back or ask for more security. Divide the loan by the limit the contract names to see how far the value could fall before the lender acts ($350,000 ÷ 0.6 is about $583,000). Reduce the loan or change its terms so that fall is very large, and do not replace it with another loan on the same terms.' },

  { id: 'w3-check-deleverage', kind: 'check', after: 'deleverage',
    case: 'w3-h-del-chk',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show a way the lender could make the loan harder to carry? Tap them.',
           answer: 'The bank can change the rate every six months' } },

  { id: 'w3-exc-supports', kind: 'exception', looksLike: 'deleverage', is: 'supports', ledger: 'deleverage~supports',
    h: 'A loan the lender could use, and the answer is the business',
    link: 'A loan that the lender can demand back looks like {o:deleverage}. This case has exactly that, and the answer is a different one.',
    case: 'w3-h-exc-sup',
    setup: 'Reza has a loan that his bank can demand back, and that gives the bank his shares if he cannot pay. That is exactly what {o:deleverage} points to. Yet the answer for this case is {a:S1.ownrun}, and the name is {o:supports}.',
    prompt: { kind: 'phrase', answer: 'runs a small chain of tire shops' },
    because: [
      'Ask what else the case shows. Reza runs the business, and it is most of what he owns: $900,000 out of $1,100,000. A loan secured on the shares of a business the owner runs is one of {t:threesupports}, and it is the one that is missing here. So the loan is not a separate matter: it is part of the answer for the business.',
      'There is more missing: his $15,000 of savings covers about five months of the $36,000 he spends a year. Putting the three in place means ending the loan against the shares and building the reserve. Ian’s loan, by contrast, was against shares in a company he did not run.'
    ] },

  /* ---------- The question, as a question ---------- */
  { id: 'w3-q-shock', kind: 'question', step: 'S1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its seven answers in one place, and says why it is asked.',
    decides: [
      'A wrong answer buys a cure for a problem the case does not have: selling does nothing for a loan, and more insurance does nothing for properties in one name. “Already safe” is as much an answer as the rest.'
    ],
    how: [
      'Read the case to the end, then point to the words that show what the one thing is and what the person can do about it, or what already stands round it. If you cannot point, you do not have an answer yet.',
      'Two questions sort most cases. First, does the person run a business? If so, it is {o:supports} when one of {t:threesupports} is missing, and {o:safe} when all three are in place. If not, can they sell? Then it is {o:diversify}; and a rule that stops them selling makes it {o:hedge}. Second, for {t:claim}, a loan or several properties: is the gap there ({o:insure}, {o:entity}, {o:deleverage}) or already closed ({o:safe})?'
    ],
    whenBoth: 'Two pairs can both seem to fit one case, and there is a rule for each. A demand bigger than the insurance wins over properties in one name. A business the person runs with a support missing wins over a loan the lender could use, because a loan against a business’s shares is one of {t:threesupports}. Each pair has been shown earlier in this unit.' },

  { id: 'w3-check-shock', kind: 'check', after: 'S1',
    case: 'w3-h-q-chk',
    ask: { type: 'step', step: 'S1' } },

  /* ---------- One whole case, watched ---------- */
  { id: 'w3-worked-brewery', kind: 'worked',
    h: 'A whole case, where the loudest thing points the wrong way',
    link: 'Before you run a case yourself, watch one being run from the top, in the order the questions are asked. The first thing you notice in it is not the thing that decides it. You are not asked anything until the end.',
    case: 'w3-h-wk-2',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is this: {cue:D1}. $1,400,000 out of $2,000,000 is 70%, in one business that Greta runs, so the first answer is {a:D1.shock}. A friend’s warning opens the case, in loud words, but a warning is an opinion and not a fact about the money.' },
      { step: 'S1',
        reason: 'Now ask what stands round the business. Greta has {cue:S1}. The funds are spread across thousands of companies, the savings are six years of spending, and no bank holds her shares. All of {t:threesupports} are in place, so nothing is missing and nothing needs doing. The answer is {a:S1.madesafe}.' }
    ],
    hold: {
      neighbor: 'supports',
      prompt: { kind: 'reason',
        lead: 'Greta runs the brewery, and it is most of what she owns, so the case can look like a business with a support missing.',
        choices: [
          { id: 'a', text: 'Greta runs the brewery, and it is worth $1,400,000 of the $2,000,000 she owns.',
            note: 'True, and it is why the case can look like {a:S1.ownrun}. But that is true of the safe version and of the unsafe one alike, so it cannot say which this is.' },
          { id: 'b', text: 'A friend told her to sell half and buy funds.',
            note: 'True, but it is a friend’s opinion. It is not something the case shows about her money.' },
          { id: 'c', text: 'Her savings cover six years of spending, her other money is spread over funds, and no bank holds her shares as security.' }
        ],
        answer: 'c' },
      reason: [
        'For {a:S1.ownrun} you must be able to point to this: {needs:supports}. Greta runs the brewery and it is most of what she owns, and that is as far as the likeness goes. None of the three is missing.',
        'It is the question from Alma. {test:supports~safe} Here nothing has gone from the three, so the answer is {a:S1.madesafe}, and the name is {o:safe}. Selling half the brewery would cost tax and fees and part of her work, and would not make any of the three stronger.'
      ]
    },
    impression: {
      resembles: 'w3-h-saf-1', first: 'w3-h-sup-1',
      text: [
        'Now a second look: does this case look like one you know? A business owner with most of what she has in the business may bring back Femi first, and Femi’s case was {a:S1.ownrun}. So the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it: {cue:S1}. Femi’s case had nothing like them. The case this one really looks like is Hugo’s, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'w3-recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the question on your own. This card puts the unit in one place.',
    carry: [
      'Before you reach for a fix, say what the one thing is and what the person can do about it, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'A large holding is not enough on its own. Whether the person can sell it, and whether they run it, decide between {o:diversify}, {o:hedge} and {o:supports}.',
      'A business the person runs is made safe by all of {t:threesupports}. One missing is a gap, and a loan against the shares is the one a lender can use.',
      'For {t:claim}, look at two numbers: what it could be, and what the insurance pays. {o:insure} is for a gap between them. {o:entity} is for the reach of {t:claim}, and it costs money, so it is worth it only where the saving is larger.',
      'A loan is about what the lender may do: ask for the money back or for more, change the rate, or lend against nearly all of the value. {o:deleverage} is to borrow less, on safer terms.',
      'When two answers show in one case, one wins: {t:claim} bigger than the insurance wins over properties in one name, and a business the person runs wins over a loan against its shares.',
      'Saying that it is already safe is as much an answer as the rest, and it saves the cost of a fix for a problem the case does not have.'
    ] },

  { id: 'w3-plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the only one that asks you to decide something.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. Use one, change it, or write your own. Nothing is saved until you press the button.',
    cues: [
      { cue: 'someone says that most of what I have is in one thing and I should do something about it', then: 'I ask first whether I can sell it, whether I run it, and what already stands round it, and I write the numbers down before I agree to anything.' },
      { cue: 'someone offers me insurance, a company or a loan', then: 'I ask what gap it closes, in numbers, and what it costs each year.' },
      { cue: 'a loan agreement or a stock-plan letter arrives', then: 'I find the words that say what the lender may do, or when I may sell, and I write down the date and the sum before I sign.' },
      { cue: 'I am told that my money is safe', then: 'I ask what makes it so, in numbers: the years of spending set aside, the limit of the insurance, whose name holds each property, what the loan lets the bank do.' },
      { cue: 'someone tells me to fix something that is already safe', then: 'I leave it alone, write down the numbers that show it is safe, and set a date to check them again.' }
    ] }
]);
