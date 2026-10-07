// Psychology, Unit Three: cases shown inside cards, part four: the check on the key's question and the two worked cases.
// A worked case carries marked words for every question on its route, the first question of the key included.
// Its reasons are on the worked card, so there is one copy.

FC.cases('psychology', 'u3', [

  { id: 'tq-essay', use: 'check', tier: 'varied', setting: 'learning', topic: 'a seminar and an essay',
    text: "In a seminar, Gus tells the professor that Hira 'copies her essays from the internet'. The plagiarism checker flagged Gus's own last essay, and it has not flagged any of Hira's. Nobody has asked Gus about his essay.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { T1: ["Gus tells the professor that Hira 'copies her essays from the internet'", "The plagiarism checker flagged Gus's own last essay, and it has not flagged any of Hira's."] },
    reason: { T1: 'Gus accuses Hira, but the checker flagged Gus: {cue:T1}. Nobody has raised his own essay with him, so he is not answering anything.' },
    not: { outcome: 'darvo', why: 'Nobody has asked Gus about his essay, so he is not answering anything. The accusation is where the story starts.' } },

  { id: 'w-booking', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a venue booked twice', name: 'The double booking',
    text: "Pia, in the accounts office, tells Kai that the invoice for his team's away day shows the venue booked twice, and she has the booking emails. 'I never booked it twice,' Kai says. 'You've got that wrong. You're always muddled about dates, and you lose things all the time. I'm sick of being picked on in this office.' This is the first time the booking has come up.",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: "Pia, in the accounts office, tells Kai that the invoice for his team's away day shows the venue booked twice",
            T1: ["she has the booking emails", "'I never booked it twice,' Kai says. 'You've got that wrong. You're always muddled about dates, and you lose things all the time. I'm sick of being picked on in this office.'", 'This is the first time the booking has come up.'] } }
]);
