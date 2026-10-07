// Political Ideologies, Unit Two: fresh cases kept back for later days (Social democracy, Class politics with nothing attached,
// Democratic socialism). A name that is due returns as a case the learner has not seen, run as a whole route, so every case
// carries marked words and a reason for all three questions. One case for each name. All texts are invented.

FC.cases('ideology', 'u2', [

  { id: 'c-ret-sd1', use: 'return', tier: 'varied', setting: 'town', topic: 'taxi drivers and a cap on a license fee',
    text: "From a flyer by the Marrick taxi drivers: 'The company that owns the taxi licenses charges us a fortune to drive and keeps most of the fares, and we are with the drivers. The company can keep its licenses. We ask for a law that caps what it can charge a driver, and a tax on its profits to pay for sick pay for every driver.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { D1: 'The company that owns the taxi licenses charges us a fortune to drive and keeps most of the fares, and we are with the drivers', C1: 'The company can keep its licenses. We ask for a law that caps what it can charge a driver, and a tax on its profits to pay for sick pay for every driver', C2: 'We ask for a law that caps what it can charge a driver' },
    reason: { D1: 'The text sets the drivers against the company that owns the licenses, and stands with the drivers: {cue:D1}.',
              C1: 'The company keeps its licenses, and a law and a tax are asked for: {cue:C1}.',
              C2: 'The text asks for a cap on what drivers pay: {cue:C2}. That is a plan for pay, and it says nothing about power or about getting rid of the government.' },
    not: { outcome: 'demsoc', why: 'The company keeps its licenses. A text that asked for them to pass to the government would be {o:demsoc}.' } },

  { id: 'c-ret-co1', use: 'return', tier: 'varied', setting: 'schooling', topic: 'school-bus drivers asking for a crowd at the gates',
    text: "A statement by the Ennis school-bus drivers: 'The firm that owns the school-bus contract pays us only for the hours the buses run, and it owns the garage we wait in. We are the drivers and they are the owners, and we know whose side we are on. Please come to the school gates at eight on Monday.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { D1: 'We are the drivers and they are the owners, and we know whose side we are on', C1: 'Please come to the school gates at eight on Monday', C2: 'come to the school gates at eight on Monday' },
    reason: { D1: 'The text sets the drivers against the owners and takes the drivers’ side: {cue:D1}.',
              C1: 'Where a plan for the contract would be, the text has an invitation: {cue:C1}. It says nothing about who should own the contract, about taxes, or about how the owners gain.',
              C2: 'The text asks the reader to come to a place: {cue:C2}. It says nothing about power or the government.' },
    not: { outcome: 'socdem', why: 'The text asks for no law and no tax. A text that asked for those, and left the firm its contract, would be {o:socdem}.' } },

  { id: 'c-ret-dm1', use: 'return', tier: 'varied', setting: 'health', topic: 'dialysis nurses and clinics for the patients',
    text: "From the Overton dialysis nurses: 'The company that owns the dialysis clinics sells care by the session, and the nurses carry the night shifts, and we stand with the nurses. The clinics should be owned by the government and run for the patients. We will put it in our election platform and accept the voters' answer.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { D1: 'The company that owns the dialysis clinics sells care by the session, and the nurses carry the night shifts, and we stand with the nurses', C1: 'The clinics should be owned by the government and run for the patients', C2: "We will put it in our election platform and accept the voters' answer" },
    reason: { D1: 'The text sets the nurses against the company that owns the clinics, and stands with the nurses: {cue:D1}.',
              C1: 'The clinics are to pass out of the company’s hands to the government: {cue:C1}.',
              C2: 'The nurses will accept the voters’ answer: {cue:C2}. The change is to come through an election they can lose.' },
    not: { outcome: 'ml', why: 'This text hands the clinics to the government, as {o:ml} might, but it accepts the voters’ answer. A text that said a party would take power and keep it would be {o:ml}.' } }
]);
