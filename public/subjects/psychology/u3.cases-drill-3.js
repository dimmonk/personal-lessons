// Psychology, Unit Three: drill cases for stage four (the whole route, no help), varied and misleading cases. Two or more for each name across the stage.
// echo names a teaching case whose story this one resembles while its name differs: the feedback says so, which is how the
// "does it look like a case you know?" second look is practised.
// also lists answers the case shows as well as its own, which lose to its own by the key's tie-break (yieldsTo).

FC.cases('psychology', 'u3', [

  /* ---------- Varied ---------- */
  { id: 'r-gas2', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a five-a-side league slot',
    text: "In April Marcia wrote in the five-a-side league's chat: 'Thursdays at seven are yours for the season.' Since then, whenever the team captain, Ned, asks about the slot, Marcia says, 'I never said Thursdays,' and later, 'That's not how it was,' and later, 'You're getting your messages mixed up.' By September Ned screenshots every chat and has asked the league secretary whether he has got the wrong end of the stick.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { D1: 'whenever the team captain, Ned, asks about the slot, Marcia says',
            T1: "whenever the team captain, Ned, asks about the slot, Marcia says, 'I never said Thursdays,' and later, 'That's not how it was,' and later, 'You're getting your messages mixed up.'" },
    reason: { D1: 'One person is saying something to another about what was agreed between them: {cue:D1}.',
              T1: 'The chat shows she really said it. She then tells Ned she did not: {cue:T1} It goes on from April to September, and Ned now doubts his own reading of the chat.' },
    not: { outcome: 'darvo', why: 'There is no single exchange in which Marcia denies it, attacks Ned and plays the one wronged. The same denial returns for months.' } },

  { id: 'r-dar2', use: 'drill', tier: 'varied', setting: 'health', topic: 'a sample fridge left open',
    text: "The hospital lab's log shows that Priti left the sample fridge open overnight and the samples were ruined. Her supervisor, Dr Cole, asks her about it. Priti says, 'I never left it open. You're the one who runs this lab like a mess. I can't believe I'm being singled out, after all the hours I've put in.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: 'Her supervisor, Dr Cole, asks her about it',
            T1: "Priti says, 'I never left it open. You're the one who runs this lab like a mess. I can't believe I'm being singled out, after all the hours I've put in.'" },
    reason: { D1: 'One person is raising something with another that has happened between them: {cue:D1}.',
              T1: 'The log shows Priti did it, and Dr Cole raises it. She denies it ("I never left it open"), attacks him ("You\'re the one who runs this lab like a mess"), and plays the one wronged ("singled out"). {cue:T1}' },
    not: { outcome: 'gaslight', why: 'Nothing shows the denial coming back over weeks or months, or Dr Cole doubting his own memory. It is one exchange.' } },

  { id: 'r-ord2', use: 'drill', tier: 'varied', setting: 'home', topic: 'a loud television',
    text: "Isaac knocks on his neighbour Hettie's door and says her television has been too loud after eleven for a week. Hettie says, 'I didn't realise it carried. I'm sorry, I'll turn it down.' Then, a little sharply: 'You could have knocked earlier, though.' Isaac says, 'Fair.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { D1: "Isaac knocks on his neighbour Hettie's door and says her television has been too loud after eleven for a week",
            T1: "Hettie says, 'I didn't realise it carried. I'm sorry, I'll turn it down.' Then, a little sharply: 'You could have knocked earlier, though.'" },
    reason: { D1: 'One person is telling another about something between them: {cue:D1}.',
              T1: 'Isaac complains, and Hettie answers: {cue:T1} A sharp word is not an attack that turns the blame around: she does not deny it, and she does not play the one wronged.' },
    not: { outcome: 'darvo', why: 'Hettie does not deny it, and she does not put herself forward as the one wronged. Her sharp remark is one remark, and she agrees to turn the television down.' } },

  { id: 'r-love2', use: 'drill', tier: 'varied', setting: 'money', topic: 'an online friend and a business idea',
    text: "Within a month of meeting online, Soraya's new friend Dil messaged her all day, sent her a gift each week, and told her she was the only person who understood him. When Soraya said she was too busy to join his business idea, he went quiet for three weeks and then wrote, 'I see who my real friends are.'",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { D1: "he went quiet for three weeks and then wrote, 'I see who my real friends are.'",
            T1: ['messaged her all day, sent her a gift each week, and told her she was the only person who understood him', "he went quiet for three weeks and then wrote, 'I see who my real friends are.'"] },
    reason: { D1: 'One person is doing something to another that is about the other person: {cue:D1}.',
              T1: 'A month of friendship would not explain the attention: {cue:T1} It was pulled back, with a reproach, when Soraya said no.' },
    not: { outcome: 'ordexchange', why: 'A friend who stays friendly after being turned down would be {o:ordexchange}. Here the attention stops and the reply is a reproach.' } },

  { id: 'r-proj2', use: 'drill', tier: 'varied', setting: 'home', topic: 'a phone at the dinner table',
    text: "Marco tells his partner Elena that she 'is always on her phone when I'm talking'. Marco's own screen-time log shows four hours on his phone that evening, and Elena's phone stayed in her bag all night. Nobody had raised Marco's phone with him.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { D1: "Marco tells his partner Elena that she 'is always on her phone when I'm talking'",
            T1: ["Marco tells his partner Elena that she 'is always on her phone when I'm talking'", "Marco's own screen-time log shows four hours on his phone that evening, and Elena's phone stayed in her bag all night"] },
    reason: { D1: 'One person is saying something to another about what happens between them: {cue:D1}.',
              T1: 'Marco accuses Elena: {cue:T1}. The log shows the accuser doing it, and the case shows Elena not doing it.' },
    not: { outcome: 'ordexchange', why: 'A fair complaint would have the case showing Elena on her phone. It shows Marco on his, and hers in her bag.' } },

  /* ---------- Cases whose story points the wrong way ---------- */
  { id: 'r-gas-m', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a promised flat deposit', echo: 'o-review',
    text: "In May Kaya's father-in-law, Walt, wrote to her and her husband: 'We'll pay the deposit on your new flat.' The message is still on her phone. Since then, whenever Kaya brings it up, Walt says kindly, 'Oh sweetheart, I never said that. You've been so tired lately,' and later, 'Honestly, dear, you're thinking of someone else's family,' and later, 'We worry about you, you know. You do imagine things.' This has gone on for five months. Kaya now keeps screenshots of everything, and has asked her husband, 'Is it me?'",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { D1: 'whenever Kaya brings it up, Walt says kindly',
            T1: "whenever Kaya brings it up, Walt says kindly, 'Oh sweetheart, I never said that. You've been so tired lately,' and later, 'Honestly, dear, you're thinking of someone else's family,' and later, 'We worry about you, you know. You do imagine things.' This has gone on for five months." },
    reason: { D1: 'One person is saying something to another about what has happened between them: {cue:D1}.',
              T1: 'The message on her phone shows it really happened. Walt tells her it did not, again and again: {cue:T1} The kind tone does not change what is done to her, and Kaya now asks, "Is it me?"' },
    not: { outcome: 'ordexchange', why: 'A gentle voice and a worried face can sound like {o:ordexchange}. But the denial returns for five months about something the case shows really happened, and Kaya now doubts herself.' } },

  { id: 'r-dar-m', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a lapsed hall insurance', also: ['ownfault'], echo: 'p-expenses',
    text: "Sandy, the treasurer of a village hall committee, is asked by the secretary, Lev, why the hall's insurance lapsed in March. The committee's emails show that Sandy was told to renew it and never did, and show Lev renewing the gas safety certificate on time. 'I renewed it,' Sandy says. 'You're the one who never reads the post. You let the gas safety certificate lapse last year and nobody said a word. I do everything round here and I'm the one who gets cross-examined.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: "is asked by the secretary, Lev, why the hall's insurance lapsed in March",
            T1: ["The committee's emails show that Sandy was told to renew it and never did", "'I renewed it,' Sandy says. 'You're the one who never reads the post. You let the gas safety certificate lapse last year and nobody said a word. I do everything round here and I'm the one who gets cross-examined.'"] },
    reason: { D1: 'One person is raising something with another that has happened between them: {cue:D1}.',
              T1: 'The emails show Sandy did it, and Lev raises it. Sandy denies it, attacks Lev, and plays the one wronged: {cue:T1} The attack also fits the accuser, since Sandy is the one who let things lapse. When a case shows both, the answer is {a:T1.reverse}.' },
    not: { outcome: 'projection', why: 'Sandy does accuse Lev of what Sandy did. But Lev raised the lapse with Sandy first, so Sandy is answering something, with a denial and by playing the one wronged. That is what puts the case with the other name.' } },

  { id: 'r-proj-m', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a gentle complaint about check-ins', echo: 'dishes',
    text: "Callie takes Joe aside and says gently, 'I only say this because I care. You've been skipping our Monday check-ins.' The calendar shows Joe at every Monday check-in, and shows Callie missing the last four. Nobody else has mentioned any skipped meetings.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { D1: "Callie takes Joe aside and says gently, 'I only say this because I care. You've been skipping our Monday check-ins.'",
            T1: ["You've been skipping our Monday check-ins", 'The calendar shows Joe at every Monday check-in, and shows Callie missing the last four'] },
    reason: { D1: 'One person is saying something to another about what has happened between them: {cue:D1}.',
              T1: 'Callie accuses Joe: {cue:T1}. The calendar shows the accuser missing them and Joe attending every one, so nothing shows Joe doing it. A caring voice does not change that.' },
    not: { outcome: 'ordexchange', why: 'A fair complaint would have the case showing Joe skipping the check-ins. It shows the reverse, and shows Callie missing them.' } },

  { id: 'r-love-m', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a food bank coordinator',
    text: "Zadie started volunteering at the food bank. Within three weeks the coordinator, Ben, had given her a set of keys, called her 'my right hand', and asked her opinion on everything. In week five she told him she could only do Saturdays. Ben took her off the volunteers' group chat, stopped speaking to her on shifts, and told another volunteer she 'only does what suits her'.",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { D1: "Ben took her off the volunteers' group chat, stopped speaking to her on shifts, and told another volunteer she 'only does what suits her'",
            T1: ["had given her a set of keys, called her 'my right hand', and asked her opinion on everything", "Ben took her off the volunteers' group chat, stopped speaking to her on shifts, and told another volunteer she 'only does what suits her'"] },
    reason: { D1: 'One person is doing something to another that is about the other person: {cue:D1}.',
              T1: 'This is not a romance, and the answer does not need one. Within three weeks came far more trust and attention than three weeks would explain: {cue:T1}. It was pulled back, with criticism, when Zadie set a limit.' },
    not: { outcome: 'ordexchange', why: 'A warm coordinator who stayed warm when Zadie said Saturdays only would be {o:ordexchange}. Here the attention stops and turns critical.' } },

  { id: 'r-ord-m1', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a wrong pallet owned up to', echo: 'd-till',
    text: "The warehouse log shows that Idris loaded the wrong pallet onto a lorry. His supervisor, Mel, asks him about it. 'Yes, that was me,' Idris says. 'I'm sorry, and I'm furious with myself. I was given two different bay numbers and I should have asked.' He goes out and reloads it.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { D1: 'His supervisor, Mel, asks him about it',
            T1: "'Yes, that was me,' Idris says. 'I'm sorry, and I'm furious with myself. I was given two different bay numbers and I should have asked.'" },
    reason: { D1: 'One person is raising something with another that has happened between them: {cue:D1}.',
              T1: 'The log shows Idris did it, and Mel raises it, which is how it can look like {o:darvo}. But he answers {cue:T1} He does not deny it, does not attack Mel, and does not play the one wronged. The anger is at himself.' },
    not: { outcome: 'darvo', why: 'It looks like it, because the case shows he did it and Mel raised it. But {o:darvo} needs all three in answer: a denial, an attack and playing the one wronged, and Idris gives none of them.' } }
]);
