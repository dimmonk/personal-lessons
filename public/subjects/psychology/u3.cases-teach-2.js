// Psychology, Unit Three: cases shown inside cards, part two (accusing someone of what you do, a flood of attention, and the ordinary exchange).

FC.cases('psychology', 'u3', [

  /* ---------- Projection ---------- */
  { id: 'p-expenses', use: 'teach', tier: 'clean', setting: 'work', topic: 'padded expense claims', name: 'The expense claims',
    text: "Omar's first expense claim is for exactly the amounts on his receipts. Dana, who the finance records show has padded her own claims for months, tells the finance manager: 'I wouldn't trust that man. People like him always inflate their claims.'",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { T1: "Dana, who the finance records show has padded her own claims for months, tells the finance manager: 'I wouldn't trust that man. People like him always inflate their claims.'" } },

  { id: 'p-rumor', use: 'teach', tier: 'clean', setting: 'community', topic: 'gossip about service charges', name: 'The residents\' treasurer',
    text: "Femi is the treasurer of the residents' association. When Sue mentions that she is moving away, Femi, who has been telling neighbors who is behind on their maintenance fees, tells the chairman: 'Sue's been gossiping about people's money. I wouldn't tell her a thing.' Nobody else has heard Sue say anything about anyone's money.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { T1: "Femi, who has been telling neighbors who is behind on their maintenance fees, tells the chairman: 'Sue's been gossiping about people's money. I wouldn't tell her a thing.'" },
    segments: [
      { text: "Femi is the treasurer of the residents' association.", note: 'That says who Femi is. It shows nothing about what is said or done.' },
      { text: "When Sue mentions that she is moving away, Femi, who has been telling neighbors who is behind on their maintenance fees, tells the chairman: 'Sue's been gossiping about people's money. I wouldn't tell her a thing.'" },
      { text: "Nobody else has heard Sue say anything about anyone's money.", note: 'That shows the other person is not doing it, and the name needs that to be in the case. But the words asked for are the ones that match the accusation to what Femi herself does.' }
    ] },

  { id: 'p-check', use: 'check', tier: 'clean', setting: 'leisure', topic: 'skipped climbing safety checks',
    text: "At the climbing club, Rob tells the club captain that Lou 'keeps skipping the safety checks'. The sign-in book shows Rob has skipped them himself on his last six sessions. The same book shows Lou's checks logged every time, and the captain has watched her do them.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { T1: ["Rob tells the club captain that Lou 'keeps skipping the safety checks'", 'Rob has skipped them himself on his last six sessions'] },
    reason: { T1: 'Rob accuses Lou: {cue:T1}. The book shows the accuser doing what he accuses her of, and shows Lou doing the opposite, so nothing in the case supports the accusation.' },
    not: { outcome: 'darvo', why: 'Nobody has raised anything with Rob, so he is not answering anything by denying it, attacking and playing the one wronged. The accusation is where the case starts.' } },

  /* ---------- Love-bombing ---------- */
  { id: 'l-wedding', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a first month of dating', name: 'The first month',
    text: "Priya met Callum at a friend's wedding. By the second date he had called her 'the one'. By the fourth he had bought her a coat, and he was texting her forty times a day. In the fifth week she said she needed a weekend to herself. Callum went silent for four days, then wrote: 'I thought you were different from the others who put themselves first.'",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { T1: ["By the second date he had called her 'the one'. By the fourth he had bought her a coat, and he was texting her forty times a day.", "Callum went silent for four days, then wrote: 'I thought you were different from the others who put themselves first.'"] } },

  { id: 'l-mentor', use: 'teach', tier: 'clean', setting: 'work', topic: 'a new mentor', name: 'The new mentor',
    text: "When Imani joined the firm, her mentor Greg spent every lunch with her, told the whole department she was the best hire in years, and gave her his own client list within a month. In her third month she turned down an invitation to cover his weekend shift. For the next two weeks Greg stopped speaking to her at lunch, copied her manager into small errors in her work, and said, 'I thought you were someone I could count on.'",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { T1: ['spent every lunch with her, told the whole department she was the best hire in years, and gave her his own client list within a month', "In her third month she turned down an invitation to cover his weekend shift. For the next two weeks Greg stopped speaking to her at lunch, copied her manager into small errors in her work, and said, 'I thought you were someone I could count on.'"] },
    segments: [
      { text: 'When Imani joined the firm, her mentor Greg spent every lunch with her, told the whole department she was the best hire in years, and gave her his own client list within a month.', note: 'That is the flood of attention at the start. The words asked for are the ones that show what happens to it later.' },
      { text: "In her third month she turned down an invitation to cover his weekend shift. For the next two weeks Greg stopped speaking to her at lunch, copied her manager into small errors in her work, and said, 'I thought you were someone I could count on.'" }
    ] },

  { id: 'l-check', use: 'check', tier: 'clean', setting: 'learning', topic: 'a new piano teacher',
    text: "Sam started piano lessons with a new teacher, Mr. Vale. In the first two weeks he told her she was the most gifted student he had taught, gave her free extra sessions, and sent her a book of scores. When Sam said she would cut back to one lesson a week because of exams, Mr. Vale's praise stopped, and he told her, 'I don't know why I bothered. You're not serious.'",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { T1: ['In the first two weeks he told her she was the most gifted student he had taught, gave her free extra sessions, and sent her a book of scores.', "When Sam said she would cut back to one lesson a week because of exams, Mr. Vale's praise stopped, and he told her, 'I don't know why I bothered. You're not serious.'"] },
    reason: { T1: 'Both halves are in the case: {cue:T1} The attention was far more than two weeks of lessons would explain, and it stopped, with criticism, once Sam set a limit.' } },

  /* ---------- An ordinary exchange ---------- */
  { id: 'o-bins', use: 'teach', tier: 'clean', setting: 'home', topic: 'a schedule for the trash', name: 'The trash',
    text: "Sam has skipped taking out the trash for the third week in a row. Priya says, 'I'm fed up with doing it. You said you would. Can we work out a schedule?' Sam says, 'You're right, I forgot. I'll do it tonight, and let's write a schedule.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "Priya says, 'I'm fed up with doing it. You said you would. Can we work out a schedule?' Sam says, 'You're right, I forgot. I'll do it tonight, and let's write a schedule.'" } },

  { id: 'o-review', use: 'teach', tier: 'clean', setting: 'work', topic: 'an overlong draft', name: 'The long draft',
    text: "Mo tells Isla that her draft is too long. Isla says, 'I disagree. I think it needs the detail, but show me which parts you would cut.' They go through it together. She cuts one page and keeps the rest, and they agree to ask the client which they prefer.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "Isla says, 'I disagree. I think it needs the detail, but show me which parts you would cut.'" },
    segments: [
      { text: 'Mo tells Isla that her draft is too long.', note: 'That is what Mo says. The words asked for are the ones that show what Isla says back.' },
      { text: "Isla says, 'I disagree. I think it needs the detail, but show me which parts you would cut.'" },
      { text: 'They go through it together. She cuts one page and keeps the rest, and they agree to ask the client which they prefer.', note: 'That is how it ends. It is the evidence that nothing else is going on, but it is not what Isla says.' }
    ] },

  { id: 'o-check', use: 'check', tier: 'clean', setting: 'health', topic: 'a physical therapy session',
    text: "After a session, Femi's physical therapist tells him he has done his exercises well and that his knee is stronger. Femi says thank you and asks if he can start jogging. She says he should wait two more weeks, and why.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "After a session, Femi's physical therapist tells him he has done his exercises well and that his knee is stronger." },
    reason: { T1: 'The case gives praise, and then an answer to a question: {cue:T1} The praise fits what has happened in the sessions, and nothing is pulled back when he asks for more: she gives him an answer and her reason.' },
    not: { outcome: 'lovebomb', why: 'Praise alone is not a flood of attention. It fits what Femi has done, and nothing later is pulled back or turned into criticism.' } }
]);
