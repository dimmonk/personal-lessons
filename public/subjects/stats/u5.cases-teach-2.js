// Statistical Claims, Unit Five: cases shown inside cards, part two: Base rate fallacy, and its look-alike beside a claim that holds.

FC.cases('stats', 'u5', [

  /* ---------- Base rate fallacy ---------- */
  { id: 'base-poster', use: 'teach', tier: 'clean', setting: 'health', topic: 'a skin test poster', name: 'The skin test poster',
    text: "A clinic's poster says: 'Our new test for a skin condition is 99% accurate. If your test says yes, you almost certainly have it.' About 1 person in every 100 has the condition. The poster does not mention that.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { C1: 'If your test says yes, you almost certainly have it' } },

  { id: 'base-gate', use: 'check', tier: 'clean', setting: 'work', topic: 'a factory gate scanner', name: 'The factory gate',
    text: "A factory's gate scanner is right 95 times in 100, whether or not a person is carrying something banned. About 1 person in 1,000 who comes through the gate is. A guard says: 'The scanner beeped, so he is carrying something.'",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { C1: 'The scanner beeped, so he is carrying something' },
    reason: { C1: 'The guard reads {cue:C1}, as if a beep were right 95 times in 100. Take 100,000 people through the entrance. About 100 carry something, and the scanner beeps for 95 of them. The other 99,900 carry nothing, and the scanner beeps for 5 in every 100 of them: 4,995 people. That is 95 + 4,995 = 5,090 beeps, and only 95 of them are right. A beep here means about 2 chances in 100.' } },

  /* ---------- Base rate fallacy, beside A fair comparison: the same home test ---------- */
  { id: 'la3-test-acc', use: 'teach', tier: 'varied', setting: 'home', topic: 'a home test for a fever', name: 'The home test claim',
    text: "A city health office says: 'Our home test for Rudd fever is 98% accurate, so if yours says yes, you very likely have it.' About 1 person in 200 has Rudd fever.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { C1: 'if yours says yes, you very likely have it' } },

  { id: 'la3-test-counts', use: 'teach', tier: 'varied', setting: 'home', topic: 'a home test, the yeses and noes counted', name: 'The home test counts',
    text: "The same health office reports on 10,000 people who took the home test for Rudd fever: 'People who test yes are far likelier to have Rudd fever than people who test no. Of the 248 who tested yes, 49 had it. Of the 9,752 who tested no, 1 had it.' Everyone took the same test in the same month.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { H1: 'Of the 248 who tested yes, 49 had it. Of the 9,752 who tested no, 1 had it.' } }
]);
