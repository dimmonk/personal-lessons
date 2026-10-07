// Psychology, Unit One: drill cases, second stage (the key's first question on mixed cases: clean, then varied,
// then cases whose story misleads). Field guide: see u1.cases-drill-1.js.
// echo names a teaching case of a DIFFERENT kind whose story this one is built to bring back, so that the
// second look ("does it look like a case you know?") is practiced where the likeness points the wrong way.
// also lists an answer the case shows as well as its own, which loses to its own by a tie-break in the key.
// wouldChange says what would make it a different answer; it is shown after the feedback.

FC.cases('psychology', 'u1', [

  { id: 'g-allotment', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'giving up a community garden plot',
    text: "Wendy is giving up her community garden plot. 'My knees can't take the digging anymore,' she tells the committee, 'and I would rather stop while I still enjoy it.'",
    route: { D1: ['reasoning'] },
    cues: { D1: ["My knees can't take the digging anymore", 'I would rather stop while I still enjoy it'] },
    reason: { D1: 'One person is giving her reasons for a choice of her own: {cue:D1}. The committee only listens.' },
    not: { outcome: 'none', why: 'Wendy is not only feeling something. She has made a choice and she says why, so there is reasoning to look at.' } },

  { id: 'g-inheritance', use: 'drill', tier: 'clean', setting: 'money', topic: 'a share of an inheritance',
    text: "After their mother's will was read, Dominic told his sister Anya that she had always been the favorite, and that if she had any decency she would give him her share. Anya has not slept properly since, and is thinking of handing it over.",
    route: { D1: ['tactic'] },
    cues: { D1: 'Dominic told his sister Anya that she had always been the favorite, and that if she had any decency she would give him her share' },
    reason: { D1: 'One person is saying something to another, about her: {cue:D1}. The story shows where it leaves Anya: sleepless, and close to giving up her share.' },
    not: { outcome: 'reasoning', why: 'Dominic wants the money, but he is not setting out reasons for a view or a choice of his own. What he says is about Anya, what she has always been and what she would do if she were decent, and it is said to her.' },
    wouldChange: 'If Dominic had said all this to a friend, as his reasons for thinking the will unfair, and Anya had never heard it, the story would be {a:D1.reasoning}.' },

  { id: 'g-scan', use: 'drill', tier: 'clean', setting: 'health', topic: 'waiting for a scan result',
    text: "While she waited ten days for the result of a scan, Beatriz hardly spoke at home and woke at four every morning. The result was clear, and within a week she was sleeping through the night.",
    route: { D1: ['none'] },
    cues: { D1: 'While she waited ten days for the result of a scan' },
    reason: { D1: 'It is one short stretch, with a cause: {cue:D1}. When the cause goes, the behavior goes too.' },
    not: { outcome: 'tactic', why: 'Her family will have felt the silence, but nothing is said or done to any one of them about them. It is how she was with everyone for ten days.' } },

  { id: 'g-landlord', use: 'drill', tier: 'clean', setting: 'money', topic: 'a landlord and repairs',
    text: "Tenants in three different towns, over twenty years, tell the same story about Mr. Hale: friendly at the showing, then months of unanswered calls about repairs. His former business partner and his own brother describe the same man.",
    route: { D1: ['pattern'] },
    cues: { D1: ['Tenants in three different towns, over twenty years, tell the same story', 'His former business partner and his own brother describe the same man'] },
    reason: { D1: 'The story is a long view of one man: {cue:D1}. Twenty years, three towns, and tenants, a partner and a brother all describing the same thing.' },
    not: { outcome: 'tactic', why: 'Ignoring a tenant’s calls is something done to another person, but the story does not stay with any one tenant. It follows Mr. Hale through twenty years and three towns.' } },

  { id: 'g-wedding', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a toast at a wedding', echo: 'g-thirty',
    text: "At her cousin's wedding Ottilie gave a ten-minute toast that was mostly about her own career, and then took the microphone again to sing. 'Typical show-off,' said a guest at the next table, who was meeting her for the first time.",
    route: { D1: ['none'] },
    cues: { D1: ["At her cousin's wedding", 'who was meeting her for the first time'] },
    reason: { D1: 'The story shows one evening, in one place: {cue:D1}. "Typical" comes from someone who has known her for that one evening, so it adds no years.' },
    not: { outcome: 'pattern', why: 'There is a lot of the same behavior, but it is all one evening. The story shows no other year, no other place, and nobody who has known her for longer than a few hours.' } },

  { id: 'g-waitress', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'soup sent back twice', echo: 'g-deadline',
    also: ['tactic'],
    text: "Last night Victor sent his soup back twice and told the waitress she was too stupid for the job. His daughter says he has spoken to waiters, store staff and nurses like that since she was a child, and both his former wives say the same of how he spoke to them at home.",
    route: { D1: ['pattern'] },
    cues: { D1: ['His daughter says he has spoken to waiters, store staff and nurses like that since she was a child', 'both his former wives say the same of how he spoke to them at home'] },
    reason: { D1: 'The story opens on one evening, and then goes on to a long view of one man: {cue:D1}. Decades, restaurants, stores, hospitals and two homes, with the same thing in each.' },
    not: { outcome: 'tactic', why: 'What Victor said to the waitress, on its own, would be {a:D1.tactic}. But the story goes on to show the same thing for decades, and the bigger claim wins.' },
    wouldChange: 'If the story ended after its first sentence, it would be {a:D1.tactic}: one evening, and something said to one person about her.' },

  { id: 'g-handover', use: 'drill', tier: 'misleading', setting: 'home', topic: 'late for a handover', echo: 'g-birthday-brother',
    also: ['reasoning'],
    text: "Simone was forty minutes late to collect her son from his father. 'I wouldn't be late if you didn't make every handover a battle,' she told him at the door. 'You stress me so much I can't think straight.' He apologized, and offered to drive the boy over himself next time.",
    route: { D1: ['tactic'] },
    cues: { D1: ["I wouldn't be late if you didn't make every handover a battle", "You stress me so much I can't think straight"] },
    reason: { D1: 'Simone gives a reason for being late, and the reason is about the boy’s father and is said to him: {cue:D1}. The story shows where it leaves him: apologizing, and offering to do the driving.' },
    not: { outcome: 'reasoning', why: 'On its own, an excuse for being late would be {a:D1.reasoning}. But her excuse is aimed at the boy’s father and said to him, so it is {a:D1.tactic}.' } },

  { id: 'g-savings', use: 'drill', tier: 'misleading', setting: 'money', topic: 'a thirty-year-old savings account', echo: 'g-moira',
    text: "For thirty years Edwin has paid into the same savings account. This month his daughter showed him that the interest it pays is lower than the rise in prices, so his money buys a little less each year. 'I have had that account since 1994,' he said. 'It has never let me down, and I am not changing now.'",
    route: { D1: ['reasoning'] },
    cues: { D1: 'It has never let me down, and I am not changing now' },
    reason: { D1: 'One person is defending a choice of his own, and giving his reason: {cue:D1}. His daughter brings a fact, and the story is about what he does with it.' },
    not: { outcome: 'pattern', why: 'Thirty years is how long he has had the account, not how long he has been a certain way. The story shows one choice, defended once.' } }
]);
