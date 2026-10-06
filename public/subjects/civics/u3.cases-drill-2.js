// Civics, Unit Three: drill cases for the second stage (the whole route, no help). At least one for each name.
// Every question is asked here, starting with the first question, so every case carries marked words and a
// reason for that question too (D1). echo names a teaching case whose story this one resembles while its name differs:
// the feedback says so, which is how the "does it look like a case you know?" second look is practiced.
// also lists answers the case shows as well as its own, which lose to its own by the key's tie-break (yieldsTo).
// All bills, people and places are invented.

FC.cases('civics', 'u3', [
  { id: 'r-citizen', use: 'drill', tier: 'clean', setting: 'immigration', topic: 'citizenship for those who served',
    text: "Soldiers who served abroad say they wait years to become citizens. The House and the Senate passed a bill that lets anyone who has served three years in the armed forces apply to become a citizen at once.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'lets anyone who has served three years in the armed forces apply to become a citizen at once' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}. The soldiers’ wait is only the reason for the bill.',
              C1: 'Congress passed a law, and the law {cue:C1}. The rules for becoming a citizen are a matter on the Constitution’s list, and no right is taken away.' },
    not: { outcome: 'beyondcong', why: 'A law about who may become a citizen can sound like a matter for the states. But the rules for becoming a citizen are on the Constitution’s list for Congress.' } },

  { id: 'r-paint', use: 'drill', tier: 'clean', setting: 'home', topic: 'the color of every house',
    text: "Neighbors complain about houses painted in loud colors. The House and the Senate passed a bill that says every house in the country must be painted white, gray or beige on the outside.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'says every house in the country must be painted white, gray or beige on the outside' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}.',
              C1: 'The law is about the color of homes: it {cue:C1}. That is not one of the matters the Constitution lists for Congress, so it is for the states, and the towns they give power to, to decide.' },
    not: { outcome: 'enumerated', why: 'Both chambers voting is true of every law. The color of a home is not on the Constitution’s list.' } },

  { id: 'r-ferries', use: 'drill', tier: 'clean', setting: 'travel', topic: 'funds for island ferries',
    text: "Ferries link a small island to the mainland, and the service loses money every year. On Wednesday the Senate voted to give the ferry service $30 million for the coming year, after the House had voted for the same amount.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { D1: 'after the House had voted for the same amount', C1: 'to give the ferry service $30 million for the coming year' },
    reason: { D1: 'The case ends on votes in both chambers: {cue:D1}.',
              C1: 'Congress decided that the government may spend money on something: it voted {cue:C1}. Without that vote the ferry service gets nothing from the government.' },
    not: { outcome: 'enumerated', why: 'The vote is on money to be spent. It is not a law on a listed matter such as a tax.' },
    wouldChange: 'If the ferry office had decided which crossings to cut, with the money already voted, the answer to the first question would be {a:D1.president}.' },

  { id: 'r-ships', use: 'drill', tier: 'misleading', setting: 'world', topic: 'funds for two new navy ships', also: ['listed'],
    text: "The navy says that two of its oldest ships are too worn to sail. The House and the Senate passed a bill that gives the navy $2 billion to build two new ships.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'gives the navy $2 billion to build two new ships' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}.',
              C1: 'The bill {cue:C1}. Congress is deciding whether the government may spend the money. The navy is on the Constitution’s list, so the case shows a law on a listed matter as well, and when a case shows both, the answer is {a:C1.money}.' },
    not: { outcome: 'enumerated', why: 'The armed forces are a listed matter, and the bill is a law, so this answer fits. But what the bill does is give money, and when a case shows both, the money decides.' } },

  { id: 'r-nominee', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a new head for the national library',
    text: "The President chose a new head for the national library. The Senate held a hearing on Monday and, on Wednesday, voted 66 to 31 to approve her.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { D1: 'The Senate held a hearing on Monday', C1: 'voted 66 to 31 to approve her' },
    reason: { D1: 'The case ends on the Senate’s hearing and vote: {cue:D1}. The President’s choice came first and is how the matter got there.',
              C1: 'The Senate voted on a person the President put forward for a top job: it {cue:C1}.' },
    not: { outcome: 'impeach', why: 'It is a Senate vote about a person, but nobody is accused of anything, and she does not yet have the job.' } },

  { id: 'r-envoy', use: 'drill', tier: 'varied', setting: 'world', topic: 'a trade treaty is approved',
    text: "The President signed a trade treaty with a country overseas and sent it to the Senate. The Senate held a month of hearings on the treaty and then voted 74 to 25 to approve it.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { D1: 'The Senate held a month of hearings on the treaty', C1: 'voted 74 to 25 to approve it' },
    reason: { D1: 'The case ends in the Senate, which is lawmakers of the whole country: {cue:D1}. The President’s signature is how the matter got there.',
              C1: 'The Senate voted on a {t:treaty} the President had signed: it {cue:C1}.' },
    not: { outcome: 'impeach', why: 'It is a Senate vote, and nobody is accused of anything. The vote is on an agreement the President put forward.' } },

  { id: 'r-prosecutor', use: 'drill', tier: 'clean', setting: 'community', topic: 'a federal prosecutor who hid evidence',
    text: "A federal prosecutor is accused of hiding evidence in many cases. The House voted by more than half to charge him, and the Senate is choosing a date for the trial.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { D1: 'the Senate is choosing a date for the trial', C1: 'The House voted by more than half to charge him' },
    reason: { D1: 'The case ends with a trial still to be held by senators: {cue:D1}. That is a vote by lawmakers, not a decision by a judge.',
              C1: 'The House has taken the first step: {cue:C1}. The trial is the second, and the answer covers both.' },
    not: { outcome: 'confirm', why: 'A Senate vote about a person who works for the government can look like a vote on a job. The prosecutor already has the job, and the vote will be on a charge.' } },

  { id: 'r-lies', use: 'drill', tier: 'varied', setting: 'work', topic: 'an office head who lied over a safety report',
    text: "The head of a federal office is accused of lying to Congress about a safety report. The House voted by more than half to charge him. In the Senate trial, 70 of the 100 senators voted to convict, and he was removed.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { D1: 'In the Senate trial, 70 of the 100 senators voted to convict', C1: 'The House voted by more than half to charge him' },
    reason: { D1: 'The last decision is a vote by senators: {cue:D1}.',
              C1: 'The House brought the charge, {cue:C1}, and the Senate tried it. Both steps are Congress acting on the accusation, and the answer covers both.' },
    not: { outcome: 'confirm', why: 'Both are Senate votes about a person. But he already had the job, and the vote was on a charge, not on putting him forward.' } },

  { id: 'r-signed', use: 'drill', tier: 'misleading', setting: 'community', topic: 'holding mail while away', echo: 'l-mail-ban',
    text: "Many people go away for weeks and do not want the post office to stop their mail. The House and the Senate passed a bill that lets people pay the post office to hold their mail for up to a month. The President signed it on Friday.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'lets people pay the post office to hold their mail for up to a month' },
    reason: { D1: 'The last decision is the vote of both chambers: {cue:D1}. The President’s signature does not change whose decision it was.',
              C1: 'Congress passed a law, and the law {cue:C1}. The mail is on the Constitution’s list, and no right is taken away.' },
    not: { outcome: 'purse', why: 'A law about the post office can sound like a decision about money. But no money is voted, cut or left out. The law sets a service people may pay for.' } }
]);
