// Psychology, Unit Four: the pairs of cases on the look-alike cards, first half. Each pair is built so that only the words that decide it differ.
// Field guide: see u4.cases-teach-1.js. These are shown in cards only; none appears in the drill.

FC.cases('psychology', 'u4', [

  /* ---------- Grandiose narcissism and an ordinary personality: two head chefs who each say they are the best ---------- */
  { id: 'pa-paolo', use: 'teach', tier: 'varied', setting: 'work', topic: 'a head chef who runs down the cook',
    text: "Paolo is fifty-six and has been head chef in four restaurants. He tells every new cook that he is the best chef in the city and that they are lucky to be near him. When a young cook was written up in the paper, Paolo told the kitchen that she was 'a pretty face with a borrowed recipe' and stopped giving her shifts. In each kitchen the best cooks have left within a year, and his two daughters say they stopped bringing friends to the restaurant years ago.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { P1: ['he is the best chef in the city and that they are lucky to be near him', 'a pretty face with a borrowed recipe', 'the best cooks have left within a year'] } },

  { id: 'pa-sunil', use: 'teach', tier: 'varied', setting: 'work', topic: 'a head chef who frames the article',
    text: "Sunil is fifty-five and has been head chef in four restaurants. He tells every new cook that he is the best chef in the city and that they will have to work hard to keep up. When a young cook was written up in the paper, Sunil framed the article and put it by the kitchen door. In each kitchen the cooks have stayed for years, several have opened places of their own and still call him, and his two daughters work in the restaurant on Saturdays.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['he is the best chef in the city and that they will have to work hard to keep up', 'framed the article and put it by the kitchen door', 'the cooks have stayed for years'] } },

  /* ---------- The two narcissisms: a younger brother made partner ---------- */
  { id: 'pa-anton', use: 'teach', tier: 'varied', setting: 'home', topic: 'a brother made partner, answered with scorn',
    text: "Anton is forty-eight. When his younger brother made partner at the firm they both once worked for, Anton told the whole family at Sunday lunch that his brother had 'only got there by sucking up', and said that the firm would regret not choosing him. This is how Anton has answered every success in the family since they were boys: his sister's degree, his cousin's wedding speech, his niece's school prize. His mother now arranges for the family to come at different times, and his brother no longer comes to Sunday lunch.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { P1: ["his brother had 'only got there by sucking up'", 'the firm would regret not choosing him', 'his brother no longer comes to Sunday lunch'] } },

  { id: 'pa-piers', use: 'teach', tier: 'varied', setting: 'home', topic: 'a brother made partner, answered with silence',
    text: "Piers is forty-six. When his younger brother made partner at the firm they both once worked for, Piers said 'Lovely news' at Sunday lunch, went quiet and left before the dessert. He says that his brother has always been the favorite and that nobody in the family has ever noticed what he himself has done. This is how Piers has answered every success in the family since they were boys: his sister's degree, his cousin's wedding, his niece's school prize. His mother says she has to choose her words around him, and his brother no longer calls him.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { P1: ['went quiet and left before the dessert', 'nobody in the family has ever noticed what he himself has done', 'his brother no longer calls him'] } },

  /* ---------- A vulnerable narcissism and an ordinary personality: two colleagues who keep to themselves ---------- */
  { id: 'pa-hugh', use: 'teach', tier: 'varied', setting: 'work', topic: 'a quiet colleague who stops speaking',
    text: "Hugh is forty-one and keeps to himself at work, as he has done in four offices. He says that others get the good projects because they are noticed and he is not, and that he is owed more than he gets. When a colleague was thanked at a team meeting, Hugh stopped speaking to her for a month. He has done this with six colleagues over the years, and his last two managers have written that his silences make it impossible to plan work around him.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { P1: ['others get the good projects because they are noticed and he is not', 'stopped speaking to her for a month', 'his silences make it impossible to plan work around him'] } },

  { id: 'pa-amara', use: 'teach', tier: 'varied', setting: 'work', topic: 'a quiet colleague who sends a note',
    text: "Amara is forty-one and keeps to herself at work, as she has done in four offices. She eats lunch at her desk, does not go to the bar and says she is happiest with a quiet week. When a colleague was thanked at a team meeting, Amara sent her a note saying well done. Over the years her managers have written that she can be relied on, and the two friends she has made in each office are still her friends.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['keeps to herself at work, as she has done in four offices', 'sent her a note saying well done', 'the two friends she has made in each office are still her friends'] } },

  /* ---------- A vulnerable narcissism and a borderline personality: a friend cannot come to the birthday ---------- */
  { id: 'pa-isla', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'a canceled birthday, answered with silence',
    text: "Isla is thirty-five. When a close friend said she could not come to her birthday dinner, Isla replied 'No problem' and did not answer another message from her for three months. She says that people have always put others first, and that she has never once been the one anybody chose. It has gone this way with five friends since her twenties: each time she goes cold, keeps count of what she is owed and says nothing. Her friends say they never know what they have done.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { P1: ['did not answer another message from her for three months', 'has never once been the one anybody chose', 'each time she goes cold, keeps count of what she is owed and says nothing'] } },

  { id: 'pa-kai', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'a canceled birthday, answered with messages',
    text: "Kai is thirty-five. When a close friend said she could not come to his birthday dinner, Kai sent her thirty messages that night, asked whether she had stopped caring and offered to cancel the dinner so that she would not feel left out. When she did not reply, he told their other friends she was 'the cruelest person he knew', and the next morning he wrote her a long apology. It has gone this way with five friends since his twenties. Four of them now answer him only once a week.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { P1: ['sent her thirty messages that night, asked whether she had stopped caring', "he told their other friends she was 'the cruelest person he knew'", 'Four of them now answer him only once a week'] } },

  /* ---------- Grandiose narcissism and a borderline personality: a partner says they may leave ---------- */
  { id: 'pa-ruth', use: 'teach', tier: 'varied', setting: 'home', topic: 'a surgeon whose husband may leave',
    text: "Ruth is fifty and an attending surgeon. When her husband said he was thinking of leaving, she told him that he would never find anyone as good as her and that his friends laughed at him behind his back, and then did not speak to him for a week. She has spoken to every partner and colleague who disagreed with her in the same way for thirty years. Her husband says she has never once asked him to stay. Her last two residents asked to be moved to another team.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { P1: ['he would never find anyone as good as her', 'she has never once asked him to stay', 'Her last two residents asked to be moved to another team'] } },

  { id: 'pa-dani', use: 'teach', tier: 'varied', setting: 'home', topic: 'a husband who may leave',
    text: "Dani is thirty-two. When her husband said he was thinking of leaving, she begged him to stay, promised to change everything about herself and hid his car keys. When he said he needed a night at his brother's, she called him 'a liar who never loved her' and threw his clothes into the street, then called him seven times that night to say she was sorry. It has been the same in each of her last four relationships and with her closest friends. Her husband says he cannot tell which of the two Danis he will come home to.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { P1: ['begged him to stay, promised to change everything about herself and hid his car keys', "called him 'a liar who never loved her'", 'It has been the same in each of her last four relationships'] } }
]);
