// Statistical Claims, Unit Three: drill cases for the route stage, misleading (the most noticeable thing in the story is not what decides it).
// echo names a teaching case of a DIFFERENT name whose story this one is built to bring back, so that the second look ("does it look like
// a case you know?") is practised where the likeness points the wrong way. also lists an answer the case shows as well as its own, which
// loses to its own by a tie-break in the key. Field guide: see u3.cases-drill-1.js.

FC.cases('stats', 'u3', [

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
    not: { outcome: 'nonresp', why: 'The charity has a known list of 400,000, which sounds like a list that was asked and did not reply. But the poll was never emailed to the list. Nobody was asked by name.' } }
]);
