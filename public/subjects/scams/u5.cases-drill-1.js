// Scams, Unit Five: drill cases for the piece stage (the learner taps the words that decide). None of these appears in a card.

FC.cases('scams', 'u5', [

  { id: 'u5-p-dentist', use: 'drill', tier: 'clean', setting: 'health', topic: 'a new-patient form on a dentist’s website',
    text: "Jun wants to see a new dentist. He types the Elm Dental website address into his browser himself and fills in the new-patient form, which asks for his name, his date of birth and the name of his old dentist.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { F1: 'his name, his date of birth and the name of his old dentist', F2: ['wants to see a new dentist', 'types the Elm Dental website address into his browser himself'] },
    not: { outcome: 'identitytheft', why: 'A copy would ask for a date of birth too. But Jun went to the practice’s own site, through an address he typed.' },
    reason: { F1: 'The form asks for facts that identify Jun, and nothing about his life: {cue:F1}.',
              F2: 'Jun chose the dentist and typed the practice’s address himself: {cue:F2}. A new patient’s record needs what the form asks.' } },

  { id: 'u5-p-phone', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'a free phone upgrade by call',
    text: "A caller says to Dara that her phone plan is about to end, and offers her a free upgrade. To go ahead he needs her date of birth, her address and a photo of her passport. Dara did not call them.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { F1: 'her date of birth, her address and a photo of her passport', F2: ['A caller says to Dara', 'Dara did not call them'] },
    not: { outcome: 'realdetails', why: 'A phone company may ask a customer for a date of birth, but Dara did not call them.' },
    reason: { F1: 'The caller asks for papers and facts that identify Dara: {cue:F1}.',
              F2: 'The call came to Dara, and she started nothing: {cue:F2}.' } },

  { id: 'u5-p-loan', use: 'drill', tier: 'clean', setting: 'money', topic: 'a loan nobody applied for',
    text: "An email reaches Callum: 'You have been pre-approved for a loan of $5,000. To release it, send us your Social Security number and a photo of your driver’s license.' Callum has never asked about a loan.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { F1: 'your Social Security number and a photo of your driver’s license', F2: ['An email reaches Callum', 'Callum has never asked about a loan'] },
    not: { outcome: 'realdetails', why: 'A lender asks for a tax number and a license photo, but only from someone who applied. Callum never asked about a loan.' },
    reason: { F1: 'The email asks for a tax number and a license photo, which identify Callum: {cue:F1}.',
              F2: 'The email came to Callum, and he never asked about a loan: {cue:F2}. He started nothing that these facts could be for.' } },

  { id: 'u5-p-cycling', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a stranger who comments on a cycling photo',
    text: "A stranger comments on Sol's cycling photo and then sends him a private message: 'Great ride! Do you live around here?' Sol has never seen his name before. Over the next week the stranger asks where Sol works and when he is usually at home.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { F1: ['Sol has never seen his name before', 'asks where Sol works and when he is usually at home'], F2: 'sends him a private message' },
    not: { outcome: 'identitytheft', why: 'He asks for no paper and no number. He wants to know where Sol works and when he is home.' },
    reason: { F1: 'A stranger who came out of nowhere asks about Sol’s work and when he is home, with no paper or number: {cue:F1}.',
              F2: 'Sol started nothing. A stranger sent the first private message: {cue:F2}.' } }
]);
