// Statistical Claims, Unit Six: drill cases for stage four, varied and misleading (the most noticeable thing in the story is not what decides it).
// echo names a teaching case of a DIFFERENT name whose story this one is built to bring back, so that the second look ("does it look like a case
// you know?") is practised where the likeness points the wrong way. also lists an answer the case shows as well as its own, which loses to its own
// by a tie-break in the key. Field guide: see u1.cases-drill-1.js.

FC.cases('stats', 'u6', [

  /* ---------- Misleading ---------- */
  { id: 'k-r-wellness', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a wellness program that employees volunteered for', echo: 'k-shake',
    text: "A company says: 'Our wellness program works. The 120 employees who volunteered for it lost an average of 7 pounds in a year.' The company has no weight figures for any of its other 880 employees.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our wellness program works', K1: 'The company has no weight figures for any of its other 880 employees' },
    reason: { S1: 'The figures are given, and the company says {cue:S1}. That is a claim of cause.',
              K1: 'The most noticeable thing is that the employees volunteered, which can bring to mind two groups that put themselves where they are. But there are not two groups: {cue:K1}. The only figures are for the volunteers, before and after, so nothing shows what the same employees would have lost with no program.' },
    not: { outcome: 'confound', why: 'Volunteering does not make two groups. {o:confound} needs a second group, people who did not do the thing, set beside the first, with something else differing between them. Here the other 880 are not counted at all.' } },

  { id: 'k-r-patrol', use: 'drill', tier: 'misleading', setting: 'community', topic: 'patrols on the blocks with the most burglaries', echo: 'k-sleepapp', also: ['anyway'],
    text: "A police department picks the 8 city blocks with the most burglaries last year and puts a patrol officer on each. This year burglaries on those 8 blocks are down from 64 to 41. 'Patrols cut burglaries by more than a third,' the chief says. The department has no figures for any block without a patrol.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'Patrols cut burglaries by more than a third', K1: 'picks the 8 city blocks with the most burglaries last year' },
    reason: { S1: 'The numbers are given, and the chief says {cue:S1}. That is a claim of cause.',
              K1: 'The most noticeable thing is the last sentence: no block went without a patrol. That is true, and it is the answer {a:K1.anyway}. But look at how the blocks were picked: the department {cue:K1}. A count of burglaries is how risky a block is plus luck, so the worst 8 are partly the unluckiest 8, and their counts drift back with no patrols. When a case shows both, the answer is {a:K1.extreme}.' },
    not: { outcome: 'nocontrol', why: 'It is true that no block went without a patrol, and the case shows that clearly. But the eight blocks were picked because they were at their worst, and the more exact answer is the one to give.' } },

  { id: 'k-r-sauna', use: 'drill', tier: 'misleading', setting: 'health', topic: 'a gym sauna installed in March and colds', echo: 'k-cameras',
    text: "A gym says: 'Since we installed the sauna in March, members who use it have had 30% fewer colds, so the sauna keeps colds away.' The 150 members who use it averaged 1.4 colds in the following year, and the 350 who do not averaged 2.0. The gym’s check-in records show that 120 of the 150 sauna users work out five or more days a week, against 70 of the 350 others.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so the sauna keeps colds away', K1: 'The gym’s check-in records show that 120 of the 150 sauna users work out five or more days a week, against 70 of the 350 others' },
    reason: { S1: 'The numbers are given for both groups, and the gym says {cue:S1}. That is a claim of cause.',
              K1: 'The most noticeable thing is the date: the sauna was installed in March, which can bring to mind a question of what came first. But nothing in the case puts colds before the sauna. What it shows is something else that differs between the groups: {cue:K1}. Members who work out most days differ from the rest in more than the sauna.' },
    not: { outcome: 'reverse', why: 'Nothing shows that fewer colds came first and led members to use the sauna. The installation date only says when the sauna became available.' } },

  { id: 'k-r-fourday', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a shorter work week tried by teams that volunteered, decided by a draw', echo: 'k-quit-chose',
    text: "A company wanted to know whether a four-day week raises output. 80 teams volunteered to try it, and the company drew 40 of them by lottery to work four days for six months while the other 40 stayed on five days. It counted finished projects per team in the same way for all 80: 9.1 for the four-day teams and 7.4 for the others. 'A four-day week raises output,' the company says.",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: 'the company drew 40 of them by lottery to work four days for six months', H1: 'A four-day week raises output' },
    reason: { S1: 'The most noticeable thing is that the teams volunteered, which can bring to mind people who put themselves in a group. But all 80 volunteered, and then {cue:S1}. A lottery formed the groups from the same volunteers, so nothing else is likelier to be in one group than the other. All 80 are counted in the same way, and the numbers are given. Nothing is wrong in any part.',
              H1: 'The company says {cue:H1}, and the answer to what the figures show is {a:H1.causes}, from groups formed by a draw.' },
    not: { outcome: 'confound', why: 'Volunteering would matter if volunteers were set beside people who did not volunteer. Here every team volunteered, and a draw decided who tried the four-day week, so nothing else differs between the groups.' } }
]);
