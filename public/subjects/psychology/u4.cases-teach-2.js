// Psychology, Unit Four: cases shown inside cards, part two (clinging to people, being at the center of attention, breaking rules and using people,
// and the case that carries the key's tie-break). Field guide: see u4.cases-teach-1.js.

FC.cases('psychology', 'u4', [

  /* ---------- Borderline personality ---------- */
  { id: 'pa-nadia', use: 'teach', tier: 'clean', setting: 'home', topic: 'a friend going abroad', name: 'The friend who was going abroad',
    text: "Nadia is thirty-one. Since she was fifteen she has not been able to bear a friend or partner pulling away. When a friend said she would be abroad for a month, Nadia sent forty messages in two days, offered to pay for her flights home early and begged her to stay. When the friend replied a day late, Nadia wrote, 'You are a fake and I never want to see you again,' and blocked her. The next morning she sent twelve apologies: 'You are the only person who has ever understood me.' It has gone the same way with every close friend since school and with all four of her partners; she called one of them 'the love of my life' in March and 'a monster' in April. She has lost three friends and a job, after she called her manager at midnight to ask whether he was going to let her go.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { P1: ['sent forty messages in two days, offered to pay for her flights home early and begged her to stay', 'You are a fake and I never want to see you again', 'She has lost three friends and a job'] } },

  { id: 'pa-tomas', use: 'teach', tier: 'clean', setting: 'work', topic: 'a youth club and its deputies', name: 'The youth club leader',
    text: "Tomas is thirty-six and runs a youth club. When his deputy said she was thinking of moving to another club, he gave her the keys to his car, offered a pay rise the club could not afford and told her he could not cope without her. When she said she needed time to think, he told the committee she was 'poisonous' and that she had used him. A week later he wrote to her that she was the best person he knew. It has happened with each of his last six assistant principals, and with every girlfriend since he was twenty. The club has lost four of those deputies, and two girlfriends have changed their phone numbers.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { P1: ['told her he could not cope without her', "he told the committee she was 'poisonous' and that she had used him", 'It has happened with each of his last six assistant principals'] },
    segments: [
      { text: 'he gave her the keys to his car, offered a pay rise the club could not afford and told her he could not cope without her', note: 'That is Tomas trying to keep her close. The words asked for are what he does to her when she seems about to leave.' },
      { text: "When she said she needed time to think, he told the committee she was 'poisonous' and that she had used him" },
      { text: 'The club has lost four of those deputies, and two girlfriends have changed their phone numbers', note: 'That is what it has cost. It is not what he does when someone seems to be leaving.' }
    ] },

  { id: 'pa-pru', use: 'check', tier: 'clean', setting: 'community', topic: 'a book group and a close friend',
    text: "Pru is forty and belongs to a book group. When her closest friend there mentioned that she might not come every month, Pru called her eleven times, brought gifts to the next meeting and said she would be lost without her. When the friend then missed a meeting, Pru told the others that she had never really cared, and the next day sent her a long apology. Pru's sister says it has been the same with every close friend and boyfriend since school. Six people have stopped answering her calls.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { P1: ['called her eleven times, brought gifts to the next meeting and said she would be lost without her', 'told the others that she had never really cared', 'Six people have stopped answering her calls'] },
    reason: { P1: 'When her friend seems about to drift away, Pru reaches for her hard, and then turns on her: {cue:P1}. It has been the same with every close friend and boyfriend since school, and it has cost her six people.' },
    not: { outcome: 'narcvuln', why: 'Pru does not pull back and keep a quiet count of who got what. She reaches for the friend, hard, and when that fails she attacks her, then begs her back.' } },

  /* ---------- Histrionic personality ---------- */
  { id: 'pa-marguerite', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a guest who must be at the center', name: 'The guest who is always at the center',
    text: "Marguerite is forty-four and is the first to arrive at any gathering and the last to leave. She tells every story as if on a stage, hugs people she met ten minutes ago, and has told three different friends that each of them is her very best friend. When a colleague was applauded after a presentation, she began a long story about her own terrible week, her voice shaking and her eyes filling, until the room turned back to her. She has done this in every job she has had, at her sister's wedding and at her father's funeral. Her sister says she has stopped inviting her to small gatherings.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['center'] },
    cues: { P1: ['She tells every story as if on a stage', 'began a long story about her own terrible week, her voice shaking and her eyes filling, until the room turned back to her', 'she has stopped inviting her to small gatherings'] } },

  { id: 'pa-jasper', use: 'teach', tier: 'clean', setting: 'work', topic: 'an elementary school faculty room', name: 'The teacher with the headache',
    text: "Jasper is forty-nine and teaches at an elementary school. In every faculty room he has worked in, he has been the one with the biggest stories and the loudest ties. When a new teacher was praised by the principal at a staff meeting, Jasper announced that he had a headache so bad he might have to go home, and then spent ten minutes describing it until the meeting was about him. He was the same in college and in his two earlier schools. Three principals have told him that he takes over meetings, and the new teacher has asked to be moved to another grade.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['center'] },
    cues: { P1: ['the biggest stories and the loudest ties', 'spent ten minutes describing it until the meeting was about him', 'the new teacher has asked to be moved to another grade'] },
    segments: [
      { text: 'In every faculty room he has worked in, he has been the one with the biggest stories and the loudest ties', note: 'That is Jasper putting himself at the center. It happens whether or not anyone else is getting attention. The words asked for are what he does when attention goes to someone else.' },
      { text: 'When a new teacher was praised by the principal at a staff meeting, Jasper announced that he had a headache so bad he might have to go home, and then spent ten minutes describing it until the meeting was about him' },
      { text: 'the new teacher has asked to be moved to another grade', note: 'That is what it has cost. It is not what Jasper does when attention goes to someone else.' }
    ] },

  { id: 'pa-tilly', use: 'check', tier: 'clean', setting: 'community', topic: 'a community choir',
    text: "Tilly is thirty-eight and sings in a community choir. She arrives in a different costume each week and tells everyone about her week at a volume that stops the rehearsal. When the choir applauded a soloist, Tilly clutched her chest and said she felt faint with emotion, and kept it up until the conductor stopped to ask if she was all right. She has been like this in every group she has joined since she was a teenager. The choir has lost two altos who said they could not rehearse around her, and the conductor has asked her three times to keep the drama for the stage.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['center'] },
    cues: { P1: ['tells everyone about her week at a volume that stops the rehearsal', 'clutched her chest and said she felt faint with emotion', 'The choir has lost two altos'] },
    reason: { P1: 'Tilly puts herself at the center, and when the applause goes to the soloist her display gets bigger: {cue:P1}. It has been the same in every group since her teens, and it has cost the choir two singers.' },
    not: { outcome: 'narcgrand', why: 'Tilly does not run the soloist down or treat her with scorn. She turns the attention back to herself with a bigger display.' } },

  /* ---------- Antisocial personality ---------- */
  { id: 'pa-callum', use: 'teach', tier: 'clean', setting: 'money', topic: 'a car dealership owner and his customers', name: 'The dealership owner',
    text: "Callum is thirty-nine and owns a car dealership. He has sold three customers cars with the odometer rolled back, and told each of them it was 'the best car on the lot'. He borrowed four thousand dollars from his brother-in-law and has never repaid it, saying 'he can afford it'. At his last dealership he forged his boss's signature on a lease, and at school he was expelled for forging notes from his mother. When a friend lost his savings in a scheme Callum had pushed him into, Callum shrugged: 'He should have read the paperwork.' He has been fired twice, and his brother-in-law no longer speaks to him.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { P1: ['sold three customers cars with the odometer rolled back', 'He should have read the paperwork', 'his brother-in-law no longer speaks to him'] } },

  { id: 'pa-bridget', use: 'teach', tier: 'clean', setting: 'community', topic: 'an arts society treasurer', name: 'The society treasurer',
    text: "Bridget is forty-five and treasurer of the local arts society. She kept the proceeds of two raffles, told the committee that the cash boxes had been stolen, and when the police asked, told them the committee had never given her a receipt book. In her last job at a real estate agency she took deposits for apartments that were not hers to rent out. When an elderly member said she had lost her savings in one of them, Bridget said, 'Nobody made her pay, did they?' and went to lunch. She has done much the same since her twenties, in four towns, and the arts society has closed.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { P1: ['kept the proceeds of two raffles', "Nobody made her pay, did they?", 'the arts society has closed'] },
    segments: [
      { text: 'She kept the proceeds of two raffles, told the committee that the cash boxes had been stolen, and when the police asked, told them the committee had never given her a receipt book', note: 'That is rules broken and people lied to. It is part of what you point to, but the words asked for are what she shows about the harm.' },
      { text: "When an elderly member said she had lost her savings in one of them, Bridget said, 'Nobody made her pay, did they?' and went to lunch" },
      { text: 'She has done much the same since her twenties, in four towns, and the arts society has closed', note: 'That is the years, the places and what it has cost. It is not what she shows about the harm.' }
    ] },

  { id: 'pa-sven', use: 'check', tier: 'clean', setting: 'learning', topic: 'a stolen exam and an unbuilt kitchen',
    text: "Sven is thirty-four. At nineteen he sold his classmates the answers to an exam he had stolen, and told the school it was another student. At twenty-five he took a deposit from a couple for a kitchen he never built, and at thirty he did the same to a family two towns away. When one of them called him in tears, he said, 'That's business. You should have asked for references.' He has been to court twice, and says each time that the judge 'had it in for him'.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { P1: ['sold his classmates the answers to an exam he had stolen', 'took a deposit from a couple for a kitchen he never built', "That's business. You should have asked for references"] },
    reason: { P1: 'Sven has broken rules and used people at nineteen, twenty-five and thirty, in different towns: {cue:P1}. When one of the people he harmed called in tears he showed no regret at all.' },
    not: { outcome: 'narcgrand', why: 'Sven does not need anyone to see him as special, and he does not turn scornful when he is not. What he wants is the money, and he gets it by lying.' } },

  /* ---------- The case that carries the key's tie-break ---------- */
  { id: 'pa-victor', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a roofer who is better than everyone', name: 'The roofer', also: ['above'],
    text: "Victor is fifty-six and runs a roofing firm. He tells everyone in the county that nobody roofs like him, calls rival firms 'amateurs', and has screamed at customers who questioned a bill: 'Do you know who you are talking to?' Over fifteen years, in four towns, he has taken deposits for roofs he never started and left a former partner with his debts. When one customer came to his yard in tears with her unpaid deposit, Victor said, 'They should have read the contract. Not my problem.' Eleven customers and a partner have lost money.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { P1: ['taken deposits for roofs he never started', 'They should have read the contract. Not my problem'] },
    segments: [
      { text: "He tells everyone in the county that nobody roofs like him, calls rival firms 'amateurs', and has screamed at customers who questioned a bill: 'Do you know who you are talking to?'", note: 'That is acting as if he is above everyone, with anger when he is questioned. It is real, and it is what you point to for the other name. It is not what settles this case.' },
      { text: "Over fifteen years, in four towns, he has taken deposits for roofs he never started and left a former partner with his debts. When one customer came to his yard in tears with her unpaid deposit, Victor said, 'They should have read the contract. Not my problem.'" },
      { text: 'Eleven customers and a partner have lost money', note: 'That is the cost. It is needed for either name, so it cannot settle which of the two this is.' }
    ] }
]);
