// Psychology, Unit Four: drill cases for the third stage (the first answer is shown), and the clean cases of stage four (the whole route, no help).
// Field guide: see u4.cases-drill-1.js. Every question is asked in these, starting with the first question of the key, so every case carries marked words and a reason for that question too (D1).

FC.cases('psychology', 'u4', [

  /* ---------- Stage three: the first answer is shown; the learner answers the key's question and gives the name ---------- */
  { id: 'pa-f-nv', use: 'drill', tier: 'varied', setting: 'work', topic: 'a man who counts promotions',
    text: "Clive is fifty. Since school he has said that people in authority always favored someone else. In his four jobs he has stopped speaking to every colleague who was promoted over him, and when his own manager praised a newcomer he took three weeks of sick leave. His wife says that he keeps a ledger in his head of what each person owes him, and his brothers say that he has not come to a family birthday in nine years.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { D1: ['Since school', 'In his four jobs'], P1: ['people in authority always favored someone else', 'stopped speaking to every colleague who was promoted over him', 'has not come to a family birthday in nine years'] },
    reason: { D1: 'The case covers a long stretch and several places and relationships: {cue:D1}. It shows how a person is, not one occasion.',
              P1: 'Clive says he is overlooked and owed more, and when others are promoted or praised he goes silent and keeps count: {cue:P1}. It has cost him contact with his own brothers.' },
    not: { outcome: 'narcgrand', why: 'Clive does not run anyone down or turn scornful. He stops speaking, and he keeps count.' } },

  { id: 'pa-f-ord', use: 'drill', tier: 'varied', setting: 'home', topic: 'a lifelong worrier',
    text: "Pilar is forty-eight and has been exactly as anxious as she is now since she was a child: she checks the oven three times, calls to make sure everyone arrived, and cannot go to bed until the door is locked. Her family, her colleagues at the library and her friends of twenty years all know it, laugh about it and say it is just Pilar. She is trusted with the keys at work, and she has never lost a job or a friend over it.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { D1: ['since she was a child', 'her colleagues at the library and her friends of twenty years'], P1: ['she checks the oven three times, calls to make sure everyone arrived', 'say it is just Pilar', 'she has never lost a job or a friend over it'] },
    reason: { D1: 'The case covers a whole life and several places and relationships: {cue:D1}.',
              P1: 'Pilar has been a worrier for her whole life, and what the case shows is what that has not cost: {cue:P1}. People smile and stay, and nothing is lost.' },
    not: { outcome: 'narcvuln', why: 'Pilar’s worry can look like a person who is hurt and withdraws. But she keeps no count of what she is owed, nobody is cut off, and nothing has been lost.' } },

  { id: 'pa-f-bl', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a girlfriend’s trip with her sister',
    text: "Kevin is thirty-one. In every friendship and relationship since his teens he has become frantic when someone close was about to go away. When his girlfriend booked a trip with her sister he turned up at her work four times in one day and begged her to stay, then told her she had 'always been a liar' and deleted her number. By evening he was at her door with flowers. He has lost two apartments, a girlfriend and three friends this way.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { D1: ['In every friendship and relationship since his teens'], P1: ['turned up at her work four times in one day and begged her to stay', 'always been a liar', 'He has lost two apartments, a girlfriend and three friends this way'] },
    reason: { D1: 'The case covers years and many relationships: {cue:D1}. It shows how a person is, not one occasion.',
              P1: 'When someone close seemed about to go, Kevin held on hard, then turned on her, then held on again: {cue:P1}. It has cost him friends, a girlfriend and two apartments.' },
    not: { outcome: 'histrionic', why: 'Kevin’s display is aimed at one person who is going, and it turns into an attack on her. It is not put on for an audience.' } },

  { id: 'pa-f-hi', use: 'drill', tier: 'varied', setting: 'community', topic: 'a church flower guild',
    text: "Doreen is sixty-one and has led the church flower guild for twenty-five years. At every service she arrives last in a new hat and waits in the doorway. When the pastor thanked the choir, Doreen swayed, said she felt faint and had to be helped to a pew, where she stayed until the whole congregation had been to ask after her. The pastor's wife says she has done it with every pastor, and two flower arrangers have left the guild.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['center'] },
    cues: { D1: ['for twenty-five years', 'with every pastor'], P1: ['arrives last in a new hat and waits in the doorway', 'said she felt faint and had to be helped to a pew', 'two flower arrangers have left the guild'] },
    reason: { D1: 'The case covers a quarter of a century and several relationships: {cue:D1}.',
              P1: 'Doreen puts herself at the center, and when the pastor thanked the choir her display got bigger: {cue:P1}. It has cost the guild two arrangers.' },
    not: { outcome: 'borderline', why: 'Doreen’s display is for the whole congregation. There is no one person she holds on to, and she attacks nobody.' } },

  /* ---------- Clean ---------- */
  { id: 'pa-r-ga1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a city department head',
    text: "Maurice is fifty-five and has run three departments in a city government. He tells every new recruit that he is the cleverest person in the building, and every secretary he has had has been told, in front of others, that she is 'not paid to think'. When an auditor found an error in his figures, he called her 'a clerk who wants to be noticed' and wrote to her employer. Staff turnover in his departments is three times the citywide average, and his two grown sons never call him.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { D1: ['has run three departments in a city government', 'his two grown sons never call him'], P1: ['he is the cleverest person in the building', 'a clerk who wants to be noticed', 'Staff turnover in his departments is three times the citywide average'] },
    reason: { D1: 'The case follows one person through years, several workplaces and a family: {cue:D1}.',
              P1: 'Maurice acts as if he is the cleverest person present, and when his figures were questioned he turned on the person who found the error: {cue:P1}. It has cost him his staff.' },
    not: { outcome: 'ordpersonality', why: 'A confident, certain manager can be {o:ordpersonality}. But Maurice turns scornful when he is corrected, and people keep leaving.' } },

  { id: 'pa-r-nv1', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a church choir soloist',
    text: "Beatrix is forty-four and has sung in a church choir for twenty years. She says that the soloists are chosen by favor and that no one has ever noticed her voice. When a younger singer was given the solo for the carol service, Beatrix stopped speaking to her and then to the sopranos' section, and has not come to the choir party for four years. She has left two choirs in the same way, and her sister says she is hard to call because she keeps a list of who forgot her birthday.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { D1: ['has sung in a church choir for twenty years', 'She has left two choirs in the same way'], P1: ['no one has ever noticed her voice', "stopped speaking to her and then to the sopranos' section", 'keeps a list of who forgot her birthday'] },
    reason: { D1: 'The case covers twenty years and three choirs: {cue:D1}.',
              P1: 'Beatrix says she is overlooked, and when a younger singer was chosen she went cold on her and on a whole section: {cue:P1}. It has cost her three choirs.' },
    not: { outcome: 'narcgrand', why: 'Beatrix does not run the younger singer down or turn scornful. She stops speaking, and she keeps a list.' } },

  { id: 'pa-r-bl1', use: 'drill', tier: 'clean', setting: 'home', topic: 'a girlfriend and a night out',
    text: "Lucia is thirty. Since her teens each close relationship has followed the same course. She is devoted from the first week, calls her partner ten times a day, and when he mentions a night out with friends she says she will not survive it. If he goes she throws his things out of the window, and in the morning she begs him to forgive her. Her last four partners have all left, and her sister has asked her not to call at night.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { D1: ['Since her teens each close relationship has followed the same course'], P1: ['calls her partner ten times a day', 'throws his things out of the window', 'Her last four partners have all left'] },
    reason: { D1: 'The case covers many years and every close relationship: {cue:D1}.',
              P1: 'Lucia holds on to her partner hard, and when he seems to be going she attacks and then pleads: {cue:P1}. It has cost her four partners.' },
    not: { outcome: 'narcvuln', why: 'Lucia does not pull away and keep count. She holds on, attacks, and begs.' } },

  { id: 'pa-r-hi1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a car showroom entertainer',
    text: "Raymond is forty-six, sells cars, and has been the entertainer of every showroom he has worked in. He greets customers with a flourish and tells the story of his life to anyone who stays still. When a colleague won salesman of the month, Raymond staged a fainting fit by the coffee machine and kept the showroom waiting until the manager told him to go home. He has done it in four showrooms. Three managers have written him warnings for taking over the floor, and his colleagues eat lunch in their cars.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['center'] },
    cues: { D1: ['has been the entertainer of every showroom he has worked in', 'He has done it in four showrooms'], P1: ['tells the story of his life to anyone who stays still', 'staged a fainting fit by the coffee machine', 'his colleagues eat lunch in their cars'] },
    reason: { D1: 'The case covers four workplaces and many colleagues: {cue:D1}.',
              P1: 'Raymond puts himself at the center, and when a colleague was honored his display got bigger: {cue:P1}. It has cost him three warnings and his colleagues’ company.' },
    not: { outcome: 'narcgrand', why: 'Raymond does not run the colleague down. He takes the attention back with a bigger display.' } },

  { id: 'pa-r-an1', use: 'drill', tier: 'clean', setting: 'money', topic: 'a financial advisor and commission',
    text: "Tessa is forty and a financial advisor. At twenty-three she put clients' savings into funds that paid her the highest commission, and she has done the same in three firms. When a widow called to say her savings had halved, Tessa said, 'Markets go down. I told you there was risk.' She has left two firms before the complaints were heard, and eleven clients have lost money.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { D1: ['At twenty-three', 'she has done the same in three firms'], P1: ['paid her the highest commission', 'I told you there was risk', 'eleven clients have lost money'] },
    reason: { D1: 'The case covers seventeen years and three firms: {cue:D1}.',
              P1: 'Tessa has put her clients’ money where it paid her best, and showed no regret to a widow who lost half her savings: {cue:P1}. Eleven clients have lost money.' },
    not: { outcome: 'narcgrand', why: 'Nothing in the case shows Tessa needing to be treated as special, or turning scornful when she is not. What drives it is the commission.' } },

  { id: 'pa-r-ord1', use: 'drill', tier: 'clean', setting: 'community', topic: 'a loud bocce club secretary',
    text: "Gabe is sixty-six and has been the loudest laugher in every bar, club and street he has lived on. He is forever teasing, tells the same three jokes and will argue with anyone about soccer. Forty years of neighbors still come to his barbecue, he has been secretary of the bocce club for twenty, and when he upsets someone he calls that evening to put it right.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { D1: ['in every bar, club and street he has lived on', 'Forty years of neighbors'], P1: ['the loudest laugher', 'will argue with anyone about soccer', 'calls that evening to put it right'] },
    reason: { D1: 'The case covers forty years and several places and groups of people: {cue:D1}.',
              P1: 'Gabe has been loud, teasing and argumentative for forty years, and what the case shows is what it has not cost: {cue:P1}. He puts it right, and the neighbors stay.' },
    not: { outcome: 'histrionic', why: 'He is the center of every group, which {o:histrionic} can be too. But nothing gets bigger when attention goes elsewhere, and nothing has been lost.' } }
]);
