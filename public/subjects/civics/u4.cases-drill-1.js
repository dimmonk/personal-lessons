// Civics, Unit Four: drill cases for the single question (one for each name). None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case and says why it fails.

FC.cases('civics', 'u4', [

  /* ---------- The question alone, on a new case ---------- */

  { id: 'e-p-lab', use: 'drill', tier: 'clean', setting: 'work', topic: 'licenses for laboratories',
    text: "A law Congress passed says every laboratory that handles dangerous germs must be licensed. The federal health office published its license form on Monday and said its inspectors would visit each laboratory within a year.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { E1: 'The federal health office published its license form on Monday' },
    reason: { E1: 'The license is the law’s own idea, and the office is making it work: {cue:E1}. The visits by inspectors are the next step of the same thing.' },
    not: { outcome: 'beyondpres', why: 'The office demands nothing that the law does not already require. It only supplies the form.' } },

  { id: 'e-p-parking', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a fee for parking in national parks',
    text: "The federal parks office announced that every visitor to a national park must now pay $12 to park a car. Congress has passed no law that lets the office charge for parking, and the law about the parks says nothing about it.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { E1: 'Congress has passed no law that lets the office charge for parking' },
    reason: { E1: 'A new fee falls on every visitor, and the story says that nothing stands behind it: {cue:E1}.' },
    not: { outcome: 'execute', why: 'There is no law about parking for the office to carry out. A fee set by the office alone is a demand with no law behind it.' } },

  { id: 'e-p-patrol', use: 'drill', tier: 'clean', setting: 'community', topic: 'a winter patrol on the northern coast',
    text: "The President told the navy to send two ships to patrol the northern coast through the winter, and named the admiral who would lead them.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { E1: 'The President told the navy to send two ships to patrol the northern coast through the winter' },
    reason: { E1: 'The President tells part of the armed forces where to go and what to do: {cue:E1}. Choosing the admiral who leads them is part of the same thing.' },
    not: { outcome: 'diplomacy', why: 'Nobody from another country is met or negotiated with. The order goes to the navy, and the coast is the country’s own.' } },

  { id: 'e-p-diplomas', use: 'drill', tier: 'clean', setting: 'learning', topic: 'recognizing school diplomas',
    text: "The Secretary of State, speaking for the President, met the education minister of Brasland to agree how each country will recognize the other’s school diplomas.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { E1: 'The Secretary of State, speaking for the President, met the education minister of Brasland' },
    reason: { E1: 'An official speaking for the President is dealing with another country’s government: {cue:E1}. The two are agreeing how something will work between their countries.' },
    not: { outcome: 'execute', why: 'The official is not putting a law Congress passed into practice. The official is meeting another country’s minister.' } },

  { id: 'e-p-holiday', use: 'drill', tier: 'clean', setting: 'work', topic: 'a fourth week of paid holiday',
    text: "Congress passed a bill that gives every federal worker a fourth week of paid holiday. The President would not sign it, and on Friday sent it back to Congress with a letter of objections.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { E1: 'The President would not sign it, and on Friday sent it back to Congress with a letter of objections' },
    reason: { E1: 'The bill has passed, and what the President decides is the refusal: {cue:E1}.' },
    not: { outcome: 'execute', why: 'The bill is not a law that an office is carrying out. The President is refusing it.' } },

  { id: 'e-p-nurse', use: 'drill', tier: 'clean', setting: 'health', topic: 'a false form for a health plan',
    text: "A nurse was convicted in a federal court of lying on a form for a federal health plan. After she had served a month of her sentence, the President forgave the crime, and she was released that day.",
    outcome: 'pardon', route: { D1: ['president'], E1: ['forgive'] },
    cues: { E1: 'the President forgave the crime, and she was released that day' },
    reason: { E1: 'The President’s act comes after a federal court has found her guilty: {cue:E1}. It lifts what is left of her sentence.' },
    not: { outcome: 'veto', why: 'No bill is in the story. The President is acting on a person, and on a crime a court has already judged.' } }
]);
