// Political Ideologies, Unit Three: fresh cases kept back for later days (second file: two names, three cases each).
// Run as whole routes: every case carries marked words and a reason for every question, the first question of the key included.

FC.cases('ideology', 'u3', [

  /* ---------- Populism with nothing attached ---------- */
  { id: 'n-ret-parking', use: 'return', tier: 'varied', setting: 'town', topic: 'free parking for councillors',
    text: "From a flyer: 'The councillors voted themselves free parking and put the charge up for everyone else. They are laughing at the ordinary people of this country. Show them what you think at the polls.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { D1: 'the ordinary people of this country',
            N1: ['The councillors voted themselves free parking and put the charge up for everyone else', 'They are laughing at the ordinary people of this country'],
            N2: 'Show them what you think at the polls' },
    reason: { D1: 'The flyer speaks for the ordinary people of one country: {cue:D1}.',
              N1: 'It sets ordinary people against a few at the top, the councillors, and stops there: {cue:N1}. No borders, culture or industry are put first.',
              N2: 'The remedy is the polls: {cue:N2}.' },
    not: { outcome: 'natpop', why: '{o:natpop} would say what the country\'s borders, culture or industry should be. The flyer says only that the councillors have laughed at ordinary people.' } },

  { id: 'n-ret-payrise', use: 'return', tier: 'varied', setting: 'housing', topic: 'a pay rise for ministers',
    text: "From a column: 'The ministers have just given themselves a pay rise while ordinary people of this country wait years for a repair on their homes. They do not live like us and they do not answer to us. Vote them out on the sixth.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { D1: 'ordinary people of this country',
            N1: ['The ministers have just given themselves a pay rise while ordinary people of this country wait years for a repair on their homes', 'They do not live like us and they do not answer to us'],
            N2: 'Vote them out on the sixth' },
    reason: { D1: 'The column speaks for ordinary people of one country: {cue:D1}.',
              N1: 'It sets ordinary people against a few at the top, the ministers: {cue:N1}. It adds nothing about the country\'s borders, culture or industry.',
              N2: 'The remedy is to vote them out: {cue:N2}. The vote stays.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would speak for everyone with nobody named as the other side. This column names the ministers as the other side.' } },

  { id: 'n-ret-exam-fees', use: 'return', tier: 'varied', setting: 'schooling', topic: 'fees put up by the exam board',
    text: "From a parent's post: 'The heads of the exam board and the ministers who appointed them have put the fees up again. Ordinary families of this country are the ones who pay. Cast your vote against all of them in June.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { D1: 'Ordinary families of this country are the ones who pay',
            N1: ['The heads of the exam board and the ministers who appointed them have put the fees up again', 'Ordinary families of this country are the ones who pay'],
            N2: 'Cast your vote against all of them in June' },
    reason: { D1: 'The post speaks for the ordinary families of one country: {cue:D1}.',
              N1: 'It sets ordinary people against a few at the top, the exam board\'s heads and the ministers: {cue:N1}. Nothing more is attached.',
              N2: 'The remedy is a vote: {cue:N2}.' },
    not: { outcome: 'natpop', why: '{o:natpop} would also say what the country\'s borders, culture or industry should be. The post says only that the fees have gone up and who pays.' } },

  /* ---------- Nazism ---------- */
  { id: 'n-ret-stalls', use: 'return', tier: 'varied', setting: 'money', topic: 'market stalls reserved by descent',
    text: "From a poster of the Black Hand of Tolvar: 'Only the people of the high blood may hold a market stall. The lower peoples are made to serve, and not to sell. The Hand asks every citizen to vote for it on the twelfth, and promises to write this into the law.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['keep'] },
    cues: { D1: 'Only the people of the high blood may hold a market stall',
            N1: 'Only the people of the high blood may hold a market stall. The lower peoples are made to serve, and not to sell',
            N2: 'The Hand asks every citizen to vote for it on the twelfth' },
    reason: { D1: 'The poster puts one people first, marked out by its blood: {cue:D1}.',
              N1: 'It sorts peoples into "the high blood" and "the lower peoples", who are made to serve: {cue:N1}. That ranks peoples by blood.',
              N2: 'The Hand asks citizens to vote for it: {cue:N2}. The vote is left in place, and for this name that changes nothing.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would speak for everyone in the country as equals. This poster divides them by blood and sets one people above the other.' } },

  { id: 'n-ret-clinic', use: 'return', tier: 'varied', setting: 'health', topic: 'a clinic and two doors',
    text: "From the programme of the Order of the Spear: 'There will be one clinic door for the high blood and another for the lower peoples, because the lower peoples are not worth the same care. Elections will be abolished once the Order governs.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['aside'] },
    cues: { D1: 'one clinic door for the high blood',
            N1: 'the lower peoples are not worth the same care',
            N2: 'Elections will be abolished once the Order governs' },
    reason: { D1: 'The programme puts one people first, marked out by its blood: {cue:D1}.',
              N1: 'It says the lower peoples are not worth the same care as the high blood: {cue:N1}. That ranks peoples by blood.',
              N2: 'Elections will be abolished: {cue:N2}. That is {a:N2.aside}, and it does not change the name, because the ranking decides it.' },
    not: { outcome: 'fasc', why: '{o:fasc} also pushes elections aside, but it ranks nobody by blood. This programme does.' } },

  { id: 'n-ret-statue', use: 'return', tier: 'varied', setting: 'town', topic: 'a statue in every square',
    text: "From a speech by the leader of the White Tower: 'The first blood built this country, and it is higher than all the peoples who came after it. The later peoples will pay for the statue of the first blood in every town square, and they will not speak against it. Dissent is treason against the blood.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['aside'] },
    cues: { D1: 'The first blood built this country',
            N1: 'it is higher than all the peoples who came after it',
            N2: 'they will not speak against it. Dissent is treason against the blood' },
    reason: { D1: 'The speech puts one people first, marked out by its blood: {cue:D1}.',
              N1: 'It says the first blood is "higher than all the peoples who came after it": {cue:N1}. That ranks peoples by blood.',
              N2: 'Dissent is treason and the later peoples will not speak against it: {cue:N2}. That is {a:N2.aside}, and the ranking decides the name.' },
    not: { outcome: 'fasc', why: '{o:fasc} also silences dissent, but it ranks nobody by blood. This speech places the first blood above the rest.' } }
]);
