// Psychology, Unit Three: drill cases for the route stage, misleading cases.
// echo names a teaching case whose story this one resembles while its name differs: the feedback says so, which is how the
// "does it look like a case you know?" second look is practiced.
// also lists answers the case shows as well as its own, which lose to its own by the tie-break (yieldsTo).

FC.cases('psychology', 'u3', [

  { id: 'r-dar-m', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a lapsed hall insurance', also: ['ownfault'], echo: 'p-expenses',
    text: "Sandy, the treasurer of a community hall committee, is asked by the secretary, Lev, why the hall's insurance lapsed in March. The committee's emails show that Sandy was told to renew it and never did, and show Lev renewing the fire inspection permit on time. 'I renewed it,' Sandy says. 'You're the one who never reads the mail. You let the fire inspection permit lapse last year and nobody said a word. I do everything around here and I'm the one who gets cross-examined.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: "is asked by the secretary, Lev, why the hall's insurance lapsed in March",
            T1: ["The committee's emails show that Sandy was told to renew it and never did", "'I renewed it,' Sandy says. 'You're the one who never reads the mail. You let the fire inspection permit lapse last year and nobody said a word. I do everything around here and I'm the one who gets cross-examined.'"] },
    reason: { D1: 'One person is raising something with another that has happened between them: {cue:D1}.',
              T1: 'The emails show Sandy did it, and Lev raises it. Sandy denies it, attacks Lev, and plays the one wronged: {cue:T1} The attack also fits the accuser, since Sandy is the one who let things lapse. When a case shows both, the answer is {a:T1.reverse}.' },
    not: { outcome: 'projection', why: 'Sandy does accuse Lev of what Sandy did. But Lev raised the lapse with Sandy first, so Sandy is answering something, with a denial and by playing the one wronged. That is what puts the case with the other name.' } },

  { id: 'r-ord-m1', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a wrong pallet owned up to', echo: 'd-till',
    text: "The warehouse log shows that Idris loaded the wrong pallet onto a truck. His supervisor, Mel, asks him about it. 'Yes, that was me,' Idris says. 'I'm sorry, and I'm furious with myself. I was given two different bay numbers and I should have asked.' He goes out and reloads it.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { D1: 'His supervisor, Mel, asks him about it',
            T1: "'Yes, that was me,' Idris says. 'I'm sorry, and I'm furious with myself. I was given two different bay numbers and I should have asked.'" },
    reason: { D1: 'One person is raising something with another that has happened between them: {cue:D1}.',
              T1: 'The log shows Idris did it, and Mel raises it, which is how it can look like {o:darvo}. But he answers {cue:T1} He does not deny it, does not attack Mel, and does not play the one wronged. The anger is at himself.' },
    not: { outcome: 'darvo', why: 'It looks like it, because the case shows he did it and Mel raised it. But {o:darvo} needs all three in answer: a denial, an attack and playing the one wronged, and Idris gives none of them.' } }
]);
