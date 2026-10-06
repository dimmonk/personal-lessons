// Wealth Preservation, Unit Four, part two (close): the one whole case, and the cards that close the unit after the drill (recap, plan).
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('wealth', 'u4', [

  { id: 'worked-hilda', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before you run a case yourself, watch one being run from the top, in the order the questions are asked. In this case the most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'tm-w-hilda',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is a person living on her money while prices have fallen: {cue:D1}. A fall could catch what she lives on, so the question is about that fall. Nothing here comes out every year, rests on one thing, or is about a death or a gift.' },
      { step: 'T1',
        reason: 'Now look at where her bills are paid from: {cue:T1}. Three years of living costs are in a savings account and in bonds that repay before each year begins. Nothing has been sold since prices fell, and nothing has to be.' }
    ],
    hold: {
      neighbor: 'cashbuffer',
      prompt: { kind: 'reason',
        lead: 'Hilda lives on her money and prices have just fallen by more than a quarter. That is the story of Alan, and it can make the case look like the first name.',
        choices: [
          { id: 'a', text: 'She lives on $2,500 a month from her money, and prices fell 28% last year.',
            note: 'True, and it is why the case can look like {o:cashbuffer}. But a person living on money in a year of falling prices is the story, and not the answer. {o:cashbuffer} needs the bills to be paid by selling, and Hilda has sold nothing.' },
          { id: 'b', text: 'The papers say that prices may fall again.',
            note: 'True, but that is a forecast, and the question is not about forecasts. Whether or not prices fall again, the case shows where the bills come from.' },
          { id: 'c', text: 'Three years of her living costs are held outside the funds, in cash and in bonds that repay before each year begins.' }
        ],
        answer: 'c' },
      reason: [
        'For {o:cashbuffer} you must be able to point to this: {needs:cashbuffer}. Hilda’s bills are not paid by selling funds. Three years of them are in a savings account and in two bonds that repay before the money is needed, so a fall cannot reach it.',
        'It is the question from Colm and Fay. {test:cashbuffer~covered} Here the money for the bills is in cash and in bonds that repay in time, so the answer is {a:T1.ready}.'
      ]
    },
    impression: {
      resembles: 'tm-meet-safe', first: 'tm-meet-live',
      text: [
        'Now the second look: does this case look like one you know? A retired person, a big fall and money taken out every month may bring Alan back first, and Alan’s case was {o:cashbuffer}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:T1}. Alan’s case has nothing like them: every one of his bills was paid by selling funds. Ruth and Gil’s case does: their bills were paid from a savings account, and none of the funds was sold. So the case this one really looks like is theirs, and the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'A fall is not the thing to look for, because falls come to everyone. Look for what a fall would catch: living costs paid by selling, a bill on a date with its money in shares, or a mix that has moved well away from its plan. Point to the words in the case that show it.',
      'Where the money is held decides it. Cash, and bonds that repay before the day, are out of a fall’s reach. Shares and funds are not. The same bill, the same person and the same fall can give {a:T1.datedbill} or {a:T1.ready}, and only where the money for the bill is held tells them apart.',
      'Money needed soon comes first. When a mix that has moved sits beside living costs paid by selling, or a bill on a date, the answer is the living costs or the bill.',
      'Count the cost in dollars before you act. {a:T1.ready} is a real answer: when what is needed is already out of reach, do nothing, and say why.',
      'A fixed sum taken from money that has shrunk is {a:D1.erosion}, and so is a sale that would bring a tax bill that new money could avoid. In both, the first question gives way to what comes out of the money every year.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the only one that asks you to decide something. If you want to, write one line you can keep.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. You can change them or write your own.',
    cues: [
      { cue: 'I live on money taken out of my investments', then: 'I work out one year of spending, and I check how many years of it are held in cash that I do not have to sell from.' },
      { cue: 'I know a bill of a set size is due on a set date', then: 'I look up where the money for it is held, and what that could be worth on the day.' },
      { cue: 'a statement shows how my money is split', then: 'I compare it with {t:mix} I chose, and I follow my written rule if it is outside its limits.' },
      { cue: 'someone offers me something to protect me from a fall in prices', then: 'I ask what in my own case a fall would catch, and if I can point to nothing, I leave it alone.' }
    ] }
]);
