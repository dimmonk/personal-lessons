// Psychology, Unit One: fresh cases held back for later days (lesson standard E9, V44).
// Three for each kind: one for each scheduled return. A kind that is due comes back as a case the learner has
// not seen, beside a case of the kind they most often take it for. Field guide: see u1.cases-drill-1.js.
// These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('psychology', 'u1', [

  /* ---------- One person's reasoning ---------- */
  { id: 'g-ret-roof', use: 'return', tier: 'clean', setting: 'home', topic: 'putting off a roof repair',
    text: "Halima has put off mending the roof for another winter. 'Two builders have told me it will last a year,' she tells her brother, 'and next spring I will have the money to do the whole thing properly.'",
    route: { D1: ['reasoning'] },
    cues: { D1: ['Two builders have told me it will last a year', 'next spring I will have the money to do the whole thing properly'] },
    reason: { D1: 'One person is giving her reasons for a choice of her own: {cue:D1}. Her brother only listens.' },
    not: { outcome: 'tactic', why: 'She is speaking to her brother, but nothing she says is about him or about anything between the two of them.' },
    wouldChange: 'If she had told her brother that the roof only leaks because he never helped with the house, something would have been said to him about him, and it would be {a:D1.tactic}.' },

  { id: 'g-ret-chess', use: 'return', tier: 'varied', setting: 'leisure', topic: 'losing at a chess club',
    text: "Bruno has lost to the same opponent at his chess club four times running. 'He doesn't play better than me,' he tells the club secretary. 'He plays slower, and the clock in that room runs fast.'",
    route: { D1: ['reasoning'] },
    cues: { D1: ["He doesn't play better than me", 'the clock in that room runs fast'] },
    reason: { D1: 'One person is defending a view of his own, that he is the better player, and giving his reasons: {cue:D1}. The secretary only listens.' },
    not: { outcome: 'tactic', why: 'Bruno is talking about his opponent, but not to him. Nothing is said or done to the opponent, and the secretary is only an audience.' },
    wouldChange: 'If Bruno had told his opponent to his face that he only wins by wasting time, and the opponent had stopped coming to the club, it would be {a:D1.tactic}.' },

  { id: 'g-ret-transfer', use: 'return', tier: 'varied', setting: 'work', topic: 'asking for the night shift',
    text: "After a month of thinking it over, Chiara has asked to be put on the night shift. 'The pay is a fifth higher, I sleep badly anyway, and I would be home when the children get in from school,' she writes to her manager.",
    route: { D1: ['reasoning'] },
    cues: { D1: 'The pay is a fifth higher, I sleep badly anyway, and I would be home when the children get in from school' },
    reason: { D1: 'One person is giving her reasons for a choice of her own: {cue:D1}. The note goes to her manager, but nothing in it is about the manager.' },
    not: { outcome: 'none', why: 'Chiara is not only reacting to something. She has made a choice and set out three reasons for it.' },
    wouldChange: 'If the case showed only that Chiara had been sleepless and unsettled for a month, with no choice made and no reasons given, it would be {a:D1.none}.' },

  /* ---------- Something one person does to another ---------- */
  { id: 'g-ret-holiday', use: 'return', tier: 'clean', setting: 'home', topic: 'weekends away with a sister',
    text: "Each time Noelle books a weekend trip with her sister, her husband tells her that the children cry for her the whole time, and that a good mother would not need to get away. She has canceled the last two trips.",
    route: { D1: ['tactic'] },
    cues: { D1: 'her husband tells her that the children cry for her the whole time, and that a good mother would not need to get away' },
    reason: { D1: 'One person is saying something to another, about her: {cue:D1}. The case shows where it leaves Noelle: two canceled trips.' },
    not: { outcome: 'pattern', why: 'It happens each time, but always between the same two people. The case shows no other place and no other relationship of his.' },
    wouldChange: 'If the case showed him speaking this way to his first wife, to his sisters and to the women he manages, over twenty years, it would be {a:D1.pattern}.' },

  { id: 'g-ret-praise', use: 'return', tier: 'varied', setting: 'work', topic: 'praise after an audit',
    text: "When the audit came back clean, the director stopped at Olek's desk. 'That was your work,' she said, in front of the team. 'I know what the last three months cost you, and I am putting it in writing.' Olek went home early for the first time that year.",
    route: { D1: ['tactic'] },
    cues: { D1: ['That was your work', 'I know what the last three months cost you, and I am putting it in writing'] },
    reason: { D1: 'One person is saying something to another, about him and his work: {cue:D1}. The case shows where it leaves Olek. That it is generous makes no difference to the answer.' },
    not: { outcome: 'reasoning', why: 'The director is not explaining a view or a choice of her own. She is telling Olek something about Olek, to his face.' },
    wouldChange: 'If the director had only written in her own notes why she thought the audit had gone well, with nothing said to Olek, it would be {a:D1.reasoning}.' },

  { id: 'g-ret-inbox', use: 'return', tier: 'varied', setting: 'work', topic: 'left off the project emails',
    text: "Farid's team leader has stopped copying him into the project emails since he questioned her figures in a meeting. When he asks for the files, she says he must have deleted them. He has spent two evenings searching his own inbox.",
    route: { D1: ['tactic'] },
    cues: { D1: ['has stopped copying him into the project emails since he questioned her figures in a meeting', 'she says he must have deleted them'] },
    reason: { D1: 'Something is done to one person, and then something is said to him, and both follow from what passed between the two of them in that meeting: {cue:D1}. The case shows where it leaves Farid: searching his own inbox.' },
    not: { outcome: 'none', why: 'This is not a mood that falls on the whole team. It falls on one person only, and it began with something he did in a meeting.' },
    wouldChange: 'If she had been slow to answer everyone’s emails for two weeks, after an emergency at home, it would be {a:D1.none}.' },

  /* ---------- A lasting way someone is ---------- */
  { id: 'g-ret-coach', use: 'return', tier: 'clean', setting: 'leisure', topic: 'a coach of forty years',
    text: "Players he coached in the 1980s, players he coaches now, and the parents of both say the same about Mr. Lindqvist: he has never raised his voice, and nobody has ever left one of his sessions without one thing to practice. His own grown-up children say he was the same at home.",
    route: { D1: ['pattern'] },
    cues: { D1: ['Players he coached in the 1980s, players he coaches now, and the parents of both say the same', 'His own grown-up children say he was the same at home'] },
    reason: { D1: 'The case is a long view of one man: {cue:D1}. Forty years, a club and a home, and players, parents and children all saying the same.' },
    not: { outcome: 'none', why: 'One patient training session would be a moment. The case shows the same thing through forty years, in two places, from everyone who has known him.' },
    wouldChange: 'If the case told you only about last Saturday’s session, it would be {a:D1.none}.' },

  { id: 'g-ret-aunt', use: 'return', tier: 'varied', setting: 'home', topic: 'leaving the room in every argument',
    text: "Nobody in the family has ever seen Aunt Winifred lose an argument, because she leaves the room first. Her brothers remember it from the 1970s, her two husbands lived with it, and the committee of her bridge club has learned to hold its votes before she arrives.",
    route: { D1: ['pattern'] },
    cues: { D1: 'Her brothers remember it from the 1970s, her two husbands lived with it, and the committee of her bridge club has learned to hold its votes before she arrives' },
    reason: { D1: 'The case is a long view of one woman: {cue:D1}. Fifty years, home and a club, and brothers, husbands and a committee all describing the same thing.' },
    not: { outcome: 'tactic', why: 'Walking out of an argument is done to whoever she is arguing with, but the case does not stay with any one of them. It follows her through fifty years and through everyone she has argued with.' },
    wouldChange: 'If the case showed only that she walked out of one argument with one brother last Christmas, it would be {a:D1.tactic}.' },

  { id: 'g-ret-tenant', use: 'return', tier: 'varied', setting: 'money', topic: 'rent that is late most months',
    also: ['reasoning'],
    text: "This month Corin's rent is late again, and he has a reason: his bank made an error. His landlady has kept his letters. In nine years, at this address and at the two before it, according to the landlords she called, the rent has been late most months, and each letter gives a different reason.",
    route: { D1: ['pattern'] },
    cues: { D1: 'In nine years, at this address and at the two before it, according to the landlords she called, the rent has been late most months' },
    reason: { D1: 'The case opens on one late payment and one reason, and then gives a long view of one man: {cue:D1}. Nine years, three addresses and three landlords, with the same thing in each.' },
    not: { outcome: 'reasoning', why: 'A reason for one late payment would be {a:D1.reasoning} if the case ended there. It goes on to show the same thing for nine years and at three addresses, and when a case shows both, the answer is the larger one.' },
    wouldChange: 'If the case showed only this month’s late rent and his reason for it, it would be {a:D1.reasoning}.' },

  /* ---------- A passing moment ---------- */
  { id: 'g-ret-puppy', use: 'return', tier: 'clean', setting: 'home', topic: 'the week a puppy arrived',
    text: "The week the puppy arrived, nobody in the Brennan house slept, and Mr. Brennan, who is usually the calm one, shouted at the television, the toaster and a parking meter. Two weeks later the puppy was sleeping through the night, and so was he.",
    route: { D1: ['none'] },
    cues: { D1: 'The week the puppy arrived' },
    reason: { D1: 'The case is one short stretch, with something real behind it: {cue:D1}. Two weeks later it has passed, and the case even tells you he is usually the calm one.' },
    not: { outcome: 'pattern', why: 'One week is not years, and the case says outright that this is not how he usually is.' },
    wouldChange: 'If his family said he had shouted at things in every house and every job for thirty years, it would be {a:D1.pattern}.' },

  { id: 'g-ret-results', use: 'return', tier: 'varied', setting: 'learning', topic: 'the morning of exam results',
    text: "On the morning the exam results came out, Dalia did not come down to breakfast, did not answer her phone, and walked out of the house when her father knocked on her door. That evening she opened the envelope with her parents. The results were fine, and by supper she was herself again.",
    route: { D1: ['none'] },
    cues: { D1: 'On the morning the exam results came out' },
    reason: { D1: 'The case is one morning, with something real behind it: {cue:D1}. By supper it has passed.' },
    not: { outcome: 'tactic', why: 'Walking out when her father knocked may have hurt him, but nothing is said or done to him about him. It is how she was with everyone that morning.' },
    wouldChange: 'If she had told her father that his nagging was the reason she could not face the envelope, something would have been said to him about him, and it would be {a:D1.tactic}.' },

  { id: 'g-ret-party', use: 'return', tier: 'varied', setting: 'community', topic: 'dancing on a table at a street party',
    text: "At the street's summer party, Mr. Achterberg, whom nobody had heard say more than good morning in five years, danced on a table and sang two songs. On Monday he said good morning as usual.",
    route: { D1: ['none'] },
    cues: { D1: ["At the street's summer party", 'On Monday he said good morning as usual'] },
    reason: { D1: 'The case is one occasion: {cue:D1}. No cause is given, and none is needed. One evening is all the case shows, and by Monday it has passed.' },
    not: { outcome: 'pattern', why: 'If anything, the five years point the other way: this is not how he is. One evening on a table does not become a way of being by standing out.' },
    wouldChange: 'If neighbors from three streets he had lived on said he did this at every party for twenty years, it would be {a:D1.pattern}.' }
]);
