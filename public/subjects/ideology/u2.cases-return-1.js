// Political Ideologies, Unit Two: fresh cases kept back for later days (first file: Social democracy, Class politics with nothing
// attached, and the first of Democratic socialism). A name that is due returns as a case the learner has not seen, run as a whole
// route, so every case carries marked words and a reason for all three questions. Three cases for each name, one for each
// scheduled return (E9). All texts are invented.

FC.cases('ideology', 'u2', [

  /* ---------- Social democracy ---------- */
  { id: 'c-ret-sd1', use: 'return', tier: 'varied', setting: 'town', topic: 'taxi drivers and a cap on a licence fee',
    text: "From a flyer by the Marrick taxi drivers: 'The company that owns the taxi licences charges us a fortune to drive and keeps most of the fares, and we are with the drivers. The company can keep its licences. We ask for a law that caps what it can charge a driver, and a tax on its profits to pay for sick pay for every driver.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { D1: 'The company that owns the taxi licences charges us a fortune to drive and keeps most of the fares, and we are with the drivers', C1: 'The company can keep its licences. We ask for a law that caps what it can charge a driver, and a tax on its profits to pay for sick pay for every driver', C2: 'We ask for a law that caps what it can charge a driver' },
    reason: { D1: 'The text sets the drivers against the company that owns the licences, and stands with the drivers: {cue:D1}.',
              C1: 'The company keeps its licences, and a law and a tax are asked for: {cue:C1}.',
              C2: 'The text asks the government for a cap: {cue:C2}. It says nothing about how power is won or held, or about the government itself.' },
    not: { outcome: 'demsoc', why: 'The company keeps its licences. A text that asked for them to pass to the government would be {o:demsoc}.' } },

  { id: 'c-ret-sd2', use: 'return', tier: 'varied', setting: 'health', topic: 'agency nurses and a cap on what an agency keeps',
    text: "From a statement by the Cobb Hill nursing-agency staff: 'The agency that supplies us to the hospitals takes half of what the hospitals pay for each shift, and we stand with the nurses. We do not ask for the agency to be taken over. We ask for a law on what an agency may keep from each shift, and a tax on its profits to pay nurses' pensions. We will argue it at the election and accept the result.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['vote'] },
    cues: { D1: 'The agency that supplies us to the hospitals takes half of what the hospitals pay for each shift, and we stand with the nurses', C1: "We do not ask for the agency to be taken over. We ask for a law on what an agency may keep from each shift, and a tax on its profits to pay nurses' pensions", C2: 'We will argue it at the election and accept the result' },
    reason: { D1: 'The text sets the nurses against the agency that keeps half of each shift, and stands with the nurses: {cue:D1}.',
              C1: 'The agency is not to be taken over, and a law and a tax are asked for: {cue:C1}.',
              C2: 'The nurses will argue it at the election and accept the result: {cue:C2}.' },
    not: { outcome: 'classonly', why: 'The text goes past taking the nurses’ side to a plan: a law and a tax. A text that only took the side would be {o:classonly}.' } },

  { id: 'c-ret-sd3', use: 'return', tier: 'varied', setting: 'housing', topic: 'labourers on building sites and a week’s pay',
    text: "From a leaflet by the Westfold labourers: 'The firm that owns the building sites hires us by the day and keeps the rest of what the houses sell for, and we are with the labourers. It can keep its sites. We want a law that guarantees a labourer a week's pay, and a tax on its profits to pay for training places.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { D1: 'The firm that owns the building sites hires us by the day and keeps the rest of what the houses sell for, and we are with the labourers', C1: "It can keep its sites. We want a law that guarantees a labourer a week's pay, and a tax on its profits to pay for training places", C2: "We want a law that guarantees a labourer a week's pay" },
    reason: { D1: 'The text sets the labourers against the firm that owns the sites, and stands with the labourers: {cue:D1}.',
              C1: 'The firm keeps its sites, and a law and a tax are asked for: {cue:C1}.',
              C2: 'The text asks for a law on pay: {cue:C2}. It says nothing about power or the government itself.' },
    not: { outcome: 'demsoc', why: 'The firm keeps its sites. A text that asked for the sites to pass to the government would be {o:demsoc}.' } },

  /* ---------- Class politics with nothing attached ---------- */
  { id: 'c-ret-co1', use: 'return', tier: 'varied', setting: 'schooling', topic: 'school-bus drivers asking for a crowd at the gates',
    text: "A statement by the Ennis school-bus drivers: 'The firm that owns the school-bus contract pays us only for the hours the buses run, and it owns the garage we wait in. We are the drivers and they are the owners, and we know whose side we are on. Please come to the school gates at eight on Monday.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { D1: 'We are the drivers and they are the owners, and we know whose side we are on', C1: 'Please come to the school gates at eight on Monday', C2: 'come to the school gates at eight on Monday' },
    reason: { D1: 'The text sets the drivers against the owners and takes the drivers’ side: {cue:D1}.',
              C1: 'Where a plan for the contract would be, the text has an invitation: {cue:C1}. It says nothing about who should own the contract, about taxes, or about how the owners gain.',
              C2: 'The text asks the reader to come to a place: {cue:C2}. It says nothing about power or the government.' },
    not: { outcome: 'socdem', why: 'The text asks for no law and no tax. A text that asked for those, and left the firm its contract, would be {o:socdem}.' } },

  { id: 'c-ret-co2', use: 'return', tier: 'varied', setting: 'health', topic: 'dental nurses and a letter to the partners',
    text: "A message from the dental nurses at the Cray Street practice: 'The partners who own the practice have cut our pay twice and kept the fees. The nurses and the owners do not want the same things, and we are with the nurses. Tell your friends, and write to the partners.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { D1: 'The nurses and the owners do not want the same things, and we are with the nurses', C1: 'Tell your friends, and write to the partners', C2: 'write to the partners' },
    reason: { D1: 'The text sets the nurses against the owners and takes the nurses’ side: {cue:D1}.',
              C1: 'Where a plan for the practice would be, the text has a request to tell friends and write a letter: {cue:C1}. It says nothing about who should own the practice, or about taxes.',
              C2: 'The text asks the reader to write a letter: {cue:C2}. It says nothing about power or the government.' },
    not: { outcome: 'demsoc', why: 'The text says nothing about the practice passing out of the partners’ hands. A text that asked for that would be {o:demsoc}.' } },

  { id: 'c-ret-co3', use: 'return', tier: 'varied', setting: 'money', topic: 'warehouse pickers and a meeting at the van park',
    text: "A post from the Lyle Street warehouse pickers: 'The company that owns the warehouse is richer every year, and the pickers are not. Those who pick and those who own are on opposite sides, and we are on ours. Tell your shift friends about the meeting at the van park on Tuesday.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { D1: 'Those who pick and those who own are on opposite sides, and we are on ours', C1: 'Tell your shift friends about the meeting at the van park on Tuesday', C2: 'the meeting at the van park on Tuesday' },
    reason: { D1: 'The text sets the pickers against the owners and takes the pickers’ side: {cue:D1}.',
              C1: 'Where a plan for the warehouse would be, the text has a call to a meeting: {cue:C1}. It says nothing about who should own the warehouse, or how the company gains.',
              C2: 'The text names a meeting and nothing else: {cue:C2}. It says nothing about power or the government.' },
    not: { outcome: 'marx', why: 'The text says the company is richer every year, but it does not explain how any owner gains from the work. A text that did would be {o:marx}.' } },

  /* ---------- Democratic socialism ---------- */
  { id: 'c-ret-dm1', use: 'return', tier: 'varied', setting: 'health', topic: 'dialysis nurses and clinics for the patients',
    text: "From the Overton dialysis nurses: 'The company that owns the dialysis clinics sells care by the session, and the nurses carry the night shifts, and we stand with the nurses. The clinics should be owned by the government and run for the patients. We will put it in our election platform and accept the voters' answer.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { D1: 'The company that owns the dialysis clinics sells care by the session, and the nurses carry the night shifts, and we stand with the nurses', C1: 'The clinics should be owned by the government and run for the patients', C2: "We will put it in our election platform and accept the voters' answer" },
    reason: { D1: 'The text sets the nurses against the company that owns the clinics, and stands with the nurses: {cue:D1}.',
              C1: 'The clinics are to pass out of the company’s hands to the government: {cue:C1}.',
              C2: 'The nurses will accept the voters’ answer: {cue:C2}. The change is to come through an election they can lose.' },
    not: { outcome: 'ml', why: 'The text hands the clinics to the government, as {o:ml} might. But it accepts the voters’ answer. A text that said a party would take power and keep it would be {o:ml}.' } }
]);
