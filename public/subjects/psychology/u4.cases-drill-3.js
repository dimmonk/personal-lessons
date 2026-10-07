// Psychology, Unit Four: drill cases for the route stage, cases whose story points the wrong way.
// echo names a teaching case whose story this one resembles while its name differs: the feedback says so, which is how the
// "does it look like a case you know?" second look is practiced.

FC.cases('psychology', 'u4', [

  /* ---------- Cases whose story points the wrong way ---------- */
  { id: 'pa-m-ord', use: 'drill', tier: 'misleading', setting: 'work', topic: 'an accountancy partner who is thanked', echo: 'pa-dennis',
    text: "Ioan is fifty-four and a senior partner at an accounting firm. He has the corner room, sits at the head of every table and opens meetings with the story of how he built the firm; his juniors have counted that he tells it eleven times a year. When a trainee won a major client, Ioan bought the team lunch and put her name on the door. His juniors stay for ten years or more, his son works in the firm, and his wife says that in thirty years he has never missed asking about her day.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { D1: ['in thirty years he has never missed asking about her day', 'His juniors stay for ten years or more'], P1: ['opens meetings with the story of how he built the firm', 'bought the team lunch and put her name on the door', 'his son works in the firm'] },
    reason: { D1: 'This covers thirty years, a firm and a family: {cue:D1}.',
              P1: 'Ioan is proud of himself and says so, which can look like {o:narcgrand}. But {cue:P1}: nobody has left, so it does not keep costing and is not a {t:pd}.' },
    not: { outcome: 'narcgrand', why: 'The corner room, the head of the table and the firm’s story all look like Dennis. But Ioan does not turn scornful when someone else is praised, and nothing is being lost.' } },

  { id: 'pa-m-nv', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a cheerful man who keeps a tally', echo: 'pa-marguerite',
    text: "Quentin is fifty and the first to buy a round and the last to leave an office party. He says, with a laugh, that he is the most underrated man in insurance. When his deputy was thanked at the annual dinner, Quentin laughed it off and then did not speak to her again for a year, and he has never spoken to the director who thanked her. It has happened at all four firms he has worked for. His wife says he keeps a quiet tally of every slight and has not forgiven his best man for a speech in 1998.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { D1: ['at all four firms he has worked for', 'a speech in 1998'], P1: ['the most underrated man in insurance', 'did not speak to her again for a year', 'keeps a quiet tally of every slight'] },
    reason: { D1: 'This covers four firms and a marriage of many years: {cue:D1}.',
              P1: 'Quentin is loud and cheerful at parties, which can look like {o:histrionic}. But {cue:P1}: he says he is overlooked, goes cold when someone else is thanked, and keeps count.' },
    not: { outcome: 'narcgrand', why: 'Quentin is not scornful. He laughs it off in public, and the hurt comes out as years of silence and a quiet tally.' } },
]);
