// Psychology, Unit Four: cases shown inside cards, part one (the term case, the two names about a sense of worth, and the ordinary way of being).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// Field guide: see u2.cases-teach-1.js. A case here is an account of years, so its marked words are often two or three phrases.
// Every case is invented. No person in it is real, and none of them is diagnosed: a case shows what someone did, and the key names that.

FC.cases('psychology', 'u4', [

  /* ---------- The case that carries the term "personality disorder" (no name is asked of it) ---------- */
  { id: 'pa-dale', use: 'teach', tier: 'clean', setting: 'work', topic: 'twenty years and many jobs', name: 'Twenty years and many jobs',
    text: "Dale is fifty-four and has had five jobs in twenty years. In every one he has ended up in the same row: he tells his manager how the department should be run, calls his colleagues 'not in my league', and is furious when anyone else is thanked. He has left or been pushed out of all five. His first wife and his two sons say it was the same at home. His eldest son has not spoken to him for six years, and Dale says that is his son's loss." },

  /* ---------- Grandiose narcissism ---------- */
  { id: 'pa-dennis', use: 'teach', tier: 'clean', setting: 'work', topic: 'a law partner', name: 'The law partner',
    text: "Dennis is fifty-three and a partner at his third law firm. In his twenties he told the other trainees that they were there to carry his files, and he still opens every meeting by describing how the firm managed before he arrived. He takes the corner room, sits at the head of every table and talks over the juniors. When a trainee was praised at last year's dinner for winning a case, he told her in front of the team that she was 'a nobody who got lucky'. His wife says that in thirty years he has never asked how her day was. Two juniors have resigned this year with the same complaint, and his son, who is twenty-four, no longer visits.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { P1: ['he still opens every meeting by describing how the firm managed before he arrived', 'a nobody who got lucky', 'Two juniors have resigned this year with the same complaint'] } },

  { id: 'pa-wes', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a soccer club captaincy',
    text: "Wes has played for the same amateur soccer club for twenty-five years. He tells each new signing that he is the best player they have had, and expects to wear the number ten shirt whatever his form. When the club chose a younger player as captain, Wes told the whole squad that the new captain was 'a clown who couldn't kick a ball'. He has fallen out with three managers and two clubs over where he is picked, and the secretary says half the squad now stay away from the bar when Wes is in it.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { P1: ["a clown who couldn't kick a ball", 'He has fallen out with three managers and two clubs'] },
    segments: [
      { text: 'He tells each new signing that he is the best player they have had, and expects to wear the number ten shirt whatever his form', note: 'That is Wes acting as if he is above the others. It happens before anything goes against him. The words asked for are what he does when something does.' },
      { text: "When the club chose a younger player as captain, Wes told the whole squad that the new captain was 'a clown who couldn't kick a ball'" },
      { text: 'He has fallen out with three managers and two clubs over where he is picked', note: 'That is a cost. It comes from what he does, but it is not what he does.' }
    ],
    reason: { P1: 'The captaincy went to someone else, and Wes answered with scorn for the person who got it. The words that decide the case are {cue:P1}: the scorn, and what it has cost.' },
    not: { outcome: 'narcvuln', why: 'Wes does not go quiet and hurt. He turns on the new captain out loud, in front of the whole squad.' } },

  /* ---------- An ordinary personality ---------- */
  { id: 'pa-rosa', use: 'teach', tier: 'clean', setting: 'work', topic: 'a loud, certain baker', name: 'The loud baker',
    text: "Rosa is fifty-eight and has run her bakery for thirty years. She has been the loudest and surest person in every room since she was a girl: she ran her school's basketball team, her union branch and the church flower guild the same way, by telling everyone what to do and being right about half the time. Her family teases her about it. When she gets a recipe wrong she laughs and says 'wrong again'. When her sister's husband won the town's business award, she organized the party. Her staff have stayed an average of fifteen years, and she has the same three friends she made at school.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['has been the loudest and surest person in every room since she was a girl', 'Her staff have stayed an average of fifteen years, and she has the same three friends she made at school'] } },

  { id: 'pa-marcus', use: 'check', tier: 'clean', setting: 'learning', topic: 'a blunt math teacher',
    text: "Marcus has taught math for thirty years in two schools and has always said exactly what he thinks. He tells students their working is 'a mess' when it is, and he tells the principal she is wrong when he thinks so. He was the same as a student teacher. Pupils tease him about it, he laughs, and former students still write to him. He has been asked to stay on three times, and the principal says she trusts him because he never says one thing and means another.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { P1: ['has always said exactly what he thinks', 'former students still write to him'] },
    reason: { P1: 'Marcus has been blunt for thirty years and in two schools, and the case shows what that has not done: {cue:P1}, and he has been asked to stay on three times. A way of being that is blunt and that keeps no cost behind it is not what the other names point to.' },
    not: { outcome: 'narcgrand', why: 'He says hard things, and so does {o:narcgrand}. But nobody is scorned or driven away. He laughs when he is teased, and the people around him stay.' } },

  /* ---------- Vulnerable narcissism ---------- */
  { id: 'pa-ellis', use: 'teach', tier: 'clean', setting: 'work', topic: 'a clerk who is never thanked', name: 'The clerk',
    text: "Ellis is forty-seven and works in a city government office. Since school he has said that the teachers liked the other boys better. In three offices he has stopped speaking to anyone who was promoted over him, and he says, quietly, 'Some people just get handed things.' When his younger sister got engaged he said 'lovely' and left before the cake, and he has not called her in two years. His wife says he keeps a count of who has been thanked and who has not, and that she is always on the list of those who never thank him. He has turned down two promotions because 'they would only have given it to me when it no longer mattered'.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { P1: ['Some people just get handed things', 'he has stopped speaking to anyone who was promoted over him', 'he has not called her in two years'] } },

  { id: 'pa-lars', use: 'check', tier: 'clean', setting: 'community', topic: 'a food bank volunteer',
    text: "Lars has volunteered at the food bank for twelve years. He says that nobody ever thanks him for what he does, and that others get praised for much less. When a new volunteer was given a long-service award, Lars said nothing, went home and stayed away for a month. He did the same when the manager he had trained was promoted over him, and again when his own brother was thanked in the church newsletter. The manager says she has stopped asking him to events, because he goes quiet and cold for weeks afterward.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { P1: ['nobody ever thanks him for what he does', 'said nothing, went home and stayed away for a month'] },
    reason: { P1: 'Lars says he is overlooked and owed more: {cue:P1}. When someone else is thanked he does not hit out. He withdraws, hurt, and he has done it with the manager, with the new volunteer and with his brother.' },
    not: { outcome: 'narcgrand', why: 'Lars does not run anyone down or turn scornful. He pulls back, and what he feels is hurt and resentment.' } }
]);
