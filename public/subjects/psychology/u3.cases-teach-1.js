// Psychology, Unit Three: cases shown inside cards, part one (telling someone it did not happen, and turning the blame around).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings; topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that step; the app marks it. segments are the tappable pieces for
// "tap the words" prompts; note is shown if that piece is tapped in error.

FC.cases('psychology', 'u3', [

  { id: 'g-repair', use: 'teach', tier: 'clean', setting: 'money', topic: 'a shared car repair', name: 'The car repair',
    text: "In February Tess paid $600 to fix the car she shares with her partner Jonas, because he had texted her: 'I'll pay my half on Friday.' He never did. Since then, whenever she mentions it, he says, 'I never said I'd pay half. You must have dreamed that up.' In March it was, 'You always get things muddled.' In May it was, 'We've been over this. Nothing like that was ever said.' Tess now rereads her old messages before she raises anything he has agreed to, and has asked her sister, 'Am I remembering this wrong?'",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { T1: "whenever she mentions it, he says, 'I never said I'd pay half. You must have dreamed that up.' In March it was, 'You always get things muddled.' In May it was, 'We've been over this. Nothing like that was ever said.'" } },

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

  { id: 'd-till', use: 'teach', tier: 'clean', setting: 'work', topic: 'missing register money', name: 'The missing register money',
    text: "Marek runs the bar. His manager, Joy, tells him the register was $120 short on his shift, and that the camera shows him taking two bills from it. 'That's not true,' Marek says. 'You were forty minutes late on Tuesday and nobody said a word to you. I come in on my day off, and this is how I'm treated? I'm the one being picked on here.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: "the camera shows him taking two bills from it. 'That's not true,' Marek says. 'You were forty minutes late on Tuesday and nobody said a word to you. I come in on my day off, and this is how I'm treated? I'm the one being picked on here.'" } },

  { id: 'd-check', use: 'check', tier: 'clean', setting: 'community', topic: 'an unlocked community garden shed',
    text: "At the community garden committee, Hugh is told that the tool shed was left unlocked on Saturday and two spades went missing. The sign-out sheet shows he signed the key out at four and never signed it back in. 'I did lock it,' Hugh says. 'And it's rich coming from you, Pam, when you've never paid your plot fee on time. After all the hours I've given this site, I'm the one being treated like a criminal.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: "'I did lock it,' Hugh says. 'And it's rich coming from you, Pam, when you've never paid your plot fee on time. After all the hours I've given this site, I'm the one being treated like a criminal.'" },
    reason: { T1: 'The sign-out sheet shows Hugh did it, and Pam raises it. In answer he does all three in one go: he denies it ("I did lock it"), attacks the person who raised it ("rich coming from you, Pam"), and plays the one wronged ("the one being treated like a criminal"). {cue:T1}' },
    not: { outcome: 'gaslight', why: 'Nothing in the case shows the denial coming back over weeks or months, or Pam doubting her own memory. It is one exchange.' } },

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
