// Statistical Claims, Unit One, part five: the fifth answer (nothing goes wrong), the wrong idea that people bring in
// its place, and the four look-alike pairs that set a sound claim beside the same claim with something wrong in it.
// This answer is taught as a family like any other (lesson standard K2.9, P26): it has its own meet, again, portrait and check,
// and it appears in a look-alike pair with each of the four answers that say something goes wrong.

FC.cards('stats', 'u1', [

  /* ---------- The fifth answer: nothing goes wrong ---------- */
  { id: 'meet-holds', kind: 'meet', family: 'holds',
    link: 'Four answers say that a part of a claim goes wrong. The fifth is what is left when you have put the question to every part, in order, and none of them fits.',
    case: 'gate-poll', mark: 'S1',
    strip: [
      'There is a figure: 31% of the 1,000 adults who answered said they smoke.',
      'Who is in it: adults whose phone numbers were drawn by lottery from the full list for the county, and each number was tried up to six times, so almost everyone drawn was reached.',
      'What it counts: whether a person says they smoke, asked once, the same way for everyone. Nothing about it changed, and nobody was paid or judged on the answer.',
      'What it is set beside: nothing. The claim gives a figure about one group at one time. It does not say the figure rose, fell or differs from anywhere else.',
      'What the claim says caused what: nothing. The claim says how many smoke, and not why.'
    ],
    explain: [
      'This answer needs no new idea. It is what you reach when the other four have each been put to the claim and none has found anything. The claim says how many adults in the county smoke, so go through its parts in the order.',
      'The first part is who or what is in the figure. The office took a list of every phone number in the county and drew 1,100 of them by lottery, so nobody was favoured in being picked. It then tried each number up to six times and reached 1,000. Few were missed, and the ones missed were not missed for a reason that has anything to do with smoking. That is a fair picture of the adults of the county, and there are enough people that one or two more or fewer would not move the figure.',
      'The second part is what the figure counts: whether a person says they smoke, asked in the same way of everyone. It did not change partway through, and nobody was paid or judged on the answer. The third part is what the figure is set beside: nothing, because the claim does not compare. And the fourth part is what the claim says caused what: nothing, because it does not say why.',
      'No part goes wrong, so the answer is that nothing does. That does not mean the figure is exactly right, or that the claim could never turn out to be wrong. It means that, as far as the case shows, the claim holds up for what it says, and that it goes no further. It says how many adults smoke. It says nothing about change or cause.'
    ],
    feature: { step: 'S1', option: 'holds' },
    name: [
      'The answer, and so the name of the kind, is {a:S1.holds}. It is not a failure to find an answer. It is an answer, and often the most useful one: it tells you that the claim is safe to use for what it says.',
      'Give this answer when {when:S1.holds}. Finding nothing wrong is something you can only do by looking, so this answer needs the same pointing as the other four: you point to the words that show each part holding.'
    ] },

  { id: 'again-holds', kind: 'again', family: 'holds',
    link: 'The county survey gave you what to point to: {needs:holds}. Here it is again with a different story, and this time the claim compares two things, which says more than a single figure about one group does.',
    first: 'gate-poll', second: 'gate-depots', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the story (a health survey, parcels). Look at one thing only: for each part of the claim, is there anything in the case that could make it go wrong?',
    prompt: { kind: 'phrase', answer: 'Both depots serve similar mixes of homes and offices, and both log every parcel the same way.' },
    shared: [
      'In both cases the question is put to the parts in order, and it finds nothing. In the survey, nobody was favoured in who was asked, and almost everyone asked answered. In the depots, both are counted the same way and serve the same kind of customers, so the two figures can be set side by side.',
      'The two claims are different sizes. The survey gives a figure about one group. The depot claim says which of two things is bigger, a difference between two groups. Each says only what its figures can carry, and neither says why.',
      'The two stories share nothing else, so this is not about health or about parcels. It holds wherever the question has been put to every part of a claim, in order, and each part has held up. That is what {a:S1.holds} names.'
    ] },

  { id: 'portrait-holds', kind: 'portrait', family: 'holds',
    link: 'You know what to point to. This card fills in the rest of the picture of {a:S1.holds}, so that you can spot it where nobody marks the words for you.',
    typical: [
      'Each part of the claim is something you can point to, and each one holds. You can say how the people or things got into the figure, and it looks fair. What is counted did not change. What the figure is set beside is fair. And if the claim says one thing caused another, the groups were formed by chance.',
      'The claim says no more than its figures can carry. A figure about one group stays a figure about one group. A difference between two groups does not turn into a cause.',
      'It often comes with plain details about how the figure was got: how people were picked, how many answered, how the same count was made in both years or both places. Those details are where the evidence is.',
      'It can be dull. There is seldom a sentence that tells you to feel anything.',
      'Sound claims come in different sizes: a figure about one group, a rise or a fall in a single figure, a gap between two groups, or a cause. What they share is that each says only what its figures can carry.'
    ],
    not: 'It is not a seal of approval. This answer means that, as far as the case shows, no part of the claim fails. It does not mean the figure is exact, the claim is certain, or the thing matters to you. And it is not the answer for a claim you merely like, or one from a source you respect. It is the answer when you have put the question to each part, in order, and found nothing wrong.',
    wild: ['"We drew 1,100 numbers by lottery and reached 1,000 of them."', '"Both hospitals counted the same way."', '"We chose the classrooms by drawing names from a hat."', '"The same test, the same month, the same rules."', '"The figures for both years use the same form."'],
    self: 'In your own life it is the claim you are about to repeat after checking where it came from. When you can say how the people were picked, what was counted and what it was set beside, and none of it worries you, you have this answer. The skill is being able to say so, and not only being able to find what is wrong.',
    ask: '"Have I put the question to every part of this claim, in order, and found nothing wrong in any of them?" If you have, you can use the claim for what it says, and for no more than that.' },

  { id: 'check-holds', kind: 'check', after: 'holds',
    case: 'gate-trial',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show how the two groups were formed? Tap them.',
           answer: 'It drew 40 names from a hat to choose which classrooms use a new reading program for a year.' } },

  /* ---------- A wrong idea: a respected source settles it ---------- */
  { id: 'refute-source', kind: 'refute', about: 'holds',
    h: 'A wrong idea: "It was in a respected journal, so it is settled"',
    link: 'You have seen what a claim looks like when every part holds. People often use another test in its place: where the claim came from.',
    idea: '"It was published in a respected journal, so it is settled."',
    verdict: 'This is wrong.',
    right: [
      'Where a claim appeared tells you something about who looked at it before you did, and that is not nothing. But it does not replace the question. A claim in a respected journal is built of the same parts as a claim on a leaflet. Someone was counted, a figure was read as showing something, it was set beside something, and the claim may say that one thing caused another. Each of those can go wrong in a famous journal as in a newsletter, and journals do print claims that do not hold up when they are checked.',
      'The reverse is true as well. A claim from a company, a newspaper or a neighbor can hold. A source that nobody respects does not make a claim false, and a source that everyone respects does not make it sound.',
      'What settles it is what you can point to in the claim itself: who or what the figure was worked out from, what it counts, what it is set beside, and what the claim says caused what. If you run the question on it and the answer is {a:S1.holds}, you have earned that answer. If you have not run it, you have an opinion about the source, and not an answer about the claim.'
    ],
    testedBy: ['gate-claim-journal'] },

  /* ---------- The four look-alike pairs with a sound claim ---------- */
  { id: 'look-counted-holds', kind: 'lookalike', ledger: 'counted~holds',
    link: 'A sound claim and a faulty claim can sound the same, and the best way to see the difference is to take the very same claim with and without the problem. First, the people or things the figure was worked out from.',
    cases: ['gate-cafe-few', 'gate-cafe-followed'],
    instruction: 'Both cases are about the same café, the same mailing list and the same figure, 90%. Compare one thing: how many of the people asked are in the figure, and what was done about the ones who did not reply?',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'gate-cafe-followed' },
    difference: [
      'In Case A the café asked 800 people and heard from 72, which is 9 in 100. Nothing was done about the other 728. People with strong opinions are likelier to reply than people without them, so the 72 are not a fair picture of the 800, and the owner then speaks for "our regulars". The answer is {a:S1.counted}.',
      'In Case B the café asked the same 800 people, rang everyone who had not replied, and heard from 720, which is 9 in 10. Almost everybody asked is in the figure, and the owner speaks only for the mailing list. Every part holds. The answer is {a:S1.holds}.',
      'The figure is the same in both: 90% love the new menu. What separates the two cases is how many of the people asked are in it. A figure from 72 of 800 and a figure from 720 of 800 can look exactly alike in a headline.'
    ] },

  { id: 'look-measure-holds', kind: 'lookalike', ledger: 'measure~holds',
    link: 'The same comparison for the second part. A figure that falls can be a real fall or a change in how the figure is made, and the headline is the same.',
    cases: ['gate-calls-timer', 'gate-calls-steady'],
    instruction: 'Both cases are about a call center whose average call fell from 7 minutes to 4. Compare one thing: has anything changed in how the length of a call is measured, or in what anyone is paid for?',
    prompt: { kind: 'which', option: 'S1.measure', answer: 'gate-calls-timer' },
    difference: [
      'In Case A the center changed its phone system in April. The timer used to run through the time a caller was on hold. It now stops when an agent puts a caller on hold. Average length can fall from 7 minutes to 4 with every call lasting exactly as long as before. What is counted changed. The answer is {a:S1.measure}.',
      'In Case B the timer has run from answer to hang-up for three years, on the same system, with the same pay and the same way of handling calls. Every call in both years is counted. A fall from 7 to 4 is a fall in how long calls take, and the claim says no more. The answer is {a:S1.holds}.',
      'The numbers and the claim are the same. The only difference is a sentence about how the figure is made, and it is easy to read past.'
    ] },

  { id: 'look-compare-holds', kind: 'lookalike', ledger: 'compare~holds',
    link: 'The same comparison for the third part. A percentage with no numbers behind it, and the same two things set side by side with their numbers, can make the same claim.',
    cases: ['gate-ward-percent', 'gate-ward-counts'],
    instruction: 'Both cases say that one hospital’s surgical ward has fewer infections than the hospital across town. Compare one thing: are the numbers behind the comparison given?',
    prompt: { kind: 'which', option: 'S1.compare', answer: 'gate-ward-percent' },
    difference: [
      'In Case A the claim is that infections are "25% lower", and it gives no word on how many patients were treated or how many got an infection. A 25% difference could be a handful of patients or thousands. What is missing is something the figure needs beside it before it means anything. The answer is {a:S1.compare}.',
      'In Case B the numbers are given: 30 of 1,000 patients here, 40 of 1,000 there. Both hospitals use the same definition of an infection, do the same range of operations and count every patient who had surgery. The two figures can be set side by side, and the claim says only which is bigger. The answer is {a:S1.holds}.',
      'The two hospitals and the claim are the same. The numbers underneath the percentage, and the sentence that says the two are alike, are what separate them.'
    ] },

  { id: 'look-cause-holds', kind: 'lookalike', ledger: 'cause~holds',
    link: 'The same comparison for the last part. A claim of cause can be sound, and the way to tell is how the groups were formed.',
    cases: ['gate-gym-chosen', 'gate-gym-lottery'],
    instruction: 'Both cases are about the same gym, the same morning class and the same weight loss. Compare one thing: how did members come to be in the class and in the group without it?',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'gate-gym-lottery' },
    difference: [
      'In Case A members chose their own class, and the keenest members are the ones who pick the morning class. They could have lost more weight than the others whichever class they were in. The claim says the class made the difference, and the case shows another way to explain the same result. The answer is {a:S1.cause}.',
      'In Case B the gym drew names by lottery. Nobody chose, so keenness cannot be the reason the groups differ, and the other things that could matter are as likely to be in one group as in the other. The claim says the class made the difference, and nothing in the case offers another way. Every part holds. The answer is {a:S1.holds}.',
      'The figures are the same in both: 6 pounds lost against 2. The only difference is who decided which group each member was in. When the members decide, something else can explain the result. When a lottery decides, very little can.'
    ] }
]);
