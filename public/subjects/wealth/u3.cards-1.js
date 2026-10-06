// Wealth Preservation, Unit Three, part one (first half): the opening card, then the first two answers, one holding that the person
// is free to sell and one that a rule stops them selling, and their look-alike pair. Cards are structured data, not HTML. A text
// field is one paragraph (a string) or several (an array of strings). Key wording is never typed here: tokens are filled in from
// key.js.
// The app prints, and this file therefore does not contain: the earlier question this unit leans on, the preview map, the heading of
// a meet card, "what you must be able to point to", the key's question and answer on a meet card, and the stem of every commit prompt.

FC.cards('wealth', 'u3', [

  { id: 'w3-orient', kind: 'orient',
    h: 'One thing could take most of it: what can be done?',
    canDo: 'After this unit you can read a short account of someone’s money in which one thing is most of what they have, say what that thing is and what the person can do about it, and say what to do. Sometimes the honest answer is that it is already looked after and nothing needs doing.',
    everyday: [
      'You have heard stories like these. A woman has most of her savings in the shares of the company she has worked for over thirty years: “It has never let me down.” A man put everything into his roofing firm, then borrowed against it to buy a truck. A landlord has six rentals in his own name, and a tenant has just fallen on the stairs of one.',
      'In each, the first question finds the same thing: {a:D1.shock}. That says where to look. What to do depends on what the one thing is and what the person can do about it, and sometimes the answer is to leave it alone. This unit teaches seven answers.'
    ],
    map: { branch: 'shock' } },

  /* ---------- First answer: one holding, free to sell, not run by the owner ---------- */
  { id: 'w3-meet-diversify', kind: 'meet', outcome: 'diversify',
    link: 'The first answer is the plainest: one holding that is most of what the person has, and nothing in the way of doing something about it.',
    case: 'w3-h-div-1', mark: 'S1',
    strip: [
      'There is one person, Meena, and about $530,000: $420,000 in one company’s shares, and $110,000 in savings and a 401(k).',
      'The shares are most of it. The case says nothing about prices in general, a bill or a charge.',
      'Nothing stops her selling them: they can be sold on any day.',
      'She takes no part in running the company: she has never worked for it and has no say in how it is run.'
    ],
    explain: [
      '$420,000 out of $530,000 is 79%, resting on one company. If its price halves, Meena loses $210,000, which is 40% of everything she has, whatever the rest of the market is doing.',
      'Two facts decide what she can do, and the case gives both: nothing stops her selling, and she takes no part in running the company, so selling costs her no job. Then the plain remedy is to sell in steps and put the money into funds that hold many companies. Four sales of $105,000, three months apart and planned on paper before the first, leave nothing in the one company after a year. Not everything today, because nobody knows which day is a good one: four sales put a quarter on each of four prices.'
    ],
    feature: { step: 'S1', option: 'freeheld' },
    name: 'The answer is {a:S1.freeheld}, and the name of what to do about it is {o:diversify}. “Sell down” means sell part, then more, in steps, and “on a schedule” means the steps are planned in advance, with dates. It does not say the company is a bad one, only that no one company should be most of what a person has.',
    act: 'Divide the holding by everything you own and write down the percentage. Plan the sales on paper (how many, how far apart), send each sale’s money into funds that hold many companies and not another single company, and check the fees and tax first. Then follow the dates, whatever the price did.' },

  { id: 'w3-check-diversify', kind: 'check', after: 'diversify',
    case: 'w3-h-div-chk',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show that nothing stops him selling the shares? Tap them.',
           answer: 'He could sell the shares through his broker tomorrow' } },

  /* ---------- Second answer: one holding the person is not allowed to sell yet ---------- */
  { id: 'w3-meet-hedge', kind: 'meet', outcome: 'hedge',
    link: 'The second answer is the first one’s nearest neighbor: the same shape, with one fact changed.',
    case: 'w3-h-hdg-1', mark: 'S1',
    strip: [
      'There is one person, Tomasz, with about $450,000: $400,000 in one company’s shares, and $50,000 in savings.',
      'The shares are most of it: $400,000 out of $450,000 is 89%.',
      'A rule stops him selling them: staff may not sell their own shares for two years from the day the company sold its shares to the public.',
      'The case does not say the price is falling. It is about what he can and cannot do.'
    ],
    explain: [
      'The remedy of the last answer is closed to him. He cannot sell a quarter every three months, because for two years he cannot sell at all. A company that has just sold shares to the public often bars its staff from selling for a while, and a pay plan often holds shares back until a set date.',
      'So the question becomes how to limit what he could lose while he waits. The tool is a contract bought from a bank or broker, for a fee: it lets him sell at a set price, whatever the market price, at any time in the next two years. Say today’s price is $20 and he buys the right to sell at $16 for $1.60 per share. If the price falls to $8 he still sells at $16, so he loses $5.60 per share instead of $12. If it rises, he loses only the fee. The loss is capped and most of the gain is kept.',
      'None of this spreads anything. It limits the loss while the rule lasts, and when the rule ends the remedy of {o:diversify} opens up. One caution: in the US the agreements that bar staff from selling often forbid such contracts too, and many employers forbid them at any time, so the first step is to find out what is allowed and what it costs.'
    ],
    feature: { step: 'S1', option: 'blocked' },
    name: 'The answer is {a:S1.blocked}, and the name of what to do about it is {o:hedge}. To “cap” a loss is to put a ceiling on it, and “without selling” is the point: the shares stay where they are. The name is about the waiting time, and does not say the company is a bad one.',
    act: 'Find the exact rule: which shares, until what date, and what happens to them if you leave. Ask whether your employer’s rules allow a contract that sets a floor under the price, and get its cost in writing. Plan your first sale for the day the rule ends.' },

  { id: 'w3-check-hedge', kind: 'check', after: 'hedge',
    case: 'w3-h-hdg-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked'] } },

  { id: 'w3-look-diversify-hedge', kind: 'lookalike', ledger: 'diversify~hedge',
    link: 'These two are neighbors: in both, one company’s shares are most of what the person has. Here they are side by side, with the same person in both.',
    cases: ['w3-h-la-dh-a', 'w3-h-la-dh-b'],
    instruction: 'Both cases are about Ruth, who has $500,000 of shares in the same sports-shoe company and $60,000 of other savings. Compare one thing: what, if anything, stops her selling the shares.',
    prompt: { kind: 'which', option: 'S1.blocked', answer: 'w3-h-la-dh-b' },
    difference: [
      'In Case A Ruth left the company two years ago, takes no part in running it, and could sell on any day. Nothing stands in her way. The answer is {a:S1.freeheld}, and the name is {o:diversify}: a schedule of sales.',
      'In Case B the shares and the sum are the same, but the rules of the staff share plan stop her selling for another eighteen months. The answer is {a:S1.blocked}, and the name is {o:hedge}: she cannot sell, so she can only limit what she could lose while she waits.',
      'Only the rule is different, and the rule decides. Nobody can name a case from how much is in one company.'
    ] }
]);
