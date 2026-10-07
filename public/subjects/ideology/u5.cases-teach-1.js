// Political Ideologies, Unit Five: cases shown inside cards, part one (the three names, one case each, and a check each).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// Every text is invented. No person, party, country or event is real, and no text says what any real person believes.
// setting is one of subject.settings; cues.D1 / cues.R1 are the exact phrases that decide the first question and this unit's
// question (the app marks them); segments are the tappable pieces for "tap the words" prompts.

FC.cases('ideology', 'u5', [

  { id: 'i5-clib-meet', use: 'teach', tier: 'clean', setting: 'town', topic: 'a permit to play on a public street', name: 'The street-music petition',
    text: "From a petition by the Lowfield Street Musicians: 'Every person has the right to play, to speak and to sell what they make on a public street. The council has its proper jobs: the police who keep the peace, the courts that settle disputes and the fire service that answers a call. Licensing who may sing is not one of them. Protect our rights, and then leave us alone.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Every person has the right to play, to speak and to sell what they make on a public street',
            R1: ['The council has its proper jobs: the police who keep the peace, the courts that settle disputes and the fire service that answers a call',
                 'Protect our rights, and then leave us alone'] } },

  { id: 'i5-clib-check', use: 'check', tier: 'clean', setting: 'money', topic: 'a market stall and the committee',
    text: "Mirela Tosc has traded at the Eastgate market for thirty years. 'Each of us is free to buy from anyone and sell to anyone,' she told the market committee. 'The government should keep the roads safe and the courts open, and otherwise leave traders alone.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Each of us is free to buy from anyone and sell to anyone',
            R1: 'The government should keep the roads safe and the courts open, and otherwise leave traders alone' },
    segments: [
      { text: 'Mirela Tosc has traded at the Eastgate market for thirty years', note: 'That says who she is, not what she wants done.' },
      { text: 'Each of us is free to buy from anyone and sell to anyone', note: 'That is the freedom she puts first. It says what traders may do, not what the government should do.' },
      { text: 'The government should keep the roads safe and the courts open, and otherwise leave traders alone' }
    ],
    reason: { D1: 'She puts first what each trader is free to do: {cue:D1}.',
              R1: 'She wants the government to keep the roads safe and the courts open, and to do nothing else.' } },

  { id: 'i5-modlib-meet', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'a school and a doctor in every district', name: 'The fair-start leaflet',
    text: "From a leaflet of the Ashgrove Fair Start Group: 'Each person has the right to speak, to believe and to keep what they earn, and the government must protect those rights. But a right means little to a child who begins life with no school within reach and no doctor to call. We ask the government to give everyone a fair start: a school in every district, health care for anyone who is ill, help for anyone who loses work, and fair rules for the businesses that sell to us. We will all pay for it together, through our taxes.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each person has the right to speak, to believe and to keep what they earn',
            R1: ['the government must protect those rights',
                 'We ask the government to give everyone a fair start: a school in every district, health care for anyone who is ill, help for anyone who loses work, and fair rules for the businesses that sell to us'] } },

  { id: 'i5-modlib-check', use: 'check', tier: 'clean', setting: 'housing', topic: 'homes anyone can afford to rent',
    text: "Council Member Ines Varga told a public meeting: 'Each of us is free to rent from whom we choose, and the government must protect that. But freedom to rent means little to someone with no home to rent. We ask the government to build homes that anyone can afford and to pay the rent of anyone between jobs, so that everyone starts from somewhere, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each of us is free to rent from whom we choose',
            R1: 'We ask the government to build homes that anyone can afford and to pay the rent of anyone between jobs' },
    reason: { D1: 'She says what each person is free to do, and what that freedom needs: {cue:D1}.',
              R1: 'She asks the government for more than protection: {cue:R1}. Homes and rent money are to be given, and paid for together.' },
    not: { outcome: 'clib', why: 'She does ask the government to protect the freedom to rent, which is where {o:clib} would stop. But she goes on to ask for homes and rent money.' } },

  { id: 'i5-term-steps', use: 'teach', tier: 'clean', setting: 'town', topic: 'steps at a town hall entrance', name: 'The town-hall steps',
    text: "The Fennmoor town hall has a stone stair at its only entrance. The clerk says, 'Anyone may come in and apply for a permit, and the rules are exactly the same for each person.' Rafael uses a wheelchair and cannot get up the stair. The council builds a ramp at the side door, and only the people who need it will use it." },

  { id: 'i5-idegal-meet', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'an entry test held on one day in the city', name: 'The hill-villages letter',
    text: "From an open letter by parents in the Tessel hill villages: 'The county school's entry test is the same for every child: one paper, one day, one room in the city. No rule names the hill villages. Yet in ten years no child from the villages has passed, because the only bus reaches the city after the test begins. Rules that treat every child alike have left our children behind. We ask that the rules be changed, with a test day held in the villages, until results come out as fair for the villages as for the city. We do not ask for anyone to be placed above anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'We do not ask for anyone to be placed above anyone',
            R1: ['Rules that treat every child alike have left our children behind',
                 'We ask that the rules be changed, with a test day held in the villages, until results come out as fair for the villages as for the city'] } },

  { id: 'i5-idegal-check', use: 'check', tier: 'clean', setting: 'work', topic: 'a website form blind applicants cannot read',
    text: "A disability charity wrote to Eskmouth city council about the city's water company: 'Every application for a job there is made on one website form, the same for every applicant. The form cannot be read by the software that blind applicants use. It is fair on its face, and it shuts blind applicants out. We ask the council to make the company change the form until blind applicants are hired as often as anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'until blind applicants are hired as often as anyone',
            R1: ['It is fair on its face, and it shuts blind applicants out', 'We ask the council to make the company change the form'] },
    reason: { D1: 'The text wants blind applicants treated fairly, and says when that will be so: {cue:D1}.',
              R1: 'The form treats every applicant alike, and the text says that is what shuts one group out: {cue:R1}.' },
    not: { outcome: 'modlib', why: 'Like {o:modlib}, the text asks for something to change. But it asks for no school or doctor for everyone: it blames one form that leaves one group out.' } }
]);
