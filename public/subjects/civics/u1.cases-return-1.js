// Civics, Unit One: fresh cases held back for later days (lesson standard E9, V44).
// Two for each family: one for each scheduled return. A family that is due comes back as a story the learner has
// not seen, beside a story of the family they most often take it for. Field guide: see u1.cases-drill-1.js.
// These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('civics', 'u1', [

  { id: 'g-ret-mail', use: 'return', tier: 'clean', setting: 'money', topic: 'money for rural mail routes',
    text: "Mail carriers say rural routes lose money. On Tuesday the Senate voted for a bill that gives the postal service $300 million to keep rural routes open.",
    route: { D1: ['congress'] },
    cues: { D1: 'the Senate voted for a bill that gives the postal service $300 million to keep rural routes open' },
    reason: { D1: 'The final call is a vote in the Senate: {cue:D1}. The postal service will spend the money, but the story ends at the vote that gave it.' },
    not: { outcome: 'president', why: 'The money goes to the postal service, a government office, and offices can sound like the answer. But the office decides nothing here: the Senate’s vote ends the story.' } },

  { id: 'g-ret-citizenship', use: 'return', tier: 'misleading', setting: 'immigration', topic: 'years to live here before applying',
    echo: 'c-seatbelt',
    text: "A bill would change how many years a person must live in the country before applying to become a citizen. The immigration service says it is ready to apply whatever rules come. On Thursday the Senate voted on the bill and passed it.",
    route: { D1: ['congress'] },
    cues: { D1: 'the Senate voted on the bill and passed it' },
    reason: { D1: 'The final call is a vote in the Senate: {cue:D1}. The immigration service is in the story only to say it will follow whatever the vote decides.' },
    not: { outcome: 'president', why: 'An office that handles citizenship is named, and offices can sound like the answer. But the office is only waiting, and the story ends on the Senate’s vote.' } },

  { id: 'g-ret-bridges', use: 'return', tier: 'clean', setting: 'travel', topic: 'two bridges closed to trucks',
    text: "Inspectors from the federal highway agency tested the steel in twelve bridges last week. On Monday the agency ordered two of the bridges closed to trucks until repairs are made.",
    route: { D1: ['president'] },
    cues: { D1: 'the agency ordered two of the bridges closed to trucks until repairs are made' },
    reason: { D1: 'An office made the final call: {cue:D1}. The inspectors’ tests came first, and the story ends with the order they led to.' },
    not: { outcome: 'states', why: 'Bridges stand in towns and states, which can pull toward the state. But this office belongs to the government of the whole country.' } },

  { id: 'g-ret-forms', use: 'return', tier: 'misleading', setting: 'work', topic: 'a form for workers’ hours',
    echo: 'c-bicycle',
    text: "A law passed last year says that every employer must keep a record of the hours its workers work. On Monday the federal labor agency published the form employers must use and the date by which they must start.",
    route: { D1: ['president'] },
    cues: { D1: 'the federal labor agency published the form employers must use and the date by which they must start' },
    reason: { D1: 'An office made the final call: {cue:D1}. The law came first and is only how the matter reached the office.' },
    not: { outcome: 'congress', why: 'A law is in the story, and laws come from the House and the Senate. But those votes are a year old, and the story ends with the office’s form.' } },

  { id: 'g-ret-window', use: 'return', tier: 'clean', setting: 'money', topic: 'a damaged shop window',
    text: "A shopkeeper says a delivery driver damaged her window and should pay for it. The driver says the window was already cracked. On Thursday a judge heard them both and ruled that the driver must pay half.",
    route: { D1: ['courts'] },
    cues: { D1: 'a judge heard them both and ruled that the driver must pay half' },
    reason: { D1: 'A judge made the final call: {cue:D1}. The shopkeeper and the driver are the two sides of a quarrel.' },
    not: { outcome: 'states', why: 'A broken shop window can sound like a matter for the town. But nobody here makes a rule: a judge settles a quarrel.' } },

  { id: 'g-ret-musicians', use: 'return', tier: 'misleading', setting: 'community', topic: 'a ban on street musicians',
    echo: 'c-market',
    text: "The city of Rennick passed a rule banning street musicians from the main square. A guitarist who was fined asked a judge on Tuesday to strike the rule down.",
    route: { D1: ['courts'] },
    cues: { D1: 'asked a judge on Tuesday to strike the rule down' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}. The city’s rule is only how the matter reached the judge.' },
    not: { outcome: 'states', why: 'A city made the rule and the story opens with it. But the call the story asks for is a judge’s.' } },

  { id: 'g-ret-speed', use: 'return', tier: 'clean', setting: 'travel', topic: 'a lower speed limit on country roads',
    text: "Drivers on country roads in the state of Orland have been speeding. On Monday the Orland state legislature voted to lower the speed limit on those roads to 45 miles an hour.",
    route: { D1: ['states'] },
    cues: { D1: 'the Orland state legislature voted to lower the speed limit on those roads to 45 miles an hour' },
    reason: { D1: 'A state’s lawmakers made the final call: {cue:D1}. The roads belong to that state.' },
    not: { outcome: 'congress', why: 'A vote on a speed limit is the sort of vote lawmakers take. But these lawmakers belong to one state and decide for its roads alone.' } },

  { id: 'g-ret-daycare', use: 'return', tier: 'misleading', setting: 'health', topic: 'a day-care center is closed',
    echo: 'c-seatbelt',
    text: "An inspector from the Calder state health department visited a day-care center on Monday and found two fire doors that would not open. The inspector ordered the center closed until the doors are fixed.",
    route: { D1: ['states'] },
    cues: { D1: ['An inspector from the Calder state health department', 'The inspector ordered the center closed until the doors are fixed'] },
    reason: { D1: 'A state’s own office made the final call: {cue:D1}. The inspector works for a state and is deciding about a center in that state.' },
    not: { outcome: 'president', why: 'Visiting a building and ordering it closed is just what an inspector from an office of the whole country does. But this inspector works for a state.' } }
]);
