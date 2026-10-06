// Psychology, Unit Two: cases shown inside cards, part two.

FC.cases('psychology', 'u2', [

  /* ---------- Confirmation bias ---------- */
  { id: 'oneway', use: 'teach', tier: 'clean', setting: 'community', topic: 'a one-way street plan', name: 'The one-way street plan',
    text: "Greg is sure that his town's new one-way street plan has made traffic worse. When a neighbor says her drive to work now takes longer, Greg says, 'Exactly. That proves it.' When the council publishes a count showing that trips are four minutes shorter on average, Greg says, 'Who did the counting? When? I'd want to know how they measured that.' He asked his neighbor none of those questions.",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'He asked his neighbor none of those questions' } },

  { id: 'striker', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a soccer striker', name: 'The forward',
    text: "Nadia thinks the new forward is the best signing her club has made in years. After a game in which he scores, she posts: 'Told you. Pure class.' After three games in which he does not score, she says the field was poor, the passes to him were terrible, and three games are too few to judge anyone. One game was enough when he scored.",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'One game was enough when he scored' },
    segments: [
      { text: 'Nadia thinks the new forward is the best signing her club has made in years', note: 'That is the view she starts with. Holding a view is not {o:confbias}.' },
      { text: "she posts: 'Told you. Pure class.'", note: 'That is the evidence for her view going straight in. You need the other side as well to see that one side gets a harder test.' },
      { text: 'three games are too few to judge anyone', note: 'That is the test she sets for the bad games. On its own it could be a fair one. The next sentence is what shows it was never applied to the good game.' },
      { text: 'One game was enough when he scored' }
    ] },

  { id: 'homeworkers', use: 'check', tier: 'clean', setting: 'work', topic: 'working from home',
    text: "Helen believes that people who work from home do less. When a home worker finishes a report early, she says he must have had an easy week. When a home worker misses a deadline, she says, 'See? This is what I mean.'",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'he must have had an easy week' },
    reason: { R1: "A report finished early is evidence against Helen's view, and she explains it away: {cue:R1}. A missed deadline is evidence for her view, and it goes straight in as proof. One side gets a harder test." },
    not: { outcome: 'dissonance', why: "Helen is not giving a reason why something she did is fine. Her reasoning is about what other people's results show." } },

  /* ---------- Motivated reasoning ---------- */
  { id: 'interviews', use: 'teach', tier: 'clean', setting: 'work', topic: 'choosing a team leader', name: "Carol's interviews", also: ['scrutiny'],
    text: "Carol has to choose a new team leader. Before the interviews she has already decided it will be her friend Jas. In each interview she writes down the good points of Jas's answers and the weak points of everyone else's. 'I've been through all four candidates,' she tells her boss, 'and Jas is clearly the strongest.'",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { R1: 'Before the interviews she has already decided' },
    segments: [
      { text: 'Before the interviews she has already decided it will be her friend Jas' },
      { text: "she writes down the good points of Jas's answers and the weak points of everyone else's", note: 'That is being harder on one side. Both names can show it, so it cannot settle which of the two this is.' },
      { text: 'Jas is clearly the strongest', note: 'That is where she ends up. Where a person ends up never decides the name.' }
    ] },

  { id: 'convertible', use: 'teach', tier: 'clean', setting: 'money', topic: 'buying a car', name: 'The red convertible',
    text: "Ines decided she would buy the red convertible the moment she saw it at the dealer's. That evening she 'did her research': she read the owners' club forum for that model and three reviews that had given it five stars. She did not open the reliability survey her brother sent her. 'I've looked into it properly,' she said, 'and it's the right car.'",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { R1: 'decided she would buy the red convertible the moment she saw it' },
    segments: [
      { text: 'decided she would buy the red convertible the moment she saw it' },
      { text: "she read the owners' club forum for that model", note: 'That is the search. What you are looking for is what came before it.' },
      { text: 'She did not open the reliability survey her brother sent her', note: 'That shows the search keeping away from trouble. It follows from the answer having been chosen; it is not the choosing.' },
      { text: "I've looked into it properly", note: 'That is how she describes the search afterward. What you are looking for is what came before it.' }
    ] },

  { id: 'holiday', use: 'check', tier: 'clean', setting: 'home', topic: 'a family vacation',
    text: "Before the family meeting about where to go on vacation, Raj has made up his mind: Portugal. At the meeting he reads out the weather forecast for Portugal and the best review of the villa he likes. He leaves in his bag the price comparison the family asked him to bring.",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { R1: 'Before the family meeting about where to go on vacation, Raj has made up his mind' },
    reason: { R1: 'The family meeting is the search that was supposed to settle where to go, and the answer came before it: {cue:R1}. What he brings to the meeting is support for it, and the one thing that might go against it stays in his bag.' },
    not: { outcome: 'confbias', why: '{o:confbias} would show Raj giving evidence against his view a harder test as it turned up. He does not test the price comparison at all; he keeps it out. And the case shows you the earlier thing: the answer was chosen before the meeting began.' } },

  /* ---------- The hardest pair: same person, same subject, two names ---------- */
  { id: 'builder-friday', use: 'teach', tier: 'varied', setting: 'home', topic: 'hiring a builder',
    text: "On Friday, Sam decided to hire his cousin's firm to build the extension. On Saturday he 'got quotes': he called two other builders, asked each of them one question, and noted that one sounded rushed and the other was vague about dates. 'I've compared three firms,' he told his wife. 'My cousin's is the best.'",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { R1: "On Friday, Sam decided to hire his cousin's firm" } },

  { id: 'builder-local', use: 'teach', tier: 'varied', setting: 'home', topic: 'small builders and big firms',
    text: "Sam has believed for years that small local builders do better work than big firms. When a friend's small builder finishes a month late, Sam says every job has delays. When another friend's big firm finishes a month late, Sam says, 'That's big firms for you.'",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'Sam says every job has delays' } },

  /* ---------- Same person, same habit: an excuse one week, a harder test for one side the next ---------- */
  { id: 'vic-stress', use: 'teach', tier: 'varied', setting: 'health', topic: 'smoking and stress', name: "Vic's two weeks",
    text: "Vic smokes a pack a day and knows the health warnings as well as anyone. 'With my job I need something for the stress,' he says. 'I'll stop when things calm down.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: 'With my job I need something for the stress' } },

  { id: 'vic-study', use: 'teach', tier: 'misleading', setting: 'health', topic: 'a study on smoking',
    text: "Vic smokes a pack a day. His daughter sends him a report of a large study linking smoking to heart disease. 'These studies are always paid for by someone with an agenda,' he says. The same week he forwards her a story headed 'My grandfather smoked and lived to 95', with the message 'See?'",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'These studies are always paid for by someone with an agenda' } }
]);
