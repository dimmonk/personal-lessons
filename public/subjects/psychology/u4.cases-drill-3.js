// Psychology, Unit Four: drill cases for stage four (the whole route, no help), second half: the varied cases and the cases whose story points the wrong way.
// Every question is asked here, starting with the first question of the key, so every case carries marked words and a reason for that question too (D1).
// echo names a teaching case whose story this one resembles while its name differs: the feedback says so, which is how the
// "does it look like a case you know?" second look is practiced.

FC.cases('psychology', 'u4', [

  /* ---------- Varied ---------- */
  { id: 'pa-r-ga2', use: 'drill', tier: 'varied', setting: 'money', topic: 'a woman who owns three stores',
    text: "Wendy is fifty-two and owns three stores. She tells her managers that without her they would all be store clerks, and has not once thanked any of them. When one manager asked for a day to see his son in the school play, Wendy said he was 'a man who would rather play at being a father', and took him off the schedule for a month. She has done this in each of her three businesses. Her longest-serving manager has stayed seven months.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { D1: ['She has done this in each of her three businesses'], P1: ['without her they would all be store clerks', 'a man who would rather play at being a father', 'Her longest-serving manager has stayed seven months'] },
    reason: { D1: 'The case covers three businesses and years of managers: {cue:D1}.',
              P1: 'Wendy treats her managers as people who owe everything to her, and when one asked for a day off she answered with scorn: {cue:P1}. It has cost her every manager.' },
    not: { outcome: 'antisocial', why: 'Wendy breaks no rule and uses no one for money she is not owed. What drives the case is her need to be above the people who work for her.' } },

  { id: 'pa-r-an2', use: 'drill', tier: 'varied', setting: 'learning', topic: 'a driving school and its fees',
    text: "Floyd is thirty-six and runs a driving school. For years he has taken lesson fees in cash from students he never teaches. At nineteen he took his sister's savings 'to invest' and spent them. When a student demanded her refund he said, 'Take it up with the weather,' and shut the office. He has opened the same school under four names in three towns, and thirty students have lost their money.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { D1: ['At nineteen', 'under four names in three towns'], P1: ['taken lesson fees in cash from students he never teaches', 'Take it up with the weather', 'thirty students have lost their money'] },
    reason: { D1: 'The case covers seventeen years, several towns and a family: {cue:D1}.',
              P1: 'Floyd takes money for lessons he does not give, and when a student asked for her refund he showed no regret: {cue:P1}. Thirty students have lost money.' },
    not: { outcome: 'narcgrand', why: 'Floyd does not need to be treated as special and does not turn scornful when he is not. What drives it is taking the money.' } },

  { id: 'pa-r-ord2', use: 'drill', tier: 'varied', setting: 'home', topic: 'a blunt grandmother',
    text: "Hattie is seventy and has been blunt all her life: she told her husband at their wedding that the cake was dry, tells her grandchildren exactly what she thinks of their haircuts, and told her pastor that his sermon was too long. Her family laughs and says that's Hattie. They still have Sunday lunch at her house every week, her oldest friend of fifty-eight years calls her daily, and the pastor asked her to read at his own farewell.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { D1: ['has been blunt all her life', 'her oldest friend of fifty-eight years'], P1: ['told her husband at their wedding that the cake was dry', "Her family laughs and says that's Hattie", 'the pastor asked her to read at his own farewell'] },
    reason: { D1: 'The case covers a whole life and many relationships: {cue:D1}.',
              P1: 'Hattie has been blunt for seventy years, and what the case shows is what that has not cost: {cue:P1}. The people she is blunt with keep coming back.' },
    not: { outcome: 'narcgrand', why: 'Hattie says hard things, and so does {o:narcgrand}. But she does not turn scornful when someone else is praised, and nobody has been driven away.' } },

  { id: 'pa-r-hi2', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a guest who takes over the toasts',
    text: "Colette is thirty-nine and takes the stage at every party. At her husband's fortieth she read him a poem that had not been asked for, and when his mother was toasted she burst into tears about her own mother, until the toast was over. She was the same at her bachelorette party and at three of her friends' weddings. Four friends now invite her only to things with no speeches.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['center'] },
    cues: { D1: ["She was the same at her bachelorette party and at three of her friends' weddings"], P1: ['read him a poem that had not been asked for', 'burst into tears about her own mother, until the toast was over', 'Four friends now invite her only to things with no speeches'] },
    reason: { D1: 'The case covers years and many occasions with many people: {cue:D1}.',
              P1: 'Colette takes the stage, and when someone else was toasted her display got bigger: {cue:P1}. It has cost her the invitations of four friends.' },
    not: { outcome: 'ordpersonality', why: 'A dramatic person can be {o:ordpersonality}. But Colette’s display grows when attention goes elsewhere, and four friends have drawn back.' } },

  { id: 'pa-r-nv2', use: 'drill', tier: 'varied', setting: 'home', topic: 'a mechanic and his brother-in-law',
    text: "Rhys is fifty-seven. For thirty years he has told his wife that his talents were wasted at the auto shop and that his brother-in-law got everything handed to him. When his brother-in-law bought the unit next door, Rhys stayed away from the family Christmas for six years and told his wife she should have married someone who noticed her. His wife says that she cannot mention anyone else's good news at home, and both his sons have gone to other cities.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { D1: ['For thirty years', 'both his sons have gone to other cities'], P1: ['his talents were wasted at the auto shop and that his brother-in-law got everything handed to him', 'stayed away from the family Christmas for six years', "she cannot mention anyone else's good news at home"] },
    reason: { D1: 'The case covers thirty years and a whole family: {cue:D1}.',
              P1: 'Rhys says he has been overlooked and owed more, and when his brother-in-law did well he withdrew for years: {cue:P1}. His wife cannot share good news at home.' },
    not: { outcome: 'borderline', why: 'Rhys does not reach for anyone or swing between adoring and attacking. He pulls away and resents.' } },

  { id: 'pa-r-bl2', use: 'drill', tier: 'varied', setting: 'work', topic: 'a hairdresser and a colleague who got a better offer',
    text: "Maeve is thirty-seven and a hairdresser. Each time a colleague she is close to gets a better offer, Maeve gives her gifts, begs her to stay and says she would be nothing without her. When one colleague left she told every client that she was 'cold and fake', and that evening sent her a message calling her the best friend she had ever had. She has done this with five colleagues and four partners, and the salon has stopped hiring friends of hers.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { D1: ['She has done this with five colleagues and four partners'], P1: ['gives her gifts, begs her to stay and says she would be nothing without her', 'cold and fake', 'the salon has stopped hiring friends of hers'] },
    reason: { D1: 'The case covers many years, colleagues and partners: {cue:D1}.',
              P1: 'When a colleague seemed about to leave, Maeve held on hard, then turned on her, then held on again: {cue:P1}. It has cost her partners and the salon’s trust.' },
    not: { outcome: 'narcvuln', why: 'Maeve does not pull away and keep count. She reaches for her colleague, attacks her, and reaches for her again.' } },

  /* ---------- Cases whose story points the wrong way ---------- */
  { id: 'pa-m-ord', use: 'drill', tier: 'misleading', setting: 'work', topic: 'an accountancy partner who is thanked', echo: 'pa-dennis',
    text: "Ioan is fifty-four and a senior partner at an accounting firm. He has the corner room, sits at the head of every table and opens meetings with the story of how he built the firm; his juniors have counted that he tells it eleven times a year. When a trainee won a major client, Ioan bought the team lunch and put her name on the door. His juniors stay for ten years or more, his son works in the firm, and his wife says that in thirty years he has never missed asking about her day.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { D1: ['in thirty years he has never missed asking about her day', 'His juniors stay for ten years or more'], P1: ['opens meetings with the story of how he built the firm', 'bought the team lunch and put her name on the door', 'his son works in the firm'] },
    reason: { D1: 'The case covers thirty years, a firm and a family: {cue:D1}.',
              P1: 'Ioan is proud of himself and says so, which can look like {o:narcgrand}. But the words that decide it are {cue:P1}. When a trainee did well he thanked her, and nobody has left.' },
    not: { outcome: 'narcgrand', why: 'The corner room, the head of the table and the story of the firm all look like Dennis. But Ioan does not turn scornful when someone else is praised, and nothing is being lost.' } },

  { id: 'pa-m-ga', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'a charming principal',
    text: "Priya is forty-eight and a principal, loved by parents and charming in staff meetings. She tells every school board member that the school would collapse without her, and has never praised a teacher in public. When an assistant principal was shortlisted for the principal job, Priya told the school board in private that she was 'a competent clerk with ideas above her place', and gave her the worst schedule. In four schools, six assistant principals have left within two years, and two of them have left teaching.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { D1: ['In four schools'], P1: ['the school would collapse without her', 'a competent clerk with ideas above her place', 'six assistant principals have left within two years'] },
    reason: { D1: 'The case covers four schools and years of deputies: {cue:D1}.',
              P1: 'Priya is charming in public, but the words that decide it are {cue:P1}. When a deputy rose she turned scornful in private, and it has cost her six assistant principals.' },
    not: { outcome: 'ordpersonality', why: 'Priya is charming and well liked, which {o:ordpersonality} can be. But she runs down anyone who is praised, and people keep leaving.' } },

  { id: 'pa-m-nv', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a cheerful man who keeps a tally', echo: 'pa-marguerite',
    text: "Quentin is fifty and the first to buy a round and the last to leave an office party. He says, with a laugh, that he is the most underrated man in insurance. When his deputy was thanked at the annual dinner, Quentin laughed it off and then did not speak to her again for a year, and he has never spoken to the director who thanked her. It has happened at all four firms he has worked for. His wife says he keeps a quiet tally of every slight and has not forgiven his best man for a speech in 1998.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { D1: ['at all four firms he has worked for', 'a speech in 1998'], P1: ['the most underrated man in insurance', 'did not speak to her again for a year', 'keeps a quiet tally of every slight'] },
    reason: { D1: 'The case covers four firms and a marriage of many years: {cue:D1}.',
              P1: 'Quentin is loud and cheerful at parties, which can look like {o:histrionic}. But the words that decide it are {cue:P1}: he says he is overlooked, goes cold when someone else is thanked, and keeps count.' },
    not: { outcome: 'narcgrand', why: 'Quentin is not scornful. He laughs it off in public, and the hurt comes out as years of silence and a quiet tally.' } },

  { id: 'pa-m-bl', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a calm accountant and her friends', echo: 'pa-ellis',
    text: "Odile is forty-two and appears calm and steady: a quiet accountant who never raises her voice. But whenever a close friend mentions going away she writes long messages, and when the friend does not answer within the hour she posts that the friend has 'abandoned' her, deletes the post, and calls until she picks up. It has happened with every friend since college. Six friends no longer answer her.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { D1: ['with every friend since college'], P1: ['writes long messages', 'calls until she picks up', 'Six friends no longer answer her'] },
    reason: { D1: 'The case covers years and every close friend: {cue:D1}.',
              P1: 'Odile is quiet, which can look like {o:narcvuln}. But the words that decide it are {cue:P1}: she reaches for the friend who seems to be going, attacks her, and reaches for her again.' },
    not: { outcome: 'narcvuln', why: 'Odile is quiet, like Ellis. But she does not pull away and keep count: she holds on, and she goes after the friend.' } }
]);
