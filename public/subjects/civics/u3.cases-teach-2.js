// Civics, Unit Three: cases shown inside cards (money, its pair with the first name, and the vote on a person).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that step (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that
// piece is tapped in error. reason[STEP] is the reason for this case's answer to that question.
// Every case here has the first question's answer, Congress (route D1), and one answer to the branch question (C1).
// All bills, people and places are invented.

FC.cases('civics', 'u3', [
  { id: 'p-barrier', use: 'teach', tier: 'clean', setting: 'community', topic: 'a flood barrier left unfunded', name: 'The flood barrier',
    text: "A river town floods almost every spring. The President announced a flood barrier for the town, and the federal engineers have their plans ready. But the spending bill the House and the Senate passed this year has no money for the barrier, so no work can start.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: 'the spending bill the House and the Senate passed this year has no money for the barrier' } },

  { id: 'k-rangers', use: 'check', tier: 'clean', setting: 'leisure', topic: 'funds cut for park rangers', name: 'The park rangers',
    text: "The national parks have more visitors every year, and rangers say they are short of staff. The House and the Senate passed a spending bill that cuts the money for park rangers by a third.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: 'a spending bill that cuts the money for park rangers by a third' },
    reason: { C1: 'The bill is {cue:C1}, so Congress is deciding what the government may spend. Nobody has banned the rangers: there is just less money to pay them.' },
    not: { outcome: 'enumerated', why: 'Every law passes the House and the Senate, but this bill is not a tax or another listed subject. It settles how much money the rangers get.' } },

  { id: 'l-clinic-tax', use: 'teach', tier: 'clean', setting: 'health', topic: 'a tax to pay for clinics',
    name: 'The clinic tax',
    text: "Rural clinics need help to stay open. The House and the Senate passed a bill that puts a small tax on every bottle of bottled water, to raise money for rural clinics.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { C1: 'a bill that puts a small tax on every bottle of bottled water' } },

  { id: 'l-clinic-money', use: 'teach', tier: 'clean', setting: 'health', topic: 'a grant of funds for clinics',
    name: 'The clinic grants',
    text: "Rural clinics need help to stay open. The House and the Senate passed a bill that gives $90 million to the federal health office for grants to rural clinics.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: 'a bill that gives $90 million to the federal health office for grants to rural clinics' } },

  { id: 'c-parks', use: 'teach', tier: 'clean', setting: 'work', topic: 'a new head for the national parks', name: 'The head of the parks',
    text: "The President chose a new head for the federal agency that runs the national parks. The Senate held two days of hearings, and on Thursday it voted 61 to 38 to approve her.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { C1: 'The Senate held two days of hearings, and on Thursday it voted 61 to 38 to approve her' } },

  { id: 'k-taxhead', use: 'check', tier: 'clean', setting: 'money', topic: 'a new head for the tax office', name: 'The head of the tax office',
    text: "The President chose a new head for the federal tax office. On Wednesday the Senate voted 58 to 41 to approve her, and she starts work on Monday.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { C1: 'the Senate voted 58 to 41 to approve her' },
    reason: { C1: 'The President put her forward and the Senate voted: {cue:C1}. She starts work only after that yes.' },
    not: { outcome: 'impeach', why: 'Both are Senate votes about a person. But nobody is accused of anything here, and she has not started the job.' } }
]);
