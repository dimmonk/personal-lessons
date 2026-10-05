// Civics, Unit Seven, part two: how long each job lasts, and how much of each is up for election at a time.
// Both groups are facts about the clock of an elected or appointed job. Within each table the answers have one form:
// "For ..." and then a length of time, in the first; a share of the seats, in the second.

FC.cards('civics', 'u7', [

  /* ---------- group three: how long each job lasts ---------- */
  { id: 'con-term', kind: 'concept',
    h: 'Every job has its own clock',
    link: 'The first two groups were about how many people sit in each place. This group is about how long each of them keeps the job.',
    case: 'c7-clock',
    plain: [
      'Zofia is right. Each of these jobs has its own clock. A term is the length of time someone holds a job before it is up again. Four terms are worth holding, and from the shortest to the longest they are these. A member of the House of Representatives serves two years. The President serves four years, and so does the Vice President, who is elected along with the President. A senator serves six years. And a federal judge serves “during good behaviour”, which in practice means for life.',
      'The House’s clock is the short one. Every House seat comes up again after two years, and that keeps the House close to what voters are thinking. The Senate’s is three times as long. The President’s four sits between them, longer than the House’s and shorter than the Senate’s.',
      'A judge’s clock is the odd one out, because it does not run in years at all. A federal judge does not run for election. The job is kept for life, in practice, and that is why the answer for a judge is not a number.',
      'The two numbers that are easiest to swap are the House’s two years and the Senate’s six. Say each one with its chamber, and remember that the House is the short one.'
    ] },

  { id: 'facts-term', kind: 'facts',
    h: 'How long each job lasts',
    link: 'These are the four lengths, each with how it fits the idea that every job has its own clock.',
    concept: 'con-term',
    rows: [
      { id: 'tm-house', q: 'How long is a term in the House of Representatives?', a: 'For two years',
        relates: 'Every House seat is up again after two years. That short clock keeps the House close to what voters are thinking, and it is the shortest of the four.' },
      { id: 'tm-senate', q: 'How long is a term in the Senate?', a: 'For six years',
        relates: 'A senator’s term is three times as long as a House member’s, and it is the longest term of any elected job here. It is easy to swap with the House’s two years, so hold it with its chamber: the Senate is the long one.' },
      { id: 'tm-pres', q: 'How long is the term of the President, and of the Vice President who is elected along with the President?', a: 'For four years',
        relates: 'Four sits between the House’s two and the Senate’s six. The President and the Vice President are elected together, so they share the same four years.' },
      { id: 'tm-judge', q: 'How long does a federal judge serve?', a: 'For life, in practice',
        relates: 'Federal judges serve “during good behaviour”, which in practice means for life. It is the longest clock of all, and it is the only one that is not a number of years.' }
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
      'Fact A is about the House of Representatives: {f:tm-house}. It is the short term, so every House seat comes up for election again very soon.',
      'Fact B is about the Senate: {f:tm-senate}. It is the long term, three times as long as the House’s.',
      'The President’s four years sits between them, and so it is not a safe guide to either. The House is the short one and the Senate is the long one, and the number follows from that.'
    ] },

  /* ---------- group four: how much is up at one election ---------- */
  { id: 'con-up', kind: 'concept',
    h: 'When there is an election, how much is up?',
    link: 'A term says how long a job lasts. This group asks a different question: when an election comes, how much of the House, of the Senate or of the federal judges is up?',
    case: 'c7-twocampaigns',
    plain: [
      'Sofia and Jon each say something true about their own chamber. In the House, the answer is all of it. Every seat is up every two years, so after one election the whole House can look different.',
      'In the Senate, the answer is about a third. A senator serves six years, and the seats are spread out so that about a third of them come up every two years. A Senate election therefore decides only about a third of the seats, and most senators keep their jobs through it. That is what Jon means.',
      'For federal judges the answer is none of them. A federal judge is not chosen at an election. The President nominates a judge, which means that the President puts a name forward, and the Senate confirms it, and the judge then serves during good behaviour. That is why Jon says that their neighbour is not on any list.',
      'So “how much is up?” is a question worth asking of any report about an election. If it is about the House, everything can change. If it is about the Senate, only about a third can. And a federal judge is never on the list.'
    ] },

  { id: 'facts-up', kind: 'facts',
    h: 'How much is up at one election',
    link: 'These are the three answers, each with how it fits the idea that an election can change a lot, a part, or nothing.',
    concept: 'con-up',
    rows: [
      { id: 'up-house', q: 'When there is an election, how many of the House of Representatives’ seats are up?', a: 'All of them',
        relates: 'Every House seat is up every two years. That is why the House can change completely in a single election, and why it stays close to what voters are thinking.' },
      { id: 'up-senate', q: 'When there is an election, how many of the Senate’s seats are up?', a: 'About a third of them',
        relates: 'A senator serves six years, and about a third of the seats come up every two years. So a Senate election can never change the whole chamber, and most senators keep their jobs through any one election.' },
      { id: 'up-judge', q: 'When there is an election, how many federal judges are up?', a: 'None of them',
        relates: 'A federal judge does not run for election. The President nominates a judge and the Senate confirms the choice, and the judge then serves during good behaviour, which in practice means for life.' }
    ] },

  { id: 'chk-up-house', kind: 'check', after: 'facts-up', ask: { type: 'fact', row: 'up-house' } },
  { id: 'chk-up-senate', kind: 'check', after: 'facts-up', ask: { type: 'fact', row: 'up-senate' } },
  { id: 'chk-up-judge', kind: 'check', after: 'facts-up', ask: { type: 'fact', row: 'up-judge' } },

  { id: 'look-up', kind: 'lookalike', ledger: 'up-house~up-senate',
    h: 'The whole chamber, and a part of it',
    link: 'Two of the three answers are about the chambers of Congress, and one is the whole and the other a part, so they go side by side.',
    facts: ['up-house', 'up-senate'],
    instruction: 'Compare how much of the chamber one election can change: all of it, or only a part.',
    prompt: { kind: 'which', answer: 'up-senate' },
    difference: [
      'Fact A is about the House of Representatives: {f:up-house}. One election can change every seat.',
      'Fact B is about the Senate: {f:up-senate}. One election can change only about a third of the seats, because senators serve six years and the seats are spread out.',
      'The two answers go with the two terms. The House’s seats are all on the same short clock. The Senate’s seats are on a long clock, and they are spread out so that only about a third of them come up at one election.'
    ] }
]);
