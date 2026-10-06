// Psychology, Unit Three: drill cases for stages one and two (name, and the key's question alone). None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case and says why it fails.

FC.cases('psychology', 'u3', [

  /* ---------- Stage one: the key's answers are shown, the learner gives the name ---------- */
  { id: 'n-gas', use: 'drill', tier: 'clean', setting: 'community', topic: 'a village Christmas show part',
    text: "In September the Christmas show director, Lucia, emailed Ben that he had the lead role, and the email is still in his inbox. Since then, whenever Ben asks about rehearsal dates, Lucia says, 'I never gave you that part,' and later, 'You're remembering what you wanted to hear,' and later, 'We've been over this and you keep making it up.' It has gone on since October. Ben now writes down everything she says at rehearsals, and has asked another cast member whether he is losing his grip.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { T1: "whenever Ben asks about rehearsal dates, Lucia says, 'I never gave you that part,' and later, 'You're remembering what you wanted to hear,' and later, 'We've been over this and you keep making it up.' It has gone on since October." },
    reason: { T1: 'The email shows the part really was given. Lucia then tells Ben it was not: {cue:T1} The denial comes back for months, and Ben now writes everything down and asks someone else whether he is losing his grip, which shows him doubting his own memory.' },
    not: { outcome: 'ordexchange', why: 'One disagreement about who said what would be {o:ordexchange}. Here the denial comes back for months and Ben has begun to doubt his own memory.' } },

  { id: 'n-dar', use: 'drill', tier: 'clean', setting: 'home', topic: 'a snapped saw',
    text: "Maya lent her brother Theo her good saw, and he gave it back snapped in two. When she asks him about it, Theo says, 'It was already cracked when you lent it. And you're hardly one to talk, you still have my drill. I can't believe you would make a fuss about this after I helped you move house.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: "When she asks him about it, Theo says, 'It was already cracked when you lent it. And you're hardly one to talk, you still have my drill. I can't believe you would make a fuss about this after I helped you move house.'" },
    reason: { T1: 'Theo gave the saw back snapped, so he did it, and Maya raises it. In answer he does all three: he denies it ("already cracked"), attacks her ("you still have my drill"), and plays the one wronged ("after I helped you"). {cue:T1}' },
    not: { outcome: 'gaslight', why: 'Nothing shows the denial coming back over weeks or months, or Maya doubting her own memory. It is one conversation.' } },

  { id: 'n-ord1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a late handover',
    text: "Ruth tells her colleague Paul, 'The handover notes came in at six and I had no time to read them. Can you send them earlier next time?' Paul says, 'Sorry, that was my fault. I'll send them by three.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "'Sorry, that was my fault. I'll send them by three.'" },
    reason: { T1: 'Ruth makes a complaint and Paul answers: {cue:T1} He neither denies nor attacks, nothing comes back for weeks, and nothing in the case shows any of the four things.' },
    not: { outcome: 'darvo', why: 'Paul does not deny it, attack Ruth or play the one wronged. He agrees and offers to fix it.' } },

  { id: 'n-love', use: 'drill', tier: 'clean', setting: 'health', topic: 'a personal trainer',
    text: "Within two weeks of Kemal signing up, his personal trainer, Dee, was texting him every evening, had given him three free sessions, and had told him he was the most dedicated client she had ever had. When Kemal said he would move his sessions to the mornings for his new job, Dee stopped replying for a week and then said, 'I'd have thought you would be more committed than this.'",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { T1: ['was texting him every evening, had given him three free sessions, and had told him he was the most dedicated client she had ever had', "Dee stopped replying for a week and then said, 'I'd have thought you would be more committed than this.'"] },
    reason: { T1: 'Two weeks of training would not explain the attention: {cue:T1} Both halves are there: the flood early on, and the pulling back, with criticism, when Kemal changed the times.' },
    not: { outcome: 'ordexchange', why: 'Friendly, generous attention that stayed would be {o:ordexchange}. Here it stops and turns critical when Kemal does not go along.' } },

  { id: 'n-proj', use: 'drill', tier: 'clean', setting: 'money', topic: 'a hidden credit card',
    text: "Jess tells her husband Nick, out of the blue, 'You've been lying to me about money.' The joint account statements show every payment Nick has made, with nothing hidden. In the bedroom drawer is a credit card Jess has kept from Nick for a year, with a balance of $3,000.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { T1: ["Jess tells her husband Nick, out of the blue, 'You've been lying to me about money.'", 'a credit card Jess has kept from Nick for a year'] },
    reason: { T1: 'Jess accuses Nick: {cue:T1}. The case shows Jess doing exactly that, and the statements show nothing hidden by Nick.' },
    not: { outcome: 'darvo', why: 'Nobody has raised anything with Jess, so she is not answering anything by denying, attacking and playing the one wronged. The accusation is where the case starts.' } },

  { id: 'n-ord2', use: 'drill', tier: 'clean', setting: 'community', topic: 'a summer fair idea',
    text: "At the school gate, Rhea tells another parent, Chen, that his plan for the summer fair is the best idea so far. Chen says thank you, and adds that Hamid, who thought of the stall schedule, deserves the credit.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: 'Rhea tells another parent, Chen, that his plan for the summer fair is the best idea so far' },
    reason: { T1: 'Rhea tells Chen {cue:T1}. It is praise that fits what he proposed, and nothing in the case shows a flood of attention, or anything pulled back.' },
    not: { outcome: 'lovebomb', why: 'One piece of praise on one occasion is not far more attention than the relationship would explain, and nothing is pulled back later.' } },

  /* ---------- Stage two: the key's question alone, on a new case ---------- */
  { id: 'p-gas', use: 'drill', tier: 'varied', setting: 'health', topic: 'old pills',
    text: "When Noor started a new blood-pressure pill, her husband Dev took her old prescription to the pharmacy, and the receipt shows he did. Since January, whenever she asks where the old pills went, he says, 'I never touched them,' and later, 'You moved them yourself and forgot,' and later, 'Your memory isn't what it was.' By April Noor has started to ask her daughter whether he is right.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { T1: "whenever she asks where the old pills went, he says, 'I never touched them,' and later, 'You moved them yourself and forgot,' and later, 'Your memory isn't what it was.' By April Noor has started to ask her daughter whether he is right." },
    reason: { T1: 'The receipt shows he really did take the prescription. He then tells her it did not happen: {cue:T1} It comes back for months, and Noor has begun to doubt her own memory.' },
    not: { outcome: 'darvo', why: 'There is no single exchange of a denial, an attack and playing the one wronged. The same denial returns for months, until Noor doubts her memory.' } },

  { id: 'p-dar', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a dropped catch',
    text: "Ollie drops the winning catch in the softball club's final. The game video shows he had both hands on it. When his captain, Ray, asks about it afterward, Ollie says, 'It came out of the sun. You were the one who picked this field, and you always blame the wrong person. I give my Saturdays to this club and I'm the one who gets called out.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: "When his captain, Ray, asks about it afterward, Ollie says, 'It came out of the sun. You were the one who picked this field, and you always blame the wrong person. I give my Saturdays to this club and I'm the one who gets called out.'" },
    reason: { T1: 'The video shows Ollie dropped it, and Ray raises it. Ollie then denies it ("It came out of the sun"), attacks Ray ("you always blame the wrong person"), and plays the one wronged ("I\'m the one who gets called out"). {cue:T1}' },
    not: { outcome: 'projection', why: 'Ollie is answering something Ray raised with him. In {o:projection} nobody has raised anything, and the accusation is where the case starts.' } },

  { id: 'p-love', use: 'drill', tier: 'varied', setting: 'community', topic: 'a choir friend',
    text: "A new choir member, Tomas, wrote to Elle every day for two weeks about how special her voice was, gave her a ticket to his sister's concert, and told the choir she was its heart. When Elle said she could not go to the concert, he stopped speaking to her at rehearsals and told a friend she had been 'using him'.",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { T1: ["wrote to Elle every day for two weeks about how special her voice was, gave her a ticket to his sister's concert, and told the choir she was its heart", "he stopped speaking to her at rehearsals and told a friend she had been 'using him'"] },
    reason: { T1: 'The attention was far more than two weeks would explain: {cue:T1}. It was pulled back, and turned into criticism, once Elle did not go along.' },
    not: { outcome: 'ordexchange', why: 'Warmth from a new friend would be {o:ordexchange} if it stayed warm. Here it is pulled back and turns critical when Elle says no.' } },

  { id: 'p-proj', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a book club and interrupting',
    text: "At a book club, Edith says that Dina 'always talks over everyone else'. The recording the club keeps of last month's meeting shows Edith interrupting eleven times and Dina twice. Nobody had mentioned interrupting before Edith did.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { T1: ["Edith says that Dina 'always talks over everyone else'", 'shows Edith interrupting eleven times and Dina twice'] },
    reason: { T1: 'Edith accuses Dina: {cue:T1}. The recording shows the accuser doing it far more than the person she accuses, and nobody raised it with Edith first.' },
    not: { outcome: 'ordexchange', why: 'A fair complaint would have the case showing Dina doing it. Here the recording shows Edith doing it, and shows little from Dina.' } },

  { id: 'p-ord', use: 'drill', tier: 'varied', setting: 'money', topic: 'a high energy bill',
    text: "Carla calls her energy company and says her bill is double what she expected. The advisor, Ian, says he will check and call back. That afternoon he calls, tells her a meter was misread in the spring, and corrects the bill.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: 'Carla calls her energy company and says her bill is double what she expected.' },
    reason: { T1: 'Carla makes a complaint: {cue:T1} Ian checks and corrects it. Nothing is denied or turned on her, nothing repeats, and no attention is poured on and withdrawn.' },
    not: { outcome: 'darvo', why: 'Ian does not deny, attack or play the one wronged. He checks, finds the fault and fixes it.' } }
]);
