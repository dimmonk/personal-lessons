// Psychology, Unit Four: drill cases for stages one and two. None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case (a neighbor in the ledger) and says why it fails.
// Stages one and two ask only the key's own question, so these cases carry marked words for it alone. The cases of stage three, which shows the
// first answer and asks the rest, and of stage four, are in the files that follow.

FC.cases('psychology', 'u4', [

  /* ---------- Stage one: the key's answers are shown, the learner gives the name ---------- */
  { id: 'pa-n-ga', use: 'drill', tier: 'clean', setting: 'home', topic: 'a family head and a daughter’s college',
    text: "Hal is sixty and has headed his family since his father died. For thirty years he has told his brothers and his children that nobody else can be trusted with a decision. When his daughter was offered a place at a college he had not chosen, he called her 'an ungrateful child who has learned nothing' and did not speak to her for two years. His second wife has left, and two of his three children now see him only at funerals.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { P1: ['nobody else can be trusted with a decision', 'an ungrateful child who has learned nothing', 'two of his three children now see him only at funerals'] },
    reason: { P1: 'Hal acts as if he alone is fit to decide, and when his daughter went her own way he turned on her with scorn: {cue:P1}. It has lasted thirty years and it has cost him a wife and two children.' },
    not: { outcome: 'narcvuln', why: 'Hal does not pull away hurt and say that he has been overlooked. He turns on his daughter openly, with scorn.' } },

  { id: 'pa-n-nv', use: 'drill', tier: 'clean', setting: 'health', topic: 'a nurse in four hospitals',
    text: "Carmen is thirty-eight and has worked in four hospitals. At each one she has said that the doctors never see how much she does, and that others are praised for less. When a nurse she had trained was given the team award, Carmen did not speak to her for three months and stopped coming to the unit lunches. She has done the same with every colleague who was promoted, and two nurse managers have written that they cannot give her a team to lead.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { P1: ['the doctors never see how much she does, and that others are praised for less', 'did not speak to her for three months', 'two nurse managers have written that they cannot give her a team to lead'] },
    reason: { P1: 'Carmen says she is overlooked and owed more, and when a colleague is honored she does not argue. She goes cold: {cue:P1}. It has followed her through four hospitals, and it has cost her any chance of leading a team.' },
    not: { outcome: 'narcgrand', why: 'Carmen does not run the nurse down or turn scornful. She goes silent and stays away.' } },

  { id: 'pa-n-an', use: 'drill', tier: 'clean', setting: 'money', topic: 'timeshares in three countries',
    text: "Lorne is forty-three and has sold timeshares in three countries. He tells every buyer that the apartment is 'guaranteed to double'. He has been fined in two of the countries, and a former colleague says that he took commission on sales he knew would be canceled. When an elderly couple wrote that they had lost their retirement money, he replied that they 'had signed, hadn't they?' At twenty he was given a police warning for selling stolen tickets, and eleven buyers are now suing him.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { P1: ['took commission on sales he knew would be canceled', "had signed, hadn't they", 'eleven buyers are now suing him'] },
    reason: { P1: 'Lorne breaks rules and uses people for his own ends, and when a couple lost their retirement money he showed no regret: {cue:P1}. He has done it in three countries and since he was twenty, and eleven buyers are suing him.' },
    not: { outcome: 'narcgrand', why: 'Lorne does not need anyone to treat him as special, and nothing in the case shows him turning scornful when they do not. What drives it is money, got by lying.' } },

  { id: 'pa-n-bl', use: 'drill', tier: 'clean', setting: 'home', topic: 'a roommate’s weekend trip',
    text: "Joelle is twenty-eight. In every friendship since school she has panicked when a friend was busy. When her roommate took a weekend trip she sent twenty-six messages, and then wrote, 'Go on then, leave, you were never my friend anyway.' An hour later she was sobbing on the phone and begging her to come back. Three roommates in a row have left within a year, and her mother says that it was the same with all her boyfriends.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { P1: ['sent twenty-six messages', 'you were never my friend anyway', 'Three roommates in a row have left within a year'] },
    reason: { P1: 'When her roommate seemed to be going, Joelle held on hard and then turned on her: {cue:P1}. It has been the same in every friendship since school, and it has cost her three roommates in a row.' },
    not: { outcome: 'narcvuln', why: 'Joelle does not pull away and keep a count. She reaches for her roommate, attacks her, and begs her back.' } },

  { id: 'pa-n-hi', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a student representative',
    text: "Gideon is thirty and a student representative. At every meeting he has sat in since school he has told his news in a loud, theatrical voice, and added to it when the chair turned to someone else. When another representative reported good exam results, Gideon sighed that he had had a terrible week, put his head in his hands and said he could not go on until the others asked what was wrong. Two committees have asked him to be quieter, and he has lost two elections.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['center'] },
    cues: { P1: ['told his news in a loud, theatrical voice', 'put his head in his hands and said he could not go on until the others asked what was wrong', 'he has lost two elections'] },
    reason: { P1: 'Gideon puts himself at the center, and when attention went to another representative his display got bigger: {cue:P1}. It has been the same since school, and it has cost him two elections.' },
    not: { outcome: 'narcgrand', why: 'Gideon does not run the other representative down. He turns the attention back to himself.' } },

  { id: 'pa-n-ord', use: 'drill', tier: 'clean', setting: 'health', topic: 'a gruff senior doctor',
    text: "Dr. Anand is sixty and has been famously gruff for thirty-five years, in two hospitals. She says what she thinks to patients, residents and the board, and has never been known to flatter anyone. Her residents ask to work with her, patients write her letters, and she has the same three friends she has had since medical school. When a resident corrects her she says, 'You're right,' and changes the note.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['famously gruff for thirty-five years', 'Her residents ask to work with her', 'she has the same three friends she has had since medical school'] },
    reason: { P1: 'Dr. Anand has been gruff for thirty-five years and in both hospitals, and the case shows what that has not cost: {cue:P1}. A way of being that is harsh to hear and leaves no repeated cost behind it is not what the other names point to.' },
    not: { outcome: 'narcgrand', why: 'She is gruff, which {o:narcgrand} can be too. But she does not turn scornful when she is corrected: she says "You\'re right" and changes the note, and her residents ask to stay.' } },

  /* ---------- Stage two: the key's question alone, on a new case ---------- */
  { id: 'pa-p-ga', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a sailing club captain',
    text: "Ines is forty-seven and has captained her sailing club for fifteen years. She tells every new member that they are lucky to learn from her. When a member's design for the new race course was voted in over hers, she called him 'a hobbyist with a pencil' in the bar and canceled his entry to the next regatta. She has driven out four committee members, and her sister stopped sailing with her years ago.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { P1: ['they are lucky to learn from her', 'a hobbyist with a pencil', 'She has driven out four committee members'] },
    reason: { P1: 'Ines acts as if the others are lucky to have her, and when the vote went against her she turned scornful: {cue:P1}. It has lasted fifteen years and it has cost the club four committee members.' },
    not: { outcome: 'ordpersonality', why: 'A bossy, certain captain can be {o:ordpersonality}. But Ines turns scornful when she is outvoted, and people have left because of it.' } },

  { id: 'pa-p-an', use: 'drill', tier: 'clean', setting: 'community', topic: 'a nursing home manager and residents’ money',
    text: "Nigel is fifty-one and manages a nursing home. For fifteen years, at three homes, he has taken residents' spending money 'for safekeeping' and spent it, altered the visitor logs when relatives asked questions, and told families that the money was 'in a trust'. When one daughter found out and wept, he said that her mother 'should have kept better track'. Two homes have closed on him, and one family has lost four thousand dollars.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { P1: ["taken residents' spending money 'for safekeeping' and spent it", 'should have kept better track', 'one family has lost four thousand dollars'] },
    reason: { P1: 'Nigel has taken money from people who could not check, lied to their families, and shown no regret to a daughter in tears: {cue:P1}. It has gone on for fifteen years in three homes.' },
    not: { outcome: 'narcgrand', why: 'Nothing in the case shows Nigel needing to be treated as special, or turning scornful when he is not. What drives it is the money, got by lying.' } },

  { id: 'pa-p-ord', use: 'drill', tier: 'varied', setting: 'learning', topic: 'a faculty-room joker',
    text: "Mina is thirty-three and has been the class joker at school, in college and in the faculty room of the school where she teaches. She mocks herself first and everyone else second, and says sorry when it lands badly. Pupils from three years ago still email her, and the principal says that the faculty room is a better place with her in it.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['has been the class joker at school, in college and in the faculty room', 'says sorry when it lands badly', 'Pupils from three years ago still email her'] },
    reason: { P1: 'Mina has been the center of the room for her whole life, and the case shows what that has not cost: {cue:P1}. She puts it right when it goes wrong, and people stay.' },
    not: { outcome: 'histrionic', why: 'She is the center of the room, which {o:histrionic} can be too. But nothing in the case shows her displays getting bigger when attention goes elsewhere, and nothing has been lost.' } },

  { id: 'pa-p-hi', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a golf club talker',
    text: "Anders is fifty-two and the most talkative man at his golf club, and the one who is always first to the bar with a story. When another member scored a hole in one, Anders stood on a bench and told the clubhouse about the day his father died, until the whole room had turned around and the other member's drink had gone warm. It has been the same at the three clubs he has belonged to. Two have asked him to leave, and no one will sit with him at the dinner.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['center'] },
    cues: { P1: ['the most talkative man at his golf club', 'stood on a bench and told the clubhouse about the day his father died', 'Two have asked him to leave'] },
    reason: { P1: 'Anders is at the center of the club, and when another member got the attention his display got bigger: {cue:P1}. It has been the same at three clubs, and two have asked him to leave.' },
    not: { outcome: 'borderline', why: 'Anders attacks no one and holds on to no one person. The whole room is his audience.' } },

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
