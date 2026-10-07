// Psychology, Unit Four: the pairs of cases on the look-alike cards, second half, the check on the question, and the worked case.
// Field guide: see u4.cases-teach-1.js. The worked case carries marked words for the gate and for the key's question, and no reason of their own:
// the worked card holds the reasons, so there is one copy.

FC.cases('psychology', 'u4', [

  { id: 'pa-mira', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'a roommate leaving, answered with clinging',
    text: "Mira is twenty-nine. At her roommate's leaving party she cried and clung to her, saying she would be nothing without her and that she must not go. When the roommate said she would visit on weekends, Mira said she knew she would forget her, and the next week told the other roommates that she had always been selfish. Mira has been through the same thing with every close friend who has gone away since she was sixteen, and has lost three of them for good.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { P1: ['cried and clung to her, saying she would be nothing without her', 'told the other roommates that she had always been selfish', 'has lost three of them for good'] } },

  { id: 'pa-orla', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'a roommate leaving, answered with a speech',
    text: "Orla is twenty-nine. At her roommate's leaving party she stood on a chair and gave a speech about how much she would miss her, and cried so that the whole room turned to watch. When another guest was given a round of applause for a song, Orla sang louder over the end of it. Orla has made herself the center of every leaving party, wedding and birthday since she was sixteen, and two friends have stopped inviting her to parties.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['center'] },
    cues: { P1: ['stood on a chair and gave a speech about how much she would miss her', 'sang louder over the end of it', 'two friends have stopped inviting her to parties'] } },

  /* ---------- A histrionic personality and an ordinary personality: two people who are dramatic in everything ---------- */
  { id: 'pa-sofia', use: 'teach', tier: 'varied', setting: 'community', topic: 'a village fair, heart racing',
    text: "Sofia is forty-two and dramatic in everything she does. At the village fair she told the story of her fall off a bicycle to anyone who would listen, and when the raffle winner was announced she said that her heart was racing and she needed to sit down, until the vendors gathered around her. She has done this at every event in every village she has lived in. The fair committee has stopped asking her to help, and two neighbors cross the road.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['center'] },
    cues: { P1: ['said that her heart was racing and she needed to sit down', 'until the vendors gathered around her', 'two neighbors cross the road'] } },

  { id: 'pa-tito', use: 'teach', tier: 'varied', setting: 'community', topic: 'a village fair, leading the cheering', name: 'The fair host',
    text: "Tito is forty-two and dramatic in everything he does. At the village fair he told the story of his fall off a bicycle to anyone who would listen, and when the raffle winner was announced he led the cheering and bought her a drink. He has told his stories this way at every event in every village he has lived in. The fair committee asks him to introduce the raffle every year, and the neighbors he made twenty years ago still come to his parties.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['dramatic in everything he does', 'led the cheering and bought her a drink', 'still come to his parties'] } },

  /* ---------- An antisocial personality and an ordinary personality: a bent rule and a broken one ---------- */
  { id: 'pa-joss', use: 'teach', tier: 'varied', setting: 'money', topic: 'loans for an imaginary business',
    text: "Joss is thirty-seven. He has talked three friends into lending him money for a business that does not exist, telling each that it is a secret and that they must not tell the others. When one of them asked for her money back, he said she was lucky to have been asked, and blocked her. He has done this since he was twenty-two, in three cities, and has never repaid anyone.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { P1: ['talked three friends into lending him money for a business that does not exist', 'lucky to have been asked', 'has never repaid anyone'] } },

  { id: 'pa-lena', use: 'teach', tier: 'varied', setting: 'money', topic: 'a small rule-bender',
    text: "Lena is thirty-seven and has always bent small rules: she parks in loading bays, argues for a discount in every store and once talked her way into a first-class seat. When a friend lent her two hundred dollars, she paid it back with a card the next week. When a neighbor was upset about her parking, she apologized and stopped. She has been like this since she was a student, in three cities, and her friends still lend her things and she lends them back.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['has always bent small rules', 'she paid it back with a card the next week', 'her friends still lend her things and she lends them back'] } },

  { id: 'pa-ward', use: 'check', tier: 'varied', setting: 'community', topic: 'a touchy neighbor',
    text: "Ward is sixty-three and has always been touchy about being corrected. In his twenties he sulked for an evening whenever a foreman put him right, and he still does, and then comes around and says sorry. He has done it at three workplaces, and at home, where his wife says she just waits for the evening to pass. He has kept the same friends for forty years, the whole street asks him to fetch the ladders, and his last employer gave him a long-service watch.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['has always been touchy about being corrected', 'then comes around and says sorry', 'the whole street asks him to fetch the ladders'] },
    reason: { P1: 'Ward has been touchy for forty years in every place, and what decides it is {cue:P1}. The sulk passes by evening, he says sorry, and he has lost nobody.' },
    not: { outcome: 'narcvuln', why: 'The sulk can look like hurt withdrawal. But Ward keeps no count of what he is owed, it passes within the evening, and he has lost nobody.' } },

  { id: 'pa-bruno', use: 'teach', tier: 'misleading', setting: 'leisure', topic: 'a theatrical man and the village Christmas show', name: 'The theatrical uncle',
    text: "Bruno is fifty-seven and has been theatrical all his life. At school he played every lead, at his first job he ran the staff Christmas show, and at his sister's wedding he gave a speech that went on for twenty minutes. He tells every story with his whole body, cries easily at films and hugs everyone at a party. When another guest is applauded, Bruno applauds loudest. His friends from school still meet him every month, he has run the village Christmas show for twenty years and been thanked at the end of every one, and his daughters ask him to tell the same stories to their children.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { D1: ['has been theatrical all his life', 'he has run the village Christmas show for twenty years'],
            P1: ['Bruno applauds loudest', 'His friends from school still meet him every month', 'been thanked at the end of every one'] } }
]);
