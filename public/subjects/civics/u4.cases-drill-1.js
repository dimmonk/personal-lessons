// Civics, Unit Four: drill cases for stages one and two. None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case and says why it fails.
// The first stage asks only this unit's question, so these cases carry marked words and a reason for it.

FC.cases('civics', 'u4', [

  /* ---------- Stage one: the answers are shown, the learner gives the name (clean cases, then varied) ---------- */
  { id: 'e-n-trees', use: 'drill', tier: 'clean', setting: 'community', topic: 'a grant for planting trees',
    text: "Congress passed a law that gives a grant to anyone who plants trees on bare land. On Friday the federal forestry office published the form an applicant fills in, and the photographs of the planted land that must come with it.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { E1: 'the federal forestry office published the form an applicant fills in, and the photographs of the planted land that must come with it' },
    reason: { E1: 'The office is turning a law into a form: {cue:E1}. The law that stands behind it is in the first sentence, and the office asks only for proof of the planting.' },
    not: { outcome: 'beyondpres', why: 'Nothing is demanded that the law does not allow. The law gives the grant, and the office only says how to apply for it.' } },

  { id: 'e-n-cups', use: 'drill', tier: 'clean', setting: 'health', topic: 'the size of drink cups',
    text: "The federal health office announced a rule that every restaurant in the country must stop serving drinks in cups larger than sixteen ounces. Congress has passed no law about the size of cups, and the office says it needs none.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { E1: 'Congress has passed no law about the size of cups' },
    reason: { E1: 'The rule bans something for every restaurant, and the case says what stands behind it: {cue:E1}. The office’s own word is all there is.' },
    not: { outcome: 'execute', why: 'An office that carries out a law stays inside a law Congress passed. The case says there is none about cups.' } },

  { id: 'e-n-troops', use: 'drill', tier: 'clean', setting: 'community', topic: 'tents and water for a storm-hit town',
    text: "A town in the south asked for help after a storm. The President ordered a company of soldiers and four trucks of tents and water to drive there on Thursday morning.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { E1: 'The President ordered a company of soldiers and four trucks of tents and water to drive there on Thursday morning' },
    reason: { E1: 'The President sends the armed forces somewhere: {cue:E1}. The soldiers obey, and no law is named.' },
    not: { outcome: 'diplomacy', why: 'The President is not meeting or negotiating with anyone from another country. The order goes to soldiers, and the town that asked is in the same country.' } },

  { id: 'e-n-summit', use: 'drill', tier: 'clean', setting: 'travel', topic: 'a bridge between two nations',
    text: "Early on Saturday the President met the leader of Vendria at a hotel in a third country. By evening they had agreed a plan to share the cost of a new bridge between their countries, and signed a statement saying so.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { E1: 'the President met the leader of Vendria at a hotel in a third country' },
    reason: { E1: 'The President is dealing with another country: {cue:E1}. They agree a plan and sign it, and nobody at home is ordered to do anything.' },
    not: { outcome: 'commander', why: 'Nobody in the armed forces is given an order. The two leaders settle something between their countries.' } },

  { id: 'e-n-stations', use: 'drill', tier: 'clean', setting: 'money', topic: 'a bill for new bus stations',
    text: "Congress passed a bill that sets aside a hundred million dollars for new bus stations in small towns. On Thursday the President returned the bill to Congress without a signature, with a letter that says the money is not needed.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { E1: 'the President returned the bill to Congress without a signature' },
    reason: { E1: 'Congress has finished with the bill, and the President decides what happens next: {cue:E1}. The letter gives the objections.' },
    not: { outcome: 'pardon', why: 'No one has been charged with a crime, and nobody is being forgiven. The President is acting on a bill.' } },

  { id: 'e-n-stamps', use: 'drill', tier: 'clean', setting: 'work', topic: 'copied stamps',
    text: "A woman was convicted in a federal court of selling stamps that she had copied. The judge gave her a fine of $8,000. On Wednesday the President signed a pardon for her, and the fine no longer has to be paid.",
    outcome: 'pardon', route: { D1: ['president'], E1: ['forgive'] },
    cues: { E1: 'the President signed a pardon for her, and the fine no longer has to be paid' },
    reason: { E1: 'A person was found guilty of a federal crime, and the President lifts the punishment: {cue:E1}. The judge’s decision came earlier. Nobody asks a judge anything now.' },
    not: { outcome: 'veto', why: 'No bill is in the case. The President is acting on a person who was found guilty, and not on a law Congress passed.' } },

  { id: 'e-n-lights', use: 'drill', tier: 'varied', setting: 'community', topic: 'a bill for street lights',
    text: "Congress passed a bill that pays for new street lights in every town with more than ten thousand people. The President thinks towns should pay for their own lights. On Monday the President wrote to Congress to say so, and sent the bill back without signing it.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { E1: 'sent the bill back without signing it' },
    reason: { E1: 'A bill is finished, and the President answers it: {cue:E1}. The President’s reason is in the letter, and the answer is a refusal.' },
    not: { outcome: 'execute', why: 'The bill is not yet a law in force, so there is nothing for an office to put into practice. The President is deciding whether it goes any further.' } },

  { id: 'e-n-dentists', use: 'drill', tier: 'varied', setting: 'health', topic: 'dentists’ records',
    text: "A law Congress passed says that every dentist who is paid by the federal health plan must keep a record of each visit for seven years. On Tuesday the office that runs the plan published the list of what each record must hold and the form for sending them in.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { E1: 'the office that runs the plan published the list of what each record must hold and the form for sending them in' },
    reason: { E1: 'The law came first, and the office now says how it is followed: {cue:E1}. The seven years are the law’s own number, and the office adds no demand of its own.' },
    not: { outcome: 'veto', why: 'The law has already been passed and is in force, so nobody is deciding whether to sign it. An office is putting it into practice.' } },

  /* ---------- Stage two: the question alone, on a new case ---------- */
  { id: 'e-p-lab', use: 'drill', tier: 'clean', setting: 'work', topic: 'licences for laboratories',
    text: "A law Congress passed says every laboratory that handles dangerous germs must be licensed. The federal health office published its licence form on Monday and said its inspectors would visit each laboratory within a year.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { E1: 'The federal health office published its licence form on Monday' },
    reason: { E1: 'The licence is the law’s own idea, and the office is making it work: {cue:E1}. The visits by inspectors are the next step of the same thing.' },
    not: { outcome: 'beyondpres', why: 'The office demands nothing that the law does not already require. It only supplies the form.' } },

  { id: 'e-p-parking', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a fee for parking in national parks',
    text: "The federal parks office announced that every visitor to a national park must now pay $12 to park a car. Congress has passed no law that lets the office charge for parking, and the law about the parks says nothing about it.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { E1: 'Congress has passed no law that lets the office charge for parking' },
    reason: { E1: 'A new fee falls on every visitor, and the case says that nothing stands behind it: {cue:E1}.' },
    not: { outcome: 'execute', why: 'There is no law about parking for the office to be putting into practice, so a fee set by the office alone is a demand with no law behind it.' } },

  { id: 'e-p-patrol', use: 'drill', tier: 'clean', setting: 'community', topic: 'a winter patrol on the northern coast',
    text: "The President told the navy to send two ships to patrol the northern coast through the winter, and named the admiral who would lead them.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { E1: 'The President told the navy to send two ships to patrol the northern coast through the winter' },
    reason: { E1: 'The President tells part of the armed forces where to go and what to do: {cue:E1}. Choosing the admiral who leads them is part of the same thing.' },
    not: { outcome: 'diplomacy', why: 'Nobody from another country is met or negotiated with. The order goes to the navy, and the coast is the country’s own.' } },

  { id: 'e-p-diplomas', use: 'drill', tier: 'clean', setting: 'learning', topic: 'recognising school diplomas',
    text: "The Secretary of State, speaking for the President, met the education minister of Brasland to agree how each country will recognise the other’s school diplomas.",
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
    not: { outcome: 'veto', why: 'No bill is in the case. The President is acting on a person, and on a crime that has already been judged.' } }
]);
