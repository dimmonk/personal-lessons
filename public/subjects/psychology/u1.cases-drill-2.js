// Psychology, Unit One: drill cases, second stage (the key's first question on mixed cases: clean, then varied,
// then cases whose story misleads). Field guide: see u1.cases-drill-1.js.
// echo names a teaching case of a DIFFERENT kind whose story this one is built to bring back, so that the
// second look ("does it look like a case you know?") is practised where the likeness points the wrong way.
// also lists an answer the case shows as well as its own, which loses to its own by a tie-break in the key.
// wouldChange says what would make it a different answer; it is shown after the feedback.

FC.cases('psychology', 'u1', [

  /* ---------- clean ---------- */
  { id: 'g-allotment', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'giving up an allotment',
    text: "Wendy is giving up her allotment. 'My knees can't take the digging any more,' she tells the committee, 'and I would rather stop while I still enjoy it.'",
    route: { D1: ['reasoning'] },
    cues: { D1: ["My knees can't take the digging any more", 'I would rather stop while I still enjoy it'] },
    reason: { D1: 'One person is giving her reasons for a choice of her own: {cue:D1}. The committee only listens.' },
    not: { outcome: 'none', why: 'Wendy is not only feeling something. She has made a choice and she says why, so there is reasoning to look at.' },
    wouldChange: 'If the case showed only that Wendy had been low and tired for a few weeks, with no choice made and no reasons given, it would be {a:D1.none}.' },

  { id: 'g-inheritance', use: 'drill', tier: 'clean', setting: 'money', topic: 'a share of an inheritance',
    text: "After their mother's will was read, Dominic told his sister Anya that she had always been the favourite, and that if she had any decency she would give him her share. Anya has not slept properly since, and is thinking of handing it over.",
    route: { D1: ['tactic'] },
    cues: { D1: 'Dominic told his sister Anya that she had always been the favourite, and that if she had any decency she would give him her share' },
    reason: { D1: 'One person is saying something to another, about her: {cue:D1}. The case shows where it leaves Anya: sleepless, and close to giving up her share.' },
    not: { outcome: 'reasoning', why: 'Dominic wants the money, but he is not setting out reasons for a view or a choice of his own. What he says is about Anya, what she has always been and what she would do if she were decent, and it is said to her.' },
    wouldChange: 'If Dominic had said all this to a friend, as his reasons for thinking the will unfair, and Anya had never heard it, the case would be {a:D1.reasoning}.' },

  { id: 'g-scan', use: 'drill', tier: 'clean', setting: 'health', topic: 'waiting for a scan result',
    text: "While she waited ten days for the result of a scan, Beatriz hardly spoke at home and woke at four every morning. The result was clear, and within a week she was sleeping through the night.",
    route: { D1: ['none'] },
    cues: { D1: 'While she waited ten days for the result of a scan' },
    reason: { D1: 'The case is one short stretch, with something real behind it: {cue:D1}. When the cause goes, the behaviour goes too. No reasons are given, and nothing is said or done to anyone about them.' },
    not: { outcome: 'tactic', why: 'Her family will have felt the silence, but nothing is said or done to any one of them about them. It is how she was with everyone for ten days.' },
    wouldChange: 'If, during those ten days, she had told her husband that his fussing was the reason she could not sleep, something would have been said to one person about him, and the case would be {a:D1.tactic}.' },

  { id: 'g-landlord', use: 'drill', tier: 'clean', setting: 'money', topic: 'a landlord and repairs',
    text: "Tenants in three different towns, over twenty years, tell the same story about Mr Hale: friendly at the viewing, then months of unanswered calls about repairs. His former business partner and his own brother describe the same man.",
    route: { D1: ['pattern'] },
    cues: { D1: ['Tenants in three different towns, over twenty years, tell the same story', 'His former business partner and his own brother describe the same man'] },
    reason: { D1: 'The case is a long view of one man: {cue:D1}. Twenty years, three towns, and tenants, a partner and a brother all describing the same thing.' },
    not: { outcome: 'tactic', why: 'Ignoring a tenant’s calls is something done to another person, but the case does not stay with any one tenant. It follows Mr Hale through twenty years and three towns.' },
    wouldChange: 'If the case told you only about one tenant, and one winter of unanswered calls, it would be {a:D1.tactic}.' },

  { id: 'g-flight', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'the first day of a holiday',
    text: "On the first day of the holiday, after a cancelled flight and a night on an airport floor, Jonas was silent and scowling until dinner. By the next morning he was planning the week.",
    route: { D1: ['none'] },
    cues: { D1: 'On the first day of the holiday, after a cancelled flight and a night on an airport floor' },
    reason: { D1: 'The case is one day, with something real behind it: {cue:D1}. By the next morning it has passed.' },
    not: { outcome: 'pattern', why: 'One day, on one holiday, after one bad night. Nothing in the case says Jonas is like this in other years or in other places.' },
    wouldChange: 'If his family said he had been like this on every holiday for fifteen years, and at work and at home as well, the case would be {a:D1.pattern}.' },

  /* ---------- varied ---------- */
  { id: 'g-crossing', use: 'drill', tier: 'varied', setting: 'community', topic: 'a new road crossing',
    text: "At the parish meeting Arthur argued against the new crossing, as he had all year. Then the council's count was read out: forty children cross there every morning. 'I had no idea it was that many,' he said. 'I withdraw my objection.'",
    route: { D1: ['reasoning'] },
    cues: { D1: ['I had no idea it was that many', 'I withdraw my objection'] },
    reason: { D1: 'One person is changing a view of his own, and saying what changed it: {cue:D1}. The room listens, and nothing is said to anyone about them.' },
    not: { outcome: 'pattern', why: '"All year" is how long Arthur has held one view about one crossing. It is not a way of being that runs through years, places and relationships. The case is one piece of thinking, and it ends with him changing his mind.' },
    wouldChange: 'If the case showed Arthur arguing against every change in the village for thirty years, at the council, at his club and at home, it would be {a:D1.pattern}.' },

  { id: 'g-silence', use: 'drill', tier: 'varied', setting: 'home', topic: 'not speaking after a night out',
    text: "Since Mirela went out with her old friends on Saturday, her boyfriend has not spoken to her. He talks to the children and to the dog. When she asks what is wrong, he leaves the room. On Wednesday she cancels next month's reunion.",
    route: { D1: ['tactic'] },
    cues: { D1: ['her boyfriend has not spoken to her', 'When she asks what is wrong, he leaves the room'] },
    reason: { D1: 'One person is doing something to another, and it is about what has happened between the two of them, her night out: {cue:D1}. He speaks to everyone else in the house. The case shows where it leaves Mirela: she cancels the reunion.' },
    not: { outcome: 'none', why: 'A bad mood would fall on the whole house. This silence falls on one person only, and it began with something she did.' },
    wouldChange: 'If he had been silent with everyone in the house for four days, after some bad news of his own, it would be {a:D1.none}.' },

  { id: 'g-divorce', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'three weeks after a divorce',
    text: "In the three weeks after her divorce came through, Paloma bought a motorbike, cut her hair short and booked a month in Peru. Her mother says she has 'lost her mind'.",
    route: { D1: ['none'] },
    cues: { D1: 'In the three weeks after her divorce came through' },
    reason: { D1: 'The case is one short stretch, with something real at the start of it: {cue:D1}. Three big things in three weeks feel like a lot, but they are all the same three weeks.' },
    not: { outcome: 'reasoning', why: 'Paloma makes choices, but the case gives none of her reasons and shows her defending nothing. It shows what she did in three weeks, and no more.' },
    wouldChange: 'If the case gave her reasons, for example that she had wanted a motorbike for ten years and could now afford one, there would be reasoning to look at, and it would be {a:D1.reasoning}.' },

  { id: 'g-bains', use: 'drill', tier: 'varied', setting: 'learning', topic: 'a teacher everyone remembers',
    text: "Pupils from the 1990s, pupils from last year, parents, and the staff of two schools all say the same two things about Mr Bains: he remembers every name, and he has never once been on time for anything.",
    route: { D1: ['pattern'] },
    cues: { D1: 'Pupils from the 1990s, pupils from last year, parents, and the staff of two schools all say the same two things' },
    reason: { D1: 'The case is a long view of one man: {cue:D1}. Thirty years or so, two schools, and pupils, parents and staff all saying the same.' },
    not: { outcome: 'none', why: 'Being late once is a moment. The case shows the same thing across decades and two schools, from everyone who has known him.' },
    wouldChange: 'If the case said only that Mr Bains was late for assembly last Tuesday, it would be {a:D1.none}.' },

  /* ---------- misleading: the most noticeable thing in the story is not what decides it ---------- */
  { id: 'g-wedding', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a toast at a wedding', echo: 'g-thirty',
    text: "At her cousin's wedding Ottilie gave a ten-minute toast that was mostly about her own career, and then took the microphone again to sing. 'Typical show-off,' said a guest at the next table, who was meeting her for the first time.",
    route: { D1: ['none'] },
    cues: { D1: ["At her cousin's wedding", 'who was meeting her for the first time'] },
    reason: { D1: 'The case shows one evening, in one place: {cue:D1}. "Typical" comes from someone who has known her for that one evening, so it adds no years.' },
    not: { outcome: 'pattern', why: 'There is a lot of the same behaviour, but it is all one evening. The case shows no other year, no other place, and nobody who has known her for longer than a few hours.' },
    wouldChange: 'If her family and her colleagues said she had done this at every gathering for twenty years, the case would be {a:D1.pattern}.' },

  { id: 'g-shifts', use: 'drill', tier: 'misleading', setting: 'home', topic: 'double shifts and a girlfriend', echo: 'g-amira',
    text: "Nadim has worked double shifts all month and is exhausted. On Thursday he told his girlfriend that her constant questions were what was wearing him out, that she was needy, and that a better partner would leave him in peace. She has stopped asking how his day was.",
    route: { D1: ['tactic'] },
    cues: { D1: 'he told his girlfriend that her constant questions were what was wearing him out, that she was needy, and that a better partner would leave him in peace' },
    reason: { D1: 'One person is saying something to another, about her: {cue:D1}. The case shows where it leaves her: she has stopped asking.' },
    not: { outcome: 'none', why: 'The month of double shifts is real, and it would explain a bad mood. But this is not a mood that falls on everyone. Something is said to one person, about her, and it changes what she does.' },
    wouldChange: 'If Nadim had simply been silent and short with everyone that month, with nothing said to his girlfriend about her, it would be {a:D1.none}.' },

  { id: 'g-waitress', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'soup sent back twice', echo: 'g-deadline',
    also: ['tactic'],
    text: "Last night Victor sent his soup back twice and told the waitress she was too stupid for the job. His daughter says he has spoken to waiters, shop staff and nurses like that since she was a child, and both his former wives say the same of how he spoke to them at home.",
    route: { D1: ['pattern'] },
    cues: { D1: ['His daughter says he has spoken to waiters, shop staff and nurses like that since she was a child', 'both his former wives say the same of how he spoke to them at home'] },
    reason: { D1: 'The case opens on one evening, and then goes on to a long view of one man: {cue:D1}. Decades, restaurants, shops, hospitals and two homes, with the same thing in each.' },
    not: { outcome: 'tactic', why: 'What Victor said to the waitress is something done to another person, and on its own that would be the answer. The case goes on to show the same thing through decades, in many places and with many people. When a case shows both, the key gives the larger answer.' },
    wouldChange: 'If the case ended after its first sentence, it would be {a:D1.tactic}: one evening, and something said to one person about her.' },

  { id: 'g-handover', use: 'drill', tier: 'misleading', setting: 'home', topic: 'late for a handover', echo: 'g-birthday-brother',
    also: ['reasoning'],
    text: "Simone was forty minutes late to collect her son from his father. 'I wouldn't be late if you didn't make every handover a battle,' she told him at the door. 'You stress me so much I can't think straight.' He apologised, and offered to drive the boy over himself next time.",
    route: { D1: ['tactic'] },
    cues: { D1: ["I wouldn't be late if you didn't make every handover a battle", "You stress me so much I can't think straight"] },
    reason: { D1: 'Simone gives a reason for being late, and the reason is about the boy’s father and is said to him: {cue:D1}. The case shows where it leaves him: apologising, and offering to do the driving.' },
    not: { outcome: 'reasoning', why: 'She is giving a reason for something she did, and on its own that would be {a:D1.reasoning}. But the reason is made out of the other person and said to him. When a case shows both, the key’s answer is {a:D1.tactic}.' },
    wouldChange: 'If Simone had said to a friend afterwards, "The traffic was terrible, anyone would have been late", the reason would be about her own lateness and nobody would be on the receiving end. That would be {a:D1.reasoning}.' },

  { id: 'g-savings', use: 'drill', tier: 'misleading', setting: 'money', topic: 'a thirty-year-old savings account', echo: 'g-moira',
    text: "For thirty years Edwin has paid into the same savings account. This month his daughter showed him that the interest it pays is lower than the rise in prices, so his money buys a little less each year. 'I have had that account since 1994,' he said. 'It has never let me down, and I am not changing now.'",
    route: { D1: ['reasoning'] },
    cues: { D1: 'It has never let me down, and I am not changing now' },
    reason: { D1: 'One person is defending a choice of his own, and giving his reason: {cue:D1}. His daughter brings a fact, and the case is about what he does with it.' },
    not: { outcome: 'pattern', why: 'Thirty years is how long he has had the account. It is what his choice is about. The case does not show how Edwin is in other places or with other people. It shows one choice, defended once.' },
    wouldChange: 'If the case showed Edwin refusing every change for thirty years, at work, at home and among his friends, it would be {a:D1.pattern}.' }
]);
