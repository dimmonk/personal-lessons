// Wealth Preservation, Unit One, part one (first half): the opening card, the three words the first family leans on, and the
// first family (something taken out of the money every year). Cards are structured data, not HTML. A text field is one paragraph
// (a string) or several (an array of strings). Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`, and the
// family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card, "what you must be able
// to point to", the key's question and answer on a meet card, the stem of every commit prompt, the heading of an again or
// portrait card, and, on a term card, the word and its meaning.

FC.cards('wealth', 'u1', [

  { id: 'orient-gate', kind: 'orient',
    h: 'Before any fix: where could the money be lost?',
    canDo: 'After this unit you can read a short account of someone’s savings, investments or plans, and say what, if anything, could lose their money. You will be able to point to the words in the account that tell you, and to say why it is not one of the other answers. Sometimes the honest answer is that nothing in the account could lose it, and you will be able to say that too.',
    everyday: [
      'You have probably heard some version of these four stories.',
      'A man in his fifties reads his 401(k) statement for the first time in twenty years. The fund has been taking 1.7% of his money every year to run it. On $200,000 that is $3,400 a year, taken whether the fund did well or badly.',
      'A farmer is sued after a worker is hurt on her land. Her farm, her house and her savings are all in her own name. The demand for payment is bigger than her insurance, and it could reach all of them.',
      'Two parents sell shares in a stock-market crash to pay their son’s college tuition, because the bill is due in September and the money was in shares. The prices are back up the next year. What they sold is not.',
      'A man dies and the life insurance from his job goes to his first wife, because the form he signed twenty years ago still names her. His widow gets nothing from it.',
      'All four lose money, and each loses it in a different way: a little every year, all at once through one thing, in a fall in prices, and at the handover. People often reach for a cure before they know which of these they are looking at. A fifth case is as common as any of them: money that is simply sitting there, with nothing in the account that could lose it. This unit teaches you to tell the five apart, before you think about any cure.'
    ],
    add: [
      'One word is used all the way through, so here it is once. A case is a short account of someone’s money: a few sentences, the sort of thing a friend tells you or you read in a letter. You put a short list of questions to a case, always in the same order. Each answer narrows down what the case can be, until one name is left.',
      'This unit teaches the first question and nothing after it. In this unit the answer to that question is also the name: it says what kind of case you are looking at. Four of the five answers lead on to a further question, which gives a finer name and says what to do. The fifth, {a:D1.none}, does not: there is nothing more to ask, and that is a result in its own right. In this subject, leaving money alone is as much an answer as changing something.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- Three words the cases lean on ---------- */
  { id: 'term-pot', kind: 'term', term: 'pot',
    h: 'All the money someone has built up',
    link: 'The question is about money that someone has built up and wants to keep. Before the question, one word, so that every case means the same thing by it.',
    case: 'w-t-pot',
    plain: [
      'Add up what Nadia owns: $40,000 in savings, $150,000 in her 401(k), a condo worth $220,000 with nothing owed on it, and her share of the bakery, $60,000. The total is $470,000. That is what she has built up and wants to keep, and it is what this subject is about: what could lose it.',
      'The $5,000 a month she earns is not in that total. It arrives and it is spent. The subject asks about what she already has, in every form it takes: cash, investments, a home, part of a business.'
    ],
    after: 'From here on, a person’s total of this kind is {t:pot}. When a case says "everything she has", or "his savings and his 401(k) and the condo", it means {t:pot}, and the question is always about it, never about the pay that arrives each month.' },

  { id: 'term-share', kind: 'term', term: 'share',
    h: 'A slice of a company',
    link: 'Most of the cases in this unit are about money invested in companies. Two words say how. The first is about owning part of one.',
    case: 'w-t-share',
    plain: [
      'Ravi now owns a very small slice of the supermarket company. If the company does well, people will pay more for slices of it, and if it does badly they will pay less. Nobody promises him a price.',
      'After one year his 100 slices could be sold for $520, which is $120 more than he paid. After the second year they could be sold for $300, which is $100 less than he paid and $220 less than a year before. What moved was the price people were willing to pay for a slice. It moves every day, in both directions, and that is the property of these slices that the rest of this unit keeps coming back to.'
    ],
    after: 'One of these slices is {t:share}. The price of a slice is what someone will pay for it today, and it can be far below what its owner paid.' },

  { id: 'term-fund', kind: 'term', term: 'fund',
    h: 'A basket of investments bought in one go',
    link: 'The second word is about how most people end up owning shares without choosing them one by one.',
    case: 'w-t-fund',
    plain: [
      'Lena has not chosen 500 companies. She has bought one thing, and that one thing holds a little of each. If a few of the companies do badly, the rest cover for them, so the price of the whole basket moves less than the price of any single company would.',
      'Two numbers matter here. The first is the charge: $20 a year, 0.2%, whether the basket does well or badly. It is taken out of her money, not paid by her separately, so it is easy never to see it. The second is the price: when most of what is in the basket falls, the basket falls with it, and 20% off $10,000 is $2,000.'
    ],
    after: 'This is {t:fund}. Funds are how most 401(k)s and most savings in shares are held, which is why a charge taken every year, and a price that falls when the market falls, turn up in so many cases.' },

  /* ---------- The first family: something taken out of it every year ---------- */
  { id: 'meet-erosion', kind: 'meet', family: 'erosion',     // heading is the family's plain words, from the key
    link: 'The first question has five answers. Start with the one that is easiest to miss, because nothing dramatic ever happens in it.',
    case: 'w-fee', mark: 'D1',
    strip: [
      'There is one person, Colin, and one sum: $200,000 in {t:fund} in his 401(k).',
      'Something comes out of that sum: a charge of 1.7%, taken by the firm that runs the fund.',
      'It comes out every year, and the case says it comes out whether the fund did well or badly.',
      'Nothing else is in the case: no single event, no sale, no bill, no death. It is a small sum, taken again and again.'
    ],
    explain: [
      'What you are shown is money leaving, slowly and on schedule. 1.7% of $200,000 is $3,400. Taken once, that is hardly noticeable. Taken every year for twenty years it is $68,000, and that is before counting the growth that $68,000 would have earned if it had stayed where it was.',
      'This is the first of the five, and nothing happens to the money on any one day in it. The loss is made of ordinary yearly amounts, which is why it is easy to miss. Nobody sends a bill, nobody phones, and a statement shows a balance that looks like a result.',
      'The money can go out in three ways, and Colin’s case shows only one. It can go out as a charge, paid to the company that runs the investments, or to an adviser, for choosing them. It can go out as tax, if the investments pay out income that is taxed every year. And it can go out as a sum the owner takes out to spend. What the three share is that each comes out of the money every year, for as long as the money is kept.',
      'A charge, a tax bill or a sum spent is not wrong in itself. Some charges pay for real work, some tax cannot be avoided, and spending is what the money is for. The first question only asks where the money could be lost. Whether it is being lost for no good reason is something the questions after it decide.'
    ],
    feature: { step: 'D1', option: 'erosion' },
    name: [
      'The answer, and the name of this kind of case, is {a:D1.erosion}. "Taken out" means the money leaves, and is no longer there to grow.',
      'The name says nothing about how large the sum is, or whether it is fair. It says only that the case is about something that comes out every year.'
    ] },

  { id: 'again-erosion', kind: 'again', family: 'erosion',
    link: 'The last card gave you what to point to: {needs:erosion}. Here is a second case with a completely different story, and this time the money goes out as tax.',
    first: 'w-fee', second: 'w-bondtax', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story, a 401(k) in one and a brokerage account in the other, and ignore who is paid. Look at one thing only: which words show something that comes out of the money every year?',
    prompt: { kind: 'phrase', answer: 'Every year she pays $528 tax on that interest' },
    shared: [
      'Both cases are made of the same thing: a sum of money, and something that comes out of it on a schedule. Colin’s $3,400 goes to the firm that runs his fund. Marta’s $528 goes to the IRS. Colin’s sum is a charge and Marta’s is tax, and the two are paid to different people for different reasons.',
      'Neither case is about a sale, a bill that falls due on a date, or a death. What they share is the shape: a sum that comes out every year, so that the money is smaller for it. That is what {a:D1.erosion} names, and it holds wherever money is kept and something is taken from it year after year.'
    ] },

  { id: 'lens-gate', kind: 'lens',
    h: 'The story does not decide the answer',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a 401(k), a farm, a tuition bill, a will. The layer underneath is what the money could be lost through. So far you have met one of the five things a case can raise: something that comes out every year. Four more are coming.',
      'The five answers belong to the layer underneath. A case about a 401(k) can be any of the five, and so can a case about a house. The story tells you very little about the answer.',
      'From here on, the cases change their stories on purpose. Sometimes two cases will share the same person and the same money and differ only underneath. When that happens, the shared story is there to show you that it decides nothing.',
      'Two more things change on purpose. One is size: a few hundred dollars and a few million can be the same kind of case. The other is whether anything is wrong at all. In some cases the thing that could lose the money is looked after, or does not matter, and in some the case raises nothing at all. Seeing that is part of the skill, and the fifth answer is for it.'
    ],
    fixed: ['what the money could be lost through, which is what the question is about: {q:D1}'],
    varies: ['the kind of money', 'the people', 'the size of the sums', 'how worried you would be', 'whether anything is wrong at all'] },

  { id: 'portrait-erosion', kind: 'portrait', family: 'erosion',
    link: 'You now know what to point to for {a:D1.erosion}. This card fills in the rest of the picture, so that you can spot it in real life, where nobody marks the words for you.',
    typical: [
      'There is a sum of money that stays put, and something comes out of it at regular times: every month, every quarter, every year.',
      'It comes out whatever the market did that year. A good year and a bad year take the same percentage, and a smaller sum only if the money is smaller.',
      'It is usually written as a percentage, such as 1.7%, or as a regular amount, and nobody has to do anything to make it happen. It simply keeps happening.',
      'It is small in any one year, and the next year it is the same kind of thing again. No day in the case is marked as the day it went wrong.',
      'The person is often not complaining. They may not know it is there until somebody reads the statement.',
      'All three of the ways it can go out belong here: a charge, a tax bill, and a sum the owner takes out to spend.'
    ],
    not: [
      'A big loss on a single day is not this kind. Neither is a fall in prices, even when the owner has to sell because of it. This kind is made of yearly amounts that come out whatever prices do.',
      'It is also not a verdict that the money is being wasted. A charge can pay for work that would not otherwise get done, and spending is what the money is for. The answer says only that the case is about something coming out every year.'
    ],
    wild: ['"It’s only 1%."', '"The fund takes its fee out of the price, so you never see it."', '"I haven’t read the statement in years."', '"My adviser takes a cut."', '"It’s taxed every year, whether I sell or not."'],
    self: 'In your own life you meet it in the lines of statements nobody reads: the yearly charge in a 401(k) fund’s details, the tax paperwork on an investment account, and the amount you take out of your savings each month.',
    ask: '"What comes out of this money every year, and who gets it?" If you can name a charge, a tax bill or a sum spent, and it comes out every year, you are probably looking at this kind.' },

  { id: 'check-erosion', kind: 'check', after: 'erosion',
    case: 'w-spendout',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show something that comes out of the money every year? Tap them.',
           answer: 'Every year he takes $25,000 out of it to spend on living' } }
]);
