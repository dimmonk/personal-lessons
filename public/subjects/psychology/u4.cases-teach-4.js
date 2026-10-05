// Psychology, Unit Four: the pairs of cases on the look-alike cards, second half, and the two cases worked from top to bottom.
// Field guide: see u4.cases-teach-1.js. The worked cases carry marked words for the gate and for the key's question, and no reason of their own:
// the worked card holds the reasons, so there is one copy.

FC.cases('psychology', 'u4', [

  /* ---------- A borderline personality and a histrionic personality: a flatmate's leaving party ---------- */
  { id: 'pa-mira', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'a flatmate leaving, answered with clinging',
    text: "Mira is twenty-nine. At her flatmate's leaving party she cried and clung to her, saying she would be nothing without her and that she must not go. When the flatmate said she would visit at weekends, Mira said she knew she would forget her, and the next week told the other flatmates that she had always been selfish. Mira has been through the same thing with every close friend who has gone away since she was sixteen, and has lost three of them for good.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { P1: ['cried and clung to her, saying she would be nothing without her', 'told the other flatmates that she had always been selfish', 'has lost three of them for good'] } },

  { id: 'pa-orla', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'a flatmate leaving, answered with a speech',
    text: "Orla is twenty-nine. At her flatmate's leaving party she stood on a chair and gave a speech about how much she would miss her, and cried so that the whole room turned to watch. When another guest was given a round of applause for a song, Orla sang louder over the end of it. Orla has made herself the centre of every leaving party, wedding and birthday since she was sixteen, and two friends have stopped inviting her to parties.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['centre'] },
    cues: { P1: ['stood on a chair and gave a speech about how much she would miss her', 'sang louder over the end of it', 'two friends have stopped inviting her to parties'] } },

  /* ---------- A grandiose narcissism and a histrionic personality: a colleague is applauded ---------- */
  { id: 'pa-felix', use: 'teach', tier: 'varied', setting: 'work', topic: 'a colleague applauded, answered with scorn',
    text: "Felix is fifty-one, and in every firm he has worked at he has told the juniors that he is the only one who knows how to present. When a colleague was applauded at the end of a talk, Felix told the manager afterwards that she was 'all slides and no substance', and that she would never have been asked if he had not trained her. He has done this to every colleague who has been praised, in three firms, and four of them have changed teams to get away from him.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { P1: ['he is the only one who knows how to present', 'all slides and no substance', 'four of them have changed teams to get away from him'] } },

  { id: 'pa-bea', use: 'teach', tier: 'varied', setting: 'work', topic: 'a colleague applauded, answered with a story',
    text: "Bea is fifty-one, and in every firm she has worked at she has been the one with the biggest stories and the brightest clothes. When a colleague was applauded at the end of a talk, Bea told the whole table about a dreadful week in which she had lost her keys, been stood up and cried in a lift, until they were all listening to her. She has done this in three firms, and four of her colleagues have stopped sitting near her.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['centre'] },
    cues: { P1: ['the biggest stories and the brightest clothes', 'told the whole table about a dreadful week', 'four of her colleagues have stopped sitting near her'] } },

  /* ---------- A histrionic personality and an ordinary personality: two people who are dramatic in everything ---------- */
  { id: 'pa-sofia', use: 'teach', tier: 'varied', setting: 'community', topic: 'a village fete, heart racing',
    text: "Sofia is forty-two and dramatic in everything she does. At the village fete she told the story of her fall off a bicycle to anyone who would listen, and when the raffle winner was announced she said that her heart was racing and she needed to sit down, until the stall-holders gathered round her. She has done this at every event in every village she has lived in. The fete committee has stopped asking her to help, and two neighbours cross the road.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['centre'] },
    cues: { P1: ['said that her heart was racing and she needed to sit down', 'until the stall-holders gathered round her', 'two neighbours cross the road'] } },

  { id: 'pa-tito', use: 'teach', tier: 'varied', setting: 'community', topic: 'a village fete, leading the cheering', name: 'The fete host',
    text: "Tito is forty-two and dramatic in everything he does. At the village fete he told the story of his fall off a bicycle to anyone who would listen, and when the raffle winner was announced he led the cheering and bought her a drink. He has told his stories this way at every event in every village he has lived in. The fete committee asks him to introduce the raffle every year, and the neighbours he made twenty years ago still come to his parties.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['dramatic in everything he does', 'led the cheering and bought her a drink', 'still come to his parties'] } },

  /* ---------- A grandiose narcissism and an antisocial personality: two landlords ---------- */
  { id: 'pa-kurt', use: 'teach', tier: 'varied', setting: 'home', topic: 'a landlord who scorns a tenant',
    text: "Kurt is fifty-eight and has let flats for thirty years. He tells his tenants that he is the best landlord in the county and that they are lucky to live under his roof. When a tenant asked him to mend a boiler, he called her 'an ungrateful nobody' and let it wait two weeks, though he did repair it in the end. He has spoken to tenants this way in three towns, and he has been shouted at by two of his own sons for the way he treats his staff. Tenants leave as soon as their lease ends.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { P1: ['he is the best landlord in the county and that they are lucky to live under his roof', 'an ungrateful nobody', 'Tenants leave as soon as their lease ends'] } },

  { id: 'pa-vince', use: 'teach', tier: 'varied', setting: 'home', topic: 'a landlord who keeps the deposits',
    text: "Vince is fifty-eight and has let flats for thirty years. He tells tenants that their deposits are 'safe in the bank', and has spent four tenants' deposits in three towns. When a tenant asked him to mend a boiler he promised it for Friday, never sent anyone, and kept her rent. When she wrote that the flat was damp and her baby was ill, he said, 'Go somewhere else, then. Nobody forced you.' Three tenants have lost their deposits and one has lost her home.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { P1: ["spent four tenants' deposits in three towns", 'Nobody forced you', 'Three tenants have lost their deposits and one has lost her home'] } },

  /* ---------- An antisocial personality and an ordinary personality: a bent rule and a broken one ---------- */
  { id: 'pa-joss', use: 'teach', tier: 'varied', setting: 'money', topic: 'loans for an imaginary business',
    text: "Joss is thirty-seven. He has talked three friends into lending him money for a business that does not exist, telling each that it is a secret and that they must not tell the others. When one of them asked for her money back, he said she was lucky to have been asked, and blocked her. He has done this since he was twenty-two, in three cities, and has never repaid anyone.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { P1: ['talked three friends into lending him money for a business that does not exist', 'lucky to have been asked', 'has never repaid anyone'] } },

  { id: 'pa-lena', use: 'teach', tier: 'varied', setting: 'money', topic: 'a small rule-bender',
    text: "Lena is thirty-seven and has always bent small rules: she parks in loading bays, argues for a discount in every shop and once talked her way into a first-class seat. When a friend lent her two hundred pounds, she paid it back with a card the next week. When a neighbour was upset about her parking, she apologised and stopped. She has been like this since she was a student, in three cities, and her friends still lend her things and she lends them back.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['has always bent small rules', 'she paid it back with a card the next week', 'her friends still lend her things and she lends them back'] } },

  /* ---------- The check on the key's question ---------- */
  { id: 'pa-ward', use: 'check', tier: 'varied', setting: 'community', topic: 'a touchy neighbour',
    text: "Ward is sixty-three and has always been touchy about being corrected. In his twenties he sulked for an evening whenever a foreman put him right, and he still does, and then comes round and says sorry. He has done it at three workplaces, and at home, where his wife says she just waits for the evening to pass. He has kept the same friends for forty years, the whole street asks him to fetch the ladders, and his last employer gave him a long-service watch.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['has always been touchy about being corrected', 'then comes round and says sorry', 'the whole street asks him to fetch the ladders'] },
    reason: { P1: 'Ward has been touchy for forty years and in every place, and the words that decide it are {cue:P1}. The sulk passes by the evening, he says sorry, and nothing has been lost: the same friends, the same street, a long-service watch.' },
    not: { outcome: 'narcvuln', why: 'The sulk can look like hurt withdrawal. But Ward keeps no count of what he is owed, it passes within the evening, and he has lost nobody.' } },

  /* ---------- The two cases worked from the top: a clean one, then one whose story points the wrong way ---------- */
  { id: 'pa-rafe', use: 'teach', tier: 'clean', setting: 'work', topic: 'a recruitment agency and its fees', name: 'The recruitment agent',
    text: "Rafe is forty-one and runs a recruitment agency. He tells clients that he is the best in the business, and he is warm and quick to make friends. For fifteen years, at three agencies and in two cities, he has invoiced clients for placements that never happened, and told candidates that a job existed so that they would pay a 'registration fee'. When a candidate rang in tears because she had borrowed the fee from her mother, Rafe said, 'Everyone knows how recruitment works.' The regulator has fined him twice, and two former partners will not speak to him.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { D1: ['For fifteen years, at three agencies and in two cities'],
            P1: ['invoiced clients for placements that never happened', 'Everyone knows how recruitment works', 'two former partners will not speak to him'] } },

  { id: 'pa-bruno', use: 'teach', tier: 'misleading', setting: 'leisure', topic: 'a theatrical man and the village pantomime', name: 'The theatrical uncle',
    text: "Bruno is fifty-seven and has been theatrical all his life. At school he played every lead, at his first job he ran the staff pantomime, and at his sister's wedding he gave a speech that went on for twenty minutes. He tells every story with his whole body, cries easily at films and hugs everyone at a party. When another guest is applauded, Bruno applauds loudest. His friends from school still meet him every month, he has run the village pantomime for twenty years and been thanked at the end of every one, and his daughters ask him to tell the same stories to their children.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { D1: ['has been theatrical all his life', 'he has run the village pantomime for twenty years'],
            P1: ['Bruno applauds loudest', 'His friends from school still meet him every month', 'been thanked at the end of every one'] } }
]);
