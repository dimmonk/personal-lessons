// Political Ideologies, Unit Five: cases shown inside cards, part one (the first two names).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// Every text is invented. No person, party, country or event is real, and no text says what any real person believes.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues.D1 / cues.R1 are the exact phrases in the text that decide the first question and this unit's question (one phrase,
// or a list of phrases); the app marks them, always in the same style. segments are the tappable pieces for "tap the words"
// prompts; note is shown if that piece is tapped in error. reason[STEP] is the reason for this case's answer to that question.

FC.cases('ideology', 'u5', [

  /* ---------- Classical liberalism ---------- */
  { id: 'i5-clib-meet', use: 'teach', tier: 'clean', setting: 'town', topic: 'a permit to play on a public street', name: 'The street-music petition',
    text: "From a petition by the Lowfield Street Musicians: 'Every person has the right to play, to speak and to sell what they make on a public street. The council has its proper jobs: the police who keep the peace, the courts that settle disputes and the fire service that answers a call. Licensing who may sing is not one of them. Protect our rights, and then leave us alone.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Every person has the right to play, to speak and to sell what they make on a public street',
            R1: ['The council has its proper jobs: the police who keep the peace, the courts that settle disputes and the fire service that answers a call',
                 'Protect our rights, and then leave us alone'] } },

  { id: 'i5-clib-again', use: 'teach', tier: 'clean', setting: 'work', topic: 'hiring a helper without leave from an official', name: 'The moving-firm letter',
    text: "From a letter to a newspaper by Anwen Rhys, who runs a small moving firm: 'Nobody should need leave from an official to hire a helper, to set a price or to keep what they earn. Each of us is free to work, to bargain and to trade. The government should run the courts and the police, make sure that contracts are kept, and otherwise stay out of it.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Each of us is free to work, to bargain and to trade',
            R1: 'The government should run the courts and the police, make sure that contracts are kept, and otherwise stay out of it' },
    segments: [
      { text: 'Nobody should need leave from an official to hire a helper, to set a price or to keep what they earn', note: 'That says what people should be free to do. It is what the text puts first. It does not yet say what the text wants the government to do.' },
      { text: 'Each of us is free to work, to bargain and to trade', note: 'That is the freedom the text puts first. What the text wants done is in the sentence after it.' },
      { text: 'The government should run the courts and the police, make sure that contracts are kept, and otherwise stay out of it' }
    ] },

  { id: 'i5-clib-check', use: 'check', tier: 'clean', setting: 'money', topic: 'a market stall and the committee',
    text: "Mirela Tosc has traded at the Eastgate market for thirty years. 'Each of us is free to buy from anyone and sell to anyone,' she told the market committee. 'The government should keep the roads safe and the courts open, and otherwise leave traders alone.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Each of us is free to buy from anyone and sell to anyone',
            R1: 'The government should keep the roads safe and the courts open, and otherwise leave traders alone' },
    segments: [
      { text: 'Mirela Tosc has traded at the Eastgate market for thirty years', note: 'That says who she is. It says nothing about what she wants done.' },
      { text: 'Each of us is free to buy from anyone and sell to anyone', note: 'That is the freedom she puts first. It says what each trader may do, and nothing yet about what she wants the government to do.' },
      { text: 'The government should keep the roads safe and the courts open, and otherwise leave traders alone' }
    ],
    reason: { D1: 'She says what each trader is free to do and puts it first: {cue:D1}. She sets no side against another.',
              R1: 'She asks the government for a few jobs and no more: {cue:R1}. Nothing is asked of it for anyone beyond that.' } },

  /* ---------- Modern liberalism ---------- */
  { id: 'i5-modlib-meet', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'a school and a doctor in every district', name: 'The fair-start leaflet',
    text: "From a leaflet of the Ashgrove Fair Start Group: 'Each person has the right to speak, to believe and to keep what they earn, and the government must protect those rights. But a right means little to a child who begins life with no school within reach and no doctor to call. We ask the government to give everyone a fair start: a school in every district, health care for anyone who is ill, help for anyone who loses work, and fair rules for the businesses that sell to us. We will all pay for it together, through our taxes.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each person has the right to speak, to believe and to keep what they earn',
            R1: ['the government must protect those rights',
                 'We ask the government to give everyone a fair start: a school in every district, health care for anyone who is ill, help for anyone who loses work, and fair rules for the businesses that sell to us'] } },

  { id: 'i5-modlib-again', use: 'teach', tier: 'clean', setting: 'health', topic: 'a clinic a bus ride away', name: 'The clinic-opening speech',
    text: "From a speech at the opening of a new clinic in Graywater: 'Everyone has the right to say what they think and to choose their own life. A right is worth more when it comes with a fair start. The government should give everyone a clinic a bus ride away, a place at a good school, and help to find another job when the mill shuts. And everyone should pay for it, in proportion to what they earn.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Everyone has the right to say what they think and to choose their own life',
            R1: 'The government should give everyone a clinic a bus ride away, a place at a good school, and help to find another job when the mill shuts' },
    segments: [
      { text: 'Everyone has the right to say what they think and to choose their own life', note: 'That is the freedom the text puts first. It is not yet what the text wants done.' },
      { text: 'A right is worth more when it comes with a fair start', note: 'That says the text wants a fair start. The words that say what is to be done to give it are in the sentence after.' },
      { text: 'The government should give everyone a clinic a bus ride away, a place at a good school, and help to find another job when the mill shuts' },
      { text: 'And everyone should pay for it, in proportion to what they earn', note: 'That says who pays. It is part of the picture. What you tap is the sentence that says what the government should give.' }
    ] },

  { id: 'i5-modlib-check', use: 'check', tier: 'clean', setting: 'housing', topic: 'homes anyone can afford to rent',
    text: "Council Member Ines Varga told a public meeting: 'Each of us is free to rent from whom we choose, and the government must protect that. But freedom to rent means little to someone with no home to rent. We ask the government to build homes that anyone can afford and to pay the rent of anyone between jobs, so that everyone starts from somewhere, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each of us is free to rent from whom we choose',
            R1: 'We ask the government to build homes that anyone can afford and to pay the rent of anyone between jobs' },
    reason: { D1: 'She says what each person is free to do, and what that freedom needs: {cue:D1}. She names no side to be against.',
              R1: 'She asks the government for more than protection: {cue:R1}. Homes and rent are to be given, and paid for together.' },
    not: { outcome: 'clib', why: 'She does say that the government must protect each person’s freedom to rent. That is where {o:clib} would stop. She goes on to ask the government to give people homes and rent money.' } },

  /* ---------- The word the third name leans on (shown by the term card; asked of nothing) ---------- */
  { id: 'i5-term-steps', use: 'teach', tier: 'clean', setting: 'town', topic: 'steps at a town hall entrance', name: 'The town-hall steps',
    text: "The Fennmoor town hall has a stone stair at its only entrance. The clerk says, 'Anyone may come in and apply for a permit, and the rules are exactly the same for each person.' Rafael uses a wheelchair and cannot get up the stair. The council builds a ramp at the side door, and only the people who need it will use it." },

  /* ---------- Group equality ---------- */
  { id: 'i5-idegal-meet', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'an entry test held on one day in the city', name: 'The hill-villages letter',
    text: "From an open letter by parents in the Tessel hill villages: 'The county school's entry test is the same for every child: one paper, one day, one room in the city. No rule names the hill villages. Yet in ten years no child from the villages has passed, because the only bus reaches the city after the test begins. Rules that treat every child alike have left our children behind. We ask that the rules be changed, with a test day held in the villages, until results come out as fair for the villages as for the city. We do not ask for anyone to be placed above anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'We do not ask for anyone to be placed above anyone',
            R1: ['Rules that treat every child alike have left our children behind',
                 'We ask that the rules be changed, with a test day held in the villages, until results come out as fair for the villages as for the city'] } },

  { id: 'i5-idegal-again', use: 'teach', tier: 'clean', setting: 'work', topic: 'a lifting test and an interview at shift change', name: 'The dock-hiring report',
    text: "From a report by the Orbeck Women's Forum: 'The dock authority's hiring rules are the same for everyone: one lifting test with a single bar weight, and an interview held at the five o'clock shift change. Not a word of them mentions sex. Yet in fifteen years almost no woman has been taken on, because the bar is set for the tallest applicants and the interview time clashes with the school run. Treating everyone alike has left women behind. The authority should change both rules until hiring comes out fair across men and women. Nobody is asking for a woman to be placed above a man.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'Nobody is asking for a woman to be placed above a man',
            R1: ['Treating everyone alike has left women behind',
                 'The authority should change both rules until hiring comes out fair across men and women'] },
    segments: [
      { text: "The dock authority's hiring rules are the same for everyone: one lifting test with a single bar weight, and an interview held at the five o'clock shift change", note: 'That says what the rules are and that they are the same for everyone. It is part of what you point to. The words that say what the text wants done come later.' },
      { text: 'Treating everyone alike has left women behind', note: 'That says the rules leave a group behind. It is half of what you point to. The other half is what the text wants done about it.' },
      { text: 'The authority should change both rules until hiring comes out fair across men and women' },
      { text: 'Nobody is asking for a woman to be placed above a man', note: 'That says nobody is to be placed above anyone. It is true of the text, and it matters. What you tap is the sentence that says what is to be done.' }
    ] },

  { id: 'i5-idegal-check', use: 'check', tier: 'clean', setting: 'work', topic: 'a website form blind applicants cannot read',
    text: "A disability charity wrote to the Eskmouth water company: 'Every application for a job here is made on one website form, the same for every applicant. The form cannot be read by the software that blind applicants use. It is fair on its face, and it shuts blind applicants out. We ask the company to change the form until blind applicants are hired as often as anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'until blind applicants are hired as often as anyone',
            R1: ['It is fair on its face, and it shuts blind applicants out', 'We ask the company to change the form'] },
    reason: { D1: 'The text wants blind applicants treated fairly, and says when that will be so: {cue:D1}. It sets no side against another.',
              R1: 'The form treats every applicant alike, and the text says that this is what shuts one group out: {cue:R1}. It asks for the form to change, not for anyone to be given a school or a doctor.' },
    not: { outcome: 'modlib', why: 'The text asks for something to change, as {o:modlib} does. But it asks for no school, no doctor and no help for everyone. It names one form that treats everyone alike and leaves one group out, and asks for that form to change.' } }
]);
