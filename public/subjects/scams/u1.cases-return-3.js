// Scams, Unit One: fresh cases held back for later days, part three: a message that asks nothing (four, one for each
// scheduled return), and the baseline check (lesson standard E21).
// The baseline is six cases asked once, before this unit, as "real or not, and why?": three where nothing is wrong and
// three scams. They are in no card, check or drill (use 'baseline'), they are listed in subject.baseline, and they carry
// the marked words and the reason for the first question, which is the only thing shown back when the unit is finished.
// Field guide: see u1.cases-drill-1.js.

FC.cases('scams', 'u1', [

  /* ---------- a message that asks nothing ---------- */
  { id: 'g-ret-water', use: 'return', tier: 'clean', setting: 'home', topic: 'planned work on the water supply',
    text: "Hartley Water texts Beth: 'Planned work on your street on Tuesday between 8am and noon means your water may be off.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'Planned work on your street on Tuesday between 8am and noon means your water may be off' },
    reason: { D1: 'The text only tells Beth what will happen: {cue:D1}. It asks her for nothing and gives her no link, number or app.' },
    not: { outcome: 'access', why: 'It does not ask her to sign in, to give a code or to press anything. It gives her news about the water.' },
    wouldChange: 'If the text had said "sign in at this link to register for a free water bottle", she would be asked to sign in, and it would be {a:D1.access}.' },

  { id: 'g-ret-pool', use: 'return', tier: 'clean', setting: 'leisure', topic: 'a pool closed for cleaning',
    text: "The leisure centre emails its members: 'The pool is closed on Monday for cleaning. It reopens at 7am on Tuesday.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'The pool is closed on Monday for cleaning. It reopens at 7am on Tuesday' },
    reason: { D1: 'The email only tells the members when the pool is shut and when it opens again: {cue:D1}. It asks for nothing and gives them no link, number or app.' },
    not: { outcome: 'details', why: 'It does not ask any member to confirm a booking or to tell the centre anything about themselves. It only gives news.' },
    wouldChange: 'If the email had asked each member to reply with their date of birth to keep their place, it would be {a:D1.details}.' },

  { id: 'g-ret-pension', use: 'return', tier: 'varied', setting: 'money', topic: 'a pension statement in the online account',
    text: "A pension provider texts Rachel: 'Your annual statement is available in your online account.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'Your annual statement is available in your online account' },
    reason: { D1: 'The text tells Rachel that her statement is ready and where it is: {cue:D1}. The online account is one she already has, so nothing new is offered, and nothing is asked.' },
    not: { outcome: 'access', why: 'Reading the statement would mean signing in to the account, but the text does not ask her to. It only says where the statement is.' },
    wouldChange: 'If the text had said "sign in at this link to see your statement", it would ask for a sign-in, and it would be {a:D1.access}.' },

  { id: 'g-ret-results', use: 'return', tier: 'varied', setting: 'health', topic: 'test results ready for an appointment',
    text: "Dr Okoye's surgery texts Ife: 'Your test results are back. Dr Okoye will go through them with you at your appointment on Thursday at 9.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'Your test results are back. Dr Okoye will go through them with you at your appointment on Thursday at 9' },
    reason: { D1: 'The text tells Ife that her results are back and when they will be discussed: {cue:D1}. It asks her for nothing and gives her no link, number or app.' },
    not: { outcome: 'details', why: 'It does not ask her to confirm her date of birth or anything else about herself before the appointment. It only gives news.' },
    wouldChange: 'If the text had asked her to reply with her date of birth to receive the results, it would be {a:D1.details}.' },

  /* ---------- the baseline check: six cases, three where nothing is wrong ---------- */
  { id: 'g-base-signin', use: 'baseline', tier: 'clean', setting: 'money', topic: 'a new sign-in notice in the banking app',
    text: "Aisha opens her banking app and finds a notice in its own message centre: 'A new device, an Orbit phone, signed in to your account at 14.02 today. If this was you, you do not need to do anything.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'If this was you, you do not need to do anything' },
    reason: { D1: 'The notice only tells Aisha that something has happened: {cue:D1}. It asks her for nothing, and it gives her no link, number or app of its own.' } },

  { id: 'g-base-tiler', use: 'baseline', tier: 'clean', setting: 'home', topic: 'a tiler’s invoice that matches the quote',
    text: "Ayo hired a tiler for her bathroom and agreed £640 in writing. After the job the tiler's invoice arrives: 'Total: £640, as quoted. Please pay by bank transfer to the account on your quote, within 14 days.'",
    route: { D1: ['money'] },
    cues: { D1: 'Please pay by bank transfer to the account on your quote, within 14 days' },
    reason: { D1: 'The invoice asks Ayo to pay: {cue:D1}. That is a request for money, whether or not it is a fair one.' } },

  { id: 'g-base-realcode', use: 'baseline', tier: 'clean', setting: 'home', topic: 'a code typed into the site she opened',
    text: "Sofia asks the website she banks with to reset her password. The site's page says: 'We have sent a code to your phone. Type it here.' Her phone buzzes with the code, and she types it into the same page.",
    route: { D1: ['access'] },
    cues: { D1: 'We have sent a code to your phone. Type it here' },
    reason: { D1: 'The page asks Sofia to type in a code: {cue:D1}. That is a request for a way into an account, whether or not she started it herself.' } },

  { id: 'g-base-parcelfee', use: 'baseline', tier: 'clean', setting: 'shopping', topic: 'a parcel held for a fee',
    text: "A text reaches Dev: 'Swift Parcel: your parcel is held at the depot. Pay a £1.45 redelivery fee at swiftparcel-fee.com within 24 hours or it will be returned.'",
    route: { D1: ['money'] },
    cues: { D1: 'Pay a £1.45 redelivery fee at swiftparcel-fee.com within 24 hours' },
    reason: { D1: 'The text asks Dev to pay a fee at an address: {cue:D1}. That is a request for money, however small.' } },

  { id: 'g-base-callercode', use: 'baseline', tier: 'clean', setting: 'money', topic: 'a bank caller who wants a code read out',
    text: "A caller says that he is from Halbrook Bank's fraud team. 'A payment is being made from your account right now,' he says. 'I have just texted you a code. Read it to me and I will stop it.'",
    route: { D1: ['access'] },
    cues: { D1: 'Read it to me and I will stop it' },
    reason: { D1: 'The caller asks the customer to read out a code that has just come to her phone: {cue:D1}. That is a request for a way into her account.' } },

  { id: 'g-base-refundshare', use: 'baseline', tier: 'clean', setting: 'home', topic: 'an overcharge refund that needs a view of the computer',
    text: "A woman rings and says that she is from the electricity company: 'You have been overcharged £62 and I will put it back. Press Share in this meeting app, so that I can see your computer and process the refund.'",
    route: { D1: ['device'] },
    cues: { D1: 'Press Share in this meeting app, so that I can see your computer and process the refund' },
    reason: { D1: 'The caller asks the customer to let her watch the computer: {cue:D1}. That is a request about the device itself.' } }
]);
