// Scams, Unit Five: fresh cases held back for later days: the friendly chat.

FC.cases('scams', 'u5', [

  { id: 'u5-x-community', use: 'return', tier: 'clean', setting: 'home', topic: 'a stranger on a community app who asks when he is out',
    text: "A woman sends Karl a private message on a local community app: 'Hi! I saw your post about the trash pickup. What do you do? Do you have a dog?' He has never met her and has never seen her name. Over three weeks she asks when he is usually out and who looks after his apartment. She has not asked for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'she asks when he is usually out and who looks after his apartment', F1: ['He has never met her and has never seen her name', 'she asks when he is usually out and who looks after his apartment'], F2: 'He has never met her and has never seen her name' },
    reason: { D1: 'The woman asks Karl about himself, and for nothing else: {cue:D1}.',
              F1: 'Someone Karl knows only through messages asks about his home and when it is empty, with no paper or number: {cue:F1}.',
              F2: 'Karl started nothing with her: {cue:F2}. A local app does not make her someone he knows.' },
    not: { outcome: 'realdetails', why: 'Her questions sound like small talk between neighbors. But he has never met her, and nothing he started needs the answers.' } },

  { id: 'u5-x-backpain', use: 'return', tier: 'varied', setting: 'health', topic: 'a stranger in an online group for back pain',
    text: "Roz has joined an online group for people with back pain. A member she has never met sends her a private message: 'I have the same problem. Do you work? Do you live alone?' Over the next two weeks he asks about her job, her home and how much help she has. He has not asked her for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'he asks about her job, her home and how much help she has', F1: ['A member she has never met sends her a private message', 'he asks about her job, her home and how much help she has'], F2: 'A member she has never met sends her a private message' },
    reason: { D1: 'The member asks Roz about herself: {cue:D1}.',
              F1: 'A member she knows only through the group wrote to her privately, and asks about her work, her home and her help: {cue:F1}.',
              F2: 'Roz started nothing with him. A private message from a member she has never met came first: {cue:F2}.' },
    not: { outcome: 'realdetails', why: 'Roz chose to join the group, so it can look like something she started. But the private questions came from one member, and nothing she started needs the answers.' } }
]);
