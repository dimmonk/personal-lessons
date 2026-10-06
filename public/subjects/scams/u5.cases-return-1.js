// Scams, Unit Five: fresh cases held back for later days (lesson standard E9): the real request for details and identity theft.
// This is an action subject, so each name has two. A name that is due comes back as a case the learner has not seen.

FC.cases('scams', 'u5', [

  { id: 'u5-x-swimclub', use: 'return', tier: 'clean', setting: 'leisure', topic: 'joining a swimming club at the recreation center',
    text: "Kofi walks into a recreation center to join its swimming club. The receptionist gives him a form that asks for his name, his address and his date of birth, and says: 'The club needs these for its insurance.'",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'a form that asks for his name, his address and his date of birth', F1: 'his name, his address and his date of birth', F2: ['walks into a recreation center to join its swimming club', 'The club needs these for its insurance'] },
    reason: { D1: 'The form asks Kofi to tell the club facts about himself: {cue:D1}. Nothing is asked to be installed, signed in to or paid.',
              F1: 'A name, an address and a date of birth are facts that identify him: {cue:F1}.',
              F2: 'Kofi went in and asked to join, and the receptionist says what the facts are for: {cue:F2}.' },
    not: { outcome: 'identitytheft', why: 'A date of birth and an address are what a copy asks for. Here Kofi began it, in the recreation center itself, and the reason matches the list.' } },

  { id: 'u5-x-finance', use: 'return', tier: 'varied', setting: 'shopping', topic: 'finance for a car at the dealership',
    text: "Gwen has chosen a car at a dealership she visited, and she asks the dealer about finance. In the finance office the adviser asks for her passport, her last three pay stubs and her address, 'so that the lender can decide'.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'asks for her passport, her last three pay stubs and her address', F1: 'her passport, her last three pay stubs and her address', F2: ['she asks the dealer about finance', 'so that the lender can decide'] },
    reason: { D1: 'The adviser asks Gwen to show papers and give facts about herself: {cue:D1}.',
              F1: 'A passport, pay stubs and an address are papers and facts that identify her: {cue:F1}.',
              F2: 'Gwen asked about finance herself, at the dealership’s own office, and the list is what a lender needs to decide: {cue:F2}. A long list can fit.' },
    not: { outcome: 'identitytheft', why: 'A passport and pay stubs sound like what a copy asks for. Here Gwen asked about finance herself, in person, and each paper has the reason the adviser gives.' } },

  { id: 'u5-x-police', use: 'return', tier: 'clean', setting: 'government', topic: 'a caller who says an identity was used in a crime',
    text: "A caller says to Lena that he is a police officer and that her identity has been 'used in a crime'. 'To clear your name I need your date of birth, your address and the full number on your bank card.' Lena has never been in touch with the police.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'I need your date of birth, your address and the full number on your bank card', F1: 'your date of birth, your address and the full number on your bank card', F2: ['A caller says to Lena', 'Lena has never been in touch with the police'] },
    reason: { D1: 'The caller asks Lena to tell him facts about herself, and names no amount to pay: {cue:D1}.',
              F1: 'A date of birth, an address and a full card number are facts that identify her: {cue:F1}.',
              F2: 'The call came to Lena, and she began nothing with the police: {cue:F2}. A police officer does not need a bank card number to clear anyone.' },
    not: { outcome: 'realdetails', why: 'A real officer might ask for a few facts, but of someone who had reported something. This call came to Lena.' },
    wouldChange: 'If he had told her to buy gift cards to pay a fine, the first answer would be the one for money.' },

  { id: 'u5-x-doorstep', use: 'return', tier: 'varied', setting: 'home', topic: 'a survey at the front door with a prize drawing',
    text: "A man at Nina's door says that he is doing a survey for her energy supplier. 'To enter you in the prize drawing I need your date of birth and the full number of your bank card.' She did not ask for any survey.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'I need your date of birth and the full number of your bank card', F1: 'your date of birth and the full number of your bank card', F2: ["A man at Nina's door says that he is doing a survey", 'She did not ask for any survey'] },
    reason: { D1: 'The man asks Nina to tell him facts about herself, and names no amount to pay: {cue:D1}.',
              F1: 'A date of birth and a full card number are facts that identify her: {cue:F1}.',
              F2: 'The man came to Nina’s door and she began nothing: {cue:F2}. A prize drawing needs nothing like a card number.' },
    not: { outcome: 'realdetails', why: 'A survey from an energy supplier can be real, and a real one asks little. This one came to her door, and a card number is more than a prize drawing needs.' } }
]);
