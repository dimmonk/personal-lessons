// Political Ideologies, Unit Two: cases shown inside cards, part one (the word for the unit, Social democracy, Class politics
// with nothing attached, Democratic socialism, and the first two look-alike pairs).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// Every text here is invented. No person, party, firm, town or country is real, and no text says what any real person believes.
// Every case in this unit has the first answer "working people, against those who own the businesses", so route.D1 is always 'class'.
// cues[STEP] is the exact phrase in the text that decides that step (or a list of phrases); where the right answer is "The text
// does not say", the marked words are the words where a plan would be, and what stands there instead.

FC.cases('ideology', 'u2', [

  /* ---------- The word the unit leans on (shown by the term card; asked of nothing) ---------- */
  { id: 'c-term-bakery', use: 'teach', tier: 'clean', setting: 'work', topic: 'the sums of a bakery', name: 'The bakery’s sums',
    text: "Millbrook Bakery pays each of its eight bakers £80 a day. In one day a baker makes bread that sells for £128, once the cost of the flour and of running the ovens has been taken off. After the bakers are paid, the owner, Dana, keeps the £48 that is left over." },

  /* ---------- Social democracy ---------- */
  { id: 'c-sd-warehouse', use: 'teach', tier: 'clean', setting: 'work', topic: 'a pay floor in a warehouse', name: 'The warehouse leaflet',
    text: "From a leaflet by the Lowfield warehouse staff association: 'The people who own the warehouses make their money from our work, and they keep most of it. We do not ask to take the warehouses from them. We ask for a law that puts a floor under pay, and for a tax on the owners' profits that pays for sick pay and pensions, so that the people who do the work get a fair share.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: "We do not ask to take the warehouses from them. We ask for a law that puts a floor under pay, and for a tax on the owners' profits that pays for sick pay and pensions" } },

  { id: 'c-sd-ward', use: 'teach', tier: 'clean', setting: 'health', topic: 'cleaners and a hospital contract', name: 'The hospital cleaners',
    text: "At the Alder Park hospital the cleaners' spokesperson told the town meeting: 'The company that owns our cleaning contract takes a large profit while we scrub floors for the least the law allows. We are not asking to own the company. We are asking the government to tax its profits and use the money to pay for childcare for everyone who works nights.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: 'We are not asking to own the company. We are asking the government to tax its profits and use the money to pay for childcare for everyone who works nights' },
    segments: [
      { text: 'The company that owns our cleaning contract takes a large profit while we scrub floors for the least the law allows', note: 'That names the owners and what they take. It tells you who the text is against. It does not say what the text wants done with the business.' },
      { text: 'We are not asking to own the company. We are asking the government to tax its profits and use the money to pay for childcare for everyone who works nights' },
      { text: "told the town meeting", note: 'That says where the words were spoken. It says nothing about the business.' }
    ] },

  { id: 'c-sd-bank', use: 'check', tier: 'clean', setting: 'money', topic: 'bank tellers and a training tax', name: 'Bank tellers and a training tax',
    text: "The tellers at the Marlow Credit Bank have written to the newspaper: 'The bank's shareholders collect the interest and the tellers collect the complaints. We do not want the bank taken from its shareholders. We want a law that sets a minimum wage, and a tax on the bank's profits to pay for training that every worker in the county can use.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: "We do not want the bank taken from its shareholders. We want a law that sets a minimum wage, and a tax on the bank's profits to pay for training that every worker in the county can use" },
    segments: [
      { text: "The bank's shareholders collect the interest and the tellers collect the complaints", note: 'That names the owners and the workers. It does not say what the text wants done with the bank.' },
      { text: "We do not want the bank taken from its shareholders", note: 'That says what the text does not want. The shareholders keep the bank. It is half of what you point to. The other half is what the text asks for in its place.' },
      { text: "We want a law that sets a minimum wage, and a tax on the bank's profits to pay for training that every worker in the county can use" }
    ],
    reason: { C1: 'The words are {cue:C1}: the shareholders keep the bank, and a tax and a law are asked for to even out what people get.' } },

  /* ---------- Class politics with nothing attached ---------- */
  { id: 'c-co-laundry', use: 'teach', tier: 'clean', setting: 'work', topic: 'a notice at a laundry', name: 'The laundry notice',
    text: "A notice pinned up at the Brightwell laundry: 'The women who work the presses are paid by the hour, and the owners are paid from what the presses make. We are on the side of the people who work. Come to the meeting on Thursday and stand with us.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'Come to the meeting on Thursday and stand with us' } },

  { id: 'c-co-canteen', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'a post by school canteen staff', name: 'The canteen post',
    text: "A post by the Kingsway school canteen staff: 'The company that owns the canteen contract gets richer every year, and the people who cook for the children do not. Owners and workers do not want the same things, and we are with the workers. Share this if you are too.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'Share this if you are too' },
    segments: [
      { text: 'The company that owns the canteen contract gets richer every year, and the people who cook for the children do not', note: 'That names the owners and the workers and says what is wrong. It is not a plan for the business.' },
      { text: 'Owners and workers do not want the same things, and we are with the workers', note: 'That is the side the text takes. It answers who the text is for. It says nothing about what should happen to the business.' },
      { text: 'Share this if you are too' }
    ] },

  { id: 'c-co-buses', use: 'check', tier: 'clean', setting: 'town', topic: 'bus drivers and a bonus', name: 'Bus drivers and a bonus',
    text: "Drivers at the Thornley bus company have written to the town: 'The owners paid themselves a bonus while we were told there was no money for a raise. We drive, they own, and we are on the side of the drivers. Please come and stand with us outside the depot on Friday.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'Please come and stand with us outside the depot on Friday' },
    reason: { C1: 'The text says which side it is on and asks people to come: {cue:C1}. Where a plan for the buses would be, there is only an invitation. It says nothing about who should own the company, about taxes or services, or about how the owners gain.' } },

  /* ---------- Democratic socialism ---------- */
  { id: 'c-dm-ferry', use: 'teach', tier: 'clean', setting: 'town', topic: 'a ferry service for all riders', name: 'The ferry crews',
    text: "From a campaign leaflet by the Westmarch ferry crews: 'The ferry company's owners take the fares, and the crews take the risks. We say the ferries should belong to the public, run by the government for everyone. We will ask the voters to put a government in place that will do it.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { C1: 'the ferries should belong to the public, run by the government for everyone', C2: 'We will ask the voters to put a government in place that will do it' } },

  { id: 'c-dm-signal', use: 'teach', tier: 'clean', setting: 'work', topic: 'a motion by railway signal staff', name: 'The signal workers',
    text: "A branch motion of the Eastern signal workers: 'The people who run the railway for wages and the people who own it do not want the same things, and we stand with the first. The railway should pass into public ownership, so that it is run for everyone and not for its shareholders.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['none'] },
    cues: { C1: 'The railway should pass into public ownership, so that it is run for everyone and not for its shareholders' },
    segments: [
      { text: 'The people who run the railway for wages and the people who own it do not want the same things, and we stand with the first', note: 'That names the two groups and the side the text takes. It does not say what should happen to the railway.' },
      { text: 'The railway should pass into public ownership, so that it is run for everyone and not for its shareholders' },
      { text: 'A branch motion of the Eastern signal workers', note: 'That says who wrote it. It says nothing about the railway.' }
    ] },

  { id: 'c-dm-bank', use: 'check', tier: 'clean', setting: 'money', topic: 'a savings bank in common ownership', name: 'A savings bank in common ownership',
    text: "The tellers at the Harrow Savings Bank say: 'The bank's shareholders gather the interest and the tellers gather the complaints. We side with the tellers. Parliament should pass a law that brings the bank into public ownership, to be run for everyone.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { C1: 'brings the bank into public ownership, to be run for everyone', C2: 'Parliament should pass a law' },
    reason: { C1: 'The bank is to pass out of its shareholders’ hands: {cue:C1}. That is a handover, not a tax on owners who keep the bank.' } },

  /* ---------- The look-alike pair: Social democracy and Class politics with nothing attached (the same dairy) ---------- */
  { id: 'c-lk-sdco-sd', use: 'teach', tier: 'clean', setting: 'work', topic: 'a dairy and a minimum wage', name: 'A dairy and a minimum wage',
    text: "Milkers at the Greenvale dairy have put out a statement: 'The family that owns the dairy took a large profit this year, and we have had no raise in four years. We are on the side of the people who do the milking. We would leave the dairy with its owners, but set a minimum wage that rises with prices, and tax its profits to pay for free training for every worker.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: 'We would leave the dairy with its owners, but set a minimum wage that rises with prices, and tax its profits to pay for free training for every worker' } },

  { id: 'c-lk-sdco-co', use: 'teach', tier: 'clean', setting: 'work', topic: 'a dairy and a petition', name: 'A dairy and a petition',
    text: "Milkers at the Greenvale dairy have put out a statement: 'The family that owns the dairy took a large profit this year, and we have had no raise in four years. We are on the side of the people who do the milking. Come to the gate on Monday and tell the owners we are not alone.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'Come to the gate on Monday and tell the owners we are not alone' } },

  /* ---------- The look-alike pair: Social democracy and Democratic socialism (the same hospitals) ---------- */
  { id: 'c-lk-sddm-sd', use: 'teach', tier: 'clean', setting: 'health', topic: 'private hospitals taxed for pensions', name: 'Private hospitals taxed for pensions',
    text: "Nurses at the Redmoor private hospitals say: 'The company that owns the hospitals takes its profit, and the nurses take the night shifts. We stand with the nurses against the owners. The hospitals can stay with their owners, as long as the government taxes their profits to pay for nurses' pensions and for training places.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: "The hospitals can stay with their owners, as long as the government taxes their profits to pay for nurses' pensions and for training places" } },

  { id: 'c-lk-sddm-dm', use: 'teach', tier: 'clean', setting: 'health', topic: 'private hospitals run for everyone', name: 'Private hospitals run for everyone',
    text: "Nurses at the Redmoor private hospitals say: 'The company that owns the hospitals takes its profit, and the nurses take the night shifts. We stand with the nurses against the owners. The hospitals should be taken from the company and run by the government for everyone.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['none'] },
    cues: { C1: 'The hospitals should be taken from the company and run by the government for everyone' } }
]);
