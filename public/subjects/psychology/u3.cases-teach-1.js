// Psychology, Unit Three: cases shown inside cards, part one (telling someone it did not happen, and turning the blame around).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings; topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that step; the app marks it. segments are the tappable pieces for
// "tap the words" prompts; note is shown if that piece is tapped in error.

FC.cases('psychology', 'u3', [

  /* ---------- Gaslighting ---------- */
  { id: 'g-repair', use: 'teach', tier: 'clean', setting: 'money', topic: 'a shared car repair', name: 'The car repair',
    text: "In February Tess paid £600 to fix the car she shares with her partner Jonas, because he had texted her: 'I'll pay my half on Friday.' He never did. Since then, whenever she mentions it, he says, 'I never said I'd pay half. You must have dreamt that up.' In March it was, 'You always get things muddled.' In May it was, 'We've been over this. Nothing like that was ever said.' Tess now rereads her old messages before she raises anything he has agreed to, and has asked her sister, 'Am I remembering this wrong?'",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { T1: "whenever she mentions it, he says, 'I never said I'd pay half. You must have dreamt that up.' In March it was, 'You always get things muddled.' In May it was, 'We've been over this. Nothing like that was ever said.'" } },

  { id: 'g-reports', use: 'teach', tier: 'clean', setting: 'work', topic: 'weekly sales reports', name: 'The weekly report',
    text: "In January Ana's manager, Dev, emailed her: 'Please send me the sales numbers every Friday.' She did, for two months. Then Dev began saying, in front of the team and in private, that he had never asked for them. Every week since, when she brings it up, he says, 'You're getting confused about what I said,' or 'I don't know where you get these ideas.' This has gone on for four months. Ana now keeps a diary of every instruction she is given, and has asked two colleagues whether she is losing track of things.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { T1: "Every week since, when she brings it up, he says, 'You're getting confused about what I said,' or 'I don't know where you get these ideas.' This has gone on for four months." },
    segments: [
      { text: "In January Ana's manager, Dev, emailed her: 'Please send me the sales numbers every Friday.' She did, for two months.", note: 'That is what really happened, and the name needs it to be in the case. But it is not the part this question is about: it does not show anyone being told it did not happen.' },
      { text: "Every week since, when she brings it up, he says, 'You're getting confused about what I said,' or 'I don't know where you get these ideas.' This has gone on for four months." },
      { text: 'Ana now keeps a diary of every instruction she is given, and has asked two colleagues whether she is losing track of things.', note: 'That is what the telling has done to Ana, and the name needs that too. But the words you are asked for are the ones that show what Dev does.' }
    ] },

  { id: 'g-check', use: 'check', tier: 'clean', setting: 'learning', topic: 'a group project section',
    text: "Jade and Wen agreed in their group project's chat in October that Wen would write the methods section. Since then, whenever Jade asks about it, Wen says, 'I never agreed to that. You must be thinking of someone else.' It has happened at almost every meeting for two months. Jade has begun to wonder whether she is the one who keeps getting things wrong, and she now screenshots every message.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { T1: "whenever Jade asks about it, Wen says, 'I never agreed to that. You must be thinking of someone else.' It has happened at almost every meeting for two months." },
    segments: [
      { text: "Jade and Wen agreed in their group project's chat in October that Wen would write the methods section.", note: 'That is what really happened. It is not the part that shows the telling.' },
      { text: "whenever Jade asks about it, Wen says, 'I never agreed to that. You must be thinking of someone else.' It has happened at almost every meeting for two months." },
      { text: 'Jade has begun to wonder whether she is the one who keeps getting things wrong, and she now screenshots every message.', note: 'That is what it has done to Jade. The words asked for are the ones that show what Wen says, and how often.' }
    ],
    reason: { T1: 'Something really happened: the chat shows the agreement. Wen then tells Jade that it did not, and the case says this comes back at almost every meeting for two months. Jade has started to doubt her own memory.' },
    },

  /* ---------- Turning the blame around ---------- */
  { id: 'd-till', use: 'teach', tier: 'clean', setting: 'work', topic: 'missing till money', name: 'The missing till money',
    text: "Marek runs the bar. His manager, Joy, tells him the till was £120 short on his shift, and that the camera shows him taking two notes from it. 'That's not true,' Marek says. 'You were forty minutes late on Tuesday and nobody said a word to you. I come in on my day off, and this is how I'm treated? I'm the one being picked on here.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: "the camera shows him taking two notes from it. 'That's not true,' Marek says. 'You were forty minutes late on Tuesday and nobody said a word to you. I come in on my day off, and this is how I'm treated? I'm the one being picked on here.'" } },

  { id: 'd-phone', use: 'teach', tier: 'clean', setting: 'home', topic: 'messages on a phone', name: 'The messages',
    text: "Ines sees messages on her husband Paolo's phone from a woman he told her he had stopped seeing. The most recent are from last week. 'Those aren't what you think,' Paolo says, 'and I never said I'd stopped seeing her. Do you know how controlling it is to go through someone's phone? Everyone says so. I work all week for this family, and now I'm put on trial in my own kitchen.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: "'Those aren't what you think,' Paolo says, 'and I never said I'd stopped seeing her. Do you know how controlling it is to go through someone's phone? Everyone says so. I work all week for this family, and now I'm put on trial in my own kitchen.'" },
    segments: [
      { text: "Ines sees messages on her husband Paolo's phone from a woman he told her he had stopped seeing. The most recent are from last week.", note: 'That is what Paolo did. The words asked for are what he says when Ines raises it.' },
      { text: "'Those aren't what you think,' Paolo says, 'and I never said I'd stopped seeing her. Do you know how controlling it is to go through someone's phone? Everyone says so. I work all week for this family, and now I'm put on trial in my own kitchen.'" }
    ] },

  { id: 'd-check', use: 'check', tier: 'clean', setting: 'community', topic: 'an unlocked allotment shed',
    text: "At the allotment committee, Hugh is told that the tool shed was left unlocked on Saturday and two spades went missing. The key log shows he signed the key out at four and never signed it back in. 'I did lock it,' Hugh says. 'And it's rich coming from you, Pam, when you've never paid your plot fee on time. After all the hours I've given this site, I'm the one being treated like a criminal.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: "'I did lock it,' Hugh says. 'And it's rich coming from you, Pam, when you've never paid your plot fee on time. After all the hours I've given this site, I'm the one being treated like a criminal.'" },
    reason: { T1: 'The key log shows Hugh did it, and Pam raises it. In answer he does all three in one go: he denies it ("I did lock it"), attacks the person who raised it ("rich coming from you, Pam"), and plays the one wronged ("the one being treated like a criminal"). {cue:T1}' },
    not: { outcome: 'gaslight', why: 'Nothing in the case shows the denial coming back over weeks or months, or Pam doubting her own memory. It is one exchange.' } },

  /* ---------- The look-alike pair: the same dent, two names ---------- */
  { id: 'dent-months', use: 'teach', tier: 'varied', setting: 'home', topic: 'a dented car, over months',
    text: "In March Ravi watched his wife Lena reverse the car into the gatepost, and he has a photo of the dent. Since then, whenever he mentions it, Lena says, 'That dent was there when we bought it,' and later, 'You've got the day wrong, it was never me,' and later, 'I don't know why you keep inventing things.' By July Ravi has stopped bringing it up, and last week he asked his neighbour whether he was going mad.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { T1: "whenever he mentions it, Lena says, 'That dent was there when we bought it,' and later, 'You've got the day wrong, it was never me,' and later, 'I don't know why you keep inventing things.'" } },

  { id: 'dent-once', use: 'teach', tier: 'varied', setting: 'home', topic: 'a dented car, one conversation',
    text: "Ravi watched his wife Lena reverse the car into the gatepost, and he has a photo of the dent. When he mentioned it at dinner, Lena said, 'I didn't touch the gatepost. And you're one to talk, you've been late to pick up the children three times this month. I can't believe you would sit there and accuse me, after I've been up since five.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: "'I didn't touch the gatepost. And you're one to talk, you've been late to pick up the children three times this month. I can't believe you would sit there and accuse me, after I've been up since five.'" } },

  /* ---------- The tie-break: a case that shows both ---------- */
  { id: 'invoices', use: 'teach', tier: 'misleading', setting: 'work', topic: 'unpaid client invoices', name: 'The unpaid invoices', also: ['reverse'],
    text: "Hana runs a design studio with her partner Kit. In spring Kit signed off three invoices to a client and agreed to chase them, and the signed sheet is in the office. Every month since, when Hana raises the unpaid invoices, Kit does the same three things in one go. He says, 'I never signed those.' He says, 'You're always looking for someone to blame.' He says, 'After all the hours I've put in, I'm the one who gets treated like a thief.' By September Hana photographs every document she is given, and last week she asked her accountant, 'Do I have the contract wrong? Am I making this up?'",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { T1: ['Every month since, when Hana raises the unpaid invoices, Kit does the same three things in one go.', "'Do I have the contract wrong? Am I making this up?'"] },
    segments: [
      { text: 'Kit signed off three invoices to a client and agreed to chase them, and the signed sheet is in the office.', note: 'That is what really happened. Both names need it, so it cannot tell you which of the two this is.' },
      { text: 'Every month since, when Hana raises the unpaid invoices, Kit does the same three things in one go.' },
      { text: "He says, 'I never signed those.' He says, 'You're always looking for someone to blame.' He says, 'After all the hours I've put in, I'm the one who gets treated like a thief.'", note: 'That is a denial, an attack on the person who raised it, and Kit playing the one wronged: everything {o:darvo} needs, and the reason this case looks like it. But it does not settle which name this is.' },
      { text: "By September Hana photographs every document she is given, and last week she asked her accountant, 'Do I have the contract wrong? Am I making this up?'", note: 'That is what it has done to Hana. It matters, but the words asked for are the ones that show how often it happens.' }
    ] }
]);
