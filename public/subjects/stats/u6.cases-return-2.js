// Statistical Claims, Unit Six: fresh cases held back for later days, part two: Confounding and Reverse causation.
// Four for each name, run as a whole route on a later day. Field guide: see u1.cases-drill-1.js.

FC.cases('stats', 'u6', [

  /* ---------- Confounding ---------- */
  { id: 'k-ret-bikeshare', use: 'return', tier: 'clean', setting: 'community', topic: 'bike-share stations and car traffic',
    text: "A city says: 'Neighborhoods with a bike-share station have 15% less car traffic, so bike-share cuts traffic.' Neighborhoods with a station average 8,500 cars a day, and neighborhoods without one average 10,000. Stations were placed only in neighborhoods next to subway lines, where fewer residents own cars.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so bike-share cuts traffic', K1: 'Stations were placed only in neighborhoods next to subway lines, where fewer residents own cars' },
    reason: { S1: 'The numbers are given for both kinds of neighborhood, and the city says {cue:S1}. That is a claim of cause.',
              K1: 'The stations were not placed by chance: {cue:K1}. Neighborhoods with subway lines and few cars would have less car traffic with or without a station, so something else that differs between the groups could bring about the result alone.' },
    not: { outcome: 'reverse', why: 'Nothing shows that low traffic came first and led the city to put in stations. What the case shows is something else that differs between the neighborhoods.' },
    wouldChange: 'If neighborhoods alike in subway service had been given stations or not by lottery, and the stations still came with less traffic, the answer would be {a:S1.holds}.' },

  { id: 'k-ret-dogfood', use: 'return', tier: 'varied', setting: 'home', topic: 'premium dog food and dog lifespans',
    text: "A pet-food brand says: 'Dogs on our premium food live 2 years longer, so premium food makes dogs live longer.' The 300 dogs on it average 13 years, and the 700 dogs on other foods average 11. A vet survey shows that 250 of the 300 premium-fed dogs are small breeds, against 200 of the 700 others, and small breeds live longer.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so premium food makes dogs live longer', K1: 'A vet survey shows that 250 of the 300 premium-fed dogs are small breeds, against 200 of the 700 others' },
    reason: { S1: 'The numbers are given for both groups, and the brand says {cue:S1}. That is a claim of cause.',
              K1: 'Owners chose the food, and {cue:K1}. Small breeds live longer on any food, so something else that differs between the groups could bring about the result alone.' },
    not: { outcome: 'cause_ok', why: 'Owners chose the food, so a draw did not form the groups. The breed is something else that differs between them, which is {o:confound}.' },
    wouldChange: 'If dogs of the same breed and size had been fed one food or the other by lottery, and the premium dogs still lived longer, the answer would be {a:S1.holds}.' },

  { id: 'k-ret-service', use: 'return', tier: 'clean', setting: 'money', topic: 'service histories and used-car prices',
    text: "A used-car site says: 'Cars with a full service history sell for 20% more, so keeping a service history raises a car’s value.' The 200 cars with one averaged $12,000, and the 300 without averaged $10,000. The site’s data show that 160 of the 200 cars with histories have under 60,000 miles, against 70 of the 300 without.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so keeping a service history raises a car’s value', K1: 'The site’s data show that 160 of the 200 cars with histories have under 60,000 miles, against 70 of the 300 without' },
    reason: { S1: 'The numbers are given for both groups, and the site says {cue:S1}. That is a claim of cause.',
              K1: 'Owners chose whether to keep a history, and {cue:K1}. Cars with low mileage sell for more with or without a history, so something else that differs between the groups could bring about the result alone.' },
    not: { outcome: 'cause_ok', why: 'Owners chose whether to keep a history, so a draw did not form the groups. Mileage is something else that differs between them, which is {o:confound}.' },
    wouldChange: 'If cars of the same mileage and age had been compared, and the ones with histories still sold for more, the answer would change.' },

  { id: 'k-ret-choir', use: 'return', tier: 'varied', setting: 'learning', topic: 'a school choir and missed days',
    text: "A school says: 'Students in the choir miss fewer days of school, so singing in the choir improves attendance.' The 40 choir members averaged 3 missed days, and the other 360 students averaged 6. The choir rehearses at 7 a.m., and the school’s records show that nearly all choir members have a parent at home in the mornings.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'singing in the choir improves attendance', K1: 'the school’s records show that nearly all choir members have a parent at home in the mornings' },
    reason: { S1: 'The numbers are given for both groups, and the school says {cue:S1}. That is a claim of cause.',
              K1: 'Students chose the choir, and {cue:K1}. A parent at home in the mornings gets a child to school on time and on more days, with or without a choir, so something else that differs between the groups could bring about the result alone.' },
    not: { outcome: 'reverse', why: 'Nothing shows that good attendance came first and led students to join the choir. What the case shows is something else that differs between the groups.' },
    wouldChange: 'If the school’s records showed that the teacher only took students who already had good attendance, the order would be what mattered.' },

  /* ---------- Reverse causation ---------- */
  { id: 'k-ret-giving', use: 'return', tier: 'clean', setting: 'money', topic: 'charity giving and happiness',
    text: "A survey of 200 households finds that those who give the most to charity are the happiest: the 70 households giving over $2,000 a year rate their happiness 8.0 out of 10, and the 130 giving less rate it 6.5. A magazine says: 'Giving to charity makes you happy.' The magazine’s own interviews show that most of the big givers say they began giving more after their lives turned out well, when they had money to spare.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Giving to charity makes you happy', K1: 'most of the big givers say they began giving more after their lives turned out well' },
    reason: { S1: 'The numbers are given for both groups, and the magazine says {cue:S1}. That is a claim of cause.',
              K1: 'The magazine says giving caused the happiness. But {cue:K1}, so a happy, comfortable life came first and led to the giving.' },
    not: { outcome: 'confound', why: 'No third thing is needed. The second thing, a life that turned out well, came first and led to the first, which is {o:reverse}.' },
    wouldChange: 'If the interviews showed that households began giving first, and their happiness rose only afterward, the order would point the other way.' },

  { id: 'k-ret-brushing', use: 'return', tier: 'varied', setting: 'health', topic: 'toothbrushing and cavities',
    text: "A report finds that people who brush more often have more cavities: people who brush three times a day average 3.1 cavities, and people who brush once a day average 1.4. A blog says: 'Brushing more causes cavities.' The dental records show that most of the three-times-a-day brushers started brushing more after a dentist found their first cavities.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Brushing more causes cavities', K1: 'most of the three-times-a-day brushers started brushing more after a dentist found their first cavities' },
    reason: { S1: 'The numbers are given for both groups, and the blog says {cue:S1}. That is a claim of cause.',
              K1: 'The blog says brushing caused the cavities. But {cue:K1}, so the cavities came first and led people to brush more.' },
    not: { outcome: 'confound', why: 'No third thing is needed. The cavities came first and led to the extra brushing, which is {o:reverse}.' },
    wouldChange: 'If the records showed that people began brushing three times a day long before any cavity, the order would point the other way.' },

  { id: 'k-ret-overtime', use: 'return', tier: 'clean', setting: 'work', topic: 'overtime hours and mistakes',
    text: "A company survey finds that employees who work more overtime make more mistakes: the 25 employees averaging over 10 hours of overtime a week made 7.2 mistakes a month, and the 75 with under 2 hours made 2.5. A manager says: 'Overtime makes people careless.' The time sheets show that most overtime hours were logged as redoing earlier work.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Overtime makes people careless', K1: 'most overtime hours were logged as redoing earlier work' },
    reason: { S1: 'The numbers are given for both groups, and the manager says {cue:S1}. That is a claim of cause.',
              K1: 'The manager says overtime caused the mistakes. But {cue:K1}, so the mistakes came first and led to the overtime.' },
    not: { outcome: 'confound', why: 'No third thing is needed. The mistakes came first and led to the overtime spent fixing them, which is {o:reverse}.' },
    wouldChange: 'If the time sheets showed the overtime was on new work, and the mistakes were made afterward, the order would point the other way.' },

  { id: 'k-ret-extrahelp', use: 'return', tier: 'varied', setting: 'learning', topic: 'extra help in math and test scores',
    text: "A teacher says: 'Students who get extra help in math have lower scores, so extra help hurts.' The 50 students who get the extra help average 58 on the spring test, and the 250 who do not average 81. The school gives extra help only to students who scored below 60 in the fall.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'so extra help hurts', K1: 'The school gives extra help only to students who scored below 60 in the fall' },
    reason: { S1: 'The numbers are given for both groups, and the teacher says {cue:S1}. That is a claim of cause.',
              K1: 'The teacher says that the help caused the low scores. But {cue:K1}, so the low scores came first and decided who got the help.' },
    not: { outcome: 'confound', why: 'No third thing is needed. The low scores came first and led to the extra help, which is {o:reverse}.' },
    wouldChange: 'If the help had gone to students chosen by lottery, and their scores were still lower, the order could not explain the figures.' }
]);
