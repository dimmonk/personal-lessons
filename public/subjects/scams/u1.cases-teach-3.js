// Scams, Unit One: cases shown inside cards, part three: the fifth kind (facts about you), the case asked after the
// key's first question has been taught, and the two whole cases that are worked for the learner.
// Field guide: see u1.cases-teach-1.js.

FC.cases('scams', 'u1', [

  /* ---------- the fifth kind: facts about you ---------- */
  { id: 'g-flat-form', use: 'teach', tier: 'clean', setting: 'home', topic: 'a rental application form', name: 'The apartment application',
    text: "Tomas wants to rent an apartment. On the rental agent's own website he fills in the application form, which asks for his full name, his date of birth and his current address.",
    route: { D1: ['details'] },
    cues: { D1: 'asks for his full name, his date of birth and his current address' } },

  { id: 'g-wrong-number', use: 'teach', tier: 'clean', setting: 'relationships', topic: 'a wrong-number text with questions', name: 'The wrong number',
    text: "A text reaches Sam from a number he does not know: 'Hi Jess, sorry, wrong number! You sound nice though. What do you do for work? Do you live near Chicago?'",
    route: { D1: ['details'] },
    cues: { D1: 'What do you do for work? Do you live near Chicago?' },
    segments: [
      { text: 'A text reaches Sam from a number he does not know', note: 'That says where it came from. It does not say what it asks.' },
      { text: 'Hi Jess, sorry, wrong number! You sound nice though', note: 'That is the friendly start. The text asks nothing in it. What the text asks Sam to tell comes next.' },
      { text: 'What do you do for work? Do you live near Chicago?' }
    ] },

  { id: 'g-recruiter', use: 'check', tier: 'clean', setting: 'work', topic: 'a recruiter who wants papers',
    text: "A recruiter emails Fern about a job she has not applied for: 'We would love to take your application further. Please send a photo of your passport and your Social Security number.'",
    route: { D1: ['details'] },
    cues: { D1: 'Please send a photo of your passport and your Social Security number' },
    segments: [
      { text: 'A recruiter emails Fern about a job she has not applied for', note: 'That says who the email is from and what it is about. It does not say what it asks her to do.' },
      { text: 'We would love to take your application further', note: 'That is the reason it gives. What it asks Fern to send comes next.' },
      { text: 'Please send a photo of your passport and your Social Security number' }
    ],
    reason: { D1: 'The email asks Fern to tell the sender facts about herself, in the form of papers and a number: {cue:D1}. It does not ask her to pay, sign in or install anything.' } },

  /* ---------- the check asked of the whole question ---------- */
  { id: 'g-council-bins', use: 'check', tier: 'clean', setting: 'government', topic: 'a change of trash day',
    text: "Mrs. Adeyemi gets a text from the county: 'Northway County: your trash pickup moves to Thursday this week only, because of the holiday.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'your trash pickup moves to Thursday this week only, because of the holiday' },
    reason: { D1: 'The text only tells Mrs. Adeyemi that something will change: {cue:D1}. Nothing in it asks her to install, sign in, pay or tell anyone anything, and it gives no number, link or app of its own.' } },

  /* ---------- the two worked cases ---------- */
  { id: 'g-leaving', use: 'teach', tier: 'clean', setting: 'work', topic: 'money for a going-away gift', name: 'The going-away gift',
    text: "Ben, a colleague, emails the whole team: 'We are collecting $20 each for Jo's going-away gift. Please send yours by Venmo to @ben-collects by Friday.'",
    route: { D1: ['money'] },
    cues: { D1: 'Please send yours by Venmo to @ben-collects by Friday' } },

  { id: 'g-statement', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a statement that ends with a demand', name: 'The statement that wanted money',
    text: "Chidi gets a text from Lumen Broadband: 'Your summer statement is ready to view. Your account is now 41 days overdue. To keep your line open, pay $79 at lumen-pay.com today.'",
    route: { D1: ['money'] },
    cues: { D1: 'pay $79 at lumen-pay.com today' } }
]);
