// Psychology, Unit Four: fresh cases kept back for later days (first file: three names, three cases each).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries marked words and a reason for both
// questions. Three cases for each name: one for each scheduled return (E9).

FC.cases('psychology', 'u4', [

  /* ---------- Grandiose narcissism ---------- */
  { id: 'pa-ret-prof', use: 'return', tier: 'varied', setting: 'learning', topic: 'a professor and a graduate student’s paper',
    text: "Professor Vale is sixty and has headed his department for twenty years. He tells every graduate student that he has forgotten more than they will ever know. When a student's paper was accepted by a better journal than his own, he told the faculty it was 'a lucky draw from an easy pile' and took her out of his seminar. Eleven students have left his group, and two former colleagues will not share a conference stage with him.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { D1: ['has headed his department for twenty years', 'two former colleagues will not share a conference stage with him'], P1: ['he has forgotten more than they will ever know', 'a lucky draw from an easy pile', 'Eleven students have left his group'] },
    reason: { D1: 'The case follows one person through twenty years, a department and former colleagues: {cue:D1}.',
              P1: 'The professor acts as if his students owe their minds to him, and when one did better than he did he answered with scorn: {cue:P1}. It has cost him eleven students.' },
    not: { outcome: 'ordpersonality', why: 'A learned, confident professor can be {o:ordpersonality}. But this one turns scornful when a student does well, and eleven students have gone.' } },

  { id: 'pa-ret-parish', use: 'return', tier: 'varied', setting: 'community', topic: 'a town council chair',
    text: "Councilwoman Maud has chaired the town council for eighteen years, and has been heard to say that the village would be a ditch without her. When a residents' petition won the vote, she called its organizer 'a busybody with a clipboard' in the local paper and struck him off the hall booking list. She has done the same to three earlier residents' groups, and the town clerk has resigned twice.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { D1: ['has chaired the town council for eighteen years', 'three earlier residents\' groups'], P1: ['the village would be a ditch without her', 'a busybody with a clipboard', 'the town clerk has resigned twice'] },
    reason: { D1: 'The case covers eighteen years and four groups of residents: {cue:D1}.',
              P1: 'Councilwoman Maud acts as if the village depends on her alone, and when a vote went against her she turned scornful: {cue:P1}. It has cost her two clerks.' },
    not: { outcome: 'narcvuln', why: 'She does not go quiet and hurt. She attacks the organizer, in public, in print.' } },

  { id: 'pa-ret-firm', use: 'return', tier: 'varied', setting: 'money', topic: 'a family construction firm',
    text: "Gordon is sixty-two and has run the family construction firm for thirty years. He tells his foremen that the firm is him and nobody else. When his nephew won a contract the firm had been chasing for a decade, Gordon told the crew that 'a trained monkey could have signed that', and cut his nephew out of the bonus. Four foremen have left in five years, and his two sons have set up a rival firm.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { D1: ['has run the family construction firm for thirty years', 'his two sons have set up a rival firm'], P1: ['the firm is him and nobody else', 'a trained monkey could have signed that', 'Four foremen have left in five years'] },
    reason: { D1: 'The case covers thirty years, a firm and a family: {cue:D1}.',
              P1: 'Gordon treats the firm as his alone, and when his nephew succeeded he answered with scorn: {cue:P1}. It has cost him four foremen and his sons.' },
    not: { outcome: 'ordpersonality', why: 'A strong-minded owner can be {o:ordpersonality}. But Gordon turns scornful when someone else succeeds, and the people around him keep leaving.' } },

  /* ---------- Vulnerable narcissism ---------- */
  { id: 'pa-ret-wedding', use: 'return', tier: 'varied', setting: 'home', topic: 'an uncle at the family weddings',
    text: "Alberto is fifty-nine. At every family wedding for thirty years he has said that nobody remembers what he did for the family when money was tight. When his niece thanked her father in a speech and not him, Alberto left the reception and has not spoken to either of them since. He did the same when his cousin was thanked at a funeral. His wife says she has stopped going to family events.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { D1: ['At every family wedding for thirty years', 'He did the same when his cousin was thanked at a funeral'], P1: ['nobody remembers what he did for the family when money was tight', 'left the reception and has not spoken to either of them since', 'she has stopped going to family events'] },
    reason: { D1: 'The case covers thirty years and many family occasions: {cue:D1}.',
              P1: 'Alberto says he is overlooked and owed more, and when someone else was thanked he went away and stayed away: {cue:P1}. His wife no longer goes to family events.' },
    not: { outcome: 'narcgrand', why: 'Alberto does not run his niece down or turn scornful. He leaves and says nothing.' } },

  { id: 'pa-ret-technician', use: 'return', tier: 'varied', setting: 'work', topic: 'a laboratory technician and the credit for her work',
    text: "Priscilla is forty-six and a laboratory technician. In three laboratories she has said that the scientists take the credit for her work and that she is owed a name on the paper. When a junior researcher was thanked in a seminar, Priscilla stopped bringing samples to her bench and sat alone at lunch for two months. She has done it with four junior researchers and two heads of department, and the last head says that she has stopped asking what is wrong.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { D1: ['In three laboratories', 'with four junior researchers and two heads of department'], P1: ['the scientists take the credit for her work and that she is owed a name on the paper', 'sat alone at lunch for two months', 'has stopped asking what is wrong'] },
    reason: { D1: 'The case covers three laboratories and many colleagues: {cue:D1}.',
              P1: 'Priscilla says she is overlooked and owed more, and when a colleague was thanked she went cold and stayed away: {cue:P1}. Her head of department has stopped asking what is wrong.' },
    not: { outcome: 'borderline', why: 'Priscilla does not reach for anyone, attack them and reach for them again. She withdraws and stays withdrawn.' } },

  { id: 'pa-ret-runner', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a club runner and the runner of the year',
    text: "Desmond is thirty-nine and has run with the same club for fifteen years. He says that the coach has never once noticed his times, and that others get the sponsored places. When a clubmate was named runner of the year, Desmond skipped the awards, stopped replying to the club chat and stayed away for six months. He left his previous club in the same way, and three friends from it say that he disappeared on them.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { D1: ['for fifteen years', 'He left his previous club in the same way'], P1: ['the coach has never once noticed his times', 'stopped replying to the club chat and stayed away for six months', 'three friends from it say that he disappeared on them'] },
    reason: { D1: 'The case covers fifteen years and two clubs: {cue:D1}.',
              P1: 'Desmond says he is overlooked, and when a clubmate was honored he went silent and stayed away: {cue:P1}. It has cost him friends in both clubs.' },
    not: { outcome: 'ordpersonality', why: 'Being quiet is ordinary. But Desmond says he is owed more, he withdraws when someone else is honored, and it has cost him friends twice over.' } },

  /* ---------- Borderline personality ---------- */
  { id: 'pa-ret-supervisor', use: 'return', tier: 'varied', setting: 'learning', topic: 'a graduate student and his advisors',
    text: "Ravi is twenty-six and a graduate student. With each advisor, since his first degree, he has told her that she is the only person who understands him, and when an advisor mentions going away for a semester he panics and writes to her at night. When one said she would be away for a semester, he wrote that she was 'a fraud who had used him', and at six the next morning he begged her to forgive him. Three advisors in a row have asked the department to reassign him.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { D1: ['With each advisor, since his first degree'], P1: ['she is the only person who understands him', 'a fraud who had used him', 'Three advisors in a row have asked the department to reassign him'] },
    reason: { D1: 'The case covers years and every advisor he has had: {cue:D1}.',
              P1: 'When an advisor seemed about to go, Ravi held on hard, attacked her, and begged her back: {cue:P1}. It has cost him three advisors.' },
    not: { outcome: 'narcvuln', why: 'Ravi does not pull away and keep count. He goes after the advisor who seems to be leaving.' } },

  { id: 'pa-ret-sister', use: 'return', tier: 'varied', setting: 'home', topic: 'a sister who emigrated',
    text: "Naomi is thirty-five. When her sister said she was going to Canada, Naomi called every night for a month, offered to give up her apartment so that her sister could stay, and sobbed that she would have no one. At the airport she told her sister that she had never been a real sister, and from Canada the next day she sent a letter that began 'You are all I have.' It has been the same with each of her friends and with her last five partners, who have all gone.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { D1: ['with each of her friends and with her last five partners'], P1: ['called every night for a month', 'she had never been a real sister', 'You are all I have'] },
    reason: { D1: 'The case covers a sister, friends and five partners over years: {cue:D1}.',
              P1: 'When her sister seemed to be going, Naomi held on hard, attacked her at the airport, and held on again by letter: {cue:P1}.' },
    not: { outcome: 'narcgrand', why: 'Naomi’s anger does not push her sister away. She tries to keep her, attacks her, and tries to keep her again.' } },

  { id: 'pa-ret-watch', use: 'return', tier: 'varied', setting: 'community', topic: 'a neighborhood watch chair and his neighbors',
    text: "Colm is fifty and chairs a neighborhood watch. When a neighbor he is close to said she might sell her house, Colm brought over meals every evening for a week, told her that the street would die without her, and when she did not decide he told the others she was 'using people'. The next day he sent her a note: 'Forgive me, you are the only one who matters here.' It has happened with six neighbors over twenty years, and two have stopped speaking to him.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { D1: ['It has happened with six neighbors over twenty years'], P1: ['brought over meals every evening for a week', 'using people', 'two have stopped speaking to him'] },
    reason: { D1: 'The case covers twenty years and six neighbors: {cue:D1}.',
              P1: 'When a neighbor seemed about to leave, Colm held on hard, turned on her, and held on again: {cue:P1}. Two neighbors no longer speak to him.' },
    not: { outcome: 'histrionic', why: 'Colm’s display is aimed at one neighbor who seems to be going, and it turns into an attack on her. He is not performing for the street.' } }
]);
