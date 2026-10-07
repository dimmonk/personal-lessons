// Civics, Unit Three, part one (first half): the opening card and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, the key's question and answer on a meet card, the "also called" sentence, the stem of every commit
// prompt, and the heading of an again or portrait card.
// "Congress" alone is not a line of the key, so it may be typed. The names of the five things, and the words "treaty"
// and "agency", are printed by token.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action
// and one short sentence of why), then the name (lesson standard section 20).

FC.cards('civics', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'Congress is in the news: what did it do?',
    canDo: 'When the news says Congress did something, check what it actually did. A new law, a cut to funding, a vote on the President’s pick and a charge against a judge are five different things, and each works by different rules.',
    everyday: [
      'You read headlines like these every week. “Congress passed a new tax on airline tickets.” “Congress cut the money for the program.” “The Senate approved the President’s pick.” “The House voted to charge a judge.” Each says Congress did something, and each is a different thing.',
      'The Constitution, the country’s founding rulebook, lists the jobs Congress may make laws about. It also protects some rights that no law may take away. So even a law that passed every vote can be one Congress was never allowed to pass.'
    ],
    add: 'Two words come up all through this unit. A bill is a proposed law. It becomes a law when the House and the Senate have both passed it and the President has signed it.',
    map: { branch: 'congress' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Within Congress's power ---------- */
  { id: 'meet-enumerated', kind: 'meet', outcome: 'enumerated',     // heading is the outcome's name, from the key
    link: 'Start with the most common thing Congress does: passing a law it is allowed to pass.',
    case: 'e-airfare', mark: 'C1',
    explain: [
      'Congress passed a law, and the law is a tax. Taxes are one of the jobs the Constitution gives Congress, so Congress was allowed to make it. The House and the Senate both voting for it is not what made it allowed.',
      'Two checks decide it. First, is the subject on the Constitution’s list: taxes, borrowing, trade, the mail, money and coins, the armed forces, the rules for becoming a citizen, the federal courts? Second, does the law take away a right the Constitution protects, such as the right to speak, to worship, to publish or to gather peacefully?'
    ],
    spot: [
      { do: 'Find the law itself: a ten-dollar tax on every airline ticket.', why: 'The need for airport repairs only explains why the bill exists.' },
      { do: 'Check the subject is on the Constitution’s list: it is a tax.', why: 'Anything off the list is for each state to decide.' },
      { do: 'Check no right is taken away: nobody loses the right to speak, worship, publish or gather.', why: 'A law on a listed subject can still be forbidden if it takes one away.' }
    ],
    feature: { step: 'C1', option: 'listed' },
    name: 'This is {o:enumerated}. It is allowed because of its subject and the rights it leaves alone, not because of the votes.' },

  { id: 'check-enumerated', kind: 'check', after: 'enumerated',
    case: 'k-courts',
    ask: { type: 'phrase', step: 'C1', say: 'Which words are the law Congress passed? Tap them.',
           answer: 'a bill that adds four judges to that court' } }
]);
