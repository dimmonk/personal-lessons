// Psychology, Unit Three: drill cases for the route stage, clean cases, part one (telling someone it did not happen, the ordinary exchange, love-bombing).
// The whole route is asked, starting with the first question, so every case carries marked words and a reason for each question.

FC.cases('psychology', 'u3', [

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
    not: { outcome: 'ordexchange', why: 'A friendly roommate who stayed friendly when Mia said no would be {o:ordexchange}. Here the attention stops and turns critical.' } }
]);
