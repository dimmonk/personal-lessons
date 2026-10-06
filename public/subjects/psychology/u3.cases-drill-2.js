// Psychology, Unit Three: drill cases for stage three (the first answer is shown, the learner finishes the route) and the clean cases of stage four.
// Every question is asked from stage three on, starting with the first question of the key, so every case carries marked words
// and a reason for that question too (D1).

FC.cases('psychology', 'u3', [

  /* ---------- Stage three: the first answer is shown; the learner answers the key's question and gives the name ---------- */
  { id: 'f-gas', use: 'drill', tier: 'varied', setting: 'home', topic: 'a photo album with missing pages',
    text: "Marta lent her sister Anna their late mother's photo album, and Anna gave it back with three pages missing; Marta has the album and the gaps. Since then, whenever Marta mentions the pages, Anna says, 'It was always like that,' and later, 'You're confusing it with another album,' and later, 'This is your imagination again.' After five months Marta has asked a cousin to look through it with her, to check what she remembers.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { D1: 'whenever Marta mentions the pages, Anna says',
            T1: "whenever Marta mentions the pages, Anna says, 'It was always like that,' and later, 'You're confusing it with another album,' and later, 'This is your imagination again.'" },
    reason: { D1: 'One person is saying something to another about what has happened between them: {cue:D1}. It is about their dealings, and it runs over months in one relationship.',
              T1: 'The album and its gaps show what really happened. Anna then tells her it did not: {cue:T1} It comes back for months, and Marta has gone as far as asking a cousin to check what she remembers.' },
    not: { outcome: 'ordexchange', why: 'One disagreement about whether the pages were ever there would be {o:ordexchange}. Here the denial keeps coming back and Marta has begun to doubt her memory.' } },

  { id: 'f-ord', use: 'drill', tier: 'varied', setting: 'work', topic: 'a call time',
    text: "Jo says to Fin, 'I thought we agreed the call was at three.' Fin says, 'I wrote down two. Let me check.' He looks at the calendar invite, which says three. 'You're right, sorry. I'll call them now.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { D1: "Jo says to Fin, 'I thought we agreed the call was at three.'",
            T1: "He looks at the calendar invite, which says three. 'You're right, sorry. I'll call them now.'" },
    reason: { D1: 'One person is saying something to another about what was agreed between them: {cue:D1}.',
              T1: 'Fin remembers it differently, checks, and says {cue:T1} The disagreement is one exchange, it is settled by looking, and nobody is left doubting their own memory.' },
    not: { outcome: 'gaslight', why: 'Fin does not tell Jo again and again that something did not happen. He remembers it differently once, checks, and agrees.' } },

  { id: 'f-dar', use: 'drill', tier: 'varied', setting: 'learning', topic: 'an overdue library book',
    text: "The library system shows that Kofi never returned a book he borrowed, and a classmate, Alma, asks him about the fine. Kofi says, 'I returned it a long time ago. You love making a scene about other people's mistakes. I covered for you last semester, and this is how I'm treated. I'm the one who always gets blamed.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: 'a classmate, Alma, asks him about the fine',
            T1: "Kofi says, 'I returned it a long time ago. You love making a scene about other people's mistakes. I covered for you last semester, and this is how I'm treated. I'm the one who always gets blamed.'" },
    reason: { D1: 'One person is raising something with another that has happened between them: {cue:D1}.',
              T1: 'The system shows Kofi did it, and Alma raises it. He denies it ("I returned it a long time ago"), attacks her ("You love making a scene"), and plays the one wronged ("I\'m the one who always gets blamed"). {cue:T1}' },
    not: { outcome: 'ordexchange', why: 'Someone who simply said "Sorry, I forgot to return it" would be {o:ordexchange}. Kofi denies, attacks and plays the one wronged, all in one reply.' } },

  { id: 'f-proj', use: 'drill', tier: 'varied', setting: 'home', topic: 'a tenants cleaning share',
    text: "At the tenants' meeting, Rhona says Bill 'never pays his share of the cleaning'. The cleaning ledger shows that Rhona has paid nothing for six months and that Bill has paid every month. Nobody had asked Rhona about her payments.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { D1: "At the tenants' meeting, Rhona says Bill 'never pays his share of the cleaning'",
            T1: ["Rhona says Bill 'never pays his share of the cleaning'", 'Rhona has paid nothing for six months and that Bill has paid every month'] },
    reason: { D1: 'One person is saying something to another about what has happened between them, at their meeting: {cue:D1}.',
              T1: 'Rhona accuses Bill: {cue:T1}. The case shows the accuser doing it and the person accused doing the opposite, and nobody had raised it with her.' },
    not: { outcome: 'darvo', why: 'Nobody had asked Rhona about her payments, so she is not answering anything by denying, attacking and playing the one wronged. The accusation is where the case starts.' } },

  /* ---------- Stage four, clean: the whole route, no help ---------- */
  { id: 'r-gas1', use: 'drill', tier: 'clean', setting: 'money', topic: 'a lent five hundred dollars',
    text: "In June Lee's brother Carl borrowed $500 and wrote in a message, 'I owe you $500.' Lee still has the message. Since then, whenever Lee brings it up, Carl says, 'I never borrowed anything from you,' and later, 'You've mixed me up with someone else,' and later, 'You're making it up to go after me.' Four months on, Lee has stopped mentioning it and has told a friend he sometimes wonders whether he imagined the whole thing.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { D1: 'whenever Lee brings it up, Carl says',
            T1: "whenever Lee brings it up, Carl says, 'I never borrowed anything from you,' and later, 'You've mixed me up with someone else,' and later, 'You're making it up to go after me.'" },
    reason: { D1: 'One person is saying something to another about what has happened between them: {cue:D1}.',
              T1: 'The message shows the loan really happened. Carl then says it did not: {cue:T1} It goes on for four months, and Lee ends up wondering whether he imagined it.' },
    not: { outcome: 'darvo', why: 'There is no single exchange of a denial, an attack and playing the one wronged. The same denial comes back for months, until Lee doubts his memory.' } },

  { id: 'r-ord1', use: 'drill', tier: 'clean', setting: 'health', topic: 'home blood pressure readings',
    text: "Dr. Shah tells Mrs. Okafor that her blood pressure is higher than last time. Mrs. Okafor says, 'I disagree. I have been taking it at home and it is normal.' Dr. Shah says, 'Bring your home readings and we will compare them with the clinic's.' She does, and they agree to repeat the test in a month.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { D1: 'Dr. Shah tells Mrs. Okafor that her blood pressure is higher than last time',
            T1: "Mrs. Okafor says, 'I disagree. I have been taking it at home and it is normal.' Dr. Shah says, 'Bring your home readings and we will compare them with the clinic's.'" },
    reason: { D1: 'One person is telling another something about them, and the other answers: {cue:D1}.',
              T1: 'Mrs. Okafor disagrees, and Dr. Shah answers: {cue:T1} A disagreement is settled by comparing readings. Nothing is denied to the point of doubt, nothing is turned on anyone, and nothing else is going on.' },
    not: { outcome: 'darvo', why: 'Mrs. Okafor disagrees, but she does not attack Dr. Shah or play the one wronged, and the case does not show her doing anything wrong.' } },

  { id: 'r-love1', use: 'drill', tier: 'clean', setting: 'home', topic: 'a new roommate',
    text: "Within days of Mia moving into the shared apartment, her roommate Cass cooked for her every night, lent her money without being asked, and told everyone Mia was the best roommate she had ever had. In the second month Mia said she was going to her parents' for the weekend instead of to Cass's party. Cass slammed the kitchen door, stopped cooking for her, and said, 'I did all that and you throw it in my face.'",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { D1: "Cass slammed the kitchen door, stopped cooking for her, and said, 'I did all that and you throw it in my face.'",
            T1: ['cooked for her every night, lent her money without being asked, and told everyone Mia was the best roommate she had ever had', "Cass slammed the kitchen door, stopped cooking for her, and said, 'I did all that and you throw it in my face.'"] },
    reason: { D1: 'One person is doing something to another that is about the other person: {cue:D1}.',
              T1: 'Days after Mia moved in came far more attention than the days would explain: {cue:T1} It was pulled back, with criticism, when Mia chose her parents over the party.' },
    not: { outcome: 'ordexchange', why: 'A friendly roommate who stayed friendly when Mia said no would be {o:ordexchange}. Here the attention stops and turns critical.' } },

  { id: 'r-dar1', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a bounced club check',
    text: "The bank statement shows that Karl wrote a $400 check to the tennis club that bounced. The club secretary, Una, asks him about it. Karl says, 'It didn't bounce. And you're the last person to ask, with the club's books in the state they're in. I've given this club ten years and I'm the one who gets treated like a thief.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: 'The club secretary, Una, asks him about it',
            T1: "Karl says, 'It didn't bounce. And you're the last person to ask, with the club's books in the state they're in. I've given this club ten years and I'm the one who gets treated like a thief.'" },
    reason: { D1: 'One person is raising something with another that has happened between them: {cue:D1}.',
              T1: 'The statement shows Karl did it, and Una raises it. He denies it ("It didn\'t bounce"), attacks her ("the last person to ask"), and plays the one wronged ("the one who gets treated like a thief"). {cue:T1}' },
    not: { outcome: 'projection', why: 'Karl is answering something Una raised with him. In {o:projection} nobody has raised anything, and the accusation is where the case starts.' } },

  { id: 'r-proj1', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a group chat and a share of the writing',
    text: "In the class group chat, Sven tells everyone that Mia 'never does her share of the group work'. The shared document's history shows that Sven has added nothing in three weeks and that Mia has written most of it. Nobody has asked Sven about his part.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { D1: "Sven tells everyone that Mia 'never does her share of the group work'",
            T1: ["Sven tells everyone that Mia 'never does her share of the group work'", 'Sven has added nothing in three weeks and that Mia has written most of it'] },
    reason: { D1: 'One person is saying something to others about another, and it is about what has happened between them: {cue:D1}.',
              T1: 'Sven accuses Mia: {cue:T1}. The history shows the accuser doing exactly that, and Mia doing the opposite.' },
    not: { outcome: 'ordexchange', why: 'A fair complaint would have the case showing Mia doing it. It shows Sven doing it, and Mia doing the work.' } }
]);
