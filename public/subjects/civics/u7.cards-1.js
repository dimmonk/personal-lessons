// Civics, Unit Seven, part one: the opening card, then four groups of facts: how the seats are shared out, how many there are,
// how long each job lasts, and how much is up at one election.
// This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a case, then the
// idea in plain words), a facts card (one row per fact), and one check per fact. A row's answer is one of the choices for every
// other row on the same card, so the answers on one card are all of one form.
// Key wording is never typed here: this unit uses no token, because none of the key's names or terms is needed by these facts.

FC.cards('civics', 'u7', [

  { id: 'orient-nums', kind: 'orient',
    h: 'Facts to hold: how many, how long, and who comes next',
    canDo: [
      'By the end you can say how many people sit in the House, the Senate and the Supreme Court; how long each main federal job lasts and how much of it is up for election at a time; who leads the House, who settles a tied Senate vote and who is next in line if the President cannot serve; and what a person must be to be President.',
      'The citizenship interview asks these, and news stories take them for granted: they say the Senate split evenly, or that a seat is up, and leave you to know what that means.'
    ],
    everyday: [
      'A news report says: “The House has passed the bill. Now it goes to the Senate, and if the senators split evenly, the Vice President will decide it.” A reader who holds the facts follows it. A reader who does not has to stop and look something up.',
      'These are offices, not the people in them. The people change with elections, so look up who holds each office now.'
    ] },

  /* ---------- group one: what fixes the number of seats ---------- */
  { id: 'con-rule', kind: 'concept',
    h: 'Three places, three rules for the number of seats',
    link: 'The first group is about how the seats are shared out among the states, because the numbers in the second group come out of it.',
    case: 'c7-twostates',
    plain: [
      'Congress has two chambers, the House of Representatives and the Senate, and they are built on different rules. The House is built on people: a state with more people has more representatives. Ruth’s state has dozens, and Pablo’s has one. The Senate is built on states: every state has two senators, however big or small, so Ruth’s state and Pablo’s are equal there. That was the compromise of 1787: big states got more seats in the House, and small states got equality in the Senate.',
      'The Supreme Court follows neither rule. The number of justices, the judges who sit on it, is not in the Constitution. Congress sets it by law.',
      'Hold each rule with its place. The words “shared out among the states” are used for both chambers, and the answers differ.'
    ] },

  { id: 'facts-rule', kind: 'facts',
    h: 'What fixes the number of seats',
    link: 'These are the three rules, each with how it fits the idea that Congress’s chambers, and the Court, are built differently.',
    concept: 'con-rule',
    rows: [
      { id: 'rl-house', q: 'How are the seats in the House of Representatives shared out among the states?',
        a: 'By population: a state with more people has more representatives',
        relates: 'Ruth’s state has dozens of representatives and Pablo’s has one. The House is the chamber built on people.' },
      { id: 'rl-senate', q: 'How are the seats in the Senate shared out among the states?',
        a: 'Equally: every state has two senators, however big or small the state is',
        relates: 'Ruth’s state and Pablo’s have two each. The Senate is the chamber built on states, and this equality is what small states got in 1787.' },
      { id: 'rl-court', q: 'How is the number of justices on the Supreme Court fixed?',
        a: 'By Congress: it sets the number by law, and the Constitution does not',
        relates: 'No rule of population or of states applies to the Court. You cannot find the number in the Constitution.' }
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
      'The House’s rule is: “{f:rl-house}”. It counts people, so a state’s share goes up and down with its population.',
      'The Senate’s rule is: “{f:rl-senate}”. It counts states, so a state’s share does not change when its population does.',
      'If you are unsure, think of Ruth and Pablo: the one chamber where their states are the same is the Senate.'
    ] },

  /* ---------- group two: how many seats there are ---------- */
  { id: 'con-size', kind: 'concept',
    h: 'Three places, three numbers',
    link: 'The first group was about how the seats are shared out. This group is about how many seats each of the three places has.',
    case: 'c7-flashcards',
    plain: [
      'Each of the three places has a fixed number of seats, and the three numbers must be kept apart. The House shares its seats out by population and is the largest: 435 voting members. The Senate gives every state two and is much smaller: 100. The Supreme Court is a handful of judges: nine.',
      'The quickest way to keep them apart is size: House, then Senate, then Court. Two is how many senators one state has. One hundred is how many there are in all.'
    ] },

  { id: 'facts-size', kind: 'facts',
    h: 'How many people sit in each place',
    link: 'These are the three numbers, each with how it fits the idea that the biggest place counts people and the smallest is a number that Congress set.',
    concept: 'con-size',
    rows: [
      { id: 'sz-house', q: 'How many voting members does the House of Representatives have?', a: '435',
        relates: 'The biggest of the three, with all 435 seats shared out among the states by population.' },
      { id: 'sz-senate', q: 'How many senators are there in all?', a: '100',
        relates: 'Two for every state, so the number follows the number of states and not the number of people.' },
      { id: 'sz-court', q: 'How many justices sit on the Supreme Court?', a: '9',
        relates: 'A number Congress set by law, and the smallest of the three.' }
    ] },

  { id: 'chk-sz-house', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'sz-house' } },
  { id: 'chk-sz-senate', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'sz-senate' } },
  { id: 'chk-sz-court', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'sz-court' } },

  /* ---------- group three: how long each job lasts ---------- */
  { id: 'con-term', kind: 'concept',
    h: 'Every job has its own clock',
    link: 'The first two groups were about how many people sit in each place. This group is about how long each of them keeps the job.',
    case: 'c7-clock',
    plain: [
      'A term is the length of time someone holds a job before it is up again. From shortest to longest: a member of the House serves two years. The President serves four, and so does the Vice President, who is elected along with the President. A senator serves six. A federal judge serves “during good behavior”, which in practice means for life.',
      'A judge’s clock is the odd one out: it is not a number of years, and a federal judge does not run for election.',
      'The two numbers easiest to swap are the House’s two years and the Senate’s six. The House is the short one.'
    ] },

  { id: 'facts-term', kind: 'facts',
    h: 'How long each job lasts',
    link: 'These are the four lengths, each with how it fits the idea that every job has its own clock.',
    concept: 'con-term',
    rows: [
      { id: 'tm-house', q: 'How long is a term in the House of Representatives?', a: 'For two years',
        relates: 'The shortest clock, which keeps the House close to what voters are thinking.' },
      { id: 'tm-senate', q: 'How long is a term in the Senate?', a: 'For six years',
        relates: 'Three times the House’s. Hold it with its chamber: the Senate is the long one.' },
      { id: 'tm-pres', q: 'How long is the term of the President, and of the Vice President who is elected along with the President?', a: 'For four years',
        relates: 'Between the House’s two and the Senate’s six. The two are elected together, so they share the same four years.' },
      { id: 'tm-judge', q: 'How long does a federal judge serve?', a: 'For life, in practice',
        relates: 'Federal judges serve “during good behavior”. It is the only clock that is not a number of years.' }
    ] },

  { id: 'chk-tm-house', kind: 'check', after: 'facts-term', ask: { type: 'fact', row: 'tm-house' } },
  { id: 'chk-tm-senate', kind: 'check', after: 'facts-term', ask: { type: 'fact', row: 'tm-senate' } },
  { id: 'chk-tm-pres', kind: 'check', after: 'facts-term', ask: { type: 'fact', row: 'tm-pres' } },
  { id: 'chk-tm-judge', kind: 'check', after: 'facts-term', ask: { type: 'fact', row: 'tm-judge' } },

  { id: 'look-term', kind: 'lookalike', ledger: 'tm-house~tm-senate',
    h: 'The short term and the long term',
    link: 'Two of the four lengths are for the two chambers of Congress, and they are the pair that is easiest to swap, so they go side by side.',
    facts: ['tm-house', 'tm-senate'],
    instruction: 'Compare how long each term is, and which chamber has the short one.',
    prompt: { kind: 'which', answer: 'tm-house' },
    difference: [
      'The House’s term is {f:tm-house}. It is the short one, so every House seat comes up again very soon.',
      'The Senate’s term is {f:tm-senate}, three times as long.',
      'The President’s four years sits between them, so it is no guide to either. The House is short and the Senate is long, and the number follows.'
    ] },

  /* ---------- group four: how much is up at one election ---------- */
  { id: 'con-up', kind: 'concept',
    h: 'When there is an election, how much is up?',
    link: 'A term says how long a job lasts. This group asks a different question: when an election comes, how much of the House, of the Senate or of the federal judges is up?',
    case: 'c7-twocampaigns',
    plain: [
      'In the House, all of it is up. Every seat comes up every two years, so one election can change the whole House.',
      'In the Senate, about a third is up. Terms are six years and the seats are spread out, so about a third come up every two years, and most senators keep their jobs through any one election.',
      'Federal judges are never up. The President nominates a judge, which means puts a name forward, and the Senate confirms it. The judge then serves for life, in practice.'
    ] },

  { id: 'facts-up', kind: 'facts',
    h: 'How much is up at one election',
    link: 'These are the three answers, each with how it fits the idea that an election can change a lot, a part, or nothing.',
    concept: 'con-up',
    rows: [
      { id: 'up-house', q: 'When there is an election, how many of the House of Representatives’ seats are up?', a: 'All of them',
        relates: 'Every House seat is up every two years, so the House can change completely in one election.' },
      { id: 'up-senate', q: 'When there is an election, how many of the Senate’s seats are up?', a: 'About a third of them',
        relates: 'Terms are six years and the seats are spread out, so a Senate election can never change the whole chamber.' },
      { id: 'up-judge', q: 'When there is an election, how many federal judges are up?', a: 'None of them',
        relates: 'A federal judge does not run for election: the President nominates and the Senate confirms.' }
    ] },

  { id: 'chk-up-house', kind: 'check', after: 'facts-up', ask: { type: 'fact', row: 'up-house' } },
  { id: 'chk-up-senate', kind: 'check', after: 'facts-up', ask: { type: 'fact', row: 'up-senate' } },
  { id: 'chk-up-judge', kind: 'check', after: 'facts-up', ask: { type: 'fact', row: 'up-judge' } }
]);
