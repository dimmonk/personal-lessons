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
      'Next time the news says “the senators split evenly” or “that seat is up this year”, you will know what it means. These are also the facts the citizenship interview asks.',
      'By the end you can say how many people sit in the House, the Senate and the Supreme Court; how long each main federal job lasts and how much of it is up for election at a time; who leads the House, who breaks a tied vote in the Senate and who is next in line if the President cannot serve; and what a person must be to be President.'
    ],
    everyday: [
      'A news report says: “The House has passed the bill. Now it goes to the Senate, and if the senators split evenly, the Vice President will decide it.” If you hold these facts, you follow that at once. If you do not, you stop to look something up.',
      'These are offices, not the people in them. The people change with elections, so look up who holds each office now.'
    ] },

  /* ---------- group one: what fixes the number of seats ---------- */
  { id: 'con-rule', kind: 'concept',
    h: 'Three places, three ways to decide the number of seats',
    link: 'First, how the seats are shared out among the states. The numbers in the next group come out of it.',
    case: 'c7-twostates',
    plain: [
      'Congress has two chambers, the House of Representatives and the Senate, and each counts something different. The House counts people: a state with more people gets more representatives. Ruth’s state has dozens, and Pablo’s has one. The Senate counts states: every state gets two senators, however big or small, so Ruth’s state and Pablo’s are equal there. That was the compromise of 1787: big states got more seats in the House, and small states got equal seats in the Senate.',
      'The Supreme Court counts neither. The Constitution does not say how many justices (the judges who sit on it) there are. Congress sets the number by law.',
      'To keep them straight, ask what is counted: people for the House, states for the Senate, and neither for the Court. The words “shared out among the states” fit both chambers, so the question alone will not tell you.'
    ] },

  { id: 'facts-rule', kind: 'facts',
    h: 'What fixes the number of seats',
    link: 'The three rules, each with a reason to remember it.',
    concept: 'con-rule',
    rows: [
      { id: 'rl-house', q: 'How are the seats in the House of Representatives shared out among the states?',
        a: 'By population: a state with more people has more representatives',
        relates: 'In Ruth’s story her state has dozens of representatives and Pablo’s has one. The House counts people.' },
      { id: 'rl-senate', q: 'How are the seats in the Senate shared out among the states?',
        a: 'Equally: every state has two senators, however big or small the state is',
        relates: 'In Ruth’s story both states have two senators. The Senate counts states, and equal seats were what small states won in 1787.' },
      { id: 'rl-court', q: 'How is the number of justices on the Supreme Court fixed?',
        a: 'By Congress: it sets the number by law, and the Constitution does not',
        relates: 'Neither people nor states decide it. The Constitution does not give the number, so Congress sets it by law.' }
    ] },

  { id: 'chk-rl-house', kind: 'check', after: 'facts-rule', ask: { type: 'fact', row: 'rl-house' } },
  { id: 'chk-rl-senate', kind: 'check', after: 'facts-rule', ask: { type: 'fact', row: 'rl-senate' } },
  { id: 'chk-rl-court', kind: 'check', after: 'facts-rule', ask: { type: 'fact', row: 'rl-court' } },

  { id: 'look-rule', kind: 'lookalike', ledger: 'rl-house~rl-senate',
    h: 'Two chambers, two ways of sharing out seats',
    link: 'These two rules are about the same thing and give opposite answers, so they get swapped. Here they are side by side.',
    facts: ['rl-house', 'rl-senate'],
    instruction: 'Ask what each rule counts: the people in a state, or the state itself.',
    prompt: { kind: 'which', answer: 'rl-senate' },
    difference: [
      'The House’s rule is: “{f:rl-house}”. It counts people, so a state’s seats go up and down with its population.',
      'The Senate’s rule is: “{f:rl-senate}”. It counts states, so a state’s seats do not change when its population does.',
      'Unsure? Think of Ruth and Pablo. The one chamber where their states are equal is the Senate.'
    ] },

  /* ---------- group two: how many seats there are ---------- */
  { id: 'con-size', kind: 'concept',
    h: 'Three places, three numbers',
    link: 'Next, how many seats each of the three places has.',
    case: 'c7-flashcards',
    plain: [
      'Each of the three places has a fixed number of seats. The House shares its seats out by population and is the biggest: 435 voting members. The Senate gives every state two, so it is much smaller: 100. The Supreme Court is a handful of judges: nine.',
      'The quickest way to keep the numbers apart is size: House, then Senate, then Court, biggest to smallest. Two is how many senators one state has. One hundred is how many there are in all.'
    ] },

  { id: 'facts-size', kind: 'facts',
    h: 'How many people sit in each place',
    link: 'The three numbers, biggest to smallest, each with a reason to remember it.',
    concept: 'con-size',
    rows: [
      { id: 'sz-house', q: 'How many voting members does the House of Representatives have?', a: '435',
        relates: 'The biggest of the three. All 435 seats are shared out among the states by population.' },
      { id: 'sz-senate', q: 'How many senators are there in all?', a: '100',
        relates: 'Two for every state, so it depends on how many states there are, not on how many people.' },
      { id: 'sz-court', q: 'How many justices sit on the Supreme Court?', a: '9',
        relates: 'Congress set this number by law. It is the smallest of the three.' }
    ] },

  { id: 'chk-sz-house', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'sz-house' } },
  { id: 'chk-sz-senate', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'sz-senate' } },
  { id: 'chk-sz-court', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'sz-court' } },

  /* ---------- group three: how long each job lasts ---------- */
  { id: 'con-term', kind: 'concept',
    h: 'Every job lasts a different time',
    link: 'The first two groups were about how many people sit in each place. This one is about how long each of them keeps the job.',
    case: 'c7-clock',
    plain: [
      'A term is how long someone holds a job before it comes up again. From shortest to longest: a member of the House serves two years. The President serves four, and so does the Vice President, who is elected along with the President. A senator serves six. A federal judge serves “during good behavior”, which in practice means for life.',
      'A judge is the odd one out: there is no number of years, and a federal judge does not run for election.',
      'The two numbers people swap most are the House’s two years and the Senate’s six. To keep them straight: the House is the short one.'
    ] },

  { id: 'facts-term', kind: 'facts',
    h: 'How long each job lasts',
    link: 'The four lengths, each with a reason to remember it.',
    concept: 'con-term',
    rows: [
      { id: 'tm-house', q: 'How long is a term in the House of Representatives?', a: 'For two years',
        relates: 'The shortest term, so House members face the voters again soon.' },
      { id: 'tm-senate', q: 'How long is a term in the Senate?', a: 'For six years',
        relates: 'Three times the House’s two years. The Senate is the long one.' },
      { id: 'tm-pres', q: 'How long is the term of the President, and of the Vice President who is elected along with the President?', a: 'For four years',
        relates: 'Between the House’s two and the Senate’s six. The President and Vice President are elected together, so they share the same four years.' },
      { id: 'tm-judge', q: 'How long does a federal judge serve?', a: 'For life, in practice',
        relates: 'Federal judges serve “during good behavior”, so there is no number of years to learn.' }
    ] },

  { id: 'chk-tm-house', kind: 'check', after: 'facts-term', ask: { type: 'fact', row: 'tm-house' } },
  { id: 'chk-tm-senate', kind: 'check', after: 'facts-term', ask: { type: 'fact', row: 'tm-senate' } },
  { id: 'chk-tm-pres', kind: 'check', after: 'facts-term', ask: { type: 'fact', row: 'tm-pres' } },
  { id: 'chk-tm-judge', kind: 'check', after: 'facts-term', ask: { type: 'fact', row: 'tm-judge' } },

  { id: 'look-term', kind: 'lookalike', ledger: 'tm-house~tm-senate',
    h: 'The short term and the long term',
    link: 'These two lengths get swapped most, so here they are side by side.',
    facts: ['tm-house', 'tm-senate'],
    instruction: 'Ask how long each term is, and which chamber has the short one.',
    prompt: { kind: 'which', answer: 'tm-house' },
    difference: [
      'The House’s term is {f:tm-house}. It is the short one, so every House seat comes up again soon.',
      'The Senate’s term is {f:tm-senate}, three times as long.',
      'The President’s four years sits in between, so it does not help you tell these two apart. The House is short and the Senate is long. The number follows.'
    ] },

  /* ---------- group four: how much is up at one election ---------- */
  { id: 'con-up', kind: 'concept',
    h: 'When there is an election, how much is up?',
    link: 'A term says how long a job lasts. This group is about something different: when an election comes, how much of the House, the Senate and the federal judges is up for a vote?',
    case: 'c7-twocampaigns',
    plain: [
      'In the House, all of it is up. Every seat comes up every two years, so one election can change the whole House.',
      'In the Senate, about a third is up. Terms are six years and the seats are spread over three elections, so about a third come up every two years. Most senators keep their jobs through any one election.',
      'Federal judges are never up. The President nominates a judge (puts a name forward) and the Senate confirms it. The judge then serves for life, in practice.'
    ] },

  { id: 'facts-up', kind: 'facts',
    h: 'How much is up at one election',
    link: 'The three answers: all, about a third, none. Each has a reason to remember it.',
    concept: 'con-up',
    rows: [
      { id: 'up-house', q: 'When there is an election, how many of the House of Representatives’ seats are up?', a: 'All of them',
        relates: 'Every House seat is up every two years, so the House can change completely in one election.' },
      { id: 'up-senate', q: 'When there is an election, how many of the Senate’s seats are up?', a: 'About a third of them',
        relates: 'Terms are six years and the seats are spread over three elections, so one Senate election can never change the whole chamber.' },
      { id: 'up-judge', q: 'When there is an election, how many federal judges are up?', a: 'None of them',
        relates: 'A federal judge does not run for election: the President nominates and the Senate confirms.' }
    ] },

  { id: 'chk-up-house', kind: 'check', after: 'facts-up', ask: { type: 'fact', row: 'up-house' } },
  { id: 'chk-up-senate', kind: 'check', after: 'facts-up', ask: { type: 'fact', row: 'up-senate' } },
  { id: 'chk-up-judge', kind: 'check', after: 'facts-up', ask: { type: 'fact', row: 'up-judge' } }
]);
