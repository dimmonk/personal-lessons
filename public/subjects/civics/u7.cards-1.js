// Civics, Unit Seven, part one: the opening card, then the first two groups of facts, how the seats are shared out and how many there are.
// This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a case, then the
// idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is asked from memory and its
// answer is one of the choices for every other row on the same card, so the answers on one card are all of one form: here, a
// short rule with its reason, then three bare numbers. The app prints, and this file therefore does not contain: what a fact
// unit is, the groups of facts, the parts, the stakes line, the heading of a check and of a look-alike stem.
// Key wording is never typed here: this unit uses no token, because none of the key's names or terms is needed by these facts.

FC.cards('civics', 'u7', [

  { id: 'orient-nums', kind: 'orient',
    h: 'Facts to hold: how many, how long, and who comes next',
    canDo: [
      'This unit is a set of facts to hold, not a skill to apply. By the end you can say, without looking anything up, how many people sit in the House of Representatives, the Senate and the Supreme Court, and what fixes each number; how long each of the main federal jobs lasts, and how much of each is up for election at a time; who leads the House, who settles a tied vote in the Senate, and who is next in line if the President cannot serve; and what a person must be before they can be President.',
      'They are worth holding for two reasons. The citizenship interview asks about the offices of the government. And stories about Congress, the President and the courts take these facts for granted: they say that the Senate split evenly, or that a seat is up for election, and they leave you to know what that means.'
    ],
    everyday: [
      'Think of a news report that says: “The House has passed the bill. Now it goes to the Senate, where the vote could be close, and if the senators split evenly, the Vice President will decide it.” In a few seconds, that report has used four facts: that the House and the Senate are two different groups, that the Senate can split evenly, that a tie has somebody to settle it, and who that somebody is. A reader who holds those facts follows the report. A reader who does not has to stop and look something up, or gives up on the report.',
      'None of these facts can be worked out by reasoning. The number 435 is not the answer to a puzzle: you have to have met it. That is why this unit is a set of facts. But a bare number is easy to lose, and easy to swap with a number that looks like it, such as the House’s two years and the Senate’s six. So each fact here is tied to the reason it is what it is, and the facts that are easy to swap are put side by side.',
      'One more thing about what is here. The earlier units taught what Congress, the President and the courts decide. This unit holds something else: how big they are, how long their jobs last, and who comes next. It holds the offices and not the people in them. The President, the Vice President, the Speaker of the House and the justices change with elections and with time, so look up who holds each office now.'
    ],
    add: [
      'Each group in this unit starts from one idea. It opens with a short story, then explains the idea in plain words, then gives the facts for that group in a table. After the table, each fact is asked once, from memory.',
      'Within a table, every answer has the same form, so that you cannot pick an answer because of how it looks. You can pick it only because you hold the fact.',
      'This unit does not try to hold everything about these bodies. It holds the facts that the course’s own material states, and no others.'
    ] },

  /* ---------- group one: what fixes the number of seats ---------- */
  { id: 'con-rule', kind: 'concept',
    h: 'Three places, three rules for the number of seats',
    link: 'The first group is about how the seats are shared out among the states, because the numbers in the second group come out of it.',
    case: 'c7-twostates',
    plain: [
      'Ruth and Pablo have run into the first thing to hold about Congress. Its two chambers are built on different rules. A chamber is one of the two groups of lawmakers that together make up Congress: the House of Representatives and the Senate.',
      'The House is built on people. How many of its seats a state gets depends on how many people live in it, so a state with more people has more representatives. Ruth’s state has dozens, and Pablo’s has one. The Senate is built on states. Every state has two senators, however big or small the state is, so there Ruth’s state and Pablo’s are equal.',
      'The difference was made on purpose. It is the compromise made in 1787, when the Constitution was written: big states got more seats in the House, and small states got equality in the Senate. Each side got something, and that is why the two chambers are built differently.',
      'The Supreme Court follows neither rule, because it is not made of representatives of anyone. It is the highest court of the country, and the number of justices, the judges who sit on it, is not fixed by the Constitution. Congress sets it by law.',
      'Three places, three rules. The three facts below say which rule goes with which place. Hold each rule with its place, because the same words, “shared out among the states”, are used for the House and for the Senate, and the answers are different.'
    ] },

  { id: 'facts-rule', kind: 'facts',
    h: 'What fixes the number of seats',
    link: 'These are the three rules, each with how it fits the idea that Congress’s chambers, and the Court, are built differently.',
    concept: 'con-rule',
    rows: [
      { id: 'rl-house', q: 'How are the seats in the House of Representatives shared out among the states?',
        a: 'By population: a state with more people has more representatives',
        relates: 'This is what Ruth’s state and Pablo’s show: dozens of representatives for one, and a single representative for the other. The House is the chamber built on people, so the more people a state has, the more of its seats the state gets.' },
      { id: 'rl-senate', q: 'How are the seats in the Senate shared out among the states?',
        a: 'Equally: every state has two senators, however big or small the state is',
        relates: 'Ruth’s state and Pablo’s have the same number here, two each, though one has far more people than the other. The Senate is the chamber built on states, and this equality is what small states got in the compromise of 1787.' },
      { id: 'rl-court', q: 'How is the number of justices on the Supreme Court fixed?',
        a: 'By Congress: it sets the number by law, and the Constitution does not',
        relates: 'The Court is neither of the other two. No rule of population or of states applies to it. The number is whatever Congress has set by law, which is why it is a fact to hold: you cannot find it in the Constitution.' }
    ] },

  { id: 'chk-rl-house', kind: 'check', after: 'facts-rule', ask: { type: 'fact', row: 'rl-house' } },
  { id: 'chk-rl-senate', kind: 'check', after: 'facts-rule', ask: { type: 'fact', row: 'rl-senate' } },
  { id: 'chk-rl-court', kind: 'check', after: 'facts-rule', ask: { type: 'fact', row: 'rl-court' } },

  { id: 'look-rule', kind: 'lookalike', ledger: 'rl-house~rl-senate',
    h: 'Two chambers, two ways of sharing out seats',
    link: 'Two of the three rules are about the same thing, how a state’s seats are worked out, and they give opposite answers. They get swapped, so they go side by side.',
    facts: ['rl-house', 'rl-senate'],
    instruction: 'Compare what each rule counts: the people in a state, or the state itself.',
    prompt: { kind: 'which', answer: 'rl-senate' },
    difference: [
      'Fact A is about the House of Representatives. Its rule is: “{f:rl-house}”. It counts people, so a state’s share of the seats goes up and down with its population.',
      'Fact B is about the Senate. Its rule is: “{f:rl-senate}”. It counts states, so a state’s share does not change when its population does.',
      'If you are unsure which is which, think of Ruth and Pablo. They live in states of very different size, and the one chamber where the two states are the same is the Senate.'
    ] },

  /* ---------- group two: how many seats there are ---------- */
  { id: 'con-size', kind: 'concept',
    h: 'Three places, three numbers',
    link: 'The first group was about how the seats are shared out. This group is about how many seats each of the three places has.',
    case: 'c7-flashcards',
    plain: [
      'Luis has the right worry. Each of the three places has a fixed number of seats, and the three numbers are different, so each one has to be learned against the other two. Dara’s three questions are the three facts below.',
      'Remember the three rules. The House shares its seats out by population, and it is the largest of the three: it has 435 voting members. The Senate gives every state two, and it is much smaller: it has 100 members. The Supreme Court has the number that Congress has set by law, and that is a handful: nine justices.',
      'The quickest way to keep them apart is the size of each number. The House is by far the biggest, then the Senate, and the Court is the smallest. Two other numbers sit near these and are easy to confuse with them. Two is how many senators each state has, which is a number about one state. One hundred is how many senators there are in all.'
    ] },

  { id: 'facts-size', kind: 'facts',
    h: 'How many people sit in each place',
    link: 'These are the three numbers, each with how it fits the idea that the biggest place counts people and the smallest is a number that Congress set.',
    concept: 'con-size',
    rows: [
      { id: 'sz-house', q: 'How many voting members does the House of Representatives have?', a: '435',
        relates: 'The House is the biggest of the three, and it is the chamber built on people. All 435 seats are shared out among the states by population.' },
      { id: 'sz-senate', q: 'How many senators are there in all?', a: '100',
        relates: 'Two for every state, so this number follows the number of states and not the number of people. It is much smaller than the House’s 435, and that is the quickest way not to confuse them.' },
      { id: 'sz-court', q: 'How many justices sit on the Supreme Court?', a: '9',
        relates: 'Nine is a number that Congress set by law. It is the smallest of the three: the Court is a handful of judges, and not a body of representatives.' }
    ] },

  { id: 'chk-sz-house', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'sz-house' } },
  { id: 'chk-sz-senate', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'sz-senate' } },
  { id: 'chk-sz-court', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'sz-court' } },

  { id: 'look-size', kind: 'lookalike', ledger: 'sz-house~sz-senate',
    h: 'The big chamber and the smaller one',
    link: 'Two of the three numbers count the members of a chamber of Congress. They are the two that get swapped, so they go side by side.',
    facts: ['sz-house', 'sz-senate'],
    instruction: 'Compare how big each chamber is, and what it counts.',
    prompt: { kind: 'which', answer: 'sz-house' },
    difference: [
      'Fact A is about the House of Representatives: {f:sz-house} voting members. It is the large chamber, and it counts people.',
      'Fact B is about the Senate: {f:sz-senate} senators. It is the smaller chamber, and it counts states, two for each.',
      'The House is more than four times as big as the Senate. If a number seems too big to be the Senate’s, it is the House’s.'
    ] }
]);
