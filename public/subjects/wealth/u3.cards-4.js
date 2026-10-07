// Wealth Preservation, Unit Three, part two (second half): a loan the lender could use, the exception in which the answer is the
// business, the question, the whole story, and the two cards that close the unit after the drill. This is an action subject, so the
// unit ends with a plan card. Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  /* ---------- A loan the lender could use ---------- */
  { id: 'w3-meet-deleverage', kind: 'meet', outcome: 'deleverage',
    link: 'The last problem is a loan. A loan can be a good thing. What matters is what the lender is allowed to do.',
    case: 'w3-h-del-1', mark: 'S1',
    explain: [
      'Ian owes $350,000 against $600,000 of shares, which is 58%, and the limit in his contract is 60%. A fall of just 10%, to $540,000, puts him over it: 60% of $540,000 is $324,000, so the brokerage may demand $26,000 or sell.',
      'The brokerage is protecting its own loan, on its own timetable. If Ian cannot find $26,000 in two days, some of his shares are sold at the low price, for good, and when prices come back they are not there. A loss on paper becomes a real loss, at the moment the lender chooses. That needs no crash, and the company need not be a poor one: only a loan that is large against what it is secured on, and a lender who is allowed to act.',
      'The fix is to change the loan, not the shares. Borrow less: $150,000 against $600,000 is 25%, and the shares would have to fall 58% before the limit was reached. Prefer a rate fixed for years and terms the lender cannot cancel while you make the payments. A loan that is small, fixed and cannot be demanded back while it is paid is {o:safe}.'
    ],
    spot: [
      { do: 'Find the loan and what it is secured on: $350,000, secured on his shares.', why: 'The lender can sell what the loan is secured on.' },
      { do: 'Divide the loan by the value: $350,000 ÷ $600,000 is 58%.', why: 'The bigger the share, the less room the shares have to fall.' },
      { do: 'Find what the lender may do: demand more money or sell some shares if the loan passes 60% of their value.', why: 'That power is what can force a sale.' }
    ],
    feature: { step: 'S1', option: 'riskyloan' },
    name: 'This is {a:S1.riskyloan}. What to do is {o:deleverage}. It does not say borrowing is wrong or the lender is acting badly, only that this loan gives the lender a power that could force a sale.',
    act: [
      { do: 'Write down every loan: how much, what it is secured on, whether the rate is fixed, and whether the lender can demand the money back or ask for more security.', why: 'Those facts show what the lender can do.' },
      { do: 'Divide the loan by the limit the contract names: $350,000 ÷ 0.6 is about $583,000.', why: 'If the shares fall below that, the lender can act.' },
      { do: 'Reduce the loan or change its terms until the fall needed is very large.', why: 'The bigger the cushion, the less the lender can do.' },
      { do: 'Do not replace it with another loan on the same terms.', why: 'That brings the same power back.' }
    ] },

  { id: 'w3-check-deleverage', kind: 'check', after: 'deleverage',
    case: 'w3-h-del-chk',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show a way the lender could make the loan harder to carry? Tap them.',
           answer: 'The bank can change the rate every six months' } },

  { id: 'w3-exc-supports', kind: 'exception', looksLike: 'deleverage', is: 'supports', ledger: 'deleverage~supports',
    h: 'A loan the lender could use, and the answer is the business',
    link: 'A loan that the lender can demand back looks like {o:deleverage}. This story has exactly that, and the answer is a different one.',
    case: 'w3-h-exc-sup',
    setup: 'Reza has a loan that his bank can demand back, and the bank can take his shares if he cannot pay. That is what {a:S1.riskyloan} looks like. Yet the answer here is {a:S1.ownrun}, and the fix is {o:supports}.',
    prompt: { kind: 'phrase', answer: 'runs a small chain of tire shops' },
    because: [
      'Look at what else the story shows. Reza runs the business, and it is most of what he owns: $900,000 out of $1,100,000. Having no loan against the business’s shares is one of {t:threesupports}, and that is the one missing here, so the loan is part of the answer for the business.',
      'More is missing: his $15,000 of savings covers about five months of the $36,000 he spends a year. Putting the three in place means ending the loan against the shares and building up the savings. Ian’s loan, by contrast, was against shares in a company he did not run.'
    ] },

  /* ---------- The question, as a question ---------- */
  { id: 'w3-q-shock', kind: 'question', step: 'S1',
    h: 'The question to ask each time',
    link: 'Here is the question and its seven answers in one place.',
    decides: [
      'A wrong answer buys a fix for a problem you do not have: selling does nothing for a loan, and more insurance does nothing for properties in one name. “Already safe” is as much an answer as the rest.'
    ],
    how: [
      { do: 'Read the story to the end, then find the words that show what the one thing is and what the person can do about it.', why: 'If you cannot find them, you do not have an answer yet.' },
      { do: 'Ask first: does the person run a business that is most of what they have? Then check {t:threesupports}.', why: 'One missing is {o:supports}, and all three there is {o:safe}.' },
      { do: 'If they do not run it, ask whether they can sell it.', why: 'If they can, it is {o:diversify}; if a rule stops them, it is {o:hedge}.' },
      { do: 'For {t:claim}, several properties or a loan, ask whether there is a gap.', why: 'A gap is {o:insure}, {o:entity} or {o:deleverage}, and no gap is {o:safe}.' }
    ],
    whenBoth: 'Two pairs can both seem to fit one story, and there is a rule for each. One claim bigger than the insurance wins over properties in one name. A business the person runs, with one of {t:threesupports} missing, wins over a loan the lender could use, because a loan against a business’s shares is one of the three. Each pair came up earlier in this unit.' },

  { id: 'w3-check-shock', kind: 'check', after: 'S1',
    case: 'w3-h-q-chk',
    ask: { type: 'step', step: 'S1' } },

  /* ---------- One whole story, watched ---------- */
  { id: 'w3-worked-brewery', kind: 'worked',
    h: 'One whole story, where the loudest thing points the wrong way',
    link: 'Watch one story worked through from the top. The first thing you notice is not what decides it, so read to the end.',
    case: 'w3-h-wk-2',
    steps: [
      { step: 'D1',
        reason: 'The story opens with a friend’s warning, but a warning is an opinion, not a fact about her money. The facts are here: {cue:D1}. $1,400,000 of $2,000,000 is 70%, in one business that Greta runs, so the first answer is {a:D1.shock}.' },
      { step: 'S1',
        reason: 'Now check what stands round the business: {cue:S1}. All of {t:threesupports} are there, so the answer is {a:S1.madesafe}.' }
    ],
    hold: {
      neighbor: 'supports',
      prompt: { kind: 'reason',
        lead: 'Greta runs the brewery, and it is most of what she owns, so this can look like {a:S1.ownrun}. What decides it?',
        choices: [
          { id: 'a', text: 'Greta runs the brewery, and it is worth $1,400,000 of the $2,000,000 she owns.',
            note: 'True, and it is why this looks like {a:S1.ownrun}. But it is just as true of a safe business, so it cannot decide.' },
          { id: 'b', text: 'A friend told her this morning to sell half the brewery and buy funds.',
            note: 'True, but it is a friend’s opinion, not a fact about her money.' },
          { id: 'c', text: 'She has six years of savings, the rest is spread over funds, and no bank loan is against her shares.' }
        ],
        answer: 'c' },
      reason: [
        'Greta runs the brewery and it is most of what she owns, and that is as far as the likeness to {a:S1.ownrun} goes. None of the three is missing.',
        'This is the question from Alma’s stories: {test:supports~safe} Here nothing is missing, so the answer is {a:S1.madesafe}, and the name is {o:safe}. Selling half would cost tax and fees and part of her work, and would not make any of the three stronger.'
      ]
    },
    impression: {
      resembles: 'w3-h-saf-1', first: 'w3-h-sup-1',
      text: [
        'A second look: does this story remind you of one you know? A business owner with most of what she has in the business may bring back Femi, and Femi’s story was {a:S1.ownrun}. So the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words that answer it: {cue:S1}. Femi’s story had nothing like them. The story this one really matches is Hugo’s, so the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'w3-recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the question on your own. Here is the unit in one place.',
    carry: [
      'Before you reach for a fix, say what the one thing is and what the person can do about it, and find the words that show it. If you cannot find them, you do not have an answer yet.',
      'A big holding is not enough on its own. Whether the person can sell it, and whether they run it, decide between {o:diversify}, {o:hedge} and {o:supports}.',
      'A business you run is made safe by all of {t:threesupports}. One missing is a gap, and a loan against the shares is the one a lender can use.',
      'For {t:claim}, compare two numbers: how big it could be, and what the insurance pays. {o:insure} is for the gap between them. {o:entity} limits how far {t:claim} reaches, and it costs money, so it is worth it only where the saving is larger.',
      'A loan is about what the lender may do: ask for the money back or for more security, change the rate, or lend against nearly all of the value. The fix is {o:deleverage}.',
      'When two answers show up in one story, one wins: {t:claim} bigger than the insurance wins over properties in one name, and a business you run wins over a loan against its shares.',
      'Saying “it is already safe” is as much an answer as the rest, and it saves you paying for a fix you do not need.'
    ] },

  { id: 'w3-plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the only one that asks you to decide something.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. Use one, change it, or write your own. Nothing is saved until you press the button.',
    cues: [
      { cue: 'someone says that most of what I have is in one thing and I should do something about it', then: 'I ask first whether I can sell it, whether I run it, and what already protects it, and I write the numbers down before I agree to anything.' },
      { cue: 'someone offers me insurance, a company or a loan', then: 'I ask what gap it closes, in numbers, and what it costs each year.' },
      { cue: 'a loan agreement or a stock-plan letter arrives', then: 'I find the words that say what the lender may do, or when I may sell, and I write down the date and the sum before I sign.' },
      { cue: 'I am told that my money is safe', then: 'I ask what makes it so, in numbers: the years of spending set aside, the limit of the insurance, whose name holds each property, what the loan lets the bank do.' },
      { cue: 'someone tells me to fix something that is already safe', then: 'I leave it alone, write down the numbers that show it is safe, and set a date to check them again.' }
    ] }
]);
