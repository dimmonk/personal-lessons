// Wealth Preservation, Unit Four, part two (close): the one whole case, and the cards that close the unit after the drill (recap, plan).
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('wealth', 'u4', [

  { id: 'worked-hilda', kind: 'worked',
    h: 'One whole story, where the start points the wrong way',
    link: 'Watch one story worked through, in the order the questions are asked. The most noticeable thing in it is not what decides it, so read to the end. You are not asked anything until then.',
    case: 'tm-w-hilda',
    steps: [
      { step: 'D1',
        reason: 'Hilda lives on her money and prices have fallen: {cue:D1}. A fall could catch what she lives on, so the answer is {a:D1.timing}. Nothing in the story is a yearly cost, one big holding, or a death or a gift.' },
      { step: 'T1',
        reason: 'Now look at where her bills are paid from: {cue:T1}. Three years of them sit in a savings account and in bonds that repay before each year begins. She has sold nothing since prices fell, and nothing has to be sold.' }
    ],
    hold: {
      neighbor: 'cashbuffer',
      prompt: { kind: 'reason',
        lead: 'Hilda lives on her money and prices have just fallen by more than a quarter. That is Alan’s story, so it can look like {o:cashbuffer}.',
        choices: [
          { id: 'a', text: 'She lives on $2,500 a month from her money, and prices fell 28% last year.',
            note: 'True, and it is why this looks like {o:cashbuffer}. But that name needs the bills paid by selling, and Hilda has sold nothing.' },
          { id: 'b', text: 'The papers say prices may fall again, which could hurt anyone living on money.',
            note: 'True, but that is a forecast, and nobody can say what prices will do. What decides it is where her bills are paid from.' },
          { id: 'c', text: 'Three years of her bills are held outside the funds, in cash and bonds that repay in time.' }
        ],
        answer: 'c' },
      reason: [
        'For {o:cashbuffer}, the story would have to show this: {needs:cashbuffer}. Hilda’s bills are not paid by selling funds: three years of them sit in a savings account and in two bonds that repay before the money is needed, so a fall cannot reach them.',
        'Ask the question from Colm and Fay’s story. {test:cashbuffer~covered} Hilda’s bill money is in cash and in bonds that repay in time, so the answer is {a:T1.ready}.'
      ]
    },
    impression: {
      resembles: 'tm-meet-safe', first: 'tm-meet-live',
      text: [
        'A second look: does this remind you of a story you know? A retired person, a big fall and money taken out every month may bring Alan back first, and Alan’s story was {o:cashbuffer}. So the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words that answer it. They are {cue:T1}. Alan’s story has nothing like them: every one of his bills was paid by selling funds. Ruth and Gil’s story does: their bills were paid from a savings account, and no fund was sold. So Hilda’s story is really like theirs, and the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'A fall is not the thing to look for, because falls come to everyone. Look for what a fall would catch: bills paid by selling, a bill on a date with its money in shares, or a mix that has drifted far from its plan. Find the words in the story that show it.',
      'Where the money is held decides it. Cash, and bonds that repay before the day, are out of a fall’s reach. Shares and funds are not. The same bill, person and fall can give {o:ladder} or {o:covered}, and only where the bill’s money sits tells them apart.',
      'Money you need soon comes first. When a drifted mix sits beside bills paid by selling, or beside a bill on a date, the bills win.',
      'Count the cost in dollars before you act. {o:covered} is a real answer: when what you need is already out of a fall’s reach, do nothing, and say why.',
      'A sum that never changes while the money shrinks, and a sale whose tax bill new money could avoid, both belong to {a:D1.erosion}. For those, the first question wins over the fall.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the only one that asks you to decide something. If you want to, write one line you can keep.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. These are examples to start from. You can change them or write your own.',
    cues: [
      { cue: 'I live on money taken out of my investments', then: 'I work out one year of spending, and I check how many years of it sit in cash that I do not have to sell from.' },
      { cue: 'I know a bill of a set size is due on a set date', then: 'I look up where the money for it is held, and what it could be worth on the day.' },
      { cue: 'a statement shows how my money is split', then: 'I compare it with the plan I chose, and I follow my written rule if it is outside its limits.' },
      { cue: 'someone offers me something to protect me from a fall in prices', then: 'I ask what in my own situation a fall would hit, and if I cannot name anything, I leave it alone.' }
    ] }
]);
