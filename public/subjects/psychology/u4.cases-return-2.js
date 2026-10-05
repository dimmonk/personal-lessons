// Psychology, Unit Four: fresh cases kept back for later days (second file: the other three names, three cases each).
// Field guide: see u4.cases-return-1.js.

FC.cases('psychology', 'u4', [

  /* ---------- Histrionic personality ---------- */
  { id: 'pa-ret-yoga', use: 'return', tier: 'varied', setting: 'health', topic: 'a yoga teacher and her class',
    text: "Giulia is thirty-four and a yoga teacher. In every class she has taught, in three studios, she opens by telling the room about her week in a trembling voice. When a student shared a piece of good news, Giulia gave a long account of her own worst day until the class turned towards her and the student sat down. Two studios have had complaints, and students say they stopped coming because the class is about her.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['centre'] },
    cues: { D1: ['In every class she has taught, in three studios'], P1: ['opens by telling the room about her week in a trembling voice', 'gave a long account of her own worst day until the class turned towards her', 'students say they stopped coming because the class is about her'] },
    reason: { D1: 'The case covers every class in three studios: {cue:D1}.',
              P1: 'Giulia puts herself at the centre, and when a student had good news her display got bigger: {cue:P1}. It has cost her students and two complaints.' },
    not: { outcome: 'narcgrand', why: 'Giulia does not run the student down. She turns the attention back to herself.' } },

  { id: 'pa-ret-committee', use: 'return', tier: 'varied', setting: 'money', topic: 'a credit union committee member',
    text: "Ferdinand is fifty-five and gives every committee he joins a performance. At the credit union he is always the one with the longest speech and the most moving story, and when the treasurer was praised for the year's accounts he said that he had been up all night with a pain in his chest, and kept the board listening for twenty minutes. He has done this on four committees. The credit union's chair has asked him to speak last, and two committees have voted him off.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['centre'] },
    cues: { D1: ['He has done this on four committees'], P1: ['the longest speech and the most moving story', 'up all night with a pain in his chest, and kept the board listening for twenty minutes', 'two committees have voted him off'] },
    reason: { D1: 'The case covers four committees over years: {cue:D1}.',
              P1: 'Ferdinand puts himself at the centre, and when the treasurer was praised his display got bigger: {cue:P1}. Two committees have voted him off.' },
    not: { outcome: 'ordpersonality', why: 'A talkative man with a gift for stories can be {o:ordpersonality}. But Ferdinand’s displays grow when someone else is praised, and committees have voted him off.' } },

  { id: 'pa-ret-star', use: 'return', tier: 'varied', setting: 'home', topic: 'a grandmother at a school play',
    text: "Louisa is sixty and has been the star of every family occasion for forty years. At every Christmas she arrives in a new outfit and tells the stories as if on a stage. When her grandson was given the lead in the school play, Louisa wept loudly at his performance, left the hall in a fuss and had to be comforted in the corridor by half the audience. It was the same at her daughter's graduation and wedding. Her daughter now tells her the wrong time for family events.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['centre'] },
    cues: { D1: ['has been the star of every family occasion for forty years'], P1: ['tells the stories as if on a stage', 'had to be comforted in the corridor by half the audience', 'tells her the wrong time for family events'] },
    reason: { D1: 'The case covers forty years of family occasions: {cue:D1}.',
              P1: 'Louisa puts herself at the centre, and when the attention went to her grandson her display got bigger: {cue:P1}. Her daughter now gives her the wrong time.' },
    not: { outcome: 'borderline', why: 'Louisa’s display is for the whole hall. She holds on to no one person and attacks nobody.' } },

  /* ---------- Antisocial personality ---------- */
  { id: 'pa-ret-builder', use: 'return', tier: 'varied', setting: 'work', topic: 'a builder and householders’ deposits',
    text: "Barry is forty-four and a builder who has taken deposits from nine households in two towns and finished three jobs. He tells each that materials have 'gone up' and asks for more. When a family wrote that they were living without a roof, he said, 'You wanted the cheapest quote.' He had a suspended sentence at twenty-two for the same thing in another county, and fifty-four thousand pounds of customers' money has gone.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { D1: ['in two towns', 'at twenty-two for the same thing in another county'], P1: ['taken deposits from nine households', 'You wanted the cheapest quote', "fifty-four thousand pounds of customers' money has gone"] },
    reason: { D1: 'The case covers two decades and several places: {cue:D1}.',
              P1: 'Barry has taken deposits and not done the work, and showed no regret to a family without a roof: {cue:P1}. Fifty-four thousand pounds has gone.' },
    not: { outcome: 'narcgrand', why: 'Nothing in the case shows Barry needing to be treated as special, or turning scornful when he is not. What drives it is the money.' } },

  { id: 'pa-ret-tutor', use: 'return', tier: 'varied', setting: 'learning', topic: 'a tutoring agency and its fees',
    text: "Veronica is thirty-eight and runs tutoring agencies. At three agencies she has sold places on courses that did not exist, and when a mother asked for her son's money back she said, 'Children don't learn, that's not my fault,' and closed the account. At nineteen she was dismissed from a college for falsifying attendance, and seventeen families have lost fees.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { D1: ['At three agencies', 'At nineteen'], P1: ['sold places on courses that did not exist', "Children don't learn, that's not my fault", 'seventeen families have lost fees'] },
    reason: { D1: 'The case covers nearly twenty years and several agencies: {cue:D1}.',
              P1: 'Veronica has sold what did not exist, and showed no regret to a mother who lost her money: {cue:P1}. Seventeen families have lost fees.' },
    not: { outcome: 'ordpersonality', why: 'This is not a rule bent a little and put right. People are lied to, used, and left to lose their money, and she shows no regret.' } },

  { id: 'pa-ret-gyms', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a gym owner and lifetime memberships',
    text: "Dominic is forty-nine and has run three gyms. At each he has sold lifetime memberships and closed the gym within a year, and left town. When members asked for refunds he told them the contract was 'clear', and when a member who had paid a thousand pounds wept, he said, 'You'll live.' He has changed company names four times and been banned from being a director once.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { D1: ['has run three gyms', 'changed company names four times'], P1: ['sold lifetime memberships and closed the gym within a year', "You'll live", 'banned from being a director once'] },
    reason: { D1: 'The case covers three gyms and four company names: {cue:D1}.',
              P1: 'Dominic sells what he will not provide, and showed no regret to a member who lost a thousand pounds: {cue:P1}. A court has already banned him once.' },
    not: { outcome: 'narcgrand', why: 'Dominic does not need to be treated as special and does not turn scornful when he is not. What drives it is the money.' } },

  /* ---------- An ordinary personality ---------- */
  { id: 'pa-ret-bus', use: 'return', tier: 'varied', setting: 'work', topic: 'a gruff bus driver',
    text: "Ahmed is fifty-two and has driven the number 9 bus for twenty-five years. At the depot, at home and at the pub he is the same: gruff, never smiling at anyone he does not know, and complaining about the timetable to anyone who will listen. His regulars wait for his bus, the depot asks him to train the new drivers every year, and the old woman who rides it every Tuesday brings him a cake.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { D1: ['At the depot, at home and at the pub he is the same'], P1: ['gruff, never smiling at anyone he does not know', 'His regulars wait for his bus', 'brings him a cake'] },
    reason: { D1: 'The case covers twenty-five years and three places where he is the same: {cue:D1}.',
              P1: 'Ahmed has been gruff for a quarter of a century, and what the case shows is what that has not cost: {cue:P1}. People wait for his bus.' },
    not: { outcome: 'narcgrand', why: 'He is gruff, which {o:narcgrand} can be too. But nobody is scorned, and nobody has left: his regulars wait for him.' } },

  { id: 'pa-ret-student', use: 'return', tier: 'varied', setting: 'learning', topic: 'a shy student',
    text: "Zofia is twenty-two and has been shy since primary school. She avoids seminars, eats alone and sends her essays in early so that she does not have to present. She has never lost a friend or a place over it: the same two friends from school still ring her, and her tutors write that she is reliable and thoughtful.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { D1: ['has been shy since primary school', 'the same two friends from school'], P1: ['avoids seminars, eats alone', 'She has never lost a friend or a place over it', 'her tutors write that she is reliable and thoughtful'] },
    reason: { D1: 'The case covers a whole childhood and adulthood, and several places and people: {cue:D1}.',
              P1: 'Zofia has been shy all her life, and what the case shows is what that has not cost: {cue:P1}. Nothing is being lost.' },
    not: { outcome: 'narcvuln', why: 'Avoiding people and eating alone can look like withdrawal. But Zofia makes no claim to be owed anything, keeps no count, and has lost nobody.' } },

  { id: 'pa-ret-treasurer', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a bowls club treasurer who quotes the by-laws',
    text: "Sidney is sixty-eight and has always taken the rules of the club very seriously: he has quoted the by-laws at three captains in forty years, and sulks when he is overruled. By the next morning he rings to say 'no hard feelings'. The same four friends play with him every Saturday, he has been the club's treasurer for twenty years, and when he was ill the whole club sent cards.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { D1: ['in forty years', "the club's treasurer for twenty years"], P1: ['sulks when he is overruled', 'no hard feelings', 'the whole club sent cards'] },
    reason: { D1: 'The case covers forty years and one club full of people: {cue:D1}.',
              P1: 'Sidney is touchy about the rules, and what the case shows is what that has not cost: {cue:P1}. The sulk passes by morning, and the club stays with him.' },
    not: { outcome: 'narcvuln', why: 'The sulk can look like hurt withdrawal. But it passes by the next morning, he keeps no count of what he is owed, and he has lost nobody.' } }
]);
