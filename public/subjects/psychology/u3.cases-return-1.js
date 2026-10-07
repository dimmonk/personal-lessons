// Psychology, Unit Three: fresh cases kept back for later days (first file: gaslighting, turning the blame around, love-bombing).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries
// marked words and a reason for both questions. One case for each name.

FC.cases('psychology', 'u3', [

  { id: 'ret-tenancy', use: 'return', tier: 'varied', setting: 'home', topic: 'a promised rent freeze',
    text: "In January the landlord, Mr. Hale, wrote to his tenant Beth that her rent would stay the same all year, and the letter is in her drawer. Since February, whenever she mentions it, he says, 'I never wrote that,' and later, 'You've misread it,' and later, 'Tenants always remember things in their own favor.' It has gone on for five months, and Beth has started asking her friends whether she reads things wrong.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { D1: 'whenever she mentions it, he says',
            T1: "whenever she mentions it, he says, 'I never wrote that,' and later, 'You've misread it,' and later, 'Tenants always remember things in their own favor.' It has gone on for five months" },
    reason: { D1: 'Mr. Hale is talking to Beth about what is in the letter: {cue:D1}.',
              T1: 'The letter shows what he promised, and he says he never wrote it: {cue:T1}. Beth now asks her friends whether she reads things wrong.' },
    not: { outcome: 'ordexchange', why: 'A single disagreement about what a letter said would be {o:ordexchange}. Here the denial comes back for five months and Beth has started to doubt herself.' } },

  { id: 'ret-drive', use: 'return', tier: 'varied', setting: 'community', topic: 'a van across a drive',
    text: "A photo from the neighborhood app shows Ahmed's van across Gina's drive. Gina asks him to move it. Ahmed says, 'It wasn't there. You're the one who is always on people’s case. I've lived on this street twenty years and I'm the one being hounded.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: 'Gina asks him to move it',
            T1: "Ahmed says, 'It wasn't there. You're the one who is always on people’s case. I've lived on this street twenty years and I'm the one being hounded.'" },
    reason: { D1: 'Gina raises the van with Ahmed: {cue:D1}.',
              T1: 'The photo shows Ahmed did it, and Gina raises it. In answer he does all three: {cue:T1}.' },
    not: { outcome: 'gaslight', why: 'Nothing shows the denial coming back over weeks or months, or Gina doubting her memory. It is one conversation.' } },

  { id: 'ret-climb', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a new climbing partner',
    text: "In the first two weeks, Tara's new climbing partner Joel messaged her daily, bought her a harness, and told the whole club she was the best partner he had ever had. When Tara said she would climb with other people on Wednesdays, Joel stopped answering her and told people she was 'flaky'.",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { D1: "Joel stopped answering her and told people she was 'flaky'",
            T1: ['messaged her daily, bought her a harness, and told the whole club she was the best partner he had ever had', "Joel stopped answering her and told people she was 'flaky'"] },
    reason: { D1: 'Joel is doing something to Tara that is about Tara: {cue:D1}.',
              T1: 'The attention is far more than two weeks would explain, then it stops and turns critical when Tara climbs with others: {cue:T1}.' },
    not: { outcome: 'ordexchange', why: 'A keen new partner who stayed keen when Tara said Wednesdays were for others would be {o:ordexchange}. Here the attention stops and turns critical.' } }
]);
