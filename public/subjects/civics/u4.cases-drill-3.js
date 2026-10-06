// Civics, Unit Four: drill cases for the whole route (no help), clean cases and then varied ones.
// Every question is asked here, starting with the first question of the key, so every case carries marked words and a
// reason for that question too (D1).

FC.cases('civics', 'u4', [

  /* ---------- Clean ---------- */

  { id: 'e-r-lenses', use: 'drill', tier: 'clean', setting: 'health', topic: 'prescriptions for contact lenses',
    text: "Congress passed a law that says contact lenses may be sold only with a doctor’s prescription. On Wednesday the federal medicines office published what a prescription for lenses must show and how long it stays valid.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { D1: 'the federal medicines office published what a prescription for lenses must show and how long it stays valid',
            E1: ['Congress passed a law that says contact lenses may be sold only with a doctor’s prescription', 'published what a prescription for lenses must show'] },
    reason: { D1: 'The last decision in the case is an office’s: {cue:D1}. It belongs to the government of the whole country, and it is not lawmakers, a judge or a state.',
              E1: 'A law stands behind it, and the office fills in the rest: {cue:E1}. The prescription is the law’s own idea, and the office adds no new demand.' },
    not: { outcome: 'beyondpres', why: 'The office demands nothing that the law does not already require. It says only what a prescription must show.' } },

  { id: 'e-r-water', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'free water at the movie theater',
    text: "The President signed an executive order that every movie theater in the country must give each customer a free glass of water. Congress has passed no law about cinemas, and the order names none.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { D1: 'The President signed an executive order that every movie theater in the country must give each customer a free glass of water', E1: 'Congress has passed no law about cinemas' },
    reason: { D1: 'The last decision in the case is the President’s: {cue:D1}. Nobody votes, and no judge has been asked anything.',
              E1: 'The order demands something of every movie theater, and the case says what stands behind it: {cue:E1}. Nothing does.' },
    not: { outcome: 'execute', why: 'There is no law about cinemas for the order to be carrying out, and the order names none.' } },

  { id: 'e-r-flight', use: 'drill', tier: 'clean', setting: 'health', topic: 'medicine flown to an island',
    text: "A cargo plane carrying medicine for a remote island off the country’s coast has been grounded by a fault. On Sunday the President ordered an air force transport plane to fly the medicine to the island, and to land there the same evening.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { D1: 'the President ordered an air force transport plane to fly the medicine to the island', E1: 'the President ordered an air force transport plane to fly the medicine' },
    reason: { D1: 'The last decision in the case is the President’s: {cue:D1}. Nobody votes, and no judge appears.',
              E1: 'The order goes to part of the armed forces: {cue:E1}. The plane is told where to go and what to do, and no law is named.' },
    not: { outcome: 'diplomacy', why: 'Nobody from another country is met or negotiated with. The island is the country’s own, and the order goes to the air force.' } },

  { id: 'e-r-minister', use: 'drill', tier: 'clean', setting: 'world', topic: 'a shared river and Zanta',
    text: "The Secretary of State, acting for the President, flew to the capital of Zanta and spent three days with its ministers working out how the two countries will share a river. On Thursday they signed a river agreement.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { D1: 'The Secretary of State, acting for the President, flew to the capital of Zanta', E1: 'spent three days with its ministers working out how the two countries will share a river' },
    reason: { D1: 'The last decision is made by an official acting for the President: {cue:D1}. That official belongs to the government of the whole country.',
              E1: 'Two countries’ governments settle something between them: {cue:E1}. The official sits down with another country’s government for the President, and they sign.' },
    not: { outcome: 'commander', why: 'Nobody in the armed forces is given an order. The two governments work out how a river will be shared.' } },

  { id: 'e-r-holiday', use: 'drill', tier: 'clean', setting: 'work', topic: 'a new day off for government workers',
    text: "Congress passed a bill that makes the first Monday in May a day off for all federal workers. The bill reached the President on Tuesday. The President refused to sign it and sent it back to Congress with a note of objections.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { D1: 'The President refused to sign it and sent it back to Congress with a note of objections', E1: 'refused to sign it and sent it back to Congress' },
    reason: { D1: 'The last decision in the case is the President’s: {cue:D1}. The vote in Congress was earlier, and it is how the matter got here.',
              E1: 'The bill has been passed, and what the President decides is the refusal: {cue:E1}.' },
    not: { outcome: 'pardon', why: 'No one has been charged with a crime. The President is acting on a bill, and not on a person.' } },

  { id: 'e-r-embezzle', use: 'drill', tier: 'clean', setting: 'money', topic: 'money taken from a national program',
    text: "A man was convicted in a federal court of taking money from a federal program he was running. He had served two of five years when the President signed a paper that forgives the crime and ends the rest of the sentence.",
    outcome: 'pardon', route: { D1: ['president'], E1: ['forgive'] },
    cues: { D1: 'the President signed a paper that forgives the crime and ends the rest of the sentence', E1: 'the President signed a paper that forgives the crime' },
    reason: { D1: 'The last decision in the case is the President’s: {cue:D1}. A federal court decided earlier, and it is not being asked anything now.',
              E1: 'A federal crime was judged, and the President lifts what is left of the punishment: {cue:E1}.' },
    not: { outcome: 'veto', why: 'No bill is in the case. The President is acting on a man who was found guilty of a crime.' } },

  /* ---------- Varied ---------- */

  { id: 'e-r-absence', use: 'drill', tier: 'varied', setting: 'learning', topic: 'reporting students’ absence',
    text: "A law Congress passed says every school that gets federal money must report how many of its students are absent each week. The federal education office put out the reporting form in August and told schools to send it in each Friday from September.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { D1: 'The federal education office put out the reporting form in August',
            E1: ['A law Congress passed says every school that gets federal money must report how many of its students are absent each week', 'told schools to send it in each Friday from September'] },
    reason: { D1: 'The last decision is an office’s: {cue:D1}. It is a federal office, and no vote or judge comes after it.',
              E1: 'The law asks for the report, and the office says how and when to send it: {cue:E1}. It adds nothing the law does not ask for.' },
    not: { outcome: 'veto', why: 'The law is already passed and in force, so nobody is deciding whether to sign it. An office is making it work.' } },

  { id: 'e-r-bridge', use: 'drill', tier: 'varied', setting: 'community', topic: 'a bill for a bridge',
    text: "Congress passed a bill to build a bridge across the Dune River, with a hundred million dollars for it. The President said the bridge was not needed, would not sign the bill, and returned it to Congress on Monday.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { D1: 'would not sign the bill, and returned it to Congress on Monday', E1: 'would not sign the bill, and returned it to Congress' },
    reason: { D1: 'The last decision in the case is the President’s: {cue:D1}.',
              E1: 'The bill has passed, and the President answers it with a refusal: {cue:E1}. The money in the bill is why the President objects, and it is not what the President does.' },
    not: { outcome: 'execute', why: 'The bridge has not been built under any law. The bill has not become one, and the President is refusing it.' } }
]);
