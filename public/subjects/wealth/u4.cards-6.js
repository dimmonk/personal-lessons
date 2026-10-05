// Wealth Preservation, Unit Four, part two (last piece) and part three: the key's question, two whole cases, and the three cards that
// close the unit after the drill (recap, transfer, plan). Field guide: see u4.cards-1.js.
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('wealth', 'u4', [

  { id: 'q-why', kind: 'question', step: 'T1',
    h: 'The question you have been answering all along',
    link: 'Since Alan’s monthly sales you have seen the key’s question at the foot of each new name, with one answer under it. This card puts the question and its four answers in one place, as the key shows them, and says why the key asks it.',
    decides: 'So two people with the same investments and the same fall in prices can get different answers, and one of them can get the answer in which a fall would catch nothing. What the key reads is not the fund and not the fall. It is what the money has to do, and where the money for it is held.',
    how: [
      'Find the sentence that says what the money has to pay for, or where {t:mix} stands against its plan. Then ask which of the four answers describes it. You should be able to put your finger on the words: bills paid by selling, a bill with a date and its money in shares, a mix far from its plan, or the money already out of the fall’s reach.',
      'If you are unsure, ask in this order. Is anything being paid for by selling shares or funds? Is a bill of a known size due on a known date, with its money in shares or funds? Is the only thing in the case a mix that has moved? If none of these is true, is the money for the bills or the bill already in cash or in bonds that repay in time, or is {t:mix} inside its limits? Money needed soon comes before {t:mix}.',
      'A fall in prices can be in the case without being the answer. Prices fell 30% in Ruth and Gil’s case, and the answer was {a:T1.ready}. Go by what the fall would catch, and by the words that show it.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-why', kind: 'check', after: 'T1',
    case: 'tm-chk-why',
    ask: { type: 'step', step: 'T1' } },

  { id: 'worked-tax', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the four names and the key’s question about them. Before you run a case yourself, watch two being run from the top, in the order the key asks. You are not asked anything until the end of each.',
    case: 'tm-w-tax',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is a payment with a size and a date, and money that has a job to do on that day: {cue:D1}. A fall in prices could catch it. Nothing here comes out every year, rests on one thing, or is about a death or a gift.' },
      { step: 'T1',
        reason: 'The bill has a set size and a set day, and the money for it sits in something whose price can fall: {cue:T1}. Nothing is paid every month, so these are not living costs, and the case says nothing about a plan for {t:mix}. The bill is the whole case.' }
    ],
    hold: {
      neighbour: 'covered',
      prompt: { kind: 'reason',
        lead: 'The case says the money for the bill has been set aside, so it can look like a case in which a fall would catch nothing.',
        choices: [
          { id: 'a', text: 'Imani has set the money aside for the bill since the summer.',
            note: 'True, and it is why the case can look like {o:covered}. But setting money aside says nothing about what the money is held in. £38,000 set aside in shares can still fall before the day.' },
          { id: 'b', text: 'The money for the bill is in shares, and the bill is due on a day that will not move.' },
          { id: 'c', text: 'Her accountant worked the amount out from her accounts.',
            note: 'True, but that is how she knows the size of the bill. It does not show whether a fall could reach the money for it.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:covered} you must be able to point to this: {needs:covered}. Imani’s money for the bill is not in cash and not in bonds that repay by the day. It is in shares, so there is a gap that a fall could open between what she has and what she must pay.',
        'It is the question from Mira’s two care-home cases. {test:ladder~covered} Here the money for the bill is held in shares, so the key’s answer is {a:T1.datedbill}.'
      ]
    },
    impression: {
      resembles: 'tm-meet-bill',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the wedding: a bill of a set size on a set date, with the money for it in shares.',
        'Here the key and the likeness agree, so the answer stands. The key’s question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-hilda', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The tax bill was a clean case: one thing was going on, and nothing in the story pulled the other way. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'tm-w-hilda',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is a person living on her money while prices have fallen: {cue:D1}. A fall could catch what she lives on, so the key’s question is about that fall. Nothing here comes out every year at a rate, rests on one thing, or is about a death or a gift.' },
      { step: 'T1',
        reason: 'Now look at where her bills are paid from: {cue:T1}. Three years of living costs are in a savings account and in bonds that repay before each year begins. Nothing has been sold since prices fell, and nothing has to be.' }
    ],
    hold: {
      neighbour: 'cashbuffer',
      prompt: { kind: 'reason',
        lead: 'Hilda lives on her money and prices have just fallen by more than a quarter. That is the story of Alan, and it can make the case look like the first name.',
        choices: [
          { id: 'a', text: 'She lives on £2,500 a month from her money, and prices fell 28% last year.',
            note: 'True, and it is why the case can look like {o:cashbuffer}. But a person living on money in a year of falling prices is the story, and not the answer. {o:cashbuffer} needs the bills to be paid by selling, and Hilda has sold nothing.' },
          { id: 'b', text: 'The papers say that prices may fall again.',
            note: 'True, but that is a forecast, and the key does not read forecasts. Whether or not prices fall again, the case shows where the bills come from.' },
          { id: 'c', text: 'Three years of her living costs are held outside the funds, in cash and in bonds that repay before each year begins.' }
        ],
        answer: 'c' },
      reason: [
        'For {o:cashbuffer} you must be able to point to this: {needs:cashbuffer}. Hilda’s bills are not paid by selling funds. Three years of them are in a savings account and in two bonds that repay before the money is needed, so a fall cannot reach it.',
        'It is the question from Colm and Fay. {test:cashbuffer~covered} Here the money for the bills is in cash and in bonds that repay in time, so the key’s answer is {a:T1.ready}.'
      ]
    },
    impression: {
      resembles: 'tm-meet-safe', first: 'tm-meet-live',
      text: [
        'Now the second look: does this case look like one you know? A retired person, a big fall and money taken out every month may bring Alan back first, and Alan’s case was {o:cashbuffer}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s question and find the words in the case that answer it. They are {cue:T1}. Alan’s case has nothing like them: every one of his bills was paid by selling funds. Ruth and Gil’s case does: their bills were paid from a savings account, and none of the funds was sold. So the case this one really looks like is theirs, and the key’s answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Before any cure, ask what a fall would do, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'A fall is not the thing to look for, because falls come to everyone. Look for what a fall would catch: living costs paid by selling, a bill on a date with its money in shares, or a mix that has moved well away from its plan.',
      'Where the money is held decides it. Cash, and bonds that repay before the day, are out of a fall’s reach. Shares and funds are not. The same bill, the same person and the same fall can give {a:T1.datedbill} or {a:T1.ready}, and only where the money for the bill is held tells them apart.',
      'Money needed soon comes first. When a mix that has moved sits beside living costs paid by selling, or a bill on a date, the key’s answer is the living costs or the bill.',
      'Count the cost in pounds before you act. Cash and bonds give up some growth, and a written rule costs nothing to write but must be followed on its date. {a:T1.ready} is a real answer: when what is needed is already out of reach, do nothing, and say why.',
      'Two answers from the key’s first question can look like these. A fixed sum taken from money that has shrunk is {a:D1.erosion}, and so is a sale that would bring a tax bill that new money could avoid. In both, the first question gives way to what comes out of the money every year.',
      'The order of good and bad years, {t:sequence}, matters only while money is being taken out.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the four names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the four and name an occasion of your own: somewhere you read it, somewhere you were told it, or somewhere you did it. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'cashbuffer', occasion: 'Any account you live on, and what happens to next month’s bills if the price of what is in it drops.' },
      { outcome: 'covered', occasion: 'A time someone told you to do something about a fall in prices, when the money you needed was already safe.' },
      { outcome: 'ladder', occasion: 'A tax bill, a fee or a deposit with a date on it, and where the money for it is held until then.' },
      { outcome: 'rebalance', occasion: 'The line on a pension statement that shows how your money is split, beside {t:mix} you chose.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my own head'] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the only one that asks you to decide something. If you want to, write one line you can keep.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. You can change them or write your own, and nothing is saved until you press the button.',
    cues: [
      { cue: 'I live on money taken out of my investments', then: 'I work out one year of spending, and I check how many years of it are held in cash that I do not have to sell from.' },
      { cue: 'I know a bill of a set size is due on a set date', then: 'I look up where the money for it is held, and what that could be worth on the day.' },
      { cue: 'a statement shows how my money is split', then: 'I compare it with {t:mix} I chose, and I follow my written rule if it is outside its limits.' },
      { cue: 'someone offers me something to protect me from a fall in prices', then: 'I ask what in my own case a fall would catch, and if I can point to nothing, I leave it alone.' }
    ] }
]);
