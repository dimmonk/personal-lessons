// Statistical Claims, Unit Five: fresh cases kept back for later days (second file: Simpson's paradox). Field guide: see u5.cases-return-1.js.

FC.cases('stats', 'u5', [

  { id: 'ret-simp-1', use: 'return', tier: 'varied', setting: 'health', topic: 'two dentists and cavities',
    text: "A dental review ranks two dentists: 'Dr. Cho: 85 of 100 patients had no new cavity at the next visit. Dr. Park: 70 of 100.' It calls Cho the better dentist. Cho's patients are mostly children with new teeth. Park's patients are mostly older adults with many fillings.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: 'Dr. Cho: 85 of 100 patients had no new cavity at the next visit. Dr. Park: 70 of 100', C1: "Cho's patients are mostly children with new teeth. Park's patients are mostly older adults with many fillings" },
    reason: { S1: 'The review ranks two totals side by side: {cue:S1}. It leaves out what you would need beside them.',
              C1: 'The two totals are made of different mixes of patients: {cue:C1}. Children with new teeth are far less likely to get a new cavity under any dentist. You would need each total split by age.' },
    not: { outcome: 'relrisk', why: 'Both counts are given, so nothing about how many is missing. What is missing is what each total is made of.' } },

  { id: 'ret-simp-2', use: 'return', tier: 'varied', setting: 'learning', topic: 'two teachers and test gains',
    text: "A school board ranks two teachers by how many students raised their test score: 'Mr. Vega: 60 of 100. Ms. Boyd: 78 of 100.' It calls Ms. Boyd the stronger teacher. Mr. Vega teaches the advanced class, whose students already score near the top and have little room to rise. Ms. Boyd teaches the beginners' class, where gains come easily.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: 'Mr. Vega: 60 of 100. Ms. Boyd: 78 of 100', C1: "Mr. Vega teaches the advanced class, whose students already score near the top and have little room to rise. Ms. Boyd teaches the beginners' class, where gains come easily" },
    reason: { S1: 'The board ranks two totals side by side: {cue:S1}. It leaves out what you would need beside them.',
              C1: 'The two totals are made of different mixes: {cue:C1}. Students near the top of the scale have little room to rise under any teacher. You would need each total split by where the students started.' },
    not: { outcome: 'comp_ok', why: 'Two teachers are set side by side with the counts given, as in a comparison that holds. But the case shows that their classes are very different, so the totals are not alike.' } },

  { id: 'ret-simp-3', use: 'return', tier: 'varied', setting: 'money', topic: 'two insurers and claims paid',
    text: "A review ranks two car insurers by how many claims each paid in full within a month: 'Insurer One: 90 of 100. Insurer Two: 74 of 100.' It tells drivers to choose One. Two insures many delivery vans, whose claims are often disputed. One insures mostly drivers who use their cars on weekends.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: 'Insurer One: 90 of 100. Insurer Two: 74 of 100', C1: 'Two insures many delivery vans, whose claims are often disputed. One insures mostly drivers who use their cars on weekends' },
    reason: { S1: 'The review ranks two totals side by side: {cue:S1}. It leaves out what you would need beside them.',
              C1: 'The two totals are made of different mixes of claims: {cue:C1}. Disputed claims take longer to pay under any insurer. You would need each total split by the kind of driver.' },
    not: { outcome: 'baserate', why: 'No test is read here. Two totals are set side by side, and what each is made of is what is missing.' } },

  { id: 'ret-simp-4', use: 'return', tier: 'varied', setting: 'community', topic: 'two libraries and book requests',
    text: "A city ranks two libraries by the share of book requests filled within a week: 'Central: 66 of 100. Branch: 91 of 100.' It calls Branch the better-run library. Central handles mostly rare and out-of-print requests. Branch handles mostly new bestsellers, which it keeps many copies of.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: 'Central: 66 of 100. Branch: 91 of 100', C1: 'Central handles mostly rare and out-of-print requests. Branch handles mostly new bestsellers, which it keeps many copies of' },
    reason: { S1: 'The city ranks two totals side by side: {cue:S1}. It leaves out what you would need beside them.',
              C1: 'The two totals are made of different mixes of requests: {cue:C1}. Rare books are hard to fill whoever is running the library. You would need each total split into rare and common requests.' },
    not: { outcome: 'relrisk', why: 'Both counts are given, so nothing about how many is missing. What is missing is what each total is made of.' } }
]);
