// Scams, Unit Two: drill cases, the route stage, the cases whose story misleads. echo names a teaching case of a DIFFERENT
// name whose story the case is built to bring back. Field guide: see u2.cases-drill-2.js.

FC.cases('scams', 'u2', [

  /* ---------- Stage four: route, misleading ---------- */
  { id: 'dv-r-advert-seen', use: 'drill', tier: 'misleading', setting: 'shopping', topic: 'an ad seen, and the maker’s address typed',
    echo: 'dv-search-broadband',
    text: "On a news site, Ewa sees an ad for a budgeting program called Penny. She does not click it. That evening she types the maker's web address, penny.com, into her browser herself, downloads the program and runs it. A box asks: 'Do you want to allow this app to make changes to your device?' Nobody has contacted her.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { D1: 'Do you want to allow this app to make changes to your device?', I1: ["That evening she types the maker's web address, penny.com, into her browser herself", 'Nobody has contacted her'] },
    reason: { D1: 'The box asks Ewa to let a program change her computer: {cue:D1}. That is a request about her device.',
              I1: 'An ad is in the story, but she did not use it: {cue:I1}. She typed the address herself, and nobody contacted her.' },
    not: { outcome: 'techsupport', why: 'An ad is how Ivy’s story went wrong, but she called the number in it. Ewa ignored the ad and typed the address herself.' },
    wouldChange: 'If she had clicked the ad and downloaded from the page it led to, the address would not be one she already had, so the answer would not be {a:I1.own}.' },

  { id: 'dv-r-pdf-ad', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a sponsored result for a free reader',
    echo: 'dv-video-app',
    text: "Mick wants a free program to open PDFs. He types 'free pdf reader' into a search page and clicks the first result, which has 'Ad' beside it. The page says: 'Your computer has 5 errors. Call (800) 555-0172 and our technician will fix them and set up your reader.' Mick calls, and a man asks to see his computer.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { D1: 'a man asks to see his computer', I1: ["clicks the first result, which has 'Ad' beside it", 'Call (800) 555-0172 and our technician will fix them and set up your reader'] },
    reason: { D1: 'A man asks to see Mick’s computer: {cue:D1}. Letting someone watch your device is a request about the device.',
              I1: 'Mick set out to get a program, but he followed a paid result, and the page offers someone to fix a problem he did not have: {cue:I1}. A {t:searchad} is not {t:already}.' },
    not: { outcome: 'realinstall', why: 'Mick did set out to get a program, which is how {o:realinstall} starts. But he followed a paid result, not the maker’s site or an app store, and then a person offered to fix his computer.' } }
]);
