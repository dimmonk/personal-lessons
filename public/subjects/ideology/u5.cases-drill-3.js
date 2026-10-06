// Political Ideologies, Unit Five: drill cases, second stage (the whole route, varied).
// Every text is invented. No person, party, country or event is real, and no text says what any real person believes.

FC.cases('ideology', 'u5', [

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
]);
