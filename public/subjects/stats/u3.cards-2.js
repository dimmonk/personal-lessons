// Statistical Claims, Unit Three, part one (second half): the second name, the ones who chose to answer, and the exception in
// which people who volunteered are not this name.

FC.cards('stats', 'u3', [

  /* ---------- Self-selection bias ---------- */
  { id: 'meet-selfselect', kind: 'meet', outcome: 'selfselect',
    link: 'Second: nobody was asked, and the figure comes from whoever chose to answer.',
    case: 'cn-fourday', mark: 'A1',
    explain: [
      'The count is right: 2,560 out of 3,200 is 80 in every 100. The problem is who answered. Nobody picked them, they picked themselves, and people who choose to answer a poll are usually the ones who feel most strongly about it.',
      'The poll cannot say how the readers who did not click would have answered. If the magazine has 100,000 readers, those 2,560 yes answers fit anything from 3 in every 100 readers to 99 in every 100. A big count does not fix this: 3,200 people who chose themselves are as one-sided as 32.'
    ],
    spot: [
      { do: 'Find how people were asked: a one-click poll on the website.', why: 'If nobody was picked or asked by name, anyone could join in.' },
      { do: 'Find who is in the figure: the 3,200 readers who clicked.', why: 'They decided for themselves to take part.' },
      { do: 'Find who the claim speaks for: “workers” in general.', why: 'A claim for a bigger group than the ones who clicked is where it goes wrong.' }
    ],
    feature: { step: 'A1', option: 'chose' },
    name: 'This is {o:selfselect}. “Self-selection” means choosing yourself: the people in the figure picked themselves into it.',
    act: [
      { do: 'Say who the figure is for: “of the 3,200 readers who clicked, four in five said yes”.', why: 'It is true of them and of nobody else.' },
      { do: 'To learn what a wider group thinks, look for a figure from people picked by lottery from a full list, with most of them answering.', why: 'Then nobody chose themselves in.' }
    ] },

  { id: 'check-selfselect', kind: 'check', after: 'selfselect',
    case: 'cn-fair',
    ask: { type: 'option', step: 'A1', among: ['lasted', 'chose'] } },

  /* ---------- An exception: volunteers who are not this name ---------- */
  { id: 'exc-volunteers', kind: 'exception', ledger: 'selfselect~cause_ok', looksLike: 'selfselect', is: 'cause_ok',
    h: 'Volunteers, split by lottery',
    link: 'People can also volunteer for a study, and the claim from it can still hold. This is a story where it does.',
    case: 'cn-pillow',
    setup: 'These volunteers put themselves forward, like the people in a website poll. Yet this claim holds: it is {o:cause_ok}, and not {o:selfselect}.',
    prompt: { kind: 'phrase', answer: 'The lab drew names by lottery' },
    because: [
      'What is the claim about? Not what volunteers think. It is about a difference between two groups: the 300 who got the new pillow and the 300 who kept their own. The lab drew names by lottery to decide who went in which group.',
      'The volunteers are probably not like most people: maybe they sleep worse, or care more about sleep. But that is as true of the pillow group as of the other group, so being a volunteer cannot be why one group slept 25 minutes longer.',
      'Volunteers alone do not make {o:selfselect}. Look for a figure read as true of people who never took part.'
    ] }
]);
