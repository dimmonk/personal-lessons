// Wealth Preservation, Unit One, part one (first half): the opening card, the two words the first family leans on, and the
// first family (something taken out of the money every year). A quick lesson (lesson standard section 19): one meet card and one
// check for each family, and nothing else for it. Cards are structured data, not HTML. A text field is one paragraph (a string)
// or several (an array of strings). Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`, and the
// family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card, the key's question and
// answer on a meet card, the stem of every commit prompt, and, on a term card, the word and its meaning.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one short
// sentence of why), then the name (lesson standard section 20).

FC.cards('wealth', 'u1', [

  { id: 'orient-gate', kind: 'orient',
    h: 'Before you change anything about your money, find what could lose it',
    canDo: 'Before you buy a fix for your money, move it, or take anyone’s advice about it, find out what could actually lose it. It is always one of five things, and each one needs a different fix.',
    everyday: [
      'You have probably heard some version of these four stories.',
      'A man in his fifties reads his 401(k) statement for the first time in twenty years. The fund has been taking 1.7% of his money every year to run it: $3,400 a year on $200,000, whether the fund did well or badly.',
      'A farmer is sued after a worker is hurt on her land. Her farm, her house and her savings are all in her own name, and the demand for payment is bigger than her insurance.',
      'Two parents sell shares in a stock-market crash to pay their son’s college tuition, because the bill is due in September and the money was in shares. The prices are back up the next year. What they sold is not.',
      'A man dies and the life insurance from his job goes to his first wife, because the form he signed twenty years ago still names her. His widow gets nothing from it.',
      'Each loses money in a different way: a little every year, all at once through one thing, in a fall in prices, or when the money is passed on. A fifth story is as common as any of them: money that is simply sitting there, with nothing that could lose it. Most people reach for a fix before they know which of these they are dealing with. This unit teaches you to tell them apart first.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- Two words the stories lean on ---------- */
  { id: 'term-pot', kind: 'term', term: 'pot',
    h: 'What counts as your money',
    link: 'One word first, so that every story means the same thing by it.',
    case: 'w-t-pot',
    plain: [
      'Add up everything Nadia owns: $40,000 + $150,000 + $220,000 + $60,000 = $470,000. That is what she has built up and wants to keep. Her $5,000 a month in pay is not in it: it arrives and it is spent.'
    ],
    after: 'From here on that total is {t:pot}. Every question in this unit is about it, never about the pay that arrives each month.' },

  { id: 'term-fund', kind: 'term', term: 'fund',
    h: 'A basket of investments bought in one go',
    link: 'The second word is about how most people end up owning shares without choosing them one by one.',
    case: 'w-t-fund',
    plain: [
      'Lena has not chosen 500 companies. She has bought one thing that holds a little of each, so if a few do badly the rest cover for them.',
      'Two numbers matter. The first is the fee: $20 a year, taken whether the fund does well or badly, so it is easy never to see it. The second is the price: when most of the companies fall, the fund falls with them, and 20% off $10,000 is $2,000.'
    ],
    after: 'This is {t:fund}. Most 401(k)s hold one, so a yearly fee, and a price that drops when the market drops, show up in many stories.' },

  /* ---------- The first answer: money going out every year ---------- */
  { id: 'meet-erosion', kind: 'meet', family: 'erosion',     // heading is the name itself, from the key
    link: 'First: the answer that is easiest to miss, because nothing dramatic ever happens in it.',
    case: 'w-fee', mark: 'D1',
    explain: [
      'Colin has paid this fee for twenty years without knowing. 1.7% of $200,000 is $3,400. Taken once, that is hardly noticeable. Taken every year for twenty years it is $68,000, before counting the growth that money would have earned if it had stayed. Nobody sends a bill, which is why it goes unnoticed.',
      'Money can leave like this in three forms: a fee, paid to the firm that runs your investments or to an adviser; tax, on investments that pay out income every year; and a sum you take out to spend. None is wrong in itself. The only question here is whether money is leaving.'
    ],
    spot: [
      { do: 'Find the sum that leaves every year: Colin’s 1.7% fee.', why: 'It comes out again next year, and the year after.' },
      { do: 'Check that it leaves whatever prices do: “whether prices rose or fell”.', why: 'A sum that only appears when prices fall is a different answer.' },
      { do: 'Work out the yearly amount: 1.7% of $200,000 is $3,400.', why: 'A small percentage hides a big sum.' },
      { do: 'Check nothing else is going on: no big sale, no bill, no death.', why: 'Then the yearly sum is all there is to name.' }
    ],
    feature: { step: 'D1', option: 'erosion' },
    name: 'This is {a:D1.erosion}. It does not say the sum is too big or unfair, only that money leaves every year.' },

  { id: 'check-erosion', kind: 'check', after: 'erosion',
    case: 'w-spendout',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show money coming out of Hal’s savings every year? Tap them.',
           answer: 'Every year he takes $25,000 out of it to spend on living' } }
]);
