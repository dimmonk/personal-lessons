// Scams, Unit Five: cases shown inside cards, part one: the real request for details and identity theft.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that question (or a list of phrases); the app marks it.
// segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// Every firm, bank, council and website is invented. Messages are written the way people really receive them.

FC.cases('scams', 'u5', [

  /* ---------- Real request for details: the first case, then the second, then the check ---------- */
  { id: 'u5-bank', use: 'teach', tier: 'clean', setting: 'money', topic: 'opening a savings account', name: 'The savings account',
    text: "Chen wants to open a savings account. He types the Oakfield Credit Union's web address into his browser himself, and the page says: 'Open an account'. The form asks for his full name, his date of birth and his home address. A second page says: 'We are required to check who our customers are. Please upload a photo of your passport or driver’s license.' He uploads one.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'The form asks for his full name, his date of birth and his home address',
            F1: ['his date of birth and his home address', 'upload a photo of your passport or driver’s license'],
            F2: ["types the Oakfield Credit Union's web address into his browser himself", 'We are required to check who our customers are'] } },

  { id: 'u5-surgery', use: 'teach', tier: 'clean', setting: 'health', topic: 'registering at a doctor’s office', name: 'The new clinic',
    text: "Reg has moved to a new town, and he walks into the Marlow Family Clinic to register as a patient. The receptionist gives him a form that asks for his name, his date of birth, his address and the name of his old doctor. She says: 'We need these to set up your records.' She also gives him a card with the clinic's phone number on it.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'a form that asks for his name, his date of birth, his address and the name of his old doctor',
            F1: 'his name, his date of birth, his address',
            F2: ['walks into the Marlow Family Clinic to register as a patient', 'We need these to set up your records'] },
    segments: [
      { text: 'Reg has moved to a new town', note: 'That says why he is there. It does not show who began the request.' },
      { text: 'he walks into the Marlow Family Clinic to register as a patient' },
      { text: 'a form that asks for his name, his date of birth, his address and the name of his old doctor', note: 'Those are the facts asked for. They are the same kind of facts as in the first case, and the question here is about something else: who began it.' },
      { text: 'We need these to set up your records', note: 'That is the reason they give for asking. It shows that the facts fit the reason, but it does not show who began it, so it is not the words to tap.' }
    ] },

  { id: 'u5-council', use: 'check', tier: 'clean', setting: 'government', topic: 'calling the county over a move',
    text: "Sana has just moved apartment, and she wants her property tax bill changed. She calls Northway County at the number printed on her last property tax bill. The clerk says: 'To find your account I need your old address and your date of birth.' Sana gives them.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'I need your old address and your date of birth', F1: 'your old address and your date of birth', F2: 'She calls Northway County at the number printed on her last property tax bill' },
    segments: [
      { text: 'Sana has just moved apartment, and she wants her property tax bill changed', note: 'That says why she is calling. It does not show how she reached the county.' },
      { text: 'She calls Northway County at the number printed on her last property tax bill' },
      { text: "The clerk says: 'To find your account I need your old address and your date of birth.'", note: 'That is what the clerk asks for. It tells you what is asked, and not who began it.' },
      { text: 'Sana gives them', note: 'That is what Sana does. The question is about how the call began.' }
    ],
    reason: { F2: 'Sana is the one who began it, and she reached the county through {t:already}, the number printed on her bill: {cue:F2}. What the clerk asks for is only what is needed to find her account.' } },

  /* ---------- Identity theft: the first case, then the second, then the check ---------- */
  { id: 'u5-grant', use: 'teach', tier: 'clean', setting: 'government', topic: 'an energy grant and a passport photo', name: 'The energy grant',
    text: "An email reaches Kayode from the 'Energy Support Office': 'You are eligible for a $400 energy grant. To receive it, reply with a photo of your passport, your date of birth and your home address by Friday.' Kayode has never applied for any grant.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'reply with a photo of your passport, your date of birth and your home address by Friday',
            F1: 'a photo of your passport, your date of birth and your home address',
            F2: ['An email reaches Kayode', 'Kayode has never applied for any grant'] } },

  { id: 'u5-voucher', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a free gift card and a card number', name: 'The free gift card',
    text: "A text from a number she does not know reaches Mel's phone: 'Fernhill Stores: you have been chosen for a free $30 gift card. Reply with your date of birth and your full card number to claim it. You will not be charged.' Mel has never shopped at Fernhill.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'Reply with your date of birth and your full card number to claim it',
            F1: 'your date of birth and your full card number',
            F2: ['A text from a number she does not know', 'Mel has never shopped at Fernhill'] },
    segments: [
      { text: 'A text from a number she does not know reaches Mel\'s phone', note: 'That says how the text arrived. A text can reach you because you asked for it, so how it arrived does not on its own show whether you began anything.' },
      { text: 'you have been chosen for a free $30 gift card', note: 'That is the reason the text gives. It is not a sign that Mel began anything.' },
      { text: 'Reply with your date of birth and your full card number to claim it', note: 'That is the request. The question here is not what is asked but whether Mel began anything the facts could be for.' },
      { text: 'You will not be charged', note: 'That is a promise in the text, and a promise from a stranger shows nothing about who began it.' },
      { text: 'Mel has never shopped at Fernhill' }
    ] },

  { id: 'u5-parcel', use: 'check', tier: 'clean', setting: 'shopping', topic: 'a redelivery and a card number',
    text: "Femi gets a text: 'Corbin Couriers: your package is at our facility. To book a new delivery, confirm your full name, your date of birth and the full number on your bank card at corbin-redeliver.example. There is nothing to pay.' Femi is not expecting a package.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'confirm your full name, your date of birth and the full number on your bank card', F1: 'your date of birth and the full number on your bank card', F2: 'Femi is not expecting a package' },
    segments: [
      { text: 'Femi gets a text', note: 'That says how it arrived. A text can reach you because you asked for it, so how it arrived does not on its own show whether you began anything.' },
      { text: 'Corbin Couriers: your package is at our facility', note: 'That is the reason the text gives. Nothing in it shows that Femi started anything.' },
      { text: 'confirm your full name, your date of birth and the full number on your bank card', note: 'That is the request. The question here is whether Femi began it.' },
      { text: 'There is nothing to pay', note: 'That is a promise in the text. It shows nothing about who began it.' },
      { text: 'Femi is not expecting a package' }
    ],
    reason: { F2: 'Femi did not order anything, so there is nothing he began that these facts could be for: {cue:F2}. The text came to him, and it asks for his card number to rebook a delivery, which is more than a delivery needs.' } },

  /* ---------- The pair taught side by side: the same person, the same job, the same papers ---------- */
  { id: 'u5-job-real', use: 'teach', tier: 'clean', setting: 'work', topic: 'a job offer after an interview, with a work-eligibility check', name: 'The job that was real',
    text: "Dina applied for a warehouse job on the Brackley Logistics website, and was offered it after an interview. She signs in to the applicant account she made on that site, where a page says: 'Offer accepted. So that we can confirm you are eligible to work before you start on November 3, please upload your passport and your Social Security number.'",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'please upload your passport and your Social Security number',
            F1: 'upload your passport and your Social Security number',
            F2: ['Dina applied for a warehouse job on the Brackley Logistics website', 'So that we can confirm you are eligible to work before you start on November 3'] } },

  { id: 'u5-job-fake', use: 'teach', tier: 'clean', setting: 'work', topic: 'a job offer sent cold, asking before any contract', name: 'The job offer',
    text: "Dina has never applied to Brackley Logistics. An email reaches her: 'You have been selected for a warehouse job. Before any contract is sent, please send a photo of your passport, a photo of you holding it, your Social Security number and your bank account details. This is our standard check.'",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'please send a photo of your passport, a photo of you holding it, your Social Security number and your bank account details',
            F1: 'a photo of your passport, a photo of you holding it, your Social Security number and your bank account details',
            F2: ['Dina has never applied to Brackley Logistics', 'Before any contract is sent'] } },

  /* ---------- A call that sounds as real as it can: looks like a real request, is not one that fits ---------- */
  { id: 'u5-bankcall', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a call by the bank’s fraud team, asking a date of birth', name: 'The call from the bank',
    text: "Gabriela's phone rings. A man says that he is from Halbrook Bank's fraud team, and he uses her name. In a calm voice he says: 'We have seen a strange payment on your account. First I must be sure that I am speaking to you. Please confirm your date of birth and your home address.'",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'Please confirm your date of birth and your home address', F1: 'your date of birth and your home address', F2: "Gabriela's phone rings" },
    segments: [
      { text: "Gabriela's phone rings" },
      { text: "A man says that he is from Halbrook Bank's fraud team, and he uses her name", note: 'This is what the caller says about himself. He may be telling the truth or not, and nothing in the call shows which. It is not the words that settle the question.' },
      { text: 'We have seen a strange payment on your account. First I must be sure that I am speaking to you', note: 'This is the reason he gives. The questions do not take a reason on trust, and the reason being a good one is why the case looks real.' },
      { text: 'Please confirm your date of birth and your home address', note: 'That is the request. The same words come from a real bank and from a copy, so they cannot be what settles it.' }
    ] }
]);
