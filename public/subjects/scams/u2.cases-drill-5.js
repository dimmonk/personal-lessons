// Scams, Unit Two: drill cases, the route stage, the cases whose story misleads. echo names a teaching case of a DIFFERENT
// name whose story the case is built to bring back. Field guide: see u2.cases-drill-2.js.

FC.cases('scams', 'u2', [

  /* ---------- Stage four: route, misleading ---------- */
  { id: 'dv-r-advert-seen', use: 'drill', tier: 'misleading', setting: 'shopping', topic: 'an ad seen, and the maker’s address typed',
    echo: 'dv-search-broadband',
    text: "On a news site, Ewa sees an ad for a budgeting program called Penny. She does not click it. That evening she types the maker's web address, penny.com, into her browser herself, downloads the program and runs it. A box asks: 'Do you want to allow this app to make changes to your device?' Nobody has contacted her.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { D1: 'Do you want to allow this app to make changes to your device?', I1: ["That evening she types the maker's web address, penny.com, into her browser herself", 'Nobody has contacted her'] },
    reason: { D1: 'The box asks Ewa to allow a program to make changes to her computer: {cue:D1}. That is a request about the device.',
              I1: 'An ad is in the story, but she did not use it: {cue:I1}. The address was one she typed, and nobody contacted her.' },
    not: { outcome: 'techsupport', why: 'A paid ad is how the helpline case went wrong, but there the person called the number in the ad. Ewa ignored it and typed the address herself.' },
    wouldChange: 'If she had clicked the ad and downloaded from the page it led to, the address would not be one she already had, and the answer would not be {a:I1.own}.' },

  { id: 'dv-r-pdf-ad', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a sponsored result for a free reader',
    echo: 'dv-video-app',
    text: "Mick wants a free program to open PDFs. He types 'free pdf reader' into a search page and clicks the first result, which has 'Ad' beside it. The page says: 'Your computer has 5 errors. Call (800) 555-0172 and our technician will fix them and set up your reader.' Mick calls, and a man asks to see his computer.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { D1: 'a man asks to see his computer', I1: ["clicks the first result, which has 'Ad' beside it", 'Call (800) 555-0172 and our technician will fix them and set up your reader'] },
    reason: { D1: 'A man asks to see Mick’s computer: {cue:D1}. Letting someone watch your device is a request about the device.',
              I1: 'Mick set out to get a program, but he followed a paid result, and the page offers someone to fix a problem he did not have: {cue:I1}. A {t:searchad} is not {t:already}.' },
    not: { outcome: 'realinstall', why: 'Mick did set out to get a program, and that is how {o:realinstall} begins. But he did not go to the maker or to an app store: he followed a paid result, and a person offered to fix his computer.' },
    wouldChange: 'If he had typed the maker’s address into his browser and downloaded the reader from its own page, it would be {a:I1.own}.' },

  { id: 'dv-r-rebate-file', use: 'drill', tier: 'misleading', setting: 'government', topic: 'a refund form to run, sent by email',
    echo: 'dv-energy-refund',
    text: "An email reaches Ola from an address he does not know: 'Your refund of $212 is ready. Open the attached form and run it to claim it.' Nobody has called him, and he has not asked for a refund.",
    outcome: 'malware', route: { D1: ['device'], I1: ['file'] },
    cues: { D1: 'Open the attached form and run it to claim it', I1: ['An email reaches Ola from an address he does not know', 'Nobody has called him'] },
    reason: { D1: 'The email asks Ola to open a file and run it: {cue:D1}. That is a request about his device.',
              I1: 'The file reached him in an email from an address he does not know: {cue:I1}. A refund is the reason given for running it, but nobody is on a call with him.' },
    not: { outcome: 'refundscam', why: 'A refund is the story, as in the energy refund. But nobody is on a call with Ola, and nobody asks to see his device: the email only gives him a file to run.' },
    wouldChange: 'If a man had been on the phone, saying that a refund was owed and asking to see the device while Ola opened the file, it would be {a:I1.refund}.' },

  { id: 'dv-r-account-help', use: 'drill', tier: 'misleading', setting: 'money', topic: 'a bank caller offering help with an account',
    echo: 'dv-popup-alarm',
    text: "A woman calls Imogen: 'This is Halbrook Bank. Your account needs attention today. Please install the Halbrook Help tool from the address I am texting you, and I will walk you through it.' Imogen has not reported any problem to her bank.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { D1: 'Please install the Halbrook Help tool from the address I am texting you', I1: ['Your account needs attention today', 'I will walk you through it'] },
    reason: { D1: 'The caller asks Imogen to install a tool: {cue:D1}. That is a request about her device, and the first question does not look at who is asking.',
              I1: 'The caller says that her bank account needs attention, and offers to help while she installs: {cue:I1}. The reason given is her bank account, which is the refund answer.' },
    not: { outcome: 'techsupport', why: 'She is offered help with something, and there is a tool to install, as in a call that offers to fix a problem with a device. But the problem named is with her bank account, not with her device.' },
    wouldChange: 'If the woman had said that her laptop had a fault and offered to fix it, it would be {a:I1.support}.' }
]);
