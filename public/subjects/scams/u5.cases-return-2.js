// Scams, Unit Five: fresh cases held back for later days (lesson standard E9, V44), part two: the friendly chat before the ask.
// Four cases, one for each of the four scheduled returns. Field guide: see u5.cases-drill-1.js.

FC.cases('scams', 'u5', [

  { id: 'u5-x-community', use: 'return', tier: 'clean', setting: 'home', topic: 'a stranger on a community app who asks when he is out',
    text: "A woman sends Karl a private message on a local community app: 'Hi! I saw your post about the bins. What do you do? Do you have a dog?' He has never met her and has never seen her name. Over three weeks she asks when he is usually out and who looks after his flat. She has not asked for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'she asks when he is usually out and who looks after his flat', F1: ['He has never met her and has never seen her name', 'she asks when he is usually out and who looks after his flat'], F2: 'He has never met her and has never seen her name' },
    reason: { D1: 'The woman asks Karl to tell her about himself: {cue:D1}. Nothing is asked to be installed, signed in to or paid.',
              F1: 'Someone Karl knows only through messages asks about his home and when it is empty: {cue:F1}. No paper or number is asked for.',
              F2: 'Karl began nothing with her. A stranger wrote to him first: {cue:F2}. That the app is local does not make her someone he knows.' },
    not: { outcome: 'realdetails', why: 'Her questions sound like small talk between neighbours. But he has never met her, and nothing he began needs the answers.' },
    wouldChange: 'If Karl had met her at a street meeting and had her number from a neighbour, he would know her in another way, and the key would not apply.' },

  { id: 'u5-x-backpain', use: 'return', tier: 'varied', setting: 'health', topic: 'a stranger in an online group for back pain',
    text: "Roz has joined an online group for people with back pain. A member she has never met sends her a private message: 'I have the same problem. Do you work? Do you live alone?' Over the next fortnight he asks about her job, her home and how much help she has. He has not asked her for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'he asks about her job, her home and how much help she has', F1: ['A member she has never met sends her a private message', 'he asks about her job, her home and how much help she has'], F2: 'A member she has never met sends her a private message' },
    reason: { D1: 'The member asks Roz to tell him about herself: {cue:D1}.',
              F1: 'Someone she knows only through the group, who wrote to her privately out of nowhere, asks about her work, her home and her help: {cue:F1}.',
              F2: 'Roz began nothing with him. A private message from a member she has never met arrived first: {cue:F2}.' },
    not: { outcome: 'realdetails', why: 'The group is a real place that Roz chose to join, so it can look like something she began. But the private questions came from one member, and nothing she began needs the answers.' },
    wouldChange: 'If he had asked her to buy a treatment from a site he showed her, the first answer would be the one for money.' },

  { id: 'u5-x-soldier', use: 'return', tier: 'varied', setting: 'relationships', topic: 'a soldier abroad and a friendship invitation',
    text: "Eve accepts a friend request from a man who says that he is a soldier posted abroad. He writes every morning. He asks about her husband who died, her work and whether her children live nearby. He has never asked her for anything, and he cannot make a video call because of his posting.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'He asks about her husband who died, her work and whether her children live nearby', F1: ['a friend request from a man who says that he is a soldier posted abroad', 'He asks about her husband who died, her work and whether her children live nearby'], F2: 'a friend request from a man who says that he is a soldier posted abroad' },
    reason: { D1: 'The man asks Eve to tell him about herself: {cue:D1}.',
              F1: 'Someone Eve knows only through messages asks about her family, her work and her children: {cue:F1}. No paper or number is asked for.',
              F2: 'Eve began nothing. A friend request came to her first: {cue:F2}. Accepting it was her choice, but it was a reply to him, and she did not begin the questions.' },
    not: { outcome: 'identitytheft', why: 'He asks for no paper and no number. What he wants to know about is her family and her work.' },
    wouldChange: 'If a month later he asked her to pay for his leave papers, the first answer would be the one for money.' },

  { id: 'u5-x-game', use: 'return', tier: 'clean', setting: 'leisure', topic: 'another player in an online game',
    text: "Hiro plays an online game. Another player he has never met sends him a private message: 'You are good at this! Do you want to team up?' After a game he asks Hiro where he lives, what he does and whether anyone else is at home. Nothing else is asked.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'he asks Hiro where he lives, what he does and whether anyone else is at home', F1: ['Another player he has never met sends him a private message', 'he asks Hiro where he lives, what he does and whether anyone else is at home'], F2: 'Another player he has never met sends him a private message' },
    reason: { D1: 'The player asks Hiro to tell him about himself: {cue:D1}.',
              F1: 'Someone Hiro knows only through the game asks where he lives and who else is at home: {cue:F1}. No paper or number is asked for.',
              F2: 'Hiro began nothing with him. A private message from a player he has never met arrived first: {cue:F2}.' },
    not: { outcome: 'realdetails', why: 'The questions sound like what players ask each other. But the other player began them, and nothing Hiro began needs the answers.' },
    wouldChange: 'If the player had asked him to send a code from his account, the first answer would be the one for a way into an account.' }
]);
