// Statistical Claims, Unit Three, part one (second half): the second name, the ones who chose to answer, and the exception in
// which people who volunteered are not this name.

FC.cards('stats', 'u3', [

  /* ---------- Self-selection bias ---------- */
  { id: 'meet-selfselect', kind: 'meet', outcome: 'selfselect',
    link: 'The first way left people out because of what happened to them. The second leaves people out because nobody asked them: the figure comes from whoever chose to answer.',
    case: 'cn-fourday', mark: 'A1',
    strip: [
      'There is a figure: 2,560 of the 3,200 readers who clicked said yes, which is four in five.',
      'Nobody was picked or asked by name. The poll sat on the magazine’s website, and any reader could click.',
      'The ones who clicked decided for themselves to take part.',
      'The headline speaks for workers in general.'
    ],
    explain: [
      'The count is right: 2,560 out of 3,200 is 80 in every 100. The trouble is who answered. Nobody chose them. They chose themselves, and people who choose to answer a poll on a topic are usually the ones who feel most strongly about it.',
      'The poll cannot say how the readers who did not click would have answered. If the magazine has 100,000 readers, the same 2,560 yes answers fit anything from about 3 in every 100 of all readers to 99 in every 100.',
      'A big count does not fix this: 3,200 who chose themselves are as one-sided as 32. What matters is not how many answered, but who decided that they would be counted.'
    ],
    feature: { step: 'A1', option: 'chose' },
    name: 'The name for this is {o:selfselect}. "Self-selection" means choosing yourself: the people in the figure picked themselves into it.',
    act: 'Say who the figure is for ("of the 3,200 readers who clicked, four in five said yes"), not the workers or the town. To learn what a wider group thinks, look for a figure from people picked by lottery from a full list, with most of them answering.' },

  { id: 'check-selfselect', kind: 'check', after: 'selfselect',
    case: 'cn-fair',
    ask: { type: 'option', step: 'A1', among: ['lasted', 'chose'] } },

  /* ---------- An exception: volunteers who are not this name ---------- */
  { id: 'exc-volunteers', kind: 'exception', ledger: 'selfselect~cause_ok', looksLike: 'selfselect', is: 'cause_ok',
    h: 'Volunteers, split by lottery',
    link: 'People can also volunteer for a study, and the claim from it can still hold. This card shows the case where it does.',
    case: 'cn-pillow',
    setup: 'The people in the study chose themselves, which is what you point to for {a:A1.chose}. Yet the answer to the first question for this case is {a:S1.holds}, and to the question after it, {q:H1}, the answer is {a:H1.causes}.',
    prompt: { kind: 'phrase', answer: 'The lab drew names by lottery' },
    because: [
      'Ask what the claim is about. It is not about what volunteers think, or about how much sleep people in general get. It is about a difference between two groups: the 300 who got the new pillow and the 300 who kept their own. The lab drew names by lottery to decide who was in which.',
      'The volunteers are probably unlike people in general: they may sleep worse, or care more about sleep. But that is true of the group that got the pillow and of the group that did not, in the same way. A lottery puts the same kind of volunteer into both, so being a volunteer cannot be what makes one group sleep 25 minutes longer than the other.',
      'Volunteers are not a sign of this name by themselves. Look for the thing that makes the name: a figure read as true of people who never took part.'
    ] }
]);
