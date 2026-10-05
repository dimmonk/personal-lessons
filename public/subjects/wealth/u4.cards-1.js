// Wealth Preservation, Unit Four, part one (first half): the opening card, the one idea every name in this unit leans on, the first
// name (living costs paid by selling investments that can fall), and the lens.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings). Key wording is never
// typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of the first question and its answers, the preview map, the
// heading of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the "also called" sentence,
// the stem of every commit prompt, the heading of an again or portrait card, and, on a term card, the word and its meaning.

FC.cards('wealth', 'u4', [

  { id: 'orient', kind: 'orient',
    h: 'A fall in prices is not the thing to look for',
    canDo: 'By the end of the unit you can read a short account of someone’s money in which a fall in prices could do harm, and say what the harm is, or say that there is none. You will be able to point to the words in the account that tell you, to name what to do about it, and to say when the right thing to do is nothing.',
    everyday: [
      'Picture four people who each own the same kind of investments. In one spring, prices fall by a quarter.',
      'Mo lives on what he gets by selling a little of his funds every month. In that spring each sale takes a bigger slice of the funds than it would have a year before, and what he sold is not there when prices come back.',
      'Jade has a payment of £24,000 due on 1 June, and the money for it is in shares. In March it is worth £18,000, and the payment has not changed.',
      'Lukas chose a plan years ago and has not looked at it since. After years of rises, most of his money is in shares, far more than he chose. The fall takes a bigger bite than he agreed to take.',
      'A fourth person, Anneke, also lives on her money. But she holds three years of spending in a savings account, and she paid every bill from it that spring. She sold nothing.',
      'The fall was the same for all four. What differed was what each of them had waiting for the money. Three of them were caught, in three different ways, and the fourth was not caught at all. A fall in prices is not the thing to look for, because falls come to everyone. The thing to look for is what a fall would catch, and this unit teaches you to tell the four apart before you think about any cure.'
    ],
    add: [
      'Every case in this unit has already been given the first answer: {a:D1.timing}. What you learn here is the next question, which asks what the fall would do. Each of the four answers has its own name, and its own thing to do about it. One of the four names says that nothing needs doing.',
      'Every number in this unit is an example, chosen to show how an idea works. None of them is a forecast, and nobody can say what prices will do next.'
    ],
    map: { branch: 'timing' } },

  /* ---------- The one idea every name leans on ---------- */
  { id: 'term-sequence', kind: 'term', term: 'sequence',
    h: 'Why the order of good and bad years matters',
    link: 'Every name in this unit comes from one idea about falls in prices, so it is taught first, with numbers, before the first name.',
    case: 'tm-seq',
    plain: [
      'Look at Ingrid first. She takes £25,000 out on the first day of each year. Year one: £500,000 less £25,000 is £475,000, and a fall of 20% leaves £380,000. Year two: £25,000 out leaves £355,000, and a fall of 10% leaves £319,500. Year three: £25,000 out leaves £294,500, and a rise of 10% takes it to £323,950. Year four: £25,000 out leaves £298,950, and a rise of 20% takes it to £358,740.',
      'Paul has the same four changes in the opposite order, and takes the same £25,000 each year. Year one: £475,000, up 20%, is £570,000. Year two: £545,000, up 10%, is £599,500. Year three: £574,500, down 10%, is £517,050. Year four: £492,050, down 20%, is £393,640.',
      'Ingrid ends with £358,740 and Paul with £393,640, which is £34,900 more. The fund was the same, the four yearly changes were the same, and the £25,000 a year was the same. Only the order differed.',
      'The order matters only because money was being taken out. If neither of them had taken anything out, both would have ended with £475,200, because a fall of 20%, a fall of 10%, a rise of 10% and a rise of 20% multiply to the same number in any order. What changes the result is selling during the falls. Ingrid’s sales in years two and three came after the falls, at low prices, so each £25,000 took a bigger slice of the fund, and that slice was not there when prices rose. Paul’s sales in years two and three came after the rises, at high prices.'
    ],
    after: 'This is {t:sequence}. It is not about whether prices fall, because falls come in both stories. It is about whether a fall comes while money is being taken out. If nothing is being taken out, or if what is needed is already out of the fund’s reach, the order does not matter. Each name in this unit is a different way of being caught by it, or of not being caught.' },

  /* ---------- The first name: living costs paid by selling investments that can fall ---------- */
  { id: 'meet-cashbuffer', kind: 'meet', outcome: 'cashbuffer',     // heading is the outcome's plain words, from the key
    link: 'The last card showed what a fall does when money is being taken out. Here is a whole case in which that is happening.',
    case: 'tm-meet-live', mark: 'T1',
    strip: [
      'There is one person, Alan, and one sum: £600,000, all in funds of shares, whose prices can fall.',
      'His living costs, £2,000 a month, are paid by selling some of those funds.',
      'Nothing is set aside in cash to spend from while prices are down.',
      'Prices have fallen by 30%, and the bills are the same as before.'
    ],
    explain: [
      'What you are shown is not a charge, a tax bill or one company going wrong. It is where Alan’s living money comes from. Every month he must sell some of his funds to pay for it, and this year each sale takes place at a price 30% lower than before the fall.',
      'Here are the numbers. Call one unit of the funds £10 before the fall and £7 after it. A year of living costs is £24,000. Before the fall that means selling 2,400 units. After it, the same £24,000 means selling about 3,430 units, which is about 1,030 more units for the same year of living. Those extra units are not in the funds when prices come back. This is the harm that {t:sequence} describes, and Alan’s case shows it as it happens.',
      'The fall does not hurt on its own. A fall does nothing to a person who is selling nothing. It hurts the person who has to sell on the day, because bills come on dates that the market does not care about.',
      'Here is what the alternative would have been. If Alan had put three years of spending aside in cash, £72,000, in a separate savings account, he would have paid this year’s £24,000 from it and sold no units at all. The other £528,000 would have stayed in the funds while prices were down. The rule for using the cash matters as much as the cash. In a year when prices are down, pay the bills from the cash. In a year when prices are up, sell some of the funds to fill the cash up again. If the cash were refilled in a down year, the sale would only be put off, and it would still happen at a low price.',
      'The cash has a cost. It grows more slowly than shares are expected to. If shares grew 5% a year and a savings account paid 1%, £72,000 held in cash would earn £2,880 a year less than the same money in shares, because 4% of £72,000 is £2,880. Those rates are examples, not promises. Three years is not a guarantee either: a fall can last longer than the cash does. What the cash buys is time for prices to recover, and it does not make the funds safe.'
    ],
    feature: { step: 'T1', option: 'livingcosts' },
    name: [
      'The name for this is {o:cashbuffer}. It is a name for what to do, not for what the case shows: "years" is how long the cash would last, "spending" is what it pays for, and "cash" is where it is held, away from the investments.',
      'The name says nothing about whether prices will fall. It says what would happen if they did, and what to have in place before they do.'
    ] },

  { id: 'again-cashbuffer', kind: 'again', outcome: 'cashbuffer',
    link: 'Alan’s case gave you what to point to: {needs:cashbuffer}. Here is a second case with a different story.',
    first: 'tm-meet-live', second: 'tm-again-live', step: 'T1',
    instruction: 'Find what the two cases share. Ignore the story (a retirement, an illness) and ignore the size of the sums. Look at one thing only: where the money for the living costs comes from.',
    prompt: { kind: 'phrase', answer: 'she gets it by selling units of the fund on the first of each month, with no cash set aside' },
    shared: [
      'Both people need money every month and have no pay to get it from. Both hold everything in funds of shares. Both raise each month’s money by selling some of the funds, and neither has set any cash aside to spend from instead.',
      'Here are Noor’s numbers. Her £1,800 a month is £21,600 a year. With a unit at £10, that is 2,160 units. After a fall of 25%, a unit is £7.50, and £21,600 is 2,880 units: 720 more units, a third more, for the same year of living. As with Alan, the extra units are not in the fund when prices return.',
      'The two stories share nothing else. So this is not about retirement or about illness. It holds wherever the bills are met by selling something whose price can fall, with nothing set aside. That is what {o:cashbuffer} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a retirement, an illness, a wedding, a tax bill, a pension. The layer underneath is what a fall in prices would catch.',
      'The four names belong to the layer underneath. A case about a retired couple can be any of them, and so can a case about a school fee or a flat. Alan and Noor have different stories and the same answer.',
      'From here on, the cases change their stories on purpose. Sometimes two cases will share a person and a fall in prices and differ only underneath. When that happens, the shared story is there to show you that it decides nothing.',
      'Two more things change on purpose. One is size: a few thousand pounds and a few million can be the same kind of case. The other is whether a fall would catch anything at all. In some cases what is needed soon is already out of the fall’s reach, and one of the four names is for exactly that. Seeing it is part of the skill.'
    ],
    fixed: ['what a fall in prices would catch, which is what the question is about: {q:T1}'],
    varies: ['the people', 'the story', 'the size of the sums', 'how far prices have fallen', 'whether a fall would catch anything at all'] }
]);
