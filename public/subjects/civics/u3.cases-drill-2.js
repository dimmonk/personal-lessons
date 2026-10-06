// Civics, Unit Three: drill cases for stage four (the whole route, no help). Two or more for each name.
// Every question is asked here, starting with the key's first question, so every case carries marked words and a
// reason for that question too (D1). echo names a teaching case whose story this one resembles while its name differs:
// the feedback says so, which is how the "does it look like a case you know?" second look is practiced.
// also lists answers the case shows as well as its own, which lose to its own by the key's tie-break (yieldsTo).
// All bills, people and places are invented.

FC.cases('civics', 'u3', [

  /* ---------- Clean ---------- */
  { id: 'r-citizen', use: 'drill', tier: 'clean', setting: 'immigration', topic: 'citizenship for those who served',
    text: "Soldiers who served abroad say they wait years to become citizens. The House and the Senate passed a bill that lets anyone who has served three years in the armed forces apply to become a citizen at once.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'lets anyone who has served three years in the armed forces apply to become a citizen at once' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}. The soldiers’ wait is only the reason for the bill.',
              C1: 'Congress passed a law, and the law {cue:C1}. The rules for becoming a citizen are a matter on the Constitution’s list, and no right is taken away.' },
    not: { outcome: 'beyondcong', why: 'A law about who may become a citizen can sound like a matter for the states. But the rules for becoming a citizen are on the Constitution’s list for Congress.' },
    wouldChange: 'If the case ended with the immigration service writing the forms that carry out this law, the answer to the first question would be {a:D1.president}.' },

  { id: 'r-paint', use: 'drill', tier: 'clean', setting: 'home', topic: 'the color of every house',
    text: "Neighbors complain about houses painted in loud colors. The House and the Senate passed a bill that says every house in the country must be painted white, gray or beige on the outside.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'says every house in the country must be painted white, gray or beige on the outside' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}.',
              C1: 'The law is about the color of homes: it {cue:C1}. That is not one of the matters the Constitution lists for Congress, so it is for the states, and the towns they give power to, to decide.' },
    not: { outcome: 'enumerated', why: 'Both chambers voting is true of every law. The color of a home is not on the Constitution’s list.' },
    wouldChange: 'If a town council had passed the same rule for its own streets, the answer to the first question would be {a:D1.states}.' },

  { id: 'r-ferries', use: 'drill', tier: 'clean', setting: 'travel', topic: 'funds for island ferries',
    text: "Ferries link a small island to the mainland, and the service loses money every year. On Wednesday the Senate voted to give the ferry service $30 million for the coming year, after the House had voted for the same amount.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { D1: 'after the House had voted for the same amount', C1: 'to give the ferry service $30 million for the coming year' },
    reason: { D1: 'The case ends on votes in both chambers: {cue:D1}.',
              C1: 'Congress decided that the government may spend money on something: it voted {cue:C1}. Without that vote the ferry service gets nothing from the government.' },
    not: { outcome: 'enumerated', why: 'The vote is on money to be spent. It is not a law on a listed matter such as a tax.' },
    wouldChange: 'If the ferry office had decided which crossings to cut, with the money already voted, the answer to the first question would be {a:D1.president}.' },

  { id: 'r-nominee', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a new head for the national library',
    text: "The President chose a new head for the national library. The Senate held a hearing on Monday and, on Wednesday, voted 66 to 31 to approve her.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { D1: 'The Senate held a hearing on Monday', C1: 'voted 66 to 31 to approve her' },
    reason: { D1: 'The case ends on the Senate’s hearing and vote: {cue:D1}. The President’s choice came first and is how the matter got there.',
              C1: 'The Senate voted on a person the President put forward for a top job: it {cue:C1}.' },
    not: { outcome: 'impeach', why: 'It is a Senate vote about a person, but nobody is accused of anything, and she does not yet have the job.' } },

  { id: 'r-prosecutor', use: 'drill', tier: 'clean', setting: 'community', topic: 'a federal prosecutor who hid evidence',
    text: "A federal prosecutor is accused of hiding evidence in many cases. The House voted by more than half to charge him, and the Senate is choosing a date for the trial.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { D1: 'the Senate is choosing a date for the trial', C1: 'The House voted by more than half to charge him' },
    reason: { D1: 'The case ends with a trial still to be held by senators: {cue:D1}. That is a vote by lawmakers, not a decision by a judge.',
              C1: 'The House has taken the first step: {cue:C1}. The trial is the second, and the answer covers both.' },
    not: { outcome: 'confirm', why: 'A Senate vote about a person who works for the government can look like a vote on a job. The prosecutor already has the job, and the vote will be on a charge.' } },

  /* ---------- Varied ---------- */
  { id: 'r-navy', use: 'drill', tier: 'varied', setting: 'world', topic: 'how many sailors the navy may have',
    text: "Pirates have attacked cargo ships off a distant coast. The House and the Senate passed a bill that sets how many sailors the navy may have for the next three years.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'sets how many sailors the navy may have for the next three years' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}. The pirates are the reason for the bill.',
              C1: 'The law is about the size of the navy: it {cue:C1}. War and the armed forces are on the Constitution’s list, and the law takes no right away.' },
    not: { outcome: 'purse', why: 'Paying sailors costs money, which can sound like a decision about money. But the bill sets a number of sailors by law, on a listed matter, and votes no money.' },
    wouldChange: 'If the bill had given the navy money to hire the sailors, and set no number, the answer to the question about Congress would be {a:C1.money}.' },

  { id: 'r-leads', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'how long a dog’s lead may be',
    text: "Dog owners in town parks complain about long leads. The House and the Senate passed a bill that says no dog’s lead may be longer than six feet in any park in any town.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'says no dog’s lead may be longer than six feet in any park in any town' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}.',
              C1: 'The law is about dogs in town parks: it {cue:C1}. That is not one of the matters the Constitution lists for Congress, so it is for the states, and the towns they give power to, to decide.' },
    not: { outcome: 'enumerated', why: 'Both chambers voting is true of every law. A park rule for dogs is not on the Constitution’s list.' } },

  { id: 'r-envoy', use: 'drill', tier: 'varied', setting: 'world', topic: 'a trade treaty is approved',
    text: "The President signed a trade treaty with a country overseas and sent it to the Senate. The Senate held a month of hearings on the treaty and then voted 74 to 25 to approve it.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { D1: 'The Senate held a month of hearings on the treaty', C1: 'voted 74 to 25 to approve it' },
    reason: { D1: 'The case ends in the Senate, which is lawmakers of the whole country: {cue:D1}. The President’s signature is how the matter got there.',
              C1: 'The Senate voted on a {t:treaty} the President had signed: it {cue:C1}.' },
    not: { outcome: 'impeach', why: 'It is a Senate vote, and nobody is accused of anything. The vote is on an agreement the President put forward.' },
    wouldChange: 'If the story stopped when the President signed, with nothing about the Senate, the answer to the first question would be {a:D1.president}.' },

  { id: 'r-lies', use: 'drill', tier: 'varied', setting: 'work', topic: 'an office head who lied over a safety report',
    text: "The head of a federal office is accused of lying to Congress about a safety report. The House voted by more than half to charge him. In the Senate trial, 70 of the 100 senators voted to convict, and he was removed.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { D1: 'In the Senate trial, 70 of the 100 senators voted to convict', C1: 'The House voted by more than half to charge him' },
    reason: { D1: 'The last decision is a vote by senators: {cue:D1}.',
              C1: 'The House brought the charge, {cue:C1}, and the Senate tried it. Both steps are Congress acting on the accusation, and the answer covers both.' },
    not: { outcome: 'confirm', why: 'Both are Senate votes about a person. But he already had the job, and the vote was on a charge, not on putting him forward.' } },

  /* ---------- Cases whose story points the wrong way ---------- */
  { id: 'r-signed', use: 'drill', tier: 'misleading', setting: 'community', topic: 'holding mail while away', echo: 'x-mailfunds',
    text: "Many people go away for weeks and do not want the post office to stop their mail. The House and the Senate passed a bill that lets people pay the post office to hold their mail for up to a month. The President signed it on Friday.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'lets people pay the post office to hold their mail for up to a month' },
    reason: { D1: 'The last decision is the vote of both chambers: {cue:D1}. The President’s signature does not change whose decision it was.',
              C1: 'Congress passed a law, and the law {cue:C1}. The mail is on the Constitution’s list, and no right is taken away.' },
    not: { outcome: 'purse', why: 'A law about the post office can sound like a decision about money. But no money is voted, cut or left out. The law sets a service people may pay for.' },
    wouldChange: 'If the case ended with the President refusing to sign, the answer to the first question would be {a:D1.president}.' },

  { id: 'r-library', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'opening hours of every library', echo: 'l-mail-rates',
    text: "People use the post office to send books to a library, and a rural library says its hours are too short. The House and the Senate passed a bill that sets the opening hours of every town library in the country.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'sets the opening hours of every town library in the country' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}.',
              C1: 'The post office is in the story, but the law is not about it. The law {cue:C1}, and the hours of a town’s library are not one of the matters the Constitution lists for Congress.' },
    not: { outcome: 'enumerated', why: 'The post office is a listed matter and it appears in the story, so the case can look like the parcel-price law. But the law is about library hours, which are not on the list.' } },

  { id: 'r-ships', use: 'drill', tier: 'misleading', setting: 'world', topic: 'funds for two new navy ships', also: ['listed'],
    text: "The navy says that two of its oldest ships are too worn to sail. The House and the Senate passed a bill that gives the navy $2 billion to build two new ships.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'gives the navy $2 billion to build two new ships' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}.',
              C1: 'The bill {cue:C1}. Congress is deciding whether the government may spend the money. The navy is on the Constitution’s list, so the case shows a law on a listed matter as well, and when a case shows both, the answer is {a:C1.money}.' },
    not: { outcome: 'enumerated', why: 'The armed forces are a listed matter, and the bill is a law, so this answer fits. But what the bill does is give money, and when a case shows both, the money decides.' } },

  { id: 'r-reyes', use: 'drill', tier: 'misleading', setting: 'world', topic: 'an ambassador waiting for the Senate',
    text: "The President has signed the papers naming Daniel Reyes as ambassador to a country overseas and has told his office to book his flight. The Senate, which must vote on him before he can go, will do so next week.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { D1: 'will do so next week', C1: 'which must vote on him before he can go' },
    reason: { D1: 'The case ends by asking the Senate for a decision: the Senate {cue:D1}. The President’s signature is how the matter got there.',
              C1: 'The vote is on a person the President put forward: the Senate is the body {cue:C1}. He cannot go until it says yes.' },
    not: { outcome: 'impeach', why: 'A Senate vote about a person can look like a charge. Nobody is accused of anything, and he does not yet hold the job.' },
    wouldChange: 'If the case stopped after the President’s order to book the flight, with nothing about the Senate, the answer to the first question would be {a:D1.president}.' },

  { id: 'r-acquit', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a harbor head who was not removed', echo: 'c-parks',
    text: "A federal official who runs a harbor office is accused of taking gifts. The House voted by more than half to charge her. At the end of the Senate trial, 52 of the 100 senators voted to convict, so she was not removed. Her lawyer says she has been cleared.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { D1: 'At the end of the Senate trial, 52 of the 100 senators voted to convict', C1: 'The House voted by more than half to charge her' },
    reason: { D1: 'The last decision is a vote by senators: {cue:D1}.',
              C1: 'The House brought the charge: {cue:C1}. The Senate then tried it, and the trial ended without a conviction. The answer covers the charge and the trial, whatever the result.' },
    not: { outcome: 'confirm', why: 'The story is about a woman and a Senate vote, like the head of the parks. But she already had the job, and the vote was on a charge.' },
    wouldChange: 'If the case ended with her lawyer asking a judge to rule that the charge was unfair, the answer to the first question would be {a:D1.courts}.' }
]);
