// Scams, Unit Five: fresh cases held back for later days (lesson standard E9, V44), part one: the real request for details and
// identity theft. Four for each name, because this is an action subject: one for each of the four scheduled returns, the last
// of them about twelve weeks on. A name that is due comes back as a case the learner has not seen, beside a case of the name
// they most often take it for. Field guide: see u5.cases-drill-1.js.

FC.cases('scams', 'u5', [

  /* ---------- Real request for details ---------- */
  { id: 'u5-x-swimclub', use: 'return', tier: 'clean', setting: 'leisure', topic: 'joining a swimming club at the leisure centre',
    text: "Kofi walks into a leisure centre to join its swimming club. The receptionist gives him a form that asks for his name, his address and his date of birth, and says: 'The club needs these for its insurance.'",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'a form that asks for his name, his address and his date of birth', F1: 'his name, his address and his date of birth', F2: ['walks into a leisure centre to join its swimming club', 'The club needs these for its insurance'] },
    reason: { D1: 'The form asks Kofi to tell the club facts about himself: {cue:D1}. Nothing is asked to be installed, signed in to or paid.',
              F1: 'A name, an address and a date of birth are facts that identify him: {cue:F1}.',
              F2: 'Kofi went in and asked to join, and the receptionist says what the facts are for: {cue:F2}.' },
    not: { outcome: 'identitytheft', why: 'A date of birth and an address are what a copy asks for. Here Kofi began it, in the leisure centre itself, and the reason matches the list.' },
    wouldChange: 'If a text from the club had asked him to confirm his date of birth and his card number to keep his place, it would have come to him, and it would be {o:identitytheft}.' },

  { id: 'u5-x-hospital', use: 'return', tier: 'varied', setting: 'health', topic: 'booking in by phone after a hospital letter',
    text: "A letter from the hospital gives Pavel an appointment and a phone number. He rings that number, and the clerk says: 'To book you in, I need your date of birth and your postcode.'",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'I need your date of birth and your postcode', F1: 'your date of birth and your postcode', F2: ['He rings that number', 'To book you in'] },
    reason: { D1: 'The clerk asks Pavel to tell the hospital facts about himself: {cue:D1}.',
              F1: 'A date of birth and a postcode are facts that identify him: {cue:F1}.',
              F2: 'The letter was the hospital’s own, and Pavel is the one who rings its number to book in: {cue:F2}. The clerk asks only for what finding his booking needs.' },
    not: { outcome: 'friendlychat', why: 'The clerk is friendly, but asks about nothing in Pavel’s life. A date of birth and a postcode are what booking him in needs.' },
    wouldChange: 'If the call had come to Pavel from someone who said that he was from the hospital, the key’s answer would be the one for something that does not fit.' },

  { id: 'u5-x-finance', use: 'return', tier: 'varied', setting: 'shopping', topic: 'finance for a car at the dealership',
    text: "Gwen has chosen a car at a dealership she visited, and she asks the dealer about finance. In the finance office the adviser asks for her passport, her last three payslips and her address, 'so that the lender can decide'.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'asks for her passport, her last three payslips and her address', F1: 'her passport, her last three payslips and her address', F2: ['she asks the dealer about finance', 'so that the lender can decide'] },
    reason: { D1: 'The adviser asks Gwen to show papers and give facts about herself: {cue:D1}.',
              F1: 'A passport, payslips and an address are papers and facts that identify her: {cue:F1}.',
              F2: 'Gwen asked about finance herself, at the dealership’s own office, and the list is what a lender needs to decide: {cue:F2}. A long list can fit.' },
    not: { outcome: 'identitytheft', why: 'A passport and payslips sound like what a copy asks for. Here Gwen asked about finance herself, in person, and each paper has the reason the adviser gives.' },
    wouldChange: 'If the adviser had also asked for the three-digit code on the back of her bank card, it would be more than a lender needs, and it would not fit.' },

  { id: 'u5-x-bankapp', use: 'return', tier: 'clean', setting: 'money', topic: 'applying for a credit card in the bank’s own app',
    text: "Dae-ho opens his bank's own app, which he installed months ago, and applies for a credit card. The app asks for his date of birth, his address and the name of his employer.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'asks for his date of birth, his address and the name of his employer', F1: 'his date of birth, his address and the name of his employer', F2: ["opens his bank's own app, which he installed months ago", 'applies for a credit card'] },
    reason: { D1: 'The app asks Dae-ho to tell the bank facts about himself: {cue:D1}.',
              F1: 'A date of birth, an address and an employer are facts that identify and describe him: {cue:F1}.',
              F2: 'He applied for the card himself, in an app he installed months ago, and the facts are what an application needs: {cue:F2}.' },
    not: { outcome: 'friendlychat', why: 'The app asks about his employer, which is part of his life, but he applied for the card himself, and an application needs it. Nobody reached him out of nowhere.' },
    wouldChange: 'If an email had told him that he was pre-approved for a card and asked him to reply with the same facts, it would have come to him, and it would be {o:identitytheft}.' },

  /* ---------- Identity theft ---------- */
  { id: 'u5-x-police', use: 'return', tier: 'clean', setting: 'government', topic: 'a caller who says an identity was used in a crime',
    text: "A caller says to Lena that he is a police officer and that her identity has been 'used in a crime'. 'To clear your name I need your date of birth, your address and the full number on your bank card.' Lena has never been in touch with the police.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'I need your date of birth, your address and the full number on your bank card', F1: 'your date of birth, your address and the full number on your bank card', F2: ['A caller says to Lena', 'Lena has never been in touch with the police'] },
    reason: { D1: 'The caller asks Lena to tell him facts about herself, and names no amount to pay: {cue:D1}.',
              F1: 'A date of birth, an address and a full card number are facts that identify her: {cue:F1}.',
              F2: 'The call came to Lena, and she began nothing with the police: {cue:F2}. A police officer does not need a bank card number to clear anyone.' },
    not: { outcome: 'realdetails', why: 'A real officer might ask for a few facts, but of someone who had reported something. This call came to Lena.' },
    wouldChange: 'If he had told her to buy gift cards to pay a fine, the first answer would be the one for money.' },

  { id: 'u5-x-doorstep', use: 'return', tier: 'varied', setting: 'home', topic: 'a survey at the front door with a prize draw',
    text: "A man at Nina's door says that he is doing a survey for her energy supplier. 'To enter you in the prize draw I need your date of birth and the full number of your bank card.' She did not ask for any survey.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'I need your date of birth and the full number of your bank card', F1: 'your date of birth and the full number of your bank card', F2: ["A man at Nina's door says that he is doing a survey", 'She did not ask for any survey'] },
    reason: { D1: 'The man asks Nina to tell him facts about herself, and names no amount to pay: {cue:D1}.',
              F1: 'A date of birth and a full card number are facts that identify her: {cue:F1}.',
              F2: 'The man came to Nina’s door and she began nothing: {cue:F2}. A prize draw needs nothing like a card number.' },
    not: { outcome: 'realdetails', why: 'A survey from an energy supplier can be real, and a real one asks little. This one came to her door, and a card number is more than a prize draw needs.' },
    wouldChange: 'If the man had only asked which energy supplier she used, and nothing about herself, he would not be asking for facts about her.' },

  { id: 'u5-x-charity', use: 'return', tier: 'varied', setting: 'money', topic: 'a charity updating its records',
    text: "A caller says to Sam that he is from a charity that Sam once gave to. 'We are updating our supporters' records. Please confirm your date of birth and the full number on your bank card.' Sam has not heard from the charity for years.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'Please confirm your date of birth and the full number on your bank card', F1: 'your date of birth and the full number on your bank card', F2: ['A caller says to Sam', 'Sam has not heard from the charity for years'] },
    reason: { D1: 'The caller asks Sam to tell him facts about himself, and names no amount to pay: {cue:D1}.',
              F1: 'A date of birth and a full card number are facts that identify him: {cue:F1}.',
              F2: 'The call came to Sam, and he began nothing with the charity: {cue:F2}. Updating a record does not need a full card number.' },
    not: { outcome: 'realdetails', why: 'Sam did once give to the charity, so it can look like something he began. But that was years ago, and today’s call came to him and asks for a card number.' },
    wouldChange: 'If Sam had phoned the charity on its own number to change his address, the questions would be for something he began, and a date of birth would fit.' },

  { id: 'u5-x-lottery', use: 'return', tier: 'clean', setting: 'leisure', topic: 'a prize draw nobody entered',
    text: "An email says that Mona has won £5,000 in a draw. 'To pay your prize we need your date of birth, your address and a photo of your passport.' Mona has never bought a ticket or entered a draw.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'we need your date of birth, your address and a photo of your passport', F1: 'your date of birth, your address and a photo of your passport', F2: ['An email says that Mona has won', 'Mona has never bought a ticket or entered a draw'] },
    reason: { D1: 'The email asks Mona to send facts about herself, and names no fee: {cue:D1}.',
              F1: 'A date of birth, an address and a passport photo are facts that identify her: {cue:F1}.',
              F2: 'The email came to Mona, and she entered nothing: {cue:F2}. A prize that nobody entered for has nothing the facts could be for.' },
    not: { outcome: 'realdetails', why: 'A real prize body would ask for facts from someone who had entered. Mona has not.' },
    wouldChange: 'If the email had said that she must pay a fee first, the first answer would be the one for money.' }
]);
