// Psychology, Unit One: cases shown inside cards, parts three and four (the third and fourth kinds).
// Field guide: see u1.cases-teach-1.js.

FC.cases('psychology', 'u1', [

  /* ---------- A lasting way someone is ---------- */
  { id: 'g-moira', use: 'teach', tier: 'clean', setting: 'work', topic: 'never wrong, for twenty years', name: 'Twenty years of Moira',
    text: "In twenty years Moira has never once said 'I was wrong'. At three different firms, every project of hers that failed was somebody else's fault. Her two brothers and her oldest friends tell the same story about family holidays and shared flats.",
    route: { D1: ['pattern'] },
    cues: { D1: ['In twenty years', 'At three different firms', 'Her two brothers and her oldest friends tell the same story'] } },

  { id: 'g-rings', use: 'teach', tier: 'clean', setting: 'home', topic: 'ringing until people answer', name: 'Since she was seventeen',
    text: "Whenever someone close to her is slow to answer a message, Jess rings until they pick up. She did it with her first boyfriend at seventeen and with her flatmates at university, and she does it now, at thirty-four, with her husband and with the people on her team at work.",
    route: { D1: ['pattern'] },
    cues: { D1: 'She did it with her first boyfriend at seventeen and with her flatmates at university, and she does it now, at thirty-four, with her husband and with the people on her team at work' },
    segments: [
      { text: 'Whenever someone close to her is slow to answer a message', note: 'That is what sets it off each time. It does not tell you how long this has gone on, or with how many people.' },
      { text: 'Jess rings until they pick up', note: 'That is what she does. On its own it could be one anxious evening. The words that show years, places and relationships come next.' },
      { text: 'She did it with her first boyfriend at seventeen and with her flatmates at university, and she does it now, at thirty-four, with her husband and with the people on her team at work' }
    ] },

  { id: 'g-borrower', use: 'check', tier: 'clean', setting: 'money', topic: 'borrowed money, never paid back',
    text: "Colleagues at Gareth's last three jobs all describe the same man: charming for the first month, then borrowing money that he does not pay back. His ex-wife and two former flatmates say the same. It goes back at least to his early twenties.",
    route: { D1: ['pattern'] },
    cues: { D1: ["Colleagues at Gareth's last three jobs all describe the same man", 'His ex-wife and two former flatmates say the same', 'It goes back at least to his early twenties'] },
    reason: { D1: 'The case is a long view of one man: {cue:D1}. That is years, three workplaces and two homes, and the same thing in each. Nobody in the case is having a conversation.' },
    not: { outcome: 'tactic', why: 'Borrowing and not paying back is done to other people, but the case does not stay between two of them. It follows one man through years and through everyone he has dealt with.' } },

  /* ---------- The look-alike pair: same man, same behaviour, one week or a working life ---------- */
  { id: 'g-credit-friday', use: 'teach', tier: 'clean', setting: 'work', topic: 'an idea taken on a Friday',
    text: "On Friday Gina's manager, Paul, presented her idea to the directors as his own. When she raised it with him, he told her she must be confused, and that he had mentioned the idea to her first. Gina went home wondering whether he had.",
    route: { D1: ['tactic'] },
    cues: { D1: 'he told her she must be confused, and that he had mentioned the idea to her first' } },

  { id: 'g-credit-years', use: 'teach', tier: 'clean', setting: 'work', topic: 'credit taken, in every job', name: 'Paul, in every job',
    text: "Paul has taken the credit for other people's work in every job he has held. Two firms let him go over it in his thirties. His sister says he did the same with her school projects, and friends from his football club tell the same story about a tournament he says he organised.",
    route: { D1: ['pattern'] },
    cues: { D1: ['in every job he has held', 'His sister says he did the same with her school projects', 'friends from his football club tell the same story'] } },

  /* ---------- The exception: one evening, then the years behind it ---------- */
  { id: 'g-phone', use: 'teach', tier: 'misleading', setting: 'home', topic: 'checking a partner’s phone', name: 'Mia and the phone',
    also: ['tactic'],
    text: "Last night, when Aaron came home an hour late, Mia accused him of seeing someone else and went through his phone while he stood there. She did the same to the two partners before him, her sister says she was like this about friends at fifteen, and at her last job she was warned for checking up on colleagues.",
    route: { D1: ['pattern'] },
    cues: { D1: 'She did the same to the two partners before him, her sister says she was like this about friends at fifteen, and at her last job she was warned for checking up on colleagues' },
    segments: [
      { text: 'Last night, when Aaron came home an hour late', note: 'That is one evening. It is where the case starts. It is not what settles it.' },
      { text: 'Mia accused him of seeing someone else and went through his phone while he stood there', note: 'That is something done to another person, and if the case stopped there the answer would be {a:D1.tactic}. The case goes on, and what it adds changes the answer.' },
      { text: 'She did the same to the two partners before him, her sister says she was like this about friends at fifteen, and at her last job she was warned for checking up on colleagues' }
    ] },

  /* ---------- A passing moment ---------- */
  { id: 'g-amira', use: 'teach', tier: 'clean', setting: 'work', topic: 'a week after bad news about a parent', name: 'The week of the diagnosis',
    text: "On Monday Amira learned that her father is seriously ill. All week she has been quiet at work and short with anyone who asks her a question, and twice she has gone home early. On Friday a colleague says, 'What's wrong with her? She's so moody.'",
    route: { D1: ['none'] },
    cues: { D1: 'On Monday Amira learned that her father is seriously ill. All week she has been quiet at work and short with anyone who asks her a question' } },

  { id: 'g-storm', use: 'teach', tier: 'clean', setting: 'home', topic: 'a daughter flying in a storm', name: 'The night of the storm',
    text: "The night her daughter was flying home through a storm, Renée could not sit still. She checked the airline's page every few minutes and rang the airport twice. When the plane landed she went to bed.",
    route: { D1: ['none'] },
    cues: { D1: 'The night her daughter was flying home through a storm' },
    segments: [
      { text: 'The night her daughter was flying home through a storm' },
      { text: "She checked the airline's page every few minutes and rang the airport twice", note: 'That is what she did, and it may look like a lot. It does not tell you how long it went on, or what set it off. Those are in the first words of the case.' },
      { text: 'When the plane landed she went to bed', note: 'That shows it passing, which fits. But the words that place it on one night, with something real behind it, come first.' }
    ] },

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

  /* ---------- The look-alike pair: same man, same talk, one evening or thirty years ---------- */
  { id: 'g-retirement', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a speech at a retirement party',
    text: "At his own retirement party, Desmond talked for twenty minutes about the deals he had closed and the rivals he had beaten. A guest who had never met him before said afterwards, 'What an ego.'",
    route: { D1: ['none'] },
    cues: { D1: 'At his own retirement party' } },

  { id: 'g-thirty', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'thirty years of talking about deals', name: 'Thirty years of Desmond',
    text: "For thirty years, at work, at his golf club and at family dinners, Desmond has turned every conversation to the deals he has closed and the rivals he has beaten. His children, his partners at two firms and his oldest friend all say they have never heard him ask anyone a question.",
    route: { D1: ['pattern'] },
    cues: { D1: ['For thirty years, at work, at his golf club and at family dinners', 'His children, his partners at two firms and his oldest friend all say'] } },

  /* ---------- The exception: one evening that sounds like a lifetime ---------- */
  { id: 'g-dinner-party', use: 'teach', tier: 'misleading', setting: 'leisure', topic: 'talking all through a dinner party', name: 'The dinner party',
    text: "At a dinner party Yasmin talked over the other guests, told three long stories about her new job, and was still talking when the host began clearing the plates. 'She's always been like that,' said a woman who had met her that evening.",
    route: { D1: ['none'] },
    cues: { D1: ['At a dinner party', 'said a woman who had met her that evening'] },
    segments: [
      { text: 'Yasmin talked over the other guests, told three long stories about her new job, and was still talking when the host began clearing the plates', note: 'That is what she did, and there is a lot of it. It is still what she did at one dinner.' },
      { text: "She's always been like that", note: 'That sounds like years. Look at who says it, in the next words of the case.' },
      { text: 'said a woman who had met her that evening' }
    ] }
]);
