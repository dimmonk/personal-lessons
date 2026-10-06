// Psychology, Unit Two: fresh cases kept back for later days (first file: three names, three cases each).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries
// marked words and a reason for both questions. Three cases for each name: one for each scheduled return (E9).

FC.cases('psychology', 'u2', [

  /* ---------- Cognitive dissonance reduction ---------- */
  { id: 'ret-chair', use: 'return', tier: 'varied', setting: 'work', topic: 'a late chair',
    text: "Rita tells her team that meetings must start on time. She walks into her own Monday meeting twelve minutes late. 'A good chair gives people time to settle,' she says.",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { D1: 'She walks into her own Monday meeting twelve minutes late', R1: 'A good chair gives people time to settle' },
    reason: { D1: 'One person is defending something she did herself: {cue:D1}, followed by her reason for it.',
              R1: '{cue:R1} is a reason given after arriving late. It says the lateness is fine, and nothing else changes: what she asks of everyone else stays as it was.' },
    not: { outcome: 'confbias', why: 'No evidence is being tested. She is explaining her own lateness.' } },

  { id: 'ret-checkup', use: 'return', tier: 'varied', setting: 'health', topic: 'a canceled check-up',
    text: "Olu tells his friends that men who avoid the doctor are fools. He has canceled his own check-up three times this year. 'It's different for me,' he says. 'I know my body.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { D1: 'He has canceled his own check-up three times this year', R1: "It's different for me" },
    reason: { D1: 'One person is defending something he did himself: {cue:D1}, followed by his reason for it.',
              R1: 'Olu did something that does not fit what he tells his friends. {cue:R1} is a reason given afterward for why it is fine. He takes nothing back.' },
    not: { outcome: 'sunkcost', why: 'Nothing already spent is being given as the reason for a next step. He is giving a reason why something he did is fine.' } },

  { id: 'ret-recycling', use: 'return', tier: 'varied', setting: 'home', topic: 'recycling on vacation',
    text: "June sorts every scrap of recycling and tells the neighbors they should too. On vacation she put a week of bottles and cans in the regular trash. 'Holidays don't count,' she said, laughing. 'You have to switch off sometime.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { D1: 'she put a week of bottles and cans in the regular trash', R1: "Holidays don't count" },
    reason: { D1: 'One person is defending something she did herself: {cue:D1}, followed by her reason for it.',
              R1: 'June did something that does not fit what she tells the neighbors. {cue:R1} is a reason given afterward for why that week is fine.' },
    not: { outcome: 'fair', why: 'Nothing she believes about recycling has changed, and no new fact arrived. She is giving a reason why one week does not count.' } },

  /* ---------- Sunk cost fallacy ---------- */
  { id: 'ret-mountain', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a mountain hike',
    text: "Halfway up a mountain, with cloud closing in and the forecast getting worse, the leader of the hiking group says: 'We drove six hours to get here. We're going to the top.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { D1: 'the leader of the hiking group says', R1: 'We drove six hours to get here' },
    reason: { D1: 'One person is giving a reason for a choice of their own: {cue:D1}.',
              R1: 'The reason for going on is {cue:R1}: the drive already made. The cloud and the forecast, which are about the next step, are not in the reasoning.' },
    not: { outcome: 'dissonance', why: 'The leader is not giving a reason why something already done is fine. The drive already made is given as the reason for the next step.' } },

  { id: 'ret-app', use: 'return', tier: 'varied', setting: 'money', topic: 'a language app',
    text: "Faye has paid $15 a month for a language app for three years and last opened it in spring. Her bank sends a reminder that the yearly renewal is due. 'I've put more than five hundred dollars into this,' she says. 'I can't cancel now.' She renews.",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { D1: 'She renews', R1: "I've put more than five hundred dollars into this" },
    reason: { D1: 'One person is making a choice of her own and giving her reason for it: {cue:D1}.',
              R1: 'A next step is to be decided, renew or cancel, and the reason Faye gives for renewing is {cue:R1}: what she has already paid. Whether she would use another year of it is not in her reasoning.' },
    not: { outcome: 'dissonance', why: 'She is not giving a reason why something she did is fine. She is giving money already spent as the reason to spend more.' } },

  { id: 'ret-brewery', use: 'return', tier: 'varied', setting: 'work', topic: 'an alcohol-free beer',
    text: "A small brewery has spent a year and most of its savings developing an alcohol-free beer. It sells four cases a week, and each one loses money. 'A year of recipes and a new tank,' the brewer says. 'We keep going until it pays that back.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { D1: 'the brewer says', R1: 'A year of recipes and a new tank' },
    reason: { D1: 'One person is giving a reason for a choice of their own: {cue:D1}.',
              R1: 'The reason the brewer gives for carrying on is {cue:R1}: what has already gone in. Each case loses money, so carrying on cannot pay it back, and that fact about the next step plays no part.' },
    not: { outcome: 'fair', why: '{o:fair} would have the brewer going where the sales figures point. They are in the case, and the reasoning never touches them.' } },

  /* ---------- Confirmation bias ---------- */
  { id: 'ret-bakery', use: 'return', tier: 'varied', setting: 'community', topic: 'a bakery under new owners',
    text: "Edu is sure his local bakery has gone downhill since it changed owners. A dry croissant on Tuesday: 'Told you.' An excellent loaf on Friday: 'They must have had the old baker in.'",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { D1: 'Edu is sure his local bakery has gone downhill', R1: 'They must have had the old baker in' },
    reason: { D1: 'One person is defending a view of his own: {cue:D1}.',
              R1: 'The croissant, which is evidence for his view, goes in as proof. The loaf, which is evidence against it, is explained away: {cue:R1}. One side gets a harder test.' },
    not: { outcome: 'fair', why: '{o:fair} would have the excellent loaf count as much as the dry croissant. It is explained away, and his view stays where it was.' } },

  { id: 'ret-clinic', use: 'return', tier: 'varied', setting: 'health', topic: 'a clinic booking system',
    text: "Bo has said since January that the clinic's new booking system makes patients wait longer. When a patient complains about a wait, Bo writes it in the incident log. When the monthly figures show the average wait has fallen by ten minutes, he says the figures 'don't capture what it's really like'.",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { D1: 'Bo has said since January', R1: "don't capture what it's really like" },
    reason: { D1: 'One person is defending a view of his own: {cue:D1}.',
              R1: 'A complaint, which is evidence for his view, is written down as it stands. The monthly figures, which are evidence against it, are questioned: he says they {cue:R1}. One side gets a harder test.' },
    not: { outcome: 'motivated', why: 'Bo has not set out on a search to settle a choice. Complaints and figures turn up, and he treats them differently.' } },

  { id: 'ret-trainers', use: 'return', tier: 'varied', setting: 'money', topic: 'a favorite brand of sneakers',
    text: "Cal has bought the same brand of sneakers for twenty years and says nothing else lasts. He reads two reviews of the new model. Of the one-star review he says, 'Some people will complain about anything.' Of the five-star review he says, 'Exactly what I've always said.'",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { D1: 'says nothing else lasts', R1: 'Some people will complain about anything' },
    reason: { D1: 'One person is defending a view of his own: he {cue:D1}.',
              R1: 'The five-star review, which is evidence for his view, is taken as it stands. The one-star review, which is evidence against it, is put down to the reviewer: {cue:R1}. One side gets a harder test.' },
    not: { outcome: 'dissonance', why: 'Cal is not giving a reason why something he did is fine. He is judging two reviews, and only one of them is questioned.' } }
]);
