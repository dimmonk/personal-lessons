// Scams, Unit Five: drill cases for the whole-case stage, first group. Every question is asked, so every case carries marked words and a reason for each.

FC.cases('scams', 'u5', [

  { id: 'u5-r-pharmacy', use: 'drill', tier: 'clean', setting: 'health', topic: 'delivery of prescriptions',
    text: "Moira has been a customer of her local pharmacy for years. She asks it to start delivering her prescriptions, and the pharmacist says: 'I need your address and a phone number for the driver, and I will write them on your record.'",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'I need your address and a phone number for the driver', F1: 'your address and a phone number for the driver', F2: ['She asks it to start delivering her prescriptions', 'a phone number for the driver'] },
    reason: { D1: 'The pharmacist asks Moira for facts about herself, and nothing to install, sign in to or pay: {cue:D1}.',
              F1: 'An address and a phone number identify her, and nothing is asked about her life: {cue:F1}.',
              F2: 'Moira asked for the delivery at a pharmacy she has used for years, and a delivery needs these facts: {cue:F2}.' },
    not: { outcome: 'identitytheft', why: 'A copy asks for an address too. But Moira asked for the delivery, and a delivery needs an address.' } },

  { id: 'u5-r-frozen', use: 'drill', tier: 'clean', setting: 'money', topic: 'a card said to be frozen',
    text: "A text reaches Joss: 'Your bank card has been frozen. To unfreeze it, reply with the full card number, the expiry date and the three-digit code on the back.' Joss has not had any trouble with his card.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'reply with the full card number, the expiry date and the three-digit code on the back', F1: 'the full card number, the expiry date and the three-digit code on the back', F2: ['A text reaches Joss', 'Joss has not had any trouble with his card'] },
    reason: { D1: 'The text asks Joss for facts about himself, and names no amount to pay: {cue:D1}.',
              F1: 'A full card number with its expiry date and code identifies his card: {cue:F1}.',
              F2: 'The text came to Joss out of nowhere, and his card has had no trouble: {cue:F2}.' },
    not: { outcome: 'realdetails', why: 'A real bank may tell you a card is frozen, but it does not ask you to reply with the whole card number and code. This text came to Joss, and he started nothing.' } },

  { id: 'u5-r-wine', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a stranger replying to a post on wine',
    text: "Una posts a photo of a wine she enjoyed. A man she does not know replies: 'Great choice! What do you do when you are not drinking wine? Do you live in the city?' Over the next days he messages her most evenings and asks about her job and whether she lives alone. He has not asked her for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'asks about her job and whether she lives alone', F1: ['A man she does not know replies', 'asks about her job and whether she lives alone'], F2: 'A man she does not know replies' },
    reason: { D1: 'The man asks Una about herself, and for nothing else: {cue:D1}.',
              F1: 'A stranger who came out of nowhere asks about her job and her home life, with no paper or number: {cue:F1}.',
              F2: 'Una started nothing. A man she does not know replied to her post and then wrote to her: {cue:F2}.' },
    not: { outcome: 'identitytheft', why: 'He asks for no paper and no number. He wants to know about her life.' } }
]);
