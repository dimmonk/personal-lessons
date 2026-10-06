// Psychology, Unit One: cases shown inside cards (the third and fourth kinds and their look-alike pairs).
// Field guide: see u1.cases-teach-1.js.

FC.cases('psychology', 'u1', [

  { id: 'g-moira', use: 'teach', tier: 'clean', setting: 'work', topic: 'never wrong, for twenty years', name: 'Twenty years of Moira',
    text: "In twenty years Moira has never once said 'I was wrong'. At three different firms, every project of hers that failed was somebody else's fault. Her two brothers and her oldest friends tell the same story about family vacations and shared apartments.",
    route: { D1: ['pattern'] },
    cues: { D1: ['In twenty years', 'At three different firms', 'Her two brothers and her oldest friends tell the same story'] } },

  { id: 'g-borrower', use: 'check', tier: 'clean', setting: 'money', topic: 'borrowed money, never paid back',
    text: "Colleagues at Gareth's last three jobs all describe the same man: charming for the first month, then borrowing money that he does not pay back. His ex-wife and two former roommates say the same. It goes back at least to his early twenties.",
    route: { D1: ['pattern'] },
    cues: { D1: ["Colleagues at Gareth's last three jobs all describe the same man", 'His ex-wife and two former roommates say the same', 'It goes back at least to his early twenties'] },
    reason: { D1: 'The case is a long view of one man: {cue:D1}. That is years, three workplaces and two homes, and the same thing in each. Nobody in the case is having a conversation.' },
    not: { outcome: 'tactic', why: 'Borrowing and not paying back is done to other people, but the case does not stay between two of them. It follows one man through years and through everyone he has dealt with.' } },

  { id: 'g-credit-friday', use: 'teach', tier: 'clean', setting: 'work', topic: 'an idea taken on a Friday',
    text: "On Friday Gina's manager, Paul, presented her idea to the directors as his own. When she raised it with him, he told her she must be confused, and that he had mentioned the idea to her first. Gina went home wondering whether he had.",
    route: { D1: ['tactic'] },
    cues: { D1: 'he told her she must be confused, and that he had mentioned the idea to her first' } },

  { id: 'g-credit-years', use: 'teach', tier: 'clean', setting: 'work', topic: 'credit taken, in every job', name: 'Paul, in every job',
    text: "Paul has taken the credit for other people's work in every job he has held. Two firms let him go over it in his thirties. His sister says he did the same with her school projects, and friends from his soccer club tell the same story about a tournament he says he organized.",
    route: { D1: ['pattern'] },
    cues: { D1: ['in every job he has held', 'His sister says he did the same with her school projects', 'friends from his soccer club tell the same story'] } },

  { id: 'g-amira', use: 'teach', tier: 'clean', setting: 'work', topic: 'a week after bad news about a parent', name: 'The week of the diagnosis',
    text: "On Monday Amira learned that her father is seriously ill. All week she has been quiet at work and short with anyone who asks her a question, and twice she has gone home early. On Friday a colleague says, 'What's wrong with her? She's so moody.'",
    route: { D1: ['none'] },
    cues: { D1: 'On Monday Amira learned that her father is seriously ill. All week she has been quiet at work and short with anyone who asks her a question' } },

  { id: 'g-funeral', use: 'check', tier: 'clean', setting: 'work', topic: 'tears in a meeting after a funeral',
    text: "Two days after his mother's funeral, Callum burst into tears in a team meeting when someone asked him a routine question. He left the room for ten minutes, came back, and finished the meeting.",
    route: { D1: ['none'] },
    cues: { D1: "Two days after his mother's funeral" },
    segments: [
      { text: "Two days after his mother's funeral" },
      { text: 'Callum burst into tears in a team meeting when someone asked him a routine question', note: 'That is what happened in the room, and it is what people will remember. It does not tell you how long this has been going on, or what is behind it.' },
      { text: 'He left the room for ten minutes, came back, and finished the meeting', note: 'That shows it passing, which fits. But the words that tie it to one occasion and to something real come at the start.' }
    ],
    reason: { D1: 'These words place the case on one occasion and give it a cause: a funeral two days before. Nothing else is shown. Callum gives no reasons for anything, he says nothing to anyone about them, and nothing in the case goes back further than this week.' } },

  { id: 'g-retirement', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a speech at a retirement party',
    text: "At his own retirement party, Desmond talked for twenty minutes about the deals he had closed and the rivals he had beaten. A guest who had never met him before said afterward, 'What an ego.'",
    route: { D1: ['none'] },
    cues: { D1: 'At his own retirement party' } },

  { id: 'g-thirty', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'thirty years of talking about deals', name: 'Thirty years of Desmond',
    text: "For thirty years, at work, at his golf club and at family dinners, Desmond has turned every conversation to the deals he has closed and the rivals he has beaten. His children, his partners at two firms and his oldest friend all say they have never heard him ask anyone a question.",
    route: { D1: ['pattern'] },
    cues: { D1: ['For thirty years, at work, at his golf club and at family dinners', 'His children, his partners at two firms and his oldest friend all say'] } }
]);
