// Statistical Claims, Unit Five: cases shown inside cards, part two: Base rate fallacy, and the pairs that put it beside the names around it.

FC.cases('stats', 'u5', [

  /* ---------- Base rate fallacy ---------- */
  { id: 'base-poster', use: 'teach', tier: 'clean', setting: 'health', topic: 'a skin test poster', name: 'The skin test poster',
    text: "A clinic's poster says: 'Our new test for a skin condition is 99% accurate. If your test says yes, you almost certainly have it.' About 1 person in every 100 has the condition. The poster does not mention that.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { C1: 'If your test says yes, you almost certainly have it' } },

  { id: 'base-fraud', use: 'teach', tier: 'clean', setting: 'money', topic: 'a bank fraud alarm', name: 'The fraud alarm',
    text: "A bank manager says: 'Our alarm is 98% accurate, so when it goes off on your card payment, it is fraud 98% of the time.' Only 1 card payment in every 1,000 is fraud.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { C1: 'when it goes off on your card payment, it is fraud 98% of the time' },
    segments: [
      { text: 'A bank manager says', note: 'That tells you who is speaking. It is not the reading of the alarm.' },
      { text: 'Our alarm is 98% accurate', note: 'That is how often the alarm is right. The words asked for are the ones that read that figure as the chance a flagged payment is fraud.' },
      { text: 'when it goes off on your card payment, it is fraud 98% of the time' },
      { text: 'Only 1 card payment in every 1,000 is fraud', note: 'That is how common the thing is. It is what the reading leaves out, and not the reading itself.' }
    ] },

  { id: 'base-gate', use: 'check', tier: 'clean', setting: 'work', topic: 'a factory gate scanner', name: 'The factory gate',
    text: "A factory's gate scanner is right 95 times in 100, whether or not a person is carrying something banned. About 1 person in 1,000 who comes through the gate is. A guard says: 'The scanner beeped, so he is carrying something.'",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { C1: 'The scanner beeped, so he is carrying something' },
    reason: { C1: 'The guard reads {cue:C1}, as if a beep were right 95 times in 100. Take 100,000 people through the gate. About 100 carry something, and the scanner beeps for 95 of them. The other 99,900 carry nothing, and the scanner beeps for 5 in every 100 of them: 4,995 people. That is 95 + 4,995 = 5,090 beeps, and only 95 of them are right. A beep here means about 2 chances in 100.' } },

  /* ---------- Base rate fallacy, beside A fair comparison: the same home test ---------- */
  { id: 'la3-test-acc', use: 'teach', tier: 'varied', setting: 'home', topic: 'a home test for a fever', name: 'The home test claim',
    text: "A city health office says: 'Our home test for Rudd fever is 98% accurate, so if yours says yes, you very likely have it.' About 1 person in 200 has Rudd fever.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { C1: 'if yours says yes, you very likely have it' } },

  { id: 'la3-test-counts', use: 'teach', tier: 'varied', setting: 'home', topic: 'a home test, the yeses and noes counted', name: 'The home test counts',
    text: "The same health office reports on 10,000 people who took the home test for Rudd fever: 'People who test yes are far likelier to have Rudd fever than people who test no. Of the 248 who tested yes, 49 had it. Of the 9,752 who tested no, 1 had it.' Everyone took the same test in the same month.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { H1: 'Of the 248 who tested yes, 49 had it. Of the 9,752 who tested no, 1 had it.' } },

  /* ---------- Base rate fallacy, beside Simpson's paradox ---------- */
  { id: 'la4-camera', use: 'teach', tier: 'varied', setting: 'community', topic: 'a stadium face camera', name: 'The stadium camera',
    text: "A stadium's new face camera flags visitors who are on a banned list. The maker says: 'It is 99% accurate, so a person it flags is almost certainly banned.' About 1 visitor in 20,000 is on the list.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { C1: 'a person it flags is almost certainly banned' } },

  { id: 'la4-teams', use: 'teach', tier: 'varied', setting: 'work', topic: 'two sales teams, the mix hidden', name: 'The two sales teams',
    text: "A company's sales report ranks two teams: 'Team Alpha closed 40 of its 100 deals. Team Bravo closed 55 of its 100 deals.' The report calls Bravo the better team. Alpha sells mostly to large companies, whose deals are slow and hard to close. Bravo sells mostly to small shops, whose deals are quick and easy.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { C1: 'Alpha sells mostly to large companies, whose deals are slow and hard to close' } },

  /* ---------- A percentage without the numbers, beside Simpson's paradox: the same ranking of surgeons ---------- */
  { id: 'la5-surgeon-pct', use: 'teach', tier: 'varied', setting: 'health', topic: 'a surgeon ranking, a percentage only', name: 'The surgeon percentage',
    text: "A hospital ranking says: 'Patients of Dr. Okafor are 20% more likely to survive surgery than patients of Dr. Lind.' It gives no counts.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { C1: 'Patients of Dr. Okafor are 20% more likely to survive surgery than patients of Dr. Lind' } },

  { id: 'la5-surgeon-counts', use: 'teach', tier: 'varied', setting: 'health', topic: 'a surgeon ranking, the counts and the mix', name: 'The surgeon counts',
    text: "A hospital ranking says: 'Dr. Okafor: 90 of 100 patients survived surgery. Dr. Lind: 75 of 100 patients survived.' Dr. Lind takes the patients who are too ill for anyone else to operate on. Dr. Okafor mostly does routine operations.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { C1: 'Dr. Lind takes the patients who are too ill for anyone else to operate on' } }
]);
