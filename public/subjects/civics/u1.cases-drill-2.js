// Civics, Unit One: drill cases, second part: the second stage on varied cases (the case ends with a request, or the
// part of government is named in an unusual way), then cases whose story misleads. Field guide: see u1.cases-drill-1.js.
// echo names a teaching case of a DIFFERENT family whose story this one is built to bring back, so that the
// second look ("does it look like a case you know?") is practiced where the likeness points the wrong way.
// The first question has no tie-break, so none of these cases carries `also`: each has one last decision.

FC.cases('civics', 'u1', [

  { id: 'g-bakers', use: 'drill', tier: 'varied', setting: 'world', topic: 'a tax on imported wheat',
    text: "Bakers in the town of Fenmere say flour costs too much because of a tax on imported wheat. A bakers’ group has written to the Senate asking it to vote on ending that tax.",
    route: { D1: ['congress'] },
    cues: { D1: 'has written to the Senate asking it to vote on ending that tax' },
    reason: { D1: 'The case ends with a request, and it is made to the Senate: {cue:D1}. The vote has not happened, but it is the decision the case asks for.' },
    not: { outcome: 'states', why: 'The bakers live in a town, and a town can sound like the answer. But the town is not who is asked. The group wrote to the Senate.' } },

  { id: 'g-pardon', use: 'drill', tier: 'varied', setting: 'community', topic: 'a prisoner is forgiven',
    text: "Ms. Reyes was convicted of a federal crime and was serving a two-year sentence. On Friday the President pardoned her, forgiving the crime, and she left prison.",
    route: { D1: ['president'] },
    cues: { D1: 'the President pardoned her, forgiving the crime, and she left prison' },
    reason: { D1: 'The last decision is the President’s: {cue:D1}. The conviction came before it, and is how the matter reached the President.' },
    not: { outcome: 'courts', why: 'Words like convicted and sentence belong to a courtroom, and they pull toward a judge. But the last thing in the case is the President forgiving the crime, and no judge is deciding anything.' } },

  { id: 'g-residents', use: 'drill', tier: 'varied', setting: 'community', topic: 'a factory upstream',
    text: "Residents of a river town say the factory upstream pollutes their water. They have not asked the town or the state to act. They have asked a judge to order the factory to stop.",
    route: { D1: ['courts'] },
    cues: { D1: 'They have asked a judge to order the factory to stop' },
    reason: { D1: 'The case ends with a request to a judge: {cue:D1}. A town and a state are named only to say they were not asked.' },
    not: { outcome: 'states', why: 'The town and the state are in the story, and a case about water can seem a matter for them. But the case says plainly that neither was asked. The request is to a judge.' } },

  { id: 'g-curfew', use: 'drill', tier: 'varied', setting: 'community', topic: 'a curfew for teenagers',
    text: "Parents in Dalby say teenagers cause trouble in the town center at night. They have asked the Dalby town council to set a curfew for anyone under sixteen.",
    route: { D1: ['states'] },
    cues: { D1: 'asked the Dalby town council to set a curfew for anyone under sixteen' },
    reason: { D1: 'The case ends with a request, and it is made to a town’s council: {cue:D1}. The council has not voted, but a decision by it is what the case asks for.' },
    not: { outcome: 'courts', why: 'People are asking someone to decide, and that can sound like going to court. But the people asked are the town’s own council, who make rules for the town. No judge appears.' } },

  { id: 'g-judgecharge', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a judge is accused of lying',
    echo: 'c-heater',
    text: "A federal judge is accused of lying about his finances. On Tuesday the House voted to charge him, and the Senate has set a trial for next week.",
    route: { D1: ['congress'] },
    cues: { D1: ['the House voted to charge him', 'the Senate has set a trial for next week'] },
    reason: { D1: 'The decisions in the case are votes by lawmakers: {cue:D1}. The man accused is a judge, and a trial is coming. But it is held in the Senate, and it is the senators who will decide.' },
    not: { outcome: 'courts', why: 'A judge and a trial are both in the story, and both pull toward a court. But the judge is the one accused, not the one deciding, and the trial is the Senate’s.' },
    wouldChange: 'If the man had been charged with a crime in an ordinary court, and the case ended with a judge ruling on it, the answer would be {a:D1.courts}.' },

  { id: 'g-veto', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'a school breakfast bill is sent back',
    echo: 'c-bicycle',
    text: "The House and the Senate passed a bill that gives every public school a free breakfast program. On Monday the President refused to sign it, and sent it back to Congress with a note listing her objections.",
    route: { D1: ['president'] },
    cues: { D1: 'the President refused to sign it, and sent it back to Congress with a note listing her objections' },
    reason: { D1: 'The last decision is the President’s: {cue:D1}. The votes in the House and the Senate came first, and are how the matter reached her. The case stops at her refusal.' },
    not: { outcome: 'congress', why: 'Both chambers voted, and votes are the lawmakers’ work. But the votes are over, and the case ends with the President’s refusal, which is a decision of her own.' },
    wouldChange: 'If the case went on to say that both chambers had voted again to put the bill into law over her objections, the last decision would be the lawmakers’, and the answer would be {a:D1.congress}.' },

  { id: 'g-foodtruck', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a food-truck rule is put to a judge',
    echo: 'c-market',
    text: "The town of Ashby passed a rule that no food truck may park within 500 feet of a restaurant. A food-truck owner who was fined has asked a judge to decide whether the town may do that.",
    route: { D1: ['courts'] },
    cues: { D1: 'has asked a judge to decide whether the town may do that' },
    reason: { D1: 'The case ends with a request to a judge: {cue:D1}. The town’s rule is how the matter reached the judge, and the town is named first, but the town is not the one being asked.' },
    not: { outcome: 'states', why: 'A town made the rule, and the story opens on the town. But the last decision the case asks for is a judge’s.' } },

  { id: 'g-noiserewrite', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a noise rule is rewritten',
    echo: 'x-statejudge',
    text: "Last month a judge ruled that the Orrin noise rule was too vague to enforce. On Tuesday the Orrin town council voted to rewrite the rule with exact hours.",
    route: { D1: ['states'] },
    cues: { D1: 'the Orrin town council voted to rewrite the rule with exact hours' },
    reason: { D1: 'The last decision is a vote by a town’s council: {cue:D1}. The judge’s ruling came earlier, and is how the matter reached the council.' },
    not: { outcome: 'courts', why: 'A judge ruled, and the ruling is the first thing in the story. But it is over. The case ends with the council deciding what the rule will say.' } }
]);
