// Statistical Claims, Unit Six: fresh cases held back for later days, part two: Confounding and Reverse causation.
// Two for each name, run as a whole route on a later day. Field guide: see u1.cases-drill-1.js.

FC.cases('stats', 'u6', [

  /* ---------- Confounding ---------- */
  { id: 'k-ret-bikeshare', use: 'return', tier: 'clean', setting: 'community', topic: 'bike-share stations and car traffic',
    text: "A city says: 'Neighborhoods with a bike-share station have 15% less car traffic, so bike-share cuts traffic.' Neighborhoods with a station average 8,500 cars a day, and neighborhoods without one average 10,000. Stations were placed only in neighborhoods next to subway lines, where fewer residents own cars.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so bike-share cuts traffic', K1: 'Stations were placed only in neighborhoods next to subway lines, where fewer residents own cars' },
    reason: { S1: 'The numbers are given for both kinds of neighborhood, and the city says {cue:S1}. That is a claim of cause.',
              K1: 'The stations were not placed by chance: {cue:K1}. Neighborhoods near subway lines with few cars would have less traffic with or without a station.' },
    not: { outcome: 'reverse', why: 'Nothing shows that low traffic came first and led the city to put in stations. The story shows something else that differs between the neighborhoods.' } },

  { id: 'k-ret-dogfood', use: 'return', tier: 'varied', setting: 'home', topic: 'premium dog food and dog lifespans',
    text: "A pet-food brand says: 'Dogs on our premium food live 2 years longer, so premium food makes dogs live longer.' The 300 dogs on it average 13 years, and the 700 dogs on other foods average 11. A vet survey shows that 250 of the 300 premium-fed dogs are small breeds, against 200 of the 700 others, and small breeds live longer.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so premium food makes dogs live longer', K1: 'A vet survey shows that 250 of the 300 premium-fed dogs are small breeds, against 200 of the 700 others' },
    reason: { S1: 'The numbers are given for both groups, and the brand says {cue:S1}. That is a claim of cause.',
              K1: 'Owners chose the food, and {cue:K1}. Small breeds live longer on any food.' },
    not: { outcome: 'cause_ok', why: 'Owners chose the food, so a draw did not form the groups. Breed is something else that differs between them, which is {o:confound}.' } },

  /* ---------- Reverse causation ---------- */
  { id: 'k-ret-giving', use: 'return', tier: 'clean', setting: 'money', topic: 'charity giving and happiness',
    text: "A survey of 200 households finds that those who give the most to charity are the happiest: the 70 households giving over $2,000 a year rate their happiness 8.0 out of 10, and the 130 giving less rate it 6.5. A magazine says: 'Giving to charity makes you happy.' The magazine’s own interviews show that most of the big givers say they began giving more after their lives turned out well, when they had money to spare.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Giving to charity makes you happy', K1: 'most of the big givers say they began giving more after their lives turned out well' },
    reason: { S1: 'The numbers are given for both groups, and the magazine says {cue:S1}. That is a claim of cause.',
              K1: 'The magazine says giving caused the happiness. But {cue:K1}, so a comfortable life came first and led to the giving.' },
    not: { outcome: 'confound', why: 'No third thing is needed. A life that turned out well came first and led to the giving, which is {o:reverse}.' } },

  { id: 'k-ret-brushing', use: 'return', tier: 'varied', setting: 'health', topic: 'toothbrushing and cavities',
    text: "A report finds that people who brush more often have more cavities: people who brush three times a day average 3.1 cavities, and people who brush once a day average 1.4. A blog says: 'Brushing more causes cavities.' The dental records show that most of the three-times-a-day brushers started brushing more after a dentist found their first cavities.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Brushing more causes cavities', K1: 'most of the three-times-a-day brushers started brushing more after a dentist found their first cavities' },
    reason: { S1: 'The numbers are given for both groups, and the blog says {cue:S1}. That is a claim of cause.',
              K1: 'The blog says brushing caused the cavities. But {cue:K1}, so the cavities came first and led people to brush more.' },
    not: { outcome: 'confound', why: 'No third thing is needed. The cavities came first and led to the extra brushing, which is {o:reverse}.' } },

]);
