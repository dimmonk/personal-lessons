// Political Ideologies, Unit One, part five: the fifth answer (no side named) and its look-alike pair with the first answer.
// The fifth answer is the key's answer for a text with nothing in it to name (lesson standard K2.9), and it is taught as an
// answer like any other.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The fifth answer: no side named ---------- */
  { id: 'meet-none', kind: 'meet', family: 'none',
    link: 'In the four answers so far the text had a side, or a thing it put first. Many texts have neither, and there is an answer for them.',
    case: 'i-none-meet', mark: 'D1',
    strip: [
      'A notice on the doors of a building: the elevator will be out of service between two dates, and why.',
      'It says what to do: call the superintendent if you need help with the stairs.',
      'It sorts nobody into groups, and nothing in it takes a side. It only says what will happen and what to do about it.'
    ],
    explain: [
      'Set it against the other four answers: no split with a side taken, no people put first, no old ways held up, nothing said to be owed to every person. What is left is a text about one practical matter. That is very common (a schedule, a sign, a letter about trash pickup), and it is not a failure to find an answer. It is an answer: you looked, and there was nothing to name. With only four answers, an elevator notice would be pushed into one of them.',
      'It has a second shape: a text that says who holds power and how they keep it, such as who chairs a council, or who may give orders and who must obey. It can be dry or frightening, even a ruler’s cruel orders, and still name no side, because saying who decides is not saying whom the text speaks for.'
    ],
    feature: { step: 'D1', option: 'none' },
    name: [
      'The answer is {a:D1.none}. It means that the text speaks for no one: it is about one practical matter, or about who holds power and how.',
      'After this answer nothing more is asked. There is no finer name to give, and that is a result in its own right.'
    ] },

  { id: 'check-none', kind: 'check', after: 'none',
    case: 'i-none-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'rights', 'none'] } },

  /* ---------- A look-alike pair ---------- */
  { id: 'look-class-none', kind: 'lookalike', ledger: 'class~none',
    link: 'These two are easy to mix up, because both can be about work, a company and a change that affects the people who work for it.',
    cases: ['i-fer-none', 'i-fer-class'],
    instruction: 'Both cases are about the cut to the Calder ferry. Compare one thing: does the text take a side, or only say what will happen?',
    prompt: { kind: 'which', option: 'D1.class', answer: 'i-fer-class' },
    difference: [
      'In Case A the ferry is cut to one sailing a day and the text gives the schedule: when the boat leaves, when it returns, who needs to book. It takes no side. The answer is {a:D1.none}.',
      'In Case B the same cut is told as a quarrel between the ferry company’s owners and the crews who work the boats, and the text stands with the crews. The answer is {a:D1.class}.',
      'Same facts, same boat. What differs is whether the text sets two groups against each other and stands with one.'
    ] }
]);
