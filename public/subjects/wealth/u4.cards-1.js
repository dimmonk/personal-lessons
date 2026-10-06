// Wealth Preservation, Unit Four, part one (first piece): the opening card, the one idea every name in this unit leans on, and the
// first name (living costs paid by selling investments that can fall) with its check.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings). Key wording is never
// typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of the first question and its answers, the preview map, the
// heading of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the "also called" sentence,
// the stem of every commit prompt, and, on a term card, the word and its meaning.

FC.cards('wealth', 'u4', [

  { id: 'orient', kind: 'orient',
    h: 'A fall in prices is not the thing to look for',
    canDo: 'By the end of the unit you can read a short account of someone’s money in which a fall in prices could do harm, and say what the harm is, or say that there is none. You can point to the words that tell you, name what to do about it, and say when the right thing to do is nothing.',
    everyday: [
      'Picture four people who each own the same kind of investments. In one spring, prices fall by a quarter.',
      'Mo lives on what he gets by selling a little of his funds every month. Each sale now takes a bigger slice of the funds than it would have a year before, and what he sold is not there when prices come back.',
      'Jade has a payment of $24,000 due on June 1, and the money for it is in shares. In March it is worth $18,000, and the payment has not changed.',
      'Lukas chose a plan years ago and has not looked at it since. After years of rises, most of his money is in shares, far more than he chose. The fall takes a bigger bite than he agreed to take.',
      'Anneke also lives on her money. But she holds three years of spending in a savings account, and she paid every bill from it that spring. She sold nothing.',
      'The fall was the same for all four. What differed was what each of them had waiting for the money. Three were caught, in three different ways, and the fourth was not caught at all. Falls come to everyone, so the thing to look for is what a fall would catch.'
    ],
    add: 'Every number in this unit is an example, chosen to show how an idea works. None of them is a forecast, and nobody can say what prices will do next.',
    map: { branch: 'timing' } },

  /* ---------- The one idea every name leans on ---------- */
  { id: 'term-sequence', kind: 'term', term: 'sequence',
    h: 'Why the order of good and bad years matters',
    link: 'Every name in this unit comes from one idea about falls in prices, so it comes first, with numbers.',
    case: 'tm-seq',
    plain: [
      'Ingrid takes $25,000 out on the first day of each year. Over four years her fund changes by down 20%, down 10%, up 10%, up 20%, in that order, and she ends with $358,740. Paul takes the same $25,000 and gets the same four changes with the rises first. He ends with $393,640, which is $34,900 more.',
      'The only difference is the order. It matters only because money was being taken out: Ingrid’s sales came after the falls, so each $25,000 took a bigger slice of the fund, and that slice was not there when prices rose. If neither had taken anything out, both would have ended with $475,200.'
    ],
    after: 'This is {t:sequence}. It is not about whether prices fall, because falls come in both stories. It is about whether a fall comes while money is being taken out. Each name in this unit is a different way of being caught by it, or of not being caught.' },

  /* ---------- The first name: living costs paid by selling investments that can fall ---------- */
  { id: 'meet-cashbuffer', kind: 'meet', outcome: 'cashbuffer',     // heading is the outcome's plain words, from the key
    link: 'The last card showed what a fall does when money is being taken out. Here is a whole case in which that is happening.',
    case: 'tm-meet-live', mark: 'T1',
    strip: [
      'Alan’s living costs, $2,000 a month, are paid by selling some of his $600,000 of funds of shares, whose prices can fall. Nothing is set aside in cash.',
      'Prices have fallen by 30%, and the bills are the same as before.'
    ],
    explain: [
      'Every month Alan must sell some funds to pay his bills, and each sale is made at a price 30% lower than before the fall. Call one unit of the funds $10 before the fall and $7 after it. A year of living costs, $24,000, meant selling 2,400 units. Now it means about 3,430, which is about 1,030 more for the same year of living. Those units are not in the funds when prices come back. This is the harm that {t:sequence} describes.',
      'A fall does nothing to a person who sells nothing. It hurts the person who has to sell on the day, because bills come on dates that the market does not care about.',
      'The alternative is three years of spending, $72,000, in a separate savings account. In a year when prices are down, pay the bills from it and sell no funds. In a year when prices are up, sell some funds to fill it up again. The cash has a cost: if shares grew 5% a year and the account paid 1%, $72,000 in cash gives up $2,880 a year. Those rates are examples. What the cash buys is time for prices to recover, and a fall that lasts longer than the cash still hurts.'
    ],
    feature: { step: 'T1', option: 'livingcosts' },
    name: 'The name for this is {o:cashbuffer}. It names what to do: years of spending held in cash, away from the investments.',
    act: 'Ask: "If prices fell by a third this year, where would next year’s bills come from?" If the answer is "I would sell some of what has fallen", work out one year of spending from your bank statements, and decide how many years of it to hold in cash. Keep it in a savings account at an FDIC-insured bank, apart from the investments, and write down the rule for using it: spend from it in a down year, and fill it up again in an up year. Count the cost in dollars before you decide.' },

  { id: 'check-cashbuffer', kind: 'check', after: 'cashbuffer',
    case: 'tm-chk-live',
    ask: { type: 'phrase', step: 'T1', say: 'Which words show where the money for the living costs comes from? Tap them.',
           answer: 'Each month he sells $1,500 of the fund to pay his bills' } }
]);
