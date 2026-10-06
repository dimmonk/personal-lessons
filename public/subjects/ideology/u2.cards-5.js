// Political Ideologies, Unit Two, part three (first half): a text that wants no government, and the pair that sets it beside the
// name for a party that rules alone.

FC.cards('ideology', 'u2', [

  /* ---------- Anarchism ---------- */
  { id: 'meet-anarch', kind: 'meet', outcome: 'anarch',
    link: 'The last name had a party hold power and rule for the workers. This text wants the opposite: that no one holds power over anyone, and that there is no government.',
    case: 'c-an-print', mark: 'C2',
    strip: [
      'There are two groups in the text: the people who own the print works, and the people who work there. The text is on the workers’ side.',
      'It calls the owner and the government two rulers: "We want neither."',
      'It says the print works should belong to the people who work in it.',
      'It says the town should be run by open meetings of everyone in it, with no government at all.'
    ],
    explain: [
      'Here no one is to hold power over anyone: not an owner, not a party, not a government.',
      'The words that answer the question about the government are the last ones: the town run by open meetings, with no government at all. This does not mean disorder. People who hold the view say that people can run their work and their towns together, by agreement, in meetings, with no one giving orders.',
      'The word "now" matters. A text that wants a government to make the changes for the workers, and says it will fade away one day, has not asked for it to be got rid of now: it wants to use it.',
      'The text also says something about the businesses: the print works are to belong to the people who work in them. But more than one name says that, so the words about the government are what set this name apart.'
    ],
    feature: { step: 'C2', option: 'gone' },
    name: 'The name for this is {o:anarch}: no government, and people running things together. The word comes from a Greek word meaning "without a ruler", not "without order".' },

  { id: 'check-anarch', kind: 'check', after: 'anarch',
    case: 'c-an-school',
    ask: { type: 'phrase', step: 'C2', say: 'Which words say that the government is to be got rid of, now, and not used first? Tap them.',
           answer: "We want the government done away with, now, and not used first: we will run the valley's schools in open meetings" } },

  /* ---------- The pair that both take over without waiting for a vote ---------- */
  { id: 'look-ml-anarch', kind: 'lookalike', ledger: 'ml~anarch',
    link: 'Both of these will not wait for an election, and both want working people to take over from the owners. They part on what is left standing afterwards.',
    cases: ['c-lk-mlan-ml', 'c-lk-mlan-an'],
    instruction: 'Both cases are about the same strike at the Garrow textile works. Compare one thing: after the workers take over, is there a party that holds power, or no government at all?',
    prompt: { kind: 'which', option: 'C2.seize', answer: 'c-lk-mlan-ml' },
    difference: [
      'In Case A the text says the workers must take power through a single party and keep it, and that no rival party is to be allowed. After the change a party holds power. The answer is {a:C2.seize}, and the case is {o:ml}.',
      'In Case B the text says there should be no party and no government, because a party that holds power is only a new boss. After the change no one holds power over the rest. The answer is {a:C2.gone}, and the case is {o:anarch}.',
      'What separates them is whether anyone holds power afterwards.'
    ] }
]);
