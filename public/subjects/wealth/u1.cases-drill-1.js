// Wealth Preservation, Unit One: drill cases, first stage (the key's first question on its own, on clean cases) and the reverse
// items. Every drill case is new: none of them appears in a card. Each carries the words that decide the first question
// (cues.D1), the reason for its answer (reason.D1), and not: the nearest wrong family and why it fails here.
// These cases, with the route-stage cases and the return cases, are the bank that later units draw their earlier-unit items from.
// A reverse item gives the family and asks what you would expect to hear or find. Every option is what one of the five
// families sounds like; voice says which. In a gate unit a reverse item carries the family in `outcome`.

FC.cases('wealth', 'u1', [

  /* ---------- something taken out every year beside nothing in the case ---------- */
  { id: 'd-p-adviser', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'two yearly charges on a pension',
    text: "Rosa, 47, has £250,000 in a pension. Each year her adviser's firm takes 1.3% of it, £3,250, and the funds she holds take another 0.9%.",
    route: { D1: ['erosion'] },
    cues: { D1: ["Each year her adviser's firm takes 1.3% of it, £3,250", 'the funds she holds take another 0.9%'] },
    reason: { D1: 'Two charges come out of her money every year: {cue:D1}. Nothing is said about a fall in prices, a sale or a death.' },
    not: { outcome: 'timing', why: 'The case does not say that prices fell or that anything has to be sold. It is about sums that come out every year, whatever prices do.' } },

  { id: 'd-p-newjob', use: 'drill', tier: 'clean', setting: 'work', topic: 'a first pension at a new job',
    text: "Kofi, 29, started a new job in March and joined the pension scheme. £200 a month goes in, and he has not looked at the statement. He will not touch the money until he is in his sixties.",
    route: { D1: ['none'] },
    cues: { D1: ['£200 a month goes in', 'He will not touch the money until he is in his sixties'] },
    reason: { D1: 'The case shows money being put away for decades: {cue:D1}. Nothing in it comes out every year, no one thing is most of it, and no bill or death is mentioned. There are no words to point to for any of the four, so there is nothing to name.' },
    not: { outcome: 'erosion', why: 'The statement may well show a charge, but the case does not say so, and there are no words to point to.' } },

  /* ---------- a fall in prices beside one thing most of it depends on ---------- */
  { id: 'd-p-sellmonthly', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'monthly sales to live on, after a fall',
    text: "Hilda, 71, lives on shares from her £300,000: she sells £1,500 of them each month, with nothing in cash. In the autumn prices fell by 28%.",
    route: { D1: ['timing'] },
    cues: { D1: ['she sells £1,500 of them each month, with nothing in cash', 'prices fell by 28%'] },
    reason: { D1: 'The case shows bills met by selling holdings whose prices swing, with nothing set aside, in a falling market: {cue:D1}. Each sale takes place at a lower price than before.' },
    not: { outcome: 'erosion', why: 'The case does not say that the sum is too big for her money, or that it was fixed when her money was bigger. It says that prices fell while she must keep selling.' } },

  { id: 'd-p-startup', use: 'drill', tier: 'clean', setting: 'business', topic: 'a sale paid for in the buyer’s shares',
    text: "Tomasz sold his software firm and kept £700,000, but £560,000 of it is still shares in the buyer's company. The other £140,000 is in the bank.",
    route: { D1: ['shock'] },
    cues: { D1: "£560,000 of it is still shares in the buyer's company" },
    reason: { D1: 'One thing is most of what he has: {cue:D1}. £560,000 out of £700,000 is 80%, and the price of {t:share} in one company can move a long way in either direction.' },
    not: { outcome: 'timing', why: 'No fall in prices and no bill on a date are in the case. What it raises is that most of what he has rests on one company.' } },

  /* ---------- the handover beside nothing in the case ---------- */
  { id: 'd-p-will', use: 'drill', tier: 'clean', setting: 'family', topic: 'a will that names a brother who has died',
    text: "Arvid, 76, has a will that he wrote in 1998. It leaves everything to his brother, who died in 2019. Arvid has two grown-up children.",
    route: { D1: ['handover'] },
    cues: { D1: 'It leaves everything to his brother, who died in 2019' },
    reason: { D1: 'The case is about who gets the money when Arvid dies, and the paper is out of date: {cue:D1}. A brother who has died cannot receive it, and the children are not named.' },
    not: { outcome: 'erosion', why: 'Nothing comes out of his money every year in the case. What it raises is who gets the money, once, when he dies.' } },

  { id: 'd-p-quietpot', use: 'drill', tier: 'clean', setting: 'property', topic: 'a neighbour’s advice to do something clever',
    text: "Lorna, 57, owns her house outright and has £40,000 in savings. She has a steady job and no plans to stop work for another eleven years. At a dinner a neighbour tells her she should do something clever with her money, and she wonders whether she should.",
    route: { D1: ['none'] },
    cues: { D1: ['She has a steady job and no plans to stop work for another eleven years'] },
    reason: { D1: 'The case shows money being kept, and when it will be needed: {cue:D1}. Nothing comes out of it, rests on one thing, falls due on a date or changes hands. A neighbour’s advice is not a reason in the case.' },
    not: { outcome: 'handover', why: 'The case is not about a will, a form, a gift or a death. Owning a house outright does not raise a handover by itself.' } },

  /* ---------- something taken out every year beside a fall in prices ---------- */
  { id: 'd-p-taxbill', use: 'drill', tier: 'clean', setting: 'home', topic: 'tax on a bond fund’s interest, every year',
    text: "Naomi holds £90,000 in a fund of bonds in an ordinary account. It pays out about £2,700 of interest every year, and every year she pays £1,080 tax on that interest.",
    route: { D1: ['erosion'] },
    cues: { D1: 'every year she pays £1,080 tax on that interest' },
    reason: { D1: 'A tax bill comes out of the money every year: {cue:D1}. £1,080 is 40% of the £2,700 the fund pays out.' },
    not: { outcome: 'none', why: 'A case with nothing to name raises no charge, tax or sum spent. This one names a tax bill and says how much it is.' } },

  { id: 'd-p-school', use: 'drill', tier: 'clean', setting: 'family', topic: 'school fees due each September',
    text: "Maya must pay £15,000 in school fees on 1 September, and again each year for the next five years. The £15,000 she set aside for this September is in a fund of shares, and this year the fund is down 20%.",
    route: { D1: ['timing'] },
    cues: { D1: ['must pay £15,000 in school fees on 1 September', 'The £15,000 she set aside for this September is in a fund of shares'] },
    reason: { D1: 'The case shows a bill on a date, with the money for it held in {t:fund} that can fall: {cue:D1}. After a fall of 20%, her £15,000 is worth £12,000, so £3,000 is missing on the day.' },
    not: { outcome: 'erosion', why: 'The fees are money going out, but the case is about the day they fall due and what the money for them is held in, not about a sum that comes out whatever prices do.' } },

  /* ---------- reverse items: one for each family ---------- */
  { id: 'd-rev-erosion', use: 'drill', kind: 'reverse', outcome: 'erosion', expect: 'hear',
    options: [
      { text: '"The fund takes 1.2% every year, whatever it does."', voice: 'erosion' },
      { text: '"I need £1,700 a month from it, and prices have just dropped."', voice: 'timing' },
      { text: '"Most of what I have is in one company."', voice: 'shock' },
      { text: '"The form still names my first wife."', voice: 'handover' },
      { text: '"I don’t need it for thirty years, and nothing about it worries me."', voice: 'none' }
    ],
    why: 'It gives something that comes out every year, a percentage of the money, and says that it does not depend on how the fund did.' },

  { id: 'd-rev-timing', use: 'drill', kind: 'reverse', outcome: 'timing', expect: 'hear',
    options: [
      { text: '"My adviser takes 1.5% a year, and I never see it."', voice: 'erosion' },
      { text: '"The fees are due in September, and the money is in shares."', voice: 'timing' },
      { text: '"If that company fails, I lose most of what I have."', voice: 'shock' },
      { text: '"My will was written before my second marriage."', voice: 'handover' },
      { text: '"I won’t touch it until I retire in thirty years."', voice: 'none' }
    ],
    why: 'It gives a date on which money is needed, with the money held in shares, so that a fall in prices would catch it.' },

  { id: 'd-rev-shock', use: 'drill', kind: 'reverse', outcome: 'shock', expect: 'find',
    options: [
      { text: 'A percentage taken out of the money each year by the firm that runs the fund.', voice: 'erosion' },
      { text: 'A bill for a known sum on a known date, paid from shares that have just fallen.', voice: 'timing' },
      { text: 'A single company, building or business that is most of everything the person has.', voice: 'shock' },
      { text: 'A form signed twenty years ago that names someone the person no longer lives with.', voice: 'handover' },
      { text: 'A saver with a steady job who will not need the money for decades and has no other worries.', voice: 'none' }
    ],
    why: 'That detail is one thing that is most of what the person has: if it failed, the money would fail with it.' },

  { id: 'd-rev-handover', use: 'drill', kind: 'reverse', outcome: 'handover', expect: 'find',
    options: [
      { text: 'A tax bill on investment income that arrives every year.', voice: 'erosion' },
      { text: 'A split that has moved from half shares to three-quarters, three years before retirement.', voice: 'timing' },
      { text: 'A lender who can demand a £300,000 loan back at any time.', voice: 'shock' },
      { text: 'A will that leaves everything to a brother who died years ago.', voice: 'handover' },
      { text: 'A saver whose money is simply being kept, who asks whether there is anything she should do.', voice: 'none' }
    ],
    why: 'The will is a paper about who gets the money when its owner dies. The loss would come once, at the handover.' },

  { id: 'd-rev-none', use: 'drill', kind: 'reverse', outcome: 'none', expect: 'hear',
    options: [
      { text: '"My funds cost 1.4% a year."', voice: 'erosion' },
      { text: '"My daughter’s fees are due in September, and it’s all in shares."', voice: 'timing' },
      { text: '"The whole farm is in my name, and so is the lawsuit."', voice: 'shock' },
      { text: '"I have no idea who the pension form names."', voice: 'handover' },
      { text: '"I put some in every month, I don’t need it for decades, and I’ve no complaints."', voice: 'none' }
    ],
    why: 'It ties the money to years of putting it away, and says nothing about a charge, a tax bill, a bill on a date, one big thing or a handover.' }
]);
