// Statistical Claims, Unit Three: drill cases, fourth stage, misleading (the most noticeable thing in the story is not what decides it).
// echo names a teaching case of a DIFFERENT name whose story this one is built to bring back, so that the second look ("does it look like
// a case you know?") is practised where the likeness points the wrong way. also lists an answer the case shows as well as its own, which
// loses to its own by a tie-break in the key. Field guide: see u3.cases-drill-1.js.

FC.cases('stats', 'u3', [

  { id: 'rt-survivor-b', use: 'drill', tier: 'misleading', setting: 'home', topic: 'oak beams in the houses still standing', echo: 'cn-street',
    also: ['cause'],
    text: "Of the 400 houses built in the village of Aldwick in the 1600s, the 8 that are still standing all have oak beams. The village guide says: 'Oak beams make a house last four hundred years.'",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['the 8 that are still standing all have oak beams', 'Oak beams make a house last four hundred years'], A1: 'the 8 that are still standing all have oak beams' },
    reason: { S1: 'The guide says that oak beams made the houses last, which is a claim of cause. But the first part goes wrong before that. The figure comes from the 8 houses that are still standing: {cue:S1}. The other 392 are not in it.',
              A1: 'The count is worked out after the fact, from what is left: {cue:A1}. The 392 houses that fell down or were pulled down are missing, and if most of them had oak beams too, the beams would tell you nothing about why these 8 lasted.' },
    not: { outcome: 'samp_ok', why: 'A figure about the 8 houses alone would be a fair figure about those 8, and eight is a small count. But the claim speaks for all 400 houses that were built, and the other 392 are missing because they did not last. A figure that counted all 400 would hold.' },
    wouldChange: 'If the guide had counted all 400 houses and said how many with oak beams, and how many without, had fallen down, the first part would hold, and the claim of cause could then be put to the test.' },

  { id: 'rt-ok-c', use: 'drill', tier: 'misleading', setting: 'money', topic: 'every café opened in 2019, including the ones that closed', echo: 'cn-restaurants',
    text: "A small-business agency looked up all 400 cafés that opened in the city in 2019, including the ones that closed, and reports: 'Of the 400 cafés that opened in 2019, 150 were still open five years later: just under 4 in 10.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: 'looked up all 400 cafés that opened in the city in 2019, including the ones that closed', H1: 'Of the 400 cafés that opened in 2019, 150 were still open five years later' },
    reason: { S1: 'The story is about which cafés lasted, which can look like a figure from the survivors. But the agency counted everyone that started: {cue:S1}. Nobody who started is missing.',
              H1: 'The claim gives one share for one group at one time and goes no further: {cue:H1}. 150 of 400 is 37.5 in every 100.' },
    not: { outcome: 'survivor', why: 'A figure from the survivors leaves out the ones that closed. This one counts them: the 250 that closed are in the 400, and the claim says what share lasted, and nothing about why.' },
    wouldChange: 'If the agency had looked up only the 150 cafés that were still open and reported how well they were doing, the 250 that closed would be missing, and the answer would be {a:S1.counted}, then {a:A1.lasted}.' },

  { id: 'rt-smalln-b', use: 'drill', tier: 'misleading', setting: 'community', topic: 'lost wallets and a park of two million visitors',
    text: "Dixon Park has about 2 million visitors a year. Last year 4 wallets were handed in to its lost-and-found office, and all 4 were returned to their owners. The office says: 'Park visitors are the most honest in the country: every lost wallet is returned.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['4 wallets were handed in to its lost-and-found office, and all 4 were returned to their owners', 'Park visitors are the most honest in the country'], A1: '4 wallets were handed in to its lost-and-found office, and all 4 were returned to their owners' },
    reason: { S1: 'The office reads a perfect record as a verdict on millions of visitors, but the figure comes from four wallets: {cue:S1}.',
              A1: 'The 2 million visitors make the case look big. The figure itself is about the wallets, and every one is counted, but there are only four: {cue:A1}. One wallet that was not returned would turn "every" into 3 of 4.' },
    not: { outcome: 'samp_ok', why: 'The park has a huge number of visitors, and that large number can look like a figure that holds. But the figure is the return rate of wallets, and it rests on four. One more or fewer would move it a long way.' },
    wouldChange: 'If the office had handed back 400 wallets out of 400 over twenty years, there would be enough in the figure for it to mean something about the park.' },

  { id: 'rt-vol', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'teacher volunteers split by lottery', echo: 'cn-fourday',
    text: "A school district asked for volunteers among its teachers to try a new planning method, and 80 volunteered. A lottery chose 40 to use the method for a year and 40 to carry on as before. Classes taught by the 40 scored 5 points higher on average on the year-end test than classes taught by the other 40. The district says: 'The new planning method raised test scores by 5 points.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: 'A lottery chose 40 to use the method for a year and 40 to carry on as before', H1: 'The new planning method raised test scores by 5 points' },
    reason: { S1: 'The teachers volunteered, which can look like people who chose themselves into the figure. But the claim compares two groups of volunteers, and a lottery formed them: {cue:S1}. Whatever makes a teacher volunteer is as likely to be in one group as in the other.',
              H1: 'The claim is about cause: {cue:H1}. The case shows no other way for the difference to have come about, because the groups were formed by chance.' },
    not: { outcome: 'selfselect', why: 'The teachers did choose to volunteer, but nobody reads their answers as standing for teachers who did not. The claim is about the difference between two groups that a lottery formed from the same volunteers.' },
    wouldChange: 'If the volunteers had chosen for themselves whether to use the method, the keen ones would be in one group, and the answer would be different: the claim of cause would have another way to be explained.' },

  { id: 'rt-selfselect-b', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a charity poll that was never sent to its list',
    text: "A national charity posted an online poll on its website and shared it on social media: 'Do you back a ban on plastic bags?' Anyone could vote, and 31,000 people did. 29,140 voted yes. The charity has 400,000 people on its email list, but it did not email the poll to them. Its report says: 'Our supporters back a ban: 94 in every 100.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['31,000 people did', 'Our supporters back a ban'], A1: ['posted an online poll on its website and shared it on social media', 'did not email the poll to them'] },
    echo: 'cn-library',
    reason: { S1: 'The report speaks for all the charity’s supporters, but the figure comes from the 31,000 who voted: {cue:S1}. 31,000 is 8 in every 100 of the 400,000 on the list.',
              A1: 'The email list of 400,000 makes the case look like a known list that was asked. But nobody was asked by name: {cue:A1}. Anyone who saw the poll could vote, and the ones who did chose to.' },
    not: { outcome: 'nonresp', why: 'The charity has a known list of 400,000, which sounds like a list that was asked and did not reply. But the poll was never emailed to the list. Nobody was asked by name.' },
    wouldChange: 'If the charity had emailed the poll to all 400,000 on its list, and 31,000 had replied with no follow-up, the answer to the question for this branch would be {a:A1.replied}.' },

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'cd-rev-survivor', use: 'drill', kind: 'reverse', outcome: 'survivor', expect: 'find',
    options: [
      { text: 'The 28 that closed in those years are left out of the average.', voice: 'survivor' },
      { text: 'Anyone who saw the link could answer.', voice: 'selfselect' },
      { text: 'Everyone on the list was asked, and 9 in 10 of them replied.', voice: 'samp_ok' },
      { text: 'Only 12 of the 800 people asked sent the form back.', voice: 'nonresp' },
      { text: 'The figure comes from a class of 9 pupils.', voice: 'smalln' }
    ],
    why: 'That detail shows a figure worked out after the fact from the ones that lasted, with the ones that closed or left missing from it.' },

  { id: 'cd-rev-selfselect', use: 'drill', kind: 'reverse', outcome: 'selfselect', expect: 'hear',
    options: [
      { text: '"Vote now on our website and tell us what you think!"', voice: 'selfselect' },
      { text: '"Of the 28 clubs that opened, the 9 still going all say..."', voice: 'survivor' },
      { text: '"We emailed all 1,500 members, and 90 replied."', voice: 'nonresp' },
      { text: '"We asked all 14 people on the team, and 11 said yes."', voice: 'smalln' },
      { text: '"We drew 500 names by lottery, and 470 answered."', voice: 'samp_ok' }
    ],
    why: 'It is an invitation to anyone who sees it. Nobody is asked by name, and the ones who answer are the ones who chose to.' },

  { id: 'cd-rev-nonresp', use: 'drill', kind: 'reverse', outcome: 'nonresp', expect: 'find',
    options: [
      { text: 'The questionnaire went to every household on the list, and 1 in 10 sent it back with no follow-up.', voice: 'nonresp' },
      { text: 'It was a link on a website, and 3,000 people clicked.', voice: 'selfselect' },
      { text: 'The average is of the 20 plants that were still alive in September.', voice: 'survivor' },
      { text: 'The score is from 5 games, and it is perfect.', voice: 'smalln' },
      { text: 'Names were drawn by lottery, and nearly everyone drawn answered.', voice: 'samp_ok' }
    ],
    why: 'That detail is a known list that was asked by name, with most of it silent and nothing done about the silence.' },

  { id: 'cd-rev-smalln', use: 'drill', kind: 'reverse', outcome: 'smalln', expect: 'hear',
    options: [
      { text: '"Four out of four is a perfect record."', voice: 'smalln' },
      { text: '"Every bank still open in town has been here for forty years."', voice: 'survivor' },
      { text: '"Thousands of listeners have called in, and they agree."', voice: 'selfselect' },
      { text: '"Of the members who returned the form, nine in ten approve."', voice: 'nonresp' },
      { text: '"We counted all 1,200 pupils, and 8 in 100 missed more than ten days."', voice: 'samp_ok' }
    ],
    why: 'A perfect record from a handful is the kind of figure luck produces: one more or fewer would change it a long way.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'cd-claim-demo', use: 'claim',
    text: '"The music from the 1970s was better than today\'s. Listen to the hundred best songs of the decade: every one of them is a classic."',
    ask: { type: 'option', step: 'A1', answer: 'lasted' },
    fault: 'The claim speaks for the music of a whole decade, but "every one of them is a classic" comes from the hundred songs that people are still playing. Thousands of songs came out in the 1970s, and the ones nobody remembers are not on the list. A list of the ones that lasted cannot show that the decade’s music was better than another decade’s, which has its own list of the ones that lasted.',
    corrected: 'The hundred best-loved songs of the 1970s are still played today. That is {a:A1.lasted}: it shows what lasted, and not what the decade’s music was like. To say the music was better, I would need a count of every song that came out, the ones nobody plays now included, set beside the same count for another decade.' },

  { id: 'cd-claim-poll', use: 'claim',
    text: '"More than 60,000 people voted in our online poll, and 9 in 10 want the old stadium rebuilt. You cannot argue with 60,000 votes."',
    ask: { type: 'option', step: 'A1', answer: 'chose' },
    fault: 'The claim treats the size of the count as proof. 60,000 votes tell you how exact the figure is for the people who voted. They chose to vote, and the claim speaks for everyone. If the town has 300,000 adults, 60,000 votes are 20 in every 100 of them, and the 240,000 who did not vote could have said anything.',
    corrected: 'More than 60,000 people chose to vote in our online poll, and 9 in 10 of them want the old stadium rebuilt. That is {a:A1.chose}: it says what the voters want. To say what the town wants, I would need a figure from people picked by lottery from a full list, with nearly all of them answering.' },

  { id: 'cd-claim-replies', use: 'claim',
    text: '"Only 1 in 10 people replied to the survey, so its results are worthless. That is non-response bias."',
    ask: { type: 'missing', name: 'nonresp' },
    fault: 'The claim points to a low number of replies and stops there. A low number of replies is not on its own {o:nonresp}. For that name you must be able to point to this: {needs:nonresp}. The claim shows a number of replies, and nothing about whether the silent ones were followed up or what the replies are read as showing. And "worthless" goes too far: the figure for the people who replied is a true figure for them.',
    corrected: 'Only 1 in 10 people replied to the survey. That is not enough to say anything about the whole list. If the survey followed up until most had answered, or says only what the people who replied think, the figure may be sound.' },

  { id: 'cd-claim-village', use: 'claim',
    text: '"This tiny school has the highest reading scores in the nation: all 7 of its third graders passed the test."',
    ask: { type: 'option', step: 'A1', answer: 'handful' },
    fault: 'The claim reads a perfect result from 7 children as meaning that the school is the best in the nation. Every third grader is counted, so nobody is left out, but there are only seven, and one child who did not pass would make it 6 of 7, which is 86 in every 100. The smallest groups sit at the top of rankings, and at the bottom.',
    corrected: 'All 7 third graders at this tiny school passed the test. That is {a:A1.handful}: it says how seven children did this year, and not how good the school is. To say it is the best, I would need results from many more children, over several years.' }
]);
