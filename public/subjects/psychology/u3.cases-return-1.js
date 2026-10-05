// Psychology, Unit Three: fresh cases kept back for later days (first file: gaslighting, turning the blame around, love-bombing).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries
// marked words and a reason for both questions. Three cases for each name: one for each scheduled return (E9).

FC.cases('psychology', 'u3', [

  /* ---------- Gaslighting ---------- */
  { id: 'ret-tenancy', use: 'return', tier: 'varied', setting: 'home', topic: 'a promised rent freeze',
    text: "In January the landlord, Mr Hale, wrote to his tenant Beth that her rent would stay the same all year, and the letter is in her drawer. Since February, whenever she mentions it, he says, 'I never wrote that,' and later, 'You've misread it,' and later, 'Tenants always remember things in their own favour.' It has gone on for five months, and Beth has started asking her friends whether she reads things wrong.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { D1: 'whenever she mentions it, he says',
            T1: "whenever she mentions it, he says, 'I never wrote that,' and later, 'You've misread it,' and later, 'Tenants always remember things in their own favour.' It has gone on for five months" },
    reason: { D1: 'One person is saying something to another about what has happened between them: {cue:D1}.',
              T1: 'The letter shows it really happened. Mr Hale tells Beth it did not: {cue:T1}. Beth now asks her friends whether she reads things wrong, which shows her doubting her own judgement of what she saw.' },
    not: { outcome: 'ordexchange', why: 'A single disagreement about what a letter said would be {o:ordexchange}. Here the denial comes back for five months and Beth has begun to doubt herself.' } },

  { id: 'ret-promotion', use: 'return', tier: 'varied', setting: 'work', topic: 'a promised promotion',
    text: "In February Rob's manager, Gail, emailed him that he would be put forward for promotion in the autumn. Since then, whenever Rob asks about it, Gail says, 'I never said autumn,' and later, 'I think you wanted it so much you heard it,' and later, 'We've talked about this and you keep rewriting it.' By October Rob keeps a diary of every meeting and has asked his wife whether he is rewriting things.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { D1: 'whenever Rob asks about it, Gail says',
            T1: "whenever Rob asks about it, Gail says, 'I never said autumn,' and later, 'I think you wanted it so much you heard it,' and later, 'We've talked about this and you keep rewriting it.'" },
    reason: { D1: 'One person is saying something to another about what has happened between them: {cue:D1}.',
              T1: 'The email shows she said it. Gail then says she did not: {cue:T1} It runs from February to October, and Rob has started asking his wife whether he is rewriting things.' },
    not: { outcome: 'darvo', why: 'There is no single exchange of a denial, an attack and playing the one wronged. The same denial returns for months, until Rob doubts his memory.' } },

  { id: 'ret-deadline', use: 'return', tier: 'varied', setting: 'learning', topic: 'a moved coursework deadline',
    text: "Mr Dunn sent Priya home with a note saying her coursework deadline had moved to the fourteenth, and the note is in her bag. Since then, whenever she mentions it, he says, 'I never moved the deadline,' and later, 'You've got the date wrong again,' and later, 'Pupils always say that.' After two months Priya no longer trusts her own notes, and asks classmates to check what he said.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { D1: 'whenever she mentions it, he says',
            T1: "whenever she mentions it, he says, 'I never moved the deadline,' and later, 'You've got the date wrong again,' and later, 'Pupils always say that.'" },
    reason: { D1: 'One person is saying something to another about what has happened between them: {cue:D1}.',
              T1: 'The note shows it really happened. He tells her it did not: {cue:T1} It goes on for two months, until Priya has stopped trusting her own notes.' },
    not: { outcome: 'ordexchange', why: 'One disagreement about a date would be {o:ordexchange}. Here the denial comes back for two months and Priya no longer trusts her notes.' } },

  /* ---------- Turning the blame around ---------- */
  { id: 'ret-drive', use: 'return', tier: 'varied', setting: 'community', topic: 'a van across a drive',
    text: "A photo from the neighbourhood app shows Ahmed's van across Gina's drive. Gina asks him to move it. Ahmed says, 'It wasn't there. You're the one who is always on at people. I've lived on this street twenty years and I'm the one being hounded.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: 'Gina asks him to move it',
            T1: "Ahmed says, 'It wasn't there. You're the one who is always on at people. I've lived on this street twenty years and I'm the one being hounded.'" },
    reason: { D1: 'One person is raising something with another that has happened between them: {cue:D1}.',
              T1: 'The photo shows Ahmed did it, and Gina raises it. He denies it ("It wasn\'t there"), attacks her ("always on at people"), and plays the one wronged ("the one being hounded"). {cue:T1}' },
    not: { outcome: 'gaslight', why: 'Nothing shows the denial coming back over weeks or months, or Gina doubting her memory. It is one exchange.' } },

  { id: 'ret-withdrawal', use: 'return', tier: 'varied', setting: 'money', topic: 'a joint account withdrawal',
    text: "The bank record shows that Ines withdrew £500 from the joint account. Her husband, Lars, asks her about it. Ines says, 'I didn't take anything. You check up on me constantly, it's pathetic. I can't believe I'm being treated like a criminal in my own marriage.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: 'Her husband, Lars, asks her about it',
            T1: "Ines says, 'I didn't take anything. You check up on me constantly, it's pathetic. I can't believe I'm being treated like a criminal in my own marriage.'" },
    reason: { D1: 'One person is raising something with another that has happened between them: {cue:D1}.',
              T1: 'The record shows Ines did it, and Lars raises it. She denies it ("I didn\'t take anything"), attacks him ("You check up on me constantly"), and plays the one wronged ("treated like a criminal"). {cue:T1}' },
    not: { outcome: 'projection', why: 'Lars raised it with Ines first, so she is answering something. In {o:projection} nobody has raised anything, and the accusation is where the case starts.' } },

  { id: 'ret-quote', use: 'return', tier: 'varied', setting: 'work', topic: 'a wrong quote sent to a client',
    text: "The email log shows that Dan sent a client the wrong quote. His colleague Fay asks him about it. Dan says, calmly and sadly, 'I didn't send it. Honestly, Fay, I'm hurt that you would say that, when you were the one who lost the Harris account. I've always backed you up, and now I'm made out to be the problem.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: 'His colleague Fay asks him about it',
            T1: "Dan says, calmly and sadly, 'I didn't send it. Honestly, Fay, I'm hurt that you would say that, when you were the one who lost the Harris account. I've always backed you up, and now I'm made out to be the problem.'" },
    reason: { D1: 'One person is raising something with another that has happened between them: {cue:D1}.',
              T1: 'The log shows Dan did it, and Fay raises it. A calm, sad voice does not change what he says: he denies it ("I didn\'t send it"), attacks her ("the one who lost the Harris account"), and plays the one wronged ("made out to be the problem"). {cue:T1}' },
    not: { outcome: 'ordexchange', why: 'A calm voice can sound like an ordinary reply. But Dan does all three: he denies it, attacks Fay, and plays the one wronged.' } },

  /* ---------- Love-bombing ---------- */
  { id: 'ret-climb', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a new climbing partner',
    text: "In the first fortnight, Tara's new climbing partner Joel messaged her daily, bought her a harness, and told the whole club she was the best partner he had ever had. When Tara said she would climb with other people on Wednesdays, Joel stopped answering her and told people she was 'flaky'.",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { D1: "Joel stopped answering her and told people she was 'flaky'",
            T1: ['messaged her daily, bought her a harness, and told the whole club she was the best partner he had ever had', "Joel stopped answering her and told people she was 'flaky'"] },
    reason: { D1: 'One person is doing something to another that is about the other person: {cue:D1}.',
              T1: 'A fortnight would not explain the attention: {cue:T1}. It was pulled back, and turned critical, when Tara said she would climb with others.' },
    not: { outcome: 'ordexchange', why: 'A keen new partner who stayed keen when Tara said Wednesdays were for others would be {o:ordexchange}. Here the attention stops and turns critical.' } },

  { id: 'ret-intern', use: 'return', tier: 'varied', setting: 'work', topic: 'a senior colleague and an intern',
    text: "On the intern Obi's first day, a senior colleague, Vera, took him to lunch, gave him her personal number, and told the team he was the most talented intern she had met. By the third week she was sending him home with books. When Obi said he would not be able to stay late on Fridays, Vera stopped inviting him to meetings and told the team his work had 'gone downhill'.",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { D1: "Vera stopped inviting him to meetings and told the team his work had 'gone downhill'",
            T1: ['took him to lunch, gave him her personal number, and told the team he was the most talented intern she had met', "Vera stopped inviting him to meetings and told the team his work had 'gone downhill'"] },
    reason: { D1: 'One person is doing something to another that is about the other person: {cue:D1}.',
              T1: 'A first day would not explain the attention: {cue:T1}. It was pulled back, with criticism, when Obi set a limit on Fridays.' },
    not: { outcome: 'ordexchange', why: 'Generous mentoring that stayed generous would be {o:ordexchange}. Here it is withdrawn and replaced by criticism once Obi says no.' } },

  { id: 'ret-buddy', use: 'return', tier: 'varied', setting: 'learning', topic: 'a study buddy',
    text: "Within a week of meeting at university, Hana's new study buddy, Lukas, had sent her his notes for the whole year, texted her good morning every day, and told his friends she was the cleverest person he knew. When Hana said she would revise alone before her exam, Lukas stopped replying for ten days and then wrote, 'I gave you everything and you shut me out.'",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { D1: "Lukas stopped replying for ten days and then wrote, 'I gave you everything and you shut me out.'",
            T1: ['had sent her his notes for the whole year, texted her good morning every day, and told his friends she was the cleverest person he knew', "Lukas stopped replying for ten days and then wrote, 'I gave you everything and you shut me out.'"] },
    reason: { D1: 'One person is doing something to another that is about the other person: {cue:D1}.',
              T1: 'A week would not explain the attention: {cue:T1} It was pulled back, with a reproach, when Hana wanted to revise alone.' },
    not: { outcome: 'ordexchange', why: 'A friendly study partner who accepted "I will revise alone" would be {o:ordexchange}. Here the attention stops and the reply is a reproach.' } }
]);
