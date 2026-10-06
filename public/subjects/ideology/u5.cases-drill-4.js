// Political Ideologies, Unit Five: drill cases, second stage (the whole route, misleading). echo names a teaching case whose story this
// one resembles while its name differs; also lists an answer the case shows as well, which loses by the key's tie-break.
// Every text is invented. No person, party, country or event is real, and no text says what any real person believes.

FC.cases('ideology', 'u5', [
  { id: 'i5-r-clib3', use: 'drill', tier: 'misleading', setting: 'schooling', topic: 'schools and clinics left to those who run them', echo: 'i5-modlib-meet',
    text: "From a letter by the Hallam Free Schools Society: 'A school and a clinic are good things, and nobody should be stopped from opening one. Each person is free to teach, to heal and to pay for either. The government should keep the courts open, see that promises are kept, and then leave schools and clinics to those who run them. It should not pay for them or run them.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Each person is free to teach, to heal and to pay for either',
            R1: 'The government should keep the courts open, see that promises are kept, and then leave schools and clinics to those who run them. It should not pay for them or run them' },
    reason: { D1: 'The text puts first what each person is free to do: {cue:D1}.',
              R1: 'The government is to keep the courts open and promises kept, and to leave schools and clinics alone: {cue:R1}. It is even told not to pay for them.' },
    not: { outcome: 'modlib', why: 'A school and a clinic are what the fair-start leaflet asked the government to give. This text speaks of the same two things and asks the government to give neither. What decides the name is what the text wants done, not what it is about.' } },

  { id: 'i5-r-modlib3', use: 'drill', tier: 'misleading', setting: 'town', topic: 'a driving test and paid lessons', echo: 'i5-idegal-meet',
    text: "From a leaflet of the Crossways Fair Start Group: 'The driving test is the same for every applicant, and it is not the test that is wrong. Everyone is owed a fair chance to pass it. But an applicant with no car and no lessons starts a long way back. We ask the government to pay for lessons and a practice car for any applicant who needs them, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Everyone is owed a fair chance to pass it',
            R1: 'We ask the government to pay for lessons and a practice car for any applicant who needs them' },
    reason: { D1: 'The text puts first what everyone is owed: {cue:D1}.',
              R1: 'The government is to pay for lessons and a car for any applicant who needs them: {cue:R1}. The text says the test itself is not wrong.' },
    not: { outcome: 'idegal', why: 'The hill-villages letter also told of a test that is the same for everyone. That letter said the test leaves a group behind and asked for it to change. This text says the test is not what is wrong, names no group, and asks the government to pay for help.' } },

  { id: 'i5-r-idegal3', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a training program with a driver’s-license entry rule', echo: 'i5-modlib-meet',
    also: ['start'],
    text: "From a statement by the Calloway Women's Network: 'Everyone is owed a fair start, and the training program is a good one: free places, paid for by all of us, for anyone out of work. But the program asks for a driving license at the first interview, and in this district most licenses are held by men. A rule that treats every applicant alike has left women out of the program. Change the entry rule until women join as often as men. Nobody is to be placed above anybody.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'Nobody is to be placed above anybody',
            R1: ['A rule that treats every applicant alike has left women out of the program', 'Change the entry rule until women join as often as men'] },
    reason: { D1: 'The text wants fair treatment for women and wants no one placed above another: {cue:D1}.',
              R1: 'The text praises a paid program, and then says a rule that treats every applicant alike has left women out of it: {cue:R1}. When a text shows both a fair start for everyone and a rule that leaves a group behind, the answer is {a:R1.rules}.' },
    not: { outcome: 'modlib', why: 'The text does praise a program that is paid for by all, which is what {o:modlib} asks for. But it goes on to say that a rule that treats every applicant alike has left women out, and asks for that rule to change. When a text shows both, the answer is {o:idegal}.' } }
]);
