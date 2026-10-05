// Political Ideologies, Unit Five: fresh cases for later days, three for each name (one for each scheduled return, E9).
// A due name returns as a case the learner has not seen, beside a case of the name they most often take it for. Each is asked as a
// whole route, so each carries marked words and a reason for the first question of the key as well as for this unit's question.
// All texts are invented.

FC.cases('ideology', 'u5', [

  /* ---------- Classical liberalism ---------- */
  { id: 'i5-ret-clib-1', use: 'return', tier: 'clean', setting: 'faith', topic: 'a meeting asking no one’s leave to believe',
    text: "From a notice by the Brook Street Meeting: 'Each person is free to believe, or not, and to say so. The government should keep the peace outside our door and the courts open if we are wronged, and otherwise leave what we believe and how we meet to us.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Each person is free to believe, or not, and to say so',
            R1: 'The government should keep the peace outside our door and the courts open if we are wronged, and otherwise leave what we believe and how we meet to us' },
    reason: { D1: 'The text puts first what each person is free to do: {cue:D1}.',
              R1: 'The government is to keep the peace and the courts and leave the rest: {cue:R1}. Nothing is to be given to anyone.' },
    not: { outcome: 'modlib', why: 'The text asks the government to give nothing. A text that asked it to give everyone a fair start would be {o:modlib}.' } },

  { id: 'i5-ret-clib-2', use: 'return', tier: 'varied', setting: 'money', topic: 'a savings club turning down public money',
    text: "The Harley Street Savers' Club voted on its letter to the minister: 'We are free to save, to lend and to charge what we agree among ourselves. We ask only that the courts be open when someone breaks a promise. We do not want the government's money, and we do not want its permission.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'We are free to save, to lend and to charge what we agree among ourselves',
            R1: "We ask only that the courts be open when someone breaks a promise. We do not want the government's money, and we do not want its permission" },
    reason: { D1: 'The text puts first what the members are free to do: {cue:D1}.',
              R1: 'The club asks for the courts and for nothing else, and turns down money and permission alike: {cue:R1}.' },
    not: { outcome: 'idegal', why: 'The text names no group that is left behind and no rule that treats everyone alike. It asks the government for the courts and for nothing else.' } },

  { id: 'i5-ret-clib-3', use: 'return', tier: 'misleading', setting: 'health', topic: 'a clinic owner who will not change the opening hours', echo: 'i5-x-startrules',
    text: "From a talk by a clinic owner: 'Some say the clinic's hours leave some people out. Every clinic has hours, and the same hours for everyone is what fair means. Each person is free to come, and free to go elsewhere. The government's job is to keep the courts open and the doors honest, and not to change my hours.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Each person is free to come, and free to go elsewhere',
            R1: "The government's job is to keep the courts open and the doors honest, and not to change my hours" },
    reason: { D1: 'The text puts first what each person is free to do: {cue:D1}.',
              R1: 'The text hears the complaint that the hours leave people out, and says the same hours for everyone are fair: {cue:R1}. The government is to keep to the courts and honest dealing.' },
    not: { outcome: 'idegal', why: 'The women’s health statement was also about clinic hours that are the same for every patient. That statement said the hours leave a group behind and asked for them to change. This text says the same hours for everyone are fair, and asks for no change.' } },

  /* ---------- Modern liberalism ---------- */
  { id: 'i5-ret-modlib-1', use: 'return', tier: 'clean', setting: 'schooling', topic: 'a library in every town',
    text: "From a letter by the Garrow Fair Start Group: 'Each of us has the right to speak and to read what we choose. A right to read means little with no book within reach. We ask the government to pay for a library in every town and a computer for every child who has none, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each of us has the right to speak and to read what we choose',
            R1: 'We ask the government to pay for a library in every town and a computer for every child who has none' },
    reason: { D1: 'The text puts first what each person has a right to do: {cue:D1}.',
              R1: 'The government is to pay for libraries and computers that everyone can use: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The text begins with rights, as {o:clib} does. It then asks the government to pay for libraries and computers, which {o:clib} would not.' } },

  { id: 'i5-ret-modlib-2', use: 'return', tier: 'varied', setting: 'work', topic: 'a year of leave for either parent',
    text: "From a speech by Deputy Maren Cole: 'Each of us is free to raise a child the way we choose, and the government should protect that. A parent who must go back to work in a week is not free. We ask the government to pay for a year of leave for either parent, and we will all pay for it through our taxes.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each of us is free to raise a child the way we choose, and the government should protect that',
            R1: 'We ask the government to pay for a year of leave for either parent, and we will all pay for it through our taxes' },
    reason: { D1: 'The text puts first what each person is free to do: {cue:D1}. It names no side against another.',
              R1: 'The government is to pay for leave that either parent can take, and everyone is to pay for it: {cue:R1}.' },
    not: { outcome: 'idegal', why: 'The text names parents and a week back at work, not a group left behind by a rule that treats everyone alike. It asks the government to pay for leave for either parent.' } },

  { id: 'i5-ret-modlib-3', use: 'return', tier: 'misleading', setting: 'borders', topic: 'a bed, a class and an adviser for people who arrive with nothing', echo: 'i5-idegal-again',
    text: "From a speech at the Eastmere welcome centre: 'People who arrive here are free to worship and to speak as they choose, and the government must protect that. Many of them have nothing: no home, no work and no word of our language. We ask the government to pay for a bed, a language class and a job adviser for anyone who arrives with nothing, and we will all pay for it.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'People who arrive here are free to worship and to speak as they choose, and the government must protect that',
            R1: 'We ask the government to pay for a bed, a language class and a job adviser for anyone who arrives with nothing, and we will all pay for it' },
    reason: { D1: 'The text puts first what people are free to do: {cue:D1}.',
              R1: 'The government is to pay for a bed, a class and an adviser for anyone who arrives with nothing: {cue:R1}. The text blames no rule.' },
    not: { outcome: 'idegal', why: 'The dock-hiring report also spoke up for people who were being left behind. That report named hiring rules that treat everyone alike as the cause, and asked for them to change. This text names no rule. It asks the government to pay for help for anyone who arrives with nothing.' } },

  /* ---------- Group equality ---------- */
  { id: 'i5-ret-idegal-1', use: 'return', tier: 'clean', setting: 'town', topic: 'swimming sessions and women left out',
    text: "From a letter by the Lakeside Women's Swimming Circle: 'The town pool opens its lanes in the same sessions for everyone: early morning and late evening. Not a word of the timetable mentions sex. But those hours leave out the women who care for children at those times, and almost no woman swims there. Treating everyone alike has left women out. Change the sessions until women swim as often as men. We are not asking for any group to come before another.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'We are not asking for any group to come before another',
            R1: ['Treating everyone alike has left women out', 'Change the sessions until women swim as often as men'] },
    reason: { D1: 'The text wants fair treatment for women and wants no group to come before another: {cue:D1}.',
              R1: 'A timetable that is the same for everyone is said to leave women out, and the text asks for it to change: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The text names a timetable that is the same for everyone, as {o:clib} would accept. But {o:clib} says that is enough. This text says it has left women out.' } },

  { id: 'i5-ret-idegal-2', use: 'return', tier: 'varied', setting: 'schooling', topic: 'a scholarship form and two years of local grades',
    text: "From a statement by the Dornwick Newcomers' Association: 'The scholarship form asks every applicant for two years of grades from a local school. The rule is the same for all, and it leaves out every child who arrived from overseas this year. A rule that treats every applicant alike has put them at the back. We ask the fund to accept grades from the child's old school until newcomers win scholarships as often as anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'until newcomers win scholarships as often as anyone',
            R1: ['A rule that treats every applicant alike has put them at the back', "We ask the fund to accept grades from the child's old school"] },
    reason: { D1: 'The text wants fair treatment for newcomers, and says when that will be so: {cue:D1}.',
              R1: 'A rule that is the same for all is said to have put newcomers at the back, and the text asks the fund to accept something else: {cue:R1}.' },
    not: { outcome: 'modlib', why: 'The text asks for no school, no doctor and no help for everyone. It names one form that treats every applicant alike and leaves newcomers out, and asks for it to change.' } },

  { id: 'i5-ret-idegal-3', use: 'return', tier: 'misleading', setting: 'town', topic: 'a trader’s permit day held in the city', echo: 'i5-clib-meet',
    text: "From a statement by the Southgate hill traders: 'Every trader needs the same permit, bought at one office on one day, and nobody should be licensed differently. But the office is in the city, and traders from the hill villages cannot get there on the day, so almost none of them hold a permit. Treating everyone alike has left us out. Hold the permit day in the villages until traders from the hills hold permits as often as anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'until traders from the hills hold permits as often as anyone',
            R1: ['Treating everyone alike has left us out', 'Hold the permit day in the villages'] },
    reason: { D1: 'The text wants fair treatment for the hill traders, and says when that will be so: {cue:D1}.',
              R1: 'A permit that is the same for everyone is said to have left the hill traders out, and the text asks for the permit day to move: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The street-music petition also dealt with a permit. That petition said nobody should need one, and asked the council to keep out. This text accepts the permit, says it leaves one group out, and asks for the way it is given to change.' } }
]);
