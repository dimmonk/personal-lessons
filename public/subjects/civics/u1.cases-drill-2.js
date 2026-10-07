// Civics, Unit One: drill stories, second part: the second stage on varied stories (the story ends with a request, or the
// part of government is named in an unusual way), then stories whose opening misleads. Field guide: see u1.cases-drill-1.js.
// echo names a teaching case of a DIFFERENT family whose story this one is built to bring back, so that the
// second look ("does it look like a case you know?") is practiced where the likeness points the wrong way.
// The first question has no tie-break, so none of these cases carries `also`: each has one last decision.

FC.cases('civics', 'u1', [

  { id: 'g-bakers', use: 'drill', tier: 'varied', setting: 'world', topic: 'a tax on imported wheat',
    text: "Bakers in the town of Fenmere say flour costs too much because of a tax on imported wheat. A bakers’ group has written to the Senate asking it to vote on ending that tax.",
    route: { D1: ['congress'] },
    cues: { D1: 'has written to the Senate asking it to vote on ending that tax' },
    reason: { D1: 'The story ends with a request to the Senate: {cue:D1}. The vote has not happened, but it is the decision the story asks for.' },
    not: { outcome: 'states', why: 'The bakers live in a town, which can sound like the answer. But the group wrote to the Senate, not to the town.' } },

  { id: 'g-pardon', use: 'drill', tier: 'varied', setting: 'community', topic: 'a prisoner is forgiven',
    text: "Ms. Reyes was convicted of a federal crime and was serving a two-year sentence. On Friday the President pardoned her, forgiving the crime, and she left prison.",
    route: { D1: ['president'] },
    cues: { D1: 'the President pardoned her, forgiving the crime, and she left prison' },
    reason: { D1: 'The President made the final call: {cue:D1}. The conviction came first and is only how the matter reached the President.' },
    not: { outcome: 'courts', why: 'Words like “convicted” and “sentence” pull toward a judge. But the last thing that happens is the President forgiving the crime, and no judge decides anything.' } },

  { id: 'g-residents', use: 'drill', tier: 'varied', setting: 'community', topic: 'a factory upstream',
    text: "Residents of a river town say the factory upstream pollutes their water. They have not asked the town or the state to act. They have asked a judge to order the factory to stop.",
    route: { D1: ['courts'] },
    cues: { D1: 'They have asked a judge to order the factory to stop' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}. The town and the state are named only to say nobody asked them.' },
    not: { outcome: 'states', why: 'Polluted water can seem a matter for the town or the state. But the story says neither was asked: the request is to a judge.' } },

  { id: 'g-curfew', use: 'drill', tier: 'varied', setting: 'community', topic: 'a curfew for teenagers',
    text: "Parents in Dalby say teenagers cause trouble in the town center at night. They have asked the Dalby town council to set a curfew for anyone under sixteen.",
    route: { D1: ['states'] },
    cues: { D1: 'asked the Dalby town council to set a curfew for anyone under sixteen' },
    reason: { D1: 'The story ends with a request to a town council: {cue:D1}. The council has not voted, but its decision is what the story asks for.' },
    not: { outcome: 'courts', why: 'Asking someone to decide can sound like going to court. But the ones asked are the town’s own council, and no judge appears.' } },

  { id: 'g-judgecharge', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a judge is accused of lying',
    echo: 'c-heater',
    text: "A federal judge is accused of lying about his finances. On Tuesday the House voted to charge him, and the Senate has set a trial for next week.",
    route: { D1: ['congress'] },
    cues: { D1: ['the House voted to charge him', 'the Senate has set a trial for next week'] },
    reason: { D1: 'The decisions here are votes by lawmakers: {cue:D1}. The accused man is a judge and a trial is coming, but the trial is held in the Senate and the senators decide.' },
    not: { outcome: 'courts', why: 'A judge and a trial both pull toward a court. But the judge is the one accused, not the one deciding.' },
    wouldChange: 'If he had been charged with a crime in an ordinary court and the story ended with a judge ruling, the answer would be {a:D1.courts}.' },

  { id: 'g-veto', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'a school breakfast bill is sent back',
    echo: 'c-bicycle',
    text: "The House and the Senate passed a bill that gives every public school a free breakfast program. On Monday the President refused to sign it, and sent it back to Congress with a note listing her objections.",
    route: { D1: ['president'] },
    cues: { D1: 'the President refused to sign it, and sent it back to Congress with a note listing her objections' },
    reason: { D1: 'The President made the final call: {cue:D1}. The earlier votes are only how the bill reached her.' },
    not: { outcome: 'congress', why: 'Both chambers voted, and votes are the lawmakers’ work. But those votes are over, and the story ends on the President’s own refusal.' },
    wouldChange: 'If the story went on to say both chambers voted again and passed the bill over her objections, the final call would be the lawmakers’, so the answer would be {a:D1.congress}.' },

  { id: 'g-foodtruck', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a food-truck rule is put to a judge',
    echo: 'c-market',
    text: "The town of Ashby passed a rule that no food truck may park within 500 feet of a restaurant. A food-truck owner who was fined has asked a judge to decide whether the town may do that.",
    route: { D1: ['courts'] },
    cues: { D1: 'has asked a judge to decide whether the town may do that' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}. The town’s rule is only how the matter reached the judge.' },
    not: { outcome: 'states', why: 'A town made the rule and the story opens on the town. But the call the story asks for is a judge’s.' } },

  { id: 'g-noiserewrite', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a noise rule is rewritten',
    echo: 'x-statejudge',
    text: "Last month a judge ruled that the Orrin noise rule was too vague to enforce. On Tuesday the Orrin town council voted to rewrite the rule with exact hours.",
    route: { D1: ['states'] },
    cues: { D1: 'the Orrin town council voted to rewrite the rule with exact hours' },
    reason: { D1: 'A town council made the final call: {cue:D1}. The judge’s ruling came earlier and is only how the matter reached the council.' },
    not: { outcome: 'courts', why: 'A judge ruled, and that is the first thing in the story. But it is over, and the story ends with the council deciding what the rule will say.' } }
]);
