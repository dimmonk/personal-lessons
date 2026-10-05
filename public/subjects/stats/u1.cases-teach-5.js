// Statistical Claims, Unit One: the baseline check (lesson standard E21). Six claims asked once, before the subject's first unit, as
// "real or not, and why?": three in which nothing goes wrong and three that go wrong in a different part. They are in no card and no drill.
// Each is an ordinary case with a route, marked words and a reason for the first question; the reason is shown only when the learner
// finishes the unit, beside what they said. They are listed in subject.baseline (the one edit this unit makes to subject.js).
// No case here is used by a card, so none of them may appear in the drill (V32).

FC.cases('stats', 'u1', [

  { id: 'gate-b-survey', use: 'baseline', tier: 'clean', setting: 'community', topic: 'a council survey of bus-line use',
    text: "A city council surveyed 1,200 residents whose addresses were drawn by lottery from the full list of homes in the city. It sent a reminder, and then a visitor, to everyone who had not replied, and 1,100 answered. Sixty-two percent said they would use a new bus line. The council says: 'About six in ten residents would use the new bus line.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drawn by lottery from the full list of homes in the city. It sent a reminder, and then a visitor, to everyone who had not replied, and 1,100 answered' },
    reason: { S1: 'Each part holds. Nobody was favoured in who was asked, and almost everyone asked answered: {cue:S1}. The claim gives a figure about one group at one time and says no more than the figure can carry.' } },

  { id: 'gate-b-clinics', use: 'baseline', tier: 'clean', setting: 'health', topic: 'two clinics and waits of more than an hour',
    text: "A health department compared two clinics. Both clinics start the clock when a patient checks in and stop it when the patient sees a doctor, they serve the same neighborhoods, and the department counted every visit last year. Clinic A had 2,000 visits, and 600 waited more than an hour. Clinic B had 2,100 visits, and 840 waited more than an hour. The department says: 'Patients at Clinic B wait more than an hour more often: 40 in 100 against 30.'",
    route: { S1: ['holds'] },
    cues: { S1: 'Both clinics start the clock when a patient checks in and stop it when the patient sees a doctor, they serve the same neighborhoods, and the department counted every visit last year' },
    reason: { S1: 'Each part holds. {cue:S1}. The numbers are given, the two clinics are alike and counted the same way, and the claim says only which has the longer waits. It does not say why.' } },

  { id: 'gate-b-scheme', use: 'baseline', tier: 'clean', setting: 'learning', topic: 'a reading scheme and pupils chosen by lots',
    text: "A school drew lots to choose 60 of its 120 pupils for a new reading scheme, and the other 60 kept their usual lessons. All 120 sat the same test at the end of the term, and the scheme group averaged 12 points higher. The school says: 'The reading scheme raised scores.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drew lots to choose 60 of its 120 pupils for a new reading scheme' },
    reason: { S1: 'Each part holds, and the claim says one thing caused another, so the last part matters most. Nobody chose their group: {cue:S1}. That leaves no other likely way for the two groups to differ, so the case offers no other explanation for the result.' } },

  { id: 'gate-b-poll', use: 'baseline', tier: 'clean', setting: 'community', topic: 'a website poll about cars on Main Street',
    text: "A local news site put a poll on its home page: 'Should the town ban cars from Main Street?' Of the 3,400 people who clicked an answer, 81% said yes. The site's headline says: 'Town backs car ban, 4 in 5 say yes.'",
    route: { S1: ['counted'] },
    cues: { S1: 'Of the 3,400 people who clicked an answer' },
    reason: { S1: 'The headline speaks for the whole town, but the figure is worked out from the people who chose to click on a home page: {cue:S1}. Nobody was picked, and people with a strong view are likelier to click.' } },

  { id: 'gate-b-screening', use: 'baseline', tier: 'clean', setting: 'health', topic: 'a clinic and diagnoses after a screening day',
    text: "A clinic reports: 'Diagnoses of a skin condition doubled in two years.' Two years ago the clinic began offering a free screening day to everyone in town, and it now checks about six times as many people as before.",
    route: { S1: ['measure'] },
    cues: { S1: 'began offering a free screening day to everyone in town, and it now checks about six times as many people as before' },
    reason: { S1: 'The figure is a count of diagnoses, and what changed is how many people are looked at: {cue:S1}. Six times as many people checked can give twice as many diagnoses with less of the condition in town, not more.' } },

  { id: 'gate-b-dogs', use: 'baseline', tier: 'clean', setting: 'home', topic: 'a pet magazine and dog owners who live longer',
    text: "A pet magazine reports: 'People who own dogs live longer than people who do not, so get a dog.' It compared 5,000 dog owners with 5,000 others, and the owners lived two years longer on average. The dog owners in the study were mostly people who walked every day and could afford the vet.",
    route: { S1: ['cause'] },
    cues: { S1: 'People who own dogs live longer than people who do not, so get a dog' },
    reason: { S1: 'The claim is a step past the figures: {cue:S1}. It says that owning a dog made people live longer, and the case shows another way to explain the same result: the owners were already people who walked every day and could afford the vet.' } }
]);
