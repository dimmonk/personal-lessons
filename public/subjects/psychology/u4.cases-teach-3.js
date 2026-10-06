// Psychology, Unit Four: the pairs of cases on the look-alike cards, first half. Each pair is built so that only the words that decide it differ.
// Field guide: see u4.cases-teach-1.js. These are shown in cards only; none appears in the drill.

FC.cases('psychology', 'u4', [

  { id: 'pa-paolo', use: 'teach', tier: 'varied', setting: 'work', topic: 'a head chef who runs down the cook',
    text: "Paolo is fifty-six and has been head chef in four restaurants. He tells every new cook that he is the best chef in the city and that they are lucky to be near him. When a young cook was written up in the paper, Paolo told the kitchen that she was 'a pretty face with a borrowed recipe' and stopped giving her shifts. In each kitchen the best cooks have left within a year, and his two daughters say they stopped bringing friends to the restaurant years ago.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { P1: ['he is the best chef in the city and that they are lucky to be near him', 'a pretty face with a borrowed recipe', 'the best cooks have left within a year'] } },

  { id: 'pa-sunil', use: 'teach', tier: 'varied', setting: 'work', topic: 'a head chef who frames the article',
    text: "Sunil is fifty-five and has been head chef in four restaurants. He tells every new cook that he is the best chef in the city and that they will have to work hard to keep up. When a young cook was written up in the paper, Sunil framed the article and put it by the kitchen door. In each kitchen the cooks have stayed for years, several have opened places of their own and still call him, and his two daughters work in the restaurant on Saturdays.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['he is the best chef in the city and that they will have to work hard to keep up', 'framed the article and put it by the kitchen door', 'the cooks have stayed for years'] } },

  /* ---------- A vulnerable narcissism and an ordinary personality: two colleagues who keep to themselves ---------- */
  { id: 'pa-hugh', use: 'teach', tier: 'varied', setting: 'work', topic: 'a quiet colleague who stops speaking',
    text: "Hugh is forty-one and keeps to himself at work, as he has done in four offices. He says that others get the good projects because they are noticed and he is not, and that he is owed more than he gets. When a colleague was thanked at a team meeting, Hugh stopped speaking to her for a month. He has done this with six colleagues over the years, and his last two managers have written that his silences make it impossible to plan work around him.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { P1: ['others get the good projects because they are noticed and he is not', 'stopped speaking to her for a month', 'his silences make it impossible to plan work around him'] } },

  { id: 'pa-amara', use: 'teach', tier: 'varied', setting: 'work', topic: 'a quiet colleague who sends a note',
    text: "Amara is forty-one and keeps to herself at work, as she has done in four offices. She eats lunch at her desk, does not go to the bar and says she is happiest with a quiet week. When a colleague was thanked at a team meeting, Amara sent her a note saying well done. Over the years her managers have written that she can be relied on, and the two friends she has made in each office are still her friends.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['keeps to herself at work, as she has done in four offices', 'sent her a note saying well done', 'the two friends she has made in each office are still her friends'] } },

  /* ---------- Grandiose narcissism and a borderline personality: a partner says they may leave ---------- */
]);
