// Civics, Unit Three: drill cases for stages one to three. None of these appears in a card. All bills, people and places are invented.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case (a ledger neighbor) and says why it fails.
// A stage-three case ('finish') is shown with the first question's answer already given, so it carries marked words and a
// reason for that question too.

FC.cases('civics', 'u3', [

  /* ---------- Stage one: the answers are shown, the learner gives the name ---------- */
  { id: 'n-trucks', use: 'drill', tier: 'clean', setting: 'work', topic: 'trucks stopped at state lines',
    text: "Fruit growers say their trucks are stopped and searched at every state line. The House and the Senate passed a bill that bans states from stopping trucks at their borders to search goods that are only passing through.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { C1: 'a bill that bans states from stopping trucks at their borders to search goods that are only passing through' },
    reason: { C1: 'Congress passed a law, and what it is about is goods crossing from one state to another: {cue:C1}. That is trade between the states, a matter on the Constitution’s list, and the law takes no right away.' },
    not: { outcome: 'beyondcong', why: 'A law that tells states what they may not do can look like an overreach. But the matter is trade between the states, which the Constitution lists for Congress, and no right is taken away.' } },

  { id: 'n-streets', use: 'drill', tier: 'clean', setting: 'community', topic: 'a speed limit for town streets',
    text: "Drivers complain that cars speed down the side streets of small towns. The House and the Senate passed a bill that sets 20 miles an hour as the speed limit on every town street in the country.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { C1: 'a bill that sets 20 miles an hour as the speed limit on every town street in the country' },
    reason: { C1: 'The law is about the speed on a town’s own streets: {cue:C1}. That is not one of the matters the Constitution lists for Congress, so it is for the states, and the towns they give power to, to decide.' },
    not: { outcome: 'enumerated', why: 'Both chambers voting is true of every law, and it does not make the matter Congress’s. The streets of a town are not on the Constitution’s list.' } },

  { id: 'n-inspectors', use: 'drill', tier: 'clean', setting: 'health', topic: 'no funds for food inspectors',
    text: "Food inspectors say they cannot visit every meat plant. The federal office that sends them has asked for money to hire 200 more. The House and the Senate passed this year’s spending bill without any money for the new inspectors.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: 'passed this year’s spending bill without any money for the new inspectors' },
    reason: { C1: 'Congress decided about money, and left it out: {cue:C1}. The office cannot hire without the money, and only Congress can vote it.' },
    not: { outcome: 'enumerated', why: 'The bill is a law, and every law has been through both chambers. But it is not a law on a listed matter such as a tax. What it settles is whether the government may spend.' } },

  { id: 'n-weather', use: 'drill', tier: 'clean', setting: 'travel', topic: 'a new head for the weather service',
    text: "The President chose a new head for the federal weather service. On Tuesday the Senate voted 64 to 35 to approve him.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { C1: 'the Senate voted 64 to 35 to approve him' },
    reason: { C1: 'The Senate voted on a person the President put forward for a top job: {cue:C1}.' },
    not: { outcome: 'impeach', why: 'A Senate vote about someone who works for the government can look like a charge. Nobody is accused of anything here, and he does not yet have the job.' } },

  { id: 'n-charge', use: 'drill', tier: 'clean', setting: 'community', topic: 'a judge accused of hiding a gift',
    text: "The House voted by more than half to charge a federal judge with lying to hide a gift. The Senate will hold the trial on Monday.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { C1: 'The House voted by more than half to charge a federal judge with lying to hide a gift' },
    reason: { C1: 'The House has taken the first step: {cue:C1}. The trial is still to come, and the answer covers the charge as well as the trial.' },
    not: { outcome: 'confirm', why: 'A Senate vote is coming, but not on a person the President put forward for a job. The judge already has the job, and the vote will be on a charge.' } },

  /* ---------- Stage two: the question alone, on a new case ---------- */
  { id: 'pc-borrow', use: 'drill', tier: 'clean', setting: 'money', topic: 'the government borrows more',
    text: "Tax money no longer covers all of the government’s bills this year. The House and the Senate passed a bill that lets the government borrow another $40 billion.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { C1: 'a bill that lets the government borrow another $40 billion' },
    reason: { C1: 'Congress passed a law, and what it is about is the government borrowing money: {cue:C1}. Borrowing is on the Constitution’s list, and the law takes no right away.' },
    not: { outcome: 'purse', why: 'It is about money, which can sound like a decision on what the government may spend. But the bill is about borrowing, a matter on the list, and says nothing about what the money will be spent on.' } },

  { id: 'pc-speech', use: 'drill', tier: 'clean', setting: 'community', topic: 'a ban on criticizing the government',
    text: "Some lawmakers are tired of being criticized. Both the House and the Senate passed a bill that bans anyone from saying in public that the government has made a mistake.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { C1: 'a bill that bans anyone from saying in public that the government has made a mistake' },
    reason: { C1: 'The law takes away the right to speak: {cue:C1}. The Constitution protects that right, so Congress may not pass such a law, however the votes went.' },
    not: { outcome: 'enumerated', why: 'The law was passed by both chambers, as every law is. But a law that takes away a right is not one the Constitution lets Congress pass.' } },

  { id: 'pc-fire', use: 'drill', tier: 'clean', setting: 'community', topic: 'funds after a wildfire',
    text: "A wildfire burned a dozen homes in a mountain town. On Monday the House voted $60 million for fire crews and for rebuilding, and on Tuesday the Senate voted for the same amount.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: 'the House voted $60 million for fire crews and for rebuilding, and on Tuesday the Senate voted for the same amount' },
    reason: { C1: 'Congress decided that the government may spend money on something: {cue:C1}. Voting the money is what lets the crews be paid.' },
    not: { outcome: 'enumerated', why: 'Both chambers voted, as they do for every law. But the vote here is on money to be spent, and it is not a law on a listed matter such as a tax.' } },

  { id: 'pc-health', use: 'drill', tier: 'clean', setting: 'health', topic: 'a new head for the health service',
    text: "The President chose a doctor to lead the federal health service. On Friday the Senate voted 55 to 44 to approve her.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { C1: 'the Senate voted 55 to 44 to approve her' },
    reason: { C1: 'The Senate voted on a person the President put forward: {cue:C1}. She starts only after a yes.' },
    not: { outcome: 'impeach', why: 'It is a Senate vote about a person, but nobody is accused of anything, and she does not yet hold the job.' } },

  { id: 'pc-trial', use: 'drill', tier: 'varied', setting: 'work', topic: 'a land-office head who stayed',
    text: "The head of the federal land office was accused of selling public land to a friend for far less than it was worth. The House voted by more than half to charge her, and the Senate trial ended with 60 of the 100 senators voting to convict, so she stayed in her job.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { C1: ['The House voted by more than half to charge her', 'the Senate trial ended with 60 of the 100 senators voting to convict'] },
    reason: { C1: 'Both steps are in the case: {cue:C1}. The Senate did not convict, so she stayed, but the answer is about the charge and the trial, not about how the trial ended.' },
    not: { outcome: 'confirm', why: 'A Senate vote on a person is what the two names have in common. But she already had the job, and the vote was on a charge, not on putting her forward.' } },

  /* ---------- Stage three: the first answer is shown; the learner answers the question and gives the name ---------- */
  { id: 'f-rice', use: 'drill', tier: 'varied', setting: 'work', topic: 'rice sold to other countries',
    text: "Rice farmers want to sell more abroad, but they must get a license for each shipment. The House and the Senate passed a bill that ends the license for rice shipments to other countries.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'ends the license for rice shipments to other countries' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}. The farmers’ wish is only the reason for the bill.',
              C1: 'Congress passed a law, and the law {cue:C1}. That is trade with other countries, a matter on the Constitution’s list, and no right is taken away.' },
    not: { outcome: 'beyondcong', why: 'A law that ends a license can sound like a law that restricts something. But the matter is trade with other countries, which the Constitution lists for Congress, and no right is taken away.' } },

  { id: 'f-lunch', use: 'drill', tier: 'varied', setting: 'learning', topic: 'school lunch funds cut',
    text: "School kitchens say that food costs more every year. The House voted to cut the federal money for school lunches by a tenth, and the Senate voted for the same cut.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { D1: 'and the Senate voted for the same cut', C1: 'to cut the federal money for school lunches by a tenth' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}.',
              C1: 'Congress decided how much the government may spend: it voted {cue:C1}. Nothing was banned. There is less money.' },
    not: { outcome: 'enumerated', why: 'A cut is not a law on a listed matter such as a tax. The two chambers voted on how much money the government may spend.' } },

  { id: 'f-nominee', use: 'drill', tier: 'varied', setting: 'learning', topic: 'a lawyer chosen for an appeals court',
    text: "The President chose a lawyer from Ohio for a federal appeals court. Next week the Senate will hold its vote on whether to approve her.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { D1: 'Next week the Senate will hold its vote', C1: 'whether to approve her' },
    reason: { D1: 'The case ends by asking the Senate for a decision: {cue:D1}. The President’s choice is how the matter got there.',
              C1: 'The vote is on a person the President put forward: it is {cue:C1}. She cannot take the seat before the vote.' },
    not: { outcome: 'impeach', why: 'A vote in the Senate about a person who works for the government can look like a charge. Nobody is accused of anything here, and she does not hold the seat yet.' } },

  { id: 'f-trialday', use: 'drill', tier: 'varied', setting: 'money', topic: 'a research fund taken for himself',
    text: "A federal official who runs a research fund is accused of taking part of the fund for himself. The House voted to charge him, and the Senate’s trial opens on Thursday.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { D1: 'the Senate’s trial opens on Thursday', C1: 'The House voted to charge him' },
    reason: { D1: 'The case ends with a trial held by senators: {cue:D1}. A trial held in the Senate is a vote by lawmakers, not a decision by a judge.',
              C1: 'The House has already taken the first step: {cue:C1}. The trial is the second step, and the answer covers both.' },
    not: { outcome: 'confirm', why: 'It is a Senate matter about a person, but the vote will be on a charge against someone who already has the job.' } }
]);
