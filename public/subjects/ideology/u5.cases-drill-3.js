// Political Ideologies, Unit Five: drill cases for the fourth stage (the whole route, no help), varied and misleading.
// Every question is asked here, starting with the first question of the key, so every case carries marked words and a reason
// for that question too (D1). echo names a teaching case whose story this one resembles while its name differs: the feedback
// says so, which is how the "does it look like a case you know?" second look is practiced. also lists an answer the case shows
// as well as its own, which loses to its own by the key's tie-break. All texts are invented.

FC.cases('ideology', 'u5', [

  /* ---------- Varied ---------- */
  { id: 'i5-r-clib2', use: 'drill', tier: 'varied', setting: 'housing', topic: 'a room rented at a price both sides accept',
    text: "A tenant wrote to the Westgate Herald: 'I am free to rent a room at the price I can pay, and the owner is free to accept it. Neither of us needs the council's leave. Let the courts hold us to what we sign, and let the council keep out of the rest.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'I am free to rent a room at the price I can pay, and the owner is free to accept it',
            R1: 'Let the courts hold us to what we sign, and let the council keep out of the rest' },
    reason: { D1: 'The text puts first what each person is free to do: {cue:D1}. A tenant and an owner are named, and the text sets neither against the other.',
              R1: 'The courts are to hold people to what they sign, and the council is to keep out of the rest: {cue:R1}.' },
    not: { outcome: 'modlib', why: 'The text asks the council to give nothing, not a home and not a rent payment. A text that asked the government to give everyone a fair start would be {o:modlib}.' } },

  { id: 'i5-r-modlib2', use: 'drill', tier: 'varied', setting: 'work', topic: 'retraining and a payment when a shop fails',
    text: "At the Easton Chamber of Trade, the chair said: 'Each of us is free to start a business, and the government should protect that. A shop that fails should not leave the people who worked in it with nothing. We ask the government to pay for retraining and a fair payment for anyone out of work, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each of us is free to start a business, and the government should protect that',
            R1: 'We ask the government to pay for retraining and a fair payment for anyone out of work, and we will all pay for it together' },
    reason: { D1: 'The text puts first what each person is free to do: {cue:D1}. It names shops and the people who worked in them, and sets neither against the other.',
              R1: 'The government is to pay for retraining and a payment for anyone out of work: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The text begins with the freedom to start a business and the government protecting it, as {o:clib} does. It then asks the government to pay for retraining and a payment, which {o:clib} would not.' } },

  { id: 'i5-r-idegal2', use: 'drill', tier: 'varied', setting: 'borders', topic: 'a border post with one form and one office',
    text: "From a statement by the Marrowmouth river villages: 'The border post asks every traveler for the same stamped form, from one office, open on weekdays. The rule treats everyone alike, and it leaves the people of the river villages, who have no office within a day's walk, unable to cross for work or for a funeral. We ask the post to change its form and its hours until river villagers cross as often as anyone. We do not ask for anyone to be placed above anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'We do not ask for anyone to be placed above anyone',
            R1: ['The rule treats everyone alike, and it leaves the people of the river villages', 'We ask the post to change its form and its hours until river villagers cross as often as anyone'] },
    reason: { D1: 'The text wants fair treatment for one group and wants no one placed above another: {cue:D1}.',
              R1: 'A rule that treats everyone alike is said to leave the river villages behind, and the text asks for it to change: {cue:R1}. That is a request for {t:equity}.' },
    not: { outcome: 'modlib', why: 'The text asks the government for no school, no doctor and no help for everyone. It names one rule at a border post that treats everyone alike and leaves one group out, and asks for it to change.' } },

  /* ---------- Misleading ---------- */
  // Talks of a school and a clinic, as the fair-start leaflet does, and asks the government to give nothing.
  { id: 'i5-r-clib3', use: 'drill', tier: 'misleading', setting: 'schooling', topic: 'schools and clinics left to those who run them', echo: 'i5-modlib-meet',
    text: "From a letter by the Hallam Free Schools Society: 'A school and a clinic are good things, and nobody should be stopped from opening one. Each person is free to teach, to heal and to pay for either. The government should keep the courts open, see that promises are kept, and then leave schools and clinics to those who run them. It should not pay for them or run them.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Each person is free to teach, to heal and to pay for either',
            R1: 'The government should keep the courts open, see that promises are kept, and then leave schools and clinics to those who run them. It should not pay for them or run them' },
    reason: { D1: 'The text puts first what each person is free to do: {cue:D1}.',
              R1: 'The government is to keep the courts open and promises kept, and to leave schools and clinics alone: {cue:R1}. It is even told not to pay for them.' },
    not: { outcome: 'modlib', why: 'A school and a clinic are what the fair-start leaflet asked the government to give. This text speaks of the same two things and asks the government to give neither. What decides the name is what the text wants done, not what it is about.' } },

  // Talks of a test that is the same for every child, as the hill-villages letter does, and asks the government to give something.
  { id: 'i5-r-modlib3', use: 'drill', tier: 'misleading', setting: 'town', topic: 'a driving test and paid lessons', echo: 'i5-idegal-meet',
    text: "From a leaflet of the Crossways Fair Start Group: 'The driving test is the same for every applicant, and it is not the test that is wrong. Everyone is owed a fair chance to pass it. But an applicant with no car and no lessons starts a long way back. We ask the government to pay for lessons and a practice car for any applicant who needs them, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Everyone is owed a fair chance to pass it',
            R1: 'We ask the government to pay for lessons and a practice car for any applicant who needs them' },
    reason: { D1: 'The text puts first what everyone is owed: {cue:D1}.',
              R1: 'The government is to pay for lessons and a car for any applicant who needs them: {cue:R1}. The text says the test itself is not wrong.' },
    not: { outcome: 'idegal', why: 'The hill-villages letter also told of a test that is the same for everyone. That letter said the test leaves a group behind and asked for it to change. This text says the test is not what is wrong, names no group, and asks the government to pay for help.' } },

  // Begins with a fair start for everyone, as the clinic speech does, and then says a rule leaves a group behind: the second answer wins.
  { id: 'i5-r-idegal3', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a training program with a driver’s-license entry rule', echo: 'i5-modlib-again',
    also: ['start'],
    text: "From a statement by the Calloway Women's Network: 'Everyone is owed a fair start, and the training program is a good one: free places, paid for by all of us, for anyone out of work. But the program asks for a driving license at the first interview, and in this district most licenses are held by men. A rule that treats every applicant alike has left women out of the program. Change the entry rule until women join as often as men. Nobody is to be placed above anybody.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'Nobody is to be placed above anybody',
            R1: ['A rule that treats every applicant alike has left women out of the program', 'Change the entry rule until women join as often as men'] },
    reason: { D1: 'The text wants fair treatment for women and wants no one placed above another: {cue:D1}.',
              R1: 'The text praises a paid program, and then says a rule that treats every applicant alike has left women out of it: {cue:R1}. When a text shows both a fair start for everyone and a rule that leaves a group behind, the answer is {a:R1.rules}.' },
    not: { outcome: 'modlib', why: 'The text does praise a program that is paid for by all, which is what {o:modlib} asks for. But it goes on to say that a rule that treats every applicant alike has left women out, and asks for that rule to change. When a text shows both, the answer is {o:idegal}.' } }
]);
