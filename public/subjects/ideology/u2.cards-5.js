// Political Ideologies, Unit Two, part three (first half): a text that wants no government, and the pair that sets it beside the
// name for a party that rules alone.

FC.cards('ideology', 'u2', [

  /* ---------- Anarchism ---------- */
  { id: 'meet-anarch', kind: 'meet', outcome: 'anarch',
    link: 'The last name had one party hold power. This text wants nobody to hold power at all.',
    case: 'c-an-print', mark: 'C2',
    explain: [
      'The zine wants no owner and no government giving orders. That does not mean disorder: people who hold this view say workers can run their work and their towns by agreement, in open meetings.',
      'Other names also give the print works to the people who work in it, so the words about the government are what set this one apart. The text must want the government gone now: a text that wants to use it first, and says it will fade away one day, is not asking for that.'
    ],
    spot: [
      { do: 'Find what it says about the government: “with no government at all”.', why: 'This is the question that decides it.' },
      { do: 'Check it wants the government gone now, not used first: the town is to be run by open meetings.', why: 'A government used first and dropped later is a different plan.' },
      { do: 'Look at what takes its place: “open meetings of everyone in it”.', why: 'Nobody holds power over the rest, not even a party.' },
      { do: 'Find the print works: they “should belong to the people who work in it”.', why: 'Other names say this too, so it cannot decide on its own.' }
    ],
    feature: { step: 'C2', option: 'gone' },
    name: 'This is {o:anarch}: no government, and people running things together. The word comes from a Greek word for “without a ruler”, not “without order”.' },

  { id: 'check-anarch', kind: 'check', after: 'anarch',
    case: 'c-an-school',
    ask: { type: 'phrase', step: 'C2', say: 'Which words say the government is to be got rid of now, and not used first? Tap them.',
           answer: "We want the government done away with, now, and not used first: we will run the valley's schools in open meetings" } },

  /* ---------- The pair that both take over without waiting for a vote ---------- */
  { id: 'look-ml-anarch', kind: 'lookalike', ledger: 'ml~anarch',
    link: 'Both will not wait for an election, and both want working people to take over from the owners. They part on what is left standing afterwards.',
    cases: ['c-lk-mlan-ml', 'c-lk-mlan-an'],
    instruction: 'Both stories are about the same strike at the Garrow textile works. Compare one thing: after the workers take over, does a party hold power, or is there no government at all?',
    prompt: { kind: 'which', option: 'C2.seize', answer: 'c-lk-mlan-ml' },
    difference: [
      'In Story A the workers take power through a single party and keep it, and no rival party is allowed. A party holds power afterwards. The answer is {a:C2.seize}, so this is {o:ml}.',
      'In Story B there is no party and no government, because a party that holds power is only a new boss. Nobody holds power over the rest afterwards. The answer is {a:C2.gone}, so this is {o:anarch}.',
      'What separates them is whether anyone holds power afterwards.'
    ] }
]);
