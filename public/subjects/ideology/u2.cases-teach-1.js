// Political Ideologies, Unit Two: cases shown inside cards, part one (Social democracy, Class politics with nothing attached,
// Democratic socialism, and the first two look-alike pairs).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// Every text here is invented. No person, party, firm, town or country is real, and no text says what any real person believes.
// Every case in this unit has the first answer "working people, against those who own the businesses", so route.D1 is always 'class'.
// cues[STEP] is the exact phrase in the text that decides that step (or a list of phrases); where the right answer is "The text
// does not say", the marked words are the words where a plan would be, and what stands there instead.

FC.cases('ideology', 'u2', [

  { id: 'c-sd-warehouse', use: 'teach', tier: 'clean', setting: 'work', topic: 'a pay floor in a warehouse', name: 'The warehouse leaflet',
    text: "From a leaflet by the Lowfield warehouse staff association: 'The people who own the warehouses make their money from our work, and they keep most of it. We do not ask to take the warehouses from them. We ask for a law that puts a floor under pay, and for a tax on the owners' profits that pays for sick pay and pensions, so that the people who do the work get a fair share.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: "We do not ask to take the warehouses from them. We ask for a law that puts a floor under pay, and for a tax on the owners' profits that pays for sick pay and pensions" } },

  { id: 'c-sd-bank', use: 'check', tier: 'clean', setting: 'money', topic: 'bank tellers and a training tax', name: 'Bank tellers and a training tax',
    text: "The tellers at the Marlow Credit Bank have written to the newspaper: 'The bank's shareholders collect the interest and the tellers collect the complaints. We do not want the bank taken from its shareholders. We want a law that sets a minimum wage, and a tax on the bank's profits to pay for training that every worker in the county can use.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: "We do not want the bank taken from its shareholders. We want a law that sets a minimum wage, and a tax on the bank's profits to pay for training that every worker in the county can use" },
    segments: [
      { text: "The bank's shareholders collect the interest and the tellers collect the complaints", note: 'That names the owners and the workers. It does not say what to do about the bank.' },
      { text: "We do not want the bank taken from its shareholders", note: 'That is half of it: the shareholders keep the bank. You also need what the text asks for instead.' },
      { text: "We want a law that sets a minimum wage, and a tax on the bank's profits to pay for training that every worker in the county can use" }
    ],
    reason: { C1: 'These words say the shareholders keep the bank, and ask for a tax and a law to share things out more fairly.' } },

  { id: 'c-co-laundry', use: 'teach', tier: 'clean', setting: 'work', topic: 'a notice at a laundry', name: 'The laundry notice',
    text: "A notice pinned up at the Brightwell laundry: 'The women who work the presses are paid by the hour, and the owners are paid from what the presses make. We are on the side of the people who work. Come to the meeting on Thursday and stand with us.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'Come to the meeting on Thursday and stand with us' } },

  { id: 'c-co-buses', use: 'check', tier: 'clean', setting: 'town', topic: 'bus drivers and a bonus', name: 'Bus drivers and a bonus',
    text: "Drivers at the Thornley bus company have written to the town: 'The owners paid themselves a bonus while we were told there was no money for a raise. We drive, they own, and we are on the side of the drivers. Please come and stand with us outside the depot on Friday.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'Please come and stand with us outside the depot on Friday' },
    reason: { C1: 'Where a plan for the buses would be, there is only an invitation: {cue:C1}. It says nothing about who should own the company, about taxes, or about how the owners gain.' } },

  { id: 'c-dm-ferry', use: 'teach', tier: 'clean', setting: 'town', topic: 'a ferry service for all riders', name: 'The ferry crews',
    text: "From a campaign leaflet by the Westmarch ferry crews: 'The ferry company's owners take the fares, and the crews take the risks. We say the ferries should belong to the public, run by the government for everyone. We will ask the voters to put a government in place that will do it.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { C1: 'the ferries should belong to the public, run by the government for everyone', C2: 'We will ask the voters to put a government in place that will do it' } },

  { id: 'c-dm-bank', use: 'check', tier: 'clean', setting: 'money', topic: 'a savings bank in common ownership', name: 'A savings bank in common ownership',
    text: "The tellers at the Harrow Savings Bank say: 'The bank's shareholders gather the interest and the tellers gather the complaints. We side with the tellers. Parliament should pass a law that brings the bank into public ownership, to be run for everyone.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { C1: 'brings the bank into public ownership, to be run for everyone', C2: 'Parliament should pass a law' },
    reason: { C1: 'The bank is to pass out of its shareholders’ hands: {cue:C1}. That is a handover, not a tax.' } },

  { id: 'c-lk-sdco-sd', use: 'teach', tier: 'clean', setting: 'work', topic: 'a dairy and a minimum wage', name: 'A dairy and a minimum wage',
    text: "Milkers at the Greenvale dairy have put out a statement: 'The family that owns the dairy took a large profit this year, and we have had no raise in four years. We are on the side of the people who do the milking. We would leave the dairy with its owners, but set a minimum wage that rises with prices, and tax its profits to pay for free training for every worker.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: 'We would leave the dairy with its owners, but set a minimum wage that rises with prices, and tax its profits to pay for free training for every worker' } },

  { id: 'c-lk-sdco-co', use: 'teach', tier: 'clean', setting: 'work', topic: 'a dairy and a petition', name: 'A dairy and a petition',
    text: "Milkers at the Greenvale dairy have put out a statement: 'The family that owns the dairy took a large profit this year, and we have had no raise in four years. We are on the side of the people who do the milking. Come to the gate on Monday and tell the owners we are not alone.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'Come to the gate on Monday and tell the owners we are not alone' } },

  { id: 'c-lk-sddm-sd', use: 'teach', tier: 'clean', setting: 'health', topic: 'private hospitals taxed for pensions', name: 'Private hospitals taxed for pensions',
    text: "Nurses at the Redmoor private hospitals say: 'The company that owns the hospitals takes its profit, and the nurses take the night shifts. We stand with the nurses against the owners. The hospitals can stay with their owners, as long as the government taxes their profits to pay for nurses' pensions and for training places.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: "The hospitals can stay with their owners, as long as the government taxes their profits to pay for nurses' pensions and for training places" } },

  { id: 'c-lk-sddm-dm', use: 'teach', tier: 'clean', setting: 'health', topic: 'private hospitals run for everyone', name: 'Private hospitals run for everyone',
    text: "Nurses at the Redmoor private hospitals say: 'The company that owns the hospitals takes its profit, and the nurses take the night shifts. We stand with the nurses against the owners. The hospitals should be taken from the company and run by the government for everyone.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['none'] },
    cues: { C1: 'The hospitals should be taken from the company and run by the government for everyone' } }
]);
