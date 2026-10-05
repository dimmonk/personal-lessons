// Scams, Unit Five: the three cases of the worked cards. A case used by a worked card carries marked words for every
// question on its route and no reason of its own: the card holds the reasoning. Field guide: see u5.cases-teach-1.js.

FC.cases('scams', 'u5', [

  { id: 'u5-w-hearing', use: 'teach', tier: 'clean', setting: 'health', topic: 'moving a hearing test by phone', name: 'The hearing test',
    text: "Ruth rings Alder Hearing on the number printed on her appointment letter, to move her test to a later day. The receptionist says: 'To find your record, can I take your date of birth and the first line of your address?' Ruth gives them.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'can I take your date of birth and the first line of your address?',
            F1: 'your date of birth and the first line of your address',
            F2: ['Ruth rings Alder Hearing on the number printed on her appointment letter', 'To find your record'] } },

  { id: 'u5-w-running', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'a stranger met via a running page, ten days of questions', name: 'The running page',
    text: "Pip gets a message on a social media app from someone he does not know: 'Hi Pip, I found you through the running page! What do you do for a living? Do you run on your own or with a club?' They write most days for ten days. The stranger asks where he lives, who he lives with and whether he is going away this summer. Nothing else has been asked of him.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'asks where he lives, who he lives with and whether he is going away this summer',
            F1: ['from someone he does not know', 'asks where he lives, who he lives with and whether he is going away this summer'],
            F2: 'from someone he does not know' } },

  { id: 'u5-w-room', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a room in a flat and three things before a viewing', name: 'The room in the flat',
    text: "Ben has used a flat-share website for years. He answers an advert for a room on it, and the person who placed the advert writes back: 'The room is yours if you want it. To hold it until the viewing, send me a photo of your passport, a photo of you holding it and your National Insurance number.'",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'send me a photo of your passport, a photo of you holding it and your National Insurance number',
            F1: 'a photo of your passport, a photo of you holding it and your National Insurance number',
            F2: 'To hold it until the viewing, send me a photo of your passport, a photo of you holding it and your National Insurance number' } }
]);
