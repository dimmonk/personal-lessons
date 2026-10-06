// Psychology, Unit Three: fresh cases kept back for later days (first file: gaslighting, turning the blame around, love-bombing).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries
// marked words and a reason for both questions. One case for each name.

FC.cases('psychology', 'u3', [

  { id: 'ret-tenancy', use: 'return', tier: 'varied', setting: 'home', topic: 'a promised rent freeze',
    text: "In January the landlord, Mr. Hale, wrote to his tenant Beth that her rent would stay the same all year, and the letter is in her drawer. Since February, whenever she mentions it, he says, 'I never wrote that,' and later, 'You've misread it,' and later, 'Tenants always remember things in their own favor.' It has gone on for five months, and Beth has started asking her friends whether she reads things wrong.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { D1: 'whenever she mentions it, he says',
            T1: "whenever she mentions it, he says, 'I never wrote that,' and later, 'You've misread it,' and later, 'Tenants always remember things in their own favor.' It has gone on for five months" },
    reason: { D1: 'One person is saying something to another about what has happened between them: {cue:D1}.',
              T1: 'The letter shows it really happened. Mr. Hale tells Beth it did not: {cue:T1}. Beth now asks her friends whether she reads things wrong, which shows her doubting her own judgment of what she saw.' },
    not: { outcome: 'ordexchange', why: 'A single disagreement about what a letter said would be {o:ordexchange}. Here the denial comes back for five months and Beth has begun to doubt herself.' } },

  { id: 'ret-drive', use: 'return', tier: 'varied', setting: 'community', topic: 'a van across a drive',
    text: "A photo from the neighborhood app shows Ahmed's van across Gina's drive. Gina asks him to move it. Ahmed says, 'It wasn't there. You're the one who is always on people’s case. I've lived on this street twenty years and I'm the one being hounded.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: 'Gina asks him to move it',
            T1: "Ahmed says, 'It wasn't there. You're the one who is always on people’s case. I've lived on this street twenty years and I'm the one being hounded.'" },
    reason: { D1: 'One person is raising something with another that has happened between them: {cue:D1}.',
              T1: 'The photo shows Ahmed did it, and Gina raises it. He denies it ("It wasn\'t there"), attacks her ("always on at people"), and plays the one wronged ("the one being hounded"). {cue:T1}' },
    not: { outcome: 'gaslight', why: 'Nothing shows the denial coming back over weeks or months, or Gina doubting her memory. It is one exchange.' } },

  { id: 'ret-climb', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a new climbing partner',
    text: "In the first two weeks, Tara's new climbing partner Joel messaged her daily, bought her a harness, and told the whole club she was the best partner he had ever had. When Tara said she would climb with other people on Wednesdays, Joel stopped answering her and told people she was 'flaky'.",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { D1: "Joel stopped answering her and told people she was 'flaky'",
            T1: ['messaged her daily, bought her a harness, and told the whole club she was the best partner he had ever had', "Joel stopped answering her and told people she was 'flaky'"] },
    reason: { D1: 'One person is doing something to another that is about the other person: {cue:D1}.',
              T1: 'Two weeks would not explain the attention: {cue:T1}. It was pulled back, and turned critical, when Tara said she would climb with others.' },
    not: { outcome: 'ordexchange', why: 'A keen new partner who stayed keen when Tara said Wednesdays were for others would be {o:ordexchange}. Here the attention stops and turns critical.' } }
]);
