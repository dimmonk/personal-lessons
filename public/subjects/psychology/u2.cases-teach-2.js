// Psychology, Unit Two: teach, part two: confirmation bias, motivated reasoning and their look-alike pair.

FC.cases('psychology', 'u2', [
  /* ---------- Confirmation bias ---------- */
  { id: 'oneway', use: 'teach', tier: 'clean', setting: 'community', topic: 'a one-way street plan', name: 'The one-way street plan',
    text: "Greg is sure that his town's new one-way street plan has made traffic worse. When a neighbor says her drive to work now takes longer, Greg says, 'Exactly. That proves it.' When the council publishes a count showing that trips are four minutes shorter on average, Greg says, 'Who did the counting? When? I'd want to know how they measured that.' He asked his neighbor none of those questions.",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'He asked his neighbor none of those questions' } },

  { id: 'homeworkers', use: 'check', tier: 'clean', setting: 'work', topic: 'working from home',
    text: "Helen believes that people who work from home do less. When a home worker finishes a report early, she says he must have had an easy week. When a home worker misses a deadline, she says, 'See? This is what I mean.'",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'he must have had an easy week' },
    reason: { R1: "A report finished early goes against Helen's view, and she explains it away: {cue:R1}. A missed deadline fits her view, and it goes straight in as proof." },
    not: { outcome: 'dissonance', why: "Helen is not saying something she did is fine. She is deciding what other people's results show." } },

  /* ---------- Motivated reasoning ---------- */
  { id: 'interviews', use: 'teach', tier: 'clean', setting: 'work', topic: 'choosing a team leader', name: "Carol's interviews", also: ['scrutiny'],
    text: "Carol has to choose a new team leader. Before the interviews she has already decided it will be her friend Jas. In each interview she writes down the good points of Jas's answers and the weak points of everyone else's. 'I've been through all four candidates,' she tells her boss, 'and Jas is clearly the strongest.'",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { R1: 'Before the interviews she has already decided' },
    segments: [
      { text: 'Before the interviews she has already decided it will be her friend Jas' },
      { text: "she writes down the good points of Jas's answers and the weak points of everyone else's", note: 'That is being harder on one side. Both names show it, so it cannot settle which this is.' },
      { text: 'Jas is clearly the strongest', note: 'That is where she ends up. Where a person ends up never decides the name.' }
    ] },

  { id: 'holiday', use: 'check', tier: 'clean', setting: 'home', topic: 'a family vacation',
    text: "Before the family meeting about where to go on vacation, Raj has made up his mind: Portugal. At the meeting he reads out the weather forecast for Portugal and the best review of the villa he likes. He leaves in his bag the price comparison the family asked him to bring.",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { R1: 'Before the family meeting about where to go on vacation, Raj has made up his mind' },
    reason: { R1: 'The family meeting was meant to settle where to go, but the answer came first: {cue:R1}. What he brings supports it, and the price comparison that might not stays in his bag.' },
    not: { outcome: 'confbias', why: 'He never picks the price comparison apart. He leaves it in his bag, because the answer was chosen before the meeting began.' } },

  /* ---------- The hardest pair: same person, same subject, two names ---------- */
  { id: 'builder-friday', use: 'teach', tier: 'varied', setting: 'home', topic: 'hiring a builder',
    text: "On Friday, Sam decided to hire his cousin's firm to build the extension. On Saturday he 'got quotes': he called two other builders, asked each of them one question, and noted that one sounded rushed and the other was vague about dates. 'I've compared three firms,' he told his wife. 'My cousin's is the best.'",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { R1: "On Friday, Sam decided to hire his cousin's firm" } },

  { id: 'builder-local', use: 'teach', tier: 'varied', setting: 'home', topic: 'small builders and big firms',
    text: "Sam has believed for years that small local builders do better work than big firms. When a friend's small builder finishes a month late, Sam says every job has delays. When another friend's big firm finishes a month late, Sam says, 'That's big firms for you.'",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'Sam says every job has delays' } }
]);
