// Political Ideologies, Unit One, part five: the fifth answer (no side at all) and its look-alike pair with the first answer.
// The fifth answer is the key's answer for a text with nothing in it to name (lesson standard K2.9), and it is taught as an
// answer like any other.
// The app prints "how to tell them apart" and the key's tie-break; neither is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The fifth answer: no side at all ---------- */
  { id: 'meet-none', kind: 'meet', family: 'none',
    link: 'Fifth: a text that stands with nobody. Most of what you read in a day is this.',
    case: 'i-none-meet', mark: 'D1',
    explain: [
      'The notice does not stand with workers, a people, old customs or what every person is owed. It only says what will happen and what to do about it.',
      'That is very common (a schedule, a sign, a letter about trash pickup), and it is an answer, not a failure to find one: you looked, and there was nothing to name. A text that says who holds power and how they keep it, such as who chairs a council, is this answer too. Even a ruler’s cruel orders name no side, because saying who decides is not saying whom the text speaks for.'
    ],
    spot: [
      { do: 'Find what it says will happen: the elevator is out of service from March 3 to March 14.', why: 'A date and a reason are a practical matter, not a side.' },
      { do: 'Find what it tells you to do: “call the superintendent”.', why: 'An instruction is about one practical matter.' },
      { do: 'Check it stands with nobody: no workers, no people, no customs, nothing owed to everyone.', why: 'If it did, it would be one of the first four answers.' }
    ],
    feature: { step: 'D1', option: 'none' },
    name: 'This is {a:D1.none}. After this answer nothing more is asked: there is no finer name to give.' },

  { id: 'check-none', kind: 'check', after: 'none',
    case: 'i-none-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'rights', 'none'] } },

  /* ---------- A look-alike pair ---------- */
  { id: 'look-class-none', kind: 'lookalike', ledger: 'class~none',
    link: 'These two are easy to mix up, because both can be about work, a company and a change that hits the people who work for it.',
    cases: ['i-fer-none', 'i-fer-class'],
    instruction: 'Both stories are about the cut to the Calder ferry. Compare one thing: does the text take a side, or only say what will happen?',
    prompt: { kind: 'which', option: 'D1.class', answer: 'i-fer-class' },
    difference: [
      'Story A gives the schedule: when the boat leaves, when it returns, who must book. It takes no side. That is {a:D1.none}.',
      'Story B tells the same cut as a quarrel between the ferry company’s owners and the crews who work the boats, and stands with the crews. That is {a:D1.class}.',
      'Same cut, same boat. What differs is whether the text sets two groups against each other and stands with one.'
    ] }
]);
