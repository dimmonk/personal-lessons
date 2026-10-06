// Psychology, Unit Four: drill cases for the piece stage (the learner taps the words that decide). None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case (a neighbor in the ledger) and says why it fails.

FC.cases('psychology', 'u4', [

  /* ---------- Stage two: the key's question alone, on a new case ---------- */
  { id: 'pa-p-ga', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a sailing club captain',
    text: "Ines is forty-seven and has captained her sailing club for fifteen years. She tells every new member that they are lucky to learn from her. When a member's design for the new race course was voted in over hers, she called him 'a hobbyist with a pencil' in the bar and canceled his entry to the next regatta. She has driven out four committee members, and her sister stopped sailing with her years ago.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { P1: ['they are lucky to learn from her', 'a hobbyist with a pencil', 'She has driven out four committee members'] },
    reason: { P1: 'Ines acts as if the others are lucky to have her, and when the vote went against her she turned scornful: {cue:P1}. It has lasted fifteen years and it has cost the club four committee members.' },
    not: { outcome: 'ordpersonality', why: 'A bossy, certain captain can be {o:ordpersonality}. But Ines turns scornful when she is outvoted, and people have left because of it.' } },

  { id: 'pa-p-nv', use: 'drill', tier: 'varied', setting: 'home', topic: 'a Christmas dinner nobody thanked her for',
    text: "Sabine is fifty-five. Since her twenties she has said that her husband's family has never valued her, and that everything she gives is taken for granted. When her sister-in-law was thanked at Christmas for the dinner Sabine had cooked, Sabine said, 'I'm glad someone enjoyed it,' and did not speak to her for a year. She has done the same with two neighbors and a cousin, and her husband says he no longer knows whom to invite.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { P1: ['everything she gives is taken for granted', 'did not speak to her for a year', 'her husband says he no longer knows whom to invite'] },
    reason: { P1: 'Sabine says she is overlooked and owed more, and when someone else was thanked she went cold: {cue:P1}. She has done it with relatives and neighbors for thirty years, and it has cost her a good deal of company.' },
    not: { outcome: 'borderline', why: 'Sabine does not reach for anyone, and she does not swing between adoring them and attacking them. She withdraws, and she stays cold.' } },

  { id: 'pa-p-bl', use: 'drill', tier: 'varied', setting: 'community', topic: 'a volunteer coordinator and his volunteers',
    text: "Arjun is thirty-four and a volunteer coordinator. Whenever a volunteer he is close to talks about leaving, he floods her with praise, offers her the best shifts and says that no one else understands the work. When one handed in her notice he wrote to the trustees that she was 'a snake', and the next day sent her a card saying that he would be lost without her. It has happened with seven volunteers and with each of his last four partners, and the charity has lost five good volunteers.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { P1: ['floods her with praise, offers her the best shifts and says that no one else understands the work', 'a snake', 'It has happened with seven volunteers and with each of his last four partners'] },
    reason: { P1: 'When a volunteer seems about to leave, Arjun holds on hard, then attacks her, then holds on again: {cue:P1}. It has happened with seven volunteers and four partners.' },
    not: { outcome: 'histrionic', why: 'Arjun’s display is not for the room. It is aimed at one person who seems to be leaving, and it turns into an attack on her.' } },
]);
