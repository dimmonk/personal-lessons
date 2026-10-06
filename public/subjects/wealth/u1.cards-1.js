// Wealth Preservation, Unit One, part one (first half): the opening card, the two words the first family leans on, and the
// first family (something taken out of the money every year). A quick lesson (lesson standard section 19): one meet card and one
// check for each family, and nothing else for it. Cards are structured data, not HTML. A text field is one paragraph (a string)
// or several (an array of strings). Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`, and the
// family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card, "what you must be able
// to point to", the key's question and answer on a meet card, the stem of every commit prompt, and, on a term card, the word and
// its meaning.

FC.cards('wealth', 'u1', [

  { id: 'orient-gate', kind: 'orient',
    h: 'Before any fix: where could the money be lost?',
    canDo: 'After this unit you can read a short account of someone’s savings, investments or plans, and say what, if anything, could lose their money, pointing to the words that tell you. Sometimes the honest answer is that nothing in the account could lose it, and you can say that too.',
    everyday: [
      'You have probably heard some version of these four stories.',
      'A man in his fifties reads his 401(k) statement for the first time in twenty years. The fund has been taking 1.7% of his money every year to run it: $3,400 a year on $200,000, whether the fund did well or badly.',
      'A farmer is sued after a worker is hurt on her land. Her farm, her house and her savings are all in her own name, and the demand for payment is bigger than her insurance.',
      'Two parents sell shares in a stock-market crash to pay their son’s college tuition, because the bill is due in September and the money was in shares. The prices are back up the next year. What they sold is not.',
      'A man dies and the life insurance from his job goes to his first wife, because the form he signed twenty years ago still names her. His widow gets nothing from it.',
      'All four lose money, each in a different way: a little every year, all at once through one thing, in a fall in prices, and at the handover. A fifth case is as common as any of them: money that is simply sitting there, with nothing in it that could lose it. People often reach for a cure before they know which of these they are looking at. A case is a short account of someone’s money, and this unit teaches you to tell the five apart before you think about any cure.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- Two words the cases lean on ---------- */
  { id: 'term-pot', kind: 'term', term: 'pot',
    h: 'All the money someone has built up',
    link: 'One word first, so that every case means the same thing by it.',
    case: 'w-t-pot',
    plain: [
      'Add up everything Nadia owns and the total is $470,000. That is what she has built up and wants to keep. The $5,000 a month she earns is not in it: it arrives and it is spent.'
    ],
    after: 'From here on that total is {t:pot}. The question is always about it, never about the pay that arrives each month.' },

  { id: 'term-fund', kind: 'term', term: 'fund',
    h: 'A basket of investments bought in one go',
    link: 'The second word is about how most people end up owning shares without choosing them one by one.',
    case: 'w-t-fund',
    plain: [
      'Lena has not chosen 500 companies. She has bought one thing that holds a little of each. If a few of the companies do badly the rest cover for them, so the price of the whole basket moves less than any single company would.',
      'Two numbers matter. The first is the charge, $20 a year, taken out of her money whether the basket does well or badly, so it is easy never to see it. The second is the price: when most of what is in the basket falls, the basket falls with it, and 20% off $10,000 is $2,000.'
    ],
    after: 'This is {t:fund}. Most 401(k)s and most savings in shares are held this way, so a charge taken every year, and a price that falls when the market falls, turn up in many cases.' },

  /* ---------- The first family: something taken out of it every year ---------- */
  { id: 'meet-erosion', kind: 'meet', family: 'erosion',     // heading is the family's plain words, from the key
    link: 'The first question has five answers. Start with the one that is easiest to miss, because nothing dramatic ever happens in it.',
    case: 'w-fee', mark: 'D1',
    strip: [
      'One person, Colin, and one sum: $200,000 in {t:fund} in his 401(k).',
      'A charge of 1.7% comes out of it every year, taken by the firm that runs the fund, whether the fund did well or badly.',
      'Nothing else is in the case: no single event, no sale, no bill, no death.'
    ],
    explain: [
      'What you are shown is money leaving slowly and on schedule. 1.7% of $200,000 is $3,400. Taken once, that is hardly noticeable. Taken every year for twenty years it is $68,000, before counting the growth that money would have earned if it had stayed. Nobody sends a bill and nobody phones, which is why it is easy to miss.',
      'Money can go out this way in three ways: as a charge, paid to the firm that runs the investments or to an adviser; as tax, on investments that pay out income every year; and as a sum the owner takes out to spend. None is wrong in itself. The first question only asks where the money could be lost.'
    ],
    feature: { step: 'D1', option: 'erosion' },
    name: 'The answer, and the name, is {a:D1.erosion}. "Taken out" means the money leaves and is no longer there to grow. The name says nothing about how large the sum is, or whether it is fair.' },

  { id: 'check-erosion', kind: 'check', after: 'erosion',
    case: 'w-spendout',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show something that comes out of the money every year? Tap them.',
           answer: 'Every year he takes $25,000 out of it to spend on living' } }
]);
