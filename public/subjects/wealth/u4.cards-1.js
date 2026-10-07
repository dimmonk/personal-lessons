// Wealth Preservation, Unit Four, part one (first piece): the opening card, the one idea every name in this unit leans on, and the
// first name (living costs paid by selling investments that can fall) with its check.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings). Key wording is never
// typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of the first question and its answers, the preview map, the
// heading of a meet card, the key's question and answer on a meet card, the "also called" sentence, the stem of every commit prompt,
// and, on a term card, the word and its meaning.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, an action and one short sentence
// of why), then the name, then what to do (act: steps too). Lesson standard section 20.

FC.cards('wealth', 'u4', [

  { id: 'orient', kind: 'orient',
    h: 'Before you protect your money from a fall, check what the fall would hit',
    canDo: 'Before you sell, buy “protection” or panic because prices fell, check what the fall would actually hit. It is one of three things, or nothing at all, and each needs a different fix, including doing nothing.',
    everyday: [
      'Four people own much the same investments. One spring, prices drop by a quarter.',
      'Mo lives on his investments. Every month he sells a little to pay his bills, and now each sale takes a bigger slice of what he owns. What he sold is not there when prices come back.',
      'Jade has $24,000 to pay on June 1, and the money for it is in shares. In March it is worth $18,000. The bill is still $24,000.',
      'Lukas chose a plan years ago and never looked at it again. After years of rises, most of his money is in shares, far more than he chose. The fall takes a bigger bite than he agreed to.',
      'Anneke also lives on her investments. But she keeps three years of spending in a savings account, and she paid every bill from it that spring. She sold nothing.',
      'The fall was the same for all four. Three were hit, each in a different way, and Anneke was not hit at all. So do not ask “did prices fall?” Ask what the fall would hit.'
    ],
    add: 'Every number in this unit is an example to show how an idea works. None of them is a forecast, and nobody can say what prices will do next.',
    map: { branch: 'timing' } },

  /* ---------- The one idea every name leans on ---------- */
  { id: 'term-sequence', kind: 'term', term: 'sequence',
    h: 'Why the order of good and bad years matters',
    link: 'One idea sits under every name in this unit, so here it is first, with numbers.',
    case: 'tm-seq',
    plain: [
      'Ingrid ends with $358,740. Paul ends with $393,640, which is $34,900 more. They had the same money, the same fund and the same withdrawals. Only the order of the good and bad years was different.',
      'Why? Ingrid took out her $25,000 after prices had fallen, so each withdrawal took a bigger slice of her fund, and that slice was gone when prices rose. If neither had taken anything out, both would have ended with $475,200.'
    ],
    after: 'This is {t:sequence}. It is not about whether prices fall, because both stories had falls. It is about whether a fall comes while you are taking money out. Each name in this unit is a way of being caught by it, or of not being caught.' },

  /* ---------- The first name: living costs paid by selling investments that can fall ---------- */
  { id: 'meet-cashbuffer', kind: 'meet', outcome: 'cashbuffer',     // heading is the outcome's name, from the key
    link: 'The last card showed what a fall does when money is being taken out. Here is someone it is happening to.',
    case: 'tm-meet-live', mark: 'T1',
    explain: [
      'Every month Alan sells funds to pay his bills, and prices are down 30%. Say one unit costs $10 before the fall and $7 now. A year of bills, $24,000, used to mean selling 2,400 units. Now it means about 3,430, which is 1,030 more for the same year of living, and those units are not in the funds when prices come back. That is {t:sequence}.',
      'A fall costs nothing to someone who sells nothing, so the fix is cash for the bills. Alan could keep three years of spending, $72,000, in a separate savings account. In a down year he pays from it and sells no funds, and in an up year he sells some funds to fill it up again. Cash has a cost: if shares grew 5% a year and the account paid 1%, $72,000 in cash gives up $2,880 a year. Those rates are examples. What the cash buys is time for prices to recover, and a fall that outlasts the cash still hurts.'
    ],
    spot: [
      { do: 'Find where the bills are paid from: Alan sells about $2,000 of funds on the first of every month.', why: 'Bills paid by selling are what a fall catches.' },
      { do: 'Check whether anything is set aside to spend instead: Alan keeps no cash.', why: 'Cash is what lets you leave the funds alone in a down year.' },
      { do: 'Check that the money can fall: all of Alan’s is in funds of shares.', why: 'Money in cash, or in {t:bond} that repays on time, is out of a fall’s reach.' }
    ],
    feature: { step: 'T1', option: 'livingcosts' },
    name: 'This is {o:cashbuffer}. The fix is cash for the bills, kept apart from the investments.',
    act: [
      { do: 'Ask: "If prices fell by a third this year, where would next year’s bills come from?"', why: 'If the answer is "I would sell some of what has fallen", you are in Alan’s position.' },
      { do: 'Add up one year of spending from your bank statements.', why: 'That is the number the cash has to cover.' },
      { do: 'Decide how many years of it to hold in cash, and count the cost in dollars.', why: 'Cash earns less than shares in a good year, so more years cost more.' },
      { do: 'Keep it in a savings account at an FDIC-insured bank, apart from the investments.', why: 'Then a fall cannot reach it.' },
      { do: 'Write the rule: spend from it in a down year, and fill it up again in an up year.', why: 'A rule written now beats a decision made in a panic.' }
    ] },

  { id: 'check-cashbuffer', kind: 'check', after: 'cashbuffer',
    case: 'tm-chk-live',
    ask: { type: 'phrase', step: 'T1', say: 'Which words show how Dimitri pays his bills? Tap them.',
           answer: 'Each month he sells $1,500 of the fund to pay his bills' } }
]);
