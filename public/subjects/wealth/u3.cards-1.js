// Wealth Preservation, Unit Three, part one (first half): the opening card, then the first two answers, one holding that the person
// is free to sell and one that a rule stops them selling, and their look-alike pair. Cards are structured data, not HTML. A text
// field is one paragraph (a string) or several (an array of strings). Key wording is never typed here: tokens are filled in from
// key.js.
// The app prints, and this file therefore does not contain: the earlier question this unit leans on, the preview map, the heading of
// a meet card, the key's question and answer on a meet card, and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, an action and one short
// sentence of why), then the name, then in an action subject what to do (act: numbered steps) (lesson standard section 20).

FC.cards('wealth', 'u3', [

  { id: 'w3-orient', kind: 'orient',
    h: 'When most of your money is in one thing',
    canDo: 'Before you act on a warning that your money is all in one place, check what the one thing is and what you can actually do about it. Sometimes it is already safe, and the right move is to leave it alone.',
    everyday: [
      'You have heard stories like these. A woman has most of her savings in the shares of the company she has worked for over thirty years: “It has never let me down.” A man put everything into his roofing firm, then borrowed against it to buy a truck. A landlord has six rentals in his own name, and a tenant has just fallen on the stairs of one.',
      'Each time the first question gives the same answer: {a:D1.shock}. What to do next depends on what the one thing is and what the person is able to do about it. Sometimes the answer is to do nothing.'
    ],
    map: { branch: 'shock' } },

  /* ---------- First answer: one holding, free to sell, not run by the owner ---------- */
  { id: 'w3-meet-diversify', kind: 'meet', outcome: 'diversify',
    link: 'Start with the plainest one: a big holding, and nothing in the way of selling it.',
    case: 'w3-h-div-1', mark: 'S1',
    explain: [
      'Meena has $420,000 of her $530,000 in one company. That is 79%. If its price halves, she loses $210,000, which is 40% of everything she has, whatever the rest of the market does.',
      'Nothing stops her selling, and she does not work there, so selling costs her no job. So she can sell in steps and put the money into funds that hold many companies. Four sales of $105,000, three months apart and planned on paper first, leave nothing in the one company after a year. She does not sell everything today, because nobody knows which day is a good one.'
    ],
    spot: [
      { do: 'Work out the share: $420,000 of $530,000 is 79%.', why: 'Most of her money is in one company.' },
      { do: 'Check that nothing stops the sale: “the shares can be sold on any day”.', why: 'If something does stop it, the fix is different.' },
      { do: 'Check that she does not run the company: she “has no say in how it is run”.', why: 'If she ran it, selling would cost her her job.' }
    ],
    feature: { step: 'S1', option: 'freeheld' },
    name: 'This is {a:S1.freeheld}. What to do is {o:diversify}: sell part, then more, on planned dates, and put the money into funds. It does not say the company is a bad one, only that no one company should be most of what you have.',
    act: [
      { do: 'Divide the holding by everything you own and write down the percentage: $420,000 ÷ $530,000 is 79%.', why: 'That is the number to bring down.' },
      { do: 'Plan the sales on paper: how many, and how far apart.', why: 'A plan made in advance saves you from guessing which day is best.' },
      { do: 'Put each sale into funds that hold many companies, after checking the fees and tax.', why: 'Another single company would bring the same risk back.' },
      { do: 'Follow the dates, whatever the price did.', why: 'The plan only works if you keep to it.' }
    ] },

  { id: 'w3-check-diversify', kind: 'check', after: 'diversify',
    case: 'w3-h-div-chk',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show that nothing stops him selling the shares? Tap them.',
           answer: 'He could sell the shares through his broker tomorrow' } },

  /* ---------- Second answer: one holding the person is not allowed to sell yet ---------- */
  { id: 'w3-meet-hedge', kind: 'meet', outcome: 'hedge',
    link: 'The same situation with one fact changed: a rule stops the sale.',
    case: 'w3-h-hdg-1', mark: 'S1',
    explain: [
      'Tomasz cannot sell a quarter every three months, because for two years he cannot sell at all. A company that has just sold shares to the public often bars its staff from selling for a while, and a pay plan often holds shares back until a set date.',
      'So the question is how to limit his loss while he waits. A bank or broker will sell him, for a fee, the right to sell at a set price at any time in the next two years. Say today’s price is $20 and he pays $1.60 per share for the right to sell at $16. If the price falls to $8 he still sells at $16, so he loses $5.60 per share instead of $12. If the price rises, he loses only the fee.',
      'This only limits the loss. It does not spread his money around. When the rule ends, he can sell in steps, as Meena can. Find out first what is allowed: the agreements that bar staff from selling often bar these contracts too, and many employers forbid them at any time.'
    ],
    spot: [
      { do: 'Work out the share: $400,000 of $450,000 is 89%.', why: 'Most of his money is in one company.' },
      { do: 'Find the rule that stops the sale: staff “may not sell their own shares for two years”.', why: 'This is the one fact that is different from Meena’s story.' },
      { do: 'Find when the rule ends: two years from the day the company sold its shares to the public.', why: 'Until then he can only limit the loss, not sell.' }
    ],
    feature: { step: 'S1', option: 'blocked' },
    name: 'This is {a:S1.blocked}. What to do is {o:hedge}: put a floor under the price while the shares are locked. It says nothing against the company.',
    act: [
      { do: 'Find the exact rule: which shares, until what date, and what happens to them if you leave.', why: 'Everything else depends on those three facts.' },
      { do: 'Ask whether your employer allows a contract that sets a floor under the price, and get its cost in writing.', why: 'Many employers forbid them, and the fee is real money.' },
      { do: 'Plan your first sale for the day the rule ends.', why: 'From then on you can sell in steps.' }
    ] },

  { id: 'w3-check-hedge', kind: 'check', after: 'hedge',
    case: 'w3-h-hdg-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked'] } },

  { id: 'w3-look-diversify-hedge', kind: 'lookalike', ledger: 'diversify~hedge',
    link: 'Both are one company’s shares that are most of what the person has. The only difference is whether she is allowed to sell.',
    cases: ['w3-h-la-dh-a', 'w3-h-la-dh-b'],
    instruction: 'Both stories are about Ruth, who has $500,000 of shares in the same sports-shoe company and $60,000 of other savings. Compare one thing: whether anything stops her selling the shares.',
    prompt: { kind: 'which', option: 'S1.blocked', answer: 'w3-h-la-dh-b' },
    difference: [
      'In Story A Ruth left the company two years ago and could sell on any day. That is {a:S1.freeheld}, so the plan is {o:diversify}: sell in steps.',
      'In Story B the shares and the sum are the same, but the rules of the staff share plan stop her selling for another eighteen months. That is {a:S1.blocked}, so the plan is {o:hedge}: she can only limit the loss while she waits.',
      'Only the rule is different, and the rule decides. How much is in one company does not tell you which this is.'
    ] }
]);
