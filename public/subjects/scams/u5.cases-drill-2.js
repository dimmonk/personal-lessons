// Scams, Unit Five: drill cases for the second and third stages (one question at a time; then the first answer is shown and the
// learner finishes the route and gives the name). None of these appears in a card. Field guide: see u5.cases-drill-1.js.

FC.cases('scams', 'u5', [  /* ---------- Stage two: one question at a time, on a new case ---------- */
  { id: 'u5-p-dentist', use: 'drill', tier: 'clean', setting: 'health', topic: 'a new-patient form on a dentist’s website',
    text: "Jun wants to see a new dentist. He types the Elm Dental website address into his browser himself and fills in the new-patient form, which asks for his name, his date of birth and the name of his old dentist.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { F1: 'his name, his date of birth and the name of his old dentist', F2: ['wants to see a new dentist', 'types the Elm Dental website address into his browser himself'] },
    not: { outcome: 'identitytheft', why: 'A date of birth is asked for, as a copy would ask. Here Jun went to the practice’s own site himself, through an address he typed.' },
    reason: { F1: 'The form asks for facts that identify Jun: {cue:F1}. Nothing is asked about his life.',
              F2: 'Jun decided to see a new dentist, and he went to the practice’s own site through an address he typed: {cue:F2}. What the form asks is what a new patient’s record needs.' } },

  { id: 'u5-p-energy', use: 'drill', tier: 'clean', setting: 'home', topic: 'giving a meter reading by phone',
    text: "Mrs Obi rings her energy company on the number on her latest bill, to give a meter reading. The adviser asks for her account number and the first line of her address so that she can find the account.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { F1: 'her account number and the first line of her address', F2: ['rings her energy company on the number on her latest bill', 'so that she can find the account'] },
    not: { outcome: 'identitytheft', why: 'An account number and an address are asked for, as a copy would ask. Mrs Obi is the one who rang, on the number on her own bill.' },
    reason: { F1: 'The adviser asks for her account number and her address, which identify her: {cue:F1}.',
              F2: 'Mrs Obi rang the number on her own bill, and the adviser asks only for what is needed to find the account: {cue:F2}.' } },

  { id: 'u5-p-loan', use: 'drill', tier: 'clean', setting: 'money', topic: 'a loan nobody applied for',
    text: "An email reaches Callum: 'You have been pre-approved for a loan of £5,000. To release it, send us your National Insurance number and a photo of your driving licence.' Callum has never asked about a loan.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { F1: 'your National Insurance number and a photo of your driving licence', F2: ['An email reaches Callum', 'Callum has never asked about a loan'] },
    not: { outcome: 'realdetails', why: 'A lender does ask for a tax number and a photo of a licence, of someone who has applied. Callum never asked about a loan.' },
    reason: { F1: 'The email asks for a tax number and a photo of a licence, which identify Callum: {cue:F1}.',
              F2: 'The email came to Callum and he never asked about a loan: {cue:F2}. There is nothing he began that the facts could be for.' } },

  { id: 'u5-p-phone', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'a free phone upgrade by call',
    text: "A caller says to Dara that her phone contract is about to end, and offers her a free upgrade. To go ahead he needs her date of birth, her address and a photo of her passport. Dara did not ring them.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { F1: 'her date of birth, her address and a photo of her passport', F2: ['A caller says to Dara', 'Dara did not ring them'] },
    not: { outcome: 'realdetails', why: 'A phone company may ask a customer for a date of birth when she rings about an upgrade. Dara did not ring them.' },
    reason: { F1: 'The caller asks for papers and facts that identify Dara: {cue:F1}.',
              F2: 'The call came to Dara, and she began nothing: {cue:F2}. The answer is the one for something that does not fit.' } },

  { id: 'u5-p-cycling', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a stranger who comments on a cycling photo',
    text: "A stranger comments on Sol's cycling photo and then sends him a private message: 'Great ride! Do you live round here?' Sol has never seen his name before. Over the next week the stranger asks where Sol works and when he is usually at home.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { F1: ['Sol has never seen his name before', 'asks where Sol works and when he is usually at home'], F2: 'sends him a private message' },
    not: { outcome: 'identitytheft', why: 'He asks for no paper and no number. What he wants to know about is where Sol works and when he is at home.' },
    reason: { F1: 'A stranger who reached Sol out of nowhere asks about his work and about when he is home: {cue:F1}. He asks for no paper or number.',
              F2: 'Sol began nothing. A stranger sent him a private message first: {cue:F2}.' } },

  { id: 'u5-p-wrongnumber', use: 'drill', tier: 'clean', setting: 'relationships', topic: 'a second wrong-number text',
    text: "A text reaches Neil: 'Hi, is this Alex? Sorry, wrong number! But since we are both here, how is your week?' Neil has never met the sender. The next day she asks whether he lives in the city and who he shares a flat with.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { F1: ['Neil has never met the sender', 'asks whether he lives in the city and who he shares a flat with'], F2: 'Sorry, wrong number!' },
    not: { outcome: 'realdetails', why: 'The questions are small and polite, but the text came to Neil with an excuse, and nothing Neil began needs the answers.' },
    reason: { F1: 'Someone Neil has never met asks about where he lives and who he lives with: {cue:F1}. No paper or number is asked for.',
              F2: 'Neil began nothing. The text came to him, with an excuse for writing: {cue:F2}.' } },



  /* ---------- Stage three: finish the route ---------- */
  { id: 'u5-f-lease', use: 'drill', tier: 'varied', setting: 'home', topic: 'papers for a tenancy after a viewing',
    text: "Anil applied for a flat at Penhallow Lettings by visiting its office. After the viewing the agent says: 'To draw up the tenancy I need your passport, a reference from your employer and your last three payslips.'",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'I need your passport, a reference from your employer and your last three payslips', F1: 'your passport, a reference from your employer and your last three payslips', F2: ['applied for a flat at Penhallow Lettings by visiting its office', 'To draw up the tenancy'] },
    reason: { F1: 'The agent asks for papers that identify Anil and show his work: {cue:F1}. Nothing is asked about his life.',
              F2: 'Anil applied in the agency’s own office, and every paper is for the tenancy that the agent is drawing up: {cue:F2}.' },
    not: { outcome: 'identitytheft', why: 'The list is long and includes a passport. But Anil applied at the agency’s own office, and the agent says what the papers are for.' } },

  { id: 'u5-f-payroll', use: 'drill', tier: 'clean', setting: 'work', topic: 'a payroll form on the first day',
    text: "Ola has accepted a job and signed her contract. On her first day the manager gives her a paper form that asks for her National Insurance number, her address and the account her salary is to be paid into. 'Payroll needs these before the end of the month,' he says.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'a paper form that asks for her National Insurance number, her address and the account her salary is to be paid into', F1: 'her National Insurance number, her address and the account her salary is to be paid into', F2: ['has accepted a job and signed her contract', 'Payroll needs these before the end of the month'] },
    reason: { F1: 'The form asks for a tax number, an address and an account number, which identify Ola: {cue:F1}.',
              F2: 'Ola began this by accepting the job, and what is asked is what paying her needs: {cue:F2}. The same tax number asked for before any contract would not fit.' },
    not: { outcome: 'identitytheft', why: 'A tax number and bank details sound like what a copy asks for. Here they come after a signed contract, on a form from her own employer, and they are what payroll needs.' } },

  { id: 'u5-f-passportoffice', use: 'drill', tier: 'varied', setting: 'government', topic: 'a caller on a flagged passport',
    text: "A caller says that he is from the passport office, and that Ruth's passport has been 'flagged'. 'To clear it I need your passport number, your date of birth and a photo of the page with your picture on it.' Ruth has not applied for anything.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'I need your passport number, your date of birth and a photo of the page with your picture on it', F1: 'your passport number, your date of birth and a photo of the page with your picture on it', F2: ['A caller says that he is from the passport office', 'Ruth has not applied for anything'] },
    reason: { F1: 'The caller asks for a passport number, a date of birth and a photo of the passport page: {cue:F1}.',
              F2: 'The call came to Ruth, and she has not applied for anything that a passport office could be dealing with: {cue:F2}.' },
    not: { outcome: 'realdetails', why: 'A real office does take these facts, from people who have applied. This call came to Ruth, and she began nothing.' } },

  { id: 'u5-f-pension', use: 'drill', tier: 'clean', setting: 'money', topic: 'a pension bonus and a licence photo',
    text: "A text reaches Ade: 'Your pension provider: you may be owed a bonus. To claim it, send a photo of your driving licence and your National Insurance number.' Ade has not been in touch with a pension provider.",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'send a photo of your driving licence and your National Insurance number', F1: 'a photo of your driving licence and your National Insurance number', F2: ['A text reaches Ade', 'Ade has not been in touch with a pension provider'] },
    reason: { F1: 'The text asks for a photo of a licence and a tax number, which identify Ade: {cue:F1}.',
              F2: 'The text came to Ade, and he began nothing with a pension provider: {cue:F2}.' },
    not: { outcome: 'realdetails', why: 'A real pension provider would ask for facts, but of someone who had begun something with it. Ade has not.' } },

  { id: 'u5-f-grief', use: 'drill', tier: 'varied', setting: 'relationships', topic: 'a message on a forum for people who have lost a partner',
    text: "On an online forum for people who have lost a partner, a woman sends Ken a private message: 'I understand how you feel. I lost my husband last year.' Over the next week she asks him where he lives, whether his family is nearby and whether he still works. She has not asked him for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'she asks him where he lives, whether his family is nearby and whether he still works', F1: ['a woman sends Ken a private message', 'asks him where he lives, whether his family is nearby and whether he still works'], F2: 'a woman sends Ken a private message' },
    reason: { F1: 'Someone Ken has never met, who wrote to him first, asks about his home, his family and his work: {cue:F1}. Nothing is asked for.',
              F2: 'Ken began nothing with her. She wrote to him first: {cue:F2}. That she is kind, and that the forum is real, does not change who began it.' },
    not: { outcome: 'realdetails', why: 'The forum is a place Ken chose to join, so it can look like something he began. But the questions about his home and family come from a private message that she began, and nothing he began needs them.' } },

  { id: 'u5-f-marathon', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a stranger who comments on a marathon photo',
    text: "Tess posts a picture of her finishing a marathon. A man she has never met comments and then messages her: 'Brilliant run! What do you do for work? Do you have family to cheer you on?' For a fortnight he writes most evenings and asks about her job, her home town and her plans for the summer. He has not asked her for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'asks about her job, her home town and her plans for the summer', F1: ['A man she has never met comments and then messages her', 'asks about her job, her home town and her plans for the summer'], F2: 'A man she has never met comments and then messages her' },
    reason: { F1: 'A stranger who reached Tess out of nowhere asks about her work, her home town and her plans: {cue:F1}. No paper or number is asked for.',
              F2: 'Tess began nothing with him. A man she has never met messaged her first: {cue:F2}.' },
    not: { outcome: 'identitytheft', why: 'He asks for no paper and no number. What he wants to know about is her life.' } }
]);
