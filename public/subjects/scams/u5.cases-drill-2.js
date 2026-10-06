// Scams, Unit Five: drill cases for the whole-case stage, first group. Every question is asked, so every case carries marked words and a reason for each.

FC.cases('scams', 'u5', [

  { id: 'u5-r-pharmacy', use: 'drill', tier: 'clean', setting: 'health', topic: 'delivery of prescriptions',
    text: "Moira has been a customer of her local pharmacy for years. She asks it to start delivering her prescriptions, and the pharmacist says: 'I need your address and a phone number for the driver, and I will write them on your record.'",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'I need your address and a phone number for the driver', F1: 'your address and a phone number for the driver', F2: ['She asks it to start delivering her prescriptions', 'a phone number for the driver'] },
    reason: { D1: 'The pharmacist asks Moira to tell the pharmacy facts about herself: {cue:D1}. Nothing is asked to be installed, signed in to or paid.',
              F1: 'An address and a phone number are facts that identify her: {cue:F1}. Nothing is asked about her life.',
              F2: 'Moira began it by asking for the delivery, at a pharmacy she has used for years, and what is asked is what a delivery needs: {cue:F2}.' },
    not: { outcome: 'identitytheft', why: 'An address is among the facts a copy asks for, but Moira is the one who asked for the delivery, and an address is what a delivery needs.' } },

  { id: 'u5-r-frozen', use: 'drill', tier: 'clean', setting: 'money', topic: 'a card said to be frozen',
    text: "A text reaches Joss: 'Your bank card has been frozen. To unfreeze it, reply with the full card number, the expiry date and the three-digit code on the back.' Joss has not had any trouble with his card.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'reply with the full card number, the expiry date and the three-digit code on the back', F1: 'the full card number, the expiry date and the three-digit code on the back', F2: ['A text reaches Joss', 'Joss has not had any trouble with his card'] },
    reason: { D1: 'The text asks Joss to tell the sender facts about himself, and names no amount to pay: {cue:D1}.',
              F1: 'A full card number with its expiry date and security code is a set of facts that identify his card: {cue:F1}.',
              F2: 'The text came to Joss, and he began nothing: {cue:F2}. Nothing in his own banking app says the card is frozen.' },
    not: { outcome: 'realdetails', why: 'A real bank might tell you that a card is frozen, but a real bank does not ask you to type the whole card and its code into a reply. This came to Joss, and he began nothing.' } },

  { id: 'u5-r-wine', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a stranger replying to a post on wine',
    text: "Una posts a photo of a wine she enjoyed. A man she does not know replies: 'Great choice! What do you do when you are not drinking wine? Do you live in the city?' Over the next days he messages her most evenings and asks about her job and whether she lives alone. He has not asked her for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'asks about her job and whether she lives alone', F1: ['A man she does not know replies', 'asks about her job and whether she lives alone'], F2: 'A man she does not know replies' },
    reason: { D1: 'The man asks Una to tell him about herself: {cue:D1}. He asks for nothing to install, no way into an account and no money.',
              F1: 'A stranger who reached her out of nowhere asks about her job and her home life: {cue:F1}. No paper or number has been asked for.',
              F2: 'Una began nothing with him. A man she does not know replied to her post and then wrote to her: {cue:F2}.' },
    not: { outcome: 'identitytheft', why: 'He asks for no paper and no number. What he wants to know about is her life.' } }
]);
