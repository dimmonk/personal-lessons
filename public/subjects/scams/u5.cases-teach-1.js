// Scams, Unit Five: cases shown inside cards, part one: the real request for details and identity theft.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// cues[STEP] is the exact phrase in the text that decides that question; the app marks it. segments are the tappable pieces for
// "tap the words" prompts; note is shown if that piece is tapped in error. Every firm, bank and website is invented.

FC.cases('scams', 'u5', [

  { id: 'u5-bank', use: 'teach', tier: 'clean', setting: 'money', topic: 'opening a savings account', name: 'The savings account',
    text: "Chen wants to open a savings account. He types the Oakfield Credit Union's web address into his browser himself, and the page says: 'Open an account'. The form asks for his full name, his date of birth and his home address. A second page says: 'We are required to check who our customers are. Please upload a photo of your passport or driver’s license.' He uploads one.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'The form asks for his full name, his date of birth and his home address',
            F1: ['his date of birth and his home address', 'upload a photo of your passport or driver’s license'],
            F2: ["types the Oakfield Credit Union's web address into his browser himself", 'We are required to check who our customers are'] } },

  { id: 'u5-council', use: 'check', tier: 'clean', setting: 'government', topic: 'calling the county over a move',
    text: "Sana has just moved apartment, and she wants her property tax bill changed. She calls Northway County at the number printed on her last property tax bill. The clerk says: 'To find your account I need your old address and your date of birth.' Sana gives them.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'I need your old address and your date of birth', F1: 'your old address and your date of birth', F2: 'She calls Northway County at the number printed on her last property tax bill' },
    segments: [
      { text: 'Sana has just moved apartment, and she wants her property tax bill changed', note: 'That says why she is calling, not how she reached the county.' },
      { text: 'She calls Northway County at the number printed on her last property tax bill' },
      { text: "The clerk says: 'To find your account I need your old address and your date of birth.'", note: 'That is what the clerk asks for, not who started the call.' },
      { text: 'Sana gives them', note: 'That is what Sana does after the call began, not how it began.' }
    ],
    reason: { F2: 'Sana called the number printed on her own bill, so she started this herself, and the clerk asks only what finding her account needs.' } },

  { id: 'u5-grant', use: 'teach', tier: 'clean', setting: 'government', topic: 'an energy grant and a passport photo', name: 'The energy grant',
    text: "An email reaches Kayode from the 'Energy Support Office': 'You are eligible for a $400 energy grant. To receive it, reply with a photo of your passport, your date of birth and your home address by Friday.' Kayode has never applied for any grant.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'reply with a photo of your passport, your date of birth and your home address by Friday',
            F1: 'a photo of your passport, your date of birth and your home address',
            F2: ['An email reaches Kayode', 'Kayode has never applied for any grant'] } },

  { id: 'u5-parcel', use: 'check', tier: 'clean', setting: 'shopping', topic: 'a redelivery and a card number',
    text: "Femi gets a text: 'Corbin Couriers: your package is at our facility. To book a new delivery, confirm your full name, your date of birth and the full number on your bank card at corbin-redeliver.example. There is nothing to pay.' Femi is not expecting a package.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'confirm your full name, your date of birth and the full number on your bank card', F1: 'your date of birth and the full number on your bank card', F2: 'Femi is not expecting a package' },
    segments: [
      { text: 'Femi gets a text', note: 'That is how it arrived. A text can be one you asked for, so this does not show who started it.' },
      { text: 'Corbin Couriers: your package is at our facility', note: 'That is the reason the text gives, and nothing in it shows Femi started anything.' },
      { text: 'confirm your full name, your date of birth and the full number on your bank card', note: 'That is the request. The question is whether Femi started it.' },
      { text: 'There is nothing to pay', note: 'That is a promise in the text, not a sign of who started it.' },
      { text: 'Femi is not expecting a package' }
    ],
    reason: { F2: 'Femi ordered nothing, and the text still asks for his card number to rebook a delivery.' } },

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

  { id: 'u5-bankcall', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a call by the bank’s fraud team, asking a date of birth', name: 'The call from the bank',
    text: "Gabriela's phone rings. A man says that he is from Halbrook Bank's fraud team, and he uses her name. In a calm voice he says: 'We have seen a strange payment on your account. First I must be sure that I am speaking to you. Please confirm your date of birth and your home address.'",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'Please confirm your date of birth and your home address', F1: 'your date of birth and your home address', F2: "Gabriela's phone rings" },
    segments: [
      { text: "Gabriela's phone rings" },
      { text: "A man says that he is from Halbrook Bank's fraud team, and he uses her name", note: 'The caller says who he is, but anyone can say that on a call. It does not show who started it.' },
      { text: 'We have seen a strange payment on your account. First I must be sure that I am speaking to you', note: 'A good reason is why the call sounds real, but it does not show who started it.' },
      { text: 'Please confirm your date of birth and your home address', note: 'A real bank and a copy ask for the same two things, so the request cannot settle it.' }
    ] }
]);
