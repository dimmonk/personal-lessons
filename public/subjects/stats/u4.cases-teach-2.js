// Statistical Claims, Unit Four: cases shown inside cards, second part (more looking, and the pair that tells a new tool from more looking).

FC.cases('stats', 'u4', [

  { id: 'meas-essays', use: 'check', tier: 'clean', setting: 'learning', topic: 'a university and the essays it checks for copying', name: 'The essay checks',
    text: "A university's integrity office reports: 'Copied essays found this year: 90, up from 30 last year. Cheating is on the rise.' Last year staff checked only the 600 essays that graders had flagged as looking odd. This year, with extra staff hours, they checked all 3,000 essays handed in, by the same method. An essay counts as copied by the same standard in both years. That is 5 found in every 100 checked last year, and 3 in every 100 this year.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { M1: "Last year staff checked only the 600 essays that graders had flagged as looking odd. This year, with extra staff hours, they checked all 3,000 essays handed in, by the same method" },
    reason: { M1: 'The office checked five times as many essays this year: {cue:M1}. The copied essays found rose from 30 to 90, but the share found among those checked fell from 5 in 100 to 3 in 100.' } },

  { id: 'meas-birds-more', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a lake bird survey with many more volunteers', name: 'The lake bird survey with more searchers',
    text: "A nature club reports: 'The number of bird species recorded at Lake Ellis rose from 12 to 31 in two years. More kinds of bird are living there.' In the first year four volunteers searched the shore for 10 hours a month in all. In the second year fifteen volunteers searched it for 60 hours a month in all.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "In the first year four volunteers searched the shore for 10 hours a month in all. In the second year fifteen volunteers searched it for 60 hours a month in all",
            M1: "In the first year four volunteers searched the shore for 10 hours a month in all. In the second year fifteen volunteers searched it for 60 hours a month in all" } },

  { id: 'meas-birds-same', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a lake bird survey with unchanged searchers', name: 'The lake bird survey with the same searchers',
    text: "A nature club reports: 'The number of bird species recorded at Lake Ellis rose from 12 to 15 in two years.' The same four volunteers searched the same stretch of shore for 10 hours a month in all, in both years, on the same days of the month, and a species counts when it is seen by the same standard.",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "The same four volunteers searched the same stretch of shore for 10 hours a month in all, in both years",
            H1: "rose from 12 to 15 in two years" } },

  { id: 'meas-lab-analyzer', use: 'teach', tier: 'clean', setting: 'health', topic: 'a lab that replaced its blood analyzer', name: 'The lab’s new analyzer',
    text: "A clinic's lab reports: 'Vitamin D deficiency has tripled: 20 of the 1,000 people tested last year were found deficient, and 60 of the 1,000 tested this year.' In March the lab replaced its blood analyzer with a new model. On 50 blood samples tested on both, the new analyzer read about 4 points lower than the old one on each. A person is called deficient at a reading below 20 on either.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "In March the lab replaced its blood analyzer with a new model",
            M1: "In March the lab replaced its blood analyzer with a new model" } },

  { id: 'meas-lab-more', use: 'teach', tier: 'clean', setting: 'health', topic: 'a lab that tested thousands more people', name: 'The lab’s wider offer',
    text: "A clinic's lab reports: 'Vitamin D deficiency has tripled: 20 people were found deficient last year, and 60 this year.' The lab has used the same blood analyzer for five years, and a person is called deficient at a reading below 20. Last year 1,000 people were tested. This year, after the clinic began offering the test to every patient over 40, 3,000 were tested. That is 2 found in every 100 tested last year, and 2 in every 100 this year.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "Last year 1,000 people were tested. This year, after the clinic began offering the test to every patient over 40, 3,000 were tested",
            M1: "Last year 1,000 people were tested. This year, after the clinic began offering the test to every patient over 40, 3,000 were tested" } }
]);
